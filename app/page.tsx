import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ClinPASLockup } from "@/components/brand/logo";
import {
  Stethoscope,
  Pill,
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
  NotebookPen,
  BookOpenCheck,
  Timer,
  GraduationCap,
} from "lucide-react";

const pillars = [
  {
    icon: NotebookPen,
    label: "Track",
    title: "Log every patient in seconds",
    description:
      "Structured encounter logging built for the pace of clinic — age group, chief complaint, diagnosis, encounter type, preceptor. Capture it between patients, not at 9pm.",
    href: "/case-log",
    cta: "See the case log",
  },
  {
    icon: BookOpenCheck,
    label: "Study",
    title: "Study exactly what's tested",
    description:
      "Every rotation organized around the PAEA EOR blueprint — high-yield conditions, drug cards, and PANCE-style quizzes so no study session is wasted.",
    href: "#rotations",
    cta: "Browse rotations",
  },
  {
    icon: Stethoscope,
    label: "Reference",
    title: "Answers at the bedside",
    description:
      "Drug dosing, lab reference ranges, clinical guidelines, physical exam maneuvers, and SOAP documentation phrases — pulled up in seconds when your preceptor asks.",
    href: "#features",
    cta: "See the tools",
  },
];

const features = [
  {
    icon: Stethoscope,
    title: "Conditions",
    description:
      "20–25 high-yield conditions per rotation with ICD-10 codes, clinical pearls, and memory-friendly mnemonics.",
  },
  {
    icon: Pill,
    title: "Pharmacology",
    description:
      "Drug cards featuring mechanism of action, dosing guidelines, side effects, and black box warnings.",
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
      "Reference ranges, critical values, and interpretation guides for common diagnostic studies.",
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
      "Special test maneuvers, positive/negative findings, and documentation phrases for SOAP notes.",
  },
];

const rotations = [
  {
    name: "Family Medicine",
    shortDesc: "Primary care & chronic disease mgmt",
    strip: "bg-teal-500",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    icon: Stethoscope,
  },
  {
    name: "Internal Medicine",
    shortDesc: "Hospital medicine & complex disease",
    strip: "bg-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: Activity,
  },
  {
    name: "General Surgery",
    shortDesc: "Peri-op care & abdominal surgery",
    strip: "bg-slate-600",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-700",
    icon: Scissors,
  },
  {
    name: "Pediatrics",
    shortDesc: "Newborn through adolescent care",
    strip: "bg-amber-400",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    icon: Baby,
  },
  {
    name: "Women's Health / OB-GYN",
    shortDesc: "Reproductive health & obstetric care",
    strip: "bg-rose-500",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    icon: Heart,
  },
  {
    name: "Emergency Medicine",
    shortDesc: "Acute & undifferentiated presentations",
    strip: "bg-red-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-600",
    icon: Zap,
  },
  {
    name: "Behavioral Medicine",
    shortDesc: "Psychiatry, mood disorders & SUD",
    strip: "bg-indigo-500",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-600",
    icon: Brain,
  },
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
      "Patient case log included",
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
      "AI Scribe included — dictate encounters, get a polished HPI ($19.99 value)",
      "Printable PDF pocket references",
      "SOAP note templates",
      "H&P documentation cheat sheets",
      "Case log tracking sheets",
    ],
  },
];

