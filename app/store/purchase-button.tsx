"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import type { RotationSlug } from "@/types";

interface PurchaseButtonProps {
  rotationSlugs: RotationSlug[];
  hasPaperTools: boolean;
  label: string;
  variant?: "default" | "outline";
}

export function PurchaseButton({
  rotationSlugs,
  hasPaperTools,
  label,
  variant = "default",
}: PurchaseButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePurchase() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rotationSlugs, hasPaperTools }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Purchase failed");
        return;
      }

      // Refresh the page to reflect the new purchase state
      router.refresh();
    } catch {
      setError("Network error — please try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Button
        onClick={handlePurchase}
        disabled={loading}
        variant={variant}
        className={`w-full rounded-xl ${
          variant === "default"
            ? "bg-teal-600 hover:bg-teal-700 text-white"
            : "border-teal-200 text-teal-700 hover:bg-teal-50"
        }`}
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <ShoppingCart className="mr-2 h-4 w-4" />
        )}
        {loading ? "Processing..." : label}
      </Button>
      {error && (
        <p className="mt-1.5 text-center text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
