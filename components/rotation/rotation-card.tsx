import Link from "next/link";
import type { Rotation } from "@/types";
import {
  Lock,
  FileText,
  ArrowRight,
  Stethoscope,
  Activity,
  Scissors,
  Baby,
  Heart,
  Zap,
  Brain,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface RotationCardProps {
  rotation: Rotation;
  unlocked: boolean;
  hasPaperTools: boolean;
}

// ─── Per-rotation color + icon config ────────────────────────────────────────
// All Tailwind classes are written as full strings so the compiler picks them up.
interface RotationConfig {
  icon: LucideIcon;
  stripeBg: string;
  iconBg: string;
  iconColor: string;
  cardHoverBorder: string;
  ctaColor: string;
}

const ROTATION_CONFIGS: Record<string, RotationConfig> = {
  "family-medicine": {
    icon: Stethoscope,
    stripeBg: "bg-teal-500",
    iconBg: "bg-teal-50 group-hover:bg-teal-500",
    iconColor: "text-teal-600 group-hover:text-white",
    cardHoverBorder: "hover:border-teal-200",
    ctaColor: "text-teal-600",
  },
  "internal-medicine": {
    icon: Activity,
    stripeBg: "bg-blue-500",
    iconBg: "bg-blue-50 group-hover:bg-blue-500",
    iconColor: "text-blue-600 group-hover:text-white",
    cardHoverBorder: "hover:border-blue-200",
    ctaColor: "text-blue-600",
  },
  "general-surgery": {
    icon: Scissors,
    stripeBg: "bg-slate-600",
    iconBg: "bg-slate-100 group-hover:bg-slate-600",
    iconColor: "text-slate-600 group-hover:text-white",
    cardHoverBorder: "hover:border-slate-300",
    ctaColor: "text-slate-700",
  },
  "pediatrics": {
    icon: Baby,
    stripeBg: "bg-amber-400",
    iconBg: "bg-amber-50 group-hover:bg-amber-400",
    iconColor: "text-amber-600 group-hover:text-white",
    cardHoverBorder: "hover:border-amber-200",
    ctaColor: "text-amber-600",
  },
  "womens-health": {
    icon: Heart,
    stripeBg: "bg-rose-500",
    iconBg: "bg-rose-50 group-hover:bg-rose-500",
    iconColor: "text-rose-500 group-hover:text-white",
    cardHoverBorder: "hover:border-rose-200",
    ctaColor: "text-rose-500",
  },
  "emergency-medicine": {
    icon: Zap,
    stripeBg: "bg-red-500",
    iconBg: "bg-red-50 group-hover:bg-red-500",
    iconColor: "text-red-600 group-hover:text-white",
    cardHoverBorder: "hover:border-red-200",
    ctaColor: "text-red-600",
  },
  "behavioral-medicine": {
    icon: Brain,
    stripeBg: "bg-indigo-500",
    iconBg: "bg-indigo-50 group-hover:bg-indigo-500",
    iconColor: "text-indigo-600 group-hover:text-white",
    cardHoverBorder: "hover:border-indigo-200",
    ctaColor: "text-indigo-600",
  },
};

const FALLBACK_CONFIG: RotationConfig = {
  icon: Stethoscope,
  stripeBg: "bg-gray-400",
  iconBg: "bg-gray-100 group-hover:bg-gray-500",
  iconColor: "text-gray-600 group-hover:text-white",
  cardHoverBorder: "hover:border-gray-200",
  ctaColor: "text-gray-600",
};

export function RotationCard({ rotation, unlocked, hasPaperTools }: RotationCardProps) {
  const href = unlocked ? `/rotations/${rotation.slug}` : `/store`;
  const config = ROTATION_CONFIGS[rotation.slug] ?? FALLBACK_CONFIG;
  const RotationIcon = config.icon;

  const cardContent = (
    <div
      className={cn(
        "group relative rounded-xl border bg-card overflow-hidden transition-all duration-200 shadow-sm h-full flex flex-col",
        unlocked
          ? cn("cursor-pointer hover:shadow-md", config.cardHoverBorder)
          : "opacity-55 cursor-not-allowed grayscale"
      )}
    >
      {/* Thin color accent strip at top */}
      <div className={cn("h-1 w-full shrink-0", config.stripeBg)} />

      <div className="p-5 flex flex-col flex-1">
        {/* Icon + badges row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={cn(
              "h-11 w-11 rounded-xl flex items-center justify-center transition-colors duration-200 shrink-0",
              config.iconBg
            )}
          >
            <RotationIcon
              className={cn(
                "h-5 w-5 transition-colors duration-200",
                config.iconColor
              )}
            />
          </div>

          <div className="flex items-center gap-1.5 mt-0.5">
            {!unlocked && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border">
                <Lock className="h-2.5 w-2.5" />
                Locked
              </span>
            )}
            {hasPaperTools && unlocked && (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-muted text-muted-foreground border">
                <FileText className="h-2.5 w-2.5" />
                PDF
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-bold text-sm leading-snug mb-1.5">{rotation.name}</h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed flex-1">
          {rotation.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 mt-4 border-t border-border">
          <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
            7 sections
          </span>
          {unlocked ? (
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200",
                config.ctaColor
              )}
            >
              Open{" "}
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-200" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
              <Lock className="h-3 w-3" /> Unlock
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Link href={href} className="block h-full">
      {cardContent}
    </Link>
  );
}
