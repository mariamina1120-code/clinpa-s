import { Metadata } from "next";
import { SignupForm } from "@/components/auth/signup-form";
import Link from "next/link";
import { ClinPASLockup } from "@/components/brand/logo";

export const metadata: Metadata = { title: "Create Account" };

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex justify-center mb-2">
            <ClinPASLockup size={36} tone="light" />
          </Link>
          <p className="text-sm text-muted-foreground mt-2">Create your student account</p>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border p-8">
          <h1 className="text-2xl font-bold mb-1">Create account</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Join thousands of PA students on clinical rotations
          </p>
          <SignupForm />
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/auth/login" className="text-teal-600 hover:underline font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
