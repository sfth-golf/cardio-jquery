const STORE1 = [
    {
        "name": "diagnosis-1",
        "code": "i40.91",
        "description": "Atrial Fibrillation and Flutter",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-2",
        "code": "I47.1",
        "description": "SVT",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-3",
        "code": "I47.9",
        "description": "PAT",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-4",
        "code": "I46.9",
        "description": "Cardiac Arrest, Cause Unspecified",
        "acuity": "0.302"
    },
    {
        "name": "diagnosis-5",
        "code": "I44.1",
        "description": "AVB 2nd degree",
        "acuity": "0"
    },
    {
        "name": "diagnosis-6",
        "code": "i42.2",
        "description": "AVB complete  3rd degree",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-7",
        "code": "I47.01",
        "description": "VT",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-8",
        "code": "I49.02",
        "description": "VF",
        "acuity": "0.302"
    },
    {
        "name": "diagnosis-9",
        "code": "I49.2",
        "description": "PJCs",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-10",
        "code": "I49.5",
        "description": "SSS",
        "acuity": "0.268"
    },
    {
        "name": "diagnosis-11",
        "code": "I49.3",
        "description": "PVCs",
        "acuity": "0"
    },
    {
        "name": "diagnosis-12",
        "code": "I49.9",
        "description": "Cardiac Arrhythmias, Unspecified",
        "acuity": "0"
    },
    {
        "name": "diagnosis-13",
        "code": "0079.01",
        "description": "Long-term (current) use of anti-coags.",
        "acuity": "0"
    }
]

const STORE1keywords = [
    "svt",
    "caf",
    "paf",
    "afib",
    "af",
    "arr",
    "chb",
    "fib",
    "avb",
    "sic",
    "sick",
    "sin",
    "sinus",
    "pvc",
    "vt"
]

const STORE2 = [
    {
        "name": "diagnosis-1",
        "code": "I50.9",
        "description": "CHF - unspec",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-2",
        "code": "I50.2-",
        "description": "Systolic HF",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-3",
        "code": "I50.3-",
        "description": "Diastolic HF",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-4",
        "code": "I50.4-",
        "description": "Combined HF",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-5",
        "code": "I50.81-",
        "description": "RV failure",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-6",
        "code": "I50.82-",
        "description": "Biventricular HF",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-7",
        "code": "I50.83-",
        "description": "High Output Heart Failure",
        "acuity": "0"
    },
    {
        "name": "diagnosis-8",
        "code": "I50.84-",
        "description": "End Stage Heart Failure",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-9",
        "code": "I50.89-",
        "description": "Other Heart Failure",
        "acuity": "0.323"
    }
]

const STORE2keywords = [
    "dia",
    "dias",
    "sys",
    "syst",
    "chf",
    "hf",
    "ef",
    "hfpef",
    "lvef",
    "lv",
    "hfref"
]

const STORE3 = [
    {
        "name": "diagnosis-1",
        "code": "i69.35-",
        "description": "Hemiplegia/Hemiparesis Following CVA - stroke",
        "acuity": "0.538"
    },
    {
        "name": "diagnosis-2",
        "code": "I63.9",
        "description": "CVA - stroke",
        "acuity": "0.263"
    },
    {
        "name": "diagnosis-3",
        "code": "I65.29",
        "description": "Occlusion and Stenosis of Unspec Carotid Artery",
        "acuity": "0"
    },
    {
        "name": "diagnosis-4",
        "code": "I67.2",
        "description": "Cerebral Atherosclerosis",
        "acuity": "0"
    },
    {
        "name": "diagnosis-5",
        "code": "I67.89",
        "description": "Other Cerebrovascular Disease",
        "acuity": "0"
    }
]
    /* diagnosis
    i69 .35 - Hemiplegia / Hemiparesis Following CVA - stroke 538
    I63 .9 CVA - stroke 263
    I65 .2 - Occlusion and Stenosis of Carotid Arteries 0
    I65 .29 Occlusion and Stenosis of Unspec Carotid Artery 0
    I67 .2 Cerebral Atherosclerosis 0
    I67 .81 Acute Cerebrovascular Insufficn 0
    I67 .82 Cerebral Ischemia 0
    I67 .89 Other Cerebrovascular Disease 0
    end diagnosis */

const STORE3keywords = [
    "car",
    "cva",
    "strok",
    "carotid",
    "cer",
    "stro",
    "str",
    "stroke"
]

const STORE4 = [
    {
        "name": "diagnosis-1",
        "code": "i10",
        "description": "HTN - essential hypertension",
        "acuity": "0"
    },
    {
        "name": "diagnosis-2",
        "code": "I11.0",
        "description": "HTN with HF - hypertension with HF",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-3",
        "code": "I13.0",
        "description": "Hypertensive Heart & CKD w/HF & Stage 1-4 CKD",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-4",
        "code": "I12.0",
        "description": "Hypertensive Heart Disease w/ Stage 5 CKD or End Stage Renal Disease",
        "acuity": "0.237"
    },
    {
        "name": "diagnosis-5",
        "code": "I13.2",
        "description": "Hypertensive Heart Disease w/HF & Stage 5 CKD or End Stage Renal Disease",
        "acuity": "0.237 + 0.323"
    },
    {
        "name": "diagnosis-6",
        "code": "I13.10",
        "description": "Hypertensive Heart & CKD w/out HF, w/ Stage 1-4 CKD",
        "acuity": "0"
    },
    {
        "name": "diagnosis-7",
        "code": "I11.9",
        "description": "Hypertensive Heart Disease WITHOUT HF",
        "acuity": "0"
    }
]

