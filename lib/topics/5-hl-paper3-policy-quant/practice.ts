import type { MarkBand, TopicPractice } from "../../types";

const P3_POLICY_MARKBANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor:
      "A policy is stated vaguely with minimal or inaccurate economic theory and almost no reference to the stimulus text or quantitative data.",
    indicators: ["No causal mechanism", "Ignores stimulus tables and prior calculations"],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor:
      "A policy (or unfocused list of multiple policies) is identified with basic economic theory and superficial reference to text/data; evaluation is absent or asserted.",
    indicators: ["Lists several generic policies instead of committing to one", "Minimal synthesis with calculated figures"],
  },
  {
    band: "5–7",
    marks: [5, 7],
    descriptor:
      "One clear policy is recommended and explained using accurate economic theory and explicit references to the stimulus text/data; valid strengths and limitations are considered though synthesis may be uneven.",
    indicators: ["Clear transmission mechanism", "Uses stimulus figures and identifies at least one real trade-off"],
  },
  {
    band: "8–10",
    marks: [8, 10],
    descriptor:
      "A decisive, fully justified policy recommendation is tightly anchored in stimulus text, data, and prior Paper 3 calculations, backed by rigorous causal transmission and balanced evaluation of stakeholder, short- vs long-run, elasticity, and fiscal/external trade-offs plus targeted complementary support.",
    indicators: [
      "Explicit quantitative synthesis from stimulus and earlier sub-parts",
      "Why the primary policy outperforms a competing alternative in this context",
      "Deep SLAP trade-off evaluation plus one targeted complementary mitigator",
    ],
  },
];

