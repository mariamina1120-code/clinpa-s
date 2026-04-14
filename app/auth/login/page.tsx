import { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage({
  searchParams,
}: {
  searchParams: { redirectTo?: string; reason?: string };
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-700 dark:text-teal-400">ClinicalYear</span>
          </Link>
          <p className="text-sm text-muted-foreground">PA Student Rotation Companion</p>
        </div>

        {/* Inactivity warning */}
        {searchParams.reason === "inactivity" && (
          <div className="mb-4 p-3 rounded-md bg-amber-50 border border-amber-200 text-amber-800 text-sm text-center">
            You were signed out after 15 minutes of inactivity to protect patient data.
          </div>
        )}

        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border p-8">
          <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
          <p className="text-sm text-muted-foreground mb-6">Sign in to your account</p>
          <LoginForm redirectTo={searchParams.redirectTo} />
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don&apos;t have an account? </span>
            <Link href="/auth/signup" className="text-teal-600 hover:underline font-medium">
              Create account
            </Link>
          </div>
          <div className="mt-2 text-center text-sm">
            <Link href="/auth/forgot-password" className="text-muted-foreground hover:underline text-xs">
              Forgot password?
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          This application handles Protected Health Information (PHI).{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
}
