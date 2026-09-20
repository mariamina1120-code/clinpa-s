import { Metadata } from "next";
import { getRotation } from "@/lib/utils";
import type { RotationSlug } from "@/types";
import { EOR_BLUEPRINTS } from "@/lib/seed/shared/eor-blueprints";
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

  const blueprint = EOR_BLUEPRINTS[params.slug as RotationSlug];
  const maxWeight = blueprint
    ? Math.max(...blueprint.categories.map((c) => c.weight))
    : 0;

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

      {/* ── PAEA EOR Blueprint ── */}
      {blueprint && (
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <details className="group">
            <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none select-none hover:bg-muted/20 transition-colors">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-0.5">
                  PAEA EOR Blueprint
                </p>
                <h2 className="font-bold text-sm leading-tight">
                  {blueprint.examName} · {blueprint.questionCount} questions
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {blueprint.blueprintVersion} — what&apos;s actually tested, by weight
                </p>
              </div>
              <svg
                className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="px-6 pb-6 border-t border-border pt-5 space-y-6">
              {/* Content area weights */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Content Areas
                </p>
                <div className="space-y-2">
                  {blueprint.categories.map((cat) => (
                    <div key={cat.name} className="flex items-center gap-3">
                      <span className="w-56 shrink-0 text-xs leading-tight">{cat.name}</span>
                      <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-teal-500"
                          style={{ width: `${(cat.weight / maxWeight) * 100}%` }}
                        />
                      </div>
                      <span className="w-9 shrink-0 text-right text-xs font-bold text-teal-700">
                        {cat.weight}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Task areas */}
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  Task Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {blueprint.taskAreas.map((task) => (
                    <span
                      key={task.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 text-xs"
                    >
                      {task.name}
                      <span className="font-bold text-teal-700">{task.weight}%</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Periop targets (Surgery only) */}
              {blueprint.periopTargets && (
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Perioperative Setting Targets
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blueprint.periopTargets.map((p) => (
                      <span
                        key={p.name}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/30 px-2.5 py-1.5 text-xs"
                      >
                        {p.name}
                        <span className="font-bold text-teal-700">{p.weight}%</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {blueprint.note && (
                <p className="text-xs text-muted-foreground italic">{blueprint.note}</p>
              )}

              <a
                href={blueprint.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 hover:text-teal-700 transition-colors"
              >
                Official PAEA blueprint PDF
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </details>
        </div>
      )}

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
