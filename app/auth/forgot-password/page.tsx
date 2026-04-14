import { Metadata } from "next";
import { ForgotPasswordForm } from "@/components/auth/forgot-password-form";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "Reset Password" };

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-slate-100 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-2">
            <ShieldCheck className="h-8 w-8 text-teal-600" />
            <span className="text-2xl font-bold text-teal-700">ClinicalYear</span>
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-lg border p-8">
          <h1 className="text-2xl font-bold mb-1">Reset password</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your email and we&apos;ll send a reset link.
          </p>
          <ForgotPasswordForm />
          <div className="mt-6 text-center text-sm">
            <Link href="/auth/login" className="text-teal-600 hover:underline">
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
