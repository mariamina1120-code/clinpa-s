// @ts-nocheck
import type { Procedure } from "@/types";

export const internalMedicineProcedures: Procedure[] = [
  {
    id: "im-proc-001",
    name: "Diagnostic and Therapeutic Paracentesis",
    rotation: "internal-medicine",
    category: "Gastrointestinal / Hepatic",
    indication: "Diagnostic paracentesis: new-onset ascites (determine cause), suspected SBP (any patient with cirrhosis + ascites + clinical deterioration), or hepatic encephalopathy without clear trigger. Therapeutic paracentesis: large-volume ascites (LVA >5L) causing symptoms (dyspnea, abdominal pain, early satiety)",
    contraindications: [
      "Clinically evident fibrinolysis or DIC (correct coagulopathy first — PT >8 seconds above control or PLT <20,000 are relative contraindications; AASLD does not recommend routine FFP or platelet transfusion before paracentesis in cirrhosis unless INR >5 or PLT <20,000)",
      "Skin infection overlying the planned puncture site",
      "Bowel obstruction (distended bowel — use ultrasound guidance)",
      "Pregnancy (relative — ultrasound guidance required)"
    ],
    equipment: [
      "Ultrasound machine for real-time guidance (strongly recommended — reduces complications)",
      "Sterile gloves, mask, sterile drape",
      "Betadine or chlorhexidine for skin prep",
      "Local anesthetic: 1% lidocaine, 25-gauge needle for skin wheal, 22-gauge for deeper infiltration",
      "Diagnostic tap: 18–20 gauge, 3.5-inch spinal needle or paracentesis needle; 20–60 mL syringe",
      "Therapeutic tap: 15–16 gauge paracentesis needle with catheter-over-needle; vacuum bottles or drainage tubing",
      "Specimen tubes: (1) cell count tube (EDTA/purple), (2) culture bottles (inoculate directly at bedside — highest yield), (3) chemistry tube (red top — albumin, total protein, LDH, glucose), (4) AFB/fungal culture if TB or fungal ascites suspected",
      "Albumin (25% solution) for post-LVA infusion: 6–8 g per liter removed"
    ],
    steps: [
      "Confirm ascites with ultrasound: identify largest pocket of free fluid without intervening bowel. Best site: left lower quadrant 3–4 cm medial and superior to left anterior superior iliac spine (avoids epigastric vessels) OR midline 2 cm below umbilicus (dull to percussion)",
      "Position patient supine; may tilt 15–30° toward the planned puncture side to shift ascites",
      "Mark the site under ultrasound guidance; prep skin with betadine or chlorhexidine in large concentric circles; allow to dry",
      "Drape sterile field; inject 1% lidocaine skin wheal then infiltrate deeper along planned needle track to peritoneum (until a pop sensation and fluid aspirates)",
      "DIAGNOSTIC TAP: Insert 18–20 gauge needle perpendicular to skin with continuous negative pressure on syringe using the Z-tract technique (pull skin cephalad before needle insertion, then advance needle — when released, skin slides back, sealing the needle track to prevent ascites leak)",
      "Aspirate 30–60 mL of ascitic fluid; remove needle; apply pressure",
      "THERAPEUTIC TAP: Use catheter-over-needle system; insert at same site; once fluid returns, advance catheter and remove trocar; connect drainage tubing to vacuum bottle",
      "Drain up to 6–10 liters (clinical limit varies); clamp and remove catheter when drained; apply pressure and sterile bandage",
      "CRITICAL: Administer albumin 6–8 g per liter removed if >5 liters drained (prevents paracentesis-induced circulatory dysfunction — PICD; reduces renal failure and mortality)",
      "Label all specimens immediately; inoculate culture bottles bedside (before refrigeration) to maximize culture yield",
      "Analyze: (1) Appearance — clear/straw (uncomplicated); cloudy/turbid (infection/malignancy); bloody (traumatic tap or HCC/malignancy); milky (chylous ascites — hypertriglyceridemia); (2) Cell count — PMN >250 = SBP; (3) SAAG = serum albumin − ascitic albumin (≥1.1 = portal hypertension); (4) Protein — <2.5 g/dL = portal HTN; >2.5 g/dL = infection/malignancy/cardiac"
    ],
    documentation: "Document: indication (diagnostic vs. therapeutic), ultrasound guidance used, site of puncture, Z-tract technique used, volume removed, appearance of ascitic fluid, specimens sent (cell count, cultures, chemistry, albumin), albumin infusion ordered (dose × liters removed), patient tolerance, complications",
    complications: [
      "Post-paracentesis circulatory dysfunction (PICD): renal failure from splanchnic vasodilation without volume replacement — PREVENTED by albumin infusion (6–8 g/L removed)",
      "Abdominal wall hematoma (from epigastric vessel injury — avoid vessel-rich areas, use ultrasound)",
      "Persistent leak at puncture site (Z-tract technique prevents this)",
      "Bowel perforation (<0.1% with ultrasound guidance)",
      "Infection (<0.1% with sterile technique)"
    ],
    boardPearl: "SBP: PMN ≥250 cells/mm³ in ascitic fluid → treat empirically with ceftriaxone 2g IV q24h + albumin (1.5 g/kg day 1, 1 g/kg day 3) before culture results. Inoculate culture bottles at bedside — sensitivity increases from 40% to 80%. After SBP, start lifelong norfloxacin 400 mg/day SBP prophylaxis."
  },
  {
    id: "im-proc-002",
    name: "Lumbar Puncture (Spinal Tap)",
    rotation: "internal-medicine",
    category: "Neurologic",
    indication: "Suspected meningitis or encephalitis (most urgent indication — do not delay antibiotics for LP), subarachnoid hemorrhage with negative CT (sensitivity 98% within 6 hours of headache; LP required if CT negative and clinical suspicion high), MS diagnosis (oligoclonal bands, IgG index), Guillain-Barré syndrome (cytoalbuminous dissociation), NPH evaluation (response to large-volume LP — improves gait/cognition in NPH), intrathecal medication administration or chemotherapy",
    contraindications: [
      "Increased intracranial pressure with risk of herniation: papilledema, focal neurologic deficits, altered consciousness, immunocompromised with suspected mass lesion → CT HEAD FIRST",
      "Spinal epidural abscess or skin infection overlying LP site",
      "Platelet count <50,000 or INR >1.5 (relative — consider risk-benefit; platelets <20,000 = contraindicated)",
      "Anticoagulant therapy (hold novel anticoagulants for 24 hours; warfarin — INR must be ≤1.5; LMWH — wait 12 hours after prophylactic dose, 24 hours after therapeutic dose)",
      "Spinal cord compression with complete block (relative)"
    ],
    equipment: [
      "Sterile gloves, mask, sterile drape kit",
      "Chlorhexidine (preferred over betadine for antisepsis) — allow to dry",
      "Local anesthetic: 1% lidocaine with 25-gauge needle for skin, 22-gauge for deeper tissues",
      "LP tray: 20–22 gauge spinal needle with stylet (22-gauge preferred to reduce post-LP headache — 'atraumatic' Sprotte or Whitacre pencil-point tips further reduce PLPH)",
      "Manometer with 3-way stopcock for opening pressure measurement",
      "Four collection tubes (labeled 1–4) and a fluoride/gray top tube for CSF glucose",
      "Blood glucose (serum) drawn immediately before LP for comparison"
    ],
    steps: [
      "Obtain informed consent; explain post-LP headache (PLPH) in 15–30% — reduced by smaller gauge needles, horizontal rest, adequate hydration",
      "Position patient: LATERAL DECUBITUS (preferred for opening pressure): patient curls into fetal position, knees to chest, chin tucked, spine maximally flexed. SEATED (preferred for obese): patient seated at edge of bed, leaning forward onto a pillow on a bedside table, feet on a stool. Lateral decubitus is mandatory for accurate opening pressure.",
      "Identify landmarks: L3–L4 interspace (iliac crest level = L4 body or L3–4 interspace) or L4–L5. Mark with fingernail or pen.",
      "Prep skin with chlorhexidine in concentric circles; allow to fully dry (minimum 30 seconds)",
      "Drape sterile field; infiltrate 1% lidocaine skin wheal then deeper into interspinous ligament",
      "Insert spinal needle with bevel PARALLEL to dural fibers (parallel to longitudinal dural fibers = bevel pointing cephalad in lateral decubitus, bevel pointing laterally in seated) — this separates, rather than cuts, dural fibers and reduces headache",
      "Advance needle with stylet in place at slight cephalad angle (toward umbilicus); check for 'pop' (ligamentum flavum then dura) then remove stylet periodically after ligamentum flavum to check for CSF return",
      "When CSF flows freely, do NOT remove stylet again — attach stopcock and manometer IMMEDIATELY for opening pressure (normal 5–20 cm H2O; >25 = elevated ICP)",
      "Collect 1–2 mL per tube in order: Tube 1 = cell count (send first — most important for diagnosis), Tube 2 = protein and glucose, Tube 3 = Gram stain and culture (bacterial; additional AFB/fungal/viral PCR as indicated), Tube 4 = cell count repeat (to assess for traumatic tap vs. true RBCs — traumatic: RBC decreases tube 1 to 4; SAH: RBC same all tubes AND xanthochromia)",
      "Replace stylet before withdrawing needle (reduces PLPH by preventing CSF leak along needle track)",
      "Apply pressure; bandage; position patient supine for 30–60 min (head flat does not definitively prevent PLPH but may help)",
      "Recheck: adequate pain control, neurologic status stable, no signs of herniation post-procedure"
    ],
    csf_interpretation: {
      normal: "Appearance: crystal clear; Pressure: 10–20 cm H2O; WBC: 0–5 lymphocytes; Protein: 15–45 mg/dL; Glucose: 50–80 mg/dL (>60% serum glucose); No organisms on Gram stain",
      bacterial_meningitis: "Turbid/purulent; Pressure elevated; WBC 100–10,000+ (PMN predominance >80%); Protein >100 mg/dL; Glucose <40 mg/dL or CSF/serum ratio <0.4; Gram stain positive 60–90%",
      viral_meningitis: "Clear; Pressure mildly elevated; WBC 10–500 (lymphocytic); Protein mildly elevated (50–100); Glucose normal; Gram stain negative; HSV PCR for encephalitis",
      fungal_meningitis: "Clear or mildly turbid; Pressure markedly elevated; WBC variable (lymphocytic); India ink positive in 80% of Cryptococcus; Crypto Ag >99% sensitive; Culture definitive",
      subarachnoid_hemorrhage: "Uniformly bloody (same RBC count all 4 tubes); Xanthochromia (yellow tinged CSF under spectrometry 2–12 hours after hemorrhage; persists up to 2 weeks); Elevated protein"
    },
    documentation: "Document: indication, CT head status (performed or not), informed consent, position used, interspace level, needle gauge, opening pressure (with patient position noted), CSF appearance, volume collected per tube, specimen labels and tests ordered, closing pressure if checked, patient position post-procedure, adverse events",
    complications: [
      "Post-LP headache (PLPH): dull occipital headache worsened by sitting/standing, relieved by lying flat — caused by persistent CSF leak. Treatment: caffeine 300–500 mg (first-line), lying flat, IV hydration. If persistent >24–48h: blood patch (anesthesia injects 15–20 mL autologous blood into epidural space at LP level — 90% cure rate).",
      "Spinal hematoma: rare (<0.001%) — back pain + radiculopathy post-LP in anticoagulated patients. Emergency MRI and neurosurgery consult.",
      "Cerebral herniation: can occur if LP done in setting of elevated ICP with mass lesion. Prevent by obtaining CT FIRST in high-risk patients (focal deficits, papilledema, immunocompromised, altered consciousness).",
      "Traumatic tap (bloody CSF from vessel injury): send RBC count in tubes 1 and 4 — decreasing RBC from tube 1 to 4 = traumatic tap (not SAH)"
    ],
    boardPearl: "Bacterial vs. Viral meningitis CSF: Bacterial = PMN pleocytosis + LOW glucose + HIGH protein + organism on culture. Viral = lymphocytic pleocytosis + normal glucose + mildly elevated protein. SAH: xanthochromia (yellow CSF) on spectrophotometry = gold standard (sensitive for blood breakdown products for up to 2 weeks)."
  },
  {
    id: "im-proc-003",
    name: "Thoracentesis",
    rotation: "internal-medicine",
    category: "Pulmonary",
    indication: "Diagnostic thoracentesis: any unilateral pleural effusion >1 cm on lateral decubitus CXR of uncertain etiology, or known etiology that has become atypical. Therapeutic thoracentesis: large pleural effusion causing dyspnea, hypoxia, or discomfort",
    contraindications: [
      "Uncooperative patient (unable to sit still — risk of pneumothorax from needle movement)",
      "Small effusion (<1 cm on lateral decubitus) — ultrasound guidance essential if proceeding",
      "Coagulopathy (PLT <50,000 or INR >2 — relative; AASLD and BTS guidelines do not require routine correction for mild coagulopathy when ultrasound-guided)",
      "Overlying skin infection at planned site",
      "Lung adherent to chest wall at planned site (prior surgery, severe pleural disease — identify with ultrasound)"
    ],
    equipment: [
      "Ultrasound for real-time guidance (standard of care — reduces pneumothorax from 10% to <1%)",
      "Sterile gloves, mask, drape",
      "Chlorhexidine antisepsis",
      "1% lidocaine (25-gauge for skin, 22-gauge for rib periosteum and parietal pleura)",
      "Diagnostic tap: 18–20 gauge thoracentesis needle or angiocath, 30–60 mL syringe, 3-way stopcock",
      "Therapeutic tap: pleural drainage kit with catheter-over-needle, drainage tubing, large collection bottles (1–1.5 L)",
      "Specimen tubes: (1) red top (LDH, protein, glucose, cholesterol — Light's criteria), (2) cell count (EDTA), (3) culture bottles (bacterial, fungal, AFB), (4) pH (arterial blood gas syringe for pH measurement — critical for empyema diagnosis), (5) cytology (50–60 mL in cytology container — largest volume maximizes yield)",
      "CXR or ultrasound post-procedure to rule out pneumothorax"
    ],
    steps: [
      "Confirm effusion with ultrasound: measure depth of fluid, identify diaphragm and underlying organ (liver, spleen). Best site: lateral or posterior thorax, one interspace below the fluid-air interface identified by percussion and ultrasound.",
      "Position patient SEATED leaning forward onto a bedside table, arms resting on table at shoulder height (widens intercostal spaces). If unable to sit, lateral decubitus with affected side down (fluid pools laterally).",
      "Mark site under ultrasound guidance: insert needle JUST ABOVE the rib below your target interspace (neurovascular bundle runs in the costal groove on the inferior border of the rib above — entering too close to the rib above risks NVB injury)",
      "Prep and drape sterile field; infiltrate 1% lidocaine from skin through subcutaneous tissue, rib periosteum, and parietal pleura (most pain-sensitive layer — liberal anesthetic here)",
      "DIAGNOSTIC TAP: Insert 18–20 gauge needle with continuous aspiration; feel for 'pop' as needle enters pleural space and fluid returns; clamp when specimen obtained; fill all specimen tubes",
      "THERAPEUTIC TAP: After anesthesia, insert catheter-over-needle with syringe aspiration; when fluid returns, advance catheter and withdraw needle; connect 3-way stopcock and drainage tubing to collection bottles; drain to maximum 1–1.5 L per session (risk of re-expansion pulmonary edema with >1.5 L drainage — stop if patient develops cough, chest tightness, or pleuritic pain)",
      "Replace stylet if needle system (not catheter); withdraw needle/catheter at end of expiration or during a Valsalva maneuver (prevents air entry); apply pressure",
      "Post-procedure: CXR (upright expiratory preferred — most sensitive for pneumothorax) OR ultrasound (absence of lung sliding = pneumothorax)"
    ],
    lights_criteria: {
      description: "Exudate if ANY ONE criterion met (sensitivity 98%, specificity 77%)",
      criteria: [
        "Pleural fluid protein / serum protein > 0.5",
        "Pleural fluid LDH / serum LDH > 0.6",
        "Pleural fluid LDH > 2/3 upper limit normal serum LDH"
      ],
      transudates: "CHF (most common), cirrhosis, nephrotic syndrome, hypoalbuminemia",
      exudates: "Parapneumonic (most common), malignancy, PE, TB, pancreatitis, rheumatoid arthritis, lupus"
    },
    documentation: "Document: indication, ultrasound guidance used, site, patient position, volume drained, appearance of fluid (serous/straw/serosanguinous/purulent/chylous), specimens sent (list all tubes and tests), complications, post-procedure imaging (CXR/ultrasound results — pneumothorax present or absent)",
    complications: [
      "Pneumothorax (most common: 1–2% with ultrasound guidance vs. 10% without). Symptomatic PTX: chest tube placement. Small asymptomatic PTX: supplemental O2 and observation.",
      "Re-expansion pulmonary edema (REPE): rare (<1%) with rapid drainage of large chronic effusion >1.5 L. Presents with acute dyspnea, frothy sputum, hypoxia during drainage. Stop drainage immediately; supplemental O2.",
      "Hemothorax from intercostal artery laceration: always insert needle ABOVE rib (not below upper rib)",
      "Vasovagal reaction: common — bradycardia, hypotension during procedure. Have patient lie down; atropine 0.5 mg IV if severe bradycardia with hemodynamic compromise."
    ],
    boardPearl: "Empyema: pleural fluid pH <7.2 + glucose <60 + positive Gram stain/culture = chest tube required (even if not yet purulent — these criteria predict failure of antibiotics alone). Tube thoracostomy + fibrinolytics (tPA + DNase) if complex/loculated parapneumonic effusion. VATS if fails medical management."
  },
  {
    id: "im-proc-004",
    name: "Central Venous Catheter Placement",
    rotation: "internal-medicine",
    category: "Vascular Access",
    indication: "Need for medications requiring central administration (vasopressors, concentrated potassium, TPN, chemotherapy, vesicants), hemodialysis access (temporary — use non-tunneled HD catheter), measurement of central venous pressure (CVP), large-bore IV access when peripheral access unavailable, transvenous pacing lead placement",
    contraindications: [
      "Ipsilateral thrombosis of target vein",
      "Overlying skin infection at planned site",
      "INR >3 or PLT <20,000 (relative — ultrasound guidance and experienced operator mitigate risk)",
      "Uncooperative patient without sedation",
      "Anatomic distortion (prior surgery, radiation, tumor at site)",
      "Internal jugular: elevated ICP (head-of-bed cannot be lowered for procedure)",
      "Subclavian: coagulopathy (non-compressible site — IJ or femoral preferred in coagulopathy)"
    ],
    equipment: [
      "Ultrasound machine with linear probe (high-frequency) — real-time guidance is standard of care (reduces complication rates 50%)",
      "Sterile gown, gloves, mask, cap, sterile drape (full barrier precautions — reduces CLABSI)",
      "Chlorhexidine gluconate 2% in 70% isopropyl alcohol for skin antisepsis",
      "Triple-lumen CVC kit: introducer needle (18-gauge), guidewire (J-tip), dilator, triple-lumen catheter (7F, 15–20 cm for IJ/subclavian; 25 cm for femoral)",
      "1% lidocaine, 25-gauge and 22-gauge needles for anesthesia",
      "Syringe (5–10 mL), heparinized saline flushes, sterile occlusive dressing (Tegaderm CHG preferred for CLABSI prevention)"
    ],
    sites: {
      internal_jugular: "Right IJ preferred (avoids thoracic duct, straighter path to SVC). Ultrasound-guided anterior approach: IJ is lateral to common carotid artery. Complication risk: carotid artery puncture, pneumothorax (rare), infection.",
      subclavian: "Landmark or ultrasound-guided. Highest rate of pneumothorax (1–2%) — avoid in coagulopathic patients. Lowest infection rate of all CVC sites. Non-compressible — avoid if INR >2.",
      femoral: "Easiest to place, highest infection rate, DVT risk. Used in emergencies or when upper body sites contraindicated. Patients must remain recumbent."
    },
    steps: [
      "Obtain informed consent; explain risks (arterial puncture, pneumothorax, bleeding, infection, air embolism)",
      "Position patient: IJ — Trendelenburg 15° (distends vein, reduces air embolism risk), head turned contralateral. Subclavian — supine, roll under shoulder blades, head turned contralateral. Femoral — supine, slight external rotation of ipsilateral hip.",
      "Full sterile barrier: gown, sterile gloves, mask, cap. Prep entire neck/chest/groin area with chlorhexidine; allow to dry 30 seconds (critical for antiseptic effect).",
      "Identify vein with ultrasound: use real-time dynamic guidance (not static marking only). IJ: vein is lateral to carotid artery, is compressible (artery is not), and has lower echogenicity.",
      "Infiltrate local anesthetic along needle path with 22-gauge needle",
      "SELDINGER TECHNIQUE: (1) Insert introducer needle (18-gauge) on syringe with continuous aspiration in direction of vein. Confirm venous blood (dark, non-pulsatile — if bright red and pulsatile = arterial; remove, apply pressure 10 min). (2) Remove syringe, cover hub with thumb (prevent air embolism), thread J-tip guidewire through needle during patient breath-hold or expiration (15–20 cm into vein). (3) Remove needle over guidewire, maintaining wire control AT ALL TIMES. (4) Nick skin with #11 scalpel blade. (5) Thread dilator over wire; advance with twisting motion to dilate subcutaneous tissue; remove dilator. (6) Thread CVC over wire; advance to 14–16 cm (IJ/subclavian, right side) or 18–20 cm (left side or femoral). (7) Remove guidewire; aspirate blood from each lumen to confirm intravascular placement; flush each lumen with saline. (8) Secure with suture; apply sterile CHG-impregnated dressing.",
      "Confirm placement: CXR — catheter tip should be in distal SVC/cavoatrial junction (carina level). Rule out pneumothorax on post-procedure CXR (mandatory for IJ and subclavian)."
    ],
    documentation: "Document: indication, site selected (right IJ, subclavian, etc.), ultrasound guidance used (real-time vs. static marking), Seldinger technique used, catheter brand and length, number of venipuncture attempts, difficulty encountered, arterial puncture (yes/no), guidewire confirmed in vein before dilation, catheter tip position on CXR (describe level), all lumens patent and blood-aspirating, sterile full barrier precautions confirmed, dressing type applied",
    complications: [
      "Arterial puncture (most common): carotid (IJ approach) or subclavian artery. If small needle: apply pressure 10 min. If dilator/catheter placed in artery: do NOT remove — leave in situ, call vascular surgery (removing large catheter from artery causes uncontrolled hemorrhage).",
      "Pneumothorax: 1–2% subclavian; <0.5% IJ with ultrasound guidance. Post-procedure CXR mandatory. Treat if symptomatic or >2 cm from apex.",
      "Air embolism: Trendelenburg position, aspiration at hub during wire insertion prevents. Treatment: left lateral decubitus + Trendelenburg (keeps air in RV away from outflow), 100% O2, aspiration through CVC.",
      "Central line-associated bloodstream infection (CLABSI): prevented by full sterile barrier, chlorhexidine skin prep, CHG-impregnated dressings, and daily necessity assessment (remove CVC as soon as no longer needed).",
      "Cardiac arrhythmia from guidewire irritation: withdraw guidewire to <20 cm (should resolve)"
    ],
    boardPearl: "CXR tip position for CVCs: distal SVC (at or just above carina). Too proximal (in subclavian/innominate) = inaccurate CVP, risk of thrombosis. Too distal (right atrium/RV) = arrhythmia, myocardial perforation risk. Right-sided IJ/subclavian CVC should be advanced 14–16 cm; left-sided 18–20 cm."
  }
];
