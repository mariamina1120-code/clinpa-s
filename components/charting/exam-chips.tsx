"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { COMMON_ICD10 } from "@/lib/seed/icd10-common";
import { CheckCircle2, Plus, Search } from "lucide-react";

// ─── ROS symptom chips per system ───────────────────────────────────────────────

export const ROS_CHIP_DATA: Record<string, string[]> = {
  constitutional: ["fever", "chills", "night sweats", "fatigue", "weight loss", "weight gain", "poor appetite"],
  heent: ["headache", "vision changes", "eye pain", "ear pain", "hearing loss", "sore throat", "congestion", "rhinorrhea", "epistaxis"],
  cardiovascular: ["chest pain", "palpitations", "orthopnea", "PND", "leg swelling", "claudication", "syncope"],
  respiratory: ["cough", "sputum", "wheezing", "shortness of breath", "dyspnea on exertion", "hemoptysis"],
  gi: ["nausea", "vomiting", "diarrhea", "constipation", "abdominal pain", "heartburn", "melena", "hematochezia", "bloating"],
  gu: ["dysuria", "frequency", "urgency", "hematuria", "incontinence", "nocturia", "vaginal discharge"],
  musculoskeletal: ["joint pain", "joint swelling", "muscle aches", "back pain", "stiffness", "decreased ROM"],
  neurological: ["dizziness", "numbness", "tingling", "weakness", "tremor", "gait changes", "seizures", "memory changes"],
  psychiatric: ["depressed mood", "anxiety", "sleep disturbance", "SI", "HI", "hallucinations"],
  skin: ["rash", "itching", "new lesions", "changing mole", "dryness", "bruising"],
  endocrine: ["heat intolerance", "cold intolerance", "polyuria", "polydipsia", "hair changes"],
  hematologicLymphatic: ["easy bruising", "prolonged bleeding", "swollen lymph nodes"],
};

type ChipState = "off" | "endorses" | "denies";

function buildRosText(states: Record<string, ChipState>): string {
  const endorses = Object.keys(states).filter((k) => states[k] === "endorses");
  const denies = Object.keys(states).filter((k) => states[k] === "denies");
  const parts: string[] = [];
  if (endorses.length) parts.push(`Endorses ${endorses.join(", ")}.`);
  if (denies.length) parts.push(`Denies ${denies.join(", ")}.`);
  return parts.join(" ");
}

/** Tri-state symptom chips: click → endorses (+), click again → denies (−), again → off */
export function RosChips({
  systemKey,
  onChange,
}: {
  systemKey: string;
  onChange: (text: string) => void;
}) {
  const chips = ROS_CHIP_DATA[systemKey] ?? [];
  const [states, setStates] = useState<Record<string, ChipState>>({});
  if (!chips.length) return null;

  const cycle = (chip: string) => {
    const next: ChipState =
      states[chip] === "endorses" ? "denies" : states[chip] === "denies" ? "off" : "endorses";
    const updated = { ...states, [chip]: next };
    setStates(updated);
    onChange(buildRosText(updated));
  };

  return (
    <div className="flex flex-wrap gap-1">
      {chips.map((chip) => {
        const st = states[chip] ?? "off";
        return (
          <button
            key={chip}
            type="button"
            onClick={() => cycle(chip)}
            title="Click: endorses → denies → clear"
            className={`text-[11px] px-2 py-0.5 rounded-full border transition-colors leading-relaxed ${
              st === "endorses"
                ? "bg-red-600 text-white border-red-600"
                : st === "denies"
                  ? "bg-slate-600 text-white border-slate-600"
                  : "bg-background border-border text-muted-foreground hover:border-slate-400"
            }`}
          >
            {st === "endorses" ? "+ " : st === "denies" ? "− " : ""}
            {chip}
          </button>
        );
      })}
    </div>
  );
}

// ─── PE: one-click normals + abnormal chips ─────────────────────────────────────

export const PE_NORMALS: Record<string, string> = {
  general: "Alert and oriented x3, no acute distress, well-appearing.",
  heent: "Normocephalic, atraumatic. PERRLA, EOMI. TMs pearly gray with normal light reflex bilaterally. Oropharynx clear without erythema or exudate, moist mucous membranes.",
  neck: "Supple, full ROM. No cervical lymphadenopathy, no thyromegaly, no JVD.",
  cardiovascular: "Regular rate and rhythm. No murmurs, rubs, or gallops. 2+ peripheral pulses bilaterally. No peripheral edema.",
  respiratory: "Clear to auscultation bilaterally. No wheezes, rales, or rhonchi. Unlabored respirations, no accessory muscle use.",
  abdomen: "Soft, non-tender, non-distended. Normoactive bowel sounds in all four quadrants. No hepatosplenomegaly, no rebound or guarding.",
  musculoskeletal: "Full range of motion in all extremities. No joint swelling, erythema, or deformity. 5/5 strength throughout.",
  neurological: "CN II–XII grossly intact. Sensation intact to light touch. 5/5 strength in all extremities. Normal gait. DTRs 2+ and symmetric.",
  skin: "Warm, dry, and intact. No rashes, lesions, or suspicious moles.",
  psychiatric: "Normal mood and affect. Linear thought process, appropriate judgment and insight. Denies SI/HI.",
};

