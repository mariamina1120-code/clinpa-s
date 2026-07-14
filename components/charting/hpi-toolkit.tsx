"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, Mic, MicOff, Sparkles, MousePointerClick, ShieldAlert } from "lucide-react";

// ─── Epic-style chip data (OLDCARTS) ────────────────────────────────────────────

const CHIP_GROUPS: { key: string; label: string; chips: string[]; phrase: (sel: string[]) => string }[] = [
  {
    key: "onset",
    label: "Onset",
    chips: ["sudden", "gradual", "this morning", "yesterday", "x2 days", "x1 week", "x2 weeks", "x1 month", "chronic, worse recently"],
    phrase: (s) => `onset ${s.join(", ")}`,
  },
  {
    key: "location",
    label: "Location",
    chips: ["head", "chest", "epigastric", "RUQ", "RLQ", "LUQ", "LLQ", "periumbilical", "back", "flank", "throat", "bilateral", "diffuse"],
    phrase: (s) => `located in the ${s.join(" and ")}`,
  },
  {
    key: "character",
    label: "Character",
    chips: ["sharp", "dull", "aching", "burning", "pressure-like", "cramping", "throbbing", "stabbing", "tearing"],
    phrase: (s) => `described as ${s.join(", ")}`,
  },
  {
    key: "radiation",
    label: "Radiation",
    chips: ["non-radiating", "to left arm", "to jaw", "to back", "to shoulder", "to groin", "down leg"],
    phrase: (s) => (s.includes("non-radiating") ? "non-radiating" : `radiating ${s.join(" and ")}`),
  },
  {
    key: "associated",
    label: "Associated Sx",
    chips: ["fever", "chills", "nausea", "vomiting", "diarrhea", "constipation", "SOB", "diaphoresis", "dizziness", "palpitations", "dysuria", "cough", "congestion", "sore throat", "headache", "rash", "weight loss", "fatigue"],
    phrase: (s) => `associated with ${s.join(", ")}`,
  },
  {
    key: "timing",
    label: "Timing",
    chips: ["constant", "intermittent", "worse at night", "worse in morning", "postprandial", "with exertion", "at rest"],
    phrase: (s) => s.join(", "),
  },
  {
    key: "exacerbating",
    label: "Worse with",
    chips: ["movement", "deep breathing", "eating", "fatty foods", "exertion", "lying flat", "palpation", "standing"],
    phrase: (s) => `exacerbated by ${s.join(", ")}`,
  },
  {
    key: "relieving",
    label: "Better with",
    chips: ["rest", "NSAIDs", "acetaminophen", "antacids", "position change", "leaning forward", "nothing"],
    phrase: (s) => (s.includes("nothing") ? "with no relieving factors" : `relieved by ${s.join(", ")}`),
  },
  {
    key: "severity",
    label: "Severity",
    chips: ["mild (1-3/10)", "moderate (4-6/10)", "severe (7-10/10)", "worst of life"],
    phrase: (s) => `rated ${s.join(", ")} in severity`,
  },
  {
    key: "pertinentNegatives",
    label: "Pertinent Negatives",
    chips: ["denies fever", "denies chest pain", "denies SOB", "denies N/V", "denies syncope", "denies melena", "denies hematuria", "denies recent travel", "denies sick contacts", "denies trauma"],
    phrase: (s) => s.join(", "),
  },
];

// ─── Sentence assembly ──────────────────────────────────────────────────────────

function buildNarrative(
  age: string,
  sex: string,
  cc: string,
  selections: Record<string, string[]>
): string {
  const demo = [age && `${age}-year-old`, sex].filter(Boolean).join(" ");
  const opener = demo
    ? `Patient is a ${demo} presenting with ${cc || "[chief complaint]"}`
    : `Patient presents with ${cc || "[chief complaint]"}`;

  const body = CHIP_GROUPS
    .filter((g) => g.key !== "pertinentNegatives" && selections[g.key]?.length)
    .map((g) => g.phrase(selections[g.key]))
    .join(", ");

  const negatives = selections.pertinentNegatives?.length
    ? ` Patient ${selections.pertinentNegatives.join(", ")}.`
    : "";

  return `${opener}${body ? `, ${body}` : ""}.${negatives}`;
}

// ─── Component ──────────────────────────────────────────────────────────────────

interface HpiToolkitProps {
  chiefComplaint: string;
  onInsert: (text: string) => void;
}

