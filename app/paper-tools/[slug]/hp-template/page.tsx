import { Metadata } from "next";
import {
  ROTATION_DISPLAY_NAMES,
  getConditionsByRotation,
  getPhysicalExamByRotation,
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
    title: name ? `${name} — H&P Template` : "H&P Template",
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

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-800 print:border-black pb-1 mt-5 mb-2 print:break-after-avoid">
      {children}
    </h2>
  );
}

function SubSection({
  label,
  hint,
  lines = 2,
}: {
  label: string;
  hint?: string;
  lines?: number;
}) {
  return (
    <div className="print:break-inside-avoid mb-2">
      <div className="flex items-baseline gap-2">
        <p className="text-sm font-semibold">{label}:</p>
        {hint && (
          <span className="text-xs text-muted-foreground print:text-gray-500 italic">
            {hint}
          </span>
        )}
      </div>
      <BlankLines count={lines} />
    </div>
  );
}

const ROS_SYSTEMS = [
  "Constitutional",
  "HEENT",
  "Cardiovascular",
  "Respiratory",
  "Gastrointestinal",
  "Genitourinary",
  "Musculoskeletal",
  "Neurological",
  "Psychiatric",
  "Skin / Integumentary",
  "Endocrine",
  "Heme / Lymph",
];

const PE_SYSTEMS = [
  "General Appearance",
  "HEENT",
  "Neck",
  "Cardiovascular",
  "Respiratory",
  "Abdomen",
  "Genitourinary",
  "Musculoskeletal",
  "Neurological",
  "Psychiatric",
  "Skin",
];

export default async function HPTemplatePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug, displayName } = await validatePaperToolAccess(params.slug);
  const conditions = getConditionsByRotation(slug);
  const physExam = getPhysicalExamByRotation(slug);

  // Build rotation-specific hints
  const topConditions = conditions
    .slice(0, 6)
    .map((c) => c.name)
    .join(", ");

  const examSystems = Array.from(
    new Set(physExam.flatMap((pe) => pe.systemsExamined ?? []))
  ).slice(0, 8);

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
            {displayName} — History &amp; Physical Template
          </h1>
          <p className="text-sm text-muted-foreground print:text-gray-500 mt-1">
            Date: __________________ &nbsp;&nbsp; Provider:
            __________________
          </p>
        </div>

        {/* Rotation-specific hint */}
        {topConditions && (
          <div className="bg-blue-50 print:bg-gray-100 border border-blue-200 print:border-gray-300 rounded px-3 py-2 mb-4 text-xs print:break-inside-avoid">
            <span className="font-semibold">Common {displayName} conditions: </span>
            {topConditions}
          </div>
        )}

        {/* Identifying Data */}
        <SectionHeader>Identifying Data</SectionHeader>
        <div className="grid grid-cols-3 gap-x-6 gap-y-1 text-sm">
          <div className="flex items-end gap-1">
            <span className="font-semibold text-xs">Age:</span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold text-xs">Gender:</span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold text-xs">CC:</span>
            <BlankLine />
          </div>
        </div>

        {/* HPI */}
        <SectionHeader>History of Present Illness (HPI)</SectionHeader>
        <div className="text-xs text-muted-foreground print:text-gray-500 mb-2 italic">
          OPQRST: Onset, Provocation/Palliation, Quality, Region/Radiation, Severity (1-10), Timing
        </div>
        <BlankLines count={6} />

        {/* PMH */}
        <SubSection label="Past Medical History" hint="chronic conditions, hospitalizations" lines={3} />

        {/* PSH */}
        <SubSection label="Past Surgical History" hint="surgeries, dates, complications" lines={2} />

        {/* Medications */}
        <SubSection label="Medications" hint="name, dose, frequency" lines={3} />

        {/* Allergies */}
        <SubSection label="Allergies" hint="drug, reaction type" lines={2} />

        {/* Family History */}
        <SubSection label="Family History" hint="parents, siblings — CA, DM, HTN, CAD, stroke, psych" lines={2} />

        {/* Social History */}
        <SectionHeader>Social History</SectionHeader>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {[
            { label: "Tobacco", hint: "type, pack-years, quit date" },
            { label: "Alcohol", hint: "type, quantity, frequency" },
            { label: "Drugs / Substances", hint: "type, route, frequency" },
            { label: "Occupation", hint: "" },
            { label: "Sexual History", hint: "partners, protection, STI hx" },
            { label: "Living Situation", hint: "home, support system" },
          ].map(({ label, hint }) => (
            <div key={label} className="mb-1">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-semibold">{label}:</span>
                {hint && (
                  <span className="text-xs text-muted-foreground print:text-gray-500 italic">
                    {hint}
                  </span>
                )}
              </div>
              <BlankLine />
            </div>
          ))}
        </div>

        {/* Review of Systems */}
        <SectionHeader>Review of Systems</SectionHeader>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 text-xs print:break-inside-avoid">
          {ROS_SYSTEMS.map((system) => (
            <div key={system} className="flex items-start gap-1">
              <div className="flex gap-1 mt-0.5 shrink-0">
                <span className="inline-block w-3 h-3 border border-gray-400 rounded-sm" />
                <span className="text-gray-400">+</span>
                <span className="inline-block w-3 h-3 border border-gray-400 rounded-sm" />
                <span className="text-gray-400">&minus;</span>
              </div>
              <span className="font-semibold">{system}</span>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2 font-semibold">ROS details / positives:</p>
        <BlankLines count={2} />

        {/* Physical Exam */}
        <SectionHeader>Physical Examination</SectionHeader>

        {/* Vitals */}
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
            Ht: <span className="inline-block w-14 border-b border-gray-400" />
          </span>
          <span>
            Wt: <span className="inline-block w-14 border-b border-gray-400" />
          </span>
          <span>
            BMI:{" "}
            <span className="inline-block w-14 border-b border-gray-400" />
          </span>
        </div>

        {/* PE by system */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-1">
          {PE_SYSTEMS.map((system) => (
            <div key={system} className="print:break-inside-avoid mb-1">
              <p className="text-xs font-semibold">{system}:</p>
              <BlankLine />
            </div>
          ))}
        </div>

        {/* Exam hints from seed data */}
        {examSystems.length > 0 && (
          <div className="bg-blue-50 print:bg-gray-100 border border-blue-200 print:border-gray-300 rounded px-3 py-2 mt-3 text-xs print:break-inside-avoid">
            <span className="font-semibold">
              Key exam systems for {displayName}:{" "}
            </span>
            {examSystems.join(", ")}
          </div>
        )}

        {/* Assessment */}
        <SectionHeader>Assessment</SectionHeader>
        <BlankLines count={4} />

        {/* Plan */}
        <SectionHeader>Plan</SectionHeader>
        <BlankLines count={6} />

        {/* Footer */}
        <div className="mt-6 pt-2 border-t border-gray-300 text-center text-xs text-muted-foreground print:text-gray-400">
          {displayName} — H&amp;P Template &nbsp;|&nbsp; ClinicalYear
          Resource &nbsp;|&nbsp; For educational use only — no PHI
        </div>
      </div>
    </div>
  );
}