const STORE4keywords = [
    "hyp",
    "bp",
    "htn"
]
    /* diagnosis
    I10 HTN - essential hypertension "0"
    I11 .0 HTN with HF - hypertension with HF 323
    I13 .0 Hypertensive Heart & CKD w / HF & Stage 1 - 4 CKD "323"
    I12 .0 Hypertensive Heart Disease w / Stage 5 CKD or End Stage Renal Disease "237"
    I12 .9 Hypertensive Heart Disease w / Stage 1 - 4 CKD or Unspecified "0"
    I11 .9 Hypertensive Heart Disease WITHOUT HF "0"
    I13 .10 Hypertensive Heart & CKD w / out HF, w / Stage 1 - 4 CKD "0"
    I13 .11 Hypertensive Heart & CKD w / out HF, w / Stage 5 CKD "237"
    I13 .2 Hypertensive Heart Disease w / HF & Stage 5 CKD or End Stage Renal Disease "237 +  323"
    end diagnosis */

const STORE5 = [
    {
        "name": "diagnosis-1",
        "code": "I20.0",
        "description": "Unstable Angina",
        "acuity": "0.218"
    },
    {
        "name": "diagnosis-2",
        "code": "I20.9",
        "description": "Angina Pectoris, Unspecified",
        "acuity": "0.14"
    },
    {
        "name": "diagnosis-3",
        "code": "I21.02",
        "description": "STEMI LAD",
        "acuity": "0.233"
    },
    {
        "name": "diagnosis-4",
        "code": "I21.11",
        "description": "STEMI RCA",
        "acuity": "0.233"
    },
    {
        "name": "diagnosis-5",
        "code": "I21.21",
        "description": "STEMI LCX",
        "acuity": "0.233"
    },
    {
        "name": "diagnosis-6",
        "code": "I21.3",
        "description": "STEMI Unspec",
        "acuity": "0.233"
    },
    {
        "name": "diagnosis-7",
        "code": "I21.4",
        "description": "Non-STEMI  NSTEMI",
        "acuity": "0.233"
    },
    {
        "name": "diagnosis-8",
        "code": "I25.2",
        "description": "Old MI - healed",
        "acuity": "0"
    },
    {
        "name": "diagnosis-9",
        "code": "I25.10",
        "description": "ASHD without angina",
        "acuity": "0"
    },
    {
        "name": "diagnosis-10",
        "code": "I25.118",
        "description": "ASHD with other angina",
        "acuity": "0.14"
    },
    {
        "name": "diagnosis-11",
        "code": "I25.9",
        "description": "Chronic ischemic heart disease",
        "acuity": "0"
    },
    {
        "name": "diagnosis-12",
        "code": "Z98.61",
        "description": "PTCA angioplasty status",
        "acuity": "0"
    }
]

const STORE5keywords = [
    "stemi",
    "stem",
    "nstemi",
    "nstemi",
    "ashd",
    "cad",
    "ath",
    "ste",
    "ash",
    "mi",
    "angina"
]
    /* diagnosis
    I20 .0 Unstable Angina "0.218"
    I20 .9 Angina Pectoris, Unspecified "0.14"
    I21 .02 STEMI involv Left Ant Descending Cor Artery "0.233"
    I21 .11 STEMI involv Right Coronary Artery "0.233"
    I21 .21 STEMI involve Left Circumflex Coronary Art "0.275"
    I21 .3 STEMI Myocardial Infarction of Unspec Site "0.233"
    I21 .4 Non - STEMI - NSTEMI "0.233"
    I25 .2 Old Myocardial Infarction(healed MI)
    "0"
    I24 .9 Acute Ischemic Heart Disease, Unspecified "0.218"
    I25 .10 Atherosclerotic Heart Disease of Native Coronary Artery without angina pectoris "0"
    I25 .118 Atherscl Heart Disease of Native Cor Artery with Other Angina Pectoris "0.14"
    I25 .119 Atherscl Heart Disease of Native Cor Artery with Unspecified Angina Pectoris "0.14"
    I25 .9 Chronic Ischemia Heart Disease, Unspecified "0"
    I25 .700 Atherscl of CABG unspec with unstable ang "0.218"
    Z98 .61 Coronary Angioplasty Status "0"
    end diagnosis */

const STORE6 = [
    {
        "name": "diagnosis-1",
        "code": "I26.99",
        "description": "PE without cor pulmonale",
        "acuity": "0.400"
    },
    {
        "name": "diagnosis-2",
        "code": "I27.20",
        "description": "Pulmonary Hypertension",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-3",
        "code": "I27.81",
        "description": "Cor Pulmonale (Chronic)",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-4",
        "code": "I27.89",
        "description": "Other Spec Pulmonary Heart Disease",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-5",
        "code": "I27.9",
        "description": "Pulmonary Heart Disease, Unspec",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-6",
        "code": "J81.0",
        "description": "Acute Pulmonary Edema",
        "acuity": "0.302"
    }
]

