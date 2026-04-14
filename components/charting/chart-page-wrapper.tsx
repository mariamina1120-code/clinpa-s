"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SOAPChartForm } from "@/components/charting/soap-chart-form";
import type { Chart, SOAPData } from "@/types";
import { Loader2 } from "lucide-react";

interface ChartPageWrapperProps {
  rotationSlug: string;
  rotationName: string;
}

export function ChartPageWrapper({
  rotationSlug,
  rotationName,
}: ChartPageWrapperProps) {
  const searchParams = useSearchParams();
  const chartId = searchParams.get("id");

  const [existingChart, setExistingChart] = useState<Chart | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(!!chartId);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chartId) return;

    async function fetchChart() {
      try {
        const res = await fetch(`/api/charts/${chartId}`);
        if (!res.ok) {
          setError("Chart not found or you don't have access.");
          return;
        }
        const data = await res.json();
        // Map snake_case DB fields to camelCase Chart interface
        const chart: Chart = {
          id: data.id,
          userId: data.user_id,
          rotationSlug: data.rotation_slug,
          chiefComplaint: data.chief_complaint,
          encounterDate: data.encounter_date,
          soapData: data.soap_data as SOAPData,
          notes: data.notes ?? "",
          createdAt: data.created_at,
          updatedAt: data.updated_at,
        };
        setExistingChart(chart);
      } catch {
        setError("Failed to load chart.");
      } finally {
        setLoading(false);
      }
    }

    fetchChart();
  }, [chartId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-teal-600 mr-2" />
        <span className="text-sm text-muted-foreground">Loading chart...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center space-y-4">
        <p className="text-sm text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <SOAPChartForm
      rotationSlug={rotationSlug}
      rotationName={rotationName}
      existingChart={existingChart}
    />
  );
}
