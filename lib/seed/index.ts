/**
 * ClinicalYear Seed Data — Central Index
 * All 7 PAEA EOR rotations: Family Medicine, Internal Medicine, General Surgery,
 * Pediatrics, Women's Health, Emergency Medicine, Behavioral Medicine
 */

import type {
  Condition,
  Drug,
  PhysicalExamFinding,
  LabValue,
  ImagingFinding,
  DifferentialSet,
  Guideline,
  Procedure,
  QuizQuestion,
  RotationSlug,
} from "@/types";

// ─── Family Medicine ──────────────────────────────────────────────────────────
import { familyMedicineConditions } from "./family-medicine/conditions";
import { familyMedicinePharmacology } from "./family-medicine/pharmacology";
import { familyMedicineGuidelines } from "./family-medicine/guidelines";
import { familyMedicinePhysicalExam } from "./family-medicine/physical-exam";
import { familyMedicineLabValues, familyMedicineImagingFindings } from "./family-medicine/labs-imaging";
import { familyMedicineDifferentials } from "./family-medicine/differentials";
import { familyMedicineQuiz } from "./family-medicine/quiz";
import { familyMedicineProcedures } from "./family-medicine/procedures";

// ─── Internal Medicine ────────────────────────────────────────────────────────
import { internalMedicineConditions } from "./internal-medicine/conditions";
import { internalMedicinePharmacology } from "./internal-medicine/pharmacology";
import { internalMedicineGuidelines } from "./internal-medicine/guidelines";
import { internalMedicinePhysicalExam } from "./internal-medicine/physical-exam";
import { internalMedicineLabValues, internalMedicineImagingFindings } from "./internal-medicine/labs-imaging";
import { internalMedicineDifferentials } from "./internal-medicine/differentials";
import { internalMedicineQuiz } from "./internal-medicine/quiz";
import { internalMedicineProcedures } from "./internal-medicine/procedures";

// ─── General Surgery ──────────────────────────────────────────────────────────
import { generalSurgeryConditions } from "./general-surgery/conditions";
import { generalSurgeryPharmacology } from "./general-surgery/pharmacology";
import { generalSurgeryGuidelines } from "./general-surgery/guidelines";
import { generalSurgeryPhysicalExam } from "./general-surgery/physical-exam";
import { generalSurgeryLabs, generalSurgeryImaging } from "./general-surgery/labs-imaging";
import { generalSurgeryDifferentials } from "./general-surgery/differentials";
import { generalSurgeryQuiz } from "./general-surgery/quiz";
import { generalSurgeryProcedures } from "./general-surgery/procedures";

// ─── Pediatrics ───────────────────────────────────────────────────────────────
import { pediatricsConditions } from "./pediatrics/conditions";
import { pediatricsPharmacology } from "./pediatrics/pharmacology";
import { pediatricsGuidelines } from "./pediatrics/guidelines";
import { pediatricsPhysicalExam } from "./pediatrics/physical-exam";
import { pediatricsLabs, pediatricsImaging } from "./pediatrics/labs-imaging";
import { pediatricsDifferentials } from "./pediatrics/differentials";
import { pediatricsQuiz } from "./pediatrics/quiz";
import { pediatricsProcedures } from "./pediatrics/procedures";

// ─── Women's Health ───────────────────────────────────────────────────────────
import { womensHealthConditions } from "./womens-health/conditions";
import { womensHealthPharmacology } from "./womens-health/pharmacology";
import { womensHealthGuidelines } from "./womens-health/guidelines";
import { womensHealthPhysicalExam } from "./womens-health/physical-exam";
import { womensHealthLabs, womensHealthImaging } from "./womens-health/labs-imaging";
import { womensHealthDifferentials } from "./womens-health/differentials";
import { womensHealthQuiz } from "./womens-health/quiz";
import { womensHealthProcedures } from "./womens-health/procedures";

// ─── Emergency Medicine ───────────────────────────────────────────────────────
import { emergencyMedicineConditions } from "./emergency-medicine/conditions";
import { emergencyMedicinePharmacology } from "./emergency-medicine/pharmacology";
import { emergencyMedicineGuidelines } from "./emergency-medicine/guidelines";
import { emergencyMedicinePhysicalExam } from "./emergency-medicine/physical-exam";
import { emergencyMedicineLabs, emergencyMedicineImaging } from "./emergency-medicine/labs-imaging";
import { emergencyMedicineDifferentials } from "./emergency-medicine/differentials";
import { emergencyMedicineQuiz } from "./emergency-medicine/quiz";
import { emergencyMedicineProcedures } from "./emergency-medicine/procedures";

