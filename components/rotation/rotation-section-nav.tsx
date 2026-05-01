"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { RotationSlug } from "@/types";
import { cn } from "@/lib/utils";
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
  Download,
  Presentation,
  PanelLeftClose,
  PanelLeftOpen,
  Activity,
  Scissors,
  Baby,
  Heart,
  Zap,
  Brain,
  type LucideIcon,
} from "lucide-react";

// ─── Rotation icon + color config (mirrors rotation-card.tsx) ─────────────────
interface RotationHeaderConfig { icon: LucideIcon; bg: string; iconColor: string; }
const ROTATION_HEADER: Record<string, RotationHeaderConfig> = {
  "family-medicine":    { icon: Stethoscope, bg: "bg-teal-50 dark:bg-teal-900/40",   iconColor: "text-teal-600 dark:text-teal-400"   },
  "internal-medicine":  { icon: Activity,    bg: "bg-blue-50 dark:bg-blue-900/40",   iconColor: "text-blue-600 dark:text-blue-400"   },
  "general-surgery":    { icon: Scissors,    bg: "bg-slate-100 dark:bg-slate-800",   iconColor: "text-slate-600 dark:text-slate-400" },
  "pediatrics":         { icon: Baby,        bg: "bg-amber-50 dark:bg-amber-900/40", iconColor: "text-amber-600 dark:text-amber-400" },
  "womens-health":      { icon: Heart,       bg: "bg-rose-50 dark:bg-rose-900/40",   iconColor: "text-rose-500 dark:text-rose-400"   },
  "emergency-medicine": { icon: Zap,         bg: "bg-red-50 dark:bg-red-900/40",     iconColor: "text-red-600 dark:text-red-400"     },
  "behavioral-medicine":{ icon: Brain,       bg: "bg-indigo-50 dark:bg-indigo-900/40", iconColor: "text-indigo-600 dark:text-indigo-400" },
};

const STORAGE_KEY = "rotationNavCollapsed";

interface SectionItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  paperOnly?: boolean;
  activeColor: string;
  activeBg: string;
}

function getSections(slug: RotationSlug, hasPaperTools: boolean): SectionItem[] {
  const base = `/rotations/${slug}`;
  return [
    { href: base, icon: BookOpen, label: "Overview", activeColor: "text-teal-700 dark:text-teal-300", activeBg: "bg-teal-50 dark:bg-teal-900/40" },
    { href: `${base}/conditions`, icon: Stethoscope, label: "Conditions", activeColor: "text-teal-700 dark:text-teal-300", activeBg: "bg-teal-50 dark:bg-teal-900/40" },
    { href: `${base}/pharmacology`, icon: Pill, label: "Pharmacology", activeColor: "text-blue-700 dark:text-blue-300", activeBg: "bg-blue-50 dark:bg-blue-900/40" },
    { href: `${base}/chart`, icon: FileText, label: "New Chart", activeColor: "text-slate-700 dark:text-slate-300", activeBg: "bg-slate-100 dark:bg-slate-800" },
    { href: `${base}/charts`, icon: ClipboardList, label: "Saved Charts", activeColor: "text-slate-700 dark:text-slate-300", activeBg: "bg-slate-100 dark:bg-slate-800" },
    { href: `${base}/physical-exam`, icon: Hand, label: "Physical Exam", activeColor: "text-amber-700 dark:text-amber-300", activeBg: "bg-amber-50 dark:bg-amber-900/40" },
    { href: `${base}/labs`, icon: FlaskConical, label: "Labs & Imaging", activeColor: "text-violet-700 dark:text-violet-300", activeBg: "bg-violet-50 dark:bg-violet-900/40" },
    { href: `${base}/differentials`, icon: GitBranch, label: "Differentials", activeColor: "text-orange-700 dark:text-orange-300", activeBg: "bg-orange-50 dark:bg-orange-900/40" },
    { href: `${base}/guidelines`, icon: BookOpen, label: "Guidelines", activeColor: "text-green-700 dark:text-green-300", activeBg: "bg-green-50 dark:bg-green-900/40" },
    { href: `${base}/procedures`, icon: CheckSquare, label: "Procedures", activeColor: "text-rose-700 dark:text-rose-300", activeBg: "bg-rose-50 dark:bg-rose-900/40" },
    { href: `${base}/quiz`, icon: HelpCircle, label: "Quiz", activeColor: "text-purple-700 dark:text-purple-300", activeBg: "bg-purple-50 dark:bg-purple-900/40" },
    { href: `${base}/presentation`, icon: Presentation, label: "Presentation", activeColor: "text-indigo-700 dark:text-indigo-300", activeBg: "bg-indigo-50 dark:bg-indigo-900/40" },
    ...(hasPaperTools
      ? [{ href: "/paper-tools", icon: Download, label: "Paper Tools", paperOnly: true, activeColor: "text-teal-700 dark:text-teal-300", activeBg: "bg-teal-50 dark:bg-teal-900/40" }]
      : []),
  ];
}

