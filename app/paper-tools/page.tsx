import { Metadata } from "next";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ROTATION_DISPLAY_NAMES, SUPPORTED_ROTATIONS } from "@/lib/seed";
import type { RotationSlug } from "@/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paper Tools",
  description: "Printable clinical worksheets for your rotations",
};

const ROTATION_ICONS: Record<string, string> = {
  "family-medicine": "🏠",
  "internal-medicine": "🫀",
  "general-surgery": "🔪",
  "pediatrics": "👶",
  "womens-health": "🩺",
  "emergency-medicine": "🚑",
  "behavioral-medicine": "🧠",
};

export default async function PaperToolsHubPage() {
  const devMode = !isSupabaseConfigured;

  let paperToolRotations = new Set<RotationSlug>();

  if (devMode) {
    paperToolRotations = new Set(SUPPORTED_ROTATIONS);
  } else {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) redirect("/auth/login");

    const { data: modules } = await supabase
      .from("user_modules")
      .select("rotation_slug, has_paper_tools")
      .eq("user_id", user.id);

    type ModRow = { rotation_slug: string; has_paper_tools: boolean };
    paperToolRotations = new Set(
      (modules ?? ([] as ModRow[]))
        .filter((m: ModRow) => m.has_paper_tools)
        .map((m: ModRow) => m.rotation_slug as RotationSlug)
    );
  }

  const availableRotations = SUPPORTED_ROTATIONS.filter((slug) =>
    paperToolRotations.has(slug)
  );

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Paper Tools</h1>
        <p className="text-muted-foreground mt-2">
          Printable clinical worksheets you can bring to rotations. Print from
          your browser or save as PDF.
        </p>
      </div>

      {availableRotations.length === 0 ? (
        <div className="rounded-lg border bg-card p-8 text-center">
          <p className="text-muted-foreground text-lg">
            No paper tools available yet.
          </p>
          <p className="text-muted-foreground mt-2">
            Purchase a rotation bundle with paper tools from the{" "}
            <Link href="/store" className="text-primary underline">
              Store
            </Link>{" "}
            to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {availableRotations.map((slug) => (
            <Link
              key={slug}
              href={`/paper-tools/${slug}`}
              className="group rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">
                  {ROTATION_ICONS[slug] ?? "📋"}
                </span>
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {ROTATION_DISPLAY_NAMES[slug]}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground">
                4 printable worksheets: Presentation, Differentials, H&amp;P,
                SOAP Note
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary font-medium">
                View tools
                <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
