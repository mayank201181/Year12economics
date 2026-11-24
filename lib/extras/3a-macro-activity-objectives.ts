import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In 1934, when Simon Kuznets presented the first official US national income accounts to Congress, he issued an urgent warning on page 7: **'The welfare of a nation can scarcely be inferred from a measurement of national income.'** Almost a century later, GDP still dominates every news bulletin — and every IB Economics exam.",
  didYouKnow: [
    "In 1949, New Zealand engineer-turned-economist **Bill Phillips** (creator of the HL Phillips Curve!) built **MONIAC** — a two-metre-tall hydraulic computer using dyed water, transparent pipes, and sluice gates to simulate the UK's circular flow of income, taxes, savings, and inflation in real time!",
    "When **Ireland's** GDP surged by **26.3%** in a single year (2015) after foreign tech and pharmaceutical giants relocated intellectual-property assets there, Nobel laureate Paul Krugman dubbed it **'Leprechaun Economics'** — leading Ireland to publish Modified GNI (GNI*) alongside GDP.",
    "Italian statistician **Corrado Gini** published his famous inequality index in 1912 (*Variabilità e mutabilità*), just seven years after American economist **Max Lorenz** invented the Lorenz curve in 1905 while still a graduate student.",
    "The **Economist's Big Mac Index** — launched as a lighthearted guide to Purchasing Power Parity (PPP) in 1986 — became a fixture of academic macroeconomics because a burger bundles both globally traded ingredients (beef, flour) and local non-tradable costs (rent, kitchen wages).",
    "In 1972, Bhutan's Fourth Dragon King declared that **Gross National Happiness (GNH)** was more important than Gross Domestic Product, inspiring modern multidimensional dashboards like the **OECD Better Life Index** and New Zealand's **Wellbeing Budget**.",
  ],
  activities: [
    {
      title: "Build Your Personal Student CPI Basket",
      emoji: "🛒",
      materials: [
        "Notebook or spreadsheet",
        "Receipts or typical weekly spending estimates across 4 categories (Food/Canteen, Transport, Digital Subscriptions, Leisure)",
        "Last year's vs this year's local prices for each item",
      ],
      steps: [
        "Calculate your total weekly spending and turn each category into a percentage weight summing to 100% (for example: Food 45%, Transport 20%, Digital 15%, Leisure 20%).",
        "Set last year's price for every item equal to index 100, and compute this year's category price index = (Current Price ÷ Last Year's Price) × 100.",
        "Multiply each category's index by its decimal weight and sum the products to get your **Student CPI**.",
        "Compare your personal inflation rate against your country's official headline CPI (e.g. Singapore MAS / UK ONS / US BLS). Which category explains the gap?",
      ],
      maths:
        "Weighted CPI = sum of (weight × category index). Because students spend almost 0% on mortgage/housing purchase and a much higher weight on canteen meals and streaming than the 'average household', your personal inflation rate directly demonstrates **typical-household basket bias**!",
    },
    {
      title: "Classroom Quintile Lorenz Curve & Gini Lab",
      emoji: "📊",
      materials: [
        "5 index cards representing 5 equal population quintiles (20% each)",
        "100 counters (or $100 play money) representing total national income",
        "Graph paper or the Interactive Lorenz Curve widget in this app",
      ],
      steps: [
        "Deal the 100 counters across the 5 quintiles to mimic a high-inequality economy (e.g. 3, 7, 13, 22, 55) and plot cumulative income shares at 20%, 40%, 60%, 80%, and 100%.",
        "Compute the Gini coefficient via the trapezoidal rule: Area B = 0.1 × [2(c₁ + c₂ + c₃ + c₄) + 1], then Gini = (0.50 − B) ÷ 0.50.",
        "Now simulate a **progressive tax & transfer**: take 15 counters from Quintile 5 and distribute +6 to Q1, +5 to Q2, and +4 to Q3. Re-plot the Lorenz curve and recalculate Gini!",
        "Finally, test a **regressive 10% flat sales tax** (taking 1 counter from Q1 and 2 from Q5) and observe which way the Lorenz curve shifts.",
      ],
      maths:
        "With (3, 7, 13, 22, 55), cumulative shares are (0.03, 0.10, 0.23, 0.45, 1.00) → Area B = 0.262 → Gini = **0.476**. After the progressive transfer (9, 12, 17, 22, 40), Gini drops sharply to **0.288** — pulling the Lorenz curve visibly closer to the 45° diagonal!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Demand-Pull Inflation vs Cost-Push Stagflation (AD/SRAS Contrast)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 260" role="img" aria-label="Side-by-side AD/SRAS diagrams contrasting demand-pull inflation where AD shifts right and Real GDP rises against cost-push stagflation where SRAS shifts left and Real GDP falls">
  <rect x="0" y="0" width="540" height="260" fill="#ffffff" rx="8"/>
  <defs>
    <marker id="arr-ex" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151"/>
    </marker>
  </defs>

  <!-- LEFT: DEMAND-PULL -->
  <text x="140" y="20" font-size="12" font-weight="800" fill="#1f2937" text-anchor="middle">Demand-Pull Inflation (AD↑)</text>
  <line x1="40" y1="220" x2="248" y2="220" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ex)"/>
  <line x1="40" y1="220" x2="40" y2="34" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ex)"/>
  <text x="246" y="236" font-size="10" font-weight="700" fill="#1f2937" text-anchor="end">Real GDP</text>
  <text x="16" y="128" font-size="10" font-weight="700" fill="#1f2937" transform="rotate(-90 16 128)" text-anchor="middle">Price Level</text>

  <line x1="65" y1="195" x2="222" y2="62" stroke="#b45309" stroke-width="2.4"/>
  <text x="225" y="60" font-size="10" font-weight="700" fill="#b45309">SRAS</text>
  <line x1="68" y1="74" x2="195" y2="200" stroke="#2563eb" stroke-width="2.2"/>
  <text x="197" y="208" font-size="10" font-weight="700" fill="#2563eb">AD₁</text>
  <line x1="108" y1="54" x2="232" y2="180" stroke="#1d4ed8" stroke-width="2.2" stroke-dasharray="5 3"/>
  <text x="234" y="188" font-size="10" font-weight="700" fill="#1d4ed8">AD₂</text>

  <circle cx="136" cy="135" r="3.8" fill="#1f2937"/>
  <circle cx="163" cy="112" r="3.8" fill="#15803d"/>
  <line x1="136" y1="135" x2="136" y2="220" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="163" y1="112" x2="163" y2="220" stroke="#15803d" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="136" y="234" font-size="9.5" fill="#4b5563" text-anchor="middle">Y₁</text>
  <text x="163" y="234" font-size="9.5" font-weight="700" fill="#15803d" text-anchor="middle">Y₂</text>
  <text x="140" y="252" font-size="9.5" font-weight="700" fill="#15803d" text-anchor="middle">PL↑ and Real GDP↑ (Unemployment↓)</text>

  <line x1="272" y1="14" x2="272" y2="250" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- RIGHT: COST-PUSH STAGFLATION -->
  <text x="410" y="20" font-size="12" font-weight="800" fill="#1f2937" text-anchor="middle">Cost-Push Stagflation (SRAS↓)</text>
  <line x1="305" y1="220" x2="515" y2="220" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ex)"/>
  <line x1="305" y1="220" x2="305" y2="34" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-ex)"/>
  <text x="513" y="236" font-size="10" font-weight="700" fill="#1f2937" text-anchor="end">Real GDP</text>
  <text x="284" y="128" font-size="10" font-weight="700" fill="#1f2937" transform="rotate(-90 284 128)" text-anchor="middle">Price Level</text>

  <line x1="335" y1="62" x2="480" y2="202" stroke="#2563eb" stroke-width="2.2"/>
  <text x="482" y="208" font-size="10" font-weight="700" fill="#2563eb">AD</text>
  <line x1="342" y1="196" x2="495" y2="66" stroke="#b45309" stroke-width="2.2"/>
  <text x="498" y="64" font-size="10" font-weight="700" fill="#b45309">SRAS₁</text>
  <line x1="322" y1="150" x2="458" y2="38" stroke="#c2410c" stroke-width="2.4" stroke-dasharray="5 3"/>
  <text x="462" y="42" font-size="10" font-weight="700" fill="#c2410c">SRAS₂</text>

  <circle cx="412" cy="136" r="3.8" fill="#1f2937"/>
  <circle cx="381" cy="106" r="3.8" fill="#c2410c"/>
  <line x1="412" y1="136" x2="412" y2="220" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="381" y1="106" x2="381" y2="220" stroke="#c2410c" stroke-width="1.2" stroke-dasharray="3 3"/>
  <text x="412" y="234" font-size="9.5" fill="#4b5563" text-anchor="middle">Y₁</text>
  <text x="381" y="234" font-size="9.5" font-weight="700" fill="#c2410c" text-anchor="middle">Y₂</text>
  <text x="410" y="252" font-size="9.5" font-weight="700" fill="#c2410c" text-anchor="middle">PL↑ and Real GDP↓ (Unemployment↑)</text>
