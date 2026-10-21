"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ClipboardList, Plus, Trash2, Loader2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROTATIONS } from "@/lib/utils";
import type { RotationSlug } from "@/types";

interface CaseLog {
  id: string;
  rotation_slug: string;
  encounter_date: string;
  patient_age_group: string;
  patient_gender: string;
  chief_complaint: string;
  diagnosis_category: string;
  encounter_type: string;
  preceptor_name?: string;
  created_at: string;
}

const AGE_GROUPS = ["Pediatric (<18)", "Adult (18-64)", "Geriatric (65+)"];
const GENDERS = ["Male", "Female", "Other"];
const ENCOUNTER_TYPES = ["New Patient", "Follow-up", "Urgent Care", "Emergency", "Procedure"];
const QUICK_COMPLAINTS = [
  "Chest pain", "Shortness of breath", "Abdominal pain", "Headache", "Fever", "Cough",
  "Back pain", "Rash", "Laceration", "Med refill", "Well visit", "Follow-up",
];
const DX_CATEGORIES = [
  "Cardiovascular", "Pulmonary", "Gastrointestinal", "Renal / GU", "Endocrine", "Neurologic",
  "Psychiatric", "Musculoskeletal", "Dermatologic", "EENT", "Hematologic", "Infectious",
  "Reproductive / OB-GYN", "Preventive",
];
const LAST_ROTATION_KEY = "clinpas:lastRotation";

