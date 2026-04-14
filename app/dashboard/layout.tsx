import { redirect } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const devMode = !isSupabaseConfigured;
  let fullName = "Dev Student";
  let initials = "DS";

  if (!devMode) {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) redirect("/auth/login");

    const { data: profile } = await supabase
      .from("profiles")
      .select("full_name")
      .eq("id", user.id)
      .single();

    fullName = profile?.full_name ?? "";
    initials = fullName
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "PA";
  }

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar userName={fullName} userInitials={initials} />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 p-6 pb-24 lg:pb-6 overflow-auto">
          {children}
        </main>
      </div>
      <MobileBottomNav />
    </div>
  );
}
