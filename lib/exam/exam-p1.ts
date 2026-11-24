import type { ExamPaper, MarkBand } from "../types.ts";

const P1_PART_A_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question with superficial definitions, missing or inaccurate diagram(s), and minimal economic explanation.",
    indicators: ["Identifies basic concept only", "Diagram absent or axes/curves mislabelled"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic knowledge and terminology are applied; diagram(s) are included with minor omissions or limited integration into prose.",
    indicators: ["Key definitions stated accurately", "Diagram drawn but shift or welfare/macro link only partially explained"],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Clear, accurate economic analysis using appropriate terminology and well-labelled diagram(s) integrated into a coherent causal explanation.",
    indicators: ["Correct axes, curves, equilibria and shift arrows", "Step-by-step transmission mechanism clearly explained"],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Thorough, rigorous economic explanation seamlessly linking precise theory, complete terminology, and fully labelled, accurately referenced diagram(s).",
    indicators: ["Zero diagram errors (axes, curves, dotted lines, shaded areas)", "Complete causal chain addressing every demand of the question"],
  },
];

const P1_PART_B_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Superficial response showing little understanding of the question, no valid diagram, no real-world examples, and no evaluation.",
    indicators: ["Purely descriptive or off-topic", "No economic theory applied"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Relevant economic theory and terminology appear in places, with limited analysis, weak or generic examples, and minimal evaluation.",
    indicators: ["One-sided assertions without transmission mechanisms", "Examples missing or purely hypothetical"],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Relevant theory and accurate diagram(s) are applied with coherent analysis; some evaluation is attempted, though real-world examples may be brief or underdeveloped.",
    indicators: ["Solid AO2 analysis + diagram", "Begins weighing pros/cons; capped here if real-world examples are absent or vague"],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Strong economic analysis and accurate diagrams paired with effective, balanced evaluation across stakeholders/time horizons and specific real-world examples.",
    indicators: ["Specific real-world examples woven into analysis", "Clear evaluation of trade-offs, elasticities, and limitations"],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Sustained, insightful economic analysis and synthesis; rigorous, nuanced evaluation (short-run vs long-run, stakeholders, priorities, assumptions) anchored in well-chosen real-world examples and a reasoned judgement.",
    indicators: ["Accurate diagrams referenced analytically", "Multiple specific real-world examples integrated seamlessly", "Explicit, reasoned final judgement weighing competing trade-offs"],
  },
];

const SVG_NEG_EXT_CONS_TAX = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250" role="img" aria-label="Negative externality of consumption diagram with Pigouvian indirect tax shifting S equals MPC upwards to S plus tax, reducing quantity from Qm to Q star and eliminating welfare loss">
  <rect x="0" y="0" width="380" height="250" fill="#fffdf8" rx="8" />
  <line x1="54" y1="20" x2="54" y2="206" stroke="#1e293b" stroke-width="2" />
  <line x1="54" y1="206" x2="352" y2="206" stroke="#1e293b" stroke-width="2" />
  <text x="12" y="34" font-size="11" font-weight="600" fill="#1e293b">Price,</text>
  <text x="10" y="47" font-size="11" font-weight="600" fill="#1e293b">Costs &amp;</text>
  <text x="8" y="60" font-size="11" font-weight="600" fill="#1e293b">Benefits</text>
  <text x="292" y="234" font-size="11" font-weight="600" fill="#1e293b">Quantity</text>
  <polygon points="164,142 216,108 216,184" fill="#f59e0b" fill-opacity="0.30" stroke="#b45309" stroke-width="1.2" />
  <line x1="82" y1="196" x2="292" y2="58" stroke="#2563eb" stroke-width="2.3" />
  <text x="288" y="54" font-size="11" font-weight="700" fill="#2563eb">S = MPC = MSC</text>
  <line x1="82" y1="128" x2="260" y2="22" stroke="#7c3aed" stroke-width="2.2" stroke-dasharray="6 3" />
  <text x="184" y="24" font-size="11" font-weight="700" fill="#7c3aed">S + Tax</text>
  <line x1="84" y1="28" x2="310" y2="176" stroke="#0f766e" stroke-width="2.3" />
  <text x="286" y="189" font-size="11" font-weight="700" fill="#0f766e">D = MPB</text>
  <line x1="84" y1="90" x2="262" y2="206" stroke="#dc2626" stroke-width="2.3" />
  <text x="240" y="201" font-size="11" font-weight="700" fill="#dc2626">MSB</text>
  <line x1="164" y1="80" x2="164" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="54" y1="80" x2="164" y2="80" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="216" y1="108" x2="216" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="54" y1="108" x2="216" y2="108" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <circle cx="164" cy="80" r="3.5" fill="#7c3aed" />
  <circle cx="164" cy="142" r="3.5" fill="#dc2626" />
  <circle cx="216" cy="108" r="3.5" fill="#2563eb" />
  <text x="24" y="84" font-size="11" font-weight="700" fill="#7c3aed">Pt</text>
  <text x="22" y="112" font-size="11" font-weight="600" fill="#1e293b">Pm</text>
  <text x="157" y="220" font-size="11" font-weight="700" fill="#dc2626">Q*</text>
  <text x="208" y="220" font-size="11" font-weight="700" fill="#2563eb">Qm</text>
  <text x="172" y="156" font-size="10" font-weight="700" fill="#92400e">DWL</text>
</svg>`;

const SVG_ADAS_INFLATION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 245" role="img" aria-label="Dual AD/AS diagram comparing demand-pull inflation where AD shifts right raising real GDP and price level against cost-push inflation where SRAS shifts left raising price level and lowering real GDP">
  <rect x="0" y="0" width="380" height="245" fill="#fffdf8" rx="8" />
  <line x1="34" y1="28" x2="34" y2="196" stroke="#1e293b" stroke-width="1.8" />
  <line x1="34" y1="196" x2="176" y2="196" stroke="#1e293b" stroke-width="1.8" />
  <text x="48" y="18" font-size="11" font-weight="700" fill="#0f766e">Demand-Pull</text>
  <text x="8" y="34" font-size="10" font-weight="600" fill="#1e293b">PL</text>
  <text x="122" y="216" font-size="10" font-weight="600" fill="#1e293b">Real GDP</text>
  <line x1="50" y1="178" x2="156" y2="54" stroke="#2563eb" stroke-width="2.2" />
  <text x="144" y="48" font-size="10" font-weight="700" fill="#2563eb">SRAS</text>
  <line x1="50" y1="68" x2="140" y2="174" stroke="#475569" stroke-width="2" />
  <text x="132" y="186" font-size="10" font-weight="600" fill="#475569">AD1</text>
  <line x1="76" y1="54" x2="168" y2="162" stroke="#0f766e" stroke-width="2.3" />
  <text x="156" y="154" font-size="10" font-weight="700" fill="#0f766e">AD2</text>
  <circle cx="96" cy="123" r="3" fill="#475569" />
  <circle cx="114" cy="102" r="3" fill="#0f766e" />
  <line x1="34" y1="123" x2="96" y2="123" stroke="#94a3b8" stroke-dasharray="3 2" />
  <line x1="34" y1="102" x2="114" y2="102" stroke="#0f766e" stroke-dasharray="3 2" />
  <line x1="96" y1="123" x2="96" y2="196" stroke="#94a3b8" stroke-dasharray="3 2" />
  <line x1="114" y1="102" x2="114" y2="196" stroke="#0f766e" stroke-dasharray="3 2" />
  <text x="12" y="126" font-size="9" fill="#475569">PL1</text>
  <text x="12" y="105" font-size="9" font-weight="700" fill="#0f766e">PL2</text>
  <text x="89" y="208" font-size="9" fill="#475569">Y1</text>
  <text x="110" y="208" font-size="9" font-weight="700" fill="#0f766e">Y2</text>

  <line x1="214" y1="28" x2="214" y2="196" stroke="#1e293b" stroke-width="1.8" />
  <line x1="214" y1="196" x2="362" y2="196" stroke="#1e293b" stroke-width="1.8" />
  <text x="234" y="18" font-size="11" font-weight="700" fill="#dc2626">Cost-Push</text>
  <text x="188" y="34" font-size="10" font-weight="600" fill="#1e293b">PL</text>
  <text x="306" y="216" font-size="10" font-weight="600" fill="#1e293b">Real GDP</text>
  <line x1="234" y1="60" x2="342" y2="178" stroke="#0f766e" stroke-width="2.2" />
  <text x="336" y="188" font-size="10" font-weight="700" fill="#0f766e">AD</text>
  <line x1="238" y1="180" x2="344" y2="62" stroke="#475569" stroke-width="2" />
  <text x="334" y="56" font-size="10" font-weight="600" fill="#475569">SRAS1</text>
  <line x1="224" y1="146" x2="318" y2="42" stroke="#dc2626" stroke-width="2.3" />
  <text x="292" y="38" font-size="10" font-weight="700" fill="#dc2626">SRAS2</text>
  <circle cx="290" cy="121" r="3" fill="#475569" />
  <circle cx="272" cy="100" r="3" fill="#dc2626" />
  <line x1="214" y1="121" x2="290" y2="121" stroke="#94a3b8" stroke-dasharray="3 2" />
  <line x1="214" y1="100" x2="272" y2="100" stroke="#dc2626" stroke-dasharray="3 2" />
  <line x1="290" y1="121" x2="290" y2="196" stroke="#94a3b8" stroke-dasharray="3 2" />
  <line x1="272" y1="100" x2="272" y2="196" stroke="#dc2626" stroke-dasharray="3 2" />
  <text x="192" y="124" font-size="9" fill="#475569">PL1</text>
  <text x="192" y="103" font-size="9" font-weight="700" fill="#dc2626">PL2</text>
  <text x="284" y="208" font-size="9" fill="#475569">Y1</text>
  <text x="264" y="208" font-size="9" font-weight="700" fill="#dc2626">Y2</text>
</svg>`;

