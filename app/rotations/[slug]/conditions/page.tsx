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

// System → accent color mapping
const SYSTEM_COLORS: Record<string, { dot: string; badge: string }> = {
  "Cardiovascular":                 { dot: "bg-red-500",    badge: "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800" },
  "Pulmonary":                      { dot: "bg-sky-500",    badge: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900/20 dark:text-sky-300 dark:border-sky-800" },
  "Gastrointestinal / Hepatology":  { dot: "bg-orange-500", badge: "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800" },
  "Renal / Genitourinary":          { dot: "bg-yellow-500", badge: "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800" },
  "Endocrine":                      { dot: "bg-amber-500",  badge: "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800" },
  "Hematologic":                    { dot: "bg-rose-500",   badge: "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900/20 dark:text-rose-300 dark:border-rose-800" },
  "Infectious Disease":             { dot: "bg-green-500",  badge: "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800" },
  "Musculoskeletal / Rheumatology": { dot: "bg-lime-600",   badge: "bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-900/20 dark:text-lime-300 dark:border-lime-800" },
  "Neurologic":                     { dot: "bg-violet-500", badge: "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800" },
  "Dermatologic":                   { dot: "bg-pink-500",   badge: "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900/20 dark:text-pink-300 dark:border-pink-800" },
  "Psychiatric / Behavioral":       { dot: "bg-indigo-500", badge: "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900/20 dark:text-indigo-300 dark:border-indigo-800" },
  "EENT":                           { dot: "bg-cyan-500",   badge: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900/20 dark:text-cyan-300 dark:border-cyan-800" },
  "Reproductive":                   { dot: "bg-purple-500", badge: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800" },
  "Other":                          { dot: "bg-slate-400",  badge: "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800/50 dark:text-slate-400 dark:border-slate-700" },
};

function getPaeaSystem(category?: string): string {
  if (!category) return "Other";
  const c = category.toLowerCase();
  if (c.includes("cardio") || c.includes("vascular") || c.includes("valvular") || c.includes("preventive")) return "Cardiovascular";
  if (c.includes("pulmon") || c.includes("respir")) return "Pulmonary";
  if (c.includes("gastro") || c.includes("hepat")) return "Gastrointestinal / Hepatology";
  if (c.includes("nephro") || c.includes("renal") || c.includes("urolog")) return "Renal / Genitourinary";
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

// ── Sub-components for condition content sections ──

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export default function ConditionsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const conditions = getConditionsByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];

  if (!rotationName) notFound();

  const grouped = groupBySystem(conditions);
  const orderedSystems = PAEA_SYSTEM_ORDER.filter((sys) => grouped[sys]?.length > 0);

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* ── Page Header ── */}
      <div className="pb-4 border-b border-border">
        <h1 className="text-2xl font-bold tracking-tight">Conditions</h1>
        <p className="text-muted-foreground text-sm mt-1">
          {rotationName} · {orderedSystems.length} systems · {conditions.length} diagnoses
        </p>
      </div>

      {/* ── System quick-jump chips ── */}
      {orderedSystems.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {orderedSystems.map((sys) => {
            const colors = SYSTEM_COLORS[sys] ?? SYSTEM_COLORS["Other"];
            return (
              <a
                key={sys}
                href={`#system-${sys.replace(/\s|\/|\./g, "-")}`}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border transition-opacity hover:opacity-80 ${colors.badge}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${colors.dot}`} />
                {sys}
                <span className="opacity-60">({grouped[sys].length})</span>
              </a>
            );
          })}
        </div>
      )}

      {conditions.length === 0 ? (
        <p className="text-muted-foreground">No conditions loaded for this rotation.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-3">
          {orderedSystems.map((system) => {
            const systemConditions = grouped[system];
            const colors = SYSTEM_COLORS[system] ?? SYSTEM_COLORS["Other"];

            return (
              <AccordionItem
                key={system}
                value={system}
                id={`system-${system.replace(/\s|\/|\./g, "-")}`}
                className="border-2 rounded-2xl overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline px-5 py-4">
                  <div className="flex items-center gap-3 text-left w-full pr-2">
                    <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${colors.dot}`} />
                    <span className="font-bold text-base flex-1">{system}</span>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                      {systemConditions.length} {systemConditions.length === 1 ? "condition" : "conditions"}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-4 pb-4">
                  <Accordion type="single" collapsible className="space-y-2">
                    {systemConditions.map((condition) => (
                      <AccordionItem
                        key={condition.id}
                        value={condition.id}
                        className="border rounded-xl overflow-hidden bg-background"
                      >
                        <AccordionTrigger className="hover:no-underline px-4 py-3.5">
                          <div className="flex items-start gap-3 text-left w-full pr-2">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-semibold text-base">
                                  {condition.name}
                                </span>
                                {condition.icdCode && (
                                  <code className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono border border-border">
                                    {condition.icdCode}
                                  </code>
                                )}
                              </div>
                              {condition.category && (
                                <p className="text-xs text-muted-foreground mt-0.5">
                                  {condition.category}
                                </p>
                              )}
                            </div>
                          </div>
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-5">
                          <div className="space-y-5 pt-1 text-[0.9375rem] leading-relaxed">

                            {/* Definition */}
                            {condition.definition && (
                              <div>
                                <SectionLabel>Definition</SectionLabel>
                                <p className="text-base leading-relaxed text-foreground/90">{condition.definition}</p>
                              </div>
                            )}

                            {/* Diagnostic Criteria */}
                            {condition.diagnosticCriteria && (
                              <div>
                                <SectionLabel>Diagnostic Criteria</SectionLabel>
                                <div className="rounded-xl border border-border bg-muted/50 p-4 font-mono text-sm whitespace-pre-line leading-relaxed">
                                  {condition.diagnosticCriteria}
                                </div>
                              </div>
                            )}

                            {/* Presentation */}
                            {condition.presentation && (
                              <div className="space-y-3">
                                <SectionLabel>Presentation</SectionLabel>

                                {(condition.presentation.chiefComplaint?.length ?? 0) > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-1.5">Chief Complaint</p>
                                    <ul className="space-y-1">
                                      {condition.presentation.chiefComplaint?.map((c, i) => (
                                        <li key={i} className="text-sm text-muted-foreground italic pl-3 border-l-2 border-border">
                                          &ldquo;{c}&rdquo;
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {(condition.presentation.associatedSymptoms?.length ?? 0) > 0 && (
                                  <div>
                                    <p className="text-xs font-semibold text-muted-foreground mb-1.5">Associated Symptoms</p>
                                    <ul className="grid grid-cols-1 gap-1">
                                      {condition.presentation.associatedSymptoms?.map((s, i) => (
                                        <li key={i} className="text-sm flex items-start gap-2">
                                          <span className="text-muted-foreground mt-1.5 shrink-0">·</span>
                                          {s}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {condition.presentation.demographics && (
                                  <p className="text-sm text-muted-foreground italic">{condition.presentation.demographics}</p>
                                )}
                              </div>
                            )}

                            {/* Distinguishing Features */}
                            {condition.distinguishingFeatures && (
                              <div>
                                <SectionLabel>Distinguishing Features</SectionLabel>
                                <div className="rounded-xl border border-border bg-muted/50 p-4 font-mono text-sm whitespace-pre-line leading-relaxed">
                                  {condition.distinguishingFeatures}
                                </div>
                              </div>
                            )}

                            {/* Red Flags */}
                            {(condition.redFlags?.length ?? 0) > 0 && (
                              <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-4">
                                <p className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2">
                                  🚩 Red Flags
                                </p>
                                <ul className="space-y-1">
                                  {condition.redFlags?.map((f, i) => (
                                    <li key={i} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                                      <span className="mt-1.5 shrink-0">·</span>
                                      {f}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Mnemonics */}
                            {(condition.mnemonics?.length ?? 0) > 0 && (
                              <div className="space-y-2">
                                <SectionLabel>Mnemonics</SectionLabel>
                                {condition.mnemonics?.map((m, i) => (
                                  <div
                                    key={i}
                                    className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20 p-4"
                                  >
                                    <p className="text-xs font-bold text-teal-700 dark:text-teal-300 mb-2 uppercase tracking-wide">
                                      🧠 {m.name}
                                    </p>
                                    <p className="text-sm text-teal-900 dark:text-teal-100 whitespace-pre-line leading-relaxed font-medium">
                                      {m.content}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Pimping Questions */}
                            {(condition.pimpingQuestions?.length ?? 0) > 0 && (
                              <div>
                                <SectionLabel>Pimping Questions</SectionLabel>
                                <ol className="space-y-2">
                                  {condition.pimpingQuestions?.map((q, i) => (
                                    <li key={i} className="text-sm flex items-start gap-3">
                                      <span className="shrink-0 h-5 w-5 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                                        {i + 1}
                                      </span>
                                      <span>{q}</span>
                                    </li>
                                  ))}
                                </ol>
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
