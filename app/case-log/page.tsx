"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { ClipboardList, Plus, Trash2, Loader2 } from "lucide-react";
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

  if (loading) return (
    <div className="flex items-center justify-center py-24">
      <Loader2 className="h-6 w-6 animate-spin text-teal-600 mr-2" />
      <span className="text-sm text-muted-foreground">Loading case logs...</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ClipboardList className="h-7 w-7 text-teal-600" />
          <div>
            <h1 className="text-2xl font-bold">Case Log</h1>
            <p className="text-sm text-muted-foreground">{logs.length} encounter{logs.length !== 1 ? "s" : ""} logged</p>
          </div>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-teal-600 hover:bg-teal-700">
          <Plus className="h-4 w-4 mr-2" /> Log Encounter
        </Button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white border rounded-xl p-6 space-y-4 shadow-sm">
          <h2 className="font-semibold text-lg">New Encounter</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-1">Rotation</label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={form.rotation_slug}
                onChange={(e) => setForm({ ...form, rotation_slug: e.target.value as RotationSlug })}
              >
                {ROTATIONS.map((r) => (
                  <option key={r.slug} value={r.slug}>{r.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Encounter Date</label>
              <input
                type="date"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={form.encounter_date}
                onChange={(e) => setForm({ ...form, encounter_date: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Patient Age Group</label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={form.patient_age_group}
                onChange={(e) => setForm({ ...form, patient_age_group: e.target.value })}
              >
                {AGE_GROUPS.map((a) => <option key={a}>{a}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Patient Gender</label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={form.patient_gender}
                onChange={(e) => setForm({ ...form, patient_gender: e.target.value })}
              >
                {GENDERS.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Chief Complaint</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="e.g. chest pain, fever"
                value={form.chief_complaint}
                onChange={(e) => setForm({ ...form, chief_complaint: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Diagnosis Category</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="e.g. Cardiovascular, Infectious"
                value={form.diagnosis_category}
                onChange={(e) => setForm({ ...form, diagnosis_category: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Encounter Type</label>
              <select
                className="w-full border rounded-lg px-3 py-2 text-sm"
                value={form.encounter_type}
                onChange={(e) => setForm({ ...form, encounter_type: e.target.value })}
              >
                {ENCOUNTER_TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium block mb-1">Preceptor Name <span className="text-muted-foreground">(optional)</span></label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-sm"
                placeholder="Dr. Smith"
                value={form.preceptor_name}
                onChange={(e) => setForm({ ...form, preceptor_name: e.target.value })}
              />
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={submitting} className="bg-teal-600 hover:bg-teal-700">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Save Encounter
            </Button>
            <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
          </div>
        </form>
      )}

      {logs.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <ClipboardList className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="font-medium">No encounters logged yet</p>
          <p className="text-sm mt-1">Click "Log Encounter" to add your first case</p>
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
