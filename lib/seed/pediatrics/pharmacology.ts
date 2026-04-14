// @ts-nocheck
import { Drug } from "@/types/seed";

export const pediatricsPharmacology: Drug[] = [
  {
    id: "peds-drug-amoxicillin",
    rotation: "pediatrics",
    name: "Amoxicillin",
    class: "Aminopenicillin (Beta-Lactam Antibiotic)",
    mechanismOfAction:
      "Amoxicillin inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins (PBPs), which are enzymes responsible for the final cross-linking steps of peptidoglycan synthesis. Without adequate peptidoglycan cross-linking, the cell wall is weakened and cannot withstand osmotic pressure, causing bacterial lysis and death. It has a broader spectrum than penicillin G — covering gram-positive cocci (including viridans streptococci, Streptococcus pneumoniae) and some gram-negative organisms (H. influenzae, E. coli). It is bactericidal and time-dependent (efficacy depends on time above MIC, not peak concentration).",
    indications: [
      "Acute otitis media (AOM) — first-line: 80–90 mg/kg/day (high-dose for Strep pneumo resistance)",
      "Streptococcal pharyngitis (GAS) — 50 mg/kg/day × 10 days (preferred over penicillin V for taste/compliance)",
      "Acute sinusitis (bacterial) — 80–90 mg/kg/day",
      "Community-acquired pneumonia (mild, outpatient) — 90 mg/kg/day in children ≥ 2 years",
      "H. pylori eradication (triple therapy — with clarithromycin + PPI)",
      "Urinary tract infections (when susceptibility confirmed)",
      "Lyme disease (early, localized) — 50 mg/kg/day ÷ TID × 14–21 days",
      "Dental prophylaxis for endocarditis prevention",
    ],
    contraindications: [
      "ABSOLUTE: Severe hypersensitivity to penicillins (anaphylaxis, Stevens-Johnson syndrome)",
      "RELATIVE: Infectious mononucleosis (EBV) — amoxicillin causes a widespread maculopapular rash in 90% of EBV-infected patients (not a true allergy — immunologic mechanism involving EBV-specific antibodies + amoxicillin); mild penicillin allergy (non-anaphylactic) — cross-reactivity with cephalosporins ~1–2%",
    ],
    sideEffects: {
      common: [
        "Diarrhea (most common — disrupts normal gut flora; can cause antibiotic-associated diarrhea)",
        "Nausea, vomiting",
        "Maculopapular rash (especially in EBV infection — not a true allergy)",
        "Oral thrush (Candida overgrowth with broad-spectrum use)",
      ],
      serious: [
        "Anaphylaxis (IgE-mediated — urticaria, angioedema, bronchospasm, hypotension): immediate epinephrine",
        "Clostridioides difficile colitis (rare — pseudomembranous colitis)",
        "Serum sickness-like reaction (arthralgia, fever, urticaria — 1–2 weeks after exposure; not IgE-mediated)",
        "Hemolytic anemia (direct Coombs positive — rare, immune-mediated)",
      ],
      blackBox: [],
    },
    interactions: [
      "Probenecid: decreases renal tubular secretion of amoxicillin → increases serum levels (sometimes used therapeutically in STI treatment)",
      "Oral contraceptives: theoretical reduced efficacy (controversial — likely not clinically significant)",
      "Warfarin: may increase INR (monitor in patients on warfarin, though interaction is modest)",
      "Methotrexate: penicillins reduce renal clearance → elevated MTX levels → toxicity risk",
      "Allopurinol: increases rate of amoxicillin-induced rash (particularly maculopapular)",
    ],
    monitoring: [
      "Clinical response at 48–72 hours (AOM, sinusitis) — if no improvement, consider treatment failure",
      "No routine lab monitoring required for short courses",
      "Assess for rash — differentiate drug allergy from EBV-related rash (mononucleosis test if suspected)",
      "Renal dosing: CrCl 10–30 mL/min → q12h; CrCl < 10 → q24h; dialysis: give after session",
    ],
    dosing: {
      adult: "Standard: 500 mg TID or 875 mg BID. High-dose: 3 g/day in divided doses",
      pediatric: "Standard: 25–50 mg/kg/day ÷ BID-TID. High-dose (AOM, sinusitis, pneumonia): 80–90 mg/kg/day ÷ BID (max 4 g/day)",
      renal: "CrCl 10–30: extend interval to q12h. CrCl < 10: q24h. Hemodialysis: supplement dose after dialysis",
      hepatic: "No adjustment required for hepatic impairment",
    },
    clinicalPearls: [
      "The EBV-amoxicillin rash is NOT a true penicillin allergy — children given amoxicillin during active EBV infection (mononucleosis) develop a diffuse, symmetric, maculopapular ('slapped' appearance) rash in up to 90% of cases due to an immune mechanism unique to EBV infection. This rash does NOT predict future penicillin allergy and should not be labeled as a penicillin allergy in the chart without proper allergy evaluation.",
      "High-dose amoxicillin (80–90 mg/kg/day) is used for AOM, sinusitis, and pneumonia to achieve concentrations adequate to kill intermediate penicillin-resistant Streptococcus pneumoniae (PRSP). This works because amoxicillin has superior pharmacodynamic properties for PRSP compared to standard dosing.",
    ],
    boardRecallTip: "High-dose amoxicillin (80–90 mg/kg/day) = AOM, sinusitis. EBV + amoxicillin = diffuse rash (NOT a true allergy). Failure → amoxicillin-clavulanate (covers beta-lactamase-producing H. flu). Anaphylaxis = true allergy, avoid all penicillins.",
  },
  {
    id: "peds-drug-albuterol",
    rotation: "pediatrics",
    name: "Albuterol (Salbutamol)",
    class: "Short-Acting Beta-2 Adrenergic Agonist (SABA)",
    mechanismOfAction:
      "Albuterol selectively activates beta-2 adrenergic receptors on bronchial smooth muscle, activating adenylate cyclase → increased cAMP → protein kinase A activation → phosphorylation of myosin light-chain kinase → smooth muscle relaxation → bronchodilation. It also stabilizes mast cells and reduces release of inflammatory mediators (histamine, leukotrienes). Its beta-2 selectivity means less beta-1 cardiac stimulation compared to non-selective agents (isoproterenol). Onset of action: 5–15 minutes; peak: 60–90 minutes; duration: 4–6 hours.",
    indications: [
      "Acute asthma exacerbation — first-line rescue bronchodilator (MDI with spacer or nebulizer)",
      "Exercise-induced bronchospasm (EIB) — 2 puffs 15–30 minutes before exercise",
      "Hyperkalemia (IV or nebulized — shifts potassium into cells transiently; NOT a definitive treatment)",
      "Maintenance of asthma in step-up therapy (as rescue, not controller — regular scheduled use not recommended as it masks poor control)",
      "NOT indicated for RSV bronchiolitis (no benefit — different pathophysiology from asthma)",
    ],
    contraindications: [
      "ABSOLUTE: Severe hypersensitivity to albuterol or components (rare)",
      "RELATIVE: Severe tachycardia, hypertrophic obstructive cardiomyopathy (HOCM — albuterol increases cardiac output and may worsen outflow obstruction); uncorrected hypokalemia (albuterol lowers potassium further)",
    ],
    sideEffects: {
      common: [
        "Tachycardia (beta-1 stimulation at high doses)",
        "Tremor (skeletal muscle tremor — beta-2 effect on skeletal muscle)",
        "Hypokalemia (beta-2 stimulation → K+ shift into cells; clinically significant with continuous nebulization)",
        "Nervousness, agitation (especially in young children)",
        "Palpitations",
      ],
      serious: [
        "Paradoxical bronchospasm (rare — inhalation of propellants may trigger; switch formulation)",
        "Hypokalemia causing cardiac arrhythmias (with continuous nebulization in status asthmaticus — monitor potassium)",
        "Lactic acidosis (rare — with continuous high-dose nebulization)",
      ],
      blackBox: [],
    },
    interactions: [
      "Beta-blockers (propranolol, metoprolol): oppose bronchodilatory effect; non-selective beta-blockers block bronchodilation — avoid in asthma",
      "MAO inhibitors, tricyclic antidepressants: potentiate cardiovascular effects",
      "Digoxin: albuterol-induced hypokalemia may increase digoxin toxicity",
      "Diuretics (furosemide): additive hypokalemia with albuterol",
      "Other sympathomimetics: additive cardiovascular effects",
    ],
    monitoring: [
      "SpO₂ (oxygen saturation) during acute exacerbation",
      "Heart rate and respiratory rate before and after each nebulization",
      "Serum potassium with continuous nebulization in status asthmaticus",
      "Frequency of rescue inhaler use — if needing > 2 rescue doses/week, step up controller therapy",
      "Peak expiratory flow (PEF) or FEV₁ pre- and post-bronchodilator",
    ],
    dosing: {
      adult: "MDI (90 mcg/puff): 2 puffs q4–6h PRN. Nebulizer: 2.5 mg (0.5 mL of 0.5% solution in 2.5 mL NS) q4–6h. Severe exacerbation: continuous nebulization 7.5–15 mg/hr",
      pediatric: "MDI with spacer (preferred): 2–4 puffs q20min × 3 doses, then q4h. Nebulizer: < 20 kg: 1.25 mg; ≥ 20 kg: 2.5 mg; diluted in 3 mL NS q20min × 3 doses. Continuous nebulization in ICU: 0.15–0.3 mg/kg/hr",
      renal: "No adjustment required",
      hepatic: "No adjustment required",
    },
    clinicalPearls: [
      "MDI with spacer is at least as effective as nebulization for mild-moderate acute asthma exacerbations — and may be MORE effective than a poorly performed nebulizer treatment. Studies show equivalent bronchodilator delivery with proper spacer technique. MDI with spacer is also faster, less expensive, and avoids exposure to nebulized medication in the environment (reducing respiratory infections in staff).",
      "In RSV bronchiolitis, albuterol does NOT work — the pathophysiology is small airway mucosal edema and mucus plugging, not bronchospasm. Multiple randomized controlled trials and meta-analyses confirm no benefit. AAP 2014 guidelines explicitly state: 'Albuterol (or salbutamol) should not be used in the management of bronchiolitis.' A single diagnostic trial of albuterol is no longer recommended.",
    ],
    boardRecallTip: "SABA = rescue bronchodilator. MDI with spacer = equivalent to nebulizer. Albuterol: tachycardia + tremor + hypokalemia. NOT for RSV bronchiolitis. LABA (salmeterol) = controller — never use alone without ICS (black box warning for asthma deaths).",
  },
  {
    id: "peds-drug-ivig",
    rotation: "pediatrics",
    name: "Intravenous Immunoglobulin (IVIG)",
    class: "Immunoglobulin (Immune Modulator)",
    mechanismOfAction:
      "IVIG contains pooled human IgG antibodies from thousands of donors. Multiple mechanisms of action depending on condition: (1) Kawasaki disease: neutralizes pathogenic cytokines/antigens; saturation of neonatal Fc receptor (FcRn) → accelerated catabolism of autoantibodies; Fc receptor blockade on macrophages → reduced phagocytosis of opsonized cells; anti-inflammatory cytokine modulation (↓IL-1, TNF-α, ↑IL-10). (2) Immune thrombocytopenic purpura (ITP): Fc receptor blockade on splenic macrophages → reduced platelet destruction. (3) Immunodeficiency replacement: provides passive immunity with pathogen-specific antibodies.",
    indications: [
      "Kawasaki disease — 2 g/kg IV single dose (reduces coronary artery aneurysm from 25% to 3–5%)",
      "Immune thrombocytopenic purpura (ITP) — 0.8–1 g/kg/day × 1–2 doses (rapid platelet rise within 24–48 hours)",
      "Guillain-Barré syndrome — 2 g/kg IV over 5 days (equivalent to plasmapheresis)",
      "Primary immunodeficiency disorders (hypogammaglobulinemia — replacement therapy q3–4 weeks)",
      "Multisystem inflammatory syndrome in children (MIS-C) — 2 g/kg with aspirin ± corticosteroids",
      "Neonatal alloimmune thrombocytopenia, hemolytic disease of the newborn",
      "Chronic inflammatory demyelinating polyneuropathy (CIDP)",
    ],
    contraindications: [
      "ABSOLUTE: IgA deficiency with anti-IgA antibodies (IVIG contains trace IgA → anaphylaxis risk; use IgA-depleted product if treatment necessary)",
      "RELATIVE: Renal insufficiency (sucrose-containing IVIG → osmotic nephropathy — use sucrose-free formulations); CHF or hypervolemia (volume load of infusion — infuse slowly, consider furosemide); history of thromboembolic events (IVIG increases blood viscosity)",
    ],
    sideEffects: {
      common: [
        "Infusion-related reactions: headache, fever, chills, flushing, myalgia, nausea — usually mild and rate-related; slow infusion or premedicate with acetaminophen/diphenhydramine",
        "Aseptic meningitis syndrome (rare — severe headache, meningismus post-infusion; CSF shows pleocytosis without organisms; self-limiting)",
        "Migraine headache post-infusion",
      ],
      serious: [
        "Anaphylaxis (in IgA-deficient patients with anti-IgA antibodies — epinephrine immediately)",
        "Hemolysis (anti-A/B antibodies in IVIG can cause immune hemolytic anemia — check baseline CBC, type and screen)",
        "Osmotic nephropathy (sucrose-containing formulations in renal insufficiency — use sucrose-free)",
        "Thromboembolic events (DVT, stroke, MI — especially in elderly, high-risk patients; IVIG increases serum viscosity)",
        "Transfusion-related acute lung injury (TRALI — rare)",
      ],
      blackBox: [
        "Risk of thromboembolism: administer at the minimum infusion rate and monitor for signs of DVT, stroke, MI, and pulmonary embolism",
        "Renal dysfunction, acute renal failure, osmotic nephropathy (use the minimum effective dose, especially in patients with pre-existing renal compromise)",
      ],
    },
    interactions: [
      "Live vaccines (MMR, varicella): IVIG contains antibodies that impair vaccine immunogenicity — defer live vaccines for 11 months after high-dose IVIG (2 g/kg). For lower doses, defer at least 3 months.",
      "Aspirin: given concurrently in Kawasaki disease — IVIG does not significantly affect aspirin pharmacokinetics",
    ],
    monitoring: [
      "Vital signs q15–30 min during infusion (especially for first 30 minutes); reduce rate if infusion reactions occur",
      "BMP and urinalysis before and after infusion in patients with renal risk factors",
      "CBC (baseline and post-infusion for hemolysis monitoring — watch for drop in Hgb with high-dose in non-type O patients)",
      "IgA level before initiation — if undetectable IgA → check anti-IgA antibodies",
      "In Kawasaki: echo at baseline, 2 weeks, and 6–8 weeks; monitor fever response to IVIG (persistent fever at 36 hours = IVIG resistance)",
    ],
    dosing: {
      adult: "Indication-specific: ITP: 1 g/kg/day × 1–2 days. GBS: 0.4 g/kg/day × 5 days. Primary immunodeficiency: 400–600 mg/kg q3–4 weeks",
      pediatric: "Kawasaki: 2 g/kg over 10–12 hours (single infusion). ITP: 0.8–1 g/kg/day × 1–2 days. MIS-C: 2 g/kg. Infusion rate: start at 0.5–1 mL/kg/hr; increase to max 4–8 mL/kg/hr over 2–4 hours if tolerated",
      renal: "Use sucrose-free formulation if CrCl < 30 mL/min. Monitor renal function closely. Reduce dose if possible.",
      hepatic: "No specific hepatic dosing guidance; use caution in hepatic impairment with volume overload risk",
    },
    clinicalPearls: [
      "Live vaccines (MMR, varicella) must be deferred for 11 months after high-dose IVIG (2 g/kg) — the passive antibodies in IVIG interfere with the antibody response to live attenuated vaccines. This is especially important in Kawasaki disease management, where children may have missed scheduled vaccines during illness. Document IVIG date and calculate appropriate deferral in the chart.",
      "IVIG resistance in Kawasaki disease (~15–20% of cases) is defined as persistent fever > 36 hours after IVIG infusion. These children are at the highest risk for coronary artery aneurysms. Options for refractory disease: second IVIG dose 2 g/kg, infliximab (anti-TNF-α, particularly for high-risk patients), methylprednisolone (30 mg/kg/day × 3 days), or cyclosporine based on Japanese risk scoring.",
    ],
    boardRecallTip: "IVIG for Kawasaki: 2 g/kg single infusion + aspirin → reduces CAA to 3–5%. Defer MMR/varicella 11 months after high-dose IVIG. IVIG + IgA deficiency → anaphylaxis risk. Sucrose-containing IVIG → osmotic nephropathy in renal insufficiency.",
  },
  {
    id: "peds-drug-methylphenidate",
    rotation: "pediatrics",
    name: "Methylphenidate (Ritalin, Concerta, Daytrana)",
    class: "Central Nervous System Stimulant (Norepinephrine-Dopamine Reuptake Inhibitor)",
    mechanismOfAction:
      "Methylphenidate blocks the reuptake transporters for both dopamine (DAT) and norepinephrine (NET) at presynaptic terminals, increasing synaptic concentrations of both neurotransmitters in the prefrontal cortex. Enhanced dopaminergic and noradrenergic signaling in prefrontal circuits improves executive function, working memory, attention, and impulse control. Unlike amphetamines, methylphenidate does not cause significant release of catecholamines — it is primarily a reuptake inhibitor. This mechanistic difference results in a lower abuse potential compared to amphetamines, though it remains a Schedule II controlled substance.",
    indications: [
      "ADHD (Attention-Deficit/Hyperactivity Disorder) — all presentations; age ≥ 6 years FDA-approved for most formulations",
      "Narcolepsy (less common use in children)",
      "Treatment-resistant depression (adjunct in adults — off-label)",
    ],
    contraindications: [
      "ABSOLUTE: Concurrent MAO inhibitor use or within 14 days (hypertensive crisis); severe anxiety, agitation, or tension; glaucoma; motor tics or Tourette syndrome if not controlled (relative)",
      "RELATIVE: Structural cardiac abnormalities, cardiomyopathy, serious cardiac arrhythmias (increased cardiovascular demand); family history of sudden cardiac death (evaluate before prescribing); active psychosis; substance use disorder; severe hypertension",
    ],
    sideEffects: {
      common: [
        "Decreased appetite / anorexia (give with or after meals to reduce nausea; often most pronounced at noon dose)",
        "Insomnia (give last dose ≤ 4–6 hours before bedtime; consider behavioral sleep interventions)",
        "Headache",
        "Abdominal pain (nausea — take with food)",
        "Increased heart rate and blood pressure (small but statistically significant — monitor at each visit)",
        "Emotional lability, irritability during medication 'rebound' (late afternoon/evening as medication wears off)",
      ],
      serious: [
        "Growth suppression: slight reduction in height velocity (~1–2 cm/year in long-term use); may attenuate with time; drug holidays during summer may help; monitor height on growth chart at each visit",
        "Cardiovascular events (rare in otherwise healthy children): chest pain, palpitations, syncope → hold medication and evaluate",
        "Psychosis or mania (rare — exacerbates underlying psychiatric disorder; discontinue and reassess diagnosis)",
        "Drug dependence and misuse (Schedule II; potential for diversion in adolescents and young adults)",
      ],
      blackBox: [
        "Drug dependence: assess for history of drug abuse or dependence before prescribing; frank abuse can occur with parenteral (IV) or intranasal misuse of the methylphenidate tablets",
      ],
    },
    interactions: [
      "MAO inhibitors: ABSOLUTE contraindication — risk of severe hypertensive crisis, hyperthermia, seizures, death",
      "Antihypertensives: methylphenidate may reduce antihypertensive efficacy",
      "Anticoagulants (warfarin), anticonvulsants (phenobarbital, phenytoin), tricyclic antidepressants: methylphenidate inhibits hepatic metabolism → increased drug levels; monitor and adjust doses",
      "Clonidine (guanfacine): concurrent use for ADHD + tics or sleep problems is common; potential additive cardiovascular effects (bradycardia, hypotension) — monitor heart rate and blood pressure",
    ],
    monitoring: [
      "Height and weight at EVERY visit (plot on growth curve — monitor for growth suppression)",
      "Blood pressure and heart rate at every visit",
      "Assess sleep patterns and appetite at every visit",
      "ADHD symptom rating scales (Vanderbilt or Conners') every 3–6 months from teachers and parents",
      "Psychiatric symptoms: mood, tics, psychosis, suicidal ideation",
      "Refer for EKG if: personal or family history of cardiac disease, palpitations, syncope, or abnormal cardiac exam",
    ],
    dosing: {
      adult: "Immediate-release (Ritalin): 5–20 mg BID-TID. Extended-release (Concerta): 18–72 mg once daily AM. Maximum: 60 mg/day for most formulations",
      pediatric: "Age 6+: Start 5 mg BID (IR) → titrate by 5–10 mg weekly. Target: 0.3–1 mg/kg/dose (max 60 mg/day). Extended-release (Concerta): Start 18 mg once daily AM → titrate to 36–54 mg. Daytrana patch (transdermal): 10–30 mg worn 9 hours",
      renal: "No specific dosing adjustment; use with caution in severe renal impairment",
      hepatic: "No specific dosing adjustment; use with caution",
    },
    clinicalPearls: [
      "When counseling about growth suppression from stimulants, reassure families that the effect is modest (~1–2 cm/year), may attenuate over time, and appears to normalize in final adult height for most children. The benefits of treating ADHD (improved academic performance, reduced injury risk, reduced substance abuse risk) generally outweigh the modest growth impact. Drug holidays during summer can partially recover growth velocity — however, this should only be done for children whose ADHD symptoms are purely academic (not behavioral or social year-round).",
      "If a parent reports their child takes methylphenidate and is having significant appetite suppression, counsel them to give medication with or after breakfast; use a high-calorie breakfast before the medication takes effect; offer high-calorie snacks after school when the medication is wearing off; and consider measuring medication-free drug holidays on weekends when caloric intake tends to be higher.",
    ],
    boardRecallTip: "Methylphenidate: DA/NE reuptake inhibitor; Schedule II. ADHD first-line (age ≥ 6). Monitor height, weight, BP, HR. Do NOT use with MAOIs. Side effects: anorexia, insomnia, growth suppression. Amphetamines (Adderall/Vyvanse) also first-line — different mechanism (also releases DA/NE).",
  },
  {
    id: "peds-drug-dexamethasone",
    rotation: "pediatrics",
    name: "Dexamethasone",
    class: "Long-Acting Glucocorticoid (Corticosteroid)",
    mechanismOfAction:
      "Dexamethasone is a synthetic fluorinated glucocorticoid with approximately 25× the anti-inflammatory potency of cortisol and negligible mineralocorticoid activity. It binds cytoplasmic glucocorticoid receptors (GR) → receptor-DNA complex enters nucleus → modulates gene transcription → reduces synthesis of pro-inflammatory cytokines (IL-1, IL-6, TNF-α), phospholipase A2 (reducing prostaglandin and leukotriene synthesis), histamine, and promotes anti-inflammatory proteins (lipocortin/annexin-1). In croup: reduces subglottic mucosal edema within 2–6 hours. In meningitis: reduces inflammatory cascade triggered by bacterial lysis, reducing BBB disruption and cochlear inflammation.",
    indications: [
      "Croup (laryngotracheobronchitis) — 0.6 mg/kg PO/IM single dose (most evidence; also 0.15 mg/kg if mild)",
      "Bacterial meningitis — 0.15 mg/kg IV q6h × 4 days (give before first antibiotic dose); reduces hearing loss",
      "Acute asthma exacerbation — 0.6 mg/kg PO/IM single dose (equivalent to prednisone × 5 days)",
      "Bronchopulmonary dysplasia (BPD) — low-dose course to facilitate extubation in extremely preterm infants (risk of brain harm limits use)",
      "Cerebral edema (tumors, abscess) — IV to reduce vasogenic edema",
      "Anaphylaxis (adjunct to epinephrine — not first-line)",
      "Adrenal insufficiency (crisis — higher doses required)",
      "Nausea prophylaxis (chemotherapy, post-operative)",
    ],
    contraindications: [
      "ABSOLUTE: Systemic fungal infection (without antifungal coverage); live vaccines during high-dose therapy",
      "RELATIVE: Diabetes mellitus (worsens hyperglycemia); active GI ulcer (add PPI); recent TB or untreated TB; viral infections (herpes, varicella — may disseminate); hypertension; psychosis (may precipitate steroid psychosis)",
    ],
    sideEffects: {
      common: [
        "Hyperglycemia (monitor blood glucose — especially in diabetics)",
        "Immunosuppression (increased susceptibility to infections — particularly with prolonged use)",
        "Mood changes, insomnia, behavioral agitation (short courses can cause steroid-induced behavioral changes in children — 'steroid rage')",
        "Increased appetite",
        "Transient facial flushing",
      ],
      serious: [
        "With prolonged use: hypothalamic-pituitary-adrenal (HPA) axis suppression → adrenal insufficiency on withdrawal; Cushingoid features; growth suppression in children; osteoporosis; cataracts; avascular necrosis of femoral head",
        "Psychiatric effects: psychosis, mania, severe depression (especially with high doses)",
        "Gastrointestinal: peptic ulceration, GI bleeding (particularly with concurrent NSAIDs)",
        "In neonates: periventricular leukomalacia (brain white matter injury) with high-dose early dexamethasone in premature infants — restrict use",
      ],
      blackBox: [],
    },
    interactions: [
      "CYP3A4 inducers (rifampin, phenytoin, carbamazepine): reduce dexamethasone levels — may need dose increase",
      "NSAIDs: additive GI ulceration risk — add PPI",
      "Antidiabetic agents: hyperglycemia may require dose adjustment of insulin or oral agents",
      "Live vaccines: may impair response and risk dissemination with high-dose or prolonged corticosteroids",
      "Cyclosporine: mutual CYP3A4 inhibition — increased levels of both drugs",
    ],
    monitoring: [
      "Glucose levels during high-dose therapy (especially diabetics)",
      "Blood pressure (corticosteroids can cause sodium retention — though less with dexamethasone than other steroids)",
      "HPA axis function with prolonged therapy: morning cortisol; taper slowly after > 2 weeks of high-dose therapy",
      "Growth velocity in children on chronic low-dose steroids (plot height at every visit)",
      "Bone density (DXA scan) for children on chronic corticosteroids",
    ],
    dosing: {
      adult: "Croup: 0.6 mg/kg PO/IM (max 10 mg) × 1 dose. Bacterial meningitis: 0.15 mg/kg IV q6h × 4 days. Cerebral edema: 10 mg IV × 1, then 4 mg q6h",
      pediatric: "Croup: 0.6 mg/kg PO/IM/IV × 1 dose (max 10 mg; 0.15 mg/kg may be effective for mild croup). Meningitis: 0.15 mg/kg IV q6h × 4 days (give before or with first antibiotic dose). Asthma exacerbation: 0.6 mg/kg PO/IM × 1 dose (max 10 mg) — equivalent to 5-day prednisone course",
      renal: "No dose adjustment required for renal impairment",
      hepatic: "Use with caution in severe hepatic impairment; monitor for enhanced or prolonged effect",
    },
    clinicalPearls: [
      "For croup, dexamethasone 0.6 mg/kg oral is equally effective as IM administration — the oral bioavailability is excellent (~80%). Studies have shown that even 0.15 mg/kg is effective for mild croup, though 0.6 mg/kg is standard for moderate-severe disease. A single dose reduces the rate of return to the ED by 50% and hospital admission by 75%.",
      "In bacterial meningitis, dexamethasone must be given BEFORE or with the first dose of antibiotics — the anti-inflammatory benefit is from reducing the cytokine storm triggered by bacterial lysis (from antibiotics), so it must be present when lysis begins. Evidence for benefit is strongest for Haemophilus influenzae type b (Hib) meningitis (reduces hearing loss by ~60%), moderate for pneumococcal, and uncertain for meningococcal meningitis.",
    ],
    boardRecallTip: "Dexamethasone: 0.6 mg/kg × 1 dose for croup. Meningitis: 0.15 mg/kg IV q6h × 4 days — give BEFORE antibiotics. Asthma: single dose replaces 5-day prednisone. Long-term: HPA suppression, growth suppression, Cushing, osteoporosis.",
  },
  {
    id: "peds-drug-palivizumab",
    rotation: "pediatrics",
    name: "Palivizumab (Synagis) / Nirsevimab (Beyfortus)",
    class: "Monoclonal Antibody (RSV Prophylaxis)",
    mechanismOfAction:
      "Palivizumab is a humanized IgG1 monoclonal antibody directed against the F (fusion) protein of RSV. The F protein mediates viral fusion with host cell membranes — neutralizing the F protein prevents viral entry into respiratory epithelial cells. Palivizumab provides passive immunity (does NOT stimulate active immune response — provides pre-formed antibodies). Half-life: ~20 days → monthly dosing required throughout RSV season. Nirsevimab (Beyfortus) is a longer-acting monoclonal antibody targeting the F protein with modifications that extend its half-life to ~70 days → single-dose administration for the entire RSV season.",
    indications: [
      "PALIVIZUMAB (monthly IM injections × 5 doses, October–March): Premature infants ≤ 29 weeks gestational age (in first RSV season); Chronic lung disease of prematurity (BPD — on supplemental O₂ within 6 months of RSV season start); Hemodynamically significant congenital heart disease (in first RSV season)",
      "NIRSEVIMAB (single IM dose): ALL infants born during or entering their first RSV season (October–March) — a major shift from targeted palivizumab prophylaxis to universal infant prophylaxis; Toddlers ≤ 24 months with high-risk conditions entering second RSV season",
    ],
    contraindications: [
      "Hypersensitivity to palivizumab or excipients",
      "NOT a substitute for RSV vaccine in adults (separate product)",
    ],
    sideEffects: {
      common: [
        "Injection site reactions (pain, erythema, swelling — most common)",
        "Fever",
        "Upper respiratory infection (coincidental — not caused by the monoclonal antibody)",
      ],
      serious: [
        "Anaphylaxis (rare — typically after repeat exposures)",
      ],
      blackBox: [],
    },
    interactions: [
      "No significant drug-drug interactions",
      "Does NOT affect response to routine childhood vaccines (unlike IVIG — palivizumab is a single specific antibody, not pooled immunoglobulin, and does not interfere with vaccine immunogenicity)",
    ],
    monitoring: [
      "Observe for 30 minutes post-injection for injection site reactions or allergic response",
      "Monitor weight — doses are weight-based; recalculate dose monthly as infant grows",
      "Palivizumab serum levels can be checked (> 40 mcg/mL is protective) — not routine but may be used in breakthrough RSV infection investigation",
    ],
    dosing: {
      adult: "Not indicated for adults (adult RSV vaccines are separate products — Abrysvo, mRESVIA)",
      pediatric: "Palivizumab: 15 mg/kg IM monthly × 5 doses (November–March). Nirsevimab: < 5 kg: 50 mg IM × 1 dose; ≥ 5 kg: 100 mg IM × 1 dose (single dose per RSV season). Maternal RSV vaccine (Abrysvo) 32–36 weeks gestation → single dose provides newborn passive immunity via IgG transfer; if maternal vaccine received, nirsevimab may not be needed (per evolving guidelines)",
      renal: "No adjustment required",
      hepatic: "No adjustment required",
    },
    clinicalPearls: [
      "Nirsevimab (Beyfortus) — approved by FDA in July 2023 — represents a paradigm shift in RSV prevention: from targeted prophylaxis for only high-risk infants to universal single-dose prophylaxis for ALL infants in their first RSV season. The MELODY trial showed 74.5% reduction in RSV-associated lower respiratory tract infection requiring medical attention. Supply constraints at launch limited initial administration, but expanded availability makes this a critical intervention for all newborns entering RSV season.",
      "Palivizumab does NOT interfere with vaccines — unlike IVIG (which contains multiple antibody specificities that neutralize live vaccine antigens), palivizumab is a single monoclonal antibody directed only against RSV F protein. Therefore, no delay in routine childhood vaccination schedule is required after palivizumab administration.",
    ],
    boardRecallTip: "Palivizumab: monthly IM × 5 doses for preemies ≤ 29 weeks + BPD + hemodynamically significant CHD. Nirsevimab (2023): single dose, ALL infants in first RSV season. Both target RSV F protein. Unlike IVIG, palivizumab does NOT delay vaccine schedule.",
  },
  {
    id: "peds-drug-iron-supplement",
    rotation: "pediatrics",
    name: "Ferrous Sulfate (Oral Iron Supplementation)",
    class: "Iron Supplement (Hematologic Agent)",
    mechanismOfAction:
      "Iron is an essential component of hemoglobin (the oxygen-transporting metalloprotein in red blood cells), myoglobin (oxygen storage in muscle), and numerous cytochrome enzymes in the mitochondrial electron transport chain. Ferrous sulfate (FeSO₄) provides ferrous iron (Fe²⁺), the reduced, bioavailable form that is absorbed in the duodenum and proximal jejunum via the divalent metal transporter 1 (DMT1). After absorption, iron is transported by transferrin to the bone marrow for incorporation into hemoglobin during erythropoiesis. Iron stores are replenished, increasing ferritin levels. Adequate iron is critical for neuronal development, myelination, and dopamine receptor function in the developing brain.",
    indications: [
      "Iron deficiency anemia (IDA) — treatment: 3–6 mg/kg/day elemental iron",
      "Iron deficiency without anemia — treatment: 3 mg/kg/day",
      "Prevention of IDA in at-risk infants: breastfed infants → 1 mg/kg/day starting at 4 months; formula-fed infants → use iron-fortified formula (≥ 6.7 mg/L iron)",
      "Premature infants: 2 mg/kg/day starting at 2–4 weeks until age 12 months",
      "Augmentation of erythropoiesis in chronic kidney disease or cancer (with erythropoietin therapy)",
    ],
    contraindications: [
      "ABSOLUTE: Hemochromatosis or hemosiderosis (iron overload disorders); polycythemia vera",
      "RELATIVE: Active GI inflammatory conditions (Crohn's disease, active peptic ulcer — may worsen inflammation; use IV iron if malabsorption or severe GI disease); receiving repeated blood transfusions (adequate iron from RBCs)",
    ],
    sideEffects: {
      common: [
        "GI side effects (most common reason for non-compliance): nausea, abdominal pain/cramping, constipation, diarrhea — dose-dependent; give with food to reduce GI effects (though reduces absorption by ~40%)",
        "Black/tarry stools (harmless, but can mimic melena — counsel parents to prevent alarm)",
        "Dental staining (liquid iron preparations — use dropper and rinse mouth; mix with juice if needed)",
      ],
      serious: [
        "Iron toxicity (overdose) — children are at high risk from accidental ingestion: Phase 1 (0–6 hours): vomiting, diarrhea, GI hemorrhage, abdominal pain; Phase 2 (6–24 hours): apparent improvement (deceptive); Phase 3 (12–48 hours): metabolic acidosis, hepatic necrosis, cardiovascular collapse, seizures. Treatment: deferoxamine (chelation) IV or IM",
      ],
      blackBox: [
        "Keep iron supplements out of reach of children — accidental pediatric iron poisoning is a leading cause of fatal poisoning in children < 6 years. Child-resistant packaging required.",
      ],
    },
    interactions: [
      "Antacids (calcium carbonate, magnesium hydroxide): bind iron in GI tract → reduce absorption → separate by 2 hours",
      "Proton pump inhibitors (PPIs): reduce gastric acid → ferric iron (Fe³⁺) cannot be reduced to ferrous (Fe²⁺) → impaired absorption",
      "Tetracyclines, fluoroquinolones, levothyroxine: iron chelates these drugs → reduced absorption of both; separate by 2–4 hours",
      "Vitamin C (ascorbic acid): enhances absorption of non-heme iron by keeping iron in ferrous (Fe²⁺) state; give together",
      "Calcium and zinc: compete for DMT1 transporter → avoid concurrent ingestion with cow's milk",
    ],
    monitoring: [
      "Hemoglobin/hematocrit at 4 weeks (expect increase ≥ 1 g/dL Hgb = response to iron therapy)",
      "Reticulocyte count at 5–7 days (should rise = bone marrow responding)",
      "Serum ferritin at 3 months (target > 20 ng/mL) — confirms stores replenished",
      "Continue iron therapy for 3 months AFTER Hgb normalizes to fully replete stores",
      "Monitor for GI side effects and compliance; if non-compliant → try liquid preparation, adjust timing, or switch to IV iron",
      "Stool guaiac testing if concern for GI blood loss causing IDA",
    ],
    dosing: {
      adult: "Ferrous sulfate 325 mg (65 mg elemental iron) PO BID-TID between meals. With food reduces GI side effects but absorption by 40%",
      pediatric: "Treatment: 3–6 mg/kg/day elemental iron ÷ 1–3 doses. Ferrous sulfate 15 mg/mL liquid: ~1 mL/kg/day elemental (confirm concentration of specific product). Prevention: 1 mg/kg/day (breastfed infants starting at 4 months). Preterm: 2 mg/kg/day starting at 2–4 weeks",
      renal: "No specific dose adjustment; monitor for iron overload in dialysis patients (erythropoietin therapy context)",
      hepatic: "Use caution in hemosiderosis or significant hepatic disease",
    },
    clinicalPearls: [
      "The therapeutic response to oral iron is a practical diagnostic test: reticulocytosis at 5–7 days after starting iron confirms that iron deficiency was the cause of anemia. Hemoglobin should rise by ≥ 1 g/dL within 4 weeks of appropriate dosing. Failure to respond suggests: (1) incorrect diagnosis, (2) ongoing blood loss exceeding replacement, (3) malabsorption (celiac disease, H. pylori gastritis — can cause iron deficiency refractory to oral iron), or (4) non-compliance.",
      "Excessive cow's milk intake (> 24 oz/day) is the single most common modifiable risk factor for IDA in toddlers in the US. Cow's milk is low in iron AND it displaces iron-rich foods from the diet AND contains proteins that can cause occult GI micro-hemorrhage (protein-induced enteropathy) in some toddlers. Counseling to limit cow's milk is as important as starting iron supplementation.",
    ],
    boardRecallTip: "Elemental iron 3–6 mg/kg/day. Give with vitamin C (enhances absorption). Avoid with milk/antacids/PPIs. Black stools = expected (not melena). Response: reticulocytes ↑ at 5–7 days; Hgb ↑ ≥ 1 g/dL at 4 weeks. Continue 3 months after Hgb normalizes. Iron overdose: deferoxamine chelation.",
  },
];
