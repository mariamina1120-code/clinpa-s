import Link from "next/link";
import type { Rotation } from "@/types";
import { Lock, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface RotationCardProps {
  rotation: Rotation;
  unlocked: boolean;
  hasPaperTools: boolean;
}

const SECTION_LABELS = [
  "Conditions",
  "Pharmacology",
  "Charting",
  "Physical Exam",
  "Labs & Imaging",
  "Differentials",
  "Guidelines",
];

export function RotationCard({ rotation, unlocked, hasPaperTools }: RotationCardProps) {
  const href = unlocked ? `/rotations/${rotation.slug}` : `/store`;

  return (
    <div
      className={cn(
        "group relative rounded-xl border bg-card overflow-hidden transition-all duration-200",
        unlocked
          ? "hover:shadow-md hover:border-teal-200 dark:hover:border-teal-800 cursor-pointer"
          : "opacity-70 cursor-not-allowed"
      )}
    >
      {/* Color accent strip */}
      <div className={cn("h-1 w-full", unlocked ? "bg-teal-500" : "bg-slate-300 dark:bg-slate-600")} />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-2xl mb-1 block">{rotation.icon}</span>
            <h3 className="font-semibold text-sm leading-tight">{rotation.name}</h3>
          </div>
          {!unlocked && (
            <div className="flex items-center gap-1 text-muted-foreground bg-muted rounded-full p-1.5">
              <Lock className="h-3.5 w-3.5" />
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{rotation.description}</p>

        {/* Section pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {SECTION_LABELS.map((label) => (
            <span
              key={label}
              className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full border",
                unlocked
                  ? "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800"
                  : "bg-muted text-muted-foreground border-border"
              )}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Badges + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {hasPaperTools && (
              <Badge variant="teal" className="text-[10px] gap-1">
                <FileText className="h-3 w-3" />
                PDF
              </Badge>
            )}
          </div>
          {unlocked ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 hover:text-teal-700 group-hover:gap-2 transition-all"
            >
              Open <ArrowRight className="h-3 w-3" />
            </Link>
          ) : (
            <Link
              href="/store"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-teal-600 transition-colors"
            >
              <Lock className="h-3 w-3" />
              Unlock
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
