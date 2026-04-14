import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getPhysicalExamByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PhysicalExamPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const findings = getPhysicalExamByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Physical Exam</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {findings.length} exam topics
        </p>
      </div>

      {findings.length === 0 ? (
        <p className="text-muted-foreground">No physical exam data loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {findings.map((finding, idx) => {
            const key = finding.id ?? finding.conditionId ?? String(idx);
            const title = finding.findingName ?? finding.conditionName ?? "Exam Finding";

            return (
              <AccordionItem key={key} value={key} className="border rounded-xl px-4 bg-card">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="text-left w-full pr-2">
                    <p className="font-semibold text-sm">{title}</p>
                    {finding.category && (
                      <p className="text-xs text-muted-foreground mt-0.5">{finding.category}</p>
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-4 space-y-4">
                  {finding.description && (
                    <p className="text-sm">{finding.description}</p>
                  )}

                  {finding.technique && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Technique</h3>
                      <p className="text-sm">{finding.technique}</p>
                    </div>
                  )}

                  {(finding.steps?.length ?? 0) > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Steps</h3>
                      {finding.steps?.map((step) => (
                        <div key={step.stepNumber} className="flex gap-3">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-300 mt-0.5">
                            {step.stepNumber}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{step.title}</p>
                            <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Key maneuvers (original format) */}
                  {(finding.keyManeuvers?.length ?? 0) > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Key Maneuvers</h3>
                      {finding.keyManeuvers?.map((maneuver, i) => (
                        <div key={i} className="border rounded-lg p-3 bg-muted/30">
                          <p className="text-sm font-semibold mb-1">{maneuver.name}</p>
                          <p className="text-xs text-muted-foreground mb-1">
                            <span className="font-medium">Positive:</span> {maneuver.positiveResult}
                          </p>
                          <p className="text-sm">{maneuver.clinicalSignificance}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {finding.normalFindings && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">Normal Findings</h3>
                      <p className="text-sm">{finding.normalFindings}</p>
                    </div>
                  )}

                  {(finding.abnormalFindings?.length ?? 0) > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-orange-600 mb-1.5">Abnormal Findings</h3>
                      <ul className="list-disc list-inside space-y-0.5">
                        {finding.abnormalFindings?.map((af, i) => (
                          <li key={i} className="text-sm">{af}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(finding.clinicalPearls?.length ?? 0) > 0 && (
                    <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                      <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Clinical Pearls</h3>
                      <ul className="space-y-0.5">
                        {finding.clinicalPearls?.map((p, i) => (
                          <li key={i} className="text-sm text-teal-900 dark:text-teal-100">• {p}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(finding.boardRecallTips?.length ?? 0) > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                      <h3 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1.5">Board Recall</h3>
                      <ul className="space-y-0.5">
                        {finding.boardRecallTips?.map((t, i) => (
                          <li key={i} className="text-sm text-blue-900 dark:text-blue-100">• {t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}
