import type { MarkBand, TopicPractice } from "../../types.ts";

const MARKBANDS_8M: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Limited understanding of the specific demands of the question with little relevant economic theory, minimal use of data, and no meaningful evaluation.",
    indicators: ["Descriptive assertions without accurate economic terminology", "No valid diagram or clear causal chain"],
  },
  {
    band: "3–5",
    marks: [3, 5],
    descriptor: "Clear understanding and application of relevant economic theory and stimulus data, with accurate diagrams/chains of analysis, though evaluation is underdeveloped or one-sided.",
    indicators: ["Accurate explanation of key mechanisms linked to the scenario", "Attempts balance or counterarguments without deep synthesis"],
  },
  {
    band: "6–8",
    marks: [6, 8],
    descriptor: "Thorough application of economic theory and stimulus evidence with well-balanced, reasoned evaluation weighing short- vs long-run trade-offs, stakeholder impacts, and a justified conclusion.",
    indicators: ["Integrates stimulus data directly into economic analysis", "Sustained evaluation of trade-offs, assumptions, and complementary policies", "Clear, reasoned judgement answering the prompt"],
  },
];

const MARKBANDS_10M: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question with sparse, inaccurate, or generic economic terminology and missing or flawed diagrams.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Understanding of the specific demands of the question using mostly accurate economic theory and diagrams, though explanations lack depth or complete causal links.",
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Clear, thorough explanation using precise economic terminology and accurately drawn, fully integrated diagrams explaining step-by-step transmission mechanisms.",
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Comprehensive, nuanced explanation addressing every demand of the question with precise economic terminology, fully annotated and integrated diagrams, and clear analytical depth throughout.",
  },
];

