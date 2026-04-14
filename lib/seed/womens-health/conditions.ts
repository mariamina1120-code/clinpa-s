// @ts-nocheck
import { Condition } from "@/types/seed";

export const womensHealthConditions: Condition[] = [
  {
    id: "wh-cond-preeclampsia",
    rotation: "womens-health",
    name: "Preeclampsia and HELLP Syndrome",
    overview:
      "Preeclampsia is a hypertensive disorder of pregnancy characterized by new-onset hypertension (≥ 140/90 mmHg on two occasions) after 20 weeks gestation, accompanied by proteinuria or severe features in the absence of proteinuria. It affects 3–5% of pregnancies and is a leading cause of maternal and perinatal morbidity and mortality worldwide. HELLP syndrome (Hemolysis, Elevated Liver enzymes, Low Platelets) is a severe variant affecting 0.5–0.9% of pregnancies. Delivery is the only definitive treatment.",
    epidemiology:
      "Incidence: 3–5% of all pregnancies; severe preeclampsia 1–2%. Risk factors: nulliparity (greatest risk), prior preeclampsia (7× increased risk), multifetal gestation, chronic hypertension, pregestational diabetes, obesity (BMI > 30), antiphospholipid syndrome, SLE, CKD, age > 35, Black race (2–3× increased risk — structural racism and healthcare inequities contribute). 10–20% of maternal deaths in developed countries.",
    pathophysiology:
      "Defective placentation: defective invasion of spiral arteries by extravillous trophoblasts → high-resistance, low-flow uteroplacental circulation → placental ischemia → release of antiangiogenic factors (sFlt-1 — soluble fms-like tyrosine kinase 1; sEng — soluble endoglin) → sFlt-1 binds and neutralizes VEGF and PlGF → generalized endothelial dysfunction → vasoconstriction (HTN), proteinuria, multi-organ damage. sFlt-1:PlGF ratio > 38 predicts preeclampsia development 4 weeks before clinical onset.",
    presentation: [
      "Hypertension: ≥ 140/90 mmHg (two readings ≥ 4 hours apart) after 20 weeks in previously normotensive woman",
      "Proteinuria: ≥ 300 mg/24-hour collection, OR protein:creatinine ratio ≥ 0.3, OR dipstick ≥ 2+ (least reliable)",
      "SEVERE FEATURES (any one of the following = severe preeclampsia): BP ≥ 160/110 mmHg (on two occasions ≥ 4 hours apart); thrombocytopenia < 100,000/µL; progressive renal insufficiency (Cr > 1.1 mg/dL or doubling without other cause); impaired hepatic function (AST or ALT > 2× ULN, persistent severe RUQ pain unresponsive to medication); pulmonary edema; new-onset severe headache unresponsive to medication or visual symptoms (scotomata, blurring, photophobia)",
      "HELLP syndrome: Hemolysis (LDH > 600, microangiopathic hemolytic anemia on smear — schistocytes); Elevated Liver enzymes (AST/ALT ≥ 2× ULN); Low Platelets (< 100,000). May occur without classic HTN/proteinuria.",
      "Eclampsia: new-onset grand mal seizures in a woman with preeclampsia (or less commonly, without preceding diagnosis)",
      "Symptoms suggestive of severe disease: severe frontal headache, visual disturbances (scotomata, diplopia), RUQ/epigastric pain (hepatic capsule distension/edema), sudden weight gain (≥ 2 lb/week), face/hand edema",
    ],
    diagnosis: [
      "Preeclampsia without severe features: BP ≥ 140/90 × 2 + proteinuria ≥ 300 mg/24h (or P:C ≥ 0.3 or dipstick 2+) after 20 weeks in previously normotensive woman",
      "Preeclampsia with severe features: above + any ONE severe feature (see presentation)",
      "Preeclampsia without proteinuria: in the absence of proteinuria, diagnosis if BP ≥ 140/90 + any of: PLT < 100k, Cr > 1.1, AST/ALT > 2× ULN, pulmonary edema, new-onset headache/visual symptoms",
      "HELLP: LDH > 600 + AST/ALT > 2× ULN + PLT < 100,000 (Tennessee classification). Mississippi classification divides by PLT into Class 1 (< 50k), 2 (50–100k), 3 (100–150k)",
      "Labs: CBC with platelets, BMP (Cr, LFTs), uric acid, LDH, 24-hour urine protein or P:C ratio, fetal kick counts, NST/BPP, Doppler UA",
    ],
    management: [
      "ANTIHYPERTENSIVE THERAPY: Treat BP ≥ 160/110 within 30–60 minutes to prevent maternal stroke (the leading cause of preeclampsia-related maternal death). First-line options: IV labetalol 20 mg IV → 40 mg → 80 mg (max 300 mg total); oral nifedipine IR 10 mg PO → repeat in 20 min (most studied, most effective); IV hydralazine 5–10 mg IV q20 min. Maintenance: oral labetalol, nifedipine ER, or methyldopa. Target: BP ≤ 155/105 acutely; ≤ 140/90 for maintenance. ACE inhibitors and ARBs are CONTRAINDICATED in pregnancy.",
      "MAGNESIUM SULFATE (seizure prophylaxis): Indicated for severe features (prevents eclampsia, NOT treatment of HTN). Loading dose: 4–6 g IV over 15–20 minutes. Maintenance: 1–2 g/hr. Therapeutic range: 4–7 mEq/L. Monitor: DTRs (lost at 7–10), respiratory rate ≥ 12/min, urine output ≥ 30 mL/hr. Antidote for toxicity: calcium gluconate 1 g IV over 3 minutes.",
      "DELIVERY TIMING: Definitive treatment — only cure is delivery of the placenta. Without severe features: deliver at 37 0/7 weeks. With severe features: deliver at 34 0/7 weeks (corticosteroids if < 34 weeks — betamethasone 12 mg IM × 2 doses 24 hours apart for fetal lung maturity). Eclampsia or HELLP: deliver regardless of gestational age after stabilization.",
      "POSTPARTUM MONITORING: Preeclampsia can develop or worsen postpartum (up to 6 weeks — 'late postpartum preeclampsia'). Monitor BP at 72 hours and at 7–10 days post-discharge. Continue antihypertensives as needed. Furosemide for pulmonary edema. AVOID NSAIDs (worsen BP and renal function postpartum).",
      "LOW-DOSE ASPIRIN PROPHYLAXIS: 81 mg/day starting at 12–28 weeks (ideally before 16 weeks) for women with ≥ 1 high-risk factor or ≥ 2 moderate-risk factors (reduces preeclampsia risk by ~50% in high-risk women per USPSTF Grade B recommendation).",
    ],
    complications: [
      "Eclampsia (generalized tonic-clonic seizures) — 1–2% of preeclampsia; manage with MgSO₄ 4–6 g IV bolus + delivery",
      "Placental abruption — premature placental separation (abdominal pain + vaginal bleeding + uterine rigidity)",
      "Maternal stroke — from uncontrolled severe-range hypertension; most common cause of death in preeclampsia",
      "Pulmonary edema — from capillary leak + excessive IV fluids; treat with O₂ + furosemide",
      "Acute kidney injury (AKI) — usually resolves postpartum",
      "HELLP complications: hepatic rupture/hematoma (rare, life-threatening — RUQ pain + hemodynamic instability), DIC",
      "Fetal complications: IUGR (placental insufficiency), oligohydramnios, prematurity, placental abruption, stillbirth",
      "Long-term: women with preeclampsia have 2× lifetime risk of CVD, 4× risk of hypertension — counsel on cardiovascular risk modification",
    ],
    clinicalPearl:
      "Severe-range blood pressure (≥ 160/110 mmHg) must be treated within 30–60 minutes — this is a clinical emergency. The 2022 ACOG and SMFM guidelines emphasize that delay in treating severe-range BP is the most common preventable cause of maternal stroke and death in preeclampsia. If IV access is not immediately available, oral nifedipine IR 10 mg is appropriate while IV access is being obtained. Do NOT give magnesium for hypertension control — it is used only for seizure prophylaxis.",
    boardRecallTip: "Preeclampsia: BP ≥ 140/90 after 20 weeks + proteinuria. Severe features: BP ≥ 160/110, PLT < 100k, Cr > 1.1, elevated LFTs, pulmonary edema, headache/visual symptoms. MgSO₄ = seizure prophylaxis (not antihypertensive). Treat BP ≥ 160/110 within 30–60 min (labetalol, nifedipine IR, hydralazine). Delivery: 37 weeks (no severe features), 34 weeks (severe features). Antidote for Mg toxicity = calcium gluconate.",
  },
  {
    id: "wh-cond-gdm",
    rotation: "womens-health",
    name: "Gestational Diabetes Mellitus (GDM)",
    overview:
      "Gestational diabetes mellitus (GDM) is carbohydrate intolerance that is first recognized or begins during pregnancy, resulting from inadequate pancreatic insulin secretion in the setting of progressive insulin resistance driven by placental hormones. It affects 6–9% of pregnancies in the US and is increasing in prevalence paralleling the obesity epidemic. GDM is associated with significant maternal (preeclampsia, cesarean delivery, future T2DM) and neonatal (macrosomia, shoulder dystocia, neonatal hypoglycemia, stillbirth) complications. Most cases resolve after delivery, but 50% of women with GDM will develop T2DM within 10 years.",
    epidemiology:
      "Prevalence: 6–9% of pregnancies in the US; up to 14% with universal OGTT criteria. Risk factors: BMI ≥ 25, prior GDM, prior macrosomic infant (> 4,500 g), family history of DM (first-degree relative), gestational age > 25 years, Hispanic, Black, Asian, Native American or Pacific Islander ethnicity, PCOS. Screen all pregnant women at 24–28 weeks.",
    pathophysiology:
      "Normal pregnancy: progressive insulin resistance driven by placental hormones (human placental lactogen, progesterone, cortisol, prolactin). The pancreas compensates with ↑ insulin secretion. GDM: pancreatic beta-cell secretory capacity is insufficient to overcome pregnancy-induced insulin resistance → relative insulin deficiency → fetal hyperglycemia → fetal hyperinsulinemia → macrosomia (insulin is the fetal growth hormone).",
    presentation: [
      "Usually asymptomatic — identified on routine screening at 24–28 weeks",
      "Polyuria, polydipsia, glucosuria — may be present but are nonspecific in pregnancy",
      "Large-for-gestational-age (LGA) fetus on ultrasound (abdominal circumference ≥ 90th percentile)",
      "Polyhydramnios (excess amniotic fluid — fetal polyuria from hyperglycemia)",
      "Risk factors: obesity, prior GDM, family history, prior macrosomic infant",
    ],
    diagnosis: [
      "UNIVERSAL SCREENING at 24–28 weeks with TWO-STEP APPROACH (most common in US):",
      "Step 1: 1-hour 50-gram glucose challenge test (GCT) — non-fasting; threshold: ≥ 130 mg/dL (some labs use ≥ 140 — higher specificity, lower sensitivity). If positive → proceed to Step 2.",
      "Step 2: 3-hour 100-gram OGTT (fasting) — Carpenter-Coustan criteria: fasting ≥ 95 mg/dL, 1-hour ≥ 180, 2-hour ≥ 155, 3-hour ≥ 140. DIAGNOSIS if ≥ 2 values meet or exceed thresholds.",
      "ONE-STEP APPROACH (IADPSG/ADA — single 2-hour 75g OGTT fasting): fasting ≥ 92, 1h ≥ 180, 2h ≥ 153 — ONE abnormal value = GDM. More sensitive, detects more cases, but more women labeled (controversial in US).",
      "Early screening (first trimester): for high-risk women (BMI ≥ 30, prior GDM, family history) — screen with fasting glucose or HbA1c at first prenatal visit. If HbA1c ≥ 6.5% or fasting glucose ≥ 126 → overt (pregestational) diabetes.",
    ],
    management: [
      "MEDICAL NUTRITION THERAPY (MNT) — first-line: carbohydrate-controlled diet (35–45% of calories as complex carbs, distributed across 3 meals + 2–3 snacks). Avoid simple sugars and refined carbohydrates. Total daily calories: 2,000–2,500 kcal/day for normal weight women (adjust per BMI). Exercise: 30 minutes of moderate aerobic activity most days of the week (lowers postprandial glucose).",
      "GLUCOSE MONITORING TARGETS (ACOG): Fasting: ≤ 95 mg/dL; 1-hour postprandial: ≤ 140 mg/dL; 2-hour postprandial: ≤ 120 mg/dL. Check fasting + 1-hour postprandial after each meal (4 readings/day). If consistently above target on MNT alone after 1–2 weeks → pharmacotherapy.",
      "INSULIN THERAPY (first-line pharmacotherapy): Insulin does not cross the placenta (safest for fetus). Start: NPH 0.1–0.2 units/kg/day at bedtime for fasting hyperglycemia; regular or rapid-acting (lispro, aspart) for postprandial. Total dose often increases through pregnancy due to progressive insulin resistance.",
      "ORAL AGENTS: Metformin (ACOG acceptable — crosses placenta, long-term fetal safety data reassuring but limited; ~50% will eventually need insulin); glyburide (higher neonatal hypoglycemia rate, falls out of favor — not recommended by SMFM as first-line). Both are NOT FDA-approved for GDM but are widely used.",
      "FETAL SURVEILLANCE: Kick counts from 28 weeks. NST/BPP starting at 32–34 weeks if on medication; 36 weeks if diet-controlled. Growth ultrasound at 32–36 weeks (screen for LGA).",
      "DELIVERY TIMING: GDM diet-controlled → deliver at 40–41 weeks. GDM medication-controlled → deliver at 39 weeks. INDUCTION or C-SECTION if EFW ≥ 4,500 g (macrosomia — shoulder dystocia risk).",
      "POSTPARTUM: Discontinue insulin/metformin at delivery (glucose usually normalizes immediately). 75g OGTT at 4–12 weeks postpartum (screen for persistent T2DM — 10–20% of GDM women). Annual HbA1c or fasting glucose thereafter. Breastfeeding encouraged — lowers maternal T2DM risk.",
    ],
    complications: [
      "Maternal: preeclampsia (2× risk), cesarean delivery (macrosomia), future T2DM (50% within 10 years), metabolic syndrome",
      "Fetal/neonatal: macrosomia (shoulder dystocia risk — brachial plexus injury, clavicle fracture), neonatal hypoglycemia (fetal hyperinsulinemia persists briefly after birth — feed early, monitor glucose), neonatal hyperbilirubinemia, respiratory distress syndrome (lung maturity delayed), stillbirth (uncontrolled GDM)",
      "Long-term for offspring: higher risk of obesity, metabolic syndrome, T2DM",
    ],
    clinicalPearl:
      "Neonatal hypoglycemia after delivery of a GDM mother is caused by fetal hyperinsulinism — fetal pancreatic beta cells have been chronically stimulated by elevated maternal glucose and continue to secrete high levels of insulin after birth despite the sudden drop in glucose supply. Neonates of GDM mothers should have blood glucose checked at 1–2 hours of life and before each feed for the first 24 hours. Target: blood glucose ≥ 45 mg/dL. If low: early and frequent breastfeeding or formula supplementation.",
    boardRecallTip: "GDM screen: 1-hour 50g GCT at 24–28 weeks (threshold ≥ 130–140) → if + → 3-hour 100g OGTT (≥ 2 abnormal = GDM). Targets: fasting ≤ 95, 1h PP ≤ 140. MNT first. Insulin = first-line drug. Macrosomia → shoulder dystocia → neonatal hypoglycemia. Postpartum: 75g OGTT at 4–12 weeks. 50% develop T2DM within 10 years.",
  },
  {
    id: "wh-cond-ectopic",
    rotation: "womens-health",
    name: "Ectopic Pregnancy",
    overview:
      "An ectopic pregnancy occurs when a fertilized ovum implants outside the uterine cavity. The fallopian tube is the most common site (95-97% of ectopic pregnancies, most commonly the ampulla). Ectopic pregnancy is the leading cause of first-trimester maternal death and accounts for 9% of all pregnancy-related deaths. It occurs in approximately 2% of all pregnancies. Early diagnosis is critical — a ruptured ectopic is a life-threatening surgical emergency.",
    epidemiology:
      "Incidence: ~2% of all pregnancies (1 in 50). Prevalence has increased due to rising rates of PID, IVF use, and prior ectopic pregnancies. Risk factors: prior ectopic pregnancy (most significant — 10× increased risk), prior PID/salpingitis (damaged/scarred tube), tubal surgery (salpingoplasty, sterilization), current IUD use (IUD prevents intrauterine pregnancy more than ectopic → if pregnancy occurs with IUD in place, 50% are ectopic), endometriosis, smoking (impairs tubal motility), IVF, advanced reproductive age, prior pelvic/abdominal surgery.",
    pathophysiology:
      "Impaired transport of fertilized ovum through the fallopian tube (scarring, cilia dysfunction, spasm) → implantation in tubal wall → trophoblastic invasion of poorly distensible tissue → tubal distension → rupture at ~6–8 weeks (varies) → hemorrhage into peritoneal cavity → hemoperitoneum → hemorrhagic shock.",
    presentation: [
      "Classic triad (present in only 50% of cases): amenorrhea (missed period) + vaginal bleeding (abnormal, often light spotting or irregular) + unilateral pelvic pain",
      "Pain: initially colicky/crampy (tubal distension), sharp and severe with rupture; referred to shoulder if diaphragmatic irritation from hemoperitoneum (Kehr's sign — left shoulder pain)",
      "β-hCG positive (but may be lower than expected for gestational age — abnormal rise is key)",
      "Hemodynamic instability (tachycardia, hypotension, syncope) = RUPTURED ectopic → surgical emergency",
      "Cervical motion tenderness (CMT), adnexal tenderness, adnexal mass on bimanual exam",
      "May be asymptomatic in very early unruptured ectopic — detected on surveillance TVUS in high-risk patients",
    ],
    diagnosis: [
      "Quantitative serum β-hCG: in normal intrauterine pregnancy, β-hCG rises ≥ 53% every 48 hours (doubles approximately every 48–72 hours). Subnormal rise (< 53% in 48 hours) suggests ectopic or failing IUP (not diagnostic alone).",
      "Transvaginal ultrasound (TVUS): most important diagnostic tool. Discriminatory zone: when β-hCG ≥ 1,500–3,500 mIU/mL (institution-dependent), IUP should be visible on TVUS. No IUP above discriminatory zone = strong suspicion for ectopic. Definitive finding: extra-uterine gestational sac (with yolk sac or embryo) — seen in only ~30% of ectopics (most ectopics present as adnexal mass or 'blob sign'). Free pelvic fluid + positive β-hCG = ectopic until proven otherwise.",
      "Serum progesterone: < 5 ng/mL suggests non-viable pregnancy (ectopic or failing IUP); > 25 ng/mL usually associated with viable IUP; intermediate (5–25) — non-diagnostic.",
      "Diagnostic criteria: hemodynamically unstable + positive β-hCG + no IUP on TVUS = ruptured ectopic → emergent surgery (no further imaging needed).",
    ],
    management: [
      "EXPECTANT MANAGEMENT: selected cases with β-hCG < 200 mIU/mL + spontaneously declining β-hCG + no symptoms + very small/no adnexal mass + no free fluid. Requires very close follow-up (serial β-hCG every 48h until undetectable).",
      "METHOTREXATE (MTX) — medical management: Indications: hemodynamically stable + unruptured + β-hCG < 5,000 mIU/mL (optimal; up to 10,000 with careful counseling) + no fetal cardiac activity + no large hematoma (free fluid < 300 mL) + compliant patient. Contraindications: hemodynamic instability, IgA deficiency, hepatic/renal/pulmonary disease, blood dyscrasias, active PUD, breastfeeding, inability to follow up. Single-dose protocol: MTX 50 mg/m² IM × 1. Monitor β-hCG on days 4 and 7 — if decline ≥ 15%: continue monitoring weekly until undetectable; if decline < 15%: repeat dose or surgery. Post-MTX: avoid folic acid, NSAIDs, alcohol, sexual intercourse, sun exposure; wait ≥ 3 months before conceiving.",
      "SURGICAL MANAGEMENT: Indications: hemodynamic instability (ruptured ectopic — emergent), failed MTX, contraindications to MTX, β-hCG ≥ 5,000 (relative), large hematoma, fetal cardiac activity. Laparoscopic approach preferred. Salpingostomy (remove ectopic, preserve tube) vs salpingectomy (remove tube — preferred if tube damaged or if contralateral tube is healthy). Persistent ectopic after salpingostomy: treat with MTX.",
      "Rh-NEGATIVE PATIENTS: Give RhoGAM (Rh D immune globulin) 50 mcg IM if < 12 weeks, 300 mcg if > 12 weeks — all Rh-negative women with ectopic pregnancy to prevent alloimmunization.",
    ],
    complications: [
      "Rupture with massive intraperitoneal hemorrhage — leading cause of first-trimester maternal mortality",
      "Persistent ectopic (after salpingostomy) — treat with MTX; more common if β-hCG > 3,000 at surgery",
      "Infertility — 30% chance of repeat ectopic; 60% achieve IUP with remaining tube",
      "Rh sensitization (if Rh-negative and RhoGAM not given)",
    ],
    clinicalPearl:
      "An IUD does NOT prevent ectopic pregnancy — it prevents intrauterine pregnancy. If a woman with an IUD becomes pregnant, the relative proportion of ectopic pregnancies is approximately 50% (compared to 2% in the general population). Never reassure a patient with a positive β-hCG and an IUD that the IUD 'prevents ectopic' — perform TVUS immediately. Similarly, a β-hCG below the discriminatory zone does NOT exclude a ruptured ectopic — up to 40% of ruptured ectopics have β-hCG below 1,000 mIU/mL at time of rupture.",
    boardRecallTip: "Ectopic triad: amenorrhea + vaginal bleeding + unilateral pain. Discriminatory zone: β-hCG ≥ 1,500–3,500 with no IUP on TVUS = ectopic. MTX criteria: stable + unruptured + β-hCG < 5,000 + no cardiac activity. Surgery: ruptured or MTX failed. RhoGAM for Rh-negative. IUD in place + pregnancy = 50% ectopic risk.",
  },
  {
    id: "wh-cond-pcos",
    rotation: "womens-health",
    name: "Polycystic Ovary Syndrome (PCOS)",
    overview:
      "Polycystic ovary syndrome (PCOS) is the most common endocrine disorder in women of reproductive age, affecting 6–12% of women. It is a heterogeneous syndrome characterized by hyperandrogenism, ovulatory dysfunction, and polycystic ovarian morphology. PCOS is the leading cause of anovulatory infertility and is strongly associated with insulin resistance and metabolic syndrome. Diagnosis requires ruling out other causes of hyperandrogenism and anovulation, and management is tailored to the patient's primary concerns (cycle regulation, hirsutism, fertility, or metabolic health).",
    epidemiology:
      "Prevalence: 6–12% of reproductive-age women (up to 21% depending on diagnostic criteria used). Onset: perimenarchal. Strong genetic component (first-degree relatives have 50% prevalence). All ethnic groups affected — higher clinical expression in South Asian and Middle Eastern women. Leading cause of female infertility in the US. Associated with significantly increased risk of T2DM (3–7× risk), metabolic syndrome, endometrial hyperplasia/cancer, depression, and sleep apnea.",
    pathophysiology:
      "Multifactorial: insulin resistance (present in 75–80%) → compensatory hyperinsulinemia → (1) stimulates LH secretion and sensitizes ovarian theca cells to LH → excess androgen (testosterone, androstenedione) production; (2) inhibits SHBG (sex hormone-binding globulin) → increases free testosterone. Excess androgens → follicular atresia (prevents dominant follicle selection and ovulation) → accumulation of small antral follicles ('polycystic' morphology). LH:FSH ratio typically elevated (> 2:1 or 3:1) due to increased LH pulse amplitude.",
    presentation: [
      "Menstrual irregularity: oligomenorrhea (cycles > 35 days) or amenorrhea — most common presenting symptom",
      "Hyperandrogenism — clinical: hirsutism (excess terminal hair in male pattern — face, chest, abdomen, inner thighs; Ferriman-Gallwey score ≥ 8 = significant), acne (especially jaw/chin), alopecia (androgenetic — temporal hair thinning)",
      "Hyperandrogenism — biochemical: elevated total testosterone, free testosterone, or DHEA-S",
      "Infertility — anovulation/irregular ovulation is the primary mechanism",
      "Obesity (50–80% of PCOS) — particularly central/visceral adiposity worsening insulin resistance",
      "Acanthosis nigricans — hyperpigmented, velvety skin in skin folds (axillae, neck, groin) — sign of insulin resistance",
      "Polycystic ovaries on US: ≥ 20 follicles per ovary (≥ 2–9 mm each) OR ovarian volume > 10 mL (one ovary sufficient). NOTE: polycystic morphology alone is insufficient for PCOS diagnosis.",
    ],
    diagnosis: [
      "ROTTERDAM CRITERIA (2 of 3 required, after exclusion of other causes): (1) Oligo- or anovulation; (2) Clinical or biochemical hyperandrogenism; (3) Polycystic ovarian morphology on ultrasound (≥ 20 follicles per ovary or volume > 10 mL)",
      "EXCLUSION of other causes (mandatory): Thyroid dysfunction (TSH), hyperprolactinemia (prolactin), non-classic congenital adrenal hyperplasia (17-OHP — elevated in morning → ACTH stimulation test to differentiate), Cushing syndrome (24-hour urine cortisol, dexamethasone suppression test), androgen-secreting tumor (rapid virilization + testosterone > 200 ng/dL → imaging)",
      "Hormone panel: LH:FSH ratio (often > 2:1), total testosterone (mildly elevated — < 150 ng/dL; if > 200, consider tumor), DHEA-S (adrenal origin), SHBG (low — increases free androgen), fasting insulin and glucose (HOMA-IR for insulin resistance)",
      "Metabolic assessment: fasting lipid panel, fasting glucose or 75g OGTT (preferred — more sensitive for prediabetes/T2DM), HbA1c, BP",
      "Endometrial assessment: in women with prolonged amenorrhea (> 3 months) — unopposed estrogen from anovulation increases endometrial cancer risk. Progesterone withdrawal test or endometrial biopsy (if thickened endometrium > 12 mm on US or risk factors for EC).",
    ],
    management: [
      "LIFESTYLE MODIFICATION (ALL patients): 5–10% weight loss in obese women with PCOS can restore ovulation, reduce androgen levels, improve insulin sensitivity, and normalize menstrual cycles. Moderate exercise (150 min/week) independent of weight loss improves metabolic parameters.",
      "CYCLE REGULATION (not seeking fertility): Combined oral contraceptive pills (COCPs) — first-line. Suppress LH → reduce ovarian androgen production; increase SHBG → lower free testosterone; regulate cycles; reduce hirsutism/acne; protect endometrium from hyperplasia.",
      "HIRSUTISM: COCPs first-line. Add spironolactone 50–200 mg/day (aldosterone antagonist + androgen receptor blocker) if inadequate response — requires effective contraception (teratogenic in males). Eflornithine cream (Vaniqa) for facial hair — inhibits hair follicle ornithine decarboxylase. Laser hair removal for definitive treatment.",
      "INFERTILITY (seeking pregnancy): First-line ovulation induction — letrozole 2.5–7.5 mg/day (days 3–7) is now preferred over clomiphene (PCOSACT trial — higher ovulation and live birth rate). Clomiphene 50–150 mg/day (days 3–7) remains acceptable. Add metformin to letrozole in obese women with IR (improves response). Second-line: injectable gonadotropins (FSH) with close monitoring. Third-line: IVF.",
      "INSULIN RESISTANCE / METABOLIC: Metformin 500–2,000 mg/day — improves insulin sensitivity, can restore ovulation, modestly reduces androgens, prevents progression to T2DM. Annual screening: fasting glucose + HbA1c (or OGTT). Statin therapy if dyslipidemia present.",
      "ENDOMETRIAL PROTECTION: In anovulatory women not using COCPs — at minimum, induce withdrawal bleed every 3 months with medroxyprogesterone acetate 10 mg × 10 days (prevents unopposed estrogen-driven endometrial hyperplasia).",
    ],
    complications: [
      "Infertility (anovulatory) — leading cause of female factor infertility in the US",
      "Endometrial hyperplasia and endometrial cancer — from unopposed estrogen (anovulation) — 3× increased risk",
      "Type 2 diabetes mellitus — 30–40% lifetime risk",
      "Metabolic syndrome — hypertension, dyslipidemia, central obesity",
      "Cardiovascular disease — 2× increased risk of MI, stroke (due to metabolic risk factors)",
      "Depression and anxiety — significantly higher prevalence; screen at diagnosis and annually",
      "Sleep apnea — 5–10× higher prevalence (especially with obesity)",
      "Gestational diabetes and preeclampsia during pregnancy",
    ],
    clinicalPearl:
      "Letrozole has replaced clomiphene citrate as the first-line ovulation induction agent for PCOS-related infertility. The PCOSACT trial (NEJM 2014) demonstrated significantly higher ovulation rates (61% vs 48%), live birth rates (27.5% vs 19.1%), and lower multiple pregnancy rates with letrozole compared to clomiphene in women with PCOS. Letrozole works by transiently inhibiting estrogen synthesis (aromatase inhibitor) → removes negative feedback on hypothalamus → FSH surge → follicular development. Unlike clomiphene, it does not deplete estrogen receptors in the endometrium, resulting in better endometrial receptivity.",
    boardRecallTip: "PCOS Rotterdam criteria: 2 of 3 (oligo/anovulation, hyperandrogenism, polycystic ovaries). LH:FSH > 2:1. Rule out: thyroid, prolactin, CAH (17-OHP), Cushing's. Treatment: lifestyle → COCPs (cycle regulation) → spironolactone (hirsutism) → letrozole (ovulation induction, preferred over clomiphene). Metformin for IR/metabolic. Protect endometrium every 3 months.",
  },
  {
    id: "wh-cond-pph",
    rotation: "womens-health",
    name: "Postpartum Hemorrhage (PPH)",
    overview:
      "Postpartum hemorrhage (PPH) is defined as blood loss ≥ 500 mL after vaginal delivery or ≥ 1,000 mL after cesarean section, or any amount causing hemodynamic instability. It is the leading cause of maternal mortality worldwide, accounting for 27% of maternal deaths globally. In the US, PPH affects approximately 1–5% of deliveries. Primary PPH occurs within 24 hours of delivery; secondary PPH occurs between 24 hours and 12 weeks postpartum (most commonly due to retained products of conception). Uterine atony accounts for 70–80% of PPH cases.",
    epidemiology:
      "Affects 1–5% of deliveries. Leading cause of maternal death worldwide. In the US, severe maternal morbidity from PPH is increasing (rates doubled from 2001 to 2010 and continue to rise). Risk factors include: placenta previa/accreta spectrum, prior uterine surgery, grand multiparity (≥ 5 deliveries), multiple gestation, chorioamnionitis, prolonged labor, operative delivery (forceps/vacuum), macrosomia, polyhydramnios, obesity, and preeclampsia.",
    pathophysiology:
      "4 T's of PPH: (1) TONE (70%): uterine atony — the uterus fails to contract after delivery of the placenta, causing continued hemorrhage from placental implantation site. (2) TRAUMA (20%): lacerations of cervix, vagina, or perineum; uterine rupture; hematomas. (3) TISSUE (9%): retained placenta or placental fragments preventing uterine contraction; placenta accreta spectrum (abnormal placental attachment). (4) THROMBIN (1%): coagulopathy — preexisting (hemophilia, von Willebrand disease) or acquired (DIC from amniotic fluid embolism, placental abruption, HELLP, massive hemorrhage).",
    presentation: [
      "Excessive vaginal bleeding after delivery — initially bright red, may slow then recur",
      "Soft, 'boggy' uterus on bimanual exam (atony — most common finding)",
      "Visible lacerations of cervix, vagina, or perineum (trauma) — inspect thoroughly after every delivery",
      "Placenta not delivered within 30 minutes or incomplete placenta (tissue — count cotyledons on delivered placenta; missing segment = retained)",
      "Signs of hemodynamic compromise: tachycardia (earliest sign), hypotension (late), pallor, diaphoresis, altered mental status",
      "Uterus deviated laterally and bladder full = bladder distension preventing uterine contraction (most commonly missed cause of PPH — decompress with Foley)",
    ],
    diagnosis: [
      "Quantitative blood loss (QBL): weigh all blood-soaked materials (1 mL ≈ 1 g); use calibrated drape for vaginal deliveries; drain containers for C-section. QBL has replaced clinical estimation (consistently underestimates by 30–50%).",
      "CBC: hemoglobin and hematocrit (may be normal initially due to hemoconcentration — check serially)",
      "Coagulation studies (PT/INR, aPTT, fibrinogen, D-dimer): fibrinogen < 200 mg/dL in the setting of PPH predicts progression to severe hemorrhage; fibrinogen < 100 = DIC. Viscoelastic testing (TEG/ROTEM) if available — guides targeted product replacement.",
      "Type and screen/crossmatch: immediately upon recognition of PPH",
      "Ultrasound: to evaluate for retained products of conception or hematoma",
    ],
    management: [
      "FIRST-LINE — UTERINE MASSAGE + BIMANUAL COMPRESSION: Immediately after placenta delivery — uterine fundal massage to stimulate contraction. Bimanual compression (one hand in vagina forming a fist against anterior wall, one hand on abdomen over uterine fundus — compress and massage).",
      "UTEROTONIC MEDICATIONS (in sequence):",
      "Oxytocin (Pitocin) — FIRST-LINE: 10–40 units in 1L NS at 125–250 mL/hr IV infusion (do NOT give undiluted IV push — causes hypotension). May also give 10 units IM.",
      "Misoprostol (Cytotec): 600–1,000 mcg rectally or sublingually (useful when IV access not available, in resource-limited settings).",
      "Methylergonovine (Methergine): 0.2 mg IM; CONTRAINDICATED in hypertension (causes vasospasm and hypertensive crisis).",
      "Carboprost (Hemabate): 15-methyl-PGF2α; 250 mcg IM q15–90 min (max 8 doses); CONTRAINDICATED in asthma (bronchospasm).",
      "Tranexamic acid (TXA): 1 g IV over 10 minutes — give within 3 hours of delivery onset of PPH. Reduces mortality from PPH by ~30% (WOMAN trial). Repeat 1 g if ongoing bleeding or re-bleeding at 30 minutes. Give for any cause of PPH.",
      "SURGICAL ESCALATION (if medications insufficient): Intrauterine balloon tamponade (Bakri balloon, Foley) — fills with 500 mL NS; first-line surgical option. B-Lynch compression suture (laparotomy). Uterine artery ligation (O'Leary suture). Uterine devascularization. Hysterectomy — definitive treatment, most effective; recommended if balloon fails in unstable patient.",
      "TRANSFUSION: Activate massive transfusion protocol (MTP) early (1:1:1 ratio pRBC:FFP:platelets). Targets: Hgb ≥ 8 g/dL; fibrinogen ≥ 200 mg/dL (give cryoprecipitate if low); PLT ≥ 50,000. Avoid hypothermia, acidosis, hypocalcemia — the 'lethal triad' that perpetuates hemorrhage.",
      "PREVENTION: Active management of third stage (AMTSL): oxytocin 10 units IM immediately after delivery of anterior shoulder (reduces PPH by 60%); controlled cord traction; uterine massage (optional per WHO). Delayed cord clamping (30–60 seconds) compatible with AMTSL.",
    ],
    complications: [
      "Hemorrhagic shock, cardiac arrest, maternal death",
      "DIC (consumptive coagulopathy — from massive hemorrhage, amniotic fluid embolism, placental abruption)",
      "Sheehan syndrome: pituitary necrosis from prolonged hypotension → panhypopituitarism → failure to lactate, amenorrhea, adrenal insufficiency (presents weeks to months later)",
      "Hysterectomy (loss of fertility)",
      "ICU admission, prolonged hospitalization, blood transfusion complications (transfusion reactions, TRALI, alloimmunization)",
      "Acute renal failure (ATN from prolonged hypoperfusion)",
    ],
    clinicalPearl:
      "Tranexamic acid (TXA) is underused but life-saving in PPH. The WOMAN trial (NEJM 2017) enrolled > 20,000 women and demonstrated that TXA given within 3 hours of PPH significantly reduces death from bleeding by 30% without increasing thromboembolic complications. The effect is dramatically time-dependent — there is NO benefit when given after 3 hours. TXA should be given for ALL PPH, regardless of etiology, immediately upon recognition of hemorrhage. Every labor and delivery unit should have TXA available and a standing order protocol for its use.",
    boardRecallTip: "4 T's: Tone (70% — atony), Trauma (20% — lacerations), Tissue (9% — retained placenta), Thrombin (1% — coagulopathy). Uterotonic sequence: oxytocin → methylergonovine (NOT in HTN) → carboprost (NOT in asthma) → misoprostol. TXA within 3 hours (WOMAN trial). Bakri balloon → B-Lynch suture → hysterectomy. AMTSL prevents PPH (oxytocin with delivery of anterior shoulder).",
  },
  {
    id: "wh-cond-cervical-cancer",
    rotation: "womens-health",
    name: "Cervical Cancer and Abnormal Pap Smear Management",
    overview:
      "Cervical cancer is caused by persistent infection with high-risk (oncogenic) human papillomavirus (HPV), most commonly HPV types 16 and 18, which together account for approximately 70% of cervical cancers. It is the fourth most common cancer in women worldwide but largely preventable through HPV vaccination and Pap smear screening. The Bethesda System classifies cervical cytology findings, and management of abnormal results follows ASCCP (American Society for Colposcopy and Cervical Pathology) 2019 evidence-based guidelines that use risk-based algorithms rather than result-based algorithms.",
    epidemiology:
      "US incidence: 14,000 new cases annually; 4,300 deaths. Mean age at diagnosis: 50 years. Hispanic and Black women have higher incidence (healthcare disparities, lower screening rates). HPV 16 = highest oncogenic risk (squamous cell carcinoma, adenocarcinoma); HPV 18 = second (adenocarcinoma > squamous). Other high-risk HPV types: 31, 33, 45, 52, 58. Low-risk HPV types 6 and 11 cause genital warts and laryngeal papillomatosis (not cancer).",
    pathophysiology:
      "HPV infects basal epithelial cells at the cervical transformation zone (junction of squamous and columnar epithelium — most vulnerable area) → viral integration → E6 protein degrades p53 (tumor suppressor) → E7 protein inactivates Rb → uncontrolled cell cycle progression → CIN (cervical intraepithelial neoplasia) → invasive carcinoma. Most HPV infections are cleared by the immune system within 1–2 years; persistent infection with high-risk HPV drives malignant transformation over 10–20 years.",
    presentation: [
      "Preinvasive disease (CIN): ASYMPTOMATIC — detected on Pap smear screening",
      "Early invasive cervical cancer: often asymptomatic OR postcoital bleeding (most common symptom), intermenstrual spotting, watery/bloody vaginal discharge",
      "Advanced cervical cancer: pelvic pain, hematuria, rectal bleeding (invasion of adjacent organs), ureteral obstruction → hydronephrosis → renal failure, weight loss, leg edema (lymph node metastases obstructing lymphatics)",
      "Physical exam: normal cervix (early/preinvasive) OR visible cervical lesion — friable, exophytic mass OR ulcerative lesion; barrel-shaped cervix (endocervical adenocarcinoma)",
    ],
    diagnosis: [
      "BETHESDA SYSTEM CYTOLOGY: NILM (Normal); ASC-US (atypical squamous cells of undetermined significance); LSIL (low-grade squamous intraepithelial lesion); ASC-H (atypical squamous cells, cannot exclude HSIL); HSIL (high-grade SIL); AGC (atypical glandular cells — worrisome for endocervical or endometrial cancer); AIS (adenocarcinoma in situ); Squamous or adenocarcinoma.",
      "HPV TESTING: Primary HPV testing (cotesting or standalone) is the preferred screening modality per ACS 2020 guidelines starting at age 25. HPV 16/18 genotyping (within the cotesting panel) identifies highest-risk patients who need colposcopy regardless of cytology result.",
      "COLPOSCOPY: Examination of cervix with magnification + acetic acid (identifies acetowhite lesions — abnormal epithelium) and Lugol's iodine (normal epithelium stains brown; abnormal does not stain). Directed biopsies taken from most suspicious areas + endocervical curettage (ECC).",
      "HISTOLOGIC GRADING (CIN): CIN1 = low-grade (HPV cytopathic effect only; 90% regress spontaneously) → observe. CIN2 = moderate dysplasia; CIN3 = severe dysplasia/CIS → treat (LEEP or cryotherapy). CIN2 in women ≤ 25: may observe with colposcopy q6 months × 2 years.",
      "FIGO STAGING (2018 — surgical and imaging based): IA1 (invasion ≤ 3 mm depth, ≤ 7 mm width); IA2; IB1–3 (confined to cervix, size based); IIA–B (extends to vagina or parametrium); IIIA–C (pelvic wall, lower vagina, lymph node involvement); IVA–B (adjacent organ invasion or distant metastases).",
    ],
    management: [
      "HPV VACCINE (primary prevention): Gardasil-9 covers HPV 6, 11, 16, 18, 31, 33, 45, 52, 58. Routine: 2-dose series at age 11–12 (if initiated < 15 years); 3-dose series if initiated ≥ 15 years. Catch-up through age 26 (ACIP recommends all through 26); shared decision-making ages 27–45 (benefit decreases with increasing sexual exposure). Most effective BEFORE first sexual contact.",
      "SCREENING: ACS 2020 guidelines: primary HPV testing starting at age 25, every 5 years through 65. Alternatives: HPV/cytology cotesting q5 years or Pap alone q3 years. Stop at 65 if adequate prior screening (3 consecutive negative Paps or 2 negative cotests in past 10 years).",
      "TREATMENT OF CIN: CIN1: observe (90% regression) with repeat Pap ± HPV testing at 12 months. CIN2: treat with LEEP (loop electrosurgical excision procedure) or cryotherapy; observation may be considered in ≤ 25-year-old. CIN3: LEEP or cold knife conization (preferred for glandular lesions or AIS). Goal: excise transformation zone with ≥ 3 mm clear margins. Follow-up: cotesting at 12 and 24 months.",
      "TREATMENT OF INVASIVE CERVICAL CANCER: Stage IA1 (< 3 mm invasion): simple hysterectomy or excisional biopsy if fertility desired. Stage IA2–IB1: radical hysterectomy (Wertheim) + pelvic lymph node dissection (PLND) OR chemoradiation. Stage IB2–IVA: concurrent chemoradiation (cisplatin + radiation) — definitive. Stage IVB (distant metastases): systemic chemotherapy ± immunotherapy (pembrolizumab for PD-L1+).",
    ],
    complications: [
      "Progressive cervical cancer with invasion into bladder, rectum, pelvic sidewall (vesicovaginal/rectovaginal fistulas)",
      "Ureteral obstruction → hydronephrosis → renal failure (common cause of death in advanced CC)",
      "LEEP complications: incomplete excision (positive margins → re-excision), cervical stenosis, cervical incompetence → preterm birth risk in future pregnancy",
      "Radiation complications: radiation cystitis, radiation proctitis, vaginal stenosis, secondary malignancies",
    ],
    clinicalPearl:
      "The ASCCP 2019 guidelines shifted from a result-based algorithm ('what is the result → what do I do') to a risk-based algorithm ('what is the patient's 5-year risk of CIN3+ based on current and prior results → what do I do'). This means the same cytology result can lead to different management depending on the patient's history. For example, ASC-US + positive HPV in a woman with prior normal results → colposcopy; ASC-US + negative HPV in a woman with prior normal results → routine screening in 3 years. ASCCP 2019 provides a free risk calculator app for clinicians.",
    boardRecallTip: "HPV 16/18 = highest oncogenic risk. Bethesda: NILM → LSIL → HSIL. CIN1 = observe; CIN2/3 = LEEP. ACS screening: primary HPV test q5 years starting age 25. Colposcopy for ASC-H, HSIL, AGC, HPV 16/18+. Invasive: radical hysterectomy (early) vs chemoradiation (locally advanced). HPV vaccine: 2 doses if < 15 years; 3 doses if ≥ 15 years.",
  },
  {
    id: "wh-cond-breast-cancer",
    rotation: "womens-health",
    name: "Breast Cancer",
    overview:
      "Breast cancer is the most common cancer in women in the US (excluding non-melanoma skin cancer), affecting approximately 1 in 8 women over a lifetime. It is the second leading cause of cancer death in women, after lung cancer. Breast cancer is a heterogeneous disease with distinct molecular subtypes that differ in behavior, prognosis, and treatment. The most common type is invasive ductal carcinoma (IDC), accounting for 70–80% of all breast cancers. Early detection through screening mammography significantly reduces breast cancer mortality.",
    epidemiology:
      "US incidence: 300,000 new invasive cases annually + 60,000 DCIS cases. Lifetime risk: 12.5% (1 in 8). Median age at diagnosis: 62 years. Risk factors: female sex (100× more common in women), increasing age, BRCA1/2 mutation (lifetime risk 60–85%), family history (first-degree relative doubles risk), prior breast biopsy showing atypical hyperplasia (4–5× increased risk), early menarche/late menopause (prolonged estrogen exposure), nulliparity or late first pregnancy (> 30), postmenopausal HRT with combined estrogen + progesterone, alcohol (dose-dependent), obesity (postmenopausal — adipose tissue converts androgens to estrogen), radiation to chest (mantle radiation for Hodgkin lymphoma), dense breast tissue.",
    pathophysiology:
      "Molecular subtypes (intrinsic): (1) Luminal A (ER+/PR+/HER2−, low Ki-67) — best prognosis, most common, hormone-driven, responds to endocrine therapy; (2) Luminal B (ER+, higher Ki-67 or HER2+) — intermediate; (3) HER2-enriched (ER−/PR−/HER2+) — aggressive, responds to HER2-targeted therapy; (4) Triple-negative (ER−/PR−/HER2−, TNBC) — most aggressive, often BRCA-associated, chemotherapy-dependent, poorest prognosis (but recent advances with immunotherapy + PARP inhibitors).",
    presentation: [
      "Painless breast mass (most common presentation) — firm, irregular, poorly defined borders; non-tender (in contrast to fibroadenoma which is mobile, well-defined)",
      "Skin changes: dimpling (Cooper's ligament invasion), peau d'orange (lymphedema of skin from lymphatic invasion — orange peel appearance), skin thickening",
      "Nipple changes: nipple retraction/inversion, nipple discharge (bloody or clear — concerning; milky = galactorrhea from prolactin-secreting tumor)",
      "Paget's disease of the nipple: eczematous, scaly, erythematous nipple and areola — represents underlying DCIS or invasive carcinoma of the nipple",
      "Axillary lymphadenopathy (palpable, firm, matted — metastatic disease)",
      "Inflammatory breast cancer: rapidly progressive (often missed — no discrete mass) — diffuse breast erythema, warmth, edema ≥ 1/3 of breast, peau d'orange. Skin biopsy: tumor emboli in dermal lymphatics. High stage (IIIC) by definition.",
    ],
    diagnosis: [
      "TRIPLE ASSESSMENT: (1) Clinical breast examination; (2) Imaging (mammogram ± ultrasound); (3) Tissue diagnosis (core needle biopsy)",
      "Mammography: BI-RADS classification 0–6. BI-RADS 4/5 → core needle biopsy. BI-RADS 3 → 6-month follow-up US. Findings: irregular spiculated mass, microcalcifications (DCIS — pleomorphic, branching, linear calcifications in ductal distribution), architectural distortion.",
      "Breast ultrasound: complements mammography (especially dense breasts); distinguishes cyst (anechoic, posterior enhancement) from solid mass (hypoechoic, irregular borders).",
      "MRI breast: used for: high-risk screening (BRCA+), extent of disease before surgery, response to neoadjuvant chemotherapy, occult primary with axillary metastases.",
      "Core needle biopsy (CNB): preferred over FNA for solid masses (provides histology, receptor status, grade). Pathology: histologic type, grade (Nottingham grade 1–3), ER/PR status (IHC), HER2 status (IHC 3+ = positive; 2+ → FISH confirmation), Ki-67 (proliferation index).",
      "Oncotype DX: 21-gene RT-PCR assay for ER+/HER2−/node-negative (or 1–3 node positive) tumors. Recurrence Score (RS): 0–25 = low (endocrine therapy only, no chemo benefit); > 25 = high (chemotherapy + endocrine therapy). Based on TAILORx and MINDACT trials.",
    ],
    management: [
      "SURGERY: Lumpectomy (breast-conserving surgery, BCS) + radiation therapy = mastectomy for early-stage cancer (equivalent local control and survival — NSABP B-06). Mastectomy preferred if: multicentric disease, prior radiation, large tumor:breast ratio, patient preference. SLNB (sentinel lymph node biopsy) for clinically node-negative — avoids full ALND and its complications (lymphedema). Z0011 trial: ALND not required if 1–2 positive sentinel nodes + BCS + systemic therapy.",
      "RADIATION: After BCS (mandatory — reduces local recurrence from 30% to < 10%). After mastectomy if: ≥ 4 positive nodes, T3/T4 tumor, positive margins.",
      "ENDOCRINE THERAPY (ER+ or PR+ tumors): Premenopausal: Tamoxifen 20 mg/day × 10 years (reduces recurrence by 40%, mortality by 30%). Consider ovarian suppression (leuprolide or bilateral oophorectomy) + aromatase inhibitor (AI) for high-risk premenopausal. Postmenopausal: AI (anastrozole, letrozole, exemestane) × 5–10 years (superior to tamoxifen in postmenopausal — reduces contralateral breast cancer and recurrence).",
      "HER2-TARGETED THERAPY (HER2+ tumors): Trastuzumab (Herceptin) + pertuzumab for 1 year (reduces mortality by 30% in HER2+ early breast cancer). T-DM1 (ado-trastuzumab emtansine) for residual disease after neoadjuvant chemo. Neratinib for extended adjuvant treatment (HER2+ high-risk).",
      "CHEMOTHERAPY: Indicated for: triple-negative, HER2+, high Oncotype DX score (> 25), node-positive, locally advanced. Regimens: AC-T (doxorubicin-cyclophosphamide → paclitaxel), TC (docetaxel-cyclophosphamide for lower-risk). Neoadjuvant chemo (before surgery) for locally advanced disease (allows downstaging — potentially converting mastectomy candidate to BCS-eligible).",
      "TRIPLE-NEGATIVE BREAST CANCER (TNBC): Chemotherapy backbone (carboplatin + taxane for BRCA-mutated TNBC). Immunotherapy: pembrolizumab added to chemotherapy for high-risk early TNBC (KEYNOTE-522 trial — improves pCR and event-free survival). PARP inhibitors (olaparib, talazoparib) for BRCA1/2-mutated metastatic TNBC.",
    ],
    complications: [
      "Lymphedema of the arm (after ALND or radiation) — chronic, debilitating",
      "Local recurrence (ipsilateral breast — after BCS; chest wall — after mastectomy)",
      "Distant metastases: bone (most common), lung, liver, brain",
      "Treatment toxicities: anthracycline cardiotoxicity (doxorubicin — cardiomyopathy), taxane peripheral neuropathy, trastuzumab cardiotoxicity (reversible), tamoxifen endometrial cancer risk + DVT/PE risk, AI osteoporosis/joint pain",
      "Contralateral breast cancer (risk reduced by tamoxifen and prophylactic mastectomy in BRCA+)",
    ],
    clinicalPearl:
      "The Z0011 trial fundamentally changed axillary lymph node management: women with 1–2 positive sentinel lymph nodes who undergo breast-conserving surgery + systemic therapy (chemo + endocrine) + whole-breast radiation do NOT require completion axillary lymph node dissection (ALND) — equivalent survival with significantly lower lymphedema rate. This applies only to specific criteria: < 3 positive SLNs, BCS (not mastectomy), whole-breast radiation (tangent fields must cover level I/II axilla), and systemic therapy. Always verify eligibility before omitting ALND.",
    boardRecallTip: "Most common cancer in women (1 in 8 lifetime risk). Triple assessment: exam + mammogram/US + core needle biopsy. Receptor status drives treatment: ER+ = tamoxifen/AI; HER2+ = trastuzumab; TNBC = chemo ± pembrolizumab. BCS + XRT = mastectomy (Z0011: no ALND if 1–2 positive SLNs). Oncotype DX: ER+/HER2−/N0 — RS > 25 → add chemotherapy.",
  },
  {
    id: "wh-cond-ovarian-cancer",
    rotation: "womens-health",
    name: "Ovarian Cancer",
    overview:
      "Ovarian cancer is the most lethal gynecological malignancy, responsible for more deaths than all other gynecological cancers combined. Its high mortality is attributable to late-stage diagnosis — approximately 75% of cases are diagnosed at Stage III or IV, when 5-year survival is only 20–30%. Epithelial ovarian cancer (EOC) accounts for 90% of ovarian malignancies, with high-grade serous carcinoma (HGSC) being the most common and aggressive subtype. BRCA1 and BRCA2 mutations confer a dramatically elevated lifetime risk and are present in 15–20% of all EOC cases.",
    epidemiology:
      "US incidence: 20,000 new cases annually; 13,000 deaths. Lifetime risk in the general population: 1.3%. Median age at diagnosis: 63 years. Risk factors: BRCA1 mutation (40–60% lifetime risk — mostly HGSC); BRCA2 mutation (15–20% lifetime risk); Lynch syndrome/HNPCC (MLH1, MSH2, MSH6, PMS2 mutations — endometrioid, clear cell subtypes); personal or family history; nulliparity; endometriosis (clear cell, endometrioid subtypes); HRT (estrogen only — slightly increased risk). Protective factors: oral contraceptive use (50% risk reduction after 5 years — most reliable protective factor), breastfeeding, bilateral tubal ligation, salpingo-oophorectomy in BRCA carriers.",
    pathophysiology:
      "Origin: most HGSC arises from the fallopian tube fimbriae (not the ovarian surface epithelium as historically believed) — serous tubal intraepithelial carcinoma (STIC) is the precursor lesion. TP53 mutation is present in nearly all HGSC. Dissemination: primarily transcoelomic (seeding throughout peritoneal cavity) → omentum ('omental cake' = massive omental metastases), peritoneal implants, ascites. Lymphatic spread to pelvic and para-aortic nodes. Hematogenous metastases to liver parenchyma and lung (less common than serosal implants).",
    presentation: [
      "BEAT mnemonic: Bloating; Eating difficulties (early satiety); Abdominal/pelvic pain; Timing (symptoms nearly every day or new symptoms > 12 occurrences/month). These symptoms are non-specific and often attributed to GI or musculoskeletal causes → delayed diagnosis (average 6–12 months from symptom onset to diagnosis).",
      "Abdominal distension from ascites (advanced disease)",
      "Pelvic or adnexal mass on bimanual exam or incidental on imaging",
      "Constitutional symptoms (fatigue, weight loss — advanced disease)",
      "Pleural effusion (shortness of breath — right-sided, from transdiaphragmatic lymphatic metastases)",
      "Paraneoplastic syndromes: dermatomyositis (associated with all gynecologic malignancies), cerebellar degeneration (anti-Yo antibodies — paraneoplastic cerebellar degeneration in ovarian cancer)",
    ],
    diagnosis: [
      "Transvaginal ultrasound (TVUS): best initial imaging for pelvic/adnexal mass. Features suggesting malignancy: solid components, internal septations (thick, > 3 mm), papillary projections, internal blood flow on Doppler, bilateral lesions, ascites, size > 10 cm.",
      "CA-125: elevated in 80% of advanced EOC; less sensitive in early disease (50% in Stage I). Not specific — elevated in endometriosis, fibroids, PID, ascites, liver disease. Use as baseline and to monitor treatment response, NOT for primary diagnosis. Combined with TVUS → more sensitive for discrimination.",
      "CT abdomen/pelvis with contrast: evaluates extent of disease (peritoneal carcinomatosis, omental cake, diaphragmatic involvement, lymph nodes, bowel/ureter involvement) — surgical planning.",
      "MRI pelvis: better soft tissue characterization for complex adnexal masses; complements TVUS.",
      "ROMA score or OVA1 (Risk of Malignancy Algorithm): combines CA-125 + HE4 (human epididymis protein 4) + menopausal status to stratify adnexal masses as high vs low risk for malignancy — guides referral to gynecologic oncologist.",
      "Pathologic diagnosis: definitive diagnosis requires tissue (intraoperative frozen section or surgical resection). Avoid pre-operative percutaneous biopsy of suspected ovarian cancer (risk of peritoneal seeding). Exception: confirmed Stage IV with malignant ascites or pleural effusion — BRCA testing on tissue.",
      "FIGO STAGING (2014): Stage I (ovary only); Stage II (pelvis); Stage III (peritoneum, omentum, retroperitoneal nodes — most common presentation); Stage IV (distant metastases — liver parenchyma, pleura, inguinal nodes).",
    ],
    management: [
      "SURGICAL DEBULKING (cytoreduction): Goal = no visible residual disease (R0 resection) — most important prognostic factor. Includes total abdominal hysterectomy, bilateral salpingo-oophorectomy (TAH-BSO), omentectomy, peritoneal biopsies, pelvic + para-aortic lymph node dissection, removal of all visible tumor. Primary debulking surgery (PDS) for resectable disease. Interval debulking surgery (IDS) after 3 cycles of neoadjuvant chemotherapy (NACT) for unresectable disease (equivalent OS, less morbidity — EORTC 55971, CHORUS trials).",
      "CHEMOTHERAPY: First-line: carboplatin (AUC 5–6) + paclitaxel 175 mg/m² q3 weeks × 6 cycles — response rate 80%, but 75–80% relapse within 3 years. Add bevacizumab (anti-VEGF) for high-risk Stage III/IV — improves PFS. Intraperitoneal chemotherapy (IP) for optimally debulked Stage III — improves OS but high toxicity (GOG 172 trial).",
      "PARP INHIBITORS (maintenance therapy): For BRCA-mutated EOC after platinum-sensitive first-line chemotherapy: olaparib (Lynparza) or niraparib significantly improves PFS (SOLO-1 trial: olaparib → 60% reduction in risk of progression in BRCA-mutated patients). BRCA testing is mandatory for all newly diagnosed EOC.",
      "RECURRENT DISEASE: Platinum-sensitive (recurrence > 6 months): re-challenge with platinum-based regimen ± bevacizumab ± PARP inhibitor. Platinum-resistant (recurrence < 6 months): non-platinum agents (pegylated liposomal doxorubicin, topotecan, gemcitabine, weekly paclitaxel).",
      "RISK REDUCTION SURGERY FOR BRCA CARRIERS: Risk-reducing salpingo-oophorectomy (RRSO) recommended at age 35–40 (BRCA1) or 40–45 (BRCA2) after childbearing complete — reduces ovarian cancer risk by > 95%, reduces breast cancer risk by ~50% (premenopausal surgery). STIC found in 2–5% of BRCA carriers at time of RRSO.",
    ],
    complications: [
      "Bowel obstruction (from peritoneal metastases — most common cause of death in ovarian cancer)",
      "Malignant ascites (tense, symptomatic — serial paracentesis or peritoneal drain for palliation)",
      "Pleural effusion (thoracentesis for symptomatic relief)",
      "Chemotherapy toxicity: peripheral neuropathy (paclitaxel), nephrotoxicity (cisplatin — hydration required), myelosuppression (carboplatin), bevacizumab complications (GI perforation, HTN, arterial thrombosis, poor wound healing)",
    ],
    clinicalPearl:
      "There is currently NO effective screening test for ovarian cancer in average-risk women. CA-125 + transvaginal ultrasound screening has been evaluated in large randomized trials (PLCO, UKCTOCS) and does NOT reduce ovarian cancer mortality in average-risk women — it leads to false positives, unnecessary surgeries, and complications without survival benefit. The USPSTF recommends against screening for ovarian cancer in average-risk asymptomatic women (Grade D). The only proven risk reduction strategy is RRSO in BRCA1/2 carriers after completion of childbearing.",
    boardRecallTip: "Most lethal GYN cancer — 75% diagnosed at Stage III/IV. BEAT symptoms: Bloating, Eating difficulties, Abdominal pain, Timing. HGSC most common (TP53 mutation, fallopian tube origin). CA-125 elevated but NOT a screening test. BRCA1/2 → RRSO at 35–40 (BRCA1) or 40–45 (BRCA2). Treatment: surgical debulking (R0 goal) + carboplatin/paclitaxel + PARP inhibitor maintenance (BRCA-mutated). No effective screening for average-risk women (USPSTF Grade D).",
  },
];
