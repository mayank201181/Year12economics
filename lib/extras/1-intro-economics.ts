import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Every morning in Singapore, 6 million people share roughly 735 km² of land — smaller than New York City, yet home to one of the world's busiest container ports, Changi Airport, public housing estates, tropical rainforest reserves, and financial skyscrapers. How does a tiny island decide what goes on the next reclaimed hectare — and why did an economist in 1949 try to model the entire national economy using coloured water and transparent plastic pipes?",
  didYouKnow: [
    "In *The Wealth of Nations* (1776), Adam Smith observed that one untrained worker could barely make **20 pins a day**, whereas ten workers dividing pin-making into 18 specialised steps produced **48,000 pins a day** — a 240-fold jump in output per worker!",
    "In 1949, New Zealand engineer-turned-economist **Bill Phillips** built the **MONIAC** — a two-metre-tall hydraulic computer using dyed water, pumps, and valves from salvaged Lancaster bomber parts to physically demonstrate the **five-sector circular flow** of savings, taxes, imports, investment, government spending, and exports.",
    "The modern textbook definition of economics — *'the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses'* — was coined by LSE economist **Lionel Robbins** in 1932.",
    "**Daniel Kahneman**, one of the founders of 21st-century **Behavioural Economics**, won the 2002 Nobel Memorial Prize in Economics despite never having taken a single university economics course — he was a cognitive psychologist!",
    "When **Amsterdam** formally adopted **Kate Raworth's Doughnut Economy** in April 2020, it committed to halving new raw-material consumption by 2030 and transitioning to a **100% circular economy by 2050**.",
    "Singapore's economy defies simple textbook labels: it consistently ranks among the top two freest markets in the world for trade and business, yet over **75% of resident households** live in state-built HDB flats on publicly leased land.",
    "During the 1970s **stagflation** shock, UK inflation peaked above 24% while unemployment simultaneously climbed — shattering the simple post-war Keynesian assumption that inflation and unemployment always move in opposite directions.",
  ],
  activities: [
    {
      title: "The 5-Minute Pin Factory & PPC Shift Lab",
      emoji: "✈️",
      materials: [
        "30 sheets of scrap A4 paper",
        "A stopwatch or phone timer",
        "2 pens and a ruler",
        "2–4 classmates (or time yourself across two solo rounds)",
      ],
      steps: [
        "**Round 1 (Craft / Unspecialised):** Each person works independently for 90 seconds to fold paper aeroplanes (Good X) and draw neat stamped bookmarks (Good Y). Record maximum output of each.",
        "**Round 2 (Division of Labour):** Split into an assembly line (Folder 1 makes creases, Folder 2 shapes wings, Quality Checker finishes tips) inspired by Adam Smith's pin factory. Run another 90-second round.",
        "**Plot Both PPCs:** Draw your Round 1 frontier and your Round 2 frontier on the same axes (Aeroplanes vs Bookmarks) and measure the outward shift.",
        "**Debrief:** Calculate the percentage expansion in potential output and discuss why real workers eventually face boredom or bottlenecks (diseconomies of specialisation).",
      ],
      maths:
        "Use {{%ΔY_p = ((Y_2 - Y_1) / Y_1) * 100}} to quantify the outward PPC shift, and compute {{OC_X = ΔY / ΔX}} before and after specialisation.",
    },
    {
      title: "IB IA Warm-Up: Positive vs Normative News Audit",
      emoji: "📰",
      materials: [
        "One recent economic news article (*The Straits Times*, *Financial Times*, or *The Economist*)",
        "Two highlighters (blue for positive, amber for normative)",
      ],
      steps: [
        "Read the article and highlight every **positive claim** (testable statistics, causal forecasts, past outcomes) in blue.",
        "Highlight every **normative claim** (words like *should, ought, unfair, excessive, urgent, too high*) in amber.",
        "Pick one blue sentence and write down the **exact *ceteris paribus* variables** being held constant — plus one real-world shock that could violate that assumption.",
        "Pick two **IB Key Concepts** (from the 9) that best frame the article's main trade-off — this exact habit is the secret to a Band 7 Internal Assessment commentary!",
      ],
      maths:
        "Count the ratio of positive sentences to normative sentences and test whether every numerical claim cites a verifiable base year or percentage denominator.",
    },
    {
      title: "Doughnut Economy Scorecard for Your City",
      emoji: "🍩",
      materials: [
        "A sheet of paper or digital tablet",
        "Public indicators for Singapore (or your home city): housing affordability, life expectancy, median income, CO₂ per capita, recycling rate, green space",
      ],
      steps: [
        "Draw two concentric circles: label the inner ring **Social Foundation** and the outer ring **Ecological Ceiling**.",
        "Plot four **social indicators** (e.g. healthcare access, literacy, housing affordability, income equity) on the inner ring — shade red wherever households still fall short.",
        "Plot four **ecological indicators** (e.g. carbon emissions per capita, domestic waste recycling rate, urban heat, biodiversity) on the outer ring — shade red wherever planetary limits are breached.",
        "Propose **one market-based policy** (like a carbon tax or plastic-bag charge) and **one circular/behavioural nudge** to pull your city closer to the green safe-and-just ring.",
      ],
      maths:
        "Compare percentage gaps against targets — e.g. if domestic recycling is 12% against a 30% target, compute the required {{18}} percentage-point improvement (a {{150}}% relative increase).",
    },
  ],
  bonusDiagrams: [
    {
      title: "The 9 IB Economics Key Concepts Compass",
      svg: `<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram displaying the nine IB Economics Key Concepts grouped around a central hub: Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, and Intervention">
  <rect x="0" y="0" width="500" height="320" fill="#ffffff"/>
  <!-- Connecting spokes -->
  <g stroke="#eadcc4" stroke-width="2">
    <line x1="250" y1="160" x2="250" y2="48"/>
    <line x1="250" y1="160" x2="352" y2="66"/>
    <line x1="250" y1="160" x2="412" y2="128"/>
    <line x1="250" y1="160" x2="395" y2="215"/>
    <line x1="250" y1="160" x2="305" y2="274"/>
    <line x1="250" y1="160" x2="195" y2="274"/>
    <line x1="250" y1="160" x2="105" y2="215"/>
    <line x1="250" y1="160" x2="88" y2="128"/>
    <line x1="250" y1="160" x2="148" y2="66"/>
  </g>
  <!-- Centre hub -->
  <circle cx="250" cy="160" r="52" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>
  <text x="250" y="154" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">9 IB KEY</text>
  <text x="250" y="171" text-anchor="middle" font-size="12" font-weight="800" fill="#92400e">CONCEPTS</text>
  <!-- 9 nodes -->
  <rect x="200" y="20" width="100" height="28" rx="14" fill="#b45309"/>
  <text x="250" y="38" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">1. Scarcity</text>

  <rect x="308" y="48" width="96" height="28" rx="14" fill="#b45309"/>
  <text x="356" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">2. Choice</text>

  <rect x="366" y="112" width="110" height="28" rx="14" fill="#0d9488"/>
  <text x="421" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">3. Efficiency</text>

  <rect x="352" y="198" width="104" height="28" rx="14" fill="#0d9488"/>
  <text x="404" y="216" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">4. Equity</text>

  <rect x="254" y="264" width="144" height="28" rx="14" fill="#0d9488"/>
  <text x="326" y="282" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">5. Economic Well-being</text>

  <rect x="108" y="264" width="128" height="28" rx="14" fill="#15803d"/>
  <text x="172" y="282" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">6. Sustainability</text>

  <rect x="44" y="198" width="106" height="28" rx="14" fill="#0369a1"/>
  <text x="97" y="216" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">7. Change</text>

  <rect x="18" y="112" width="126" height="28" rx="14" fill="#7c3aed"/>
  <text x="81" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">8. Interdependence</text>

  <rect x="86" y="48" width="116" height="28" rx="14" fill="#c2410c"/>
  <text x="144" y="66" text-anchor="middle" font-size="11" font-weight="700" fill="#ffffff">9. Intervention</text>
</svg>`,
      caption:
        "Every IB Economics Paper 1 essay and Internal Assessment commentary gains evaluation depth by linking analysis to these 9 Key Concepts.",
    },
    {
      title: "Kate Raworth's Doughnut Economy Model",
      svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concentric Doughnut Economy diagram showing the inner social foundation shortfall hole, the green safe and just operating space ring, and the outer ecological ceiling overshoot zone">
  <rect x="0" y="0" width="460" height="300" fill="#ffffff"/>
  <!-- Outer overshoot halo -->
  <circle cx="230" cy="150" r="134" fill="#ffedd5" stroke="#c2410c" stroke-width="2" stroke-dasharray="5,4"/>
  <!-- Ecological ceiling & safe green doughnut -->
  <circle cx="230" cy="150" r="106" fill="#dcfce7" stroke="#15803d" stroke-width="2.5"/>
  <!-- Social foundation inner hole -->
  <circle cx="230" cy="150" r="52" fill="#fef3c7" stroke="#b45309" stroke-width="2.5"/>

  <!-- Labels -->
  <text x="230" y="34" text-anchor="middle" font-size="10.5" font-weight="800" fill="#c2410c">ECOLOGICAL OVERSHOOT (Climate · Biodiversity · Pollution)</text>
  <text x="230" y="66" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">Ecological Ceiling (Planetary Boundaries)</text>

  <text x="230" y="143" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">SOCIAL</text>
  <text x="230" y="157" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">SHORTFALL</text>
  <text x="230" y="170" text-anchor="middle" font-size="9" fill="#6b563c">(Food · Health · Housing)</text>

  <text x="230" y="226" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">SAFE &amp; JUST SPACE FOR HUMANITY</text>
  <text x="230" y="241" text-anchor="middle" font-size="9.5" font-weight="700" fill="#166534">(Regenerative &amp; Distributive Circular Economy)</text>
  <text x="230" y="274" text-anchor="middle" font-size="10" font-weight="700" fill="#c2410c">Inner border = Social Foundation · Outer border = Ecological Ceiling</text>
</svg>`,
      caption:
        "Raworth's Doughnut Economy replaces boundless linear GDP growth with the green ring between human dignity (social foundation) and planetary stability (ecological ceiling).",
    },
  ],
  history: {
    title: "Plumbing the Macroeconomy: Bill Phillips and the MONIAC Water Computer (1949)",
    story:
      "Most students first meet the five-sector circular flow as arrows drawn on a whiteboard. In 1949, however, an undergraduate at the London School of Economics named **Alban William 'Bill' Phillips** — a former crocodile hunter, electrical engineer, and wartime RAF officer from New Zealand — decided to build the circular flow out of **real flowing water**.\n\nWorking in a friend's Croydon garage with Perspex sheets, windscreen-wiper motors from salvaged Lancaster bombers, and bright red food colouring, Phillips constructed the **MONIAC** (*Monetary National Income Analogue Computer*). A main glass column represented **National Income (Y)**, pumped steadily upward by consumer spending. Along the way, precision valves tapped off three real leakages — **Savings (S)** flowing into a bank tank, **Taxation (T)** flowing into a Treasury tank, and **Imports (M)** draining overseas — while lower sluices pumped back **Investment (I)**, **Government Spending (G)**, and **Exports (X)**.\n\nWhen Phillips unveiled the two-metre-high bubbling machine to skeptical LSE professors (including Nobel laureates Friedrich Hayek and James Meade), he opened the government-spending valve and let the room watch the water level of national income climb dynamically before settling at a new equilibrium — with a mechanical pen plotting the path on graph paper! Around fourteen MONIAC machines were built and shipped to Harvard, Cambridge, the Central Bank of Guatemala, and the Ford Motor Company. Although silicon computers soon replaced red-dyed water, Phillips's hydraulic intuition remains the clearest way to feel Unit 1 in your bones: **whenever injections outpace leakages, the economic water level rises; whenever leakages outpace injections, it falls.**",
  },
};
