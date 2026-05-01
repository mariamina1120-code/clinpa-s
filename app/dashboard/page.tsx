import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ROTATIONS } from "@/lib/utils";
import { RotationCard } from "@/components/rotation/rotation-card";
import { RecentActivity } from "@/components/rotation/recent-activity";
import type { RotationSlug } from "@/types";
import { BookOpen, FileText, ClipboardList, ScrollText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Dashboard" };

const ALL_ROTATION_SLUGS: RotationSlug[] = [
  "family-medicine","internal-medicine","general-surgery",
  "pediatrics","womens-health","emergency-medicine","behavioral-medicine",
];

export default async function DashboardPage() {
  const devMode = !isSupabaseConfigured;

  let firstName = "Student";
  let programName = "PA Program";
  let unlockedSlugs = new Set<RotationSlug>();
  let hasPaperTools = new Set<RotationSlug>();
  let recentCharts: Record<string, unknown>[] = [];
  let recentLogs: Record<string, unknown>[] = [];

  if (devMode) {
    unlockedSlugs = new Set(ALL_ROTATION_SLUGS);
    hasPaperTools = new Set(ALL_ROTATION_SLUGS);
    firstName = "Dev";
    programName = "Demo Mode";
  } else {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");

    const [{ data: profile }, { data: modules }, { data: charts }, { data: logs }] =
      await Promise.all([
        supabase.from("profiles").select("full_name, program_name").eq("id", user.id).single(),
        supabase.from("user_modules").select("rotation_slug, has_paper_tools").eq("user_id", user.id),
        supabase
          .from("charts")
          .select("id, rotation_slug, chief_complaint, encounter_date")
          .eq("user_id", user.id)
          .order("updated_at", { ascending: false })
          .limit(5),
        supabase
          .from("case_logs")
          .select("id, rotation_slug, chief_complaint, encounter_date, diagnosis_category")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false })
          .limit(5),
      ]);

    type ModRow = { rotation_slug: string; has_paper_tools: boolean };
    unlockedSlugs = new Set((modules ?? [] as ModRow[]).map((m: ModRow) => m.rotation_slug as RotationSlug));
    hasPaperTools = new Set(
      (modules ?? [] as ModRow[]).filter((m: ModRow) => m.has_paper_tools).map((m: ModRow) => m.rotation_slug as RotationSlug)
    );
    firstName = profile?.full_name?.split(" ")[0] ?? "Student";
    programName = profile?.program_name ?? "PA Program";
    recentCharts = (charts ?? []) as Record<string, unknown>[];
    recentLogs = (logs ?? []) as Record<string, unknown>[];
  }

  const progressPct = Math.round((unlockedSlugs.size / 7) * 100);

  return (
    <div className="max-w-6xl mx-auto space-y-8">

      {/* ── Welcome Banner ── */}
      <div className="rounded-2xl bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 p-7 text-white shadow-lg">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-teal-200 text-sm font-medium mb-1">Welcome back,</p>
            <h1 className="text-3xl font-bold tracking-tight truncate">
              {firstName}
            </h1>
            <p className="text-teal-300 mt-1 text-sm">{programName}</p>
          </div>

          {/* Rotation progress — right side */}
          <div className="shrink-0 hidden sm:flex flex-col items-end gap-1.5">
            <p className="text-xs font-medium text-teal-200">Rotations unlocked</p>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold">{unlockedSlugs.size}</span>
              <span className="text-teal-300 text-sm font-medium">/ 7</span>
            </div>
            <div className="w-32 h-1.5 bg-teal-500/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(progressPct, 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Mobile progress bar */}
        <div className="mt-5 sm:hidden">
          <div className="flex justify-between text-xs text-teal-300 mb-1.5 font-medium">
            <span>Rotations unlocked</span>
            <span>{unlockedSlugs.size} / 7</span>
          </div>
          <div className="h-1.5 bg-teal-500/40 rounded-full overflow-hidden">
            <div
              className="h-full bg-white/80 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progressPct, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Quick Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          {
            label: "Rotations",
            value: unlockedSlugs.size,
            total: 7,
            icon: BookOpen,
            iconColor: "text-teal-600 dark:text-teal-400",
            iconBg: "bg-teal-50 dark:bg-teal-900/30",
          },
          {
            label: "SOAP Charts",
            value: recentCharts?.length ?? 0,
            total: null,
            icon: FileText,
            iconColor: "text-blue-600 dark:text-blue-400",
            iconBg: "bg-blue-50 dark:bg-blue-900/30",
          },
          {
            label: "Case Logs",
            value: recentLogs?.length ?? 0,
            total: null,
            icon: ClipboardList,
            iconColor: "text-violet-600 dark:text-violet-400",
            iconBg: "bg-violet-50 dark:bg-violet-900/30",
          },
          {
            label: "Paper Tools",
            value: hasPaperTools.size,
            total: null,
            icon: ScrollText,
            iconColor: "text-amber-600 dark:text-amber-400",
            iconBg: "bg-amber-50 dark:bg-amber-900/30",
          },
        ].map(({ label, value, total, icon: Icon, iconColor, iconBg }) => (
          <div
            key={label}
            className="rounded-xl border bg-card p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
              <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>
            <div>
              <p className={`text-2xl font-bold ${iconColor}`}>
                {value}
                {total !== null && (
                  <span className="text-muted-foreground text-base font-normal">/{total}</span>
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Rotation Cards ── */}
      <section>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold">Your Rotations</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Select a rotation to start studying
            </p>
          </div>
          <Link
            href="/store"
            className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Unlock more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ROTATIONS.map((rotation) => (
            <RotationCard
              key={rotation.slug}
              rotation={rotation}
              unlocked={unlockedSlugs.has(rotation.slug)}
              hasPaperTools={hasPaperTools.has(rotation.slug)}
            />
          ))}
        </div>
      </section>

      {/* ── Recent Activity ── */}
      <RecentActivity charts={recentCharts as any} logs={recentLogs as any} />
    </div>
  );
}
