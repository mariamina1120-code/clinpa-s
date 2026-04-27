// ─── Rotation Slugs ───────────────────────────────────────────────────────────

export type RotationSlug =
  | "family-medicine"
  | "internal-medicine"
  | "general-surgery"
  | "pediatrics"
  | "womens-health"
  | "emergency-medicine"
  | "behavioral-medicine"
  | "geriatrics";

export interface Rotation {
  slug: RotationSlug;
  name: string;
  shortName: string;
  icon: string; // emoji
  color: string; // tailwind color class
  description: string;
}

// ─── Conditions ───────────────────────────────────────────────────────────────

export interface Condition {
  id: string;
  name: string;
  icdCode?: string;
  /** Rotation slug this condition belongs to */
  rotation?: RotationSlug;
  /** Alternative field name used in some seed files */
  rotationSlug?: RotationSlug;
  category?: string;
  definition?: string;
  diagnosticCriteria?: string;
  presentation?: {
    chiefComplaint?: string[];
    associatedSymptoms?: string[];
    demographics?: string;
  };
  distinguishingFeatures?: string;
  redFlags?: string[];
  mnemonics?: { name: string; content: string }[];
  pimpingQuestions?: string[];
  clinicalPearls?: string[];
  boardRecallTips?: string[];
}

// ─── Pharmacology ─────────────────────────────────────────────────────────────

export interface Drug {
  id: string;
  name: string;
  /** Single brand name string */
  brandName?: string;
  /** Multiple brand names (alternate) */
  brandNames?: string[];
  drugClass: string;
  /** Rotation slug (singular) used in most seed files */
  rotationSlug?: RotationSlug;
  /** Multiple rotations (alternate) */
  rotations?: RotationSlug[];
  mechanism?: string;
  mechanismOfAction?: string;
  indications?: string[];
  dosing?: {
    adult?: string;
    adultGeneral?: string;
    pediatric?: string;
    pediatricNote?: string;
    renalAdjustment?: string;
    hepaticAdjustment?: string;
  };
  sideEffects?: {
    common?: string[];
    serious?: string[];
    /** String or array of strings */
    blackBox?: string | string[];
  };
  /** String array (seed data format) */
  contraindications?: string[];
  /** Structured format (alternate) */
  contraindicationsStructured?: {
    absolute?: string[];
    relative?: string[];
  };
  /** String array (seed data format) */
  interactions?: string[];
  /** Structured format (alternate) */
  interactionsStructured?: {
    drugs?: string[];
    foods?: string[];
  };
  monitoring?: string[];
  clinicalPearls?: string[];
  /** Array of tips (seed data format) */
  boardRecallTips?: string[];
  /** Single tip string (alternate) */
  boardRecallTip?: string;
  beersCriteria?: boolean;
  beersCriteriaNote?: string;
  weightBasedDosing?: boolean;
  /** One-liner clinical role / when this drug is used (shown in class view) */
  clinicalRole?: string;
  /** Comparative notes — why choose this drug vs others in its class; first-line/gold standard context */
  whyUseThisVsOthers?: string;
}

// ─── Physical Exam ────────────────────────────────────────────────────────────

export interface PhysicalExamFinding {
  id?: string;
  /** Single condition ID (original format) */
  conditionId?: string;
  /** Multiple condition IDs (seed data format) */
  conditionIds?: string[];
  conditionName?: string;
  /** Finding name (seed data format) */
  findingName?: string;
  rotation?: RotationSlug;
  rotationSlug?: RotationSlug;
  category?: string;
  description?: string;
  technique?: string;
  systemsExamined?: string[];
  classicFindings?: {
    inspection?: string[];
    palpation?: string[];
    percussion?: string[];
    auscultation?: string[];
    special?: string[];
  };
  /** Step-by-step procedure steps */
  steps?: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  keyManeuvers?: {
    name: string;
    steps: string[];
    positiveResult: string;
    clinicalSignificance: string;
    sensitivityNote?: string;
  }[];
  normalFindings?: string;
  abnormalFindings?: string[];
  documentationPhrase?: string;
  pitfalls?: string[];
  clinicalPearls?: string[];
  boardRecallTips?: string[];
}

// ─── Labs & Imaging ───────────────────────────────────────────────────────────

export interface LabValue {
  id: string;
  name: string;
  abbreviation?: string;
  rotation?: RotationSlug | RotationSlug[];
  rotationSlug?: RotationSlug;
  /** String format (seed data) */
  normalRange?: string;
  /** Structured format (original) */
  normalRangeStructured?: {
    adult: string;
    pediatric?: string;
    pregnancy?: string;
    units: string;
  };
  units?: string;
  clinicalSignificance?: string;
  criticalValues?: string;
  interpretation?:
    | {
        elevated?: { clinicalMeaning: string; nextSteps: string };
        decreased?: { clinicalMeaning: string; nextSteps: string };
      }
    | { finding: string; meaning: string }[];
  clinicalPearl?: string;
  clinicalPearls?: string[];
  whenToOrder?: string[];
  boardRecallTips?: string[];
}

export interface ImagingFinding {
  id: string;
  /** Display name (seed data format) */
  name?: string;
  /** Finding description (original format) */
  finding?: string;
  modality: string;
  /** Region of interest (seed data) */
  region?: string;
  rotation?: RotationSlug | RotationSlug[];
  rotationSlug?: RotationSlug;
  /** Diagnoses this finding suggests */
  suggestsDiagnosis?: string[];
  keyFeatures?: string[];
  interpretationTip?: string;
  indication?: string;
  normalFindings?: string;
  abnormalFindings?: string[] | { finding: string; interpretation: string }[];
  clinicalPearls?: string[];
  boardRecallTips?: string[];
}

