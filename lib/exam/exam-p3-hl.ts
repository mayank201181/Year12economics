import type { ExamPaper, MarkBand } from "../types.ts";

const P3_POLICY_10M_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Lists a policy with minimal economic explanation, no link to Paper 3 data or calculations, and no evaluation of trade-offs.",
    indicators: ["Generic statement disconnected from the country dossier", "No quantitative figures cited"],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Identifies a broadly relevant policy with limited explanation of the economic mechanism and only brief, descriptive reference to the stimulus.",
    indicators: ["Partial transmission chain", "Little or no evaluation of unintended effects or constraints"],
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Recommends a relevant policy supported by clear economic analysis and some references to dossier data/calculations; limited or one-sided evaluation of trade-offs.",
    indicators: ["Explains how policy addresses the target problem", "Cites 1–2 quantitative figures from earlier parts"],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Recommends a clear, well-justified policy explicitly anchored in multiple Paper 3 calculations and text extracts, with balanced evaluation of stakeholder impacts, constraints, and short- vs long-run effects.",
    indicators: ["Cites multiple exact calculations from the dossier", "Weighs 2+ trade-offs and stakeholder effects effectively"],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Presents a decisive, fully justified policy recommendation seamlessly integrating quantitative Paper 3 results, precise economic theory/diagram logic, rigorous multi-stakeholder and time-horizon evaluation, and realistic complementary safeguards.",
    indicators: ["Commits to ONE primary policy with complementary mitigation", "Integrates exact calculated numbers analytically throughout", "Explicitly weighs efficiency, equity, fiscal, and time-lag trade-offs"],
  },
];

