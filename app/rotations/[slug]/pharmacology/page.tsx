import { notFound } from "next/navigation";
import type { RotationSlug, Drug } from "@/types";
import { getPharmacologyByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function groupByClass(drugs: Drug[]): Record<string, Drug[]> {
  return drugs.reduce<Record<string, Drug[]>>((acc, drug) => {
    const cls = drug.drugClass;
    if (!acc[cls]) acc[cls] = [];
    acc[cls].push(drug);
    return acc;
  }, {});
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export default function PharmacologyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const drugs = getPharmacologyByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  const grouped = groupByClass(drugs);
  const classes = Object.keys(grouped);

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* ── Page Header ── */}
      <div className="pb-4 border-b border-border">
        <h1 className="text-2xl font-bold tracking-tight">Pharmacology</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {classes.length} drug classes · {drugs.length} medications
        </p>
      </div>

      {/* ── Drug class quick-jump ── */}
      {classes.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {classes.map((cls) => (
            <a
              key={cls}
              href={`#class-${cls.replace(/\s|\/|\./g, "-")}`}
              className="text-xs font-medium px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800 hover:opacity-80 transition-opacity"
            >
              {cls}
              <span className="ml-1 opacity-60">({grouped[cls].length})</span>
            </a>
          ))}
        </div>
      )}

      {drugs.length === 0 ? (
        <p className="text-muted-foreground">No pharmacology data loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-3">
          {classes.map((className) => {
            const classDrugs = grouped[className];
            return (
              <AccordionItem
                key={className}
                value={className}
                id={`class-${className.replace(/\s|\/|\./g, "-")}`}
                className="border-2 rounded-2xl overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline px-5 py-4">
                  <div className="flex items-center gap-3 text-left w-full pr-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <span className="font-bold text-base flex-1">{className}</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full border bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                      {classDrugs.length} {classDrugs.length === 1 ? "drug" : "drugs"}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4">
                  <Accordion type="single" collapsible className="space-y-2">
                    {classDrugs.map((drug) => (
                      <AccordionItem
                        key={drug.id}
                        value={drug.id}
                        className="border rounded-xl overflow-hidden bg-background"
                      >
                        <AccordionTrigger className="hover:no-underline px-4 py-3.5">
                          <div className="text-left w-full pr-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-semibold text-base">{drug.name}</span>
                              {(drug.brandName ?? drug.brandNames?.[0]) && (
                                <span className="text-xs text-muted-foreground italic">
                                  ({drug.brandName ?? drug.brandNames?.[0]})
                                </span>
                              )}
                            </div>
                            {drug.clinicalRole && (
                              <p className="text-xs text-muted-foreground mt-0.5 font-normal">
                                {drug.clinicalRole}
                              </p>
                            )}
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-5">
                          <div className="space-y-5 pt-1">

                            {/* Why Use This vs Others */}
                            {drug.whyUseThisVsOthers && (
                              <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-4">
                                <p className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide mb-2">
                                  ⚖️ Why This vs. Others
                                </p>
                                <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">
                                  {drug.whyUseThisVsOthers}
                                </p>
                              </div>
                            )}

                            {/* Mechanism of Action */}
                            {(drug.mechanism ?? drug.mechanismOfAction) && (
                              <div>
                                <SectionLabel>Mechanism of Action</SectionLabel>
                                <p className="text-sm leading-relaxed">{drug.mechanism ?? drug.mechanismOfAction}</p>
                              </div>
                            )}

                            {/* Indications */}
                            {(drug.indications?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel>Indications</SectionLabel>
                                <ul className="space-y-1">
                                  {drug.indications?.map((ind, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2">
                                      <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                      {ind}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Dosing */}
                            {drug.dosing && (
                              <div>
                                <SectionLabel>Dosing</SectionLabel>
                                <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
                                  {[
                                    { label: "Adult", value: drug.dosing.adult ?? drug.dosing.adultGeneral },
                                    { label: "Peds", value: drug.dosing.pediatric ?? drug.dosing.pediatricNote },
                                    { label: "Renal", value: drug.dosing.renalAdjustment },
                                    { label: "Hepatic", value: drug.dosing.hepaticAdjustment },
                                  ]
                                    .filter((row) => row.value)
                                    .map((row, i, arr) => (
                                      <div
                                        key={row.label}
                                        className={`flex gap-3 px-4 py-2.5 text-sm ${i < arr.length - 1 ? "border-b border-border" : ""}`}
                                      >
                                        <span className="text-xs font-semibold text-muted-foreground uppercase w-14 shrink-0 mt-0.5">
                                          {row.label}
                                        </span>
                                        <span className="leading-relaxed">{row.value}</span>
                                      </div>
                                    ))}
                                </div>
                              </div>
                            )}

                            {/* Side Effects */}
                            {drug.sideEffects && (
                              <div className="space-y-3">
                                <SectionLabel>Side Effects</SectionLabel>

                                {/* Black Box Warning */}
                                {drug.sideEffects.blackBox && (
                                  <div className="rounded-xl border-2 border-gray-800 dark:border-gray-600 bg-gray-900 dark:bg-gray-950 p-4">
                                    <p className="text-xs font-bold text-white uppercase tracking-wide mb-2">
                                      ⬛ Black Box Warning
                                    </p>
                                    <p className="text-sm text-gray-200 leading-relaxed">
                                      {Array.isArray(drug.sideEffects.blackBox)
                                        ? drug.sideEffects.blackBox.join(" ")
                                        : drug.sideEffects.blackBox}
                                    </p>
                                  </div>
                                )}

                                {/* Serious */}
                                {(drug.sideEffects.serious?.length ?? 0) > 0 && (
                                  <div className="rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20 p-4">
                                    <p className="text-xs font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wide mb-2">
                                      ⚠️ Serious
                                    </p>
                                    <ul className="space-y-1">
                                      {drug.sideEffects.serious?.map((s, i) => (
                                        <li key={i} className="text-sm text-orange-800 dark:text-orange-200 flex items-start gap-2">
                                          <span className="mt-1.5 shrink-0">·</span>
                                          {s}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Common */}
                                {(drug.sideEffects.common?.length ?? 0) > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-1.5">Common</p>
                                    <ul className="space-y-1">
                                      {drug.sideEffects.common?.map((s, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2">
                                          <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                          {s}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Contraindications (structured) */}
                            {drug.contraindicationsStructured && (
                              <div>
                                <SectionLabel className="text-red-500">Contraindications</SectionLabel>
                                <div className="space-y-2">
                                  {(drug.contraindicationsStructured.absolute?.length ?? 0) > 0 && (
                                    <div>
                                      <p className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">Absolute</p>
                                      <ul className="space-y-1">
                                        {drug.contraindicationsStructured.absolute?.map((c, i) => (
                                          <li key={i} className="text-sm flex items-start gap-2">
                                            <span className="text-red-400 mt-1.5 shrink-0">·</span>
                                            {c}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {(drug.contraindicationsStructured.relative?.length ?? 0) > 0 && (
                                    <div>
                                      <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1">Relative</p>
                                      <ul className="space-y-1">
                                        {drug.contraindicationsStructured.relative?.map((c, i) => (
                                          <li key={i} className="text-sm flex items-start gap-2">
                                            <span className="text-orange-400 mt-1.5 shrink-0">·</span>
                                            {c}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}

                            {/* Contraindications (simple array) */}
                            {!drug.contraindicationsStructured && (drug.contraindications?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel className="text-red-500">Contraindications</SectionLabel>
                                <ul className="space-y-1">
                                  {drug.contraindications?.map((c, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2">
                                      <span className="text-red-400 mt-1.5 shrink-0">·</span>
                                      {c}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Interactions (structured) */}
                            {drug.interactionsStructured && (
                              <div>
                                <SectionLabel>Key Interactions</SectionLabel>
                                {(drug.interactionsStructured.drugs?.length ?? 0) > 0 && (
                                  <ul className="space-y-1 mb-2">
                                    {drug.interactionsStructured.drugs?.map((item, i) => (
                                      <li key={i} className="text-sm flex items-start gap-2">
                                        <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {(drug.interactionsStructured.foods?.length ?? 0) > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold text-muted-foreground mt-2 mb-1">Food Interactions</p>
                                    <ul className="space-y-1">
                                      {drug.interactionsStructured.foods?.map((item, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2">
                                          <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Interactions (simple array) */}
                            {!drug.interactionsStructured && (drug.interactions?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel>Key Interactions</SectionLabel>
                                <ul className="space-y-1">
                                  {drug.interactions?.map((item, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2">
                                      <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Monitoring */}
                            {(drug.monitoring?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel>Monitoring</SectionLabel>
                                <ul className="space-y-1">
                                  {drug.monitoring?.map((m, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2">
                                      <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                      {m}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Clinical Pearls */}
                            {(drug.clinicalPearls?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel>Clinical Pearls</SectionLabel>
                                <ul className="space-y-2">
                                  {drug.clinicalPearls?.map((p, i) => (
                                    <li key={i} className="text-sm flex items-start gap-2">
                                      <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                      {p}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Board Recall */}
                            {(drug.boardRecallTip ?? (drug.boardRecallTips?.length ?? 0) > 0) && (
                              <div className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 p-4">
                                <p className="text-xs font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wide mb-2">
                                  🎯 Board Recall
                                </p>
                                {drug.boardRecallTip ? (
                                  <p className="text-sm text-teal-900 dark:text-teal-100 leading-relaxed">
                                    {drug.boardRecallTip}
                                  </p>
                                ) : (
                                  <ul className="space-y-1.5">
                                    {drug.boardRecallTips?.map((t, i) => (
                                      <li key={i} className="text-sm text-teal-900 dark:text-teal-100 flex items-start gap-2">
                                        <span className="mt-1.5 shrink-0">·</span>
                                        {t}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}

                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}