const SVG_TARIFF_P1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 248" role="img" aria-label="Import tariff diagram showing world price Pw rising to Pw plus t, domestic supply expanding from Q1 to Q3, domestic demand contracting from Q2 to Q4, tariff revenue rectangle, and two deadweight welfare loss triangles">
  <rect x="0" y="0" width="380" height="248" fill="#fffdf8" rx="8" />
  <line x1="54" y1="20" x2="54" y2="204" stroke="#1e293b" stroke-width="2" />
  <line x1="54" y1="204" x2="352" y2="204" stroke="#1e293b" stroke-width="2" />
  <text x="12" y="34" font-size="11" font-weight="600" fill="#1e293b">Price</text>
  <text x="288" y="234" font-size="11" font-weight="600" fill="#1e293b">Quantity</text>
  <polygon points="54,116 146,116 106,160 54,160" fill="#10b981" fill-opacity="0.22" />
  <rect x="146" y="116" width="114" height="44" fill="#0ea5e9" fill-opacity="0.24" stroke="#0369a1" stroke-width="1" />
  <polygon points="106,160 146,160 146,116" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <polygon points="260,116 260,160 304,160" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <line x1="76" y1="192" x2="232" y2="30" stroke="#2563eb" stroke-width="2.4" />
  <text x="234" y="34" font-size="11" font-weight="700" fill="#2563eb">S_dom</text>
  <line x1="172" y1="30" x2="342" y2="196" stroke="#0f766e" stroke-width="2.4" />
  <text x="304" y="198" font-size="11" font-weight="700" fill="#0f766e">D_dom</text>
  <line x1="54" y1="160" x2="340" y2="160" stroke="#475569" stroke-width="2" />
  <text x="318" y="155" font-size="10" font-weight="700" fill="#334155">Sw</text>
  <line x1="54" y1="116" x2="340" y2="116" stroke="#b45309" stroke-width="2" />
  <text x="308" y="111" font-size="10" font-weight="700" fill="#b45309">Sw+t</text>
  <line x1="106" y1="160" x2="106" y2="204" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="146" y1="116" x2="146" y2="204" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="260" y1="116" x2="260" y2="204" stroke="#64748b" stroke-dasharray="4 3" />
  <line x1="304" y1="160" x2="304" y2="204" stroke="#64748b" stroke-dasharray="4 3" />
  <text x="26" y="164" font-size="11" font-weight="600" fill="#1e293b">Pw</text>
  <text x="14" y="120" font-size="11" font-weight="700" fill="#b45309">Pw+t</text>
  <text x="99" y="218" font-size="11" font-weight="600" fill="#1e293b">Q1</text>
  <text x="139" y="218" font-size="11" font-weight="600" fill="#1e293b">Q3</text>
  <text x="253" y="218" font-size="11" font-weight="600" fill="#1e293b">Q4</text>
  <text x="297" y="218" font-size="11" font-weight="600" fill="#1e293b">Q2</text>
  <text x="72" y="143" font-size="9" font-weight="700" fill="#047857">+PS</text>
  <text x="172" y="142" font-size="10" font-weight="700" fill="#0369a1">Gov. rev.</text>
  <text x="122" y="155" font-size="9" font-weight="700" fill="#991b1b">d1</text>
  <text x="268" y="155" font-size="9" font-weight="700" fill="#991b1b">d2</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-p1",
  title: "Paper 1 · Extended Response (Part a 10m + Part b 15m)",
  level: "SL",
  calculator: false,
  minutes: 75,
  paperType: "Paper 1 · Extended Response (Part a 10m + Part b 15m)",
  questions: [
    // ===================== SECTION A: MICROECONOMICS =======================
    {
      id: "exam-p1-q01",
      kind: "short",
      topicId: "1-intro-economics",
      guideRef: "scarcity-choice-ppc",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "State",
      question:
        "**[Section A · Micro Warm-Up]** State the exact economic term for the value of the next best alternative foregone whenever a scarce resource choice is made.",
      answer: {
        type: "text",
        accept: ["opportunity cost", "opportunity costs"],
        display: "opportunity cost",
      },
      hints: [
        "Because resources are finite and wants are unlimited, every choice along a Production Possibilities Curve involves a trade-off.",
      ],
      solution: [
        "The value of the next best alternative foregone is **opportunity cost**.",
        "Along a Production Possibilities Curve (PPC), moving from one combination to another visually measures the opportunity cost of producing additional units of one good in terms of the other good sacrificed.",
      ],
      commonError: "Writing 'scarcity' or 'accounting cost' instead of 'opportunity cost'.",
      strategy: "Core Unit 1 terminology",
    },
    {
      id: "exam-p1-q02",
      kind: "short",
      topicId: "2a-markets-elasticities-gov",
      guideRef: "elasticities-ped-yed-pes",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "State",
      question:
        "**[Section A · Micro Warm-Up]** A staple product has an Income Elasticity of Demand of {{YED = -0.60}}. State the exact economic classification of this good.",
      answer: {
        type: "text",
        accept: ["inferior good", "inferior", "inferior goods"],
        display: "inferior good",
      },
      hints: [
        "Unlike PED, the sign (+ or −) of YED carries essential economic meaning.",
        "When household income rises and quantity demanded falls, how do economists classify the good?",
      ],
      solution: [
        "Because YED is negative ({{YED < 0}}), demand falls as consumer income rises (and rises when income falls).",
        "Therefore, the product is classified as an **inferior good**.",
      ],
      commonError: "Calling a good with |YED| < 1 a 'necessity' while ignoring the negative sign.",
      strategy: "Check sign of YED first: negative = inferior; 0 to 1 = normal necessity; > 1 = luxury",
    },
    {
      id: "exam-p1-q03",
      kind: "written",
      topicId: "2b-market-failure-power",
      guideRef: "externalities-common-pool",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 10,
      diagram: SVG_NEG_EXT_CONS_TAX,
      question:
        "**[Paper 1 · Section A · Part (a) · 10 marks]** Explain how the consumption of a demerit good such as tobacco or sugary drinks creates a negative externality of consumption, and explain how a specific indirect (Pigouvian) tax can correct this market failure. Include a fully labelled diagram in your explanation.",
      hints: [
        "Start by defining negative externality of consumption and demerit goods (emphasizing external third-party costs).",
        "Draw and explicitly reference BOTH curves D = MPB and MSB (below MPB), showing why Qm > Q* and MSC > MSB at Qm.",
        "Show the vertical upward shift of supply from S = MPC to S + Tax equal to the external cost per unit, raising price to Pt and lowering output to Q*.",
      ],
      modelAnswer:
        "A **negative externality of consumption** arises when private consumption imposes spillover harm on external third parties not priced into the transaction. **Demerit goods** are products deemed socially undesirable that households over-consume because buyers weigh only private satisfaction while ignoring wider healthcare burdens, passive smoke, or lost workplace productivity.\n\nIn the diagram, supply represents both marginal private and social cost (**S = MPC = MSC**, assuming no production spillovers). Because consumption generates third-party harm, **marginal social benefit (MSB) lies below marginal private benefit (MPB)**. Left unregulated, buyers and sellers settle where MPB equals MPC at equilibrium price **Pm** and output **Qm**. At Qm, **MSC exceeds MSB**, meaning every unit between the socially optimal level **Q*** (where MSB = MSC) and Qm destroys net social surplus. This **over-allocation of resources** produces the shaded **deadweight welfare loss triangle** pointing directly toward Q*, representing **allocative inefficiency**.\n\nTo internalize this spillover, authorities can impose a **specific Pigouvian tax** equal to the vertical gap between MPB and MSB at Q*. The levy raises firms' unit costs, shifting the supply schedule vertically upwards from **S = MPC** to **S + Tax**. Market price rises from Pm to **Pt**, encouraging consumers to cut back along D = MPB until quantity contracts from Qm to **Q***. At Q*, the welfare loss triangle shrinks to zero, allocative efficiency is restored, and the treasury collects tax revenue equal to the per-unit levy multiplied by Q* that can fund public healthcare or awareness campaigns.",
      markScheme: [
        { point: "Defines negative externality of consumption as external third-party costs caused by consuming a good", keywords: ["third parties", "third-party", "spillover"] },
        { point: "Defines demerit goods as socially undesirable products over-consumed in a free market", keywords: ["socially undesirable", "over-consume", "over-consumed"] },
        { point: "Provides relevant third-party cost context (healthcare burden, passive smoke, productivity loss)", keywords: ["healthcare", "passive smoke", "productivity"] },
        { point: "Identifies S = MPC = MSC and places MSB vertically below D = MPB on the diagram", keywords: ["below marginal private benefit", "msb lies below", "below mpb"] },
        { point: "Locates free-market equilibrium at Pm, Qm (MPB = MPC) vs social optimum at Q* (MSB = MSC)", keywords: ["socially optimal", "q*"] },
        { point: "Explains why market failure occurs: at Qm, MSC > MSB causing over-allocation of resources", keywords: ["msc exceeds msb", "over-allocation", "msc > msb"] },
        { point: "Identifies the deadweight welfare loss triangle pointing to Q* and links to allocative inefficiency", keywords: ["welfare loss triangle", "allocative inefficiency"] },
        { point: "Explains that a Pigouvian levy internalizes the externality by shifting supply vertically upwards to S + Tax", keywords: ["internalize", "vertically upwards", "s + tax"] },
        { point: "Traces the market adjustment: price increases to Pt and quantity contracts from Qm to Q*", keywords: ["price rises", "contracts from qm", "pt"] },
        { point: "Concludes that welfare loss is eliminated at Q* and notes the government revenue generated", keywords: ["tax revenue", "allocative efficiency is restored", "shrinks to zero"] },
      ],
      markbands: P1_PART_A_BANDS,
      commonError: "Pointing the welfare loss triangle toward Qm instead of Q*, or shifting MPB/MSB instead of S = MPC when illustrating an indirect tax.",
      strategy: "Paper 1 Part (a) blueprint: Definitions → Diagram setup → Market failure at Qm → Policy shift → New equilibrium at Q*",
    },
    {
      id: "exam-p1-q04",
      kind: "written",
      topicId: "2b-market-failure-power",
      guideRef: "externalities-common-pool",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 15,
      question:
        "**[Paper 1 · Section A · Part (b) · 15 marks]** Using real-world examples, **evaluate** the effectiveness of indirect (carbon or excise) taxes compared with government subsidies for clean substitutes in reducing negative externalities.",
      hints: [
        "Paper 1 Part (b) REQUIRES specific real-world examples (country + policy + outcome) to access Bands 10–12 and 13–15.",
        "Analyse BOTH policies with diagram logic: indirect taxes shift MPC upward to internalize external cost; clean-substitute subsidies shift clean supply right and pull dirty demand inward.",
        "Evaluate across elasticities (inelastic demand for petrol/tobacco), equity (regressive tax burden vs progressive/regressive subsidy capture), government budgets, measurement difficulty, and short-run vs long-run behavioural shifts.",
      ],
      modelAnswer:
        "Both **indirect Pigouvian taxes** and **clean-substitute subsidies** are market-based tools aimed at narrowing the gap between free-market output (Qm) and socially optimal output (Q*), yet they differ sharply in fiscal cost, distributional equity, and effectiveness when demand is price inelastic.\n\n**Indirect taxes** force polluters or consumers to **internalize external costs** by shifting supply vertically upwards from S = MPC to S + Tax. In **Sweden**, a carbon tax introduced in 1991 and gradually raised above US$120 per tonne of CO₂ helped cut greenhouse emissions by more than 25% while real GDP expanded. Similarly, the **UK Soft Drinks Industry Levy (2018)** incentivized beverage firms to reformulate recipes, reducing sugar content in soft drinks by over 30%, while **Singapore's carbon tax** (rising from S$5 to S$25 per tonne in 2024 and S$45 in 2026) sends a predictable long-run price signal. Taxes also generate **public revenue** that governments can recycle into green grids or low-income rebates.\n\nHowever, indirect taxes face major **limitations**. First, **measurement difficulty** makes calculating the exact monetary value of marginal external damage nearly impossible, risking over- or under-taxation. Second, where demand for carbon fuel or addictive goods is **price inelastic**, even steep levies cause only a modest short-run fall in quantity while imposing a **regressive burden** on poorer households who spend a larger share of income on transport and energy—as seen during France's 2018 *Gilets Jaunes* fuel-tax protests. Third, unilateral carbon taxes can trigger **carbon leakage** as energy-intensive firms relocate abroad.\n\nBy contrast, **subsidies for clean substitutes** (such as electric vehicles, solar panels, or public transit) shift clean-energy supply rightwards, lowering clean prices and shifting demand for dirty substitutes leftwards from MPB toward MSB. **Norway's EV incentives** (VAT and purchase-tax exemptions plus free toll access) pushed electric vehicles above 85% of new car sales, while **Germany's renewable feed-in tariffs** drove massive learning-by-doing economies of scale that slashed global solar panel costs. Because subsidies reward switching rather than penalizing essentials, they face far less political resistance and directly raise the **long-run price elasticity of demand** for fossil fuels.\n\nYet subsidies also carry substantial **drawbacks**. They impose heavy **opportunity costs on the government budget**, diverting public funds from schools or healthcare. Furthermore, green subsidies can be **fiscally regressive** in the short run when wealthy households disproportionately buy subsidized EVs or rooftop solar panels, and poorly targeted payouts risk encouraging X-inefficiency among protected domestic producers.\n\n**Reasoned judgement:** Neither instrument is sufficient on its own. Indirect taxes are indispensable for putting a direct price on environmental damage and raising revenue, whereas clean-substitute subsidies make demand for polluting goods far more elastic over the long run. The most effective and equitable strategy is a **revenue-recycled policy mix**: pairing a steadily rising carbon tax (as in Sweden or Singapore) with targeted clean-transit subsidies and lump-sum rebates for low-income families to neutralize regressivity.",
      markScheme: [
        { point: "Explains how indirect taxes shift supply upward to internalize external costs toward Q*", keywords: ["internalize external costs", "vertically upwards"] },
        { point: "Integrates a specific real-world carbon or excise tax example (e.g. Sweden, UK SDIL, Singapore)", keywords: ["sweden", "uk soft drinks", "singapore's carbon tax"] },
        { point: "Highlights fiscal advantage: indirect taxes raise government revenue for green recycling", keywords: ["public revenue", "recycle"] },
        { point: "Evaluates measurement/information failure in setting the optimal Pigouvian tax rate", keywords: ["measurement difficulty", "monetary value"] },
        { point: "Evaluates low price elasticity of demand limiting short-run quantity reductions", keywords: ["price inelastic", "short-run fall"] },
        { point: "Evaluates regressive equity burden on low-income households with real-world context", keywords: ["regressive burden", "gilets jaunes"] },
        { point: "Evaluates international competitiveness or carbon leakage risk", keywords: ["carbon leakage", "relocate"] },
        { point: "Explains how clean-substitute subsidies shift clean supply right and dirty demand inward", keywords: ["clean-energy supply rightwards", "dirty substitutes leftwards"] },
        { point: "Integrates a specific real-world clean-subsidy example (e.g. Norway EVs, Germany solar)", keywords: ["norway's ev", "germany's renewable"] },
        { point: "Explains dynamic benefit: clean substitutes raise long-run PED for polluting goods and spur economies of scale", keywords: ["long-run price elasticity", "economies of scale"] },
        { point: "Notes stronger political feasibility of rewarding switching over penalizing necessities", keywords: ["political resistance", "reward switching"] },
        { point: "Evaluates fiscal burden and opportunity cost of government subsidies", keywords: ["opportunity costs on the government budget", "diverting public funds"] },
        { point: "Evaluates distributional flaw of wealthy buyers capturing EV/solar subsidies", keywords: ["fiscally regressive", "wealthy households"] },
        { point: "Evaluates producer inefficiency / dependency risk of long-term subsidies", keywords: ["x-inefficiency", "protected domestic"] },
        { point: "Reaches a balanced, reasoned judgement recommending a complementary revenue-recycled policy mix", keywords: ["revenue-recycled policy mix", "lump-sum rebates"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Writing abstract theory without concrete real-world country/policy examples, which caps Paper 1 Part (b) in Band 7–9.",
      strategy: "Use CLASPP + Real-World Examples: Elasticities, Equity, Fiscal cost, Short vs Long run, Policy mix judgement",
    },
    {
      id: "exam-p1-q05",
      kind: "written",
      topicId: "2b-market-failure-power",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      marks: 15,
      question:
        "**[Paper 1 · Section A · Part (b) · HL Option · 15 marks]** Using real-world examples, **discuss** whether monopolies are always harmful to consumers and economic efficiency.",
      hints: [
        "Establish the standard monopoly welfare critique: profit maximization at MC = MR with high barriers to entry gives P > MC (allocative inefficiency), Q below min ATC (productive inefficiency), and a deadweight welfare loss triangle.",
        "Build the counter-argument: natural monopolies (economies of scale lowering LRAC), dynamic efficiency (abnormal profit funding R&D), and contestability/regulation.",
        "Integrate specific real-world examples (e.g. electricity/water grids, pharmaceutical patents, Big Tech antitrust cases) and synthesize a nuanced judgement.",
      ],
      modelAnswer:
        "A **monopoly** exists when a single dominant firm controls the market behind high **barriers to entry**, facing the downward-sloping industry demand curve (AR > MR). While classical microeconomic theory predicts severe efficiency losses and consumer harm, real-world outcomes depend critically on **economies of scale**, **dynamic innovation**, and **regulatory oversight**.\n\nOn the critical side, an unregulated profit-maximizing monopolist restricts output to **MC = MR** and charges a higher price **Pm** than the perfectly competitive benchmark **Pc**. Because **P > MC**, marginal benefit exceeds marginal cost, producing **allocative inefficiency** and a **deadweight welfare loss triangle** as consumer surplus is both lost and transferred into long-run **abnormal profit**. Furthermore, the monopolist produces above the minimum point of average total cost (**productive inefficiency**) and, sheltered from competitive pressure, may suffer **X-inefficiency** through bloated management costs. High market power can also worsen **equity**, transferring income from lower-income consumers to wealthy shareholders—a concern underlying the **European Commission's multi-billion-euro antitrust fines against Google** for abusing search dominance and **US DOJ actions against dominant digital platforms**.\n\nHowever, monopolies are not always harmful. First, in a **natural monopoly**—where massive fixed infrastructure costs cause **long-run average cost (LRAC)** to decline across the entire market demand—a single supplier achieves far lower unit costs than competing duplicate networks. National grids and water utilities such as **Singapore's PUB** or **SP Group** avoid wasteful parallel pipelines and cables, allowing regulated prices below what fragmented rivals could sustain.\n\nSecond, Schumpeterian **dynamic efficiency** suggests that persistent abnormal profits provide both the internal finance and the incentive to undertake risky, long-horizon **research and development (R&D)**. Patent-protected pharmaceutical leaders such as **Pfizer and BioNTech** invested billions upfront to deliver mRNA COVID-19 vaccines rapidly—innovation unlikely under zero-abnormal-profit perfect competition. Third, even dominant firms may price close to competitive levels if the market is **contestable** (low sunk costs and credible threat of hit-and-run entry) or subject to strict **price-cap regulation (RPI − X)** and competition watchdogs.\n\n**Reasoned judgement:** Monopolies are genuinely harmful when high artificial barriers protect stagnant incumbents that exploit inelastic consumers without innovating. Yet in natural-monopoly utilities and capital-intensive R&D sectors, concentrated scale can benefit consumers through lower LRAC and breakthrough products—provided governments enforce **antitrust law**, transparent **price regulation**, and time-limited **patent horizons** so efficiency gains are shared fairly with households.",
      markScheme: [
        { point: "Defines monopoly characteristics (single dominant seller, price maker, high barriers to entry, AR > MR)", keywords: ["barriers to entry", "ar > mr"] },
        { point: "Explains profit maximization at MC = MR yielding higher price Pm and lower output Qm than competition", keywords: ["mc = mr", "higher price pm"] },
        { point: "Identifies allocative inefficiency (P > MC) and deadweight welfare loss triangle", keywords: ["allocative inefficiency", "deadweight welfare loss"] },
        { point: "Explains productive inefficiency (not at minimum ATC) and X-inefficiency from weak rivalry", keywords: ["productive inefficiency", "x-inefficiency"] },
        { point: "Notes regressive equity impact transferring consumer surplus to shareholders", keywords: ["consumer surplus", "shareholders"] },
        { point: "Integrates a real-world antitrust/abuse-of-dominance example (e.g. EU fines on Google / US DOJ)", keywords: ["google", "antitrust"] },
        { point: "Explains natural monopoly with declining LRAC across market demand due to high fixed costs", keywords: ["natural monopoly", "long-run average cost"] },
        { point: "Integrates a real-world natural monopoly example (e.g. PUB / SP Group utility networks)", keywords: ["pub", "sp group", "parallel pipelines"] },
        { point: "Explains Schumpeterian dynamic efficiency: abnormal profit finances risky R&D", keywords: ["dynamic efficiency", "research and development"] },
        { point: "Integrates a real-world R&D / patent example (e.g. Pfizer / BioNTech mRNA vaccines)", keywords: ["pfizer", "biontech", "mrna"] },
        { point: "Evaluates role of contestable markets and threat of entry in disciplining monopoly pricing", keywords: ["contestable", "sunk costs"] },
        { point: "Evaluates role of government price-cap regulation (RPI − X) in capturing scale benefits", keywords: ["price-cap regulation", "rpi"] },
        { point: "Contrasts short-run static inefficiency against long-run dynamic innovation gains", keywords: ["short-run", "long-horizon", "breakthrough"] },
        { point: "Distinguishes artificial anti-competitive barriers from structural scale economies", keywords: ["artificial barriers", "concentrated scale"] },
        { point: "Delivers a reasoned conclusion conditional on industry structure and regulatory enforcement", keywords: ["antitrust law", "patent horizons", "shared fairly"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Evaluating monopoly purely as 'bad because prices are high' without examining natural monopoly LRAC, dynamic R&D efficiency, and real-world regulatory examples.",
      strategy: "Static inefficiency (P > MC, min ATC, X-inefficiency) vs Scale & Dynamic efficiency (natural monopoly, R&D, regulation)",
    },

    // ===================== SECTION B: MACROECONOMICS =======================
    {
      id: "exam-p1-q06",
      kind: "short",
      topicId: "3a-macro-activity-objectives",
      guideRef: "adas-models-equilibria",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Identify",
      question:
        "**[Section B · Macro Warm-Up]** On an AD/AS diagram, identify the exact macroeconomic term for the output gap that exists when short-run equilibrium real GDP lies strictly **below** full-employment potential output (Y_fe).",
      answer: {
        type: "text",
        accept: ["deflationary gap", "recessionary gap", "negative output gap"],
        display: "deflationary gap",
      },
      hints: [
        "When actual real GDP < Y_fe, cyclical unemployment exists and aggregate demand is insufficient to employ all resources.",
      ],
      solution: [
        "When equilibrium real GDP sits below full-employment output (Y_fe), the economy experiences a **deflationary gap** (also called a **recessionary gap** or **negative output gap**).",
        "Cyclical unemployment is positive and downward pressure on inflation emerges.",
      ],
      commonError: "Confusing 'deflationary gap' (output below Y_fe) with 'deflation' (a sustained fall in the general price level).",
      strategy: "AD/AS output gaps: Y_e < Y_fe = deflationary/recessionary gap; Y_e > Y_fe = inflationary gap",
    },
    {
      id: "exam-p1-q07",
      kind: "short",
      topicId: "3a-macro-activity-objectives",
      guideRef: "inequality-lorenz-taxation",
      level: "SL",
      difficulty: "core",
      commandTerm: "State",
      question:
        "**[Section B · Macro Warm-Up]** On a Lorenz curve diagram, what exact numerical upper limit (0 or 1) does the Gini coefficient approach when income inequality becomes completely extreme (one single household receiving 100% of national income)?",
      answer: {
        type: "number",
        value: 1,
        display: "1",
      },
      hints: [
        "Recall Gini = Area A / (Area A + Area B), where Area A lies between the 45° line of perfect equality and the Lorenz curve.",
        "As inequality becomes complete, the Lorenz curve hugs the bottom and right axes, so Area B shrinks toward 0.",
      ],
      solution: [
        "The Gini coefficient is bounded between **0** (perfect equality, where the Lorenz curve coincides with the 45° line and Area A = 0) and **1** (complete inequality, where Area B → 0 and Area A / (A + B) → 1).",
        "Therefore, extreme inequality approaches **1**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "0 represents perfect equality (every household earning the exact same share), not extreme inequality.",
        },
      ],
      commonError: "Reversing the Gini scale by thinking 0 means extreme inequality.",
      strategy: "Gini = 0 → perfect equality; Gini = 1 → perfect inequality",
    },
    {
      id: "exam-p1-q08",
      kind: "written",
      topicId: "3a-macro-activity-objectives",
      guideRef: "macro-objectives-phillips-hl",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 10,
      diagram: SVG_ADAS_INFLATION,
      question:
        "**[Paper 1 · Section B · Part (a) · 10 marks]** Explain the causes of **demand-pull inflation** and **cost-push inflation**, using fully labelled AD/AS diagrams to contrast their effects on the price level, real GDP, and unemployment.",
      hints: [
        "Define inflation accurately first (a sustained increase in the general price level over time, eroding purchasing power).",
        "Use exact IB macro axis labels: 'Average Price Level' (vertical) and 'Real GDP' (horizontal)—NEVER 'P' and 'Q'!",
        "Contrast an AD1 → AD2 rightward shift (PL rises, Real GDP rises, unemployment falls) against an SRAS1 → SRAS2 leftward shift (PL rises, Real GDP falls, unemployment rises — stagflation).",
      ],
      modelAnswer:
        "**Inflation** is a sustained rise in the general price level of an economy over a given period, measured typically by the Consumer Price Index (CPI), which erodes money's purchasing power. Economists distinguish two primary sources using the Aggregate Demand and Short-Run Aggregate Supply (AD/AS) model, plotted with **Average Price Level** on the vertical axis and **Real GDP** on the horizontal axis.\n\n**Demand-pull inflation** occurs when excessive growth in aggregate demand (**AD = C + I + G + X − M**) outpaces the economy's productive capacity near full employment. Triggers include booming consumer or business confidence, expansionary fiscal policy (higher government spending or tax cuts), loose monetary policy (lower interest rates), or surging export demand. On the left diagram, aggregate demand shifts rightwards from **AD1 to AD2** along an upward-sloping SRAS curve. As firms struggle with tighter capacity bottlenecks and compete for scarce labour, wages and product prices are bid upwards: the average price level increases from **PL1 to PL2**, while **real GDP expands from Y1 to Y2** and cyclical **unemployment declines**.\n\nBy contrast, **cost-push inflation** originates from negative supply-side shocks that raise firms' per-unit **costs of production**. Key causes include sudden spikes in imported crude oil, electricity, or commodity prices, higher nominal wages outpacing labour productivity, sharp currency depreciation raising imported input bills, or higher indirect business taxes. On the right diagram, the short-run aggregate supply curve shifts leftwards from **SRAS1 to SRAS2** against a given AD curve. Firms pass higher input expenses onto consumers while scaling back production: the price level rises from **PL1 to PL2**, but **real GDP contracts from Y1 to Y2** and **unemployment rises**.\n\nConsequently, while both mechanisms generate higher general prices, **demand-pull inflation** accompanies rising output and lower joblessness, whereas **cost-push inflation** produces **stagflation**—the damaging simultaneous combination of inflation, falling real output, and rising unemployment.",
      markScheme: [
        { point: "Defines inflation accurately as a sustained rise in the general price level", keywords: ["sustained rise", "general price level"] },
        { point: "Labels AD/AS axes correctly as Average Price Level and Real GDP", keywords: ["average price level", "real gdp"] },
        { point: "Defines demand-pull inflation as aggregate demand growing faster than productive capacity", keywords: ["aggregate demand", "productive capacity"] },
        { point: "Provides specific AD shift causes across C, I, G, or (X − M)", keywords: ["confidence", "expansionary fiscal", "lower interest rates"] },
        { point: "Shows rightward shift AD1 to AD2 raising PL1 to PL2 and expanding output Y1 to Y2 while lowering unemployment", keywords: ["ad1 to ad2", "expands from y1 to y2", "unemployment declines"] },
        { point: "Defines cost-push inflation as rising per-unit production costs shifting SRAS left", keywords: ["costs of production", "supply-side shocks"] },
        { point: "Provides specific cost-push triggers (oil/energy prices, wage-push, currency depreciation, indirect taxes)", keywords: ["crude oil", "currency depreciation", "indirect business taxes"] },
        { point: "Shows leftward shift SRAS1 to SRAS2 raising PL1 to PL2 while real GDP contracts Y1 to Y2", keywords: ["sras1 to sras2", "contracts from y1 to y2"] },
        { point: "Explains that cost-push inflation raises unemployment simultaneously with higher prices", keywords: ["unemployment rises", "scaling back production"] },
        { point: "Contrasts both mechanisms explicitly, identifying stagflation under cost-push inflation", keywords: ["stagflation", "rising output"] },
      ],
      markbands: P1_PART_A_BANDS,
      commonError: "Labelling AD/AS axes 'Price' and 'Quantity' (micro axes!), or forgetting to contrast the opposite effects on real GDP and unemployment.",
      strategy: "Always pair dual diagrams (AD shift vs SRAS shift) and contrast PL, Real GDP, and Unemployment explicitly",
    },
    {
      id: "exam-p1-q09",
      kind: "written",
      topicId: "3b-macro-policies",
      guideRef: "monetary-policy-banking",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 15,
      question:
        "**[Paper 1 · Section B · Part (b) · 15 marks]** Using real-world examples, **evaluate** the effectiveness of **expansionary monetary policy** compared with **expansionary fiscal policy** in lifting an economy out of a deep recession.",
      hints: [
        "Explain BOTH transmission mechanisms clearly (rate cuts & QE boosting C, I, X − M vs higher G / lower T acting directly on AD with multiplier effects).",
        "Integrate specific real-world deep-recession examples: e.g. 2008–09 GFC (US Fed ZLB + ARRA), 2020 COVID-19 (Singapore Resilience/Fortitude Budgets, US CARES Act), Japan's long deflationary trap.",
        "Evaluate across speed/lags, zero lower bound (ZLB), consumer/business confidence ('pushing on a string'), direct targeting, crowding out, and public debt sustainability.",
      ],
      modelAnswer:
        "During a **deep recession**, an economy operates in the horizontal spare-capacity region of the Keynesian AS curve with severe cyclical unemployment and a wide **deflationary gap**. Both **expansionary monetary policy** and **expansionary fiscal policy** seek to shift aggregate demand (AD) rightwards toward full employment (Y_fe), yet their real-world effectiveness differs markedly when private confidence collapses.\n\n**Expansionary monetary policy** involves central banks cutting base interest rates—and using **Quantitative Easing (QE)** when rates approach zero—to lower borrowing costs, stimulate household consumption (C) and business investment (I), and encourage currency depreciation to boost net exports (X − M). Its key strengths are **speed, incremental flexibility, and political independence**: the **US Federal Reserve** and **Bank of England** slashed policy rates within days of the 2008 financial crisis and March 2020 COVID-19 shock, avoiding lengthy parliamentary delays and without directly widening government budget deficits.\n\nIn a **deep recession**, however, monetary policy faces crippling limitations. Once interest rates hit the **zero lower bound (ZLB)**—as seen in **Japan** for over two decades and across the **Eurozone** during 2014–2021—conventional rate cuts lose traction. Worse, when households fear job losses and firms face empty order books, cheap credit alone cannot compel borrowing ('pushing on a string'): banks hoard liquidity while QE can inflate housing and stock-market asset prices, worsening **wealth inequality** rather than lifting real consumption.\n\nBy contrast, **expansionary fiscal policy** raises government spending (G) or cuts direct taxes (T), injecting demand **directly** into the circular flow regardless of timid private sentiment. During the 2020 pandemic downturn, **Singapore's S$100 billion Unity, Resilience, and Fortitude Budgets** funded the Jobs Support Scheme and direct household payouts, preventing mass business insolvency and cushioning unemployment, while the **US 2009 ARRA** and **2020 CARES Act** deployed targeted infrastructure and income transfers that worked through the **Keynesian multiplier** to restore spending.\n\nNevertheless, fiscal stimulus carries real **constraints**. Discretionary budgets suffer **legislative recognition and implementation time lags**, risk **partial crowding out** if heavy sovereign borrowing later pushes up interest rates during recovery, and leave lasting **national debt burdens**—limiting future fiscal space, especially in heavily indebted economies such as Italy or emerging markets facing bond-market risk premia. Tax cuts may also leak into **precautionary saving** or **imports** in small open economies.\n\n**Reasoned judgement:** In mild downturns, monetary policy is typically the agile first responder. In a **deep recession** marked by ZLB interest rates and collapsed confidence, however, **targeted expansionary fiscal policy is decisively more effective** because it directly replaces missing private spending and protects vulnerable households. The optimal crisis response coordinates both—using central-bank liquidity and low yields to prevent fiscal crowding out while deploying temporary, high-multiplier public spending with a credible medium-term debt plan.",
      markScheme: [
        { point: "Links deep recession to deflationary gap and horizontal/spare-capacity Keynesian AS", keywords: ["deflationary gap", "spare-capacity"] },
        { point: "Explains monetary transmission via lower borrowing costs (C, I), QE, and exchange rate (X − M)", keywords: ["quantitative easing", "borrowing costs", "currency depreciation"] },
        { point: "Highlights monetary strengths: speed, flexibility, central-bank independence, no direct fiscal deficit", keywords: ["political independence", "parliamentary delays"] },
        { point: "Integrates a real-world central-bank crisis example (e.g. US Fed / Bank of England 2008 or 2020)", keywords: ["federal reserve", "bank of england"] },
        { point: "Evaluates the zero lower bound (ZLB) constraint with real-world context (Japan or Eurozone)", keywords: ["zero lower bound", "japan", "eurozone"] },
        { point: "Evaluates low confidence / liquidity trap ('pushing on a string') and asset-price wealth inequality", keywords: ["pushing on a string", "wealth inequality"] },
        { point: "Explains fiscal transmission via direct G injection and T cuts working through the Keynesian multiplier", keywords: ["directly", "keynesian multiplier"] },
        { point: "Integrates a specific real-world fiscal stimulus example (e.g. Singapore COVID Budgets, US ARRA/CARES)", keywords: ["singapore's", "resilience", "cares act", "arra"] },
        { point: "Highlights fiscal strength in targeting vulnerable households and preventing business collapse", keywords: ["jobs support", "insolvency", "vulnerable households"] },
        { point: "Evaluates legislative recognition and implementation time lags in fiscal policy", keywords: ["time lags", "recognition"] },
        { point: "Evaluates national debt sustainability and bond-market constraints", keywords: ["national debt", "fiscal space"] },
        { point: "Evaluates crowding-out risk during recovery", keywords: ["crowding out", "sovereign borrowing"] },
        { point: "Evaluates leakage of tax cuts into precautionary saving or imports in open economies", keywords: ["precautionary saving", "imports"] },
        { point: "Weighs mild downturn vs deep recession context explicitly", keywords: ["mild downturns", "first responder"] },
        { point: "Reaches a reasoned judgement favouring coordinated fiscal leadership backed by accommodative monetary policy", keywords: ["decisively more effective", "coordinates both", "medium-term debt"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Treating monetary and fiscal policy as equally effective in a deep recession without analysing the Zero Lower Bound, confidence trap, or real-world crisis budgets.",
      strategy: "Contrast transmission → Real-world crises → ZLB/Confidence vs Debt/Lags/Crowding out → Coordinated verdict",
    },
    {
      id: "exam-p1-q10",
      kind: "written",
      topicId: "3b-macro-policies",
      guideRef: "supply-side-policies",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 15,
      question:
        "**[Paper 1 · Section B · Part (b) · 15 marks]** Using real-world examples, **evaluate** the view that **market-based supply-side policies** are preferable to **interventionist supply-side policies** for achieving sustainable long-term economic growth.",
      hints: [
        "Define both categories accurately and explain how both aim to shift LRAS / Keynesian AS rightwards (raising potential output Y_fe without long-run inflation).",
        "Include real-world examples for BOTH sides: e.g. UK 1980s privatization/deregulation or Ireland's low corporate tax vs Singapore's SkillsFuture/infrastructure or China/US green-tech R&D investment.",
        "Evaluate across fiscal cost, efficiency vs equity (Gini coefficient), market failures/externalities, sustainability, and time lags.",
      ],
      modelAnswer:
        "**Supply-side policies** aim to expand an economy's long-run productive capacity by improving the quantity or quality of factors of production, shifting **LRAS rightwards** so potential real GDP grows without accelerating inflation. **Market-based policies** rely on private incentives via deregulation, privatization, trade liberalization, labour-market flexibility, and lower direct taxes, whereas **interventionist policies** use targeted government investment in education, healthcare, infrastructure, and R&D.\n\nSupporters of **market-based supply-side reforms** argue they enhance **productive and allocative efficiency** without straining public finances. Lowering marginal income and corporate tax rates—as in **Ireland's 12.5% corporate tax regime**—incentivizes enterprise, labour participation, and inward FDI. Similarly, **privatization and deregulation** in the **United Kingdom during the 1980s** (telecoms and aviation) introduced competition that drove down consumer prices and improved innovation, while **labour-market reforms** (reducing rigid hiring/firing barriers) lowered structural unemployment without requiring heavy public deficits.\n\nYet pure market-based policies suffer severe **equity and sustainability drawbacks**. Cutting top income taxes, weakening minimum wages, and eroding trade-union bargaining power routinely widen **income inequality** (pushing up the Gini coefficient) and increase worker job insecurity. Deregulation without strong safeguards can trigger **environmental degradation** or financial crises (such as the 2008 banking collapse after US financial deregulation), while privatizing natural monopolies like water or rail risks private price gouging and underinvestment in maintenance.\n\nConversely, **interventionist supply-side policies** directly correct **positive externalities and market failures** that private markets under-provide. **Singapore's SkillsFuture** lifelong-learning credits and massive public investment in **Tuas Mega Port and MRT transit** raise human-capital productivity and cut private logistics costs simultaneously, creating dual short-run AD stimulus and long-run LRAS expansion. Likewise, **South Korea's state-backed R&D** and **China's renewable-grid investments** accelerated high-tech green transitions that short-sighted private investors rarely finance alone, improving both **equity** (through accessible schooling and healthcare) and **environmental sustainability**.\n\nHowever, interventionist strategies also face genuine **risks**: high **fiscal opportunity costs** and potential budget deficits, **very long time lags** (10–20 years for primary education reforms to raise labour productivity), and **government failure**—where politicians misallocate subsidies to politically favoured industries rather than commercially viable winners.\n\n**Reasoned judgement:** Market-based reforms are NOT universally preferable. While competitive product markets and sensible tax incentives foster dynamism and avoid chronic fiscal deficits, leaving education, green infrastructure, and labour protections entirely to the free market undermines both **equity** and **ecological sustainability**. Durable long-term growth requires a **balanced mixed-economy framework**: competitive private markets underpinned by high-return public investments in human capital, clean infrastructure, and smart environmental regulation.",
      markScheme: [
        { point: "Explains goal of supply-side policies: shifting LRAS right to raise potential GDP without inflation", keywords: ["lras rightwards", "potential real gdp"] },
        { point: "Distinguishes market-based tools (deregulation, privatization, tax cuts, labour flexibility) accurately", keywords: ["deregulation", "privatization", "labour-market flexibility"] },
        { point: "Integrates a specific real-world market-based example (e.g. Ireland corporate tax or UK 1980s)", keywords: ["ireland's", "united kingdom"] },
        { point: "Explains efficiency and low fiscal-cost advantages of market-based reforms", keywords: ["without straining public finances", "productive and allocative efficiency"] },
        { point: "Evaluates equity cost: widening income inequality / rising Gini and lower worker security", keywords: ["income inequality", "gini coefficient", "job insecurity"] },
        { point: "Evaluates environmental/financial deregulation failure or privatized natural monopoly risks", keywords: ["environmental degradation", "2008 banking collapse", "price gouging"] },
        { point: "Defines interventionist tools (education, healthcare, infrastructure, R&D) addressing market failure", keywords: ["positive externalities", "human-capital"] },
        { point: "Integrates a specific real-world interventionist example (e.g. Singapore SkillsFuture/Tuas, South Korea R&D)", keywords: ["skillsfuture", "tuas", "south korea's"] },
        { point: "Notes dual short-run AD and long-run LRAS expansion from public infrastructure/R&D spending", keywords: ["dual short-run ad", "long-run lras"] },
        { point: "Highlights equity and green sustainability gains from public education and clean infrastructure", keywords: ["accessible schooling", "environmental sustainability"] },
        { point: "Evaluates fiscal opportunity cost and budget-deficit pressure of interventionist policies", keywords: ["fiscal opportunity costs", "budget deficits"] },
        { point: "Evaluates very long time lags for education and infrastructure returns", keywords: ["very long time lags", "10–20 years"] },
        { point: "Evaluates government failure and misallocation of subsidies ('picking winners')", keywords: ["government failure", "misallocate subsidies"] },
        { point: "Directly answers 'preferable' by comparing trade-offs across efficiency, equity, and sustainability", keywords: ["not universally preferable", "ecological sustainability"] },
        { point: "Concludes with a reasoned mixed-economy synthesis combining competitive markets with targeted public investment", keywords: ["balanced mixed-economy", "smart environmental regulation"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Describing policies as lists without linking them to LRAS shifts, AD side-effects, equity/sustainability trade-offs, and real-world evidence.",
      strategy: "Weigh Market-Based vs Interventionist across Efficiency, Fiscal Cost, Equity, Sustainability, and Time Lags",
    },

    // ===================== SECTION C: THE GLOBAL ECONOMY ===================
    {
      id: "exam-p1-q11",
      kind: "short",
      topicId: "4a-trade-integration",
      guideRef: "economic-integration-wto",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Identify",
      question:
        "**[Section C · Global Warm-Up]** Identify the stage of economic integration that removes internal trade barriers among members, adopts a common external tariff toward non-members, AND permits free movement of labour and capital across borders—without yet sharing a single currency.",
      answer: {
        type: "text",
        accept: ["common market", "single market", "a common market"],
        display: "common market",
      },
      hints: [
        "Climb the integration ladder: FTA → Customs Union → ??? → Monetary Union.",
      ],
      solution: [
        "Adding free movement of factors of production (labour and capital) to a Customs Union creates a **common market** (often termed a **single market**, such as the EU Single Market).",
        "Adopting a shared single currency and central bank goes one stage further into a Monetary Union.",
      ],
      commonError: "Confusing a Customs Union (goods + common external tariff only) with a Common Market (adds free movement of labour and capital).",
      strategy: "Integration ladder: FTA → Customs Union (+CET) → Common Market (+labour/capital) → Monetary Union (+currency)",
    },
    {
      id: "exam-p1-q12",
      kind: "short",
      topicId: "4b-exchange-bop-development",
      guideRef: "bop-marshall-lerner-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "State",
      question:
        "**[Section C · Global Warm-Up · HL]** Under the Marshall–Lerner condition, for a currency depreciation to improve a country's trade balance in the long run, the sum of the absolute price elasticities of demand for exports and imports ({{|PED_X| + |PED_M|}}) must be strictly greater than what exact integer?",
      answer: {
        type: "number",
        value: 1,
        display: "1",
      },
      hints: [
        "When the sum of |PED_X| + |PED_M| equals this threshold, volume changes exactly offset price changes and the trade balance stays unchanged.",
        "Recall the famous inequality governing whether currency depreciation improves net exports in the long run.",
      ],
      solution: [
        "The **Marshall–Lerner condition** states that a depreciation (or devaluation) improves the current account / trade balance iff **|PED_X| + |PED_M| > 1**.",
        "Therefore, the exact threshold integer is **1**.",
      ],
      traps: [
        {
          spec: { type: "number", value: 0 },
          feedback: "Elasticities in absolute terms are already ≥ 0; the Marshall–Lerner threshold is 1, not 0.",
        },
        {
          spec: { type: "number", value: 2 },
          feedback: "Individual elasticities do not each need to exceed 1—only their SUM needs to exceed 1.",
        },
      ],
      commonError: "Thinking BOTH |PED_X| and |PED_M| must individually exceed 1 (which would imply a sum > 2); only their sum must exceed 1.",
      strategy: "Marshall–Lerner: |PED_X| + |PED_M| > 1",
    },
    {
      id: "exam-p1-q13",
      kind: "written",
      topicId: "4a-trade-integration",
      guideRef: "trade-protection-diagrams",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      marks: 10,
      diagram: SVG_TARIFF_P1,
      question:
        "**[Paper 1 · Section C · Part (a) · 10 marks]** Explain the effects of an **import tariff** on domestic consumers, domestic producers, foreign exporters, and the government, using a fully labelled international trade diagram.",
      hints: [
        "Define an import tariff as a tax placed on imported goods entering a country.",
        "Draw S_dom, D_dom, horizontal world supply Sw at Pw, and post-tariff world supply Sw+t at Pw+t, labelling all four quantities Q1, Q3, Q4, Q2.",
        "Walk systematically through EACH of the four stakeholders plus the two shaded deadweight welfare loss triangles (d1 production inefficiency and d2 consumption loss).",
      ],
      modelAnswer:
        "An **import tariff** is a tax levied by a government on imported goods, raising their domestic selling price above the free-trade world price to shield domestic industries or raise public revenue.\n\nIn the diagram, prior to intervention domestic buyers face the perfectly elastic world supply curve **Sw** at price **Pw**. Domestic firms supply **Q1**, domestic consumers buy **Q2**, and free-trade imports equal **Q2 − Q1**. Introducing a specific tariff shifts the effective world supply curve vertically upwards to **Sw+t**, raising domestic price from **Pw to Pw+t**.\n\n**Domestic consumers** are clearly worse off: they pay a higher price (Pw+t) and reduce consumption from **Q2 to Q4**, suffering a large loss in **consumer surplus** equal to the entire trapezoid between Pw and Pw+t under D_dom. **Domestic producers** benefit substantially: shielded from cheaper imports, they expand output along S_dom from **Q1 to Q3**, earn higher revenue, gain the green shaded **producer surplus (+PS)** area, and sustain domestic jobs.\n\n**Foreign exporters** lose heavily because import volumes shrink sharply from **(Q2 − Q1) down to (Q4 − Q3)**, cutting export earnings from **Pw(Q2 − Q1)** to **Pw(Q4 − Q3)** and reducing overseas employment. Meanwhile, the **government** gains **tariff revenue** equal to the blue shaded rectangle **t × (Q4 − Q3)**, improving its fiscal budget.\n\nFinally, society as a whole experiences a net **deadweight welfare loss** shown by the two red triangles: **d1** represents **production inefficiency** (shifting output from lower-cost foreign suppliers to higher-cost domestic firms between Q1 and Q3), while **d2** represents **consumption welfare loss** (lost consumer surplus on units between Q4 and Q2 that are no longer purchased).",
      markScheme: [
        { point: "Defines import tariff accurately as a tax on imported goods", keywords: ["tax levied", "imported goods"] },
        { point: "Sets up free-trade equilibrium on diagram: Pw, domestic supply Q1, demand Q2, imports Q2 − Q1", keywords: ["world supply", "q2 − q1", "q2 - q1"] },
        { point: "Shows upward shift from Sw to Sw+t raising domestic price from Pw to Pw+t", keywords: ["sw+t", "pw+t"] },
        { point: "Explains consumer loss: higher price, consumption falls Q2 to Q4, loss of consumer surplus", keywords: ["q2 to q4", "consumer surplus"] },
        { point: "Explains domestic producer gain: output expands Q1 to Q3 and producer surplus (+PS) increases", keywords: ["q1 to q3", "producer surplus"] },
        { point: "Notes higher domestic producer revenue and employment protection", keywords: ["higher revenue", "domestic jobs"] },
        { point: "Explains foreign exporter loss: import volume falls to Q4 − Q3, reducing export earnings", keywords: ["q4 − q3", "q4 - q3", "export earnings"] },
        { point: "Identifies government gain: tariff revenue rectangle equal to t × (Q4 − Q3)", keywords: ["tariff revenue", "fiscal budget"] },
        { point: "Explains production inefficiency deadweight loss triangle (d1) from inefficient domestic production", keywords: ["production inefficiency", "higher-cost domestic"] },
        { point: "Explains consumption welfare loss triangle (d2) from foregone consumption between Q4 and Q2", keywords: ["consumption welfare loss", "no longer purchased"] },
      ],
      markbands: P1_PART_A_BANDS,
      commonError: "Forgetting foreign exporters as a stakeholder, or omitting the distinction between the production inefficiency triangle and the consumption loss triangle.",
      strategy: "Tariff stakeholder checklist: Consumers (lose CS) · Domestic firms (+PS) · Foreign exporters (lose revenue) · Govt (tariff rev) · Society (d1 + d2 DWL)",
    },
    {
      id: "exam-p1-q14",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "exchange-rates-regimes",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Discuss",
      marks: 15,
      question:
        "**[Paper 1 · Section C · Part (b) · 15 marks]** Using real-world examples, **discuss** the advantages and disadvantages of a **floating exchange rate** system compared with a **fixed or managed exchange rate** system.",
      hints: [
        "Define floating, fixed, and managed exchange rates clearly (including central-bank reserve/interest-rate intervention).",
        "Integrate specific real-world examples across regimes: e.g. UK GBP / Australian dollar (floating), Hong Kong HKD peg to USD (fixed), Singapore MAS S$NEER band (managed float).",
        "Evaluate across automatic BoP adjustment, domestic monetary independence, foreign-reserve requirements, trade/FDI certainty, inflation control, and speculative attacks.",
      ],
      modelAnswer:
        "Under a **floating exchange rate**, currency value is determined purely by market demand and supply in foreign exchange markets. Under a **fixed exchange rate**, the central bank pegs the currency to an anchor currency (or basket) via foreign-reserve buying/selling and interest-rate adjustments, while a **managed float** allows market movement within an undisclosed policy band.\n\nA major advantage of a **floating regime**—used by the **United Kingdom (GBP)** and **Australia (AUD)**—is **monetary policy independence**: the Bank of England and Reserve Bank of Australia can set domestic interest rates exclusively to target domestic inflation and unemployment rather than defending a currency peg. Second, floating rates offer **automatic Balance of Payments adjustment**: if a country runs a persistent current account deficit, excess currency supply depreciates the exchange rate, making exports more competitive and curbing imports (assuming the Marshall–Lerner condition holds). Third, central banks do not need to hold massive, low-yielding **foreign exchange reserves** to defend an artificial parity.\n\nHowever, floating rates carry major **drawbacks**. Speculative hot-money flows can cause sharp **exchange-rate volatility**, raising uncertainty for exporters and multinational investors planning long-term **FDI**—as witnessed when the British pound fell abruptly after the 2016 Brexit referendum and the September 2022 UK mini-budget. Moreover, sudden depreciation triggers **imported cost-push inflation**, especially in import-dependent economies, and may not cure deficits if export/import elasticities are low.\n\nConversely, a **fixed exchange rate**—such as **Hong Kong's Linked Exchange Rate System** pegging the HKD near 7.80 per US dollar since 1983—eliminates bilateral currency risk, fostering trade, financial-hub stability, and **low imported inflation** by importing US Federal Reserve credibility. Yet fixed pegs impose severe **policy sacrifice**: Hong Kong must mirror US interest-rate hikes even when its local property market or domestic growth is slowing, and pegs become vulnerable to **speculative attacks** whenever foreign reserves run low (as occurred during Thailand's 1997 Asian Financial Crisis baht collapse).\n\nBetween these extremes, **Singapore's Monetary Authority (MAS)** operates a **managed float (S$NEER)** against a trade-weighted currency basket, adjusting the slope and centre of the band to counter imported inflation directly (given Singapore's extreme trade openness where imports exceed 100% of GDP) while preserving flexibility against shocks.\n\n**Reasoned judgement:** No single regime suits every economy. Large, diversified economies like Australia or the UK gain more from **floating rates** that preserve domestic interest-rate autonomy, whereas tiny, ultra-open trading hubs like **Singapore or Hong Kong** benefit strongly from **managed or fixed stability** to anchor import prices and investor confidence—provided they maintain deep foreign reserves and disciplined fiscal fundamentals.",
      markScheme: [
        { point: "Defines floating, fixed, and managed exchange rate regimes accurately", keywords: ["market demand and supply", "anchor currency", "policy band"] },
        { point: "Explains monetary policy independence as a key advantage of floating rates", keywords: ["monetary policy independence", "domestic inflation"] },
        { point: "Integrates a real-world floating currency example (e.g. UK GBP or Australia AUD)", keywords: ["united kingdom", "australia"] },
        { point: "Explains automatic Balance of Payments self-correction via depreciation", keywords: ["automatic balance of payments", "marshall–lerner"] },
        { point: "Notes floating systems eliminate need to hold large foreign-exchange reserves", keywords: ["foreign exchange reserves", "artificial parity"] },
        { point: "Evaluates exchange-rate volatility deterring trade and long-term FDI", keywords: ["exchange-rate volatility", "fdi"] },
        { point: "Integrates a real-world floating volatility shock (e.g. Brexit 2016 or UK 2022 mini-budget)", keywords: ["brexit", "2022"] },
        { point: "Evaluates imported cost-push inflation risk from sharp currency depreciation", keywords: ["imported cost-push inflation", "import-dependent"] },
        { point: "Explains fixed-rate strengths: trade/FDI certainty and imported inflation credibility", keywords: ["currency risk", "credibility"] },
        { point: "Integrates a real-world fixed peg example (e.g. Hong Kong HKD-USD peg)", keywords: ["hong kong", "7.80"] },
        { point: "Evaluates loss of domestic monetary autonomy under fixed rates", keywords: ["policy sacrifice", "mirror us interest-rate"] },
        { point: "Evaluates vulnerability to speculative attacks and reserve depletion with real-world example (1997 Thai baht)", keywords: ["speculative attacks", "1997"] },
        { point: "Analyses a managed float middle ground with real-world example (Singapore MAS S$NEER)", keywords: ["singapore's monetary authority", "s$neer"] },
        { point: "Weighs country structural characteristics (size, openness, reserve depth)", keywords: ["trade openness", "diversified economies"] },
        { point: "Delivers a reasoned comparative conclusion linking optimal regime to economic structure", keywords: ["no single regime", "fiscal fundamentals"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Describing only floating vs fixed without discussing real-world managed floats (like Singapore's S$NEER) or failing to explain the loss of monetary autonomy under a peg.",
      strategy: "Compare across 4 lenses: Monetary independence · BoP adjustment · Inflation & Volatility · Reserves & Speculation",
    },
    {
      id: "exam-p1-q15",
      kind: "written",
      topicId: "4b-exchange-bop-development",
      guideRef: "growth-development-strategies",
      level: "SL",
      difficulty: "challenge",
      commandTerm: "Evaluate",
      marks: 15,
      question:
        "**[Paper 1 · Section C · Part (b) · 15 marks]** Using real-world examples, **evaluate** the effectiveness of **Foreign Direct Investment (FDI) and trade liberalization** compared with **government intervention and human-capital investment** in achieving sustainable economic development in low-income countries.",
      hints: [
        "Distinguish economic growth (rising real GDP) from multidimensional sustainable economic development (HDI, IHDI, poverty reduction, gender equity, environmental sustainability).",
        "Analyse FDI & trade liberalization (capital inflows, export jobs, technology spillovers vs profit repatriation, enclave growth, race-to-the-bottom standards) with concrete examples (e.g. Vietnam, Sub-Saharan Africa extractive FDI).",
        "Analyse government intervention & human capital (education, healthcare, infrastructure, microfinance/institutional quality — e.g. South Korea, Kenya M-Pesa, Rwanda health/education) and synthesize a balanced conclusion.",
      ],
      modelAnswer:
        "While **economic growth** measures rising real GDP, **sustainable economic development** is multidimensional—encompassing higher living standards, health and education (HDI), reduced inequality (IHDI), institutional inclusion, and environmental stewardship across generations. Economists debate whether low-income countries should prioritize market-oriented **FDI and trade liberalization** or state-led **intervention and human-capital investment**.\n\n**FDI and trade liberalization** directly break the domestic savings-and-investment bottleneck of the **poverty cycle**. Multinational corporations (MNCs) inject capital, modern technology, managerial skills, and global supply-chain access without adding sovereign debt. In **Vietnam**, opening to export-oriented FDI (including Samsung electronics manufacturing) and joining multilateral trade agreements helped lift millions out of absolute poverty, raised manufactured export share sharply, and boosted HDI steadily over three decades. Export expansion also generates foreign exchange to finance vital capital-goods imports.\n\nYet unmanaged FDI and rapid trade liberalization frequently fail to deliver **inclusive or sustainable development**. MNCs often engage in **profit repatriation** and transfer pricing, shrinking local tax revenues. Extractive-sector FDI—such as foreign oil and mining projects in parts of **Sub-Saharan Africa**—creates capital-intensive **enclave growth** with few local jobs, severe **environmental pollution**, and heightened inequality. Meanwhile, premature tariff elimination can wipe out fragile domestic infant industries and trap countries in volatile primary-commodity specialization.\n\nBy contrast, **government intervention and human-capital investment** target structural development barriers directly. Public spending on primary/secondary schooling (especially **girls' education**), universal rural healthcare, clean water, and transport infrastructure directly improves HDI and breaks intergenerational poverty. **South Korea's** transformation combined strategic industrial support with massive investments in universal education and engineering capacity, while **Rwanda's** community health insurance (*Mutuelles de Santé*) dramatically lowered child mortality and raised life expectancy. Complementary institutional reforms—securing property rights, curbing corruption, and supporting digital financial inclusion such as **Kenya's M-Pesa** mobile banking—empower small rural entrepreneurs.\n\nStill, state-led intervention has real **limitations**. Low-income governments face **narrow tax bases** and high **external debt servicing**, constraining fiscal capacity; weak governance can turn intervention into **corruption, rent-seeking, and inefficient state monopolies** that drain scarce budgets without lifting productivity.\n\n**Reasoned judgement:** Market-oriented FDI and interventionist human-capital policies are **complements rather than substitutes**. Without educated workers, reliable power grids, and transparent institutions, countries attract only low-wage or extractive FDI; conversely, without open export markets and private capital, public spending hits fiscal limits. Sustainable development succeeds best when governments invest in **human capital, clean infrastructure, and anti-corruption institutions** first—using that foundation to attract high-value, environmentally regulated FDI that transfers skills across the wider domestic economy.",
      markScheme: [
        { point: "Distinguishes economic growth from multidimensional sustainable economic development (HDI, IHDI, environment)", keywords: ["multidimensional", "hdi", "ihdi"] },
        { point: "Explains how FDI breaks the poverty cycle via capital, technology transfer, and non-debt financing", keywords: ["poverty cycle", "technology", "sovereign debt"] },
        { point: "Integrates a real-world export-oriented FDI success (e.g. Vietnam / Samsung)", keywords: ["vietnam", "samsung"] },
        { point: "Explains trade liberalization gains: export earnings and foreign exchange for capital imports", keywords: ["foreign exchange", "export expansion"] },
        { point: "Evaluates MNC profit repatriation and transfer pricing eroding local tax revenue", keywords: ["profit repatriation", "transfer pricing"] },
        { point: "Evaluates enclave extractive growth and environmental harm with real-world context (Sub-Saharan Africa)", keywords: ["enclave growth", "sub-saharan africa", "environmental pollution"] },
        { point: "Evaluates vulnerability of fragile infant industries under premature tariff removal", keywords: ["infant industries", "primary-commodity"] },
        { point: "Explains interventionist human-capital mechanism: girls' education, healthcare, infrastructure raising HDI", keywords: ["girls' education", "rural healthcare", "intergenerational poverty"] },
        { point: "Integrates a real-world human-capital/state-led example (e.g. South Korea or Rwanda health insurance)", keywords: ["south korea's", "rwanda's"] },
        { point: "Notes institutional and financial-inclusion enablers (property rights, Kenya M-Pesa)", keywords: ["property rights", "m-pesa"] },
        { point: "Evaluates fiscal constraints: narrow tax bases and external debt servicing in low-income nations", keywords: ["narrow tax bases", "external debt"] },
        { point: "Evaluates government failure: corruption, rent-seeking, and inefficient state enterprises", keywords: ["corruption", "rent-seeking"] },
        { point: "Weighs equity and environmental sustainability explicitly across both approaches", keywords: ["environmentally regulated", "inclusive"] },
        { point: "Identifies interdependence: human capital and institutions determine the quality of FDI attracted", keywords: ["complements rather than substitutes", "transparent institutions"] },
        { point: "Concludes with a reasoned sequenced strategy combining public capacity-building with regulated FDI", keywords: ["anti-corruption", "transfers skills"] },
      ],
      markbands: P1_PART_B_BANDS,
      commonError: "Treating GDP growth as identical to economic development, or presenting an unbalanced case without weighing MNC leakage/enclaves against government failure/fiscal limits.",
      strategy: "Anchor in Growth vs Sustainable Development → FDI/Trade pros & cons → Human Capital/State pros & cons → Complementary verdict",
    },
  ],
};