function Chips({
  options, value, onChange, label,
}: { options: { value: string; label: string }[]; value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">{label}</p>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={label}>
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                active ? "border-teal-600 bg-teal-600 text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function CaseLogPage() {
  const supabase = createClient();
  const router = useRouter();
  const [logs, setLogs] = useState<CaseLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [form, setForm] = useState({
    rotation_slug: "family-medicine" as RotationSlug,
    encounter_date: new Date().toISOString().split("T")[0],
    patient_age_group: AGE_GROUPS[1],
    patient_gender: GENDERS[0],
    chief_complaint: "",
    diagnosis_category: "",
    encounter_type: ENCOUNTER_TYPES[0],
    preceptor_name: "",
  });

  // Default rotation: ?rotation=slug, else last one used on this device.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let preferred = params.get("rotation");
    if (!preferred) {
      try { preferred = window.localStorage.getItem(LAST_ROTATION_KEY); } catch {}
    }
    if (preferred && ROTATIONS.some((r) => r.slug === preferred)) {
      setForm((f) => ({ ...f, rotation_slug: preferred as RotationSlug }));
    }
    if (params.get("new") === "1") setShowForm(true);
  }, []);

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/auth/login"); return; }
      setUserId(user.id);
      const { data } = await supabase
        .from("case_logs")
        .select("*")
        .eq("user_id", user.id)
        .order("encounter_date", { ascending: false });
      setLogs(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!userId) return;
    setSubmitting(true);
    const { data, error } = await supabase
      .from("case_logs")
      .insert({ ...form, user_id: userId })
      .select()
      .single();
    if (!error && data) {
      try { window.localStorage.setItem(LAST_ROTATION_KEY, form.rotation_slug); } catch {}
      setLogs([data, ...logs]);
      setShowForm(false);
      setForm({ ...form, chief_complaint: "", diagnosis_category: "", preceptor_name: "" });
    }
    setSubmitting(false);
  }

  async function handleDelete(id: string) {
    await supabase.from("case_logs").delete().eq("id", id);
    setLogs(logs.filter((l) => l.id !== id));
  }

  const rotationName = (slug: string) =>
    ROTATIONS.find((r) => r.slug === slug)?.name ?? slug;

  // ── Typhon-ready CSV export ──────────────────────────────────────────────
  // Column order mirrors Typhon's (PAST) case entry screen so encounters can
  // be transcribed or bulk-imported quickly by programs.
  function exportCsv() {
    const esc = (v: string | undefined | null) =>
      `"${String(v ?? "").replace(/"/g, '""')}"`;

    const header = [
      "Encounter Date",
      "Course/Rotation",
      "Visit Type",
      "Patient Age Group",
      "Patient Gender",
      "Reason for Visit (Chief Complaint)",
      "Diagnosis Category",
      "Preceptor",
      "Logged At",
    ];

    const rows = logs.map((log) =>
      [
        esc(log.encounter_date),
        esc(rotationName(log.rotation_slug)),
        esc(log.encounter_type),
        esc(log.patient_age_group),
        esc(log.patient_gender),
        esc(log.chief_complaint),
        esc(log.diagnosis_category),
        esc(log.preceptor_name),
        esc(new Date(log.created_at).toISOString()),
      ].join(",")
    );

    const csv = [header.map((h) => esc(h)).join(","), ...rows].join("\r\n");
    const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `clinpas-case-log-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  if (loading) return (
    <div className="flex items-center justify-center py-24">
      <Loader2 className="h-6 w-6 animate-spin text-teal-600 mr-2" />
      <span className="text-sm text-muted-foreground">Loading case logs...</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-7 w-7 text-teal-600 shrink-0" />
          <div>
            <h1 className="text-2xl font-bold">Case Log</h1>
            <p className="text-sm text-muted-foreground">{logs.length} encounter{logs.length !== 1 ? "s" : ""} logged</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowForm(!showForm)} className="flex-1 sm:flex-none h-12 sm:h-10 text-base sm:text-sm bg-teal-600 hover:bg-teal-700">
            <Plus className="h-5 w-5 mr-2" /> Log Encounter
          </Button>
          <Button
            variant="outline"
            onClick={exportCsv}
            disabled={logs.length === 0}
            className="h-12 sm:h-10"
            title="Download your encounters as a CSV with Typhon-ready columns"
          >
            <Download className="h-4 w-4 sm:mr-2" /><span className="hidden sm:inline">Export CSV</span>
          </Button>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-4 sm:p-6 space-y-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">New Encounter</h2>
            <input
              type="date"
              aria-label="Encounter date"
              className="border rounded-lg px-3 py-2 text-sm"
              value={form.encounter_date}
              onChange={(e) => setForm({ ...form, encounter_date: e.target.value })}
              required
            />
          </div>
          <p className="rounded-lg bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800">
            De-identified only — no names, DOBs, MRNs, or other identifiers.
          </p>

          <Chips
            label="Rotation"
            value={form.rotation_slug}
            onChange={(v) => setForm({ ...form, rotation_slug: v as RotationSlug })}
            options={ROTATIONS.map((r) => ({ value: r.slug, label: r.shortName ?? r.name }))}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Chips
              label="Age group"
              value={form.patient_age_group}
              onChange={(v) => setForm({ ...form, patient_age_group: v })}
              options={AGE_GROUPS.map((a) => ({ value: a, label: a }))}
            />
            <Chips
              label="Gender"
              value={form.patient_gender}
              onChange={(v) => setForm({ ...form, patient_gender: v })}
              options={GENDERS.map((g) => ({ value: g, label: g }))}
            />
          </div>

          <div>
            <label htmlFor="cc" className="text-sm font-semibold block mb-2">Chief complaint</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {QUICK_COMPLAINTS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm({ ...form, chief_complaint: c })}
                  className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                    form.chief_complaint === c ? "border-teal-600 bg-teal-50 text-teal-800" : "border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              id="cc"
              type="text"
              className="w-full border rounded-lg px-3 py-3 text-base sm:text-sm"
              placeholder="Or type it — e.g. dysuria"
              value={form.chief_complaint}
              onChange={(e) => setForm({ ...form, chief_complaint: e.target.value })}
              required
            />
          </div>

          <Chips
            label="Diagnosis category"
            value={form.diagnosis_category}
            onChange={(v) => setForm({ ...form, diagnosis_category: v })}
            options={DX_CATEGORIES.map((d) => ({ value: d, label: d }))}
          />

          <Chips
            label="Encounter type"
            value={form.encounter_type}
            onChange={(v) => setForm({ ...form, encounter_type: v })}
            options={ENCOUNTER_TYPES.map((t) => ({ value: t, label: t }))}
          />

          <div>
            <label htmlFor="preceptor" className="text-sm font-semibold block mb-2">
              Preceptor <span className="font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              id="preceptor"
              type="text"
              className="w-full border rounded-lg px-3 py-3 text-base sm:text-sm"
              placeholder="Dr. Smith"
              value={form.preceptor_name}
              onChange={(e) => setForm({ ...form, preceptor_name: e.target.value })}
            />
          </div>

          <div className="flex gap-3 pt-1">
            <Button
              type="submit"
              disabled={submitting || !form.chief_complaint.trim() || !form.diagnosis_category}
              className="flex-1 sm:flex-none h-12 sm:h-10 text-base sm:text-sm bg-teal-600 hover:bg-teal-700"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Save Encounter
            </Button>
            <Button type="button" variant="outline" className="h-12 sm:h-10" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </form>
      )}

      {logs.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <ClipboardList className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="font-medium">No encounters logged yet</p>
          <p className="text-sm mt-1">Tap &ldquo;Log Encounter&rdquo; to add your first case</p>
        </div>
      ) : (
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="bg-white border rounded-xl p-4 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-teal-700">{rotationName(log.rotation_slug)}</span>
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{log.encounter_type}</span>
                </div>
                <p className="font-medium text-sm">{log.chief_complaint}</p>
                <p className="text-xs text-muted-foreground">{log.diagnosis_category} · {log.patient_age_group} · {log.patient_gender}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(log.encounter_date).toLocaleDateString()}
                  {log.preceptor_name ? ` · ${log.preceptor_name}` : ""}
                </p>
              </div>
              <button
                onClick={() => handleDelete(log.id)}
                className="text-slate-400 hover:text-red-500 transition-colors p-1"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
