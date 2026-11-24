import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: Scarcity, PPC & Circular Flow (spread: 0×4, 1×4, 2×4, 3×3)
  // ===========================================================================
  {
    id: "1-intro-economics-m1",
    title: "MCQ Paper 1: Scarcity, PPC & Circular Flow",
    level: "SL",
    questions: [
      {
        id: "1-intro-economics-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "scarcity-choice-ppc",
        question:
          "Which statement best captures the **basic economic problem** that every society must resolve?",
        options: [
          "Finite productive resources exist alongside unlimited human wants, requiring choices.",
          "Governments always run fiscal deficits whenever citizens demand higher public services.",
          "Market prices rise continuously because firms restrict output to earn abnormal profit.",
          "International trade creates surpluses in industrial nations and shortages in rural nations.",
        ],
        answerIndex: 0,
        explanation:
          "Scarcity — finite factors of production relative to infinite human needs and wants — forces every society to choose what, how, and for whom to produce. Fiscal deficits, inflation, and trade imbalances are specific macroeconomic issues rather than the universal root problem of economics.",
        hints: [
          "Think about the two opposing forces that make choice unavoidable in every economy.",
        ],
      },
      {
        id: "1-intro-economics-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "scarcity-choice-ppc",
        question:
          "Public secondary education in a country is funded entirely through general taxation and carries zero tuition fees for families. How do economists classify this service?",
        options: [
          "A free good, because households pay no direct market price at the school gate.",
          "An economic good, because providing it uses scarce resources with an opportunity cost.",
          "A capital good, because students receive textbooks and desks during lessons.",
          "A natural resource, because state ministries manage the national curriculum.",
        ],
        answerIndex: 1,
        explanation:
          "A free good has zero opportunity cost because it is abundant relative to demand (such as sunlight). Public education consumes scarce teachers, buildings, and public funds that could otherwise fund hospitals or transport, so it is an economic good even though it is free at the point of use.",
        hints: [
          "Does 'zero price at the point of use' mean zero opportunity cost for society?",
        ],
      },
      {
        id: "1-intro-economics-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "scarcity-choice-ppc",
        question:
          "A robotics start-up leases a factory site, hires software engineers, installs automated welding arms, and is led by a founder who risks personal savings to launch the firm. Which pair correctly matches a factor of production to its economic reward?",
        options: [
          "Automated welding arms (Capital) → Profit",
          "Factory site (Land) → Interest",
          "Automated welding arms (Capital) → Interest",
          "Founder's risk-taking (Entrepreneurship) → Wages",
        ],
        answerIndex: 2,
        explanation:
          "Automated welding arms are human-made physical assets used to produce other goods, making them physical capital, whose factor reward is interest. Land earns rent, labour earns wages, and entrepreneurship earns profit.",
        hints: [
          "Match the four factors (Land, Labour, Capital, Entrepreneurship) to Rent, Wages, Interest, and Profit.",
        ],
      },
      {
        id: "1-intro-economics-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Determine",
        guideRef: "scarcity-choice-ppc",
        question:
          "After graduating, Priya ranks her three mutually exclusive options for next year in order of preference: (1) complete a Master's degree costing $18,000 in tuition, (2) work as a junior analyst earning $42,000, or (3) manage a family café earning $30,000. Assuming living costs are identical across all three choices, what is Priya's **opportunity cost** of doing the Master's degree?",
        options: [
          "The $18,000 tuition fee alone, since cash outlays measure true economic cost.",
          "The combined salaries of both foregone jobs, totalling $72,000 in lost earnings.",
          "The $30,000 café salary, since it is the lowest-earning alternative she rejected.",
          "The $18,000 tuition fee plus the $42,000 foregone analyst salary, totalling $60,000.",
        ],
        answerIndex: 3,
        explanation:
          "Opportunity cost includes both explicit costs ($18,000 tuition that could have been spent elsewhere) and the implicit value of the single next best alternative foregone ($42,000 analyst job), giving $60,000. You never add the café salary as well because Priya could only have chosen one foregone job.",
        hints: [
          "Opportunity cost counts only the single next best alternative — never all rejected alternatives combined.",
          "Include both the explicit tuition money spent and the implicit earnings lost from her second-ranked option.",
        ],
      },
      {
        id: "1-intro-economics-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "scarcity-choice-ppc",
        question:
          "An economy operating on a **straight-line (linear) PPC** can produce a maximum of **120 thousand tablets** or a maximum of **300 thousand e-readers** per year. What is the constant opportunity cost of producing **1 additional tablet**?",
        options: [
          "0.40 e-readers sacrificed per tablet",
          "2.50 e-readers sacrificed per tablet",
          "1.80 e-readers sacrificed per tablet",
          "3.75 e-readers sacrificed per tablet",
        ],
        answerIndex: 1,
        explanation:
          "To move from 0 tablets (300 thousand e-readers) to 120 thousand tablets (0 e-readers), the economy gives up 300 thousand e-readers to gain 120 thousand tablets. Thus per-unit opportunity cost = 300 / 120 = 2.50 e-readers per tablet. Calculating 120 / 300 = 0.40 flips the fraction and finds the cost of 1 e-reader instead.",
        hints: [
          "Opportunity cost per tablet = (e-readers sacrificed) ÷ (tablets gained).",
          "Divide the maximum e-reader intercept (300) by the maximum tablet intercept (120).",
        ],
      },
      {
        id: "1-intro-economics-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "scarcity-choice-ppc",
        diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Concave production possibilities curve showing five labelled combinations P, Q, R, S, and T for Good X and Good Y">
  <rect x="0" y="0" width="420" height="260" fill="#ffffff"/>
  <line x1="65" y1="220" x2="385" y2="220" stroke="#24190a" stroke-width="2"/>
  <line x1="65" y1="220" x2="65" y2="25" stroke="#24190a" stroke-width="2"/>
  <text x="225" y="250" text-anchor="middle" font-size="12" font-weight="700" fill="#24190a">Good X (units)</text>
  <text x="20" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="#24190a" transform="rotate(-90 20 122)">Good Y (units)</text>
  <path d="M 65 40 C 100 45 115 49 135 55 C 160 63 182 73 205 85 C 232 100 255 118 275 138 C 302 165 326 194 345 220" fill="none" stroke="#b45309" stroke-width="2.5"/>
  <circle cx="65" cy="40" r="4.5" fill="#b45309"/>
  <text x="76" y="42" font-size="11" font-weight="700" fill="#24190a">P (0, 120)</text>
  <circle cx="135" cy="55" r="4.5" fill="#b45309"/>
  <text x="145" y="54" font-size="11" font-weight="700" fill="#24190a">Q (10, 110)</text>
  <circle cx="205" cy="85" r="4.5" fill="#b45309"/>
  <text x="215" y="84" font-size="11" font-weight="700" fill="#24190a">R (20, 90)</text>
  <circle cx="275" cy="138" r="4.5" fill="#b45309"/>
  <text x="285" y="136" font-size="11" font-weight="700" fill="#24190a">S (30, 55)</text>
  <circle cx="345" cy="220" r="4.5" fill="#b45309"/>
  <text x="348" y="210" font-size="11" font-weight="700" fill="#24190a">T (40, 0)</text>
</svg>`,
        question:
          "Using the concave PPC diagram above, what is the **opportunity cost per additional unit of Good X** when the economy reallocates resources from point **R (20, 90)** to point **S (30, 55)**?",
        options: [
          "3.5 units of Good Y per unit of Good X",
          "35.0 units of Good Y per unit of Good X",
          "2.0 units of Good Y per unit of Good X",
          "5.5 units of Good Y per unit of Good X",
        ],
        answerIndex: 0,
        explanation:
          "Moving from R (20, 90) to S (30, 55) increases Good X by 30 − 20 = 10 units and sacrifices 90 − 55 = 35 units of Good Y. Dividing total sacrifice by units gained gives 35 / 10 = 3.5 units of Good Y per unit of Good X. The value 35.0 is the *total* opportunity cost across all 10 units rather than the *per-unit* cost.",
        hints: [
          "First find the total loss of Good Y and total gain of Good X between R and S.",
          "Divide the loss in Good Y (90 − 55) by the gain in Good X (30 − 20).",
        ],
      },
      {
        id: "1-intro-economics-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "scarcity-choice-ppc",
        question:
          "Following a severe recession, an economy reduces cyclical unemployment from 9% to 4% without adding new factories, workers, or technologies. How is this recovery represented on a PPC diagram?",
        options: [
          "A parallel outward shift of the entire PPC frontier to the right.",
          "A movement downwards along the existing PPC boundary toward consumer goods.",
          "A movement from an interior point inside the PPC closer to the existing frontier.",
          "A pivotal inward rotation of the PPC around the capital-goods axis.",
        ],
        answerIndex: 2,
        explanation:
          "Reducing unemployment uses previously idle resources without increasing the economy's productive capacity. That represents actual economic growth — a movement from an inefficient point inside the PPC toward the boundary, rather than a shift of the curve itself.",
        hints: [
          "Did the economy's maximum productive capacity expand, or did it simply start using idle workers?",
          "Distinguish actual growth (moving toward the frontier) from potential growth (shifting the frontier).",
        ],
      },
      {
        id: "1-intro-economics-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "scarcity-choice-ppc",
        question:
          "An agricultural economy produces **Rice** (horizontal axis) and **Textiles** (vertical axis). Scientists introduce a drought-resistant seed variety that doubles maximum rice yields per hectare, while textile technology remains unchanged. How does the economy's PPC change?",
        options: [
          "The entire PPC shifts parallel outward equally along both axes.",
          "The economy moves along its existing PPC toward the rice intercept.",
          "The vertical textiles intercept moves upward while the rice intercept stays fixed.",
          "The horizontal rice intercept shifts outward while the textiles intercept stays fixed.",
        ],
        answerIndex: 3,
        explanation:
          "Because the seed innovation boosts productivity solely in rice farming, maximum possible rice output rises (pivoting the horizontal intercept outward), while maximum textile output — if all resources go to textiles — stays unchanged at the vertical intercept.",
        hints: [
          "Ask what happens at each extreme corner: 100% resources in textiles vs 100% resources in rice.",
          "A technology specific to one industry pivots only that industry's axis intercept.",
        ],
      },
      {
        id: "1-intro-economics-m1-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "scarcity-choice-ppc",
        question:
          "Two initially identical economies operate on the same PPC for **Capital Goods** and **Consumer Goods**. Economy North produces mostly capital goods (exceeding depreciation), while Economy South produces mostly consumer goods (barely replacing worn-out machinery). Ten years later, what is the most likely outcome?",
        options: [
          "Economy North's PPC shifts further outward, expanding its future capacity for both goods.",
          "Economy South's PPC shifts further outward because households consume more immediately.",
          "Both economies remain on identical PPCs because scarcity prevents long-run capacity shifts.",
          "Economy North's PPC shifts inward because producing capital goods reduces current living standards.",
        ],
        answerIndex: 0,
        explanation:
          "Net investment in capital goods expands an economy's physical capital stock — a factor of production — shifting Economy North's PPC further outward over time. Although North sacrifices current consumer goods (an intertemporal opportunity cost), its future potential output of both goods grows faster than South's.",
        hints: [
          "Which type of good expands an economy's future factor endowment: consumer goods or capital goods?",
          "Compare net capital accumulation in North (gross investment > depreciation) against South.",
        ],
      },
      {
        id: "1-intro-economics-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "circular-flow-economic-systems",
        question:
          "In a closed **two-sector circular flow of income** (households and firms only), which flow is a **money flow** moving from firms to households?",
        options: [
          "Consumer expenditure paid for finished goods and services.",
          "Physical factors of production supplied to the factor market.",
          "Factor incomes paid as rent, wages, interest, and profit.",
          "Finished goods and services delivered through the product market.",
        ],
        answerIndex: 2,
        explanation:
          "In the factor market, households supply real factors of production to firms, and firms pay money factor incomes (rent, wages, interest, and profit) back to households. Consumer expenditure flows in the reverse direction — from households to firms.",
        hints: [
          "Distinguish real flows (physical goods/factors) from money flows (payments), and check the direction: firms → households.",
        ],
      },
      {
        id: "1-intro-economics-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "circular-flow-economic-systems",
        question:
          "Which list contains **only leakages (withdrawals)** from the five-sector circular flow of income?",
        options: [
          "Savings, investment, and government spending",
          "Savings, taxation, and import expenditure",
          "Taxation, export revenue, and household imports",
          "Investment, government spending, and export revenue",
        ],
        answerIndex: 1,
        explanation:
          "Leakages (withdrawals) represent income earned domestically that is not spent on domestic firms' output: Savings (S), Taxation (T), and Imports (M). Investment (I), Government spending (G), and Exports (X) are the three injections.",
        hints: [
          "Leakages take spending *out* of the domestic household-to-firm loop.",
          "Recall the three leakage letters: S, T, and M.",
        ],
      },
      {
        id: "1-intro-economics-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "circular-flow-economic-systems",
        question:
          "An open economy records the following annual flows (in $ billions): **S = 40**, **T = 55**, **M = 35**, **I = 45**, **G = 60**, and **X = 40**. What is the net flow, and how will national income respond?",
        options: [
          "Net leakage of $15 billion; national income will contract.",
          "Net injection of $25 billion; national income will expand.",
          "Zero net flow; national income will remain in equilibrium.",
          "Net injection of $15 billion; national income will expand.",
        ],
        answerIndex: 3,
        explanation:
          "Total leakages W = S + T + M = 40 + 55 + 35 = $130 billion. Total injections J = I + G + X = 45 + 60 + 40 = $145 billion. Because injections exceed leakages by 145 − 130 = +$15 billion, spending into domestic firms rises and national income expands.",
        hints: [
          "Group and add the three leakages (S + T + M) separately from the three injections (I + G + X).",
          "Subtract total leakages from total injections: if positive, national income expands.",
        ],
      },
      {
        id: "1-intro-economics-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "circular-flow-economic-systems",
        question:
          "Suppose an economy has a trade deficit (**M = $90 bn, X = $70 bn**), a balanced government budget (**T = $80 bn, G = $80 bn**), and private investment exceeding savings (**I = $60 bn, S = $40 bn**). What is the state of the circular flow?",
        options: [
          "National income is contracting because imports exceed exports by $20 billion.",
          "National income is expanding because private investment exceeds savings by $20 billion.",
          "National income is in equilibrium because total injections equal total leakages at $210 billion.",
          "National income is unstable because equilibrium requires S = I, T = G, and M = X separately.",
        ],
        answerIndex: 2,
        explanation:
          "Total leakages W = 40 + 80 + 90 = $210 bn, and total injections J = 60 + 80 + 70 = $210 bn. Circular-flow equilibrium requires aggregate balance (I + G + X = S + T + M), not sector-by-sector balance — here the $20 bn excess of I over S exactly offsets the $20 bn trade deficit.",
        hints: [
          "Compute S + T + M and compare it directly with I + G + X.",
          "Does macroeconomic equilibrium require every individual sector pair to balance, or only the totals?",
        ],
      },
      {
        id: "1-intro-economics-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "circular-flow-economic-systems",
        diagram: `<svg viewBox="0 0 420 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simplified circular flow schematic connecting Households, Firms, and the Financial Sector with Savings rising and Investment unchanged">
  <rect x="0" y="0" width="420" height="190" fill="#ffffff"/>
  <rect x="24" y="34" width="110" height="44" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
  <text x="79" y="61" text-anchor="middle" font-size="12" font-weight="800" fill="#24190a">Households</text>
  <rect x="286" y="34" width="110" height="44" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.8"/>
  <text x="341" y="61" text-anchor="middle" font-size="12" font-weight="800" fill="#24190a">Firms</text>
  <line x1="134" y1="48" x2="286" y2="48" stroke="#b45309" stroke-width="2"/>
  <text x="210" y="40" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">Consumer Spending (C)</text>
  <line x1="286" y1="68" x2="134" y2="68" stroke="#0d9488" stroke-width="2"/>
  <text x="210" y="84" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0d9488">Factor Incomes (Y)</text>
  <rect x="148" y="130" width="124" height="36" rx="8" fill="#f8f2e4" stroke="#6b563c" stroke-width="1.5"/>
  <text x="210" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Financial Sector</text>
  <path d="M 79 78 L 79 148 L 148 148" fill="none" stroke="#c2410c" stroke-width="2"/>
  <text x="114" y="140" text-anchor="middle" font-size="10.5" font-weight="800" fill="#c2410c">S (↑)</text>
  <path d="M 272 148 L 341 148 L 341 78" fill="none" stroke="#15803d" stroke-width="2"/>
  <text x="308" y="140" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">I (unchanged)</text>
</svg>`,
        question:
          "Starting from circular-flow equilibrium, households suddenly grow anxious about job security and increase their **Savings (S)** while Investment, Government spending, Taxes, Exports, and Imports remain unchanged (*ceteris paribus*). What happens to the economy?",
        options: [
          "Total leakages exceed total injections, so firms cut output and national income contracts.",
          "Total injections exceed total leakages, so firms expand production and hire extra workers.",
          "Higher savings automatically force export revenue to rise by the same amount immediately.",
          "National income stays constant because household savings remain inside domestic bank accounts.",
        ],
        answerIndex: 0,
        explanation:
          "With S rising while I, G, X, T, and M stay constant, total leakages (S + T + M) exceed total injections (I + G + X). Because consumer spending C falls without offsetting investment, firms face rising unsold inventories, cut output, and reduce factor incomes — contracting national income.",
        hints: [
          "Is savings a leakage or an injection?",
          "If leakages rise above injections and banks do not channel the extra funds into new investment, what happens to spending at firms?",
        ],
      },
      {
        id: "1-intro-economics-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "circular-flow-economic-systems",
        question:
          "In an economy where **S = $50 bn**, **T = $70 bn**, **M = $65 bn**, **I = $55 bn**, and **G = $75 bn**, what level of **Exports (X)** is required for the circular flow of income to be in macroeconomic equilibrium?",
        options: [
          "$65 billion",
          "$55 billion",
          "$45 billion",
          "$75 billion",
        ],
        answerIndex: 1,
        explanation:
          "Equilibrium requires S + T + M = I + G + X. Here total leakages W = 50 + 70 + 65 = $185 bn. Known injections I + G = 55 + 75 = $130 bn. Therefore X = 185 − 130 = $55 billion. Choosing $65 billion assumes X must equal M, ignoring that I + G exceeds S + T by $10 bn.",
        hints: [
          "Write down the aggregate equilibrium condition: S + T + M = I + G + X.",
          "Find total leakages first (50 + 70 + 65), then subtract I + G (55 + 75).",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: Systems, Methodology & Positive vs Normative (spread: 0×4, 1×4, 2×3, 3×4)
  // ===========================================================================
  {
    id: "1-intro-economics-m2",
    title: "MCQ Paper 2: Systems, Methodology & Positive vs Normative",
    level: "SL",
    questions: [
      {
        id: "1-intro-economics-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "circular-flow-economic-systems",
        question:
          "In a pure **free-market economy**, how are the three basic economic questions (*what, how, and for whom to produce*) primarily answered?",
        options: [
          "By annual production quotas assigned by a central planning ministry.",
          "By traditional village councils distributing harvests equally across households.",
          "By the price mechanism driven by private ownership, supply, demand, and profit.",
          "By state-owned enterprises setting fixed affordable prices for every essential good.",
        ],
        answerIndex: 2,
        explanation:
          "In a free-market system, private property rights and the price mechanism coordinate buyers and sellers: rising prices signal consumer demand and incentivise profit-seeking firms to allocate resources efficiently.",
        hints: [
          "Which mechanism sends signals and incentives to private buyers and sellers without central directives?",
        ],
      },
      {
        id: "1-intro-economics-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "circular-flow-economic-systems",
        question:
          "Which drawback is most closely associated with a **centrally planned (command) economy**?",
        options: [
          "Chronic shortages or surpluses due to coordination failures and weak efficiency incentives.",
          "Unchecked negative environmental externalities caused by unregulated private monopolies.",
          "Severe wealth inequality generated by private inheritance and capital-gains returns.",
          "Excessive luxury advertising aimed at manipulating competitive consumer preferences.",
        ],
        answerIndex: 0,
        explanation:
          "Central planners lack the real-time price signals needed to match millions of changing consumer preferences with production inputs, frequently causing queues, shortages, surpluses, and weak incentives to innovate or cut costs.",
        hints: [
          "Think about what happens when planners set quantities and prices without market price signals.",
        ],
      },
      {
        id: "1-intro-economics-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "circular-flow-economic-systems",
        question:
          "Why do virtually all contemporary nations operate as **mixed economies** rather than pure free markets or pure command economies?",
        options: [
          "Because international trade law prohibits governments from owning any state enterprises.",
          "Because central planning eliminates scarcity whenever technology advances rapidly.",
          "Because mixed economies guarantee zero inflation, zero unemployment, and balanced budgets.",
          "Because markets foster efficiency and innovation while state intervention addresses market failure and equity.",
        ],
        answerIndex: 3,
        explanation:
          "Mixed economies harness the price mechanism for dynamic efficiency, choice, and innovation in most sectors, while using government intervention (regulation, public goods, taxes, transfers) to correct market failures and promote equity.",
        hints: [
          "Consider the complementary strengths of the private market and the public sector.",
          "Which option avoids exaggerated promises ('zero inflation', 'eliminates scarcity') and captures the efficiency–equity balance?",
        ],
      },
      {
        id: "1-intro-economics-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "circular-flow-economic-systems",
        question:
          "Singapore ranks among the world's most open market economies for trade and enterprise, yet the state owns most land, provides public flats (HDB) for over three-quarters of residents, and mandates Central Provident Fund (CPF) retirement savings. What does this best illustrate?",
        options: [
          "A centrally planned economy transitioning away from all private business ownership.",
          "A mixed economy combining market allocation with targeted state intervention for housing and security.",
          "A pure laissez-faire system in which the government plays no allocative role whatsoever.",
          "A traditional barter economy insulated from global trade and capital inflows.",
        ],
        answerIndex: 1,
        explanation:
          "Singapore exemplifies a strategic mixed economy: it relies heavily on competitive markets and open trade while intervening decisively in land, housing, and long-term social security where free markets alone may under-provide or create acute affordability problems.",
        hints: [
          "Notice the coexistence of open private markets and substantial public provision of land and housing.",
          "Which economic system combines private markets with targeted public intervention?",
        ],
      },
      {
        id: "1-intro-economics-m2-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Define",
        guideRef: "methodology-positive-normative",
        question:
          "Why do economists invoke the assumption of ***ceteris paribus*** when building economic models?",
        options: [
          "To hold all other influencing factors constant and isolate one cause-and-effect link.",
          "To confirm that every economic policy produces equal benefits for all income groups.",
          "To ensure that normative value judgements replace empirical statistics in forecasting.",
          "To prove that real-world markets never experience simultaneous demand and supply shocks.",
        ],
        answerIndex: 0,
        explanation:
          "*Ceteris paribus* ('all other things being equal') allows economists to analyse how a change in one variable (e.g. price) affects another (e.g. quantity demanded) without confounding shifts in income, tastes, or technology.",
        hints: [
          "Translate the Latin phrase literally: 'all other things being equal'.",
        ],
      },
      {
        id: "1-intro-economics-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "methodology-positive-normative",
        question:
          "Why are economic theories classified as **social-science models** rather than immutable laws verified in controlled laboratories?",
        options: [
          "Because economists never use statistical data, mathematics, or falsifiable hypotheses.",
          "Because economic outcomes depend solely on government decrees rather than individual choices.",
          "Because social sciences deal exclusively with normative ethics and reject empirical testing.",
          "Because human behaviour shifts with context and economies cannot be isolated in lab experiments.",
        ],
        answerIndex: 3,
        explanation:
          "Economics studies adaptive human agents inside complex, ever-changing societies. Economists construct refutable models and test them statistically against real-world data, but cannot hold an entire nation inside a controlled laboratory.",
        hints: [
          "Compare studying electrons in a physics lab with studying millions of consumers and firms in a real country.",
          "Economics *does* use empirical data and refutable hypotheses, so eliminate options claiming it rejects evidence.",
        ],
      },
      {
        id: "1-intro-economics-m2-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "methodology-positive-normative",
        question:
          "Which of the following is a **positive** economic statement?",
        options: [
          "Governments ought to subsidise electric buses to achieve a fairer transport network.",
          "A 10% rise in cigarette excise tax reduced youth smoking rates by 4% last year.",
          "Current corporation tax rates are unreasonably low relative to household income taxes.",
          "Policymakers should prioritise environmental sustainability ahead of short-run GDP growth.",
        ],
        answerIndex: 1,
        explanation:
          "Reporting that a 10% excise tax hike reduced youth smoking by 4% is an objective, empirically testable claim — a positive statement. The other choices contain value judgements ('ought', 'fairer', 'unreasonably low', 'should prioritise').",
        hints: [
          "Look for the statement that can be checked against real-world statistical data without relying on personal values.",
        ],
      },
      {
        id: "1-intro-economics-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "methodology-positive-normative",
        question:
          "A commentator claims: *'Singapore's national unemployment rate exceeded 45% in 2024.'* Official data quickly prove this claim completely false. How should an IB Economics student classify the commentator's statement?",
        options: [
          "Normative, because any factually incorrect claim reflects biased personal opinion.",
          "Neither positive nor normative, because economics excludes false statistical claims.",
          "Positive, because it is an objective claim that can be tested and refuted with data.",
          "Normative, because unemployment statistics always depend on ethical value judgements.",
        ],
        answerIndex: 2,
        explanation:
          "A positive statement is defined by **testability (refutability)**, not by whether it is true! Because official labour-force statistics can objectively verify or falsify the claim that unemployment exceeded 45%, it is a false positive statement.",
        hints: [
          "Does 'positive' mean 'true', or does it mean 'empirically testable / refutable'?",
          "You just used real-world data to prove it wrong — which category of statement can be tested against data?",
        ],
      },
      {
        id: "1-intro-economics-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "methodology-positive-normative",
        question:
          "Which statement is **normative** despite omitting the words *'should'* and *'ought'*?",
        options: [
          "The top 10% of earners paid 48% of total income tax receipts in 2023.",
          "Raising central bank interest rates typically lowers private mortgage borrowing, ceteris paribus.",
          "Inflation averaged 3.2% across the Eurozone during the second quarter of the year.",
          "Executive bonuses in commercial banks are excessively high compared with teachers' salaries.",
        ],
        answerIndex: 3,
        explanation:
          "Calling executive bonuses 'excessively high' expresses a subjective value judgement about fairness and acceptable pay differentials, which cannot be resolved purely by empirical measurement. All three other statements are empirically testable positive claims.",
        hints: [
          "Scan for hidden value-laden adjectives such as 'excessively', 'unfair', 'too high', or 'inadequate'.",
          "Ask whether any statistic alone could settle whether pay is 'excessively high'.",
        ],
      },
      {
        id: "1-intro-economics-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "methodology-positive-normative",
        question:
          "An advisor states: *(I) Expanding subsidised childcare increases female labour-force participation by 5 percentage points, and (II) Parliament must approve this funding to build a more just society.* How are clauses (I) and (II) classified?",
        options: [
          "Clause (I) is positive; clause (II) is normative.",
          "Clause (I) is normative; clause (II) is positive.",
          "Both clause (I) and clause (II) are positive statements.",
          "Both clause (I) and clause (II) are normative statements.",
        ],
        answerIndex: 0,
        explanation:
          "Clause (I) states an empirically testable causal effect (+5 percentage points in participation), making it positive. Clause (II) prescribes what Parliament 'must' do to achieve a 'more just society', making it a normative value judgement.",
        hints: [
          "Test each clause separately: can you check a 5 percentage-point rise in labour participation with data?",
          "Notice the prescriptive wording 'must approve' and 'more just society' in the second clause.",
        ],
      },
      {
        id: "1-intro-economics-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "methodology-positive-normative",
        question:
          "Under a **progressive income tax**, higher-income earners pay a higher percentage of their income in tax than lower-income earners. How does this illustrate the distinction between **equity** and **equality**?",
        options: [
          "It achieves strict equality of tax payments because every citizen pays the exact same percentage.",
          "It applies unequal tax rates to pursue a normative vision of equity based on ability to pay.",
          "It proves that equity is an objective mathematical ratio while equality is a personal opinion.",
          "It eliminates income inequality completely so that every worker keeps an identical post-tax income.",
        ],
        answerIndex: 1,
        explanation:
          "Equality means sameness (positive/measurable), whereas equity means fairness (normative). Progressive taxation deliberately treats taxpayers unequally (different marginal and average tax rates) to advance a normative notion of fairness — those with greater ability to pay contribute a larger share.",
        hints: [
          "Does a progressive tax charge everyone the same amount or same percentage?",
          "Recall which term means 'sameness' (equality) and which means 'fairness' (equity).",
        ],
      },
      {
        id: "1-intro-economics-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "methodology-positive-normative",
        question:
          "A municipality charges every adult resident an identical flat annual fee of **$500** for public waste collection, regardless of income. Why do many economists describe this policy as **equal** yet potentially **inequitable**?",
        options: [
          "Because wealthy residents pay more dollars in total than low-income residents.",
          "Because the fee generates zero revenue for the municipal government budget.",
          "Because identical fees violate the positive definition of mathematical equality.",
          "Because the $500 fee takes a far larger share of a poor household's income than a rich one's.",
        ],
        answerIndex: 3,
        explanation:
          "Charging everyone $500 achieves strict dollar equality, yet it is regressive: $500 is 5% of a $10,000 income but only 0.25% of a $200,000 income. Many people therefore judge it unfair (inequitable) relative to ability to pay.",
        hints: [
          "Calculate what percentage of income $500 represents for a low earner versus a high earner.",
          "Equality treats everyone identically; equity asks whether the burden is fair.",
        ],
      },
      {
        id: "1-intro-economics-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Apply",
        guideRef: "scarcity-choice-ppc",
        question:
          "The European Union introduces a Carbon Border Adjustment Mechanism taxing carbon-intensive steel imports, prompting Asian steel exporters to invest in green-hydrogen furnaces to preserve EU market access. Which pair of **IB Economics Key Concepts** is most directly illustrated?",
        options: [
          "Scarcity and pure laissez-faire deregulation",
          "Equality and constant opportunity cost",
          "Sustainability and global interdependence",
          "Normative neutrality and factor immobility",
        ],
        answerIndex: 2,
        explanation:
          "Curbing industrial carbon emissions protects future generations' ecological base (**sustainability**), while EU policy directly alters investment decisions by Asian producers across borders (**interdependence**). Both are core IB Economics Key Concepts.",
        hints: [
          "Recall the 9 official IB Economics Key Concepts: Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, Intervention.",
          "Which two of those nine concepts match climate protection and cross-border policy spillovers?",
        ],
      },
      {
        id: "1-intro-economics-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "methodology-positive-normative",
        question:
          "Economic theory predicts that a higher price of rail tickets reduces passenger numbers, *ceteris paribus*. Yet after fares rose 8% in a booming city, rail ridership actually **increased by 6%**. Which explanation best resolves this apparent contradiction?",
        options: [
          "Other variables — such as city population, employment, or petrol prices — rose simultaneously, violating ceteris paribus.",
          "The law of demand is a normative value judgement and therefore cannot be tested using transport figures.",
          "Economists must abandon the ceteris paribus assumption because higher prices always cause higher consumption.",
          "Rail transport became a free good once fares increased by less than 10% in real terms.",
        ],
        answerIndex: 0,
        explanation:
          "The model's prediction held strictly under *ceteris paribus* (holding incomes, petrol prices, and population constant). In a booming city, rising commuter incomes, higher car fuel costs, or population growth shifted demand outward enough to outweigh the higher fare.",
        hints: [
          "What condition was attached to the original prediction that higher fares reduce ridership?",
          "In a rapidly growing city, do incomes, employment, and road congestion stay constant?",
        ],
      },
      {
        id: "1-intro-economics-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "methodology-positive-normative",
        question:
          "Two economists agree entirely on the positive statistical finding that a sugar tax will cut childhood obesity by 9% while costing low-income households a higher percentage of income than wealthy households. Yet one recommends the tax and the other opposes it. Why?",
        options: [
          "One economist miscalculated the positive elasticity figures while the other checked them.",
          "They attach different normative weights to public health gains versus regressive income burdens.",
          "Positive economics forbids economists from ever offering policy recommendations to governments.",
          "The disagreement arises because obesity rates cannot be measured empirically across countries.",
        ],
        answerIndex: 1,
        explanation:
          "Even when economists share identical positive evidence, policy recommendations require normative value judgements — here, weighing long-run health well-being against short-run regressive financial impacts on poorer households.",
        hints: [
          "If both economists agree on all the positive facts and numbers, where must their disagreement come from?",
          "Policy choices always combine positive predictions with normative priorities.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: Evolution of Thought & Integrated Unit 1 (spread: 0×3, 1×4, 2×4, 3×4)
  // ===========================================================================
  {
    id: "1-intro-economics-m3",
    title: "MCQ Paper 3: Evolution of Economic Thought & Integrated Unit 1",
    level: "SL",
    questions: [
      {
        id: "1-intro-economics-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "evolution-economic-thought",
        question:
          "What did **Adam Smith** (*The Wealth of Nations*, 1776) mean by the metaphor of the **'invisible hand'**?",
        options: [
          "Central planners secretly directing factory quotas to prevent consumer shortages.",
          "Self-interested buyers and sellers in competitive markets unintentionally promoting social welfare.",
          "Central banks quietly adjusting money supply growth to eliminate cyclical recessions.",
          "Trade unions negotiating collective wage floors to guarantee equitable income distribution.",
        ],
        answerIndex: 1,
        explanation:
          "Smith argued that in competitive markets with minimal state interference (*laissez-faire*), individuals pursuing self-interest respond to price signals in ways that direct resources to valued uses — benefiting society *as if* guided by an invisible hand.",
        hints: [
          "Think of how Smith linked individual self-interest and competition to overall social benefit.",
        ],
      },
      {
        id: "1-intro-economics-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-economic-thought",
        question:
          "In Adam Smith's famous **pin factory** observation, why did splitting production into 18 distinct tasks raise daily output from fewer than 20 pins per worker to roughly 4,800 pins per worker?",
        options: [
          "Because the government subsidised steel inputs and banned imported foreign pins.",
          "Because workers worked longer overnight shifts under strict state quotas.",
          "Because pins became a free good with zero opportunity cost of metal or labour.",
          "Because division of labour raised dexterity, saved task-switching time, and spurred specialised machinery.",
        ],
        answerIndex: 3,
        explanation:
          "Smith identified three productivity gains from division of labour and specialisation: workers gain skill/dexterity through repetition, eliminate time lost switching between tasks, and inspire specialised tools and machinery.",
        hints: [
          "Think of how breaking a complex craft into repetitive specialised stages boosts productivity.",
          "Recall Smith's three mechanisms: dexterity, time saved, and specialised machines.",
        ],
      },
      {
        id: "1-intro-economics-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "evolution-economic-thought",
        question:
          "Although Adam Smith advocated *laissez-faire* in competitive markets, which statement accurately reflects his actual view on the **role of government**?",
        options: [
          "The state should provide defence, justice, essential infrastructure, and guard against monopolies.",
          "The state should abolish all taxation and privatise courts, roads, and national defence.",
          "The state should own all factories and direct investment through five-year central plans.",
          "The state should run permanent fiscal deficits to manage aggregate demand every quarter.",
        ],
        answerIndex: 0,
        explanation:
          "Smith was not a pure anarchist: he explicitly endorsed limited government duties — national defence, administration of justice, public works/infrastructure (and basic education) that private markets would not profitably provide — and warned strongly against business collusion and monopolies.",
        hints: [
          "Did Smith argue for literally *zero* government, or *limited* government providing core public institutions?",
          "Eliminate extremes (complete privatisation of courts, central planning, and 20th-century Keynesian deficit management).",
        ],
      },
      {
        id: "1-intro-economics-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "evolution-economic-thought",
        question:
          "Which major 19th-century analytical breakthrough explained market prices by examining the **additional satisfaction** a consumer gains from one extra unit of a good?",
        options: [
          "Keynesian multiplier theory",
          "Doughnut ecological economics",
          "Classical utility and marginalism",
          "Behavioural choice architecture",
        ],
        answerIndex: 2,
        explanation:
          "Nineteenth-century marginalist economists (Jevons, Menger, Walras, Marshall) introduced marginal utility and marginal analysis, resolving the diamond–water paradox and formalising modern demand-and-supply theory.",
        hints: [
          "Notice the phrase 'additional satisfaction from one extra unit' — which word means 'extra / at the edge'?",
        ],
      },
      {
        id: "1-intro-economics-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-economic-thought",
        question:
          "According to 19th-century **Say's Law** (*'supply creates its own demand'*), why did classical economists believe prolonged mass unemployment could not persist in a free market?",
        options: [
          "Because central banks always print extra currency whenever factories slow down.",
          "Because state welfare transfers automatically replace 100% of lost private wages.",
          "Because international exports automatically expand whenever domestic households save more.",
          "Because production generates matching incomes and flexible wages/prices clear any temporary surplus.",
        ],
        answerIndex: 3,
        explanation:
          "Say's Law held that producing goods creates equal factor incomes to purchase them; if any temporary unemployment emerged, flexible wages and prices would fall until firms hired all willing workers, making the economy self-correcting.",
        hints: [
          "In classical theory, what happens to wages and prices when there is excess supply of labour?",
          "Recall why classical economists saw no need for fiscal stimulus during downturns.",
        ],
      },
      {
        id: "1-intro-economics-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "evolution-economic-thought",
        question:
          "Which central criticism of 19th-century industrial capitalism was advanced by **Karl Marx** in *Das Kapital* (1867)?",
        options: [
          "Excessive government welfare spending crowds out private venture capital investment.",
          "Capitalists capture surplus value created by workers, driving inequality and recurring crises.",
          "Consumers suffer from cognitive framing biases that prevent optimal retirement savings.",
          "Central banks cause stagflation by expanding the money supply faster than real output.",
        ],
        answerIndex: 1,
        explanation:
          "Marx critiqued industrial capitalism as inherently exploitative and crisis-prone: owners of capital extract surplus value from workers' labour, concentrating wealth while depressing workers' purchasing power and triggering instability.",
        hints: [
          "Focus on 19th-century factory relations between capital owners and wage labourers.",
          "Eliminate 20th-century Monetarist/crowding-out ideas and 21st-century behavioural economics.",
        ],
      },
      {
        id: "1-intro-economics-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-economic-thought",
        question:
          "During the 1930s Great Depression, why did **John Maynard Keynes** reject the classical claim that economies automatically self-correct back to full employment?",
        options: [
          "He argued that international trade always creates permanent current-account surpluses.",
          "He claimed that rapid technological progress makes physical capital permanently obsolete.",
          "He showed that downward-sticky wages and weak aggregate demand can trap economies in recession.",
          "He proposed replacing all private businesses with state-planned collective farms.",
        ],
        answerIndex: 2,
        explanation:
          "Keynes argued in *The General Theory* (1936) that wages are sticky downwards (due to contracts and morale) and collapsing confidence ('animal spirits') depresses investment and aggregate demand — so without fiscal intervention, high unemployment can persist.",
        hints: [
          "What prevents wages from instantly plunging to clear the labour market during a severe slump?",
          "In Keynesian theory, what is the primary driver of short-run output and employment?",
        ],
      },
      {
        id: "1-intro-economics-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "evolution-economic-thought",
        question:
          "What historical macroeconomic crisis of the 1970s weakened consensus around Keynesian demand management and fuelled the rise of **Milton Friedman's Monetarism** and **New Classical** economics?",
        options: [
          "Stagflation — simultaneous high inflation and rising unemployment following oil price shocks.",
          "The collapse of global textile prices during the early British Industrial Revolution.",
          "Hyper-deflation caused by strict adherence to the 19th-century international gold standard.",
          "Universal adoption of carbon taxes and circular-economy recycling mandates across Europe.",
        ],
        answerIndex: 0,
        explanation:
          "1970s oil shocks triggered stagflation (high inflation alongside high unemployment), which simple Keynesian demand-stimulus models struggled to cure without worsening inflation. Monetarists (Friedman) and free-market thinkers (Hayek) championed monetary discipline, deregulation, and supply-side reforms.",
        hints: [
          "Which unusual combination of two macro problems hit Western economies in the 1970s?",
          "Recall the portmanteau word combining economic stagnation and inflation.",
        ],
      },
      {
        id: "1-intro-economics-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "evolution-economic-thought",
        question:
          "A government redesigns its national organ-donor registry from opt-in to automatic **opt-out** (preserving every citizen's freedom to leave), sharply raising donor rates. Which 21st-century school of economic thought underpins this policy?",
        options: [
          "18th-century mercantilist trade protectionism",
          "19th-century classical Say's Law",
          "20th-century strict Monetarist money-supply targeting",
          "21st-century Behavioural Economics and nudge choice architecture",
        ],
        answerIndex: 3,
        explanation:
          "Changing a default option without banning choice is a classic **nudge** from 21st-century Behavioural Economics (Thaler & Sunstein), designed to work with human status-quo bias and bounded rationality.",
        hints: [
          "Which field studies cognitive biases (like sticking with defaults) and uses 'nudges' to guide choices?",
          "Notice that choice is preserved rather than coerced — a hallmark of choice architecture.",
        ],
      },
      {
        id: "1-intro-economics-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "evolution-economic-thought",
        question:
          "How does a **circular economy** differ fundamentally from the traditional **linear economic model**?",
        options: [
          "It replaces private firms with state monopolies to enforce fixed consumer rationing.",
          "It designs out waste through reuse, repair, and recycling instead of 'take–make–dispose'.",
          "It eliminates all international trade so every household becomes completely self-sufficient.",
          "It assumes natural resources are infinite free goods that never require conservation.",
        ],
        answerIndex: 1,
        explanation:
          "A linear economy extracts resources, manufactures goods, and discards them as waste ('take–make–dispose'). A circular economy closes resource loops via durable design, sharing, repair, remanufacturing, and recycling.",
        hints: [
          "Contrast a straight line ending in landfill with a closed loop.",
          "Think of modular products, repairability, and material recovery.",
        ],
      },
      {
        id: "1-intro-economics-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "evolution-economic-thought",
        question:
          "In **Kate Raworth's Doughnut Economy** framework, what defines the **'safe and just operating space for humanity'**?",
        options: [
          "Maximising annual real GDP growth per capita while minimising government tax revenue.",
          "Maintaining zero international trade alongside strict balance between exports and imports.",
          "Meeting everyone's inner social foundation without overshooting Earth's outer ecological ceiling.",
          "Ensuring perfect mathematical income equality regardless of planetary resource constraints.",
        ],
        answerIndex: 2,
        explanation:
          "Raworth's Doughnut places a **social foundation** (inner ring: basic human needs like food, health, education, equity) inside an **ecological ceiling** (outer ring: planetary boundaries like climate stability and biodiversity). The ring between them is the safe and just space.",
        hints: [
          "Visualise the two rings of a doughnut: what must humanity avoid falling *below*, and what must it avoid pushing *beyond*?",
          "Match 'just' with the inner social foundation and 'safe' with the outer ecological ceiling.",
        ],
      },
      {
        id: "1-intro-economics-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "scarcity-choice-ppc",
        question:
          "A coastal nation boosts current timber and seafood output by clear-cutting ancient forests and overfishing reefs without regeneration. On a PPC diagram comparing today with 20 years from now, what is the likely long-run consequence?",
        options: [
          "Its future PPC shifts inward because depleting natural capital erodes the land factor endowment.",
          "Its future PPC shifts outward because higher current sales always create permanent capacity.",
          "Its future PPC becomes a straight line because forests and fish are perfectly substitutable.",
          "Its future PPC remains completely unaffected because land is a non-depletable free good.",
        ],
        answerIndex: 0,
        explanation:
          "Unsustainable resource extraction degrades **natural capital** (a component of the Land factor of production). Over time, shrinking fish stocks and eroded soils reduce productive capacity, shifting the future PPC inward — a classic trade-off between short-run output and **sustainability**.",
        hints: [
          "Are forests and fisheries infinite free goods, or scarce components of the factor of production 'Land'?",
          "What happens to a country's PPC when the quantity and quality of its factors of production shrink?",
        ],
      },
      {
        id: "1-intro-economics-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "circular-flow-economic-systems",
        question:
          "Suppose households abruptly double their saving rate during a downturn. How would a **19th-century Classical economist** and a **20th-century Keynesian economist** disagree over its circular-flow impact?",
        options: [
          "Classical: savings are an injection; Keynesian: savings are a government transfer payment.",
          "Classical: national income collapses permanently; Keynesian: markets self-correct instantly.",
          "Classical: higher saving raises import leakage; Keynesian: higher saving raises export revenue.",
          "Classical: lower interest rates turn savings into investment; Keynesian: idle savings shrink income.",
        ],
        answerIndex: 3,
        explanation:
          "Classical theory assumed flexible interest rates ensure every extra dollar saved (S↑) is smoothly lent out for business investment (I↑), keeping J = W. Keynes countered that in a slump with low business confidence, firms will not invest even at low rates, so S > I contracts national income (the 'paradox of thrift').",
        hints: [
          "In Classical theory, what links Savings (S) automatically to Investment (I)?",
          "Why did Keynes warn that higher household thrift during a recession can actually *lower* total national income?",
        ],
      },
      {
        id: "1-intro-economics-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "scarcity-choice-ppc",
        question:
          "An economy has a linear PPC with maximum output of **100 solar panels** or **200 batteries**. A breakthrough in photovoltaic assembly raises maximum solar-panel capacity by **60%** while maximum battery capacity stays at 200. What is the **new opportunity cost of 1 solar panel**?",
        options: [
          "2.00 batteries per solar panel",
          "1.25 batteries per solar panel",
          "0.80 batteries per solar panel",
          "3.20 batteries per solar panel",
        ],
        answerIndex: 1,
        explanation:
          "Maximum solar-panel capacity rises by 60%: 100 × 1.60 = 160 solar panels. Battery capacity remains 200. The new opportunity cost of 1 solar panel is 200 / 160 = 1.25 batteries (down from 200 / 100 = 2.00 batteries before the innovation). Choosing 0.80 calculates 160 / 200 (the cost of 1 battery).",
        hints: [
          "First compute the new solar-panel intercept: 100 increased by 60%.",
          "Then compute (batteries sacrificed) ÷ (solar panels gained) = 200 ÷ new solar capacity.",
        ],
      },
      {
        id: "1-intro-economics-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "evolution-economic-thought",
        question:
          "A low-income developing country evaluates adopting Kate Raworth's Doughnut framework. Which statement captures the sharpest **real-world policy tension** highlighted by IB Economics Key Concepts?",
        options: [
          "Doughnut economics forbids all private ownership and requires abandoning mixed markets.",
          "Ecological ceilings apply only to wealthy countries, so developing nations face no climate risks.",
          "Lifting citizens above the social foundation often demands energy-intensive growth that strains ecological limits.",
          "Achieving sustainability automatically guarantees equal wages across every urban and rural sector.",
        ],
        answerIndex: 2,
        explanation:
          "Many low-income economies fall well below the Doughnut's inner social foundation (nutrition, electricity, healthcare) and rely on industrialisation to raise economic well-being — creating a genuine trade-off with planetary ecological limits unless green technology transfer and international financing bridge the gap.",
        hints: [
          "Think about the two rings of the Doughnut for a country still struggling with extreme poverty.",
          "What trade-off arises between rapid poverty reduction (social foundation / well-being) and low emissions (ecological ceiling / sustainability)?",
        ],
      },
    ],
  },
];
