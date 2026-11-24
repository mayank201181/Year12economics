import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER 1: CORE MONETARY & FISCAL POLICY (SL & HL)
  // answerIndex spread: 0×4, 1×4, 2×4, 3×3
  // ===========================================================================
  {
    id: "3b-macro-policies-m1",
    title: "Paper 1 · Monetary Policy, Central Banking & Fiscal Budgets",
    level: "SL",
    questions: [
      {
        id: "3b-macro-policies-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "monetary-policy-banking",
        question:
          "Which macroeconomic institution is primarily responsible for setting base interest rates and maintaining price stability through inflation targeting?",
        options: [
          "An independent national central bank",
          "The elected national finance ministry",
          "Private commercial retail banks",
          "The World Trade Organization secretariat",
        ],
        answerIndex: 0,
        hints: [
          "Distinguish monetary policy (interest rates and money supply) from fiscal policy (taxes and government spending).",
          "In modern economies, this institution operates independently of day-to-day electoral politics.",
        ],
        explanation:
          "An independent national central bank (such as the Federal Reserve or Bank of England) conducts monetary policy by setting policy interest rates and pursuing inflation targets. The finance ministry conducts fiscal policy, commercial banks are profit-seeking lenders, and the WTO oversees international trade rules.",
      },
      {
        id: "3b-macro-policies-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "monetary-policy-banking",
        question:
          "When a central bank lowers its base interest rate during a slowdown, how does the exchange-rate transmission channel affect Aggregate Demand, ceteris paribus?",
        options: [
          "Foreign capital inflows strengthen the currency, raising import volumes and lowering AD",
          "Domestic savers buy more government bonds, cutting export supply and lowering AD",
          "Hot-money outflows depreciate the currency, making exports cheaper and raising net exports",
          "Higher export tariffs offset cheaper domestic loans, leaving net exports completely unchanged",
        ],
        answerIndex: 2,
        hints: [
          "Think about what international financial investors ('hot money') do when domestic interest rates fall relative to foreign rates.",
          "Trace the chain: lower domestic rate → capital outflow → weaker exchange rate → effect on `(X − M)`.",
        ],
        explanation:
          "Lower domestic interest rates make domestic savings less attractive to international investors, triggering hot-money outflows that depreciate the domestic currency. Depreciation makes exports cheaper in foreign currencies and imports costlier domestically, boosting `(X − M)` and shifting `AD` rightwards.",
      },
      {
        id: "3b-macro-policies-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "monetary-policy-banking",
        question:
          "Why is operational independence from elected politicians widely regarded as a major strength of modern central banks?",
        options: [
          "It allows central banks to eliminate all transmission time lags in the economy",
          "It prevents governments from keeping interest rates artificially low before elections",
          "It guarantees that nominal interest rates can never reach the zero lower bound",
          "It enables central banks to set progressive personal income tax brackets directly",
        ],
        answerIndex: 1,
        hints: [
          "Consider the political business cycle: why might a politician dislike raising interest rates right before a general election?",
          "Independent central banks can take unpopular anti-inflation decisions, building long-term credibility.",
        ],
        explanation:
          "Elected politicians face strong pressure to keep interest rates low ahead of elections to stimulate short-term growth and employment, risking higher inflation later. Operational independence insulates rate-setting from electoral interference and anchors inflation expectations. Transmission lags and the zero lower bound still remain constraints.",
      },
      {
        id: "3b-macro-policies-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "monetary-policy-banking",
        question:
          "If a country's central bank holds the nominal policy interest rate at 3.0% while annual CPI inflation rises to 5.5%, what is the approximate real interest rate?",
        options: [
          "+8.5% per year",
          "+2.5% per year",
          "−1.8% per year",
          "−2.5% per year",
        ],
        answerIndex: 3,
        hints: [
          "Use the Fisher approximation linking nominal interest rates, inflation, and real interest rates.",
          "Subtract the inflation rate from the nominal interest rate: `3.0% − 5.5%`.",
        ],
        explanation:
          "The approximate real interest rate equals `nominal interest rate − inflation rate = 3.0% − 5.5% = −2.5%`. Adding the two figures (`+8.5%`) or reversing the subtraction (`+2.5%`) gives the wrong sign and misstates the true purchasing-power cost of borrowing.",
      },
      {
        id: "3b-macro-policies-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] In the Money Market diagram, what is the immediate effect of the central bank selling government bonds to commercial banks via open-market operations?",
        options: [
          "The vertical money supply curve shifts leftwards and the equilibrium interest rate rises",
          "The vertical money supply curve shifts rightwards and the equilibrium interest rate falls",
          "The downward-sloping money demand curve shifts rightwards and the interest rate falls",
          "Both money supply and money demand shift rightwards, leaving the interest rate unchanged",
        ],
        answerIndex: 0,
        hints: [
          "When the central bank *sells* bonds, commercial banks pay for them using reserves — does money in the banking system rise or fall?",
          "A contraction in bank reserves shifts vertical `M_s` to the left along downward-sloping `M_d`.",
        ],
        explanation:
          "Selling government bonds drains reserves from commercial banks, shifting the vertical money supply curve (`M_s`) leftwards. At the original interest rate there is excess demand for money, driving the equilibrium interest rate upwards (contractionary monetary policy). Buying bonds — not selling them — shifts `M_s` rightwards.",
      },
      {
        id: "3b-macro-policies-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Describe",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] Which statement most accurately describes Quantitative Easing (QE) when nominal base interest rates are constrained by the zero lower bound?",
        options: [
          "The government cuts income taxes and mails rebate cheques directly to households",
          "The central bank creates electronic reserves to buy long-term bonds and lower long-term yields",
          "Commercial banks raise their statutory minimum reserve ratios to curb risky private lending",
          "The central bank sells foreign currency reserves to appreciate the domestic exchange rate",
        ],
        answerIndex: 1,
        hints: [
          "QE is an unconventional *monetary* tool run by the central bank, not a fiscal policy.",
          "Think about which assets the central bank purchases and what happens to bond prices and long-term yields.",
        ],
        explanation:
          "Under Quantitative Easing, the central bank creates electronic reserves to purchase large quantities of long-term government and corporate bonds from financial institutions. Higher demand bids up bond prices, lowers long-term yields, boosts asset prices, and encourages lending. Tax rebates are fiscal policy, not QE.",
      },
      {
        id: "3b-macro-policies-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] A central bank buys $25 million of government bonds from commercial banks when the minimum reserve ratio is 10%. Assuming banks lend all excess reserves with no cash drain, what is the maximum total expansion in the money supply?",
        options: [
          "$2.5 million",
          "$27.5 million",
          "$250 million",
          "$2,500 million",
        ],
        answerIndex: 2,
        hints: [
          "First find the theoretical credit (money) multiplier using `1 / minimum reserve ratio`.",
          "With `r = 0.10`, the credit multiplier is `1 / 0.10 = 10`. Multiply this by `$25 million`.",
        ],
        explanation:
          "The theoretical money multiplier is `1 / r = 1 / 0.10 = 10`. Multiplying the $25 million reserve injection by 10 yields a maximum money-supply expansion of `$250 million`. Multiplying `$25 million` by `0.10` gives `$2.5 million`, which is merely the first round's required reserve.",
      },
      {
        id: "3b-macro-policies-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "monetary-policy-banking",
        question:
          "Why is expansionary monetary policy often ineffective during a severe recession characterised by very low business and consumer confidence?",
        options: [
          "Households and firms remain reluctant to borrow and spend even when interest rates are near zero",
          "Lower interest rates automatically force the government to cut public capital expenditure",
          "Commercial banks are legally prohibited from issuing loans whenever CPI inflation is below 2%",
          "Cutting interest rates causes rapid currency appreciation that immediately collapses export sales",
        ],
        answerIndex: 0,
        hints: [
          "Think of the classic phrase 'pushing on a string': a central bank can make credit cheap, but can it *force* borrowing?",
          "Consider how expectations of falling sales or job losses affect investment (`I`) and consumption (`C`).",
        ],
        explanation:
          "If firms expect weak demand and households fear job losses, cheap credit alone will not persuade them to take on new debt — a core Keynesian critique of monetary policy in deep slumps. Lower rates actually tend to depreciate (not appreciate) the currency, and banks are not barred from lending when inflation is low.",
      },
      {
        id: "3b-macro-policies-m1-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "fiscal-policy-budgets",
        question:
          "Which government spending item is classified as **capital expenditure** rather than current expenditure or transfer payments?",
        options: [
          "Monthly salary payments to public-school teachers",
          "Weekly unemployment insurance benefits for jobseekers",
          "Annual interest payments on existing sovereign bonds",
          "Construction of a new high-speed intercity rail network",
        ],
        answerIndex: 3,
        hints: [
          "Capital expenditure creates durable physical or productive assets that expand future `LRAS`.",
          "Salaries are recurring current expenditure, while unemployment benefits are transfer payments.",
        ],
        explanation:
          "Building a high-speed rail network is **capital expenditure** because it creates a long-lived productive asset that increases both short-run `AD` and long-run `LRAS`. Teacher salaries and debt servicing are current outlays, while unemployment benefits are transfer payments.",
      },
      {
        id: "3b-macro-policies-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "fiscal-policy-budgets",
        question:
          "Why are government transfer payments such as state pensions and unemployment benefits excluded from the `G` component of `GDP = C + I + G + (X − M)`?",
        options: [
          "They are funded exclusively by private commercial banks rather than taxpayers",
          "They redistribute income without any direct exchange for newly produced goods or services",
          "They are always spent on imported goods and therefore cancel out inside net exports",
          "They represent capital depreciation rather than active public-sector cash outflows",
        ],
        answerIndex: 1,
        hints: [
          "Recall what GDP measures: the value of *newly produced* final goods and services in a given period.",
          "How do transfer payments eventually enter `AD` once households receive them?",
        ],
        explanation:
          "Transfer payments shift purchasing power from taxpayers to recipients without the government purchasing newly produced output in return, so counting them in `G` and again when spent in `C` would double-count GDP. Instead, transfers affect `AD` indirectly by boosting household consumption (`C`).",
      },
      {
        id: "3b-macro-policies-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "fiscal-policy-budgets",
        question:
          "A government reduces its annual budget deficit from $80 billion last year to $35 billion this year. What happens to the country's national debt over this year, ceteris paribus?",
        options: [
          "National debt falls by $45 billion because the deficit was more than halved",
          "National debt stays completely unchanged until the budget reaches zero balance",
          "National debt still rises by $35 billion, though at a slower annual rate than before",
          "National debt falls by $35 billion because tax revenue now exceeds total spending",
        ],
        answerIndex: 2,
        hints: [
          "Remember the flow vs stock distinction: a budget deficit is an annual flow, whereas national debt is a cumulative stock.",
          "Whenever `G > T` (any deficit above zero), does the government have to borrow *more* money this year?",
        ],
        explanation:
          "Because the government still spends $35 billion more than it collects in tax revenue, it must borrow an additional $35 billion, increasing the cumulative stock of national debt by $35 billion (at a slower pace than last year's $80 billion jump). National debt only falls in dollar terms when the government runs a budget *surplus*.",
      },
      {
        id: "3b-macro-policies-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fiscal-policy-budgets",
        question:
          "In a fiscal year, a government collects $310 billion in revenue, spends $355 billion, and the economy's nominal GDP is $900 billion. What is the budget balance as a percentage of GDP?",
        options: [
          "A budget surplus of 5.0% of GDP",
          "A budget deficit of 3.5% of GDP",
          "A budget surplus of 4.5% of GDP",
          "A budget deficit of 5.0% of GDP",
        ],
        answerIndex: 3,
        hints: [
          "Compute `Budget Balance = Revenue − Expenditure = $310bn − $355bn`.",
          "Divide the $45bn shortfall by nominal GDP ($900bn) and multiply by 100%.",
        ],
        explanation:
          "Since expenditure ($355bn) exceeds revenue ($310bn), there is a budget deficit of `$45 billion`. Expressed relative to nominal GDP, `(45 / 900) × 100% = 5.0%` of GDP. Reversing the sign wrongly calls a deficit a surplus.",
      },
      {
        id: "3b-macro-policies-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "fiscal-policy-budgets",
        question:
          "How do **automatic stabilizers** dampen an economic boom without requiring any new parliamentary legislation?",
        options: [
          "Progressive tax receipts rise faster than incomes while unemployment benefit outlays fall automatically",
          "Central banks automatically raise reserve requirements whenever real GDP grows above 3% per year",
          "Parliament passes emergency consumption taxes and cancels capital projects within one week",
          "Corporate subsidies expand automatically as unemployment falls, boosting aggregate supply",
        ],
        answerIndex: 0,
        hints: [
          "Think of the two classic automatic stabilizers: progressive income taxes and unemployment benefits.",
          "In a boom, incomes rise and unemployment falls — what happens automatically to `T` and welfare transfers?",
        ],
        explanation:
          "During a boom, rising incomes push earners into higher progressive tax brackets ('fiscal drag'), while falling unemployment reduces welfare outlays. Both automatically reduce household disposable income relative to gross output, restraining `C` and dampening inflationary pressure with zero legislative delay.",
      },
      {
        id: "3b-macro-policies-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "fiscal-policy-budgets",
        question:
          "Compared with monetary policy, what is a key comparative **strength** of discretionary fiscal policy during a deep recession?",
        options: [
          "Fiscal changes can be reversed overnight by an independent committee without parliamentary votes",
          "Fiscal expansion eliminates national debt automatically by lowering sovereign borrowing costs",
          "Direct government spending injects demand immediately even when interest rates are stuck near zero",
          "Fiscal policy avoids all recognition and implementation lags across infrastructure projects",
        ],
        answerIndex: 2,
        hints: [
          "Think about what happens in a liquidity trap / zero lower bound when monetary policy stalls.",
          "Unlike monetary policy, which relies on private willingness to borrow, government expenditure (`G`) enters `AD` directly.",
        ],
        explanation:
          "In a severe slump where interest rates hit the zero lower bound and private confidence collapses, direct government spending (`G↑`) and targeted transfers to high-MPC households inject Aggregate Demand directly. Monetary policy — not fiscal policy — enjoys faster overnight flexibility and political independence.",
      },
      {
        id: "3b-macro-policies-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "fiscal-policy-budgets",
        question:
          "Why might a discretionary cut in personal income tax fail to deliver a strong recovery in Aggregate Demand during a severe economic downturn?",
        options: [
          "Lower income taxes automatically push the central bank to raise base interest rates sharply",
          "Anxious households may save much of their tax windfall or pay down debt rather than spend it",
          "Personal income tax cuts always shift the LRAS curve leftwards by reducing labour incentives",
          "Lower income taxes legally require governments to cut unemployment benefits by an equal amount",
        ],
        answerIndex: 1,
        hints: [
          "Think about how weak consumer confidence alters the marginal propensity to save (`MPS`) vs consume (`MPC`).",
          "If families worry about future layoffs, do they spend every extra dollar of disposable income?",
        ],
        explanation:
          "When consumer confidence is depressed, households often treat income tax cuts cautiously — raising precautionary savings (`MPS↑`) or repaying existing debts rather than spending on domestic goods. That is why direct government spending (`G↑`) or transfers to cash-constrained low-income households often pack a stronger punch in recessions.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 2: KEYNESIAN MULTIPLIER [HL], CROWDING OUT & SUPPLY-SIDE POLICIES
  // answerIndex spread: 0×4, 1×4, 2×3, 3×4
  // ===========================================================================
  {
    id: "3b-macro-policies-m2",
    title: "Paper 2 · Multiplier [HL], Crowding Out & Supply-Side Reforms",
    level: "SL",
    questions: [
      {
        id: "3b-macro-policies-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] In an open economy with a government sector, `MPS = 0.10`, `MPT = 0.20`, and `MPM = 0.10`. What is the value of the Marginal Propensity to Consume domestically (`MPC`)?",
        options: [
          "0.40",
          "0.60",
          "0.70",
          "0.90",
        ],
        answerIndex: 1,
        hints: [
          "Use the fundamental identity: `MPC + MPS + MPT + MPM = 1`.",
          "Add all three leakages first (`0.10 + 0.20 + 0.10 = 0.40`), then subtract from `1`.",
        ],
        explanation:
          "Total marginal leakages (`MPW`) equal `0.10 + 0.20 + 0.10 = 0.40`. Since `MPC + MPW = 1`, `MPC = 1 − 0.40 = 0.60`. Choosing `0.40` confuses the total leakage rate (`MPW`) with `MPC`.",
      },
      {
        id: "3b-macro-policies-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] An economy has a Marginal Propensity to Consume domestically (`MPC`) of `0.75`. What is the value of its Keynesian spending multiplier (`k`)?",
        options: [
          "0.75",
          "1.33",
          "3.00",
          "4.00",
        ],
        answerIndex: 3,
        hints: [
          "Recall the Keynesian multiplier formula: `k = 1 / (1 − MPC)`.",
          "Be careful not to compute `1 / MPC`! Divide `1` by `1 − 0.75 = 0.25`.",
        ],
        explanation:
          "Using `k = 1 / (1 − MPC) = 1 / (1 − 0.75) = 1 / 0.25 = 4.00`. The common trap `1.33` comes from erroneously dividing `1` by `MPC` (`1 / 0.75`) instead of `1 − MPC`.",
      },
      {
        id: "3b-macro-policies-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] An economy operating with substantial spare capacity has `MPS = 0.15`, `MPT = 0.25`, and `MPM = 0.10`. If autonomous export spending rises by $14 billion, what is the maximum resulting increase in Real GDP?",
        options: [
          "$28 billion",
          "$14 billion",
          "$21 billion",
          "$70 billion",
        ],
        answerIndex: 0,
        hints: [
          "Sum the three leakages: `MPW = MPS + MPT + MPM`.",
          "Compute `k = 1 / MPW`, then calculate `ΔReal GDP = k × ΔX`.",
        ],
        explanation:
          "`MPW = 0.15 + 0.25 + 0.10 = 0.50`, giving a Keynesian multiplier of `k = 1 / 0.50 = 2`. An autonomous export injection of `$14 billion` therefore generates `2 × $14 billion = $28 billion` in final Real GDP. Forgetting `MPT` and `MPM` wrongly inflates the multiplier.",
      },
      {
        id: "3b-macro-policies-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] An economy faces a deflationary gap of $120 billion and has `MPC = 0.80`. Assuming constant prices on the flat Keynesian AS section and no crowding out, what initial increase in government spending (`ΔG`) closes the gap exactly?",
        options: [
          "$120 billion",
          "$96 billion",
          "$24 billion",
          "$15 billion",
        ],
        answerIndex: 2,
        hints: [
          "First find the multiplier `k = 1 / (1 − 0.80)`.",
          "Divide the $120 billion deflationary gap by `k` so you do not overshoot full employment.",
        ],
        explanation:
          "With `MPC = 0.80`, the multiplier is `k = 1 / 0.20 = 5`. To lift Real GDP by `$120 billion`, the government needs an initial injection of `ΔG = $120bn / 5 = $24 billion`. Spending `$120bn` directly would create `$600bn` of demand and ignite severe inflation.",
      },
      {
        id: "3b-macro-policies-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Which mechanism best explains how the **crowding-out effect** reduces the effectiveness of deficit-financed expansionary fiscal policy?",
        options: [
          "Higher tax rates shrink disposable income and lower household consumption automatically",
          "Central banks reduce reserve requirements, causing commercial banks to stop issuing mortgages",
          "Rising domestic imports immediately lower domestic interest rates and reduce private saving",
          "Higher government borrowing raises real interest rates, discouraging private investment and consumption",
        ],
        answerIndex: 3,
        hints: [
          "Trace what happens in the loanable funds market when the government sells bonds to finance a larger budget deficit.",
          "What happens to interest rates (`i`), and how does private investment (`I`) respond?",
        ],
        explanation:
          "To finance deficit spending, the government borrows more in the loanable funds market, pushing up real interest rates. Higher borrowing costs make private investment projects less profitable (`I↓`) and deter interest-sensitive consumption (`C↓`), partially or completely offsetting the fiscal stimulus.",
      },
      {
        id: "3b-macro-policies-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Country A and Country B both have `MPS = 0.10` and `MPT = 0.10`, but Country A is a small open economy with `MPM = 0.30` while Country B has `MPM = 0.10`. How do their Keynesian multipliers compare?",
        options: [
          "Country A has a smaller multiplier (2.0) than Country B (3.33) because more income leaks into imports",
          "Country A has a larger multiplier (5.0) than Country B (3.33) because open trade expands domestic spending",
          "Both economies share an identical multiplier (5.0) because imports do not affect domestic consumption",
          "Country B has a smaller multiplier (2.0) than Country A (3.33) because lower imports reduce tax revenues",
        ],
        answerIndex: 0,
        hints: [
          "Compute `MPW = MPS + MPT + MPM` for both countries separately.",
          "Remember that a larger leakage denominator produces a *smaller* multiplier `k = 1 / MPW`.",
        ],
        explanation:
          "For Country A, `MPW = 0.10 + 0.10 + 0.30 = 0.50`, so `k = 1 / 0.50 = 2.0`. For Country B, `MPW = 0.10 + 0.10 + 0.10 = 0.30`, so `k = 1 / 0.30 ≈ 3.33`. Small open economies with high import propensities experience faster circular-flow leakage and smaller fiscal multipliers.",
      },
      {
        id: "3b-macro-policies-m2-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Why do Keynesian economists argue that crowding out is minimal — and may even reverse into 'crowding in' — during a deep recession?",
        options: [
          "Governments always finance recessionary deficits solely by raising corporate tax rates",
          "Idle savings keep interest rates low while stronger demand revives business confidence and private investment",
          "The vertical Monetarist LRAS curve shifts instantaneously rightwards whenever deficits grow",
          "Private firms are legally required to match every dollar of public infrastructure expenditure",
        ],
        answerIndex: 1,
        hints: [
          "Compare borrowing conditions when an economy is at full employment versus when banks hold abundant idle funds.",
          "Think about how rising sales and optimism ('animal spirits') affect firms' willingness to invest (`I`).",
        ],
        explanation:
          "In a deep slump, private credit demand is depressed and idle savings are plentiful, so public borrowing barely pushes up interest rates. Meanwhile, rising orders and stronger consumer spending restore business confidence, encouraging firms to increase private investment ('crowding in').",
      },
      {
        id: "3b-macro-policies-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Even without crowding out, why does a fiscal injection of `ΔG` increase **Real GDP** by *less* than `k × ΔG` when the economy operates on the upward-sloping section of the Keynesian AS curve?",
        options: [
          "Because the marginal propensity to consume drops immediately to zero above full employment",
          "Because commercial banks automatically raise minimum reserve ratios as output climbs",
          "Because tax revenues decline whenever nominal national income expands",
          "Because rising resource bottlenecks push up the average price level, absorbing part of the AD increase",
        ],
        answerIndex: 3,
        hints: [
          "Look at an AD/AS diagram when `AD` shifts right along an upward-sloping `AS` curve.",
          "Does all of the horizontal shift in `AD` turn into Real GDP, or does some turn into higher prices?",
        ],
        explanation:
          "As spare capacity shrinks along the upward-sloping AS curve, bidding for scarce labour and inputs pushes up the average price level. Because part of the nominal AD shift (`k × ΔG`) is absorbed by inflation, the actual gain in Real GDP is smaller than `k × ΔG`.",
      },
      {
        id: "3b-macro-policies-m2-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "supply-side-policies",
        question:
          "Which macroeconomic outcome is the primary long-run goal of shifting the Long-Run Aggregate Supply (`LRAS`) curve rightwards?",
        options: [
          "Raising short-run consumer borrowing to eliminate a temporary cyclical slump",
          "Increasing tariff barriers to shield domestic producers from foreign rivals",
          "Achieving non-inflationary potential output growth and a lower natural rate of unemployment",
          "Maintaining a permanently balanced government budget regardless of the business cycle",
        ],
        answerIndex: 2,
        hints: [
          "Trace the Monetarist AD/LRAS diagram when `LRAS₁` shifts right to `LRAS₂`.",
          "What happens simultaneously to potential Real GDP (`Y_p`) and the average price level (`PL`)?",
        ],
        explanation:
          "Shifting `LRAS` rightwards raises potential output (`Y_p1 → Y_p2`), exerts downward pressure on the average price level (`PL₁ → PL₂`), and lowers structural and frictional unemployment (`NRU`), generating sustainable non-inflationary growth.",
      },
      {
        id: "3b-macro-policies-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "supply-side-policies",
        question:
          "Which pair consists **exclusively** of **market-based** supply-side policies?",
        options: [
          "Deregulating telecom licensing and reducing personal income tax rates",
          "Funding public vocational colleges and privatising the state railway",
          "Expanding public R&D grants and building high-speed rail networks",
          "Subsidising rural healthcare clinics and strengthening anti-monopoly laws",
        ],
        answerIndex: 0,
        hints: [
          "Market-based policies reduce state intervention (deregulation, privatisation, trade liberalisation, labour-market reforms, direct tax cuts).",
          "Check each pair carefully to eliminate any option containing public spending on education, healthcare, R&D, or infrastructure.",
        ],
        explanation:
          "Deregulation (encouraging competition) and cutting personal income taxes (strengthening work incentives) are both classic market-based supply-side measures. Public colleges, R&D grants, high-speed rail, and healthcare clinics are interventionist supply-side policies.",
      },
      {
        id: "3b-macro-policies-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "supply-side-policies",
        question:
          "Which government initiative is an **interventionist** supply-side policy targeted specifically at reducing **structural unemployment**?",
        options: [
          "Lowering the statutory national minimum wage to reduce firm payroll costs",
          "Funding national STEM retraining and vocational apprenticeship schemes for displaced workers",
          "Selling state-owned ports to private equity investors to sharpen profit incentives",
          "Abolishing licensing rules and environmental permits for manufacturing startups",
        ],
        answerIndex: 1,
        hints: [
          "Structural unemployment arises from skills mismatches when industries decline or automate.",
          "Choose the policy involving active public investment in human capital rather than deregulation or wage cuts.",
        ],
        explanation:
          "Publicly funded retraining and apprenticeship programmes are interventionist human-capital investments that directly close skills mismatches, improving occupational mobility and lowering structural unemployment. Lowering minimum wages, privatisation, and deregulation are market-based reforms.",
      },
      {
        id: "3b-macro-policies-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "supply-side-policies",
        question:
          "A government invests $30 billion in upgrading national fibre broadband and clean-energy electricity grids. How does this policy affect `AD` and `LRAS` over time?",
        options: [
          "It shifts `LRAS` leftwards in the short run and shifts `AD` leftwards in the long run",
          "It shifts `LRAS` rightwards immediately while leaving `AD` completely unaffected in both periods",
          "It shifts `AD` rightwards in the short run via `G↑` and shifts `LRAS` rightwards in the long run",
          "It shifts `AD` leftwards in the short run due to construction delays and never changes `LRAS`",
        ],
        answerIndex: 2,
        hints: [
          "Remember the dual effect of interventionist capital expenditure!",
          "Which curve moves first while engineers and builders are paid, and which curve moves once firms use cheaper energy and faster internet?",
        ],
        explanation:
          "Public infrastructure investment raises `G` immediately during construction, shifting `AD` rightwards in the short run. Once completed, faster broadband and cheaper, reliable energy lower production costs across the economy, shifting `LRAS` rightwards in the long run.",
      },
      {
        id: "3b-macro-policies-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "supply-side-policies",
        question:
          "Which limitation is most commonly associated with **market-based labour-market reforms** such as cutting unemployment benefits, reducing union power, and lowering minimum wages?",
        options: [
          "Massive increases in public capital expenditure that double the national debt",
          "Immediate hyperinflation caused by an abrupt leftward shift of the LRAS curve",
          "Complete elimination of private-sector profit incentives across manufacturing",
          "Worsening income inequality, reduced job security, and higher risk of working poverty",
        ],
        answerIndex: 3,
        hints: [
          "Evaluate market-based labour reforms through the IB Key Concept of **Equity**.",
          "Who bears the immediate cost when welfare support, union bargaining power, and wage floors are cut?",
        ],
        explanation:
          "While market-based labour reforms can increase wage flexibility and reduce firms' labour costs, they often weaken worker bargaining power, cut social safety nets, and widen the Gini coefficient — creating a classic efficiency-versus-equity trade-off.",
      },
      {
        id: "3b-macro-policies-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "supply-side-policies",
        question:
          "Why does privatising a state-owned natural monopoly (such as water distribution pipes) often fail to achieve allocative efficiency unless paired with strict regulation?",
        options: [
          "Private shareholders automatically lower prices below marginal cost to maximise market share",
          "Without competition, the private firm can exploit monopoly power to raise prices and restrict output",
          "Privatisation immediately eliminates all economies of scale in utility infrastructure",
          "Private firms are banned from investing in new capital equipment under competition law",
        ],
        answerIndex: 1,
        hints: [
          "Recall from Unit 2B what happens when a single profit-maximising firm controls an essential service with huge barriers to entry.",
          "Does changing ownership from public to private automatically create rival competitors in a natural monopoly?",
        ],
        explanation:
          "Because duplicating water pipes or power grids is inefficient, privatising a natural monopoly simply swaps a public monopoly for a private one. Without price caps or an independent regulator, the private monopolist restricts output and charges `P > MC`, causing allocative inefficiency and hurting low-income consumers.",
      },
      {
        id: "3b-macro-policies-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "supply-side-policies",
        question:
          "Using the Keynesian AD/AS model, why is a pure market-based supply-side policy (such as deregulation) ineffective on its own at curing a deep recession?",
        options: [
          "Expanding full-employment capacity when AD lies on the horizontal AS section does not raise actual Real GDP",
          "Deregulation always raises firms' unit production costs and shifts the Keynesian AS curve upwards",
          "Keynesian theory assumes that labour productivity can never rise in response to private investment",
          "Deregulation forces the central bank to hike interest rates sharply to prevent currency depreciation",
        ],
        answerIndex: 0,
        hints: [
          "Picture the Keynesian AS curve with `AD₁` intersecting way back on the flat horizontal recession section.",
          "If the vertical `Y_fe` wall shifts further right while `AD₁` stays put, what happens to equilibrium output `Y₁`?",
        ],
        explanation:
          "In a deep Keynesian recession with abundant idle factories and unemployed workers, actual output is constrained by deficient Aggregate Demand — not productive capacity. Shifting `Y_fe` further right leaves equilibrium Real GDP (`Y₁`) stuck unchanged unless demand-side stimulus also shifts `AD` rightwards.",
      },
    ],
  },

  // ===========================================================================
  // PAPER 3: APPLIED POLICY MIX, TRADE-OFFS & HL QUANTITATIVE SYNTHESIS
  // answerIndex spread: 0×3, 1×4, 2×4, 3×4
  // ===========================================================================
  {
    id: "3b-macro-policies-m3",
    title: "Paper 3 · Policy Mixes, Trade-Offs & HL Quantitative Synthesis",
    level: "HL",
    questions: [
      {
        id: "3b-macro-policies-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "monetary-policy-banking",
        question:
          "An economy is hit by a severe oil-price shock that creates **stagflation** (rising cost-push inflation alongside rising unemployment). Why do demand-side policies face a painful dilemma?",
        options: [
          "Contractionary policies always raise inflation further, while expansionary policies eliminate unemployment instantly",
          "Central banks are legally barred from changing interest rates during supply-side price shocks",
          "Tightening AD curbs inflation only by worsening unemployment, whereas boosting AD cuts unemployment by worsening inflation",
          "Demand-side policies shift LRAS immediately to the left whenever energy prices rise",
        ],
        answerIndex: 2,
        hints: [
          "Sketch a leftward shift of `SRAS` creating both higher `PL` and lower Real GDP.",
          "Now test shifting `AD` left versus shifting `AD` right — can either shift fix *both* problems at once?",
        ],
        explanation:
          "Stagflation combines higher inflation with falling output. Tightening `AD` (via higher interest rates or fiscal austerity) fights inflation only by pushing Real GDP down further, whereas stimulating `AD` lowers unemployment at the cost of even faster inflation. Supply-side reforms are needed to shift `SRAS`/`LRAS` back rightwards.",
      },
      {
        id: "3b-macro-policies-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "fiscal-policy-budgets",
        question:
          "In September 2022, the UK government announced large unfunded tax cuts while CPI inflation exceeded 9% and the Bank of England was raising interest rates. What macroeconomic problem did this policy clash illustrate?",
        options: [
          "Expansionary fiscal policy conflicted with contractionary monetary policy, driving up bond yields and mortgage rates",
          "Contractionary fiscal policy reinforced Quantitative Easing, driving inflation rapidly below zero",
          "Automatic stabilizers failed because progressive income tax brackets were abolished overnight",
          "Expansionary monetary policy crowded out public infrastructure investment during full employment",
        ],
        answerIndex: 0,
        hints: [
          "Were fiscal policy (unfunded tax cuts) and monetary policy (rate hikes) pulling `AD` in the same direction or opposite directions?",
          "Think about how bond investors reacted to sudden extra government borrowing during high inflation.",
        ],
        explanation:
          "Unfunded tax cuts were strongly expansionary at a moment of high inflation, clashing directly with the Bank of England's contractionary rate hikes. Investors demanded sharply higher yields on UK government bonds (gilts), raising mortgage costs and illustrating real-world financial crowding out and poor fiscal–monetary coordination.",
      },
      {
        id: "3b-macro-policies-m3-q03",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] The government increases capital spending by `$20 billion` (`Round 1`) in an economy with `MPC = 0.60`. What is the induced domestic consumption occurring specifically in **Round 3** of the multiplier cascade?",
        options: [
          "$12.0 billion",
          "$50.0 billion",
          "$4.32 billion",
          "$7.2 billion",
        ],
        answerIndex: 3,
        hints: [
          "Round 1 is `$20bn`. Round 2 is `MPC × $20bn`.",
          "Round 3 is `MPC × Round 2 = 0.60 × $12bn`.",
        ],
        explanation:
          "Round 1 adds `$20bn` (`ΔG`). Round 2 induced domestic consumption is `0.60 × $20bn = $12.0bn`. Round 3 induced domestic consumption is `0.60 × $12.0bn = $7.2 billion`. (`$50bn` is the infinite sum across all rounds, and `$4.32bn` is Round 4.)",
      },
      {
        id: "3b-macro-policies-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] Which unwanted side effect is most frequently cited when evaluating prolonged Quantitative Easing (QE) by central banks such as the Federal Reserve and Bank of England?",
        options: [
          "Sharp increases in statutory corporate tax rates that discourage technological innovation",
          "Rising equity and housing prices that disproportionately benefit wealthier asset owners, widening wealth inequality",
          "Immediate collapse of commercial bank reserves below statutory minimum requirements",
          "Chronic currency appreciation that eliminates manufacturing export competitiveness",
        ],
        answerIndex: 1,
        hints: [
          "QE pushes up prices of financial assets like bonds, shares, and property via portfolio rebalancing.",
          "Which households own the bulk of shares and real estate — low-income renters or wealthy asset holders?",
        ],
        explanation:
          "By bidding up bond prices and lowering yields, QE encourages investors to shift into equities and real estate, inflating asset values. Because wealthier households own a far larger share of financial and property assets, prolonged QE can worsen **wealth inequality** (an equity trade-off).",
      },
      {
        id: "3b-macro-policies-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "supply-side-policies",
        question:
          "A finance minister must choose between cutting the top marginal income tax rate (market-based) and funding public preschool and STEM vocational training (interventionist). Which comparison is most accurate?",
        options: [
          "Tax cuts improve income equity more rapidly, whereas education spending lowers short-run AD",
          "Education spending has zero fiscal cost, whereas cutting income taxes takes 15 years to affect AD",
          "Education spending promotes equity and boosts short-run AD via `G`, but has high fiscal costs and long LRAS lags",
          "Both policies leave the government budget balance unchanged while shifting LRAS rightwards within one quarter",
        ],
        answerIndex: 2,
        hints: [
          "Compare both policies across four criteria: equity, short-run AD impact, fiscal cost, and LRAS time lag.",
          "Education lifts human capital across lower-income families (`equity↑`) and adds to `G`, yet takes many years to raise productivity.",
        ],
        explanation:
          "Public preschool and STEM training are pro-equity and immediately boost `AD` via `G↑`, but impose heavy budgetary/opportunity costs and take years to expand `LRAS`. Top-rate income tax cuts also boost `AD` quickly and carry revenue costs, yet tend to widen income inequality.",
      },
      {
        id: "3b-macro-policies-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] If a central bank cuts the statutory minimum reserve ratio from 20% to 10%, how does the theoretical commercial-bank credit (money) multiplier change?",
        options: [
          "It halves from 10 to 5",
          "It falls from 20 to 10",
          "It rises from 2 to 10",
          "It doubles from 5 to 10",
        ],
        answerIndex: 3,
        hints: [
          "Use the money multiplier formula `1 / r` with `r` written as a decimal (`0.20` and `0.10`).",
          "Compare `1 / 0.20` before the cut with `1 / 0.10` after the cut.",
        ],
        explanation:
          "At a 20% reserve ratio (`0.20`), the theoretical credit multiplier is `1 / 0.20 = 5`. Cutting the ratio to 10% (`0.10`) raises the multiplier to `1 / 0.10 = 10` — doubling the theoretical lending capacity per dollar of central-bank reserves.",
      },
      {
        id: "3b-macro-policies-m3-q07",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Why does a $15 billion increase in direct government infrastructure spending (`ΔG`) typically generate a **larger** total rise in Real GDP than a $15 billion lump-sum income tax cut (`ΔT`)?",
        options: [
          "Because the multiplier `k` cannot be calculated for tax cuts in open economies",
          "Because all $15 billion of `ΔG` enters domestic spending in Round 1, whereas part of a tax cut leaks into savings and imports immediately",
          "Because lump-sum tax cuts force the central bank to sell government bonds immediately",
          "Because government spending carries zero import content while tax cuts are spent 100% on imports",
        ],
        answerIndex: 1,
        hints: [
          "Compare Round 1 of each policy carefully!",
          "With `ΔG = $15bn`, Round 1 spending is `$15bn`. With a `$15bn` tax cut, households only consume `MPC × $15bn` in Round 1.",
        ],
        explanation:
          "Direct government spending injects the entire `$15 billion` into domestic production in Round 1 (`ΔY = k × ΔG`). By contrast, when households receive a `$15 billion` tax cut, they immediately leak `(1 − MPC) × $15bn` into savings and imports before Round 1 spending even begins (`ΔC₁ = MPC × $15bn`), resulting in a smaller total expansion.",
      },
      {
        id: "3b-macro-policies-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "monetary-policy-banking",
        question:
          "Why is an economy's central bank often cautious about hiking interest rates too aggressively to fight inflation?",
        options: [
          "Because monetary transmission lags of 12–18 months mean excessive hikes can accidentally trigger a deep recession later",
          "Because raising interest rates causes the domestic currency to depreciate rapidly, worsening imported inflation",
          "Because higher interest rates directly increase transfer payments and automatically expand the money supply",
          "Because higher interest rates eliminate automatic stabilizers such as progressive income taxation",
        ],
        answerIndex: 0,
        hints: [
          "Think about the 'long and variable lags' of monetary policy.",
          "If a rate hike made today takes 12–18 months to hit mortgage resets and investment plans, what happens if the central bank keeps hiking based only on today's inflation?",
        ],
        explanation:
          "Because base-rate hikes take 12–18 months to feed fully through fixed-rate mortgages, corporate refinancing, and wage negotiations, aggressive tightening risks overshooting and tipping the economy into an avoidable recession months later. Higher rates appreciate (not depreciate) the currency.",
      },
      {
        id: "3b-macro-policies-m3-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "fiscal-policy-budgets",
        question:
          "At the start of a year, a country's national debt is $600 billion and nominal GDP is $1,000 billion (Debt-to-GDP = 60%). During the year, the government runs a $50 billion budget deficit while nominal GDP grows by 10% to $1,100 billion. What happens to the Debt-to-GDP ratio?",
        options: [
          "It rises to 65.0% because any budget deficit always raises Debt-to-GDP",
          "It stays unchanged at exactly 60.0% because the deficit equals 5% of initial GDP",
          "It falls slightly to approximately 59.1% because nominal GDP grew faster than the stock of debt",
          "It falls sharply to 50.0% because economic growth automatically cancels existing sovereign bonds",
        ],
        answerIndex: 2,
        hints: [
          "Find the new National Debt: `$600bn + $50bn = $650bn`.",
          "Compute the new Debt-to-GDP ratio: `(650 / 1100) × 100%` and compare it to 60.0%.",
        ],
        explanation:
          "New national debt is `$650 billion` (up 8.33%), while nominal GDP grew 10% to `$1,100 billion`. Therefore Debt-to-GDP `= (650 / 1100) × 100% ≈ 59.1%`, falling below 60%! This proves an essential fiscal-sustainability insight: modest deficits can coexist with a falling Debt-to-GDP ratio when economic growth outpaces debt growth.",
      },
      {
        id: "3b-macro-policies-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "supply-side-policies",
        question:
          "Which macroeconomic policy combination best tackles **both** an urgent deep recession today *and* weak long-run productivity growth over the next decade?",
        options: [
          "Contractionary monetary policy paired with higher corporate profit taxes",
          "Strict fiscal austerity paired with higher statutory minimum reserve ratios",
          "Cutting public infrastructure spending while raising tariffs on imported machinery",
          "Expansionary demand-side stimulus paired with targeted capital investment in infrastructure and training",
        ],
        answerIndex: 3,
        hints: [
          "An urgent recession needs immediate `AD` support; weak productivity needs rightward `LRAS` shifts.",
          "Look for a policy mix that delivers both short-run demand recovery and long-run supply expansion.",
        ],
        explanation:
          "Pairing expansionary demand-side support with public investment in infrastructure and training lifts `AD` immediately to reduce cyclical unemployment while building the physical and human capital that shifts `LRAS` rightwards over the long run. Austerity or rate hikes would deepen the recession.",
      },
      {
        id: "3b-macro-policies-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] Suppose households respond to heightened economic uncertainty by increasing their Marginal Propensity to Save (`MPS`) from `0.10` to `0.25`, while `MPT = 0.15` and `MPM = 0.10` remain unchanged. How does the Keynesian multiplier change?",
        options: [
          "It rises from 2.00 to 2.86 because higher savings fund greater bank lending",
          "It falls from 2.86 to 2.00 because a larger fraction of income leaks out each round",
          "It remains unchanged at 2.50 because only taxes and imports count as withdrawals",
          "It falls from 4.00 to 1.67 because `MPC` rises when savings increase",
        ],
        answerIndex: 1,
        hints: [
          "Calculate `MPW₁ = 0.10 + 0.15 + 0.10 = 0.35`, then `k₁ = 1 / 0.35`.",
          "Now calculate `MPW₂ = 0.25 + 0.15 + 0.10 = 0.50`, then `k₂ = 1 / 0.50`.",
        ],
        explanation:
          "Initially `MPW = 0.35`, so `k = 1 / 0.35 ≈ 2.86`. When `MPS` rises to `0.25`, `MPW` rises to `0.50`, shrinking the multiplier to `k = 1 / 0.50 = 2.00`. Higher precautionary saving accelerates leakages from the circular flow and weakens fiscal stimulus (the Keynesian 'paradox of thrift').",
      },
      {
        id: "3b-macro-policies-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "multiplier-crowding-out-hl",
        question:
          "[HL] An economy's actual Real GDP is `$520 billion` while full-employment Real GDP (`Y_fe`) is `$600 billion`. Given `MPS = 0.10`, `MPT = 0.15`, and `MPM = 0.15`, what initial injection `ΔG` is required to close the deflationary gap?",
        options: [
          "$32 billion",
          "$40 billion",
          "$80 billion",
          "$200 billion",
        ],
        answerIndex: 0,
        hints: [
          "First compute the deflationary gap: `$600bn − $520bn = $80bn`.",
          "Next find `k = 1 / (0.10 + 0.15 + 0.15) = 1 / 0.40 = 2.5`, then divide the gap by `k`.",
        ],
        explanation:
          "The deflationary gap is `$80 billion`, and total leakages are `MPW = 0.10 + 0.15 + 0.15 = 0.40`, giving `k = 1 / 0.40 = 2.5`. Dividing the gap by the multiplier yields `ΔG = $80bn / 2.5 = $32 billion`. Multiplying `80 × 2.5 = $200bn` applies the multiplier in reverse.",
      },
      {
        id: "3b-macro-policies-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "supply-side-policies",
        question:
          "Why can excessive **deregulation** in financial or environmental sectors undermine long-term economic well-being despite lowering short-run business compliance costs?",
        options: [
          "Deregulation permanently shifts the AD curve leftwards by raising direct income taxes",
          "Deregulation forces governments to nationalise private banks and energy firms",
          "Weak oversight can encourage negative externalities, pollution, or systemic financial crises",
          "Deregulation eliminates international trade by raising tariffs on imported components",
        ],
        answerIndex: 2,
        hints: [
          "Recall the 2008 Global Financial Crisis and industrial pollution externalities.",
          "Evaluate deregulation through the IB Key Concepts of **Sustainability** and **Market Failure**.",
        ],
        explanation:
          "Removing vital prudential or environmental regulations reduces short-term compliance costs for firms, but can trigger severe market failures — such as reckless bank risk-taking (2008 financial crisis), workplace safety abuses, or unchecked carbon emissions — damaging long-term sustainability and well-being.",
      },
      {
        id: "3b-macro-policies-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "monetary-policy-banking",
        question:
          "[HL] Why does commercial-bank credit creation in the real world almost always expand the money supply by **less** than the theoretical formula `Initial Reserve Injection × (1 / r)`?",
        options: [
          "Because central banks forbid commercial banks from lending to private corporations",
          "Because the minimum reserve ratio `r` is always greater than 1.0 in modern economies",
          "Because households spend 100% of every bank loan on government sovereign bonds",
          "Because households hold physical cash outside banks and banks often keep voluntary excess reserves",
        ],
        answerIndex: 3,
        hints: [
          "Think about the strict assumptions behind `1 / r`: zero cash drain, zero excess reserves, and infinite willing creditworthy borrowers.",
          "If people withdraw cash or banks hold extra liquidity during uncertainty, less gets re-lent each round.",
        ],
        explanation:
          "The formula `1 / r` assumes every dollar lent is re-deposited into banks and fully re-lent. In reality, cash withdrawals by households (cash drain), precautionary excess reserves held by cautious banks, and limited demand from creditworthy borrowers all reduce actual money creation below the theoretical maximum.",
      },
      {
        id: "3b-macro-policies-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "fiscal-policy-budgets",
        question:
          "A government slashes spending and hikes taxes sharply during a recession in order to lower its Debt-to-GDP ratio ('austerity'). Under what condition might this policy perversely cause the Debt-to-GDP ratio to **rise** instead?",
        options: [
          "If lower taxes cause the central bank to immediately ban commercial bank lending",
          "If sharp fiscal contraction shrinks nominal GDP proportionally faster than it slows debt growth",
          "If automatic stabilizers increase government tax revenues during a severe recession",
          "If austerity immediately shifts the LRAS curve rightwards and eliminates all structural unemployment",
        ],
        answerIndex: 1,
        hints: [
          "Look at the fraction `Debt / Nominal GDP`: austerity tries to slow the numerator (`Debt`), but what can it accidentally do to the denominator (`Nominal GDP`)?",
          "Recall how a large Keynesian multiplier magnifies cuts in `G` during a slump.",
        ],
        explanation:
          "In a deep recession where the fiscal multiplier is large, aggressive cuts in `G` and tax hikes can contract `AD` and shrink nominal GDP sharply (reducing the denominator of `Debt / GDP`) while simultaneously lowering tax revenues via automatic stabilizers — causing the Debt-to-GDP ratio to rise, as seen in parts of Southern Europe after 2010.",
      },
    ],
  },
];
