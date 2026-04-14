import { notFound } from "next/navigation";
import type { RotationSlug } from "@/types";
import { getDifferentialsByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertTriangle } from "lucide-react";

export default function DifferentialsPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug as RotationSlug;
  const differentials = getDifferentialsByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Differential Diagnosis</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {differentials.length} chief complaints
        </p>
      </div>

      {differentials.length === 0 ? (
        <p className="text-muted-foreground">No differentials loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {differentials.map((diffSet, setIdx) => {
            // Support both `differentials` and `diagnoses` field names used across seed files
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dxList: any[] = diffSet.differentials ?? (diffSet as any).diagnoses ?? [];

            return (
            <AccordionItem
              key={diffSet.id ?? String(setIdx)}
              value={diffSet.id ?? String(setIdx)}
              className="border rounded-xl px-4 bg-card"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="text-left w-full pr-2">
                  <p className="font-semibold text-sm">"{diffSet.chiefComplaint}"</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {dxList.filter((d) => d.mustNotMiss || d.likelihood === "must not miss" || d.likelihood === "must_not_miss").length} must-not-miss ·{" "}
                    {dxList.length} diagnoses
                  </p>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-4 space-y-3">
                {[...dxList]
                  .sort((a, b) => Number(b.mustNotMiss ?? 0) - Number(a.mustNotMiss ?? 0))
                  .map((dx, i) => {
                    // Support multiple field names for condition name across seed formats
                    const name = dx.condition ?? dx.conditionName ?? dx.diagnosis ?? dx.name ?? "Unknown";
                    const rawFeatures = dx.distinguishingFeatures ??
                      (Array.isArray(dx.distinguishingHistory) ? dx.distinguishingHistory.join("; ") : dx.distinguishingHistory) ??
                      (Array.isArray(dx.keyFeatures) ? dx.keyFeatures.join("; ") : "") ?? "";
                    const features = typeof rawFeatures === "string" ? rawFeatures : "";
                    const rawWorkup = dx.workup ?? dx.keyWorkup ?? dx.workUp ?? [];
                    const workup = Array.isArray(rawWorkup) ? rawWorkup :
                      typeof rawWorkup === "string" ? [rawWorkup] : [];
                    const isMustNotMiss = dx.mustNotMiss || dx.likelihood === "must_not_miss" || dx.likelihood === "must not miss";

                    return (
                      <div
                        key={i}
                        className={`rounded-lg border p-3 space-y-1 ${
                          isMustNotMiss
                            ? "border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10"
                            : "bg-muted/30"
                        }`}
                      >
                        <div className="flex items-center gap-2 flex-wrap">
                          {isMustNotMiss && (
                            <AlertTriangle className="h-3.5 w-3.5 text-red-500 shrink-0" />
                          )}
                          <span className="text-sm font-semibold">{name}</span>
                          {dx.likelihood && (
                            <Badge
                              variant="outline"
                              className={`text-xs ml-auto shrink-0 ${
                                dx.likelihood === "common" || dx.likelihood === "high"
                                  ? "border-green-300 text-green-700"
                                  : dx.likelihood === "uncommon" || dx.likelihood === "less_common" || dx.likelihood === "medium"
                                  ? "border-yellow-300 text-yellow-700"
                                  : (dx.likelihood === "must_not_miss" || dx.likelihood === "must not miss")
                                  ? "border-red-300 text-red-700"
                                  : "border-slate-300 text-slate-600"
                              }`}
                            >
                              {(dx.likelihood === "must_not_miss" || dx.likelihood === "must not miss") ? "must not miss" : dx.likelihood}
                            </Badge>
                          )}
                        </div>
                        {features && <p className="text-sm text-muted-foreground">{features}</p>}
                        {workup.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {workup.map((w: string, wi: number) => (
                              <Badge key={wi} variant="secondary" className="text-xs">
                                {w}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                {diffSet.keyPearls && diffSet.keyPearls.length > 0 && (
                  <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-3 border border-teal-200 dark:border-teal-800">
                    <h3 className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-1.5">🎯 Key Pearls</h3>
                    <ul className="space-y-0.5">
                      {diffSet.keyPearls.map((p, i) => (
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
      )}
    </div>
  );
}
