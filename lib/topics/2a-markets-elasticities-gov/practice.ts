import type { MarkBand, TopicPractice } from "../../types.ts";

const P1A_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question's specific demands; minimal or inaccurate economic theory and diagramming.",
    indicators: ["Vague or incorrect terminology", "Missing or mislabelled diagram"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some understanding of economic theory with partially accurate diagrams and explanations, though causal links remain incomplete.",
    indicators: ["Relevant definitions stated", "Diagram drawn with minor labelling or shift errors"],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Clear understanding of the specific demands; accurate economic theory and labelled diagram(s) integrated into explanation.",
    indicators: ["Accurate axis/curve labels", "Step-by-step causal mechanism explained clearly"],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Thorough, rigorous explanation fully addressing every demand with precise terminology and fully integrated, accurate diagrams.",
    indicators: ["Flawless diagram integration", "Nuanced distinction of mechanisms and edge cases"],
  },
];

const P1B_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Superficial understanding with mostly descriptive assertions, little economic theory, and no meaningful evaluation.",
    indicators: ["No valid diagram", "No real-world examples"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic theory and partial diagram analysis; evaluation is absent or consists of unsupported assertions.",
    indicators: ["Basic policy effects listed", "Missing or generic real-world examples"],
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Clear, accurate analysis with well-integrated diagram(s) and relevant real-world examples; some evaluation attempted but unbalanced.",
    indicators: ["Accurate diagram linked to text", "At least one real-world example; one-sided evaluation"],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Strong, well-developed analysis with accurate diagrams, effective real-world examples, and clear balanced evaluation across stakeholders or timeframes.",
    indicators: ["Effective named real-world examples", "Balanced evaluation weighing advantages, limitations, and elasticities"],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Authoritative synthesis combining precise theory, fully integrated diagrams, insightful real-world examples, and sustained multi-angle evaluation reaching a justified judgement.",
    indicators: ["Specific real-world evidence woven into analysis & evaluation", "Weighs short- vs long-run, stakeholders, efficiency vs equity, and complementary policies"],
  },
];

const EIGHT_MARK_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Work does not reach a standard described by the descriptors below." },
  { band: "1–2", marks: [1, 2], descriptor: "Limited understanding with isolated statements and little economic terminology." },
  { band: "3–4", marks: [3, 4], descriptor: "Some relevant economic analysis comparing policies, though comparisons or stakeholder impacts remain superficial." },
  { band: "5–6", marks: [5, 6], descriptor: "Clear, accurate comparison with integrated diagram logic and balanced stakeholder impacts." },
  { band: "7–8", marks: [7, 8], descriptor: "Thorough, balanced synthesis alternating similarities and differences across efficiency, equity, fiscal cost, and elasticities." },
];