const SIX_MARK_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Limited understanding; points are asserted without economic transmission or quantitative reasoning.",
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Sound explanation of two relevant economic mechanisms or limitations, with some gaps in depth or evaluation.",
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Thorough, well-structured economic analysis integrating exact quantitative/diagrammatic logic and nuanced evaluation.",
  },
];

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ (10 HL Paper 3 diagnostic questions: 7 short + 3 written)
  // =========================================================================
  quiz: [
    {
      id: "5-hl-paper3-policy-quant-quiz-q01",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "p3-micro-quantitative",
      question:
        "A competitive market has demand {{Q_d = 90 - 3P}} and supply {{Q_s = 10 + 2P}}, where {{P}} is in dollars. Calculate the equilibrium price {{P_e}} (in $).",
      answer: { type: "number", value: 16, display: "$16" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "Check your constant terms: 90 − 10 = 80, not 100." },
        { spec: { type: "number", value: 42 }, feedback: "42 is the equilibrium quantity Qe, not the equilibrium price Pe." },
      ],
      solution: [
        "Set Qd = Qs: 90 − 3P = 10 + 2P.",
        "Collect terms: 80 = 5P → Pe = $16.",
        "Cross-check quantity: Qd = 90 − 48 = 42 and Qs = 10 + 32 = 42.",
      ],
      hints: ["Set 90 − 3P equal to 10 + 2P and solve for P."],
      strategy: "Equate Qd and Qs and cross-check both sides",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q02",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "p3-micro-quantitative",
      question:
        "In a market with {{Q_d = 120 - 2P}} and {{Q_s = -30 + 3P}} (pre-tax {{P_e = $30}}, {{Q_e = 60}} units), the government levies a **$10 per-unit specific indirect tax**. Calculate the deadweight welfare loss (in $).",
      answer: { type: "number", value: 60, display: "$60" },
      traps: [
        { spec: { type: "number", value: 120 }, feedback: "Remember a deadweight welfare loss is a triangle: multiply by 1/2." },
        { spec: { type: "number", value: 480 }, feedback: "$480 is total government tax revenue ($10 × 48), not deadweight loss." },
      ],
      solution: [
        "Post-tax supply: Qs' = −30 + 3(P − 10) = −60 + 3P.",
        "Solve 120 − 2Pc = −60 + 3Pc → 5Pc = 180 → Pc = $36, Qt = 120 − 72 = 48 units.",
        "Deadweight loss = 1/2 × t × (Qe − Qt) = 1/2 × 10 × (60 − 48) = $60.",
      ],
      hints: [
        "Substitute (P − 10) for P in Qs to find the post-tax supply equation.",
        "Find the new equilibrium quantity Qt, then compute 1/2 × 10 × (60 − Qt).",
      ],
      strategy: "Shift supply by (P − t) before applying 1/2 × t × ΔQ",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q03",
      kind: "short",
      level: "HL",
      difficulty: "warmup",
      commandTerm: "Calculate",
      guideRef: "p3-macro-quantitative",
      question:
        "An economy's Nominal GDP is **$630 billion** and its GDP deflator is **105** (base = 100). Calculate Real GDP (in $ billion).",
      answer: { type: "number", value: 600, display: "$600 billion" },
      traps: [
        { spec: { type: "number", value: 661.5 }, feedback: "Divide by (Deflator / 100) rather than multiplying by it." },
        { spec: { type: "number", value: 598.5 }, feedback: "Deflating by 105 means dividing by 1.05, not subtracting 5%." },
      ],
      solution: [
        "Apply Real GDP = (Nominal GDP / GDP Deflator) × 100.",
        "Real GDP = (630 / 105) × 100 = $600 billion.",
      ],
      hints: ["Divide Nominal GDP by 105 and multiply by 100."],
      strategy: "Real GDP = (Nominal / Deflator) × 100",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q04",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "p3-macro-quantitative",
      question:
        "Progressive income tax brackets are: **$0–$10,000 at 0%**, **$10,001–$40,000 at 20%**, and **above $40,000 at 30%**. Calculate the total income tax paid (in $) by a worker earning **$50,000**.",
      answer: { type: "number", value: 9000, display: "$9,000" },
      traps: [
        { spec: { type: "number", value: 15000 }, feedback: "Never multiply the entire $50,000 by the 30% top marginal rate — slice by bracket!" },
        { spec: { type: "number", value: 11000 }, feedback: "Check the width of the 20% band: $40,000 − $10,000 = $30,000 (not $40,000)." },
      ],
      solution: [
        "First $10,000 at 0% = $0.",
        "Next $30,000 ($10,001–$40,000) at 20% = $6,000.",
        "Final $10,000 ($40,001–$50,000) at 30% = $3,000.",
        "Total income tax = $0 + $6,000 + $3,000 = $9,000.",
      ],
      hints: [
        "Break $50,000 into three slices: $10,000, $30,000, and $10,000.",
        "Tax each slice at 0%, 20%, and 30% respectively, then sum.",
      ],
      strategy: "Slice progressive tax income bracket by bracket",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q05",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "p3-macro-quantitative",
      question:
        "An open economy has {{MPS = 0.12}}, {{MPT = 0.13}}, and {{MPM = 0.15}}, with a deflationary gap of **$50 billion**. Calculate the initial increase in government spending {{Delta G}} (in $ billion) needed to close the gap.",
      answer: { type: "number", value: 20, display: "$20 billion" },
      traps: [
        { spec: { type: "number", value: 125 }, feedback: "Divide the gap by k (50 / 2.5), rather than multiplying by k." },
        { spec: { type: "number", value: 12.5 }, feedback: "Include MPM = 0.15 in total marginal leakages: MPW = 0.40, not 0.25." },
      ],
      solution: [
        "Sum all three marginal leakages: MPW = 0.12 + 0.13 + 0.15 = 0.40.",
        "Multiplier k = 1 / 0.40 = 2.5.",
        "Required ΔG = Gap / k = $50 bn / 2.5 = $20 billion.",
      ],
      hints: [
        "First find MPW = MPS + MPT + MPM, then take k = 1 / MPW.",
        "Divide the $50 billion gap by k.",
      ],
      strategy: "Compute k = 1/(MPS+MPT+MPM) then ΔG = Gap / k",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q06",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "p3-global-quantitative",
      question:
        "A **$20 per-unit tariff** lifts domestic supply from {{Q_1 = 25}} to {{Q_3 = 35}} units and reduces domestic demand from {{Q_2 = 95}} to {{Q_4 = 80}} units. Calculate the **total deadweight welfare loss** (in $).",
      answer: { type: "number", value: 250, display: "$250" },
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "$100 is only production DWL; add the $150 consumption DWL triangle too." },
        { spec: { type: "number", value: 150 }, feedback: "$150 is only consumption DWL; add the $100 production DWL triangle too." },
        { spec: { type: "number", value: 500 }, feedback: "Don't forget the 1/2 factor for triangular areas!" },
      ],
      solution: [
        "Production DWL = 1/2 × (35 − 25) × $20 = $100.",
        "Consumption DWL = 1/2 × (95 − 80) × $20 = $150.",
        "Total deadweight welfare loss = $100 + $150 = $250.",
      ],
      hints: [
        "Compute both triangles: 1/2 × t × (Q3 − Q1) and 1/2 × t × (Q2 − Q4).",
        "Sum the production loss and consumption loss.",
      ],
      strategy: "Sum both tariff DWL triangles",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q07",
      kind: "short",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      guideRef: "p3-global-quantitative",
      question:
        "A country's Balance of Payments records a Current Account balance of **−$12.0 billion**, a Capital Account balance of **+$1.0 billion**, and Net Errors & Omissions of **+$0.5 billion**. Calculate its **Financial Account** balance (in $ billion).",
      answer: { type: "number", value: 10.5, display: "$10.5 billion" },
      traps: [
        { spec: { type: "number", value: -10.5 }, feedback: "Check the sign: a Current Account deficit must be financed by a POSITIVE Financial Account surplus." },
        { spec: { type: "number", value: 12 }, feedback: "Include both Capital Account (+1.0) and Net Errors & Omissions (+0.5) in the zero-sum identity." },
      ],
      solution: [
        "Balance of Payments identity: CA + KA + FA + NEO = 0.",
        "−12.0 + 1.0 + FA + 0.5 = 0 → −10.5 + FA = 0.",
        "FA = +$10.5 billion (net financial inflow).",
      ],
      hints: [
        "Write CA + KA + FA + NEO = 0 and substitute the three given balances.",
        "Solve −10.5 + FA = 0.",
      ],
      strategy: "Apply CA + KA + FA + NEO = 0 with exact signs",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q08",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Distinguish",
      guideRef: "p3-macro-quantitative",
      marks: 3,
      question:
        "Distinguish between the marginal rate and the average rate of taxation for an individual paying progressive personal income tax.",
      modelAnswer:
        "The marginal rate is the percentage charged specifically on the next additional dollar earned, corresponding to the taxpayer's top income bracket (change in tax divided by change in income). By contrast, the average rate equals total tax paid divided by gross income expressed as a percentage. Because lower slices of earnings face lower or zero statutory bands, the average burden stays strictly below the top-bracket figure once taxable thresholds are crossed.",
      markScheme: [
        { point: "Defines marginal rate as the percentage levied on an additional dollar of earnings / top bracket", keywords: ["additional dollar", "next dollar", "top income bracket", "change in tax"] },
        { point: "Defines average rate as total tax paid divided by gross income (× 100%)", keywords: ["total tax paid divided by gross income", "total tax divided by"] },
        { point: "Explains that under progressivity, lower bands keep average rate strictly below marginal rate", keywords: ["strictly below", "lower slices", "zero statutory bands"] },
      ],
      hints: [
        "Contrast the tax charged on the NEXT dollar earned with total tax as a share of total earnings.",
        "State which rate is always smaller once a worker moves past the tax-free threshold.",
      ],
      strategy: "Give both exact definitions plus their inequality relationship",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q09",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      guideRef: "p3-global-quantitative",
      marks: 3,
      question:
        "Explain mathematically why a 20% fall in the value of Currency A against Currency B implies a 25% rise in the value of Currency B against Currency A.",
      modelAnswer:
        "The two currencies are reciprocal exchange rates: if 1 A initially buys 1.00 B and drops by one-fifth to 0.80 B, then 1 B now purchases 1 divided by 0.80, which equals 1.25 units of A. Because the percentage calculation for B uses the smaller denominator after inversion, 0.25 over 1.00 produces a one-quarter appreciation rather than one-fifth. In general, dividing 1 by 0.80 yields 1.25, confirming asymmetric bilateral swings.",
      markScheme: [
        { point: "States that bilateral exchange rates are reciprocals (1 / e)", keywords: ["reciprocal", "inversion", "1 divided by"] },
        { point: "Shows numerical inversion: 1 / 0.80 = 1.25 units of A per B", keywords: ["1.25", "0.80"] },
        { point: "Explains the change in base/denominator creates asymmetric bilateral percentage changes", keywords: ["smaller denominator", "asymmetric", "one-quarter"] },
      ],
      hints: [
        "Set an example initial rate of 1 A = 1.00 B, drop it by 20% to 0.80 B, then invert to find how many A one unit of B buys.",
        "Note why changing the denominator makes the reciprocal percentage larger.",
      ],
      strategy: "Use a clean 1.00 → 0.80 reciprocal example to prove asymmetry",
    },
    {
      id: "5-hl-paper3-policy-quant-quiz-q10",
      kind: "written",
      level: "HL",
      difficulty: "core",
      commandTerm: "Outline",
      guideRef: "p3-ten-mark-policy",
      marks: 4,
      question:
        "Outline four essential elements required to lift a 10-mark HL Paper 3 Policy Recommendation from Band 3–4 into Band 8–10.",
      modelAnswer:
        "First, commit decisively to one coherent primary intervention instead of offering a vague shopping list of unrelated options. Second, anchor the justification tightly in stimulus figures alongside your own earlier numerical answers rather than external anecdotes. Third, trace the full economic transmission mechanism with accurate curve shifts explaining why this choice outperforms an alternative. Fourth, evaluate context-specific trade-offs across stakeholders, time lags, elasticities, or fiscal constraints, adding one targeted complementary mitigator.",
      markScheme: [
        { point: "Commit decisively to one primary policy (avoiding unfocused shopping lists)", keywords: ["one coherent primary", "shopping list", "commit decisively"] },
        { point: "Integrate specific stimulus figures and earlier quantitative calculations", keywords: ["earlier numerical", "stimulus figures", "anchor"] },
        { point: "Trace rigorous causal transmission mechanism and curve shifts", keywords: ["transmission mechanism", "curve shifts"] },
        { point: "Evaluate context-specific trade-offs (stakeholders, lags, elasticities, fiscal limits) + complementary mitigator", keywords: ["complementary mitigator", "trade-offs", "time lags", "elasticities"] },
      ],
      hints: [
        "Recall the five letters of the D-A-T-E-C blueprint.",
        "Mention commitment, quantitative anchoring, causal transmission, and SLAP evaluation + complementary policy.",
      ],
      strategy: "Map every mark directly to D-A-T-E-C",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS (EXACTLY 2 HL PAPER 3 PAPERS × 15 Qs = 30 Qs)
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PAPER 1: MICRO & MACRO QUANTITATIVE CHAINS + TWO 10M POLICY QUESTIONS
    // -----------------------------------------------------------------------
    {
      id: "5-hl-paper3-policy-quant-p1",
      title: "HL Paper 3 Practice Paper 1: Micro & Macro Modelling + 10m Policy",
      level: "HL",
      questions: [
        // --- Case Study A: Republic of Veridia (Micro Fuel Tax & Rail Firm) ---
        {
          id: "5-hl-paper3-policy-quant-p1-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Case Study A — Republic of Veridia:** The domestic road-fuel market is modelled by {{Q_d = 320 - 4P}} and {{Q_s = -40 + 8P}}, where {{Q}} is in millions of litres per month and {{P}} is in dollars per litre. Calculate the free-market equilibrium price {{P_e}} (in $).",
          answer: { type: "number", value: 30, display: "$30" },
          traps: [
            { spec: { type: "number", value: 200 }, feedback: "200 million litres is the equilibrium quantity Qe, not equilibrium price Pe." },
            { spec: { type: "number", value: 23.33, tolerance: 0.05 }, feedback: "Add 40 to 320 (giving 360 = 12P), rather than subtracting 40." },
          ],
          solution: [
            "Equate Qd = Qs: 320 − 4P = −40 + 8P.",
            "Collect terms: 360 = 12P → Pe = $30 per litre.",
            "Verify Qe: 320 − 4(30) = 200 million litres and −40 + 8(30) = 200 million litres.",
          ],
          hints: ["Set 320 − 4P equal to −40 + 8P and solve for P."],
          strategy: "Solve linear equilibrium and check both equations",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Veridia (continued):** Using {{Q_d = 320 - 4P}} and {{Q_s = -40 + 8P}}, calculate Veridia's pre-tax **consumer surplus** at free-market equilibrium (in $ million).",
          answer: { type: "number", value: 5000, display: "$5,000 million" },
          traps: [
            { spec: { type: "number", value: 10000 }, feedback: "Multiply by 1/2 for the triangle area: 1/2 × 200 × 50 = $5,000 million." },
            { spec: { type: "number", value: 3000 }, feedback: "The height of CS is (Pmax − Pe) = 80 − 30 = $50, not Pe ($30)." },
          ],
          solution: [
            "Demand vertical intercept (Qd = 0): Pmax = 320 / 4 = $80.",
            "CS = 1/2 × Qe × (Pmax − Pe) = 1/2 × 200 × (80 − 30) = 100 × 50 = $5,000 million.",
          ],
          hints: [
            "Find Pmax by setting 320 − 4P = 0.",
            "Apply CS = 1/2 × 200 × (Pmax − 30).",
          ],
          strategy: "Find vertical demand intercept first",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Veridia (continued):** To cut transport carbon emissions, Veridia imposes a **$6 per-litre specific carbon tax** on fuel suppliers ({{Q_d = 320 - 4P}}, pre-tax {{Q_s = -40 + 8P}}). Calculate the new equilibrium **consumer price {{P_c}}** (in $).",
          answer: { type: "number", value: 34, display: "$34" },
          traps: [
            { spec: { type: "number", value: 36 }, feedback: "Consumers do not bear 100% of the $6 tax unless demand is perfectly inelastic." },
            { spec: { type: "number", value: 28 }, feedback: "$28 is the net producer price Pp = Pc − 6; the question asks for consumer price Pc." },
            { spec: { type: "number", value: 30.5 }, feedback: "Substitute (P − 6) inside 8(P − 6) to shift constant by −48, not −6." },
          ],
          solution: [
            "Replace P with (P − 6) in supply: Qs' = −40 + 8(P − 6) = −88 + 8P.",
            "Set Qd = Qs': 320 − 4Pc = −88 + 8Pc → 12Pc = 408 → Pc = $34 per litre.",
            "Check net producer price Pp = 34 − 6 = $28 and post-tax quantity Qt = 320 − 4(34) = 184 million litres.",
          ],
          hints: [
            "Write Qs' = −40 + 8(P − 6) and simplify to −88 + 8P.",
            "Equate 320 − 4Pc = −88 + 8Pc and divide by 12.",
          ],
          strategy: "Shift supply by substituting (P − t)",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Veridia (continued):** With the **$6 per-litre** specific carbon tax imposed on fuel suppliers ({{Q_d = 320 - 4P}}, pre-tax {{Q_s = -40 + 8P}}), calculate monthly **government carbon tax revenue** (in $ million).",
          answer: { type: "number", value: 1104, display: "$1,104 million" },
          traps: [
            { spec: { type: "number", value: 1200 }, feedback: "Multiply $6 by the POST-TAX quantity (184 million), not pre-tax quantity (200 million)." },
            { spec: { type: "number", value: 736 }, feedback: "$736 million is only the consumers' share ($4 × 184); total revenue includes producers' $2 × 184." },
          ],
          solution: [
            "Post-tax quantity Qt = 320 − 4(34) = 184 million litres.",
            "Government tax revenue = t × Qt = $6 × 184 = $1,104 million per month.",
          ],
          hints: [
            "Find Qt by plugging Pc = 34 into Qd = 320 − 4P.",
            "Multiply the $6 tax wedge by Qt.",
          ],
          strategy: "Tax revenue = t × Qt (never t × Qe)",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Veridia (continued):** Treating Veridia's linear fuel market ({{Q_d = 320 - 4P}}, pre-tax {{Q_s = -40 + 8P}}) in isolation (ignoring external environmental benefits), calculate the standard **deadweight welfare loss** (in $ million) caused by the **$6 per-litre** carbon tax.",
          answer: { type: "number", value: 48, display: "$48 million" },
          traps: [
            { spec: { type: "number", value: 96 }, feedback: "Multiply by 1/2 — DWL is a triangle, not a rectangle." },
          ],
          solution: [
            "Reduction in quantity ΔQ = 200 − 184 = 16 million litres.",
            "DWL = 1/2 × t × ΔQ = 1/2 × $6 × 16 = $48 million.",
          ],
          hints: [
            "Use DWL = 1/2 × tax per unit × fall in quantity.",
            "Calculate 1/2 × 6 × (200 − 184).",
          ],
          strategy: "DWL = 1/2 × t × (Qe − Qt)",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-micro-quantitative",
          question:
            "**Veridia (continued):** Veridia's regional electric-rail monopoly operates at its {{MC = MR}} output of **40 thousand tickets** per day, where {{AR = $45}}, {{AC = $33}}, and {{AVC = $25}}. Calculate the rail firm's daily **abnormal profit** (in $ thousand).",
          answer: { type: "number", value: 480, display: "$480 thousand" },
          traps: [
            { spec: { type: "number", value: 800 }, feedback: "Use AC ($33), not AVC ($25) — subtracting AVC omits fixed costs." },
          ],
          solution: [
            "Profit per ticket = AR − AC = $45 − $33 = $12.",
            "Daily abnormal profit = $12 × 40 thousand = $480 thousand.",
          ],
          hints: [
            "Economic profit uses average total cost (AC), not AVC.",
            "Compute (AR − AC) × Q*.",
          ],
          strategy: "Profit rectangle = (AR − AC) × Q*",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "p3-micro-quantitative",
          marks: 4,
          question:
            "**Veridia (continued):** Using your earlier results ({{P_e = $30}}, {{P_c = $34}}, {{P_p = $28}} under the $6 fuel tax), explain why consumers absorb two-thirds of the tax incidence while suppliers absorb only one-third.",
          modelAnswer:
            "Consumers see prices climb by $4 out of the $6 levy (66.7%), whereas suppliers accept a $2 reduction in net earnings (33.3%). In linear supply-and-demand models, tax burden tilts toward the relatively steeper, less responsive side: here the demand slope coefficient is 4 versus 8 for supply, giving consumers a lower price elasticity than producers at equilibrium (share equals 8 divided by 12). Because drivers depend on fuel for daily commuting with scarce electric-rail alternatives, firms can pass most of the levy onto buyers without suffering an equivalent collapse in volume.",
          markScheme: [
            { point: "Quantifies exact incidence split: $4 (66.7%) on buyers vs $2 (33.3%) on sellers", keywords: ["66.7%", "33.3%", "$4 out of", "net earnings"] },
            { point: "Links incidence to relative elasticities (demand more price inelastic than supply)", keywords: ["price elasticity", "less responsive", "inelastic"] },
            { point: "Connects algebraically to linear slope coefficients d / (b + d) = 8 / 12", keywords: ["slope coefficient", "8 divided by 12", "4 versus 8"] },
            { point: "Explains real behavioural reason in Veridia (necessity commuting / scarce substitutes lets firms pass cost on)", keywords: ["commuting", "pass most", "scarce"] },
          ],
          hints: [
            "Quote the exact dollar and percentage split ($4 vs $2 out of $6).",
            "Connect relative PED vs PES (and linear coefficients b = 4, d = 8) to why firms can pass most of the tax forward.",
          ],
          strategy: "Combine exact incidence figures + elasticity theory + market context",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q08",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Recommend",
          guideRef: "p3-ten-mark-policy",
          marks: 10,
          markbands: P3_POLICY_MARKBANDS,
          question:
            "**Veridia — 10-Mark Policy Recommendation:** Stimulus data show that road-fuel demand has {{|PED| = 0.24}}, bottom-quintile households spend **7.2%** of income on fuel versus **1.8%** for top-quintile households, monthly carbon-tax revenue is **$1,104 million**, and Veridia's regional electric-rail monopoly restricts output to earn **$480 thousand** daily abnormal profit. Using the data provided and your earlier calculations, **recommend** a policy that the government of Veridia could introduce to cut transport carbon emissions while protecting low-income households.",
          modelAnswer:
            "Veridia should retain and gradually escalate its **$6/litre Pigouvian carbon tax** while **earmarking a large fraction of the $1,104 million monthly revenue to fund targeted lump-sum green rebates for lower-income households and regulated expansion of electric rail**. This single revenue-recycled pricing strategy outperforms an uncompensated tax or outright fuel ban.\n\n**Anchor & Transmission:** Road fuel generates negative production and consumption externalities where marginal social cost exceeds marginal private cost. The specific levy shifts supply leftwards toward MSC, internalising external damages and shrinking fuel volume from 200 to 184 million litres immediately. Simultaneously, recycling revenue directly resolves two stimulus bottlenecks: lump-sum vouchers offset the disproportionate 7.2% vs 1.8% regressive fuel share on poorer families (who bear 66.7% of the $4 consumer price jump), while subsidising and price-cap regulating the electric-rail operator forces it beyond its profit-maximising monopoly restriction ($480k daily surplus) toward socially optimal capacity. Better rail substitutes steadily raise long-run fuel responsiveness above 0.24.\n\n**Evaluation & Trade-offs:** First, because short-run responsiveness is very inelastic (0.24), immediate emission drops are modest (8%), risking political backlash before cleaner rail lines finish construction (multi-year implementation lag). Second, quantifying exact marginal external cost per litre carries severe information failure; setting the levy too high creates avoidable allocative loss beyond the $48m static triangle. Third, earmarking revenues reduces general treasury flexibility and incurs administrative costs in targeting low-income transfers accurately, while rural commuters lacking rail access may still experience welfare erosion.\n\n**Complementary Safeguard & Judgement:** Pairing the revenue-recycled levy with means-tested rural EV/micro-mobility grants neutralises geographic inequity during construction lags. Overall, revenue-recycled carbon pricing best harnesses Veridia's $1,104m fiscal flow to align long-run sustainability with vertical equity.",
          markScheme: [
            { point: "Decisive commitment to ONE primary policy (revenue-recycled carbon tax)", keywords: ["pigouvian carbon tax", "revenue-recycled", "earmarking"] },
            { point: "Anchors in calculated post-tax fuel drop (200 to 184 million litres) and $1,104m revenue", keywords: ["200 to 184", "$1,104"] },
            { point: "Anchors in equity & elasticity data (7.2% vs 1.8%, 66.7% consumer burden, |PED| = 0.24)", keywords: ["7.2% vs 1.8%", "66.7%", "regressive"] },
            { point: "Explains externality transmission mechanism (MSC > MPC, supply shifts left to internalise externality)", keywords: ["marginal social cost", "internalising", "shifts supply leftwards"] },
            { point: "Links revenue recycling to rail monopoly failure ($480k surplus) and raising long-run PED via substitutes", keywords: ["price-cap", "substitutes", "long-run"] },
            { point: "Evaluates short-run inelasticity (modest 8% cut) and political resistance", keywords: ["modest", "political backlash", "inelastic"] },
            { point: "Evaluates implementation/construction time lags for rail expansion", keywords: ["implementation lag", "construction"] },
            { point: "Evaluates information failure in measuring exact marginal external cost / welfare loss ($48m)", keywords: ["information failure", "$48m", "external cost"] },
            { point: "Evaluates administrative targeting costs, rural stakeholder inequity, or fiscal flexibility trade-off", keywords: ["rural commuters", "administrative costs", "treasury flexibility"] },
            { point: "Adds targeted complementary measure (rural EV/mobility grants) and balanced final judgement", keywords: ["rural ev", "geographic inequity", "vertical equity"] },
          ],
          hints: [
            "Use D-A-T-E-C: commit to ONE primary policy (revenue-recycled carbon pricing) rather than listing 4 separate policies.",
            "Integrate ALL your earlier numbers: 200 → 184m litres, $4 consumer incidence (66.7%), $1,104m revenue, $48m static DWL, $480k rail monopoly profit, |PED| = 0.24, and 7.2% vs 1.8% income shares.",
            "Evaluate short-run vs long-run elasticity, information failure, construction lags, rural commuters, and add a targeted complementary safeguard.",
          ],
          strategy: "Full D-A-T-E-C synthesis anchoring micro calculations directly in policy design",
        },

        // --- Case Study B: Republic of Aurelia (Macro Real GDP, CPI, Tax, Multiplier) ---
        {
          id: "5-hl-paper3-policy-quant-p1-q09",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Case Study B — Republic of Aurelia:** Nominal GDP rose from **$400 billion** (GDP deflator = **100**) in 2024 to **$462 billion** (GDP deflator = **105**) in 2025. Calculate Aurelia's **2025 Real GDP** (in $ billion).",
          answer: { type: "number", value: 440, display: "$440 billion" },
          traps: [
            { spec: { type: "number", value: 485.1 }, feedback: "Divide Nominal GDP by (Deflator / 100), never multiply." },
            { spec: { type: "number", value: 438.9 }, feedback: "Divide 462 by 1.05 rather than subtracting 5% of 462." },
          ],
          solution: [
            "Real GDP (2025) = (Nominal GDP / Deflator) × 100 = (462 / 105) × 100 = $440 billion.",
            "(Note: Real GDP growth is 10.0%, compared with 15.5% nominal growth.)",
          ],
          hints: ["Apply Real GDP = (462 / 105) × 100."],
          strategy: "Deflate nominal GDP accurately before any growth calculation",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q10",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Aurelia (continued):** Aurelia's 2025 CPI basket consists of **Food (weight 0.30, index 110)**, **Shelter (weight 0.40, index 115)**, and **Services (weight 0.30, index 105)** (2024 base = 100). Calculate Aurelia's **2025 weighted CPI** (to 1 d.p.).",
          answer: { type: "number", value: 110.5, tolerance: 0.05, display: "110.5" },
          traps: [
            { spec: { type: "number", value: 110 }, feedback: "110.0 is the unweighted simple mean; Shelter carries a higher 0.40 weight." },
          ],
          solution: [
            "Weighted CPI = 0.30(110) + 0.40(115) + 0.30(105) = 33.0 + 46.0 + 31.5 = 110.5.",
          ],
          hints: [
            "Multiply each category index by its decimal weight.",
            "Sum 33.0 + 46.0 + 31.5.",
          ],
          strategy: "Always weight each CPI category",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q11",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Aurelia (continued):** Aurelia's income tax brackets are **$0–$20,000 at 0%**, **$20,001–$60,000 at 15%**, and **above $60,000 at 30%**. Calculate the **average income tax rate** (as a percentage) for a household earning **$80,000**.",
          answer: { type: "number", value: 15, display: "15%" },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "30% is the marginal tax rate (MTR), not the average tax rate (ATR)." },
            { spec: { type: "number", value: 12000 }, feedback: "$12,000 is total tax paid; divide by $80,000 and multiply by 100 to get the average tax rate (%)." },
          ],
          solution: [
            "Tax by bracket: ($20,000 × 0%) + ($40,000 × 15%) + ($20,000 × 30%) = $0 + $6,000 + $6,000 = $12,000.",
            "Average tax rate = ($12,000 / $80,000) × 100 = 15% (strictly below the 30% MTR).",
          ],
          hints: [
            "Compute total tax across the three slices ($20k, $40k, $20k) first.",
            "Divide total tax ($12,000) by gross income ($80,000) and multiply by 100.",
          ],
          strategy: "Total tax first → divide by gross income for ATR",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q12",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Aurelia (continued):** Aurelia's marginal propensities are {{MPS = 0.10}}, {{MPT = 0.20}}, and {{MPM = 0.20}}. Calculate the value of Aurelia's **Keynesian spending multiplier {{k}}**.",
          answer: { type: "number", value: 2, display: "2.0" },
          traps: [
            { spec: { type: "number", value: 10 }, feedback: "Do not ignore MPT and MPM — sum all three marginal leakages." },
            { spec: { type: "number", value: 3.33, tolerance: 0.05 }, feedback: "Include MPM = 0.20 as well as MPS and MPT." },
          ],
          solution: [
            "Total marginal withdrawals MPW = 0.10 + 0.20 + 0.20 = 0.50.",
            "Spending multiplier k = 1 / 0.50 = 2.0.",
          ],
          hints: [
            "Add MPS + MPT + MPM to get MPW.",
            "Invert MPW to find k = 1 / MPW.",
          ],
          strategy: "k = 1 / (MPS + MPT + MPM)",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Aurelia (continued):** Using Aurelia's 2025 Real GDP (Nominal $462 billion, GDP deflator 105), full-employment Real GDP ({{Y_f}}) of **$476 billion**, and marginal propensities ({{MPS = 0.10}}, {{MPT = 0.20}}, {{MPM = 0.20}}), calculate the initial increase in government spending {{Delta G}} (in $ billion) needed to close the deflationary gap.",
          answer: { type: "number", value: 18, display: "$18 billion" },
          traps: [
            { spec: { type: "number", value: 36 }, feedback: "$36 billion is the total deflationary gap; divide by k = 2.0 to get the initial ΔG." },
            { spec: { type: "number", value: 72 }, feedback: "Divide the gap by k rather than multiplying by k." },
          ],
          solution: [
            "Deflationary gap = Yf − Y1 = $476 bn − $440 bn = $36 billion.",
            "Required ΔG = Gap / k = $36 bn / 2.0 = $18 billion.",
          ],
          hints: [
            "Find the deflationary gap (476 − 440).",
            "Divide the gap by k = 2.0.",
          ],
          strategy: "ΔG = (Yf − Y1) / k",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q14",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "p3-macro-quantitative",
          marks: 4,
          question:
            "**Aurelia (continued):** Explain two economic reasons why injecting $18 billion of public spending might expand Aurelia's actual Real GDP by strictly less than $36 billion.",
          modelAnswer:
            "First, financing $18 billion through sovereign bond issuance increases demand for loanable funds, pushing up market interest rates and triggering partial crowding out as private firms cancel or postpone interest-sensitive investment projects. Second, if Aurelia operates on the upward-sloping intermediate region of the Keynesian aggregate supply curve, rising aggregate demand bids up wages and shelter costs (already elevated at index 115), absorbing part of the nominal expansion into demand-pull inflation rather than real output. Higher import leakage above 0.20 would likewise shrink the realised multiplier below 2.0.",
          markScheme: [
            { point: "Identifies partial crowding out via government borrowing raising interest rates", keywords: ["crowding out", "loanable funds", "interest rates"] },
            { point: "Explains how higher borrowing costs reduce private investment (I), offsetting ΔG", keywords: ["private firms", "investment projects", "postpone"] },
            { point: "Identifies upward-sloping Keynesian AS / capacity bottlenecks", keywords: ["upward-sloping", "intermediate region", "aggregate supply"] },
            { point: "Explains how rising prices absorb part of the nominal AD boost into demand-pull inflation", keywords: ["demand-pull inflation", "nominal expansion", "absorbs", "absorbing"] },
          ],
          hints: [
            "Think of two classic real-world brakes on the textbook multiplier: bond-market crowding out and upward-sloping AS inflation.",
            "Link each brake explicitly to how it shrinks real output gain below $36 billion.",
          ],
          strategy: "Develop two distinct causal chains (2 marks each)",
        },
        {
          id: "5-hl-paper3-policy-quant-p1-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Recommend",
          guideRef: "p3-ten-mark-policy",
          marks: 10,
          markbands: P3_POLICY_MARKBANDS,
          question:
            "**Aurelia — 10-Mark Policy Recommendation:** Stimulus data show Aurelia has a **$36 billion deflationary gap**, calculated multiplier {{k = 2.0}}, **44% debt-to-GDP**, a central-bank base rate of **0.75%**, **14.8% youth unemployment**, and a weighted CPI of **110.5** driven primarily by **Shelter (index 115, weight 0.40)**. Using the text/data provided and your earlier calculations, **recommend** a policy that Aurelia's government could introduce to close its output gap and lower youth unemployment without worsening housing-cost inflation.",
          modelAnswer:
            "Aurelia should implement a **targeted $18 billion interventionist fiscal package focused on public affordable-housing construction paired with subsidised youth construction-trade apprenticeships**, rather than broad tax cuts or further monetary easing.\n\n**Anchor & Transmission:** Monetary policy is largely exhausted near the 0.75% zero lower bound, whereas Aurelia's modest 44% debt-to-GDP provides ample fiscal headroom. Using our calculated multiplier of 2.0, an $18 billion capital injection expands aggregate demand by $36 billion to close the gap between $440bn and $476bn, shifting AD rightwards along Keynesian AS and absorbing cyclical joblessness. Crucially, channelling spending directly into social and affordable housing expands rental supply, easing the 115 Shelter index (40% of CPI) instead of stoking housing inflation, while youth apprenticeships tackle skills mismatches driving 14.8% youth joblessness and shift LRAS rightwards.\n\n**Evaluation & Trade-offs:** First, large housing builds suffer planning and construction lags of 18–36 months, delaying relief for both unemployed youth and squeezed tenants. Second, if timber, steel, or machinery must be sourced overseas, actual import propensity rises above 0.20, pulling k below 2.0 and leaving an unclosed output shortfall; simultaneously, bond financing risks partial crowding out if private borrowing costs edge higher. Third, direct public construction carries opportunity costs against healthcare or digital infrastructure and risks state procurement inefficiency.\n\n**Complementary Safeguard & Judgement:** Pairing the build programme with immediate zoning deregulation (market-based supply-side reform speeding up private apartment approvals) and temporary youth hiring stipends bridges short-run construction delays without adding permanent debt. Taken together, targeted housing-and-training capital spending directly matches Aurelia's $36bn gap, 44% debt capacity, and shelter-led inflation bottleneck.",
          markScheme: [
            { point: "Decisive commitment to ONE primary targeted policy (public affordable-housing + youth apprenticeship capital package)", keywords: ["affordable-housing", "apprenticeships", "interventionist fiscal"] },
            { point: "Justifies ruling out monetary easing via 0.75% zero lower bound and cites 44% debt headroom", keywords: ["zero lower bound", "fiscal headroom", "44%"] },
            { point: "Anchors directly in earlier calculations: k = 2.0, $18bn injection closing $36bn gap ($440bn to $476bn)", keywords: ["$440bn", "$476bn", "calculated multiplier"] },
            { point: "Explains dual AD + LRAS transmission mechanism addressing both cyclical gap and 14.8% youth mismatch", keywords: ["keynesian as", "lras rightwards", "skills mismatches"] },
            { point: "Directly links housing supply expansion to cooling the Shelter index (115, 40% CPI weight)", keywords: ["rental supply", "shelter index", "40%"] },
            { point: "Evaluates planning and construction time lags (18–36 months)", keywords: ["construction lags", "planning"] },
            { point: "Evaluates higher import leakage (MPM > 0.20 shrinking k) and partial crowding out", keywords: ["import propensity", "crowding out", "shortfall"] },
            { point: "Evaluates fiscal opportunity cost or public procurement inefficiency", keywords: ["opportunity costs", "procurement"] },
            { point: "Proposes targeted complementary measure (zoning reform / temporary youth hiring stipends)", keywords: ["zoning deregulation", "hiring stipends"] },
            { point: "Concludes with a reasoned overall judgement synthesising gap, debt, and shelter inflation", keywords: ["taken together", "bottleneck", "directly matches"] },
          ],
          hints: [
            "Notice the dual puzzle: Aurelia needs +$18bn AD (via k = 2.0) YET Shelter (index 115, weight 0.40) is driving CPI to 110.5!",
            "Explain why monetary policy fails at 0.75% while targeted housing-supply + youth-training fiscal investment shifts BOTH AD and housing/LRAS supply.",
            "Evaluate time lags, MPM > 0.20 leakage, partial crowding out, opportunity cost, and add a fast-acting complement (zoning reform / hiring credits).",
          ],
          strategy: "Match policy composition specifically to the stimulus inflation bottleneck",
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PAPER 2: GLOBAL MODELLING (TRADE, TARIFFS, FOREX, BoP) + TWO 10M POLICY
    // -----------------------------------------------------------------------
    {
      id: "5-hl-paper3-policy-quant-p2",
      title: "HL Paper 3 Practice Paper 2: Global Trade, Forex & BoP + 10m Policy",
      level: "HL",
      questions: [
        // --- Case Study C: Kingdom of Novaria (Comparative Advantage & Steel Tariff) ---
        {
          id: "5-hl-paper3-policy-quant-p2-q01",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Case Study C — Kingdom of Novaria:** With identical resources, **Novaria** can produce **60 tonnes of steel OR 120 units of software**, while **Partnerland** can produce **50 tonnes of steel OR 150 units of software**. Calculate Novaria's opportunity cost of producing **1 tonne of steel** (in units of software).",
          answer: { type: "number", value: 2, display: "2 units" },
          traps: [
            { spec: { type: "number", value: 0.5 }, feedback: "0.5 tonnes of steel is the opportunity cost of 1 unit of software; invert to get OC of 1 steel." },
            { spec: { type: "number", value: 3 }, feedback: "3 units of software is Partnerland's opportunity cost of steel, not Novaria's." },
          ],
          solution: [
            "Output table rule: OC(1 tonne of steel) = Max software / Max steel.",
            "For Novaria: 120 / 60 = 2 units of software (strictly lower than Partnerland's 150 / 50 = 3, giving Novaria comparative advantage in steel).",
          ],
          hints: ["Divide Novaria's maximum software output (120) by its maximum steel output (60)."],
          strategy: "Output table: OC(1 X) = Max Y / Max X",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q02",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Novaria (continued):** Steel currently trades at world price **$500/tonne**, where Novarian domestic supply is {{Q_1 = 40}} thousand tonnes and demand is {{Q_2 = 160}} thousand tonnes. Novaria imposes an **$80/tonne specific tariff**, raising domestic price to **$580/tonne** so domestic supply rises to {{Q_3 = 60}} thousand and demand falls to {{Q_4 = 130}} thousand. Calculate government **tariff revenue** (in $ million).",
          answer: { type: "number", value: 5.6, tolerance: 0.02, display: "$5.6 million" },
          traps: [
            { spec: { type: "number", value: 9.6 }, feedback: "Use post-tariff imports (130k − 60k = 70k), not pre-tariff imports (120k)." },
            { spec: { type: "number", value: 5600 }, feedback: "Watch the unit requested: $5,600 thousand equals $5.6 million." },
          ],
          solution: [
            "Post-tariff imports = Q4 − Q3 = 130k − 60k = 70 thousand tonnes.",
            "Tariff revenue = $80 × 70,000 = $5,600,000 = $5.6 million.",
          ],
          hints: [
            "Find post-tariff imports (Q4 − Q3) in thousands of tonnes.",
            "Multiply by $80/tonne and convert thousands of dollars into millions.",
          ],
          strategy: "Tariff revenue = t × (Q4 − Q3); double-check $ million scale",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q03",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Novaria (continued):** Under the **$80/tonne steel tariff** raising domestic output from {{Q_1 = 40}} thousand to {{Q_3 = 60}} thousand tonnes, calculate the gain in **domestic producer surplus** (in $ million).",
          answer: { type: "number", value: 4, tolerance: 0.02, display: "$4.0 million" },
          traps: [
            { spec: { type: "number", value: 4.8 }, feedback: "$4.8 million is the full rectangle Q3 × $80 — subtract the $0.8m production DWL triangle!" },
            { spec: { type: "number", value: 3.2 }, feedback: "$3.2 million covers only existing output Q1 × $80; include the triangle on new output (Q3 − Q1)." },
          ],
          solution: [
            "Domestic producer surplus gain is trapezoid a: 1/2 × (Q1 + Q3) × t.",
            "PS gain = 1/2 × (40k + 60k) × $80 = 50k × $80 = $4,000,000 = $4.0 million.",
          ],
          hints: [
            "Apply the trapezoid formula 1/2 × (Q1 + Q3) × t.",
            "Convert $4,000 thousand into $ million.",
          ],
          strategy: "Producer surplus gain under a tariff is trapezoid 1/2(Q1 + Q3)t",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q04",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Novaria (continued):** For the same **$80/tonne steel tariff** ({{Q_1 = 40k}} → {{Q_3 = 60k}}; {{Q_2 = 160k}} → {{Q_4 = 130k}}), calculate the **total deadweight welfare loss** (in $ million).",
          answer: { type: "number", value: 2, tolerance: 0.02, display: "$2.0 million" },
          traps: [
            { spec: { type: "number", value: 0.8 }, feedback: "$0.8m is only production DWL; add the $1.2m consumption DWL triangle." },
            { spec: { type: "number", value: 1.2 }, feedback: "$1.2m is only consumption DWL; add the $0.8m production DWL triangle." },
            { spec: { type: "number", value: 4 }, feedback: "Don't forget the 1/2 triangle factor on both welfare-loss areas." },
          ],
          solution: [
            "Production DWL (b) = 1/2 × (60k − 40k) × $80 = $0.8 million.",
            "Consumption DWL (d) = 1/2 × (160k − 130k) × $80 = $1.2 million.",
            "Total DWL = $0.8m + $1.2m = $2.0 million.",
          ],
          hints: [
            "Compute production DWL = 1/2(Q3 − Q1)t and consumption DWL = 1/2(Q2 − Q4)t.",
            "Add both triangles and express in $ million.",
          ],
          strategy: "Always sum BOTH tariff DWL triangles",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q05",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Novaria (continued):** Calculate the total **loss in consumer surplus** (in $ million) suffered by Novarian steel buyers under the **$80/tonne tariff** ({{Q_2 = 160k}} → {{Q_4 = 130k}}).",
          answer: { type: "number", value: 11.6, tolerance: 0.05, display: "$11.6 million" },
          traps: [
            { spec: { type: "number", value: 12.8 }, feedback: "Consumer surplus loss is trapezoid 1/2(Q2 + Q4)t, not rectangle Q2 × t." },
            { spec: { type: "number", value: 10.4 }, feedback: "Include the $1.2m consumption DWL triangle above Q4." },
          ],
          solution: [
            "CS loss = trapezoid 1/2 × (Q2 + Q4) × t = 1/2 × (160k + 130k) × $80 = 145k × $80 = $11.6 million.",
            "Accounting check: a ($4.0m) + b ($0.8m) + c ($5.6m) + d ($1.2m) = $11.6 million exact match!",
          ],
          hints: [
            "Use CS Loss = 1/2 × (Q2 + Q4) × t — OR sum a + b + c + d from your previous answers!",
            "Check that 4.0 + 0.8 + 5.6 + 1.2 equals your trapezoid calculation.",
          ],
          strategy: "Cross-check CS loss trapezoid against a + b + c + d",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q06",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Novaria (continued):** Suppose instead of a tariff, Novaria pays domestic steelmakers an **$80/tonne production subsidy**, lifting domestic output from **40 thousand** to **60 thousand** tonnes while keeping the domestic buyer price at the **$500** world price. Calculate the government's total **subsidy expenditure** (in $ million).",
          answer: { type: "number", value: 4.8, tolerance: 0.02, display: "$4.8 million" },
          traps: [
            { spec: { type: "number", value: 3.2 }, feedback: "The $80 subsidy is paid on ALL 60 thousand domestic tonnes produced, not only the initial 40 thousand." },
            { spec: { type: "number", value: 1.6 }, feedback: "Subsidies apply to total domestic output (60k), not just the 20k increase." },
          ],
          solution: [
            "Government pays $80 on every tonne produced domestically after expansion (Q3 = 60 thousand).",
            "Subsidy expenditure = $80 × 60,000 = $4,800,000 = $4.8 million.",
          ],
          hints: [
            "A per-unit domestic production subsidy is paid across ALL domestic output Q3.",
            "Multiply $80 by 60 thousand tonnes and convert to $ million.",
          ],
          strategy: "Production subsidy cost = s × Q3 (all domestic output)",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q07",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Compare and contrast",
          guideRef: "p3-global-quantitative",
          marks: 4,
          question:
            "**Novaria (continued):** Compare and contrast the welfare and stakeholder effects of Novaria's $80/tonne steel tariff with the equivalent $80/tonne domestic production subsidy.",
          modelAnswer:
            "Both instruments boost domestic steel production identically from 40k to 60k tonnes, delivering the same $4.0m domestic producer surplus gain and creating the same $0.8m production inefficiency loss. However, they diverge sharply for buyers, total welfare, and the state budget. While the tariff raises the domestic price to $580 and strips buyers of $11.6m in surplus (generating an extra $1.2m consumption loss and $2.0m combined deadweight loss), the subsidy leaves buyers at the $500 world price with zero consumption distortion ($0.8m total DWL). Conversely, the tariff yields +$5.6m in treasury income whereas the subsidy drains −$4.8m from taxpayers.",
          markScheme: [
            { point: "Identifies key similarity: identical output expansion (40k → 60k), $4.0m producer gain, and $0.8m production DWL", keywords: ["$4.0m", "$0.8m", "identically", "both instruments"] },
            { point: "Contrasts buyer/consumer impact: tariff raises price to $580 ($11.6m CS loss) vs subsidy keeping $500 price", keywords: ["$11.6m", "zero consumption", "$500 world price"] },
            { point: "Contrasts total deadweight welfare loss: $2.0m under tariff vs smaller $0.8m under subsidy", keywords: ["$2.0m", "consumption loss", "total dwl"] },
            { point: "Contrasts government fiscal budget: +$5.6m revenue vs −$4.8m taxpayer outlay", keywords: ["+$5.6m", "$4.8m", "taxpayers"] },
          ],
          hints: [
            "Include BOTH similarities (output Q1 → Q3, producer gain $4.0m, production DWL $0.8m) AND differences (buyers, total DWL, fiscal budget).",
            "Quote exact dollar figures from your earlier calculations.",
          ],
          strategy: "Compare and contrast = explicit similarities AND quantitative differences",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q08",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Recommend",
          guideRef: "p3-ten-mark-policy",
          marks: 10,
          markbands: P3_POLICY_MARKBANDS,
          question:
            "**Novaria — 10-Mark Policy Recommendation:** Stimulus extracts note that downstream Novarian automotive and appliance manufacturers rely heavily on steel as a key input, **Partnerland** has threatened WTO-authorised retaliatory tariffs on Novarian software exports if the steel tariff persists, and Novaria actually holds latent comparative advantage in steel (`OC = 2` vs `3`) if legacy blast furnaces are upgraded to modern electric-arc technology. Using the text/data provided and your earlier calculations, **recommend** a policy for Novaria to strengthen domestic steel competitiveness without harming downstream manufacturers or triggering trade retaliation.",
          modelAnswer:
            "Novaria should **repeal the $80/tonne steel tariff and introduce a time-limited, performance-conditioned green-technology investment grant (interventionist supply-side subsidy)** to upgrade legacy blast furnaces to electric-arc production.\n\n**Anchor & Transmission:** Removing the tariff immediately eliminates the $11.6m burden on Novarian buyers and downstream auto/appliance makers, cuts total deadweight loss from $2.0m, and defuses Partnerland's retaliatory threat against Novarian software exports. Because Novaria already enjoys a latent comparative advantage in steel (giving up 2 software units per tonne versus Partnerland's 3), capital modernisation shifts domestic steel supply rightwards organically, lowering marginal costs toward the $500 world price without distorting consumer prices or violating WTO import-tariff rules. Unlike a permanent per-unit production subsidy ($4.8m ongoing taxpayer drain sustaining high-cost mills), one-off capital grants tackle the underlying productive inefficiency directly.\n\n**Evaluation & Trade-offs:** First, repealing protection forfeits $5.6m in annual customs receipts while capital grants require upfront public funding, creating a fiscal opportunity cost against healthcare or education. Second, retrofitting steel mills involves multi-year construction lags during which uncompetitive plants may lay off workers before electric-arc lines open. Third, government faces asymmetric information when picking viable mills — subsidies risk capture by inefficient incumbent firms ('government failure') or countervailing-duty challenges at the WTO if perceived as export-distorting.\n\n**Complementary Safeguard & Judgement:** Pairing the sunset-clause capital grants with transitional worker retraining and strict productivity/carbon-intensity milestones mitigates short-run job losses and guards against firm complacency. Overall, targeted supply-side modernisation best realises Novaria's genuine comparative advantage while protecting downstream competitiveness and export access.",
          markScheme: [
            { point: "Decisive commitment to ONE primary policy (repeal tariff + time-limited electric-arc modernisation grant)", keywords: ["repeal", "time-limited", "investment grant", "electric-arc"] },
            { point: "Anchors in eliminated tariff costs ($11.6m buyer loss, $2.0m DWL) and downstream competitiveness", keywords: ["$11.6m", "$2.0m", "auto/appliance"] },
            { point: "Anchors in comparative advantage calculation (2 vs 3 software units) and Partnerland software retaliation risk", keywords: ["2 software", "retaliatory threat", "latent comparative"] },
            { point: "Explains supply-side transmission (lower marginal cost shifts domestic S rightwards toward $500 world price)", keywords: ["marginal costs", "shifts domestic steel supply rightwards", "$500 world price"] },
            { point: "Distinguishes targeted capital upgrade from open-ended $4.8m recurring output subsidies", keywords: ["$4.8m", "productive inefficiency", "ongoing taxpayer"] },
            { point: "Evaluates fiscal swing (losing $5.6m customs revenue plus upfront grant opportunity cost)", keywords: ["$5.6m", "opportunity cost", "customs receipts"] },
            { point: "Evaluates multi-year retrofitting time lags and transitional mill redundancies", keywords: ["construction lags", "lay off", "retrofitting"] },
            { point: "Evaluates government failure / asymmetric information / WTO countervailing-duty scrutiny", keywords: ["asymmetric information", "government failure", "countervailing-duty"] },
            { point: "Adds targeted complementary policy (worker retraining + sunset milestones)", keywords: ["worker retraining", "sunset-clause", "milestones"] },
            { point: "Clear reasoned conclusion weighing long-run competitiveness and export access", keywords: ["overall", "export access", "genuine comparative"] },
          ],
          hints: [
            "Anchor in EVERY calculation: OC 2 vs 3, $11.6m buyer loss, $2.0m DWL, $5.6m lost tariff revenue, $4.8m ongoing subsidy comparison.",
            "Explain why supply-side capital modernisation beats BOTH tariffs (hurts downstream makers + triggers retaliation) AND permanent per-unit subsidies.",
            "Evaluate fiscal swing, retrofitting lags, government failure/WTO rules, and add worker retraining + sunset milestones.",
          ],
          strategy: "Connect comparative advantage math directly to WTO-safe supply-side strategy",
        },

        // --- Case Study D: Republic of Coralia (Forex, BoP, Unemployment, J-Curve & 10m Policy) ---
        {
          id: "5-hl-paper3-policy-quant-p2-q09",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Case Study D — Republic of Coralia:** The exchange rate moves from **1 USD = 4.00 CRL** to **1 USD = 5.00 CRL**. Calculate the magnitude of the percentage **depreciation of the CRL** against the USD (as a positive percentage).",
          answer: { type: "number", value: 20, display: "20%" },
          traps: [
            { spec: { type: "number", value: 25 }, feedback: "25% is the percentage APPRECIATION of the USD against the CRL; invert first to find CRL's depreciation." },
          ],
          solution: [
            "Invert to express USD per 1 CRL: initially 1 CRL = 1 / 4.00 = $0.25; afterward 1 CRL = 1 / 5.00 = $0.20.",
            "Percentage change in CRL = [(0.20 − 0.25) / 0.25] × 100 = −20% (a 20% depreciation).",
          ],
          hints: [
            "Convert both quotes into USD per 1 CRL (1/4.00 vs 1/5.00).",
            "Compute [(0.20 − 0.25) / 0.25] × 100 and state the magnitude.",
          ],
          strategy: "Always express the target currency as the base (1 CRL = ? USD)",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q10",
          kind: "short",
          level: "HL",
          difficulty: "warmup",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Coralia (continued):** A beachfront hotel in Coralia charges **1,200 CRL** per night. Calculate how much **cheaper** (in USD) one night becomes for a US tourist after the rate moves from **1 USD = 4.00 CRL** to **1 USD = 5.00 CRL**.",
          answer: { type: "number", value: 60, display: "$60" },
          traps: [
            { spec: { type: "number", value: 240 }, feedback: "$240 is the new USD price per night; subtract it from the initial $300 price to find the savings." },
            { spec: { type: "number", value: 300 }, feedback: "$300 is the initial USD price before depreciation." },
          ],
          solution: [
            "Initial price in USD = 1,200 / 4.00 = $300.",
            "New price in USD = 1,200 / 5.00 = $240.",
            "Savings for the US tourist = $300 − $240 = $60 per night.",
          ],
          hints: ["Divide 1,200 CRL by 4.00 and by 5.00, then take the difference."],
          strategy: "Write currency units explicitly when converting",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q11",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Coralia (continued):** Coralia's external accounts show: **Trade in goods −$24 billion**, **Trade in services +$11 billion**, **Net primary income −$5 billion**, and **Net secondary income +$3 billion**. Calculate Coralia's **Current Account** balance (in $ billion; include the minus sign if a deficit).",
          answer: { type: "number", value: -15, display: "−$15 billion" },
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "Include the minus sign (−15) to denote a Current Account deficit." },
            { spec: { type: "number", value: -13 }, feedback: "Include Net primary (−5) and Net secondary (+3) income as well as goods and services." },
          ],
          solution: [
            "Current Account = Goods + Services + Primary Income + Secondary Income.",
            "CA = −24 + 11 − 5 + 3 = −$15 billion (a $15 billion deficit).",
          ],
          hints: [
            "Sum all four Current Account sub-balances keeping exact + and − signs.",
            "Compute −24 + 11 − 5 + 3.",
          ],
          strategy: "Sum all four CA sub-accounts with signs",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q12",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-global-quantitative",
          question:
            "**Coralia (continued):** Using Coralia's Current Account (goods −$24bn, services +$11bn, primary income −$5bn, secondary income +$3bn), together with a Capital Account of **+$1.5 billion** and Net Errors & Omissions of **−$0.5 billion**, calculate Coralia's **Financial Account** balance (in $ billion).",
          answer: { type: "number", value: 14, display: "$14 billion" },
          traps: [
            { spec: { type: "number", value: -14 }, feedback: "Check sign: net financial inflows (+$14 bn) are required to finance the −$15 bn Current Account deficit." },
            { spec: { type: "number", value: 13 }, feedback: "Check the sign of NEO (−0.5): −15 + 1.5 − 0.5 = −14, so FA = +14." },
          ],
          solution: [
            "Apply CA + KA + FA + NEO = 0.",
            "−15.0 + 1.5 + FA − 0.5 = 0 → −14.0 + FA = 0 → FA = +$14.0 billion.",
          ],
          hints: [
            "Substitute CA = −15.0, KA = +1.5, and NEO = −0.5 into CA + KA + FA + NEO = 0.",
            "Solve −14.0 + FA = 0.",
          ],
          strategy: "Keep exact signs in the BoP identity",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q13",
          kind: "short",
          level: "HL",
          difficulty: "core",
          commandTerm: "Calculate",
          guideRef: "p3-macro-quantitative",
          question:
            "**Coralia (continued):** Coralia's working-age population is **15.0 million**, its labour force is **9.6 million**, and **720,000** workers are unemployed and actively seeking work. Calculate Coralia's **unemployment rate** (as a percentage, to 1 d.p.).",
          answer: { type: "number", value: 7.5, tolerance: 0.05, display: "7.5%" },
          traps: [
            { spec: { type: "number", value: 4.8 }, feedback: "Divide by the labour force (9.6 million), NOT the working-age population (15.0 million)." },
          ],
          solution: [
            "Convert 720,000 to 0.72 million.",
            "Unemployment rate = (0.72 / 9.6) × 100 = 7.5%.",
          ],
          hints: [
            "Use the labour force (9.6 million) as the denominator.",
            "Compute (0.72 / 9.6) × 100.",
          ],
          strategy: "Denominator of unemployment rate is always Labour Force",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q14",
          kind: "written",
          level: "HL",
          difficulty: "core",
          commandTerm: "Explain",
          guideRef: "p3-global-quantitative",
          marks: 4,
          question:
            "**Coralia (continued):** Following the 20% CRL depreciation, Coralia's short-run trade elasticities are {{|PED_X| = 0.35}} and {{|PED_M| = 0.45}}, rising after two years to {{|PED_X| = 0.75}} and {{|PED_M| = 0.70}}. Explain how Coralia's Current Account balance evolves over time.",
          modelAnswer:
            "Under the Marshall–Lerner condition, currency weakness improves the trade balance only when the combined price elasticities of exports and imports exceed unity. Initially, 0.35 plus 0.45 equals 0.80, which sits below one: pre-existing import contracts keep foreign purchase volumes rigid while their CRL bill jumps immediately, widening the deficit past −$15 billion. Over a two-year horizon, buyers switch toward domestic alternatives and foreign tourists respond to cheaper stays (such as $60 off hotels), lifting the sum to 1.45 above unity and generating a net export recovery that traces a J-curve.",
          markScheme: [
            { point: "States Marshall–Lerner criterion: |PEDx| + |PEDm| > 1 required for improvement", keywords: ["marshall-lerner", "exceed unity", "combined price elasticities"] },
            { point: "Evaluates short-run sum 0.80 < 1 and explains why sticky volumes + costlier imports worsen deficit initially", keywords: ["0.80", "rigid", "widening the deficit"] },
            { point: "Evaluates long-run sum 1.45 > 1 as buyers/tourists switch across substitutes", keywords: ["1.45", "switch toward", "tourists"] },
            { point: "Identifies resulting J-curve trajectory (initial deterioration followed by eventual improvement)", keywords: ["j-curve", "recovery"] },
          ],
          hints: [
            "Sum |PEDx| + |PEDm| in both horizons (0.80 vs 1.45) and compare against 1.0.",
            "Explain why trade contracts make short-run volumes sticky, producing the J-curve.",
          ],
          strategy: "Compute both Marshall–Lerner sums and trace the J-curve mechanism",
        },
        {
          id: "5-hl-paper3-policy-quant-p2-q15",
          kind: "written",
          level: "HL",
          difficulty: "challenge",
          commandTerm: "Recommend",
          guideRef: "p3-ten-mark-policy",
          marks: 10,
          markbands: P3_POLICY_MARKBANDS,
          question:
            "**Coralia — 10-Mark Policy Recommendation:** Stimulus data show Coralia faces a **−$15 billion Current Account deficit (6.5% of GDP)** reliant on **+$14 billion** of volatile Financial Account inflows, imported food/energy inflation climbing to **6.1%** after the **20% CRL depreciation**, **7.5% unemployment**, and strong two-year export/import responsiveness ({{|PED_X| + |PED_M| = 1.45}}). Using the text/data provided and your earlier calculations, **recommend** a policy to achieve a sustainable reduction in Coralia's Current Account deficit without triggering a severe recession or worsening inflation.",
          modelAnswer:
            "Coralia should adopt **targeted interventionist supply-side export-and-energy-substitution investment (renewable power generation plus tourism/logistics skills and infrastructure)** while allowing the **20% CRL depreciation to work through its two-year Marshall–Lerner recovery**, rather than imposing harsh deflationary austerity.\n\n**Anchor & Transmission:** Severe expenditure-reducing deflation (steep rate hikes or fiscal cuts) would deepen 7.5% unemployment into recession while failing to address structural import dependence (goods deficit −$24bn). By contrast, our elasticity findings show that once contracts adjust, combined responsiveness reaches 1.45 above unity — meaning Coralia's cheaper currency (cutting US hotel costs by $60/night) will naturally shrink the −$15bn shortfall (6.5% of GDP) over 18–24 months. Directing supply-side investment into domestic renewable energy and port/tourism capacity lowers structural energy-import bills (curbing the 6.1% imported cost-push inflation) and shifts LRAS rightwards, boosting non-price export competitiveness and sustaining jobs while gradually cutting reliance on +$14bn of volatile hot-money inflows.\n\n**Evaluation & Trade-offs:** First, supply-side energy and transport upgrades suffer 2–4 year gestation lags and require upfront fiscal outlays or foreign green-equipment imports, which can temporarily enlarge the goods shortfall during the early J-curve trough (where short-run sum is 0.80). Second, while waiting for LRAS gains, 6.1% imported food and fuel inflation erodes real wages for poorer households and risks triggering a domestic wage-price spiral if inflation expectations unanchor. Third, persistent external deficits risk sudden stops in the +$14bn financial inflows if global investor sentiment sours.\n\n**Complementary Safeguard & Judgement:** Pairing supply-side investment with **modest, credible central-bank tightening (anchoring inflation expectations without crushing growth) plus targeted food-energy vouchers for low-income families** protects macroeconomic stability through the short-run J-curve dip. Overall, coupling natural exchange-rate adjustment with import-substituting energy and export-capacity upgrades delivers the most durable, low-unemployment external rebalancing.",
          markScheme: [
            { point: "Decisive commitment to ONE primary strategy (targeted supply-side energy/export-capacity investment alongside floating depreciation)", keywords: ["renewable power", "supply-side", "export-and-energy-substitution"] },
            { point: "Justifies rejecting harsh expenditure-reducing austerity using 7.5% unemployment and −$24bn goods gap", keywords: ["expenditure-reducing", "austerity", "-$24bn", "7.5%"] },
            { point: "Anchors in Marshall–Lerner sum (1.45) and $60 hotel competitiveness gain closing −$15bn deficit", keywords: ["1.45", "$60", "shrink the -$15bn", "18-24 months"] },
            { point: "Explains rightward LRAS transmission lowering 6.1% imported cost-push inflation and goods import reliance", keywords: ["lras rightwards", "cost-push inflation", "non-price export"] },
            { point: "Links policy to reducing vulnerability to +$14bn volatile financial inflows", keywords: ["hot-money", "+$14bn", "sudden stops"] },
            { point: "Evaluates 2–4 year gestation lags and short-run imported equipment worsening J-curve (sum 0.80)", keywords: ["gestation lags", "0.80", "j-curve trough"] },
            { point: "Evaluates real-wage erosion on low-income households and wage-price spiral risk at 6.1% inflation", keywords: ["wage-price spiral", "real wages", "poorer households"] },
            { point: "Evaluates upfront fiscal cost / capital-inflow reversal constraint", keywords: ["upfront fiscal", "investor sentiment"] },
            { point: "Adds targeted complementary safeguards (credible monetary anchoring + low-income food/energy vouchers)", keywords: ["inflation expectations", "vouchers"] },
            { point: "Concludes with balanced synthesis justifying durable, low-unemployment rebalancing", keywords: ["overall", "rebalancing", "durable"] },
          ],
          hints: [
            "Balance all four targets: −$15bn CA deficit (6.5% GDP), 6.1% imported inflation, 7.5% unemployment, and +$14bn volatile FA financing.",
            "Show why harsh deflationary austerity clashes with 7.5% unemployment, whereas letting the 20% depreciation hit ML = 1.45 + supply-side renewable/export upgrades shifts LRAS and cuts structural import bills.",
            "Evaluate J-curve trough (0.80), gestation lags, wage-price spiral, sudden stops, and add a targeted monetary/voucher safeguard.",
          ],
          strategy: "Resolve competing macro targets (BoP, inflation, unemployment) via dual-horizon policy design",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET (8 HL Paper 3 Stretch Questions — ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "5-hl-paper3-policy-quant-ch-q01",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "p3-micro-quantitative",
      question:
        "**Ad Valorem Tax Stretch:** A market has {{Q_d = 150 - 2P}} and {{Q_s = -10 + 2.5P}}. Instead of a specific tax, the government levies a **25% ad valorem tax** on the producer's net price (so {{P_c = 1.25 P_p}}, or {{P_p = 0.8 P_c}}). Calculate the post-tax **consumer price {{P_c}}** (in $).",
      answer: { type: "number", value: 40, display: "$40" },
      traps: [
        { spec: { type: "number", value: 32 }, feedback: "$32 is the net producer price Pp = 0.8 × 40; the question asks for consumer price Pc." },
        { spec: { type: "number", value: 35.56, tolerance: 0.05 }, feedback: "Substitute Pp = 0.8Pc into Qs rather than multiplying pre-tax Pe by 1.25." },
      ],
      solution: [
        "Since producers keep Pp = Pc / 1.25 = 0.8Pc, substitute 0.8Pc into supply: Qs' = −10 + 2.5(0.8Pc) = −10 + 2Pc.",
        "Equate Qd = Qs': 150 − 2Pc = −10 + 2Pc → 4Pc = 160 → Pc = $40.",
        "Check: Qd(40) = 70 units; Pp = 40 / 1.25 = $32; Qs(32) = −10 + 2.5(32) = 70 units exact match!",
      ],
      hints: [
        "Express net producer price in terms of consumer price: Pp = Pc / 1.25 = 0.8Pc.",
        "Substitute Pp = 0.8Pc into Qs = −10 + 2.5P and solve Qd = Qs'.",
      ],
      strategy: "Ad valorem tax pivots supply: replace P with P / (1 + τ)",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q02",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "p3-micro-quantitative",
      question:
        "**Monopoly Deadweight Loss:** A single-price monopolist faces inverse demand {{P = 100 - 2Q}} (so {{MR = 100 - 4Q}}) and operates with constant marginal and average cost {{MC = AC = $20}}. Calculate the **deadweight welfare loss** (in $) caused by monopoly profit maximisation relative to allocative efficiency ({{P = MC}}).",
      answer: { type: "number", value: 400, display: "$400" },
      traps: [
        { spec: { type: "number", value: 800 }, feedback: "$800 is the monopolist's abnormal profit (40 × 20); DWL is the triangle 1/2 × (Pm − MC) × (Qc − Qm)." },
        { spec: { type: "number", value: 200 }, feedback: "Check Qc where P = MC (100 − 2Q = 20 → Qc = 40) and Qm where MR = MC (Qm = 20)." },
      ],
      solution: [
        "Monopoly equilibrium (MR = MC): 100 − 4Qm = 20 → Qm = 20 units, Pm = 100 − 2(20) = $60.",
        "Allocatively efficient equilibrium (P = MC): 100 − 2Qc = 20 → Qc = 40 units, Pc = $20.",
        "Monopoly DWL = 1/2 × (Pm − MC) × (Qc − Qm) = 1/2 × (60 − 20) × (40 − 20) = $400.",
      ],
      hints: [
        "Find monopoly output (MR = MC) and monopoly price (from demand P = 100 − 2Q).",
        "Find competitive output (P = MC), then compute the triangle 1/2 × (Pm − MC) × (Qc − Qm).",
      ],
      strategy: "Compare MR = MC against P = MC to measure monopoly welfare loss",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q03",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "p3-macro-quantitative",
      question:
        "**Real GDP per Capita Growth Chain:** In Year 1, Nominal GDP is **$360 billion**, the GDP deflator is **120**, and population is **15.0 million**. In Year 2, Nominal GDP is **$436.8 billion**, the GDP deflator is **130**, and population is **16.0 million**. Calculate the exact percentage growth in **Real GDP per capita** (in %).",
      answer: { type: "number", value: 5, tolerance: 0.05, display: "5%" },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "12% is total Real GDP growth ($300 bn → $336 bn) before accounting for population growth." },
        { spec: { type: "number", value: 21.33, tolerance: 0.05 }, feedback: "21.33% is Nominal GDP growth before stripping out BOTH inflation and population growth." },
      ],
      solution: [
        "Year 1 Real GDP = (360 / 120) × 100 = $300 bn → per capita = $300 bn / 15 m = $20,000.",
        "Year 2 Real GDP = (436.8 / 130) × 100 = $336 bn → per capita = $336 bn / 16 m = $21,000.",
        "Real GDP per capita growth = [(21,000 − 20,000) / 20,000] × 100 = 5.0%.",
      ],
      hints: [
        "Compute Real GDP in Year 1 and Year 2 separately using (Nominal / Deflator) × 100.",
        "Divide each year's Real GDP by that year's population, then compute the percentage change.",
      ],
      strategy: "Deflate → divide by population → percentage change",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q04",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "p3-macro-quantitative",
      question:
        "**Tax Multiplier vs Spending Multiplier:** An open economy has {{MPS = 0.15}}, {{MPT = 0.15}}, and {{MPM = 0.10}} (so {{MPC_d = 0.60}} and spending multiplier {{k = 2.5}}). Instead of raising government spending, authorities cut lump-sum personal income taxes by **$20 billion**, so households initially spend {{MPC_d * $20 billion}} on domestic goods before multiplier rounds begin. Calculate the resulting total increase in **Real GDP** (in $ billion).",
      answer: { type: "number", value: 30, display: "$30 billion" },
      traps: [
        { spec: { type: "number", value: 50 }, feedback: "$50 billion would be the effect of $20 billion in direct ΔG; households leak 40% of a tax cut on round 1!" },
        { spec: { type: "number", value: 12 }, feedback: "$12 billion is only the first-round domestic spending injection; multiply by k = 2.5." },
      ],
      solution: [
        "Round 1 domestic spending injection from a $20 bn tax cut = MPCd × $20 bn = 0.60 × $20 bn = $12 billion.",
        "Apply spending multiplier k = 2.5 to that initial injection: ΔReal GDP = 2.5 × $12 bn = $30 billion.",
        "(Equivalently, the tax multiplier magnitude is k × MPCd = 2.5 × 0.60 = 1.5, strictly smaller than k = 2.5.)",
      ],
      hints: [
        "Unlike ΔG (where 100% is spent in round 1), how much of a $20 bn tax cut is initially spent domestically?",
        "Multiply that round-1 injection ($12 bn) by the spending multiplier k = 2.5.",
      ],
      strategy: "Tax cuts inject MPCd × ΔT in round 1, so |k_tax| = k × MPCd < k",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q05",
      kind: "short",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      guideRef: "p3-global-quantitative",
      question:
        "**Linear Tariff Model from Equations:** A small country's domestic market has {{Q_d = 200 - 2P}} and {{Q_s = -20 + 2P}} (quantities in thousands of units, {{P}} in $). The free-trade world price is **$30**. The government levies a **$10 specific tariff**, lifting domestic price to **$40**. Calculate the **total deadweight welfare loss** (in $ thousand).",
      answer: { type: "number", value: 200, display: "$200 thousand" },
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "$100 thousand is only one DWL triangle; include BOTH production DWL ($100k) and consumption DWL ($100k)." },
        { spec: { type: "number", value: 600 }, feedback: "$600 thousand is government tariff revenue ($10 × 60k), not deadweight welfare loss." },
      ],
      solution: [
        "At Pw = $30: Q1 = −20 + 2(30) = 40k; Q2 = 200 − 2(30) = 140k.",
        "At Pw + t = $40: Q3 = −20 + 2(40) = 60k; Q4 = 200 − 2(40) = 120k.",
        "Production DWL = 1/2 × (60 − 40) × $10 = $100k; Consumption DWL = 1/2 × (140 − 120) × $10 = $100k.",
        "Total DWL = $100k + $100k = $200 thousand.",
      ],
      hints: [
        "Plug P = 30 into Qs and Qd to find Q1 and Q2, then plug P = 40 to find Q3 and Q4.",
        "Compute 1/2 × 10 × [(Q3 − Q1) + (Q2 − Q4)].",
      ],
      strategy: "Evaluate linear domestic curves at Pw and Pw + t before computing welfare areas",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q06",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      guideRef: "p3-macro-quantitative",
      marks: 6,
      markbands: SIX_MARK_BANDS,
      question:
        "Evaluate the limitations of relying on the static Keynesian multiplier {{k = 1 / (MPS + MPT + MPM)}} when calibrating fiscal stimulus in a small open economy.",
      modelAnswer:
        "While the static formula gives policymakers a useful benchmark linking fiscal injections to aggregate demand, four real-world constraints weaken its accuracy in small open economies. First, marginal propensities are unstable across the cycle: during recessions, precautionary saving climbs while trade-dependent nations exhibit high import leakage (MPM), shrinking realised k and transferring demand abroad. Second, the algebraic expression assumes a horizontal aggregate supply curve with fixed prices; near full capacity, upward-sloping supply converts much of the expansion into demand-pull inflation rather than real output. Third, bond-financed deficits may lift interest rates and induce partial crowding out of private investment, whereas recognition and implementation lags risk injecting stimulus after recovery has already begun. Nevertheless, when spare capacity is deep and interest rates sit near zero, targeted public investment with high domestic labour content can still deliver meaningful multiplier gains.",
      markScheme: [
        { point: "Explains instability of marginal propensities (precautionary saving / high MPM leaking stimulus abroad)", keywords: ["precautionary saving", "import leakage", "unstable"] },
        { point: "Explains constant-price assumption breaks down along upward-sloping AS (demand-pull inflation)", keywords: ["horizontal aggregate supply", "demand-pull inflation", "full capacity"] },
        { point: "Explains financial crowding out via rising interest rates reducing private investment", keywords: ["crowding out", "private investment", "interest rates"] },
        { point: "Explains recognition and implementation time lags risking pro-cyclical timing", keywords: ["implementation lags", "recognition"] },
        { point: "Provides nuanced counter-evaluation (when spare capacity is deep & rates near zero, targeted domestic spending works better)", keywords: ["spare capacity", "domestic labour content", "nevertheless"] },
        { point: "Integrates small-open-economy specificity throughout rather than generic closed-economy points", keywords: ["trade-dependent", "transferring demand abroad"] },
      ],
      hints: [
        "Interrogate the key assumptions behind k = 1 / MPW: constant propensities, horizontal AS (no inflation), zero crowding out, and instant rounds.",
        "End with a balanced judgement on WHEN fiscal multipliers still hold up well (deep recession, zero lower bound, domestic-service targeting).",
      ],
      strategy: "Test every mathematical assumption of the model against open-economy reality",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q07",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Examine",
      guideRef: "p3-global-quantitative",
      marks: 6,
      markbands: SIX_MARK_BANDS,
      question:
        "Examine why replacing an import tariff with an equivalent unauctioned import quota can significantly worsen domestic economic welfare.",
      modelAnswer:
        "Although a tariff and a binding quota set to restrict imports identically produce the same initial domestic price jump, domestic producer surplus gain, and twin production-and-consumption deadweight triangles, an unauctioned quota introduces three extra welfare penalties. First, rectangle c — which stays inside the domestic economy as public treasury revenue under a tariff — converts into windfall quota rent; when allocated free to foreign exporters, domestic net welfare loss expands from (b + d) to (b + c + d). Second, if domestic demand subsequently expands, a fixed physical cap blocks additional imports completely, forcing steeper price spikes and larger consumer losses than a tariff that still permits extra imports at Pw + t. Third, administrative licence allocation fosters rent-seeking lobbying and bribery, wasting productive resources. Auctioning import licences competitively would recapture rectangle c for the treasury, though physical rigidity against demand surges remains.",
      markScheme: [
        { point: "Establishes baseline equivalence (identical price jump, producer gain, and twin DWL triangles b + d)", keywords: ["twin production-and-consumption", "identical", "b + d"] },
        { point: "Explains conversion of fiscal revenue c into quota rent leaking to foreign exporters (total loss b + c + d)", keywords: ["quota rent", "b + c + d", "foreign exporters"] },
        { point: "Explains dynamic rigidity under expanding demand (steeper price spikes vs tariff allowing extra imports)", keywords: ["demand subsequently expands", "steeper price spikes", "fixed physical cap"] },
        { point: "Explains rent-seeking, lobbying, or corruption wastes in licence allocation", keywords: ["rent-seeking", "bribery", "licence allocation"] },
        { point: "Weighs qualifying mechanism: competitive licence auctions can recapture rectangle c", keywords: ["auctioning", "recapture"] },
        { point: "Concludes with sharp synthesis distinguishing static rent transfer from dynamic rigidity", keywords: ["physical rigidity", "demand surges"] },
      ],
      hints: [
        "Compare rectangle c under a tariff vs an unauctioned quota allocated to foreign exporters.",
        "Add TWO dynamic/institutional drawbacks of quotas: rising domestic demand causing sharper price spikes, and rent-seeking/corruption around licences.",
      ],
      strategy: "Combine static area analysis (b + c + d) with dynamic demand shifts and governance",
    },
    {
      id: "5-hl-paper3-policy-quant-ch-q08",
      kind: "written",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Recommend",
      guideRef: "p3-ten-mark-policy",
      marks: 10,
      markbands: P3_POLICY_MARKBANDS,
      question:
        "**Stagflation Stretch — 10-Mark Policy Recommendation:** Stimulus data for the **Republic of Borealia** reveal **cost-push CPI inflation of 6.9%** (driven by grid-energy bottlenecks and port congestion), **real GDP growth of −0.4%**, **unemployment of 8.3%**, **public debt of 91% of GDP**, and an import propensity of {{MPM = 0.44}}. Using the data provided and your knowledge of economics, **recommend** a policy that Borealia's government could introduce to restore non-inflationary growth while respecting its fiscal and external constraints.",
      modelAnswer:
        "Borealia should implement a **market-based supply-side deregulation and competitive energy/port concession programme (private-sector licensing reform and grid-access liberalisation)** rather than broad demand-side fiscal stimulus or aggressive monetary tightening.\n\n**Anchor & Transmission:** Standard demand-side tools face an acute stagflation trap in Borealia's numbers. Large debt-funded fiscal expansion is doubly unsuitable: 91% debt-to-GDP leaves negligible borrowing headroom (risking bond-yield spikes and crowding out), while MPM = 0.44 alone caps the open-economy multiplier well below 2.3, leaking stimulus abroad and worsening 6.9% inflation. Conversely, aggressive interest-rate hikes would curb inflation only by deepening the −0.4% contraction and pushing joblessness further past 8.3%. Opening congested ports and electricity generation to competitive private entrants through streamlined licensing and pro-competition regulation incurs minimal treasury expenditure while cutting business logistics and power costs directly. Lower input expenses shift SRAS and LRAS rightwards, simultaneously easing cost-push price pressures below 6.9% and reviving output growth and employment.\n\n**Evaluation & Trade-offs:** First, deregulating network utilities carries lengthy regulatory and capital-build lags of 2–5 years, offering limited immediate relief to households struggling with 6.9% living costs and 8.3% joblessness. Second, private energy or port concessions risk degenerating into unregulated private monopolies exploiting price-inelastic users unless backed by strong independent price-cap oversight ('regulatory capture'). Third, dismantling entrenched licensing rules faces intense resistance from incumbent state operators and unions, potentially triggering short-run industrial disputes.\n\n**Complementary Safeguard & Judgement:** Pairing competitive deregulation with **budget-neutral, temporary relief targeted strictly at vulnerable low-income households (funded by redirecting untargeted subsidies) plus an independent utility regulator** protects equity and prevents monopoly abuse during the transition. Overall, low-fiscal-cost supply-side competition reform uniquely resolves Borealia's rightward-AS bottleneck without breaching its 91% debt ceiling or stoking inflation.",
      markScheme: [
        { point: "Decisive commitment to ONE primary policy (market-based energy/port deregulation & competitive private concessions)", keywords: ["deregulation", "grid-access", "concession programme"] },
        { point: "Quantitatively rejects fiscal stimulus via 91% debt ceiling and MPM = 0.44 capping k below 2.3", keywords: ["below 2.3", "91% debt-to-gdp", "negligible borrowing headroom"] },
        { point: "Justifies rejecting aggressive monetary tightening via −0.4% contraction and 8.3% unemployment", keywords: ["contraction", "stagflation trap", "aggressive interest-rate"] },
        { point: "Traces rightward SRAS and LRAS shift lowering both cost-push inflation (<6.9%) and raising real output", keywords: ["sras and lras rightwards", "input expenses", "cost-push price"] },
        { point: "Highlights minimal direct treasury cost respecting Borealia's fiscal constraint", keywords: ["minimal treasury expenditure", "low-fiscal-cost"] },
        { point: "Evaluates 2–5 year regulatory and infrastructure build lags", keywords: ["2-5 years", "build lags"] },
        { point: "Evaluates risk of private monopoly abuse / regulatory capture in network utilities", keywords: ["private monopolies", "regulatory capture"] },
        { point: "Evaluates political/union resistance and short-run industrial disruption", keywords: ["industrial disputes", "incumbent state"] },
        { point: "Adds budget-neutral targeted low-income relief and independent utility regulator as complementary safeguards", keywords: ["budget-neutral", "independent utility regulator"] },
        { point: "Balanced concluding judgement aligning policy with stagflation, debt, and external constraints", keywords: ["overall", "debt ceiling", "uniquely resolves"] },
      ],
      hints: [
        "Recognise the classic stagflation trap: why do BOTH expansionary fiscal (91% debt, MPM = 0.44, 6.9% inflation) AND tight monetary (−0.4% growth, 8.3% unemployment) fail here?",
        "Recommend a low-fiscal-cost market-based supply-side policy aimed directly at the energy and port bottlenecks shifting SRAS/LRAS rightwards.",
        "Evaluate 2–5 year lags, natural-monopoly abuse, union/incumbent resistance, and pair with budget-neutral targeted transfers + independent regulation.",
      ],
      strategy: "Use low-fiscal-cost supply-side reform to break a high-debt stagflation trap",
    },
  ],
};
