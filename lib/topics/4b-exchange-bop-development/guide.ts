import type { TopicGuide } from "../../types.ts";

const SVG_FOREX_APPRECIATION = `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Foreign exchange market for Singapore Dollars showing rightward shift in demand from D1 to D2 causing appreciation from e1 to e2">
  <rect x="0" y="0" width="520" height="330" fill="#ffffff" />
  <defs>
    <marker id="fx-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
    </marker>
    <marker id="fx-axis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1f2937" />
    </marker>
  </defs>
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">Market for Singapore Dollars (SGD)</text>
  <!-- Axes -->
  <line x1="86" y1="274" x2="86" y2="44" stroke="#1f2937" stroke-width="2" marker-end="url(#fx-axis)" />
  <line x1="86" y1="274" x2="466" y2="274" stroke="#1f2937" stroke-width="2" marker-end="url(#fx-axis)" />
  <text x="24" y="156" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2937" transform="rotate(-90 24 156)">Exchange Rate (USD per SGD)</text>
  <text x="276" y="314" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2937">Quantity of SGD</text>
  <text x="74" y="288" text-anchor="end" font-size="11" fill="#4b5563">0</text>
  <!-- Supply curve S1: (130, 240) to (410, 72) -->
  <line x1="130" y1="244" x2="412" y2="68" stroke="#0369a1" stroke-width="2.6" />
  <text x="418" y="68" font-size="13" font-weight="700" fill="#0369a1">S (SGD)</text>
  <!-- Demand curve D1: (130, 82) to (370, 242) -->
  <line x1="130" y1="84" x2="366" y2="242" stroke="#6b7280" stroke-width="2.2" stroke-dasharray="6,4" />
  <text x="372" y="247" font-size="13" font-weight="700" fill="#6b7280">D1</text>
  <!-- Demand curve D2 shifted right by +74px: (204, 84) to (440, 242) -->
  <line x1="204" y1="84" x2="440" y2="242" stroke="#b45309" stroke-width="2.8" />
  <text x="446" y="247" font-size="13" font-weight="700" fill="#b45309">D2</text>
  <!-- Equilibrium E1 intersection of S and D1: approx (245, 162) -> let's compute exact:
       S: y = 244 - (176/282)*(x - 130) = 244 - 0.6241*(x - 130)
       D1: y = 84 + (158/236)*(x - 130) = 84 + 0.6695*(x - 130)
       160 = 1.2936*(x - 130) => x - 130 = 123.7 => x1 = 253.7, y1 = 166.8 -->
  <line x1="86" y1="167" x2="254" y2="167" stroke="#6b7280" stroke-width="1.4" stroke-dasharray="4,4" />
  <line x1="254" y1="167" x2="254" y2="274" stroke="#6b7280" stroke-width="1.4" stroke-dasharray="4,4" />
  <circle cx="254" cy="167" r="4.5" fill="#4b5563" />
  <text x="242" y="159" text-anchor="end" font-size="12" font-weight="700" fill="#4b5563">E1</text>
  <text x="78" y="171" text-anchor="end" font-size="12" font-weight="700" fill="#4b5563">e1</text>
  <text x="254" y="292" text-anchor="middle" font-size="12" font-weight="700" fill="#4b5563">Q1</text>
  <!-- Equilibrium E2 intersection of S and D2:
       D2: y = 84 + 0.6695*(x - 204)
       244 - 0.6241*(x - 130) = 84 + 0.6695*(x - 204)
       160 + 0.6241*130 + 0.6695*204 = 1.2936*x => 377.71 = 1.2936*x => x2 = 292.0, y2 = 142.9 -->
  <line x1="86" y1="143" x2="292" y2="143" stroke="#b45309" stroke-width="1.6" stroke-dasharray="4,4" />
  <line x1="292" y1="143" x2="292" y2="274" stroke="#b45309" stroke-width="1.6" stroke-dasharray="4,4" />
  <circle cx="292" cy="143" r="5" fill="#b45309" />
  <text x="292" y="132" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">E2</text>
  <text x="78" y="147" text-anchor="end" font-size="12" font-weight="700" fill="#b45309">e2</text>
  <text x="292" y="292" text-anchor="middle" font-size="12" font-weight="700" fill="#b45309">Q2</text>
  <!-- Arrows showing shift and appreciation -->
  <line x1="330" y1="205" x2="386" y2="205" stroke="#b45309" stroke-width="2" marker-end="url(#fx-arr)" />
  <line x1="56" y1="167" x2="56" y2="146" stroke="#b45309" stroke-width="2" marker-end="url(#fx-arr)" />
  <line x1="259" y1="264" x2="287" y2="264" stroke="#b45309" stroke-width="1.8" marker-end="url(#fx-arr)" />
  <rect x="98" y="48" width="166" height="30" rx="6" fill="#fef3c7" stroke="#f59e0b" />
  <text x="181" y="67" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Appreciation: e1 → e2</text>
</svg>`;

const SVG_J_CURVE = `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HL J-curve diagram showing Current Account balance worsening in the short run after depreciation before improving into surplus in the long run">
  <rect x="0" y="0" width="520" height="320" fill="#ffffff" />
  <defs>
    <marker id="jc-axis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#1f2937" />
    </marker>
  </defs>
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">[HL] The J-Curve Effect Following Currency Depreciation</text>
  <!-- Surplus / Deficit shading -->
  <rect x="86" y="46" width="388" height="122" fill="#f0fdf4" />
  <rect x="86" y="168" width="388" height="114" fill="#fff7ed" />
  <!-- Axes -->
  <line x1="86" y1="286" x2="86" y2="42" stroke="#1f2937" stroke-width="2" marker-end="url(#jc-axis)" />
  <line x1="86" y1="168" x2="480" y2="168" stroke="#1f2937" stroke-width="2" marker-end="url(#jc-axis)" />
  <text x="24" y="166" text-anchor="middle" font-size="12" font-weight="700" fill="#1f2937" transform="rotate(-90 24 166)">Current Account Balance (X − M)</text>
  <text x="462" y="186" text-anchor="end" font-size="12" font-weight="700" fill="#1f2937">Time</text>
  <text x="76" y="172" text-anchor="end" font-size="12" font-weight="700" fill="#1f2937">0</text>
  <text x="76" y="64" text-anchor="end" font-size="11" font-weight="700" fill="#15803d">+ Surplus</text>
  <text x="76" y="272" text-anchor="end" font-size="11" font-weight="700" fill="#c2410c">− Deficit</text>
  <!-- Initial balance reference line -->
  <line x1="86" y1="208" x2="460" y2="208" stroke="#9ca3af" stroke-width="1.3" stroke-dasharray="5,5" />
  <!-- Depreciation marker at t0 -->
  <line x1="126" y1="208" x2="126" y2="282" stroke="#b45309" stroke-width="1.5" stroke-dasharray="3,3" />
  <text x="126" y="298" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">t0 (Depreciation)</text>
  <!-- J-curve path: flat from 86 to 126 at y=208, dips to (182, 260), rises through (250, 208), crosses 0 at (306, 168), rises to (454, 74) -->
  <path d="M 86 208 L 126 208 C 148 232, 162 260, 186 260 C 216 260, 250 218, 306 168 C 350 128, 396 92, 454 74" fill="none" stroke="#0d9488" stroke-width="3.2" />
  <!-- Key points -->
  <circle cx="126" cy="208" r="4.5" fill="#b45309" />
  <circle cx="186" cy="260" r="4.5" fill="#c2410c" />
  <circle cx="306" cy="168" r="4.5" fill="#15803d" />
  <!-- Annotations -->
  <rect x="196" y="232" width="174" height="44" rx="6" fill="#ffedd5" stroke="#fb923c" />
  <text x="283" y="250" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412">Short Run: |PED_X| + |PED_M| &lt; 1</text>
  <text x="283" y="266" text-anchor="middle" font-size="10.5" fill="#9a3412">Price effect dominates → CA worsens</text>
  <rect x="292" y="52" width="176" height="44" rx="6" fill="#dcfce7" stroke="#22c55e" />
  <text x="380" y="70" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Long Run: |PED_X| + |PED_M| &gt; 1</text>
  <text x="380" y="86" text-anchor="middle" font-size="10.5" fill="#166534">Volume effect dominates → CA improves</text>
</svg>`;

const SVG_POVERTY_CYCLE = `<svg viewBox="0 0 520 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The Poverty Cycle showing how low income leads to low savings, low investment in physical and human capital, low productivity, and persistently low income">
  <rect x="0" y="0" width="520" height="320" fill="#ffffff" />
  <defs>
    <marker id="pc-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309" />
    </marker>
  </defs>
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">The Poverty Cycle (Self-Reinforcing Poverty Trap)</text>
  <!-- Top box -->
  <rect x="172" y="42" width="176" height="48" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="260" y="63" text-anchor="middle" font-size="12" font-weight="700" fill="#78350f">Low Income per Capita</text>
  <text x="260" y="80" text-anchor="middle" font-size="10.5" fill="#92400e">(subsistence consumption)</text>
  <!-- Right box -->
  <rect x="342" y="136" width="162" height="54" rx="10" fill="#ffedd5" stroke="#ea580c" stroke-width="2" />
  <text x="423" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">Low Savings &amp;</text>
  <text x="423" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="#9a3412">Low Tax Revenue</text>
  <!-- Bottom box -->
  <rect x="148" y="242" width="224" height="54" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="260" y="264" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">Low Investment in Physical,</text>
  <text x="260" y="282" text-anchor="middle" font-size="12" font-weight="700" fill="#991b1b">Human &amp; Natural Capital</text>
  <!-- Left box -->
  <rect x="16" y="136" width="162" height="54" rx="10" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2" />
  <text x="97" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="#5b21b6">Low Productivity &amp;</text>
  <text x="97" y="176" text-anchor="middle" font-size="12" font-weight="700" fill="#5b21b6">Weak Economic Growth</text>
  <!-- Curved clockwise arrows -->
  <path d="M 352 68 Q 418 76 423 128" fill="none" stroke="#b45309" stroke-width="2.4" marker-end="url(#pc-arr)" />
  <path d="M 423 194 Q 418 256 378 266" fill="none" stroke="#b45309" stroke-width="2.4" marker-end="url(#pc-arr)" />
  <path d="M 144 266 Q 102 256 97 198" fill="none" stroke="#b45309" stroke-width="2.4" marker-end="url(#pc-arr)" />
  <path d="M 97 132 Q 102 76 166 68" fill="none" stroke="#b45309" stroke-width="2.4" marker-end="url(#pc-arr)" />
  <!-- Centre break-the-cycle callout -->
  <rect x="194" y="134" width="132" height="58" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.6" stroke-dasharray="4,3" />
  <text x="260" y="153" text-anchor="middle" font-size="11" font-weight="700" fill="#166534">Breaking the Trap</text>
  <text x="260" y="168" text-anchor="middle" font-size="10" fill="#166534">Education, Health,</text>
  <text x="260" y="182" text-anchor="middle" font-size="10" fill="#166534">Credit, Aid &amp; FDI</text>
</svg>`;

