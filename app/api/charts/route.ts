import { NextRequest, NextResponse } from "next/server";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 }
    );
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const rotationSlug = searchParams.get("rotation_slug");

  let query = supabase
    .from("charts")
    .select("*")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false });

  if (rotationSlug) {
    query = query.eq("rotation_slug", rotationSlug);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data ?? []);
}

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: "Supabase is not configured" },
      { status: 503 }
    );
  }

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: {
    rotation_slug: string;
    chief_complaint: string;
    encounter_date: string;
    soap_data: Record<string, unknown>;
    notes?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body.rotation_slug || !body.soap_data) {
    return NextResponse.json(
      { error: "rotation_slug and soap_data are required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("charts")
    .insert({
      user_id: user.id,
      rotation_slug: body.rotation_slug,
      chief_complaint: body.chief_complaint ?? "",
      encounter_date: body.encounter_date ?? new Date().toISOString().split("T")[0],
      soap_data: body.soap_data,
      notes: body.notes ?? "",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
