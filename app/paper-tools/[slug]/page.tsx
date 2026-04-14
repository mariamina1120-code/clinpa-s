import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import { ROTATION_DISPLAY_NAMES, SUPPORTED_ROTATIONS } from "@/lib/seed";
import type { RotationSlug } from "@/types";
import Link from "next/link";

export async function generateStaticParams() {
  return SUPPORTED_ROTATIONS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const name =
    ROTATION_DISPLAY_NAMES[params.slug as keyof typeof ROTATION_DISPLAY_NAMES];
  return {
    title: name ? `${name} Paper Tools` : "Paper Tools",
  };
}

const TOOLS = [
  {
    id: "presentation",
    title: "Preceptor Presentation Worksheet",
    description:
      "Structured worksheet for presenting patients to your preceptor. Includes HPI, vitals, exam findings, differentials, and plan.",
    icon: "🎤",
  },
  {
    id: "differentials",
    title: "Differential Diagnosis Worksheet",
    description:
      "Pre-populated reference tables of differentials organized by chief complaint, with space for your own additions.",
    icon: "🔍",
  },
  {
    id: "hp-template",
    title: "H&P Documentation Template",
    description:
      "Complete History & Physical template with ROS checkboxes and rotation-specific reference hints.",
    icon: "📋",
  },
  {
    id: "soap-template",
    title: "SOAP Note Template",
    description:
      "SOAP-format documentation template for quick clinical notes during rotations.",
    icon: "📝",
  },
];

export default async function RotationPaperToolsPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as RotationSlug;

  if (
    !SUPPORTED_ROTATIONS.includes(
      slug as (typeof SUPPORTED_ROTATIONS)[number]
    )
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
    ROTATION_DISPLAY_NAMES[
      slug as keyof typeof ROTATION_DISPLAY_NAMES
    ] ?? slug;

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-2">
        <Link
          href="/paper-tools"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; All Paper Tools
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{displayName}</h1>
        <p className="text-muted-foreground mt-2">
          Select a worksheet to view and print.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <Link
            key={tool.id}
            href={`/paper-tools/${slug}/${tool.id}`}
            className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{tool.icon}</span>
              <h2 className="text-lg font-semibold group-hover:text-primary transition-colors">
                {tool.title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">{tool.description}</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
              Open &amp; Print
              <span aria-hidden="true">&rarr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
