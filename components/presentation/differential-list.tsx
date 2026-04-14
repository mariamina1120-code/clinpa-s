"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  X,
  Star,
  Plus,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────────

export interface DifferentialItem {
  id: string;
  conditionName: string;
  likelihood: string;
  mustNotMiss: boolean;
  distinguishingFeatures?: string;
  distinguishingHistory?: string[];
  distinguishingExam?: string[];
  workup?: string[];
  keyWorkup?: string[];
  redFlags?: string[];
  clinicalPearl?: string;
  clinicalPearls?: string[];
  isTopDifferential: boolean;
  isCustom: boolean;
  notes: string;
}

interface DifferentialListProps {
  items: DifferentialItem[];
  onItemsChange: (items: DifferentialItem[]) => void;
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function getLikelihoodVariant(likelihood: string) {
  switch (likelihood) {
    case "must_not_miss":
      return "danger" as const;
    case "common":
    case "high":
      return "teal" as const;
    case "uncommon":
    case "medium":
      return "warning" as const;
    case "rare":
    case "low":
    case "less_common":
      return "secondary" as const;
    default:
      return "outline" as const;
  }
}

function getLikelihoodLabel(likelihood: string): string {
  switch (likelihood) {
    case "must_not_miss":
      return "Must Not Miss";
    case "high":
      return "High";
    case "medium":
      return "Medium";
    case "low":
      return "Low";
    case "less_common":
      return "Less Common";
    default:
      return likelihood.charAt(0).toUpperCase() + likelihood.slice(1).replace(/_/g, " ");
  }
}

// ─── Component ──────────────────────────────────────────────────────────────────

export function DifferentialList({ items, onItemsChange }: DifferentialListProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [notesOpenId, setNotesOpenId] = useState<string | null>(null);
  const [customName, setCustomName] = useState("");
  const [customLikelihood, setCustomLikelihood] = useState("uncommon");

  // ── Reorder ──
  function moveItem(index: number, direction: "up" | "down") {
    const newItems = [...items];
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    [newItems[index], newItems[targetIndex]] = [newItems[targetIndex], newItems[index]];
    onItemsChange(newItems);
  }

  // ── Remove ──
  function removeItem(id: string) {
    onItemsChange(items.filter((item) => item.id !== id));
  }

  // ── Toggle top differential ──
  function toggleTop(id: string) {
    onItemsChange(
      items.map((item) =>
        item.id === id ? { ...item, isTopDifferential: !item.isTopDifferential } : item
      )
    );
  }

  // ── Update notes ──
  function updateNotes(id: string, notes: string) {
    onItemsChange(
      items.map((item) => (item.id === id ? { ...item, notes } : item))
    );
  }

  // ── Add custom ──
  function addCustom() {
    if (!customName.trim()) return;
    const newItem: DifferentialItem = {
      id: `custom-${Date.now()}`,
      conditionName: customName.trim(),
      likelihood: customLikelihood,
      mustNotMiss: false,
      isTopDifferential: false,
      isCustom: true,
      notes: "",
    };
    onItemsChange([...items, newItem]);
    setCustomName("");
  }

  const topCount = items.filter((i) => i.isTopDifferential).length;

  return (
    <div className="space-y-2">
      {/* Header summary */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-muted-foreground">
          {items.length} differential{items.length !== 1 ? "s" : ""} &middot;{" "}
          {topCount} starred as top
        </p>
        <div className="flex items-center gap-2">
          <Badge variant="danger" className="text-[10px]">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Must Not Miss
          </Badge>
          <Badge variant="teal" className="text-[10px]">Common</Badge>
          <Badge variant="warning" className="text-[10px]">Uncommon</Badge>
        </div>
      </div>

      {/* Differential items */}
      {items.map((item, index) => {
        const isMNM = item.mustNotMiss || item.likelihood === "must_not_miss";
        const isExpanded = expandedId === item.id;
        const isNotesOpen = notesOpenId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-lg border transition-all",
              isMNM
                ? "border-red-300 bg-red-50/50 dark:border-red-800 dark:bg-red-950/30"
                : item.isTopDifferential
                ? "border-teal-300 bg-teal-50/30 dark:border-teal-800 dark:bg-teal-950/20"
                : "bg-card"
            )}
          >
            {/* Main row */}
            <div className="flex items-center gap-2 p-3">
              {/* Rank number */}
              <span
                className={cn(
                  "flex items-center justify-center h-7 w-7 rounded-full text-xs font-bold shrink-0",
                  isMNM
                    ? "bg-red-200 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : item.isTopDifferential
                    ? "bg-teal-200 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
                    : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                )}
              >
                {index + 1}
              </span>

              {/* Condition name + badges */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={cn("font-medium text-sm", isMNM && "text-red-800 dark:text-red-300")}>
                    {item.conditionName}
                  </span>
                  <Badge variant={getLikelihoodVariant(item.likelihood)} className="text-[10px] py-0">
                    {getLikelihoodLabel(item.likelihood)}
                  </Badge>
                  {item.isCustom && (
                    <Badge variant="outline" className="text-[10px] py-0">Custom</Badge>
                  )}
                  {isMNM && (
                    <AlertTriangle className="h-3.5 w-3.5 text-red-500 shrink-0" />
                  )}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-0.5 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-9 w-9",
                    item.isTopDifferential && "text-amber-500 hover:text-amber-600"
                  )}
                  onClick={() => toggleTop(item.id)}
                  title={item.isTopDifferential ? "Remove from top differentials" : "Star as top differential"}
                  disabled={!item.isTopDifferential && topCount >= 3}
                >
                  <Star
                    className={cn("h-4 w-4", item.isTopDifferential && "fill-amber-400")}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setNotesOpenId(isNotesOpen ? null : item.id)}
                  title="Add notes"
                >
                  <MessageSquare
                    className={cn("h-4 w-4", item.notes && "text-teal-600 fill-teal-100")}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => moveItem(index, "up")}
                  disabled={index === 0}
                  title="Move up"
                >
                  <ArrowUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => moveItem(index, "down")}
                  disabled={index === items.length - 1}
                  title="Move down"
                >
                  <ArrowDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-red-600"
                  onClick={() => removeItem(item.id)}
                  title="Remove from differentials"
                >
                  <X className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                  title={isExpanded ? "Collapse" : "Expand details"}
                >
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Notes inline editor */}
            {isNotesOpen && (
              <div className="px-3 pb-3">
                <Textarea
                  placeholder="Add your notes for this diagnosis..."
                  value={item.notes}
                  onChange={(e) => updateNotes(item.id, e.target.value)}
                  className="text-sm min-h-[60px]"
                />
              </div>
            )}

            {/* Expanded details */}
            {isExpanded && (
              <div className="px-3 pb-3 space-y-3 text-sm border-t mx-3 pt-3">
                {/* Distinguishing Features */}
                {(item.distinguishingFeatures ||
                  (item.distinguishingHistory && item.distinguishingHistory.length > 0) ||
                  (item.distinguishingExam && item.distinguishingExam.length > 0)) && (
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Distinguishing Features
                    </p>
                    {item.distinguishingFeatures && (
                      <p className="text-muted-foreground">{item.distinguishingFeatures}</p>
                    )}
                    {item.distinguishingHistory && item.distinguishingHistory.length > 0 && (
                      <div className="mt-1">
                        <span className="font-medium">History: </span>
                        {Array.isArray(item.distinguishingHistory)
                          ? item.distinguishingHistory.join("; ")
                          : item.distinguishingHistory}
                      </div>
                    )}
                    {item.distinguishingExam && item.distinguishingExam.length > 0 && (
                      <div className="mt-1">
                        <span className="font-medium">Exam: </span>
                        {Array.isArray(item.distinguishingExam)
                          ? item.distinguishingExam.join("; ")
                          : item.distinguishingExam}
                      </div>
                    )}
                  </div>
                )}

                {/* Workup */}
                {((item.workup && item.workup.length > 0) ||
                  (item.keyWorkup && item.keyWorkup.length > 0)) && (
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      Key Workup
                    </p>
                    <ul className="list-disc list-inside space-y-0.5 text-muted-foreground">
                      {(item.keyWorkup || item.workup || []).map((w, i) => (
                        <li key={i}>{w}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Red Flags */}
                {item.redFlags && item.redFlags.length > 0 && (
                  <div>
                    <p className="font-semibold text-xs uppercase tracking-wider text-red-600 dark:text-red-400 mb-1">
                      Red Flags
                    </p>
                    <ul className="list-disc list-inside space-y-0.5 text-red-700 dark:text-red-400">
                      {item.redFlags.map((rf, i) => (
                        <li key={i}>{rf}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Clinical Pearl */}
                {(item.clinicalPearl ||
                  (item.clinicalPearls && item.clinicalPearls.length > 0)) && (
                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md p-2">
                    <p className="font-semibold text-xs uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                      Clinical Pearl
                    </p>
                    {item.clinicalPearl && (
                      <p className="text-amber-800 dark:text-amber-300 text-xs">
                        {item.clinicalPearl}
                      </p>
                    )}
                    {item.clinicalPearls?.map((pearl, i) => (
                      <p key={i} className="text-amber-800 dark:text-amber-300 text-xs mt-1">
                        {pearl}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Add custom diagnosis */}
      <div className="flex items-center gap-2 pt-3 border-t mt-4">
        <Input
          placeholder="Add custom diagnosis..."
          value={customName}
          onChange={(e) => setCustomName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addCustom();
          }}
          className="flex-1"
        />
        <select
          value={customLikelihood}
          onChange={(e) => setCustomLikelihood(e.target.value)}
          className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="must_not_miss">Must Not Miss</option>
        </select>
        <Button
          variant="teal"
          size="icon"
          className="h-10 w-10 shrink-0"
          onClick={addCustom}
          disabled={!customName.trim()}
          title="Add custom diagnosis"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      {items.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          <p className="text-sm">No differentials loaded.</p>
          <p className="text-xs mt-1">Select a chief complaint above, or add a custom diagnosis.</p>
        </div>
      )}
    </div>
  );
}
