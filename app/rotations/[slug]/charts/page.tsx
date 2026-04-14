"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import type { RotationSlug } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/toaster";
import {
  Plus,
  FileText,
  Trash2,
  Pencil,
  Calendar,
  Clock,
  Loader2,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

interface ChartRow {
  id: string;
  user_id: string;
  rotation_slug: string;
  chief_complaint: string;
  encounter_date: string;
  soap_data: Record<string, unknown>;
  notes: string;
  created_at: string;
  updated_at: string;
}

export default function SavedChartsPage() {
  const params = useParams();
  const slug = params.slug as RotationSlug;

  const [charts, setCharts] = useState<ChartRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchCharts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/charts?rotation_slug=${slug}`);
      if (res.ok) {
        const data = await res.json();
        setCharts(data);
      }
    } catch {
      // silently fail -- charts may not be available without Supabase
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCharts();
  }, [fetchCharts]);

  const handleDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/charts/${deleteId}`, { method: "DELETE" });
      if (res.ok) {
        setCharts((prev) => prev.filter((c) => c.id !== deleteId));
        toast({
          title: "Chart deleted",
          description: "The chart has been permanently removed.",
          variant: "success",
        });
      } else {
        throw new Error("Delete failed");
      }
    } catch {
      toast({
        title: "Delete failed",
        description: "Could not delete the chart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setDeleting(false);
      setDeleteId(null);
    }
  };

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const formatDateTime = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-teal-600" />
            Saved Charts
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your SOAP notes for this rotation
          </p>
        </div>
        <Link href={`/rotations/${slug}/chart`}>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] px-5">
            <Plus className="h-4 w-4 mr-2" />
            New Chart
          </Button>
        </Link>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-6 w-6 animate-spin text-teal-600 mr-2" />
          <span className="text-sm text-muted-foreground">
            Loading charts...
          </span>
        </div>
      )}

      {/* Empty state */}
      {!loading && charts.length === 0 && (
        <div className="text-center py-16 space-y-4">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center">
              <FileText className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
          </div>
          <h2 className="text-lg font-semibold">No charts yet</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Start documenting your clinical encounters by creating your first
            SOAP chart. Practice your charting skills for this rotation.
          </p>
          <Link href={`/rotations/${slug}/chart`}>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] px-5 mt-2">
              <Plus className="h-4 w-4 mr-2" />
              Create Your First Chart
            </Button>
          </Link>
        </div>
      )}

      {/* Chart cards */}
      {!loading && charts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {charts.map((chart) => {
            const patientLabel =
              (chart.soap_data as any)?.patientLabel ?? "";
            return (
              <Card
                key={chart.id}
                className="hover:shadow-md transition-shadow group"
              >
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-teal-600 shrink-0" />
                        <h3 className="font-semibold text-sm truncate">
                          {chart.chief_complaint || "No chief complaint"}
                        </h3>
                      </div>
                      {patientLabel && (
                        <Badge
                          variant="outline"
                          className="text-xs text-muted-foreground"
                        >
                          {patientLabel}
                        </Badge>
                      )}
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {formatDate(chart.encounter_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Updated {formatDateTime(chart.updated_at)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <Link href={`/rotations/${slug}/chart?id=${chart.id}`}>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="min-h-[44px] min-w-[44px] text-teal-600 hover:text-teal-700 hover:bg-teal-50"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="min-h-[44px] min-w-[44px] text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => setDeleteId(chart.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Delete confirmation dialog */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              Delete Chart
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to permanently delete this chart? This action
              cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setDeleteId(null)}
              disabled={deleting}
              className="min-h-[44px]"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={deleting}
              className="min-h-[44px]"
            >
              {deleting ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Trash2 className="h-4 w-4 mr-2" />
              )}
              {deleting ? "Deleting..." : "Delete Chart"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
