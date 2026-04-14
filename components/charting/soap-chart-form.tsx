"use client";

import * as React from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import type { SOAPData, Chart } from "@/types";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/toaster";
import {
  Save,
  Plus,
  X,
  GripVertical,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ArrowLeft,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

// ─── Constants ──────────────────────────────────────────────────────────────────

const ROS_SYSTEMS = [
  { key: "constitutional", label: "Constitutional" },
  { key: "heent", label: "HEENT" },
  { key: "cardiovascular", label: "Cardiovascular" },
  { key: "respiratory", label: "Respiratory" },
  { key: "gi", label: "Gastrointestinal" },
  { key: "gu", label: "Genitourinary" },
  { key: "musculoskeletal", label: "Musculoskeletal" },
  { key: "neurological", label: "Neurological" },
  { key: "psychiatric", label: "Psychiatric" },
  { key: "skin", label: "Skin" },
  { key: "endocrine", label: "Endocrine" },
  { key: "hematologicLymphatic", label: "Hematologic/Lymphatic" },
] as const;

const PE_SYSTEMS = [
  { key: "general", label: "General" },
  { key: "heent", label: "HEENT" },
  { key: "neck", label: "Neck" },
  { key: "cardiovascular", label: "Cardiovascular" },
  { key: "respiratory", label: "Respiratory" },
  { key: "abdomen", label: "Abdomen" },
  { key: "musculoskeletal", label: "Musculoskeletal" },
  { key: "neurological", label: "Neurological" },
  { key: "skin", label: "Skin" },
  { key: "psychiatric", label: "Psychiatric" },
] as const;

const HPI_PROMPTS =
  "Use LOCQRATS: Location, Onset, Character, Quality, Radiation, Associated symptoms, Timing, Severity";

function getDefaultSOAPData(): SOAPData {
  const ros: Record<string, boolean | string> = {};
  ROS_SYSTEMS.forEach(({ key }) => {
    ros[`${key}_reviewed`] = false;
    ros[`${key}_notes`] = "";
  });

  const physicalExam: Record<string, string> = {};
  PE_SYSTEMS.forEach(({ key }) => {
    physicalExam[key] = "";
  });

  return {
    patientLabel: "",
    chiefComplaint: "",
    hpi: "",
    pmh: "",
    psh: "",
    familyHx: "",
    socialHx: "",
    medications: "",
    allergies: "",
    ros,
    physicalExam,
    assessment: "",
    differentials: [],
    plan: "",
    studentReflection: "",
  };
}

// ─── Component Props ────────────────────────────────────────────────────────────

interface SOAPChartFormProps {
  rotationSlug: string;
  rotationName: string;
  /** If provided, the form is in edit mode */
  existingChart?: Chart;
}

// ─── Main Component ─────────────────────────────────────────────────────────────

export function SOAPChartForm({
  rotationSlug,
  rotationName,
  existingChart,
}: SOAPChartFormProps) {
  const [soapData, setSoapData] = useState<SOAPData>(
    existingChart?.soapData ?? getDefaultSOAPData()
  );
  const [encounterDate, setEncounterDate] = useState(
    existingChart?.encounterDate ?? new Date().toISOString().split("T")[0]
  );
  const [notes, setNotes] = useState(existingChart?.notes ?? "");
  const [chartId, setChartId] = useState<string | null>(
    existingChart?.id ?? null
  );
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [dirty, setDirty] = useState(false);
  const [newDifferential, setNewDifferential] = useState("");

  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);

  // Mark dirty on changes (skip first render)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setDirty(true);
  }, [soapData, encounterDate, notes]);

  // Auto-save every 30 seconds when dirty
  useEffect(() => {
    if (!dirty) return;
    if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    autoSaveTimerRef.current = setTimeout(() => {
      handleSave(true);
    }, 30000);
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dirty, soapData, encounterDate, notes]);

  // ─── Field updaters ──────────────────────────────────────────────────────────

  const updateField = useCallback(
    <K extends keyof SOAPData>(field: K, value: SOAPData[K]) => {
      setSoapData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const updateROS = useCallback(
    (key: string, value: boolean | string) => {
      setSoapData((prev) => ({
        ...prev,
        ros: { ...prev.ros, [key]: value },
      }));
    },
    []
  );

  const updatePE = useCallback(
    (key: string, value: string) => {
      setSoapData((prev) => ({
        ...prev,
        physicalExam: { ...prev.physicalExam, [key]: value },
      }));
    },
    []
  );

  // ─── Differentials management ─────────────────────────────────────────────────

  const addDifferential = useCallback(() => {
    const trimmed = newDifferential.trim();
    if (!trimmed) return;
    setSoapData((prev) => ({
      ...prev,
      differentials: [...prev.differentials, trimmed],
    }));
    setNewDifferential("");
  }, [newDifferential]);

  const removeDifferential = useCallback((index: number) => {
    setSoapData((prev) => ({
      ...prev,
      differentials: prev.differentials.filter((_, i) => i !== index),
    }));
  }, []);

  const moveDifferential = useCallback(
    (index: number, direction: "up" | "down") => {
      setSoapData((prev) => {
        const arr = [...prev.differentials];
        const swapIndex = direction === "up" ? index - 1 : index + 1;
        if (swapIndex < 0 || swapIndex >= arr.length) return prev;
        [arr[index], arr[swapIndex]] = [arr[swapIndex], arr[index]];
        return { ...prev, differentials: arr };
      });
    },
    []
  );

  // ─── Save handler ────────────────────────────────────────────────────────────

  const handleSave = useCallback(
    async (isAutoSave = false) => {
      if (saving) return;
      setSaving(true);

      try {
        const payload = {
          rotation_slug: rotationSlug,
          chief_complaint: soapData.chiefComplaint,
          encounter_date: encounterDate,
          soap_data: soapData,
          notes,
        };

        let res: Response;

        if (chartId) {
          res = await fetch(`/api/charts/${chartId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        } else {
          res = await fetch("/api/charts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
        }

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Save failed" }));
          throw new Error(err.error ?? "Save failed");
        }

        const result = await res.json();
        if (!chartId && result.id) {
          setChartId(result.id);
        }

        setDirty(false);
        setLastSaved(new Date());

        if (!isAutoSave) {
          toast({
            title: "Chart saved",
            description: "Your SOAP chart has been saved successfully.",
            variant: "success",
          });
        }
      } catch (err: any) {
        toast({
          title: "Save failed",
          description: err.message ?? "Could not save chart. Please try again.",
          variant: "destructive",
        });
      } finally {
        setSaving(false);
      }
    },
    [saving, chartId, rotationSlug, soapData, encounterDate, notes]
  );

  // ─── Render helpers ──────────────────────────────────────────────────────────

  const fieldLabel = (label: string, htmlFor: string) => (
    <Label
      htmlFor={htmlFor}
      className="text-sm font-semibold text-foreground"
    >
      {label}
    </Label>
  );

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <Link
            href={`/rotations/${rotationSlug}/charts`}
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-teal-600 transition-colors min-h-[44px] min-w-[44px] justify-center"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Charts</span>
          </Link>
          <div>
            <h1 className="text-xl font-bold">
              {chartId ? "Edit" : "New"} SOAP Chart
            </h1>
            <p className="text-sm text-muted-foreground">{rotationName}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {lastSaved && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              Saved {lastSaved.toLocaleTimeString()}
            </span>
          )}
          {dirty && !saving && (
            <Badge variant="outline" className="text-xs text-amber-600 border-amber-300">
              Unsaved changes
            </Badge>
          )}
          <Button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] min-w-[44px] px-4"
          >
            {saving ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            {saving ? "Saving..." : "Save Chart"}
          </Button>
        </div>
      </div>

      {/* Top-level fields: patient label, CC, date */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              {fieldLabel("Patient Label", "patientLabel")}
              <Input
                id="patientLabel"
                placeholder='e.g. "65M with HTN"'
                value={soapData.patientLabel}
                onChange={(e) => updateField("patientLabel", e.target.value)}
                className="min-h-[44px]"
              />
              <p className="text-xs text-amber-600 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" />
                DE-IDENTIFIED only. No real names or MRNs.
              </p>
            </div>
            <div className="space-y-2">
              {fieldLabel("Chief Complaint", "chiefComplaint")}
              <Input
                id="chiefComplaint"
                placeholder='e.g. "Chest pain x 2 days"'
                value={soapData.chiefComplaint}
                onChange={(e) => updateField("chiefComplaint", e.target.value)}
                className="min-h-[44px]"
              />
            </div>
            <div className="space-y-2">
              {fieldLabel("Encounter Date", "encounterDate")}
              <Input
                id="encounterDate"
                type="date"
                value={encounterDate}
                onChange={(e) => setEncounterDate(e.target.value)}
                className="min-h-[44px]"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional notes */}
      <div className="space-y-2">
        {fieldLabel("Additional Notes", "notes")}
        <Textarea
          id="notes"
          placeholder="Any additional notes about this encounter (not part of the SOAP note)..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          className="min-h-[44px]"
        />
      </div>

      {/* Tabbed SOAP sections */}
      <Tabs defaultValue="subjective" className="w-full">
        <TabsList className="w-full grid grid-cols-3 h-12">
          <TabsTrigger
            value="subjective"
            className="min-h-[44px] data-[state=active]:text-teal-700 data-[state=active]:border-b-2 data-[state=active]:border-teal-600 text-sm font-medium"
          >
            Subjective
          </TabsTrigger>
          <TabsTrigger
            value="objective"
            className="min-h-[44px] data-[state=active]:text-teal-700 data-[state=active]:border-b-2 data-[state=active]:border-teal-600 text-sm font-medium"
          >
            Objective
          </TabsTrigger>
          <TabsTrigger
            value="assessment-plan"
            className="min-h-[44px] data-[state=active]:text-teal-700 data-[state=active]:border-b-2 data-[state=active]:border-teal-600 text-sm font-medium"
          >
            A & P
          </TabsTrigger>
        </TabsList>

        {/* ── Subjective Tab ──────────────────────────────────────────────── */}
        <TabsContent value="subjective" className="space-y-4 mt-4">
          {/* HPI */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                History of Present Illness (HPI)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xs text-muted-foreground italic">{HPI_PROMPTS}</p>
              <Textarea
                id="hpi"
                placeholder="Describe the history of present illness using the LOCQRATS framework..."
                value={soapData.hpi}
                onChange={(e) => updateField("hpi", e.target.value)}
                rows={6}
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          {/* Past Medical / Surgical History, Family, Social */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Past History & Social
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {fieldLabel("Past Medical History", "pmh")}
                  <Textarea
                    id="pmh"
                    placeholder="HTN, DM2, asthma..."
                    value={soapData.pmh}
                    onChange={(e) => updateField("pmh", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  {fieldLabel("Past Surgical History", "psh")}
                  <Textarea
                    id="psh"
                    placeholder="Appendectomy 2010, R knee arthroscopy..."
                    value={soapData.psh}
                    onChange={(e) => updateField("psh", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  {fieldLabel("Family History", "familyHx")}
                  <Textarea
                    id="familyHx"
                    placeholder="Mother: HTN, DM2; Father: CAD..."
                    value={soapData.familyHx}
                    onChange={(e) => updateField("familyHx", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  {fieldLabel("Social History", "socialHx")}
                  <Textarea
                    id="socialHx"
                    placeholder="Tobacco, alcohol, drugs, occupation, living situation..."
                    value={soapData.socialHx}
                    onChange={(e) => updateField("socialHx", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {fieldLabel("Medications", "medications")}
                  <Textarea
                    id="medications"
                    placeholder="Lisinopril 10mg daily, metformin 500mg BID..."
                    value={soapData.medications}
                    onChange={(e) => updateField("medications", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
                <div className="space-y-2">
                  {fieldLabel("Allergies", "allergies")}
                  <Textarea
                    id="allergies"
                    placeholder="PCN (rash), sulfa (anaphylaxis), NKDA..."
                    value={soapData.allergies}
                    onChange={(e) => updateField("allergies", e.target.value)}
                    rows={3}
                    className="min-h-[80px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Review of Systems */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Review of Systems (ROS)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {ROS_SYSTEMS.map(({ key, label }) => {
                  const reviewedKey = `${key}_reviewed`;
                  const notesKey = `${key}_notes`;
                  const isReviewed = !!soapData.ros[reviewedKey];

                  return (
                    <div
                      key={key}
                      className="border rounded-lg p-3 space-y-2 bg-muted/30"
                    >
                      <div className="flex items-center gap-2 min-h-[44px]">
                        <Checkbox
                          id={`ros-${key}`}
                          checked={isReviewed}
                          onCheckedChange={(checked) =>
                            updateROS(reviewedKey, !!checked)
                          }
                          className="h-5 w-5 data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-600"
                        />
                        <Label
                          htmlFor={`ros-${key}`}
                          className="text-sm font-medium cursor-pointer select-none"
                        >
                          {label}
                        </Label>
                      </div>
                      {isReviewed && (
                        <Textarea
                          placeholder="Pertinent positives/negatives..."
                          value={(soapData.ros[notesKey] as string) ?? ""}
                          onChange={(e) => updateROS(notesKey, e.target.value)}
                          rows={2}
                          className="text-sm min-h-[44px]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Objective Tab ───────────────────────────────────────────────── */}
        <TabsContent value="objective" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Physical Examination
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PE_SYSTEMS.map(({ key, label }) => (
                  <div key={key} className="space-y-2">
                    {fieldLabel(label, `pe-${key}`)}
                    <Textarea
                      id={`pe-${key}`}
                      placeholder={getPhysicalExamPlaceholder(key)}
                      value={soapData.physicalExam[key] ?? ""}
                      onChange={(e) => updatePE(key, e.target.value)}
                      rows={3}
                      className="min-h-[80px]"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Assessment & Plan Tab ───────────────────────────────────────── */}
        <TabsContent value="assessment-plan" className="space-y-4 mt-4">
          {/* Assessment */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Assessment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                id="assessment"
                placeholder="Summarize the clinical picture, your working diagnosis, and reasoning..."
                value={soapData.assessment}
                onChange={(e) => updateField("assessment", e.target.value)}
                rows={5}
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          {/* Differentials */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Differential Diagnoses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {soapData.differentials.length > 0 && (
                <ol className="space-y-2">
                  {soapData.differentials.map((dx, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 bg-muted/30 rounded-lg px-3 py-2 min-h-[44px]"
                    >
                      <GripVertical className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="text-sm font-medium text-teal-700 dark:text-teal-400 shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-sm flex-1">{dx}</span>
                      <div className="flex items-center gap-1 shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 min-h-[44px] min-w-[44px] p-0"
                          onClick={() => moveDifferential(i, "up")}
                          disabled={i === 0}
                        >
                          <ChevronUp className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 min-h-[44px] min-w-[44px] p-0"
                          onClick={() => moveDifferential(i, "down")}
                          disabled={i === soapData.differentials.length - 1}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 min-h-[44px] min-w-[44px] p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeDifferential(i)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              <div className="flex gap-2">
                <Input
                  placeholder="Add a differential diagnosis..."
                  value={newDifferential}
                  onChange={(e) => setNewDifferential(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addDifferential();
                    }
                  }}
                  className="flex-1 min-h-[44px]"
                />
                <Button
                  variant="outline"
                  onClick={addDifferential}
                  disabled={!newDifferential.trim()}
                  className="min-h-[44px] min-w-[44px] border-teal-300 text-teal-600 hover:bg-teal-50"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plan */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                id="plan"
                placeholder="Diagnostics ordered, treatments initiated, referrals made, patient education, follow-up plan..."
                value={soapData.plan}
                onChange={(e) => updateField("plan", e.target.value)}
                rows={6}
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>

          {/* Student Reflection */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-teal-700 dark:text-teal-400">
                Student Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xs text-muted-foreground italic">
                What did you learn? What would you do differently? What clinical
                reasoning skills did you practice?
              </p>
              <Textarea
                id="studentReflection"
                placeholder="Reflect on this encounter and your clinical reasoning process..."
                value={soapData.studentReflection}
                onChange={(e) =>
                  updateField("studentReflection", e.target.value)
                }
                rows={4}
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Bottom save bar (sticky on mobile) */}
      <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t pt-4 pb-4 -mx-6 px-6 flex items-center justify-between gap-3">
        <div className="text-xs text-muted-foreground">
          {lastSaved ? (
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3 text-green-500" />
              Last saved {lastSaved.toLocaleTimeString()}
            </span>
          ) : dirty ? (
            <span className="text-amber-600">Unsaved changes</span>
          ) : (
            <span>Auto-saves every 30 seconds</span>
          )}
        </div>
        <Button
          onClick={() => handleSave(false)}
          disabled={saving}
          className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] px-6"
        >
          {saving ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Save className="h-4 w-4 mr-2" />
          )}
          {saving ? "Saving..." : "Save Chart"}
        </Button>
      </div>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────────

function getPhysicalExamPlaceholder(key: string): string {
  const placeholders: Record<string, string> = {
    general:
      "Alert, oriented, no acute distress. Well-developed, well-nourished.",
    heent:
      "Head: normocephalic, atraumatic. Eyes: PERRL, EOMI. Ears/Nose/Throat: TMs clear, oropharynx without erythema.",
    neck: "Supple, no lymphadenopathy, no thyromegaly, no JVD.",
    cardiovascular:
      "RRR, no murmurs/rubs/gallops. Peripheral pulses 2+ bilaterally.",
    respiratory:
      "Clear to auscultation bilaterally, no wheezes/rales/rhonchi. Normal respiratory effort.",
    abdomen:
      "Soft, non-tender, non-distended. Normal BS. No hepatosplenomegaly.",
    musculoskeletal:
      "Full ROM all extremities. No edema, cyanosis, or clubbing.",
    neurological:
      "CN II-XII intact. Strength 5/5 all extremities. Sensation intact. DTRs 2+ bilaterally.",
    skin: "Warm, dry, intact. No rashes or lesions.",
    psychiatric:
      "Appropriate mood and affect. Normal judgment and insight. Oriented x4.",
  };
  return placeholders[key] ?? "Describe findings...";
}
