import type { TopicExtras } from "../types.ts";

const SVG_PRICE_CEILING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" role="img" aria-label="Binding price ceiling below equilibrium showing persistent shortage Q_d minus Q_s, potential parallel market price P_black, and deadweight welfare loss triangle">
  <rect x="0" y="0" width="460" height="300" fill="none"/>
  <!-- Coordinates: Axes (70,25)-(70,255)-(420,255) -->
  <!-- D: (70,35) to (370,235), y = 35 + (2/3)(x-70) -->
  <!-- S: (70,235) to (370,35), y = 235 - (2/3)(x-70) -->
  <!-- Equilibrium E: x = 220, y = 135 -->
  <!-- Binding ceiling P_max at y = 185: on S -> x = 145 (Q_s); on D -> x = 295 (Q_d) -->
  <!-- At Q_s (x=145), height on D is y = 35 + (2/3)(75) = 85 (P_black) -->
  <!-- Shaded Deadweight Loss triangle: (145,85), (145,185), (220,135) -->
  <polygon points="145,85 145,185 220,135" fill="#c2410c" fill-opacity="0.25"/>
  <!-- Axes -->
  <line x1="70" y1="22" x2="70" y2="255" stroke="#6b563c" stroke-width="2"/>
  <line x1="70" y1="255" x2="420" y2="255" stroke="#6b563c" stroke-width="2"/>
  <polygon points="70,17 65,27 75,27" fill="#6b563c"/>
  <polygon points="425,255 415,250 415,260" fill="#6b563c"/>
  <text x="62" y="24" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Price ($)</text>
  <text x="420" y="276" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Quantity</text>
  <!-- Curves -->
  <line x1="70" y1="35" x2="370" y2="235" stroke="#0d9488" stroke-width="2.6"/>
  <text x="375" y="238" font-size="12" font-weight="700" fill="#0d9488">D</text>
  <line x1="70" y1="235" x2="370" y2="35" stroke="#b45309" stroke-width="2.6"/>
  <text x="375" y="40" font-size="12" font-weight="700" fill="#b45309">S</text>
  <!-- Price Ceiling Line -->
  <line x1="70" y1="185" x2="390" y2="185" stroke="#c2410c" stroke-width="2.4"/>
  <text x="392" y="180" font-size="11" font-weight="700" text-anchor="end" fill="#c2410c">Binding Ceiling (P_max)</text>
  <!-- Dashed Projections -->
  <line x1="70" y1="135" x2="220" y2="135" stroke="#6b563c" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="220" y1="135" x2="220" y2="255" stroke="#6b563c" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="70" y1="85" x2="145" y2="85" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="145" y1="85" x2="145" y2="255" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="295" y1="185" x2="295" y2="255" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Shortage Bracket -->
  <line x1="145" y1="205" x2="295" y2="205" stroke="#c2410c" stroke-width="2"/>
  <polygon points="145,205 153,201 153,209" fill="#c2410c"/>
  <polygon points="295,205 287,201 287,209" fill="#c2410c"/>
  <text x="220" y="222" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">Shortage (Q_d − Q_s)</text>
  <!-- Key Points -->
  <circle cx="220" cy="135" r="4" fill="#6b563c"/>
  <circle cx="145" cy="185" r="4" fill="#c2410c"/>
  <circle cx="295" cy="185" r="4" fill="#c2410c"/>
  <circle cx="145" cy="85" r="4" fill="#7c3aed"/>
  <!-- Labels -->
  <text x="62" y="89" font-size="11" font-weight="700" text-anchor="end" fill="#7c3aed">P_black</text>
  <text x="62" y="139" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">P_e</text>
  <text x="62" y="189" font-size="11" font-weight="700" text-anchor="end" fill="#c2410c">P_max</text>
  <text x="145" y="272" font-size="11" font-weight="700" text-anchor="middle" fill="#24190a">Q_s</text>
  <text x="220" y="272" font-size="11" font-weight="700" text-anchor="middle" fill="#6b563c">Q_e</text>
  <text x="295" y="272" font-size="11" font-weight="700" text-anchor="middle" fill="#24190a">Q_d</text>
  <text x="176" y="139" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">DWL</text>
  <text x="72" y="293" font-size="10.5" fill="#6b563c">Unserved buyers willing to pay up to P_black fuel underground parallel markets.</text>
