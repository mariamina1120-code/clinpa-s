import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getConditionsByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ConditionsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const conditions = getConditionsByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Conditions</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {conditions.length} diagnoses
        </p>
      </div>

      {conditions.length === 0 ? (
        <p className="text-muted-foreground">No conditions loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {conditions.map((condition) => (
            <AccordionItem
              key={condition.id}
              value={condition.id}
              className="border rounded-xl px-4 bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-start gap-3 text-left w-full pr-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-sm">{condition.name}</span>
                      {condition.icdCode && (
                        <Badge variant="outline" className="text-xs font-mono shrink-0">
                          {condition.icdCode}
                        </Badge>
                      )}
                    </div>
                    {condition.category && (
                      <p className="text-xs text-muted-foreground mt-0.5">{condition.category}</p>
                    )}
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 space-y-4">
                {condition.definition && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Definition</h3>
                    <p className="text-sm">{condition.definition}</p>
                  </div>
                )}

                {condition.diagnosticCriteria && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Diagnostic Criteria</h3>
                    <p className="text-sm whitespace-pre-line">{condition.diagnosticCriteria}</p>
                  </div>
                )}

                {condition.presentation && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Presentation</h3>
                    {(condition.presentation.chiefComplaint?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Chief Complaint</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {condition.presentation.chiefComplaint?.map((c, i) => (
                            <li key={i} className="text-sm text-muted-foreground italic">"{c}"</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {(condition.presentation.associatedSymptoms?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1">Associated Symptoms</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          {condition.presentation.associatedSymptoms?.map((s, i) => (
                            <li key={i} className="text-sm">{s}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {condition.presentation.demographics && (
                      <p className="text-sm text-muted-foreground">{condition.presentation.demographics}</p>
                    )}
                  </div>
                )}

                {condition.distinguishingFeatures && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Distinguishing Features</h3>
                    <p className="text-sm">{condition.distinguishingFeatures}</p>
                  </div>
                )}

                {(condition.redFlags?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-1">🚩 Red Flags</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {condition.redFlags?.map((f, i) => (
                        <li key={i} className="text-sm text-red-600 dark:text-red-400">{f}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(condition.mnemonics?.length ?? 0) > 0 && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mnemonics</h3>
                    {condition.mnemonics?.map((m, i) => (
                      <div key={i} className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                        <p className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-0.5">{m.name}</p>
                        <p className="text-sm text-teal-900 dark:text-teal-100">{m.content}</p>
                      </div>
                    ))}
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
