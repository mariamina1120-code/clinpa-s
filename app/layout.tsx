import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { InactivityWatcher } from "@/components/auth/inactivity-watcher";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ClinicalYear — PA Student Rotation Companion",
    template: "%s | ClinicalYear",
  },
  description:
    "HIPAA-compliant clinical rotation companion for PA students. Diagnostic criteria, pharmacology, SOAP charting, case logs, and study tools for all ARC-PA rotations.",
  keywords: [
    "PA student",
    "clinical rotation",
    "SOAP notes",
    "pharmacology",
    "PANCE prep",
    "physician assistant",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <InactivityWatcher />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
