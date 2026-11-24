import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "4a-trade-integration",
  title: "Unit 4A: International Trade, Protectionism & Economic Integration",
  strand: "Unit 4: The Global Economy",
  icon: "🚢",
  level: "SL",
  summary:
    "Why nations trade (SL gains + HL comparative advantage & terms of trade), how tariffs, quotas and production subsidies redistribute welfare, evaluating arguments for and against protectionism, and stages of economic integration from PTAs to monetary unions and the WTO.",
  intro:
    "Every smartphone, cup of coffee, and container ship docking at the Port of Singapore embodies a puzzle that has shaped two centuries of economic policy: **if one country is more productive at making everything, can it still gain by trading with a less productive neighbour?** And if free trade expands global output, why do governments keep erecting tariffs, quotas, and subsidies? In Unit 4A you will master the diagrams, HL quantitative welfare geometry, trading-bloc trade-offs, and real-world case studies needed to score top-band marks across Papers 1, 2, and 3.",
  guide: [
    // =========================================================================
    // SECTION 1: Gains from Trade, Absolute & Comparative Advantage [HL]
    // =========================================================================
    {
      id: "benefits-trade-comparative-hl",
      heading: "4.1 Gains from Trade, Absolute & Comparative Advantage [HL]",
      level: "SL",
      discovery: {
        problem:
          "Suppose **Country A** can produce either **120 tonnes of Coffee** or **60 Robotics units** per day, while **Country B** can produce either **40 tonnes of Coffee** or **40 Robotics units** per day. Country A can outproduce Country B in *both* goods! Before reading further, test this claim: **Can Country A actually consume MORE of both goods by specialising and trading with Country B?**",
        idea:
          "Compare what each country *gives up* (opportunity cost)! Country A sacrifices **2 tonnes of coffee** for every 1 robotics unit (`120 / 60 = 2`), whereas Country B sacrifices only **1 tonne of coffee** (`40 / 40 = 1`). If Country B makes 40 robotics units and trades 20 of them to Country A for 30 tonnes of coffee (a trade price of **1.5 tonnes of coffee per robotics unit**), Country A gets robotics cheaper than making them itself (`1.5 < 2`), and Country B gets coffee cheaper than making it itself (`20/30 = 0.67 < 1`). **Both** economies end up strictly *outside* their domestic Production Possibilities Curves!",
      },
      body:
        "### Core Benefits of International Trade (SL & HL)\n\n" +
        "Opening an economy to free international trade unlocks gains across microeconomic efficiency and macroeconomic growth:\n\n" +
        "- **Lower prices and greater choice for consumers:** Imports expose domestic firms to global competition, breaking local monopoly power and offering consumers wider variety and higher quality.\n" +
        "- **Economies of scale:** Firms selling into a global market produce far larger volumes, sliding down their long-run average cost (**LRAC**) curve — vital for small domestic markets such as Singapore, Switzerland, or New Zealand.\n" +
        "- **More efficient allocation of global resources:** Countries channel scarce land, labour, and capital into industries where they are relatively most productive, raising total world output.\n" +
        "- **Access to scarce inputs and technology transfer:** Resource-poor economies acquire raw materials, capital machinery, and embedded R&D that cannot be produced domestically.\n" +
        "- **Export-led growth (AD & LRAS):** Higher net exports (`X − M`) boost Aggregate Demand in the short run, while imported capital goods and competitive innovation shift LRAS rightwards.\n\n" +
        "### [HL] Absolute Advantage vs Comparative Advantage\n\n" +
        "**Absolute advantage** (Adam Smith, 1776) exists when a country can produce *more* of a good using the same quantity of resources (or the same output using fewer resources) than another country. On a linear Production Possibilities Curve (**PPC**), absolute advantage is read directly from the **larger axis intercept**.\n\n" +
        "**Comparative advantage** (David Ricardo, 1817) exists when a country can produce a good at a **lower opportunity cost** than another country. On a linear PPC, opportunity cost is the **slope** of the curve:\n\n" +
        "| Concept | What to Compare | Rule for Specialisation |\n" +
        "|---|---|---|\n" +
        "| **Absolute Advantage** | Maximum output intercepts | Higher maximum output with identical resources |\n" +
        "| **Comparative Advantage [HL]** | Opportunity cost (`Other / This`) | Lower opportunity cost; specialise & export that good |\n" +
        "| **Equal Opportunity Costs [HL]** | Parallel linear PPCs | Identical slopes → **no** mutually beneficial gains from trade |\n\n" +
        "### [HL] Mutually Beneficial Terms-of-Trade Bounds\n\n" +
        "Once countries specialise according to comparative advantage, they must agree on a **terms of trade (ToT)** — the international exchange ratio of one good for another. Trade benefits *both* partners **if and only if** the exchange ratio lies strictly between the two countries' domestic opportunity costs:\n\n" +
        "- Let Country 1 have the lower opportunity cost of Good X (`OC_1 < OC_2`, measured in units of Good Y per 1 unit of Good X).\n" +
        "- Any trade price `P` satisfying **{{OC_1 < P < OC_2}}** (units of Y per 1 unit of X) lets Country 1 earn *more* Y per exported X than its domestic cost, while Country 2 pays *less* Y per imported X than its domestic cost.\n" +
        "- Both economies reach a consumption point **strictly outside** their domestic PPC.\n\n" +
        "### [HL] Real-World Limitations of Comparative Advantage Theory\n\n" +
        "Ricardian theory rests on simplifying assumptions that IB evaluators explicitly test:\n\n" +
        "- **Zero transport costs:** Freight, insurance, and cold-chain logistics can wipe out small opportunity-cost differences.\n" +
        "- **Constant opportunity costs (linear PPCs):** Real economies face imperfect factor mobility and **increasing opportunity costs** (bowed-out PPCs), leading to *partial* rather than 100% specialisation.\n" +
        "- **Over-specialisation & structural vulnerability:** Relying heavily on a narrow set of primary commodities (e.g., copper in Zambia or cocoa in Ghana) exposes countries to volatile world prices and deteriorating terms of trade.\n" +
        "- **Free trade assumed & static factor endowments:** Tariffs, subsidies, and exchange-rate misalignment distort market prices; moreover, comparative advantage is **dynamic** — governments can build new advantages via education and infrastructure (as South Korea did from textiles to semiconductors).\n" +
        "- **Negative environmental externalities:** Specialisation and long-distance shipping generate unpriced carbon emissions, deforestation, and pollution.",
      diagram:
        '<svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-country linear Production Possibilities Curves illustrating comparative advantage and consumption outside the PPC">' +
        '<rect x="0" y="0" width="560" height="270" fill="#ffffff"/>' +
        '<text x="280" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">Linear PPCs: Comparative Advantage &amp; Consumption Beyond the PPC [HL]</text>' +
        '<line x1="60" y1="225" x2="255" y2="225" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="60" y1="225" x2="60" y2="45" stroke="#1f2937" stroke-width="2"/>' +
        '<text x="158" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Robotics (units)</text>' +
        '<text x="20" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#374151" transform="rotate(-90 20 135)">Coffee (tonnes)</text>' +
        '<text x="158" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#b45309">Country A (OC: 1R = 2C)</text>' +
        '<line x1="60" y1="65" x2="150" y2="225" stroke="#b45309" stroke-width="2.8"/>' +
        '<line x1="60" y1="65" x2="180" y2="225" stroke="#15803d" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<circle cx="120" cy="145" r="4.5" fill="#15803d"/>' +
        '<text x="128" y="143" font-size="10" font-weight="700" fill="#15803d">Trade point</text>' +
        '<text x="128" y="155" font-size="9.5" fill="#15803d">(outside PPC)</text>' +
        '<text x="53" y="69" text-anchor="end" font-size="10.5" font-weight="700" fill="#1f2937">120</text>' +
        '<text x="150" y="240" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">60</text>' +
        '<text x="184" y="240" text-anchor="middle" font-size="10" font-weight="700" fill="#15803d">80</text>' +
        '<text x="90" y="196" font-size="10" font-weight="700" fill="#b45309">PPC_A</text>' +
        '<line x1="335" y1="225" x2="530" y2="225" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="335" y1="225" x2="335" y2="45" stroke="#1f2937" stroke-width="2"/>' +
        '<text x="433" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Robotics (units)</text>' +
        '<text x="295" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#374151" transform="rotate(-90 295 135)">Coffee (tonnes)</text>' +
        '<text x="433" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">Country B (OC: 1R = 1C)</text>' +
        '<line x1="335" y1="92" x2="485" y2="225" stroke="#0369a1" stroke-width="2.8"/>' +
        '<line x1="335" y1="55" x2="485" y2="225" stroke="#15803d" stroke-width="2" stroke-dasharray="6 4"/>' +
        '<circle cx="410" cy="140" r="4.5" fill="#15803d"/>' +
        '<text x="418" y="136" font-size="10" font-weight="700" fill="#15803d">Trade point</text>' +
        '<text x="418" y="148" font-size="9.5" fill="#15803d">(outside PPC)</text>' +
        '<text x="328" y="96" text-anchor="end" font-size="10.5" font-weight="700" fill="#0369a1">100</text>' +
        '<text x="328" y="60" text-anchor="end" font-size="10" font-weight="700" fill="#15803d">150</text>' +
        '<text x="485" y="240" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">100</text>' +
        '<text x="372" y="198" font-size="10" font-weight="700" fill="#0369a1">PPC_B</text>' +
        '<text x="280" y="266" text-anchor="middle" font-size="9.5" fill="#4b5563">Dashed green lines = Trading possibilities at ToT 1 Robotics = 1.5 Coffee (strictly between 1 and 2)</text>' +
        '</svg>',
      diagramCaption:
        "Different PPC slopes mean different opportunity costs: Country A has a steeper slope (comparative advantage in Coffee), Country B has a flatter slope (comparative advantage in Robotics). Trading at 1R = 1.5C pushes both nations' consumption possibilities outside their PPCs.",
      workedExamples: [
        {
          title: "[HL] Finding Comparative Advantage & Valid Terms of Trade",
          problem:
            "With identical resources, **Vietnam** can produce a maximum of **120 tonnes of coffee** OR **60 robotics units**, while **Japan** can produce a maximum of **100 tonnes of coffee** OR **100 robotics units**. Determine absolute advantage, comparative advantage, and the mutually beneficial terms-of-trade range for 1 robotics unit.",
          steps: [
            "Read **absolute advantage** from maximum outputs: Vietnam produces more coffee (`120 > 100`), while Japan produces more robotics (`100 > 60`).",
            "Compute opportunity cost of **1 robotics unit** (`Coffee / Robotics`): Vietnam gives up {{120/60}} = 2 tonnes of coffee; Japan gives up {{100/100}} = 1 tonne of coffee.",
            "Since Japan's opportunity cost (`1`) is lower than Vietnam's (`2`), **Japan** has a comparative advantage in **robotics**.",
            "Compute opportunity cost of **1 tonne of coffee** (`Robotics / Coffee`): Vietnam gives up {{60/120}} = 0.5 robotics units; Japan gives up {{100/100}} = 1 robotics unit. Thus **Vietnam** has a comparative advantage in **coffee**.",
            "Set the mutually beneficial terms of trade strictly between the two domestic opportunity costs of robotics: **{{1 < P < 2}}** tonnes of coffee per robotics unit (for example, `1 Robotics = 1.5 Coffee`).",
          ],
          answer:
            "Vietnam specialises in coffee; Japan specialises in robotics; mutually beneficial terms of trade lie strictly between 1 and 2 tonnes of coffee per robotics unit.",
          yourTurn: {
            question:
              "Country P can produce a maximum of 90 tonnes of wheat OR 30 tractors, while Country Q can produce a maximum of 40 tonnes of wheat OR 20 tractors. Calculate Country P's opportunity cost of producing 1 tractor (in tonnes of wheat).",
            answer: { type: "number", value: 3 },
            solution:
              "Using 'Other Over This': Country P's opportunity cost of 1 tractor = {{90/30}} = **3 tonnes of wheat** (whereas Country Q's is {{40/20}} = 2 tonnes of wheat, so Country Q has the comparative advantage in tractors even though Country P has absolute advantage in both!).",
          },
        },
        {
          title: "[HL] When One Country Has Absolute Advantage in Both Goods",
          problem:
            "Country X can produce at most **160 laptops** or **80 drones**. Country Y can produce at most **60 laptops** or **60 drones**. Show why Country X still gains from importing drones from Country Y.",
          steps: [
            "Country X has an **absolute advantage in both** laptops (`160 > 60`) and drones (`80 > 60`).",
            "Opportunity cost of **1 drone**: Country X gives up {{160/80}} = 2 laptops; Country Y gives up {{60/60}} = 1 laptop. Country Y has the lower OC (`1 < 2`) → **Country Y has comparative advantage in drones**.",
            "Opportunity cost of **1 laptop**: Country X gives up {{80/160}} = 0.5 drones; Country Y gives up {{60/60}} = 1 drone → **Country X has comparative advantage in laptops**.",
            "At a terms of trade of **1 drone = 1.5 laptops**, Country X buys drones for 1.5 laptops instead of sacrificing 2 laptops domestically, while Country Y sells each drone for 1.5 laptops instead of its domestic cost of 1 laptop.",
          ],
          answer:
            "Country X specialises in laptops and imports drones from Country Y at any exchange rate strictly between 1 and 2 laptops per drone.",
        },
      ],
      keyPoints: [
        "Free trade yields lower prices, wider choice, economies of scale, efficiency gains, technology transfer, and export-led growth.",
        "[HL] **Absolute advantage** compares maximum output; **comparative advantage** compares **opportunity cost** (`Other / This`).",
        "[HL] Even if one country has an absolute advantage in *both* goods, mutually beneficial trade exists whenever PPC slopes differ.",
        "[HL] If two linear PPCs are parallel (identical opportunity costs), there are **no** comparative-advantage gains from trade.",
        "[HL] Mutually beneficial terms of trade must lie strictly between the two countries' domestic opportunity costs.",
      ],
      whyItWorks:
        "Opportunity cost measures the true resource sacrifice inside each economy. By letting each country produce the good where its *relative* sacrifice is smallest and swapping at an intermediate price, total world production rises without adding a single extra worker or machine — creating a surplus that both trading partners share.",
      strategies: [
        "**Output tables vs Input tables:** For an *output* table (max goods produced), use `OC of A = Max B / Max A` (**Other Over This**). If an IB HL Paper 3 gives an *input* table (labour hours per unit), flip it to `Hours for A / Hours for B` (**This Over Other**) — or convert to outputs per hour first!",
        "**Cross-check reciprocity:** Once Country A has comparative advantage in Good X, Country B *automatically* has comparative advantage in Good Y (unless opportunity costs are equal). Never assign comparative advantage in *both* goods to the same country!",
        "**Evaluation hook for essays:** Always balance Ricardian theory against transport costs, increasing opportunity costs (concave PPCs), over-specialisation vulnerability, and environmental externalities.",
      ],
      thinkDeeper:
        "Why might a resource-rich developing economy deliberately reject its *static* comparative advantage in raw agricultural exports? Because primary commodities have low income elasticity of demand (`YED < 1`) and volatile prices — whereas investing in education and infrastructure can create a *dynamic* comparative advantage in higher-value manufacturing or services.",
    },

    // =========================================================================
    // SECTION 2: Types of Trade Protection: Tariffs, Quotas & Production Subsidies
    // =========================================================================
    {
      id: "trade-protection-diagrams",
      heading: "4.2 Types of Trade Protection: Tariffs, Quotas & Production Subsidies",
      level: "SL",
      discovery: {
        problem:
          "A small importing country wants to expand its domestic steel output from 20,000 to 40,000 tonnes per year while the world price is $400/tonne. Compare two tools: **(1) a $100/tonne import tariff** vs **(2) a $100/tonne domestic production subsidy**. Which policy leaves domestic *consumers* paying the exact same $400 world price, and why does that cut deadweight welfare loss in half?",
        idea:
          "A **tariff** taxes foreign steel, pushing the domestic market price up to `$500` — which expands domestic production *and* forces consumers to buy less (creating **two** deadweight loss triangles: production + consumption inefficiency). A **domestic production subsidy** shifts domestic supply downwards while letting tariff-free imports keep the consumer price pinned at `$400`! Consumers suffer **zero** loss of consumer surplus and **zero** consumption DWL — though taxpayers must fund the entire subsidy out of the government budget.",
      },
      body:
        "### The Small-Country Free-Trade Benchmark\n\n" +
        "In a small open economy (a price taker on global markets), the world supply curve `S_world` is **perfectly elastic (horizontal)** at the world price `P_w`, lying below the domestic autarky equilibrium price `P_autarky`. Under free trade:\n\n" +
        "- Domestic producers supply `Q_1` (where `S_domestic` meets `P_w`).\n" +
        "- Domestic consumers buy `Q_2` (where `D_domestic` meets `P_w`).\n" +
        "- **Imports** equal the gap `Q_2 − Q_1`.\n\n" +
        "### 1. Import Tariffs (Tax on Imports)\n\n" +
        "A **specific tariff** `t` per imported unit shifts world supply vertically upwards from `S_world` to `S_world + tariff` at price `P_w + t`:\n\n" +
        "- **Domestic output expands** from `Q_1` to `Q_3` (domestic producer surplus rises; employment in the protected industry rises).\n" +
        "- **Domestic consumption contracts** from `Q_2` to `Q_4` (consumers pay higher prices and buy less, losing consumer surplus).\n" +
        "- **Imports fall** from `Q_2 − Q_1` to `Q_4 − Q_3` (foreign exporters lose revenue).\n" +
        "- **Government collects tariff revenue** equal to `(Q_4 − Q_3) × t` (a transfer from domestic consumers to the state).\n" +
        "- **Two deadweight welfare-loss (DWL) triangles emerge:**\n" +
        "  1. **Production inefficiency DWL:** `{{1/2}} × (Q_3 − Q_1) × t` — extra units `Q_1` to `Q_3` are produced by higher-cost domestic firms (`MC > P_w`) instead of more efficient foreign producers.\n" +
        "  2. **Consumption inefficiency DWL:** `{{1/2}} × (Q_2 − Q_4) × t` — consumers priced out between `Q_4` and `Q_2` valued those units above `P_w`, so net social surplus vanishes.\n\n" +
        "### 2. Import Quotas (Physical Quantity Limit)\n\n" +
        "An **import quota** sets a legal ceiling on the physical volume of imports (`Q_quota = Q_4 − Q_3`). Supply shifts rightwards by the quota amount (`S_domestic + quota`), creating a shortage at `P_w` that drives the domestic price up to `P_q`:\n\n" +
        "- Price, domestic output (`Q_1 → Q_3`), domestic consumption (`Q_2 → Q_4`), and the two DWL triangles mirror an equivalent tariff.\n" +
        "- **Crucial difference:** Instead of automatic government tax revenue, the rectangle `(Q_4 − Q_3) × (P_q − P_w)` becomes **quota rent** (windfall revenue). If import licences are handed free to foreign exporters, that entire rectangle leaks *abroad*, making the domestic country's welfare loss much larger than under a tariff! (Only if the domestic government *auctions* quota licences competitively does it capture the rent as revenue.)\n\n" +
        "### 3. Domestic Production Subsidies\n\n" +
        "A per-unit **production subsidy** `s` paid to domestic producers lowers their marginal cost, shifting `S_domestic` downwards/rightwards to `S_domestic + subsidy`:\n\n" +
        "- Domestic price stays pinned at **`P_w`** — consumers continue buying `Q_2` at `P_w`, so **consumer surplus is unchanged** and **consumption DWL = 0**.\n" +
        "- Domestic producers receive `P_w + s` per unit, expanding output from `Q_1` to `Q_3` and reducing imports to `Q_2 − Q_3`.\n" +
        "- **Government budget cost** equals **`Q_3 × s`** (paid on *every* domestically produced unit, creating an opportunity cost in public spending or higher taxes).\n" +
        "- **Only production inefficiency DWL** occurs: `{{1/2}} × (Q_3 − Q_1) × s`.\n\n" +
        "### 4. Administrative Barriers (Non-Tariff Barriers)\n\n" +
        "Governments also restrict imports quietly through **red tape**, customs delays, strict health/safety/packaging standards, environmental certification rules, or local-content requirements. These raise importers' compliance costs and reduce import volumes without raising tariff revenue, often disguising protectionism behind consumer-safety rules.\n\n" +
        "| Policy Tool | Consumer Price | Govt Budget Effect | Deadweight Welfare Loss [HL] |\n" +
        "|---|---|---|---|\n" +
        "| **Tariff (`t`)** | Rises to `P_w + t` | **Revenue** `(Q_4 − Q_3) × t` | Production DWL + Consumption DWL |\n" +
        "| **Import Quota** | Rises to `P_q` | **Zero** (unless licences auctioned) | Production + Consumption DWL (+ lost quota rent if foreign-held) |\n" +
        "| **Production Subsidy (`s`)** | Stays at **`P_w`** | **Expenditure** `Q_3 × s` | **Production DWL only** (no consumption DWL) |\n" +
        "| **Administrative Barriers** | Rises indirectly | Zero (compliance cost) | Inefficiency from higher compliance/delay costs |",
      diagram:
        '<svg viewBox="0 0 540 315" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tariff welfare diagram showing domestic producer gain, government tariff revenue, and production and consumption deadweight loss triangles">' +
        '<rect x="0" y="0" width="540" height="315" fill="#ffffff"/>' +
        '<text x="270" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">Effect of a Specific Import Tariff (SL Diagram &amp; HL Welfare Areas)</text>' +
        '<polygon points="70,175 180,175 130,220 70,220" fill="#dcfce7" opacity="0.9"/>' +
        '<polygon points="130,220 180,175 180,220" fill="#fed7aa" opacity="0.95"/>' +
        '<rect x="180" y="175" width="160" height="45" fill="#dbeafe" opacity="0.95"/>' +
        '<polygon points="340,175 340,220 390,220" fill="#fecaca" opacity="0.95"/>' +
        '<line x1="70" y1="265" x2="495" y2="265" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="70" y1="265" x2="70" y2="42" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="70" y1="265" x2="320" y2="49" stroke="#15803d" stroke-width="2.6"/>' +
        '<line x1="125" y1="49" x2="465" y2="265" stroke="#b45309" stroke-width="2.6"/>' +
        '<line x1="70" y1="220" x2="475" y2="220" stroke="#0369a1" stroke-width="2.2"/>' +
        '<line x1="70" y1="175" x2="475" y2="175" stroke="#dc2626" stroke-width="2.2"/>' +
        '<line x1="130" y1="220" x2="130" y2="265" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="180" y1="175" x2="180" y2="265" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="340" y1="175" x2="340" y2="265" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="390" y1="220" x2="390" y2="265" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<text x="325" y="54" font-size="11.5" font-weight="800" fill="#15803d">S_dom</text>' +
        '<text x="456" y="253" font-size="11.5" font-weight="800" fill="#b45309">D_dom</text>' +
        '<text x="478" y="224" font-size="10.5" font-weight="700" fill="#0369a1">S_world</text>' +
        '<text x="478" y="179" font-size="10.5" font-weight="700" fill="#dc2626">S_w + t</text>' +
        '<text x="63" y="224" text-anchor="end" font-size="11" font-weight="700" fill="#0369a1">P_w</text>' +
        '<text x="63" y="179" text-anchor="end" font-size="11" font-weight="700" fill="#dc2626">P_w + t</text>' +
        '<text x="130" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q1</text>' +
        '<text x="180" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q3</text>' +
        '<text x="340" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q4</text>' +
        '<text x="390" y="280" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q2</text>' +
        '<text x="113" y="201" text-anchor="middle" font-size="9.5" font-weight="800" fill="#166534">PS Gain</text>' +
        '<text x="163" y="213" text-anchor="middle" font-size="9" font-weight="800" fill="#9a3412">DWL1</text>' +
        '<text x="260" y="201" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1e40af">Tariff Revenue</text>' +
        '<text x="358" y="213" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">DWL2</text>' +
        '<text x="27" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="#374151" transform="rotate(-90 27 150)">Price ($)</text>' +
        '<text x="285" y="297" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Quantity (units)</text>' +
        '<text x="270" y="311" text-anchor="middle" font-size="9.5" fill="#4b5563">DWL1 = production inefficiency · DWL2 = consumption inefficiency · Imports shrink from (Q2−Q1) to (Q4−Q3)</text>' +
        '</svg>',
      diagramCaption:
        "A specific tariff raises price from P_w to P_w + t. Consumer surplus falls by the entire shaded strip (PS Gain + DWL1 + Tariff Revenue + DWL2); net social welfare falls by DWL1 + DWL2.",
      workedExamples: [
        {
          title: "[HL] Calculating Tariff Revenue, Producer Gain & Deadweight Loss",
          problem:
            "In a small country's steel market, the free-trade world price is **$400/tonne**. At `$400`, domestic firms supply **20 thousand tonnes** (`Q_1`) and domestic buyers demand **100 thousand tonnes** (`Q_2`). A specific tariff of **$100/tonne** raises domestic price to `$500`, expanding domestic supply to **40 thousand tonnes** (`Q_3`) and cutting demand to **80 thousand tonnes** (`Q_4`). Calculate (a) government tariff revenue, (b) total deadweight welfare loss, and (c) domestic producer surplus gain.",
          steps: [
            "Post-tariff import volume = `Q_4 − Q_3 = 80,000 − 40,000 = 40,000` tonnes.",
            "**Government tariff revenue** = `40,000 × $100 = $4,000,000` (**$4 million**).",
            "**Production inefficiency DWL** = `{{1/2}} × (Q_3 − Q_1) × t = {{1/2}} × 20,000 × $100 = $1,000,000` ($1 million).",
            "**Consumption inefficiency DWL** = `{{1/2}} × (Q_2 − Q_4) × t = {{1/2}} × 20,000 × $100 = $1,000,000` ($1 million).",
            "**Total DWL** = `$1m + $1m` = **$2 million**.",
            "**Domestic producer surplus gain** (trapezoid) = `{{1/2}} × (Q_1 + Q_3) × t = {{1/2}} × (20,000 + 40,000) × $100` = **$3 million**.",
            "*Accounting check:* Consumer surplus loss = `{{1/2}} × (100,000 + 80,000) × $100 = $9 million` = `$3m (PS gain) + $4m (govt rev) + $2m (total DWL)`.",
          ],
          answer:
            "Tariff revenue = $4 million; Total DWL = $2 million; Domestic producer surplus gain = $3 million.",
          yourTurn: {
            question:
              "In the same steel market (`P_w = $400`, `Q_1 = 20` thousand, `Q_2 = 100` thousand), suppose the government instead levies a smaller tariff of $50/tonne (`P = $450`), so `Q_3 = 30` thousand and `Q_4 = 90` thousand tonnes. Calculate the **total deadweight welfare loss** (in $ million).",
            answer: { type: "number", value: 0.5, tolerance: 0.005 },
            solution:
              "Production DWL = `{{1/2}} × (30,000 − 20,000) × $50 = $250,000` ($0.25m). Consumption DWL = `{{1/2}} × (100,000 − 90,000) × $50 = $250,000` ($0.25m). Total DWL = **$0.5 million** (halving the tariff cuts DWL to one quarter!).",
          },
        },
        {
          title: "[HL] Comparing a Domestic Production Subsidy on the Same Market",
          problem:
            "Instead of the $100/tonne tariff above, the government pays domestic steelmakers a **$100/tonne production subsidy**, expanding domestic output from `20` thousand to `40` thousand tonnes while domestic price remains at `$400/tonne` (`Q_2 = 100` thousand tonnes). Calculate government subsidy expenditure and total deadweight welfare loss.",
          steps: [
            "**Government expenditure** is paid on *all* post-subsidy domestic units (`Q_3 = 40,000`): `40,000 × $100 = $4,000,000` (**$4 million**).",
            "Because domestic consumers still pay `$400`, consumption stays at `100,000` tonnes → **consumption DWL = $0**.",
            "**Production DWL** = `{{1/2}} × (40,000 − 20,000) × $100 = $1,000,000` (**$1 million**).",
            "Total DWL (`$1m`) is half the tariff's DWL (`$2m`), because consumers suffer no price hike — at the fiscal cost of `$4m` of taxpayer money.",
          ],
          answer:
            "Government subsidy expenditure = $4 million; Total deadweight welfare loss = $1 million (production inefficiency only).",
        },
      ],
      keyPoints: [
        "Always check **four stakeholders** in IB protectionism questions: domestic producers, domestic consumers, foreign exporters, and the government budget/taxpayers.",
        "Under a **tariff**, consumer surplus loss splits cleanly into 4 pieces: `PS Gain + Govt Revenue + Production DWL + Consumption DWL`.",
        "Under a **quota**, the middle rectangle `(Q_4 − Q_3)(P_q − P_w)` is **quota rent** (not automatic tax revenue) — if foreign exporters keep the licences, domestic welfare falls much further.",
        "Under a **production subsidy**, consumers still pay `P_w`, so there is **no consumption DWL** — only production DWL — but the government pays `Q_3 × s`.",
        "Halving a tariff cuts deadweight loss to **one-quarter** because both the base and height of each DWL triangle shrink proportionally (`DWL ∝ t²`).",
      ],
      whyItWorks:
        "Every protectionist tool drives a wedge between the world opportunity cost `P_w` and domestic marginal cost (and, for tariffs/quotas, domestic marginal benefit). That wedge destroys mutually beneficial transactions whenever `MB > P_w` is blocked (consumption DWL) or `MC > P_w` is subsidised into existence (production DWL).",
      strategies: [
        "**Label all four quantities in exact order:** Going left to right along the quantity axis on a tariff/quota diagram, the sequence is always **`Q_1 → Q_3 → Q_4 → Q_2`** (or `Q_1, Q_2, Q_3, Q_4` if you number left-to-right — just define your notation explicitly!).",
        "**Never forget the `{{1/2}}` on triangles!** The single most common HL Paper 3 slip is computing `(Q_3 − Q_1) × t` as a rectangle instead of a triangle.",
        "**Watch subsidy expenditure vs PS gain:** Government subsidy spending is the full rectangle `Q_3 × s`, whereas domestic producers gain the trapezoid `{{1/2}}(Q_1 + Q_3) × s`; the difference `{{1/2}}(Q_3 − Q_1) × s` is precisely the production DWL!",
      ],
      thinkDeeper:
        "If domestic production subsidies generate smaller deadweight loss than tariffs AND leave lower-income households paying the lower world price `P_w`, why do developing countries overwhelmingly use tariffs rather than subsidies? Because developing-country governments often face narrow income-tax bases and fiscal deficits — tariffs *raise* immediate revenue at borders, whereas subsidies *drain* scarce public funds.",
    },

    // =========================================================================
    // SECTION 3: Evaluating Arguments For & Against Trade Protection
    // =========================================================================
    {
      id: "arguments-for-against-protection",
      heading: "4.3 Evaluating Arguments For & Against Trade Protection",
      level: "SL",
      discovery: {
        problem:
          "In the 1960s, South Korea had almost no global comparative advantage in shipbuilding, cars, or semiconductors — foreign imports were dramatically cheaper. Yet today firms like Hyundai and Samsung are world leaders. **When can protecting a high-cost domestic industry temporarily actually INCREASE long-run global efficiency — and what could go badly wrong?**",
        idea:
          "If a young industry has massive **economies of scale** and learning-by-doing, its initial average cost sits above `P_w`, preventing entry under free trade. Temporary protection buys time for output to expand until **LRAC drops below `P_w`** — creating a new, internationally competitive comparative advantage! The catch: governments often fail to 'pick winners', firms lobby to keep protection *permanently* (becoming lazy 'perpetual infants'), and consumers/downstream firms bear years of inflated prices.",
      },
      body:
        "### Arguments FOR Trade Protection (and Their IB Evaluation)\n\n" +
        "IB examiners distinguish between **economically defensible (nuanced)** arguments and **weak/flawed** arguments:\n\n" +
        "1. **Infant industry argument (dynamic comparative advantage):** Newly established domestic industries in developing economies may lack economies of scale, skilled labour, or access to finance to compete initially with mature foreign rivals. Temporary tariffs or subsidies give firms breathing space to slide down their LRAC curve. *Evaluation:* Hard for governments to identify genuine future winners; industries frequently become politically entrenched and dependent on permanent protection; subsidies are less distortionary than tariffs.\n" +
        "2. **National security & strategic self-sufficiency:** Relying on foreign rivals for defence equipment, semiconductors, energy, or staple food leaves a nation vulnerable during wars, pandemics, or sanctions. *Evaluation:* Easily abused by politically connected domestic lobbies claiming almost any industry (e.g., footwear or sugar) is 'strategic'.\n" +
        "3. **Health, safety, labour & environmental standards:** Restricting imports of unsafe toys, hormone-treated beef, or carbon-intensive goods (e.g., the EU Carbon Border Adjustment Mechanism, **CBAM**) corrects negative consumption/production externalities. *Evaluation:* Standards can be weaponised as **disguised protectionism** (green/regulatory barriers) against poorer exporters lacking testing infrastructure.\n" +
        "4. **Preventing dumping:** **Dumping** occurs when foreign firms export goods below their domestic cost of production (or below home-market price) — sometimes with predatory intent to drive domestic rivals bankrupt and later raise monopoly prices. WTO rules explicitly permit **anti-dumping duties**. *Evaluation:* Genuine predatory dumping is hard to prove; low foreign prices often simply reflect legitimate comparative advantage, and anti-dumping investigations are frequently politicised.\n" +
        "5. **Diversification in developing economies:** Countries over-dependent on one or two primary commodities (vulnerable to price swings and low YED) may protect nascent manufacturing to broaden their export base.\n" +
        "6. **Government tariff revenue (developing economies):** Where informal sectors make collecting income or VAT taxes costly, customs duties at ports provide a reliable, low-cost fiscal revenue stream to fund health and education.\n" +
        "7. **Protecting domestic employment & sunrise/sunset transitions:** Shielding declining industries prevents abrupt **structural unemployment** and regional social collapse. *Evaluation:* Saving jobs in one protected industry typically *destroys* jobs in downstream user industries (e.g., steel tariffs raise costs for carmakers and construction) and invites **retaliation** against export jobs!\n\n" +
        "### Economic Costs & Arguments AGAINST Trade Protection\n\n" +
        "- **Misallocation of resources (allocative & productive inefficiency):** Keeping high-cost domestic firms alive diverts land, labour, and capital away from more productive export sectors, generating deadweight welfare loss.\n" +
        "- **Higher consumer prices & regressive burden:** Tariffs and quotas act like regressive indirect taxes — raising prices of food, clothing, and household goods takes a larger share of low-income families' budgets.\n" +
        "- **Higher input costs & lower export competitiveness:** Protecting intermediate goods (steel, aluminium, chips) raises costs for domestic manufacturers, causing cost-push inflation (SRAS shifts left) and hurting export competitiveness.\n" +
        "- **Retaliation and trade wars:** Trading partners impose counter-tariffs (e.g., US–China tariff escalation 2018–2025; the 1930 Smoot–Hawley Tariff spiral), shrinking global trade volumes, reducing global AD, and risking stagflation.\n" +
        "- **Reduced incentive to innovate & rent-seeking corruption:** Sheltered firms face weaker competitive pressure to cut costs or innovate, while discretionary quota licences and tariff exemptions breed lobbying and corruption.",
      diagram:
        '<svg viewBox="0 0 540 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Infant industry long-run average cost curve showing how temporary protection aims to lower average cost below the world price">' +
        '<rect x="0" y="0" width="540" height="285" fill="#ffffff"/>' +
        '<text x="270" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">The Infant Industry Argument: Sliding Down the LRAC Curve</text>' +
        '<line x1="75" y1="235" x2="495" y2="235" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="75" y1="235" x2="75" y2="42" stroke="#1f2937" stroke-width="2"/>' +
        '<path d="M 105 62 Q 210 198 370 194 Q 440 192 480 170" fill="none" stroke="#b45309" stroke-width="3"/>' +
        '<line x1="75" y1="150" x2="485" y2="150" stroke="#0369a1" stroke-width="2.2" stroke-dasharray="6 4"/>' +
        '<line x1="75" y1="95" x2="145" y2="95" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<line x1="145" y1="95" x2="145" y2="235" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<circle cx="145" cy="95" r="5" fill="#dc2626"/>' +
        '<line x1="75" y1="192" x2="355" y2="192" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<line x1="355" y1="192" x2="355" y2="235" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4 3"/>' +
        '<circle cx="355" cy="192" r="5" fill="#15803d"/>' +
        '<path d="M 162 106 Q 230 165 335 184" fill="none" stroke="#15803d" stroke-width="2.2" stroke-dasharray="3 3"/>' +
        '<polygon points="338,185 327,178 329,189" fill="#15803d"/>' +
        '<text x="455" y="162" font-size="11.5" font-weight="800" fill="#b45309">LRAC</text>' +
        '<text x="485" y="143" text-anchor="end" font-size="11" font-weight="800" fill="#0369a1">World Price (P_w)</text>' +
        '<text x="68" y="99" text-anchor="end" font-size="10.5" font-weight="700" fill="#dc2626">AC_1</text>' +
        '<text x="68" y="154" text-anchor="end" font-size="10.5" font-weight="700" fill="#0369a1">P_w</text>' +
        '<text x="68" y="196" text-anchor="end" font-size="10.5" font-weight="700" fill="#15803d">AC_2</text>' +
        '<text x="145" y="251" text-anchor="middle" font-size="10.5" font-weight="700" fill="#dc2626">Q_infant</text>' +
        '<text x="355" y="251" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Q_mature</text>' +
        '<text x="155" y="83" font-size="9.5" font-weight="700" fill="#dc2626">Initially uncompetitive (AC_1 &gt; P_w)</text>' +
        '<text x="355" y="213" text-anchor="middle" font-size="9.5" font-weight="700" fill="#15803d">Globally competitive (AC_2 &lt; P_w)</text>' +
        '<text x="27" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="#374151" transform="rotate(-90 27 140)">Cost / Price ($)</text>' +
        '<text x="285" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="#374151">Domestic Industry Output (Q)</text>' +
        '</svg>',
      diagramCaption:
        "Temporary protection aims to move an infant domestic firm from Q_infant (AC_1 > P_w) to Q_mature (AC_2 < P_w) via economies of scale and learning-by-doing — after which protection should be removed.",
      workedExamples: [
        {
          title: "Evaluating Downstream Costs of Upstream Protection",
          problem:
            "A government imposes a 25% tariff on imported steel to save 4,000 jobs in domestic steel mills, raising domestic steel prices by **$180/tonne**. Domestic appliance and automotive manufacturers buy **500,000 tonnes** of steel per year. Calculate the annual cost imposed on downstream manufacturers and explain the policy trade-off.",
          steps: [
            "Compute additional annual input cost to downstream firms: `500,000 × $180 = $90,000,000` (**$90 million/year**).",
            "Divide by jobs protected to see implicit cost per saved job: `{{$90,000,000 / 4,000}}` = **$22,500 per job per year** in extra steel costs alone (often far exceeding steelworkers' wages in real-world studies!).",
            "Explain the downstream macro effect: higher steel costs shift **SRAS left** for automakers and builders, raising consumer prices, reducing export competitiveness, and threatening *more* than 4,000 jobs in steel-using sectors.",
            "Conclude with balanced evaluation: rather than permanent tariffs, targeted retraining subsidies (interventionist supply-side policy) help displaced steelworkers transition without penalising the wider economy.",
          ],
          answer:
            "Downstream input costs rise by $90 million/year ($22,500 per protected steel job), risking net job losses across steel-using industries and foreign retaliation.",
          yourTurn: {
            question:
              "A domestic steel tariff raises steel prices by $150 per tonne. If a local carmaker uses 2 tonnes of steel per car and exports 10,000 cars annually, calculate the total annual increase in the carmaker's steel input costs (in $ million).",
            answer: { type: "number", value: 3 },
            solution:
              "Extra steel cost per car = `2 × $150 = $300`. Across `10,000` cars: `10,000 × $300 = $3,000,000` = **$3 million**.",
          },
        },
      ],
      keyPoints: [
        "Strongest economic arguments for temporary protection: **infant industries** (dynamic comparative advantage), **anti-dumping**, **health/environmental standards**, **national security**, and **developing-country fiscal revenue**.",
        "Weakest / most costly argument: blanket protection to 'save jobs' — it ignores higher input costs, downstream job losses, regressive consumer price hikes, and foreign retaliation.",
        "Use **short-run vs long-run** evaluation: protection may cushion short-run structural unemployment, yet entrench inefficiency and lower living standards in the long run.",
        "Compare **alternatives to tariffs**: retraining programmes, R&D subsidies, and infrastructure investment address competitiveness without distorting consumer prices or violating WTO rules.",
      ],
      whyItWorks:
        "Trade protection is a classic **concentrated benefits vs dispersed costs** political-economy problem: a handful of protected firms gain millions and lobby intensely, while millions of consumers and downstream firms each lose a small amount — making bad protection easy to pass and notoriously hard to repeal.",
      strategies: [
        "**Paper 1 Part (b) 15-mark structure:** Define protectionism → Draw & explain a crisp tariff or subsidy diagram → Present 2–3 strong arguments *for* (anchored in real-world examples like South Korea's industrial policy or US 2018 steel tariffs) → Counter with 2–3 economic costs + stakeholder synthesis (consumers vs producers, developed vs developing economies, SR vs LR) → Give a reasoned judgement.",
        "**Separate valid vs flawed arguments explicitly:** Examiners award top-band evaluation when you explain *why* infant-industry protection or environmental standards have stronger economic foundations than broad anti-import employment arguments.",
      ],
      thinkDeeper:
        "Should high-income countries impose Carbon Border Adjustment Mechanisms (like the EU's CBAM) on steel and cement imported from developing nations without carbon taxes? On one hand, it prevents 'carbon leakage' and internalises a global negative externality; on the other, developing exporters argue it functions as green protectionism that penalises poorer nations with smaller historical emissions.",
    },

    // =========================================================================
    // SECTION 4: Trading Blocs, Monetary Unions, Trade Creation/Diversion & WTO
    // =========================================================================
    {
      id: "economic-integration-wto",
      heading: "4.4 Trading Blocs, Monetary Unions, Trade Creation/Diversion & WTO",
      level: "SL",
      discovery: {
        problem:
          "Suppose **Country A** charges a **$20 tariff** on imported shoes from everywhere. Country B makes shoes for **$50**; Country C (the world's most efficient maker) makes shoes for **$40**. Country A forms a Customs Union with Country B — dropping its tariff on B to **$0** while keeping the **$20 tariff** on C. Consumers now pay **$50** instead of **$60**! **Did Country A as a whole actually become BETTER OFF or WORSE OFF?**",
        idea:
          "Look closely at *total* national cost! Before the union, consumers paid `$60` to Country C, but Country A's government kept `$20` in tariff revenue — so the nation paid only **`$40` per pair** in real resources! After joining the union with B, consumers save `$10` (`$60 → $50`), **but the government loses `$20` in tariff revenue** — so Country A now pays **`$50` per pair** in real resources, a net national loss of **`$10` per pair**! Switching from a lower-cost non-member (C) to a higher-cost bloc member (B) is **[HL] Trade Diversion**.",
      },
      body:
        "### Stages of Economic Integration (Cumulative Ladder)\n\n" +
        "Economic integration occurs when countries reduce or eliminate barriers to trade and factor mobility between them. Each stage adds a deeper layer of integration onto the previous stage:\n\n" +
        "| Stage | Internal Trade | External Trade Policy | Factor Mobility & Macro Policy | Real-World Example |\n" +
        "|---|---|---|---|---|\n" +
        "| **1. Preferential Trade Area (PTA)** | Reduced tariffs on *selected* goods | Independent national tariffs | No | Partial bilateral/regional tariff preferences (e.g., early ASEAN PTA) |\n" +
        "| **2. Free Trade Area (FTA)** | **Zero** tariffs/quotas on most goods between members | **Independent** tariffs on non-members (needs **rules of origin**) | No | **USMCA**, **ASEAN (AFTA)**, **RCEP** |\n" +
        "| **3. Customs Union (CU)** | Zero internal tariffs | **Common External Tariff (CET)** & joint trade deals | No | **Mercosur**, **SACU**, **EU–Turkey CU** |\n" +
        "| **4. Common Market** | Zero internal tariffs | Common External Tariff (CET) | **Free movement of labour & capital** + harmonised standards | **EU Single Market** |\n" +
        "| **5. Monetary Union** | Zero internal tariffs | Common External Tariff (CET) | Common market + **single currency & single central bank** | **Eurozone (ECB, €)** |\n\n" +
        "### Evaluating a Monetary Union (e.g. The Eurozone)\n\n" +
        "- **Advantages:** Eliminates exchange-rate uncertainty and currency conversion fees (boosting cross-border trade and FDI), increases price transparency across borders, and can lower inflation/borrowing costs for historically high-inflation members via a credible central bank (ECB).\n" +
        "- **Disadvantages:** Members **surrender independent monetary policy** (cannot cut domestic interest rates during a national recession) and **cannot depreciate their own exchange rate** to restore export competitiveness! When an **asymmetric shock** hits one country (e.g., Greece or Spain during 2010–2015 while Germany boomed), a single 'one-size-fits-all' interest rate leaves struggling nations reliant on painful fiscal austerity or internal wage deflation — especially without a unified fiscal union (automatic cross-border fiscal transfers).\n\n" +
        "### [HL] Trade Creation vs Trade Diversion (Customs Unions)\n\n" +
        "Preferential trading blocs are **double-edged** — they liberalise trade *inside* the bloc while discriminating against *outsiders*:\n\n" +
        "- **Trade Creation (welfare-improving):** Removing internal tariffs shifts production from a **higher-cost domestic producer** to a **lower-cost partner inside the bloc**. Resource allocation improves, consumer prices fall, and trade expands.\n" +
        "- **Trade Diversion (welfare-reducing):** Removing internal tariffs while keeping the CET against outsiders shifts imports from a **lower-cost non-member** to a **higher-cost bloc partner**. Real resource costs rise and lost tariff revenue exceeds consumer savings.\n" +
        "- **Net effect:** A customs union raises welfare only if **trade creation outweighs trade diversion** — which is more likely when pre-union tariffs were high, the bloc is large/diverse, and the CET is low.\n\n" +
        "### Role and Limitations of the World Trade Organization (WTO)\n\n" +
        "Established in 1995 (succeeding GATT, 1947), the **WTO** oversees multilateral rules-based trade across 160+ members:\n\n" +
        "- **Core roles:** (1) Administering multilateral trade agreements on goods, services (GATS), and intellectual property (TRIPS); (2) Providing a forum for **trade liberalization negotiations** based on **non-discrimination / Most-Favoured-Nation (MFN)** status; (3) **Resolving trade disputes** through formal panels; (4) Monitoring national trade policies and building trade capacity in developing nations.\n" +
        "- **Key limitations:** Consensus decision-making across 160+ countries has stalled global rounds (the **Doha Development Round** failed over agricultural subsidies); wealthy nations maintain agricultural protection while pushing services/IP liberalisation; proliferation of bilateral/regional FTAs undermines multilateral MFN principles; and **since December 2019 the WTO Appellate Body has been paralysed** due to blocked judicial appointments, weakening binding dispute enforcement.",
      diagram:
        '<svg viewBox="0 0 550 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-stage ladder of economic integration from Preferential Trade Area to Monetary Union">' +
        '<rect x="0" y="0" width="550" height="285" fill="#ffffff"/>' +
        '<text x="275" y="21" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">The Five Stages of Economic Integration (Cumulative Features)</text>' +
        '<rect x="18" y="216" width="96" height="52" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>' +
        '<text x="66" y="234" text-anchor="middle" font-size="10.5" font-weight="800" fill="#92400e">1. PTA</text>' +
        '<text x="66" y="248" text-anchor="middle" font-size="8.8" fill="#374151">Lower tariffs on</text>' +
        '<text x="66" y="260" text-anchor="middle" font-size="8.8" fill="#374151">selected goods</text>' +
        '<rect x="122" y="172" width="98" height="96" rx="8" fill="#ffedd5" stroke="#c2410c" stroke-width="1.8"/>' +
        '<text x="171" y="191" text-anchor="middle" font-size="10.5" font-weight="800" fill="#9a3412">2. FTA</text>' +
        '<text x="171" y="206" text-anchor="middle" font-size="8.8" fill="#374151">Zero internal</text>' +
        '<text x="171" y="218" text-anchor="middle" font-size="8.8" fill="#374151">tariffs; own</text>' +
        '<text x="171" y="230" text-anchor="middle" font-size="8.8" fill="#374151">external tariffs</text>' +
        '<text x="171" y="256" text-anchor="middle" font-size="8.5" font-weight="700" fill="#9a3412">USMCA · ASEAN</text>' +
        '<rect x="228" y="128" width="100" height="140" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.8"/>' +
        '<text x="278" y="148" text-anchor="middle" font-size="10.5" font-weight="800" fill="#075985">3. Customs</text>' +
        '<text x="278" y="160" text-anchor="middle" font-size="10.5" font-weight="800" fill="#075985">Union</text>' +
        '<text x="278" y="178" text-anchor="middle" font-size="8.8" fill="#374151">FTA +</text>' +
        '<text x="278" y="192" text-anchor="middle" font-size="8.8" font-weight="700" fill="#0369a1">Common</text>' +
        '<text x="278" y="204" text-anchor="middle" font-size="8.8" font-weight="700" fill="#0369a1">External Tariff</text>' +
        '<text x="278" y="216" text-anchor="middle" font-size="8.8" fill="#374151">(CET)</text>' +
        '<text x="278" y="256" text-anchor="middle" font-size="8.5" font-weight="700" fill="#075985">Mercosur · SACU</text>' +
        '<rect x="336" y="84" width="100" height="184" rx="8" fill="#dcfce7" stroke="#15803d" stroke-width="1.8"/>' +
        '<text x="386" y="104" text-anchor="middle" font-size="10.5" font-weight="800" fill="#166534">4. Common</text>' +
        '<text x="386" y="116" text-anchor="middle" font-size="10.5" font-weight="800" fill="#166534">Market</text>' +
        '<text x="386" y="135" text-anchor="middle" font-size="8.8" fill="#374151">Customs Union +</text>' +
        '<text x="386" y="149" text-anchor="middle" font-size="8.8" font-weight="700" fill="#15803d">Free movement</text>' +
        '<text x="386" y="161" text-anchor="middle" font-size="8.8" font-weight="700" fill="#15803d">of labour &amp;</text>' +
        '<text x="386" y="173" text-anchor="middle" font-size="8.8" font-weight="700" fill="#15803d">capital</text>' +
        '<text x="386" y="256" text-anchor="middle" font-size="8.5" font-weight="700" fill="#166534">EU Single Market</text>' +
        '<rect x="444" y="40" width="94" height="228" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.8"/>' +
        '<text x="491" y="60" text-anchor="middle" font-size="10.5" font-weight="800" fill="#5b21b6">5. Monetary</text>' +
        '<text x="491" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#5b21b6">Union</text>' +
        '<text x="491" y="92" text-anchor="middle" font-size="8.8" fill="#374151">Common Mkt +</text>' +
        '<text x="491" y="106" text-anchor="middle" font-size="8.8" font-weight="700" fill="#6d28d9">Single currency</text>' +
        '<text x="491" y="118" text-anchor="middle" font-size="8.8" font-weight="700" fill="#6d28d9">&amp; central bank</text>' +
        '<text x="491" y="138" text-anchor="middle" font-size="8.4" fill="#4b5563">(No national</text>' +
        '<text x="491" y="150" text-anchor="middle" font-size="8.4" fill="#4b5563">monetary/ER</text>' +
        '<text x="491" y="162" text-anchor="middle" font-size="8.4" fill="#4b5563">policy!)</text>' +
        '<text x="491" y="256" text-anchor="middle" font-size="8.5" font-weight="700" fill="#5b21b6">Eurozone (€)</text>' +
        '<text x="275" y="281" text-anchor="middle" font-size="9.5" fill="#4b5563">Deeper integration → larger market &amp; lower friction, but greater loss of national policy sovereignty</text>' +
        '</svg>',
      diagramCaption:
        "Each step up the economic integration ladder adds new collective commitments while reducing national policy sovereignty — culminating in a shared currency and central bank in a monetary union.",
      workedExamples: [
        {
          title: "[HL] Identifying & Quantifying Trade Creation vs Trade Diversion",
          problem:
            "Country A currently imposes a **$20/pair** tariff on all imported shoes. Production costs are: Domestic firms = **$65**, Country B = **$50**, Country C = **$40**. Country A forms a Customs Union with Country B (0% tariff on B, `$20` CET retained on C). Explain whether this causes **trade creation** or **trade diversion**, and calculate the net national welfare impact per pair.",
          steps: [
            "**Before the Customs Union:** Domestic price = `$65`; Country B with tariff = `$50 + $20 = $70`; Country C with tariff = `$40 + $20 = $60`. Consumers buy from **Country C** at `$60`.",
            "Note Country A's net real cost before the union: consumers pay `$60`, but the domestic government collects `$20` tariff revenue, so the net national outlay per pair is **`$40`**.",
            "**After joining the Customs Union with B:** Country B enters duty-free at **`$50`**, while Country C still costs **`$60`**. Imports switch from low-cost Country C (`$40` cost) to higher-cost Country B (`$50` cost).",
            "Because imports shifted from a more efficient non-member to a less efficient bloc member, this is **Trade Diversion**.",
            "Net national welfare change per pair = Consumer saving (`+$10`) − Lost tariff revenue (`−$20`) = **`−$10` per pair** (real resource cost rose from `$40` to `$50`).",
          ],
          answer:
            "Trade diversion occurs, causing a net national welfare loss of $10 per diverted pair of shoes.",
          yourTurn: {
            question:
              "Before joining a customs union, Country X imports 50,000 pairs of shoes from the lowest-cost world producer (cost $36/pair) under a $14 specific tariff (consumer price $50). After forming a customs union with Country Y (cost $44/pair, duty-free) while keeping the $14 CET on non-members, all 50,000 pairs switch to Country Y. Calculate the net national welfare loss from trade diversion across these 50,000 pairs (in $ thousand).",
            answer: { type: "number", value: 400 },
            solution:
              "Per pair: consumers save `$50 − $44 = $6`, while government loses `$14` in tariff revenue → net loss of `$8/pair` (equivalently, real resource cost rises from `$36` to `$44`). Across `50,000` pairs: `50,000 × $8 = $400,000` = **$400 thousand**.",
          },
        },
      ],
      keyPoints: [
        "Integration ladder: **PTA → FTA → Customs Union (adds CET) → Common Market (adds free movement of labour & capital) → Monetary Union (adds single currency & central bank)**.",
        "FTAs require complex **rules of origin** to stop outsiders routing goods through the lowest-tariff member ('trade deflection'); Customs Unions solve this via a **Common External Tariff (CET)**.",
        "A **Monetary Union** eliminates exchange-rate risk but costs members **independent monetary policy and exchange-rate adjustment** during asymmetric shocks.",
        "[HL] **Trade creation** replaces higher-cost domestic output with lower-cost bloc imports (welfare gain); **trade diversion** replaces lower-cost non-member imports with higher-cost bloc imports (welfare loss).",
        "The **WTO** promotes multilateral non-discriminatory trade (MFN) and dispute settlement, but suffers from consensus deadlock (Doha Round) and Appellate Body paralysis.",
      ],
      whyItWorks:
        "Economic integration trades **national sovereignty for market scale**. Dropping borders boosts competition, investment, and economies of scale — yet every rung deeper removes a national policy lever (first tariffs, then trade diplomacy, then migration/capital controls, finally interest rates and currency).",
      strategies: [
        "**Distinguish FTA vs Customs Union cleanly:** Always cite the **Common External Tariff (CET)** as the exact dividing line! Mention **rules of origin** for FTAs to impress IB examiners.",
        "**For Monetary Union essays, always name asymmetric shocks:** Contrasting booming Germany with recession-hit Greece/Spain (2010–2015) under a single ECB interest rate is the gold-standard IB real-world example.",
        "**WTO evaluation balance:** Never paint the WTO as either all-powerful or totally useless — weigh its massive historical tariff reductions and rules-based predictability for small open economies against consensus paralysis, agricultural asymmetries, and Appellate Body blockage.",
      ],
      thinkDeeper:
        "Why has the UK struggled with trade friction after leaving both the EU Single Market and Customs Union (Brexit, 2020) even though it signed a zero-tariff Free Trade Agreement (the Trade and Cooperation Agreement)? Because an FTA *still* requires customs declarations, rules-of-origin proof, and regulatory border checks that a Customs Union and Common Market eliminate!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Absolute advantage [HL]",
        back: "When a country can produce a greater quantity of a good using the same amount of resources (or the same output using fewer resources) than another country.",
        level: "HL",
      },
      {
        front: "Comparative advantage [HL]",
        back: "When a country can produce a good at a lower opportunity cost than another country. Specialising according to comparative advantage raises total world output.",
        level: "HL",
      },
      {
        front: "Mutually beneficial Terms of Trade (ToT) condition [HL]",
        back: "The international exchange ratio must lie strictly between the two countries' domestic opportunity costs (`OC_1 < ToT < OC_2`), allowing both to consume outside their PPCs.",
        level: "HL",
      },
      {
        front: "Specific tariff",
        back: "A fixed tax per unit of an imported good. It shifts `S_world` up by `t`, raising domestic price to `P_w + t`, expanding domestic supply, cutting consumption, raising government revenue, and creating two DWL triangles.",
      },
      {
        front: "Import quota",
        back: "A legal physical limit on the quantity of a good imported in a period. It raises domestic price to `P_q` and generates quota rents `(Q_4 − Q_3)(P_q − P_w)` rather than automatic tariff revenue.",
      },
      {
        front: "Domestic production subsidy",
        back: "A per-unit payment by government to domestic producers to lower costs (`S_dom` shifts down/right). Consumers still pay `P_w`, so there is NO consumption DWL — only production DWL and government budget expenditure `Q_3 × s`.",
      },
      {
        front: "Administrative barriers (Non-Tariff Barriers)",
        back: "Regulatory obstacles such as complex customs procedures, strict health/safety/environmental standards, or packaging rules that raise import costs and restrict trade without explicit tariffs.",
      },
      {
        front: "Production inefficiency DWL [HL]",
        back: "Welfare loss `{{1/2}}(Q_3 − Q_1) × ΔP` arising because higher-cost domestic producers (`MC > P_w`) replace more efficient foreign suppliers.",
        level: "HL",
      },
      {
        front: "Consumption inefficiency DWL [HL]",
        back: "Welfare loss `{{1/2}}(Q_2 − Q_4) × ΔP` arising because higher domestic prices squeeze out consumers who valued those units above the world price `P_w`. Zero under a domestic production subsidy.",
        level: "HL",
      },
      {
        front: "Infant industry argument",
        back: "Temporary trade protection for a newly emerging domestic industry so it can achieve economies of scale and learning-by-doing until its LRAC falls below the world price `P_w`.",
      },
      {
        front: "Dumping & anti-dumping duties",
        back: "Exporting a good below its cost of production (or below home-market price), often to undercut foreign rivals. WTO rules permit targeted anti-dumping tariffs when material injury is proven.",
      },
      {
        front: "Free Trade Area (FTA) vs Customs Union",
        back: "Both abolish internal tariffs between members, but FTA members keep *independent* external tariffs (requiring rules of origin), whereas a Customs Union adopts a **Common External Tariff (CET)**.",
      },
      {
        front: "Common Market",
        back: "A Customs Union plus **free movement of factors of production (labour and capital)** and harmonised product regulations across member states (e.g., EU Single Market).",
      },
      {
        front: "Monetary Union",
        back: "A Common Market plus a **single currency** and **common central bank** (e.g., the Eurozone & ECB). Members gain zero FX risk but lose independent monetary and exchange-rate policy.",
      },
      {
        front: "Trade creation [HL]",
        back: "Welfare gain within a trading bloc when removing internal tariffs replaces **higher-cost domestic production** with **lower-cost imports from a bloc partner**.",
        level: "HL",
      },
      {
        front: "Trade diversion [HL]",
        back: "Welfare loss within a trading bloc when preferential tariff removal shifts imports from a **lower-cost non-member** to a **higher-cost bloc partner** sheltered behind the CET.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Free trade lowers consumer prices, expands variety, enables economies of scale, improves global resource allocation, and drives technology transfer.",
      "[HL] Comparative advantage depends on **opportunity cost**, NOT absolute productivity — a country with absolute advantage in *both* goods still gains from specialising in the good where its *relative* edge is greatest.",
      "Under a **tariff**, consumer surplus loss = `Domestic PS Gain + Government Revenue + Production DWL + Consumption DWL`.",
      "Under a **production subsidy**, consumers continue paying the world price `P_w`, eliminating consumption DWL — but taxpayers pay `Q_3 × s`.",
      "Under an **import quota**, the middle rectangle `(Q_4 − Q_3)(P_q − P_w)` becomes **quota rent**; if handed free to foreign exporters, domestic welfare loss is larger than under an equivalent tariff.",
      "Strongest nuanced cases for protection: infant industries (dynamic comparative advantage), national security, health/safety/environmental standards, anti-dumping, and developing-country tariff revenue.",
      "Protectionism imposes severe hidden costs: misallocation of resources, regressive consumer price rises, higher input costs for domestic exporters, retaliation/trade wars, and rent-seeking.",
      "Integration stages are **cumulative**: `PTA → FTA → Customs Union (+CET) → Common Market (+free labour/capital) → Monetary Union (+single currency & central bank)`.",
      "[HL] A Customs Union improves national welfare only if **trade creation outweighs trade diversion**.",
      "The **WTO** promotes multilateral MFN trade liberalisation and dispute settlement, but faces Doha Round stalemate and Appellate Body paralysis since 2019.",
    ],
    misconceptions: [
      {
        wrong: "If Country A can produce more of both goods than Country B, Country A has nothing to gain from trading with Country B.",
        right: "Trade gains come from **comparative** (opportunity-cost) advantage, not absolute advantage. Whenever opportunity costs differ, specialisation and trade let *both* countries consume outside their PPCs.",
        level: "HL",
      },
      {
        wrong: "A domestic production subsidy lowers the price paid by domestic consumers below the world price `P_w`.",
        right: "In a small importing economy, the domestic price stays anchored at **`P_w`**! Consumers pay the exact same world price (zero consumption DWL); producers receive `P_w + s`.",
      },
      {
        wrong: "Import quotas generate government tax revenue just like tariffs.",
        right: "Quotas generate **quota rents** `(Q_4 − Q_3)(P_q − P_w)` that go to whoever holds the import licences — often foreign exporters or domestic importers — yielding zero government revenue unless licences are auctioned.",
      },
      {
        wrong: "Tariffs only hurt foreign exporters while benefiting the home country overall.",
        right: "Domestic consumers lose **more** consumer surplus than domestic producers and the government combined gain — creating a net **deadweight welfare loss** for the importing country itself.",
      },
      {
        wrong: "Every Free Trade Area has a Common External Tariff (CET).",
        right: "Only a **Customs Union** (and deeper stages) has a CET. FTA members (like USMCA or ASEAN) retain separate external tariffs against non-members and rely on **rules of origin**.",
      },
      {
        wrong: "Joining a Customs Union always increases economic efficiency because internal tariffs fall to zero.",
        right: "If zero internal tariffs combined with a high CET divert imports away from a cheaper world supplier to a costlier bloc member (**trade diversion**), net welfare can actually *fall*.",
        level: "HL",
      },
      {
        wrong: "Countries in a Monetary Union can still lower their own national interest rates during a domestic recession.",
        right: "Monetary union members surrender independent monetary and exchange-rate policy to one shared central bank (e.g., the ECB), creating severe adjustment stress during asymmetric shocks.",
      },
    ],
    examMistakes: [
      "Computing opportunity cost backwards (`This / Other` instead of `Other / This`) on an output table, inverting which country has comparative advantage.",
      "Forgetting the `{{1/2}}` factor when calculating tariff/subsidy deadweight welfare-loss triangles in HL Paper 3.",
      "Calculating domestic production subsidy government expenditure using initial output `Q_1 × s` instead of post-subsidy domestic output `Q_3 × s`.",
      "Drawing a domestic production subsidy shifting `S_world` instead of shifting `S_domestic` downwards/rightwards by the per-unit subsidy.",
      "Confusing a **tariff** diagram with a **quota** diagram by labelling the middle rectangle 'government revenue' under a quota without specifying auctioned licences.",
      "Claiming a country can have comparative advantage in *both* goods in a two-good, two-country model (mathematically impossible because opportunity costs are reciprocals!).",
      "Forgetting to anchor Paper 1 Part (b) 15-mark essays in specific **real-world examples** (e.g., US 2018 steel tariffs, EU CAP, ASEAN/USMCA, Eurozone crisis) — capping marks at Band 3/4!",
      "Listing the 5 stages of economic integration without distinguishing the exact added feature at each stage (especially CET for Customs Union and factor mobility for Common Market).",
    ],
    mnemonics: [
      {
        topic: "Opportunity Cost from an Output Table [HL]",
        device: "O-O-T: Other Over This",
        explanation:
          "To find the opportunity cost of 1 unit of Good X from maximum outputs, always divide the **Other** good's max output by **This** good's max output (`Max Y / Max X`).",
        level: "HL",
      },
      {
        topic: "Five Stages of Economic Integration",
        device: "P-F-C-C-M: Prefer Free Customs, Common Money",
        explanation:
          "**P**TA (partial cuts) → **F**TA (zero internal) → **C**ustoms Union (+CET) → **C**ommon Market (+labour & capital) → **M**onetary Union (+single currency & central bank).",
      },
      {
        topic: "Tariff Welfare Accounting [HL]",
        device: "CS Loss = P + G + 2D",
        explanation:
          "Consumer Surplus loss breaks cleanly into **P**roducer surplus gain (trapezoid) + **G**overnment tariff revenue (rectangle) + **2 D**WL triangles (production + consumption).",
        level: "HL",
      },
      {
        topic: "Arguments for Protection",
        device: "I-N-D-E-R-S",
        explanation:
          "**I**nfant industry, **N**ational security, **D**umping prevention, **E**nvironment/health standards, **R**evenue (developing nations), **S**tructural employment/diversification.",
      },
    ],
    realWorld: [
      {
        title: "US Section 232 Steel & Aluminium Tariffs (2018–present) & Retaliation",
        detail:
          "The United States imposed 25% tariffs on steel and 10% on aluminium citing national security. While US steelmakers expanded output and employment modestly, studies found downstream US manufacturers (autos, machinery, construction) faced higher input costs and retaliatory tariffs from the EU, China, Canada, and Mexico — raising consumer prices and costing an estimated $650,000+ per steel job saved.",
        emoji: "🏗️",
      },
      {
        title: "Singapore, ASEAN (AFTA) & RCEP: Small Open Economy Strategy",
        detail:
          "With virtually zero natural resources and a tiny domestic market, Singapore maintains 0% tariffs on nearly all imports and participates in 27+ FTAs including the ASEAN Free Trade Area and RCEP (the world's largest FTA by GDP). Free trade allows Singaporean firms to achieve global economies of scale and act as an entrepôt logistics hub.",
        emoji: "🇸🇬",
      },
      {
        title: "South Korea's Infant Industry Strategy (1960s–1990s)",
        detail:
          "South Korea temporarily protected and subsidised targeted industries — steel (POSCO), automobiles (Hyundai), and electronics (Samsung) — while strictly tying state support to *export performance targets*. Once firms slid down their LRAC curves and achieved global competitiveness, protection was phased out — a textbook example of building dynamic comparative advantage.",
        emoji: "🚀",
      },
      {
        title: "Eurozone Monetary Union & Asymmetric Shocks (2010–2015)",
        detail:
          "Sharing the euro eliminated currency risk across Europe, boosting trade and capital flows. Yet during the Eurozone sovereign debt crisis, Greece and Spain suffered deep deflationary gaps (25%+ unemployment) while Germany boomed. Unable to cut domestic interest rates or depreciate a national currency, crisis nations endured years of painful fiscal austerity and internal devaluation.",
        emoji: "💶",
      },
      {
        title: "EU Common Agricultural Policy (CAP) Subsidies & Developing Exporters",
        detail:
          "Large EU domestic agricultural subsidies keep European farmers competitive against lower-cost imports while keeping consumer food prices lower than under high tariffs alone. However, subsidies create production inefficiency DWL, strain the EU budget, and depress world agricultural prices — harming unsubsidised farmers in Sub-Saharan Africa and Latin America.",
        emoji: "🌾",
      },
      {
        title: "WTO Appellate Body Paralysis (2019–present)",
        detail:
          "Since December 2019, the WTO's Appellate Body has lacked a quorum to hear trade-dispute appeals after the US blocked new judge appointments over concerns of judicial overreach. Countries can now 'appeal into the void', weakening binding multilateral enforcement and accelerating the shift toward bilateral/regional trade blocs and unilateral tariffs.",
        emoji: "⚖️",
      },
    ],
    videos: [
      {
        title: "Comparative Advantage & Terms of Trade — IB Economics HL",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+comparative+advantage+IB+economics",
      },
      {
        title: "Tariffs, Quotas & Production Subsidies Diagrams & Welfare Loss",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+tariffs+quotas+subsidies+IB+economics",
      },
      {
        title: "Economic Integration, Trading Blocs & Trade Creation vs Diversion",
        channel: "Brad Cartwright IB Economics",
        url: "https://www.youtube.com/results?search_query=Brad+Cartwright+economic+integration+trade+creation+diversion+IB",
      },
      {
        title: "Arguments For & Against Trade Protectionism — Paper 1 Evaluation",
        channel: "Jacob Clifford / ACDC Econ",
        url: "https://www.youtube.com/results?search_query=trade+protectionism+tariffs+quotas+economics+explained",
      },
    ],
    formulas: [
      {
        name: "Opportunity Cost (Output Table)",
        formula: "{{OC_X = (Max output of Y) / (Max output of X)}}",
        note: "Measured in units of Y sacrificed per 1 unit of X ('Other Over This').",
        level: "HL",
      },
      {
        name: "Mutually Beneficial Terms of Trade",
        formula: "{{OC_1 < P_X < OC_2}}",
        note: "Exchange ratio for Good X must lie strictly between the exporter's OC (`OC_1`) and importer's OC (`OC_2`).",
        level: "HL",
      },
      {
        name: "Free-Trade Import Volume",
        formula: "{{M_0 = Q_2 - Q_1}}",
        note: "Domestic quantity demanded (`Q_2`) minus domestic quantity supplied (`Q_1`) at world price `P_w`.",
      },
      {
        name: "Government Tariff Revenue",
        formula: "{{R_tariff = (Q_4 - Q_3) * t}}",
        note: "Post-tariff import volume multiplied by the specific per-unit tariff `t`.",
        level: "HL",
      },
      {
        name: "Production Inefficiency DWL",
        formula: "{{DWL_prod = (1/2) * (Q_3 - Q_1) * Delta P}}",
        note: "Applies to tariffs (`ΔP = t`), quotas (`ΔP = P_q − P_w`), and production subsidies (`ΔP = s`).",
        level: "HL",
      },
      {
        name: "Consumption Inefficiency DWL",
        formula: "{{DWL_cons = (1/2) * (Q_2 - Q_4) * Delta P}}",
        note: "Applies to tariffs and quotas; equals **0** under a domestic production subsidy because price stays at `P_w`.",
        level: "HL",
      },
      {
        name: "Domestic Producer Surplus Gain",
        formula: "{{Delta PS = (1/2) * (Q_1 + Q_3) * Delta P}}",
        note: "Area of the trapezoid between `P_w`, `P_w + ΔP`, the vertical axis, and `S_dom`.",
        level: "HL",
      },
      {
        name: "Consumer Surplus Loss (Tariff / Quota)",
        formula: "{{Delta CS = (1/2) * (Q_2 + Q_4) * Delta P}}",
        note: "Always equals `PS Gain + Revenue/Rent + Production DWL + Consumption DWL`.",
        level: "HL",
      },
      {
        name: "Domestic Production Subsidy Expenditure",
        formula: "{{G_sub = Q_3 * s}}",
        note: "Paid on *every* domestically produced unit (`Q_3`), not merely the extra output (`Q_3 − Q_1`).",
        level: "HL",
      },
      {
        name: "Import Quota Rent (Revenue)",
        formula: "{{Rent_quota = (Q_4 - Q_3) * (P_q - P_w)}}",
        note: "Captured by domestic or foreign licence holders unless the government auctions licences.",
        level: "HL",
      },
    ],
  },
};