const SVG_TARIFF_SOLAR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250" role="img" aria-label="Meridiana solar panel tariff diagram showing world price 200 dollars rising to 260 dollars, domestic supply rising from 30 to 50 thousand panels, domestic demand falling from 130 to 100 thousand panels, producer surplus gain, tariff revenue rectangle, and two deadweight welfare loss triangles">
  <rect x="0" y="0" width="380" height="250" fill="#fffdf8" rx="8" />
  <line x1="56" y1="20" x2="56" y2="206" stroke="#1e293b" stroke-width="2" />
  <line x1="56" y1="206" x2="354" y2="206" stroke="#1e293b" stroke-width="2" />
  <text x="10" y="32" font-size="11" font-weight="600" fill="#1e293b">Price</text>
  <text x="8" y="45" font-size="10" fill="#475569">($/panel)</text>
  <text x="232" y="238" font-size="11" font-weight="600" fill="#1e293b">Quantity ('000 panels)</text>
  <polygon points="56,118 152,118 112,162 56,162" fill="#10b981" fill-opacity="0.22" />
  <rect x="152" y="118" width="104" height="44" fill="#0ea5e9" fill-opacity="0.22" stroke="#0369a1" stroke-width="1" />
  <polygon points="112,162 152,162 152,118" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <polygon points="256,118 256,162 316,162" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <line x1="82" y1="195" x2="232" y2="30" stroke="#2563eb" stroke-width="2.4" />
  <text x="234" y="34" font-size="11" font-weight="700" fill="#2563eb">S_dom</text>
  <line x1="136" y1="30" x2="346" y2="184" stroke="#0f766e" stroke-width="2.4" />
  <text x="308" y="198" font-size="11" font-weight="700" fill="#0f766e">D_dom</text>
  <line x1="56" y1="162" x2="342" y2="162" stroke="#475569" stroke-width="2" />
  <text x="314" y="157" font-size="10" font-weight="700" fill="#334155">Sw ($200)</text>
  <line x1="56" y1="118" x2="342" y2="118" stroke="#b45309" stroke-width="2" />
  <text x="292" y="113" font-size="10" font-weight="700" fill="#b45309">Sw+t ($260)</text>
  <line x1="112" y1="162" x2="112" y2="206" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="152" y1="118" x2="152" y2="206" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="256" y1="118" x2="256" y2="206" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="316" y1="162" x2="316" y2="206" stroke="#64748b" stroke-dasharray="4 3" />
  <text x="22" y="166" font-size="11" font-weight="600" fill="#1e293b">200</text>
  <text x="22" y="122" font-size="11" font-weight="700" fill="#b45309">260</text>
  <text x="104" y="220" font-size="11" font-weight="600" fill="#1e293b">30</text>
  <text x="144" y="220" font-size="11" font-weight="600" fill="#1e293b">50</text>
  <text x="245" y="220" font-size="11" font-weight="600" fill="#1e293b">100</text>
  <text x="305" y="220" font-size="11" font-weight="600" fill="#1e293b">130</text>
  <text x="72" y="144" font-size="9" font-weight="700" fill="#047857">+PS</text>
  <text x="172" y="144" font-size="10" font-weight="700" fill="#0369a1">Tariff rev.</text>
  <text x="128" y="157" font-size="9" font-weight="700" fill="#991b1b">d1</text>
  <text x="268" y="157" font-size="9" font-weight="700" fill="#991b1b">d2</text>
</svg>`;

const SVG_J_CURVE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 240" role="img" aria-label="J-curve diagram showing Meridiana current account balance initially worsening below minus 7.4 billion dollars in the short run when Marshall-Lerner is less than 1, then rising above the starting level in the long run as elasticities increase above 1">
  <rect x="0" y="0" width="365" height="240" fill="#fffdf8" rx="8" />
  <line x1="60" y1="20" x2="60" y2="216" stroke="#1e293b" stroke-width="2" />
  <line x1="60" y1="112" x2="342" y2="112" stroke="#1e293b" stroke-width="1.8" />
  <text x="8" y="34" font-size="10" font-weight="600" fill="#1e293b">Current</text>
  <text x="8" y="47" font-size="10" font-weight="600" fill="#1e293b">Account</text>
  <text x="8" y="60" font-size="10" fill="#475569">(US$ bn)</text>
  <text x="44" y="116" font-size="10" font-weight="700" fill="#1e293b">0</text>
  <text x="314" y="128" font-size="11" font-weight="600" fill="#1e293b">Time</text>
  <text x="68" y="34" font-size="10" font-weight="600" fill="#047857">Surplus (+)</text>
  <text x="68" y="206" font-size="10" font-weight="600" fill="#dc2626">Deficit (−)</text>
  <line x1="60" y1="154" x2="330" y2="154" stroke="#94a3b8" stroke-dasharray="4 3" />
  <text x="14" y="158" font-size="10" font-weight="700" fill="#475569">−7.4</text>
  <path d="M 62 154 C 92 156, 110 194, 140 192 C 176 190, 212 130, 250 96 C 282 68, 308 58, 332 54" fill="none" stroke="#b45309" stroke-width="2.8" />
  <circle cx="62" cy="154" r="3.5" fill="#1e293b" />
  <circle cx="136" cy="192" r="3.5" fill="#dc2626" />
  <circle cx="232" cy="112" r="3.5" fill="#0f766e" />
  <text x="112" y="210" font-size="9" font-weight="700" fill="#dc2626">SR: 0.75 &lt; 1</text>
  <text x="236" y="72" font-size="9" font-weight="700" fill="#047857">LR: 1.55 &gt; 1</text>
  <text x="256" y="46" font-size="10" font-weight="700" fill="#b45309">J-Curve</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p3-hl",
  title: "Paper 3 (HL Only) · Quantitative Modelling & 10m Policy",
  level: "HL",
  calculator: true,
  minutes: 105,
  paperType: "Paper 3 (HL Only) · Quantitative Modelling & 10m Policy",
  questions: [
    // =======================================================================
    // DOSSIER 1: REPUBLIC OF NORDLAND (Q01–Q08)
    // =======================================================================
    {
      id: "exam-p3-hl-q01",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-micro-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Republic of Nordland — Micro & Macro Policy File]**\nNordland is a high-income European economy facing a deflationary output gap alongside sharp energy-driven inflation and high carbon emissions from road transport. Monthly domestic demand and supply for petrol (P in € per litre; Q in million litres per month) are modelled by:\n\n{{Q_d = 200 - 25P}} and {{Q_s = 20 + 35P}}\n\nCalculate the **pre-tax monthly consumer surplus** in Nordland's petrol market (in € millions, to 1 decimal place).",
      answer: {
        type: "number",
        value: 312.5,
        tolerance: 0.1,
        display: "€312.5 million",
      },
      hints: [
        "First solve Q_d = Q_s to find equilibrium price P_e and equilibrium quantity Q_e.",
        "Next find the vertical demand P-intercept by setting Q_d = 0 (200 − 25P = 0).",
        "Finally apply the consumer surplus triangle formula: CS = ½ × (P_intercept − P_e) × Q_e.",
      ],
      solution: [
        "Set {{200 - 25P = 20 + 35P}} → {{180 = 60P}} → {{P_e = 3.00}} (€3.00/litre).",
        "Substitute into demand: {{Q_e = 200 - 25(3) = 125}} million litres/month (check supply: {{20 + 35(3) = 125}}).",
        "Find demand P-intercept where {{Q_d = 0}}: {{200 - 25P = 0}} → {{P = 8.00}} (€8.00/litre).",
        "Consumer surplus = {{(1/2) * (8 - 3) * 125 = 0.5 * 5 * 125 = 312.5}} → **€312.5 million**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 625, tolerance: 0.5 },
          feedback: "625 omits the ½ factor in the area of a triangle: CS = ½ × (P_intercept − P_e) × Q_e.",
        },
        {
          spec: { type: "number", value: 187.5, tolerance: 0.5 },
          feedback: "187.5 used P_e (€3) as the triangle height instead of (P_intercept − P_e) = €8 − €3 = €5.",
        },
      ],
      commonError: "Forgetting the ½ factor or using equilibrium price P_e instead of (P_intercept − P_e) as the height of the consumer surplus triangle.",
      strategy: "Linear CS = ½ × (P_int − P_e) × Q_e",
    },
    {
      id: "exam-p3-hl-q02",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-micro-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Nordland · Specific Carbon Tax]** To curb transport emissions in the petrol market ({{Q_d = 200 - 25P}}, {{Q_s = 20 + 35P}}), Nordland introduces a specific indirect carbon tax of **€1.20 per litre** on petrol producers. Calculate the **monthly government tax revenue** collected (in € millions, to 1 decimal place).",
      answer: {
        type: "number",
        value: 129,
        tolerance: 0.1,
        display: "€129 million",
      },
      hints: [
        "Under a €1.20 specific tax on producers, sellers keep (P − 1.20) per litre, so the post-tax supply equation becomes Q_s' = 20 + 35(P − 1.20).",
        "Simplify Q_s' = −22 + 35P, equate to Q_d = 200 − 25P to find the consumer price P_c, then substitute into Q_d to get post-tax quantity Q_t.",
        "Multiply tax per litre (€1.20) by post-tax quantity Q_t (in million litres).",
      ],
      solution: [
        "New supply curve after €1.20/litre tax: {{Q_s = 20 + 35(P - 1.20) = -22 + 35P}}.",
        "Equate to demand: {{200 - 25P = -22 + 35P}} → {{222 = 60P}} → consumer price {{P_c = 3.70}} (€3.70/L; producer net price {{P_p = 2.50}}).",
        "Post-tax quantity: {{Q_t = 200 - 25(3.70) = 107.5}} million litres/month (note consumer burden = €0.70/L; producer burden = €0.50/L; ignoring externality DWL = €10.5m).",
        "Monthly government tax revenue = {{1.20 * 107.5 = 129.0}} → **€129 million**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 150, tolerance: 0.2 },
          feedback: "€150m multiplies €1.20 by PRE-tax quantity (125m litres)—tax revenue is collected on the smaller POST-tax quantity (107.5m litres).",
        },
        {
          spec: { type: "number", value: 10.5, tolerance: 0.1 },
          feedback: "€10.5m is the deadweight welfare loss triangle, not government tax revenue.",
        },
      ],
      commonError: "Shifting supply as Q_s = 20 + 35P − 1.20 instead of substituting (P − 1.20) inside the bracket for P.",
      strategy: "Specific tax t shifts Q_s = c + dP to Q_s' = c + d(P − t); Revenue = t × Q_t",
    },
    {
      id: "exam-p3-hl-q03",
      kind: "short",
      topicId: "2b-market-failure-power",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Nordland · Electricity Monopoly]** NordGrid is the regional electricity monopolist facing the daily revenue and cost schedule below:\n\n| Output Q (GWh/day) | Price / AR (€k/GWh) | Total Revenue (€k) | Marginal Revenue (€k) | Marginal Cost (€k) | Average Total Cost (€k) |\n|---|---|---|---|---|---|\n| 10 | 90 | 900 | — | 30 | 72.0 |\n| 20 | 80 | 1,600 | 70 | 40 | 56.0 |\n| 30 | 70 | 2,100 | 50 | 50 | 54.0 |\n| 40 | 60 | 2,400 | 30 | 60 | 55.5 |\n| 50 | 50 | 2,500 | 10 | 75 | 59.4 |\n\nCalculate NordGrid's **daily abnormal (economic) profit** when it operates at its profit-maximizing output (in € thousands).",
      answer: {
        type: "number",
        value: 480,
        display: "€480 thousand",
      },
      hints: [
        "Locate the profit-maximizing output where Marginal Cost equals Marginal Revenue (MC = MR).",
        "At that output, compute Total Profit = (Price − ATC) × Q (equivalently TR − TC).",
      ],
      solution: [
        "Profit maximization occurs where {{MC = MR}}: at **Q = 30 GWh/day**, both MC and MR equal €50k.",
        "At Q = 30, Price (AR) = €70k and Average Total Cost (ATC) = €54.0k (so Total Cost = {{54 * 30 = 1620}} thousand).",
        "Daily abnormal profit = {{(70 - 54) * 30 = 16 * 30 = 480}} (equivalently {{2100 - 1620 = 480}}) → **€480 thousand**.",
        "Note for policy synthesis: allocatively efficient output (P = MC = €60k) is Q = 40 GWh/day, where profit would be €180k.",
      ],
      traps: [
        {
          spec: { type: "number", value: 600 },
          feedback: "€600k subtracts MC (€50k) from Price (€70k) instead of subtracting Average Total Cost (€54k).",
        },
        {
          spec: { type: "number", value: 180 },
          feedback: "€180k is profit at the allocatively efficient output (Q = 40, where P = MC), not at the profit-maximizing output (Q = 30, where MC = MR).",
        },
      ],
      commonError: "Computing (P − MC) × Q instead of (P − ATC) × Q, or picking Q = 40 (P = MC) instead of Q = 30 (MC = MR).",
      strategy: "Find Q* via MC = MR, then Profit = (AR − ATC) × Q*",
    },
    {
      id: "exam-p3-hl-q04",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-macro-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Nordland · Weighted CPI Basket]** Nordland's statistical bureau calculates its Consumer Price Index (base year 2023 = 100) from four household spending categories:\n\n| Category | Basket Weight (%) | Price Index 2023 | Price Index 2024 |\n|---|---|---|---|\n| Housing & Energy | 35% | 100 | 116 |\n| Food & Groceries | 25% | 100 | 106 |\n| Transport | 20% | 100 | 112 |\n| Services & Other | 20% | 100 | 101 |\n\nCalculate Nordland's **weighted CPI in 2024** (to 1 decimal place).",
      answer: {
        type: "number",
        value: 109.7,
        tolerance: 0.05,
        display: "109.7",
      },
      hints: [
        "Multiply each category's 2024 price index by its decimal weight (0.35, 0.25, 0.20, 0.20).",
        "Sum the four weighted contributions—do NOT take a simple unweighted average of the four indices!",
      ],
      solution: [
        "Compute each weighted contribution: Housing & Energy = {{0.35 * 116 = 40.6}}; Food = {{0.25 * 106 = 26.5}}; Transport = {{0.20 * 112 = 22.4}}; Services = {{0.20 * 101 = 20.2}}.",
        "Sum all four contributions: {{40.6 + 26.5 + 22.4 + 20.2 = 109.7}}.",
        "Nordland's weighted CPI in 2024 is **109.7** (an annual inflation rate of 9.7%, driven heavily by +16% Housing & Energy and +12% Transport).",
      ],
      traps: [
        {
          spec: { type: "number", value: 108.75, tolerance: 0.1 },
          feedback: "108.75 is the unweighted mean of the four indices—you must weight each category by its household budget share.",
        },
        {
          spec: { type: "number", value: 9.7, tolerance: 0.05 },
          feedback: "9.7% is the inflation RATE—the question asks for the 2024 weighted CPI index level (109.7).",
        },
      ],
      commonError: "Taking an unweighted mean (108.75) or reporting the inflation rate (9.7) instead of the CPI index number (109.7).",
      strategy: "Weighted CPI = Σ (Weight_i × Index_i)",
    },
    {
      id: "exam-p3-hl-q05",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-macro-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Nordland · Progressive Taxation]** Nordland levies progressive personal income tax according to the following annual brackets:\n\n| Annual Taxable Income (€) | Marginal Tax Rate (%) |\n|---|---|\n| 0 – 15,000 | 0% |\n| 15,001 – 45,000 | 20% |\n| 45,001 – 85,000 | 35% |\n| Above 85,000 | 45% |\n\nFor a Nordland household earning **€75,000** per year, calculate its **average tax rate** (as a percentage, to 1 decimal place).",
      answer: {
        type: "number",
        value: 22,
        tolerance: 0.05,
        display: "22%",
      },
      hints: [
        "Tax each income slice separately: €15,000 at 0%, €30,000 at 20%, and the remaining €30,000 (from €45,001 to €75,000) at 35%.",
        "Add total tax paid across all three brackets, then divide by total income (€75,000) and multiply by 100%.",
      ],
      solution: [
        "Bracket 1 (€0–€15,000): {{0 * 15000 = 0}}.",
        "Bracket 2 (€15,001–€45,000): {{0.20 * 30000 = 6000}} (€6,000).",
        "Bracket 3 (€45,001–€75,000): {{0.35 * 30000 = 10500}} (€10,500).",
        "Total tax = {{0 + 6000 + 10500 = 16500}} (€16,500); Average tax rate = {{(16500 / 75000) * 100 = 22.0}}% (compare with marginal tax rate = 35%).",
      ],
      traps: [
        {
          spec: { type: "number", value: 35, tolerance: 0.1 },
          feedback: "35% is the MARGINAL tax rate on the top slice, not the AVERAGE tax rate across all €75,000.",
        },
        {
          spec: { type: "number", value: 16500 },
          feedback: "€16,500 is total tax paid in euros—divide by €75,000 and multiply by 100 to obtain the average tax rate (%).",
        },
      ],
      commonError: "Applying the 35% top-bracket marginal rate to the entire €75,000 income instead of calculating bracket by bracket.",
      strategy: "Sum tax per bracket → ATR = (Total Tax / Total Income) × 100%",
    },
    {
      id: "exam-p3-hl-q06",
      kind: "short",
      topicId: "3b-macro-policies",
      guideRef: "multiplier-crowding-out-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "**[Dossier 1 · Nordland · Keynesian Multiplier]** Nordland's current real GDP is **€310 billion**, while full-employment potential output (Y_fe) is estimated at **€340 billion**. Economists estimate Nordland's marginal propensities as {{MPS = 0.10}}, {{MPT = 0.14}}, and {{MPM = 0.16}}. Calculate the **initial increase in government spending (ΔG)** required to close Nordland's deflationary gap (in € billions, to 1 decimal place).",
      answer: {
        type: "number",
        value: 12,
        tolerance: 0.05,
        display: "€12 billion",
      },
      hints: [
        "First find the size of the deflationary gap: Y_fe − Real GDP = 340 − 310 = €30 billion.",
        "Next sum ALL three marginal leakages (MPW = MPS + MPT + MPM) and compute the Keynesian multiplier k = 1 / MPW.",
        "Divide the required ΔReal GDP (€30bn) by k to obtain the required initial ΔG.",
      ],
      solution: [
        "Deflationary gap to close = {{340 - 310 = 30}} (€30 billion).",
        "Total marginal propensity to withdraw = {{MPS + MPT + MPM = 0.10 + 0.14 + 0.16 = 0.40}} (so {{MPC = 0.60}}).",
        "Keynesian multiplier {{k = 1 / 0.40 = 2.5}}.",
        "Required initial fiscal injection: {{30 / 2.5 = 12.0}} → **€12 billion**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 75, tolerance: 0.5 },
          feedback: "You multiplied €30bn × 2.5 = €75bn instead of DIVIDING the €30bn gap by k = 2.5.",
        },
        {
          spec: { type: "number", value: 3, tolerance: 0.05 },
          feedback: "€3bn used only MPS = 0.10 (giving k = 10)—in an open economy with taxes you must sum MPS + MPT + MPM = 0.40.",
        },
        {
          spec: { type: "number", value: 30, tolerance: 0.1 },
          feedback: "€30bn ignores the Keynesian multiplier completely—each €1 of ΔG generates €2.50 of total real GDP.",
        },
      ],
      commonError: "Omitting MPT and MPM from the denominator of k, or multiplying the output gap by k instead of dividing by k.",
      strategy: "k = 1 / (MPS + MPT + MPM) → ΔG = Output Gap / k",
    },
    {
      id: "exam-p3-hl-q07",
      kind: "written",
      topicId: "3b-macro-policies",
      guideRef: "multiplier-crowding-out-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      question:
        "**[Dossier 1 · Nordland · 4 marks]** Using macroeconomic theory, **explain TWO reasons** why an initial €12.0 billion fiscal stimulus by Nordland's government may raise real GDP by **less** than the full €30.0 billion predicted by the simple Keynesian multiplier.",
      hints: [
        "Reason 1: Crowding-out effect—if Nordland borrows €12bn in bond markets, increased demand for loanable funds pushes up real interest rates, discouraging private investment (I) and interest-sensitive consumption (C).",
        "Reason 2: Price-level inflation along an upward-sloping AS curve (already heightened with Nordland's CPI at 109.7) absorbs part of the AD shift in higher prices rather than real output, OR higher actual leakages (rising MPM/MPS when household confidence is weak).",
      ],
      modelAnswer:
        "First, financing the €12.0 billion fiscal injection through government borrowing can trigger the **crowding-out effect**: increased sovereign demand for loanable funds pushes up market **real interest rates**, raising borrowing costs and discouraging private-sector **business investment (I)** and household spending on durables, which partially offsets the rightward shift in aggregate demand.\n\nSecond, the simple multiplier assumes a flat price level (horizontal Keynesian AS). Because Nordland is already experiencing **9.7% inflation (CPI 109.7)**, the economy likely operates on an **upward-sloping SRAS curve** where capacity bottlenecks mean part of the extra aggregate demand leaks into **higher prices rather than real output**—while weak consumer confidence or high import content in infrastructure projects can push actual marginal leakages (**MPS and MPM**) above 0.40, shrinking the true multiplier below 2.5.",
      markScheme: [
        { point: "Identifies crowding-out effect from deficit-financed government borrowing", keywords: ["crowding-out", "loanable funds"] },
        { point: "Traces crowding-out mechanism: higher real interest rates reduce private investment (I) / consumption", keywords: ["real interest rates", "business investment"] },
        { point: "Explains upward-sloping AS / inflationary leakage absorbing AD into higher prices (linking to CPI 109.7)", keywords: ["upward-sloping sras", "109.7"] },
        { point: "Notes higher actual marginal leakages (MPS/MPM) reducing the realized multiplier below 2.5", keywords: ["below 2.5", "marginal leakages"] },
      ],
      commonError: "Simply writing 'crowding out happens' without explaining the interest-rate transmission mechanism to private investment.",
      strategy: "4m HL Paper 3 explain Q = 2 fully developed causal mechanisms grounded in Nordland's dossier!",
    },
    {
      id: "exam-p3-hl-q08",
      kind: "written",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-ten-mark-policy",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Recommend",
      marks: 10,
      question:
        "**[Dossier 1 · Nordland · Compulsory HL Paper 3 Policy Recommendation · 10 marks]**\nKey dossier findings for the Republic of Nordland:\n- **Output gap & multiplier:** Real GDP is €310bn vs full-employment €340bn (**€30bn deflationary gap**); `k = 2.5` (`MPS = 0.10, MPT = 0.14, MPM = 0.16`), implying `ΔG = €12bn`.\n- **Inflation:** Weighted 2024 **CPI = 109.7** (9.7% inflation), led by **Housing & Energy (+16%)** and **Transport (+12%)**.\n- **Energy monopoly:** Regional utility **NordGrid** maximizes profit at `Q = 30 GWh/day`, earning **€480k/day abnormal profit** while restricting output below allocative efficiency (`Q = 40`, where `P = MC = €60k`).\n- **Carbon petrol tax:** The €1.20/L tax raises **€129m/month (€1.55bn/yr)**, with consumers bearing **€0.70/L** of the burden.\n\n**Using the data and your calculations from the Nordland dossier, recommend a policy** that Nordland's government should implement to close its deflationary gap without worsening inflation or low-income inequality.",
      hints: [
        "Commit explicitly to ONE clear primary policy (e.g. a targeted €12bn interventionist green-energy and public-transit fiscal stimulus financed partially via recycled carbon-tax revenue and progressive taxation, paired with NordGrid price regulation).",
        "Weave AT LEAST FOUR exact calculated numbers from Q1–Q6 analytically into your justification (€30bn gap, k = 2.5, ΔG = €12bn, CPI 109.7 / +16% energy, €480k/day NordGrid profit, €129m/month carbon revenue, €0.70/L consumer burden).",
        "Evaluate 3 concrete trade-offs: crowding-out & fiscal debt, implementation time lags of green infrastructure vs short-run AD inflation risk, and stakeholder impacts (low-income commuters, NordGrid shareholders, taxpayers).",
      ],
      modelAnswer:
        "**Primary Policy Recommendation:** Nordland's government should implement a **targeted €12 billion interventionist fiscal-and-supply-side green-energy and public-transit investment package**, partially financed by recycling its **€129 million/month (€1.55 billion/year) petrol carbon-tax revenue** into clean transit and low-income energy rebates, complemented by **marginal-cost / price-cap regulation on NordGrid**.\n\n**Economic Justification (Anchored in Dossier Calculations):**\nNordland faces simultaneous recessionary slack (**€30 billion deflationary gap**, €310bn vs €340bn) and severe cost-push inflation (**CPI = 109.7**, driven heavily by **+16% Housing & Energy** and **+12% Transport**). A conventional untargeted demand stimulus would close the gap via the **Keynesian multiplier (k = 2.5)**—requiring an initial **ΔG = €12 billion**—but risks fanning 9.7% inflation further along an upward-sloping SRAS curve. Directing that €12 billion specifically into **renewable grid capacity, battery storage, and electrified commuter rail** generates a **dual AD + AS impact**: in the short run, public capital outlays stimulate domestic construction employment and close the €30bn gap; over the medium term, cheaper clean power and transit shift **SRAS and LRAS rightwards**, attacking the +16% energy and +12% transport inflation drivers directly.\n\nCrucially, pairing this package with **price-cap regulation moving NordGrid closer to allocative efficiency (P = MC = €60k at Q = 40 GWh/day instead of Q = 30)** cuts electricity tariffs immediately while trimming NordGrid's **€480,000/day abnormal monopoly profit** without forcing losses (profit stays positive at €180k/day). Recycling part of the **€129m/month carbon-tax revenue** (where motorists bear **€0.70/L** of the €1.20/L levy, hitting poorer commuters regressively) into means-tested transit vouchers neutralizes the regressive equity burden while preserving the carbon price signal.\n\n**Evaluation of Trade-Offs & Stakeholders:**\n1. **Crowding-out & fiscal sustainability:** Even after carbon-tax recycling (~€1.55bn/yr) and Nordland's **progressive income tax system** (22% average rate at €75,000, rising to 35%–45% top marginal brackets), borrowing the remainder of €12bn risks raising real interest rates and partially **crowding out private investment**, shrinking the realized multiplier below **2.5**.\n2. **Short-run vs long-run time lags:** Renewable grids and rail lines take 3–5 years to expand SRAS/LRAS, whereas the €12bn AD boost hits within months—creating a **short-run demand-pull inflation risk** above 9.7% unless phased carefully and supported immediately by NordGrid price regulation.\n3. **Stakeholder conflict:** **Low-income households and commuters** gain strongly from lower electricity bills and recycled rebates, whereas **NordGrid shareholders** face sharply lower monopoly profits (€480k down toward €180k/day), which could reduce private grid-maintenance incentives unless regulators allow fair normal return.\n\n**Synthesis:** Despite crowding-out risks and construction lags, a **phased, carbon-revenue-recycled green-infrastructure fiscal package paired with NordGrid price regulation** is Nordland's strongest policy choice because it uniquely resolves all three dossier problems—closing the €30bn output gap, lowering +16% energy costs, and correcting regressive carbon-tax incidence simultaneously.",
      markScheme: [
        { point: "Commits decisively to ONE clear primary policy (targeted €12bn green-energy/transit fiscal-supply-side package)", keywords: ["primary policy recommendation", "green-energy"] },
        { point: "Cites exact output gap (€30bn) and Keynesian multiplier calculations (k = 2.5, ΔG = €12bn) accurately", keywords: ["30 billion deflationary gap", "k = 2.5"] },
        { point: "Integrates weighted CPI calculation (109.7 / 9.7% inflation, +16% energy, +12% transport) into policy diagnosis", keywords: ["109.7", "+16%"] },
        { point: "Explains dual short-run AD and long-run SRAS/LRAS rightward shift solving both slack and cost-push inflation", keywords: ["dual ad + as", "sras and lras rightwards"] },
        { point: "Integrates NordGrid monopoly calculation (Q=30 vs allocative Q=40, €480k/day profit) via price-cap regulation", keywords: ["480,000/day", "price-cap regulation"] },
        { point: "Integrates petrol carbon-tax revenue (€129m/month) and regressive €0.70/L consumer burden via revenue recycling", keywords: ["129m/month", "0.70/l"] },
        { point: "Evaluates crowding-out and fiscal borrowing constraint referencing progressive tax structure (22% ATR / 35%–45% MTR)", keywords: ["crowding out private investment", "22% average rate"] },
        { point: "Evaluates short-run vs long-run time lags and interim demand-pull inflation risk", keywords: ["3–5 years", "short-run demand-pull"] },
        { point: "Evaluates conflicting stakeholder impacts (low-income commuters vs NordGrid shareholders/investment incentives)", keywords: ["nordgrid shareholders", "maintenance incentives"] },
        { point: "Concludes with a balanced, phased synthesis directly addressing gap, inflation, and equity together", keywords: ["phased", "regressive carbon-tax"] },
      ],
      markbands: P3_POLICY_10M_BANDS,
      commonError: "Writing a generic macro essay without citing YOUR calculated figures (€30bn gap, k=2.5, ΔG=€12bn, CPI 109.7, €480k/day, €129m/month) or failing to commit to a clear primary recommendation.",
      strategy: "HL P3 10m Formula: Commit to 1 primary policy → Cite 4+ dossier calculations → Diagram/transmission logic → 3 stakeholder/time-lag trade-offs → Synthesis",
    },

    // =======================================================================
    // DOSSIER 2: FEDERATION OF MERIDIANA (Q09–Q15)
    // =======================================================================
    {
      id: "exam-p3-hl-q09",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 2 · Federation of Meridiana — Global Trade & External Balance File]**\nMeridiana is an emerging trading economy trading with its larger neighbour Altera. Using all domestic resources, daily maximum outputs (linear PPCs) are:\n\n| Country | Textiles (thousand metres) | Microchips (thousand units) |\n|---|---|---|\n| **Meridiana** | 60 | 20 |\n| **Altera** | 80 | 40 |\n\nCalculate Meridiana's **opportunity cost of producing 1 thousand microchips**, expressed in thousand metres of textiles.",
      answer: {
        type: "number",
        value: 3,
        display: "3",
      },
      hints: [
        "Recall the comparative advantage rule: Opportunity cost of 1 unit of Good X = (Max output of Good Y) / (Max output of Good X).",
        "For Meridiana, divide maximum textiles (60) by maximum microchips (20).",
      ],
      solution: [
        "Meridiana's opportunity cost of 1 thousand microchips = {{60 / 20 = 3}} thousand metres of textiles.",
        "By comparison, Altera's opportunity cost of 1 thousand microchips is {{80 / 40 = 2}} thousand metres of textiles.",
        "Therefore Altera has comparative advantage in microchips (2 < 3), while **Meridiana has comparative advantage in textiles** (giving up {{1/3}} microchip vs Altera's {{1/2}} microchip), and mutually beneficial trade occurs at terms between 2 and 3 metres of textiles per microchip.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0.33, tolerance: 0.02 },
          feedback: "0.33 (1/3) is the opportunity cost of 1 thousand metres of TEXTILES in terms of microchips—the question asks for the cost of 1 thousand MICROCHIPS.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "2 is Altera's opportunity cost (80/40)—check Meridiana's row (60/20 = 3).",
        },
      ],
      commonError: "Inverting the opportunity-cost fraction (computing 20/60 instead of 60/20).",
      strategy: "Opp cost of 1 Microchip = Max Textiles / Max Microchips",
    },
    {
      id: "exam-p3-hl-q10",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      diagram: SVG_TARIFF_SOLAR,
      question:
        "**[Dossier 2 · Meridiana · Solar Panel Tariff Welfare]** To shield a fledgling domestic solar-panel industry, Meridiana imposes a specific tariff of **US$60 per panel** on imported solar panels, lifting the domestic price from the world price of US$200 to US$260 per panel. As shown in the diagram, domestic supply rises from **30 to 50 thousand panels** while domestic demand falls from **130 to 100 thousand panels**. Calculate the **total deadweight welfare loss** (production inefficiency plus consumption loss) caused by the tariff (in US$ millions, to 2 decimal places).",
      answer: {
        type: "number",
        value: 1.5,
        tolerance: 0.01,
        display: "$1.5 million",
      },
      hints: [
        "Compute BOTH deadweight welfare loss triangles separately: d1 (production inefficiency) = ½ × t × (Q₃ − Q₁) and d2 (consumption loss) = ½ × t × (Q₂ − Q₄).",
        "Here t = $60, (Q₃ − Q₁) = 20 thousand panels, and (Q₂ − Q₄) = 30 thousand panels; add d1 + d2 and express in US$ millions.",
      ],
      solution: [
        "Production inefficiency triangle d1 = {{(1/2) * 60 * (50 - 30)}} thousand = {{30 * 20}} thousand = **$0.60 million**.",
        "Consumption welfare loss triangle d2 = {{(1/2) * 60 * (130 - 100)}} thousand = {{30 * 30}} thousand = **$0.90 million**.",
        "Total deadweight welfare loss = {{0.60 + 0.90 = 1.50}} → **$1.5 million** (note: tariff revenue = $60 × 50k = $3.0m; total consumer surplus loss = −$6.9m).",
      ],
      traps: [
        {
          spec: { type: "number", value: 3, tolerance: 0.05 },
          feedback: "$3.0 million is either government tariff revenue ($60 × 50k) OR total DWL without the ½ factor—remember triangles have area ½ × base × height!",
        },
        {
          spec: { type: "number", value: 0.6, tolerance: 0.02 },
          feedback: "$0.60m is only the production inefficiency triangle—you must add the $0.90m consumption loss triangle too.",
        },
        {
          spec: { type: "number", value: 0.9, tolerance: 0.02 },
          feedback: "$0.90m is only the consumption loss triangle—add the $0.60m production inefficiency triangle as well.",
        },
      ],
      commonError: "Calculating only one of the two DWL triangles or forgetting the ½ factor.",
      strategy: "Total Tariff DWL = ½·t·(Q₃ − Q₁) + ½·t·(Q₂ − Q₄)",
    },
    {
      id: "exam-p3-hl-q11",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 2 · Meridiana · Producer Surplus Gain]** Using the same solar-panel tariff data (price rising by US$60 from US$200 to US$260 per panel; domestic supply expanding from **30 to 50 thousand panels**), calculate the **increase in domestic producer surplus (ΔPS)** resulting from the tariff (in US$ millions, to 2 decimal places).",
      answer: {
        type: "number",
        value: 2.4,
        tolerance: 0.01,
        display: "$2.4 million",
      },
      hints: [
        "The gain in domestic producer surplus (+PS) is the green trapezoid bounded by Pw ($200), Pw+t ($260), the vertical axis, and S_dom.",
        "Compute Area of trapezoid = ½ × (Q₁ + Q₃) × t = ½ × (30 + 50) thousand × $60 (or rectangle 30k × $60 plus triangle ½ × 20k × $60).",
      ],
      solution: [
        "Using the trapezoid area formula: {{(1/2) * (30 + 50) * 60}} thousand = {{40 * 60}} thousand = **$2,400 thousand**.",
        "Equivalently, rectangle ({{30 * 60 = 1800}}k) + triangle ({{0.5 * 20 * 60 = 600}}k) = $2,400k.",
        "Expressed in US$ millions, domestic producer surplus rises by **$2.4 million** (check welfare identity: ΔCS −$6.9m + ΔPS +$2.4m + Rev +$3.0m = −$1.5m DWL).",
      ],
      traps: [
        {
          spec: { type: "number", value: 1.8, tolerance: 0.02 },
          feedback: "$1.8m captures only the rectangle (30k × $60)—include the right-hand triangle (½ × 20k × $60 = $0.6m) for the newly supplied panels!",
        },
        {
          spec: { type: "number", value: 3, tolerance: 0.05 },
          feedback: "$3.0m computes the full rectangle (50k × $60), wrongly including the $0.6m production inefficiency triangle inside producer surplus.",
        },
      ],
      commonError: "Computing the full rectangle 50k × $60 = $3.0m (forgetting to subtract the $0.6m production DWL triangle).",
      strategy: "Tariff ΔPS trapezoid = ½ × (Q₁ + Q₃) × t",
    },
    {
      id: "exam-p3-hl-q12",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 2 · Meridiana · Exchange Rate Depreciation]** Meridiana's floating currency, the Meridian Crown (MC), depreciated against the US dollar from **US$1 = 5.00 MC** in 2023 to **US$1 = 6.25 MC** in 2024. A Meridiana textile shipment is priced domestically at **125,000 MC** in both years. Calculate the **percentage fall in the US dollar price** of this textile export between 2023 and 2024 (state as a positive percentage, to 1 decimal place).",
      answer: {
        type: "number",
        value: 20,
        tolerance: 0.05,
        display: "20%",
      },
      hints: [
        "Convert 125,000 MC into US dollars at the 2023 rate (÷ 5.00) and at the 2024 rate (÷ 6.25).",
        "Compute [(USD_2023 − USD_2024) / USD_2023] × 100%—do NOT simply compute (6.25 − 5.00) / 5.00!",
      ],
      solution: [
        "2023 US$ price = {{125000 / 5.00 = 25000}} (US$25,000).",
        "2024 US$ price = {{125000 / 6.25 = 20000}} (US$20,000).",
        "Percentage fall = {{((25000 - 20000) / 25000) * 100 = (5000 / 25000) * 100 = 20.0}}% (equivalently, 1 MC fell from US$0.20 to US$0.16, a **20%** depreciation of the MC).",
      ],
      traps: [
        {
          spec: { type: "number", value: 25, tolerance: 0.1 },
          feedback: "25% is the US DOLLAR'S appreciation against the MC ((6.25 − 5.00)/5.00)—the MC's depreciation / USD export price fall is 20%!",
        },
        {
          spec: { type: "number", value: 5000 },
          feedback: "$5,000 is the dollar fall in price—divide by the original $25,000 and multiply by 100 to find the percentage fall.",
        },
      ],
      commonError: "Computing (6.25 − 5.00)/5.00 = 25% (the USD's appreciation) instead of converting to USD prices first (20% depreciation of the MC).",
      strategy: "Convert currency to USD prices first (1/5.00 → 1/6.25) to avoid the appreciation/depreciation asymmetry trap",
    },
    {
      id: "exam-p3-hl-q13",
      kind: "short",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Dossier 2 · Meridiana · Balance of Payments]** Meridiana's 2024 Balance of Payments components (in US$ billions) are summarized below:\n\n| Component | US$ billion |\n|---|---|\n| Exports of goods | +32.5 |\n| Imports of goods | −41.0 |\n| Net trade in services | +2.3 |\n| Net primary income | −2.8 |\n| Net secondary income | +1.6 |\n| Capital account | +0.4 |\n| Net errors and omissions | 0.0 |\n\nCalculate the **Financial Account balance** (in US$ billions, to 1 decimal place) required for Meridiana's Balance of Payments to sum to zero.",
      answer: {
        type: "number",
        value: 7,
        tolerance: 0.05,
        display: "7.0",
      },
      hints: [
        "First sum all five Current Account items: (+32.5 − 41.0 + 2.3 − 2.8 + 1.6).",
        "Then apply the Balance of Payments identity: Current Account + Capital Account + Financial Account (+ Errors & Omissions) = 0.",
      ],
      solution: [
        "Balance of goods = {{32.5 - 41.0 = -8.5}}; add services (+2.3), primary (−2.8), and secondary (+1.6): Current Account = {{-8.5 + 2.3 - 2.8 + 1.6 = -7.4}} US$ billion.",
        "Apply BoP identity: {{-7.4 + 0.4 + FA + 0.0 = 0}} → {{-7.0 + FA = 0}}.",
        "Required Financial Account balance = **+7.0** (a US$7.0 billion financial-account surplus financing the deficit).",
      ],
      traps: [
        {
          spec: { type: "number", value: -7.4, tolerance: 0.05 },
          feedback: "−7.4 is the Current Account balance—now include the Capital Account (+0.4) and solve CA + KA + FA = 0.",
        },
        {
          spec: { type: "number", value: 7.4, tolerance: 0.05 },
          feedback: "7.4 omitted the Capital Account (+0.4)—remember CA + KA + FA = 0.",
        },
        {
          spec: { type: "number", value: -7, tolerance: 0.05 },
          feedback: "Check the sign: a Current Account deficit (−7.4) must be financed by a POSITIVE Financial Account surplus (+7.0).",
        },
      ],
      commonError: "Omitting the Capital Account (+0.4) or reversing the sign of the Financial Account surplus.",
      strategy: "BoP Identity: CA + KA + FA + Errors = 0",
    },
    {
      id: "exam-p3-hl-q14",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "bop-marshall-lerner-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      diagram: SVG_J_CURVE,
      question:
        "**[Dossier 2 · Meridiana · 4 marks]** Economists estimate Meridiana's trade price elasticities of demand as **short-run {{|PED_X| = 0.35}}, {{|PED_M| = 0.40}}**, rising over 12–24 months to **long-run {{|PED_X| = 0.85}}, {{|PED_M| = 0.70}}**. Using the **Marshall–Lerner condition** and the **J-curve** diagram, **explain** how the 20% depreciation of the Meridian Crown affects Meridiana's −US$7.4 billion current account deficit over time.",
      hints: [
        "Compute BOTH sums explicitly: short-run 0.35 + 0.40 = 0.75 (< 1) and long-run 0.85 + 0.70 = 1.55 (> 1).",
        "Explain why existing contracts and buyer adjustment lags cause the deficit to deepen below −US$7.4bn initially (price effect dominates), before narrowing and improving along the rising arm of the J-curve once elasticities exceed 1 (volume effect dominates).",
      ],
      modelAnswer:
        "The **Marshall–Lerner condition** states that currency depreciation improves the current account balance only if **|PED_X| + |PED_M| > 1**.\n\nIn the **short run**, Meridiana's combined trade elasticity is **0.35 + 0.40 = 0.75 (< 1)**, so the Marshall–Lerner condition **fails**. Because existing trade contracts are locked in and domestic buyers need time to switch away from foreign machinery and fuel, import volumes fall only slightly while import bills jump in local currency—causing the price effect to outweigh the volume effect and **worsening the current account deficit further below −US$7.4 billion** (the downward dip of the **J-curve**).\n\nOver the **long run (12–24 months)**, foreign buyers respond to Meridiana's 20% cheaper USD textile prices and domestic firms substitute local suppliers, raising elasticities to **0.85 + 0.70 = 1.55 (> 1)**. Because the Marshall–Lerner condition now **holds**, export revenues rise faster than import spending, lifting the balance upwards along the **J-curve** to narrow (and potentially eliminate) the current account deficit.",
      markScheme: [
        { point: "States Marshall–Lerner condition accurately (|PED_X| + |PED_M| > 1 for depreciation to improve trade balance)", keywords: ["marshall–lerner", "> 1"] },
        { point: "Calculates short-run sum 0.35 + 0.40 = 0.75 (< 1) and explains contract/switching lags worsening the deficit below −$7.4bn", keywords: ["0.75", "contracts"] },
        { point: "Calculates long-run sum 0.85 + 0.70 = 1.55 (> 1) so the Marshall–Lerner condition holds", keywords: ["1.55", "holds"] },
        { point: "Links transition from short-run dip to long-run improvement explicitly to the J-curve trajectory", keywords: ["j-curve", "volume effect"] },
      ],
      commonError: "Stating Marshall–Lerner abstractly without calculating 0.75 < 1 and 1.55 > 1 from Meridiana's dossier elasticities.",
      strategy: "Always show BOTH numerical sums (SR < 1 vs LR > 1) and connect price-vs-volume effects to the J-curve shape!",
    },
    {
      id: "exam-p3-hl-q15",
      kind: "written",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-ten-mark-policy",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Recommend",
      marks: 10,
      question:
        "**[Dossier 2 · Meridiana · Compulsory HL Paper 3 Policy Recommendation · 10 marks]**\nKey dossier findings for the Federation of Meridiana:\n- **Comparative advantage:** Meridiana gives up **1/3 microchip per metre of textiles** (vs Altera's 1/2), giving Meridiana comparative advantage in textiles while Altera holds comparative advantage in microchips (opp. cost 2 vs 3 textiles).\n- **Solar panel tariff ($60/panel):** Generates **$3.0m tariff revenue** and **+$2.4m domestic producer surplus**, but imposes **−$6.9m consumer surplus loss**, **$1.5m deadweight welfare loss**, and dearer clean energy.\n- **External balance:** Current account deficit of **−US$7.4bn** financed by a **+US$7.0bn financial account surplus** (rising external debt/FDI profit outflows); MC depreciated **20%** against USD.\n- **Trade elasticities:** Short-run `|PED_X| + |PED_M| = 0.75 < 1`; long-run `= 1.55 > 1`.\n\n**Using the data and your calculations from the Meridiana dossier, recommend a policy** that Meridiana's government should adopt to narrow its persistent −US$7.4 billion current account deficit and support sustainable long-term growth.",
      hints: [
        "Commit explicitly to ONE clear primary policy (e.g. an interventionist supply-side export-promotion & industrial-upgrading strategy focused on Meridiana's comparative-advantage textile/value-added sectors—replacing the distortionary $60 solar tariff with targeted clean-energy support while allowing the 20% MC depreciation to work through long-run Marshall–Lerner).",
        "Integrate AT LEAST FOUR exact calculated numbers from Q9–Q14 analytically (1/3 vs 1/2 comparative advantage, $1.5m DWL / +$2.4m PS / $3.0m revenue / −$6.9m CS loss, −$7.4bn CA deficit & +$7.0bn FA surplus, 20% MC depreciation, SR 0.75 vs LR 1.55).",
        "Evaluate 3 concrete trade-offs: short-run J-curve worsening & imported inflation, fiscal cost of abandoning $3.0m tariff revenue and funding export infrastructure, and stakeholder impacts (solar manufacturers losing +$2.4m PS vs textile exporters, consumers, and long-term sustainability).",
      ],
      modelAnswer:
        "**Primary Policy Recommendation:** Meridiana should reject permanent import tariffs—**phasing out the $60/panel solar tariff**—and instead adopt a **supply-side export-promotion and competitiveness strategy** targeting its comparative-advantage **value-added textiles and logistics infrastructure**, while allowing its **20% currency depreciation** to rebalance external trade over the medium term.\n\n**Economic Justification (Anchored in Dossier Calculations):**\nMeridiana's **−US$7.4 billion current account deficit** requires a **+US$7.0 billion financial account surplus** each year, creating vulnerability to sudden foreign-capital stops and rising primary-income outflows (−US$2.8bn). While the $60/panel solar tariff shrinks solar imports by 50,000 panels and yields **$3.0 million in fiscal revenue** plus **+$2.4 million in domestic producer surplus**, it is a poor macro remedy: it inflicts **−$6.9 million in consumer loss**, destroys **$1.5 million in deadweight welfare loss**, and inflates clean-electricity costs for Meridiana's factories—undermining both environmental sustainability and export competitiveness.\n\nInstead, Meridiana should harness its **comparative advantage in textiles** (opportunity cost of **1/3 microchip** per metre versus Altera's **1/2**) by investing in modern textile processing, worker vocational skills, and port logistics, shifting **LRAS rightwards** and raising non-price export quality. Crucially, this supply-side upgrading reinforces Meridiana's **20% MC depreciation** (which already lowered USD textile export prices from $25,000 to $20,000): because long-run trade elasticities satisfy the **Marshall–Lerner condition (0.85 + 0.70 = 1.55 > 1)**, lower USD export prices combined with higher export productivity will drive sustained export expansion and narrow the −US$7.4bn deficit without sacrificing allocative efficiency or provoking retaliation from Altera.\n\n**Evaluation of Trade-Offs & Stakeholders:**\n1. **Short-run J-curve & imported inflation:** Because short-run elasticities sum to only **0.75 (< 1)**, relying on the 20% depreciation will **worsen the −US$7.4bn deficit temporarily** and raise imported input/microchip costs—requiring disciplined central-bank inflation vigilance during the first 12–18 months.\n2. **Fiscal cost & long time lags:** Abolishing the solar tariff forfeits **$3.0 million** in revenue while funding port/vocational upgrades adds upfront government expenditure and carries **3–5 year implementation lags** before LRAS shifts materialize.\n3. **Stakeholder conflict:** Domestic solar manufacturers lose their **+$2.4 million producer surplus gain** and risk job cuts unless given temporary, time-bound **R&D or production subsidies** (which avoid the $0.90m consumption loss and keep solar panels at the $200 world price); meanwhile, domestic consumers and textile exporters gain substantially from cheaper clean power (+$6.9m consumer relief) and expanded trade.\n\n**Synthesis:** Replacing distortionary solar tariffs with **comparative-advantage supply-side export promotion**—backed by the **20% depreciation (LR Marshall–Lerner 1.55 > 1)** and time-limited green production support—offers Meridiana the most efficient, non-retaliatory, and sustainable path to closing its **−US$7.4bn external deficit**.",
      markScheme: [
        { point: "Commits clearly to ONE primary policy (supply-side export promotion in comparative-advantage sectors, removing solar tariff)", keywords: ["primary policy recommendation", "export-promotion"] },
        { point: "Integrates BoP calculations (−$7.4bn CA deficit financed by +$7.0bn FA surplus and −$2.8bn primary income risk)", keywords: ["7.4 billion current account", "7.0 billion financial"] },
        { point: "Integrates tariff welfare calculations ($1.5m DWL, −$6.9m CS loss, +$2.4m PS, $3.0m revenue) to critique protectionism", keywords: ["1.5 million in deadweight", "6.9 million"] },
        { point: "Links solar tariff removal directly to lower clean-energy input costs and environmental sustainability", keywords: ["clean-electricity costs", "environmental sustainability"] },
        { point: "Integrates comparative advantage calculations (1/3 vs 1/2 microchip opportunity cost in textiles)", keywords: ["1/3 microchip", "altera's 1/2"] },
        { point: "Explains LRAS rightward shift via infrastructure/skills upgrading boosting non-price export competitiveness", keywords: ["lras rightwards", "non-price export"] },
        { point: "Integrates 20% depreciation and long-run Marshall–Lerner calculation (1.55 > 1) reinforcing export growth", keywords: ["20% mc depreciation", "1.55 > 1"] },
        { point: "Evaluates short-run J-curve worsening (SR sum 0.75 < 1) and imported cost-push inflation risk", keywords: ["0.75 (< 1)", "12–18 months"] },
        { point: "Evaluates fiscal cost (foregone $3.0m tariff revenue + upgrade spending) and 3–5 year supply-side time lags", keywords: ["3.0 million", "3–5 year"] },
        { point: "Evaluates stakeholder trade-offs (solar firms losing +$2.4m PS vs consumers/exporters) with targeted subsidy safeguard", keywords: ["2.4 million producer surplus", "production subsidies"] },
      ],
      markbands: P3_POLICY_10M_BANDS,
      commonError: "Recommending the $60/panel tariff blindly without weighing its $1.5m DWL and −$6.9m clean-energy cost, or omitting the SR (0.75) vs LR (1.55) Marshall–Lerner calculations.",
      strategy: "HL P3 10m Formula: Reject inefficient tariff with exact DWL figures → Recommend comparative-advantage supply-side + depreciation → Weigh J-curve, fiscal lags, and stakeholders",
    },
  ],
};
