import type { TopicExtras } from "../types";

export const extras: TopicExtras = {
  hook: "For 105 minutes on HL Paper 3, you stop writing general essays and step into the seat of a Ministry of Finance chief economist: calculate the exact tax wedge, multiplier, or tariff deadweight loss, then put your name behind ONE justified national policy recommendation.",
  didYouKnow: [
    "One-third of HL Paper 3 (20 out of 60 marks) sits inside just two 10-mark Policy Recommendation questions — mastering the D-A-T-E-C structure often lifts an HL grade by a full boundary on its own.",
    "The **Tinbergen Rule** (from 1969 Nobel laureate Jan Tinbergen) states that hitting N independent economic targets (such as cutting carbon AND protecting low-income equity) requires at least N independent policy instruments — which is why Band 8–10 Paper 3 answers pair a primary policy with a targeted complementary measure.",
    "Because bilateral exchange rates are reciprocals, a 50% crash in a country's currency requires a **100% appreciation** just to return to its original level — never invert a depreciation percentage by flipping the sign!",
    "Small trade-open hubs like Singapore and Ireland have much smaller fiscal multipliers (`k ≈ 0.5–1.0`) than continental economies like the US (`k ≈ 1.4–1.8`) because a high marginal propensity to import (`MPM`) rapidly leaks fiscal injections abroad.",
    "On the Balance of Payments, building up central-bank foreign reserves is entered with a **minus (−) sign** in the Financial Account because the central bank is purchasing foreign assets (an outflow of domestic funds).",
  ],
  activities: [
    {
      title: "The 90-Second Stimulus Boxing Drill",
      emoji: "⏱️",
      materials: ["Any unseen IB HL Paper 3 past question", "4 coloured highlighters or pens", "A 90-second timer"],
      steps: [
        "Set a strict 90-second timer BEFORE writing a single word of a 10-mark Policy Recommendation.",
        "Box **Colour 1**: the target problem metrics (e.g. 6.4% structural unemployment, −$15bn CA deficit).",
        "Box **Colour 2**: your OWN calculated results from earlier sub-parts (`k`, `DWL`, `ATR`, `PED`).",
        "Box **Colour 3**: the binding constraint blocking rival policies (high debt, 0.5% zero lower bound, WTO retaliation, high MPM).",
        "Box **Colour 4**: the vulnerable stakeholder group who needs a complementary mitigator.",
      ],
      maths: "Four boxed anchors guarantee your D-A-T-E-C paragraphs stay rooted in data rather than drifting into a generic Paper 1 essay.",
    },
    {
      title: "Build Your Personal Weighted CPI Basket",
      emoji: "🛒",
      materials: ["A typical monthly student spending log (4 categories)", "Calculator or spreadsheet"],
      steps: [
        "Split your monthly budget into four categories (e.g. Food, Transport, Tech/Subscriptions, Leisure) and compute decimal weights summing to `1.00`.",
        "Record Year 1 prices as index `100` for each category.",
        "Simulate a realistic Year 2 price shock (e.g. +18% on food, +5% on transport, −10% on tech, +6% on leisure).",
        "Compute BOTH the unweighted simple average index AND your weighted CPI = `Σ(w_i × I_i)`.",
      ],
      maths: "Comparing weighted vs unweighted CPI immediately reveals why a 15% jump in a high-weight item (like Shelter at 0.40) dominates inflation far more than a 25% spike in a tiny category.",
    },
    {
      title: "Paper 3 Linear Tax-Wedge Lab",
      emoji: "⚖️",
      materials: ["Graph paper or the Paper 3 Linear Market Solver widget", "Two market templates: necessity (`b = 2`) vs luxury (`b = 8`)"],
      steps: [
        "Keep supply fixed at `Q_s = −20 + 6P` and impose a `$10` specific tax on both markets.",
        "For the necessity (`Q_d = 140 − 2P`), compute consumer share `d / (b + d) = 6 / 8 = 75%` (`+$7.50` price jump) and `DWL`.",
        "For the luxury (`Q_d = 260 − 8P`), compute consumer share `6 / 14 = 42.9%` (`+$4.29` price jump) and `DWL`.",
        "Compare tax revenue vs deadweight loss across both goods and link the insight to Ramsey taxation and equity.",
      ],
      maths: "Inelastic goods raise larger, steadier tax revenues with smaller DWL triangles — but push a heavier, more regressive share of the tax wedge onto buyers!",
    },
  ],
  bonusDiagrams: [
    {
      title: "HL Paper 3 Exam Pacing Blueprint (105 Minutes · 60 Marks)",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 215" role="img" aria-label="Horizontal timeline showing optimal 105-minute pacing for IB Economics HL Paper 3 across Question 1 calculations, Question 1 10-mark policy, Question 2 calculations, Question 2 10-mark policy, and final 5-minute units and sign audit">
  <rect width="560" height="215" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">Optimal 105-Minute Pacing Plan for HL Paper 3 (60 Marks)</text>
  <text x="280" y="44" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#64748b">~1.65 minutes per mark + dedicated 5-minute quantitative units &amp; sign audit</text>
  <!-- Timeline bars: total width 520 (from x=20 to x=540), 105 min => ~4.95 px/min
       Q1 calc: 32m -> 158px (20..178)
       Q1 10m:  18m -> 89px  (180..269)
       Q2 calc: 32m -> 158px (271..429)
       Q2 10m:  18m -> 89px  (431..520)
       Audit:    5m -> 20px  (522..542) -> adjust slightly for readability -->
  <rect x="20" y="64" width="150" height="68" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="95" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="800" fill="#1e40af">Q1 Parts (a)–(e)</text>
  <text x="95" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#1e3a8a">32 mins · 20 marks</text>
  <text x="95" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Calc + diagrams</text>

  <rect x="176" y="64" width="96" height="68" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="224" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="800" fill="#92400e">Q1 Policy</text>
  <text x="224" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#78350f">18 mins · 10m</text>
  <text x="224" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">D-A-T-E-C ★</text>

  <rect x="278" y="64" width="150" height="68" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="353" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="800" fill="#065f46">Q2 Parts (a)–(e)</text>
  <text x="353" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#064e3b">32 mins · 20 marks</text>
  <text x="353" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#334155">Calc + diagrams</text>

  <rect x="434" y="64" width="106" height="68" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="487" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="800" fill="#5b21b6">Q2 Policy + Audit</text>
  <text x="487" y="105" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#4c1d95">18m + 5m check</text>
  <text x="487" y="121" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#4c1d95">Units · 2 d.p. · Signs</text>

  <!-- Bottom checkpoint bar -->
  <line x1="20" y1="156" x2="540" y2="156" stroke="#94a3b8" stroke-width="1.5"/>
  <circle cx="20" cy="156" r="4" fill="#1f2937"/>
  <text x="24" y="174" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#334155">0 min</text>
  <circle cx="274" cy="156" r="4.5" fill="#b45309"/>
  <text x="274" y="174" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="800" fill="#b45309">50 min checkpoint: Q1 DONE!</text>
  <circle cx="540" cy="156" r="4" fill="#047857"/>
  <text x="538" y="174" text-anchor="end" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#047857">105 min</text>
  <text x="280" y="198" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#475569">Hard rule: Move on to Question 2 at minute 50 so Question 2's 10-mark Policy NEVER gets rushed.</text>
</svg>`,
      caption:
        "Never let a single tricky 2-mark algebra sub-part steal time from the 10-mark Policy Recommendation at minute 82. Treat minute 50 as a hard boundary between Question 1 and Question 2.",
    },
    {
      title: "Asymmetric Bilateral Exchange-Rate Swings",
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 220" role="img" aria-label="Comparison chart showing why a 10 percent, 20 percent, 33.3 percent, or 50 percent depreciation of Currency A corresponds to an asymmetric 11.1 percent, 25 percent, 50 percent, or 100 percent appreciation of Currency B">
  <rect width="560" height="220" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">Why Exchange-Rate % Swings Are Always Asymmetric</text>
  <text x="280" y="44" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" fill="#64748b">When Currency A falls by x%, Currency B rises by x / (1 − x/100)%</text>
  <!-- Four comparison cards -->
  <rect x="24" y="64" width="118" height="118" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="83" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">A falls −10%</text>
  <text x="83" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#64748b">1 / 0.90 = 1.111</text>
  <text x="83" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#047857">B rises +11.1%</text>
  <text x="83" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">Gap: +1.1 pp</text>

  <rect x="155" y="64" width="118" height="118" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
  <text x="214" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">A falls −20%</text>
  <text x="214" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#64748b">1 / 0.80 = 1.250</text>
  <text x="214" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#047857">B rises +25.0%</text>
  <text x="214" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">Gap: +5.0 pp</text>

  <rect x="286" y="64" width="118" height="118" rx="10" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="345" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#b91c1c">A falls −33.3%</text>
  <text x="345" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#78350f">1 / 0.667 = 1.500</text>
  <text x="345" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#047857">B rises +50.0%</text>
  <text x="345" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">Gap: +16.7 pp</text>

  <rect x="417" y="64" width="119" height="118" rx="10" fill="#fee2e2" stroke="#dc2626"/>
  <text x="476" y="88" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="800" fill="#991b1b">A falls −50%</text>
  <text x="476" y="112" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#7f1d1d">1 / 0.50 = 2.000</text>
  <text x="476" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="#047857">B rises +100%</text>
  <text x="476" y="166" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7f1d1d">Gap: +50.0 pp!</text>

  <text x="280" y="204" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" fill="#475569">Paper 3 habit: Always invert the exchange rate first so the currency asked for sits at 1 unit.</text>
</svg>`,
      caption:
        "The larger the depreciation, the wider the asymmetry between Currency A's percentage drop and Currency B's reciprocal percentage appreciation.",
    },
  ],
  history: {
    title: "Jan Tinbergen & the Birth of Quantitative Policy Modelling (1936–1969)",
    story:
      "Before the 1930s, economic policy debates were mostly verbal arguments without system-wide equations. In 1936, Dutch theoretical physicist-turned-economist **Jan Tinbergen** constructed the world's first national econometric policy model (24 equations mapping the Dutch economy) to test whether currency devaluation or public works would best pull the Netherlands out of the Great Depression. Tinbergen went on to share the **very first Nobel Memorial Prize in Economic Sciences in 1969** and formulated the enduring **Tinbergen Rule**: a government trying to achieve multiple independent targets — such as cutting inflation, shrinking unemployment, and narrowing inequality — needs at least as many independent policy instruments. Every time you solve a Paper 3 multiplier or tax equation and then pair ONE primary policy with ONE complementary measure in your 10-mark recommendation, you are practising Tinbergen's exact discipline!",
  },
};
