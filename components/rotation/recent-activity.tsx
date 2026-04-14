import Link from "next/link";
import { getRotation, formatDate } from "@/lib/utils";
import { FileText, ClipboardList } from "lucide-react";
import type { RotationSlug } from "@/types";

interface RecentActivityProps {
  charts: {
    id: string;
    rotation_slug: string;
    chief_complaint: string | null;
    encounter_date: string;
  }[];
  logs: {
    id: string;
    rotation_slug: string;
    chief_complaint: string;
    encounter_date: string;
    diagnosis_category: string;
  }[];
}

export function RecentActivity({ charts, logs }: RecentActivityProps) {
  if (!charts.length && !logs.length) return null;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Recent charts */}
      {charts.length > 0 && (
        <div className="rounded-xl border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center gap-2">
              <FileText className="h-4 w-4 text-teal-600" />
              Recent Charts
            </h2>
            <Link href="/case-log" className="text-xs text-teal-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {charts.map((chart) => {
              const rotation = getRotation(chart.rotation_slug as RotationSlug);
              return (
                <Link
                  key={chart.id}
                  href={`/rotations/${chart.rotation_slug}/charts/${chart.id}`}
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <span className="text-lg">{rotation?.icon ?? "📋"}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {chart.chief_complaint ?? "No chief complaint"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {rotation?.shortName} · {formatDate(chart.encounter_date)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Recent case logs */}
      {logs.length > 0 && (
        <div className="rounded-xl border bg-card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-teal-600" />
              Recent Case Logs
            </h2>
            <Link href="/case-log" className="text-xs text-teal-600 hover:underline">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {logs.map((log) => {
              const rotation = getRotation(log.rotation_slug as RotationSlug);
              return (
                <div key={log.id} className="flex items-start gap-3 p-2 rounded-lg">
                  <span className="text-lg">{rotation?.icon ?? "📋"}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{log.chief_complaint}</p>
                    <p className="text-xs text-muted-foreground">
                      {rotation?.shortName} · {log.diagnosis_category} · {formatDate(log.encounter_date)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
