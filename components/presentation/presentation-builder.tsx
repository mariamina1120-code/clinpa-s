"use client";

import React, { useState, useMemo, useCallback } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ClipboardList,
  GitBranch,
  Eye,
  ChevronRight,
  ChevronLeft,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DifferentialList, type DifferentialItem } from "./differential-list";
import { PresentationPreview, type PresentationData } from "./presentation-preview";
import type { DifferentialSet, PhysicalExamFinding, LabValue, ImagingFinding } from "@/types";

// ─── Props ──────────────────────────────────────────────────────────────────────

interface PresentationBuilderProps {
  rotationSlug: string;
  rotationName: string;
  differentialSets: DifferentialSet[];
  physicalExamFindings: PhysicalExamFinding[];
  labs: LabValue[];
  imaging: ImagingFinding[];
}

// ─── Seed data differential -> DifferentialItem ─────────────────────────────────

function seedToDifferentialItem(
  d: DifferentialSet["differentials"][number],
  index: number
): DifferentialItem {
  // Handle different field names used in seed data
  const name =
    (d as any).diagnosis ||
    d.condition ||
    d.conditionName ||
    "Unknown";

  // Normalize likelihood: seed data uses "high"/"medium"/"low" but type says "common" etc.
  let likelihood = d.likelihood || "uncommon";
  // Also handle seed data that uses non-standard values
  if ((likelihood as string) === "high") likelihood = "common" as any;
  if ((likelihood as string) === "medium") likelihood = "uncommon" as any;
  if ((likelihood as string) === "low") likelihood = "rare" as any;

  const mustNotMiss = d.mustNotMiss || likelihood === "must_not_miss";

  // Handle string vs array for distinguishing fields
  const distinguishingHistory = typeof (d as any).distinguishingHistory === "string"
    ? [(d as any).distinguishingHistory]
    : d.distinguishingHistory;
  const distinguishingExam = typeof (d as any).distinguishingExam === "string"
    ? [(d as any).distinguishingExam]
    : d.distinguishingExam;
  const keyWorkup = typeof (d as any).keyWorkup === "string"
    ? [(d as any).keyWorkup]
    : d.keyWorkup;

  return {
    id: `seed-${index}-${name.replace(/\s+/g, "-").toLowerCase().slice(0, 30)}`,
    conditionName: name,
    likelihood: likelihood as string,
    mustNotMiss,
    distinguishingFeatures: d.distinguishingFeatures,
    distinguishingHistory,
    distinguishingExam,
    workup: d.workup,
    keyWorkup,
    redFlags: d.redFlags,
    clinicalPearl: d.clinicalPearl,
    clinicalPearls: d.clinicalPearls,
    isTopDifferential: false,
    isCustom: false,
    notes: "",
  };
}

// ─── Component ──────────────────────────────────────────────────────────────────

