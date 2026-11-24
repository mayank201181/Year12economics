import type { TopicExtras } from "../types.ts";

const SVG_MAS_BAND = `<svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Singapore MAS S$NEER managed float policy band showing gently appreciating upper and lower boundaries and central bank intervention points">
  <rect x="0" y="0" width="520" height="300" fill="#ffffff" />
  <defs>
    <marker id="mas-ax" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1f2937" />
    </marker>
    <marker id="mas-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c2410c" />
    </marker>
  </defs>
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">Singapore MAS Managed Float: S$NEER Policy Band</text>
  <!-- Shaded gently appreciating band -->
  <polygon points="82,196 462,126 462,56 82,126" fill="#fef3c7" opacity="0.7" />
  <!-- Upper, central, lower band lines -->
  <line x1="82" y1="126" x2="462" y2="56" stroke="#b45309" stroke-width="2" stroke-dasharray="6,4" />
  <line x1="82" y1="161" x2="462" y2="91" stroke="#92400e" stroke-width="1.6" stroke-dasharray="3,4" />
  <line x1="82" y1="196" x2="462" y2="126" stroke="#b45309" stroke-width="2" stroke-dasharray="6,4" />
  <!-- Axes -->
  <line x1="82" y1="256" x2="82" y2="42" stroke="#1f2937" stroke-width="2" marker-end="url(#mas-ax)" />
  <line x1="82" y1="256" x2="478" y2="256" stroke="#1f2937" stroke-width="2" marker-end="url(#mas-ax)" />
  <text x="24" y="150" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2937" transform="rotate(-90 24 150)">S$NEER Index (Trade-Weighted)</text>
  <text x="280" y="286" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2937">Time</text>
  <!-- Actual S$NEER path fluctuating inside band, touching ceiling and floor -->
  <path d="M 88 164 Q 140 132 186 107 Q 232 138 278 158 Q 320 152 362 96 Q 408 82 456 88" fill="none" stroke="#0d9488" stroke-width="3" />
  <!-- Touch ceiling point (186, 107) -> MAS sells SGD -->
  <circle cx="186" cy="107" r="4.5" fill="#c2410c" />
  <line x1="186" y1="74" x2="186" y2="99" stroke="#c2410c" stroke-width="2" marker-end="url(#mas-arr)" />
  <rect x="108" y="42" width="166" height="28" rx="6" fill="#ffedd5" stroke="#fb923c" />
  <text x="191" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9a3412">Ceiling hit: MAS sells SGD</text>
  <!-- Touch floor point (278, 158) -> MAS buys SGD -->
  <circle cx="278" cy="158" r="4.5" fill="#c2410c" />
  <line x1="278" y1="192" x2="278" y2="167" stroke="#c2410c" stroke-width="2" marker-end="url(#mas-arr)" />
  <rect x="200" y="196" width="170" height="28" rx="6" fill="#dcfce7" stroke="#22c55e" />
  <text x="285" y="214" text-anchor="middle" font-size="10.5" font-weight="700" fill="#166534">Floor hit: MAS buys SGD</text>
  <!-- Right labels -->
  <text x="466" y="59" font-size="10.5" font-weight="700" fill="#92400e">Upper band</text>
  <text x="466" y="94" font-size="10.5" fill="#78350f">Midpoint</text>
  <text x="466" y="129" font-size="10.5" font-weight="700" fill="#92400e">Lower band</text>
</svg>`;

