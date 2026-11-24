import type { MarkBand, TopicPractice } from "../../types";

const PAPER1_A_10M_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question's specific demands; relevant economic theory is stated vaguely with minimal diagram integration or terminology.",
    indicators: ["Defines basic terms loosely", "Diagram missing or unlabelled"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some understanding of the specific demands; relevant economic theory and diagram(s) are included and partially explained with appropriate terminology.",
    indicators: ["Accurate diagram drawn", "Explains at least two stakeholder effects partially"],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Good understanding of the specific demands; relevant theory is clearly explained, diagrams are accurately integrated into the analysis, and economic terminology is used appropriately.",
    indicators: ["Links diagram coordinates/areas cleanly to prose", "Covers consumers, producers, government, and foreign exporters"],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Thorough understanding of the specific demands; relevant theory is fully and clearly explained with precise terminology and seamless, rigorous diagram integration.",
    indicators: ["Explains transfers vs deadweight welfare losses precisely", "Uses exact economic terminology throughout"],
  },
];

const PAPER1_B_15M_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Little understanding of the specific demands of the question; weak or descriptive assertions with no real-world examples or effective evaluation.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some understanding of the demands; basic theory and diagram(s) included, with superficial evaluation or vague reference to examples.",
    indicators: ["One-sided argument or generic examples without analysis"],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Understanding of the specific demands; relevant theory and diagram(s) explained clearly, supported by real-world example(s), with attempts at balanced evaluation.",
    indicators: ["Real-world example cited accurately", "Both sides presented clearly"],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Good understanding of the demands; thorough explanation using accurate terminology, integrated diagram(s), effective real-world examples, and clear synthesis/evaluation.",
    indicators: ["Weighs short-run vs long-run and stakeholder trade-offs", "Applies named real-world examples directly to arguments"],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "In-depth understanding of the demands; rigorous theory and diagrams seamlessly integrated with well-chosen real-world examples and sustained, balanced evaluation reaching a reasoned judgement.",
    indicators: ["Nuanced synthesis across stakeholders, elasticities, and context", "Clear, well-justified concluding judgement"],
  },
];

const HL_P3_10M_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Policy recommendation is unclear or unsupported by quantitative evidence from the scenario.",
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "A policy is recommended with partial explanation of its mechanism, limited use of calculated figures, and weak evaluation.",
  },
  {
    band: "5–7",
    marks: [5, 7],
    descriptor: "A clear policy is recommended and supported by accurate economic theory and specific numerical data, with some evaluation of drawbacks or alternatives.",
    indicators: ["Quotes exact welfare/budget calculations", "Compares at least two policy options"],
  },
  {
    band: "8–10",
    marks: [8, 10],
    descriptor: "One decisive, well-justified policy recommendation anchored directly in the quantitative findings, explaining transmission mechanisms rigorously and evaluating stakeholder, fiscal, and long-run trade-offs plus complementary measures.",
    indicators: ["Directly contrasts tariff, quota, and subsidy figures", "Evaluates opportunity cost of public funds and complementary policies"],
  },
];

const EVAL_8M_BANDS: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Limited descriptive points with minimal economic theory or evaluation.",
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Relevant theory explained clearly but largely one-sided or lacking depth in evaluation.",
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Balanced analysis weighing theoretical strengths against real-world limitations with accurate terminology.",
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Rigorous, well-structured evaluation contrasting static theory with dynamic real-world conditions and reaching a nuanced judgement.",
  },
];

