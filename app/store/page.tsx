import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  ShoppingCart,
  CheckCircle2,
  BookOpen,
  Sparkles,
  Package,
  FileText,
  Star,
} from "lucide-react";
import type { RotationSlug } from "@/types";
import { PurchaseButton } from "./purchase-button";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Purchase individual rotation modules or bundles for your clinical year.",
};

/* ── rotation catalogue ─────────────────────────────────────────────────────── */

interface RotationProduct {
  slug: RotationSlug;
  name: string;
  icon: string;
  price: number;
}

const INDIVIDUAL_ROTATIONS: RotationProduct[] = [
  { slug: "family-medicine", name: "Family Medicine", icon: "🏠", price: 29.99 },
  { slug: "internal-medicine", name: "Internal Medicine", icon: "🫀", price: 29.99 },
  { slug: "general-surgery", name: "General Surgery", icon: "🔪", price: 29.99 },
  { slug: "pediatrics", name: "Pediatrics", icon: "👶", price: 29.99 },
  { slug: "womens-health", name: "Women's Health", icon: "🌸", price: 29.99 },
  { slug: "emergency-medicine", name: "Emergency Medicine", icon: "🚨", price: 29.99 },
  { slug: "behavioral-medicine", name: "Behavioral Medicine", icon: "🧠", price: 29.99 },
];

const ALL_SLUGS: RotationSlug[] = INDIVIDUAL_ROTATIONS.map((r) => r.slug);

interface Bundle {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  rotations: RotationSlug[];
  hasPaperTools: boolean;
  badge?: string;
  highlight?: boolean;
}

const BUNDLES: Bundle[] = [
  {
    id: "primary-care",
    name: "Primary Care Bundle",
    description: "Family Medicine + Internal Medicine + Pediatrics",
    price: 79.99,
    originalPrice: 89.97,
    rotations: ["family-medicine", "internal-medicine", "pediatrics"],
    hasPaperTools: false,
  },
  {
    id: "complete-digital",
    name: "Complete Bundle",
    description: "All 7 rotation modules — digital access",
    price: 149.99,
    originalPrice: 209.93,
    rotations: ALL_SLUGS,
    hasPaperTools: false,
    badge: "Best Value",
    highlight: true,
  },
  {
    id: "complete-paper",
    name: "Complete Bundle + Paper Tools",
    description: "All 7 rotation modules + printable PDF worksheets",
    price: 199.99,
    originalPrice: 259.93,
    rotations: ALL_SLUGS,
    hasPaperTools: true,
  },
];

/* ── helpers ────────────────────────────────────────────────────────────────── */

function savings(original: number, sale: number) {
  return Math.round(((original - sale) / original) * 100);
}

/* ── page ───────────────────────────────────────────────────────────────────── */

