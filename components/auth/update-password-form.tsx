"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle } from "lucide-react";

// Same rules as signup
const schema = z
  .object({
    password: z
      .string()
      .min(12, "Password must be at least 12 characters")
      .regex(/[A-Z]/, "Must contain an uppercase letter")
      .regex(/[a-z]/, "Must contain a lowercase letter")
      .regex(/[0-9]/, "Must contain a number")
      .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
    confirm: z.string(),
  })
  .refine((v) => v.password === v.confirm, { message: "Passwords don't match", path: ["confirm"] });
type Values = z.infer<typeof schema>;

export function UpdatePasswordForm() {
  const supabase = createClient();
  const [hasSession, setHasSession] = useState<boolean | null>(null);
  const [done, setDone] = useState(false);
  const [serverError, setServerError] = useState("");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }: { data: { user: unknown } }) => setHasSession(Boolean(data.user)));
  }, [supabase]);

  const onSubmit = async (values: Values) => {
    setServerError("");
    const { error } = await supabase.auth.updateUser({ password: values.password });
    if (error) {
      setServerError(error.message || "Couldn't update your password. Please try again.");
      return;
    }
    setDone(true);
    setTimeout(() => { window.location.href = "/dashboard"; }, 1500);
  };

  if (hasSession === null) {
    return <div className="flex justify-center py-6"><Loader2 className="h-6 w-6 animate-spin text-teal-600" /></div>;
  }

  if (!hasSession) {
    return (
      <div className="space-y-3 text-center text-sm">
        <p>This reset link has expired or was already used.</p>
        <Link href="/auth/forgot-password" className="font-medium text-teal-600 hover:underline">
          Send a new reset link
        </Link>
      </div>
    );
  }

  if (done) {
    return (
      <div className="text-center py-4 space-y-3">
        <CheckCircle className="h-10 w-10 text-teal-600 mx-auto" />
        <p className="text-sm">Password updated. Taking you to your dashboard…</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <div className="space-y-1">
        <Label htmlFor="password">New password</Label>
        <Input id="password" type="password" autoComplete="new-password" {...register("password")} />
        {errors.password ? (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        ) : (
          <p className="text-xs text-muted-foreground">Min 12 chars, uppercase, lowercase, number, symbol</p>
        )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="confirm">Confirm new password</Label>
        <Input id="confirm" type="password" autoComplete="new-password" {...register("confirm")} />
        {errors.confirm && <p className="text-xs text-destructive">{errors.confirm.message}</p>}
      </div>
      {serverError && <p className="text-sm text-destructive">{serverError}</p>}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Saving...</> : "Save new password"}
      </Button>
    </form>
  );
}
