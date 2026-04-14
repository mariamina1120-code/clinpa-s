import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getLabsImagingByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LabsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const { labs, imaging } = getLabsImagingByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Labs & Imaging</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {labs.length} lab values · {imaging.length} imaging studies
        </p>
      </div>

      {/* Lab Values */}
      {labs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-semibold">Lab Values</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {labs.map((lab) => (
              <AccordionItem key={lab.id} value={lab.id} className="border rounded-xl px-4 bg-card">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="text-left w-full pr-2">
                    <p className="font-semibold text-sm">{lab.name}</p>
                    {lab.normalRange && typeof lab.normalRange === "string" && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Normal: {lab.normalRange}
                        {lab.units ? ` (${lab.units})` : ""}
                      </p>
                    )}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-4 space-y-4">
                  {lab.clinicalSignificance && (
                    <p className="text-sm">{lab.clinicalSignificance}</p>
                  )}

                  {lab.criticalValues && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                      <p className="text-xs font-bold text-red-700 dark:text-red-300 mb-0.5">⚠️ Critical Values</p>
                      <p className="text-sm text-red-800 dark:text-red-200">{lab.criticalValues}</p>
                    </div>
                  )}

                  {Array.isArray(lab.interpretation) && lab.interpretation.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Interpretation</h3>
                      <div className="space-y-2">
                        {(lab.interpretation as { finding: string; meaning: string }[]).map((interp, i) => (
                          <div key={i} className="border rounded-lg p-3 bg-muted/30">
                            <p className="text-xs font-semibold text-muted-foreground mb-0.5">{interp.finding}</p>
                            <p className="text-sm">{interp.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {lab.whenToOrder && lab.whenToOrder.length > 0 && (
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">When to Order</h3>
                      <ul className="list-disc list-inside space-y-0.5">
                        {lab.whenToOrder.map((w, i) => (
                          <li key={i} className="text-sm">{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {lab.boardRecallTips && lab.boardRecallTips.length > 0 && (
                    <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                      <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Board Recall</h3>
                      <ul className="space-y-0.5">
                        {lab.boardRecallTips.map((t, i) => (
                          <li key={i} className="text-sm text-teal-900 dark:text-teal-100">• {t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {/* Imaging */}
      {imaging.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-semibold">Imaging</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {imaging.map((img) => {
              const displayName = img.name ?? img.finding ?? "Unknown";
              return (
                <AccordionItem key={img.id} value={img.id} className="border rounded-xl px-4 bg-card">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="text-left w-full pr-2 flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">{displayName}</span>
                      <Badge variant="outline" className="text-xs shrink-0">{img.modality}</Badge>
                      {img.region && <span className="text-xs text-muted-foreground">{img.region}</span>}
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="pb-4 space-y-4">
                    {img.indication && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Indication</h3>
                        <p className="text-sm">{img.indication}</p>
                      </div>
                    )}

                    {img.normalFindings && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">Normal Findings</h3>
                        <p className="text-sm">{img.normalFindings}</p>
                      </div>
                    )}

                    {img.abnormalFindings && img.abnormalFindings.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Abnormal Findings</h3>
                        <div className="space-y-2">
                          {img.abnormalFindings.map((af, i) =>
                            typeof af === "string" ? (
                              <p key={i} className="text-sm">• {af}</p>
                            ) : (
                              <div key={i} className="border rounded-lg p-3 bg-muted/30">
                                <p className="text-xs font-semibold mb-0.5">{af.finding}</p>
                                <p className="text-sm text-muted-foreground">{af.interpretation}</p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Key features (original format) */}
                    {img.keyFeatures && img.keyFeatures.length > 0 && (
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Key Features</h3>
                        <ul className="list-disc list-inside space-y-0.5">
                          {img.keyFeatures.map((f, i) => (
                            <li key={i} className="text-sm">{f}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {img.clinicalPearls && img.clinicalPearls.length > 0 && (
                      <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                        <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Clinical Pearls</h3>
                        <ul className="space-y-0.5">
                          {img.clinicalPearls.map((p, i) => (
                            <li key={i} className="text-sm text-teal-900 dark:text-teal-100">• {p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </section>
      )}

      {labs.length === 0 && imaging.length === 0 && (
        <p className="text-muted-foreground">No labs or imaging data loaded for this rotation.</p>
      )}
    </div>
  );
}
