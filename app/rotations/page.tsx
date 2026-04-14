import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ROTATIONS } from "@/lib/utils";
import { RotationCard } from "@/components/rotation/rotation-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { RotationSlug } from "@/types";

export const metadata: Metadata = { title: "Rotations" };

const ALL_ROTATION_SLUGS: RotationSlug[] = [
  "family-medicine","internal-medicine","general-surgery",
  "pediatrics","womens-health","emergency-medicine","behavioral-medicine",
];

export default async function RotationsPage() {
  const devMode = !isSupabaseConfigured;
  let unlockedSlugs: Set<RotationSlug>;
  let hasPaperTools: Set<RotationSlug>;

  if (devMode) {
    unlockedSlugs = new Set(ALL_ROTATION_SLUGS);
    hasPaperTools = new Set(ALL_ROTATION_SLUGS);
  } else {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");

    const { data: modules } = await supabase
      .from("user_modules")
      .select("rotation_slug, has_paper_tools")
      .eq("user_id", user.id);

    type ModRow = { rotation_slug: string; has_paper_tools: boolean };
    unlockedSlugs = new Set((modules ?? [] as ModRow[]).map((m: ModRow) => m.rotation_slug as RotationSlug));
    hasPaperTools = new Set(
      (modules ?? [] as ModRow[]).filter((m: ModRow) => m.has_paper_tools).map((m: ModRow) => m.rotation_slug as RotationSlug)
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Clinical Rotations</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {unlockedSlugs.size} of 7 rotations unlocked
          </p>
        </div>
        {unlockedSlugs.size < 7 && (
          <Button asChild>
            <Link href="/store">Unlock More</Link>
          </Button>
        )}
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
    </div>
  );
}
