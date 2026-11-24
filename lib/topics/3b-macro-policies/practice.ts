import type { MarkBand, TopicPractice } from "../../types.ts";

// Shared official IB Economics FA2022 analytical markbands
const BANDS_10_P1A: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  { band: "1–2", marks: [1, 2], descriptor: "Limited understanding of the question with minimal economic terminology and no accurate diagram." },
  { band: "3–4", marks: [3, 4], descriptor: "Superficial understanding; some relevant theory stated but explanations or diagrams lack accuracy and causal links." },
  { band: "5–6", marks: [5, 6], descriptor: "Satisfactory understanding; relevant economic concepts and a mostly accurate diagram are explained with minor gaps." },
  { band: "7–8", marks: [7, 8], descriptor: "Good understanding; precise economic terminology, clear step-by-step causal chains, and an accurately labelled diagram integrated into the explanation." },
  { band: "9–10", marks: [9, 10], descriptor: "Thorough, sustained explanation using exact IB terminology, fully labelled and integrated diagrams, and complete transmission mechanisms." },
];

const BANDS_15_P1B: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  { band: "1–3", marks: [1, 3], descriptor: "Very limited understanding; largely descriptive with little relevant economic theory, no diagram, and no real-world examples." },
  { band: "4–6", marks: [4, 6], descriptor: "Superficial analysis with basic diagrams or theory; evaluation is absent or purely asserted and real-world examples are vague or missing." },
  { band: "7–9", marks: [7, 9], descriptor: "Sound economic analysis with accurate diagrams and some relevant real-world examples, though evaluation remains underdeveloped or one-sided." },
  { band: "10–12", marks: [10, 12], descriptor: "Strong, well-structured analysis with integrated diagrams, relevant real-world examples, and clear evaluation weighing strengths, limitations, and stakeholder effects." },
  { band: "13–15", marks: [13, 15], descriptor: "Sustained, balanced synthesis and critical evaluation across short-run/long-run, stakeholders, assumptions, and trade-offs, seamlessly supported by specific, accurate real-world examples." },
];

const BANDS_10_P3: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  { band: "1–2", marks: [1, 2], descriptor: "A vague or inappropriate policy is stated without meaningful use of the stimulus data or economic reasoning." },
  { band: "3–4", marks: [3, 4], descriptor: "A policy is recommended with brief reference to the data, but economic transmission and evaluation are weak or generic." },
  { band: "5–6", marks: [5, 6], descriptor: "A clear policy is justified using relevant data and theory, with some consideration of limitations or stakeholder effects." },
  { band: "7–8", marks: [7, 8], descriptor: "A well-justified policy recommendation anchored directly in the stimulus figures, clearly explaining the economic mechanism and evaluating key constraints and trade-offs." },
  { band: "9–10", marks: [9, 10], descriptor: "An authoritative, cohesive recommendation citing quantitative figures directly, explaining exact transmission mechanisms, and thoroughly evaluating stakeholder, timing, fiscal, and complementary-policy trade-offs." },
];

const BANDS_8: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  { band: "1–2", marks: [1, 2], descriptor: "Limited economic knowledge; brief or unsupported points." },
  { band: "3–4", marks: [3, 4], descriptor: "Basic explanation of relevant theory with minimal balance or evaluation." },
  { band: "5–6", marks: [5, 6], descriptor: "Clear analysis of mechanisms and trade-offs with reasoned evaluation of both sides." },
  { band: "7–8", marks: [7, 8], descriptor: "Perceptive, well-balanced evaluation integrating theory, assumptions, short-run vs long-run effects, and a supported judgement." },
];

