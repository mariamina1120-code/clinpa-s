"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Printer, Copy, Check, AlertTriangle, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { DifferentialItem } from "./differential-list";

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface PresentationData {
  chiefComplaint: string;
  hpi: string;
  vitals: {
    hr: string;
    bp: string;
    rr: string;
    temp: string;
    spo2: string;
  };
  peFindings: string;
  labsImaging: string;
  workingDiagnosis: string;
  differentials: DifferentialItem[];
  proposedPlan: string;
}

interface PresentationPreviewProps {
  data: PresentationData;
}

// ─── Component ──────────────────────────────────────────────────────────────────

export function PresentationPreview({ data }: PresentationPreviewProps) {
  const printRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = React.useState(false);

  // ── Print ──
  function handlePrint() {
    const content = printRef.current;
    if (!content) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Preceptor Presentation</title>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1a1a1a; font-size: 12px; line-height: 1.5; }
            h1 { font-size: 18px; border-bottom: 2px solid #0d9488; padding-bottom: 6px; margin-bottom: 16px; color: #0d9488; }
            h2 { font-size: 14px; margin-top: 18px; margin-bottom: 6px; color: #0d9488; border-bottom: 1px solid #e5e7eb; padding-bottom: 3px; }
            h3 { font-size: 12px; margin-top: 10px; margin-bottom: 4px; }
            .section { margin-bottom: 12px; }
            .vitals-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin: 6px 0; }
            .vital-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px; text-align: center; }
            .vital-label { font-size: 10px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }
            .vital-value { font-size: 14px; font-weight: 600; }
            .diff-item { display: flex; align-items: baseline; gap: 8px; padding: 3px 0; }
            .diff-rank { font-weight: 700; min-width: 20px; }
            .diff-name { font-weight: 500; }
            .mnm { color: #dc2626; font-weight: 600; }
            .top-diff { color: #0d9488; }
            .tag { display: inline-block; font-size: 9px; padding: 1px 6px; border-radius: 9999px; margin-left: 6px; font-weight: 600; }
            .tag-mnm { background: #fecaca; color: #991b1b; }
            .tag-common { background: #ccfbf1; color: #115e59; }
            .tag-uncommon { background: #fef3c7; color: #92400e; }
            .tag-rare { background: #f1f5f9; color: #475569; }
            .tag-star { color: #d97706; margin-left: 4px; }
            .deidentified { font-style: italic; color: #64748b; font-size: 11px; }
            .notes { font-style: italic; color: #475569; font-size: 11px; margin-left: 28px; }
            @media print { body { padding: 20px; } }
          </style>
        </head>
        <body>${content.innerHTML}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }

  // ── Copy to clipboard ──
  async function handleCopy() {
    const topDiffs = data.differentials.filter((d) => d.isTopDifferential);
    const otherDiffs = data.differentials.filter((d) => !d.isTopDifferential);

    let text = "PRECEPTOR PRESENTATION\n";
    text += "=".repeat(50) + "\n\n";
    text += `[De-identified Patient]\n\n`;
    text += `CHIEF COMPLAINT: ${data.chiefComplaint || "Not specified"}\n\n`;
    text += `HPI:\n${data.hpi || "Not documented"}\n\n`;
    text += `VITALS:\n`;
    text += `  HR: ${data.vitals.hr || "--"} | BP: ${data.vitals.bp || "--"} | RR: ${data.vitals.rr || "--"} | Temp: ${data.vitals.temp || "--"} | SpO2: ${data.vitals.spo2 || "--"}\n\n`;
    text += `PERTINENT PE FINDINGS:\n${data.peFindings || "Not documented"}\n\n`;
    text += `KEY LABS/IMAGING:\n${data.labsImaging || "Not documented"}\n\n`;
    text += `DIFFERENTIAL DIAGNOSIS:\n`;
    text += "-".repeat(30) + "\n";

    data.differentials.forEach((d, i) => {
      const mnmTag = (d.mustNotMiss || d.likelihood === "must_not_miss") ? " [MUST NOT MISS]" : "";
      const starTag = d.isTopDifferential ? " ***" : "";
      text += `  ${i + 1}. ${d.conditionName} (${d.likelihood})${mnmTag}${starTag}\n`;
      if (d.notes) text += `     Notes: ${d.notes}\n`;
    });

    text += `\nWORKING DIAGNOSIS: ${data.workingDiagnosis || "Not specified"}\n\n`;
    text += `PROPOSED PLAN:\n${data.proposedPlan || "Not documented"}\n`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // Helper to render likelihood tag class
  function likelihoodTagClass(likelihood: string): string {
    if (likelihood === "must_not_miss") return "tag tag-mnm";
    if (likelihood === "common" || likelihood === "high") return "tag tag-common";
    if (likelihood === "uncommon" || likelihood === "medium") return "tag tag-uncommon";
    return "tag tag-rare";
  }

  function likelihoodLabel(likelihood: string): string {
    switch (likelihood) {
      case "must_not_miss": return "Must Not Miss";
      case "high": return "High";
      case "medium": return "Medium";
      case "low": return "Low";
      case "less_common": return "Less Common";
      default: return likelihood.charAt(0).toUpperCase() + likelihood.slice(1).replace(/_/g, " ");
    }
  }

  const hasContent =
    data.chiefComplaint || data.hpi || data.peFindings || data.labsImaging || data.differentials.length > 0;

  if (!hasContent) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-sm">Nothing to preview yet.</p>
        <p className="text-xs mt-1">Fill in patient data and differentials to generate a preview.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Action buttons */}
      <div className="flex items-center gap-2 justify-end print:hidden">
        <Button variant="outline" size="sm" onClick={handleCopy}>
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-1.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 mr-1.5" />
              Copy to Clipboard
            </>
          )}
        </Button>
        <Button variant="teal" size="sm" onClick={handlePrint}>
          <Printer className="h-4 w-4 mr-1.5" />
          Print
        </Button>
      </div>

      {/* Printable preview */}
      <div
        ref={printRef}
        className="bg-white dark:bg-slate-950 border rounded-lg p-6 space-y-5 text-sm"
      >
        <div>
          <h1
            style={{
              fontSize: "18px",
              borderBottom: "2px solid #0d9488",
              paddingBottom: "6px",
              marginBottom: "16px",
              color: "#0d9488",
            }}
          >
            Preceptor Presentation
          </h1>
          <p className="deidentified" style={{ fontStyle: "italic", color: "#64748b", fontSize: "11px" }}>
            [De-identified Patient]
          </p>
        </div>

        {/* Chief Complaint */}
        {data.chiefComplaint && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Chief Complaint
            </h2>
            <p>{data.chiefComplaint}</p>
          </div>
        )}

        {/* HPI */}
        {data.hpi && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Brief HPI
            </h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.hpi}</p>
          </div>
        )}

        {/* Vitals */}
        {(data.vitals.hr || data.vitals.bp || data.vitals.rr || data.vitals.temp || data.vitals.spo2) && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Vitals
            </h2>
            <div
              className="vitals-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "8px",
                margin: "6px 0",
              }}
            >
              {[
                { label: "HR", value: data.vitals.hr, unit: "bpm" },
                { label: "BP", value: data.vitals.bp, unit: "mmHg" },
                { label: "RR", value: data.vitals.rr, unit: "/min" },
                { label: "Temp", value: data.vitals.temp, unit: "F" },
                { label: "SpO2", value: data.vitals.spo2, unit: "%" },
              ].map(({ label, value, unit }) => (
                <div
                  key={label}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "4px",
                    padding: "6px 8px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "10px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {label}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>
                    {value || "--"} <span style={{ fontSize: "10px", fontWeight: 400, color: "#94a3b8" }}>{value ? unit : ""}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PE Findings */}
        {data.peFindings && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Pertinent Physical Exam Findings
            </h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.peFindings}</p>
          </div>
        )}

        {/* Labs/Imaging */}
        {data.labsImaging && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Key Labs / Imaging
            </h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.labsImaging}</p>
          </div>
        )}

        {/* Differentials */}
        {data.differentials.length > 0 && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Differential Diagnosis
            </h2>
            <div style={{ marginTop: "6px" }}>
              {data.differentials.map((d, i) => {
                const isMNM = d.mustNotMiss || d.likelihood === "must_not_miss";
                return (
                  <div key={d.id} style={{ padding: "3px 0" }}>
                    <div className="diff-item" style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span style={{ fontWeight: 700, minWidth: "20px" }}>{i + 1}.</span>
                      <span
                        style={{
                          fontWeight: 500,
                          color: isMNM ? "#dc2626" : d.isTopDifferential ? "#0d9488" : "inherit",
                        }}
                      >
                        {d.conditionName}
                      </span>
                      <span className={likelihoodTagClass(d.likelihood)}
                        style={{
                          display: "inline-block",
                          fontSize: "9px",
                          padding: "1px 6px",
                          borderRadius: "9999px",
                          marginLeft: "6px",
                          fontWeight: 600,
                          background: isMNM ? "#fecaca" : d.likelihood === "common" || d.likelihood === "high" ? "#ccfbf1" : d.likelihood === "uncommon" || d.likelihood === "medium" ? "#fef3c7" : "#f1f5f9",
                          color: isMNM ? "#991b1b" : d.likelihood === "common" || d.likelihood === "high" ? "#115e59" : d.likelihood === "uncommon" || d.likelihood === "medium" ? "#92400e" : "#475569",
                        }}
                      >
                        {likelihoodLabel(d.likelihood)}
                      </span>
                      {d.isTopDifferential && (
                        <span style={{ color: "#d97706", marginLeft: "4px" }}>&#9733;</span>
                      )}
                    </div>
                    {d.notes && (
                      <div style={{ fontStyle: "italic", color: "#475569", fontSize: "11px", marginLeft: "28px" }}>
                        Notes: {d.notes}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Working Diagnosis */}
        {data.workingDiagnosis && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Working Diagnosis
            </h2>
            <p style={{ fontWeight: 600 }}>{data.workingDiagnosis}</p>
          </div>
        )}

        {/* Proposed Plan */}
        {data.proposedPlan && (
          <div className="section">
            <h2
              style={{
                fontSize: "14px",
                marginBottom: "6px",
                color: "#0d9488",
                borderBottom: "1px solid #e5e7eb",
                paddingBottom: "3px",
              }}
            >
              Proposed Plan
            </h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{data.proposedPlan}</p>
          </div>
        )}
      </div>
    </div>
  );
}