export const practice: TopicPractice = {
  // =========================================================================
  // DIAGNOSTIC QUIZ — 10 Questions (4 MCQs balanced 0,1,2,3 + 6 Short Qs)
  // =========================================================================
  quiz: [
    {
      id: "4a-trade-integration-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "trade-protection-diagrams",
      question:
        "Which trade protection policy expands domestic production while leaving the market price paid by domestic consumers unchanged at the world price `P_w`?",
      options: [
        "A domestic production subsidy paid per unit to local producers",
        "A specific import tariff levied per unit at customs borders",
        "A binding physical import quota restricting foreign volume",
        "An administrative inspection delay raising importer compliance costs",
      ],
      answerIndex: 0,
      hints: [
        "Which tool shifts `S_domestic` downwards without taxing or capping imports?",
      ],
      explanation:
        "A domestic production subsidy lowers domestic producers' marginal costs while tariff-free imports remain available at `P_w`, keeping consumer prices pinned at `P_w` and eliminating consumption deadweight loss.",
    },
    {
      id: "4a-trade-integration-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      question:
        "At the free-trade world price of **$25 per tonne**, domestic firms supply **15 thousand tonnes** of grain and domestic consumers demand **70 thousand tonnes**. Calculate the volume of free-trade imports (in thousand tonnes).",
      answer: { type: "number", value: 55 },
      traps: [
        {
          spec: { type: "number", value: 85 },
          feedback: "Imports equal domestic demand MINUS domestic supply (`Q_2 − Q_1`), not their sum.",
        },
      ],
      hints: [
        "Free-trade imports bridge the shortage between domestic quantity demanded and domestic quantity supplied at `P_w`.",
      ],
      solution: [
        "Use `M_0 = Q_2 − Q_1`.",
        "`M_0 = 70 − 15 = 55` thousand tonnes.",
      ],
    },
    {
      id: "4a-trade-integration-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "benefits-trade-comparative-hl",
      question:
        "Using all of its resources, Country A can produce a maximum of **80 tonnes of tea** OR **20 bicycles**. Calculate Country A's opportunity cost of producing **1 bicycle** (in tonnes of tea).",
      answer: { type: "number", value: 4 },
      traps: [
        {
          spec: { type: "number", value: 0.25 },
          feedback: "That is the opportunity cost of 1 tonne of tea (`20 / 80`). For 1 bicycle, use 'Other Over This': `80 / 20`.",
        },
      ],
      hints: [
        "Recall the output-table rule: 'Other Over This'.",
        "Divide maximum tea output (`80`) by maximum bicycle output (`20`).",
      ],
      solution: [
        "Opportunity cost of 1 bicycle = `{{80/20}}` = **4 tonnes of tea**.",
      ],
    },
    {
      id: "4a-trade-integration-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "economic-integration-wto",
      question:
        "Which stage of economic integration abolishes internal tariffs between members AND sets a **Common External Tariff (CET)** against non-members, without yet permitting free labour migration?",
      options: [
        "A Preferential Trade Area (PTA)",
        "A Free Trade Area (FTA)",
        "A Customs Union",
        "A Monetary Union",
      ],
      answerIndex: 2,
      hints: [
        "Recall the cumulative ladder: PTA → FTA → ___ → Common Market → Monetary Union.",
      ],
      explanation:
        "A Customs Union adds a Common External Tariff (CET) onto an FTA's zero internal tariffs, whereas free factor mobility arrives at the Common Market stage and a shared currency at the Monetary Union stage.",
    },
    {
      id: "4a-trade-integration-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      question:
        "A small country levies an **$8 per-unit tariff** on imported timber (world price `$30`). At the tariff-inclusive price of `$38`, domestic firms supply **25 thousand units** and domestic consumers demand **60 thousand units**. Calculate government tariff revenue (in `$ thousand`).",
      answer: { type: "number", value: 280 },
      traps: [
        {
          spec: { type: "number", value: 480 },
          feedback: "Tariff revenue is collected only on imported units (`60 − 25 = 35` thousand), not total domestic demand (`60` thousand).",
        },
      ],
      hints: [
        "First find post-tariff imports: `Q_4 − Q_3`.",
        "Multiply post-tariff imports by the `$8` tariff.",
      ],
      solution: [
        "Post-tariff imports = `60 − 25 = 35` thousand units.",
        "Government tariff revenue = `35 × $8` = **$280 thousand**.",
      ],
    },
    {
      id: "4a-trade-integration-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      question:
        "A **$10 per-unit import tariff** raises domestic output from **30 thousand** to **48 thousand** units. Calculate the **production inefficiency deadweight welfare loss** (in `$ thousand`).",
      answer: { type: "number", value: 90 },
      traps: [
        {
          spec: { type: "number", value: 180 },
          feedback: "Remember that deadweight loss is a triangle — multiply by `{{1/2}}`!",
        },
      ],
      hints: [
        "Production DWL is the left-hand triangle between `Q_1` and `Q_3` with height `t`.",
        "Use `{{1/2}} × (Q_3 − Q_1) × t`.",
      ],
      solution: [
        "Base = `48 − 30 = 18` thousand units; height = `$10`.",
        "Production DWL = `{{1/2}} × 18 × 10` = **$90 thousand**.",
      ],
    },
    {
      id: "4a-trade-integration-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "arguments-for-against-protection",
      question:
        "Why can imposing a steep tariff on imported steel unintentionally reduce employment in a country's automobile manufacturing sector?",
      options: [
        "Because steel tariffs force domestic steel mills to cut output below free-trade levels",
        "Because higher steel prices raise automakers' input costs and reduce export competitiveness",
        "Because foreign buyers are legally barred from purchasing vehicles made with domestic steel",
        "Because steel tariffs immediately lower domestic consumer prices for imported automobiles",
      ],
      answerIndex: 1,
      hints: [
        "Steel is a key raw-material input for carmakers.",
        "What happens to downstream firms' costs and global price competitiveness when input prices jump?",
      ],
      explanation:
        "Raising domestic steel prices inflates production costs for downstream steel-using industries like automakers, shrinking profit margins, raising vehicle prices, and reducing export competitiveness and employment.",
    },
    {
      id: "4a-trade-integration-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      question:
        "At world price `$40`, domestic output is **20 thousand tonnes** and domestic demand is **80 thousand tonnes**. A **$12 per-tonne domestic production subsidy** increases domestic output to **35 thousand tonnes**. Calculate total government subsidy expenditure (in `$ thousand`).",
      answer: { type: "number", value: 420 },
      traps: [
        {
          spec: { type: "number", value: 240 },
          feedback: "The subsidy is paid on post-subsidy output `Q_3` (`35` thousand), not initial output `Q_1` (`20` thousand).",
        },
        {
          spec: { type: "number", value: 180 },
          feedback: "The government must pay `$12` on every domestically produced tonne (`35` thousand), not just the `15` thousand extra tonnes.",
        },
      ],
      hints: [
        "Government pays the subsidy `s` on *every* post-subsidy domestic unit (`Q_3`).",
        "Multiply `35` thousand tonnes by `$12`.",
      ],
      solution: [
        "Government subsidy expenditure = `Q_3 × s = 35 × $12` = **$420 thousand**.",
      ],
    },
    {
      id: "4a-trade-integration-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "economic-integration-wto",
      question:
        "When joining a Customs Union causes a country to stop importing shoes from a lower-cost non-member and switch to a higher-cost union partner, economists call this welfare-reducing shift:",
      options: [
        "Trade creation",
        "Predatory dumping",
        "Trade deflection",
        "Trade diversion",
      ],
      answerIndex: 3,
      hints: [
        "Notice imports shifted *away* from the world's lowest-cost producer toward a higher-cost bloc partner.",
        "This effect reduces global allocative efficiency.",
      ],
      explanation:
        "Trade diversion occurs when preferential tariff elimination inside a trading bloc combined with a Common External Tariff shifts imports from a lower-cost non-member to a higher-cost member country.",
    },
    {
      id: "4a-trade-integration-quiz-q10",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "economic-integration-wto",
      question:
        "State the stage of economic integration that combines a Common Market with a single shared currency and a single central bank.",
      answer: {
        type: "text",
        accept: ["Monetary Union", "Currency Union"],
        display: "Monetary Union",
      },
      hints: [
        "Think of the highest stage on the 5-stage integration ladder (represented by the Eurozone).",
      ],
      solution: [
        "A **Monetary Union** combines a Common Market with a shared currency and unified central bank.",
      ],
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS — EXACTLY 2 PAPERS × 15 QUESTIONS = 30 QUESTIONS
  // =========================================================================
  papers: [
    // -----------------------------------------------------------------------
    // PRACTICE PAPER 1 — IB Paper 1 Essays & Structured SL/HL Data Questions
    // -----------------------------------------------------------------------
    {
      id: "4a-trade-integration-p1",
      title: "Practice Paper 1 — IB Paper 1 Essays & Structured SL/HL Data Questions",
      questions: [
        {
          id: "4a-trade-integration-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "economic-integration-wto",
          question:
            "State the core WTO non-discrimination principle requiring that any tariff reduction granted to one trading partner be extended equally to all other WTO members.",
          answer: {
            type: "text",
            accept: [
              "Most-Favoured-Nation",
              "Most Favoured Nation",
              "Most-Favored-Nation",
              "Most Favored Nation",
              "MFN",
            ],
            display: "Most-Favoured-Nation",
          },
          hints: [
            "Its standard three-letter abbreviation is MFN.",
          ],
          solution: [
            "The **Most-Favoured-Nation (MFN)** principle prevents tariff discrimination among WTO members outside approved trading blocs.",
          ],
        },
        {
          id: "4a-trade-integration-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "Under free trade, the world price of wheat is **$120 per tonne**. Domestic producers supply **30 thousand tonnes** and domestic buyers demand **95 thousand tonnes**. Calculate total domestic expenditure on **imported** wheat (in `$ million`).",
          answer: { type: "number", value: 7.8, tolerance: 0.01 },
          traps: [
            {
              spec: { type: "number", value: 11.4 },
              feedback: "That is total expenditure on ALL wheat (`95k × $120`). Subtract domestic output (`30k`) first to isolate imports.",
            },
          ],
          hints: [
            "First calculate import volume: `Q_2 − Q_1 = 95,000 − 30,000` tonnes.",
            "Multiply import volume by the `$120` world price and convert to `$ million`.",
          ],
          solution: [
            "Free-trade imports = `95,000 − 30,000 = 65,000` tonnes.",
            "Import expenditure = `65,000 × $120 = $7,800,000` = **$7.8 million**.",
          ],
        },
        {
          id: "4a-trade-integration-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "benefits-trade-comparative-hl",
          question:
            "With identical resources, **Country M** can produce at most **120 tonnes of soybeans** OR **40 machines**, whereas **Country N** can produce at most **50 tonnes of soybeans** OR **25 machines**. State which country has a **comparative advantage in machines**.",
          answer: {
            type: "text",
            accept: ["Country N", "N"],
            display: "Country N",
          },
          traps: [
            {
              spec: { type: "text", accept: ["Country M", "M"] },
              feedback: "Country M has *absolute* advantage in machines (`40 > 25`), but its opportunity cost is `120/40 = 3` soybeans, higher than Country N's `50/25 = 2` soybeans.",
            },
          ],
          hints: [
            "Calculate each country's opportunity cost of 1 machine (`Max Soybeans / Max Machines`).",
            "Compare `120/40` for Country M against `50/25` for Country N; the lower value wins comparative advantage.",
          ],
          solution: [
            "Country M OC of 1 machine = `{{120/40}} = 3` tonnes of soybeans.",
            "Country N OC of 1 machine = `{{50/25}} = 2` tonnes of soybeans.",
            "Since `2 < 3`, **Country N** has the comparative advantage in machines.",
          ],
        },
        {
          id: "4a-trade-integration-p1-q04",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "benefits-trade-comparative-hl",
          marks: 4,
          question:
            "Explain two distinct reasons why opening a small economy to free international trade raises domestic consumer welfare and productive efficiency.",
          hints: [
            "Think about unit production costs for small domestic markets (LRAC curve).",
            "Also consider how foreign competitors affect local prices, variety, and domestic monopoly power.",
          ],
          modelAnswer:
            "First, accessing global export markets enables domestic firms in small economies to expand production volume and exploit economies of scale, moving downwards along their long-run average cost curve so average unit costs fall and productive efficiency improves. Second, tariff-free imports intensify competition against domestic monopolies, forcing prices downwards toward the world price while expanding consumer choice and variety, which directly increases consumer surplus.",
          markScheme: [
            {
              point: "Explains access to larger global markets enabling economies of scale.",
              keywords: ["economies of scale", "global export", "expand production"],
            },
            {
              point: "Links larger scale to falling long-run average cost (LRAC) and productive efficiency.",
              keywords: ["average cost", "unit costs fall", "productive efficiency"],
            },
            {
              point: "Explains foreign competition eroding local monopoly power and lowering prices.",
              keywords: ["competition", "monopolies", "world price"],
            },
            {
              point: "Links lower prices and greater product variety to higher consumer surplus.",
              keywords: ["variety", "consumer surplus", "choice"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "In a small economy's steel market (`P_w = $300/tonne`), free-trade domestic supply is **15 thousand tonnes** and demand is **80 thousand tonnes**. A **$60/tonne tariff** raises domestic price to `$360`, shifting domestic supply to **25 thousand tonnes** and demand to **65 thousand tonnes**. Calculate government tariff revenue (in `$ million`).",
          answer: { type: "number", value: 2.4, tolerance: 0.01 },
          traps: [
            {
              spec: { type: "number", value: 3.9 },
              feedback: "You multiplied pre-tariff imports (`65k`) by `$60`. Use *post-tariff* imports (`65k − 25k = 40k`).",
            },
          ],
          hints: [
            "Find post-tariff import quantity: `Q_4 − Q_3 = 65 − 25` thousand tonnes.",
            "Multiply `40,000` tonnes by `$60` and convert to `$ million`.",
          ],
          solution: [
            "Post-tariff imports = `65,000 − 25,000 = 40,000` tonnes.",
            "Government tariff revenue = `40,000 × $60 = $2,400,000` = **$2.4 million**.",
          ],
        },
        {
          id: "4a-trade-integration-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "Using the same steel market (`P_w = $300`, tariff `$60`, `Q_1 = 15k`, `Q_3 = 25k`, `Q_4 = 65k`, `Q_2 = 80k` tonnes), calculate the **total deadweight welfare loss** caused by the tariff (in `$ million`).",
          answer: { type: "number", value: 0.75, tolerance: 0.005 },
          traps: [
            {
              spec: { type: "number", value: 1.5 },
              feedback: "You omitted the `{{1/2}}` factor for the area of the two triangles!",
            },
            {
              spec: { type: "number", value: 0.3 },
              feedback: "`$0.3 million` is only the production DWL triangle — remember to add consumption DWL (`$0.45 million`).",
            },
          ],
          hints: [
            "Compute the production DWL triangle: `{{1/2}} × (25,000 − 15,000) × $60`.",
            "Compute the consumption DWL triangle: `{{1/2}} × (80,000 − 65,000) × $60`, then sum both in `$ million`.",
          ],
          solution: [
            "Production DWL = `{{1/2}} × 10,000 × $60 = $300,000` ($0.30 million).",
            "Consumption DWL = `{{1/2}} × 15,000 × $60 = $450,000` ($0.45 million).",
            "Total deadweight welfare loss = `$0.30m + $0.45m` = **$0.75 million**.",
          ],
        },
        {
          id: "4a-trade-integration-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "trade-protection-diagrams",
          marks: 4,
          question:
            "Explain how a specific import tariff shifts the world supply curve and affects three stakeholder groups in a small importing economy.",
          hints: [
            "Start with `S_world` shifting vertically upwards by the tariff `t` to `P_w + t`.",
            "Trace exact output/quantity changes for local producers (`Q_1 → Q_3`), local consumers (`Q_2 → Q_4`), and overseas suppliers.",
          ],
          modelAnswer:
            "A specific tariff shifts the horizontal world supply curve vertically upwards from `P_w` to `P_w + t`. Local producers benefit because they receive the higher price and expand output from `Q_1` to `Q_3`, raising producer surplus and industry employment. Local consumers lose because they pay the elevated price and reduce consumption from `Q_2` to `Q_4`, losing consumer surplus. Overseas exporters also lose as import volume contracts from `Q_2 − Q_1` to `Q_4 − Q_3`, cutting their export revenues.",
          markScheme: [
            {
              point: "Correctly states horizontal world supply shifts upwards by the per-unit tariff to `P_w + t`.",
              keywords: ["vertically upwards", "horizontal", "p_w + t"],
            },
            {
              point: "Explains gain to local producers (higher price, expanded output `Q_1` to `Q_3`, higher producer surplus).",
              keywords: ["producer surplus", "expand output", "q_1"],
            },
            {
              point: "Explains loss to local consumers (higher price, reduced quantity `Q_2` to `Q_4`, lower consumer surplus).",
              keywords: ["consumer surplus", "reduce consumption", "q_4"],
            },
            {
              point: "Explains loss to overseas exporters due to shrinking import volumes and revenues.",
              keywords: ["overseas exporters", "export revenues", "contracts"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q08",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "trade-protection-diagrams",
          marks: 4,
          question:
            "Compare and contrast how an import tariff and a domestic production subsidy affect buyer prices, deadweight welfare losses, and public finances.",
          hints: [
            "Similarity: both expand domestic production from `Q_1` to `Q_3` and create production inefficiency DWL.",
            "Differences: contrast buyer prices (`P_w + t` vs `P_w`), consumption DWL, and government revenue vs expenditure.",
          ],
          modelAnswer:
            "Both instruments shield local firms by expanding domestic output from `Q_1` to `Q_3` and generating production inefficiency as higher-cost local firms displace cheaper overseas suppliers. However, while a tariff pushes retail prices up to `P_w + t` and creates consumption deadweight loss, a subsidy shifts domestic supply rightwards so shoppers continue paying `P_w` with zero consumption loss. Finally, a tariff generates customs tax revenue for the treasury, whereas a subsidy requires direct budgetary expenditure (`Q_3 × s`), imposing an opportunity cost on taxpayers.",
          markScheme: [
            {
              point: "Identifies key similarity: both expand domestic output and create production inefficiency DWL.",
              keywords: ["production inefficiency", "higher-cost", "expand"],
            },
            {
              point: "Contrasts consumer price impact: tariff raises price to `P_w + t`, whereas subsidy leaves price at `P_w`.",
              keywords: ["retail prices", "continue paying", "p_w"],
            },
            {
              point: "Contrasts consumption welfare: tariff causes consumption DWL while subsidy incurs zero consumption loss.",
              keywords: ["zero consumption", "consumption deadweight"],
            },
            {
              point: "Contrasts fiscal impact: tariff raises customs tax revenue whereas subsidy drains budgetary expenditure (`Q_3 × s`).",
              keywords: ["tax revenue", "budgetary expenditure", "opportunity cost"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q09",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "economic-integration-wto",
          question:
            "Identify the stage of economic integration characterised by zero internal tariffs and a uniform Common External Tariff, without free mobility of labour or capital.",
          answer: {
            type: "text",
            accept: ["Customs Union", "CU"],
            display: "Customs Union",
          },
          hints: [
            "It sits directly between a Free Trade Area and a Common Market.",
          ],
          solution: [
            "A **Customs Union** combines free internal trade with a Common External Tariff (CET).",
          ],
        },
        {
          id: "4a-trade-integration-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "trade-protection-diagrams",
          marks: 4,
          question:
            "Explain why imposing a binding physical import quota can reduce national economic welfare by more than an equivalent tariff that raises price to the same level.",
          hints: [
            "Both policies create the exact same production and consumption DWL triangles.",
            "Focus on the middle rectangle `(Q_4 − Q_3)(P_q − P_w)` — who captures it under each policy?",
          ],
          modelAnswer:
            "Both a tariff and an equivalent quota raise domestic price equally, creating identical production and consumption deadweight loss triangles. Under a tariff, however, the middle rectangle `(Q_4 − Q_3) × t` stays inside the domestic economy as government customs revenue that can finance public services. Under a quota, that rectangle becomes windfall quota rent; when import licences are handed free to foreign exporters, the entire rent transfers abroad, causing a strictly larger domestic welfare loss unless the government auctions licences.",
          markScheme: [
            {
              point: "Recognises both policies produce identical production and consumption DWL triangles.",
              keywords: ["identical production", "triangles"],
            },
            {
              point: "Explains tariff revenue remains domestically within the government treasury.",
              keywords: ["customs revenue", "stays inside", "public services"],
            },
            {
              point: "Identifies the middle rectangle under a quota as windfall quota rent.",
              keywords: ["quota rent", "windfall"],
            },
            {
              point: "Explains that free allocation of licences to foreign exporters leaks rent abroad (unless licences are auctioned).",
              keywords: ["transfers abroad", "foreign exporters", "auctions"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "economic-integration-wto",
          marks: 4,
          question:
            "Distinguish between **trade creation** and **trade diversion** as economic outcomes of forming a customs union.",
          hints: [
            "Specify the exact before-and-after shift in supplier costs for each concept.",
            "Link each concept to its effect on global allocative efficiency and national welfare.",
          ],
          modelAnswer:
            "Trade creation is a welfare-improving shift that occurs when abolishing internal tariffs replaces higher-cost domestic production with lower-cost imports from a more efficient bloc partner, improving global allocative efficiency and lowering consumer prices. By contrast, trade diversion is a welfare-reducing shift occurring when zero internal tariffs combined with the Common External Tariff redirect imports away from a lower-cost non-member toward a higher-cost union partner, raising real resource costs and causing lost tariff revenue to outweigh consumer price savings.",
          markScheme: [
            {
              point: "Defines trade creation as replacing higher-cost domestic output with lower-cost bloc partner imports.",
              keywords: ["higher-cost domestic", "lower-cost imports", "partner"],
            },
            {
              point: "Links trade creation to improved allocative efficiency / welfare gain.",
              keywords: ["welfare-improving", "allocative efficiency"],
            },
            {
              point: "Defines trade diversion as redirecting imports from a lower-cost non-member to a higher-cost union partner.",
              keywords: ["lower-cost non-member", "higher-cost union", "redirect"],
            },
            {
              point: "Links trade diversion to higher real resource costs / lost tariff revenue exceeding consumer gains.",
              keywords: ["welfare-reducing", "resource costs", "lost tariff revenue"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "economic-integration-wto",
          marks: 4,
          question:
            "Explain two major institutional limitations that weaken the World Trade Organization's (WTO) effectiveness in managing global trade.",
          hints: [
            "Consider how 160+ members vote on new multilateral agreements (Doha Round).",
            "Consider dispute enforcement since December 2019 (Appellate Body) or rich-country agricultural subsidies.",
          ],
          modelAnswer:
            "First, WTO trade rounds require consensus across more than 160 member nations with conflicting interests, causing prolonged deadlocks such as the stalled Doha Development Round where wealthy economies resisted cutting domestic agricultural subsidies while demanding wider industrial and services access in developing markets. Second, binding dispute settlement has been severely undermined since 2019 because blocked judicial appointments left the Appellate Body without a quorum, letting countries 'appeal into the void' and encouraging unilateral tariffs and regional FTAs that erode multilateral MFN norms.",
          markScheme: [
            {
              point: "Explains consensus decision-making across 160+ members creating negotiation gridlock.",
              keywords: ["consensus", "deadlocks", "stalled"],
            },
            {
              point: "Cites Doha Round deadlock over developed-nation agricultural subsidies vs developing market access.",
              keywords: ["doha", "agricultural subsidies"],
            },
            {
              point: "Explains paralysis of the WTO Appellate Body due to blocked judge appointments.",
              keywords: ["appellate body", "quorum", "blocked"],
            },
            {
              point: "Explains resulting weakening of dispute enforcement ('appeal into the void') or proliferation of bilateral/regional FTAs.",
              keywords: ["appeal into the void", "unilateral", "erode"],
            },
          ],
        },
        {
          id: "4a-trade-integration-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "trade-protection-diagrams",
          marks: 10,
          markbands: PAPER1_A_10M_BANDS,
          question:
            "[IB Paper 1 Part (a)] Explain how imposing an import tariff on a manufactured good affects resource allocation and different stakeholders in a small importing economy.",
          hints: [
            "Start with clear definitions of a tariff and the small-country free-trade benchmark (`P_w`, `Q_1`, `Q_2`).",
            "Walk methodically through the diagram shift (`S_world` to `S_world + t`), quantities (`Q_3`, `Q_4`), transfers, and both deadweight loss triangles.",
            "Cover ALL four stakeholder groups: domestic producers, domestic consumers, government/taxpayers, and foreign exporters (plus downstream firms!).",
          ],
          modelAnswer:
            "An import tariff is a tax levied on imported goods entering a country, designed to raise import prices and shelter local producers. In a small open economy that takes the world price `P_w` as given, the world supply curve `S_world` is horizontal below domestic autarky equilibrium. Under free trade, domestic firms supply `Q_1`, domestic buyers demand `Q_2`, and imports equal `Q_2 − Q_1`.\n\nWhen the government imposes a specific tariff `t`, world supply shifts vertically upwards to `S_world + t`, lifting the domestic price to `P_w + t`. Domestic producers respond to the price incentive by expanding output along `S_dom` from `Q_1` to `Q_3`, capturing higher revenue and an increase in domestic producer surplus equal to the trapezoid between `P_w` and `P_w + t`, while protecting local industry employment.\n\nDomestic consumers are harmed significantly: paying `P_w + t` forces consumption down from `Q_2` to `Q_4`, erasing a large strip of consumer surplus. If the manufactured good is an essential item or intermediate input, this price rise hits lower-income households regressively and elevates production costs for downstream firms.\n\nThe domestic government benefits fiscally by collecting tariff revenue equal to `(Q_4 − Q_3) × t`, representing a direct income transfer from domestic shoppers to public funds. Conversely, foreign exporters suffer as import volume shrinks from `Q_2 − Q_1` to `Q_4 − Q_3`, reducing export earnings and potentially triggering foreign retaliation.\n\nCrucially, the tariff causes allocative inefficiency and a net societal deadweight welfare loss captured by two triangles: first, production inefficiency (`{{1/2}}(Q_3 − Q_1)t`) because higher-cost domestic firms (`MC > P_w`) divert scarce resources away from more productive sectors; second, consumption inefficiency (`{{1/2}}(Q_2 − Q_4)t`) because consumers priced out between `Q_4` and `Q_2` valued those units above the world opportunity cost `P_w`. Consequently, consumer losses strictly exceed combined producer and government gains.",
          markScheme: [
            { point: "Defines an import tariff accurately.", keywords: ["tax levied on imported"] },
            { point: "Sets up small-country horizontal world supply at `P_w` with free-trade imports `Q_2 − Q_1`.", keywords: ["horizontal", "q_2 - q_1"] },
            { point: "Explains upward vertical shift to `S_world + t` and new domestic price `P_w + t`.", keywords: ["vertically upwards", "s_world + t"] },
            { point: "Analyses domestic producer gain (`Q_1` to `Q_3`, trapezoid PS gain, protected jobs).", keywords: ["producer surplus", "trapezoid", "employment"] },
            { point: "Analyses domestic consumer loss (`Q_2` to `Q_4`, consumer surplus reduction).", keywords: ["consumer surplus", "q_2 to q_4"] },
            { point: "Notes regressive impact or higher input costs for downstream businesses.", keywords: ["regressively", "downstream"] },
            { point: "Analyses government fiscal gain via tariff revenue `(Q_4 − Q_3) × t`.", keywords: ["tariff revenue", "income transfer"] },
            { point: "Analyses loss to foreign exporters via contracted import volumes.", keywords: ["foreign exporters", "export earnings"] },
            { point: "Explains production inefficiency DWL triangle (`MC > P_w`, resource misallocation).", keywords: ["production inefficiency", "scarce resources"] },
            { point: "Explains consumption inefficiency DWL triangle and why net social welfare falls.", keywords: ["consumption inefficiency", "deadweight welfare loss"] },
          ],
        },
        {
          id: "4a-trade-integration-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "arguments-for-against-protection",
          marks: 15,
          markbands: PAPER1_B_15M_BANDS,
          question:
            "[IB Paper 1 Part (b)] Evaluate the view that governments should use trade protection to safeguard local industries and jobs. Use real-world examples to support your answer.",
          hints: [
            "Define protectionism and outline the welfare cost (DWL) clearly before weighing both sides.",
            "Present strong nuanced arguments FOR protection (infant industries, national security, anti-dumping, developing-country revenue) with named real-world examples (e.g., South Korea 1960s–90s, US 2018 steel tariffs, EU CBAM).",
            "Counter rigorously with downstream input costs, regressive consumer harm, retaliation, and better policy alternatives (retraining/subsidies), ending with a clear judgement.",
          ],
          modelAnswer:
            "Trade protection encompasses government policies such as tariffs, quotas, subsidies, and regulatory barriers that restrict imports to shelter domestic producers. While economic theory highlights clear deadweight welfare losses from protectionism, evaluating its real-world merit requires distinguishing legitimate strategic or dynamic cases from costly political-economy failures.\n\nProponents advance several nuanced arguments. First, the infant industry argument holds that emerging domestic sectors in developing economies initially face average costs above the world price because they lack economies of scale and learning-by-doing. Temporary protection allows firms to slide down their long-run average cost curve until unit costs fall below world prices, creating dynamic comparative advantage. Historically, South Korea successfully shielded nascent steel (POSCO), automotive (Hyundai), and electronics (Samsung) industries during the 1960s–1980s while tying state support strictly to export targets before phasing barriers out. Second, national security justifies maintaining domestic capacity in strategic inputs like semiconductors, energy, or defence hardware during geopolitical crises. Third, anti-dumping duties counter predatory foreign pricing below cost, while health and environmental rules such as the European Union's Carbon Border Adjustment Mechanism (CBAM) aim to internalise carbon externalities. Fourth, in low-income developing countries with large informal sectors, border tariffs supply vital fiscal revenue to finance schools and hospitals. Fifth, gradual shielding of declining sunset industries can cushion acute short-run structural unemployment.\n\nHowever, the economic costs of broad protectionism are severe and frequently outweigh its gains. Diagrammatically, a tariff raises domestic prices to `P_w + t`, eroding consumer surplus regressively as low-income families spend larger income shares on food and clothing, while generating both production and consumption deadweight loss triangles. Moreover, safeguarding upstream industries inflicts heavy input-cost shocks on downstream manufacturers. When the United States imposed 25% Section 232 steel tariffs in 2018, US steel mills added modest jobs, yet US automakers, machinery producers, and builders suffered higher steel costs, cost-push inflation, and reduced export competitiveness — costing hundreds of thousands of dollars per steel job saved. Protection also invites foreign retaliation: China, Canada, and the EU levied counter-tariffs on American soybeans and motorcycles, shrinking export jobs and escalating trade-war uncertainty. Additionally, governments struggle to pick winners; sheltered infant industries often lobby to retain tariffs indefinitely, fostering X-inefficiency and corruption.\n\nIn conclusion, blanket protectionism to preserve general employment is economically flawed and self-defeating in the long run because it redistributes income inefficiently from consumers and export sectors to sheltered firms. Trade protection is defensible only when narrowly targeted, strictly time-bound (as in South Korea's export-disciplined industrial policy), or addressing genuine market failures such as predatory dumping, strategic security, or unpriced environmental externalities. For employment transitions, interventionist supply-side policies such as worker retraining and domestic production subsidies (which preserve world consumer prices) generally achieve social goals at far lower welfare cost.",
          markScheme: [
            { point: "Defines trade protection and identifies key instruments (tariffs, quotas, subsidies).", keywords: ["encompasses government policies", "regulatory barriers"] },
            { point: "Explains infant industry rationale via economies of scale and falling LRAC.", keywords: ["infant industry", "economies of scale", "average cost"] },
            { point: "Applies real-world example of South Korea (Hyundai/Samsung/POSCO) building dynamic comparative advantage.", keywords: ["south korea", "dynamic comparative advantage"] },
            { point: "Explains national security / strategic self-sufficiency argument (semiconductors/defence).", keywords: ["national security", "semiconductors"] },
            { point: "Explains anti-dumping and environmental/health standards with real-world example (EU CBAM).", keywords: ["anti-dumping", "cbam", "externalities"] },
            { point: "Explains developing-country fiscal revenue argument given large informal sectors.", keywords: ["informal sectors", "fiscal revenue"] },
            { point: "Notes short-run structural unemployment cushioning for sunset industries.", keywords: ["structural unemployment", "sunset"] },
            { point: "Analyses regressive consumer price burden and consumer surplus loss.", keywords: ["regressively", "consumer surplus"] },
            { point: "Explains both production and consumption deadweight welfare losses.", keywords: ["deadweight loss triangles", "production and consumption"] },
            { point: "Analyses upstream input-cost harm to downstream manufacturers and export competitiveness.", keywords: ["downstream", "input-cost", "competitiveness"] },
            { point: "Applies real-world example of 2018 US Section 232 steel tariffs.", keywords: ["section 232", "2018", "steel tariffs"] },
            { point: "Explains retaliation and trade-war escalation harming exporters (US soybeans/counter-tariffs).", keywords: ["retaliation", "counter-tariffs", "soybeans"] },
            { point: "Evaluates government failure, picking winners, lobbying, and X-inefficiency.", keywords: ["pick winners", "x-inefficiency", "lobby"] },
            { point: "Evaluates superior alternatives (retraining supply-side policies, production subsidies).", keywords: ["retraining", "supply-side", "subsidies"] },
            { point: "Delivers a nuanced, reasoned final judgement distinguishing targeted temporary vs blanket permanent protection.", keywords: ["time-bound", "blanket protectionism", "conclusion"] },
          ],
        },
        {
          id: "4a-trade-integration-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "economic-integration-wto",
          marks: 15,
          markbands: PAPER1_B_15M_BANDS,
          question:
            "[IB Paper 1 Part (b)] Discuss the economic advantages and disadvantages for a country of joining a monetary union. Use real-world examples to support your answer.",
          hints: [
            "Define a monetary union accurately as the deepest stage of integration (Common Market + single currency + common central bank).",
            "Detail clear micro/macro advantages (zero FX risk, zero conversion fees, price transparency, higher trade/FDI, low-inflation central bank credibility).",
            "Detail severe macro disadvantages (loss of independent interest rates & exchange-rate adjustment, asymmetric shocks — Greece/Spain vs Germany 2010–2015, lack of fiscal union), then synthesise!",
          ],
          modelAnswer:
            "A monetary union represents the deepest standard stage of economic integration, building upon a Common Market (free trade in goods, a Common External Tariff, and free movement of labour and capital) by adopting a single shared currency managed by one unified central bank. The Eurozone — currently encompassing 20 European nations using the euro under the European Central Bank (ECB) — provides the foremost real-world laboratory for evaluating these trade-offs.\n\nJoining a monetary union delivers substantial microeconomic and macroeconomic advantages. First, eliminating exchange-rate fluctuations between members removes currency risk for exporters and multinational firms, encouraging greater intra-bloc trade and cross-border Foreign Direct Investment (FDI). Second, businesses and travellers save billions annually by eliminating currency conversion fees and hedging expenses, lowering transaction costs and boosting efficiency. Third, denominating goods and wages in one currency creates price transparency across borders, intensifying competition and discouraging regional price discrimination. Fourth, economies with histories of high inflation and volatile borrowing costs gain macroeconomic credibility by delegating policy to an independent, low-inflation central bank; prior to 2008, Italy, Spain, and Portugal enjoyed sharp declines in sovereign bond yields after adopting the euro. Fifth, a major reserve currency enhances collective international clout.\n\nNevertheless, membership imposes profound macroeconomic costs because nations permanently surrender two vital stabilisation tools: independent monetary policy and exchange-rate flexibility. A unified central bank sets a single 'one-size-fits-all' interest rate targeting bloc-wide average inflation. When an asymmetric shock hits member economies differently, policy becomes destabilising. During the 2010–2015 Eurozone sovereign debt crisis, Greece and Spain endured deep deflationary gaps with unemployment exceeding 25%, whereas Germany experienced buoyant growth and near-full employment. Unable to cut national interest rates or depreciate a national currency (such as the drachma) to restore export competitiveness via expenditure switching, crisis economies were forced into prolonged fiscal austerity and painful internal wage devaluation, deepening recessions and debt-to-GDP ratios.\n\nThese structural strains are magnified whenever a monetary union lacks a matching fiscal union and smooth labour mobility. Unlike the United States — where federal taxes and unemployment transfers automatically redistribute funds from booming states to recession-hit states and workers move freely across English-speaking states — the Eurozone has limited centralised fiscal transfers alongside linguistic and cultural barriers to cross-border labour migration. Moreover, initial transition costs (repricing software, accounting systems, and menu-cost inflation fears) and loss of political sovereignty provoke domestic resistance, explaining why EU members such as Sweden, Denmark, and Poland have chosen to retain independent currencies.\n\nOverall, joining a monetary union is net beneficial primarily when member economies satisfy optimal currency area conditions: tightly synchronised business cycles, flexible labour markets, high intra-bloc trade shares, and shared fiscal backstops (such as the EU's €750bn NextGenerationEU recovery fund launched during COVID-19). Where business cycles diverge sharply and fiscal integration remains incomplete, losing national monetary and exchange-rate sovereignty can transform cyclical downturns into severe structural crises.",
          markScheme: [
            { point: "Defines a monetary union accurately (Common Market + single currency + shared central bank).", keywords: ["single shared currency", "unified central bank", "common market"] },
            { point: "Identifies the Eurozone and European Central Bank (ECB) as real-world context.", keywords: ["eurozone", "ecb"] },
            { point: "Explains elimination of exchange-rate risk boosting trade and FDI.", keywords: ["currency risk", "fdi"] },
            { point: "Explains abolition of currency conversion and hedging transaction costs.", keywords: ["conversion fees", "transaction costs"] },
            { point: "Explains cross-border price transparency increasing competition.", keywords: ["price transparency", "price discrimination"] },
            { point: "Explains inflation credibility and lower borrowing yields for historically high-inflation members (Italy/Spain/Portugal).", keywords: ["credibility", "bond yields", "italy"] },
            { point: "Explains loss of independent national monetary policy ('one-size-fits-all' interest rate).", keywords: ["one-size-fits-all", "independent monetary policy"] },
            { point: "Explains inability to depreciate national currency to restore export competitiveness.", keywords: ["depreciate", "expenditure switching"] },
            { point: "Analyses asymmetric shocks using Greece/Spain vs Germany (2010–2015).", keywords: ["asymmetric shock", "greece", "germany"] },
            { point: "Explains reliance on painful fiscal austerity and internal devaluation.", keywords: ["austerity", "internal wage devaluation"] },
            { point: "Evaluates absence of fiscal union / automatic cross-border transfers (contrasted with US).", keywords: ["fiscal union", "united states", "transfers"] },
            { point: "Evaluates linguistic/cultural barriers limiting practical labour mobility.", keywords: ["linguistic", "labour migration"] },
            { point: "Notes transition/sovereignty costs and real-world opt-outs (Sweden/Denmark/Poland).", keywords: ["sovereignty", "sweden", "denmark"] },
            { point: "References recent institutional adaptation (NextGenerationEU recovery fund).", keywords: ["nextgenerationeu", "fiscal backstops"] },
            { point: "Concludes with a nuanced judgement based on optimal currency area / business-cycle synchronisation criteria.", keywords: ["optimal currency area", "synchronised"] },
          ],
        },
      ],
    },

    // -----------------------------------------------------------------------
    // PRACTICE PAPER 2 — HL Paper 3 Quantitative Modelling & Policy Evaluation
    // -----------------------------------------------------------------------
    {
      id: "4a-trade-integration-p2",
      title: "Practice Paper 2 — HL Paper 3 Quantitative Trade Modelling & Policy Evaluation",
      level: "HL",
      questions: [
        {
          id: "4a-trade-integration-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "benefits-trade-comparative-hl",
          question:
            "With identical resources, **Country A** can produce at most **150 tonnes of rice** OR **50 laptops**, while **Country B** can produce at most **80 tonnes of rice** OR **40 laptops**. Calculate Country B's opportunity cost of producing **1 laptop** (in tonnes of rice).",
          answer: { type: "number", value: 2 },
          traps: [
            {
              spec: { type: "number", value: 0.5 },
              feedback: "That is the opportunity cost of 1 tonne of rice (`40 / 80`). For 1 laptop, divide rice by laptops (`80 / 40`).",
            },
            {
              spec: { type: "number", value: 3 },
              feedback: "`3` tonnes of rice is Country A's opportunity cost (`150 / 50`), not Country B's.",
            },
          ],
          hints: [
            "Focus strictly on Country B's maximum outputs (`80` rice vs `40` laptops).",
            "Apply 'Other Over This': `80 / 40`.",
          ],
          solution: [
            "Country B's opportunity cost of 1 laptop = `{{80/40}}` = **2 tonnes of rice**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "benefits-trade-comparative-hl",
          question:
            "Continuing with **Country A** (max `150` rice or `50` laptops) and **Country B** (max `80` rice or `40` laptops), state the two boundary values (in tonnes of rice per 1 laptop) between which the mutually beneficial terms of trade must strictly lie. Enter both numbers separated by a comma.",
          answer: { type: "list", values: [2, 3], ordered: false, display: "2, 3" },
          hints: [
            "Compute both countries' domestic opportunity costs of 1 laptop.",
            "Country B's OC is `80/40 = 2`; Country A's OC is `150/50 = 3`.",
          ],
          solution: [
            "Country B OC of 1 laptop = `{{80/40}} = 2` tonnes of rice.",
            "Country A OC of 1 laptop = `{{150/50}} = 3` tonnes of rice.",
            "Mutually beneficial terms of trade lie strictly between **2** and **3** tonnes of rice per laptop.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "benefits-trade-comparative-hl",
          question:
            "In an **input (labour-hours per unit)** schedule, **Country J** requires **3 hours to make 1 camera** and **6 hours to make 1 bicycle**. Calculate Country J's opportunity cost of producing **1 camera** (in bicycles).",
          answer: { type: "number", value: 0.5, allowFraction: true },
          traps: [
            {
              spec: { type: "number", value: 2 },
              feedback: "Watch out! This is an *input* (hours) table, not an *output* table. In 3 hours spent making 1 camera, Country J gives up only half a bicycle (`3 / 6 = 0.5`).",
            },
          ],
          hints: [
            "Ask: if a worker spends 3 hours making 1 camera, what fraction of a 6-hour bicycle is sacrificed?",
            "Compute `3 / 6` (or convert to output per 6 hours: 2 cameras vs 1 bicycle → `OC 1 camera = 1/2 bicycle`).",
          ],
          solution: [
            "In 6 labour hours, Country J makes either `2` cameras or `1` bicycle.",
            "Therefore, the opportunity cost of 1 camera is `{{1/2}}` = **0.5 bicycles**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "A small open economy's domestic steel market is modelled by **`Q_d = 140 − 2P`** and **`Q_s = 20 + 2P`** (quantities in thousand tonnes, `P` in `$`). If the free-trade world price is **`P_w = $15`**, calculate free-trade import volume (in thousand tonnes).",
          answer: { type: "number", value: 60 },
          traps: [
            {
              spec: { type: "number", value: 110 },
              feedback: "`110` is total domestic demand `Q_d`. Subtract domestic supply `Q_s = 50` to find imports.",
            },
          ],
          hints: [
            "Substitute `P = 15` into both `Q_d = 140 − 2P` and `Q_s = 20 + 2P`.",
            "Subtract `Q_s` from `Q_d`.",
          ],
          solution: [
            "At `P = $15`: `Q_d = 140 − 2(15) = 110` thousand tonnes; `Q_s = 20 + 2(15) = 50` thousand tonnes.",
            "Free-trade imports = `110 − 50` = **60 thousand tonnes**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "Using the steel market **`Q_d = 140 − 2P`** and **`Q_s = 20 + 2P`** (`P_w = $15`), the government imposes a **$5 per-tonne specific tariff** (raising domestic price to `$20`). Calculate government tariff revenue (in `$ thousand`).",
          answer: { type: "number", value: 200 },
          traps: [
            {
              spec: { type: "number", value: 300 },
              feedback: "That multiplies *pre-tariff* imports (`60k`) by `$5`. Recompute `Q_d` and `Q_s` at `P = $20` first.",
            },
          ],
          hints: [
            "Evaluate `Q_d` and `Q_s` at `P = $20`.",
            "Multiply post-tariff imports `(Q_4 − Q_3)` by the `$5` tariff.",
          ],
          solution: [
            "At `P = $20`: `Q_4 = 140 − 40 = 100`k; `Q_3 = 20 + 40 = 60`k.",
            "Post-tariff imports = `100 − 60 = 40` thousand tonnes.",
            "Government tariff revenue = `40 × $5` = **$200 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "For the same **$5 per-tonne specific tariff** on **`Q_d = 140 − 2P`** and **`Q_s = 20 + 2P`** (`P_w = $15`), calculate the **total deadweight welfare loss** (in `$ thousand`).",
          answer: { type: "number", value: 50 },
          traps: [
            {
              spec: { type: "number", value: 100 },
              feedback: "Remember to multiply by `{{1/2}}` when calculating triangle areas!",
            },
            {
              spec: { type: "number", value: 25 },
              feedback: "`$25 thousand` is only ONE DWL triangle — add both production DWL (`$25k`) and consumption DWL (`$25k`).",
            },
          ],
          hints: [
            "Production DWL = `{{1/2}} × (60 − 50) × 5`.",
            "Consumption DWL = `{{1/2}} × (110 − 100) × 5`. Sum both triangles.",
          ],
          solution: [
            "Production DWL = `{{1/2}} × 10 × $5 = $25` thousand.",
            "Consumption DWL = `{{1/2}} × 10 × $5 = $25` thousand.",
            "Total deadweight welfare loss = `$25k + $25k` = **$50 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "For the same **$5 per-tonne specific tariff** on **`Q_d = 140 − 2P`** and **`Q_s = 20 + 2P`** (`P_w = $15 → $20`), calculate the **gain in domestic producer surplus** (in `$ thousand`).",
          answer: { type: "number", value: 275 },
          traps: [
            {
              spec: { type: "number", value: 300 },
              feedback: "`60 × $5 = $300k` includes the `$25k` production DWL triangle. Producer surplus gain is the trapezoid `{{1/2}}(50 + 60) × 5`.",
            },
            {
              spec: { type: "number", value: 250 },
              feedback: "`50 × $5 = $250k` omits the extra producer surplus triangle on the `10` thousand new domestic tonnes.",
            },
          ],
          hints: [
            "Domestic producer surplus gain is a trapezoid bounded by `P = 15`, `P = 20`, the vertical axis, and `S_dom`.",
            "Compute `{{1/2}} × (Q_1 + Q_3) × t = {{1/2}} × (50 + 60) × 5`.",
          ],
          solution: [
            "Domestic producer surplus gain = `{{1/2}} × (50 + 60) × $5 = 55 × $5` = **$275 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "For the same **$5 tariff** (`P_w = $15 → $20`, domestic demand falling from `110` thousand to `100` thousand tonnes), calculate the **loss in domestic consumer surplus** (in `$ thousand`).",
          answer: { type: "number", value: 525 },
          traps: [
            {
              spec: { type: "number", value: 550 },
              feedback: "`110 × $5` overstates the trapezoid area. Use `{{1/2}}(110 + 100) × 5`.",
            },
          ],
          hints: [
            "Consumer surplus loss is the full trapezoid between `P = 15` and `P = 20`: `{{1/2}}(Q_2 + Q_4) × t`.",
            "Cross-check: it must equal `PS Gain ($275k) + Govt Revenue ($200k) + Total DWL ($50k)`!",
          ],
          solution: [
            "Consumer surplus loss = `{{1/2}} × (110 + 100) × $5 = 105 × $5` = **$525 thousand**.",
            "Accounting check: `$275k + $200k + $50k = $525k`.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q09",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "Instead of the tariff, suppose the government pays domestic steelmakers a **$5 per-tonne production subsidy**, expanding domestic output from `50` thousand to `60` thousand tonnes while domestic price remains `$15` (`Q_d = 110k`). Calculate total **government subsidy expenditure** (in `$ thousand`).",
          answer: { type: "number", value: 300 },
          traps: [
            {
              spec: { type: "number", value: 250 },
              feedback: "The subsidy is paid on post-subsidy output (`60` thousand tonnes), not pre-subsidy output (`50` thousand).",
            },
            {
              spec: { type: "number", value: 50 },
              feedback: "All `60` thousand domestic tonnes receive `$5`, not only the extra `10` thousand tonnes.",
            },
          ],
          hints: [
            "Government expenditure under a per-unit production subsidy is `Q_3 × s`.",
            "Multiply `60` thousand tonnes by `$5`.",
          ],
          solution: [
            "Government subsidy expenditure = `60 × $5` = **$300 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q10",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "For the **$5 per-tonne domestic production subsidy** in the previous question (`Q_1 = 50k`, `Q_3 = 60k`, consumer price unchanged at `$15`), calculate the **total deadweight welfare loss** (in `$ thousand`).",
          answer: { type: "number", value: 25 },
          traps: [
            {
              spec: { type: "number", value: 50 },
              feedback: "There is NO consumption DWL under a production subsidy because domestic price remains `$15`! Only production DWL (`$25k`) occurs.",
            },
          ],
          hints: [
            "Does domestic consumption fall under a domestic production subsidy?",
            "Compute only the production DWL triangle: `{{1/2}} × (60 − 50) × 5`.",
          ],
          solution: [
            "Consumption DWL = `$0` (consumer price remains `$15`).",
            "Production DWL = `{{1/2}} × (60 − 50) × $5` = **$25 thousand** (half the tariff's `$50k` DWL).",
          ],
        },
        {
          id: "4a-trade-integration-p2-q11",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "In a footwear market (`P_w = $40`), free-trade domestic supply is `30` thousand pairs and demand is `90` thousand pairs. An **import quota of 30 thousand pairs** raises domestic price to **`$60`**, where domestic supply is `40` thousand and demand is `70` thousand pairs. Calculate the total **quota rent** generated (in `$ thousand`).",
          answer: { type: "number", value: 600 },
          traps: [
            {
              spec: { type: "number", value: 1800 },
              feedback: "`30 × $60 = $1,800k` is total revenue received by foreign exporters. Subtract the world-price value (`30 × $40 = $1,200k`) to find quota rent.",
            },
          ],
          hints: [
            "Quota rent equals quota volume multiplied by the price premium `(P_q − P_w)`.",
            "Compute `30 × ($60 − $40)`.",
          ],
          solution: [
            "Price premium `P_q − P_w = $60 − $40 = $20` per pair.",
            "Total quota rent = `30 × $20` = **$600 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q12",
          kind: "short",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "trade-protection-diagrams",
          question:
            "Using the footwear quota above (`P_w = $40`, `P_q = $60`, `Q_1 = 30k`, `Q_3 = 40k`, `Q_4 = 70k`, `Q_2 = 90k`), calculate the **total domestic welfare loss** (in `$ thousand`) assuming import licences are allocated **free of charge to foreign exporters**.",
          answer: { type: "number", value: 900 },
          traps: [
            {
              spec: { type: "number", value: 300 },
              feedback: "`$300k` is only the two DWL triangles (`$100k + $200k`). Because foreign exporters hold the licences, the `$600k` quota rent also leaks abroad!",
            },
          ],
          hints: [
            "Sum three losses borne by the domestic economy: Production DWL + Consumption DWL + Exported Quota Rent.",
            "Prod DWL = `{{1/2}}(40 − 30)(20) = 100`; Cons DWL = `{{1/2}}(90 − 70)(20) = 200`; Exported rent = `600`.",
          ],
          solution: [
            "Production DWL = `{{1/2}} × 10 × $20 = $100` thousand.",
            "Consumption DWL = `{{1/2}} × 20 × $20 = $200` thousand.",
            "Quota rent transferred to foreign exporters = `30 × $20 = $600` thousand.",
            "Total domestic welfare loss = `$100k + $200k + $600k` = **$900 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q13",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "economic-integration-wto",
          question:
            "Country R initially levies a **$12/tonne** tariff on all sugar imports, buying **80 thousand tonnes** from the lowest-cost non-member Z (production cost `$28/tonne`, consumer price `$40`). Country R forms a Customs Union with Partner Y (cost `$34/tonne`, duty-free) while keeping the `$12` CET on Z, diverting all `80` thousand tonnes to Y. Calculate Country R's net national welfare loss from trade diversion (in `$ thousand`).",
          answer: { type: "number", value: 480 },
          traps: [
            {
              spec: { type: "number", value: 960 },
              feedback: "`$960k` is gross lost tariff revenue (`80k × $12`). Remember domestic consumers save `$6/tonne` (`$40 → $34`), leaving a net loss of `$6/tonne`.",
            },
          ],
          hints: [
            "Per tonne, compare consumer saving (`$40 − $34 = +$6`) against lost tariff revenue (`−$12`), OR simply take the rise in real resource cost (`$34 − $28 = $6`).",
            "Multiply `$6/tonne` by `80` thousand tonnes.",
          ],
          solution: [
            "Real resource cost rises from `$28` to `$34` per tonne → net welfare loss of `$6/tonne`.",
            "Total trade-diversion welfare loss = `80,000 × $6 = $480,000` = **$480 thousand**.",
          ],
        },
        {
          id: "4a-trade-integration-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "benefits-trade-comparative-hl",
          marks: 4,
          question:
            "Explain two real-world limitations of the Ricardian theory of comparative advantage when applied to developing economies.",
          hints: [
            "Consider assumptions like zero transport costs, constant opportunity costs (linear PPCs), or static factor endowments.",
            "Also think about primary-commodity over-specialisation or environmental externalities.",
          ],
          modelAnswer:
            "First, Ricardian theory assumes zero transport costs and constant opportunity costs along linear PPCs, whereas in reality shipping freight can erase narrow opportunity-cost gaps and imperfectly adaptable resources create increasing opportunity costs (concave PPCs), preventing complete specialisation. Second, strictly following static comparative advantage can trap developing nations in over-specialisation in raw primary commodities characterised by volatile global prices and low income elasticity of demand, restricting industrial diversification and generating unpriced environmental externalities.",
          markScheme: [
            { point: "Identifies transport costs eroding narrow opportunity-cost advantages.", keywords: ["transport costs", "freight"] },
            { point: "Explains increasing opportunity costs / concave PPCs due to imperfect factor mobility.", keywords: ["increasing opportunity costs", "concave"] },
            { point: "Explains risk of over-specialisation in volatile, low-YED primary commodities.", keywords: ["over-specialisation", "primary commodities", "volatile"] },
            { point: "Links static specialisation to blocked diversification or environmental externalities.", keywords: ["diversification", "environmental externalities"] },
          ],
        },
        {
          id: "4a-trade-integration-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Recommend",
          guideRef: "trade-protection-diagrams",
          marks: 10,
          markbands: HL_P3_10M_BANDS,
          question:
            "[HL Paper 3 Policy Recommendation] Returning to the steel market (`Q_d = 140 − 2P`, `Q_s = 20 + 2P`, `P_w = $15`), the government wants to expand domestic output from `50` thousand to `60` thousand tonnes while protecting low-income households and downstream manufacturing exporters. Recommend one policy from: a `$5` import tariff, a `40` thousand tonne import quota, or a `$5` domestic production subsidy. Justify your recommendation using your calculated figures and evaluate its trade-offs.",
          hints: [
            "Commit decisively to ONE policy right away (the `$5` domestic production subsidy!).",
            "Anchor your argument directly in the calculated numbers: subsidy DWL `$25k` vs tariff DWL `$50k`; consumer surplus loss `$0` vs `$525k`; domestic price pinned at `$15` vs `$20`.",
            "Evaluate fiscal trade-offs (`$300k` budget cost vs `$200k` tariff revenue), WTO legality/retaliation, and complementary time-bound supply-side reforms.",
          ],
          modelAnswer:
            "I recommend implementing the **$5 per-tonne domestic production subsidy** rather than the import tariff or import quota.\n\nQuantitatively, all three tools achieve the exact target of raising domestic steel output from `50` thousand to `60` thousand tonnes and increasing domestic producer surplus by `$275` thousand. However, their broader economic costs diverge sharply. Under the `$5` subsidy, `S_dom` shifts downwards while tariff-free imports keep the market price anchored at `$15`. Consequently, domestic buyers and downstream steel-using exporters suffer **zero** loss of consumer surplus and **zero** consumption deadweight loss, keeping total deadweight welfare loss at just **`$25` thousand** (production inefficiency only). By contrast, both the `$5` tariff and the `40` thousand tonne quota raise domestic steel prices by 33% (to `$20`), imposing a **`$525` thousand** loss of consumer surplus, raising input costs for local exporters, and doubling deadweight loss to **`$50` thousand** (or up to `$250` thousand if quota licences are handed free to foreign exporters, leaking the `$200` thousand quota rent abroad).\n\nNevertheless, the subsidy carries significant trade-offs that policymakers must manage. Unlike the tariff — which raises `$200` thousand in customs revenue — the subsidy requires **`$300` thousand** in direct budgetary expenditure (`60k × $5`), creating a fiscal opportunity cost in foregone healthcare, education, or higher taxes (or wider public debt). Furthermore, open-ended subsidies can breed X-inefficiency if steelmakers lose incentives to modernise, and may still trigger WTO countervailing-duty disputes if deemed trade-distorting.\n\nTherefore, the production subsidy is the superior welfare-minimising instrument *provided* the government has sufficient fiscal space and attaches strict sunset clauses alongside complementary interventionist supply-side policies — such as worker retraining and green-steel R&D grants — so domestic mills achieve genuine competitiveness before support expires.",
          markScheme: [
            { point: "Commits unambiguously to ONE policy (the `$5` domestic production subsidy).", keywords: ["recommend implementing", "production subsidy"] },
            { point: "Notes all three tools achieve identical `50k → 60k` output target and `$275k` producer surplus gain.", keywords: ["275", "producer surplus"] },
            { point: "Explains mechanism: subsidy shifts `S_dom` down while imports keep market price pinned at `$15`.", keywords: ["anchored at", "s_dom"] },
            { point: "Cites quantitative welfare advantage: zero consumer surplus loss vs `$525k` under tariff/quota.", keywords: ["zero", "525"] },
            { point: "Cites quantitative DWL advantage: `$25k` (production DWL only) vs `$50k` under tariff.", keywords: ["25", "50", "production inefficiency"] },
            { point: "Explains why the quota risks an even larger domestic loss (`$200k` leaked quota rent if foreign-held).", keywords: ["quota rent", "foreign exporters"] },
            { point: "Explains protection of downstream exporters from the 33% input-price hike.", keywords: ["33%", "input costs", "exporters"] },
            { point: "Evaluates fiscal trade-off: `$300k` public expenditure vs `$200k` tariff revenue (opportunity cost / debt).", keywords: ["300", "200", "opportunity cost"] },
            { point: "Evaluates dynamic risks: X-inefficiency and WTO countervailing-duty challenges.", keywords: ["x-inefficiency", "countervailing"] },
            { point: "Recommends complementary sunset clauses and supply-side R&D/retraining reforms.", keywords: ["sunset clauses", "retraining", "r&d"] },
          ],
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET — 8 High-Rigor Questions (ALL difficulty: "challenge")
  // =========================================================================
  challenge: [
    {
      id: "4a-trade-integration-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "trade-protection-diagrams",
      strategy: "Tariff Laffer Curve optimisation",
      question:
        "A small open economy has domestic demand **`Q_d = 160 − 2P`** and domestic supply **`Q_s = 2P`**, facing a world price **`P_w = $10`**. Determine the exact specific tariff **`t`** (in `$`) that **maximises** government tariff revenue.",
      answer: { type: "number", value: 15 },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "`$30` is the *prohibitive* tariff (`P = $40`), where imports fall to zero and tariff revenue is `$0`! Revenue peaks at half the prohibitive tariff.",
        },
      ],
      hints: [
        "Express imports `M(t) = Q_d(10 + t) − Q_s(10 + t)` purely as a function of `t`.",
        "You get `M(t) = 120 − 4t`, so tariff revenue is the quadratic `R(t) = t(120 − 4t) = 120t − 4t²`.",
        "Find the vertex (midpoint between roots `t = 0` and `t = 30`, or set `dR/dt = 120 − 8t = 0`).",
      ],
      solution: [
        "At `P = 10 + t`: `Q_d = 160 − 2(10 + t) = 140 − 2t` and `Q_s = 2(10 + t) = 20 + 2t`.",
        "Post-tariff imports: `M(t) = (140 − 2t) − (20 + 2t) = 120 − 4t`.",
        "Tariff revenue: `R(t) = 120t − 4t²`, a concave parabola with roots `t = 0` and `t = 30`.",
        "Revenue is maximised at the vertex `t = {{120/8}}` = **$15** (yielding maximum revenue `$900`).",
      ],
    },
    {
      id: "4a-trade-integration-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "economic-integration-wto",
      strategy: "Trade creation minus trade diversion decomposition",
      question:
        "Country A has no domestic production of cocoa beans and domestic demand **`Q_d = 100 − P`**. Non-member C produces cocoa at **$20/unit**; prospective partner B produces at **$25/unit**. Initially Country A levies a **$15/unit tariff** on all imports (buying from C at `$35`). Country A then forms a Customs Union with B (`0%` tariff on B, `$15` CET kept on C), so domestic price drops to `$25`. Calculate Country A's **net change in national welfare** (`ΔCS + ΔGovt Revenue`, in `$`, including the negative sign if a net loss).",
      answer: { type: "number", value: -275 },
      traps: [
        {
          spec: { type: "number", value: -325 },
          feedback: "`−$325` is only the trade-diversion rectangle on the original `65` units (`65 × $5`). Remember to add the `+$50` consumption trade-creation triangle on the `10` new units!",
        },
        {
          spec: { type: "number", value: 700 },
          feedback: "`+$700` is the gain in consumer surplus alone — subtract the `$975` loss in government tariff revenue.",
        },
      ],
      hints: [
        "Compute initial imports at `P = $35` (`Q = 65`) and initial tariff revenue (`65 × $15 = $975`).",
        "Compute post-union imports at `P = $25` (`Q = 75`) and consumer surplus gain `ΔCS = {{1/2}}(65 + 75) × ($35 − $25)`.",
        "Add `ΔCS (+$700)` and `ΔGovt Revenue (−$975)` — or check `Trade Creation (+$50) − Trade Diversion ($325)`!",
      ],
      solution: [
        "Initial state (`P = $35`, buying from C): `Q_0 = 100 − 35 = 65`; tariff revenue = `65 × $15 = $975`.",
        "Post-union (`P = $25`, buying from B): `Q_1 = 100 − 25 = 75`; tariff revenue = `$0` (`ΔR = −$975`).",
        "Consumer surplus gain: `ΔCS = {{1/2}}(65 + 75) × ($35 − $25) = 70 × 10 = +$700`.",
        "Net national welfare change = `+$700 − $975` = **−$275** (equivalently: consumption trade creation `{{1/2}}(10)(10) = +$50` minus trade diversion `65 × $5 = $325`).",
      ],
    },
    {
      id: "4a-trade-integration-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      strategy: "Algebraic quota equilibrium",
      question:
        "A small economy's domestic demand is **`Q_d = 200 − 4P`** and domestic supply is **`Q_s = 20 + 2P`**, with world price **`P_w = $10`**. If the government enforces a binding **import quota of 60 units**, calculate the new domestic equilibrium price **`P_q`** (in `$`).",
      answer: { type: "number", value: 20 },
      traps: [
        {
          spec: { type: "number", value: 30 },
          feedback: "`$30` is the autarky equilibrium price (`Q_d = Q_s`, zero imports). Under a quota of `60`, set `Q_d − Q_s = 60`.",
        },
      ],
      hints: [
        "Under a binding quota of `60` units, domestic demand equals domestic supply plus the quota: `Q_d = Q_s + 60`.",
        "Substitute the linear equations: `200 − 4P = (20 + 2P) + 60`.",
        "Collect terms to solve `6P = 120`.",
      ],
      solution: [
        "Set `Q_d − Q_s = 60`: `(200 − 4P) − (20 + 2P) = 60`.",
        "Simplify: `180 − 6P = 60 ⇒ 6P = 120 ⇒ P_q` = **$20**.",
        "Check: at `$20`, `Q_d = 120` and `Q_s = 60`, so imports = `120 − 60 = 60` units.",
      ],
    },
    {
      id: "4a-trade-integration-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "benefits-trade-comparative-hl",
      strategy: "Autarky vs complete specialisation world output",
      question:
        "With all resources, **Country A** can make at most **100 tonnes of coffee** OR **50 tonnes of steel**, while **Country B** can make at most **60 tonnes of coffee** OR **60 tonnes of steel**. Under autarky, each country splits its resources 50/50 (producing `50` coffee & `25` steel in A; `30` coffee & `30` steel in B). If both countries now specialise **100%** according to comparative advantage, calculate the **net increase in total world coffee production** (in tonnes).",
      answer: { type: "number", value: 20 },
      traps: [
        {
          spec: { type: "number", value: 100 },
          feedback: "`100` tonnes is total specialised world coffee output — subtract initial world coffee output (`50 + 30 = 80`) to find the net *increase*.",
        },
      ],
      hints: [
        "Find comparative advantage: Country A OC of 1 steel = `2` coffee; Country B OC of 1 steel = `1` coffee.",
        "Country A specialises 100% in coffee (`100` tonnes) and Country B specialises 100% in steel (`60` tonnes).",
        "Compare specialised world coffee output (`100`) with autarky world coffee output (`50 + 30 = 80`).",
      ],
      solution: [
        "Country A has lower OC in coffee (`0.5 < 1` steel) → produces `100` coffee, `0` steel.",
        "Country B has lower OC in steel (`1 < 2` coffee) → produces `0` coffee, `60` steel.",
        "Initial world coffee = `50 + 30 = 80` tonnes; specialised world coffee = `100` tonnes → net increase = **20 tonnes** (while steel also rises by `5` tonnes!).",
      ],
    },
    {
      id: "4a-trade-integration-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "trade-protection-diagrams",
      strategy: "Quadratic scaling of deadweight loss (DWL ∝ t²)",
      question:
        "In a small importing economy with linear domestic supply and demand curves, a **$10 specific tariff** generates a total deadweight welfare loss of **$40 thousand**. If the government raises the tariff to **$25** (remaining non-prohibitive), calculate the new **total deadweight welfare loss** (in `$ thousand`).",
      answer: { type: "number", value: 250 },
      traps: [
        {
          spec: { type: "number", value: 100 },
          feedback: "Deadweight loss does NOT scale linearly (`2.5 × $40k`)! Because both triangle base and height grow by `2.5×`, area scales by `2.5² = 6.25×`.",
        },
      ],
      hints: [
        "With linear curves, raising `t` by a factor `k` multiplies BOTH the triangle height `t` AND the horizontal distortion bases by `k`.",
        "Therefore `DWL` scales quadratically: `DWL_new = DWL_old × (t_new / t_old)²`.",
        "Compute `40 × (25 / 10)² = 40 × 6.25`.",
      ],
      solution: [
        "Scaling ratio `k = {{25/10}} = 2.5`.",
        "Because `DWL ∝ t²`, new DWL = `$40k × (2.5)² = $40k × 6.25` = **$250 thousand**.",
      ],
    },
    {
      id: "4a-trade-integration-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "benefits-trade-comparative-hl",
      marks: 8,
      markbands: EVAL_8M_BANDS,
      question:
        "Evaluate the relevance of David Ricardo's theory of comparative advantage in guiding trade policy for modern developing economies.",
      hints: [
        "Begin by crediting the core insight: specialising by lower opportunity cost expands consumption beyond domestic PPCs even without absolute advantage.",
        "Contrast Ricardo's simplifying assumptions (constant OC, zero transport costs, static factor endowments) against real-world intra-industry trade, primary-commodity volatility, and dynamic comparative advantage.",
        "Synthesise: static comparative advantage explains initial export entry well, yet long-run development requires building *dynamic* comparative advantage.",
      ],
      modelAnswer:
        "David Ricardo's theory of comparative advantage remains a foundational insight: whenever domestic opportunity costs differ, specialising in relatively lower-cost goods and trading at mutually beneficial terms of trade enables even low-productivity economies without absolute advantage to consume beyond their domestic PPCs. For developing nations such as Vietnam or Bangladesh, leveraging abundant labour to specialise initially in textiles, electronics assembly, and agribusiness has driven rapid export-led growth, foreign-exchange inflows, and poverty reduction.\n\nYet strict adherence to static Ricardian prescriptions encounters serious real-world limits. First, the model's assumptions of zero transport costs, constant opportunity costs (linear PPCs), and frictionless factor mobility fail in practice: shipping costs erode narrow margins, while increasing opportunity costs along concave PPCs limit specialisation. Second, blindly following static comparative advantage can lock low-income countries into primary-commodity over-specialisation (such as cocoa or copper), exposing them to sharp price volatility, low income elasticity of demand, and long-term Prebisch–Singer terms-of-trade deterioration. Third, the model ignores unpriced negative environmental externalities from deforestation and carbon-intensive shipping, as well as global protectionist barriers like rich-country farm subsidies.\n\nCrucially, modern trade patterns show that comparative advantage is **dynamic**, not permanently fixed by nature. East Asian economies such as South Korea and Singapore intentionally invested in human capital, infrastructure, and targeted industrial upgrading to shift comparative advantage from labour-intensive assembly toward semiconductors, finance, and biotechnology. Thus, Ricardian theory is highly valuable as a starting compass against wasteful autarky, but developing policymakers must combine openness with interventionist supply-side investment to cultivate higher-value dynamic comparative advantages over time.",
      markScheme: [
        { point: "Explains Ricardian core insight: lower opportunity cost lets even non-absolute-advantage nations consume beyond PPC.", keywords: ["opportunity costs", "beyond their domestic ppcs"] },
        { point: "Applies real-world developing-country success in labour-intensive specialisation (Vietnam/Bangladesh).", keywords: ["vietnam", "bangladesh", "export-led"] },
        { point: "Critiques unrealistic assumptions (transport costs, constant OC / concave PPCs).", keywords: ["transport costs", "concave ppcs"] },
        { point: "Critiques static primary-commodity over-specialisation, volatility, and low YED.", keywords: ["over-specialisation", "volatility", "income elasticity"] },
        { point: "Notes terms-of-trade deterioration or environmental externalities.", keywords: ["environmental externalities", "deterioration"] },
        { point: "Notes real-world distortions such as rich-country agricultural subsidies.", keywords: ["farm subsidies", "protectionist"] },
        { point: "Introduces dynamic comparative advantage via education/infrastructure (South Korea/Singapore).", keywords: ["dynamic", "south korea", "singapore"] },
        { point: "Reaches a balanced concluding synthesis pairing trade openness with supply-side upgrading.", keywords: ["autarky", "supply-side", "higher-value"] },
      ],
    },
    {
      id: "4a-trade-integration-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Compare and contrast",
      guideRef: "economic-integration-wto",
      marks: 10,
      markbands: PAPER1_A_10M_BANDS,
      question:
        "Compare and contrast achieving trade liberalisation through regional trading blocs (such as FTAs and customs unions) versus multilateral agreements under the WTO.",
      hints: [
        "Compare similarities first: both cut tariffs, expand market scale, encourage FDI, and lower consumer prices.",
        "Contrast breadth & efficiency: WTO MFN avoids trade diversion and complex rules of origin ('spaghetti bowl'), whereas regional blocs negotiate faster and integrate deeper (services, labour, standards).",
        "Weigh whether regional blocs are 'building blocks' or 'stumbling blocks' given the WTO's current Appellate Body and Doha gridlock.",
      ],
      modelAnswer:
        "Both regional trading blocs (such as ASEAN, USMCA, or the EU Customs Union) and multilateral World Trade Organization (WTO) agreements aim to lower trade barriers, expand market access, foster economies of scale, attract Foreign Direct Investment, and reduce consumer prices through enhanced competition.\n\nHowever, their mechanisms and global welfare effects diverge markedly. Multilateral WTO liberalisation operates under the Most-Favoured-Nation (MFN) non-discrimination rule, ensuring tariff cuts apply across 160+ members simultaneously. Because MFN liberalisation does not discriminate against outsiders, it generates pure **trade creation** without triggering welfare-reducing **trade diversion**, while establishing uniform global rules that protect smaller open economies from bullying by larger powers. Furthermore, multilateral rules avoid the complex overlapping **rules of origin** ('spaghetti bowl' compliance costs) created by dozens of separate regional FTAs.\n\nConversely, regional trading blocs offer decisive practical speed and depth. Because WTO rounds require unanimous consensus across 160+ diverse nations, negotiations have deadlocked since the Doha Round, and the paralysis of the WTO Appellate Body since 2019 has weakened binding enforcement. Smaller groups of geographically proximate or like-minded nations can negotiate far faster and go much deeper than tariff cuts — harmonising digital trade, product standards, services, and (in Common Markets like the EU Single Market) free movement of labour and capital.\n\nYet regional blocs risk fragmenting the global trading system into rival exclusionary fortresses: high Common External Tariffs can divert imports away from efficient excluded developing nations and erode political momentum for multilateral reform. Thus, economists debate whether regional blocs act as 'building blocks' (pioneering deep standards later adopted globally) or 'stumbling blocks' (entrenching discriminatory trade diversion). Ideally, open regional blocs with low external tariffs — such as RCEP and ASEAN — should complement, rather than replace, a revitalised rules-based WTO.",
      markScheme: [
        { point: "Identifies shared goals: lower tariffs, economies of scale, FDI, and lower consumer prices.", keywords: ["economies of scale", "foreign direct investment", "consumer prices"] },
        { point: "Explains WTO Most-Favoured-Nation (MFN) non-discrimination across 160+ members.", keywords: ["most-favoured-nation", "160+"] },
        { point: "Explains multilateral liberalisation achieves pure trade creation without trade diversion.", keywords: ["trade creation", "without triggering", "trade diversion"] },
        { point: "Notes WTO avoids overlapping rules-of-origin ('spaghetti bowl') administrative costs.", keywords: ["rules of origin", "spaghetti bowl"] },
        { point: "Highlights WTO consensus gridlock (Doha Round) and Appellate Body paralysis since 2019.", keywords: ["doha", "appellate body", "2019"] },
        { point: "Explains regional blocs achieve faster agreement among smaller like-minded groups.", keywords: ["negotiate far faster", "geographically proximate"] },
        { point: "Explains deeper integration scope (digital trade, services, labour/capital in Common Markets).", keywords: ["deeper", "eu single market", "harmonising"] },
        { point: "Explains risk of high CETs excluding poor non-members and causing trade diversion.", keywords: ["fragmenting", "common external tariffs", "excluded"] },
        { point: "Evaluates the 'building blocks vs stumbling blocks' debate.", keywords: ["building blocks", "stumbling blocks"] },
        { point: "Synthesises with real-world examples (ASEAN/RCEP/USMCA) recommending open regionalism complementing WTO.", keywords: ["rcep", "asean", "open regional"] },
      ],
    },
    {
      id: "4a-trade-integration-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "arguments-for-against-protection",
      marks: 15,
      markbands: PAPER1_B_15M_BANDS,
      question:
        "[IB Paper 1 Part (b) Synoptic Challenge] To what extent should developing economies rely on infant-industry protection and domestic subsidies rather than rapid free-trade liberalisation to achieve long-run economic growth and diversification? Use real-world examples to support your answer.",
      hints: [
        "Set up the central tension: rapid free trade (static efficiency, export-led growth, lower consumer/input costs) vs strategic infant-industry support (building dynamic comparative advantage and industrial diversification).",
        "Compare concrete contrasting real-world trajectories: e.g., Singapore/Vietnam's open FDI-driven integration vs South Korea/Taiwan's disciplined, temporary export-oriented industrial policy vs Latin America's costly Import Substitution Industrialisation (ISI) in the 1960s–70s.",
        "Also distinguish tariffs vs domestic production subsidies on welfare (`DWL`) and fiscal capacity grounds before giving a decisive, nuanced judgement.",
      ],
      modelAnswer:
        "Developing economies face a fundamental strategic dilemma: whether to open borders rapidly to free trade — capturing immediate static efficiency and consumer gains — or deploy temporary infant-industry tariffs and production subsidies to diversify away from low-value primary commodities into higher-productivity manufacturing.\n\nThere is a strong theoretical and historical case for selective, temporary infant-industry intervention. Many low-income nations initially hold static comparative advantage only in volatile, low-YED primary commodities, leaving them trapped in vulnerable export structures. Emerging domestic industries require time, capital, and large production runs to slide down their long-run average cost (LRAC) curves until unit costs fall below global prices (`P_w`). Where domestic capital markets are imperfect, targeted production subsidies are theoretically superior to tariffs because they shift `S_dom` downwards while keeping consumer and downstream input prices anchored at `P_w`, incurring zero consumption deadweight loss. Real-world success is exemplified by South Korea and Taiwan between the 1960s and 1990s: governments nurtured nascent steel, electronics, and automotive champions through subsidised credit and selective protection, *but* strictly conditioned support on global export milestones and removed shields as firms matured.\n\nHowever, history shows that protectionist strategies frequently fail disastrously when governance is weak or barriers become permanent. During the 1950s–1970s, several Latin American economies pursued broad Import Substitution Industrialisation (ISI) behind steep permanent tariff walls. Sheltered domestic monopolies faced little incentive to innovate, suffered severe X-inefficiency, inflated input costs for agricultural and industrial exporters, drained fiscal budgets through inefficient state subsidies, and triggered balance-of-payments crises. Moreover, low-income governments often lack the tax base to finance large domestic production subsidies without incurring unsustainable debt or crowding out health and education expenditure.\n\nBy contrast, rapid trade openness integrated into regional blocs and global supply chains has delivered remarkable growth where institutional conditions are supportive. Singapore maintained virtually zero tariffs while welcoming multinational FDI and negotiating 27+ FTAs (including ASEAN and RCEP), achieving dramatic diversification into finance, precision manufacturing, and logistics. Similarly, Vietnam leveraged deep trade liberalisation and WTO accession (2007) to attract electronics multinationals such as Samsung, rapidly transforming from a rural rice exporter into a major manufacturing hub while keeping consumer living costs low.\n\nIn conclusion, developing economies should rely on infant-industry protection and subsidies only to a **limited, strictly disciplined extent** — never as a substitute for outward-oriented trade integration. Purely rapid, unmanaged liberalisation risks leaving weak-infrastructure nations stuck in primary commodities, yet indiscriminate permanent protection breeds stagnation and corruption. The optimal blend pairs open, low-tariff access to global inputs and regional FTAs with time-bound, export-disciplined supply-side investments in education, infrastructure, and targeted R&D subsidies, ensuring domestic firms build genuine dynamic comparative advantage capable of competing at world prices.",
      markScheme: [
        { point: "Frames the central trade-off: static efficiency via rapid openness vs dynamic diversification via infant-industry policy.", keywords: ["strategic dilemma", "primary commodities", "diversify"] },
        { point: "Explains infant-industry economies-of-scale mechanism (sliding down LRAC below `P_w`).", keywords: ["average cost", "p_w", "infant-industry"] },
        { point: "Explains why production subsidies incur smaller DWL than tariffs (zero consumption DWL, price stays at `P_w`).", keywords: ["zero consumption", "s_dom", "superior to tariffs"] },
        { point: "Applies real-world success example of South Korea / Taiwan with export discipline.", keywords: ["south korea", "taiwan", "export milestones"] },
        { point: "Evaluates Latin American Import Substitution Industrialisation (ISI) failure.", keywords: ["latin american", "import substitution", "isi"] },
        { point: "Analyses risks of X-inefficiency, lack of innovation, and inflated exporter input costs.", keywords: ["x-inefficiency", "inflated input costs", "monopolies"] },
        { point: "Evaluates fiscal constraints preventing poor governments from funding heavy subsidies sustainably.", keywords: ["tax base", "unsustainable debt", "crowding out"] },
        { point: "Analyses rapid free-trade & FDI success using Singapore (0% tariffs, ASEAN/RCEP).", keywords: ["singapore", "rcep", "fdi"] },
        { point: "Applies Vietnam's 2007 WTO accession and global value-chain diversification (Samsung).", keywords: ["vietnam", "2007", "samsung"] },
        { point: "Evaluates institutional capacity / governance quality as decisive determinant of policy success.", keywords: ["governance", "institutional"] },
        { point: "Evaluates short-run consumer welfare costs vs long-run structural transformation.", keywords: ["living costs", "structural", "stagnation"] },
        { point: "Evaluates role of complementary supply-side policies (education, infrastructure, R&D).", keywords: ["education", "infrastructure", "r&d"] },
        { point: "Notes risks of unmanaged liberalisation leaving infrastructure-poor countries trapped in primary goods.", keywords: ["unmanaged liberalisation", "stuck in primary"] },
        { point: "Emphasises sunset clauses / time-bound export-disciplined criteria.", keywords: ["time-bound", "export-disciplined"] },
        { point: "Delivers a clear, substantiated 'to what extent' judgement synthesising openness with targeted upgrading.", keywords: ["limited", "outward-oriented", "dynamic comparative advantage"] },
      ],
    },
  ],
};
