// ---------------------------------------------------------------------------
// Internal Assessment (IA) Guidance — IB Diploma Economics (First Assessment 2022).
// Portfolio of 3 Commentaries: SL 30% / HL 20%, 3 × max 800 words,
// 45 marks total (3 × 14 marks Criteria A–E + 3 marks Criterion F Rubric).
// ---------------------------------------------------------------------------

export interface IaCriterionBand {
  marks: string;
  descriptor: string;
}

export interface IaCriterion {
  code: string;
  name: string;
  maxMarks: number;
  summary: string;
  topBandMustHave: string[];
  bands: IaCriterionBand[];
}

export interface IaMilestone {
  phase: string;
  timing: string;
  tasks: string[];
}

export interface IaSectionGuide {
  heading: string;
  targetWords: string;
  whatToInclude: string;
}

export const IA_GUIDE = {
  title: "IB Economics Portfolio of 3 Commentaries (IA)",
  subtitle: "First Assessment 2022 · SL 30% / HL 20% · 45 marks total (3 × 14 + 3 Crit F) · Max 800 words each",
  hoursNote: "Students write 3 independent commentaries based on 3 different published news articles from 3 different syllabus units (Unit 2 Microeconomics, Unit 3 Macroeconomics, Unit 4 Global Economy), each anchored to a different IB Key Concept.",
  wordLimit: 800,
  totalMarks: 45,
  weightSL: "30%",
  weightHL: "20%",
  keyChanges2025: [
    "Each commentary has a strict **800-word maximum** (examiners STOP reading at 800 words! Diagram labels, titles, quotes, citations, and data tables are excluded, but diagram captions/explanations count).",
    "Portfolio-wide **Criterion F (3 marks)** enforces 4 non-negotiable rules: (1) 3 different units (**Unit 2 Micro, Unit 3 Macro, Unit 4 Global**), (2) 3 different **IB Key Concepts** (chosen from the 9 Key Concepts), (3) 3 **different published news sources** (no academic blogs/textbooks/Wikipedia!), and (4) each article published **within 12 months** prior to writing the commentary.",
    "You MUST highlight ONLY the section(s) of the article you analyse (max ~1–2 pages) — choosing a rich, policy-focused news report (NOT an opinion piece that already does the economic evaluation for you!) is half the battle.",
    "Marks total **45**: each commentary is marked out of **14** (A Diagrams 3 + B Terminology 2 + C Application & Analysis 3 + D Key Concept 3 + E Evaluation 3), plus **3 marks** for Criterion F across the whole portfolio.",
  ],
  criteria: [
    {
      code: "A",
      name: "Diagrams (per commentary)",
      maxMarks: 3,
      summary: "Draws accurate, fully labelled, article-specific economic diagram(s) integrated seamlessly into the written explanation.",
      topBandMustHave: [
        "Diagram axes match the exact model (`Price of Sugar / SGD` & `Quantity of Sugary Drinks` for micro; `Price Level` & `Real GDP` for AD/AS — NEVER `P` & `Q` on macro!).",
        "All curves, original & shifted equilibria (`P₁, Q₁ → P₂, Q₂`), directional arrows, and shaded areas (tax revenue, DWL, subsidy cost) are cleanly labelled and directly referenced in prose.",
        "1–2 crisp, directly relevant diagrams beat 3 cluttered diagrams every time.",
      ],
      bands: [
        { marks: "3", descriptor: "Relevant, accurate, correctly labelled diagram(s) fully explained and integrated with the article's real-world context." },
        { marks: "2", descriptor: "Relevant diagram(s) included with minor labelling/explanation gaps or incomplete integration with the text." },
        { marks: "1", descriptor: "Diagram included but contains significant errors, generic labels, or minimal explanation." },
      ],
    },
    {
      code: "B",
      name: "Terminology (per commentary)",
      maxMarks: 2,
      summary: "Uses precise, accurate IB economic terminology consistently throughout the 800-word commentary.",
      topBandMustHave: [
        "Weaves exact economic terms naturally (`negative externality of consumption`, `price inelastic demand`, `expansionary monetary policy`, `current account deficit`) instead of dumping dictionary definitions at the start!",
        "Zero misuse of technical terms (never confuse 'shift in demand' with 'movement along demand', or 'inflation' with 'higher price of one good').",
      ],
      bands: [
        { marks: "2", descriptor: "Economic terminology is used accurately and consistently throughout the commentary." },
        { marks: "1", descriptor: "Some relevant terminology is used, with occasional inaccuracies or vague lay phrasing." },
      ],
    },
    {
      code: "C",
      name: "Application and Analysis (per commentary)",
      maxMarks: 3,
      summary: "Applies relevant economic theory accurately to specific quotes/data from the news extract with clear causal chains.",
      topBandMustHave: [
        "Directly quotes short data/facts from the article (`'carbon tax raised to S$25/tonne'`) and links them causally to the theoretical mechanism and diagram shifts.",
        "Explains *why* and *how* the policy/shock changes price, output, welfare, or macroeconomic objectives — not merely summarizing the article!",
      ],
      bands: [
        { marks: "3", descriptor: "Relevant economic theory is accurately and effectively applied to the article with clear, logical analytical chains." },
        { marks: "2", descriptor: "Relevant theory is applied to the article, though analysis has minor gaps or occasionally slips into article summary." },
        { marks: "1", descriptor: "Limited or mostly descriptive link between economic theory and the article." },
      ],
    },
    {
      code: "D",
      name: "Key Concept (per commentary)",
      maxMarks: 3,
      summary: "Identifies ONE distinct IB Key Concept (different across all 3 commentaries!) and weaves it analytically through the commentary.",
      topBandMustHave: [
        "Explicitly names ONE of the 9 Key Concepts (`Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, Intervention`) on the cover sheet AND in the prose.",
        "Integrates the Key Concept substantively in BOTH analysis and evaluation (e.g. evaluating whether a carbon tax achieves **Sustainability** & allocative **Efficiency** at the cost of regressive **Equity** impacts) — never just a token sentence at the end!",
        "Uses **3 DIFFERENT Key Concepts** across Commentary 1, Commentary 2, and Commentary 3.",
      ],
      bands: [
        { marks: "3", descriptor: "An appropriate Key Concept is identified and its link to the article is thoroughly explained and developed throughout." },
        { marks: "2", descriptor: "A relevant Key Concept is identified with a partially developed or mostly implicit link." },
        { marks: "1", descriptor: "Key Concept is named superficially with minimal explanation of its link to the article." },
      ],
    },
    {
      code: "E",
      name: "Evaluation (per commentary)",
      maxMarks: 3,
      summary: "Weighs short-run vs long-run impacts, stakeholder winners/losers, elasticity/assumptions, and policy trade-offs to reach a balanced judgement.",
      topBandMustHave: [
        "Evaluates **specific stakeholders** from the article (low-income households, domestic SMEs, exporters, government budget) rather than generic textbook bullets.",
        "Applies **elasticities, magnitudes, time lags, and ceteris paribus assumptions** (e.g. PED inelasticity makes a fuel tax raise revenue but cut emissions weakly in the short run).",
        "Ends with a crisp, evidence-backed **overall judgement** anchored to your chosen Key Concept.",
      ],
      bands: [
        { marks: "3", descriptor: "Judgements are supported by effective, balanced evaluation of stakeholders, assumptions, and short/long-run trade-offs specific to the article." },
        { marks: "2", descriptor: "Some relevant evaluation is attempted, though partly generic, unbalanced, or weakly linked to the article." },
        { marks: "1", descriptor: "Minimal or asserted evaluation without economic justification." },
      ],
    },
    {
      code: "F",
      name: "Rubric Requirements (whole portfolio)",
      maxMarks: 3,
      summary: "Awarded once across the complete 3-commentary portfolio for strict compliance with all IBO structural rules.",
      topBandMustHave: [
        "3 commentaries cover **3 different units**: Unit 2 (Microeconomics), Unit 3 (Macroeconomics), and Unit 4 (Global Economy).",
        "3 commentaries use **3 different Key Concepts** from the official 9.",
        "3 articles come from **3 different credible news sources** (e.g. *The Straits Times*, *Reuters*, *Financial Times*) published **≤ 12 months** before each commentary is written.",
        "Every commentary is strictly **≤ 800 words** (include exact word count on every cover sheet!).",
      ],
      bands: [
        { marks: "3", descriptor: "All portfolio rubric requirements (3 units, 3 Key Concepts, 3 sources, <12 months old, ≤800 words each) are completely met." },
        { marks: "2", descriptor: "One rubric requirement is missed across the portfolio." },
        { marks: "1", descriptor: "Two rubric requirements are missed." },
      ],
    },
  ] as IaCriterion[],
  milestones: [
    {
      phase: "1. Commentary 1 — Microeconomics (Unit 2)",
      timing: "DP1 Term 2 (Jan–Mar Year 12)",
      tasks: [
        "Pick a recent news report (< 12 months old) on a real micro policy (e.g. sugar/carbon tax, rent cap, EV subsidy, congestion charge).",
        "Lock in Key Concept #1 (e.g. Intervention, Efficiency, or Sustainability), draw 1–2 crisp custom diagrams, and write ≤ 800 words.",
        "Submit for your single teacher feedback round and finalize.",
      ],
    },
    {
      phase: "2. Commentary 2 — Macroeconomics (Unit 3)",
      timing: "DP1 Term 3 / DP2 Term 1 (May–Sep)",
      tasks: [
        "Choose a DIFFERENT news publication (< 12 months old) covering central-bank rate moves, fiscal budgets, inflation, or inequality.",
        "Lock in Key Concept #2 (distinct from #1 — e.g. Economic well-being, Equity, or Change) and draft ≤ 800 words with AD/AS or Lorenz diagrams.",
      ],
    },
    {
      phase: "3. Commentary 3 — Global Economy (Unit 4)",
      timing: "DP2 Term 1 Late (Oct–Nov Year 13)",
      tasks: [
        "Choose a THIRD distinct news source (< 12 months old) on tariffs, exchange-rate intervention (e.g. MAS S$NEER), trade blocs, or FDI/development.",
        "Lock in Key Concept #3 (distinct from #1 & #2 — e.g. Interdependence or Choice) and write ≤ 800 words.",
      ],
    },
    {
      phase: "4. Portfolio Audit (Criterion F = 3/3)",
      timing: "DP2 Term 2 (Jan–Feb Year 13)",
      tasks: [
        "Verify all 3 articles are highlighted cleanly, dated within 12 months of writing, from 3 different sources, covering Units 2, 3 & 4 with 3 different Key Concepts.",
        "Triple-check every word count is safely under 790 words and compile the final portfolio PDF.",
      ],
    },
  ] as IaMilestone[],
  exemplarStructure: [
    { heading: "1. Brief Context & Key Concept Hook", targetWords: "60–80 words", whatToInclude: "Name the article's real-world policy/event, state the economic problem concisely, and explicitly introduce your chosen Key Concept — NO long article summary!" },
    { heading: "2. Economic Analysis + Custom Diagram(s)", targetWords: "300–340 words", whatToInclude: "Insert 1–2 crisp, article-labelled diagrams (`Price of…`, `Real GDP`), quote exact figures from the extract, explain the causal transmission step-by-step, and link directly to your Key Concept." },
    { heading: "3. Balanced Evaluation (Stakeholders, SR/LR, Assumptions)", targetWords: "320–360 words", whatToInclude: "Weigh 2–3 deep evaluation points: stakeholder winners/losers (equity vs efficiency), elasticity/magnitude limits, short-run vs long-run time lags, and ceteris paribus risks." },
    { heading: "4. Reasoned Judgement & Key Concept Synthesis", targetWords: "50–70 words", whatToInclude: "Deliver a nuanced final verdict directly answering whether the policy achieves its objective through the lens of your Key Concept." },
  ] as IaSectionGuide[],
  moderatorTraps: [
    "Choosing an opinion/op-ed column (like *The Economist* leaders) that already tells you the economic evaluation — moderators penalize copying the journalist's arguments; pick factual news reports!",
    "Repeating the same Key Concept or using two articles from the same newspaper (e.g. two BBC articles) — instant Criterion F penalty!",
    "Wasting 150 words summarizing the article or writing textbook glossary definitions — you only have 800 words total, so every sentence must analyse or evaluate!",
    "Using generic `P` and `Q` labels on AD/AS diagrams or failing to reference the diagram points (`P₁ → P₂`, shaded welfare area) inside your prose.",
    "Dropping the Key Concept into only the final sentence instead of integrating it organically across analysis and evaluation (caps Criterion D at 1/3).",
  ],
  checklist: [
    "Commentary 1 covers Unit 2 (Micro), Commentary 2 covers Unit 3 (Macro), and Commentary 3 covers Unit 4 (Global).",
    "All 3 commentaries use 3 DIFFERENT IB Key Concepts chosen from the official 9.",
    "All 3 articles come from 3 DIFFERENT credible news publications (zero blogs, encyclopedias, or textbooks).",
    "Every article was published within 12 months prior to the date the commentary was written.",
    "Relevant extracts are highlighted cleanly on each attached news article.",
    "Every commentary is strictly ≤ 800 words (checked excluding diagram labels, quotes, and tables).",
    "Every diagram uses exact article-specific axis labels, shift arrows, and shaded areas referenced in prose.",
    "Each Key Concept is developed analytically across BOTH analysis and evaluation (not tacked on at the end).",
    "Evaluation weighs article-specific stakeholders, short-run vs long-run impacts, elasticities, and trade-offs.",
    "Each commentary finishes with a crisp, balanced overall judgement.",
  ],
};
