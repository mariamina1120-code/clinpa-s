"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PurchaseSuccessPage() {
  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }: { data: { user: { id: string } | null } }) => {
      const user = data.user;
      setLoggedIn(!!user);
      setChecking(false);

      // If logged in, redirect to dashboard after a short delay
      if (user) {
        setTimeout(() => router.replace("/dashboard"), 3000);
      }
    });
  }, [router]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-teal-100">
            <CheckCircle2 className="h-10 w-10 text-teal-600" />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          Payment Successful!
        </h1>
        <p className="text-slate-500 mb-8">
          Your purchase is confirmed. Your rotation modules are being unlocked
          — this usually takes just a few seconds.
        </p>

        {checking ? (
          <div className="flex justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-teal-600" />
          </div>
        ) : loggedIn ? (
          <div className="space-y-3">
            <p className="text-sm text-teal-600 font-medium">
              Redirecting you to your dashboard…
            </p>
            <Button
              onClick={() => router.replace("/dashboard")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl"
            >
              Go to Dashboard Now
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-slate-500">
              Please log in to access your newly unlocked content.
            </p>
            <Button
              onClick={() => router.replace("/auth/login?redirectTo=/dashboard")}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl"
            >
              Log In to Access Your Content
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
