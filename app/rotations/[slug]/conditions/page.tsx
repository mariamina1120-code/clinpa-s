"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import type { RotationSlug, Condition } from "@/types";
import { getConditionsByRotation, ROTATION_DISPLAY_NAMES } from "@/lib/seed";
import {
  EOR_BLUEPRINTS,
  getBlueprintCategory,
} from "@/lib/seed/shared/eor-blueprints";

// ── Blueprint-driven grouping ──────────────────────────────────────────────────
const UNMAPPED = "Additional Topics";

function groupByBlueprint(
  slug: RotationSlug,
  conditions: Condition[]
): Record<string, Condition[]> {
  return conditions.reduce<Record<string, Condition[]>>((acc, cond) => {
    const cat = getBlueprintCategory(slug, cond);
    const key = cat?.name ?? UNMAPPED;
    (acc[key] ??= []).push(cond);
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
    <h4 className={`text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 ${className}`}>
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
                <li key={i} className="flex items-start gap-2">
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
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300 dark:bg-slate-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {parsed.extra && (
          <p className="text-muted-foreground italic px-1">{parsed.extra}</p>
        )}
      </div>
    );
  }
  return (
    <p className="leading-relaxed text-foreground/90 bg-muted/30 rounded-xl border border-border p-4">
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
            className="inline-block px-3 py-1.5 rounded-lg border border-border bg-muted/30 leading-snug"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }
  return <p className="leading-relaxed text-foreground/90">{text}</p>;
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
                  <li key={i} className="italic text-muted-foreground pl-3 border-l-2 border-border">
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
                  <li key={i} className="flex items-start gap-2">
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
        <p className="text-muted-foreground italic px-1">{presentation.demographics}</p>
      )}
    </div>
  );
}

// ── OpenEvidence quick-link ────────────────────────────────────────────────────
function AskOpenEvidence({ conditionName }: { conditionName: string }) {
  const [copied, setCopied] = useState(false);
  const question = `What is the current evidence-based approach to the diagnosis and management of ${conditionName}?`;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(question);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* clipboard unavailable — still open OpenEvidence */
    }
    window.open("https://www.openevidence.com/", "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Copies a question to your clipboard and opens OpenEvidence — paste to ask"
      className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-lg border border-border bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
    >
      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
      {copied ? "Question copied — paste it there" : "Ask OpenEvidence"}
    </button>
  );
}

