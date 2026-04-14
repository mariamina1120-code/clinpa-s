import { Metadata } from "next";
import {
  ROTATION_DISPLAY_NAMES,
  getConditionsByRotation,
} from "@/lib/seed";
import { validatePaperToolAccess } from "@/components/paper-tools/paper-tool-auth";
import { PrintButton } from "@/components/paper-tools/print-button";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const name =
    ROTATION_DISPLAY_NAMES[params.slug as keyof typeof ROTATION_DISPLAY_NAMES];
  return {
    title: name ? `${name} — SOAP Note Template` : "SOAP Note Template",
  };
}

function BlankLine() {
  return (
    <div
      className="w-full border-b border-gray-400 print:border-gray-500"
      style={{ minHeight: "28px" }}
    />
  );
}

function BlankLines({ count }: { count: number }) {
  return (
    <div className="space-y-1">
      {Array.from({ length: count }).map((_, i) => (
        <BlankLine key={i} />
      ))}
    </div>
  );
}

function SOAPHeader({
  letter,
  label,
}: {
  letter: string;
  label: string;
}) {
  return (
    <div className="flex items-baseline gap-2 border-b-2 border-gray-800 print:border-black pb-1 mt-6 mb-2 print:break-after-avoid">
      <span className="text-3xl font-black print:text-2xl">{letter}</span>
      <h2 className="text-base font-bold uppercase tracking-wide">{label}</h2>
    </div>
  );
}

function SubLabel({
  label,
  hint,
}: {
  label: string;
  hint?: string;
}) {
  return (
    <div className="flex items-baseline gap-1 mt-2 mb-1">
      <span className="text-sm font-semibold">{label}:</span>
      {hint && (
        <span className="text-xs text-muted-foreground print:text-gray-500 italic">
          {hint}
        </span>
      )}
    </div>
  );
}

const ROS_SYSTEMS = [
  "Constitutional",
  "HEENT",
  "CV",
  "Resp",
  "GI",
  "GU",
  "MSK",
  "Neuro",
  "Psych",
  "Skin",
  "Endo",
  "Heme",
];

const PE_SYSTEMS = [
  "General",
  "HEENT",
  "Neck",
  "CV",
  "Resp",
  "Abdomen",
  "GU",
  "MSK",
  "Neuro",
  "Psych",
  "Skin",
];

export default async function SOAPTemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug, displayName } = await validatePaperToolAccess(params.slug);
  const conditions = getConditionsByRotation(slug);

  const topConditions = conditions
    .slice(0, 6)
    .map((c) => c.name)
    .join(", ");

  return (
    <div className="max-w-3xl mx-auto p-6 lg:p-8 print:p-0 print:max-w-none">
      {/* Screen-only toolbar */}
      <div className="print:hidden mb-6 flex items-center justify-between">
        <Link
          href={`/paper-tools/${params.slug}`}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to {displayName} Tools
        </Link>
        <PrintButton />
      </div>

      {/* Printable content */}
      <div className="print:text-black print:bg-white font-serif">
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @media print {
                @page { size: portrait; margin: 0.5in; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              }
            `,
          }}
        />

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold print:text-xl">
            {displayName} — SOAP Note Template
          </h1>
          <div className="text-sm text-muted-foreground print:text-gray-500 mt-1">
            Date: __________________ &nbsp;&nbsp; Patient ID:
            __________________ &nbsp;&nbsp; Encounter #: __________
          </div>
        </div>

        {/* Rotation-specific hint */}
        {topConditions && (
          <div className="bg-blue-50 print:bg-gray-100 border border-blue-200 print:border-gray-300 rounded px-3 py-2 mb-4 text-xs print:break-inside-avoid">
            <span className="font-semibold">Common {displayName} conditions: </span>
            {topConditions}
          </div>
        )}

        {/* ─── S: Subjective ─── */}
        <SOAPHeader letter="S" label="Subjective" />

        <SubLabel label="Chief Complaint" />
        <BlankLine />

        <SubLabel
          label="HPI"
          hint="OPQRST: Onset, Provocation, Quality, Region, Severity, Timing"
        />
        <BlankLines count={5} />

        <SubLabel label="PMH / PSH / Medications / Allergies" />
        <BlankLines count={3} />

        <SubLabel label="Family / Social History" />
        <BlankLines count={2} />

        <SubLabel label="Review of Systems" />
        <div className="grid grid-cols-4 gap-x-3 gap-y-1 text-xs mt-1 print:break-inside-avoid">
          {ROS_SYSTEMS.map((sys) => (
            <div key={sys} className="flex items-center gap-1">
              <span className="inline-block w-3 h-3 border border-gray-400 rounded-sm shrink-0" />
              <span>{sys}</span>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2 font-semibold">Pertinent positives / negatives:</p>
        <BlankLines count={2} />

        {/* ─── O: Objective ─── */}
        <SOAPHeader letter="O" label="Objective" />

        <SubLabel label="Vital Signs" />
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm mb-3">
          <span>
            HR: <span className="inline-block w-14 border-b border-gray-400" />
          </span>
          <span>
            BP:{" "}
            <span className="inline-block w-10 border-b border-gray-400" />
            /
            <span className="inline-block w-10 border-b border-gray-400" />
          </span>
          <span>
            RR: <span className="inline-block w-14 border-b border-gray-400" />
          </span>
          <span>
            Temp:{" "}
            <span className="inline-block w-14 border-b border-gray-400" />
          </span>
          <span>
            SpO2:{" "}
            <span className="inline-block w-10 border-b border-gray-400" />%
          </span>
          <span>
            Wt: <span className="inline-block w-14 border-b border-gray-400" />
          </span>
        </div>

        <SubLabel label="Physical Exam" />
        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
          {PE_SYSTEMS.map((system) => (
            <div key={system} className="print:break-inside-avoid mb-1">
              <p className="text-xs font-semibold">{system}:</p>
              <BlankLine />
            </div>
          ))}
        </div>

        <SubLabel label="Labs / Imaging Results" />
        <BlankLines count={3} />

        {/* ─── A: Assessment ─── */}
        <SOAPHeader letter="A" label="Assessment" />

        <SubLabel label="Primary Diagnosis" />
        <BlankLine />

        <SubLabel label="Differential Diagnoses" />
        <div className="space-y-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-end gap-2">
              <span className="text-xs font-semibold w-4 text-right shrink-0">
                {i + 1}.
              </span>
              <BlankLine />
            </div>
          ))}
        </div>

        <SubLabel label="Clinical Reasoning" />
        <BlankLines count={3} />

        {/* ─── P: Plan ─── */}
        <SOAPHeader letter="P" label="Plan" />

        <SubLabel label="Diagnostic Workup" hint="labs, imaging, referrals" />
        <BlankLines count={2} />

        <SubLabel label="Medications / Treatments" />
        <BlankLines count={3} />

        <SubLabel label="Patient Education" />
        <BlankLines count={2} />

        <SubLabel label="Follow-Up" hint="timeframe, conditions for return" />
        <BlankLines count={2} />

        <SubLabel label="Disposition" />
        <BlankLine />

        {/* Footer */}
        <div className="mt-6 pt-2 border-t border-gray-300 text-center text-xs text-muted-foreground print:text-gray-400">
          {displayName} — SOAP Note Template &nbsp;|&nbsp; ClinicalYear
          Resource &nbsp;|&nbsp; For educational use only — no PHI
        </div>
      </div>
    </div>
  );
}
