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
  "Labs",
  "Differentials",
  "Guidelines",
];

// Per-rotation color identity — each rotation has its own visual accent
const ROTATION_STYLE: Record<string, {
  gradient: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  hoverBorder: string;
  ctaText: string;
}> = {
  "family-medicine": {
    gradient: "from-amber-400 to-orange-400",
    pillBg: "bg-amber-50 dark:bg-amber-900/20",
    pillText: "text-amber-700 dark:text-amber-300",
    pillBorder: "border-amber-200 dark:border-amber-800",
    hoverBorder: "hover:border-amber-300 dark:hover:border-amber-700",
    ctaText: "text-amber-600 dark:text-amber-400",
  },
  "internal-medicine": {
    gradient: "from-blue-500 to-blue-400",
    pillBg: "bg-blue-50 dark:bg-blue-900/20",
    pillText: "text-blue-700 dark:text-blue-300",
    pillBorder: "border-blue-200 dark:border-blue-800",
    hoverBorder: "hover:border-blue-300 dark:hover:border-blue-700",
    ctaText: "text-blue-600 dark:text-blue-400",
  },
  "general-surgery": {
    gradient: "from-slate-500 to-slate-400",
    pillBg: "bg-slate-50 dark:bg-slate-800/50",
    pillText: "text-slate-600 dark:text-slate-400",
    pillBorder: "border-slate-200 dark:border-slate-700",
    hoverBorder: "hover:border-slate-300 dark:hover:border-slate-600",
    ctaText: "text-slate-600 dark:text-slate-400",
  },
  "pediatrics": {
    gradient: "from-rose-400 to-pink-400",
    pillBg: "bg-rose-50 dark:bg-rose-900/20",
    pillText: "text-rose-700 dark:text-rose-300",
    pillBorder: "border-rose-200 dark:border-rose-800",
    hoverBorder: "hover:border-rose-300 dark:hover:border-rose-700",
    ctaText: "text-rose-600 dark:text-rose-400",
  },
  "womens-health": {
    gradient: "from-violet-400 to-purple-400",
    pillBg: "bg-violet-50 dark:bg-violet-900/20",
    pillText: "text-violet-700 dark:text-violet-300",
    pillBorder: "border-violet-200 dark:border-violet-800",
    hoverBorder: "hover:border-violet-300 dark:hover:border-violet-700",
    ctaText: "text-violet-600 dark:text-violet-400",
  },
  "emergency-medicine": {
    gradient: "from-red-500 to-orange-400",
    pillBg: "bg-red-50 dark:bg-red-900/20",
    pillText: "text-red-700 dark:text-red-300",
    pillBorder: "border-red-200 dark:border-red-800",
    hoverBorder: "hover:border-red-300 dark:hover:border-red-700",
    ctaText: "text-red-600 dark:text-red-400",
  },
  "behavioral-medicine": {
    gradient: "from-indigo-500 to-indigo-400",
    pillBg: "bg-indigo-50 dark:bg-indigo-900/20",
    pillText: "text-indigo-700 dark:text-indigo-300",
    pillBorder: "border-indigo-200 dark:border-indigo-800",
    hoverBorder: "hover:border-indigo-300 dark:hover:border-indigo-700",
    ctaText: "text-indigo-600 dark:text-indigo-400",
  },
};

const DEFAULT_STYLE = {
  gradient: "from-teal-500 to-teal-400",
  pillBg: "bg-teal-50 dark:bg-teal-900/20",
  pillText: "text-teal-700 dark:text-teal-300",
  pillBorder: "border-teal-200 dark:border-teal-800",
  hoverBorder: "hover:border-teal-300 dark:hover:border-teal-700",
  ctaText: "text-teal-600 dark:text-teal-400",
};

export function RotationCard({ rotation, unlocked, hasPaperTools }: RotationCardProps) {
  const href = unlocked ? `/rotations/${rotation.slug}` : `/store`;
  const style = ROTATION_STYLE[rotation.slug] ?? DEFAULT_STYLE;

  return (
    <div
      className={cn(
        "group relative rounded-2xl border bg-card overflow-hidden transition-all duration-200 shadow-sm",
        unlocked
          ? `hover:shadow-lg ${style.hoverBorder} cursor-pointer`
          : "opacity-60 cursor-not-allowed"
      )}
    >
      {/* Gradient header with emoji */}
      <div
        className={cn(
          "relative flex items-end px-4 pb-3 pt-4 bg-gradient-to-br",
          style.gradient,
          !unlocked && "grayscale"
        )}
        style={{ minHeight: "72px" }}
      >
        <span className="text-4xl drop-shadow-sm leading-none">{rotation.icon}</span>

        {/* Lock badge */}
        {!unlocked && (
          <div className="absolute top-2 right-2 bg-black/25 backdrop-blur-sm rounded-full p-1.5">
            <Lock className="h-3.5 w-3.5 text-white/90" />
          </div>
        )}

        {/* PDF badge */}
        {hasPaperTools && unlocked && (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/25 text-white backdrop-blur-sm border border-white/30">
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

        {/* Section pills */}
        <div className="flex flex-wrap gap-1 mb-4">
          {SECTION_LABELS.map((label) => (
            <span
              key={label}
              className={cn(
                "text-[10px] px-1.5 py-0.5 rounded-full border font-medium",
                unlocked
                  ? `${style.pillBg} ${style.pillText} ${style.pillBorder}`
                  : "bg-muted text-muted-foreground border-border"
              )}
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
              className={cn(
                "inline-flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all mt-3",
                style.ctaText
              )}
            >
              Open rotation <ArrowRight className="h-3 w-3" />
            </Link>
          ) : (
            <Link
              href="/store"
              className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-teal-600 transition-colors mt-3"
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
