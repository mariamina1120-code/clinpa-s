import { notFound } from "next/navigation";
import type { RotationSlug, Condition } from "@/types";
import { getConditionsByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// PAEA Blueprint system categories — display order
const PAEA_SYSTEM_ORDER = [
  "Cardiovascular",
  "Pulmonary",
  "Gastrointestinal / Hepatology",
  "Renal / Genitourinary",
  "Endocrine",
  "Hematologic",
  "Infectious Disease",
  "Musculoskeletal / Rheumatology",
  "Neurologic",
  "Dermatologic",
  "Psychiatric / Behavioral",
  "EENT",
  "Reproductive",
  "Other",
] as const;

// Map a condition's free-form category string to a top-level PAEA system
function getPaeaSystem(category?: string): string {
  if (!category) return "Other";
  const c = category.toLowerCase();
  if (
    c.includes("cardio") ||
    c.includes("vascular") ||
    c.includes("valvular") ||
    c.includes("preventive")
  )
    return "Cardiovascular";
  if (c.includes("pulmon") || c.includes("respir")) return "Pulmonary";
  if (c.includes("gastro") || c.includes("hepat")) return "Gastrointestinal / Hepatology";
  if (c.includes("nephro") || c.includes("renal") || c.includes("urolog"))
    return "Renal / Genitourinary";
  if (c.includes("endocr")) return "Endocrine";
  if (c.includes("hemat")) return "Hematologic";
  if (c.includes("infect") || c.includes("critical care")) return "Infectious Disease";
  if (c.includes("rheum") || c.includes("musculo")) return "Musculoskeletal / Rheumatology";
  if (c.includes("neuro")) return "Neurologic";
  if (c.includes("derm")) return "Dermatologic";
  if (c.includes("psych") || c.includes("behavioral")) return "Psychiatric / Behavioral";
  if (c.includes("eent") || c.includes("ophth") || c.includes("ent")) return "EENT";
  if (c.includes("reproduct") || c.includes("gyn") || c.includes("obstet")) return "Reproductive";
  return "Other";
}

function groupBySystem(conditions: Condition[]): Record<string, Condition[]> {
  return conditions.reduce<Record<string, Condition[]>>((acc, cond) => {
    const sys = getPaeaSystem(cond.category);
    if (!acc[sys]) acc[sys] = [];
    acc[sys].push(cond);
    return acc;
  }, {});
}

export default function ConditionsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const conditions = getConditionsByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  const grouped = groupBySystem(conditions);
  const orderedSystems = PAEA_SYSTEM_ORDER.filter((sys) => grouped[sys]?.length > 0);

  return (
    <div className="max-w-3xl mx-auto space-y-6 font-serif">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-serif">Conditions</h1>
        <p className="text-muted-foreground text-base mt-1 font-sans">
          {rotationName} · {orderedSystems.length} systems · {conditions.length} diagnoses
        </p>
      </div>

      {conditions.length === 0 ? (
        <p className="text-muted-foreground">No conditions loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-3">
          {orderedSystems.map((system) => {
            const systemConditions = grouped[system];
            return (
              <AccordionItem
                key={system}
                value={system}
                className="border-2 rounded-xl px-4 bg-card"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left w-full pr-2">
                    <div className="flex-1">
                      <span className="font-bold text-lg font-serif">{system}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs shrink-0 font-sans">
                      {systemConditions.length}{" "}
                      {systemConditions.length === 1 ? "condition" : "conditions"}
                    </Badge>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="pb-4">
                  <Accordion type="single" collapsible className="space-y-2">
                    {systemConditions.map((condition) => (
                      <AccordionItem
                        key={condition.id}
                        value={condition.id}
                        className="border rounded-lg px-3 bg-background"
                      >
                        <AccordionTrigger className="hover:no-underline py-3">
                          <div className="flex items-start gap-3 text-left w-full pr-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-base font-serif">
                                  {condition.name}
                                </span>
                                {condition.icdCode && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs font-mono shrink-0"
                                  >
                                    {condition.icdCode}
                                  </Badge>
                                )}
                              </div>
                              {condition.category && (
                                <p className="text-sm text-muted-foreground mt-0.5 font-normal font-sans">
                                  {condition.category}
                                </p>
                              )}
                            </div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="pb-4 space-y-5 text-[1.0625rem] leading-relaxed">
                          {condition.definition && (
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 font-sans">
                                Definition
                              </h3>
                              <p className="text-base leading-relaxed">{condition.definition}</p>
                            </div>
                          )}

                          {condition.diagnosticCriteria && (
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 font-sans">
                                Diagnostic Criteria
                              </h3>
                              <p className="text-[0.95rem] whitespace-pre-line font-mono leading-relaxed bg-slate-50 dark:bg-slate-900 rounded-md p-3">
                                {condition.diagnosticCriteria}
                              </p>
                            </div>
                          )}

                          {condition.presentation && (
                            <div className="space-y-3">
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground font-sans">
                                Presentation
                              </h3>
                              {(condition.presentation.chiefComplaint?.length ?? 0) > 0 && (
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground mb-1 font-sans">
                                    Chief Complaint
                                  </p>
                                  <ul className="list-disc list-inside space-y-1">
                                    {condition.presentation.chiefComplaint?.map((c, i) => (
                                      <li
                                        key={i}
                                        className="text-base text-muted-foreground italic"
                                      >
                                        &quot;{c}&quot;
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {(condition.presentation.associatedSymptoms?.length ?? 0) > 0 && (
                                <div>
                                  <p className="text-sm font-medium text-muted-foreground mb-1 font-sans">
                                    Associated Symptoms
                                  </p>
                                  <ul className="list-disc list-inside space-y-1">
                                    {condition.presentation.associatedSymptoms?.map((s, i) => (
                                      <li key={i} className="text-base">
                                        {s}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              {condition.presentation.demographics && (
                                <p className="text-base text-muted-foreground">
                                  {condition.presentation.demographics}
                                </p>
                              )}
                            </div>
                          )}

                          {condition.distinguishingFeatures && (
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 font-sans">
                                Distinguishing Features
                              </h3>
                              <p className="text-[0.95rem] whitespace-pre-line font-mono leading-relaxed bg-slate-50 dark:bg-slate-900 rounded-md p-3">
                                {condition.distinguishingFeatures}
                              </p>
                            </div>
                          )}

                          {(condition.redFlags?.length ?? 0) > 0 && (
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-red-500 mb-1.5 font-sans">
                                🚩 Red Flags
                              </h3>
                              <ul className="list-disc list-inside space-y-1">
                                {condition.redFlags?.map((f, i) => (
                                  <li
                                    key={i}
                                    className="text-base text-red-600 dark:text-red-400"
                                  >
                                    {f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {(condition.mnemonics?.length ?? 0) > 0 && (
                            <div className="space-y-2">
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground font-sans">
                                Mnemonics
                              </h3>
                              {condition.mnemonics?.map((m, i) => (
                                <div
                                  key={i}
                                  className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800"
                                >
                                  <p className="text-sm font-bold text-teal-700 dark:text-teal-300 mb-1 font-sans">
                                    {m.name}
                                  </p>
                                  <p className="text-base text-teal-900 dark:text-teal-100 whitespace-pre-line leading-relaxed">
                                    {m.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}

                          {(condition.pimpingQuestions?.length ?? 0) > 0 && (
                            <div>
                              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-1.5 font-sans">
                                Pimping Questions
                              </h3>
                              <ul className="list-decimal list-inside space-y-1.5">
                                {condition.pimpingQuestions?.map((q, i) => (
                                  <li key={i} className="text-base">
                                    {q}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
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
