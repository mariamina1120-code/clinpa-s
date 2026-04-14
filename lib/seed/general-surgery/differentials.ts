// @ts-nocheck
import type { DifferentialSet } from "@/types";

export const generalSurgeryDifferentials: DifferentialSet[] = [
  {
    id: "gs-diff-rlq-pain",
    chiefComplaint: "Right lower quadrant (RLQ) pain",
    rotation: "general-surgery",
    differentials: [
      {
        diagnosis: "Acute Appendicitis",
        likelihood: "high",
        distinguishingHistory: "Pain that begins periumbilically and migrates to RLQ over 12–24 hours. Anorexia (highly sensitive — if patient is hungry, appendicitis less likely). Nausea, vomiting after pain onset. Low-grade fever.",
        distinguishingExam: "McBurney's point tenderness (1/3 ASIS to umbilicus). Rovsing's sign positive. Rebound tenderness. Psoas sign (retrocecal appendix). Obturator sign (pelvic appendix). Low-grade fever.",
        keyWorkup: "CBC (leukocytosis with left shift). CRP elevated. CT abdomen/pelvis with IV contrast (gold standard — dilated appendix >6 mm, fat stranding, appendicolith). US first-line in children/pregnancy (avoids radiation).",
        redFlags: ["Fever >38.5°C + WBC >18,000 = perforation/gangrene", "Diffuse peritonitis = free perforation", "Pregnancy + RLQ pain = ruptured ectopic must be excluded first"],
        clinicalPearl: "Alvarado score ≥7 = high suspicion; if CT confirms, proceed to appendectomy. Alvarado ≤4 = low risk, can discharge with instructions to return if worsening."
      },
      {
        diagnosis: "Ovarian Pathology (Torsion, Cyst Rupture, Ectopic Pregnancy)",
        likelihood: "high",
        distinguishingHistory: "Reproductive-age female. Sudden onset severe pain (torsion — twisting). Vaginal bleeding + missed period (ectopic pregnancy — can be life-threatening). Sudden onset pain at mid-cycle (ruptured ovarian cyst — 'Mittelschmerz' if at ovulation).",
        distinguishingExam: "Cervical motion tenderness (ectopic, PID). Adnexal mass or tenderness. Peritoneal signs if ruptured (ectopic or hemorrhagic cyst).",
        keyWorkup: "Urine pregnancy test (beta-hCG) FIRST in all reproductive-age women — MUST rule out ectopic. Pelvic ultrasound (transvaginal preferred — evaluates adnexa, identifies ectopic, free fluid). CBC, type and screen if significant bleeding.",
        redFlags: ["Positive pregnancy test + RLQ/adnexal pain = ectopic until proven otherwise — OB-GYN emergency", "Hemodynamic instability from ruptured ectopic = emergent laparoscopy"],
        clinicalPearl: "Ovarian torsion: sudden severe unilateral pelvic pain, nausea/vomiting, adnexal tenderness. Doppler US may show absent flow but normal flow does NOT exclude torsion (intermittent torsion). Surgical emergency — ovary must be detorsed within hours to preserve viability."
      },
      {
        diagnosis: "Mesenteric Lymphadenitis",
        likelihood: "medium",
        distinguishingHistory: "Typically children and young adults. Recent or concurrent viral illness (URI, gastroenteritis). RLQ pain but less severe than appendicitis. No migration pattern — may be present in multiple areas.",
        distinguishingExam: "Tenderness more diffuse and mobile (shifts with positioning — not fixed to McBurney's). Lower-grade fever. No peritoneal signs.",
        keyWorkup: "CT abdomen: enlarged mesenteric lymph nodes without appendix abnormality. Normal-sized appendix. No fat stranding.",
        redFlags: ["If CT shows normal appendix and enlarged nodes in child: diagnose mesenteric lymphadenitis — conservative management, discharge with clear return precautions"],
        clinicalPearl: "Mesenteric lymphadenitis is the most common cause of RLQ pain in children after appendicitis. Most cases are self-limiting. However, Yersinia enterocolitica can cause mesenteric lymphadenitis mimicking appendicitis — especially in patients who ate undercooked pork."
      },
      {
        diagnosis: "Cecal Diverticulitis",
        likelihood: "low",
        distinguishingHistory: "Often cannot be distinguished from appendicitis clinically. Young Asian patients more common (cecal diverticula more prevalent). May have had prior episodes (appendicitis typically first presentation).",
        distinguishingExam: "Similar to appendicitis — RLQ tenderness, guarding",
        keyWorkup: "CT abdomen/pelvis: pericecal inflammation without appendix involvement — appendix separate from the inflammatory process. Normal appendix identified separately.",
        redFlags: ["Cannot distinguish from appendicitis without CT or at surgery"],
        clinicalPearl: "Cecal diverticulitis is often diagnosed intraoperatively when a normal appendix is found and the cecum is the source of inflammation. Management: surgical resection of involved segment OR appendectomy with diverticulectomy if single uncomplicated diverticulum."
      },
      {
        diagnosis: "Crohn's Disease (Terminal Ileitis)",
        likelihood: "medium",
        distinguishingHistory: "Young patient (15–35 years), crampy RLQ pain, diarrhea (often non-bloody — unlike UC), weight loss, fatigue, mouth ulcers, skin/eye/joint manifestations. Recurrent episodes (unlike appendicitis).",
        distinguishingExam: "RLQ mass (phlegmon from transmural inflammation). Perianal disease (fistula, abscess, skin tags). Skin: erythema nodosum or pyoderma gangrenosum.",
        keyWorkup: "CT abdomen: terminal ileal thickening, 'string sign' on barium study, fat wrapping (creeping fat), skip lesions. Colonoscopy with terminal ileum intubation (cobblestoning, aphthous ulcers, skip lesions). Fecal calprotectin (inflammatory marker for bowel inflammation). CRP, ESR elevated.",
        redFlags: ["Fistula (enteroenteric, enterovesical, enterocutaneous, perianal)", "Stricture with obstruction", "Abscess (CT-guided drainage)", "Massive GI bleeding (rare in Crohn's)"],
        clinicalPearl: "Crohn's disease affects any part of the GI tract from mouth to anus ('kissing lesions'). Terminal ileum + right colon most common (ileocolic). Transmural inflammation → fistulas, abscesses, strictures. UC is limited to colon, is continuous, and is mucosal only."
      }
    ]
  },
  {
    id: "gs-diff-upper-gi-bleed",
    chiefComplaint: "Upper gastrointestinal bleeding (hematemesis or melena)",
    rotation: "general-surgery",
    differentials: [
      {
        diagnosis: "Peptic Ulcer Disease (Bleeding)",
        likelihood: "high",
        distinguishingHistory: "Most common cause of UGIB (35–50%). NSAID use, H. pylori history, smoking. Duodenal ulcer (anterior perforates, posterior bleeds). Epigastric pain history. Hematemesis or melena (digested blood = black tarry stool).",
        distinguishingExam: "Epigastric tenderness (may be absent). Signs of significant blood loss: tachycardia, hypotension, orthostatic changes, pallor.",
        keyWorkup: "Two large-bore IVs, type and crossmatch, CBC, BMP, coagulation studies, INR. EGD within 24 hours (or emergently for hemodynamic instability) — visualize source, classify Forrest grade, treat (epinephrine injection + clip or cautery). PPI infusion 80 mg bolus + 8 mg/hr infusion for high-risk ulcers.",
        redFlags: ["Hemodynamic instability (HR >100, SBP <100) = activate massive transfusion protocol", "Spurting arterial hemorrhage on EGD (Forrest Ia) = highest re-bleeding risk → endoscopic treatment + IR angioembolization backup"],
        clinicalPearl: "Forrest classification: Ia (spurting) → Ib (oozing) → IIa (visible vessel) → IIb (adherent clot) → IIc (flat pigmented spot) → III (clean base). Forrest Ia + IIa = high risk of re-bleeding → endoscopic therapy + PPI infusion + close monitoring."
      },
      {
        diagnosis: "Esophageal Varices",
        likelihood: "high",
        distinguishingHistory: "Known cirrhosis, portal hypertension. Sudden onset massive hematemesis, often without epigastric pain. History of prior variceal bleeds. Jaundice, ascites, spider angiomata, palmar erythema (stigmata of liver disease).",
        distinguishingExam: "Stigmata of chronic liver disease (jaundice, ascites, caput medusae, splenomegaly). Hypotension from massive hemorrhage.",
        keyWorkup: "Emergent EGD for diagnosis and treatment (band ligation — first-line for varices; sclerotherapy if bands not possible). Terlipressin or octreotide (vasopressin analogue) IV immediately upon suspicion of variceal bleed — reduces portal pressure. Ceftriaxone 1g IV daily × 7 days (prophylactic antibiotics in cirrhotic bleed reduce bacterial translocation and mortality).",
        redFlags: ["Massive hematemesis with cirrhosis = variceal bleed until proven otherwise — start octreotide before EGD", "If EGD fails to control: transjugular intrahepatic portosystemic shunt (TIPS)", "CHILD-PUGH C cirrhosis with acute variceal bleed: 6-week mortality 30–50%"],
        clinicalPearl: "Balloon tamponade (Sengstaken-Blakemore or Minnesota tube): temporizing measure for massive variceal bleed refractory to endoscopy — bridge to TIPS or repeat endoscopy. Risk: esophageal rupture, aspiration. Should only be used by experienced practitioners."
      },
      {
        diagnosis: "Mallory-Weiss Tear",
        likelihood: "medium",
        distinguishingHistory: "Retching and vomiting BEFORE hematemesis — longitudinal mucosal tear at gastroesophageal junction from repeated Valsalva. Often alcohol-related. Non-bloody vomiting first, then bright red blood.",
        distinguishingExam: "Usually hemodynamically stable; mild epigastric or substernal discomfort",
        keyWorkup: "EGD: longitudinal mucosal tear at GEJ. Most self-limited — stop bleeding with supportive care. If active bleeding on EGD: epinephrine injection ± hemostatic clip.",
        redFlags: ["Rarely requires surgical intervention (<5%)", "Esophageal rupture (Boerhaave syndrome): full-thickness esophageal tear from forceful vomiting — contrast esophagram or CT showing esophageal perforation and mediastinal air"],
        clinicalPearl: "Boerhaave syndrome vs. Mallory-Weiss: Boerhaave = FULL-THICKNESS esophageal perforation (not just mucosa) → mediastinitis → mortality 20–40% without urgent surgery. Mackler's triad: vomiting + chest pain + subcutaneous emphysema (crepitus in neck). CXR: mediastinal widening, pleural effusion."
      },
      {
        diagnosis: "Dieulafoy Lesion",
        likelihood: "low",
        distinguishingHistory: "Recurrent massive painless hematemesis without obvious cause. Often middle-aged to elderly men. Large-caliber submucosal artery that erodes through the mucosa without ulceration — intermittent bleeding makes diagnosis difficult.",
        distinguishingExam: "Hemodynamically significant bleeding without peritoneal signs",
        keyWorkup: "EGD (may need multiple endoscopies if not actively bleeding at time of scope). Angiography if EGD non-diagnostic (during active bleed). CT angiography (CTA) can localize active bleeding site.",
        redFlags: ["Can cause massive, life-threatening hemorrhage", "If EGD fails twice: IR angioembolization or surgical wedge resection of the involved area"],
        clinicalPearl: "Dieulafoy's lesion is located most commonly in the lesser curvature of the gastric fundus (within 6 cm of the GEJ). It looks like normal mucosa around a pulsating vessel — easy to miss on EGD. Treatment: endoscopic hemostasis (epinephrine + clip, thermal coagulation, band ligation)."
      }
    ]
  },
  {
    id: "gs-diff-postop-fever",
    chiefComplaint: "Post-operative fever",
    rotation: "general-surgery",
    differentials: [
      {
        diagnosis: "Wind — Pulmonary (Atelectasis / Pneumonia)",
        likelihood: "high",
        distinguishingHistory: "Fever POD 1–2 (atelectasis) or POD 3–5 (pneumonia). Productive cough, dyspnea. Risk factors: smoker, obese, COPD, prolonged intubation, poor pain control limiting cough and deep breathing.",
        distinguishingExam: "Decreased breath sounds at bases, dullness to percussion (atelectasis), bronchial breath sounds + crackles (pneumonia). Splinting (patient breathes shallowly to avoid pain).",
        keyWorkup: "CXR (atelectasis: bibasilar linear opacities; pneumonia: lobar infiltrate). Sputum culture if productive cough. ABG or SpO2.",
        redFlags: ["SpO2 <90% on room air", "Respiratory failure requiring ventilatory support"],
        clinicalPearl: "5 Ws of post-op fever: Wind (pulmonary, POD 1–2), Water (UTI, POD 3–5), Wound (SSI, POD 5–7), Walking (DVT/PE, any time), Wonder drugs (drug fever — beta-lactams, PCNs, any time — diagnosis of exclusion)."
      },
      {
        diagnosis: "Water — Urinary Tract Infection",
        likelihood: "high",
        distinguishingHistory: "Fever POD 3–5 with Foley catheter in place (catheter-associated UTI — CAUTI). Dysuria, frequency if catheter removed. Indwelling Foley is the primary risk factor.",
        distinguishingExam: "Suprapubic tenderness. If catheter in: UA positive (leukocyte esterase, nitrites, WBCs). CVA tenderness suggests pyelonephritis.",
        keyWorkup: "UA and urine culture (catheterized specimen if Foley in place). Remove or exchange Foley catheter before culturing when possible.",
        redFlags: ["CVA tenderness + fever = pyelonephritis → treat with IV antibiotics + blood cultures", "Bacteremia from CAUTI: systemic sepsis"],
        clinicalPearl: "CAUTI prevention: remove Foley catheter as soon as possible post-operatively (ERAS: remove by POD 1 for most procedures). Using aseptic technique and a closed drainage system reduces CAUTI. Pyuria alone in a catheterized, asymptomatic patient is NOT an indication to treat (asymptomatic bacteriuria in catheterized patients)."
      },
      {
        diagnosis: "Wound — Surgical Site Infection",
        likelihood: "high",
        distinguishingHistory: "Fever POD 5–7 (earlier with Streptococcal or Clostridial infections — POD 1–3). Wound pain increasing after initial improvement. Purulent drainage, wound erythema.",
        distinguishingExam: "Wound erythema, warmth, induration, tenderness, purulent discharge. Expanding cellulitis beyond wound.",
        keyWorkup: "Wound culture and Gram stain (aspirate or deep swab). CBC (leukocytosis). CT if deep space or organ/space SSI suspected.",
        redFlags: ["Crepitus in wound → necrotizing fasciitis (emergency debridement)", "Dehiscence with exposed fascia or evisceration → emergent OR"],
        clinicalPearl: "Superficial SSI treatment: open the wound (remove staples/sutures from involved area), irrigate, pack with saline-moistened gauze (wet-to-dry packing), allow to heal by secondary intention. Deep SSI: surgical drainage ± debridement + IV antibiotics."
      },
      {
        diagnosis: "Walking — Deep Vein Thrombosis / Pulmonary Embolism",
        likelihood: "medium",
        distinguishingHistory: "Fever (low-grade) any time post-op (DVT: POD 3–14 most common). Leg swelling, calf pain, erythema (DVT). Dyspnea, pleuritic chest pain, tachycardia (PE). Risk: immobility, pelvic/lower extremity surgery, malignancy, hypercoagulable state.",
        distinguishingExam: "Unilateral calf swelling and tenderness (DVT — Homan's sign: calf pain with dorsiflexion — poor sensitivity/specificity, not reliable). Tachycardia, tachypnea, hypoxia (PE).",
        keyWorkup: "Lower extremity venous Doppler US for DVT. Wells PE score → D-dimer → CTPA for PE. EKG (sinus tachycardia, S1Q3T3 for massive PE). BNP and troponin (RV strain in massive PE).",
        redFlags: ["Massive PE with hemodynamic instability → systemic thrombolysis or catheter-directed therapy", "DVT in post-op patient on therapeutic anticoagulation → IVC filter consideration"],
        clinicalPearl: "Post-operative anticoagulation for DVT/PE: therapeutic LMWH or heparin initially; transition to DOAC (rivaroxaban or apixaban) or warfarin for 3–6 months. In cancer patients: LMWH or DOAC for 6+ months (edoxaban or rivaroxaban shown equivalent to LMWH in cancer-associated VTE)."
      },
      {
        diagnosis: "Wonder Drugs — Drug Fever",
        likelihood: "low",
        distinguishingHistory: "Fever in a patient on beta-lactam antibiotics (most common cause of drug fever), sulfonamides, antiepileptics, or other medications. Fever disproportionate to clinical appearance (patient looks well despite high fever). No other source identified after workup.",
        distinguishingExam: "Patient appears comfortable despite high fever. May have rash (Stevens-Johnson) with some drugs. No localizing findings.",
        keyWorkup: "Extensive negative workup (UA, blood cultures, CXR, wound exam all negative). Consider drug fever after ruling out all infectious causes. Discontinue suspected drug — fever resolves in 48–72 hours.",
        redFlags: ["Drug rash + fever = drug hypersensitivity reaction — stop drug immediately", "SJS/TEN: severe mucous membrane involvement — dermatology emergency"],
        clinicalPearl: "Drugs commonly causing drug fever: beta-lactams (most common), sulfonamides, phenytoin, procainamide, quinidine, allopurinol. Drug fever typically occurs 5–10 days after starting the drug. Eosinophilia may be present. Fever resolves within 48–96 hours of stopping the drug."
      }
    ]
  },
  {
    id: "gs-diff-neck-mass",
    chiefComplaint: "Neck mass in an adult",
    rotation: "general-surgery",
    differentials: [
      {
        diagnosis: "Metastatic Squamous Cell Carcinoma (from H&N primary)",
        likelihood: "high",
        distinguishingHistory: "Adult >40 years (especially with smoking/alcohol history). Hard, non-tender, fixed neck mass. History of hoarseness, dysphagia, otalgia, sore throat, oral lesion. May have no prior cancer diagnosis — mass may be first presentation of oropharyngeal cancer.",
        distinguishingExam: "Hard, fixed, irregular mass. Look for primary: oral cavity, pharynx, larynx (mirror exam, nasopharyngoscopy). Examine ALL mucosal surfaces of the head and neck.",
        keyWorkup: "CT neck/chest with contrast. FNA biopsy of neck mass (first step — not open excision). PET-CT for staging and finding occult primary. Panendoscopy (laryngoscopy + esophagoscopy + bronchoscopy) under anesthesia to find primary and biopsies.",
        redFlags: ["Hard, fixed neck mass in smoker over 40 = malignancy until proven otherwise", "Open excision of neck mass without prior FNA/panendoscopy can seed the wound and violate surgical planes — NEVER do open excision of a suspicious neck mass as the diagnostic step"],
        clinicalPearl: "Rule of 80 for adult neck masses: 80% of lateral neck masses are neoplastic; 80% of those are malignant; 80% of malignant are metastatic. Any neck mass persisting >4 weeks in an adult requires workup. FNA first, then imaging, then panendoscopy."
      },
      {
        diagnosis: "Thyroid Nodule / Thyroid Cancer",
        likelihood: "high",
        distinguishingHistory: "Midline or paramedian neck mass that MOVES WITH SWALLOWING (thyroid gland moves with larynx during swallowing — distinguishes thyroid mass from other neck masses). Hoarseness (RLN invasion = cancer). History of radiation to neck.",
        distinguishingExam: "Mass rises with swallowing. Located in anterior triangle overlying thyroid lobes or isthmus.",
        keyWorkup: "TSH first. Thyroid ultrasound with TIRADS scoring. FNA if appropriate sonographic features or size criteria met (per ACR-TIRADS).",
        redFlags: ["Hoarseness with thyroid mass → RLN invasion → malignancy → laryngoscopy pre-op", "Rapidly growing neck mass → anaplastic thyroid cancer (median survival 6 months)"],
        clinicalPearl: "A thyroglossal duct cyst is a midline neck cyst that moves with tongue protrusion AND swallowing (both). Most common congenital neck mass. Treat with Sistrunk procedure (excision of cyst + mid-body of hyoid bone + core of tissue to base of tongue)."
      },
      {
        diagnosis: "Lymphoma",
        likelihood: "medium",
        distinguishingHistory: "Younger patient (Hodgkin's: bimodal 20s and 55+). Rubbery, non-tender, mobile cervical or supraclavicular lymphadenopathy. B symptoms: fever >38°C, drenching night sweats, weight loss >10%/6 months. Mediastinal mass on CXR.",
        distinguishingExam: "Rubbery, non-tender, mobile nodes. Hepatosplenomegaly. Multiple node groups involved.",
        keyWorkup: "CBC with differential (leukocytosis, atypical lymphocytes for mono). LDH (elevated in lymphoma). EBV titers (mono). CT chest/abdomen/pelvis. PET-CT for staging. Core needle biopsy of node (excisional biopsy preferred for Hodgkin's — Reed-Sternberg cells on immunohistochemistry).",
        redFlags: ["Superior vena cava (SVC) syndrome: facial swelling, neck vein distension, Pemberton's sign (facial plethora with arm elevation) — from mediastinal lymphoma compressing SVC", "Airway compromise from large mediastinal mass"],
        clinicalPearl: "Hodgkin's lymphoma: Reed-Sternberg cells (CD15+, CD30+, CD20−). Excellent prognosis — 5-year survival 85–90% overall. ABVD chemotherapy ± radiation. Non-Hodgkin's lymphoma: more heterogeneous, generally worse prognosis depending on subtype. DLBCL: most common aggressive NHL — R-CHOP chemotherapy."
      },
      {
        diagnosis: "Reactive Lymphadenopathy / Infectious Lymphadenitis",
        likelihood: "medium",
        distinguishingHistory: "Tender, mobile nodes appearing during or shortly after infection (pharyngitis, dental infection, scalp infection, recent URI). Soft, warm. In younger patients. Spontaneous resolution after infection resolves.",
        distinguishingExam: "Tender, warm, soft, mobile nodes. Size <2 cm typically. Associated findings of infection (pharyngeal erythema, tonsillar exudates, dental pain).",
        keyWorkup: "Monospot test + EBV titers (adolescent/young adult). Throat culture. CBC (atypical lymphocytosis in mono). CBC differential. Observe for 4 weeks — if resolving, benign reactive etiology confirmed.",
        redFlags: ["Node persisting >4 weeks, enlarging, >2 cm, or hard/fixed → workup for malignancy"],
        clinicalPearl: "Cat scratch disease (Bartonella henselae): unilateral tender lymphadenopathy in regional drainage territory of a cat scratch/bite. 3–10 days post-scratch → papule at scratch site → regional LAD 1–3 weeks later. Self-limited in most immunocompetent patients. Treat with azithromycin in severe cases."
      }
    ]
  }
];