const STORE6keywords = [
    "pulm",
    "pul",
    "ph",
    "rv",
    "pe"
]
    /* diagnosis
    I26 .99 PE without cor pulmonale 400
    I27 .20 Pulmonary Hypertension, Unspec 323
    I27 .81 Cor Pulmonale(Chronic) 323
    I27 .89 Other Spec Pulmonary Heart Dis 323
    I27 .9 Pulmonary Heart Disease, Unspec 323
    J81 .0 Acute Pulmonary Edema 302
    end diagnosis */

const STORE7 = [
    {
        "name": "diagnosis-1",
        "code": "I70.29",
        "description": "PVD of native arteries",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-2",
        "code": "I70.50",
        "description": "PVD with embolism",
        "acuity": "0.400"
    },
    {
        "name": "diagnosis-3",
        "code": "I70.30",
        "description": "PVD with ulcer RIGHT leg",
        "acuity": "1.461 + .535"
    },
    {
        "name": "diagnosis-4",
        "code": "I70.31",
        "description": "PVD with ulcer LEFT leg",
        "acuity": "1.461 + .535"
    },
    {
        "name": "diagnosis-5",
        "code": "I70.33",
        "description": "PVD of bypass graft",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-6",
        "code": "I70.34",
        "description": "CTO of artery of extremities",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-7",
        "code": "I70.35",
        "description": "Atherosclerosis of Other Arteries",
        "acuity": "0"
    },
    {
        "name": "diagnosis-8",
        "code": "I70.38",
        "description": "PVD with claudication",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-9",
        "code": "I70.39",
        "description": "Renal Art stenosis",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-10",
        "code": "I70.40",
        "description": "Amp - big toe",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-11",
        "code": "I70.41",
        "description": "Amp - other toes",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-12",
        "code": "I70.42",
        "description": "Amp - foot",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-13",
        "code": "I70.43",
        "description": "Amp - ankle",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-14",
        "code": "I70.44",
        "description": "BKA",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-15",
        "code": "I70.45",
        "description": "AKA",
        "acuity": "0.588"
    },
    {
        "name": "diagnosis-15",
        "code": "I70.48",
        "description": "Acquired absence of limb, unspec",
        "acuity": "0"
    },
    {
        "name": "diagnosis-16",
        "code": "I70.49",
        "description": "PVD unspec",
        "acuity": "0.298"
    }
]

const STORE7keywords = [
    "ulc",
    "ulcer",
    "cli",
    "pvd",
    "pad",
    "periph",
    "pta",
    "cla",
    "claudication",
    "clau",
    "claud",
    "aka",
    "bka",
    "amp"
]
    /* diagnosis
    I70 .29 PVD of native arteries "0.298"
    I70 .50 PVD with embolism "400"
    I70 .30 PVD with ulcer RIGHT leg "1.461 + .535"
    I70 .31 PVD with ulcer LEFT leg "1.461 + .535"
    I70 .32 PVD with ulcer - unspec "1.461 + .535"
    I70 .33 PVD of bypass graft "0.298"
    I70 .34 CTO of artery of extremities "0.298"
    I70 .35 Atherosclerosis of Other Arteries "0"
    I70 .36 Unspecified Atherosclerosis "0"
    I70 .37 Generalized Atherosclerosis "0"
    I70 .38 PVD with claudication "0.298"
    I70 .39 Renal artery stenosis "0.298"
    I70 .40 Amp - big toe "588"
    I70 .41 Amp - other toes "588"
    I70 .42 Amp - foot "588"
    I70 .43 Amp - ankle "588"
    I70 .44 BKA "588"
    I70 .46 AKA "588"
    I70 .48 Acquired absence of limb, unspec "0"
    I70 .49 PVD - unspec "298"
    end diagnosis */