const SVG_STRATEGY_BALANCE = `<svg viewBox="0 0 520 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparison of market-oriented versus interventionist development strategies converging on inclusive and sustainable economic development">
  <rect x="0" y="0" width="520" height="310" fill="#ffffff" />
  <defs>
    <marker id="st-arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488" />
    </marker>
  </defs>
  <text x="260" y="24" text-anchor="middle" font-size="14" font-weight="700" fill="#1f2937">Balancing Market-Oriented &amp; Interventionist Strategies</text>
  <!-- Left column: Market-Oriented -->
  <rect x="20" y="44" width="224" height="162" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />
  <text x="132" y="66" text-anchor="middle" font-size="12.5" font-weight="700" fill="#1d4ed8">Market-Oriented Pillars</text>
  <text x="34" y="88" font-size="11" fill="#1e3a8a">• Export promotion &amp; trade openness</text>
  <text x="34" y="106" font-size="11" fill="#1e3a8a">• Attracting FDI &amp; technology transfer</text>
  <text x="34" y="124" font-size="11" fill="#1e3a8a">• Deregulation &amp; floating currency</text>
  <text x="34" y="142" font-size="11" fill="#1e3a8a">• Microfinance &amp; mobile banking</text>
  <line x1="34" y1="156" x2="230" y2="156" stroke="#93c5fd" stroke-width="1" />
  <text x="34" y="174" font-size="10.5" font-weight="700" fill="#15803d">Strength: Efficiency &amp; rapid growth</text>
  <text x="34" y="192" font-size="10.5" font-weight="700" fill="#c2410c">Risk: Market failure &amp; inequality</text>
  <!-- Right column: Interventionist -->
  <rect x="276" y="44" width="224" height="162" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="388" y="66" text-anchor="middle" font-size="12.5" font-weight="700" fill="#92400e">Interventionist Pillars</text>
  <text x="290" y="88" font-size="11" fill="#78350f">• Merit goods: education &amp; healthcare</text>
  <text x="290" y="106" font-size="11" fill="#78350f">• Public infrastructure &amp; clean water</text>
  <text x="290" y="124" font-size="11" fill="#78350f">• Property rights &amp; anti-corruption</text>
  <text x="290" y="142" font-size="11" fill="#78350f">• Targeted transfers &amp; diversification</text>
  <line x1="290" y1="156" x2="486" y2="156" stroke="#fcd34d" stroke-width="1" />
  <text x="290" y="174" font-size="10.5" font-weight="700" fill="#15803d">Strength: Equity &amp; human capital</text>
  <text x="290" y="192" font-size="10.5" font-weight="700" fill="#c2410c">Risk: Govt failure &amp; fiscal cost</text>
  <!-- Converging arrows -->
  <line x1="156" y1="206" x2="218" y2="236" stroke="#0d9488" stroke-width="2.4" marker-end="url(#st-arr)" />
  <line x1="364" y1="206" x2="302" y2="236" stroke="#0d9488" stroke-width="2.4" marker-end="url(#st-arr)" />
  <!-- Bottom synthesis box -->
  <rect x="86" y="242" width="348" height="54" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="2" />
  <text x="260" y="264" text-anchor="middle" font-size="12.5" font-weight="700" fill="#115e59">Institutional Synergy &amp; Sustainable Development</text>
  <text x="260" y="282" text-anchor="middle" font-size="11" fill="#134e4a">Higher HDI, lower GII &amp; MPI, resilient BoP, and SDG alignment</text>
</svg>`;

