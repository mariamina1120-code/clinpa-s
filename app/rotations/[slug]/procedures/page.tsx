import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getProceduresByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProceduresPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const procedures = getProceduresByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Procedures</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {procedures.length} procedures
        </p>
      </div>

      {procedures.length === 0 ? (
        <p className="text-muted-foreground">No procedures loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {procedures.map((proc) => (
            <AccordionItem key={proc.id} value={proc.id} className="border rounded-xl px-4 bg-card">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="text-left w-full pr-2">
                  <p className="font-semibold text-sm">{proc.name}</p>
                  {proc.overview && (
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{proc.overview}</p>
                  )}
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 space-y-4">
                {proc.overview && (
                  <p className="text-sm">{proc.overview}</p>
                )}

                {(proc.indications?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Indications</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {proc.indications?.map((ind, i) => <li key={i} className="text-sm">{ind}</li>)}
                    </ul>
                  </div>
                )}

                {(proc.contraindications?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-red-500 mb-1">Contraindications</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {proc.contraindications?.map((c, i) => <li key={i} className="text-sm">{c}</li>)}
                    </ul>
                  </div>
                )}

                {(proc.equipment?.length ?? 0) > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">Equipment</h3>
                    <ul className="list-disc list-inside space-y-0.5">
                      {proc.equipment?.map((e, i) => <li key={i} className="text-sm">{e}</li>)}
                    </ul>
                  </div>
                )}

                {(proc.steps?.length ?? 0) > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Step-by-Step</h3>
                    {proc.steps?.map((step) => (
                      <div key={step.stepNumber} className="flex gap-3">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center text-xs font-bold text-teal-700 dark:text-teal-300 mt-0.5">
                          {step.stepNumber}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold">{step.title}</p>
                          <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {(proc.clinicalPearls?.length ?? 0) > 0 && (
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                    <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Clinical Pearls</h3>
                    <ul className="space-y-0.5">
                      {proc.clinicalPearls?.map((p, i) => (
                        <li key={i} className="text-sm text-teal-900 dark:text-teal-100">• {p}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(proc.boardRecallTips?.length ?? 0) > 0 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1.5">Board Recall</h3>
                    <ul className="space-y-0.5">
                      {proc.boardRecallTips?.map((t, i) => (
                        <li key={i} className="text-sm text-blue-900 dark:text-blue-100">• {t}</li>
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
