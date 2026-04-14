// @ts-nocheck
import { DifferentialSet } from "@/types/seed";

export const womensHealthDifferentials: DifferentialSet[] = [
  {
    id: "wh-diff-001",
    rotation: "womens-health",
    chiefComplaint: "First Trimester Vaginal Bleeding",
    diagnoses: [
      {
        name: "Threatened Abortion",
        likelihood: "Most common cause of first-trimester bleeding (20–40% of pregnancies)",
        keyFeatures: [
          "Vaginal bleeding with closed cervical os",
          "Viable intrauterine pregnancy on ultrasound (fetal cardiac activity present)",
          "May have mild cramping or no pain",
          "β-hCG appropriately rising or normal for gestational age",
          "Subchorionic hematoma may be present on ultrasound",
        ],
        distinguishingFeatures: "Closed cervical os with visible fetal heartbeat definitively distinguishes threatened from inevitable abortion. Approximately 50% will progress to complete abortion; the other 50% will continue to viable delivery. Subchorionic hematoma > 25% of gestational sac volume associated with higher risk of progression.",
        workUp: "Transvaginal ultrasound (confirm cardiac activity and location), quantitative β-hCG, blood type and Rh factor (RhoGAM 300 mcg IM for Rh-negative patients), CBC if significant bleeding",
        treatment: "Expectant management — pelvic rest (no intercourse, tampons, or douching); reassure patient; strict return precautions (soaking more than one pad per hour, severe pain, fever, tissue passage); no evidence that bed rest or progesterone improves outcomes in otherwise normal pregnancies; weekly ultrasound surveillance if subchorionic hematoma present",
      },
      {
        name: "Inevitable Abortion",
        likelihood: "Common; follows threatened abortion with cervical dilation",
        keyFeatures: [
          "Vaginal bleeding with OPEN cervical os",
          "Cramping (uterine contractions)",
          "Products of conception may be visible at or near the os",
          "Fetal cardiac activity may still be present or absent",
          "Patient may report passage of tissue",
        ],
        distinguishingFeatures: "Cervical os is OPEN — this distinguishes inevitable from threatened abortion. Once the os opens, continuation of the pregnancy is not possible. The key distinguishing factor from incomplete abortion is that tissue has not yet passed but the os is open.",
        workUp: "Ultrasound (assess for retained products, location of pregnancy), blood type and Rh, CBC (assess for anemia), coagulation studies if significant bleeding",
        treatment: "Expectant management (allow to pass naturally), medical management (misoprostol 800 mcg vaginally or sublingually), or surgical management (suction curettage/manual vacuum aspiration — MVA); Rh-negative patients receive RhoGAM regardless of management approach; pain management with NSAIDs or opioids as needed",
      },
      {
        name: "Incomplete Abortion",
        likelihood: "Common complication of spontaneous or induced abortion",
        keyFeatures: [
          "Open cervical os",
          "Partially passed pregnancy — retained products of conception (RPOC) visible on ultrasound",
          "Persistent bleeding that may be heavy",
          "Cramping",
          "Uterine tenderness on exam",
          "Endometrial thickness > 15 mm with heterogeneous echogenicity on US suggests RPOC",
        ],
        distinguishingFeatures: "RPOC on ultrasound with open os distinguishes incomplete from complete abortion. Vascular flow within the retained tissue on Doppler (retained trophoblastic tissue) supports the diagnosis and usually requires intervention. Endometrial thickness alone is not sufficient — heterogeneous content with vascularity is more specific for RPOC.",
        workUp: "Transvaginal ultrasound with Doppler, β-hCG, CBC, Rh type, coagulation studies",
        treatment: "Expectant management may be offered for smaller amounts of retained tissue; misoprostol 800 mcg vaginally if hemodynamically stable; surgical uterine evacuation (MVA or sharp curettage) for heavy bleeding, infection, or failed expectant/medical management; prophylactic antibiotics with surgical management; RhoGAM for Rh-negative patients",
      },
      {
        name: "Complete Abortion",
        likelihood: "Common outcome of early pregnancy loss",
        keyFeatures: [
          "Passage of complete products of conception",
          "Cervical os may be closed after complete passage",
          "Bleeding substantially decreased or stopped",
          "Cramping resolved",
          "Ultrasound: empty uterine cavity or thin endometrial stripe (< 15 mm)",
          "β-hCG declining appropriately",
        ],
        distinguishingFeatures: "Empty uterus on ultrasound with declining β-hCG and cessation of heavy bleeding after passage of tissue distinguishes complete from incomplete abortion. Diagnosis must be confirmed with serial β-hCG decline and/or ultrasound — do not assume complete without evidence.",
        workUp: "Transvaginal ultrasound (confirm empty cavity), serial β-hCG to confirm decline to undetectable, Rh type",
        treatment: "No specific intervention required if uterus is empty and bleeding is controlled; RhoGAM for Rh-negative patients; emotional support and counseling; contraception counseling (ovulation can return in as few as 2 weeks); follow-up β-hCG to undetectable to confirm complete resolution",
      },
      {
        name: "Missed Abortion (Embryonic/Fetal Demise)",
        likelihood: "Common; diagnosed incidentally or with minimal symptoms",
        keyFeatures: [
          "CLOSED cervical os",
          "No fetal cardiac activity on ultrasound at expected gestational age",
          "Criteria: CRL ≥ 7 mm with no cardiac activity; or gestational sac ≥ 25 mm with no embryo; or no embryo development ≥ 2 weeks after scan showed gestational sac without yolk sac",
          "Patient may have noted cessation of pregnancy symptoms (nausea, breast tenderness)",
          "Minimal or no bleeding at presentation",
        ],
        distinguishingFeatures: "Closed os with absent cardiac activity on ultrasound — the absence of spontaneous pregnancy passage despite retained nonviable pregnancy distinguishes missed from inevitable or incomplete abortion. Must confirm with strict ultrasound criteria to avoid misdiagnosis of a viable early pregnancy.",
        workUp: "Transvaginal ultrasound (using strict ACOG/SRU criteria to avoid misdiagnosis), β-hCG, blood type and Rh, CBC, consider DIC panel if retained for > 4 weeks (risk of consumptive coagulopathy — hypofibrinogenemia)",
        treatment: "Expectant, medical (misoprostol), or surgical management (D&C); patient preference guides choice after counseling on risks and benefits; RhoGAM for Rh-negative patients; emotional support is essential — missed abortion is often diagnosed at a routine visit without prior warning",
      },
      {
        name: "Ectopic Pregnancy",
        likelihood: "Occurs in 1.5–2% of pregnancies; accounts for 2–3% of pregnancy-related deaths",
        keyFeatures: [
          "Unilateral pelvic/adnexal pain (classically, but can be vague or bilateral)",
          "Amenorrhea followed by irregular vaginal bleeding (often light spotting)",
          "Absence of IUP on ultrasound with β-hCG above discriminatory zone",
          "Adnexal mass separate from ovary on transvaginal US",
          "Risk factors: prior ectopic, tubal surgery, PID, IUD in place (relative risk), assisted reproduction (ART), smoking, endometriosis",
        ],
        distinguishingFeatures: "No IUP visible above discriminatory zone with adnexal mass or free fluid is the classic ultrasound picture. Hemodynamic instability with hemoperitoneum indicates ruptured ectopic — a surgical emergency. A key pitfall: a pseudogestational sac (decidual cast) in the uterus can mimic an IUP — yolk sac confirms true IUP.",
        workUp: "Quantitative β-hCG + transvaginal ultrasound (together, not separately), Rh type, CBC, BMP, type and crossmatch if unstable; serial β-hCG every 48 hours if ultrasound inconclusive",
        treatment: "Surgical (laparoscopic salpingectomy or salpingostomy) for ruptured or hemodynamically unstable; methotrexate (50 mg/m² IM) for stable, unruptured, β-hCG < 5,000 mIU/mL, no cardiac activity, compliant patient; expectant management for very low β-hCG (< 200) that is spontaneously declining; RhoGAM for all Rh-negative patients",
      },
      {
        name: "Hydatidiform Mole (Gestational Trophoblastic Disease)",
        likelihood: "Less common; 1 in 1,000 pregnancies in the United States",
        keyFeatures: [
          "Vaginal bleeding in first or early second trimester — often heavier than typical SAB",
          "Uterus large for dates",
          "Very high β-hCG (often > 100,000 mIU/mL) — may cause hyperthyroidism (hCG cross-reacts with TSH receptor), hyperemesis gravidarum, or early preeclampsia (< 20 weeks)",
          "Snowstorm appearance on ultrasound: hyperechoic uterine mass with multiple tiny cystic spaces (hydropic villi), no identifiable fetal parts (complete mole); or incomplete mole with some fetal tissue, lower β-hCG, triploid karyotype",
          "Passage of grape-like vesicles vaginally",
          "Theca lutein cysts bilaterally (from ovarian hyperstimulation by very high hCG)",
        ],
        distinguishingFeatures:
          "Complete mole: 46XX (all paternal — two sperm fertilize empty egg), no fetal parts, very high β-hCG, snowstorm US. Partial mole: 69XXY (triploid), some fetal tissue, lower β-hCG, fetal parts present. Complete mole has higher risk of gestational trophoblastic neoplasia (GTN) — 15–20% develop into persistent GTN requiring chemotherapy (methotrexate or actinomycin-D).",
        workUp: "Ultrasound, quantitative β-hCG, CBC (anemia), chest X-ray (pulmonary metastases), TSH, LFTs, renal function, Rh type, pathologic examination of all products of conception",
        treatment: "Suction curettage (NOT sharp curettage — risk of perforation); oxytocin after suction started (not before — risk of embolization); Rh-negative patients receive RhoGAM; serial weekly β-hCG until undetectable × 3 consecutive weeks; chest X-ray; contraception for 6–12 months (barrier or oral contraceptives) — avoid pregnancy until β-hCG undetectable; chemotherapy (MTX or actinomycin-D) for GTN/persistent trophoblastic disease",
      },
    ],
    clinicalPearl:
      "The single most important first step in evaluating first-trimester bleeding is transvaginal ultrasound combined with quantitative β-hCG — together they can diagnose or exclude ectopic pregnancy, determine viability, and guide management. Never perform a digital or speculum exam until placenta location is known in the third trimester. For missed abortion, use strict ultrasound criteria (CRL ≥ 7 mm with no cardiac activity) before counseling the patient about pregnancy loss, to avoid the devastating error of diagnosing loss in a viable early pregnancy.",
    boardRecallTip:
      "Closed os + cardiac activity = threatened (expectant). Open os = inevitable or incomplete. Empty uterus + passed tissue = complete. Closed os + no cardiac activity = missed (wait for strict criteria). Ectopic: no IUP above discriminatory zone + adnexal mass. Molar: snowstorm US + very high β-hCG + 46XX all-paternal (complete) — suction curettage + serial hCG. RhoGAM for all Rh-negative patients.",
  },
  {
    id: "wh-diff-002",
    rotation: "womens-health",
    chiefComplaint: "Third Trimester Vaginal Bleeding",
    diagnoses: [
      {
        name: "Placenta Previa",
        likelihood: "Occurs in 0.5–1% of pregnancies; risk increases with prior uterine surgery, multiparity, advanced maternal age",
        keyFeatures: [
          "Painless, bright red vaginal bleeding (may be provoked by intercourse or exam)",
          "Soft, non-tender uterus",
          "Placenta located over or near the internal cervical os on ultrasound",
          "Normal fetal heart tracing (unless significant hemorrhage)",
          "Risk factors: prior cesarean section (each C/S increases risk of accreta), prior uterine surgery, multiparity, advanced maternal age, multiple gestation, prior uterine curettage",
        ],
        distinguishingFeatures: "PAINLESS bleeding is the classic presentation of placenta previa — in contrast to placental abruption (painful). Diagnosis requires ultrasound (TVUS is most accurate for os relationship); digital vaginal exam is absolutely contraindicated before placenta location is confirmed. Complete previa (placenta covers internal os) requires cesarean delivery.",
        workUp: "TVUS (gold standard for previa diagnosis — more accurate than transabdominal), CBC, type and crossmatch, coagulation studies, NST/fetal monitoring; DO NOT perform digital vaginal exam",
        treatment: "Hospitalize if significant bleeding; complete previa with persistent bleeding → delivery; planned cesarean delivery at 36 0/7–37 6/7 weeks (34–36 weeks if repeated bleeding); pelvic rest (no intercourse, vaginal exams) until delivery; consider antenatal corticosteroids if < 34 weeks; screen for placenta accreta spectrum (PAS) — if present, delivery at specialized center with multidisciplinary team",
      },
      {
        name: "Placental Abruption",
        likelihood: "Occurs in 0.5–1% of pregnancies; leading cause of perinatal mortality in the third trimester",
        keyFeatures: [
          "Painful vaginal bleeding — sudden-onset, constant uterine pain (unlike labor contractions which wax and wane)",
          "Uterine rigidity (board-like, tense uterus — 'wooden uterus')",
          "Vaginal bleeding may be absent if abruption is concealed (blood trapped behind placenta)",
          "Fetal heart rate abnormalities (late decelerations, bradycardia, sinusoidal pattern)",
          "Risk factors: hypertension (strongest risk factor — preeclampsia/chronic HTN), cocaine use, trauma (MVA, domestic violence), prior abruption (10× recurrence risk), cigarette smoking, polyhydramnios (sudden decompression)",
          "Disseminated intravascular coagulation (DIC) in severe abruption (concealed hemorrhage, fetal demise)",
        ],
        distinguishingFeatures: "PAINFUL bleeding with uterine rigidity distinguishes abruption from previa. Concealed abruption (no external bleeding) is particularly dangerous and can present with only abdominal pain and an abnormal FHR tracing. Kleihauer-Betke (KB) test detects fetal red blood cells in maternal circulation — positive in fetomaternal hemorrhage; in Rh-negative mothers, guides RhoGAM dosing (300 mcg per 30 mL fetal whole blood).",
        workUp: "CBC (anemia, falling platelet count), coagulation studies (PT, PTT, fibrinogen — DIC screen), Kleihauer-Betke test, blood type and crossmatch, continuous fetal monitoring, ultrasound (retroplacental hematoma identified in only ~50% of cases — negative US does NOT exclude abruption)",
        treatment: "Delivery if fetal compromise, term pregnancy, or severe abruption; expectant management with hospitalization and continuous monitoring if mild, preterm, stable mother and fetus; treat coagulopathy with fresh frozen plasma, cryoprecipitate (fibrinogen), platelets; massive transfusion protocol if severe hemorrhage; RhoGAM for Rh-negative patients",
      },
      {
        name: "Vasa Previa",
        likelihood: "Rare (1 in 2,500–5,000 pregnancies); highest fetal mortality of all causes of third-trimester bleeding",
        keyFeatures: [
          "Fetal vessel(s) running across or near the internal cervical os (unprotected by placenta or umbilical cord)",
          "Sudden onset of painless vaginal bleeding at or after rupture of membranes (bleeding is fetal blood)",
          "Sinusoidal fetal heart rate pattern (fetal exsanguination)",
          "Rapid fetal deterioration out of proportion to amount of maternal blood loss",
          "Risk factors: velamentous cord insertion, bilobed or succenturiate lobed placenta, low-lying placenta, IVF pregnancies, multiple gestation",
        ],
        distinguishingFeatures: "The key distinguishing feature is that the bleeding is FETAL blood, not maternal — therefore even a small amount of blood loss causes fetal compromise disproportionate to maternal stability. Sinusoidal FHR is highly characteristic. Antenatal diagnosis with TVUS color Doppler (looking for vessels crossing the os) and planned cesarean before rupture of membranes is life-saving.",
        workUp: "Apt test (differentiates fetal from maternal hemoglobin — fetal Hgb F is alkali-resistant; maternal Hgb A denatures pink → brown with sodium hydroxide); Kleihauer-Betke test; TVUS with color Doppler for antenatal screening in at-risk patients; continuous fetal monitoring; emergent ultrasound",
        treatment: "EMERGENCY cesarean delivery when bleeding at ruptured membranes with fetal distress — do not delay for imaging; antenatal diagnosis (TVUS Doppler at 28–32 weeks in at-risk patients): planned cesarean at 34–35 weeks before onset of labor or membrane rupture; hospitalize from 30–34 weeks if diagnosed; neonatal resuscitation with possible emergency transfusion",
      },
      {
        name: "Bloody Show",
        likelihood: "Normal finding; occurs near term as cervix effaces and dilates",
        keyFeatures: [
          "Small amount of blood-tinged mucus (mucus plug passage)",
          "Occurs near term (38–42 weeks)",
          "May be associated with prodromal labor contractions",
          "No fetal heart rate abnormalities",
          "Cervix: effaced, softened, may be beginning to dilate",
          "No pain, not significant hemorrhage",
        ],
        distinguishingFeatures:
          "Bloody show is self-limiting, small in volume, mucoid in character, and associated with cervical change near term. It is distinct from pathologic bleeding by the quantity (mucus-predominant, not frank blood), timing (term), and absence of fetal compromise. If there is any uncertainty about the amount of bleeding, treat as potentially pathologic until proven otherwise.",
        workUp: "Fetal monitoring (NST), cervical examination to assess dilation and effacement, ultrasound to confirm placental location if not recently documented",
        treatment: "Reassurance and expectant management; educate patient to return for regular contractions, rupture of membranes, or increased bleeding; labor assessment if active contractions",
      },
      {
        name: "Cervical or Vaginal Lesion",
        likelihood: "Less common; should always be excluded on speculum exam",
        keyFeatures: [
          "Visible cervical or vaginal source of bleeding on speculum exam",
          "May include cervical polyp, cervical ectropion, cervicitis, cervical cancer, vaginal laceration, or varicosities",
          "Bleeding typically occurs with intercourse (post-coital bleeding) for cervical lesions",
          "Normal placental location on ultrasound",
          "Fetal heart tracing normal",
        ],
        distinguishingFeatures:
          "Speculum examination identifies a visible cervical or vaginal lesion as the bleeding source. Normal placental location and normal FHR tracing help exclude placenta previa and abruption. Cervical cancer can present with third-trimester bleeding — any friable, bleeding mass on the cervix requires biopsy regardless of gestational age.",
        workUp: "Speculum examination, Pap smear if not recently done, colposcopy with biopsy of suspicious lesion (safe in pregnancy), GC/chlamydia testing if cervicitis suspected, ultrasound to confirm placental location",
        treatment: "Cervical polyp: usually observed in pregnancy (defer removal unless bleeding is severe); cervicitis: treat infection; cervical cancer in pregnancy: multidisciplinary oncology and MFM consultation for staging, gestational age-specific management, and delivery planning",
      },
    ],
    clinicalPearl:
      "The most critical decision in third-trimester bleeding is distinguishing between placenta previa and abruption — the management differs fundamentally. The initial evaluation must include continuous fetal monitoring, IV access, blood type and crossmatch, and ultrasound. Digital vaginal exam is ALWAYS contraindicated until placenta previa is excluded by imaging. A patient with vasa previa who has painless third-trimester bleeding and a sinusoidal FHR pattern needs emergency cesarean within minutes — not a workup.",
    boardRecallTip:
      "Previa: painless + soft uterus + NO digital exam (can cause catastrophic hemorrhage) + C-section. Abruption: painful + rigid uterus + DIC risk + Kleihauer-Betke for fetal cells. Vasa previa: fetal blood loss → sinusoidal FHR → emergency C-section (Apt test distinguishes fetal from maternal blood). Bloody show = normal mucoid blood-tinged discharge near term.",
  },
  {
    id: "wh-diff-003",
    rotation: "womens-health",
    chiefComplaint: "Pelvic Pain in Women",
    diagnoses: [
      {
        name: "Endometriosis",
        likelihood: "Affects 10% of reproductive-age women; found in 30–50% of infertile women",
        keyFeatures: [
          "Cyclic dysmenorrhea (pain beginning 1–2 days before menstruation, worsening during menses) — classic presentation",
          "Deep dyspareunia (pain with deep penetration during intercourse)",
          "Dyschezia (painful defecation, especially during menses) — suggests posterior cul-de-sac and rectovaginal involvement",
          "Dysuria or hematuria with menses (bladder involvement)",
          "Infertility (30–50% of endometriosis patients)",
          "Chronic pelvic pain (non-cyclic component often present in advanced disease)",
          "Physical exam: fixed retroverted uterus, nodularity on uterosacral ligaments (rectovaginal exam), adnexal tenderness or mass (endometrioma), pain worse at pre-menstrual exam",
        ],
        distinguishingFeatures:
          "Cyclic pelvic pain and deep dyspareunia are the hallmark symptoms. Gold standard diagnosis is LAPAROSCOPY with direct visualization and biopsy of endometrial implants (ectopic endometrial glands and stroma outside the uterus). Endometriomas on ultrasound ('ground-glass' homogeneous low-level echoes) support the diagnosis but are not present in all cases. CA-125 may be mildly elevated but is non-specific.",
        workUp: "Pelvic ultrasound (identify endometrioma), MRI pelvis (best for mapping extent of disease, particularly deep infiltrating endometriosis), laparoscopy with biopsy (gold standard), CA-125 (non-specific but may help with monitoring), HSG or sonohysterogram if infertility evaluation",
        treatment: "Pain management: NSAIDs as first-line analgesics; hormonal suppression: combined OCP (cyclic or continuous), progestins (norethindrone acetate, DMPA), GnRH agonists (leuprolide + add-back therapy), GnRH antagonists (elagolix); surgical: laparoscopic excision/ablation of implants + endometrioma cystectomy; definitive: hysterectomy ± bilateral oophorectomy for women who have completed childbearing; surgical excision preferred over ablation for deep infiltrating disease",
      },
      {
        name: "Ovarian Torsion",
        likelihood: "Less common but surgical emergency; accounts for 3% of gynecologic emergencies; most common in reproductive age women and children",
        keyFeatures: [
          "Sudden onset unilateral pelvic/adnexal pain (acute, severe — 'worst pain of life')",
          "Often associated with nausea and vomiting",
          "Adnexal mass (predisposing factor — ovary > 5 cm is significant risk factor; most common associated pathology is mature cystic teratoma)",
          "Physical exam: tender adnexal mass, peritoneal signs in advanced cases",
          "Fever and leukocytosis are late findings (suggest necrosis)",
          "Right-sided more common than left (sigmoid colon protects left side)",
        ],
        distinguishingFeatures:
          "Sudden onset severe unilateral pain with nausea is the classic presentation. The critical pearl: DOPPLER FLOW CAN BE PRESENT IN OVARIAN TORSION — the presence of blood flow on Doppler does not exclude torsion (intermittent torsion, partial torsion). Clinical suspicion warrants surgical evaluation regardless of Doppler findings. Delay in diagnosis increases risk of ovarian necrosis and loss of the ovary.",
        workUp: "Transvaginal ultrasound with Doppler (enlarged edematous ovary, absent or reduced flow — but flow may be present), β-hCG (exclude ectopic), CBC, BMP; CT scan may show enlarged ovary with 'whirlpool sign' (twisted vascular pedicle) but is not required if clinical suspicion is high — proceed to surgery",
        treatment: "Surgical emergency — diagnostic laparoscopy with detorsion (untwist the pedicle) regardless of ovarian appearance; oophoropexy (fixation of the ovary or ovarian ligament) to prevent recurrence in the same or contralateral ovary; ovarian cystectomy at time of detorsion if pathologic cyst; oophorectomy only if ovary is clearly necrotic (black, non-perfused after detorsion — rare); detorse first, allow 5–10 minutes for reperfusion before deciding on oophorectomy",
      },
      {
        name: "Ectopic Pregnancy",
        likelihood: "Must always be excluded in reproductive-age women with pelvic pain and positive pregnancy test",
        keyFeatures: [
          "Unilateral pelvic/adnexal pain (can be bilateral or diffuse if hemoperitoneum)",
          "Amenorrhea (missed period) followed by irregular vaginal spotting or bleeding",
          "Positive pregnancy test",
          "Adnexal mass or tenderness on exam",
          "Hemodynamic instability, shoulder pain (referred diaphragmatic irritation from hemoperitoneum), peritoneal signs if ruptured",
        ],
        distinguishingFeatures:
          "Always perform a pregnancy test first in any reproductive-age woman with pelvic pain — a positive result fundamentally changes the differential and evaluation. Ectopic is distinguished from other causes of pelvic pain by the combination of a positive β-hCG, no IUP on TVUS, and adnexal pathology. Shoulder tip pain indicates hemoperitoneum (blood under the diaphragm) — ruptured ectopic with internal hemorrhage.",
        workUp: "Quantitative β-hCG + transvaginal ultrasound (essential combination), CBC, type and crossmatch, BMP; serial β-hCG if inconclusive",
        treatment: "Ruptured or hemodynamically unstable: immediate surgical intervention (laparoscopy preferred, laparotomy if unstable); stable and unruptured: MTX 50 mg/m² IM (if criteria met) vs surgical management (patient preference, contraindications to MTX, failed medical management); RhoGAM for Rh-negative patients",
      },
      {
        name: "Pelvic Inflammatory Disease / Tubo-Ovarian Abscess",
        likelihood: "PID: 750,000+ cases annually in the US; TOA occurs in 15–30% of women hospitalized with PID",
        keyFeatures: [
          "Bilateral pelvic pain (often subacute — days of worsening pain, not sudden)",
          "Vaginal discharge (mucopurulent)",
          "Fever (temperature ≥ 38.3°C in more severe cases)",
          "Cervical motion tenderness, uterine tenderness, adnexal tenderness (CDC minimum criteria)",
          "Risk factors: sexually active, multiple partners, prior PID, IUD insertion in setting of unrecognized STI",
          "TOA: palpable adnexal mass, may not respond to outpatient therapy, risk of rupture (surgical emergency with peritonitis)",
        ],
        distinguishingFeatures:
          "BILATERAL pelvic tenderness with mucopurulent cervical discharge and a history of unprotected intercourse distinguishes PID from most other causes of pelvic pain. The CDC minimum criteria (CMT OR uterine tenderness OR adnexal tenderness) are intentionally broad — treat empirically if any one is present without another explanation. TOA requires inpatient IV antibiotics (clindamycin + gentamicin) and ultrasound-guided drainage if no improvement in 72 hours.",
        workUp: "NAAT for GC/chlamydia, pelvic ultrasound (identify TOA), CBC (leukocytosis), CRP/ESR, pregnancy test (exclude ectopic, rule out intrauterine contraindication to doxycycline dose adjustment), HIV testing",
        treatment: "Outpatient: ceftriaxone 500 mg IM × 1 + doxycycline 100 mg PO BID × 14 days + metronidazole 500 mg PO BID × 14 days; Inpatient indications: TOA, pregnancy, severe illness, unable to tolerate oral meds, failed outpatient therapy, surgical emergency not excluded; Inpatient IV: clindamycin 900 mg IV q8h + gentamicin 2 mg/kg load then 1.5 mg/kg q8h (or single daily dosing); TOA drainage: interventional radiology-guided transvaginal or transabdominal aspiration if no improvement in 72h; ruptured TOA: emergent surgical drainage",
      },
      {
        name: "Uterine Fibroids (Symptomatic Leiomyomata)",
        likelihood: "Present in 20–40% of reproductive-age women; symptomatic in 25–50%",
        keyFeatures: [
          "Bulk symptoms: pelvic pressure/heaviness, urinary frequency/urgency (fibroid compressing bladder), constipation, bloating",
          "Dysmenorrhea (painful periods) and menorrhagia (heavy periods) — most prominent with submucosal fibroids",
          "Enlarged, irregular, firm ('lumpy-bumpy') uterus on bimanual exam",
          "Fibroid pain: acute pain from degeneration (red degeneration in pregnancy — fever, localized uterine tenderness), torsion of pedunculated fibroid, or submucosal fibroid cramping during expulsion",
          "Infertility (particularly submucosal fibroids distorting the cavity)",
        ],
        distinguishingFeatures:
          "Fibroids are distinguished by the combination of a markedly enlarged, irregular uterus, menorrhagia, and bulk symptoms. Acute pain from fibroid degeneration can mimic appendicitis or ovarian pathology — ultrasound and MRI identify the fibroids and exclude other pathology. Fibroids are estrogen-dependent and increase in size during pregnancy (particularly in the first and second trimesters) and shrink after menopause.",
        workUp: "Pelvic ultrasound (transabdominal + transvaginal for mapping), MRI pelvis (best for detailed fibroid mapping before myomectomy or UAE), sonohysterogram or hysteroscopy (assess endometrial cavity distortion for submucosal fibroids), CBC (iron-deficiency anemia from menorrhagia), endometrial biopsy if abnormal bleeding and age ≥ 35 or risk factors for endometrial cancer",
        treatment: "Medical: NSAIDs (dysmenorrhea), hormonal suppression with COCPs/progestins/LNG-IUD (menorrhagia), GnRH agonists (pre-operative shrinkage), tranexamic acid (menorrhagia); Surgical: hysteroscopic myomectomy (submucosal), laparoscopic or open myomectomy (intramural/subserosal — fertility-preserving), hysterectomy (definitive, for completed childbearing); Minimally invasive: uterine artery embolization (UAE — effective for menorrhagia and bulk symptoms, not for women desiring future fertility), radiofrequency ablation (Acessa — laparoscopic), MRI-guided focused ultrasound (FUS)",
      },
    ],
    clinicalPearl:
      "In any woman of reproductive age presenting with acute pelvic pain, three diagnoses must always be actively excluded before concluding the etiology: ectopic pregnancy (obtain β-hCG), ovarian torsion (obtain ultrasound), and appendicitis (right lower quadrant pain, Rovsing's sign, fever). Ovarian torsion is the most commonly missed diagnosis in women with pelvic pain — never exclude it based on the presence of Doppler flow alone. Endometriosis is the most common missed diagnosis in women with chronic pelvic pain — average delay from symptoms to diagnosis is 7–10 years.",
    boardRecallTip:
      "Cyclic dysmenorrhea + dyspareunia + dyschezia = endometriosis (gold standard = laparoscopy with biopsy). Sudden severe unilateral pain + nausea + adnexal mass = torsion (Doppler flow can be present — operate anyway). TOA = IV clindamycin + gentamicin. Always get β-hCG first. Fibroids: submucosal = most symptomatic (bleeding); treat with hysteroscopic myomectomy.",
  },
  {
    id: "wh-diff-004",
    rotation: "womens-health",
    chiefComplaint: "Abnormal Uterine Bleeding (AUB) — PALM-COEIN Classification",
    diagnoses: [
      {
        name: "Structural Causes: Polyp (PALM-P)",
        likelihood: "Endometrial polyps found in 10–24% of women with AUB; more common with age and tamoxifen use",
        keyFeatures: [
          "Intermenstrual spotting or bleeding (most common symptom)",
          "Post-coital bleeding",
          "Heavy menstrual bleeding (especially with large polyps)",
          "May be asymptomatic (incidental finding on ultrasound or hysteroscopy)",
          "Polyp visible at cervical os on speculum exam (cervical polyp) or within the endometrial cavity on sonohysterogram/hysteroscopy",
          "Risk factors: obesity, tamoxifen use, unopposed estrogen, PCOS",
        ],
        distinguishingFeatures:
          "Endometrial polyps are best identified on transvaginal ultrasound (echogenic endometrial filling defect, often with vascular pedicle on Doppler) or saline infusion sonohysterography (SIS — most sensitive for intrauterine polyps vs submucosal fibroids). Hysteroscopy is gold standard for visualization and simultaneous polypectomy. Postmenopausal polyps carry higher risk of malignancy (1–5%) than premenopausal polyps (< 1%).",
        workUp: "Transvaginal ultrasound, saline infusion sonohysterography (SIS), office hysteroscopy, endometrial biopsy (if > 45 or risk factors for endometrial cancer), pathologic examination of all removed tissue",
        treatment: "Hysteroscopic polypectomy (definitive — resect and submit for pathology); conservative management with observation for asymptomatic premenopausal polyps ≤ 1 cm (10–25% spontaneous regression); LNG-IUD to prevent recurrence in patients with multiple polyps",
      },
      {
        name: "Structural Causes: Adenomyosis (PALM-A)",
        likelihood: "Found in approximately 20–30% of uteri; most common in multiparous women in their 40s",
        keyFeatures: [
          "Heavy menstrual bleeding (menorrhagia) — quantified as > 80 mL per cycle",
          "Severe dysmenorrhea (often more constant, earlier onset than endometriosis)",
          "Uniformly enlarged, 'globular', tender uterus ('bulky uterus') on bimanual exam",
          "Uterus is boggy and soft (in contrast to fibroids which are firm)",
          "Association with endometriosis (overlapping condition in many patients)",
          "Symptoms worsen over time and resolve after menopause",
        ],
        distinguishingFeatures:
          "MRI is the gold standard imaging modality for adenomyosis: junctional zone thickness ≥ 12 mm (inner myometrium), myometrial heterogeneity, myometrial cysts, ill-defined endometrial-myometrial interface. Transvaginal ultrasound may show globular uterus, heterogeneous myometrium, myometrial cysts, or asymmetric anterior/posterior wall thickness ('venetian blind' shadowing). Definitive histologic diagnosis requires hysterectomy (endometrial glands and stroma within the myometrium > 2.5 mm from the endometrial-myometrial junction).",
        workUp: "Pelvic ultrasound (TVUS), MRI pelvis (gold standard imaging — junctional zone ≥ 12 mm), endometrial biopsy (to exclude endometrial hyperplasia/cancer), CBC (anemia), TSH (exclude hypothyroidism as cause of menorrhagia), coagulation studies",
        treatment: "Medical: LNG-IUD (Mirena — most effective non-surgical treatment, reduces menorrhagia 80–90%), COCPs, GnRH agonists (temporary suppression, not long-term), NSAIDs (dysmenorrhea), tranexamic acid (acute heavy bleeding); Surgical: hysterectomy (definitive — only cure); uterine artery embolization (UAE — effective for some patients, but outcomes less favorable than for fibroids); endometrial ablation (effective for menorrhagia if fertility not desired, but failure rates higher with adenomyosis)",
      },
      {
        name: "Structural Causes: Leiomyoma (PALM-L)",
        likelihood: "Most common benign uterine tumor; present in 70–80% of women by age 50; symptomatic in 25–50%",
        keyFeatures: [
          "Heavy menstrual bleeding (menorrhagia) — most prominent with submucosal fibroids",
          "Pelvic pressure and bulk symptoms (urinary frequency, constipation, bloating)",
          "Irregular, firm, enlarged uterus on bimanual exam",
          "Dysmenorrhea",
          "Submucosal fibroids (FIGO type 0–2): most likely to cause AUB",
          "Intramural fibroids (FIGO type 3–4): cause menorrhagia if large or near cavity",
          "Subserosal fibroids (FIGO type 5–7): bulk symptoms predominantly",
        ],
        distinguishingFeatures:
          "Submucosal fibroids cause the most significant AUB and are best assessed by saline infusion sonohysterography (SIS) or hysteroscopy. The FIGO leiomyoma subclassification system (0–8) documents the relationship of each fibroid to the endometrial cavity and guides treatment selection. MRI is optimal for comprehensive mapping before myomectomy or UAE.",
        workUp: "Pelvic ultrasound (TVUS), SIS or hysteroscopy (submucosal evaluation), MRI (pre-surgical mapping), endometrial biopsy if ≥ 45 or risk factors, CBC",
        treatment: "See Fibroid Pelvic Pain differential above; hormonal options, surgical myomectomy (hysteroscopic for submucosal), UAE, hysterectomy; FIGO type 0–1 submucosal = hysteroscopic myomectomy",
      },
      {
        name: "Structural Causes: Malignancy and Endometrial Hyperplasia (PALM-M)",
        likelihood: "Endometrial cancer most common gynecologic malignancy in the US; 65,950 new cases in 2022; most are postmenopausal",
        keyFeatures: [
          "POSTMENOPAUSAL BLEEDING — cancer until proven otherwise; 5–10% of postmenopausal bleeding is due to endometrial cancer",
          "Abnormal uterine bleeding in premenopausal women with risk factors (obesity, PCOS, chronic anovulation, estrogen-only HRT, tamoxifen, Lynch syndrome, PCOS, nulliparity, diabetes)",
          "Thickened endometrium on TVUS (postmenopausal: endometrial thickness ≥ 4–5 mm warrants biopsy)",
          "Abnormal cells on endometrial biopsy or pipelle sampling",
          "Endometrial hyperplasia without atypia: low risk (1–3%) of progression to cancer; hyperplasia WITH atypia (endometrial intraepithelial neoplasia): 25–33% concurrent carcinoma risk",
        ],
        distinguishingFeatures:
          "POSTMENOPAUSAL BLEEDING always requires endometrial biopsy to exclude malignancy — this is the highest-yield board and clinical pearl. In premenopausal women, risk factors for endometrial hyperplasia/cancer include obesity (BMI > 30 — adipose converts androgens to estrogen, causing unopposed estrogen exposure), PCOS, anovulation, tamoxifen, and estrogen-only HRT without progestin. Lynch syndrome (hereditary non-polyposis colorectal cancer) — lifetime endometrial cancer risk 40–60%.",
        workUp: "Transvaginal ultrasound (endometrial thickness), endometrial biopsy (pipelle — 95% sensitivity for endometrial cancer in postmenopausal women with appropriate sampling), hysteroscopy with directed biopsy if pipelle sampling insufficient or inadequate specimen, MRI for staging if cancer diagnosed (parametrial invasion, lymph node assessment), CA-125 if endometrial cancer confirmed",
        treatment: "Hyperplasia without atypia: progestin therapy (oral medroxyprogesterone acetate or LNG-IUD); follow-up biopsy at 3–6 months; hyperplasia with atypia: hysterectomy (preferred) or LNG-IUD + weight loss if fertility desired (close surveillance required — 25% harboring concurrent cancer); Endometrial cancer: total hysterectomy + bilateral salpingo-oophorectomy + surgical staging (pelvic and para-aortic lymph node sampling in selected cases); adjuvant radiation or chemotherapy based on staging",
      },
      {
        name: "Non-Structural Causes: Ovulatory Dysfunction (COEIN-O)",
        likelihood: "PCOS is the most common cause of anovulatory AUB in reproductive-age women; affects 6–12% of women",
        keyFeatures: [
          "Irregular menstrual cycles (oligomenorrhea — cycles > 35 days; or amenorrhea — no period for > 90 days)",
          "Unpredictable bleeding with variable cycle length",
          "PCOS features: hyperandrogenism (hirsutism, acne, alopecia), polycystic ovarian morphology on US, oligo/anovulation",
          "Endocrine causes: hypothyroidism (check TSH), hyperprolactinemia (check prolactin — galactorrhea, headache), hypothalamic amenorrhea (low weight, excessive exercise, stress), perimenopause (FSH elevation, irregular cycles in women > 40)",
          "No structural uterine pathology",
        ],
        distinguishingFeatures:
          "PCOS diagnosis by Rotterdam criteria requires 2 of 3: (1) oligo/anovulation, (2) clinical or biochemical hyperandrogenism, (3) polycystic ovarian morphology on US — other causes must be excluded (thyroid disease, hyperprolactinemia, congenital adrenal hyperplasia [17-OH progesterone], Cushing's syndrome). TSH and prolactin should be checked in all patients with menstrual irregularity before diagnosing PCOS.",
        workUp: "TSH, prolactin, LH, FSH (elevated LH:FSH ratio in PCOS), free and total testosterone, DHEA-S, 17-OH progesterone (to exclude non-classic CAH), TVUS, fasting glucose and insulin, lipid panel (metabolic syndrome), pregnancy test",
        treatment: "PCOS with AUB and no desire for fertility: combined OCP (first-line — regulates cycles, reduces androgen levels, protects endometrium from unopposed estrogen); progestin-only (norethindrone, medroxyprogesterone acetate) or LNG-IUD if OCP contraindicated; metformin (improves insulin sensitivity, may restore ovulation, first-line for metabolic manifestations); lifestyle modification (weight loss 5–10% can restore ovulation in obese PCOS); PCOS with desire for fertility: clomiphene citrate (first-line ovulation induction), letrozole (superior to clomiphene in obese PCOS — higher live birth rate), gonadotropins, IVF",
      },
      {
        name: "Non-Structural Causes: Coagulopathy (COEIN-C)",
        likelihood: "Found in up to 20% of women with heavy menstrual bleeding (HMB); von Willebrand disease most common — affects 1% of the population",
        keyFeatures: [
          "Heavy menstrual bleeding from menarche (onset of periods immediately heavy — suggests underlying coagulation disorder)",
          "Personal or family history of bleeding disorders",
          "Other bleeding manifestations: easy bruising, prolonged bleeding after dental procedures, epistaxis, postpartum hemorrhage",
          "von Willebrand disease: most common hereditary bleeding disorder causing menorrhagia; classified as Type 1 (partial quantitative deficiency — most common, 75%), Type 2 (qualitative defect — multiple subtypes), Type 3 (severe quantitative deficiency — rare)",
          "Other causes: platelet function disorders (Glanzmann's thrombasthenia, Bernard-Soulier), thrombocytopenia (ITP, aplastic anemia), hemophilia carrier females",
        ],
        distinguishingFeatures:
          "Heavy menstrual bleeding since menarche or a personal/family history of bleeding should prompt coagulation evaluation before assuming a structural cause. PFA-100 (platelet function analyzer) is a good screening test for von Willebrand disease and platelet function disorders (more sensitive than bleeding time). VWF antigen, VWF activity (ristocetin cofactor), and Factor VIII activity are the definitive tests for VWD — note that levels fluctuate with estrogen (OCPs increase VWF levels) and should be drawn at a standardized time, not during menses or if the patient is on hormonal therapy.",
        workUp: "CBC (platelet count), PT/PTT, fibrinogen, VWF antigen, VWF activity (ristocetin cofactor assay), Factor VIII activity, PFA-100, thrombin time; hematology consultation for abnormal results; consider liver function tests (cirrhosis causes coagulopathy); screen for hypothyroidism (severe hypothyroidism can cause platelet dysfunction)",
        treatment: "Von Willebrand disease: DDAVP (desmopressin) intranasal or IV — releases stored VWF and Factor VIII from endothelial cells (effective for Type 1, not Type 3); VWF concentrate/factor replacement for surgery or severe bleeding; tranexamic acid (antifibrinolytic) for menorrhagia; combined OCP (increases VWF levels by stimulating hepatic synthesis); LNG-IUD (reduces menstrual blood loss regardless of cause); hematology co-management essential",
      },
    ],
    clinicalPearl:
      "PALM-COEIN is the FIGO classification system for AUB — use it to structure your differential and workup. The most important clinical rule for postmenopausal bleeding: it is endometrial cancer until proven otherwise — order endometrial biopsy (pipelle) as the first step, not ultrasound alone. In reproductive-age women, always order TSH and prolactin before diagnosing PCOS, as these are common and treatable mimics of anovulatory AUB. For heavy menstrual bleeding at menarche, screen for VWD — up to 5–20% of adolescents with menorrhagia at menarche have an underlying coagulopathy.",
    boardRecallTip:
      "PALM = structural (Polyp, Adenomyosis, Leiomyoma, Malignancy). COEIN = non-structural (Coagulopathy, Ovulatory dysfunction, Endometrial, Iatrogenic, Not classified). Postmenopausal bleeding = endometrial biopsy (cancer until proven otherwise). PCOS = 2/3 Rotterdam criteria. VWD = most common hereditary bleeding disorder causing menorrhagia (PFA-100 screen; VWF antigen/activity for diagnosis). Adenomyosis: junctional zone ≥ 12 mm on MRI.",
  },
];