</svg>`,
      caption:
        "Demand-pull inflation accompanies booming output and falling unemployment, whereas cost-push stagflation inflicts higher prices AND falling output simultaneously.",
    },
    {
      title: "Five-Sector Circular Flow: Leakages vs Injections Driving GDP",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 250" role="img" aria-label="Five-sector circular flow of income diagram showing Households and Firms connected by Factor Incomes and Consumption Expenditure with Leakages S, T, M and Injections I, G, X">
  <rect x="0" y="0" width="520" height="250" fill="#ffffff" rx="8"/>
  <defs>
    <marker id="arr-cf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#374151"/>
    </marker>
    <marker id="arr-leak" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c2410c"/>
    </marker>
    <marker id="arr-inj" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
  </defs>

  <!-- Core Households & Firms boxes -->
  <rect x="30" y="88" width="122" height="58" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="91" y="114" font-size="12.5" font-weight="800" fill="#92400e" text-anchor="middle">Households</text>
  <text x="91" y="131" font-size="9.5" fill="#78350f" text-anchor="middle">(Factor Owners)</text>

  <rect x="368" y="88" width="122" height="58" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="429" y="114" font-size="12.5" font-weight="800" fill="#115e59" text-anchor="middle">Firms</text>
  <text x="429" y="131" font-size="9.5" fill="#134e4a" text-anchor="middle">(Producers)</text>

  <!-- Top & bottom inner flow arrows -->
  <path d="M 368 104 Q 260 64 156 104" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#arr-cf)"/>
  <text x="260" y="75" font-size="10.5" font-weight="700" fill="#1f2937" text-anchor="middle">Factor Incomes (Wages, Rent, Interest, Profit)</text>

  <path d="M 152 132 Q 260 172 364 132" fill="none" stroke="#374151" stroke-width="2" marker-end="url(#arr-cf)"/>
  <text x="260" y="166" font-size="10.5" font-weight="700" fill="#1f2937" text-anchor="middle">Consumption Expenditure (C)</text>

  <!-- Leakages box (top-left exit) -->
  <rect x="28" y="16" width="194" height="44" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.5"/>
  <text x="125" y="34" font-size="11" font-weight="800" fill="#9a3412" text-anchor="middle">Leakages (Withdrawals)</text>
  <text x="125" y="50" font-size="10" font-weight="700" fill="#c2410c" text-anchor="middle">Savings (S) + Taxes (T) + Imports (M)</text>
  <line x1="91" y1="88" x2="91" y2="63" stroke="#c2410c" stroke-width="2" marker-end="url(#arr-leak)"/>

  <!-- Injections box (bottom-right entry) -->
  <rect x="292" y="188" width="204" height="44" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>
  <text x="394" y="206" font-size="11" font-weight="800" fill="#166534" text-anchor="middle">Injections into Domestic Output</text>
  <text x="394" y="222" font-size="10" font-weight="700" fill="#15803d" text-anchor="middle">Investment (I) + Govt (G) + Exports (X)</text>
  <line x1="429" y1="188" x2="429" y2="149" stroke="#15803d" stroke-width="2" marker-end="url(#arr-inj)"/>

  <!-- Equilibrium callout -->
  <rect x="28" y="190" width="234" height="42" rx="8" fill="#f8f2e4" stroke="#eadcc4" stroke-width="1.2"/>
  <text x="145" y="208" font-size="10" font-weight="800" fill="#1f2937" text-anchor="middle">GDP expands when (I + G + X) &gt; (S + T + M)</text>
  <text x="145" y="223" font-size="10" font-weight="700" fill="#6b563c" text-anchor="middle">GDP contracts when (S + T + M) &gt; (I + G + X)</text>
</svg>`,
      caption:
        "National income expands whenever injections (I + G + X) exceed leakages (S + T + M), explaining why expenditure, income, and output GDP are equivalent.",
    },
  ],
  history: {
    title: "1973–1979 Stagflation: How Two Oil Shocks Overturned the Naive Phillips Curve",
    story:
      "Throughout the 1960s, many policymakers treated Bill Phillips' 1958 empirical curve like a permanent policy menu: dial up Aggregate Demand to pick a lower unemployment rate, accepting slightly higher inflation in exchange. In 1968, Milton Friedman and Edmund Phelps boldly predicted the menu would break down once workers built higher inflation into their wage expectations. Five years later, the 1973 and 1979 OPEC oil embargoes quadrupled energy prices, shifting SRAS sharply leftward across the US, UK, and Western Europe. Inflation and unemployment soared *together* — **stagflation** — shattering the stable downward-sloping curve and establishing the **expectations-augmented Short-Run and vertical Long-Run Phillips Curve (LRPC)** that HL IB Economics students master today.",
  },
};