const caseLogRows = [
  { cc: "Chest pain", dx: "Cardiovascular", type: "New Patient", age: "65+" },
  { cc: "Sore throat", dx: "ENT / Infectious", type: "New Patient", age: "5–12" },
  { cc: "Med refill · T2DM", dx: "Endocrine", type: "Follow-up", age: "40–64" },
  { cc: "Laceration repair", dx: "Procedure", type: "Procedure", age: "18–39" },
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
            <Link href="#tracking" className="transition hover:text-teal-600">Patient Tracking</Link>
            <Link href="#features" className="transition hover:text-teal-600">Study Tools</Link>
            <Link href="#rotations" className="transition hover:text-teal-600">Rotations</Link>
            <Link href="#pricing" className="transition hover:text-teal-600">Pricing</Link>
            <Link href="/auth/login" className="transition hover:text-teal-600">Log In</Link>
            <Button asChild variant="teal" size="sm">
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        {/* Background glows */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-teal-50 opacity-70 blur-3xl" />
        <div className="pointer-events-none absolute right-24 top-48 h-64 w-64 rounded-full bg-sky-100/50 blur-2xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold text-teal-700 tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                The all-in-one clinical year platform for PA students
              </span>

              <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.08] sm:text-[58px]">
                Track every patient.<br />
                Ace every{" "}
                <span className="text-teal-600">EOR</span>.
              </h1>

              <p className="mt-6 max-w-lg text-xl leading-relaxed text-gray-500">
                Log encounters in seconds, study content mapped to the PAEA EOR
                blueprint, and pull up clinical references at the bedside — one
                platform for everything clinical year throws at you.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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

              <div className="mt-12 flex gap-10 border-t border-gray-100 pt-6">
                {[
                  { value: "<30s", label: "To log an encounter" },
                  { value: "7", label: "PAEA EOR rotations" },
                  { value: "175+", label: "Conditions covered" },
                  { value: "500+", label: "Quiz questions" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-extrabold text-gray-900">{value}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* App mockup — case log */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-teal-100/60 to-sky-100/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/80 shadow-2xl">
                {/* Browser chrome */}
                <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-100 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400/80" />
                    <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <div className="h-3 w-3 rounded-full bg-green-400/80" />
                  </div>
                  <div className="flex-1 rounded border border-gray-200 bg-white px-3 py-1 font-mono text-xs text-gray-400">
                    clinpas.com/case-log
                  </div>
                </div>

                {/* App shell */}
                <div className="flex" style={{ height: 340 }}>
                  {/* Sidebar */}
                  <div
                    className="flex w-12 shrink-0 flex-col items-center gap-3 py-4"
                    style={{ backgroundColor: "#1e3a5f" }}
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-600">
                      <div className="h-3 w-3 rounded-sm bg-white/80" />
                    </div>
                    {[0, 1, 2, 3].map((i) => (
                      <div key={i} className="h-5 w-5 rounded bg-white/20" />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-hidden bg-gray-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-bold text-gray-800">Case Log</p>
                        <p className="text-[9px] text-gray-400">Family Medicine · Week 3</p>
                      </div>
                      <span className="flex items-center gap-1 rounded-md bg-teal-600 px-2 py-1 text-[9px] font-semibold text-white">
                        + Log Encounter
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {caseLogRows.map((row) => (
                        <div
                          key={row.cc}
                          className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2"
                        >
                          <div>
                            <p className="text-[10px] font-bold leading-tight text-gray-800">{row.cc}</p>
                            <p className="text-[8px] text-gray-400">{row.dx} · Age {row.age}</p>
                          </div>
                          <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[8px] font-semibold text-teal-700">
                            {row.type}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex items-center gap-1.5 text-[9px] text-gray-400">
                      <Timer className="h-3 w-3 text-teal-500" />
                      Logged in 24 seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section className="border-t border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.label} className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
                      {pillar.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.href}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 transition hover:text-teal-700"
                  >
                    {pillar.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Patient tracking spotlight ── */}
      <section id="tracking" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-600">
                Patient Tracking
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Logging patients shouldn&apos;t take longer than seeing them
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                Every PA student knows the end-of-day logging marathon: clunky
                forms, endless dropdowns, encounters you can barely remember.
                ClinPA-S makes tracking part of your workflow instead of
                homework after it.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  {
                    title: "Built for between patients",
                    body: "A structured encounter form — age group, chief complaint, diagnosis category, encounter type, preceptor — done in under 30 seconds.",
                  },
                  {
                    title: "Organized by rotation, automatically",
                    body: "Every encounter files itself under the right rotation, so you always know your numbers when your program asks.",
                  },
                  {
                    title: "Your log becomes a study tool",
                    body: "See which presentations you've actually encountered — and which blueprint topics you still need to study before the EOR.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-gray-500">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button asChild variant="teal" size="lg" className="mt-8">
                <Link href="/auth/signup">
                  Start tracking free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Encounter form mockup */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-teal-100/50 to-sky-100/30 blur-xl" />
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-bold text-gray-900">New Encounter</p>
                  <span className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Timer className="h-3.5 w-3.5 text-teal-500" /> ~30 sec
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Rotation", value: "Family Medicine" },
                    { label: "Chief Complaint", value: "Chest pain" },
                    { label: "Diagnosis Category", value: "Cardiovascular" },
                  ].map((field) => (
                    <div key={field.label}>
                      <p className="mb-1 text-xs font-medium text-gray-500">{field.label}</p>
                      <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800">
                        {field.value}
                      </div>
                    </div>
                  ))}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Age Group", value: "65+" },
                      { label: "Encounter Type", value: "New Patient" },
                    ].map((field) => (
                      <div key={field.label}>
                        <p className="mb-1 text-xs font-medium text-gray-500">{field.label}</p>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800">
                          {field.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-lg bg-teal-600 px-3 py-2.5 text-center text-sm font-semibold text-white">
                    Log Encounter
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-600">
              Study & Reference Tools
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need on the Wards
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Six powerful tools designed around the way PA students actually learn
              during clinical rotations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group bg-white p-8 transition-colors hover:bg-teal-50/40"
              >
                <p className="mb-4 select-none text-3xl font-black text-gray-100 transition-colors group-hover:text-teal-100">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rotations ── */}
      <section id="rotations" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-600">
              All 7 Rotations
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Every PAEA EOR Rotation Covered
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Content mapped directly to the EOR blueprint so every study session
              moves the needle.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rotations.map((rotation) => {
              const Icon = rotation.icon;
              return (
                <div
                  key={rotation.name}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
                >
                  <div className={`h-1.5 w-full ${rotation.strip}`} />
                  <div className="p-5">
                    <div
                      className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${rotation.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${rotation.iconColor}`} />
                    </div>
                    <h3 className="text-sm font-bold text-gray-900">{rotation.name}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500">{rotation.shortDesc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-teal-600">
                      6 study tools <ArrowRight className="h-3 w-3" />
                    </div>
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
        className="py-20 sm:py-28"
        style={{ backgroundColor: "#1e3a5f" }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-300">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-teal-200/80">
              One-time purchase. Lifetime access. No subscriptions.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                  tier.popular
                    ? "bg-white shadow-xl ring-2 ring-teal-400"
                    : "border border-white/15 bg-white/10 backdrop-blur-sm"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-teal-500 px-4 py-1 text-xs font-bold text-white shadow-sm">
                    Most Popular
                  </span>
                )}

                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-0.5 text-xs font-medium ${
                      tier.popular
                        ? "bg-teal-50 text-teal-700"
                        : "bg-white/20 text-white/80"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <h3
                    className={`mt-4 text-xl font-bold ${
                      tier.popular ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      tier.popular ? "text-gray-500" : "text-white/60"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <p className="mt-6">
                    <span
                      className={`text-4xl font-extrabold ${
                        tier.popular ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                    <span
                      className={`ml-1 text-sm ${
                        tier.popular ? "text-gray-400" : "text-white/40"
                      }`}
                    >
                      one-time
                    </span>
                  </p>
                </div>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.popular ? "text-teal-600" : "text-teal-400"
                        }`}
                      />
                      <span className={tier.popular ? "text-gray-600" : "text-white/80"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={tier.popular ? "teal" : "outline"}
                  size="lg"
                  className={`mt-8 w-full ${
                    !tier.popular
                      ? "border-white/30 bg-transparent text-white hover:border-white/60 hover:bg-white/10 hover:text-white"
                      : ""
                  }`}
                >
                  <Link href="/auth/signup">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-teal-200/70">
            Add-on: <span className="font-semibold text-white">AI Scribe</span>{" "}
            — dictate your encounter, get a professional HPI for your SOAP note.
            $19.99 one-time with any plan, included free in the top tier.
          </p>
        </div>
      </section>

      {/* ── For PA Programs ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-8 rounded-2xl border border-gray-200 bg-slate-50 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-teal-600" />
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600">
                  For PA Programs
                </p>
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                One platform for your whole cohort
              </h2>
              <p className="mt-3 leading-relaxed text-gray-500">
                Give your students a single place to log patient encounters and
                prepare for EORs. Program-level dashboards and Typhon-compatible
                exports are on our roadmap — we&apos;d love to build them with
                early partner programs.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="shrink-0">
              <a href="mailto:mariamina1120@gmail.com?subject=ClinPA-S%20for%20our%20PA%20program">
                Talk to us
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <ClinPASLockup size={18} tone="light" />
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <Link href="/auth/login" className="transition hover:text-teal-600">Log In</Link>
            <Link href="/auth/signup" className="transition hover:text-teal-600">Sign Up</Link>
            <Link href="/store" className="transition hover:text-teal-600">Store</Link>
            <Link href="/privacy" className="transition hover:text-teal-600">Privacy</Link>
            <Link href="/terms" className="transition hover:text-teal-600">Terms</Link>
          </nav>
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} ClinPAS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
