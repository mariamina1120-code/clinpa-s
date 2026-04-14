// @ts-nocheck
import type { Condition } from "@/types";

export const generalSurgeryConditions: Condition[] = [
  {
    id: "gs-appendicitis",
    name: "Acute Appendicitis",
    icdCode: "K37",
    rotation: "general-surgery",
    category: "Acute Abdomen",
    definition: "Acute inflammation of the vermiform appendix, most commonly caused by luminal obstruction from a fecalith, lymphoid hyperplasia, or, rarely, tumor. Obstruction leads to bacterial overgrowth, distension, ischemia, and ultimately perforation if untreated.",
    diagnosticCriteria: {
      clinical: "Alvarado score ≥7 (score: migration of pain to RLQ 1pt, anorexia 1pt, nausea/vomiting 1pt, RLQ tenderness 2pt, rebound tenderness 1pt, elevated temp 1pt, leukocytosis 2pt, leukocyte shift 1pt). CT abdomen/pelvis with IV contrast is gold standard imaging (sensitivity 94%, specificity 95%). Ultrasound first-line in children and pregnant women.",
      labs: "Leukocytosis (WBC 10,000–18,000) with left shift; CRP elevated; urinalysis may show few WBCs (proximity to ureter) — not diagnostic of UTI in this context",
      imaging: "CT: dilated appendix >6 mm, periappendiceal fat stranding, appendicolith (30%), wall thickening >2 mm. US: non-compressible appendix >6 mm, McBurney's point tenderness with probe"
    },
    presentation: {
      chiefComplaint: ["periumbilical pain that migrates to RLQ", "nausea", "loss of appetite", "fever"],
      associatedSymptoms: ["anorexia (most reliable symptom — if patient is hungry, think twice)", "nausea and vomiting (after pain onset)", "low-grade fever 37.5–38.5°C", "diarrhea with pelvic appendix", "dysuria with retrocecal appendix"],
      demographics: "Peak incidence ages 10–30; lifetime risk 7–8% (M>F). Rare in infants (<5 years), but when occurs, perforation rate >80% due to diagnostic difficulty."
    },
    distinguishingFeatures: "Classic: periumbilical pain → RLQ migration over 12–24 hours. McBurney's point tenderness (2/3 distance from umbilicus to ASIS). Rovsing's sign (RLQ pain with palpation of LLQ). Psoas sign (RLQ pain with right hip extension — retrocecal appendix). Obturator sign (RLQ pain with internal rotation of flexed right hip — pelvic appendix).",
    redFlags: [
      "Perforation signs: temperature >38.5°C, WBC >18,000, diffuse peritonitis (rigid abdomen, guarding, rebound throughout)",
      "Appendiceal mass/phlegmon or abscess (palpable RLQ mass — may alter surgical approach)",
      "Elderly or immunosuppressed patients: may present with subtle symptoms; perforation at presentation is more common",
      "Pregnancy: appendix displaced superolaterally — pain may be in RUQ; maternal and fetal mortality risk"
    ],
    mnemonics: ["MANTRELS / Alvarado: Migration, Anorexia, Nausea, Tenderness RLQ, Rebound, Elevated temp, Leukocytosis, Shift to left"],
    pimpingQuestions: [
      "What is McBurney's point? — 1/3 of the way from the ASIS to the umbilicus (or 2/3 from umbilicus to ASIS)",
      "What is Rovsing's sign and why does it occur? — LLQ pressure causes RLQ pain; peritoneal stretch transmits pain to the inflamed appendix",
      "What are indications for non-operative (antibiotic) management of appendicitis? — Uncomplicated appendicitis, no fecalith, patient preference after counseling; antibiotics (IV cefoxitin or pip-tazo) ×3–5 days; 20–30% will fail and require appendectomy within 5 years",
      "How does perforation change management? — Stable perforated appendicitis with contained abscess: IV antibiotics + percutaneous drainage, interval appendectomy 6–8 weeks later; unstable or diffuse peritonitis: emergent appendectomy"
    ]
  },
  {
    id: "gs-cholecystitis",
    name: "Acute Cholecystitis",
    icdCode: "K81.0",
    rotation: "general-surgery",
    category: "Biliary",
    definition: "Acute inflammation of the gallbladder, most commonly from obstruction of the cystic duct by a gallstone (calculous cholecystitis, 90–95%). Acalculous cholecystitis (5–10%) occurs in critically ill patients (ICU, sepsis, prolonged fasting, TPN) from biliary stasis and ischemia.",
    diagnosticCriteria: {
      clinical: "Tokyo Guidelines 2018: Local signs (Murphy's sign, RUQ mass/pain/tenderness) + Systemic inflammation (fever, elevated CRP/WBC) + Confirmatory imaging (gallstones with gallbladder wall thickening or pericholecystic fluid on US)",
      labs: "WBC elevated (12,000–15,000), CRP elevated, mild elevation of LFTs (not as elevated as in choledocholithiasis), normal or mildly elevated bilirubin",
      imaging: "RUQ ultrasound (first-line): gallstones + gallbladder wall thickening >4 mm + pericholecystic fluid + sonographic Murphy's sign (maximal tenderness over GB with ultrasound probe). HIDA scan (cholescintigraphy): non-visualization of gallbladder at 1 hour (cystic duct obstruction) — gold standard when US equivocal"
    },
    presentation: {
      chiefComplaint: ["RUQ pain", "epigastric pain", "nausea and vomiting", "fever"],
      associatedSymptoms: ["RUQ pain >6 hours (distinguishes from biliary colic which resolves in 1–6 hours)", "fever (distinguishes from uncomplicated colic)", "nausea/vomiting", "radiation to right shoulder/scapula (diaphragmatic irritation — phrenic nerve, C3–C5)", "fatty food intolerance"],
      demographics: "4 Fs: Fat, Fertile, Forty, Female. Also: rapid weight loss, hemolytic disease (pigment stones — sickle cell, hereditary spherocytosis), Crohn's disease (impaired bile acid reabsorption), TPN use."
    },
    distinguishingFeatures: "Murphy's sign: inspiratory arrest with RUQ palpation (pain from GB descending onto palpating hand). Biliary colic: transient (1–6 hours), no fever, no Murphy's. Cholecystitis: >6 hours, fever, positive Murphy's sign, positive US. Choledocholithiasis: Charcot's triad (RUQ pain + fever + jaundice). Cholangitis: Reynolds' pentad (Charcot's + hypotension + altered mental status — emergency).",
    redFlags: [
      "Gangrenous cholecystitis: diabetics, elderly, immunosuppressed; septic-appearing; emergency cholecystectomy",
      "Emphysematous cholecystitis: gas in GB wall on CT (E. coli, Clostridium); diabetic males; 15% mortality; emergency surgery",
      "Gallbladder perforation: free bile peritonitis or pericholecystic abscess",
      "Mirizzi syndrome: gallstone in cystic duct compressing common hepatic duct — can mimic cholangiocarcinoma on imaging"
    ],
    mnemonics: ["4 Fs of gallstones: Fat, Fertile, Forty, Female", "Charcot's triad: Fever + RUQ pain + Jaundice = choledocholithiasis", "Reynolds' pentad: Charcot's + Hypotension + AMS = cholangitis emergency"],
    pimpingQuestions: [
      "What is the definitive treatment for acute cholecystitis? — Laparoscopic cholecystectomy. Early (within 24–72 hours) is preferred over delayed (reduced conversion to open, shorter hospital stay, lower complication rate per Tokyo Guidelines TG18).",
      "When is cholecystostomy tube performed instead of cholecystectomy? — High surgical risk patient (Tokyo Grade III — organ failure, severe comorbidities); percutaneous cholecystostomy decompresses the GB as a bridge to surgery or definitive therapy.",
      "What is the difference between biliary colic and acute cholecystitis? — Colic: transient cystic duct obstruction, pain resolves <6h, no fever, no Murphy's, no GB wall changes on US. Cholecystitis: sustained obstruction >6h, fever, positive Murphy's, GB wall thickening on US."
    ]
  },
  {
    id: "gs-bowel-obstruction",
    name: "Small Bowel Obstruction (SBO)",
    icdCode: "K56.69",
    rotation: "general-surgery",
    category: "Acute Abdomen",
    definition: "Mechanical obstruction of the small intestinal lumen, preventing normal passage of bowel contents. Leads to proximal bowel distension, vomiting, electrolyte abnormalities, bacterial overgrowth, and if untreated, bowel ischemia and perforation. Functional obstruction (ileus) must be distinguished from mechanical SBO.",
    diagnosticCriteria: {
      clinical: "Clinical triad: colicky abdominal pain + nausea/vomiting + abdominal distension + obstipation (inability to pass gas or stool). History of prior abdominal surgery (adhesions — most common cause).",
      labs: "BMP (electrolytes — vomiting causes hypokalemia, metabolic alkalosis), CBC (leukocytosis with strangulation), LFTs, lactate (elevated with ischemia/strangulation — critically important)",
      imaging: "Supine and upright AXR: dilated small bowel loops (>3 cm), air-fluid levels at different heights (ladder pattern), absence of gas in colon/rectum. CT abdomen/pelvis with oral ± IV contrast: transition point (site of obstruction), bowel wall thickening/pneumatosis intestinalis (ischemia), free fluid, causative lesion (mass, hernia, volvulus)"
    },
    presentation: {
      chiefComplaint: ["colicky abdominal pain", "nausea and vomiting (bilious initially)", "abdominal distension", "inability to pass gas or stool"],
      associatedSymptoms: ["hyperactive then absent bowel sounds (early: high-pitched, rushing; late: absent — complete obstruction)", "dehydration from vomiting", "feculent vomiting (late — bacterial overgrowth)", "fever (strangulation — ominous sign)"],
      demographics: "Most common causes by frequency: (1) Adhesions 60–75% (prior abdominal/pelvic surgery), (2) Hernias 10–15% (inguinal, femoral, umbilical, incisional), (3) Malignancy 5–10% (colon cancer most common — right colon presents as SBO), (4) Crohn's disease 5%, (5) Volvulus, intussusception."
    },
    distinguishingFeatures: "Partial SBO: some gas passes distally — patient may pass flatus. Complete SBO: no gas beyond obstruction. Strangulation (closed loop obstruction): blood supply compromised — fever, peritoneal signs, elevated lactate, leukocytosis >20,000 — surgical emergency. Ileus: distension + absent bowel sounds + bowel gas in entire GI tract (including colon/rectum) — no mechanical transition point on CT.",
    redFlags: [
      "Signs of strangulation/ischemia: fever, peritoneal signs, elevated lactate, WBC >20,000, bloody per rectum — emergent surgery",
      "Complete SBO not resolving with 24–48 hours of NGT decompression — surgery required",
      "Closed-loop obstruction on CT (single point of fixation, C-shaped or U-shaped bowel loop) — very high risk of strangulation",
      "Hernia with SBO — check all hernia orifices; incarcerated hernia requires urgent surgery"
    ],
    mnemonics: ["ABCDE of SBO: Adhesions, Bowel cancer, Crohn's, Diverticula/Defects (hernias), External compression"],
    pimpingQuestions: [
      "What is the initial management of SBO? — NPO, IV fluids, nasogastric tube decompression (reduces vomiting, decompresses proximal bowel), correct electrolytes, Foley catheter for UO monitoring. Serial exams every 4–6 hours. Water-soluble contrast (Gastrografin) via NGT — diagnostic and therapeutic (hyperosmolar effect promotes bowel transit, reduces need for surgery by 40%).",
      "What are absolute indications for immediate surgery in SBO? — Peritonitis, strangulation, complete obstruction failing non-operative management >24–48h, closed-loop obstruction, irreducible hernia with obstruction.",
      "How do you differentiate SBO from large bowel obstruction (LBO) on AXR? — SBO: central dilated loops with valvulae conniventes crossing entire bowel width. LBO: peripheral loops with haustral folds that partially cross the bowel lumen, cecum and colon dilated."
    ]
  },
  {
    id: "gs-hernia-inguinal",
    name: "Inguinal Hernia",
    icdCode: "K40.90",
    rotation: "general-surgery",
    category: "Hernia",
    definition: "Protrusion of abdominal contents (omentum, small bowel, occasionally colon or bladder) through a defect in the inguinal canal. Direct hernias protrude through a weakness in the posterior wall of the inguinal canal (Hesselbach's triangle — medial to inferior epigastric vessels); indirect hernias pass through the internal inguinal ring (lateral to inferior epigastric vessels) and follow the path of the spermatic cord.",
    diagnosticCriteria: {
      clinical: "Clinical diagnosis: reducible bulge in the inguinal/groin region that appears with Valsalva (cough, straining) and reduces with supine position or gentle pressure. Examination: patient standing + Valsalva — palpate the external inguinal ring.",
      labs: "None required for uncomplicated inguinal hernia",
      imaging: "Ultrasound if diagnosis uncertain or hernia not clinically apparent. CT or MRI for occult or complex hernias."
    },
    presentation: {
      chiefComplaint: ["inguinal bulge", "groin discomfort with activity", "dull aching pain in groin or scrotum"],
      associatedSymptoms: ["bulge that increases with standing, coughing, straining", "discomfort relieved by lying down (hernia reduces)", "nausea/vomiting if incarcerated", "severe pain if strangulated"],
      demographics: "Lifetime risk: 27% in men, 3% in women. Direct: older men (floor weakness from aging). Indirect: all ages (congenital patent processus vaginalis), most common hernia in both sexes overall."
    },
    distinguishingFeatures: "Hesselbach's triangle landmarks: medially — lateral border of rectus abdominis; superolaterally — inferior epigastric vessels; inferiorly — inguinal ligament. Direct hernia: protrudes through triangle (medial to epigastric vessels) — directly forward. Indirect hernia: enters internal ring lateral to epigastric vessels, passes through inguinal canal. Femoral hernia: below inguinal ligament, medial to femoral vein — more common in women; highest incarceration/strangulation risk of all groin hernias.",
    redFlags: [
      "Incarceration: hernia cannot be reduced — risk of strangulation. Tender, non-reducible bulge with nausea/vomiting",
      "Strangulation: blood supply to herniated contents is compromised — surgical emergency. Severe pain, fever, overlying skin erythema, hemodynamic instability",
      "Femoral hernia: small neck size makes incarceration and strangulation more common than inguinal hernias"
    ],
    mnemonics: ["MDs don't LIe: Direct hernia = Medial to epigastric vessels; inDirect hernia = Lateral to epigastric vessels (LIE)", "Femoral canal contents NAVEL: Nerve, Artery, Vein, Empty space, Lymphatics — femoral hernia through empty space"],
    pimpingQuestions: [
      "What is the definitive treatment for symptomatic inguinal hernia? — Surgical repair. Laparoscopic (TAPP or TEP) vs. open tension-free mesh repair (Lichtenstein — most common open technique). Laparoscopic preferred for bilateral hernias and recurrent hernias after open repair.",
      "When can watchful waiting be offered? — Asymptomatic or minimally symptomatic men with reducible inguinal hernias (WW trial showed 0.3% annual incarceration risk — surgery can be deferred with careful monitoring). Watchful waiting NOT recommended for femoral hernias (high incarceration risk).",
      "What is the boundaries of Hesselbach's triangle? — Medial: lateral border of rectus abdominis. Lateral: inferior epigastric vessels. Inferior: inguinal ligament (Poupart's ligament)."
    ]
  },
  {
    id: "gs-colorectal-cancer",
    name: "Colorectal Cancer",
    icdCode: "C18.9",
    rotation: "general-surgery",
    category: "Colorectal",
    definition: "Malignant neoplasm of the colon or rectum, most commonly adenocarcinoma (95%) arising from adenomatous polyps via the adenoma-carcinoma sequence. Most colorectal cancers arise from tubular or villous adenomas through accumulation of somatic mutations (APC → KRAS → SMAD4 → TP53 — Vogelstein model). Occurs sporadically (75%), with familial predisposition (20%), or in the setting of hereditary syndromes (5%).",
    diagnosticCriteria: {
      clinical: "Colonoscopy with biopsy (gold standard for diagnosis). Right-sided colon cancers: often occult bleeding, anemia, large mass. Left-sided and sigmoid: change in bowel habits, narrowing stool caliber, overt rectal bleeding. Rectal cancers: hematochezia, tenesmus, rectal pain.",
      labs: "CBC (microcytic anemia from occult blood loss — especially right-sided); CEA (carcinoembryonic antigen — NOT diagnostic, used for monitoring recurrence after resection; elevated in 60% of CRC); LFTs (hepatic metastases); CMP",
      imaging: "CT chest/abdomen/pelvis with contrast for staging (primary tumor, LN, liver/lung metastases). PET-CT for surveillance after resection. MRI pelvis for rectal cancer staging (T staging, circumferential resection margin, mesorectal integrity)."
    },
    presentation: {
      chiefComplaint: ["rectal bleeding or blood in stool", "change in bowel habits", "abdominal pain", "unintentional weight loss", "iron deficiency anemia (often asymptomatic)"],
      associatedSymptoms: ["right-sided: occult blood loss, iron deficiency anemia, RLQ mass, rarely obstruction (wide lumen)", "left-sided/sigmoid: change in stool caliber (pencil-thin stools), constipation alternating with diarrhea, bright red blood per rectum, obstruction", "rectal cancer: hematochezia, tenesmus (feeling of incomplete evacuation), rectal fullness, rectal pain (late)"],
      demographics: "Average age at diagnosis ~67 years; equally male and female. Risk factors: personal/family history of adenomas or CRC, IBD (UC > Crohn's — risk after 10 years of disease), hereditary syndromes (Lynch, FAP, MUTYH-associated polyposis), obesity, red/processed meat, alcohol, smoking, T2DM."
    },
    distinguishingFeatures: "Lynch syndrome (HNPCC): autosomal dominant; MLH1/MSH2/MSH6/PMS2 germline mutations; CRC before age 50, right-sided predominance, synchronous or metachronous tumors, extracolonic cancers (endometrial most common, ovarian, gastric, urinary tract). Amsterdam II criteria. FAP: APC gene mutation; hundreds to thousands of colonic polyps; 100% CRC risk by age 40 without prophylactic colectomy; extracolonic manifestations (desmoid tumors, CHRPE — congenital hypertrophy of retinal pigment epithelium, osteomas — Gardner syndrome).",
    redFlags: [
      "Obstruction: acute presentation with complete LBO — emergency colostomy or resection",
      "Perforation: peritonitis from tumor perforation — emergency surgery, highest morbidity",
      "Hepatic metastases: present in 20% at diagnosis; 5-year survival with resectable liver mets is 25–40% with surgery + chemotherapy",
      "Rectal bleeding in patient >50 without recent colonoscopy — always colonoscope, never assume hemorrhoids without visualizing colon"
    ],
    mnemonics: ["Vogelstein sequence: APC → KRAS → SMAD4 → p53 (A-K-S-P: 'All Kids Should Pass')", "Lynch syndrome cancers: Colon, Endometrium, Ovary, Stomach, Urinary tract (CEO-SU)"],
    pimpingQuestions: [
      "What is the staging system for colorectal cancer and surgical approach? — TNM staging (T1–T4, N0–N2, M0–M1). T1–T2, N0: segmental colectomy ± adjuvant chemotherapy. T3–T4 or N+: resection + FOLFOX adjuvant chemotherapy. M1 (metastatic): FOLFOX or FOLFIRI ± targeted therapy (bevacizumab for RAS wildtype). Rectal cancer: neoadjuvant chemoradiation → TME (total mesorectal excision) → adjuvant chemotherapy.",
      "What is CEA used for? — Not for diagnosis (poor sensitivity/specificity). Used preoperatively as a baseline and for postoperative surveillance of recurrence. Rising CEA after curative resection = recurrence until proven otherwise → CT scan + PET-CT + possible repeat surgery for resectable disease.",
      "What is the Lynch syndrome screening approach? — MMR immunohistochemistry (MLH1, MSH2, MSH6, PMS2) on ALL colorectal cancer specimens — universal testing is standard. Loss of expression → germline testing. MLH1 loss: check BRAF V600E mutation (somatic = no germline; wild-type MLH1 + normal BRAF = suspect Lynch syndrome germline mutation)."
    ]
  },
  {
    id: "gs-pancreatitis",
    name: "Acute Pancreatitis",
    icdCode: "K85.90",
    rotation: "general-surgery",
    category: "Pancreatic",
    definition: "Acute inflammatory process of the pancreas with variable involvement of peripancreatic tissues and distant organ systems. Results from premature activation of pancreatic enzymes (particularly trypsinogen → trypsin) within pancreatic acinar cells, causing autodigestion and a local and systemic inflammatory cascade.",
    diagnosticCriteria: {
      clinical: "Atlanta Criteria (revised 2012): 2 of 3: (1) Characteristic abdominal pain (epigastric, radiating to back, constant, severe); (2) Serum lipase or amylase ≥3× upper limit of normal; (3) Characteristic CT findings (pancreatic edema, peripancreatic fat stranding, necrosis).",
      labs: "Lipase (more specific than amylase for pancreatitis; remains elevated longer). Amylase (rises faster but normalizes in 48–72h; less specific — also elevated in bowel obstruction, salivary gland disease, renal failure). LFTs: ALT >3× ULN suggests gallstone pancreatitis (positive predictive value 95%). Triglycerides if >1000 mg/dL = hypertriglyceridemia as cause. Calcium. CBC. BMP. LDH.",
      imaging: "CT abdomen with contrast (CECT): NOT needed at initial presentation for diagnosis; indicated at 72–96 hours if clinically worsening to assess for necrosis. Grade by Modified CT Severity Index (CTSI). MRI/MRCP: preferred for biliary cause evaluation, avoiding radiation, in young patients."
    },
    presentation: {
      chiefComplaint: ["severe epigastric pain radiating to the back", "nausea and vomiting", "abdominal distension"],
      associatedSymptoms: ["pain relieved by leaning forward (reduces stretch on retroperitoneal pancreas)", "nausea/vomiting not relieving pain", "low-grade fever", "abdominal distension from ileus", "jaundice if biliary pancreatitis", "tachycardia and hypotension (SIRS) in severe disease"],
      demographics: "Most common causes: Gallstones (40–70%) and Alcohol (25–35%) account for 80% of cases. Mnemonic IGETSMASHED: Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps/infection, Autoimmune (IgG4), Scorpion stings, Hypertriglyceridemia/Hypercalcemia, ERCP/drugs."
    },
    distinguishingFeatures: "Cullen's sign: periumbilical ecchymosis (retroperitoneal hemorrhage tracking to umbilicus). Grey-Turner's sign: flank ecchymosis (retroperitoneal hemorrhage — poor prognosis). Both indicate hemorrhagic pancreatitis, appear 3–5 days after onset. Severe acute pancreatitis (Revised Atlanta): organ failure (respiratory, renal, or cardiovascular) persisting >48 hours, pancreatic necrosis. Moderately severe: transient organ failure <48h or local complications without persistent organ failure.",
    redFlags: [
      "Persistent organ failure (renal, respiratory, cardiovascular) >48 hours = severe pancreatitis, ICU admission",
      "Infected pancreatic necrosis: clinical deterioration at 1–2 weeks, fever, leukocytosis — FNA of necrosis under CT guidance for culture; treat with antibiotics (imipenem or pip-tazo); minimally invasive step-up approach (percutaneous drain → endoscopic or minimally invasive debridement → open necrosectomy as last resort)",
      "Biliary pancreatitis: ERCP within 24 hours if cholangitis or biliary obstruction; early cholecystectomy (same admission or within 2 weeks) to prevent recurrence"
    ],
    mnemonics: ["IGETSMASHED: Idiopathic, Gallstones, Ethanol, Trauma, Steroids, Mumps, Autoimmune, Scorpion, Hyperlipidemia/Hypercalcemia, ERCP/drugs", "Ranson's criteria at admission (GA LAW): Glucose >200, Age >55, LDH >350, AST >250, WBC >16,000"],
    pimpingQuestions: [
      "What is the Ranson's criteria and BISAP score? — Ranson's (admission): Glucose >200, Age >55, LDH >350, AST >250, WBC >16,000. Ranson's (at 48h): HCT drop >10%, BUN rise >5, Ca <8, PaO2 <60, Base deficit >4, Fluid sequestration >6L. Score ≥3 = severe. BISAP: BUN >25, Impaired mental status, SIRS criteria, Age >60, Pleural effusion — score ≥3 = severe (simpler to calculate). CT Severity Index most accurate for severity assessment.",
      "What is the primary treatment of acute pancreatitis? — Aggressive IV fluid resuscitation (lactated Ringer's preferred over normal saline — LR reduces SIRS and organ failure in WATERFALL trial), analgesia (IV opioids), NPO initially then early oral/enteral nutrition as tolerated (earlier feeding improves outcomes — do NOT prolong NPO), no prophylactic antibiotics for sterile necrosis.",
      "When is ERCP indicated in acute pancreatitis? — Within 24 hours if cholangitis (Charcot's triad + obstruction) — urgent. Within 72 hours if biliary obstruction without cholangitis (ongoing jaundice, persistently dilated CBD on imaging). NOT indicated for uncomplicated gallstone pancreatitis without obstruction (cholecystectomy is definitive)."
    ]
  },
  {
    id: "gs-peptic-ulcer-disease",
    name: "Peptic Ulcer Disease / Perforated Peptic Ulcer",
    icdCode: "K27.9",
    rotation: "general-surgery",
    category: "Upper GI",
    definition: "Peptic ulcer disease (PUD) involves mucosal disruption of the stomach or duodenum beyond the muscularis mucosa. The surgical emergency is perforation — disruption of the full thickness of the gastric or duodenal wall, leading to leakage of gastric contents into the peritoneum and chemical, then bacterial, peritonitis.",
    diagnosticCriteria: {
      clinical: "Perforated PUD: sudden onset ('thunderclap') severe epigastric pain; rigidity, guarding, rebound tenderness (chemical peritonitis initially, then bacterial). Subacute presentation if omentum seals the perforation.",
      labs: "CBC (leukocytosis), BMP, amylase/lipase (often mildly elevated — rule out pancreatitis), lactate, type and screen, coagulation studies",
      imaging: "Upright CXR or left lateral decubitus AXR: free air under diaphragm (pneumoperitoneum) — present in 70–80% of perforations. CT abdomen/pelvis without contrast if CXR non-diagnostic (more sensitive for free air and to identify site of perforation). CT also evaluates for gastric outlet obstruction."
    },
    presentation: {
      chiefComplaint: ["sudden severe epigastric pain", "rigid abdomen", "diffuse abdominal pain"],
      associatedSymptoms: ["initially localized epigastric pain → rapidly diffuse as contents spread", "nausea/vomiting", "referred right shoulder pain from diaphragmatic irritation", "hematemesis (rare in perforation; more common in bleeding ulcers)", "tachycardia, hypotension (late — septic shock)"],
      demographics: "H. pylori (80% of duodenal ulcers, 60% of gastric ulcers). NSAIDs (second most common cause — impair prostaglandin-mediated mucosal protection). Smoking, alcohol, stress ulcers (ICU patients), Zollinger-Ellison syndrome (gastrinoma), steroids + NSAIDs (synergistic GI risk)."
    },
    distinguishingFeatures: "Board high-yield: Duodenal ulcers — most common (D1 — anterior wall perforates, posterior erodes gastroduodenal artery → massive GI bleed). Epigastric pain relieved by eating (food acts as buffer). Gastric ulcers — pain worse with eating. Always biopsy gastric ulcers at endoscopy (5–10% are gastric cancer). Posterior ulcers erode into pancreas (elevated amylase) or GDA (UGIB). Anterior ulcers perforate (free air).",
    redFlags: [
      "Perforated PUD: surgical emergency — upright CXR immediately; if free air confirmed, emergent laparoscopy or laparotomy",
      "GDA (gastroduodenal artery) erosion from posterior duodenal ulcer: massive UGIB — emergent EGD, endoscopic hemostasis, if fails: IR angioembolization or surgery",
      "Gastric outlet obstruction: chronic scarring from recurrent PUD — persistent vomiting of undigested food, succussion splash, weight loss, saline load test",
      "Any gastric ulcer: must have biopsy and repeat endoscopy at 8–12 weeks to confirm healing (rule out gastric malignancy)"
    ],
    mnemonics: ["Duodenal ulcer: D1 anterior = perforates (free air); D1 posterior = bleeds (GDA erosion)", "H. pylori treatment: Triple therapy (PPI + clarithromycin + amoxicillin × 14 days); if penicillin allergy: PPI + clarithromycin + metronidazole"],
    pimpingQuestions: [
      "What is the surgical repair for perforated peptic ulcer? — Omental patch repair (Graham patch): suture the perforation, then tack an omental pedicle over it to seal the repair. Laparoscopic approach preferred. Followed by IV antibiotics, PPI, and H. pylori eradication.",
      "What is the test of choice for H. pylori? — Urea breath test or stool antigen test for non-invasive diagnosis (both sensitive/specific). Endoscopic biopsy with rapid urease test (RUT) — most sensitive in the setting of active bleeding. Serology (IgG) indicates past exposure — cannot distinguish active from prior infection, not recommended for diagnosis.",
      "What is Zollinger-Ellison syndrome? — Gastrinoma (usually in the gastrinoma triangle: cystic duct junction/duodenal wall/head of pancreas) secreting excess gastrin → hypersecretion of gastric acid → multiple refractory duodenal ulcers. 25–30% associated with MEN-1. Diagnose with fasting serum gastrin (>1000 pg/mL = diagnostic); secretin stimulation test (paradoxical rise in gastrin); somatostatin receptor scintigraphy (OctreoScan) for localization."
    ]
  },
  {
    id: "gs-breast-cancer",
    name: "Breast Cancer",
    icdCode: "C50.919",
    rotation: "general-surgery",
    category: "Breast",
    definition: "Malignant neoplasm arising from epithelial cells of the breast. Most common type: invasive ductal carcinoma (IDC, 70–80%), followed by invasive lobular carcinoma (ILC, 10–15%). Ductal carcinoma in situ (DCIS) is the most common non-invasive breast cancer. Characterized by hormone receptor status (ER, PR), HER2 overexpression, and proliferation index (Ki-67) — together defining intrinsic subtypes that guide treatment.",
    diagnosticCriteria: {
      clinical: "Triple assessment: (1) Clinical breast exam (palpable mass, skin changes, nipple discharge); (2) Imaging — mammography ± ultrasound ± MRI; (3) Tissue biopsy (core needle biopsy preferred over FNA for histology and receptor testing). BI-RADS classification: 1 (negative) → 6 (known malignancy); BI-RADS 4–5 = biopsy required.",
      labs: "CBC, CMP, LFTs. Tumor markers: CA 27-29, CA 15-3 (monitoring, not diagnosis). Genetic testing: BRCA1/BRCA2 germline testing for high-risk patients. Oncotype DX (21-gene recurrence score) for hormone-positive, HER2-negative, node-negative tumors — guides chemotherapy decision.",
      imaging: "Mammography (screening: annual starting age 40 per ACR; USPSTF: biennial 50–74, individualized 40–49). Ultrasound: distinguishes solid from cystic, guides biopsy. Breast MRI: high sensitivity (90%); indicates BRCA carriers, dense breasts, discordant clinical/mammography findings, occult primary, extent of disease pre-surgery."
    },
    presentation: {
      chiefComplaint: ["painless palpable breast mass (most common)", "abnormal mammogram (screen-detected)", "nipple discharge (bloody or clear — DCIS/cancer)", "breast skin changes", "axillary lymphadenopathy"],
      associatedSymptoms: ["skin dimpling or retraction (Cooper's ligament invasion)", "peau d'orange skin (lymphatic obstruction — inflammatory breast cancer)", "nipple retraction or inversion", "satellite skin nodules (late)", "bone pain, dyspnea, headache (metastatic disease)"],
      demographics: "Most common cancer in women. Risk factors: BRCA1/2 mutations (lifetime risk 50–85%), early menarche/late menopause, nulliparity, late first pregnancy >35, HRT (estrogen + progesterone), dense breasts, prior chest radiation, prior breast biopsy showing ADH or LCIS, family history."
    },
    distinguishingFeatures: "Inflammatory breast cancer (IBC): no discrete mass; rapid onset diffuse erythema, peau d'orange, edema, warmth — mimics mastitis but does not respond to antibiotics. Diagnosis: skin punch biopsy (dermal lymphatic invasion by tumor). Stage IIIB by definition. Paget's disease of the nipple: eczematous change of the nipple-areolar complex (NAC) — associated with underlying DCIS or invasive cancer. Biopsy the NAC.",
    redFlags: [
      "Peau d'orange, erythema, warmth → inflammatory breast cancer — urgent skin biopsy",
      "Rapidly enlarging mass in a young woman on OCP — phyllodes tumor vs. rapidly progressive cancer",
      "Metastatic disease at presentation (20% of HER2+ and triple-negative cancers): bone (most common), liver, lung, brain",
      "Male breast cancer: 1% of all breast cancers; BRCA2 most common mutation; presents as subareolar mass; higher ER+ rate"
    ],
    mnemonics: ["BI-RADS 1-2 = benign/negative, 3 = probably benign (short-interval follow-up), 4 = suspicious (biopsy), 5 = highly suspicious (biopsy), 6 = known malignancy", "Intrinsic subtypes: Luminal A (ER+/PR+/HER2-/Ki-67 low), Luminal B (ER+/HER2+ or high Ki-67), HER2-enriched, Triple-negative"],
    pimpingQuestions: [
      "What are the surgical options for breast cancer? — Breast-conserving surgery (BCS/lumpectomy) + radiation is equivalent to mastectomy in overall survival for most Stage I–II cancers (NSABP B-06 trial). Mastectomy for: large tumor-to-breast ratio, multicentric disease, inflammatory breast cancer, patient preference, inability to receive radiation (pregnancy, prior radiation), BRCA carrier preferring risk reduction.",
      "What is sentinel lymph node biopsy (SLNB)? — Injection of radiotracer (Tc-99m sulfur colloid) ± blue dye at tumor site; 1–3 SLNs are identified and excised; if negative = no axillary dissection needed (Z0011 trial); if positive in 1–2 SLNs with BCS + radiation = axillary dissection may be omitted per ACOSOG Z0011.",
      "What determines the use of adjuvant chemotherapy in hormone-receptor positive, HER2-negative, node-negative breast cancer? — Oncotype DX Recurrence Score: low risk (RS <26 in TAILORX trial): endocrine therapy alone (chemo not beneficial). High risk (RS ≥26): chemo + endocrine therapy. Intermediate: shared decision-making, especially in women <50 years."
    ]
  },
  {
    id: "gs-thyroid-nodule",
    name: "Thyroid Nodule and Thyroid Cancer",
    icdCode: "E04.1",
    rotation: "general-surgery",
    category: "Endocrine",
    definition: "A thyroid nodule is a discrete lesion within the thyroid gland that is radiographically distinct from the surrounding thyroid parenchyma. Prevalence: palpable nodules 4–7%; ultrasound-detected 19–67%. Malignancy risk: 5–15% of all thyroid nodules. Thyroid cancer types: Papillary (80–85%) → Follicular (10–15%) → Hürthle cell → Medullary (5%, MEN-2 associated) → Anaplastic (<1%, most aggressive — median survival 6 months).",
    diagnosticCriteria: {
      clinical: "TSH first (low TSH = functioning nodule — likely benign; normal/high TSH = proceed to ultrasound evaluation). Thyroid ultrasound (ATA classification): size + sonographic risk features (composition, echogenicity, margins, calcifications, shape) determine FNA indication.",
      labs: "TSH (first-line). If low TSH: radionuclide thyroid scan (hot nodule = autonomous, benign; cold nodule = malignancy risk if >1 cm). Calcitonin (if clinical suspicion for medullary thyroid cancer or MEN-2 family history). Thyroglobulin NOT useful for nodule evaluation (only for post-thyroidectomy surveillance).",
      imaging: "Thyroid ultrasound: ATA/TIRADS scoring. ACR-TIRADS: TR1 (benign, no FNA), TR2 (not suspicious), TR3 (mildly suspicious), TR4 (moderately suspicious), TR5 (highly suspicious — papillary cancer sonographic features: solid hypoechoic, taller-than-wide, irregular margins, microcalcifications, extrathyroidal extension). FNA: indicated for nodules with intermediate-high risk features ≥1 cm; very high risk features ≥0.5 cm."
    },
    presentation: {
      chiefComplaint: ["palpable neck mass (incidental vs. symptomatic)", "hoarseness (RLN invasion)", "dysphagia", "neck swelling", "incidental finding on imaging"],
      associatedSymptoms: ["usually asymptomatic", "compressive symptoms: dysphagia, dyspnea (tracheal compression), voice change", "constitutional symptoms (weight loss, fatigue — rarely from thyroid malignancy; more from hyperthyroidism if toxic nodule)"],
      demographics: "Risk factors for malignancy: age <20 or >70, male sex, history of childhood head/neck radiation, family history of thyroid cancer or MEN syndromes, rapid nodule growth, hoarseness (RLN invasion), firm/fixed nodule, cervical lymphadenopathy."
    },
    distinguishingFeatures: "Papillary thyroid cancer (PTC): most common; indolent; 'ground glass' Orphan Annie eye nuclei on FNA; psammoma bodies; lymph node metastases common but prognosis excellent (10-year survival >90%). BRAF V600E mutation in 40–60%. Medullary thyroid cancer (MTC): C-cell origin; calcitonin-secreting; 25% associated with MEN-2A or MEN-2B (RET proto-oncogene mutation); treat with total thyroidectomy + central compartment node dissection. Anaplastic: rapidly enlarging neck mass, invades adjacent structures, poor prognosis.",
    redFlags: [
      "Hoarseness with thyroid nodule — suspect RLN invasion; laryngoscopy before surgery",
      "Rapidly growing neck mass — anaplastic thyroid cancer or lymphoma (distinguish with urgent FNA)",
      "MEN-2A: MTC + pheochromocytoma + hyperparathyroidism. ALWAYS rule out pheochromocytoma before thyroid surgery (measure plasma metanephrines first)",
      "Medullary thyroid cancer: test all patients for RET germline mutation — if positive, screen family members; prophylactic thyroidectomy in childhood based on mutation risk category"
    ],
    mnemonics: ["Thyroid cancer by frequency: P-F-H-M-A (Papillary, Follicular, Hürthle, Medullary, Anaplastic) — 'Pretty Females Have More Attitude'", "MEN-2A: MTC + Pheo + Parathyroid hyperplasia; MEN-2B: MTC + Pheo + Marfanoid + Mucosal neuromas (no HPT)"],
    pimpingQuestions: [
      "What is the surgical management of differentiated thyroid cancer? — Low-risk PTC (<1 cm, no extrathyroidal extension, no LN mets): thyroid lobectomy acceptable. Intermediate/high-risk: total thyroidectomy + central compartment (Level VI) LN dissection. Radioactive iodine (RAI) ablation: for intermediate/high-risk differentiated thyroid cancer after total thyroidectomy (destroys remnant thyroid and metastases). TSH suppression therapy with levothyroxine: post-thyroidectomy to suppress residual disease stimulation.",
      "What are the parathyroid and RLN risks of thyroidectomy? — RLN (recurrent laryngeal nerve) injury: 1–2% permanent hoarseness (must identify and preserve bilaterally during total thyroidectomy). Hypoparathyroidism: 1–2% permanent after total thyroidectomy (monitor calcium post-op; supplement calcium + calcitriol if symptomatic hypocalcemia — tingling, Chvostek's sign, Trousseau's sign, carpopedal spasm).",
      "What is Bethesda classification on FNA? — I: Nondiagnostic (repeat FNA). II: Benign (2–4% malignancy risk — follow-up US). III: Atypia of undetermined significance/AUS (5–15% risk — repeat FNA or molecular testing). IV: Follicular neoplasm (15–30% risk — lobectomy). V: Suspicious for malignancy (60–75% risk — lobectomy or total thyroidectomy). VI: Malignant (97–99% risk — surgery)."
    ]
  },
  {
    id: "gs-wound-infection",
    name: "Surgical Site Infection (SSI)",
    icdCode: "T81.49XA",
    rotation: "general-surgery",
    category: "Perioperative",
    definition: "Infection occurring at or near the surgical incision within 30 days of the operation (or within 90 days if prosthetic material implanted). CDC classification: superficial incisional (skin and subcutaneous tissue), deep incisional (fascia and muscle), organ/space (cavity opened during procedure — e.g., abdominal abscess, empyema). Most common healthcare-associated infection.",
    diagnosticCriteria: {
      clinical: "Signs of wound infection: erythema, warmth, induration, purulent drainage, wound dehiscence, fever. Timing: SSI typically presents 3–7 days post-op. Early (<3 days): Streptococcal or Clostridial species. Delayed (>30 days with implant): low-virulence organisms (coagulase-negative Staph, Propionibacterium).",
      labs: "CBC (leukocytosis), wound culture and Gram stain (aspirate or biopsy — swabs are unreliable), blood cultures if systemic sepsis, CRP/ESR for deep space infection monitoring",
      imaging: "CT scan for suspected deep space infection or abscess (organ/space SSI). Ultrasound for superficial fluid collections. CT for necrotizing fasciitis (gas tracking along fascial planes — CT Sensitivity 80%, do not delay surgery for imaging if clinical suspicion high)"
    },
    presentation: {
      chiefComplaint: ["wound pain worsening after initial improvement", "erythema spreading from wound", "purulent drainage from incision", "fever 3–5 days post-op"],
      associatedSymptoms: ["wound warmth and induration", "wound dehiscence (fascial layer separation — evisceration if bowel exposed)", "systemic sepsis if deep space infection", "crepitus in wound (Clostridium or necrotizing fasciitis — EMERGENCY)"],
      demographics: "Risk factors: DM (hyperglycemia impairs neutrophil function), obesity (poor tissue perfusion, poor closure), malnutrition (impaired healing), immunosuppression (steroids, chemotherapy), smoking, pre-existing infection, prolonged operation (>2 hours), emergency vs. elective surgery, contaminated wound class."
    },
    distinguishingFeatures: "CDC Wound Classification: Class I (Clean): no break in sterile technique, GI/GU/respiratory tracts not entered — expected SSI rate 1–5%. Class II (Clean-contaminated): controlled entry into hollow viscus — 5–10%. Class III (Contaminated): gross contamination, inflamed tissue — 10–17%. Class IV (Dirty): pre-existing infection or perforated viscus — 27–40%. Necrotizing fasciitis (NF): rapidly spreading infection tracking along fascial planes; severe disproportionate pain early, then hypesthesia (nerve death); gray/blue skin discoloration; crepitus; multi-organ failure; mortality 20–40% even with treatment.",
    redFlags: [
      "Crepitus in wound, bullae, gray/blue skin discoloration = necrotizing fasciitis — IMMEDIATE surgical debridement, do not delay",
      "Wound dehiscence with evisceration: sterile saline-moistened gauze over bowel, emergency return to OR",
      "Systemic sepsis from SSI: blood cultures, IV antibiotics, source control (drainage or debridement)"
    ],
    mnemonics: ["NF LRINEC score >6 = high risk necrotizing fasciitis: Labs (CRP, WBC, Hgb, Na, Cr, glucose)", "SSI prophylaxis: Give antibiotics within 60 min before incision (30 min for fluoroquinolones/vancomycin), redose if >2 half-lives of drug have passed or blood loss >1.5L, discontinue within 24 hours post-op (48h for cardiac surgery)"],
    pimpingQuestions: [
      "What are the most common organisms in SSI? — Staphylococcus aureus (most common overall, including MRSA for healthcare-acquired). Coagulase-negative Staphylococcus (implant/prosthesis SSI). Gram-negative organisms (E. coli, Klebsiella, Pseudomonas) for abdominal and colorectal SSI. Beta-hemolytic Streptococcus (early SSI, <3 days post-op — very toxic, can cause strep necrotizing fasciitis).",
      "What is the surgical antibiotic prophylaxis regimen for colorectal surgery? — Mechanical bowel prep + oral antibiotics (neomycin + erythromycin OR neomycin + metronidazole day before) PLUS IV cefazolin or cefoxitin within 60 min before incision. This combined prep (mechanical + oral + IV) reduces SSI rates from ~25% to <10%.",
      "What distinguishes type I from type II necrotizing fasciitis? — Type I (polymicrobial): most common (80%), typically in elderly/diabetics/immunosuppressed, mixed aerobic-anaerobic organisms, perineum (Fournier's gangrene) or trunk. Type II (monomicrobial): Group A Streptococcus (GAS) = streptococcal TSS — occurs in healthy young patients, rapidly fatal without treatment."
    ]
  }
];