export function PresentationBuilder({
  rotationSlug,
  rotationName,
  differentialSets,
  physicalExamFindings,
  labs,
  imaging,
}: PresentationBuilderProps) {
  const [activeTab, setActiveTab] = useState("input");

  // ── Step 1: Patient data ──
  const [chiefComplaint, setChiefComplaint] = useState("");
  const [selectedComplaint, setSelectedComplaint] = useState("");
  const [hpi, setHpi] = useState("");
  const [hr, setHr] = useState("");
  const [bpSystolic, setBpSystolic] = useState("");
  const [bpDiastolic, setBpDiastolic] = useState("");
  const [rr, setRr] = useState("");
  const [temp, setTemp] = useState("");
  const [spo2, setSpo2] = useState("");
  const [peFindings, setPeFindings] = useState("");
  const [labsImaging, setLabsImaging] = useState("");
  const [workingDiagnosis, setWorkingDiagnosis] = useState("");
  const [proposedPlan, setProposedPlan] = useState("");

  // ── Step 2: Differentials ──
  const [differentials, setDifferentials] = useState<DifferentialItem[]>([]);
  const [diffLoaded, setDiffLoaded] = useState(false);

  // ── Available chief complaints from seed data ──
  const chiefComplaints = useMemo(
    () => differentialSets.map((ds) => ds.chiefComplaint),
    [differentialSets]
  );

  // ── Load differentials when a complaint is selected ──
  const loadDifferentials = useCallback(
    (complaint: string) => {
      // Find matching differential set (case-insensitive partial match)
      const match = differentialSets.find(
        (ds) =>
          ds.chiefComplaint.toLowerCase() === complaint.toLowerCase() ||
          ds.chiefComplaint.toLowerCase().includes(complaint.toLowerCase()) ||
          complaint.toLowerCase().includes(ds.chiefComplaint.toLowerCase())
      );
      if (match) {
        const items = match.differentials.map((d, i) => seedToDifferentialItem(d, i));
        // Sort: must-not-miss first, then by rank if available
        items.sort((a, b) => {
          if (a.mustNotMiss && !b.mustNotMiss) return -1;
          if (!a.mustNotMiss && b.mustNotMiss) return 1;
          return 0;
        });
        setDifferentials(items);
        setDiffLoaded(true);
      } else {
        setDifferentials([]);
        setDiffLoaded(true);
      }
    },
    [differentialSets]
  );

  // ── Handle complaint selection from dropdown ──
  function handleComplaintSelect(value: string) {
    setSelectedComplaint(value);
    setChiefComplaint(value);
    loadDifferentials(value);
  }

  // ── Handle free-text complaint entry (load on blur or enter) ──
  function handleComplaintBlur() {
    if (chiefComplaint.trim() && chiefComplaint !== selectedComplaint) {
      setSelectedComplaint("");
      loadDifferentials(chiefComplaint);
    }
  }

  // ── Compile presentation data ──
  const presentationData: PresentationData = {
    chiefComplaint,
    hpi,
    vitals: {
      hr,
      bp: bpSystolic && bpDiastolic ? `${bpSystolic}/${bpDiastolic}` : bpSystolic || bpDiastolic || "",
      rr,
      temp,
      spo2,
    },
    peFindings,
    labsImaging,
    workingDiagnosis,
    differentials,
    proposedPlan,
  };

  // ── Step navigation ──
  const steps = [
    { value: "input", label: "Patient Data", icon: ClipboardList },
    { value: "differentials", label: "Differentials", icon: GitBranch },
    { value: "preview", label: "Preview", icon: Eye },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center shrink-0">
          <Stethoscope className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        </div>
        <div>
          <h1 className="text-xl font-bold">Preceptor Presentation Builder</h1>
          <p className="text-sm text-muted-foreground">
            {rotationName} &mdash; Build a structured patient presentation
          </p>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* Step tabs */}
        <TabsList className="w-full grid grid-cols-3 h-12">
          {steps.map(({ value, label, icon: Icon }, i) => (
            <TabsTrigger
              key={value}
              value={value}
              className="flex items-center gap-2 text-xs sm:text-sm py-3 min-h-[44px]"
            >
              <span className={cn(
                "flex items-center justify-center h-5 w-5 rounded-full text-[10px] font-bold",
                activeTab === value
                  ? "bg-teal-600 text-white"
                  : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
              )}>
                {i + 1}
              </span>
              <Icon className="h-4 w-4 hidden sm:block" />
              <span className="hidden xs:inline">{label}</span>
              <span className="xs:hidden">{label.split(" ")[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {/* ═══════════ Step 1: Patient Data ═══════════ */}
        <TabsContent value="input" className="mt-4 space-y-4">
          {/* Chief Complaint */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Chief Complaint</CardTitle>
              <CardDescription>
                Select a common complaint or type your own
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="cc-select">Common Complaints</Label>
                  <Select
                    value={selectedComplaint}
                    onValueChange={handleComplaintSelect}
                  >
                    <SelectTrigger id="cc-select" className="min-h-[44px]">
                      <SelectValue placeholder="Select a chief complaint..." />
                    </SelectTrigger>
                    <SelectContent>
                      {chiefComplaints.map((cc) => (
                        <SelectItem key={cc} value={cc}>
                          {cc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="cc-text">Or type custom</Label>
                  <Input
                    id="cc-text"
                    placeholder="e.g., Chest pain, shortness of breath"
                    value={chiefComplaint}
                    onChange={(e) => setChiefComplaint(e.target.value)}
                    onBlur={handleComplaintBlur}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleComplaintBlur();
                    }}
                    className="min-h-[44px]"
                  />
                </div>
              </div>
              {chiefComplaint && diffLoaded && differentials.length > 0 && (
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="teal" className="text-xs">
                    {differentials.length} differentials loaded
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    from seed data &mdash; editable in Step 2
                  </span>
                </div>
              )}
              {chiefComplaint && diffLoaded && differentials.length === 0 && (
                <p className="text-xs text-muted-foreground pt-1">
                  No matching seed data found. You can add custom differentials in Step 2.
                </p>
              )}
            </CardContent>
          </Card>

          {/* HPI */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Brief HPI</CardTitle>
              <CardDescription>
                Concise history of present illness (OLDCARTS/OPQRST format recommended)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., 65 yo M with PMHx of HTN, DM2, and CAD presenting with 2 hours of substernal chest pressure radiating to the left arm, associated with diaphoresis and nausea. Pain rated 8/10, constant, not relieved by rest..."
                value={hpi}
                onChange={(e) => setHpi(e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Vitals */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Key Vitals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="v-hr">HR (bpm)</Label>
                  <Input
                    id="v-hr"
                    type="number"
                    placeholder="72"
                    value={hr}
                    onChange={(e) => setHr(e.target.value)}
                    className="min-h-[44px]"
                  />
                </div>
                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <Label>BP (mmHg)</Label>
                  <div className="flex items-center gap-1">
                    <Input
                      type="number"
                      placeholder="120"
                      value={bpSystolic}
                      onChange={(e) => setBpSystolic(e.target.value)}
                      className="min-h-[44px]"
                      aria-label="Systolic BP"
                    />
                    <span className="text-muted-foreground font-bold">/</span>
                    <Input
                      type="number"
                      placeholder="80"
                      value={bpDiastolic}
                      onChange={(e) => setBpDiastolic(e.target.value)}
                      className="min-h-[44px]"
                      aria-label="Diastolic BP"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="v-rr">RR (/min)</Label>
                  <Input
                    id="v-rr"
                    type="number"
                    placeholder="16"
                    value={rr}
                    onChange={(e) => setRr(e.target.value)}
                    className="min-h-[44px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="v-temp">Temp (F)</Label>
                  <Input
                    id="v-temp"
                    type="number"
                    step="0.1"
                    placeholder="98.6"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                    className="min-h-[44px]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="v-spo2">SpO2 (%)</Label>
                  <Input
                    id="v-spo2"
                    type="number"
                    placeholder="98"
                    value={spo2}
                    onChange={(e) => setSpo2(e.target.value)}
                    className="min-h-[44px]"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PE Findings */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Pertinent PE Findings</CardTitle>
              <CardDescription>
                Key positive and negative findings relevant to your differential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., Diaphoretic, appears uncomfortable. CV: Regular rate, no murmurs/gallops. Lungs: CTA bilaterally, no crackles. Abd: Soft, non-tender. Ext: No edema, pulses 2+ bilaterally."
                value={peFindings}
                onChange={(e) => setPeFindings(e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Labs/Imaging */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Key Lab / Imaging Results</CardTitle>
              <CardDescription>
                Pertinent positives and negatives from diagnostics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., Troponin I: 2.4 ng/mL (elevated), BMP: WNL, CBC: WBC 11.2. EKG: ST elevation in leads II, III, aVF. CXR: No acute cardiopulmonary process."
                value={labsImaging}
                onChange={(e) => setLabsImaging(e.target.value)}
                rows={3}
              />
            </CardContent>
          </Card>

          {/* Working Diagnosis */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Working Diagnosis</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="e.g., STEMI - Inferior wall MI"
                value={workingDiagnosis}
                onChange={(e) => setWorkingDiagnosis(e.target.value)}
                className="min-h-[44px]"
              />
            </CardContent>
          </Card>

          {/* Proposed Plan */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Proposed Plan</CardTitle>
              <CardDescription>
                Your recommended next steps for management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="e.g., 1. Activate cath lab for emergent PCI. 2. Dual antiplatelet therapy (aspirin 325mg + ticagrelor 180mg loading). 3. Heparin bolus + infusion. 4. Continuous telemetry monitoring. 5. Serial troponins q6h. 6. Cardiology consult."
                value={proposedPlan}
                onChange={(e) => setProposedPlan(e.target.value)}
                rows={4}
              />
            </CardContent>
          </Card>

          {/* Next step button */}
          <div className="flex justify-end pt-2">
            <Button
              variant="teal"
              size="lg"
              className="min-h-[44px]"
              onClick={() => setActiveTab("differentials")}
            >
              Next: Differentials
              <ChevronRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </TabsContent>

        {/* ═══════════ Step 2: Differentials ═══════════ */}
        <TabsContent value="differentials" className="mt-4 space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-teal-600" />
                Differential Diagnosis List
              </CardTitle>
              <CardDescription>
                {chiefComplaint ? (
                  <>
                    For: <span className="font-medium text-foreground">{chiefComplaint}</span>
                    {" "}&mdash; Reorder, remove, star your top 3, and add notes.
                  </>
                ) : (
                  "Enter a chief complaint in Step 1 to auto-load differentials from seed data."
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DifferentialList
                items={differentials}
                onItemsChange={setDifferentials}
              />
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            <Button
              variant="outline"
              size="lg"
              className="min-h-[44px]"
              onClick={() => setActiveTab("input")}
            >
              <ChevronLeft className="h-4 w-4 mr-1.5" />
              Back: Patient Data
            </Button>
            <Button
              variant="teal"
              size="lg"
              className="min-h-[44px]"
              onClick={() => setActiveTab("preview")}
            >
              Next: Preview
              <ChevronRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </TabsContent>

        {/* ═══════════ Step 3: Preview ═══════════ */}
        <TabsContent value="preview" className="mt-4 space-y-4">
          <PresentationPreview data={presentationData} />

          {/* Navigation */}
          <div className="flex justify-between pt-2">
            <Button
              variant="outline"
              size="lg"
              className="min-h-[44px]"
              onClick={() => setActiveTab("differentials")}
            >
              <ChevronLeft className="h-4 w-4 mr-1.5" />
              Back: Differentials
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
