import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClinPASLockup } from "@/components/brand/logo";
import {
  Stethoscope,
  Pill,
  BookOpen,
  FlaskConical,
  CheckSquare,
  ShieldCheck,
  ClipboardList,
  ArrowRight,
  Check,
  Activity,
  Scissors,
  Baby,
  Heart,
  Zap,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Stethoscope,
    title: "Conditions",
    description:
      "20-25 high-yield conditions per rotation with ICD-10 codes, clinical pearls, and memory-friendly mnemonics.",
  },
  {
    icon: Pill,
    title: "Pharmacology",
    description:
      "Comprehensive drug cards featuring mechanism of action, dosing guidelines, side effects, and black box warnings.",
  },
  {
    icon: CheckSquare,
    title: "Quiz Mode",
    description:
      "PANCE-style multiple choice questions with detailed explanations to test your knowledge before exam day.",
  },
  {
    icon: FlaskConical,
    title: "Labs & Imaging",
    description:
      "Reference ranges, critical values, and step-by-step interpretation guides for common diagnostic studies.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Guidelines",
    description:
      "Evidence-based treatment algorithms and decision trees aligned with current NCCPA blueprints.",
  },
  {
    icon: ClipboardList,
    title: "Physical Exam",
    description:
      "Special test maneuvers, positive/negative findings, and ready-to-use documentation phrases for SOAP notes.",
  },
];

const rotations = [
  { name: "Family Medicine",        shortDesc: "Primary care & chronic disease mgmt",    dot: "bg-teal-500",   icon: Stethoscope },
  { name: "Internal Medicine",      shortDesc: "Hospital medicine & complex disease",     dot: "bg-blue-500",   icon: Activity    },
  { name: "General Surgery",        shortDesc: "Peri-op care & abdominal surgery",        dot: "bg-slate-600",  icon: Scissors    },
  { name: "Pediatrics",             shortDesc: "Newborn through adolescent care",         dot: "bg-amber-400",  icon: Baby        },
  { name: "Women's Health / OB-GYN",shortDesc: "Reproductive health & obstetric care",   dot: "bg-rose-500",   icon: Heart       },
  { name: "Emergency Medicine",     shortDesc: "Acute & undifferentiated presentations", dot: "bg-red-500",    icon: Zap         },
  { name: "Behavioral Medicine",    shortDesc: "Psychiatry, mood disorders & SUD",        dot: "bg-indigo-500", icon: Brain       },
];

const pricingTiers = [
  {
    name: "Individual Rotation",
    badge: "Digital",
    price: "$29.99",
    description: "Deep-dive into a single clinical rotation.",
    features: [
      "One rotation of your choice",
      "All conditions, pharm cards & quizzes",
      "Labs, guidelines & PE maneuvers",
      "Lifetime digital access",
    ],
  },
  {
    name: "Complete Bundle",
    badge: "Digital",
    price: "$149.99",
    description: "Everything you need for all seven PAEA EOR rotations.",
    popular: true,
    features: [
      "All 7 clinical rotations",
      "175+ conditions & drug cards",
      "Full quiz bank with explanations",
      "Lifetime digital access",
      "Free future content updates",
    ],
  },
  {
    name: "Complete Bundle + Paper Tools",
    badge: "Digital + Print",
    price: "$199.99",
    description: "The full digital bundle plus printable PDFs for the wards.",
    features: [
      "Everything in Complete Bundle",
      "Printable PDF pocket references",
      "SOAP note templates",
      "H&P documentation cheat sheets",
      "Case log tracking sheets",
    ],
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center">
            <ClinPASLockup size={22} tone="light" />
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
            <Link href="#features" className="transition hover:text-teal-600">
              Features
            </Link>
            <Link href="#rotations" className="transition hover:text-teal-600">
              Rotations
            </Link>
            <Link href="#pricing" className="transition hover:text-teal-600">
              Pricing
            </Link>
            <Link href="/auth/login" className="transition hover:text-teal-600">
              Log In
            </Link>
            <Button asChild variant="teal" size="sm">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28 lg:pt-36">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 tracking-wide">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Aligned with the PAEA EOR Blueprint
          </span>

          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Study smarter through{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
              every rotation
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
            High-yield conditions, drug cards, clinical guidelines, EOR-style
            quizzes, and SOAP tools — all organized by rotation so you always
            know exactly what to study.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="teal" size="xl">
              <Link href="/auth/signup">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link href="#pricing">See pricing</Link>
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-gray-100 pt-10 w-full max-w-lg">
            {[
              { value: "7", label: "PAEA EOR rotations" },
              { value: "175+", label: "Conditions covered" },
              { value: "500+", label: "Quiz questions" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                <p className="mt-1 text-xs text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need on the Wards
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Six powerful study tools in one place — designed around the way PA
              students actually learn during clinical rotations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rotations ── */}
      <section id="rotations" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All 7 PAEA EOR Rotations
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Content mapped directly to the EOR blueprint so every study session
              moves the needle.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rotations.map((rotation) => {
              const Icon = rotation.icon;
              return (
                <div
                  key={rotation.name}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition hover:border-gray-300 hover:shadow-md"
                >
                  <div className={`h-2.5 w-2.5 rounded-full shrink-0 ${rotation.dot}`} />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {rotation.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5 truncate">
                      {rotation.shortDesc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section
        id="pricing"
        className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              One-time purchase. Lifetime access. No subscriptions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition hover:shadow-md ${
                  tier.popular
                    ? "border-teal-400 ring-2 ring-teal-400/30"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600">
                    {tier.badge}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <p className="mt-6">
                    <span className="text-4xl font-extrabold text-gray-900">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-sm text-gray-400">
                      one-time
                    </span>
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.popular ? "teal" : "outline"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <ClinPASLockup size={18} tone="light" />

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <Link href="/auth/login" className="transition hover:text-teal-600">
              Log In
            </Link>
            <Link
              href="/auth/signup"
              className="transition hover:text-teal-600"
            >
              Sign Up
            </Link>
            <Link href="/store" className="transition hover:text-teal-600">
              Store
            </Link>
            <Link href="/privacy" className="transition hover:text-teal-600">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-teal-600">
              Terms
            </Link>
          </nav>

          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ClinPAS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
