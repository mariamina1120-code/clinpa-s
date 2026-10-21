import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { emergencyShiftCards, getShiftCard } from "@/lib/seed/emergency-medicine/shift";
import { ShiftIcon } from "@/components/shift/shift-icon";

export function generateMetadata({ params }: { params: { slug: string; cc: string } }) {
  const card = getShiftCard(params.cc);
  return { title: card ? `${card.title} — On Shift` : "On Shift" };
}

function Label({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "red" | "blue" }) {
  const tones = {
    slate: "text-slate-500",
    red: "text-red-700",
    blue: "text-blue-700",
  };
  return <h2 className={`mb-3 text-sm font-bold uppercase tracking-widest ${tones[tone]}`}>{children}</h2>;
}

export default function ShiftCardPage({ params }: { params: { slug: string; cc: string } }) {
  if (params.slug !== "emergency-medicine") notFound();
  const card = getShiftCard(params.cc);
  if (!card) notFound();

  const base = `/rotations/${params.slug}/shift`;
  const i = emergencyShiftCards.findIndex((c) => c.slug === card.slug);
  const prev = emergencyShiftCards[i - 1];
  const next = emergencyShiftCards[i + 1];

  return (
    <article className="mx-auto max-w-2xl space-y-7 text-lg leading-snug">
      <Link href={base} className="inline-flex items-center gap-1 text-base font-medium text-teal-700 hover:underline">
        <ChevronLeft className="h-5 w-5" /> All complaints
      </Link>

      <header className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50">
          <ShiftIcon name={card.icon} className="h-8 w-8 text-red-600" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">{card.title}</h1>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-300">{card.tagline}</p>
        </div>
      </header>

      {/* Don't miss */}
      <section className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/30">
        <Label tone="red">Don&apos;t miss</Label>
        <ul className="space-y-3">
          {card.dontMiss.map((d) => (
            <li key={d.dx}>
              <p className="font-semibold text-red-950 dark:text-red-100">{d.dx}</p>
              <p className="text-base text-red-900/80 dark:text-red-200/80">{d.clue}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Ask & look */}
      <section>
        <Label>{card.askLookLabel ?? "Ask & look"}</Label>
        <ul className="space-y-2.5">
          {card.askLook.map((item) => (
            <li key={item} className="flex gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Workup */}
      <section>
        <Label>Typical workup</Label>
        <div className="flex flex-wrap gap-2">
          {card.workup.map((w) => (
            <span key={w} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-base dark:border-slate-700 dark:bg-slate-900">
              {w}
            </span>
          ))}
        </div>
      </section>

      {/* Decision rule */}
      {card.rule && (
        <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
          <Label tone="blue">{card.rule.name}</Label>
          <p className="mb-3 text-base text-blue-900/80 dark:text-blue-200/80">Use when: {card.rule.useWhen}</p>
          <ul className="space-y-2">
            {card.rule.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold text-blue-950 dark:text-blue-100">{card.rule.result}</p>
          <p className="mt-3 text-sm text-blue-900/70 dark:text-blue-200/70">
            {card.rule.source.label} ({card.rule.source.year})
          </p>
        </section>
      )}

      {/* First moves */}
      <section>
        <Label>First moves</Label>
        <ol className="space-y-2.5">
          {card.firstMoves.map((m, idx) => (
            <li key={m} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                {idx + 1}
              </span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Pimp questions */}
      <section>
        <Label>Pimp me</Label>
        <div className="space-y-2">
          {card.pimp.map((p) => (
            <details key={p.q} className="group rounded-2xl border border-border bg-card">
              <summary className="cursor-pointer list-none p-4 font-semibold">
                <span className="flex items-start justify-between gap-3">
                  {p.q}
                  <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
                </span>
              </summary>
              <p className="border-t px-4 pb-4 pt-3 text-slate-700 dark:text-slate-300">{p.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Sources + disclaimer */}
      <footer className="space-y-3 border-t pt-5">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Sources</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {card.sources.map((s) => (
              <li key={s.label}>
                {s.label} ({s.year})
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-muted-foreground">
          Study and reference aid — not clinical decision support. Follow your preceptor and your site&apos;s protocols.
        </p>
      </footer>

      {/* Prev / next */}
      <nav className="grid grid-cols-2 gap-3 pb-4" aria-label="Other complaints">
        {prev ? (
          <Link href={`${base}/${prev.slug}`} className="rounded-2xl border border-border p-4 text-base hover:bg-muted/40">
            <span className="block text-sm text-muted-foreground">Previous</span>
            <span className="font-semibold">{prev.title}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`${base}/${next.slug}`} className="rounded-2xl border border-border p-4 text-right text-base hover:bg-muted/40">
            <span className="block text-sm text-muted-foreground">Next</span>
            <span className="font-semibold">{next.title}</span>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}
