// ---------------------------------------------------------------------------
// Central subject configuration for Year 12–13 IB Diploma Economics (SL & HL).
// Aligned strictly to the IBO Economics Guide (First Assessment May 2022).
// ---------------------------------------------------------------------------
import type { IBCommandTerm, IBLevel, Strand } from "./types.ts";

export interface VaultQuickCard {
  title: string;
  badge: string;
  level?: IBLevel;
  lines: string[];
}

export interface ExamTip {
  icon: string;
  title: string;
  text: string;
}

export interface CommandTermDef {
  term: IBCommandTerm;
  ao: "AO1" | "AO2" | "AO3";
  meaning: string;
  examTip: string;
}

export interface ExamPaperMeta {
  id: string;
  expectedCount: number;
  level: IBLevel;
  paperType: string;
}

export const SUBJECT = {
  storageKey: "y12economics",
  cookieName: "y12economics_session",
  shortName: "IB Economics",
  fullName: "Year 12–13 IB Diploma Economics (SL/HL)",
  shortTitle: "IB DP Economics",
  badge: "IB DP Economics · First Assessment 2022",
  groupLabel: "Group 3 · Individuals & Societies",
  icon: "📈",
  themeColorLight: "#b45309",
  themeColorDark: "#1c1206",
  provisionalBanner: null as string | null,
  tutorName: "Professor Keynes",
  tutorEmoji: "📈",
  tutorScope: "IB Diploma Economics (SL & HL, First Assessment 2022)",
  tutorSystemPrompt: `You are Professor Keynes, a warm, rigorous IB Diploma Economics (SL & HL, First Assessment 2022) tutor inside Vanishree's Year 12–13 revision hub at Tanglin Trust School, Singapore.

How you teach (Art of Problem Solving discovery style, aligned strictly to IBO FA2022 Economics):
- If the learner asks about a question they are working on, do NOT give the full answer immediately. Ask one guiding question or give only the next small nudge (e.g. "Which curve shifts — MSC or MSB — and which triangle represents the welfare loss?", "Before computing the Keynesian multiplier, did you sum ALL three marginal leakages: MPS + MPT + MPM?"), then stop and let them reason.
- Only give a complete worked solution if they explicitly say they give up, or the context says they have already answered (then highlight IB diagram labelling rules, real-world examples for Paper 1 Part b, CLASPP/stakeholder evaluation, and exact quantitative working).
- Follow the IB Economics FA2022 syllabus strictly: Units 1–4 (\`1.1–4.10\`), the **9 Key Concepts** (*Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, Intervention*), accurate official weightings (**HL:** Paper 1 20%, Paper 2 30%, Paper 3 30%, IA 20%; **SL:** Paper 1 30%, Paper 2 40%, IA 30%), and the 3-Commentary Portfolio IA (3 × 800 words, 45 marks total).
- Double-check every elasticity (PED/YED/PES), consumer/producer surplus & deadweight-loss triangle, MC=MR profit rectangle, real GDP / CPI inflation, progressive marginal vs average tax, Keynesian multiplier \`k = 1/(1 − MPC)\`, comparative advantage opportunity cost, tariff welfare calculation, and BoP balance before replying.

Style:
- Concise: usually 2–6 sentences. British spelling. Warm, encouraging, never patronising.
- You may use **bold**, inline \`code\`, and simple "- " bullet lists.

Safety and scope:
- Only help with IB Diploma Economics, quantitative economic modelling, diagrams, and IA/exam technique. For anything else, kindly steer back to Economics.
- Never ask for or repeat personal information.`,
  vaultTitle: "IB Economics Formulas, Diagrams & 9-Concepts Vault",
  vaultShort: "Econ Toolkit",
  vaultIcon: "📈",
  vaultBlurb: "All IB Economics SL & HL formulas, diagram checklist, the 9 Key Concepts, real-world example bank, and IB examiner mark-savers.",
  vaultSearchPlaceholder: "Filter e.g. PED, deadweight loss, multiplier, CPI, tariff, Gini, J-curve…",
  examTitle: "IB Economics Mock Papers (Paper 1, Paper 2 & HL Paper 3)",
  examShort: "Mock Papers",
  examBlurb: "Paper 1 (Extended Response with real-world examples), Paper 2 (Unseen Data Response), HL Paper 3 (Quantitative Modelling & 10m Policy), plus Diagnostic MCQs.",
  iaNavLabel: "IA Portfolio",
  iaTitle: "IB Economics Portfolio of 3 Commentaries (IA)",
  cramBanner: "Stop losing easy IB Economics marks: ALWAYS use real-world examples in Paper 1 Part (b), label BOTH axes & equilibrium arrows on every diagram, check `k = 1/(MPS + MPT + MPM)` on HL Paper 3, and weigh short-run vs long-run stakeholder trade-offs!",
  searchPlaceholder: "Search, e.g. “elasticity”, “externality”, “multiplier”, “tariff” or “Phillips curve”",
  sitcomSeriesName: "IB Economics Studio (Phase C)",
  sitcomBlurb: "Narrated IB Economics episodes and vertical Concept Shorts will arrive in Phase C once the Year 9 video batch finishes rendering.",
} as const;

