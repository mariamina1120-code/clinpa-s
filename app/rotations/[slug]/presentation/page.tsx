import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRotation } from "@/lib/utils";
import {
  getDifferentialsByRotation,
  getPhysicalExamByRotation,
  getLabsImagingByRotation,
} from "@/lib/seed";
import type { RotationSlug } from "@/types";
import { PresentationBuilder } from "@/components/presentation/presentation-builder";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const rotation = getRotation(params.slug as RotationSlug);
  return {
    title: rotation
      ? `Presentation Builder - ${rotation.name}`
      : "Presentation Builder",
  };
}

export default function PresentationPage({
  params,
}: {
  params: { slug: string };
}) {
  const rotation = getRotation(params.slug as RotationSlug);
  if (!rotation) notFound();

  const slug = params.slug as RotationSlug;
  const differentials = getDifferentialsByRotation(slug);
  const physicalExam = getPhysicalExamByRotation(slug);
  const { labs, imaging } = getLabsImagingByRotation(slug);

  return (
    <div className="max-w-4xl mx-auto">
      <PresentationBuilder
        rotationSlug={params.slug}
        rotationName={rotation.name}
        differentialSets={differentials}
        physicalExamFindings={physicalExam}
        labs={labs}
        imaging={imaging}
      />
    </div>
  );
}
