import { Metadata } from "next";
import { getRotation } from "@/lib/utils";
import type { RotationSlug } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Stethoscope,
  Pill,
  FileText,
  Hand,
  FlaskConical,
  GitBranch,
  BookOpen,
  CheckSquare,
  HelpCircle,
  ClipboardList,
  Presentation,
  ArrowRight,
  Star,
} from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const rotation = getRotation(params.slug as RotationSlug);
  return { title: rotation?.name ?? "Rotation" };
}

const SECTIONS = [
  {
    href: "conditions",
    icon: Stethoscope,
    label: "Conditions",
    description: "Top 20–25 diagnoses, ICD-10, criteria, mnemonics, pimping Qs",
  },
  {
    href: "pharmacology",
    icon: Pill,
    label: "Pharmacology",
    description: "Drug class, MOA, side effects, monitoring, board pearls",
  },
  {
    href: "chart",
    icon: FileText,
    label: "New SOAP Chart",
    description: "Rotation-specific charting with smart autopopulation",
  },
  {
    href: "charts",
    icon: ClipboardList,
    label: "Saved Charts",
    description: "Review, edit, or export your saved patient encounters",
  },
  {
    href: "physical-exam",
    icon: Hand,
    label: "Physical Exam",
    description: "Maneuvers, documentation phrases, pitfalls to avoid",
  },
  {
    href: "labs",
    icon: FlaskConical,
    label: "Labs & Imaging",
    description: "Reference ranges, ABG/EKG guides, CXR interpretation",
  },
  {
    href: "differentials",
    icon: GitBranch,
    label: "Differential Diagnosis",
    description: "Chief complaint → ranked differential with workup",
  },
  {
    href: "guidelines",
    icon: BookOpen,
    label: "Clinical Guidelines",
    description: "Evidence-based treatment algorithms and guideline summaries",
  },
  {
    href: "procedures",
    icon: CheckSquare,
    label: "Procedures",
    description: "Step-by-step checklists with mark-complete tracking",
  },
  {
    href: "quiz",
    icon: HelpCircle,
    label: "Quiz Mode",
    description: "PANCE-style questions with explanations and performance tracking",
  },
  {
    href: "presentation",
    icon: Presentation,
    label: "Preceptor Presentation",
    description: "Build a structured case presentation with auto-generated differentials",
  },
];

const IM_EXTRA_SECTIONS = [
  {
    href: "eor-pearls",
    icon: Star,
    label: "EOR Pearls",
    description: "High-yield condition cheat sheets for the Internal Medicine EOR exam",
  },
];

export default function RotationHubPage({ params }: { params: { slug: string } }) {
  const rotation = getRotation(params.slug as RotationSlug);
  if (!rotation) notFound();

  const allSections = params.slug === "internal-medicine"
    ? [...SECTIONS, ...IM_EXTRA_SECTIONS]
    : SECTIONS;

  return (
    <div className="max-w-4xl mx-auto space-y-7">

      {/* ── Rotation Header ── */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0284c7 0%, #075985 100%)" }}
      >
        <div className="px-6 py-7 flex items-center gap-5">
          <div className="h-16 w-16 shrink-0 rounded-2xl flex items-center justify-center text-4xl border border-white/20 bg-white/15 backdrop-blur-sm">
            {rotation.icon}
          </div>
          <div>
            <p className="text-teal-200 text-xs font-bold uppercase tracking-widest mb-1">
              Clinical Rotation
            </p>
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              {rotation.name}
            </h1>
            <p className="text-white/70 text-sm mt-1">{rotation.description}</p>
          </div>
        </div>
      </div>

      {/* ── Section Grid ── */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
          Study Sections
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {allSections.map(({ href, icon: Icon, label, description }) => (
            <Link
              key={href}
              href={`/rotations/${params.slug}/${href}`}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card px-4 py-4 transition-all duration-150 hover:border-teal-200 hover:bg-teal-50/30 hover:shadow-sm"
            >
              <div className="h-10 w-10 shrink-0 rounded-xl bg-teal-50 flex items-center justify-center transition-colors group-hover:bg-teal-100">
                <Icon className="h-5 w-5 text-teal-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm leading-tight">{label}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                  {description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-300 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-teal-500" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