export const EXAM_PAPERS_META: readonly ExamPaperMeta[] = [
  { id: "exam-mcq", expectedCount: 25, level: "SL", paperType: "Diagnostic MCQ Bank · Units 1–4 & HL" },
  { id: "exam-p1", expectedCount: 15, level: "SL", paperType: "Paper 1 · Extended Response (Part a 10m + Part b 15m)" },
  { id: "exam-p2", expectedCount: 15, level: "SL", paperType: "Paper 2 · Data Response (Unseen Case Studies, 40m)" },
  { id: "exam-p3-hl", expectedCount: 15, level: "HL", paperType: "Paper 3 (HL Only) · Quantitative Modelling & 10m Policy" },
] as const;

export const STRAND_STYLES_MAP: Record<Strand, { slug: string; text: string; bg: string; soft: string; border: string }> = {
  "Unit 1: Intro to Economics": { slug: "unit-1", text: "text-s-number", bg: "bg-s-number", soft: "bg-s-number/15", border: "border-s-number" },
  "Unit 2: Microeconomics": { slug: "unit-2", text: "text-s-ratio", bg: "bg-s-ratio", soft: "bg-s-ratio/15", border: "border-s-ratio" },
  "Unit 3: Macroeconomics": { slug: "unit-3", text: "text-s-algebra", bg: "bg-s-algebra", soft: "bg-s-algebra/15", border: "border-s-algebra" },
  "Unit 4: The Global Economy": { slug: "unit-4", text: "text-s-geometry", bg: "bg-s-geometry", soft: "bg-s-geometry/15", border: "border-s-geometry" },
  "HL Paper 3: Policy & Modelling": { slug: "hl-paper3", text: "text-s-stats", bg: "bg-s-stats", soft: "bg-s-stats/15", border: "border-s-stats" },
};

export const VAULT_QUICK_CARDS: readonly VaultQuickCard[] = [
  {
    title: "1. The 9 IB Economics Key Concepts",
    badge: "All Papers & IA",
    level: "SL",
    lines: [
      "**Scarcity · Choice · Efficiency · Equity · Economic well-being · Sustainability · Change · Interdependence · Intervention**.",
      "Every IA Commentary MUST choose **1 distinct Key Concept** (3 different concepts across your 3 commentaries!) and weave it analytically throughout.",
      "Distinguish **equity** (normative fairness) from **equality** (identical shares), and **allocative efficiency** (`P = MC`, `MB = MC`) from **productive efficiency** (`min AC`).",
    ],
  },
  {
    title: "2. Microeconomics Formulas (Elasticities & Welfare)",
    badge: "Unit 2 & P3",
    level: "SL",
    lines: [
      "`PED = |%ΔQ_d / %ΔP|` · `YED = %ΔQ_d / %ΔY` (keep sign! `> 0` normal, `< 0` inferior) · `PES = %ΔQ_s / %ΔP`.",
      "**Surplus Triangles:** `CS = ½ × Q_e × (P_intercept − P_e)` · `PS = ½ × Q_e × (P_e − P_supply_int)`.",
      "**Indirect Tax / Subsidy [HL]:** Govt tax revenue `= (t) × Q_t` · Deadweight welfare loss `DWL = ½ × t × (Q_e − Q_t)`.",
      "**Firm Profit [HL]:** Profit max where `MC = MR` · Revenue max where `MR = 0` · Shut-down price `P < AVC` (SR) / `P < AC` (LR).",
    ],
  },
  {
    title: "3. Macroeconomics Formulas (GDP, CPI, Tax & Multiplier)",
    badge: "Unit 3 & P3",
    level: "SL",
    lines: [
      "`GDP = C + I + G + (X − M)` · `GNI = GDP + net factor income from abroad` · `Real GDP = (Nominal GDP / Deflator) × 100`.",
      "`CPI = (Cost of basket_t / Cost of basket_base) × 100` · `Inflation % = [(CPI₂ − CPI₁) / CPI₁] × 100`.",
      "**Progressive Tax [HL]:** `Average tax rate = (Total tax / Total income) × 100%` vs `Marginal tax rate = ΔTax / ΔIncome` (top bracket rate!).",
      "**Keynesian Multiplier [HL]:** `k = 1 / (1 − MPC) = 1 / (MPS + MPT + MPM)` · `ΔReal GDP = k × ΔInjection`.",
    ],
  },
  {
    title: "4. Global Economy Formulas (Trade, Tariffs & BoP)",
    badge: "Unit 4 & P3",
    level: "HL",
    lines: [
      "**Tariff Welfare [HL]:** Govt tariff revenue `= (P_w+t − P_w) × (Q_4 − Q_3)` · Two DWL triangles: production inefficiency `½ × t × (Q_3 − Q_1)` + consumption loss `½ × t × (Q_2 − Q_4)`.",
      "**Comparative Advantage [HL]:** `Opportunity cost of 1 X = (Max Y / Max X)` — specialize in the good with the LOWER opportunity cost!",
      "**Balance of Payments:** `Current Account + Capital Account + Financial Account (+ Errors & Omissions) = 0`.",
      "**Marshall–Lerner [HL]:** Depreciation improves the trade balance in the long run iff `|PED_X| + |PED_M| > 1` (producing the **J-curve** over time).",
    ],
  },
];