// ── Individual condition card ──────────────────────────────────────────────────
function ConditionCard({ condition }: { condition: Condition }) {
  return (
    <details className="group/cond border border-border rounded-xl overflow-hidden bg-background" open={false}>
      <summary className="flex items-start justify-between gap-3 px-4 py-3.5 cursor-pointer list-none select-none hover:bg-muted/20 transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-lg sm:text-[15px] leading-snug">{condition.name}</span>
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

      <div className="px-4 pb-5 border-t border-border space-y-6 pt-5 text-base sm:text-[15px]">
        {condition.presentation && (
          <div>
            <SectionLabel>Spot it</SectionLabel>
            <PresentationBlock presentation={condition.presentation} />
          </div>
        )}
        {condition.diagnosticCriteria && (
          <div>
            <SectionLabel>Confirm it</SectionLabel>
            <DiagnosticCriteriaBlock text={condition.diagnosticCriteria} />
          </div>
        )}
        {(condition.redFlags?.length ?? 0) > 0 && (
          <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-red-700 dark:text-red-400 mb-3">
              Don&apos;t miss
            </p>
            <ul className="space-y-2">
              {condition.redFlags?.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-red-800 dark:text-red-200">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        <details className="group/more rounded-xl border border-border">
          <summary className="flex items-center justify-between gap-3 cursor-pointer list-none select-none px-4 py-3 font-semibold">
            More for studying
            <svg
              className="h-4 w-4 text-muted-foreground transition-transform group-open/more:rotate-180 shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="space-y-6 border-t border-border px-4 pb-5 pt-5">
            <div className="flex justify-end -mb-2">
              <AskOpenEvidence conditionName={condition.name} />
            </div>
            {condition.definition && (
              <div>
                <SectionLabel>Definition</SectionLabel>
                <p className="leading-relaxed text-foreground/90">{condition.definition}</p>
              </div>
            )}
            {condition.distinguishingFeatures && (
              <div>
                <SectionLabel>Distinguishing Features</SectionLabel>
                <DistinguishingFeaturesBlock text={condition.distinguishingFeatures} />
              </div>
            )}
            {(condition.mnemonics?.length ?? 0) > 0 && (
              <div className="space-y-2.5">
                <SectionLabel>Mnemonics</SectionLabel>
                {condition.mnemonics?.map((m, i) => (
                  <div key={i} className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                      {m.name}
                    </p>
                    <p className="leading-relaxed whitespace-pre-line font-medium">
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
                    <div key={i} className="flex items-start gap-3">
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

  const blueprint = EOR_BLUEPRINTS[slug];
  const grouped = groupByBlueprint(slug, conditions);

  // Blueprint order (weight desc), then unmapped extras last
  const orderedSystems = [
    ...blueprint.categories.map((c) => c.name).filter((name) => grouped[name]?.length > 0),
    ...(grouped[UNMAPPED]?.length ? [UNMAPPED] : []),
  ];

  const [activeSystem, setActiveSystem] = useState<string>(orderedSystems[0] ?? "");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const searching = q.length > 0;
  const searchResults = searching
    ? conditions.filter((c) =>
        [c.name, c.category, c.icdCode, c.definition]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(q))
      )
    : [];

  const activeConditions = searching ? searchResults : grouped[activeSystem] ?? [];
  const activeWeight = blueprint.categories.find((c) => c.name === activeSystem)?.weight;

  const systemButtons = (variant: "chip" | "row") =>
    orderedSystems.map((system) => {
      const count = grouped[system]?.length ?? 0;
      const weight = blueprint.categories.find((c) => c.name === system)?.weight;
      const isActive = !searching && system === activeSystem;
      const select = () => {
        setQuery("");
        setActiveSystem(system);
      };
      if (variant === "chip") {
        return (
          <button
            key={system}
            onClick={select}
            className={`shrink-0 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-teal-600 bg-teal-600 text-white"
                : "border-border bg-background text-foreground hover:bg-muted/50"
            }`}
          >
            {system.split(" (")[0]} <span className={isActive ? "text-teal-100" : "text-muted-foreground"}>{count}</span>
          </button>
        );
      }
      return (
        <button
          key={system}
          onClick={select}
          className={`w-full text-left px-4 py-2.5 flex items-center justify-between gap-2 text-sm transition-colors border-l-2 ${
            isActive
              ? "border-foreground bg-muted/50 font-medium text-foreground"
              : "border-transparent text-muted-foreground hover:bg-muted/30 hover:text-foreground font-normal"
          }`}
        >
          <span className="leading-snug">{system}</span>
          <span className="flex items-center gap-1.5 shrink-0">
            {weight !== undefined && (
              <span
                className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isActive ? "bg-teal-100 text-teal-700" : "bg-muted text-muted-foreground"
                }`}
                title={`${weight}% of the ${blueprint.examName} exam`}
              >
                {weight}%
              </span>
            )}
            <span className="text-xs text-muted-foreground">{count}</span>
          </span>
        </button>
      );
    });

  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-8rem)] md:overflow-hidden">

      {/* Sidebar (desktop) / header + chips (phone) */}
      <aside className="md:w-64 md:shrink-0 md:border-r border-border md:overflow-y-auto">
        <div className="px-4 pt-5 pb-3">
          <h1 className="text-xl md:text-base font-bold tracking-tight">Conditions</h1>
          <p className="text-sm md:text-xs text-muted-foreground mt-0.5">
            {rotationName} · {conditions.length} diagnoses
          </p>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search — e.g. PE, sepsis, DKA"
            aria-label="Search conditions"
            className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-base md:py-2 md:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <a
            href={blueprint.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hidden md:inline-flex items-center gap-1 rounded-md border border-teal-200 bg-teal-50 px-2 py-1 text-[11px] font-semibold text-teal-700 hover:bg-teal-100 transition-colors"
            title={`Ordered by PAEA ${blueprint.examName} weights — ${blueprint.blueprintVersion}. Click for the PAEA blueprint PDF.`}
          >
            PAEA EOR blueprint · {blueprint.blueprintVersion.split(" ")[0]}
          </a>
        </div>

        {/* Phone: horizontal chips */}
        <nav className="md:hidden flex gap-2 overflow-x-auto px-4 pb-3 [scrollbar-width:none]" aria-label="Body systems">
          {systemButtons("chip")}
        </nav>

        {/* Desktop: sidebar rows */}
        <nav className="hidden md:block pb-4" aria-label="Body systems">
          {systemButtons("row")}
        </nav>
      </aside>

      {/* Main panel */}
      <main className="flex-1 md:overflow-y-auto px-4 md:px-6 py-4 md:py-5">
        <div className="max-w-2xl space-y-2">
          <div className="pb-3 mb-1 border-b border-border">
            <h2 className="text-lg md:text-base font-bold">
              {searching ? `Results for “${query.trim()}”` : activeSystem}
            </h2>
            <p className="text-sm md:text-xs text-muted-foreground mt-0.5">
              {activeConditions.length} {activeConditions.length === 1 ? "condition" : "conditions"}
              {!searching && activeWeight !== undefined && (
                <>
                  {" · "}
                  <span className="font-semibold text-teal-600">
                    ≈{activeWeight}% of the {blueprint.examName}
                  </span>
                </>
              )}
            </p>
          </div>

          {activeConditions.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              {searching ? "No matches in this rotation." : "No conditions for this system."}
            </p>
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
