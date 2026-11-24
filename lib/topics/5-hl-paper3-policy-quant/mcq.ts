import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // PAPER 1: MICRO QUANTITATIVE MODELLING (15 MCQs — answerIndex: 4,4,4,3)
  // =========================================================================
  {
    id: "5-hl-paper3-policy-quant-m1",
    title: "HL Paper 3 MCQ Set 1: Micro Quantitative Modelling",
    level: "HL",
    questions: [
      {
        id: "5-hl-paper3-policy-quant-m1-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "A competitive market is described by {{Q_d = 180 - 6P}} and {{Q_s = -20 + 4P}}, where {{P}} is in dollars and {{Q}} is in units per day. What are the free-market equilibrium price and quantity?",
        options: [
          "Pe = $20 and Qe = 60 units",
          "Pe = $16 and Qe = 84 units",
          "Pe = $25 and Qe = 80 units",
          "Pe = $20 and Qe = 80 units",
        ],
        answerIndex: 0,
        explanation:
          "Equating demand and supply gives 180 − 6P = −20 + 4P, so 10P = 200 and Pe = $20. Substituting into both equations confirms Qe = 180 − 6(20) = 60 and −20 + 4(20) = 60. Choosing $16 comes from mistakenly subtracting 20 instead of adding 20 to 180.",
        hints: [
          "Set Qd equal to Qs and collect the P terms on one side.",
          "180 + 20 = 4P + 6P gives 200 = 10P; then substitute Pe back into both equations.",
        ],
        strategy: "Solve linear equilibrium and cross-check both curves",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "Linear demand is {{Q_d = 240 - 8P}} and market equilibrium occurs at {{P_e = $18}} and {{Q_e = 96}} units. What is total consumer surplus at equilibrium?",
        options: [
          "$1,152",
          "$576",
          "$864",
          "$432",
        ],
        answerIndex: 1,
        explanation:
          "First find the demand price intercept by setting Qd = 0: 240 − 8P = 0 gives Pmax = $30. Consumer surplus is the triangle 1/2 × Qe × (Pmax − Pe) = 1/2 × 96 × (30 − 18) = 48 × 12 = $576. Omitting the 1/2 factor produces the $1,152 trap.",
        hints: [
          "Find the vertical (price) intercept of demand by setting Qd = 0.",
          "Apply the triangle area formula CS = 1/2 × Qe × (Pmax − Pe).",
        ],
        strategy: "Find price intercept before computing surplus triangles",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "A linear supply function is {{Q_s = 20 + 5P}}, and market equilibrium is {{P_e = $16}} and {{Q_e = 100}} units. What is total producer surplus at equilibrium?",
        options: [
          "$800",
          "$640",
          "$960",
          "$1,600",
        ],
        answerIndex: 2,
        explanation:
          "Because the constant c = 20 is positive, the supply curve meets the horizontal (quantity) axis at Q = 20 when P = 0. Producer surplus is therefore a trapezoid bounded by Q = 20 at P = 0 and Q = 100 at P = 16: area = 1/2 × (20 + 100) × 16 = 60 × 16 = $960. Treating it as a simple triangle 1/2 × 100 × 16 understates PS at $800.",
        hints: [
          "Check where Qs = 20 + 5P touches the axes: when P = 0, what is Qs?",
          "Since Qs = 20 at P = 0, Producer Surplus is a trapezoid: 1/2 × (c + Qe) × Pe.",
        ],
        strategy: "Check sign of c to choose triangle vs trapezoid PS",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Derive",
        guideRef: "p3-micro-quantitative",
        question:
          "Before government intervention, a market's supply equation is {{Q_s = -30 + 5P}}. The government imposes a **$6 per-unit specific indirect tax** on producers. What is the new post-tax supply equation {{Q_s'}}?",
        options: [
          "Qs' = −36 + 5P",
          "Qs' = −24 + 5P",
          "Qs' = 0 + 5P",
          "Qs' = −60 + 5P",
        ],
        answerIndex: 3,
        explanation:
          "Under a $6 per-unit tax, producers keep (P − 6) per unit sold. Substituting (P − 6) for P gives Qs' = −30 + 5(P − 6) = −30 + 5P − 30 = −60 + 5P. Simply subtracting 6 from −30 shifts quantity horizontally by 6 instead of shifting price vertically by $6.",
        hints: [
          "For a specific tax t, replace P with (P − t) inside the supply equation.",
          "Expand −30 + 5(P − 6) carefully.",
        ],
        strategy: "Shift supply in the P-direction: P → (P − t)",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "Demand is {{Q_d = 150 - 3P}} and supply is {{Q_s = -10 + 5P}} (pre-tax {{P_e = $20}}, {{Q_e = 90}}). If the government imposes an **$8 specific tax** per unit, what are the consumer price {{P_c}} and net producer price {{P_p}}?",
        options: [
          "Pc = $25 and Pp = $17",
          "Pc = $24 and Pp = $16",
          "Pc = $28 and Pp = $20",
          "Pc = $23 and Pp = $15",
        ],
        answerIndex: 0,
        explanation:
          "Post-tax supply is Qs' = −10 + 5(P − 8) = −50 + 5P. Equating 150 − 3Pc = −50 + 5Pc gives 8Pc = 200, so Pc = $25 and Pp = 25 − 8 = $17. Checking quantities confirms Qd(25) = 75 and Qs(17) = 75. Assuming consumers bear half the tax ($24 and $16) ignores the different slopes of demand and supply.",
        hints: [
          "Write Qs' = −10 + 5(P − 8) and simplify the constant term first.",
          "Set 150 − 3Pc equal to your new Qs' to find Pc, then subtract $8 to get Pp.",
        ],
        strategy: "Solve post-tax equilibrium and check Pc − Pp = t",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "In the market {{Q_d = 150 - 3P}} and {{Q_s = -10 + 5P}}, the government imposes an **$8 specific tax** per unit on producers. What are the total **consumer tax burden** and **deadweight welfare loss**?",
        options: [
          "Consumer burden = $225; DWL = $60",
          "Consumer burden = $375; DWL = $60",
          "Consumer burden = $375; DWL = $120",
          "Consumer burden = $600; DWL = $120",
        ],
        answerIndex: 1,
        explanation:
          "Consumers pay $5 above the original $20 price on 75 taxed units, so consumer burden = (25 − 20) × 75 = $375 (producers pay (20 − 17) × 75 = $225; total revenue = $600). Deadweight loss is the triangle 1/2 × t × (Qe − Qt) = 1/2 × 8 × (90 − 75) = $60. Forgetting the 1/2 gives $120.",
        hints: [
          "Consumer burden is (Pc − Pe) multiplied by the post-tax quantity Qt.",
          "DWL is the triangle 1/2 × tax wedge × fall in quantity.",
        ],
        strategy: "Separate tax revenue rectangles from DWL triangle",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "A market has {{Q_d = 140 - 2P}} and {{Q_s = -20 + 6P}} (initial {{P_e = $20}}, {{Q_e = 100}}). The government introduces a **$4 per-unit subsidy** to producers. What is the government's total subsidy expenditure?",
        options: [
          "$400",
          "$416",
          "$424",
          "$440",
        ],
        answerIndex: 2,
        explanation:
          "With a $4 subsidy, producers receive (P + 4), so Qs' = −20 + 6(P + 4) = 4 + 6P. Setting 140 − 2Pc = 4 + 6Pc yields 8Pc = 136, so Pc = $17 and Qsub = 140 − 2(17) = 106 units. Total subsidy cost = $4 × 106 = $424. Multiplying $4 by the pre-subsidy quantity 100 underestimates expenditure at $400.",
        hints: [
          "For a per-unit subsidy s, replace P with (P + s) in Qs.",
          "Solve for the new equilibrium quantity Qsub first, then multiply by $4.",
        ],
        strategy: "Always multiply subsidy s by the NEW expanded quantity",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "In a competitive market with no externalities, a **$4 per-unit subsidy** lowers consumer price from $20 to $17, raises producer price to $21, and expands output from 100 to 106 units. What is the deadweight welfare loss of overproduction?",
        options: [
          "$24",
          "$18",
          "$36",
          "$12",
        ],
        answerIndex: 3,
        explanation:
          "Every unit between 100 and 106 has marginal cost above marginal benefit by a vertical gap rising from $0 to $4, creating a deadweight loss triangle of area 1/2 × s × (Qsub − Qe) = 1/2 × 4 × (106 − 100) = $12. Omitting the 1/2 factor doubles the answer to $24.",
        hints: [
          "Identify the base (Qsub − Qe) and vertical height (subsidy s) of the welfare-loss triangle.",
          "Compute DWL = 1/2 × s × ΔQ.",
        ],
        strategy: "Subsidy DWL uses the exact same 1/2 × wedge × ΔQ geometry",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "A music-streaming firm cuts its monthly subscription price from **$20 to $16**, and subscribers rise from **500 to 650**. What is the price elasticity of demand magnitude (|PED|) and the resulting change in total revenue?",
        options: [
          "|PED| = 1.50 and total revenue increases by $400",
          "|PED| = 0.67 and total revenue decreases by $400",
          "|PED| = 1.50 and total revenue decreases by $400",
          "|PED| = 1.25 and total revenue increases by $600",
        ],
        answerIndex: 0,
        explanation:
          "%ΔQd = (150 / 500) × 100 = +30% and %ΔP = (−4 / 20) × 100 = −20%, giving |PED| = 30 / 20 = 1.50 (price elastic). Because demand is elastic, a price cut raises total revenue: TR1 = $20 × 500 = $10,000 while TR2 = $16 × 650 = $10,400 (+$400). Inverting the ratio produces the 0.67 error.",
        hints: [
          "Compute %ΔQd and %ΔP from their initial values before dividing.",
          "Check TR1 = P1 × Q1 vs TR2 = P2 × Q2 directly.",
        ],
        strategy: "Cross-check PED elasticity regime against Total Revenue test",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "p3-micro-quantitative",
        question:
          "When average annual household income rises from **$40,000 to $46,000**, annual consumption of instant noodles falls from **80 packs to 74 packs**. What is the YED and good classification?",
        options: [
          "YED = +0.50 (normal necessity good)",
          "YED = −0.50 (inferior good)",
          "YED = −2.00 (inferior luxury good)",
          "YED = −0.46 (normal necessity good)",
        ],
        answerIndex: 1,
        explanation:
          "%ΔY = (6,000 / 40,000) × 100 = +15%, while %ΔQd = (−6 / 80) × 100 = −7.5%. Therefore YED = −7.5% / +15% = −0.50. Because YED is strictly negative, instant noodles are an inferior good; dropping the minus sign misclassifies them as normal.",
        hints: [
          "Always preserve the + or − sign when calculating YED.",
          "Divide %ΔQd (−7.5%) by %ΔY (+15%).",
        ],
        strategy: "Keep sign on YED: negative = inferior, positive = normal",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "A monopolist produces at its profit-maximising output of **20 units** where {{MC = MR = $15}}. At {{Q = 20}}, price ({{AR}}) is **$28**, average total cost ({{AC}}) is **$21**, and average variable cost ({{AVC}}) is **$16**. What is the firm's economic profit?",
        options: [
          "$260 abnormal profit",
          "$240 abnormal profit",
          "$140 abnormal profit",
          "$100 normal profit",
        ],
        answerIndex: 2,
        explanation:
          "Economic profit equals (AR − AC) × Q = ($28 − $21) × 20 = $140 abnormal profit. Using MC ($15) or AVC ($16) instead of AC ($21) omits fixed costs and overstates profit at $260 or $240.",
        hints: [
          "Economic profit uses total cost per unit (AC), not MC or AVC.",
          "Apply Profit = (AR − AC) × Q*.",
        ],
        strategy: "Profit rectangle always spans vertically from AR down to AC",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Determine",
        guideRef: "p3-micro-quantitative",
        question:
          "A perfectly competitive firm faces a market price of **$14**. At its {{MC = MR}} output of **50 units**, {{AC = $19}} and {{AVC = $12}}. What is the firm's profit-maximising (loss-minimising) short-run decision?",
        options: [
          "Shut down immediately because price is below average total cost, losing $250",
          "Continue producing in the short run and earn an abnormal profit of $100",
          "Shut down immediately because fixed costs are $250 per period",
          "Continue producing in the short run to lose $250 rather than $350 if shut down",
        ],
        answerIndex: 3,
        explanation:
          "Total fixed cost is (AC − AVC) × Q = ($19 − $12) × 50 = $350, which the firm loses if it shuts down. By continuing to produce at P = $14 > AVC = $12, it covers all variable costs and contributes $2 per unit ($100 total) toward fixed costs, cutting its short-run loss to ($14 − $19) × 50 = −$250.",
        hints: [
          "Compare market price ($14) against AVC ($12) to test the short-run shut-down condition.",
          "Compute TFC = (AC − AVC) × Q to compare the shut-down loss against the operating loss.",
        ],
        strategy: "In the short run, operate whenever P ≥ AVC because TFC is sunk",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "p3-micro-quantitative",
        question:
          "The rental housing market has {{Q_d = 100 - 2P}} and {{Q_s = -20 + 3P}} (equilibrium {{P_e = $24}}, {{Q_e = 52}}). If authorities impose a binding **price ceiling of $18**, what is the resulting shortage?",
        options: [
          "30 units",
          "18 units",
          "12 units",
          "64 units",
        ],
        answerIndex: 0,
        explanation:
          "At P = $18, quantity demanded rises to Qd = 100 − 2(18) = 64 units while quantity supplied contracts to Qs = −20 + 3(18) = 34 units. Excess demand (shortage) is Qd − Qs = 64 − 34 = 30 units. Taking only Qd − Qe (12) or Qe − Qs (18) captures only half of the gap.",
        hints: [
          "Evaluate BOTH Qd and Qs at the ceiling price P = 18.",
          "Shortage equals Qd(18) minus Qs(18).",
        ],
        strategy: "Always evaluate both curves at a binding price control",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Determine",
        guideRef: "p3-micro-quantitative",
        question:
          "For linear demand {{Q_d = 100 - 2P}} and linear supply {{Q_s = -20 + 3P}}, what percentage of **any** specific indirect tax {{t}} is borne by consumers?",
        options: [
          "40%",
          "60%",
          "50%",
          "67%",
        ],
        answerIndex: 1,
        explanation:
          "With Qd = a − bP (b = 2) and Qs = c + dP (d = 3), the consumer price increase is ΔPc = [d / (b + d)] × t = [3 / (2 + 3)] × t = 0.60t, so consumers bear 60% of the tax burden and producers bear 40% (b / [b + d]). Swapping b and d gives the producer share (40%).",
        hints: [
          "Test with a simple tax such as t = $5, or use the linear incidence ratio d / (b + d).",
          "Demand slope coefficient is b = 2 and supply slope coefficient is d = 3.",
        ],
        strategy: "Linear tax incidence: consumer share = d / (b + d)",
      },
      {
        id: "5-hl-paper3-policy-quant-m1-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Determine",
        guideRef: "p3-micro-quantitative",
        question:
          "A firm faces the linear inverse demand curve {{P = 60 - 3Q}}. At what output {{Q}} is the firm's **total revenue** maximised?",
        options: [
          "Q = 20 units",
          "Q = 15 units",
          "Q = 10 units",
          "Q = 12 units",
        ],
        answerIndex: 2,
        explanation:
          "Total revenue is TR = P × Q = 60Q − 3Q², so marginal revenue has twice the slope of demand: MR = 60 − 6Q. Setting MR = 0 gives 6Q = 60, hence Q = 10 units (midpoint of the Q-intercept 20, yielding maximum TR = $300). Choosing Q = 20 gives P = $0 and TR = $0.",
        hints: [
          "For a linear demand curve P = α − βQ, MR has the same P-intercept and twice the slope: MR = α − 2βQ.",
          "Set MR = 0 (or locate the exact midpoint between Q = 0 and the horizontal intercept Q = 20).",
        ],
        strategy: "Revenue maximisation occurs at MR = 0 (midpoint of linear demand)",
      },
    ],
  },

  // =========================================================================
  // PAPER 2: MACRO QUANTITATIVE MODELLING (15 MCQs — answerIndex: 3,4,4,4)
  // =========================================================================
  {
    id: "5-hl-paper3-policy-quant-m2",
    title: "HL Paper 3 MCQ Set 2: Macro Modelling & Fiscal Multiplier",
    level: "HL",
    questions: [
      {
        id: "5-hl-paper3-policy-quant-m2-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "Country X reports Nominal GDP of **$550 billion** in 2025 with a GDP deflator of **110** (base year = 100). What is Country X's Real GDP in base-year dollars?",
        options: [
          "$605 billion",
          "$500 billion",
          "$495 billion",
          "$440 billion",
        ],
        answerIndex: 1,
        explanation:
          "Real GDP = (Nominal GDP / GDP Deflator) × 100 = (550 / 110) × 100 = $500 billion. Multiplying by 1.10 instead of dividing inflates the figure to $605 billion, while subtracting 10% directly yields the wrong $495 billion approximation.",
        hints: [
          "Use Real GDP = (Nominal GDP / Deflator) × 100.",
          "Divide 550 by 1.10.",
        ],
        strategy: "Deflate nominal figures by dividing by (Deflator / 100)",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "An economy's Consumer Price Index (CPI) rises from **125.0** in 2024 to **130.0** in 2025. What is the annual CPI inflation rate in 2025?",
        options: [
          "5.0%",
          "3.85%",
          "4.0%",
          "4.5%",
        ],
        answerIndex: 2,
        explanation:
          "Annual inflation is the percentage change from the starting index: [(130.0 − 125.0) / 125.0] × 100 = (5 / 125) × 100 = 4.0%. Subtracting index points directly (130 − 125 = 5.0%) is valid only when starting from base 100, and dividing by 130 gives 3.85%.",
        hints: [
          "Inflation is a percentage change relative to the initial year's CPI, not raw index-point difference.",
          "Compute [(130 − 125) / 125] × 100.",
        ],
        strategy: "Always divide CPI change by the starting CPI",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "A country has a working-age population of **20.0 million**, of whom **11.4 million** are employed, **0.6 million** are unemployed and actively seeking work, and **8.0 million** are economically inactive. What are the unemployment rate and labour-force participation rate (LFPR)?",
        options: [
          "Unemployment rate = 3.0%; LFPR = 57.0%",
          "Unemployment rate = 5.3%; LFPR = 60.0%",
          "Unemployment rate = 3.0%; LFPR = 60.0%",
          "Unemployment rate = 5.0%; LFPR = 60.0%",
        ],
        answerIndex: 3,
        explanation:
          "Labour Force = Employed + Unemployed = 11.4 + 0.6 = 12.0 million. Unemployment rate = (0.6 / 12.0) × 100 = 5.0%, and LFPR = (12.0 / 20.0) × 100 = 60.0%. Dividing 0.6 by the 20.0 million working-age population gives the incorrect 3.0% figure.",
        hints: [
          "First find the Labour Force = Employed + Unemployed (exclude economically inactive).",
          "Unemployment rate uses Labour Force as denominator; LFPR uses Working-Age Population.",
        ],
        strategy: "Match the exact denominator for Unemployment vs LFPR",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "A CPI basket has three weighted categories: **Food (weight 0.25, index 120)**, **Housing (weight 0.45, index 108)**, and **Services (weight 0.30, index 110)**. What is the overall weighted CPI?",
        options: [
          "111.6",
          "112.7",
          "110.8",
          "113.4",
        ],
        answerIndex: 0,
        explanation:
          "Weighted CPI = (0.25 × 120) + (0.45 × 108) + (0.30 × 110) = 30.0 + 48.6 + 33.0 = 111.6. Taking an unweighted simple average (120 + 108 + 110) / 3 = 112.7 ignores the heavy 45% housing weight.",
        hints: [
          "Multiply each category's index by its exact decimal weight, then sum all three products.",
          "Check that the weights sum to 0.25 + 0.45 + 0.30 = 1.00.",
        ],
        strategy: "Compute weighted sum rather than unweighted average",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "In Year 1, Nominal GDP is **$200 billion**, the GDP deflator is **100**, and population is **10.0 million**. In Year 2, Nominal GDP is **$231 billion**, the GDP deflator is **110**, and population is **10.5 million**. What is the percentage growth in **Real GDP per capita**?",
        options: [
          "+5.0%",
          "+10.0%",
          "0.0%",
          "+15.5%",
        ],
        answerIndex: 2,
        explanation:
          "Year 1 Real GDP = $200 bn, so Real GDP per capita = $200 bn / 10 m = $20,000. Year 2 Real GDP = (231 / 110) × 100 = $210 bn (+5.0% real GDP growth), and dividing by 10.5 million gives $20,000 per capita — exactly 0.0% real per-capita growth!",
        hints: [
          "Convert Nominal GDP to Real GDP in BOTH years before dividing by each year's population.",
          "Compare Year 2 Real GDP per capita ($210 bn / 10.5 m) with Year 1 ($200 bn / 10.0 m).",
        ],
        strategy: "Deflate first, divide by population second, take % change last",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "Progressive income tax brackets are: **$0–$15,000 at 0%**, **$15,001–$45,000 at 10%**, and **above $45,000 at 20%**. How much total income tax does a worker earning **$65,000** pay?",
        options: [
          "$13,000",
          "$10,000",
          "$8,500",
          "$7,000",
        ],
        answerIndex: 3,
        explanation:
          "Slice income bracket by bracket: first $15,000 at 0% = $0; next $30,000 ($15,001 to $45,000) at 10% = $3,000; top $20,000 ($45,001 to $65,000) at 20% = $4,000. Total tax = $7,000. Multiplying all $65,000 by the 20% marginal rate creates the $13,000 error.",
        hints: [
          "Never apply the 20% marginal rate to the entire $65,000 income.",
          "Compute tax on three slices: $15,000 at 0%, $30,000 at 10%, and $20,000 at 20%.",
        ],
        strategy: "Slice progressive income tax band by band",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "Using the same brackets (**$0–$15,000 at 0%**, **$15,001–$45,000 at 10%**, **above $45,000 at 20%**), what are the **average tax rate (ATR)** and **marginal tax rate (MTR)** for a worker earning **$70,000**?",
        options: [
          "ATR = 20.00% and MTR = 11.43%",
          "ATR = 11.43% and MTR = 20.00%",
          "ATR = 14.29% and MTR = 20.00%",
          "ATR = 10.00% and MTR = 20.00%",
        ],
        answerIndex: 1,
        explanation:
          "Total tax = ($15,000 × 0%) + ($30,000 × 10%) + ($25,000 × 20%) = $0 + $3,000 + $5,000 = $8,000. ATR = ($8,000 / $70,000) × 100 = 11.43%, while MTR is the top-bracket rate on the next dollar earned (20.00%). In any progressive system, ATR lies strictly below MTR.",
        hints: [
          "Find total tax paid across the three brackets for $70,000 first.",
          "ATR = (Total Tax / Gross Income) × 100%; MTR = top bracket rate.",
        ],
        strategy: "Check progressivity rule: ATR < MTR",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "p3-macro-quantitative",
        question:
          "Household A earns **$25,000** and spends **$20,000** on goods carrying a flat **10% VAT**. Household B earns **$100,000** and spends **$50,000** on the same taxed goods. What does comparing their indirect tax burdens prove?",
        options: [
          "The VAT is regressive because A pays 8.0% of income while B pays 5.0% of income",
          "The VAT is progressive because B pays $5,000 in tax while A pays only $2,000",
          "The VAT is proportional because both households face the identical 10% statutory rate",
          "The VAT is progressive because B has a lower average propensity to consume than A",
        ],
        answerIndex: 0,
        explanation:
          "Classification as progressive, proportional, or regressive depends on tax paid as a **percentage of income**, not absolute dollars or the statutory sales rate. A pays $2,000 / $25,000 = 8.0% of income whereas B pays $5,000 / $100,000 = 5.0%, proving the flat VAT is regressive.",
        hints: [
          "Calculate indirect tax paid as a percentage of each household's gross income.",
          "If the percentage of income paid in tax falls as income rises, the tax is regressive.",
        ],
        strategy: "Judge tax equity by tax paid as a share of gross income",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "An open economy has {{MPS = 0.10}}, {{MPT = 0.20}}, and {{MPM = 0.20}}. What is the value of the Keynesian spending multiplier {{k}}?",
        options: [
          "10.0",
          "3.33",
          "5.0",
          "2.0",
        ],
        answerIndex: 3,
        explanation:
          "Total marginal propensity to withdraw is MPW = MPS + MPT + MPM = 0.10 + 0.20 + 0.20 = 0.50. Hence k = 1 / 0.50 = 2.0. Omitting taxes and imports gives the inflated closed-economy trap k = 1 / 0.10 = 10.0.",
        hints: [
          "Sum all three marginal leakages: MPS + MPT + MPM.",
          "Take the reciprocal k = 1 / MPW.",
        ],
        strategy: "Always include all three leaks (S, T, M) in open-economy k",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "Actual Real GDP is **$640 billion**, full-employment Real GDP is **$700 billion**, and the marginal propensity to consume domestically is {{MPC_d = 0.75}}. Assuming no crowding out or price-level rise, what initial increase in government spending {{Delta G}} closes the deflationary gap?",
        options: [
          "$60 billion",
          "$15 billion",
          "$20 billion",
          "$45 billion",
        ],
        answerIndex: 1,
        explanation:
          "First compute the multiplier k = 1 / (1 − 0.75) = 4.0. The deflationary gap is $700 bn − $640 bn = $60 bn. Required initial injection ΔG = Gap / k = $60 bn / 4.0 = $15 bn. Multiplying 60 × 0.75 ($45 bn) confuses ΔG with induced consumption.",
        hints: [
          "Calculate k = 1 / (1 − MPCd) and the size of the deflationary gap (Yf − Y1).",
          "Divide the gap by k to find required ΔG.",
        ],
        strategy: "Gap-closing rule: ΔG = (Yf − Y1) / k",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Predict",
        guideRef: "p3-macro-quantitative",
        question:
          "Initially an economy has {{MPS = 0.10}}, {{MPT = 0.15}}, and {{MPM = 0.15}}. Higher interest rates cause households to increase {{MPS}} to **0.20** while {{MPT}} and {{MPM}} remain unchanged. How does the spending multiplier change?",
        options: [
          "It rises from 2.0 to 2.5",
          "It falls from 4.0 to 2.5",
          "It falls from 2.5 to 2.0",
          "It falls from 10.0 to 5.0",
        ],
        answerIndex: 2,
        explanation:
          "Initially MPW = 0.10 + 0.15 + 0.15 = 0.40, giving k1 = 1 / 0.40 = 2.5. When MPS rises to 0.20, new MPW = 0.20 + 0.15 + 0.15 = 0.50, reducing the multiplier to k2 = 1 / 0.50 = 2.0. Larger leakages always shrink the multiplier.",
        hints: [
          "Calculate MPW before and after MPS rises from 0.10 to 0.20.",
          "Compare 1 / 0.40 with 1 / 0.50.",
        ],
        strategy: "Higher leakages strictly reduce k",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "In Base Year 1, an economy's Nominal GDP and Real GDP both equal **$500 billion**. In Year 2, Nominal GDP reaches **$530 billion** while Real GDP reaches **$510 billion**. What is the Year 2 GDP deflator (to 2 d.p.)?",
        options: [
          "106.00",
          "102.00",
          "96.23",
          "103.92",
        ],
        answerIndex: 3,
        explanation:
          "GDP Deflator = (Nominal GDP / Real GDP) × 100 = (530 / 510) × 100 = 103.92, reflecting 3.92% economy-wide inflation. Dividing Real by Nominal gives the inverted 96.23 error, while 106.00 ignores real output growth.",
        hints: [
          "Recall GDP Deflator = (Nominal GDP / Real GDP) × 100.",
          "Check that Nominal > Real implies a deflator strictly above 100.",
        ],
        strategy: "Check direction: inflation means Deflator > 100",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "National accounts show {{C = $310 bn}}, {{I = $95 bn}}, {{G = $110 bn}}, {{X = $85 bn}}, {{M = $100 bn}}, and net factor income from abroad {{= -$25 bn}}. What are **GDP** and **GNI**?",
        options: [
          "GDP = $500 bn and GNI = $475 bn",
          "GDP = $500 bn and GNI = $525 bn",
          "GDP = $530 bn and GNI = $505 bn",
          "GDP = $700 bn and GNI = $675 bn",
        ],
        answerIndex: 0,
        explanation:
          "GDP = C + I + G + (X − M) = 310 + 95 + 110 + (85 − 100) = $500 bn. GNI = GDP + net factor income from abroad = 500 + (−25) = $475 bn (common in FDI-heavy economies where foreign multinationals repatriate profits). Adding M instead of subtracting it inflates GDP to $700 bn.",
        hints: [
          "Remember imports (M) are SUBTRACTED in GDP = C + I + G + X − M.",
          "Add signed net factor income from abroad to GDP to obtain GNI.",
        ],
        strategy: "Keep exact signs on (X − M) and net factor income",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Explain",
        guideRef: "p3-macro-quantitative",
        question:
          "An economy lies on the **upward-sloping** section of its Keynesian AS curve with {{k = 2.5}}. When the government injects **$10 billion** of new spending, why does Real GDP increase by **less than $25 billion**?",
        options: [
          "Because the Keynesian multiplier formula only applies to private investment, not government spending",
          "Because part of the $25 billion AD increase is absorbed into a higher price level as spare capacity tightens",
          "Because upward-sloping AS causes household MPS to become negative during expansions",
          "Because government spending shifts the Keynesian AS curve leftwards by an identical $25 billion",
        ],
        answerIndex: 1,
        explanation:
          "The textbook formula ΔY = k × ΔG measures the horizontal shift of Aggregate Demand ($25 bn) at a constant price level. On the upward-sloping Keynesian AS segment, tightening bottlenecks push up factor prices and the general price level, absorbing part of the AD boost into demand-pull inflation rather than real output.",
        hints: [
          "Distinguish the horizontal shift of AD (k × ΔG) from the actual change in equilibrium Real GDP along an upward-sloping AS.",
          "What happens to the price level when AD rises near full capacity?",
        ],
        strategy: "Connect multiplier algebra directly to AD/AS slope",
      },
      {
        id: "5-hl-paper3-policy-quant-m2-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Calculate",
        guideRef: "p3-macro-quantitative",
        question:
          "A country has a labour force of **5.0 million** with **400,000** unemployed (an **8.0%** unemployment rate). During a prolonged slump, **100,000** unemployed workers become discouraged and stop looking for jobs. What is the new measured unemployment rate (to 2 d.p.)?",
        options: [
          "6.00%",
          "8.00%",
          "6.12%",
          "7.84%",
        ],
        answerIndex: 2,
        explanation:
          "Discouraged workers leave BOTH the unemployed count and the labour force! New unemployed = 300,000 and new labour force = 4,900,000, giving (300,000 / 4,900,000) × 100 = 6.12%. Keeping the denominator at 5.0 million yields the wrong 6.00% figure.",
        hints: [
          "When workers stop actively searching, they exit both the numerator AND the denominator.",
          "Divide 300,000 by 4,900,000 and multiply by 100.",
        ],
        strategy: "Adjust BOTH numerator and denominator for discouraged workers",
      },
    ],
  },

  // =========================================================================
  // PAPER 3: GLOBAL MODELLING & 10M POLICY (15 MCQs — answerIndex: 4,3,4,4)
  // =========================================================================
  {
    id: "5-hl-paper3-policy-quant-m3",
    title: "HL Paper 3 MCQ Set 3: Global Modelling & 10-Mark Policy Synthesis",
    level: "HL",
    questions: [
      {
        id: "5-hl-paper3-policy-quant-m3-q01",
        kind: "mcq",
        level: "HL",
        difficulty: "warmup",
        commandTerm: "Determine",
        guideRef: "p3-global-quantitative",
        question:
          "With identical resources, **Country A** can produce **40 cars OR 80 laptops**, while **Country B** can produce **30 cars OR 90 laptops**. Which country holds comparative advantage in **cars**, and at what opportunity cost?",
        options: [
          "Country B, at an opportunity cost of 0.33 laptops per car",
          "Country A, at an opportunity cost of 0.50 laptops per car",
          "Country A, at an opportunity cost of 2.00 laptops per car",
          "Country B, at an opportunity cost of 3.00 laptops per car",
        ],
        answerIndex: 2,
        explanation:
          "For an output table, OC(1 car) = Max laptops / Max cars. Country A gives up 80 / 40 = 2.00 laptops per car, whereas Country B gives up 90 / 30 = 3.00 laptops per car. Because 2.00 < 3.00, Country A has the comparative advantage in cars. Dividing cars by laptops gives the opportunity cost of laptops instead.",
        hints: [
          "Output table rule: opportunity cost of 1 car = (max laptops) / (max cars).",
          "Compare Country A's opportunity cost of 1 car against Country B's.",
        ],
        strategy: "Output table: divide the OTHER good by the target good",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q02",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Determine",
        guideRef: "p3-global-quantitative",
        question:
          "For two trading partners where **Country X** has an opportunity cost of **2.0 laptops** per car and **Country Y** has an opportunity cost of **3.0 laptops** per car, which terms of trade allow **both** countries to gain strictly from specialisation and trade?",
        options: [
          "1 car exchanges for 2.5 laptops",
          "1 car exchanges for 1.8 laptops",
          "1 car exchanges for 3.2 laptops",
          "1 car exchanges for 2.0 laptops",
        ],
        answerIndex: 0,
        explanation:
          "Mutually beneficial terms of trade must lie strictly between the two domestic opportunity costs (between 2.0 and 3.0 laptops per car). At 1 car = 2.5 laptops, exporter A receives 2.5 > 2.0 laptops while importer B pays 2.5 < 3.0 laptops. At exactly 2.0, Country A gains zero surplus from trade.",
        hints: [
          "Exporter A needs strictly MORE than 2.0 laptops per car; importer B needs to pay strictly LESS than 3.0.",
          "Pick the ratio strictly inside the interval (2.0, 3.0).",
        ],
        strategy: "Terms of trade must sit strictly between the two domestic OCs",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q03",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "An **input table** shows labour hours required per tonne: **Country P** needs **4 hours per tonne of steel** and **8 hours per tonne of copper**; **Country Q** needs **6 hours per steel** and **6 hours per copper**. What is Country P's opportunity cost of producing 1 tonne of steel?",
        options: [
          "2.00 tonnes of copper",
          "1.50 tonnes of copper",
          "1.00 tonne of copper",
          "0.50 tonnes of copper",
        ],
        answerIndex: 3,
        explanation:
          "Because this is an INPUT (hours-per-unit) table, diverting 4 hours to make 1 tonne of steel sacrifices only 4 / 8 = 0.50 tonnes of copper! Blindly applying the output-table rule (8 / 4 = 2.00) flips the answer upside down.",
        hints: [
          "Check whether the table gives output per resource or input hours per unit!",
          "In 4 hours (enough for 1 steel), how much copper could Country P make if 1 copper needs 8 hours?",
        ],
        strategy: "Input table rule: OC(1 X) = Hours(X) / Hours(Y)",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q04",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "Sugar trades at world price **$400/tonne** (domestic supply {{Q_1 = 30}} thousand tonnes; demand {{Q_2 = 120}} thousand tonnes). A **$100/tonne tariff** lifts domestic price to **$500/tonne**, changing domestic supply to {{Q_3 = 45}} thousand and demand to {{Q_4 = 100}} thousand. What is government tariff revenue?",
        options: [
          "$9.00 million",
          "$5.50 million",
          "$10.00 million",
          "$4.50 million",
        ],
        answerIndex: 1,
        explanation:
          "Government collects $100 on each post-tariff imported tonne: imports = Q4 − Q3 = 100k − 45k = 55k tonnes, so revenue = $100 × 55,000 = $5,500,000 ($5.50 million). Using pre-tariff imports (90k) overstates revenue at $9.00 million.",
        hints: [
          "Tariff revenue is collected ONLY on post-tariff imports (Q4 − Q3).",
          "Multiply $100/tonne by (100,000 − 45,000) tonnes.",
        ],
        strategy: "Tariff revenue rectangle c = t × (Q4 − Q3)",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q05",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "For the same **$100/tonne sugar tariff** ({{Q_1 = 30k}} → {{Q_3 = 45k}}; {{Q_2 = 120k}} → {{Q_4 = 100k}}), what is the **total deadweight welfare loss**?",
        options: [
          "$1.75 million",
          "$0.75 million",
          "$1.00 million",
          "$3.50 million",
        ],
        answerIndex: 0,
        explanation:
          "Production inefficiency DWL = 1/2 × (45k − 30k) × $100 = $750k, and consumption loss DWL = 1/2 × (120k − 100k) × $100 = $1,000k. Summing both triangles gives total DWL = $1,750k ($1.75 million). Reporting only one triangle gives $0.75m or $1.00m, and omitting the 1/2 doubles the answer to $3.50m.",
        hints: [
          "A tariff creates TWO deadweight loss triangles: production inefficiency (Q3 − Q1) and consumption loss (Q2 − Q4).",
          "Compute 1/2 × 100 × [(45k − 30k) + (120k − 100k)].",
        ],
        strategy: "Sum BOTH tariff DWL triangles (b + d)",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q06",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "Under that same **$100/tonne sugar tariff** raising domestic supply from {{Q_1 = 30}} thousand tonnes to {{Q_3 = 45}} thousand tonnes, what is the gain in **domestic producer surplus**?",
        options: [
          "$4.50 million",
          "$3.00 million",
          "$3.75 million",
          "$2.25 million",
        ],
        answerIndex: 2,
        explanation:
          "Domestic producer surplus gain is the trapezoid a = 1/2 × (Q1 + Q3) × t = 1/2 × (30k + 45k) × $100 = 37.5k × $100 = $3.75 million. Taking the full rectangle Q3 × $100 ($4.50m) mistakenly includes the $0.75m production DWL triangle inside producer surplus.",
        hints: [
          "Domestic producer surplus gain is a trapezoid bounded by Q1 and Q3.",
          "Apply 1/2 × (Q1 + Q3) × t.",
        ],
        strategy: "Producer gain under a tariff is always a trapezoid, not a rectangle",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q07",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Analyse",
        guideRef: "p3-global-quantitative",
        question:
          "Suppose the government replaces that **$100/tonne sugar tariff** with an unauctioned **import quota of 55 thousand tonnes** where foreign exporters capture the resulting quota rent. How does the domestic economy's net welfare loss compare to the tariff?",
        options: [
          "Net domestic welfare loss shrinks to zero because no tariff is collected",
          "Net domestic welfare loss stays identical at $1.75 million",
          "Net domestic welfare loss falls by $1.00 million as consumption recovers",
          "Net domestic welfare loss rises by $5.50 million to $7.25 million",
        ],
        answerIndex: 3,
        explanation:
          "Because the domestic price still rises by $100/tonne, areas b ($0.75m) and d ($1.00m) remain deadweight losses. In addition, rectangle c ($5.50m) transfers to foreign exporters as quota rent instead of staying with the domestic government, lifting total domestic net welfare loss to $1.75m + $5.50m = $7.25 million.",
        hints: [
          "Compare who receives rectangle c ($5.50 million) under a tariff versus a foreign-held quota.",
          "Add the leaked quota rent c to the two deadweight loss triangles b + d.",
        ],
        strategy: "Tariff domestic welfare loss = b + d; foreign-rent quota = b + c + d",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q08",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "The exchange rate changes from **1 EUR = 1.25 USD** to **1 EUR = 1.00 USD**. What is the exact percentage **appreciation of the USD** against the EUR?",
        options: [
          "+25.0%",
          "+20.0%",
          "−20.0%",
          "+12.5%",
        ],
        answerIndex: 0,
        explanation:
          "Invert the quotes to express EUR per 1 USD: initially 1 USD = 1 / 1.25 = 0.80 EUR, and afterward 1 USD = 1 / 1.00 = 1.00 EUR. Thus %ΔUSD = [(1.00 − 0.80) / 0.80] × 100 = +25.0%. The 20.0% figure is the depreciation of the EUR, not the appreciation of the USD.",
        hints: [
          "Convert both quotes into EUR per 1 USD before taking the percentage change.",
          "Check [(1.25 / 1.00) − 1] × 100%.",
        ],
        strategy: "Invert the exchange rate before finding % change of the quote currency",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q09",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Calculate",
        guideRef: "p3-global-quantitative",
        question:
          "A nation's Balance of Payments reports: **Trade in goods −$32 bn**, **Trade in services +$14 bn**, **Net primary income +$3 bn**, **Net secondary income −$5 bn**, **Capital account +$2 bn**, and **Net errors & omissions +$1 bn**. What is its **Financial Account** balance?",
        options: [
          "−$17 billion",
          "+$20 billion",
          "+$17 billion",
          "+$23 billion",
        ],
        answerIndex: 2,
        explanation:
          "Current Account = −32 + 14 + 3 − 5 = −$20 bn. Since CA + KA + FA + NEO = 0, we solve −20 + 2 + FA + 1 = 0, yielding FA = +$17 billion (a net financial inflow financing the current-account deficit). Ignoring KA and NEO gives the wrong +$20 bn figure.",
        hints: [
          "Sum all four Current Account components carefully with signs.",
          "Solve CA + KA + FA + NEO = 0 for FA.",
        ],
        strategy: "Use the complete BoP zero-sum identity including KA and NEO",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q10",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Predict",
        guideRef: "p3-global-quantitative",
        question:
          "Following a currency depreciation, a country's short-run elasticities are {{|PED_X| = 0.45}} and {{|PED_M| = 0.40}}, rising after 18 months to {{|PED_X| = 0.80}} and {{|PED_M| = 0.65}}. What does the Marshall–Lerner condition predict?",
        options: [
          "The trade balance improves immediately and then deteriorates after 18 months",
          "The trade balance improves immediately and continues improving monotonically",
          "The trade balance worsens permanently because each single elasticity stays below 1",
          "The trade balance worsens initially and then improves after 18 months (J-curve)",
        ],
        answerIndex: 3,
        explanation:
          "Marshall–Lerner tests the SUM |PEDx| + |PEDm| > 1. In the short run, 0.45 + 0.40 = 0.85 < 1 (fixed contracts keep trade volumes sticky while import bills jump), so the Current Account worsens. After 18 months, 0.80 + 0.65 = 1.45 > 1, so net exports improve — tracing out the J-curve.",
        hints: [
          "Check the sum |PEDx| + |PEDm| separately in the short run and after 18 months.",
          "Marshall–Lerner compares the sum against 1.0, not each elasticity individually.",
        ],
        strategy: "Evaluate |PEDx| + |PEDm| across both time horizons",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q11",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "p3-ten-mark-policy",
        question:
          "Which approach to the compulsory **10-mark HL Paper 3 Policy Recommendation** is most closely aligned with reaching **Band 8–10**?",
        options: [
          "Listing four separate demand- and supply-side policies with brief general descriptions of each",
          "Committing to one primary policy anchored in stimulus data and earlier calculations, plus trade-off evaluation",
          "Importing three memorised real-world country examples from Paper 1 revision instead of using the tables",
          "Arguing that free markets self-correct so no government intervention should ever be recommended",
        ],
        answerIndex: 1,
        explanation:
          "Band 8–10 requires a decisive commitment to ONE coherent primary policy (optionally backed by one targeted complement), tightly justified using the unseen stimulus text, data tables, and prior Paper 3 calculations, paired with balanced trade-off evaluation. Shopping lists of four policies cap responses in Band 3–4.",
        hints: [
          "Recall the first two letters of D-A-T-E-C: Decide and Anchor.",
          "Paper 3 uses the stimulus text and your calculations — not external memorised Paper 1 examples.",
        ],
        strategy: "Apply D-A-T-E-C to distinguish Band 8–10 from Band 3–4",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q12",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Evaluate",
        guideRef: "p3-ten-mark-policy",
        question:
          "A Paper 3 stimulus describes a small economy with **95% debt-to-GDP**, **7.2% cost-push inflation**, **0.6% real growth**, and {{MPM = 0.42}}. Why would recommending a large debt-funded fiscal stimulus be poorly justified?",
        options: [
          "High MPM shrinks the domestic multiplier while high debt raises borrowing risks and extra AD fuels 7.2% inflation",
          "High MPM raises the spending multiplier above 5, causing uncontrollable deflation across domestic sectors",
          "Debt-funded fiscal stimulus directly shifts LRAS leftwards and eliminates all structural unemployment",
          "Cost-push inflation guarantees that fiscal multipliers are infinite whenever debt exceeds 90% of GDP",
        ],
        answerIndex: 0,
        explanation:
          "With MPM = 0.42 alone, k is strictly below 2.4 (likely closer to 1.2–1.5 once MPS and MPT are added), meaning fiscal stimulus leaks abroad and worsens the trade balance. Worse, 95% debt-to-GDP creates severe crowding-out/sovereign-yield risk, and expanding AD aggravates existing 7.2% inflation.",
        hints: [
          "Use all three numbers together: what does MPM = 0.42 do to k, what does 95% debt constrain, and what does 7.2% inflation warn against?",
          "Expansionary AD policies conflict directly with high existing inflation.",
        ],
        strategy: "Screen candidate policies against ALL stimulus constraints",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q13",
        kind: "mcq",
        level: "HL",
        difficulty: "core",
        commandTerm: "Recommend",
        guideRef: "p3-ten-mark-policy",
        question:
          "Earlier Paper 3 parts calculate fuel {{|PED| = 0.25}} and show low-income households spend **6.8%** of income on fuel versus **1.9%** for high-income households. Which recommendation best demonstrates **Band 8–10 synthesis** to cut carbon emissions?",
        options: [
          "Impose an immediate flat fuel tax with no transfers, arguing that |PED| = 0.25 guarantees massive short-run emission cuts",
          "Remove all fuel taxes permanently so household purchasing power rises and carbon emissions automatically fall",
          "Ban private cars overnight regardless of rural transport availability or administrative enforcement costs",
          "Pair a gradually rising carbon tax with recycled low-income rebates and public-transit subsidies to offset regressivity",
        ],
        answerIndex: 3,
        explanation:
          "Low |PED| = 0.25 means a standalone carbon tax cuts fuel use modestly in the short run while inflicting a heavily regressive burden (6.8% vs 1.9% income share). Pairing the Pigouvian tax with targeted low-income revenue recycling fixes equity, while public-transit investment raises long-run PED by expanding substitutes.",
        hints: [
          "Look for a policy that explicitly addresses BOTH |PED| = 0.25 and the 6.8% vs 1.9% regressive burden.",
          "Think of the 'C' in D-A-T-E-C: a complementary measure that neutralises the main limitation.",
        ],
        strategy: "Pair Pigouvian taxes with revenue recycling + substitute expansion",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q14",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Distinguish",
        guideRef: "p3-ten-mark-policy",
        question:
          "How does the use of evidence in **HL Paper 3's 10-mark Policy Recommendation** fundamentally differ from **Paper 1 Part (b)'s 15-mark essay**?",
        options: [
          "Paper 3 prohibits economic diagrams and theory, whereas Paper 1 prohibits any numerical references",
          "Paper 3 anchors justification in the unseen stimulus data and prior calculations, whereas Paper 1 requires external real-world examples",
          "Paper 3 awards full marks for balanced description without recommending a policy, whereas Paper 1 requires a single policy",
          "Paper 3 allows candidates to skip evaluation completely provided every earlier calculation was accurate",
        ],
        answerIndex: 1,
        explanation:
          "In Paper 1 Part (b), candidates must bring their own external real-world country/policy examples to unlock top bands. In HL Paper 3's 10-mark recommendation, examiners expect explicit synthesis of the provided text, data tables, and the candidate's own earlier quantitative answers — paired with rigorous theory and evaluation.",
        hints: [
          "Ask where the evidence comes from in Paper 1 (no stimulus) versus Paper 3 (full unseen data booklet).",
          "Both papers still require economic theory and evaluation, just anchored in different evidence sources.",
        ],
        strategy: "Never mix up Paper 1 external examples with Paper 3 stimulus synthesis",
      },
      {
        id: "5-hl-paper3-policy-quant-m3-q15",
        kind: "mcq",
        level: "HL",
        difficulty: "challenge",
        commandTerm: "Evaluate",
        guideRef: "p3-ten-mark-policy",
        question:
          "On a 10-mark Policy Question, a candidate recommends targeted vocational retraining for a country with **9.1% structural unemployment** and **Gini = 0.47**, accurately citing stimulus figures and explaining the rightward {{LRAS}} shift — but never discusses limitations, time lags, or opportunity costs. Which markband outcome is most likely?",
        options: [
          "Band 8–10 (9–10 marks) because data integration and diagram theory are both completely accurate",
          "Band 1–2 (1–2 marks) because vocational retraining is never an appropriate policy for structural unemployment",
          "Band 5–7 because reaching Band 8–10 strictly requires balanced evaluation of policy trade-offs and constraints",
          "Band 0 because a single policy without four alternative options cannot receive any credit on Paper 3",
        ],
        answerIndex: 2,
        explanation:
          "Clear commitment, accurate stimulus anchoring, and solid LRAS transmission securely lift an answer into Band 5–7, but the official Band 8–10 descriptor demands nuanced evaluation of limitations, stakeholder trade-offs, short- vs long-run lags, and assumptions. One-sided advocacy cannot reach top band.",
        hints: [
          "Check which D-A-T-E-C pillars the candidate hit (D, A, T) and which crucial pillars were omitted (E, C).",
          "In IB AO3 questions, strong analysis without evaluation caps out in the upper-middle band.",
        ],
        strategy: "Evaluation (E + C) is the gatekeeper from Band 5–7 to Band 8–10",
      },
    ],
  },
];
