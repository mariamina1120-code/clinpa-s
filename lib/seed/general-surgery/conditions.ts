import type { Condition } from "@/types";

export const generalSurgeryConditions: Condition[] = [
  {
    id: "gs-appendicitis",
    name: "Acute Appendicitis",
    icdCode: "K37",
    rotation: "general-surgery",
    category: "Gastroenterology / Acute Abdomen",
    definition:
      "Acute inflammation of the vermiform appendix, most commonly caused by luminal obstruction from a fecalith, lymphoid hyperplasia, or rarely tumor. Obstruction leads to bacterial overgrowth, distension, ischemia, and ultimately perforation if untreated. Most common cause of acute abdomen in young adults.",
    diagnosticCriteria:
      "Alvarado score ≥7 (migration to RLQ 1pt, anorexia 1pt, nausea/vomiting 1pt, RLQ tenderness 2pt, rebound 1pt, fever 1pt, leukocytosis 2pt, left shift 1pt) → high suspicion. CT abdomen/pelvis with IV contrast: gold standard (sensitivity 94%, specificity 95%) — dilated appendix >6 mm, periappendiceal fat stranding, appendicolith (30%), wall thickening >2 mm. Ultrasound first-line in children and pregnant women (avoids radiation): non-compressible appendix >6 mm. Labs: leukocytosis (WBC 10,000–18,000) with left shift, elevated CRP; few WBCs on urinalysis (proximity to ureter — not diagnostic of UTI).",
    presentation: {
      chiefComplaint: [
        "\"My belly button started hurting and now the pain moved to my right lower side\"",
        "\"I have no appetite and feel like I might vomit\"",
        "\"I have right lower abdominal pain and a fever\"",
      ],
      associatedSymptoms: [
        "Periumbilical pain migrating to RLQ over 12–24 hours (classic, but only ~60%)",
        "Anorexia (most reliable symptom — if patient is hungry, reconsider diagnosis)",
        "Nausea and vomiting (occurs after pain onset)",
        "Low-grade fever 37.5–38.5°C",
        "Diarrhea (pelvic appendix irritating rectum)",
        "Dysuria (retrocecal appendix near ureter)",
      ],
      demographics:
        "Peak incidence ages 10–30; lifetime risk 7–8% (male > female). Rare in infants — perforation rate >80% when occurs due to diagnostic difficulty and thin omentum.",
    },
    distinguishingFeatures:
      "Classic: periumbilical pain → RLQ migration over 12–24 hours; McBurney's point tenderness (2/3 distance from umbilicus to ASIS); Rovsing's sign (RLQ pain with LLQ palpation); Psoas sign (RLQ pain with right hip extension — retrocecal appendix); Obturator sign (RLQ pain with internal rotation of flexed right hip — pelvic appendix)",
    redFlags: [
      "Perforation: temperature >38.5°C, WBC >18,000, diffuse peritonitis (guarding, rigidity throughout abdomen)",
      "Palpable RLQ mass (appendiceal abscess or phlegmon — may change surgical approach)",
      "Elderly or immunosuppressed: subtle presentation, higher perforation rate at presentation",
      "Pregnancy: appendix displaced superolaterally — pain may be in RUQ; maternal and fetal mortality risk",
      "Peritoneal signs throughout (perforated — urgent surgery)",
    ],
    mnemonics: [
      {
        name: "MANTRELS (Alvarado Score)",
        content:
          "M — Migration of pain to RLQ (1 point)\nA — Anorexia (1 point)\nN — Nausea/vomiting (1 point)\nT — Tenderness in RLQ (2 points)\nR — Rebound tenderness (1 point)\nE — Elevated temperature (1 point)\nL — Leukocytosis (2 points)\nS — Shift to left (1 point)\n\nScore ≥7 = high probability; ≥5 = consider CT",
      },
    ],
    pimpingQuestions: [
      "What is McBurney's point and why is it significant?",
      "Describe Rovsing's sign — what is the mechanism?",
      "What are the indications for non-operative (antibiotic-only) management of appendicitis?",
      "How does perforation change the management of acute appendicitis?",
      "How does the appendix position affect clinical presentation in retrocecal vs pelvic appendix?",
      "What imaging study is preferred in a pregnant patient with suspected appendicitis?",
    ],
  },
  {
    id: "gs-cholecystitis",
    name: "Acute Cholecystitis",
    icdCode: "K81.0",
    rotation: "general-surgery",
    category: "Gastroenterology / Hepatobiliary",
    definition:
      "Acute inflammation of the gallbladder, most commonly (90–95%) from cystic duct obstruction by a gallstone (calculous cholecystitis). Acalculous cholecystitis (5–10%) occurs in critically ill patients from biliary stasis and ischemia. Untreated can progress to gangrenous cholecystitis, empyema, or perforation.",
    diagnosticCriteria:
      "Tokyo Guidelines 2018: Local signs (Murphy's sign, RUQ mass/tenderness) + Systemic inflammation (fever ≥38°C, leukocytosis ≥12,000 or elevated CRP) + Confirmatory imaging. RUQ ultrasound (first-line): gallstones + gallbladder wall thickening >4 mm + pericholecystic fluid + sonographic Murphy's sign. HIDA scan (cholescintigraphy): non-visualization of GB at 1 hour (cystic duct obstruction) — gold standard when US equivocal. Labs: leukocytosis, elevated CRP, mildly elevated LFTs/bilirubin (not as elevated as choledocholithiasis). Charcot's triad (RUQ pain + fever + jaundice) = choledocholithiasis. Reynolds' pentad (Charcot's + hypotension + altered mental status) = cholangitis — emergency.",
    presentation: {
      chiefComplaint: [
        "\"I have severe right-sided stomach pain after eating a fatty meal\"",
        "\"My pain is in my right side and radiating to my right shoulder\"",
        "\"I have pain, fever, and nausea\"",
      ],
      associatedSymptoms: [
        "RUQ pain lasting >6 hours (distinguishes from biliary colic which resolves in 1–6 hours)",
        "Fever (distinguishes from uncomplicated biliary colic)",
        "Nausea and vomiting",
        "Radiation to right shoulder/scapula (diaphragmatic irritation — phrenic nerve C3–C5)",
        "Fatty food intolerance",
        "Jaundice (if common bile duct involvement — Charcot's triad)",
      ],
      demographics:
        "4 F's: Fat, Fertile, Forty, Female. Additional risk: rapid weight loss, hemolytic disease (pigment stones — sickle cell, hereditary spherocytosis), Crohn's disease, TPN use, total parenteral nutrition.",
    },
    distinguishingFeatures:
      "Murphy's sign: inspiratory arrest with deep RUQ palpation (pain as inflamed GB descends onto palpating hand). Biliary colic: transient obstruction (1–6h), resolves spontaneously, no fever, no Murphy's, no wall changes on US. Cholecystitis: >6h, fever, positive Murphy's, US wall thickening. Choledocholithiasis: Charcot's triad. Cholangitis: Reynolds' pentad (emergency).",
    redFlags: [
      "Gangrenous cholecystitis: diabetic or elderly patient appearing septic — emergent cholecystectomy",
      "Emphysematous cholecystitis: gas in GB wall on CT (E. coli, Clostridium — diabetic males); 15% mortality",
      "Gallbladder perforation: free bile peritonitis or pericholecystic abscess",
      "Jaundice + fever + RUQ pain (Charcot's triad) — choledocholithiasis/cholangitis, ERCP urgently",
      "Reynolds' pentad (Charcot's + hypotension + AMS) — cholangitis sepsis, emergency ERCP",
    ],
    mnemonics: [
      {
        name: "4 Fs of Gallstones",
        content: "Fat, Fertile, Forty, Female — classic demographic for cholelithiasis",
      },
      {
        name: "Biliary Emergency Mnemonics",
        content:
          "Charcot's Triad = RUQ pain + Fever + Jaundice → Choledocholithiasis/cholangitis\nReynolds' Pentad = Charcot's + Hypotension + Altered Mental Status → EMERGENCY cholangitis (ERCP within 24h)",
      },
    ],
    pimpingQuestions: [
      "What is Murphy's sign and how do you elicit it?",
      "What is the definitive treatment for acute cholecystitis and what is the optimal timing?",
      "When would you place a cholecystostomy tube instead of proceeding directly to cholecystectomy?",
      "Distinguish biliary colic, cholecystitis, choledocholithiasis, and cholangitis clinically.",
      "What is the HIDA scan and when is it used?",
      "What is Mirizzi syndrome?",
    ],
  },
  {
    id: "gs-bowel-obstruction",
    name: "Small Bowel Obstruction (SBO)",
    icdCode: "K56.69",
    rotation: "general-surgery",
    category: "Gastroenterology / Acute Abdomen",
    definition:
      "Mechanical obstruction of the small intestinal lumen preventing normal passage of bowel contents. Leads to proximal distension, vomiting, electrolyte abnormalities, bacterial overgrowth, and if untreated, bowel ischemia and perforation. Adhesions from prior surgery are the leading cause (60–75%).",
    diagnosticCriteria:
      "Clinical triad: colicky abdominal pain + nausea/vomiting + distension + obstipation (no gas or stool). AXR (supine + upright): dilated small bowel >3 cm, air-fluid levels at different heights (step-ladder pattern), absent colonic gas. CT abdomen/pelvis with contrast: gold standard — identifies transition point (site of obstruction), assesses strangulation (pneumatosis intestinalis, mesenteric edema, portal venous gas, free fluid), identifies cause (hernia, mass, volvulus). Labs: BMP (vomiting causes hypokalemia, metabolic alkalosis), CBC (leukocytosis with strangulation), lactate (elevated in ischemia — critical finding).",
    presentation: {
      chiefComplaint: [
        "\"I have crampy abdominal pain and I can't pass gas\"",
        "\"My abdomen is distended and I keep vomiting\"",
        "\"I had abdominal surgery before and now I have pain again\"",
      ],
      associatedSymptoms: [
        "Colicky, intermittent abdominal pain (cramping waves)",
        "Nausea and bilious vomiting (early; feculent vomiting = late/severe)",
        "Abdominal distension",
        "Obstipation (inability to pass gas or stool — complete SBO)",
        "High-pitched rushing bowel sounds early; absent sounds late",
        "Dehydration, tachycardia",
        "Fever (strangulation — ominous sign)",
      ],
      demographics:
        "Most common causes by frequency: (1) Adhesions 60–75% (prior abdominal surgery), (2) Hernias 10–15% (inguinal, femoral, incisional), (3) Malignancy 5–10%, (4) Crohn's disease 5%, (5) Volvulus.",
    },
    distinguishingFeatures:
      "Partial SBO: some flatus passes distally. Complete SBO: no gas beyond obstruction, no flatus. Strangulation (closed-loop obstruction): fever + peritoneal signs + elevated lactate + leukocytosis >20,000 = bowel ischemia → surgical emergency. Ileus: distension + absent bowel sounds + gas throughout entire GI tract including colon/rectum on AXR — no mechanical transition point on CT.",
    redFlags: [
      "Signs of strangulation: fever, peritoneal signs, lactate > 2, WBC >20,000 — emergent surgery",
      "Closed-loop obstruction on CT (C-shaped or U-shaped loop, single fixation point) — high risk of infarction",
      "Complete SBO not resolving with 24–48h of NGT decompression — surgery required",
      "Hernia with SBO — examine all hernia orifices; incarceration requires urgent surgery",
    ],
    mnemonics: [
      {
        name: "ABCDE of SBO Causes",
        content:
          "A — Adhesions (most common — prior surgery)\nB — Bowel cancer (colon cancer presenting as SBO)\nC — Crohn's disease (stricture/inflammatory mass)\nD — Defects (hernias — inguinal, femoral, incisional)\nE — External compression (volvulus, intussusception, mass)",
      },
    ],
    pimpingQuestions: [
      "What is the initial non-operative management of SBO?",
      "What are the absolute indications for immediate surgery in SBO?",
      "How do you differentiate SBO from large bowel obstruction (LBO) on AXR?",
      "What is water-soluble contrast (Gastrografin) challenge and how does it help SBO management?",
      "Describe strangulation obstruction — what findings suggest it?",
      "Why does SBO cause hypokalemia and metabolic alkalosis?",
    ],
  },
  {
    id: "gs-hernia-inguinal",
    name: "Inguinal Hernia",
    icdCode: "K40.90",
    rotation: "general-surgery",
    category: "Gastroenterology / Hernia",
    definition:
      "Protrusion of abdominal contents through a defect in the inguinal canal. Direct hernias protrude through a weakness in the posterior inguinal canal wall (Hesselbach's triangle — medial to inferior epigastric vessels). Indirect hernias pass through the internal inguinal ring (lateral to inferior epigastric vessels) following the spermatic cord. Most common hernia in both sexes; lifetime risk 27% in men, 3% in women.",
    diagnosticCriteria:
      "Clinical diagnosis: reducible bulge in inguinal region appearing with Valsalva (standing + cough) and reducing with recumbency or gentle pressure. Palpate the external inguinal ring while patient stands and coughs. No labs required for uncomplicated hernia. Ultrasound if diagnosis uncertain (occult hernia). CT or MRI for complex or occult hernias. For strangulation: CBC (leukocytosis), lactate, BMP.",
    presentation: {
      chiefComplaint: [
        "\"I have a bulge in my groin that comes and goes\"",
        "\"I have dull aching groin pain when I exercise or strain\"",
        "\"My groin swelling is suddenly very painful and won't go back in\"",
      ],
      associatedSymptoms: [
        "Reducible bulge enlarging with standing, coughing, straining",
        "Dull ache or heaviness in groin, relieved supine",
        "Pain radiating to scrotum or labia majora",
        "Nausea/vomiting with incarceration",
        "Severe pain + fever + non-reducible bulge = strangulation (surgical emergency)",
      ],
      demographics:
        "Indirect hernia: all ages including infants (congenital patent processus vaginalis) — most common hernia overall. Direct hernia: older men (floor weakness from aging, increased intra-abdominal pressure). Femoral hernia: women > men, below inguinal ligament — highest incarceration/strangulation risk.",
    },
    distinguishingFeatures:
      "Hesselbach's triangle borders: medially (lateral rectus border), inferolaterally (inferior epigastric vessels), inferiorly (inguinal ligament). Direct = medial to epigastric vessels (through posterior wall). Indirect = lateral to epigastric vessels (through internal ring). Femoral = below inguinal ligament, medial to femoral vein — highest risk of incarceration.",
    redFlags: [
      "Incarceration: hernia cannot be reduced — urgent reduction or surgery",
      "Strangulation: blood supply compromised — severe pain, fever, skin erythema, hemodynamic instability — surgical emergency",
      "Femoral hernia: small neck = highest incarceration risk, never observe",
    ],
    mnemonics: [
      {
        name: "MDs Don't LIe",
        content:
          "Direct hernia = Medial to epigastric vessels\ninDirect hernia = Lateral to epigastric vessels (LIe)\n\nFemoral canal contents: NAVEL\nNerve, Artery, Vein, Empty space (where femoral hernia goes), Lymphatics",
      },
    ],
    pimpingQuestions: [
      "What are the boundaries of Hesselbach's triangle?",
      "Distinguish direct vs indirect inguinal hernia by location relative to the inferior epigastric vessels.",
      "When can watchful waiting be offered for inguinal hernia?",
      "What is the definitive surgical repair and when is laparoscopic approach preferred?",
      "Why does femoral hernia have a higher incarceration risk than inguinal hernia?",
    ],
  },
  {
    id: "gs-colorectal-cancer",
    name: "Colorectal Cancer",
    icdCode: "C18.9",
    rotation: "general-surgery",
    category: "Gastroenterology / Colorectal",
    definition:
      "Malignant neoplasm of the colon or rectum, most commonly adenocarcinoma (95%) arising from adenomatous polyps via the adenoma-carcinoma sequence. Most cases are sporadic (75%), some familial (20%), or hereditary (5%: Lynch syndrome, FAP). Screening colonoscopy at age 45 (average risk) is the most effective prevention strategy.",
    diagnosticCriteria:
      "Colonoscopy with biopsy (gold standard for diagnosis). CT chest/abdomen/pelvis with contrast for staging (primary tumor, lymph nodes, liver and lung metastases). MRI pelvis for rectal cancer (T staging, circumferential resection margin, mesorectal integrity). Labs: CBC (microcytic anemia — especially right-sided tumors), CEA (not diagnostic; used as baseline and for post-resection recurrence surveillance), LFTs (hepatic metastases). Molecular testing: MMR IHC or MSI testing on ALL CRC specimens (universal Lynch syndrome screening). CEA elevated in 60% of CRC but poor sensitivity/specificity for primary diagnosis.",
    presentation: {
      chiefComplaint: [
        "\"I've been having blood in my stool and my bowel habits have changed\"",
        "\"I've lost weight without trying and feel tired all the time\"",
        "\"My doctor found iron-deficiency anemia and I've never had it before\"",
      ],
      associatedSymptoms: [
        "Right-sided: occult blood loss, iron-deficiency anemia, RLQ mass, rarely obstruction (wide lumen)",
        "Left-sided/sigmoid: change in stool caliber (pencil-thin), constipation alternating with diarrhea, hematochezia, obstruction",
        "Rectal cancer: hematochezia, tenesmus (incomplete evacuation), rectal fullness, rectal pain (late)",
        "Constitutional: weight loss, fatigue, anorexia (advanced disease)",
      ],
      demographics:
        "Average age at diagnosis ~67 years; male = female. Risk: personal/family history of adenomas or CRC, IBD (UC > Crohn's — risk after 10 years), hereditary syndromes (Lynch, FAP), obesity, red/processed meat, alcohol, smoking, T2DM.",
    },
    distinguishingFeatures:
      "Lynch syndrome (HNPCC): autosomal dominant MLH1/MSH2/MSH6/PMS2 mutations; CRC before 50, right-sided, synchronous/metachronous tumors, extracolonic cancers (endometrial most common). FAP: APC gene; hundreds to thousands of polyps; 100% lifetime CRC risk without prophylactic colectomy; Gardner syndrome (desmoids, CHRPE, osteomas).",
    redFlags: [
      "Acute LBO (complete left colon obstruction) — emergency resection or diverting colostomy",
      "Perforated tumor — peritonitis, emergency surgery, highest morbidity",
      "Rectal bleeding in patient >45 without recent colonoscopy — always scope before assuming hemorrhoids",
      "Rising CEA after curative resection — recurrence until proven otherwise",
    ],
    mnemonics: [
      {
        name: "Vogelstein Adenoma-Carcinoma Sequence",
        content:
          "APC → KRAS → SMAD4 → TP53\n\n'All Kids Should Pass' (A-K-S-P)\nNormal epithelium → adenoma → dysplasia → carcinoma\n~10–15 years to progress",
      },
      {
        name: "Lynch Syndrome Cancers: CEO SU",
        content:
          "C — Colorectal (most common)\nE — Endometrial (second most common — lifetime risk 40–60%)\nO — Ovarian\nS — Stomach\nU — Urinary tract (transitional cell)\n\nDiagnose with MMR immunohistochemistry on all CRC specimens",
      },
    ],
    pimpingQuestions: [
      "Describe the Vogelstein adenoma-carcinoma sequence and the key mutations involved.",
      "What is Lynch syndrome (HNPCC) and how is it diagnosed?",
      "What is universal MMR testing and why is it performed on all colorectal cancers?",
      "What is CEA used for in colorectal cancer — diagnosis or surveillance?",
      "Describe the surgical approach for Stage II vs Stage IV colorectal cancer.",
      "What distinguishes right-sided from left-sided colon cancer in clinical presentation?",
    ],
  },
  {
    id: "gs-pancreatitis",
    name: "Acute Pancreatitis",
    icdCode: "K85.90",
    rotation: "general-surgery",
    category: "Gastroenterology / Pancreatic",
    definition:
      "Acute inflammatory process of the pancreas from premature activation of pancreatic enzymes within acinar cells, causing autodigestion and local/systemic inflammatory cascade. 80% of cases caused by gallstones (40–70%) or alcohol (25–35%). Mortality from severe acute pancreatitis (organ failure) is 30–50%.",
    diagnosticCriteria:
      "Revised Atlanta Criteria (2012): 2 of 3 — (1) Characteristic epigastric pain radiating to back; (2) Serum lipase or amylase ≥3× ULN; (3) Characteristic CT findings. Lipase preferred over amylase (more specific, remains elevated longer). ALT >3× ULN suggests gallstone pancreatitis (PPV 95%). CT with contrast (CECT): NOT needed at initial presentation; indicated at 72–96h if clinically worsening to assess for pancreatic necrosis — modified CT Severity Index (CTSI) grades severity. MRCP preferred for biliary evaluation and in young/pregnant patients. Labs: LFTs, lipase, BMP, triglycerides if >1,000 mg/dL, calcium, CBC, LDH.",
    presentation: {
      chiefComplaint: [
        "\"I have severe upper abdominal pain going straight through to my back\"",
        "\"The pain started after a big meal and won't go away\"",
        "\"I've been vomiting but it's not making the pain better\"",
      ],
      associatedSymptoms: [
        "Severe, constant epigastric pain radiating to back (retroperitoneal)",
        "Pain relieved by leaning forward (reduces tension on retroperitoneal structure)",
        "Nausea and vomiting not relieving pain (distinguishes from biliary colic)",
        "Abdominal distension from ileus",
        "Low-grade fever",
        "Jaundice (biliary pancreatitis)",
        "Tachycardia and hypotension (SIRS/organ failure in severe disease)",
      ],
      demographics:
        "Gallstones (40–70%), alcohol (25–35%), hypertriglyceridemia (>1,000 mg/dL), post-ERCP, medications (azathioprine, valproate, furosemide, didanosine), autoimmune (IgG4), hypercalcemia, idiopathic (15–25%).",
    },
    distinguishingFeatures:
      "Cullen's sign: periumbilical ecchymosis (retroperitoneal hemorrhage — poor prognosis). Grey-Turner's sign: flank ecchymosis (retroperitoneal hemorrhage). Both appear 3–5 days after onset, indicate hemorrhagic pancreatitis. Severe acute pancreatitis: organ failure (respiratory, renal, cardiovascular) persisting >48 hours OR local complications (necrosis, abscess). Distinguishes from biliary colic (transient, no elevation in lipase) and mesenteric ischemia.",
    redFlags: [
      "Organ failure persisting >48 hours — ICU admission, severe acute pancreatitis (30–50% mortality)",
      "Infected pancreatic necrosis (fever + worsening at 1–2 weeks) — CT-guided FNA for culture, antibiotics, step-up drainage",
      "Biliary pancreatitis with cholangitis or biliary obstruction — ERCP within 24 hours",
      "Triglycerides >1,000 mg/dL (hypertriglyceridemia pancreatitis) — insulin infusion, plasmapheresis",
    ],
    mnemonics: [
      {
        name: "IGETSMASHED (Causes of Pancreatitis)",
        content:
          "I — Idiopathic\nG — Gallstones (most common)\nE — Ethanol (second most common)\nT — Trauma\nS — Steroids\nM — Mumps / infections\nA — Autoimmune (IgG4)\nS — Scorpion stings\nH — Hyperlipidemia (triglycerides >1,000) / Hypercalcemia\nE — ERCP (post-procedural)\nD — Drugs (azathioprine, valproate, furosemide)",
      },
      {
        name: "Ranson's Criteria (Admission: GA LAW)",
        content:
          "On admission: Glucose >200, Age >55, LDH >350, AST >250, WBC >16,000\nAt 48h: HCT drop >10%, BUN rise >5, Ca <8, PaO2 <60, Base deficit >4, Fluid sequestration >6L\n\nScore ≥3 = severe pancreatitis",
      },
    ],
    pimpingQuestions: [
      "What are the Revised Atlanta Criteria for diagnosing acute pancreatitis?",
      "What are Cullen's sign and Grey-Turner's sign and what do they indicate?",
      "What is the primary treatment (fluids, diet, antibiotics) for acute pancreatitis?",
      "When is CT indicated in acute pancreatitis?",
      "When is ERCP indicated in gallstone pancreatitis?",
      "What defines severe vs moderately severe vs mild acute pancreatitis?",
    ],
  },
  {
    id: "gs-peptic-ulcer-disease",
    name: "Peptic Ulcer Disease / Perforated Peptic Ulcer",
    icdCode: "K27.9",
    rotation: "general-surgery",
    category: "Gastroenterology / Upper GI",
    definition:
      "Mucosal disruption of the stomach or duodenum beyond the muscularis mucosa, most commonly caused by H. pylori infection (80% of duodenal, 60% of gastric ulcers) or NSAIDs. The surgical emergency is perforation — full-thickness disruption causing leakage of gastric contents into the peritoneum and chemical, then bacterial peritonitis.",
    diagnosticCriteria:
      "Perforated PUD: upright CXR — free air under diaphragm (pneumoperitoneum) in 70–80% of perforations. CT abdomen/pelvis without contrast if CXR non-diagnostic (more sensitive). Diagnosis of PUD/active ulcer: EGD (upper endoscopy) — gold standard; always biopsy gastric ulcers (5–10% are gastric cancer). H. pylori testing: urea breath test or stool antigen (non-invasive, highly accurate); endoscopic biopsy with rapid urease test (RUT) in active bleeding setting. Labs: CBC, BMP, amylase/lipase (rule out pancreatitis), lactate (perforation), type and screen.",
    presentation: {
      chiefComplaint: [
        "\"I suddenly had the worst stomach pain I've ever had\"",
        "\"My stomach hurts right in the middle, especially after meals\"",
        "\"I take ibuprofen daily and now I'm vomiting blood\"",
      ],
      associatedSymptoms: [
        "Perforation: sudden severe epigastric pain ('thunderclap'), rapid spread to entire abdomen",
        "Rigid, board-like abdomen (peritonitis)",
        "Referred right shoulder pain (diaphragmatic irritation)",
        "Nausea/vomiting",
        "Tachycardia, hypotension (late — septic shock)",
        "Uncomplicated DU: epigastric pain relieved by eating (food buffers acid)",
        "Uncomplicated GU: epigastric pain worse with eating",
      ],
      demographics:
        "H. pylori (most common worldwide — 80% DU, 60% GU). NSAIDs (second — impair prostaglandin-mediated mucosal protection). Smoking, alcohol, stress ulcers (ICU — Curling's burn, Cushing's head trauma), Zollinger-Ellison syndrome (gastrinoma — refractory multiple ulcers).",
    },
    distinguishingFeatures:
      "High-yield boards: Duodenal ulcer (D1 anterior wall) → perforates (free air). Duodenal ulcer (D1 posterior wall) → erodes gastroduodenal artery (GDA) → massive UGIB. Gastric ulcers: always biopsy at EGD (malignancy risk). Posterior ulcers erode into pancreas (elevated amylase). Zollinger-Ellison: multiple refractory ulcers + fasting gastrin >1,000 pg/mL + MEN-1 association.",
    redFlags: [
      "Free air on CXR/CT — perforated peptic ulcer, emergent surgical repair",
      "Massive UGIB (hematemesis, hemodynamic instability) — GDA erosion from posterior DU — emergent EGD",
      "Gastric outlet obstruction (persistent vomiting, succussion splash, weight loss) — pyloric scarring",
      "Gastric ulcer not healing after 8–12 weeks of PPI — rebiopsy (exclude cancer)",
    ],
    mnemonics: [
      {
        name: "DU Perforation vs Bleeding by Location",
        content:
          "D1 Anterior ulcer → Perforates (free air under diaphragm)\nD1 Posterior ulcer → Bleeds (erodes Gastroduodenal Artery)\n\nGastric ulcer: ALWAYS biopsy — 5–10% malignant",
      },
      {
        name: "H. pylori Treatment: OCA",
        content:
          "Standard Triple Therapy × 14 days:\nO — Omeprazole (PPI)\nC — Clarithromycin\nA — Amoxicillin (if PCN allergy: Metronidazole)\n\nConfirm eradication: urea breath test or stool antigen 4 weeks after completing therapy",
      },
    ],
    pimpingQuestions: [
      "What is the surgical repair for a perforated peptic ulcer (Graham patch)?",
      "What test is best for diagnosing H. pylori in a patient with active GI bleeding?",
      "What is Zollinger-Ellison syndrome and how is it diagnosed?",
      "Why must all gastric ulcers be biopsied at endoscopy?",
      "Explain why duodenal ulcer pain is relieved by eating while gastric ulcer pain is worsened.",
      "What are Curling's and Cushing's ulcers?",
    ],
  },
  {
    id: "gs-breast-cancer",
    name: "Breast Cancer",
    icdCode: "C50.919",
    rotation: "general-surgery",
    category: "Reproductive / Breast Surgery",
    definition:
      "Malignant neoplasm of the breast; most common cancer in women (1 in 8 lifetime risk). Invasive ductal carcinoma (IDC) accounts for 70–80%. DCIS is the most common non-invasive type. Characterized by receptor status (ER, PR, HER2) and Ki-67, defining molecular subtypes that guide treatment. Breast-conserving surgery (BCS) + radiation is equivalent to mastectomy for early-stage disease.",
    diagnosticCriteria:
      "Triple assessment: (1) Clinical breast exam (palpable mass, skin changes, nipple discharge); (2) Mammography ± ultrasound — BI-RADS classification (4/5 → core needle biopsy); (3) Core needle biopsy (CNB) — histology, grade, ER/PR/HER2 status, Ki-67. BI-RADS 1–2: benign/negative. BI-RADS 3: probably benign (short-interval 6-month US). BI-RADS 4: suspicious (biopsy). BI-RADS 5: highly suspicious (biopsy). BI-RADS 6: known malignancy. Breast MRI: high sensitivity (90%) — indicated for BRCA+ screening, dense breasts, occult primary, extent of disease. Oncotype DX (21-gene): ER+/HER2−/N0–1 — recurrence score ≥26 → add chemotherapy (TAILORx trial).",
    presentation: {
      chiefComplaint: [
        "\"I found a lump in my breast — it's hard and feels stuck\"",
        "\"My mammogram showed something suspicious\"",
        "\"My nipple is inverted and there's skin dimpling\"",
      ],
      associatedSymptoms: [
        "Painless breast mass (firm, irregular, poorly mobile — vs fibroadenoma: smooth, mobile, non-tender)",
        "Skin dimpling (Cooper's ligament involvement) or peau d'orange (lymphatic invasion)",
        "Nipple retraction, bloody/clear nipple discharge",
        "Axillary lymphadenopathy (firm, matted nodes — metastatic)",
        "Inflammatory breast cancer: diffuse erythema, warmth, peau d'orange ≥1/3 of breast (no discrete mass — often misdiagnosed as mastitis)",
      ],
      demographics:
        "Most common cancer in women; BRCA1/2 mutation (lifetime risk 60–85%), early menarche/late menopause, nulliparity, HRT (estrogen + progesterone), prior chest radiation (Hodgkin's), atypical hyperplasia on prior biopsy.",
    },
    distinguishingFeatures:
      "Painless hard irregular mass (vs painful cyst vs smooth mobile fibroadenoma); inflammatory BC = no discrete mass, diffuse erythema + peau d'orange (dermal lymphatic invasion on skin biopsy — Stage IIIB); Paget's disease = eczematous nipple-areola = underlying DCIS or invasive cancer; BI-RADS guides next step",
    redFlags: [
      "Inflammatory breast cancer presentation — skin punch biopsy needed urgently (high stage, poor prognosis)",
      "Bloody nipple discharge (possible DCIS — ductogram or duct excision)",
      "Palpable axillary lymphadenopathy in young woman (may be occult breast primary)",
      "BRCA1/2 mutation carrier — annual MRI + mammogram starting age 25",
    ],
    mnemonics: [
      {
        name: "BI-RADS Cheat Sheet",
        content:
          "1–2 = Negative/benign → Routine screening\n3 = Probably benign → Short-interval follow-up (6 months)\n4 = Suspicious → Core needle biopsy\n5 = Highly suspicious → Core needle biopsy\n6 = Known malignancy",
      },
      {
        name: "Breast Cancer Molecular Subtypes",
        content:
          "Luminal A: ER+/PR+/HER2−/Ki-67 low → Endocrine therapy only (best prognosis)\nLuminal B: ER+/HER2+ or high Ki-67 → Endocrine ± chemo\nHER2-enriched: ER−/PR−/HER2+ → Trastuzumab + chemo\nTriple Negative (TNBC): ER−/PR−/HER2− → Chemo ± pembrolizumab (KEYNOTE-522)",
      },
    ],
    pimpingQuestions: [
      "What is the triple assessment for a breast mass?",
      "What is the Z0011 trial and how did it change axillary lymph node management?",
      "What is Oncotype DX and when is it used?",
      "Compare BCS + radiation vs mastectomy — when is mastectomy preferred?",
      "What is inflammatory breast cancer and how is it diagnosed?",
      "What is Paget's disease of the nipple?",
    ],
  },
  {
    id: "gs-thyroid-nodule",
    name: "Thyroid Nodule and Thyroid Cancer",
    icdCode: "E04.1",
    rotation: "general-surgery",
    category: "Endocrinology / Thyroid",
    definition:
      "A thyroid nodule is a discrete lesion radiographically distinct from surrounding thyroid parenchyma; malignancy risk 5–15%. Thyroid cancer types: Papillary (80–85%, excellent prognosis), Follicular (10–15%), Hürthle cell, Medullary (5% — C-cell, calcitonin-secreting, MEN-2 associated), Anaplastic (<1%, median survival 6 months). Workup is driven by TSH level and ultrasound features (ACR-TIRADS).",
    diagnosticCriteria:
      "Step 1: TSH — if suppressed: radionuclide thyroid scan (hot nodule = autonomous/benign; cold nodule = malignancy risk). If normal/high TSH: thyroid ultrasound with ACR-TIRADS scoring. ACR-TIRADS TR5 (highly suspicious): solid hypoechoic, taller-than-wide, irregular margins, microcalcifications → FNA at ≥1 cm. FNA with Bethesda classification: I (nondiagnostic), II (benign 2–4% risk), III (AUS 5–15%), IV (follicular neoplasm 15–30%), V (suspicious 60–75%), VI (malignant 97–99%). Calcitonin if medullary thyroid cancer or MEN-2 suspected. Thyroglobulin NOT useful for nodule evaluation — used only for post-thyroidectomy surveillance.",
    presentation: {
      chiefComplaint: [
        "\"I noticed a lump in my neck\"",
        "\"My voice has changed and I feel something in my throat\"",
        "\"Imaging found a nodule on my thyroid\"",
      ],
      associatedSymptoms: [
        "Usually asymptomatic (incidental on imaging)",
        "Compressive symptoms: dysphagia, dyspnea (tracheal compression), voice change (RLN invasion)",
        "Hoarseness (concerning for RLN invasion by cancer)",
        "Rapid growth is concerning (anaplastic thyroid cancer or lymphoma)",
        "Cervical lymphadenopathy (papillary or medullary cancer — lymphatic spread)",
      ],
      demographics:
        "Malignancy risk factors: age <20 or >70, male sex, childhood head/neck radiation, family history of thyroid cancer or MEN syndrome, hoarseness (RLN invasion), rapid growth, firm/fixed nodule, cervical lymphadenopathy.",
    },
    distinguishingFeatures:
      "Papillary thyroid cancer (PTC): 'Orphan Annie eye' nuclei and psammoma bodies on FNA; BRAF V600E in 40–60%; lymph node mets common but prognosis excellent (10-year survival >90%). Medullary thyroid cancer: C-cell origin; calcitonin elevated; 25% MEN-2 — ALWAYS check for pheochromocytoma first before surgery. Anaplastic: rapidly enlarging hard neck mass invading adjacent structures; emergent FNA/biopsy.",
    redFlags: [
      "Hoarseness with thyroid nodule — laryngoscopy before surgery (RLN invasion)",
      "Rapidly growing hard neck mass — anaplastic thyroid cancer or lymphoma, urgent FNA",
      "Medullary thyroid cancer: check plasma metanephrines to rule out pheochromocytoma BEFORE surgery",
      "MEN-2 family history: all first-degree relatives need RET germline mutation testing",
    ],
    mnemonics: [
      {
        name: "Thyroid Cancer: Pretty Females Have More Attitude",
        content:
          "P — Papillary (80–85%) — best prognosis, psammoma bodies, Orphan Annie nuclei, BRAF\nF — Follicular (10–15%) — vascular invasion, spreads hematogenously\nH — Hürthle cell — oxyphilic, more aggressive than follicular\nM — Medullary (5%) — C-cell, calcitonin, MEN-2, RET mutation\nA — Anaplastic (<1%) — worst prognosis, median survival 6 months",
      },
      {
        name: "MEN-2 Syndromes",
        content:
          "MEN-2A: Medullary Thyroid Cancer + Pheochromocytoma + Parathyroid hyperplasia\nMEN-2B: MTC + Pheo + Marfanoid habitus + Mucosal neuromas (no hyperparathyroidism)\n\nALWAYS rule out pheochromocytoma (plasma metanephrines) BEFORE thyroid surgery in MEN-2",
      },
    ],
    pimpingQuestions: [
      "Describe the ACR-TIRADS classification for thyroid nodules and FNA thresholds.",
      "What is the Bethesda classification and what does each category mean?",
      "What is the surgical management of papillary thyroid cancer (lobectomy vs total thyroidectomy)?",
      "What are the risks of total thyroidectomy (RLN injury, hypoparathyroidism)?",
      "Why must you rule out pheochromocytoma before operating on medullary thyroid cancer?",
      "What is the role of radioactive iodine ablation in differentiated thyroid cancer?",
    ],
  },
  {
    id: "gs-wound-infection",
    name: "Surgical Site Infection (SSI)",
    icdCode: "T81.49XA",
    rotation: "general-surgery",
    category: "Infectious Disease / Perioperative",
    definition:
      "Infection occurring at or near the surgical incision within 30 days of operation (or 90 days if prosthetic implant). CDC classification: superficial incisional (skin/subcutaneous), deep incisional (fascia/muscle), organ/space (body cavity). Most common healthcare-associated infection. Necrotizing fasciitis is the life-threatening extreme — requires immediate surgical debridement.",
    diagnosticCriteria:
      "Clinical: erythema, warmth, induration, purulent drainage, fever, wound dehiscence; typically presents 3–7 days post-op. Wound culture (aspirate or tissue biopsy — not swab) + Gram stain; blood cultures if systemic sepsis. CT for deep space infection or abscess (organ/space SSI). CT for suspected necrotizing fasciitis: gas tracking along fascial planes (sensitivity 80%) — do NOT delay surgery if clinical suspicion high. LRINEC score ≥6: high risk for necrotizing fasciitis (CRP >150, WBC >15k, Hgb <13.5, Na <135, Cr >1.6, glucose >180). CDC Wound Classification: Class I (clean) 1–5% SSI; Class II (clean-contaminated) 5–10%; Class III (contaminated) 10–17%; Class IV (dirty) 27–40%.",
    presentation: {
      chiefComplaint: [
        "\"My incision is red, swollen, and draining pus\"",
        "\"My wound pain is getting worse after it was improving\"",
        "\"I have fever and my wound looks infected\"",
      ],
      associatedSymptoms: [
        "Wound erythema, warmth, induration, purulent drainage",
        "Wound dehiscence (fascial separation — evisceration if bowel exposed = emergency)",
        "Fever (3–5 days post-op)",
        "Crepitus in wound (Clostridium or polymicrobial necrotizing fasciitis — EMERGENCY)",
        "Disproportionate pain + skin discoloration + crepitus = necrotizing fasciitis (do not wait for imaging)",
        "Systemic sepsis with deep space infection",
      ],
      demographics:
        "Risk factors: DM (hyperglycemia impairs neutrophil function), obesity (poor tissue perfusion), malnutrition (impaired wound healing), immunosuppression (steroids, chemotherapy), smoking, pre-existing infection, prolonged operation, contaminated wound class, emergency vs elective surgery.",
    },
    distinguishingFeatures:
      "Necrotizing fasciitis (NF): severe disproportionate pain early → hypesthesia (nerve death) → rapidly spreading gray/blue skin discoloration → crepitus → multi-organ failure. LRINEC score ≥6 = high risk. Type I (polymicrobial) vs Type II (monomicrobial — Group A Strep, rapidly fatal). DO NOT WAIT for imaging if NF suspected clinically — immediate OR.",
    redFlags: [
      "Crepitus in wound, bullae, rapidly spreading erythema — necrotizing fasciitis: IMMEDIATE surgical debridement",
      "Wound dehiscence with evisceration — sterile moist gauze over bowel, emergency OR",
      "Systemic sepsis from SSI — source control (drainage/debridement) is the priority",
      "Early SSI <48h post-op — consider Streptococcal or Clostridial species (highly toxic)",
    ],
    mnemonics: [
      {
        name: "NF = Necrotizing Fasciitis Warning Signs",
        content:
          "Pain out of proportion to exam (early)\nRapid spread of erythema\nCrepitus (gas in tissues)\nBullae or skin discoloration (gray/blue)\nSystemic toxicity (fever, hypotension)\n\nLRINEC ≥6 = high risk → CT or direct OR\nType I: polymicrobial (diabetic/elderly)\nType II: Group A Strep (healthy young patient)",
      },
      {
        name: "SSI Prophylaxis Rule: 60-24",
        content:
          "Give antibiotics within 60 minutes before incision\n(30 minutes for fluoroquinolones and vancomycin)\nRedose if >2 half-lives pass or blood loss >1.5L\nDiscontinue within 24 hours post-op\n(48h for cardiac surgery)",
      },
    ],
    pimpingQuestions: [
      "What are the most common organisms in SSI by wound class?",
      "Describe the CDC wound classification and expected SSI rates for each class.",
      "What is the LRINEC score and how is it used?",
      "Distinguish Type I from Type II necrotizing fasciitis.",
      "What is the appropriate antibiotic prophylaxis regimen for colorectal surgery?",
      "Why is crepitus in a wound a surgical emergency?",
    ],
  },

  // ─── Group A: GI / Abdominal ──────────────────────────────────────────────

  {
    id: "gs-diverticulitis",
    name: "Diverticular Disease",
    icdCode: "K57.30",
    rotation: "general-surgery",
    category: "Gastroenterology / Abdominal",
    definition:
      "Diverticulosis: outpouchings (false diverticula — mucosal/submucosal herniation through weak points in colonic wall where blood vessels penetrate). Most common in sigmoid colon. Diverticulitis: microperforation of a diverticulum with pericolic infection/inflammation. Spectrum: uncomplicated (most, 75%) to complicated (abscess, fistula, obstruction, free perforation). Diverticular bleeding: painless hematochezia, right-sided diverticula bleed more despite left-sided predominance.",
    diagnosticCriteria:
      "CT abdomen/pelvis with IV contrast: gold standard for diverticulitis — pericolic fat stranding, colonic wall thickening, diverticula, abscess (Hinchey classification). Hinchey: I = pericolic abscess, II = pelvic/distant abscess, III = purulent peritonitis, IV = feculent peritonitis. Labs: leukocytosis, elevated CRP. Colonoscopy: NOT during acute attack (risk of perforation) — perform 6–8 weeks later to rule out malignancy. For bleeding: colonoscopy after prep (identifies and treats in 70–90%); CT angiography if rapid bleeding; tagged RBC scan for low-rate bleeds.",
    presentation: {
      chiefComplaint: [
        "\"I have pain in my left lower belly and fever\"",
        "\"I'm passing a lot of bright red blood from my rectum but no pain\"",
      ],
      associatedSymptoms: [
        "Diverticulitis: LLQ pain (sigmoid — 'left-sided appendicitis'), fever, nausea, change in bowel habits",
        "Tender palpable mass in LLQ with abscess",
        "Diverticular bleeding: painless bright red or maroon rectal bleeding; stops spontaneously 75%",
        "Fistula (colovesical most common): pneumaturia, fecaluria, recurrent UTIs",
        "Obstruction: abdominal distension, obstipation, vomiting",
      ],
      demographics: "Diverticulosis affects 10% of adults <40, 60% by age 60, 80% by age 80 in Western nations. Low-fiber diet, sedentary lifestyle, obesity, NSAIDs increase risk. Most diverticulitis episodes are first episodes.",
    },
    distinguishingFeatures:
      "Diverticulitis = LLQ pain + fever + CT findings. Diverticular bleeding = painless massive hematochezia (NO pain distinguishes from ischemic colitis which has pain). Colovesical fistula = pneumaturia + recurrent polymicrobial UTIs in older male. Key: if fistula present, surgery required. Uncomplicated diverticulitis may be treated outpatient with oral antibiotics or even observation alone (recent evidence).",
    redFlags: [
      "Free perforation (Hinchey III/IV): emergent surgery — Hartmann's procedure or primary anastomosis with diverting ileostomy",
      "Abscess ≥4 cm: CT-guided percutaneous drainage, then elective surgery at 6–8 weeks",
      "Failure of conservative management: consider surgical consultation",
      "Diverticular bleeding that requires >4 units pRBCs/24h or is recurrent: surgical resection",
    ],
    mnemonics: [
      {
        name: "Hinchey Classification: I-II-III-IV",
        content:
          "I = pericolic abscess (treat with antibiotics)\nII = pelvic/distant abscess (CT-guided drain)\nIII = purulent peritonitis (OR — primary anastomosis possible)\nIV = feculent peritonitis (OR — Hartmann's, staged repair)\n\nRemember: Diverticulitis = 'Left-sided appendicitis'\nDiverticular bleeding = Painless (ischemic colitis = painful)",
      },
    ],
    pimpingQuestions: [
      "How is uncomplicated vs complicated diverticulitis defined?",
      "What is the Hinchey classification and how does each stage guide management?",
      "When is elective sigmoid colectomy recommended after diverticulitis episodes?",
      "How do you distinguish diverticular bleeding from ischemic colitis?",
      "What is a colovesical fistula and how does it present?",
    ],
  },

  {
    id: "gs-gi-bleeding",
    name: "Gastrointestinal Bleeding",
    icdCode: "K92.2",
    rotation: "general-surgery",
    category: "Gastroenterology / GI Bleeding",
    definition:
      "GI hemorrhage classified by anatomic source: UGIB (proximal to ligament of Treitz — esophagus, stomach, duodenum) vs. LGIB (distal to ligament of Treitz — small bowel, colon). UGIB most common cause: peptic ulcer disease (PUD) 50%. LGIB most common cause: diverticulosis (30–40%), followed by angiodysplasia, hemorrhoids, colorectal cancer. Obscure GI bleeding: persistent after negative upper and lower endoscopy — often from small bowel (angiodysplasia, Meckel's).",
    diagnosticCriteria:
      "UGIB: NGT lavage (blood = UGIB); esophagogastroduodenoscopy (EGD) — diagnostic and therapeutic; BUN:Cr ratio >20:1 (blood digested in GI → urea absorbed). LGIB: colonoscopy after rapid prep; CT angiography if bleeding >0.5 mL/min; tagged RBC scan if 0.1–0.5 mL/min. Hemodynamic resuscitation first. Glasgow-Blatchford Score (GBS) for UGIB risk stratification: GBS 0 = low risk, can be managed outpatient. Rockall score: post-endoscopy prognosis (rebleeding, mortality). Forrest Classification: Ia (spurting) = highest rebleed risk; Ib (oozing); IIa (visible vessel) = endoscopic treatment; IIb (clot); IIc (flat pigment); III (clean base) = low risk.",
    presentation: {
      chiefComplaint: [
        "\"I'm vomiting blood\" or \"I'm vomiting something that looks like coffee grounds\"",
        "\"I'm passing tarry black stools\"",
        "\"I'm passing bright red blood from my rectum\"",
      ],
      associatedSymptoms: [
        "UGIB: hematemesis (bright red = active arterial) or coffee-ground emesis (digested blood = slower bleed), melena (tarry black sticky stool — most specific for UGIB)",
        "LGIB: hematochezia (bright red or maroon blood PR — can be UGIB if rapid enough)",
        "Syncope, presyncope, orthostatic hypotension with significant blood loss",
        "Epigastric pain (PUD), cirrhosis stigmata (varices), prior radiation (radiation proctitis)",
      ],
      demographics: "UGIB incidence ~100/100,000/year; mortality 5–10%. NSAID/aspirin use, H. pylori infection, and anticoagulation are major risk factors. LGIB: older adults; diverticulosis peaks 60–80 years. Angiodysplasia: associated with aortic stenosis (Heyde syndrome) and CKD.",
    },
    distinguishingFeatures:
      "UGIB vs LGIB: BUN:Cr >20:1 favors UGIB. Melena (black tarry) = at least 100–200 mL proximal bleed; hematochezia = usually LGIB but massive UGIB can present this way. Coffee-ground emesis = slower UGIB (blood digested by gastric acid). 10% of hematochezia is from UGIB — always exclude upper source if hemodynamically unstable.",
    redFlags: [
      "Hemodynamic instability (HR >100, SBP <90): two large-bore IVs, type and cross, urgent endoscopy after resuscitation, GI and surgery consult",
      "Hematemesis with bright red blood: likely arterial bleed (Dieulafoy lesion, variceal) — ICU admission",
      "Rebleeding after endoscopic therapy: repeat endoscopy or IR embolization; if fails → surgery",
      "Coagulopathy / anticoagulated patient: reverse anticoagulation urgently; discuss risk-benefit with cardiology if on anticoagulation for high-risk indication",
    ],
    mnemonics: [
      {
        name: "UGIB Causes — TOP GUN",
        content:
          "T — Tears (Mallory-Weiss)\nO — Other (AVM, Dieulafoy)\nP — Peptic ulcer disease (#1)\nG — Gastritis / gastropathy\nU — Ulcer (stress)\nN — Not gastric — esophageal varices\n\nForrest Ia/Ib/IIa = Treat endoscopically\nForrest IIb/IIc/III = Watch carefully or discharge\n\nBUN:Cr >20:1 → Upper source",
      },
    ],
    pimpingQuestions: [
      "What is the Forrest classification and which lesions require endoscopic treatment?",
      "How does BUN:Cr ratio help differentiate UGIB from LGIB?",
      "What is Dieulafoy's lesion?",
      "What is the Glasgow-Blatchford score used for?",
      "When do you proceed to surgery for GI bleeding after failed endoscopic therapy?",
    ],
  },

  {
    id: "gs-ileus-obstruction",
    name: "Ileus and Intestinal Obstruction",
    icdCode: "K56.7",
    rotation: "general-surgery",
    category: "Gastroenterology / Abdominal",
    definition:
      "Mechanical small bowel obstruction (SBO): physical blockade of intestinal lumen — adhesions (most common, 60–70% of SBO), hernias, tumors, volvulus, intussusception, Crohn's stricture. Ileus (paralytic/adynamic): failure of intestinal peristalsis without mechanical blockade — post-operative (most common), electrolyte derangements (hypokalemia), peritonitis, medications (opioids, anticholinergics). Large bowel obstruction (LBO): colorectal cancer most common cause; also volvulus (sigmoid > cecal), Ogilvie syndrome (pseudo-obstruction).",
    diagnosticCriteria:
      "Abdominal X-ray: dilated loops of bowel (>3 cm small bowel, >6 cm colon, >9 cm cecum — '3-6-9 rule'); air-fluid levels; absence of gas in rectum (complete obstruction). CT abdomen/pelvis: gold standard — transition point (mechanical obstruction), closed-loop obstruction, strangulation (mesenteric fat stranding, pneumatosis), Ogilvie's. Labs: metabolic alkalosis (vomiting → Cl loss), hypokalemia; leukocytosis and lactate elevation suggest strangulation.",
    presentation: {
      chiefComplaint: [
        "\"I haven't passed gas or had a bowel movement in days and my belly is getting bigger\"",
        "\"I'm having waves of severe belly pain with vomiting\"",
      ],
      associatedSymptoms: [
        "Crampy, intermittent abdominal pain in waves (peristalsis against obstruction) — classic for SBO",
        "Obstipation (inability to pass gas or stool) — complete obstruction",
        "Vomiting: early with proximal obstruction (bilious), late with distal obstruction",
        "Abdominal distension (more pronounced with distal/LBO)",
        "High-pitched 'tinkling' bowel sounds early; absent sounds late (strangulation)",
        "Postoperative ileus: diffuse distension, no bowel sounds, develops 3–5 days post-op",
      ],
      demographics: "Adhesions from prior abdominal surgery account for 75% of all SBO. Volvulus: sigmoid volvulus in elderly/institutionalized with chronic constipation; cecal volvulus in younger patients. Intussusception: children (lead point = hypertrophied Peyer's patches); adults (lead point = polyp/tumor).",
    },
    distinguishingFeatures:
      "Ileus vs SBO: ileus = diffuse dilation throughout bowel without transition point on CT; SBO = dilated proximal with collapsed distal bowel and identifiable transition point. Strangulation signs: severe constant pain (rather than colicky), fever, leukocytosis, peritoneal signs, lactate elevation — surgical emergency. Closed-loop obstruction (two points of obstruction — most dangerous: C or U shape on CT): risk of rapid vascular compromise.",
    redFlags: [
      "Signs of strangulation (fever, peritonitis, lactate >2, leukocytosis >15k): emergent surgery — do not delay for NG decompression",
      "Closed-loop obstruction on CT: emergent surgery regardless of clinical appearance",
      "Cecal diameter >12 cm (Ogilvie's) or complete LBO: risk of perforation — urgent colonoscopic decompression or surgery",
      "Complete SBO not resolving with conservative management at 48–72 hours: operative intervention",
    ],
    mnemonics: [
      {
        name: "Strangulation Signs — FLIP",
        content:
          "F — Fever\nL — Lactate elevation\nI — (Peritoneal signs) = guarding, rigidity\nP — Pain out of proportion (constant, not colicky)\n\nThe '3-6-9 Rule' for bowel dilation on X-ray:\nSmall bowel >3 cm = abnormal\nColon >6 cm = abnormal\nCecum >9 cm = risk of perforation",
      },
    ],
    pimpingQuestions: [
      "What is the 3-6-9 rule for bowel dilation on plain film?",
      "How do you distinguish ileus from mechanical SBO clinically and radiographically?",
      "What are the signs of bowel strangulation and why is it a surgical emergency?",
      "What is Ogilvie syndrome and how is it managed?",
      "What is the management of a stable patient with known adhesive SBO?",
    ],
  },

  {
    id: "gs-ibd-surgical",
    name: "Inflammatory Bowel Disease — Surgical Management",
    icdCode: "K50.90",
    rotation: "general-surgery",
    category: "Gastroenterology / Inflammatory Bowel Disease",
    definition:
      "Surgical aspects of Crohn's disease (CD) and ulcerative colitis (UC). CD: transmural inflammation, skip lesions, any GI segment (ileocecal most common), NOT cured by surgery. UC: mucosal/submucosal inflammation, continuous from rectum proximally, confined to colon — CURED by total proctocolectomy. Key surgical distinction: CD surgery = bowel-sparing (strictureplasty, limited resection); UC surgery = total colectomy with IPAA (ileal pouch-anal anastomosis, 'J-pouch') or Brooke ileostomy.",
    diagnosticCriteria:
      "Indications for surgery in UC: fulminant colitis, toxic megacolon, hemorrhage, dysplasia, malignancy, medically refractory disease. Toxic megacolon: colon dilation >6 cm with systemic toxicity (fever, tachycardia, leukocytosis) — medical management first (IV steroids, antibiotics, bowel rest, NG decompression), surgery if no improvement in 24–72h. Indications for surgery in CD: fistula, abscess, stricture/obstruction, cancer, medically refractory disease, growth failure (pediatric). Imaging: CT for abscess/fistula; MRI enterography for small bowel CD; colonoscopy with biopsies.",
    presentation: {
      chiefComplaint: [
        "\"My colitis is flaring and I'm having bloody diarrhea 10 times a day\"",
        "\"I have severe abdominal pain, fever, and my belly is distended\"",
      ],
      associatedSymptoms: [
        "Fulminant UC: bloody diarrhea >10 times/day, fever, tachycardia, abdominal pain, distension",
        "Toxic megacolon: acute colonic dilation + fever + tachycardia — DO NOT give antidiarrheals (worsen dilation)",
        "Crohn's abscess: tender abdominal mass, fever, leukocytosis",
        "Crohn's fistula: enterocutaneous (bowel to skin), enterovesical (bowel to bladder — pneumaturia), rectovaginal, enteroenteric",
      ],
      demographics: "UC: 20–40 year peak; bimodal 50–80. Crohn's: 15–35 year peak; Northern European. Both M=F. Extraintestinal manifestations: erythema nodosum, pyoderma gangrenosum, primary sclerosing cholangitis (UC-associated), uveitis, ankylosing spondylitis.",
    },
    distinguishingFeatures:
      "UC: bloody diarrhea, mucus, rectal involvement always, continuous, cured by surgery. CD: RLQ pain, diarrhea (may not be bloody), perianal disease (fistulas, abscesses), skip lesions, strictures, fistulas. Key: CD fistulas to other organs = strong surgical indication. Toxic megacolon: X-ray shows transverse colon >6 cm — do NOT do colonoscopy (perforation risk); early surgery consultation.",
    redFlags: [
      "Toxic megacolon: colon >6 cm + systemic toxicity — if no improvement in 24–72h → emergent colectomy",
      "Free perforation: emergent Hartmann's procedure (Hartmann's most common in UC emergency)",
      "Massive lower GI hemorrhage from IBD: urgent colectomy if endoscopic treatment fails",
      "Evidence of colorectal cancer in UC: total proctocolectomy",
    ],
    mnemonics: [
      {
        name: "UC vs Crohn's Surgical Key Points",
        content:
          "UC → surgery is CURATIVE (total proctocolectomy)\nCD → surgery is PALLIATIVE (bowel-sparing preferred)\n\nUC Surgery Indications: FDFMD\nF — Fulminant colitis\nD — Dysplasia/cancer\nF — Failed medical therapy\nM — Massive hemorrhage\nD — Dangerous (toxic megacolon)\n\nToxic Megacolon: DON'T give antidiarrheals, opioids, anticholinergics",
      },
    ],
    pimpingQuestions: [
      "How does the surgical approach to UC differ from Crohn's disease?",
      "What are the indications for surgery in ulcerative colitis?",
      "What is toxic megacolon and how is it managed?",
      "What is the J-pouch (IPAA) and what are its complications?",
      "How do you manage a Crohn's abscess vs fistula surgically?",
    ],
  },

  {
    id: "gs-anal-disorders",
    name: "Anal and Anorectal Disorders",
    icdCode: "K64.9",
    rotation: "general-surgery",
    category: "Gastroenterology / Colorectal",
    definition:
      "Spectrum of benign anorectal conditions seen in general surgery: hemorrhoids (internal — above dentate line, painless bleeding; external — below dentate line, painful thrombosis), anal fissures (tear in anoderm — most common cause of painful rectal bleeding), anorectal abscess (cryptoglandular origin — perianal most common type), anal fistula (chronic tract from anal crypt to perianal skin — Parks classification), pilonidal disease (sinus/abscess at gluteal cleft from ingrown hair), anal cancer (SCC, associated with HPV-16/18).",
    diagnosticCriteria:
      "Diagnosis largely clinical. Hemorrhoids: anoscopy (internal: grade I–IV based on prolapse); external: visible thrombosed bluish nodule. Anal fissure: posterior midline (90%) — if lateral fissure → consider Crohn's, syphilis, TB, HIV, malignancy. Anorectal abscess: fluctuant, tender perirectal mass — do NOT delay drainage for imaging (unless deep/supralevator). MRI pelvis: for complex fistulas and supralevator/horseshoe abscesses. Anoscopy: NOT during acute fissure episode (too painful). Anal manometry: for fissures refractory to medical therapy. Anal cancer: biopsy + PET-CT for staging; SCC treated with Nigro protocol (chemoradiation) — NOT surgery first.",
    presentation: {
      chiefComplaint: [
        "\"I have bright red blood on the toilet paper after a bowel movement\"",
        "\"I have severe pain during and after bowel movements\"",
        "\"I have a painful lump near my rectum with swelling and fever\"",
      ],
      associatedSymptoms: [
        "Internal hemorrhoids: painless bright red rectal bleeding (on paper/in bowl, not mixed with stool), mucus discharge, prolapse",
        "External hemorrhoid thrombosis: acute severe perianal pain + tender firm bluish nodule",
        "Anal fissure: sharp tearing pain with BM + bright red bleeding; pain lasting 30–60 min post-BM",
        "Anorectal abscess: fever, perirectal/perianal fluctuant tender mass, leukocytosis",
        "Fistula-in-ano: chronic perianal drainage (purulent/bloody), intermittent pain",
        "Pilonidal abscess: midline or near-midline gluteal cleft abscess in young hirsute males",
      ],
      demographics: "Hemorrhoids: 75% of people will have symptomatic hemorrhoids by age 50. Anal fissures: young adults; associated with constipation, Crohn's. Anorectal abscess: peak 20–40 years, male > female 2:1. Anal cancer: HPV-16/18, homosexual men, HIV, immunosuppression, history of anal warts.",
    },
    distinguishingFeatures:
      "Internal hemorrhoids: above dentate line = NO pain (no somatic innervation); PAINLESS bleeding; prolapse grades I–IV. External hemorrhoids: below dentate line = somatic innervation = PAINFUL; thrombosed = acute hard tender nodule. Anal fissure: POSTERIOR midline tear; hallmark = pain lasting after BM. Lateral fissure = red flag for Crohn's/STI/malignancy. Anorectal abscess: ALWAYS drain — do NOT prescribe antibiotics alone (inadequate, not curative); do NOT miss horseshoe abscess (requires OR).",
    redFlags: [
      "Perirectal abscess in diabetic or immunocompromised: risk of necrotizing anorectal infection — urgent surgical debridement",
      "Lateral anal fissure: must rule out Crohn's disease, syphilis, HIV, anal malignancy",
      "Rectal bleeding not explained by hemorrhoids: colonoscopy to rule out colorectal neoplasm (especially if >50 or red flags)",
      "Horseshoe abscess: bilateral extension through posterior deep anal space — requires OR, counter-incision drainage",
    ],
    mnemonics: [
      {
        name: "Hemorrhoid Grades and Treatment",
        content:
          "Grade I: Bleeds, does NOT prolapse → dietary fiber, sitz baths\nGrade II: Prolapse that spontaneously reduces → office procedures (rubber band ligation, sclerotherapy)\nGrade III: Prolapse requiring manual reduction → rubber band ligation or hemorrhoidectomy\nGrade IV: Irreducible prolapse / thrombosed → hemorrhoidectomy\n\nAnal Fissure Treatment: 3-step ladder\n1st: Fiber + stool softeners + sitz baths\n2nd: Topical nifedipine or nitroglycerin (reduces sphincter spasm)\n3rd: Botulinum toxin injection or lateral internal sphincterotomy",
      },
    ],
    pimpingQuestions: [
      "How does the dentate line divide hemorrhoid innervation and symptoms?",
      "What is the treatment algorithm for internal hemorrhoids by grade?",
      "Why is a lateral anal fissure a red flag?",
      "How do you drain an anorectal abscess and when do you look for a fistula?",
      "What is the treatment of anal squamous cell carcinoma (Nigro protocol)?",
    ],
  },

  {
    id: "gs-peritonitis-acute-abdomen",
    name: "Peritonitis and Acute Abdomen",
    icdCode: "K65.9",
    rotation: "general-surgery",
    category: "Gastroenterology / Acute Abdomen",
    definition:
      "Peritonitis: inflammation of the peritoneal cavity — primary (spontaneous bacterial peritonitis, SBP, in cirrhosis), secondary (perforated viscus, bowel ischemia — most surgical emergencies), tertiary (persistent/recurrent after treatment). Acute abdomen: sudden onset severe abdominal pain requiring urgent evaluation. Hollow viscus perforation (peptic ulcer, diverticular, appendiceal) = most common cause of secondary peritonitis. Peritoneal signs (rigidity, guarding, rebound) indicate peritoneal involvement.",
    diagnosticCriteria:
      "Erect CXR or lateral decubitus: free air under diaphragm (pneumoperitoneum) — confirms perforation. CT abdomen/pelvis: most sensitive for pneumoperitoneum, free fluid, source identification. Labs: leukocytosis, lactic acidosis (ischemia), elevated lipase (pancreatitis). SBP diagnosis: ascitic fluid PMN ≥250 cells/mm³ on paracentesis — culture, treat empirically with cefotaxime or ceftriaxone; SAAG >1.1 g/dL (portal hypertension). Free air on imaging = perforation → emergent surgery without further workup.",
    presentation: {
      chiefComplaint: [
        "\"I have severe sudden onset abdominal pain, I can't move\"",
        "\"My whole belly is rigid and extremely painful\"",
      ],
      associatedSymptoms: [
        "Sudden onset severe diffuse abdominal pain (perforation: 'ripping'/'tearing' or sudden worst pain)",
        "Rigid abdomen ('board-like rigidity' — involuntary guarding)",
        "Rebound tenderness (release of pressure worse than palpation)",
        "Absence of bowel sounds (paralytic ileus from peritoneal irritation)",
        "Fever, tachycardia, hypotension (septic shock — late)",
        "Patient lying very still (unlike renal colic where patient is writhing)",
      ],
      demographics: "Secondary peritonitis: all ages, underlying cause determines demographics. SBP: cirrhotic patients with ascites — ascitic fluid albumin <1 g/dL, prior SBP, or active GI bleed increase risk.",
    },
    distinguishingFeatures:
      "Free air under diaphragm on erect CXR = perforated viscus = surgical emergency. SBP vs secondary peritonitis: SBP has no surgical source on imaging — PMN >250 + monomicrobial. Secondary peritonitis: polymicrobial, free air or abscess on CT. Patient lying still = peritonitis; patient writhing = renal colic or biliary colic.",
    redFlags: [
      "Free air on imaging: emergent surgical exploration — no delay for further workup",
      "Hemodynamic instability with peritoneal signs: damage control surgery — do not delay resuscitation beyond essential",
      "Missed bowel ischemia: lactate rising, fever, peritoneal signs in at-risk patient (mesenteric ischemia) — CT angiography urgently",
      "SBP in cirrhotic patient: must diagnose by paracentesis — PMN >250 = treat; do not wait for culture result",
    ],
    mnemonics: [
      {
        name: "Causes of Acute Abdomen — PAID",
        content:
          "P — Perforation (ulcer, diverticulum, appendix)\nA — Appendicitis / Abscess\nI — Ischemia (mesenteric, strangulated bowel)\nD — Distension (obstruction, volvulus)\n\nPeritoneal Signs = Surgical Emergency:\nGuarding + Rigidity + Rebound = Take to OR\n\nSBP Diagnosis: Ascitic PMN ≥250 → treat empirically NOW",
      },
    ],
    pimpingQuestions: [
      "What finding on erect CXR confirms hollow viscus perforation?",
      "How do you diagnose SBP and what is the treatment?",
      "How do you distinguish peritonitis from visceral pain clinically?",
      "What is the initial management of a patient with peritonitis and free air?",
      "What are the most common causes of secondary peritonitis in surgical patients?",
    ],
  },

  // ─── Group B: Cardiovascular / Vascular ──────────────────────────────────

  {
    id: "gs-aortic-aneurysm",
    name: "Aortic Aneurysm",
    icdCode: "I71.4",
    rotation: "general-surgery",
    category: "Cardiovascular / Vascular Surgery",
    definition:
      "Abnormal focal dilation of the aorta >1.5× normal diameter (AAA: >3 cm; thoracic: >3.5 cm ascending, >4 cm descending). Infrarenal AAA most common (95%). Risk factors: male sex, age >65, smoking (#1 modifiable RF), atherosclerosis, hypertension, family history, COPD. Wall tension (Law of Laplace: T = P × r) increases exponentially with diameter — aneurysms are prone to rupture once >5.5 cm. Thoracic aortic aneurysm (TAA): degenerative (atherosclerosis) most common; also Marfan syndrome (medial cystic necrosis), bicuspid aortic valve, syphilis (arch).",
    diagnosticCriteria:
      "Screening: USPSTF — one-time abdominal ultrasound for men 65–75 who have ever smoked (≥100 cigarettes lifetime). CT angiography (CTA): gold standard for AAA size, morphology, rupture; also used for pre-operative planning. Ultrasound: screening and surveillance (AAA <4 cm: q2–3 years; 4–5.4 cm: q6–12 months). AAA repair thresholds: elective repair if ≥5.5 cm in men, ≥5.0 cm in women, or growth >0.5–1.0 cm/6 months, or symptomatic. Ruptured AAA: hypotension + pulsatile abdominal mass + severe back/abdominal pain — immediate OR (no time for CT in unstable patient).",
    presentation: {
      chiefComplaint: [
        "\"I have severe tearing pain in my back and belly\" (ruptured AAA)",
        "\"I was told I have a dilation of my aorta on an ultrasound\" (incidental finding)",
        "\"I have pulsating sensation in my abdomen\"",
      ],
      associatedSymptoms: [
        "Most AAAs are asymptomatic — discovered incidentally on imaging",
        "Symptomatic (expanding/impending rupture): severe constant back pain, flank pain, abdominal pain",
        "Ruptured AAA triad: severe back/abdominal pain + hypotension + pulsatile abdominal mass (classic triad in only 50%)",
        "Distal embolization: 'trash foot' (blue toe syndrome from atheromatous emboli)",
        "Aortocaval fistula: high-output heart failure, pulsating bruit",
        "Aortoenteric fistula: herald bleed (small UGIB), then massive hemorrhage",
      ],
      demographics: "AAA: men 6:1 over women; peak incidence 65–75 years. Smoking increases risk 7× and accelerates growth. Family history (first-degree relative with AAA) increases risk 4–10×.",
    },
    distinguishingFeatures:
      "Ruptured AAA vs. dissection vs. renal colic: rupture = pulsatile mass (pathognomonic) + shock; dissection = tearing pain radiating to back with pulse differential; renal colic = colicky pain + hematuria + writhing. In unstable patient with suspected rupture: immediate OR. Endovascular aneurysm repair (EVAR) now preferred over open repair when anatomy permits — shorter stay, faster recovery but requires annual surveillance CT.",
    redFlags: [
      "Ruptured AAA: immediate OR — EVAR if available and patient not in extremis; do NOT waste time getting CT in hemodynamically unstable patient",
      "Symptomatic AAA (any pain, tenderness): treat as impending rupture — emergent repair regardless of size",
      "Aortoenteric fistula: herald bleed (small GI bleed in patient with prior aortic graft) — high-mortality emergency",
      "Growth >0.5 cm in 6 months: accelerated growth = increased rupture risk → elective repair",
    ],
    mnemonics: [
      {
        name: "AAA Repair Thresholds",
        content:
          "Men: ≥5.5 cm or symptomatic → repair\nWomen: ≥5.0 cm or symptomatic → repair\nGrowth: >0.5 cm/6 months or >1 cm/year → repair\n\nScreening: USPSTF — Men 65–75, ever smoked\nModality: US for surveillance; CTA for pre-op planning\n\nRuptured AAA triad:\nSevere Back/Abdominal Pain + Hypotension + Pulsatile Mass = Emergent OR",
      },
    ],
    pimpingQuestions: [
      "What are the USPSTF screening recommendations for AAA?",
      "At what size thresholds is elective AAA repair indicated?",
      "What is the classic triad of ruptured AAA?",
      "Compare open repair vs. EVAR for elective AAA.",
      "What is an aortoenteric fistula and how does it present?",
    ],
  },

  {
    id: "gs-vascular-peripheral",
    name: "Peripheral Vascular Disease and Acute Arterial Occlusion",
    icdCode: "I73.9",
    rotation: "general-surgery",
    category: "Cardiovascular / Vascular Surgery",
    definition:
      "Peripheral arterial disease (PAD): atherosclerotic narrowing of non-coronary arteries (typically lower extremities). Leriche syndrome: aortoiliac occlusion triad — bilateral hip/buttock claudication, absent femoral pulses, impotence. Acute arterial occlusion: sudden loss of arterial supply — thrombotic (in situ, on existing plaque) or embolic (cardiac source: AFib #1 — 'saddle embolus' at aortic bifurcation). Compartment syndrome: elevated pressure within a muscle compartment → ischemia — most commonly post-vascular repair, crush injury, or tight casting.",
    diagnosticCriteria:
      "PAD: ABI (ankle-brachial index) <0.9 = PAD; <0.4 = severe/critical limb ischemia. Duplex ultrasound: initial assessment. CTA/MRA: surgical planning. Arteriography: definitive, therapeutic. Acute occlusion: clinical diagnosis (6 Ps); CTA if limb viable; Doppler (absent signal confirms). Compartment syndrome: compartment pressure >30 mmHg or within 30 mmHg of diastolic BP → fasciotomy. Classic: pain out of proportion, pain with passive stretch (most sensitive early sign), paresthesia.",
    presentation: {
      chiefComplaint: [
        "\"My leg cramps terribly when I walk but gets better when I rest\" (claudication)",
        "\"My foot suddenly turned white/blue and I can't move it\" (acute occlusion)",
        "\"My leg is in a cast and now it's killing me\" (compartment syndrome)",
      ],
      associatedSymptoms: [
        "Chronic PAD: intermittent claudication (reproducible leg pain with walking, relieved by rest), decreased pulses, hair loss on lower legs, dependent rubor",
        "Critical limb ischemia: rest pain (foot pain at night relieved by hanging foot down), non-healing ulcers, gangrene",
        "Acute arterial occlusion: 6 Ps — Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia (cold)",
        "Compartment syndrome: 5 Ps — Pain out of proportion, Pressure (tense compartment), Paresthesia, Pallor, Paralysis (late)",
      ],
      demographics: "PAD: age >50, smoking (strongest RF), DM, HTN, hyperlipidemia; 8–12 million Americans. Acute embolism: AFib (most common cardiac source); mural thrombus post-MI. Compartment syndrome: young males with crush injuries, long bone fractures, post-reperfusion.",
    },
    distinguishingFeatures:
      "Embolism vs. thrombosis in acute occlusion: embolism — abrupt onset, no prior claudication, source identified (AFib), contralateral limb normal, distinct cutoff on angiogram; thrombosis — prior claudication, bilateral disease, gradual onset. Treatment: embolism → Fogarty balloon embolectomy; thrombosis → thrombolytics or surgical bypass. Compartment syndrome: fasciotomy is time-critical — delay >6 hours → irreversible muscle necrosis.",
    redFlags: [
      "Paralysis or paralysis in acute occlusion: non-viable limb — emergent embolectomy/thrombectomy; if >6h and fixed → amputation",
      "Compartment pressure within 30 mmHg of diastolic BP: immediate 4-compartment fasciotomy of the leg",
      "Reperfusion injury after revascularization: hyperkalemia, myoglobinuria, renal failure — monitor K+, urine output, give bicarbonate",
      "Critical limb ischemia (rest pain + ulcers/gangrene): urgent vascular surgery referral — limb threatened",
    ],
    mnemonics: [
      {
        name: "Acute Limb Ischemia — 6 Ps",
        content:
          "Pain\nPallor\nPulselessness\nParesthesia\nParalysis (late — irreversible ischemia)\nPoikilothermia (cold)\n\nABI Interpretation:\n>1.3 = non-compressible (calcified vessels, DM)\n0.9–1.3 = normal\n0.7–0.9 = mild PAD\n0.4–0.69 = moderate PAD\n<0.4 = severe/critical ischemia\n\nCompartment Syndrome: Pressure >30 or within 30 of diastolic → 4-compartment fasciotomy",
      },
    ],
    pimpingQuestions: [
      "What is the ABI and how do you interpret the values?",
      "Distinguish embolic from thrombotic acute limb ischemia — how does the treatment differ?",
      "What are the 6 Ps of acute arterial occlusion?",
      "What is compartment syndrome and what are the thresholds for fasciotomy?",
      "What is Leriche syndrome?",
    ],
  },

  {
    id: "gs-venous-disease",
    name: "Venous Disease: Chronic Venous Insufficiency, Varicose Veins, and DVT",
    icdCode: "I83.90",
    rotation: "general-surgery",
    category: "Cardiovascular / Vascular Surgery",
    definition:
      "Chronic venous insufficiency (CVI): failure of calf muscle pump and/or incompetent venous valves → retrograde venous blood flow → venous hypertension → edema, skin changes, ulceration. Varicose veins: dilated, tortuous superficial veins (GSV > SSV) from valvular incompetence. CEAP classification: C0 (no signs) to C6 (active venous ulcer). Venous ulcers: medial malleolus, painless (vs. arterial ulcers: lateral, painful, punched-out). DVT: thrombus formation in deep venous system — risk of PE (see Wells Score). May-Thurner syndrome: left iliac vein compression by right iliac artery → left leg DVT.",
    diagnosticCriteria:
      "CVI/varicose veins: duplex ultrasound (venous reflux >0.5 seconds = incompetence; DVT assessment). CEAP classification for staging. Venous ulcer: clinical diagnosis (medial malleolar, shallow, irregular edges, lipodermatosclerosis, hemosiderin deposition). ABI must be measured before compression therapy (ABI <0.6 = contraindication to compression). DVT: Wells score + D-dimer (high sensitivity; positive → compression ultrasound); lower extremity venous duplex: non-compressible vein = DVT.",
    presentation: {
      chiefComplaint: [
        "\"My legs are swollen and my veins look like ropes\"",
        "\"I have a non-healing wound on my inner ankle\"",
      ],
      associatedSymptoms: [
        "Varicose veins: visible bulging veins, leg heaviness/aching, pruritus, edema (worse with prolonged standing)",
        "CVI skin changes: lipodermatosclerosis (brawny induration), hemosiderin hyperpigmentation, atrophie blanche (white scarring)",
        "Venous ulcer: medial malleolus; shallow, irregular wound with fibrinous base; weeping; nearly painless",
        "DVT: unilateral leg swelling, erythema, warmth, Homan's sign (poor sensitivity/specificity — not reliable)",
      ],
      demographics: "CVI: 25% of women, 15% of men; multiparity, prolonged standing, obesity. Varicose veins: 40 million Americans. DVT: hospitalized, post-surgical, immobility, malignancy, OCP/HRT, thrombophilia.",
    },
    distinguishingFeatures:
      "Venous ulcer (medial malleolus, painless, irregular, shallow) vs. arterial ulcer (lateral/dorsum foot, painful, punched-out edges, minimal granulation). Treatment: venous ulcers → compression therapy (4-layer bandaging) + wound care — but ONLY if ABI ≥0.6. Varicose veins treatment: conservative first (compression stockings, elevate legs) → minimally invasive (EVLA/EVLT, sclerotherapy, foam sclerotherapy) → surgery (stripping) if fails.",
    redFlags: [
      "Venous ulcer with ABI <0.6: arterial disease component — do NOT apply compression (worsens arterial supply)",
      "Infected venous ulcer in immunocompromised: may rapidly worsen to necrotizing fasciitis",
      "DVT + swollen blue leg (phlegmasia cerulea dolens): limb-threatening venous occlusion → catheter-directed thrombolysis or surgical thrombectomy",
      "DVT in bilateral legs simultaneously: consider malignancy (Trousseau syndrome), inferior vena cava thrombus, or May-Thurner syndrome",
    ],
    mnemonics: [
      {
        name: "Venous vs. Arterial Ulcer Distinction",
        content:
          "VENOUS Ulcer:\nV — Varicosities present\nE — Edema surrounding\nN — Near medial malleolus\nO — Often painless\nU — Usually irregular edges\nS — Shallow\n\nARTERIAL Ulcer:\nA — Absent pulses\nR — Remote (lateral foot, toes)\nT — Terrible pain\nE — Even edges (punched-out)\nR — Reduced ABI (<0.9)\nY — Yellow or necrotic base",
      },
    ],
    pimpingQuestions: [
      "What is the CEAP classification for venous disease?",
      "Why must you measure ABI before applying compression therapy?",
      "How do venous and arterial ulcers differ in location and appearance?",
      "What is May-Thurner syndrome?",
      "What is phlegmasia cerulea dolens and how is it treated?",
    ],
  },

  // ─── Group C: Pulmonary / Thoracic ───────────────────────────────────────

  {
    id: "gs-thoracic-surgery",
    name: "Thoracic Surgical Conditions: Pneumothorax, Pleural Effusion, Hemothorax, Empyema",
    icdCode: "J93.9",
    rotation: "general-surgery",
    category: "Pulmonary / Thoracic Surgery",
    definition:
      "Pneumothorax (PTX): air in pleural space — spontaneous (primary: young tall males, secondary: COPD/blebs; tension = medical emergency), traumatic. Hemothorax: blood in pleural space — trauma most common. Pleural effusion: fluid accumulation — exudate vs. transudate (Light's criteria). Empyema: infected pleural space — parapneumonic effusion → exudative → fibropurulent → organizing — requires drainage ± decortication. Chylothorax: lymphatic fluid (chyle) in pleural space — thoracic duct injury from trauma or surgery; high triglycerides (>110 mg/dL) in fluid.",
    diagnosticCriteria:
      "PTX: CXR (loss of lung markings, visceral pleural line); CT more sensitive. Tension PTX: clinical diagnosis (tracheal deviation away, absent breath sounds, hypotension, JVD, tracheal deviation) — DO NOT wait for CXR → immediate needle decompression (2nd ICS MCL). Hemothorax: CXR (opacification); thoracentesis (bloody fluid, Hct ≥50% of serum = hemothorax). Pleural effusion: Light's criteria — exudate if: (1) pleural protein/serum protein >0.5, (2) pleural LDH/serum LDH >0.6, (3) pleural LDH >2/3 upper limit of normal serum LDH. Empyema: pH <7.2, glucose <60, positive Gram stain/culture, positive bacteria.",
    presentation: {
      chiefComplaint: [
        "\"I suddenly can't breathe and have sharp chest pain\" (PTX)",
        "\"I hit my chest in a car accident and now I'm short of breath\" (traumatic hemothorax)",
      ],
      associatedSymptoms: [
        "PTX: sudden unilateral pleuritic chest pain, dyspnea, decreased breath sounds, hyperresonance on percussion",
        "Tension PTX: above symptoms + tracheal deviation (AWAY from affected side), JVD, hypotension, cyanosis — hemodynamic collapse",
        "Hemothorax: dyspnea, decreased breath sounds, dullness to percussion (fluid, not air)",
        "Empyema: fever, pleuritic chest pain, productive cough, failure of pneumonia to resolve with antibiotics",
        "Chylothorax: milky pleural fluid post-thoracic surgery or trauma",
      ],
      demographics: "Primary spontaneous PTX: tall, thin, young males 20–30 years, smokers. Secondary PTX: underlying lung disease (COPD most common). Traumatic hemothorax: motor vehicle accidents, penetrating chest trauma. Empyema: post-pneumonia, post-thoracic surgery, esophageal rupture.",
    },
    distinguishingFeatures:
      "Tension PTX vs. simple PTX vs. hemothorax: Tension = hemodynamic instability + tracheal deviation (AWAY); Simple PTX = unilateral ↓ breath sounds + hyperresonance (no tracheal shift, hemodynamically stable); Hemothorax = dullness to percussion (not hyperresonant). Massive hemothorax (>1500 mL initial output or >200 mL/h for 3h): thoracotomy indication. Empyema: must drain (chest tube or VATS decortication) — antibiotics alone insufficient for organized empyema.",
    redFlags: [
      "Tension pneumothorax: needle decompression immediately (2nd ICS MCL) → then chest tube (5th ICS AAL); do NOT await imaging",
      "Massive hemothorax (>1500 mL on chest tube insertion): emergency thoracotomy — hemorrhage control",
      "Esophageal rupture (Boerhaave syndrome): fever + left-sided pleural effusion + history of vomiting/endoscopy + mediastinal air → emergency surgery",
      "Open pneumothorax ('sucking chest wound'): 3-sided occlusive dressing (vents air out, prevents air entry); then definitive chest tube at separate site",
    ],
    mnemonics: [
      {
        name: "Tension PTX vs. Simple PTX vs. Hemothorax",
        content:
          "TENSION PTX (Treat IMMEDIATELY — BEFORE CXR):\nTracheal deviation AWAY from lesion\nHypotension + JVD\nHyperresonance\n→ Needle decompression 2nd ICS MCL\n\nSIMPLE PTX:\nUnilateral ↓ breath sounds\nHyperresonance (air)\nNo hemodynamic compromise\n→ Chest tube if >20% or symptomatic\n\nHEMOTHORAX:\nDullness to percussion (fluid, not air)\nTracheal deviation TOWARD lesion (if massive)\n→ Chest tube; thoracotomy if >1500 mL",
      },
    ],
    pimpingQuestions: [
      "How do you clinically distinguish tension pneumothorax from simple pneumothorax?",
      "What is the treatment algorithm for tension pneumothorax?",
      "What are Light's criteria and when do you use them?",
      "What is the management of an empyema?",
      "What are the indications for emergency thoracotomy in hemothorax?",
    ],
  },

  {
    id: "gs-lung-malignancy",
    name: "Lung Malignancy and Pulmonary Nodule",
    icdCode: "C34.90",
    rotation: "general-surgery",
    category: "Pulmonary / Thoracic Surgery",
    definition:
      "Lung cancer: most common cancer death in both men and women in the US. Types: Non-small cell (NSCLC, 85%) — adenocarcinoma (most common, peripheral, non-smokers), squamous cell (central, hilar, smokers, cavitation, PTHrP → hypercalcemia), large cell; Small cell (SCLC, 15%) — central, smokers, very aggressive, paraneoplastic syndromes (SIADH, Cushing's, Lambert-Eaton), no surgery. Pancoast tumor: apex of lung → brachial plexus, subclavian vessels, stellate ganglion (Horner's syndrome), rib/vertebral destruction. Pulmonary nodule: <3 cm, solitary — Fleischner Society guidelines for management by size and risk.",
    diagnosticCriteria:
      "Low-dose CT (LDCT): recommended screening for adults 50–80, ≥20 pack-year history, current or quit within 15 years (USPSTF 2021). CT chest with contrast: nodule characterization (size, margins, calcification, satellite nodules). PET-CT: staging, metabolic activity (SUV >2.5 = malignant). Bronchoscopy: central lesions. CT-guided biopsy: peripheral lesions. Mediastinoscopy or EBUS: mediastinal staging. Pulmonary function tests: pre-operative assessment of resectability. TNM staging determines resectability: Stage I/II → surgery; Stage III → chemoradiation ± surgery; Stage IV → systemic therapy.",
    presentation: {
      chiefComplaint: [
        "\"I have a cough that hasn't gone away for months and I've lost weight\"",
        "\"My CT scan showed a spot on my lung\"",
      ],
      associatedSymptoms: [
        "Classic: persistent cough, hemoptysis, weight loss, dyspnea, recurrent pneumonia (post-obstructive)",
        "SVC syndrome: facial swelling, arm swelling, JVD, Pemberton's sign (arm elevation → SVC obstruction)",
        "Pancoast tumor: shoulder/arm pain (C8, T1, T2), Horner's syndrome (ptosis, miosis, anhidrosis), hand weakness",
        "Paraneoplastic: SIADH → hyponatremia (SCLC), hypercalcemia → polyuria (squamous — PTHrP), Cushing's (SCLC — ectopic ACTH), Lambert-Eaton (SCLC — proximal muscle weakness, improves with repeated use)",
        "Asymptomatic nodule found incidentally on CT (most common presentation of early-stage NSCLC now)",
      ],
      demographics: "Lung cancer: peak 65–70 years; smoking responsible for 85%. Adenocarcinoma: increasing in non-smokers, women, never-smokers; EGFR mutations (Asian females). SCLC: heavy smokers, central location.",
    },
    distinguishingFeatures:
      "Adenocarcinoma: peripheral, non-smoker association, BAC subtype; EGFR/ALK mutations targetable. Squamous cell: central/hilar, cavitation, smokers, PTHrP → hypercalcemia. SCLC: central, rapid doubling, very aggressive, paraneoplastic syndromes — SIADH most common. Benign nodule characteristics: calcified (popcorn, laminar, central, diffuse — benign patterns), round, stable ≥2 years. Malignant: spiculated margins, upper lobe, growing, non-calcified.",
    redFlags: [
      "SVC syndrome: radiation ± stent for rapid decompression; corticosteroids for edema",
      "Hemoptysis >600 mL/24h (massive): immediate bronchoscopy + IR embolization; may need emergent surgery",
      "Paraneoplastic hypercalcemia (squamous cell): aggressive IV fluids + bisphosphonates; treat underlying tumor",
      "Malignant pleural effusion: talc pleurodesis or indwelling pleural catheter for symptom management (Stage IV, no surgery)",
    ],
    mnemonics: [
      {
        name: "Lung Cancer Paraneoplastic Syndromes",
        content:
          "SCLC Paraneoplastic Syndromes:\nS — SIADH (hyponatremia)\nC — Cushing's (ectopic ACTH)\nL — Lambert-Eaton (proximal weakness, improves with use — opposite of MG)\nC — Cerebellar degeneration\n\nSquamous Cell: S-Q-U-A-S-H → PTHrP → Hypercalcemia\n\nPancoast Tumor = Apex lung:\n→ Horner's syndrome (ptosis, miosis, anhidrosis)\n→ Brachial plexus (arm/shoulder pain, weakness)\n→ Rib/vertebral destruction",
      },
    ],
    pimpingQuestions: [
      "What are the USPSTF lung cancer screening recommendations?",
      "Which type of lung cancer is most commonly associated with hypercalcemia? How?",
      "What is Lambert-Eaton syndrome and how does it differ from myasthenia gravis?",
      "What is Pancoast tumor and what structures does it invade?",
      "Which types of lung cancer are surgically resectable?",
    ],
  },

  // ─── Group D: Breast Surgery ─────────────────────────────────────────────

  {
    id: "gs-benign-breast-disease",
    name: "Benign Breast Disease and Breast Infections",
    icdCode: "N60.01",
    rotation: "general-surgery",
    category: "Breast Surgery / Benign Disease",
    definition:
      "Spectrum of non-malignant breast conditions: fibrocystic changes (most common benign breast condition — cyclic pain, nodularity, cysts), fibroadenoma (most common solid benign breast tumor — young women, rubbery, mobile, well-circumscribed), intraductal papilloma (most common cause of bloody nipple discharge — subareolar), mastitis (lactational — most common in breastfeeding women), breast abscess (complication of mastitis — S. aureus most common; periareolar abscess in non-lactating = consider hidradenitis or duct ectasia), fat necrosis (trauma/biopsy/radiation — firm, irregular, may mimic cancer), phyllodes tumor (large, fast-growing — can be benign, borderline, or malignant).",
    diagnosticCriteria:
      "Workup by age and finding: <30 years, rubbery mobile mass → ultrasound first; >30 years or suspicious → mammogram + ultrasound. BI-RADS classification: 1 (negative), 2 (benign), 3 (probably benign — 6-month follow-up), 4 (suspicious — biopsy), 5 (highly suspicious — biopsy), 6 (known malignancy). Core needle biopsy: preferred over FNA (provides histologic architecture). Fibroadenoma: well-circumscribed, hypoechoic, horizontal orientation on US — BI-RADS 3; management: observation if <3 cm and classic features; cryoablation or excision if growing/symptomatic. Bloody nipple discharge: ductography or MRI + microdochectomy. Phyllodes: excision with wide margins (>1 cm); if malignant phyllodes — total mastectomy (unlike breast cancer, no node dissection needed as lymph node mets rare).",
    presentation: {
      chiefComplaint: [
        "\"I have breast pain that gets worse before my period\"",
        "\"I feel a rubbery lump in my breast\"",
        "\"I have bloody discharge from my nipple\"",
        "\"I'm breastfeeding and my breast is red, warm, and painful\"",
      ],
      associatedSymptoms: [
        "Fibrocystic: bilateral, cyclic, diffuse nodularity + tenderness; worse premenstrually, improves after menstruation",
        "Fibroadenoma: single, painless, smooth, mobile, firm-rubbery mass; does not change with menstrual cycle",
        "Mastitis: lactating woman with unilateral erythema, warmth, tenderness, fever, flu-like symptoms — continue breastfeeding",
        "Breast abscess: fluctuant, painful mass in lactating or non-lactating woman; fever, leukocytosis",
        "Fat necrosis: firm, irregular, non-tender mass after trauma/surgery — no mass should be dismissed without imaging",
        "Phyllodes: large (>5 cm), rapidly growing mass with prominent skin veins",
      ],
      demographics: "Fibroadenoma: 15–30 year-old women; can be giant in adolescents. Mastitis: first 3 months of lactation; due to nipple trauma and S. aureus colonization. Phyllodes tumor: average age 45, 1 decade older than fibroadenoma.",
    },
    distinguishingFeatures:
      "Fibroadenoma vs. phyllodes: phyllodes is larger, faster-growing, older patient, heterogeneous on US; phyllodes needs wider excision (1 cm margin vs. simple excision for fibroadenoma). Mastitis vs. abscess: mastitis has no fluctuance → treat with antibiotics + continued breastfeeding (do NOT stop breastfeeding); abscess = fluctuant → ultrasound-guided needle aspiration (first-line) or I&D. Fat necrosis can mimic cancer on mammogram — biopsy needed if imaging equivocal.",
    redFlags: [
      "Persistent bloody nipple discharge from single duct: intraductal papilloma vs. DCIS — requires microdochectomy",
      "Breast mass not resolving with antibiotic treatment for presumed mastitis: abscess (needs drainage) vs. inflammatory breast cancer (biopsy urgently)",
      "Rapidly growing breast mass in older woman: phyllodes or malignancy — urgent workup with core biopsy",
      "Skin dimpling, peau d'orange, nipple retraction with breast mass: malignancy until proven otherwise",
    ],
    mnemonics: [
      {
        name: "Benign Breast Mass Characteristics vs. Malignant",
        content:
          "BENIGN 3 S's:\nSmooth\nSoft/rubbery\nSlideable (mobile)\n\nMALIGNANT 3 H's:\nHard\nHeterogeneous (irregular)\nHeld (fixed to chest wall or skin)\n\nMastitis: Continue Breastfeeding + Dicloxacillin\nAbscess: US-guided aspiration or I&D + Dicloxacillin\nDO NOT stop breastfeeding for mastitis — milk stasis worsens infection",
      },
    ],
    pimpingQuestions: [
      "What is the BI-RADS classification and what action does each category prompt?",
      "How do you manage fibroadenoma vs. phyllodes tumor?",
      "What is the most common cause of bloody nipple discharge and how is it treated?",
      "How does mastitis management differ from breast abscess management?",
      "What features of a breast mass suggest malignancy vs. benign disease?",
    ],
  },

  // ─── Group E: Dermatology / Wound Care ───────────────────────────────────

  {
    id: "gs-burns",
    name: "Burns",
    icdCode: "T30.0",
    rotation: "general-surgery",
    category: "Dermatology / Wound Care",
    definition:
      "Thermal, chemical, electrical, or radiation injury causing cutaneous destruction. Depth classification: superficial (1st degree) — epidermis only, erythema, no blisters, heals in 3–5 days; superficial partial-thickness (2nd degree) — into papillary dermis, painful blisters, heals in 14–21 days; deep partial-thickness (2nd degree) — into reticular dermis, less painful (nerve damage), heals slowly, may require grafting; full-thickness (3rd degree) — destruction of all dermis, insensate, leathery/charred, always needs grafting; 4th degree — extends to fat, muscle, bone. Rule of Nines: head 9%, each arm 9%, each leg 18%, anterior trunk 18%, posterior trunk 18%, perineum 1% (adults). Modified for children: Lund-Browder chart.",
    diagnosticCriteria:
      "BSA calculation: Rule of Nines (adults); Palm method (patient's palm = 1% BSA for irregular burns). Parkland formula (fluid resuscitation): 4 mL × kg × %TBSA burned (2nd and 3rd degree only) — give 50% in first 8 hours, 50% in next 16 hours. Target urine output: 0.5 mL/kg/hr (adults), 1 mL/kg/hr (children) — use Foley catheter. Inhalation injury: hoarseness, stridor, singed eyebrows/nasal hairs, carbonaceous sputum, facial burns — early intubation (airway edema worsens over 24–48h). Circumferential burns: extremity compartment pressure or chest wall restriction → escharotomy.",
    presentation: {
      chiefComplaint: [
        "\"I was in a fire\" or \"I spilled boiling water on myself\"",
        "\"My skin is burned from a chemical exposure\"",
      ],
      associatedSymptoms: [
        "Superficial: erythema, pain, dry skin, no blisters",
        "Partial-thickness: blisters (intact = superficial PTT; broken = deep PTT), moist, very painful",
        "Full-thickness: leathery, dry, insensate (painless — nerves destroyed), pale, charred",
        "Inhalation injury: stridor, hoarseness, carbonaceous sputum, facial burns, singed nasal hairs, altered consciousness (CO poisoning)",
        "Systemic: hypovolemic shock (fluid loss from burn surface), hypothermia (loss of skin insulation)",
      ],
      demographics: "Most common in young children (scalding) and elderly; occupational burns in adults. Electrical burns: may appear small externally but cause extensive internal injury (myonecrosis → myoglobinuria → renal failure). Chemical burns: alkali burns penetrate deeper than acid burns (liquefaction necrosis vs. coagulation necrosis).",
    },
    distinguishingFeatures:
      "Partial-thickness burns: blisters, wet/moist, blanch with pressure, very painful. Full-thickness: no blistering, dry/leathery, does NOT blanch, painless (nerve destruction). Critical burns criteria: >20% TBSA in adults, >10% TBSA in children or elderly, full-thickness burns, face/hands/feet/genitalia/perineum/major joints, inhalation injury, electrical/chemical burns, circumferential burns.",
    redFlags: [
      "Inhalation injury: immediate early endotracheal intubation before airway swells shut — do NOT wait for stridor",
      "CO poisoning: 100% O2 via NRB mask immediately; consider hyperbaric O2 if CO >25%, neuro symptoms, pregnancy, cardiac arrhythmia",
      "Circumferential burns (extremity or chest): escharotomy to relieve compartment pressure and allow chest excursion",
      "Electrical burns: massive internal injury possible despite small external burns — cardiac monitoring, vigorous IV fluids to prevent myoglobinuric renal failure, urine output >1 mL/kg/hr",
    ],
    mnemonics: [
      {
        name: "Parkland Formula and Rule of Nines",
        content:
          "Parkland Formula: 4 × kg × %TBSA = total mL LR\n50% in first 8 hours\n50% in next 16 hours\nTarget UO: 0.5 mL/kg/hr\n\nRule of Nines (Adults):\nHead = 9%\nEach arm = 9%\nEach leg = 18%\nAnterior trunk = 18%\nPosterior trunk = 18%\nPerineum = 1%\nTotal = 100%\n\nBurn Depth Memory:\n1° = Erythema only (sunburn)\n2° = Blisters (painful)\n3° = Leathery, painless (graft needed)\n4° = Down to bone (amputation often needed)",
      },
    ],
    pimpingQuestions: [
      "Calculate Parkland formula for a 70 kg patient with 40% TBSA burns.",
      "What are the criteria for a critical burn requiring burn center transfer?",
      "Why does inhalation injury require early intubation?",
      "How does electrical burn injury differ from thermal burn injury?",
      "What is the difference between escharotomy and fasciotomy?",
    ],
  },

  {
    id: "gs-skin-lesions-cancer",
    name: "Soft Tissue Lesions and Skin Cancer",
    icdCode: "C43.9",
    rotation: "general-surgery",
    category: "Dermatology / Neoplasms",
    definition:
      "Common benign soft tissue lesions: epidermal inclusion cyst (EIC, 'sebaceous cyst' — misnomer; keratin-filled, mobile, firm, central punctum), lipoma (soft, mobile, subcutaneous fat proliferation — no malignant potential), seborrheic keratosis (stuck-on, waxy plaques — benign), hidradenitis suppurativa (chronic inflammatory condition of apocrine glands — axilla, groin, perineum — recurrent abscesses, sinus tracts, scarring), pilonidal disease. Skin cancers: basal cell carcinoma (BCC — most common skin cancer, pearly nodule with rolled edges/telangiectasias, rarely metastasizes, locally invasive), squamous cell carcinoma (SCC — scaly plaque/ulceration, can metastasize, arises from actinic keratoses, Marjolin's ulcer in chronic wounds), melanoma (most deadly skin cancer — ABCDE criteria, high metastatic potential).",
    diagnosticCriteria:
      "BCC: shave or excisional biopsy — histology confirms; nodular BCC most common subtype. SCC: biopsy; sentinel lymph node biopsy (SLNB) for high-risk SCC (>4 cm, poorly differentiated, perineural invasion). Melanoma: excisional biopsy with 1–2 mm margins (NOT shave — need depth for Breslow thickness); Breslow depth (mm) most important prognostic factor; SLNB for Breslow >0.8 mm or T1b with ulceration; Clark level (depth of invasion). Breslow depth → surgical excision margins: <1 mm → 1 cm; 1–2 mm → 1–2 cm; >2 mm → 2 cm margins. Staging: CT/PET-CT for nodal/distant disease. Hidradenitis: Hurley staging I-III; treatment: weight loss, smoking cessation, antibiotics, biologics (adalimumab — FDA approved); surgical excision of involved skin for Hurley III.",
    presentation: {
      chiefComplaint: [
        "\"I have a growing dark mole that changed color and shape\"",
        "\"I have a pearly bump that keeps growing on my face\"",
        "\"I have a recurring cyst that gets infected\"",
        "\"I have chronic painful boils in my armpits that keep coming back\"",
      ],
      associatedSymptoms: [
        "Melanoma ABCDE: Asymmetry, irregular Border, multiple Colors, Diameter >6 mm, Evolution (any change)",
        "BCC: pearly papule/nodule with rolled borders and central ulceration ('rodent ulcer'), telangiectasias; sun-exposed areas (face #1)",
        "SCC: crusted, scaly plaque or ulcerated nodule; actinic keratosis (precursor); chronic wound/scar (Marjolin's ulcer)",
        "EIC: firm, round, mobile nodule with central punctum; rupture → inflammation mimicking abscess",
        "Hidradenitis: recurrent nodules → abscesses → sinus tracts → scarring; axilla/groin/perineum; triggered by shaving, heat, tight clothing",
      ],
      demographics: "BCC: most common skin cancer overall; fair skin, UV exposure. Melanoma: white skin, UV, family history, dysplastic nevi, CDKN2A mutation; acral lentiginous melanoma = most common melanoma in people of color (palms, soles, nail beds). SCC: chronic UV, immunosuppression (organ transplant recipients have 65× increased risk), HPV, chronic wounds.",
    },
    distinguishingFeatures:
      "BCC vs. SCC vs. Melanoma: BCC = pearly rolled edges, telangiectasias, locally invasive (>0.1% metastasis); SCC = scaly, ulcerated, metastasizes (rare but possible), arises from actinic keratosis; Melanoma = pigmented, ABCDE, highest mortality from skin cancer. Marjolin's ulcer: SCC arising in chronic wound/burn scar (Marjolin's ulcer — behaves aggressively). EIC: central punctum distinguishes from lipoma; if inflamed, treat with antibiotics first, excise after inflammation resolves.",
    redFlags: [
      "Amelanotic melanoma: no pigmentation — high suspicion for any pink, skin-colored or red lesion that doesn't fit BCC/SCC",
      "Melanoma during pregnancy: expedite complete staging workup; avoid SLNB blue dye (use radiotracer only)",
      "SCC in immunosuppressed organ transplant recipient: aggressive surveillance, may metastasize quickly",
      "Hidradenitis Hurley III with persistent disease: wide local excision and skin grafting (only cure)",
    ],
    mnemonics: [
      {
        name: "Melanoma ABCDE + Breslow Margins",
        content:
          "ABCDE Criteria:\nA — Asymmetry\nB — Border (irregular)\nC — Color (multiple)\nD — Diameter >6 mm\nE — Evolution (change over time)\n\nBreslow Depth → Excision Margins:\n<1 mm → 1 cm margin\n1–2 mm → 1–2 cm margin\n>2 mm → 2 cm margin\n\nSLNB: for Breslow >0.8 mm or T1b (with ulceration)\n\nDermoscopy rule: Any growing lesion that doesn't fit a benign pattern → biopsy",
      },
    ],
    pimpingQuestions: [
      "What is the most important prognostic factor in melanoma?",
      "What are the surgical excision margins for melanoma based on Breslow thickness?",
      "What is Marjolin's ulcer?",
      "How do BCC and SCC differ in their metastatic potential?",
      "What is the Hurley classification and how does it guide hidradenitis treatment?",
    ],
  },

  // ─── Group F: Trauma / Acute Care ────────────────────────────────────────

  {
    id: "gs-shock-trauma",
    name: "Shock and Trauma Management",
    icdCode: "T79.4XXA",
    rotation: "general-surgery",
    category: "Trauma / Acute Care",
    definition:
      "Shock: inadequate tissue perfusion — classified by mechanism: hypovolemic (hemorrhagic most relevant in trauma — most common surgical shock), distributive (septic, neurogenic, anaphylactic), cardiogenic, obstructive (tension PTX, PE, cardiac tamponade). ATLS (Advanced Trauma Life Support) primary survey: ABCDE — Airway, Breathing, Circulation, Disability, Exposure. Hemorrhagic shock classification: Class I (<15% blood loss), Class II (15–30%), Class III (30–40% — blood transfusion required), Class IV (>40% — immediate surgical control). Damage control surgery (DCS): abbreviated surgery to control hemorrhage and contamination → ICU resuscitation → planned reoperation.",
    diagnosticCriteria:
      "Hemorrhagic shock: BP + HR + mental status + UO + skin. Focused Assessment with Sonography for Trauma (FAST exam): pericardial, perihepatic (Morrison's pouch), perisplenic, pelvic — detects free fluid (blood). Extended FAST (E-FAST): adds lung windows for PTX/hemothorax. Massive transfusion protocol (MTP): pRBC:FFP:platelets in 1:1:1 ratio (damage control resuscitation). Permissive hypotension: SBP 80–90 mmHg until surgical hemorrhage control (avoid aggressive crystalloid → dilutional coagulopathy, hypothermia). Trauma triad of death: hypothermia + acidosis + coagulopathy — break the cycle with DCS.",
    presentation: {
      chiefComplaint: [
        "\"I was in a serious car accident\" or \"I was shot/stabbed\"",
        "\"I'm bleeding internally after trauma\"",
      ],
      associatedSymptoms: [
        "Hemorrhagic shock: tachycardia (first sign), hypotension (late sign), decreased UO (<0.5 mL/kg/hr), altered mental status, cool/clammy skin",
        "Tension PTX in trauma: JVD, absent breath sounds, hypotension, tracheal deviation — needle decompression",
        "Cardiac tamponade (Beck's triad): hypotension + JVD + muffled heart sounds; pulsus paradoxus; FAST shows pericardial effusion",
        "Neurogenic shock: hypotension WITHOUT tachycardia (disruption of sympathetic outflow in spinal injury); bradycardia + hypotension",
        "Compound (open) fracture: bone exposed through skin — irrigation, IV antibiotics (cefazolin), emergent surgical debridement within 6 hours",
      ],
      demographics: "Trauma: leading cause of death ages 1–44. MVA: most common mechanism of blunt trauma. GSW/stab: penetrating trauma, urban areas. Elderly: higher mortality from same mechanism — limited physiologic reserve.",
    },
    distinguishingFeatures:
      "Obstructive shock (tension PTX vs. tamponade): both have JVD + hypotension; PTX = absent breath sounds + hyperresonance + tracheal deviation → needle decompression; Tamponade = muffled heart sounds + FAST shows effusion → pericardiocentesis or pericardial window. Neurogenic vs. hemorrhagic shock: neurogenic = bradycardia (HR normal or low) + hypotension; hemorrhagic = tachycardia + hypotension. Permissive hypotension contraindicated in head injury (need adequate cerebral perfusion pressure).",
    redFlags: [
      "Pulseless in penetrating thoracic trauma (<15 min transport time): emergency department thoracotomy",
      "Beck's triad (cardiac tamponade): pericardiocentesis temporizing; definitive = pericardial window or thoracotomy",
      "Trauma triad of death (hypothermia + acidosis + coagulopathy): damage control surgery — abbreviated laparotomy, pack abdomen, ICU resuscitation, planned reoperation",
      "Open fracture (compound): IV cefazolin within 3 hours of injury, emergent OR for debridement (golden period 6 hours)",
    ],
    mnemonics: [
      {
        name: "ATLS Hemorrhagic Shock Classes",
        content:
          "Class I: <15% (<750 mL) — Normal HR, BP; no treatment needed beyond crystalloid\nClass II: 15–30% (750–1500 mL) — Tachycardia, anxiety; crystalloid\nClass III: 30–40% (1500–2000 mL) — Hypotension, HR >120, ↓ UO; blood transfusion\nClass IV: >40% (>2000 mL) — Life-threatening; immediate surgical control + MTP\n\nBeck's Triad (Tamponade):\nHypotension + JVD + Muffled heart sounds\n\nTrauma Triad of Death:\nHypothermia + Acidosis + Coagulopathy",
      },
    ],
    pimpingQuestions: [
      "What are the 4 classes of hemorrhagic shock and their clinical features?",
      "How does damage control surgery differ from definitive repair?",
      "What is permissive hypotension and when is it contraindicated?",
      "Distinguish Beck's triad from tension PTX findings.",
      "What is the management of an open (compound) fracture?",
    ],
  },

  // ─── Group G: Urology / Renal ────────────────────────────────────────────

  {
    id: "gs-urology-surgical",
    name: "Urologic Surgical Conditions: Nephrolithiasis, Testicular Torsion, and BPH",
    icdCode: "N20.0",
    rotation: "general-surgery",
    category: "Urology / Renal Surgery",
    definition:
      "Nephrolithiasis: kidney stones — calcium oxalate most common (80%), uric acid (5–10%, radiolucent), struvite (staghorn calculi, infection-related, Proteus/Klebsiella), cystine (rare, hexagonal crystals, young patients with cystinuria). Testicular torsion: twisting of spermatic cord → venous outflow obstruction → arterial ischemia → testicular infarction — surgical emergency (salvage rate: <6h = 90–100%, 6–12h = 50%, >24h = <10%). Benign prostatic hyperplasia (BPH): non-cancerous prostate enlargement → bladder outlet obstruction → LUTS (lower urinary tract symptoms); urinary retention is the acute surgical complication.",
    diagnosticCriteria:
      "Nephrolithiasis: non-contrast CT abdomen/pelvis (gold standard, most sensitive); KUB for radiopaque stones (calcium, struvite, cystine — NOT uric acid which is radiolucent); renal ultrasound (pregnant patients, children — avoids radiation). Testicular torsion: clinical diagnosis — DO NOT delay surgery for imaging; if equivocal, scrotal Doppler US (absent/reduced flow); urinalysis usually normal (distinguishes from epididymitis which has pyuria). BPH: IPSS score; post-void residual (PVR) >300 mL → catheterize; urodynamics for complex cases; PSA to exclude prostate cancer. Acute urinary retention: bladder scan → Foley catheterization (immediate relief).",
    presentation: {
      chiefComplaint: [
        "\"I have severe, sudden pain that goes from my side to my groin\" (nephrolithiasis)",
        "\"My testicle suddenly hurts severely\" (testicular torsion)",
        "\"I can't urinate\" (acute urinary retention from BPH)",
      ],
      associatedSymptoms: [
        "Nephrolithiasis: colicky flank pain radiating to groin (follows ureter), nausea, vomiting, hematuria (microscopic or gross), writhing in pain (cannot find comfortable position)",
        "Testicular torsion: sudden onset severe unilateral scrotal pain, nausea, vomiting, high-riding testicle with horizontal lie, absent cremasteric reflex (most sensitive sign)",
        "BPH / acute retention: progressive LUTS (urinary frequency, urgency, nocturia, weak stream, straining, incomplete emptying), then acute suprapubic pain, inability to void, distended palpable bladder",
        "Epididymitis (must distinguish from torsion): gradual onset, fever, urethral discharge, positive cremasteric reflex, urinalysis with pyuria/bacteriuria",
      ],
      demographics: "Nephrolithiasis: white males 20–60, lifetime risk 12% (men), 6% (women); Southern US (stone belt). Testicular torsion: bimodal — neonatal and adolescent peak (12–18 years). BPH: nearly universal by age 80; symptomatic in 25–30% of men over 50.",
    },
    distinguishingFeatures:
      "Testicular torsion vs. epididymitis: torsion = sudden onset, younger, absent cremasteric reflex, elevated testicle, normal UA; epididymitis = gradual, older (>20), positive cremasteric reflex, tender epididymis posteriorly, pyuria. Uric acid stones: radiolucent (invisible on KUB and CT scout), unique treatment = urinary alkalinization (K citrate) to dissolve. Struvite stones (infection stones): associated with urease-producing organisms (Proteus, Klebsiella, Pseudomonas) — grow to staghorn calculi; treatment = surgical removal + antibiotic eradication.",
    redFlags: [
      "Suspected testicular torsion: immediate surgical exploration regardless of imaging — 'time is testicle'; bilateral orchiopexy at same operation",
      "Obstructed infected kidney (urosepsis): percutaneous nephrostomy or ureteral stent drainage urgently — do NOT give antibiotics alone",
      "Uric acid stone + gout + tumor lysis syndrome: risk of acute uric acid nephropathy — alkalinize urine aggressively",
      "Acute urinary retention: Foley catheterization immediately; if Foley fails → suprapubic catheter (cystostomy)",
    ],
    mnemonics: [
      {
        name: "Kidney Stone Types — CUSS",
        content:
          "C — Calcium oxalate (most common, 80%, radiopaque, envelope-shaped crystals)\nU — Uric acid (radiolucent, treat with alkalinization; gout, tumor lysis)\nS — Struvite (staghorn, infection/Proteus, coffin-lid crystals, women)\nS — Cystine (rare, hexagonal crystals, young patients, alkalinize + hydrate)\n\nTesticular Torsion: 'Time is Testicle'\n<6h = 90–100% salvage\n6–12h = 50% salvage\n>24h = <10% salvage\nAbsent cremasteric reflex = most sensitive sign",
      },
    ],
    pimpingQuestions: [
      "What is the most sensitive sign of testicular torsion on physical exam?",
      "Why is the cremasteric reflex important in diagnosing testicular torsion?",
      "What is the salvage rate of testicular torsion by time from onset?",
      "Which kidney stone is radiolucent and what is its treatment?",
      "What is a staghorn calculus and which organism causes it?",
    ],
  },

  {
    id: "gs-urologic-neoplasms",
    name: "Urologic Neoplasms: Renal Cell, Bladder, and Testicular Cancer",
    icdCode: "C64.9",
    rotation: "general-surgery",
    category: "Urology / Renal Surgery",
    definition:
      "Renal cell carcinoma (RCC): most common renal malignancy, arises from proximal tubule — clear cell subtype 75%. Classic triad: hematuria + flank pain + palpable mass (present in only 10% — late disease). Many paraneoplastic syndromes. Bladder cancer: most common urothelial malignancy — transitional cell carcinoma (TCC) 95%; painless hematuria hallmark; smoking #1 risk factor; aniline dye, cyclophosphamide, schistosomiasis (squamous cell type) are other RFs. Testicular cancer: most common solid tumor in men 20–35; germ cell tumors (95%) — seminoma (most common, radiosensitive, AFP normal) vs. non-seminoma (NSGCT: embryonal, yolk sac, teratoma, choriocarcinoma — AFP/β-hCG elevated).",
    diagnosticCriteria:
      "RCC: CT abdomen/pelvis with contrast (enhancing renal mass); CT chest for staging; radical or partial nephrectomy for localized disease. Bladder cancer: cystoscopy + TURBT (transurethral resection of bladder tumor) — diagnosis and treatment; urine cytology; CT urogram for upper tract. Non-muscle-invasive (NMIBC): intravesical BCG (high-grade T1) or chemotherapy (mitomycin C). Muscle-invasive (MIBC): radical cystectomy + neobladder or ileal conduit + cisplatin-based chemo. Testicular cancer: β-hCG, AFP, LDH (tumor markers); orchidectomy via inguinal approach (NEVER trans-scrotal — disrupts lymphatic drainage to pelvis not retroperitoneum); CT chest/abdomen/pelvis for staging.",
    presentation: {
      chiefComplaint: [
        "\"I have blood in my urine with no pain\" (bladder cancer hallmark)",
        "\"I have a painless lump in my testicle\" (testicular cancer hallmark)",
        "\"I was found to have a kidney mass on CT\" (RCC — often incidental)",
      ],
      associatedSymptoms: [
        "RCC: hematuria (most common symptom), flank pain, palpable mass (classic triad), constitutional (fever, night sweats, weight loss)",
        "RCC paraneoplastic syndromes: polycythemia (EPO), hypercalcemia (PTHrP), hypertension (renin), Stauffer syndrome (liver function abnormalities without liver mets)",
        "Bladder cancer: painless gross hematuria (hallmark — should be evaluated until cancer excluded), irritative LUTS with high-grade disease",
        "Testicular cancer: painless testicular mass (hardness, heaviness), gynecomastia (β-hCG elevation), back pain (retroperitoneal lymph node mets)",
      ],
      demographics: "RCC: male 2:1, peak 60–70; smoking, obesity, von Hippel-Lindau syndrome (bilateral, clear cell). Bladder cancer: male 3:1, peak 65–70; smoking increases risk 4×. Testicular cancer: 20–35 years, white men, cryptorchidism (most important RF), Klinefelter syndrome.",
    },
    distinguishingFeatures:
      "Seminoma vs. NSGCT: seminoma = β-hCG mildly elevated or normal, AFP normal, homogeneous on US, radiosensitive; NSGCT = AFP elevated (embryonal, yolk sac) or β-hCG markedly elevated (choriocarcinoma), more aggressive. Bladder vs. RCC hematuria: bladder = painless with urinary symptoms; RCC = may have flank pain, constitutional symptoms. Testicular biopsy: NEVER trans-scrotal (contaminates inguinal lymphatics → poor staging and treatment); always trans-inguinal orchiectomy.",
    redFlags: [
      "Painless gross hematuria at any age: must rule out malignancy with cystoscopy — do not assume benign cause",
      "Painless testicular mass: testicular cancer until proven otherwise — urgent ultrasound + tumor markers + urology",
      "Inferior vena cava (IVC) thrombus from RCC (tumor thrombus): surgical planning required — cardiopulmonary bypass may be needed if level IV thrombus (above diaphragm)",
      "Choriocarcinoma (testicular): very aggressive, highly vascular, may present with hemorrhagic brain mets — chemotherapy BEP (bleomycin, etoposide, cisplatin) urgently",
    ],
    mnemonics: [
      {
        name: "RCC Paraneoplastic Syndromes",
        content:
          "RCC Paraneoplastic — 'PHRSE':\nP — Polycythemia (EPO)\nH — Hypertension (renin)\nR — Rash (dermatomyositis-like)\nS — Stauffer syndrome (LFT elevation without liver mets)\nE — Elevated calcium (PTHrP)\n\nTesticular Cancer Markers:\nSeminoma: AFP = normal; β-hCG = normal or mildly ↑\nNSGCT: AFP ↑ (yolk sac, embryonal); β-hCG ↑↑ (choriocarcinoma)\nLDH = bulk of disease\n\nBladder Cancer: Painless hematuria = cystoscopy until cancer excluded",
      },
    ],
    pimpingQuestions: [
      "What is the classic triad of RCC and how often is it present?",
      "Why should a testicular biopsy never be performed trans-scrotally?",
      "What tumor markers are associated with seminoma vs. non-seminoma?",
      "What is the management of non-muscle invasive vs. muscle-invasive bladder cancer?",
      "What genetic syndrome is associated with bilateral clear cell RCC?",
    ],
  },

  // ─── Group H: Neurosurgery ───────────────────────────────────────────────

  {
    id: "gs-neurosurgical",
    name: "Neurosurgical Conditions: Intracranial Hemorrhage, SAH, and Carpal Tunnel Syndrome",
    icdCode: "S06.4X0A",
    rotation: "general-surgery",
    category: "Neurology / Neurosurgery",
    definition:
      "Epidural hematoma (EDH): arterial bleed (middle meningeal artery) between skull and dura — biconvex (lens-shaped) on CT; classic 'lucid interval'; associated with temporal skull fracture. Subdural hematoma (SDH): venous bleed between dura and arachnoid — crescent-shaped on CT; bridging vein rupture; common in elderly/alcoholics after minor trauma. Subarachnoid hemorrhage (SAH): blood in subarachnoid space — 'worst headache of my life'; Berry aneurysm rupture most common cause (80%); CT then LP (xanthochromia); treat with nimodipine (prevent vasospasm), neurosurgery for coiling/clipping. Carpal tunnel syndrome (CTS): compression of median nerve at carpal tunnel; most common peripheral nerve entrapment.",
    diagnosticCriteria:
      "EDH: CT head — biconvex hyperdense collection; associated temporal fracture (80%); does NOT cross suture lines (dura adherent to skull at sutures). SDH: CT head — crescent hyperdense (acute) or hypodense (chronic) collection; crosses suture lines; midline shift. SAH: CT head (sensitivity 98% within 12h, decreases to 80% at 24h); LP if CT negative (xanthochromia = CSF yellow discoloration from hemoglobin breakdown — confirms SAH); CT angiography or cerebral angiography to identify aneurysm. CTS: clinical (Phalen's sign — wrist flexion reproduces symptoms; Tinel's sign — tapping reproduces symptoms); electrodiagnostic studies (EMG/NCS) for confirmation; thenar wasting = advanced disease.",
    presentation: {
      chiefComplaint: [
        "\"I hit my head and felt fine at first, but now I'm getting confused\" (EDH lucid interval)",
        "\"Worst headache of my life — sudden onset\" (SAH)",
        "\"My hand goes numb when I drive or use my phone at night\" (CTS)",
      ],
      associatedSymptoms: [
        "EDH: temporal head trauma, brief LOC, lucid interval (minutes to hours), then rapid neurological deterioration, blown pupil (uncal herniation — CN III compression), contralateral hemiplegia",
        "SDH (acute): elderly/alcoholic, fall, rapid decline; may have lucid interval but shorter than EDH; bilateral chronic SDH may have no history of trauma",
        "SAH: thunderclap headache (onset in seconds — 'worst of life'), nuchal rigidity, photophobia, nausea, brief LOC, focal deficits, sentinel headache (warning bleed) days before",
        "CTS: nocturnal paresthesia (median nerve distribution — thumb, index, middle, lateral ring finger), pain radiating to forearm, weakness of grip, thenar atrophy (late)",
      ],
      demographics: "EDH: young adults (temporal bone thinner, middle meningeal artery more vulnerable); rare in elderly (dura more adherent). SAH: peak 50–60 years; female > male; associated with HTN, smoking, family history, PKD, Marfan syndrome. CTS: most common peripheral nerve entrapment; women > men 3:1; pregnancy, DM, hypothyroidism, RA, repetitive motion are risk factors.",
    },
    distinguishingFeatures:
      "EDH: lucid interval + biconvex CT + temporal fracture + young patient = middle meningeal artery. SDH: elderly/alcoholic + crescenteric CT = bridging vein. SAH: thunderclap + worst headache + xanthochromia + Berry aneurysm. Key: SAH with CT negative → LP is MANDATORY (do not dismiss based on negative CT alone — sensitivity decreases with time). CTS: nocturnal symptoms (night splinting helps) + median nerve distribution (NOT ulnar — spares little finger).",
    redFlags: [
      "Any patient after head trauma with initial improvement then deterioration: EDH until proven otherwise — urgent CT head",
      "Thunderclap headache ('worst of life'): SAH until proven otherwise — CT immediately, then LP if CT negative",
      "Dilated ipsilateral pupil after head trauma (blown pupil): uncal herniation from mass effect — emergent neurosurgery; hyperventilation and mannitol as bridge",
      "SAH graded Hunt-Hess IV-V: high-grade SAH with severe deficits — ICU, airway management, aggressive vasospasm prevention",
    ],
    mnemonics: [
      {
        name: "Head Bleed Distinctions: EDH vs. SDH vs. SAH",
        content:
          "EDH (Epidural):\nArterial (middle meningeal)\nBiconvex (lens-shaped)\nLucid interval\nTemporal fracture\nYoung patients\n→ Emergent craniotomy if >1 cm or >30 mL or GCS decline\n\nSDH (Subdural):\nVenous (bridging veins)\nCrescent-shaped\nElderly/alcoholic\nCrosses suture lines\n→ Craniotomy if >1 cm or midline shift >5 mm\n\nSAH (Subarachnoid):\nAneurysm (Berry) most common\nWorst headache of life\nXanthochromia (LP if CT negative)\nTreat: nimodipine + early coil/clip\n→ Vasospasm peak: Day 3–14",
      },
    ],
    pimpingQuestions: [
      "What artery causes epidural hematoma and what CT finding is pathognomonic?",
      "Why must you perform an LP if CT is negative in a suspected SAH?",
      "What is the lucid interval and which intracranial hemorrhage is it classically associated with?",
      "What is xanthochromia and why is it important?",
      "Describe Phalen's and Tinel's signs for carpal tunnel syndrome.",
    ],
  },

  // ─── Group I: Endocrinology Surgery ──────────────────────────────────────

  {
    id: "gs-hyperparathyroidism",
    name: "Hyperparathyroidism and Parathyroid Disorders",
    icdCode: "E21.0",
    rotation: "general-surgery",
    category: "Endocrinology / Parathyroid Surgery",
    definition:
      "Primary hyperparathyroidism (PHPT): autonomous PTH secretion — single adenoma (85%), 4-gland hyperplasia (10–15%, associated with MEN-1 or MEN-2A), parathyroid carcinoma (<1%). PTH causes hypercalcemia (↑ bone resorption, ↑ Ca reabsorption in kidney, ↑ 1,25-OH-D activation → ↑ GI absorption). Secondary hyperparathyroidism: appropriate PTH elevation in response to chronic hypocalcemia (most common cause: CKD). Tertiary: autonomous PTH secretion after prolonged secondary (renal transplant patients). MEN-1 (Werner): Pituitary + Parathyroid + Pancreas. MEN-2A (Sipple): Medullary thyroid CA + Pheochromocytoma + Parathyroid hyperplasia.",
    diagnosticCriteria:
      "Labs: hypercalcemia + elevated PTH = PHPT (PTH appropriately elevated = primary; PTH suppressed = malignancy/vitamin D toxicity as cause). Alkaline phosphatase elevated in bone disease. 24h urine calcium: >400 mg/day in PHPT; FHH (familial hypocalciuric hypercalcemia) has low urine Ca (<100 mg) + PHPT-like labs — important to distinguish (no surgery for FHH). Imaging: sestamibi parathyroid scan + neck ultrasound for pre-operative localization of adenoma. Surgical indications for asymptomatic PHPT: Ca >1 mg/dL above upper limit, GFR <60, BMD T-score < –2.5 at any site, age <50, 24h urine Ca >400 mg/day, nephrolithiasis. Symptomatic: stones, bones, groans, psychic moans + thrones (constipation).",
    presentation: {
      chiefComplaint: [
        "\"I've been feeling weak, constipated, and confused\"",
        "\"I keep getting kidney stones\"",
        "\"My calcium is high on my labs\"",
      ],
      associatedSymptoms: [
        "Classic mnemonic: 'Bones, stones, groans, and psychic moans'",
        "Bones: osteitis fibrosa cystica (rare now — 'salt and pepper' skull, 'brown tumors', pathologic fractures)",
        "Stones: nephrolithiasis (calcium oxalate or calcium phosphate stones), nephrocalcinosis",
        "Groans: nausea, vomiting, constipation, pancreatitis (acute and chronic)",
        "Psychic moans: depression, anxiety, confusion, cognitive impairment, psychosis (hypercalcemia >14 mg/dL)",
        "Thrones: constipation (polyuria and polydipsia from nephrogenic DI)",
        "Most PHPT patients today are asymptomatic, discovered incidentally on labs",
      ],
      demographics: "PHPT: postmenopausal women most common (3:1 over men); most common endocrine disorder after DM and thyroid disease. MEN-1: autosomal dominant, MEN1 gene (chromosome 11). MEN-2A: RET proto-oncogene mutation.",
    },
    distinguishingFeatures:
      "PHPT: high Ca + high PTH. Malignancy hypercalcemia: high Ca + LOW PTH (PTHrP suppresses PTH). Sarcoidosis: high Ca + low PTH + high 1,25-dihydroxy vitamin D (macrophages make calcitriol) + elevated ACE level. FHH: appears like PHPT but urine Ca is low (<100 mg/24h) and Ca:Cr ratio <0.01 — no surgery (benign, asymptomatic). Key: always check PTH with hypercalcemia to determine if PTH-mediated or PTH-independent.",
    redFlags: [
      "Hypercalcemic crisis (Ca >14 mg/dL or acute symptomatic): IV saline (restore volume) + furosemide (loop diuretic, increases Ca excretion) + bisphosphonates (IV zoledronic acid — takes days) + calcitonin (fastest onset, works within hours, tachyphylaxis 48–72h) + dialysis if refractory",
      "Parathyroid carcinoma (suspect if very high Ca >14 + very high PTH + palpable mass): aggressive surgical resection + CaSR mutations",
      "Post-operative hypocalcemia after parathyroidectomy ('hungry bone syndrome'): aggressive IV calcium supplementation; monitor Ca, Mg, phosphorus",
      "MEN-2A: must rule out pheochromocytoma BEFORE parathyroid or thyroid surgery",
    ],
    mnemonics: [
      {
        name: "Hypercalcemia Causes and Treatment",
        content:
          "Causes (PTH-mediated vs not):\nPTH HIGH → PHPT or lithium or FHH\nPTH LOW → Malignancy (PTHrP), Vitamin D excess, Sarcoidosis, Immobilization\n\nSymptoms: 'Bones, Stones, Groans, Psychic Moans, Thrones'\n\nHypercalcemic Crisis Treatment — FISH:\nF — Fluids (IV normal saline — #1 step)\nI — furosemIde (loop diuretic)\nS — Steroids (for sarcoid/lymphoma)\nH — bispHosphonates (IV zoledronic acid)\n+ Calcitonin (fastest acting, short-lived)\n\nFHH: Familial → Low urine Ca → NO surgery",
      },
    ],
    pimpingQuestions: [
      "How do you distinguish primary hyperparathyroidism from hypercalcemia of malignancy using labs?",
      "What are the surgical indications for asymptomatic primary hyperparathyroidism?",
      "What is FHH and why is it important to distinguish from PHPT?",
      "What are the components of MEN-1 and MEN-2A?",
      "What is the stepwise management of hypercalcemic crisis?",
    ],
  },
];