</svg>`;

const SVG_SUBSIDY_WELFARE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" role="img" aria-label="Per-unit subsidy shifting supply downwards showing lower consumer price P_c, higher producer price P_p, total government expenditure rectangle, and overproduction deadweight loss triangle">
  <rect x="0" y="0" width="460" height="300" fill="none"/>
  <!-- D: (70,35) to (370,235), y = 35 + (2/3)(x-70) -->
  <!-- S1: (70,210) to (340,30), y = 210 - (2/3)(x-70) -->
  <!-- E1: 35 + (2/3)u = 210 - (2/3)u => (4/3)u = 175 => u = 131.25 => x = 201, y = 122.5 -->
  <!-- Subsidy s = 60px downward: S2: (70,270) clipped at (100,250) to (380,63.3) => y = 270 - (2/3)(x-70) -->
  <!-- E2: 35 + (2/3)u = 270 - (2/3)u => (4/3)u = 235 => u = 176.25 => x = 246, y = 152.5 (P_c) -->
  <!-- On S1 at x=246: y = 210 - (2/3)(176.25) = 92.5 (P_p) -> check 152.5 - 92.5 = 60! -->
  <!-- Total Govt Cost rectangle: x=70..246, y=92.5..152.5 -->
  <rect x="70" y="92.5" width="176" height="60" fill="#0369a1" fill-opacity="0.14"/>
  <!-- Overproduction DWL triangle: (201,122.5), (246,92.5), (246,152.5) -->
  <polygon points="201,122.5 246,92.5 246,152.5" fill="#c2410c" fill-opacity="0.28"/>
  <!-- Axes -->
  <line x1="70" y1="20" x2="70" y2="255" stroke="#6b563c" stroke-width="2"/>
  <line x1="70" y1="255" x2="420" y2="255" stroke="#6b563c" stroke-width="2"/>
  <polygon points="70,15 65,25 75,25" fill="#6b563c"/>
  <polygon points="425,255 415,250 415,260" fill="#6b563c"/>
  <text x="62" y="22" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Price ($)</text>
  <text x="420" y="276" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Quantity</text>
  <!-- Curves -->
  <line x1="70" y1="35" x2="370" y2="235" stroke="#0d9488" stroke-width="2.6"/>
  <text x="374" y="238" font-size="12" font-weight="700" fill="#0d9488">D</text>
  <line x1="70" y1="210" x2="340" y2="30" stroke="#b45309" stroke-width="2.6"/>
  <text x="344" y="34" font-size="12" font-weight="700" fill="#b45309">S₁</text>
  <line x1="100" y1="250" x2="380" y2="63" stroke="#15803d" stroke-width="2.6"/>
  <text x="383" y="66" font-size="12" font-weight="700" fill="#15803d">S₂ = S₁ − s</text>
  <!-- Downward shift arrow -->
  <line x1="305" y1="62" x2="305" y2="108" stroke="#15803d" stroke-width="2"/>
  <polygon points="305,114 300,104 310,104" fill="#15803d"/>
  <text x="313" y="92" font-size="11" font-weight="700" fill="#15803d">Subsidy = $s</text>
  <!-- Dashed projections -->
  <line x1="70" y1="92.5" x2="246" y2="92.5" stroke="#15803d" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="70" y1="122.5" x2="201" y2="122.5" stroke="#6b563c" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="70" y1="152.5" x2="246" y2="152.5" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="201" y1="122.5" x2="201" y2="255" stroke="#6b563c" stroke-width="1.3" stroke-dasharray="4,3"/>
  <line x1="246" y1="92.5" x2="246" y2="255" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- Key points -->
  <circle cx="201" cy="122.5" r="4" fill="#6b563c"/>
  <circle cx="246" cy="152.5" r="4.5" fill="#0369a1"/>
  <circle cx="246" cy="92.5" r="4" fill="#15803d"/>
  <!-- Axis labels -->
  <text x="62" y="96" font-size="11" font-weight="700" text-anchor="end" fill="#15803d">P_p</text>
  <text x="62" y="126" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">P_e</text>
  <text x="62" y="156" font-size="11" font-weight="700" text-anchor="end" fill="#0369a1">P_c</text>
  <text x="201" y="272" font-size="11" font-weight="700" text-anchor="middle" fill="#6b563c">Q_e</text>
  <text x="246" y="272" font-size="11" font-weight="700" text-anchor="middle" fill="#24190a">Q_sub</text>
  <!-- Regions -->
  <text x="135" y="116" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">Govt Cost</text>
  <text x="135" y="130" font-size="10" text-anchor="middle" fill="#0369a1">s × Q_sub</text>
  <text x="230" y="126" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">DWL</text>
  <text x="72" y="293" font-size="10.5" fill="#6b563c">Beyond Q_e, MC &gt; MB: taxpayer cost exceeds combined CS + PS gains by the orange DWL triangle.</text>
</svg>`;