export default async function StorePage() {
  const devMode = !isSupabaseConfigured;

  let ownedSlugs = new Set<RotationSlug>();
  let ownedHasPaper = false;

  if (!devMode) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      redirect("/auth/login?redirectTo=/store");
    }

    const { data: modules } = await supabase
      .from("user_modules")
      .select("rotation_slug, has_paper_tools")
      .eq("user_id", user.id);

    type ModRow = { rotation_slug: string; has_paper_tools: boolean };
    ownedSlugs = new Set(
      (modules ?? ([] as ModRow[])).map(
        (m: ModRow) => m.rotation_slug as RotationSlug
      )
    );
    ownedHasPaper = (modules ?? ([] as ModRow[])).some(
      (m: ModRow) => m.has_paper_tools
    );
  }

  const ownsAll = ALL_SLUGS.every((s) => ownedSlugs.has(s));

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-white" />
          <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-white" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Level Up Your Clinical Year
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100">
            Diagnostic criteria, pharmacology, SOAP templates, case logs, quizzes
            and more — everything you need to excel on rotations and the PANCE.
          </p>
          {ownsAll && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-sm font-medium backdrop-blur">
              <CheckCircle2 className="h-4 w-4" />
              You own all rotation modules!
            </div>
          )}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* ── Bundles ──────────────────────────────────────────────────────────── */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Bundles</h2>
            <p className="mt-1 text-sm text-slate-500">
              Save more when you buy multiple rotations together
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {BUNDLES.map((bundle) => {
              const allOwned = bundle.rotations.every((s) =>
                ownedSlugs.has(s)
              );
              const paperSatisfied = !bundle.hasPaperTools || ownedHasPaper;
              const fullyOwned = allOwned && paperSatisfied;

              return (
                <div
                  key={bundle.id}
                  className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${
                    bundle.highlight
                      ? "border-teal-400 ring-2 ring-teal-400/30"
                      : "border-slate-200"
                  }`}
                >
                  {bundle.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white hover:bg-teal-600">
                      <Star className="mr-1 h-3 w-3" />
                      {bundle.badge}
                    </Badge>
                  )}

                  <div className="mb-4 flex items-center gap-2 text-slate-600">
                    <Package className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      {bundle.name}
                    </h3>
                  </div>

                  <p className="mb-4 text-sm text-slate-500">
                    {bundle.description}
                  </p>

                  {bundle.hasPaperTools && (
                    <div className="mb-4 flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 w-fit">
                      <FileText className="h-3.5 w-3.5" />
                      Includes printable PDF worksheets
                    </div>
                  )}

                  <div className="mb-5 mt-auto">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-slate-900">
                        ${bundle.price}
                      </span>
                      <span className="text-sm text-slate-400 line-through">
                        ${bundle.originalPrice.toFixed(2)}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-teal-600">
                      Save {savings(bundle.originalPrice, bundle.price)}%
                    </span>
                  </div>

                  {fullyOwned ? (
                    <div className="flex items-center justify-center gap-2 rounded-xl bg-teal-50 py-3 text-sm font-semibold text-teal-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Purchased
                    </div>
                  ) : (
                    <PurchaseButton
                      rotationSlugs={bundle.rotations}
                      hasPaperTools={bundle.hasPaperTools}
                      label={`Buy Bundle — $${bundle.price}`}
                      variant="default"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Divider ──────────────────────────────────────────────────────────── */}
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            or buy individually
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* ── Individual Rotations ─────────────────────────────────────────────── */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Individual Rotations
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              $29.99 each — digital access to the full rotation module
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDIVIDUAL_ROTATIONS.map((rotation) => {
              const owned = ownedSlugs.has(rotation.slug);

              return (
                <div
                  key={rotation.slug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-2xl">
                      {rotation.icon}
                    </span>
                    <h3 className="text-base font-semibold text-slate-900">
                      {rotation.name}
                    </h3>
                  </div>

                  <ul className="mb-4 flex-1 space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-teal-500" />
                      Conditions & differentials
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-teal-500" />
                      Pharmacology & labs
                    </li>
                    <li className="flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5 text-teal-500" />
                      SOAP templates & quizzes
                    </li>
                  </ul>

                  {owned ? (
                    <div className="flex items-center justify-center gap-2 rounded-xl bg-teal-50 py-2.5 text-sm font-semibold text-teal-700">
                      <CheckCircle2 className="h-4 w-4" />
                      Purchased
                    </div>
                  ) : (
                    <PurchaseButton
                      rotationSlugs={[rotation.slug]}
                      hasPaperTools={false}
                      label={`$${rotation.price}`}
                      variant="outline"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FAQ / info ───────────────────────────────────────────────────────── */}
        <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-lg font-bold text-slate-900">
            Questions about purchasing?
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
            All purchases are one-time — no subscriptions. Your content is
            accessible for the duration of your clinical year. Need help?{" "}
            <Link
              href="/terms"
              className="font-medium text-teal-600 underline underline-offset-2 hover:text-teal-700"
            >
              View our terms
            </Link>{" "}
            or reach out to support.
          </p>
        </section>
      </div>
    </main>
  );
}
