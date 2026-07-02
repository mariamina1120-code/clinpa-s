"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  FileText,
  GraduationCap,
  LogOut,
  Settings,
  ShieldCheck,
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { ClinPASLockup, ClinPASIcon } from "@/components/brand/logo";

const STORAGE_KEY = "appSidebarCollapsed";

const topNavItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/rotations", icon: BookOpen, label: "Rotations" },
  { href: "/case-log", icon: ClipboardList, label: "Case Log" },
  { href: "/paper-tools", icon: FileText, label: "Paper Tools" },
  { href: "/store", icon: GraduationCap, label: "Get More" },
];

const bottomNavItems = [
  { href: "/account", icon: Settings, label: "Account & Settings" },
  { href: "/privacy", icon: ShieldCheck, label: "Privacy Policy" },
];

interface AppSidebarProps {
  userName?: string;
  userInitials?: string;
}

export function AppSidebar({ userName, userInitials }: AppSidebarProps) {
  const pathname = usePathname();
  const supabase = createClient();
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

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/auth/login";
  };

  // Avoid hydration mismatch — render expanded on server
  const isCollapsed = mounted && collapsed;

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col min-h-screen text-white border-r border-navy-700 transition-[width] duration-200 ease-in-out",
        "bg-navy-500",
        isCollapsed ? "w-16" : "w-64"
      )}
      style={{ backgroundColor: "#1e3a5f", borderColor: "#162742" }}
    >
      {/* Logo + collapse toggle */}
      <div className="p-4 border-b flex items-center justify-between gap-2 min-h-[64px]" style={{ borderColor: "#162742" }}>
        {!isCollapsed && (
          <Link href="/dashboard" className="flex items-center min-w-0">
            <ClinPASLockup size={20} tone="dark" />
          </Link>
        )}
        {isCollapsed && (
          <Link href="/dashboard" className="mx-auto">
            <ClinPASIcon size={32} />
          </Link>
        )}
        {!isCollapsed && (
          <button
            onClick={toggle}
            aria-label="Collapse sidebar"
            className="p-1.5 rounded-md text-teal-200/60 hover:bg-white/10 hover:text-white transition-colors shrink-0"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        )}
        {isCollapsed && (
          <button
            onClick={toggle}
            aria-label="Expand sidebar"
            className="sr-only"
          />
        )}
      </div>

      {/* Collapse toggle when collapsed (below icon) */}
      {isCollapsed && (
        <div className="flex justify-center py-1">
          <button
            onClick={toggle}
            aria-label="Expand sidebar"
            className="p-1.5 rounded-md text-teal-200/60 hover:bg-white/10 hover:text-white transition-colors"
          >
            <PanelLeftOpen className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main nav */}
      <nav className="flex-1 p-2 space-y-1" aria-label="Main navigation">
        {topNavItems.map(({ href, icon: Icon, label }) => {
          const active =
            pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              title={isCollapsed ? label : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg text-sm font-medium transition-colors",
                isCollapsed ? "justify-center px-2 py-2.5" : "px-3 py-2.5",
                active
                  ? "bg-teal-600 text-white"
                  : "text-teal-100/80 hover:bg-white/10 hover:text-white"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!isCollapsed && (
                <>
                  <span className="truncate">{label}</span>
                  {active && <ChevronRight className="ml-auto h-4 w-4" />}
                </>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="p-2 space-y-1" style={{ borderTop: "1px solid #162742" }}>
        {bottomNavItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            title={isCollapsed ? label : undefined}
            className={cn(
              "flex items-center gap-3 rounded-lg text-sm text-teal-100/60 hover:bg-white/10 hover:text-white transition-colors",
              isCollapsed ? "justify-center px-2 py-2" : "px-3 py-2"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {!isCollapsed && <span className="truncate">{label}</span>}
          </Link>
        ))}

        {/* User + sign out */}
        <div className="pt-2 mt-2" style={{ borderTop: "1px solid #162742" }}>
          <div
            className={cn(
              "flex items-center gap-3 py-2",
              isCollapsed ? "justify-center px-2" : "px-3"
            )}
            title={isCollapsed ? userName ?? "Student" : undefined}
          >
            <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold shrink-0">
              {userInitials ?? "PA"}
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-teal-100 truncate">
                  {userName ?? "Student"}
                </p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            title={isCollapsed ? "Sign out" : undefined}
            className={cn(
              "w-full gap-3 text-teal-100/60 hover:text-white hover:bg-white/10 text-sm",
              isCollapsed ? "justify-center px-2" : "justify-start px-3"
            )}
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && "Sign out"}
          </Button>
        </div>
      </div>
    </aside>
  );
}
