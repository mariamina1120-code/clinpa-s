// @ts-nocheck
import { QuizQuestion } from "@/types/seed";

export const generalSurgeryQuiz: QuizQuestion[] = [
  {
    id: "gs-q-001",
    rotation: "general-surgery",
    question:
      "A 24-year-old man presents with 18 hours of periumbilical pain that has migrated to the right lower quadrant, fever of 38.4°C, nausea, and anorexia. WBC is 13,500 with 82% neutrophils. On exam, there is point tenderness at McBurney's point, positive Rovsing's sign, and a positive psoas sign. What is his Alvarado score and the most appropriate next step?",
    options: [
      "Alvarado 7; CT abdomen/pelvis with IV contrast",
      "Alvarado 9; immediate appendectomy without further imaging",
      "Alvarado 5; admit for observation and serial abdominal exams",
      "Alvarado 7; immediate appendectomy without CT",
      "Alvarado 9; obtain CT first to confirm before surgery",
    ],
    correctAnswer: 0,
    explanation:
      "Alvarado score: RLQ pain migration (1) + anorexia (1) + nausea/vomiting (1) + RLQ tenderness (2) + rebound tenderness (1) + elevated temperature (1) + leukocytosis (2) = 9. However, Rovsing's sign counts as rebound, and with this classic presentation, CT is still generally recommended in adults to confirm diagnosis and rule out alternatives (especially in reproductive-age females where ectopic pregnancy and ovarian pathology are on the differential). Alvarado 7–9 has a positive predictive value of > 90% for appendicitis but the current standard of care in most U.S. institutions is CT confirmation before surgery in adult males unless there is concern for perforation or hemodynamic instability.",
    topic: "Appendicitis",
    difficulty: "medium",
  },
  {
    id: "gs-q-002",
    rotation: "general-surgery",
    question:
      "A 68-year-old diabetic woman presents to the ED with fever to 39.2°C, RUQ pain, and jaundice. Labs: WBC 19,000, Total bilirubin 6.8 mg/dL, Alk Phos 450 U/L, AST 120 U/L. RUQ ultrasound shows common bile duct dilation to 11 mm and multiple gallstones, but no gallbladder wall thickening. What is the diagnosis and most appropriate management?",
    options: [
      "Acute cholecystitis — emergent cholecystectomy",
      "Ascending cholangitis — ERCP with biliary decompression and antibiotics",
      "Choledocholithiasis without cholangitis — elective MRCP",
      "Gallstone pancreatitis — NPO, IV fluids, and cholecystectomy in 6 weeks",
      "Cholangitis — percutaneous transhepatic cholangiography (PTC) is preferred over ERCP",
    ],
    correctAnswer: 1,
    explanation:
      "This patient has Charcot's Triad: fever + RUQ pain + jaundice = ascending cholangitis. The dilated CBD (11 mm) confirms biliary obstruction. Management: (1) broad-spectrum IV antibiotics (piperacillin-tazobactam or ampicillin-sulbactam), (2) ERCP with sphincterotomy and stone extraction within 24 hours for mild-moderate cholangitis, or emergently for severe cholangitis (Reynolds' Pentad = Charcot's + hypotension + altered mental status). PTC is reserved for failed ERCP or inaccessible papilla (e.g., Roux-en-Y anatomy). Cholecystectomy is performed after recovery (same admission for mild disease).",
    topic: "Cholangitis / Biliary Obstruction",
    difficulty: "medium",
  },
  {
    id: "gs-q-003",
    rotation: "general-surgery",
    question:
      "A 45-year-old man presents with sudden onset severe epigastric pain radiating to his back, nausea, and vomiting. He drinks 4–6 beers daily. Serum lipase is 1,840 U/L (normal < 60). Vital signs: T 38.1°C, HR 112, BP 98/62. BUN 28 mg/dL. Which of the following BISAP criteria does this patient meet, and what is his predicted mortality risk?",
    options: [
      "BUN > 25, SIRS — BISAP score 2; predicted mortality ~1%",
      "BUN > 25, SIRS, tachycardia only — BISAP score 1; low risk",
      "BUN > 25, altered mental status — BISAP score 2; moderate risk",
      "All 5 BISAP criteria met — BISAP score 5; > 22% mortality",
      "SIRS alone — BISAP score 1; routine hospitalization",
    ],
    correctAnswer: 0,
    explanation:
      "BISAP score (1 point each): B = BUN > 25 mg/dL (✓ — BUN 28); I = Impaired mental status (✗); S = SIRS ≥ 2 criteria (✓ — T 38.1 + HR 112 satisfies 2 SIRS criteria); A = Age > 60 (✗ — age 45); P = Pleural effusion on imaging (not mentioned). BISAP = 2. BISAP 2 corresponds to approximately 1.6% mortality. BISAP 3 = ~5.3%, BISAP 4 = ~12.7%, BISAP 5 = ~22.5%. This patient has moderately elevated risk; he should be admitted, aggressively resuscitated with lactated Ringer's (preferred over normal saline in pancreatitis), and monitored for clinical deterioration.",
    topic: "Acute Pancreatitis / BISAP Score",
    difficulty: "hard",
  },
  {
    id: "gs-q-004",
    rotation: "general-surgery",
    question:
      "A 72-year-old woman underwent open colectomy for sigmoid cancer 5 days ago. She develops fever to 38.9°C, tachycardia, and abdominal pain. Her drain output has become cloudy. CT scan shows a fluid collection near the anastomosis with extraluminal air. Which of the following is the most appropriate management?",
    options: [
      "Oral antibiotics and discharge with close follow-up",
      "IV antibiotics alone for 2 weeks",
      "CT-guided percutaneous drainage and IV antibiotics if collection is accessible; operative re-exploration if not",
      "Empiric anti-fungal therapy for Candida anastomotic leak",
      "Repeat CT in 48 hours before making a decision",
    ],
    correctAnswer: 2,
    explanation:
      "This presentation is consistent with an anastomotic leak — the most feared complication after colorectal surgery (incidence 2–7%). Signs: fever, tachycardia, pain, feculent/cloudy drain output, CT showing extraluminal air and fluid collection near anastomosis. Management follows a severity-based approach: (1) Clinically contained leak (Clavien-Dindo II-IIIa): CT-guided percutaneous drainage + broad-spectrum IV antibiotics (cover GNR and anaerobes — piperacillin-tazobactam or meropenem). (2) Peritonitis or hemodynamic instability (Clavien-Dindo IV): immediate re-laparotomy, washout, and likely Hartmann's procedure (end colostomy + oversew rectal stump). IV antibiotics alone without source control is inadequate.",
    topic: "Post-operative Complications / Anastomotic Leak",
    difficulty: "hard",
  },
  {
    id: "gs-q-005",
    rotation: "general-surgery",
    question:
      "A 55-year-old man presents with an acutely painful, irreducible right inguinal bulge that he noticed while lifting heavy boxes 6 hours ago. He has nausea and vomiting. On exam, there is a firm, tender mass below and lateral to the pubic tubercle that does not extend into the scrotum. What type of hernia is this most likely, and what is the appropriate management?",
    options: [
      "Indirect inguinal hernia — reduce and schedule elective repair",
      "Direct inguinal hernia (through Hesselbach's triangle) — reduce and schedule repair",
      "Femoral hernia — emergent operative repair due to high strangulation risk",
      "Indirect inguinal hernia — emergent operative repair for incarceration",
      "Obturator hernia — CT scan to confirm before proceeding",
    ],
    correctAnswer: 2,
    explanation:
      "Location below and lateral to the pubic tubercle (below inguinal ligament, medial to femoral vein) = femoral hernia. Femoral hernias are more common in women (though inguinal hernias are still overall more common in women) and carry the highest strangulation risk of all hernias (~40%) because the femoral ring is a narrow, rigid opening. An irreducible femoral hernia with signs of obstruction (N/V) requires emergent operative repair regardless of symptoms duration. Direct inguinal hernias emerge through Hesselbach's triangle (medial to inferior epigastric vessels, above inguinal ligament) and are medial to the pubic tubercle. Indirect hernias follow the spermatic cord through the internal ring and can extend into the scrotum.",
    topic: "Hernia — Classification and Management",
    difficulty: "medium",
  },
  {
    id: "gs-q-006",
    rotation: "general-surgery",
    question:
      "A 38-year-old woman is admitted with abdominal pain and distension. CT reveals multiple dilated small bowel loops measuring 4.1 cm with a clear transition point in the right lower quadrant and decompressed colon. She has a history of two prior abdominal surgeries. No fever, WBC is 8,200, and lactate is 1.4 mmol/L. She is started on nasogastric decompression and IV fluids. After 48 hours of non-operative management, repeat KUB shows persistent obstruction without improvement. What is the next best step?",
    options: [
      "Continue conservative management for an additional 72 hours",
      "Oral Gastrografin challenge — if contrast reaches colon by 24 hours, continue non-operative management",
      "Immediate operative exploration",
      "Colonoscopy for decompression",
      "Start TPN and monitor nutritional status",
    ],
    correctAnswer: 1,
    explanation:
      "This is an adhesive SBO without signs of strangulation (normal lactate, afebrile, no peritoneal signs). EAST guidelines recommend a Gastrografin (water-soluble contrast) challenge if non-operative management has not resolved the obstruction within 48 hours. Gastrografin is both diagnostic and therapeutic: (1) if contrast reaches the colon within 24 hours → 97% resolution without surgery; (2) its high osmolarity draws fluid into the bowel lumen, reduces edema, and stimulates peristalsis. It also identifies the transition point and rules out complete obstruction. Failure to progress → operative adhesiolysis. Operative exploration is not yet indicated without signs of strangulation or complete obstruction failure.",
    topic: "Small Bowel Obstruction / EAST Guidelines",
    difficulty: "medium",
  },
  {
    id: "gs-q-007",
    rotation: "general-surgery",
    question:
      "A 62-year-old man presents with a 3-month history of blood-streaked stools and a 15-pound unintentional weight loss. Colonoscopy reveals a mass at 12 cm from the anal verge. Biopsy shows moderately differentiated adenocarcinoma. CT of chest, abdomen, and pelvis shows no distant metastases. Staging: T3N1M0. Which statement best describes the preferred treatment approach?",
    options: [
      "Immediate sigmoid resection followed by adjuvant chemotherapy with FOLFOX",
      "Neoadjuvant chemoradiation (long-course) followed by total mesorectal excision (TME), then adjuvant chemotherapy",
      "Abdominoperineal resection (APR) since the tumor is in the rectum",
      "Neoadjuvant FOLFOX alone (no radiation) followed by surgery",
      "Diverting colostomy first, then chemoradiation, then closure — a three-stage approach",
    ],
    correctAnswer: 1,
    explanation:
      "Rectal cancer T3N1M0 (Stage IIIB) at 12 cm from the anal verge requires a multimodal approach. The standard of care: (1) Neoadjuvant chemoradiation (long-course: 45–50 Gy + concurrent 5-FU or capecitabine) to downstage the tumor and sterilize the surgical field, (2) Surgery 8–12 weeks after completion (total mesorectal excision — TME is the oncologic standard; 12 cm is above the dentate line and should allow sphincter-preserving resection [low anterior resection, LAR] without APR), (3) Adjuvant chemotherapy (FOLFOX or CAPOX) for 4 months. APR is required only if the tumor involves the sphincter complex or is too distal for adequate margins. Short-course radiation (5 × 5 Gy) is an alternative for T3–T4 with immediate surgery.",
    topic: "Colorectal Cancer — Rectal Cancer Management",
    difficulty: "hard",
  },
  {
    id: "gs-q-008",
    rotation: "general-surgery",
    question:
      "On post-operative day 3 following an open cholecystectomy, a 51-year-old man develops fever to 38.2°C. His incision is clean, dry, and intact without erythema. Breath sounds are diminished at the right base. Chest X-ray shows a small right pleural effusion and basilar atelectasis. Urinalysis is normal. What is the most likely cause of his fever and the appropriate management?",
    options: [
      "Wind (atelectasis/pneumonia) — incentive spirometry, ambulation, and pain control",
      "Water (UTI) — urine culture and appropriate antibiotics",
      "Wound (SSI) — wound exploration and antibiotics",
      "Walking (DVT/PE) — Doppler ultrasound of lower extremities",
      "Wonder drugs (drug fever) — discontinue all unnecessary medications",
    ],
    correctAnswer: 0,
    explanation:
      "The 5 Ws of post-operative fever: Wind (days 1–2, atelectasis/pneumonia), Water (days 3–5, UTI), Wound (days 5–7, SSI), Walking (days 5–7, DVT/PE), Wonder drugs (any time, drug fever). This patient on post-op day 3 with fever, diminished breath sounds, and basilar atelectasis on CXR = 'Wind' — the most common cause of early post-operative fever (days 1–3). Atelectasis is caused by splinting from incisional pain and inadequate deep breathing. Management: aggressive pulmonary toilet (incentive spirometry every hour, ambulation, deep breathing exercises), adequate analgesia. True pneumonia (productive cough, infiltrate, purulent sputum) would require antibiotics. A small reactive pleural effusion after abdominal surgery is expected and does not require drainage unless symptomatic.",
    topic: "Post-operative Fever — 5 Ws",
    difficulty: "easy",
  },
  {
    id: "gs-q-009",
    rotation: "general-surgery",
    question:
      "A 48-year-old woman presents with a 6 cm thyroid nodule. Fine-needle aspiration (FNA) biopsy returns as Bethesda Category IV (follicular neoplasm). Thyroid function tests are normal. Ultrasound shows no cervical lymphadenopathy. What is the most appropriate next step?",
    options: [
      "Repeat FNA in 6 months to reassess",
      "Molecular testing (ThyroSeq or Afirma) to guide management vs diagnostic hemithyroidectomy",
      "Total thyroidectomy with central neck dissection",
      "Radioactive iodine ablation",
      "Observe with annual ultrasound — Bethesda IV is usually benign",
    ],
    correctAnswer: 1,
    explanation:
      "Bethesda Category IV (follicular neoplasm/suspicious for follicular neoplasm) carries a malignancy risk of 25–40% (Bethesda 2017). FNA cannot distinguish follicular adenoma from follicular carcinoma — that requires histologic examination of the full capsule (capsular and vascular invasion = carcinoma). Options: (1) Molecular testing (ThyroSeq v3 or Afirma Genomic Sequencer) — if 'benign' result: observe with serial US; if 'suspicious/malignant': operate. (2) Diagnostic hemithyroidectomy (lobectomy + isthmus) — provides definitive tissue diagnosis. For a 6 cm nodule, many surgeons would proceed directly to hemithyroidectomy. If final pathology shows follicular carcinoma > 4 cm or high-risk features → completion thyroidectomy. Total thyroidectomy + central neck dissection is appropriate for confirmed papillary thyroid cancer with lymphadenopathy, not initial management of follicular neoplasm.",
    topic: "Thyroid Nodule — Bethesda Classification",
    difficulty: "hard",
  },
  {
    id: "gs-q-010",
    rotation: "general-surgery",
    question:
      "A 66-year-old man with DM2, CHF, and chronic kidney disease (CrCl 28 mL/min) undergoes elective right hemicolectomy. His Caprini VTE risk score is 7 (high risk). What is the most appropriate VTE prophylaxis strategy for this patient?",
    options: [
      "Sequential compression devices (SCDs) alone — pharmacological prophylaxis contraindicated with CKD",
      "Heparin 5,000 units subcutaneously every 8 hours + SCDs, with extended prophylaxis for 28 days post-discharge with LMWH",
      "Enoxaparin 40 mg daily — safe in CKD and sufficient for high-risk patient",
      "Rivaroxaban orally starting post-op day 1",
      "No prophylaxis needed as patient will be ambulatory by post-op day 1",
    ],
    correctAnswer: 1,
    explanation:
      "Caprini score ≥ 5 = highest VTE risk; colorectal cancer surgery patients have the highest VTE risk of all surgical patients. ACCP guidelines recommend: (1) dual mechanical + pharmacological prophylaxis (SCDs + LMWH or UFH), (2) extended prophylaxis for 28 days post-discharge in colorectal cancer surgery (reduces VTE by ~60%). With CrCl 28 mL/min, enoxaparin accumulates (dose-adjust to 30 mg daily or measure anti-Xa levels) — unfractionated heparin (UFH) 5,000 units SC q8h is preferred in CKD (< 30 mL/min) as it is not renally cleared. UFH q8h has been shown superior to q12h dosing in high-risk patients. Rivaroxaban lacks robust post-operative data in high Caprini-score patients and is not recommended for initial VTE prophylaxis in this setting.",
    topic: "VTE Prophylaxis / Caprini Score",
    difficulty: "hard",
  },
  {
    id: "gs-q-011",
    rotation: "general-surgery",
    question:
      "A 29-year-old woman is brought to the ED with a 1-hour history of severe abdominal pain and hemodynamic instability (BP 82/50, HR 128). She is diaphoretic and has peritoneal signs diffusely. She is β-hCG positive (LMP 6 weeks ago). Transvaginal ultrasound shows no intrauterine pregnancy and a large amount of free fluid in the pelvis. What is the immediate next step?",
    options: [
      "Methotrexate IM — medical management is appropriate for early ectopic pregnancy",
      "CT abdomen/pelvis to confirm diagnosis before proceeding to OR",
      "Emergent operative intervention (laparoscopy or laparotomy) for ruptured ectopic pregnancy",
      "Serial β-hCG levels — repeat in 48 hours to confirm appropriate rise or fall",
      "Diagnostic laparoscopy only — no need for operative management if patient stabilizes",
    ],
    correctAnswer: 2,
    explanation:
      "This is a ruptured ectopic pregnancy — a surgical emergency. Positive β-hCG + no intrauterine pregnancy on TVUS + hemodynamic instability + peritoneal signs + free pelvic fluid = ruptured ectopic. Immediate management: (1) Two large-bore IVs, blood type and crossmatch, activate massive transfusion protocol if needed, (2) Emergent operative intervention — laparoscopy preferred if hemodynamically stable; laparotomy if severely unstable. Methotrexate is contraindicated in ruptured ectopic (requires hemodynamic stability, no rupture, and β-hCG < 5,000–10,000 mIU/mL). Delaying surgery for CT or serial β-hCG is inappropriate and potentially fatal in the setting of hemodynamic instability.",
    topic: "Ectopic Pregnancy / Surgical Emergency",
    difficulty: "easy",
  },
  {
    id: "gs-q-012",
    rotation: "general-surgery",
    question:
      "A surgeon is planning to perform an elective laparoscopic cholecystectomy on a patient with symptomatic cholelithiasis. Which of the following represents the correct timing and choice of antibiotic for surgical prophylaxis?",
    options: [
      "Cefazolin 2 g IV administered 30–60 minutes before skin incision",
      "Metronidazole 500 mg IV administered 2 hours before skin incision",
      "Ciprofloxacin 400 mg IV administered the morning of surgery",
      "Vancomycin 1 g IV at the time of skin incision",
      "No prophylaxis needed — laparoscopic cholecystectomy is a clean procedure",
    ],
    correctAnswer: 0,
    explanation:
      "SSI prevention guidelines (CDC/SHEA): Cefazolin (first-generation cephalosporin) is the agent of choice for most elective abdominal procedures including cholecystectomy. Dosing: 2 g IV for patients < 120 kg; 3 g IV for ≥ 120 kg. Timing: within 60 minutes of skin incision (optimal: 30 minutes prior). Redose intraoperatively if case > 4 hours or blood loss > 1,500 mL. For penicillin allergy (non-anaphylactic): clindamycin + aminoglycoside or aztreonam. Laparoscopic cholecystectomy is a clean-contaminated procedure (opening the biliary system), not a clean procedure — prophylaxis is recommended. Metronidazole alone provides only anaerobic coverage; vancomycin is reserved for known MRSA or β-lactam allergy with anaphylaxis history.",
    topic: "Surgical Prophylaxis / SSI Prevention",
    difficulty: "easy",
  },
  {
    id: "gs-q-013",
    rotation: "general-surgery",
    question:
      "A 76-year-old man is found to have an 8 cm infrarenal abdominal aortic aneurysm (AAA) on ultrasound performed for another indication. He is hypertensive and a current smoker. He is asymptomatic. What is the most appropriate management?",
    options: [
      "Observation with annual ultrasound — intervene only when symptomatic",
      "Endovascular aortic repair (EVAR) — preferred for most patients with favorable anatomy",
      "Open surgical repair — required for all AAA > 5.5 cm",
      "Beta-blocker therapy to reduce rate of expansion",
      "CT angiography to confirm size, then elective EVAR or open repair within 2 weeks",
    ],
    correctAnswer: 4,
    explanation:
      "Indications for elective AAA repair: diameter ≥ 5.5 cm in men (≥ 5.0 cm in women), growth rate > 0.5 cm in 6 months, or symptomatic (pain, distal embolism). This patient has an 8 cm AAA — well above the repair threshold. Next step: CT angiography of the aorta with 3D reconstruction to assess anatomy (neck length, angulation, iliac involvement) and determine eligibility for EVAR vs open repair. EVAR is preferred when anatomy is favorable (suitable neck length ≥ 15 mm, adequate iliac access) — associated with lower 30-day mortality (1.7% vs 4.7% for open), shorter hospital stay, and faster recovery. Open repair is preferred for younger patients (< 60 years), unsuitable anatomy, or connective tissue disorders. Smoking cessation and blood pressure control are adjuncts but do not substitute for repair at this size.",
    topic: "Abdominal Aortic Aneurysm",
    difficulty: "medium",
  },
  {
    id: "gs-q-014",
    rotation: "general-surgery",
    question:
      "A 44-year-old woman undergoes laparoscopic cholecystectomy. During intraoperative cholangiography, a filling defect is identified in the common bile duct, consistent with a CBD stone. The patient was not jaundiced preoperatively. What is the most appropriate intraoperative management?",
    options: [
      "Proceed to laparoscopic common bile duct exploration (LCBDE) if surgical expertise is available; otherwise, place a drain and plan post-operative ERCP",
      "Abandon the cholecystectomy and plan ERCP as a separate procedure",
      "Convert to open surgery — all CBD explorations require an open approach",
      "Flush the CBD with saline and hope the stone passes — small stones are often asymptomatic",
      "Complete cholecystectomy only and discharge — CBD stones always pass spontaneously",
    ],
    correctAnswer: 0,
    explanation:
      "Intraoperative cholangiogram (IOC) revealing a CBD stone during laparoscopic cholecystectomy can be managed in two ways depending on surgeon expertise and institutional resources: (1) Laparoscopic common bile duct exploration (LCBDE) — transcystic approach (stone < 8 mm, cystic duct accessible) or choledochotomy (larger stones or complex anatomy). Equivalent outcomes to ERCP but clears the duct in a single anesthetic event. (2) Post-operative ERCP — the drain is placed and ERCP performed within 24–72 hours. Both are acceptable. Cholecystectomy should be completed in either case. IOC findings change management and prevent retained CBD stones, which can cause cholangitis, biliary obstruction, or pancreatitis post-operatively.",
    topic: "Choledocholithiasis / Intraoperative Management",
    difficulty: "hard",
  },
  {
    id: "gs-q-015",
    rotation: "general-surgery",
    question:
      "A 58-year-old man with a 40-pack-year smoking history and BMI of 38 is scheduled for open Whipple procedure (pancreaticoduodenectomy) for pancreatic head adenocarcinoma. Preoperatively, which of the following ERAS (Enhanced Recovery After Surgery) protocol elements is most evidence-based in reducing complications and length of stay?",
    options: [
      "Prolonged pre-operative fasting (NPO after midnight for solids and liquids)",
      "Carbohydrate loading drinks 2 hours before surgery and early oral intake post-operatively",
      "Routine nasogastric tube placement for 3–5 days post-operatively",
      "Routine post-operative opioid PCA without multimodal analgesia",
      "Delayed ambulation until post-operative day 3 to protect the pancreatic anastomosis",
    ],
    correctAnswer: 1,
    explanation:
      "ERAS (Enhanced Recovery After Surgery) protocols are evidence-based bundles that reduce post-operative complications, ileus, and length of stay. Key pre-operative elements: (1) Pre-operative carbohydrate loading: clear carbohydrate drinks up to 2 hours before surgery (e.g., Gatorade, ClearFast) — reduces insulin resistance, attenuates catabolic stress response, reduces nausea. Solids can be eaten up to 6 hours prior. (2) ERAS intraoperative: minimize fluid overload, maintain normothermia, short-acting anesthetics. (3) ERAS post-operative: early oral intake (liquids day 0, solids day 1–2), early ambulation (day 1), multimodal analgesia (acetaminophen + NSAIDs + regional block), avoid routine NGT decompression. Routine NGT placement and prolonged fasting are outdated practices not consistent with ERAS principles and are associated with worse outcomes.",
    topic: "ERAS Protocol",
    difficulty: "medium",
  },
  {
    id: "gs-q-016",
    rotation: "general-surgery",
    question:
      "A 70-year-old woman presents with a wound that has become increasingly painful, red, and swollen 24 hours after an elective right inguinal hernia repair. She is febrile (39.6°C), tachycardic (HR 118), and hypotensive (BP 88/52). The wound has a grayish, necrotic-appearing skin with bullae and crepitus on palpation. Lab: WBC 22,000, Na 130, Cr 2.1, glucose 180, Hgb 10.2. What is the most appropriate immediate management?",
    options: [
      "Broad-spectrum IV antibiotics alone — wound debridement can wait until culture results",
      "CT scan of the soft tissues to confirm diagnosis before taking to the OR",
      "Emergent surgical debridement, broad-spectrum IV antibiotics, and ICU admission",
      "Wound opening at bedside, packing, and observation for 24 hours",
      "Hyperbaric oxygen therapy as primary treatment",
    ],
    correctAnswer: 2,
    explanation:
      "This is necrotizing fasciitis (NF) — a rapidly spreading, life-threatening infection of the subcutaneous fascial planes. The LRINEC score ≥ 6 (CRP > 150, WBC > 15, Hgb < 13.5, Na < 135, Cr > 1.6, glucose > 180) suggests high risk for NF; this patient has multiple criteria elevated. Clinical signs: fever, pain, necrotic skin, bullae, crepitus (gas-forming organisms). Management: Immediate (do NOT delay for CT or cultures) surgical debridement until healthy viable tissue with bleeding margins is reached. Surgery is often repeated every 24–48 hours. Simultaneously: broad-spectrum antibiotics (vancomycin + piperacillin-tazobactam + clindamycin for antitoxin effect) + ICU admission + aggressive fluid resuscitation. CT may confirm gas tracking along fascial planes but MUST NOT delay surgery in an unstable patient. Mortality is 20–40% even with prompt treatment.",
    topic: "Necrotizing Fasciitis / SSI",
    difficulty: "hard",
  },
  {
    id: "gs-q-017",
    rotation: "general-surgery",
    question:
      "A 27-year-old woman presents to clinic with a firm, mobile, well-circumscribed, non-tender breast mass measuring 2.5 cm in the upper outer quadrant of the right breast. She has no family history of breast cancer. RUQ ultrasound shows a homogeneous hypoechoic mass with well-defined margins and a BI-RADS 3 assessment. What is the most appropriate next step?",
    options: [
      "Reassurance — BI-RADS 3 is benign; annual screening mammogram",
      "Fine-needle aspiration (FNA) cytology immediately",
      "Short-interval ultrasound follow-up at 6 months; core needle biopsy if growing",
      "Immediate excisional biopsy",
      "MRI of the breast for further characterization",
    ],
    correctAnswer: 2,
    explanation:
      "BI-RADS 3 = probably benign; malignancy risk < 2%. The standard management is short-interval imaging follow-up: repeat ultrasound at 6 months, then 12 months, then 24 months. If stable × 2 years → downgrade to BI-RADS 2. If the lesion enlarges, becomes irregular, or develops suspicious features → upgrade to BI-RADS 4 and perform core needle biopsy. In a 27-year-old with a well-circumscribed, mobile, non-tender mass, the most likely diagnosis is fibroadenoma. Core needle biopsy is appropriate for BI-RADS 4 and above. FNA is less preferred for solid lesions (inadequate sampling for follicular neoplasm differentiation). Excisional biopsy would be appropriate for BI-RADS 5 or growing lesions.",
    topic: "Breast Mass Evaluation / BI-RADS",
    difficulty: "easy",
  },
  {
    id: "gs-q-018",
    rotation: "general-surgery",
    question:
      "A 52-year-old man with known peptic ulcer disease presents to the ED with sudden onset severe abdominal pain. He appears in acute distress, with board-like rigidity and absent bowel sounds. CXR shows free air under the right hemidiaphragm. He is hemodynamically stable. What is the definitive management?",
    options: [
      "IV proton pump inhibitor and H. pylori eradication therapy — conservative management",
      "Upper endoscopy to identify the source of perforation",
      "Emergent laparoscopic or open surgical repair (Graham patch omental repair)",
      "Nasogastric suction, IV fluids, and broad-spectrum antibiotics — observational management with serial abdominal exams",
      "CT with oral contrast to confirm perforation site before proceeding to OR",
    ],
    correctAnswer: 2,
    explanation:
      "Free air under the diaphragm + peritoneal signs (board-like rigidity, absent bowel sounds) = perforated viscus — surgical emergency requiring emergent exploration. For perforated peptic ulcer (most commonly duodenal, less commonly gastric), the standard repair is Graham patch omentoplasty: the perforation is closed with interrupted sutures and the omental patch is placed over the repair. Laparoscopic approach has equivalent outcomes to open in experienced hands. Post-operatively: IV PPI, H. pylori testing and eradication (CLO test on biopsied tissue or serology), NSAID discontinuation. Observational management (Taylor's method — NGT, antibiotics, PPI) is only appropriate for stable patients with a contained perforation (no free air) with prior contrast imaging confirming no leak. CT scan should not delay surgical management in a patient with peritonitis.",
    topic: "Perforated Peptic Ulcer",
    difficulty: "medium",
  },
  {
    id: "gs-q-019",
    rotation: "general-surgery",
    question:
      "During an inguinal hernia repair, the surgeon inadvertently transects the ilioinguinal nerve. Which deficit should the patient be counseled about post-operatively?",
    options: [
      "Loss of cremasteric reflex on the ipsilateral side",
      "Ipsilateral loss of sensation over the scrotum/labia, medial thigh, and base of penis/mons pubis",
      "Weakness of hip flexion",
      "Loss of sensation over the lateral thigh (meralgia paresthetica)",
      "Erectile dysfunction",
    ],
    correctAnswer: 1,
    explanation:
      "The ilioinguinal nerve (L1) traverses the inguinal canal and exits through the superficial inguinal ring, providing sensory innervation to the medial thigh, anterior scrotum (in males) or labia majora (in females), and the base of the penis or mons pubis. Injury during inguinal herniorrhaphy causes numbness/hypoesthesia in these distributions — the most common nerve injury in inguinal hernia repair (~12–15%). The genitofemoral nerve provides motor innervation to the cremaster muscle (cremasteric reflex) — injury causes loss of the ipsilateral cremasteric reflex. The lateral femoral cutaneous nerve (L2–L3) supplies the lateral thigh — injury causes meralgia paresthetica, which occurs with pelvic retraction (not inguinal hernia repair). The ilioinguinal nerve is purely sensory.",
    topic: "Inguinal Hernia — Anatomical Considerations",
    difficulty: "medium",
  },
  {
    id: "gs-q-020",
    rotation: "general-surgery",
    question:
      "A 33-year-old man is undergoing elective laparoscopic appendectomy for acute appendicitis. Which of the following is a contraindication to non-operative antibiotic management of uncomplicated acute appendicitis based on current evidence?",
    options: [
      "Age > 50 years",
      "Alvarado score ≥ 7",
      "Appendicolith present on CT",
      "WBC > 15,000",
      "Pain duration > 24 hours",
    ],
    correctAnswer: 2,
    explanation:
      "Non-operative management (NOM) of uncomplicated acute appendicitis with IV antibiotics followed by oral antibiotics has a 72% success rate at 1 year (APPAC trial). However, the presence of an appendicolith (calcified fecalith) on CT is associated with a significantly higher failure rate (40–60%) and a higher risk of perforation and recurrence — it is considered a relative to absolute contraindication to NOM in most protocols. Other contraindications: perforation/peritonitis, abscess or phlegmon > 3 cm (complex appendicitis), inability to tolerate oral antibiotics, immunocompromised state. Age > 50 is a relative consideration (higher risk of perforated appendicitis and alternate diagnoses), not a contraindication. WBC elevation and Alvarado score are diagnostic aids, not contraindications to NOM.",
    topic: "Appendicitis — Non-operative Management",
    difficulty: "medium",
  },
];
