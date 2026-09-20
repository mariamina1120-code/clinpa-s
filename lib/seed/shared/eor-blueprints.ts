import type { RotationSlug } from "@/types";

// ─── PAEA End of Rotation™ exam blueprints ────────────────────────────────────
//
// Weights sourced from the official PAEA blueprint PDFs (paeaonline.org).
// Six exams use the updated blueprints published Sept 2025, effective on new
// exam forms July 27, 2026. Surgery uses the current 2023 blueprint.
// Legacy blueprint exams remain administrable through July 2027 — weights
// shifted modestly, but category rank order is broadly similar.
//
// Each category carries keyword matchers used to map this app's free-text
// condition categories/names onto official blueprint categories.

export interface EorTaskArea {
  name: string;
  weight: number; // % of exam
}

export interface EorCategory {
  name: string;
  weight: number; // % of exam
  /** Lowercase keywords. len<=4 → matched as whole word; longer → substring. */
  keywords: string[];
}

export interface EorBlueprint {
  examName: string;
  blueprintVersion: string;
  questionCount: number;
  sourceUrl: string;
  note?: string;
  categories: EorCategory[]; // ordered by weight desc = match priority
  taskAreas: EorTaskArea[];
  periopTargets?: { name: string; weight: number }[];
}

export const EOR_BLUEPRINTS: Record<RotationSlug, EorBlueprint> = {
  "family-medicine": {
    examName: "Family Medicine EOR",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://paeaonline.org/wp-content/uploads/2025/09/Family-Medicine-Blueprint-2025-Update.pdf",
    categories: [
      { name: "Cardiovascular", weight: 14, keywords: ["cardio", "vascular", "valvular", "heart", "coronary"] },
      { name: "EENOT (eyes, ears, nose, oral cavity, throat)", weight: 10, keywords: ["eenot", "eent", "ent", "ophth", "sinus", "oropharyn", "throat"] },
      { name: "Gastrointestinal", weight: 10, keywords: ["gastro", "hepat", "intestinal", "gastric", "esophag", "bowel"] },
      { name: "Pulmonary", weight: 10, keywords: ["pulmon", "respir", "sleep", "asthma", "copd"] },
      { name: "Dermatologic", weight: 7, keywords: ["derm", "skin"] },
      { name: "Endocrine", weight: 7, keywords: ["endocr", "thyroid", "metabolic", "diabet"] },
      { name: "Psychiatric / behavioral health", weight: 7, keywords: ["psych", "behavioral"] },
      { name: "Rheumatologic / musculoskeletal", weight: 7, keywords: ["rheum", "musculo", "orthoped", "inflammatory conditions"] },
      { name: "Gynecologic / reproductive health", weight: 6, keywords: ["gyn", "reproduct", "obstet", "menstr", "contracept"] },
      { name: "Neurologic", weight: 6, keywords: ["neuro", "seizure", "headache", "degenerative"] },
      { name: "Renal / genitourinary", weight: 6, keywords: ["renal", "nephro", "urolog", "genitourinary", "urinary", "obstructive"] },
      { name: "Hematologic", weight: 5, keywords: ["hemat", "anemia"] },
      { name: "Infectious diseases", weight: 5, keywords: ["infect", "viral", "sepsis"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 16 },
      { name: "Diagnostic Studies", weight: 14 },
      { name: "Diagnosis", weight: 20 },
      { name: "Health Maintenance", weight: 12 },
      { name: "Clinical Intervention", weight: 8 },
      { name: "Clinical Therapeutics", weight: 18 },
      { name: "Scientific Concepts", weight: 6 },
      { name: "Professional Practice", weight: 6 },
    ],
  },

  "internal-medicine": {
    examName: "Internal Medicine EOR",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://paeaonline.org/wp-content/uploads/2025/09/Internal-Medicine-Blueprint-2025-Update.pdf",
    categories: [
      { name: "Cardiovascular", weight: 20, keywords: ["cardio", "vascular", "valvular", "heart", "preventive"] },
      { name: "Pulmonary", weight: 15, keywords: ["pulmon", "respir"] },
      { name: "Gastrointestinal", weight: 12, keywords: ["gastro", "hepat", "esophag", "biliary", "pancrea", "bowel"] },
      { name: "Endocrine", weight: 10, keywords: ["endocr", "thyroid", "adrenal", "pituitary", "diabet"] },
      { name: "Neurologic", weight: 10, keywords: ["neuro", "seizure", "headache", "demyelin", "cognitive", "movement"] },
      { name: "Renal / genitourinary", weight: 10, keywords: ["renal", "nephro", "urolog", "genitourinary", "glomerul"] },
      { name: "Rheumatologic / musculoskeletal", weight: 8, keywords: ["rheum", "musculo", "connective", "inflammatory conditions"] },
      { name: "Hematologic", weight: 5, keywords: ["hemat", "anemia"] },
      { name: "Infectious diseases", weight: 5, keywords: ["infect", "viral", "sepsis"] },
      { name: "Psychiatric / behavioral health", weight: 5, keywords: ["psych", "behavioral"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 15 },
      { name: "Diagnostic Studies", weight: 14 },
      { name: "Diagnosis", weight: 22 },
      { name: "Health Maintenance", weight: 7 },
      { name: "Clinical Intervention", weight: 10 },
      { name: "Clinical Therapeutics", weight: 18 },
      { name: "Scientific Concepts", weight: 7 },
      { name: "Professional Practice", weight: 7 },
    ],
  },

  "emergency-medicine": {
    examName: "Emergency Medicine EOR",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://e1.nmcdn.io/assets/paea/wp-content/uploads/2025/09/Emergency-Medicine-Blueprint-2025-Update.pdf",
    categories: [
      { name: "Cardiovascular", weight: 18, keywords: ["cardio", "vascular", "cardiac", "cardiopulmonary", "coronary", "arrhythmia"] },
      { name: "Rheumatologic / musculoskeletal", weight: 12, keywords: ["rheum", "musculo", "orthoped", "spine"] },
      { name: "Gastrointestinal", weight: 10, keywords: ["gastro", "hepat", "abdom", "bowel"] },
      { name: "Pulmonary", weight: 10, keywords: ["pulmon", "respir", "allergic"] },
      { name: "Neurologic", weight: 8, keywords: ["neuro", "seizure", "stroke"] },
      { name: "EENOT (eyes, ears, nose, oral cavity, throat)", weight: 7, keywords: ["eenot", "eent", "ent", "ophthalmic", "ophth"] },
      { name: "Psychiatric / behavioral health", weight: 7, keywords: ["psych", "behavioral"] },
      { name: "Renal / genitourinary", weight: 6, keywords: ["renal", "nephro", "urolog", "electrolyte", "genitourinary"] },
      { name: "Dermatologic", weight: 5, keywords: ["derm", "burn"] },
      { name: "Gynecologic / reproductive health", weight: 5, keywords: ["gyn", "reproduct", "obstet"] },
      { name: "Endocrine", weight: 4, keywords: ["endocr", "thyroid", "diabet"] },
      { name: "Hematologic", weight: 4, keywords: ["hemat"] },
      { name: "Infectious diseases", weight: 4, keywords: ["infect", "sepsis"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 15 },
      { name: "Diagnostic Studies", weight: 15 },
      { name: "Diagnosis", weight: 25 },
      { name: "Health Maintenance", weight: 5 },
      { name: "Clinical Intervention", weight: 12 },
      { name: "Clinical Therapeutics", weight: 18 },
      { name: "Scientific Concepts", weight: 5 },
      { name: "Professional Practice", weight: 5 },
    ],
  },

  pediatrics: {
    examName: "Pediatrics EOR",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://paeaonline.org/wp-content/uploads/2025/09/Pediatrics-Blueprint-2025-Update.pdf",
    categories: [
      { name: "EENOT (eyes, ears, nose, oral cavity, throat)", weight: 12, keywords: ["eenot", "eent", "ent", "ophth", "throat"] },
      { name: "Pulmonary", weight: 12, keywords: ["pulmon", "respir", "asthma"] },
      { name: "Dermatologic", weight: 10, keywords: ["derm", "skin"] },
      { name: "Gastrointestinal", weight: 10, keywords: ["gastro", "hepat", "neonatal", "bowel"] },
      { name: "Growth & development", weight: 10, keywords: ["growth", "development", "genetic"] },
      { name: "Infectious diseases", weight: 10, keywords: ["infect", "viral", "sepsis"] },
      { name: "Cardiovascular", weight: 8, keywords: ["cardio", "vascular", "heart", "congenital heart"] },
      { name: "Neurologic / psychiatric / behavioral health", weight: 8, keywords: ["neuro", "psych", "behavioral", "seizure"] },
      { name: "Endocrine", weight: 5, keywords: ["endocr", "thyroid", "diabet"] },
      { name: "Hematologic", weight: 5, keywords: ["hemat", "anemia"] },
      { name: "Renal / genitourinary", weight: 5, keywords: ["renal", "nephro", "urolog", "genitourinary"] },
      { name: "Rheumatologic / musculoskeletal", weight: 5, keywords: ["rheum", "musculo", "orthoped"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 18 },
      { name: "Diagnostic Studies", weight: 10 },
      { name: "Diagnosis", weight: 20 },
      { name: "Health Maintenance", weight: 14 },
      { name: "Clinical Intervention", weight: 10 },
      { name: "Clinical Therapeutics", weight: 15 },
      { name: "Scientific Concepts", weight: 5 },
      { name: "Professional Practice", weight: 8 },
    ],
  },

  "behavioral-medicine": {
    examName: "Psychiatry & Behavioral Health EOR",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://e1.nmcdn.io/assets/paea/wp-content/uploads/2025/09/Psychiatry-Blueprint-2025-Update.pdf",
    categories: [
      { name: "Depressive, bipolar & related disorders", weight: 17, keywords: ["depress", "bipolar", "mood"] },
      { name: "Substance-related & addictive disorders", weight: 15, keywords: ["substance", "addict", "alcohol", "opioid"] },
      { name: "Trauma & stressor-related disorders; abuse & neglect", weight: 13, keywords: ["trauma", "stress", "abuse", "neglect", "ptsd", "crisis"] },
      { name: "Anxiety & somatic symptom-related disorders", weight: 11, keywords: ["anxiety", "somatic", "panic", "phobia", "functional"] },
      { name: "Schizophrenia spectrum & other psychotic disorders", weight: 11, keywords: ["schizo", "psychot"] },
      { name: "Feeding or eating disorders", weight: 8, keywords: ["eating", "feeding", "anorexia", "bulimia"] },
      { name: "Neurodevelopmental & dissociative disorders", weight: 8, keywords: ["neurodevelopmental", "dissociat", "adhd", "autism"] },
      { name: "Sleep-wake disorders", weight: 7, keywords: ["sleep", "insomnia", "narcolepsy"] },
      { name: "Human sexuality", weight: 5, keywords: ["sexual"] },
      { name: "Personality, obsessive-compulsive & related disorders", weight: 5, keywords: ["personality", "obsessive", "compulsive", "ocd"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 16 },
      { name: "Diagnostic Studies", weight: 11 },
      { name: "Diagnosis", weight: 20 },
      { name: "Clinical Intervention", weight: 20 },
      { name: "Clinical Therapeutics", weight: 20 },
      { name: "Scientific Concepts", weight: 7 },
      { name: "Professional Practice", weight: 6 },
    ],
  },

  "womens-health": {
    examName: "Gynecologic, Sexual & Reproductive Health EOR (formerly Women's Health)",
    blueprintVersion: "2026 blueprint (effective Jul 27, 2026)",
    questionCount: 100,
    sourceUrl:
      "https://paeaonline.org/wp-content/uploads/2025/09/GSRh-Blueprint-2025-Update.pdf",
    categories: [
      { name: "Prenatal care / pregnancy", weight: 20, keywords: ["prenatal", "pregnan", "eclampsia", "gestational", "ectopic", "placenta", "abruption", "hellp", "previa", "gdm", "methotrexate", "mtx"] },
      { name: "Uterine / cervix", weight: 12, keywords: ["uterine", "uterus", "cervical", "cervix", "endometri", "fibroid", "leiomyoma", "menstr", "amenorrhea"] },
      { name: "Fertility management", weight: 10, keywords: ["fertility", "infertility", "contracept"] },
      { name: "Sexual health & development", weight: 10, keywords: ["sexual", "menopause", "puberty"] },
      { name: "Labor & delivery", weight: 9, keywords: ["labor", "delivery", "preterm"] },
      { name: "Postpartum care", weight: 8, keywords: ["postpartum", "pph", "uterotonic", "hemorrhage"] },
      { name: "Breast", weight: 7, keywords: ["breast"] },
      { name: "Vulva / vaginal / pelvic floor", weight: 7, keywords: ["vulv", "vagin", "pelvic floor", "prolapse", "cystocele"] },
      { name: "Psychiatric / behavioral health", weight: 6, keywords: ["psych", "behavioral"] },
      { name: "Infections", weight: 6, keywords: ["infect", "pid", "pelvic inflammatory", "vaginosis", "chlamydia", "gonorrhea", "syphilis"] },
      { name: "Ovary / adnexa", weight: 5, keywords: ["ovar", "adnex", "pcos", "polycystic", "torsion"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 15 },
      { name: "Diagnostic Studies", weight: 11 },
      { name: "Diagnosis", weight: 20 },
      { name: "Health Maintenance", weight: 11 },
      { name: "Clinical Intervention", weight: 11 },
      { name: "Clinical Therapeutics", weight: 16 },
      { name: "Scientific Concepts", weight: 8 },
      { name: "Professional Practice", weight: 8 },
    ],
  },

  "general-surgery": {
    examName: "Surgery EOR",
    blueprintVersion: "2023 blueprint (current)",
    questionCount: 100,
    sourceUrl:
      "https://paeaonline.org/wp-content/uploads/2025/08/Surgery-Blueprint-2023-2.pdf",
    note: "The Surgery exam also targets perioperative settings: 35% preoperative, 25% intraoperative, 40% postoperative.",
    categories: [
      { name: "Gastrointestinal", weight: 17, keywords: ["gastro", "hepat", "biliary", "pancrea", "hernia", "colorectal", "abdom", "bowel", "appendic"] },
      { name: "Cardiovascular", weight: 15, keywords: ["cardio", "vascular", "aneurysm", "aort"] },
      { name: "Pulmonary / thoracic surgery", weight: 13, keywords: ["pulmon", "thoracic", "respir"] },
      { name: "Breast surgery", weight: 10, keywords: ["breast"] },
      { name: "Dermatologic", weight: 10, keywords: ["derm", "wound", "skin"] },
      { name: "Renal / genitourinary", weight: 8, keywords: ["renal", "urolog", "nephro", "genitourinary"] },
      { name: "Trauma / acute care", weight: 8, keywords: ["trauma", "acute care"] },
      { name: "Neurologic / neurosurgery", weight: 7, keywords: ["neuro"] },
      { name: "Pain medicine / anesthesia", weight: 7, keywords: ["pain", "anesthe"] },
      { name: "Endocrine", weight: 5, keywords: ["endocr", "thyroid", "parathyroid", "adrenal"] },
    ],
    taskAreas: [
      { name: "History & Physical", weight: 17 },
      { name: "Diagnostic Studies", weight: 17 },
      { name: "Diagnosis", weight: 20 },
      { name: "Clinical Intervention", weight: 20 },
      { name: "Clinical Therapeutics", weight: 11 },
      { name: "Scientific Concepts", weight: 7 },
      { name: "Professional Practice", weight: 8 },
    ],
    periopTargets: [
      { name: "Preoperative", weight: 35 },
      { name: "Intraoperative", weight: 25 },
      { name: "Postoperative", weight: 40 },
    ],
  },
};

// ─── Matching ─────────────────────────────────────────────────────────────────

function keywordHits(haystack: string, tokens: string[], keyword: string): boolean {
  return keyword.length <= 4 ? tokens.includes(keyword) : haystack.includes(keyword);
}

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

/**
 * Map a condition to its official EOR blueprint category.
 * Checks the condition's category string first (author intent), then its name.
 * Categories are evaluated in blueprint order (highest weight first).
 */
export function getBlueprintCategory(
  slug: RotationSlug,
  condition: { name?: string; category?: string }
): EorCategory | null {
  const blueprint = EOR_BLUEPRINTS[slug];
  if (!blueprint) return null;

  const catText = (condition.category ?? "").toLowerCase();
  const catTokens = tokenize(catText);
  for (const cat of blueprint.categories) {
    if (cat.keywords.some((kw) => keywordHits(catText, catTokens, kw))) return cat;
  }

  const nameText = (condition.name ?? "").toLowerCase();
  const nameTokens = tokenize(nameText);
  for (const cat of blueprint.categories) {
    if (cat.keywords.some((kw) => keywordHits(nameText, nameTokens, kw))) return cat;
  }

  return null;
}