export function HpiToolkit({ chiefComplaint, onInsert }: HpiToolkitProps) {
  const [mode, setMode] = useState<"closed" | "builder" | "scribe">("closed");

  // Builder state
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  // Scribe state
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [generating, setGenerating] = useState(false);
  const [scribeError, setScribeError] = useState("");
  const [speechSupported, setSpeechSupported] = useState(true);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) setSpeechSupported(false);
    return () => recognitionRef.current?.stop?.();
  }, []);

  const toggleChip = (group: string, chip: string) => {
    setSelections((prev) => {
      const cur = prev[group] ?? [];
      return { ...prev, [group]: cur.includes(chip) ? cur.filter((c) => c !== chip) : [...cur, chip] };
    });
  };

  const preview = buildNarrative(age, sex, chiefComplaint, selections);
  const hasSelections = Object.values(selections).some((s) => s.length) || age || sex;

  const startRecording = () => {
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) return;
    const rec = new SR();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = "en-US";
    let finalSoFar = transcript ? transcript + " " : "";
    rec.onresult = (e: any) => {
      let interim = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        if (e.results[i].isFinal) finalSoFar += e.results[i][0].transcript + " ";
        else interim += e.results[i][0].transcript;
      }
      setTranscript((finalSoFar + interim).trim());
    };
    rec.onerror = () => setRecording(false);
    rec.onend = () => setRecording(false);
    recognitionRef.current = rec;
    rec.start();
    setRecording(true);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setRecording(false);
  };

  const generateHpi = async () => {
    setScribeError("");
    setGenerating(true);
    try {
      const res = await fetch("/api/generate-hpi", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript, chiefComplaint }),
      });
      const data = await res.json();
      if (!res.ok) {
        setScribeError(data.error || "Generation failed. Please try again.");
        return;
      }
      onInsert(data.hpi);
      setMode("closed");
    } catch {
      setScribeError("Network error — please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="border border-border rounded-lg bg-muted/20">
      {/* Mode toggle */}
      <div className="flex gap-2 p-2">
        <Button
          type="button"
          variant={mode === "builder" ? "teal" : "outline"}
          size="sm"
          onClick={() => setMode(mode === "builder" ? "closed" : "builder")}
        >
          <MousePointerClick className="h-3.5 w-3.5 mr-1.5" />
          Smart Builder
        </Button>
        <Button
          type="button"
          variant={mode === "scribe" ? "teal" : "outline"}
          size="sm"
          onClick={() => setMode(mode === "scribe" ? "closed" : "scribe")}
        >
          <Mic className="h-3.5 w-3.5 mr-1.5" />
          AI Scribe
        </Button>
      </div>

      {/* ── Smart Builder ── */}
      {mode === "builder" && (
        <div className="px-3 pb-3 space-y-3">
          <div className="flex gap-2 items-center flex-wrap">
            <input
              type="text"
              inputMode="numeric"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value.replace(/\D/g, "").slice(0, 3))}
              className="h-8 w-16 rounded-md border border-input bg-background px-2 text-sm"
            />
            {["male", "female"].map((s) => (
              <Badge
                key={s}
                variant={sex === s ? "default" : "outline"}
                className="cursor-pointer select-none"
                onClick={() => setSex(sex === s ? "" : s)}
              >
                {s}
              </Badge>
            ))}
          </div>

          {CHIP_GROUPS.map((group) => (
            <div key={group.key}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {group.chips.map((chip) => {
                  const active = selections[group.key]?.includes(chip);
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => toggleChip(group.key, chip)}
                      className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                        active
                          ? "bg-teal-600 text-white border-teal-600"
                          : "bg-background border-border text-foreground/80 hover:border-teal-400"
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {hasSelections && (
            <div className="rounded-lg border border-border bg-background p-3 space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Preview</p>
              <p className="text-sm leading-relaxed">{preview}</p>
              <div className="flex gap-2">
                <Button type="button" size="sm" variant="teal" onClick={() => { onInsert(preview); setMode("closed"); }}>
                  Insert into HPI
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => { setSelections({}); setAge(""); setSex(""); }}>
                  Clear
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── AI Scribe ── */}
      {mode === "scribe" && (
        <div className="px-3 pb-3 space-y-3">
          <div className="flex items-start gap-2 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-2.5">
            <ShieldAlert className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
              Follow your clinical site&apos;s recording policy and obtain consent before recording.
              Do not include patient names or identifiers — audio stays on this device; only the
              text transcript is sent for drafting.
            </p>
          </div>

          <div className="flex gap-2">
            {speechSupported ? (
              recording ? (
                <Button type="button" size="sm" variant="destructive" onClick={stopRecording}>
                  <MicOff className="h-3.5 w-3.5 mr-1.5" />
                  Stop
                  <span className="ml-2 h-2 w-2 rounded-full bg-white animate-pulse" />
                </Button>
              ) : (
                <Button type="button" size="sm" variant="teal" onClick={startRecording}>
                  <Mic className="h-3.5 w-3.5 mr-1.5" />
                  {transcript ? "Resume recording" : "Start recording"}
                </Button>
              )
            ) : (
              <p className="text-xs text-muted-foreground">
                Live transcription isn&apos;t supported in this browser (try Chrome). You can type or paste an encounter summary below instead.
              </p>
            )}
          </div>

          <Textarea
            placeholder="Transcript appears here as you speak — or type/paste your shorthand encounter notes..."
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={6}
            className="text-sm"
          />

          {scribeError && (
            <p className="text-xs text-destructive" role="alert">{scribeError}</p>
          )}

          <Button
            type="button"
            size="sm"
            variant="teal"
            disabled={!transcript.trim() || generating}
            onClick={generateHpi}
          >
            {generating ? (
              <>
                <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" />
                Drafting HPI...
              </>
            ) : (
              <>
                <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                Draft HPI with AI
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
