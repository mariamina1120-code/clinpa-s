import type { Procedure } from "@/types";

export const emergencyMedicineProcedures: Procedure[] = [
  {
    id: "em-proc-rsi",
    name: "Rapid Sequence Intubation (RSI)",
    rotationSlug: "emergency-medicine",
    overview:
      "RSI is the simultaneous administration of a sedative/induction agent and a neuromuscular blocking agent to facilitate emergent endotracheal intubation while minimizing aspiration risk. It is the standard of care for most emergency intubations.",
    indications: [
      "Airway protection: GCS ≤ 8, absent gag reflex, inability to protect airway",
      "Respiratory failure: hypoxia or hypercapnia refractory to non-invasive methods",
      "Hemodynamic instability requiring airway control (e.g., anaphylaxis, severe asthma)",
      "Anticipated clinical deterioration (combative patient, angioedema progression)",
      "Procedural need: prolonged CT, high aspiration risk",
    ],
    contraindications: [
      "Anticipated difficult airway without backup plan (relative — prepare rescue airway first)",
      "Known succinylcholine contraindication without rocuronium available",
      "Patient with intact gag reflex and adequate oxygenation who can be managed non-invasively",
    ],
    equipment: [
      "SOAP-ME mnemonic: Suction (Yankauer at bedside, ON), Oxygen (BVM, NRB mask, HFNC), Airway (ETT 7.0–8.0 mm + backup sizes, 10 mL syringe, stylet, tape/holder), Position (ear-to-sternal-notch — 'sniffing position'), Monitoring (continuous SpO2, capnography, cardiac monitor, BP cuff)",
      "Medications: induction agent + NMB agent + pre-treatment drugs drawn up and labeled",
      "Video laryngoscope (primary in most EDs) + direct laryngoscope (backup)",
      "Bougie (elastic gum bougie) immediately accessible",
      "Surgical airway kit (cricothyrotomy) at bedside — NEVER start RSI without rescue airway plan",
      "End-tidal CO2 (ETCO2) colorimetric detector or waveform capnography",
      "Post-intubation sedation and analgesia drawn up before intubation",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Preparation (SOAP-ME)",
        description:
          "Complete the SOAP-ME checklist. Pre-oxygenate with NRB mask at 15 L/min × 3–5 min OR high-flow nasal cannula (HFNC) at 15–70 L/min (apneic oxygenation). Use positioning: place patient supine with ear-to-sternal-notch alignment (obese patients: ramped position with blankets under shoulders/head). Assess for difficult airway using LEMON: Look (external anatomy), Evaluate (3-3-2 rule — 3 fingers mouth opening, 3 fingers hyomental distance, 2 fingers thyromental), Mallampati (class III/IV = harder), Obstruction (stridor, abscess, epiglottitis), Neck mobility.",
      },
      {
        stepNumber: 2,
        title: "Pre-treatment (optional, situational)",
        description:
          "Lidocaine 1.5 mg/kg IV: may reduce ICP spike in head injury (controversial). Fentanyl 3 mcg/kg IV: blunts sympathetic response (cardiac patients with HTN). Atropine 0.02 mg/kg IV: for children < 1 year old to prevent bradycardia from succinylcholine. Defasciculating dose of rocuronium: largely abandoned.",
      },
      {
        stepNumber: 3,
        title: "Induction Agent Selection",
        description:
          "Ketamine 1.5–2 mg/kg IV: FIRST CHOICE in hemodynamically unstable patients, active bronchospasm, asthma/COPD. Maintains BP via sympathomimetic effect. Bronchodilator. Emergence reactions in adults — co-administer midazolam 0.02 mg/kg. Note: historical concern for ICP elevation is NOT supported by current evidence. Etomidate 0.3 mg/kg IV: FIRST CHOICE for most stable patients, hemodynamically neutral, minimal cardiovascular depression. AVOID in septic shock (single dose causes adrenal suppression for 12–24h — clinical significance debated). Propofol 1.5–2 mg/kg IV: use only in hemodynamically stable patients. Significant hypotension risk. Good for known difficult airway patients when awake intubation preferred. Midazolam 0.1–0.3 mg/kg IV: LAST RESORT — slow onset, profound hypotension, not ideal for RSI.",
      },
      {
        stepNumber: 4,
        title: "Neuromuscular Blocking Agent (NMB)",
        description:
          "Succinylcholine 1.5 mg/kg IV (max 200 mg): depolarizing NMB. Onset 45–60 sec, duration 10–12 min. CONTRAINDICATED: burns > 72h, crush injury > 48h, denervation injury/UMN/LMN lesion > 72h, hyperkalemia, history of malignant hyperthermia, personal or family history of pseudocholinesterase deficiency, myopathies (muscular dystrophy). Rocuronium 1.2 mg/kg IV: non-depolarizing NMB. Onset 60–75 sec at high dose, duration 45–70 min. REVERSAL: sugammadex 16 mg/kg IV for emergency reversal (< 3 min). Preferred when succinylcholine is contraindicated. Vecuronium 0.1–0.15 mg/kg IV: duration 45–60 min. No reversal agent in acute setting.",
      },
      {
        stepNumber: 5,
        title: "Laryngoscopy and Intubation",
        description:
          "Video laryngoscopy (primary): GlideScope or C-MAC. Indirect view — use stylet shaped to blade angle. Insert blade in midline; identify epiglottis and advance into vallecula. Direct laryngoscopy (backup): insert blade right of tongue, sweep tongue left, visualize cords. Both techniques: pass ETT through cords under direct visualization. Inflate cuff with 5–10 mL air. Target cuff pressure 20–30 cmH2O (use manometer). Tape at 21–23 cm at lips for women, 22–24 cm for men. LIMIT attempt to < 30 seconds. If not successful — ventilate with BVM between attempts (SpO2 drops rapidly without preoxygenation reserves).",
      },
      {
        stepNumber: 6,
        title: "Confirmation of Tube Placement",
        description:
          "Waveform capnography: GOLD STANDARD. Continuous ETCO2 waveform confirms tracheal placement. Colorimetric CO2 detector: color change yellow = CO2 present = tracheal placement (purple = esophageal, but can be yellow briefly if patient has carbonated beverage). Auscultation: bilateral breath sounds + absent gastric gurgling. Chest rise: bilateral symmetric. Chest X-ray: ETT tip should be 3–5 cm above carina (approximately at T4 level). NEVER rely on auscultation alone. If any doubt → remove tube and reoxygenate.",
      },
      {
        stepNumber: 7,
        title: "Post-Intubation Management",
        description:
          "Initiate lung-protective ventilation: Vt 6–8 mL/kg IBW (ideal body weight), PEEP 5–8 cmH2O, FiO2 titrate to SpO2 92–96%, RR 14–18/min. Sedation: propofol infusion 5–50 mcg/kg/min OR midazolam 0.02–0.1 mg/kg/h. Analgesia: fentanyl infusion 25–100 mcg/h (analgesia-first protocol). NMB infusion if needed: vecuronium or cisatracurium. Check ABG 20–30 min after intubation. Post-intubation hypotension: give fluid bolus, check ETCO2 (auto-PEEP?), check for pneumothorax, rule out esophageal intubation.",
      },
      {
        stepNumber: 8,
        title: "Failed Airway / Rescue Airway",
        description:
          "CANNOT INTUBATE / CAN OXYGENATE: Supraglottic airway (SGA) — LMA or King LT. Nasopharyngeal airway + jaw thrust + HFNC. Awake fiberoptic intubation. CANNOT INTUBATE / CANNOT OXYGENATE (CICO): Surgical cricothyrotomy — immediate. Scalpel-bougie technique: palpate thyroid cartilage, identify cricothyroid membrane (CTM), horizontal stab incision through skin and CTM, insert bougie through incision, railroad 6.0 cuffed ETT over bougie, inflate cuff, confirm with ETCO2. Needle cricothyrotomy: 14g angiocath through CTM + bag ventilation (temporizing only, ≤ 30–45 min). BOUGIE: Use early — insert into trachea blindly or with partial view, feel for tracheal rings (tactile confirmation), do NOT force — railroad ETT over bougie.",
      },
    ],
    clinicalPearls: [
      "SOAP-ME is not optional — rushing setup causes avoidable errors",
      "Pre-oxygenate for 3–5 minutes with NRB; apneic oxygenation via HFNC extends the safe apnea window",
      "Ketamine is the induction agent of choice in hemodynamically unstable patients AND asthma/COPD",
      "Succinylcholine is contraindicated in burns > 72h, crush injury > 48h, chronic denervation — use rocuronium 1.2 mg/kg instead",
      "Waveform capnography is the gold standard for ETT confirmation — use it every time",
      "Post-intubation hypotension triad: too much PEEP (auto-PEEP in asthma), tension pneumothorax, unrecognized esophageal intubation",
      "CICO (can't intubate, can't oxygenate) = scalpel-bougie surgical cricothyrotomy — drill this technique",
      "Sugammadex 16 mg/kg reverses rocuronium within 3 minutes — keep it immediately available when rocuronium used",
      "Delayed sequence intubation (DSI): ketamine 1 mg/kg dissociative dose → preoxygenation → NMB → intubate (for combative hypoxic patients who won't tolerate preoxygenation)",
    ],
    boardRecallTips: [
      "RSI drug of choice in HEMODYNAMIC INSTABILITY → ketamine (sympathomimetic, maintains BP)",
      "RSI drug of choice in ASTHMA/BRONCHOSPASM → ketamine (bronchodilator)",
      "RSI drug of choice for MOST PATIENTS (stable) → etomidate (hemodynamically neutral)",
      "AVOID etomidate in septic shock → adrenal suppression (use ketamine instead)",
      "SUCCINYLCHOLINE CONTRAINDICATED: burns > 72h, crush > 48h, SCI/denervation > 72h, hyperkalemia, malignant hyperthermia hx",
      "ROCURONIUM reversal = sugammadex 16 mg/kg IV (< 3 min reversal)",
      "CICO emergency = scalpel-bougie cricothyrotomy",
      "FAILED intubation + can oxygenate = LMA or supraglottic airway",
      "ETT confirmation GOLD STANDARD = waveform capnography",
    ],
  },
  {
    id: "em-proc-chest-decompression",
    name: "Needle Decompression & Chest Tube Thoracostomy",
    rotationSlug: "emergency-medicine",
    overview:
      "Needle decompression is an immediate life-saving procedure for tension pneumothorax. Chest tube thoracostomy (tube thoracostomy) provides definitive pleural decompression and drainage for pneumothorax, hemothorax, hemopneumothorax, and pleural effusions. Both are core emergency medicine procedures.",
    indications: [
      "Needle decompression: tension pneumothorax (clinical diagnosis — do NOT wait for imaging)",
      "Tension PTX signs: tracheal deviation (LATE), absent breath sounds unilaterally, severe respiratory distress, hypotension, JVD, tachycardia",
      "Chest tube: simple pneumothorax > 20%, hemothorax, hemopneumothorax, recurrent pleural effusion, empyema",
      "Ventilated patients: any pneumothorax (positive pressure worsens rapidly)",
      "Traumatic arrest with suspected tension PTX: bilateral finger thoracostomies in lieu of needle decompression",
    ],
    contraindications: [
      "No absolute contraindications for needle decompression in suspected tension PTX (clinical diagnosis — treat empirically)",
      "Coagulopathy: relative contraindication for chest tube (correct INR if possible, but don't delay for life-threatening hemothorax)",
      "Skin infection at insertion site: choose alternate site",
    ],
    equipment: [
      "Needle decompression: 14g or 16g angiocatheter (3.25 inches/8 cm for obese patients), povidone-iodine, gloves",
      "Chest tube kit: 28–36 Fr thoracostomy tube (large bore for hemothorax, 20–24 Fr for pneumothorax only), curved Kelly clamps × 2, scalpel #10 blade, suture (0-silk or 0-prolene), Vaseline gauze, chest tube drainage system (Pleur-evac), suction",
      "Sterile gloves, drape, local anesthesia (1% lidocaine with epi + 10 mL syringe)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Identify Tension PTX — Clinical Diagnosis",
        description:
          "Tension PTX is a CLINICAL diagnosis. Do NOT delay treatment for imaging. Classic presentation: unilateral absent breath sounds, tracheal deviation (late and unreliable sign), JVD, hypotension, severe respiratory distress, oxygen desaturation refractory to supplemental O2. In ventilated patients: sudden spike in peak airway pressures, hemodynamic collapse, SpO2 drop — use DOPE mnemonic: Displacement (ETT out of trachea), Obstruction (mucus plug), Pneumothorax (tension), Equipment failure.",
      },
      {
        stepNumber: 2,
        title: "Needle Decompression — 2nd ICS MCL Technique",
        description:
          "Position: supine. Identify 2nd intercostal space at midclavicular line (MCL) on affected side. Prep with antiseptic. Insert 14g angiocatheter perpendicular to chest wall, just SUPERIOR to the 3rd rib (to avoid neurovascular bundle which runs under each rib = inferior margin). Advance until resistance decreases — a rush of air confirms tension PTX. Remove needle, leave catheter in place. Assess for clinical improvement (BP, SpO2, breath sounds). Proceed immediately to chest tube.",
      },
      {
        stepNumber: 3,
        title: "Needle Decompression — Alternate Site (4th/5th ICS AAL)",
        description:
          "The 4th or 5th intercostal space at the anterior axillary line (AAL) is increasingly preferred (TCCC guidelines) because: longer path to pleural space is less of a problem here (less chest wall thickness), easier to access in obese patients, avoids subclavian vessels. Technique: arm abducted, identify 4th-5th ICS, insert 14g angiocatheter over superior margin of lower rib, same technique as above.",
      },
      {
        stepNumber: 4,
        title: "Chest Tube Insertion — Triangle of Safety",
        description:
          "Triangle of Safety boundaries: anterior border of latissimus dorsi (posterior), lateral border of pectoralis major (anterior), apex of axilla (superior), line at nipple level (inferior) — typically 4th or 5th ICS at anterior axillary line. Position patient: supine with ipsilateral arm abducted/raised (hand behind head). Prep with chlorhexidine/betadine, drape. Anesthesia: generous infiltration of skin, subcutaneous tissue, periosteum of rib, and pleura with 1% lidocaine with epi (20–30 mL total).",
      },
      {
        stepNumber: 5,
        title: "Chest Tube — Incision and Blunt Dissection",
        description:
          "Make a 3–4 cm transverse incision over the 5th ICS (one interspace BELOW target space to create subcutaneous tunnel). Use Kelly clamp to bluntly dissect through subcutaneous tissue and external/internal intercostal muscles just ABOVE the 6th rib (superior margin to avoid neurovascular bundle). When resistance gives, use controlled force to pop through the parietal pleura — a rush of air or blood confirms entry. Widen the tract with finger (gloved finger sweep) to confirm intrapleural position and clear the pleural space of clots.",
      },
      {
        stepNumber: 6,
        title: "Chest Tube — Tube Insertion and Positioning",
        description:
          "Clamp the proximal end of the chest tube with Kelly. Insert tube using Kelly or finger guidance — aim POSTERIORLY and SUPERIORLY for pneumothorax, POSTERIORLY and INFERIORLY for hemothorax/effusion. Advance until all drainage holes are within the chest cavity (last hole typically 2–4 cm past the skin entry). Connect tube to Pleur-evac drainage system. Open water seal. Apply suction (-20 cmH2O) if needed.",
      },
      {
        stepNumber: 7,
        title: "Securing and Confirmation",
        description:
          "Secure tube with 0-silk or 0-prolene: horizontal mattress suture around tube + tie with multiple throws. Apply Vaseline gauze (petroleum gauze) around tube for occlusive seal. Secure with adhesive dressing and cloth tape. Connect to water seal drainage system. Confirm placement with CXR: tube tip should be at apex of hemithorax for PTX, or dependent position for hemothorax. Assess for drainage output: document initial output and ongoing drainage.",
      },
      {
        stepNumber: 8,
        title: "Drainage Interpretation and Massive Hemothorax",
        description:
          "Pneumothorax resolution: repeat CXR in 4–6h, assess for lung re-expansion. Hemothorax drainage: MASSIVE HEMOTHORAX defined as initial output > 1,000–1,500 mL OR ongoing drainage > 200 mL/h × 2–4 hours → emergent operative management (thoracotomy). Clotted hemothorax: consider tPA instillation (4 mg in 50 mL NS × 3 doses) if not draining. Empyema: may require VATS decortication. Air leak: persistent bubbling in water seal — check connections first, then consider bronchoscopy.",
      },
    ],
    clinicalPearls: [
      "Tension PTX is a CLINICAL diagnosis — treat immediately, do NOT get CXR first",
      "Always go SUPERIOR to the rib to avoid the neurovascular bundle (intercostal nerve, artery, vein run on the inferior surface of each rib)",
      "The 4th-5th ICS AAL site for needle decompression is increasingly favored in trauma (TCCC/ATLS) and is less likely to fail in obese patients",
      "In ventilated patients with sudden desaturation and hemodynamic collapse → DOPE: Displacement, Obstruction, Pneumothorax, Equipment failure",
      "Bilateral finger thoracostomies are performed in traumatic arrest before attempting chest compressions (bilateral tension PTX can cause PEA arrest)",
      "Massive hemothorax (> 1,500 mL initial output or > 200 mL/h × 2-4h) → emergent thoracotomy",
      "Resuscitative thoracotomy: penetrating trauma with witnessed arrest or signs of life within 15 min → open chest, release tamponade, internal cardiac massage",
    ],
    boardRecallTips: [
      "Tension PTX = clinical diagnosis → NEEDLE DECOMPRESSION FIRST, then chest tube",
      "Needle decompression site: 2nd ICS MCL OR 4th-5th ICS AAL (superior to rib)",
      "Chest tube site: Triangle of Safety — 4th-5th ICS at AAL",
      "Neurovascular bundle runs on INFERIOR margin of rib → always insert SUPERIOR to lower rib",
      "Massive hemothorax: > 1,500 mL initial OR > 200 mL/h ongoing → thoracotomy",
      "DOPE mnemonic for ventilated patient deterioration: Displacement, Obstruction, Pneumothorax, Equipment",
      "Traumatic arrest → bilateral finger thoracostomies (NOT needle decompression in arrest)",
    ],
  },
  {
    id: "em-proc-lp-emergency",
    name: "Emergency Lumbar Puncture (SAH & Meningitis)",
    rotationSlug: "emergency-medicine",
    overview:
      "Lumbar puncture (LP) is performed emergently to diagnose subarachnoid hemorrhage (when CT head is negative) and bacterial meningitis (when safe to perform). CSF analysis including opening pressure, cell count, protein, glucose, culture, Gram stain, and xanthochromia is essential for diagnosis.",
    indications: [
      "Thunderclap headache with negative CT head (to rule out SAH — Ottawa SAH Rule positive)",
      "Suspected bacterial meningitis — do NOT delay antibiotics if LP cannot be performed promptly",
      "Fever + headache + nuchal rigidity (Kernig's/Brudzinski's signs)",
      "New-onset seizure with fever and altered mental status",
      "Encephalitis workup (viral, autoimmune)",
      "Idiopathic intracranial hypertension (IIH) — diagnostic and therapeutic",
    ],
    contraindications: [
      "ABSOLUTE: Skin or soft tissue infection at LP site (introduce bacteria into CSF)",
      "ABSOLUTE: Evidence of obstructive hydrocephalus or mass lesion with midline shift on CT (herniation risk)",
      "RELATIVE: Coagulopathy — INR > 1.5 or platelets < 50,000 (correct first if possible)",
      "RELATIVE: Increased ICP without CT imaging (get CT first unless clinical deterioration is imminent)",
      "CT HEAD BEFORE LP if: new focal neurological deficits, papilledema, altered mental status, immunocompromised, seizure within 1 week, age > 60",
      "NEVER delay antibiotics in meningitis to wait for LP or CT — draw blood cultures and give ceftriaxone first",
    ],
    equipment: [
      "LP tray: 20g or 22g spinal needle (with stylet), manometer with 3-way stopcock, sterile collection tubes labeled 1–4",
      "Sterile prep: betadine or chlorhexidine, sterile drape, sterile gloves",
      "1% lidocaine (10 mL) with 25g needle for skin and 22g for deeper anesthesia",
      "Pillow between knees for lateral decubitus position, or stool for seated position",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "CT Head Before LP — Decision",
        description:
          "CT head WITHOUT contrast should be obtained BEFORE LP if patient has: papilledema, focal neuro deficits, altered consciousness, immunocompromised state, known CNS malignancy, or history of seizure within 1 week. IN BACTERIAL MENINGITIS: Draw blood cultures → administer antibiotics (ceftriaxone 2g IV + vancomycin 25-30 mg/kg IV + dexamethasone 0.15 mg/kg IV) → THEN get CT → THEN LP. Do NOT delay antibiotics for CT or LP — mortality increases with each hour of delay.",
      },
      {
        stepNumber: 2,
        title: "Patient Positioning",
        description:
          "Lateral decubitus (fetal position): patient lies on side with knees drawn to chest, chin tucked to chest — maximizes intervertebral space opening. Use pillow between knees. THIS POSITION ALLOWS ACCURATE OPENING PRESSURE MEASUREMENT. Seated position (leaning forward over bedside table): easier needle placement (larger target), but cannot accurately measure opening pressure — use only when lateral decubitus is not feasible. LANDMARK: L3-L4 or L4-L5 interspace (draw line between iliac crests = Tuffier's line = L4 spinous process).",
      },
      {
        stepNumber: 3,
        title: "Sterile Preparation and Anesthesia",
        description:
          "Prep skin with betadine or chlorhexidine in circular motion, allow to dry 2 minutes. Place sterile drape with fenestration over target site. Identify target interspace (L3-L4 or L4-L5) by palpating spinous processes. Local anesthesia: raise skin wheal with 25g needle + 1% lidocaine. Insert 22g needle along intended needle path and infiltrate deeper tissues (1–2 mL every cm, aspirate before injecting). Allow 2 minutes for anesthesia to take effect.",
      },
      {
        stepNumber: 4,
        title: "Needle Insertion and CSF Collection",
        description:
          "Insert 20g or 22g spinal needle (with stylet in place) in midline, angled slightly CEPHALAD (10–15 degrees toward umbilicus). Advance slowly, maintaining needle in sagittal plane. A 'pop' or change in resistance indicates penetration of ligamentum flavum, then dura. Remove stylet and check for CSF flow. If no flow: replace stylet, advance 1–2 mm and check again. Rotate needle 90 degrees if flow is sluggish. NEVER advance without stylet (to prevent epidermoid tumor seeding). If bone encountered: withdraw to subcutaneous tissue, re-angle.",
      },
      {
        stepNumber: 5,
        title: "Opening Pressure Measurement",
        description:
          "Attach manometer with 3-way stopcock BEFORE collecting CSF. Allow CSF to rise in manometer until stable. NORMAL opening pressure: 7–18 cmH2O (or 70–180 mmH2O) in lateral decubitus position. ELEVATED (> 20 cmH2O): Idiopathic intracranial hypertension (IIH), meningitis, SAH, cerebral venous thrombosis. LOW (< 7 cmH2O): overdrainage, spontaneous intracranial hypotension, CSF leak. Document pressure, then proceed to collection.",
      },
      {
        stepNumber: 6,
        title: "CSF Sample Collection — Tubes 1–4",
        description:
          "Collect 1–2 mL CSF in each of 4 numbered tubes: Tube 1: send for cell count and differential (to compare with tube 4 for traumatic tap). Tube 2: Gram stain, culture, sensitivity, antigen testing. Tube 3: protein and glucose (also send serum glucose simultaneously — CSF:serum glucose ratio normally 0.6). Tube 4: cell count (compare to tube 1 — in traumatic tap, RBC decreases tube 1→4; in true SAH, count remains stable), xanthochromia (GOLD STANDARD for SAH when > 12h post-onset). XANTHOCHROMIA: yellow discoloration of CSF due to oxyhemoglobin and bilirubin — only seen ≥ 12 hours after SAH onset. Spectrophotometry is more sensitive than visual inspection.",
      },
      {
        stepNumber: 7,
        title: "CSF Interpretation — SAH vs. Traumatic Tap",
        description:
          "Traumatic Tap: RBC decreases significantly from tube 1 to tube 4, no xanthochromia, no crenated RBCs. True SAH: RBC count UNIFORM across all tubes (does not clear), xanthochromia present (> 12h after onset), elevated opening pressure. RBC correction for WBC: subtract 1 WBC per 700 RBC (traumatic tap). NORMAL CSF: Crystal clear, colorless, WBC < 5 (mononuclear), protein 15–45 mg/dL, glucose 50–80 mg/dL (ratio to serum 0.6), no RBCs.",
      },
      {
        stepNumber: 8,
        title: "CSF Interpretation — Meningitis Patterns",
        description:
          "Bacterial meningitis: turbid/cloudy CSF, WBC > 1000 (predominantly PMNs/neutrophils), protein > 200 mg/dL (often > 100), glucose < 40 mg/dL (ratio < 0.3), Gram stain 60–90% sensitive, culture 80% sensitive. Viral meningitis: clear CSF, WBC 10–500 (predominantly lymphocytes), protein slightly elevated (< 100 mg/dL), glucose normal. TB/fungal meningitis: clear or slightly turbid, lymphocytic pleocytosis, very low glucose, elevated protein, India ink stain (Cryptococcus), AFB smear. Post-LP headache: occurs in 10–30%, positional (worse upright, better supine), treat with analgesics, caffeine, consider blood patch if severe/prolonged.",
      },
    ],
    clinicalPearls: [
      "NEVER delay antibiotics in suspected bacterial meningitis to wait for LP — blood cultures + ceftriaxone + vancomycin + dexamethasone FIRST",
      "Ottawa SAH Rule: LP required if CT negative and any 1 of: age ≥ 40, neck pain/stiffness, witnessed loss of consciousness, onset with exertion, thunderclap onset, limited neck flexion on exam",
      "Xanthochromia is the gold standard for SAH diagnosis on LP — only reliable ≥ 12 hours after symptom onset (time matters!)",
      "Traumatic tap vs. SAH: RBCs clear from tube 1 to tube 4 in traumatic tap; remain uniform in true SAH",
      "In IIH: remove CSF until pressure ≤ 20 cmH2O (typically 20–30 mL) — this is both diagnostic and therapeutic",
      "Kernig's sign: inability to extend knee when hip is flexed 90° (passive hamstring spasm due to meningeal irritation)",
      "Brudzinski's sign: passive neck flexion causes involuntary knee and hip flexion",
      "Use L3-L4 or L4-L5 interspace — spinal cord ends at L1-L2 (conus medullaris); LP below this level is safe",
    ],
    boardRecallTips: [
      "Thunderclap headache + negative CT = LP required (CT cannot rule out SAH in 100% of cases, esp. < 6h window)",
      "Xanthochromia = yellow CSF = SAH — only reliable ≥ 12h after onset",
      "Meningitis empiric Rx = CEFTRIAXONE + VANCOMYCIN + DEXAMETHASONE → give BEFORE LP if delay anticipated",
      "CT before LP if: papilledema, focal deficits, altered MS, immunocompromised, recent seizure",
      "Bacterial meningitis CSF: cloudy, WBC > 1000 PMNs, protein > 200, glucose < 40",
      "Viral meningitis CSF: clear, lymphocytosis, normal glucose, mild protein elevation",
      "Traumatic tap: RBCs decrease tube 1→4; SAH: RBCs stable all tubes",
      "LP needle always SUPERIOR to lower rib (same as chest tube) — wait, LP: insert cephalad in midline between spinous processes",
    ],
  },
  {
    id: "em-proc-cardioversion",
    name: "Defibrillation & Synchronized Cardioversion",
    rotationSlug: "emergency-medicine",
    overview:
      "Electrical therapy for life-threatening cardiac arrhythmias. Defibrillation (unsynchronized) is used for pulseless rhythms (VF, pulseless VT). Synchronized cardioversion is used for unstable tachyarrhythmias with a pulse (SVT, atrial flutter, atrial fibrillation, stable VT). Understanding synchronization, energy selection, and pre-procedure checklist is critical.",
    indications: [
      "DEFIBRILLATION (UNSYNCHRONIZED): Ventricular fibrillation (VF) — pulseless, chaotic rhythm",
      "Pulseless ventricular tachycardia (pVT) — pulseless, wide complex regular rhythm",
      "SYNCHRONIZED CARDIOVERSION (with pulse present): Unstable SVT (hypotension, altered MS, chest pain, pulmonary edema) refractory to vagal maneuvers and adenosine",
      "Unstable atrial fibrillation or atrial flutter with hemodynamic compromise",
      "Unstable monomorphic VT with a pulse",
      "WPW + atrial fibrillation with rapid ventricular response (MUST use electrical cardioversion — pharmacologic AV nodal blockade contraindicated)",
    ],
    contraindications: [
      "Digitalis toxicity: DO NOT cardiovert (risk of inducing VF) — treat toxicity first, use digoxin-specific Fab antibodies",
      "Multifocal atrial tachycardia (MAT): cardioversion is ineffective and potentially harmful — treat underlying cause",
      "Sinus tachycardia: cardioversion inappropriate — treat underlying cause",
      "Known severe electrolyte abnormalities (correct hypokalemia/hypomagnesemia before elective cardioversion)",
      "Stable VT: may attempt pharmacologic cardioversion first (amiodarone, procainamide)",
    ],
    equipment: [
      "Defibrillator/cardioverter (biphasic preferred — lower energy, less myocardial damage)",
      "Pads (anterior-lateral or anterior-posterior placement) — preferred over paddles",
      "Crash cart with code drugs: epinephrine 1 mg, amiodarone 300 mg, lidocaine, atropine, adenosine",
      "BVM, suction, oxygen",
      "Sedation agents for synchronized cardioversion: procedural sedation (midazolam 0.05–0.1 mg/kg + fentanyl 1 mcg/kg, OR propofol 0.5–1 mg/kg, OR ketamine 0.5–1 mg/kg)",
      "Continuous cardiac monitoring, SpO2, blood pressure",
      "IV/IO access",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ACLS Assessment — Identify Rhythm and Stability",
        description:
          "PULSELESS ARREST → immediate unsynchronized defibrillation + CPR (see ACLS VF/pVT algorithm). PULSE PRESENT + UNSTABLE (any of: hypotension SBP < 90, active chest pain, altered LOC, acute pulmonary edema, signs of shock) → synchronized cardioversion. PULSE PRESENT + STABLE → attempt pharmacologic cardioversion; synchronized cardioversion is still an option but less urgent. IDENTIFY RHYTHM: VF (irregular chaotic) vs. VT (wide complex regular) vs. SVT (narrow complex rapid) vs. AF (irregularly irregular) vs. atrial flutter (sawtooth baseline, regular ventricular rate).",
      },
      {
        stepNumber: 2,
        title: "Defibrillation — VF/Pulseless VT Protocol",
        description:
          "CONFIRM: Pulseless + VF or pVT on monitor. BEGIN CPR immediately. DO NOT delay defibrillation to establish IV. Place pads: anterior-lateral (right clavicle + left lateral chest at V4-V6 level) OR anterior-posterior (right anterior chest + left scapula). Set to UNSYNCHRONIZED mode. Select energy: biphasic 200 J (or manufacturer-recommended 120–200 J), monophasic 360 J. CLEAR the patient (ensure no contact). Deliver shock. IMMEDIATELY resume CPR for 2 minutes (do not check pulse immediately after shock). After 2 min CPR: check rhythm and pulse. If shockable: deliver subsequent shocks at same or increased energy. Establish IV/IO, administer epinephrine 1 mg IV q3–5 min. If VF/pVT persists after 2nd shock: amiodarone 300 mg IV bolus (then 150 mg), or lidocaine 1–1.5 mg/kg IV.",
      },
      {
        stepNumber: 3,
        title: "Synchronized Cardioversion — Preparation and Sedation",
        description:
          "EXPLAIN to patient if conscious (it will feel like a punch to the chest). PROCEDURAL SEDATION: midazolam 0.05 mg/kg IV + fentanyl 1 mcg/kg IV (titrate to effect); OR propofol 0.5–1 mg/kg IV (use cautiously in hemodynamically unstable); OR ketamine 0.5–1 mg/kg IV (maintains BP — preferred in unstable). MONITOR: continuous SpO2, ETCO2 if available, BP every 1–2 min. Have BVM ready at bedside. Do NOT sedate patients in extremis (immediate cardioversion takes priority over sedation — life over comfort).",
      },
      {
        stepNumber: 4,
        title: "Synchronized Cardioversion — Energy Selection",
        description:
          "Press SYNC button — confirm R-wave markers appear on monitor (delay between button press and shock delivery is normal — it waits for R wave). Energy selection by rhythm: ATRIAL FLUTTER: start at 50–100 J biphasic (very responsive to low energy). NARROW-COMPLEX SVT (AVNRT, AVRT): start at 50–100 J biphasic. ATRIAL FIBRILLATION: start at 120–200 J biphasic (higher energy needed due to disorganized atrial activity). MONOMORPHIC VT (with pulse): start at 100 J biphasic. POLYMORPHIC VT: treat as VF — UNSYNCHRONIZED 200 J (cannot synchronize to irregular waveform).",
      },
      {
        stepNumber: 5,
        title: "Delivering Synchronized Shock",
        description:
          "CLEAR the patient (all personnel step away from bed and patient). Announce 'CLEAR' — visually confirm no one is touching patient or bed. Press and HOLD the shock button — the device will not fire immediately; it waits for the next R wave (0.5–1 second delay is normal). If device does not fire within 5 seconds: check sync mode is still active (re-press sync), check pad contact, ensure rhythm is detectable. After shock: immediately assess rhythm and patient response. If sinus rhythm restored: document, apply telemetry, obtain 12-lead ECG. If rhythm persists: increase energy and repeat; consider alternative drug therapy.",
      },
      {
        stepNumber: 6,
        title: "Post-Cardioversion Management",
        description:
          "Obtain 12-lead ECG after cardioversion. Monitor for: re-initiation of arrhythmia (high risk in AF/flutter → consider antiarrhythmic loading), post-cardioversion pauses or bradycardia (especially in sick sinus syndrome), hypotension from sedation (bolus fluids, vasopressors if needed), skin burns at pad site (rare with gel pads). Anti-thrombotic therapy for AF: if AF duration > 48h or unknown → risk of LA thrombus → prefer rate control + anticoagulation × 3 weeks before elective cardioversion OR TEE to rule out thrombus. Emergent cardioversion (hemodynamically unstable) takes priority over thromboembolism risk.",
      },
      {
        stepNumber: 7,
        title: "Special Scenario: WPW + Atrial Fibrillation",
        description:
          "WPW + AF with rapid pre-excitation (wide, bizarre, irregular rhythm = 'pre-excited AF'): LIFE-THREATENING — accessory pathway can conduct at extremely high rates → VF. AVOID: adenosine, digoxin, verapamil, diltiazem, beta-blockers (ALL block AV node but INCREASE conduction through accessory pathway → accelerate ventricular rate → VF). TREATMENT: If UNSTABLE → immediate synchronized cardioversion. If STABLE → procainamide 15–17 mg/kg IV over 30–60 min (slows accessory pathway conduction) OR ibutilide. DEFINITIVE: catheter ablation of accessory pathway.",
      },
      {
        stepNumber: 8,
        title: "Pacemaker/ICD Patients — Special Considerations",
        description:
          "Pacemaker/ICD patients: place pads at least 8 cm away from implanted device. Anterior-posterior pad placement preferred to reduce energy delivery through device. Check device function after cardioversion (interrogate). Transcutaneous pacing: for symptomatic bradycardia/heart block with hemodynamic compromise (Mobitz II, complete heart block, sinus arrest): rate 70 bpm, increase current (mA) until electrical capture (visible wide QRS after pacing spike) + mechanical capture (palpable pulse). Verify capture: check pulse and BP. Sedation for pacing is important — highly uncomfortable. Proceed to transvenous pacing for definitive management.",
      },
    ],
    clinicalPearls: [
      "VF and pulseless VT = UNSYNCHRONIZED defibrillation — deliver shock immediately, resume CPR, do not check pulse right after shock",
      "Polymorphic VT = treat like VF (unsynchronized) — cannot synchronize to irregular waveform",
      "Synchronized cardioversion waits for the R wave — holding the button and seeing a slight delay is NORMAL",
      "WPW + AF = electrical cardioversion if unstable; procainamide if stable — NEVER adenosine, verapamil, diltiazem, or digoxin",
      "Atrial flutter: lowest energy needed for cardioversion (50 J often sufficient)",
      "Digitalis toxicity: cardioversion can precipitate VF — avoid unless no other option",
      "MAT (multifocal atrial tachycardia) = cardioversion ineffective — treat underlying COPD/electrolytes",
      "Epinephrine 1 mg q3-5 min in pulseless arrest; amiodarone 300 mg after 2nd failed shock in VF/pVT",
    ],
    boardRecallTips: [
      "VF/pVT = UNSYNCHRONIZED (defibrillation) at 200 J biphasic → immediate CPR after",
      "AF cardioversion = SYNCHRONIZED, start 120–200 J biphasic",
      "Atrial flutter = SYNCHRONIZED, start 50–100 J (most responsive)",
      "SVT cardioversion = SYNCHRONIZED, start 50–100 J",
      "Polymorphic VT = UNSYNCHRONIZED (treat like VF)",
      "WPW + AF = NO adenosine/verapamil/diltiazem/digoxin → electrical cardioversion or procainamide",
      "Digitalis toxicity → AVOID cardioversion (risk VF)",
      "MAT → cardioversion ineffective → treat COPD/electrolytes",
      "SYNC mode waits for R wave — hold button, expect 0.5–1 sec delay before shock fires",
    ],
  },
];