export const EXAM_TIPS: readonly ExamTip[] = [
  {
    icon: "🌍",
    title: "Paper 1 Part (b) (15 marks) REQUIRES Real-World Examples",
    text: "Without specific, accurate real-world examples (country, policy, year/context), Paper 1 Part (b) is capped in mid-band! Build a tight bank of 8–10 versatile examples across micro, macro & global.",
  },
  {
    icon: "📐",
    title: "Every IB Economics diagram needs 4 mandatory elements",
    text: "1) Exact axis labels (e.g. `Price Level` & `Real GDP` for AD/AS — NEVER `P` & `Q`!), 2) fully labelled curves (`S = MPC`, `MSC`, `D = MPB = MSB`), 3) dotted equilibrium lines & arrows showing the shift, and 4) shaded welfare/profit/tax areas referenced in prose.",
  },
  {
    icon: "🧮",
    title: "HL Paper 3 (30%) ends with a 10-mark Policy Recommendation",
    text: "Never write a generic essay on the 10-mark Policy Q! Cite YOUR Paper 3 numerical calculations & text extracts directly, recommend ONE clear policy, justify how it solves the problem, and evaluate 2–3 stakeholder & time-lag trade-offs.",
  },
  {
    icon: "⚖️",
    title: "Use CLASPP / Stakeholders to unlock Level 4 Evaluation",
    text: "Evaluate every policy across **Short-run vs Long-run**, **Stakeholders** (consumers, low-income households, producers, government budget), **Assumptions/Elasticities**, and **Priorities** (efficiency vs equity).",
  },
];

export const IB_COMMAND_TERMS: readonly CommandTermDef[] = [
  { term: "Define", ao: "AO1", meaning: "Give the precise economic meaning of a concept, formula, or term.", examTip: "Hit every technical qualifier (e.g. 'responsiveness of quantity demanded to a change in price, ceteris paribus')." },
  { term: "State", ao: "AO1", meaning: "Give a specific value, name, or brief answer without explanation.", examTip: "Keep it razor-sharp — one crisp fact or figure with units." },
  { term: "Calculate", ao: "AO2", meaning: "Obtain a numerical answer showing the relevant stages in the working.", examTip: "Write formula → exact substitution → final figure with currency/unit (`$`, `%`, `million`) to 2 d.p." },
  { term: "Draw", ao: "AO2", meaning: "Represent by means of a labelled, accurate economic diagram.", examTip: "Label BOTH axes accurately, show original & shifted curves, equilibrium coordinates, and shaded areas." },
  { term: "Explain", ao: "AO2", meaning: "Give a detailed account including economic causes, mechanisms, and diagram links.", examTip: "Walk step-by-step through the transmission mechanism linking your diagram to real economic behaviour." },
  { term: "Distinguish", ao: "AO2", meaning: "Make clear the differences between two economic concepts or policies.", examTip: "Contrast BOTH sides explicitly ('Economic growth measures rising Real GDP, whereas economic development is multidimensional…')." },
  { term: "Outline", ao: "AO2", meaning: "Give a brief account or summary of a mechanism or policy.", examTip: "Cover 2–3 key causal links cleanly." },
  { term: "Compare and contrast", ao: "AO3", meaning: "Give an account of similarities AND differences between two policies or market structures throughout.", examTip: "Explicitly alternate similarities and differences across efficiency, equity, and welfare." },
  { term: "Discuss", ao: "AO3", meaning: "Offer a considered and balanced review including a range of arguments, stakeholders, and real-world evidence.", examTip: "Pair strong analysis + diagrams with balanced stakeholder, short/long-run, and elasticity evaluation." },
  { term: "Evaluate", ao: "AO3", meaning: "Make an appraisal by weighing up the strengths, limitations, and trade-offs of a policy or model.", examTip: "Weigh competing effects (efficiency vs equity, time lags, fiscal cost) and conclude with a reasoned judgement." },
  { term: "Examine", ao: "AO3", meaning: "Consider an economic argument or assumption in a way that uncovers interrelationships and limitations.", examTip: "Interrogate ceteris paribus assumptions, magnitudes, and unintended consequences." },
  { term: "Recommend", ao: "AO3", meaning: "Present a justified policy choice supported by data, calculations, and trade-off evaluation (HL Paper 3 10m).", examTip: "Commit to ONE primary policy (plus complementary support), cite data from the stimulus, and evaluate constraints." },
];
