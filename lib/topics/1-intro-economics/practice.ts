import type { MarkBand, TopicPractice } from "../../types.ts";

const BANDS_6: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The response does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Limited understanding of the economic concepts; descriptive statements with minimal analytical linkage or accuracy.",
    indicators: ["Identifies a relevant term or direction of change without explaining the economic mechanism."],
  },
  {
    band: "3–4",
    marks: [3, 4],
    descriptor: "Sound explanation of the relevant economic theory and diagram/model logic, though development or evaluative depth is partial.",
    indicators: ["Accurately links economic concepts with clear causal reasoning and relevant context."],
  },
  {
    band: "5–6",
    marks: [5, 6],
    descriptor: "Thorough, well-structured analysis integrating precise terminology, clear causal chains, and balanced evaluative insight.",
    indicators: ["Explicitly weighs trade-offs, assumptions (e.g. ceteris paribus), or stakeholder perspectives."],
  },
];

const BANDS_8: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The response does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–2",
    marks: [1, 2],
    descriptor: "Superficial reference to the stimulus or economic concepts; largely descriptive without analytical depth.",
  },
  {
    band: "3–5",
    marks: [3, 5],
    descriptor: "Clear application of relevant economic theory to the context with mostly accurate terminology; evaluation is present but limited or one-sided.",
    indicators: ["Explains core mechanisms accurately and references specific context clues."],
  },
  {
    band: "6–8",
    marks: [6, 8],
    descriptor: "Sustained, well-developed analysis and balanced evaluation anchored directly in the stimulus and IB Key Concepts.",
    indicators: ["Weighs short- vs long-run impacts, stakeholder conflicts, and policy limitations to reach a justified judgement."],
  },
];

const BANDS_10: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the specific demands of the question; few relevant economic terms or flawed diagram explanation.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Sound understanding of the question with relevant economic theory and mostly accurate diagram logic, though some links remain underdeveloped.",
    indicators: ["Defines key concepts accurately and explains at least two mechanisms clearly."],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Clear, thorough explanation using appropriate economic terminology, accurate diagram/model mechanics, and relevant real-world examples.",
    indicators: ["Clearly distinguishes movements along, movements within, and shifts of curves with explicit causal reasoning."],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Comprehensive, precise AO2 explanation fully addressing every element of the prompt, integrating accurate model mechanics and illuminating real-world illustration.",
    indicators: ["Flawless precision across every concept requested, seamless integration of diagram logic, and crisp examples."],
  },
];