// ─── Behavioral Medicine ──────────────────────────────────────────────────────
import { behavioralMedicineConditions } from "./behavioral-medicine/conditions";
import { behavioralMedicinePharmacology } from "./behavioral-medicine/pharmacology";
import { behavioralMedicineGuidelines } from "./behavioral-medicine/guidelines";
import { behavioralMedicinePhysicalExam } from "./behavioral-medicine/physical-exam";
import { behavioralMedicineLabs, behavioralMedicineImaging } from "./behavioral-medicine/labs-imaging";
import { behavioralMedicineDifferentials } from "./behavioral-medicine/differentials";
import { behavioralMedicineQuiz } from "./behavioral-medicine/quiz";
import { behavioralMedicineProcedures } from "./behavioral-medicine/procedures";

// ─── Re-exports for direct imports ───────────────────────────────────────────
export {
  familyMedicineConditions, familyMedicinePharmacology, familyMedicineGuidelines,
  familyMedicinePhysicalExam, familyMedicineLabValues, familyMedicineImagingFindings,
  familyMedicineDifferentials, familyMedicineQuiz, familyMedicineProcedures,
};
export {
  internalMedicineConditions, internalMedicinePharmacology, internalMedicineGuidelines,
  internalMedicinePhysicalExam, internalMedicineLabValues, internalMedicineImagingFindings,
  internalMedicineDifferentials, internalMedicineQuiz, internalMedicineProcedures,
};
export {
  generalSurgeryConditions, generalSurgeryPharmacology, generalSurgeryGuidelines,
  generalSurgeryPhysicalExam, generalSurgeryLabs, generalSurgeryImaging,
  generalSurgeryDifferentials, generalSurgeryQuiz, generalSurgeryProcedures,
};
export {
  pediatricsConditions, pediatricsPharmacology, pediatricsGuidelines,
  pediatricsPhysicalExam, pediatricsLabs, pediatricsImaging,
  pediatricsDifferentials, pediatricsQuiz, pediatricsProcedures,
};
export {
  womensHealthConditions, womensHealthPharmacology, womensHealthGuidelines,
  womensHealthPhysicalExam, womensHealthLabs, womensHealthImaging,
  womensHealthDifferentials, womensHealthQuiz, womensHealthProcedures,
};
export {
  emergencyMedicineConditions, emergencyMedicinePharmacology, emergencyMedicineGuidelines,
  emergencyMedicinePhysicalExam, emergencyMedicineLabs, emergencyMedicineImaging,
  emergencyMedicineDifferentials, emergencyMedicineQuiz, emergencyMedicineProcedures,
};
export {
  behavioralMedicineConditions, behavioralMedicinePharmacology, behavioralMedicineGuidelines,
  behavioralMedicinePhysicalExam, behavioralMedicineLabs, behavioralMedicineImaging,
  behavioralMedicineDifferentials, behavioralMedicineQuiz, behavioralMedicineProcedures,
};

// ─── Types ────────────────────────────────────────────────────────────────────

/**
 * Full seed data bundle for a single rotation.
 */
export interface RotationSeedData {
  conditions: Condition[];
  pharmacology: Drug[];
  guidelines: Guideline[];
  physicalExam: PhysicalExamFinding[];
  labs: LabValue[];
  imaging: ImagingFinding[];
  differentials: DifferentialSet[];
  quiz: QuizQuestion[];
  procedures: Procedure[];
}

// ─── Map ─────────────────────────────────────────────────────────────────────

/**
 * Keyed lookup of all rotation seed data.
 * Usage: rotationSeedMap["emergency-medicine"].quiz
 */
