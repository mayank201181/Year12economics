import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook:
    "Pick up your smartphone: the screen glass is engineered in the US and Japan, memory chips are fabricated in South Korea and Taiwan, rare earths are refined in China, precision lenses come from Germany, and containers transit the Port of Singapore — all governed by comparative advantage, WTO tariff schedules, and regional FTAs. One single trade war or border tariff sends shockwaves straight through every price tag on Earth.",
  didYouKnow: [
    "In 1964, the United States imposed a retaliatory 25% tariff on imported light trucks — dubbed the **'Chicken Tax'** after Europe taxed US frozen chicken exports. Over sixty years later, the 25% US pickup-truck tariff is *still* in force, illustrating why temporary protectionism is notoriously difficult to repeal.",
    "Singapore applies a **0% tariff** on roughly 99.9% of imported goods (taxing only excise items like alcohol, tobacco, and vehicles) and has built a network of **27+ Free Trade Agreements**, including ASEAN (AFTA) and RCEP, turning a city-state with zero natural resources into one of the world's highest-income economies.",
    "During the **1930 Smoot–Hawley Tariff Act**, the United States raised average tariffs on over 20,000 imported goods to nearly 60%. Over two dozen trading partners immediately retaliated, and global merchandise trade collapsed by roughly two-thirds between 1929 and 1934 — teaching post-war leaders why the GATT (1947) and WTO (1995) were created.",
    "In David Ricardo's famous 1817 example, **Portugal** could produce *both* wine and cloth using fewer labour hours than **England** — yet Portugal still grew richer by specialising in wine and importing English cloth because its *relative* edge in wine was larger.",
    "After leaving the EU Single Market and Customs Union in 2020 (Brexit), the UK signed a zero-tariff Free Trade Agreement with the EU — yet small exporters still faced billions in new **non-tariff barriers**: customs declarations, veterinary checks, and **rules-of-origin** paperwork proving goods were truly British-made.",
    "The **EU Banana Wars (1993–2009)** became one of the longest disputes in WTO history, pitting EU tariff preferences for former Caribbean colonies against Latin American banana exporters — demonstrating the fierce tension between regional trade preferences and WTO Most-Favoured-Nation rules.",
  ],
  activities: [
    {
      title: "The Two-Island Specialisation & Terms-of-Trade Game",
      emoji: "🏝️",
      materials: [
        "2 sheets of paper & 2 pens",
        "A 60-second phone timer",
        "One partner (or play both islands yourself in two timed rounds)",
      ],
      steps: [
        "Island A and Island B each produce two goods in 60 seconds: **Squares** (drawn neatly) and **Triangles** (drawn neatly).",
        "Give Island A a deliberate handicap on one good (e.g., Island A uses their non-dominant hand for Triangles, or must write 'TRI' inside each triangle) while being faster at BOTH shapes overall if possible.",
        "Round 1 (Autarky): Spend 30 seconds on Squares and 30 seconds on Triangles. Record total combined output of both islands.",
        "Measure each island's 60-second max outputs (`Max Squares`, `Max Triangles`) and compute opportunity costs using **Other Over This**.",
        "Round 2 (Full Specialisation): Each island spends all 60 seconds producing ONLY the shape where it has the **lower opportunity cost**. Agree on a trade ratio strictly between the two opportunity costs and swap!",
        "Compare each island's post-trade bundle against Round 1 — both islands hold *more* of both shapes despite spending the exact same 60 seconds!",
      ],
      maths:
        "If Island A's OC of 1 Triangle is {{OC_A}} Squares and Island B's is {{OC_B}} Squares (with {{OC_A < OC_B}}), any trade price {{P}} satisfying {{OC_A < P < OC_B}} guarantees strict gains for both players.",
    },
    {
      title: "Supermarket Protectionism & Bloc Detective",
      emoji: "🛒",
      materials: [
        "5 everyday items from your kitchen or backpack (coffee, rice, t-shirt, charger, chocolate)",
        "A notebook or spreadsheet",
      ],
      steps: [
        "Inspect the 'Made in ___' or 'Product of ___' label on all 5 items and list each origin country.",
        "Check whether each origin country shares an active Free Trade Area or Customs Union with your country (e.g., ASEAN, RCEP, EU Single Market, USMCA).",
        "Pick one agricultural good and one manufactured input (e.g., steel or microchips) and write a 3-line stakeholder audit: who wins, who loses, and what happens to downstream prices if a 25% tariff is slapped on that item tomorrow?",
        "Identify whether a domestic production subsidy would keep the retail shelf price unchanged — and estimate who would pay the bill instead!",
      ],
      maths:
        "Under a tariff {{t}}, consumer loss = {{(1/2)(Q_2 + Q_4) * t}} while net DWL = {{(1/2)(Q_3 - Q_1) * t + (1/2)(Q_2 - Q_4) * t}}.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Domestic Production Subsidy vs Free Trade (Zero Consumption DWL!)",
      svg:
        '<svg viewBox="0 0 540 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Domestic production subsidy diagram showing S_dom shifting rightwards, price remaining at P_w, government subsidy expenditure, and production deadweight loss only">' +
        '<rect x="0" y="0" width="540" height="305" fill="#ffffff"/>' +
        '<text x="270" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">Domestic Production Subsidy: Price Stays at P_w (No Consumption DWL)</text>' +
        '<polygon points="75,155 215,155 145,215 75,215" fill="#dcfce7" opacity="0.9"/>' +
        '<polygon points="145,215 215,155 215,215" fill="#fed7aa" opacity="0.95"/>' +
        '<rect x="75" y="155" width="140" height="60" fill="none" stroke="#0369a1" stroke-width="2" stroke-dasharray="5 3"/>' +
        '<line x1="75" y1="260" x2="495" y2="260" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="75" y1="260" x2="75" y2="42" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="92" y1="260" x2="315" y2="69" stroke="#15803d" stroke-width="2.6"/>' +
        '<line x1="162" y1="260" x2="385" y2="69" stroke="#0d9488" stroke-width="2.6" stroke-dasharray="6 3"/>' +
        '<line x1="150" y1="50" x2="465" y2="260" stroke="#b45309" stroke-width="2.6"/>' +
        '<line x1="75" y1="215" x2="475" y2="215" stroke="#0369a1" stroke-width="2.3"/>' +
        '<line x1="75" y1="155" x2="215" y2="155" stroke="#0d9488" stroke-width="1.6" stroke-dasharray="4 3"/>' +
        '<line x1="145" y1="215" x2="145" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="215" y1="155" x2="215" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="398" y1="215" x2="398" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<text x="320" y="72" font-size="11" font-weight="800" fill="#15803d">S_dom</text>' +
        '<text x="390" y="72" font-size="11" font-weight="800" fill="#0d9488">S_dom + sub</text>' +
        '<text x="456" y="248" font-size="11" font-weight="800" fill="#b45309">D_dom</text>' +
        '<text x="478" y="219" font-size="10.5" font-weight="700" fill="#0369a1">S_world</text>' +
        '<text x="68" y="219" text-anchor="end" font-size="11" font-weight="700" fill="#0369a1">P_w</text>' +
        '<text x="68" y="159" text-anchor="end" font-size="10.5" font-weight="700" fill="#0d9488">P_w + s</text>' +
        '<text x="145" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q1</text>' +
        '<text x="215" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q3</text>' +
        '<text x="398" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q2</text>' +
        '<text x="128" y="186" text-anchor="middle" font-size="9.5" font-weight="800" fill="#166534">PS Gain</text>' +
        '<text x="194" y="206" text-anchor="middle" font-size="9" font-weight="800" fill="#9a3412">Prod DWL</text>' +
        '<text x="270" y="295" text-anchor="middle" font-size="9.5" fill="#4b5563">Dashed blue box = Govt expenditure (Q3 × s) = PS Gain + Prod DWL · Consumption stays at Q2 (Cons DWL = 0!)</text>' +
        '</svg>',
      caption:
        "Notice the clean geometric identity: total government subsidy spending (dashed rectangle Q3 × s) splits exactly into Domestic Producer Surplus Gain (green trapezoid) plus Production Inefficiency DWL (orange triangle). Consumers keep paying P_w!",
    },
    {
      title: "Import Quota Diagram: Where Do Quota Rents Go?",
      svg:
        '<svg viewBox="0 0 540 305" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Import quota diagram showing S_dom plus quota shifting supply rightwards, domestic price rising to P_q, and quota rents instead of government tax revenue">' +
        '<rect x="0" y="0" width="540" height="305" fill="#ffffff"/>' +
        '<text x="270" y="20" text-anchor="middle" font-size="13" font-weight="800" fill="#1f2937">Import Quota: Quota Rents Replace Automatic Government Tax Revenue</text>' +
        '<polygon points="75,165 180,165 130,215 75,215" fill="#dcfce7" opacity="0.9"/>' +
        '<polygon points="130,215 180,165 180,215" fill="#fed7aa" opacity="0.95"/>' +
        '<rect x="180" y="165" width="150" height="50" fill="#ede9fe" opacity="0.95"/>' +
        '<polygon points="330,165 330,215 385,215" fill="#fecaca" opacity="0.95"/>' +
        '<line x1="75" y1="260" x2="495" y2="260" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="75" y1="260" x2="75" y2="42" stroke="#1f2937" stroke-width="2"/>' +
        '<line x1="85" y1="260" x2="295" y2="50" stroke="#15803d" stroke-width="2.6"/>' +
        '<line x1="235" y1="260" x2="445" y2="50" stroke="#7c3aed" stroke-width="2.6"/>' +
        '<line x1="150" y1="45" x2="435" y2="260" stroke="#b45309" stroke-width="2.6"/>' +
        '<line x1="75" y1="215" x2="475" y2="215" stroke="#0369a1" stroke-width="2.2"/>' +
        '<line x1="75" y1="165" x2="330" y2="165" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="5 3"/>' +
        '<line x1="130" y1="215" x2="130" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="180" y1="165" x2="180" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="330" y1="165" x2="330" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<line x1="385" y1="215" x2="385" y2="260" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>' +
        '<text x="300" y="56" font-size="11" font-weight="800" fill="#15803d">S_dom</text>' +
        '<text x="450" y="56" font-size="11" font-weight="800" fill="#7c3aed">S_dom + quota</text>' +
        '<text x="425" y="247" font-size="11" font-weight="800" fill="#b45309">D_dom</text>' +
        '<text x="478" y="219" font-size="10.5" font-weight="700" fill="#0369a1">S_world</text>' +
        '<text x="68" y="219" text-anchor="end" font-size="11" font-weight="700" fill="#0369a1">P_w</text>' +
        '<text x="68" y="169" text-anchor="end" font-size="11" font-weight="700" fill="#7c3aed">P_q</text>' +
        '<text x="130" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q1</text>' +
        '<text x="180" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q3</text>' +
        '<text x="330" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q4</text>' +
        '<text x="385" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#1f2937">Q2</text>' +
        '<text x="255" y="194" text-anchor="middle" font-size="10.5" font-weight="800" fill="#5b21b6">Quota Rent</text>' +
        '<text x="270" y="295" text-anchor="middle" font-size="9.5" fill="#4b5563">Horizontal shift = fixed Quota (Q4 − Q3). Purple Quota Rent goes to licence holders — if foreign, domestic welfare drops further!</text>' +
        '</svg>',
      caption:
        "Shifting S_dom rightwards by the fixed quota volume intersects D_dom at P_q. Unless the government auctions import licences, the purple Quota Rent rectangle is captured by foreign exporters or favoured domestic importers.",
    },
  ],
  history: {
    title: "David Ricardo, Britain's Corn Laws (1846), and the Birth of Modern Trade Policy",
    story:
      "In 1815, Britain's wealthy landowners pushed Parliament to pass the **Corn Laws** — steep tariffs blocking cheap foreign grain to protect domestic landlords' rents. Two years later, stockbroker-turned-economist **David Ricardo** published *On the Principles of Political Economy and Taxation* (1817), unveiling the mathematical proof of **comparative advantage** and showing that grain tariffs raised bread prices for factory workers, drove up industrial wages, and squeezed manufacturing profits. After decades of fierce public campaigning — culminating in the Irish Potato Famine — Prime Minister Robert Peel repealed the Corn Laws in **1846**, launching a century-long debate between free-trade openness and strategic protectionism that still defines WTO summits today.",
  },
};