export const PE_ABNORMAL_CHIPS: Record<string, string[]> = {
  general: ["ill-appearing", "diaphoretic", "in mild distress", "obese habitus"],
  heent: ["TM erythema", "TM bulging", "pharyngeal erythema", "tonsillar exudate", "nasal turbinate edema", "sinus tenderness to palpation"],
  neck: ["anterior cervical lymphadenopathy", "thyromegaly", "nuchal rigidity"],
  cardiovascular: ["tachycardic", "bradycardic", "irregularly irregular rhythm", "systolic murmur", "1+ pitting edema bilaterally", "2+ pitting edema bilaterally"],
  respiratory: ["expiratory wheezes", "rales at bases", "rhonchi", "decreased breath sounds", "prolonged expiratory phase"],
  abdomen: ["TTP epigastric", "TTP RLQ", "TTP RUQ", "TTP LLQ", "positive Murphy's sign", "rebound tenderness", "guarding", "distended", "hypoactive bowel sounds"],
  musculoskeletal: ["TTP over affected joint", "joint effusion", "decreased ROM secondary to pain", "crepitus", "paraspinal muscle tenderness"],
  neurological: ["focal weakness", "decreased sensation", "positive straight leg raise", "antalgic gait", "asymmetric reflexes"],
  skin: ["erythematous maculopapular rash", "warmth and erythema", "fluctuant area", "vesicular lesions", "excoriations"],
  psychiatric: ["flat affect", "depressed mood", "anxious", "pressured speech", "tearful"],
};

export function PeChips({
  systemKey,
  currentValue,
  onChange,
}: {
  systemKey: string;
  currentValue: string;
  onChange: (text: string) => void;
}) {
  const normal = PE_NORMALS[systemKey];
  const abnormals = PE_ABNORMAL_CHIPS[systemKey] ?? [];

  const append = (finding: string) => {
    const base = currentValue.trim();
    onChange(base ? `${base.replace(/\.?$/, ".")} ${capitalize(finding)}.` : `${capitalize(finding)}.`);
  };

  return (
    <div className="space-y-1.5">
      <div className="flex flex-wrap gap-1">
        {normal && (
          <button
            type="button"
            onClick={() => onChange(normal)}
            className="text-[11px] px-2 py-0.5 rounded-full border border-teal-300 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 hover:bg-teal-100 transition-colors inline-flex items-center gap-1"
          >
            <CheckCircle2 className="h-3 w-3" />
            Normal exam
          </button>
        )}
        {abnormals.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => append(chip)}
            className="text-[11px] px-2 py-0.5 rounded-full border border-border bg-background text-muted-foreground hover:border-red-400 hover:text-red-600 transition-colors inline-flex items-center gap-0.5"
          >
            <Plus className="h-3 w-3" />
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ─── ICD-10 quick picker ────────────────────────────────────────────────────────

export function Icd10Picker({ onSelect }: { onSelect: (line: string) => void }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [open, setOpen] = useState(false);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(COMMON_ICD10.map((c) => c.category)))],
    []
  );

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    return COMMON_ICD10.filter(
      (c) =>
        (category === "All" || c.category === category) &&
        (!q || c.code.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
    ).slice(0, 30);
  }, [query, category]);

  return (
    <div className="border border-border rounded-lg bg-muted/20">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium text-left"
      >
        <Search className="h-3.5 w-3.5 text-muted-foreground" />
        Common ICD-10 Codes
        <span className="ml-auto text-xs text-muted-foreground">{open ? "Hide" : "Show"}</span>
      </button>

      {open && (
        <div className="px-3 pb-3 space-y-2">
          <input
            type="text"
            placeholder="Search by code or diagnosis (e.g. 'hypertension' or 'I10')..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
          />
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={category === cat ? "default" : "outline"}
                className="cursor-pointer select-none text-[11px]"
                onClick={() => setCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
          <div className="max-h-56 overflow-y-auto space-y-1">
            {results.map((c) => (
              <button
                key={c.code}
                type="button"
                onClick={() => onSelect(`${c.code} — ${c.description}`)}
                className="w-full text-left flex items-baseline gap-2 rounded-md px-2 py-1.5 hover:bg-muted/60 transition-colors"
              >
                <code className="text-xs font-mono font-semibold text-teal-700 dark:text-teal-400 shrink-0">
                  {c.code}
                </code>
                <span className="text-sm">{c.description}</span>
              </button>
            ))}
            {results.length === 0 && (
              <p className="text-xs text-muted-foreground px-2 py-2">
                No matches — try a broader term.
              </p>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground">
            Common billable codes for quick reference — confirm in your site&apos;s EHR before billing.
          </p>
        </div>
      )}
    </div>
  );
}
