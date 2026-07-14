// Common outpatient ICD-10-CM codes for quick charting.
// These are the frequently used billable codes in primary care — always
// confirm against your site's EHR/current code set before billing.

export interface Icd10Entry {
  code: string;
  description: string;
  category: string;
}

export const COMMON_ICD10: Icd10Entry[] = [
  // ─── Chronic disease ───
  { code: "I10", description: "Essential (primary) hypertension", category: "Chronic Disease" },
  { code: "E11.9", description: "Type 2 diabetes mellitus without complications", category: "Chronic Disease" },
  { code: "E11.65", description: "Type 2 diabetes mellitus with hyperglycemia", category: "Chronic Disease" },
  { code: "R73.03", description: "Prediabetes", category: "Chronic Disease" },
  { code: "E78.5", description: "Hyperlipidemia, unspecified", category: "Chronic Disease" },
  { code: "E78.00", description: "Pure hypercholesterolemia, unspecified", category: "Chronic Disease" },
  { code: "E03.9", description: "Hypothyroidism, unspecified", category: "Chronic Disease" },
  { code: "E66.9", description: "Obesity, unspecified", category: "Chronic Disease" },
  { code: "E66.01", description: "Morbid (severe) obesity due to excess calories", category: "Chronic Disease" },
  { code: "I48.91", description: "Unspecified atrial fibrillation", category: "Chronic Disease" },
  { code: "I25.10", description: "ASCVD of native coronary artery without angina pectoris", category: "Chronic Disease" },
  { code: "N18.30", description: "Chronic kidney disease, stage 3 unspecified", category: "Chronic Disease" },
  { code: "J44.9", description: "COPD, unspecified", category: "Chronic Disease" },
  { code: "J45.909", description: "Unspecified asthma, uncomplicated", category: "Chronic Disease" },
  { code: "D64.9", description: "Anemia, unspecified", category: "Chronic Disease" },
  { code: "D50.9", description: "Iron deficiency anemia, unspecified", category: "Chronic Disease" },
  { code: "E55.9", description: "Vitamin D deficiency, unspecified", category: "Chronic Disease" },
  { code: "M10.9", description: "Gout, unspecified", category: "Chronic Disease" },
  { code: "M19.90", description: "Unspecified osteoarthritis, unspecified site", category: "Chronic Disease" },

  // ─── Respiratory / ENT ───
  { code: "J06.9", description: "Acute upper respiratory infection, unspecified", category: "Respiratory / ENT" },
  { code: "J02.9", description: "Acute pharyngitis, unspecified", category: "Respiratory / ENT" },
  { code: "J02.0", description: "Streptococcal pharyngitis", category: "Respiratory / ENT" },
  { code: "J01.90", description: "Acute sinusitis, unspecified", category: "Respiratory / ENT" },
  { code: "J20.9", description: "Acute bronchitis, unspecified", category: "Respiratory / ENT" },
  { code: "J30.9", description: "Allergic rhinitis, unspecified", category: "Respiratory / ENT" },
  { code: "H66.90", description: "Otitis media, unspecified, unspecified ear", category: "Respiratory / ENT" },
  { code: "H10.9", description: "Unspecified conjunctivitis", category: "Respiratory / ENT" },
  { code: "J11.1", description: "Influenza with other respiratory manifestations, virus unidentified", category: "Respiratory / ENT" },
  { code: "U07.1", description: "COVID-19", category: "Respiratory / ENT" },
  { code: "B34.9", description: "Viral infection, unspecified", category: "Respiratory / ENT" },

  // ─── GI ───
  { code: "K21.9", description: "GERD without esophagitis", category: "GI" },
  { code: "K59.00", description: "Constipation, unspecified", category: "GI" },
  { code: "A09", description: "Infectious gastroenteritis and colitis, unspecified", category: "GI" },
  { code: "K52.9", description: "Noninfective gastroenteritis and colitis, unspecified", category: "GI" },
  { code: "R10.9", description: "Unspecified abdominal pain", category: "GI" },
  { code: "R10.13", description: "Epigastric pain", category: "GI" },
  { code: "R10.31", description: "Right lower quadrant pain", category: "GI" },
  { code: "R11.2", description: "Nausea with vomiting, unspecified", category: "GI" },
  { code: "R19.7", description: "Diarrhea, unspecified", category: "GI" },

  // ─── Musculoskeletal ───
  { code: "M54.50", description: "Low back pain, unspecified", category: "MSK" },
  { code: "M54.2", description: "Cervicalgia", category: "MSK" },
  { code: "M25.561", description: "Pain in right knee", category: "MSK" },
  { code: "M25.562", description: "Pain in left knee", category: "MSK" },
  { code: "M25.511", description: "Pain in right shoulder", category: "MSK" },
  { code: "M25.512", description: "Pain in left shoulder", category: "MSK" },
  { code: "S93.409A", description: "Sprain of unspecified ligament of unspecified ankle, initial encounter", category: "MSK" },
  { code: "M62.830", description: "Muscle spasm of back", category: "MSK" },

  // ─── Neuro / Psych ───
  { code: "R51.9", description: "Headache, unspecified", category: "Neuro / Psych" },
  { code: "G43.909", description: "Migraine, unspecified, not intractable, without status migrainosus", category: "Neuro / Psych" },
  { code: "R42", description: "Dizziness and giddiness", category: "Neuro / Psych" },
  { code: "F32.9", description: "Major depressive disorder, single episode, unspecified", category: "Neuro / Psych" },
  { code: "F32.A", description: "Depression, unspecified", category: "Neuro / Psych" },
  { code: "F41.1", description: "Generalized anxiety disorder", category: "Neuro / Psych" },
  { code: "F41.9", description: "Anxiety disorder, unspecified", category: "Neuro / Psych" },
  { code: "G47.00", description: "Insomnia, unspecified", category: "Neuro / Psych" },
  { code: "F17.210", description: "Nicotine dependence, cigarettes, uncomplicated", category: "Neuro / Psych" },

  // ─── Skin ───
  { code: "L03.90", description: "Cellulitis, unspecified", category: "Skin" },
  { code: "L30.9", description: "Dermatitis, unspecified", category: "Skin" },
  { code: "L70.0", description: "Acne vulgaris", category: "Skin" },
  { code: "R21", description: "Rash and other nonspecific skin eruption", category: "Skin" },
  { code: "L02.91", description: "Cutaneous abscess, unspecified", category: "Skin" },

  // ─── GU / Women's Health ───
  { code: "N39.0", description: "Urinary tract infection, site not specified", category: "GU / Women's Health" },
  { code: "R30.0", description: "Dysuria", category: "GU / Women's Health" },
  { code: "N76.0", description: "Acute vaginitis", category: "GU / Women's Health" },
  { code: "N95.1", description: "Menopausal and female climacteric states", category: "GU / Women's Health" },
  { code: "N92.6", description: "Irregular menstruation, unspecified", category: "GU / Women's Health" },

  // ─── Symptoms / Signs ───
  { code: "R05.9", description: "Cough, unspecified", category: "Symptoms" },
  { code: "R50.9", description: "Fever, unspecified", category: "Symptoms" },
  { code: "R53.83", description: "Other fatigue", category: "Symptoms" },
  { code: "R07.9", description: "Chest pain, unspecified", category: "Symptoms" },
  { code: "R06.02", description: "Shortness of breath", category: "Symptoms" },
  { code: "R63.4", description: "Abnormal weight loss", category: "Symptoms" },
  { code: "R60.0", description: "Localized edema", category: "Symptoms" },

  // ─── Preventive / Z-codes ───
  { code: "Z00.00", description: "General adult medical exam without abnormal findings", category: "Preventive" },
  { code: "Z00.01", description: "General adult medical exam with abnormal findings", category: "Preventive" },
  { code: "Z00.129", description: "Routine child health exam without abnormal findings", category: "Preventive" },
  { code: "Z23", description: "Encounter for immunization", category: "Preventive" },
  { code: "Z12.31", description: "Encounter for screening mammogram", category: "Preventive" },
  { code: "Z12.11", description: "Encounter for screening colonoscopy", category: "Preventive" },
  { code: "Z30.09", description: "Counseling and advice on contraception", category: "Preventive" },
  { code: "Z71.3", description: "Dietary counseling and surveillance", category: "Preventive" },
];
