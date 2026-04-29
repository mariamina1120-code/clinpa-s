import Link from "next/link";
import type { Rotation } from "@/types";
import { Lock, FileText, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
  "Labs",
  "Differentials",
  "Guidelines",
];

export function RotationCard({ rotation, unlocked, hasPaperTools }: RotationCardProps) {
  const href = unlocked ? `/rotations/${rotation.slug}` : `/store`;

  return (
    <div
      className={cn(
        "group relative rounded-2xl border bg-card overflow-hidden transition-all duration-200 shadow-sm",
        unlocked
          ? "hover:shadow-lg hover:border-border/80 cursor-pointer"
          : "opacity-60 cursor-not-allowed"
      )}
    >
      {/* Neutral header with emoji */}
      <div
        className={cn(
          "relative flex items-end px-4 pb-3 pt-4 bg-muted/50",
          !unlocked && "grayscale"
        )}
        style={{ minHeight: "72px" }}
      >
        <span className="text-4xl drop-shadow-sm leading-none">{rotation.icon}</span>

        {/* Lock badge */}
        {!unlocked && (
          <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-full p-1.5">
            <Lock className="h-3.5 w-3.5 text-foreground/70" />
          </div>
        )}

        {/* PDF badge */}
        {hasPaperTools && unlocked && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm border border-border">
              <FileText className="h-2.5 w-2.5" />
              PDF
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Name & description */}
        <h3 className="font-bold text-sm leading-snug mb-1">{rotation.name}</h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
          {rotation.description}
        </p>

        {/* Section pills — neutral always */}
        <div className="flex flex-wrap gap-1 mb-4">
          {SECTION_LABELS.map((label) => (
            <span
              key={label}
              className="text-[10px] px-1.5 py-0.5 rounded-full border font-medium bg-muted text-muted-foreground border-border"
            >
              {label}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-end pt-1 border-t border-border">
          {unlocked ? (
            <Link
              href={href}
              className="inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all mt-3 text-foreground"
            >
              Open rotation <ArrowRight className="h-3 w-3" />
            </Link>
          ) : (
            <Link
              href="/store"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mt-3"
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