const STORE8 = [
    {
        "name": "diagnosis-1",
        "code": "F10.20",
        "description": "Alcohol dependence",
        "acuity": "0.383"
    },
    {
        "name": "diagnosis-2",
        "code": "F10.21",
        "description": "Alcohol dependence in remission",
        "acuity": "0.383"
    },
    {
        "name": "diagnosis-3",
        "code": "F11.20",
        "description": "Opioid dependence",
        "acuity": "0.383"
    },
    {
        "name": "diagnosis-4",
        "code": "F11.21",
        "description": "Opioid dependence - in remission",
        "acuity": "0.383"
    },
    {
        "name": "diagnosis-5",
        "code": "G30",
        "description": "Parkinson’s Disease",
        "acuity": "0.674"
    },
    {
        "name": "diagnosis-6",
        "code": "G30.9",
        "description": "Alzheimer’s Disease",
        "acuity": "0.674"
    },
    {
        "name": "diagnosis-7",
        "code": "G35",
        "description": "Multiple Sclerosis",
        "acuity": "0.441"
    },
    {
        "name": "diagnosis-8",
        "code": "F32.0",
        "description": "Major dep disorder,single epi,mild",
        "acuity": "0.395"
    },
    {
        "name": "diagnosis-9",
        "code": "F32.1",
        "description": "Major dep disorder,single epi,mod",
        "acuity": "0.395"
    },
    {
        "name": "diagnosis-10",
        "code": "F33.40",
        "description": "Maj dep d/o,recurrent,in remission",
        "acuity": "0.395"
    },
    {
        "name": "diagnosis-11",
        "code": "F33.8",
        "description": "Other recurrent depress disorders",
        "acuity": "0.395"
    },
    {
        "name": "diagnosis-12",
        "code": "F33.9",
        "description": "Maj dep dsrdr, recurrent, unspec",
        "acuity": "0.395"
    },
    {
        "name": "diagnosis-13",
        "code": "F39",
        "description": "Unspec Mood (affective) Disorder",
        "acuity": "0.395"
    }
]
    /* diagnosis
    F10 .20 Alcoh dependence "383"
    F10 .21 Alcoh dependence, in remission "383"
    F11 .20 Opioid dependence "383"
    F11 .21 Opioid dep, in remission "383"
    G20 Parkinson’ s Disease "674"
    G30 .9 Alzheimer’ s Disease "0"
    G35 Multiple Sclerosis "441"
    F32 .0 Major dep disorder, single epi, mild "395"
    F32 .1 Major dep disorder, single epi, mod "395"
    F33 .40 Maj dep d / o, recurrent, in remission "395"
    F33 .8 Other recurrent depress disorders "395"
    F33 .9 Maj dep dsrdr, recurrent, unspec "395"
    F39 Unspec Mood(affective) Disorder "395"
    end diagnosis */

const STORE8keywords = [
    "par",
    "neu",
    "neur",
    "ms",
    "dep",
    "alc",
    "alco",
    "depr",
    "neur"
]

const STORE9 = [
    {
        "name": "diagnosis-1",
        "code": "I80.209",
        "description": "DVT unspecified lower extremity",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-2",
        "code": "I80.409",
        "description": "DVT Acute unspecified lower ext",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-3",
        "code": "I80.509",
        "description": "DVT Chronic Unspec lower extrem",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-4",
        "code": "I83.009",
        "description": "Varicose Veins unspecified lower extremity with ulcer",
        "acuity": "0.400"
    }
] 
    /* diagnosis
    I80 .209 DVT unspecified lower extremity "298"
    I82 .409 DVT Acute unspecified lower ext "298"
    I82 .509 DVT Chronic Unspec lower extrem "298"
    I83 .009 Varicose Veins unspecified lower extremity with ulcer unspec site "400"
    end diagnosis */

const STORE9keywords = [
    "dvt",
    "var",
    "vari",
    "vein",
    "venous ulcer",
    "venous"
]

const STORE10 = [
    {
        "name": "diagnosis-1",
        "code": "z94.1",
        "description": "Heart Transplant status",
        "acuity": "1"
    },
    {
        "name": "diagnosis-2",
        "code": "z94.2",
        "description": "Lung Transplant status",
        "acuity": "1"
    },
    {
        "name": "diagnosis-3",
        "code": "z94.3",
        "description": "Heart & Lungs Transplant status",
        "acuity": "1"
    },
    {
        "name": "diagnosis-4",
        "code": "z94.4",
        "description": "Liver Transplant status",
        "acuity": "1"
    },
    {
        "name": "diagnosis-5",
        "code": "z94.0",
        "description": "Kidney Transplant status",
        "acuity": "0"
    },
    {
        "name": "diagnosis-6",
        "code": "z93.0",
        "description": "Tracheostomy status",
        "acuity": "1.055"
    },
    {
        "name": "diagnosis-7",
        "code": "z93.0",
        "description": "Gastrostomy status",
        "acuity": "0.571"
    },
    {
        "name": "diagnosis-8",
        "code": "z93.3",
        "description": "Colostomy status",
        "acuity": "0.571"
    },
    {
        "name": "diagnosis-9",
        "code": "z93.3",
        "description": "Ileostomy status",
        "acuity": "0.571"
    },
    {
        "name": "diagnosis-10",
        "code": "z91.15",
        "description": "Pt’ s Noncompliance w / renal dialys.",
        "acuity": "0.422"
    }
]

const STORE10keywords = [
    "tra",
    "ostomy",
    "tran",
    "transplant",
    "osto",
    "ost",
    "sta",
    "status",
    "stat"
]
    /*
    diagnosis
    Z94 .1 Heart Transplant status "1"
    Z94 .2 Lung Transplant status "1"
    Z94 .3 Heart and Lungs transplant status "1"
    Z94 .4 Liver Transplant status "1"
    Z94 .0 Kidney Transplant status "0"
    Z93 .0 Tracheostomy status "1.055"
    Z93 .1 Gastrostomy status "571"
    Z93 .2 Ileostomy status "571"
    Z93 .3 Colostomy status "571"
    Z93 .4 Oth art.Opening of GI tract status "571"
    Z93 .50 Unspecified cystostomy status "571"
    Z93 .51 Cutaneous - vesicostomy status "571"
    Z93 .52 Appendico - vesicostomy status "571"
    Z93 .59 Other cystostomy status "571"
    Z93 .8 Other artificial opening status "571"
    Z91 .15 Pt’ s Noncompliance w / renal dialys.
    "422"
    end diagnosis */