const P3_POLICY_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "Work does not reach a standard described by the descriptors below." },
  { band: "1–3", marks: [1, 3], descriptor: "Vague policy suggestion not anchored in the stimulus data; minimal economic reasoning." },
  { band: "4–6", marks: [4, 6], descriptor: "Clear policy recommendation citing some data with relevant mechanism, but limited evaluation of constraints or stakeholders." },
  { band: "7–8", marks: [7, 8], descriptor: "Well-justified single policy anchored directly in numerical data, explaining transmission mechanisms and weighing key trade-offs." },
  { band: "9–10", marks: [9, 10], descriptor: "Rigorous, data-anchored recommendation evaluating short- vs long-run trade-offs, equity/efficiency tension, elasticity limits, and complementary measures." },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // DIAGNOSTIC QUIZ (10 QUESTIONS)
  // ===========================================================================
  quiz: [
    {
      id: "2a-markets-elasticities-gov-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Predict",
      guideRef: "demand-supply-equilibrium",
      question:
        "Beef and leather hides are produced in joint supply. If consumer demand for beef rises significantly, what happens in the market for leather hides, ceteris paribus?",
      options: [
        "Supply of leather hides shifts rightwards, lowering equilibrium price and raising quantity",
        "Supply of leather hides shifts leftwards, raising equilibrium price and lowering quantity",
        "Demand for leather hides shifts rightwards, raising both equilibrium price and quantity",
        "Quantity supplied of leather hides contracts downwards along the original supply curve",
      ],
      answerIndex: 0,
      explanation:
        "In joint supply, producing more of one good automatically increases output of the by-product. Higher beef demand raises beef output, shifting the supply curve of leather hides rightwards, which lowers leather price and increases equilibrium quantity.",
      hints: [
        "In joint supply, expanding beef production automatically yields more hides as a by-product.",
        "Does an increase in by-product availability shift supply right or left?",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "elasticities-ped-yed-pes",
      question:
        "When the price of concert merchandise falls from $20 to $18, weekly quantity demanded increases from 400 shirts to 460 shirts. Calculate the Price Elasticity of Demand (PED).",
      answer: { type: "number", value: 1.5, tolerance: 0.01, display: "1.5" },
      traps: [
        { spec: { type: "number", value: -1.5, tolerance: 0.01 }, feedback: "Report PED as a positive magnitude (take the absolute value)." },
        { spec: { type: "number", value: 0.67, tolerance: 0.02 }, feedback: "Check the fraction — put %ΔQ_d in the numerator and %ΔP in the denominator." },
      ],
      solution: [
        "{{%ΔP = ((18 - 20) / 20) * 100 = -10%}}.",
        "{{%ΔQ_d = ((460 - 400) / 400) * 100 = +15%}}.",
        "{{PED = |+15% / -10%| = 1.5}} (price elastic).",
      ],
      hints: [
        "Compute %ΔP and %ΔQ_d using the initial values ($20 and 400).",
        "Divide |%ΔQ_d| by |%ΔP|.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q03",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Predict",
      guideRef: "elasticities-ped-yed-pes",
      question:
        "A household staple has an Income Elasticity of Demand (YED) of +0.4. If average consumer income increases by 10%, ceteris paribus, how does quantity demanded respond?",
      options: [
        "Quantity demanded falls by 4%, indicating an inferior good",
        "Quantity demanded rises by 4%, indicating a normal necessity",
        "Quantity demanded rises by 25%, indicating a normal luxury",
        "Quantity demanded stays unchanged, indicating unitary elasticity",
      ],
      answerIndex: 1,
      explanation:
        "Rearranging YED = %ΔQ_d / %ΔY gives %ΔQ_d = (+0.4) × (+10%) = +4%. Because 0 < +0.4 < 1, the good is a normal necessity (income inelastic).",
      hints: [
        "Multiply YED (+0.4) by %ΔY (+10%).",
        "Recall that 0 < YED < 1 classifies a normal necessity.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q04",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "elasticities-ped-yed-pes",
      question:
        "During a recession, average household income falls from $50,000 to $45,000, while monthly economy bus trips rise from 40 to 46. Calculate the Income Elasticity of Demand (YED), including the correct sign.",
      answer: { type: "number", value: -1.5, tolerance: 0.01, display: "−1.5" },
      traps: [
        { spec: { type: "number", value: 1.5, tolerance: 0.01 }, feedback: "Never drop the sign on YED! Income fell (−10%) while quantity rose (+15%), so YED is negative (inferior good)." },
        { spec: { type: "number", value: -0.67, tolerance: 0.02 }, feedback: "Put %ΔQ_d (+15%) over %ΔY (−10%), not the other way around." },
      ],
      solution: [
        "{{%ΔY = ((45000 - 50000) / 50000) * 100 = -10%}}.",
        "{{%ΔQ_d = ((46 - 40) / 40) * 100 = +15%}}.",
        "{{YED = (+15%) / (-10%) = -1.5}} (inferior good).",
      ],
      hints: [
        "Find %ΔY from 50,000 to 45,000 (negative) and %ΔQ_d from 40 to 46 (positive).",
        "Divide %ΔQ_d by %ΔY and keep the minus sign!",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q05",
      kind: "mcq",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "The market equilibrium price of bottled water is $12. A government imposes a binding price ceiling of $8, at which firms supply 40 crates and consumers demand 90 crates. What is the immediate market imbalance?",
      options: [
        "A persistent surplus of 50 crates",
        "A persistent shortage of 40 crates",
        "A persistent shortage of 50 crates",
        "A non-binding cap with zero imbalance",
      ],
      answerIndex: 2,
      explanation:
        "Because $8 < $12, the ceiling is binding. At $8, excess demand (shortage) = Q_d − Q_s = 90 − 40 = 50 crates.",
      hints: [
        "Check whether $8 is below equilibrium ($12).",
        "Subtract Q_s (40) from Q_d (90).",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "A $3 per-unit specific indirect tax reduces equilibrium quantity sold from 200 units to 160 units. Calculate total government tax revenue (in $).",
      answer: { type: "number", value: 480, display: "$480" },
      traps: [
        { spec: { type: "number", value: 600 }, feedback: "Government collects the tax only on units ACTUALLY sold after the tax (Q_t = 160), not pre-tax Q_e = 200." },
        { spec: { type: "number", value: 60 }, feedback: "$60 is the Deadweight Welfare Loss (½ × 3 × 40), not total government tax revenue." },
      ],
      solution: [
        "Government tax revenue equals the specific tax per unit multiplied by the post-tax quantity traded: {{Revenue = t * Q_t}}.",
        "{{Revenue = 3 * 160 = $480}}.",
      ],
      hints: [
        "Use Government Tax Revenue = t × Q_t.",
        "Make sure you multiply by the post-tax quantity (160), not the pre-tax quantity (200).",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      commandTerm: "Identify",
      guideRef: "behavioural-economics-hl",
      question:
        "[HL] Switching employees from an opt-in pension scheme to automatic enrolment unless they actively opt out is an application of which choice architecture tool?",
      options: [
        "Mandated choice",
        "Restricted choice",
        "Price-floor intervention",
        "Default choice",
      ],
      answerIndex: 3,
      explanation:
        "Automatic enrolment pre-selects saving as the passive outcome if no action is taken, harnessing status quo bias via a default choice while preserving freedom to opt out.",
      hints: [
        "What happens if the employee does nothing at all?",
        "Distinguish pre-selected passive choices (default) from forced active decisions (mandated).",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "demand-supply-equilibrium",
      question:
        "[HL] A competitive market is modelled by {{Q_d = 60 - 3P}} and {{Q_s = 2P}} (price in $). Calculate the equilibrium price {{P_e}} (in $).",
      answer: { type: "number", value: 12, display: "$12" },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "24 is the equilibrium quantity Q_e — the question asks for equilibrium price P_e." },
        { spec: { type: "number", value: 20 }, feedback: "20 is the demand price-intercept (where Q_d = 0), not the market-clearing price." },
      ],
      solution: [
        "Set {{Q_d = Q_s}}: {{60 - 3P = 2P}}.",
        "{{60 = 5P}}, so {{P_e = $12}} (and {{Q_e = 24}} units).",
      ],
      hints: [
        "At market equilibrium, set Q_d equal to Q_s.",
        "Solve 60 − 3P = 2P for P.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q09",
      kind: "written",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Define",
      guideRef: "demand-supply-equilibrium",
      marks: 2,
      question: "Define the term allocative efficiency.",
      modelAnswer:
        "Allocative efficiency is the socially optimal production level where resources are distributed so that marginal benefit equals marginal cost (MB = MC), maximising total social surplus (the sum of consumer surplus and producer surplus).",
      markScheme: [
        {
          point: "State the marginal condition: marginal benefit equals marginal cost (MB = MC or P = MC).",
          keywords: ["marginal benefit", "mb = mc", "p = mc"],
        },
        {
          point: "Link to maximising total social / community surplus (CS + PS) or producing the optimal combination of goods society values most.",
          keywords: ["social surplus", "community surplus", "consumer surplus", "socially optimal"],
        },
      ],
      hints: [
        "Think of the two core ways IB defines it: a marginal condition (MB vs MC) and a surplus condition (CS + PS).",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "government-intervention-welfare",
      marks: 4,
      question:
        "Explain how relative price elasticities determine the distribution of a specific indirect tax burden between buyers and sellers.",
      modelAnswer:
        "A specific per-unit levy shifts the supply curve vertically upwards, raising consumer price (P_c) and reducing the net price kept by firms (P_p). Economic incidence depends on responsiveness: whichever side is more inelastic bears the greater share. When demand is relatively price inelastic compared to supply (PED < PES), buyers cannot easily switch to substitutes, allowing producers to pass most of the levy onto consumers via a steeper rise in P_c. Conversely, when demand is relatively elastic (PED > PES), consumers cut purchases sharply if prices rise, forcing firms to absorb the larger portion through a steeper drop in P_p.",
      markScheme: [
        {
          point: "Supply shifts vertically upwards, creating a wedge between higher consumer price (P_c) and lower producer net price (P_p).",
          keywords: ["shifts", "vertically upwards", "p_c", "p_p"],
        },
        {
          point: "State the core incidence rule: the more inelastic side bears the larger economic share.",
          keywords: ["more inelastic", "greater share", "larger portion"],
        },
        {
          point: "Explain the case PED < PES: buyers have few substitutes so firms pass most of the burden onto consumers.",
          keywords: ["ped < pes", "substitutes", "pass most"],
        },
        {
          point: "Explain the case PED > PES: buyers cut purchases sharply so producers absorb most of the burden.",
          keywords: ["ped > pes", "firms to absorb", "cut purchases"],
        },
      ],
      hints: [
        "Start by describing how the tax creates a gap between P_c and P_p.",
        "Contrast both cases explicitly: PED < PES vs PED > PES.",
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 QUESTIONS EACH = 30 QUESTIONS)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: CORE MICROECONOMICS, ELASTICITIES & INTERVENTION (SL/HL)
    // -------------------------------------------------------------------------
    {
      id: "2a-markets-elasticities-gov-p1",
      title: "Practice Paper 1 · Core Markets, Elasticities & Intervention (SL/HL)",
      level: "SL",
      questions: [
        {
          id: "2a-markets-elasticities-gov-p1-q01",
          kind: "written",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Define",
          guideRef: "demand-supply-equilibrium",
          marks: 2,
          question: "Define consumer surplus.",
          modelAnswer:
            "Consumer surplus is the extra welfare gained by buyers, measured as the difference between the highest price they are willing and able to pay for a good (shown by the demand curve) and the actual market price paid, summed across all units purchased.",
          markScheme: [
            {
              point: "Difference between maximum price willing and able to pay and actual market price paid.",
              keywords: ["willing and able", "highest price", "actual market price"],
            },
            {
              point: "Shown graphically as the area below the demand curve and above the market price.",
              keywords: ["demand curve", "extra welfare", "units purchased"],
            },
          ],
          hints: ["Compare what buyers are willing to pay against what they actually pay."],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q02",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "elasticities-ped-yed-pes",
          question:
            "A commuter rail operator raises peak fares from $5.00 to $6.00, and daily ridership falls from 1,000 passengers to 950 passengers. Calculate the Price Elasticity of Demand (PED) to 2 decimal places.",
          answer: { type: "number", value: 0.25, tolerance: 0.01, display: "0.25" },
          traps: [
            { spec: { type: "number", value: 4, tolerance: 0.01 }, feedback: "Inverted formula! Divide %ΔQ_d (−5%) by %ΔP (+20%), not %ΔP by %ΔQ_d." },
            { spec: { type: "number", value: -0.25, tolerance: 0.01 }, feedback: "Report PED as a positive magnitude (take the absolute value)." },
          ],
          solution: [
            "{{%ΔP = ((6.00 - 5.00) / 5.00) * 100 = +20%}}.",
            "{{%ΔQ_d = ((950 - 1000) / 1000) * 100 = -5%}}.",
            "{{PED = |-5% / +20%| = 0.25}} (strongly price inelastic).",
          ],
          hints: [
            "Calculate %ΔP = ((6 − 5) / 5) × 100 and %ΔQ_d = ((950 − 1000) / 1000) × 100.",
            "Take the absolute value of %ΔQ_d / %ΔP.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "elasticities-ped-yed-pes",
          question:
            "When the rail operator raised fares from $5.00 (1,000 daily riders) to $6.00 (950 daily riders), calculate the **change** in daily Total Revenue (in $).",
          answer: { type: "number", value: 700, display: "$700" },
          traps: [
            { spec: { type: "number", value: 5700 }, feedback: "$5,700 is the new total revenue — subtract the initial $5,000 to find the change." },
            { spec: { type: "number", value: 5000 }, feedback: "$5,000 is the initial total revenue before the fare hike." },
          ],
          solution: [
            "Initial Total Revenue: {{TR_1 = 5.00 * 1000 = $5,000}}.",
            "New Total Revenue: {{TR_2 = 6.00 * 950 = $5,700}}.",
            "Change in Total Revenue: {{ΔTR = 5700 - 5000 = +$700}} (TR rose because demand is price inelastic).",
          ],
          hints: [
            "Compute TR₁ = P₁ × Q₁ and TR₂ = P₂ × Q₂.",
            "Subtract TR₁ from TR₂ to find ΔTR.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "elasticities-ped-yed-pes",
          question:
            "Average household income rises from $60,000 to $69,000 per year, and annual bookings of boutique resort nights increase from 10 nights to 13 nights. Calculate the Income Elasticity of Demand (YED).",
          answer: { type: "number", value: 2, tolerance: 0.01, display: "+2" },
          traps: [
            { spec: { type: "number", value: 0.5, tolerance: 0.01 }, feedback: "You inverted the ratio — put %ΔQ_d (+30%) over %ΔY (+15%)." },
          ],
          solution: [
            "{{%ΔY = ((69000 - 60000) / 60000) * 100 = +15%}}.",
            "{{%ΔQ_d = ((13 - 10) / 10) * 100 = +30%}}.",
            "{{YED = (+30%) / (+15%) = +2.0}} (normal luxury / income-elastic good).",
          ],
          hints: [
            "Compute %ΔY = (9,000 / 60,000) × 100 and %ΔQ_d = (3 / 10) × 100.",
            "Divide %ΔQ_d by %ΔY.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q05",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "elasticities-ped-yed-pes",
          question:
            "The global price of wheat rises from $200 to $240 per tonne, and short-run regional supply expands from 500 tonnes to 530 tonnes. Calculate the Price Elasticity of Supply (PES) to 2 decimal places.",
          answer: { type: "number", value: 0.3, tolerance: 0.01, display: "0.3" },
          traps: [
            { spec: { type: "number", value: 3.33, tolerance: 0.02 }, feedback: "Put %ΔQ_s (+6%) in the numerator and %ΔP (+20%) in the denominator." },
          ],
          solution: [
            "{{%ΔP = ((240 - 200) / 200) * 100 = +20%}}.",
            "{{%ΔQ_s = ((530 - 500) / 500) * 100 = +6%}}.",
            "{{PES = (+6%) / (+20%) = 0.30}} (price inelastic short-run supply).",
          ],
          hints: [
            "Calculate %ΔP = (40 / 200) × 100 and %ΔQ_s = (30 / 500) × 100.",
            "Divide %ΔQ_s by %ΔP.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q06",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "demand-supply-equilibrium",
          marks: 4,
          question:
            "Explain how the price mechanism clears a shortage following a sudden surge in consumer preference for electric scooters.",
          modelAnswer:
            "A preference surge shifts the demand curve rightwards from D₁ to D₂, so at the initial equilibrium price P₁ quantity demanded exceeds quantity supplied (creating excess demand). This scarcity puts upward pressure on market price, which performs a signalling function indicating higher scarcity to market participants. Higher prices also create a profit incentive motivating firms to expand production along S (an extension in quantity supplied), while simultaneously rationing scarce scooters by inducing less willing buyers to contract quantity demanded along D₂ until a new higher market-clearing equilibrium (P₂, Q₂) is reached.",
          markScheme: [
            {
              point: "Demand shifts rightwards (D₁ → D₂), creating excess demand (Q_d > Q_s) at the original price.",
              keywords: ["shifts", "rightwards", "excess demand"],
            },
            {
              point: "Upward price movement signals scarcity to producers and buyers (signalling function).",
              keywords: ["signalling", "signals scarcity", "upward pressure"],
            },
            {
              point: "Higher price provides a profit incentive for firms to extend quantity supplied along S.",
              keywords: ["incentive", "extension", "expand production"],
            },
            {
              point: "Higher price rations output by contracting quantity demanded along D₂ until new higher (P₂, Q₂) clears.",
              keywords: ["rationing", "rations", "contract"],
            },
          ],
          hints: [
            "Start with the shift of D and identify the disequilibrium at the old price.",
            "Explicitly weave in all three functions: signalling, incentive, and rationing.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q07",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "elasticities-ped-yed-pes",
          marks: 4,
          question:
            "Explain two reasons why the Price Elasticity of Supply (PES) of fresh fruit is typically lower than that of manufactured bicycles.",
          modelAnswer:
            "First, biological growing lags and fixed orchard land constrain time-period responsiveness: fruit trees take months or years to mature before harvests can expand after a price rise, whereas bicycle factories can quickly add extra work shifts or draw on spare capacity. Second, fresh fruit is highly perishable and cannot easily be stored as warehouse inventories to release onto the market when prices climb, whereas manufactured bicycles are durable and readily stockpiled, keeping fruit supply much more inelastic.",
          markScheme: [
            {
              point: "Identify biological growing / production time lags for fruit versus rapid scaling of factory shifts or spare capacity.",
              keywords: ["growing", "time", "spare capacity", "shifts"],
            },
            {
              point: "Link time lags / fixed land constraints directly to low responsiveness of quantity supplied.",
              keywords: ["land", "mature", "months", "years"],
            },
            {
              point: "Identify perishability preventing storage of fruit stocks/inventories.",
              keywords: ["perishable", "stored", "inventories", "stockpiled"],
            },
            {
              point: "Contrast with durable manufactured bicycles that can be released quickly from warehouses.",
              keywords: ["durable", "warehouse", "warehouses"],
            },
          ],
          hints: [
            "Recall the TSSMC determinants of PES: Time, Spare capacity, Stocks, Mobility, Costs.",
            "Develop TWO distinct determinants explicitly contrasting fruit against bicycles.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q08",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "A government sets a binding price floor on milk at $5.00 per litre (above the $3.50 equilibrium). At $5.00, buyers demand 120 thousand litres and farmers supply 200 thousand litres. If the government buys the entire surplus at $5.00 per litre, calculate total government expenditure (in thousand dollars).",
          answer: { type: "number", value: 400, display: "$400 thousand" },
          traps: [
            { spec: { type: "number", value: 1000 }, feedback: "The government buys only the excess surplus (200 − 120 = 80 thousand litres), not the entire 200 thousand litres." },
            { spec: { type: "number", value: 280 }, feedback: "The government must purchase the surplus at the guaranteed floor price ($5.00), not the old $3.50 equilibrium price." },
          ],
          solution: [
            "Surplus quantity = {{Q_s - Q_d = 200 - 120 = 80}} thousand litres.",
            "Government purchase cost = {{P_min * Surplus = 5.00 * 80 = $400}} thousand.",
          ],
          hints: [
            "First find the surplus: Q_s − Q_d at the floor price.",
            "Multiply the surplus by the guaranteed floor price $5.00.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q09",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "Before taxation, a market clears at {{P_e = $30}} and {{Q_e = 500}} units. After a $6 specific indirect tax is imposed, consumers pay {{P_c = $34}}, producers receive {{P_p = $28}}, and quantity falls to {{Q_t = 450}} units. Calculate the total **producer tax burden** (in $).",
          answer: { type: "number", value: 900, display: "$900" },
          traps: [
            { spec: { type: "number", value: 1800 }, feedback: "$1,800 is the consumer tax burden ((34 − 30) × 450), not the producer burden." },
            { spec: { type: "number", value: 2700 }, feedback: "$2,700 is total government tax revenue ($6 × 450)." },
            { spec: { type: "number", value: 1000 }, feedback: "Multiply the $2/unit producer burden by the post-tax quantity Q_t = 450, not Q_e = 500." },
          ],
          solution: [
            "Producer burden per unit = {{P_e - P_p = 30 - 28 = $2}}.",
            "Total producer tax burden = {{2 * Q_t = 2 * 450 = $900}} (out of $2,700 total government revenue).",
          ],
          hints: [
            "Find how much LESS per unit producers keep relative to P_e = $30.",
            "Multiply by post-tax quantity Q_t = 450.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q10",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "A government pays a $4 per-unit subsidy to producers of water heaters, expanding equilibrium output from 200 units to 260 units. Assuming no externalities, calculate the Deadweight Welfare Loss (in $).",
          answer: { type: "number", value: 120, display: "$120" },
          traps: [
            { spec: { type: "number", value: 240 }, feedback: "Remember the triangle area formula includes ½: DWL = ½ × s × (Q_sub − Q_e)." },
            { spec: { type: "number", value: 1040 }, feedback: "$1,040 is total government subsidy expenditure ($4 × 260), not Deadweight Welfare Loss." },
          ],
          solution: [
            "Overproduction beyond allocative efficiency = {{Q_sub - Q_e = 260 - 200 = 60}} units.",
            "{{DWL = 1/2 * s * (Q_sub - Q_e) = 1/2 * 4 * 60 = $120}}.",
          ],
          hints: [
            "Use the overproduction welfare-loss triangle formula DWL = ½ × s × (Q_sub − Q_e).",
            "Height = $4, base = 260 − 200 = 60.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Outline",
          guideRef: "government-intervention-welfare",
          marks: 4,
          question:
            "Outline two unintended negative consequences of imposing a binding rent cap in an urban housing market.",
          modelAnswer:
            "First, holding rent below market equilibrium creates a persistent shortage where quantity demanded exceeds quantity supplied, encouraging illegal parallel (underground) markets in which desperate tenants pay unlawful side fees or 'key money' above the legal limit alongside non-price rationing such as long waiting lists and landlord discrimination. Second, lower rental returns diminish landlords' financial incentive to maintain properties or construct new apartments, causing housing quality deterioration and worsening housing scarcity over the long run.",
          markScheme: [
            {
              point: "Identify persistent shortage (excess demand) leading to non-price rationing (queues, waiting lists, discrimination).",
              keywords: ["shortage", "waiting lists", "non-price rationing", "discrimination"],
            },
            {
              point: "Explain emergence of illegal parallel / black markets charging side payments above the limit.",
              keywords: ["parallel", "underground", "side fees", "key money"],
            },
            {
              point: "Identify reduced landlord profitability weakening maintenance incentives.",
              keywords: ["maintain", "maintenance", "lower rental returns"],
            },
            {
              point: "Link reduced maintenance and construction to falling housing quality and long-run supply shrinkage.",
              keywords: ["quality deterioration", "housing quality", "construct new"],
            },
          ],
          hints: [
            "Think beyond 'there is a shortage' — what behaviours emerge BECAUSE of the shortage?",
            "Cover both parallel markets/rationing AND falling property quality/investment.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "elasticities-ped-yed-pes",
          marks: 10,
          question:
            "Explain how a firm's knowledge of both Price Elasticity of Demand (PED) and Income Elasticity of Demand (YED) guides its pricing and product-planning strategies.",
          modelAnswer:
            "Price Elasticity of Demand measures the responsiveness of quantity demanded to a change in a good's own price, while Income Elasticity of Demand measures the responsiveness of quantity demanded to a change in consumer income. Together they shape both short-run revenue optimisation and long-run portfolio planning.\n\nFirst, PED governs total revenue (TR = P × Q) decisions. Along a straight-line downward-sloping demand curve, PED declines from elastic (greater than 1) on the upper segment through unitary (equal to 1) at the midpoint to inelastic (less than 1) on the lower segment. If a business operates in the elastic range—typical of goods with close substitutes—cutting prices triggers a proportionately larger surge in volume sold, increasing total revenue. Conversely, if demand is price inelastic—such as peak commuter fares or strong brand-loyalty essentials—raising price causes only a minor fall in units sold, lifting total revenue. Firms also strive to lower PED via product differentiation and branding so they can raise prices without losing customers, and reach maximum revenue where PED equals unity.\n\nSecond, YED guides output expansion and product-mix diversification across the business cycle. Because YED retains its sign, goods with YED > 1 are normal luxuries whose sales surge rapidly during economic booms yet plunge sharply in recessions. Goods with 0 < YED < 1 are normal necessities exhibiting steady, resilient demand, whereas inferior goods (YED < 0) actually gain customers during downturns as households trade down. Knowing YED enables a supermarket or manufacturer to expand luxury lines in booming economies, hold counter-cyclical budget brands to hedge recession risk, and shift long-run capital away from low-YED primary items toward high-YED tertiary services as real GDP grows.",
          markScheme: [
            { point: "Define PED accurately as responsiveness of quantity demanded to own price.", keywords: ["own price", "responsiveness of quantity demanded"] },
            { point: "Define YED accurately as responsiveness of quantity demanded to consumer income.", keywords: ["consumer income", "retains its sign"] },
            { point: "Link PED to Total Revenue (TR = P × Q).", keywords: ["total revenue", "tr = p"] },
            { point: "Explain elastic range (PED > 1): cutting price raises TR because volume rises more than proportionately.", keywords: ["cutting prices", "proportionately larger", "elastic range"] },
            { point: "Explain inelastic range (PED < 1): raising price lifts TR because quantity drops less than proportionately.", keywords: ["price inelastic", "minor fall", "lifting total revenue"] },
            { point: "Explain varying PED along a linear demand curve and TR maximisation at midpoint (PED = 1).", keywords: ["straight-line", "midpoint", "unitary"] },
            { point: "Note strategic efforts to make demand more inelastic via branding / differentiation.", keywords: ["differentiation", "branding"] },
            { point: "Distinguish luxury (YED > 1), necessity (0 < YED < 1), and inferior (YED < 0) goods accurately.", keywords: ["normal luxuries", "normal necessities", "inferior goods"] },
            { point: "Apply YED to business-cycle planning (expanding luxuries in booms, hedging recessions with budget/inferior lines).", keywords: ["business cycle", "booms", "recessions", "counter-cyclical"] },
            { point: "Connect long-run rising real GDP to shifting investment from low-YED primary goods toward high-YED services.", keywords: ["tertiary services", "real gdp", "diversification"] },
          ],
          markbands: P1A_BANDS,
          hints: [
            "Structure in two crisp halves: PED (Total Revenue test + linear curve diagram + branding) and YED (sign classification + business cycle + long-run sectoral growth).",
            "Mention exact numerical thresholds (> 1, = 1, 0 to 1, < 0) for full technical precision.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "government-intervention-welfare",
          marks: 15,
          question:
            "Using real-world examples, evaluate the effectiveness of imposing a specific indirect tax on sugary beverages to curb consumption and improve public well-being.",
          modelAnswer:
            "A specific (per-unit) indirect levy on sugary drinks raises firms' marginal production costs by a fixed dollar amount per litre, shifting supply vertically upwards from S₁ to S₂ = S₁ + t. Equilibrium price paid by shoppers climbs from P_e to P_c, net price received by bottlers drops to P_p = P_c − t, and quantity consumed contracts from Q_e to Q_t, helping address diet-related health costs while generating government tax revenue equal to t × Q_t.\n\nReal-world evidence demonstrates both supply-side and demand-side effectiveness. When the United Kingdom introduced its tiered Soft Drinks Industry Levy (SDIL) in 2018 (18p–24p per litre), producers aggressively reformulated recipes to avoid the top band, slashing average sugar content in taxed drinks by over 35% while still raising roughly £330 million annually for school sports and breakfast clubs. Similarly, Mexico's 2014 1-peso-per-litre soda excise reduced taxed beverage purchases by ~6–9% within two years, with the steepest percentage declines among lower-income households.\n\nHowever, several limitations qualify effectiveness. First, elasticity constrains volume reduction: because sugary drinks often exhibit habit-forming, relatively price inelastic demand (PED < 1), quantity falls proportionately less than price rises, meaning heavy consumers bear the majority of the economic incidence (P_c − P_e > P_e − P_p) while continuing to consume substantial sugar. Second, the levy is regressive, taking a higher percentage of income from poorer families and harming horizontal equity. Third, consumers may substitute toward untaxed high-sugar fruit juices or confectionery, muting net calorie reductions, while smaller beverage firms and bottling workers may face reduced revenues and employment. Fourth, in competitive markets without accurately calibrated externalities, overly high taxes can impose deadweight welfare losses and administrative compliance costs.\n\nTime horizon and policy design are decisive. Over the long run, demand becomes more price elastic as tastes adapt and zero-sugar substitutes expand, amplifying health gains. Overall, a specific levy alone is blunt and regressive; it proves far most effective when structured as a tiered incentive encouraging recipe reformulation (as in the UK SDIL) and paired with complementary subsidies for healthy foods, clean public water, and front-of-pack labelling (such as Singapore's Nutri-Grade system) to safeguard equity while shifting long-run habits.",
          markScheme: [
            { point: "Explain specific levy shifting supply vertically upwards (S₁ → S₂ = S₁ + t).", keywords: ["vertically upwards", "s₁ + t", "marginal production costs"] },
            { point: "Identify higher P_c, lower P_p, and contracted equilibrium quantity Q_t.", keywords: ["p_c", "p_p", "q_t"] },
            { point: "Identify government revenue (t × Q_t) available for healthcare or public funding.", keywords: ["government tax revenue", "t × q_t", "£330 million"] },
            { point: "Cite a specific real-world example (e.g. UK SDIL 2018) with concrete outcome (recipe reformulation).", keywords: ["united kingdom", "sdil", "reformulated"] },
            { point: "Cite a second real-world example or comparison (e.g. Mexico 2014 soda excise or Singapore Nutri-Grade).", keywords: ["mexico", "nutri-grade", "singapore"] },
            { point: "Analyse low PED constraint: inelastic demand limits quantity contraction.", keywords: ["price inelastic", "ped < 1", "proportionately less"] },
            { point: "Apply tax incidence rule: consumers bear larger burden when demand is relatively inelastic.", keywords: ["economic incidence", "larger", "p_c − p_e"] },
            { point: "Evaluate equity / regressivity: takes a larger income share from poorer households.", keywords: ["regressive", "equity", "poorer families"] },
            { point: "Evaluate unintended substitution toward untaxed sugary snacks or juices.", keywords: ["substitute", "untaxed", "confectionery"] },
            { point: "Assess producer and worker stakeholder impacts (lower revenue, potential bottling job cuts).", keywords: ["bottling workers", "employment", "smaller beverage firms"] },
            { point: "Assess potential deadweight welfare loss and compliance/administrative costs.", keywords: ["deadweight welfare", "administrative", "compliance"] },
            { point: "Distinguish short-run vs long-run elasticity (PED increases as habits and zero-sugar options evolve).", keywords: ["long run", "tastes adapt", "zero-sugar"] },
            { point: "Evaluate tiered design advantage encouraging producer reformulation rather than mere price hikes.", keywords: ["tiered", "reformulation"] },
            { point: "Propose complementary policies (healthy food subsidies, labelling, earmarking revenue).", keywords: ["complementary", "labelling", "subsidies"] },
            { point: "Deliver a balanced, reasoned concluding judgement weighing efficiency against equity.", keywords: ["overall", "concluding", "far most effective"] },
          ],
          markbands: P1B_BANDS,
          hints: [
            "Paper 1 Part (b) requires BOTH rigorous diagram analysis (S₁ → S₂, P_c, P_p, Q_t, incidence) AND specific named real-world examples (e.g. UK SDIL 2018, Mexico 2014).",
            "Weigh stakeholders (consumers, low-income equity/regressivity, firms, workers, government), PED limits, short vs long run, and complementary policies.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q14",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Discuss",
          guideRef: "government-intervention-welfare",
          marks: 15,
          question:
            "Using real-world examples, discuss the stakeholder effects of introducing a binding statutory pay floor in the low-skilled labour market.",
          modelAnswer:
            "A statutory pay floor set above the competitive labour-market clearing rate (W_min > W_e) raises hourly earnings for low-skilled employees, aiming to alleviate working poverty and improve income equity. In the standard competitive labour diagram (Wage Rate on the vertical axis, Quantity of Labour on the horizontal axis), quantity of labour supplied extends from Q_e to Q_s as higher pay draws additional workers into the market, while firms contract labour demand from Q_e to Q_d, generating excess labour supply (structural unemployment equal to Q_s − Q_d) and deadweight welfare loss.\n\nStakeholder impacts diverge sharply. First, workers who retain employment directly gain higher take-home pay, boosting living standards and local consumption; for instance, the United Kingdom's National Living Wage (NLW), progressively raised since 2016 toward two-thirds of median earnings, lifted real pay for millions of retail and hospitality staff without triggering mass unemployment. Second, unemployed or marginal entrants—especially young and inexperienced workers—risk losing entry-level jobs if firms automate checkouts or cut shifts, as seen in parts of California's 2024 $20/hour fast-food floor where several chains trimmed staff hours and raised menu prices. Third, labour-intensive employers face higher marginal wage bills, squeezing profit margins and lowering producer surplus; if consumer demand is inelastic, firms pass costs forward into higher retail prices, reducing consumer surplus. Fourth, the government may gain higher income-tax receipts and lower in-work welfare outlays for employed staff, yet faces larger unemployment-benefit claims if job losses materialise.\n\nCrucially, real-world outcomes depend on four qualifying factors. First, the magnitude of the hike relative to median wages: modest floors near equilibrium (such as the UK NLW guided by the Low Pay Commission, or Singapore's sector-specific Progressive Wage Model linking pay ladders to skills training) minimise layoffs, whereas abrupt oversized jumps risk severe displacement or informal underground cash work. Second, wage elasticity of labour demand: in sectors where human service cannot easily be outsourced or automated in the short run, labour demand is inelastic so job losses stay modest—though in the long run firms invest in capital substitution (self-ordering kiosks). Third, higher wages can boost worker morale, retention, and labour productivity (efficiency-wage effect), partially offsetting unit labour costs. Fourth, where dominant employers hold monopsony buying power over workers, a well-calibrated floor can raise BOTH wages and employment simultaneously.\n\nOverall, a statutory pay floor is a powerful tool for advancing equity among low-paid workers, provided it is calibrated cautiously to local labour productivity and paired with skills training (as in Singapore's PWM) and targeted household transfers to prevent unemployment among the least-skilled.",
          markScheme: [
            { point: "Explain binding pay floor set above competitive equilibrium (W_min > W_e).", keywords: ["w_min > w_e", "above the competitive"] },
            { point: "Trace competitive diagram effect: Q_s extends, Q_d contracts, producing excess labour supply (Q_s − Q_d).", keywords: ["q_s − q_d", "excess labour supply", "structural unemployment"] },
            { point: "Identify allocative inefficiency / deadweight welfare loss in competitive model.", keywords: ["deadweight welfare loss", "wage rate"] },
            { point: "Evaluate gains to employed workers (higher living standards, reduced working poverty, equity).", keywords: ["working poverty", "take-home pay", "equity"] },
            { point: "Cite real-world example showing resilient employment (e.g. UK National Living Wage).", keywords: ["national living wage", "united kingdom", "low pay commission"] },
            { point: "Cite contrasting real-world example of cost pass-through or hour cuts (e.g. California $20 fast-food floor or Singapore PWM).", keywords: ["california", "singapore", "progressive wage model"] },
            { point: "Analyse risk to young/unexperienced workers via shift cuts or automation.", keywords: ["inexperienced", "automate", "entry-level"] },
            { point: "Analyse impact on firms (higher wage bills, squeezed profit margins, lower producer surplus).", keywords: ["profit margins", "wage bills", "producer surplus"] },
            { point: "Analyse impact on consumers (cost pass-through into higher retail prices if PED is inelastic).", keywords: ["higher retail prices", "consumer surplus"] },
            { point: "Analyse fiscal impact on government (tax receipts vs unemployment benefits).", keywords: ["tax receipts", "unemployment-benefit"] },
            { point: "Evaluate magnitude of the floor relative to equilibrium and risk of informal cash work.", keywords: ["magnitude", "informal", "underground"] },
            { point: "Evaluate short-run vs long-run elasticity of labour demand (capital substitution / kiosks).", keywords: ["capital substitution", "kiosks", "long run"] },
            { point: "Evaluate productivity / retention gains (efficiency-wage effect).", keywords: ["productivity", "retention", "efficiency-wage"] },
            { point: "Note market-structure qualification (monopsony employers).", keywords: ["monopsony"] },
            { point: "Provide balanced final judgement recommending calibration and complementary training/transfers.", keywords: ["overall", "calibrated", "skills training"] },
          ],
          markbands: P1B_BANDS,
          hints: [
            "Label the labour market axes properly (Wage Rate and Quantity of Labour) and contrast winners vs losers across all four stakeholder groups.",
            "Include at least two concrete real-world examples (e.g. UK National Living Wage, California $20 fast-food floor, Singapore Progressive Wage Model) and weigh elasticities, long-run automation, productivity, and monopsony.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p1-q15",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Compare and contrast",
          guideRef: "government-intervention-welfare",
          marks: 8,
          question:
            "Compare and contrast using a binding maximum price versus a per-unit producer subsidy to make basic grain more affordable for poorer households.",
          modelAnswer:
            "Both policies share the primary equity objective of lowering the retail price paid by consumers below free-market equilibrium (P_c < P_e), and in an undistorted competitive market both depart from allocative efficiency (MB ≠ MC), generating deadweight welfare losses.\n\nHowever, their market mechanics and stakeholder effects differ sharply. First, a price ceiling restricts output from Q_e down to Q_s while stimulating demand to Q_d, creating a persistent shortage (Q_d − Q_s), queues, and illegal parallel markets where some poorer households remain completely unserved. By contrast, a per-unit subsidy shifts supply vertically downwards (S₁ → S₂ = S₁ − s), expanding equilibrium output to Q_sub so the market clears with zero shortage.\n\nSecond, producer welfare moves in opposite directions: a price ceiling lowers producer revenue and producer surplus, discouraging farm investment and hurting rural workers, whereas a subsidy raises total producer price received (P_p = P_c + s > P_e), increasing farm revenue, producer surplus, and rural employment.\n\nThird, fiscal burdens contrast sharply: a price ceiling requires minimal direct Treasury spending (mainly enforcement), whereas a subsidy imposes substantial ongoing government expenditure (s × Q_sub) carrying a major opportunity cost in foregone healthcare, education, or higher taxes—and if demand is relatively elastic, a sizeable share of the subsidy accrues to producers rather than lowering consumer prices.",
          markScheme: [
            { point: "Similarity 1: Both lower the official consumer price below equilibrium to improve affordability/equity.", keywords: ["affordability", "equity objective", "p_c < p_e"] },
            { point: "Similarity 2: Both create allocative inefficiency (MB ≠ MC) and deadweight welfare loss in an undistorted market.", keywords: ["deadweight welfare", "allocative efficiency", "mb ≠ mc"] },
            { point: "Difference 1 (Output & Market Clearing): Ceiling cuts output to Q_s creating shortages and parallel markets.", keywords: ["shortage", "parallel markets", "queues"] },
            { point: "Difference 1 (Subsidy): Subsidy shifts supply downwards (S₁ − s), expanding output to Q_sub with no shortage.", keywords: ["shifts supply", "q_sub", "zero shortage"] },
            { point: "Difference 2 (Producers & Workers): Ceiling cuts producer revenue/surplus and farm jobs.", keywords: ["discouraging", "rural workers", "producer revenue"] },
            { point: "Difference 2 (Subsidy): Subsidy raises producer net price (P_p = P_c + s), boosting farm surplus and employment.", keywords: ["p_p = p_c + s", "rural employment"] },
            { point: "Difference 3 (Fiscal Cost): Ceiling has low budgetary cost (enforcement only) versus large subsidy outlay (s × Q_sub) with opportunity cost.", keywords: ["opportunity cost", "s × q_sub", "enforcement"] },
            { point: "Nuance: Elasticity determines how much of the subsidy actually passes through as lower retail prices.", keywords: ["elasticity", "passes through", "share of the subsidy"] },
          ],
          markbands: EIGHT_MARK_BANDS,
          hints: [
            "Command term 'Compare and contrast' MUST cover BOTH similarities (affordability goal, DWL) AND systematic differences.",
            "Contrast across three clear axes: (1) output/shortages, (2) producer & worker welfare, (3) government budget & opportunity cost.",
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: HL QUANTITATIVE WELFARE, LINEAR EQUATIONS & BEHAVIOURAL ECON
    // -------------------------------------------------------------------------
    {
      id: "2a-markets-elasticities-gov-p2",
      title: "Practice Paper 2 · HL Quantitative Modelling & Behavioural Economics",
      level: "HL",
      questions: [
        {
          id: "2a-markets-elasticities-gov-p2-q01",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "demand-supply-equilibrium",
          question:
            "[HL] A competitive market is described by {{Q_d = 150 - 5P}} and {{Q_s = -30 + 4P}} (price in $, quantity in single units). Calculate the equilibrium price {{P_e}} (in $).",
          answer: { type: "number", value: 20, display: "$20" },
          traps: [
            { spec: { type: "number", value: 50 }, feedback: "50 is the equilibrium quantity Q_e; the question asks for equilibrium price P_e." },
            { spec: { type: "number", value: 30 }, feedback: "$30 is the demand price-intercept (where Q_d = 0), not market equilibrium." },
          ],
          solution: [
            "Set {{Q_d = Q_s}}: {{150 - 5P = -30 + 4P}}.",
            "{{180 = 9P}}, so {{P_e = $20}} (and {{Q_e = 150 - 100 = 50}} units).",
          ],
          hints: [
            "Equate 150 − 5P and −30 + 4P.",
            "Collect P terms on one side and constants on the other.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q02",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "demand-supply-equilibrium",
          question:
            "[HL] For the market {{Q_d = 150 - 5P}} and {{Q_s = -30 + 4P}}, calculate Consumer Surplus at market equilibrium (in $).",
          answer: { type: "number", value: 250, display: "$250" },
          traps: [
            { spec: { type: "number", value: 500 }, feedback: "Don't forget the ½ in the triangle area formula: CS = ½ × Q_e × (P_max − P_e)." },
            { spec: { type: "number", value: 3250 }, feedback: "Set Q_d = 0 to find the vertical price intercept (P_max = 30), don't use the horizontal intercept 150!" },
          ],
          solution: [
            "Find demand price-intercept by setting {{Q_d = 0}}: {{150 - 5P = 0}} → {{P_max = $30}}.",
            "{{CS = 1/2 * Q_e * (P_max - P_e) = 1/2 * 50 * (30 - 20) = $250}}.",
          ],
          hints: [
            "Find where D cuts the vertical Price axis by solving 150 − 5P = 0.",
            "Compute the triangle area ½ × 50 × (P_max − 20).",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "demand-supply-equilibrium",
          question:
            "[HL] For the same market {{Q_d = 150 - 5P}} and {{Q_s = -30 + 4P}}, calculate Producer Surplus at market equilibrium (in $, exact decimal).",
          answer: { type: "number", value: 312.5, tolerance: 0.05, display: "$312.50" },
          traps: [
            { spec: { type: "number", value: 500 }, feedback: "Supply does NOT start at P = 0! Set Q_s = 0 to find P_min = 30 / 4 = $7.50." },
            { spec: { type: "number", value: 625 }, feedback: "Remember the ½ factor in the triangle area formula!" },
          ],
          solution: [
            "Find supply price-intercept by setting {{Q_s = 0}}: {{-30 + 4P = 0}} → {{P_min = $7.50}}.",
            "{{PS = 1/2 * Q_e * (P_e - P_min) = 1/2 * 50 * (20 - 7.50) = 25 * 12.50 = $312.50}}.",
          ],
          hints: [
            "Set −30 + 4P = 0 to find the vertical supply price-intercept P_min.",
            "Apply PS = ½ × 50 × (20 − P_min).",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Determine",
          guideRef: "elasticities-ped-yed-pes",
          question:
            "[HL] A firm faces the linear demand function {{Q_d = 120 - 4P}} (price in $). At what price (in $) is the firm's Total Revenue maximised?",
          answer: { type: "number", value: 15, display: "$15" },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "$30 is the choke price where Q_d = 0 (so TR = $0). TR peaks at the midpoint, half of $30." },
            { spec: { type: "number", value: 60 }, feedback: "60 is the revenue-maximising QUANTITY; the question asks for the PRICE." },
          ],
          solution: [
            "Total Revenue is maximised at the exact midpoint of a linear demand curve where {{PED = 1}}.",
            "Price-axis intercept ({{Q_d = 0}}): {{P_max = 120 / 4 = $30}}.",
            "Midpoint price = {{30 / 2 = $15}} (yielding {{Q = 60}} and max {{TR = $900}}).",
          ],
          hints: [
            "Where along a straight-line demand curve is PED = 1 and TR maximised?",
            "Find the demand price-intercept P_max, then halve it.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "[HL] A market has {{Q_d = 200 - 4P}} and {{Q_s = -40 + 8P}} (price in $, quantity in single units). The government levies a $6 specific indirect tax on producers. Calculate the post-tax consumer price {{P_c}} (in $).",
          answer: { type: "number", value: 24, display: "$24" },
          traps: [
            { spec: { type: "number", value: 26 }, feedback: "Producers cannot pass 100% of the $6 tax onto consumers unless demand is perfectly inelastic (PED = 0)." },
            { spec: { type: "number", value: 23 }, feedback: "The tax does not split 50/50 because demand (slope coef −4) is steeper/more inelastic than supply (+8)." },
          ],
          solution: [
            "Post-tax supply replaces {{P}} with {{(P - 6)}}: {{Q_s' = -40 + 8(P - 6) = -88 + 8P}}.",
            "Set {{Q_d = Q_s'}}: {{200 - 4P = -88 + 8P}} → {{288 = 12P}}.",
            "Thus {{P_c = $24}} (up $4 from pre-tax {{P_e = $20}}; producers keep {{P_p = $18}} and {{Q_t = 104}}).",
          ],
          hints: [
            "Substitute (P − 6) in place of P inside Q_s = −40 + 8P.",
            "Solve 200 − 4P = −88 + 8P for P_c.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "[HL] Continuing the market {{Q_d = 200 - 4P}} and {{Q_s = -40 + 8P}} with a $6 specific indirect tax on producers, calculate total **Consumer Tax Burden** (in $).",
          answer: { type: "number", value: 416, display: "$416" },
          traps: [
            { spec: { type: "number", value: 624 }, feedback: "$624 is total government tax revenue ($6 × 104), combining both consumer and producer burdens." },
            { spec: { type: "number", value: 208 }, feedback: "$208 is the producer tax burden ((20 − 18) × 104)." },
            { spec: { type: "number", value: 480 }, feedback: "Multiply the $4/unit consumer burden by post-tax quantity Q_t = 104, not pre-tax Q_e = 120." },
          ],
          solution: [
            "Consumer burden per unit = {{P_c - P_e = 24 - 20 = $4}}.",
            "Total Consumer Tax Burden = {{4 * Q_t = 4 * 104 = $416}} (two-thirds of the $624 tax revenue).",
          ],
          hints: [
            "Find the consumer price increase P_c − P_e.",
            "Multiply by post-tax quantity Q_t = 104.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "[HL] Using the exact same market ({{Q_d = 200 - 4P}}, {{Q_s = -40 + 8P}}, $6 specific indirect tax on producers), calculate the Deadweight Welfare Loss (in $).",
          answer: { type: "number", value: 48, display: "$48" },
          traps: [
            { spec: { type: "number", value: 96 }, feedback: "Don't forget the ½ factor in the triangle area formula: DWL = ½ × t × (Q_e − Q_t)." },
          ],
          solution: [
            "Quantity contraction = {{Q_e - Q_t = 120 - 104 = 16}} units.",
            "{{DWL = 1/2 * t * (Q_e - Q_t) = 1/2 * 6 * 16 = $48}}.",
          ],
          hints: [
            "Find the lost trades Q_e − Q_t = 120 − 104.",
            "Apply DWL = ½ × 6 × (Q_e − Q_t).",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "government-intervention-welfare",
          question:
            "[HL] A market is given by {{Q_d = 160 - 2P}} and {{Q_s = 20 + 3P}}. The government grants producers a $10 per-unit subsidy. Calculate total government subsidy expenditure (in $).",
          answer: { type: "number", value: 1160, display: "$1,160" },
          traps: [
            { spec: { type: "number", value: 1040 }, feedback: "$1,040 uses pre-subsidy Q_e = 104 — government must pay $10 on EVERY post-subsidy unit Q_sub = 116." },
            { spec: { type: "number", value: 60 }, feedback: "$60 is the Deadweight Welfare Loss (½ × 10 × 12), not total government expenditure." },
          ],
          solution: [
            "Replace {{P}} with {{(P + 10)}} in supply: {{Q_s' = 20 + 3(P + 10) = 50 + 3P}}.",
            "Set {{160 - 2P = 50 + 3P}} → {{110 = 5P}} → {{P_c = $22}} (and {{P_p = $32}}).",
            "Post-subsidy quantity: {{Q_sub = 160 - 2(22) = 116}} units.",
            "Total government subsidy cost = {{10 * 116 = $1,160}}.",
          ],
          hints: [
            "For a $10 subsidy, substitute (P + 10) into Q_s = 20 + 3P.",
            "Solve Q_d = Q_s' to obtain P_c and Q_sub, then compute 10 × Q_sub.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q09",
          kind: "written",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Define",
          guideRef: "behavioural-economics-hl",
          marks: 2,
          question: "[HL] Define bounded self-control.",
          modelAnswer:
            "Bounded self-control is the psychological limitation whereby individuals exhibit limited willpower and present bias, leading them to make impulsive short-term choices (such as under-saving or over-consuming unhealthy snacks) that conflict with their own long-run well-being.",
          markScheme: [
            {
              point: "Limited willpower or present bias favouring immediate gratification.",
              keywords: ["willpower", "present bias", "impulsive"],
            },
            {
              point: "Results in decisions conflicting with individuals' own long-term best interests (e.g. under-saving, over-eating).",
              keywords: ["long-run", "long-term", "under-saving"],
            },
          ],
          hints: ["Link limited willpower / present bias to acting against one's own long-run goals."],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "demand-supply-equilibrium",
          marks: 4,
          question:
            "[HL] Explain how the income effect and substitution effect together cause a consumer to buy more of a normal good when its price decreases.",
          modelAnswer:
            "First, under the substitution effect, when the price of a good falls while rival prices remain unchanged, it becomes relatively cheaper compared to alternatives, prompting rational buyers to switch away from pricier substitutes toward it. Second, under the income effect, a lower price stretches a household's fixed nominal budget further, raising real purchasing power (real income); because the item is a normal good, higher real purchasing power induces the buyer to purchase an additional quantity. Both mechanisms reinforce one another, yielding an inverse price–quantity relationship.",
          markScheme: [
            { point: "Substitution effect: lower price makes the product relatively cheaper than rival alternatives.", keywords: ["relatively cheaper", "rivals", "alternatives"] },
            { point: "Consumers switch purchases away from pricier substitutes toward the good.", keywords: ["switch", "substitutes"] },
            { point: "Income effect: lower price increases real purchasing power (real income) from a fixed money budget.", keywords: ["purchasing power", "real income"] },
            { point: "Higher real purchasing power increases purchases because it is a normal good, reinforcing the downward slope.", keywords: ["additional quantity", "reinforce", "inverse"] },
          ],
          hints: [
            "Explain relative price switching (substitution effect) separately from real purchasing power (income effect).",
            "State clearly why both push quantity upwards for a normal good.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "behavioural-economics-hl",
          marks: 4,
          question:
            "[HL] Distinguish between anchoring bias and framing bias using a retail example for each.",
          modelAnswer:
            "Anchoring occurs when shoppers rely disproportionately on an initial numerical reference point when judging value—for example, seeing a jacket marked down from a crossed-out $300 tag to $160 makes $160 seem like a bargain even if its objective worth is $120. By contrast, framing occurs when mathematically identical information elicits different decisions purely because of positive versus negative wording—for example, yoghurt promoted as '92% fat-free' outsells the exact same product labelled 'contains 8% fat'.",
          markScheme: [
            { point: "Define anchoring: over-reliance on an initial numerical reference figure when judging value.", keywords: ["initial numerical", "reference point", "rely disproportionately"] },
            { point: "Give a valid retail example of anchoring (e.g. crossed-out original price tag).", keywords: ["crossed-out", "bargain", "$300"] },
            { point: "Define framing: identical factual information triggering different choices depending on wording/presentation.", keywords: ["identical information", "wording", "positive versus negative"] },
            { point: "Give a valid retail example of framing (e.g. '92% fat-free' vs '8% fat').", keywords: ["fat-free", "yoghurt", "8% fat"] },
          ],
          hints: [
            "Highlight the core contrast: numerical reference point (anchoring) vs positive/negative presentation of identical facts (framing).",
            "Include a sharp, concrete example for BOTH biases.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "behavioural-economics-hl",
          marks: 4,
          question:
            "[HL] Explain why large publicly listed corporations frequently engage in profit satisficing instead of setting MC = MR strictly.",
          modelAnswer:
            "In large modern corporations, ownership by dispersed shareholders (principals) is separated from daily operational control by salaried executives (agents), creating a principal–agent problem with asymmetric monitoring. Rather than taking high-stress risks or trying to calculate elusive exact marginal cost and marginal revenue figures, managers target a 'good enough' satisfactory profit level sufficient to deliver steady shareholder dividends and avoid takeovers while protecting executive job security, salaries, and work–life balance.",
          markScheme: [
            { point: "Identify divorce / separation of ownership (shareholders) from daily control (salaried managers).", keywords: ["shareholders", "separated", "salaried executives"] },
            { point: "Name the principal–agent problem with diverging goals and imperfect monitoring.", keywords: ["principal", "agent", "asymmetric monitoring"] },
            { point: "Note bounded information / difficulty estimating exact marginal cost and marginal revenue in practice.", keywords: ["elusive", "marginal cost", "marginal revenue"] },
            { point: "Explain satisfactory profit goal: keeps dividends steady while preserving managerial job security and perks.", keywords: ["satisfactory", "dividends", "job security"] },
          ],
          hints: [
            "Connect shareholders (principals) vs salaried managers (agents).",
            "Explain BOTH diverging incentives AND imperfect knowledge of exact MC and MR.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q13",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "behavioural-economics-hl",
          marks: 10,
          question:
            "[HL] Explain how default choices, restricted choices, and mandated choices apply choice architecture to improve consumer decision-making.",
          modelAnswer:
            "Pioneered by Richard Thaler and Cass Sunstein under the principle of libertarian paternalism, choice architecture designs the environment surrounding decisions to counteract cognitive biases—such as bounded rationality, present bias, and status quo inertia—without banning options or imposing heavy taxes.\n\nFirst, a default choice sets a beneficial pre-selected outcome whenever an individual takes no action. Because humans exhibit strong status quo bias, loss aversion, and procrastination (bounded self-control), switching from opt-in to opt-out defaults dramatically raises participation in socially desirable schemes. For instance, automatic enrolment into workplace pensions or presumed-consent organ donation harnesses human inertia constructively while still allowing individuals to opt out freely.\n\nSecond, restricted choice deliberately narrows an overwhelming menu down to a curated set of clear alternatives. Because bounded rationality limits human cognitive bandwidth, facing hundreds of complex healthcare plans or retirement funds triggers choice overload and decision paralysis (often causing consumers to make no choice at all or pick poorly). Restricting options to five transparent, vetted tiers reduces mental friction and supports higher-quality selections.\n\nThird, mandated choice removes passive defaults altogether and requires individuals to record an explicit active 'Yes' or 'No' decision before completing a routine process—such as renewing a driving licence or onboarding with an employer. This forces consumers to overcome procrastination and engage thoughtfully with important long-term decisions like organ donation or retirement contribution rates, avoiding ethical accusations that passive defaults exploit inattention.",
          markScheme: [
            { point: "Define choice architecture and link to Thaler & Sunstein / libertarian paternalism.", keywords: ["thaler", "libertarian paternalism", "environment"] },
            { point: "Explain why consumers need help: bounded rationality, present bias, status quo inertia.", keywords: ["bounded rationality", "present bias", "status quo"] },
            { point: "Note that choice architecture preserves consumer freedom without bans or heavy taxes.", keywords: ["without banning", "opt out freely"] },
            { point: "Define default choice as the pre-selected outcome if no action is taken.", keywords: ["pre-selected", "no action"] },
            { point: "Explain how default choice harnesses inertia/procrastination (e.g. pension auto-enrolment or opt-out organ donation).", keywords: ["auto-enrolment", "automatic enrolment", "organ donation", "harnesses"] },
            { point: "Define restricted choice as narrowing an excessive menu of options.", keywords: ["narrows", "curated", "restricting options"] },
            { point: "Explain how restricted choice resolves choice overload and decision paralysis.", keywords: ["choice overload", "decision paralysis", "cognitive bandwidth"] },
            { point: "Define mandated choice as requiring an explicit active Yes/No decision.", keywords: ["explicit active", "yes", "removes passive"] },
            { point: "Give a clear context for mandated choice (e.g. driving licence renewal or job onboarding).", keywords: ["driving licence", "onboarding"] },
            { point: "Explain how mandated choice overcomes procrastination while avoiding passive manipulation concerns.", keywords: ["procrastination", "inattention", "ethical"] },
          ],
          markbands: P1A_BANDS,
          hints: [
            "Open with libertarian paternalism and the specific behavioural biases (inertia, present bias, choice overload).",
            "Dedicate a crisp, analytical paragraph to EACH of the three tools (default, restricted, mandated) with an accurate example for each.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q14",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "behavioural-economics-hl",
          marks: 15,
          question:
            "[HL] Using real-world examples, evaluate the effectiveness of behavioural nudges compared with indirect taxes for reducing consumption of unhealthy diets.",
          modelAnswer:
            "Governments tackling diet-related illnesses can deploy either neoclassical price incentives (specific indirect taxes shifting supply vertically upwards from S₁ to S₂ = S₁ + t, raising consumer price to P_c and contracting quantity to Q_t) or behavioural nudges rooted in Thaler and Sunstein's choice architecture (altering salience, framing, and default placement without banning products or imposing financial penalties).\n\nBehavioural nudges offer compelling advantages. First, they carry very low fiscal and administrative costs compared to tax collection and policing. Second, they preserve consumer sovereignty and avoid the regressive financial burden that indirect food taxes inflict on lower-income households. Real-world examples demonstrate meaningful gains: Singapore's Nutri-Grade colour-coded (A–D) drink labelling scheme introduced in 2022 leveraged framing and salience biases to help shoppers cut median sugar intake from pre-packaged beverages significantly, while cafeteria nudges placing fruit at eye level and smaller serving plates consistently lower impulse calorie intake.\n\nYet nudges face serious limitations when stacked against indirect taxes. First, for strongly habit-forming or heavily marketed ultra-processed foods, gentle visual cues often produce smaller, short-lived reductions as shoppers habituate to labels over time. Second, nudges raise zero fiscal revenue, whereas the United Kingdom's 2018 Soft Drinks Industry Levy (SDIL) both generated ~£330 million per year for public health initiatives AND gave manufacturers a direct profit incentive to reformulate drinks, cutting average sugar content by over 35%. Third, critics raise ethical concerns that opaque nudges can feel paternalistic or manipulative, and their effect varies unevenly across educational and income demographics. Conversely, indirect taxes struggle when demand is price inelastic (PED < 1), forcing consumers to bear most of the economic incidence regressively while quantity falls modestly, and risking consumer substitution into untaxed high-calorie snacks.\n\nWeighing short-run versus long-run outcomes, neither tool dominates in isolation. Indirect taxes provide powerful supply-side reformulation incentives and revenue, while nudges excel at reshaping everyday consumer habits equitably and cheaply. Therefore, the most effective public-health strategy combines both as complements—pairing a tiered reformulation tax (like the UK SDIL) with salient colour-coded labelling (like Singapore's Nutri-Grade) and revenue-funded subsidies for nutritious fresh produce to maximise long-run health gains while protecting low-income equity.",
          markScheme: [
            { point: "Explain indirect tax mechanism (S shifts vertically upwards, higher P_c, lower Q_t).", keywords: ["vertically upwards", "p_c", "q_t"] },
            { point: "Explain nudge mechanism via choice architecture (salience, framing, placement) without bans or financial penalties.", keywords: ["choice architecture", "salience", "without banning"] },
            { point: "Strength of nudges: low fiscal/administrative cost.", keywords: ["low fiscal", "administrative costs"] },
            { point: "Strength of nudges: preserves consumer sovereignty and avoids regressivity.", keywords: ["consumer sovereignty", "regressive"] },
            { point: "Real-world nudge example (e.g. Singapore Nutri-Grade colour labels or canteen placement).", keywords: ["singapore", "nutri-grade", "eye level"] },
            { point: "Limitation of nudges: weaker impact on addictive/entrenched habits and habituation wear-off.", keywords: ["habit-forming", "habituate", "short-lived"] },
            { point: "Limitation of nudges: raises zero government revenue for health programmes.", keywords: ["zero fiscal revenue", "£330 million"] },
            { point: "Real-world tax example (e.g. UK SDIL 2018) demonstrating strong producer reformulation.", keywords: ["united kingdom", "sdil", "reformulate"] },
            { point: "Ethical/equity critique of nudges (paternalism, manipulation, uneven demographic effects).", keywords: ["paternalistic", "manipulative", "demographics"] },
            { point: "Limitation of indirect tax: inelastic demand (PED < 1) limits quantity fall and puts incidence on buyers.", keywords: ["price inelastic", "ped < 1", "economic incidence"] },
            { point: "Limitation of indirect tax: regressive impact on poorer households.", keywords: ["lower-income households", "low-income equity"] },
            { point: "Limitation of indirect tax: unintended substitution toward untaxed high-calorie foods.", keywords: ["untaxed", "substitution"] },
            { point: "Evaluate time horizon (short-run vs long-run habit change).", keywords: ["short-run", "long-run"] },
            { point: "Synthesise complementary policy mix (tiered tax + labelling + healthy food subsidies).", keywords: ["complements", "tiered", "fresh produce"] },
            { point: "Reach a clear, justified comparative judgement.", keywords: ["therefore", "neither tool dominates", "most effective"] },
          ],
          markbands: P1B_BANDS,
          hints: [
            "Compare BOTH policies head-to-head across effectiveness, fiscal cost/revenue, equity/regressivity, producer reformulation, and consumer freedom.",
            "Anchor your evaluation in concrete real-world examples (Singapore Nutri-Grade vs UK SDIL) and conclude with how they work best together.",
          ],
        },
        {
          id: "2a-markets-elasticities-gov-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Recommend",
          guideRef: "government-intervention-welfare",
          marks: 10,
          question:
            "[HL Paper 3 Policy Recommendation] City Alpha faces rising youth obesity. Economic modelling of its sugary-drink market shows {{Q_d = 200 - 4P}} and {{Q_s = -40 + 8P}} (thousand litres/week, price in $), giving pre-tax {{P_e = $20}}, {{Q_e = 120}} thousand litres, and equilibrium {{PED = 0.67}}. A flat $6 specific tax raises $624,000/week (with consumers bearing $416,000 — two-thirds of the incidence) while cutting volume by only 13.3% (to 104 thousand litres); low-income households spend four times the income share of high-income families on soft drinks. Using the data provided, recommend a policy to lower sugary-drink consumption while safeguarding equity.",
          modelAnswer:
            "To curb sugary-drink intake effectively while protecting low-income equity, City Alpha should adopt a **tiered specific indirect tax** based on sugar concentration per 100 ml as its primary policy, paired directly with earmarking part of the resulting fiscal revenue to subsidise healthy drink alternatives and fund colour-coded front-of-pack nutritional nudges.\n\nThe stimulus data reveals why a simple flat $6 levy alone is suboptimal. Because demand is relatively price inelastic (PED = 0.67 < 1), consumers absorb two-thirds ($4 per unit, or $416,000/week) of the economic incidence while weekly consumption falls by only 16,000 litres (13.3%). Moreover, since low-income families allocate four times the budget share to soft drinks, an uncompensated flat levy is sharply regressive.\n\nSwitching to a **tiered** levy (zero duty on drinks under 5 g sugar/100 ml, rising sharply on high-sugar formulas) alters supply-side incentives decisively: instead of merely passing $4/litre onto shoppers, bottlers gain a strong profit motive to reformulate recipes below the threshold—preserving shelf affordability while slashing total sugar intake far beyond the 13.3% volume drop. Meanwhile, recycling a portion of the projected $624,000 weekly revenue into per-unit subsidies for unsweetened milk, fresh fruit, or free school drinking fountains directly lowers healthy living costs for poorer families, neutralising regressivity. Adding behavioural Nutri-Grade-style colour labels further boosts long-run price elasticity by making sugar content salient at checkout.\n\nTrade-offs and risks remain. In the short run, tiered compliance auditing incurs higher administrative costs than a flat tax, and firms may initially face retooling expenses or shift marketing toward untaxed sugary snacks. Furthermore, if bottlers successfully reformulate, government tax receipts will shrink over the long run—meaning earmarked healthy subsidies cannot depend solely on permanent soda revenue. Nevertheless, combining a tiered sugar-based levy with targeted healthy-food support and labelling directly resolves City Alpha's inelastic-demand and regressivity dilemma.",
          markScheme: [
            { point: "Commit clearly to ONE primary policy (e.g. tiered specific sugar tax) plus targeted complementary support.", keywords: ["tiered", "primary policy", "sugar concentration"] },
            { point: "Cite the inelastic demand figure from stimulus (PED = 0.67) and modest 13.3% volume fall.", keywords: ["0.67", "13.3%", "16,000"] },
            { point: "Cite the consumer tax incidence ($416,000 / two-thirds) proving consumers carry most of a flat tax.", keywords: ["416,000", "two-thirds", "incidence"] },
            { point: "Cite the equity data (low-income families spending four times the budget share → regressive).", keywords: ["regressive", "four times", "budget share"] },
            { point: "Explain supply-side reformulation mechanism triggered by tiered thresholds.", keywords: ["reformulate", "threshold", "profit motive"] },
            { point: "Link recycling the $624,000 weekly revenue into healthy-food subsidies or water fountains to protect equity.", keywords: ["624,000", "recycling", "neutralising regressivity"] },
            { point: "Integrate behavioural labelling nudge to strengthen long-run elasticity and informed choices.", keywords: ["salient", "colour-coded", "long-run price elasticity"] },
            { point: "Evaluate administrative/compliance costs and short-run firm retooling burdens.", keywords: ["administrative costs", "compliance", "retooling"] },
            { point: "Evaluate risk of consumer substitution toward untaxed sugary snacks or long-run erosion of tax revenue as firms reformulate.", keywords: ["untaxed", "revenue will shrink", "permanent"] },
            { point: "Deliver a cohesive, justified conclusion balancing efficiency, health impact, and equity.", keywords: ["nevertheless", "dilemma", "resolves"] },
          ],
          markbands: P3_POLICY_BANDS,
          hints: [
            "HL Paper 3 Policy Rule: commit to ONE clear primary policy AND cite EVERY key number from the stimulus ($624k, $416k, 0.67, 13.3%, 4× income share)!",
            "Explain the exact economic mechanism, evaluate short- vs long-run risks (administrative cost, shrinking tax base if reformulation succeeds, untaxed substitutes), and pair with an equity safeguard.",
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 QUESTIONS — ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "2a-markets-elasticities-gov-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "[HL] A competitive market has {{Q_d = 120 - 2P}} and {{Q_s = 2P}} (price in $, quantity in single units). The government imposes a binding price ceiling at {{P_max = $20}}. Assuming efficient rationing to the highest-valuation buyers, calculate the Deadweight Welfare Loss (in $).",
      answer: { type: "number", value: 200, display: "$200" },
      traps: [
        { spec: { type: "number", value: 400 }, feedback: "Don't forget the ½ in the triangle area formula: DWL = ½ × (P_black − P_max) × (Q_e − Q_s)." },
        { spec: { type: "number", value: 100 }, feedback: "At Q_s = 40, marginal willingness to pay on D is $40 (not $30), so the vertical height of the DWL triangle is $40 − $20 = $20." },
      ],
      solution: [
        "Initial equilibrium: {{120 - 2P = 2P}} → {{P_e = $30}}, {{Q_e = 60}} units.",
        "At {{P_max = $20}}, quantity supplied (and traded) falls to {{Q_s = 2(20) = 40}} units.",
        "On the demand curve at {{Q = 40}}: {{120 - 2P = 40}} → {{P_black = $40}} (marginal benefit of the 40th unit).",
        "DWL triangle height = {{40 - 20 = $20}}; base = {{60 - 40 = 20}} units.",
        "{{DWL = 1/2 * 20 * 20 = $200}}.",
      ],
      hints: [
        "First find (P_e, Q_e) and the restricted quantity traded Q_s at P_max = $20.",
        "Plug Q_s back into Q_d = 120 − 2P to find the marginal willingness to pay (top vertex of the DWL triangle).",
        "Compute the triangle area between Q_s and Q_e bounded by D and S.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Determine",
      guideRef: "demand-supply-equilibrium",
      question:
        "[HL] A linear demand function {{Q_d = a - bP}} passes through the equilibrium point ({{P = $20}}, {{Q = 80}}), where the point Price Elasticity of Demand is {{PED = 0.5}}. Determine the value of the horizontal intercept {{a}}.",
      answer: { type: "number", value: 120, display: "120" },
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "Check the point elasticity formula PED = b × (P / Q): 0.5 = b × (20 / 80) gives b = 2, not b = 1." },
        { spec: { type: "number", value: 160 }, feedback: "Make sure you use P / Q (20 / 80 = 0.25), not Q / P." },
      ],
      solution: [
        "For linear demand {{Q_d = a - bP}}, point elasticity is {{PED = b * (P / Q)}}.",
        "Substitute {{PED = 0.5}}, {{P = 20}}, {{Q = 80}}: {{0.5 = b * (20 / 80) = 0.25b}} → {{b = 2}}.",
        "Substitute {{P = 20, Q = 80, b = 2}} into {{Q_d = a - bP}}: {{80 = a - 2(20)}} → {{a = 120}}.",
      ],
      hints: [
        "Recall point PED = |dQ/dP| × (P / Q) = b × (P / Q).",
        "Solve for b first, then plug (P = 20, Q = 80) into Q_d = a − bP to find a.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "[HL] At market equilibrium, {{PED = 0.6}} and {{PES = 1.4}}. A specific indirect tax of $10 per unit is imposed. Using the elasticity share relation {{Consumer Share = PES / (PED + PES)}}, calculate how many dollars of the $10 tax are passed onto consumers per unit.",
      answer: { type: "number", value: 7, display: "$7" },
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "$3 is the PRODUCER share (PED / (PED + PES)). Because demand is more inelastic (0.6 < 1.4), consumers bear the larger $7 share!" },
      ],
      solution: [
        "Consumer share of the specific tax = {{PES / (PED + PES) = 1.4 / (0.6 + 1.4) = 1.4 / 2.0 = 0.70}} (70%).",
        "Dollar increase passed onto consumers = {{0.70 * 10 = $7}} per unit (producers absorb the remaining $3).",
      ],
      hints: [
        "Verify intuitively: since PED (0.6) < PES (1.4), should consumers pay MORE or LESS than $5?",
        "Compute 10 × (1.4 / (0.6 + 1.4)).",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "[HL] Initially, a market has {{Q_d1 = 100 - 2P}} and {{Q_s1 = -20 + 3P}}. Simultaneously, the government levies a $5 specific tax on producers AND rising incomes shift demand rightwards by 15 units at every price ({{Q_d2 = 115 - 2P}}). Calculate the new equilibrium consumer price (in $).",
      answer: { type: "number", value: 30, display: "$30" },
      traps: [
        { spec: { type: "number", value: 27 }, feedback: "Did you forget to include the rightward demand shift (+15 units) alongside the $5 tax?" },
        { spec: { type: "number", value: 28 }, feedback: "Remember to substitute (P − 5) into supply: Q_s2 = −20 + 3(P − 5) = −35 + 3P, NOT −25 + 3P!" },
      ],
      solution: [
        "Post-tax supply: {{Q_s2 = -20 + 3(P - 5) = -35 + 3P}}.",
        "New demand: {{Q_d2 = 115 - 2P}}.",
        "Set {{115 - 2P = -35 + 3P}} → {{150 = 5P}} → {{P_2 = $30}} (with {{Q_2 = 55}} units, up from pre-shock {{Q_1 = 52}}!).",
      ],
      hints: [
        "First write the post-tax supply equation by replacing P with (P − 5) inside Q_s1.",
        "Equate the new demand Q_d2 = 115 − 2P to Q_s2 and solve for P.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q05",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "government-intervention-welfare",
      question:
        "[HL] A competitive market has {{Q_d = 100 - 2P}} and {{Q_s = 2P}} (price in $, quantity in single units). The government introduces a $10 per-unit subsidy paid to producers. Calculate the **increase** in Producer Surplus ({{ΔPS}}, in $).",
      answer: { type: "number", value: 275, display: "$275" },
      traps: [
        { spec: { type: "number", value: 900 }, feedback: "$900 is the NEW total Producer Surplus — subtract initial PS ($625) to find the increase ΔPS." },
        { spec: { type: "number", value: 600 }, feedback: "$600 is total government subsidy expenditure ($10 × 60), not ΔPS." },
      ],
      solution: [
        "Pre-subsidy equilibrium: {{100 - 2P = 2P}} → {{P_e = $25}}, {{Q_e = 50}}. Initial {{PS_1 = 1/2 * 50 * 25 = $625}}.",
        "Post-subsidy supply: {{Q_s' = 2(P + 10) = 20 + 2P}}. Set {{100 - 2P = 20 + 2P}} → {{P_c = $20}}, {{P_p = $30}}, {{Q_sub = 60}}.",
        "New Producer Surplus: {{PS_2 = 1/2 * 60 * 30 = $900}}.",
        "Increase in Producer Surplus: {{ΔPS = 900 - 625 = $275}}.",
      ],
      hints: [
        "Calculate initial PS₁ before the subsidy (note P_min = 0 since Q_s = 2P).",
        "Find post-subsidy producer price P_p = P_c + 10 and Q_sub, compute PS₂, then take PS₂ − PS₁.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q06",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "elasticities-ped-yed-pes",
      question:
        "An artisan tea company sells 2,000 tins per month at $15 per tin. The Income Elasticity of Demand (YED) for its tea is +1.8. During an economic expansion, average household income grows by 5% while the tea price remains fixed at $15. Calculate the company's **new monthly Total Revenue** (in $).",
      answer: { type: "number", value: 32700, display: "$32,700" },
      traps: [
        { spec: { type: "number", value: 2700 }, feedback: "$2,700 is the increase in revenue; the question asks for the NEW monthly Total Revenue." },
        { spec: { type: "number", value: 2180 }, feedback: "2,180 is the new quantity of tins sold — multiply by $15 per tin to obtain Total Revenue." },
      ],
      solution: [
        "Use {{%ΔQ_d = YED * %ΔY = 1.8 * 5% = +9%}}.",
        "New monthly quantity demanded: {{Q_2 = 2000 * 1.09 = 2,180}} tins.",
        "New monthly Total Revenue: {{TR_2 = 2180 * 15 = $32,700}} (up $2,700 from $30,000).",
      ],
      hints: [
        "First find %ΔQ_d by multiplying YED (+1.8) by %ΔY (+5%).",
        "Apply that percentage increase to 2,000 tins, then multiply by the $15 price.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "elasticities-ped-yed-pes",
      marks: 15,
      question:
        "[HL] Using real-world examples, evaluate whether primary-commodity-exporting developing economies should use domestic agricultural price floors to protect farmers from severe commodity price volatility.",
      modelAnswer:
        "Primary commodities such as coffee, cocoa, and rice typically exhibit both low Price Elasticity of Demand (essential foods or raw inputs with few close substitutes) and low Price Elasticity of Supply (long biological growing seasons, weather dependence, and land constraints). Graphically, steeply sloped D and S curves mean even minor weather shocks or global demand shifts trigger violent price swings, destabilising rural farm incomes and national export earnings.\n\nImposing a binding domestic price floor above equilibrium (P_min > P_e) offers immediate short-run relief. Guaranteed minimum crop prices stabilise smallholder cash flows, encourage investment in fertiliser and irrigation, and shield vulnerable rural households from plunging into absolute poverty during bumper harvests—advancing rural equity and food security. For example, India's Minimum Support Price (MSP) for wheat and rice has historically cushioned millions of smallholder farmers against seasonal price crashes and supported national grain reserves.\n\nHowever, binding floors create severe economic distortions and fiscal dangers. At P_min > P_e, quantity supplied extends to Q_s while domestic demand contracts to Q_d, generating persistent surpluses (Q_s − Q_d) and overproduction deadweight welfare loss (MC > MB). Sustaining the floor obliges the government to buy, store, and insure vast unsold stockpiles at taxpayer expense (P_min × (Q_s − Q_d)), carrying an immense opportunity cost in foregone rural roads, clinics, and schools. Thailand's 2011–2014 rice-pledging scheme illustrates these hazards vividly: guaranteeing growers roughly 40–50% above global rates accumulated an 18-million-tonne surplus, incurred over $15 billion in fiscal losses, bred storage spoilage and corruption, and temporarily cost Thailand its status as the world's top rice exporter. Consumers—especially poor urban households—also suffer higher staple food prices, reducing consumer surplus, while subsidised dumping of excess stocks onto world markets harms foreign farmers (as historically criticised under the EU Common Agricultural Policy).\n\nLong-run structural factors weaken price floors further: because basic agricultural goods have low positive YED (Engel's Law), shielding farmers from price signals traps labour in low-productivity crops rather than promoting diversification into higher-value processing, manufacturing, or services. Consequently, domestic price floors are rarely sustainable as a standalone long-run strategy. Developing economies gain far greater resilience by pairing modest emergency safety nets or crop insurance with supply-side diversification, rural storage/cold-chain infrastructure (raising PES), value-added agro-processing, and Fairtrade or futures-market hedging.",
      markScheme: [
        { point: "Explain why primary commodities face severe volatility: combined low PED and low PES.", keywords: ["low price elasticity of demand", "low price elasticity of supply", "steeply sloped"] },
        { point: "Explain the mechanism of a binding price floor (P_min > P_e) boosting guaranteed farm revenue.", keywords: ["p_min > p_e", "guaranteed", "cash flows"] },
        { point: "Identify short-run benefits: rural equity, poverty relief, encouraging farm investment.", keywords: ["rural equity", "fertiliser", "absolute poverty"] },
        { point: "Cite positive/nuanced real-world example (e.g. India Minimum Support Price / MSP).", keywords: ["india", "minimum support price", "msp"] },
        { point: "Trace diagram imbalance: excess supply / persistent surplus (Q_s − Q_d) and DWL (MC > MB).", keywords: ["q_s − q_d", "deadweight welfare", "mc > mb"] },
        { point: "Analyse heavy fiscal burden of buying/storing surpluses (P_min × (Q_s − Q_d)) and opportunity cost.", keywords: ["opportunity cost", "stockpiles", "taxpayer expense"] },
        { point: "Cite cautionary real-world example (e.g. Thailand 2011–2014 rice-pledging scheme).", keywords: ["thailand", "rice-pledging", "$15 billion"] },
        { point: "Analyse harm to poor urban consumers via higher staple prices and reduced consumer surplus.", keywords: ["urban households", "consumer surplus"] },
        { point: "Note global spillover / dumping distortions (e.g. historic EU CAP).", keywords: ["dumping", "common agricultural policy", "foreign farmers"] },
        { point: "Evaluate governance risks: spoilage, administrative waste, and corruption.", keywords: ["spoilage", "corruption"] },
        { point: "Integrate YED / Engel's Law critique: floors trap resources in low-YED farming and stall structural change.", keywords: ["engel", "low positive yed", "trap"] },
        { point: "Distinguish short-run income stabilisation from long-run structural distortion.", keywords: ["short-run relief", "long-run"] },
        { point: "Recommend supply-side alternatives: cold-chain storage (raising PES) and value-added agro-processing.", keywords: ["cold-chain", "agro-processing", "raising pes"] },
        { point: "Propose market-friendly risk tools: crop insurance, diversification, or Fairtrade/hedging.", keywords: ["crop insurance", "diversification", "hedging"] },
        { point: "Conclude with a reasoned evaluative judgement.", keywords: ["consequently", "rarely sustainable", "resilience"] },
      ],
      markbands: P1B_BANDS,
      hints: [
        "Connect Section 2.5–2.6 (low PED + low PES + low YED) directly to Section 2.7 (agricultural price floor surpluses, fiscal costs, DWL)!",
        "Use strong real-world contrasts (India MSP vs Thailand rice-pledging scheme vs EU CAP) and evaluate long-run diversification alternatives.",
      ],
    },
    {
      id: "2a-markets-elasticities-gov-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "behavioural-economics-hl",
      marks: 10,
      question:
        "[HL] Discuss the extent to which behavioural economics undermines traditional microeconomic assumptions of rational consumer and profit-maximising firm behaviour.",
      modelAnswer:
        "Traditional neoclassical microeconomics models consumers as perfectly rational utility-maximisers (*Homo economicus*) with complete information and pure self-interest, and firms as calculating profit-maximisers setting MC = MR. Behavioural economics challenges both pillars using empirical psychology.\n\nOn the consumer side, laboratory and field evidence proves systematic departures from strict optimisation. Herbert Simon demonstrated **bounded rationality** (using heuristics and satisficing under time and cognitive limits); present bias reflects **bounded self-control** (chronic under-saving); Ultimatum Game rejections prove **bounded selfishness** (valuing fairness over pure monetary gain); and Kahneman and Tversky documented **cognitive biases** such as anchoring, framing, availability, and **loss aversion** (where losses hurt roughly twice as much as equivalent gains). Similarly, modern corporations separated from dispersed shareholders frequently exhibit managerial **satisficing** (principal–agent problem), market-share expansion, or **Corporate Social Responsibility (CSR)** instead of strict short-run MC = MR profit maximisation.\n\nNevertheless, behavioural economics refines rather than invalidates neoclassical theory. First, across large competitive markets, individual quirks often cancel out in aggregate, so the laws of demand and supply still predict directional responses accurately—when petrol prices double, people still buy less fuel regardless of framing. Second, for high-stakes repeated decisions (buying a house, institutional procurement, fierce competitive survival), incentives push agents closer to rational optimisation, and firms ignoring profit entirely risk bankruptcy or hostile takeover. Third, behavioural models lack a single unified predictive equation comparable to neoclassical equilibrium, making welfare predictions harder to generalise across cultures.\n\nOverall, behavioural economics does not replace neoclassical microeconomics; rather, it enriches it as a vital complement—essential when designing choice architecture for inertia-heavy decisions (pensions, organ donation, public health), while standard price theory remains indispensable for predicting broad market equilibria, elasticity responses, and tax incidence.",
      markScheme: [
        { point: "State core neoclassical assumptions (Homo economicus utility maximisation & firm MC = MR profit maximisation).", keywords: ["homo economicus", "mc = mr", "utility-maximisers"] },
        { point: "Critique consumers via bounded rationality (heuristics/satisficing) and bounded self-control (present bias).", keywords: ["bounded rationality", "heuristics", "bounded self-control", "present bias"] },
        { point: "Critique consumers via bounded selfishness (Ultimatum Game / fairness).", keywords: ["bounded selfishness", "ultimatum game", "fairness"] },
        { point: "Explain systematic cognitive biases (anchoring, framing, availability, loss aversion).", keywords: ["anchoring", "framing", "loss aversion"] },
        { point: "Critique firm profit maximisation via principal–agent satisficing, market share, and CSR.", keywords: ["principal", "satisficing", "corporate social responsibility", "market-share"] },
        { point: "Counter-argument 1: Aggregate market laws (demand/supply directions) remain robust as individual quirks average out.", keywords: ["aggregate", "cancel out", "directional"] },
        { point: "Counter-argument 2: Competitive survival and high-stakes decisions force agents closer to rational profit/utility calculus.", keywords: ["bankruptcy", "hostile takeover", "high-stakes"] },
        { point: "Counter-argument 3: Behavioural theory lacks a single unified generalisable predictive model across contexts.", keywords: ["unified", "generalise", "cultures"] },
        { point: "Synthesise: behavioural economics complements rather than replaces neoclassical theory.", keywords: ["complements", "complement", "refines"] },
        { point: "Conclude by specifying where each framework excels (nudges/inertia vs broad market equilibria/elasticities).", keywords: ["choice architecture", "indispensable", "inertia-heavy"] },
      ],
      markbands: P1A_BANDS,
      hints: [
        "Avoid taking an all-or-nothing stance! Show BOTH why behavioural evidence exposes real neoclassical flaws AND why supply/demand/profit theory remains indispensable in aggregate and competitive markets.",
        "Cover both consumers (3 B's + biases) and firms (principal–agent satisficing, CSR, competitive discipline).",
      ],
    },
  ],
};
