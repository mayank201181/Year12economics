import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: MEASURING MACRO ACTIVITY & AD/AS MODELS (15 Qs)
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives-m1",
    title: "MCQ Paper 1 · Measuring Macro Activity & AD/AS Models",
    questions: [
      {
        id: "3a-macro-activity-objectives-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "measuring-macro-activity",
        question:
          "Which transaction is **excluded** when calculating a country's Gross Domestic Product (GDP) using the expenditure approach?",
        options: [
          "State unemployment benefits paid by the government to jobless workers",
          "Construction of a new public hospital funded by the central government",
          "Purchase of new automated machinery by a domestic car manufacturer",
          "Sale of domestically grown coffee beans to cafes in an overseas country",
        ],
        answerIndex: 0,
        explanation:
          "Unemployment benefits are **transfer payments** — they redistribute income without any current good or service being produced in exchange, so they are excluded from G in GDP. Public hospital construction (G), new machinery (I), and coffee exports (X) all represent newly produced domestic final output.",
        hints: [
          "GDP counts only spending on newly produced final goods and services.",
          "Check which item redistributes money without creating new current output.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-macro-activity",
        question:
          "An economy records the following annual figures (in $ billions): Consumption = 340, Investment = 85, Government purchases of goods and services = 115, State pension transfers = 30, Exports = 90, Imports = 110. What is the economy's **GDP**?",
        options: [
          "$500 billion",
          "$550 billion",
          "$520 billion",
          "$740 billion",
        ],
        answerIndex: 2,
        explanation:
          "Using GDP = C + I + G + (X − M) and excluding pension transfers: 340 + 85 + 115 + (90 − 110) = 540 − 20 = **$520 billion**. Including the $30 billion transfer payment wrongly yields $550 billion, and adding imports instead of subtracting them wrongly yields $740 billion.",
        hints: [
          "Recall the expenditure identity: GDP = C + I + G + (X − M).",
          "Exclude transfer payments (pensions) and remember that net exports (X − M) can be negative.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-macro-activity",
        question:
          "Country A's Gross Domestic Product (GDP) is $640 billion. Foreign multinational firms operating inside Country A repatriate $55 billion in profits to their home nations, while Country A's residents earn $20 billion in factor income from overseas investments. What is Country A's **Gross National Income (GNI)**?",
        options: [
          "$675 billion",
          "$605 billion",
          "$585 billion",
          "$715 billion",
        ],
        answerIndex: 1,
        explanation:
          "Net property income from abroad = factor income earned overseas ($20 bn) − factor income sent abroad ($55 bn) = −$35 bn. Therefore GNI = GDP + Net Property Income from Abroad = 640 − 35 = **$605 billion**. Adding $35 bn instead of subtracting yields the trap $675 billion.",
        hints: [
          "GNI = GDP + (income earned by residents abroad − income earned by foreigners domestically).",
          "Calculate net property income from abroad carefully: +20 − 55.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "measuring-macro-activity",
        question:
          "Over one year, Country B's Nominal GDP increases by **9.0%**, its GDP deflator rises from **100 to 109**, and its total population grows by **2.0%**. What happens to Country B's Real GDP and Real GDP per capita?",
        options: [
          "Real GDP rises by 9.0% while Real GDP per capita rises by 7.0%",
          "Real GDP rises by 2.0% while Real GDP per capita stays constant",
          "Real GDP falls by 2.0% while Real GDP per capita stays constant",
          "Real GDP stays constant while Real GDP per capita falls slightly",
        ],
        answerIndex: 3,
        explanation:
          "Because the GDP deflator rose by 9.0% (100 → 109), matching the 9.0% rise in Nominal GDP, **Real GDP stays constant** (0% real growth). Dividing unchanged real output across a 2.0% larger population causes **Real GDP per capita to fall** by approximately 2.0%.",
        hints: [
          "Compare the percentage change in Nominal GDP with the percentage change in the GDP deflator.",
          "If real output is flat while population grows, what must happen to output per person?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-macro-activity",
        question:
          "In 2025, an economy's Nominal GDP is **$560 billion** and its GDP deflator (base year = 100) is **112**. What is its **Real GDP** in constant base-year prices?",
        options: [
          "$448 billion",
          "$627 billion",
          "$500 billion",
          "$490 billion",
        ],
        answerIndex: 2,
        explanation:
          "Real GDP = (Nominal GDP ÷ GDP Deflator) × 100 = (560 ÷ 112) × 100 = 5 × 100 = **$500 billion**. Multiplying by 1.12 instead of dividing gives the inflated trap figure $627 billion, and subtracting 112 gives $448 billion.",
        hints: [
          "Use the deflator formula: Real GDP = (Nominal GDP ÷ GDP Deflator) × 100.",
          "Since prices rose by 12% above the base year, Real GDP must be lower than $560 billion.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "measuring-macro-activity",
        question:
          "Why does converting a lower-income country's GDP per capita using **Purchasing Power Parity (PPP)** generally produce a higher figure than using market exchange rates?",
        options: [
          "Local non-tradable goods and services are significantly cheaper in lower-income countries",
          "Market exchange rates automatically include unpaid household work and informal markets",
          "PPP figures add foreign aid inflows and environmental quality directly into national GDP",
          "Lower-income countries typically experience much higher deflation than wealthy economies",
        ],
        answerIndex: 0,
        explanation:
          "Because labour-intensive non-tradable services (haircuts, local transport, housing, street food) cost much less in lower-income nations, each unit of local currency buys more domestic goods than market exchange rates reflect. PPP adjusts for this lower domestic price level, raising measured purchasing power.",
        hints: [
          "Think about how much a haircut or restaurant meal costs in Vietnam or India compared with Switzerland.",
          "PPP equalizes the cost of a comparable basket of goods and services across countries.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "measuring-macro-activity",
        question:
          "How does **Green GDP** address a major limitation of conventional GDP as a measure of economic well-being?",
        options: [
          "It adds the imputed value of unpaid domestic childcare and volunteer community work",
          "It replaces income figures entirely with national surveys of subjective life satisfaction",
          "It adjusts national output upward whenever households enjoy more weekly leisure hours",
          "It subtracts the estimated monetary costs of environmental degradation and resource depletion",
        ],
        answerIndex: 3,
        explanation:
          "**Green GDP = Conventional GDP − Environmental Degradation & Resource Depletion Costs**. Conventional GDP ignores negative externalities such as deforestation and air pollution (and even counts pollution clean-up as positive output), whereas Green GDP accounts for lost natural capital.",
        hints: [
          "Focus specifically on what 'Green' represents in national income accounting.",
          "Conventional GDP treats environmental destruction as zero cost; Green GDP deducts those costs.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adas-models-equilibria",
        question:
          "Which mechanism correctly explains why the **Aggregate Demand (AD)** curve slopes downward from left to right?",
        options: [
          "Consumers substitute cheaper individual products for more expensive competing brands",
          "A lower average price level raises the real value of money savings, boosting consumption",
          "Lower product prices allow firms to cut wage rates and increase short-run output",
          "Falling average prices automatically cause governments to increase transfer payments",
        ],
        answerIndex: 1,
        explanation:
          "The downward slope of AD reflects the **wealth effect** (lower average price level raises real purchasing power of cash/financial wealth → higher C), the **interest-rate effect**, and the **international-trade effect**. Microeconomic substitution between individual brands does not apply when the *entire* price level changes.",
        hints: [
          "Remember the W-I-N mnemonic: Wealth, Interest-rate, and Net-export effects.",
          "Be careful not to confuse microeconomic demand for one product with macroeconomic Aggregate Demand.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "measuring-macro-activity",
        question:
          "During the **peak** phase of a business cycle, when actual Real GDP lies above the long-term potential output trend, which condition characterizes the economy?",
        options: [
          "A positive inflationary output gap with scarce labour and upward pressure on prices",
          "A negative deflationary output gap with abundant idle capacity and cyclical layoffs",
          "Two consecutive quarters of negative real GDP growth accompanied by falling CPI",
          "Zero frictional and structural unemployment alongside falling aggregate investment",
        ],
        answerIndex: 0,
        explanation:
          "When actual Real GDP exceeds potential full-employment output at a business-cycle peak, resources are over-stretched, producing a **positive (inflationary) output gap**, unemployment below the NRU, and upward wage/price pressure.",
        hints: [
          "Locate the peak on the business-cycle diagram relative to the dashed potential trend line.",
          "When actual output exceeds potential capacity, are resources idle or over-stretched?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "adas-models-equilibria",
        question:
          "A sharp rise in global crude oil and natural gas prices increases energy bills for domestic factories and transport firms. In the short run, what happens in the **AD/SRAS** model?",
        options: [
          "AD shifts rightward, raising Real GDP and increasing the average price level",
          "SRAS shifts rightward, raising Real GDP and lowering the average price level",
          "SRAS shifts leftward, lowering Real GDP and increasing the average price level",
          "AD shifts leftward, lowering Real GDP and reducing the average price level",
        ],
        answerIndex: 2,
        explanation:
          "Higher imported energy prices raise economy-wide unit production costs, shifting **SRAS leftward**. Equilibrium moves up along AD, causing Real GDP to fall (higher unemployment) and the average price level to rise (**cost-push inflation / stagflation**).",
        hints: [
          "Energy is a key production input across almost every industry.",
          "Does higher cost of production shift AD or SRAS, and in which direction?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "adas-models-equilibria",
        question:
          "In the **Monetarist / New Classical** AD/AS model, an economy initially at full employment experiences a surge in consumer confidence, opening a short-run **inflationary gap**. How does the economy self-correct in the long run?",
        options: [
          "Rising unemployment reduces wage demands, shifting SRAS rightward to full employment",
          "Tight labour markets bid up nominal wages, shifting SRAS leftward back to potential GDP",
          "Higher consumer spending permanently shifts vertical LRAS rightward to the new output",
          "Falling interest rates shift AD further rightward until spare capacity is restored",
        ],
        answerIndex: 1,
        explanation:
          "In an inflationary gap (`Y₁ > Y_fe`), intense competition for scarce workers drives **nominal wages upward**. Higher wage costs shift **SRAS leftward**, eliminating the excess output and returning Real GDP to vertical LRAS (`Y_fe`) at a permanently higher average price level.",
        hints: [
          "During an inflationary gap, actual output exceeds full employment, so labour markets are very tight.",
          "What happens to nominal wages and SRAS when firms compete aggressively for scarce workers?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "adas-models-equilibria",
        question:
          "According to the **Keynesian** macroeconomic model, why can an economy remain trapped in a persistent deflationary (recessionary) gap below full-employment output?",
        options: [
          "Long-run aggregate supply is always vertical and shifts leftward whenever AD drops",
          "Commercial banks refuse to hold reserves whenever the general price level rises",
          "Export revenues always fall faster than import spending during deep contractions",
          "Nominal wages are sticky downwards due to contracts, unions, and minimum wages",
        ],
        answerIndex: 3,
        explanation:
          "Keynesians argue that **downward wage rigidity** (employment contracts, minimum-wage laws, trade-union resistance, and morale/efficiency-wage concerns) prevents nominal wages from falling swiftly during recessions, blocking automatic Monetarist self-correction.",
        hints: [
          "Compare the Monetarist assumption of flexible wages against the Keynesian assumption.",
          "Why don't workers simply accept immediate 15% nominal pay cuts during a recession?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "adas-models-equilibria",
        question:
          "In the **Keynesian AD/AS model**, an economy is operating deep inside the **horizontal (elastic) section** of its AS curve. What is the effect of a moderate rightward shift in Aggregate Demand?",
        options: [
          "The average price level rises sharply while Real GDP remains completely unchanged",
          "Both the average price level and cyclical unemployment rise at the same time",
          "Real GDP rises substantially while the average price level remains roughly constant",
          "Real GDP falls slightly while structural unemployment drops immediately to zero",
        ],
        answerIndex: 2,
        explanation:
          "In the horizontal section of Keynesian AS, abundant unemployed labour and idle factory capacity allow firms to expand output to meet higher AD without competing for scarce resources — so **Real GDP rises with minimal or zero inflationary pressure**.",
        hints: [
          "Sketch a horizontal AS line and shift a downward-sloping AD curve to the right.",
          "Look at what happens to the intersection's height (Price Level) vs horizontal position (Real GDP).",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "adas-models-equilibria",
        question:
          "Which event is most likely to shift **Long-Run Aggregate Supply (LRAS)** (and the vertical section of Keynesian AS) to the **right**?",
        options: [
          "Nationwide investment in STEM education, broadband infrastructure, and AI adoption",
          "A temporary central-bank interest rate cut aimed at stimulating retail borrowing",
          "A one-year government cash rebate boosting household spending on imported electronics",
          "A sudden depreciation of the domestic currency raising the cost of imported fuel",
        ],
        answerIndex: 0,
        explanation:
          "Shifting **LRAS** rightward requires increasing the economy's long-term productive capacity through greater factor quantity, higher human/physical capital quality, or technological innovation. Interest-rate cuts and cash rebates shift **AD**, while currency-driven fuel hikes shift **SRAS** leftward.",
        hints: [
          "Separate demand-side shocks (AD) and short-run input cost shocks (SRAS) from permanent capacity gains (LRAS).",
          "Which option raises worker productivity and potential full-employment output permanently?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "adas-models-equilibria",
        question:
          "Suppose an economy faces a severe deflationary gap and the government launches major deficit-financed infrastructure spending. How do the **Keynesian** and **Monetarist** models differ in predicting the outcome?",
        options: [
          "Keynesians expect pure inflation; Monetarists expect higher Real GDP with zero inflation",
          "Keynesians expect output recovery with low inflation; Monetarists expect higher prices at full employment",
          "Both schools predict that infrastructure spending shifts SRAS left and worsens unemployment",
          "Keynesians expect flexible wage cuts to close the gap; Monetarists advocate higher tax rates",
        ],
        answerIndex: 1,
        explanation:
          "Under Keynesian assumptions (spare capacity + sticky downward wages), AD stimulus closes the recessionary gap smoothly with minimal inflation. Monetarists contend the economy would self-correct to vertical LRAS anyway, so extra AD stimulus risks overheating prices without permanently raising output past Y_fe (unless the infrastructure also boosts LRAS).",
        hints: [
          "Contrast how each model views the economy's starting point and self-correction mechanism.",
          "Who favours active AD intervention in recessions, and who warns about purely inflationary long-run AD boosts?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: MACRO OBJECTIVES, INFLATION & [HL] PHILLIPS CURVE (15 Qs)
  // answerIndex spread: [0:4, 1:4, 2:3, 3:4]
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives-m2",
    title: "MCQ Paper 2 · Macro Objectives, CPI, Debt & [HL] Phillips Curve",
    questions: [
      {
        id: "3a-macro-activity-objectives-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "An economy has **18.4 million** employed workers, **1.6 million** unemployed people actively seeking work, and **5.0 million** economically inactive working-age adults. What is the official **unemployment rate**?",
        options: [
          "6.4%",
          "8.0%",
          "8.7%",
          "10.0%",
        ],
        answerIndex: 1,
        explanation:
          "Labour Force = Employed + Unemployed = 18.4 + 1.6 = 20.0 million (inactive adults are excluded). Unemployment Rate = (1.6 ÷ 20.0) × 100 = **8.0%**. Dividing by working-age population (25m) wrongly yields 6.4%, and dividing by employed workers (18.4m) wrongly yields 8.7%.",
        hints: [
          "First find the Labour Force = Employed + Unemployed (exclude economically inactive people).",
          "Unemployment Rate = (Unemployed ÷ Labour Force) × 100.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "During a prolonged recession, 200,000 long-term jobless workers become discouraged and stop actively looking for work, while total employment remains unchanged. What happens to the official **unemployment rate** and **hidden unemployment**?",
        options: [
          "The official unemployment rate rises and hidden unemployment falls sharply",
          "Both the official unemployment rate and hidden unemployment rise together",
          "The official unemployment rate stays constant while hidden unemployment falls",
          "The official unemployment rate falls even though hidden unemployment rises",
        ],
        answerIndex: 3,
        explanation:
          "Discouraged workers leave both the numerator (unemployed) and denominator (labour force) of the ILO unemployment rate, mechanically pushing the **official unemployment rate down** while **hidden unemployment rises** — masking genuine labour-market distress.",
        hints: [
          "Remember the ILO rule: to be counted as officially unemployed, a person must be actively seeking work.",
          "Test with numbers: if 1m/10m = 10% and 0.2m stop searching, the new ratio is 0.8m/9.8m = 8.16%.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Hundreds of bank tellers lose their jobs permanently as customers switch to mobile banking apps, yet local firms simultaneously report severe shortages of cybersecurity engineers. Which type of unemployment does this illustrate?",
        options: [
          "Structural unemployment",
          "Cyclical unemployment",
          "Seasonal unemployment",
          "Frictional unemployment",
        ],
        answerIndex: 0,
        explanation:
          "**Structural unemployment** arises from a long-term mismatch between displaced workers' skills (or locations) and the skills demanded by expanding sectors, often driven by technological change or industrial restructuring.",
        hints: [
          "Notice that job vacancies exist at the same time as layoffs, indicating a skills mismatch rather than a general lack of AD.",
          "Match technological displacement + skills mismatch to the four unemployment types.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Define",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Which combination of unemployment types makes up the **Natural Rate of Unemployment (NRU)** when an economy operates at full-employment output ({{Y_fe}})?",
        options: [
          "Cyclical, structural, and hidden unemployment combined",
          "Cyclical and frictional unemployment with zero structural unemployment",
          "Frictional, seasonal, and structural unemployment combined",
          "Only involuntary part-time and seasonal unemployment combined",
        ],
        answerIndex: 2,
        explanation:
          "At full employment (`Y_fe`), **cyclical (demand-deficient) unemployment is zero**, leaving only equilibrium/supply-side unemployment: **NRU = Frictional + Seasonal + Structural unemployment**.",
        hints: [
          "Which single type of unemployment disappears when Aggregate Demand is sufficient for full employment?",
          "Use the S-F-S-C mnemonic to separate the NRU components from cyclical unemployment.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "A country's CPI basket contains three categories: **Food** (weight 40%, index 110), **Housing** (weight 40%, index 105), and **Transport** (weight 20%, index 120). What is the country's **weighted CPI**?",
        options: [
          "111.7",
          "108.5",
          "112.0",
          "110.0",
        ],
        answerIndex: 3,
        explanation:
          "Weighted CPI = (0.40 × 110) + (0.40 × 105) + (0.20 × 120) = 44.0 + 42.0 + 24.0 = **110.0**. Taking an unweighted simple average `(110 + 105 + 120) ÷ 3` wrongly yields 111.7.",
        hints: [
          "Multiply each category's price index by its decimal weight (0.40, 0.40, 0.20).",
          "Sum the three weighted contributions: 44 + 42 + 24.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "An economy's Consumer Price Index (CPI) rises from **125.0** in 2024 to **130.0** in 2025. What is the **annual inflation rate** in 2025?",
        options: [
          "5.0%",
          "4.0%",
          "3.8%",
          "4.5%",
        ],
        answerIndex: 1,
        explanation:
          "Inflation rate = ((130.0 − 125.0) ÷ 125.0) × 100 = (5.0 ÷ 125.0) × 100 = **4.0%**. Simply subtracting `130 − 125 = 5.0%` is a classic exam error — you must always divide by the earlier year's CPI (125.0), not by 100!",
        hints: [
          "Use the percentage-change formula: ((CPI₂ − CPI₁) ÷ CPI₁) × 100.",
          "Be sure to divide the 5-point increase by 125, not by 100 or 130.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Between 2023 and 2025, an economy's annual CPI inflation rate slows from **6.5%** to **2.0%**. Which term accurately describes this change and its effect on the average price level?",
        options: [
          "Disinflation: average prices are still rising, but at a slower annual pace",
          "Deflation: average prices are falling steadily across consumer baskets",
          "Stagflation: average prices are falling while unemployment surges higher",
          "Reflation: average prices are frozen at their base-year index value",
        ],
        answerIndex: 0,
        explanation:
          "A positive inflation rate declining from 6.5% to 2.0% is **disinflation**: the general price level is *still rising* (+2.0% per year), just less rapidly than before. **Deflation** requires a *negative* inflation rate.",
        hints: [
          "Check the sign of the 2.0% inflation rate: is it positive or negative?",
          "Distinguish carefully between falling inflation *rates* and falling price *levels*.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Why do central banks strongly fear a **malign demand-side deflationary spiral**?",
        options: [
          "Falling prices erode the real value of fixed-rate loans, wiping out household savers",
          "Falling prices stimulate excessive business investment and overheat full-employment capacity",
          "Expectations of lower future prices delay consumption while raising real debt burdens",
          "Falling prices automatically eliminate cyclical unemployment by boosting nominal wages",
        ],
        answerIndex: 2,
        explanation:
          "During demand-side deflation, households postpone big-ticket purchases expecting cheaper prices later, shrinking AD further. Simultaneously, falling prices and incomes **increase the real burden of fixed nominal debts**, squeezing borrowers, cutting profits, and triggering layoffs.",
        hints: [
          "If a new laptop or car is expected to cost 5% less next year, what do consumers do today?",
          "Also consider what happens to a fixed $200,000 mortgage when wages and prices fall.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Which factor causes the **Consumer Price Index (CPI)** to potentially *overstate* the true rise in a household's cost of living?",
        options: [
          "CPI completely omits spending on food, utilities, and rental housing from the basket",
          "CPI includes wholesale factory-gate raw materials rather than retail consumer prices",
          "CPI assigns equal unweighted importance to luxury items and everyday essentials",
          "Fixed basket weights ignore consumers substituting away from items whose prices jump",
        ],
        answerIndex: 3,
        explanation:
          "**Substitution bias** occurs because CPI holds basket weights fixed between surveys; when beef prices soar, real shoppers switch toward cheaper chicken, moderating their actual cost-of-living rise compared with the rigid CPI basket.",
        hints: [
          "Think about how fixed weights behave when one product's price spikes sharply.",
          "Do real consumers keep buying the exact same quantity of a suddenly expensive item?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "A government reduces its annual **budget deficit** from $90 billion in 2024 to $40 billion in 2025. Assuming no other debt adjustments, what happens to the country's **national debt** during 2025?",
        options: [
          "National debt still increases by $40 billion, though at a slower rate than in 2024",
          "National debt decreases by $50 billion because the deficit was cut by $50 billion",
          "National debt decreases by $40 billion because government borrowing declined",
          "National debt stays completely unchanged until tax revenues fall below zero",
        ],
        answerIndex: 0,
        explanation:
          "A **budget deficit** is an annual *flow* (`G > T`), while **national debt** is the cumulative *stock*. Running a smaller $40 billion deficit still requires borrowing $40 billion, so the total **national debt rises by $40 billion**. Debt falls only when the government runs a budget *surplus*.",
        hints: [
          "Distinguish between a flow (annual budget deficit) and a stock (accumulated national debt).",
          "If a bathtub still has water flowing in at a slower rate, does the water level fall or rise more slowly?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "[HL] Starting from equilibrium on a downward-sloping **Short-Run Phillips Curve (SRPC)**, the government cuts income taxes and raises public spending to boost Aggregate Demand. What is the **short-run** effect on the Phillips Curve diagram?",
        options: [
          "SRPC shifts rightward, raising both inflation and unemployment simultaneously",
          "The economy moves upward and left along the existing SRPC (higher inflation, lower unemployment)",
          "The economy moves downward and right along SRPC (lower inflation, higher unemployment)",
          "Vertical LRPC shifts leftward immediately, lowering the natural rate of unemployment",
        ],
        answerIndex: 1,
        explanation:
          "Changes in Aggregate Demand cause **movements along** a given SRPC. Expansionary fiscal policy raises AD, reducing cyclical unemployment while creating upward demand-pull inflation — an **upward-left movement along SRPC**.",
        hints: [
          "Remember: AD shocks slide *along* SRPC; supply shocks and expectations *shift* SRPC.",
          "With higher AD, does unemployment rise or fall, and does inflation rise or fall?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Analyse",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "[HL] A global grain and energy crisis triggers severe cost-push inflation across an economy. How is this **stagflation** shock represented on the **Phillips Curve** diagram?",
        options: [
          "A downward movement along the existing SRPC toward lower inflation",
          "An inward (leftward) shift of SRPC toward lower inflation and lower unemployment",
          "An outward (rightward) shift of SRPC toward higher inflation and higher unemployment",
          "A leftward shift of vertical LRPC with inflation falling to zero",
        ],
        answerIndex: 2,
        explanation:
          "An adverse supply shock shifts SRAS leftward, simultaneously pushing **inflation up and unemployment up** (stagflation). On the Phillips Curve diagram, worse trade-offs at every unemployment rate are shown by an **outward (rightward) shift of SRPC**.",
        hints: [
          "Stagflation means BOTH inflation and unemployment rise together — impossible along a single downward-sloping curve!",
          "Which direction must SRPC shift to produce higher inflation at any given unemployment rate?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "[HL] According to the Monetarist / New Classical **Long-Run Phillips Curve (LRPC)** model, why can expansionary demand-side policy NOT permanently hold unemployment below the Natural Rate of Unemployment (NRU)?",
        options: [
          "Expansionary fiscal policy immediately causes deflation, forcing firms to cut jobs",
          "Central banks always reduce the money supply whenever structural unemployment drops",
          "Workers permanently accept lower real wages even as consumer prices accelerate",
          "Higher inflation expectations lead workers to demand higher nominal wages, shifting SRPC outward back to NRU",
        ],
        answerIndex: 3,
        explanation:
          "Once higher inflation erodes real wages, workers revise their **inflation expectations upward** and bargain for higher nominal wages. Rising wage costs shift SRAS left and **SRPC outward**, returning unemployment to vertical **LRPC at the NRU** — leaving only permanently higher inflation.",
        hints: [
          "Trace the Monetarist A → B → C adjustment process on the Phillips Curve.",
          "What do workers demand once they realize 5% inflation has shrunk the purchasing power of their pay?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "[HL] Which government policy is most likely to shift the **Long-Run Phillips Curve (LRPC)** to the **left**?",
        options: [
          "Increasing central-bank money supply growth to push AD above full employment",
          "Funding targeted vocational retraining, job-matching portals, and regional labour mobility grants",
          "Imposing higher import tariffs on industrial machinery and semiconductor components",
          "Cutting personal income taxes for one year solely to boost short-term retail spending",
        ],
        answerIndex: 1,
        explanation:
          "Shifting **LRPC leftward** requires permanently reducing the **Natural Rate of Unemployment (NRU)** — i.e. cutting structural and frictional unemployment. Vocational retraining and job-matching supply-side reforms directly shrink skills and information mismatches.",
        hints: [
          "LRPC sits vertically at the NRU (frictional + seasonal + structural unemployment).",
          "Which policy lowers structural or frictional unemployment rather than temporarily shifting AD?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "Country D begins the year with a **Debt-to-GDP ratio of 80%**. Over the year, Country D's total national debt grows by **3.0%** while its Nominal GDP grows by **6.0%**. What happens to Country D's Debt-to-GDP ratio?",
        options: [
          "It falls because Nominal GDP grew faster than total national debt",
          "It rises by 3.0 percentage points because the government ran a deficit",
          "It stays fixed at 80% because both national debt and GDP increased",
          "It rises above 83% because nominal GDP growth adds to debt servicing",
        ],
        answerIndex: 0,
        explanation:
          "Debt-to-GDP is the fraction `National Debt ÷ Nominal GDP`. When the denominator (Nominal GDP, +6.0%) grows faster than the numerator (National Debt, +3.0%), the **Debt-to-GDP ratio falls** (to `80 × 1.03 / 1.06 ≈ 77.7%`). Strong economic growth is therefore crucial for debt sustainability!",
        hints: [
          "Look at the ratio National Debt ÷ Nominal GDP: numerator rises 3%, denominator rises 6%.",
          "Does a fraction get larger or smaller when the denominator grows faster than the numerator?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: INEQUALITY, LORENZ, [HL] TAXATION & SYNTHESIS (15 Qs)
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives-m3",
    title: "MCQ Paper 3 · Inequality, Lorenz, [HL] Taxation & Mixed Synthesis",
    questions: [
      {
        id: "3a-macro-activity-objectives-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Which statement accurately distinguishes **income** from **wealth** in the analysis of economic inequality?",
        options: [
          "Income is a stock of property assets, whereas wealth is an annual flow of wages",
          "Income excludes dividend payments, whereas wealth includes only cash savings",
          "Income is a flow of earnings over time, whereas wealth is a stock of net assets",
          "Income inequality is always more severe than wealth inequality across all countries",
        ],
        answerIndex: 2,
        explanation:
          "**Income** is a *flow* earned over a period (wages, rent, interest, profits, transfers), while **wealth** is a *stock* of net assets held at a point in time (property, shares, savings minus liabilities). Wealth inequality is typically much higher than income inequality due to compounding returns and inheritance.",
        hints: [
          "Recall the classic economics distinction between a flow (per year) and a stock (at a point in time).",
          "Does a house owned outright represent an annual flow or an accumulated stock?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Between 2015 and 2025, Country P's **Lorenz curve** bows noticeably **further away** from the 45° line of perfect equality. What does this shift indicate?",
        options: [
          "Income inequality has widened and Country P's Gini coefficient has increased",
          "Income inequality has narrowed and Country P's Gini coefficient has fallen",
          "Absolute poverty has necessarily risen even if every quintile's real income doubled",
          "Average GDP per capita has fallen because Area B expanded above 0.50",
        ],
        answerIndex: 0,
        explanation:
          "As a Lorenz curve bows further downward from the 45° line of perfect equality, **Area A increases**, causing the **Gini coefficient (`A ÷ (A + B)`) to rise** — indicating a more unequal income distribution. Note that Lorenz curves track *shares*, not absolute income levels.",
        hints: [
          "On a Lorenz diagram, the 45° line represents perfect equality (Gini = 0).",
          "Moving further away from perfect equality makes Area A larger or smaller?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "On a country's Lorenz curve diagram (where total area under the 45° line equals 0.50), the area between the line of perfect equality and the Lorenz curve (**Area A**) is **0.21**, and the area beneath the Lorenz curve (**Area B**) is **0.29**. What is the country's **Gini coefficient**?",
        options: [
          "0.21",
          "0.58",
          "0.72",
          "0.42",
        ],
        answerIndex: 3,
        explanation:
          "Gini equals Area A divided by the combined triangle area (Area A plus Area B): 0.21 ÷ (0.21 + 0.29) = 0.21 ÷ 0.50 = **0.42**. Giving 0.21 forgets to divide by 0.50, while 0.58 wrongly divides Area B by 0.50 and 0.72 divides Area A by Area B.",
        hints: [
          "Recall the Gini formula: Gini = Area A ÷ (Area A + Area B).",
          "Since A + B = 0.50, dividing by 0.50 is identical to multiplying Area A by 2.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "inequality-lorenz-taxation",
        question:
          "In a wealthy economy, every resident earns well above $20/day (PPP), yet 16% of households earn less than 50% of the national median income and struggle to afford internet access, decent housing, or school trips. This situation best illustrates:",
        options: [
          "Widespread absolute poverty measured by the World Bank $2.15/day extreme line",
          "Significant relative poverty despite the near-elimination of extreme absolute poverty",
          "Perfect income equality paired with a Gini coefficient close to zero",
          "Severe structural deflation depressing the national median household income",
        ],
        answerIndex: 1,
        explanation:
          "**Absolute poverty** tracks inability to meet physical survival basics (e.g. $2.15/day PPP), whereas **relative poverty** measures falling below a threshold share (often 50% or 60%) of national median income — capturing social exclusion inside affluent nations.",
        hints: [
          "Notice the benchmark mentioned: 50% of national median income.",
          "Which poverty concept is tied to a society's median living standard rather than survival calories?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Which three core dimensions are combined in the **Multidimensional Poverty Index (MPI)** to capture poverty beyond monetary income alone?",
        options: [
          "Health, education, and standard of living",
          "Real GDP per capita, CPI inflation, and national debt",
          "Gini coefficient, corporate tax rates, and trade openness",
          "Wage growth, unemployment rate, and stock-market wealth",
        ],
        answerIndex: 0,
        explanation:
          "The **MPI** assesses acute household-level deprivations across **Health** (nutrition, child mortality), **Education** (years of schooling, attendance), and **Standard of Living** (cooking fuel, sanitation, drinking water, electricity, housing, assets).",
        hints: [
          "MPI shares the same three broad human-development pillars as HDI, measured through 10 deprivation indicators.",
          "Eliminate any option built around purely macroeconomic or financial metrics.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Why is a uniform **15% Value Added Tax (VAT)** on all consumer goods classified as a **regressive** tax?",
        options: [
          "Higher-income earners face a legally lower percentage VAT rate at checkout",
          "VAT revenues automatically decline whenever total consumer expenditure expands",
          "Lower-income households spend a higher proportion of income, so VAT takes a larger share of their income",
          "Firms absorb 100% of indirect taxes, reducing corporate profits rather than consumer prices",
        ],
        answerIndex: 2,
        explanation:
          "Even though the checkout rate is 15% for everyone, poorer households spend a far larger share of their income on necessities (higher APC) while rich households save more. Thus **VAT paid ÷ Income** is higher for low-income households — the exact definition of a **regressive tax**.",
        hints: [
          "Tax classification (progressive/proportional/regressive) always compares total tax paid to total *income*.",
          "Compare the fraction of income spent on consumption by a $20,000 earner vs a $200,000 earner.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "[HL] Country T sets progressive personal income tax brackets as follows: **0%** on $0–$12,000; **15%** on $12,001–$32,000; **30%** on income above $32,000. How much **total income tax** does an individual earning **$52,000** pay?",
        options: [
          "$15,600",
          "$9,000",
          "$12,000",
          "$7,800",
        ],
        answerIndex: 1,
        explanation:
          "Slice income by bracket: First $12,000 × 0% = $0; next $20,000 ($12,001–$32,000) × 15% = $3,000; top $20,000 ($32,001–$52,000) × 30% = $6,000. Total tax = $0 + $3,000 + $6,000 = **$9,000**. Multiplying all $52,000 by 30% wrongly produces $15,600.",
        hints: [
          "Never multiply the entire $52,000 by the top 30% bracket rate!",
          "Compute the tax on each slice: $12,000 at 0%, $20,000 at 15%, and $20,000 at 30%.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "[HL] Under a progressive tax schedule — **0%** on $0–$10,000, **10%** on $10,001–$30,000, and **30%** above $30,000 — a worker earns **$50,000**. What are the worker's **Average Tax Rate (ATR)** and **Marginal Tax Rate (MTR)**?",
        options: [
          "ATR = 30% and MTR = 16%",
          "ATR = 20% and MTR = 30%",
          "ATR = 16% and MTR = 16%",
          "ATR = 16% and MTR = 30%",
        ],
        answerIndex: 3,
        explanation:
          "Total tax = ($10,000 × 0%) + ($20,000 × 10%) + ($20,000 × 30%) = $0 + $2,000 + $6,000 = $8,000. Thus **ATR** = ($8,000 ÷ $50,000) × 100 = **16%**, while **MTR** (the tax rate on the next dollar earned above $30,000) is **30%**. Notice MTR > ATR in a progressive system.",
        hints: [
          "First compute total tax across the three brackets ($0 + $2,000 + $6,000).",
          "ATR = (Total Tax ÷ Total Income) × 100, whereas MTR is the rate on the top bracket slice.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "[HL] A flat **10% sales tax** applies to consumer spending. Worker A earns **$24,000** and spends **$18,000** on taxable goods; Worker B earns **$96,000** and spends **$48,000**. What is each worker's **indirect tax paid as a percentage of income**?",
        options: [
          "10.0% for Worker A and 10.0% for Worker B",
          "5.0% for Worker A and 7.5% for Worker B",
          "7.5% for Worker A and 5.0% for Worker B",
          "13.3% for Worker A and 20.0% for Worker B",
        ],
        answerIndex: 2,
        explanation:
          "Worker A pays 10% × $18,000 = $1,800 → ($1,800 ÷ $24,000) × 100 = **7.5%**. Worker B pays 10% × $48,000 = $4,800 → ($4,800 ÷ $96,000) × 100 = **5.0%**. This proves mathematically that the flat sales tax is **regressive**.",
        hints: [
          "Calculate the dollar sales tax paid by each worker (10% of their spending, not 10% of income).",
          "Divide each worker's sales tax paid by their respective total income and multiply by 100.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "inequality-lorenz-taxation",
        question:
          "How do economists distinguish **equity** from **equality** in macroeconomic policy debates?",
        options: [
          "Equality is a normative judgement about fairness, whereas equity measures exact Gini scores",
          "Equity is a normative concept of fairness, whereas equality is a positive concept of identical distribution",
          "Equity applies only to wealth stocks, whereas equality applies strictly to annual wages",
          "Both concepts require every worker in the economy to receive the exact same post-tax wage",
        ],
        answerIndex: 1,
        explanation:
          "**Equality** is a *positive*, measurable state of equal shares (Gini = 0). **Equity** is a *normative* value judgement concerning fairness (such as equality of opportunity and protecting vulnerable households), which often permits justified wage differentials.",
        hints: [
          "Link each concept back to positive vs normative statements from Unit 1.",
          "Does 'fairness' necessarily mean every person earns the exact same salary?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Which mechanism explains how extreme income inequality can **weaken** a country's macroeconomic growth over time?",
        options: [
          "Low-income households save a higher share of every extra dollar than wealthy households",
          "High inequality automatically triggers hyperinflation by raising wages for unskilled labour",
          "Extreme inequality shifts the Lorenz curve inward, reducing incentives for corporate innovation",
          "Poorer households lack access to education and healthcare, underutilizing human capital while limiting aggregate consumption",
        ],
        answerIndex: 3,
        explanation:
          "Severe inequality prevents low-income children from developing skills and health (**lost human capital**, weakening LRAS growth) and concentrates income among rich households with a lower marginal propensity to consume, restraining **aggregate consumption (C)**.",
        hints: [
          "Consider both the supply side (education/skills of low-income families) and the demand side (who spends a larger share of income?).",
          "Rich households save a larger share of income than poor households, not vice versa.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "What is a central **advantage** and a central **drawback** of a **Universal Basic Income (UBI)** compared with means-tested welfare benefits?",
        options: [
          "Advantage: removes poverty-trap disincentives and screening costs; Drawback: very high fiscal cost",
          "Advantage: targets cash exclusively to the poorest 5%; Drawback: requires expensive income audits",
          "Advantage: eliminates progressive income taxation; Drawback: reduces aggregate demand in recessions",
          "Advantage: guarantees zero structural unemployment; Drawback: lowers minimum-wage compliance",
        ],
        answerIndex: 0,
        explanation:
          "Because **UBI** pays an unconditional sum to every resident regardless of earnings, it avoids bureaucratic means-testing and prevents the **poverty trap** (losing benefits upon taking paid work). Its primary limitation is the **enormous fiscal cost** of paying wealthy and poor citizens alike.",
        hints: [
          "Recall what 'Universal' means: everyone receives the payment without income tests.",
          "Compare administrative simplicity and work incentives against total government budget spending.",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "macro-objectives-phillips-hl",
        question:
          "[HL] Over two years, an economy experiences **falling CPI inflation** alongside a **falling unemployment rate**. Which combination of shifts in the AD/AS and Phillips Curve models best explains this outcome?",
        options: [
          "AD shifts rightward while the economy moves up and left along a fixed SRPC",
          "SRAS shifts rightward (positive supply shock) while SRPC shifts inward to the left",
          "SRAS shifts leftward (cost-push shock) while SRPC shifts outward to the right",
          "AD shifts leftward while vertical LRPC shifts outward to a higher NRU",
        ],
        answerIndex: 1,
        explanation:
          "Simultaneously achieving **lower inflation AND lower unemployment** improves the short-run trade-off — caused by a **positive supply shock** (e.g. falling energy costs or productivity surge) shifting **SRAS rightward** and **SRPC inward/leftward**.",
        hints: [
          "Along a fixed downward-sloping SRPC, inflation and unemployment always move in *opposite* directions.",
          "If BOTH inflation and unemployment fall together, which way must SRAS and SRPC shift?",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-macro-activity",
        question:
          "In Year 1, Nominal GDP is **$440 billion** and the GDP deflator is **110**. In Year 2, Nominal GDP is **$504 billion** and the GDP deflator is **120**. What is the **real economic growth rate** between Year 1 and Year 2?",
        options: [
          "14.5%",
          "9.1%",
          "4.5%",
          "5.0%",
        ],
        answerIndex: 3,
        explanation:
          "Year 1 Real GDP = (440 ÷ 110) × 100 = $400 billion. Year 2 Real GDP = (504 ÷ 120) × 100 = $420 billion. Real growth rate = ((420 − 400) ÷ 400) × 100 = (20 ÷ 400) × 100 = **5.0%**. (Nominal growth was 14.5%, while inflation was 9.1%.)",
        hints: [
          "Deflate each year's Nominal GDP separately using Real GDP = (Nominal ÷ Deflator) × 100.",
          "Then compute the percentage increase from Year 1 Real GDP ($400 bn) to Year 2 Real GDP ($420 bn).",
        ],
      },
      {
        id: "3a-macro-activity-objectives-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "inequality-lorenz-taxation",
        question:
          "Which policy is most likely to achieve **both** a more equitable income distribution (shifting the Lorenz curve inward) **and** higher long-run potential output (shifting LRAS rightward)?",
        options: [
          "Raising a uniform sales tax on basic groceries while cutting top marginal income tax rates",
          "Increasing unconditional cash subsidies for luxury real-estate developers in capital cities",
          "Expanding publicly funded quality education, vocational retraining, and preventative healthcare for low-income families",
          "Imposing strict price ceilings on consumer electronics while freezing infrastructure maintenance",
        ],
        answerIndex: 2,
        explanation:
          "Targeted public investment in **human capital** (education, retraining, healthcare) directly lifts the earning capacity of lower-income households (narrowing inequality over time) while simultaneously improving labour productivity across the whole economy (shifting **LRAS rightward**).",
        hints: [
          "Look for a policy that addresses both equity (lifting bottom quintiles' opportunities) AND supply-side productive capacity (LRAS).",
          "Which investment makes future workers healthier, more skilled, and more productive?",
        ],
      },
    ],
  },
];