const STORE11 = [
    {
        "name": "diagnosis-1",
        "code": "L40.59",
        "description": "Psoriatic arthropathy - other",
        "acuity": "0.423"
    },
    {
        "name": "diagnosis-2",
        "code": "M06.9",
        "description": "Rheumatoid arthritis, unspec",
        "acuity": "0.423"
    },
    {
        "name": "diagnosis-3",
        "code": "M32.9",
        "description": "SLE lupus",
        "acuity": "0.423"
    },
    {
        "name": "diagnosis-4",
        "code": "M30.0",
        "description": "Polyarteritis Nodosa",
        "acuity": "0.423"
    }
]

const STORE11keywords = [
    "pso",
    "sle",
    "lup",
    "auto",
    "aut",
    "pan"
]
    /* diagnosis
    L40 .59 Psoriatic arthropathy - other "423"
    M06 .9 Rheumatoid arthritis, unspec "423"
    M32 .9 SLE, unspec "423"
    M30 .0 Polyarteritis Nodosa "423"
    end diagnosis */

const STORE12 = [
    {
        "name": "diagnosis-1",
        "code": "I42.0",
        "description": "Dilated Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-2",
        "code": "I42.1",
        "description": "Obstr Hypertrophic Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-3",
        "code": "I42.2",
        "description": "Other Hypertrophic Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-4",
        "code": "I42.6",
        "description": "Alcoholic Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-5",
        "code": "I42.8",
        "description": "Other Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-6",
        "code": "I42.9",
        "description": "Unspec Cardiomyopathy",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-7",
        "code": "R57.0",
        "description": "Cardiogenic Shock",
        "acuity": "0.302"
    },
    {
        "name": "diagnosis-8",
        "code": "R51.4",
        "description": "Myocarditis, Unspecified",
        "acuity": "0.323"
    },
    {
        "name": "diagnosis-8",
        "code": "Z94.1",
        "description": "Heart Transplant Status",
        "acuity": "1.0"
    }
]

const STORE12keywords = [
    "car",
    "myo",
    "dil",
    "card",
    "cardiomyopathy",
    "lvd",
    "lvef",
    "hypertrophy",
    "hypertroph"
]
    /*
    diagnosis
    I42 .0 Dilated Cardiomyopathy "323"
    I42 .1 Obstr Hypertrophic Cardiomyopathy "323"
    I42 .2 Other Hypertrophic Cardiomyopathy "323"
    I42 .6 Alcoholic Cardiomyopathy "323"
    I42 .8 Other Cardiomyopathies "323"
    I42 .9 Cardiomyopathy, Unspecified "323"
    R57 .0 Cardiogenic Shock "302"
    I51 .4 Myocarditis, Unspecified "323"
    Z94 .1 Heart Transplant Status "1"
    end diagnosis */

const STORE13 = [
    {
        "name": "diagnosis-1",
        "code": "I70.0",
        "description": "Atherosclerosis of Aorta",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-2",
        "code": "I71.2",
        "description": "Thorac.Aortic Aneurysm, w / o rupt",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-3",
        "code": "I71.4",
        "description": "AAA, w / o rupture",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-4",
        "code": "I71.9",
        "description": "Aortic Aneurysm, unsp, w / o Ruptr",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-5",
        "code": "I72.9",
        "description": "Arterial Aneurysm",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-6",
        "code": "I77.810",
        "description": "Thoracic Aortic Ectasia",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-7",
        "code": "I77.811",
        "description": "Abdominal Aortic Ectasia",
        "acuity": "0.298"
    },
    {
        "name": "diagnosis-8",
        "code": "I77.811",
        "description": "Aortic Ectasia - unspec",
        "acuity": "0.298"
    }
]

const STORE13keywords = [
    "aaa",
    "aor",
    "aort",
    "aorta",
    "ane",
    "aneu",
    "aneurysm",
    "aneur",
    "abd"
]
    /* diagnosis
    I70 .0 Atherosclerosis of Aorta "298"
    I71 .2 Thorac.Aortic Aneurysm, w / o rupt "298"
    I71 .4 AAA, w / o rupture "298"
    I71 .9 Aortic Aneurysm, unsp, w / o Ruptr "298"
    I77 .810 Thoracic Aortic Ectasia "298"
    I77 .811 Abdominal Aortic Ectasia "298"
    I77 .819 Aortic Ectasia, Unspecified Site "298"
    I72 .9 Arterial Aneurysm "298"
    end diagnosis */