export const guide: TopicGuide = {
  id: "4b-exchange-bop-development",
  title: "Unit 4B: Exchange Rates, Balance of Payments & Economic Development",
  strand: "Unit 4: The Global Economy",
  icon: "🌍",
  level: "SL",
  summary:
    "Master floating, fixed, and managed exchange rates (including Singapore's MAS S$NEER), Balance of Payments accounting, the [HL] Marshall–Lerner condition and J-curve, multidimensional development indicators (HDI, IHDI, GII, MPI), barriers to progress, and market-versus-interventionist development strategies.",
  intro:
    "No modern economy is an island — even an island city-state like Singapore trades goods and services worth more than three times its GDP each year. Unit 4B connects **international finance** (how currencies are priced and how nations balance their global accounts) to **economic development** (why some countries break out of the poverty trap while others stagnate). Across IB sections **4.5 to 4.10**, keep the IB Key Concepts of **Interdependence**, **Change**, **Economic well-being**, **Equity**, **Sustainability**, and **Intervention** front and centre: a single interest-rate move in Washington ripples through emerging-market exchange rates, external debt burdens, and household living standards worldwide.",
  guide: [
    // =========================================================================
    // SECTION 1: 4.5 EXCHANGE RATES
    // =========================================================================
    {
      id: "exchange-rates-regimes",
      heading: "4.5 Floating, Fixed & Managed Exchange Rates",
      level: "SL",
      discovery: {
        problem:
          "Between 2021 and 2023, the Japanese Yen slid from roughly `110 JPY` per US dollar to over `150 JPY` per US dollar, while the Monetary Authority of Singapore (MAS) repeatedly allowed the Singapore Dollar to strengthen. Imagine two households: a Singaporean family booking a skiing holiday in Hokkaido, and a Singaporean electronics firm selling microchips priced in SGD to Tokyo buyers. Who celebrates the stronger SGD, who suffers — and why would Singapore's central bank *deliberately* engineer a stronger currency during an inflation surge?",
        idea:
          "An exchange rate is simply the price of one currency in terms of another, so a **stronger SGD** makes foreign goods, holidays, and imported raw materials cheaper in SGD terms (slashing **imported cost-push inflation**, which is vital for a city-state that imports almost all its food and energy). However, it simultaneously makes Singapore's exports pricier for foreign buyers, squeezing exporters' competitiveness and net exports `(X − M)`. Every currency swing creates opposite winners and losers!",
      },
      body: `An **exchange rate** is the value of one currency expressed in terms of another currency (for example, \`1 SGD = 0.75 USD\`, equivalently \`1 USD = 1.33 SGD\`). Because currencies are traded globally, their prices depend on the **exchange rate regime** a country chooses.

### 1. Floating Exchange Rate Regime
Under a **freely floating exchange rate**, the currency's price is determined solely by market **demand** and **supply** in the foreign exchange (forex) market, with **zero central bank intervention**.
- **Appreciation:** a market-driven **increase** in the value of a currency relative to another (e.g. \`1 SGD\` rises from \`0.72 USD\` to \`0.76 USD\`).
- **Depreciation:** a market-driven **decrease** in the value of a currency relative to another (e.g. \`1 SGD\` falls from \`0.72 USD\` to \`0.68 USD\`).

**What shifts Demand (\`D\`) and Supply (\`S\`) of a domestic currency (say, SGD)?**
- **Foreign demand for exports:** higher foreign income or better domestic product quality → foreigners must buy SGD to pay Singaporean firms → \`D\` shifts right → **appreciation**.
- **Domestic demand for imports:** domestic economic boom or taste shift toward foreign goods → domestic buyers sell SGD to acquire foreign currency → \`S\` shifts right → **depreciation**.
- **Relative inflation rates:** if domestic inflation exceeds foreign inflation, domestic exports become less price-competitive (\`D\` shifts left) and cheaper imports look more attractive (\`S\` shifts right) → **depreciation**.
- **Relative interest rates (hot money flows):** if domestic interest rates rise above foreign rates, international investors move short-term financial capital ("hot money") into domestic deposits and bonds → \`D\` shifts right (and fewer domestic savers move funds abroad, \`S\` shifts left) → **appreciation**.
- **Foreign Direct Investment (FDI) & portfolio inflows:** foreign firms building factories or buying domestic shares must convert foreign currency into domestic currency → \`D\` shifts right → **appreciation**.
- **Remittances & tourism:** inward remittances or surging inbound tourism increase \`D\` (appreciation); outward remittances or outbound tourism increase \`S\` (depreciation).
- **Speculation:** if forex traders expect a currency to rise next month, they buy it *today* → \`D\` shifts right → **self-fulfilling appreciation**.

### 2. Fixed Exchange Rate Regime
Under a **fixed exchange rate**, a government or central bank pegs its currency to another currency (e.g. the Hong Kong Dollar pegged near \`7.80 HKD = 1 USD\`) or a basket of currencies.
- **Revaluation:** a deliberate official **increase** in the pegged rate by the central bank/government.
- **Devaluation:** a deliberate official **decrease** in the pegged rate by the central bank/government.

*Exam golden rule:* Use **appreciation / depreciation** ONLY for floating (and market movements in managed) rates; use **revaluation / devaluation** ONLY for official peg changes in fixed regimes!

**How does a central bank defend a fixed peg?**
- **Facing downward pressure (market equilibrium below the peg):** the central bank must create artificial demand by **buying its own currency using foreign exchange reserves** (shifting \`D\` right), **raising domestic interest rates** to attract hot money, imposing **exchange controls**, or tightening fiscal/monetary policy to curb import demand. Risk: foreign reserves are **finite** — if speculators exhaust them, the peg collapses into a forced devaluation!
- **Facing upward pressure (market equilibrium above the peg):** the central bank **sells its own currency** (shifting \`S\` right) and accumulates foreign exchange reserves, or lowers interest rates. Easier to sustain mechanically because a central bank can print its own currency, though printing risks domestic **inflation**.

### 3. Managed Exchange Rate (Managed Float) — Singapore's MAS S$NEER
Most major economies — and notably **Singapore** — operate a **managed float**: the currency fluctuates according to market forces within a central bank target band, with **periodic intervention** to prevent excessive volatility or achieve macroeconomic objectives.
- Rather than setting a domestic interest rate like the US Federal Reserve, the **Monetary Authority of Singapore (MAS)** manages the **Singapore Dollar Nominal Effective Exchange Rate (S$NEER)** against a trade-weighted basket of major trading partners' currencies inside an undisclosed policy band.
- By adjusting the **slope** (rate of gradual appreciation), **width**, or **centre** of the band, MAS directly shields Singapore from **imported inflation** (by allowing faster S$NEER appreciation) or supports export growth during recessions (flattening the slope to zero).

### 4. Macroeconomic Consequences of Currency Swings
| Macroeconomic Variable | Impact of Currency Appreciation | Impact of Currency Depreciation |
|---|---|---|
| **Inflation** | **Lower:** cheaper imported inputs & consumer goods (SRAS shifts right) + weaker net exports \`(X − M)\` dampen AD | **Higher:** costlier imported raw materials/energy (cost-push, SRAS shifts left) + stronger \`(X − M)\` boosts AD (demand-pull) |
| **Economic Growth & AD** | **Slower:** exports cost more abroad & imports cost less domestically → \`(X − M)\` falls → AD shifts left | **Faster:** exports become cheaper abroad & imports costlier → \`(X − M)\` rises (if Marshall–Lerner holds) → AD shifts right |
| **Unemployment** | **Higher cyclical unemployment** in export-oriented & import-competing industries | **Lower cyclical unemployment** as export & domestic import-substituting output expands |
| **Foreign-Currency Debt** | **Easier to repay** (takes fewer domestic units to pay a fixed USD debt) | **Harder to repay** (domestic-currency burden of USD-denominated debt surges!) |

### 5. Evaluating Floating vs Fixed Regimes
- **Floating strengths:** preserves **monetary policy independence** (interest rates target domestic inflation/recession rather than a peg); automatic adjustment of Balance of Payments imbalances; no need to hoard costly foreign exchange reserves.
- **Floating limitations:** exchange-rate **volatility** creates uncertainty for exporters, importers, and long-term FDI; vulnerability to destabilising speculation; lacks an external inflation anchor.
- **Fixed strengths:** eliminates bilateral currency risk, boosting trade and FDI; anchors inflation expectations; discourages speculative attacks if reserves are credible.
- **Fixed limitations:** sacrifices **independent monetary policy**; requires massive foreign reserves; risk of overvalued peg hurting exporters or sudden currency crises when reserves run dry.`,
      diagram: SVG_FOREX_APPRECIATION,
      diagramCaption:
        "Rightward shift in demand for SGD (D1 → D2) raises the equilibrium exchange rate from e1 to e2 (appreciation) and expands traded quantity from Q1 to Q2.",
      workedExamples: [
        {
          title: "Currency Conversion & Percentage Appreciation",
          problem:
            "In January, the exchange rate is `1 USD = 1.40 SGD`. By December, the rate moves to `1 USD = 1.33 SGD`. (a) Convert a `SGD 2,660` laptop into USD at the December rate. (b) Calculate the percentage appreciation or depreciation of the **USD** against the SGD, and determine what happened to the **SGD**.",
          steps: [
            "Part (a): At `1 USD = 1.33 SGD`, divide SGD by `1.33` to obtain USD: {{2660 / 1.33}} = `2,000 USD`.",
            "Part (b): For the USD priced in SGD, `e₁ = 1.40` and `e₂ = 1.33`. Use {{((e_2 - e_1) / e_1) * 100}}.",
            "Substitute: {{((1.33 - 1.40) / 1.40) * 100}} = {{(-0.07 / 1.40) * 100}} = `−5%`. The **USD depreciated by 5%** against the SGD.",
            "Check the SGD's perspective: `1 SGD` rose from {{1 / 1.40}} ≈ `0.7143 USD` to {{1 / 1.33}} ≈ `0.7519 USD`, so the **SGD appreciated** by {{((0.7519 - 0.7143) / 0.7143) * 100}} ≈ `5.26%` (notice the slight asymmetry of percentages!).",
          ],
          answer: "Laptop = `2,000 USD`; USD depreciated by `5%` (SGD appreciated by `5.26%`).",
          yourTurn: {
            question:
              "Suppose `1 GBP = 1.25 USD` in March and shifts to `1 GBP = 1.35 USD` in September. Calculate the percentage appreciation of the GBP against the USD (give your answer as a percentage number).",
            answer: { type: "number", value: 8, display: "8%" },
            solution:
              "Use {{((1.35 - 1.25) / 1.25) * 100}} = {{(0.10 / 1.25) * 100}} = `8%`. Because `1 GBP` buys more USD (`1.35` vs `1.25`), the GBP appreciated by `8%`.",
          },
        },
        {
          title: "Defending a Fixed Exchange Rate Against Selling Pressure",
          problem:
            "Country Z pegs its currency (the Zeta) at `1 Zeta = 2.00 USD`, but domestic inflation causes the free-market equilibrium to fall to `1.80 USD`. Explain two actions Country Z's central bank can take to maintain the `2.00 USD` peg and identify one key risk of each.",
          steps: [
            "At the pegged price of `2.00 USD`, there is an **excess supply** of Zetas (`Q_s > Q_d`) on the forex market.",
            "**Action 1 — Foreign Reserve Intervention:** The central bank sells USD from its foreign exchange reserves to **buy Zetas**, shifting `D(Zeta)` right until equilibrium returns to `2.00 USD`. **Risk:** Reserves are finite; prolonged deficits can exhaust reserves and trigger a speculative attack and forced devaluation.",
            "**Action 2 — Raising Domestic Interest Rates:** Higher interest rates attract foreign hot-money inflows (`D` shifts right) and deter domestic outflows (`S` shifts left), supporting the `2.00 USD` peg. **Risk:** Higher borrowing costs reduce consumption (`C`) and investment (`I`), shifting AD left and causing recession and higher cyclical unemployment.",
          ],
          answer:
            "Buy Zetas with foreign reserves (risk: reserve depletion) or raise domestic interest rates (risk: contractionary hit to AD, growth, and employment).",
        },
      ],
      keyPoints: [
        "Always check **which currency is on the horizontal axis** (`Quantity of Currency X`) — the vertical axis MUST show `Price of X in terms of Currency Y` (e.g. `USD per SGD`).",
        "Use **appreciation/depreciation** for floating/market changes and **revaluation/devaluation** strictly for official peg changes under a fixed regime.",
        "Higher domestic interest rates attract **hot money**, shifting `D` right and `S` left → currency appreciation.",
        "Singapore's MAS operates a **managed float (S$NEER band)** because extreme trade openness makes the exchange rate far more potent against inflation than domestic interest rates.",
      ],
      whyItWorks:
        "Every international transaction involves two sides of the same coin: demanding one currency automatically means supplying another. When Singaporeans buy more US tech products, they supply SGD (`S_SGD` shifts right) while simultaneously demanding USD (`D_USD` shifts right) — so SGD depreciates against USD by the exact mirror amount that USD appreciates against SGD.",
      strategies: [
        "Draw the forex diagram for the **domestic currency** requested in the question, label the vertical axis `Foreign Currency per 1 Domestic Currency`, and double-check that an upward movement means a **stronger** domestic currency.",
        "When evaluating currency appreciation or depreciation in Paper 1/2, split stakeholders systematically: **exporters**, **importers**, **consumers (inflation)**, **foreign-currency borrowers**, and **tourism/FDI**.",
      ],
      thinkDeeper:
        "Why is an `8%` appreciation of GBP against USD NOT identical to an `8%` depreciation of USD against GBP? Because `1 / 1.08 = 0.9259`, which is a `7.41%` depreciation of USD! Always verify which currency is the base unit (`1 unit of ...`) before applying the percentage-change formula.",
    },

    // =========================================================================
    // SECTION 2: 4.6 BOP, MARSHALL-LERNER & J-CURVE [HL]
    // =========================================================================
    {
      id: "bop-marshall-lerner-hl",
      heading: "4.6 Balance of Payments, Persistent Deficits & Marshall–Lerner / J-Curve [HL]",
      level: "SL",
      discovery: {
        problem:
          "The United States has recorded a Current Account deficit almost every year since 1992 — often exceeding `$700 billion` per year — yet its overall Balance of Payments STILL sums to `0`. Meanwhile, when a country allows its currency to depreciate sharply to fix a trade deficit, economists frequently observe the trade deficit getting *larger* for the first 6 to 12 months. How can an account with a `$700 billion` deficit sum to zero, and why would a cheaper currency temporarily *worsen* a trade deficit?",
        idea:
          "First, every dollar spent abroad on imports that does not return to buy US exports must come back via the **Financial Account** (foreigners buying US Treasury bonds, equities, real estate, or factories) — so a Current Account deficit is financed by an equal Financial + Capital Account surplus (`CA + KA + FA = 0`). Second, immediately after a depreciation, **existing contracts and slow buyer adjustment** keep import and export volumes nearly fixed while import prices jump instantly in domestic currency — pushing import spending UP before export volumes can respond!",
      },
      body: `The **Balance of Payments (BoP)** is a systematic record of all economic transactions between the residents of a country and the rest of the world over a given period (usually one year).
- **Credit (+):** any transaction bringing **money INTO** the country (e.g. selling exports, receiving foreign tourist spending, inward FDI).
- **Debit (−):** any transaction sending **money OUT** of the country (e.g. buying imports, domestic firms investing abroad, paying dividends to foreign shareholders).

### 1. The Three Main Accounts of the Balance of Payments
1. **Current Account (CA)** — records ongoing flows of goods, services, and income across **four sub-accounts**:
   - **Balance of trade in goods (visible trade):** export revenue from physical goods minus import expenditure on physical goods.
   - **Balance of trade in services (invisible trade):** exports minus imports of services (tourism, banking, shipping, insurance, education).
   - **Primary income (net factor/investment income):** inflows minus outflows of wages, interest, profits, and dividends earned on cross-border assets (e.g. repatriated MNC profits count as a *debit* for the host country!).
   - **Secondary income (current transfers):** one-way transfers with nothing received in return — migrant **remittances**, foreign aid grants for current spending, international organisation dues.
2. **Capital Account (KA)** — usually small; covers **capital transfers** (debt forgiveness, investment grants for infrastructure) and transactions in **non-produced, non-financial assets** (patents, copyrights, trademarks, land sold to foreign embassies).
3. **Financial Account (FA)** — records cross-border changes in ownership of financial assets:
   - **Foreign Direct Investment (FDI):** long-term productive investment (\`≥ 10%\` voting stake, e.g. building factories or acquiring subsidiaries).
   - **Portfolio investment:** buying/selling shares, corporate bonds, and government securities (shorter-term, more liquid/volatile).
   - **Reserve assets:** changes in the central bank's holdings of foreign currencies, gold, and IMF Special Drawing Rights (SDRs).
   - **Other investment:** official borrowing and cross-border bank loans/deposits.

### 2. Why the Balance of Payments Always Sums to Zero
Because the BoP uses **double-entry accounting**, the fundamental identity is:

{{CA + KA + FA + "Net Errors & Omissions" = 0}}

*(Note: "Net Errors & Omissions" is a statistical balancing item correcting unrecorded smuggling, timing lags, or measurement errors.)*
- Under a **floating exchange rate**, if a country runs a **Current Account deficit** (excess supply of its currency from buying imports), it MUST simultaneously run a **Capital + Financial Account surplus** of equal magnitude (foreigners lending to the country or buying its assets). Conversely, a **Current Account surplus** (like Singapore's or Germany's) is matched by a **Financial Account deficit** (net capital outflows — investing abroad and building sovereign wealth / foreign reserves).

### 3. Consequences of Persistent Current Account Imbalances
- **Persistent Current Account Deficit:**
  - **Risks:** rising external indebtedness and interest-servicing costs (draining Primary Income in future years); loss of domestic ownership of firms/land if financed via asset sales; reliance on volatile short-term **portfolio hot money** that could suddenly reverse ("sudden stop" crisis); downward depreciation pressure causing imported inflation; weaker AD and higher unemployment if driven by poor export competitiveness.
  - **Crucial IB Nuance:** A CA deficit is far **less concerning** if it is modest relative to GDP and financed by stable, long-term **FDI** importing capital machinery that boosts future export capacity (as in Australia or fast-growing emerging economies).
- **Persistent Current Account Surplus:**
  - **Risks:** lower current domestic consumption and living standards than potential; upward currency **appreciation** pressure eroding future export competitiveness; domestic inflationary pressure from high net exports; risk of **protectionist retaliation** from deficit trading partners.

### 4. Policies to Correct a Persistent Current Account Deficit
1. **Expenditure-Switching Policies:** redirect domestic and foreign spending *away* from imports and *toward* domestic goods — via **currency depreciation/devaluation** or **trade protection** (tariffs, quotas, subsidies).
   - *Trade-offs:* Depreciation triggers **imported cost-push inflation** and depends on the Marshall–Lerner condition; protectionism violates WTO rules, provokes **retaliation**, and hurts domestic consumers/firms using imported inputs.
2. **Expenditure-Reducing Policies:** **contractionary fiscal policy** (higher taxes, lower \`G\`) and/or **contractionary monetary policy** (higher interest rates) cut AD and national income (\`Y\`), which lowers import spending (\`M\`) directly (especially if the marginal propensity to import, \`MPM\`, is high).
   - *Trade-offs:* Directly conflicts with domestic objectives — slows economic growth and raises **cyclical unemployment**! Moreover, higher interest rates attract hot money and **appreciate** the currency, partially offsetting the fall in imports.
3. **Supply-Side Policies:** long-run investment in education, training, infrastructure, R&D, and deregulation lowers domestic unit costs, improves non-price quality, and shifts LRAS right.
   - *Trade-offs:* **Best long-run cure** without causing recession or retaliation, but suffers from **long time lags**, high **fiscal cost**, and uncertain payoffs.

### 5. [HL] The Marshall–Lerner Condition & The J-Curve Effect
Does a currency depreciation *always* improve the Current Account? **No!**
- A depreciation lowers the foreign-currency price of exports (raising export quantity \`Q_X\` and domestic export earnings) while raising the domestic-currency price of imports (which **lowers** import quantity \`Q_M\`, *but* makes every remaining imported unit costlier!).
- **[HL] Marshall–Lerner Condition:** Assuming trade is initially close to balanced, a depreciation (or devaluation) improves the trade balance \`(X − M)\` **if and only if** the sum of the absolute price elasticities of demand for exports and imports exceeds 1:

{{|PED_X| + |PED_M| > 1}}

- If {{|PED_X| + |PED_M| < 1}}, demand is too price-inelastic: the **price effect** (paying more per unit of imports) outweighs the **volume effect**, so depreciation **worsens** the trade balance!
- If {{|PED_X| + |PED_M| = 1}}, the trade balance remains **unchanged**.

**[HL] The J-Curve Effect (Short Run vs Long Run):**
Even when Marshall–Lerner holds in the long run, the trade balance typically traces a **"J" shape** over time after a depreciation:
1. **Short Run (downward dip):** Existing import/export contracts are locked in, consumers take time to notice price shifts or change habits, and firms cannot instantly switch suppliers or expand export capacity. Thus {{|PED_X| + |PED_M| < 1}}: import expenditure jumps immediately in domestic currency while quantities barely change → the Current Account **worsens**.
2. **Long Run (upward climb):** Contracts expire, foreign buyers switch to the country's cheaper exports, and domestic consumers substitute local goods for expensive imports. Demand becomes price-elastic ({{|PED_X| + |PED_M| > 1}}), so the **volume effect dominates** → the Current Account improves and can move into surplus.`,
      diagram: SVG_J_CURVE,
      diagramCaption:
        "[HL] Following depreciation at t0, short-run inelastic demand (|PED_X| + |PED_M| < 1) worsens the Current Account before long-run elastic adjustment (|PED_X| + |PED_M| > 1) improves it.",
      workedExamples: [
        {
          title: "Reconstructing the Full Balance of Payments",
          problem:
            "Country K records the following annual BoP data (in `$ billion`): Exports of goods = `180`, Imports of goods = `235`, Exports of services = `65`, Imports of services = `42`, Net primary income = `−18`, Net secondary income = `+12`, Capital Account = `+3`, Net FDI = `+22`, Net Portfolio Investment = `+19`. Assuming Net Errors & Omissions = `0`, calculate: (a) the Current Account balance, (b) the required Financial Account balance, and (c) the Reserve Assets entry.",
          steps: [
            "Balance of trade in goods = `180 − 235 = −55` (`$bn`).",
            "Balance of trade in services = `65 − 42 = +23` (`$bn`).",
            "Current Account (CA) = `−55 + 23 + (−18) + 12 = −38` (`$bn` deficit).",
            "Since `CA + KA + FA = 0` (with Errors & Omissions = `0`), `−38 + 3 + FA = 0`, so `FA = +35` (`$bn` surplus).",
            "Within the Financial Account, `FDI + Portfolio + Reserve Assets = FA`, so `22 + 19 + Reserve Assets = 35` → `Reserve Assets = 35 − 41 = −6` (`$bn`, meaning the central bank *accumulated* `$6bn` of foreign reserves — a debit entry!).",
          ],
          answer: "CA = `−$38bn`, FA = `+$35bn`, Reserve Assets = `−$6bn`.",
          yourTurn: {
            question:
              "A country has Trade in Goods = `−$40bn`, Trade in Services = `+$15bn`, Net Primary Income = `−$10bn`, Net Secondary Income = `+$7bn`, Capital Account = `+$2bn`, and Net Errors & Omissions = `0`. Calculate the required Financial Account balance (in `$bn`).",
            answer: { type: "number", value: 26, display: "+$26 billion" },
            solution:
              "First find CA: `−40 + 15 − 10 + 7 = −28` (`$bn`). Since `CA + KA + FA = 0`, `−28 + 2 + FA = 0` → `FA = +26` (`$bn`).",
          },
        },
        {
          title: "[HL] Applying Marshall–Lerner in the Short Run vs Long Run",
          problem:
            "Country M suffers a persistent Current Account deficit and allows its currency to depreciate by `12%`. Economists estimate that in the first 6 months `PED_X = −0.35` and `PED_M = −0.40`, whereas after 18 months `PED_X = −0.80` and `PED_M = −0.65`. Use the Marshall–Lerner condition to predict the trajectory of Country M's trade balance.",
          steps: [
            "Take **absolute values** of elasticities in both periods.",
            "**Short run (6 months):** {{|PED_X| + |PED_M|}} = `0.35 + 0.40 = 0.75 < 1`. Marshall–Lerner is **not satisfied** → depreciation initially **worsens** the Current Account deficit.",
            "**Long run (18 months):** {{|PED_X| + |PED_M|}} = `0.80 + 0.65 = 1.45 > 1`. Marshall–Lerner **is satisfied** → export volume expansion and import substitution outweigh higher import unit prices, **improving** the Current Account.",
            "Combining both periods produces the classic **J-curve** path over 18 months.",
          ],
          answer:
            "Short run sum = `0.75 < 1` (deficit worsens); long run sum = `1.45 > 1` (deficit narrows/improves) — tracing a J-curve.",
        },
      ],
      keyPoints: [
        "Current Account = `Trade in Goods + Trade in Services + Net Primary Income + Net Secondary Income`.",
        "Remittances belong to **Secondary Income** (Current Account); MNC profit repatriation belongs to **Primary Income** (Current Account); building a foreign factory belongs to **FDI** (Financial Account).",
        "By accounting identity, `CA + KA + FA (+ Net Errors & Omissions) = 0`: a Current Account deficit is financed by a Capital + Financial Account surplus.",
        "[HL] Depreciation improves the trade balance if and only if {{|PED_X| + |PED_M| > 1}} (Marshall–Lerner); sluggish short-run elasticities create the **J-curve**.",
      ],
      whyItWorks:
        "Why does a reserve **accumulation** appear with a minus sign (`−`) in the Financial Account? Think of foreign currency reserves just like buying any foreign asset (a US Treasury bond): money flows **out** of the domestic economy to acquire that foreign asset (a debit `−`), balancing the inward surplus of foreign currency earned by exporters or investors.",
      strategies: [
        "Never mix up **Primary Income** (factor rewards: profits, dividends, interest, wages) with **Secondary Income** (unrequited transfers: remittances, aid grants) — IB Paper 2 & Paper 3 examiners test this distinction relentlessly!",
        "When evaluating expenditure-reducing vs expenditure-switching vs supply-side policies for a CA deficit, always contrast **speed** (expenditure-reducing is fast), **macro side effects** (recession vs inflation), and **sustainability** (supply-side fixes root competitiveness).",
      ],
      thinkDeeper:
        "Primary-commodity exporters (such as oil or cocoa producers) often face price-inelastic demand for both their commodity exports and their essential manufactured/food imports even in the long run (`|PED_X| + |PED_M| < 1`). What happens if they rely on currency devaluation to cure a Current Account deficit? The J-curve never climbs back up — devaluation permanently worsens their trade deficit while fuelling domestic inflation!",
    },

    // =========================================================================
    // SECTION 3: 4.7–4.9 SUSTAINABLE DEVELOPMENT, INDICATORS & BARRIERS
    // =========================================================================
    {
      id: "measuring-development-barriers",
      heading: "4.7–4.9 Sustainable Development, Indicators (HDI/IHDI/MPI) & Barriers",
      level: "SL",
      discovery: {
        problem:
          "Equatorial Guinea's GNI per capita (PPP) once exceeded `$18,000` due to offshore oil wealth, yet its life expectancy hovered around `60` years and huge shares of its population lacked clean water. Meanwhile, Costa Rica — with a similar GNI per capita — achieved a life expectancy above `80` years, near-universal literacy, and nearly `100%` renewable electricity. What does this contrast prove about relying on GDP per capita to judge human progress?",
        idea:
          "**Economic growth** (rising Real GDP) is a one-dimensional measure of aggregate output; it reveals nothing about *who* receives the income, whether citizens enjoy health and education, or whether growth is destroying ecosystems. **Economic development** is **multidimensional**, capturing broader improvements in human well-being, capabilities, equity, and environmental sustainability — which is why economists pair income metrics with composite indices like **HDI**, **IHDI**, **GII**, **MPI**, and the **Happy Planet Index**.",
      },
      body: `### 1. Economic Growth vs Multidimensional Economic Development
- **Economic growth:** a quantitative increase in real output (Real GDP) over time.
- **Economic development:** a **multidimensional** process involving rising living standards, reduction of absolute poverty, improved health and education, reduced inequality, expanded personal freedom/choices (Amartya Sen's *capabilities approach*), and **environmental sustainability**.
- **UN Sustainable Development Goals (SDGs):** 17 global goals adopted for 2030 integrating **economic**, **social**, and **environmental** pillars — including No Poverty (SDG 1), Quality Education (SDG 4), Gender Equality (SDG 5), Clean Water & Sanitation (SDG 6), Decent Work & Economic Growth (SDG 8), Reduced Inequalities (SDG 10), and Climate Action (SDG 13).

### 2. Single vs Composite Development Indicators
**Single indicators** capture one dimension at a time:
- **GDP per capita vs GNI per capita:** GNI adds net factor income from abroad. In countries hosting large foreign MNCs that repatriate profits (e.g. Ireland or resource-rich developing economies), \`GNI < GDP\` — making **GNI per capita** a truer gauge of residents' actual income! Conversely, high-remittance economies often have \`GNI > GDP\`.
- **Purchasing Power Parity (PPP) adjustment:** converts incomes using exchange rates reflecting the local cost of a standardised basket of goods and services. Because non-traded services (haircuts, rent, local food) are much cheaper in lower-income countries, market exchange rates understate their real purchasing power — **PPP-adjusted GNI per capita** corrects this distortion.
- **Health & education single indicators:** life expectancy at birth, infant/maternal mortality rates, adult literacy rate, mean and expected years of schooling.
- **Equity & environmental single indicators:** Gini coefficient, CO₂ emissions per capita, ecological footprint.

**Composite indicators** combine multiple dimensions into a single index:

| Composite Index | Scale & Direction | Exact Dimensions Included | Key Strength / Limitation |
|---|---|---|---|
| **HDI** (Human Development Index) | \`0\` to \`1\` (**higher** = better) | Health (life expectancy at birth) · Education (mean & expected years of schooling) · Standard of living (GNI per capita, PPP $) | Captures beyond-GDP well-being cleanly; **ignores inequality, gender gaps, and environmental damage** |
| **IHDI** (Inequality-Adjusted HDI) | \`0\` to \`1\` (**higher** = better; \`IHDI ≤ HDI\`) | Same 3 HDI dimensions, each **discounted for inequality** across the population | Directly measures human-development loss from inequality ({{((HDI - IHDI) / HDI) * 100}}%) |
| **GII** (Gender Inequality Index) | \`0\` to \`1\` (**LOWER** = better!) | Reproductive health (maternal mortality, adolescent birth rate) · Empowerment (parliament seats, secondary schooling) · Labour-force participation | Quantifies development loss from gender barriers; misses unpaid domestic care work & informal sector |
| **MPI** (Multidimensional Poverty Index) | \`0\` to \`1\` (**LOWER** = better!) | Overlapping household deprivations in **Health** (nutrition, child mortality), **Education** (schooling, attendance), and **Living Standards** (fuel, sanitation, water, electricity, housing, assets) | Pinpoints acute non-income poverty directly at household level; data availability lags in fragile states |
| **Happy Planet Index (HPI)** | Score (**higher** = better) | \`(Well-being × Life Expectancy × Inequality adjustment) / Ecological Footprint\` | Explicitly rewards **environmental sustainability**; penalises high-carbon rich economies |

### 3. Barriers to Economic Growth & Economic Development (IB 4.9)
Developing economies rarely face a single obstacle; barriers interlock and reinforce one another:
- **The Poverty Cycle (Poverty Trap):** low incomes leave little surplus above subsistence → low household savings & low tax revenue → low investment in physical capital (roads, power), human capital (schools, clinics), and natural capital → low labour productivity → persistently low incomes passed across generations.
- **Economic Barriers:**
  - **Primary-product dependence:** heavy reliance on exporting unprocessed agricultural or mineral commodities exposes economies to **volatile prices** (due to inelastic PED and PES), unstable export & tax revenues (deterring investment), low **YED** (global demand grows slower than manufactured/service demand), and long-run **deteriorating Terms of Trade** (Prebisch–Singer hypothesis — needing more tonnes of raw exports to buy the same imported machinery).
  - **Lack of access to infrastructure, technology, credit & banking:** poor transport/electricity raises business costs; missing collateral blocks small farmers and entrepreneurs from formal loans.
  - **Large informal economy & capital flight:** informal workers lack social protection and escape the tax base, starving public services; wealthy elites shifting savings overseas drain domestic investment funds.
  - **Unsustainable external debt:** high interest/principal repayments in foreign currency consume export earnings and crowd out government spending on health, education, and infrastructure (**opportunity cost** of debt servicing).
  - **Rising income and wealth inequality:** concentrates political power, depresses aggregate consumption among poorer households, and slows poverty reduction.
- **Political & Institutional Barriers:**
  - **Weak property rights & rule of law:** without secure land titles or enforceable contracts, households and foreign investors refuse to invest long-term or cannot use land as collateral for credit.
  - **Corruption & ineffective taxation:** bribes and embezzlement divert public budgets away from merit goods, distort resource allocation, and deter reputable FDI; narrow tax bases prevent public investment.
  - **Political instability & conflict:** destroys physical infrastructure, triggers human-capital flight, and halts tourism and FDI.
- **Social, Cultural & Geographical Barriers:**
  - **Gender inequality:** restricting women's access to secondary schooling, formal jobs, land ownership, and credit wastes half a nation's productive human capital and worsens child health/education outcomes across generations.
  - **Inadequate merit goods (education & healthcare):** malnutrition, preventable disease, and poor schooling trap labour in low-productivity jobs.
  - **Geographical & climate vulnerability:** landlocked countries face steep transit costs; tropical regions face higher disease burdens and intensifying climate-change shocks to agriculture.`,
      diagram: SVG_POVERTY_CYCLE,
      diagramCaption:
        "The poverty cycle locks low-income households and nations in a self-reinforcing loop unless external or institutional interventions raise human capital, credit access, or productivity.",
      workedExamples: [
        {
          title: "Interpreting HDI, IHDI, GII & GNI–GDP Gaps",
          problem:
            "Compare Country A and Country B using the UNDP data below:\n\n| Indicator | Country A | Country B |\n|---|---|---|\n| GDP per capita (PPP $) | 15,200 | 14,000 |\n| GNI per capita (PPP $) | 12,100 | 14,600 |\n| HDI | 0.750 | 0.740 |\n| IHDI | 0.540 | 0.666 |\n| GII | 0.490 | 0.210 |\n\n(a) Explain why Country A's GNI per capita is far below its GDP per capita. (b) Calculate the percentage loss in HDI due to inequality for both countries and evaluate which country shows stronger inclusive development.",
          steps: [
            "Part (a): `GNI = GDP + net factor income from abroad`. Country A's GNI (`$12,100`) is `$3,100` lower than its GDP (`$15,200`), indicating large **net factor income outflows** — typically foreign MNCs repatriating profits or heavy foreign debt interest payments.",
            "Part (b) Country A IHDI loss: {{((0.750 - 0.540) / 0.750) * 100}} = {{(0.210 / 0.750) * 100}} = `28%`.",
            "Part (b) Country B IHDI loss: {{((0.740 - 0.666) / 0.740) * 100}} = {{(0.074 / 0.740) * 100}} = `10%`.",
            "Evaluation: Although Country A has a slightly higher raw HDI (`0.750` vs `0.740`), Country B achieves a much higher **IHDI** (`0.666` vs `0.540`), far smaller inequality loss (`10%` vs `28%`), and much **lower GII** (`0.210` vs `0.490`, indicating stronger gender equality). Country B's development is substantially more inclusive.",
          ],
          answer:
            "Country A loses `28%` of its HDI to inequality vs only `10%` in Country B; Country B is more inclusively developed.",
          yourTurn: {
            question:
              "A developing country has an HDI of `0.640` and an Inequality-Adjusted HDI (IHDI) of `0.480`. Calculate the percentage loss in human development due to inequality.",
            answer: { type: "number", value: 25, display: "25%" },
            solution:
              "Percentage loss = {{((0.640 - 0.480) / 0.640) * 100}} = {{(0.160 / 0.640) * 100}} = `25%`.",
          },
        },
        {
          title: "Primary-Product Dependence & Terms of Trade Volatility",
          problem:
            "Explain two mechanisms through which reliance on a single primary commodity export (such as copper or cocoa) acts as a barrier to long-term economic development.",
          steps: [
            "**Mechanism 1 — Price & Revenue Volatility:** Primary commodities have price-inelastic demand (`|PED| < 1`, few substitutes, small input share) and price-inelastic supply (`PES < 1`, long growing/mining lead times). Even tiny supply shocks (droughts) or global demand dips cause violent price swings, destabilising export revenues, farmer incomes, and government tax receipts — making long-term planning for schools and infrastructure extremely difficult.",
            "**Mechanism 2 — Deteriorating Terms of Trade & Low YED:** As global incomes grow, demand shifts disproportionately toward manufactured goods and services (`YED > 1`) rather than raw commodities (`0 < YED < 1`). Over time, export prices tend to lag imported capital-good prices, shrinking the volume of machinery and medicine the country can afford per tonne of exports.",
          ],
          answer:
            "Severe price/revenue volatility (inelastic PED & PES) deters investment and destabilises public budgets, while low YED drives long-run Terms of Trade deterioration.",
        },
      ],
      keyPoints: [
        "Always check **indicator direction**: higher is better for **HDI**, **IHDI**, and **HPI**, whereas **LOWER is better** for **GII**, **MPI**, and the **Gini coefficient**!",
        "**PPP adjustment** corrects for lower prices of non-traded local goods/services in developing economies, allowing fair cross-country living-standard comparisons.",
        "HDI has **three** equally weighted dimensions (life expectancy, mean & expected schooling, GNI/capita PPP) — it omits inequality, gender gaps, political freedom, and sustainability.",
        "Economic, political/institutional, and social barriers reinforce one another inside the **poverty cycle**.",
      ],
      whyItWorks:
        "Why does empowering women (lowering GII) generate one of the highest returns in all of development economics? Beyond intrinsic equity, educated women earn higher formal wages, delay marriage, have fewer and healthier children, and invest a significantly larger share of household income into children's nutrition and schooling — directly breaking the intergenerational poverty trap!",
      strategies: [
        "In Paper 2 data-response questions, ALWAYS compare **GDP vs GNI** and **HDI vs IHDI** when a data table supplies both — spotting a large gap earns immediate AO2/AO3 analytical marks.",
        "Structure barriers essays around **economic** (poverty trap, primary dependence, debt), **institutional/political** (corruption, property rights), and **social** (gender, human capital) pillars, then evaluate which barrier is the binding constraint in the specific country context.",
      ],
      thinkDeeper:
        "Can a country achieve rapid economic growth *without* economic development — and can it achieve economic development *without* economic growth? Growth without development happens frequently in oil-rich enclaves where wealth stays concentrated; however, sustained long-run development without *some* growth is nearly impossible because funding universal healthcare, clean water, and secondary schools requires an expanding tax base!",
    },

    // =========================================================================
    // SECTION 4: 4.10 GROWTH & DEVELOPMENT STRATEGIES
    // =========================================================================
    {
      id: "growth-development-strategies",
      heading: "4.10 Growth & Development Strategies: Trade, Aid, FDI & Institutions",
      level: "SL",
      discovery: {
        problem:
          "In 1965, South Korea and Ghana had nearly identical GDP per capita. Over the next five decades, South Korea built global industrial champions in ships, cars, and semiconductors through outward-looking export promotion paired with massive state investment in schooling and targeted credit, while several economies that locked out imports behind steep tariff walls fell behind. Meanwhile, Kenya's mobile-money platform M-Pesa lifted roughly 2% of Kenyan households out of extreme poverty without a single dollar of traditional government subsidies. Should developing countries rely on free markets, state intervention, or foreign help?",
        idea:
          "Every single strategy has sharp trade-offs: pure **market-oriented** reforms unlock efficiency and FDI but can deepen inequality and neglect schools, clinics, and clean water; pure **interventionist** policies tackle market failure but risk corruption, budget deficits, and inefficient protected monopolies. The strongest real-world development stories — from **Singapore** and **South Korea** to **Botswana** and **Vietnam** — combine **market incentives and openness** with **capable institutions, property rights, and strategic human-capital investment**.",
      },
      body: `### 1. Trade Strategies for Growth & Development
- **Import Substitution Industrialization (ISI):** replacing imported manufactured goods with domestically produced substitutes using tariffs, quotas, and subsidies.
  - *Strengths:* shelters infant industries, preserves domestic jobs initially, reduces dependence on foreign manufactures.
  - *Limitations:* protected domestic firms lack competitive pressure → inefficiency and high prices; small domestic markets limit **economies of scale**; raises costs of imported inputs; invites foreign retaliation.
- **Export Promotion (Outward-Oriented Growth):** expanding exports based on comparative advantage, gradually climbing into higher value-added manufacturing and services (e.g. East Asian Tigers: South Korea, Singapore, Taiwan; more recently **Vietnam**).
  - *Strengths:* captures global **economies of scale**, enforces international quality/efficiency standards, earns foreign exchange to buy capital goods and service debt, attracts FDI.
  - *Limitations:* vulnerability to global recessions and rich-country trade barriers; potential suppression of wages or environmental safeguards to stay price-competitive.
- **Diversification:** shifting away from narrow primary-commodity exports into processed goods, manufacturing, and services (tourism, IT, finance) to stabilise export earnings and escape deteriorating Terms of Trade.
- **Economic Integration:** joining regional trade blocs (e.g. ASEAN, AfCFTA) enlarges market size, boosts intra-regional trade, and strengthens bargaining power at the WTO — though weaker members risk **trade diversion** or losing local firms to stronger neighbours.
- **Social Enterprise & Fairtrade:** guarantees small-scale farmers a **minimum price** above production costs plus a **Fairtrade social premium** invested in local schools, clinics, and clean water.
  - *Evaluation:* improves incomes and community welfare for certified cooperatives, *but* covers a tiny share of global trade, carries certification costs that exclude the poorest farmers, and risks incentivising oversupply.

### 2. Foreign Direct Investment (FDI) & Multinational Corporations (MNCs)
FDI occurs when MNCs establish or acquire productive assets abroad (factories, logistics hubs, tech centres).
- **Strengths:** fills the **savings gap** and **foreign-exchange gap** (positive Financial Account inflow); creates formal employment; transfers advanced technology, R&D, and management skills; boosts government corporate tax revenues and local infrastructure.
- **Limitations:** **profit repatriation** creates ongoing Primary Income outflows on the Current Account; MNCs may use **transfer pricing** to shift taxable profits to low-tax jurisdictions; capital-intensive factories may create few jobs for low-skilled locals; risk of crowding out domestic SMEs, environmental degradation, or weak labour standards ("race to the bottom").

### 3. Foreign Aid, Debt Relief & Remittances
- **Humanitarian aid:** short-term emergency relief (food, shelter, medical supplies after disasters or conflict) aimed at saving lives rather than structural growth.
- **Development aid (Official Development Assistance — ODA):** long-term concessional grants/loans for infrastructure, schools, clinics, and technical training.
  - **Bilateral aid:** government-to-government (risk of political motives or **tied aid**, where recipients must buy donor-country goods/services — inflating costs by 15–30%!).
  - **Multilateral aid:** channelled through international agencies (World Bank, UN, Asian Development Bank) — usually less politically tied and better coordinated.
  - **NGOs (Non-Governmental Organisations):** grassroots community projects (e.g. Oxfam, BRAC) — nimble and directly reach marginalised groups, though smaller in scale.
  - *Evaluating Aid:* breaks the poverty trap and finances vital merit goods where private capital will not go; *but* risks **aid dependency**, corruption/fungibility, weak local accountability, and **Dutch Disease** (large aid inflows appreciating the real exchange rate and hurting domestic exporters).
- **Debt Relief (e.g. HIPC Initiative & MDRI):** cancelling or restructuring unsustainable sovereign debt frees public budgets for health/education and restores investor confidence; *limitations:* potential **moral hazard** (encouraging reckless future borrowing) and wasted savings if domestic corruption remains unchecked.
- **Remittances:** money sent home by overseas migrant workers (Secondary Income on CA). Exceeds ODA — and often FDI — in many developing economies (e.g. Philippines, Nepal, Mexico). Flows directly to families with zero bureaucracy, is counter-cyclical, and funds schooling/housing; *downsides:* reflects **brain drain** of skilled workers and can create dependency or currency appreciation.

### 4. Institutional Change & Financial Inclusion
- **Microfinance (e.g. Grameen Bank, Bangladesh):** tiny collateral-free loans, predominantly to women, enabling micro-enterprises (tailoring, livestock, retail). Empowers women and lowers GII; *limitations:* high administrative interest rates, risk of household over-indebtedness, and too small to fund industrial factories or national power grids.
- **Mobile Banking (e.g. M-Pesa, Kenya):** enables instant money transfer, savings, bill payment, and micro-credit via basic mobile phones — leapfrogging missing physical bank branches, slashing transaction costs, and pulling millions into the formal economy.
- **Merit Goods, Property Rights & Tax Reform:** universal primary/secondary schooling (especially for girls), preventative healthcare, secure land titling (enabling collateralised borrowing), anti-corruption courts, and broadening progressive tax bases build the indispensable institutional bedrock for all other strategies.

### 5. Market-Oriented vs Interventionist Strategies & Role of IMF / World Bank
- **Market-Oriented Strategies** (trade liberalisation, privatisation, deregulation, floating exchange rates, lower business taxes — associated with the 1990s *Washington Consensus*): harness price signals, competition, and FDI to boost allocative efficiency and growth; *but* cannot resolve externalities, missing public/merit goods, or deep inequality on their own.
- **Interventionist Strategies** (state investment in education, health, infrastructure, redistributive safety nets, targeted industrial policy): correct market failures and directly raise HDI/equity; *but* face **government failure**, corruption, bureaucratic inefficiency, and fiscal deficits.
- **Role of International Institutions:**
  - **World Bank (IBRD & IDA):** focuses on **long-term economic development and poverty reduction** — funding infrastructure, education, clean energy, and institutional capacity via low-interest loans and grants.
  - **International Monetary Fund (IMF):** focuses on **short-term macroeconomic & Balance of Payments stability** — emergency liquidity loans during currency/BoP crises, surveillance, and technical advice. *Critique:* IMF **conditionality** (austerity — cutting public spending, raising interest rates, privatising state firms) can deepen short-run recessions and hurt low-income groups via cuts to food/fuel subsidies and health budgets.
- **IB Synthesis:** Modern empirical evidence rejects ideological extremes. **Markets drive efficiency and innovation; capable governments supply institutions, merit goods, and social protection.**`,
      diagram: SVG_STRATEGY_BALANCE,
      diagramCaption:
        "Durable development rarely relies exclusively on deregulation or state control — successful economies pair market incentives with strong institutions and merit-good investment.",
      workedExamples: [
        {
          title: "Evaluating FDI vs Development Aid for a Low-Income Exporter",
          problem:
            "Country T is a low-income country reliant on raw agricultural exports with weak power grids and a `14%` secondary-school completion rate for girls. Compare and evaluate **attracting FDI** versus **multilateral development aid** as strategies to promote economic development.",
          steps: [
            "**FDI analysis:** Foreign manufacturing firms (as in **Vietnam's** electronics assembly boom, e.g. Samsung) bring capital, formal jobs, export diversification, and technology transfer without creating sovereign debt. **Limitations:** MNCs rarely invest where electricity is unreliable and literacy is weak; profits may be repatriated (hurting Primary Income) and tax holidays erode public revenue.",
            "**Multilateral aid analysis:** Concessional World Bank/IDA funding directly finances **non-profitable public and merit goods** — rural electricity, clean water, and girls' secondary schools — that private MNCs will not build, tackling root barriers in the poverty cycle without tied-aid markups. **Limitations:** Risk of corruption, aid dependency, and slow bureaucratic implementation.",
            "**Synthesis & Judgement:** In Country T's immediate stage, **targeted multilateral aid** (paired with anti-corruption oversight) is indispensable to build the human capital and infrastructure **prerequisites**; once roads, power, and schooling improve, **FDI** becomes far more effective at sustaining long-run industrial growth and export diversification.",
          ],
          answer:
            "Multilateral aid is better suited in the short run to build basic infrastructure and girls' education; FDI is superior in the medium-to-long run to drive export diversification and jobs once institutional prerequisites exist.",
          yourTurn: {
            question:
              "A developing country receives `$400 million` in bilateral tied aid. Independent auditors find that the donor-country goods mandated under the tie cost `25%` more than identical goods on the open world market. What is the real world-market equivalent value (in `$ million`) of this aid package?",
            answer: { type: "number", value: 320, display: "$320 million" },
            solution:
              "If donor prices are `1.25×` the world-market price, the real equivalent value is {{400 / 1.25}} = `320` (`$ million`) — showing how tied aid loses `20%` of its real purchasing power!",
          },
        },
        {
          title: "Distinguishing the Mandates of the IMF and the World Bank",
          problem:
            "Distinguish between the primary economic roles of the **IMF** and the **World Bank**, and explain one major criticism of IMF lending conditionality.",
          steps: [
            "**IMF mandate:** Safeguards global monetary cooperation and **short-term Balance of Payments stability** by providing emergency foreign-currency loans to countries facing currency crashes, sovereign debt distress, or reserve exhaustion.",
            "**World Bank mandate:** Targets **long-term economic development and poverty reduction** by financing physical infrastructure, education, healthcare, climate resilience, and institutional reform in developing nations.",
            "**Criticism of IMF conditionality:** IMF rescue loans typically require contractionary fiscal austerity (cutting public spending/subsidies, raising taxes) and higher interest rates. While this curbs imports and restores BoP balance, it often deepens recessions, spikes cyclical unemployment, and disproportionately harms low-income households who rely on public clinics and food subsidies.",
          ],
          answer:
            "IMF = short-term BoP/macro stability; World Bank = long-term development/poverty reduction; IMF austerity conditionality can worsen recessions and equity.",
        },
      ],
      keyPoints: [
        "**ISI** protects infant industries via tariffs/quotas (risking inefficiency and small-market scale limits); **Export Promotion** leverages global markets and economies of scale (risking external demand shocks).",
        "**Humanitarian aid** saves lives in emergencies; **development aid (ODA)** builds long-term capacity — watch out for **tied aid**, corruption, and dependency.",
        "**Microfinance** (Grameen Bank) and **mobile banking** (M-Pesa) tackle financial exclusion and empower women, yet cannot replace large-scale public infrastructure.",
        "Always distinguish **IMF** (short-term BoP crisis loans & macro stability) from **World Bank** (long-term development & poverty-reduction projects).",
      ],
      whyItWorks:
        "Why is a **balance** of market-oriented and interventionist strategies economically superior to either extreme? Markets excel at allocating private goods efficiently via price signals and competition, but systematically **under-provide merit and public goods** (girls' schooling, rural roads, vaccinations, clean water) and cannot self-create rule of law. State intervention builds the institutional and human-capital platform on which private markets and FDI can then flourish.",
      strategies: [
        "Build a crisp **Real-World Example Bank** for Paper 1 Part (b) 15-mark essays: **Singapore** (MAS S$NEER + human capital + FDI), **Vietnam** (export promotion & diversification), **Kenya** (M-Pesa mobile banking), **Bangladesh** (Grameen Bank microfinance), **Botswana** (strong institutions escaping the resource curse), and **Ghana/Sri Lanka** (IMF BoP rescue & debt restructuring).",
        "Never evaluate a development strategy in a vacuum — tailor your judgement to the **country's binding constraint** (e.g. a landlocked fragile state needs institutions and multilateral aid first; a middle-income coastal economy gains more from export diversification and FDI).",
      ],
      thinkDeeper:
        "Why do economists argue that **remittances** often outperform bilateral aid at lowering short-run household poverty, yet still cannot replace government development policy? Remittances reach families instantly with minimal corruption and pay for food, clinics, and tuition — but individual families cannot privately build national power grids, highways, courts, or disease-eradication programmes!",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "Appreciation vs Revaluation",
        back: "**Appreciation** is a market-driven rise in a currency's value under a **floating** (or managed) regime; **revaluation** is a deliberate official upward reset of a currency peg by a central bank under a **fixed** regime.",
        level: "SL",
      },
      {
        front: "Depreciation vs Devaluation",
        back: "**Depreciation** is a market-driven fall in a currency's value under a **floating** regime; **devaluation** is a deliberate official downward reset of a currency peg under a **fixed** regime.",
        level: "SL",
      },
      {
        front: "How do higher domestic interest rates affect a floating exchange rate?",
        back: "Higher domestic interest rates attract foreign **hot money** inflows (`D` of domestic currency shifts right) and discourage domestic outflows (`S` shifts left), causing the domestic currency to **appreciate**.",
        level: "SL",
      },
      {
        front: "How does Singapore's MAS managed float (S$NEER) work?",
        back: "The Monetary Authority of Singapore manages the Singapore Dollar against a trade-weighted basket of partner currencies within a **policy band** (adjusting slope, width, and centre), using appreciation as its primary monetary tool to curb **imported inflation**.",
        level: "SL",
      },
      {
        front: "Four components of the Current Account",
        back: "1. **Trade in Goods** (visible trade), 2. **Trade in Services** (invisible trade), 3. **Primary Income** (net wages, profits, dividends, interest), 4. **Secondary Income** (net current transfers: remittances, aid grants).",
        level: "SL",
      },
      {
        front: "Balance of Payments Accounting Identity",
        back: "`Current Account + Capital Account + Financial Account + Net Errors & Omissions = 0`. A Current Account deficit MUST be financed by an equal Capital + Financial Account surplus.",
        level: "SL",
      },
      {
        front: "Expenditure-Switching vs Expenditure-Reducing Policies",
        back: "**Expenditure-switching** shifts demand from imports to domestic goods (depreciation, tariffs, subsidies); **expenditure-reducing** cuts overall AD and income via contractionary fiscal/monetary policy to lower import spending (risking recession).",
        level: "SL",
      },
      {
        front: "[HL] Marshall–Lerner Condition",
        back: "A currency depreciation/devaluation improves the Current Account (trade balance) **if and only if** {{|PED_X| + |PED_M| > 1}} (assuming trade starts near balance).",
        level: "HL",
      },
      {
        front: "[HL] Why does the J-Curve dip downward in the short run?",
        back: "Immediately after depreciation, fixed trade contracts and slow buyer switching make {{|PED_X| + |PED_M| < 1}}. Domestic-currency import costs jump immediately while volumes barely move (price effect dominates), worsening the Current Account before long-run volume adjustment improves it.",
        level: "HL",
      },
      {
        front: "Economic Growth vs Economic Development",
        back: "**Economic growth** is a quantitative rise in Real GDP; **economic development** is a **multidimensional** rise in living standards, health, education, equity, capabilities, and environmental sustainability.",
        level: "SL",
      },
      {
        front: "Three dimensions of the Human Development Index (HDI)",
        back: "1. **Health** (life expectancy at birth), 2. **Education** (mean years of schooling + expected years of schooling), 3. **Standard of Living** (GNI per capita, PPP $). Scored `0` to `1` (higher is better).",
        level: "SL",
      },
      {
        front: "IHDI vs GII vs MPI (direction of improvement!)",
        back: "**IHDI** (`0–1`, **higher** is better) discounts HDI for inequality. **GII** (`0–1`, **LOWER** is better) measures gender gaps in reproductive health, empowerment, and labour markets. **MPI** (`0–1`, **LOWER** is better) measures overlapping household deprivations in health, education, and living standards.",
        level: "SL",
      },
      {
        front: "Why does Purchasing Power Parity (PPP) matter for comparing GNI per capita?",
        back: "Non-traded local goods and services (food, haircuts, rent) cost far less in developing economies; PPP exchange rates equalise purchasing power across countries so living standards are not understated.",
        level: "SL",
      },
      {
        front: "Import Substitution (ISI) vs Export Promotion",
        back: "**ISI** uses protectionism to replace imports with domestic output (risks inefficiency & small-market scale limits); **Export Promotion** competes in global markets via comparative advantage & economies of scale (risks global demand shocks).",
        level: "SL",
      },
      {
        front: "Tied Aid vs Multilateral Aid",
        back: "**Tied aid** is bilateral aid requiring the recipient to buy goods/services from the donor country (inflating costs by 15–30%); **multilateral aid** flows via international bodies (World Bank, UN) with less donor self-interest.",
        level: "SL",
      },
      {
        front: "IMF vs World Bank core mandates",
        back: "**IMF:** short-term **Balance of Payments** & macroeconomic crisis stability (emergency loans with conditionality). **World Bank:** long-term **economic development & poverty reduction** (infrastructure, health, education).",
        level: "SL",
      },
    ],
    mustKnow: [
      "On every forex diagram, label the horizontal axis `Quantity of [Domestic Currency]` and the vertical axis `Price of [Domestic Currency] in [Foreign Currency]` (e.g. `USD per SGD`).",
      "Higher domestic interest rates attract hot money (`D` right, `S` left → appreciation); higher domestic inflation erodes competitiveness (`D` left, `S` right → depreciation).",
      "Defending a fixed peg against downward pressure requires **buying domestic currency with foreign reserves** or **raising interest rates** — sacrificing monetary autonomy.",
      "Current Account = `Goods + Services + Primary Income + Secondary Income`; `CA + KA + FA (+ E&O) = 0` always holds.",
      "[HL] Marshall–Lerner ({{|PED_X| + |PED_M| > 1}}) explains whether depreciation improves the trade balance; short-run contract rigidities create the **J-curve** dip.",
      "Higher is better for **HDI / IHDI / HPI**, whereas **LOWER is better** for **GII / MPI / Gini**.",
      "Primary-commodity dependence traps developing countries via **price/revenue volatility** (inelastic PED & PES), low YED, and deteriorating **Terms of Trade**.",
      "Modern development success pairs **market-oriented efficiency** (export openness, FDI, mobile banking) with **interventionist institutional & merit-good investment** (education, healthcare, property rights).",
    ],
    misconceptions: [
      {
        wrong: "When a floating currency loses value in the forex market, it has been 'devalued'.",
        right: "A market-driven fall in a floating currency is a **depreciation**. **Devaluation** refers strictly to an official downward reset of a currency peg by a central bank under a **fixed** exchange rate regime.",
        level: "SL",
      },
      {
        wrong: "A country with a persistent Current Account deficit has an 'unbalanced' Balance of Payments where debits exceed credits overall.",
        right: "The overall Balance of Payments ALWAYS sums to zero (`CA + KA + FA + E&O = 0`). A Current Account deficit is financed by an equal Capital + Financial Account surplus (foreign borrowing, asset sales, FDI, or reserve drawdowns).",
        level: "SL",
      },
      {
        wrong: "Migrant remittances belong in the Financial Account or Primary Income.",
        right: "Remittances are unrequited current transfers (no asset purchased, no factor service sold to the recipient economy), so they are recorded under **Secondary Income** in the **Current Account**.",
        level: "SL",
      },
      {
        wrong: "Currency depreciation automatically cures a Current Account deficit right away because exports become cheaper.",
        right: "[HL] Depreciation improves the trade balance ONLY if {{|PED_X| + |PED_M| > 1}} (Marshall–Lerner). In the short run, locked-in contracts make elasticities sum to `< 1`, so the Current Account initially **worsens** (the downward hook of the **J-curve**).",
        level: "HL",
      },
      {
        wrong: "A higher Gender Inequality Index (GII) or Multidimensional Poverty Index (MPI) means better development.",
        right: "Both **GII** and **MPI** measure **deprivation/inequality**, so values closer to **`0` (LOWER)** indicate better development outcomes — opposite to HDI and IHDI!",
        level: "SL",
      },
      {
        wrong: "FDI is purely beneficial for a developing economy's Current Account.",
        right: "FDI enters as a credit (`+`) in the **Financial Account** (not the Current Account), and over time **repatriated MNC profits** appear as ongoing **debits (`−`) in Primary Income** on the Current Account — unless FDI generates larger net export gains.",
        level: "SL",
      },
      {
        wrong: "The World Bank and the IMF perform the same job of giving emergency bailouts.",
        right: "The **IMF** provides short-term Balance of Payments and currency crisis stabilisation loans; the **World Bank** provides long-term development loans and grants for infrastructure, education, healthcare, and poverty reduction.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Labelling forex axes as generic `P` and `Q` instead of `Exchange Rate (USD per SGD)` and `Quantity of SGD` — automatic diagram penalty in IB Paper 1 & 2!",
      "Mixing up which curve shifts: higher **domestic demand for imports** shifts the **Supply** of domestic currency right (people sell domestic currency to buy foreign currency), NOT Demand left.",
      "Forgetting to take **absolute values** in the HL Marshall–Lerner formula (`|−0.6| + |−0.7| = 1.3 > 1`, NOT `−1.3 < 1`).",
      "Saying 'Current Account deficit' when asked about 'Balance of Payments' without identifying the specific account (Current vs Financial) and sub-component.",
      "Writing Paper 1 Part (b) (15-mark) development or exchange-rate essays with ZERO named real-world examples — capping your mark in mid-band even with strong theory!",
      "Treating all foreign aid as identical: always distinguish **humanitarian** vs **development** aid and **tied bilateral** vs **untied multilateral / NGO** aid.",
      "Claiming higher GNI per capita proves higher development without checking **PPP**, **IHDI** (inequality), **GII** (gender), or environmental sustainability (**HPI**).",
      "Ignoring the **side effects** of expenditure-reducing policies (recession, cyclical unemployment, and interest-rate-driven appreciation partially undermining net exports).",
    ],
    mnemonics: [
      {
        topic: "Determinants of Floating Exchange Rates",
        device: "T-I-I-F-S (Trade, Inflation, Interest rates, FDI/Portfolio, Speculation)",
        explanation:
          "Use **TIIFS** to recall the five major non-central-bank shifters of currency demand and supply: **T**rade (`X` & `M`), relative **I**nflation, relative **I**nterest rates (hot money), **F**DI/portfolio/remittances, and **S**peculation.",
        level: "SL",
      },
      {
        topic: "Four Sub-Accounts of the Current Account",
        device: "G-S-P-S (Goods, Services, Primary, Secondary)",
        explanation:
          "**G**oods (visibles) + **S**ervices (invisibles) + **P**rimary income (profits, dividends, interest, wages) + **S**econdary income (remittances, current aid transfers). Never leave out Primary or Secondary income in Paper 3 BoP tables!",
        level: "SL",
      },
      {
        topic: "Composite Development Index Directions",
        device: "H-I-H Up (HDI, IHDI, HPI); G-M-G Down (GII, MPI, Gini)",
        explanation:
          "Aim **UP** toward `1` for **H**DI, **I**HDI, and **H**appy Planet Index; aim **DOWN** toward `0` for **G**II, **M**PI, and **G**ini coefficient!",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Singapore's MAS S$NEER Tightening (2021–2024)",
        detail:
          "Because Singapore imports nearly all its food, fuel, and raw materials, the Monetary Authority of Singapore tightened its S$NEER policy band five consecutive times between October 2021 and October 2022 (re-centring upward and steepening the appreciation slope) to directly dampen imported global inflation while preserving export-sector stability.",
        emoji: "🇸🇬",
      },
      {
        title: "Japan's Historic Yen Depreciation (2022–2024)",
        detail:
          "Wide interest-rate differentials between the US Federal Reserve (`5%+`) and the Bank of Japan (near `0%`) triggered massive capital outflows, pushing the Yen past `155 JPY/USD`. While inbound tourism and Toyota's Yen-denominated export profits surged, Japanese households faced steeper imported food and energy bills — illustrating classic forex trade-offs and J-curve lags.",
        emoji: "🇯🇵",
      },
      {
        title: "Kenya's M-Pesa Mobile Banking Revolution",
        detail:
          "Launched in 2007 by Safaricom, M-Pesa allowed unbanked Kenyans to send remittances, save, and access micro-credit on basic mobile phones. Transactions quickly grew to handle value equivalent to over half of Kenya's GDP, lifting an estimated 194,000 households (especially female-headed households) out of extreme poverty.",
        emoji: "📱",
      },
      {
        title: "Vietnam's Export Promotion & FDI Diversification",
        detail:
          "Following its *Đổi Mới* market reforms, Vietnam shifted from a rice-and-coffee exporter to a major electronics and textiles hub by attracting billions in FDI (Samsung, Intel, Nike) alongside heavy state spending on basic education and power grids — slashing extreme poverty from over 45% in 1992 to under 2% today.",
        emoji: "🇻🇳",
      },
      {
        title: "Bangladesh's Grameen Bank & Microfinance",
        detail:
          "Founded by Nobel laureate Muhammad Yunus, Grameen Bank pioneered collateral-free group microloans primarily to rural women, funding small enterprises and supporting girls' schooling — while also revealing microfinance's limits in financing large industrial infrastructure.",
        emoji: "🏦",
      },
      {
        title: "Botswana Escaping the Resource Curse",
        detail:
          "Unlike many commodity-dependent nations hit by corruption and Dutch Disease, Botswana paired diamond revenues with strong property rights, anti-corruption institutions, a sovereign fiscal buffer (Pula Fund), and massive public spending on education and health — moving from one of Africa's poorest nations in 1966 to upper-middle-income status.",
        emoji: "💎",
      },
    ],
    videos: [
      {
        title: "IB Economics 4.5 — Floating, Fixed & Managed Exchange Rates",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+exchange+rates+floating+fixed+managed",
      },
      {
        title: "IB Economics 4.6 — Balance of Payments, Marshall–Lerner & J-Curve [HL]",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+Balance+of+Payments+Marshall+Lerner+J+curve+IB+Economics",
      },
      {
        title: "IB Economics 4.7–4.9 — HDI, IHDI, GII, MPI & Barriers to Development",
        channel: "Brad Cartwright Economics",
        url: "https://www.youtube.com/results?search_query=IB+Economics+measuring+development+HDI+IHDI+GII+MPI+barriers",
      },
      {
        title: "IB Economics 4.10 — Growth & Development Strategies (Trade, Aid, FDI, IMF & World Bank)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=IB+Economics+growth+and+development+strategies+FDI+aid+ISI+export+promotion",
      },
    ],
    formulas: [
      {
        name: "Bilateral Inverse Exchange Rate",
        formula: "{{e_(B/A) = 1 / e_(A/B)}}",
        note: "If `1 USD = 1.35 SGD`, then `1 SGD = 1 / 1.35 ≈ 0.7407 USD`.",
        level: "SL",
      },
      {
        name: "Percentage Currency Appreciation / Depreciation",
        formula: "{{%Delta e = ((e_2 - e_1) / e_1) * 100}}",
        note: "Positive = appreciation (or revaluation); negative = depreciation (or devaluation) of the base currency.",
        level: "SL",
      },
      {
        name: "Current Account Balance (CA)",
        formula: "{{CA = (X_g - M_g) + (X_s - M_s) + " + '"Net Primary Income"' + " + " + '"Net Secondary Income"' + "}}",
        note: "Sum all four sub-accounts carefully, keeping credit (`+`) and debit (`−`) signs.",
        level: "SL",
      },
      {
        name: "Balance of Payments Accounting Identity",
        formula: "{{CA + KA + FA + " + '"Net Errors & Omissions"' + " = 0}}",
        note: "A Current Account deficit (`CA < 0`) must be financed by a net Capital + Financial Account surplus (`KA + FA > 0`).",
        level: "SL",
      },
      {
        name: "Marshall–Lerner Condition",
        formula: "{{|PED_X| + |PED_M| > 1}}",
        note: "Condition for a currency depreciation/devaluation to improve the Current Account (trade balance) in the long run.",
        level: "HL",
      },
      {
        name: "GNI from GDP",
        formula: "{{GNI = GDP + " + '"Net Factor Income from Abroad"' + "}}",
        note: "Subtracts repatriated MNC profits & foreign debt interest; adds citizens' earnings abroad.",
        level: "SL",
      },
      {
        name: "IHDI Percentage Loss from Inequality",
        formula: "{{%Loss = ((HDI - IHDI) / HDI) * 100}}",
        note: "Shows the share of potential human development lost due to unequal distribution of health, schooling, and income.",
        level: "SL",
      },
      {
        name: "Terms of Trade Index (ToT)",
        formula: "{{ToT = (P_X / P_M) * 100}}",
        note: "Ratio of average export price index (`P_X`) to average import price index (`P_M`) × 100; falling ToT means exports buy fewer imports.",
        level: "SL",
      },
      {
        name: "Debt-Service Ratio",
        formula: "{{DSR = (" + '"Annual Debt Servicing"' + " / " + '"Annual Export Earnings"' + ") * 100}}",
        note: "Share of a country's foreign-exchange export earnings consumed by external interest and principal repayments.",
        level: "SL",
      },
      {
        name: "Real Value of Tied Aid",
        formula: "{{V_real = V_nominal / (1 + m)}}",
        note: "Where `m` is the fractional price markup of donor-country goods over world-market prices (e.g. `25%` markup → divide by `1.25`).",
        level: "SL",
      },
    ],
  },
};
