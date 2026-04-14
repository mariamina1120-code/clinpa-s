// @ts-nocheck
import { LabValue, ImagingFinding } from "@/types/seed";

export const womensHealthLabs: LabValue[] = [
  {
    id: "wh-lab-001",
    rotation: "womens-health",
    name: "Beta-hCG (Quantitative Serum)",
    normalRange: "Non-pregnant: < 5 mIU/mL; doubling time ≥ 53% rise in 48 hours in viable early IUP",
    unit: "mIU/mL",
    interpretation: [
      {
        range: "< 5 mIU/mL",
        meaning: "Non-pregnant; or post-treatment monitoring demonstrating complete resolution (ectopic post-MTX, molar pregnancy surveillance)",
        clinicalAction: "No further workup if clinical context consistent; if monitoring post-molar pregnancy, continue weekly until undetectable × 3 consecutive weeks",
      },
      {
        range: "5–1,499 mIU/mL (below discriminatory zone)",
        meaning: "Early intrauterine pregnancy not yet visible on transvaginal US; failing IUP; or ectopic pregnancy — cannot differentiate on single value alone",
        clinicalAction: "Serial β-hCG every 48 hours; viable IUP: ≥ 53% rise; failing IUP: < 53% rise or plateau; ectopic: subnormal rise, plateau, or slow decline — if subnormal rise and no confirmed IUP, treat empirically for ectopic or perform diagnostic laparoscopy",
      },
      {
        range: "1,500–3,500 mIU/mL (discriminatory zone)",
        meaning: "Gestational sac should be visible on transvaginal ultrasound (TVUS) if viable IUP; absence of IUP at this level highly suspicious for ectopic pregnancy",
        clinicalAction: "Perform TVUS; if no intrauterine gestational sac visible: presumptive ectopic — initiate workup; if sac visible = IUP; if sac indeterminate, repeat in 48h with serial β-hCG; remember: discriminatory zone may be higher in twins or obese patients",
      },
      {
        range: "≥ 100,000–1,000,000+ mIU/mL (markedly elevated)",
        meaning: "Molar pregnancy (complete hydatidiform mole), multifetal gestation, choriocarcinoma, or gestational trophoblastic neoplasia (GTN)",
        clinicalAction: "Urgent pelvic ultrasound (snowstorm appearance in complete mole — echogenic uterine mass, no fetal parts, hydropic villi); chest X-ray for metastases; CBC (anemia from uterine bleeding); TSH (hCG cross-reacts with TSH receptor — can cause hyperthyroidism); suction curettage; Rh-negative patients receive RhoGAM; serial weekly β-hCG until undetectable; contraception for 6 months (oral contraceptives acceptable)",
      },
      {
        range: "Post-MTX treatment for ectopic (days 4 and 7)",
        meaning: "Day 1 = day of MTX injection (50 mg/m² IM single dose); β-hCG expected to plateau or rise slightly between days 1–4 (normal response); decline ≥ 15% from day 4 to day 7 = treatment success",
        clinicalAction: "If < 15% decline day 4 to day 7: administer second dose of MTX or surgical management (salpingostomy vs salpingectomy); if > 15% decline: continue weekly monitoring until < 5; provide precautions: avoid NSAIDs, folic acid supplements, intercourse, sun exposure, and alcohol for one week; follow β-hCG weekly until undetectable",
      },
    ],
    clinicalPearl:
      "A single β-hCG value is never sufficient to diagnose or exclude ectopic pregnancy — serial values and correlation with ultrasound findings are essential. A subnormal rise (< 53% in 48 hours) indicates an abnormal pregnancy (failing IUP or ectopic) but cannot distinguish between the two without imaging. Always check Rh status before proceeding with any intervention in early pregnancy — Rh-negative patients require RhoGAM 300 mcg IM if any bleeding, intervention, or ectopic is confirmed.",
    boardRecallTip:
      "Viable IUP: β-hCG doubles (≥ 53%) in 48h. Discriminatory zone 1,500–3,500 — no IUP visible = ectopic until proven otherwise. MTX success: ≥ 15% decline from day 4 to day 7. Complete mole: very high β-hCG, snowstorm US, 46XX all-paternal, no fetal parts — suction curettage + serial hCG.",
  },
  {
    id: "wh-lab-002",
    rotation: "womens-health",
    name: "Group B Streptococcus (GBS) Culture",
    normalRange: "Negative (no GBS detected in rectovaginal culture at 36–37 6/7 weeks)",
    unit: "Qualitative (positive/negative)",
    interpretation: [
      {
        range: "Negative rectovaginal GBS culture at 36–37 weeks",
        meaning: "Low risk for neonatal early-onset GBS disease; intrapartum antibiotic prophylaxis (IAP) not indicated unless risk factors develop during labor",
        clinicalAction: "No IAP required; however, reassess if patient develops intrapartum fever, prolonged ROM > 18 hours, or delivers preterm — IAP indicated for any of these risk factors regardless of negative culture",
      },
      {
        range: "Positive rectovaginal GBS culture at 36–37 weeks",
        meaning: "Colonization with Group B Streptococcus (Streptococcus agalactiae); without IAP, neonatal early-onset GBS disease risk is approximately 1–2%; with IAP, risk is reduced 80%",
        clinicalAction: "Administer IAP at onset of labor or rupture of membranes: Penicillin G 5 million units IV load, then 2.5–3 million units IV q4h until delivery (first-line); Ampicillin 2g IV load then 1g q4h if PCN unavailable; Cefazolin 2g IV load then 1g q8h for PCN allergy without anaphylaxis risk; Clindamycin if PCN anaphylaxis risk AND organism susceptible; Vancomycin 20 mg/kg IV q8h (max 3g/dose) if clindamycin-resistant or unknown susceptibility",
      },
      {
        range: "GBS bacteriuria in current pregnancy (any concentration)",
        meaning: "ANY GBS in urine culture during current pregnancy (even below the standard UTI threshold of 100,000 CFU/mL) indicates heavy colonization and counts as a positive GBS status for the entire pregnancy",
        clinicalAction: "Treat GBS bacteriuria with antibiotics appropriate for the urinary isolate; document as GBS-positive regardless of rectovaginal culture result — automatic IAP at labor/ROM; no repeat rectovaginal culture needed",
      },
      {
        range: "Unknown GBS status at time of labor",
        meaning: "Culture not collected, results unavailable, or patient presents in active labor without prenatal care",
        clinicalAction: "Administer IAP if ANY of the following risk factors present: (1) gestational age < 37 weeks; (2) rupture of membranes ≥ 18 hours; (3) intrapartum temperature ≥ 38.0°C; (4) prior infant with invasive GBS disease; (5) GBS bacteriuria in current pregnancy. Rapid intrapartum GBS NAAT testing may be used if available and validated",
      },
    ],
    clinicalPearl:
      "GBS colonization is transient and can change throughout pregnancy; a negative culture at 36 weeks does not guarantee GBS-negative status at the time of labor, but cultures collected within 5 weeks of delivery are considered valid. IAP must be initiated at least 4 hours before delivery to be effective — a patient who delivers rapidly after a positive GBS screen who did not receive adequate IAP will require neonatal evaluation per CDC guidelines (CBC, blood culture, and observation at minimum).",
    boardRecallTip:
      "Screen at 36–37 weeks. GBS positive → IAP: Penicillin G first-line, ampicillin second, cefazolin for non-anaphylactic PCN allergy, clindamycin (if susceptible) for anaphylactic. GBS bacteriuria in pregnancy = automatic IAP regardless of rectovaginal culture. IAP must be ≥ 4 hours before delivery to be effective.",
  },
  {
    id: "wh-lab-003",
    rotation: "womens-health",
    name: "Non-Stress Test (NST)",
    normalRange: "Reactive NST: ≥ 2 accelerations of ≥ 15 bpm above baseline lasting ≥ 15 seconds in a 20-minute window",
    unit: "Qualitative (reactive/non-reactive/unsatisfactory) with FHR tracing",
    interpretation: [
      {
        range: "Reactive NST",
        meaning: "Two or more qualifying accelerations in 20 minutes (or up to 40 minutes after vibroacoustic stimulation) = normal, reassuring fetal status; fetal acidemia highly unlikely",
        clinicalAction: "Routine follow-up per clinical indication; if testing for post-dates, continue weekly or twice-weekly NST as indicated; reactive NST has a negative predictive value > 99.8% for fetal death within one week",
      },
      {
        range: "Non-reactive NST (no qualifying accelerations in 40 minutes)",
        meaning: "Absence of accelerations is non-reassuring; may indicate fetal sleep cycle (most common cause — sleep cycles last 20–40 minutes), fetal acidemia, CNS depression, extreme prematurity, or maternal sedating medications",
        clinicalAction: "Attempt vibroacoustic stimulation (VAS — artificial larynx applied to maternal abdomen); if still non-reactive after VAS and extended monitoring to 40 minutes: proceed to full biophysical profile (BPP) or contraction stress test (CST); an abnormal BPP (score ≤ 4) or positive CST warrants delivery consideration",
      },
      {
        range: "Accelerations < 32 weeks gestation",
        meaning: "Before 32 weeks, accelerations ≥ 10 bpm × ≥ 10 seconds are accepted as reactive criteria (smaller, shorter accelerations are normal for immature autonomic nervous system)",
        clinicalAction: "Use gestational-age-appropriate criteria; a 28-week fetus with 10 bpm × 10 sec accelerations × 2 = reactive for gestational age; if truly non-reactive, perform BPP with gestational-age-adjusted amniotic fluid criteria",
      },
      {
        range: "Sinusoidal pattern",
        meaning: "Smooth, sine wave-like FHR pattern at 3–5 cycles per minute with amplitude 5–15 bpm for ≥ 20 minutes; associated with severe fetal anemia (Rh alloimmunization, vasa previa, massive fetomaternal hemorrhage) or hypoxia",
        clinicalAction: "Urgent evaluation: fetal scalp stimulation test, MCA Doppler peak systolic velocity (PSV > 1.5 MoM = fetal anemia), Kleihauer-Betke test, immediate delivery vs intrauterine transfusion depending on gestational age and etiology",
      },
    ],
    clinicalPearl:
      "NST indications include post-dates pregnancy (≥ 41 weeks), maternal diabetes (pre-gestational or GDM requiring medication), hypertensive disorders of pregnancy, intrauterine growth restriction (IUGR/FGR), prior stillbirth, decreased fetal movement reported by mother, multiple gestation with discordant growth, and antiphospholipid antibody syndrome. Testing typically begins at 32–34 weeks for most indications and earlier (28 weeks) for high-risk conditions. The NST is the most widely used antepartum surveillance test due to its simplicity and low cost.",
    boardRecallTip:
      "Reactive NST: ≥ 2 accelerations ≥ 15 bpm × ≥ 15 sec in 20 min. Non-reactive → BPP or CST. < 32 weeks: 10 bpm × 10 sec criteria. Sinusoidal pattern = fetal anemia (emergency). Negative predictive value of reactive NST > 99.8% for fetal death within 1 week.",
  },
  {
    id: "wh-lab-004",
    rotation: "womens-health",
    name: "Glucose Challenge Test (GCT) and OGTT in Pregnancy",
    normalRange: "50g GCT 1-hour: < 130–140 mg/dL (institution-dependent threshold); 100g OGTT: Fasting < 95, 1h < 180, 2h < 155, 3h < 140 mg/dL (Carpenter-Coustan)",
    unit: "mg/dL",
    interpretation: [
      {
        range: "50g GCT 1-hour < 130–140 mg/dL",
        meaning: "Normal glucose challenge; low risk for gestational diabetes mellitus",
        clinicalAction: "No further glucose testing required at 24–28 weeks; rescreening not indicated unless new risk factors emerge",
      },
      {
        range: "50g GCT 1-hour ≥ 130–140 mg/dL (institution-specific threshold)",
        meaning: "Abnormal screening test — this is a SCREENING result, not diagnostic; approximately 15–25% of patients will screen positive; only about 15% of those who screen positive will have GDM on confirmatory testing",
        clinicalAction: "Proceed to 3-hour 100g OGTT (fasting state); GDM diagnosed if ≥ 2 of 4 Carpenter-Coustan values are met or exceeded: Fasting ≥ 95, 1h ≥ 180, 2h ≥ 155, 3h ≥ 140 mg/dL; if only 1 value abnormal = impaired glucose tolerance of pregnancy (some institutions diagnose GDM with 1 abnormal value — per IADPSG criteria, based on 75g OGTT)",
      },
      {
        range: "100g OGTT with ≥ 2 abnormal Carpenter-Coustan values",
        meaning: "Diagnostic of gestational diabetes mellitus (GDM)",
        clinicalAction: "Initiate GDM management: medical nutrition therapy (MNT) × 1–2 weeks with carbohydrate-controlled diet (40–50% carbs, spaced across 3 meals + 2–3 snacks); begin glucose monitoring (4× daily: fasting + 1h or 2h postprandial); if targets not met with MNT, start insulin therapy (NPH for fasting hyperglycemia; aspart/lispro for postprandial); growth ultrasound at 32–34 weeks; delivery timing per glycemic control and treatment modality",
      },
      {
        range: "First-trimester fasting glucose ≥ 92 mg/dL (IADPSG/ADA)",
        meaning: "Early-onset GDM — reflects underlying pre-gestational glucose dysregulation; associated with higher risk of adverse outcomes than second-trimester GDM",
        clinicalAction: "Diagnose GDM immediately (do not wait for 24–28 weeks screen); initiate MNT and glucose monitoring; if fasting ≥ 126 or random ≥ 200 with symptoms = overt diabetes in pregnancy (pre-gestational T2DM) — manage as pre-gestational diabetes with HbA1c, ophthalmology referral, and fetal cardiac anomaly screening",
      },
      {
        range: "Postpartum 75g 2-hour OGTT (4–12 weeks postpartum)",
        meaning: "Screens for persistent glucose dysregulation after GDM pregnancy; approximately 5–10% will have overt T2DM and 30–40% prediabetes at the 4–12 week postpartum test",
        clinicalAction: "Normal: FPG < 100 and 2h < 140 — low risk, annual HbA1c or fasting glucose for life; Prediabetes (IFG or IGT): intensive lifestyle intervention, weight loss, annual monitoring; T2DM diagnosed: initiate treatment; metformin is safe in breastfeeding",
      },
    ],
    clinicalPearl:
      "The GCT is administered non-fasting (a significant advantage for patient compliance), while the confirmatory 100g OGTT requires an 8-hour fast and 3 days of unrestricted carbohydrate diet beforehand to avoid false-positive results. A patient with a 50g GCT result of ≥ 200 mg/dL does not need the OGTT — this value alone is diagnostic of GDM. Reinforce that GDM management is primarily dietary, and that breastfeeding after delivery improves postpartum glucose tolerance and reduces long-term T2DM risk.",
    boardRecallTip:
      "Two-step: 50g GCT (non-fasting) → 100g OGTT if ≥ threshold. Carpenter-Coustan 100g OGTT: ≥ 2 of 4 abnormal = GDM (95/180/155/140). Postpartum: 75g OGTT at 4–12 weeks. GCT ≥ 200 = GDM without needing OGTT. High-risk: screen first trimester (FPG ≥ 92 = GDM).",
  },
  {
    id: "wh-lab-005",
    rotation: "womens-health",
    name: "GBS Urine Culture in Pregnancy",
    normalRange: "Negative (no GBS in urine culture)",
    unit: "Qualitative + colony count (CFU/mL)",
    interpretation: [
      {
        range: "GBS in urine at any concentration",
        meaning: "ANY growth of GBS in urine during the current pregnancy, even below the traditional UTI threshold of 100,000 CFU/mL, indicates heavy GBS genital tract colonization; this is distinct from other uropathogens where only significant bacteriuria (≥ 100,000 CFU/mL) requires treatment",
        clinicalAction: "Treat GBS bacteriuria at the time of diagnosis with an antibiotic appropriate for the urinary isolate (penicillin, ampicillin, or cephalexin); document positive GBS status permanently for the pregnancy — no need for rectovaginal GBS culture at 36 weeks because automatic intrapartum antibiotic prophylaxis (IAP) is required at labor/ROM regardless of colony count",
      },
      {
        range: "GBS urine colony count ≥ 100,000 CFU/mL (frank GBS bacteriuria/cystitis)",
        meaning: "GBS urinary tract infection; may be symptomatic (dysuria, frequency) or asymptomatic; counts as positive GBS for intrapartum purposes AND requires treatment for the UTI itself",
        clinicalAction: "Treat as UTI with appropriate antibiotic × 7 days; plan for IAP at labor; inform obstetric team of GBS-positive status; test of cure urine culture recommended 1 week after treatment",
      },
      {
        range: "GBS in urine in non-pregnant patient",
        meaning: "GBS can cause urinary tract infections in non-pregnant adults, particularly immunocompromised patients, elderly, and those with diabetes; does not carry the same automatic treatment imperative as in pregnancy",
        clinicalAction: "Treat if symptomatic; asymptomatic bacteriuria in non-pregnant, non-elderly adults does not require treatment per IDSA guidelines; no intrapartum considerations",
      },
    ],
    clinicalPearl:
      "The rule that 'any GBS in urine = treat AND counts as GBS-positive for intrapartum purposes' is unique to pregnancy and represents one of the highest-yield obstetric microbiology pearls. This rule exists because GBS bacteriuria in pregnancy (at any concentration) reflects heavy perineal and vaginal colonization, which dramatically increases the risk of vertical transmission to the neonate. Early identification and documentation is critical — always document GBS urine culture results prominently in the prenatal record.",
    boardRecallTip:
      "GBS in urine at ANY concentration in pregnancy = treat + automatic IAP at delivery. No need for 36-week rectovaginal culture if GBS bacteriuria documented earlier. Unique to pregnancy: GBS urine threshold is not the standard 100,000 CFU/mL. Always document in prenatal record — this is a high-yield board and clinical pearl.",
  },
  {
    id: "wh-lab-006",
    rotation: "womens-health",
    name: "TORCH Titers / Maternal Infectious Screening",
    normalRange: "Varies by organism; ideally IgG positive (immune) with negative IgM for most organisms",
    unit: "Titers (IgG/IgM), qualitative (reactive/non-reactive)",
    interpretation: [
      {
        range: "Toxoplasma: IgM positive + IgG positive",
        meaning: "Acute or recent Toxoplasma gondii infection; primary infection in pregnancy carries risk of congenital toxoplasmosis (chorioretinitis, hydrocephalus, intracranial calcifications, hearing loss, intellectual disability) — risk greatest in third trimester (65% transmission rate) but severity greatest in first trimester",
        clinicalAction: "Avidity testing to distinguish true acute from remote infection (high avidity = infection > 4 months ago); consult MFM; spiramycin (available via CDC) to reduce maternal-fetal transmission; pyrimethamine + sulfadiazine + leucovorin for confirmed fetal infection (after amniocentesis/PCR); counsel on prevention: avoid raw/undercooked meat, cat litter (oocysts in cat feces), unwashed produce",
      },
      {
        range: "Syphilis (RPR/VDRL reactive + confirmatory treponemal test positive)",
        meaning: "Active syphilis infection; congenital syphilis risk if untreated — hepatosplenomegaly, hydrops fetalis, stillbirth, sensorineural hearing loss, bone lesions, snuffles (rhinitis), Hutchinson teeth, saddle nose deformity",
        clinicalAction: "Screen at first prenatal visit, 28 weeks, and delivery (in high-prevalence areas); Penicillin G benzathine IM is ONLY acceptable treatment in pregnancy (oral azithromycin not recommended — resistance; doxycycline contraindicated in pregnancy); dose depends on stage; monitor RPR titers every month in pregnancy; if titer does not decline 4-fold by delivery, re-treat; Jarisch-Herxheimer reaction monitoring after treatment",
      },
      {
        range: "CMV: IgM positive (acute) or positive IgG seroconversion",
        meaning: "Cytomegalovirus is the MOST COMMON congenital infection (1% of all live births); primary infection in pregnancy carries 30–40% vertical transmission rate; congenital CMV: sensorineural hearing loss (most common cause of congenital hearing loss), intellectual disability, microcephaly, periventricular calcifications, hepatosplenomegaly, thrombocytopenic purpura (blueberry muffin baby)",
        clinicalAction: "No vaccine available; counsel on prevention: avoid saliva/urine contact with children in daycare (wash hands after diaper changes); valacyclovir 8g/day may reduce congenital transmission in primary maternal infection (recent evidence); fetal ultrasound surveillance; valganciclovir for neonates with symptomatic congenital CMV with CNS involvement (6 months)",
      },
      {
        range: "Rubella: IgG non-immune (susceptible)",
        meaning: "Non-immune patients are at risk for primary rubella infection in pregnancy, which causes congenital rubella syndrome (CRS): deafness, cataracts, congenital heart disease [PDA, peripheral pulmonary stenosis], microcephaly, intellectual disability, blueberry muffin rash, thrombocytopenia — greatest risk with infection in first trimester (90% transmission in first 10 weeks)",
        clinicalAction: "Screen rubella IgG at first prenatal visit; if non-immune: counsel on avoidance and administer MMR vaccine postpartum (live vaccine contraindicated in pregnancy); no treatment for congenital rubella; if exposure occurs in non-immune pregnant patient: immune globulin does not prevent fetal infection but may reduce maternal symptoms",
      },
      {
        range: "Hepatitis B: HBsAg positive",
        meaning: "Maternal hepatitis B surface antigen (HBsAg) positive indicates active HBV infection (acute or chronic); vertical transmission occurs primarily at delivery (blood exposure); risk of neonatal chronic HBV infection: 90% without prophylaxis; 10–15% with HepB vaccine alone; < 5% with vaccine + HBIG",
        clinicalAction: "Screen HBsAg at first prenatal visit (repeat in third trimester in high-risk); if positive: check HBeAg and HBV DNA; tenofovir alafenamide (TAF) or tenofovir disoproxil fumarate (TDF) recommended if HBV DNA > 200,000 IU/mL to reduce perinatal transmission; NEONATE: hepatitis B vaccine (0.5 mL IM) + HBIG (0.5 mL IM) within 12 hours of delivery at separate sites; complete 3-dose HepB series; confirm immunity at 9–12 months",
      },
    ],
    clinicalPearl:
      "CMV is the most common congenital infection and the leading non-genetic cause of sensorineural hearing loss — yet there is no screening program or vaccine for it. Congenital rubella syndrome, in contrast, has been nearly eliminated through vaccination. When you encounter a neonate with periventricular calcifications, think CMV; ring-enhancing calcifications in toxoplasmosis tend to be more diffuse throughout the parenchyma. Hepatitis B neonatal prophylaxis (vaccine + HBIG within 12 hours) is one of the highest-impact interventions in perinatal medicine.",
    boardRecallTip:
      "CMV = most common congenital infection + most common cause of congenital hearing loss (periventricular calcifications). Toxo = diffuse calcifications; treat with spiramycin/pyrimethamine. Rubella = cataracts/deafness/heart (PDA); vaccine postpartum. HBsAg positive neonate: HepB vaccine + HBIG within 12 hours. Syphilis in pregnancy = Penicillin G only (no alternatives acceptable).",
  },
];