const STORE14 = [
    {
        "name": "diagnosis-1",
        "code": "n18.3",
        "description": "CKD Stage 3",
        "acuity": "0.114"
    },
    {
        "name": "diagnosis-2",
        "code": "n18.4",
        "description": "CKD Stage 4",
        "acuity": "0.237"
    },
    {
        "name": "diagnosis-3",
        "code": "n18.5",
        "description": "CKD Stage 5",
        "acuity": "0.237"
    },
    {
        "name": "diagnosis-4",
        "code": "n18.1",
        "description": "CKD Stage 1",
        "acuity": "0"
    },
    {
        "name": "diagnosis-5",
        "code": "n18.2",
        "description": "CKD Stage 2",
        "acuity": "0"
    },
    {
        "name": "diagnosis-6",
        "code": "n18.6",
        "description": "End stage renal disease",
        "acuity": "0.237"
    },
    {
        "name": "diagnosis-7",
        "code": "N19",
        "description": "Unspec kidney Failure",
        "acuity": "0"
    }
]

const STORE14keywords = [
    "ckd"
]
    /* diagnosis
    N18 .1 Chronic Kidney Disease, Stage 1 "0"
    N18 .2 Chr Kidney Disease, Stage 2(mild)
    "0"
    N18 .3 Chr Kidney Disease Stage 3(mod)
    "114"
    N18 .4 Chr Kidney Disease, Stage 4(sev)
    "237"
    N18 .5 Chr Kidney Disease, Stage 5 "237"
    N18 .6 End Stage Renal Disease "237"
    N19 Unspec Kid Failure(Uremia, NOS)
    "0"
    N25 .81 Secondary Hyperparathyroidism of Renal Origin "228"
    N28 .9 Disorder of kidney & ureter, unspec.
    "0"
    end diagnosis */

const STORE15 = [
    {
        "name": "diagnosis-1",
        "code": "E10.9",
        "description": "Type 1 DM without complication",
        "acuity": "0.104"
    },
    {
        "name": "diagnosis-2",
        "code": "E10.8",
        "description": "Type 1 DM wit unspec complications",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-3",
        "code": "Z79.4",
        "description": "Long Term (current) insulin use",
        "acuity": "0.104"
    },
    {
        "name": "diagnosis-5",
        "code": "E10 .621 ",
        "description": "Type 1 DM with foot ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-5",
        "code": "E10 .622 ",
        "description": "Type 1 DM with other skin ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-6",
        "code": "E10.21",
        "description": "Type 1 DM w / diabetic nephropathy",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-7",
        "code": "E10.59",
        "description": "Type 1 DM with PAD",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-8",
        "code": "E10.65",
        "description": "Type 1 DM with hyperglycemia",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-9",
        "code": "E10.40",
        "description": "Type 1 DM with neuropathy unspec",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-10",
        "code": "E10.4",
        "description": "Type 1 DM with autonomic neuropathy",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-11",
        "code": "E10.51",
        "description": "Type 1 DM diabetic peripheral angiopathy without gangrene",
        "acuity": ".298 + .318"
    },
    {
        "name": "diagnosis-12",
        "code": "E10.51",
        "description": "Type 1 DM diabetic peripheral angiopathy with gangrene",
        "acuity": "1.461 + .298 + .318"
    },
    {
        "name": "diagnosis-13",
        "code": "E10.621",
        "description": "Type 1 DM with foot ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-14",
        "code": "E10.630",
        "description": "Type 1 DM with periodontal disease",
        "acuity": ".585 + .318"
    }
]

const STORE15keywords = [
    "dm1"
]
    /* diagnosis
    Diabetes Type 1

    E10 .9 Type 2 DM without complication 0.104
    E10 .8 Type 2 DM with unspec complication 0.318
    Z79 .4 Long - term(current) insulin use 0.104
    E10 .21 Type 2 DM w / diabetic nephropathy 0.318
    E10 .22 Type 2 DM w / diabetic chr kidney disease 0.318
    E10 .59 Type 2 DM with PAD 0.318
    E10 .65 Type 2 DM with hyperglycemia 0.318
    E10 .40 Type 2 DM with diabetic neuropathy, unsp 0.318
    E10 .41 Type 2 DM with diabetic mononeuropathy 0.318
    E10 .42 Type 2 DM with diabetic polyneuropathy 0.318
    E10 .43 Type 2 DM w / diab autonomic(poly) neurop 0.318
    E10 .44 Type 2 DM with diabetic amyotrophy 0.318
    E10 .49 Type 2 DM w / other diabetic neuro compl 0.318
    E10 .51 Type 2 DM w / diabetic peripheral angiopathy without gangrene .298 + .318
    E10 .52 Type 2 DM w / diabetic peripheral angiopathy w / gangrene 1.461 + .298 + .318
    E10 .59 Type 2 DM w / other circulatory complicatn 0.318
    E10 .610 Type 2 DM w / diab neuropathic arthropth 0.318
    E10 .618 Type 2 DM w / other diabetic arthropathy 0.318
    E10 .620 Type 2 DM w / diabetic dermatitis 0.318
    E10 .621 Type 2 DM with foot ulcer .585 + .318
    E10 .622 Type 2 DM with other skin ulcer .535 + .318
    E10 .628 Type 2 DM with other skin condition 0.318
    E10 .630 Type 2 DM with periodontal disease 0.318
    E10 .638 Type 2 DM w / other oral complications 0.318
    E10 .641 Type 2 DM with hypoglycemia w / coma 0.318
    E10 .649 Type 2 DM w / hypoglycemia w / out coma 0.318
    E10 .69 Type 2 DM with other spec complication 0.318
    E10 .65 Type 2 DM with hyperglycemia–(“poorly controlled”) 0.318
    diagnosis end */

