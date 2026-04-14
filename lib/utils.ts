import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { RotationSlug, Rotation } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ROTATIONS: Rotation[] = [
  {
    slug: "family-medicine",
    name: "Family Medicine",
    shortName: "Family Med",
    icon: "🏠",
    color: "teal",
    description:
      "Comprehensive outpatient primary care covering chronic disease management, preventive care, and acute illness.",
  },
  {
    slug: "internal-medicine",
    name: "Internal Medicine",
    shortName: "Internal Med",
    icon: "🫀",
    color: "blue",
    description:
      "Adult inpatient medicine focusing on complex multi-system disease management and hospital-based care.",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    shortName: "Surgery",
    icon: "🔪",
    color: "slate",
    description:
      "Surgical evaluation, peri-operative care, and management of abdominal, breast, and soft tissue conditions.",
  },
  {
    slug: "pediatrics",
    name: "Pediatrics",
    shortName: "Pediatrics",
    icon: "👶",
    color: "violet",
    description:
      "Child and adolescent health from newborn through 18 years, including developmental surveillance and acute care.",
  },
  {
    slug: "womens-health",
    name: "Women's Health / OB-GYN",
    shortName: "Women's Health",
    icon: "🌸",
    color: "rose",
    description:
      "Reproductive health, obstetric care, gynecologic conditions, and preventive screenings for female patients.",
  },
  {
    slug: "emergency-medicine",
    name: "Emergency Medicine",
    shortName: "Emergency Med",
    icon: "🚨",
    color: "red",
    description:
      "Acute and undifferentiated presentations requiring rapid assessment, stabilization, and time-sensitive intervention.",
  },
  {
    slug: "behavioral-medicine",
    name: "Behavioral Medicine / Psychiatry",
    shortName: "Behavioral Med",
    icon: "🧠",
    color: "indigo",
    description:
      "Mental health evaluation, psychiatric disorders, substance use, and psychopharmacology.",
  },
  {
    slug: "geriatrics",
    name: "Geriatrics",
    shortName: "Geriatrics",
    icon: "🧓",
    color: "amber",
    description:
      "Comprehensive care for older adults, polypharmacy, functional assessment, and age-related syndromes.",
  },
];

export function getRotation(slug: RotationSlug): Rotation | undefined {
  return ROTATIONS.find((r) => r.slug === slug);
}

export const PRIMARY_CARE_SLUGS: RotationSlug[] = [
  "family-medicine",
  "internal-medicine",
  "pediatrics",
  "womens-health",
];

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function getDifficultyColor(
  difficulty: "easy" | "medium" | "hard"
): string {
  return {
    easy: "text-green-600 bg-green-50 border-green-200",
    medium: "text-yellow-600 bg-yellow-50 border-yellow-200",
    hard: "text-red-600 bg-red-50 border-red-200",
  }[difficulty];
}

export function getLikelihoodColor(
  likelihood: "common" | "less_common" | "must_not_miss"
): string {
  return {
    common: "bg-green-100 text-green-800 border-green-200",
    less_common: "bg-yellow-100 text-yellow-800 border-yellow-200",
    must_not_miss: "bg-red-100 text-red-800 border-red-200",
  }[likelihood];
}

export function getLikelihoodLabel(
  likelihood: "common" | "less_common" | "must_not_miss"
): string {
  return {
    common: "Common",
    less_common: "Less Common",
    must_not_miss: "Must Not Miss",
  }[likelihood];
}