export const rotationSeedMap: Record<RotationSlug, RotationSeedData> = {
  "family-medicine": {
    conditions: familyMedicineConditions,
    pharmacology: familyMedicinePharmacology,
    guidelines: familyMedicineGuidelines,
    physicalExam: familyMedicinePhysicalExam,
    labs: familyMedicineLabValues,
    imaging: familyMedicineImagingFindings,
    differentials: familyMedicineDifferentials,
    quiz: familyMedicineQuiz,
    procedures: familyMedicineProcedures,
  },
  "internal-medicine": {
    conditions: internalMedicineConditions,
    pharmacology: internalMedicinePharmacology,
    guidelines: internalMedicineGuidelines,
    physicalExam: internalMedicinePhysicalExam,
    labs: internalMedicineLabValues,
    imaging: internalMedicineImagingFindings,
    differentials: internalMedicineDifferentials,
    quiz: internalMedicineQuiz,
    procedures: internalMedicineProcedures,
  },
  "general-surgery": {
    conditions: generalSurgeryConditions,
    pharmacology: generalSurgeryPharmacology,
    guidelines: generalSurgeryGuidelines,
    physicalExam: generalSurgeryPhysicalExam,
    labs: generalSurgeryLabs,
    imaging: generalSurgeryImaging,
    differentials: generalSurgeryDifferentials,
    quiz: generalSurgeryQuiz,
    procedures: generalSurgeryProcedures,
  },
  "pediatrics": {
    conditions: pediatricsConditions,
    pharmacology: pediatricsPharmacology,
    guidelines: pediatricsGuidelines,
    physicalExam: pediatricsPhysicalExam,
    labs: pediatricsLabs,
    imaging: pediatricsImaging,
    differentials: pediatricsDifferentials,
    quiz: pediatricsQuiz,
    procedures: pediatricsProcedures,
  },
  "womens-health": {
    conditions: womensHealthConditions,
    pharmacology: womensHealthPharmacology,
    guidelines: womensHealthGuidelines,
    physicalExam: womensHealthPhysicalExam,
    labs: womensHealthLabs,
    imaging: womensHealthImaging,
    differentials: womensHealthDifferentials,
    quiz: womensHealthQuiz,
    procedures: womensHealthProcedures,
  },
  "emergency-medicine": {
    conditions: emergencyMedicineConditions,
    pharmacology: emergencyMedicinePharmacology,
    guidelines: emergencyMedicineGuidelines,
    physicalExam: emergencyMedicinePhysicalExam,
    labs: emergencyMedicineLabs,
    imaging: emergencyMedicineImaging,
    differentials: emergencyMedicineDifferentials,
    quiz: emergencyMedicineQuiz,
    procedures: emergencyMedicineProcedures,
  },
  "behavioral-medicine": {
    conditions: behavioralMedicineConditions,
    pharmacology: behavioralMedicinePharmacology,
    guidelines: behavioralMedicineGuidelines,
    physicalExam: behavioralMedicinePhysicalExam,
    labs: behavioralMedicineLabs,
    imaging: behavioralMedicineImaging,
    differentials: behavioralMedicineDifferentials,
    quiz: behavioralMedicineQuiz,
    procedures: behavioralMedicineProcedures,
  },
};

// ─── Helper Functions ─────────────────────────────────────────────────────────

export function getSeedDataByRotation(slug: RotationSlug): RotationSeedData | undefined {
  return rotationSeedMap[slug];
}

export function getQuizByRotation(slug: RotationSlug): QuizQuestion[] {
  return getSeedDataByRotation(slug)?.quiz ?? [];
}

export function getConditionsByRotation(slug: RotationSlug): Condition[] {
  return getSeedDataByRotation(slug)?.conditions ?? [];
}

export function getPharmacologyByRotation(slug: RotationSlug): Drug[] {
  return getSeedDataByRotation(slug)?.pharmacology ?? [];
}

export function getDifferentialsByRotation(slug: RotationSlug): DifferentialSet[] {
  return getSeedDataByRotation(slug)?.differentials ?? [];
}

export function getProceduresByRotation(slug: RotationSlug): Procedure[] {
  return getSeedDataByRotation(slug)?.procedures ?? [];
}

export function getLabsImagingByRotation(slug: RotationSlug): { labs: LabValue[]; imaging: ImagingFinding[] } {
  const data = getSeedDataByRotation(slug);
  return { labs: data?.labs ?? [], imaging: data?.imaging ?? [] };
}

export function getPhysicalExamByRotation(slug: RotationSlug): PhysicalExamFinding[] {
  return getSeedDataByRotation(slug)?.physicalExam ?? [];
}

export function getGuidelinesByRotation(slug: RotationSlug): Guideline[] {
  return getSeedDataByRotation(slug)?.guidelines ?? [];
}

// ─── Constants ────────────────────────────────────────────────────────────────

export const SUPPORTED_ROTATIONS: RotationSlug[] = [
  "family-medicine",
  "internal-medicine",
  "general-surgery",
  "pediatrics",
  "womens-health",
  "emergency-medicine",
  "behavioral-medicine",
];

export const ROTATION_DISPLAY_NAMES: Record<RotationSlug, string> = {
  "family-medicine": "Family Medicine",
  "internal-medicine": "Internal Medicine",
  "general-surgery": "General Surgery",
  "pediatrics": "Pediatrics",
  "womens-health": "Women's Health",
  "emergency-medicine": "Emergency Medicine",
  "behavioral-medicine": "Behavioral Medicine",
};
