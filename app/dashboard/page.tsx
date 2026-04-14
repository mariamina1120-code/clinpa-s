import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ROTATIONS } from "@/lib/utils";
import { RotationCard } from "@/components/rotation/rotation-card";
import { RecentActivity } from "@/components/rotation/recent-activity";
import type { RotationSlug } from "@/types";

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
    // In dev mode, unlock everything
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

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {firstName}</h1>
        <p className="text-muted-foreground mt-1">
          {programName} · {unlockedSlugs.size} of 7 rotations unlocked
        </p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Rotations", value: unlockedSlugs.size, total: 7 },
          { label: "Charts", value: recentCharts?.length ?? 0, total: null },
          { label: "Case Logs", value: recentLogs?.length ?? 0, total: null },
          { label: "Paper Tools", value: hasPaperTools.size, total: null },
        ].map(({ label, value, total }) => (
          <div key={label} className="rounded-lg border bg-card p-4">
            <p className="text-2xl font-bold text-teal-600">
              {value}{total !== null && <span className="text-muted-foreground text-lg">/{total}</span>}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Rotation cards */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Rotations</h2>
          <a href="/store" className="text-sm text-teal-600 hover:underline">
            Unlock more →
          </a>
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

      {/* Recent activity */}
      <RecentActivity charts={recentCharts as any} logs={recentLogs as any} />
    </div>
  );
}
