import { createClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export default async function PaperToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const devMode = !isSupabaseConfigured;
  let fullName = "Dev Student";
  let initials = "DS";

  if (!devMode) {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .single();

      fullName = profile?.full_name ?? "";
      initials =
        fullName
          .split(" ")
          .map((n: string) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "PA";
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="print:hidden">
        <AppSidebar userName={fullName} userInitials={initials} />
      </div>
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 pb-24 lg:pb-6 overflow-auto print:pb-0">
          {children}
        </main>
      </div>
      <div className="print:hidden">
        <MobileBottomNav />
      </div>
    </div>
  );
}
