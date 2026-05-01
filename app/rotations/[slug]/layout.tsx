import { notFound, redirect } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { ROTATIONS, getRotation } from "@/lib/utils";
import type { RotationSlug } from "@/types";
import { RotationSectionNav } from "@/components/rotation/rotation-section-nav";

export async function generateStaticParams() {
  return ROTATIONS.map((r) => ({ slug: r.slug }));
}

export default async function RotationSlugLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const rotation = getRotation(params.slug as RotationSlug);
  if (!rotation) notFound();

  // Skip auth/module checks in local dev when Supabase is not yet configured
  const devMode = !isSupabaseConfigured;
  let hasPaperTools = false;

  if (!devMode) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");

    const { data: module } = await supabase
      .from("user_modules")
      .select("rotation_slug, has_paper_tools")
      .eq("user_id", user.id)
      .eq("rotation_slug", params.slug)
      .single();

    if (!module) {
      redirect(`/store?rotation=${params.slug}`);
    }
    hasPaperTools = module.has_paper_tools ?? false;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-full">
      <RotationSectionNav
        slug={params.slug as RotationSlug}
        rotationName={rotation.name}
        hasPaperTools={hasPaperTools}
      />
      <div className="flex-1 p-6 pb-24 lg:pb-6 min-w-0">
        {children}
      </div>
    </div>
  );
}
