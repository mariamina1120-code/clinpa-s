import type { Condition } from "@/types";

export const womensHealthConditions: Condition[] = [
  // ── OBSTETRICS ─────────────────────────────────────────────────────────────
  {
    id: "wh-cond-preeclampsia",
    rotation: "womens-health",
    name: "Preeclampsia & HELLP Syndrome",
    icdCode: "O14.90",
    category: "Obstetrics",
    definition:
      "New-onset hypertension (BP ≥ 140/90 mmHg on two occasions) after 20 weeks gestation with proteinuria OR severe features (thrombocytopenia, renal insufficiency, impaired liver function, pulmonary edema, or neurologic symptoms). HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe variant. Delivery is the only cure.",
    diagnosticCriteria:
      "BP ≥ 140/90 after 20 weeks (previously normotensive) PLUS proteinuria ≥ 300 mg/24h (or P:Cr ≥ 0.3) OR any severe feature: BP ≥ 160/110, PLT < 100k, Cr > 1.1, AST/ALT > 2× ULN, pulmonary edema, new severe headache/visual symptoms. HELLP: LDH > 600 + elevated LFTs + PLT < 100k. Eclampsia: new-onset seizure in preeclamptic patient.",
    presentation: {
      chiefComplaint: [
        "\"I have a bad headache and my vision is blurry\"",
        "\"My hands and face are really swollen\"",
        "\"I have pain under my right ribs\"",
      ],
      associatedSymptoms: [
        "Severe frontal or occipital headache",
        "Visual disturbances (scotomata, blurring, photophobia)",
        "RUQ or epigastric pain (hepatic capsule distension)",
        "Sudden weight gain ≥ 2 lb/week, facial/hand edema",
        "Nausea/vomiting with HELLP",
        "Decreased fetal movement (placental insufficiency)",
      ],
      demographics:
        "Any pregnant woman after 20 weeks; highest risk: nulliparous, prior preeclampsia (7× risk), multifetal gestation, chronic HTN, pregestational DM, obesity, antiphospholipid syndrome, Black race (2–3× higher incidence), age > 35.",
    },
    distinguishingFeatures:
      "Hypertension after 20 weeks (not before), proteinuria, edema triad; HELLP: thrombocytopenia + hemolysis + elevated LFTs; eclampsia adds seizures; chronic HTN predates 20 weeks; gestational HTN has no proteinuria or severe features",
    redFlags: [
      "BP ≥ 160/110 — treat within 30–60 min (risk of maternal stroke)",
      "Platelet count < 100,000 (HELLP progression, DIC risk)",
      "Severe headache unresponsive to acetaminophen",
      "Visual symptoms (scotomata, sudden vision loss)",
      "RUQ pain (hepatic rupture risk)",
      "Pulmonary edema (shortness of breath, O2 sat < 95%)",
      "Altered mental status or seizure (eclampsia)",
      "Non-reassuring fetal status / absent Doppler flow",
    ],
    mnemonics: [
      {
        name: "HELLP",
        content:
          "H — Hemolysis (LDH > 600, schistocytes, microangiopathic anemia)\nE — Elevated Liver enzymes (AST/ALT > 2× ULN)\nL — Low Platelets (< 100,000/µL)\nL — (and beware: may occur without HTN or proteinuria)\nP — Prompt delivery is the only cure",
      },
      {
        name: "Severe Features Mnemonic: PLIERS",
        content:
          "P — Platelets < 100k\nL — Liver enzymes > 2× ULN or unremitting RUQ pain\nI — Impaired renal function (Cr > 1.1 or doubling)\nE — Edema of lung (pulmonary edema)\nR — Right upper quadrant or epigastric pain unresponsive to meds\nS — Symptoms: headache or visual changes",
      },
    ],
    pimpingQuestions: [
      "What is the discriminatory BP threshold that requires immediate treatment and within what timeframe?",
      "What is the mechanism of action of magnesium sulfate in preeclampsia, and is it an antihypertensive?",
      "What are the contraindications to magnesium use, and what is the antidote for magnesium toxicity?",
      "At what gestational age do you deliver preeclampsia without severe features vs with severe features?",
      "Name three antihypertensive agents used acutely in preeclampsia. Which is contraindicated in asthma? In hepatic disease?",
      "What is low-dose aspirin prophylaxis, who gets it, and when should it be started?",
      "Distinguish preeclampsia from chronic HTN vs gestational HTN vs superimposed preeclampsia.",
      "What is Sheehan syndrome and what is its mechanism?",
    ],
  },
  {
    id: "wh-cond-gdm",
    rotation: "womens-health",
    name: "Gestational Diabetes Mellitus (GDM)",
    icdCode: "O24.419",
    category: "Obstetrics",
    definition:
      "Carbohydrate intolerance first recognized during pregnancy, resulting from inadequate pancreatic insulin secretion against progressive placental-hormone-driven insulin resistance. Affects 6–9% of US pregnancies. Associated with macrosomia, shoulder dystocia, neonatal hypoglycemia, and 50% lifetime risk of T2DM for the mother.",
    diagnosticCriteria:
      "Two-step approach (US standard): Step 1 — 1-hour 50g glucose challenge test (GCT), non-fasting; positive if ≥ 130–140 mg/dL. Step 2 — 3-hour 100g OGTT (fasting); GDM if ≥ 2 values abnormal (Carpenter-Coustan: fasting ≥ 95, 1h ≥ 180, 2h ≥ 155, 3h ≥ 140). One-step (IADPSG): 75g OGTT, one abnormal value (fasting ≥ 92, 1h ≥ 180, 2h ≥ 153) = GDM. Screen at 24–28 weeks; screen high-risk women in first trimester.",
    presentation: {
      chiefComplaint: [
        "Usually asymptomatic — found on routine screening",
        "\"My baby is measuring large on ultrasound\"",
        "\"I've been drinking a lot of water and urinating frequently\"",
      ],
      associatedSymptoms: [
        "Polyuria, polydipsia, glucosuria (nonspecific in pregnancy)",
        "Large-for-gestational-age fetus (AC ≥ 90th percentile on US)",
        "Polyhydramnios (fetal polyuria from hyperglycemia)",
        "Recurrent yeast infections",
      ],
      demographics:
        "All pregnant women screened at 24–28 weeks; highest risk: BMI ≥ 25, prior GDM, prior macrosomic infant, family history T2DM, Hispanic/Black/Asian/Native American ethnicity, PCOS, age > 25.",
    },
    distinguishingFeatures:
      "Onset after conception (vs pregestational DM which predates pregnancy); HbA1c < 6.5% at first prenatal visit excludes pregestational DM; GDM resolves postpartum in most but recurs in subsequent pregnancies",
    redFlags: [
      "Fasting glucose ≥ 126 or HbA1c ≥ 6.5% in first trimester (= pregestational DM, not GDM)",
      "Fetal estimated weight ≥ 4,500 g (macrosomia — shoulder dystocia risk)",
      "Poorly controlled sugars despite maximal oral agents (requires insulin)",
      "Hydramnios + LGA (fetal hyperinsulinism with fetal decompensation risk)",
      "Stillbirth risk with uncontrolled GDM — initiate fetal surveillance",
    ],
    mnemonics: [
      {
        name: "GDM Monitoring Targets",
        content:
          "Fasting: ≤ 95 mg/dL\n1-hour postprandial: ≤ 140 mg/dL\n2-hour postprandial: ≤ 120 mg/dL\n\nRemember: 95 / 140 / 120 (fasting lowest, 1h highest, 2h intermediate)",
      },
    ],
    pimpingQuestions: [
      "Describe the two-step GDM screening approach and the thresholds at each step.",
      "What causes neonatal hypoglycemia in infants of GDM mothers?",
      "Why is insulin preferred over oral agents for GDM pharmacotherapy?",
      "What is the delivery timing for diet-controlled GDM vs medication-controlled GDM?",
      "What postpartum follow-up is required after GDM, and why?",
      "What are the fetal complications of uncontrolled GDM?",
      "What placental hormones drive insulin resistance in pregnancy?",
    ],
  },
  {
    id: "wh-cond-ectopic",
    rotation: "womens-health",
    name: "Ectopic Pregnancy",
    icdCode: "O00.90",
    category: "Obstetrics",
    definition:
      "Implantation of a fertilized ovum outside the uterine cavity; 95–97% occur in the fallopian tube (ampulla most common). Leading cause of first-trimester maternal death, accounting for 9% of all pregnancy-related deaths. Occurs in ~2% of all pregnancies. Ruptured ectopic is a surgical emergency.",
    diagnosticCriteria:
      "Positive β-hCG + no IUP on TVUS above the discriminatory zone (β-hCG ≥ 1,500–3,500 mIU/mL). Subnormal β-hCG rise (< 53% in 48h) suggests ectopic or failing IUP. Definitive: extra-uterine gestational sac on TVUS. Ruptured ectopic: hemodynamic instability + positive β-hCG + no IUP → emergent surgery without further imaging. Progesterone < 5 ng/mL = non-viable pregnancy (not diagnostic of ectopic alone).",
    presentation: {
      chiefComplaint: [
        "\"I have a positive pregnancy test but sharp pain on one side\"",
        "\"I'm having irregular spotting and cramping\"",
        "\"I passed out — I'm pregnant and have pelvic pain\"",
      ],
      associatedSymptoms: [
        "Amenorrhea (missed period)",
        "Unilateral pelvic or adnexal pain (initially dull, sharp with rupture)",
        "Vaginal bleeding (often light spotting or irregular)",
        "Shoulder tip pain from diaphragmatic irritation (hemoperitoneum — Kehr's sign)",
        "Hemodynamic instability (tachycardia, hypotension, syncope) with rupture",
        "Cervical motion tenderness, adnexal mass on bimanual exam",
      ],
      demographics:
        "Reproductive-age women; highest risk: prior ectopic pregnancy (10× increased risk), prior PID/salpingitis, IUD in place (if pregnancy occurs with IUD, ~50% ectopic), prior tubal surgery, endometriosis, IVF, smoking.",
    },
    distinguishingFeatures:
      "Classic triad (only 50% have all three): amenorrhea + vaginal bleeding + unilateral pain; IUD in place + positive β-hCG → 50% ectopic; subnormal β-hCG rise key finding; ruptured = hemodynamic instability + hemoperitoneum",
    redFlags: [
      "Hemodynamic instability (tachycardia, hypotension) — ruptured ectopic, emergent surgery",
      "Syncope or near-syncope in pregnancy — hemoperitoneum",
      "Shoulder tip pain — diaphragmatic irritation from hemoperitoneum",
      "β-hCG rising appropriately but no IUP seen (possible heterotopic if IVF)",
      "Severe adnexal tenderness with peritoneal signs",
    ],
    mnemonics: [
      {
        name: "MTX Contraindications: IPPE",
        content:
          "I — Immunodeficiency (IgA deficiency)\nP — Pulmonary, hepatic, or renal disease\nP — Peptic ulcer disease (active)\nE — Embryonic cardiac activity on US\n\nAlso: hemodynamic instability, large hematoma, breastfeeding, β-hCG > 5,000 (relative)",
      },
    ],
    pimpingQuestions: [
      "What is the discriminatory zone, and what does it mean clinically?",
      "Why does an IUD NOT prevent ectopic pregnancy?",
      "What are the indications and contraindications for methotrexate in ectopic pregnancy?",
      "What β-hCG rise is expected in a normal IUP? What rise is worrisome for ectopic?",
      "Salpingostomy vs salpingectomy — when do you choose each?",
      "Why must you give RhoGAM to Rh-negative patients with ectopic pregnancy?",
      "What are the day 4/7 rules for monitoring methotrexate treatment response?",
    ],
  },
  {
    id: "wh-cond-pph",
    rotation: "womens-health",
    name: "Postpartum Hemorrhage (PPH)",
    icdCode: "O72.1",
    category: "Obstetrics",
    definition:
      "Blood loss ≥ 500 mL after vaginal delivery or ≥ 1,000 mL after cesarean, or any amount causing hemodynamic instability. Leading cause of maternal mortality worldwide (27% of maternal deaths). Primary PPH occurs within 24 hours; secondary PPH between 24 hours and 12 weeks. Uterine atony accounts for 70–80% of cases.",
    diagnosticCriteria:
      "Quantitative blood loss (QBL) ≥ 500 mL (vaginal) or ≥ 1,000 mL (C-section). Assess for 4 T's etiology: Tone (boggy uterus), Trauma (inspect for lacerations), Tissue (inspect placenta for completeness), Thrombin (coagulopathy — fibrinogen < 200 predicts progression; < 100 = DIC). Labs: CBC, PT/INR, aPTT, fibrinogen, type & crossmatch.",
    presentation: {
      chiefComplaint: [
        "Excessive vaginal bleeding after delivery",
        "Soft, boggy uterus not responding to fundal massage",
        "Tachycardia, hypotension, pallor after delivery",
      ],
      associatedSymptoms: [
        "Soft, non-contracted uterus (atony — most common)",
        "Visible cervical, vaginal, or perineal lacerations (trauma)",
        "Incomplete placenta (missing cotyledons = retained tissue)",
        "Signs of shock: tachycardia (first sign), hypotension, diaphoresis, altered mental status",
        "Lateral uterine deviation (full bladder preventing contraction — often overlooked)",
      ],
      demographics:
        "Any parturient; highest risk: grand multiparity, uterine overdistension (twins, macrosomia, polyhydramnios), prolonged labor, chorioamnionitis, placenta previa/accreta, prior uterine surgery, operative delivery, coagulopathy.",
    },
    distinguishingFeatures:
      "4 T's determine etiology: boggy uterus = atony (Tone), lacerations = Trauma, retained placenta = Tissue, abnormal clotting = Thrombin; treat the identified cause while providing simultaneous resuscitation",
    redFlags: [
      "Heart rate > 110 — hemorrhagic shock developing",
      "Hypotension — already significant blood loss (class III/IV shock)",
      "Fibrinogen < 200 mg/dL — high risk progression to severe hemorrhage",
      "Placenta accreta spectrum (prior C-section + anterior placenta previa)",
      "Uterus fails to contract despite uterotonics (refractory atony)",
      "Bleeding > 1,500 mL — activate massive transfusion protocol",
    ],
    mnemonics: [
      {
        name: "4 T's of PPH Causes",
        content:
          "T — TONE (70%): uterine atony — boggy, soft uterus\nT — TRAUMA (20%): lacerations, uterine rupture, hematoma\nT — TISSUE (9%): retained placenta or placental fragments\nT — THROMBIN (1%): coagulopathy (DIC, vWD, hemophilia)",
      },
      {
        name: "Uterotonic Sequence: OMC",
        content:
          "O — Oxytocin (first-line IV infusion — do NOT bolus)\nM — Methylergonovine (contraindicated in HTN)\nC — Carboprost/15-methyl-PGF2α (contraindicated in asthma)\nMisoprostol (rectal/sublingual — useful when no IV access)\nTransexamic acid (TXA) within 3 hours (WOMAN trial — reduces death 30%)",
      },
    ],
    pimpingQuestions: [
      "List the 4 T's of PPH and give one example of each.",
      "What is active management of the third stage of labor (AMTSL)?",
      "Why must methylergonovine be avoided in hypertensive patients?",
      "Why must carboprost be avoided in asthmatic patients?",
      "Describe the Bakri balloon and when it is used.",
      "What is the WOMAN trial and what did it show about tranexamic acid?",
      "What is Sheehan syndrome — mechanism, timing, and clinical features?",
      "What blood product ratio should be used in massive transfusion protocol?",
    ],
  },
  {
    id: "wh-cond-preterm-labor",
    rotation: "womens-health",
    name: "Preterm Labor & Preterm Birth",
    icdCode: "O60.00",
    category: "Obstetrics",
    definition:
      "Regular uterine contractions with cervical change before 37 completed weeks of gestation. Preterm birth (< 37 weeks) is the leading cause of neonatal mortality and morbidity in the US, complicating 10–12% of deliveries. Preterm labor (PTL) is the clinical diagnosis requiring tocolysis, antenatal corticosteroids, and GBS prophylaxis in appropriate candidates.",
    diagnosticCriteria:
      "Regular contractions (≥ 4/20 min or ≥ 8/hr) with documented cervical change (dilation ≥ 2 cm, effacement ≥ 80%, or progressive change on serial exams) at 20+0 to 36+6 weeks. Cervical length (CL) < 20 mm on TVUS at < 34 weeks is highly predictive. Fetal fibronectin (fFN): negative result (< 50 ng/mL) in the presence of intact membranes and CL > 20 mm has high negative predictive value (NPV ~99%) — useful to RULE OUT preterm birth within 7–14 days.",
    presentation: {
      chiefComplaint: [
        "\"I'm having contractions and I'm only 30 weeks\"",
        "\"I feel pelvic pressure and a sense that the baby is pushing down\"",
        "\"I have low back pain that comes and goes\"",
      ],
      associatedSymptoms: [
        "Regular, painful uterine contractions",
        "Pelvic pressure or heaviness",
        "Low backache (rhythmic, radiating to thighs)",
        "Vaginal discharge change or bloody show",
        "Leakage of fluid (if PPROM — premature preterm rupture of membranes)",
      ],
      demographics:
        "Prior preterm birth is the strongest risk factor (3× increased risk). Other risk factors: cervical insufficiency (short cervix < 25 mm), uterine anomalies (bicornuate, septate), multifetal gestation, PPROM, infections (BV, UTI, chorioamnionitis), smoking, low socioeconomic status, prior cervical procedures (LEEP).",
    },
    distinguishingFeatures:
      "Distinguish true PTL from Braxton-Hicks contractions (irregular, no cervical change); PPROM (documented fluid leakage with pooling, ferning, nitrazine positive — different management); cervical insufficiency (painless dilation without contractions)",
    redFlags: [
      "Gestational age < 28 weeks with active labor (extreme prematurity)",
      "Prolapsed umbilical cord (obstetric emergency)",
      "Non-reassuring fetal status during PTL",
      "Signs of chorioamnionitis (fever, uterine tenderness, purulent discharge) — delivery indicated",
      "Ruptured membranes + contractions (PPROM — infection risk with prolonged latency)",
      "Cervical dilation > 4 cm (less likely to respond to tocolysis)",
    ],
    mnemonics: [
      {
        name: "Preterm Birth Management Bundle: CAST",
        content:
          "C — Corticosteroids (betamethasone 12 mg IM × 2 doses, 24h apart) — fetal lung maturity < 34 weeks\nA — Antibiotics for GBS prophylaxis (PCN G; use ampicillin if unknown GBS status)\nS — Sulfate of magnesium (MgSO₄) — neuroprotection for babies < 32 weeks\nT — Tocolysis (consider if ≤ 34 weeks, cervix < 4 cm, to allow steroid course) — indomethacin < 32 weeks; nifedipine ≥ 32 weeks",
      },
    ],
    pimpingQuestions: [
      "What is the clinical difference between preterm labor and cervical insufficiency?",
      "What is the role of fetal fibronectin, and when is it most clinically useful?",
      "What gestational age is antenatal betamethasone indicated, and what does it prevent?",
      "What is the indication and mechanism for magnesium sulfate as neuroprotection?",
      "Why is indomethacin avoided after 32 weeks?",
      "What is the evidence for 17-hydroxyprogesterone (17-OHPC) in preventing recurrent preterm birth?",
      "Describe progesterone supplementation indications for short cervix.",
    ],
  },
  {
    id: "wh-cond-placenta-previa",
    rotation: "womens-health",
    name: "Placenta Previa & Placenta Accreta Spectrum",
    icdCode: "O44.00",
    category: "Obstetrics",
    definition:
      "Placenta previa: placental implantation over or adjacent to the internal cervical os. Placenta accreta spectrum (PAS): abnormally adherent placenta — accreta (superficial, most common), increta (invades myometrium), percreta (penetrates uterine serosa/adjacent organs). PAS is the leading indication for peripartum hysterectomy.",
    diagnosticCriteria:
      "Placenta previa: TVUS showing placenta covering or within 2 cm of internal os at ≥ 20 weeks. Complete previa: covers os entirely; marginal: edge ≤ 2 cm from os. PAS diagnosis: TVUS findings (loss of retroplacental clear space, placental lacunae, thinning of myometrium < 1 mm, color flow Doppler hypervascularity) in woman with risk factors (prior uterine surgery). MRI for posterior previa or suspected percreta. Definitive diagnosis is histopathologic.",
    presentation: {
      chiefComplaint: [
        "\"I had sudden, painless bright red bleeding — I'm 30 weeks\"",
        "\"I was told my placenta is covering my cervix on ultrasound\"",
      ],
      associatedSymptoms: [
        "Painless vaginal bleeding (classic presentation — vs placental abruption which is painful)",
        "Bleeding often resolves spontaneously then recurs (sentinel bleed)",
        "Malpresentation (transverse lie, breech) — placenta blocks engagement",
        "Soft, non-tender uterus (vs abruption = rigid, tender)",
      ],
      demographics:
        "PAS risk factors: prior cesarean section (each C-section increases accreta risk — accreta in 3% with 1 prior C-section, 40% with ≥ 4), prior uterine surgery, prior placenta previa, advanced maternal age, multiparity, uterine fibroids.",
    },
    distinguishingFeatures:
      "Painless bright red bleeding = previa; painful bleeding with rigid uterus = abruption; previa managed expectantly until 36–37 weeks then planned C-section; do NOT perform digital cervical exam if previa suspected (risk of hemorrhage)",
    redFlags: [
      "Active heavy vaginal bleeding with previa — hospitalize, type and crossmatch",
      "Prior C-section + anterior previa = high PAS risk (plan for multidisciplinary delivery)",
      "Uterine contractions + previa (risk of catastrophic hemorrhage with cervical dilation)",
      "Suspected percreta (bladder invasion — hematuria, Doppler hypervascularity)",
    ],
    mnemonics: [
      {
        name: "Previa vs Abruption: PAB",
        content:
          "P — Painless bleeding → Previa\nA — Abruption → Abdominal pain + tender rigid uterus + concealed or revealed bleeding\nB — Both → NO digital cervical exam (risk of hemorrhage in previa)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between placenta accreta, increta, and percreta?",
      "Why is digital cervical examination contraindicated in suspected placenta previa?",
      "What is the delivery gestational age for stable placenta previa without PAS?",
      "What prior surgery is most commonly associated with placenta accreta spectrum?",
      "How does placenta previa present differently from placental abruption?",
      "What is the recommended management for confirmed PAS at delivery?",
    ],
  },

  // ── GYNECOLOGY ─────────────────────────────────────────────────────────────
  {
    id: "wh-cond-pcos",
    rotation: "womens-health",
    name: "Polycystic Ovary Syndrome (PCOS)",
    icdCode: "E28.2",
    category: "Gynecology",
    definition:
      "Most common endocrine disorder in reproductive-age women (6–12%), characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology. Leading cause of anovulatory infertility. Strongly associated with insulin resistance, metabolic syndrome, and long-term risks of T2DM and endometrial hyperplasia. Diagnosis requires Rotterdam criteria and exclusion of other causes.",
    diagnosticCriteria:
      "Rotterdam Criteria: 2 of 3 required — (1) Oligo- or anovulation (cycles > 35 days or < 8/year); (2) Clinical or biochemical hyperandrogenism (hirsutism, acne, elevated testosterone); (3) Polycystic ovarian morphology on US (≥ 20 follicles/ovary OR ovarian volume > 10 mL). Must EXCLUDE: thyroid disease (TSH), hyperprolactinemia (prolactin), non-classic CAH (17-OHP), Cushing's syndrome, androgen-secreting tumor (testosterone > 200 ng/dL).",
    presentation: {
      chiefComplaint: [
        "\"My periods are very irregular — sometimes I go months without one\"",
        "\"I have facial hair and acne that won't go away\"",
        "\"I've been trying to get pregnant for a year without success\"",
      ],
      associatedSymptoms: [
        "Oligomenorrhea or amenorrhea (most common presenting symptom)",
        "Hirsutism (Ferriman-Gallwey score ≥ 8) — face, chest, abdomen",
        "Acne, especially along the jaw and chin",
        "Androgenetic alopecia (temporal hair thinning)",
        "Central obesity (50–80% of PCOS patients)",
        "Acanthosis nigricans (velvety hyperpigmentation in skin folds — insulin resistance marker)",
      ],
      demographics:
        "Reproductive-age women; onset perimenarchal; strong genetic component (50% prevalence in first-degree relatives); all ethnicities but higher clinical expression in South Asian and Middle Eastern women.",
    },
    distinguishingFeatures:
      "LH:FSH ratio typically > 2:1; mildly elevated testosterone (< 150 ng/dL — if > 200, exclude tumor); low SHBG (increases free androgen); polycystic morphology alone is NOT diagnostic; must exclude secondary causes",
    redFlags: [
      "Testosterone > 200 ng/dL (androgen-secreting tumor — rapid virilization)",
      "Very rapid onset virilization (deepening voice, clitoromegaly)",
      "Prolonged amenorrhea without progestogen withdrawal (endometrial hyperplasia risk)",
      "Fasting glucose ≥ 126 or HbA1c ≥ 6.5% (T2DM)",
    ],
    mnemonics: [
      {
        name: "Rotterdam 2 of 3: OHA",
        content:
          "O — Ovulatory dysfunction (oligomenorrhea/amenorrhea)\nH — Hyperandrogenism (clinical: hirsutism/acne; or biochemical: elevated testosterone)\nA — Appearance of ovaries (polycystic morphology on US)\n\nNeed 2 of 3, AFTER excluding thyroid, prolactin, CAH, Cushing's, tumor",
      },
    ],
    pimpingQuestions: [
      "List the Rotterdam diagnostic criteria for PCOS and what must be excluded.",
      "Why do women with PCOS have an increased risk of endometrial cancer?",
      "What is the preferred first-line ovulation induction agent for PCOS-related infertility (letrozole vs clomiphene)?",
      "What is the role of metformin in PCOS?",
      "Why must women with anovulatory PCOS receive periodic progestogen?",
      "What are the long-term metabolic risks of PCOS?",
      "How does spironolactone work for hirsutism and what contraception is required?",
    ],
  },
  {
    id: "wh-cond-endometriosis",
    rotation: "womens-health",
    name: "Endometriosis",
    icdCode: "N80.0",
    category: "Gynecology",
    definition:
      "Presence of endometrial-like tissue (glands and stroma) outside the uterine cavity, most commonly on the ovaries, fallopian tubes, uterine ligaments, and pelvic peritoneum. Affects 6–10% of reproductive-age women; 30–50% of women with infertility. Characterized by chronic pelvic pain, dysmenorrhea, dyspareunia, and infertility. Definitive diagnosis requires surgical visualization (laparoscopy with biopsy).",
    diagnosticCriteria:
      "Clinical diagnosis presumed with classic symptoms. Definitive diagnosis: laparoscopy with histologic confirmation (endometrial glands + stroma outside uterus). CA-125 may be elevated but has low specificity. TVUS: may show ovarian endometrioma ('chocolate cyst' — homogeneous low-level internal echoes). MRI: preferred for deep infiltrating endometriosis involving rectum, bladder, ureter. ASRM staging (I–IV) based on extent of lesions and adhesions — does NOT correlate with symptom severity.",
    presentation: {
      chiefComplaint: [
        "\"I have severe cramps that start days before my period and last throughout\"",
        "\"Sex is very painful, especially with deep penetration\"",
        "\"I've been trying to get pregnant for over a year\"",
      ],
      associatedSymptoms: [
        "Dysmenorrhea (hallmark — cyclic pelvic pain, worsening over years)",
        "Dyspareunia (deep — posterior fornix, uterosacral involvement)",
        "Dyschezia (painful defecation during menses — rectovaginal involvement)",
        "Dysuria (bladder involvement)",
        "Chronic pelvic pain (non-cyclic in advanced disease)",
        "Infertility (30–50% of patients)",
        "Abnormal uterine bleeding (intermenstrual spotting)",
      ],
      demographics:
        "Reproductive-age women (peak ages 25–35); average diagnostic delay is 6–10 years. Risk factors: early menarche, short cycles (< 27 days), heavy/prolonged flow, nulliparity, family history (first-degree relative — 7× increased risk), uterine anomalies (outflow obstruction — retrograde menstruation theory).",
    },
    distinguishingFeatures:
      "Classic triad: dysmenorrhea + dyspareunia + infertility; uterosacral nodularity on rectovaginal exam; 'chocolate cyst' (endometrioma) on TVUS; symptoms are cyclic and worsen with menses; 3-D's: Dysmenorrhea, Dyspareunia, Dyschezia",
    redFlags: [
      "Suspected ureteral endometriosis (silent hydronephrosis — check renal function, imaging)",
      "Large endometrioma (> 4 cm) at risk of rupture or malignant transformation (clear cell/endometrioid ovarian cancer)",
      "Recurrent endometriomas after cystectomy (diminished ovarian reserve risk)",
      "Bowel obstruction from deep infiltrating endometriosis",
    ],
    mnemonics: [
      {
        name: "3 D's of Endometriosis",
        content:
          "D — Dysmenorrhea (cyclic, worsening, pre-menstrual onset)\nD — Dyspareunia (deep, posterior)\nD — Dyschezia (painful defecation with menses)\n\nPlus: Dysuria, infertility, and sometimes Diagnosis Delay (average 6–10 years)",
      },
    ],
    pimpingQuestions: [
      "What is the gold standard for diagnosing endometriosis?",
      "Describe the ASRM staging system for endometriosis — does stage correlate with pain severity?",
      "What medical treatments are used for endometriosis-related pain?",
      "What is an endometrioma and what is its characteristic appearance on ultrasound?",
      "How does endometriosis cause infertility?",
      "Why is early surgical treatment of endometriosis important for fertility preservation?",
      "What is the recurrence rate of endometriosis after surgery?",
    ],
  },
  {
    id: "wh-cond-fibroids",
    rotation: "womens-health",
    name: "Uterine Leiomyomas (Fibroids)",
    icdCode: "D25.9",
    category: "Gynecology",
    definition:
      "Benign smooth muscle tumors (leiomyomas) of the uterus — the most common benign pelvic tumor in women, occurring in up to 70–80% of women by age 50. Most are asymptomatic, but 20–25% cause heavy menstrual bleeding, pelvic pressure, bulk symptoms, or reproductive complications. Classification by location: submucosal (FIGO 0–2, into cavity — most symptomatic for bleeding and infertility), intramural (most common), subserosal (exophytic, into peritoneum — most symptomatic for pressure/bulk).",
    diagnosticCriteria:
      "Clinical + TVUS (first-line imaging): well-defined hypoechoic homogeneous mass(es) with posterior acoustic shadowing. MRI: superior for mapping location and number (especially pre-operatively); differentiates fibroids from adenomyosis. Saline infusion sonogram (SIS/sonohysterogram): evaluates submucosal component, cavity distortion — required before hysteroscopic resection. Hysteroscopy: diagnostic and therapeutic for submucosal fibroids. Biopsy NOT required unless rapid growth or atypical features (exclude sarcoma).",
    presentation: {
      chiefComplaint: [
        "\"My periods are extremely heavy — I soak through pads in an hour\"",
        "\"I feel pressure in my pelvis and feel like I need to urinate constantly\"",
        "\"I feel a mass in my lower abdomen\"",
      ],
      associatedSymptoms: [
        "Heavy menstrual bleeding (HMB) — leading cause of iron-deficiency anemia in premenopausal women",
        "Dysmenorrhea (especially submucosal fibroids)",
        "Pelvic pressure/fullness, bulk symptoms",
        "Urinary frequency/urgency (anterior fibroid compresses bladder)",
        "Constipation (posterior fibroid compresses rectum)",
        "Infertility or recurrent pregnancy loss (submucosal distortion of cavity)",
        "Acute pain from fibroid degeneration (pregnancy — 'red degeneration')",
      ],
      demographics:
        "Highest prevalence and severity in Black women (3× higher prevalence, earlier onset, larger/more numerous fibroids, more symptomatic). Risk factors: age, Black race, obesity, early menarche, nulliparity, family history. Protective: oral contraceptives, pregnancy, menopause (fibroids regress with estrogen decline).",
    },
    distinguishingFeatures:
      "Firm, irregular, non-tender uterine enlargement; TVUS shows discrete hypoechoic masses; adenomyosis shows diffuse uterine enlargement with heterogeneous myometrium (poorly defined areas); rapid growth in postmenopausal woman raises concern for leiomyosarcoma",
    redFlags: [
      "Rapid uterine growth in postmenopausal woman (leiomyosarcoma — rare but must exclude)",
      "Severe anemia (Hgb < 8) from chronic HMB requiring urgent treatment",
      "Acute severe pelvic pain in pregnancy (red degeneration)",
      "Urinary retention or hydronephrosis (cervical or broad ligament fibroid)",
    ],
    mnemonics: [
      {
        name: "Fibroid Locations: SIS",
        content:
          "S — Submucosal (into cavity) → Heavy bleeding + infertility (most symptomatic for bleeding)\nI — Intramural (within muscle) → Bleeding + bulk symptoms\nS — Subserosal (exophytic) → Bulk/pressure symptoms\n\nRemember: Submucosal = most symptomatic for bleeding and infertility",
      },
    ],
    pimpingQuestions: [
      "Which fibroid location causes the most severe menstrual bleeding and why?",
      "What imaging modality best characterizes fibroid location and number pre-operatively?",
      "How do you distinguish fibroids from adenomyosis clinically and on imaging?",
      "What are the non-surgical and surgical treatment options for symptomatic fibroids?",
      "What is uterine artery embolization (UAE) and who is an ideal candidate?",
      "Why do fibroids often grow during pregnancy?",
      "What is red degeneration of a fibroid and when does it occur?",
    ],
  },
  {
    id: "wh-cond-pid",
    rotation: "womens-health",
    name: "Pelvic Inflammatory Disease (PID)",
    icdCode: "N73.9",
    category: "Gynecology",
    definition:
      "Infection and inflammation of the upper genital tract (uterus, fallopian tubes, ovaries, peritoneum) caused by ascending spread of lower genital tract organisms. Most commonly caused by Chlamydia trachomatis and/or Neisseria gonorrhoeae, though polymicrobial (anaerobes, gram-negative rods, vaginal flora) in 50% of cases. Major cause of tubo-ovarian abscess (TOA) and long-term complications of ectopic pregnancy, infertility, and chronic pelvic pain.",
    diagnosticCriteria:
      "CDC 2021 minimum criteria (treat empirically if present): uterine tenderness OR adnexal tenderness OR cervical motion tenderness (CMT) — the classic finding. Additional criteria supporting diagnosis: oral temperature > 38.3°C, cervical mucopurulent discharge, WBCs on wet prep, elevated ESR/CRP, positive NAAT for gonorrhea or chlamydia. TOA: adnexal mass on TVUS or CT; requires prolonged IV therapy. Definitive: laparoscopy (reserved for diagnostic uncertainty).",
    presentation: {
      chiefComplaint: [
        "\"I have lower abdominal pain and a foul-smelling discharge\"",
        "\"Sex has been really painful lately and I have pelvic pain\"",
        "\"I have pain, fever, and my cervix hurts when touched during exam\"",
      ],
      associatedSymptoms: [
        "Lower abdominal/pelvic pain (bilateral, dull-to-sharp)",
        "Cervical motion tenderness (CMT) — 'chandelier sign' (patient jumps when cervix moved)",
        "Mucopurulent cervical discharge",
        "Fever, chills (in more severe cases)",
        "Abnormal uterine bleeding, dyspareunia",
        "Nausea, vomiting (with peritoneal involvement)",
        "Right upper quadrant pain (Fitz-Hugh-Curtis syndrome — perihepatitis from ascending infection)",
      ],
      demographics:
        "Sexually active women < 25 years; highest risk: multiple sexual partners, prior PID (recurrence risk 25%), non-use of barrier contraception, bacterial vaginosis, IUD insertion (risk elevated only in first 3 weeks), age 15–24.",
    },
    distinguishingFeatures:
      "CMT is pathognomonic for upper genital tract involvement; Fitz-Hugh-Curtis syndrome = RUQ pain + liver capsule 'violin string' adhesions (perihepatitis from ascending N. gonorrhoeae or C. trachomatis); TOA = failure to respond to 72h oral antibiotics — needs IV therapy ± drainage",
    redFlags: [
      "Suspected TOA (adnexal mass on TVUS) — hospitalize for IV antibiotics",
      "Peritoneal signs (rigid abdomen) — rule out ruptured TOA (surgical emergency)",
      "Pregnancy + PID signs (rule out ectopic)",
      "Failure to improve after 72 hours of outpatient therapy",
      "High fever > 39°C + toxicity (bacteremia)",
      "Immunocompromised patient",
    ],
    mnemonics: [
      {
        name: "PID Treatment: CDC Outpatient Regimen",
        content:
          "Outpatient (mild-moderate): Ceftriaxone 500 mg IM × 1 PLUS Doxycycline 100 mg PO BID × 14 days PLUS Metronidazole 500 mg PO BID × 14 days\n\nInpatient (TOA, severe, pregnant, failed outpatient): Cefoxitin + Doxycycline IV OR Clindamycin + Gentamicin IV",
      },
    ],
    pimpingQuestions: [
      "What are the CDC minimum diagnostic criteria for PID?",
      "What is cervical motion tenderness (CMT) and what does it indicate?",
      "What organisms most commonly cause PID?",
      "When do you hospitalize a patient with PID?",
      "What is Fitz-Hugh-Curtis syndrome?",
      "What are the long-term complications of untreated or recurrent PID?",
      "Should an IUD be removed if a patient is diagnosed with PID?",
    ],
  },

  // ── GYNECOLOGIC ONCOLOGY ───────────────────────────────────────────────────
  {
    id: "wh-cond-cervical-cancer",
    rotation: "womens-health",
    name: "Cervical Cancer & Abnormal Pap Management",
    icdCode: "C53.9",
    category: "Gynecologic Oncology",
    definition:
      "Malignancy arising from the cervical transformation zone, caused by persistent high-risk HPV infection (HPV 16 and 18 cause ~70% of cases). Fourth most common cancer in women worldwide, but largely preventable through HPV vaccination and Pap/HPV screening. Progression from HPV infection → CIN → invasive cancer takes 10–20 years, providing a wide window for detection and intervention.",
    diagnosticCriteria:
      "Bethesda cytology: NILM → ASC-US → LSIL → ASC-H → HSIL → AGC → AIS → carcinoma. Screening (ACS 2020): primary HPV testing starting age 25, every 5 years. Colposcopy indicated for: ASC-H, HSIL, AGC, persistent ASC-US/LSIL, HPV 16/18 positive. CIN histology: CIN1 (observe), CIN2 (treat or observe ≤ 25y), CIN3 (LEEP/cold-knife cone). FIGO staging (2018): IA (microscopic), IB (visible, cervix confined), II (beyond cervix), III (pelvic wall/lower vagina/nodes), IV (adjacent organs/distant mets).",
    presentation: {
      chiefComplaint: [
        "\"I have bleeding after sex — it keeps happening\"",
        "\"I have abnormal discharge and pelvic pain\"",
        "\"My Pap smear came back abnormal\"",
      ],
      associatedSymptoms: [
        "Postcoital bleeding (most common symptom of early invasive cancer)",
        "Intermenstrual or postmenopausal spotting",
        "Watery, bloody vaginal discharge",
        "Pelvic pain (advanced disease — parametrial invasion)",
        "Hematuria or rectal bleeding (stage IVA — bladder/rectal invasion)",
        "Leg edema (lymph node obstruction)",
        "CIN/preinvasive disease: ASYMPTOMATIC (detected on screening)",
      ],
      demographics:
        "Mean age at diagnosis 50 years; Hispanic and Black women have higher incidence (disparities in screening access); HPV vaccination has significantly reduced CIN2+ in vaccinated cohorts; unvaccinated/unscreened women at highest risk.",
    },
    distinguishingFeatures:
      "Preinvasive (CIN): completely asymptomatic — only found via Pap; postcoital bleeding = hallmark of early invasive cancer; AGC on Pap is worrisome — may indicate endocervical or endometrial adenocarcinoma; HPV 16 → squamous cell; HPV 18 → adenocarcinoma",
    redFlags: [
      "AGC (atypical glandular cells) on Pap — may indicate endocervical or endometrial adenocarcinoma",
      "Postcoital or unexplained vaginal bleeding in unscreened woman",
      "Visible cervical lesion (friable, exophytic, ulcerative) — biopsy immediately",
      "Barrel-shaped cervix (endocervical adenocarcinoma)",
      "Hematuria + rectal bleeding (stage IVA involvement)",
    ],
    mnemonics: [
      {
        name: "CIN Management: 1-Watch, 2-Treat, 3-Cut",
        content:
          "CIN 1 → Watch (90% spontaneous regression — repeat Pap/HPV in 12 months)\nCIN 2 → Treat (LEEP) — observe in ≤ 25 year-olds if colposcopy adequate\nCIN 3 → Cut it out (LEEP or cold-knife conization — must achieve clear margins)\n\nHPV vaccine: 2 doses if < 15 years; 3 doses if ≥ 15 years (Gardasil-9 covers HPV 6,11,16,18 + 5 others)",
      },
    ],
    pimpingQuestions: [
      "What HPV subtypes are covered by the Gardasil-9 vaccine?",
      "Describe the Bethesda classification system for cervical cytology.",
      "What is the transformation zone and why is it the most vulnerable site for HPV-related dysplasia?",
      "What distinguishes ASCCP risk-based management from result-based management?",
      "What is the treatment for CIN 1, CIN 2, and CIN 3?",
      "When can cervical cancer screening stop (age and criteria)?",
      "What is the treatment for Stage IB1 vs Stage IIIB cervical cancer?",
    ],
  },
  {
    id: "wh-cond-endometrial-cancer",
    rotation: "womens-health",
    name: "Endometrial Cancer",
    icdCode: "C54.1",
    category: "Gynecologic Oncology",
    definition:
      "Most common gynecologic malignancy in the US (~67,000 new cases/year). Type I (80%): endometrioid adenocarcinoma — estrogen-driven, low grade, good prognosis, arises from endometrial hyperplasia on a background of unopposed estrogen. Type II (20%): serous, clear cell carcinoma — non-estrogen-driven, high grade, poor prognosis, arises from atrophic endometrium. Presents early with postmenopausal bleeding — the key symptom.",
    diagnosticCriteria:
      "Postmenopausal bleeding (PMB): endometrial biopsy (EMB) is first-line evaluation — office-based, 90% sensitivity for endometrial cancer. TVUS: endometrial thickness (ET) ≥ 4 mm in postmenopausal woman (or ≥ 5 mm on combined estrogen) → perform EMB. ET < 3 mm has high NPV for cancer (93%). D&C (dilatation and curettage): if EMB inconclusive or insufficient, if cervical stenosis, or in high-risk patients. Hysteroscopy: direct visualization + targeted biopsy for focal lesions. FIGO 2023 staging: molecular-integrated staging (Stage I–IV based on myometrial invasion, cervical/adnexal involvement, nodes, metastases + molecular markers: p53, MMR, POLE).",
    presentation: {
      chiefComplaint: [
        "\"I'm postmenopausal and I started bleeding again\"",
        "\"I have unusual vaginal discharge and spotting\"",
        "\"My doctor found a thickened uterine lining on ultrasound\"",
      ],
      associatedSymptoms: [
        "Postmenopausal vaginal bleeding (PMB) — 90% of cases; up to 10–15% of PMB = endometrial cancer",
        "Abnormal uterine bleeding in premenopausal women (heavy or irregular periods — often PCOS)",
        "Watery or blood-tinged vaginal discharge",
        "Pelvic pain or pressure (advanced disease)",
        "Enlarged uterus on exam",
      ],
      demographics:
        "Mean age at diagnosis 63 years; predominantly postmenopausal. Risk factors (unopposed estrogen): obesity (aromatization in fat — single greatest modifiable risk factor), PCOS/anovulation, nulliparity, early menarche/late menopause, exogenous estrogen without progestogen, tamoxifen use (agonist on endometrium), Lynch syndrome (2–5× risk — screen all patients < 50 or family history with MMR IHC). Protective: combination OCP, progestogen-containing IUD, pregnancy, exercise.",
    },
    distinguishingFeatures:
      "Postmenopausal bleeding is the sentinel symptom (90% of endometrial cancers present this way); ET ≥ 4 mm on TVUS in postmenopausal woman requires biopsy; Type I (endometrioid) = obesity + estrogen excess background; Type II (serous/clear cell) = thin postmenopausal woman with atrophic endometrium — more aggressive",
    redFlags: [
      "Any postmenopausal bleeding — always requires endometrial evaluation",
      "Premenopausal with chronic anovulation (PCOS) + heavy bleeding → endometrial biopsy if > 45 or risk factors",
      "Pyometra (uterine distension with pus) in postmenopausal woman — possible obstructing cancer",
      "Rapid uterine enlargement (consider uterine sarcoma — leiomyosarcoma)",
      "Lynch syndrome (MLH1/MSH2/MSH6/PMS2 mutation) — lifetime EC risk 40–60%",
    ],
    mnemonics: [
      {
        name: "ENDOMETRIAL Cancer Risk Factors: FLOPENS",
        content:
          "F — Fat (obesity — #1 modifiable risk factor)\nL — Late menopause\nO — Only estrogen (unopposed estrogen without progestogen)\nP — PCOS/anovulation\nE — Early menarche\nN — Nulliparity\nS — Select drugs: Tamoxifen (estrogenic on endometrium)",
      },
    ],
    pimpingQuestions: [
      "What is the most common presenting symptom of endometrial cancer?",
      "What endometrial thickness on TVUS should prompt biopsy in a postmenopausal woman?",
      "Distinguish Type I vs Type II endometrial cancer by grade, histology, and prognosis.",
      "What is Lynch syndrome and how does it increase endometrial cancer risk?",
      "Why does tamoxifen increase endometrial cancer risk?",
      "What surgical procedure is used to treat early-stage endometrial cancer?",
      "What molecular markers are incorporated into the FIGO 2023 staging system?",
    ],
  },
  {
    id: "wh-cond-ovarian-cancer",
    rotation: "womens-health",
    name: "Ovarian Cancer",
    icdCode: "C56.9",
    category: "Gynecologic Oncology",
    definition:
      "Most lethal gynecologic malignancy in the US — 75% diagnosed at Stage III/IV when 5-year survival is 20–30%. Epithelial ovarian cancer (EOC, 90%) predominates, with high-grade serous carcinoma (HGSC) being the most common subtype, arising from fallopian tube fimbriae (not ovarian surface as once thought). BRCA1/2 mutations present in 15–20% of all EOC cases. No effective screening test exists for average-risk women.",
    diagnosticCriteria:
      "TVUS: adnexal mass with solid components, thick septations (> 3 mm), papillary projections, bilateral involvement, ascites → suspicious for malignancy. CA-125: elevated in 80% advanced EOC, < 50% early disease, non-specific (elevated in endometriosis, PID, liver disease) — NOT a screening test; used for monitoring. CT abdomen/pelvis: extent of peritoneal disease for surgical planning. ROMA score (CA-125 + HE4 + menopausal status): risk stratification for adnexal mass. FIGO staging: I (ovary only), II (pelvis), III (peritoneum/omentum — most common), IV (distant mets). Definitive: surgical histopathology — avoid percutaneous biopsy (peritoneal seeding risk).",
    presentation: {
      chiefComplaint: [
        "\"I've had bloating and abdominal fullness for months\"",
        "\"I can't eat much without feeling full very quickly\"",
        "\"I have abdominal pain that's been going on for weeks\"",
      ],
      associatedSymptoms: [
        "Persistent bloating (occurs nearly daily — unlike GI bloating)",
        "Early satiety / difficulty eating (abdominal compression by tumor/ascites)",
        "Abdominal or pelvic pain",
        "Urinary urgency/frequency (bladder compression)",
        "Abdominal distension from ascites",
        "Pleural effusion (right-sided shortness of breath)",
        "Constitutional symptoms: fatigue, weight loss",
      ],
      demographics:
        "Median age 63; lifetime risk 1.3% general population. High-risk: BRCA1 (40–60% lifetime risk), BRCA2 (15–20%), Lynch syndrome, family history of ovarian/breast cancer. Protective: oral contraceptive use (50% risk reduction after 5 years), bilateral tubal ligation, RRSO in BRCA carriers.",
    },
    distinguishingFeatures:
      "BEAT mnemonic for symptoms; CA-125 is NOT a screening test — NO effective screening exists for average-risk women (USPSTF Grade D against screening); HGSC has TP53 mutation in essentially 100% + BRCA pathway dysfunction; 'omental cake' on CT is hallmark of peritoneal carcinomatosis",
    redFlags: [
      "Adnexal mass in postmenopausal woman — all require prompt evaluation",
      "Rapidly growing pelvic mass in any age",
      "Ascites + adnexal mass (advanced EOC until proven otherwise)",
      "Ascites + pleural effusion (Stage IV disease)",
      "Known BRCA1/2 carrier with new adnexal mass",
    ],
    mnemonics: [
      {
        name: "Ovarian Cancer Symptoms: BEAT",
        content:
          "B — Bloating (persistent, nearly daily)\nE — Eating difficulties (early satiety, can't finish meals)\nA — Abdominal/pelvic pain\nT — Timing — symptoms occur > 12 times/month or are NEW\n\nCA-125: NOT for screening average-risk women (USPSTF Grade D)\nBRCA1: 40–60% lifetime risk; BRCA2: 15–20%",
      },
    ],
    pimpingQuestions: [
      "Why is there no effective screening for ovarian cancer in average-risk women?",
      "What is the BEAT mnemonic and why is symptom recognition important?",
      "What is the primary goal of cytoreductive surgery in ovarian cancer?",
      "Name the first-line chemotherapy regimen for ovarian cancer.",
      "What are PARP inhibitors and which patients benefit most?",
      "At what age should BRCA1 vs BRCA2 carriers undergo risk-reducing salpingo-oophorectomy?",
      "What is the role of interval debulking surgery after neoadjuvant chemotherapy?",
    ],
  },
  {
    id: "wh-cond-breast-cancer",
    rotation: "womens-health",
    name: "Breast Cancer",
    icdCode: "C50.919",
    category: "Gynecologic Oncology",
    definition:
      "Most common cancer in US women (1 in 8 lifetime risk), second leading cause of cancer death after lung cancer. Invasive ductal carcinoma (IDC) accounts for 70–80%. Molecular subtypes (Luminal A/B, HER2-enriched, Triple-negative) determine prognosis and treatment. Early detection via screening mammography reduces breast cancer mortality by 20–40%.",
    diagnosticCriteria:
      "Triple assessment: (1) Clinical breast exam; (2) Imaging — mammogram ± US; BI-RADS 4/5 → biopsy; (3) Core needle biopsy (CNB) — provides histology, grade, ER/PR/HER2 status, Ki-67. MRI for: BRCA+ screening, extent of disease, response to neoadjuvant chemo. Oncotype DX (21-gene): ER+/HER2−/N0–1 — Recurrence Score (RS) > 25 → add chemotherapy (TAILORx trial). BRCA1/2 testing: indicated for age < 50, triple-negative, male breast cancer, family history. AJCC staging: T (tumor size), N (nodal status), M (metastasis) + biomarkers.",
    presentation: {
      chiefComplaint: [
        "\"I found a lump in my breast — it's hard and doesn't move well\"",
        "\"My nipple has been inverted and I have skin dimpling\"",
        "\"My mammogram showed a suspicious finding\"",
      ],
      associatedSymptoms: [
        "Painless breast mass (firm, irregular, poorly mobile — vs fibroadenoma: smooth, mobile, non-tender)",
        "Skin dimpling (Cooper's ligament involvement) or peau d'orange (lymphatic invasion)",
        "Nipple retraction, bloody/clear nipple discharge",
        "Axillary lymphadenopathy (firm, matted — metastatic)",
        "Paget's disease of nipple: eczematous, erythematous nipple/areola (underlying DCIS or invasive cancer)",
        "Inflammatory breast cancer: diffuse erythema, warmth, peau d'orange ≥ 1/3 of breast (no discrete mass — often misdiagnosed as mastitis)",
      ],
      demographics:
        "Median age 62 at diagnosis; BRCA1/2 mutation (lifetime risk 60–85%); prior chest radiation (Hodgkin's), atypical hyperplasia on prior biopsy (4–5× risk), family history (1st degree relative doubles risk), prolonged estrogen exposure (early menarche/late menopause), nulliparity or late first pregnancy > 30, alcohol use, dense breasts.",
    },
    distinguishingFeatures:
      "Painless hard irregular mass (vs painful soft cyst vs smooth mobile fibroadenoma); inflammatory BC = no discrete mass but erythema/warmth/peau d'orange (often misdiagnosed as mastitis — skin biopsy shows dermal lymphatic tumor emboli); Paget's disease = nipple/areola involvement = underlying cancer until proven otherwise",
    redFlags: [
      "Inflammatory breast cancer presentation — skin biopsy needed (high stage, poor prognosis)",
      "Bloody nipple discharge (ductal carcinoma — ductogram or duct excision)",
      "Rapidly enlarging breast mass in pregnancy (gestational breast cancer — delayed diagnosis risk)",
      "New axillary lymphadenopathy (possible occult breast primary)",
      "BRCA1/2 mutation carrier — annual MRI + mammogram starting age 25",
    ],
    mnemonics: [
      {
        name: "Breast Cancer Biomarkers: ERHer2",
        content:
          "ER+ (and/or PR+) → Endocrine therapy (Tamoxifen premenopausal; Aromatase inhibitor postmenopausal)\nHER2+ → Trastuzumab (Herceptin) ± Pertuzumab\nTriple Negative (ER−/PR−/HER2−) → Chemotherapy ± Pembrolizumab ± PARP inhibitor (if BRCA-mutated)\n\nOncotype DX RS > 25 in ER+/HER2−/N0–1 → ADD chemotherapy",
      },
    ],
    pimpingQuestions: [
      "What is the triple assessment for a breast mass?",
      "What does BI-RADS category 4/5 indicate and what is the next step?",
      "Describe the molecular subtypes of breast cancer and their treatments.",
      "What is the Z0011 trial and how did it change axillary management?",
      "What does Oncotype DX measure and when is it used?",
      "What are the indications for breast MRI in breast cancer screening or staging?",
      "Why is inflammatory breast cancer particularly dangerous and how is it diagnosed?",
    ],
  },

  // ─── Menstruation / Hormonal Disorders ───────────────────────────────────

  {
    id: "wh-cond-amenorrhea",
    name: "Amenorrhea and Menstrual Disorders",
    icdCode: "N91.2",
    rotation: "womens-health",
    category: "Reproductive / Menstruation",
    definition:
      "Primary amenorrhea: no menarche by age 13 (without secondary sexual characteristics) or age 15 (with normal development). Secondary amenorrhea: cessation of menses for ≥3 months in previously regular cycles, or ≥6 months in irregular cycles. Most common cause of secondary amenorrhea: PREGNANCY (always rule out first). Hypothalamic amenorrhea (functional): low weight, excessive exercise, stress — most common pathologic cause in young women. Other causes: hyperprolactinemia (prolactinoma), primary ovarian insufficiency (POI/premature menopause), thyroid disease, Asherman syndrome (intrauterine adhesions from D&C), androgen excess (PCOS). Primary amenorrhea with normal secondary sexual characteristics: Müllerian agenesis (MRKH — absent uterus, normal ovaries) vs. imperforate hymen (hematocolpos — cyclic pain).",
    diagnosticCriteria:
      "Step 1: Pregnancy test (β-hCG). Step 2: FSH, LH, estradiol, prolactin, TSH. Step 3: Pelvic ultrasound and/or MRI if structural cause suspected. Step 4: Progestin challenge (withdrawal bleed = estrogen present, anovulation; no bleed = low estrogen or outflow obstruction). High FSH (>40 mIU/mL) + low estradiol = primary ovarian insufficiency (hypergonadotropic hypogonadism). Low FSH + low LH = hypothalamic-pituitary cause (hypogonadotropic hypogonadism). Normal FSH + elevated prolactin = prolactinoma. Karyotype for primary amenorrhea. Testosterone elevated + DHEAS elevated = adrenal source; testosterone elevated only = ovarian source.",
    presentation: {
      chiefComplaint: [
        "\"I haven't gotten my period in months\"",
        "\"I've never gotten my period and I'm 15\"",
        "\"I lost weight and started marathon training and my periods stopped\"",
      ],
      associatedSymptoms: [
        "Hypothalamic amenorrhea: weight loss, excessive exercise, stress, low BMI (<18.5), cold intolerance, low energy availability (female athlete triad — amenorrhea + low bone density + energy deficiency)",
        "Hyperprolactinemia: galactorrhea (milky discharge from nipples), headache, bitemporal hemianopsia (macroadenoma pressing optic chiasm)",
        "POI: hot flashes, night sweats, vaginal dryness, infertility — premature menopause before age 40",
        "Imperforate hymen: cyclic lower abdominal pain (monthly, synchronous with expected menses) + bulging bluish membrane at introitus + hematocolpos on ultrasound",
        "MRKH: normal secondary sexual characteristics + absent uterus/upper vagina + normal female karyotype (46,XX) + normal ovarian function",
      ],
      demographics: "Secondary amenorrhea affects 3–4% of women; primary amenorrhea <1%. Female athlete triad: gymnasts, runners, dancers. Turner syndrome: most common cause of primary amenorrhea (45,X — elevated FSH + absent secondary sexual characteristics).",
    },
    distinguishingFeatures:
      "Imperforate hymen vs. MRKH vs. Turner: Imperforate = hematocolpos, cyclic pain, patent vaginal opening absent (visible bluish bulge), normal karyotype; MRKH = no uterus, normal karyotype, no cyclic pain; Turner = absent secondary sex characteristics, elevated FSH, 45,X karyotype. Female athlete triad: energy deficiency → hypothalamic GnRH suppression → low FSH/LH → anovulation + bone loss (stress fractures). Treatment: restore body weight and reduce exercise intensity.",
    redFlags: [
      "Primary amenorrhea with elevated FSH: Turner syndrome (karyotype required) — cardiac (coarctation, bicuspid AV) and renal evaluation",
      "Prolactinoma with vision changes (bitemporal hemianopsia): macroadenoma compressing optic chiasm — MRI pituitary + dopamine agonist (cabergoline/bromocriptine)",
      "Imperforate hymen with hematocolpos: surgical incision of hymen (hymenotomy) to drain",
      "Hypothalamic amenorrhea + low bone density: bone protection with HRT or OCP if not seeking pregnancy; calcium + vitamin D",
    ],
    mnemonics: [
      {
        name: "Amenorrhea Workup — Step-by-Step",
        content:
          "Step 1: PREGNANCY TEST (rule out #1 cause)\nStep 2: FSH, LH, Estradiol, Prolactin, TSH\nStep 3: Progestin challenge\n\nHigh FSH, Low Estradiol → Hypergonadotropic (Ovarian failure/Turner)\nLow FSH, Low LH → Hypogonadotropic (Hypothalamus/Pituitary)\nNormal FSH, High Prolactin → Prolactinoma\n\nFemale Athlete Triad: Amenorrhea + Low Bone Density + Energy Deficiency\n\nPrimary Amenorrhea Clues:\nElevated FSH + absent secondary sex chars = TURNER (45,X)\nNormal FSH + absent uterus + normal breasts = MRKH\nCyclic pain + no menarche + bluish bulge = IMPERFORATE HYMEN",
      },
    ],
    pimpingQuestions: [
      "What is the first step in the workup of secondary amenorrhea?",
      "How do you interpret FSH and LH levels in amenorrhea?",
      "What is the female athlete triad?",
      "How do you distinguish MRKH from imperforate hymen?",
      "What is the treatment for hyperprolactinemia causing amenorrhea?",
    ],
  },

  {
    id: "wh-cond-aub",
    name: "Abnormal Uterine Bleeding and Dysmenorrhea",
    icdCode: "N93.9",
    rotation: "womens-health",
    category: "Reproductive / Menstruation",
    definition:
      "Abnormal uterine bleeding (AUB): any bleeding outside normal menstrual parameters — FIGO PALM-COEIN classification: Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia (structural = PALM); Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not yet classified (non-structural = COEIN). Most common causes by age: reproductive age — anovulation (PCOS), fibroids, polyps; perimenopausal — anovulatory cycles; postmenopausal — endometrial cancer until proven otherwise. Dysmenorrhea: Primary (no underlying pathology — prostaglandin-mediated cramping, onset 6–12h before menses, begins at ovulatory cycles) vs. Secondary (underlying pathology — endometriosis most common, adenomyosis, fibroids; pain worsens over years, dyspareunia).",
    diagnosticCriteria:
      "Pelvic ultrasound: first-line for structural causes (fibroid, polyp, ovarian cyst). Endometrial biopsy: any postmenopausal bleeding, any abnormal bleeding in women >45, or irregular bleeding >35 with risk factors. Saline infusion sonography (SIS): better visualization of endometrial cavity lesions. Hysteroscopy: gold standard for intrauterine pathology. Labs: CBC (anemia), pregnancy test, TSH, prolactin, coagulation studies (especially in adolescents with heavy menses — rule out von Willebrand disease), androgen levels (PCOS). BMI and ovulatory status assessment.",
    presentation: {
      chiefComplaint: [
        "\"My periods are extremely heavy and I have to change my pad every hour\"",
        "\"I have severe cramps that start before my period\"",
        "\"I had some spotting after menopause\"",
      ],
      associatedSymptoms: [
        "Heavy menstrual bleeding (menorrhagia): soaking through pads/tampons hourly for several consecutive hours, passing clots, anemia symptoms",
        "Intermenstrual bleeding (metrorrhagia): spotting between periods — consider polyp, cervicitis, malignancy",
        "Postmenopausal bleeding: endometrial cancer until proven otherwise — requires endometrial biopsy",
        "Primary dysmenorrhea: crampy lower abdominal pain, begins 1–2 days before menses, resolves with onset of flow, no pathology on exam",
        "Secondary dysmenorrhea: worsening dysmenorrhea, dyspareunia, premenstrual spotting (endometriosis), uterine tenderness, bulky irregular uterus (adenomyosis)",
      ],
      demographics: "AUB affects 20–30% of reproductive-age women. Postmenopausal bleeding: 10% harbor endometrial cancer. Dysmenorrhea: 50–90% of reproductive-age women; leading cause of absenteeism in young women.",
    },
    distinguishingFeatures:
      "Postmenopausal bleeding: ALWAYS biopsy — endometrial cancer in 10% (endometrial stripe >4–5 mm on ultrasound requires biopsy). Primary vs. secondary dysmenorrhea: primary = no abnormal findings on exam/imaging; secondary = endometriosis (nodularity, fixed uterus, cul-de-sac tenderness), adenomyosis (diffusely enlarged, boggy, tender uterus), fibroids. Treatment — primary dysmenorrhea: NSAIDs (ibuprofen or naproxen — best taken 1–2 days before menses onset) ± combined OCP. Secondary dysmenorrhea: treat underlying cause (endometriosis → progestins, GnRH agonists, surgery).",
    redFlags: [
      "Postmenopausal bleeding: endometrial biopsy mandatory before hormone therapy; endometrial stripe >4 mm on transvaginal US in postmenopausal woman → biopsy",
      "Heavy menstrual bleeding in adolescent with prolonged bleeding from first menstrual cycle: Von Willebrand disease (most common inherited coagulation disorder in women) → factor activity, ristocetin cofactor",
      "Irregular heavy bleeding in obese woman >45: anovulatory cycles with endometrial hyperplasia → cancer risk; endometrial biopsy",
    ],
    mnemonics: [
      {
        name: "AUB PALM-COEIN Classification",
        content:
          "Structural (PALM):\nP — Polyp\nA — Adenomyosis\nL — Leiomyoma\nM — Malignancy/hyperplasia\n\nNon-structural (COEIN):\nC — Coagulopathy\nO — Ovulatory dysfunction (PCOS, thyroid)\nE — Endometrial\nI — Iatrogenic (IUD, anticoagulants)\nN — Not otherwise classified\n\nPostmenopausal Bleeding = Cancer until proven otherwise → Endometrial biopsy\nPrimary Dysmenorrhea = NSAIDs + OCP\nSecondary Dysmenorrhea = Think Endometriosis → GnRH agonists or surgery",
      },
    ],
    pimpingQuestions: [
      "What is the PALM-COEIN classification of AUB?",
      "What is the most common cause of abnormal uterine bleeding in a 55-year-old postmenopausal woman?",
      "How do you distinguish primary from secondary dysmenorrhea?",
      "What is the first-line treatment for primary dysmenorrhea?",
      "What coagulation disorder should be suspected in an adolescent with heavy menstrual bleeding since menarche?",
    ],
  },

  {
    id: "wh-cond-menopause",
    name: "Menopause and Perimenopause",
    icdCode: "N95.1",
    rotation: "womens-health",
    category: "Reproductive / Menopause",
    definition:
      "Menopause: cessation of menses for 12 consecutive months — natural, surgical, or medically induced. Average age 51 in US. Perimenopause (climacteric): variable cycles, anovulatory cycles, and symptoms beginning 4–8 years before final menses — FSH begins to rise. Premature menopause (primary ovarian insufficiency, POI): menopause before age 40. Symptoms: vasomotor (hot flashes, night sweats — most common reason for treatment), genitourinary syndrome of menopause (GSM — formerly 'atrophic vaginitis': vaginal dryness, dyspareunia, urgency, recurrent UTIs), mood changes, sleep disturbance. Risks of estrogen deficiency: osteoporosis (bone loss accelerates in perimenopause/early menopause), cardiovascular disease, cognitive changes.",
    diagnosticCriteria:
      "Clinical diagnosis in women ≥45 with symptoms + irregular/absent menses. Lab confirmation (FSH >40 mIU/mL + estradiol <20 pg/mL) for women <45 or after hysterectomy. Bone density (DEXA scan): USPSTF recommends screening at age 65+ or younger if risk factors (POI, glucocorticoid use, low BMI); WHO FRAX score for fracture risk. Lipid panel, glucose: increased CV risk after menopause. Endometrial biopsy: any abnormal uterine bleeding in perimenopausal or postmenopausal women.",
    presentation: {
      chiefComplaint: [
        "\"I'm having hot flashes, night sweats, and can't sleep\"",
        "\"I haven't had my period in a year and sex is painful\"",
        "\"I'm only 42 and my periods stopped\"",
      ],
      associatedSymptoms: [
        "Vasomotor symptoms: hot flashes (sudden warmth + flushing + sweating + chills), night sweats, sleep disturbance",
        "GSM: vaginal dryness, dyspareunia, pruritus vulvae, burning, increased UTIs, urinary urgency",
        "Mood and cognition: irritability, depression, anxiety, difficulty concentrating ('brain fog')",
        "Physical changes: decreased libido, weight gain (especially central), skin thinning, hair changes",
        "Perimenopausal AUB: irregular heavy bleeding — at risk for endometrial hyperplasia in obese, anovulatory women",
      ],
      demographics: "Average age of menopause: 51 years. POI (<40 years): 1–2% of women; associated with autoimmune disease, chemotherapy, pelvic radiation, genetic causes (Turner syndrome, fragile X premutation). Smoking accelerates menopause by ~2 years.",
    },
    distinguishingFeatures:
      "Hormone therapy (HT/HRT): most effective treatment for vasomotor symptoms. Systemic HT: estrogen alone (for women without uterus) or estrogen + progestogen (for women with uterus — progestin protects endometrium). Contraindications to systemic HT: estrogen-dependent cancers (breast, endometrial), unexplained vaginal bleeding, thromboembolic disease, active liver disease, CHD. 'Timing hypothesis': HT initiated within 10 years of menopause or age <60 has cardiovascular benefit; initiated late has increased CV risk. Non-hormonal options: SSRIs/SNRIs (paroxetine — FDA approved for hot flashes), clonidine, gabapentin. GSM: topical vaginal estrogen (very low systemic absorption — safe even in many breast cancer survivors with provider guidance).",
    redFlags: [
      "Postmenopausal bleeding (any amount): endometrial cancer until proven otherwise → transvaginal ultrasound + endometrial biopsy",
      "POI in woman <40: karyotype (Turner, fragile X premutation) + autoimmune workup + immediate hormone therapy (HT) for bone and cardiovascular protection",
      "Severe vasomotor symptoms in breast cancer survivor: avoid systemic estrogen → SSRIs (venlafaxine), gabapentin, clonidine; consider vaginal estrogen with oncologist approval",
    ],
    mnemonics: [
      {
        name: "Menopause Hormone Therapy Decision",
        content:
          "UTERUS PRESENT: Estrogen + Progestogen (protects endometrium)\nNO UTERUS (hysterectomy): Estrogen alone\n\nContraindications to HT — HEPAT:\nH — History of DVT/PE\nE — Estrogen-dependent cancer (breast, endometrial)\nP — Pregnancy\nA — Active liver disease\nT — Thromboembolic disease, unexplained vaginal Bleeding\n\nTiming Hypothesis: Start HT within 10 years of menopause or before age 60 = BENEFICIAL\nStart HT >10 years after menopause or after age 60 = MORE RISK\n\nNon-hormonal: Paroxetine (FDA-approved), Venlafaxine, Gabapentin, Clonidine\nGSM: Topical vaginal estrogen (very low systemic absorption)",
      },
    ],
    pimpingQuestions: [
      "What is the difference between menopause and perimenopause?",
      "When is progestin added to hormone therapy and why?",
      "What are the contraindications to systemic hormone therapy?",
      "What is the 'timing hypothesis' for hormone therapy?",
      "What are the first-line non-hormonal options for vasomotor symptoms?",
    ],
  },

  // ─── Infections / STIs ────────────────────────────────────────────────────

  {
    id: "wh-cond-vaginitis",
    name: "Vaginitis: BV, Candidiasis, Trichomoniasis, and Cervicitis",
    icdCode: "N76.0",
    rotation: "womens-health",
    category: "Reproductive / Infections",
    definition:
      "Vaginitis: inflammation of the vagina — most common GYN complaint. Three major types: Bacterial vaginosis (BV, 40–50%) — imbalance of vaginal flora with overgrowth of Gardnerella vaginalis and anaerobes; NOT sexually transmitted (more common with multiple partners); thin, homogeneous gray-white discharge + fishy odor. Vulvovaginal candidiasis (VVC, 20–25%) — Candida albicans (90%); thick, white, 'cottage cheese' discharge + pruritus + erythema; not an STI. Trichomoniasis (15–20%) — Trichomonas vaginalis; only TRUE STI of the three; yellow-green frothy, malodorous discharge + strawberry cervix (punctate hemorrhages); treat partner(s). Cervicitis: mucopurulent cervical discharge + cervical friability — Chlamydia trachomatis (most common STI in US) and Neisseria gonorrhoeae are most common causative organisms.",
    diagnosticCriteria:
      "BV: Amsel criteria (3 of 4): (1) homogeneous gray-white discharge, (2) vaginal pH >4.5, (3) positive Whiff test (amine/fishy odor with KOH), (4) Clue cells (epithelial cells studded with bacteria, >20% of epithelial cells on wet prep). Candidiasis: KOH prep (pseudohyphae/budding yeast); elevated pH NOT typical (candida pH normal <4.5). Trichomoniasis: wet prep (motile trichomonads — sensitivity 50–70%); NAAT is most sensitive (>95%). Cervicitis: NAAT swabs for GC and chlamydia (most sensitive); cervical gram stain (intracellular gram-negative diplococci = GC).",
    presentation: {
      chiefComplaint: [
        "\"I have a fishy-smelling vaginal discharge\"",
        "\"I have severe itching and a thick white discharge\"",
        "\"I have a yellow-green discharge and it smells terrible\"",
        "\"My cervix bleeds when touched during my exam\"",
      ],
      associatedSymptoms: [
        "BV: thin gray-white homogeneous discharge, fishy odor (worse after intercourse with semen — raises pH, releases amines), minimal or no itching, pH >4.5",
        "Candidiasis: thick white 'cottage cheese' discharge, NO odor, intense pruritus, vulvar erythema and edema, dyspareunia, pH normal (3.8–4.5)",
        "Trichomoniasis: yellow-green frothy discharge with malodor, pruritus, dyspareunia, dysuria, strawberry cervix (colpitis macularis)",
        "Cervicitis: mucopurulent discharge, cervical motion tenderness (CMT — if present, think PID), cervical bleeding on contact (friability)",
      ],
      demographics: "BV: most common vaginal infection, common in women with multiple partners; does NOT require partner treatment (exception: if recurrent). Candidiasis: antibiotic use, DM, pregnancy, immunosuppression, OCP use are risk factors. Trichomoniasis: most prevalent non-viral STI worldwide; requires partner treatment and test-of-cure.",
    },
    distinguishingFeatures:
      "BV vs. Candida vs. Trichomonas: BV = fishy + gray-white + pH >4.5 + clue cells + no itching; Candida = white + cottage cheese + pH normal + pseudohyphae + intense itching; Trichomonas = frothy yellow-green + pH >4.5 + motile protozoa + STI (treat partner). Cervicitis with PID signs (CMT, uterine tenderness, adnexal tenderness): treat for PID even without confirmatory tests (clinical diagnosis sufficient — empiric treatment).",
    redFlags: [
      "BV in pregnancy: associated with preterm labor and PPROM → treat all symptomatic BV in pregnancy (metronidazole oral, safe in all trimesters)",
      "Recurrent VVC (≥4 episodes/year): consider DM, HIV, or prolonged antibiotic use; treat with fluconazole weekly maintenance for 6 months",
      "Trichomoniasis in pregnancy: associated with preterm birth + low birth weight; metronidazole safe in all trimesters",
      "Cervicitis with evidence of PID (CMT/uterine/adnexal tenderness): treat empirically for PID — do NOT wait for culture results",
    ],
    mnemonics: [
      {
        name: "Vaginitis Comparison Chart",
        content:
          "BV (Gardnerella): pH >4.5 + Clue cells + Fishy + KOH whiff test + Gray/white\nTreatment: Metronidazole (oral or vaginal) or Clindamycin vaginal cream\nNo partner treatment needed (not STI)\n\nCandida (yeast): pH NORMAL (<4.5) + Pseudohyphae on KOH + White cottage cheese + ITCH\nTreatment: Fluconazole 150mg single dose OR topical azole\n\nTrichomonas: pH >4.5 + Motile flagellates on wet prep + Yellow-green frothy + STI\nTreatment: Metronidazole 2g single dose (TREAT PARTNER ALSO)\n\nStrawberry cervix = Trichomonas\nCervical friability + mucopurulent discharge = think GC/Chlamydia",
      },
    ],
    pimpingQuestions: [
      "What are the Amsel criteria for bacterial vaginosis?",
      "How do you distinguish the three most common causes of vaginitis?",
      "What is the pH of the vaginal discharge in candidiasis vs. BV?",
      "Which type of vaginitis requires treatment of sexual partners?",
      "What is the significance of BV during pregnancy?",
    ],
  },

  // ─── Structural Abnormalities ─────────────────────────────────────────────

  {
    id: "wh-cond-structural",
    name: "Ovarian Torsion, Pelvic Organ Prolapse, and Urinary Incontinence",
    icdCode: "N83.51",
    rotation: "womens-health",
    category: "Reproductive / Structural Abnormalities",
    definition:
      "Ovarian torsion: twisting of the ovary (with or without fallopian tube) on its pedicle → venous outflow obstruction → arterial ischemia → infarction. Surgical emergency. Pelvic organ prolapse (POP): descent of pelvic organs into or beyond the vaginal introitus — cystocele (bladder), rectocele (rectum), uterine prolapse, enterocele (small bowel). Caused by weakened pelvic floor support (parity, aging, obesity, chronic straining). Urinary incontinence (UI): involuntary leakage of urine — Stress UI (leakage with increased intraabdominal pressure — cough, sneeze, laugh; urethral hypermobility or intrinsic sphincter deficiency), Urge UI (detrusor overactivity — sudden urge to void then leakage; 'overactive bladder'), Mixed UI, Overflow UI (urinary retention → overflow; BPH, neurogenic bladder), Functional UI (mobility/cognitive limitations).",
    diagnosticCriteria:
      "Ovarian torsion: pelvic/transvaginal ultrasound with Doppler (absent venous flow, ovarian edema, free fluid) — but absent flow does NOT rule out torsion; intermittent torsion may show normal flow. Surgical diagnosis and treatment (diagnostic laparoscopy). POP: POP-Q staging (I–IV based on prolapse relative to hymen); bladder, bowel, and sexual function history. Urinary incontinence: urinalysis (UTI), post-void residual (PVR — overflow UI if >200 mL), urodynamic testing for complex cases, cough stress test (leakage with cough = stress UI), bladder diary. Q-tip test: hypermobility of urethra >30 degrees from horizontal = urethral hypermobility (stress UI).",
    presentation: {
      chiefComplaint: [
        "\"I have sudden severe pelvic pain and feel sick\" (Ovarian torsion)",
        "\"I feel a bulge in my vagina\" (POP)",
        "\"I leak urine when I sneeze or exercise\" (Stress UI)",
        "\"I can't make it to the bathroom in time\" (Urge UI)",
      ],
      associatedSymptoms: [
        "Ovarian torsion: sudden severe unilateral lower abdominal/pelvic pain + nausea/vomiting; may have intermittent pain (intermittent torsion); tender adnexal mass; most common in reproductive-age women with ovarian cyst or mass (especially dermoid cyst — most common benign ovarian tumor in young women)",
        "POP: pelvic pressure/fullness, feeling of 'something falling out,' difficulty voiding/defecating, sexual dysfunction; worse with prolonged standing, better when lying down",
        "Stress UI: leaks with physical activity/cough/sneeze/laugh; no urgency preceding leakage",
        "Urge UI: sudden strong urge to void, may not make it to toilet; nocturia; frequency; may leak large amounts",
      ],
      demographics: "Ovarian torsion: most common in reproductive-age women; ovarian mass (cyst >5 cm) increases risk substantially; also in prepubertal girls (normal ovary). POP: parity most significant RF; affects 50% of multiparous women to some degree. Stress UI: multiparous women, post-menopausal; most common in women. Urge UI: increases with age; women > men.",
    },
    distinguishingFeatures:
      "Ovarian torsion: Doppler flow can be present even with torsion (intermittent) — do NOT rule out torsion based on Doppler alone. Clinical suspicion → surgical exploration. Treatment: diagnostic laparoscopy + detorsion (untwisting — may save ovary even if appears infarcted); oophorectomy if truly necrotic. Stress UI treatment: pelvic floor muscle training (Kegel exercises — first-line), weight loss, pessary, urethral slings (most effective surgical option). Urge UI: behavioral therapy (bladder training, urge suppression) + anticholinergics (oxybutynin, tolterodine) or beta-3 agonist (mirabegron — fewer side effects).",
    redFlags: [
      "Ovarian torsion: immediate laparoscopic detorsion regardless of Doppler findings — 'time is ovary'; even dusky-appearing ovary may recover after detorsion",
      "Symptomatic POP stage III–IV (prolapse beyond introitus): surgical repair (colporrhaphy, apical suspension, hysteropexy, or hysterectomy) or pessary fitting",
      "Urinary retention with overflow incontinence: Foley catheter placement immediately; identify cause (urethral obstruction, anticholinergic medications, neurogenic bladder)",
    ],
    mnemonics: [
      {
        name: "Urinary Incontinence Types",
        content:
          "STRESS UI: Leaks with STRESS (cough, sneeze, laugh, exercise)\nCause: Urethral hypermobility or intrinsic sphincter deficiency\nTx: Kegel exercises → pessary → urethral sling (mid-urethral sling)\n\nURGE UI (Overactive Bladder): Sudden URGE → can't wait\nCause: Detrusor overactivity\nTx: Bladder training → Anticholinergics (oxybutynin, solifenacin) or Mirabegron (β-3 agonist)\n\nOVERFLOW UI: Full bladder + unable to void → overflow\nCause: Retention (BPH, neurogenic)\nTx: Catheterize + treat cause\n\nOvarian Torsion: Normal Doppler DOES NOT rule out torsion\n→ Surgical exploration if clinical suspicion (diagnose + treat simultaneously)",
      },
    ],
    pimpingQuestions: [
      "What is the most common cause of ovarian torsion in reproductive-age women?",
      "Why can't you rule out ovarian torsion with normal Doppler flow?",
      "What are the types of pelvic organ prolapse?",
      "How do stress incontinence and urge incontinence differ in mechanism and treatment?",
      "What is the most effective surgical treatment for stress urinary incontinence?",
    ],
  },

  // ─── Breast Disorders ─────────────────────────────────────────────────────

  {
    id: "wh-cond-benign-breast",
    name: "Benign Breast Disorders: Mastitis, Fibroadenoma, and Fibrocystic Disease",
    icdCode: "N60.01",
    rotation: "womens-health",
    category: "Breast / Benign Disease",
    definition:
      "Mastitis: inflammation of breast tissue — lactational mastitis (most common, weeks 2–6 postpartum — S. aureus); non-lactational (periareolar — Staphylococcal/mixed organisms; can progress to abscess). Breast abscess: complication of mastitis — requires drainage (needle aspiration preferred over I&D for non-complex abscess). Fibroadenoma: most common benign solid breast tumor — young women 15–35; rubbery, mobile, well-circumscribed, non-tender; influenced by estrogen (grows in pregnancy, regresses post-menopause). Fibrocystic breast change: most common benign breast condition — cyclic nodularity + tenderness (worse premenstrually); multiple mobile cysts; not a cancer risk in most forms (atypical hyperplasia does increase risk). Simple cysts: aspiration if symptomatic; recheck in 4–8 weeks.",
    diagnosticCriteria:
      "Mastitis: clinical (erythema, warmth, tenderness, fever in breastfeeding woman). Ultrasound: if fluctuant or not improving with antibiotics (to identify abscess). Fibroadenoma: ultrasound first (well-circumscribed, oval, homogeneous, horizontal orientation — BI-RADS 3); core needle biopsy if >3 cm, growing, or BI-RADS 4. BI-RADS classification governs workup for all breast masses. Fibrocystic change: breast ultrasound (simple cysts — anechoic, thin-walled, posterior acoustic enhancement) ± aspiration (clear fluid = benign; bloody or no reoccurrence → send for cytology). Mammogram: women ≥40 or any concerning features.",
    presentation: {
      chiefComplaint: [
        "\"I'm breastfeeding and my breast is red, hot, and painful\"",
        "\"I felt a painless lump in my breast\"",
        "\"My breasts are lumpy and painful before my period\"",
      ],
      associatedSymptoms: [
        "Lactational mastitis: unilateral breast erythema, warmth, tenderness + fever + flu-like symptoms in breastfeeding woman; CONTINUE BREASTFEEDING",
        "Breast abscess: focal fluctuant area within area of mastitis; may have fever; not improving with antibiotics alone",
        "Fibroadenoma: single, smooth, mobile, firm-rubbery, well-circumscribed mass; NOT tender; does not change with cycle",
        "Fibrocystic: bilateral, multifocal nodularity + cyclic tenderness; worst premenstrually; improves with menstruation; may have multiple cysts",
      ],
      demographics: "Lactational mastitis: most common in first 3 months of breastfeeding. Fibroadenoma: women 15–35 years. Fibrocystic: reproductive-age women; peak incidence 30–50 years.",
    },
    distinguishingFeatures:
      "Mastitis vs. inflammatory breast cancer: mastitis responds to antibiotics in 48–72h; inflammatory BC has peau d'orange, no fever response to antibiotics, skin thickening → biopsy. Fibroadenoma vs. phyllodes tumor: phyllodes is older (avg 45), larger (usually >5 cm), faster-growing, heterogeneous on US, requires wider excision margins (>1 cm). Fibrocystic vs. malignancy: fibrocystic = bilateral, cyclic, multiple; cancer = unilateral, hard, fixed, non-tender, does not vary with cycle — any concerning mass requires imaging and possible biopsy.",
    redFlags: [
      "Mastitis not improving within 48–72h of antibiotics: abscess formation — ultrasound and drainage",
      "Bloody nipple discharge from single duct: intraductal papilloma vs. DCIS — requires microdochectomy and pathology",
      "Any new breast mass in woman >35 or with risk factors: triple assessment (clinical exam + imaging + biopsy) before dismissing as benign",
    ],
    mnemonics: [
      {
        name: "Mastitis vs. Abscess Management",
        content:
          "MASTITIS:\n→ Continue breastfeeding or pumping (stasis worsens infection!)\n→ Dicloxacillin or cephalexin (oral) for non-MRSA\n→ TMP-SMX or clindamycin if MRSA suspected\n→ Warm compresses, frequent feeding/pumping\n→ If no improvement in 48–72h → ultrasound to rule out abscess\n\nABSCESS:\n→ Ultrasound-guided needle aspiration (preferred)\n→ OR incision and drainage\n→ Continue antibiotics\n→ CONTINUE BREASTFEEDING from other breast; pump affected side\n\nBI-RADS:\n1–2: Negative/benign → routine follow-up\n3: Probably benign → 6-month follow-up\n4–5: Suspicious → BIOPSY\n6: Known malignancy",
      },
    ],
    pimpingQuestions: [
      "Should breastfeeding be discontinued for mastitis? Why or why not?",
      "What is the most appropriate next step if mastitis does not improve with antibiotics in 48–72h?",
      "How do you distinguish fibrocystic breast change from malignancy?",
      "What is the typical ultrasound appearance of a fibroadenoma?",
      "What is the difference between fibroadenoma and phyllodes tumor?",
    ],
  },

  // ─── Obstetrics: Prenatal Care ────────────────────────────────────────────

  {
    id: "wh-cond-prenatal-care",
    name: "Prenatal Care and Normal Pregnancy",
    icdCode: "Z34.00",
    rotation: "womens-health",
    category: "Obstetrics / Prenatal Care",
    definition:
      "Prenatal care begins at first confirmation of intrauterine pregnancy. Naegele's rule: EDD = LMP + 9 months + 7 days (280 days from LMP). First trimester (≤13 6/7 weeks): confirm pregnancy + dating (IUP by US when β-hCG >1,500–2,000 mIU/mL — discriminatory zone for transvaginal US); first trimester screen (nuchal translucency + PAPP-A + free β-hCG) for chromosomal abnormalities; cell-free DNA (NIPT) — most sensitive non-invasive screen. Cell-free fetal DNA: >99% detection rate for Trisomy 21. Second trimester: quad screen (AFP + estriol + β-hCG + inhibin A) for Down syndrome/NTD; anatomy ultrasound 18–20 weeks; GBS screen at 35–37 weeks. Physiologic changes of pregnancy: ↑ blood volume (50%), ↑ cardiac output, ↑ GFR, ↑ tidal volume, mild anemia (dilutional), physiologic leukocytosis.",
    diagnosticCriteria:
      "Initial prenatal labs: blood type + Rh, antibody screen, CBC, rubella IgG, hepatitis B surface antigen (HBsAg), HIV, syphilis (RPR/VDRL), gonorrhea/chlamydia NAAT, urinalysis/culture, TB screening (TST or IGRA for high-risk), varicella titer. Second trimester: MSAFP (AFP alone): elevated = NTD risk; low = Down syndrome. Glucose challenge test (GCT) at 24–28 weeks: 1-hour 50g glucose load; if ≥140 mg/dL → 3-hour 100g oral glucose tolerance test (OGTT) for GDM diagnosis. GBS culture at 35–37 weeks. Modified biophysical profile (BPP): NST + amniotic fluid index (AFI) — weekly for high-risk pregnancies.",
    presentation: {
      chiefComplaint: [
        "\"I think I'm pregnant — my period is late\"",
        "\"I need to establish prenatal care\"",
      ],
      associatedSymptoms: [
        "First trimester: nausea/vomiting (hyperemesis gravidarum if severe — Wernicke's encephalopathy risk → IV thiamine before glucose), breast tenderness, fatigue, urinary frequency (uterus pressing on bladder)",
        "Normal physiologic changes: ↑ heart rate (10–20 bpm), supine hypotension syndrome (uterus compresses IVC — lateral decubitus position relieves), back pain, Braxton Hicks contractions",
        "Fetal movement: quickening — first felt at 16–20 weeks (primiparas later); kick counts by 28 weeks",
        "Lightening: fetal head descends into pelvis in late third trimester (2–4 weeks before labor in primiparas)",
      ],
      demographics: "80 million pregnancies annually worldwide. Teen pregnancy (high risk: preeclampsia, FGR, anemia, preterm birth). Advanced maternal age ≥35: ↑ chromosomal abnormalities, GDM, preeclampsia, placenta previa.",
    },
    distinguishingFeatures:
      "Ultrasound dating vs. LMP: ultrasound is more accurate when performed before 20 weeks; if >7–10 days different from LMP dates → adjust EDD to ultrasound. AFP interpretation: elevated AFP = NTD (spina bifida, anencephaly), gastroschisis, omphalocele, abdominal wall defects, twins, incorrect dating; low AFP = Down syndrome (Trisomy 21). NIPT: screen only (NOT diagnostic) → positive result → amniocentesis for confirmation. Amniocentesis: diagnostic (karyotype) — risk 0.1–0.3% miscarriage. CVS: chorionic villus sampling (10–13 weeks — earlier than amnio) — can diagnose chromosomal and genetic conditions.",
    redFlags: [
      "β-hCG not doubling appropriately (expected to double q48h): ectopic vs. impending miscarriage → repeat in 48h + transvaginal US at discriminatory zone",
      "Hyperemesis gravidarum (severe nausea/vomiting, >5% weight loss, ketosis): IV hydration + IV thiamine BEFORE glucose; ondansetron, promethazine",
      "Abnormal first trimester screen/NIPT: genetic counseling + offer diagnostic testing (CVS or amniocentesis)",
      "Advanced maternal age ≥35: discuss NIPT and offer invasive testing (amniocentesis); higher risk of Down syndrome and other aneuploidy",
    ],
    mnemonics: [
      {
        name: "Prenatal Lab Schedule",
        content:
          "FIRST VISIT: Blood type + Rh, CBC, Rubella, HBsAg, HIV, Syphilis, GC/Chlamydia, UA, TSH\nFIRST TRIMESTER (11–13 wks): NT + PAPP-A + β-hCG (1st trim screen) or NIPT\nSECOND TRIMESTER (15–20 wks): Quad screen (AFP, estriol, β-hCG, inhibin A)\n18–20 WEEKS: Anatomy ultrasound\n24–28 WEEKS: 1-hour GCT (GDM screen) + Hgb/Hct\n28 WEEKS: Rh-negative → RhoGAM\n35–37 WEEKS: GBS culture\n\nRemember: NIPT = Screen, NOT diagnostic\nAmniocentesis = Diagnostic (definitive karyotype)\n\nDiscriminatory zone: β-hCG >1,500–2,000 = IUP visible on TVUS (if not seen → ectopic!)",
      },
    ],
    pimpingQuestions: [
      "What is Naegele's rule for estimating EDD?",
      "What does elevated maternal serum AFP suggest?",
      "What is the discriminatory zone for β-hCG?",
      "What is the difference between NIPT and amniocentesis?",
      "When is RhoGAM given during pregnancy?",
    ],
  },

  // ─── Obstetric Complications ──────────────────────────────────────────────

  {
    id: "wh-cond-pregnancy-complications",
    name: "Pregnancy Complications: Placental Abruption, Molar Pregnancy, and Rh Incompatibility",
    icdCode: "O45.90",
    rotation: "womens-health",
    category: "Obstetrics / Pregnancy Complications",
    definition:
      "Placental abruption: premature separation of the normally implanted placenta from the uterine wall. Painful vaginal bleeding (vs. placenta previa = painless). Trauma, cocaine use, HTN, and prior abruption are major risk factors. Gestational trophoblastic disease (GTD): spectrum — complete mole (46,XX — all paternal, no fetal parts, very high β-hCG), partial mole (69,XXX or 69,XXY — some fetal tissue), invasive mole, choriocarcinoma (malignant — most common after complete mole, also postpartum, postabortion). Complete mole: 'snowstorm' pattern on US, uterus large for dates, bilateral theca-lutein cysts, hyperemesis, preeclampsia before 20 weeks (normally impossible), no FHT. Rh incompatibility (isoimmunization): Rh-negative mother exposed to fetal Rh+ blood → maternal anti-D antibody production → hemolytic disease of the fetus/newborn (HDFN) in subsequent Rh+ pregnancies.",
    diagnosticCriteria:
      "Abruption: clinical diagnosis; ultrasound may not show it (50% sensitivity); retroplacental clot if visible; fetal monitoring (Category II-III tracing). If maternal shock or fetal distress → immediate delivery. Labs: CBC, coagulation studies (DIC — major complication of severe abruption). Molar pregnancy: β-hCG (markedly elevated — >100,000 mIU/mL typical for complete mole), transvaginal US ('snowstorm' appearance, no fetal pole for complete mole). Treatment: suction curettage + β-hCG surveillance (weekly until undetectable, then monthly × 6 months) + effective contraception during surveillance. Malignant transformation: if β-hCG plateaus or rises → choriocarcinoma → chemotherapy (methotrexate for low-risk). Rh incompatibility: indirect Coombs (antibody screen) at first prenatal visit, 28 weeks; if Rh-negative and unsensitized → RhoGAM at 28 weeks and within 72h postpartum; if sensitized → serial MCA Dopplers (peak systolic velocity predicts fetal anemia).",
    presentation: {
      chiefComplaint: [
        "\"I'm having painful vaginal bleeding in late pregnancy\" (Abruption)",
        "\"My pregnancy test is strongly positive but I'm not feeling right\" (Molar pregnancy)",
        "\"I'm Rh-negative and worried about my baby\" (Rh incompatibility)",
      ],
      associatedSymptoms: [
        "Abruption: sudden onset painful uterine contractions + dark vaginal bleeding + rigid/tender uterus ('board-like'); fetal distress; can be concealed (no external bleeding but retroplacental clot)",
        "Complete mole: markedly elevated β-hCG, uterus large for dates, hyperemesis (high β-hCG → stimulates TSH-like effect), bilateral ovarian cysts (theca-lutein cysts from high hCG), preeclampsia <20 weeks, NO fetal heartbeat",
        "Rh incompatibility: asymmetric hemolytic jaundice in newborn; hydrops fetalis (severe — edema, ascites, pleural effusion); no maternal symptoms",
      ],
      demographics: "Abruption: affects 1% of pregnancies; cocaine is #1 risk factor among illicit drugs. Complete mole: higher in Southeast Asian women and those at extremes of reproductive age. Rh incompatibility: prevented by RhoGAM → now rare in developed countries.",
    },
    distinguishingFeatures:
      "Abruption vs. previa: abruption = painful bleeding + rigid uterus; previa = painless bleeding. Complete vs. partial mole: complete = no fetal parts, 46,XX diploid, ALL paternal DNA; partial = some fetal parts, triploid (69,XXX/XXY), lower malignant potential. Choriocarcinoma: most common after complete mole; β-hCG rising/plateau after molar evacuation → malignancy; exquisitely chemo-sensitive (methotrexate — near 100% cure even with metastases in low-risk disease). RhoGAM: anti-D immunoglobulin — prevents sensitization, does NOT treat sensitization that has already occurred.",
    redFlags: [
      "Placental abruption with DIC (bleeding from IV sites, petechiae, falling fibrinogen): massive transfusion protocol + emergency delivery",
      "Molar pregnancy evacuated → β-hCG rises or plateaus after 3 consecutive weekly values: gestational trophoblastic neoplasia → methotrexate chemotherapy",
      "Sensitized Rh-negative mother: serial MCA Doppler ultrasounds every 1–2 weeks (MCA PSV >1.5 MoM = fetal anemia → percutaneous umbilical blood sampling/transfusion)",
      "Preeclampsia developing before 20 weeks: STRONGLY suggest molar pregnancy — check β-hCG and pelvic US",
    ],
    mnemonics: [
      {
        name: "Abruption vs. Previa + Molar Pregnancy",
        content:
          "ABRUPTION: PAINFUL + Rigid uterus + Dark blood + Trauma/cocaine/HTN\nPREVIA: PAINLESS + Soft uterus + Bright red blood + Abnormal placentation\n\nComplete Mole: No fetus + Very high β-hCG + 'Snowstorm' US + Theca-lutein cysts\n→ Treat: Suction D&C + Follow β-hCG weekly until 0\n→ Contraception for 6 months during monitoring\n→ Rising β-hCG after treatment = GTN → Methotrexate\n\nRhoGAM Indications:\n28 weeks (all Rh- women)\nWithin 72h postpartum (if baby Rh+)\nAny sensitizing event: bleeding, amnio, CVS, trauma, ECV",
      },
    ],
    pimpingQuestions: [
      "What distinguishes placental abruption from placenta previa clinically?",
      "What is the classic ultrasound finding in a complete hydatidiform mole?",
      "What does a rising β-hCG after molar evacuation suggest?",
      "When is RhoGAM indicated during pregnancy?",
      "What are the risk factors for placental abruption?",
    ],
  },

  {
    id: "wh-cond-abortion",
    name: "Abortion and Pregnancy Loss",
    icdCode: "O02.1",
    rotation: "womens-health",
    category: "Obstetrics / Pregnancy Complications",
    definition:
      "Spontaneous abortion (miscarriage): pregnancy loss before 20 weeks — affects 10–20% of known pregnancies. Types: Threatened (cervix closed, viable fetus, bleeding), Inevitable (cervix open, products of conception in cervical os, loss imminent), Incomplete (partial passage of POC, cervix open), Complete (all POC passed, cervix closed), Missed (embryo dead, retained, no symptoms), Septic (fever, infection — emergency). Recurrent pregnancy loss (RPL): ≥2 consecutive losses — evaluate for thrombophilias (antiphospholipid syndrome most important), chromosomal abnormalities (balanced translocation in parent), uterine anomalies, endocrine causes. Induced abortion: medical (mifepristone + misoprostol — up to 10–12 weeks) vs. surgical (aspiration for 1st trimester, D&E for 2nd trimester). Cervical insufficiency (incompetent cervix): painless cervical dilation in second trimester → recurrent midtrimester pregnancy loss; treat with cerclage (cervical stitch placed at 12–14 weeks).",
    diagnosticCriteria:
      "β-hCG + transvaginal ultrasound: confirm IUP, viability (fetal heartbeat), gestational sac size. Crown-rump length (CRL) ≥7 mm without heartbeat = embryonic demise. Mean sac diameter ≥25 mm without embryo = anembryonic pregnancy (blighted ovum). RPL workup: antiphospholipid antibodies (anti-cardiolipin, lupus anticoagulant, anti-β2GP1), parental karyotype, uterine anatomy evaluation (sonohysterography, hysteroscopy), thyroid function. Septic abortion: blood cultures, broad-spectrum IV antibiotics, urgent surgical evacuation.",
    presentation: {
      chiefComplaint: [
        "\"I'm pregnant and I'm bleeding with cramping\"",
        "\"I've had 3 miscarriages and want to know why\"",
        "\"I'm pregnant with fever, lower abdominal pain, and smelly vaginal discharge\"",
      ],
      associatedSymptoms: [
        "Threatened abortion: vaginal bleeding + closed cervix + viable IUP on US; 50% will continue to term",
        "Inevitable/incomplete: bleeding + cramping + open cervical os + POC in os or partially passed",
        "Complete abortion: bleeding has stopped, all POC passed, closed cervix, empty uterus on US",
        "Missed abortion: embryo dead but retained — may be discovered incidentally; no symptoms or minimal spotting",
        "Septic abortion: fever + uterine tenderness + purulent discharge + sepsis signs (tachycardia, hypotension) after any abortion procedure or illegal/unsafe abortion",
      ],
      demographics: "Miscarriage: 10–20% of recognized pregnancies; most commonly from chromosomal abnormalities (50–60% of early losses). RPL: 1–2% of couples. Antiphospholipid syndrome: most common treatable cause of RPL — treat with low-dose aspirin + LMWH during subsequent pregnancies.",
    },
    distinguishingFeatures:
      "Threatened vs. inevitable: key difference = cervical os. Threatened = closed os, some may continue; inevitable = open os, loss is certain. Management: threatened = supportive + expectant; inevitable/incomplete = expectant vs. medical (misoprostol) vs. surgical (suction aspiration); missed = expectant vs. medical vs. surgical. Septic abortion: SURGICAL EMERGENCY — evacuate uterus immediately after starting IV antibiotics; delay → Clostridial septicemia and death.",
    redFlags: [
      "Septic abortion (fever + uterine tenderness + purulent discharge): IV antibiotics (ampicillin + gentamicin + metronidazole) + immediate surgical uterine evacuation",
      "Hemorrhagic shock from incomplete abortion: IV fluid resuscitation + immediate surgical evacuation + blood products",
      "Antiphospholipid syndrome with RPL: treat future pregnancies with aspirin 81 mg + LMWH (enoxaparin) from positive pregnancy test through 6–12 weeks postpartum",
    ],
    mnemonics: [
      {
        name: "Types of Abortion — COS (Cervical Os Status)",
        content:
          "THREATENED: Bleeding + Closed os + Viable fetus → 50% continue\nINEVITABLE: Bleeding + Open os + IUP viable → will abort\nINCOMPLETE: Bleeding + Open os + Some POC remaining → evacuate\nCOMPLETE: Bleeding stopped + Closed os + Empty uterus → done\nMISSED: Dead embryo + Closed os + Retained → no symptoms\nSEPTIC: Any + Fever + Infection → EMERGENCY evacuation\n\nRPL (≥2 losses) Workup:\n1. Antiphospholipid antibodies (APS — most important treatable cause)\n2. Parental karyotype (balanced translocation)\n3. Uterine anatomy (SHG, hysteroscopy)\n4. Thyroid, glucose",
      },
    ],
    pimpingQuestions: [
      "How does an inevitable abortion differ from a threatened abortion?",
      "What is the most common chromosomal cause of early pregnancy loss?",
      "What is the most common treatable cause of recurrent pregnancy loss?",
      "What is septic abortion and how is it treated?",
      "What is the treatment for antiphospholipid syndrome in subsequent pregnancies?",
    ],
  },

  // ─── Labor and Delivery Complications ─────────────────────────────────────

  {
    id: "wh-cond-labor-complications",
    name: "Labor and Delivery Complications: PPROM, Dystocia, Malpresentation, and Fetal Distress",
    icdCode: "O42.00",
    rotation: "womens-health",
    category: "Obstetrics / Labor and Delivery",
    definition:
      "Premature rupture of membranes (PROM): rupture of membranes before onset of labor — PPROM = before 37 weeks. Confirm with pooling, ferning, nitrazine test, or AmniSure (PAMG-1 test). Dystocia (abnormal labor): disorders of power (uterine contractions), passenger (fetal size/position), or pelvis (maternal anatomy) — 3 Ps. Shoulder dystocia: after delivery of fetal head, anterior shoulder impacted behind pubic symphysis — obstetric emergency; HELPERR maneuver. Malpresentation: any presentation other than occiput anterior — breech (frank, complete, footling) is most common malpresentation; external cephalic version (ECV) at 36 weeks for breech. Umbilical cord prolapse: cord descends below presenting part after rupture of membranes → cord compression with contractions → fetal asphyxia → emergency delivery.",
    diagnosticCriteria:
      "PPROM: sterile speculum exam (pooling of fluid + ferning on slide + nitrazine turns blue [alkaline amniotic fluid pH 7.0–7.5 vs. vaginal pH 3.8–4.2]); AmniSure (PAMG-1 — highly sensitive, specific). Fetal distress / non-reassuring fetal status: electronic fetal monitoring (EFM) — Category I (normal), Category II (indeterminate), Category III (abnormal — late decelerations/minimal variability/sinusoidal pattern = delivery). Fetal scalp pH <7.20 = significant acidemia. Shoulder dystocia: diagnosed after head delivers and body does not; turtle sign (retraction of head).",
    presentation: {
      chiefComplaint: [
        "\"I feel a gush of fluid from my vagina\" (PROM/PPROM)",
        "\"My baby isn't in the right position\" (Malpresentation)",
        "\"Something is coming out of my vagina\" (Cord prolapse)",
      ],
      associatedSymptoms: [
        "PPROM: painless sudden gush of clear fluid; no contractions initially; fever suggests chorioamnionitis (treat with antibiotics, deliver promptly)",
        "Breech: no engagement of presenting part, ballottable mass in fundus, FHT in upper uterus",
        "Cord prolapse: sudden severe deceleration after rupture of membranes; cord visible or palpable in cervix → knee-chest or Trendelenburg position + manually elevate presenting part + emergency cesarean",
        "Shoulder dystocia: after delivery of head, turtle sign (retraction of head against perineum), failure of restitution/external rotation, failure of body to deliver with gentle downward traction",
      ],
      demographics: "PPROM: 30% of preterm deliveries. Breech: 3–4% of term pregnancies. Cord prolapse: 0.1–0.6%; higher with footling breech, prematurity, polyhydramnios. Shoulder dystocia: 0.2–3%; risk factors — macrosomia, maternal DM, post-dates, prior shoulder dystocia.",
    },
    distinguishingFeatures:
      "PPROM management by gestational age: <34 weeks → expectant (corticosteroids, latency antibiotics — azithromycin + ampicillin); 34–36 6/7 weeks → deliver; ≥37 weeks → deliver. Breech delivery: most require cesarean section (C/S); ECV at 36 weeks is first-line attempt; vaginal breech delivery only in select cases at experienced centers. Shoulder dystocia HELPERR: H-Call for Help, E-Evaluate for episiotomy, L-Legs (McRobert's maneuver — hyperflexion of maternal hips against abdomen, most effective), P-Suprapubic Pressure (dislodges anterior shoulder, NOT fundal pressure), E-Enter (internal rotational maneuvers), R-Remove posterior arm, R-Roll patient (Gaskin maneuver — all fours position).",
    redFlags: [
      "Cord prolapse: immediately place hand in vagina to manually elevate presenting part, position mother in knee-chest or Trendelenburg, call for emergency C/S; DO NOT push cord back (worsens vasospasm)",
      "Category III fetal heart rate tracing (late decelerations, absent variability, sinusoidal pattern): immediate delivery — C/S if vaginal delivery not imminent",
      "Shoulder dystocia: McRobert's + suprapubic pressure first; NEVER apply fundal pressure (worsens impaction)",
      "Chorioamnionitis: broad-spectrum IV antibiotics (ampicillin + gentamicin) + delivery regardless of gestational age",
    ],
    mnemonics: [
      {
        name: "Shoulder Dystocia — HELPERR",
        content:
          "H — Help! (call for help, OB, NICU, anesthesia)\nE — Evaluate for Episiotomy (rarely needed alone, but gives room for maneuvers)\nL — Legs (McRobert's maneuver — hyperFlex thighs onto abdomen, MOST EFFECTIVE first step)\nP — Pressure suprapubically (dislodges anterior shoulder; NEVER fundal pressure)\nE — Enter (Rubin II rotation, Woods screw, Barnum)\nR — Remove the posterior arm\nR — Roll the patient (Gaskin all-fours)\n\nCord Prolapse: ELEVATE + KNEE-CHEST + EMERGENCY C/S\n(hand in vagina to keep pressure OFF the cord)\n\nFetal Heart Rate:\nCategory I = Normal\nCategory II = Monitor closely\nCategory III = DELIVER immediately",
      },
    ],
    pimpingQuestions: [
      "What is the management of PPROM at <34 weeks?",
      "What maneuver is performed first for shoulder dystocia?",
      "What is the initial management of umbilical cord prolapse?",
      "What is the HELPERR mnemonic for shoulder dystocia?",
      "What does a Category III fetal heart rate tracing require?",
    ],
  },

  // ─── Postpartum ───────────────────────────────────────────────────────────

  {
    id: "wh-cond-postpartum",
    name: "Postpartum Complications: Endometritis and Perinatal Mood Disorders",
    icdCode: "O86.12",
    rotation: "womens-health",
    category: "Obstetrics / Postpartum Care",
    definition:
      "Postpartum endometritis: infection of the uterine lining after delivery — most common postpartum infectious complication; much more common after cesarean delivery (5–10× more common than vaginal delivery). Polymicrobial (GAS, GBS, E. coli, anaerobes); presents 2–3 days postpartum (fever + uterine tenderness + foul lochia). Perinatal mood disorders: most common obstetric complication — postpartum blues (50–80% of women, day 2–5, self-limited ≤2 weeks); postpartum depression (PPD, 10–15%, onset within 4 weeks of delivery but can occur anytime in first year; EPDS screening); postpartum psychosis (0.1–0.2% — psychiatric emergency — visual/auditory hallucinations, delusions, danger to infant). Secondary postpartum hemorrhage (late PPH): bleeding >24h but <12 weeks postpartum — uterine subinvolution, retained POC, infection.",
    diagnosticCriteria:
      "Endometritis: clinical (fever >38°C + uterine tenderness + purulent lochia); CBC, blood cultures (if septic). Treatment: IV clindamycin + gentamicin (most effective combination — triple therapy if no improvement: add ampicillin to cover enterococcus). Edinburgh Postnatal Depression Scale (EPDS): screening at 1 and 6 weeks postpartum; score ≥10 = positive screen. Postpartum psychosis: psychiatric evaluation, often requires inpatient admission.",
    presentation: {
      chiefComplaint: [
        "\"I had a C-section 3 days ago and now I have fever and my uterus is very tender\"",
        "\"I've been crying constantly and don't feel bonded with my baby\"",
        "\"I just had a baby and I think someone is trying to harm my baby\"",
      ],
      associatedSymptoms: [
        "Endometritis: fever (>38°C after first 24h — fever in first 24h often from episiotomy or normal reaction), uterine tenderness, foul-smelling lochia (may be scant with GAS), leukocytosis",
        "PPD: persistent sadness, low energy, difficulty bonding with infant, sleep/appetite changes (beyond what is expected), guilt, hopelessness, anxiety, intrusive thoughts about harming infant",
        "Postpartum blues: tearfulness, mood lability, irritability, anxiety — starts day 2–3, peaks day 5, resolves by day 14; does NOT require treatment beyond reassurance and support",
        "Postpartum psychosis: auditory/visual hallucinations, delusions (usually about infant), disorganized behavior, rapid onset (within 2 weeks), associated with bipolar disorder",
      ],
      demographics: "Endometritis: C/S more common than vaginal delivery. PPD: 10–15% of mothers; strongest RF = history of PPD, depression, or anxiety. Postpartum psychosis: 1–2/1,000 deliveries; history of bipolar disorder = 25–50% risk.",
    },
    distinguishingFeatures:
      "PPD vs. postpartum blues: blues = resolves by 2 weeks, self-limited; PPD = persists beyond 2 weeks, functional impairment, requires treatment (SSRIs — sertraline most evidence postpartum, safe in breastfeeding; therapy). Postpartum psychosis: EMERGENCY — immediately remove infant from mother's care until stabilized; admit to psychiatry (mood stabilizers + antipsychotics); do NOT leave mother alone with infant. Endometritis vs. wound infection vs. UTI: fever timing — endometritis typically 2–3 days; wound infection 4–7 days; mastitis usually beyond day 7; DVT/PE can occur at any time.",
    redFlags: [
      "Postpartum psychosis: psychiatric emergency — inpatient admission, do NOT leave infant alone with mother; antipsychotics + lithium (if bipolar history)",
      "Endometritis not responding to clindamycin + gentamicin: add ampicillin (enterococcal coverage); consider septic pelvic thrombophlebitis (SPT) — heparin if suspected",
      "Secondary PPH (late heavy bleeding postpartum): ultrasound for retained POC → surgical evacuation if present; misoprostol for subinvolution",
    ],
    mnemonics: [
      {
        name: "Postpartum Fever Timing — 'Wind, Womb, Water, Wound, Walk, Wonder'",
        content:
          "Day 1–2: Wind (atelectasis, pneumonia)\nDay 2–3: Womb (endometritis — most common)\nDay 3–5: Water (UTI)\nDay 4–7: Wound (surgical site infection)\nDay 5+: Walk (DVT/PE)\nAny time: Wonder drug (drug fever)\n\nEndometritis Treatment: Clindamycin + Gentamicin\n(Add Ampicillin if no improvement = triple therapy for enterococcal coverage)\n\nPostpartum Mood:\nBlues (2 wks): Reassurance only\nDepression (>2 wks): Sertraline + Therapy\nPsychosis: EMERGENCY → Inpatient + Antipsychotics",
      },
    ],
    pimpingQuestions: [
      "What is the first-line antibiotic regimen for postpartum endometritis?",
      "How do you distinguish postpartum blues from postpartum depression?",
      "What is postpartum psychosis and why is it a psychiatric emergency?",
      "What is the significance of fever developing 2–3 days after cesarean delivery?",
      "What is the Edinburgh Postnatal Depression Scale (EPDS) used for?",
    ],
  },

  // ─── Contraception ────────────────────────────────────────────────────────

  {
    id: "wh-cond-contraception",
    name: "Contraception and Family Planning",
    icdCode: "Z30.9",
    rotation: "womens-health",
    category: "Reproductive / Contraception",
    definition:
      "Contraceptive methods spectrum by effectiveness (perfect/typical use Pearl Index). Tier 1 (>99% effective): IUDs (levonorgestrel-IUD/Mirena, copper-IUD/Paragard) and implants (etonogestrel/Nexplanon) — LARC (Long-Acting Reversible Contraception); ideal for most women. Tier 2 (91–99%): injectables (depot medroxyprogesterone acetate/DMPA — Depo-Provera, q3 months), combined oral contraceptive pills (COCPs), patch (Xulane), ring (NuvaRing). Tier 3 (72–88%): condoms (male most reliable barrier — also STI prevention), diaphragm, cervical cap, spermicide. Permanent: tubal ligation, vasectomy. Emergency contraception (EC): levonorgestrel (Plan B — most effective within 72h but works up to 120h), ulipristal acetate (ella — more effective than Plan B 72–120h), copper IUD (most effective — >99%, up to 5 days after unprotected sex).",
    diagnosticCriteria:
      "History and physical for method selection. US Medical Eligibility Criteria (USMEC): Category 1 (no restriction), 2 (benefits outweigh risks), 3 (risks outweigh benefits), 4 (unacceptable risk). DMPA bone density: returns to normal 12–24 months after discontinuation; avoid >2 years without evaluation if at risk. Copper IUD for EC: must be placed within 120h (5 days); also provides ongoing contraception.",
    presentation: {
      chiefComplaint: [
        "\"I want to prevent pregnancy — what are my options?\"",
        "\"I had unprotected sex last night — what can I do?\"",
      ],
      associatedSymptoms: [
        "Combined OCP benefits: lighter periods, decreased dysmenorrhea, reduced risk of ovarian/endometrial cancer, acne improvement (especially anti-androgenic pills: drospirenone, norgestimate)",
        "Combined OCP risks: VTE risk (2–4×), no STI protection, headache, nausea; contraindicated in migraines with aura, HTN, age >35 + smoking, active liver disease, prior DVT",
        "DMPA (Depo-Provera): amenorrhea (70% by year 1 — a benefit for many), weight gain, decreased bone density, delayed return to fertility (12–18 months)",
        "Levonorgestrel IUD: lighter periods (often amenorrhea by year 2), hormonal — NOT effective for emergency contraception if placed after ovulation",
        "Copper IUD (Paragard): non-hormonal, lasts 10 years, can cause heavier/more crampy periods, most effective EC method",
      ],
      demographics: "Unintended pregnancy: 45% of all US pregnancies. LARC: most cost-effective method; recommended as first-line for most women including adolescents (ACOG). DMPA: commonly used in breastfeeding women (progestin-only — safe after 6 weeks postpartum).",
    },
    distinguishingFeatures:
      "Combined (estrogen + progestin) vs. progestin-only: estrogen-containing contraceptives contraindicated in: migraines with aura (stroke risk), smoking + age >35, DVT/PE history, postpartum <6 weeks breastfeeding, active liver disease, SLE with antiphospholipid antibodies. Progestin-only options: mini-pill (norethindrone), DMPA, implant, LNG-IUD — safe in these conditions. DMPA delayed return to fertility: counsel women who want pregnancy within 1–2 years to choose different method.",
    redFlags: [
      "IUD insertion pain followed by vasovagal response: self-limited, treat supportively; rarely perforated uterus — if string not visible → imaging",
      "Combined OCP + smoking in women >35: absolute contraindication — strongly increases VTE and stroke risk",
      "Unrecognized IUD expulsion: perform pregnancy test if woman on IUD presents with pregnancy symptoms; if expelled → unprotected sex",
    ],
    mnemonics: [
      {
        name: "Contraceptive Effectiveness — LARC First",
        content:
          "TIER 1 (>99%): LARC\nImplant (Nexplanon, 3 years) → 99.95% effective\nLevonorgestrel IUD (Mirena, Liletta) → 99.8%, lighter periods\nCopper IUD (Paragard, 10 years) → 99.2%, non-hormonal, best EC\n\nTIER 2 (91–99%):\nCombined OCP, Patch, Ring → 91% typical, 99% perfect\nDepo-Provera → 94% typical (delayed fertility)\n\nCOCP Absolute Contraindications:\nMigraines WITH aura\nAge >35 + Smoking\nDVT/PE history\nHTN (uncontrolled)\nActive liver disease\n\nEmergency Contraception Timeline:\nCopper IUD: most effective, up to 120h\nUlipristal (ella): up to 120h, more effective 72–120h\nLevonorgestrel (Plan B): up to 120h, most effective <72h",
      },
    ],
    pimpingQuestions: [
      "What are the absolute contraindications to combined oral contraceptive pills?",
      "What is the most effective form of emergency contraception?",
      "What is LARC and why is it preferred?",
      "What are the benefits and risks of depot medroxyprogesterone acetate?",
      "How does the copper IUD work as emergency contraception?",
    ],
  },
];