const MARKBANDS_15M: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding with minimal relevant economic theory, no meaningful evaluation, and no relevant real-world examples.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic theory and partial explanation, with superficial or generic examples and limited, unsupported evaluation.",
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Clear application of relevant economic theory and diagrams with appropriate real-world examples, though evaluation is uneven or lacks sustained synthesis.",
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Strong economic analysis supported by accurate diagrams, well-integrated real-world examples, and effective evaluation considering multiple perspectives and limitations.",
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Sustained, insightful synthesis integrating precise theory, well-explained diagrams, specific and relevant real-world examples, and rigorous evaluation of short- vs long-run trade-offs, stakeholder impacts, and context-dependent conclusions.",
    indicators: [
      "Explicit, concrete real-world country/policy examples woven into analysis and evaluation",
      "Balanced evaluation across short-run vs long-run horizons, equity vs efficiency, and underlying model assumptions",
      "Reasoned, nuanced overall judgement",
    ],
  },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // TOPIC QUIZ (10 Qs — rapid SL/HL diagnostic across all 4 sections)
  // ===========================================================================
  quiz: [
    {
      id: "3a-macro-activity-objectives-quiz-q01",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "measuring-macro-activity",
      question:
        "In 2025, an economy records C = $280 billion, I = $75 billion, G = $95 billion, X = $65 billion, and M = $80 billion. Calculate **GDP** (in $ billions).",
      answer: { type: "number", value: 435, display: "$435 billion" },
      traps: [
        {
          spec: { type: "number", value: 595 },
          feedback: "Imports (M) must be *subtracted* from exports (X − M), not added!",
        },
        {
          spec: { type: "number", value: 450 },
          feedback: "You summed C + I + G = 450, but forgot to include net exports (X − M = −15).",
        },
      ],
      solution: [
        "Apply the expenditure formula: GDP = C + I + G + (X − M).",
        "Net exports = 65 − 80 = −$15 billion.",
        "GDP = 280 + 75 + 95 − 15 = **$435 billion**.",
      ],
      hints: [
        "Use GDP = C + I + G + (X − M).",
        "Compute net exports (65 − 80) carefully — imports exceed exports here.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "measuring-macro-activity",
      question:
        "An economy has Nominal GDP of **$624 billion** and a GDP deflator of **104** (base year = 100). Calculate **Real GDP** (in $ billions).",
      answer: { type: "number", value: 600, display: "$600 billion" },
      traps: [
        {
          spec: { type: "number", value: 648.96, tolerance: 0.1 },
          feedback: "You multiplied by 1.04 instead of dividing by the GDP deflator!",
        },
      ],
      solution: [
        "Real GDP = (Nominal GDP ÷ GDP Deflator) × 100.",
        "Real GDP = {{(624 / 104) * 100}} = 6 × 100 = **$600 billion**.",
      ],
      hints: [
        "Real GDP removes inflation using (Nominal GDP ÷ GDP Deflator) × 100.",
        "Divide 624 by 104, then multiply by 100.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q03",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "adas-models-equilibria",
      question:
        "Why is the **Monetarist / New Classical Long-Run Aggregate Supply (LRAS)** curve drawn vertically at full-employment output ({{Y_fe}})?",
      options: [
        "Long-run potential output depends on factor quantity, quality, and technology rather than the price level",
        "Governments legally fix real output at a constant annual target regardless of aggregate demand",
        "Nominal wages remain completely frozen forever even when unemployment falls toward zero",
        "Higher price levels permanently destroy factories and reduce the economy's productive capacity",
      ],
      answerIndex: 0,
      explanation:
        "In the Monetarist/New Classical long run, flexible wages and input prices adjust fully to any change in the average price level, so real output returns to **potential capacity ({{Y_fe}})** determined strictly by real resources and technology.",
      hints: [
        "Think about what changes — and what does NOT change — when all prices and wages double together.",
        "Vertical LRAS means real output in the long run is independent of the average price level.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "adas-models-equilibria",
      question:
        "What specific macroeconomic term describes the situation when actual Real GDP lies **below** full-employment potential Real GDP ({{Y < Y_fe}})?",
      answer: {
        type: "text",
        accept: ["deflationary gap", "recessionary gap", "negative output gap", "deflationary", "recessionary"],
        display: "deflationary gap",
      },
      solution: [
        "When actual Real GDP is below potential full-employment output ({{Y < Y_fe}}), there is spare capacity and cyclical unemployment.",
        "IB Economics calls this a **deflationary gap** (also known as a **recessionary gap** or **negative output gap**).",
      ],
      hints: [
        "This gap is the opposite of an inflationary (positive) output gap.",
        "It signals weak Aggregate Demand and cyclical unemployment below Y_fe.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "macro-objectives-phillips-hl",
      question:
        "An economy has **14.1 million** employed workers and **0.9 million** unemployed workers actively searching for jobs. Calculate the **unemployment rate** (%).",
      answer: { type: "number", value: 6, display: "6%" },
      traps: [
        {
          spec: { type: "number", value: 6.38, tolerance: 0.05 },
          feedback: "Divide unemployed by the total Labour Force (Employed + Unemployed = 15.0m), not just Employed (14.1m)!",
        },
      ],
      solution: [
        "Labour Force = Employed + Unemployed = 14.1 + 0.9 = 15.0 million.",
        "Unemployment Rate = {{(0.9 / 15.0) * 100}} = **6%**.",
      ],
      hints: [
        "First add employed and unemployed together to find the Labour Force.",
        "Then compute (Unemployed ÷ Labour Force) × 100.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "macro-objectives-phillips-hl",
      question:
        "A country's CPI rises from **160.0** in 2024 to **168.0** in 2025. Calculate the annual **inflation rate** (%).",
      answer: { type: "number", value: 5, display: "5%" },
      traps: [
        {
          spec: { type: "number", value: 8 },
          feedback: "Don't just subtract 168 − 160! You must divide the 8-point change by the starting CPI (160).",
        },
      ],
      solution: [
        "Inflation rate = ((CPI₂ − CPI₁) ÷ CPI₁) × 100.",
        "Inflation rate = {{((168 - 160) / 160) * 100}} = {{(8 / 160) * 100}} = **5%**.",
      ],
      hints: [
        "Percentage change always divides by the *original* (2024) index value.",
        "Compute (8 ÷ 160) × 100.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Predict",
      guideRef: "macro-objectives-phillips-hl",
      question:
        "[HL] How does a severe negative supply shock (such as a sudden spike in global energy prices) appear on the **Phillips Curve** diagram?",
      options: [
        "A movement upward and left along a fixed Short-Run Phillips Curve",
        "A rightward (outward) shift of the Short-Run Phillips Curve",
        "A leftward (inward) shift of the Short-Run Phillips Curve",
        "A leftward shift of the vertical Long-Run Phillips Curve",
      ],
      answerIndex: 1,
      explanation:
        "A cost-push supply shock raises both inflation and unemployment simultaneously (**stagflation**), shifting the entire **Short-Run Phillips Curve outward (to the right)**.",
      hints: [
        "Remember: AD changes move *along* SRPC; SRAS cost shocks *shift* SRPC.",
        "Stagflation gives a worse combination of higher inflation at every unemployment rate.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "inequality-lorenz-taxation",
      question:
        "On a country's Lorenz curve diagram, the area between the 45° line of perfect equality and the Lorenz curve (**Area A**) is **0.19**, and the area underneath the Lorenz curve (**Area B**) is **0.31**. Calculate the **Gini coefficient** (to 2 decimal places).",
      answer: { type: "number", value: 0.38, tolerance: 0.005, display: "0.38" },
      traps: [
        {
          spec: { type: "number", value: 0.62, tolerance: 0.005 },
          feedback: "That is B ÷ (A + B). The Gini coefficient uses Area A in the numerator: A ÷ (A + B).",
        },
        {
          spec: { type: "number", value: 0.19 },
          feedback: "You gave Area A alone — divide Area A by (A + B) = 0.50!",
        },
      ],
      solution: [
        "Gini = A ÷ (A + B) = 0.19 ÷ (0.19 + 0.31).",
        "Gini = {{0.19 / 0.50}} = **0.38**.",
      ],
      hints: [
        "Recall Gini = Area A ÷ (Area A + Area B).",
        "Check A + B = 0.19 + 0.31 = 0.50, then divide 0.19 by 0.50.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Distinguish",
      guideRef: "inequality-lorenz-taxation",
      question:
        "Which statement best distinguishes **absolute poverty** from **relative poverty**?",
      options: [
        "Absolute poverty compares households to median income, while relative poverty measures calories",
        "Absolute poverty exists only in high-income nations, while relative poverty exists only in low-income nations",
        "Absolute poverty is inability to afford basic physical necessities, while relative poverty is earning below a threshold share of national median income",
        "Absolute poverty is measured by the Gini coefficient, while relative poverty is measured by Nominal GDP",
      ],
      answerIndex: 2,
      explanation:
        "**Absolute poverty** tracks inability to meet essential biological survival needs (e.g. $2.15/day PPP), whereas **relative poverty** defines deprivation relative to prevailing societal living standards (commonly below 50% or 60% of national median income).",
      hints: [
        "Match 'absolute' with a fixed survival threshold and 'relative' with a comparison to fellow citizens.",
        "Relative poverty moves upward as a country's median income rises.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "inequality-lorenz-taxation",
      question:
        "[HL] Country X taxes personal income progressively: **0%** on $0–$10,000, **15%** on $10,001–$30,000, and **25%** on income above $30,000. Calculate the **total income tax** (in $) paid by a worker earning **$50,000**.",
      answer: { type: "number", value: 8000, display: "$8,000" },
      traps: [
        {
          spec: { type: "number", value: 12500 },
          feedback: "You multiplied the entire $50,000 by 25%! Only the slice *above* $30,000 is taxed at 25%.",
        },
        {
          spec: { type: "number", value: 10000 },
          feedback: "Check the middle bracket ($10,001–$30,000): that $20,000 slice is taxed at 15% ($3,000), not 25%.",
        },
      ],
      solution: [
        "Slice 1 ($0–$10,000): $10,000 × 0% = $0.",
        "Slice 2 ($10,001–$30,000): $20,000 × 15% = $3,000.",
        "Slice 3 ($30,001–$50,000): $20,000 × 25% = $5,000.",
        "Total income tax = $0 + $3,000 + $5,000 = **$8,000**.",
      ],
      hints: [
        "Split $50,000 into three slices: $10,000, $20,000, and $20,000.",
        "Apply 0%, 15%, and 25% separately to each slice, then sum the results.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 Qs EACH = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1: IB PAPER 2 DATA-RESPONSE & QUANTITATIVE MASTERY
    // -------------------------------------------------------------------------
    {
      id: "3a-macro-activity-objectives-p1",
      title: "Practice Paper 1 · IB Paper 2 Data-Response & Quantitative Mastery",
      questions: [
        {
          id: "3a-macro-activity-objectives-p1-q01",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "measuring-macro-activity",
          marks: 2,
          question:
            "Define **Gross National Income (GNI)** and explain how it differs from Gross Domestic Product (GDP).",
          modelAnswer:
            "Gross National Income is the total monetary value of all final income earned by a country's residents and domestically owned factors of production over a given period, regardless of geographic location. Unlike border-based domestic output, GNI adjusts GDP by adding net property income from abroad (factor earnings residents receive overseas minus profits and wages remitted to foreign owners).",
          markScheme: [
            {
              point: "Accurate definition: total income earned by a nation's residents / domestically owned factors of production over a period (regardless of location).",
              keywords: ["residents", "domestically owned", "nationals", "regardless of"],
            },
            {
              point: "Explicit distinction from GDP via adding net property income from abroad (inflows earned overseas minus outflows remitted to foreigners).",
              keywords: ["net property income", "net factor income", "remitted", "border"],
            },
          ],
          hints: [
            "Highlight ownership/residency vs geographic borders.",
            "Include the adjustment formula connecting GDP to GNI.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "measuring-macro-activity",
          question:
            "Country N's national accounts show (in $ billions): C = 410, I = 105, G (purchases of goods and services) = 130, government transfer payments = 45, X = 120, M = 145, and net property income from abroad = +25. Calculate Country N's **GNI** (in $ billions).",
          answer: { type: "number", value: 645, display: "$645 billion" },
          traps: [
            {
              spec: { type: "number", value: 620 },
              feedback: "You calculated GDP ($620 bn) accurately — now add net property income from abroad (+$25 bn) to get GNI!",
            },
            {
              spec: { type: "number", value: 690 },
              feedback: "Exclude government transfer payments ($45 bn) because no current output is produced in exchange.",
            },
          ],
          solution: [
            "Exclude transfer payments ($45 bn).",
            "GDP = C + I + G + (X − M) = 410 + 105 + 130 + (120 − 145) = 645 − 25 = $620 bn.",
            "GNI = GDP + Net Property Income from Abroad = 620 + 25 = **$645 billion**.",
          ],
          hints: [
            "Cross out transfer payments first so you don't double-count.",
            "Find GDP = C + I + G + (X − M), then add net property income from abroad (+25).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "measuring-macro-activity",
          question:
            "An economy's Nominal GDP rises from **$336 billion** in 2024 (GDP deflator = **105**) to **$379.5 billion** in 2025 (GDP deflator = **115**). Calculate the **real economic growth rate** (%) in 2025, rounded to **2 decimal places**.",
          answer: { type: "number", value: 3.13, tolerance: 0.02, display: "3.13%" },
          traps: [
            {
              spec: { type: "number", value: 12.95, tolerance: 0.05 },
              feedback: "That is the *nominal* GDP growth rate — deflate both years into Real GDP before computing growth!",
            },
          ],
          solution: [
            "Real GDP (2024) = {{(336 / 105) * 100}} = $320 billion.",
            "Real GDP (2025) = {{(379.5 / 115) * 100}} = $330 billion.",
            "Real growth rate = {{((330 - 320) / 320) * 100}} = {{(10 / 320) * 100}} = 3.125% ≈ **3.13%**.",
          ],
          hints: [
            "Convert both 2024 and 2025 Nominal GDP into Real GDP using (Nominal ÷ Deflator) × 100.",
            "Compute ((Real GDP₂ − Real GDP₁) ÷ Real GDP₁) × 100 and round to 2 decimal places.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "measuring-macro-activity",
          marks: 4,
          question:
            "Explain **two** reasons why Real GDP per capita at Purchasing Power Parity (PPP) may still provide an incomplete measure of overall living standards.",
          modelAnswer:
            "First, average output per person masks income inequality: if national income gains accrue almost entirely to the richest decile, median household living standards may stagnate even as per-capita GDP climbs. Second, national income statistics omit negative environmental externalities and resource depletion — deforestation, carbon emissions, and pollution clean-up spending can actually boost recorded GDP while degrading long-term health and sustainability (which Green GDP seeks to correct). Additional valid omissions include unpaid household/volunteer work, informal-sector activity, and lost leisure hours.",
          markScheme: [
            {
              point: "Identifies first valid limitation (e.g., ignores income distribution / inequality).",
              keywords: ["inequality", "distribution", "richest", "median"],
            },
            {
              point: "Explains how the first limitation distorts measured living standards.",
              keywords: ["stagnate", "masks", "accrue", "disparit"],
            },
            {
              point: "Identifies second distinct limitation (e.g., environmental externalities, non-marketed work, informal economy, or leisure/composition).",
              keywords: ["externalities", "depletion", "pollution", "unpaid", "informal", "leisure"],
            },
            {
              point: "Explains clearly why this second factor makes GDP diverge from true human welfare (e.g., clean-up spending raises GDP / Green GDP).",
              keywords: ["sustainability", "green gdp", "clean-up", "degrading", "welfare"],
            },
          ],
          hints: [
            "Pick two distinct blind spots (e.g. distribution of income + environmental externalities or non-marketed output).",
            "For each point, state the omission AND explain explicitly why it causes per-capita output to misstate welfare.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "adas-models-equilibria",
          marks: 4,
          question:
            "Using the **Monetarist / New Classical** AD/AS model, explain how an economy initially operating below full-employment output ({{Y_fe}}) self-corrects in the long run.",
          modelAnswer:
            "When actual Real GDP sits below vertical LRAS (a deflationary gap), cyclical unemployment creates excess supply in the labour market. Because Monetarist/New Classical economists assume flexible wages and input prices, unemployed workers accept lower nominal wage rates in order to secure jobs. Falling unit production costs incentivize firms to expand output at every price level, shifting SRAS to the right. As SRAS shifts rightward along downward-sloping AD, the average price level falls and Real GDP rises back to potential output Y_fe, restoring full-employment equilibrium automatically without government intervention.",
          markScheme: [
            {
              point: "Identifies excess supply of labour / cyclical unemployment in a deflationary gap below vertical LRAS.",
              keywords: ["deflationary gap", "excess supply", "cyclical unemployment", "vertical lras"],
            },
            {
              point: "States flexible downward wages / falling nominal wage rates and resource prices.",
              keywords: ["flexible", "lower nominal wage", "wages fall", "wage rates"],
            },
            {
              point: "Explains lower production costs shifting SRAS rightward.",
              keywords: ["production costs", "sras", "rightward", "shifts right"],
            },
            {
              point: "Concludes that Real GDP returns automatically to Y_fe at a lower average price level.",
              keywords: ["lower", "price level", "potential output", "automatically"],
            },
          ],
          hints: [
            "Start with excess labour supply when output is below vertical LRAS.",
            "Trace the causal chain: unemployment → flexible wages fall → unit costs drop → SRAS shifts right → back to Y_fe at lower PL.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "adas-models-equilibria",
          marks: 4,
          question:
            "Using the **Keynesian** three-section AS model, explain why a rightward shift in Aggregate Demand has very different effects on inflation in a deep slump versus at full employment.",
          modelAnswer:
            "In a deep slump, the economy operates on the horizontal (perfectly elastic) section of the Keynesian AS curve, where widespread spare capacity and unemployed workers exist. When Aggregate Demand shifts right, firms can hire idle labour and switch on unused machinery without competing for scarce inputs, so Real GDP expands substantially while the average price level stays constant (zero demand-pull inflation). Conversely, at full-employment output Y_fe, the AS curve becomes vertical (perfectly inelastic) because all available factors are fully utilized; any further AD expansion simply bids up wages and prices, causing pure demand-pull inflation with no extra real output.",
          markScheme: [
            {
              point: "Identifies horizontal / elastic section with abundant spare capacity and idle resources in a slump.",
              keywords: ["horizontal", "spare capacity", "idle", "elastic"],
            },
            {
              point: "Explains AD increase raises Real GDP with zero / minimal inflation when resources are idle.",
              keywords: ["constant", "zero", "without competing", "minimal"],
            },
            {
              point: "Identifies vertical / inelastic section at full-employment capacity (Y_fe).",
              keywords: ["vertical", "inelastic", "fully utilized", "capacity"],
            },
            {
              point: "Explains AD increase at Y_fe causes pure demand-pull inflation with no increase in Real GDP.",
              keywords: ["pure demand-pull", "bids up", "no extra real output", "demand-pull inflation"],
            },
          ],
          hints: [
            "Contrast the horizontal elastic zone against the vertical full-employment zone of the Keynesian AS curve.",
            "Explain *why* prices stay flat in the slump (idle machines/workers) vs jump at Y_fe (resource scarcity).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "macro-objectives-phillips-hl",
          question:
            "A household CPI basket comprises three weighted categories in 2025 (base year 2024 = 100): **Food** (weight 35%, index 112), **Shelter** (weight 45%, index 108), and **Energy & Transport** (weight 20%, index 125). Calculate the **weighted CPI** for 2025 (to 1 decimal place).",
          answer: { type: "number", value: 112.8, tolerance: 0.05, display: "112.8" },
          traps: [
            {
              spec: { type: "number", value: 115, tolerance: 0.1 },
              feedback: "That is the unweighted simple average (112+108+125) ÷ 3. Multiply each index by its weight!",
            },
          ],
          solution: [
            "Food: 0.35 × 112 = 39.2.",
            "Shelter: 0.45 × 108 = 48.6.",
            "Energy & Transport: 0.20 × 125 = 25.0.",
            "Weighted CPI = 39.2 + 48.6 + 25.0 = **112.8**.",
          ],
          hints: [
            "Convert percentage weights into decimals (0.35, 0.45, 0.20) and multiply each by its price index.",
            "Add the three products: 39.2 + 48.6 + 25.0.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "macro-objectives-phillips-hl",
          question:
            "An economy's Consumer Price Index rises from **112.5** in 2024 to **117.0** in 2025. Calculate the annual **inflation rate** (%).",
          answer: { type: "number", value: 4, display: "4%" },
          traps: [
            {
              spec: { type: "number", value: 4.5 },
              feedback: "You found the index-point difference (4.5), not the percentage change! Divide 4.5 by 112.5 and multiply by 100.",
            },
          ],
          solution: [
            "Inflation rate = ((117.0 − 112.5) ÷ 112.5) × 100.",
            "Inflation rate = {{(4.5 / 112.5) * 100}} = **4%**.",
          ],
          hints: [
            "Use ((CPI₂ − CPI₁) ÷ CPI₁) × 100.",
            "Divide 4.5 by 112.5 carefully (notice 4.5 × 25 = 112.5).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "macro-objectives-phillips-hl",
          question:
            "Country G has a working-age population of **40.0 million**, of whom **29.76 million** are employed and **2.24 million** are unemployed and actively seeking work. Calculate the **Labour Force Participation Rate (LFPR)** (%).",
          answer: { type: "number", value: 80, display: "80%" },
          traps: [
            {
              spec: { type: "number", value: 7 },
              feedback: "7% is the *unemployment rate* (2.24 ÷ 32.0). This question asks for the Labour Force Participation Rate!",
            },
            {
              spec: { type: "number", value: 74.4, tolerance: 0.1 },
              feedback: "Include unemployed active job-seekers in the Labour Force (29.76 + 2.24 = 32.0m), not just employed workers!",
            },
          ],
          solution: [
            "Labour Force = Employed + Unemployed = 29.76 + 2.24 = 32.0 million.",
            "LFPR = (Labour Force ÷ Working-Age Population) × 100 = {{(32.0 / 40.0) * 100}} = **80%**.",
          ],
          hints: [
            "Labour Force includes BOTH employed workers and unemployed active job-seekers.",
            "Divide the Labour Force by the Working-Age Population (40.0 million) and multiply by 100.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "macro-objectives-phillips-hl",
          marks: 4,
          question:
            "Distinguish between **disinflation** and **deflation**, and explain why central banks seek to avoid a demand-side deflationary spiral.",
          modelAnswer:
            "Disinflation is a slowdown in the positive rate of inflation (such as CPI growth easing from 6% to 2%), meaning average prices are still rising at a gentler pace. By contrast, deflation is a sustained fall in the general price level, reflected by a negative inflation rate. Central banks fear demand-side deflation because consumers postpone discretionary spending expecting cheaper goods later, causing Aggregate Demand to contract further. Simultaneously, falling prices and nominal incomes raise the real burden of fixed debts, squeezing household and corporate borrowers, lowering profits, and accelerating layoffs in a self-reinforcing downward spiral.",
          markScheme: [
            {
              point: "Accurately defines disinflation (falling positive rate of inflation; prices still rising more slowly).",
              keywords: ["slowdown", "slower", "still rising", "positive rate"],
            },
            {
              point: "Accurately defines deflation (sustained fall in general price level / negative inflation rate).",
              keywords: ["negative", "fall in the general", "falling prices", "sustained fall"],
            },
            {
              point: "Explains deferred consumption channel: households delay purchases expecting lower future prices, reducing AD further.",
              keywords: ["postpone", "delay", "defer", "contract further"],
            },
            {
              point: "Explains real debt-burden / unemployment channel: real value of fixed debts rises, squeezing borrowers and forcing layoffs.",
              keywords: ["real burden", "real value of", "debt", "layoffs"],
            },
          ],
          hints: [
            "Contrast 'slower positive price growth' against 'negative price growth'.",
            "Include BOTH mechanisms of the deflationary spiral: deferred consumption AND rising real debt burdens.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "macro-objectives-phillips-hl",
          marks: 4,
          question:
            "[HL] Explain how a sudden spike in imported energy prices affects equilibrium in **both** the AD/AS model and the **Short-Run Phillips Curve (SRPC)** model.",
          modelAnswer:
            "Higher imported energy prices raise unit production costs across manufacturing, agriculture, and transport, shifting the SRAS curve leftward along a fixed AD curve. Equilibrium moves to a higher average price level (cost-push inflation) and a lower Real GDP, raising cyclical unemployment — a condition termed stagflation. On the Phillips Curve diagram, because inflation and unemployment rise simultaneously rather than moving in opposite directions, the economy cannot slide along a single curve; instead, the entire SRPC shifts outward to the right, reflecting a worsened short-run inflation–unemployment trade-off.",
          markScheme: [
            {
              point: "Explains higher input/energy costs shift SRAS leftward in the AD/AS model.",
              keywords: ["production costs", "sras", "leftward"],
            },
            {
              point: "Identifies AD/AS outcome: cost-push inflation (higher PL), lower Real GDP, and higher unemployment (stagflation).",
              keywords: ["cost-push", "stagflation", "lower real gdp"],
            },
            {
              point: "Links simultaneous rise in inflation and unemployment to an outward/rightward shift of SRPC (not a movement along).",
              keywords: ["outward", "rightward", "shifts", "srpc"],
            },
            {
              point: "Explains this represents a worsened short-run trade-off (higher inflation at every unemployment rate).",
              keywords: ["simultaneously", "worsened", "trade-off"],
            },
          ],
          hints: [
            "First trace the cost-push shock on AD/AS (SRAS shifts left → higher PL, lower Y).",
            "Then translate 'higher inflation + higher unemployment simultaneously' onto SRPC (outward shift!).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q12",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "inequality-lorenz-taxation",
          question:
            "[HL] Country H applies progressive income tax brackets: **0%** on $0–$15,000; **12%** on $15,001–$40,000; **28%** on income above $40,000. A salaried engineer earns **$65,000**. Calculate the engineer's **Average Tax Rate (ATR)** (%), rounded to **2 decimal places**.",
          answer: { type: "number", value: 15.38, tolerance: 0.02, display: "15.38%" },
          traps: [
            {
              spec: { type: "number", value: 28 },
              feedback: "28% is the *marginal* tax rate on income above $40,000. Compute total tax across all slices, then divide by $65,000!",
            },
            {
              spec: { type: "number", value: 10000 },
              feedback: "$10,000 is the *total tax paid* — now divide $10,000 by $65,000 and multiply by 100 to get the Average Tax Rate (%)!",
            },
          ],
          solution: [
            "Bracket 1 ($0–$15,000): $15,000 × 0% = $0.",
            "Bracket 2 ($15,001–$40,000): $25,000 × 12% = $3,000.",
            "Bracket 3 ($40,001–$65,000): $25,000 × 28% = $7,000.",
            "Total income tax = $0 + $3,000 + $7,000 = $10,000.",
            "ATR = {{(10000 / 65000) * 100}} = 15.3846...% ≈ **15.38%**.",
          ],
          hints: [
            "Calculate total tax paid slice-by-slice across the three brackets ($0 + $3,000 + $7,000).",
            "Divide total tax ($10,000) by total income ($65,000) and multiply by 100.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "inequality-lorenz-taxation",
          question:
            "[HL] Country S levies a uniform **8% GST** on consumer expenditure. Household X earns **$32,000** per year and spends **$28,000** on GST-taxable goods (pre-tax). Calculate Household X's **GST paid as a percentage of income** (%).",
          answer: { type: "number", value: 7, display: "7%" },
          traps: [
            {
              spec: { type: "number", value: 8 },
              feedback: "8% is the statutory tax rate on *spending*. Find dollar GST ($28,000 × 0.08) and divide by *income* ($32,000).",
            },
            {
              spec: { type: "number", value: 2240 },
              feedback: "$2,240 is the dollar GST paid — divide $2,240 by total income ($32,000) and multiply by 100 for the percentage!",
            },
          ],
          solution: [
            "GST paid = $28,000 × 0.08 = $2,240.",
            "GST as % of income = {{(2240 / 32000) * 100}} = **7%**.",
          ],
          hints: [
            "First calculate the dollar GST paid: 8% of $28,000.",
            "Then express that dollar amount as a percentage of total income ($32,000).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "inequality-lorenz-taxation",
          marks: 4,
          question:
            "Explain how the **Lorenz curve** and **Gini coefficient** measure income inequality, and identify **one** limitation of relying exclusively on the Gini coefficient.",
          modelAnswer:
            "The Lorenz curve plots cumulative percentage of population (ordered poorest to richest) against cumulative percentage of total income alongside a 45-degree diagonal representing perfect equality; the further the curve bows away from the diagonal, the more unequal the distribution. The Gini coefficient summarizes this geometry as Area A divided by (Area A + Area B), yielding a single score from 0 (perfect equality) to 1 (complete inequality) for straightforward cross-country comparisons. However, a key limitation is that two countries with very different distributions — such as crossing Lorenz curves where one has a stronger middle class and the other a poorer bottom quintile — can share the exact same Gini score; moreover, Gini ignores absolute living standards and wealth stocks.",
          markScheme: [
            {
              point: "Explains Lorenz axes (cumulative % population vs cumulative % income) and 45-degree line of perfect equality.",
              keywords: ["cumulative", "45-degree", "diagonal", "bows"],
            },
            {
              point: "Defines Gini = A / (A + B) on a 0 to 1 scale (0 = perfect equality, 1 = complete inequality).",
              keywords: ["area a", "0", "1", "divided by"],
            },
            {
              point: "Identifies a valid limitation (crossing Lorenz curves producing identical Gini, or ignoring absolute poverty / wealth inequality).",
              keywords: ["crossing", "identical", "exact same", "wealth", "absolute"],
            },
            {
              point: "Explains why this limitation matters when comparing countries or designing policy.",
              keywords: ["different distributions", "middle class", "bottom quintile", "living standards"],
            },
          ],
          hints: [
            "Define both the graphical construction of the Lorenz curve and the Area A / (A + B) Gini formula.",
            "Remember the classic limitation: crossing Lorenz curves can produce the exact same Gini number!",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "macro-objectives-phillips-hl",
          marks: 8,
          markbands: MARKBANDS_8M,
          question:
            "**Data Extract:** Country R currently records **4.2% unemployment** (heavily concentrated among former coal and steel workers in northern industrial towns, while tech firms report unfilled vacancies), **5.8% CPI inflation** (well above its 2% target), and a **national debt-to-GDP ratio of 96%**. Evaluate whether Country R should prioritize **demand-side expansion** or **targeted supply-side policies** to achieve its macroeconomic objectives.",
          modelAnswer:
            "Country R's data reveals an economy operating close to full-employment capacity (low 4.2% headline unemployment alongside high 5.8% inflation) suffering primarily from **structural unemployment** (regional skills mismatch in former coal/steel regions) rather than cyclical demand deficiency.\n\nIf Country R launches **demand-side expansion** (cutting taxes or raising general government spending), Aggregate Demand will shift rightward near the vertical section of Keynesian AS / beyond Monetarist LRAS. While this might marginally boost northern jobs in the short run, it will fuel severe **demand-pull inflation** above 5.8% and worsen the already elevated **96% debt-to-GDP ratio**, raising borrowing yields and debt-servicing opportunity costs.\n\nBy contrast, **targeted interventionist supply-side policies** — such as vocational retraining, adult reskilling subsidies in northern towns, digital infrastructure, and regional relocation grants — directly narrow the skills mismatch, lowering structural unemployment and the NRU while shifting **LRAS rightward**. Expanding productive capacity simultaneously promotes sustainable real growth and eases inflationary pressure.\n\n**Evaluation:** Supply-side reforms carry significant **long time lags** (retraining takes years) and require upfront fiscal outlays that could temporarily lift the 96% debt-to-GDP ratio unless funded by reallocating existing budgets or progressive taxes. Moreover, workers nearing retirement in declining regions may struggle to transition into tech roles, making complementary targeted welfare transfers essential for short-term equity. Overall, because Country R's core problems are structural mismatch and high inflation rather than deficient AD, **targeted supply-side policies** (paired with disciplined fiscal prioritization) are far superior to broad demand-side expansion.",
          markScheme: [
            {
              point: "Diagnoses Country R's stimulus data accurately: low 4.2% unemployment + unfilled vacancies signals structural unemployment near full capacity.",
              keywords: ["structural", "mismatch", "near full", "capacity"],
            },
            {
              point: "Explains AD mechanism: demand-side expansion near vertical AS / LRAS fuels severe demand-pull inflation above 5.8%.",
              keywords: ["demand-pull", "vertical", "lras", "overheat"],
            },
            {
              point: "Integrates debt-to-GDP constraint (96%): deficit-funded AD expansion raises borrowing yields and debt-servicing opportunity costs.",
              keywords: ["96%", "debt-servicing", "yields", "opportunity cost"],
            },
            {
              point: "Explains targeted supply-side mechanism: vocational retraining / relocation / infrastructure reduces structural unemployment and NRU.",
              keywords: ["retraining", "reskilling", "nru", "relocation"],
            },
            {
              point: "Explains rightward LRAS shift: raises potential real GDP while reducing long-run inflationary pressure.",
              keywords: ["rightward", "productive capacity", "eases inflationary"],
            },
            {
              point: "Evaluates limitation of supply-side policies: long time lags before retraining yields output/employment gains.",
              keywords: ["time lags", "takes years", "long run"],
            },
            {
              point: "Evaluates fiscal/equity trade-off: upfront budget cost under 96% debt and difficulty reskilling older workers (need for targeted transfers).",
              keywords: ["upfront", "older", "retiring", "retirement", "transfers", "reallocating"],
            },
            {
              point: "Reaches a justified, context-grounded judgement prioritizing targeted supply-side reforms over broad AD expansion.",
              keywords: ["overall", "superior", "prioritizing", "far superior"],
            },
          ],
          hints: [
            "Start by diagnosing the *type* of unemployment and inflation shown in the 3 numbers (4.2% U + unfilled tech vacancies, 5.8% CPI, 96% debt-to-GDP).",
            "Explain the exact AD/AS consequences of broad demand stimulus vs targeted retraining/supply-side reform.",
            "Evaluate time lags, upfront fiscal cost under 96% debt, and equity support for older displaced workers before stating a clear judgement.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2: IB PAPER 1 ESSAYS & HL QUANTITATIVE SYNTHESIS
    // -------------------------------------------------------------------------
    {
      id: "3a-macro-activity-objectives-p2",
      title: "Practice Paper 2 · IB Paper 1 Essays & HL Quantitative Synthesis",
      questions: [
        {
          id: "3a-macro-activity-objectives-p2-q01",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "measuring-macro-activity",
          marks: 2,
          question:
            "Define **Purchasing Power Parity (PPP)** and state why it improves international comparisons of Real GDP per capita.",
          modelAnswer:
            "Purchasing Power Parity is a currency-conversion rate that equalizes the purchasing power of different currencies by accounting for cross-country differences in domestic price levels for an equivalent basket of goods and services. It improves living-standard comparisons because market exchange rates understate actual purchasing power in lower-income nations where non-tradable local services are substantially cheaper.",
          markScheme: [
            {
              point: "Defines PPP as an exchange-rate adjustment equalizing purchasing power for an identical basket across domestic price levels.",
              keywords: ["equalizes", "basket", "price levels", "purchasing power"],
            },
            {
              point: "Explains why it beats market exchange rates (cheaper local / non-tradable services in lower-income countries).",
              keywords: ["non-tradable", "cheaper", "understate", "cost of living"],
            },
          ],
          hints: [
            "Mention equalizing the cost of a comparable basket of goods and services.",
            "Contrast PPP with market exchange rates for lower-income economies.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "measuring-macro-activity",
          question:
            "Country P records a Nominal GDP of **$840 billion**, a GDP deflator of **120** (base year = 100), and a population of **20 million**. Calculate Country P's **Real GDP per capita** (in $).",
          answer: { type: "number", value: 35000, display: "$35,000" },
          traps: [
            {
              spec: { type: "number", value: 42000 },
              feedback: "You divided *Nominal* GDP ($840bn) by 20m! Deflate Nominal GDP into Real GDP ($700bn) first.",
            },
          ],
          solution: [
            "Real GDP = {{(840 / 120) * 100}} = $700 billion = $700,000 million.",
            "Real GDP per capita = {{700000 / 20}} = **$35,000**.",
          ],
          hints: [
            "Step 1: Convert $840 bn Nominal GDP to Real GDP using deflator = 120.",
            "Step 2: Divide Real GDP ($700,000 million) by population (20 million).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q03",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "measuring-macro-activity",
          marks: 4,
          question:
            "Compare the **OECD Better Life Index** and **Green GDP** as alternative measures of national well-being.",
          modelAnswer:
            "Both the OECD Better Life Index and Green GDP aim to overcome the narrow monetary focus of conventional GDP by incorporating environmental sustainability alongside material income. However, they differ sharply in scope and methodology: Green GDP retains a single monetary metric by deducting estimated environmental degradation and natural-resource depletion costs directly from conventional GDP, making valuation of non-market ecological damage difficult. In contrast, the OECD Better Life Index is a broad multidimensional dashboard comparing 11 social and economic dimensions (including health, education, housing, safety, work–life balance, and civic engagement) with user-customizable weights rather than one fixed dollar total.",
          markScheme: [
            {
              point: "Identifies a clear similarity (both go beyond conventional GDP and incorporate environmental sustainability / wider welfare).",
              keywords: ["both", "sustainability", "overcome", "beyond"],
            },
            {
              point: "Describes Green GDP accurately: single monetary measure subtracting environmental degradation/resource depletion costs from GDP.",
              keywords: ["subtracting", "deducting", "depletion", "monetary"],
            },
            {
              point: "Describes OECD Better Life Index accurately: multidimensional across 11 dimensions with customizable weights.",
              keywords: ["11", "multidimensional", "weights", "work–life", "civic"],
            },
            {
              point: "Highlights a methodological contrast (single dollar adjustment with ecological valuation issues vs multi-indicator social dashboard).",
              keywords: ["valuation", "dashboard", "fixed dollar", "scope"],
            },
          ],
          hints: [
            "Remember the command term 'Compare': include BOTH similarities and key differences!",
            "Contrast single monetary environmental adjustment (Green GDP) with 11-dimension customizable indicators (OECD Better Life Index).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "adas-models-equilibria",
          marks: 4,
          question:
            "Explain the **three** macroeconomic mechanisms that cause the Aggregate Demand (AD) curve to slope downward.",
          modelAnswer:
            "Unlike a single-market demand curve (which relies on substitution between individual goods), Aggregate Demand slopes downward across the entire economy through three mechanisms as the average price level falls. First, the **wealth effect**: a lower price level increases the real purchasing power of households' cash and financial savings, encouraging higher consumption (C). Second, the **interest-rate effect**: lower prices reduce households' and firms' transaction demand for money, lowering interest rates and stimulating borrowing for consumption and capital investment (I). Third, the **international trade (net-export) effect**: cheaper domestic prices relative to foreign prices make exports more price-competitive (X rises) and imports relatively costlier (M falls), raising net exports (X − M).",
          markScheme: [
            {
              point: "Explains the wealth effect: lower average price level raises real value of money/financial savings, increasing consumption (C).",
              keywords: ["wealth effect", "real purchasing power", "savings"],
            },
            {
              point: "Explains the interest-rate effect: lower price level lowers money demand and interest rates, boosting C and investment (I).",
              keywords: ["interest-rate effect", "interest rate", "borrowing", "investment"],
            },
            {
              point: "Explains the international trade / net-export effect: lower domestic prices raise export competitiveness (X↑) and cut imports (M↓).",
              keywords: ["international trade", "net-export", "competitive", "exports"],
            },
            {
              point: "Explicitly links rising C, I, and (X − M) to a higher quantity of Real GDP demanded along AD (avoiding micro substitution error).",
              keywords: ["real gdp", "c, i", "entire economy", "substitution"],
            },
          ],
          hints: [
            "Recall the W-I-N mnemonic: Wealth, Interest-rate, and Net-export effects.",
            "Show how each effect changes a specific component of C + I + G + (X − M) when the price level falls.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "adas-models-equilibria",
          question:
            "An economy's full-employment potential Real GDP ({{Y_fe}}) is **$800 billion**, while booming household spending pushes actual Real GDP to **$836 billion**. Calculate the **positive output gap** as a percentage of potential GDP (%).",
          answer: { type: "number", value: 4.5, tolerance: 0.02, display: "4.5%" },
          traps: [
            {
              spec: { type: "number", value: 36 },
              feedback: "$36 billion is the dollar output gap — express it as a percentage of potential GDP ($800 bn)!",
            },
            {
              spec: { type: "number", value: 4.31, tolerance: 0.05 },
              feedback: "Divide the gap ($36 bn) by *potential* GDP ($800 bn), not actual GDP ($836 bn).",
            },
          ],
          solution: [
            "Output gap ($) = Actual GDP − Potential GDP = 836 − 800 = +$36 billion.",
            "Output gap (%) = {{(36 / 800) * 100}} = **4.5%**.",
          ],
          hints: [
            "Subtract potential GDP ($800 bn) from actual GDP ($836 bn).",
            "Divide $36 bn by $800 bn and multiply by 100.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "macro-objectives-phillips-hl",
          question:
            "A typical household basket contains **40 units of Food**, **10 units of Rent**, and **20 units of Fuel**. In the base year (2023), unit prices are Food = $5, Rent = $40, Fuel = $10. In 2025, unit prices rise to Food = $6, Rent = $44, Fuel = $12. Calculate the **CPI in 2025** (base year 2023 = 100).",
          answer: { type: "number", value: 115, display: "115" },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "15% is the cumulative inflation rate; the CPI *index* adds 100 to give 115!",
            },
          ],
          solution: [
            "Base-year (2023) basket cost = (40 × $5) + (10 × $40) + (20 × $10) = $200 + $400 + $200 = $800.",
            "2025 basket cost = (40 × $6) + (10 × $44) + (20 × $12) = $240 + $440 + $240 = $920.",
            "CPI (2025) = {{(920 / 800) * 100}} = **115**.",
          ],
          hints: [
            "Find total expenditure on the fixed basket in 2023 ($800) and in 2025 ($920).",
            "Apply CPI = (Current Basket Cost ÷ Base Basket Cost) × 100.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "macro-objectives-phillips-hl",
          marks: 4,
          question:
            "Explain **two** reasons why the official ILO unemployment rate may understate true labour-market slack during a recession.",
          modelAnswer:
            "First, the official ILO figure excludes **discouraged workers** — long-term jobless adults who stop actively applying for work because they believe no jobs exist; exiting the labour force shrinks both the numerator and denominator, creating hidden unemployment and artificially lowering the headline rate. Second, the metric ignores **underemployment**, counting involuntary part-time workers (or university graduates trapped in low-hour casual roles) as fully employed even though their skills and hours remain severely underutilized.",
          markScheme: [
            {
              point: "Identifies discouraged workers who stop actively searching and drop out of the labour force.",
              keywords: ["discouraged", "actively", "drop out", "exiting"],
            },
            {
              point: "Explains how discouraged workers artificially reduce the headline unemployment rate (hidden unemployment).",
              keywords: ["hidden unemployment", "numerator", "artificially", "lowers"],
            },
            {
              point: "Identifies underemployment / involuntary part-time workers counted as fully employed.",
              keywords: ["underemployment", "part-time", "involuntary", "casual"],
            },
            {
              point: "Explains why underemployment hides wasted productive hours and labour slack.",
              keywords: ["fully employed", "underutilized", "hours", "skills"],
            },
          ],
          hints: [
            "Focus on the two main dimensions of *hidden unemployment*: discouraged workers and involuntary part-time (underemployed) workers.",
            "Show how each one is classified under ILO rules.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "macro-objectives-phillips-hl",
          marks: 4,
          question:
            "Explain **two** macroeconomic costs of an unsustainably high and rising national debt-to-GDP ratio.",
          modelAnswer:
            "First, rising public debt imposes heavy **debt-servicing costs**: a growing share of annual tax revenue must pay bond interest rather than funding productive public services such as healthcare, schools, or clean infrastructure, creating a severe fiscal opportunity cost. Second, excessive debt-to-GDP ratios elevate default risk, prompting credit-rating downgrades that force governments to offer higher bond interest yields; higher sovereign borrowing costs can spill over into higher commercial interest rates, crowding out private business investment and leaving minimal fiscal space to fight future recessions.",
          markScheme: [
            {
              point: "Identifies rising debt-servicing interest payments consuming government tax revenues.",
              keywords: ["debt-servicing", "bond interest", "interest payments"],
            },
            {
              point: "Explains fiscal opportunity cost (less budget for healthcare, education, or infrastructure).",
              keywords: ["opportunity cost", "healthcare", "infrastructure", "tax revenue"],
            },
            {
              point: "Identifies credit-rating downgrades / higher sovereign borrowing yields (or reduced fiscal space / crowding out).",
              keywords: ["credit-rating", "downgrades", "yields", "crowding out", "fiscal space"],
            },
            {
              point: "Explains transmission to weaker private investment or impaired crisis-response capacity.",
              keywords: ["private business investment", "commercial interest", "future recessions", "default"],
            },
          ],
          hints: [
            "Think about annual interest payments (opportunity cost) and lender confidence (credit ratings, yields, crowding out).",
            "Develop each cost through a clear chain of cause and effect.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "macro-objectives-phillips-hl",
          marks: 10,
          markbands: MARKBANDS_10M,
          question:
            "[HL] Explain, referencing both an **AD/AS diagram** and a **Phillips Curve diagram**, why Monetarist / New Classical economists argue there is a short-run trade-off between inflation and unemployment, yet no long-run trade-off.",
          modelAnswer:
            "In the Monetarist / New Classical framework, macroeconomic equilibrium starts at full-employment output (Y_fe) on a vertical LRAS curve — corresponding on the Phillips Curve diagram to point A where downward-sloping SRPC₁ intersects the vertical Long-Run Phillips Curve (LRPC) at the Natural Rate of Unemployment (NRU), with stable inflation (e.g. 2%).\n\n**Short-Run Trade-Off (A → B):** Suppose the government pursues expansionary fiscal or monetary policy to push unemployment below the NRU. On the AD/AS diagram, AD shifts rightward from AD₁ to AD₂ along an upward-sloping SRAS₁ (since nominal wages are temporarily fixed by contracts). Real GDP expands above Y_fe into an inflationary gap while the average price level rises. Because firms perceive higher selling prices relative to temporarily unchanged money wages, profit margins widen and firms hire extra workers, lowering unemployment below the NRU. On the Phillips Curve diagram, this corresponds to an **upward-left movement along SRPC₁** from point A to point B: lower unemployment is achieved at the cost of higher inflation (e.g. 5%).\n\n**Expectations Adjustment & Collapse of Long-Run Trade-Off (B → C):** Once workers observe that 5% inflation has eroded the real purchasing power of their pay, they revise their **inflation expectations** upward and demand higher nominal wages when contracts renew. On the AD/AS diagram, higher nominal wage costs shift **SRAS leftward** from SRAS₁ to SRAS₂, pushing Real GDP back down to Y_fe at a still higher price level. On the Phillips Curve diagram, higher expected inflation shifts the entire **SRPC outward from SRPC₁ to SRPC₂**. Equilibrium moves horizontally from B to point C on the vertical **LRPC**: unemployment returns fully to the **NRU**, leaving no permanent employment gain — only permanently higher inflation (5%).\n\nTherefore, Monetarists conclude there is **no long-run trade-off** along vertical LRPC; sustainably lowering unemployment requires supply-side policies that reduce structural and frictional unemployment, shifting both LRAS right and LRPC left.",
          markScheme: [
            {
              point: "Defines initial long-run equilibrium at vertical LRAS (Y_fe) matched to vertical LRPC at NRU (point A).",
              keywords: ["vertical lras", "nru", "point a", "full-employment"],
            },
            {
              point: "Shows expansionary AD shifting rightward along upward-sloping SRAS₁ into an inflationary gap.",
              keywords: ["ad shifts rightward", "inflationary gap", "sras"],
            },
            {
              point: "Explains short-run money-wage stickiness widening profit margins so firms hire more workers.",
              keywords: ["temporarily fixed", "profit margins", "hire"],
            },
            {
              point: "Maps short-run outcome accurately to an upward-left movement along SRPC₁ (A → B: lower U, higher inflation).",
              keywords: ["movement along srpc", "point b", "lower unemployment"],
            },
            {
              point: "Explains real-wage erosion causing workers to revise inflation expectations upward.",
              keywords: ["eroded", "inflation expectations", "purchasing power"],
            },
            {
              point: "Shows higher nominal wage demands shifting SRAS leftward (SRAS₁ → SRAS₂) back to Y_fe.",
              keywords: ["nominal wages", "sras leftward", "wage costs"],
            },
            {
              point: "Maps expectations adjustment onto an outward/rightward shift of SRPC (SRPC₁ → SRPC₂).",
              keywords: ["srpc outward", "srpc₂", "entire"],
            },
            {
              point: "Identifies final long-run equilibrium (point C) on vertical LRPC: unemployment back at NRU, permanently higher inflation.",
              keywords: ["point c", "permanently higher inflation", "vertical lrpc"],
            },
            {
              point: "Explicitly links AD/AS and Phillips Curve mechanics step-by-step with precise IB terminology.",
              keywords: ["corresponds", "equilibrium", "monetarist"],
            },
            {
              point: "Concludes that lowering NRU permanently requires supply-side policies shifting LRPC leftward.",
              keywords: ["supply-side", "lrpc left", "structural"],
            },
          ],
          hints: [
            "Walk cleanly through the 3-point story A → B → C on BOTH diagrams in parallel!",
            "A → B: AD shifts right along SRAS₁ ↔ slide up-left along SRPC₁ (short-run trade-off).",
            "B → C: Higher inflation expectations raise wage claims → SRAS shifts left & SRPC shifts right → back to Y_fe / NRU at permanently higher inflation.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "inequality-lorenz-taxation",
          question:
            "[HL] A worker receives a promotion raising annual taxable income from **$45,000** to **$55,000**, while total income tax paid increases from **$6,200** to **$8,700**. Calculate the worker's **Marginal Tax Rate (MTR)** (%) on this additional income.",
          answer: { type: "number", value: 25, display: "25%" },
          traps: [
            {
              spec: { type: "number", value: 15.82, tolerance: 0.05 },
              feedback: "15.82% is the new *Average* Tax Rate ($8,700 ÷ $55,000). Marginal Tax Rate uses ΔTax ÷ ΔIncome!",
            },
          ],
          solution: [
            "ΔTax Paid = $8,700 − $6,200 = $2,500.",
            "ΔIncome = $55,000 − $45,000 = $10,000.",
            "MTR = {{(2500 / 10000) * 100}} = **25%**.",
          ],
          hints: [
            "Use MTR = (ΔTax Paid ÷ ΔIncome) × 100.",
            "Find the increase in tax ($2,500) divided by the increase in income ($10,000).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "inequality-lorenz-taxation",
          question:
            "An economy's five equal population quintiles (from poorest 20% to richest 20%) receive **6%, 12%, 18%, 24%, and 40%** of total national income. Using the piecewise-linear Lorenz curve connecting the five quintile points, calculate the **Gini coefficient** (to 2 decimal places).",
          answer: { type: "number", value: 0.32, tolerance: 0.01, display: "0.32" },
          traps: [
            {
              spec: { type: "number", value: 0.68, tolerance: 0.01 },
              feedback: "0.68 is 2 × Area B (or B ÷ 0.50). Subtract Area B from 0.50 to get Area A, then divide by 0.50!",
            },
            {
              spec: { type: "number", value: 0.16, tolerance: 0.01 },
              feedback: "0.16 is Area A — remember Gini = Area A ÷ 0.50 = 2 × Area A!",
            },
          ],
          solution: [
            "Cumulative income shares at 20%, 40%, 60%, 80%, 100% population are: 0.06, 0.18, 0.36, 0.60, and 1.00.",
            "Compute Area B under the 5 trapezoids (each width 0.2): B = 0.1 × [0 + 2(0.06 + 0.18 + 0.36 + 0.60) + 1.00] = 0.1 × [2(1.20) + 1.00] = 0.34.",
            "Area A = 0.50 − Area B = 0.50 − 0.34 = 0.16.",
            "Gini = {{0.16 / 0.50}} = **0.32**.",
          ],
          hints: [
            "First find cumulative income shares: 6%, 18%, 36%, 60%, 100%.",
            "Use the trapezoidal area formula for Area B across the 5 intervals of width 0.2, then Gini = (0.50 − B) ÷ 0.50.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "adas-models-equilibria",
          marks: 10,
          markbands: MARKBANDS_10M,
          question:
            "Compare and contrast the **Monetarist / New Classical** and **Keynesian** Aggregate Supply models in explaining how an economy responds to a severe fall in Aggregate Demand.",
          modelAnswer:
            "**Similarities:** Both models plot Average Price Level against Real GDP, agree that a severe negative demand shock (AD₁ → AD₂) reduces short-run output below full-employment capacity (Y_fe) and triggers cyclical unemployment, and agree that long-run potential output (Y_fe) is physically bounded by the quantity and quality of factors of production (vertical limit at full employment).\n\n**Key Contrast 1 — Curve Shape & Wage Flexibility:** Monetarist / New Classical economists draw an upward-sloping SRAS alongside a vertical LRAS at Y_fe, assuming wages and prices are flexible downwards as well as upwards. Keynesians draw a single three-section AS curve (horizontal spare-capacity section, curved bottleneck section, and vertical Y_fe limit) because nominal wages are **sticky downwards** due to employment contracts, trade unions, minimum wages, and morale/efficiency-wage resistance.\n\n**Key Contrast 2 — Self-Correction vs Persistent Deflationary Gap:** Following a sharp AD drop, the Monetarist model predicts a temporary deflationary gap that **self-corrects** automatically: unemployed workers accept lower nominal wages, cutting firms' unit costs and shifting SRAS rightward until Real GDP returns to vertical LRAS (Y_fe) at a permanently lower price level. In contrast, the Keynesian model predicts that downward wage rigidity prevents automatic recovery — real output plunges across the horizontal zone with little drop in the price level, trapping the economy in a **persistent recessionary equilibrium** indefinitely.\n\n**Key Contrast 3 — Policy Implications:** Monetarists argue against discretionary demand-side stimulus (warning it risks future inflation once self-correction occurs) and favour market-based supply-side reforms to make labour markets more flexible and shift LRAS right. Keynesians insist that active **expansionary fiscal and monetary policy** is vital to shift AD back rightward, restoring full employment quickly with minimal initial inflation while idle capacity remains.",
          markScheme: [
            {
              point: "Identifies shared macroeconomic framework: PL vs Real GDP axes, short-run AD drop causing cyclical unemployment below Y_fe.",
              keywords: ["both models", "cyclical unemployment", "bounded"],
            },
            {
              point: "Notes shared view of full-employment physical capacity limit determined by factor quantity/quality.",
              keywords: ["quantity and quality", "potential output", "vertical limit"],
            },
            {
              point: "Contrasts AS shapes accurately: Monetarist upward SRAS + vertical LRAS vs Keynesian three-section AS.",
              keywords: ["three-section", "upward-sloping sras", "horizontal"],
            },
            {
              point: "Explains Monetarist assumption of flexible downward wages and input prices.",
              keywords: ["flexible downwards", "flexible"],
            },
            {
              point: "Explains Keynesian downward wage stickiness (contracts, unions, minimum wages, morale).",
              keywords: ["sticky downwards", "contracts", "minimum wages", "unions"],
            },
            {
              point: "Traces Monetarist self-correction: lower nominal wages reduce costs, shifting SRAS right back to Y_fe at lower PL.",
              keywords: ["self-corrects", "sras rightward", "permanently lower price"],
            },
            {
              point: "Traces Keynesian persistent deflationary gap: output falls steeply with little price fall and no automatic recovery.",
              keywords: ["persistent recessionary", "indefinitely", "rigidity"],
            },
            {
              point: "Explains Monetarist policy conclusion: caution against AD stimulus; prefer market-based supply-side flexibility.",
              keywords: ["supply-side", "discretionary", "market-based"],
            },
            {
              point: "Explains Keynesian policy conclusion: active expansionary fiscal/monetary policy needed to shift AD right with low inflation.",
              keywords: ["expansionary fiscal", "active", "minimal initial inflation"],
            },
            {
              point: "Maintains explicit comparative structure ('both', 'in contrast', 'whereas') throughout.",
              keywords: ["in contrast", "similarities", "contrast"],
            },
          ],
          hints: [
            "Remember 'Compare and contrast' requires BOTH genuine similarities AND structured contrasts!",
            "Organize contrasts along three crisp axes: (1) AS curve shape & wage assumptions, (2) self-correction vs persistent slump, (3) demand-side vs supply-side policy prescriptions.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "inequality-lorenz-taxation",
          marks: 10,
          markbands: MARKBANDS_10M,
          question:
            "Explain how **progressive direct taxation**, **transfer payments**, and **public spending on human capital** can narrow income inequality and reduce poverty.",
          modelAnswer:
            "Governments narrow post-tax income inequality (shifting the Lorenz curve inward toward the 45-degree line of perfect equality and lowering the Gini coefficient) and alleviate both absolute and relative poverty through three complementary fiscal channels.\n\n**1. Progressive Direct Taxation:** In a progressive personal income tax system, marginal tax brackets rise with earnings so that the Average Tax Rate (ATR) increases for higher-income earners (MTR > ATR). Because high-income quintiles contribute a larger proportion of their income in tax than lower-income quintiles, the gap between top and bottom **disposable (post-tax) incomes** narrows directly, while generating public revenue to finance redistribution.\n\n**2. Transfer Payments:** Governments channel tax revenue directly to vulnerable groups via unemployment benefits, state pensions, disability allowances, and child tax credits without requiring current output in exchange. Means-tested transfers raise the income floor of the poorest quintile immediately — lifting households out of **absolute poverty** (basic survival needs) and closing the distance toward national median income (**relative poverty**). Higher post-transfer disposable income also bolsters aggregate consumption since low-income households have a higher marginal propensity to consume.\n\n**3. Public Spending on Human Capital (Merit Goods):** Subsidizing or providing free universal healthcare, quality primary/secondary schooling, early childhood nutrition, and vocational retraining tackles the **root structural causes** of inequality. By raising the skills, health, and employability of children from low-income families, human-capital spending promotes **equality of opportunity**, boosts intergenerational social mobility, lifts future market wages for lower quintiles, and simultaneously shifts **LRAS rightward**, expanding long-run economic growth.",
          markScheme: [
            {
              point: "Links redistribution policies explicitly to shifting the Lorenz curve inward and lowering the Gini coefficient.",
              keywords: ["lorenz curve inward", "gini coefficient", "45-degree"],
            },
            {
              point: "Defines progressive direct taxation accurately (ATR rises with income / MTR > ATR across rising brackets).",
              keywords: ["average tax rate", "mtr > atr", "brackets"],
            },
            {
              point: "Explains direct compression of post-tax disposable income gap plus fiscal revenue generation.",
              keywords: ["disposable", "proportion", "revenue"],
            },
            {
              point: "Defines transfer payments accurately (welfare/pensions/allowances paid without current output in exchange).",
              keywords: ["unemployment benefits", "pensions", "without requiring"],
            },
            {
              point: "Explains immediate lifting of bottom-quintile income floor out of absolute and relative poverty.",
              keywords: ["absolute poverty", "relative poverty", "income floor"],
            },
            {
              point: "Notes demand-side consumption boost from low-income households' higher MPC.",
              keywords: ["marginal propensity to consume", "consumption"],
            },
            {
              point: "Identifies concrete human-capital / merit-good spending (free education, healthcare, vocational retraining).",
              keywords: ["healthcare", "schooling", "retraining", "merit goods"],
            },
            {
              point: "Explains mechanism: raises skills/employability of low-income groups to tackle root causes of inequality.",
              keywords: ["root", "employability", "skills"],
            },
            {
              point: "Links human capital to equality of opportunity and intergenerational social mobility.",
              keywords: ["equality of opportunity", "social mobility"],
            },
            {
              point: "Identifies dual macroeconomic benefit: shifts LRAS rightward for higher long-run potential growth.",
              keywords: ["lras rightward", "potential growth", "long-run"],
            },
          ],
          hints: [
            "Anchor your explanation in the Lorenz curve / Gini framework and distinguish direct post-tax effects from pre-tax market earning power.",
            "Give equal analytical weight to all three pillars: progressive taxes, transfer payments, and human-capital investment.",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "inequality-lorenz-taxation",
          marks: 15,
          markbands: MARKBANDS_15M,
          question:
            "Using **real-world examples**, evaluate the view that increasing **progressive income taxes** and introducing a **Universal Basic Income (UBI)** is the most effective way to achieve greater equity in income distribution.",
          modelAnswer:
            "**Equity** is a normative concept of fairness in income and opportunity, distinct from pure **equality** (identical outcomes). Raising top marginal progressive income tax rates and funding a Universal Basic Income (UBI — an unconditional regular cash grant paid to every resident) offers a direct, powerful tool to pull a country's **Lorenz curve inward** and lower its post-tax **Gini coefficient**.\n\n**Case For Progressive Taxes & UBI:** First, steeper progressive brackets ensure that top earners pay a higher Average Tax Rate (MTR > ATR), directly narrowing disposable-income gaps while offsetting regressive indirect taxes like VAT/GST. For example, **Denmark** and **Norway** combine top personal income tax rates above 45–55% with broad social protection to maintain among the world's lowest post-tax Gini coefficients (~0.26–0.28). Second, unlike means-tested welfare, a **UBI** eliminates bureaucratic eligibility screening, removes social stigma, and abolishes the **poverty trap** (where low-paid workers face steep benefit withdrawals upon accepting extra hours). In **Finland's 2017–2018 basic-income trial**, 2,000 unemployed recipients received €560/month unconditionally; evaluators found significant gains in mental health, life satisfaction, and slightly higher employment days than the control group. Third, giving guaranteed cash to lower-income households (who have a high MPC) cushions recessions and strengthens workers' bargaining power against exploitative wages.\n\n**Limitations & Trade-Offs:** However, relying primarily on higher progressive taxes and UBI carries substantial efficiency and fiscal risks. First, UBI is extraordinarily expensive because payments flow to millionaires as well as the poor — financing a meaningful UBI without crippling **budget deficits** or rising **debt-to-GDP ratios** requires steep tax hikes across middle earners, not just billionaires. Second, excessively high top marginal tax rates risk **disincentive effects** on entrepreneurship, work hours, and skilled-labour retention (**brain drain** and tax avoidance), as seen when France's temporary 75% 'supertax' (2013–2014) raised limited net revenue and triggered capital and high-earner outflows before being repealed. Third, cash grants alone do not fix structural barriers such as underfunded schools, inadequate clinics, or regional skills mismatches; if aggregate supply is constrained, universal cash injections can even stoke **demand-pull inflation**, eroding the real value of the UBI.\n\n**Alternative & Complementary Policies (Real-World Synthesis):** Consequently, many economists argue that **targeted transfers** paired with **human-capital investment** outperform UBI alone. For instance, **Singapore** pairs a modest progressive income tax with targeted **GST Vouchers** (offsetting GST regressivity specifically for lower-income households) and **SkillsFuture** lifelong-learning credits, lifting earning capacity and LRAS without UBI's massive fiscal burden. Similarly, expanding universal early-childhood education and preventative healthcare promotes long-term **equality of opportunity** rather than merely redistributing market outcomes after the fact.\n\n**Judgement:** Increasing progressive taxation and trialling targeted basic-income floors can rapidly alleviate poverty and shrink post-tax Gini, especially in high-inequality economies with strong tax administration. Yet UBI + steep tax hikes is rarely the *most* effective standalone strategy: the optimal policy mix balances moderate progressive taxation with **targeted transfers** for immediate relief and sustained **human-capital spending** to narrow pre-tax inequality while preserving long-run productivity and fiscal sustainability.",
          markScheme: [
            {
              point: "Distinguishes equity (normative fairness) from equality and links policy to shifting Lorenz inward / reducing Gini.",
              keywords: ["normative", "lorenz curve inward", "gini"],
            },
            {
              point: "Explains progressive tax mechanism accurately (rising ATR, MTR > ATR compressing post-tax disposable income).",
              keywords: ["average tax rate", "mtr > atr", "disposable"],
            },
            {
              point: "Integrates concrete real-world example of progressive taxation (e.g. Denmark/Norway Gini ~0.26–0.28).",
              keywords: ["denmark", "norway", "0.26"],
            },
            {
              point: "Explains UBI mechanics accurately: unconditional payment removing screening costs, stigma, and the poverty trap.",
              keywords: ["unconditional", "poverty trap", "screening", "stigma"],
            },
            {
              point: "Integrates real-world UBI evidence (e.g. Finland's 2017–2018 trial showing well-being & modest employment gains).",
              keywords: ["finland", "trial", "well-being", "mental health"],
            },
            {
              point: "Notes aggregate demand / bargaining-power benefit via high MPC of lower-income recipients.",
              keywords: ["mpc", "bargaining power", "cushions"],
            },
            {
              point: "Evaluates massive fiscal cost of universal payments flowing to wealthy households (budget deficit / debt-to-GDP strain).",
              keywords: ["extraordinarily expensive", "millionaires", "debt-to-gdp", "budget deficits"],
            },
            {
              point: "Evaluates supply-side disincentives of steep top marginal rates: brain drain, tax avoidance, reduced entrepreneurship.",
              keywords: ["brain drain", "tax avoidance", "disincentive", "entrepreneurship"],
            },
            {
              point: "Integrates concrete real-world example of high-tax outflow/limit (e.g. France's 75% supertax).",
              keywords: ["france", "75%", "supertax", "repealed"],
            },
            {
              point: "Evaluates inflationary risk and failure of pure cash transfers to solve structural school/clinic/skill deficits.",
              keywords: ["demand-pull inflation", "structural barriers", "eroding"],
            },
            {
              point: "Evaluates alternative policy: means-tested transfers targeting poorest households at lower fiscal cost.",
              keywords: ["targeted transfers", "gst vouchers", "offsetting"],
            },
            {
              point: "Integrates real-world alternative example (e.g. Singapore GST Vouchers + SkillsFuture human-capital credits).",
              keywords: ["singapore", "skillsfuture"],
            },
            {
              point: "Contrasts short-run outcome redistribution (tax/UBI) with long-run equality of opportunity & LRAS growth (human capital).",
              keywords: ["equality of opportunity", "lras", "pre-tax"],
            },
            {
              point: "Weighs context dependence (administrative tax capacity, baseline inequality level).",
              keywords: ["tax administration", "context", "standalone"],
            },
            {
              point: "Delivers a nuanced, reasoned overall judgement favouring a balanced policy mix over UBI + steep tax hikes alone.",
              keywords: ["policy mix", "judgement", "fiscal sustainability"],
            },
          ],
          hints: [
            "For an IB Paper 1 Part (b) 15-mark essay, weave at least 3 concrete real-world examples (e.g. Denmark/Norway, Finland's UBI trial, France's 75% tax, Singapore's GST Vouchers/SkillsFuture) directly into your arguments!",
            "Evaluate both sides thoroughly: poverty-trap removal & Lorenz shift vs massive fiscal cost, brain drain/tax avoidance, and inflation risk.",
            "Conclude by contrasting cash redistribution (short-run outcome equity) against human-capital spending (long-run opportunity equity + LRAS).",
          ],
        },
        {
          id: "3a-macro-activity-objectives-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "measuring-macro-activity",
          marks: 15,
          markbands: MARKBANDS_15M,
          question:
            "Using **real-world examples**, discuss the view that **Real GDP per capita** is an adequate indicator of a country's economic well-being and living standards.",
          modelAnswer:
            "**Real GDP per capita** measures the inflation-adjusted monetary value of final goods and services produced within a country's borders per resident. Assessing whether it adequately captures living standards requires weighing its practical strengths against major conceptual omissions.\n\n**Strengths of Real GDP per Capita:** First, by removing price inflation (via the GDP deflator) and adjusting for population size, Real GDP per capita tracks genuine average material command over goods and services over time. Second, it is calculated using standardized UN System of National Accounts rules, making quarterly tracking and international trend analysis timely and objective. Third, sustained growth in Real GDP per capita correlates strongly with lower absolute poverty, higher government tax revenues for public healthcare and sanitation, and longer life expectancy — for example, **China's** decades of rapid Real GDP per capita expansion after 1978 lifted over 800 million citizens out of World Bank extreme poverty, while **South Korea's** transformation since the 1960s funded universal healthcare and top-ranked schooling.\n\n**Major Limitations & Real-World Distortions:** Nevertheless, Real GDP per capita alone fails to capture crucial pillars of human well-being:\n1. **Border vs Resident Ownership (GDP vs GNI):** In economies hosting massive foreign multinationals, repatriated profits inflate GDP well above residents' actual incomes. In **Ireland (2015)**, multinational intellectual-property transfers caused headline Real GDP to surge over 25% in one year without a commensurate leap in Irish household prosperity, forcing statisticians to adopt Modified GNI (GNI*).\n2. **Cost-of-Living Differences (PPP):** Without Purchasing Power Parity adjustment, market exchange rates dramatically understate real consumption in lower-price countries such as **India** or **Vietnam**, where non-tradable services cost a fraction of Swiss or US prices.\n3. **Income Inequality:** As an arithmetic mean, Real GDP per capita hides extreme skew; the **United States** has a substantially higher Real GDP per capita than **Finland** or **Denmark**, yet exhibits higher relative poverty, higher Gini inequality (~0.41 vs ~0.27), and lower average life expectancy.\n4. **Environmental Externalities & Sustainability:** Conventional GDP omits natural-capital depletion and counts defensive disaster clean-up as positive output — rapid industrial growth in parts of **China** and **India** generated severe urban air-pollution health costs unreflected in GDP (motivating **Green GDP** adjustments).\n5. **Non-Marketed Output, Informal Markets & Subjective Well-Being:** Unpaid caregiving, leisure hours, informal street economies in developing nations, mental health, and civic freedom are completely absent.\n\n**Alternative Frameworks in Practice:** Recognizing these blind spots, governments increasingly pair GDP with multidimensional indices: **Bhutan** pioneered Gross National Happiness (GNH), **New Zealand** instituted Wellbeing Budgets targeting child poverty and mental health, and the **OECD Better Life Index** tracks 11 customizable well-being domains.\n\n**Conclusion:** Real GDP per capita is a *necessary* baseline measure of material capacity and fiscal strength, especially in low-income nations where basic material scarcity dominates welfare. However, it is clearly **inadequate on its own**; an accurate evaluation of living standards requires **Real GNI per capita at PPP** supplemented by distributional metrics (Gini/MPI), environmental sustainability (Green GDP), and composite well-being indicators like the OECD Better Life Index.",
          markScheme: [
            {
              point: "Accurately defines Real GDP per capita (inflation-adjusted domestic final output divided by population).",
              keywords: ["inflation-adjusted", "borders", "per resident", "deflator"],
            },
            {
              point: "Explains methodological strength: standardized international accounting, objective, timely quarterly tracking.",
              keywords: ["standardized", "objective", "timely"],
            },
            {
              point: "Explains welfare correlation: funds tax revenues, healthcare, schooling, and reduces absolute poverty.",
              keywords: ["tax revenues", "life expectancy", "extreme poverty"],
            },
            {
              point: "Integrates real-world growth success example (e.g. China lifting >800m out of poverty or South Korea).",
              keywords: ["china", "800 million", "south korea"],
            },
            {
              point: "Critiques border vs ownership gap (GDP vs GNI) with real-world example (e.g. Ireland 2015 25% surge / GNI*).",
              keywords: ["ireland", "gni*", "repatriated", "multinational"],
            },
            {
              point: "Critiques absence of PPP adjustment for local non-tradable service price differences (e.g. India/Vietnam).",
              keywords: ["ppp", "non-tradable", "india", "vietnam"],
            },
            {
              point: "Critiques distribution blind spot (mean hides inequality) with real-world comparison (e.g. US vs Denmark/Finland).",
              keywords: ["arithmetic mean", "united states", "finland", "denmark"],
            },
            {
              point: "Critiques environmental externalities & defensive expenditure paradox (linking to Green GDP).",
              keywords: ["air-pollution", "depletion", "clean-up", "green gdp"],
            },
            {
              point: "Critiques omission of unpaid caregiving, leisure, informal economy, and subjective mental health.",
              keywords: ["unpaid", "leisure", "informal", "mental health"],
            },
            {
              point: "Introduces real-world alternative framework 1 (e.g. Bhutan GNH or New Zealand Wellbeing Budgets).",
              keywords: ["bhutan", "new zealand", "wellbeing"],
            },
            {
              point: "Introduces alternative framework 2 (OECD Better Life Index across 11 dimensions).",
              keywords: ["oecd better life", "11", "multidimensional"],
            },
            {
              point: "Evaluates context-dependence: material GDP matters more at low income levels than in already affluent nations.",
              keywords: ["low-income", "material scarcity", "necessary"],
            },
            {
              point: "Evaluates trade-off with composite indices (subjective weighting / harder comparability vs GDP's precision).",
              keywords: ["customizable", "blind spots", "supplemented"],
            },
            {
              point: "Recommends improved composite dashboard (Real GNI per capita PPP + Gini/MPI + Green GDP).",
              keywords: ["real gni per capita at ppp", "mpi", "distributional"],
            },
            {
              point: "Reaches a balanced, justified overall judgement: useful foundation, inadequate alone.",
              keywords: ["inadequate on its own", "conclusion", "necessary"],
            },
          ],
          hints: [
            "Start by acknowledging genuine strengths of Real GDP per capita (China, South Korea) before systematically critiquing its 5 core blind spots.",
            "Include specific country cases: Ireland (GDP vs GNI*), US vs Nordic countries (inequality), India/China (PPP & pollution), Bhutan/New Zealand (Wellbeing alternatives).",
            "Finish with a nuanced judgement: vital baseline for low-income nations, yet insufficient without PPP, GNI, Gini, and sustainability measures.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 Qs — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "3a-macro-activity-objectives-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "measuring-macro-activity",
      question:
        "In Year 1, Country Q records Nominal GDP of **$550 billion**, a GDP deflator of **110**, and a population of **25 million**. In Year 2, Nominal GDP rises to **$686.4 billion**, the GDP deflator increases to **120**, and population grows to **26 million**. Calculate the exact percentage growth rate of **Real GDP per capita** (%) from Year 1 to Year 2.",
      answer: { type: "number", value: 10, display: "10%" },
      traps: [
        {
          spec: { type: "number", value: 14.4, tolerance: 0.1 },
          feedback: "14.4% is total Real GDP growth ($500bn → $572bn) — you still need to adjust for population growth (25m → 26m)!",
        },
        {
          spec: { type: "number", value: 20, tolerance: 0.1 },
          feedback: "20% is *Nominal* GDP per capita growth ($22,000 → $26,400) — deflate both years first!",
        },
      ],
      solution: [
        "Year 1 Real GDP = {{(550 / 110) * 100}} = $500 billion → Real GDP per capita = {{500000 / 25}} = $20,000.",
        "Year 2 Real GDP = {{(686.4 / 120) * 100}} = $572 billion → Real GDP per capita = {{572000 / 26}} = $22,000.",
        "Real GDP per capita growth rate = {{((22000 - 20000) / 20000) * 100}} = **10%**.",
      ],
      hints: [
        "Step 1: Deflate both years' Nominal GDP using (Nominal ÷ Deflator) × 100.",
        "Step 2: Divide each year's Real GDP by its respective population (25m and 26m).",
        "Step 3: Compute the percentage change from Year 1 Real GDP per capita ($20,000) to Year 2 ($22,000).",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "macro-objectives-phillips-hl",
      question:
        "Country M begins a recession with **18.4 million** employed workers and **1.6 million** unemployed workers (an 8.0% unemployment rate). During the quarter, **0.4 million** employed workers are laid off and begin actively seeking jobs, while **0.8 million** previously unemployed workers become discouraged and stop searching altogether. Calculate Country M's **new official unemployment rate** (%), exact to **2 decimal places**.",
      answer: { type: "number", value: 6.25, tolerance: 0.02, display: "6.25%" },
      traps: [
        {
          spec: { type: "number", value: 6, tolerance: 0.02 },
          feedback: "Remember that the 0.8 million discouraged workers also *leave* the Labour Force denominator (20.0m → 19.2m)!",
        },
        {
          spec: { type: "number", value: 10, tolerance: 0.02 },
          feedback: "You counted the 0.8 million discouraged workers as still officially unemployed — under ILO rules, they exit the labour force.",
        },
      ],
      solution: [
        "New Employed = 18.4 − 0.4 = 18.0 million.",
        "New Unemployed = 1.6 + 0.4 (new layoffs) − 0.8 (discouraged exits) = 1.2 million.",
        "New Labour Force = 18.0 + 1.2 = 19.2 million.",
        "New Official Unemployment Rate = {{(1.2 / 19.2) * 100}} = **6.25%** (notice how the headline rate fell sharply even though 400,000 jobs were lost!).",
      ],
      hints: [
        "Update Employed first: 18.4m loses 0.4m laid-off workers.",
        "Update Unemployed: starts at 1.6m, gains 0.4m new layoffs, and loses 0.8m discouraged workers.",
        "Recompute the new Labour Force (Employed + Unemployed) before dividing!",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "inequality-lorenz-taxation",
      question:
        "[HL] Country Z levies progressive personal income tax (**0%** on $0–$20,000; **15%** on $20,001–$60,000; **30%** above $60,000) AND a flat **10% GST** on consumer expenditure. A household earns **$80,000** and spends **$50,000** (pre-tax) on GST-taxable goods. Calculate the household's **combined (direct + indirect) average tax rate** (%), exact to **2 decimal places**.",
      answer: { type: "number", value: 21.25, tolerance: 0.02, display: "21.25%" },
      traps: [
        {
          spec: { type: "number", value: 15, tolerance: 0.02 },
          feedback: "15% is the direct income ATR alone ($12,000 ÷ $80,000) — don't forget to add the $5,000 indirect GST paid!",
        },
        {
          spec: { type: "number", value: 25, tolerance: 0.02 },
          feedback: "You added 15% + 10% directly! The 10% GST applies only to $50,000 spending ($5,000 = 6.25% of income), not all $80,000!",
        },
      ],
      solution: [
        "Direct income tax: ($20,000 × 0%) + ($40,000 × 15%) + ($20,000 × 30%) = $0 + $6,000 + $6,000 = $12,000.",
        "Indirect GST paid: $50,000 × 10% = $5,000.",
        "Total taxes paid = $12,000 + $5,000 = $17,000.",
        "Combined Average Tax Rate = {{(17000 / 80000) * 100}} = **21.25%**.",
      ],
      hints: [
        "Compute direct income tax slice-by-slice across the three brackets ($12,000).",
        "Compute dollar GST paid on $50,000 pre-tax consumption ($5,000).",
        "Sum direct + indirect tax ($17,000) and divide by total income ($80,000) × 100.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "macro-objectives-phillips-hl",
      question:
        "A country's CPI basket has three fixed weights: **Food (25%)**, **Housing (50%)**, and **Services (25%)**. In Year 1, category indices are Food = 112, Housing = 120, Services = 128. In Year 2, they rise to Food = 120, Housing = 126, Services = 132. Calculate the exact annual **CPI inflation rate** (%) from Year 1 to Year 2.",
      answer: { type: "number", value: 5, display: "5%" },
      traps: [
        {
          spec: { type: "number", value: 6 },
          feedback: "CPI rose by 6 index points (120 → 126), NOT 6%! Divide the 6-point gain by Year 1's CPI (120).",
        },
      ],
      solution: [
        "Weighted CPI (Year 1) = (0.25 × 112) + (0.50 × 120) + (0.25 × 128) = 28 + 60 + 32 = 120.0.",
        "Weighted CPI (Year 2) = (0.25 × 120) + (0.50 × 126) + (0.25 × 132) = 30 + 63 + 33 = 126.0.",
        "Inflation rate = {{((126 - 120) / 120) * 100}} = {{(6 / 120) * 100}} = **5%**.",
      ],
      hints: [
        "Compute the weighted CPI separately for Year 1 (120.0) and Year 2 (126.0).",
        "Apply ((CPI₂ − CPI₁) ÷ CPI₁) × 100 — remember to divide by 120, not 100!",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "inequality-lorenz-taxation",
      question:
        "[HL] Country W taxes income using three progressive brackets: **0%** on $0–$10,000; **20%** on $10,001–$40,000; and **40%** on income above $40,000. A taxpayer pays exactly **$14,000** in total income tax for the year. Determine the taxpayer's **annual gross income** (in $).",
      answer: { type: "number", value: 60000, display: "$60,000" },
      traps: [
        {
          spec: { type: "number", value: 35000 },
          feedback: "You divided $14,000 directly by 0.40! Account for the lower 0% and 20% brackets first.",
        },
        {
          spec: { type: "number", value: 70000 },
          feedback: "You divided $14,000 by 0.20 — check the maximum tax possible inside the 20% bracket ($6,000).",
        },
      ],
      solution: [
        "Maximum tax in Bracket 1 ($0–$10,000 at 0%) = $0.",
        "Maximum tax in Bracket 2 ($10,001–$40,000, width $30,000 at 20%) = $6,000.",
        "Remaining tax paid inside Bracket 3 (40% rate) = $14,000 − $6,000 = $8,000.",
        "Income inside Bracket 3 = {{8000 / 0.40}} = $20,000.",
        "Total gross income = $40,000 + $20,000 = **$60,000**.",
      ],
      hints: [
        "Work upward through the brackets: how much tax is paid on the first $40,000 of income?",
        "Subtract that $6,000 from $14,000 to find how much tax came from the 40% bracket ($8,000).",
        "Divide $8,000 by 0.40 to find the income above $40,000, then add $40,000.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "macro-objectives-phillips-hl",
      marks: 8,
      markbands: MARKBANDS_8M,
      question:
        "[HL] Evaluate the effectiveness of using **expansionary Aggregate Demand policy** to eliminate remaining unemployment when an economy is already operating at its **Natural Rate of Unemployment (NRU)**.",
      modelAnswer:
        "When an economy already operates at the NRU (at vertical LRAS / Y_fe), cyclical unemployment is zero; remaining joblessness consists exclusively of **frictional, seasonal, and structural unemployment**.\n\n**Short-Run Gains:** Under the Monetarist expectations-augmented Phillips Curve, expansionary fiscal or monetary policy shifts AD rightward along SRAS₁, creating a short-run inflationary gap and moving the economy upward-left along SRPC₁. Because nominal wages adjust with a contractual lag, temporarily wider profit margins encourage firms to hire workers beyond Y_fe, lowering unemployment briefly below the NRU — which can pull marginalized workers into employment.\n\n**Long-Run Failure & Costs:** However, once higher inflation erodes real wages, workers revise inflation expectations upward and bargain for higher nominal wages. Rising wage costs shift SRAS leftward back to Y_fe and shift SRPC outward to SRPC₂, driving unemployment straight back to the **vertical LRPC at the NRU** with permanently higher inflation (and potential wage–price spirals or elevated debt-to-GDP ratios if deficit-financed).\n\n**Synthesis & Nuance:** An important Keynesian counterargument is **reverse hysteresis**: if a tight labour market convinces employers to train previously overlooked workers and invest in productivity-enhancing equipment, the boom could modestly shrink structural unemployment (shifting LRPC slightly left). Yet relying on AD stimulus at NRU is risky and blunt; targeted **supply-side policies** (vocational retraining, job-matching portals, childcare support) attack structural and frictional frictions directly without destabilizing inflation expectations. Overall, expansionary AD policy at the NRU is largely **ineffective in the long run** and inferior to supply-side reform.",
      markScheme: [
        {
          point: "Recognizes that at NRU, cyclical unemployment is zero and remaining joblessness is frictional/seasonal/structural.",
          keywords: ["cyclical unemployment is zero", "frictional", "structural"],
        },
        {
          point: "Explains short-run mechanism: AD shifts right along SRAS₁ / moves up-left along SRPC₁, temporarily lowering U below NRU.",
          keywords: ["srpc₁", "inflationary gap", "contractual lag", "briefly"],
        },
        {
          point: "Explains adaptive inflation expectations eroding real wages and driving higher nominal wage demands.",
          keywords: ["inflation expectations", "erodes real wages", "nominal wages"],
        },
        {
          point: "Traces long-run return to vertical LRPC at NRU via leftward SRAS and outward SRPC shift with permanently higher inflation.",
          keywords: ["vertical lrpc", "srpc₂", "permanently higher inflation"],
        },
        {
          point: "Notes additional macroeconomic costs (wage–price spiral, rising debt-to-GDP, or central-bank tightening).",
          keywords: ["wage–price", "debt-to-GDP".toLowerCase(), "deficit-financed"],
        },
        {
          point: "Evaluates counterargument / nuance (reverse hysteresis: tight labour markets training marginalized workers to lower NRU slightly).",
          keywords: ["hysteresis", "marginalized", "train"],
        },
        {
          point: "Contrasts with superior alternative: targeted supply-side policies (retraining, job matching) shifting LRPC leftward directly.",
          keywords: ["supply-side", "retraining", "job-matching", "lrpc leftward"],
        },
        {
          point: "Reaches a clear, reasoned judgement: ineffective in the long run relative to targeted supply-side reform.",
          keywords: ["ineffective in the long run", "inferior", "overall"],
        },
      ],
      hints: [
        "First diagnose *which* types of unemployment remain at the NRU (frictional, seasonal, structural — NOT cyclical!).",
        "Trace the full short-run gain vs long-run expectations shift (AD/AS + SRPC/LRPC).",
        "Add genuine HL evaluation: reverse hysteresis nuance, fiscal/inflation costs, and comparison with supply-side reforms.",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Examine",
      guideRef: "macro-objectives-phillips-hl",
      marks: 10,
      markbands: MARKBANDS_10M,
      question:
        "Examine the macroeconomic **trade-offs and conflicts** governments face when trying to achieve sustained economic growth, low unemployment, low inflation, and a sustainable national debt simultaneously.",
      modelAnswer:
        "Macroeconomic objectives frequently conflict in the short run because demand-side policies pushing one target forward can push another off course, though conflicts can be eased in the long run through supply-side capacity expansion.\n\n**1. Growth & Low Unemployment vs Low Inflation:** Rapid demand-led economic growth shifts AD rightward, reducing cyclical unemployment and raising real incomes. However, as Real GDP approaches full-employment output (Y_fe) along the upward-sloping bottleneck section of Keynesian AS (or beyond Monetarist LRAS), labour shortages bid up wages and trigger **demand-pull inflation**. Conversely, tightening demand to tame inflation slows growth and increases cyclical unemployment.\n\n**2. Growth / Low Unemployment vs Sustainable National Debt:** During deep recessions, Keynesians advocate expansionary deficit-financed fiscal spending to close deflationary gaps and halt layoffs. While stabilizing jobs, borrowing widens the **budget deficit** and adds to the **national debt-to-GDP ratio**, raising long-term debt-servicing costs and risking higher sovereign bond yields. Yet premature fiscal austerity during a slump can backfire by shrinking Nominal GDP faster than debt falls, actually pushing the debt-to-GDP ratio higher!\n\n**3. Growth vs Equity & Environmental Sustainability:** Fast market-driven growth can widen **income inequality** (pushing the Lorenz curve outward if returns accrue mainly to skilled professionals and capital owners) and increase pollution and resource depletion, lowering **Green GDP**.\n\n**Resolving Conflicts in the Long Run:** Crucially, these trade-offs are sharpest when relying solely on demand-side adjustments. **Potential growth** via rightward shifts of **LRAS** (investment in renewable infrastructure, education, healthcare, and innovation) enables higher non-inflationary output, stronger tax bases that reduce debt-to-GDP organically, and lower structural unemployment simultaneously — though even supply-side reforms involve long time lags and upfront budget trade-offs.",
      markScheme: [
        {
          point: "Explains growth/low unemployment vs low inflation conflict via AD shifting into bottlenecks / past Y_fe.",
          keywords: ["bottleneck", "demand-pull inflation", "labour shortages"],
        },
        {
          point: "Notes symmetric policy conflict: disinflationary tightening raises cyclical unemployment.",
          keywords: ["tightening", "cyclical unemployment", "tame"],
        },
        {
          point: "Explains fiscal conflict: expansionary deficit spending fights recession but adds to national debt-to-GDP.",
          keywords: ["deficit-financed", "debt-to-GDP".toLowerCase(), "debt-servicing"],
        },
        {
          point: "Notes self-defeating austerity nuance: cutting spending in a slump can shrink GDP denominator and raise debt-to-GDP.",
          keywords: ["austerity", "backfire", "shrink"],
        },
        {
          point: "Identifies conflict between rapid growth and equitable income distribution (Lorenz outward / skill-capital skew).",
          keywords: ["lorenz", "inequality", "capital owners"],
        },
        {
          point: "Identifies conflict between rapid growth and environmental sustainability (pollution / Green GDP).",
          keywords: ["green gdp", "depletion", "pollution"],
        },
        {
          point: "Distinguishes short-run demand conflicts from long-run supply-side resolution.",
          keywords: ["short run", "long run", "demand-side"],
        },
        {
          point: "Explains how rightward LRAS shifts (education, innovation, green infrastructure) reconcile growth, jobs, and stable prices.",
          keywords: ["lras", "non-inflationary", "innovation"],
        },
        {
          point: "Explains organic debt-to-GDP improvement via stronger GDP growth and tax base.",
          keywords: ["tax base", "organically", "stronger"],
        },
        {
          point: "Acknowledges supply-side trade-offs (long time lags and upfront fiscal outlays).",
          keywords: ["time lags", "upfront"],
        },
      ],
      hints: [
        "Examine at least three clear conflicts: (1) growth/jobs vs inflation, (2) recession stimulus vs national debt-to-GDP, (3) growth vs equity/environment.",
        "Elevate your answer by contrasting short-run AD trade-offs with how long-run LRAS shifts can harmonize objectives!",
      ],
    },
    {
      id: "3a-macro-activity-objectives-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "adas-models-equilibria",
      marks: 15,
      markbands: MARKBANDS_15M,
      question:
        "Using **real-world examples**, to what extent does the **Keynesian** macroeconomic model provide a more convincing explanation of severe recessions and recoveries than the **Monetarist / New Classical** model?",
      modelAnswer:
        "Severe economic contractions expose the central divide in macroeconomic theory: whether market economies automatically heal through flexible wages and prices (**Monetarist / New Classical**) or require active Aggregate Demand intervention because wages are sticky downwards (**Keynesian**).\n\n**Strengths of the Keynesian Model in Deep Recessions:** In severe slumps, empirical evidence strongly supports Keynesian assumptions of **downward nominal wage rigidity** and persistent **spare capacity** along the horizontal section of the Keynesian AS curve. Workers fiercely resist nominal pay cuts due to contracts, minimum-wage floors, and morale, causing firms to lay off staff instead. Moreover, collapsing 'animal spirits' (business and consumer pessimism) can keep private investment depressed for years — as seen during the **1930s Great Depression**, **Japan's post-1990 deflationary stagnation**, and the **2008 Global Financial Crisis (GFC)**. Following the 2008 GFC and again during the **2020 COVID-19 shock**, massive fiscal stimulus packages (such as the US American Recovery and Reinvestment Act, US CARES/ARPA packages, UK furlough scheme, and Singapore's Unity/Resilience Budgets) prevented multi-year depressions and stabilized unemployment far faster than waiting for wages to fall — with very low inflation throughout 2009–2019 while spare capacity lingered.\n\n**Where the Monetarist / New Classical Model Proves Essential:** Nevertheless, the Keynesian framework shows major weaknesses once an economy approaches **full-employment capacity (Y_fe)** or faces **adverse supply shocks**. First, during the **1970s OPEC oil crises**, Keynesian demand stimulus failed to cure simultaneous rising inflation and unemployment (**stagflation**), vindicating Monetarist warnings about leftward SRAS shifts, rising **inflation expectations**, and vertical **LRAS**. Second, following the **2021–2022 post-COVID reopening**, continued ultra-expansionary fiscal and monetary policy collided with global supply-chain bottlenecks and tight labour markets in the **United States** and **United Kingdom**, pushing CPI inflation above 9–11% — mirroring the Monetarist prediction that excess AD beyond Y_fe fuels demand-pull inflation rather than sustainable real output gains. Third, Monetarists highlight genuine fiscal constraints: repeated deficit-financed Keynesian stimulus pushed public debt-to-GDP above 100% in several advanced economies, raising long-term debt-servicing burdens and risking **crowding out** when interest rates normalize.\n\n**Synthesis & Judgement:** Neither school holds a monopoly on macroeconomic truth; their explanatory power is **state-dependent**. During severe demand-deficient recessions with abundant idle capacity and near-zero interest rates (like 2008–2012 or 2020), the **Keynesian model is far more convincing**, explaining why markets do not self-correct swiftly and why fiscal stimulus restores jobs with minimal immediate inflation. Once spare capacity disappears or supply-side shocks dominate (as in the 1970s or 2022), **Monetarist / New Classical insights become indispensable**, reminding policymakers that sustained long-run prosperity ultimately depends on shifting vertical **LRAS** rightward while anchoring inflation expectations.",
      markScheme: [
        {
          point: "Frames core theoretical divide clearly: flexible self-correcting markets (Monetarist) vs sticky downward wages & persistent gaps (Keynesian).",
          keywords: ["sticky downwards", "self-correct", "divide"],
        },
        {
          point: "Explains Keynesian horizontal AS spare-capacity mechanism during deep slumps (high output gain, minimal inflation).",
          keywords: ["horizontal", "spare capacity", "minimal"],
        },
        {
          point: "Explains real-world causes of downward wage rigidity (contracts, minimum wages, morale) and 'animal spirits' pessimism.",
          keywords: ["animal spirits", "contracts", "morale", "pessimism"],
        },
        {
          point: "Integrates historical slump example (e.g. 1930s Great Depression or Japan's post-1990 deflationary stagnation).",
          keywords: ["great depression", "japan", "stagnation"],
        },
        {
          point: "Integrates 2008 GFC real-world fiscal stimulus evidence & low 2009–2019 inflation.",
          keywords: ["2008", "global financial crisis", "low inflation"],
        },
        {
          point: "Integrates 2020 COVID-19 fiscal support examples (e.g. US CARES/ARPA, UK furlough, Singapore Budgets).",
          keywords: ["2020", "covid", "furlough", "singapore", "cares"],
        },
        {
          point: "Identifies Keynesian weakness during adverse supply shocks & stagflation.",
          keywords: ["stagflation", "supply shocks", "sras"],
        },
        {
          point: "Integrates 1970s OPEC oil-crisis real-world example vindicating Monetarist vertical LRAS / expectations.",
          keywords: ["1970s", "opec", "inflation expectations", "lras"],
        },
        {
          point: "Integrates 2021–2022 post-COVID inflation surge (US/UK CPI > 9%) when AD stimulus hit capacity bottlenecks.",
          keywords: ["2021", "2022", "bottlenecks", "united states", "united kingdom"],
        },
        {
          point: "Explains Monetarist critique of excess AD beyond Y_fe causing demand-pull inflation without permanent output gain.",
          keywords: ["demand-pull inflation", "beyond y_fe", "permanent"],
        },
        {
          point: "Evaluates fiscal sustainability trade-off: debt-to-GDP > 100%, debt-servicing costs, and crowding-out risk.",
          keywords: ["debt-to-gdp", "crowding out", "debt-servicing"],
        },
        {
          point: "Recognizes long-run convergence: lasting prosperity in both schools depends on shifting productive capacity (LRAS) right.",
          keywords: ["productive capacity", "long-run prosperity", "anchoring"],
        },
        {
          point: "Develops a state-dependent synthesis explaining *when* each model applies best.",
          keywords: ["state-dependent", "near-zero", "disappears"],
        },
        {
          point: "Directly addresses the command term 'To what extent' with balanced weighing rather than one-sided advocacy.",
          keywords: ["far more convincing", "indispensable", "neither school"],
        },
        {
          point: "Delivers a crisp, well-reasoned overall judgement anchored in empirical crises.",
          keywords: ["judgement", "synthesis", "ultimately"],
        },
      ],
      hints: [
        "Frame your argument around *state-dependence*: Keynesianism shines in deep spare-capacity demand slumps, while Monetarism shines near full employment and during supply-shock inflation!",
        "Use specific empirical episodes: 1930s/Japan/2008 GFC/2020 COVID vs 1970s stagflation and 2021–2022 post-COVID inflation.",
        "Evaluate fiscal debt-to-GDP sustainability and crowding-out before delivering a clear 'to what extent' conclusion.",
      ],
    },
  ],
};
