import { NextRequest, NextResponse } from "next/server";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import {
  VALID_PURCHASABLE_SLUGS,
  type PurchasableSlug,
} from "@/lib/products";

export async function POST(request: NextRequest) {
  // SECURITY: this endpoint grants modules without payment. It exists for
  // local development only and must never run in production — real purchases
  // go through /api/checkout (Stripe) + /api/stripe-webhook.
  if (process.env.NODE_ENV === "production" && process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Not available — use the store checkout" },
      { status: 403 }
    );
  }

  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 }
    );
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { rotationSlugs: string[]; hasPaperTools: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { rotationSlugs, hasPaperTools } = body;

  if (!Array.isArray(rotationSlugs) || rotationSlugs.length === 0) {
    return NextResponse.json(
      { error: "rotationSlugs must be a non-empty array" },
      { status: 400 }
    );
  }

  // Validate all slugs
  for (const slug of rotationSlugs) {
    if (!VALID_PURCHASABLE_SLUGS.includes(slug as PurchasableSlug)) {
      return NextResponse.json(
        { error: `Invalid rotation slug: ${slug}` },
        { status: 400 }
      );
    }
  }

  // Check which modules the user already owns
  const { data: existing } = await supabase
    .from("user_modules")
    .select("rotation_slug")
    .eq("user_id", user.id);

  const ownedSlugs = new Set(
    (existing ?? []).map((m: { rotation_slug: string }) => m.rotation_slug)
  );

  // Only insert modules the user doesn't already own
  const newSlugs = rotationSlugs.filter((s) => !ownedSlugs.has(s));

  if (newSlugs.length === 0) {
    return NextResponse.json({
      message: "All requested rotations are already owned",
      purchased: [],
    });
  }

  const rows = newSlugs.map((slug) => ({
    user_id: user.id,
    rotation_slug: slug,
    has_paper_tools: !!hasPaperTools,
    stripe_payment_id: "test_free_purchase",
  }));

  const { error } = await supabase.from("user_modules").insert(rows);

  if (error) {
    console.error("Purchase insert error:", error);
    return NextResponse.json(
      { error: "Failed to record purchase" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Purchase successful",
    purchased: newSlugs,
  });
}
