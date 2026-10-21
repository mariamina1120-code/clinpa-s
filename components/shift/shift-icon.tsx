import {
  HeartPulse, Wind, Waves, Brain, CloudFog, PersonStanding, Timer,
  Thermometer, Ambulance, Bone, Droplet, Pill, type LucideIcon,
} from "lucide-react";
import type { ShiftCard } from "@/lib/seed/emergency-medicine/shift";

const ICONS: Record<ShiftCard["icon"], LucideIcon> = {
  heart: HeartPulse,
  wind: Wind,
  stomach: Waves,
  brain: Brain,
  confusion: CloudFog,
  syncope: PersonStanding,
  stroke: Timer,
  fever: Thermometer,
  trauma: Ambulance,
  back: Bone,
  pregnancy: Droplet,
  pill: Pill,
};

export function ShiftIcon({ name, className }: { name: ShiftCard["icon"]; className?: string }) {
  const Icon = ICONS[name];
  return <Icon className={className} aria-hidden="true" />;
}
