// @ts-nocheck
import type { Procedure } from "@/types";

export const familyMedicineProcedures: Procedure[] = [
  {
    id: "fm-proc-001",
    name: "Knee Joint Aspiration and Injection",
    rotation: "family-medicine",
    category: "Musculoskeletal",
    indication: "Diagnostic aspiration of joint effusion (rule out septic arthritis, gout, pseudogout) or therapeutic injection of corticosteroid for osteoarthritis flare or inflammatory arthritis",
    contraindications: [
      "Overlying skin infection, cellulitis, or open wound at injection site",
      "Bacteremia or active systemic infection (septic arthritis risk)",
      "Joint prosthesis (relative — require orthopedics)",
      "Patient refusal or inability to cooperate",
      "Bleeding disorder or anticoagulation with INR >3 (relative)"
    ],
    equipment: [
      "Sterile gloves and mask",
      "Chlorhexidine or betadine swabs for skin prep",
      "18–20 gauge, 1.5-inch needle for aspiration; 22–25 gauge, 1.5-inch for injection",
      "10 mL and 20 mL syringes",
      "Triamcinolone acetonide 40 mg/mL (corticosteroid) OR methylprednisolone acetate 40–80 mg",
      "1% lidocaine (without epinephrine) for anesthesia",
      "Specimen tubes (red top for chemistry/cell count, purple for cell count, culture tube for microbiology)",
      "Sterile drape, gauze, bandage"
    ],
    steps: [
      "Obtain informed consent — explain procedure, risks (infection, bleeding, post-injection flare, tendon damage, skin atrophy), and alternatives",
      "Position patient supine with knee extended or slightly flexed (small pillow under popliteal fossa)",
      "Identify landmarks: for medial approach, locate the soft spot just medial to patella at mid-patellar level; for superolateral approach, landmark is the superolateral corner of the patella",
      "Prepare the skin with chlorhexidine in concentric circles; allow to dry completely (60 seconds)",
      "Create a skin wheal with 1% lidocaine using a 25-gauge needle at the entry site",
      "Attach the 18–20 gauge needle to the 20 mL syringe; insert at 45° angle, advancing under the patella into the joint space with gentle aspiration",
      "Once synovial fluid is obtained (resistance decreases), stabilize the needle and aspirate to dryness",
      "If injecting: without removing needle, detach syringe, attach syringe with corticosteroid ± lidocaine, inject slowly (no resistance if properly in joint)",
      "Withdraw needle swiftly; apply pressure with gauze for 1–2 minutes; apply bandage",
      "Label specimens and send: tube 1 (cell count and differential), tube 2 (glucose, protein, LDH), culture tube (Gram stain and culture)",
      "Advise patient: relative rest × 24–48 hours, ice PRN; warn about post-injection flare (worse pain 12–24 hours after injection, self-limited)"
    ],
    documentation: "Document: consent obtained, indication, landmarks used, approach, needle gauge, volume aspirated, fluid appearance (clear/cloudy/bloody/purulent), corticosteroid name and dose, patient tolerance, specimens sent, post-procedure instructions given",
    complications: [
      "Infection/septic arthritis (<1 in 50,000 injections with proper aseptic technique)",
      "Post-injection flare (crystal-induced synovitis from corticosteroid crystals, 2–5%)",
      "Hemarthrosis (bloody tap from vessel injury)",
      "Skin and fat atrophy at injection site (from periarticular steroid deposition)",
      "Tendon rupture (rare, avoid injecting directly into tendon)"
    ],
    synovialFluidInterpretation: {
      normal: "Clear, viscous, WBC <200, glucose similar to serum",
      nonInflammatory: "Clear to yellow, WBC 200–2,000 (OA, trauma)",
      inflammatory: "Yellow-cloudy, WBC 2,000–50,000, low viscosity (RA, gout, pseudogout)",
      septic: "Purulent, WBC >50,000 (often >100,000), glucose low, positive Gram stain/culture",
      hemorrhagic: "Bloody or xanthochromic (trauma, coagulopathy, pigmented villonodular synovitis)"
    },
    boardPearl: "Gout: negatively birefringent, needle-shaped crystals (yellow when parallel to compensator) in PMNs. Pseudogout: positively birefringent, rhomboid/rectangular crystals (blue when parallel). Septic arthritis = medical emergency — aspirate immediately, do not delay for imaging."
  },
  {
    id: "fm-proc-002",
    name: "Papanicolaou (Pap) Smear and Cervical Cancer Screening",
    rotation: "family-medicine",
    category: "Women's Health",
    indication: "Cervical cancer screening per USPSTF/ACOG guidelines; initial evaluation of abnormal vaginal bleeding or discharge when malignancy is suspected",
    contraindications: [
      "Active menstruation (defer unless urgent evaluation needed — blood obscures results)",
      "Recent colposcopy/biopsy within 6–8 weeks (healing tissue)",
      "Recent intercourse within 24 hours or vaginal medications within 48–72 hours (may alter results)"
    ],
    equipment: [
      "Examination table with stirrups",
      "Speculum (appropriately sized: narrow for nulliparous/elderly, standard for parous patients)",
      "Light source (attached to speculum or handheld)",
      "Liquid-based cytology collection kit (ThinPrep or SurePath): cytobrush + plastic spatula OR broom device",
      "Labeled specimen container with preservative solution",
      "Gloves, lubricant (water-based only — not on cervix, apply to speculum sides only)",
      "Chaperone (required in most settings)"
    ],
    steps: [
      "Ensure patient has not douched, used vaginal medications, or had intercourse in 24–48 hours; defer if actively menstruating",
      "Obtain informed consent; explain purpose, procedure, and that results take 1–2 weeks; ensure chaperone is present",
      "Position patient in dorsal lithotomy; drape appropriately for privacy",
      "Apply lubricant to the speculum blades only (not the tip); insert closed speculum at 45° angle, then rotate horizontal and open to visualize cervix",
      "Adjust light to fully visualize the cervical os and transformation zone (squamocolumnar junction)",
      "Insert plastic spatula into the os and rotate 360° in one smooth motion to sample ectocervix",
      "Insert cytobrush into the endocervical canal (to the level of the internal os) and rotate 90–180° (do not over-rotate)",
      "Immediately rinse or swirl both devices into the liquid-based cytology collection vial, agitating to release cells",
      "If HPV co-testing is included (age 30–65), the same vial is used — no additional collection needed",
      "Close and remove speculum; perform bimanual exam to assess uterine size, adnexal tenderness/masses",
      "Label vial with patient name, DOB, date, provider; complete lab requisition with clinical history",
      "Advise patient: mild spotting for 1–2 days is normal; will contact her with results in 1–2 weeks"
    ],
    screeningGuidelines: {
      age21to29: "Pap smear alone every 3 years (no HPV testing)",
      age30to65: "Co-testing (Pap + HPV) every 5 years (preferred) OR Pap alone every 3 years OR primary HPV testing every 5 years",
      over65: "Discontinue if adequate prior negative screening and no history of CIN2+",
      postHysterectomy: "Discontinue if hysterectomy was for benign indication and no history of CIN2+",
      hiv: "Annual Pap; after 3 consecutive normals, can extend to every 3 years"
    },
    resultManagement: {
      nilm: "Negative for Intraepithelial Lesion or Malignancy = routine rescreening",
      ascus: "ASC-US: reflex HPV test; if HPV+, refer for colposcopy; if HPV−, routine screening",
      lsil: "Low-grade SIL: colposcopy recommended (age 21–24 may observe with repeat Pap in 1 year)",
      hsil: "High-grade SIL: immediate colposcopy with biopsy — do not observe",
      agc: "Atypical glandular cells: colposcopy + endocervical sampling ± endometrial sampling if >35yo",
      malignant: "Suspicious for cancer: urgent gynecologic oncology referral"
    },
    documentation: "Document: consent, chaperone present, speculum size, cervical appearance (normal vs. lesion, ectropion, discharge, bleeding), collection technique, specimen sent to (lab name), co-testing ordered, bimanual exam findings, post-procedure instructions",
    boardPearl: "HPV 16 and 18 cause ~70% of cervical cancers. HPV vaccine (Gardasil-9) recommended through age 26 for all; shared decision-making ages 27–45. Catch-up vaccination: 2-dose series if started before age 15; 3-dose series if started at 15 or older or immunocompromised."
  },
  {
    id: "fm-proc-003",
    name: "Skin Biopsy — Shave and Punch Techniques",
    rotation: "family-medicine",
    category: "Dermatology",
    indication: "Histopathologic diagnosis of skin lesions (suspected malignancy, inflammatory dermatosis, bullous disease, vasculitis, infection); any lesion that is changing, non-healing, or clinically uncertain",
    contraindications: [
      "Anticoagulation with very high INR/bleeding risk (relative — can usually proceed with pressure; discuss with patient)",
      "Allergy to local anesthetic (use alternative: diphenhydramine 1% or benzocaine topical)",
      "Lesion in cosmetically sensitive area without patient understanding of scar (inform consent)"
    ],
    equipment: [
      "Sterile gloves, mask, drape",
      "1% or 2% lidocaine with epinephrine (use without epinephrine on digits, nose, ear, penis — end-arteries)",
      "27–30 gauge needle, 3–5 mL syringe for anesthesia",
      "Shave biopsy: #15 scalpel blade or DermaBlade (flexible razor)",
      "Punch biopsy: 3 mm or 4 mm punch biopsy tool (rotating cylindrical blade)",
      "Iris scissors, skin hook or forceps",
      "Aluminum chloride 20% solution (hemostasis for shave biopsy) OR suture material (3-0 or 4-0 nylon for punch closure)",
      "Formalin-filled specimen container (10% neutral buffered formalin)",
      "Gauze, bandage"
    ],
    steps: [
      "SHAVE BIOPSY (for raised, epidermal lesions: seborrheic keratosis, papilloma, superficial BCC, AK):",
      "Identify lesion; mark with surgical pen if needed",
      "Inject 1% lidocaine with epi subdermally to raise a wheal under the lesion (creates a mound to shave from)",
      "Using a #15 blade or DermaBlade, make a horizontal cut at the base of the lesion, moving the blade parallel to the skin surface",
      "Place specimen in formalin immediately",
      "Apply aluminum chloride with cotton-tipped applicator to the wound bed; hold pressure for hemostasis",
      "No sutures needed; apply antibiotic ointment and bandage",
      "---",
      "PUNCH BIOPSY (for deep dermal lesions: melanoma evaluation, inflammatory conditions, bullous disease):",
      "Select appropriately-sized punch (4 mm preferred for most lesions; 3 mm for cosmetically sensitive areas)",
      "Inject local anesthetic to raise skin",
      "Stretch skin perpendicular to relaxed skin tension lines (RSTL) before punching — this creates an oval defect that closes linearly with better cosmesis",
      "Press punch device firmly against skin and rotate with downward pressure until a decrease in resistance is felt (indicates penetration to subcutaneous fat)",
      "Withdraw punch; use skin hook or forceps to gently elevate the core",
      "Cut the base of the core with iris scissors — include subcutaneous fat for full-thickness sample",
      "Place specimen in formalin; close with 1–2 interrupted sutures (3-0 or 4-0 nylon)",
      "Apply antibiotic ointment and bandage; instruct on wound care and suture removal (face 5–7 days, trunk/extremity 10–14 days)"
    ],
    documentation: "Document: lesion description (size, location, morphology, color, borders), biopsy technique, specimen submitted with clinical history, pathology lab, patient instructions for wound care and follow-up for results",
    complications: [
      "Infection (<1% with proper technique and wound care)",
      "Bleeding/hematoma (more common with anticoagulation)",
      "Scarring (discuss with patient pre-procedure)",
      "Incomplete excision (if margin-negative excision was intended — shave biopsy should not be used for lesions suspicious for melanoma if complete excision planned)"
    ],
    boardPearl: "Suspected melanoma: excisional biopsy with 1–3 mm margins is preferred for definitive diagnosis (do not shave, punch, or do incisional biopsy of pigmented lesions suspicious for melanoma unless the lesion is very large and excision is impractical). Breslow thickness (depth in mm) is the most important prognostic factor."
  },
  {
    id: "fm-proc-004",
    name: "Cerumen Disimpaction",
    rotation: "family-medicine",
    category: "ENT",
    indication: "Symptomatic cerumen impaction causing hearing loss, ear fullness, tinnitus, otalgia, or dizziness; also required before tympanometry or prior to otoscopic evaluation when TM cannot be visualized",
    contraindications: [
      "Suspected or known tympanic membrane perforation (irrigation contraindicated — use dry manual removal only)",
      "History of ear surgery (tympanostomy tubes, mastoidectomy)",
      "Active otitis externa or middle ear infection",
      "Foreign body in ear canal (do not irrigate — risk of pushing deeper)"
    ],
    equipment: [
      "Otoscope with speculum (pneumatic for TM mobility assessment)",
      "Irrigation method: 20–60 mL syringe OR commercial ear irrigation device; warm water (body temperature, 37°C — cold or hot water causes vertigo by caloric stimulation)",
      "Emesis basin held below and behind the auricle by patient",
      "Curette method: ear curette (loop or spoon) with headlamp",
      "Suction method: Frazier suction tip with suction device",
      "Ceruminolytic agents (pre-treatment 15–30 min before irrigation): carbamide peroxide 6.5%, mineral oil, baby oil, docusate sodium"
    ],
    steps: [
      "IRRIGATION METHOD (most common):",
      "Confirm TM is intact (otoscopy) or by history (no prior perforation, no ear surgery, no drainage)",
      "Pre-treat with ceruminolytic drops 15–30 minutes before irrigation (carbamide peroxide 5–6 drops, hold in canal with head tilted)",
      "Prepare warm water (body temperature — cold water causes nystagmus and vertigo)",
      "Have patient hold emesis basin below the auricle; tilt head toward the affected side",
      "Straighten the ear canal: adults pull pinna superoposteriorly; children pull inferoposteriorly",
      "Insert syringe tip just inside the meatus (do not advance deeply — risk of TM perforation)",
      "Direct the stream of water along the POSTERIOR-SUPERIOR canal wall (not directly at TM)",
      "Allow water to drain into basin; repeat until cerumen dislodges or 3–5 attempts",
      "---",
      "MANUAL CURETTE METHOD (if irrigation fails or TM status unclear):",
      "Use headlamp and otoscope for visualization",
      "Insert ear curette along the canal wall and use gentle scooping motion to remove cerumen en bloc",
      "Most effective for hard, impacted wax",
      "---",
      "After removal: re-examine with otoscope to confirm TM is visible and intact; assess hearing",
      "Instruct patient on prevention: avoid cotton swabs ('Q-tips clean the outside only'); can use ceruminolytic drops monthly for prophylaxis"
    ],
    documentation: "Document: laterality, symptoms, otoscope findings before and after (TM visualization, impaction degree), method used, ceruminolytic agent if used, outcome (cerumen removed, TM visualization achieved), post-procedure hearing assessment, patient education provided",
    complications: [
      "Otitis externa (post-irrigation ear canal wetness — advise drying with towel and angling head to drain)",
      "Tympanic membrane perforation (rare with proper technique — never direct stream at TM)",
      "Vertigo and nausea from caloric stimulation (use body-temperature water only)",
      "Ear canal laceration from curette (use proper visualization and gentle technique)",
      "Failure to remove (may need ENT referral for suction under microscope)"
    ],
    boardPearl: "AAFP/AAO guidelines recommend against cotton-tip applicators for cerumen removal — they compress wax and cause impaction. Cotton swabs are the leading cause of cerumen impaction. Ear candling has no evidence of benefit and risks burns and wax deposition."
  },
  {
    id: "fm-proc-005",
    name: "Intrauterine Device (IUD) Insertion",
    rotation: "family-medicine",
    category: "Women's Health",
    indication: "Long-acting reversible contraception (LARC) — most effective reversible contraception (>99% effective); also Mirena/Liletta for heavy menstrual bleeding (levonorgestrel IUD); Paragard (copper) for emergency contraception if inserted within 5 days of unprotected intercourse",
    contraindications: [
      "Confirmed or suspected pregnancy",
      "Unexplained uterine bleeding",
      "Active pelvic inflammatory disease (PID) or current STI (chlamydia, gonorrhea) — treat first, reinsert after",
      "Distorted uterine cavity (fibroids, bicornuate uterus, uterine septum)",
      "Endometrial or cervical cancer (untreated)",
      "Copper IUD specific: copper allergy, Wilson's disease",
      "Levonorgestrel IUD specific: current breast cancer or other progestin-sensitive cancer"
    ],
    equipment: [
      "Bimanual exam to assess uterine size and position (anteflexed vs. retroflexed)",
      "Speculum (bivalve, appropriately sized)",
      "Single-tooth tenaculum (to stabilize and straighten cervix)",
      "Uterine sound (graduated, malleable)",
      "IUD of choice in sterile packaging (Mirena, Kyleena, Liletta, Skyla, or Paragard)",
      "Ring forceps with gauze for cervical cleaning",
      "Betadine or chlorhexidine for cervical preparation",
      "Long forceps, scissors (for trimming IUD strings)",
      "NSAIDs pre-procedure (ibuprofen 600–800 mg 30–60 min before) and/or paracervical block with 1% lidocaine"
    ],
    steps: [
      "Screen for contraindications; obtain informed consent (method, duration, risks, benefits, alternatives)",
      "Offer pre-procedure analgesia: ibuprofen 600–800 mg oral 30–60 minutes before; consider paracervical block",
      "Perform bimanual exam to determine uterine size and position (important for sounding direction)",
      "Insert speculum to visualize cervix; clean cervix with betadine or chlorhexidine",
      "Apply tenaculum to anterior lip of cervix at 12 o'clock position; apply gentle traction to straighten uterine axis",
      "Sound the uterus: insert uterine sound gently through the os in the direction of the uterine body; measure depth (must be ≥6 cm for Mirena/Paragard; Kyleena/Skyla minimum 5 cm)",
      "Load the IUD into the insertion device per manufacturer instructions (if not pre-loaded)",
      "Set the blue flange on the insertion tube to the measured uterine depth",
      "Insert the IUD tube through the os to the level of the blue flange (touching the fundus)",
      "Deploy the IUD arms: withdraw the insertion tube while holding the plunger steady (NOT advancing the plunger)",
      "Release the plunger fully, then withdraw the insertion tube completely",
      "Trim the strings to 3–4 cm beyond the cervical os (patient can feel strings; not too long to cause partner discomfort)",
      "Remove tenaculum and speculum; assess for bleeding at tenaculum sites",
      "Confirm placement with ultrasound if concerned about positioning",
      "Counsel patient: check strings monthly after each period; back-up contraception × 7 days (hormonal IUDs); hormonal IUD immediate effectiveness if inserted in first 7 days of cycle"
    ],
    documentation: "Document: indication (contraception vs. menorrhagia vs. emergency contraception), IUD brand and lot number, uterine sound depth, insertion technique, string length trimmed to, any complications during insertion (vasovagal, perforation attempt), post-insertion plan",
    complications: [
      "Vasovagal syncope during insertion (have patient lie down; atropine IV/IM if severe bradycardia)",
      "Uterine perforation (<0.1% — pain during insertion + resistance → do not advance → remove and refer for ultrasound)",
      "Expulsion (2–10% in year 1, higher risk in nulliparous patients, post-insertion in first 6 months)",
      "PID (risk <1% if no pre-existing infection — STI screening recommended before insertion)",
      "Ectopic pregnancy (very rare — IUD highly effective, but if pregnancy occurs, 50% risk of ectopic)",
      "Increased menstrual bleeding (copper IUD — 20–50% increase in flow and dysmenorrhea)"
    ],
    boardPearl: "Copper IUD (Paragard) is the most effective emergency contraception available — >99.9% effective if inserted within 5 days of unprotected intercourse, AND provides ongoing contraception for 10+ years. Levonorgestrel IUD (Mirena) is FDA-approved for heavy menstrual bleeding and reduces flow by 90% at 3 months."
  },
  {
    id: "fm-proc-006",
    name: "Spirometry and Pulmonary Function Interpretation",
    rotation: "family-medicine",
    category: "Pulmonary",
    indication: "Diagnosis and staging of obstructive lung diseases (COPD, asthma); monitoring of restrictive disease (pulmonary fibrosis, obesity, neuromuscular disease); pre-operative risk assessment; evaluation of dyspnea etiology",
    contraindications: [
      "Recent MI (<1 month) or unstable angina",
      "Recent thoracic, abdominal, or eye surgery (<1 month)",
      "Pneumothorax (current)",
      "Hemoptysis (active, undiagnosed)",
      "Uncontrolled hypertension (SBP >200 or DBP >120)",
      "Severe bronchospasm or SpO2 <88% at rest"
    ],
    equipment: [
      "Calibrated spirometer (flow-volume loop capable)",
      "Disposable mouthpiece and noseclip",
      "Bronchodilator for reversibility testing: albuterol 2.5 mg via nebulizer OR 4 puffs (360 mcg) via MDI with spacer",
      "Pulse oximetry",
      "Emergency albuterol available"
    ],
    steps: [
      "Review medications: hold short-acting bronchodilators 4 hours, long-acting 12 hours (for reversibility testing); spirometry for diagnosis can be done on usual medications",
      "Measure and record: height (use stadiometer), weight, age, sex (for predicted values)",
      "Explain the procedure: 'You will take the biggest breath you possibly can, then blast it all out as hard and fast as you can, and keep blowing until empty — for at least 6 seconds'",
      "Demonstrate the maneuver; position patient seated upright (not supine) with noseclip in place",
      "Patient performs FVC maneuver: maximal inhalation → blast exhalation → sustained effort ≥6 seconds",
      "Repeat minimum 3 acceptable maneuvers (ATS/ERS criteria: no hesitation, no early termination, no cough in first second, no leak)",
      "Best FVC and best FEV1 from any acceptable maneuver (from different blows) are used (reproducibility: top 2 values within 150 mL)",
      "If baseline shows obstruction (FEV1/FVC <0.70): administer bronchodilator, wait 15–20 minutes, repeat spirometry for reversibility",
      "Interpretation steps:",
      "Step 1: Is FEV1/FVC <0.70 (or <LLN)? YES = obstruction pattern",
      "Step 2: If obstructive, classify severity by FEV1 % predicted: ≥80% = mild (GOLD 1), 50–79% = moderate (GOLD 2), 30–49% = severe (GOLD 3), <30% = very severe (GOLD 4)",
      "Step 3: If FEV1/FVC normal but FVC <80% predicted: restriction pattern (confirm with TLC via plethysmography)",
      "Step 4: Reversibility: ≥12% AND ≥200 mL increase in FEV1 post-bronchodilator = significant reversibility (supports asthma diagnosis)"
    ],
    interpretation: {
      obstructive: "FEV1/FVC <0.70: COPD, asthma, bronchiectasis. Concave (scooped-out) expiratory flow-volume curve.",
      restrictive: "FEV1/FVC normal or elevated + FVC <80% predicted (confirm with TLC <80%): pulmonary fibrosis, obesity, neuromuscular disease, pleural disease.",
      mixed: "FEV1/FVC <0.70 + FVC <80%: combined obstructive and restrictive pattern. Common in severe COPD, sarcoidosis.",
      normal: "FEV1/FVC ≥0.70 AND FVC ≥80% predicted AND FEV1 ≥80% predicted = normal spirometry."
    },
    documentation: "Document: patient effort (acceptable vs. suboptimal), pre/post-bronchodilator values (FVC, FEV1, FEV1/FVC, FEV1% predicted), interpretation (normal/obstruction/restriction), GOLD stage if COPD, reversibility if tested, clinical correlation with symptoms and exam",
    boardPearl: "GOLD COPD classification uses FEV1 % predicted AFTER bronchodilator. COPD requires BOTH FEV1/FVC <0.70 post-bronchodilator AND clinical history (symptoms + exposure). Asthma key: FEV1/FVC <0.70 that NORMALIZES after bronchodilator = asthma (reversible obstruction)."
  },
  {
    id: "fm-proc-007",
    name: "Preventive Health Maintenance Counseling Visit (Annual Well Exam)",
    rotation: "family-medicine",
    category: "Preventive Care",
    indication: "Annual wellness examination for adults — screening, immunizations, health promotion, chronic disease management review, safety counseling",
    steps: [
      "VITALS AND ANTHROPOMETRICS: BP (two readings, both arms if first visit), HR, BMI, waist circumference",
      "MEDICAL HISTORY UPDATE: interval hospitalizations, new diagnoses, surgeries, emergency visits, specialist care",
      "MEDICATION RECONCILIATION: reconcile with pharmacy records; assess adherence, side effects; identify Beers Criteria medications in adults ≥65",
      "CANCER SCREENING (age/sex/risk-appropriate):",
      "  • CRC: colonoscopy/FIT/Cologuard age 45–75",
      "  • Mammogram: biennial age 40–74 (USPSTF Grade B); discuss shared decision-making 40–49",
      "  • Pap ± HPV: age 21–65 (see Pap procedure for schedule)",
      "  • Lung LDCT: age 50–80, ≥20 pack-year smoking history, current or quit <15 years",
      "  • AAA ultrasound: one-time screen, men 65–75 who ever smoked",
      "  • Skin exam: clinical breast and testicular exam (individualize based on risk)",
      "CARDIOVASCULAR SCREENING:",
      "  • Lipid panel: age ≥35 (M), ≥45 (F); earlier if CVD risk factors",
      "  • ASCVD 10-year risk calculation (Pooled Cohort Equations) for adults 40–75 without known CVD",
      "  • Blood pressure monitoring per visit",
      "METABOLIC SCREENING:",
      "  • Fasting glucose or HbA1c: age ≥35 or BMI ≥25 with risk factors",
      "  • Thyroid (TSH): symptomatic patients, women >60, postpartum, family history",
      "IMMUNIZATIONS (CDC adult schedule highlights):",
      "  • Influenza: annual for all adults",
      "  • COVID-19: updated per current CDC guidance",
      "  • Tdap: one-time dose (if not received as adult), then Td booster every 10 years",
      "  • Shingrix (RZV): age ≥50 (2-dose series; preferred over Zostavax)",
      "  • Pneumococcal (PCV15/20): age ≥65 (or earlier if immunocompromise, asplenia, chronic disease)",
      "  • RSV (Abrysvo or mResvia): age ≥60 (shared decision-making per CDC)",
      "  • HPV (Gardasil-9): through age 26; shared decision-making 27–45",
      "  • Hep A, Hep B: if not previously vaccinated and at risk",
      "MENTAL HEALTH SCREENING:",
      "  • Depression: PHQ-2 (or PHQ-9 if positive screen) — all adults",
      "  • Anxiety: GAD-7",
      "  • Alcohol: AUDIT-C or single-question NIAAA screen ('How many times in the past year did you drink ≥5/4 drinks in a day?')",
      "  • Substance use: CAGE-AID or DAST-10",
      "  • Intimate partner violence: screen in women of reproductive age (USPSTF Grade B)",
      "SAFETY AND INJURY PREVENTION:",
      "  • Seat belt use, helmet use",
      "  • Smoke detectors, carbon monoxide alarms",
      "  • Firearms: storage, locks (especially with children or depression in household)",
      "  • Falls assessment: age ≥65 — Timed Up and Go (TUG) test; refer to PT if fall in past year",
      "SEXUAL HEALTH:",
      "  • STI screening: syphilis, HIV, chlamydia/gonorrhea (age- and risk-based per USPSTF)",
      "  • Contraception counseling (reproductive-age women)",
      "HEALTH PROMOTION AND COUNSELING:",
      "  • Physical activity: 150 min/wk moderate or 75 min/wk vigorous aerobic activity",
      "  • Nutrition: Mediterranean or DASH diet for CVD risk reduction",
      "  • Tobacco: ask-advise-refer at every visit; NRT, varenicline, bupropion for cessation",
      "  • Weight management counseling for BMI ≥25",
      "CHRONIC DISEASE MANAGEMENT REVIEW:",
      "  • Review labs, specialist notes, medication adherence for each chronic condition",
      "  • Diabetes: HbA1c, foot exam, dilated eye exam, UACR, eGFR, statin, ACE/ARB if UACR elevated",
      "  • HTN: BP log review, medication side effects, adherence",
      "  • CLOSE WITH PATIENT AGENDA: 'Is there anything else you wanted to address today?'"
    ],
    documentation: "Document: all screenings performed and results (or declined), immunizations given (vaccine name, lot number, site, route), referrals made (mammography, colonoscopy, etc.), counseling provided (smoking cessation, weight loss, physical activity), patient-specific plan for next visit interval, any acute issues addressed",
    boardPearl: "USPSTF Grade A = recommend (high certainty of substantial net benefit); Grade B = recommend (moderate certainty); Grade C = offer selectively (individualize); Grade D = recommend against; Grade I = insufficient evidence. Only Grade A and B recommendations carry ACA mandate for no cost-sharing."
  }
];
