import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { emergencyShiftCards } from "@/lib/seed/emergency-medicine/shift";
import { ShiftIcon } from "@/components/shift/shift-icon";

export const metadata = { title: "On Shift — Emergency Medicine" };

export default function ShiftIndexPage({ params }: { params: { slug: string } }) {
  if (params.slug !== "emergency-medicine") notFound();
  const base = `/rotations/${params.slug}`;

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header>
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Emergency Medicine</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">On shift</h1>
        <p className="mt-1 text-lg text-muted-foreground">Tap what just walked in.</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {emergencyShiftCards.map((card) => (
          <Link
            key={card.slug}
            href={`${base}/shift/${card.slug}`}
            className="group flex min-h-[104px] flex-col justify-between rounded-2xl border border-border bg-card p-4 transition-colors hover:border-red-200 hover:bg-red-50/40 active:bg-red-50"
          >
            <ShiftIcon name={card.icon} className="h-7 w-7 text-red-600" />
            <span className="mt-3 text-lg font-semibold leading-tight">{card.title}</span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t pt-4 text-base">
        <Link href={`${base}/conditions`} className="flex items-center justify-between rounded-xl px-1 py-2 font-medium text-teal-700 hover:underline">
          Full condition cards <ChevronRight className="h-5 w-5" />
        </Link>
        <Link href={`${base}/differentials`} className="flex items-center justify-between rounded-xl px-1 py-2 font-medium text-teal-700 hover:underline">
          Differentials by chief complaint <ChevronRight className="h-5 w-5" />
        </Link>
      </div>

      <p className="text-sm text-muted-foreground">
        Study and reference aid for PA students — not clinical decision support. Follow your preceptor and your site&apos;s protocols.
      </p>
    </div>
  );
}
