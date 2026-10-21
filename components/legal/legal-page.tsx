import Link from "next/link";
import { ClinPASLockup } from "@/components/brand/logo";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
          <Link href="/" aria-label="ClinPA-S home">
            <ClinPASLockup size={22} tone="light" />
          </Link>
          <nav className="flex gap-4 text-sm text-slate-500">
            <Link href="/terms" className="hover:text-teal-600">Terms</Link>
            <Link href="/privacy" className="hover:text-teal-600">Privacy</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated {updated}</p>
        <div className="mt-8 space-y-8 text-[15px] leading-7 text-slate-700 [&_h2]:mb-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-slate-900 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-teal-700 [&_a]:underline">
          {children}
        </div>
        <p className="mt-12 border-t pt-6 text-xs text-slate-400">
          ClinPA-S is not sponsored by, endorsed by, or affiliated with PAEA, NCCPA, ARC-PA, or AAPA.
        </p>
      </main>
    </div>
  );
}
