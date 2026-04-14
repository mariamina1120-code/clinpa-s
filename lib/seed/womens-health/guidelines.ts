// @ts-nocheck
import { Guideline } from "@/types/seed";

export const womensHealthGuidelines: Guideline[] = [
  {
    id: "wh-gl-001",
    rotation: "womens-health",
    name: "Cervical Cancer Screening",
    organization: "ACOG / ACS",
    year: 2020,
    keyRecommendations: [
      "Primary HPV testing (hrHPV alone) every 5 years is the preferred screening strategy for individuals aged 25–65; co-testing (Pap + HPV) every 5 years is an acceptable alternative; Pap smear alone every 3 years is acceptable but less preferred.",
      "Screening begins at age 25 with primary HPV testing; persons aged 21–24 who were previously screened with Pap should continue Pap q3 years until age 25 then transition to preferred strategy.",
      "Screening may cease at age 65 in individuals with adequate prior screening (3 consecutive negative Pap smears OR 2 consecutive negative co-tests within the prior 10 years, with the most recent within 5 years) and no high-grade history in the past 25 years.",
      "ASC-US result: reflex HPV testing — if HPV positive, refer to colposcopy; if HPV negative, return to routine screening in 3 years. If HPV co-test was done and ASC-US/HPV negative, repeat co-test in 3 years.",
      "LSIL (CIN1 on biopsy): observe with surveillance (colposcopy at 1 year) rather than immediate treatment in most patients; spontaneous regression is common, especially in younger persons.",
      "HSIL (CIN2/CIN3 on biopsy): LEEP (loop electrosurgical excision procedure) or cold-knife conization is recommended; CIN2 in persons under 25 or those desiring fertility may be observed with close surveillance.",
      "AGC (Atypical Glandular Cells): refer all patients to colposcopy with ECC regardless of HPV status; endometrial sampling indicated if age ≥ 35 or at risk for endometrial pathology.",
      "HPV16/18 positive on reflex testing: direct referral to colposcopy regardless of cytology result, given highest risk for CIN3+ and cervical cancer.",
    ],
    clinicalApplication:
      "In clinical practice, obtain the patient's prior screening history before ordering testing — a patient who had a negative co-test 3 years ago does not need repeat screening yet. Document HPV status carefully because HPV16/18 positivity changes management even if Pap is negative. When counseling patients who are anxious about abnormal results, emphasize that most low-grade abnormalities resolve without treatment and that the purpose of surveillance is to detect the rare case that progresses. After hysterectomy for benign indications with no prior high-grade history, cervical cancer screening is discontinued.",
    boardRecallTip:
      "ACS 2020: primary HPV test q5 years starting age 25 (NOT 21 as with Pap). HPV16/18 = go straight to colposcopy. AGC = always colposcopy + ECC. Stop at 65 with adequate prior screening. HSIL = LEEP.",
  },
  {
    id: "wh-gl-002",
    rotation: "womens-health",
    name: "Gestational Diabetes Mellitus (GDM) Screening and Management",
    organization: "ACOG",
    year: 2023,
    keyRecommendations: [
      "Universal two-step screening at 24–28 weeks: Step 1 — 50g non-fasting glucose challenge test (GCT); abnormal if 1-hour value ≥ 130–140 mg/dL (threshold varies by institution). Step 2 — 100g fasting 3-hour OGTT for those who fail GCT.",
      "Carpenter-Coustan thresholds for 100g OGTT: Fasting ≥ 95, 1-hour ≥ 180, 2-hour ≥ 155, 3-hour ≥ 140 mg/dL; GDM diagnosed if 2 or more values meet or exceed threshold.",
      "High-risk patients (BMI ≥ 30, prior GDM, prior macrosomic infant, strong family history, PCOS) should be screened at first prenatal visit using fasting glucose or HbA1c; fasting glucose ≥ 92 mg/dL in first trimester = GDM by IADPSG criteria.",
      "Medical nutrition therapy (MNT) with carbohydrate-controlled diet and moderate exercise is first-line treatment for 1–2 weeks; most patients (70–85%) achieve glycemic control with lifestyle alone.",
      "Fasting glucose targets: < 95 mg/dL fasting; < 140 mg/dL 1-hour postprandial; < 120 mg/dL 2-hour postprandial. Continuous glucose monitoring may be used as adjunct.",
      "Insulin is first-line pharmacologic therapy when MNT fails; intermediate-acting NPH for fasting hyperglycemia; rapid-acting insulin aspart or lispro for postprandial hyperglycemia. Metformin and glyburide are alternatives but cross the placenta and are not FDA-approved for GDM.",
      "Fetal surveillance: growth ultrasound at 32–34 weeks, NST or BPP in poorly controlled or insulin-requiring GDM; delivery at 39–39 6/7 weeks for well-controlled GDM on medication; 40–40 6/7 weeks for diet-controlled.",
      "Postpartum: all GDM patients require 75g 2-hour OGTT at 4–12 weeks postpartum to screen for persistent diabetes or prediabetes; 50% of GDM patients develop T2DM within 10 years — annual fasting glucose or HbA1c recommended thereafter.",
    ],
    clinicalApplication:
      "When a patient fails the 50g GCT, counsel her that this is a screening test with high false-positive rates and the diagnosis requires the 3-hour OGTT. Reinforce that dietary modification is highly effective and insulin does not cross the placenta in significant amounts, making it safe for the fetus. Document glucose logs at each prenatal visit and adjust therapy proactively — poorly controlled GDM is associated with macrosomia, shoulder dystocia, neonatal hypoglycemia, and cesarean delivery. Ensure postpartum screening is arranged before discharge, as this is frequently overlooked.",
    boardRecallTip:
      "Two-step: 50g GCT (non-fasting) → 100g OGTT if fail. Carpenter-Coustan: need 2 of 4 abnormal (95/180/155/140). Insulin first-line Rx. Postpartum: 75g 2-hr OGTT at 4–12 weeks. GDM ≠ pre-gestational diabetes (which requires tighter first-trimester control).",
  },
  {
    id: "wh-gl-003",
    rotation: "womens-health",
    name: "Hypertensive Disorders of Pregnancy",
    organization: "ACOG",
    year: 2022,
    keyRecommendations: [
      "Definitions: Gestational hypertension = new-onset BP ≥ 140/90 mmHg after 20 weeks without proteinuria or end-organ damage; Preeclampsia = gestational HTN PLUS proteinuria (≥ 300 mg/24h or protein:creatinine ≥ 0.3) OR new-onset end-organ damage (thrombocytopenia < 100k, creatinine ≥ 1.1, elevated LFTs ≥ 2× normal, pulmonary edema, new-onset headache unresponsive to medication, visual symptoms).",
      "Severe features (any one qualifies): systolic BP ≥ 160 OR diastolic BP ≥ 110 on two occasions ≥ 4 hours apart, thrombocytopenia < 100,000/µL, creatinine > 1.1 mg/dL or doubling of baseline, AST/ALT > 2× upper limit of normal, pulmonary edema, new-onset headache unresponsive to medication, visual disturbances. HELLP syndrome = Hemolysis + Elevated Liver enzymes + Low Platelets.",
      "Severe-range blood pressure (≥ 160/110) must be treated within 30–60 minutes to prevent maternal stroke; first-line acute agents: IV labetalol (20 mg IV, then 40 mg, then 80 mg q10 min; max 300 mg), IV hydralazine (5–10 mg q20 min), or oral nifedipine immediate-release (10–20 mg q20 min).",
      "Magnesium sulfate (MgSO4) 4–6g IV loading dose over 15–20 minutes, then 1–2 g/hour maintenance infusion, is standard of care for seizure prophylaxis in preeclampsia with severe features and treatment of eclamptic seizures; continue 24 hours postpartum.",
      "MgSO4 toxicity monitoring: check DTRs hourly (loss of patellar reflex first sign, at ~7–10 mEq/L), urine output ≥ 25–30 mL/hour, respiratory rate > 12/min, serum Mg levels; antidote is calcium gluconate 1g IV.",
      "Delivery timing: preeclampsia without severe features → deliver at 37 0/7 weeks; preeclampsia with severe features → deliver at 34 0/7 weeks after maternal stabilization; HELLP syndrome → delivery at ≥ 34 weeks, consider corticosteroids for fetal lung maturity before 34 weeks.",
      "Prevention: low-dose aspirin 81 mg daily starting at 12–28 weeks (optimally before 16 weeks) through delivery is recommended for patients at high risk (prior preeclampsia, multifetal gestation, chronic HTN, pre-gestational DM, renal disease, autoimmune disease). Number needed to treat ≈ 50 to prevent one case.",
      "Chronic hypertension in pregnancy: treat if BP consistently ≥ 160/110 (goal < 160/110 intrapartum); acceptable antihypertensives include labetalol, nifedipine, methyldopa; avoid ACE inhibitors and ARBs (teratogenic — fetal renal dysgenesis).",
    ],
    clinicalApplication:
      "At every prenatal visit, screen for preeclampsia by measuring BP, assessing for headache, visual changes, RUQ pain, and checking for proteinuria. A patient presenting with severe headache and BP 162/108 at 35 weeks should be admitted, receive IV labetalol, start MgSO4, and be delivered after stabilization. HELLP syndrome can present without severe hypertension — RUQ pain and low platelets should always prompt a HELLP workup. Counsel all women with preeclampsia that their lifetime cardiovascular risk is doubled, and they should receive cardiovascular risk factor counseling at the postpartum visit.",
    boardRecallTip:
      "Severe BP ≥ 160/110 → treat within 30–60 min (labetalol IV first-line). MgSO4 for seizure prophylaxis AND eclampsia treatment. First sign of Mg toxicity = loss of DTRs; antidote = calcium gluconate. Aspirin 81 mg by 16 weeks for high-risk. ACE inhibitors/ARBs = contraindicated in pregnancy.",
  },
  {
    id: "wh-gl-004",
    rotation: "womens-health",
    name: "Breast Cancer Screening",
    organization: "USPSTF",
    year: 2024,
    keyRecommendations: [
      "2024 USPSTF update (Grade B): biennial (every 2 years) screening mammography recommended for all women starting at age 40 through age 74; this is a change from the 2016 recommendation that started routine screening at 50.",
      "Women aged 40–49 should receive individualized counseling about the benefits and harms of screening, including false positives (~10% per mammogram) and the small but real risk of overdiagnosis; shared decision-making is emphasized.",
      "High-risk individuals (BRCA1/2 mutation carriers, lifetime risk ≥ 20–25% by validated model, prior chest radiation between ages 10–30 for Hodgkin lymphoma, first-degree relative with BRCA mutation) should begin annual mammography AND annual MRI starting at age 25–30.",
      "Dense breasts (heterogeneously dense or extremely dense — C or D on ACR BI-RADS density classification) are present in approximately 50% of screened women and increase cancer risk 1.2–2× while reducing mammography sensitivity; supplemental screening with ultrasound or MRI may be offered.",
      "Digital breast tomosynthesis (DBT, 3D mammography) is preferred over standard 2D digital mammography at facilities where it is available; DBT reduces recall rates by 15–20% and increases cancer detection rate by 20–40% over 2D alone.",
      "BRCA testing should be offered to women who have a personal or family history suggesting hereditary breast and ovarian cancer syndrome; patients with BRCA1 mutation may consider risk-reducing bilateral salpingo-oophorectomy and bilateral mastectomy after counseling.",
      "Screening MRI without contrast is NOT equivalent to contrast-enhanced MRI; gadolinium-contrast MRI is required for high-risk supplemental screening and has sensitivity ~80% vs ~40% for mammography alone in BRCA carriers.",
      "Evidence is insufficient (Grade I) to assess benefits and harms of screening mammography in women 75 and older; clinical judgment and patient preference should guide decisions in this age group.",
    ],
    clinicalApplication:
      "When counseling a 40-year-old patient about breast cancer screening, explicitly discuss that starting now (rather than at 50) would prevent more breast cancer deaths but would also result in more false positives and potential unnecessary biopsies over a lifetime of screening. For a patient with newly diagnosed dense breasts on mammogram report, explain that density is normal, discuss supplemental imaging options, and document the counseling. Any patient with a suspicious mammogram finding (BI-RADS 4 or 5) requires tissue diagnosis, not repeat imaging.",
    boardRecallTip:
      "USPSTF 2024: biennial mammogram starting age 40 (Grade B — changed from age 50 in 2016). High risk (BRCA) = annual mammogram + MRI starting age 25–30. Dense breasts = supplemental US or MRI. Tomosynthesis (3D) reduces false positives 15–20%.",
  },
  {
    id: "wh-gl-005",
    rotation: "womens-health",
    name: "Postpartum Hemorrhage (PPH) Prevention and Management",
    organization: "ACOG",
    year: 2022,
    keyRecommendations: [
      "Definition: cumulative blood loss ≥ 1000 mL OR blood loss associated with signs/symptoms of hypovolemia within 24 hours of delivery regardless of route. The '500 mL after vaginal delivery' threshold is no longer used due to underestimation of blood loss.",
      "Active Management of the Third Stage of Labor (AMTSL) is recommended for all deliveries: oxytocin 10 units IM or 20–40 units in 500 mL NS IV infusion after delivery of the anterior shoulder (or immediately after delivery of placenta if cesarean), controlled cord traction, and uterine massage after delivery of placenta.",
      "The 4 Ts mnemonic: Tone (uterine atony — 80% of cases, most common cause), Trauma (lacerations, hematomas, uterine rupture — inspect entire birth canal), Tissue (retained placenta or membranes), Thrombin (coagulopathy — DIC, von Willebrand disease, thrombocytopenia).",
      "Uterotonic escalation sequence: (1) Oxytocin IV (first-line); (2) Methylergonovine (Methergine) 0.2 mg IM — contraindicated in hypertension/preeclampsia; (3) Carboprost (Hemabate) 250 mcg IM q15–90 min, max 8 doses — contraindicated in asthma; (4) Misoprostol 800–1000 mcg rectal or sublingual; (5) Tranexamic acid (TXA) 1g IV over 10 minutes within 3 hours of PPH onset.",
      "Tranexamic acid (TXA): WOMAN trial demonstrated 19% reduction in death from hemorrhage and 31% reduction when given within 3 hours; does not increase thrombotic events; give 1g IV, may repeat 1g in 30 min if ongoing bleeding; use within 3 hours — efficacy lost after 3 hours.",
      "Surgical escalation for medical management failure: uterine compression sutures (B-Lynch, Hayman), uterine artery ligation, internal iliac artery ligation, balloon tamponade (Bakri, SOS Bakri), interventional radiology (uterine artery embolization if stable), and peripartum hysterectomy as last resort.",
      "Massive transfusion protocol (MTP): activate early when > 2 units pRBC given or expected; target 1:1:1 ratio (pRBC:FFP:platelets); avoid crystalloid resuscitation — prefer blood products; target fibrinogen > 200 mg/dL (cryoprecipitate if low); calcium administration with massive transfusion to prevent hypocalcemia.",
      "Prevention strategies: identify risk factors antepartum (prior uterine surgery, placenta previa/accreta, multiple gestation, grand multiparity, prolonged oxytocin use, chorioamnionitis); ensure IV access, type and screen, have blood products available for high-risk patients; uterotonic-ready team at all deliveries.",
    ],
    clinicalApplication:
      "When a patient has uterine atony after delivery, begin uterine massage immediately while calling for help and starting IV oxytocin; do not delay by waiting to see if bleeding stops. If the uterus remains boggy after oxytocin, escalate to methylergonovine (check BP first), and if still bleeding, add carboprost (confirm no asthma history) or misoprostol. Give TXA as soon as PPH is recognized — the 3-hour window closes quickly. If blood loss exceeds 1500 mL, activate MTP and ensure the team is communicating clearly about ongoing losses.",
    boardRecallTip:
      "PPH most common cause = uterine atony (4 Ts: Tone, Trauma, Tissue, Thrombin). Oxytocin first → methylergonovine (no HTN) → carboprost (no asthma) → misoprostol → TXA within 3 hours. MTP = 1:1:1. TXA reduces PPH death 31% if given within 3 hours (WOMAN trial).",
  },
  {
    id: "wh-gl-006",
    rotation: "womens-health",
    name: "US Medical Eligibility Criteria (USMEC) for Contraception",
    organization: "CDC",
    year: 2024,
    keyRecommendations: [
      "The CDC USMEC uses a 4-tier classification: Category 1 = no restriction (use the method); Category 2 = advantages generally outweigh risks; Category 3 = risks generally outweigh advantages (relative contraindication, use with caution); Category 4 = unacceptable health risk (absolute contraindication, do NOT use).",
      "Combined oral contraceptive pill (COCP) absolute contraindications (Category 4): age ≥ 35 who smokes ≥ 15 cigarettes/day, hypertension ≥ 160/100, history of DVT/PE or known thrombogenic mutation, migraine with aura (any age), current or history of ischemic heart disease or stroke, postpartum < 21 days, breastfeeding < 6 weeks postpartum, liver disease (cirrhosis, hepatocellular carcinoma), known BRCA mutation or personal history of breast cancer.",
      "Progestin-only pills (POPs / minipill) and progestin-only methods (implant, DMPA) are generally safer for patients who cannot use estrogen; POPs are Category 1 for breastfeeding, history of VTE, migraines with aura, and hypertension.",
      "Long-acting reversible contraception (LARC) — IUDs and implants — are the most effective methods (> 99%) and are ACOG-recommended as first-line options for all eligible patients including adolescents and nulliparous women; immediate postpartum IUD insertion (within 10 minutes of placenta delivery) is safe and effective.",
      "Postpartum contraception timing: combined hormonal methods (COCPs, patch, ring) should be delayed until 21 days postpartum (non-breastfeeding) or 42 days (breastfeeding) due to increased VTE risk; progestin-only methods, IUDs, and implants can be initiated immediately postpartum.",
      "Emergency contraception (EC) options: Levonorgestrel (Plan B, Take Action) 1.5 mg within 72 hours (effective up to 120 hours; less effective in obesity — BMI > 26); Ulipristal acetate (ella) 30 mg within 120 hours (more effective than LNG EC, especially in obesity; inhibits progesterone receptor); Copper IUD (Paragard) within 120 hours — most effective EC (> 99%), also provides ongoing contraception for 10 years; note: ella and hormonal contraception should not be started within 5 days of each other (progesterone antagonism).",
      "Depot medroxyprogesterone acetate (DMPA/Depo-Provera): Category 1 immediately postpartum; USMEC Category 3 for adolescents due to concern about bone density loss; requires return-of-fertility counseling (median 10 months after last injection); must screen for depression.",
      "Barrier methods (condoms) are the only contraceptive methods that reduce STI transmission; dual-method use (hormonal + condom) should be counseled for STI risk reduction in all non-monogamous patients; diaphragm requires fitting and spermicide, protects against cervical STIs.",
    ],
    clinicalApplication:
      "When prescribing contraception, always assess for USMEC Category 3 and 4 conditions before selecting a method; a patient with migraine with aura should receive a progestin-only method rather than a COCP. For postpartum patients, document whether they are breastfeeding and discuss LARC insertion before discharge. When a patient requests emergency contraception, counseling should be non-judgmental and include all options; the copper IUD should be offered as the most effective option if the patient is a candidate and desires ongoing contraception.",
    boardRecallTip:
      "USMEC Category 4 for COCPs: smoker ≥ 35 years, migraine WITH aura, DVT/PE, BP ≥ 160/100, < 21 days postpartum, active liver disease, breast cancer. Copper IUD = most effective EC (within 5 days). ella > Plan B in obesity. Progestin-only = safe in most COCP contraindications.",
  },
];
