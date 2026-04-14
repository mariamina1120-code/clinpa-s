"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BookOpen, Stethoscope, ClipboardList,
  FlaskConical, FileText, GraduationCap, LogOut, Settings,
  ShieldCheck, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

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
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/auth/login";
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-slate-900 dark:bg-slate-950 text-white border-r border-slate-700">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <Link href="/dashboard" className="flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-teal-400" />
          <span className="font-bold text-lg text-teal-300">ClinicalYear</span>
        </Link>
      </div>

      {/* Main nav */}
      <nav className="flex-1 p-4 space-y-1" aria-label="Main navigation">
        {topNavItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || (href !== "/dashboard" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                active
                  ? "bg-teal-600 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {label}
              {active && <ChevronRight className="ml-auto h-4 w-4" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom nav */}
      <div className="p-4 border-t border-slate-700 space-y-1">
        {bottomNavItems.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </Link>
        ))}

        {/* User + sign out */}
        <div className="pt-2 border-t border-slate-700 mt-2">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center text-xs font-bold shrink-0">
              {userInitials ?? "PA"}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">{userName ?? "Student"}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSignOut}
            className="w-full justify-start gap-3 px-3 text-slate-400 hover:text-white hover:bg-slate-800 text-sm"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </div>
    </aside>
  );
}
