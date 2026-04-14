import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getPharmacologyByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PharmacologyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const drugs = getPharmacologyByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Pharmacology</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {drugs.length} drugs
        </p>
      </div>

      {drugs.length === 0 ? (
        <p className="text-muted-foreground">No pharmacology data loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {drugs.map((drug) => (
            <AccordionItem key={drug.id} value={drug.id} className="border rounded-xl px-4 bg-card">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="text-left w-full pr-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{drug.name}</span>
                    {(drug.brandName ?? drug.brandNames?.[0]) && (
                      <span className="text-xs text-muted-foreground italic">({drug.brandName ?? drug.brandNames?.[0]})</span>
                    )}
                    <Badge variant="secondary" className="text-xs ml-auto shrink-0">{drug.drugClass}</Badge>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 space-y-4">
                {(drug.mechanism ?? drug.mechanismOfAction) && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Mechanism of Action</h3>
                    <p className="text-sm">{drug.mechanism ?? drug.mechanismOfAction}</p>
                  </div>
                )}

                {(drug.indications?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Indications</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {drug.indications?.map((ind, i) => <li key={i} className="text-sm">{ind}</li>)}
                    </ul>
                  </div>
                )}

                {drug.dosing && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">Dosing</h3>
                    <div className="grid gap-1.5 text-sm">
                      {(drug.dosing.adult ?? drug.dosing.adultGeneral) && (
                        <div className="flex gap-2">
                          <span className="text-xs font-medium text-muted-foreground shrink-0 w-16">Adult</span>
                          <span>{drug.dosing.adult ?? drug.dosing.adultGeneral}</span>
                        </div>
                      )}
                      {(drug.dosing.pediatric ?? drug.dosing.pediatricNote) && (
                        <div className="flex gap-2">
                          <span className="text-xs font-medium text-muted-foreground shrink-0 w-16">Peds</span>
                          <span>{drug.dosing.pediatric ?? drug.dosing.pediatricNote}</span>
                        </div>
                      )}
                      {drug.dosing.renalAdjustment && (
                        <div className="flex gap-2">
                          <span className="text-xs font-medium text-muted-foreground shrink-0 w-16">Renal</span>
                          <span>{drug.dosing.renalAdjustment}</span>
                        </div>
                      )}
                      {drug.dosing.hepaticAdjustment && (
                        <div className="flex gap-2">
                          <span className="text-xs font-medium text-muted-foreground shrink-0 w-16">Hepatic</span>
                          <span>{drug.dosing.hepaticAdjustment}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {drug.sideEffects && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Side Effects</h3>
                    {drug.sideEffects.blackBox && (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-lg p-3">
                        <p className="text-xs font-bold text-red-700 dark:text-red-300 mb-0.5">⬛ BLACK BOX WARNING</p>
                        <p className="text-sm text-red-800 dark:text-red-200">
                          {Array.isArray(drug.sideEffects.blackBox)
                            ? drug.sideEffects.blackBox.join(" ")
                            : drug.sideEffects.blackBox}
                        </p>
                      </div>
                    )}
                    {(drug.sideEffects.serious?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-medium text-orange-600 mb-1">Serious</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {drug.sideEffects.serious?.map((s, i) => (
                            <li key={i} className="text-sm text-orange-700 dark:text-orange-300">{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(drug.sideEffects.common?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Common</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {drug.sideEffects.common?.map((s, i) => <li key={i} className="text-sm">{s}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {(drug.contraindications?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-1">Contraindications</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {drug.contraindications?.map((c, i) => <li key={i} className="text-sm">{c}</li>)}
                    </ul>
                  </div>
                )}

                {(drug.interactions?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Key Interactions</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {drug.interactions?.map((item, i) => <li key={i} className="text-sm">{item}</li>)}
                    </ul>
                  </div>
                )}

                {(drug.monitoring?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Monitoring</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {drug.monitoring?.map((m, i) => <li key={i} className="text-sm">{m}</li>)}
                    </ul>
                  </div>
                )}

                {(drug.boardRecallTips?.length ?? 0) > 0 && (
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                    <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Board Recall Tips</h3>
                    <ul className="space-y-0.5">
                      {drug.boardRecallTips?.map((t, i) => (
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
