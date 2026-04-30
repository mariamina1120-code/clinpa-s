import { notFound } from "next/navigation";
import type { RotationSlug, Drug } from "@/types";
import { getPharmacologyByRotation } from "@/lib/seed";
import { getRotation } from "@/lib/utils";

function groupByClass(drugs: Drug[]): Record<string, Drug[]> {
  return drugs.reduce<Record<string, Drug[]>>((acc, drug) => {
    (acc[drug.drugClass] ??= []).push(drug);
    return acc;
  }, {});
}

function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={`text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5 ${className}`}>
      {children}
    </h4>
  );
}

function BulletList({ items, colorClass = "" }: { items: string[]; colorClass?: string }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className={`flex items-start gap-2 text-sm ${colorClass}`}>
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-40 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Dosing as a clean table
function DosingTable({ dosing }: { dosing: NonNullable<Drug["dosing"]> }) {
  const rows = [
    { label: "Adult",   value: dosing.adult ?? dosing.adultGeneral },
    { label: "Peds",    value: dosing.pediatric ?? dosing.pediatricNote },
    { label: "Renal",   value: dosing.renalAdjustment },
    { label: "Hepatic", value: dosing.hepaticAdjustment },
  ].filter((r) => r.value);

  if (rows.length === 0) return null;

  return (
    <div className="rounded-xl border border-border overflow-hidden">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
              <td className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-400 w-20 shrink-0 align-top pt-3">
                {row.label}
              </td>
              <td className="px-4 py-2.5 leading-relaxed border-l border-border align-top">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DrugCard({ drug }: { drug: Drug }) {
  const hasContraindications =
    (drug.contraindicationsStructured?.absolute?.length ?? 0) > 0 ||
    (drug.contraindicationsStructured?.relative?.length ?? 0) > 0 ||
    (drug.contraindications?.length ?? 0) > 0;

  const hasInteractions =
    (drug.interactionsStructured?.drugs?.length ?? 0) > 0 ||
    (drug.interactionsStructured?.foods?.length ?? 0) > 0 ||
    (drug.interactions?.length ?? 0) > 0;

  return (
    <details className="group/drug border border-border rounded-xl overflow-hidden bg-background mt-2" open={false}>
      <summary className="flex items-start justify-between gap-3 px-4 py-3.5 cursor-pointer list-none select-none hover:bg-muted/20 transition-colors">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-[15px]">{drug.name}</span>
            {(drug.brandName ?? drug.brandNames?.[0]) && (
              <span className="text-xs text-muted-foreground italic">
                ({drug.brandName ?? drug.brandNames?.[0]})
              </span>
            )}
          </div>
          {drug.clinicalRole && (
            <p className="text-xs text-muted-foreground mt-0.5">{drug.clinicalRole}</p>
          )}
        </div>
        <svg
          className="h-4 w-4 text-muted-foreground transition-transform group-open/drug:rotate-180 shrink-0 mt-1"
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>

      <div className="px-4 pb-5 border-t border-border pt-5 space-y-5">

        {/* Why Use This — full-width callout */}
        {drug.whyUseThisVsOthers && (
          <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1.5">
              ⚖️ Why This vs. Others
            </p>
            <p className="text-sm text-blue-900 dark:text-blue-100 leading-relaxed">{drug.whyUseThisVsOthers}</p>
          </div>
        )}

        {/* MOA + Indications side-by-side */}
        {((drug.mechanism ?? drug.mechanismOfAction) || (drug.indications?.length ?? 0) > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(drug.mechanism ?? drug.mechanismOfAction) && (
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <SectionLabel>Mechanism of Action</SectionLabel>
                <p className="text-sm leading-relaxed">{drug.mechanism ?? drug.mechanismOfAction}</p>
              </div>
            )}
            {(drug.indications?.length ?? 0) > 0 && (
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <SectionLabel>Indications</SectionLabel>
                <BulletList items={drug.indications!} />
              </div>
            )}
          </div>
        )}

        {/* Dosing table */}
        {drug.dosing && (
          <div>
            <SectionLabel>Dosing</SectionLabel>
            <DosingTable dosing={drug.dosing} />
          </div>
        )}

        {/* Side Effects */}
        {drug.sideEffects && (
          <div className="space-y-3">
            <SectionLabel>Side Effects</SectionLabel>

            {/* Black Box — dramatic styling */}
            {drug.sideEffects.blackBox && (
              <div className="rounded-xl bg-gray-900 dark:bg-gray-950 border-2 border-gray-700 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-300 mb-2">
                  ⬛ Black Box Warning
                </p>
                <p className="text-sm text-gray-100 leading-relaxed">
                  {Array.isArray(drug.sideEffects.blackBox)
                    ? drug.sideEffects.blackBox.join(" ")
                    : drug.sideEffects.blackBox}
                </p>
              </div>
            )}

            {/* Serious + Common side-by-side */}
            {((drug.sideEffects.serious?.length ?? 0) > 0 || (drug.sideEffects.common?.length ?? 0) > 0) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(drug.sideEffects.serious?.length ?? 0) > 0 && (
                  <div className="rounded-xl border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950/30 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2.5">
                      ⚠️ Serious
                    </p>
                    <BulletList items={drug.sideEffects.serious!} colorClass="text-orange-800 dark:text-orange-200" />
                  </div>
                )}
                {(drug.sideEffects.common?.length ?? 0) > 0 && (
                  <div className="rounded-xl border border-border bg-muted/30 p-4">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2.5">Common</p>
                    <BulletList items={drug.sideEffects.common!} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Contraindications + Interactions side-by-side */}
        {(hasContraindications || hasInteractions) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

            {/* Contraindications */}
            {hasContraindications && (
              <div className="rounded-xl border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2.5">
                  Contraindications
                </p>
                {drug.contraindicationsStructured ? (
                  <div className="space-y-2">
                    {(drug.contraindicationsStructured.absolute?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-red-500 mb-1">Absolute</p>
                        <BulletList items={drug.contraindicationsStructured.absolute!} colorClass="text-red-800 dark:text-red-200" />
                      </div>
                    )}
                    {(drug.contraindicationsStructured.relative?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-orange-500 mb-1">Relative</p>
                        <BulletList items={drug.contraindicationsStructured.relative!} colorClass="text-orange-800 dark:text-orange-200" />
                      </div>
                    )}
                  </div>
                ) : (
                  <BulletList items={drug.contraindications!} colorClass="text-red-800 dark:text-red-200" />
                )}
              </div>
            )}

            {/* Interactions */}
            {hasInteractions && (
              <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 mb-2.5">
                  Key Interactions
                </p>
                {drug.interactionsStructured ? (
                  <div className="space-y-2">
                    {(drug.interactionsStructured.drugs?.length ?? 0) > 0 && (
                      <BulletList items={drug.interactionsStructured.drugs!} colorClass="text-amber-900 dark:text-amber-200" />
                    )}
                    {(drug.interactionsStructured.foods?.length ?? 0) > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-amber-600 mt-2 mb-1">Food</p>
                        <BulletList items={drug.interactionsStructured.foods!} colorClass="text-amber-900 dark:text-amber-200" />
                      </div>
                    )}
                  </div>
                ) : (
                  <BulletList items={drug.interactions!} colorClass="text-amber-900 dark:text-amber-200" />
                )}
              </div>
            )}
          </div>
        )}

        {/* Monitoring + Clinical Pearls side-by-side */}
        {((drug.monitoring?.length ?? 0) > 0 || (drug.clinicalPearls?.length ?? 0) > 0) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(drug.monitoring?.length ?? 0) > 0 && (
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <SectionLabel>Monitoring</SectionLabel>
                <BulletList items={drug.monitoring!} />
              </div>
            )}
            {(drug.clinicalPearls?.length ?? 0) > 0 && (
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <SectionLabel>Clinical Pearls</SectionLabel>
                <BulletList items={drug.clinicalPearls!} />
              </div>
            )}
          </div>
        )}

        {/* Board Recall */}
        {(drug.boardRecallTip ?? (drug.boardRecallTips?.length ?? 0) > 0) && (
          <div className="rounded-xl border border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30 p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-2">
              🎯 Board Recall
            </p>
            {drug.boardRecallTip ? (
              <p className="text-sm text-teal-900 dark:text-teal-100 leading-relaxed">{drug.boardRecallTip}</p>
            ) : (
              <BulletList items={drug.boardRecallTips!} colorClass="text-teal-900 dark:text-teal-100" />
            )}
          </div>
        )}

      </div>
    </details>
  );
}

export default function PharmacologyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as RotationSlug;
  const drugs = getPharmacologyByRotation(slug);
  const rotation = getRotation(slug);
  if (!rotation) notFound();
  const rotationName = rotation.name;

  const grouped = groupByClass(drugs);
  const classes = Object.keys(grouped);

  return (
    <div className="max-w-3xl mx-auto space-y-6">

      {/* Page header */}
      <div className="pb-4 border-b border-border">
        <h1 className="text-2xl font-bold tracking-tight">Pharmacology</h1>
        <p className="text-sm text-muted-foreground mt-1">
          {rotationName} · {classes.length} drug classes · {drugs.length} medications
        </p>
      </div>

      {drugs.length === 0 ? (
        <p className="text-muted-foreground">No pharmacology data loaded for this rotation.</p>
      ) : (
        <div className="space-y-4">
          {classes.map((className) => (
            <details
              key={className}
              className="group border-2 border-border rounded-2xl overflow-hidden bg-card"
              open={false}
            >
              <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none select-none hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-bold text-base">{className}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-muted-foreground px-2.5 py-0.5 rounded-full bg-muted border border-border">
                    {grouped[className].length} {grouped[className].length === 1 ? "drug" : "drugs"}
                  </span>
                  <svg
                    className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>

              <div className="px-4 pb-4 border-t border-border">
                {grouped[className].map((drug) => (
                  <DrugCard key={drug.id} drug={drug} />
                ))}
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
