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
  { href: "conditions", icon: Stethoscope, label: "Conditions", description: "Top 20–25 diagnoses, ICD-10, criteria, mnemonics, pimping Qs" },
  { href: "pharmacology", icon: Pill, label: "Pharmacology", description: "Drug class, MOA, side effects, monitoring, pearls" },
  { href: "chart", icon: FileText, label: "New SOAP Chart", description: "Rotation-specific charting with smart autopopulation" },
  { href: "charts", icon: ClipboardList, label: "Saved Charts", description: "Review, edit, or export your saved patient encounters" },
  { href: "physical-exam", icon: Hand, label: "Physical Exam", description: "Maneuvers, documentation phrases, pitfalls" },
  { href: "labs", icon: FlaskConical, label: "Labs & Imaging", description: "Reference ranges, ABG/EKG guides, CXR interpretation" },
  { href: "differentials", icon: GitBranch, label: "Differential Diagnosis", description: "Chief complaint → ranked differential with workup" },
  { href: "guidelines", icon: BookOpen, label: "Clinical Guidelines", description: "Evidence-based treatment algorithms and guideline summaries" },
  { href: "procedures", icon: CheckSquare, label: "Procedures", description: "Step-by-step checklists with mark-complete tracking" },
  { href: "quiz", icon: HelpCircle, label: "Quiz Mode", description: "PANCE-style questions with explanations and performance tracking" },
  { href: "presentation", icon: Presentation, label: "Preceptor Presentation", description: "Build a structured case presentation with auto-generated differentials" },
];

export default function RotationHubPage({ params }: { params: { slug: string } }) {
  const rotation = getRotation(params.slug as RotationSlug);
  if (!rotation) notFound();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-4xl">{rotation.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{rotation.name}</h1>
            <p className="text-muted-foreground text-sm">{rotation.description}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {SECTIONS.map(({ href, icon: Icon, label, description }) => (
          <Link
            key={href}
            href={`/rotations/${params.slug}/${href}`}
            className="flex items-start gap-4 p-4 rounded-xl border bg-card hover:border-teal-300 hover:shadow-sm dark:hover:border-teal-700 transition-all group"
          >
            <div className="h-10 w-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shrink-0 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/50 transition-colors">
              <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">{label}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
