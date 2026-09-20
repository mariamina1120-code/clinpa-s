import type { RotationSlug } from "@/types";

// ─── Product catalog (single source of truth for prices) ─────────────────────
// Prices are validated SERVER-SIDE in /api/checkout — never trust client prices.

export const ROTATION_SLUGS: RotationSlug[] = [
  "family-medicine",
  "internal-medicine",
  "general-surgery",
  "pediatrics",
  "womens-health",
  "emergency-medicine",
  "behavioral-medicine",
];

/** Non-rotation add-on: AI Scribe (voice dictation → AI-written HPI). */
export const AI_SCRIBE_SLUG = "ai-scribe" as const;

// ─── Founder access ───────────────────────────────────────────────────────────
// These accounts bypass all purchase gates (full content + AI Scribe).
// Override or extend via the FOUNDER_EMAILS env var (comma-separated).

const DEFAULT_FOUNDER_EMAILS = [
  "mmmina24@my.trine.edu",
  "mariamina1120@gmail.com",
];

export function isFounderEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const founders = (
    process.env.FOUNDER_EMAILS?.split(",").map((e) => e.trim()) ??
    DEFAULT_FOUNDER_EMAILS
  ).map((e) => e.toLowerCase());
  return founders.includes(email.trim().toLowerCase());
}

export type PurchasableSlug = RotationSlug | typeof AI_SCRIBE_SLUG;

export const VALID_PURCHASABLE_SLUGS: PurchasableSlug[] = [
  ...ROTATION_SLUGS,
  AI_SCRIBE_SLUG,
];

export const PRICES = {
  singleRotation: 2999,
  primaryCareBundle: 7999,
  completeDigital: 14999,
  completePaper: 19999, // includes paper tools + AI Scribe
  aiScribe: 1999,
} as const;

const PRIMARY_CARE: RotationSlug[] = [
  "family-medicine",
  "internal-medicine",
  "pediatrics",
];

function sameSet(a: string[], b: string[]): boolean {
  const setA = new Set(a);
  return b.length === setA.size && b.every((s) => setA.has(s));
}

/**
 * Compute the authoritative price for a cart. Returns null if the cart
 * doesn't match any offered product (reject the checkout).
 */
export function getCartPriceInCents(
  slugs: string[],
  hasPaperTools: boolean
): number | null {
  const unique = Array.from(new Set(slugs));

  if (unique.some((s) => !VALID_PURCHASABLE_SLUGS.includes(s as PurchasableSlug))) {
    return null;
  }

  // AI Scribe add-on (standalone)
  if (sameSet(unique, [AI_SCRIBE_SLUG])) {
    return hasPaperTools ? null : PRICES.aiScribe;
  }

  // Complete bundles
  if (sameSet(unique, ROTATION_SLUGS)) {
    return hasPaperTools ? PRICES.completePaper : PRICES.completeDigital;
  }

  // Paper tools are only sold with the complete bundle
  if (hasPaperTools) return null;

  // Primary care bundle
  if (sameSet(unique, PRIMARY_CARE)) return PRICES.primaryCareBundle;

  // Single rotation
  if (unique.length === 1) return PRICES.singleRotation;

  return null;
}
