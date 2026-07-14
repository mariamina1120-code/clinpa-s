import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are a clinical documentation assistant helping a physician assistant student write an HPI (History of Present Illness) for a practice SOAP note.

You will receive a rough transcript of a patient encounter (or shorthand notes). Write a single, professional HPI paragraph in standard medical documentation style.

Rules:
- Use only information present in the transcript. NEVER invent findings, symptoms, timelines, or history.
- Follow OLDCARTS ordering where the information exists (Onset, Location, Duration, Character, Aggravating/Alleviating, Radiation, Timing, Severity), then associated symptoms and pertinent negatives.
- Third person, past tense where appropriate ("Patient reports...", "She denies...").
- Omit all patient names and identifiers; refer to "the patient" or age/sex if stated.
- Be concise: one paragraph, no headers, no bullet points.
- After the paragraph, if key OLDCARTS elements are missing from the transcript, add one line starting with "MISSING: " listing what the student should still ask (e.g. "MISSING: severity, radiation, alleviating factors"). If nothing important is missing, omit this line.`;

export async function POST(req: Request) {
  // Require a signed-in user so the endpoint can't be abused anonymously
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Please sign in to use the AI scribe." }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "AI scribe isn't configured yet — add ANTHROPIC_API_KEY in Vercel settings." },
      { status: 503 }
    );
  }

  let body: { transcript?: string; chiefComplaint?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const transcript = (body.transcript ?? "").trim();
  if (!transcript) {
    return NextResponse.json({ error: "Transcript is empty." }, { status: 400 });
  }
  if (transcript.length > 24000) {
    return NextResponse.json({ error: "Transcript too long — trim it and try again." }, { status: 400 });
  }

  const userContent = [
    body.chiefComplaint ? `Chief complaint: ${body.chiefComplaint}` : null,
    `Encounter transcript:\n${transcript}`,
  ]
    .filter(Boolean)
    .join("\n\n");

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5",
        max_tokens: 800,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userContent }],
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Anthropic API error:", res.status, detail.slice(0, 300));
      return NextResponse.json(
        { error: res.status === 401 ? "AI key is invalid — check ANTHROPIC_API_KEY in Vercel." : "AI drafting failed — please try again." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const hpi: string = (data.content ?? [])
      .filter((b: { type: string }) => b.type === "text")
      .map((b: { text: string }) => b.text)
      .join("\n")
      .trim();

    if (!hpi) {
      return NextResponse.json({ error: "AI returned an empty draft — please try again." }, { status: 502 });
    }

    return NextResponse.json({ hpi });
  } catch (err) {
    console.error("generate-hpi error:", err);
    return NextResponse.json({ error: "AI drafting failed — please try again." }, { status: 502 });
  }
}