export const extras: TopicExtras = {
  hook:
    "Why can a Singapore car permit auction exceed S$140,000, why did a 24p UK sugar tax make soft-drink giants secretly rewrite their recipes overnight, and how did switching ONE tiny checkbox lift workplace pension participation from 47% to 88%? Everything starts right here in Unit 2A.",
  didYouKnow: [
    "At Amsterdam's Schiphol Airport, etching a tiny black housefly onto men's urinals cut bathroom spillage by 80% — Richard Thaler and Cass Sunstein's most famous example of a near-zero-cost behavioural **nudge**.",
    "Singapore's Human Organ Transplant Act (HOTA) uses an **opt-out default choice**, giving Singapore dramatically higher potential donor pools than opt-in systems without ever banning anyone from opting out.",
    "When the UK announced its tiered Soft Drinks Industry Levy in 2016 — two full years BEFORE it took effect in 2018 — over half of affected drinks manufacturers reformulated recipes early to dodge the higher tax band.",
    "Because coffee trees take 3–5 years from planting to first full harvest (ultra-low **PES**) and daily coffee drinkers rarely switch to water (low **PED**), a single Brazilian frost can double global bean prices within weeks.",
    "After Berlin's 2020 rent freeze (*Mietendeckel*) capped rents below equilibrium, listings of regulated flats fell by more than 40% within months while unregulated suburban rents jumped as displaced tenants spilled outward.",
  ],
  activities: [
    {
      title: "Play the Ultimatum Game at Dinner (Bounded Selfishness Lab)",
      emoji: "🎲",
      materials: ["10 coins (or snacks)", "2 family members or classmates"],
      steps: [
        "Give Player A 10 coins and instruct them to propose ANY split with Player B (e.g. 9 for A, 1 for B).",
        "Tell Player B: if you ACCEPT, both keep the split; if you REJECT, BOTH players get 0 coins!",
        "Run 3 trials with different partners (try an unfair 8/2 split once) and record acceptance rates.",
        "Compare your result with neoclassical rational theory, which predicts Player B should ALWAYS accept even 9/1 because 1 > 0.",
      ],
      maths:
        "Across global behavioural experiments, offers below 25–30% are rejected roughly half the time — direct empirical proof of **bounded selfishness** and fairness norms.",
    },
    {
      title: "Run a 2-Minute Anchoring & Framing Mini-Experiment",
      emoji: "🧠",
      materials: ["Two index cards or phone notes", "6–8 friends split into Group A and Group B"],
      steps: [
        "Ask Group A: 'Is the average annual rainfall in Singapore more or less than **500 mm**? Now guess the exact figure.'",
        "Ask Group B the exact same question, changing ONLY the anchor: 'more or less than **5,000 mm**? Now guess the exact figure.'",
        "Compute the average guess of each group (Singapore's actual average is roughly 2,400 mm!).",
        "Bonus framing test: ask half whether they'd undergo a surgery with a '90% survival rate' vs the other half with a '10% mortality rate'.",
      ],
      maths:
        "Group B's mean guess almost always sits hundreds of millimetres higher than Group A's — illustrating how irrelevant anchors distort supposedly rational estimation.",
    },
    {
      title: "School Canteen PED & Total Revenue Audit",
      emoji: "🥪",
      materials: ["Notebook", "Menu prices of 4 canteen or local cafe items"],
      steps: [
        "Pick 4 contrasting items: e.g. plain bottled water, branded bubble tea, a daily lunch set, and an optional pastry.",
        "Score each item on all four SPLAT determinants (Substitutes, Proportion of budget, Necessity/habit, Time horizon).",
        "Predict whether each item has PED < 1 (inelastic) or PED > 1 (elastic).",
        "Advise the vendor: to raise daily Total Revenue ({{TR = P * Q}}), which items should have a 10% price HIKE and which should get a 10% student DISCOUNT?",
      ],
      maths:
        "Whenever {{PED < 1}}, a +10% price hike raises TR because {{|%ΔQ_d| < 10%}}; whenever {{PED > 1}}, a −10% discount raises TR because {{%ΔQ_d > 10%}}.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Binding Price Ceiling: Shortage, Parallel Market & Deadweight Loss",
      svg: SVG_PRICE_CEILING,
      caption:
        "Setting P_max below P_e contracts output to Q_s while lifting quantity demanded to Q_d. The vertical distance on D at Q_s shows the maximum parallel-market price (P_black) unserved buyers are willing to pay.",
    },
    {
      title: "Per-Unit Subsidy: Taxpayer Expenditure & Overproduction Welfare Loss",
      svg: SVG_SUBSIDY_WELFARE,
      caption:
        "A per-unit subsidy $s lowers consumer price to P_c and raises producer net price to P_p = P_c + s. Total government outlay (s × Q_sub) exceeds the combined CS + PS gain by the orange DWL triangle where MC > MB.",
    },
  ],
  history: {
    title: "From Marshall's Scissors (1890) to Kahneman & Thaler's Behavioural Revolution",
    story:
      "For over a century after Adam Smith, economists argued fiercely over whether a good's value came from production costs (supply) or buyer satisfaction (demand). In 1890, Cambridge economist **Alfred Marshall** settled the debate forever in *Principles of Economics*, comparing supply and demand to the **two blades of a pair of scissors** — asking which blade cuts the paper makes no sense because both work together! In the very same book, Marshall invented the modern Price-on-vertical-axis diagram, **Consumer Surplus**, and **Price Elasticity of Demand**.\n\nA century later, psychologists **Daniel Kahneman** (2002 Nobel Prize) and Amos Tversky, followed by economist **Richard Thaler** (2017 Nobel Prize), turned the microscope onto Marshall's rational consumer. Their discovery of **loss aversion**, **framing**, **bounded self-control**, and **choice architecture** transformed real-world policy worldwide — launching dedicated Behavioural Insights ('Nudge') Units in the UK, Singapore, Australia, and the OECD.",
  },
};