const STORE16 = [
    {
        "name": "diagnosis-1",
        "code": "E11.9",
        "description": "Type 2 DM without complication",
        "acuity": "0.104"
    },
    {
        "name": "diagnosis-2",
        "code": "E11.8",
        "description": "Type 2 DM wit unspec complications",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-3",
        "code": "Z79.4",
        "description": "Long Term (current) insulin use",
        "acuity": "0.104"
    },
    {
        "name": "diagnosis-5",
        "code": "E11 .621 ",
        "description": "Type 2 DM with foot ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-5",
        "code": "E11 .622 ",
        "description": "Type 2 DM with other skin ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-6",
        "code": "E11.21",
        "description": "Type 2 DM w / diabetic nephropathy",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-7",
        "code": "E11.59",
        "description": "Type 2 DM with PAD",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-8",
        "code": "E11.65",
        "description": "Type 2 DM with hyperglycemia",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-9",
        "code": "E11.40",
        "description": "Type 2 DM with neuropathy unspec",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-10",
        "code": "E11.4",
        "description": "Type 2 DM with autonomic neuropathy",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-11",
        "code": "E11.51",
        "description": "Type 2 DM diabetic peripheral angiopathy without gangrene",
        "acuity": ".298 + .318"
    },
    {
        "name": "diagnosis-12",
        "code": "E11.51",
        "description": "Type 2 DM diabetic peripheral angiopathy with gangrene",
        "acuity": "1.461 + .298 + .318"
    },
    {
        "name": "diagnosis-13",
        "code": "E11.621",
        "description": "Type 2 DM with foot ulcer",
        "acuity": ".585 + .318"
    },
    {
        "name": "diagnosis-14",
        "code": "E11.630",
        "description": "Type 2 DM with periodontal disease",
        "acuity": ".585 + .318"
    }
]

const STORE16keywords = [
    "dm",
    "dia",
    "diab",
    "diabetes",
    "diabet",
    "diabete",
    "dm2"
]
    /* diagnosis
    E11 .9 Type 2 DM without complication 0.104
    E11 .8 Type 2 DM with unspec complication 0.318
    Z79 .4 Long - term(current) insulin use 0.104
    E11 .21 Type 2 DM w / diabetic nephropathy 0.318
    E11 .22 Type 2 DM w / diabetic chr kidney disease 0.318
    E11 .59 Type 2 DM with PAD 0.318
    E11 .65 Type 2 DM with hyperglycemia 0.318
    E11 .40 Type 2 DM with diabetic neuropathy, unsp 0.318
    E11 .41 Type 2 DM with diabetic mononeuropathy 0.318
    E11 .42 Type 2 DM with diabetic polyneuropathy 0.318
    E11 .43 Type 2 DM w / diab autonomic(poly) neurop 0.318
    E11 .44 Type 2 DM with diabetic amyotrophy 0.318
    E11 .49 Type 2 DM w / other diabetic neuro compl 0.318
    E11 .51 Type 2 DM w / diabetic peripheral angiopathy without gangrene .298 + .318
    E11 .52 Type 2 DM w / diabetic peripheral angiopathy w / gangrene 1.461 + .298 + .318
    E11 .59 Type 2 DM w / other circulatory complicatn 0.318
    E11 .610 Type 2 DM w / diab neuropathic arthropth 0.318
    E11 .618 Type 2 DM w / other diabetic arthropathy 0.318
    E11 .620 Type 2 DM w / diabetic dermatitis 0.318
    E11 .621 Type 2 DM with foot ulcer .585 + .318
    E11 .622 Type 2 DM with other skin ulcer .535 + .318
    E11 .628 Type 2 DM with other skin condition 0.318
    E11 .630 Type 2 DM with periodontal disease 0.318
    E11 .638 Type 2 DM w / other oral complications 0.318
    E11 .641 Type 2 DM with hypoglycemia w / coma 0.318
    E11 .649 Type 2 DM w / hypoglycemia w / out coma 0.318
    E11 .69 Type 2 DM with other spec complication 0.318
    E11 .65 Type 2 DM with hyperglycemia–(“poorly controlled”) 0.318
    diagnosis end */

const STORE17 = [
    {
        "name": "diagnosis-1",
        "code": "E11.311",
        "description": "Type 2 DM w/ unspec diabetic retinopathy w/macular edema",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-2",
        "code": "E11.319",
        "description": "Type 2 DM w/ unspec diabetic retinopathy without macular edema",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-3",
        "code": "E11.36",
        "description": "Type 2 DM w/ diabetic cataract",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-4",
        "code": "E10.311",
        "description": "Type 2 DM w/ unspec diabetic retinopathy w/macular edema",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-5",
        "code": "E10.319",
        "description": "Type 2 DM w/ unspec diabetic retinopathy without macular edema",
        "acuity": "0.318"
    },
    {
        "name": "diagnosis-6",
        "code": "E10.36",
        "description": "Type 2 DM w/ diabetic cataract",
        "acuity": "0.318"
    }
]