// ─── Differentials ────────────────────────────────────────────────────────────

export interface DifferentialSet {
  id?: string;
  rotation?: RotationSlug;
  rotationSlug?: RotationSlug;
  chiefComplaint: string;
  differentials: {
    /** Condition name (seed data format) */
    condition?: string;
    /** Condition name (alternate) */
    conditionName?: string;
    rank?: number;
    likelihood: "common" | "uncommon" | "rare" | "less_common" | "must_not_miss";
    /** Whether this is a must-not-miss diagnosis */
    mustNotMiss?: boolean;
    /** Combined distinguishing features (seed data) */
    distinguishingFeatures?: string;
    distinguishingHistory?: string[];
    distinguishingExam?: string[];
    /** Workup items (seed data) */
    workup?: string[];
    /** Key workup items (alternate) */
    keyWorkup?: string[];
    redFlags?: string[];
    /** Clinical pearl (single) */
    clinicalPearl?: string;
    /** Clinical pearls (array) */
    clinicalPearls?: string[];
  }[];
  keyPearls?: string[];
}

// ─── Guidelines ───────────────────────────────────────────────────────────────

export interface Guideline {
  id?: string;
  rotation?: RotationSlug;
  conditionName: string;
  guidelineName?: string;
  issuingOrganization?: string;
  year?: number;
  keyRecommendations?: string[];
  firstLine?: string[];
  secondLine?: string[];
  thirdLine?: string[];
  nonPharmacologic?: string[];
  whenToRefer?: string[];
  monitoringSchedule?: string[];
  patientEducation?: string[];
}

// ─── Procedures ───────────────────────────────────────────────────────────────

export interface Procedure {
  id: string;
  name: string;
  rotation?: RotationSlug;
  rotationSlug?: RotationSlug;
  category?: string;
  overview?: string;
  indications?: string[];
  contraindications?: string[];
  equipment?: string[];
  steps?: {
    stepNumber: number;
    title: string;
    description: string;
    tip?: string;
  }[];
  complications?: string[];
  documentation?: string;
  clinicalPearls?: string[];
  boardRecallTips?: string[];
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

export interface QuizQuestion {
  id: string;
  rotation?: RotationSlug;
  rotationSlug?: RotationSlug;
  /** Topic label (seed data format) */
  topic?: string;
  /** Category enum (original format) */
  category?:
    | "Pharmacology"
    | "Diagnosis"
    | "Physical Exam"
    | "Labs"
    | "Management"
    | "Guidelines";
  /** Question stem — full question text (seed data format) */
  question?: string;
  /** Question stem (original format, alternate) */
  stem?: string;
  /** Options as plain strings like "A. answer text" (seed data format) */
  options?: string[];
  /** Options as objects (original format) */
  optionsStructured?: { label: string; text: string }[];
  /** Correct answer letter: "A", "B", "C", "D", or "E" */
  correctAnswer: string;
  explanation: string;
  relatedConditionId?: string;
  difficulty?: "easy" | "medium" | "hard";
}

// ─── SOAP Chart ───────────────────────────────────────────────────────────────

export interface SOAPData {
  patientLabel: string; // DE-IDENTIFIED only
  chiefComplaint: string;
  hpi: string;
  pmh: string;
  psh: string;
  familyHx: string;
  socialHx: string;
  medications: string;
  allergies: string;
  ros: Record<string, boolean | string>;
  physicalExam: Record<string, string>;
  assessment: string;
  differentials: string[];
  plan: string;
  studentReflection: string;
}

export interface Chart {
  id: string;
  userId: string;
  rotationSlug: RotationSlug;
  chiefComplaint: string;
  encounterDate: string;
  soapData: SOAPData;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Case Log ─────────────────────────────────────────────────────────────────

export interface CaseLogEntry {
  id: string;
  userId: string;
  rotationSlug: RotationSlug;
  encounterDate: string;
  patientAgeGroup:
    | "Neonate (0-28d)"
    | "Infant (1-12mo)"
    | "Toddler (1-3y)"
    | "Child (4-12y)"
    | "Adolescent (13-17y)"
    | "Adult (18-64y)"
    | "Older Adult (65+)";
  patientGender: "Male" | "Female" | "Non-binary" | "Unknown";
  chiefComplaint: string;
  diagnosisCategory: string;
  encounterType:
    | "Outpatient"
    | "Inpatient"
    | "Emergency"
    | "Surgery"
    | "Telehealth"
    | "Procedure";
  preceptorName: string;
  createdAt: string;
}

// ─── User Module / Access ─────────────────────────────────────────────────────

export interface UserModule {
  id: string;
  userId: string;
  rotationSlug: RotationSlug;
  hasPaperTools: boolean;
  purchasedAt: string;
  stripePaymentId: string;
}

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  programName: string;
  graduationYear: number;
  createdAt: string;
  hipaaAcknowledgedAt?: string;
  inactivityTimeoutMinutes: number;
  mfaEnabled: boolean;
}

// ─── Bundle / Store ───────────────────────────────────────────────────────────

export type BundleType =
  | "complete-digital"
  | "complete-paper"
  | "primary-care-digital"
  | "primary-care-paper"
  | "individual-digital"
  | "individual-paper";

export interface StoreProduct {
  id: BundleType;
  name: string;
  description: string;
  price: number;
  rotations: RotationSlug[] | "all";
  hasPaperTools: boolean;
  stripePriceEnvKey: string;
  badge?: string;
}