export const womensHealthImaging: ImagingFinding[] = [
  {
    id: "wh-img-001",
    rotation: "womens-health",
    modality: "Ultrasound (Transvaginal and Transabdominal)",
    findingName: "Obstetric Ultrasound — First Trimester (< 14 weeks)",
    classicFindings: [
      "Gestational sac: first structure visible — anechoic round/oval structure within the endometrium; visible on transvaginal US (TVUS) when β-hCG 1,500–3,500 mIU/mL (discriminatory zone); mean sac diameter (MSD) used for dating before embryo visible",
      "Yolk sac: first anatomic landmark confirming intrauterine pregnancy; visible when MSD ≥ 8 mm; small echogenic ring within the gestational sac; absence when MSD ≥ 16 mm or presence of irregularly shaped sac suggests failed pregnancy",
      "Fetal pole (embryo): visible when MSD ≥ 16 mm; crown-rump length (CRL) measured from crown to rump in mid-sagittal plane; most accurate measurement for gestational age dating when performed at 7–13 6/7 weeks",
      "Cardiac activity: visible when CRL ≥ 7 mm (approximately 6 weeks); in embryos with CRL < 7 mm, absence of cardiac activity is non-diagnostic and requires repeat scan in 7–10 days",
      "Nuchal translucency (NT): anechoic space at the back of fetal neck measured at 11–13 6/7 weeks (CRL 45–84 mm); NT ≥ 3.0 mm associated with increased risk of chromosomal abnormalities (trisomy 21, 18, 13), cardiac defects, and genetic syndromes",
      "First-trimester combined screening: NT + serum PAPP-A (low in trisomy 21) + free β-hCG (high in trisomy 21) = detection rate ~85–90% for trisomy 21 at 5% false-positive rate; nasal bone absent in ~65% of Down syndrome fetuses (useful adjunct)",
      "Cell-free DNA (NIPT): analyzes fetal DNA fragments in maternal circulation; available from 10 weeks; > 99% sensitivity and > 99% specificity for trisomy 21; highly sensitive for trisomy 18 (~98%) and trisomy 13 (~90%); also screens for monosomy X, sex chromosome aneuploidies, and microdeletions; low positive predictive value in low-risk populations",
      "Chorionic villus sampling (CVS): performed 10–13 weeks; transabdominal or transcervical placental biopsy for definitive karyotyping; procedure-related pregnancy loss 0.5–1%; allows earlier diagnosis than amniocentesis",
    ],
    keyDifferentials: [
      "Pseudogestational sac (seen in ectopic pregnancy): intrauterine fluid collection without yolk sac, caused by decidual reaction to circulating hCG; thinner walls, central location, no double decidual sac sign",
      "Blighted ovum (anembryonic pregnancy): gestational sac without embryo when MSD ≥ 25 mm on TVUS or no cardiac activity when CRL ≥ 7 mm — criteria for early pregnancy failure",
      "Subchorionic hematoma: hypo- or anechoic crescent-shaped collection between chorion and myometrium; often associated with first-trimester bleeding; most resolve spontaneously; large hematomas (> 25% of gestational sac volume) associated with increased pregnancy loss",
      "Dichorionic vs monochorionic twins: best assessed in first trimester; dichorionic: thick dividing membrane, lambda (twin peak) sign — triangular echogenic projection into base of inter-twin membrane; monochorionic: thin membrane, T-sign — perpendicular insertion into placenta without widening",
    ],
    clinicalCorrelation:
      "First-trimester ultrasound is the gold standard for pregnancy dating when performed at 7–13 6/7 weeks; dating by CRL takes precedence over LMP if discrepancy > 5–7 days. All patients should be offered first-trimester screening and counseling about NIPT. When a gestational sac is seen without a yolk sac or embryo, document the MSD and schedule a follow-up scan in 7–10 days before declaring pregnancy failure, to avoid inadvertently terminating a viable pregnancy in an early intrauterine pregnancy.",
    boardRecallTip:
      "Discriminatory zone 1,500–3,500 mIU/mL — no sac on TVUS = ectopic. CRL ≥ 7 mm with no cardiac activity = failed pregnancy. NT ≥ 3.0 mm = increased aneuploidy risk. NIPT: most sensitive for trisomy 21 (> 99%) but high false-positive in low-risk populations. First-trimester combined screen: NT + PAPP-A + free β-hCG.",
  },
  {
    id: "wh-img-002",
    rotation: "womens-health",
    modality: "Transvaginal Ultrasound (TVUS)",
    findingName: "Ectopic Pregnancy Evaluation",
    classicFindings: [
      "Absence of intrauterine pregnancy (IUP) above the discriminatory zone (β-hCG ≥ 1,500–3,500 mIU/mL on TVUS): failure to identify an intrauterine gestational sac at or above the discriminatory zone is the most important imaging criterion for presumed ectopic pregnancy",
      "Adnexal mass separate from the ovary: the most common finding (approximately 60–80% of ectopics); 'blob sign' = non-specific echogenic or complex adnexal mass adjacent to ovary (most common presentation); tubal ring sign = echogenic ring surrounding an empty gestational sac in the tube (pathognomonic but seen in only ~40%); actual gestational sac with yolk sac/embryo outside uterus seen in only ~25–30% of cases",
      "Free fluid in the cul-de-sac (posterior cul-de-sac / pouch of Douglas): small amounts of free fluid can be physiologic; large-volume free fluid (particularly extending to Morrison's pouch in upper abdomen) = hemoperitoneum from ruptured ectopic — surgical emergency",
      "Pseudogestational sac: intrauterine fluid collection without yolk sac; caused by decidual reaction from circulating hCG; differentiated from true IUP by absence of yolk sac, double decidual sac sign; present in up to 20% of ectopic pregnancies and can mislead clinician into falsely diagnosing IUP",
      "Interstitial (cornual) ectopic: located in the intramural portion of the fallopian tube within the uterine wall; appears as an asymmetric myometrial mass in the uterine cornea with < 5 mm myometrial mantle; high risk of delayed rupture (presents at 10–14 weeks due to distensibility of myometrium); doppler shows eccentric intrauterine gestational sac or ring of fire vascular pattern",
      "Cervical ectopic: gestational sac implanted in cervical canal below the level of the internal os; barrel-shaped cervix; cardiac activity may be present; highly vascular; risk of massive hemorrhage with any intervention — requires specialist management (MTX, uterine artery embolization, hysterectomy risk)",
    ],
    keyDifferentials: [
      "Corpus luteum cyst: normal ovarian finding; thick-walled cystic structure within the ovary with ring-of-fire vascular pattern on Doppler; can mimic ectopic ring sign — KEY distinction is that corpus luteum is WITHIN the ovary (moves with ovary on palpation), while ectopic is SEPARATE from ovary",
      "Hemorrhagic ovarian cyst: complex cystic mass with internal echoes (blood); can be confused with ectopic; differentiated by location within ovary, no gestational sac, resolves on follow-up",
      "Heterotopic pregnancy: simultaneous IUP and ectopic pregnancy; rare in spontaneous conception (1:30,000) but dramatically increased with ART (1:100–1:1,000); presence of IUP does NOT exclude ectopic in ART patients",
      "Appendicitis or other adnexal pathology: right-sided ectopic vs appendicitis; ovarian torsion vs ectopic — correlation with β-hCG and clinical history essential",
    ],
    clinicalCorrelation:
      "Ectopic pregnancy accounts for 2–3% of all pregnancies but 6–9% of all pregnancy-related deaths. Rupture can occur at any β-hCG level and any gestational age — hemodynamically unstable patients with suspected ectopic require immediate surgical intervention without waiting for imaging confirmation. MTX criteria: hemodynamically stable, unruptured, β-hCG < 5,000 mIU/mL (relative; some protocols allow up to 10,000), no cardiac activity, no contraindications (renal/hepatic disease, immunodeficiency, breastfeeding). Rh-negative patients with ectopic require RhoGAM 300 mcg IM.",
    boardRecallTip:
      "No IUP above discriminatory zone = ectopic until proven otherwise. Blob sign most common (not the ring sign or visible ectopic sac). Free fluid in cul-de-sac = hemoperitoneum = ruptured ectopic = surgical emergency. Pseudogestational sac can mimic IUP (no yolk sac distinguishes). Corpus luteum is WITHIN the ovary; ectopic is OUTSIDE the ovary.",
  },
  {
    id: "wh-img-003",
    rotation: "womens-health",
    modality: "Pelvic Ultrasound (Transvaginal and Transabdominal)",
    findingName: "Uterine and Adnexal Pathology",
    classicFindings: [
      "Uterine fibroids (leiomyomata): well-defined, hypoechoic to heterogeneous uterine masses; classified by location: intramural (most common, within myometrium — causes bulk symptoms and menorrhagia), submucosal (distorts endometrial cavity, most symptomatic — causes heavy bleeding, most amenable to hysteroscopic resection), subserosal (projects outward from serosa — bulk symptoms, least menorrhagia), pedunculated (attached by a stalk — can be mistaken for adnexal mass); 'Swiss cheese' appearance with posterior shadowing; MRI superior for fibroid mapping before myomectomy or UAE",
      "PCOS (polycystic ovarian morphology): ovaries meeting one or more of: ≥ 20 follicles per ovary measuring 2–9 mm in diameter (string-of-pearls sign); ovarian volume > 10 mL (one ovary sufficient for diagnosis); typically enlarged, rounded ovaries with increased stromal echogenicity; PCOS requires 2 of 3 Rotterdam criteria (oligo/anovulation, hyperandrogenism, polycystic morphology on US) — US alone is NOT diagnostic",
      "Simple ovarian cyst: anechoic (no internal echoes), smooth thin wall (< 3 mm), no septations, no solid components, no vascular flow on Doppler, posterior acoustic enhancement; in premenopausal women: simple cysts ≤ 5 cm require no follow-up; 5–10 cm: follow-up in 6–12 weeks; > 10 cm: surgical evaluation",
      "Complex ovarian cyst / concerning features: thick walls or thick septations (> 3 mm), solid or mixed solid-cystic components, internal papillary projections, increased vascularity (Doppler flow within solid component), bilaterality, ascites, lymphadenopathy — features suggesting malignancy; requires OB/GYN consultation and risk stratification (IOTA criteria, ADNEX model, O-RADS)",
      "Corpus luteum cyst: physiologic finding; thick-walled cystic structure within the ovary; ring-of-fire vascular pattern (peripheral vascularity) on Doppler; internal echoes if hemorrhagic; resolves spontaneously by 8–12 weeks of pregnancy or within a menstrual cycle; can cause acute pain if hemorrhagic rupture occurs",
      "Endometrioma (chocolate cyst): homogeneous low-level internal echoes ('ground-glass' appearance) in an ovarian cyst; bilateral in 25–50% of cases; thick walls; may have hyperechoic foci in wall; 'kissing ovaries' (bilateral endometriomas adherent posterior to uterus) suggests advanced endometriosis; CA-125 often mildly elevated (non-specific)",
      "Ovarian dermoid (mature teratoma): most common benign ovarian tumor in women under 30; highly echogenic mass with posterior acoustic shadowing (fat and hair content); Rokitansky nodule (echogenic focus — represents calcification, tooth, or bone within cyst); 'tip of the iceberg' sign (only superficial portion visible due to posterior shadowing); bilateral in 10–15%; management: cystectomy (preserve ovarian tissue) if symptomatic or > 5–6 cm",
      "Fallopian tube (hydrosalpinx): distended, fluid-filled, tubular structure in the adnexa; incomplete septations give 'cogwheel' appearance on cross-section; waist sign (constrictions along the tube); absent peristalsis; associated with prior PID, infertility; if tubular structure with thick walls and internal echoes = pyosalpinx (acute PID) or hematosalpinx (ectopic pregnancy)",
    ],
    keyDifferentials: [
      "Pedunculated fibroid vs adnexal mass: pedunculated fibroid moves with uterus on palpation and during real-time US; may have a visible vascular pedicle connecting it to uterus; MRI best for differentiation",
      "Endometrioma vs hemorrhagic cyst vs dermoid: endometrioma has homogeneous low-level echoes, persists on follow-up, bilateral tendency; hemorrhagic cyst has heterogeneous reticular/fishnet pattern, resolves in 6–12 weeks; dermoid has highly echogenic component with posterior shadowing",
      "Ovarian torsion: adnexal mass with absent or markedly reduced Doppler flow (NOTE: presence of Doppler flow does NOT exclude torsion — torsion can have intermittent or partial flow); enlarged, edematous ovary; multiple peripheral follicles displaced to periphery (follicular ring sign); requires surgical emergency regardless of Doppler findings if clinical suspicion is high",
    ],
    clinicalCorrelation:
      "In postmenopausal women, any ovarian cyst requires more careful evaluation; simple cysts < 1 cm may be observed; any complex features (septations, solid component, vascularity) should prompt referral for surgical evaluation. For premenopausal women with pelvic pain and an adnexal mass, the priority is ruling out ectopic pregnancy (β-hCG first) and ovarian torsion (surgical emergency). Always obtain a β-hCG before assuming adnexal pathology is benign in reproductive-age women.",
    boardRecallTip:
      "Endometrioma = ground-glass echoes (homogeneous low-level internal echoes). Dermoid = highly echogenic + posterior shadowing (fat/hair/teeth). PCOS = string of pearls (≥ 20 follicles 2–9 mm). Simple cyst = anechoic, thin wall, no flow — follow if ≤ 10 cm in premenopausal. Hydrosalpinx = tubular, cogwheel on cross-section. Fibroid locations: submucosal = most symptomatic (bleeding).",
  },
  {
    id: "wh-img-004",
    rotation: "womens-health",
    modality: "Mammography (Digital and Tomosynthesis)",
    findingName: "Mammographic Findings and BI-RADS Classification",
    classicFindings: [
      "BI-RADS 0 (Incomplete): additional imaging evaluation needed (spot compression, magnification views, additional projections, or prior comparison films); not a final assessment; requires recall",
      "BI-RADS 1 (Negative): no significant abnormality; annual screening mammogram recommended; negative predictive value > 99%",
      "BI-RADS 2 (Benign): benign finding described but does not affect management; includes oil cysts, intramammary lymph node, calcified fibroadenoma, implants; routine annual screening",
      "BI-RADS 3 (Probably Benign): < 2% chance of malignancy; 6-month follow-up ipsilateral mammogram, then 12-month bilateral; includes developing asymmetry, round/oval circumscribed non-calcified mass, grouped round calcifications; not for new biopsies",
      "BI-RADS 4 (Suspicious): 2–95% chance of malignancy; tissue biopsy recommended; subcategories: 4A (2–10% low), 4B (10–50% intermediate), 4C (50–95% moderate concern); percutaneous core needle biopsy preferred over excisional biopsy as initial tissue diagnosis",
      "BI-RADS 5 (Highly Suggestive of Malignancy): > 95% chance of malignancy; biopsy required; classic example: spiculated mass with microcalcifications; initiate cancer workup concurrently",
      "BI-RADS 6 (Known Biopsy-Proven Malignancy): used for imaging performed on biopsy-proven cancer before definitive surgical treatment; not a screening category",
      "Microcalcifications suggestive of malignancy (DCIS): pleomorphic calcifications (variable size and shape), linear or branching (casting) calcifications following ductal distribution — represent comedonecrosis in DCIS; fine granular calcifications in segmental or regional distribution; DCIS most commonly presents as calcifications alone without a mass on mammogram",
      "Spiculated mass: speculation (radiating lines from mass) represents desmoplastic reaction in invasive carcinoma (invasive ductal carcinoma most common); high positive predictive value for malignancy; correlate with ultrasound for characterization and biopsy guidance",
      "Architectural distortion: focal distortion of normal breast architecture without a mass; seen with invasive lobular carcinoma (most common cause of architectural distortion on mammogram), radial scar, post-surgical changes; requires correlation with ultrasound and biopsy if no known benign etiology",
      "Skin thickening (> 2 mm): inflammatory breast cancer (IBC), locally advanced breast cancer, post-radiation changes, infection/mastitis; IBC presents with skin erythema, warmth, edema, peau d'orange — may not have a discrete mass on imaging; diagnosed clinically; skin biopsy shows dermal lymphatic invasion",
      "Tomosynthesis (DBT, 3D mammography): creates multiple thin-slice images through the breast reducing overlapping tissue; reduces recall rates by 15–20% compared to 2D; increases invasive cancer detection by 20–40%; preferred modality where available; particularly beneficial in dense breast tissue",
    ],
    keyDifferentials: [
      "Fibroadenoma (benign): round or oval, circumscribed or partially circumscribed mass; may contain coarse 'popcorn' calcifications (involuting fibroadenoma); typically BI-RADS 2 or 3; US shows oval, wider-than-tall, circumscribed, homogeneous hypoechoic mass — classic appearance allows observation in women < 30",
      "Cyst: round/oval circumscribed mass; anechoic on US with posterior acoustic enhancement = simple cyst — no biopsy needed; complex cyst (internal echoes, thick wall, mural nodule) may require biopsy or aspiration",
      "Invasive lobular carcinoma (ILC): may be subtle on mammography (architectural distortion rather than mass); multifocal, multicentric, bilateral in 10–20%; MRI better for extent of disease; linear pattern of calcifications rare; US: hypoechoic mass with angular margins",
      "Lymph node vs mass: intramammary lymph node: oval, circumscribed, reniform with fatty hilum — classic benign; axillary adenopathy: loss of fatty hilum, round shape, cortical thickening > 3 mm — suspicious for metastasis or lymphoma",
    ],
    clinicalCorrelation:
      "A mammogram report should always be communicated directly to the patient, not just filed. Any BI-RADS 4 or 5 result requires prompt referral for biopsy — preferably ultrasound-guided core needle biopsy or stereotactic biopsy. Dense breast notification laws (in most US states) require informing patients if they have dense breasts (ACR C or D) so they can discuss supplemental screening. Women with a new diagnosis of breast cancer should be offered genetic counseling and testing (BRCA1/2 and expanded panel) regardless of family history, per NCCN guidelines.",
    boardRecallTip:
      "BI-RADS 1–2 = routine screening. BI-RADS 3 = 6-month follow-up. BI-RADS 4 = biopsy (2–95%). BI-RADS 5 = biopsy (> 95%). Microcalcifications (pleomorphic, linear, ductal distribution) = DCIS. Spiculated mass = invasive carcinoma. IBC = peau d'orange + NO discrete mass. Tomosynthesis reduces recalls 15–20%. Dense breasts (C or D) = reduced sensitivity + increased cancer risk.",
  },
];
