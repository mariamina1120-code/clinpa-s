// @ts-nocheck
import type { Guideline } from "@/types";

export const generalSurgeryGuidelines: Guideline[] = [
  {
    id: "gs-guide-eras",
    name: "Enhanced Recovery After Surgery (ERAS) Protocol",
    rotation: "general-surgery",
    organization: "ERAS Society / American College of Surgeons",
    year: 2023,
    summary: "ERAS protocols are evidence-based multimodal perioperative care pathways designed to reduce surgical stress, maintain physiologic function, accelerate recovery, and shorten hospital stay. Implemented across colorectal, hepatobiliary, gynecologic, urologic, thoracic, and orthopedic surgery.",
    keyRecommendations: [
      "PREOPERATIVE: Patient education/counseling (set expectations, reduce anxiety). Carbohydrate loading: clear carbohydrate drink up to 2 hours before surgery (reduces insulin resistance and protein catabolism). No prolonged fasting — liquids allowed up to 2 hours, solids up to 6 hours before induction. Prehabilitation: exercise, nutrition optimization, smoking cessation ≥4 weeks before surgery. Mechanical bowel prep: NOT routinely recommended for colonic surgery (does not reduce SSI or anastomotic leak).",
      "INTRAOPERATIVE: Goal-directed fluid therapy (avoid under- and over-resuscitation — target MAP >65, UO >0.5 mL/kg/hr). Laparoscopic/minimally invasive approach when possible (reduces pain, ileus, SSI). Maintenance of normothermia (warming blankets, warmed IV fluids, ambient temperature >21°C). Antibiotic prophylaxis: within 60 minutes of incision, redose q4h for prolonged procedures. Regional anesthesia: thoracic epidural or TAP (transversus abdominis plane) block reduces opioid requirements.",
      "POSTOPERATIVE: Early oral feeding: liquids within 4 hours of surgery, solids within 24 hours. Early ambulation: out of bed same day as surgery for colorectal procedures. Multimodal analgesia: scheduled acetaminophen + NSAID (ketorolac) + opioid PRN only (opioid-sparing approach). Thromboprophylaxis: LMWH + sequential compression devices; start within 12–24 hours post-op. Urinary catheter removal: within 24 hours of surgery. NGT: remove before end of surgery (no routine post-op NGT — increases pulmonary complications). Ileus prevention: early feeding, ambulation, gum chewing, alvimopan (mu-opioid receptor antagonist peripherally acting).",
      "OUTCOMES: ERAS reduces hospital stay by 1–3 days, 30-day complication rate by 20–30%, readmission rate, and cost — without increasing mortality."
    ],
    clinicalApplication: "ERAS compliance is tracked and audited. Non-compliance (e.g., keeping NGT for days, delaying feeding, prolonged IV opioids) is associated with worse outcomes. PA/NP students should actively advocate for ERAS elements on rounds.",
    boardPearl: "ERAS key principles: Pre-op carbohydrate loading (not fasting), no routine bowel prep, intraop normothermia + goal-directed fluids, post-op early feeding + ambulation + multimodal non-opioid analgesia + DVT prophylaxis + remove NGT/Foley early."
  },
  {
    id: "gs-guide-sbo-management",
    name: "Management of Small Bowel Obstruction — EAST Practice Management Guidelines",
    rotation: "general-surgery",
    organization: "Eastern Association for the Surgery of Trauma (EAST)",
    year: 2022,
    summary: "Evidence-based guidelines for the management of adhesive small bowel obstruction (aSBO), addressing when to operate vs. manage non-operatively, the role of water-soluble contrast, CT indications, and timing of surgery.",
    keyRecommendations: [
      "INITIAL MANAGEMENT: NPO, IV fluid resuscitation, nasogastric decompression (NGT), Foley catheter for I&O monitoring, serial abdominal exams every 4–6 hours, electrolyte correction.",
      "WATER-SOLUBLE CONTRAST (Gastrografin): Recommended for patients managed non-operatively who have not passed gas/stool within 24–48 hours of admission. Gastrografin (hyperosmolar contrast) via NGT — if contrast reaches colon within 24 hours, likelihood of resolution without surgery is high (NPV 96%). Also therapeutic — hyperosmolar effect draws fluid into bowel lumen, promoting transit. Reduces need for surgery by ~40% vs. non-intervention.",
      "CRITERIA FOR IMMEDIATE SURGERY: Peritonitis, signs of strangulation (fever >38.5°C, leukocytosis >20,000, elevated lactate, hemodynamic instability, peritoneal signs), closed-loop obstruction on CT, irreducible hernia with obstruction. These patients go directly to OR without a trial of non-operative management.",
      "CRITERIA FOR NON-OPERATIVE MANAGEMENT (NOM): Partial SBO (some gas passes beyond obstruction), no peritoneal signs, no strangulation findings, resolving symptoms. NOM: NGT + IVF + serial exams. If improving: advance diet. If not resolving in 24–48 hours: Gastrografin challenge or surgery.",
      "TIMING OF SURGERY: If operative management chosen: laparoscopic approach preferred for adhesiolysis when technically feasible. Open for complex cases. NOM failure rate ~20% — if patient not improving after 24–48 hours of NOM, operate."
    ],
    clinicalApplication: "Adhesiolysis can be complex — bowel resection may be required if strangulated segment found. Mark obviously viable from non-viable bowel; if borderline viability, wrap in warm saline gauze and reassess at 15 minutes.",
    boardPearl: "SBO non-operative management: NGT decompression + Gastrografin challenge at 24–48 hours. Contrast reaching colon within 24h = high probability of spontaneous resolution. Absolute indications for immediate OR: peritonitis, strangulation, closed-loop obstruction, irreducible hernia."
  },
  {
    id: "gs-guide-surgical-site-infection",
    name: "SSI Prevention — CDC / SHEA / IDSA Guidelines",
    rotation: "general-surgery",
    organization: "CDC / SHEA / IDSA / ACS",
    year: 2022,
    summary: "Comprehensive evidence-based guidelines for prevention of surgical site infections — the most common healthcare-associated infection, occurring in 2–5% of all operations. Encompasses pre-, intra-, and post-operative strategies.",
    keyRecommendations: [
      "PREOPERATIVE: Identify and treat remote site infections before elective surgery. Screen for MRSA nasal carriage (nares swab) for high-risk procedures (cardiac, orthopedic implants) — decolonize with mupirocin nasal ointment + chlorhexidine body wash × 5 days. Optimize glucose control (HbA1c <8% for elective surgery; glucose <180 intraoperatively). Smoking cessation ≥30 days before surgery. Stop immunosuppressants as able. Do NOT shave hair at surgical site — only clip if necessary.",
      "ANTIBIOTIC PROPHYLAXIS: Administer appropriate antibiotic within 60 minutes before incision (30 minutes for vancomycin, fluoroquinolones). Redose every 2 half-lives during prolonged procedures (cefazolin: redose q4h; cefoxitin: q2h). Discontinue within 24 hours post-op (48 hours for cardiac surgery). Antibiotic selection by procedure: Clean procedures (breast, hernia): cefazolin 2g IV. Clean-contaminated (colorectal, biliary): cefazolin + metronidazole OR cefoxitin 2g IV. Beta-lactam allergy: clindamycin + gentamicin.",
      "INTRAOPERATIVE: Maintain normothermia (core temp >36°C throughout). Maintain adequate oxygenation (FiO2 0.8 during colorectal surgery per meta-analysis). Irrigate contaminated wounds with saline. Use iodine-impregnated incise drapes for high-risk procedures. Use triclosan-coated sutures (reduce SSI in meta-analysis). Change gloves before wound closure. Use alcohol-based skin prep (chlorhexidine-alcohol: superior to betadine for SSI prevention).",
      "POSTOPERATIVE: Sterile wound care for 24–48 hours post-op. Do not apply antimicrobial agents to wounds (no evidence, increases resistance). Showering allowed after 48 hours (wound moisture is not harmful). Inspect wound at 4–7 days post-op; open any SSI and allow to heal by secondary intention. Do NOT routinely close contaminated wounds primarily — delayed primary closure or healing by secondary intention for contaminated/dirty wounds."
    ],
    clinicalApplication: "SSI prevention bundles (multiple concurrent interventions) show greater SSI reduction than any single intervention alone. Document antibiotic name, dose, time relative to incision in operative note.",
    boardPearl: "SSI risk factors: BMI >30, DM, smoking, malnutrition, immunosuppression, prolonged OR time >2h, emergency surgery, contaminated wound class. Antibiotic prophylaxis must be given within 60 minutes before incision and discontinued within 24 hours post-op."
  },
  {
    id: "gs-guide-appendicitis-management",
    name: "Acute Appendicitis Management — WSES / SAGES Guidelines",
    rotation: "general-surgery",
    organization: "World Society of Emergency Surgery (WSES) / SAGES",
    year: 2023,
    summary: "Evidence-based guidelines for diagnosis and management of acute appendicitis, addressing role of imaging, scoring systems, operative vs. non-operative management, laparoscopic vs. open appendectomy, and antibiotic-first strategies.",
    keyRecommendations: [
      "DIAGNOSIS: Alvarado/MANTRELS score: ≤4 = low risk (CT or discharge with follow-up); 5–6 = intermediate (CT recommended); ≥7 = high clinical probability (operate or CT to confirm). CT scan abdomen/pelvis with IV contrast: gold standard imaging (sensitivity 94%, specificity 95%). Ultrasound: first-line in children and pregnant women (avoids radiation); sensitivity 75%, specificity 95% if appendix visualized. MRI: preferred in pregnant patients when US inconclusive.",
      "APPENDECTOMY: Standard of care for uncomplicated appendicitis. Laparoscopic appendectomy (LA) is preferred over open: less pain, shorter hospital stay, fewer wound infections, faster recovery. Equivalent perforation and anastomotic leak rates. Single-incision laparoscopic appendectomy (SILS) or robotic approach acceptable in experienced hands.",
      "NON-OPERATIVE MANAGEMENT (NOM) WITH ANTIBIOTICS: Acceptable for uncomplicated appendicitis (no fecalith, no perforation, no abscess on CT) — clinical trials (APPAC, CODA) show 72% success rate at 1 year without appendectomy. Initial IV antibiotics (ertapenem or cefotaxime + metronidazole) × 3 days then oral antibiotics × 7 days. However: 28% fail and require appendectomy within 5 years; higher complication rate if failure. Patient must understand this and prefer NOM over surgery.",
      "PERFORATED APPENDICITIS: Phlegmon or abscess: CT-guided percutaneous drainage + IV antibiotics; interval appendectomy at 6–8 weeks (controversial — recurrence risk ~20%, some advocate no interval appendectomy if patient's symptoms resolve). Free perforation with diffuse peritonitis: emergent laparoscopic or open appendectomy.",
      "ANTIBIOTIC REGIMENS: Uncomplicated: cefazolin (or cefoxitin) preoperatively; single dose only if pathology confirms no perforation. Complicated (perforated/gangrenous): pip-tazo 3.375g IV q6h or ceftriaxone + metronidazole × 4–7 days (until afebrile, tolerating oral, normalizing WBC)."
    ],
    clinicalApplication: "NOM is increasingly offered to patients after shared decision-making. Key counseling points: 72% success rate at 1 year, but 28% will require appendectomy within 5 years; slightly higher morbidity if NOM fails and appendectomy is required urgently.",
    boardPearl: "Uncomplicated appendicitis NOM vs. surgical: NOM success rate 72% at 1 year (CODA/APPAC trials). Fecalith = higher NOM failure rate — most agree to operate if fecalith present. Interval appendectomy after abscess: controversial, not always necessary if asymptomatic."
  },
  {
    id: "gs-guide-cholecystitis",
    name: "Acute Cholecystitis — Tokyo Guidelines 2018 (TG18)",
    rotation: "general-surgery",
    organization: "Tokyo International Consensus Meeting",
    year: 2018,
    summary: "International evidence-based guidelines for diagnosis and management of acute cholecystitis and biliary disease, providing diagnostic criteria, severity grading, and treatment algorithms.",
    keyRecommendations: [
      "DIAGNOSIS: TG18 diagnostic criteria: Local signs (Murphy's sign, RUQ pain/mass/tenderness) + Systemic inflammation (fever, elevated WBC or CRP) + Imaging confirmation (US: gallstones, wall thickening >4 mm, pericholecystic fluid, sonographic Murphy's sign). Definitive diagnosis requires imaging. If clinically suspected but US negative: HIDA scan (non-filling = cholecystitis).",
      "SEVERITY GRADING (TG18): Grade I (mild): does not meet Grade II criteria; no organ dysfunction. Grade II (moderate): any of — WBC >18,000, palpable RUQ mass, duration >72 hours, marked local inflammation (gangrenous/empyematous/pericholecystic abscess). Grade III (severe): any organ dysfunction — cardiovascular, neurologic, respiratory, renal, hepatic, or hematologic failure.",
      "TREATMENT BY GRADE: Grade I: Laparoscopic cholecystectomy within 72 hours of onset (early LC is preferred over delayed LC — equivalent or lower complications, shorter hospital stay). Grade II: Early LC in centers with experienced surgeons; percutaneous cholecystostomy (PC) as bridge if high-risk. Grade III: Urgent gallbladder drainage (PC preferred) + ICU support; definitive LC deferred until medically optimized.",
      "EARLY vs. DELAYED CHOLECYSTECTOMY: Multiple RCTs confirm early laparoscopic cholecystectomy (within 72 hours, ideally within 24 hours of admission) is safe and preferred. Early LC reduces conversion to open (6% vs. 14%), hospital stay, and total costs. Delayed LC (>72 hours) is acceptable if surgery unavailable within that window.",
      "CHOLEDOCHOLITHIASIS (CBD STONES): ERCP with sphincterotomy + stone extraction, followed by laparoscopic cholecystectomy (same admission ideally). Laparoscopic CBD exploration is an alternative in expert hands. Cholangitis (ascending): urgent ERCP within 24h (cholangitis) or 72h (without cholangitis but with obstruction)."
    ],
    clinicalApplication: "Acalculous cholecystitis in ICU patients: high mortality if missed. Suspect in any ICU patient with sepsis, elevated LFTs, and no other source. Ultrasound: thickened GB wall + pericholecystic fluid + no stones. Treatment: percutaneous cholecystostomy tube (patients too ill for surgery). Tube can be removed once the patient has recovered.",
    boardPearl: "Tokyo Grade III cholecystitis + organ failure: emergent gallbladder drainage (PC tube) NOT cholecystectomy. Early cholecystectomy (<72h) is preferred for Grade I-II. Ascending cholangitis: ERCP within 24h if cholangitis present. Charcot's triad: RUQ pain + fever + jaundice. Reynolds' pentad adds hypotension + AMS = emergency."
  },
  {
    id: "gs-guide-dvt-prophylaxis",
    name: "VTE Prophylaxis in Surgical Patients — ACCP / ASH Guidelines",
    rotation: "general-surgery",
    organization: "American College of Chest Physicians (ACCP) / American Society of Hematology",
    year: 2022,
    summary: "Evidence-based recommendations for prevention of venous thromboembolism (DVT and PE) in surgical patients, covering risk stratification, pharmacologic and mechanical prophylaxis, and duration of therapy.",
    keyRecommendations: [
      "RISK STRATIFICATION: Caprini Risk Score for surgical patients. Low risk (Caprini 0–2): early ambulation only. Moderate risk (3–4): LMWH (enoxaparin 40 mg SQ daily) OR UFH 5,000 units SQ q8–12h OR sequential compression devices (SCDs). High risk (≥5): LMWH + SCDs. Very high risk (Caprini >8, oncologic surgery): LMWH + SCDs + consider extended prophylaxis 28 days post-discharge.",
      "PHARMACOLOGIC OPTIONS: LMWH (enoxaparin 40 mg SQ daily): preferred — predictable dosing, once-daily, lower HIT risk than UFH. UFH 5,000 units SQ q8–12h: use in severe renal failure (eGFR <30 — LMWH accumulates). Fondaparinux (2.5 mg SQ daily): alternative for HIT history. Direct oral anticoagulants (rivaroxaban, apixaban): FDA-approved for orthopedic VTE prophylaxis; being studied for general surgery.",
      "MECHANICAL PROPHYLAXIS: SCDs (sequential compression devices) for all surgical patients from time of surgery. Graduated compression stockings: additive benefit. SCDs are particularly important when pharmacologic prophylaxis is contraindicated (active bleeding, high bleed risk). SCDs should be applied in the OR before induction and removed only for ambulation.",
      "TIMING: Start pharmacologic prophylaxis 6–12 hours before surgery (preoperative) OR 6–12 hours after surgery (postoperative — for bleed-risk procedures). For neuraxial anesthesia: must wait 12h after prophylactic LMWH or 24h after therapeutic LMWH before needle placement; remove catheter 12h after last prophylactic dose.",
      "EXTENDED PROPHYLAXIS: Recommended for 28–35 days post-discharge in: abdominopelvic cancer surgery, major orthopedic surgery (hip/knee arthroplasty, hip fracture). Evidence: ENOXACAN II trial — extended enoxaparin reduced VTE by 60% vs. 7-day course in cancer surgery."
    ],
    clinicalApplication: "Document Caprini score in pre-operative assessment. Ensure SCDs applied in OR and pharmacologic VTE prophylaxis ordered post-operatively. Early ambulation (same day of surgery per ERAS) is the most important non-pharmacologic measure.",
    boardPearl: "Caprini risk score determines VTE prophylaxis intensity. Cancer surgery patients need extended prophylaxis × 28 days post-discharge. UFH preferred over LMWH in eGFR <30 (renal failure). HIT: stop all heparin → start argatroban (DTI). Fondaparinux is safe in HIT history."
  }
];
