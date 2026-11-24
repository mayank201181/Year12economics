import type { ExamPaper, MarkBand } from "../types.ts";

const P2_EXTENDED_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the case study with minimal economic theory, no valid diagram, and little or no reference to the provided texts or data.",
    indicators: ["Copies text descriptively without economic analysis", "No synthesis or evaluation"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic concepts are identified with occasional links to the case study, but diagrams are absent/flawed and evaluation is superficial.",
    indicators: ["Mentions one or two policy options superficially", "Minimal quantitative reference to the tables"],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Sound economic analysis with relevant diagram(s) and clear use of the case study extracts and data; evaluation is attempted but uneven or largely generic.",
    indicators: ["Accurate AO2 theory linked to the country context", "Some trade-offs noted without sustained weighing"],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Strong, well-structured economic analysis integrated with accurate diagrams and specific numerical/textual evidence from the case study; balanced evaluation of stakeholder and time-horizon trade-offs.",
    indicators: ["Cites multiple exact figures from the case study tables", "Evaluates competing policies systematically"],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Insightful, thorough synthesis of economic theory, precise diagrams, and rich case-study evidence; sustained, nuanced evaluation across stakeholders, short-run vs long-run effects, constraints, and priorities culminating in a reasoned judgement.",
    indicators: ["Seamless integration of extracts, table figures, and theory", "Explicit weighing of trade-offs leading to a clear, justified policy judgement"],
  },
];

const SVG_PRICE_CEILING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 245" role="img" aria-label="Maximum price ceiling diagram for staple rice showing equilibrium Pe Qe, binding price ceiling Pmax below Pe, excess demand shortage Qd minus Qs, and shaded deadweight welfare loss triangle">
  <rect x="0" y="0" width="365" height="245" fill="#fffdf8" rx="8" />
  <line x1="52" y1="22" x2="52" y2="204" stroke="#1e293b" stroke-width="2" />
  <line x1="52" y1="204" x2="342" y2="204" stroke="#1e293b" stroke-width="2" />
  <text x="14" y="34" font-size="11" font-weight="600" fill="#1e293b">Price</text>
  <text x="12" y="47" font-size="10" fill="#475569">(S$/kg)</text>
  <text x="242" y="234" font-size="11" font-weight="600" fill="#1e293b">Quantity of Rice</text>
  <polygon points="146,154 146,74 190,114" fill="#ef4444" fill-opacity="0.28" stroke="#b91c1c" stroke-width="1.2" />
  <line x1="80" y1="194" x2="294" y2="34" stroke="#2563eb" stroke-width="2.4" />
  <text x="296" y="38" font-size="11" font-weight="700" fill="#2563eb">S</text>
  <line x1="88" y1="34" x2="306" y2="196" stroke="#0f766e" stroke-width="2.4" />
  <text x="308" y="198" font-size="11" font-weight="700" fill="#0f766e">D</text>
  <line x1="52" y1="154" x2="328" y2="154" stroke="#dc2626" stroke-width="2.2" />
  <text x="274" y="148" font-size="10" font-weight="700" fill="#dc2626">Pmax (Ceiling)</text>
  <line x1="52" y1="114" x2="190" y2="114" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="190" y1="114" x2="190" y2="204" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="146" y1="154" x2="146" y2="204" stroke="#dc2626" stroke-dasharray="4 3" />
  <line x1="250" y1="154" x2="250" y2="204" stroke="#dc2626" stroke-dasharray="4 3" />
  <line x1="148" y1="168" x2="248" y2="168" stroke="#b45309" stroke-width="2" />
  <text x="172" y="182" font-size="10" font-weight="700" fill="#b45309">Shortage</text>
  <text x="28" y="118" font-size="11" font-weight="600" fill="#1e293b">Pe</text>
  <text x="16" y="158" font-size="11" font-weight="700" fill="#dc2626">Pmax</text>
  <text x="139" y="218" font-size="11" font-weight="700" fill="#dc2626">Qs</text>
  <text x="183" y="218" font-size="11" font-weight="600" fill="#1e293b">Qe</text>
  <text x="243" y="218" font-size="11" font-weight="700" fill="#dc2626">Qd</text>
  <text x="150" y="118" font-size="9" font-weight="700" fill="#991b1b">DWL</text>
</svg>`;

const SVG_FOREX_VP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 365 245" role="img" aria-label="Foreign exchange market diagram for Veridian Pesos showing demand shifting left from D1 to D2 due to lower cocoa export revenue, causing the exchange rate to depreciate from 0.025 to 0.020 US dollars per Peso">
  <rect x="0" y="0" width="365" height="245" fill="#fffdf8" rx="8" />
  <line x1="62" y1="20" x2="62" y2="202" stroke="#1e293b" stroke-width="2" />
  <line x1="62" y1="202" x2="342" y2="202" stroke="#1e293b" stroke-width="2" />
  <text x="8" y="32" font-size="10" font-weight="600" fill="#1e293b">Price of VP</text>
  <text x="10" y="45" font-size="10" fill="#475569">(US$ / VP)</text>
  <text x="228" y="232" font-size="11" font-weight="600" fill="#1e293b">Quantity of VP</text>
  <line x1="92" y1="188" x2="296" y2="44" stroke="#2563eb" stroke-width="2.4" />
  <text x="298" y="48" font-size="11" font-weight="700" fill="#2563eb">S_VP</text>
  <line x1="126" y1="32" x2="316" y2="182" stroke="#0f766e" stroke-width="2.3" />
  <text x="314" y="192" font-size="11" font-weight="700" fill="#0f766e">D1</text>
  <line x1="86" y1="60" x2="262" y2="196" stroke="#dc2626" stroke-width="2.3" />
  <text x="258" y="192" font-size="11" font-weight="700" fill="#dc2626">D2</text>
  <circle cx="212" cy="103" r="3.5" fill="#0f766e" />
  <circle cx="176" cy="129" r="3.5" fill="#dc2626" />
  <line x1="62" y1="103" x2="212" y2="103" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="212" y1="103" x2="212" y2="202" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="62" y1="129" x2="176" y2="129" stroke="#dc2626" stroke-dasharray="4 3" />
  <line x1="176" y1="129" x2="176" y2="202" stroke="#dc2626" stroke-dasharray="4 3" />
  <text x="16" y="107" font-size="10" font-weight="700" fill="#0f766e">0.025</text>
  <text x="16" y="133" font-size="10" font-weight="700" fill="#dc2626">0.020</text>
  <text x="206" y="216" font-size="10" font-weight="600" fill="#0f766e">Q1</text>
  <text x="169" y="216" font-size="10" font-weight="700" fill="#dc2626">Q2</text>
</svg>`;

