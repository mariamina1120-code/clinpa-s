"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, ShieldAlert } from "lucide-react";

const signupSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(12, "Password must be at least 12 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
  programName: z.string().min(2, "Program name required"),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a 4-digit year")
    .transform(Number),
  hipaaAcknowledgment: z.literal(true, {
    errorMap: () => ({
      message: "You must acknowledge the HIPAA notice to continue",
    }),
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the Terms of Service" }),
  }),
});

type SignupValues = z.infer<typeof signupSchema>;

export function SignupForm() {
  const router = useRouter();
  const supabase = createClient();
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupValues>({ resolver: zodResolver(signupSchema) });

  const hipaaChecked = watch("hipaaAcknowledgment");
  const termsChecked = watch("termsAccepted");

  const onSubmit = async (values: SignupValues) => {
    setServerError("");
    try {
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            full_name: values.fullName,
            program_name: values.programName,
            graduation_year: values.graduationYear,
            hipaa_acknowledged_at: new Date().toISOString(),
          },
        },
      });

      if (error) {
        setServerError(error.message || "Unable to create account. Please try again.");
        return;
      }

      setSuccess(true);
    } catch (err) {
      setServerError("Network error — please check your connection and try again.");
    }
  };

  if (success) {
    return (
      <div className="text-center py-8 space-y-4">
        <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
          <ShieldAlert className="h-8 w-8 text-teal-600" />
        </div>
        <h2 className="text-xl font-semibold">Check your email</h2>
        <p className="text-sm text-muted-foreground">
          We sent a confirmation link to your email. Click it to activate your account and then sign in.
        </p>
        <Button variant="outline" onClick={() => router.push("/auth/login")}>
          Go to sign in
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" placeholder="Jane Smith, PA-S" {...register("fullName")} />
          {errors.fullName && <p className="text-xs text-destructive">{errors.fullName.message}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="jane@university.edu" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="••••••••••••" {...register("password")} />
        {errors.password ? (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        ) : (
          <p className="text-xs text-muted-foreground">Min 12 chars, uppercase, lowercase, number, symbol</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="programName">PA Program</Label>
          <Input id="programName" placeholder="University of Example PA Program" {...register("programName")} />
          {errors.programName && <p className="text-xs text-destructive">{errors.programName.message}</p>}
        </div>
        <div className="space-y-1">
          <Label htmlFor="graduationYear">Expected Graduation</Label>
          <Input id="graduationYear" placeholder="2026" maxLength={4} {...register("graduationYear")} />
          {errors.graduationYear && <p className="text-xs text-destructive">{errors.graduationYear.message}</p>}
        </div>
      </div>

      {/* HIPAA Acknowledgment */}
      <div className="rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-950/20 p-4 space-y-3">
        <div className="flex items-start gap-2">
          <ShieldAlert className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">HIPAA Notice</p>
            <p className="text-xs text-amber-700 dark:text-amber-400 mt-1">
              This application is designed for educational use during supervised clinical practice experiences.
              Patient charts you create may contain Protected Health Information (PHI). You are responsible for
              ensuring all patient data is de-identified and that you comply with your program&apos;s HIPAA policies,
              your clinical site&apos;s policies, and applicable federal and state law. Do not enter real patient names,
              dates of birth, or other direct identifiers.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="hipaaAcknowledgment"
            checked={!!hipaaChecked}
            onCheckedChange={(v) => setValue("hipaaAcknowledgment", v as true)}
            aria-required="true"
          />
          <Label htmlFor="hipaaAcknowledgment" className="text-xs font-normal cursor-pointer">
            I understand and acknowledge the HIPAA notice above and my responsibility to protect patient data.
          </Label>
        </div>
        {errors.hipaaAcknowledgment && (
          <p className="text-xs text-destructive">{errors.hipaaAcknowledgment.message}</p>
        )}
      </div>

      {/* Terms */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="termsAccepted"
          checked={!!termsChecked}
          onCheckedChange={(v) => setValue("termsAccepted", v as true)}
          aria-required="true"
        />
        <Label htmlFor="termsAccepted" className="text-xs font-normal cursor-pointer">
          I agree to the{" "}
          <a href="/terms" className="text-teal-600 underline" target="_blank" rel="noopener">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-teal-600 underline" target="_blank" rel="noopener">
            Privacy Policy
          </a>
          .
        </Label>
      </div>
      {errors.termsAccepted && (
        <p className="text-xs text-destructive">{errors.termsAccepted.message}</p>
      )}

      {serverError && (
        <div role="alert" className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm">
          {serverError}
        </div>
      )}

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating account...
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  );
}
