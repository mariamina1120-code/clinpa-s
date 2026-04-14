import { Metadata } from "next";
import { ROTATION_DISPLAY_NAMES } from "@/lib/seed";
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
    title: name
      ? `${name} — Preceptor Presentation Worksheet`
      : "Presentation Worksheet",
  };
}

function BlankLine({ width = "full" }: { width?: "full" | "half" | "third" }) {
  const widthClass =
    width === "half" ? "w-1/2" : width === "third" ? "w-1/3" : "w-full";
  return (
    <div
      className={`${widthClass} border-b border-gray-400 print:border-gray-500`}
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
    <h2 className="text-base font-bold uppercase tracking-wide border-b-2 border-gray-800 print:border-black pb-1 mt-6 mb-2 print:break-after-avoid">
      {children}
    </h2>
  );
}

export default async function PresentationWorksheetPage({
  params,
}: {
  params: { slug: string };
}) {
  const { displayName } = await validatePaperToolAccess(params.slug);

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
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-2xl font-bold print:text-xl">
            {displayName} — Preceptor Presentation Worksheet
          </h1>
          <p className="text-sm text-muted-foreground print:text-gray-500 mt-1">
            Date: __________________ &nbsp;&nbsp; Encounter #: __________
          </p>
        </div>

        {/* Patient ID */}
        <SectionHeader>Patient Identification (De-Identified)</SectionHeader>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          <div className="flex items-end gap-2">
            <span className="text-sm font-semibold whitespace-nowrap">
              Patient ID:
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-2">
            <span className="text-sm font-semibold whitespace-nowrap">
              Age / Gender:
            </span>
            <BlankLine />
          </div>
        </div>

        {/* Chief Complaint */}
        <SectionHeader>Chief Complaint</SectionHeader>
        <BlankLine />

        {/* HPI */}
        <SectionHeader>
          History of Present Illness (HPI) — LOCQRATS
        </SectionHeader>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm mb-2">
          <div className="flex items-end gap-1">
            <span className="font-semibold">L</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Location):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">O</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Onset):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">C</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Character):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">Q</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Quantity/Severity):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">R</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Radiation):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">A</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Aggravating):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">T</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Timing):
            </span>
            <BlankLine />
          </div>
          <div className="flex items-end gap-1">
            <span className="font-semibold">S</span>
            <span className="text-xs text-muted-foreground print:text-gray-500">
              (Setting/Associated):
            </span>
            <BlankLine />
          </div>
        </div>
        <p className="text-xs font-semibold mt-2 mb-1">HPI Narrative:</p>
        <BlankLines count={4} />

        {/* PMH/PSH */}
        <SectionHeader>Pertinent PMH / PSH / Medications / Allergies</SectionHeader>
        <BlankLines count={3} />

        {/* Vital Signs */}
        <SectionHeader>Vital Signs</SectionHeader>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <span>
            HR: <span className="inline-block w-16 border-b border-gray-400" />
          </span>
          <span>
            BP:{" "}
            <span className="inline-block w-12 border-b border-gray-400" />
            /
            <span className="inline-block w-12 border-b border-gray-400" />
          </span>
          <span>
            RR: <span className="inline-block w-16 border-b border-gray-400" />
          </span>
          <span>
            Temp:{" "}
            <span className="inline-block w-16 border-b border-gray-400" />
          </span>
          <span>
            SpO2:{" "}
            <span className="inline-block w-12 border-b border-gray-400" />%
          </span>
          <span>
            Wt: <span className="inline-block w-16 border-b border-gray-400" />
          </span>
          <span>
            BMI:{" "}
            <span className="inline-block w-16 border-b border-gray-400" />
          </span>
        </div>

        {/* Physical Exam Findings */}
        <SectionHeader>Key Physical Exam Findings</SectionHeader>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {[
            "General / Constitutional",
            "HEENT",
            "Cardiovascular",
            "Respiratory",
            "Abdominal",
            "Musculoskeletal",
            "Neurological",
            "Skin / Integumentary",
          ].map((system) => (
            <div key={system} className="print:break-inside-avoid">
              <p className="font-semibold text-xs mt-1">{system}:</p>
              <BlankLine />
            </div>
          ))}
        </div>

        {/* Labs/Imaging */}
        <SectionHeader>Key Lab / Imaging Results</SectionHeader>
        <BlankLines count={3} />

        {/* Differential Diagnosis Table */}
        <SectionHeader>Differential Diagnosis</SectionHeader>
        <div className="print:break-inside-avoid">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-800 print:border-black">
                <th className="text-left py-1 w-8">#</th>
                <th className="text-left py-1">Diagnosis</th>
                <th className="text-left py-1 w-24">System</th>
                <th className="text-center py-1 w-20">
                  Must-Not-
                  <br />
                  Miss?
                </th>
                <th className="text-left py-1">Supporting Evidence</th>
                <th className="text-left py-1 w-28">Workup</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="py-2 text-center font-semibold text-xs">
                    {i + 1}
                  </td>
                  <td className="py-2" style={{ minHeight: "28px" }} />
                  <td className="py-2" />
                  <td className="py-2 text-center">
                    <span className="inline-block w-4 h-4 border border-gray-400 rounded-sm" />
                  </td>
                  <td className="py-2" />
                  <td className="py-2" />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Working Diagnosis */}
        <SectionHeader>Working Diagnosis</SectionHeader>
        <BlankLine />

        {/* Assessment */}
        <SectionHeader>Assessment</SectionHeader>
        <BlankLines count={4} />

        {/* Plan */}
        <SectionHeader>Plan</SectionHeader>
        <div className="grid grid-cols-1 gap-y-1 text-sm">
          {[
            "Diagnostics / Workup",
            "Medications / Treatments",
            "Patient Education",
            "Follow-Up / Referrals",
          ].map((label) => (
            <div key={label}>
              <p className="font-semibold text-xs mt-1">{label}:</p>
              <BlankLines count={2} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-2 border-t border-gray-300 text-center text-xs text-muted-foreground print:text-gray-400">
          {displayName} — Preceptor Presentation Worksheet &nbsp;|&nbsp;
          ClinicalYear Resource &nbsp;|&nbsp; For educational use only — no PHI
        </div>
      </div>
    </div>
  );
}
