// @ts-nocheck
import { Condition } from "@/types/seed";

export const pediatricsConditions: Condition[] = [
  {
    id: "peds-cond-asthma",
    rotation: "pediatrics",
    name: "Pediatric Asthma",
    overview:
      "Asthma is the most common chronic disease of childhood, affecting 8–10% of children in the United States. It is characterized by reversible airflow obstruction, airway hyperreactivity, and chronic eosinophilic airway inflammation. Triggers include viral respiratory infections (most common trigger in children), allergens, exercise, cold air, tobacco smoke, and air pollutants. Diagnosis is clinical in children < 5 years (spirometry unreliable); spirometry showing obstruction with bronchodilator reversibility (FEV₁ increase ≥ 12%) confirms diagnosis in school-age children and adolescents.",
    epidemiology:
      "Most common chronic disease in children. Prevalence 8–10% in the US. More common in males during childhood; equalizes by adolescence. Higher prevalence in Black and Puerto Rican children (healthcare disparities, environmental factors). Onset typically before age 5. Most children with early-onset wheezing are 'transient wheezers' — outgrow it by school age; true asthmatics persist into adulthood.",
    pathophysiology:
      "Type 2 (Th2) inflammatory response: allergen exposure → allergen-specific IgE bound to mast cells → cross-linking triggers degranulation → histamine, leukotrienes, prostaglandins cause bronchoconstriction. Chronic phase: eosinophil infiltration, goblet cell hyperplasia (mucus hypersecretion), smooth muscle hypertrophy, subepithelial fibrosis (airway remodeling). Result: airway narrowing → increased airway resistance → air trapping → hyperinflation → V/Q mismatch and hypoxemia.",
    presentation: [
      "Classic triad: episodic wheezing, cough (especially nocturnal or with exercise), and dyspnea",
      "Cough-variant asthma: chronic cough as the sole manifestation (especially in young children)",
      "Symptoms often worse at night (circadian changes in airway resistance)",
      "Exercise-induced bronchospasm: cough/wheeze beginning 5–10 minutes after exercise cessation",
      "Triggers: viral URI (most common — rhinovirus), allergen exposure, cold air, irritants, emotional stress",
      "Physical exam: expiratory wheezing, prolonged expiratory phase, use of accessory muscles, nasal polyps (rare in children — consider aspirin-exacerbated respiratory disease or cystic fibrosis)",
    ],
    diagnosis: [
      "Spirometry (≥ 5 years): FEV₁/FVC < 0.8 (lower limit of normal for children) + FEV₁ increase ≥ 12% after bronchodilator = reversible obstruction = asthma confirmed",
      "Peak expiratory flow (PEF): variability > 20% (AM vs PM, or before/after bronchodilator) supports diagnosis",
      "Methacholine challenge: if spirometry normal but asthma suspected — PC₂₀ ≤ 8 mg/mL = positive (bronchoconstriction at low dose = hyperreactive airways)",
      "Fractional exhaled nitric oxide (FeNO): > 35 ppb = eosinophilic airway inflammation (supports allergen-driven asthma, predicts steroid response)",
      "Allergy testing: skin prick testing or specific IgE for perennial allergens (dust mite, cat, dog, cockroach, mold)",
      "CXR: usually normal or shows hyperinflation (flattened diaphragms, increased AP diameter); primarily to exclude pneumonia or foreign body during exacerbation",
    ],
    management: [
      "STEP THERAPY (NAEPP EPR-4 Guidelines):",
      "Step 1 (intermittent, symptoms < 2 days/week): SABA (albuterol) PRN only",
      "Step 2 (mild persistent): low-dose ICS daily (fluticasone 88 mcg/day) + SABA PRN — ICS is the most effective long-term controller",
      "Step 3 (moderate persistent): medium-dose ICS OR low-dose ICS + LABA (in children ≥ 5 years) + SABA PRN",
      "Step 4 (severe persistent): medium-dose ICS + LABA + SABA PRN",
      "Step 5: high-dose ICS + LABA; consider omalizumab (anti-IgE) if allergic asthma; dupilumab (anti-IL-4/IL-13) for severe eosinophilic",
      "Step 6: high-dose ICS + LABA + oral corticosteroids (minimize due to systemic side effects)",
      "ACUTE EXACERBATION — 'Status Asthmaticus': Supplemental O₂ to maintain SpO₂ ≥ 94%. SABA (albuterol) via nebulizer or MDI with spacer q20 min × 3 doses. Systemic corticosteroids: prednisolone 1–2 mg/kg/day PO or methylprednisolone IV for severe exacerbations. Ipratropium bromide (anticholinergic) added in ED for severe exacerbation. Magnesium sulfate IV 25–75 mg/kg (max 2 g) for severe exacerbations unresponsive to initial therapy. Heliox (70% helium / 30% oxygen) for severe refractory bronchospasm — reduces turbulent flow.",
      "EDUCATION: Asthma action plan (green/yellow/red zones). Proper MDI + spacer technique. Trigger avoidance. Annual influenza vaccine.",
    ],
    complications: [
      "Status asthmaticus — severe exacerbation requiring hospitalization; risk of respiratory failure",
      "Respiratory failure requiring intubation (ICU admission — last resort; mechanical ventilation in asthma is hazardous due to dynamic hyperinflation)",
      "Pneumothorax or pneumomediastinum (air leak syndromes from air trapping)",
      "Atelectasis from mucus plugging",
      "Airway remodeling with long-term irreversible obstruction if undertreated",
      "Side effects of chronic corticosteroids (growth suppression — ICS at high doses; systemic steroids: weight gain, Cushingoid features, adrenal suppression)",
    ],
    clinicalPearl:
      "In children < 5 years, wheezing is common and most do NOT have true asthma. The Asthma Predictive Index (API): ≥ 3 wheezing episodes in a year + (1 major criterion: parental asthma or atopic dermatitis; OR 2 minor criteria: eosinophilia ≥ 4%, allergic rhinitis, wheezing without URI) = positive API → high likelihood of persistent asthma. Recurrent wheezing with positive API: treat empirically with low-dose ICS. In teenagers who smoke or have recurrent cough: always reconsider diagnosis — vocal cord dysfunction (VCD), GERD, and bronchiectasis mimic asthma.",
    boardRecallTip: "Step 2 = low-dose ICS (most important controller). SABA (albuterol) = rescue. Status asthmaticus: O₂ + SABA q20min + systemic steroids + ipratropium + Mg for severe. FeNO > 35 ppb = eosinophilic inflammation → ICS responsive.",
  },
  {
    id: "peds-cond-otitis-media",
    rotation: "pediatrics",
    name: "Acute Otitis Media (AOM)",
    overview:
      "Acute otitis media (AOM) is the most common bacterial infection in children and the most common reason for antibiotic prescriptions in pediatrics. It results from bacterial or viral infection of the middle ear space, usually preceded by an upper respiratory infection (URI) causing eustachian tube dysfunction. The peak age is 6–18 months. By age 3, 75% of children will have had at least one episode. The most common bacterial pathogens are Streptococcus pneumoniae, non-typeable Haemophilus influenzae (NTHi), and Moraxella catarrhalis.",
    epidemiology:
      "Most common bacterial infection in children. Peak age 6–18 months; rare after age 7. Risk factors: daycare attendance, bottle-feeding (versus breastfeeding), pacifier use, secondhand smoke exposure, male sex, Native American/Alaska Native heritage, cleft palate. 80% of cases caused by bacteria; 20% viral. Strep pneumo = most common cause of treatment failure (penicillin-resistant strains increasing). NTHi = most common cause after PCV13 vaccination introduced.",
    pathophysiology:
      "URI → eustachian tube edema/dysfunction → negative pressure in middle ear → effusion → bacterial colonization from nasopharynx. Eustachian tube in young children is shorter, more horizontal, and floppier than in adults — predisposing to reflux of nasopharyngeal secretions into middle ear space.",
    presentation: [
      "Classic triad: ear pain (otalgia), fever, ear pulling/tugging (infants — nonspecific sign)",
      "Infants: irritability, sleep disturbance, poor feeding, tugging at ear",
      "Older children: complaint of ear pain, decreased hearing, sensation of fullness",
      "Otoscopy — diagnostic criteria (must have ALL 3): (1) moderate-to-severe bulging of tympanic membrane (TM), or new-onset otorrhea not due to external otitis; OR mild bulging + recent acute ear pain or TM erythema; (2) middle ear effusion (decreased/absent light reflex, air-fluid level, opaque TM); (3) signs of middle ear inflammation (erythema, otalgia)",
      "Tympanometry: Type B curve (flat) = middle ear effusion",
      "Distinguish from otitis media with effusion (OME): effusion present without signs of acute infection — TM dull, immobile, but NO erythema or severe bulging",
    ],
    diagnosis: [
      "Clinical diagnosis — otoscopy is the key diagnostic tool: pneumatic otoscopy (TM mobility reduced by effusion) + visualization",
      "Tympanometry: Type B (flat) = effusion; Type A = normal; Type C = negative middle ear pressure",
      "Tympanocentesis (myringotomy): culture of middle ear fluid — reserved for treatment failure, immunocompromised, or serious systemic illness",
      "No imaging or labs required for uncomplicated AOM",
      "Consider culture if: treatment failure after 48–72 hours, recurrent AOM, tympanostomy tube otorrhea, immunocompromised host",
    ],
    management: [
      "WATCHFUL WAITING (observation option — appropriate for selected patients): Age ≥ 2 years with unilateral AOM without otorrhea + mild symptoms → observe without antibiotics for 48–72 hours. Provide safety-net prescription (fill if not improving). Pain management: ibuprofen or acetaminophen (topical benzocaine drops not recommended < 2 years).",
      "ANTIBIOTIC INDICATIONS (immediate treatment): Age < 6 months — all AOM; Age 6–23 months — bilateral AOM or severe symptoms; Any age — AOM with otorrhea or severe symptoms (T ≥ 39°C, severe otalgia).",
      "FIRST-LINE: Amoxicillin 80–90 mg/kg/day ÷ BID (high-dose to overcome intermediate Strep pneumo resistance) × 10 days (< 2 years) or 5–7 days (≥ 2 years without perforation).",
      "PENICILLIN ALLERGY (non-severe): Cefdinir 14 mg/kg/day, or cefuroxime, or cefpodoxime",
      "PENICILLIN ALLERGY (severe — anaphylaxis): Azithromycin (poor coverage for H. flu) or TMP-SMX (significant resistance). Consider ENT referral and tympanocentesis for culture.",
      "TREATMENT FAILURE (48–72 hours no improvement): Amoxicillin-clavulanate 90 mg/kg/day amoxicillin component (covers beta-lactamase-producing NTHi and Moraxella) × 10 days. OR IM ceftriaxone 50 mg/kg/day × 3 days.",
      "RECURRENT AOM (≥ 3 episodes in 6 months or ≥ 4 in 12 months): Refer to ENT for consideration of tympanostomy tube placement (PE tubes). Prophylactic antibiotics not routinely recommended.",
      "COMPLICATIONS requiring ENT: mastoiditis, facial nerve palsy, meningitis, intracranial abscess, labyrinthitis.",
    ],
    complications: [
      "Acute mastoiditis (most common suppurative complication) — fever, postauricular erythema/swelling, auricular protrusion → CT mastoids → IV antibiotics ± myringotomy ± mastoidectomy",
      "Tympanic membrane perforation (acute/chronic)",
      "Conductive hearing loss (with chronic effusion and OME)",
      "Cholesteatoma (from retraction pocket of TM — destructive, squamous epithelium-lined mass in middle ear)",
      "Facial nerve palsy (rare — urgent ENT referral)",
      "Meningitis, epidural abscess, sigmoid sinus thrombosis (rare intracranial complications)",
      "Speech and language delays in children with chronic conductive hearing loss",
    ],
    clinicalPearl:
      "PCV13 (13-valent pneumococcal conjugate vaccine) has dramatically reduced AOM due to vaccine-serotype Strep pneumo, shifting the predominant pathogen to non-typeable H. influenzae (which is NOT covered by the vaccine). Therefore, amoxicillin-clavulanate (which covers H. flu) is now used more often for treatment failures. The 'watchful waiting' approach for mild, unilateral AOM in children ≥ 2 years has equivalent outcomes to immediate antibiotics with a significant reduction in antibiotic use and resistance pressure.",
    boardRecallTip: "AOM diagnosis requires: TM bulging + effusion + acute inflammation. Treatment: amoxicillin 80–90 mg/kg/day. Failure at 48–72h → amoxicillin-clavulanate or IM ceftriaxone. Recurrent AOM (≥ 3 in 6 months) → ENT for PE tubes. Mastoiditis = most common complication.",
  },
  {
    id: "peds-cond-kawasaki",
    rotation: "pediatrics",
    name: "Kawasaki Disease",
    overview:
      "Kawasaki disease (KD) is an acute, self-limited vasculitis of medium-sized vessels that predominantly affects children under 5 years of age. It is the leading cause of acquired heart disease in children in the developed world. The etiology remains unknown, though an infectious trigger in a genetically susceptible host is hypothesized. The most serious complication is coronary artery aneurysm (CAA), which occurs in 15–25% of untreated children but decreases to 3–5% with IVIG + aspirin therapy.",
    epidemiology:
      "Annual incidence: 9–20 per 100,000 children < 5 years in the US (higher in Asian populations — Japan 200–300/100,000). Peak age: 6 months to 5 years. Male predominance (1.5:1). Seasonal clustering (winter-spring). Japanese and Korean descent at highest risk. Rare after age 8.",
    pathophysiology:
      "Unknown trigger (possibly respiratory virus) → immune activation → pro-inflammatory cytokines (IL-1, IL-6, TNF-α) → necrotizing arteritis of medium vessels → internal elastic lamina destruction → coronary artery dilation → aneurysm formation. Coronary aneurysms are most dangerous: thrombosis, stenosis, rupture, or myocardial infarction (even in childhood).",
    presentation: [
      "Prolonged fever ≥ 5 days — the cardinal criterion; high spiking fever, not responding to antipyretics",
      "Conjunctival injection (bilateral, non-purulent, limbic sparing) — 'red eyes without pus'",
      "Oral changes: strawberry tongue (red, swollen papillae), lip cracking/fissuring, pharyngeal erythema",
      "Rash: polymorphous — macular, maculopapular, or erythema multiforme-like; begins on trunk, spreads to extremities; NOT vesicular or bullous",
      "Extremity changes: erythema + induration of palms and soles (acute phase) → desquamation beginning at fingertips 2–3 weeks after fever onset (pathognomonic of the convalescent phase)",
      "Cervical lymphadenopathy: ≥ 1 node > 1.5 cm, typically unilateral, anterior cervical chain",
      "Classic criteria: fever ≥ 5 days + ≥ 4 of the 5 above findings (without another explanation)",
    ],
    diagnosis: [
      "Clinical diagnosis — no pathognomonic test",
      "Complete KD: fever ≥ 5 days + ≥ 4 of 5 criteria (conjunctivitis, rash, oral changes, extremity changes, cervical LAD)",
      "Incomplete KD: fever ≥ 5 days + 2–3 criteria — TREAT if supported by labs or echo. More common in infants < 6 months (highest aneurysm risk despite atypical presentation)",
      "Laboratory findings: elevated ESR, CRP, WBC (leukocytosis), normocytic anemia, thrombocytosis (≥ 450,000 in second week — 'classic' late finding), elevated transaminases, sterile pyuria, low albumin",
      "Echocardiography: baseline echo at diagnosis; repeat at 2 weeks and 6–8 weeks. Findings: coronary artery dilation (z-score > 2.5 standard deviations above mean), aneurysm (z-score ≥ 2.5 or absolute diameter > 4 mm; giant aneurysm ≥ 8 mm internal diameter)",
    ],
    management: [
      "ACUTE PHASE (within 10 days of fever onset — or beyond if still febrile):",
      "IVIG 2 g/kg IV as a single infusion over 10–12 hours — reduces CAA from 25% to 3–5%; must be given within day 10 of illness",
      "High-dose aspirin 80–100 mg/kg/day ÷ QID (anti-inflammatory) until afebrile for 48–72 hours, then switch to low-dose",
      "LOW-DOSE ASPIRIN: 3–5 mg/kg/day (antiplatelet dose) for 6–8 weeks from illness onset if no coronary involvement; indefinitely if CAA persists",
      "IVIG RESISTANCE (fever persists > 36 hours after IVIG): Second dose of IVIG 2 g/kg; OR infliximab (anti-TNF-α) — increasing evidence; OR methylprednisolone 30 mg/kg/day × 3 days (for refractory cases); cyclosporine for high-risk scoring (Japan Egami or Kobayashi score)",
      "CORONARY ANEURYSM MANAGEMENT: Giant aneurysm (≥ 8 mm or z-score ≥ 10) — anticoagulation with warfarin or LMWH + antiplatelet therapy; cardiology follow-up for life; risk of MI",
      "No live vaccines (varicella, MMR) for 11 months after IVIG (IVIG contains antibodies that impair vaccine immunogenicity)",
    ],
    complications: [
      "Coronary artery aneurysm (most feared): 15–25% without treatment; 3–5% with IVIG + aspirin. Giant aneurysm: risk of thrombosis, stenosis, MI",
      "Myocarditis (acute phase — common but usually subclinical)",
      "Pericarditis, mitral or aortic regurgitation",
      "Myocardial infarction in children with giant CAA (coronary artery thrombosis)",
      "Hydrops of gallbladder — acute acalculous cholecystitis (not requiring surgery — resolves with KD treatment)",
      "IVIG-resistant disease (~15–20%) — highest aneurysm risk",
    ],
    clinicalPearl:
      "Kawasaki disease is the 'great imitator' of childhood — it can mimic viral exanthems, sepsis, drug reactions, and juvenile idiopathic arthritis. The key to diagnosis in incomplete KD: infants < 6 months who present with prolonged unexplained fever + elevated CRP/ESR + thrombocytosis should prompt echocardiography even if classic criteria are not met — they have the highest risk of CAA. Periungual (fingertip) desquamation appearing 2–3 weeks after fever onset is a retrospective diagnostic clue.",
    boardRecallTip: "KD = fever ≥ 5 days + ≥ 4 of 5 (CRASH-MC: Conjunctivitis, Rash, Adenopathy, Strawberry tongue, Hand/feet changes). Treatment: IVIG 2 g/kg + aspirin. Echo for coronary aneurysms. Desquamation = convalescent phase (weeks 2–3).",
  },
  {
    id: "peds-cond-intussusception",
    rotation: "pediatrics",
    name: "Intussusception",
    overview:
      "Intussusception is the telescoping of a proximal segment of bowel (intussusceptum) into a more distal segment (intussuscipiens), causing bowel obstruction and ischemia. It is the most common cause of intestinal obstruction in children between 3 months and 3 years of age. In most pediatric cases (95%), no pathological lead point is identified (idiopathic — likely viral lymphoid hyperplasia of Peyer's patches). In older children and adults, a lead point (polyp, Meckel's diverticulum, lymphoma) is more common. Ileocolic intussusception (terminal ileum telescoping into ascending colon) is the most common type.",
    epidemiology:
      "Incidence: 1–4 per 1,000 live births. Peak age: 6–36 months (85% occur < 2 years). Slight male predominance. Most common small bowel obstruction in children < 2 years. Risk: recent adenovirus or rotavirus infection (lymphoid hyperplasia); rotavirus vaccine associated with small increased risk (1–2 per 100,000 doses); lead points more common > 2 years.",
    pathophysiology:
      "Peyer's patch hypertrophy (lymphoid hyperplasia, often post-viral) → enlarged lymphoid tissue acts as lead point → peristalsis telescopes bowel on itself → venous obstruction → edema → arterial occlusion → ischemia → perforation if untreated.",
    presentation: [
      "Classic triad (present together in only 20–40% of cases): episodic colicky abdominal pain + vomiting + currant-jelly stool (late finding — blood + mucus = ischemic bowel)",
      "Classic pattern: sudden onset severe colicky abdominal pain in previously healthy infant → child draws knees to chest, cries inconsolably for 15–20 minutes → completely resolves → child appears well between episodes → recurs",
      "Between episodes: lethargy (from pain and vagal response) — a lethargic infant with periodic abdominal pain should prompt urgent intussusception workup",
      "Palpable 'sausage-shaped' mass in RUQ (classic but infrequently found — bowel loops may be obscuring)",
      "Dance's sign: empty right lower quadrant (bowel has been pulled up into right colon)",
      "Late findings: persistent pain (ischemia), abdominal distension, bilious vomiting, bloody stool — peritonitis if perforation",
    ],
    diagnosis: [
      "Abdominal ultrasound — preferred initial imaging (no radiation, 98% sensitivity and specificity): 'target sign' or 'bull's eye' — concentric rings of echogenic and hypoechoic tissue in transverse view; 'pseudokidney sign' in longitudinal view",
      "Plain abdominal radiograph: often nonspecific; may show paucity of gas in RLQ, soft tissue mass; free air indicates perforation",
      "Air enema (or water-soluble contrast enema): both diagnostic AND therapeutic; gold standard for ileocolic intussusception. Performed by radiologist under fluoroscopic guidance",
      "CT abdomen: rarely needed; reserved for suspected lead point, complex cases, or failed reduction planning",
    ],
    management: [
      "RESUSCITATION: IV access, NPO, IV fluids, NG tube if vomiting/distended. Surgical team on standby for all reductions.",
      "AIR ENEMA REDUCTION (first-line, 80–90% success rate): Pneumatic (air) or hydrostatic (water-soluble contrast or saline) reduction under fluoroscopy or ultrasound guidance. Contraindications: peritonitis, perforation, hemodynamic instability, signs of ischemic bowel (bloody stool is NOT a contraindication alone). Success: reduction confirmed by air or contrast flowing freely into terminal ileum (ileocecal valve opens). Recurrence rate after enema reduction: 10–15% (most within 48–72 hours).",
      "OPERATIVE MANAGEMENT: Indicated if: enema reduction fails or contraindicated (peritonitis, perforation, hemodynamic instability), recurrent intussusception (> 3 episodes), pathological lead point suspected (> 2 years). Surgery: manual reduction (gentle squeezing from below — never pulling); if necrosis or perforation → bowel resection.",
      "POST-REDUCTION OBSERVATION: 12–24 hours for recurrence. Parents counseled on recurrence symptoms.",
    ],
    complications: [
      "Bowel ischemia and necrosis (if delayed diagnosis > 48 hours)",
      "Perforation with peritonitis (surgical emergency)",
      "Recurrence: 10–15% after enema reduction",
      "Small bowel obstruction if lead point present and not addressed",
    ],
    clinicalPearl:
      "The currant-jelly stool is a late, ominous finding in intussusception — it represents ischemic bowel mucosa sloughing blood and mucus. Do NOT wait for this sign to act. A lethargic infant with periodic inconsolable crying and vomiting should be assumed to have intussusception until proven otherwise. Ultrasound (target sign) is the test of choice — no radiation, no contrast needed, and can be performed at the bedside.",
    boardRecallTip: "Intussusception: 6–36 months, colicky pain + vomiting + currant-jelly stool (late). US target sign (bull's eye). Air enema = diagnostic + therapeutic. Surgery if failed enema or peritonitis. Rotavirus vaccine: small increased risk (1–2/100,000 doses).",
  },
  {
    id: "peds-cond-febrile-seizure",
    rotation: "pediatrics",
    name: "Febrile Seizures",
    overview:
      "Febrile seizures are the most common seizure disorder of childhood, occurring in 2–5% of children between 6 months and 5 years of age. They are seizures provoked by fever (core temperature ≥ 38°C / 100.4°F) in the absence of CNS infection, metabolic abnormality, or prior afebrile seizures. The vast majority (90%) are simple febrile seizures — brief, generalized, and self-limiting. Complex febrile seizures (10%) have focal features, duration > 15 minutes, or recurrence within 24 hours of the same febrile illness.",
    epidemiology:
      "Incidence: 2–5% of children aged 6 months to 5 years. Peak age: 18 months. Family history of febrile seizures (first-degree relative) increases risk 2–3 fold. Risk factors for recurrence: age < 18 months at first seizure, family history, fever < 1 hour before seizure, low-grade temperature at time of seizure. Recurrence rate: 30% overall; 50% if first seizure before age 12 months.",
    pathophysiology:
      "Rapidly rising temperature lowers the seizure threshold in genetically susceptible children. Ion channel dysfunction (sodium channels) exacerbated by fever-induced changes in neuronal excitability. HHV-6 (roseola) and influenza A are commonly associated viruses. The febrile seizure does NOT indicate brain injury or epilepsy in the vast majority of cases.",
    presentation: [
      "Simple febrile seizure: generalized tonic-clonic (bilateral, symmetric) + duration < 15 minutes + resolves completely + no recurrence within same febrile illness + rapid return to baseline",
      "Complex febrile seizure: focal features (one side of the body, gaze deviation), duration > 15 minutes (febrile status epilepticus), or recurs within 24 hours of same illness",
      "Post-ictal sleepiness/drowsiness — expected for up to 30 minutes; prolonged post-ictal state or failure to return to baseline → evaluate for CNS infection",
      "Temperature often rises rapidly — seizure may occur early in illness before parents recognize fever",
    ],
    diagnosis: [
      "Clinical diagnosis — detailed history (duration, generalized vs focal, number of seizures in illness) is essential",
      "Lumbar puncture: strongly consider in: infant < 12 months (meningeal signs unreliable at this age), child 12–18 months (signs unreliable), any age if pre-treated with antibiotics, complex features, prolonged post-ictal state, ill-appearing child, meningeal signs present",
      "Labs: only if clinically indicated — electrolytes, glucose, calcium (rule out metabolic cause if recurrent or atypical); CBC if source of fever unclear",
      "EEG: NOT indicated after first simple febrile seizure — does not predict recurrence or epilepsy risk",
      "Neuroimaging (CT/MRI): NOT routine — only if focal neurological deficit, papilledema, or focal seizure features persisting",
    ],
    management: [
      "ACUTE: Airway, breathing, circulation. Position lateral (recovery position) to prevent aspiration. Most seizures are brief and self-terminate — reassurance is appropriate.",
      "PROLONGED SEIZURE (> 5 minutes in community): Rectal diazepam (0.5 mg/kg) or buccal/intranasal midazolam — safe for parents/EMS to administer. In hospital: lorazepam IV/IM 0.05–0.1 mg/kg; if no IV: IM midazolam 0.2 mg/kg or rectal diazepam.",
      "Febrile status epilepticus (> 30 minutes): benzodiazepine → fosphenytoin or levetiracetam → anesthesia if refractory.",
      "FEVER MANAGEMENT: Antipyretics (acetaminophen, ibuprofen) for comfort — do NOT prevent recurrence of febrile seizures (multiple studies confirm this). Educate parents on this important misconception.",
      "PROPHYLAXIS: NOT routinely recommended for simple febrile seizures. Rectal diazepam at home for children with prolonged febrile seizures or high parental anxiety. Daily antiepileptic drugs NOT indicated for simple febrile seizures (risks outweigh benefits).",
      "PARENTAL EDUCATION: Most important intervention. Reassure that simple febrile seizures do NOT cause brain damage, intellectual disability, or death. Risk of epilepsy after one simple febrile seizure: only slightly above general population (1–2% vs 1%). Find and treat source of fever. Call 911 if seizure > 5 minutes.",
    ],
    complications: [
      "Febrile status epilepticus: prolonged seizure > 30 minutes — risk of hippocampal injury (temporal lobe epilepsy in rare cases)",
      "Risk of epilepsy (complex febrile seizures have higher risk): complex febrile seizure → 4–6% lifetime epilepsy risk; simple → 1–2%",
      "Recurrence: 30–50% depending on age and risk factors",
      "Aspiration if vomiting during seizure",
      "Parental anxiety and fear of recurrence (significant — address with counseling)",
    ],
    clinicalPearl:
      "The most critical distinction in febrile seizure evaluation is ruling out bacterial meningitis — which can PRESENT AS a febrile seizure. In infants < 12 months, meningeal signs (Kernig's, Brudzinski's) are unreliable; LP is more liberally indicated. For a well-appearing child > 18 months with a typical simple febrile seizure who returns to baseline rapidly, LP is NOT routinely required. The HHV-6 virus (causative of roseola infantum/exanthema subitum) is the single most common identifiable trigger of febrile seizures.",
    boardRecallTip: "Simple febrile seizure: < 15 min, generalized, one episode per illness, back to baseline = reassurance + fever workup. No EEG, no imaging, no prophylaxis. LP if < 12 months, complex features, or ill-appearing. Antipyretics do NOT prevent recurrence.",
  },
  {
    id: "peds-cond-croup",
    rotation: "pediatrics",
    name: "Croup (Laryngotracheobronchitis)",
    overview:
      "Croup (laryngotracheobronchitis) is a viral upper respiratory infection causing subglottic edema that results in the characteristic 'barky' (seal-like) cough, inspiratory stridor, and hoarse voice. It is the most common cause of acute upper airway obstruction in children. Parainfluenza virus type 1 is responsible for the majority of cases (75%), with types 2–3, RSV, and influenza also implicated. It primarily affects children 6 months to 3 years, with peak incidence in fall-winter. The Westley croup score quantifies severity and guides management.",
    epidemiology:
      "Most common in children 6 months to 3 years (peak: 18 months to 2 years). Parainfluenza virus type 1 = most common cause. Seasonal: fall and early winter. Boys slightly more affected. Spasmodic croup (recurrent, often afebrile) may be related to allergic diathesis. Annual epidemic pattern follows parainfluenza outbreaks.",
    pathophysiology:
      "Viral infection of subglottic mucosa → edema of subglottis (narrowest part of pediatric airway below vocal cords) → airway narrowing → turbulent airflow → inspiratory stridor, barky cough. Subglottic narrowing on AP radiograph = 'steeple sign' (pencil-tip appearance of trachea). Worsens with agitation (crying increases turbulence).",
    presentation: [
      "Prodrome: 1–3 days of URI symptoms (rhinorrhea, low-grade fever)",
      "Barky/brassy cough (seal bark or dog bark) — classic, diagnostic",
      "Hoarse voice (laryngeal involvement)",
      "Inspiratory stridor (subglottic narrowing); stridor at rest = moderate-severe disease",
      "Symptoms worse at night; sudden onset sometimes awakens child from sleep",
      "Westley Croup Score: Level of consciousness (0–5), Cyanosis (0–4), Stridor (0–2), Air entry (0–2), Retractions (0–3) — Total 0–17; mild ≤ 2, moderate 3–7, severe ≥ 8",
      "Spasmodic croup: older children, recurrent episodes, often no fever, may be atopic",
    ],
    diagnosis: [
      "Clinical diagnosis — based on barky cough + stridor + hoarse voice in the appropriate age group",
      "AP neck radiograph (if diagnosis uncertain): 'steeple sign' (subglottic narrowing — pencil-tip or church-steeple shape) — present in only 50% of croup; absence does NOT exclude diagnosis",
      "Lateral neck radiograph: helps distinguish from epiglottitis ('thumb sign' — swollen epiglottis) if clinical differentiation unclear",
      "Pulse oximetry: hypoxia is a late, concerning sign",
      "Differentiate from: epiglottitis (toxic-appearing, tripod posturing, drooling, muffled voice — NO barky cough, do NOT agitate, emergency airway management), bacterial tracheitis (toxic, high fever, barky cough, does NOT respond to corticosteroids), foreign body aspiration (abrupt onset, history, older child)",
    ],
    management: [
      "MILD CROUP (Westley score ≤ 2, stridor only with agitation): Dexamethasone 0.6 mg/kg PO (max 10 mg) single dose — reduces hospitalization rate by 75%; can discharge home. Reassurance, humidified air (limited evidence), observation.",
      "MODERATE CROUP (score 3–7, stridor at rest, mild retractions): Dexamethasone 0.6 mg/kg PO/IM. Nebulized racemic epinephrine (2.25% solution, 0.05 mL/kg in 3 mL NS) — rapid relief (onset 10–30 min, duration 2 hours). Observe for 2–4 hours after epinephrine for rebound stridor before discharge. Supplemental O₂ for SpO₂ < 92%.",
      "SEVERE CROUP (score ≥ 8, stridor at rest, significant retractions, altered mental status): Nebulized racemic epinephrine. Dexamethasone IM/IV. Supplemental O₂. Admit to monitored bed. Rare: heliox, preparation for airway management. Emergent intubation if impending respiratory failure (one size smaller ETT than usual — subglottic edema).",
      "DO NOT: agitate the child (worsens airway obstruction), attempt IV access in severely distressed child (may precipitate complete obstruction), place child supine in severe cases.",
    ],
    complications: [
      "Respiratory failure (rare with proper treatment): CO₂ retention, cyanosis",
      "Post-intubation subglottic stenosis (if intubation required — use ETT one size smaller)",
      "Rebound stridor after epinephrine (monitor 2–4 hours post-dose)",
      "Secondary bacterial tracheitis (Staph aureus — high fever, toxicity, purulent secretions, does NOT respond to steroids)",
    ],
    clinicalPearl:
      "Epiglottitis is the critical differential: epiglottitis presents with rapid onset (hours, not days), toxic-appearing child with drooling, tripod posturing, muffled ('hot potato') voice, and dysphasia — NO barky cough. This is a true airway emergency. Do NOT attempt to visualize the epiglottis, do NOT lie the child down, do NOT agitate — take directly to OR for controlled intubation with ENT and anesthesia standby. With the H. influenzae type b (Hib) vaccine, epiglottitis is now rare but still occurs in unvaccinated children.",
    boardRecallTip: "Croup = barky cough + stridor + hoarse voice (parainfluenza virus). Treatment: dexamethasone (all severity) + racemic epinephrine (moderate-severe). Steeple sign on AP X-ray. Epiglottitis: drooling + tripod + muffled voice (no barky cough) → emergent airway management.",
  },
  {
    id: "peds-cond-rsv-bronchiolitis",
    rotation: "pediatrics",
    name: "Bronchiolitis (RSV)",
    overview:
      "Bronchiolitis is an acute lower respiratory infection causing inflammation and obstruction of the small airways (bronchioles), most commonly caused by respiratory syncytial virus (RSV). It is the most common cause of hospitalization in infants under 12 months. RSV is responsible for 75–80% of cases, with human metapneumovirus (hMPV), parainfluenza, and rhinovirus also implicated. Bronchiolitis is a clinical diagnosis in children < 2 years presenting with viral URI prodrome followed by wheezing and respiratory distress. Treatment is primarily supportive — no pharmacological therapy has demonstrated consistent benefit.",
    epidemiology:
      "RSV infects nearly all children by age 2. Peak age for hospitalization: 2–6 months. Seasonal: RSV season October–March (November peak). Premature infants, congenital heart disease, bronchopulmonary dysplasia = highest hospitalization and mortality risk. RSV accounts for 80,000 hospitalizations and ~400 US deaths annually in children < 5.",
    pathophysiology:
      "RSV infects bronchiolar epithelium → necrosis + sloughing of epithelial cells → mucus plugging + peribronchiolar inflammation → obstruction → air trapping (hyperinflation) + V/Q mismatch → hypoxemia. Mechanical obstruction: ball-valve effect → distal hyperinflation with some areas of atelectasis (nonhomogeneous pattern on CXR).",
    presentation: [
      "Prodrome (1–3 days): URI symptoms — rhinorrhea, low-grade fever, mild cough",
      "Progressive lower respiratory symptoms: worsening cough, wheeze, respiratory distress",
      "Tachypnea (most sensitive sign), subcostal/intercostal retractions, nasal flaring",
      "Diffuse wheezing (expiratory > inspiratory) and crackles on auscultation",
      "Prolonged expiratory phase, barrel chest (hyperinflation)",
      "Apnea (especially in premature infants and young infants < 2 months) — may present as apnea without obvious respiratory distress",
      "Hypoxia (SpO₂ < 90%) = severe disease indicator",
    ],
    diagnosis: [
      "Clinical diagnosis — based on age (< 2 years), URI prodrome, wheezing, and respiratory distress",
      "Nasopharyngeal RSV antigen testing or multiplex respiratory panel (PCR): for cohorting hospitalized patients (RSV isolation precautions — contact + droplet), not for treatment decisions",
      "Chest X-ray: NOT routinely indicated. If done: hyperinflation (flattened diaphragms), bilateral diffuse patchy opacities or atelectasis, peribronchial thickening. CXR does NOT reliably distinguish bronchiolitis from pneumonia; if fever > 39°C or focal findings → CXR indicated.",
      "Pulse oximetry: continuous monitoring; SpO₂ < 90% at sea level = significant hypoxia",
      "Labs: NOT routinely indicated — high WBC does not reliably indicate bacterial superinfection",
    ],
    management: [
      "SUPPORTIVE CARE (cornerstone of treatment):",
      "Nasal suctioning (bulb syringe or deep suction) before feeds and as needed — the single most effective intervention for symptom relief",
      "Supplemental O₂: for SpO₂ < 90% (at sea level) or < 88% (altitude > 1,800 m)",
      "IV or NG fluid support if unable to maintain adequate oral intake (dehydration is common — increased respiratory effort limits feeding; tachypnea > 60/min = unsafe to feed by mouth)",
      "High-flow nasal cannula (HFNC): for moderate-severe disease; reduces intubation rate",
      "NOT EFFECTIVE (do not use routinely): Albuterol/beta-agonists (clinical trials show no benefit for typical bronchiolitis — unlike asthma), corticosteroids (no benefit), antibiotics (viral etiology; secondary bacterial pneumonia rare), ribavirin (not routinely used), hypertonic saline nebulization (some benefit in hospitalized patients — unclear)",
      "HOSPITALIZATION CRITERIA: SpO₂ < 90%, respiratory rate > 60–70/min, apnea, poor feeding/hydration, ill appearance, age < 3 months, prematurity, or significant cardiopulmonary comorbidity",
      "PREVENTION: RSV prevention is a top priority in high-risk infants:",
      "Palivizumab (Synagis): monthly IM injections October–March for high-risk groups (prematurity ≤ 29 weeks gestation, chronic lung disease of prematurity, hemodynamically significant CHD in first year of life)",
      "Nirsevimab (Beyfortus): FDA-approved 2023 — single-dose monoclonal antibody for all infants born during RSV season (replaced palivizumab for many patients)",
      "Maternal RSV vaccine (Abrysvo): FDA approved 2023 — for pregnant women 32–36 weeks gestation to protect newborns via passive antibody transfer",
    ],
    complications: [
      "Apnea — especially premature infants < 44 weeks post-conceptional age; may require cardiorespiratory monitoring",
      "Respiratory failure requiring intubation and mechanical ventilation (invasive or non-invasive — HFNC, CPAP)",
      "Dehydration from inability to feed",
      "Secondary bacterial pneumonia (rare — S. pneumoniae, S. aureus)",
      "Long-term: RSV bronchiolitis in infancy is associated with subsequent development of asthma and recurrent wheezing (association, not necessarily causation)",
    ],
    clinicalPearl:
      "Albuterol does NOT work in bronchiolitis — multiple meta-analyses confirm no benefit. The primary mechanism is small airway mucosal edema and mucus plugging, NOT bronchospasm (as in asthma). Testing with one dose is not routinely recommended. The single most important intervention remains high-volume nasal suctioning. Apnea as the presenting sign of RSV bronchiolitis is most common in infants < 2 months and former premature infants — monitor closely.",
    boardRecallTip: "RSV = most common cause. Age < 2 years, wheeze + URI prodrome. Treatment: supportive ONLY (suction + O₂ + fluids). Albuterol/steroids = no benefit. SpO₂ < 90% = hospitalize. Palivizumab/nirsevimab = prevention for high-risk infants.",
  },
  {
    id: "peds-cond-meningitis",
    rotation: "pediatrics",
    name: "Bacterial Meningitis in Children",
    overview:
      "Bacterial meningitis is an acute, life-threatening infection of the meninges (pia mater, arachnoid) and CSF. Despite advances in vaccination and antibiotics, it carries significant morbidity (hearing loss, neurologic deficits, hydrocephalus) and mortality. The causative organism varies with age: neonates (Group B Streptococcus, E. coli, Listeria); infants and toddlers (S. pneumoniae, N. meningitidis); school-age and adolescents (N. meningitidis). Empiric antibiotics must NOT be delayed — even 30 minutes delay worsens outcomes.",
    epidemiology:
      "Incidence significantly reduced by vaccines (Hib, PCV13, meningococcal vaccines). S. pneumoniae = most common cause in children > 2 months. N. meningitidis = most common cause in adolescents and young adults (college dormitories). Peaks: neonates (< 1 month) and older adolescents (15–24 years). Mortality: S. pneumoniae 5–10%; N. meningitidis 3–5% (higher in shock/purpuric presentation).",
    pathophysiology:
      "Bacteremia → hematogenous seeding of meninges → bacterial replication in CSF → massive cytokine release → breakdown of blood-brain barrier → cerebral edema → elevated ICP → decreased CSF flow → hearing loss (cochlear damage from inflammation of perilymphatic fluid), neuronal injury, hydrocephalus, and SIADH.",
    presentation: [
      "Classic triad (in older children): fever + severe headache + meningismus (neck stiffness, positive Kernig's/Brudzinski's)",
      "Infants (< 18 months): nonspecific — fever, irritability, bulging fontanelle, paradoxical irritability (cries MORE when held — meningeal irritation with movement), poor feeding, high-pitched cry",
      "Kernig's sign: with hip flexed 90°, knee extension restricted by pain; Brudzinski's sign: passive neck flexion → involuntary hip/knee flexion",
      "Petechial/purpuric rash: classic for N. meningitidis — nonblanching, suggests bacteremia with DIC; ominous finding",
      "Photophobia, phonophobia, altered mental status, seizures (25%), focal neurological deficits",
      "Neonates: temperature instability (hypothermia OR hyperthermia), irritability, poor suck, apnea, bulging fontanelle — minimal meningeal signs",
    ],
    diagnosis: [
      "Lumbar puncture (LP) — essential for diagnosis: do NOT delay antibiotics for LP if CT required or clinical concern is high",
      "CSF analysis:",
      "• Bacterial meningitis: WBC 1,000–10,000 (predominantly PMNs), glucose < 40 mg/dL or CSF:serum glucose < 0.4, protein > 100 mg/dL, opening pressure elevated (> 20 cmH₂O), turbid/cloudy appearance",
      "• Viral meningitis: WBC 100–500 (lymphocyte predominant), normal glucose, mildly elevated protein, clear",
      "• TB meningitis: lymphocytic pleocytosis, very low glucose, very high protein, positive AFB smear (low sensitivity)",
      "Blood cultures before antibiotics (do NOT delay antibiotics for blood cultures — draw quickly and treat immediately)",
      "CT head before LP: required if papilledema, focal neurological deficit, recent seizure, immunocompromised, or altered mental status (herniation risk if mass lesion present)",
      "CBC, BMP, coagulation studies, procalcitonin, blood cultures",
      "Serum PCR for Neisseria meningitidis and S. pneumoniae (particularly useful post-antibiotics)",
    ],
    management: [
      "EMPIRIC ANTIBIOTICS — STAT, DO NOT DELAY:",
      "Neonates (< 1 month): Ampicillin (Listeria, GBS coverage) + Gentamicin OR Cefotaxime (GNR coverage)",
      "Infants 1–3 months: Ampicillin + Cefotaxime (covers Listeria + S. pneumo + GNR)",
      "Children > 3 months — adolescents: Ceftriaxone 100 mg/kg/day IV ÷ BID (S. pneumo + N. meningitidis); add Vancomycin (for penicillin-resistant S. pneumo) until susceptibilities known",
      "DEXAMETHASONE: 0.15 mg/kg IV q6h × 4 days — give 10–20 minutes BEFORE first antibiotic dose. Most evidence for Hib meningitis (reduces hearing loss); modest benefit in pneumococcal meningitis; no benefit for meningococcal. Reduces hearing loss and neurological complications.",
      "ICP MANAGEMENT: elevate head of bed 30°; treat seizures (lorazepam → fosphenytoin); avoid hypotension (maintain cerebral perfusion pressure); avoid hypotonic fluids (SIADH risk); mannitol or hypertonic saline for herniation signs",
      "MENINGOCOCCAL CONTACTS: Prophylaxis for close contacts (household, daycare, kissing contacts): Rifampin × 2 days, ciprofloxacin single dose (adults), or ceftriaxone IM single dose — regardless of immunization status",
    ],
    complications: [
      "Sensorineural hearing loss (most common sequela — 10–30%): routine audiology follow-up for ALL bacterial meningitis survivors",
      "Neurological deficits: seizures (post-meningitic epilepsy), cognitive impairment, cerebral palsy, hydrocephalus",
      "Subdural effusion or empyema (H. influenzae meningitis — most common complication in young infants)",
      "Waterhouse-Friderichsen syndrome: N. meningitidis + bilateral adrenal hemorrhage + septic shock + DIC — high mortality",
      "Cerebral herniation (uncommon if LP not performed with elevated ICP mass lesion)",
      "Limb necrosis/amputation from DIC and purpura fulminans (meningococcemia)",
    ],
    clinicalPearl:
      "In bacterial meningitis, the single most important intervention is prompt antibiotic administration — every 1-hour delay in antibiotics is associated with a significant increase in mortality and neurologic complications. If the clinical presentation strongly suggests bacterial meningitis, give antibiotics immediately, then obtain CT if needed, then LP. Blood cultures should be drawn before antibiotics but should not delay treatment by more than a few minutes. Dexamethasone is most effective when given before or with the first antibiotic dose.",
    boardRecallTip: "Bacterial meningitis CSF: high PMN, low glucose, high protein. Empiric: ceftriaxone + vancomycin (> 3 months). Dexamethasone BEFORE antibiotics. Most common sequela: sensorineural hearing loss. Purpuric rash + fever + meningismus = meningococcemia → treat immediately.",
  },
  {
    id: "peds-cond-iron-deficiency",
    rotation: "pediatrics",
    name: "Iron Deficiency Anemia in Children",
    overview:
      "Iron deficiency anemia (IDA) is the most common nutritional deficiency and the most common cause of anemia in children worldwide. It results from inadequate iron intake, impaired absorption, or excessive iron loss. Toddlers (ages 1–3 years) on excessive cow's milk intake and adolescent girls with menstruation are the highest-risk groups in the United States. IDA has well-documented consequences for neurodevelopment, cognitive performance, and behavior, even when anemia is mild, making early detection and treatment critical.",
    epidemiology:
      "Most common nutritional deficiency globally — 700 million cases worldwide. In the US: 7–9% of toddlers (12–36 months) and 9–16% of adolescent girls have IDA. Risk factors: prematurity (less iron stored at birth), low birthweight, excessive cow's milk > 24 oz/day (cow's milk is low in iron and inhibits iron absorption, and can cause occult GI blood loss), delayed introduction of iron-rich foods, vegetarian diet without supplementation, breastfeeding without supplemental iron after 6 months, menstrual blood loss in adolescent girls.",
    pathophysiology:
      "Iron is essential for hemoglobin synthesis, myelin formation, and mitochondrial function. Depletion sequence: (1) Iron stores depleted (ferritin falls first); (2) Transferrin increases (iron-binding capacity rises) and serum iron falls; (3) Reduced iron available for erythropoiesis → microcytic, hypochromic red cells; (4) Hgb falls below normal (IDA). Even before anemia develops, iron deficiency impairs dopamine neurotransmission and myelination → cognitive and behavioral effects.",
    presentation: [
      "Mild IDA: often asymptomatic — detected on routine screening",
      "Moderate-severe IDA: pallor (conjunctival, palmar, circumoral), fatigue, irritability, decreased activity tolerance",
      "Pica: craving for non-food substances — ice (pagophagia — most specific for iron deficiency), dirt (geophagia), starch, clay",
      "Restless leg syndrome (in older children/adolescents)",
      "Behavioral changes: decreased attention span, irritability, cognitive impairment (even without frank anemia)",
      "Spoon-shaped nails (koilonychia — severe/chronic), glossitis, angular stomatitis (severe cases)",
      "Tachycardia, systolic flow murmur (high-output state with severe anemia)",
    ],
    diagnosis: [
      "CBC: microcytic (MCV < 80 fL), hypochromic (MCH < 26 pg) anemia; elevated RDW (> 14%) — red cell size variability",
      "Iron studies: low serum iron (< 60 µg/dL), high TIBC (> 400 µg/dL), low transferrin saturation (< 15%), low serum ferritin (< 12 ng/mL — most specific indicator of iron stores; note: ferritin is an acute phase reactant — may be falsely elevated with inflammation)",
      "Peripheral smear: microcytes, hypochromic cells, anisocytosis (unequal size), poikilocytosis (abnormal shape — pencil/cigar cells)",
      "Reticulocyte count: low to normal (hypoproliferative anemia)",
      "Therapeutic trial: empiric iron replacement (3 mg/kg/day elemental iron) → reticulocyte response in 5–7 days + Hgb rise 1 g/dL in 4 weeks = confirms diagnosis (used in typical toddler presentation; avoid unnecessary labs in straightforward cases)",
      "Differential: thalassemia trait (MCV low but Hgb normal or mildly low, ferritin normal, hemoglobin electrophoresis), lead poisoning (elevated lead level), anemia of chronic disease (ferritin elevated)",
    ],
    management: [
      "ORAL IRON THERAPY (first-line): Elemental iron 3–6 mg/kg/day (ferrous sulfate most common — 20% elemental iron; 1 mL/kg/day of 15 mg/mL ferrous sulfate solution). Give between meals or with vitamin C (ascorbic acid) to enhance absorption. Avoid with cow's milk, calcium, or antacids (impair absorption).",
      "DURATION: Continue iron therapy for 3 months after Hgb normalizes to replete stores. Monitor Hgb at 4 weeks (should rise ≥ 1 g/dL) and at completion of therapy.",
      "DIETARY COUNSELING: Limit cow's milk to ≤ 16–24 oz/day in toddlers. Encourage iron-rich foods: red meat, iron-fortified cereals, beans, spinach. Vitamin C with iron-rich meals enhances absorption.",
      "PREVENTION (AAP recommendations): Breastfed infants: iron supplementation 1 mg/kg/day starting at 4 months until iron-rich foods introduced. Formula-fed infants: iron-fortified formula (≥ 6.7 mg/L iron). Universal screening: hemoglobin at 12 months; risk-based screening at 4 months for preterm/low-birthweight infants.",
      "IV IRON: For severe anemia (Hgb < 7 g/dL), malabsorption, intolerance to oral iron, or poor compliance — iron sucrose or ferric carboxymaltose IV.",
      "BLOOD TRANSFUSION: Hgb < 7 g/dL with symptomatic anemia or cardiorespiratory compromise — pRBC 10 mL/kg over 3–4 hours.",
    ],
    complications: [
      "Neurodevelopmental impairment: cognitive delay, poor school performance, behavioral problems (some effects may be irreversible with prolonged IDA in first 2 years of life)",
      "Impaired immune function (increased susceptibility to infections)",
      "Impaired exercise tolerance and physical growth",
      "High-output cardiac failure in severe chronic anemia (rare)",
      "Pica complications: lead poisoning (from ingested paint/soil), intestinal obstruction",
    ],
    clinicalPearl:
      "In a toddler (12–36 months) with microcytic, hypochromic anemia and a history of excessive cow's milk intake, the diagnosis is iron deficiency anemia until proven otherwise. A therapeutic trial of oral iron is appropriate without extensive testing in a typical presentation. The most sensitive indicator of iron depletion (before anemia develops) is ferritin, but it is an acute-phase reactant and may be falsely elevated during illness. Remember: lead poisoning causes microcytic anemia and should be considered, especially in toddlers with pica — check blood lead level.",
    boardRecallTip: "IDA: microcytic + hypochromic + high RDW + low ferritin. Toddlers: excessive cow's milk. Treat: elemental iron 3–6 mg/kg/day × 3 months after Hgb normalizes. Pica (ice = pagophagia) is specific. Ferritin = earliest to fall (iron stores). Thalassemia trait: normal ferritin, normal RDW.",
  },
  {
    id: "peds-cond-adhd",
    rotation: "pediatrics",
    name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    overview:
      "ADHD is the most common neurodevelopmental disorder of childhood, characterized by developmentally inappropriate levels of inattention, hyperactivity, and impulsivity that cause functional impairment across multiple settings. DSM-5 recognizes three presentations: predominantly inattentive, predominantly hyperactive-impulsive, and combined. The etiology involves genetic factors (heritability 70–80%), dopamine and norepinephrine dysregulation in prefrontal cortex circuits, and structural/functional brain differences. ADHD persists into adulthood in 60–80% of cases.",
    epidemiology:
      "Prevalence: 9–10% of school-age children in the US. Male predominance (3:1 ratio) in childhood; equalizes in adulthood. Mean age of diagnosis: 7 years. Highly heritable (risk 5–7× higher if parent has ADHD). Comorbidities common: oppositional defiant disorder (ODD) in 50%, anxiety disorder in 25–30%, learning disorders in 30–40%, depression in 15–20%, autism spectrum disorder in 20–50%.",
    pathophysiology:
      "Dysregulation of dopamine and norepinephrine in prefrontal cortex networks responsible for executive function, working memory, attention, and impulse control. Neuroimaging shows smaller frontal lobe volume, caudate nucleus, and cerebellar vermis. Delayed cortical maturation (myelination) relative to peers. Stimulant medications increase synaptic dopamine and NE → normalize prefrontal circuit function.",
    presentation: [
      "INATTENTIVE symptoms (at least 6 for ≥ 6 months, onset < 12 years, ≥ 2 settings): fails to give close attention/makes careless mistakes, difficulty sustaining attention, seems not to listen, doesn't follow through on tasks, difficulty organizing, avoids sustained mental effort, loses things, easily distracted, forgetful in daily activities",
      "HYPERACTIVE-IMPULSIVE symptoms: fidgets, leaves seat, runs/climbs inappropriately (children) or restless (adolescents), unable to play quietly, 'on the go,' talks excessively, blurts out answers, difficulty waiting turn, interrupts others",
      "COMBINED type: meets criteria for both inattentive and hyperactive-impulsive",
      "Symptoms must: be present before age 12, occur in ≥ 2 settings (home + school), cause significant impairment, not be better explained by another mental disorder",
    ],
    diagnosis: [
      "Clinical diagnosis — DSM-5 criteria (no lab tests or neuroimaging required for diagnosis)",
      "Validated rating scales (multiple informants): Vanderbilt Assessment Scales (parent + teacher — most used in primary care), Conners' Rating Scales, SNAP-IV",
      "Complete medical history, developmental history, school records, and teacher input are essential",
      "Physical and neurological exam (rule out: thyroid disease, vision/hearing impairment, seizure disorder, learning disability, lead toxicity, iron deficiency)",
      "Neuropsychological testing: for academic evaluation, learning disability assessment — not required for ADHD diagnosis but helpful for treatment planning",
      "EEG, brain MRI: NOT indicated for routine ADHD workup",
    ],
    management: [
      "CHILDREN 6+ AND ADOLESCENTS (AAP guidelines 2019):",
      "FIRST-LINE: FDA-approved medications + behavioral therapy (combination superior to either alone).",
      "STIMULANTS (first-line pharmacotherapy):",
      "Methylphenidate (Ritalin, Concerta) — dopamine and NE reuptake inhibitor; short-acting (4–6h) or long-acting (8–12h). Dose: start 5 mg BID → titrate by 5 mg weekly; typical dose 0.5–1 mg/kg/day.",
      "Amphetamine salts (Adderall, Vyvanse) — release of dopamine and NE + reuptake inhibition; Vyvanse (lisdexamfetamine) is prodrug (less abuse potential). Response rate to stimulants: 70–80%; if one stimulant fails → try the other class.",
      "Monitoring: BP, HR, weight, height velocity (stimulants may cause mild growth attenuation), mood, sleep, appetite.",
      "NON-STIMULANTS (when stimulants fail or contraindicated — tics, substance abuse risk, anxiety, cardiovascular contraindication):",
      "Atomoxetine (Strattera) — selective NE reuptake inhibitor; non-controlled substance; onset 4–6 weeks; hepatotoxicity monitoring; carries black box warning for increased suicidal ideation in children",
      "Guanfacine ER (Intuniv) or Clonidine ER (Kapvay) — alpha-2 agonists; good for ADHD + tics + sleep; sedation, hypotension",
      "PRESCHOOLERS (4–5 years): Behavioral therapy FIRST (parent training in behavior management); medication only if significant impairment persists.",
      "BEHAVIORAL INTERVENTIONS: Parent training in behavior management (PTBM), classroom accommodations (IEP/504 plan), organization and social skills training, cognitive-behavioral therapy (older children/adolescents).",
    ],
    complications: [
      "Academic underachievement and school failure",
      "Comorbid psychiatric disorders (anxiety, depression, ODD, conduct disorder)",
      "Substance use disorders (untreated ADHD is a risk factor; stimulant treatment may be protective)",
      "Motor vehicle accidents in adolescents with ADHD (increased risk 2–4×)",
      "Social difficulties, peer relationship problems",
      "Low self-esteem, frustration, family conflict",
    ],
    clinicalPearl:
      "ADHD diagnosis requires impairment in MULTIPLE settings (school AND home) — parents describing problems only at home with a teacher reporting no concerns is unlikely to be ADHD (consider anxiety, family stressors, or ODD). Similarly, a teacher raising concerns but parents denying home problems warrants a closer look (sometimes parents normalize behavior). Stimulant medications have the best safety profile of any psychotropic medication in children — decades of data support their safety and efficacy. 'Drug holidays' (stopping medication during summer) are an option for purely academic ADHD but not for children with behavioral/social impairment year-round.",
    boardRecallTip: "ADHD diagnosis: DSM-5 criteria, ≥ 2 settings, onset < 12 years. Treatment: behavior therapy + stimulants (methylphenidate or amphetamines). Non-stimulants: atomoxetine, guanfacine. Preschoolers (4–5 years): behavior therapy FIRST. Stimulants safe and effective — 70–80% response rate.",
  },
];
