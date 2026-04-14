"use client";
/**
 * HIPAA Requirement: Auto-logout after configurable inactivity period.
 * Default: 15 minutes. User's setting pulled from profile.
 * Watches mouse, keyboard, touch events to reset timer.
 */
import { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const DEFAULT_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes
const WARNING_BEFORE_MS = 60 * 1000; // warn 1 min before

const ACTIVITY_EVENTS: (keyof WindowEventMap)[] = [
  "mousedown",
  "mousemove",
  "keydown",
  "touchstart",
  "scroll",
  "click",
];

const AUTH_ROUTES = ["/auth/login", "/auth/signup", "/auth/forgot-password", "/", "/store", "/privacy", "/terms"];

export function InactivityWatcher() {
  const router = useRouter();
  const pathname = usePathname();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const warningRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const supabase = createClient();

  const isProtectedRoute = !AUTH_ROUTES.some(
    (r) => pathname === r || (r !== "/" && pathname.startsWith(r))
  );

  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    router.push("/auth/login?reason=inactivity");
  }, [supabase, router]);

  const resetTimer = useCallback((timeoutMs: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (warningRef.current) clearTimeout(warningRef.current);

    if (timeoutMs > WARNING_BEFORE_MS) {
      warningRef.current = setTimeout(() => {
        // Future enhancement: show a warning modal
      }, timeoutMs - WARNING_BEFORE_MS);
    }

    timerRef.current = setTimeout(() => {
      logout();
    }, timeoutMs);
  }, [logout]);

  useEffect(() => {
    if (!isProtectedRoute) return;

    let timeoutMs = DEFAULT_TIMEOUT_MS;

    // Fetch user's custom timeout from profile
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data: profile } = await supabase
        .from("profiles")
        .select("inactivity_timeout_minutes")
        .eq("id", user.id)
        .single();
      if (profile?.inactivity_timeout_minutes) {
        timeoutMs = profile.inactivity_timeout_minutes * 60 * 1000;
      }
      resetTimer(timeoutMs);
    })();

    const handler = () => resetTimer(timeoutMs);
    ACTIVITY_EVENTS.forEach((e) => window.addEventListener(e, handler, { passive: true }));

    return () => {
      ACTIVITY_EVENTS.forEach((e) => window.removeEventListener(e, handler));
      if (timerRef.current) clearTimeout(timerRef.current);
      if (warningRef.current) clearTimeout(warningRef.current);
    };
  }, [isProtectedRoute, pathname, resetTimer, supabase]);

  return null;
}