const BANDS_15: MarkBand[] = [
  {
    band: "0",
    marks: [0, 0],
    descriptor: "The work does not reach a standard described by the descriptors below.",
  },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question; unsubstantiated assertions with minimal economic theory or real-world context.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic theory is explained, but analysis is mostly one-sided and real-world examples or evaluation are thin.",
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Sound economic analysis with relevant terminology and some attempt at balanced evaluation, though synthesis or real-world depth is uneven.",
    indicators: ["Explains both sides of the debate and introduces at least one concrete real-world country/policy example."],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Well-developed, thorough analysis supported by strong real-world examples and effective evaluation weighing competing perspectives and trade-offs.",
    indicators: ["Integrates IB Key Concepts (efficiency, equity, intervention, sustainability) and evaluates limitations of both approaches."],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Exemplary IB Paper 1(b) synthesis: incisive theory, well-chosen real-world examples, nuanced evaluation of assumptions/context/stakeholders, and a clear, justified overall judgement.",
    indicators: ["Directly synthesises efficiency vs equity, market failure vs government failure, and contextual trade-offs into a decisive conclusion."],
  },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ: 10 questions (4 MCQ balanced [1,1,1,1] + 6 auto-marked short)
  // ===========================================================================
  quiz: [
    {
      id: "1-intro-economics-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "scarcity-choice-ppc",
      question:
        "A city council owns an empty plot of land and can build either a sports stadium, a public library, or a solar park (ranked in that exact order of preference). If it builds the sports stadium, what is the **opportunity cost**?",
      options: [
        "The value of the public library that was foregone.",
        "The combined value of both the public library and the solar park.",
        "Zero, because the council already owned the land outright.",
        "The cash wages paid to the stadium's security staff after opening.",
      ],
      answerIndex: 0,
      explanation:
        "Opportunity cost is strictly the value of the **single next best alternative foregone** — here, the second-ranked public library. You never sum all rejected options, and owning the land does not eliminate opportunity cost.",
      hints: ["Opportunity cost counts only the single highest-ranked alternative given up."],
    },
    {
      id: "1-intro-economics-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "scarcity-choice-ppc",
      question:
        "State the one-word **factor reward (income)** earned by **entrepreneurship** for organising production and bearing business risk.",
      answer: { type: "text", accept: ["profit", "profits"], display: "profit" },
      solution: [
        "The four factors of production and their rewards are Land → Rent, Labour → Wages, Capital → Interest, and Entrepreneurship → **Profit**.",
      ],
      hints: ["Recall the four factor incomes: rent, wages, interest, and ..."],
      commonError: "Confusing interest (reward for capital) with profit (reward for entrepreneurship).",
    },
    {
      id: "1-intro-economics-quiz-q03",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "scarcity-choice-ppc",
      question:
        "An economy has a **linear PPC** capable of producing a maximum of **60 trucks** or **150 cars** per day. Calculate the constant opportunity cost of producing **1 additional truck**, measured in cars.",
      answer: { type: "number", value: 2.5, display: "2.5" },
      traps: [
        {
          spec: { type: "number", value: 0.4 },
          feedback: "That is 60 ÷ 150, which is the opportunity cost of 1 car (in trucks). Flip the ratio to find the cost of 1 truck.",
        },
      ],
      solution: [
        "Per-unit opportunity cost of 1 truck = {{(\"Cars sacrificed\") / (\"Trucks gained\")}}.",
        "{{150 / 60 = 2.5}} cars per truck.",
      ],
      hints: [
        "Place the good being sacrificed (cars) in the numerator and the good being gained (trucks) in the denominator.",
        "Divide 150 by 60.",
      ],
      commonError: "Inverting the fraction (60 ÷ 150 = 0.4) instead of 150 ÷ 60 = 2.5.",
    },
    {
      id: "1-intro-economics-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "circular-flow-economic-systems",
      question:
        "Which of the following is classified as an **injection** into the five-sector circular flow of income?",
      options: [
        "Households depositing 15% of monthly wages into bank savings accounts.",
        "Foreign tourists purchasing hotel stays and meals inside the domestic economy.",
        "Domestic consumers buying imported smartphones from overseas manufacturers.",
        "Workers paying mandatory personal income tax to the national treasury.",
      ],
      answerIndex: 1,
      explanation:
        "Foreign tourist expenditure inside the domestic economy counts as an **export of services (X)** — an injection of outside spending into domestic firms. Savings (S), imports (M), and taxation (T) are all leakages.",
      hints: ["Injections bring new spending into domestic firms: Investment (I), Government spending (G), and Exports (X)."],
    },
    {
      id: "1-intro-economics-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "circular-flow-economic-systems",
      question:
        "An open economy records **S = $35 bn**, **T = $45 bn**, **M = $50 bn**, **I = $40 bn**, **G = $55 bn**, and **X = $50 bn**. Calculate the **net injection** {{(I + G + X) - (S + T + M)}} in $ billion.",
      answer: { type: "number", value: 15, display: "15" },
      traps: [
        {
          spec: { type: "number", value: -15 },
          feedback: "Check the sign: injections ($145 bn) exceed leakages ($130 bn), so net injection is positive (+15).",
        },
      ],
      solution: [
        "Total leakages {{W = S + T + M = 35 + 45 + 50 = 130}} ($ billion).",
        "Total injections {{J = I + G + X = 40 + 55 + 50 = 145}} ($ billion).",
        "Net injection = {{145 - 130 = 15}} ($ billion), so national income expands.",
      ],
      hints: [
        "Sum S + T + M for total leakages and I + G + X for total injections.",
        "Subtract total leakages from total injections.",
      ],
    },
    {
      id: "1-intro-economics-quiz-q06",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "methodology-positive-normative",
      question:
        "Consider the claim: *'Raising fuel duty by 20% will double domestic petrol consumption within six months.'* Even though economists know this prediction is almost certainly false, how is it classified?",
      options: [
        "A normative claim, because flawed predictions rely on political bias.",
        "A value judgement, because fuel duties involve environmental ethics.",
        "A positive statement, because it is an objective prediction testable against data.",
        "An ideological opinion, because future events cannot be measured.",
      ],
      answerIndex: 2,
      explanation:
        "A positive statement is any objective statement that can be tested and potentially refuted using empirical data — even if it turns out to be false or refers to a future outcome.",
      hints: [
        "Does 'positive' mean 'proven true', or 'empirically testable/refutable'?",
        "Could fuel consumption data six months later test this claim?",
      ],
    },
    {
      id: "1-intro-economics-quiz-q07",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "State",
      guideRef: "methodology-positive-normative",
      question:
        "State the two-word Latin phrase economists use to mean *'all other things being equal (held constant)'*.",
      answer: { type: "text", accept: ["ceteris paribus"], display: "ceteris paribus" },
      solution: [
        "***Ceteris paribus*** holds confounding variables constant so economists can isolate a single cause-and-effect relationship.",
      ],
      hints: ["Starts with 'ceteris ...'."],
    },
    {
      id: "1-intro-economics-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "methodology-positive-normative",
      question:
        "Which one-word IB Economics Key Concept refers to **fairness or justice** in the distribution of income and opportunity (as distinct from mathematical sameness)?",
      answer: { type: "text", accept: ["equity"], display: "equity" },
      traps: [
        {
          spec: { type: "text", accept: ["equality"] },
          feedback: "Equality means identical outcomes (sameness). The normative concept of fairness is equity.",
        },
      ],
      solution: [
        "**Equity** is the normative concept of fairness, whereas **equality** is the positive, measurable concept of sameness.",
      ],
      hints: [
        "Distinguish the normative term for fairness from the positive term for sameness.",
        "It is one of the three 'E's among the 9 IB Economics Key Concepts.",
      ],
    },
    {
      id: "1-intro-economics-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "evolution-economic-thought",
      question:
        "Which pairing accurately links a 20th-century school of economic thought to its signature policy prescription during an economic crisis?",
      options: [
        "Keynesianism → Abolish public spending so wages fall rapidly to clear markets.",
        "Monetarism → Run large permanent fiscal deficits to maximise aggregate demand.",
        "Classical Say's Law → Nationalise commercial banks to plan household consumption.",
        "Keynesianism → Use active expansionary fiscal policy to lift deficient aggregate demand.",
      ],
      answerIndex: 3,
      explanation:
        "John Maynard Keynes argued in 1936 that when private confidence collapses and wages are sticky downwards, governments should deploy expansionary fiscal policy (higher G or lower T) to revive aggregate demand and employment.",
      hints: [
        "Recall the sharp divide between 1930s Keynes and 1970s Monetarism (Friedman).",
        "Which school specifically advocated counter-cyclical fiscal stimulus during slumps?",
      ],
    },
    {
      id: "1-intro-economics-quiz-q10",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "State",
      guideRef: "evolution-economic-thought",
      question:
        "Name the 21st-century economist who authored **Doughnut Economics** (2017), framing prosperity between a social foundation and an ecological ceiling.",
      answer: { type: "text", accept: ["Kate Raworth", "Raworth"], display: "Kate Raworth" },
      solution: [
        "**Kate Raworth** developed the Doughnut Economy model, aiming for a safe and just operating space between the social foundation and planetary ecological ceiling.",
      ],
      hints: [
        "Her framework was adopted by Amsterdam in 2020 to guide circular city policy.",
        "Surname starts with R.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS: 2 papers × 15 questions = 30 IB-style questions
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PRACTICE PAPER 1: Scarcity, PPC, Circular Flow & Economic Systems
    // -------------------------------------------------------------------------
    {
      id: "1-intro-economics-p1",
      title: "Practice Paper 1: Scarcity, PPC, Circular Flow & Economic Systems",
      level: "SL",
      questions: [
        {
          id: "1-intro-economics-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "scarcity-choice-ppc",
          question:
            "Identify the one-word **factor of production** that encompasses all natural resources (soil, minerals, forests, water) and earns **rent** as its factor reward.",
          answer: { type: "text", accept: ["land"], display: "land" },
          solution: [
            "**Land** includes all natural resources on, above, or below the Earth's surface, and its factor income is **rent**.",
          ],
          hints: ["One of the four factors: Land, Labour, Capital, Entrepreneurship."],
        },
        {
          id: "1-intro-economics-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "scarcity-choice-ppc",
          question:
            "Moving along its PPC, an economy reallocates resources from producing **(10 units of Good X, 85 units of Good Y)** to **(25 units of Good X, 40 units of Good Y)**. Calculate the **total opportunity cost** of this move, measured in units of Good Y.",
          answer: { type: "number", value: 45, display: "45 units" },
          traps: [
            {
              spec: { type: "number", value: 15 },
              feedback: "15 is the gain in Good X (25 − 10). Opportunity cost measures the units of Good Y sacrificed (85 − 40).",
            },
          ],
          solution: [
            "Good Y falls from 85 units to 40 units.",
            "Total opportunity cost = {{85 - 40 = 45}} units of Good Y sacrificed.",
          ],
          hints: ["How many units of Good Y had to be given up to move from 85 down to 40?"],
        },
        {
          id: "1-intro-economics-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "scarcity-choice-ppc",
          question:
            "Using the same PPC movement from **(10 units of Good X, 85 units of Good Y)** to **(25 units of Good X, 40 units of Good Y)**, calculate the **opportunity cost per additional unit of Good X** (in units of Good Y).",
          answer: { type: "number", value: 3, display: "3" },
          traps: [
            {
              spec: { type: "number", value: 45 },
              feedback: "45 is the total loss of Good Y across all 15 additional units of Good X. Divide by 15 to get the per-unit cost.",
            },
          ],
          solution: [
            "Good Y sacrificed = {{85 - 40 = 45}} units; Good X gained = {{25 - 10 = 15}} units.",
            "Per-unit opportunity cost = {{45 / 15 = 3}} units of Good Y per unit of Good X.",
          ],
          hints: [
            "Find both ΔY (sacrificed) and ΔX (gained).",
            "Compute ΔY ÷ ΔX = 45 ÷ 15.",
          ],
        },
        {
          id: "1-intro-economics-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "scarcity-choice-ppc",
          question:
            "Following major investment in automation, an economy's maximum annual potential output of capital goods shifts outward from **250 million units** to **310 million units**. Calculate the **percentage increase** in potential capital-goods output.",
          answer: { type: "number", value: 24, display: "24%" },
          traps: [
            {
              spec: { type: "number", value: 19.4, tolerance: 0.1 },
              feedback: "Divide the change (60) by the original value (250), not the new value (310).",
            },
          ],
          solution: [
            "Absolute expansion = {{310 - 250 = 60}} million units.",
            "Percentage expansion = {{(60 / 250) * 100 = 24}}%.",
          ],
          hints: [
            "Use the percentage change formula: [(New − Old) ÷ Old] × 100.",
            "Divide 60 by 250 and multiply by 100.",
          ],
        },
        {
          id: "1-intro-economics-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "circular-flow-economic-systems",
          question:
            "In a five-sector open economy, **Savings (S) = $42 billion**, **Taxation (T) = $68 billion**, **Imports (M) = $55 billion**, **Investment (I) = $50 billion**, **Government Spending (G) = $64 billion**, and **Exports (X) = $61 billion**. Calculate **total leakages (W)** in $ billion.",
          answer: { type: "number", value: 165, display: "$165 billion" },
          traps: [
            {
              spec: { type: "number", value: 175 },
              feedback: "$175 billion is total injections (I + G + X). Sum S + T + M for total leakages.",
            },
          ],
          solution: [
            "Total leakages {{W = S + T + M = 42 + 68 + 55 = 165}} ($ billion).",
          ],
          hints: [
            "Identify the three leakages: Savings (S), Taxation (T), and Imports (M).",
            "Add 42 + 68 + 55.",
          ],
        },
        {
          id: "1-intro-economics-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "circular-flow-economic-systems",
          question:
            "An economy records **S = $48 bn**, **T = $62 bn**, **M = $40 bn**, **I = $44 bn**, **G = $58 bn**, and **X = $36 bn**. Calculate the **net circular-flow injection** {{(I + G + X) - (S + T + M)}} in $ billion (include a minus sign if leakages exceed injections).",
          answer: { type: "number", value: -12, display: "−12" },
          traps: [
            {
              spec: { type: "number", value: 12 },
              feedback: "Check the sign: leakages ($150 bn) exceed injections ($138 bn), so the net injection is negative (−12).",
            },
          ],
          solution: [
            "Total leakages {{W = 48 + 62 + 40 = 150}} ($ billion).",
            "Total injections {{J = 44 + 58 + 36 = 138}} ($ billion).",
            "Net injection = {{138 - 150 = -12}} ($ billion), causing national income to contract.",
          ],
          hints: [
            "Calculate J = I + G + X and W = S + T + M separately.",
            "Subtract W from J; because W > J, your answer must be negative.",
          ],
        },
        {
          id: "1-intro-economics-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "circular-flow-economic-systems",
          question:
            "In a five-sector economy, **S = $55 bn**, **T = $80 bn**, **M = $65 bn**, **I = $62 bn**, and **X = $53 bn**. Calculate the exact level of **Government Spending (G)** (in $ billion) needed for the circular flow to be in macroeconomic equilibrium.",
          answer: { type: "number", value: 85, display: "$85 billion" },
          traps: [
            {
              spec: { type: "number", value: 80 },
              feedback: "Setting G = T ($80 bn) balances only the budget, leaving total injections ($195 bn) below total leakages ($200 bn).",
            },
          ],
          solution: [
            "Total leakages {{W = S + T + M = 55 + 80 + 65 = 200}} ($ billion).",
            "For equilibrium, {{I + G + X = 200}} ⇒ {{62 + G + 53 = 200}}.",
            "{{G = 200 - 115 = 85}} ($ billion).",
          ],
          hints: [
            "Use the aggregate equilibrium identity S + T + M = I + G + X.",
            "Compute total leakages (200), then subtract I + X (62 + 53).",
          ],
        },
        {
          id: "1-intro-economics-p1-q08",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "scarcity-choice-ppc",
          marks: 2,
          question:
            "Define **opportunity cost** and explain briefly why state-funded healthcare provided at zero charge to patients is classified as an **economic good** rather than a free good. [2 marks]",
          modelAnswer:
            "Opportunity cost is the value of the next best alternative foregone whenever a scarce choice is made. Although patients pay zero fee at the hospital door, state-funded healthcare is an economic good because doctors, clinics, equipment, and tax revenues are scarce resources that could have been devoted to schools or public transport instead, creating a real trade-off.",
          markScheme: [
            {
              point: "Accurately defines opportunity cost as the value of the next best alternative foregone.",
              keywords: ["next best alternative", "foregone", "forgone"],
            },
            {
              point: "Explains that state healthcare uses scarce factors of production (doctors, buildings, tax funds) that have alternative uses, so it carries an opportunity cost unlike abundant free goods.",
              keywords: ["scarce resources", "alternative", "doctors", "tax revenues", "trade-off"],
            },
          ],
          hints: [
            "Use the exact IB wording 'next best alternative foregone' for the first mark.",
            "Explain *why* zero price to the patient does not mean zero cost to society.",
          ],
        },
        {
          id: "1-intro-economics-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "scarcity-choice-ppc",
          marks: 4,
          question:
            "With reference to a PPC diagram, explain the distinction between **actual economic growth** and **potential economic growth**, including one valid cause of each. [4 marks]",
          modelAnswer:
            "Actual growth occurs when an economy increases its real output by bringing previously idle or unemployed resources into use. On a PPC diagram, this is depicted as a movement from an inefficient interior point inside the curve outward toward the existing boundary — caused, for example, by falling cyclical unemployment during a recovery. Potential growth represents an expansion in the economy's long-run productive capacity. On a PPC diagram, this is shown by an outward shift of the entire frontier to the right, driven by an increase in the quantity or quality of factors of production (such as investment in machinery, education, or technological innovation).",
          markScheme: [
            {
              point: "Defines actual growth as using idle/unemployed resources to increase real output, shown as a movement from a point inside the PPC toward the boundary.",
              keywords: ["interior point", "inside the curve", "toward the existing boundary", "idle", "unemployed resources"],
            },
            {
              point: "Provides a valid cause of actual growth (e.g. falling unemployment or reducing spare capacity).",
              keywords: ["cyclical unemployment", "recovery", "spare capacity", "falling unemployment"],
            },
            {
              point: "Defines potential growth as an increase in productive capacity, shown as an outward shift of the entire PPC.",
              keywords: ["outward shift", "productive capacity", "entire frontier"],
            },
            {
              point: "Provides a valid cause of potential growth (higher quantity/quality of factors or technological progress).",
              keywords: ["quantity or quality", "technological innovation", "investment in machinery", "education"],
            },
          ],
          hints: [
            "Contrast a movement *inside* the PPC with a *shift* of the PPC curve itself.",
            "Give one distinct real-world cause for each type of growth.",
          ],
        },
        {
          id: "1-intro-economics-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "scarcity-choice-ppc",
          marks: 4,
          question:
            "Explain why a realistic Production Possibilities Curve is **bowed outward (concave to the origin)** rather than a straight line. [4 marks]",
          modelAnswer:
            "A concave frontier reflects the law of increasing opportunity cost: as society transfers successive resources out of one industry (say, agriculture) into another (say, semiconductors), each extra unit of semiconductors requires giving up ever-larger quantities of food. This happens because factors of production are specialised and imperfectly adaptable across sectors. Initially, the economy reallocates versatile workers and land poorly suited to farming, keeping output losses small. Eventually, however, highly fertile farmland and expert agronomists must be diverted into electronics, causing steep declines in agricultural output. A straight line would occur only in the unrealistic case where all resources are perfectly substitutable, yielding constant opportunity cost.",
          markScheme: [
            {
              point: "Links concave curvature directly to increasing opportunity cost.",
              keywords: ["increasing opportunity cost", "ever-larger quantities", "steep declines"],
            },
            {
              point: "Identifies factor specialisation / imperfect adaptability of resources across industries.",
              keywords: ["specialised", "specialized", "imperfectly adaptable", "not equally suited"],
            },
            {
              point: "Traces the step-by-step reallocation mechanism (least-suited factors moved first, best-suited factors moved last).",
              keywords: ["initially", "versatile", "fertile", "agronomists", "last"],
            },
            {
              point: "Contrasts with a linear PPC where perfectly substitutable factors generate constant opportunity cost.",
              keywords: ["constant opportunity cost", "perfectly substitutable", "straight line"],
            },
          ],
          hints: [
            "Name the economic law behind the bowed-out shape.",
            "Explain why moving the first worker between two industries costs far less output than moving the last specialist.",
          ],
        },
        {
          id: "1-intro-economics-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "circular-flow-economic-systems",
          marks: 4,
          question:
            "Using the five-sector circular flow of income model, explain how a sharp decline in **export revenue (X)** affects national income and employment, *ceteris paribus*. [4 marks]",
          modelAnswer:
            "Exports represent an injection of foreign spending into domestic firms within the five-sector model. Starting from equilibrium where total injections equal total leakages (I + G + X = S + T + M), a sharp drop in X causes total injections to fall below total leakages (J < W), creating a net withdrawal from the domestic income stream. Domestic exporters experience falling orders and accumulate unsold inventory, prompting them to scale back production and lay off workers or cut hours. Because one firm's factor payments are households' wages and profits, lower factor incomes further reduce consumer expenditure (C), causing national income and employment to contract until lower induced savings, taxes, and imports restore balance.",
          markScheme: [
            {
              point: "Identifies exports (X) as an injection into the circular flow of income.",
              keywords: ["injection", "foreign spending"],
            },
            {
              point: "States that falling X causes total injections to fall below total leakages (I + G + X < S + T + M / net withdrawal).",
              keywords: ["below total leakages", "j < w", "net withdrawal", "i + g + x"],
            },
            {
              point: "Explains firms' real-sector response: rising inventories lead to lower output and job cuts/unemployment.",
              keywords: ["inventory", "inventories", "scale back production", "lay off"],
            },
            {
              point: "Traces the secondary ripple through lower factor incomes and reduced consumer expenditure (C), contracting national income.",
              keywords: ["factor incomes", "consumer expenditure", "contract"],
            },
          ],
          hints: [
            "Classify exports as either a leakage or an injection, then compare J with W.",
            "Trace the transmission from export firms → output/jobs → household incomes → consumer spending (C).",
          ],
        },
        {
          id: "1-intro-economics-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "circular-flow-economic-systems",
          marks: 4,
          question:
            "Compare and contrast how a **free-market economy** and a **centrally planned economy** address scarcity and resource allocation. [4 marks]",
          modelAnswer:
            "Both systems confront the identical basic problem of finite resources versus unlimited wants and must determine what, how, and for whom to produce. However, they differ starkly in ownership and coordination. In a free-market system, private individuals own factors of production and the price mechanism guides allocation through demand, supply, and profit incentives, encouraging innovation and productive efficiency — yet risking wide income inequality and market failures like pollution. In a centrally planned economy, the state owns major resources and a central bureau sets production quotas and prices, which can prioritise basic needs and narrow income gaps, but frequently generates coordination shortages, bureaucracy, and weak work incentives.",
          markScheme: [
            {
              point: "Identifies a genuine similarity: both systems face scarcity and must resolve what, how, and for whom to produce.",
              keywords: ["what, how, and for whom", "finite resources", "basic problem"],
            },
            {
              point: "Contrasts resource ownership and allocation mechanism (private property + price mechanism vs state ownership + central quotas).",
              keywords: ["price mechanism", "private individuals", "central bureau", "quotas", "state owns"],
            },
            {
              point: "Evaluates key strength/weakness of free markets (efficiency/innovation vs market failure/inequality).",
              keywords: ["profit incentives", "productive efficiency", "market failures", "inequality"],
            },
            {
              point: "Evaluates key strength/weakness of central planning (basic needs/lower inequality vs shortages/bureaucracy/weak incentives).",
              keywords: ["basic needs", "shortages", "bureaucracy", "weak work incentives"],
            },
          ],
          hints: [
            "Remember 'Compare and contrast' requires BOTH a similarity and clear point-by-point differences.",
            "Contrast ownership, allocation mechanism, efficiency/incentives, and equity.",
          ],
        },
        {
          id: "1-intro-economics-p1-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "scarcity-choice-ppc",
          marks: 6,
          markbands: BANDS_6,
          question:
            "Examine the **intertemporal trade-off** faced by an economy deciding whether to devote a larger share of its scarce resources to **capital goods** instead of **consumer goods** today. [6 marks]",
          modelAnswer:
            "Capital goods (machinery, ports, factories, energy grids) are human-made productive assets that expand future capacity, whereas consumer goods (food, clothing, entertainment) directly raise current material living standards. Moving along today's PPC toward a capital-intensive point imposes an immediate opportunity cost: households must sacrifice current consumption today, which can lower short-run economic well-being and provoke political resistance — especially in low-income nations where basic needs remain unmet. However, provided gross capital production exceeds annual depreciation, net investment enlarges the nation's physical capital stock, shifting future PPCs further outward. Over the long run, this potential growth allows society to enjoy greater quantities of both consumer and capital goods simultaneously. Ultimately, the optimal choice depends on current living standards, whether capital investment is productive rather than wasteful, and whether households have sufficient savings or foreign inflows to finance investment without severe short-run hardship.",
          markScheme: [
            {
              point: "Distinguishes capital goods (future productive capacity) from consumer goods (immediate satisfaction of wants).",
              keywords: ["productive assets", "current material living standards", "machinery"],
            },
            {
              point: "Explains the immediate opportunity cost along the current PPC (sacrificing consumer goods today).",
              keywords: ["immediate opportunity cost", "sacrifice current consumption", "short-run"],
            },
            {
              point: "Explains the long-run growth mechanism: net investment (gross capital output > depreciation) expands capital stock.",
              keywords: ["depreciation", "net investment", "capital stock"],
            },
            {
              point: "Links expanded capital stock to an outward shift of future PPCs, enabling more of both goods later.",
              keywords: ["future ppcs", "outward", "both consumer and capital goods"],
            },
            {
              point: "Considers equity/welfare constraint in low-income developing economies where cutting consumption threatens basic needs.",
              keywords: ["low-income", "basic needs", "hardship", "political resistance"],
            },
            {
              point: "Evaluates quality/efficiency caveat (capital projects must be productive, not white-elephant waste, or financed via FDI/borrowing).",
              keywords: ["productive", "wasteful", "foreign inflows", "optimal choice"],
            },
          ],
          hints: [
            "Start by distinguishing what capital goods and consumer goods do for living standards now vs later.",
            "Mention depreciation — why must gross investment exceed depreciation for the PPC to shift outward?",
            "Evaluate why sacrificing current consumption is far harder for a low-income country than for a wealthy one.",
          ],
        },
        {
          id: "1-intro-economics-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "scarcity-choice-ppc",
          marks: 10,
          markbands: BANDS_10,
          question:
            "**IB Paper 1(a) style [10 marks]:** Explain how a **Production Possibilities Curve (PPC)** diagram can be used to illustrate the economic concepts of **scarcity, choice, opportunity cost, unemployment, and potential economic growth**.",
          modelAnswer:
            "A Production Possibilities Curve (PPC) shows the maximum combinations of two goods — for example, Capital Goods on the vertical axis and Consumer Goods on the horizontal axis — that an economy can produce per year when all available factors of production are fully and efficiently employed at a fixed level of technology.\n\nFirst, the boundary itself demonstrates **scarcity**: any combination plotted outside the frontier (point X) is currently unattainable because finite land, labour, capital, and entrepreneurship constrain total output relative to unlimited wants.\n\nSecond, because the economy cannot produce everything at once, society must exercise **choice** by selecting a specific productively efficient point along the frontier (such as point A with higher capital goods or point B with higher consumer goods), answering what to produce.\n\nThird, the downward (negative) slope of the frontier demonstrates **opportunity cost**: moving along the curve from point A to point B to gain extra consumer goods forces a sacrifice of capital goods — the value of the next best alternative foregone. Moreover, a realistic PPC is concave (bowed out) to the origin, demonstrating **increasing opportunity cost** because specialised factors of production are imperfectly adaptable between industries.\n\nFourth, any combination lying inside the frontier (point U) illustrates **unemployment** and productive inefficiency: idle workers or unused factories leave actual output below maximum capacity. Moving from U outward toward the boundary illustrates **actual growth**, potentially gaining more of both goods with zero sacrifice.\n\nFinally, an outward shift of the entire frontier from PPC₁ to PPC₂ illustrates **potential economic growth**: an expansion in long-run productive capacity caused by greater quantity or quality of factors of production (such as Singapore investing in port automation, SkillsFuture worker training, or skilled immigration) or technological innovation. This makes previously unattainable combinations like point X achievable over time.",
          markScheme: [
            {
              point: "Correctly defines the PPC (maximum combinations of two goods with full/efficient employment of resources and fixed technology).",
              keywords: ["maximum combinations", "fully and efficiently employed", "fixed level of technology"],
            },
            {
              point: "Specifies properly labelled axes with two distinct goods (e.g. Capital Goods vs Consumer Goods).",
              keywords: ["vertical axis", "horizontal axis", "capital goods", "consumer goods"],
            },
            {
              point: "Explains scarcity via the boundary and unattainable exterior point (X).",
              keywords: ["unattainable", "point x", "finite land"],
            },
            {
              point: "Explains choice via selecting a specific combination (point A vs point B) on the frontier.",
              keywords: ["productively efficient", "point a", "point b", "what to produce"],
            },
            {
              point: "Explains opportunity cost via the negative slope and trade-off moving along the curve.",
              keywords: ["negative", "slope", "next best alternative foregone", "sacrifice"],
            },
            {
              point: "Explains concavity / increasing opportunity cost due to specialised, imperfectly adaptable factors.",
              keywords: ["concave", "increasing opportunity cost", "imperfectly adaptable"],
            },
            {
              point: "Explains unemployment / inefficiency via an interior point (U) inside the frontier.",
              keywords: ["point u", "idle workers", "inside the frontier", "inefficiency"],
            },
            {
              point: "Distinguishes actual growth (movement from U toward PPC₁) from potential growth.",
              keywords: ["actual growth", "toward the boundary"],
            },
            {
              point: "Explains potential growth via an outward shift of the entire curve (PPC₁ to PPC₂) driven by quantity/quality of factors or technology.",
              keywords: ["ppc₁ to ppc₂", "outward shift", "quantity or quality", "technological innovation"],
            },
            {
              point: "Integrates a concrete real-world example of capacity expansion (e.g. automation, worker training, immigration).",
              keywords: ["singapore", "skillsfuture", "automation", "immigration"],
            },
          ],
          hints: [
            "Open with a crisp definition of the PPC and state exact axis labels (never Price/Quantity!).",
            "Devote one clear paragraph to each of the five named concepts: scarcity, choice, opportunity cost (mentioning concavity!), unemployment/actual growth, and potential growth.",
            "Include a real-world example of what shifts a country's PPC outward.",
          ],
        },
        {
          id: "1-intro-economics-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "circular-flow-economic-systems",
          marks: 15,
          markbands: BANDS_15,
          question:
            "**IB Paper 1(b) style [15 marks]:** Using real-world examples, discuss the view that a **mixed economy** is superior to a pure **free-market economy** in achieving both **efficiency** and **equity**.",
          modelAnswer:
            "A pure free-market economy allocates resources solely via private property rights and the price mechanism without state intervention, whereas a mixed economy blends competitive markets with targeted government intervention. Evaluating whether a mixed system is superior requires weighing market efficiency and dynamic innovation against market failures, equity, and the countervailing risk of government failure.\n\n**Case for the free market (efficiency & innovation):** Following Adam Smith's invisible hand, competitive prices act as real-time signals and profit incentives. Firms must cut unit costs (productive efficiency) and supply products consumers genuinely value (allocative efficiency) or exit the market. Private competition in technology and global retail — for instance, rapid smartphone innovation and low-cost consumer logistics — demonstrates how market incentives outperform bureaucratic control without taxing public budgets.\n\n**Why pure free markets fail on efficiency and equity:** Left completely unregulated, however, free markets systematically fail. First, profit-seeking firms ignore negative externalities such as industrial carbon emissions and air pollution, overproducing socially harmful output and threatening sustainability. Second, public goods (national defence, street lighting, flood barriers) are non-excludable and non-rivalrous, triggering the free-rider problem so private firms under-provide or omit them entirely. Third, unregulated industries often consolidate into monopolies that restrict output and charge excessive prices. Fourth, market outcomes reward those who already possess capital, land, and scarce skills, generating severe income and wealth inequality that violates normative standards of equity and traps poorer households in poverty.\n\n**How mixed economies address these failures (real-world examples):** Mixed economies deploy targeted intervention — taxes, subsidies, regulation, and direct provision — to correct failures while preserving market dynamism. Singapore exemplifies a strategic mixed model: it maintains open trade and low corporate taxes to harness private enterprise, yet the Housing & Development Board (HDB) houses over 75% of residents affordably, the Central Provident Fund (CPF) secures retirement savings, and a rising carbon tax prices emissions. Similarly, Nordic mixed economies like Sweden combine competitive export firms with progressive taxation and universal healthcare and education, achieving high human development and lower income inequality.\n\n**Evaluation — risk of government failure and contextual trade-offs:** Nevertheless, mixed economies are not automatically superior if state intervention is poorly designed or captured by special interests. Excessive regulation, inefficient state-owned monopolies, high distortionary taxes that blunt work and investment incentives, and imperfect policymaker information can cause government failure — wasting scarce resources just as severely as market failure. In addition, countries face a genuine equity–efficiency trade-off: financing generous transfers requires taxation that may dampen private entrepreneurship in the long run.\n\n**Judgement:** Overall, a well-governed mixed economy is clearly superior to a pure free market in simultaneously advancing efficiency and equity. Because pure free markets cannot resolve externalities, public goods, monopoly power, or severe inequity on their own, selective state intervention is indispensable — provided institutions remain transparent, accountable, and market-friendly so that government failure does not outweigh the market failures being corrected.",
          markScheme: [
            {
              point: "Clearly distinguishes pure free-market economies from mixed economies.",
              keywords: ["private property rights", "blends competitive markets", "targeted government intervention"],
            },
            {
              point: "Explains the price mechanism / invisible hand promoting allocative and productive efficiency.",
              keywords: ["invisible hand", "productive efficiency", "allocative efficiency"],
            },
            {
              point: "Notes dynamic innovation and cost-discipline strengths of competitive private enterprise.",
              keywords: ["profit incentives", "smartphone", "innovation"],
            },
            {
              point: "Identifies negative externalities and sustainability failure in unregulated markets.",
              keywords: ["negative externalities", "carbon emissions", "sustainability"],
            },
            {
              point: "Explains under-provision of public goods via non-excludability and the free-rider problem.",
              keywords: ["public goods", "free-rider problem", "non-excludable"],
            },
            {
              point: "Notes monopoly power as a source of market inefficiency under laissez-faire.",
              keywords: ["monopolies", "restrict output", "excessive prices"],
            },
            {
              point: "Explains why pure markets fail on equity (concentrating rewards among owners of capital/land/skills).",
              keywords: ["wealth inequality", "normative standards", "poverty"],
            },
            {
              point: "Explains core mixed-economy policy tools (taxes, subsidies, regulation, direct state provision).",
              keywords: ["subsidies", "regulation", "direct provision"],
            },
            {
              point: "Uses a concrete real-world mixed-economy example (e.g. Singapore HDB/CPF/carbon tax).",
              keywords: ["singapore", "hdb", "cpf"],
            },
            {
              point: "Uses a second contrasting real-world example (e.g. Sweden / Nordic progressive tax & universal services).",
              keywords: ["sweden", "nordic", "progressive taxation", "universal healthcare"],
            },
            {
              point: "Evaluates the counter-argument: government failure caused by imperfect information or regulatory capture.",
              keywords: ["government failure", "special interests", "imperfect policymaker information"],
            },
            {
              point: "Evaluates distortionary tax / disincentive effects on work and entrepreneurship.",
              keywords: ["distortionary taxes", "blunt work", "entrepreneurship"],
            },
            {
              point: "Evaluates inefficiency of poorly run state-owned enterprises / bureaucracy.",
              keywords: ["state-owned monopolies", "bureaucratic", "wasting scarce resources"],
            },
            {
              point: "Explicitly links to the equity–efficiency trade-off and IB Key Concepts.",
              keywords: ["equity–efficiency trade-off", "equity-efficiency", "generous transfers"],
            },
            {
              point: "Reaches a nuanced, justified conclusion conditional on institutional quality and governance.",
              keywords: ["transparent", "accountable", "well-governed", "overall"],
            },
          ],
          hints: [
            "Structure like a top-band IB Paper 1(b): Definitions → Case for Free Markets (efficiency) → Market Failures & Inequity → Mixed Economy Solutions (with 2 real-world country examples!) → Evaluation (Government Failure & Trade-offs) → Justified Judgement.",
            "Include real-world mixed-economy contrasts such as Singapore (HDB/CPF/open trade) and Sweden (progressive taxation/welfare state).",
            "Do not treat 'mixed economy' as flawless — evaluate government failure, regulatory capture, and tax disincentives.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PRACTICE PAPER 2: Methodology, Positive/Normative, Key Concepts & Thought
    // -------------------------------------------------------------------------
    {
      id: "1-intro-economics-p2",
      title: "Practice Paper 2: Methodology, Positive vs Normative & Economic Thought",
      level: "SL",
      questions: [
        {
          id: "1-intro-economics-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "methodology-positive-normative",
          question:
            "Classify the statement as either `positive` or `normative`: *'Increasing the Goods and Services Tax (GST) rate from 8% to 9% raised headline consumer prices by 0.7% in the first quarter.'*",
          answer: { type: "text", accept: ["positive", "positive statement"], display: "positive" },
          solution: [
            "The claim reports an empirical, testable price effect that can be verified or refuted using official inflation data — making it a **positive** statement.",
          ],
          hints: ["Ask whether official price-index data can check this statement."],
        },
        {
          id: "1-intro-economics-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "methodology-positive-normative",
          question:
            "Classify the statement as either `positive` or `normative`: *'The government ought to cap university tuition fees so that every graduate starts working life debt-free.'*",
          answer: { type: "text", accept: ["normative", "normative statement"], display: "normative" },
          solution: [
            "The prescriptive phrase *'ought to cap'* expresses a value judgement about how higher education should be funded — making it a **normative** statement.",
          ],
          hints: ["Look for prescriptive value-judgement wording such as 'ought to'."],
        },
        {
          id: "1-intro-economics-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "methodology-positive-normative",
          question:
            "Classify the statement as either `positive` or `normative`: *'Every full-time worker in Sweden earns an identical annual wage of exactly $50,000.'*",
          answer: { type: "text", accept: ["positive", "positive statement"], display: "positive" },
          traps: [
            {
              spec: { type: "text", accept: ["normative", "normative statement"] },
              feedback: "Careful! Being factually false does NOT make a statement normative — because payroll statistics can empirically refute it, it is a false positive statement.",
            },
          ],
          solution: [
            "Although factually false, the statement makes an objective claim that can be tested and disproved with wage statistics — so it is **positive**.",
          ],
          hints: [
            "Does 'positive' mean true, or does it mean empirically testable/refutable?",
            "Can Swedish income data prove this claim false?",
          ],
        },
        {
          id: "1-intro-economics-p2-q04",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "State",
          guideRef: "evolution-economic-thought",
          question:
            "Name the 18th-century Scottish economist who authored *The Wealth of Nations* (1776) and introduced the metaphor of the *invisible hand*.",
          answer: { type: "text", accept: ["Adam Smith", "Smith"], display: "Adam Smith" },
          solution: [
            "**Adam Smith** published *The Wealth of Nations* in 1776, laying the foundation of classical economics.",
          ],
          hints: ["Often called the father of modern economics; published in 1776."],
        },
        {
          id: "1-intro-economics-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "evolution-economic-thought",
          question:
            "State the name of the 19th-century classical economic proposition summarised as *'supply creates its own demand'*.",
          answer: { type: "text", accept: ["Say's Law", "Says Law", "Say's law of markets"], display: "Say's Law" },
          solution: [
            "**Say's Law** (named after French economist Jean-Baptiste Say) argued that producing goods generates equal factor incomes to buy them, keeping markets self-correcting at full employment.",
          ],
          hints: [
            "Named after a French classical economist (Jean-Baptiste ...).",
            "Two words: '... Law'.",
          ],
        },
        {
          id: "1-intro-economics-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "evolution-economic-thought",
          question:
            "Name the 20th-century Nobel-winning **Monetarist** economist who led the 1970s free-market challenge to Keynesian demand management.",
          answer: { type: "text", accept: ["Milton Friedman", "Friedman"], display: "Milton Friedman" },
          solution: [
            "**Milton Friedman** spearheaded Monetarism, arguing that inflation is a monetary phenomenon and advocating market deregulation and steady money-supply growth.",
          ],
          hints: [
            "Leader of the Chicago School of Economics; closely associated with Monetarism.",
            "Surname starts with F.",
          ],
        },
        {
          id: "1-intro-economics-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "State",
          guideRef: "evolution-economic-thought",
          question:
            "Name the 21st-century sustainable production model that replaces linear *'take–make–dispose'* consumption with closed loops of repair, reuse, remanufacturing, and recycling.",
          answer: { type: "text", accept: ["circular economy", "the circular economy", "circular"], display: "circular economy" },
          solution: [
            "The **circular economy** designs out waste and regenerates natural systems by keeping materials in continuous closed loops.",
          ],
          hints: [
            "Contrast 'linear' with a closed geometric shape.",
            "Two words: '_____ economy'.",
          ],
        },
        {
          id: "1-intro-economics-p2-q08",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "methodology-positive-normative",
          marks: 2,
          question:
            "Define ***ceteris paribus*** and explain its role in building economic models. [2 marks]",
          modelAnswer:
            "Ceteris paribus is a Latin assumption meaning 'all other things being equal' (held constant). Economists rely on it to isolate the causal relationship between two specific variables — such as price and quantity demanded — while preventing simultaneous shifts in income, tastes, or technology from distorting the prediction.",
          markScheme: [
            {
              point: "Accurately defines ceteris paribus as 'all other things being equal' / holding other variables constant.",
              keywords: ["all other things being equal", "held constant", "other factors constant"],
            },
            {
              point: "Explains its methodological role: isolating the causal effect of one variable on another inside a simplified model.",
              keywords: ["isolate", "causal", "two specific variables", "simultaneous shifts"],
            },
          ],
          hints: [
            "Give the exact English translation first.",
            "Explain *why* holding confounding variables constant is necessary when analysing cause and effect.",
          ],
        },
        {
          id: "1-intro-economics-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "methodology-positive-normative",
          marks: 4,
          question:
            "Distinguish between **positive** and **normative** statements in economics, illustrating each with a clear economic example. [4 marks]",
          modelAnswer:
            "Positive statements are objective claims about what is, was, or will be that can be empirically tested and refuted against real-world data — whether they turn out true or false. For instance, 'Raising the carbon tax by $20 per tonne reduces coal-fired electricity generation by 8%, ceteris paribus' is testable with energy statistics. By contrast, normative statements express subjective value judgements about what ought to happen and cannot be proven right or wrong by evidence alone. For example, 'The government should subsidise solar panels for low-income families to achieve a fairer energy transition' reflects an ethical priority rather than a testable fact.",
          markScheme: [
            {
              point: "Defines positive statements as objective and empirically testable/refutable (true or false).",
              keywords: ["empirically tested", "refuted", "objective", "testable"],
            },
            {
              point: "Gives a clear, valid positive economic example.",
              keywords: ["carbon tax", "reduces", "energy statistics", "ceteris paribus"],
            },
            {
              point: "Defines normative statements as subjective value judgements about what ought to be, not provable by data alone.",
              keywords: ["value judgements", "subjective", "ought", "cannot be proven"],
            },
            {
              point: "Gives a clear, valid normative economic example using evaluative/prescriptive language.",
              keywords: ["should subsidise", "fairer", "ethical priority"],
            },
          ],
          hints: [
            "Define both terms explicitly around testability vs value judgements.",
            "Write one complete, realistic economic sentence for each category.",
          ],
        },
        {
          id: "1-intro-economics-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "methodology-positive-normative",
          marks: 4,
          question:
            "Distinguish between **equity** and **equality**, using the comparison between a **progressive income tax** and a **flat lump-sum poll tax** to illustrate your answer. [4 marks]",
          modelAnswer:
            "Equality is a positive, measurable concept meaning sameness or identical outcomes across individuals, whereas equity is a normative concept meaning fairness or justice in how burdens and opportunities are shared. A flat lump-sum poll tax charging every citizen $1,000 treats everyone strictly equally in dollar terms, yet is widely judged inequitable because $1,000 absorbs a far larger fraction of a low-income worker's pay than a billionaire's. Conversely, a progressive income tax charges unequal percentage rates — higher earners pay a higher proportion of income — specifically to promote equity under the ability-to-pay principle.",
          markScheme: [
            {
              point: "Defines equality as sameness / identical outcomes (positive, measurable).",
              keywords: ["sameness", "identical outcomes", "measurable"],
            },
            {
              point: "Defines equity as fairness / justice (normative, value-laden).",
              keywords: ["fairness", "justice", "normative"],
            },
            {
              point: "Explains why a flat poll tax is equal in dollar terms yet regressive/inequitable relative to income.",
              keywords: ["poll tax", "larger fraction", "inequitable", "dollar terms"],
            },
            {
              point: "Explains why a progressive tax uses unequal rates to pursue equity via ability to pay.",
              keywords: ["unequal percentage", "higher proportion", "ability-to-pay", "ability to pay"],
            },
          ],
          hints: [
            "Label equality as positive (sameness) and equity as normative (fairness).",
            "Show how each tax system aligns with one concept while departing from the other.",
          ],
        },
        {
          id: "1-intro-economics-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "evolution-economic-thought",
          marks: 4,
          question:
            "Outline how **Adam Smith's** concepts of the **invisible hand** and the **division of labour** explain rising prosperity in a market economy. [4 marks]",
          modelAnswer:
            "In *The Wealth of Nations* (1776), Adam Smith argued that under competitive laissez-faire markets, self-interested buyers and sellers respond to price signals without central direction — directing scarce resources toward valued goods as if guided by an invisible hand, thereby advancing social welfare. Simultaneously, splitting complex manufacturing into specialised tasks — illustrated by Smith's famous pin factory — dramatically raises labour productivity. Workers gain dexterity through repetition, save time previously lost switching jobs, and develop specialised tools and machinery, expanding output per worker and driving economic growth.",
          markScheme: [
            {
              point: "Links self-interest and competitive price signals to unintended social welfare via the invisible hand.",
              keywords: ["self-interested", "price signals", "social welfare", "laissez-faire"],
            },
            {
              point: "Defines division of labour as splitting production into specialised tasks (referencing the pin factory).",
              keywords: ["specialised tasks", "pin factory", "splitting"],
            },
            {
              point: "Identifies concrete productivity mechanisms (dexterity, reduced switching time, specialised machinery).",
              keywords: ["dexterity", "switching", "machinery"],
            },
            {
              point: "Links higher productivity / output per worker directly to long-run prosperity and growth.",
              keywords: ["productivity", "output per worker", "economic growth"],
            },
          ],
          hints: [
            "Cover both concepts evenly: two marks for the invisible hand mechanism and two marks for division of labour.",
            "Include Smith's pin-factory mechanisms (dexterity, time saved, specialised machines).",
          ],
        },
        {
          id: "1-intro-economics-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare",
          guideRef: "evolution-economic-thought",
          marks: 4,
          question:
            "Compare how **19th-century Classical economists (Say's Law)** and **20th-century Keynesian economists** explain persistent unemployment during an economic slump. [4 marks]",
          modelAnswer:
            "Both schools examine why labour markets deviate from full employment, yet they reach opposite conclusions on self-correction and policy. Classical economists following Say's Law ('supply creates its own demand') assumed wages and prices are fully flexible; therefore any unemployment is temporary because falling wages lower firm costs and quickly clear the labour market without state intervention. Writing during the 1930s Great Depression, John Maynard Keynes countered that wages are sticky downwards and depressed business confidence ('animal spirits') causes deficient aggregate demand. Consequently, economies can remain trapped below full employment indefinitely unless the government intervenes with expansionary fiscal policy to boost spending.",
          markScheme: [
            {
              point: "States Say's Law / classical assumption of flexible wages and prices clearing any temporary labour surplus.",
              keywords: ["supply creates its own demand", "flexible", "clear the labour market", "temporary"],
            },
            {
              point: "Notes classical policy conclusion: markets self-correct without government fiscal intervention.",
              keywords: ["without state intervention", "self-correction", "self-correct"],
            },
            {
              point: "Explains Keynesian diagnosis: downward-sticky wages, weak confidence, and deficient aggregate demand.",
              keywords: ["sticky downwards", "deficient aggregate demand", "animal spirits", "confidence"],
            },
            {
              point: "States Keynesian policy conclusion: persistent slump requires active expansionary fiscal policy.",
              keywords: ["trapped below full employment", "expansionary fiscal policy", "boost spending"],
            },
          ],
          hints: [
            "Contrast wage flexibility (Classical) with downward wage stickiness (Keynesian).",
            "State the opposite policy implication of each school during a recession.",
          ],
        },
        {
          id: "1-intro-economics-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "evolution-economic-thought",
          marks: 6,
          markbands: BANDS_6,
          question:
            "Explain how **21st-century Behavioural Economics** challenges the traditional classical assumption of rational consumer choice, illustrating your answer with a real-world policy example. [6 marks]",
          modelAnswer:
            "Classical microeconomic models assume Homo economicus — perfectly rational consumers possessing complete information and boundless self-control who consistently maximise utility. Twenty-first-century behavioural economists (such as Kahneman, Tversky, and Thaler) draw on psychology to show that real humans operate under bounded rationality (limited cognitive bandwidth and imperfect information), bounded self-control (procrastinating on long-term goals like retirement saving or healthy eating), and bounded selfishness (caring about fairness and altruism). Rather than computing optimal choices, consumers rely on mental shortcuts (heuristics) and exhibit systematic biases such as status-quo bias, anchoring, framing effects, and loss aversion. Recognising these biases enables governments to redesign choice architecture through 'nudges' — altering how options are presented without restricting freedom. For example, when the UK switched workplace pensions from opt-in to automatic opt-out enrolment in 2012, participation jumped from roughly 55% to over 88% by harnessing inertia in favour of workers' long-run financial well-being.",
          markScheme: [
            {
              point: "States the classical rational-agent baseline (perfect information, utility maximisation).",
              keywords: ["homo economicus", "maximise utility", "complete information"],
            },
            {
              point: "Explains bounded rationality (limited cognitive capacity / imperfect information).",
              keywords: ["bounded rationality", "cognitive", "imperfect information"],
            },
            {
              point: "Explains bounded self-control or bounded selfishness (procrastination / fairness).",
              keywords: ["bounded self-control", "bounded selfishness", "procrastinating", "altruism"],
            },
            {
              point: "Identifies heuristics and concrete cognitive biases (status-quo bias, framing, anchoring, loss aversion).",
              keywords: ["heuristics", "status-quo bias", "framing", "loss aversion"],
            },
            {
              point: "Explains choice architecture and nudges (improving outcomes while preserving freedom of choice).",
              keywords: ["choice architecture", "nudges", "without restricting freedom"],
            },
            {
              point: "Illustrates accurately with a real-world behavioural policy (e.g. UK opt-out pension enrolment).",
              keywords: ["opt-out", "workplace pensions", "88%", "inertia"],
            },
          ],
          hints: [
            "Start with the classical assumption (Homo economicus) so the contrast is unmistakable.",
            "Include bounded rationality, bounded self-control, specific biases, and Thaler/Sunstein's choice architecture / nudges.",
            "Anchor your explanation in a concrete real-world policy like automatic opt-out pensions.",
          ],
        },
        {
          id: "1-intro-economics-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Examine",
          guideRef: "evolution-economic-thought",
          marks: 8,
          markbands: BANDS_8,
          question:
            "**Mini-Case Stimulus:** *Portia, a coastal city-state of 4 million people, achieved 5% annual GDP growth over the past decade through imported fast-fashion retail and landfill-heavy construction. However, coastal mangroves have shrunk by 30%, air pollution exceeds WHO guidelines, and 14% of households struggle to afford housing. Portia's mayor proposes adopting **Kate Raworth's Doughnut Economy** and circular-economy building regulations.*\n\nUsing the stimulus above, examine how the **Doughnut Economy** reframes Portia's economic goals compared with traditional linear GDP growth, and consider two challenges Portia may face in implementing it. [8 marks]",
          modelAnswer:
            "Traditional linear economics follows a 'take–make–dispose' trajectory that equates societal progress with rising GDP output — reflected in Portia's 5% growth built on fast-fashion imports and construction waste. Kate Raworth's Doughnut Economy fundamentally reframes economic well-being by replacing endless expansion with a 'safe and just operating space' bounded by two concentric rings.\n\nFirst, the inner ring represents the **social foundation** — ensuring every resident meets basic needs in housing, health, equity, and income. Portia currently falls short of this foundation because 14% of households cannot afford housing despite strong GDP growth. Second, the outer ring represents Earth's **ecological ceiling** — planetary limits including biodiversity, clean air, and climate stability. Portia is already overshooting this ceiling, evidenced by 30% mangrove loss and air pollution above WHO thresholds. Circular-economy construction rules (reusing steel, modular design, cutting landfill waste) directly target sustainability while protecting coastal ecosystems.\n\nHowever, Portia faces significant real-world implementation challenges. First, transitioning from cheap linear construction and fast-fashion retail to circular standards raises short-run compliance costs for firms and may temporarily raise housing construction costs or slow job creation in retail — creating a direct tension between the ecological ceiling and affordable housing in the short run. Second, because Portia is a trade-dependent coastal city-state, global interdependence limits what one city can fix alone: imported goods carry embedded overseas emissions and waste unless international suppliers and trading partners adopt comparable circular standards. Consequently, Portia will likely need targeted affordable-housing subsidies and phased green standards alongside its circular transition so that sustainability and equity reinforce rather than undermine one another.",
          markScheme: [
            {
              point: "Contrasts traditional linear 'take–make–dispose' GDP growth with the Doughnut's 'safe and just operating space'.",
              keywords: ["take–make–dispose", "take-make-dispose", "safe and just"],
            },
            {
              point: "Applies the inner social foundation ring directly to the stimulus (14% housing affordability shortfall).",
              keywords: ["social foundation", "14%", "housing"],
            },
            {
              point: "Applies the outer ecological ceiling ring directly to the stimulus (30% mangrove loss / WHO air pollution breach).",
              keywords: ["ecological ceiling", "mangrove", "air pollution", "overshooting"],
            },
            {
              point: "Explains how circular-economy building rules replace landfill waste with reuse/modular design for sustainability.",
              keywords: ["reusing", "modular", "sustainability", "landfill"],
            },
            {
              point: "Identifies Challenge 1: higher short-run firm compliance/construction costs or retail job disruption.",
              keywords: ["compliance costs", "short-run", "job creation"],
            },
            {
              point: "Highlights the policy tension between raising green standards and keeping housing affordable.",
              keywords: ["tension", "affordable housing"],
            },
            {
              point: "Identifies Challenge 2: global interdependence / imported embedded emissions beyond one city-state's sole control.",
              keywords: ["interdependence", "embedded", "trading partners", "imported goods"],
            },
            {
              point: "Offers a balanced evaluative synthesis (phased regulations paired with targeted housing support).",
              keywords: ["phased", "subsidies", "reinforce", "consequently"],
            },
          ],
          hints: [
            "Quote the exact numbers from the stimulus (5% GDP, 30% mangrove loss, WHO air pollution, 14% housing shortfall) to anchor your AO2 analysis.",
            "Map the stimulus explicitly onto both rings of the Doughnut: social foundation vs ecological ceiling.",
            "Evaluate two realistic implementation obstacles — such as short-run cost/equity trade-offs and cross-border trade interdependence.",
          ],
        },
        {
          id: "1-intro-economics-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "evolution-economic-thought",
          marks: 15,
          markbands: BANDS_15,
          question:
            "**IB Paper 1(b) style [15 marks]:** Using economic schools of thought from the 18th to the 21st century and real-world examples, evaluate the extent to which **government intervention** is necessary to promote **economic well-being** and **sustainability**.",
          modelAnswer:
            "Across four centuries of economic thought, the central debate has revolved around whether competitive markets spontaneously deliver prosperity or require decisive government intervention. Evaluating this question demands balancing market dynamism against macroeconomic instability, behavioural biases, equity, and planetary ecological limits.\n\n**The free-market case against heavy intervention (18th–20th c.):** Adam Smith (1776) demonstrated that competitive price signals and division of labour harness self-interest through the invisible hand to raise output and consumer choice, while warning that state monopolies breed inefficiency. Nineteenth-century classical economists reinforced this view with Say's Law, maintaining that flexible wages keep markets self-correcting. In the late 20th century, after 1970s stagflation undermined simple Keynesian stimulus, Milton Friedman (Monetarism) and Friedrich Hayek argued that discretionary state intervention suffers from recognition and implementation lags, fuels inflation when financed by monetary expansion, and distorts private incentives. Market-oriented reforms — such as deregulation in telecommunications and global aviation — lowered consumer prices and spurred productivity.\n\n**Why intervention is indispensable for well-being and macroeconomic stability (20th–21st c.):** Yet historical crises exposed severe limits to laissez-faire. Karl Marx highlighted how unregulated 19th-century industrial capitalism concentrated wealth while leaving factory workers in poverty. During the 1930s Great Depression, John Maynard Keynes proved that downward-sticky wages and collapsing confidence can trap economies in prolonged mass unemployment unless fiscal intervention revives aggregate demand — a lesson reaffirmed during the 2008 global financial crisis and 2020 COVID-19 lockdowns, when governments worldwide (such as Singapore's Resilience and Fortitude Budgets) prevented catastrophic income collapse. In the 21st century, behavioural economists (Thaler, Kahneman) further demonstrated that bounded rationality and bounded self-control lead consumers to undersave and overconsume demerit goods, justifying low-cost nudges such as UK auto-enrolment pensions.\n\n**Why intervention is critical for sustainability (21st c.):** Crucially, unregulated price signals fail to price long-term ecological damage. Because atmospheric carbon and ocean fisheries are common-pool resources subject to negative externalities, profit-seeking linear 'take–make–dispose' production overshoots Earth's ecological ceiling in Kate Raworth's Doughnut framework. Achieving sustainability requires active public policy — carbon pricing (such as the EU Emissions Trading System or Singapore's carbon tax), renewable-energy infrastructure, and circular-economy directives like Amsterdam's 2050 circular city roadmap and the EU Right-to-Repair laws.\n\n**Evaluation — quality and scope of intervention:** Still, intervention is not a panacea. Heavy-handed central planning failed historically due to information problems and chronic shortages, and even modern mixed-economy interventions can trigger government failure through bureaucratic waste, political lobbying, or regressive unintended impacts (for example, poorly designed fuel taxes hurting rural commuters without transit alternatives). Even Adam Smith recognised a middle ground: limited state provision of justice, infrastructure, and anti-monopoly safeguards alongside private enterprise.\n\n**Conclusion:** Therefore, government intervention is necessary to a **high extent** — particularly for macroeconomic stabilisation in deep slumps, safeguarding the social foundation of equity and well-being, correcting behavioural biases, and enforcing planetary sustainability limits. However, intervention works best when it **steers and complements** competitive markets (via carbon prices, smart regulation, nudges, and public investment) rather than replacing market signals altogether.",
          markScheme: [
            {
              point: "Frames the central multi-century debate between free-market self-regulation and state intervention.",
              keywords: ["four centuries", "spontaneously", "competing", "planetary ecological limits"],
            },
            {
              point: "Explains Adam Smith's invisible hand and division of labour case for market prosperity.",
              keywords: ["adam smith", "invisible hand", "division of labour"],
            },
            {
              point: "Explains 19th-century Classical Say's Law and self-correcting flexible markets.",
              keywords: ["say's law", "flexible wages", "self-correcting"],
            },
            {
              point: "Explains 20th-century Monetarist / Hayek critique following 1970s stagflation (lags, inflation, distortions).",
              keywords: ["stagflation", "milton friedman", "hayek", "lags"],
            },
            {
              point: "Gives a real-world example of deregulation/market efficiency gains (e.g. telecoms or aviation).",
              keywords: ["deregulation", "telecommunications", "aviation"],
            },
            {
              point: "Notes Marx's 19th-century critique of unregulated capitalist inequality and poverty.",
              keywords: ["karl marx", "factory workers", "concentrated wealth"],
            },
            {
              point: "Explains Keynesian macro intervention during the 1930s Great Depression (sticky wages, deficient AD).",
              keywords: ["keynes", "great depression", "sticky wages", "aggregate demand"],
            },
            {
              point: "Cites modern macro stabilisation examples (2008 crisis / 2020 COVID-19 fiscal packages such as Singapore).",
              keywords: ["2008", "covid-19", "resilience", "fortitude"],
            },
            {
              point: "Integrates 21st-century Behavioural Economics (bounded rationality/self-control) and real-world nudges (UK pensions).",
              keywords: ["behavioural", "bounded rationality", "nudges", "auto-enrolment"],
            },
            {
              point: "Explains ecological market failure (externalities, common-pool resources, linear waste) threatening sustainability.",
              keywords: ["common-pool", "negative externalities", "ecological ceiling", "doughnut"],
            },
            {
              point: "Cites real-world sustainability interventions (carbon taxes/EU ETS, Amsterdam Doughnut, EU Right-to-Repair).",
              keywords: ["carbon tax", "amsterdam", "right-to-repair", "emissions trading"],
            },
            {
              point: "Evaluates failure of excessive central planning (information problems, chronic shortages).",
              keywords: ["central planning", "information problems", "chronic shortages"],
            },
            {
              point: "Evaluates modern government failure (lobbying, bureaucratic waste, regressive fuel-tax incidence).",
              keywords: ["government failure", "lobbying", "regressive", "rural commuters"],
            },
            {
              point: "Demonstrates nuanced historical synthesis (noting Smith himself endorsed justice, infrastructure, and curbing monopolies).",
              keywords: ["middle ground", "anti-monopoly", "justice"],
            },
            {
              point: "Delivers a decisive, well-qualified 'to what extent' judgement (steering and complementing markets rather than replacing them).",
              keywords: ["high extent", "steers and complements", "rather than replacing"],
            },
          ],
          hints: [
            "Sweep cleanly across all four centuries: Smith & Classicals (18th–19th), Marx (19th), Keynes vs Friedman/Hayek (20th), Behavioural & Doughnut/Circular (21st).",
            "Anchor every school with a concrete real-world example (e.g. 2020 fiscal packages, UK auto-enrolment pensions, EU ETS / Singapore carbon tax, Amsterdam circular city).",
            "Answer 'to what extent' explicitly by balancing market failure against government failure.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET: 8 stretch / synthesis questions (ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "1-intro-economics-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "scarcity-choice-ppc",
      question:
        "An economy has a **linear PPC** with maximum capacity of **160 autonomous drones** or **240 electric vehicles (EVs)** per week. A robotics breakthrough increases maximum drone capacity by **25%** while maximum EV capacity stays fixed at 240. Calculate the **new constant opportunity cost of 1 drone** (in EVs).",
      answer: { type: "number", value: 1.2, display: "1.2" },
      traps: [
        {
          spec: { type: "number", value: 1.5 },
          feedback: "1.5 EVs per drone was the opportunity cost *before* the 25% productivity breakthrough (240 ÷ 160).",
        },
        {
          spec: { type: "number", value: 0.83, tolerance: 0.02 },
          feedback: "That calculates 200 ÷ 240 (the cost of 1 EV in drones). Compute 240 ÷ 200 for 1 drone.",
        },
      ],
      solution: [
        "New maximum drone capacity = {{160 * 1.25 = 200}} drones per week.",
        "Maximum EV capacity remains 240.",
        "New opportunity cost of 1 drone = {{240 / 200 = 1.2}} EVs per drone (down from 1.5 EVs before the innovation).",
      ],
      hints: [
        "First find the new drone intercept by increasing 160 by 25%.",
        "Remember the EV intercept stays unchanged at 240 (a pivotal shift).",
        "Divide 240 by the new drone capacity (200).",
      ],
    },
    {
      id: "1-intro-economics-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "scarcity-choice-ppc",
      question:
        "A concave PPC passes through the following production combinations of **Solar Panels (X)** and **Medical Scanners (Y)**:\n\n| Point | Solar Panels (X) | Medical Scanners (Y) |\n|---|---|---|\n| A | 0 | 200 |\n| B | 20 | 184 |\n| C | 40 | 154 |\n| D | 60 | 108 |\n| E | 80 | 44 |\n| F | 90 | 0 |\n\nCalculate the **opportunity cost per additional solar panel** (in medical scanners) when moving from **C** to **D**.",
      answer: { type: "number", value: 2.3, display: "2.3" },
      traps: [
        {
          spec: { type: "number", value: 46 },
          feedback: "46 is the *total* number of scanners sacrificed across 20 solar panels. Divide by 20 to get the per-unit opportunity cost.",
        },
      ],
      solution: [
        "From C (40, 154) to D (60, 108): Solar Panels rise by {{60 - 40 = 20}}, while Medical Scanners fall by {{154 - 108 = 46}}.",
        "Per-unit opportunity cost = {{46 / 20 = 2.3}} medical scanners per solar panel.",
        "Notice how per-unit OC rises steadily along the concave curve: 0.8 (A→B), 1.5 (B→C), 2.3 (C→D), 3.2 (D→E), 4.4 (E→F).",
      ],
      hints: [
        "Read only rows C and D from the table.",
        "Compute the total sacrifice of Medical Scanners (154 − 108) and total gain of Solar Panels (60 − 40).",
        "Divide 46 by 20.",
      ],
    },
    {
      id: "1-intro-economics-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "circular-flow-economic-systems",
      question:
        "An open economy begins in circular-flow equilibrium with **S = $60 bn**, **T = $90 bn**, **M = $75 bn**, **I = $65 bn**, **G = $85 bn**, and **X = $75 bn**. Suddenly, a foreign recession cuts **Exports (X) by 20%**, while anxious households increase **Savings (S) by $10 bn**. Calculate the **increase in Government Spending (ΔG)** (in $ billion) needed to restore macroeconomic equilibrium immediately, *ceteris paribus*.",
      answer: { type: "number", value: 25, display: "$25 billion" },
      traps: [
        {
          spec: { type: "number", value: 15 },
          feedback: "You accounted for the $15 bn fall in exports, but also include the $10 bn rise in savings leakage!",
        },
        {
          spec: { type: "number", value: 10 },
          feedback: "You accounted for the $10 bn rise in savings, but exports also fell by 20% of $75 bn ($15 bn).",
        },
      ],
      solution: [
        "Initial equilibrium check: {{W = 60 + 90 + 75 = 225}} and {{J = 65 + 85 + 75 = 225}}.",
        "A 20% fall in X lowers exports by {{0.20 * 75 = 15}} ($ bn), so new {{X = 60}} ($ bn) and new {{J = 65 + 85 + 60 = 210}} ($ bn).",
        "Savings rise by $10 bn to {{S = 70}} ($ bn), raising total leakages to {{W = 70 + 90 + 75 = 235}} ($ bn).",
        "Required extra government spending {{ΔG = 235 - 210 = 25}} ($ billion).",
      ],
      hints: [
        "Compute the dollar drop in exports: 20% of $75 billion.",
        "Both falling injections (X↓) and rising leakages (S↑) widen the contractionary gap.",
        "Add the export drop ($15 bn) and the savings increase ($10 bn) to find the total injection shortfall.",
      ],
    },
    {
      id: "1-intro-economics-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Determine",
      guideRef: "scarcity-choice-ppc",
      question:
        "An economy's linear PPC is given by the equation {{Y = 180 - 1.5X}}, where X is consumer goods and Y is capital goods. Currently, due to unemployment, the economy operates at the interior point **(X = 72, Y = 54)**. How many **additional units of capital goods (Y)** can the economy produce with **zero sacrifice of consumer goods (X)** by achieving full employment?",
      answer: { type: "number", value: 18, display: "18 units" },
      traps: [
        {
          spec: { type: "number", value: 72 },
          feedback: "72 units is the *total* maximum Y on the frontier when X = 72. Subtract current production (54) to find the *additional* units gained.",
        },
      ],
      solution: [
        "Substitute {{X = 72}} into the frontier equation to find maximum possible capital goods: {{Y_max = 180 - 1.5(72) = 180 - 108 = 72}} units.",
        "Current output is 54 units, so moving vertically onto the PPC yields {{72 - 54 = 18}} additional units of Y with zero loss of X.",
      ],
      hints: [
        "Plug X = 72 into the PPC equation Y = 180 − 1.5X to find the frontier output of Y.",
        "Moving straight up from (72, 54) to (72, Y_frontier) keeps X constant.",
        "Subtract the current Y (54) from the frontier Y (72).",
      ],
    },
    {
      id: "1-intro-economics-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "methodology-positive-normative",
      marks: 6,
      markbands: BANDS_6,
      question:
        "Evaluate the claim that *'because modern economics relies on mathematical models and statistical testing, economic policy recommendations are completely value-free.'* [6 marks]",
      modelAnswer:
        "Mathematical models and econometrics do give economics a powerful positive core: analysts can objectively test refutable hypotheses — such as estimating how much a carbon tax cuts emissions or how a minimum wage affects youth hours — under explicit ceteris paribus assumptions, limiting pure guesswork. However, economic policy recommendations can never be completely value-free. First, translating positive forecasts into a recommendation ('the state should adopt Policy A') always requires normative value judgements weighing competing goals, such as lower inflation versus lower unemployment, or efficiency versus equity. Second, even choosing *which* indicators to prioritise — real GDP growth versus the Multidimensional Poverty Index or Doughnut ecological boundaries — embeds ethical assumptions about what constitutes economic well-being. Third, real-world social-science data cannot be isolated in controlled laboratories, meaning economists' choice of model assumptions (e.g. rational actors vs bounded rationality) subtly shapes predicted outcomes. Thus, while positive modelling disciplines debate with evidence, transparent normative judgements remain inseparable from policy advice.",
      markScheme: [
        {
          point: "Acknowledges the positive scientific core: mathematical models and statistical evidence test refutable hypotheses objectively.",
          keywords: ["positive core", "refutable", "ceteris paribus", "econometrics"],
        },
        {
          point: "Argues that moving from positive forecast to policy prescription inherently requires normative value judgements.",
          keywords: ["normative", "value judgements", "competing goals"],
        },
        {
          point: "Identifies concrete policy trade-offs requiring ethical weighting (e.g. efficiency vs equity, inflation vs unemployment).",
          keywords: ["efficiency versus equity", "lower inflation", "trade-offs"],
        },
        {
          point: "Notes that selecting welfare metrics (GDP vs MPI / Doughnut) already reflects normative priorities.",
          keywords: ["indicators", "multidimensional poverty", "doughnut", "well-being"],
        },
        {
          point: "Identifies social-science methodology limits (no controlled lab; choice of behavioural assumptions shapes results).",
          keywords: ["controlled laboratories", "model assumptions", "bounded rationality"],
        },
        {
          point: "Reaches a balanced evaluative judgement combining positive evidence with transparent normative goals.",
          keywords: ["inseparable", "disciplines debate", "transparent"],
        },
      ],
      hints: [
        "Acknowledge first what mathematical/statistical positive economics *can* genuinely achieve.",
        "Then challenge the 'completely value-free' claim on three levels: policy trade-offs, choice of indicators, and choice of model assumptions.",
      ],
    },
    {
      id: "1-intro-economics-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Analyse",
      guideRef: "circular-flow-economic-systems",
      marks: 6,
      markbands: BANDS_6,
      question:
        "Analyse why a simultaneous attempt by all households to **save more (S↑)** during a recession can paradoxically leave the economy poorer — contrasting the **Classical** and **Keynesian** mechanisms in the circular flow of income. [6 marks]",
      modelAnswer:
        "While saving more is prudent for an individual family, a simultaneous surge in savings across all households represents a sharp rise in leakages (S↑) out of the circular flow of income, directly reducing consumer expenditure (C). Under the 19th-century Classical view, this poses no macroeconomic threat: higher household saving increases loanable funds in the financial sector, driving down interest rates so that profit-seeking firms borrow more for physical investment (I↑). Because the injection I rises to match the leakage S, total spending stays unchanged and national income remains at full employment. By contrast, John Maynard Keynes warned of the 'paradox of thrift' during a slump: when business confidence ('animal spirits') is depressed and factories already hold spare capacity, firms refuse to expand investment even at lower interest rates. Consequently, total leakages exceed total injections (S + T + M > I + G + X); unsold inventories mount, firms slash output and lay off workers, and falling household incomes shrink both consumption and — ironically — aggregate savings itself.",
      markScheme: [
        {
          point: "Identifies higher household saving as an increased leakage (S↑) that directly cuts consumer expenditure (C).",
          keywords: ["leakages", "consumer expenditure", "simultaneous surge"],
        },
        {
          point: "Explains the Classical transmission: higher saving lowers interest rates through the financial sector.",
          keywords: ["loanable funds", "interest rates", "classical"],
        },
        {
          point: "States the Classical equilibrium outcome: rising investment (I↑) offsets S↑ so national income stays at full employment.",
          keywords: ["match the leakage", "full employment", "physical investment"],
        },
        {
          point: "Explains the Keynesian counter-mechanism: low business confidence / spare capacity keeps investment depressed despite low rates.",
          keywords: ["paradox of thrift", "animal spirits", "spare capacity", "confidence"],
        },
        {
          point: "Traces the circular-flow contraction (W > J → unsold inventories → output cuts and unemployment).",
          keywords: ["inventories", "slash output", "lay off", "s + t + m"],
        },
        {
          point: "Highlights the ironic outcome: lower national income leaves society poorer and can reduce total realised savings.",
          keywords: ["ironically", "aggregate savings", "falling household incomes"],
        },
      ],
      hints: [
        "Explain the fallacy of composition: what helps one household can hurt the whole circular flow when everyone does it simultaneously.",
        "Contrast how banks channel S into I in Classical theory vs why I fails to respond during a Keynesian slump.",
      ],
    },
    {
      id: "1-intro-economics-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Discuss",
      guideRef: "scarcity-choice-ppc",
      marks: 8,
      markbands: BANDS_8,
      question:
        "Discuss how a resource-rich developing economy that aggressively extracts non-renewable minerals and timber faces a conflict between **short-run output today** and **future potential output and sustainability**, using PPC analysis and the IB Key Concepts. [8 marks]",
      modelAnswer:
        "Resource-rich developing nations often face acute pressure to lift citizens out of poverty and fund urgent public infrastructure. By intensifying extraction of non-renewable minerals and clear-cutting forests, the economy can rapidly raise actual real output and export revenue today — moving closer to its current PPC boundary (actual growth) and generating foreign exchange to improve immediate economic well-being.\n\nHowever, aggressive extraction without regeneration creates a severe long-run conflict with **sustainability**. In factor-of-production terms, forests, fertile soils, clean waterways, and mineral deposits constitute **natural capital** (Land). Depleting these finite endowments faster than nature can replenish them — while polluting adjacent farmland and fisheries — shrinks the future quantity and quality of Land available to next generations. On a PPC diagram, this ecological degradation shifts the economy's **future PPC inward**, permanently reducing potential output and violating the ecological ceiling of Kate Raworth's Doughnut Economy.\n\nWhether this conflict becomes destructive depends heavily on **choice** and **intervention** — specifically, how the country uses resource revenues today. If export windfalls are wasted on luxury imports or lost to corruption, natural capital disappears with nothing built in its place, guaranteeing an inward future PPC shift. Conversely, if the government invests resource royalties wisely into **human capital** (education, healthcare), renewable energy, and diversified physical infrastructure — as Norway did via its Sovereign Wealth Fund or Botswana partially achieved with diamond revenues — newly created capital and technology can offset natural-capital depletion and shift future PPCs outward sustainably. Thus, the short-run vs long-run trade-off is real, but strong institutional governance and circular/sustainable reinvestment can turn finite resource extraction into durable long-run development.",
      markScheme: [
        {
          point: "Explains the short-run benefit: higher extraction raises actual output/export revenue (moving toward current PPC) to address poverty/well-being.",
          keywords: ["actual growth", "poverty", "export revenue", "economic well-being"],
        },
        {
          point: "Classifies minerals, forests, and ecosystems as finite natural capital (Land factor of production).",
          keywords: ["natural capital", "land", "finite endowments"],
        },
        {
          point: "Explains the sustainability conflict: over-extraction and pollution erode future factor quantity and quality.",
          keywords: ["sustainability", "degradation", "replenish", "ecological"],
        },
        {
          point: "Links natural-capital depletion directly to an inward shift of the future PPC.",
          keywords: ["future ppc inward", "inward", "potential output"],
        },
        {
          point: "Connects ecological overshoot to 21st-century sustainability frameworks (e.g. Doughnut ecological ceiling).",
          keywords: ["ecological ceiling", "doughnut", "next generations"],
        },
        {
          point: "Evaluates the 'bad governance' path: wasted royalties/corruption leave future generations poorer.",
          keywords: ["corruption", "luxury imports", "nothing built"],
        },
        {
          point: "Evaluates the 'reinvestment' path: converting finite resource revenues into human capital, green infrastructure, or sovereign funds (Norway/Botswana).",
          keywords: ["human capital", "norway", "botswana", "sovereign wealth fund"],
        },
        {
          point: "Reaches a justified synthesis linking governance/intervention to converting short-run extraction into durable capacity.",
          keywords: ["governance", "reinvestment", "durable", "offset"],
        },
      ],
      hints: [
        "Treat forests and minerals as natural capital within the 'Land' factor of production.",
        "Contrast an inward shift of the future PPC (unchecked depletion) against converting resource revenues into human/physical capital (Norway/Botswana).",
        "Explicitly weave in IB Key Concepts: scarcity, choice, sustainability, economic well-being, and intervention.",
      ],
    },
    {
      id: "1-intro-economics-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "To what extent",
      guideRef: "evolution-economic-thought",
      marks: 10,
      markbands: BANDS_10,
      question:
        "**Synthesis Essay [10 marks]:** To what extent do **21st-century Behavioural Economics** and **Doughnut Economics** overturn the core principles of **18th-century Classical economics**?",
      modelAnswer:
        "Eighteenth-century Classical economics — anchored by Adam Smith's *The Wealth of Nations* (1776) — rested on three foundational pillars: rational self-interested individuals, competitive price signals coordinating resources via the invisible hand, and rising material production through division of labour. Twenty-first-century Behavioural Economics and Kate Raworth's Doughnut Economics sharply revise key Classical assumptions, yet they **extend and bound** rather than completely demolish the Classical framework.\n\n**Where 21st-century thought genuinely overturns Classical assumptions:** First, Behavioural Economics directly refutes the classical portrayal of perfectly rational, utility-maximising decision-makers. Empirical psychology reveals bounded rationality, bounded self-control, heuristics, and cognitive biases such as loss aversion and status-quo bias. Consequently, unhindered laissez-faire choices can systematically harm consumers (for instance, undersaving for retirement), justifying choice architecture and nudges such as opt-out pensions. Second, Doughnut and Circular Economics reject the Classical blind spot regarding ecological limits and endless linear growth. While 18th-century thinkers treated nature as a largely boundless backdrop to division-of-labour expansion, Raworth embeds the entire economy inside Earth's finite ecological ceiling while demanding a guaranteed social foundation for equity — redefining success away from sheer output volume toward regenerative, closed-loop well-being.\n\n**Where Classical principles still endure:** Nevertheless, core 18th-century insights remain deeply relevant. Scarcity, opportunity cost, and incentive-driven price signals still govern everyday resource allocation — in fact, many 21st-century sustainability policies *harness* Adam Smith's price mechanism rather than discarding it, using carbon taxes and tradable emissions permits to redirect self-interested firms toward clean innovation. Similarly, division of labour and competitive specialisation continue to drive productivity in renewable-energy and circular-recycling supply chains. Moreover, nudges work best for gentle behavioural friction and cannot replace price incentives or clear legal regulation when powerful corporate externalities are involved; likewise, Doughnut metrics still wrestle with practical trade-offs in low-income nations needing rapid industrial growth to lift families above the social foundation.\n\n**Judgement:** In conclusion, Behavioural and Doughnut Economics overturn Classical economics **to a moderate-to-substantial extent** regarding human rationality, ecological boundaries, and the ultimate goal of economic progress — yet they preserve Classical insights about scarcity, specialisation, and price incentives as indispensable tools operating *inside* ethical and planetary guardrails.",
      markScheme: [
        {
          point: "Identifies core 18th-century Classical pillars (Adam Smith, self-interest/rationality, invisible hand, division of labour).",
          keywords: ["adam smith", "invisible hand", "division of labour", "1776"],
        },
        {
          point: "Explains how Behavioural Economics challenges perfect rationality via bounded rationality and cognitive biases.",
          keywords: ["bounded rationality", "loss aversion", "status-quo bias", "heuristics"],
        },
        {
          point: "Links behavioural findings to policy intervention via choice architecture / nudges (e.g. opt-out pensions).",
          keywords: ["choice architecture", "nudges", "opt-out"],
        },
        {
          point: "Explains how Doughnut / Circular Economics overturns linear growth assumptions by introducing ecological ceilings.",
          keywords: ["ecological ceiling", "linear growth", "regenerative", "closed-loop"],
        },
        {
          point: "Explains Doughnut's emphasis on the inner social foundation and equity over raw output volume.",
          keywords: ["social foundation", "equity", "output volume"],
        },
        {
          point: "Demonstrates enduring Classical insight: scarcity and price incentives still drive allocation (e.g. carbon pricing harnessing self-interest).",
          keywords: ["carbon taxes", "price mechanism", "incentives", "tradable"],
        },
        {
          point: "Notes enduring value of specialisation / division of labour within green and circular supply chains.",
          keywords: ["specialisation", "supply chains", "productivity"],
        },
        {
          point: "Evaluates limitations of Behavioural nudges (insufficient alone against major structural externalities).",
          keywords: ["behavioural friction", "legal regulation", "externalities"],
        },
        {
          point: "Evaluates real-world tensions of Doughnut Economics in low-income nations needing industrial growth.",
          keywords: ["low-income nations", "industrial growth", "trade-offs"],
        },
        {
          point: "Reaches a balanced, explicit 'to what extent' judgement (revises goals/assumptions while preserving market tools inside guardrails).",
          keywords: ["moderate-to-substantial", "guardrails", "extend and bound", "in conclusion"],
        },
      ],
      hints: [
        "Avoid a simplistic 'yes, completely' or 'no, not at all' — answer *to what extent* with precision.",
        "Show both what is genuinely overturned (perfect rationality, boundless linear growth) and what still endures (scarcity, specialisation, price signals used in carbon pricing).",
        "Briefly evaluate limitations of BOTH Behavioural nudges and Doughnut implementation.",
      ],
    },
  ],
};