const STORE17keywords = [
    "eye",
    "ret",
    "mac",
    "retino",
    "macular",
    "retinopathy",
    "ophth",
    "oph",
    "opht",
    "reti"
]
    /* diagnosis
    E11 .311 Type 2 DM w / unspec diabetic retinopathy w / macular edema 0.318
    E11 .319 Type 2 DM w / unspec diabetic retinopathy without macular edema 0.318
    E11 .36 Type2 DM w / diabetic cataract 318
    end diagnosis */

const STORE18 = [
    {
        "name": "diagnosis-1",
        "code": "E66.01",
        "description": "Morbid obesity",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-2",
        "code": "E66.3",
        "description": "Overweight",
        "acuity": "0"
    },
    {
        "name": "diagnosis-3",
        "code": "E66.9",
        "description": "Obesity unspec",
        "acuity": "0"
    },
    {
        "name": "diagnosis-4",
        "code": "Z68.1",
        "description": "BMI 19.9 or less, Adult",
        "acuity": "0"
    },
    {
        "name": "diagnosis-5",
        "code": "Z68.41",
        "description": "BMI 40.0 - 44.9, Adult",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-6",
        "code": "Z68.42",
        "description": "BMI 45.0 - 49.9, Adult",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-6",
        "code": "Z68.43",
        "description": "BMI 50.0– 55.9, Adult",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-7",
        "code": "Z68.44",
        "description": "BMI 60.0– 69.9, Adult",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-8",
        "code": "Z68.45",
        "description": "BMI 70 or greater, Adult",
        "acuity": "0.273"
    },
    {
        "name": "diagnosis-9",
        "code": "E46",
        "description": "Unspecified Protein - Cal Malnutrn",
        "acuity": "0.545"
    },
] 

const STORE18keywords = [
    "obesity",
    "obe",
    "morbid",
    "mor",
    "bmi",
    "malnutrn",
    "maln",
    "mal"
]
    /* diagnosis

    E66 .01 Morbid(severe) obesity due to excess calories "273"
    E66 .09 Other Obesity due to Excess Calories "0"
    E66 .1 Drug - induced Obesity "0"
    E66 .2 Morbid obesity with alveolar hypoventilation "273"
    E66 .3 Overweight "0"
    E66 .8 Other Obesity "0"
    E66 .9 Obesity, Unspecified "0"
    Z68 .1 BMI 19.9 or less, Adult "0"
    Z68 .41 BMI 40.0 - 44.9, Adult "273"
    Z68 .42 BMI 45.0 - 49.9, Adult "273"
    Z68 .43 BMI 50.0– 55.9, Adult "273"
    Z68 .44 BMI 60.0– 69.9, Adult "273"
    Z68 .45 BMI 70 or greater, Adult "273"
    E46 Unspecified Protein - Cal Malnutrn "545"
    end diagnosis */

const STORE19 = [
    {
        "name": "diagnosis-1",
        "code": "J44.9",
        "description": "COPD unspec",
        "acuity": "0.328"
    },
    {
        "name": "diagnosis-2",
        "code": "J41.0",
        "description": "Simple Chronic Bronchitis",
        "acuity": "0.328"
    },
    {
        "name": "diagnosis-3",
        "code": "J42.0",
        "description": "Chronic Bronchitis - unspec",
        "acuity": "0.328"
    },
    {
        "name": "diagnosis-4",
        "code": "J43.9",
        "description": "Emphysema",
        "acuity": "0.328"
    },
    {
        "name": "diagnosis-5",
        "code": "J44.1",
        "description": "COPD with Acute Exacerbation",
        "acuity": "0.328"
    },
    {
        "name": "diagnosis-6",
        "code": "J84.10",
        "description": "Pulmonary fibrosis, unspecified",
        "acuity": "0.209"
    },
    {
        "name": "diagnosis-6",
        "code": "J84.9",
        "description": "Interstitial pulmonary disease, unspec",
        "acuity": "0.209"
    },
    {
        "name": "diagnosis-7",
        "code": "J96.10",
        "description": "Chronic respiratory failure, unspecified whether w/hypoxia or hypercapnia",
        "acuity": "0.302"
    }
]
    /* diagnosis
    J44 .9 "COPD, Unspecified"
    0.328
    J41 .0 "Simple Chronic Bronchitis"
    0.328
    J42 "Unspec Chronic Bronchitis (Chronic Bronchitis)"
    0.328
    J43 .9 "Emphysema"
    0.328
    J44 .0 "COPD w/Acute Lower Respiratory Infection, w/Acute Bronchitis"
    0.328
    J44 .1 "COPD with Acute Exacerbation"
    0.328
    J84 .10 "Pulmonary fibrosis, unspecified"
    0.209
    J84 .9 "Interstitial pulmonary disease, unspec"
    0.209
    J96 .10 "Chronic respiratory failure, "
    0.302
    end diagnosis */

const STORE19keywords = [
    "copd",
    "pulm",
    "bronchitis",
    "cop",
    "pul",
    "bro"
]
