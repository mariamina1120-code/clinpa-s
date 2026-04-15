import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import type { RotationSlug } from "@/types";

const VALID_SLUGS: RotationSlug[] = [
  "family-medicine",
  "internal-medicine",
  "general-surgery",
  "pediatrics",
  "womens-health",
  "emergency-medicine",
  "behavioral-medicine",
];

// Plain Supabase admin client — no cookies needed, uses service role key
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error("Stripe env vars missing");
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  // Must read the raw body as text so Stripe can verify the signature
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Only process sessions where payment was collected (not free/zero-amount)
    if (session.payment_status !== "paid") {
      return NextResponse.json({ received: true });
    }

    const { userId, rotationSlugs: slugsStr, hasPaperTools: hasPaperStr } =
      session.metadata ?? {};

    if (!userId || !slugsStr) {
      console.error("Missing metadata in checkout session:", session.id);
      return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
    }

    const rotationSlugs = slugsStr
      .split(",")
      .map((s) => s.trim())
      .filter((s) => VALID_SLUGS.includes(s as RotationSlug));

    if (rotationSlugs.length === 0) {
      console.error("No valid rotation slugs in metadata:", slugsStr);
      return NextResponse.json({ error: "No valid rotation slugs" }, { status: 400 });
    }

    const hasPaperTools = hasPaperStr === "true";
    const paymentId =
      typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.id;

    const supabase = getSupabaseAdmin();

    // Find what the user already owns to avoid duplicate rows
    const { data: existing } = await supabase
      .from("user_modules")
      .select("rotation_slug")
      .eq("user_id", userId);

    const ownedSlugs = new Set(
      (existing ?? []).map((m: { rotation_slug: string }) => m.rotation_slug)
    );
    const newSlugs = rotationSlugs.filter((s) => !ownedSlugs.has(s));

    if (newSlugs.length > 0) {
      const rows = newSlugs.map((slug) => ({
        user_id: userId,
        rotation_slug: slug,
        has_paper_tools: hasPaperTools,
        stripe_payment_id: paymentId,
      }));

      const { error } = await supabase.from("user_modules").insert(rows);
      if (error) {
        console.error("Failed to insert modules after payment:", error);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
      }

      console.log(`Unlocked ${newSlugs.join(", ")} for user ${userId} (payment ${paymentId})`);
    }
  }

  // Return 200 for all other event types so Stripe doesn't retry them
  return NextResponse.json({ received: true });
}
