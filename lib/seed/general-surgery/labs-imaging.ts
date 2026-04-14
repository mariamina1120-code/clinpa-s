// @ts-nocheck
import { LabValue, ImagingFinding } from "@/types/seed";

export const generalSurgeryLabs: LabValue[] = [
  {
    id: "gs-lab-wbc",
    rotation: "general-surgery",
    name: "White Blood Cell Count (WBC)",
    normalRange: "4.5–11.0 × 10³/µL",
    unit: "× 10³/µL",
    interpretation: [
      {
        range: "> 12,000",
        meaning: "Leukocytosis — infection, inflammation, physiologic stress (surgery/trauma), steroids, leukemia",
        clinicalAction: "Evaluate with differential; consider left shift (bandemia > 10%) for bacterial infection",
      },
      {
        range: "10,000–12,000 + bands > 10%",
        meaning: "Left shift — early/evolving bacterial infection or sepsis physiology",
        clinicalAction: "Blood cultures, empiric antibiotics if clinical signs of infection; monitor trend",
      },
      {
        range: "4,500–11,000",
        meaning: "Normal — does not exclude localized infection (e.g., appendicitis can have normal WBC in up to 20%)",
        clinicalAction: "Correlate with clinical exam, CRP, imaging; do not rely solely on WBC to rule out surgical pathology",
      },
      {
        range: "< 4,000",
        meaning: "Leukopenia — viral infection, overwhelming sepsis (poor prognostic sign), chemotherapy, autoimmune disease",
        clinicalAction: "Assess ANC; if ANC < 500, neutropenic precautions; evaluate for septic shock physiology",
      },
      {
        range: "> 30,000",
        meaning: "Marked leukocytosis — consider C. difficile colitis, leukemoid reaction, or hematologic malignancy",
        clinicalAction: "Stool C. diff PCR if post-antibiotic/post-operative; peripheral smear if suspicious for hematologic cause",
      },
    ],
    clinicalPearl:
      "In acute appendicitis, WBC > 10,000 has ~70–80% sensitivity; combining with CRP > 10 mg/L and neutrophil > 75% increases specificity. The Alvarado score uses WBC ≥ 10,000 as a criterion (2 points) and left shift (1 point). A normal WBC does not exclude appendicitis — use clinical scoring + CT if uncertainty.",
    boardRecallTip: "Leukocytosis + left shift + CRP elevation + fever = systemic inflammatory response. In the surgical patient, always think: is there an undrained source (abscess, anastomotic leak)?",
  },
  {
    id: "gs-lab-crp",
    rotation: "general-surgery",
    name: "C-Reactive Protein (CRP)",
    normalRange: "< 1.0 mg/dL (< 10 mg/L)",
    unit: "mg/dL or mg/L",
    interpretation: [
      {
        range: "< 1 mg/dL (< 10 mg/L)",
        meaning: "Normal — low inflammatory state",
        clinicalAction: "No acute inflammatory process; if clinical suspicion high, repeat in 24 hours (CRP rises 6–8 hours after insult, peaks at 48–72h)",
      },
      {
        range: "1–10 mg/dL (10–100 mg/L)",
        meaning: "Moderate elevation — bacterial infection, pancreatitis, post-operative inflammation (expected up to day 3)",
        clinicalAction: "Trend daily; if rising after post-op day 3, evaluate for surgical site infection, anastomotic leak, abscess",
      },
      {
        range: "> 10 mg/dL (> 100 mg/L)",
        meaning: "Marked elevation — severe bacterial infection, pancreatitis, necrotizing fasciitis, anastomotic leak",
        clinicalAction: "CT imaging; source control; escalate antibiotics; consider sepsis bundle activation",
      },
      {
        range: "> 150 mg/L in acute pancreatitis",
        meaning: "CRP > 150 mg/L at 48 hours = predictor of necrotizing pancreatitis (equivalent to Ranson's ≥ 3)",
        clinicalAction: "NPO, IV fluids, ICU monitoring; CT with contrast at 72–96 hours to assess for necrosis",
      },
    ],
    clinicalPearl:
      "CRP is a better marker of surgical infection than WBC alone. Post-operatively, CRP peaks around day 2–3 and should trend down. A rising CRP after post-op day 3 is a sensitive early indicator of complications (leak, SSI, collection) before clinical signs develop. CRP > 190 mg/L at 48h predicts severe pancreatitis with 80% sensitivity.",
    boardRecallTip: "CRP > 150 mg/L at 48 hours = severe acute pancreatitis (necrotizing). Post-op day 3+ rising CRP = suspect anastomotic leak or intra-abdominal abscess.",
  },
  {
    id: "gs-lab-lipase",
    rotation: "general-surgery",
    name: "Serum Lipase",
    normalRange: "< 60 U/L (lab-dependent; some up to 160 U/L)",
    unit: "U/L",
    interpretation: [
      {
        range: "< 3× upper limit of normal (ULN)",
        meaning: "Minimally elevated — non-specific; can occur with renal failure, intestinal ischemia, DKA, bowel obstruction",
        clinicalAction: "Correlate clinically; not diagnostic of pancreatitis alone if < 3× ULN",
      },
      {
        range: "≥ 3× ULN",
        meaning: "Diagnostic of acute pancreatitis (per Atlanta 2012 revised criteria) when combined with clinical syndrome",
        clinicalAction: "Confirm with clinical presentation (epigastric pain radiating to back, N/V); imaging not required to diagnose if lipase ≥ 3× ULN + symptoms",
      },
      {
        range: "Very high (> 10× ULN)",
        meaning: "More specific for pancreatitis; magnitude does NOT correlate with severity",
        clinicalAction: "Use BISAP score (BUN > 25, altered mental status, SIRS ≥ 2, age > 60, pleural effusion) to predict severity, NOT the lipase level",
      },
    ],
    clinicalPearl:
      "Lipase is preferred over amylase for diagnosing acute pancreatitis — it has higher sensitivity (94% vs 83%) and specificity (96% vs 88%), remains elevated longer (3–5 days vs 1–2 days for amylase), and is more reliable in hypertriglyceridemia-induced pancreatitis (amylase is factitiously low). Severity is determined by Atlanta classification (mild/moderately severe/severe), NOT by enzyme level. The most common causes are gallstones (40%) and alcohol (30%).",
    boardRecallTip: "Lipase ≥ 3× ULN = pancreatitis. High lipase does NOT = severe pancreatitis. Use BISAP or CT severity index (CTSI) for severity. Gallstones #1 cause → get RUQ ultrasound.",
  },
  {
    id: "gs-lab-bilirubin",
    rotation: "general-surgery",
    name: "Serum Bilirubin (Total, Direct, Indirect)",
    normalRange: "Total: 0.1–1.2 mg/dL | Direct: 0–0.3 mg/dL | Indirect: 0.1–1.0 mg/dL",
    unit: "mg/dL",
    interpretation: [
      {
        range: "Total > 1.2 mg/dL",
        meaning: "Hyperbilirubinemia — must differentiate conjugated (direct) vs unconjugated (indirect)",
        clinicalAction: "Fractionation: if direct > 50%, suspect hepatocellular or obstructive pathology; if indirect dominant, suspect hemolysis or Gilbert's",
      },
      {
        range: "Direct (conjugated) > 50% of total",
        meaning: "Conjugated hyperbilirubinemia — biliary obstruction (choledocholithiasis, cholangiocarcinoma, pancreatic head cancer, stricture), hepatocellular disease, Dubin-Johnson syndrome",
        clinicalAction: "RUQ ultrasound for ductal dilation; if dilated → MRCP or CT; if obstructed + fever/RUQ pain/jaundice (Charcot's triad) → ERCP + antibiotics for cholangitis",
      },
      {
        range: "Total > 2–3 mg/dL",
        meaning: "Clinical jaundice visible in sclera (scleral icterus) and skin",
        clinicalAction: "Document scleral icterus on exam; order LFTs, GGT, alkaline phosphatase, CBC, coagulation studies",
      },
      {
        range: "Total bilirubin > 10 mg/dL in obstructive jaundice",
        meaning: "Significant biliary obstruction — high risk for cholangitis, hepatic dysfunction, coagulopathy",
        clinicalAction: "Check INR/PT; ERCP for decompression if common bile duct stone; surgical or percutaneous biliary drainage for malignant obstruction",
      },
      {
        range: "Indirect dominant + low Hgb + elevated LDH",
        meaning: "Hemolytic process (pigment gallstones risk if chronic)",
        clinicalAction: "Check peripheral smear, reticulocyte count, haptoglobin; hemolysis → bilirubin → pigment gallstones (sickle cell, hereditary spherocytosis)",
      },
    ],
    clinicalPearl:
      "Charcot's Triad (RUQ pain + fever + jaundice) = ascending cholangitis. Reynolds' Pentad adds mental status changes and hemodynamic instability — indicates suppurative cholangitis requiring emergent ERCP decompression. Courvoisier's sign (painless palpable gallbladder + jaundice) suggests pancreatic head or distal CBD malignancy, NOT choledocholithiasis (stones cause chronic gallbladder fibrosis → non-palpable).",
    boardRecallTip: "Direct bili → obstructive or hepatocellular. Charcot's triad = cholangitis → ERCP. Courvoisier's sign (painless jaundice + palpable GB) = pancreatic cancer until proven otherwise.",
  },
  {
    id: "gs-lab-lactic-acid",
    rotation: "general-surgery",
    name: "Serum Lactate",
    normalRange: "0.5–2.0 mmol/L (venous or arterial)",
    unit: "mmol/L",
    interpretation: [
      {
        range: "< 2.0 mmol/L",
        meaning: "Normal tissue perfusion",
        clinicalAction: "No immediate action for lactate alone; correlate with clinical picture",
      },
      {
        range: "2.0–4.0 mmol/L",
        meaning: "Hyperlactatemia — early/compensated tissue hypoperfusion, mesenteric ischemia, severe SIRS, hepatic dysfunction impairing clearance",
        clinicalAction: "Repeat lactate in 2 hours after resuscitation; assess for septic source; aggressive fluid resuscitation",
      },
      {
        range: "> 4.0 mmol/L",
        meaning: "Lactic acidosis — frank shock (septic, cardiogenic, hypovolemic), mesenteric ischemia, bowel necrosis, severe hepatic failure",
        clinicalAction: "Sepsis bundle activation; emergent surgical evaluation if mesenteric ischemia suspected; vasopressors if fluid-refractory hypotension; ICU transfer",
      },
      {
        range: "Persistent elevation > 4 after 6h of resuscitation",
        meaning: "Refractory hypoperfusion — high mortality; suggests ongoing source (undrained infection, ischemic bowel, massive hemorrhage)",
        clinicalAction: "Emergent surgical exploration; reassess adequacy of source control; consider vasopressor support",
      },
    ],
    clinicalPearl:
      "In acute mesenteric ischemia, elevated lactate is a late (ominous) finding indicating bowel necrosis — it is NOT a reliable early marker. Diagnosis relies on clinical suspicion (AF + severe abdominal pain out of proportion to exam) → CT angiography. In sepsis, lactate clearance (≥ 10% reduction in 2 hours) is a resuscitation target equivalent to ScvO₂ ≥ 70%. Mesenteric venous thrombosis can present with more insidious course and lactatemia.",
    boardRecallTip: "Lactate > 4 + hypotension = septic shock → sepsis bundle. Lactate elevation + AF + pain out of proportion to exam = mesenteric ischemia → CT angiography urgently.",
  },
  {
    id: "gs-lab-coags",
    rotation: "general-surgery",
    name: "Coagulation Studies (PT/INR, aPTT, Platelet Count)",
    normalRange: "PT: 11–13.5 sec | INR: 0.8–1.1 | aPTT: 25–35 sec | Platelets: 150,000–400,000/µL",
    unit: "sec / ratio / /µL",
    interpretation: [
      {
        range: "INR > 1.5 pre-operatively",
        meaning: "Elevated bleeding risk — warfarin effect, hepatic synthetic dysfunction, DIC, vitamin K deficiency",
        clinicalAction: "For elective surgery: hold warfarin 5 days, bridge if high thrombotic risk; for emergent surgery: 4-factor PCC (Kcentra) + vitamin K IV; target INR < 1.5 for most procedures",
      },
      {
        range: "aPTT > 1.5× normal",
        meaning: "Heparin effect, hemophilia A/B (factor VIII/IX deficiency), lupus anticoagulant, DIC",
        clinicalAction: "Hold heparin if pre-operative; if hemophilia → hematology consult + factor replacement; check mixing study to differentiate deficiency vs inhibitor",
      },
      {
        range: "Platelet < 50,000",
        meaning: "High surgical bleeding risk; transfuse to > 50,000 for most procedures; > 100,000 for neurosurgery/ophthalmic",
        clinicalAction: "Platelet transfusion if < 50,000 + active bleeding or pre-operative; exclude ITP (do NOT transfuse for ITP — give IVIg/steroids); HIT (do NOT give platelets — thrombotic risk)",
      },
      {
        range: "Prolonged PT + aPTT + thrombocytopenia + elevated D-dimer + low fibrinogen",
        meaning: "Disseminated intravascular coagulation (DIC) — consumptive coagulopathy; causes: massive trauma, sepsis, transfusion reaction, amniotic fluid embolism, solid tumor",
        clinicalAction: "Treat underlying cause; FFP for PT/aPTT > 1.5× normal; cryoprecipitate if fibrinogen < 100 mg/dL; platelets if < 50,000 + bleeding; avoid heparin in most surgical DIC",
      },
    ],
    clinicalPearl:
      "Preoperative coagulation testing is only indicated when there is a clinical reason (bleeding history, liver disease, anticoagulant use, malnutrition) — routine coags before low-risk surgery are not recommended. For emergent reversal of warfarin in life-threatening bleeding: 4-factor PCC (Kcentra) + vitamin K 10 mg IV. For dabigatran reversal: idarucizumab (Praxbind). For factor Xa inhibitor reversal: andexanet alfa (Andexxa) or 4-factor PCC off-label.",
    boardRecallTip: "DIC = prolonged PT + aPTT + thrombocytopenia + elevated D-dimer + low fibrinogen. Treat the cause + FFP + cryo + platelets. Warfarin reversal for urgent surgery: 4-factor PCC + vitamin K IV.",
  },
  {
    id: "gs-lab-lfts",
    rotation: "general-surgery",
    name: "Liver Function Tests (AST, ALT, Alk Phos, GGT, Albumin)",
    normalRange: "AST: 10–40 U/L | ALT: 7–56 U/L | Alk Phos: 44–147 U/L | GGT: 9–48 U/L | Albumin: 3.5–5.0 g/dL",
    unit: "U/L / g/dL",
    interpretation: [
      {
        range: "AST/ALT > 3× ULN (hepatocellular pattern)",
        meaning: "Hepatocellular injury — viral hepatitis, ischemic hepatitis (shock liver), alcoholic hepatitis (AST:ALT ratio > 2:1), drug-induced liver injury (DILI), right heart failure",
        clinicalAction: "Hepatitis panel (A, B, C); check Tylenol level; echo if cardiac cause suspected; MELD score if cirrhosis suspected",
      },
      {
        range: "Alk Phos + GGT > 3× ULN (cholestatic pattern)",
        meaning: "Biliary obstruction or cholestasis — choledocholithiasis, cholangitis, primary sclerosing cholangitis, malignancy, granulomatous hepatitis",
        clinicalAction: "RUQ ultrasound for biliary dilation; MRCP if US inconclusive; ERCP if therapeutic intervention needed",
      },
      {
        range: "Albumin < 3.0 g/dL",
        meaning: "Chronic hepatic synthetic dysfunction (cirrhosis), malnutrition, nephrotic syndrome (protein loss), protein-losing enteropathy, sepsis (dilutional)",
        clinicalAction: "Assess nutritional status; Child-Pugh score (includes albumin); pre-op optimization with nutrition support; elevated post-op complication risk",
      },
      {
        range: "AST:ALT ratio > 2:1",
        meaning: "Classic for alcoholic hepatitis (ethanol preferentially depletes ALT due to pyridoxine deficiency required for ALT synthesis)",
        clinicalAction: "CAGE/AUDIT screen; Maddrey's discriminant function (DF): if DF ≥ 32, consider methylprednisolone; check for concurrent infection before starting steroids",
      },
    ],
    clinicalPearl:
      "Child-Pugh score predicts surgical mortality in cirrhotic patients: Class A (5–6 pts) = 10% surgical mortality; Class B (7–9 pts) = 30%; Class C (10–15 pts) = 75–80% — avoid elective surgery in Child C. MELD score > 15 is associated with markedly elevated perioperative risk. Albumin is a stronger marker of chronic hepatic function than transaminases (which reflect acute injury).",
    boardRecallTip: "Hepatocellular pattern (AST/ALT up) vs cholestatic pattern (alk phos/GGT up). AST:ALT > 2:1 = alcoholic hepatitis. Child-Pugh C = 75% surgical mortality → avoid elective surgery.",
  },
  {
    id: "gs-lab-amylase-urine",
    rotation: "general-surgery",
    name: "Amylase-to-Creatinine Clearance Ratio (ACCR)",
    normalRange: "< 5% (ACCR = [urine amylase / serum amylase] × [serum Cr / urine Cr] × 100)",
    unit: "%",
    interpretation: [
      {
        range: "< 5%",
        meaning: "Normal — excludes macroamylasemia as cause of elevated serum amylase",
        clinicalAction: "If serum amylase elevated but ACCR normal, consider macroamylasemia (benign, no treatment needed)",
      },
      {
        range: "> 5%",
        meaning: "Acute pancreatitis (ACCR 5–15%), acute renal failure (elevated due to decreased filtration), duodenal perforation",
        clinicalAction: "Correlate with lipase (preferred); clinical presentation; imaging",
      },
      {
        range: "Very low (< 1%)",
        meaning: "Macroamylasemia — amylase bound to immunoglobulin; large complex not filtered by kidney → low urine amylase despite high serum",
        clinicalAction: "No treatment needed; reassure; do not pursue unnecessary workup for elevated amylase in this setting",
      },
    ],
    clinicalPearl:
      "ACCR is primarily used to distinguish macroamylasemia from true pancreatic pathology. In clinical practice, lipase has largely replaced amylase for diagnosing acute pancreatitis because lipase is more sensitive, more specific, and remains elevated longer. Serum amylase can be normal in the first few hours and in alcohol-induced pancreatitis.",
    boardRecallTip: "Lipase > amylase for pancreatitis diagnosis. Macroamylasemia: high serum amylase + very low ACCR + no symptoms → benign, no workup needed.",
  },
];