const SOLARIA_TABLE = `**Table 1 · Republic of Solaria: Macroeconomic Indicators (2022–2025)**

| Indicator | 2022 | 2023 | 2024 | 2025 (est.) |
|---|---|---|---|---|
| Nominal GDP (S$ billion) | 200.0 | 220.5 | 235.62 | 247.5 |
| GDP Deflator (2022 = 100) | 100.0 | 105.0 | 110.0 | 112.5 |
| Consumer Price Index (2022 = 100) | 100.0 | 106.0 | 113.42 | 117.39 |
| Unemployment rate (% of labour force) | 4.8 | 4.4 | 5.2 | 5.9 |
| Central Bank Policy Rate (%) | 2.50 | 4.25 | 5.50 | 5.00 |
| Budget Balance (% of GDP) | −2.1 | −3.4 | −4.8 | −4.2 |
| Gini Coefficient | 0.37 | 0.39 | 0.42 | 0.43 |`;

const VERIDIA_TABLE = `**Table 2 · Republic of Veridia: Trade, Exchange Rate & Development Indicators (2021–2024)**

| Indicator | 2021 | 2022 | 2023 | 2024 |
|---|---|---|---|---|
| Exports of goods & services (US$ bn) | 18.4 | 19.6 | 17.2 | 16.5 |
| Imports of goods & services (US$ bn) | 20.0 | 21.8 | 21.4 | 21.5 |
| Primary income balance (US$ bn) | −1.2 | −1.4 | −1.6 | −1.8 |
| Secondary income / remittances (US$ bn) | +2.1 | +2.3 | +2.5 | +2.8 |
| Exchange rate (VP per US$1) | 40.0 | 44.0 | 48.0 | 50.0 |
| GNI per capita (PPP, US$) | 5,120 | 5,280 | 5,310 | 5,400 |
| Human Development Index (HDI) | 0.618 | 0.625 | 0.631 | 0.636 |
| Inequality-Adjusted HDI (IHDI) | 0.462 | 0.465 | 0.468 | 0.470 |`;

