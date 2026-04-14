// @ts-nocheck
import type { PhysicalExamFinding } from "@/types";

export const generalSurgeryPhysicalExam: PhysicalExamFinding[] = [
  {
    id: "gs-pe-acute-abdomen",
    name: "Acute Abdomen Assessment",
    system: "Abdominal",
    rotation: "general-surgery",
    technique: "Systematic exam: Inspection (distension, surgical scars, visible peristalsis, bruising — Cullen's/Grey Turner's), Auscultation BEFORE palpation (bowel sounds character and frequency), Percussion (tympany vs. dullness, peritoneal irritation with percussion tenderness), Palpation (begin in quadrant farthest from pain, progress to tender area; light then deep; assess voluntary guarding vs. involuntary rigidity). Check for specific signs: rebound tenderness (peritoneal irritation), Murphy's (cholecystitis), McBurney's (appendicitis), Rovsing's, psoas sign, obturator sign.",
    normalFinding: "Abdomen soft, non-tender, non-distended. Normoactive bowel sounds (5–35/min). Tympanic throughout. No guarding, rigidity, or rebound.",
    abnormalFindings: [
      "Voluntary guarding: patient consciously tenses abdomen when touched — reactive to anticipated pain. Persists even when distracted.",
      "Involuntary rigidity (board-like abdomen): reflex protective spasm of abdominal muscles from underlying peritoneal irritation — cannot be overcome even with distraction. Indicates peritonitis.",
      "Rebound tenderness (Blumberg's sign): pain on RELEASE of deep pressure is worse than pain on application — indicates peritoneal inflammation. Can also elicit by percussion or asking patient to cough.",
      "Absent bowel sounds: late SBO (complete obstruction, ileus), peritonitis. High-pitched tinkling/rushing sounds: early SBO (proximal bowel hypermotility).",
      "Distension: tympanic throughout = bowel obstruction or ileus (gas-filled loops). Dull flanks with tympanic central area = ascites (fluid shifts with position — shifting dullness).",
      "Cullen's sign: periumbilical bruising — retroperitoneal hemorrhage (hemorrhagic pancreatitis, ruptured ectopic pregnancy). Grey Turner's sign: flank bruising — same etiologies.",
      "Visible peristalsis: loops of distended bowel visible through abdominal wall — high-grade SBO or pyloric stenosis (gastric peristalsis)"
    ],
    associatedConditions: ["Appendicitis", "cholecystitis", "bowel obstruction", "perforated viscus", "pancreatitis", "aortic aneurysm rupture"],
    clinicalPearl: "Order of abdominal exam: Inspection → Auscultation → Percussion → Palpation. Auscultating before palpation prevents artificially stimulating bowel sounds. In a patient with peritonitis, asking the patient to 'bounce' on the exam table or asking them 'does the car ride make your pain worse?' (succussion/jarring test) is equally sensitive for peritoneal irritation without requiring painful rebound testing.",
    boardPearl: "Involuntary guarding (rigidity) = peritonitis = surgical emergency. Voluntary guarding = defensive response = may not be peritonitis. The distinction changes management dramatically."
  },
  {
    id: "gs-pe-appendicitis-signs",
    name: "Appendicitis Physical Exam Signs",
    system: "Abdominal",
    rotation: "general-surgery",
    technique: "McBurney's point: locate 1/3 of the way from the ASIS to the umbilicus (or 2/3 from umbilicus to ASIS) — this overlies the base of the appendix. Apply firm pressure. Rovsing's sign: press firmly in LLQ — positive if patient experiences pain in RLQ. Psoas sign: with patient in left lateral decubitus position, hyperextend the right thigh posteriorly (or raise right leg against resistance while supine) — positive if pain elicited in RLQ. Obturator sign: flex right hip to 90° with knee bent, then internally rotate the hip — positive if pain elicited in RLQ.",
    normalFinding: "No tenderness at McBurney's point. No referral of LLQ pressure to RLQ (Rovsing's negative). No pain with psoas or obturator maneuvers.",
    abnormalFindings: [
      "McBurney's point tenderness: maximum tenderness at the point 1/3 of the way from ASIS to umbilicus = inflamed appendix base (sensitivity 50–94%, specificity 75%)",
      "Rovsing's sign positive: compression of descending colon stretches the peritoneum, transmitting pain to the inflamed appendix in RLQ",
      "Psoas sign positive: appendix lies on the iliopsoas muscle — retrocecal appendix lies directly on psoas. Extension of the hip tenses the psoas against the inflamed appendix, eliciting pain.",
      "Obturator sign positive: pelvic appendix lies adjacent to the obturator internus muscle. Internal rotation of the flexed hip tenses the obturator against the inflamed pelvic appendix.",
      "Dunphy's sign: sharp pain in RLQ with coughing — indicates peritoneal irritation from appendicitis"
    ],
    associatedConditions: ["Acute appendicitis", "Pelvic appendicitis", "Retrocecal appendicitis"],
    clinicalPearl: "Psoas sign = retrocecal appendix (most common anatomic variant — 65% of appendixes are retrocecal). Obturator sign = pelvic appendix. These positional signs help predict appendix location and guide laparoscopic search. In pregnancy: appendix displaced superiorly by the gravid uterus — pain may be periumbilical or RUQ rather than RLQ, leading to diagnostic delay.",
    boardPearl: "Alvarado score: Migration to RLQ (1) + Anorexia (1) + Nausea/vomiting (1) + RLQ Tenderness (2) + Rebound (1) + Elevated Temp (1) + Leukocytosis (2) + Shift to left (1) = max 10. Score ≥7 = high suspicion → operate. Score ≤4 = low probability → discharge or observe."
  },
  {
    id: "gs-pe-hernia-exam",
    name: "Hernia Examination — Inguinal, Femoral, Umbilical",
    system: "Abdominal / Musculoskeletal",
    rotation: "general-surgery",
    technique: "Inguinal hernia: examine with patient STANDING and during VALSALVA (cough or strain). Inspect for bulge in inguinal region. Invaginate the scrotum with index finger, slide finger up the spermatic cord to the external inguinal ring. Ask patient to cough or bear down — feel for a mass against the fingertip (direct hernia — hits tip of finger) vs. against the side of the finger (indirect hernia — comes from the internal ring laterally). Femoral hernia: inspect and palpate BELOW the inguinal ligament, medial to the femoral pulse. Often small and easily missed. Umbilical hernia: examine the umbilicus with patient standing and during Valsalva.",
    normalFinding: "No palpable defect or hernia bulge at inguinal canal, femoral canal, or umbilicus. No reducible or non-reducible mass. External inguinal ring admits a fingertip only.",
    abnormalFindings: [
      "Reducible hernia: soft bulge that spontaneously or manually reduces when patient lies supine (gravity) — bowel returns to abdominal cavity",
      "Incarcerated hernia: hernia content cannot be reduced — fixed in hernia sac. Tender, firm bulge. No strangulation yet but at risk.",
      "Strangulated hernia: blood supply to hernia content is compromised — extremely painful, erythematous, warm overlying skin, systemically ill (tachycardia, fever). Surgical EMERGENCY.",
      "Direct inguinal hernia: bulge at medial inguinal canal (Hesselbach's triangle), pushes directly forward through floor weakness. Impulse felt at tip of invaginated finger.",
      "Indirect inguinal hernia: travels from internal inguinal ring through the inguinal canal, may descend into the scrotum. Impulse felt at side of invaginated finger as hernia comes through from lateral.",
      "Femoral hernia: bulge BELOW inguinal ligament, medial to femoral vein. Often small, easily missed, higher risk of strangulation due to small neck. More common in women."
    ],
    associatedConditions: ["Inguinal hernia", "femoral hernia", "umbilical hernia", "incisional hernia", "SBO from hernia incarceration"],
    clinicalPearl: "Femoral hernias have the highest risk of strangulation of all groin hernias — due to the rigid femoral ring (bounded by inguinal ligament, lacunar ligament, femoral vein, and Cooper's ligament). Any groin mass below the inguinal ligament in a woman should be considered a femoral hernia until proven otherwise. Femoral hernia: always repair promptly.",
    boardPearl: "Direct hernia: through Hesselbach's triangle (medial to inferior epigastric vessels). Indirect: through internal inguinal ring (lateral to epigastric vessels). Femoral: through femoral canal (below inguinal ligament). Richter's hernia: only the anti-mesenteric wall of the bowel is incarcerated — can strangulate without bowel obstruction. Amyand's hernia: appendix in hernia sac."
  },
  {
    id: "gs-pe-wound-assessment",
    name: "Post-Operative Wound Assessment",
    system: "Integumentary / Surgical",
    rotation: "general-surgery",
    technique: "Inspect and document: Location (incision site, drain sites), Size (length, depth if open), EDGES (approximated vs. dehisced), EXUDATE (character: serosanguinous normal, purulent = infection, serous = seroma), SURROUNDING SKIN (erythema, warmth, induration, blistering, crepitus), BASE (granulation tissue = healthy healing; eschar = necrotic; slough = fibrin). Use PUSH tool or BWAT score for pressure injuries. Assess drain output if drains in place.",
    normalFinding: "Post-op day 1–2: stapled/sutured incision with mild erythema at wound edges (normal inflammatory response), no purulent drainage, no dehiscence. Post-op day 3–7: wound edges well-approximated, staples or sutures intact, minimal serosanguinous drainage acceptable, no expanding erythema.",
    abnormalFindings: [
      "Purulent drainage: cloudy, yellow-green, foul-smelling = infection. Obtain wound culture (aspirate or deep swab of abscess — not surface swab). Open the wound, irrigate, pack open to heal by secondary intention.",
      "Wound dehiscence: superficial (skin only) — secondary intention healing. Deep (fascial layer) — evisceration risk; cover with saline-moistened sterile gauze and return to OR for emergent re-closure.",
      "Evisceration: bowel exposed through wound — SURGICAL EMERGENCY. Sterile saline-soaked gauze over bowel, do NOT push back into abdomen, immediate return to OR.",
      "Hematoma: blood-filled collection under wound — dark blue-red discoloration, fluctuant. May need surgical drainage if expanding or infected.",
      "Seroma: clear-yellow fluid collection under wound (common after mastectomy, axillary dissection, inguinal herniorrhaphy). If tense or symptomatic: aspirate with 18-gauge needle under sterile technique.",
      "Crepitus: palpable gas tracking through wound — IMMEDIATE concern for necrotizing fasciitis or gas-forming infection (Clostridium, polymicrobial). Urgent surgical exploration.",
      "Wound infection signs: expanding erythema, warmth, induration, purulence. Periwound skin: satellite lesions, lymphangitic streaking (red lines tracking toward lymph nodes = ascending lymphangitis)"
    ],
    associatedConditions: ["Surgical site infection", "wound dehiscence", "necrotizing fasciitis", "seroma", "hematoma"],
    clinicalPearl: "Wound healing assessment milestones: Epithelialization complete by day 5. Tensile strength 20% of normal at 3 weeks, 50% at 6 weeks, maximum 70–80% of normal at 6–12 months — wounds never regain full strength. Factors that impair wound healing: diabetes (hyperglycemia impairs neutrophil function), steroids (impair collagen synthesis), malnutrition (zinc and vitamin C deficiency), radiation (obliterative endarteritis reduces vascularity), infection.",
    boardPearl: "Necrotizing fasciitis hallmarks: severe disproportionate pain early → paradoxical hypesthesia later (nerve death), skin discoloration (gray/blue → bullae → necrosis), crepitus, LRINEC score >6 (Lab Risk Indicator for Necrotizing Fasciitis: CRP, WBC, Hgb, Na, Cr, glucose). Treatment: broad-spectrum antibiotics + IMMEDIATE surgical debridement. Mortality 20–40% even with treatment."
  },
  {
    id: "gs-pe-breast-exam",
    name: "Clinical Breast Examination (CBE)",
    system: "Breast",
    rotation: "general-surgery",
    technique: "Inspection: patient seated with arms at sides, then hands on hips (contracts pectoralis), then arms raised overhead. Look for: asymmetry, skin dimpling or retraction, nipple inversion, peau d'orange, erythema, visible mass. Palpation: patient supine, ipsilateral hand behind head (flattens breast against chest wall). Use the pads of the middle three fingers, overlapping circular movements. Cover all tissue systematically (vertical strip method — up-and-down pattern from clavicle to IMF). Include axillary tail of Spence and areolar region. Axillary exam: support patient's arm at elbow to relax pectoral muscles, palpate four axillary node groups (central, pectoral, lateral, subscapular).",
    normalFinding: "Breasts symmetric without dimpling, retraction, or peau d'orange. No palpable masses. Nipples everted bilaterally. No nipple discharge (unless lactating). Axillary nodes not palpable or small, soft, mobile.",
    abnormalFindings: [
      "Palpable breast mass: Benign features — mobile, smooth, regular borders, soft/rubbery, non-tender. Malignant features — hard, irregular, fixed to skin/chest wall, non-tender, associated lymphadenopathy.",
      "Skin dimpling or retraction: Cooper's ligament invasion by tumor — often a late sign. Pathognomonic for malignancy when unilateral and new.",
      "Peau d'orange: diffuse skin edema from lymphatic obstruction by tumor. Associated with inflammatory breast cancer or advanced malignancy.",
      "Nipple discharge: Unilateral, single-duct, spontaneous discharge (bloody or clear) → concerning for intraductal papilloma or DCIS. Bilateral, multi-duct, non-spontaneous → benign/hormonal.",
      "Nipple inversion (new): retraction from subareolar tumor or periareolar fibrous bands. New inversion (previously everted) = malignancy concern.",
      "Axillary lymphadenopathy: firm, matted, or fixed axillary nodes — possible breast cancer metastasis. Evaluate breast, axilla, and ipsilateral upper extremity.",
      "Paget's disease of nipple: erythematous, scaly, eczematous changes of the nipple-areolar complex — associated with underlying DCIS or invasive cancer (not eczema)"
    ],
    associatedConditions: ["Breast cancer", "fibroadenoma (most common benign mass in young women)", "fibrocystic changes", "mastitis", "galactocele", "Paget's disease"],
    clinicalPearl: "Fibroadenoma: smooth, mobile, rubbery, non-tender mass in young woman — 'breast mouse' (moves away from palpating fingers). Stable on sequential exams → can manage with US + follow-up. Growing or >2 cm → excise. Cyst: smooth, round, possibly tender, fluctuant — aspiration reveals green/yellow-green fluid (benign) or bloody fluid (send for cytology).",
    boardPearl: "Triple assessment for breast mass: (1) Clinical exam, (2) Imaging (mammogram ± ultrasound), (3) Tissue biopsy (core needle biopsy preferred — provides histology + receptor status). All three concordant benign = follow-up. Any discordance or one suspicious component = proceed to excisional biopsy."
  }
];
