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
} from "lucide-react";

const STORAGE_KEY = "rotationNavCollapsed";

interface SectionItem {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  paperOnly?: boolean;
}

function getSections(slug: RotationSlug, hasPaperTools: boolean): SectionItem[] {
  const base = `/rotations/${slug}`;
  return [
    { href: base, icon: BookOpen, label: "Overview" },
    { href: `${base}/conditions`, icon: Stethoscope, label: "Conditions" },
    { href: `${base}/pharmacology`, icon: Pill, label: "Pharmacology" },
    { href: `${base}/chart`, icon: FileText, label: "New Chart" },
    { href: `${base}/charts`, icon: ClipboardList, label: "Saved Charts" },
    { href: `${base}/physical-exam`, icon: Hand, label: "Physical Exam" },
    { href: `${base}/labs`, icon: FlaskConical, label: "Labs & Imaging" },
    { href: `${base}/differentials`, icon: GitBranch, label: "Differentials" },
    { href: `${base}/guidelines`, icon: BookOpen, label: "Guidelines" },
    { href: `${base}/procedures`, icon: CheckSquare, label: "Procedures" },
    { href: `${base}/quiz`, icon: HelpCircle, label: "Quiz" },
    { href: `${base}/presentation`, icon: Presentation, label: "Presentation" },
    ...(hasPaperTools
      ? [{ href: "/paper-tools", icon: Download, label: "Paper Tools", paperOnly: true }]
      : []),
  ];
}

interface RotationSectionNavProps {
  slug: RotationSlug;
  rotationName: string;
  rotationIcon: string;
  hasPaperTools: boolean;
}

export function RotationSectionNav({
  slug,
  rotationName,
  rotationIcon,
  hasPaperTools,
}: RotationSectionNavProps) {
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
          "hidden lg:flex flex-col border-r bg-slate-50 dark:bg-slate-900 min-h-full shrink-0 transition-[width] duration-200 ease-in-out",
          isCollapsed ? "w-14" : "w-56"
        )}
      >
        <div className="p-3 border-b flex items-center gap-2 min-h-[64px]">
          {!isCollapsed && (
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="text-2xl shrink-0">{rotationIcon}</span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Rotation</p>
                <p className="font-semibold text-sm leading-tight truncate">{rotationName}</p>
              </div>
            </div>
          )}
          {isCollapsed && <span className="text-2xl mx-auto">{rotationIcon}</span>}
          <button
            onClick={toggle}
            aria-label={isCollapsed ? "Expand sections" : "Collapse sections"}
            className={cn(
              "p-1.5 rounded-md text-muted-foreground hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-foreground transition-colors shrink-0",
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
        <nav
          className="flex-1 p-2 space-y-0.5 overflow-y-auto scrollbar-thin"
          aria-label="Section navigation"
        >
          {sections.map(({ href, icon: Icon, label, paperOnly }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                title={isCollapsed ? label : undefined}
                className={cn(
                  "flex items-center gap-2.5 rounded-md text-sm font-medium transition-colors",
                  isCollapsed ? "justify-center px-2 py-2" : "px-3 py-2",
                  active
                    ? "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300"
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground dark:hover:bg-slate-800",
                  paperOnly && "text-teal-600 dark:text-teal-400"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span className="truncate">{label}</span>}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile horizontal scroll nav (unchanged) */}
      <div className="lg:hidden sticky top-0 z-30 bg-white dark:bg-slate-900 border-b">
        <nav
          className="flex overflow-x-auto scrollbar-none px-2 py-1 gap-1"
          aria-label="Section navigation"
        >
          {sections.map(({ href, icon: Icon, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-md text-xs font-medium whitespace-nowrap transition-colors shrink-0",
                  active
                    ? "bg-teal-50 text-teal-700"
                    : "text-muted-foreground hover:bg-slate-100 hover:text-foreground"
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
