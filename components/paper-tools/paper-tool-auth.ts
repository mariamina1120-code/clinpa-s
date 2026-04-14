import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { ROTATION_DISPLAY_NAMES, SUPPORTED_ROTATIONS } from "@/lib/seed";
import type { RotationSlug } from "@/types";

/**
 * Validates the slug and checks that the user owns paper tools for this rotation.
 * Returns the validated slug and display name, or redirects/404s as needed.
 */
export async function validatePaperToolAccess(slugParam: string): Promise<{
  slug: RotationSlug;
  displayName: string;
}> {
  const slug = slugParam as RotationSlug;

  if (
    !SUPPORTED_ROTATIONS.includes(slug as (typeof SUPPORTED_ROTATIONS)[number])
  ) {
    notFound();
  }

  const devMode = !isSupabaseConfigured;

  if (!devMode) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");

    const { data: modules } = await supabase
      .from("user_modules")
      .select("rotation_slug, has_paper_tools")
      .eq("user_id", user.id)
      .eq("rotation_slug", slug);

    type ModRow = { rotation_slug: string; has_paper_tools: boolean };
    const hasPaper = (modules ?? ([] as ModRow[])).some(
      (m: ModRow) => m.has_paper_tools
    );
    if (!hasPaper) redirect("/paper-tools");
  }

  const displayName =
    ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES] ??
    slug;

  return { slug, displayName };
}