const SVG_BOP_MIRROR = `<svg viewBox="0 0 520 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Balance of Payments double-entry mirror illustrating how a 40 billion dollar Current Account deficit is financed by an equal 40 billion dollar Capital and Financial Account surplus so the total sums to zero">
  <rect x="0" y="0" width="520" height="270" fill="#ffffff" />
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">The Balance of Payments Double-Entry Mirror (CA + KA + FA = 0)</text>
  <!-- Zero baseline -->
  <line x1="40" y1="142" x2="480" y2="142" stroke="#1f2937" stroke-width="2" />
  <text x="32" y="146" text-anchor="end" font-size="11" font-weight="700" fill="#1f2937">$0</text>
  <!-- Left bar: Current Account deficit (-$40bn, going down) -->
  <rect x="78" y="142" width="150" height="84" rx="6" fill="#ffedd5" stroke="#c2410c" stroke-width="2" />
  <text x="153" y="172" text-anchor="middle" font-size="13" font-weight="700" fill="#9a3412">Current Account</text>
  <text x="153" y="192" text-anchor="middle" font-size="15" font-weight="800" fill="#c2410c">−$40bn Deficit</text>
  <text x="153" y="212" text-anchor="middle" font-size="10.5" fill="#9a3412">Net imports + income outflows</text>
  <!-- Right bar: Capital + Financial Account surplus (+$40bn, going up) -->
  <rect x="292" y="58" width="150" height="84" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="2" />
  <text x="367" y="88" text-anchor="middle" font-size="13" font-weight="700" fill="#166534">Capital + Financial</text>
  <text x="367" y="108" text-anchor="middle" font-size="15" font-weight="800" fill="#15803d">+$40bn Surplus</text>
  <text x="367" y="128" text-anchor="middle" font-size="10.5" fill="#166534">FDI, portfolio &amp; reserve flows</text>
  <!-- Equals badge in center -->
  <rect x="206" y="236" width="108" height="24" rx="12" fill="#e0f2fe" stroke="#0369a1" />
  <text x="260" y="252" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0369a1">Sum = $0.0bn</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Why can you buy a delicious hawker plate of chicken rice in Singapore for `S$5` while an equivalent quick lunch in Zurich costs over `S$28` — yet Singapore's Monetary Authority of Singapore (MAS) STILL chooses to let the Singapore Dollar steadily appreciate rather than setting interest rates? Unit 4B unlocks the exact mechanics linking everyday prices, currency bands, global capital flows, and how nations escape the poverty trap.",
  didYouKnow: [
    "Singapore is the ONLY major advanced economy in the world that conducts monetary policy primarily through a **managed exchange rate band (S$NEER)** instead of targeting an overnight policy interest rate — because Singapore's total trade exceeds `300%` of GDP!",
    "The Economist's famous **Big Mac Index** is a playful real-world test of **Purchasing Power Parity (PPP)**: comparing the local price of an identical burger across 50+ countries shows why market exchange rates routinely understate living standards in lower-income economies.",
    "Global **migrant remittances** flowing to low- and middle-income countries exceeded `$650 billion` in recent years — surpassing total **Official Development Assistance (ODA)** by more than three times and rivalling total FDI!",
    "Kenya's mobile-money service **M-Pesa** processes transactions equivalent to over half of Kenya's GDP on basic mobile phones — proving that digital financial inclusion can leapfrog missing physical bank branches.",
    "In 1965, **Singapore** and **South Korea** had GNI per capita below many countries in Latin America and Sub-Saharan Africa; by pairing export promotion and FDI openness with ruthless investment in education, infrastructure, and anti-corruption institutions, both climbed into the global top tier of HDI within two generations.",
    "Norway avoided the commodity **resource curse (Dutch Disease)** after discovering North Sea oil by channelling oil surpluses into a transparent Sovereign Wealth Fund invested strictly *abroad* — keeping oil cash from overheating domestic inflation or appreciating the krone destructively.",
  ],
  activities: [
    {
      title: "Build Your Own Mini PPP 'Hawker & Coffee' Index",
      emoji: "🍜",
      materials: [
        "Local Singapore prices (`SGD`) for 3 identical items (e.g. a Big Mac, a Starbucks tall latte, a basic haircut)",
        "Equivalent UK (`GBP`) or US (`USD`) prices from official menus online",
        "Today's market exchange rate (`SGD/USD` or `SGD/GBP`)",
      ],
      steps: [
        "Calculate the **implied PPP exchange rate** for each item: `Local SGD Price ÷ Foreign USD Price`.",
        "Compare your implied PPP rate with today's actual market exchange rate (`~1.34 SGD/USD`).",
        "Notice which items are **traded goods** (closer to market exchange rates) versus **non-traded local services** like haircuts or hawker meals (far cheaper than market rates predict!).",
      ],
      maths:
        "Implied PPP rate = {{P_local / P_foreign}}; Currency undervaluation % = {{((PPP - e_market) / e_market) * 100}}.",
    },
    {
      title: "Paper 2 IA Detective: Diagnose a Country's Development Gap",
      emoji: "🔎",
      materials: [
        "UNDP Human Development Data Portal (HDI, IHDI, GII, MPI)",
        "World Bank Open Data (GDP per capita, GNI per capita PPP, Current Account % of GDP)",
      ],
      steps: [
        "Pick two contrasting countries with similar **GDP per capita (PPP)** — for instance, **Costa Rica** vs **Equatorial Guinea**, or **Vietnam** vs **Nigeria**.",
        "Calculate each country's **IHDI inequality loss** `((HDI − IHDI) / HDI) × 100` and compare their **GII** and **GNI vs GDP** gap.",
        "Identify ONE primary economic/institutional barrier explaining the gap and recommend ONE balanced strategy (combining market incentives with institutional/merit-good intervention) — instant Paper 1 Part (b) real-world example!",
      ],
      maths:
        "IHDI loss % = {{((HDI - IHDI) / HDI) * 100}}; Net Factor Income gap = `GNI − GDP`.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Singapore MAS S$NEER Managed Float Band",
      svg: SVG_MAS_BAND,
      caption:
        "Within the policy band, market supply and demand move the S$NEER freely; MAS intervenes with foreign reserves only when the rate approaches the upper ceiling (selling SGD) or lower floor (buying SGD).",
    },
    {
      title: "Balance of Payments Double-Entry Mirror",
      svg: SVG_BOP_MIRROR,
      caption:
        "A Current Account deficit never means the BoP fails to balance — it is mirrored dollar-for-dollar by net inflows on the Capital and Financial Accounts (plus Errors & Omissions).",
    },
  ],
  history: {
    title: "Bretton Woods (1944) to the Nixon Shock (1971): Birth of Modern Global Finance",
    story:
      "In July 1944, with World War II still raging, 730 delegates from 44 Allied nations gathered at a grand resort hotel in **Bretton Woods, New Hampshire** to prevent a repeat of the 1930s Great Depression's competitive devaluations and tariff wars. Britain's delegation was led by **John Maynard Keynes**, who proposed an ambitious global clearing union with a neutral supranational currency called the *Bancor* that would penalise BOTH persistent Current Account deficit AND surplus countries. The United States — holding two-thirds of the world's gold — backed Treasury official **Harry Dexter White's** rival blueprint instead. The compromise created **two twin institutions** still tested on every IB Economics exam: the **IMF** (to police fixed exchange rates and lend during short-term BoP crises) and the **World Bank** (originally the IBRD, to rebuild war-torn Europe and finance long-term economic development). Currencies were pegged to the US dollar, which was convertible into gold at `$35` per ounce. The system delivered two decades of rapid post-war trade growth, until rising US inflation and Vietnam War deficits drained US gold reserves — prompting President Richard Nixon on **15 August 1971** to suspend gold convertibility ('the Nixon Shock'), collapsing Bretton Woods and launching today's world of floating currencies, Singapore's managed S$NEER band, and dynamic capital flows.",
  },
};
