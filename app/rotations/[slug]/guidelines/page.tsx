import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getGuidelinesByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function GuidelinesPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const guidelines = getGuidelinesByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Clinical Guidelines</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {guidelines.length} guidelines
        </p>
      </div>

      {guidelines.length === 0 ? (
        <p className="text-muted-foreground">No guidelines loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {guidelines.map((gl, idx) => (
            <AccordionItem key={idx} value={String(idx)} className="border rounded-xl px-4 bg-card">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="text-left w-full pr-2">
                  <p className="font-semibold text-sm">{gl.conditionName}</p>
                  {gl.issuingOrganization && (
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {gl.issuingOrganization}
                      {gl.guidelineName ? ` · ${gl.guidelineName}` : ""}
                    </p>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 space-y-4">
                {(gl.firstLine?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1.5">First-Line Treatment</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.firstLine?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.secondLine?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-yellow-600 mb-1.5">Second-Line Treatment</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.secondLine?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.thirdLine?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-1.5">Third-Line / Refractory</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.thirdLine?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.nonPharmacologic?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Non-Pharmacologic</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.nonPharmacologic?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.whenToRefer?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-1.5">When to Refer</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.whenToRefer?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.monitoringSchedule?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">Monitoring</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {gl.monitoringSchedule?.map((t, i) => <li key={i} className="text-sm">{t}</li>)}
                    </ul>
                  </div>
                )}

                {(gl.patientEducation?.length ?? 0) > 0 && (
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                    <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">Patient Education</h3>
                    <ul className="space-y-0.5">
                      {gl.patientEducation?.map((t, i) => (
                        <li key={i} className="text-sm text-teal-900 dark:text-teal-100">• {t}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}
