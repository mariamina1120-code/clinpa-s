"use client";

import { notFound } from "next/navigation";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

const EOR_SECTIONS = [
  {
    id: "cardiology",
    label: "Cardiology",
    src: "/eor-pearls/cardiology.html",
    description: "ACS, Heart Failure, HTN, Arrhythmias, Valvular, Cardiomyopathy, Pericardial, Vascular",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    activeBorder: "border-blue-500",
  },
];

export default function EorPearlsPage() {
  const params = useParams<{ slug: string }>();

  if (params.slug !== "internal-medicine") {
    notFound();
  }

  const section = EOR_SECTIONS[0];

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-6 lg:-m-6">
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-3 border-b bg-background shrink-0">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Link
            href={`/rotations/${params.slug}`}
            className="hover:text-foreground transition-colors"
          >
            Internal Medicine
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-foreground">EOR Pearls</span>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-blue-600">Cardiology</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-md bg-blue-50 flex items-center justify-center">
            <Heart className="h-3 w-3 text-blue-500" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            PAEA Blueprint Reference
          </span>
        </div>
      </div>

      {/* Full-width iframe */}
      <iframe
        src={section.src}
        className="flex-1 w-full border-0"
        title="Cardiology EOR Pearls"
        loading="eager"
      />
    </div>
  );
}
