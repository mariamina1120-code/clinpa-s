import { Metadata } from "next";
import Link from "next/link";
import { ClinPASLockup } from "@/components/brand/logo";
import { UpdatePasswordForm } from "@/components/auth/update-password-form";

export const metadata: Metadata = { title: "Set New Password" };

export default function UpdatePasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex justify-center mb-2">
            <ClinPASLockup size={36} tone="light" />
          </Link>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border p-8">
          <h1 className="text-2xl font-bold mb-1">Set a new password</h1>
          <p className="text-sm text-muted-foreground mb-6">Choose a new password for your account.</p>
          <UpdatePasswordForm />
        </div>
      </div>
    </div>
  );
}
