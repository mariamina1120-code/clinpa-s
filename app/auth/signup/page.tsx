import { Metadata } from "next";
import { SignupForm } from "@/components/auth/signup-form";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Create Account" };

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-700 dark:text-teal-400">ClinicalYear</span>
          </Link>
          <p className="text-sm text-muted-foreground">Create your student account</p>
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
