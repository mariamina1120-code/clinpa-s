import { Metadata } from "next";
import { getRotation } from "@/lib/utils";
import type { RotationSlug } from "@/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Stethoscope, Pill, FileText, Hand, FlaskConical,
  GitBranch, BookOpen, CheckSquare, HelpCircle, ClipboardList,
  Presentation,
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
    color: "text-teal-700 dark:text-teal-300",
    bg: "bg-teal-50 dark:bg-teal-900/30",
    hoverBg: "group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50",
    border: "hover:border-teal-300 dark:hover:border-teal-700",
    badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300",
  },
  {
    href: "pharmacology",
    icon: Pill,
    label: "Pharmacology",
    description: "Drug class, MOA, side effects, monitoring, board pearls",
    color: "text-blue-700 dark:text-blue-300",
    bg: "bg-blue-50 dark:bg-blue-900/30",
    hoverBg: "group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50",
    border: "hover:border-blue-300 dark:hover:border-blue-700",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300",
  },
  {
    href: "chart",
    icon: FileText,
    label: "New SOAP Chart",
    description: "Rotation-specific charting with smart autopopulation",
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800/50",
    hoverBg: "group-hover:bg-slate-200 dark:group-hover:bg-slate-800",
    border: "hover:border-slate-300 dark:hover:border-slate-600",
    badge: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    href: "charts",
    icon: ClipboardList,
    label: "Saved Charts",
    description: "Review, edit, or export your saved patient encounters",
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800/50",
    hoverBg: "group-hover:bg-slate-200 dark:group-hover:bg-slate-800",
    border: "hover:border-slate-300 dark:hover:border-slate-600",
    badge: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
  },
  {
    href: "physical-exam",
    icon: Hand,
    label: "Physical Exam",
    description: "Maneuvers, documentation phrases, pitfalls to avoid",
    color: "text-amber-700 dark:text-amber-300",
    bg: "bg-amber-50 dark:bg-amber-900/30",
    hoverBg: "group-hover:bg-amber-100 dark:group-hover:bg-amber-900/50",
    border: "hover:border-amber-300 dark:hover:border-amber-700",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300",
  },
  {
    href: "labs",
    icon: FlaskConical,
    label: "Labs & Imaging",
    description: "Reference ranges, ABG/EKG guides, CXR interpretation",
    color: "text-violet-700 dark:text-violet-300",
    bg: "bg-violet-50 dark:bg-violet-900/30",
    hoverBg: "group-hover:bg-violet-100 dark:group-hover:bg-violet-900/50",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/50 dark:text-violet-300",
  },
  {
    href: "differentials",
    icon: GitBranch,
    label: "Differential Diagnosis",
    description: "Chief complaint → ranked differential with workup",
    color: "text-orange-700 dark:text-orange-300",
    bg: "bg-orange-50 dark:bg-orange-900/30",
    hoverBg: "group-hover:bg-orange-100 dark:group-hover:bg-orange-900/50",
    border: "hover:border-orange-300 dark:hover:border-orange-700",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300",
  },
  {
    href: "guidelines",
    icon: BookOpen,
    label: "Clinical Guidelines",
    description: "Evidence-based treatment algorithms and guideline summaries",
    color: "text-green-700 dark:text-green-300",
    bg: "bg-green-50 dark:bg-green-900/30",
    hoverBg: "group-hover:bg-green-100 dark:group-hover:bg-green-900/50",
    border: "hover:border-green-300 dark:hover:border-green-700",
    badge: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300",
  },
  {
    href: "procedures",
    icon: CheckSquare,
    label: "Procedures",
    description: "Step-by-step checklists with mark-complete tracking",
    color: "text-rose-700 dark:text-rose-300",
    bg: "bg-rose-50 dark:bg-rose-900/30",
    hoverBg: "group-hover:bg-rose-100 dark:group-hover:bg-rose-900/50",
    border: "hover:border-rose-300 dark:hover:border-rose-700",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300",
  },
  {
    href: "quiz",
    icon: HelpCircle,
    label: "Quiz Mode",
    description: "PANCE-style questions with explanations and performance tracking",
    color: "text-purple-700 dark:text-purple-300",
    bg: "bg-purple-50 dark:bg-purple-900/30",
    hoverBg: "group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50",
    border: "hover:border-purple-300 dark:hover:border-purple-700",
    badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300",
  },
  {
    href: "presentation",
    icon: Presentation,
    label: "Preceptor Presentation",
    description: "Build a structured case presentation with auto-generated differentials",
    color: "text-indigo-700 dark:text-indigo-300",
    bg: "bg-indigo-50 dark:bg-indigo-900/30",
    hoverBg: "group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50",
    border: "hover:border-indigo-300 dark:hover:border-indigo-700",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300",
  },
];

export default function RotationHubPage({ params }: { params: { slug: string } }) {
  const rotation = getRotation(params.slug as RotationSlug);
  if (!rotation) notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-8">

      {/* ── Rotation Header ── */}
      <div className="flex items-center gap-4 pb-2 border-b border-border">
        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/40 dark:to-teal-900/20 flex items-center justify-center text-3xl shadow-sm border border-teal-100 dark:border-teal-800 shrink-0">
          {rotation.icon}
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{rotation.name}</h1>
          <p className="text-muted-foreground text-sm mt-0.5">{rotation.description}</p>
        </div>
      </div>

      {/* ── Section Label ── */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          Study Sections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SECTIONS.map(({ href, icon: Icon, label, description, color, bg, hoverBg, border, badge }) => (
            <Link
              key={href}
              href={`/rotations/${params.slug}/${href}`}
              className={`group flex items-start gap-4 p-4 rounded-xl border bg-card transition-all duration-150 hover:shadow-sm ${border}`}
            >
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${bg} ${hoverBg}`}>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-semibold text-sm leading-tight">{label}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
