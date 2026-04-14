import type { Procedure } from "@/types";

export const womensHealthProcedures: Procedure[] = [
  {
    id: "wh-proc-iud-insertion",
    rotation: "womens-health",
    name: "Intrauterine Device (IUD) Insertion",
    category: "Contraception Procedure",
    overview:
      "IUD insertion is a minor in-office procedure to place a long-acting reversible contraceptive (LARC) device into the uterine cavity. Two main types: hormonal (levonorgestrel-releasing: Mirena 52 mg/8 years, Kyleena 19.5 mg/5 years, Skyla 13.5 mg/3 years, Liletta 52 mg/8 years) and non-hormonal copper (Paragard/copper T 380A, effective 10 years and as emergency contraception if placed within 5 days of unprotected intercourse). IUDs are > 99% effective and are ACOG first-line for all eligible patients including nulliparous women and adolescents.",
    indications: [
      "Desire for long-acting reversible contraception",
      "Emergency contraception within 5 days of unprotected intercourse (copper IUD only — most effective EC, > 99%)",
      "Dysmenorrhea and menorrhagia management (LNG-IUD significantly reduces menstrual bleeding — 90% reduction)",
      "Endometriosis and adenomyosis symptoms",
      "Endometrial protection in women on estrogen-only hormone therapy",
      "Women with contraindications to estrogen-containing methods",
      "Postpartum and post-abortion (immediate postpartum IUD within 10 minutes of placenta delivery is safe — expulsion rate 15–20% vs 2–5% interval insertion)",
    ],
    contraindications: [
      "Confirmed or suspected pregnancy",
      "Unexplained abnormal uterine bleeding (before evaluation)",
      "Uterine cavity distortion (submucosal fibroids, uterine anomaly) — relative contraindication, assess case by case",
      "Active cervicitis, PID, or STI (current or within past 3 months) — treat infection first",
      "Copper IUD: Wilson's disease, allergy to copper",
      "LNG-IUD: known or suspected hormone-sensitive breast cancer (Category 4 per USMEC)",
      "Cervical or endometrial cancer",
      "Current gestational trophoblastic disease",
    ],
    equipment: [
      "IUD device (appropriate type per patient selection)",
      "Speculum (appropriate size)",
      "Ring forceps and sterile gauze",
      "Antiseptic solution (povidone-iodine or chlorhexidine)",
      "Tenaculum (single-toothed for cervical stabilization)",
      "Uterine sound (to measure uterine depth — 6–9 cm is appropriate range for most IUDs)",
      "IUD inserter (device-specific)",
      "Sharp scissors (to trim IUD strings)",
      "NSAIDs (premedication: ibuprofen 600–800 mg 1 hour prior)",
      "Local anesthetic: lidocaine 2% — paracervical block or intracervical injection at 12, 4, and 8 o'clock positions if desired",
      "Emergency tray (vasovagal management: atropine 0.5 mg, IV access)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Pre-procedure counseling and consent",
        description:
          "Review IUD options (hormonal vs copper), efficacy, duration, side effects (LNG-IUD: irregular spotting for 3–6 months, then amenorrhea in 20%; copper: heavier/more painful periods initially), expulsion rate (2–10%), perforation risk (1–3/1,000 insertions). Obtain written informed consent. Verify no current pregnancy (urine hCG). Screen for STIs if indicated.",
        tip: "NSAIDs (ibuprofen 600–800 mg) taken 1 hour before insertion significantly reduce procedural pain. Misoprostol for cervical ripening is NOT routinely recommended (no evidence of benefit and causes significant cramping — reserve for failed insertion or nulliparous with stenotic os).",
      },
      {
        stepNumber: 2,
        title: "Positioning and speculum insertion",
        description:
          "Patient in dorsal lithotomy position. Insert appropriately sized speculum and visualize the cervix fully. Note cervical position (anterior/posterior). Cleanse cervix with antiseptic solution using ring forceps and gauze.",
      },
      {
        stepNumber: 3,
        title: "Paracervical block (optional)",
        description:
          "For pain management: inject 1% lidocaine (without epinephrine) at the cervical-vaginal junction at 12 o'clock (1 mL), then 4 and 8 o'clock (1.5–2 mL each), aspirating before injecting. Wait 2–3 minutes for anesthesia.",
        tip: "Intracervical injection (1 mL lidocaine into anterior lip before tenaculum placement) reduces tenaculum pain significantly.",
      },
      {
        stepNumber: 4,
        title: "Tenaculum placement and cervical stabilization",
        description:
          "Apply single-tooth tenaculum to anterior lip of cervix at 12 o'clock. Apply gentle downward traction to straighten the cervical-uterine angle. Steady traction is maintained throughout the procedure.",
        tip: "Warn patient before placing tenaculum — 'You will feel a pinch.' Apply slowly and steadily. Having patient breathe deeply through placement reduces pain perception.",
      },
      {
        stepNumber: 5,
        title: "Uterine sounding",
        description:
          "Gently advance the uterine sound through the internal os into the uterine cavity, following the natural angulation of the uterus. Note the depth at which resistance is felt at the fundus. Record uterine depth — appropriate depth for IUD insertion is typically 6–9 cm.",
        tip: "If sounding depth is < 6 cm, the uterus may be too small (rare) or there may be a uterine anomaly — consider US guidance. If significant resistance at internal os (stenosis), gentle dilators may be needed or refer.",
      },
      {
        stepNumber: 6,
        title: "Load and insert IUD",
        description:
          "Load the IUD into the inserter per device-specific instructions (for T-shaped IUDs: fold arms down and load into inserter tube). Set the depth indicator to match the sounded uterine depth. Advance the inserter to the fundus. For Mirena/Kyleena/Liletta: use 'withdrawal technique' — hold inner plunger still and retract outer tube to release IUD arms at fundus. For Paragard: similar withdrawal technique — pull back insertion tube while holding rod steady.",
        tip: "Do NOT push the plunger forward to release — this increases perforation risk. The IUD should open AT the fundus, not in the cervical canal.",
      },
      {
        stepNumber: 7,
        title: "Withdraw inserter and trim strings",
        description:
          "Gently withdraw the inserter, then the tenaculum. The IUD strings should be visible hanging through the cervical os. Trim strings to approximately 3 cm (2–3 finger-widths) from the external os using sharp scissors. Document trimmed string length.",
        tip: "Do not cut strings too short (patient cannot feel them for self-check) or too long (partner may feel them during intercourse — easily trimmed more at follow-up).",
      },
      {
        stepNumber: 8,
        title: "Post-procedure assessment and patient education",
        description:
          "Visualize cervix for active bleeding. Remove speculum. Monitor for 5–10 minutes (vasovagal reaction: bradycardia, hypotension, nausea — treat with supine position, legs elevated, atropine if severe). Instruct: cramping for 1–2 days is expected, avoid tampon use/intercourse/swimming for 24 hours, teach string self-check (monthly after menses), return if: strings not palpable, expulsion suspected, severe pelvic pain, missed period.",
        tip: "LNG-IUD is effective immediately if inserted during first 7 days of cycle; backup contraception needed if outside this window. Copper IUD is effective immediately at any time in cycle.",
      },
    ],
    complications: [
      "Vasovagal syncope — most common procedural complication (2–3%); treat with supine position, atropine 0.5 mg IV/IM if bradycardia",
      "Perforation (1–3/1,000 insertions) — signs: loss of resistance, inability to feel IUD, abdominal pain; confirm with US; surgical removal may be required for perforation with displacement into abdomen",
      "Expulsion (2–10% first year, higher in postpartum and younger nulliparous) — present with pelvic pain or visible IUD in vagina; replace if desired",
      "PID (0.1–0.5% within first 20 days of insertion — STI risk period); routine antibiotic prophylaxis NOT recommended; treat if diagnosed",
      "Ectopic pregnancy — if pregnancy occurs with IUD in place, 50% are ectopic; remove IUD if strings accessible",
      "Embedment or malposition — confirmed by US; may require hysteroscopic removal",
      "Hormonal side effects (LNG-IUD): mood changes, acne, headache, irregular spotting (most improve within 3–6 months)",
    ],
    documentation:
      "Procedure: IUD insertion. Type/brand/lot number: ___. Uterine sounding depth: ___ cm. IUD placement confirmed by withdrawal technique. Strings trimmed to ___ cm. Patient tolerated procedure without complications. Post-procedure VS stable. Patient instructed on string self-check, warning signs, and return precautions. Follow-up scheduled in 4–6 weeks for string check.",
  },
  {
    id: "wh-proc-colposcopy-leep",
    rotation: "womens-health",
    name: "Colposcopy and LEEP (Loop Electrosurgical Excision Procedure)",
    category: "Gynecologic Procedure",
    overview:
      "Colposcopy is a magnified examination of the cervix, vagina, and vulva using a colposcope (6–40× magnification) following an abnormal Pap smear or positive HPV result. The transformation zone (TZ) — where columnar epithelium meets squamous epithelium — is the primary site for HPV-associated dysplasia and cervical cancer. LEEP (also called LLETZ — large loop excision of the transformation zone) is an office-based excisional procedure that uses a thin wire loop and electrosurgical current to remove abnormal cervical tissue (CIN2/CIN3, endocervical lesions). LEEP provides both therapeutic excision and a surgical specimen for histologic diagnosis, differentiating it from ablative techniques (cryotherapy, laser ablation).",
    indications: [
      "Colposcopy indications (per ASCCP 2019 Risk-Based Guidelines): high-risk HPV positive with ASC-H or HSIL; HPV 16 or 18 positive; ASC-US with positive hrHPV and colposcopy not previously done; persistent hrHPV at 1–3 years; any result meeting 'colposcopy preferred' threshold on ASCCP risk table",
      "LEEP indications: CIN2 confirmed on biopsy (all ages); CIN3 on biopsy; HSIL cytology with unsatisfactory colposcopy (entire transformation zone not visible); endocervical curettage (ECC) positive for CIN; adenocarcinoma in situ (AIS); discordance between cytology and histology (cytology worse than biopsy)",
      "CIN1 management: observation for 2 years (most regress spontaneously); LEEP only if CIN1 persists > 2 years",
    ],
    contraindications: [
      "Colposcopy: active cervicitis or PID (treat first, then reschedule); pregnancy (colposcopy is safe in pregnancy, but biopsy is performed only for suspected invasive cancer — no ECC in pregnancy)",
      "LEEP: known pregnancy (absolute contraindication — defer until postpartum); active genital tract infection; inability to tolerate procedure; coagulopathy (relative)",
      "LEEP in pregnancy: generally deferred to postpartum unless invasive cancer is suspected",
    ],
    equipment: [
      "Colposcope with light source",
      "Speculum (non-lubricant or water only)",
      "3–5% acetic acid solution (white vinegar)",
      "Lugol's iodine solution (Schiller's test)",
      "Biopsy forceps (Tischler or Baby Tischler)",
      "Endocervical curette (ECC)",
      "Monsel's solution or silver nitrate (hemostasis)",
      "LEEP equipment: electrosurgical generator, wire loop electrodes (various sizes), ball electrode (hemostasis), grounding pad, smoke evacuator",
      "Local anesthetic: 2% lidocaine with 1:100,000 epinephrine (for hemostasis) — inject into cervical stroma (4 quadrants)",
      "Formalin specimen containers",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Pre-procedure preparation (colposcopy)",
        description:
          "Review referral indication and prior cytology/HPV results. Pregnancy test if premenopausal. Explain procedure. Patient in lithotomy position. Insert speculum without lubricant. Apply 3–5% acetic acid solution to cervix with large swab — wait 60 seconds for acetowhite reaction.",
        tip: "Acetowhite epithelium: abnormal cells with high nuclear:cytoplasmic ratio absorb acetic acid → protein coagulation → opaque white appearance. The whiter, thicker, and more rapidly appearing the acetowhite, the higher the grade of dysplasia.",
      },
      {
        stepNumber: 2,
        title: "Systematic colposcopic assessment",
        description:
          "Examine entire transformation zone (TZ) systematically. Assess: (1) whether TZ is fully visualized (Type 1 = entirely ectocervical, Type 2 = partially endocervical, Type 3 = entirely endocervical — Type 3 = unsatisfactory); (2) acetowhite lesions — note location (TZ quadrant), margins (smooth/regular vs irregular/geographic), surface contour (flat vs raised/nodular); (3) vascular patterns — mosaic (irregular cobblestone) and punctation (stippled dots) indicate dysplasia; coarse mosaic/punctation = high grade; atypical vessels (comma-shaped, corkscrew) = invasive cancer concern.",
        tip: "The SWEDE score or Reid Colposcopic Index grade CIN lesions. The most important finding: atypical blood vessels (irregular, branching) = immediate biopsy and surgical referral (possible invasive cancer).",
      },
      {
        stepNumber: 3,
        title: "Directed biopsies",
        description:
          "Take biopsies from the most abnormal-appearing areas (densest acetowhite, most abnormal vascular patterns). Take 2–4 biopsies to sample adequately. Apply pressure with gauze, then Monsel's solution or silver nitrate for hemostasis. Perform ECC if the entire TZ is not visualized (Type 2 or 3) or if indicated — insert endocervical curette and firmly scrape 360° of the endocervical canal.",
        tip: "ECC is contraindicated in pregnancy. Biopsies are painful — warn patient before each. Monsel's solution (ferric subsulfate) is the most effective topical hemostatic agent and leaves a brown granular residue on discharge — educate patient to expect brown discharge.",
      },
      {
        stepNumber: 4,
        title: "LEEP — Cervical anesthesia",
        description:
          "After deciding on LEEP (usually based on biopsy results at a subsequent visit, but may be same-day): apply vasoconstrictive local anesthetic. Inject 2% lidocaine with 1:100,000 epinephrine into cervical stroma at 12, 3, 6, and 9 o'clock (2–3 mL each quadrant). Wait 3 minutes. Reapply 3–5% acetic acid.",
        tip: "The epinephrine component is critical for hemostasis (vasoconstriction) — use only in patients without epinephrine allergy. Some providers use 10,000:1 dilution vasopressin instead.",
      },
      {
        stepNumber: 5,
        title: "LEEP — Loop excision",
        description:
          "Attach grounding pad to patient's thigh. Select loop size to excise the entire transformation zone with 3–5 mm margin. Activate the electrosurgical unit to cutting/blending mode (30–50W). In one smooth, continuous motion, pass the loop through the cervical stroma at the outer edge of the TZ — enter at 9 o'clock, arc through 12, and exit at 3 o'clock. Retrieve specimen immediately and place in labeled formalin container.",
        tip: "One pass excision is preferred — multiple passes increase thermal artifact which limits pathologic assessment. The specimen orientation (marking the 12 o'clock margin with suture or ink) helps pathology assess margins.",
      },
      {
        stepNumber: 6,
        title: "LEEP — Hemostasis and endocervical sampling",
        description:
          "After loop excision, use ball electrode (coagulation mode) to achieve hemostasis of the entire raw excision bed. Apply Monsel's solution to any persistent oozing. Perform ECC of the remaining endocervical canal above the excision (post-LEEP ECC — assesses for residual disease at the margins). Remove speculum.",
        tip: "Excessive coagulation increases the risk of cervical stenosis — use the minimum current required for hemostasis.",
      },
      {
        stepNumber: 7,
        title: "Post-procedure instructions",
        description:
          "Educate patient: expect vaginal discharge (dark brown from Monsel's) and light bleeding for 1–2 weeks. Pelvic rest (no intercourse, tampons, or tub soaking) for 4 weeks. Return immediately for heavy bleeding (soaking > 1 pad/hour), fever, or severe pelvic pain. Follow-up for pathology results in 2–3 weeks. Post-LEEP surveillance: co-testing at 1 year × 3 years then routine.",
      },
    ],
    complications: [
      "Bleeding — most common (2–5%); heavy post-operative hemorrhage managed with Monsel's, silver nitrate, suture ligation, or return to OR",
      "Infection/cervicitis — uncommon; prophylactic antibiotics not routinely indicated",
      "Cervical stenosis — occurs in 1–2%; more common with multiple LEEP procedures; can cause hematometra, dysmenorrhea, difficulty with Pap collection",
      "Preterm birth risk — LEEP increases preterm delivery risk in subsequent pregnancies (OR ~2.0 for PTB < 37 weeks); discuss with patients desiring future fertility; use smallest effective excision",
      "Incomplete excision — positive margins on LEEP specimen (ecto or endo margin); management per ASCCP guidelines: close surveillance or repeat excision",
      "Thermal artifact — impaired pathologic assessment if excessive current used or multiple passes performed",
    ],
    documentation:
      "Colposcopy: TZ type ___ (fully/partially/not visualized). Acetowhite lesions: ___ quadrants, ___% TZ involved, margins ___ (regular/irregular). Vascular pattern: normal/punctation/mosaic (fine/coarse). Biopsies × ___ from ___. ECC: performed/deferred. Hemostasis achieved with Monsel's solution. LEEP performed: loop size ___ mm × ___ mm depth, 1 pass technique, specimen sent to pathology in formalin, post-LEEP ECC performed/deferred. Patient tolerated without complications. Post-procedure VS stable.",
  },
  {
    id: "wh-proc-prenatal-us",
    rotation: "womens-health",
    name: "Obstetric Ultrasound (First and Second Trimester)",
    category: "Diagnostic Imaging",
    overview:
      "Obstetric ultrasound is the primary imaging modality in pregnancy, offering real-time assessment of fetal anatomy, growth, placenta, and amniotic fluid without radiation exposure. ACOG and AIUM recommend universal first-trimester ultrasound (11–13+6 weeks) and a second-trimester anatomy survey (18–20 weeks). Transvaginal US (TVUS) provides superior resolution in early pregnancy; transabdominal US (TAUS) is standard in the second and third trimesters. PA students should be able to interpret, order, and discuss US findings with patients.",
    indications: [
      "First trimester (< 14 weeks): confirm intrauterine pregnancy, establish gestational age (GA), assess fetal number and chorionicity (multiple gestation), evaluate for ectopic pregnancy, assess fetal cardiac activity, nuchal translucency (NT) measurement at 11–13+6 weeks (part of first-trimester screen for aneuploidy), evaluate first-trimester bleeding or pain",
      "Second trimester anatomy survey (18–20 weeks): detailed fetal anatomic survey, placental location (previa), amniotic fluid assessment, cervical length, fetal growth",
      "Third trimester: growth assessment, fetal presentation, amniotic fluid index, placental location, biophysical profile (BPP), Doppler (umbilical artery, MCA), non-stress test adjunct",
      "Any trimester: evaluate vaginal bleeding, pelvic pain, suspected ectopic, assess fetal well-being when clinically indicated",
    ],
    contraindications: [
      "No absolute contraindications for diagnostic obstetric ultrasound (no radiation; mechanical index monitored by equipment)",
      "TVUS: patient refusal (relative contraindication); previa with active bleeding (use TAUS cautiously; TVUS is actually safe and more accurate for placental location but must be done carefully)",
    ],
    equipment: [
      "Ultrasound machine with obstetric presets",
      "Transabdominal transducer (curvilinear, 3–5 MHz)",
      "Transvaginal transducer (endocavitary, 5–9 MHz) with probe cover",
      "Ultrasound gel",
      "Acoustic coupling agent for TVUS probe cover",
      "Measuring calipers (built-in software)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "First trimester US — Early IUP confirmation",
        description:
          "Transabdominal (bladder full) or transvaginal (bladder empty — higher resolution). First structure visible: gestational sac (GS) at 4.5–5 weeks (β-hCG ~1,000–2,000) — anechoic round structure with echogenic rim within the uterine cavity. Yolk sac visible at 5–6 weeks (β-hCG ~2,500). Fetal pole with cardiac activity (flickering) visible at 6 weeks (FHR 100–120 bpm). Crown-rump length (CRL) measured for GA — most accurate dating method in first trimester (accurate to ± 3–5 days if measured before 14 weeks).",
        tip: "Double decidual sac sign (GS surrounded by two concentric rings of decidua) vs pseudogestational sac (ectopic — single echogenic ring in uterine cavity — hematoma, not a true GS). Intradecidual sign: GS embedded within decidua (not in cavity) — very early IUP.",
      },
      {
        stepNumber: 2,
        title: "Nuchal translucency measurement (11–13+6 weeks)",
        description:
          "CRL must be 45–84 mm (11+0 to 13+6 weeks). Neutral fetal position (not hyperextended or flexed). Midsagittal view of fetal face. Measure the maximum thickness of the translucent space at the back of the fetal neck (NT) in mm using electronic calipers. NT ≥ 3 mm or above the 95th percentile is associated with chromosomal abnormalities (T21, T18, T13) and structural defects (cardiac).",
        tip: "NT must be measured by certified NT providers (Fetal Medicine Foundation or NTQR credentialed). NT is combined with serum screening (PAPP-A, free β-hCG) in first-trimester combined screening. PAPP-A low + NT high = high risk for T21.",
      },
      {
        stepNumber: 3,
        title: "Second trimester anatomy survey (18–20 weeks)",
        description:
          "Systematic survey of fetal anatomy: Head (BPD/HC measurement, choroid plexus, cavum septum pellucidum, cerebellum/cisterna magna, posterior fossa — Dandy-Walker), Face (profile, nose/lips, orbits, palate), Neck (nuchal fold at 15–20 weeks — ≥ 6 mm associated with T21), Thorax (4-chamber heart view, LVOT/RVOT views, diaphragm), Abdomen (stomach visible, abdominal circumference, cord insertion, kidneys, bladder), Spine (longitudinal and axial views — neural tube defects), Extremities (3 segments each limb, count digits), Placenta (location, grade), Amniotic fluid (AFI: sum of 4 quadrant deepest pockets — normal 5–24 cm; single deepest pocket ≥ 2 cm = normal), Cervical length (transvaginal — normal ≥ 2.5 cm at 18–24 weeks; < 2.5 cm = short cervix, risk for preterm delivery).",
        tip: "Placenta previa: placental edge overlying or within 2 cm of internal cervical os — always use TVUS for placental location (TAUS inaccurate). If anterior low-lying placenta in prior cesarean patient — assess for placenta accreta spectrum (PAS): loss of retroplacental clear space, lacunae, bladder wall irregularity.",
      },
      {
        stepNumber: 4,
        title: "Fetal biometry and growth assessment",
        description:
          "Measure 4 biometric parameters: BPD (biparietal diameter — axial view at level of thalami and cavum septum pellucidum; measure outer to inner calvarial table), HC (head circumference), AC (abdominal circumference — axial view at level of stomach, portal-umbilical vein junction; measure outer to outer), FL (femur length — longest axis of ossified shaft). Enter into gestational age and weight estimation formula (Hadlock). Estimated fetal weight (EFW): < 10th percentile = small for gestational age (SGA) → assess for FGR; > 90th percentile = large for gestational age (LGA) → assess for GDM, macrosomia.",
        tip: "Abdominal circumference is the most sensitive single biometric parameter for detecting IUGR. AC < 10th percentile with abnormal Doppler (absent/reversed end-diastolic flow in umbilical artery) = severe FGR — delivery planning required.",
      },
      {
        stepNumber: 5,
        title: "Biophysical profile (BPP) — Third trimester",
        description:
          "BPP assesses 5 parameters, each scored 0 (absent) or 2 (present), in a 30-minute observation window: (1) Non-stress test (NST) — reactive (2 accelerations of ≥ 15 bpm × ≥ 15 sec in 20 min) = 2; (2) Fetal breathing movements — ≥ 1 episode of ≥ 30 seconds = 2; (3) Gross body movement — ≥ 3 discrete movements = 2; (4) Fetal tone — ≥ 1 episode of extension/flexion = 2; (5) Amniotic fluid — ≥ 1 pocket ≥ 2 cm = 2. Total score 8–10 = normal; 6 = equivocal (repeat in 24h); 4 or less = abnormal (delivery often indicated). Modified BPP = NST + AFI (faster, used for routine surveillance).",
        tip: "BPP is indicated for postdates pregnancy, GDM, hypertension in pregnancy, IUGR, decreased fetal movement, and other high-risk conditions. Perform after 26 weeks gestation (fetal behaviors are not mature before this).",
      },
    ],
    complications: [
      "No known complications from diagnostic ultrasound at standard clinical exposure levels — FDA has approved obstetric US as safe when used appropriately",
      "Incidental findings requiring further workup (soft markers for aneuploidy: choroid plexus cysts, echogenic bowel, echogenic intracardiac focus, renal pyelectasis, shortened femur/humerus, nuchal fold thickening)",
      "False-positive or false-negative findings — US has limitations for small or posterior defects, obese patients, oligohydramnios, suboptimal fetal position",
      "Psychologic impact of abnormal findings — communicate with sensitivity and arrange appropriate counseling and referrals",
    ],
    documentation:
      "Obstetric US report should include: indication, gestational age by LMP and US, fetal number, cardiac activity (present/absent, rate), presentation (vertex/breech/transverse), placental location and grade, AFI or SDP (cm), estimated fetal weight with percentile, biometric measurements (BPD, HC, AC, FL) with GA equivalents, anatomy survey status (complete/incomplete — specific structures noted), cervical length if measured, Doppler results if performed, overall impression.",
  },
  {
    id: "wh-proc-postpartum-assessment",
    rotation: "womens-health",
    name: "Comprehensive Postpartum Assessment (4th Trimester)",
    category: "Postpartum Care",
    overview:
      "The postpartum period ('fourth trimester') spans from delivery through 12 weeks postpartum. ACOG recommends an initial contact within 3 weeks postpartum (earlier for high-risk patients: preeclampsia, GDM, mood disorders) and a comprehensive visit by 12 weeks. The postpartum visit encompasses physical recovery assessment, mental health screening, lactation support, contraception counseling, chronic disease management optimization, and addressing the patient's overall transition to parenthood. The BUBBLE-HE framework (Breasts, Uterus, Bladder, Bowel, Lochia, Episiotomy/Laceration, Homan's/DVT assessment, Emotional state) guides the systematic physical exam.",
    indications: [
      "All postpartum patients — routine care at 1–3 weeks and 6–12 weeks",
      "High-risk postpartum: preeclampsia/hypertension (BP check at 72h and within 7–10 days post-delivery)",
      "Gestational diabetes (postpartum GTT at 4–12 weeks to screen for persistent DM; A1c at 4–12 weeks is acceptable alternative)",
      "Postpartum depression screening (EPDS) at every postpartum contact",
      "Wound check for cesarean incision or perineal laceration/episiotomy repair",
      "Lactation support and breastfeeding troubleshooting",
    ],
    contraindications: [
      "No contraindications — postpartum assessment is a routine, essential component of obstetric care",
    ],
    equipment: [
      "Blood pressure cuff and sphygmomanometer",
      "Speculum and supplies for pelvic exam if indicated",
      "Edinburgh Postnatal Depression Scale (EPDS) questionnaire",
      "PHQ-9 (alternative to EPDS)",
      "Fundal palpation (hands only)",
      "75g glucose drink for postpartum OGTT (if GDM patient)",
      "Contraceptive counseling materials",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Vital signs and general review",
        description:
          "Obtain BP (critical in post-preeclampsia patients), pulse, weight (document weight relative to pre-pregnancy). Review delivery records: mode of delivery (SVD/cesarean/operative vaginal), complications, blood loss, newborn status. Review current medications (iron supplementation for anemia, antihypertensives if continued, thyroid medications, psychiatric medications).",
        tip: "Postpartum hypertension peaks at 3–6 days and can persist for up to 6 weeks. Any patient with preeclampsia should be seen within 72 hours of delivery. Systolic BP > 150 or diastolic > 100 postpartum requires same-day evaluation.",
      },
      {
        stepNumber: 2,
        title: "BUBBLE-HE physical assessment",
        description:
          "B — Breasts: assess for engorgement, mastitis (unilateral erythema, warmth, tenderness + fever = treat with dicloxacillin/cephalexin × 10 days; continue breastfeeding or pumping), nipple cracking/thrush (treat with nystatin cream). U — Uterus: palpate fundal height (should be non-palpable by 10–14 days postpartum). B — Bladder: assess for urinary retention, UTI symptoms, stress incontinence (very common — pelvic floor PT). B — Bowel: constipation (common with opioids and iron supplementation), hemorrhoids. L — Lochia: color and duration (rubra → serosa → alba); prolonged heavy bright red bleeding suggests retained POC or subinvolution → US to evaluate. E — Episiotomy/Laceration: inspect perineal repair (well-healed, scar tenderness, granulation tissue). H — Homan's / DVT: assess for signs of DVT (calf swelling, tenderness, erythema — Doppler US if suspected; Homan's sign NOT reliable). E — Emotional: PHQ-9 or EPDS, assess support systems.",
        tip: "Subinvolution: uterus boggy and larger than expected at 6-week visit + abnormal bleeding → US for retained products of conception (POC). Management: methylergonovine 0.2 mg PO q6h × 2–7 days (uterotonic to stimulate involution) or suction curettage.",
      },
      {
        stepNumber: 3,
        title: "Mental health screening (EPDS)",
        description:
          "Administer Edinburgh Postnatal Depression Scale (EPDS) — 10-item validated self-report questionnaire. Score each item 0–3. Total score interpretation: ≤ 9 = low risk; 10–12 = borderline (rescreen in 2 weeks); ≥ 13 = probable PPD → psychiatric referral. Item 10 (self-harm): ANY positive response = immediate safety assessment regardless of total score. Document exact score and action taken.",
        tip: "Baby blues (50–85% of women): mood lability, tearfulness, anxiety — onset day 3–5, resolves by day 14. PPD (10–15%): onset any time within first year, persists beyond 2 weeks, interferes with function. Postpartum psychosis (rare 1–2/1,000): onset within 2 weeks, hallucinations, confusion, manic symptoms — PSYCHIATRIC EMERGENCY requiring immediate hospitalization. Risk factors for PPD: prior depression, poor social support, unplanned pregnancy, traumatic delivery, NICU admission.",
      },
      {
        stepNumber: 4,
        title: "Lactation support and infant feeding assessment",
        description:
          "Assess breastfeeding status: exclusive breastfeeding, supplementation, pumping. Evaluate latch, nipple pain (sign of poor latch or thrush — white coating in infant's mouth + painful maternal nipples). Engorgement management: frequent feeding q2–3h, warm compresses before feeding, cold packs after. Low milk supply: ensure adequate hydration, demand feeding, proper latch. Discuss galactagogues (fenugreek — limited evidence; domperidone — not FDA approved in US). Formula supplementation: document without judgment — maternal-infant bonding is the priority.",
        tip: "Mastitis: fever + unilateral breast erythema/induration/pain — continue breastfeeding to prevent abscess formation. Treat empirically with dicloxacillin (covers S. aureus). If no improvement in 24h, culture milk and reconsider MRSA coverage (TMP-SMX). Breast abscess: fluctuant area requiring US-guided aspiration or I&D.",
      },
      {
        stepNumber: 5,
        title: "Contraception counseling and initiation",
        description:
          "Review contraceptive options appropriate to timing and breastfeeding status. USMEC categories by method and postpartum timing: (1) Combined hormonal methods: avoid < 21 days (VTE risk); USMEC Cat 3 for breastfeeding at 21–42 days; Cat 2 after 42 days if breastfeeding. (2) Progestin-only methods (POP, implant, DMPA): Cat 1 immediately postpartum — safe for breastfeeding. (3) LNG-IUD or copper IUD: can insert immediately postpartum (within 10 min of placenta) or interval (≥ 4 weeks); discuss expulsion rate higher with immediate insertion. Discuss return to fertility: ovulation can return as early as 4 weeks (non-breastfeeding) or 6 weeks (exclusive breastfeeding). Lactational Amenorrhea Method (LAM): > 99% effective only if all three criteria met (exclusive breastfeeding, amenorrhea, < 6 months postpartum).",
        tip: "The 6-week postpartum visit is often the last opportunity to address contraception before the patient returns to routine gynecologic care — always address it proactively, document counseling, and offer placement of LARC if desired.",
      },
      {
        stepNumber: 6,
        title: "GDM follow-up and chronic disease management",
        description:
          "GDM patients: postpartum glucose screening at 4–12 weeks (75g 2-hour OGTT preferred over fasting glucose alone — FPG misses up to 50% of postpartum DM). Interpretation: normal (FPG < 100, 2h < 140), prediabetes (FPG 100–125 or 2h 140–199), DM (FPG ≥ 126 or 2h ≥ 200). Counsel: 50% of GDM patients develop T2DM within 10 years; screen annually with HbA1c; weight loss, exercise, and breastfeeding reduce risk. Hypertension: continue antihypertensives if started for severe hypertension; BP should normalize within 12 weeks — if persistent, evaluate for chronic HTN. Thyroid: postpartum thyroiditis in 5–10% (hyperthyroid phase at 1–4 months → hypothyroid phase at 4–8 months → most recover by 12 months).",
      },
    ],
    complications: [
      "Missed postpartum depression — leading cause of maternal mortality in the first year postpartum (suicide exceeds hemorrhage and preeclampsia as a cause of maternal death)",
      "Delayed diagnosis of retained products of conception — presents as persistent bleeding, subinvolution, infection",
      "Postpartum thyroiditis — often missed because symptoms overlap with normal postpartum fatigue",
      "Perineal wound complications — dehiscence, infection, granulation tissue (silver nitrate application in office)",
      "Pelvic floor dysfunction — urinary and fecal incontinence, pelvic organ prolapse — refer to pelvic floor physical therapy",
      "Failure to screen for postpartum DM in GDM patients — 50% develop T2DM within 10 years without intervention",
    ],
    documentation:
      "Postpartum visit ___ weeks. Mode of delivery: ___. BUBBLE-HE assessment: Breasts: ___. Uterus: non-palpable/___. Bladder: voiding qs/UTI symptoms. Bowel: ___. Lochia: resolved/___. Perineum/incision: healing well/___. Homan's: no DVT signs. Emotional: EPDS score ___/30, no SI. Breastfeeding status: ___. Contraception: ___ initiated/discussed. Labs ordered: ___. GDM postpartum OGTT result: ___. BP: ___. Follow-up plan: ___.",
  },
];