export const paper: ExamPaper = {
  id: "exam-p2",
  title: "Paper 2 · Data Response (Unseen Case Studies, 40m)",
  level: "SL",
  calculator: true,
  minutes: 105,
  paperType: "Paper 2 · Data Response (Unseen Case Studies, 40m)",
  questions: [
    // =======================================================================
    // CASE STUDY 1: REPUBLIC OF SOLARIA (Q01–Q08)
    // =======================================================================
    {
      id: "exam-p2-q01",
      kind: "written",
      topicId: "3a-macro-activity-objectives",
      guideRef: "macro-objectives-phillips-hl",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Define",
      marks: 2,
      question:
        "**[Case Study 1 · Republic of Solaria — Extract A]**\nGlobal liquefied natural gas (LNG) and maritime shipping disruptions drove Solaria's electricity and food import prices sharply higher during 2023–2024, triggering severe **cost-push inflation** while low-income households—who spend 48% of their income on food and utilities—faced eroding real living standards.\n\n" +
        SOLARIA_TABLE +
        "\n\n**[2 marks]** Define the term **cost-push inflation** as referenced in Extract A.",
      hints: [
        "Include TWO precision elements for 2 marks: (1) sustained rise in the general price level AND (2) caused by rising per-unit costs of production shifting SRAS leftwards.",
      ],
      modelAnswer:
        "**Cost-push inflation** is a sustained increase in an economy's general price level driven by rising per-unit **costs of production**—such as higher energy, raw-material, or wage expenses—which shift the **short-run aggregate supply (SRAS) curve leftwards**.",
      markScheme: [
        { point: "Defines inflation as a sustained increase in the general price level", keywords: ["sustained increase", "general price level"] },
        { point: "Attributes cause to rising per-unit costs of production shifting SRAS leftwards", keywords: ["costs of production", "sras"] },
      ],
      commonError: "Writing 'prices go up because demand is high' (that is demand-pull inflation) or omitting the word 'sustained'.",
      strategy: "2-mark IB definition = Core meaning (1m) + Precise economic mechanism/qualifier (1m)",
    },
    {
      id: "exam-p2-q02",
      kind: "short",
      topicId: "3a-macro-activity-objectives",
      guideRef: "measuring-macro-activity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 1 · Solaria · Quantitative]** Using Table 1 (2024 Nominal GDP = S$235.62 billion; 2024 GDP Deflator = 110.0), calculate Solaria's **Real GDP in 2024** (in S$ billions, to 1 decimal place).",
      answer: {
        type: "number",
        value: 214.2,
        tolerance: 0.05,
        display: "S$214.2 billion",
      },
      hints: [
        "Recall the GDP deflator formula: Real GDP = (Nominal GDP / GDP Deflator) × 100.",
        "Divide 235.62 by 110.0 and multiply by 100.",
      ],
      solution: [
        "Use the real GDP formula: {{Real GDP = (Nominal GDP / GDP Deflator) * 100}}.",
        "Substitute 2024 values from Table 1: {{(235.62 / 110.0) * 100 = 214.2}}.",
        "Solaria's Real GDP in 2024 was **S$214.2 billion**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 259.18, tolerance: 0.1 },
          feedback: "You multiplied by 1.10 instead of dividing by 1.10—deflating nominal GDP removes price inflation.",
        },
        {
          spec: { type: "number", value: 207.74, tolerance: 0.1 },
          feedback: "Use the GDP Deflator (110.0), not the CPI (113.42), when converting nominal GDP to real GDP.",
        },
      ],
      commonError: "Dividing Nominal GDP by the CPI instead of the GDP deflator, or multiplying by the deflator instead of dividing.",
      strategy: "Real GDP = (Nominal GDP / GDP Deflator) × 100",
    },
    {
      id: "exam-p2-q03",
      kind: "short",
      topicId: "3a-macro-activity-objectives",
      guideRef: "macro-objectives-phillips-hl",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 1 · Solaria · Quantitative]** Using Table 1 (2023 CPI = 106.0; 2024 CPI = 113.42), calculate Solaria's **annual CPI inflation rate in 2024** (as a percentage, to 1 decimal place).",
      answer: {
        type: "number",
        value: 7,
        tolerance: 0.05,
        display: "7.0%",
      },
      hints: [
        "Do NOT simply subtract 113.42 − 106.0 = 7.42! Inflation is a percentage change relative to the PREVIOUS year's CPI.",
        "Compute [(CPI_2024 − CPI_2023) / CPI_2023] × 100%.",
      ],
      solution: [
        "Annual CPI inflation rate = {{((CPI_2024 - CPI_2023) / CPI_2023) * 100}}%.",
        "Substitute Table 1 values: {{((113.42 - 106.0) / 106.0) * 100 = (7.42 / 106.0) * 100 = 7.0}}%.",
        "Solaria's CPI inflation rate in 2024 was **7.0%**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 7.42, tolerance: 0.05 },
          feedback: "7.42 is the raw change in index points—you forgot to divide by the 2023 CPI (106.0)!",
        },
        {
          spec: { type: "number", value: 13.42, tolerance: 0.05 },
          feedback: "13.42% is cumulative inflation since the 2022 base year, not annual inflation during 2024.",
        },
      ],
      commonError: "Taking the simple index-point difference (113.42 − 106.0 = 7.42%) instead of dividing by the previous year's CPI (106.0).",
      strategy: "Inflation % = [(CPI₂ − CPI₁) / CPI₁] × 100",
    },
    {
      id: "exam-p2-q04",
      kind: "short",
      topicId: "3a-macro-activity-objectives",
      guideRef: "measuring-macro-activity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 1 · Solaria · Quantitative]** From Table 1, Solaria's Real GDP was S$210.0 billion in 2023 ({{(220.5 / 105.0) * 100}}). Using Table 1's 2024 figures (Nominal GDP S$235.62 billion; GDP Deflator 110.0), calculate Solaria's **percentage rate of real economic growth** in 2024 (to 1 decimal place).",
      answer: {
        type: "number",
        value: 2,
        tolerance: 0.05,
        display: "2.0%",
      },
      hints: [
        "Real economic growth rate = [(Real GDP_2024 − Real GDP_2023) / Real GDP_2023] × 100%.",
        "Compute (214.2 − 210.0) / 210.0 × 100%.",
      ],
      solution: [
        "Real GDP growth rate = {{((214.2 - 210.0) / 210.0) * 100}}%.",
        "Simplify: {{(4.2 / 210.0) * 100 = 2.0}}%.",
        "Solaria's real economic growth slowed to **2.0%** in 2024.",
      ],
      traps: [
        {
          spec: { type: "number", value: 6.86, tolerance: 0.1 },
          feedback: "6.86% is the NOMINAL GDP growth rate—use Real GDP (210.0 to 214.2), not Nominal GDP.",
        },
        {
          spec: { type: "number", value: 4.2, tolerance: 0.05 },
          feedback: "4.2 billion is the absolute dollar increase—divide by 210.0 and multiply by 100 to get the percentage rate.",
        },
      ],
      commonError: "Reporting the absolute rise (S$4.2bn) or nominal growth rate (6.86%) instead of percentage real GDP growth.",
      strategy: "Real growth % = [(Real GDP₂ − Real GDP₁) / Real GDP₁] × 100",
    },
    {
      id: "exam-p2-q05",
      kind: "written",
      topicId: "2a-markets-elasticities-gov",
      guideRef: "government-intervention-welfare",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      diagram: SVG_PRICE_CEILING,
      question:
        "**[Case Study 1 · Solaria — Extract B · 4 marks]** To shield low-income households from food inflation, Solaria's Ministry of Finance imposed a binding **maximum price (price ceiling)** on staple rice below the free-market equilibrium price. Using a fully labelled microeconomic diagram, **explain** the impact of this price ceiling on the staple rice market.",
      hints: [
        "Set up a microeconomic market diagram with Price (S$/kg) and Quantity of Rice, showing Pe, Qe, and horizontal line Pmax strictly BELOW Pe.",
        "Explain four linked effects: excess demand (shortage = Qd − Qs), reduced quantity transacted (Qs) and lower producer surplus, non-price rationing / parallel black markets, and deadweight welfare loss.",
      ],
      modelAnswer:
        "In the diagram, the free-market equilibrium occurs at **Pe** and **Qe**. Setting a legally binding **price ceiling (Pmax)** strictly **below Pe** lowers the retail price of rice for buyers able to obtain it, extending quantity demanded to **Qd** while reducing producers' incentive to supply so quantity supplied contracts to **Qs**.\n\nThis mismatch creates a persistent **shortage (excess demand)** equal to **Qd − Qs**. Because only **Qs** is actually traded, rice farmers suffer falling revenue and a sharp drop in **producer surplus**, while total social welfare shrinks by the shaded **deadweight welfare loss (DWL) triangle** representing allocative inefficiency. Finally, because price can no longer ration rice, **queues, seller favouritism, or illegal parallel markets** charging above Pmax typically emerge unless the government subsidizes supply or distributes ration vouchers.",
      markScheme: [
        { point: "Places binding Pmax strictly below equilibrium price Pe on a properly labelled micro diagram", keywords: ["below pe", "pmax"] },
        { point: "Identifies excess demand / shortage equal to Qd − Qs as quantity supplied falls to Qs", keywords: ["shortage", "qd − qs", "qd - qs"] },
        { point: "Explains producer loss (falling revenue/producer surplus) and shaded deadweight welfare loss triangle", keywords: ["producer surplus", "deadweight welfare loss"] },
        { point: "Identifies non-price rationing consequences (queues, favouritism, or illegal parallel/black markets)", keywords: ["parallel markets", "queues", "ration"] },
      ],
      commonError: "Drawing a maximum price ABOVE equilibrium (making it non-binding) or forgetting to show the shaded deadweight loss triangle.",
      strategy: "4-mark Paper 2 diagram Q = 2m accurate labelled diagram + 2m step-by-step market transmission",
    },
    {
      id: "exam-p2-q06",
      kind: "written",
      topicId: "3b-macro-policies",
      guideRef: "monetary-policy-banking",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      question:
        "**[Case Study 1 · Solaria · 4 marks]** Table 1 shows that the Central Bank of Solaria raised its policy interest rate from **2.50% in 2022 to 5.50% in 2024**. Using an AD/AS diagram explanation, **explain** how this contractionary monetary policy affects both Solaria's inflation rate and its unemployment rate.",
      hints: [
        "Explain the interest-rate transmission mechanism onto C (borrowing/saving), I (business loans), and X − M (hot-money currency appreciation).",
        "Trace the leftward shift of AD (AD1 → AD2) along an upward-sloping SRAS curve: Average Price Level falls (disinflation), Real GDP falls, and cyclical unemployment rises (consistent with Table 1's rise from 4.4% to 5.9%).",
      ],
      modelAnswer:
        "Raising the central bank policy rate from 2.50% to 5.50% implements **contractionary monetary policy**. Higher borrowing costs and greater rewards for saving discourage debt-financed **household consumption** and **private business investment**, while attracting foreign hot-money inflows that **appreciate** the Solarian Dollar and reduce **net exports (X − M)**.\n\nOn an AD/AS diagram (with Average Price Level on the vertical axis and Real GDP on the horizontal axis), **aggregate demand shifts leftwards from AD1 to AD2** along an upward-sloping SRAS curve. As spending pressures cool, **disinflation** occurs—reducing Solaria's CPI inflation toward 3.5% in 2025—but **real output slows**, prompting firms to scale back hiring and pushing **cyclical unemployment** upwards from 4.4% in 2023 to 5.2% in 2024 and 5.9% in 2025.",
      markScheme: [
        { point: "Explains interest-rate transmission reducing consumption (C) and business investment (I)", keywords: ["borrowing costs", "household consumption", "business investment"] },
        { point: "Notes currency appreciation channel reducing net exports (X − M)", keywords: ["appreciate", "net exports"] },
        { point: "Links leftward shift AD1 to AD2 on AD/AS diagram to lower price-level pressure / disinflation", keywords: ["ad1 to ad2", "disinflation"] },
        { point: "Explains resulting lower real GDP growth and higher cyclical unemployment, citing Table 1 rise to 5.2%/5.9%", keywords: ["cyclical unemployment", "5.9%"] },
      ],
      commonError: "Claiming higher interest rates shift SRAS left (they primarily shift AD left) or ignoring the trade-off with rising cyclical unemployment.",
      strategy: "Rate hike → C, I, (X−M) fall → AD shifts left → Disinflation + Higher cyclical unemployment (cite Table 1!)",
    },
    {
      id: "exam-p2-q07",
      kind: "written",
      topicId: "3a-macro-activity-objectives",
      guideRef: "inequality-lorenz-taxation",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      question:
        "**[Case Study 1 · Solaria · 4 marks]** Using a Lorenz curve explanation and evidence from Extract A and Table 1, **explain** why rapid food and electricity inflation contributed to Solaria's Gini coefficient rising from **0.37 in 2022 to 0.43 in 2025**.",
      hints: [
        "Use Extract A's exact figure: low-income households spend 48% of their income on necessities (food and utilities), far more than wealthy households.",
        "Explain how a regressive squeeze on real disposable incomes (plus rising unemployment from 4.4% to 5.9%) bows the Lorenz curve further away from the 45° line of perfect equality, expanding Area A and raising the Gini coefficient.",
      ],
      modelAnswer:
        "A **Lorenz curve** plots cumulative percentage of national income (vertical axis) against cumulative percentage of population (horizontal axis), and the **Gini coefficient** measures the area between the 45° **line of perfect equality** and the Lorenz curve divided by the total area beneath the diagonal.\n\nAccording to Extract A, Solaria's **low-income households allocate 48% of income to food and utilities**—essential goods with price-inelastic demand—whereas higher-income households spend a much smaller share on staples and hold financial assets whose returns rose with higher interest rates. Consequently, 7.0% food-and-energy inflation acted **regressively**, eroding poorer families' real purchasing power disproportionately, while rising unemployment (from 4.4% to 5.9%) hit lower-wage workers hardest. As the poorest quintiles captured a smaller share of real national income, Solaria's **Lorenz curve bowed further outwards** from the equality line, raising the Gini coefficient from **0.37 to 0.43**.",
      markScheme: [
        { point: "Defines Lorenz curve axes and links Gini coefficient to the gap from the 45° line of perfect equality", keywords: ["line of perfect equality", "cumulative percentage"] },
        { point: "Cites Extract A evidence (48% of low-income budgets spent on price-inelastic food/utilities)", keywords: ["48%", "price-inelastic"] },
        { point: "Explains regressive real-income erosion on poorer families vs wealthier asset-holders/unemployment effect", keywords: ["regressively", "purchasing power"] },
        { point: "Links growing income concentration to an outward bow of the Lorenz curve raising Gini from 0.37 to 0.43", keywords: ["bowed further outwards", "0.37 to 0.43"] },
      ],
      commonError: "Describing inflation as affecting all households equally, or drawing the Lorenz curve moving inward toward the diagonal when Gini rises.",
      strategy: "Disproportionate necessity share (48%) → Regressive real-income hit → Lorenz bows outward → Higher Gini",
    },
    {
      id: "exam-p2-q08",
      kind: "written",
      topicId: "3b-macro-policies",
      guideRef: "supply-side-policies",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 15,
      question:
        "**[Case Study 1 · Solaria · Extended Response · 15 marks]** Extract B notes that Solaria's policymakers combined aggressive interest-rate hikes (to 5.50%), a price ceiling on staple rice and household electricity tariffs, and debt-funded cash transfers (pushing the budget deficit to −4.8% of GDP), while economists urge **interventionist green-grid supply-side investment** to cut imported LNG dependence.\n\nUsing information from the Solaria case study extracts, Table 1 data, and your knowledge of economics, **evaluate** the policies available to Solaria to reduce inflation while protecting economic growth and equity.",
      hints: [
        "Anchor EVERY paragraph to Solaria's exact data: CPI inflation 7.0% in 2024, real GDP growth slowing to 2.0%, unemployment rising 4.4%→5.9%, policy rate 2.5%→5.5%, budget deficit −4.8% of GDP, Gini 0.37→0.43, 48% necessity share.",
        "Evaluate at least THREE distinct policies from the case study: (1) Contractionary monetary policy, (2) Price ceilings + targeted fiscal transfers, and (3) Interventionist green-grid supply-side reform.",
        "Highlight the core macroeconomic policy conflict: Solaria suffers COST-PUSH (SRAS) inflation, so demand-side monetary tightening cures inflation only at the cost of slower growth and rising joblessness!",
      ],
      modelAnswer:
        "Solaria confronts a classic **stagflationary policy dilemma**: global LNG and shipping shocks shifted SRAS leftwards, lifting CPI inflation to **7.0% in 2024**, slowing real GDP growth to **2.0%**, and pushing the **Gini coefficient from 0.37 to 0.43** as low-income families spend **48%** of income on essentials. Evaluating Solaria's policy mix requires weighing short-run inflation relief against employment, fiscal sustainability, and equity.\n\n**1. Contractionary monetary policy** (hiking the base rate from **2.50% to 5.50%**) successfully anchored inflation expectations, helping forecast CPI inflation ease toward **3.5% in 2025** via leftward AD shifts and currency appreciation that lowers imported LNG prices. Its strengths are rapid execution and central-bank independence without enlarging the **−4.8% budget deficit**. Yet using demand-side tightening to combat **cost-push inflation** inflicts severe collateral damage: slowing investment and output further while raising **unemployment from 4.4% (2023) to 5.9% (2025)**—hurting lower-skilled workers and indirectly worsening inequality.\n\n**2. Price ceilings on rice and electricity tariffs** offer immediate short-run political relief for families spending 48% on essentials, keeping headline living costs down. However, as microeconomic theory demonstrates, binding ceilings below equilibrium generate **shortages (Qd > Qs)**, **deadweight welfare loss**, reduced farm and utility investment, and **parallel black markets**—ultimately harming the very low-income consumers they aim to protect if shortages force rationing.\n\n**3. Targeted fiscal cash transfers** are far superior to universal price ceilings on **efficiency and equity** grounds: they preserve price signals in rice and energy markets while directing purchasing power specifically to the poorest households to counter the rise in the Gini coefficient toward **0.43**. Nevertheless, financing transfers via borrowing widened Solaria's **fiscal deficit from −2.1% to −4.8% of GDP**—a figure that risks rising sovereign debt-servicing costs at 5.50% interest rates and partially works against the central bank by stimulating AD.\n\n**4. Interventionist green-grid supply-side policy** (public investment in solar, wind, and battery storage plus port logistics) directly attacks the **structural root** of Solaria's cost-push vulnerability—dependence on imported LNG. Shifting **SRAS and LRAS rightwards** achieves non-inflationary economic growth and energy security simultaneously. The key limitations are **long implementation time lags** (3–7 years before new power capacity lowers bills) and **high upfront fiscal cost** given the −4.8% deficit.\n\n**Reasoned judgement:** No single policy resolves Solaria's trade-off across both short and long horizons. Solaria should **phase out distortionary price ceilings immediately**, replace them with **means-tested cash transfers** funded by progressive revenue or phasing out untargeted subsidies to contain the **−4.8% deficit**, gently ease monetary policy from **5.50%** once expectations stabilize so unemployment does not climb above **5.9%**, and commit credibly to **public-private green-grid supply-side investment** to immunize Solaria against future cost-push energy shocks.",
      markScheme: [
        { point: "Diagnoses Solaria's core stagflationary conflict (cost-push SRAS shock + slowing 2.0% growth + rising Gini)", keywords: ["stagflationary", "2.0%"] },
        { point: "Analyses contractionary monetary policy (2.50% to 5.50%) curbing inflation via AD shift & currency appreciation", keywords: ["2.50% to 5.50%", "expectations"] },
        { point: "Evaluates monetary policy strength: speed, independence, and avoiding extra budget deficits", keywords: ["independence", "rapid execution"] },
        { point: "Evaluates key limitation of monetary tightening against cost-push inflation: rising unemployment to 5.9%", keywords: ["collateral damage", "5.9%"] },
        { point: "Analyses short-run equity intent of rice/electricity price ceilings given 48% necessity share", keywords: ["48%", "political relief"] },
        { point: "Evaluates microeconomic distortions of price ceilings: shortages, DWL, black markets, reduced farm/utility supply", keywords: ["shortages", "parallel black markets"] },
        { point: "Analyses targeted cash transfers as superior to price ceilings by preserving market signals and aiding equity", keywords: ["preserve price signals", "poorest households"] },
        { point: "Evaluates fiscal sustainability constraint: budget deficit widening from −2.1% to −4.8% at high borrowing rates", keywords: ["−4.8%", "-4.8%", "debt-servicing"] },
        { point: "Notes macroeconomic policy conflict between expansionary fiscal transfers and contractionary monetary policy", keywords: ["works against the central bank", "stimulating ad"] },
        { point: "Analyses interventionist green-grid supply-side reform shifting SRAS/LRAS right to tackle imported LNG root cause", keywords: ["structural root", "sras and lras rightwards"] },
        { point: "Evaluates long time lags (3–7 years) limiting supply-side relief during the immediate 2024–2025 inflation spike", keywords: ["long implementation time lags", "3–7 years"] },
        { point: "Evaluates upfront capital cost constraint on Solaria's already strained budget", keywords: ["high upfront fiscal cost", "public-private"] },
        { point: "Compares short-run vs long-run policy horizons systematically across all instruments", keywords: ["short and long horizons", "non-inflationary"] },
        { point: "Weighs efficiency vs equity trade-offs explicitly referencing Gini (0.37 to 0.43)", keywords: ["0.37 to 0.43", "means-tested"] },
        { point: "Delivers a coherent, reasoned sequenced policy judgement tailored directly to Solaria", keywords: ["phase out distortionary price ceilings", "immunize solaria"] },
      ],
      markbands: P2_EXTENDED_BANDS,
      commonError: "Writing a generic macro essay without citing Solaria's actual Table 1 figures (7.0% CPI, −4.8% deficit, 5.9% unemployment, 0.43 Gini) or failing to spot the cost-push vs demand-side mismatch.",
      strategy: "Anchor every policy paragraph in Solaria's exact numbers → Evaluate SR vs LR, Equity, Fiscal cost, and Policy Conflict → Sequenced Verdict",
    },

    // =======================================================================
    // CASE STUDY 2: REPUBLIC OF VERIDIA (Q09–Q15)
    // =======================================================================
    {
      id: "exam-p2-q09",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "measuring-development-barriers",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Define",
      marks: 2,
      question:
        "**[Case Study 2 · Republic of Veridia — Extract C]**\nOver 64% of Veridia's merchandise export earnings derive from raw cocoa beans and unprocessed timber. Falling global cocoa prices during 2023–2024 shrank export revenues while demand for imported machinery and fuel stayed price inelastic, widening the current account deficit and depreciating the floating Veridian Peso (VP) from 40 to 50 VP per US$1. Meanwhile, the stark gap between Veridia's **Human Development Index (HDI)** of 0.636 and Inequality-Adjusted HDI (IHDI) of 0.470 highlights persistent rural–urban disparities.\n\n" +
        VERIDIA_TABLE +
        "\n\n**[2 marks]** Define the **Human Development Index (HDI)** and identify the three dimensions it measures.",
      hints: [
        "State that HDI is a composite indicator (scaled 0 to 1) measuring multidimensional human development, AND list all three dimensions: health (life expectancy), education (mean & expected years of schooling), and standard of living (GNI per capita PPP).",
      ],
      modelAnswer:
        "The **Human Development Index (HDI)** is a **composite indicator** (ranging from 0 to 1) published by the UNDP that measures multidimensional economic development across three equally weighted dimensions: **health** (life expectancy at birth), **education** (mean and expected years of schooling), and **standard of living** (GNI per capita adjusted for PPP).",
      markScheme: [
        { point: "Defines HDI as a composite development indicator scored between 0 and 1", keywords: ["composite indicator", "0 to 1"] },
        { point: "Identifies all three dimensions accurately: health/life expectancy, education/schooling, and GNI per capita (PPP)", keywords: ["life expectancy", "schooling", "gni per capita"] },
      ],
      commonError: "Omitting one of the three dimensions or saying HDI measures 'GDP' instead of 'GNI per capita (PPP)'.",
      strategy: "2m HDI definition = Composite index (0–1) + Health (life expectancy) + Education (schooling) + Income (GNI pc PPP)",
    },
    {
      id: "exam-p2-q10",
      kind: "short",
      topicId: "4b-exchange-bop-development",
      guideRef: "bop-marshall-lerner-hl",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 2 · Veridia · Quantitative]** Using Table 2 (2024 values in US$ billions: Exports = 16.5; Imports = 21.5; Primary income = −1.8; Secondary income = +2.8), calculate Veridia's **Current Account Balance in 2024** (in US$ billions; include a minus sign if in deficit).",
      answer: {
        type: "number",
        value: -4,
        tolerance: 0.05,
        display: "−4",
      },
      hints: [
        "Current Account Balance = (Exports − Imports) + Primary Income Balance + Secondary Income Balance.",
        "Compute (16.5 − 21.5) + (−1.8) + 2.8 carefully keeping track of signs.",
      ],
      solution: [
        "Balance of trade in goods & services = {{16.5 - 21.5 = -5.0}} US$ billion.",
        "Add primary income ({{-1.8}}) and secondary income / remittances ({{+2.8}}): {{-5.0 - 1.8 + 2.8 = -4.0}} US$ billion.",
        "Veridia's 2024 Current Account Balance is **−4.0** (a US$4.0 billion deficit).",
      ],
      traps: [
        {
          spec: { type: "number", value: -5, tolerance: 0.05 },
          feedback: "−5.0 is only the balance of trade in goods & services—you also need to add Primary Income (−1.8) and Secondary Income (+2.8).",
        },
        {
          spec: { type: "number", value: 4, tolerance: 0.05 },
          feedback: "Check the sign: imports exceed exports so Veridia has a DEFICIT (−4.0), not a surplus (+4.0).",
        },
      ],
      commonError: "Forgetting to include Primary and Secondary Income, or dropping the negative sign on a Current Account deficit.",
      strategy: "CA = (X − M) + Primary Income + Secondary Income",
    },
    {
      id: "exam-p2-q11",
      kind: "short",
      topicId: "4b-exchange-bop-development",
      guideRef: "exchange-rates-regimes",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 2 · Veridia · Quantitative]** A Veridian renewable-energy firm imports an industrial solar turbine priced at **US$50,000**. Using Table 2 (2021 exchange rate: 40.0 VP per US$1; 2024 exchange rate: 50.0 VP per US$1), calculate the **increase in the Veridian Peso (VP) cost** of this turbine between 2021 and 2024 (in VP).",
      answer: {
        type: "number",
        value: 500000,
        display: "500000",
      },
      hints: [
        "Convert US$50,000 into VP at the 2021 rate (× 40) and again at the 2024 rate (× 50).",
        "Subtract the 2021 VP cost from the 2024 VP cost.",
      ],
      solution: [
        "2021 cost in VP = {{50000 * 40 = 2000000}} VP.",
        "2024 cost in VP = {{50000 * 50 = 2500000}} VP.",
        "Increase in cost = {{2500000 - 2000000 = 500000}} VP (500,000 VP higher because the Peso depreciated).",
      ],
      traps: [
        {
          spec: { type: "number", value: 2500000 },
          feedback: "2,500,000 VP is the total 2024 price—the question asks for the INCREASE since 2021.",
        },
        {
          spec: { type: "number", value: 250 },
          feedback: "You divided by the exchange rate instead of multiplying—since US$1 buys 40 or 50 VP, multiply US$ by VP/US$.",
        },
      ],
      commonError: "Reporting the new total cost (2,500,000 VP) rather than the change (+500,000 VP), or dividing instead of multiplying by the exchange rate.",
      strategy: "Multiply USD price by VP/USD rate in each year, then take the difference",
    },
    {
      id: "exam-p2-q12",
      kind: "short",
      topicId: "4a-trade-integration",
      guideRef: "trade-protection-diagrams",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "**[Case Study 2 · Veridia — Extract D · Quantitative]** Domestic manufacturers persuaded Veridia's parliament to enact a specific import tariff of **US$150 per tonne** on refined steel, lifting the domestic price from the world price of US$600 to US$750 per tonne. Domestic supply rises from **40,000 to 55,000 tonnes**, while domestic demand falls from **110,000 to 95,000 tonnes**. Calculate Veridia's **annual government tariff revenue** (in US$ millions).",
      answer: {
        type: "number",
        value: 6,
        tolerance: 0.05,
        display: "$6 million",
      },
      hints: [
        "Tariff revenue is collected ONLY on POST-tariff imports (Q4 − Q3), NOT on free-trade imports (Q2 − Q1) or total consumption.",
        "Compute Post-tariff imports = 95,000 − 55,000 tonnes, then multiply by US$150/tonne and convert to US$ millions.",
      ],
      solution: [
        "Post-tariff import volume = {{Q_4 - Q_3 = 95000 - 55000 = 40000}} tonnes.",
        "Government tariff revenue = {{150 * 40000 = 6000000}} US dollars.",
        "Expressed in US$ millions, annual tariff revenue is **$6 million**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 10.5, tolerance: 0.05 },
          feedback: "$10.5m multiplies $150 by PRE-tariff imports (70,000 tonnes)—revenue is collected on POST-tariff imports (40,000 tonnes).",
        },
        {
          spec: { type: "number", value: 14.25, tolerance: 0.05 },
          feedback: "$14.25m taxes ALL domestic consumption (95,000 tonnes)—tariffs apply only to imports, not domestically produced steel.",
        },
      ],
      commonError: "Applying the tariff rate to pre-tariff imports (70,000 t) or total consumption (95,000 t) instead of post-tariff imports (40,000 t).",
      strategy: "Tariff Revenue = t × (Q₄ − Q₃)",
    },
    {
      id: "exam-p2-q13",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "exchange-rates-regimes",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      diagram: SVG_FOREX_VP,
      question:
        "**[Case Study 2 · Veridia · 4 marks]** Using a fully labelled foreign exchange market diagram for the Veridian Peso (VP), **explain** how falling cocoa export revenues during 2023–2024 caused the floating VP to depreciate from **40 to 50 VP per US$1** (from US$0.025 to US$0.020 per VP).",
      hints: [
        "Label the vertical axis 'Price of VP in US$ (US$/VP)' and horizontal axis 'Quantity of VP'.",
        "Show that lower foreign demand for Veridian cocoa reduces foreign buyers' need to purchase VP, shifting demand for VP leftwards from D1 to D2 and lowering its equilibrium value from US$0.025 to US$0.020 per VP.",
      ],
      modelAnswer:
        "In the foreign exchange market diagram for the **Veridian Peso (VP)**, the vertical axis measures the price of 1 VP in US dollars (**US$/VP**) and the horizontal axis measures the **quantity of VP** traded.\n\nBecause over 64% of Veridia's merchandise exports consist of raw cocoa and timber, falling global cocoa prices sharply shrank export revenues from US$19.6bn in 2022 to **US$16.5bn in 2024**. Foreign commodity buyers therefore required fewer Veridian Pesos to settle export invoices, shifting the **demand curve for VP leftwards from D1 to D2**. At the initial exchange rate (US$0.025/VP), excess supply of VP emerged, putting downward pressure on the currency until equilibrium fell to **US$0.020 per VP** (equivalent to **50 VP per US$1**)—a market-driven **depreciation** of the Veridian Peso.",
      markScheme: [
        { point: "Sets up forex diagram accurately with Price of VP in US$ (US$/VP) and Quantity of VP", keywords: ["us$/vp", "quantity of vp"] },
        { point: "Links falling cocoa export earnings ($19.6bn to $16.5bn) to reduced foreign demand for VP", keywords: ["16.5bn", "fewer veridian pesos"] },
        { point: "Shows leftward shift of currency demand curve from D1 to D2 creating excess supply", keywords: ["d1 to d2", "excess supply"] },
        { point: "Concludes that equilibrium rate falls from US$0.025 to US$0.020 per VP (40 to 50 VP/US$1), a depreciation", keywords: ["0.020", "depreciation"] },
      ],
      commonError: "Putting 'VP per US$' on the vertical axis while shifting the demand for VP (inverting the currency axis makes depreciation look like an upward move!).",
      strategy: "Forex diagram rule: Market for currency X MUST have 'Price of X in foreign currency' on vertical axis!",
    },
    {
      id: "exam-p2-q14",
      kind: "written",
      topicId: "4a-trade-integration",
      guideRef: "arguments-for-against-protection",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 4,
      question:
        "**[Case Study 2 · Veridia — Extract D · 4 marks]** Extract D warns that Veridia's US$150/tonne steel tariff raises input expenses for domestic construction and export-processing industries. Using international trade theory, **explain TWO economic drawbacks** of this steel tariff for Veridia's economy.",
      hints: [
        "Explain Drawback 1: Higher intermediate input costs (steel jumps 25% from $600 to $750/t) shift SRAS / firm cost curves upward for construction and export-processing firms, hurting Veridia's export competitiveness and worsening cost-push inflation.",
        "Explain Drawback 2: Allocative and production inefficiency—the tariff causes two deadweight welfare loss triangles (shifting output to higher-cost domestic steel mills and cutting consumption by 15,000 tonnes) plus risks foreign retaliation.",
      ],
      modelAnswer:
        "First, refined steel is a crucial intermediate capital input for Veridia's domestic **construction and export-processing firms**. Raising its domestic price by 25%—from US$600 to **US$750 per tonne**—increases firms' unit **costs of production**, shifting supply leftwards, driving **cost-push inflation**, and eroding the international **export competitiveness** of non-commodity Veridian manufacturers just as the country needs export growth to narrow its −US$4.0bn current account deficit.\n\nSecond, the tariff creates **net deadweight welfare losses** and **resource misallocation**: domestic output expands from 40,000 to 55,000 tonnes at higher domestic marginal costs than efficient world producers (**production inefficiency**), while domestic buyers cut consumption from 110,000 to 95,000 tonnes (**consumption welfare loss**). Protecting domestic steelmakers behind a tariff wall can also breed long-term **X-inefficiency** and provoke **retaliatory tariffs** from trading partners against Veridian exports.",
      markScheme: [
        { point: "Explains rising intermediate input costs ($600 to $750/tonne) hurting downstream construction/export industries", keywords: ["750 per tonne", "costs of production"] },
        { point: "Links higher steel costs to weaker export competitiveness or domestic cost-push inflation", keywords: ["export competitiveness", "cost-push inflation"] },
        { point: "Explains allocative/production misallocation and deadweight welfare losses (production inefficiency + consumption loss)", keywords: ["production inefficiency", "consumption welfare loss"] },
        { point: "Identifies additional dynamic cost (X-inefficiency among sheltered firms or foreign retaliatory tariffs)", keywords: ["retaliatory tariffs", "x-inefficiency"] },
      ],
      commonError: "Listing drawbacks as one-line bullets without explaining the causal mechanism through downstream input costs or welfare triangles.",
      strategy: "4m 'Explain TWO drawbacks' = 2 marks per fully developed causal chain linked directly to the case study!",
    },
    {
      id: "exam-p2-q15",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "growth-development-strategies",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      marks: 15,
      question:
        "**[Case Study 2 · Veridia · Extended Response · 15 marks]** Extract D notes a sharp policy debate inside Veridia: domestic industrialists favour **import-substitution tariffs** (such as the US$150/tonne steel tariff) to protect infant industries and curb imports, whereas international advisors recommend **value-added export diversification, targeted FDI, and rural human-capital investment** (education, healthcare, microfinance, and anti-corruption institutions).\n\nUsing information from the Veridia case study extracts, Table 2 data, and your knowledge of economics, **discuss** which strategy is more likely to achieve sustainable economic development in Veridia.",
      hints: [
        "Anchor EVERY argument to Veridia's exact indicators: 64% raw cocoa/timber reliance, Current Account deficit −US$4.0bn, VP depreciation 40→50, +US$2.8bn remittances, steel tariff raising $6m revenue but raising input costs by 25%, GNI pc PPP $5,400, HDI 0.636 vs IHDI 0.470!",
        "Examine BOTH sides rigorously: (A) Import-substitution tariffs (infant industry protection, $6m fiscal revenue, urban jobs vs higher input costs, DWL, X-inefficiency, failure to solve rural inequality) vs (B) Export diversification + targeted FDI + rural human capital (breaking commodity trap, boosting IHDI, using depreciated VP vs fiscal costs, MNC profit repatriation, long lags).",
        "Conclude with a balanced, sequenced judgement tailored specifically to Veridia's rural-urban inequality gap and external deficit.",
      ],
      modelAnswer:
        "Veridia exhibits classic structural barriers to sustainable development: **64% primary-commodity export dependence** (raw cocoa and timber), a widening **−US$4.0 billion current account deficit**, a 20% currency depreciation (from **40 to 50 VP per US$1**), and severe multidimensional inequality shown by the huge 0.166-point gap between its **HDI (0.636)** and **IHDI (0.470)**. Choosing between import-substitution tariffs and an outward-oriented human-capital strategy involves major trade-offs across efficiency, external balance, and equity.\n\nProponents of **import-substitution trade protection** (such as the US$150/tonne steel tariff) invoke the **infant industry argument**: shielding emerging Veridian factories allows them to gain **economies of scale** and learn-by-doing before facing global giants, saving foreign exchange as steel imports drop from 70,000 to 40,000 tonnes. Moreover, the tariff delivers **US$6 million in annual fiscal revenue**—valuable for a developing state with a narrow tax base—and protects urban manufacturing jobs.\n\nHowever, historical evidence and Veridia's own data expose serious flaws in broad **import substitution**. First, raising domestic steel prices by 25% (to US$750/t) penalizes Veridian construction and export-processing firms, undermining export growth needed to fix the **−US$4.0bn current account deficit**—especially when imported solar turbines already cost **500,000 VP more** after Peso depreciation. Second, protected domestic monopolies frequently remain **X-inefficient** behind permanent tariff walls, generating ongoing **deadweight welfare losses** and higher consumer prices. Third, urban steel protection does almost nothing to close Veridia's stark rural–urban **HDI–IHDI gap (0.636 vs 0.470)**.\n\nBy contrast, **value-added export diversification** (such as processing raw cocoa into chocolate/butter and sustainable furniture), **targeted FDI**, and **rural human-capital investment** directly tackle Veridia's twin vulnerabilities. Moving up the value chain escapes volatile primary-product prices and deteriorating terms of trade while harnessing the **depreciated Peso (50 VP/US$1)** to boost manufactured export competitiveness—reducing reliance on fragile **+US$2.8bn remittances**. Simultaneously, channeling public funds into **rural schooling, healthcare, clean power, microfinance, and anti-corruption institutions** raises labour productivity and directly lifts the **IHDI (0.470)**, ensuring growth translates into inclusive development.\n\nYet this outward + human-capital strategy also faces genuine **risks and constraints**. Attracting **FDI** requires reliable infrastructure and governance; unchecked MNCs can worsen Veridia's **−US$1.8bn primary-income outflow** through **profit repatriation** or degrade tropical forests if timber rules are weak. Meanwhile, rural education and institutional reforms carry **long time lags** and heavy **upfront fiscal costs** that may strain public finances unless backed by concessional multilateral aid or domestic tax reform.\n\n**Reasoned judgement:** Broad import-substitution tariffs are an ineffective primary development strategy for Veridia because they raise input costs for emerging exporters and ignore rural inequality. **Value-added export diversification paired with rural human-capital and institutional investment** is decisively more effective for sustainable, inclusive development—provided Veridia regulates FDI for local skill transfer and environmental standards, uses strictly **time-bound, performance-linked support** (such as targeted production subsidies rather than costly tariffs) for promising infant processors, and channels fiscal resources into narrowing its **0.636 vs 0.470 HDI–IHDI divide**.",
      markScheme: [
        { point: "Synthesizes Veridia's structural constraints using exact data (64% primary exports, −$4.0bn CA, HDI 0.636 vs IHDI 0.470)", keywords: ["64%", "0.470", "−us$4.0"] },
        { point: "Explains infant-industry case for import-substitution tariffs (economies of scale, urban jobs, import reduction)", keywords: ["infant industry", "economies of scale"] },
        { point: "Cites fiscal revenue advantage ($6 million tariff revenue) given narrow developing-country tax base", keywords: ["us$6 million", "narrow tax base"] },
        { point: "Evaluates downstream input-cost damage ($750/t steel + 500,000 VP dearer capital imports) hurting exporters", keywords: ["500,000 vp", "us$750/t"] },
        { point: "Evaluates deadweight welfare loss and risk of permanent X-inefficiency under import substitution", keywords: ["x-inefficient", "deadweight welfare losses"] },
        { point: "Critiques urban tariff protection for failing to narrow rural–urban inequality (HDI–IHDI gap)", keywords: ["rural–urban", "0.166"] },
        { point: "Explains value-added export diversification (cocoa processing) to escape primary-commodity volatility", keywords: ["value chain", "terms of trade"] },
        { point: "Links export promotion to taking advantage of the depreciated Veridian Peso (50 VP/US$1)", keywords: ["depreciated peso", "50 vp/us$1"] },
        { point: "Notes structural reliance on +US$2.8bn remittances vs sustainable domestic export earnings", keywords: ["2.8bn remittances", "export competitiveness"] },
        { point: "Analyses rural human-capital, microfinance, and anti-corruption institutions directly boosting IHDI", keywords: ["rural schooling", "microfinance", "anti-corruption"] },
        { point: "Evaluates FDI risk of worsening Veridia's −US$1.8bn primary income deficit via profit repatriation", keywords: ["1.8bn", "profit repatriation"] },
        { point: "Evaluates environmental sustainability risk (e.g. tropical timber deforestation) from unmanaged FDI/exports", keywords: ["tropical forests", "environmental standards"] },
        { point: "Evaluates long time lags and fiscal financing limits of rural education/infrastructure reforms", keywords: ["long time lags", "concessional"] },
        { point: "Compares policy tools constructively (suggesting time-bound support or production subsidies over permanent tariffs)", keywords: ["time-bound", "production subsidies"] },
        { point: "Concludes with a reasoned judgement favouring export diversification + rural human capital with regulated FDI", keywords: ["decisively more effective", "local skill transfer"] },
      ],
      markbands: P2_EXTENDED_BANDS,
      commonError: "Giving generic development pros/cons without referencing Veridia's actual figures (−$4.0bn CA, −$1.8bn primary income, $6m tariff rev, 0.636 HDI vs 0.470 IHDI).",
      strategy: "Weigh Import Substitution vs Export Diversification + FDI + Rural Human Capital using EVERY key figure in Table 2 & Extracts C–D",
    },
  ],
};
