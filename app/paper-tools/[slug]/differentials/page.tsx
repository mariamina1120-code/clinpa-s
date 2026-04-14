import { Metadata } from "next";
import {
  ROTATION_DISPLAY_NAMES,
  getDifferentialsByRotation,
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
    title: name
      ? `${name} — Differential Diagnosis Worksheet`
      : "Differential Worksheet",
  };
}

export default async function DifferentialsWorksheetPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug, displayName } = await validatePaperToolAccess(params.slug);
  const differentialSets = getDifferentialsByRotation(slug);

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-8 print:p-0 print:max-w-none">
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
                @page { size: landscape; margin: 0.4in; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
              }
            `,
          }}
        />

        {/* Title */}
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-2xl font-bold print:text-lg">
            {displayName} — Differential Diagnosis Reference
          </h1>
          <p className="text-sm text-muted-foreground print:text-gray-500 mt-1">
            Pre-populated from rotation seed data. Blank rows for your additions.
          </p>
        </div>

        {differentialSets.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No differential data available for this rotation yet.
          </p>
        ) : (
          <div className="space-y-8 print:space-y-6">
            {differentialSets.map((set, setIdx) => (
              <div key={setIdx} className="print:break-inside-avoid">
                <h2 className="text-lg font-bold border-b-2 border-gray-800 print:border-black pb-1 mb-2 print:text-base">
                  Chief Complaint: {set.chiefComplaint}
                </h2>

                <table className="w-full border-collapse text-sm print:text-xs">
                  <thead>
                    <tr className="bg-gray-100 print:bg-gray-200">
                      <th className="border border-gray-400 px-2 py-1 text-left w-10">
                        Rank
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-left">
                        Diagnosis
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-left w-24">
                        Likelihood
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-center w-20">
                        Must-Not-
                        <br />
                        Miss
                      </th>
                      <th className="border border-gray-400 px-2 py-1 text-left" style={{ minWidth: "240px" }}>
                        Key Distinguishing Features
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {set.differentials.map((dx, dxIdx) => {
                      const name =
                        dx.conditionName ?? dx.condition ?? (dx as any).diagnosis ?? "Unknown";
                      const isMustNotMiss =
                        dx.mustNotMiss || dx.likelihood === "must_not_miss";
                      const features: string[] = [];
                      if (dx.distinguishingFeatures) {
                        features.push(dx.distinguishingFeatures);
                      }
                      if (dx.distinguishingHistory) {
                        const dh: any = dx.distinguishingHistory;
                        if (typeof dh === "string") {
                          features.push(dh.slice(0, 120));
                        } else if (Array.isArray(dh)) {
                          features.push(...dh.slice(0, 2));
                        }
                      }
                      if (dx.distinguishingExam) {
                        const de: any = dx.distinguishingExam;
                        if (typeof de === "string") {
                          features.push(de.slice(0, 80));
                        } else if (Array.isArray(de)) {
                          features.push(...de.slice(0, 1));
                        }
                      }

                      const likelihoodMap: Record<string, string> = {
                        must_not_miss: "Must-Not-Miss",
                        "must not miss": "Must-Not-Miss",
                        less_common: "Less Common",
                        high: "Common",
                        medium: "Moderate",
                        low: "Less Common",
                      };
                      const likelihoodLabel =
                        likelihoodMap[dx.likelihood] ??
                        dx.likelihood.charAt(0).toUpperCase() + dx.likelihood.slice(1);

                      return (
                        <tr
                          key={dxIdx}
                          className={
                            isMustNotMiss
                              ? "bg-red-50 print:bg-red-50"
                              : dxIdx % 2 === 0
                              ? "bg-white"
                              : "bg-gray-50 print:bg-gray-50"
                          }
                        >
                          <td className="border border-gray-400 px-2 py-1 text-center font-semibold">
                            {dx.rank ?? dxIdx + 1}
                          </td>
                          <td className="border border-gray-400 px-2 py-1 font-medium">
                            {name}
                          </td>
                          <td className="border border-gray-400 px-2 py-1">
                            {likelihoodLabel}
                          </td>
                          <td className="border border-gray-400 px-2 py-1 text-center">
                            {isMustNotMiss ? (
                              <span className="font-bold text-red-600 print:text-red-800">
                                YES
                              </span>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="border border-gray-400 px-2 py-1 text-xs">
                            {features.length > 0
                              ? features.join("; ")
                              : "—"}
                          </td>
                        </tr>
                      );
                    })}

                    {/* Blank rows for student additions */}
                    {Array.from({ length: 3 }).map((_, i) => (
                      <tr key={`blank-${i}`}>
                        <td className="border border-gray-400 px-2 py-3 text-center text-gray-300">
                          {set.differentials.length + i + 1}
                        </td>
                        <td className="border border-gray-400 px-2 py-3" />
                        <td className="border border-gray-400 px-2 py-3" />
                        <td className="border border-gray-400 px-2 py-3" />
                        <td className="border border-gray-400 px-2 py-3" />
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Key Pearls */}
                {set.keyPearls && set.keyPearls.length > 0 && (
                  <div className="mt-2 text-xs text-muted-foreground print:text-gray-600">
                    <span className="font-semibold">Key Pearls: </span>
                    {set.keyPearls.join(" | ")}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-2 border-t border-gray-300 text-center text-xs text-muted-foreground print:text-gray-400">
          {displayName} — Differential Diagnosis Reference &nbsp;|&nbsp;
          ClinicalYear Resource &nbsp;|&nbsp; For educational use only
        </div>
      </div>
    </div>
  );
}