export const generalSurgeryImaging: ImagingFinding[] = [
  {
    id: "gs-img-ct-abdomen-appendicitis",
    rotation: "general-surgery",
    modality: "CT Abdomen/Pelvis with IV Contrast",
    findingName: "Acute Appendicitis",
    classicFindings: [
      "Dilated appendix > 6 mm in diameter (outer wall to outer wall)",
      "Appendiceal wall thickening > 2 mm with enhancement",
      "Periappendiceal fat stranding (hyperechoic/hyperdense inflammatory change)",
      "Appendicolith (calcified fecalith) if present — associated with perforation risk",
      "Loss of normal appendiceal lumen air",
      "Pericecal or right lower quadrant free fluid",
      "Perforation signs: free air, phlegmon, or abscess formation",
    ],
    keyDifferentials: [
      "Mesenteric lymphadenitis (multiple enlarged nodes, normal appendix)",
      "Ovarian pathology (torsion, ruptured cyst — check right adnexa in females)",
      "Crohn's terminal ileitis (wall thickening of terminal ileum, skip lesions, fat wrapping)",
      "Meckel's diverticulitis (if 2 feet from ileocecal valve — technetium scan more helpful)",
      "Cecal diverticulitis (right-sided, near cecum, normal appendix)",
      "Epiploic appendagitis (fat-density lesion near colon with hyperattenuating rim, self-limiting)",
    ],
    clinicalCorrelation:
      "CT sensitivity and specificity both > 95% for appendicitis. For pediatric patients and pregnant women, ultrasound is preferred first (no radiation); if nondiagnostic, MRI. CT is the test of choice when clinical picture is equivocal in adults. A negative CT essentially rules out appendicitis. Perforation is suggested by free air, abscess, or phlegmon — management differs (interval appendectomy vs immediate surgery).",
    boardRecallTip: "Appendix > 6 mm + fat stranding = appendicitis. Free air = perforation. Pregnant/pediatric: US first, then MRI. CT sensitivity and specificity both > 95%.",
  },
  {
    id: "gs-img-ruq-us-cholecystitis",
    rotation: "general-surgery",
    modality: "Abdominal Ultrasound (RUQ)",
    findingName: "Acute Cholecystitis",
    classicFindings: [
      "Gallbladder wall thickening > 3–4 mm (in absence of ascites/hypoalbuminemia)",
      "Pericholecystic fluid (edema surrounding gallbladder)",
      "Positive sonographic Murphy's sign (maximal tenderness with probe directly over gallbladder)",
      "Cholelithiasis (echogenic foci with posterior acoustic shadowing)",
      "Gallbladder distension > 5 cm transverse diameter",
      "Intramural gas (emphysematous cholecystitis — gas-forming organisms, diabetic patients)",
      "Common bile duct dilation > 6 mm (suggests choledocholithiasis; add 1 mm per decade > 60 years of age)",
    ],
    keyDifferentials: [
      "Choledocholithiasis (CBD stone — RUQ US limited sensitivity; MRCP or EUS for definitive diagnosis)",
      "Cholangitis (ascending — Charcot's triad; dilated CBD; urgent ERCP)",
      "Gallbladder polyp (no shadowing, non-mobile, > 1 cm warrants cholecystectomy)",
      "Gallbladder adenocarcinoma (irregular wall, mass, + lymphadenopathy)",
      "Hepatitis (tender hepatomegaly, elevated transaminases, no GB wall thickening)",
      "Biliary dyskinesia (reproduced pain with CCK stimulation, HIDA ejection fraction < 38%)",
    ],
    clinicalCorrelation:
      "RUQ ultrasound is the first-line imaging for suspected cholecystitis — sensitivity 88%, specificity 80%. HIDA scan is more sensitive (97%) if US inconclusive. Tokyo Guidelines TG18 criteria require: local signs (Murphy's/RUQ pain), systemic signs (fever, elevated WBC), and imaging confirmation. Grade I (mild) = early laparoscopic cholecystectomy within 24–72 hours. Grade III (severe organ dysfunction) = ICU + urgent biliary drainage if not surgical candidate.",
    boardRecallTip: "RUQ US first for cholecystitis. GB wall > 4 mm + Murphy's sign + stones = cholecystitis. CBD > 6 mm = choledocholithiasis → MRCP/ERCP. Positive sonographic Murphy's sign = examiner confirms probe over GB is point of maximal tenderness.",
  },
  {
    id: "gs-img-ct-sbo",
    rotation: "general-surgery",
    modality: "CT Abdomen/Pelvis with IV Contrast",
    findingName: "Small Bowel Obstruction (SBO)",
    classicFindings: [
      "Dilated small bowel loops > 2.5–3 cm diameter proximal to transition point",
      "Decompressed distal small bowel and colon (air-fluid levels in obstructed loops)",
      "Transition point visible (adhesion band, hernia, mass)",
      "Air-fluid levels on upright or decubitus plain film (step-ladder pattern)",
      "String-of-pearls sign: small air bubbles in fluid-filled loops on supine film",
      "Closed-loop obstruction: C-shaped or coffee-bean loop of bowel with two adjacent transition points (high risk for strangulation)",
      "Ischemic signs: bowel wall thickening, pneumatosis intestinalis, portal venous gas, free fluid",
    ],
    keyDifferentials: [
      "Ileus (no transition point; diffuse dilation including colon; post-operative or metabolic cause)",
      "Large bowel obstruction (dilated colon > 6 cm or cecum > 9 cm; sigmoid volvulus — coffee-bean sign pointing to LUQ)",
      "Ogilvie syndrome (pseudo-obstruction; colonoscopic decompression or neostigmine IV)",
      "Cecal volvulus (coffee-bean sign pointing to LUQ; requires urgent surgical management)",
      "Colonic volvulus (sigmoid most common; CT shows whirl sign, dilated sigmoid pointing to RUQ)",
    ],
    clinicalCorrelation:
      "CT with IV contrast is the definitive imaging for SBO — sensitivity 97%, specificity 94%. Plain abdominal films are the initial study but miss up to 20% of SBOs. EAST guidelines recommend Gastrografin (water-soluble contrast) challenge for adhesive SBO: if contrast reaches colon by 8–24 hours → high likelihood of non-operative resolution; also therapeutic. Immediate surgery indications: strangulation, closed-loop, perforation, or failure of 48-hour non-operative trial.",
    boardRecallTip: "SBO: dilated small bowel > 3 cm + transition point + decompressed colon. Closed-loop = surgical emergency. Pneumatosis intestinalis or portal gas = ischemic bowel → OR immediately.",
  },
  {
    id: "gs-img-ct-pancreatitis",
    rotation: "general-surgery",
    modality: "CT Abdomen/Pelvis with IV Contrast (CECT)",
    findingName: "Acute Pancreatitis — Severity and Complications",
    classicFindings: [
      "Pancreatic edema and enlargement (interstitial edematous pancreatitis — most common)",
      "Peripancreatic fat stranding and fluid collections",
      "Necrosis: areas of non-enhancement of pancreatic parenchyma > 30% = severe (necrotizing pancreatitis)",
      "Acute peripancreatic fluid collections (APFC) — within first 4 weeks, no wall",
      "Pseudocyst — well-defined fluid collection persisting > 4 weeks, thin wall, no solid component",
      "Walled-off pancreatic necrosis (WOPN) — > 4 weeks, thick wall, solid + liquid debris (needs endoscopic or surgical drainage if infected)",
      "CT Severity Index (CTSI) = Balthazar grade (A–E, 0–4 points) + % necrosis (0–6 points); CTSI > 6 = severe",
    ],
    keyDifferentials: [
      "Pancreatic cancer (mass, ductal dilation, lymphadenopathy — can present with pancreatitis)",
      "Perforated peptic ulcer (free air, epigastric pain, no pancreatic edema)",
      "Mesenteric ischemia (SMA/SMV involvement, bowel wall changes, elevated lactate)",
      "Aortic dissection extending to mesenteric vessels (Type B — chest CT for aorta)",
    ],
    clinicalCorrelation:
      "CT with contrast is NOT indicated for mild pancreatitis on presentation — diagnosis is clinical + lipase ≥ 3× ULN. CT is indicated: (1) diagnostic uncertainty, (2) clinical deterioration or failure to improve by 48–72 hours, (3) suspected complications (abscess, necrosis). CRP > 150 mg/L at 48 hours predicts severe pancreatitis. Infected necrosis: fever + WOPN → CT-guided aspiration for culture; step-up approach (endoscopic necrosectomy preferred over open); open necrosectomy for failed minimally invasive approach.",
    boardRecallTip: "CT for pancreatitis: delayed 72–96h (necrosis not apparent before 48h). CTSI > 6 = severe. CRP > 150 at 48h = necrotizing pancreatitis. Pseudocyst > 4 weeks + symptomatic = drainage.",
  },
  {
    id: "gs-img-kub-sbo",
    rotation: "general-surgery",
    modality: "Plain Abdominal X-Ray (KUB + Upright)",
    findingName: "Bowel Obstruction and Free Air",
    classicFindings: [
      "Free air under diaphragm (pneumoperitoneum) — best seen on upright CXR or left lateral decubitus; if too ill for upright → CT preferred",
      "Step-ladder air-fluid levels in SBO — differential heights on upright film",
      "Distended small bowel loops with plicae circulares (valvulae conniventes) visible across entire lumen width",
      "Large bowel: haustral markings do NOT traverse full diameter; colon loops at periphery",
      "Coffee-bean sign: sigmoid volvulus — dilated sigmoid loop pointing to right upper quadrant",
      "Thumbprinting: colonic wall edema (ischemic colitis, C. difficile colitis)",
      "Pneumatosis intestinalis: air within bowel wall — ischemia, NEC in neonates",
      "Portal venous gas: branching air pattern in liver periphery — ischemic bowel (surgical emergency)",
    ],
    keyDifferentials: [
      "Ileus vs SBO (clinical: ileus = no bowel sounds, diffuse dilation, no transition point on CT)",
      "Sigmoid volvulus vs cecal volvulus (sigmoid: coffee-bean to RUQ; cecal: kidney-bean to LUQ)",
      "Pneumoperitoneum without perforation: post-operative (first 3–5 days is normal), recent endoscopy",
    ],
    clinicalCorrelation:
      "Plain films are quick and readily available but have limited sensitivity (50–70%) for SBO and cannot reliably detect strangulation. They are appropriate for initial evaluation of suspected obstruction or perforation. Free air on upright CXR is the quickest way to confirm perforation when CT is not immediately available. If the patient cannot sit upright, left lateral decubitus (patient on left side) allows free air to collect over the liver edge. CT abdomen is the definitive study.",
    boardRecallTip: "Free air under diaphragm on upright CXR = perforation until proven otherwise → emergent surgical consult. Coffee-bean sign to RUQ = sigmoid volvulus → rigid sigmoidoscopy for decompression (if viable). Portal venous gas = ischemic bowel → emergent surgery.",
  },
  {
    id: "gs-img-us-breast",
    rotation: "general-surgery",
    modality: "Breast Ultrasound and Mammography",
    findingName: "Breast Mass Evaluation — BI-RADS Classification",
    classicFindings: [
      "BI-RADS 0: Incomplete — additional imaging needed (ultrasound if dense, palpable mass)",
      "BI-RADS 1: Negative — routine annual screening",
      "BI-RADS 2: Benign — cyst (thin walls, anechoic, posterior enhancement), lipoma, calcified fibroadenoma",
      "BI-RADS 3: Probably benign (< 2% malignancy risk) — short-interval follow-up at 6 months; well-circumscribed solid mass in young patient",
      "BI-RADS 4: Suspicious (2–95% risk) — tissue biopsy (4A: low, 4B: moderate, 4C: high suspicion)",
      "BI-RADS 5: Highly suggestive of malignancy (> 95% risk) — spiculated mass, irregular borders, microlobulations, posterior shadowing, skin tethering",
      "BI-RADS 6: Known biopsy-proven malignancy",
      "Mammographic: microcalcifications (DCIS — pleomorphic, branching pattern along duct); architectural distortion",
    ],
    keyDifferentials: [
      "Fibroadenoma (young women < 35; well-circumscribed; US-guided CNB if > 2 cm or growing)",
      "Cyst (simple cyst = BI-RADS 2; complicated cyst — aspiration; complex = BI-RADS 4 → biopsy)",
      "DCIS (ductal carcinoma in situ — microcalcifications on mammogram; treated with lumpectomy ± radiation)",
      "Invasive ductal carcinoma (most common — 70–80%; spiculated; triple assessment: clinical + imaging + biopsy)",
      "Phyllodes tumor (rapid growth; spindle cells; wide local excision, 1 cm margins)",
      "Mastitis/abscess (warm, tender, erythematous; lactating women; US-guided aspiration vs I&D)",
    ],
    clinicalCorrelation:
      "Triple assessment for breast mass: clinical exam + imaging (mammogram ± US) + tissue biopsy. Any palpable breast mass in a woman > 30 years → diagnostic mammogram + US. BI-RADS 4 or 5 → core needle biopsy (CNB). Breast cancer screening: USPSTF recommends biennial mammography age 40–74 (Grade B) or shared decision-making starting age 40. ACOG recommends annual starting age 40. BRCA1/2 carriers → annual MRI + mammogram starting age 25–30.",
    boardRecallTip: "BI-RADS 4/5 → biopsy. BI-RADS 3 → 6-month follow-up US. Triple assessment: exam + imaging + biopsy. DCIS: microcalcifications on mammogram → lumpectomy ± XRT.",
  },
  {
    id: "gs-img-hida",
    rotation: "general-surgery",
    modality: "Hepatobiliary Iminodiacetic Acid (HIDA) Scan",
    findingName: "Acute Cholecystitis and Biliary Dyskinesia",
    classicFindings: [
      "Normal: hepatic uptake within 5 min → biliary excretion → gallbladder visualization within 30–60 min → bowel activity within 60 min",
      "Acute cholecystitis: non-visualization of gallbladder > 4 hours after tracer injection (cystic duct obstruction by stone/edema)",
      "Common bile duct obstruction: tracer fails to reach bowel; gallbladder may or may not fill",
      "Gallbladder ejection fraction (GBEF): CCK stimulation during scan; normal GBEF ≥ 38%",
      "Biliary dyskinesia: GBEF < 35–38% with reproduced symptoms during CCK infusion → cholecystectomy indicated if symptomatic",
      "Bile leak: post-cholecystectomy or trauma; tracer extravasates outside expected biliary structures",
    ],
    keyDifferentials: [
      "Acute cholecystitis (HIDA most sensitive test at 97% sensitivity; preferred when US equivocal)",
      "Chronic cholecystitis with cystic duct obstruction vs biliary dyskinesia (GBEF differentiates)",
      "Post-cholecystectomy syndrome (HIDA for bile leak vs sphincter of Oddi dysfunction)",
    ],
    clinicalCorrelation:
      "HIDA scan is most useful when RUQ US is equivocal for acute cholecystitis. In RUQ US: GB wall thickening + stones + Murphy's sign is usually sufficient for diagnosis. HIDA adds value when clinical presentation is ambiguous, patient is fasting > 24 hours (gallbladder may not fill even without obstruction), or when cholecystitis is suspected without cholelithiasis (acalculous cholecystitis — critically ill patients in ICU). Biliary dyskinesia is a functional disorder causing biliary-type pain without gallstones; cholecystectomy is curative in 70–80%.",
    boardRecallTip: "HIDA best for cholecystitis when US equivocal. Non-visualization of GB at 4 hours = cystic duct obstruction = cholecystitis. GBEF < 38% + symptoms = biliary dyskinesia → cholecystectomy.",
  },
];