interface RotationSectionNavProps {
  slug: RotationSlug;
  rotationName: string;
  hasPaperTools: boolean;
}

export function RotationSectionNav({
  slug,
  rotationName,
  hasPaperTools,
}: RotationSectionNavProps) {
  const headerConfig = ROTATION_HEADER[slug] ?? ROTATION_HEADER["family-medicine"];
  const HeaderIcon = headerConfig.icon;
  const pathname = usePathname();
  const sections = getSections(slug, hasPaperTools);
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") setCollapsed(true);
  }, []);

  const toggle = () => {
    setCollapsed((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  const isCollapsed = mounted && collapsed;

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r bg-background dark:bg-slate-900/50 min-h-full shrink-0 transition-[width] duration-200 ease-in-out",
          isCollapsed ? "w-14" : "w-56"
        )}
      >
        {/* Header */}
        <div className="p-3 border-b flex items-center gap-2 min-h-[64px]">
          {!isCollapsed && (
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className={cn("h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border border-border/50", headerConfig.bg)}>
                <HeaderIcon className={cn("h-4 w-4", headerConfig.iconColor)} />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Rotation</p>
                <p className="font-semibold text-sm leading-tight truncate">{rotationName}</p>
              </div>
            </div>
          )}
          {isCollapsed && (
            <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center mx-auto", headerConfig.bg)}>
              <HeaderIcon className={cn("h-4 w-4", headerConfig.iconColor)} />
            </div>
          )}
          <button
            onClick={toggle}
            aria-label={isCollapsed ? "Expand sections" : "Collapse sections"}
            className={cn(
              "p-1.5 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors shrink-0",
              isCollapsed && "absolute top-3 right-1"
            )}
          >
            {isCollapsed ? (
              <PanelLeftOpen className="h-4 w-4" />
            ) : (
              <PanelLeftClose className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Nav items */}
        <nav
          className="flex-1 p-2 space-y-0.5 overflow-y-auto scrollbar-thin"
          aria-label="Section navigation"
        >
          {sections.map(({ href, icon: Icon, label, paperOnly, activeColor, activeBg }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={isCollapsed ? label : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg text-sm font-medium transition-all duration-100",
                  isCollapsed ? "justify-center px-2 py-2.5" : "px-3 py-2",
                  active
                    ? `${activeBg} ${activeColor} font-semibold`
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  paperOnly && !active && "text-teal-600 dark:text-teal-400"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span className="truncate">{label}</span>}
                {!isCollapsed && active && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-current shrink-0" />
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile horizontal scroll nav */}
      <div className="lg:hidden sticky top-0 z-30 bg-background border-b shadow-sm">
        <nav
          className="flex overflow-x-auto scrollbar-none px-2 py-1.5 gap-1"
          aria-label="Section navigation"
        >
          {sections.map(({ href, icon: Icon, label, activeColor, activeBg }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors shrink-0",
                  active
                    ? `${activeBg} ${activeColor} font-semibold`
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
