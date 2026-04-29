"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import type { RotationSlug, Condition } from "@/types";
import { getConditionsByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";

// ── PAEA system order ──────────────────────────────────────────────────────────
const PAEA_SYSTEM_ORDER = [
  "Cardiovascular","Pulmonary","Gastrointestinal / Hepatology",
  "Renal / Genitourinary","Endocrine","Hematologic","Infectious Disease",
  "Musculoskeletal / Rheumatology","Neurologic","Dermatologic",
  "Psychiatric / Behavioral","EENT","Reproductive","Other",
] as const;

function getPaeaSystem(category?: string): string {
  if (!category) return "Other";
  const c = category.toLowerCase();
  if (c.includes("pulmon")||c.includes("respir")) return "Pulmonary";
  if (c.includes("cardio")||c.includes("vascular")||c.includes("valvular")||c.includes("preventive")) return "Cardiovascular";
  if (c.includes("gastro")||c.includes("hepat")) return "Gastrointestinal / Hepatology";
  if (c.includes("nephro")||c.includes("renal")||c.includes("urolog")) return "Renal / Genitourinary";
  if (c.includes("endocr")) return "Endocrine";
  if (c.includes("hemat")) return "Hematologic";
  if (c.includes("infect")||c.includes("critical care")) return "Infectious Disease";
  if (c.includes("rheum")||c.includes("musculo")) return "Musculoskeletal / Rheumatology";
  if (c.includes("neuro")) return "Neurologic";
  if (c.includes("derm")) return "Dermatologic";
  if (c.includes("psych")||c.includes("behavioral")) return "Psychiatric / Behavioral";
  if (c.includes("eent")||c.includes("ophth")||c.includes("ent")) return "EENT";
  if (c.includes("reproduct")||c.includes("gyn")||c.includes("obstet")) return "Reproductive";
  return "Other";
}

function groupBySystem(conditions: Condition[]): Record<string, Condition[]> {
  return conditions.reduce<Record<string, Condition[]>>((acc, cond) => {
    const sys = getPaeaSystem(cond.category);
    (acc[sys] ??= []).push(cond);
    return acc;
  }, {});
}

// ── Smart parsers ──────────────────────────────────────────────────────────────

function parseMajorMinor(text: string): { major: string[]; minor: string[]; extra: string } | null {
  const majorM = text.match(/Major:\s*([\s\S]*?)(?=\s*Minor:|$)/i);
  const minorM = text.match(/Minor:\s*([\s\S]*?)(?=\s*(BNP|NT-pro|$))/i);
  if (!majorM || !minorM) return null;
  const splitItems = (s: string) =>
    s.split(/,\s*/).map((x) => x.replace(/\.$/, "").trim()).filter(Boolean);
  const extra = text.match(/(BNP[\s\S]*)/i)?.[1]?.trim() ?? "";
  return { major: splitItems(majorM[1]), minor: splitItems(minorM[1]), extra };
}

function parseFeatures(text: string): string[] {
  const items: string[] = [];
  let depth = 0;
  let current = "";
  for (const ch of text) {
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    if (ch === "," && depth === 0) {
      const trimmed = current.trim().replace(/\.$/, "");
      if (trimmed) items.push(trimmed);
      current = "";
    } else {
      current += ch;
    }
  }
  if (current.trim()) items.push(current.trim().replace(/\.$/, ""));
  return items;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 ${className}`}>
      {children}
    </h4>
  );
}

function DiagnosticCriteriaBlock({ text }: { text: string }) {
  const parsed = parseMajorMinor(text);
  if (parsed) {
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">Major Criteria</p>
            <ul className="space-y-1.5">
              {parsed.major.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">Minor Criteria</p>
            <ul className="space-y-1.5">
              {parsed.minor.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {parsed.extra && (
          <p className="text-sm text-muted-foreground italic px-1">{parsed.extra}</p>
        )}
      </div>
    );
  }
  return (
    <p className="text-sm leading-relaxed text-foreground/90 bg-muted/30 rounded-xl border border-border p-4">
      {text}
    </p>
  );
}

function DistinguishingFeaturesBlock({ text }: { text: string }) {
  const items = parseFeatures(text);
  if (items.length > 2) {
    return (
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-block text-sm px-3 py-1.5 rounded-lg border border-border bg-muted/30 leading-snug"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
  return <p className="text-sm leading-relaxed text-foreground/90">{text}</p>;
}

function PresentationBlock({ presentation }: { presentation: NonNullable<Condition["presentation"]> }) {
  const hasCC = (presentation.chiefComplaint?.length ?? 0) > 0;
  const hasSx = (presentation.associatedSymptoms?.length ?? 0) > 0;
  const hasDemog = Boolean(presentation.demographics);

  return (
    <div className="space-y-4">
      {(hasCC || hasSx) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {hasCC && (
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">Chief Complaint</p>
              <ul className="space-y-1.5">
                {presentation.chiefComplaint?.map((c, i) => (
                  <li key={i} className="text-sm italic text-muted-foreground pl-3 border-l-2 border-border">
                    &ldquo;{c}&rdquo;
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasSx && (
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2.5">Associated Symptoms</p>
              <ul className="space-y-1.5">
                {presentation.associatedSymptoms?.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {hasDemog && (
        <p className="text-sm text-muted-foreground italic px-1">{presentation.demographics}</p>
      )}
    </div>
  );
}

// ── Individual condition card ──────────────────────────────────────────────────
function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <details className="group/cond border border-border rounded-xl overflow-hidden bg-background" open={false}>
      <summary className="flex items-start justify-between gap-3 px-4 py-3.5 cursor-pointer list-none select-none hover:bg-muted/20 transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[15px]">{condition.name}</span>
            {condition.icdCode && (
              <code className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground border border-border font-mono">
                {condition.icdCode}
              </code>
            )}
          </div>
          {condition.category && (
            <p className="text-xs text-muted-foreground mt-0.5">{condition.category}</p>
          )}
        </div>
        <svg
          className="h-4 w-4 text-muted-foreground transition-transform group-open/cond:rotate-180 shrink-0 mt-1"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-4 pb-5 border-t border-border space-y-6 pt-5">
        {condition.definition && (
          <div>
            <SectionLabel>Definition</SectionLabel>
            <p className="text-[15px] leading-relaxed text-foreground/90">{condition.definition}</p>
          </div>
        )}
        {condition.diagnosticCriteria && (
          <div>
            <SectionLabel>Diagnostic Criteria</SectionLabel>
            <DiagnosticCriteriaBlock text={condition.diagnosticCriteria} />
          </div>
        )}
        {condition.presentation && (
          <div>
            <SectionLabel>Presentation</SectionLabel>
            <PresentationBlock presentation={condition.presentation} />
          </div>
        )}
        {condition.distinguishingFeatures && (
          <div>
            <SectionLabel>Distinguishing Features</SectionLabel>
            <DistinguishingFeaturesBlock text={condition.distinguishingFeatures} />
          </div>
        )}
        {(condition.redFlags?.length ?? 0) > 0 && (
          <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-3">
              🚩 Red Flags
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {condition.redFlags?.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        )}
        {(condition.mnemonics?.length ?? 0) > 0 && (
          <div className="space-y-2.5">
            <SectionLabel>Mnemonics</SectionLabel>
            {condition.mnemonics?.map((m, i) => (
              <div key={i} className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  🧠 {m.name}
                </p>
                <p className="text-sm leading-relaxed whitespace-pre-line font-medium">
                  {m.content}
                </p>
              </div>
            ))}
          </div>
        )}
        {(condition.pimpingQuestions?.length ?? 0) > 0 && (
          <div>
            <SectionLabel>Pimping Questions</SectionLabel>
            <div className="space-y-2">
              {condition.pimpingQuestions?.map((q, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </details>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function ConditionsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const conditions = getConditionsByRotation(slug);
  const rotationName = ROTATION_DISPLAY_NAMES[slug as keyof typeof ROTATION_DISPLAY_NAMES];
  if (!rotationName) notFound();

  const grouped = groupBySystem(conditions);
  const orderedSystems = PAEA_SYSTEM_ORDER.filter((sys) => grouped[sys]?.length > 0);

  const [activeSystem, setActiveSystem] = useState<string>(orderedSystems[0] ?? "");

  const activeConditions = grouped[activeSystem] ?? [];

  return (
    <div className="flex h-[calc(100vh-8rem)] overflow-hidden">

      {/* Sidebar — 1/3 */}
      <aside className="w-64 shrink-0 border-r border-border overflow-y-auto">
        <div className="px-4 pt-5 pb-3">
          <h1 className="text-base font-bold tracking-tight">Conditions</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {rotationName} · {orderedSystems.length} systems · {conditions.length} diagnoses
          </p>
        </div>

        <nav className="pb-4">
          {orderedSystems.map((system) => {
            const count = grouped[system]?.length ?? 0;
            const isActive = system === activeSystem;
            return (
              <button
                key={system}
                onClick={() => setActiveSystem(system)}
                className={`w-full text-left px-4 py-2.5 flex items-center justify-between gap-2 text-sm transition-colors border-l-2 ${
                  isActive
                    ? "border-foreground bg-muted/50 font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground font-normal"
                }`}
              >
                <span className="leading-snug">{system}</span>
                <span className="text-xs text-muted-foreground shrink-0">{count}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main panel — 2/3 */}
      <main className="flex-1 overflow-y-auto px-6 py-5">
        <div className="max-w-2xl space-y-2">
          <div className="pb-3 mb-1 border-b border-border">
            <h2 className="text-base font-bold">{activeSystem}</h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              {activeConditions.length} {activeConditions.length === 1 ? "condition" : "conditions"}
            </p>
          </div>

          {activeConditions.length === 0 ? (
            <p className="text-muted-foreground text-sm">No conditions for this system.</p>
          ) : (
            activeConditions.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