const BANDS_6: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  { band: "1–2", marks: [1, 2], descriptor: "Descriptive points with limited economic analysis." },
  { band: "3–4", marks: [3, 4], descriptor: "Accurate economic explanation addressing both sides with minor omissions." },
  { band: "5–6", marks: [5, 6], descriptor: "Sharp, balanced analysis with clear economic reasoning, contrasts, and nuanced judgement." },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 Qs: 4 balanced MCQs + 6 auto-marked ShortQs)
  // ===========================================================================
  quiz: [
    {
      id: "3b-macro-policies-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "monetary-policy-banking",
      question:
        "Which combination of shifts correctly summarises the transmission of **expansionary monetary policy**?",
      options: [
        "Lower base interest rates raise consumption, business investment, and net exports, shifting AD rightwards",
        "Lower base interest rates cut household consumption and appreciate the currency, shifting AD leftwards",
        "Higher base interest rates increase corporate borrowing and lower import demand, shifting LRAS rightwards",
        "Higher base interest rates expand government transfer payments and lower inflation, shifting SRAS rightwards",
      ],
      answerIndex: 0,
      hints: [
        "Expansionary monetary policy lowers interest rates to boost Aggregate Demand.",
        "Check all three channels: `C`, `I`, and `(X − M)`.",
      ],
      explanation:
        "Cutting base interest rates lowers borrowing costs (`C↑, I↑`) and triggers hot-money outflows that depreciate the currency (`(X − M)↑`), shifting `AD` rightwards to close a deflationary gap.",
    },
    {
      id: "3b-macro-policies-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "monetary-policy-banking",
      question:
        "A central bank sets its nominal base interest rate at 5.2% while annual CPI inflation is 3.4%. Calculate the approximate **real interest rate** (in %).",
      answer: { type: "number", value: 1.8, tolerance: 0.05, display: "1.8%" },
      traps: [
        { spec: { type: "number", value: 8.6 }, feedback: "Subtract inflation from the nominal interest rate rather than adding them." },
        { spec: { type: "number", value: -1.8 }, feedback: "Check the order: nominal rate minus inflation (`5.2% − 3.4%`) is positive." },
      ],
      hints: ["Use the Fisher approximation: `real interest rate ≈ nominal rate − inflation rate`."],
      solution: [
        "Real interest rate ≈ Nominal interest rate − Inflation rate.",
        "{{5.2% - 3.4% = 1.8%}}.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "monetary-policy-banking",
      question:
        "[HL] A central bank buys $12 million of government bonds from commercial banks when the minimum reserve ratio is 25%. Assuming full lending and zero cash drain, calculate the maximum total expansion in the money supply (in $ millions).",
      answer: { type: "number", value: 48, display: "$48 million" },
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "You multiplied by 0.25 instead of dividing by 0.25 (`1 / 0.25 = 4`)." },
      ],
      hints: [
        "First find the theoretical money multiplier: `1 / minimum reserve ratio`.",
        "With `r = 0.25`, `1 / 0.25 = 4`. Multiply `$12 million` by `4`.",
      ],
      solution: [
        "Theoretical credit (money) multiplier `= 1 / 0.25 = 4`.",
        "Maximum expansion `= $12 million × 4 = $48 million`.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "fiscal-policy-budgets",
      question:
        "Which pair represents the two classic **automatic stabilizers** built into modern fiscal systems?",
      options: [
        "Open-market bond purchases and minimum reserve ratios",
        "Progressive income taxation and unemployment benefits",
        "Public motorway construction and one-off privatisation sales",
        "Statutory minimum wages and corporate deregulation laws",
      ],
      answerIndex: 1,
      hints: [
        "Automatic stabilizers operate automatically over the business cycle with zero new legislation.",
        "Look for a tax structure and a welfare payment that both move counter-cyclically.",
      ],
      explanation:
        "Progressive income taxes and unemployment benefits automatically cool booms (higher tax brackets, lower benefits) and cushion recessions (lower tax brackets, higher benefits) without parliamentary delay.",
    },
    {
      id: "3b-macro-policies-quiz-q05",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "fiscal-policy-budgets",
      question:
        "A government collects $380 billion in revenue, spends $430 billion, and the country's nominal GDP is $1,000 billion. Calculate the **budget deficit as a percentage of GDP** (give a positive percentage).",
      answer: { type: "number", value: 5, display: "5%" },
      traps: [
        { spec: { type: "number", value: 50 }, feedback: "$50 billion is the deficit in dollars — now divide by nominal GDP ($1,000bn) and multiply by 100%." },
      ],
      hints: ["Find the dollar deficit (`$430bn − $380bn`), then divide by `$1,000bn` and multiply by 100."],
      solution: [
        "Budget deficit `= $430bn − $380bn = $50 billion`.",
        "Deficit as % of GDP `= (50 / 1,000) × 100% = 5%`.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] An open economy has `MPS = 0.15`, `MPT = 0.15`, and `MPM = 0.20`. Calculate the **Keynesian spending multiplier (`k`)**.",
      answer: { type: "number", value: 2, display: "2" },
      traps: [
        { spec: { type: "number", value: 0.5 }, feedback: "0.50 is the total marginal leakage (`MPW`) — take its reciprocal `1 / 0.50`." },
      ],
      hints: [
        "Sum all three marginal leakages: `MPW = MPS + MPT + MPM`.",
        "Divide `1` by `MPW` to obtain `k`.",
      ],
      solution: [
        "{{MPW = 0.15 + 0.15 + 0.20 = 0.50}}.",
        "{{k = 1 / 0.50 = 2}}.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q07",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] In an economy with spare capacity and `MPC = 0.75`, autonomous private investment rises by $15 billion. Calculate the maximum final increase in **Real GDP** (in $ billions).",
      answer: { type: "number", value: 60, display: "$60 billion" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "Watch out: `k = 1 / (1 − 0.75) = 4`, not `1 / 0.75`." },
        { spec: { type: "number", value: 11.25 }, feedback: "You multiplied `$15bn × 0.75` (Round 2 alone) instead of multiplying by `k = 4`." },
      ],
      hints: [
        "Find `k = 1 / (1 − MPC) = 1 / 0.25`.",
        "Multiply `k` by the `$15 billion` injection.",
      ],
      solution: [
        "{{k = 1 / (1 - 0.75) = 1 / 0.25 = 4}}.",
        "{{Δ\"Real GDP\" = 4 * 15 = $60 billion}}.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q08",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] What is the primary transmission mechanism behind the **crowding-out effect**?",
      options: [
        "Lower corporate taxes shrink private retained earnings and reduce investment",
        "Lower interest rates discourage saving and shrink commercial bank deposits",
        "Government deficit borrowing raises interest rates and reduces private investment",
        "Automatic stabilizers increase export tariffs and reduce net exports",
      ],
      answerIndex: 2,
      hints: [
        "Think about how the government finances `G > T` in the loanable funds market.",
        "Trace: bond issuance → interest rate change → effect on private `I`.",
      ],
      explanation:
        "When a government borrows to fund deficit spending, increased demand for loanable funds drives up real interest rates, crowding out private-sector investment (`I↓`) and interest-sensitive consumption (`C↓`).",
    },
    {
      id: "3b-macro-policies-quiz-q09",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "supply-side-policies",
      question:
        "Classify public R&D subsidies and state-funded high-speed rail construction as either `market-based` or `interventionist` supply-side policies.",
      answer: {
        type: "text",
        accept: ["interventionist", "interventionist supply-side", "interventionist supply-side policy", "interventionist supply-side policies"],
        display: "interventionist",
      },
      hints: ["Does the government actively invest public funds to expand technology and infrastructure, or step back to deregulate?"],
      solution: [
        "Public funding of R&D and physical infrastructure represents active state investment to expand productive capacity — classic **interventionist** supply-side policies.",
      ],
    },
    {
      id: "3b-macro-policies-quiz-q10",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "supply-side-policies",
      question:
        "On a Monetarist AD/LRAS diagram, what long-run outcome results from successful supply-side policies, ceteris paribus?",
      options: [
        "LRAS shifts leftwards, raising the average price level and lowering potential output",
        "AD shifts leftwards, lowering both real GDP and the average price level",
        "SRAS shifts leftwards, raising cost-push inflation and cyclical unemployment",
        "LRAS shifts rightwards, raising potential Real GDP and easing average price pressure",
      ],
      answerIndex: 3,
      hints: [
        "Supply-side policies expand the quantity and quality of factors of production.",
        "Trace the intersection of stationary `AD` with `LRAS₂` to the right of `LRAS₁`.",
      ],
      explanation:
        "A rightward shift of `LRAS` expands potential Real GDP (`Y_p1 → Y_p2`) while exerting downward pressure on the average price level (`PL₁ → PL₂`), creating non-inflationary long-run growth.",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 Qs = 30 Qs)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: EXTENDED RESPONSE & POLICY ANALYSIS (SL & HL) — 15 Qs
    // -------------------------------------------------------------------------
    {
      id: "3b-macro-policies-p1",
      title: "Paper 1 · Policy Mechanisms, Diagrams & Extended Response (SL & HL)",
      level: "SL",
      questions: [
        {
          id: "3b-macro-policies-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "monetary-policy-banking",
          question:
            "A central bank holds its nominal interest rate at 2.5% while annual CPI inflation runs at 4.0%. Calculate the approximate real interest rate (in %, include the negative sign).",
          answer: { type: "number", value: -1.5, tolerance: 0.05, display: "−1.5%" },
          traps: [
            { spec: { type: "number", value: 1.5 }, feedback: "Inflation exceeds the nominal rate, so the real interest rate is negative (`2.5% − 4.0% = −1.5%`)." },
          ],
          hints: ["Subtract inflation from the nominal interest rate."],
          solution: ["Real interest rate ≈ `2.5% − 4.0% = −1.5%`."],
        },
        {
          id: "3b-macro-policies-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fiscal-policy-budgets",
          question:
            "A country has a national debt of $720 billion and nominal GDP of $900 billion. Calculate its **Debt-to-GDP ratio** (in %).",
          answer: { type: "number", value: 80, display: "80%" },
          traps: [
            { spec: { type: "number", value: 125 }, feedback: "Divide National Debt by Nominal GDP (`720 / 900`), not GDP by Debt." },
          ],
          hints: ["Compute `(National Debt / Nominal GDP) × 100%`."],
          solution: ["Debt-to-GDP `= (720 / 900) × 100% = 80%`."],
        },
        {
          id: "3b-macro-policies-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "multiplier-crowding-out-hl",
          question:
            "[HL] An open economy has `MPS = 0.12`, `MPT = 0.18`, and `MPM = 0.10`. Calculate the Marginal Propensity to Consume domestically (`MPC`) as a decimal.",
          answer: { type: "number", value: 0.6, tolerance: 0.005, display: "0.60" },
          traps: [
            { spec: { type: "number", value: 0.4 }, feedback: "0.40 is the sum of leakages (`MPW`) — subtract from 1 to get `MPC`." },
          ],
          hints: [
            "Recall `MPC + MPS + MPT + MPM = 1`.",
            "Sum the three leakages (`0.12 + 0.18 + 0.10`), then subtract from `1`.",
          ],
          solution: [
            "Total leakages `MPW = 0.12 + 0.18 + 0.10 = 0.40`.",
            "{{MPC = 1 - 0.40 = 0.60}}.",
          ],
        },
        {
          id: "3b-macro-policies-p1-q04",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "fiscal-policy-budgets",
          marks: 2,
          question:
            "Define **automatic stabilizers** and identify the two primary mechanisms through which they operate in an economy. [2 marks]",
          hints: [
            "Focus on the fact that they smooth the business cycle automatically without new laws.",
            "Name the tax mechanism and the welfare mechanism.",
          ],
          modelAnswer:
            "Automatic stabilizers are built-in features of the tax and welfare system that counter-cyclically dampen fluctuations in Aggregate Demand without requiring new legislative action. The two primary mechanisms are progressive income taxation (where tax receipts rise faster than incomes in booms and fall faster in recessions) and unemployment benefits (which rise automatically during downturns and decline during expansions).",
          markScheme: [
            {
              point: "Defines automatic stabilizers as built-in fiscal features that counter-cyclically dampen AD/business-cycle swings without new parliamentary legislation.",
              keywords: ["built-in", "without requiring", "counter-cyclically", "no new legislation"],
            },
            {
              point: "Identifies both progressive income taxes and unemployment benefits as the two main mechanisms.",
              keywords: ["progressive", "unemployment benefits"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q05",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "fiscal-policy-budgets",
          marks: 4,
          question:
            "Distinguish between a government **budget deficit** and the **national debt**, and explain why economists assess fiscal sustainability using the **Debt-to-GDP ratio** rather than the raw dollar value of debt. [4 marks]",
          hints: [
            "Use the exact economic terms *flow* (per year) and *stock* (cumulative).",
            "Explain how GDP measures an economy's taxable capacity to service borrowing.",
          ],
          modelAnswer:
            "A budget deficit is an annual flow occurring within a single fiscal year whenever government expenditure exceeds tax revenue (`G > T`), forcing the treasury to borrow the shortfall. By contrast, the national debt is the cumulative stock of all past annual deficits minus past surpluses accumulated over time. Economists measure sustainability via the Debt-to-GDP ratio because a country's capacity to raise tax revenue and service interest payments depends on the size of its economic output. A $500 billion debt is easily manageable for a $10 trillion economy (5% of GDP) yet potentially unsustainable for a $250 billion economy (200% of GDP); moreover, if nominal GDP grows faster than debt, the ratio declines over time.",
          markScheme: [
            {
              point: "Identifies budget deficit as a single-year flow where expenditure exceeds revenue (`G > T`).",
              keywords: ["flow", "exceeds", "single fiscal year"],
            },
            {
              point: "Identifies national debt as the cumulative stock of past deficits minus surpluses.",
              keywords: ["cumulative stock", "past annual deficits", "accumulated"],
            },
            {
              point: "Explains that GDP reflects the economy's taxable capacity to service interest payments.",
              keywords: ["capacity", "service interest", "tax revenue"],
            },
            {
              point: "Illustrates proportionality (same dollar figure differs by economy size, or strong GDP growth reduces the ratio).",
              keywords: ["manageable", "nominal gdp grows faster", "proportional"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "monetary-policy-banking",
          marks: 4,
          question:
            "[HL] Explain, with reference to the Money Market diagram, how open-market purchases of government bonds by a central bank lower the equilibrium interest rate. [4 marks]",
          hints: [
            "Describe the axes (`Interest rate` vs `Quantity of money`) and curve shapes (vertical `M_s`, downward-sloping `M_d`).",
            "Trace the excess supply of money at the old interest rate `i₁` driving rates down to `i₂`.",
          ],
          modelAnswer:
            "In the Money Market diagram, the vertical axis measures the interest rate (`i`) and the horizontal axis measures the quantity of money (`Q_m`), with a vertical money supply curve (`M_s`) set by the central bank intersecting a downward-sloping money demand curve (`M_d`). When the central bank buys government bonds from commercial banks in open-market operations, it credits banks with newly created reserves, expanding liquidity and shifting vertical `M_s1` rightwards to `M_s2`. At the original rate `i₁`, there is now an excess supply of money (`Q₂ > Q₁`), so banks and investors bid up bond prices to deploy surplus cash. Because bond prices and yields move inversely, the equilibrium interest rate falls from `i₁` to `i₂`, encouraging higher consumption and private investment.",
          markScheme: [
            {
              point: "Accurately specifies Money Market axes (`interest rate` vs `quantity of money`) with vertical `M_s` and downward-sloping `M_d`.",
              keywords: ["vertical money supply", "downward-sloping money demand"],
            },
            {
              point: "Explains that buying bonds injects reserves into commercial banks, shifting `M_s` rightwards (`M_s1 → M_s2`).",
              keywords: ["reserves", "shifts", "rightwards"],
            },
            {
              point: "Explains excess supply of money at `i₁` leading institutions to buy bonds / bid up bond prices.",
              keywords: ["excess supply", "bid up bond prices", "surplus cash"],
            },
            {
              point: "Concludes that inverse bond price–yield relationship lowers equilibrium interest rate (`i₁ → i₂`).",
              keywords: ["inversely", "falls from", "yields"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "fiscal-policy-budgets",
          marks: 4,
          question:
            "Distinguish between **current expenditure**, **capital expenditure**, and **transfer payments**, explaining how each impacts Aggregate Demand and/or Long-Run Aggregate Supply. [4 marks]",
          hints: [
            "Give a concrete example of each of the three spending types.",
            "Show which two enter `G`, which one enters `C`, and which one shifts `LRAS`.",
          ],
          modelAnswer:
            "Current expenditure covers recurring day-to-day running costs of public services, such as teacher and nurse salaries or hospital supplies; it enters `G` directly and shifts `AD` rightwards in the short run. Capital expenditure funds long-lived physical assets like railways, ports, and renewable energy grids; it boosts `G` immediately (shifting `AD` right) and expands productive capacity to shift `LRAS` rightwards over the long run. Transfer payments — such as state pensions and unemployment benefits — redistribute income without purchasing newly produced output; they are excluded from `G` to avoid double-counting, instead raising household disposable income and stimulating consumption (`C`) in `AD`.",
          markScheme: [
            {
              point: "Defines current expenditure (recurring wages/operating costs) and links it directly to `G` / short-run `AD`.",
              keywords: ["day-to-day", "salaries", "running costs"],
            },
            {
              point: "Defines capital expenditure (long-lived physical assets/infrastructure) and links it to BOTH `AD` (`G`) and long-run `LRAS`.",
              keywords: ["long-lived", "productive capacity", "railways"],
            },
            {
              point: "Defines transfer payments (welfare/pensions with no direct output exchange) and notes exclusion from `G`.",
              keywords: ["pensions", "excluded from", "double-counting"],
            },
            {
              point: "Explains that transfers boost `AD` indirectly by increasing recipients' disposable income and household consumption (`C`).",
              keywords: ["disposable income", "stimulating consumption"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "multiplier-crowding-out-hl",
          marks: 4,
          question:
            "[HL] Explain how the **crowding-out effect** can weaken the impact of deficit-financed expansionary fiscal policy, referencing both the loanable funds market and the AD/AS diagram. [4 marks]",
          hints: [
            "Start with `G > T` requiring sovereign bond issuance in the loanable funds market.",
            "Show the two-step movement of `AD`: initial rightward shift `AD₁ → AD₂` followed by partial pullback `AD₂ → AD₃`.",
          ],
          modelAnswer:
            "When a government increases spending without raising taxes, it runs a budget deficit and must issue sovereign bonds to borrow in the loanable funds market. This surge in demand for loanable funds pushes up the real interest rate from `i₁` to `i₂`. Higher borrowing costs make private capital projects less profitable and make mortgages or consumer loans pricier, causing private investment (`I`) and interest-sensitive consumption (`C`) to fall. On an AD/AS diagram, while the initial fiscal stimulus shifts `AD₁` rightwards to `AD₂`, the drop in private `I` and `C` pulls Aggregate Demand partly back to `AD₃`, reducing the net Real GDP expansion.",
          markScheme: [
            {
              point: "Explains that deficit spending forces higher government borrowing / bond issuance in the loanable funds market.",
              keywords: ["sovereign bonds", "surge in demand for loanable funds", "borrow"],
            },
            {
              point: "States that higher demand for funds drives up the real interest rate (`i₁ → i₂`).",
              keywords: ["pushes up the real interest rate", "interest rate rises"],
            },
            {
              point: "Explains that higher borrowing costs reduce private investment (`I↓`) and interest-sensitive consumption (`C↓`).",
              keywords: ["less profitable", "private investment", "mortgages"],
            },
            {
              point: "Describes the two-step AD/AS pullback (`AD₁ → AD₂` then back to `AD₃`), lowering net Real GDP gain.",
              keywords: ["pulls aggregate demand", "ad₃", "partly back"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "supply-side-policies",
          marks: 4,
          question:
            "Explain the **dual short-run and long-run macroeconomic effects** of large-scale public investment in clean-energy grid infrastructure. [4 marks]",
          hints: [
            "Split your answer cleanly into **Short Run (construction phase)** and **Long Run (operational phase)**.",
            "Identify which curve shifts in each period and what happens to Real GDP and the Average Price Level.",
          ],
          modelAnswer:
            "Public spending on clean-energy grids is an interventionist supply-side policy with a dual effect. In the short run during construction, paying engineers, contractors, and turbine suppliers increases government capital expenditure (`G↑`), shifting Aggregate Demand rightwards (`AD₁ → AD₂`), boosting actual Real GDP and reducing cyclical unemployment — though creating temporary demand-pull inflation if the economy is already near `Y_fe`. In the long run once completed, cheaper, more reliable electricity lowers unit production costs across manufacturing and digital services and expands productive capacity, shifting `LRAS₁` rightwards to `LRAS₂`. This lifts potential output (`Y_p1 → Y_p2`) and eases long-run inflationary pressure (`PL` falls or stabilises).",
          markScheme: [
            {
              point: "Classifies clean-energy infrastructure as an interventionist capital spending policy with dual AD/AS impact.",
              keywords: ["interventionist", "capital expenditure", "dual effect"],
            },
            {
              point: "Explains short-run rightward shift of `AD` via `G↑` during construction, raising actual output/jobs.",
              keywords: ["during construction", "shifting aggregate demand rightwards", "cyclical unemployment"],
            },
            {
              point: "Notes potential short-run demand-pull inflation risk if operating near full employment.",
              keywords: ["demand-pull inflation", "near y_fe"],
            },
            {
              point: "Explains long-run rightward shift of `LRAS` via lower energy costs and greater productive capacity, easing price pressure.",
              keywords: ["cheaper", "unit production costs", "lras₁", "potential output"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "monetary-policy-banking",
          marks: 10,
          markbands: BANDS_10_P1A,
          question:
            "**[Paper 1 Part (a) · 10 marks]** Explain how a central bank can use **expansionary monetary policy** to close a deflationary gap, using an appropriate AD/AS diagram to support your explanation.",
          hints: [
            "Define monetary policy and a deflationary gap (`Y_actual < Y_fe`).",
            "Walk carefully through all three AD transmission channels: `C`, `I`, and `(X − M)` via exchange rates.",
            "Describe a fully labelled Keynesian or Monetarist AD/AS diagram (`Average Price Level` vs `Real GDP`) shifting `AD₁ → AD₂`.",
          ],
          modelAnswer:
            "Monetary policy is demand-side policy conducted by a country's central bank manipulating base interest rates and the money supply to influence Aggregate Demand. A deflationary (recessionary) gap exists when equilibrium Real GDP (`Y₁`) sits below full-employment output (`Y_fe`), leaving cyclical unemployment and spare capacity.\n\nTo close this gap, the central bank implements expansionary (loose) monetary policy by cutting its base policy interest rate (and at HL, buying government bonds via open-market operations to shift vertical `M_s` rightwards). Lower base rates pass through to commercial retail lending rates via three transmission channels:\n\n1. **Consumption (`C↑`)**: Cheaper mortgages, car loans, and credit cards reduce debt-servicing payments and encourage household borrowing, while lower returns on savings decrease the opportunity cost of spending; rising house and share values also generate a positive wealth effect.\n2. **Investment (`I↑`)**: Lower borrowing costs reduce the hurdle rate on new factories, machinery, and software, making more capital projects profitable.\n3. **Net Exports (`(X − M)↑`)**: Lower domestic interest rates reduce foreign investor demand for domestic deposits, prompting hot-money outflows that depreciate the exchange rate; domestic exports become cheaper abroad and imports pricier at home.\n\nOn a labelled AD/AS diagram (`Average Price Level` on the vertical axis, `Real GDP` on the horizontal axis), rising `C`, `I`, and `(X − M)` shift Aggregate Demand rightwards from `AD₁` to `AD₂`. Along the Keynesian AS curve, equilibrium moves from `E₁ (Y₁, PL₁)` to `E₂ (Y_fe, PL₂)`: Real GDP expands to full employment, eliminating the deflationary gap and cyclical unemployment, with only mild upward pressure on the average price level while ample spare capacity remains.",
          markScheme: [
            { point: "Defines monetary policy accurately (central bank manipulating interest rates / money supply).", keywords: ["manipulating base interest rates", "money supply"] },
            { point: "Defines deflationary gap (`Y₁ < Y_fe` with spare capacity and cyclical unemployment).", keywords: ["below full-employment", "spare capacity", "cyclical unemployment"] },
            { point: "States central bank lowers its base policy interest rate (expansionary/loose stance).", keywords: ["cutting its base policy", "loose"] },
            { point: "Explains Consumption channel: cheaper mortgages/loans and lower opportunity cost of saving.", keywords: ["cheaper mortgages", "opportunity cost of spending"] },
            { point: "Notes positive wealth effect from higher housing/equity values boosting `C`.", keywords: ["wealth effect", "house and share"] },
            { point: "Explains Investment channel: lower borrowing costs make more capital projects profitable.", keywords: ["hurdle rate", "capital projects profitable"] },
            { point: "Explains Net Exports channel: hot-money outflows depreciate the currency, boosting `(X − M)`.", keywords: ["hot-money outflows", "depreciate the exchange rate"] },
            { point: "Specifies exact IB AD/AS diagram axes (`Average Price Level` and `Real GDP`).", keywords: ["average price level", "real gdp"] },
            { point: "Describes rightward shift `AD₁ → AD₂` eliminating the gap (`Y₁ → Y_fe`).", keywords: ["ad₁", "ad₂", "y_fe"] },
            { point: "Explains price-level response (`PL₁ → PL₂`) depending on spare capacity along AS.", keywords: ["pl₁", "pl₂", "mild upward pressure"] },
          ],
        },
        {
          id: "3b-macro-policies-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "supply-side-policies",
          marks: 10,
          markbands: BANDS_10_P1A,
          question:
            "**[Paper 1 Part (a) · 10 marks]** Explain the distinction between **market-based** and **interventionist** supply-side policies, illustrating with an AD/LRAS diagram how they achieve non-inflationary long-term economic growth.",
          hints: [
            "Define supply-side policies via increasing factor quantity, factor quality, or market efficiency to shift `LRAS` rightwards.",
            "Give specific mechanisms for BOTH market-based (deregulation, privatisation, labour reforms, direct tax cuts) and interventionist (education, health, R&D, infrastructure).",
            "Explain the Monetarist AD/LRAS diagram showing `Y_p1 → Y_p2` AND `PL₁ → PL₂` simultaneously.",
          ],
          modelAnswer:
            "Supply-side policies aim to expand an economy's long-run productive capacity by increasing the quantity or quality of factors of production and improving institutional efficiency, shifting Long-Run Aggregate Supply (`LRAS`) rightwards.\n\n**Market-based supply-side policies** reduce government intervention so competition and price incentives boost efficiency:\n- *Encouraging competition*: **deregulation** removes bureaucratic entry barriers, **privatisation** introduces profit discipline to former state enterprises, and **trade liberalisation** cuts tariffs to lower imported input costs.\n- *Labour-market reforms*: reducing union power, lowering unemployment benefits, or relaxing statutory minimum wages makes wages more flexible and lowers firm hiring costs.\n- *Incentive-related tax cuts*: lowering personal income and corporate profit taxes increases post-tax rewards to work, entrepreneurship, and capital investment.\n\n**Interventionist supply-side policies** involve active public expenditure to correct market failures in human capital, technology, and physical infrastructure:\n- *Human capital*: public funding of STEM education, vocational retraining, and healthcare improves labour productivity and occupational mobility, cutting structural unemployment.\n- *Technology & infrastructure*: R&D subsidies, innovation grants, broadband networks, and modern ports lower unit production costs across all industries.\n\nOn a fully labelled Monetarist AD/LRAS diagram (`Average Price Level` vs `Real GDP`), higher factor productivity shifts vertical `LRAS₁` rightwards to `LRAS₂`. Along a given downward-sloping `AD` curve, long-run equilibrium moves from `E₁ (Y_p1, PL₁)` to `E₂ (Y_p2, PL₂)`: potential Real GDP expands permanently while average price levels fall (or rise more slowly), delivering non-inflationary economic growth and a lower natural rate of unemployment (`NRU`).",
          markScheme: [
            { point: "Defines supply-side policies as expanding productive capacity via factor quantity/quality and efficiency.", keywords: ["productive capacity", "quantity or quality"] },
            { point: "Defines market-based policies as reducing state intervention to sharpen competition and incentives.", keywords: ["reduce government intervention", "price incentives"] },
            { point: "Explains competition policies (deregulation, privatisation, trade liberalisation).", keywords: ["deregulation", "privatisation", "trade liberalisation"] },
            { point: "Explains labour-market flexibility reforms (unions, benefits, minimum wages).", keywords: ["union power", "flexible", "minimum wages"] },
            { point: "Explains incentive-related cuts to personal income and corporate profit taxes.", keywords: ["corporate profit taxes", "post-tax rewards"] },
            { point: "Defines interventionist policies as active public spending addressing market failures.", keywords: ["active public expenditure", "market failures"] },
            { point: "Explains human-capital investment (education, retraining, healthcare) cutting structural unemployment.", keywords: ["vocational retraining", "occupational mobility", "structural unemployment"] },
            { point: "Explains technology (R&D subsidies) and physical infrastructure lowering unit business costs.", keywords: ["r&d subsidies", "modern ports", "unit production costs"] },
            { point: "Specifies labelled AD/LRAS diagram (`Average Price Level` vs `Real GDP`) shifting `LRAS₁ → LRAS₂`.", keywords: ["average price level", "lras₁", "lras₂"] },
            { point: "Concludes non-inflationary potential growth (`Y_p1 → Y_p2`, `PL₁ → PL₂`) and lower `NRU`.", keywords: ["y_p1", "pl₂", "natural rate of unemployment"] },
          ],
        },
        {
          id: "3b-macro-policies-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "fiscal-policy-budgets",
          marks: 6,
          markbands: BANDS_6,
          question:
            "Compare and contrast **automatic stabilizers** and **discretionary fiscal policy** as tools for managing business-cycle fluctuations. [6 marks]",
          hints: [
            "Include at least two explicit similarities (both alter the budget balance counter-cyclically via `T` and spending to stabilise `AD`).",
            "Contrast legislative time lags, political bias, magnitude/targeting in severe crises, and long-run `LRAS` capability.",
          ],
          modelAnswer:
            "**Similarities:** Both automatic stabilizers and discretionary fiscal policy operate through the government budget (`T` and spending) to stabilise Aggregate Demand counter-cyclically — widening budget deficits during recessions to cushion output and narrowing deficits (or generating surpluses) during booms to restrain demand-pull inflation.\n\n**Differences:** First, **time lags**: automatic stabilizers (progressive income taxes and unemployment benefits) respond instantaneously as incomes and joblessness change, with zero recognition or parliamentary delay; discretionary fiscal policy requires budget debates, legislation, and project tendering, creating severe implementation lags that risk pro-cyclical timing. Second, **political bias**: automatic stabilizers are rule-based and insulated from electioneering, whereas politicians eagerly vote for discretionary tax cuts or spending boosts yet resist unpopular fiscal tightening during booms. Third, **scale and targeting**: automatic stabilizers alone can only *cushion* a downturn and cannot fully close a severe recessionary gap, whereas discretionary fiscal policy enables large-scale, targeted interventions (such as shovel-ready capital infrastructure) that both close deep deflationary gaps and expand long-run `LRAS`.",
          markScheme: [
            { point: "Similarity: both work through government taxation/spending to shift or stabilise `AD` counter-cyclically.", keywords: ["counter-cyclically", "stabilise aggregate demand"] },
            { point: "Similarity: both move the budget balance into larger deficit in downturns and smaller deficit/surplus in booms.", keywords: ["widening budget deficits", "surpluses"] },
            { point: "Contrast on time lags: automatic stabilizers act instantaneously vs discretionary legislative/tendering lags.", keywords: ["instantaneously", "zero recognition", "tendering"] },
            { point: "Contrast on political constraints: rule-based automatic mechanisms vs asymmetric electoral resistance to tightening.", keywords: ["insulated from electioneering", "resist unpopular"] },
            { point: "Contrast on magnitude: automatic stabilizers only cushion shocks, whereas discretionary packages can close deep gaps.", keywords: ["cushion", "close deep deflationary gaps"] },
            { point: "Contrast on targeting / supply-side capability: discretionary capital projects can target sectors and lift `LRAS`.", keywords: ["shovel-ready", "expand long-run lras"] },
          ],
        },
        {
          id: "3b-macro-policies-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "multiplier-crowding-out-hl",
          marks: 8,
          markbands: BANDS_8,
          question:
            "[HL] Evaluate the importance of the **Keynesian multiplier** and the **crowding-out effect** when a government considers debt-financed fiscal stimulus during an economic downturn. [8 marks]",
          hints: [
            "Explain how `k = 1 / (MPS + MPT + MPM)` amplifies `ΔG` into larger `ΔReal GDP`, and what makes `k` large or small (openness `MPM`, confidence `MPS`).",
            "Contrast Monetarist crowding-out fears near `Y_fe` against Keynesian spare-capacity 'crowding in' during deep slumps.",
            "Include price-level erosion along upward-sloping AS and debt-sustainability judgements.",
          ],
          modelAnswer:
            "Under the Keynesian multiplier (`k = 1 / [MPS + MPT + MPM]`), an initial debt-financed injection `ΔG` triggers successive rounds of induced domestic consumption, magnifying the final rise in Real GDP to `k × ΔG`. This implies a government need only inject `ΔG = Gap / k` to eliminate a deflationary gap, making fiscal stimulus highly cost-effective when spare capacity is abundant.\n\nHowever, the real-world size of `k` varies sharply across contexts. In small, highly open economies (high `MPM`) or when fearful households hoard cash (high `MPS`), leakages rapidly shrink `k`, limiting domestic job creation. Moreover, if the economy operates on the upward-sloping intermediate section of the Keynesian AS curve rather than the flat horizontal range, rising inflation absorbs part of the nominal AD expansion, reducing the real output gain.\n\nMonetarist economists warn that borrowing to finance `ΔG` increases demand for loanable funds, raising real interest rates and **crowding out** private investment (`I↓`) and interest-sensitive consumption (`C↓`), pulling `AD` back towards its starting point — especially when the economy is near full employment or already carries a high Debt-to-GDP ratio (risking bond-market stress). Conversely, Keynesians counter that during a severe slump with idle savings and near-zero interest rates, public borrowing barely lifts yields; instead, revived demand boosts business confidence ('animal spirits') and **crowds in** private investment.\n\nOverall, debt-financed fiscal stimulus is most justified when spare capacity is large, interest rates are low, leakages are moderate, and spending funds productive capital projects; near full employment, crowding out and inflation dominate, favouring monetary restraint or supply-side reform.",
          markScheme: [
            { point: "States exact multiplier formula `k = 1 / (MPS + MPT + MPM)` and explains induced re-spending rounds.", keywords: ["mps + mpt + mpm", "successive rounds"] },
            { point: "Explains gap-closing efficiency (`ΔG = Gap / k`) when spare capacity exists.", keywords: ["gap / k", "cost-effective"] },
            { point: "Evaluates leakage sensitivity: high `MPM` in open economies or high precautionary `MPS` shrinks `k`.", keywords: ["highly open economies", "hoard cash", "shrink"] },
            { point: "Notes price-level caveat: upward-sloping AS converts part of `k × ΔG` into inflation rather than real output.", keywords: ["intermediate section", "absorbs part"] },
            { point: "Explains Monetarist crowding-out mechanism (`G > T` → borrowing → `i↑` → private `I↓`).", keywords: ["loanable funds", "real interest rates", "private investment"] },
            { point: "Notes crowding out intensifies near full employment or under high existing Debt-to-GDP / bond stress.", keywords: ["bond-market stress", "full employment"] },
            { point: "Contrasts Keynesian deep-recession view: idle savings keep yields low and stronger demand 'crowds in' investment.", keywords: ["idle savings", "animal spirits", "crowds in"] },
            { point: "Reaches a nuanced synthesis judging when stimulus works (deep slump, low yields, capital projects) vs fails.", keywords: ["overall", "productive capital projects", "monetary restraint"] },
          ],
        },
        {
          id: "3b-macro-policies-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "monetary-policy-banking",
          marks: 15,
          markbands: BANDS_15_P1B,
          question:
            "**[Paper 1 Part (b) · 15 marks]** Using **real-world examples**, evaluate the effectiveness of **monetary policy** in achieving macroeconomic stability during both a severe recession and a period of high inflation.",
          hints: [
            "Cover BOTH regimes explicitly: fighting a severe recession (expansionary rates & QE) AND fighting high inflation (contractionary hikes).",
            "Integrate specific, accurate real-world examples (e.g. Fed/Bank of England 2022–23 rate hikes, Bank of Japan/ECB zero lower bound & QE).",
            "Weigh strengths (speed, incremental control, independence, credibility) against limitations (12–18 month lags, ZLB, low confidence, stagflation dilemma, wealth inequality from QE, asymmetric effectiveness).",
          ],
          modelAnswer:
            "Monetary policy — the manipulation of base interest rates and money supply by an independent central bank — is the primary short-run stabilisation tool in most modern economies, yet its effectiveness is **asymmetric**: it tends to be markedly more potent at cooling demand-pull inflation than at reviving an economy trapped in a severe recession.\n\n**Strengths in fighting high inflation:** When an economy overheats (`Y > Y_fe`), contractionary monetary policy works rapidly and credibly. Because central bank committees meet regularly and operate independently of electoral politics, they can hike rates incrementally without parliamentary delay. Higher rates suppress borrowing-funded consumption (`C↓`), raise business hurdle rates (`I↓`), and attract hot-money inflows that appreciate the exchange rate, curbing net exports (`(X − M)↓`) and imported inflation — shifting `AD` leftwards. A vivid real-world example is the **US Federal Reserve and Bank of England in 2022–2023**: as CPI inflation exceeded 9%, the Fed raised its policy rate from near 0% to 5.25–5.50% and the Bank of England hiked to 5.25%, successfully anchoring long-run inflation expectations and pulling inflation close to 2–3% by 2024.\n\n**Limitations in fighting high inflation:** First, monetary policy suffers **12–18 month transmission lags** as fixed-rate mortgages and corporate debt roll over slowly, creating a danger of over-tightening into recession. Second, monetary policy is poorly suited to **cost-push inflation (stagflation)**: because the 2022 energy-price surge shifted `SRAS` leftwards, rate hikes could only slow inflation by deliberately suppressing `AD` and imposing painful mortgage-cost spikes on indebted households and first-time buyers (an **equity** trade-off).\n\n**Strengths & limitations in a severe recession:** In a mild downturn, cutting rates rapidly revives housing, durable consumption, and business investment without directly adding to national debt. However, during a **severe recession**, three structural constraints blunt monetary power: (1) the **zero lower bound (ZLB)** prevents nominal rates falling meaningfully below 0%; (2) **weak business and consumer confidence** ('pushing on a string') means fearful firms refuse to borrow even at 0% interest; and (3) commercial banks may hoard liquidity rather than lend. The **Bank of Japan (2013–2023)** and **European Central Bank (2015–2019)** illustrate this vividly: despite zero/negative rates and vast **Quantitative Easing (QE)** bond purchases, weak domestic confidence left growth and inflation stubbornly sluggish for years. Moreover, prolonged QE inflated equity and property prices across the US and UK, disproportionately benefiting wealthy asset holders and widening **wealth inequality**.\n\n**Judgement:** Monetary policy is indispensable for maintaining inflation credibility and fine-tuning normal business cycles due to its speed, reversibility, and independence. Yet during deep recessions at the ZLB, expansionary **fiscal policy** (such as the 2020 US CARES Act or UK Furlough scheme) must shoulder the primary burden, while supply-driven stagflation ultimately requires **supply-side reforms** rather than rate hikes alone.",
          markScheme: [
            { point: "Defines monetary policy and frames thesis around asymmetric effectiveness (stronger against inflation than deep slumps).", keywords: ["asymmetric", "independent central bank"] },
            { point: "Explains contractionary transmission (`C↓, I↓`) reducing demand-pull inflation (`AD` left).", keywords: ["suppress borrowing", "hurdle rates", "shifts", "ad"] },
            { point: "Explains exchange-rate channel during tightening (hot-money inflows appreciate currency, cutting `(X − M)` and import prices).", keywords: ["appreciate the exchange rate", "imported inflation"] },
            { point: "Highlights strengths: fast implementation, incremental control, and operational independence from politics.", keywords: ["incrementally", "independently of electoral politics"] },
            { point: "Integrates accurate real-world tightening example (e.g. US Federal Reserve / Bank of England 2022–2023 hikes).", keywords: ["federal reserve", "bank of england", "2022"] },
            { point: "Evaluates transmission time lags (12–18 months) and risk of over-tightening into recession.", keywords: ["12–18 month", "over-tightening"] },
            { point: "Evaluates weakness against cost-push inflation / stagflation (`SRAS` left trade-off with output).", keywords: ["cost-push", "sras", "stagflation"] },
            { point: "Evaluates stakeholder/equity burden of rate hikes (indebted mortgage holders / lower-income households).", keywords: ["mortgage-cost spikes", "equity"] },
            { point: "Explains expansionary role in mild downturns without directly adding to public debt.", keywords: ["mild downturn", "national debt"] },
            { point: "Identifies zero lower bound (ZLB) constraint during severe recessions.", keywords: ["zero lower bound", "zlb"] },
            { point: "Explains weak business/consumer confidence ('pushing on a string') and cautious bank lending.", keywords: ["pushing on a string", "hoard liquidity"] },
            { point: "Integrates accurate real-world ZLB/QE example (e.g. Bank of Japan or European Central Bank).", keywords: ["bank of japan", "european central bank", "quantitative easing"] },
            { point: "Evaluates unintended side effect of prolonged QE inflating asset prices and worsening wealth inequality.", keywords: ["wealth inequality", "asset holders"] },
            { point: "Links recessionary limitations to complementary fiscal stimulus with real-world reference (e.g. CARES Act / Furlough).", keywords: ["cares act", "furlough", "fiscal policy"] },
            { point: "Provides balanced final judgement combining monetary, fiscal, and supply-side policy roles.", keywords: ["judgement", "supply-side reforms", "indispensable"] },
          ],
        },
        {
          id: "3b-macro-policies-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "supply-side-policies",
          marks: 15,
          markbands: BANDS_15_P1B,
          question:
            "**[Paper 1 Part (b) · 15 marks]** Using **real-world examples**, discuss the view that **interventionist supply-side policies** are more effective than **market-based supply-side policies** at achieving sustainable economic growth and equity.",
          hints: [
            "Analyse BOTH interventionist (education, R&D, infrastructure) and market-based (deregulation, privatisation, labour-market reforms, direct tax cuts) shifting `LRAS` rightwards.",
            "Compare directly across **equity**, **sustainability**, **fiscal/opportunity cost**, **time lags**, **short-run AD impact**, and **market vs government failure**.",
            "Include concrete real-world examples (e.g. Singapore SkillsFuture & green infrastructure, Germany Hartz labour reforms, UK utility privatisations, Nordic 'flexicurity').",
          ],
          modelAnswer:
            "Both interventionist and market-based supply-side policies aim to shift Long-Run Aggregate Supply (`LRAS`) rightwards (`Y_p1 → Y_p2`), delivering non-inflationary potential growth and lower structural unemployment. However, they differ starkly in their impacts on **equity**, **environmental sustainability**, and **fiscal budgets**.\n\n**Case for interventionist supply-side policies:** Active state investment directly corrects major market failures. Private markets under-provide education, preventative healthcare, basic R&D, and clean-energy grids because of large positive externalities and public-good characteristics. **Singapore's SkillsFuture** retraining credits, STEM university investment, and Tuas Mega Port infrastructure illustrate how interventionist human-capital and logistics spending raises labour productivity and shifts `LRAS` rightwards while simultaneously promoting **equity** by equipping lower-income and mid-career workers with higher-wage skills. Furthermore, capital spending on renewable energy grids advances environmental **sustainability**, and unlike deregulation it provides an immediate short-run **`AD` boost (`G↑`)** helpful during downturns.\n\n**Limitations of interventionist policies:** First, they carry heavy **fiscal and opportunity costs** — funding railways, green grids, and universal training strains public budgets, widens deficits, and risks higher national debt or higher distortionary taxes. Second, they face **very long time lags** (often 5–15 years before school curricula or rail lines expand `LRAS`). Third, **government failure** arises when policymakers lack information and subsidise uncompetitive industries ('picking losers') due to political lobbying.\n\n**Case for market-based supply-side policies:** Market-based reforms — deregulation, privatisation, trade liberalisation, lower corporate/income taxes, and labour-market flexibility — require minimal upfront public expenditure (privatisation even raises one-off revenue) and harness private profit incentives to eliminate X-inefficiency. For example, **Germany's Hartz labour-market reforms (2003–2005)** improved job-matching efficiency and wage flexibility, helping cut structural unemployment from ~11% to below 4% over the ensuing decade. Similarly, airline and telecom deregulation across the EU lowered consumer fares and accelerated innovation.\n\n**Limitations of market-based policies:** Market-based tools frequently undermine **equity** and **sustainability**. Weakening trade unions, cutting minimum wages, and trimming unemployment benefits expand low-wage precarious work and widen the Gini coefficient (a well-documented critique of Germany's 'mini-jobs'). Privatising natural monopolies without robust regulators — as seen in parts of the **UK water sector** — risks high prices, under-investment, and river pollution, while excessive financial or environmental deregulation generates negative externalities. Finally, in a deep Keynesian recession, shifting `LRAS` right via deregulation does nothing to cure deficient `AD`.\n\n**Synthesis & Judgement:** Interventionist policies clearly hold the edge for **equity**, **green sustainability**, and correcting human-capital market failures, provided a government has fiscal space and transparent governance. Yet the strongest real-world performers reject a rigid either/or choice: **Denmark's 'flexicurity' model** blends market-based hiring flexibility with generous interventionist retraining and welfare protection — demonstrating that pairing competitive, well-regulated markets with strategic public investment in human capital and green infrastructure achieves the best balance of sustainable growth and equity.",
          markScheme: [
            { point: "Frames shared objective of shifting `LRAS` rightwards (`Y_p1 → Y_p2`) for non-inflationary growth.", keywords: ["y_p1", "non-inflationary potential growth"] },
            { point: "Explains interventionist rationale: correcting positive externalities and public-good market failures.", keywords: ["positive externalities", "public-good"] },
            { point: "Integrates accurate real-world interventionist example (e.g. Singapore SkillsFuture / infrastructure).", keywords: ["singapore", "skillsfuture", "tuas"] },
            { point: "Links interventionist human-capital investment directly to improved equity and lower structural unemployment.", keywords: ["lower-income", "higher-wage skills", "labour productivity"] },
            { point: "Links green infrastructure/R&D investment to environmental sustainability AND immediate short-run `AD` (`G↑`).", keywords: ["renewable energy", "short-run", "g↑"] },
            { point: "Evaluates interventionist fiscal/opportunity costs and national-debt trade-offs.", keywords: ["fiscal and opportunity costs", "strains public budgets"] },
            { point: "Evaluates very long time lags (5–15 years) for education/infrastructure to lift `LRAS`.", keywords: ["5–15 years", "very long time lags"] },
            { point: "Evaluates government failure risk ('picking losers' / lobbying / imperfect information).", keywords: ["government failure", "picking losers"] },
            { point: "Explains market-based advantages: low upfront fiscal cost and sharper private competition/efficiency.", keywords: ["minimal upfront", "x-inefficiency"] },
            { point: "Integrates accurate real-world market-based example (e.g. Germany Hartz reforms or EU airline/telecom deregulation).", keywords: ["germany", "hartz", "telecom deregulation"] },
            { point: "Evaluates market-based equity trade-off: widening Gini inequality and precarious low-wage work.", keywords: ["gini coefficient", "mini-jobs", "precarious"] },
            { point: "Evaluates privatisation of natural monopolies and environmental/deregulation risks with real-world example (e.g. UK water).", keywords: ["natural monopolies", "uk water", "river pollution"] },
            { point: "Notes Keynesian recession critique: market-based `LRAS` shifts fail to lift output when `AD` is deficient.", keywords: ["keynesian recession", "deficient"] },
            { point: "Integrates complementary policy-mix example (e.g. Denmark 'flexicurity' combining flexibility and retraining).", keywords: ["denmark", "flexicurity"] },
            { point: "Reaches balanced synthesis judging interventionist strength on equity/sustainability vs optimal blended approach.", keywords: ["synthesis", "fiscal space", "blended", "best balance"] },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2 & HL PAPER 3: DATA RESPONSE & QUANTITATIVE POLICY MODELLING — 15 Qs
    // -------------------------------------------------------------------------
    {
      id: "3b-macro-policies-p2",
      title: "Paper 2 & HL Paper 3 · Data Response & Quantitative Policy Modelling",
      level: "HL",
      questions: [
        {
          id: "3b-macro-policies-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "multiplier-crowding-out-hl",
          question:
            "[HL] Economy A has a Marginal Propensity to Consume domestically (`MPC`) of `0.60`. Calculate the Keynesian spending multiplier (`k`).",
          answer: { type: "number", value: 2.5, tolerance: 0.01, display: "2.5" },
          traps: [
            { spec: { type: "number", value: 1.67, tolerance: 0.02 }, feedback: "Use `1 / (1 − MPC)`, not `1 / MPC`." },
          ],
          hints: ["Compute `k = 1 / (1 − 0.60) = 1 / 0.40`."],
          solution: ["{{k = 1 / (1 - 0.60) = 1 / 0.40 = 2.5}}."],
        },
        {
          id: "3b-macro-policies-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "multiplier-crowding-out-hl",
          question:
            "[HL] Economy B is operating on the flat section of the Keynesian AS curve with `MPS = 0.08`, `MPT = 0.17`, and `MPM = 0.15`. If government capital expenditure rises by `$16 billion`, calculate the maximum final increase in Real GDP (in $ billions).",
          answer: { type: "number", value: 40, display: "$40 billion" },
          traps: [
            { spec: { type: "number", value: 64 }, feedback: "Check you included `MPM = 0.15` along with `MPS` and `MPT` (`MPW = 0.40`)." },
          ],
          hints: [
            "Sum all three leakages: `0.08 + 0.17 + 0.15 = 0.40`.",
            "Calculate `k = 1 / 0.40 = 2.5`, then multiply by `$16 billion`.",
          ],
          solution: [
            "{{MPW = 0.08 + 0.17 + 0.15 = 0.40}}.",
            "{{k = 1 / 0.40 = 2.5}}.",
            "{{Δ\"Real GDP\" = 2.5 * 16 = $40 billion}}.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "multiplier-crowding-out-hl",
          question:
            "[HL] Economy C has actual Real GDP of `$620 billion`, potential full-employment Real GDP of `$700 billion`, and `MPC = 0.80`. Assuming constant prices and no crowding out, calculate the required initial increase in government spending `ΔG` (in $ billions) to close the deflationary gap.",
          answer: { type: "number", value: 16, display: "$16 billion" },
          traps: [
            { spec: { type: "number", value: 80 }, feedback: "$80bn is the entire deflationary gap — divide it by the multiplier `k = 5` so you do not overshoot `Y_fe`." },
            { spec: { type: "number", value: 400 }, feedback: "Divide the gap by `k`, rather than multiplying by `k`." },
          ],
          hints: [
            "Calculate the deflationary gap: `$700bn − $620bn = $80bn`.",
            "Find `k = 1 / (1 − 0.80) = 5`, then compute `ΔG = Gap / k`.",
          ],
          solution: [
            "Deflationary gap `= $700bn − $620bn = $80 billion`.",
            "{{k = 1 / (1 - 0.80) = 5}}.",
            "{{ΔG = 80 / 5 = $16 billion}}.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "multiplier-crowding-out-hl",
          question:
            "[HL] Economy D has an **inflationary gap** of `$45 billion` (`Y_actual = $545bn`, `Y_fe = $500bn`), with `MPS = 0.10`, `MPT = 0.10`, and `MPM = 0.05`. Calculate the magnitude of the initial **cut** in government spending required to eliminate the inflationary gap (give a positive value in $ billions, to 2 decimal places).",
          answer: { type: "number", value: 11.25, tolerance: 0.02, display: "$11.25 billion" },
          traps: [
            { spec: { type: "number", value: 180 }, feedback: "Divide the `$45bn` gap by `k = 4` rather than multiplying." },
          ],
          hints: [
            "Sum the three leakages (`0.10 + 0.10 + 0.05 = 0.25`) to find `k = 1 / 0.25 = 4`.",
            "Divide the `$45 billion` inflationary gap by `k = 4`.",
          ],
          solution: [
            "{{MPW = 0.10 + 0.10 + 0.05 = 0.25}} → {{k = 1 / 0.25 = 4}}.",
            "Required spending cut `= $45bn / 4 = $11.25 billion`.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "monetary-policy-banking",
          question:
            "[HL] A central bank injects `$40 million` of new bank reserves via open-market bond purchases when the minimum reserve ratio is `8%` (`0.08`). Assuming full lending and zero cash drain, calculate the maximum possible total expansion in the money supply (in $ millions).",
          answer: { type: "number", value: 500, display: "$500 million" },
          traps: [
            { spec: { type: "number", value: 3.2 }, feedback: "Divide by `0.08` (`1 / 0.08 = 12.5`), rather than multiplying `$40m` by `0.08`." },
          ],
          hints: [
            "Compute the credit multiplier `1 / 0.08 = 12.5`.",
            "Multiply `$40 million` by `12.5`.",
          ],
          solution: [
            "Money multiplier `= 1 / 0.08 = 12.5`.",
            "Maximum money supply expansion `= $40 million × 12.5 = $500 million`.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fiscal-policy-budgets",
          question:
            "Country E begins the year with a national debt of `$480 billion` and nominal GDP of `$800 billion`. During the year, the government runs a `$30 billion` budget deficit while nominal GDP grows to `$850 billion`. Calculate Country E's **end-of-year Debt-to-GDP ratio** (in %).",
          answer: { type: "number", value: 60, tolerance: 0.05, display: "60%" },
          traps: [
            { spec: { type: "number", value: 63.75, tolerance: 0.1 }, feedback: "Remember to divide the new debt (`$510bn`) by the *new* nominal GDP (`$850bn`), not the initial `$800bn`." },
          ],
          hints: [
            "Add the annual deficit to initial debt: `$480bn + $30bn = $510bn`.",
            "Divide `$510bn` by the end-of-year nominal GDP (`$850bn`) and multiply by `100%`.",
          ],
          solution: [
            "End-of-year national debt `= $480bn + $30bn = $510 billion`.",
            "End-of-year Debt-to-GDP `= (510 / 850) × 100% = 60%` (unchanged because nominal GDP grew at the exact same 6.25% rate as debt!).",
          ],
        },
        {
          id: "3b-macro-policies-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "fiscal-policy-budgets",
          question:
            "Country F records government tax revenue of `$245 billion`, current expenditure of `$190 billion`, capital expenditure of `$40 billion`, and transfer payments of `$50 billion`, with nominal GDP of `$700 billion`. Calculate Country F's **budget deficit as a percentage of GDP** (give a positive percentage).",
          answer: { type: "number", value: 5, display: "5%" },
          traps: [
            { spec: { type: "number", value: 35 }, feedback: "$35 billion is the dollar deficit — divide by nominal GDP (`$700bn`) and multiply by 100%." },
          ],
          hints: [
            "Although transfers are excluded from `G` in GDP, ALL three outlays (current + capital + transfers) count in total government budget expenditure!",
            "Total outlays `= 190 + 40 + 50 = $280bn`. Find the deficit `$280bn − $245bn`, then express as % of `$700bn`.",
          ],
          solution: [
            "Total government budget outlays `= $190bn + $40bn + $50bn = $280 billion`.",
            "Budget deficit `= $280bn − $245bn = $35 billion`.",
            "Deficit as % of GDP `= (35 / 700) × 100% = 5%`.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "monetary-policy-banking",
          question:
            "A central bank lowers its nominal policy interest rate from `5.00%` to `3.25%` over a year while CPI inflation falls from `4.25%` to `1.50%`. Calculate the **new approximate real interest rate** at the end of the year (in %).",
          answer: { type: "number", value: 1.75, tolerance: 0.05, display: "1.75%" },
          traps: [
            { spec: { type: "number", value: 0.75 }, feedback: "0.75% was the *initial* real interest rate (`5.00% − 4.25%`). Use the end-of-year figures (`3.25% − 1.50%`)." },
          ],
          hints: [
            "Take the end-of-year nominal rate (`3.25%`) and subtract the end-of-year inflation rate (`1.50%`).",
            "Notice that even though nominal rates fell, the real interest rate actually *increased* from 0.75% to 1.75%!",
          ],
          solution: [
            "Initial real rate `≈ 5.00% − 4.25% = 0.75%`.",
            "End-of-year real rate `≈ 3.25% − 1.50% = 1.75%`.",
          ],
        },
        {
          id: "3b-macro-policies-p2-q09",
          kind: "written",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Define",
          guideRef: "monetary-policy-banking",
          marks: 2,
          question:
            "[HL] Define **Quantitative Easing (QE)** as used by central banks during severe downturns. [2 marks]",
          hints: [
            "State *when* it is used (zero lower bound) and *what* the central bank buys (long-term government/corporate bonds with electronic reserves).",
            "Mention its objective: lowering long-term yields and expanding lending/AD.",
          ],
          modelAnswer:
            "Quantitative Easing is an unconventional expansionary monetary policy deployed when nominal policy rates hit the zero lower bound, in which the central bank creates electronic reserves to buy large quantities of long-term government and corporate bonds from financial institutions. By bidding up bond prices, it lowers long-term interest yields, boosts asset values, and stimulates bank lending and Aggregate Demand.",
          markScheme: [
            {
              point: "Identifies QE as unconventional monetary policy at the zero lower bound where the central bank creates electronic reserves to buy long-term bonds/assets.",
              keywords: ["electronic reserves", "long-term", "bonds"],
            },
            {
              point: "States objective of lowering long-term yields / boosting liquidity, asset prices, and Aggregate Demand.",
              keywords: ["lowers long-term", "yields", "lending"],
            },
          ],
        },
        {
          id: "3b-macro-policies-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "multiplier-crowding-out-hl",
          marks: 4,
          question:
            "[HL] Country S is a small trade-dependent city-state (`MPS = 0.10, MPT = 0.15, MPM = 0.35`), whereas Country L is a large diversified economy (`MPS = 0.10, MPT = 0.15, MPM = 0.10`). Calculate both multipliers and explain why fiscal stimulus has a much smaller domestic GDP effect in Country S. [4 marks]",
          hints: [
            "Compute `k_S = 1 / 0.60 = 1.67` and `k_L = 1 / 0.35 = 2.86`.",
            "Explain the circular-flow import leakage mechanism: extra household income leaks rapidly to foreign producers rather than domestic shops.",
          ],
          modelAnswer:
            "For Country S, total marginal leakages are `MPW = 0.10 + 0.15 + 0.35 = 0.60`, giving a Keynesian multiplier of `k = 1 / 0.60 ≈ 1.67`. For Country L, `MPW = 0.10 + 0.15 + 0.10 = 0.35`, giving a much larger multiplier of `k = 1 / 0.35 ≈ 2.86`. Because Country S relies heavily on imported food, energy, and consumer goods (`MPM = 0.35`), 35 cents of every additional dollar earned immediately exits the domestic circular flow to foreign producers rather than funding induced domestic consumption. Consequently, each round of re-spending decays far faster, meaning a $10 billion fiscal package creates only ~$16.7 billion of domestic GDP in Country S compared with ~$28.6 billion in Country L.",
          markScheme: [
            { point: "Correctly computes Country S multiplier (`MPW = 0.60`, `k ≈ 1.67`).", keywords: ["0.60", "1.67"] },
            { point: "Correctly computes Country L multiplier (`MPW = 0.35`, `k ≈ 2.86`).", keywords: ["0.35", "2.86"] },
            { point: "Explains that high `MPM` causes additional income to leak rapidly abroad to foreign producers.", keywords: ["exits the domestic circular flow", "foreign producers"] },
            { point: "Concludes that smaller induced domestic consumption per round sharply reduces final domestic GDP expansion.", keywords: ["decays far faster", "16.7"] },
          ],
        },
        {
          id: "3b-macro-policies-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Analyse",
          guideRef: "monetary-policy-banking",
          marks: 4,
          question:
            "Analyse **two** limitations of using contractionary monetary policy to reduce inflation caused primarily by a sharp spike in imported energy and shipping costs. [4 marks]",
          hints: [
            "First limitation: cost-push inflation shifts `SRAS` leftwards — tightening `AD` only lowers `PL` by worsening unemployment/recession (stagflation trade-off).",
            "Second limitation: 12–18 month transmission lags (or unequal distributional hit on mortgaged households while global oil prices remain outside central-bank control).",
          ],
          modelAnswer:
            "First, **the stagflation output trade-off**: surging energy and freight expenses represent a negative supply shock shifting `SRAS` leftwards, which simultaneously raises prices and lowers Real GDP. Raising interest rates cannot lower global energy prices directly; it can only suppress `AD` leftwards (`C↓, I↓`), curbing inflation at the steep cost of pushing the economy deeper into recession and raising cyclical unemployment.\n\nSecond, **long and variable transmission lags**: base-rate hikes take 12–18 months to feed through fixed-rate mortgages and corporate refinancing. By the time tight credit fully slows domestic spending, global energy prices may already have normalised, meaning aggressive tightening risks causing an unnecessary economic slump and disproportionately hurting indebted middle- and lower-income households.",
          markScheme: [
            { point: "Identifies imported energy/shipping spike as cost-push inflation shifting `SRAS` leftwards.", keywords: ["supply shock", "sras"] },
            { point: "Explains that rate hikes suppress `AD`, curing inflation only by worsening recession / cyclical unemployment.", keywords: ["deeper into recession", "cyclical unemployment"] },
            { point: "Identifies 12–18 month monetary transmission lags.", keywords: ["12–18 months", "transmission lags"] },
            { point: "Explains risk of overshooting into an avoidable slump once external energy shocks fade (or unequal mortgage burden).", keywords: ["normalised", "unnecessary economic slump", "indebted"] },
          ],
        },
        {
          id: "3b-macro-policies-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "supply-side-policies",
          marks: 6,
          markbands: BANDS_6,
          question:
            "Examine why **cutting corporate profit taxes** and **privatising state utilities** can produce ambiguous outcomes for government finances and long-run economic welfare. [6 marks]",
          hints: [
            "For corporate tax cuts: examine potential investment/`LRAS` gains vs lost tax revenue, windfall share buybacks, and widening wealth inequality.",
            "For utility privatisation: examine one-off revenue & profit efficiency vs loss of recurring state profits and private natural-monopoly abuse without regulation.",
          ],
          modelAnswer:
            "Both corporate tax cuts and utility privatisation are market-based supply-side policies whose real-world outcomes hinge heavily on market structure and firm behaviour.\n\n**Corporate profit tax cuts** leave firms with higher retained earnings and a stronger post-tax return on investment, potentially stimulating capital accumulation (`I↑`), innovation, and a rightward shift in `LRAS` that could eventually broaden the tax base. However, government tax revenue falls immediately (widening the budget deficit), and if business confidence is weak firms may distribute tax savings as dividends or share buybacks rather than productive factories — raising wealth inequality with minimal long-run growth.\n\n**Privatising state utilities** generates immediate one-off proceeds to pay down public debt and introduces shareholder pressure to cut X-inefficiency. Yet the state forfeits any future stream of utility profits permanently, and because utilities like water and electricity grids are **natural monopolies**, transferring ownership without tough independent price regulation allows private owners to raise consumer tariffs (`P > MC`), reducing allocative efficiency and harming lower-income households.",
          markScheme: [
            { point: "Explains potential upside of corporate tax cuts (higher retained profits → `I↑`, innovation, `LRAS` right).", keywords: ["retained earnings", "capital accumulation"] },
            { point: "Identifies immediate fiscal revenue loss and risk that firms channel tax cuts into dividends/buybacks instead of investment.", keywords: ["share buybacks", "budget deficit", "dividends"] },
            { point: "Notes potential adverse wealth-inequality impact of corporate tax cuts.", keywords: ["wealth inequality"] },
            { point: "Explains short-term revenue windfall and X-efficiency incentive from privatising state enterprises.", keywords: ["one-off proceeds", "x-inefficiency"] },
            { point: "Notes long-run fiscal trade-off (forfeiting future utility profits permanently).", keywords: ["forfeits", "future stream"] },
            { point: "Explains natural-monopoly market failure risk (`P > MC`, higher bills for low-income households) without strict regulation.", keywords: ["natural monopolies", "price regulation", "allocative efficiency"] },
          ],
        },
        {
          id: "3b-macro-policies-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "fiscal-policy-budgets",
          marks: 8,
          markbands: BANDS_8,
          question:
            "**[Paper 2 Data-Response · 8 marks]** Country M currently records real GDP growth of 0.8%, unemployment of 7.8% (concentrated in former manufacturing towns), CPI inflation of 1.2%, a central bank base interest rate of 0.5%, and a Debt-to-GDP ratio of 54%. Using the data, discuss the relative effectiveness of **monetary policy** versus **fiscal policy** in reviving Country M's economy.",
          hints: [
            "Cite Country M's exact data: base rate is already `0.5%` (near the ZLB!), inflation is low (`1.2%`), Debt-to-GDP is moderate (`54%`), and unemployment (`7.8%`) is regionally concentrated.",
            "Evaluate why conventional monetary cuts have almost zero room left, whereas targeted fiscal capital/retraining spending addresses both deficient AD and regional structural joblessness.",
          ],
          modelAnswer:
            "Country M exhibits a clear deflationary gap with sluggish growth (0.8%), elevated unemployment (7.8%), and below-target inflation (1.2%).\n\n**Limits of monetary policy in Country M:** Because the central bank's base rate is already near the **zero lower bound** at `0.5%`, conventional interest-rate cuts have virtually no room remaining to stimulate `C`, `I`, or exchange-rate depreciation. While the central bank could launch Quantitative Easing (QE), weak confidence in depressed industrial regions means cheap credit is unlikely to reach displaced workers directly, and QE carries 12–18 month lags while risking inflated asset prices rather than regional job creation.\n\n**Strengths of expansionary fiscal policy in Country M:** With a manageable Debt-to-GDP ratio of `54%` and low inflation (`1.2%`), Country M possesses solid fiscal space to borrow cheaply with minimal crowding-out risk. Discretionary fiscal policy can directly inject `AD` (`G↑`) and be **geographically targeted** at the former manufacturing towns — funding shovel-ready transport infrastructure and vocational retraining programmes. This simultaneously reduces cyclical unemployment via the multiplier and tackles the **structural** skills mismatch lifting `LRAS`.\n\n**Constraints on fiscal policy & judgement:** Fiscal projects face legislative and construction delays, and prolonged deficits could eventually raise debt-servicing costs if growth fails to accelerate. Nonetheless, given the `0.5%` ZLB constraint and regional nature of Country M's 7.8% unemployment, **targeted expansionary fiscal policy** (supported by accommodative monetary policy to keep yields low) is markedly more effective than monetary policy alone.",
          markScheme: [
            { point: "Uses Country M data to diagnose weak demand / deflationary gap (0.8% growth, 7.8% unemployment, 1.2% inflation).", keywords: ["0.8%", "7.8%", "1.2%"] },
            { point: "Identifies `0.5%` base rate as near the zero lower bound, severely limiting conventional monetary cuts.", keywords: ["0.5%", "zero lower bound"] },
            { point: "Evaluates QE limitations (12–18 month lags, weak confidence, asset-price bias, poor regional targeting).", keywords: ["quantitative easing", "12–18 month", "asset prices"] },
            { point: "Uses moderate `54%` Debt-to-GDP and low inflation to show strong fiscal space and minimal crowding out.", keywords: ["54%", "fiscal space", "crowding-out"] },
            { point: "Explains direct `AD` injection (`G↑`) and geographical targeting of depressed manufacturing towns.", keywords: ["geographically targeted", "manufacturing towns"] },
            { point: "Highlights dual AD + LRAS payoff from pairing infrastructure and vocational retraining for structural joblessness.", keywords: ["vocational retraining", "skills mismatch", "lras"] },
            { point: "Acknowledges fiscal limitations (legislative/construction lags and potential future debt-servicing burden).", keywords: ["construction delays", "debt-servicing"] },
            { point: "Concludes with justified preference for targeted fiscal expansion backed by accommodative low interest rates.", keywords: ["accommodative", "markedly more effective"] },
          ],
        },
        {
          id: "3b-macro-policies-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "multiplier-crowding-out-hl",
          marks: 8,
          markbands: BANDS_8,
          question:
            "[HL] An economy with a Keynesian multiplier of `k = 2.5` is already operating at 98% of full-employment potential output (`Y_fe`). Evaluate the likely macroeconomic consequences of launching a `$20 billion` debt-financed fiscal expansion. [8 marks]",
          hints: [
            "Compute the naive multiplier projection (`2.5 × $20bn = $50bn`), then explain why actual Real GDP will rise by *far less* at 98% capacity!",
            "Weigh demand-pull inflation along the steep AS curve, severe Monetarist crowding out (`i↑ → I↓`), worsening current account (`MPM`), and whether capital spending might eventually ease capacity constraints.",
          ],
          modelAnswer:
            "On paper, a `$20 billion` fiscal injection multiplied by `k = 2.5` shifts Aggregate Demand rightwards by `$50 billion`. However, because the economy is already running at 98% of potential output (`Y_fe`), the actual gain in Real GDP will be dramatically smaller than `$50 billion`, and negative side effects will dominate.\n\nFirst, **severe demand-pull inflation**: at 98% capacity, the economy sits on the steep, near-vertical section of the Keynesian AS curve. Bidding for scarce skilled labour and materials drives wages and the average price level sharply upwards, eroding most of the nominal `$50 billion` AD boost into inflation rather than real output.\n\nSecond, **intense crowding out**: near full employment, private savings are already heavily utilised. Issuing `$20 billion` in sovereign bonds intensifies competition for loanable funds, spiking real interest rates and crowding out productive private investment (`I↓`) — potentially prompting the central bank to hike rates further to defend its inflation target, causing a fiscal–monetary clash.\n\nThird, **external and budgetary strain**: surging domestic demand pulls in higher imports (`MPM`), widening the current-account deficit, while adding unnecessary public debt during an already buoyant economy.\n\n**Counter-argument & judgement:** The only mitigating case is if the `$20 billion` consists strictly of high-return **capital expenditure** (such as easing critical port or grid bottlenecks) that shifts `LRAS` rightwards in the long run. Even then, because `LRAS` takes years to move while inflation hits immediately, a debt-financed expansion at 98% capacity is largely counterproductive and should be deferred or offset via tax rises.",
          markScheme: [
            { point: "Computes theoretical AD shift (`2.5 × $20bn = $50bn`).", keywords: ["$50 billion", "2.5"] },
            { point: "Identifies economy at 98% capacity as sitting on steep / near-vertical AS.", keywords: ["steep", "near-vertical"] },
            { point: "Explains severe demand-pull inflation absorbing nominal AD growth instead of raising Real GDP.", keywords: ["demand-pull inflation", "scarce skilled labour"] },
            { point: "Explains strong crowding-out effect near full employment (`i↑` displacing private `I↓`).", keywords: ["crowding out", "private investment"] },
            { point: "Notes risk of fiscal–monetary policy clash as central bank hikes rates to cool inflation.", keywords: ["fiscal–monetary clash", "inflation target"] },
            { point: "Identifies external deterioration via surging imports (`MPM`) widening current-account deficit.", keywords: ["current-account deficit", "imports"] },
            { point: "Weighs potential long-run mitigating case if spending funds bottleneck-easing capital infrastructure (`LRAS` right).", keywords: ["bottlenecks", "lras"] },
            { point: "Concludes policy is largely counterproductive in the short run and should be deferred or revenue-neutral.", keywords: ["counterproductive", "deferred"] },
          ],
        },
        {
          id: "3b-macro-policies-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Recommend",
          guideRef: "multiplier-crowding-out-hl",
          marks: 10,
          markbands: BANDS_10_P3,
          question:
            "**[HL Paper 3 · 10-Mark Policy Recommendation]** Examine the macroeconomic indicators for the **Republic of Solaria**: Real GDP = `$460bn`, Potential GDP (`Y_fe`) = `$520bn`, unemployment = `8.5%` (with high youth and displaced-manufacturing structural unemployment), CPI inflation = `0.8%`, central bank base rate = `0.25%`, Debt-to-GDP = `46%`, and marginal leakages `MPS = 0.15`, `MPT = 0.15`, `MPM = 0.20`. Using the data provided, **recommend** a macroeconomic policy to address Solaria's economic problems.",
          hints: [
            "Calculate Solaria's exact deflationary gap (`$60bn`), multiplier (`k = 1 / 0.50 = 2.0`), and exact required fiscal injection (`ΔG = $60bn / 2.0 = $30bn`)!",
            "Commit clearly to ONE primary policy (e.g. a `$30bn` targeted expansionary fiscal capital + retraining package) and justify why monetary policy is blocked at `0.25%` ZLB.",
            "Evaluate lags, rising Debt-to-GDP (from `46%` to ~`52%`, still sustainable), import leakage (`MPM = 0.20`), and stakeholder trade-offs.",
          ],
          modelAnswer:
            "**Policy Recommendation:** The government of Solaria should implement a **`$30 billion` discretionary expansionary fiscal package** focused on **public infrastructure investment and targeted STEM/vocational retraining** (an interventionist supply-side and demand-side blend).\n\n**Quantitative Diagnosis & Justification:** Solaria suffers a `$60 billion` deflationary gap (`$520bn − $460bn`), high unemployment (`8.5%`), and dangerously low inflation (`0.8%`). Summing marginal leakages gives `MPW = 0.15 + 0.15 + 0.20 = 0.50`, so the Keynesian spending multiplier is `k = 1 / 0.50 = 2.0`. Consequently, an initial injection of `ΔG = $60bn / 2.0 = $30 billion` is calibrated to close the entire output gap without overshooting into excessive inflation. Conventional monetary policy is virtually exhausted because Solaria's base rate is already pinned near the zero lower bound at `0.25%`, whereas Solaria's modest `46%` Debt-to-GDP ratio provides ample borrowing headroom.\n\n**Transmission Mechanism:** Spending `$30 billion` directly raises `G` and shifts `AD` rightwards along the flat/intermediate section of the Keynesian AS curve, triggering induced domestic consumption (`MPC = 0.50`) that reduces cyclical unemployment and nudges CPI back toward ~2%. Crucially, directing funds into vocational retraining and modern transport infrastructure simultaneously cures displaced-manufacturing **structural unemployment** and shifts `LRAS` rightwards in the long run, improving both growth and **equity** for unemployed youth.\n\n**Evaluation & Trade-Offs:** First, **time lags**: infrastructure tenders can take 18–24 months; Solaria should therefore front-load fast-disbursing retraining stipends and shovel-ready maintenance alongside multi-year capital projects. Second, **fiscal sustainability & import leakage**: borrowing `$30bn` raises nominal debt by roughly 6.5% of current GDP (lifting Debt-to-GDP toward ~52%, though higher GDP moderates the ratio), while `MPM = 0.20` means 20% of extra income leaks into imports, slightly weakening the current account. Third, **crowding-out risk** is minimal right now given idle capacity and `0.25%` rates, provided the central bank holds rates accommodative until recovery is secure. Overall, a calibrated `$30bn` capital-and-training fiscal expansion is the single most effective policy for Solaria's twin cyclical and structural challenges.",
          markScheme: [
            { point: "Commits clearly to one primary policy (calibrated expansionary fiscal package in infrastructure & retraining).", keywords: ["$30 billion", "vocational retraining", "infrastructure"] },
            { point: "Calculates exact deflationary gap (`$520bn − $460bn = $60bn`).", keywords: ["$60 billion", "deflationary gap"] },
            { point: "Calculates exact multiplier (`MPW = 0.50` → `k = 2.0`) and required injection (`ΔG = $30bn`).", keywords: ["0.50", "k = 1 / 0.50 = 2.0", "2.0"] },
            { point: "Justifies rejecting conventional monetary policy using the `0.25%` zero lower bound.", keywords: ["0.25%", "zero lower bound"] },
            { point: "Cites low `46%` Debt-to-GDP and `0.8%` CPI to confirm fiscal headroom and low inflation/crowding-out risk.", keywords: ["46%", "0.8%", "headroom"] },
            { point: "Explains dual transmission: short-run `AD` multiplier expansion + long-run `LRAS` shift reducing structural unemployment.", keywords: ["cyclical unemployment", "structural unemployment", "lras"] },
            { point: "Highlights equity gains for unemployed youth and displaced industrial workers.", keywords: ["equity", "youth"] },
            { point: "Evaluates implementation lags and proposes practical mitigation (front-loaded retraining/shovel-ready works).", keywords: ["18–24 months", "front-load", "shovel-ready"] },
            { point: "Evaluates budgetary debt increase (~52% Debt-to-GDP) and `MPM = 0.20` current-account import leakage.", keywords: ["52%", "current account", "leaks into imports"] },
            { point: "Addresses monetary coordination (keeping rates accommodative) and reaches a cohesive final verdict.", keywords: ["accommodative", "twin cyclical and structural"] },
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
      id: "3b-macro-policies-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] An open economy has a Keynesian spending multiplier of `k = 2.5`, a Marginal Propensity to Save (`MPS`) of `0.12`, and a Marginal Propensity to Tax (`MPT`) of `0.18`. Calculate its **Marginal Propensity to Import (`MPM`)** as a decimal.",
      answer: { type: "number", value: 0.1, tolerance: 0.005, display: "0.10" },
      traps: [
        { spec: { type: "number", value: 0.4 }, feedback: "0.40 is total leakages (`MPW = 1 / 2.5`) — now subtract `MPS` and `MPT` to isolate `MPM`." },
      ],
      hints: [
        "Rearrange `k = 1 / MPW` to find total leakages: `MPW = 1 / 2.5 = 0.40`.",
        "Subtract `MPS + MPT` (`0.12 + 0.18 = 0.30`) from `0.40`.",
      ],
      solution: [
        "{{MPW = 1 / k = 1 / 2.5 = 0.40}}.",
        "{{MPM = MPW - MPS - MPT = 0.40 - 0.12 - 0.18 = 0.10}}.",
      ],
    },
    {
      id: "3b-macro-policies-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] The government increases capital spending by `$25 billion` (`Round 1`) in an economy with `MPC = 0.80`. Calculate the **cumulative** increase in Real GDP after the **first three rounds** (`Round 1 + Round 2 + Round 3`, in $ billions).",
      answer: { type: "number", value: 61, display: "$61 billion" },
      traps: [
        { spec: { type: "number", value: 125 }, feedback: "$125 billion is the infinite sum across ALL rounds — sum only Rounds 1, 2, and 3." },
        { spec: { type: "number", value: 16 }, feedback: "$16 billion is Round 3 alone — add Round 1 ($25bn) + Round 2 ($20bn) + Round 3 ($16bn)." },
      ],
      hints: [
        "Round 1 = `$25bn`. Round 2 = `0.80 × 25 = $20bn`. Round 3 = `0.80 × 20 = $16bn`.",
        "Sum all three rounds together.",
      ],
      solution: [
        "Round 1 `= $25bn`.",
        "Round 2 `= 0.80 × $25bn = $20bn`.",
        "Round 3 `= 0.80 × $20bn = $16bn`.",
        "Cumulative total after 3 rounds `= 25 + 20 + 16 = $61 billion`.",
      ],
    },
    {
      id: "3b-macro-policies-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] An economy has a `$90 billion` deflationary gap. Initially `MPS = 0.10`, `MPT = 0.15`, and `MPM = 0.15`. After a tax reform lowers `MPT` to `0.10` and rising consumer confidence lowers `MPS` to `0.05` (with `MPM = 0.15` unchanged), calculate the exact new initial spending injection `ΔG` (in $ billions) required to close the `$90 billion` gap.",
      answer: { type: "number", value: 27, display: "$27 billion" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "$36 billion uses the *old* leakage rate (`0.40`). Recompute using the *new* leakages (`0.05 + 0.10 + 0.15 = 0.30`)." },
      ],
      hints: [
        "Find the new total marginal leakage: `MPW_new = 0.05 + 0.10 + 0.15 = 0.30`.",
        "Remember that `ΔG = Gap / k = Gap × MPW_new` — avoiding rounding `k = 3.333...` gives an exact integer!",
      ],
      solution: [
        "New total marginal leakages: {{MPW_new = 0.05 + 0.10 + 0.15 = 0.30}}.",
        "Exact multiplier: {{k = 1 / 0.30 = 10/3}}.",
        "Required injection: {{ΔG = 90 / (10/3) = 90 * 0.30 = $27 billion}}.",
      ],
    },
    {
      id: "3b-macro-policies-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "multiplier-crowding-out-hl",
      question:
        "[HL] An economy has `MPC = 0.75`. The government launches a `$20 billion` debt-financed infrastructure project (`ΔG = +$20bn`), but higher bond yields simultaneously crowd out `$6 billion` of autonomous private investment (`ΔI = −$6bn`). Calculate the **net** final increase in Real GDP (in $ billions), assuming prices remain constant.",
      answer: { type: "number", value: 56, display: "$56 billion" },
      traps: [
        { spec: { type: "number", value: 74 }, feedback: "Remember that the crowded-out `$6bn` of private investment ALSO undergoes the multiplier (`4 × −6 = −$24bn`), not just `−$6bn`!" },
        { spec: { type: "number", value: 80 }, feedback: "$80bn ignores the `$6bn` of crowded-out private investment." },
      ],
      hints: [
        "Compute the **net autonomous injection**: `ΔG + ΔI = $20bn − $6bn = $14bn`.",
        "Multiply the net injection by `k = 1 / (1 − 0.75) = 4`.",
      ],
      solution: [
        "Keynesian multiplier: {{k = 1 / (1 - 0.75) = 4}}.",
        "Net autonomous injection `= +$20bn − $6bn = +$14 billion`.",
        "Net final Real GDP gain `= 4 × $14bn = $56 billion` (crowding out reduced total expansion by `4 × $6bn = $24bn`).",
      ],
    },
    {
      id: "3b-macro-policies-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Examine",
      guideRef: "multiplier-crowding-out-hl",
      marks: 6,
      markbands: BANDS_6,
      question:
        "[HL] Examine why a `$10 billion` direct increase in government spending (`ΔG`) typically expands Real GDP by more than a `$10 billion` lump-sum cut in personal income taxes (`ΔT`), and identify **two** real-world factors that could narrow this difference. [6 marks]",
      hints: [
        "Trace Round 1 carefully: all `$10bn` of `ΔG` enters domestic output immediately, whereas only `MPC × $10bn` of a tax cut is spent in Round 1 (`(1 − MPC) × $10bn` leaks immediately!).",
        "Check real-world qualifiers: targeted tax cuts to low-income households (very high `MPC` near 1), implementation lags in `G`, or import-heavy government procurement.",
      ],
      modelAnswer:
        "With a direct `$10 billion` government spending injection (`ΔG`), the entire `$10 billion` purchases domestic goods and services in Round 1, generating a total expansion of `k × $10bn` (for example, if `MPC = 0.75` and `k = 4`, Real GDP rises by `$40bn`). By contrast, a `$10 billion` lump-sum personal tax cut first enters household disposable income, where `(1 − MPC) × $10bn` immediately leaks out into savings and imports before Round 1 spending even begins. Induced consumption in Round 1 is only `MPC × $10bn` (`$7.5bn` when `MPC = 0.75`), so total GDP rises by `k × MPC × $10bn = $30bn` — exactly `$10bn` less than direct spending.\n\nHowever, two real-world factors can narrow this gap. First, **targeting**: if the tax cut goes exclusively to credit-constrained low-income households whose `MPC` approaches 1.0, almost the entire tax cut is spent rapidly with minimal initial leakage. Second, **implementation speed and import content**: direct infrastructure projects suffer slow tendering lags and may rely heavily on imported machinery, whereas cutting payroll or VAT rates boosts household spending almost immediately.",
      markScheme: [
        { point: "Explains that 100% of direct `ΔG` enters domestic production in Round 1 (`k × $10bn`).", keywords: ["entire", "round 1", "k × $10bn"] },
        { point: "Explains that part of a tax cut (`(1 − MPC) × $10bn`) leaks immediately into savings/imports before Round 1.", keywords: ["disposable income", "leaks out", "before round 1"] },
        { point: "Illustrates or derives smaller total expansion (`k × MPC × $10bn`, e.g. `$30bn` vs `$40bn`).", keywords: ["$30bn", "$40bn", "mpc × $10bn"] },
        { point: "Qualifying factor 1: targeting tax cuts to low-income / credit-constrained households with very high `MPC`.", keywords: ["credit-constrained", "approaches 1.0"] },
        { point: "Qualifying factor 2: faster implementation speed of tax cuts versus slow public project tendering lags.", keywords: ["tendering lags", "almost immediately"] },
        { point: "Bonus/depth qualifier: high import content in government capital equipment reduces Round 1 domestic punch.", keywords: ["imported machinery", "narrow this gap"] },
      ],
    },
    {
      id: "3b-macro-policies-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "fiscal-policy-budgets",
      marks: 8,
      markbands: BANDS_8,
      question:
        "Evaluate the claim that aggressive **fiscal austerity** (sharp cuts in government spending and tax increases) is the most reliable way to lower a high **Debt-to-GDP ratio** during an economic downturn. [8 marks]",
      hints: [
        "Analyse the fraction `Debt / Nominal GDP`: austerity aims to shrink annual borrowing (numerator), reassure bond markets, and lower sovereign interest yields.",
        "Critique the **denominator trap**: in a downturn with a high multiplier and ZLB, sharp cuts in `G` shrink Nominal GDP faster than debt growth slows, while automatic stabilizers reduce tax receipts — potentially *raising* Debt-to-GDP!",
        "Contrast austerity with growth-oriented consolidation (gradual medium-term fiscal rules once recovery takes hold).",
      ],
      modelAnswer:
        "Proponents of fiscal austerity argue that cutting `G` and raising `T` immediately narrows the annual budget deficit, slowing the growth of the numerator (`National Debt`). For highly indebted countries facing surging sovereign bond yields and investor panic, credible deficit reduction can restore bond-market confidence, lower borrowing costs, and prevent a sovereign debt crisis — potentially even encouraging private investment ('expansionary fiscal contraction').\n\nHowever, during an economic downturn, aggressive austerity often **backfires** because it attacks the denominator (`Nominal GDP`). When monetary policy is stuck near the zero lower bound and spare capacity is wide, the Keynesian multiplier is high: slashing `G` and raising `T` causes a severe leftward shift in `AD`, deepening recession and shrinking nominal GDP. Simultaneously, automatic stabilizers reduce tax revenues and raise unemployment benefit outlays, offsetting much of the intended deficit cut. As experienced in Greece and parts of Southern Europe after 2010, nominal GDP fell proportionally faster than debt slowed, causing the Debt-to-GDP ratio to **rise** sharply while inflicting severe **equity** and human-capital hysteresis costs.\n\n**Judgement:** Aggressive front-loaded austerity is rarely reliable during a downturn unless a country has lost bond-market access completely. A more durable strategy pairs short-run support for productive growth during slumps with credible, gradual fiscal consolidation once the economy approaches full employment and monetary policy can cushion tightening.",
      markScheme: [
        { point: "Explains fiscal rationale: cutting `G` and raising `T` reduces annual deficit, slowing debt accumulation (numerator).", keywords: ["numerator", "slowing the growth"] },
        { point: "Notes bond-market credibility benefit: reassuring lenders can lower sovereign bond yields and avert debt crisis.", keywords: ["bond-market confidence", "sovereign debt crisis"] },
        { point: "Identifies the denominator trap: sharp fiscal contraction shrinks `AD` and Nominal GDP when multipliers are high.", keywords: ["denominator", "leftward shift in ad"] },
        { point: "Notes zero lower bound prevents central bank rate cuts from offsetting fiscal austerity.", keywords: ["zero lower bound", "multiplier is high"] },
        { point: "Explains counteracting automatic stabilizers (falling tax receipts and rising unemployment claims erode deficit savings).", keywords: ["automatic stabilizers", "offsetting"] },
        { point: "Cites real-world evidence (e.g. post-2010 Greece / Southern Europe) where Debt-to-GDP rose despite harsh cuts.", keywords: ["greece", "southern europe", "2010"] },
        { point: "Evaluates long-run human-capital hysteresis and equity damage from deep social/capital spending cuts.", keywords: ["hysteresis", "equity"] },
        { point: "Reaches balanced judgement favouring growth-supporting recovery first and gradual consolidation near full employment.", keywords: ["front-loaded", "gradual fiscal consolidation"] },
      ],
    },
    {
      id: "3b-macro-policies-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Recommend",
      guideRef: "supply-side-policies",
      marks: 10,
      markbands: BANDS_10_P3,
      question:
        "**[HL Paper 3 · 10-Mark Policy Recommendation]** The **Republic of Veridia** faces stagflation and weak competitiveness: CPI inflation is `7.4%` (driven largely by a 40% spike in imported fossil-fuel energy), Real GDP growth is `0.3%`, unemployment is `6.8%`, the central bank base rate is `4.75%`, Debt-to-GDP is `88%`, and `k = 2.0`. Using the quantitative data provided, **recommend** a macroeconomic policy strategy for Veridia.",
      hints: [
        "Diagnose Veridia accurately: cost-push stagflation (`7.4%` CPI + `0.3%` stagnant growth + `6.8%` joblessness) AND severely constrained fiscal space (`88%` Debt-to-GDP)!",
        "Explain why pure demand-side policy is trapped (expanding `AD` worsens `7.4%` inflation; aggressive rate hikes above `4.75%` tip `0.3%` growth into deep recession).",
        "Recommend a **targeted supply-side energy & productivity reform** (e.g. market-based deregulation of clean-energy permitting + revenue-neutral targeted green-energy/efficiency incentives), evaluating lags, equity for vulnerable energy users, and central-bank credibility.",
      ],
      modelAnswer:
        "**Policy Recommendation:** Veridia should pursue a **revenue-neutral supply-side energy and competition reform** — combining rapid **deregulation of domestic renewable-energy permitting and grid access** with **targeted reallocation of existing fossil-fuel subsidies into energy-efficiency and vocational retraining** — while keeping monetary policy firmly anchored rather than hiking aggressively.\n\n**Data-Driven Diagnosis:** Veridia suffers textbook **cost-push stagflation**: `7.4%` CPI inflation triggered by a `40%` imported fuel shock alongside near-zero growth (`0.3%`) and `6.8%` unemployment (`SRAS` shifted left). Pure demand-side options are severely constrained. Debt-financed fiscal expansion (amplified by `k = 2.0`) would intensify `7.4%` inflation and destabilise Veridia's already elevated `88%` Debt-to-GDP ratio via rising bond yields and crowding out. Conversely, hiking the `4.75%` base rate aggressively would tip `0.3%` growth into a deep recession and push unemployment well above `6.8%`.\n\n**Transmission Mechanism:** Deregulating renewable licensing and opening electricity generation to private competition lowers entry barriers without worsening Veridia's `88%` debt ratio, expanding domestic clean-energy supply and shifting `SRAS` and `LRAS` rightwards over time. Redirecting existing fiscal expenditure into industrial efficiency upgrades and worker retraining reduces structural import vulnerability and unit energy costs, simultaneously cooling inflation and reviving Real GDP growth.\n\n**Evaluation & Trade-Offs:** First, **short-run vs long-run time lags**: renewable plants and grid upgrades take 2–5 years to shift `LRAS`, meaning inflation will not drop overnight. Second, **short-run equity protection**: during the transition, low-income households facing `7.4%` inflation and high utility bills need temporary, targeted energy rebates funded by windfall profits or spending reallocation so the budget stays neutral. Third, **regulatory vigilance & monetary expectations**: fast-track deregulation must preserve environmental and safety standards, while the central bank should maintain its `4.75%` stance (anchoring inflation expectations so wage–price spirals do not embed `7.4%` inflation permanently). Overall, revenue-neutral supply-side reform is the only strategy that resolves Veridia's stagflation without triggering either a debt crisis or a severe recession.",
      markScheme: [
        { point: "Commits to one cohesive strategy (revenue-neutral supply-side energy deregulation + targeted reallocation).", keywords: ["revenue-neutral", "deregulation", "reallocation"] },
        { point: "Diagnoses cost-push stagflation using Veridia data (`7.4%` CPI, `40%` fuel spike, `0.3%` growth, `6.8%` unemployment).", keywords: ["7.4%", "0.3%", "6.8%", "stagflation"] },
        { point: "Rejects debt-financed fiscal expansion citing `88%` Debt-to-GDP, crowding out, and `k = 2.0` inflation amplification.", keywords: ["88%", "k = 2.0", "crowding out"] },
        { point: "Explains why aggressive monetary tightening above `4.75%` risks tipping `0.3%` growth into deep recession.", keywords: ["4.75%", "deep recession"] },
        { point: "Explains market-based permitting deregulation expanding clean-energy supply without adding public debt.", keywords: ["entry barriers", "clean-energy supply"] },
        { point: "Explains rightward `SRAS`/`LRAS` shift reducing unit energy costs, cooling inflation and lifting growth simultaneously.", keywords: ["sras", "lras", "unit energy costs"] },
        { point: "Evaluates 2–5 year supply-side time lags during which inflation persists.", keywords: ["2–5 years", "not drop overnight"] },
        { point: "Addresses short-run equity via temporary targeted utility rebates for low-income households funded neutrally.", keywords: ["utility bills", "energy rebates", "low-income"] },
        { point: "Notes regulatory safeguards (preventing environmental/safety lapses) and anchoring monetary expectations against wage–price spirals.", keywords: ["wage–price spirals", "safety standards"] },
        { point: "Delivers clear final synthesis avoiding both sovereign debt stress and recession.", keywords: ["debt crisis", "resolves veridia"] },
      ],
    },
    {
      id: "3b-macro-policies-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "supply-side-policies",
      marks: 15,
      markbands: BANDS_15_P1B,
      question:
        "**[Paper 1 Part (b) · 15 marks]** Using **real-world examples**, to what extent should governments rely on a **combination of demand-side and supply-side policies** rather than a single macroeconomic policy to achieve low unemployment, low inflation, and sustained economic growth?",
      hints: [
        "Structure around the core macroeconomic reality: every single policy hits binding constraints (monetary ZLB/lags; fiscal debt/crowding out/political lags; supply-side 5–15 yr lags & zero short-run recession cure).",
        "Demonstrate how coordinated mixes work in practice across concrete real-world cases (COVID-19 US CARES Act + Fed QE; Singapore SkillsFuture + MAS exchange-rate band; UK 2022 Mini-Budget as a warning of *uncoordinated* clashes!).",
        "Evaluate when a single policy *can* temporarily lead (mild cyclical fine-tuning via central-bank rate tweaks) before reaching an authoritative 'to a very large extent' synthesis.",
      ],
      modelAnswer:
        "Achieving low unemployment, low and stable inflation, and sustained growth simultaneously is rarely possible with any single macroeconomic instrument because each policy operates on a different time horizon and faces distinct structural limits. To a **very large extent**, therefore, governments achieve superior macroeconomic stability through a **coordinated mix of demand-side and supply-side policies**, though a single tool can occasionally lead during mild, isolated shocks.\n\n**Why single demand-side policies are insufficient:** Expansionary **monetary policy** can quickly fine-tune mild cyclical dips, yet in deep recessions it collides with the **zero lower bound** and depressed confidence — as shown by the **Bank of Japan's** decade of near-zero rates and Quantitative Easing that struggled to ignite robust spending. Conversely, expansionary **fiscal policy** directly injects `AD` during liquidity traps (such as the **2020 US CARES Act** and **UK Furlough Scheme** preventing mass insolvency during COVID-19), yet prolonged deficits raise Debt-to-GDP ratios, risk crowding out near full employment, and suffer parliamentary delays. Crucially, *neither* demand-side tool can push Real GDP sustainably past `Y_fe` without triggering demand-pull inflation, nor can they resolve cost-push stagflation painlessly.\n\n**Why single supply-side policies are insufficient:** Both market-based reforms (e.g. **Germany's Hartz labour reforms**) and interventionist investments (e.g. **Singapore's SkillsFuture** and Tuas Port infrastructure) shift `LRAS` rightwards, raising potential output and lowering structural unemployment without inflation. Yet supply-side policies suffer **5–15 year time lags**, carry heavy fiscal costs (interventionist) or equity/environmental risks (market-based), and fail to lift actual output in a deep Keynesian recession where `AD` lies on the horizontal AS section.\n\n**Power of a coordinated policy mix:** Combining policies lets each tool cover the others' weaknesses. During the 2020 recession, pairing emergency fiscal transfers with accommodative central-bank QE kept sovereign borrowing yields low (preventing crowding out) while sustaining household incomes. Over the long term, **Singapore** pairs credible exchange-rate monetary discipline via MAS (anchoring low imported inflation) with interventionist human-capital and infrastructure upgrades (`LRAS` right) and open pro-competition markets — delivering sustained growth and low unemployment together.\n\n**Risks of an uncoordinated mix & when one tool suffices:** Mixing policies works *only* if they are properly coordinated. The **UK September 2022 'Mini-Budget'** demonstrated the danger of policy conflict: unfunded expansionary tax cuts collided directly with the Bank of England's contractionary rate hikes during 9%+ inflation, triggering a bond-market rout and mortgage spike. Conversely, during a small, temporary demand blip inside normal business cycles (when inflation is near 2% and `Y ≈ Y_fe`), incremental base-rate adjustments by an independent central bank are often sufficient on their own without slow fiscal legislation.\n\n**Conclusion:** While independent monetary policy can effectively manage minor short-run fluctuations alone, achieving all three macroeconomic objectives over time depends **to a very large extent** on a carefully coordinated blend: demand-side policies to stabilise the short-run business cycle and protect jobs, paired with equitable, sustainable supply-side investments to expand long-run `LRAS`.",
      markScheme: [
        { point: "Establishes explicit judgement ('to a very large extent') grounded in different time horizons and policy constraints.", keywords: ["very large extent", "time horizon"] },
        { point: "Evaluates monetary-policy limits in deep slumps (ZLB, confidence) with real-world example (e.g. Bank of Japan).", keywords: ["zero lower bound", "bank of japan"] },
        { point: "Evaluates fiscal strength in liquidity traps with real-world example (e.g. 2020 US CARES Act / UK Furlough).", keywords: ["cares act", "furlough"] },
        { point: "Evaluates fiscal limits (Debt-to-GDP, crowding out, parliamentary lags).", keywords: ["crowding out", "parliamentary delays"] },
        { point: "Notes structural ceiling of demand-side policies: cannot grow past `Y_fe` without inflation or solve stagflation.", keywords: ["y_fe", "stagflation"] },
        { point: "Explains supply-side long-run strength (`LRAS` right, lower structural unemployment) with real-world example (e.g. Hartz / SkillsFuture).", keywords: ["hartz", "skillsfuture", "lras"] },
        { point: "Evaluates supply-side limits: 5–15 year lags, fiscal cost, equity/sustainability risks, and ineffectiveness in deep Keynesian slumps.", keywords: ["5–15 year", "horizontal as section"] },
        { point: "Explains synergy in recessions: accommodative monetary policy keeps yields low so fiscal stimulus avoids crowding out.", keywords: ["cover the others", "yields low"] },
        { point: "Illustrates long-run multi-policy synergy with concrete real-world model (e.g. Singapore MAS + SkillsFuture + open markets).", keywords: ["singapore", "mas", "imported inflation"] },
        { point: "Warns that policy mixes require coordination, illustrated by UK September 2022 'Mini-Budget' fiscal–monetary clash.", keywords: ["mini-budget", "2022", "policy conflict"] },
        { point: "Evaluates bond-market rout / mortgage impact when fiscal and monetary stances pull in opposite directions.", keywords: ["bond-market rout", "mortgage spike"] },
        { point: "Concedes nuance: single-tool monetary fine-tuning suffices for mild, isolated short-run cyclical blips.", keywords: ["minor short-run", "normal business cycles", "incremental base-rate"] },
        { point: "Addresses equity and sustainability dimensions alongside growth, jobs, and inflation.", keywords: ["equitable", "sustainable"] },
        { point: "Integrates accurate AD/AS conceptual logic throughout (`AD`, `LRAS`, `Y_fe`, horizontal AS).", keywords: ["potential output", "structural unemployment"] },
        { point: "Delivers authoritative concluding synthesis linking short-run stabilisation with long-run capacity expansion.", keywords: ["conclusion", "carefully coordinated blend"] },
      ],
    },
  ],
};
