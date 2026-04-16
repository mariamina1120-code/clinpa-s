import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
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

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured) {
    return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  });

  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { rotationSlugs: string[]; hasPaperTools: boolean; priceInCents: number; label: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { rotationSlugs, hasPaperTools, priceInCents, label } = body;

  if (!Array.isArray(rotationSlugs) || rotationSlugs.length === 0) {
    return NextResponse.json({ error: "rotationSlugs must be a non-empty array" }, { status: 400 });
  }
  for (const slug of rotationSlugs) {
    if (!VALID_SLUGS.includes(slug as RotationSlug)) {
      return NextResponse.json({ error: `Invalid rotation slug: ${slug}` }, { status: 400 });
    }
  }
  if (!priceInCents || priceInCents < 100) {
    return NextResponse.json({ error: "Invalid price" }, { status: 400 });
  }

  const origin = request.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: priceInCents,
          product_data: {
            name: label,
            description: `ClinPA-S rotation module access`,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      userId: user.id,
      rotationSlugs: rotationSlugs.join(","),
      hasPaperTools: hasPaperTools ? "true" : "false",
    },
    customer_email: user.email,
    success_url: `${origin}/purchase-success`,
    cancel_url: `${origin}/store`,
  });

  return NextResponse.json({ url: session.url });
}
