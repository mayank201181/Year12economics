import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "3a-macro-activity-objectives",
  title: "Unit 3A: Macroeconomic Activity, Objectives & Inequality",
  strand: "Unit 3: Macroeconomics",
  icon: "🏛️",
  level: "SL",
  summary:
    "Measure national output and well-being (GDP, GNI, PPP), contrast Monetarist and Keynesian AD/AS equilibria, evaluate macroeconomic objectives and the [HL] Phillips Curve, and analyse inequality, Lorenz curves, Gini coefficients, and [HL] tax incidence.",
  intro:
    "Microeconomics zooms into one market at a time; **macroeconomics** zooms out to examine the entire economy — total production, jobs, prices, public debt, and who shares in prosperity. In Unit 3A you master the accounting tools economists use to measure national output, the competing AD/AS models that explain booms and recessions, the core macroeconomic objectives (including the HL Phillips Curve trade-off), and the measurement and policies of income inequality and poverty.",
  guide: [
    // =========================================================================
    // SECTION 1: 3.1 MEASURING ECONOMIC ACTIVITY
    // =========================================================================
    {
      id: "measuring-macro-activity",
      heading: "3.1 Measuring Economic Activity: GDP, GNI, PPP & Well-Being",
      level: "SL",
      discovery: {
        problem:
          "Country X reports Nominal GDP of **$500 billion** in 2024 and **$550 billion** in 2025 — a headline jump of 10%. Over the same year, its average price level rose by **10%** and its population grew by **5%**. Did the average citizen's real material living standard rise, stay the same, or fall?",
        idea:
          "It **fell**! The entire 10% nominal rise was pure inflation, so **Real GDP** stayed flat at {{550 / 1.10 = 500}} billion dollars (0% real growth). Splitting unchanged real output across 5% more people reduces **Real GDP per capita** by roughly 4.8%. That is why macroeconomists always deflate nominal figures and divide by population before judging living standards.",
      },
      body: `To track the health of an economy, statistical agencies measure **Gross Domestic Product (GDP)**: the total monetary value of all **final** goods and services produced *within a country's geographic borders* over a given period (usually one year).

### Three Equivalent Approaches to GDP
Because every dollar spent on domestic final output becomes income for the factors of production that created it, three methods yield the same GDP total (ignoring statistical discrepancies):

1. **Expenditure approach:** sums total spending on domestic final goods and services:
   **GDP = C + I + G + (X − M)**
   - **C (Consumption):** household spending on goods and services (excluding new housing).
   - **I (Investment):** firms' spending on new capital equipment, structures, inventories, and newly built residential housing (NOT financial shares/bonds).
   - **G (Government spending):** state spending on final goods and services such as public teachers, roads, and defence (**excludes transfer payments** like pensions or unemployment benefits, since no current good/service is produced in exchange).
   - **X − M (Net exports):** exports sold abroad minus imports bought from abroad (imports are subtracted because they are already embedded inside C, I, and G, yet were produced overseas).
2. **Income approach:** sums all factor incomes earned domestically — wages (labour), rent (land), interest (capital), and profit (entrepreneurship).
3. **Output (value-added) approach:** sums the **gross value added** at each stage of production across primary, secondary, and tertiary sectors, preventing **double counting** of intermediate inputs (such as flour baked into bread).

### GDP vs GNI (Gross National Income)
- **GDP** is *location-based* (output produced inside national borders, regardless of who owns the factors).
- **GNI** is *ownership-based* (total income earned by a country's residents and domestically owned firms, regardless of where production takes place):
  **GNI = GDP + Net Property Income from Abroad**
  where Net Property Income from Abroad = factor incomes earned by residents overseas minus factor incomes sent abroad to foreign owners. In countries hosting huge foreign multinationals (e.g. Ireland), profit repatriation makes **GNI significantly lower than GDP**. Conversely, countries with large overseas investments or diaspora remittances (e.g. the Philippines) often record **GNI > GDP**.

### Nominal vs Real GDP, Per Capita & PPP
- **Nominal GDP** values output at *current-year prices*, mixing quantity changes with inflation.
- **Real GDP** values output at *constant base-year prices*, isolating true volume changes via the **GDP Deflator** (base year = 100):
  **Real GDP = {{("Nominal GDP" / "GDP Deflator") * 100}}**
- **Real Economic Growth Rate** = {{(("Real GDP"_2 - "Real GDP"_1) / "Real GDP"_1) * 100}}%.
- **Real GDP (or GNI) per capita** divides real output by population to measure average material output per person.
- **Purchasing Power Parity (PPP)** adjusts currency conversions for cross-country differences in the cost of living. Non-tradable services (haircuts, street food, local transport) are far cheaper in lower-income countries than market exchange rates imply, so PPP gives a much fairer international comparison of actual purchasing power.

### The Business Cycle
Real GDP rarely grows in a straight line; it fluctuates around a rising **long-term potential output trend**:
- **Expansion (recovery/boom):** rising real GDP, falling cyclical unemployment, rising confidence.
- **Peak:** output reaches a local maximum above potential GDP (**positive / inflationary output gap**), generating inflationary pressure.
- **Contraction (recession):** falling real GDP (technically defined as **two consecutive quarters of negative real GDP growth**), rising cyclical unemployment.
- **Trough:** output bottoms out below potential GDP (**negative / deflationary output gap**) before recovery begins.

### Limitations of GDP & Alternative Measures of Well-Being
GDP measures marketed economic activity — not overall welfare. Key omissions include:
- **Non-marketed output:** unpaid housework, childcare, DIY, and volunteering.
- **Informal / parallel markets:** unreported cash transactions and shadow-economy production.
- **Externalities & sustainability:** pollution, deforestation, and resource depletion are not deducted; paradoxically, cleaning up an oil spill *increases* GDP!
- **Distribution & composition:** high average GDP can mask severe inequality, excessive working hours (lost leisure), or heavy military spending rather than healthcare.
- **Quality improvements:** faster computers and life-saving medicines often improve welfare more than price-adjusted GDP captures.

Consequently, economists supplement GDP with alternative indicators:
- **OECD Better Life Index:** compares countries across 11 dimensions (housing, income, jobs, community, education, environment, civic engagement, health, life satisfaction, safety, work–life balance) with user-chosen weights.
- **World Happiness Index:** surveys subjective life evaluations alongside GDP per capita, social support, healthy life expectancy, freedom, generosity, and absence of corruption.
- **Green GDP:** adjusts conventional GDP by subtracting the estimated monetary cost of environmental degradation and natural-resource depletion (**Green GDP = GDP − Environmental Costs**).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" role="img" aria-label="Business cycle diagram showing actual real GDP fluctuating around an upward-sloping potential output trend with peak, contraction, trough, expansion, and output gaps">
  <rect x="0" y="0" width="520" height="300" fill="#ffffff" rx="8"/>
  <defs>
    <marker id="arr-bc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="56" y1="258" x2="495" y2="258" stroke="#374151" stroke-width="2" marker-end="url(#arr-bc)"/>
  <line x1="56" y1="258" x2="56" y2="22" stroke="#374151" stroke-width="2" marker-end="url(#arr-bc)"/>
  <text x="488" y="278" font-size="12" font-weight="700" fill="#1f2937" text-anchor="end">Time</text>
  <text x="16" y="138" font-size="12" font-weight="700" fill="#1f2937" transform="rotate(-90 16 138)" text-anchor="middle">Real GDP</text>

  <!-- Long-term potential output trend line -->
  <line x1="66" y1="218" x2="475" y2="88" stroke="#0d9488" stroke-width="2.2" stroke-dasharray="7 5"/>
  <text x="476" y="77" font-size="11" font-weight="700" fill="#0d9488" text-anchor="end">Long-term potential trend</text>

  <!-- Positive output gap indicator at peak -->
  <line x1="172" y1="118" x2="172" y2="184" stroke="#c2410c" stroke-width="1.8" stroke-dasharray="3 3"/>
  <circle cx="172" cy="118" r="4.5" fill="#c2410c"/>
  <text x="172" y="106" font-size="11" font-weight="700" fill="#c2410c" text-anchor="middle">Peak</text>
  <rect x="70" y="133" width="96" height="32" rx="4" fill="#ffedd5" stroke="#fb923c" stroke-width="1"/>
  <text x="118" y="147" font-size="9.5" font-weight="700" fill="#9a3412" text-anchor="middle">Positive output</text>
  <text x="118" y="159" font-size="9.5" font-weight="700" fill="#9a3412" text-anchor="middle">gap (inflationary)</text>

  <!-- Negative output gap indicator at trough -->
  <line x1="316" y1="138" x2="316" y2="210" stroke="#0369a1" stroke-width="1.8" stroke-dasharray="3 3"/>
  <circle cx="316" cy="210" r="4.5" fill="#0369a1"/>
  <text x="316" y="228" font-size="11" font-weight="700" fill="#0369a1" text-anchor="middle">Trough</text>
  <rect x="326" y="160" width="106" height="32" rx="4" fill="#e0f2fe" stroke="#38bdf8" stroke-width="1"/>
  <text x="379" y="174" font-size="9.5" font-weight="700" fill="#075985" text-anchor="middle">Negative output</text>
  <text x="379" y="186" font-size="9.5" font-weight="700" fill="#075985" text-anchor="middle">gap (deflationary)</text>

  <!-- Actual real GDP wave -->
  <path d="M 66 232 C 110 210, 130 118, 172 118 C 218 118, 266 210, 316 210 C 366 210, 405 64, 452 56 C 468 53, 476 62, 482 70" fill="none" stroke="#b45309" stroke-width="3"/>
  <text x="454" y="45" font-size="11" font-weight="700" fill="#b45309" text-anchor="middle">Actual Real GDP</text>

  <!-- Phase labels -->
  <text x="108" y="200" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">Expansion</text>
  <text x="247" y="176" font-size="10.5" font-weight="700" fill="#c2410c" text-anchor="middle">Contraction</text>
  <text x="247" y="189" font-size="9.5" fill="#c2410c" text-anchor="middle">(Recession)</text>
  <text x="394" y="128" font-size="10.5" font-weight="700" fill="#15803d" text-anchor="middle">Expansion</text>
</svg>`,
      diagramCaption:
        "The business cycle: actual real GDP cycles through expansions, peaks, contractions, and troughs around the long-term potential growth trend.",
      workedExamples: [
        {
          title: "Calculating GDP and GNI from National Accounts",
          problem:
            "In 2025, an economy records: Consumption = $310 bn, Investment = $95 bn, Government purchases of goods & services = $110 bn, State pension transfer payments = $40 bn, Exports = $85 bn, Imports = $100 bn, and Net Property Income from Abroad = −$18 bn. Calculate (a) GDP and (b) GNI.",
          steps: [
            "Exclude state pension transfer payments ($40 bn): transfers redistribute income without corresponding current production of goods or services.",
            "Apply the expenditure formula: GDP = C + I + G + (X − M) = 310 + 95 + 110 + (85 − 100).",
            "Net exports = 85 − 100 = −$15 bn, so GDP = 515 − 15 = $500 bn.",
            "Compute GNI = GDP + Net Property Income from Abroad = 500 + (−18) = $482 bn.",
          ],
          answer: "GDP = $500 billion; GNI = $482 billion",
          yourTurn: {
            question:
              "An economy has C = $240 bn, I = $70 bn, G = $85 bn, X = $60 bn, and M = $75 bn. Calculate GDP (in $ billions).",
            answer: { type: "number", value: 380, display: "$380 billion" },
            solution: "GDP = 240 + 70 + 85 + (60 − 75) = 395 − 15 = $380 billion.",
          },
        },
        {
          title: "Deflating Nominal GDP to Find Real Economic Growth",
          problem:
            "An economy's Nominal GDP rises from $420 bn in 2024 (GDP Deflator = 105) to $483 bn in 2025 (GDP Deflator = 115). Calculate Real GDP in both years and the real economic growth rate in 2025.",
          steps: [
            "Real GDP (2024) = {{(420 / 105) * 100}} = $400 bn.",
            "Real GDP (2025) = {{(483 / 115) * 100}} = $420 bn.",
            "Real growth rate = {{((420 - 400) / 400) * 100}} = {{(20 / 400) * 100}} = 5.0%.",
            "Notice that Nominal GDP grew by 15%, yet prices rose ~9.5%, leaving true real output growth of exactly 5.0%.",
          ],
          answer: "Real GDP (2024) = $400 bn; Real GDP (2025) = $420 bn; Real growth = 5.0%",
          yourTurn: {
            question:
              "If Nominal GDP is $660 billion and the GDP deflator is 110, calculate Real GDP (in $ billions).",
            answer: { type: "number", value: 600, display: "$600 billion" },
            solution: "Real GDP = (660 ÷ 110) × 100 = $600 billion.",
          },
        },
      ],
      keyPoints: [
        "Expenditure GDP = C + I + G + (X − M) equals Income GDP and Output (value-added) GDP.",
        "Exclude intermediate goods (avoids double counting), transfer payments, second-hand sales, and purely financial transactions from GDP.",
        "GNI = GDP + Net Property Income from Abroad; GDP is border-based while GNI is resident/ownership-based.",
        "Always adjust nominal GDP by the GDP deflator for inflation, divide by population for per-capita figures, and use PPP for cross-country living-standard comparisons.",
        "Alternative measures (OECD Better Life Index, Happiness Index, Green GDP) address GDP's blind spots on inequality, unpaid work, and environmental degradation.",
      ],
      whyItWorks:
        "In the five-sector circular flow, every dollar spent on domestic final output flows immediately into wages, rent, interest, or profit. Measuring the flow at the spending tap (expenditure), the production factory (value added), or the household wallet (factor incomes) must therefore capture the same real economic stream.",
      strategies: [
        "Spot trap items in national-account tables: cross out transfer payments, second-hand car sales, and stock-market purchases before summing C + I + G + (X − M).",
        "When comparing living standards across two nations, cite all three required adjustments in sequence: Real (inflation) → Per Capita (population) → PPP (local price levels).",
        "In Paper 1/2 evaluations of GDP, balance its usefulness (standardized, timely, correlates with tax capacity and employment) against specific well-being limitations and name a concrete alternative like Green GDP or OECD Better Life Index.",
      ],
      thinkDeeper:
        "If an economy experiences a major hurricane and spends $20 billion rebuilding destroyed homes and roads, GDP rises — yet society is clearly worse off. Why does GDP count rebuilding as positive output, and what capital-stock adjustment would fix this blind spot?",
    },

    // =========================================================================
    // SECTION 2: 3.2 AD/AS MODELS (MONETARIST VS KEYNESIAN)
    // =========================================================================
    {
      id: "adas-models-equilibria",
      heading: "3.2 Variations in Economic Activity: AD/AS (Monetarist vs Keynesian)",
      level: "SL",
      discovery: {
        problem:
          "During a severe recession with 11% unemployment, a government injects $50 billion into clean-energy infrastructure. Economist A predicts a big jump in Real GDP with almost zero inflation; Economist B predicts Real GDP will end up right back where it started, only with permanently higher prices. How can both models be logically coherent?",
        idea:
          "They make different assumptions about **wage and price flexibility** and **spare capacity**. Economist A is using the **Keynesian AS curve** in its horizontal spare-capacity section (sticky downward wages prevent self-correction, and idle resources can be mobilized without bidding up prices). Economist B is using the **Monetarist / New Classical vertical LRAS** where flexible wages self-correct recessions and keep long-run output anchored at full employment.",
      },
      body: `The **Aggregate Demand / Aggregate Supply (AD/AS)** model explains short-run fluctuations in real output and the average price level — and sits at the heart of nearly every IB Macroeconomics essay.

### Aggregate Demand (AD)
**Aggregate Demand** is the total planned spending on domestic goods and services at each average price level over a given time period: **AD = C + I + G + (X − M)**.

**Why does AD slope downwards?** (Never confuse these with microeconomic substitution/income effects for a single good!)
1. **Wealth effect:** a lower average price level raises the real purchasing power of households' cash and financial savings, encouraging higher consumption (C).
2. **Interest-rate effect:** at a lower price level, households and firms need less money for transactions, lowering interest rates and stimulating interest-sensitive C and I.
3. **International trade (net-export) effect:** if domestic prices fall relative to foreign prices, domestic exports become more price-competitive (X rises) and imports relatively costlier (M falls), raising (X − M).

**Shifts of AD** occur whenever a *non-price determinant* changes C, I, G, or (X − M):
- **C:** consumer confidence, interest rates, household wealth (house/share prices), personal income taxes, household indebtedness.
- **I:** business confidence, interest rates, corporate tax rates, technological innovation, level of corporate debt / spare capacity.
- **G:** political priorities and discretionary fiscal spending.
- **X − M:** foreign national income (driving X), domestic income (driving M), exchange rates, trade protectionism.

### Short-Run Aggregate Supply (SRAS)
**SRAS** shows the total real output domestic firms are willing to produce at each average price level when **nominal wages and certain input prices are fixed** in the short run. It slopes **upwards**: higher output prices relative to sticky wage costs widen profit margins, incentivizing firms to expand production.

**Shifts of SRAS (Supply Shocks)** arise from changes in economy-wide production costs:
- Changes in nominal **wage rates** (e.g. union settlements, minimum-wage hikes).
- Changes in **raw-material and energy prices** (e.g. oil/gas price spikes shift SRAS left).
- Changes in **business indirect taxes** (left) or **production subsidies** (right).
- **Exchange-rate swings** altering the domestic cost of imported intermediate inputs (depreciation → costlier imports → SRAS shifts left).

### Two Competing Long-Run Models: Monetarist/New Classical vs Keynesian

| Feature | Monetarist / New Classical Model | Keynesian Model |
|---|---|---|
| **Shape of Long-Run AS** | Perfectly vertical **LRAS** at full-employment output ({{Y_fe}}) | Single **three-section AS** curve: horizontal (elastic) → curved bottleneck → vertical at {{Y_fe}} |
| **Wage & Price Assumption** | Wages and prices are flexible both upwards and downwards in the long run | Nominal wages are **sticky downwards** (contracts, unions, minimum wages, morale) |
| **Deflationary Gap ({{Y < Y_fe}})** | **Self-corrects**: high unemployment pushes nominal wages down → SRAS shifts right → economy returns to {{Y_fe}} at a lower price level | **Persistent recessionary equilibrium**: falling wages fail to occur, so economy can stay stuck below {{Y_fe}} indefinitely |
| **Inflationary Gap ({{Y > Y_fe}})** | **Self-corrects**: tight labour market bids nominal wages up → SRAS shifts left → returns to {{Y_fe}} at a higher price level | Output hits vertical wall at {{Y_fe}}: further AD increases cause **pure demand-pull inflation** |
| **Primary Policy Lesson** | Demand stimulus creates inflation without permanent output gains; rely on **market-based supply-side policies** to shift LRAS right | Active **expansionary fiscal/monetary policy** is vital in deep recessions to close deflationary gaps with minimal inflation |

### Shifting Long-Run Potential Output (Rightward LRAS / Keynesian AS)
In **both** models, long-run economic growth requires increasing the **quantity or quality of factors of production** or improving **efficiency/institutions**: net investment in physical capital, education/healthcare (human capital), R&D and technological innovation, labour-force growth, infrastructure, or deregulation that boosts productivity.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 285" role="img" aria-label="Side-by-side comparison of Monetarist vertical LRAS with SRAS self-correction and Keynesian three-section AS curve">
  <rect x="0" y="0" width="540" height="285" fill="#ffffff" rx="8"/>
  <defs>
    <marker id="arr-ad" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151"/>
    </marker>
    <marker id="arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c2410c"/>
    </marker>
  </defs>

  <!-- LEFT PANEL: MONETARIST / NEW CLASSICAL -->
  <text x="142" y="20" font-size="12" font-weight="800" fill="#1f2937" text-anchor="middle">Monetarist / New Classical</text>
  <line x1="42" y1="242" x2="255" y2="242" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ad)"/>
  <line x1="42" y1="242" x2="42" y2="34" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ad)"/>
  <text x="252" y="260" font-size="10.5" font-weight="700" fill="#1f2937" text-anchor="end">Real GDP</text>
  <text x="16" y="138" font-size="10.5" font-weight="700" fill="#1f2937" transform="rotate(-90 16 138)" text-anchor="middle">Price Level</text>

  <!-- Vertical LRAS -->
  <line x1="150" y1="242" x2="150" y2="45" stroke="#0d9488" stroke-width="2.6"/>
  <text x="150" y="38" font-size="10.5" font-weight="800" fill="#0d9488" text-anchor="middle">LRAS</text>
  <text x="150" y="256" font-size="10.5" font-weight="700" fill="#0d9488" text-anchor="middle">Yfe</text>

  <!-- SRAS1 & SRAS2 -->
  <line x1="68" y1="214" x2="225" y2="86" stroke="#b45309" stroke-width="2.2"/>
  <text x="228" y="84" font-size="10" font-weight="700" fill="#b45309">SRAS₁</text>
  <line x1="60" y1="168" x2="205" y2="52" stroke="#c2410c" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="208" y="54" font-size="10" font-weight="700" fill="#c2410c">SRAS₂</text>

  <!-- AD1 & AD2 -->
  <line x1="72" y1="74" x2="220" y2="216" stroke="#2563eb" stroke-width="2.2"/>
  <text x="222" y="224" font-size="10" font-weight="700" fill="#2563eb">AD₁</text>
  <line x1="108" y1="54" x2="246" y2="190" stroke="#1d4ed8" stroke-width="2.2" stroke-dasharray="5 3"/>
  <text x="245" y="199" font-size="10" font-weight="700" fill="#1d4ed8">AD₂</text>

  <!-- Equilibria A, B, C -->
  <circle cx="150" cy="147" r="3.8" fill="#1f2937"/>
  <text x="140" y="144" font-size="10" font-weight="800" fill="#1f2937">A</text>
  <circle cx="177" cy="125" r="3.8" fill="#c2410c"/>
  <text x="184" y="128" font-size="10" font-weight="800" fill="#c2410c">B</text>
  <circle cx="150" cy="96" r="3.8" fill="#0d9488"/>
  <text x="140" y="94" font-size="10" font-weight="800" fill="#0d9488">C</text>

  <!-- Dashed output Y1 -->
  <line x1="177" y1="125" x2="177" y2="242" stroke="#c2410c" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="177" y="256" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Y₁</text>
  <!-- SRAS shift arrow -->
  <line x1="115" y1="170" x2="98" y2="152" stroke="#c2410c" stroke-width="1.6" marker-end="url(#arr-red)"/>
  <text x="148" y="275" font-size="9.5" fill="#4b5563" text-anchor="middle">Inflationary gap (A→B) self-corrects via SRAS₂ (B→C)</text>

  <!-- Divider -->
  <line x1="274" y1="16" x2="274" y2="274" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- RIGHT PANEL: KEYNESIAN -->
  <text x="410" y="20" font-size="12" font-weight="800" fill="#1f2937" text-anchor="middle">Keynesian 3-Section AS</text>
  <line x1="304" y1="242" x2="520" y2="242" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ad)"/>
  <line x1="304" y1="242" x2="304" y2="34" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ad)"/>
  <text x="518" y="260" font-size="10.5" font-weight="700" fill="#1f2937" text-anchor="end">Real GDP</text>
  <text x="288" y="138" font-size="10.5" font-weight="700" fill="#1f2937" transform="rotate(-90 288 138)" text-anchor="middle">Price Level</text>

  <!-- Keynesian AS curve -->
  <path d="M 314 196 L 392 196 C 446 196, 474 166, 474 48" fill="none" stroke="#0d9488" stroke-width="3"/>
  <text x="488" y="54" font-size="10.5" font-weight="800" fill="#0d9488">AS</text>
  <line x1="474" y1="145" x2="474" y2="242" stroke="#0d9488" stroke-width="1.3" stroke-dasharray="3 3"/>
  <text x="474" y="256" font-size="10.5" font-weight="700" fill="#0d9488" text-anchor="middle">Yfe</text>

  <!-- AD1 & AD2 in spare capacity -->
  <line x1="316" y1="142" x2="378" y2="226" stroke="#2563eb" stroke-width="2"/>
  <text x="347" y="236" font-size="9.5" font-weight="700" fill="#2563eb">AD₁</text>
  <line x1="354" y1="138" x2="416" y2="226" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="406" y="236" font-size="9.5" font-weight="700" fill="#1d4ed8">AD₂</text>

  <!-- AD3 & AD4 in vertical zone -->
  <line x1="408" y1="54" x2="504" y2="150" stroke="#7c3aed" stroke-width="2"/>
  <text x="506" y="152" font-size="9.5" font-weight="700" fill="#7c3aed">AD₃</text>
  <line x1="428" y1="36" x2="516" y2="122" stroke="#9333ea" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="515" y="114" font-size="9.5" font-weight="700" fill="#9333ea">AD₄</text>

  <!-- Zone annotations -->
  <text x="352" y="186" font-size="9" font-weight="700" fill="#0d9488" text-anchor="middle">Spare capacity</text>
  <text x="440" y="177" font-size="8.8" font-weight="700" fill="#b45309">Bottlenecks</text>
  <text x="412" y="275" font-size="9.5" fill="#4b5563" text-anchor="middle">AD₁→AD₂ boosts Y with 0 inflation; AD₃→AD₄ = pure inflation</text>
</svg>`,
      diagramCaption:
        "Monetarist/New Classical equilibrium self-corrects to vertical LRAS via flexible wages, whereas Keynesian sticky wages permit persistent spare capacity.",
      workedExamples: [
        {
          title: "Supply Shock vs Demand Boom in the Monetarist Model",
          problem:
            "A sharp global energy crisis doubles domestic electricity and fuel costs for firms. Trace the short-run impact on Real GDP, unemployment, and the price level using the AD/SRAS/LRAS model.",
          steps: [
            "Higher energy costs raise firms' unit production costs across the entire economy, shifting **SRAS left** (from SRAS₁ to SRAS₂).",
            "The short-run equilibrium moves up and left along the downward-sloping AD curve.",
            "Real GDP falls below Y_fe (creating a **deflationary/recessionary gap** and higher cyclical unemployment) while the average price level rises (**cost-push inflation**).",
            "This painful combination of stagnant/falling output and rising inflation is known as **stagflation**.",
          ],
          answer: "SRAS shifts left → Real GDP falls, unemployment rises, and price level rises (stagflation).",
          yourTurn: {
            question:
              "Which macroeconomic curve shifts left when a sudden oil price spike raises production costs across the economy? (Type the standard abbreviation.)",
            answer: { type: "text", accept: ["SRAS", "short-run aggregate supply", "short run aggregate supply"], display: "SRAS" },
            solution:
              "Higher energy/raw-material costs increase economy-wide production costs in the short run, shifting SRAS (Short-Run Aggregate Supply) to the left.",
          },
        },
        {
          title: "Calculating an Output Gap in a Keynesian Economy",
          problem:
            "Country Z has potential full-employment Real GDP ({{Y_fe}}) of $500 billion, but a collapse in investment leaves actual Real GDP at $460 billion. Calculate the output gap as a percentage of potential GDP and identify whether expansionary fiscal policy is likely to trigger immediate high inflation under Keynesian assumptions.",
          steps: [
            "Output gap ($) = Actual Real GDP − Potential Real GDP = 460 − 500 = −$40 billion.",
            "Percentage output gap = {{(-40 / 500) * 100}} = −8.0% (a large deflationary/recessionary gap).",
            "Under the Keynesian AS model, an 8% spare-capacity cushion puts the economy near the horizontal section of AS.",
            "Moderate expansionary fiscal policy shifts AD right, raising Real GDP and cutting cyclical unemployment with **little or no immediate demand-pull inflation** until bottlenecks emerge near Y_fe.",
          ],
          answer: "−8.0% output gap; Keynesian spare capacity allows AD expansion with minimal initial inflation.",
          yourTurn: {
            question:
              "If actual Real GDP is $475 billion and potential Real GDP is $500 billion, calculate the percentage output gap (include the minus sign, e.g. −3).",
            answer: { type: "number", value: -5, display: "−5%" },
            solution: "Output gap (%) = ((475 − 500) ÷ 500) × 100 = (−25 ÷ 500) × 100 = −5%.",
          },
        },
      ],
      keyPoints: [
        "Always label AD/AS axes accurately: **Average Price Level (PL)** on the vertical axis and **Real GDP (Y)** on the horizontal axis — NEVER write 'Price' and 'Quantity'!",
        "AD slopes downward via the wealth, interest-rate, and international-trade effects, and shifts whenever C, I, G, or (X − M) change independently of the price level.",
        "Monetarist/New Classical vertical LRAS implies flexible wages self-correct both inflationary and deflationary gaps back to full-employment output Y_fe.",
        "Keynesian sticky downward wages mean a deflationary gap can persist indefinitely, making demand-side stimulus effective in the horizontal elastic zone without triggering inflation.",
        "Long-run potential growth shifts LRAS / the vertical section of Keynesian AS rightward through better quality or greater quantity of factors of production.",
      ],
      whyItWorks:
        "Both models agree on full employment as a physical resource limit, yet disagree on adjustment speed. When wages are contractually rigid downwards (Keynesian short-to-medium run), firms cut headcount rather than pay, trapping output below potential. Over longer horizons with flexible markets (Monetarist view), wage adjustments eventually clear labour surpluses and shortages.",
      strategies: [
        "In IB Paper 1 essays, **synthesise both models** to score top evaluation marks: show why demand stimulus works well in deep spare capacity (Keynesian) yet risks pure inflation once the economy approaches Y_fe (Monetarist).",
        "Distinguish **SRAS shocks** (energy prices, wages, indirect taxes) from **LRAS shifts** (education, infrastructure, R&D, labour-force growth). Remember: an LRAS shift moves potential capacity permanently, whereas a temporary commodity shock shifts only SRAS.",
      ],
      thinkDeeper:
        "Can a severe recession actually reduce *long-run* potential output (shifting LRAS left)? Economists call this **hysteresis** — when long-term unemployed workers lose skills and discouraged firms cancel capital investment permanently.",
    },

    // =========================================================================
    // SECTION 3: 3.3 MACRO OBJECTIVES & PHILLIPS CURVE [HL]
    // =========================================================================
    {
      id: "macro-objectives-phillips-hl",
      heading: "3.3 Growth, Unemployment, Inflation, National Debt & Phillips Curve [HL]",
      level: "SL",
      discovery: {
        problem:
          "Last quarter, Country M's official unemployment rate dropped from 6.4% to 5.5% even though **total employment did not rise by a single job**. In the same news bulletin, CPI inflation fell from 8.0% to 3.5%, and a commentator claimed 'everyday prices are finally getting cheaper.' What economic error lies behind each headline?",
        idea:
          "First, unemployment fell because **discouraged workers** stopped actively searching and dropped out of the labour force — shrinking both the numerator and denominator (**hidden unemployment**). Second, inflation dropping from 8.0% to 3.5% is **disinflation** (prices are still *rising*, just more slowly), NOT **deflation** (falling prices).",
      },
      body: `Governments pursue five core macroeconomic objectives: sustained **economic growth**, **low unemployment**, **low and stable inflation**, a **sustainable level of national debt**, and **equitable income distribution** (covered in Section 3.4).

### 1. Economic Growth
Economic growth is an increase in real GDP over time. **Actual growth** utilizes idle capacity (movement from inside a PPC toward the frontier / rightward AD shift), while **potential growth** expands productive capacity (outward PPC shift / rightward LRAS shift). Benefits include higher living standards, lower cyclical unemployment, and stronger fiscal revenues; risks include demand-pull inflation, rising import bills, income inequality, and environmental externalities.

### 2. Low Unemployment
Under the ILO definition, a person is **unemployed** if they are of working age, without work, available for work, and **actively seeking** employment.
- **Labour Force** = Employed + Unemployed
- **Unemployment Rate** = {{("Unemployed" / "Labour Force") * 100}}%
- **Labour Force Participation Rate (LFPR)** = {{("Labour Force" / "Working-Age Population") * 100}}%

**Measurement limitations:** official statistics miss **hidden unemployment** — *discouraged workers* who give up searching, *underemployed* involuntary part-time workers, and people pushed into early retirement or training schemes — and mask sharp regional, youth, and ethnic disparities.

**Four Types of Unemployment:**
- **Frictional:** temporary job-search gaps between leaving one role and starting another (imperfect information).
- **Seasonal:** predictable annual fluctuations in demand (e.g. tourism, agriculture, retail holidays).
- **Structural:** long-term mismatch between workers' skills/locations and job vacancies due to technological change, offshoring, or labour-market rigidities.
- **Cyclical (demand-deficient):** layoffs caused by a downturn in Aggregate Demand during recessions.
- **Natural Rate of Unemployment (NRU)** = Frictional + Seasonal + Structural unemployment. Even at full-employment output ({{Y_fe}}), cyclical unemployment is zero while NRU persists!

### 3. Low & Stable Inflation (Weighted CPI)
**Inflation** is a sustained increase in the general price level. It is measured using a **weighted Consumer Price Index (CPI)** based on a representative household's basket of goods and services, weighted by expenditure share:
- **CPI** = {{("Cost of Basket in Current Year" / "Cost of Basket in Base Year") * 100}} (or weighted sum of category indices)
- **Inflation Rate** = {{(("CPI"_2 - "CPI"_1) / "CPI"_1) * 100}}%

**Limitations of CPI:** different income groups spend different shares (a basket for the average household misstates inflation for pensioners or students), **substitution bias** (consumers switch away from pricier goods faster than weights update), uncaptured **quality improvements**, delays adding **new products**, and exclusion of asset/property purchase prices.

- **Demand-pull inflation:** excess AD near or above {{Y_fe}} ("too much money chasing too few goods").
- **Cost-push inflation:** leftward SRAS shift from higher wages, energy prices, or imported-input costs → causes **stagflation**.
- **Disinflation vs Deflation:** **Disinflation** means a slower *positive* inflation rate (e.g. 6% → 2%; prices still rise). **Deflation** means a *negative* inflation rate (average prices fall). While benign supply-side deflation (tech productivity) raises real output, **malign demand-side deflation** triggers a **deflationary spiral**: consumers delay purchases expecting lower future prices → AD falls further → firms slash prices and lay off workers → the **real value of existing debt rises**, squeezing borrowers and banks.

### 4. Sustainable Level of National Debt
A **budget deficit** is an annual *flow* ({{G > T}} in one year); **national debt** is the accumulated *stock* of all past deficits minus surpluses, evaluated via the **Debt-to-GDP ratio**. High, rising debt-to-GDP ratios carry major opportunity costs: higher debt-servicing interest crowds out health/education budgets, credit-rating downgrades raise borrowing yields, fiscal capacity shrinks for future recessions, and heavy external debt drains foreign currency.

### 5. [HL] The Short-Run & Long-Run Phillips Curve
William Phillips observed an inverse empirical relationship between wage inflation and unemployment:
- **Short-Run Phillips Curve (SRPC):** slopes downward — an AD increase moves the economy *up and left* along SRPC (lower unemployment, higher inflation), while an AD fall moves it *down and right* (higher unemployment, lower inflation).
- **Shifts of SRPC:** adverse supply shocks (cost-push inflation) or higher expected inflation shift SRPC **rightward/outward**, producing **stagflation** (higher inflation *and* higher unemployment simultaneously). Positive supply shocks shift SRPC leftward/inward.
- **Long-Run Phillips Curve (LRPC):** Monetarists (Friedman & Phelps) demonstrated that the trade-off collapses in the long run! Starting at point **A** on {{SRPC_1}} at the **NRU**, expansionary AD policy temporarily lowers unemployment to point **B** with higher inflation. Once workers notice inflation eroding their real wages, they raise **inflation expectations** and demand higher nominal wages. Higher wage costs shift **SRAS left** and **SRPC outward** to {{SRPC_2}}, returning unemployment right back to the **NRU** at point **C** — only with permanently higher inflation! Thus **LRPC is vertical at the NRU**, and only supply-side reforms can shift LRPC leftward.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 300" role="img" aria-label="HL Phillips Curve diagram showing vertical LRPC at NRU, SRPC1 shifting rightward to SRPC2, and expectations adjustment path A to B to C">
  <rect x="0" y="0" width="520" height="300" fill="#ffffff" rx="8"/>
  <defs>
    <marker id="arr-pc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151"/>
    </marker>
    <marker id="arr-mv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c2410c"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="62" y1="248" x2="488" y2="248" stroke="#374151" stroke-width="2" marker-end="url(#arr-pc)"/>
  <line x1="62" y1="248" x2="62" y2="22" stroke="#374151" stroke-width="2" marker-end="url(#arr-pc)"/>
  <text x="486" y="274" font-size="12" font-weight="700" fill="#1f2937" text-anchor="end">Unemployment Rate (%)</text>
  <text x="18" y="135" font-size="12" font-weight="700" fill="#1f2937" transform="rotate(-90 18 135)" text-anchor="middle">Inflation Rate (%)</text>

  <!-- Zero inflation baseline (allows negative inflation below) -->
  <line x1="62" y1="218" x2="470" y2="218" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4 4"/>
  <text x="54" y="222" font-size="10.5" fill="#6b7280" text-anchor="end">0%</text>

  <!-- Vertical LRPC at NRU -->
  <line x1="255" y1="248" x2="255" y2="38" stroke="#0d9488" stroke-width="2.8"/>
  <text x="255" y="31" font-size="12" font-weight="800" fill="#0d9488" text-anchor="middle">LRPC</text>
  <text x="255" y="266" font-size="11.5" font-weight="800" fill="#0d9488" text-anchor="middle">NRU</text>

  <!-- SRPC1 -->
  <path d="M 118 58 Q 168 174 410 228" fill="none" stroke="#2563eb" stroke-width="2.6"/>
  <text x="416" y="232" font-size="11.5" font-weight="700" fill="#2563eb">SRPC₁</text>

  <!-- SRPC2 (higher expected inflation / adverse supply shock) -->
  <path d="M 184 42 Q 238 148 452 198" fill="none" stroke="#c2410c" stroke-width="2.6" stroke-dasharray="6 4"/>
  <text x="456" y="196" font-size="11.5" font-weight="700" fill="#c2410c">SRPC₂</text>

  <!-- Dashed guide lines for A, B, C -->
  <line x1="62" y1="184" x2="255" y2="184" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="54" y="188" font-size="10.5" font-weight="700" fill="#1f2937" text-anchor="end">2%</text>

  <line x1="62" y1="126" x2="255" y2="126" stroke="#c2410c" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="54" y="130" font-size="10.5" font-weight="700" fill="#c2410c" text-anchor="end">5%</text>

  <line x1="168" y1="126" x2="168" y2="248" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="168" y="266" font-size="10.5" font-weight="700" fill="#2563eb" text-anchor="middle">U₁</text>

  <!-- Points A, B, C -->
  <circle cx="255" cy="184" r="5" fill="#1f2937"/>
  <text x="266" y="196" font-size="11" font-weight="800" fill="#1f2937">A (Initial LR)</text>

  <circle cx="168" cy="126" r="5" fill="#2563eb"/>
  <text x="118" y="122" font-size="11" font-weight="800" fill="#2563eb">B (SR AD↑)</text>

  <circle cx="255" cy="126" r="5" fill="#c2410c"/>
  <text x="268" y="122" font-size="11" font-weight="800" fill="#c2410c">C (New LR)</text>

  <!-- Arrows showing A -> B and B -> C -->
  <path d="M 244 176 Q 198 158 176 135" fill="none" stroke="#2563eb" stroke-width="1.8" marker-end="url(#arr-pc)"/>
  <line x1="179" y1="126" x2="243" y2="126" stroke="#c2410c" stroke-width="1.8" marker-end="url(#arr-mv)"/>

  <!-- Annotation box -->
  <rect x="302" y="44" width="186" height="58" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="1"/>
  <text x="395" y="61" font-size="10" font-weight="800" fill="#92400e" text-anchor="middle">[HL] Expectations Shift</text>
  <text x="395" y="76" font-size="9.5" fill="#78350f" text-anchor="middle">A→B: AD↑ lowers U briefly</text>
  <text x="395" y="90" font-size="9.5" fill="#78350f" text-anchor="middle">B→C: Higher wage claims shift SRPC</text>
</svg>`,
      diagramCaption:
        "[HL] The Phillips Curve: expansionary AD moves the economy along SRPC₁ (A → B), but rising inflation expectations shift SRPC rightward to SRPC₂, returning unemployment to NRU at higher inflation (C).",
      workedExamples: [
        {
          title: "Weighted Consumer Price Index (CPI) & Inflation Rate",
          problem:
            "A household's representative basket consists of three categories with base-year (2024) index = 100 for each: Food (weight 30%), Housing (weight 50%), and Transport (weight 20%). In 2025, the category price indices are Food = 108, Housing = 104, and Transport = 115. Calculate the weighted CPI in 2025 and the annual inflation rate.",
          steps: [
            "Multiply each 2025 category index by its expenditure weight (as a decimal):",
            "Food contribution = 108 × 0.30 = 32.4",
            "Housing contribution = 104 × 0.50 = 52.0",
            "Transport contribution = 115 × 0.20 = 23.0",
            "Weighted CPI (2025) = 32.4 + 52.0 + 23.0 = 107.4.",
            "Since base-year CPI (2024) = 100.0, annual inflation rate = {{((107.4 - 100) / 100) * 100}} = 7.4%.",
          ],
          answer: "Weighted CPI (2025) = 107.4; Annual inflation rate = 7.4%",
          yourTurn: {
            question:
              "If a country's CPI rises from 120.0 in Year 1 to 126.0 in Year 2, calculate the annual inflation rate (%).",
            answer: { type: "number", value: 5, display: "5%" },
            solution: "Inflation rate = ((126.0 − 120.0) ÷ 120.0) × 100 = (6 ÷ 120) × 100 = 5%.",
          },
        },
        {
          title: "Unemployment Rate, Discouraged Workers & [HL] Phillips Curve Shift",
          problem:
            "An economy has 19.0 million employed workers, 1.0 million unemployed workers, and 5.0 million economically inactive working-age adults. (a) Calculate the unemployment rate and labour force participation rate. (b) [HL] If a severe imported-oil shock raises inflation expectations, state how this appears on the Phillips Curve.",
          steps: [
            "Labour Force = Employed + Unemployed = 19.0 + 1.0 = 20.0 million.",
            "Working-Age Population = 20.0 + 5.0 = 25.0 million.",
            "Unemployment Rate = {{(1.0 / 20.0) * 100}} = 5.0%.",
            "Labour Force Participation Rate = {{(20.0 / 25.0) * 100}} = 80.0%.",
            "[HL] An adverse oil supply shock shifts SRAS left (cost-push stagflation), which shifts **SRPC outward/rightward**, creating higher inflation AND higher unemployment simultaneously.",
          ],
          answer: "Unemployment rate = 5.0%; LFPR = 80.0%; SRPC shifts rightward (stagflation).",
          yourTurn: {
            question:
              "An economy has 28.2 million employed people and 1.8 million unemployed people actively seeking work. Calculate the unemployment rate (%).",
            answer: { type: "number", value: 6, display: "6%" },
            solution: "Labour force = 28.2 + 1.8 = 30.0 million. Unemployment rate = (1.8 ÷ 30.0) × 100 = 6%.",
          },
        },
      ],
      keyPoints: [
        "Unemployment Rate = (Unemployed ÷ Labour Force) × 100; discouraged workers and involuntary part-time workers create hidden unemployment.",
        "Natural Rate of Unemployment (NRU) = Frictional + Seasonal + Structural; cyclical unemployment equals zero at full-employment output.",
        "Weighted CPI reflects expenditure shares; remember that CPI measures the *rate of change* via ((CPI₂ − CPI₁)/CPI₁) × 100, NOT simply CPI₂ − CPI₁ unless CPI₁ = 100!",
        "Disinflation = slower positive inflation (prices still rising); Deflation = negative inflation (falling average prices, risking a deflationary spiral).",
        "National debt is a stock measured against GDP (debt-to-GDP ratio); a budget deficit is an annual flow adding to that stock.",
        "[HL] AD shifts cause movements *along* SRPC; supply shocks and inflation expectations *shift* SRPC; LRPC is vertical at the NRU.",
      ],
      whyItWorks:
        "Macroeconomic objectives frequently conflict in the short run because demand-side booms lower cyclical unemployment while tightening labour markets and pushing up inflation (moving up SRPC). In the long run, workers care about *real* wages rather than nominal wages — once expectations adjust, nominal demand boosts cease reducing unemployment below the structural NRU.",
      strategies: [
        "When calculating inflation from Year 2 to Year 3 (where neither year is the base year 100), ALWAYS divide the CPI change by **Year 2's CPI**, not by 100 — this is one of the most frequent IB Paper 2/3 errors!",
        "Pair every [HL] Phillips Curve explanation with its mirror **AD/AS diagram**: rightward AD ↔ move up-left along SRPC; leftward SRAS ↔ shift SRPC right; rightward LRAS ↔ shift LRPC left.",
      ],
      thinkDeeper:
        "Why do most central banks target ~2% inflation rather than 0% inflation? Think about downward nominal wage rigidity, the zero lower bound on nominal interest rates, and CPI upward bias!",
    },

    // =========================================================================
    // SECTION 4: 3.4 INEQUALITY, LORENZ CURVE & TAXATION
    // =========================================================================
    {
      id: "inequality-lorenz-taxation",
      heading: "3.4 Economics of Inequality & Poverty (Lorenz, Gini & Tax Calculations)",
      level: "SL",
      discovery: {
        problem:
          "Worker A earns **$20,000** and spends $18,000 on goods subject to a flat **10% GST/VAT**. Worker B earns **$100,000** and spends $50,000 on taxable goods. Both face the exact same 10% tax rate at the checkout — so is this tax proportional or regressive?",
        idea:
          "It is **regressive**! Worker A pays $1,800 in GST — **9.0% of income** ({{1800 / 20000}}). Worker B pays $5,000 in GST — only **5.0% of income** ({{5000 / 100000}}). Because lower-income households spend a higher proportion of their income (higher average propensity to consume), flat indirect taxes always take a larger share of income from poorer households.",
      },
      body: `High GDP growth does not automatically lift every household. Economists distinguish carefully between **equality** (identical outcomes — a positive, measurable fact) and **equity** (fairness — a normative value judgement).

### Income vs Wealth Inequality
- **Income** is a *flow* of earnings over a period (wages, rent, interest, dividends, transfer payments).
- **Wealth** is a *stock* of net assets owned at a point in time (property, equities, savings, pensions minus debts).
- Wealth inequality is nearly always far greater than income inequality because wealthy households save more, earn compounding capital returns, and pass assets down via inheritance.

### The Lorenz Curve & Gini Coefficient
The **Lorenz curve** graphs the cumulative percentage of population (ranked poorest to richest on the horizontal axis) against the cumulative percentage of total income (vertical axis):
- The **45° diagonal** is the **line of perfect equality** (e.g. poorest 40% earn 40% of income).
- The further the Lorenz curve bows downwards away from the 45° diagonal, the **greater the income inequality**.
- The **Gini coefficient** converts the Lorenz diagram into a single index between **0** and **1** (or 0 to 100):
  **Gini = {{A / (A + B)}}**
  where **A** is the area between the 45° line and the Lorenz curve, and **B** is the area beneath the Lorenz curve (since the triangle under the 45° diagonal has total area {{A + B = 0.5}}, {{Gini = 2A}}).
  - **Gini = 0:** perfect equality (Lorenz curve lies on the 45° line).
  - **Gini = 1:** complete inequality (one household captures 100% of national income).

### Absolute vs Relative Poverty & Single/Composite Measures
- **Absolute poverty:** lacking sufficient income to afford basic physical survival essentials (food, clean water, shelter, basic clothing). The World Bank sets the international extreme poverty line at **$2.15/day (2017 PPP)**.
- **Relative poverty:** having household income below a specified percentage (typically **50% or 60%**) of the country's *median* income — measuring exclusion from prevailing social standards.
- **Minimum Income Standards (MIS):** estimates the minimum budget required for a household to achieve a socially acceptable standard of living in a specific society.
- **Multidimensional Poverty Index (MPI):** a composite indicator tracking acute deprivations across **3 dimensions** — Health, Education, and Standard of Living — using 10 concrete indicators (e.g. child mortality, years of schooling, electricity, clean water, sanitation), capturing non-income poverty that monetary lines miss.

### Causes & Consequences of Inequality and Poverty
**Causes:** unequal access to education/healthcare (human capital), unequal ownership of capital/land and inheritance, skill-biased technological change and globalization widening wage gaps, structural unemployment, discrimination, and regressive tax structures.
**Consequences:** poorer health/educational outcomes, trapped intergenerational mobility, **lower aggregate consumption** (low-income households have a higher MPC than wealthy households), higher crime and social/political instability — balanced in policy debates against the argument that *some* income differentials provide incentives for effort, investment, and entrepreneurship.

### Taxation Systems & [HL] Quantitative Tax Calculations
Taxes are classified by how the **Average Tax Rate (ATR)** behaves as income rises:
- **Progressive tax:** ATR rises as income rises (marginal tax rate > average tax rate), narrowing post-tax inequality — e.g. multi-bracket personal income tax.
- **Proportional (flat) tax:** ATR stays constant at every income level (MTR = ATR).
- **Regressive tax:** ATR falls as income rises — e.g. flat indirect taxes (VAT, GST, sales tax, excise duties).

**[HL] Key Tax Formulas:**
- **Marginal Tax Rate (MTR)** = {{(Δ"Tax Paid" / Δ"Income") * 100}}% (the rate paid on the *next* dollar earned — apply each bracket rate ONLY to income *within* that slice!).
- **Average Tax Rate (ATR)** = {{("Total Tax Paid" / "Total Income") * 100}}%
- **Indirect Tax Burden (% of income)** = {{("Indirect Tax Paid" / "Total Income") * 100}}%

### Policies to Reduce Poverty & Inequality
- **Transfer payments:** unemployment benefits, child allowances, state pensions (means-tested to target the poorest vs universal to avoid stigma and poverty traps).
- **Universal Basic Income (UBI):** unconditional regular cash payment to every resident — reduces administrative cost and poverty-trap disincentives, but raises major fiscal-cost and inflation concerns.
- **Targeted government spending (human capital & merit goods):** subsidised or free quality education, vocational retraining, healthcare, and public transport — promotes long-term *equality of opportunity* while also shifting LRAS right!
- **Labour-market & legal policies:** national minimum wages, collective bargaining rights, and anti-discrimination enforcement (evaluating higher earnings for low-paid workers against potential job losses if set far above market equilibrium).`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 310" role="img" aria-label="Lorenz curve diagram comparing Country A and Country B against the 45-degree line of perfect equality with Areas A and B labelled for Gini calculation">
  <rect x="0" y="0" width="520" height="310" fill="#ffffff" rx="8"/>
  <!-- Square plot area: x from 90 to 330 (width 240), y from 260 down to 20 (height 240) -->
  <rect x="90" y="20" width="240" height="240" fill="#fcf9f2" stroke="#d1d5db" stroke-width="1"/>
  <!-- Light grid at 20% intervals (48px each) -->
  <g stroke="#e5e7eb" stroke-width="1">
    <line x1="138" y1="20" x2="138" y2="260"/>
    <line x1="186" y1="20" x2="186" y2="260"/>
    <line x1="234" y1="20" x2="234" y2="260"/>
    <line x1="282" y1="20" x2="282" y2="260"/>
    <line x1="90" y1="212" x2="330" y2="212"/>
    <line x1="90" y1="164" x2="330" y2="164"/>
    <line x1="90" y1="116" x2="330" y2="116"/>
    <line x1="90" y1="68" x2="330" y2="68"/>
  </g>

  <!-- Shaded Area A (between diagonal and Country B Lorenz curve) -->
  <path d="M 90 260 L 330 20 L 282 149.6 L 234 200 L 186 231.2 L 138 250.4 Z" fill="#fef3c7" opacity="0.85"/>
  <!-- Shaded Area B (below Country B Lorenz curve) -->
  <path d="M 90 260 L 138 250.4 L 186 231.2 L 234 200 L 282 149.6 L 330 20 L 330 260 Z" fill="#ccfbf1" opacity="0.8"/>

  <!-- Axes -->
  <line x1="90" y1="260" x2="336" y2="260" stroke="#374151" stroke-width="2"/>
  <line x1="90" y1="260" x2="90" y2="16" stroke="#374151" stroke-width="2"/>

  <!-- 45-degree Line of Perfect Equality -->
  <line x1="90" y1="260" x2="330" y2="20" stroke="#374151" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="196" y="128" font-size="10.5" font-weight="700" fill="#374151" transform="rotate(-45 196 128)" text-anchor="middle">Line of perfect equality (45°)</text>

  <!-- Country A (more equal) Lorenz curve -->
  <path d="M 90 260 Q 210 218 330 20" fill="none" stroke="#0d9488" stroke-width="2.4" stroke-dasharray="5 3"/>

  <!-- Country B (less equal) Lorenz curve through quintiles (0,0),(20,4),(40,12),(60,25),(80,46),(100,100) -->
  <polyline points="90,260 138,250.4 186,231.2 234,200 282,149.6 330,20" fill="none" stroke="#b45309" stroke-width="3"/>
  <g fill="#b45309">
    <circle cx="138" cy="250.4" r="3.5"/>
    <circle cx="186" cy="231.2" r="3.5"/>
    <circle cx="234" cy="200" r="3.5"/>
    <circle cx="282" cy="149.6" r="3.5"/>
  </g>

  <!-- Area Labels -->
  <text x="220" y="176" font-size="14" font-weight="800" fill="#b45309" text-anchor="middle">A</text>
  <text x="286" y="228" font-size="14" font-weight="800" fill="#0d9488" text-anchor="middle">B</text>

  <!-- Axis ticks -->
  <g font-size="10" fill="#4b5563" text-anchor="middle">
    <text x="90" y="275">0</text>
    <text x="138" y="275">20</text>
    <text x="186" y="275">40</text>
    <text x="234" y="275">60</text>
    <text x="282" y="275">80</text>
    <text x="330" y="275">100</text>
  </g>
  <g font-size="10" fill="#4b5563" text-anchor="end">
    <text x="82" y="264">0</text>
    <text x="82" y="216">20</text>
    <text x="82" y="168">40</text>
    <text x="82" y="120">60</text>
    <text x="82" y="72">80</text>
    <text x="82" y="24">100</text>
  </g>

  <!-- Axis titles -->
  <text x="210" y="296" font-size="11.5" font-weight="700" fill="#1f2937" text-anchor="middle">Cumulative % of Population</text>
  <text x="22" y="140" font-size="11.5" font-weight="700" fill="#1f2937" transform="rotate(-90 22 140)" text-anchor="middle">Cumulative % of Income</text>

  <!-- Legend Box -->
  <rect x="350" y="54" width="156" height="176" rx="8" fill="#f8f2e4" stroke="#eadcc4" stroke-width="1.2"/>
  <text x="428" y="76" font-size="11.5" font-weight="800" fill="#1f2937" text-anchor="middle">Reading the Lorenz</text>
  <line x1="364" y1="98" x2="390" y2="98" stroke="#0d9488" stroke-width="2.4" stroke-dasharray="5 3"/>
  <text x="396" y="102" font-size="10" font-weight="700" fill="#0d9488">Country A (more equal)</text>
  <line x1="364" y1="122" x2="390" y2="122" stroke="#b45309" stroke-width="3"/>
  <text x="396" y="126" font-size="10" font-weight="700" fill="#b45309">Country B (less equal)</text>
  <text x="364" y="156" font-size="10.5" font-weight="800" fill="#1f2937">Gini = A ÷ (A + B)</text>
  <text x="364" y="176" font-size="9.5" fill="#4b5563">• Gini = 0: perfect equality</text>
  <text x="364" y="194" font-size="9.5" fill="#4b5563">• Gini = 1: max inequality</text>
  <text x="364" y="214" font-size="9.5" fill="#92400e">Further out ⇒ larger A</text>
</svg>`,
      diagramCaption:
        "The Lorenz curve: Country B bows further from the 45° diagonal than Country A, yielding a larger Area A and therefore a higher Gini coefficient.",
      workedExamples: [
        {
          title: "[HL] Multi-Bracket Progressive Income Tax Calculation",
          problem:
            "Country K applies the following progressive personal income tax brackets:\n- $0 – $15,000: 0%\n- $15,001 – $40,000: 10%\n- $40,001 – $80,000: 25%\n- Over $80,000: 40%\n\nA worker earns **$60,000** per year. Calculate (a) total income tax paid, (b) the worker's marginal tax rate (MTR), and (c) the worker's average tax rate (ATR) to 2 decimal places.",
          steps: [
            "Slice the $60,000 income strictly by bracket — NEVER multiply $60,000 by 25%!",
            "Bracket 1 ($0 to $15,000): $15,000 × 0% = $0.",
            "Bracket 2 ($15,001 to $40,000): ($40,000 − $15,000) = $25,000 × 10% = $2,500.",
            "Bracket 3 ($40,001 to $60,000): ($60,000 − $40,000) = $20,000 × 25% = $5,000.",
            "Total income tax = $0 + $2,500 + $5,000 = **$7,500**.",
            "Marginal tax rate (MTR) = **25%** (the rate on the last/next dollar earned inside the $40,001–$80,000 band).",
            "Average tax rate (ATR) = {{(7500 / 60000) * 100}} = **12.50%**. Notice MTR (25%) > ATR (12.50%), confirming the tax is progressive!",
          ],
          answer: "Total tax = $7,500; MTR = 25%; ATR = 12.50%",
          yourTurn: {
            question:
              "Using brackets of 0% on $0–$10,000, 10% on $10,001–$30,000, and 25% on income above $30,000, calculate the total income tax paid (in $) by someone earning $40,000.",
            answer: { type: "number", value: 4500, display: "$4,500" },
            solution:
              "Bracket 1: $10,000 × 0% = $0. Bracket 2: $20,000 × 10% = $2,000. Bracket 3: $10,000 × 25% = $2,500. Total tax = $4,500.",
          },
        },
        {
          title: "[HL] Indirect Tax Burden & Gini Area Calculation",
          problem:
            "In Country L, a uniform 12% VAT applies to all consumer purchases. Household 1 earns $25,000 and spends $20,000 on VAT-taxable goods; Household 2 earns $120,000 and spends $60,000. (a) Calculate each household's indirect tax paid as a percentage of income. (b) If Country L's Lorenz curve has Area A = 0.18 and Area B = 0.32, compute its Gini coefficient.",
          steps: [
            "Household 1 VAT paid = $20,000 × 0.12 = $2,400 → % of income = {{(2400 / 25000) * 100}} = **9.6%**.",
            "Household 2 VAT paid = $60,000 × 0.12 = $7,200 → % of income = {{(7200 / 120000) * 100}} = **6.0%**.",
            "Because Household 1 pays a higher % of income (9.6% > 6.0%), the uniform 12% VAT is **regressive**.",
            "Gini coefficient = {{A / (A + B)}} = {{0.18 / (0.18 + 0.32)}} = {{0.18 / 0.50}} = **0.36**.",
          ],
          answer: "Household 1 = 9.6% of income; Household 2 = 6.0% of income (regressive); Gini = 0.36",
          yourTurn: {
            question:
              "If a country's Lorenz curve has Area A = 0.16 (between the 45° diagonal and Lorenz curve) and Area B = 0.34 (beneath the Lorenz curve), calculate its Gini coefficient (to 2 decimal places).",
            answer: { type: "number", value: 0.32, tolerance: 0.005, display: "0.32" },
            solution: "Gini = A ÷ (A + B) = 0.16 ÷ (0.16 + 0.34) = 0.16 ÷ 0.50 = 0.32.",
          },
        },
      ],
      keyPoints: [
        "Income is a flow; wealth is a stock — wealth inequality is almost always more unequal than income inequality.",
        "On a Lorenz curve, bowing further away from the 45° line signals higher inequality; Gini = A / (A + B) spans 0 (equality) to 1 (complete inequality).",
        "Absolute poverty tracks survival needs ($2.15/day PPP); relative poverty tracks exclusion below 50–60% of national median income; MPI captures non-income health, education, and living-standard deprivations.",
        "Progressive taxes have MTR > ATR; proportional taxes have MTR = ATR; flat indirect taxes (VAT/GST) are regressive because poorer households spend a higher fraction of income.",
        "Evaluating redistribution always weighs **equity gains** against **efficiency/fiscal trade-offs** (work incentives, capital flight, administrative cost, budget sustainability).",
      ],
      whyItWorks:
        "Progressive tax brackets only apply higher rates to *marginal* slices above each threshold — so earning an extra dollar in a higher bracket NEVER makes your total take-home pay fall (a widespread real-world myth!). Meanwhile, shifting a Lorenz curve inward requires policies that raise the income share of bottom quintiles faster than top quintiles.",
      strategies: [
        "In [HL] Paper 3 progressive-tax problems, draw a quick vertical 'income ladder' showing each bracket's width (`top − bottom`) before multiplying by its rate — this guarantees you never tax the full income at the top rate.",
        "When evaluating redistribution in Paper 1 essays, compare a **short-term income transfer** (progressive tax + welfare/UBI, fast poverty relief but potential fiscal/disincentive costs) against **long-term human-capital investment** (education/healthcare, slow lag but boosts both equity AND LRAS!).",
      ],
      thinkDeeper:
        "Two countries can have the exact same Gini coefficient (say 0.38) while their Lorenz curves cross! What does it mean when Country X's Lorenz curve sits closer to the 45° line at the bottom 40% but bows further out at the top 20% compared to Country Y?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Expenditure Approach to GDP",
        back: "GDP = C + I + G + (X − M), measuring total spending on domestic final goods and services over one year (excluding transfer payments, second-hand goods, and intermediate inputs).",
      },
      {
        front: "GDP vs GNI (Gross National Income)",
        back: "GDP measures output produced *within national borders*; GNI = GDP + Net Property Income from Abroad measures income earned by a country's *residents and domestically owned factors* regardless of location.",
      },
      {
        front: "Nominal GDP vs Real GDP",
        back: "Nominal GDP uses current-year prices (includes inflation); Real GDP uses constant base-year prices via Real GDP = (Nominal GDP ÷ GDP Deflator) × 100 to isolate physical output changes.",
      },
      {
        front: "Purchasing Power Parity (PPP)",
        back: "An exchange-rate adjustment equalizing the purchasing power of currencies by accounting for cross-country differences in local price levels (especially cheaper non-tradable services in developing nations).",
      },
      {
        front: "Three Reasons Aggregate Demand (AD) Slopes Downward",
        back: "1. Wealth effect (lower PL raises real value of money savings → C↑). 2. Interest-rate effect (lower PL lowers money demand → i↓ → C, I↑). 3. International trade effect (cheaper domestic goods → X↑, M↓).",
      },
      {
        front: "Monetarist / New Classical LRAS vs Keynesian AS",
        back: "Monetarist LRAS is vertical at full employment (Y_fe) with flexible wages self-correcting gaps; Keynesian AS has horizontal (spare capacity), curved (bottleneck), and vertical sections due to sticky downward wages.",
      },
      {
        front: "Natural Rate of Unemployment (NRU)",
        back: "NRU = Frictional + Seasonal + Structural unemployment — the unemployment rate that remains even when the economy is at full-employment output (Y_fe) with zero cyclical unemployment.",
      },
      {
        front: "Hidden Unemployment",
        back: "Unemployed or underutilized workers omitted from official unemployment statistics, including discouraged workers who stopped actively searching and involuntary part-time (underemployed) workers.",
      },
      {
        front: "Disinflation vs Deflation",
        back: "Disinflation is a falling *rate* of inflation (prices still rise, just more slowly, e.g. 6% → 2%). Deflation is a sustained *fall* in the general price level (negative inflation rate).",
      },
      {
        front: "Demand-Pull vs Cost-Push Inflation",
        back: "Demand-pull inflation results from rightward AD shifts near/beyond Y_fe (output rises). Cost-push inflation results from leftward SRAS shifts due to higher input/wage costs (output falls → stagflation).",
      },
      {
        front: "Budget Deficit vs National Debt",
        back: "A budget deficit is an annual *flow* (G > T in a single fiscal year); national debt is the accumulated *stock* of all past deficits minus surpluses, assessed via the Debt-to-GDP ratio.",
      },
      {
        front: "[HL] Short-Run vs Long-Run Phillips Curve (SRPC & LRPC)",
        back: "SRPC slopes downward (short-run AD trade-off between inflation and unemployment); supply shocks or rising inflation expectations shift SRPC outward. LRPC is vertical at the NRU — no long-run trade-off.",
        level: "HL",
      },
      {
        front: "Lorenz Curve & Gini Coefficient",
        back: "Lorenz plots cumulative % population vs cumulative % income against a 45° line of perfect equality. Gini = A ÷ (A + B), ranging from 0 (perfect equality) to 1 (complete inequality).",
      },
      {
        front: "Absolute vs Relative Poverty & MPI",
        back: "Absolute poverty = inability to meet basic physical survival needs ($2.15/day PPP). Relative poverty = income below 50–60% of national median. MPI measures non-income deprivations in health, education, and living standards.",
      },
      {
        front: "[HL] Marginal Tax Rate (MTR) vs Average Tax Rate (ATR)",
        back: "MTR = (ΔTax ÷ ΔIncome) × 100 (tax rate on the next dollar earned); ATR = (Total Tax ÷ Total Income) × 100. In a progressive system, MTR > ATR.",
        level: "HL",
      },
      {
        front: "Why Flat Indirect Taxes (VAT/GST) Are Regressive",
        back: "Lower-income households spend a higher share of their income on taxed consumption than wealthy households, so a uniform VAT/GST takes a larger *percentage of income* from poorer households.",
      },
    ],
    mustKnow: [
      "Three GDP approaches (Expenditure, Income, Output/Value Added) yield identical national output when intermediate goods and transfer payments are excluded.",
      "To compare living standards fairly across nations and years, use **Real GDP/GNI per capita at PPP** — and supplement with Green GDP, OECD Better Life Index, or Happiness Index.",
      "In AD/AS diagrams, label the axes **Average Price Level** and **Real GDP** (never Price and Quantity!), and distinguish SRAS cost shocks from permanent LRAS capacity shifts.",
      "Monetarists assume flexible wages that self-correct output gaps back to vertical LRAS; Keynesians assume sticky downward wages that trap economies in persistent deflationary gaps.",
      "Official unemployment rates exclude discouraged and underemployed workers (hidden unemployment), and full employment still includes structural, frictional, and seasonal unemployment (NRU).",
      "Always compute inflation between non-base years as `((CPI₂ − CPI₁) / CPI₁) × 100`, and distinguish benign supply-side deflation from a destructive demand-side deflationary spiral.",
      "[HL] Expansionary AD policies move an economy up-left along SRPC in the short run, but rising inflation expectations shift SRPC rightwards, returning unemployment to vertical LRPC at the NRU.",
      "Lorenz curves bowing further from the 45° diagonal have larger Area A and higher Gini coefficients; progressive income taxes reduce post-tax Gini while flat indirect taxes are regressive.",
      "[HL] Multi-bracket income tax taxes each *slice* of income at its own bracket rate — never multiply total income by the top marginal bracket rate!",
      "Sustainable debt management hinges on the Debt-to-GDP ratio, interest rates relative to GDP growth, and whether borrowing finances productive capital or current consumption.",
    ],
    misconceptions: [
      {
        wrong: "Government transfer payments (pensions, welfare benefits) are included in G when calculating GDP.",
        right: "Transfer payments are EXCLUDED from GDP because no current good or service is produced in exchange; they only enter GDP later if recipients spend them as Consumption (C).",
      },
      {
        wrong: "The Aggregate Demand curve slopes downward because of the microeconomic substitution effect.",
        right: "AD represents *all* goods together, so there is no other good to substitute into! AD slopes downward due to the **wealth effect**, **interest-rate effect**, and **international trade (net-export) effect**.",
      },
      {
        wrong: "Disinflation means prices are falling.",
        right: "Disinflation means the *rate* of inflation is slowing (e.g. from 7% to 3%), so average prices are still **rising**, just more slowly. Falling prices is **deflation** (negative inflation).",
      },
      {
        wrong: "Zero unemployment is the macroeconomic objective of full employment.",
        right: "Full employment occurs at the **Natural Rate of Unemployment (NRU)** — when cyclical unemployment is zero, but healthy frictional, seasonal, and unavoidable structural unemployment still exist.",
      },
      {
        wrong: "A higher inflation rate always moves an economy down-left along a fixed Phillips Curve with lower unemployment.",
        right: "Only demand-pull (AD) expansions move along SRPC. Cost-push supply shocks shift **SRPC outward**, raising inflation and unemployment simultaneously (**stagflation**), and in the long run expectations return unemployment to vertical **LRPC at NRU**.",
        level: "HL",
      },
      {
        wrong: "If you earn $1 more and cross into the 30% tax bracket, your entire income gets taxed at 30% and your take-home pay drops.",
        right: "In a progressive bracket system, ONLY the extra dollar *above the threshold* is taxed at 30% (marginal rate). Your average tax rate rises smoothly and net income always increases.",
        level: "HL",
      },
      {
        wrong: "A flat 10% VAT or GST is a proportional tax because everyone pays the same 10% rate.",
        right: "Tax progressivity is measured relative to **income**, not spending. Because low-income households spend a higher fraction of income than rich households, a flat 10% VAT takes a larger % of a poor household's income — making it **regressive**.",
      },
      {
        wrong: "If a country cuts its budget deficit from $80 billion to $50 billion, its national debt falls.",
        right: "A smaller budget deficit ($50 billion) is still a deficit (`G > T`), so the **stock of national debt still rises** by $50 billion — just more slowly! National debt only falls when the government runs a budget *surplus*.",
      },
    ],
    examMistakes: [
      "Labelling AD/AS axes as 'Price (P)' and 'Quantity (Q)' instead of **Average Price Level (PL)** and **Real GDP (Y)** — this immediately costs diagram marks in IB Paper 1 and Paper 2!",
      "Forgetting to subtract Imports (M) or adding transfer payments into G when computing Expenditure GDP.",
      "Calculating inflation from CPI₁ = 120 to CPI₂ = 126 as `126 − 120 = 6%` instead of `((126 − 120) ÷ 120) × 100 = 5%`.",
      "Drawing a Keynesian AS curve that starts straight up from the origin or lacks a clear horizontal spare-capacity zone and vertical full-employment asymptote at Y_fe.",
      "Treating a fall in the official unemployment rate as automatic job creation without checking whether **discouraged workers** exited the labour force.",
      "In Paper 1 Part (b) 15-mark essays on inequality or macro objectives, writing purely theoretical evaluation without integrating concrete **real-world country examples** (required for top-band marks under the FA2022 syllabus!).",
      "[HL] Confusing the **marginal tax rate** with the **average tax rate**, or forgetting to exclude the tax-free personal allowance slice when summing tax brackets.",
      "Conflating **equity** (normative fairness) with **equality** (identical income shares), or claiming a country with a lower Gini must have less absolute poverty (a very poor country can have low inequality yet widespread absolute poverty!).",
    ],
    mnemonics: [
      {
        topic: "Aggregate Demand Downward Slope",
        device: "W-I-N (Wealth, Interest-rate, Net-exports)",
        explanation:
          "Lower average price levels boost real Wealth (C↑), lower Interest rates (C, I↑), and raise Net exports (X↑, M↓) — never use micro substitution effects!",
      },
      {
        topic: "Four Types of Unemployment",
        device: "S-F-S-C → 'Stay Focused, Study Consistently' (Structural, Frictional, Seasonal = NRU; Cyclical = AD gap)",
        explanation:
          "The first three (S, F, S) make up the Natural Rate of Unemployment (NRU) even at full employment; only Cyclical unemployment disappears at Y_fe.",
      },
      {
        topic: "National Income Adjustments for Living Standards",
        device: "R-P-P (Real → Per Capita → PPP)",
        explanation:
          "Strip out inflation (Real), divide by population (Per Capita), and adjust for local cost-of-living differences (PPP).",
      },
      {
        topic: "[HL] Phillips Curve Movement vs Shift",
        device: "AD Slides Along; AS & Expectations Shift",
        explanation:
          "Any Aggregate Demand shock slides along a fixed SRPC; any SRAS supply shock or change in inflation expectations shifts the entire SRPC.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Ireland's GDP vs GNI* ('Leprechaun Economics')",
        detail:
          "In 2015, intellectual-property relocations by foreign multinationals made Ireland's GDP jump by over 25% in a single year without matching gains in Irish household living standards — prompting Ireland's statistics office to publish Modified GNI (GNI*) to strip out foreign multinational profit flows.",
        emoji: "☘️",
      },
      {
        title: "2021–2023 Global Supply-Shock Inflation & SRPC Outward Shift",
        detail:
          "Post-COVID supply-chain bottlenecks combined with the 2022 European energy-price shock pushed UK and Eurozone CPI above 10% while squeezing real GDP — a textbook leftward SRAS shift and [HL] outward SRPC shift into stagflation pressures.",
        emoji: "⚡",
      },
      {
        title: "Japan's 'Lost Decades' & Deflationary Spiral",
        detail:
          "After its 1990s asset-bubble burst, Japan endured over two decades of near-zero or negative CPI inflation: consumers delayed spending, firms froze wages, and real debt burdens weighed on growth despite ultra-low interest rates.",
        emoji: "🇯🇵",
      },
      {
        title: "Nordic Redistribution vs South Africa's Gini Gap",
        detail:
          "Denmark and Norway combine high progressive personal income taxes with generous universal healthcare and education to achieve post-tax Gini coefficients near 0.26–0.28, whereas South Africa's historical structural inequalities leave its Gini above 0.60.",
        emoji: "⚖️",
      },
      {
        title: "Singapore's GST + GST Voucher Equity Offset",
        detail:
          "When Singapore raised its Goods and Services Tax (GST) from 7% to 9% (2023–2024), policymakers acknowledged GST's regressive impact and paired the hike with permanent means-tested GST Vouchers and Assurance Package cash transfers for lower-income households.",
        emoji: "🇸🇬",
      },
      {
        title: "New Zealand Wellbeing Budget & Bhutan's GNH",
        detail:
          "Moving beyond GDP alone, Bhutan pioneered Gross National Happiness (GNH) and New Zealand adopted Wellbeing Budgets aligning fiscal allocation directly with mental health, child poverty reduction, and environmental sustainability — echoing the OECD Better Life Index.",
        emoji: "🌿",
      },
    ],
    videos: [
      {
        title: "Measuring National Income: GDP, GNI, Real GDP & PPP (IB Economics 3.1)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+measuring+economic+activity+GDP+GNI",
      },
      {
        title: "AD/AS Models: Monetarist/New Classical vs Keynesian (IB Economics 3.2)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+Keynesian+vs+Monetarist+LRAS+AD+AS",
      },
      {
        title: "The Short-Run and Long-Run Phillips Curve Explained [HL]",
        channel: "Jacob Clifford",
        url: "https://www.youtube.com/results?search_query=Jacob+Clifford+Phillips+Curve+SRPC+LRPC+stagflation",
      },
      {
        title: "Lorenz Curve, Gini Coefficient & Progressive/Regressive Tax [HL]",
        channel: "Brad Cartwright IB Economics",
        url: "https://www.youtube.com/results?search_query=IB+Economics+Lorenz+curve+Gini+coefficient+progressive+tax+calculation",
      },
    ],
    formulas: [
      {
        name: "Expenditure Approach to GDP",
        formula: "{{GDP = C + I + G + (X - M)}}",
        note: "Sum of consumption, investment, government purchases (excl. transfers), and net exports.",
      },
      {
        name: "Gross National Income (GNI)",
        formula: "{{GNI = GDP + \"Net Property Income from Abroad\"}}",
        note: "Adjusts domestic production (GDP) for factor incomes earned abroad minus paid to foreigners.",
      },
      {
        name: "Real GDP from GDP Deflator",
        formula: "{{\"Real GDP\" = (\"Nominal GDP\" / \"GDP Deflator\") * 100}}",
        note: "Removes price-level inflation using base-year deflator = 100.",
      },
      {
        name: "Real Economic Growth Rate",
        formula: "{{\"Growth Rate (%)\" = ((\"Real GDP\"_2 - \"Real GDP\"_1) / \"Real GDP\"_1) * 100}}",
        note: "Always use Real GDP (never Nominal GDP) to measure true output expansion.",
      },
      {
        name: "Unemployment Rate",
        formula: "{{\"Unemployment Rate (%)\" = (\"Unemployed\" / \"Labour Force\") * 100}}",
        note: "Labour Force = Employed + Unemployed (excludes economically inactive and discouraged workers).",
      },
      {
        name: "Labour Force Participation Rate",
        formula: "{{\"LFPR (%)\" = (\"Labour Force\" / \"Working-Age Population\") * 100}}",
        note: "Tracks the share of working-age residents either employed or actively seeking jobs.",
      },
      {
        name: "Weighted Consumer Price Index (CPI)",
        formula: "{{CPI = (\"Basket Cost\"_t / \"Basket Cost\"_0) * 100}}",
        note: "Or sum of (category price index × category expenditure weight).",
      },
      {
        name: "Annual Inflation Rate",
        formula: "{{\"Inflation (%)\" = ((CPI_2 - CPI_1) / CPI_1) * 100}}",
        note: "Divide by Year 1's CPI — NOT by 100 unless Year 1 is the base year.",
      },
      {
        name: "Debt-to-GDP Ratio",
        formula: "{{\"Debt-to-GDP (%)\" = (\"National Debt\" / \"Nominal GDP\") * 100}}",
        note: "Assesses public debt sustainability relative to the economy's tax base.",
      },
      {
        name: "Gini Coefficient",
        formula: "{{\"Gini\" = A / (A + B)}}",
        note: "A = area between 45° line and Lorenz curve; A + B = 0.5, so Gini = 2A (range 0 to 1).",
      },
      {
        name: "[HL] Marginal Tax Rate (MTR)",
        formula: "{{MTR = (Δ\"Tax Paid\" / Δ\"Income\") * 100}}",
        note: "Tax rate applied exclusively to the additional slice of income earned.",
        level: "HL",
      },
      {
        name: "[HL] Average Tax Rate (ATR)",
        formula: "{{ATR = (\"Total Tax Paid\" / \"Total Income\") * 100}}",
        note: "In progressive taxation MTR > ATR; in regressive taxation ATR falls as income rises.",
        level: "HL",
      },
    ],
  },
};
