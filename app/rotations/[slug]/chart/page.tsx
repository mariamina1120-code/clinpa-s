import { notFound } from "next/navigation";
import { Suspense } from "react";
import type { RotationSlug } from "@/types";
import { ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { ChartPageWrapper } from "@/components/charting/chart-page-wrapper";
import { Loader2 } from "lucide-react";

function ChartLoading() {
  return (
    <div className="flex items-center justify-center py-16">
      <Loader2 className="h-6 w-6 animate-spin text-teal-600 mr-2" />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  );
}

export default function NewChartPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const rotationName =
    ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];
  if (!rotationName) notFound();

  return (
    <Suspense fallback={<ChartLoading />}>
      <ChartPageWrapper
        rotationSlug={slug}
        rotationName={rotationName}
      />
    </Suspense>
  );
}
