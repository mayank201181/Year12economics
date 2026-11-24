import type { MarkBand, TopicPractice } from "../../types.ts";

const IB_10M_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited understanding of the question with little relevant economic theory, missing or inaccurate diagram, and imprecise terminology.",
    indicators: ["Definitions omitted or inaccurate", "Diagram absent or mislabelled"],
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic theory and a partially accurate diagram, though explanation of key causal links or shifts remains incomplete.",
    indicators: ["Basic diagram drawn with minor labelling gaps", "Partial step-by-step transmission"],
  },
  {
    band: "7–8",
    marks: [7, 8],
    descriptor: "Clear understanding of relevant economic theory with an accurate, well-integrated diagram and coherent explanation using appropriate terminology.",
    indicators: ["Correct axes, curves, and equilibrium labels", "Clear step-by-step economic mechanism"],
  },
  {
    band: "9–10",
    marks: [9, 10],
    descriptor: "Thorough, rigorous explanation with accurate terminology, a fully labelled diagram seamlessly integrated into the analysis, and complete coverage of all theoretical links.",
    indicators: ["Flawless diagram integrated explicitly via labels", "Precise cause-and-effect chain with zero conceptual errors"],
  },
];

const IB_15M_BANDS: MarkBand[] = [
  { band: "0", marks: [0, 0], descriptor: "The work does not reach a standard described by the descriptors below." },
  {
    band: "1–3",
    marks: [1, 3],
    descriptor: "Limited relevant economic theory, unsupported assertions, and no effective real-world examples or evaluation.",
  },
  {
    band: "4–6",
    marks: [4, 6],
    descriptor: "Some relevant economic analysis and basic diagram logic, but largely descriptive with minimal evaluation or generic examples.",
  },
  {
    band: "7–9",
    marks: [7, 9],
    descriptor: "Sound application of economic theory and diagrams with relevant real-world examples; some evaluation is attempted though uneven or underdeveloped.",
    indicators: ["Relevant diagrams explained", "Real-world examples named", "Basic pros and cons listed"],
  },
  {
    band: "10–12",
    marks: [10, 12],
    descriptor: "Clear, thorough analysis using accurate diagrams and well-integrated real-world examples, paired with balanced evaluation of stakeholders, elasticities, or time horizons.",
    indicators: ["Well-developed two-sided evaluation", "Real-world examples genuinely support arguments"],
  },
  {
    band: "13–15",
    marks: [13, 15],
    descriptor: "Sustained, nuanced IB synthesis integrating precise theory, diagrams, and specific real-world examples; reaches a reasoned, contextual judgement weighing short- vs long-run trade-offs, stakeholders, and complementary policies.",
    indicators: ["Synthesised judgement ('it depends on...')", "Specific real-world evidence woven into evaluation", "Clear stakeholder, efficiency, and equity trade-offs"],
  },
];

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK QUIZ (10 QUESTIONS: 4 MCQ [0,1,2,3], 5 SHORT, 1 WRITTEN)
  // ===========================================================================
  quiz: [
    {
      id: "2b-market-failure-power-quiz-q01",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      guideRef: "externalities-common-pool",
      question:
        "Which inequality describes the free-market failure associated with a demerit good such as tobacco cigarettes?",
      options: [
        "Marginal private benefit exceeds marginal social benefit, causing overconsumption beyond the social optimum.",
        "Marginal social benefit exceeds marginal private benefit, causing underconsumption below the social optimum.",
        "Marginal private cost exceeds marginal social cost, causing underproduction below the social optimum.",
        "Marginal social benefit equals marginal social cost, causing allocative efficiency without intervention.",
      ],
      answerIndex: 0,
      hints: [
        "Does smoking create external costs during *consumption* or *production*?",
        "Compare MPB with MSB when third parties suffer from secondhand smoke and public health costs.",
      ],
      explanation:
        "Demerit goods generate **negative externalities of consumption**: third-party health harms reduce social benefit below private benefit ({{MPB > MSB}}), causing overconsumption ({{Q_m > Q^*}}).",
    },
    {
      id: "2b-market-failure-power-quiz-q02",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "externalities-common-pool",
      question:
        "In a chemical industry with a negative production externality, free-market output is 50 tonnes, the socially optimal output is 38 tonnes, and the constant marginal external cost is $15 per tonne. Calculate the deadweight welfare loss in dollars.",
      answer: { type: "number", value: 90, display: "$90" },
      traps: [
        { spec: { type: "number", value: 180 }, feedback: "Don't forget the 1/2 in the area of a triangle: 1/2 × base × height." },
      ],
      hints: [
        "The welfare loss triangle has horizontal width {{Q_m - Q^*}} and vertical height {{MEC}}.",
        "Compute {{1/2 * (50 - 38) * 15}}.",
      ],
      solution: [
        "Overproduction = {{50 - 38 = 12}} tonnes.",
        "Vertical external cost gap = $15 per tonne.",
        "Welfare loss = {{1/2 * 12 * 15 = $90}}.",
      ],
      commonError: "Multiplying 12 × 15 = $180 without dividing by 2 for a triangular area.",
    },
    {
      id: "2b-market-failure-power-quiz-q03",
      kind: "short",
      difficulty: "warmup",
      level: "SL",
      commandTerm: "Identify",
      guideRef: "externalities-common-pool",
      question:
        "Open-ocean mackerel stocks are rivalrous in consumption yet non-excludable to international fishing vessels. Identify the economic category of this resource.",
      answer: {
        type: "text",
        accept: ["common pool resource", "common pool resources", "common-pool resource", "cpr", "common access resource"],
        display: "Common pool resource",
      },
      hints: [
        "Use the 2×2 goods grid: Rivalrous + Non-excludable.",
      ],
      solution: [
        "Rivalrous + non-excludable defines a **common pool resource (CPR)**, prone to the Tragedy of the Commons.",
      ],
    },
    {
      id: "2b-market-failure-power-quiz-q04",
      kind: "mcq",
      difficulty: "warmup",
      level: "SL",
      guideRef: "public-goods-asymmetric-info",
      question:
        "Why do private profit-seeking firms fail to construct coastal sea walls to protect an entire town from storm surges?",
      options: [
        "Sea walls are rivalrous in consumption, so only a few residents can enjoy flood protection at once.",
        "Sea walls are non-excludable, enabling residents to free-ride without paying and creating a missing market.",
        "Sea walls create severe negative production externalities that exceed their marginal social benefit.",
        "Private construction companies lack the engineering expertise needed to build concrete flood barriers.",
      ],
      answerIndex: 1,
      hints: [
        "Once a sea wall protects a low-lying town, can a builder withhold protection from neighbours who refuse to pay?",
      ],
      explanation:
        "Flood barriers are **pure public goods** (non-excludable and non-rivalrous). Non-excludability triggers the **free-rider problem**, preventing private firms from earning revenue and resulting in a missing market.",
    },
    {
      id: "2b-market-failure-power-quiz-q05",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "State",
      guideRef: "public-goods-asymmetric-info",
      question:
        "[HL] After a major commercial bank receives an implicit government bailout guarantee, its executives take far riskier leveraged bets knowing taxpayers will absorb catastrophic losses. State the specific form of asymmetric information illustrated.",
      answer: {
        type: "text",
        accept: ["moral hazard"],
        display: "Moral hazard",
      },
      hints: [
        "Notice the risky behaviour happens *after* protection/insurance is in place.",
        "Hidden *action* after an agreement is contrasted with hidden *information* before an agreement.",
      ],
      solution: [
        "Taking excessive risk after protection is guaranteed because another party bears downside losses is **moral hazard**.",
      ],
    },
    {
      id: "2b-market-failure-power-quiz-q06",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      question:
        "[HL] A furniture workshop has total fixed costs of $300. When producing 20 chairs, its average variable cost (AVC) is $25. Calculate its average total cost (AC) in dollars at 20 chairs.",
      answer: { type: "number", value: 40, display: "$40" },
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "$15 is only Average Fixed Cost (AFC = 300/20); add AVC = $25 to get AC." },
        { spec: { type: "number", value: 800 }, feedback: "$800 is Total Cost (TC = 300 + 500); divide by Q = 20 to get Average Total Cost." },
      ],
      hints: [
        "Recall {{AC = AFC + AVC}}, where {{AFC = TFC / Q}}.",
        "Compute {{AFC = 300 / 20}} and add {{AVC = 25}}.",
      ],
      solution: [
        "{{AFC = TFC / Q = 300 / 20 = $15}}.",
        "{{AC = AFC + AVC = 15 + 25 = $40}} (check: {{TC = 300 + 25 * 20 = $800}}, {{800 / 20 = $40}}).",
      ],
    },
    {
      id: "2b-market-failure-power-quiz-q07",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      question:
        "[HL] Under what condition should a loss-making perfectly competitive firm shut down immediately in the **short run**?",
      options: [
        "Whenever market price falls below average total cost ({{P < AC}}).",
        "Whenever marginal cost rises above average fixed cost ({{MC > AFC}}).",
        "Whenever market price falls below average variable cost ({{P < AVC}}).",
        "Whenever total revenue falls below total fixed cost ({{TR < TFC}}).",
      ],
      answerIndex: 2,
      hints: [
        "Remember that fixed costs must be paid in the short run even if output is zero.",
        "Compare revenue per unit ({{P}}) against variable cost per unit ({{AVC}}).",
      ],
      explanation:
        "If {{P < AVC}} (equivalently {{TR < TVC}}), every unit produced fails to cover its own variable costs, making the firm's loss strictly larger than {{TFC}}. Shutting down caps the short-run loss at {{TFC}}.",
    },
    {
      id: "2b-market-failure-power-quiz-q08",
      kind: "short",
      difficulty: "core",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      question:
        "[HL] A profit-maximising monopolist faces linear inverse demand {{P = 90 - 2Q}} (so {{MR = 90 - 4Q}}) and constant marginal cost {{MC = $18}}. Calculate its profit-maximising output {{Q_m}} (in units).",
      answer: { type: "number", value: 18, display: "18 units" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "36 units solves P = MC (perfect competition), not MC = MR (monopoly)." },
      ],
      hints: [
        "Profit maximization requires setting {{MC = MR}}.",
        "Solve {{18 = 90 - 4Q}} for {{Q}}.",
      ],
      solution: [
        "Set {{MC = MR}}: {{18 = 90 - 4Q}}.",
        "{{4Q = 72}} → {{Q_m = 18}} units.",
      ],
    },
    {
      id: "2b-market-failure-power-quiz-q09",
      kind: "mcq",
      difficulty: "core",
      level: "HL",
      guideRef: "monopolistic-oligopoly-equity-hl",
      question:
        "[HL] Which statement accurately describes long-run equilibrium for a firm in **monopolistic competition**?",
      options: [
        "The firm earns persistent abnormal profit and achieves productive efficiency at minimum AC.",
        "The firm earns normal profit and achieves both allocative efficiency and productive efficiency.",
        "The firm produces strictly beyond minimum AC, earning abnormal profit through cartel quotas.",
        "The firm earns normal profit where D = AR is tangent to falling AC, leaving excess capacity.",
      ],
      answerIndex: 3,
      hints: [
        "Low barriers eliminate abnormal profit in the long run, leaving {{P = AC}}.",
        "Because {{D = AR}} slopes downward, where must it touch U-shaped {{AC}}?",
      ],
      explanation:
        "Free entry shifts each incumbent's downward-sloping {{D = AR}} left until it is tangent to the downward-sloping portion of {{AC}}, yielding **normal profit** ({{P = AC}}) alongside **excess capacity** ({{Q < Q_{min AC}}}) and {{P > MC}}.",
    },
    {
      id: "2b-market-failure-power-quiz-q10",
      kind: "written",
      difficulty: "core",
      level: "SL",
      commandTerm: "Explain",
      guideRef: "externalities-common-pool",
      marks: 4,
      question:
        "Explain why free markets underallocate resources to merit goods such as childhood vaccinations.",
      hints: [
        "Define merit goods and identify the spillover benefit to uncompensated third parties (herd immunity).",
        "Compare {{MSB}} vs {{MPB}}, and {{Q_m}} vs {{Q^*}}, noting the deadweight welfare loss.",
      ],
      modelAnswer:
        "Merit goods are desirable goods that generate positive externalities of consumption — for example, vaccinated children confer herd immunity on uncompensated third parties by lowering infection transmission. Because individuals consider only their own private benefit and may underestimate long-term health value, marginal social benefit exceeds marginal private benefit (MSB > MPB). The free market clears at MPB = MPC, yielding an output Qₘ that is strictly below the socially optimal quantity Q* where MSB = MSC. This underallocation creates a deadweight welfare loss triangle between Qₘ and Q* pointing toward Q*, representing forgone net social surplus.",
      markScheme: [
        { point: "Identifies positive consumption externality / third-party spillover (e.g. herd immunity).", keywords: ["positive", "herd immunity", "third part", "spillover"] },
        { point: "States that marginal social benefit exceeds marginal private benefit (MSB > MPB).", keywords: ["msb > mpb", "marginal social benefit exceeds", "above mpb"] },
        { point: "Explains underallocation: market output Qₘ is below socially optimal output Q* (MSB = MSC).", keywords: ["underallocation", "below", "q*", "socially optimal"] },
        { point: "Links underconsumption to deadweight welfare loss / forgone social surplus.", keywords: ["welfare loss", "forgone", "social surplus", "deadweight"] },
      ],
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS (EXACTLY 2 PAPERS × 15 QUESTIONS = 30 QUESTIONS)
  // ===========================================================================
  papers: [
    // -------------------------------------------------------------------------
    // PAPER 1: EXTERNALITIES, CPR, PUBLIC GOODS & ASYMMETRIC INFO
    // -------------------------------------------------------------------------
    {
      id: "2b-market-failure-power-p1",
      title: "Paper 1 · Externalities, Common Pool Resources, Public Goods & Asymmetric Info",
      level: "SL",
      questions: [
        {
          id: "2b-market-failure-power-p1-q01",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "externalities-common-pool",
          question:
            "In a regional coal-electricity market, inverse demand is {{MPB = MSB = 120 - Q}}, private supply is {{MPC = 20 + Q}}, and constant external pollution cost is $20 per unit (so {{MSC = 40 + Q}}). Calculate the free-market equilibrium output {{Q_m}} (in units).",
          answer: { type: "number", value: 50, display: "50 units" },
          traps: [
            { spec: { type: "number", value: 40 }, feedback: "40 units is the socially optimal output Q* (MSC = MSB), not the free-market output Qₘ (MPC = MPB)." },
          ],
          hints: [
            "The unregulated free market ignores external costs and settles where {{MPC = MPB}}.",
            "Solve {{20 + Q = 120 - Q}}.",
          ],
          solution: [
            "Set {{MPC = MPB}}: {{20 + Q = 120 - Q}}.",
            "{{2Q = 100}} → {{Q_m = 50}} units (at {{P_m = $70}}).",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q02",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "externalities-common-pool",
          question:
            "Continuing with the same coal-electricity market ({{MPB = MSB = 120 - Q}}, {{MPC = 20 + Q}}, {{MSC = 40 + Q}}), calculate the deadweight welfare loss (in dollars) at the free-market equilibrium.",
          answer: { type: "number", value: 100, display: "$100" },
          traps: [
            { spec: { type: "number", value: 200 }, feedback: "Remember a triangle area is 1/2 × base × height, not base × height." },
          ],
          hints: [
            "Find the social optimum {{Q^*}} by solving {{MSC = MSB}} ({{40 + Q = 120 - Q}}).",
            "Multiply {{1/2 * (Q_m - Q^*) * MEC}}, where {{Q_m = 50}} and {{MEC = $20}}.",
          ],
          solution: [
            "Social optimum ({{MSC = MSB}}): {{40 + Q = 120 - Q}} → {{2Q = 80}} → {{Q^* = 40}} units.",
            "Overproduction = {{50 - 40 = 10}} units; vertical external cost gap at {{Q_m = 50}} is {{90 - 70 = $20}}.",
            "Deadweight welfare loss = {{1/2 * 10 * 20 = $100}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q03",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "externalities-common-pool",
          question:
            "Rooftop solar panel installation creates positive production spillovers in technician training: {{MPC = 40 + 0.5Q}}, {{MSC = 20 + 0.5Q}}, and {{MPB = MSB = 100 - 0.5Q}}. Calculate the socially optimal quantity {{Q^*}} (in units).",
          answer: { type: "number", value: 80, display: "80 units" },
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60 units solves MPC = MPB (free-market equilibrium), not MSC = MSB (social optimum)." },
          ],
          hints: [
            "The social optimum occurs where {{MSC = MSB}}.",
            "Solve {{20 + 0.5Q = 100 - 0.5Q}}.",
          ],
          solution: [
            "Set {{MSC = MSB}}: {{20 + 0.5Q = 100 - 0.5Q}}.",
            "{{Q^* = 80}} units (compared with free-market {{Q_m = 60}} units).",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q04",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "externalities-common-pool",
          question:
            "In that same rooftop solar market ({{MPC = 40 + 0.5Q}}, {{MSC = 20 + 0.5Q}}, {{MSB = 100 - 0.5Q}}), the government grants an optimal per-unit production subsidy of $20 so output expands to the socially optimal quantity {{Q^*}}. Calculate total government subsidy expenditure in dollars.",
          answer: { type: "number", value: 1600, display: "$1,600" },
          traps: [
            { spec: { type: "number", value: 1200 }, feedback: "Multiply the $20 subsidy by the *post-subsidy* optimal output Q* = 80, not the pre-subsidy output Qₘ = 60." },
          ],
          hints: [
            "Government pays the per-unit subsidy on every unit produced at the new equilibrium {{Q^*}}.",
            "Compute {{Subsidy per unit * Q^*}}.",
          ],
          solution: [
            "Total government subsidy spending = {{$20 * 80 = $1,600}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q05",
          kind: "short",
          difficulty: "warmup",
          level: "SL",
          commandTerm: "Identify",
          guideRef: "public-goods-asymmetric-info",
          question:
            "A subscription music-streaming app blocks non-paying users via account logins, while one user streaming a track does not reduce availability for other subscribers. Identify the economic category of this good.",
          answer: {
            type: "text",
            accept: ["club good", "club goods", "toll good", "toll goods", "artificially scarce good"],
            display: "Club good",
          },
          hints: [
            "Check both tests: excludable (login paywall) and non-rivalrous (unlimited simultaneous streams).",
          ],
          solution: [
            "Excludable + non-rivalrous defines a **club good** (also known as a toll or artificially scarce good).",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q06",
          kind: "short",
          difficulty: "core",
          level: "SL",
          commandTerm: "Calculate",
          guideRef: "public-goods-asymmetric-info",
          question:
            "Five island villages value a shared cyclone-warning radar (a pure public good) at $45,000, $55,000, $40,000, $60,000, and $50,000 respectively. Constructing the radar costs $215,000. Calculate the net social benefit (in dollars) if the government builds it.",
          answer: { type: "number", value: 35000, display: "$35,000" },
          hints: [
            "Because the radar is non-rivalrous, sum all five villages' marginal benefits vertically.",
            "Subtract construction cost ($215,000) from the sum of benefits.",
          ],
          solution: [
            "Total social benefit = {{45,000 + 55,000 + 40,000 + 60,000 + 50,000 = $250,000}}.",
            "Net social benefit = {{250,000 - 215,000 = $35,000}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q07",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "public-goods-asymmetric-info",
          question:
            "[HL] In a second-hand smartphone market with asymmetric information, 25% of phones are flawless units worth $800 to buyers and 75% have degraded batteries worth $240 to buyers. Calculate the maximum expected value (in dollars) an uninformed risk-neutral buyer is willing to pay.",
          answer: { type: "number", value: 380, display: "$380" },
          traps: [
            { spec: { type: "number", value: 520 }, feedback: "$520 is the unweighted average (50/50); weight $800 by 0.25 and $240 by 0.75." },
          ],
          hints: [
            "Apply {{E(V) = p_H V_H + p_L V_L}}.",
            "Calculate {{0.25 * 800 + 0.75 * 240}}.",
          ],
          solution: [
            "{{E(V) = 0.25($800) + 0.75($240) = $200 + $180 = $380}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q08",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "State",
          guideRef: "public-goods-asymmetric-info",
          question:
            "[HL] State the economic term for credible actions taken by the *informed* party in a transaction — such as a used-car dealer offering a 5-year warranty — to reveal high product quality to uninformed buyers.",
          answer: {
            type: "text",
            accept: ["signalling", "signaling", "market signalling", "market signaling"],
            display: "Signalling",
          },
          hints: [
            "Contrast actions taken by the *informed* seller with actions taken by the *uninformed* buyer (screening).",
          ],
          solution: [
            "Actions initiated by the informed side to reveal quality credibly are called **signalling**.",
          ],
        },
        {
          id: "2b-market-failure-power-p1-q09",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Distinguish",
          guideRef: "public-goods-asymmetric-info",
          marks: 4,
          question:
            "Distinguish between a pure public good and a common pool resource, using an appropriate real-world example of each.",
          hints: [
            "Compare both goods on **excludability** (similarity) and **rivalry** (key difference).",
            "Explain the distinct market failure outcome of each: missing market vs overexploitation.",
          ],
          modelAnswer:
            "Both pure public goods and common pool resources share non-excludability, meaning it is impossible or prohibitively expensive to stop non-payers from accessing them. Their defining difference is rivalry in consumption: a pure public good (such as street lighting or national defence) is non-rivalrous, so one citizen's enjoyment leaves just as much for everyone else, causing free-riding and a missing market. By contrast, a common pool resource (such as open-ocean bluefin tuna stocks or shared groundwater) is rivalrous, so one user's extraction depletes what remains for others, resulting in overexploitation and the Tragedy of the Commons.",
          markScheme: [
            { point: "Notes that both categories are non-excludable.", keywords: ["non-excludab", "cannot stop", "non-payers"] },
            { point: "Identifies pure public goods as non-rivalrous with a valid example (e.g. street lighting, national defence).", keywords: ["non-rival", "street light", "defence", "lighthouse", "flood"] },
            { point: "Identifies common pool resources as rivalrous with a valid example (e.g. ocean fisheries, groundwater).", keywords: ["rival", "fish", "tuna", "groundwater", "aquifer", "forest"] },
            { point: "Contrasts their distinct market failure outcomes: free-rider/missing market vs overexploitation/Tragedy of the Commons.", keywords: ["missing market", "free-rid", "tragedy of the commons", "overexploit"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q10",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "externalities-common-pool",
          marks: 4,
          question:
            "Explain how Elinor Ostrom's concept of collective self-governance challenges the traditional view of how common pool resources must be protected.",
          hints: [
            "State the traditional Hardin binary: privatisation vs top-down central government regulation.",
            "Outline at least two of Ostrom's design principles (boundaries, local rules, monitoring, graduated sanctions) and why sustainability improves.",
          ],
          modelAnswer:
            "Garrett Hardin's traditional Tragedy of the Commons argued that rivalrous, non-excludable resources inevitably face collapse unless either privatised into individual property rights or strictly controlled by top-down state regulators. Elinor Ostrom challenged this dichotomy by showing empirically that local users who depend on a resource can sustainably manage it through collective self-governance. Communities establish clear resource boundaries, design locally tailored extraction rules with user participation, monitor compliance directly among peers, and enforce graduated sanctions against rule-breakers. Because local stakeholders have deep ecological knowledge and long-term incentives to preserve livelihoods, collective institutions often prevent depletion more effectively than distant bureaucracies.",
          markScheme: [
            { point: "Identifies traditional dichotomy (privatisation vs top-down state regulation under Hardin).", keywords: ["privat", "state", "hardin", "dichotomy", "top-down"] },
            { point: "Explains Ostrom's third way: local community users governing shared resources collectively.", keywords: ["local", "communit", "self-governance", "third way", "users"] },
            { point: "Specifies concrete design mechanisms (clear boundaries, participatory rules, monitoring, graduated sanctions).", keywords: ["boundar", "sanction", "monitor", "local rules"] },
            { point: "Explains why it promotes sustainability (local knowledge, peer trust, long-term livelihood incentive).", keywords: ["sustainab", "knowledge", "livelihood", "prevent depletion"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Distinguish",
          guideRef: "public-goods-asymmetric-info",
          marks: 4,
          question:
            "[HL] Distinguish between adverse selection and moral hazard as forms of asymmetric information, providing an economic example of each.",
          hints: [
            "Focus on the timing: hidden *information before* the deal vs hidden *action after* the deal.",
            "Give a concrete IB example for each (e.g. Akerlof's used cars / health insurance vs insured carelessness / bank bailouts).",
          ],
          modelAnswer:
            "Adverse selection occurs before a transaction takes place when one party conceals private information about quality or risk, leading to an unfavourable mix of participants. For instance, in George Akerlof's used-car market for lemons, buyers cannot distinguish defective cars from reliable ones, lowering offers and driving high-quality sellers out of the market. Moral hazard, by contrast, arises after a contract is signed when a party sheltered from downside losses changes behaviour toward greater risk. For example, a bank expecting a taxpayer bailout may take reckless leveraged bets, imposing severe financial instability on society.",
          markScheme: [
            { point: "Defines adverse selection as hidden information occurring *before* a transaction.", keywords: ["before", "hidden information", "conceal", "pre-contract"] },
            { point: "Provides an accurate adverse selection example (e.g. Akerlof used cars / high-risk insurance buyers).", keywords: ["lemons", "used-car", "akerlof", "pre-existing", "high-risk"] },
            { point: "Defines moral hazard as hidden riskier action occurring *after* a transaction/agreement.", keywords: ["after", "changes behaviour", "greater risk", "post-contract"] },
            { point: "Provides an accurate moral hazard example (e.g. bank bailouts, insured driver/homeowner carelessness).", keywords: ["bailout", "reckless", "insured", "leveraged"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q12",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "externalities-common-pool",
          marks: 10,
          markbands: IB_10M_BANDS,
          question:
            "Explain how a Pigouvian carbon tax can correct a negative externality of production in electricity generation.",
          hints: [
            "Define negative externality of production ({{MSC > MPC}}) and describe the full diagram axes and curves.",
            "Explain the initial free-market failure ({{Q_m > Q^*}}) and the welfare loss triangle pointing to {{Q^*}}.",
            "Trace how a per-unit carbon tax equal to {{MEC}} shifts {{MPC}} vertically up to {{MSC}}, internalising the externality.",
          ],
          modelAnswer:
            "A negative externality of production occurs when producing a good imposes uncompensated third-party costs on society, causing marginal social cost to exceed marginal private cost (MSC > MPC). In coal-fired electricity generation, power stations pay for fuel and labour (MPC) but ignore greenhouse gas emissions and respiratory health damages imposed on residents (marginal external cost, MEC).\n\nOn a standard diagram with Price, Costs & Benefits ($) on the vertical axis and Quantity of electricity on the horizontal axis, MSC lies vertically above MPC = S, while demand represents MPB = MSB. The unregulated free market clears where MPC = MPB at output Qₘ and price Pₘ. However, allocative efficiency requires MSC = MSB at lower output Q* and higher price P*. Every megawatt-hour between Q* and Qₘ adds more social cost than social benefit, generating a deadweight welfare loss triangle whose vertical base sits at Qₘ between MSC and MSB and whose tip points left toward Q*.\n\nA Pigouvian carbon tax sets a specific per-unit tax equal to the marginal external cost at Q* (t = MEC). Because generators must pay this levy on every emitting unit, their private marginal cost curve shifts vertically upward from MPC to MPC + tax, coinciding with MSC. Producers are forced to internalise the external cost of carbon. Electricity price rises from Pₘ to P*, signalling scarcity to buyers, who contract quantity demanded along MSB from Qₘ down to Q*. At Q*, MSC equals MSB, eliminating the welfare loss triangle while raising government fiscal revenue that can finance clean-energy transitions or household rebates.",
          markScheme: [
            { point: "Defines negative externality of production (uncompensated third-party spillover cost).", keywords: ["uncompensated", "third-party", "spillover"] },
            { point: "Identifies MSC > MPC due to marginal external cost (pollution/health harm).", keywords: ["msc > mpc", "marginal external cost", "greenhouse"] },
            { point: "Specifies correct diagram axes (Price, Costs & Benefits vs Quantity).", keywords: ["vertical axis", "costs & benefits", "horizontal axis"] },
            { point: "Identifies free-market equilibrium at MPC = MPB (Qₘ, Pₘ).", keywords: ["mpc = mpb", "qₘ", "pₘ"] },
            { point: "Identifies socially optimal equilibrium at MSC = MSB (Q*, P*) with Qₘ > Q* (overproduction).", keywords: ["msc = msb", "q*", "overproduction", "lower output"] },
            { point: "Accurately locates welfare loss triangle between Qₘ and Q* pointing left toward Q*.", keywords: ["welfare loss triangle", "points left", "vertical base"] },
            { point: "Defines Pigouvian tax set equal to MEC at Q* (t = MEC).", keywords: ["t = mec", "specific per-unit", "equal to the marginal external cost"] },
            { point: "Explains upward shift of private supply from MPC to MPC + tax = MSC (internalising externality).", keywords: ["internalise", "shifts vertically upward", "mpc + tax"] },
            { point: "Traces market adjustment: higher price P* reduces quantity demanded from Qₘ to Q*.", keywords: ["rises from pₘ to p*", "contract quantity", "down to q*"] },
            { point: "Concludes that allocative efficiency is restored (zero DWL) plus fiscal revenue generated.", keywords: ["eliminating the welfare loss", "fiscal revenue", "clean-energy"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q13",
          kind: "written",
          difficulty: "challenge",
          level: "SL",
          commandTerm: "Evaluate",
          guideRef: "externalities-common-pool",
          marks: 15,
          markbands: IB_15M_BANDS,
          question:
            "Using real-world examples, evaluate the effectiveness of market-based policies (such as carbon taxes and cap-and-trade permits) compared with government legislation in reducing carbon emissions.",
          hints: [
            "Explain the mechanisms of carbon taxes, cap-and-trade (EU ETS), and direct legislation (coal phase-outs / emissions caps).",
            "Anchor analysis in named real-world examples: Singapore Carbon Tax (S$5→S$25→S$45/tonne), EU Emissions Trading System (EU ETS), and vehicle emissions mandates.",
            "Evaluate across key IB criteria: price elasticity (PED), measurement difficulty, dynamic green R&D incentives, equity/regressivity, carbon leakage, and policy complementarity.",
          ],
          modelAnswer:
            "Reducing greenhouse gas emissions requires correcting a massive negative production externality (MSC > MPC) that threatens global sustainability. Governments choose primarily between market-based instruments — Pigouvian carbon taxes and cap-and-trade tradable permits — and command-and-control legislation.\n\nA Pigouvian carbon tax charges emitters per tonne of CO₂e, shifting MPC vertically toward MSC and internalising external costs. Singapore's Carbon Tax illustrates a pragmatic phased approach: starting at S$5/tonne CO₂e (2019–2023), rising to S$25/tonne in 2024 and S$45/tonne in 2026 (targeting S$50–$80 by 2030). Its key strengths are price certainty for business investment, low administrative complexity, and substantial government revenue that Singapore recycles into U-Save household utility rebates and clean-tech grants — offsetting regressivity. However, if energy demand is price-inelastic in the short run, taxes cut emissions slowly unless set very high, and estimating the exact monetary social cost of carbon is notoriously difficult.\n\nCap-and-trade systems such as the European Union Emissions Trading System (EU ETS) instead fix an explicit emissions ceiling that shrinks annually while letting firms trade allowances. Low-abatement-cost utilities cut emissions sharply and sell surplus permits to high-cost factories, achieving the emissions target at minimum total economic cost and giving continuous dynamic incentives for clean innovation. Yet permit markets suffer from price volatility: early EU ETS over-allocation crashed permit prices below €10/tonne before reforms lifted them toward €60–€90/tonne. Both carbon taxes and permits also risk carbon leakage if energy-intensive manufacturers relocate to untaxed jurisdictions, prompting the EU's Carbon Border Adjustment Mechanism (CBAM).\n\nCommand-and-control legislation — such as the UK's 2024 closure of its final coal power plant, EU zero-emission new-car mandates by 2035, or strict building efficiency codes — offers immediate certainty of quantity reduction where price signals work too slowly. Nevertheless, uniform standards ignore differing abatement costs across firms (allocatively costlier), generate no fiscal revenue, incur heavy monitoring costs, and provide zero incentive to cut pollution below the legal limit.\n\nIn conclusion, neither approach works optimally in isolation. Market-based instruments generally outperform legislation on cost-efficiency and ongoing green R&D incentives, especially when backed by border adjustments and progressive revenue recycling. However, because short-run energy PED is inelastic and political resistance caps tax rates, the most effective strategy combines escalating carbon pricing (like Singapore's trajectory or a tightened EU ETS) with targeted regulatory phase-outs and green infrastructure subsidies.",
          markScheme: [
            { point: "Frames carbon emissions as a negative production externality (MSC > MPC) threatening sustainability.", keywords: ["msc > mpc", "sustainability", "greenhouse"] },
            { point: "Explains Pigouvian carbon tax mechanism shifting MPC toward MSC.", keywords: ["internalising", "shifting mpc", "pigouvian"] },
            { point: "Integrates specific real-world carbon tax example (e.g. Singapore Carbon Tax rising S$5→S$25→S$45).", keywords: ["singapore", "s$25", "s$45", "carbon tax"] },
            { point: "Evaluates strengths of carbon taxes (price certainty, fiscal revenue recycling / U-Save rebates).", keywords: ["price certainty", "u-save", "recycles", "revenue"] },
            { point: "Evaluates limitations of carbon taxes (inelastic short-run PED, measurement difficulty of MEC, regressivity).", keywords: ["price-inelastic", "measurement", "regressiv", "estimating"] },
            { point: "Explains cap-and-trade tradable permits mechanism (quantity cap + permit trading).", keywords: ["cap-and-trade", "ceiling", "surplus permits"] },
            { point: "Integrates real-world ETS example (EU ETS permit pricing / over-allocation reform).", keywords: ["eu ets", "european union", "over-allocation"] },
            { point: "Explains cost-minimisation advantage (low-cost abaters cut more and sell to high-cost firms).", keywords: ["low-abatement-cost", "minimum total", "dynamic incentives"] },
            { point: "Evaluates cap-and-trade limitation (permit price volatility / setting cap accurately).", keywords: ["volatility", "crashed", "€10"] },
            { point: "Identifies carbon leakage and international coordination / CBAM border adjustments.", keywords: ["carbon leakage", "cbam", "relocate"] },
            { point: "Explains command-and-control legislation with concrete real-world example (e.g. coal closure / 2035 car mandate).", keywords: ["command-and-control", "2035", "coal power", "mandates"] },
            { point: "Evaluates strength of legislation (certainty of outcome when price signals are slow).", keywords: ["certainty of quantity", "immediate certainty", "slowly"] },
            { point: "Evaluates weaknesses of legislation (ignores varying abatement costs, no revenue, no incentive below limit).", keywords: ["uniform standards", "below the legal limit", "monitoring costs"] },
            { point: "Considers short-run vs long-run or stakeholder impacts (households vs firms vs government).", keywords: ["short run", "households", "stakeholder", "political resistance"] },
            { point: "Delivers a synthesised, balanced judgement advocating a complementary policy mix.", keywords: ["neither approach", "complementary", "combines escalating", "in isolation"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q14",
          kind: "written",
          difficulty: "core",
          level: "SL",
          commandTerm: "Explain",
          guideRef: "externalities-common-pool",
          marks: 10,
          markbands: IB_10M_BANDS,
          question:
            "Explain why positive externalities of consumption lead to market failure and how a per-unit government subsidy can move the market toward the social optimum.",
          hints: [
            "Define positive consumption externality ({{MSB > MPB}}) with an example like vaccinations or higher education.",
            "Describe the diagram: {{MSB}} above {{MPB}}, free market at {{Q_m}} ({{MPB = MPC}}), optimum at {{Q^*}} ({{MSB = MSC}}), welfare loss triangle pointing right to {{Q^*}}.",
            "Show how a per-unit subsidy shifts {{MPC}} vertically downward to {{MPC - subsidy}}, lowering consumer price and expanding output to {{Q^*}}.",
          ],
          modelAnswer:
            "A positive externality of consumption occurs when consuming a merit good creates uncompensated external benefits for third parties, so marginal social benefit exceeds marginal private benefit (MSB > MPB). For example, university education or preventative vaccinations improve workforce productivity and herd immunity beyond the private gains enjoyed by the individual student or patient.\n\nOn a diagram plotting Price, Costs & Benefits ($) against Quantity, MSB lies vertically above MPB = D, while supply equals MPC = MSC (assuming no production externalities). Left alone, buyers and sellers equate MPB = MPC at price Pₘ and quantity Qₘ. Allocative efficiency instead requires MSB = MSC at a higher socially optimal output Q*. Because Qₘ < Q*, society suffers underallocation: every forgone unit between Qₘ and Q* sacrifices net social gain (MSB − MSC), creating a deadweight welfare loss triangle with its vertical base at Qₘ and its tip pointing right toward Q*.\n\nTo correct this underconsumption, the government can grant a per-unit subsidy to producers equal to the marginal external benefit at Q* (s = MEB). The subsidy lowers firms' private marginal production costs, shifting the supply curve vertically downward from MPC to MPC − subsidy. This lowers the market price consumers pay from Pₘ to P_c, incentivising buyers to expand quantity demanded along MPB from Qₘ up to Q*, while producers receive P_c + subsidy. At Q*, MSB equals original MSC, eliminating the welfare loss triangle and achieving allocative efficiency — albeit at the opportunity cost of government budget expenditure.",
          markScheme: [
            { point: "Defines positive consumption externality (external third-party benefit from consuming a merit good).", keywords: ["merit good", "uncompensated external", "third part"] },
            { point: "Gives relevant real-world example (e.g. vaccinations/herd immunity or education/productivity).", keywords: ["herd immunity", "education", "vaccinations", "productivity"] },
            { point: "Identifies MSB > MPB on diagram with correct axes (Price, Costs & Benefits vs Quantity).", keywords: ["msb > mpb", "costs & benefits", "vertically above"] },
            { point: "Identifies free-market output Qₘ at MPB = MPC.", keywords: ["mpb = mpc", "qₘ", "pₘ"] },
            { point: "Identifies social optimum Q* at MSB = MSC with Qₘ < Q* (underallocation).", keywords: ["msb = msc", "q*", "underallocation", "qₘ < q*"] },
            { point: "Describes welfare loss triangle sitting between Qₘ and Q* pointing right toward Q*.", keywords: ["welfare loss triangle", "pointing right", "forgone"] },
            { point: "Specifies per-unit subsidy set equal to marginal external benefit (s = MEB).", keywords: ["s = meb", "equal to the marginal external benefit", "per-unit subsidy"] },
            { point: "Explains downward vertical shift of supply from MPC to MPC − subsidy.", keywords: ["vertically downward", "mpc − subsidy", "lowers firms"] },
            { point: "Traces lower consumer price P_c expanding quantity demanded from Qₘ to Q*.", keywords: ["p_c", "expand quantity", "from qₘ up to q*"] },
            { point: "Notes elimination of welfare loss alongside opportunity cost to government budget.", keywords: ["eliminating the welfare loss", "opportunity cost", "budget"] },
          ],
        },
        {
          id: "2b-market-failure-power-p1-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Discuss",
          guideRef: "public-goods-asymmetric-info",
          marks: 15,
          markbands: IB_15M_BANDS,
          question:
            "[HL] Using real-world examples, discuss the view that government regulation is always more effective than private market mechanisms (such as signalling and screening) in correcting asymmetric information.",
          hints: [
            "Define asymmetric information, distinguishing adverse selection (pre-deal) and moral hazard (post-deal).",
            "Explain how private signalling (warranties, ratings, brand reputation) and screening (deductibles, medical checks, mechanics) work with real-world examples.",
            "Explain how government regulation (licensing, mandatory disclosure, hygiene grades, Basel III bank rules) works, then weigh costs, compliance, regulatory capture, and sector-specific effectiveness.",
          ],
          modelAnswer:
            "Asymmetric information arises when one party holds superior knowledge over another, distorting resource allocation through adverse selection (hidden pre-transaction traits, as in Akerlof's used-car 'market for lemons') or moral hazard (hidden post-transaction risk-taking, such as excessive bank leverage). Whether government regulation outperforms private market solutions depends critically on the severity of harm and how easily consumers can verify quality.\n\nPrivate mechanisms — signalling and screening — often resolve moderate information gaps efficiently without taxpayer burden. Under signalling, informed high-quality sellers credibly separate themselves from low-quality rivals: Toyota Certified Pre-Owned programmes offer multi-year powertrain warranties that lemon dealers cannot profitably imitate, while e-commerce platforms like Amazon or Airbnb harness verified peer-review ratings to reward reputation. Under screening, uninformed buyers or insurers filter risk: auto insurers deploy deductibles (excesses), telematics black boxes, and no-claims bonuses to deter reckless driving (curbing moral hazard), while used-car buyers pay independent mechanics for pre-purchase inspections. These private solutions adapt rapidly to new technologies and avoid bureaucratic red tape.\n\nHowever, private signalling and screening fail dangerously where stakes are catastrophic, information is highly technical, or incentives are misaligned. An ordinary patient cannot screen a surgeon's competence through trial and error, nor could retail depositors monitor complex subprime derivatives at Lehman Brothers prior to the 2008 Global Financial Crisis. Here, government intervention is vital: mandatory professional licensing for doctors and commercial pilots prevents fatal adverse selection; Singapore's SFA mandatory hygiene grades (A–D) posted prominently on hawker stalls and Nutri-Grade sugar labels supply standardised, trustworthy public information; and Basel III banking capital-adequacy regulations curb systemic moral hazard among 'too-big-to-fail' banks.\n\nYet government regulation is not *always* superior. Strict occupational licensing can act as an anti-competitive barrier to entry, inflating fees for consumers; heavy compliance costs disproportionately burden small businesses; and regulators suffer from imperfect information, slow adaptation to digital fintech, and potential regulatory capture by powerful industries.\n\nOverall, the claim that government regulation is *always* more effective is too sweeping. In low-risk consumer markets with repeated purchases (hospitality, retail electronics, certified used cars), private signalling, warranties, and digital screening are faster and cheaper. Conversely, in high-stakes healthcare, aviation, food safety, and systemic banking where failure threatens lives or macroeconomic stability, binding government regulation and mandatory disclosure are indispensable — working best alongside private screening incentives like insurance excesses.",
          markScheme: [
            { point: "Defines asymmetric information and distinguishes adverse selection vs moral hazard.", keywords: ["adverse selection", "moral hazard", "superior knowledge"] },
            { point: "Explains private signalling mechanism (informed party credibly reveals quality).", keywords: ["signalling", "informed", "credibly"] },
            { point: "Provides real-world signalling example (e.g. Toyota Certified warranties, Airbnb/Amazon ratings).", keywords: ["toyota", "warranties", "airbnb", "amazon", "reputation"] },
            { point: "Explains private screening mechanism (uninformed party filters risk or alters post-deal incentives).", keywords: ["screening", "uninformed", "filter"] },
            { point: "Provides real-world screening example (e.g. insurance deductibles/telematics/no-claims bonuses or mechanic inspections).", keywords: ["deductibles", "telematics", "no-claims", "mechanics"] },
            { point: "Evaluates strength of private solutions (speed, low taxpayer cost, technological adaptability).", keywords: ["without taxpayer", "adapt rapidly", "red tape"] },
            { point: "Evaluates failure of private solutions in high-stakes/technical markets (healthcare, 2008 banking crisis).", keywords: ["catastrophic", "surgeon", "lehman", "2008"] },
            { point: "Explains government licensing and mandatory disclosure mechanisms.", keywords: ["licensing", "mandatory", "standardised"] },
            { point: "Provides real-world public disclosure example (e.g. Singapore SFA hawker hygiene / Nutri-Grade).", keywords: ["singapore", "hygiene", "nutri-grade", "pilots"] },
            { point: "Provides real-world systemic moral hazard regulation example (Basel III banking capital rules).", keywords: ["basel iii", "capital-adequacy", "too-big-to-fail"] },
            { point: "Evaluates risk of government failure: occupational licensing raising barriers to entry / prices.", keywords: ["barrier to entry", "inflating fees", "anti-competitive"] },
            { point: "Evaluates compliance burdens on small firms and regulatory capture / slow adaptation.", keywords: ["compliance costs", "regulatory capture", "small businesses"] },
            { point: "Weighs repeated-purchase consumer goods vs life-critical / systemic sectors.", keywords: ["repeated purchases", "high-stakes", "systemic"] },
            { point: "Directly challenges the absolute word 'always' in the question prompt.", keywords: ["too sweeping", "not always", "depends critically"] },
            { point: "Reaches balanced synthesis combining public standards with private screening/signalling.", keywords: ["indispensable", "working best alongside", "overall"] },
          ],
        },
      ],
    },

    // -------------------------------------------------------------------------
    // PAPER 2: HL MARKET POWER, COSTS, MONOPOLY, OLIGOPOLY & EQUITY
    // -------------------------------------------------------------------------
    {
      id: "2b-market-failure-power-p2",
      title: "Paper 2 · HL Costs, Revenues, Monopoly, Oligopoly, Game Theory & Equity",
      level: "HL",
      questions: [
        {
          id: "2b-market-failure-power-p2-q01",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] A bakery has total fixed costs of $480. At 40 loaves, total variable cost is $320. When output rises to 45 loaves, total variable cost rises to $400. Calculate the marginal cost (in dollars per loaf) over this output interval.",
          answer: { type: "number", value: 16, display: "$16" },
          traps: [
            { spec: { type: "number", value: 80 }, feedback: "$80 is the total change in variable cost (ΔTVC); divide by ΔQ = 5 loaves to find marginal cost per loaf." },
          ],
          hints: [
            "Recall {{MC = ΔTC / ΔQ = ΔTVC / ΔQ}} (fixed costs do not change).",
            "Compute {{(400 - 320) / (45 - 40)}}.",
          ],
          solution: [
            "{{ΔTVC = $400 - $320 = $80}} and {{ΔQ = 45 - 40 = 5}} loaves.",
            "{{MC = 80 / 5 = $16}} per loaf.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q02",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] Using the same bakery ({{TFC = $480}}, {{TVC = $320}} at 40 loaves), calculate Average Total Cost (AC, in dollars per loaf) at 40 loaves.",
          answer: { type: "number", value: 20, display: "$20" },
          traps: [
            { spec: { type: "number", value: 8 }, feedback: "$8 is AVC (320/40); include TFC = $480 to get AC." },
            { spec: { type: "number", value: 12 }, feedback: "$12 is AFC (480/40); add AVC = $8 to get AC." },
          ],
          hints: [
            "First compute {{TC = TFC + TVC}}.",
            "Then divide {{TC}} by {{Q = 40}}.",
          ],
          solution: [
            "{{TC = $480 + $320 = $800}}.",
            "{{AC = $800 / 40 = $20}} per loaf.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q03",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] A profit-maximising monopolist faces linear inverse demand {{P = 140 - 2Q}} (so {{MR = 140 - 4Q}}), constant marginal cost {{MC = $20}}, and fixed cost {{TFC = $600}}. Calculate the monopoly price {{P_m}} in dollars.",
          answer: { type: "number", value: 80, display: "$80" },
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "30 is the monopoly quantity Qₘ; substitute Q = 30 into P = 140 − 2Q to find the price." },
            { spec: { type: "number", value: 20 }, feedback: "$20 is marginal cost (MC = MR value), NOT the price charged on the demand curve!" },
          ],
          hints: [
            "Step 1: Set {{MC = MR}} ({{20 = 140 - 4Q}}) to find {{Q_m}}.",
            "Step 2: Substitute {{Q_m}} into the demand curve {{P = 140 - 2Q}}.",
          ],
          solution: [
            "Set {{MC = MR}}: {{20 = 140 - 4Q}} → {{4Q = 120}} → {{Q_m = 30}} units.",
            "Read price off demand: {{P_m = 140 - 2(30) = $80}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q04",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] Using the same profit-maximising monopolist ({{P = 140 - 2Q}}, {{MR = 140 - 4Q}}, constant {{MC = $20}}, {{TFC = $600}}), calculate its maximum abnormal profit in dollars.",
          answer: { type: "number", value: 1200, display: "$1,200" },
          traps: [
            { spec: { type: "number", value: 1800 }, feedback: "$1,800 ignores fixed costs (TFC = $600); subtract full TC = TFC + TVC from TR." },
          ],
          hints: [
            "Calculate {{TR = P_m * Q_m}} and {{TC = TFC + MC * Q_m}}.",
            "Subtract {{TC}} from {{TR}}.",
          ],
          solution: [
            "{{TR = $80 * 30 = $2,400}}.",
            "{{TC = $600 + $20 * 30 = $600 + $600 = $1,200}}.",
            "Abnormal profit = {{$2,400 - $1,200 = $1,200}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q05",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] Continuing with that same profit-maximising monopolist ({{P = 140 - 2Q}}, {{MR = 140 - 4Q}}, constant {{MC = $20}}), calculate the deadweight welfare loss (in dollars) relative to the competitive benchmark ({{P = MC}}).",
          answer: { type: "number", value: 900, display: "$900" },
          traps: [
            { spec: { type: "number", value: 1800 }, feedback: "Don't forget the 1/2 factor for the triangular deadweight loss area." },
          ],
          hints: [
            "Find competitive output {{Q_{pc}}} by solving {{P = MC}} ({{140 - 2Q = 20}}).",
            "Apply {{DWL = 1/2 * (P_m - MC) * (Q_{pc} - Q_m)}}.",
          ],
          solution: [
            "Competitive output: {{140 - 2Q = 20}} → {{2Q = 120}} → {{Q_{pc} = 60}} units.",
            "{{DWL = 1/2 * ($80 - $20) * (60 - 30) = 1/2 * 60 * 30 = $900}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q06",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          question:
            "[HL] At its {{MC = MR}} output of 80 units, a perfectly competitive firm faces market price $9, with total fixed cost $500 and total variable cost $880. Calculate the firm's short-run economic loss (enter as a positive dollar number) if it makes the optimal short-run decision.",
          answer: { type: "number", value: 500, display: "$500" },
          traps: [
            { spec: { type: "number", value: 660 }, feedback: "$660 is the loss if the firm stays open — since P ($9) < AVC ($11), shutting down cuts the loss to TFC ($500)!" },
          ],
          hints: [
            "Compute {{AVC = TVC / Q}} and compare it with {{P = $9}}.",
            "Compare loss if operating ({{TC - TR}}) against loss if shutting down ({{TFC}}).",
          ],
          solution: [
            "{{AVC = $880 / 80 = $11}}. Since {{P = $9 < AVC = $11}}, the firm should **shut down** in the short run.",
            "Operating would lose {{($500 + $880) - ($9 * 80) = $1,380 - $720 = $660}}, whereas shutting down caps the loss at {{TFC = $500}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q07",
          kind: "short",
          difficulty: "warmup",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "monopolistic-oligopoly-equity-hl",
          question:
            "[HL] A country's mobile telecommunications sector generates total annual revenue of $800 million. The four largest operators report revenues of $248m, $184m, $136m, and $96m. Calculate the 4-firm concentration ratio ({{CR_4}}) as a percentage.",
          answer: { type: "number", value: 83, display: "83%" },
          hints: [
            "Add the revenues of the top four operators together.",
            "Divide by total industry revenue ($800m) and multiply by 100.",
          ],
          solution: [
            "Top four sales = {{248 + 184 + 136 + 96 = $664}} million.",
            "{{CR_4 = (664 / 800) * 100 = 83%}}.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q08",
          kind: "short",
          difficulty: "core",
          level: "HL",
          commandTerm: "Calculate",
          guideRef: "monopolistic-oligopoly-equity-hl",
          question:
            "[HL] Two rival carriers, AeroOne and WingCo, simultaneously choose **High Price** or **Low Price**. Payoffs (AeroOne, WingCo) in $ million are: (High, High) = (100, 100); (High, Low) = (35, 130); (Low, High) = (130, 35); (Low, Low) = (60, 60). Calculate the combined industry profit (in $ million) at the unique Nash equilibrium.",
          answer: { type: "number", value: 120, display: "$120 million" },
          traps: [
            { spec: { type: "number", value: 200 }, feedback: "$200m is the collusive (High, High) joint profit — not the Nash equilibrium, because both have a dominant strategy to cut price!" },
            { spec: { type: "number", value: 60 }, feedback: "$60m is one firm's Nash payoff; the question asks for *combined* industry profit ($60m + $60m)." },
          ],
          hints: [
            "Find each firm's dominant strategy by checking best responses against both rival moves.",
            "Sum both firms' payoffs in the Nash equilibrium cell.",
          ],
          solution: [
            "For AeroOne: vs High, {{130 > 100}} (Low); vs Low, {{60 > 35}} (Low) → **Low Price** is dominant.",
            "By symmetry, **Low Price** is dominant for WingCo → unique Nash equilibrium is **(Low, Low)** = ($60m, $60m).",
            "Combined industry profit = {{60 + 60 = $120}} million.",
          ],
        },
        {
          id: "2b-market-failure-power-p2-q09",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          marks: 4,
          question:
            "[HL] Explain why a perfectly competitive firm achieves both allocative efficiency and productive efficiency in long-run equilibrium.",
          hints: [
            "Start from the price-taker condition {{P = D = AR = MR}} and profit maximization {{MC = MR}}.",
            "Show how free entry and exit force price to equal minimum {{AC}} (normal profit).",
          ],
          modelAnswer:
            "Because each perfectly competitive firm is a price taker facing a horizontal demand curve (P = AR = MR), profit maximization at MC = MR automatically yields P = MC, achieving allocative efficiency where marginal social benefit equals marginal cost and community surplus is maximised. Furthermore, zero barriers to entry and exit eliminate short-run abnormal profits or losses until market price settles tangent to the lowest point of the average cost curve (normal profit, P = min AC). Since MC intersects AC precisely at its minimum, the firm produces at lowest possible unit cost, securing productive efficiency simultaneously.",
          markScheme: [
            { point: "Notes price-taking horizontal demand (P = AR = MR) combined with MC = MR yields P = MC.", keywords: ["price taker", "p = ar = mr", "p = mc"] },
            { point: "Links P = MC directly to allocative efficiency (maximising community surplus).", keywords: ["allocative efficiency", "community surplus", "marginal social benefit"] },
            { point: "Explains free entry/exit eliminates abnormal profit/loss, settling at normal profit (P = min AC).", keywords: ["free entry", "zero barriers", "normal profit", "min ac"] },
            { point: "Links production at minimum average cost (lowest unit cost) to productive efficiency.", keywords: ["productive efficiency", "lowest", "unit cost", "minimum"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q10",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "monopolistic-oligopoly-equity-hl",
          marks: 4,
          question:
            "[HL] Explain why a firm in monopolistic competition exhibits excess capacity in long-run equilibrium and identify one compensating benefit for consumers.",
          hints: [
            "Explain why {{D = AR}} slopes downward (product differentiation) and where free entry pushes it (tangent to {{AC}}).",
            "Show geometrically why tangency must occur to the left of minimum {{AC}}, then note product variety.",
          ],
          modelAnswer:
            "Product differentiation gives every monopolistically competitive firm a downward-sloping demand curve (D = AR). In the long run, low barriers to entry attract new rivals whenever incumbents earn abnormal profit, shifting each firm's demand leftward until D = AR is just tangent to AC (yielding normal profit, P = AC). Geometrically, a downward-sloping line can only touch a U-shaped AC curve along its falling left flank, strictly to the left of minimum AC. The gap between this tangency output and minimum-AC output represents excess capacity (productive inefficiency); however, consumers are compensated by wider product variety, choice, and quality innovation tailored to diverse tastes.",
          markScheme: [
            { point: "Links product differentiation to a downward-sloping demand curve (D = AR).", keywords: ["differentiation", "downward-sloping"] },
            { point: "Explains low barriers / entry shifts demand left until tangent to AC (normal profit).", keywords: ["low barriers", "tangent to ac", "normal profit"] },
            { point: "Explains tangency lies on the falling portion of AC (left of min AC), defining excess capacity.", keywords: ["falling", "left of minimum", "excess capacity", "productive inefficiency"] },
            { point: "Identifies compensating consumer benefit: greater product variety / choice / quality.", keywords: ["variety", "choice", "diverse tastes"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q11",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "monopolistic-oligopoly-equity-hl",
          marks: 4,
          question:
            "[HL] Explain two reasons why free markets are unable to achieve an equitable distribution of income and wealth.",
          hints: [
            "Briefly distinguish equity (fairness) from equality.",
            "Develop two distinct structural mechanisms: unequal initial factor endowments / effective demand ('dollar votes'), and market power transferring consumer surplus to owners.",
          ],
          modelAnswer:
            "Equity is a normative concept of fairness rather than mere statistical equality. First, free markets allocate goods strictly according to effective demand — willingness backed by ability to pay ('dollar votes') — which mirrors deeply unequal initial endowments of inherited wealth, land, and human capital; households born into poverty cannot afford essential healthcare or quality education, perpetuating disadvantage across generations. Second, unregulated market power in monopolies and oligopolies enables dominant firms to set prices above marginal cost (P > MC), regressively transferring consumer surplus from ordinary low-income buyers into abnormal profits for wealthier shareholders.",
          markScheme: [
            { point: "Distinguishes equity as a normative concept of fairness.", keywords: ["normative", "fairness"] },
            { point: "Explains allocation via effective demand ('dollar votes') excluding those lacking ability to pay.", keywords: ["effective demand", "ability to pay", "dollar votes"] },
            { point: "Links income/wealth gaps to unequal initial endowments (inheritance, land, human capital).", keywords: ["initial endowments", "inherited", "human capital", "generations"] },
            { point: "Explains market power (P > MC) transferring consumer surplus regressively to wealthier shareholders.", keywords: ["consumer surplus", "shareholders", "regressively", "p > mc"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q12",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Compare and contrast",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          marks: 10,
          markbands: IB_10M_BANDS,
          question:
            "[HL] Compare and contrast the long-run equilibrium price, output, profit, and efficiency outcomes of perfect competition and monopoly.",
          hints: [
            "Highlight similarities first (both maximise profit at {{MC = MR}}, face U-shaped costs, and can shut down if {{P < AVC}}).",
            "Contrast price/output ({{P_m > P_{pc}}}, {{Q_m < Q_{pc}}}), long-run profit (normal vs persistent abnormal due to barriers), allocative/productive efficiency, and dynamic efficiency.",
          ],
          modelAnswer:
            "Perfect competition and monopoly sit at opposite ends of the market-structure spectrum, yet they share key behavioural foundations. In both structures, profit-maximising firms choose output where marginal cost equals marginal revenue (MC = MR, with MC rising), face short-run diminishing returns shaping U-shaped cost curves, and follow the identical short-run shut-down criterion (P < AVC).\n\nHowever, assuming identical industry cost curves, their long-run outcomes diverge sharply because perfect competition features zero barriers to entry and price-taking firms (P = AR = MR), whereas a monopoly is shielded by high entry barriers and faces the entire downward-sloping market demand curve (MR below AR). First, on price and output, a monopolist restricts output to MC = MR (Qₘ < Q_pc) and charges a higher price read off the demand curve (Pₘ > P_pc), transferring consumer surplus to producer surplus and generating a deadweight welfare loss triangle.\n\nSecond, on long-run profit, free entry eliminates abnormal profit in perfect competition so firms earn only normal profit (P = AC), whereas barriers such as patents, resource control, or scale allow a monopolist to retain abnormal profit (Pₘ > AC) indefinitely.\n\nThird, on static efficiency, long-run perfect competition achieves both allocative efficiency (P = MC) and productive efficiency (operating at minimum AC). Monopoly fails both: Pₘ > MC causes allocative inefficiency, output typically misses minimum AC (productive inefficiency), and sheltered managers risk X-inefficiency. Nevertheless, on dynamic efficiency and economies of scale, a monopoly may outperform atomistic rivals if persistent abnormal profits fund high-risk R&D or if natural-monopoly economies push its LRAC far below that of fragmented small firms.",
          markScheme: [
            { point: "Identifies shared profit-maximising condition (MC = MR) and cost-curve / shut-down logic.", keywords: ["mc = mr", "shut-down", "diminishing returns"] },
            { point: "Contrasts market power & demand curves (horizontal P = AR = MR vs downward-sloping D with MR < AR).", keywords: ["price-taking", "downward-sloping", "mr below ar"] },
            { point: "Contrasts barriers to entry (zero barriers vs high barriers like patents/scale).", keywords: ["zero barriers", "high entry barriers", "patents"] },
            { point: "Contrasts equilibrium price and output (monopoly charges higher Pₘ and restricts Qₘ < Q_pc).", keywords: ["pₘ > p_pc", "qₘ < q_pc", "higher price", "restricts output"] },
            { point: "Notes transfer of consumer surplus to producer surplus and monopoly deadweight welfare loss.", keywords: ["consumer surplus", "deadweight welfare loss", "producer surplus"] },
            { point: "Contrasts long-run profit (normal profit P = AC vs persistent abnormal profit Pₘ > AC).", keywords: ["normal profit", "abnormal profit", "indefinitely"] },
            { point: "Shows perfect competition achieves both allocative (P = MC) and productive (min AC) efficiency.", keywords: ["allocative efficiency", "productive efficiency", "minimum ac"] },
            { point: "Explains monopoly fails static efficiency (Pₘ > MC, non-minimum AC, potential X-inefficiency).", keywords: ["x-inefficiency", "allocative inefficiency", "pₘ > mc"] },
            { point: "Introduces nuanced dynamic efficiency caveat (abnormal profits financing R&D).", keywords: ["dynamic efficiency", "r&d", "fund"] },
            { point: "Notes economies of scale / natural monopoly caveat where monopoly LRAC could be lower.", keywords: ["economies of scale", "natural-monopoly", "lrac"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q13",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "Evaluate",
          guideRef: "costs-revenues-perfect-monopoly-hl",
          marks: 15,
          markbands: IB_15M_BANDS,
          question:
            "[HL] Using real-world examples, evaluate the view that governments should always break up monopolies to improve economic welfare.",
          hints: [
            "Explain the static welfare case for breaking up monopolies (lower price, higher output, eliminating DWL and regressive surplus transfer) using real antitrust examples (e.g. AT&T breakup / US DOJ vs Google Search remedies).",
            "Challenge 'always' via TWO major counter-arguments with examples: (1) Natural monopolies (water/power grids like Singapore SP Group / UK utilities) where breakup destroys economies of scale; (2) Dynamic efficiency & R&D (pharmaceuticals / ASML semiconductor lithography).",
            "Evaluate alternative remedies (price-cap regulation RPI − X, P = AC fair-return pricing, pro-competitive interoperability) before reaching a nuanced judgement.",
          ],
          modelAnswer:
            "Because unregulated monopolies maximise profit where MC = MR, they restrict output below the competitive benchmark (Qₘ < Q_pc), charge Pₘ > MC, earn persistent abnormal profits, and create deadweight welfare loss while worsening equity through regressive transfers of consumer surplus. In markets with artificial barriers or exclusionary behaviour, structural breakups can genuinely restore welfare: the 1984 US antitrust breakup of AT&T's telecommunications monopoly spurred fierce long-distance competition, slashed call prices, and accelerated telecom innovation, motivating modern antitrust remedies sought by the US Department of Justice and EU Commission against dominant digital platforms such as Google Search.\n\nHowever, breaking up monopolies is *not* always welfare-enhancing. First, in a **natural monopoly** — such as electricity transmission networks (e.g. SP Group in Singapore's grid) or municipal water pipes — colossal fixed infrastructure costs cause LRAC to decline across the entire market demand. Splitting a single grid operator into five competing firms forces wasteful duplication of cables and pipes, pushing each firm higher up the LRAC curve and raising unit costs and prices for consumers. Here, retaining a single operator under strict regulation — such as RPI − X price caps (used by UK utility regulators like Ofgem) or fair-return pricing (P = AC) — preserves scale economies while curbing excess profits, though regulators face asymmetric cost information and capture risks.\n\nSecond, Schumpeterian **dynamic efficiency** suggests that temporary monopoly profits and patent protection finance hugely risky, capital-intensive R&D that atomistic competitors could never undertake. Dutch firm ASML holds a near-monopoly in extreme ultraviolet (EUV) lithography machines vital to global semiconductors, yet its scale funded decades of multi-billion-euro R&D; similarly, pharmaceutical patents incentivise novel vaccines and cancer therapies. Breaking up innovation-driven monopolies prematurely could chill global R&D and lower long-run welfare.\n\nThird, structural divestiture is slow, legally contested for years, and may prove redundant if disruptive technology makes markets contestable (as streaming platforms eroded legacy cable monopolies). In globalised sectors, breaking up domestic champions can also leave smaller firms unable to compete against foreign giants.\n\nIn conclusion, governments should NOT automatically break up every monopoly. Breakups are justified primarily where monopoly power rests on exclusionary conduct or mergers without compensating scale benefits. Where monopoly stems from natural-monopoly infrastructure or genuine R&D breakthroughs, smart regulation (price caps, open-access rules, expiring patents, and contestability) protects consumer welfare far better than blunt structural separation.",
          markScheme: [
            { point: "Explains static monopoly welfare loss (MC = MR, Qₘ < Q_pc, Pₘ > MC, DWL).", keywords: ["mc = mr", "deadweight welfare loss", "pₘ > mc"] },
            { point: "Links monopoly pricing to regressive transfer of consumer surplus (equity cost).", keywords: ["regressive", "consumer surplus", "equity"] },
            { point: "Uses real-world pro-breakup antitrust example (e.g. 1984 AT&T breakup or DOJ/EU Google case).", keywords: ["at&t", "google", "doj", "breakup"] },
            { point: "Explains benefits of structural breakup (restoring price competition and innovation).", keywords: ["slashed", "competition", "exclusionary"] },
            { point: "Introduces natural monopoly counter-argument (huge fixed costs, falling LRAC across market demand).", keywords: ["natural monopoly", "falling", "lrac", "fixed infrastructure"] },
            { point: "Uses real-world natural monopoly example (e.g. SP Group grid / municipal water / Ofgem utilities).", keywords: ["sp group", "water pipes", "ofgem", "grid"] },
            { point: "Explains why breaking up a natural monopoly raises unit costs via wasteful duplication.", keywords: ["duplication", "raising unit costs", "scale economies"] },
            { point: "Evaluates alternative regulatory tools (RPI − X price caps, P = AC fair-return pricing) and regulatory limits.", keywords: ["rpi − x", "fair-return", "asymmetric cost"] },
            { point: "Develops Schumpeterian dynamic efficiency counter-argument (abnormal profits funding R&D).", keywords: ["schumpeterian", "dynamic efficiency", "r&d"] },
            { point: "Uses real-world R&D monopoly example (e.g. ASML EUV lithography or pharmaceutical patents).", keywords: ["asml", "pharmaceutical", "patents", "vaccines"] },
            { point: "Notes practical limitations of breakups (legal delays, contestability / disruptive tech).", keywords: ["legally contested", "contestable", "disruptive"] },
            { point: "Notes international competitiveness trade-off if domestic firms lose global scale.", keywords: ["foreign giants", "global", "champions"] },
            { point: "Directly rejects the sweeping 'always' premise in the question.", keywords: ["not always", "not automatically", "blunt"] },
            { point: "Distinguishes sources of monopoly power (exclusionary conduct vs natural scale vs innovation).", keywords: ["exclusionary conduct", "natural-monopoly", "breakthroughs"] },
            { point: "Synthesises a contextual policy judgement choosing targeted regulation over automatic breakups.", keywords: ["in conclusion", "smart regulation", "open-access"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q14",
          kind: "written",
          difficulty: "core",
          level: "HL",
          commandTerm: "Explain",
          guideRef: "monopolistic-oligopoly-equity-hl",
          marks: 10,
          markbands: IB_10M_BANDS,
          question:
            "[HL] Using a game theory payoff matrix, explain why collusive oligopolies (cartels) face a strong incentive to cheat and often break down without effective enforcement.",
          hints: [
            "Define collusive oligopoly/cartel (coordinating price/output to earn shared monopoly profit) and mutual interdependence.",
            "Construct a clear 2×2 Prisoner's Dilemma payoff matrix (e.g. High Price / Honour Quota vs Cut Price / Cheat).",
            "Walk explicitly through best responses to prove cheating is a strictly dominant strategy for BOTH firms, yielding an inferior Nash equilibrium.",
          ],
          modelAnswer:
            "A collusive oligopoly (cartel) occurs when a few dominant, mutually interdependent firms formally agree to restrict output or fix prices above marginal cost, effectively acting like a single monopoly to maximise joint profits. Despite high collective rewards, cartels are notoriously unstable because each member faces a classic Prisoner's Dilemma.\n\nConsider two rival firms, Firm A and Firm B, simultaneously choosing between **High Price** (honouring the cartel) and **Low Price** (cheating by secretly discounting). Suppose their annual profit payoffs (Firm A, Firm B) in $ million are:\n\n| | Firm B: High Price | Firm B: Low Price |\n|---|---|---|\n| **Firm A: High Price** | ($100m, $100m) | ($35m, $130m) |\n| **Firm A: Low Price** | ($130m, $35m) | ($60m, $60m) |\n\nIf both honour the cartel at (High, High), combined industry profit peaks at $200m ($100m each). However, check Firm A's best responses: if Firm B keeps High Price, Firm A earns $130m by secretly cheating instead of $100m by cooperating; if Firm B cheats with Low Price, Firm A protects itself by earning $60m via Low Price instead of plunging to $35m. Thus **Low Price (cheating)** is Firm A's strictly dominant strategy. By symmetry, Low Price is also Firm B's strictly dominant strategy.\n\nConsequently, rational self-interest locks both firms into the unique **Nash equilibrium** at **(Low Price, Low Price)** earning ($60m, $60m) — where neither can gain by unilaterally raising price back to High. Total profit drops by $80m below the collusive outcome. Without repeated-game punishment mechanisms, transparent quota monitoring, or legal enforceability (impossible where cartels are illegal and subject to antitrust leniency programmes), mutual suspicion causes cartels to unravel.",
          markScheme: [
            { point: "Defines collusive oligopoly / cartel and notes mutual interdependence among few large firms.", keywords: ["interdependent", "shared", "single monopoly", "joint profits"] },
            { point: "Constructs a valid 2×2 payoff matrix with clear strategies (High/Honour vs Low/Cheat).", keywords: ["high price", "low price", "firm a", "firm b"] },
            { point: "Identifies the collusive cell maximising combined industry profit (e.g. $100m + $100m = $200m).", keywords: ["$200m", "combined industry profit", "honour"] },
            { point: "Proves Firm A prefers cheating if Firm B cooperates (e.g. $130m > $100m).", keywords: ["$130m", "secretly cheating", "instead of $100m"] },
            { point: "Proves Firm A also prefers cheating if Firm B cheats (defensive response, e.g. $60m > $35m).", keywords: ["$60m", "$35m", "protects itself"] },
            { point: "Correctly identifies cheating / Low Price as a strictly dominant strategy for both players.", keywords: ["dominant strategy", "symmetry"] },
            { point: "Defines and locates the unique Nash equilibrium at (Low, Low) — no incentive to unilaterally deviate.", keywords: ["nash equilibrium", "unilaterally"] },
            { point: "Highlights the Prisoner's Dilemma paradox: lower combined profit than collusion ($120m vs $200m).", keywords: ["prisoner's dilemma", "drops by $80m", "below the collusive"] },
            { point: "Explains why lack of legal enforceability / monitoring causes breakdown.", keywords: ["monitoring", "illegal", "unravel"] },
            { point: "Notes role of antitrust leniency or repeated-game punishment in altering stability.", keywords: ["leniency", "repeated-game", "punishment"] },
          ],
        },
        {
          id: "2b-market-failure-power-p2-q15",
          kind: "written",
          difficulty: "challenge",
          level: "HL",
          commandTerm: "To what extent",
          guideRef: "monopolistic-oligopoly-equity-hl",
          marks: 15,
          markbands: IB_15M_BANDS,
          question:
            "[HL] Using real-world examples, examine to what extent competition policy (antitrust regulation) is sufficient to address both the inefficiency and inequity caused by market power.",
          hints: [
            "Explain how competition policy (cartel fines, leniency, merger blocking, abuse-of-dominance rulings) tackles allocative inefficiency and regressive surplus transfers using real cases (e.g. Singapore CCCS, EU Commission fines on Google/Apple, UK CMA blocking mergers).",
            "Evaluate the limits of antitrust on *efficiency* (tacit collusion hard to prove, fast-moving digital network effects, global jurisdictional limits, dynamic R&D trade-offs).",
            "Evaluate why antitrust ALONE cannot solve *inequity* (Unit 2.12: even perfectly competitive markets reflect unequal initial wealth/endowments, requiring progressive taxation, transfers, and merit-good provision).",
          ],
          modelAnswer:
            "Concentrated market power in monopolies and oligopolies causes dual harm: **allocative inefficiency** (restricting output so P > MC, creating deadweight loss) and **inequity** (transferring consumer surplus from ordinary households to wealthier corporate shareholders). Competition policy — enforced by agencies like Singapore's Competition and Consumer Commission (CCCS), the UK's CMA, the US FTC/DOJ, and the European Commission — plays a vital frontline role, yet it is far from sufficient on its own.\n\nOn efficiency, antitrust tools directly attack overt market-power abuses. Heavy financial fines paired with **leniency (whistleblower) programmes** destabilise price-fixing cartels by exploiting Prisoner's Dilemma incentives — as seen when the CCCS fined poultry distributors and ride-hailing consolidation (Grab–Uber, 2018) and when the European Commission levied multi-billion-euro penalties on truck cartels and Google's self-preferencing practices. Merger control prevents excessive concentration ratios (CR₄), as when the UK CMA blocked the Sainsbury's–Asda supermarket merger in 2019 to protect grocery shoppers from higher prices. By lowering prices toward MC, competition policy simultaneously trims regressive burdens on low-income consumers.\n\nNevertheless, antitrust faces sharp practical limits even on efficiency. First, **tacit collusion** (such as unspoken price leadership in petrol retailing or banking) leaves no incriminating emails, making legal prosecution notoriously difficult. Second, modern digital platforms (app stores, search, cloud computing) exhibit powerful **network effects** and near-zero marginal costs, meaning markets naturally tip toward dominant winners; multi-year court battles lag far behind AI and software innovation. Third, aggressive enforcement risks chilling **dynamic efficiency** if firms fear that successful R&D scale will trigger punitive fines, and national regulators struggle against multinational tech giants operating across jurisdictions.\n\nMost fundamentally, from Unit 2.12, competition policy is **structurally insufficient to achieve equity**. Even if regulators transformed every oligopoly into textbook perfect competition (P = MC = min AC), free markets still allocate goods strictly by effective demand ('dollar votes'). Unequal initial endowments of inherited wealth, land, and education mean low-income families would remain priced out of housing, healthcare, and university education without broader redistribution.\n\nIn judgement, competition policy is *necessary* to curb deadweight loss, deter cartels, and prevent monopolistic exploitation of consumers, especially when updated with ex-ante digital rules such as the EU Digital Markets Act. However, to genuinely achieve both efficiency and equity, antitrust must be paired with progressive income and wealth taxation, targeted transfer payments, minimum wages, and public funding of essential merit goods.",
          markScheme: [
            { point: "Links market power (P > MC) to both allocative inefficiency (DWL) and inequity (surplus transfer).", keywords: ["allocative inefficiency", "deadweight loss", "shareholders"] },
            { point: "Explains cartel deterrence via fines and leniency/whistleblower programmes.", keywords: ["leniency", "whistleblower", "prisoner's dilemma"] },
            { point: "Integrates specific real-world antitrust case (e.g. CCCS Grab–Uber / EU truck cartel or Google fines).", keywords: ["cccs", "grab", "uber", "google", "truck"] },
            { point: "Explains merger control curbing concentration ratios with a real-world example (e.g. CMA Sainsbury's–Asda).", keywords: ["sainsbury", "asda", "cma", "concentration ratios"] },
            { point: "Notes how lower competitive prices indirectly improve equity for lower-income households.", keywords: ["regressive", "low-income", "grocery"] },
            { point: "Evaluates antitrust limit 1: difficulty prosecuting tacit collusion / unspoken price leadership.", keywords: ["tacit collusion", "price leadership", "incriminating"] },
            { point: "Evaluates antitrust limit 2: digital network effects tipping markets and slow legal lags.", keywords: ["network effects", "court battles", "lag"] },
            { point: "Evaluates antitrust limit 3: potential chilling effect on dynamic efficiency / R&D scale.", keywords: ["dynamic efficiency", "r&d", "chilling"] },
            { point: "Evaluates jurisdictional limits against multinational tech giants.", keywords: ["multinational", "jurisdictions", "cross-border"] },
            { point: "Notes emerging ex-ante digital regulation (e.g. EU Digital Markets Act).", keywords: ["digital markets act", "ex-ante"] },
            { point: "Applies 2.12 theory: even perfect competition fails equity due to effective demand ('dollar votes').", keywords: ["perfect competition", "effective demand", "dollar votes"] },
            { point: "Identifies unequal initial factor endowments (inheritance, wealth, education) untouched by antitrust.", keywords: ["initial endowments", "inherited", "wealth"] },
            { point: "Identifies complementary equity policies required (progressive taxes, transfers, merit-good funding).", keywords: ["progressive", "transfer payments", "merit goods"] },
            { point: "Directly answers 'to what extent' — necessary frontline tool, yet structurally insufficient alone.", keywords: ["necessary", "insufficient", "on its own"] },
            { point: "Synthesises balanced overall judgement combining updated antitrust with redistributive fiscal policy.", keywords: ["in judgement", "paired with", "genuinely achieve"] },
          ],
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET (8 QUESTIONS, ALL difficulty: "challenge")
  // ===========================================================================
  challenge: [
    {
      id: "2b-market-failure-power-ch-q01",
      kind: "short",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Calculate",
      guideRef: "externalities-common-pool",
      question:
        "A polluting market has {{MPB = MSB = 100 - Q}}, {{MPC = 20 + Q}}, and constant {{MEC = $24}} (so {{MSC = 44 + Q}}). Because of political opposition, the government imposes a partial Pigouvian tax of only $12 per unit (shifting private supply to {{MPC + t = 32 + Q}}). Calculate the **remaining** deadweight welfare loss (in dollars) after the $12 tax is imposed.",
      answer: { type: "number", value: 36, display: "$36" },
      traps: [
        { spec: { type: "number", value: 144 }, feedback: "$144 is the original deadweight loss *before* the tax; recalculate using the new post-tax quantity Qₜ = 34." },
        { spec: { type: "number", value: 72 }, feedback: "Halving the tax does NOT halve deadweight loss — because both triangle base AND height halve, remaining DWL falls to one-quarter ($36)!" },
      ],
      hints: [
        "Find the social optimum {{Q^*}} ({{44 + Q = 100 - Q}}) and the post-tax market output {{Q_t}} ({{32 + Q = 100 - Q}}).",
        "At {{Q_t}}, compute the remaining vertical gap {{MSC(Q_t) - MSB(Q_t)}}.",
        "Calculate the area of the smaller remaining triangle: {{1/2 * (Q_t - Q^*) * (MSC(Q_t) - MSB(Q_t))}}.",
      ],
      solution: [
        "Social optimum ({{MSC = MSB}}): {{44 + Q = 100 - Q}} → {{Q^* = 28}} units.",
        "Post-tax output ({{MPC + t = MPB}}): {{32 + Q = 100 - Q}} → {{Q_t = 34}} units.",
        "At {{Q_t = 34}}, {{MSC = 44 + 34 = $78}} and {{MSB = 100 - 34 = $66}}, leaving a vertical gap of {{$12}}.",
        "Remaining deadweight loss = {{1/2 * (34 - 28) * 12 = 1/2 * 6 * 12 = $36}} (a 50% Pigouvian tax eliminates 75% of original $144 DWL!).",
      ],
    },
    {
      id: "2b-market-failure-power-ch-q02",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      question:
        "[HL] A natural-monopoly water utility faces inverse demand {{P = 100 - Q}}, constant marginal cost {{MC = $20}}, and fixed network cost {{TFC = $1,800}}. If regulators mandate allocatively efficient marginal-cost pricing ({{P = MC}}), calculate the lump-sum government subsidy (in dollars) needed so the utility breaks even.",
      answer: { type: "number", value: 1800, display: "$1,800" },
      traps: [
        { spec: { type: "number", value: 1600 }, feedback: "$1,600 is total revenue (TR = $20 × 80); subtract TR from full TC = $1,800 + $1,600 = $3,400." },
      ],
      hints: [
        "At {{P = MC = $20}}, find the quantity demanded {{Q}} from {{100 - Q = 20}}.",
        "Calculate {{TR = P * Q}} and {{TC = TFC + MC * Q}}.",
        "The required break-even subsidy equals the utility's economic loss, {{TC - TR}}.",
      ],
      solution: [
        "Set {{P = MC}}: {{100 - Q = 20}} → {{Q = 80}} units at {{P = $20}}.",
        "{{TR = $20 * 80 = $1,600}}; {{TC = $1,800 + $20 * 80 = $3,400}}.",
        "Economic loss = {{$3,400 - $1,600 = $1,800}} → government must pay a **$1,800** subsidy (exactly covering fixed costs whenever MC is constant).",
      ],
    },
    {
      id: "2b-market-failure-power-ch-q03",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      question:
        "[HL] A dominant firm faces inverse demand {{P = 50 - Q}}, constant marginal cost {{MC = $10}}, and fixed cost {{TFC = $300}}. If managers switch from profit maximization to **sales maximization subject to normal profit** (the highest output where {{P = AC}}), calculate the firm's output {{Q}} (in units).",
      answer: { type: "number", value: 30, display: "30 units" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "20 units is profit maximization (MC = MR); sales maximization expands output further until TR = TC." },
        { spec: { type: "number", value: 10 }, feedback: "10 units is the *lower* break-even output where P = AC; sales maximisers pick the *higher* break-even output!" },
      ],
      hints: [
        "Write normal profit as {{TR = TC}}, i.e. {{P * Q = TFC + MC * Q}}.",
        "Substitute {{P = 50 - Q}}: {{(50 - Q)Q = 300 + 10Q}} and rearrange into a quadratic equation.",
        "Factor {{Q^2 - 40Q + 300 = 0}} and select the **larger** root for sales maximization.",
      ],
      solution: [
        "Set {{TR = TC}}: {{(50 - Q)Q = 300 + 10Q}} → {{50Q - Q^2 = 300 + 10Q}}.",
        "Rearrange: {{Q^2 - 40Q + 300 = 0}} → {{(Q - 10)(Q - 30) = 0}} → {{Q = 10}} or {{Q = 30}}.",
        "Sales maximization chooses the highest break-even output: **30 units** (check: {{P = $20}}, {{TR = $600}}, {{TC = 300 + 300 = $600}}).",
      ],
    },
    {
      id: "2b-market-failure-power-ch-q04",
      kind: "short",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Calculate",
      guideRef: "monopolistic-oligopoly-equity-hl",
      question:
        "[HL] Two asymmetric ride-hailing platforms, GrabFast and RideNow, simultaneously pick **High Commission** or **Low Commission**. Annual profit payoffs (GrabFast, RideNow) in $ million are: (High, High) = (120, 50); (High, Low) = (70, 65); (Low, High) = (135, 25); (Low, Low) = (85, 40). Calculate the total joint industry profit (in $ million) **lost** at the unique Nash equilibrium compared with the (High, High) collusive outcome.",
      answer: { type: "number", value: 45, display: "$45 million" },
      traps: [
        { spec: { type: "number", value: 125 }, feedback: "$125m is the Nash equilibrium combined profit; subtract it from the collusive total ($170m) to find the profit *lost*." },
      ],
      hints: [
        "Check GrabFast's best responses (1st payoff) against High and Low, then RideNow's best responses (2nd payoff).",
        "Sum both payoffs in the Nash equilibrium cell and compare against the sum in (High, High).",
      ],
      solution: [
        "GrabFast: vs High, {{135 > 120}} (Low); vs Low, {{85 > 70}} (Low) → **Low** is strictly dominant.",
        "RideNow: vs High, {{65 > 50}} (Low); vs Low, {{40 > 25}} (Low) → **Low** is strictly dominant.",
        "Unique Nash equilibrium = (Low, Low) with combined profit {{85 + 40 = $125}} million vs collusive {{120 + 50 = $170}} million.",
        "Joint profit lost = {{170 - 125 = $45}} million.",
      ],
    },
    {
      id: "2b-market-failure-power-ch-q05",
      kind: "written",
      difficulty: "challenge",
      level: "SL",
      commandTerm: "Evaluate",
      guideRef: "externalities-common-pool",
      marks: 10,
      markbands: IB_10M_BANDS,
      question:
        "Evaluate the effectiveness of Elinor Ostrom's collective self-governance compared with international tradable fishing quotas in sustainably protecting a migratory common pool resource such as Pacific bluefin tuna.",
      hints: [
        "Define Pacific bluefin tuna as a rivalrous, non-excludable, *transboundary* common pool resource.",
        "Contrast where Ostrom's design principles excel (local, bounded communities with social trust) vs why open-ocean migratory fish strain pure local self-governance.",
        "Evaluate international Individual Transferable Quotas (ITQs) — economic efficiency & binding total catch limits vs sovereignty, illegal unregulated fishing (IUU), and monitoring costs.",
      ],
      modelAnswer:
        "Pacific bluefin tuna are a classic common pool resource — rivalrous (each vessel's catch depletes breeding stock) and non-excludable across international waters — making them vulnerable to the Tragedy of the Commons and biological collapse. Choosing between Elinor Ostrom's collective self-governance and international tradable quotas (ITQs) hinges crucially on geographic scale and resource mobility.\n\nOstrom's collective self-governance works remarkably well for stationary, bounded local CPRs — such as Törbel's Swiss Alpine meadows or coastal lobster cooperatives in Maine — where clear boundaries, shared social norms, peer monitoring, and graduated sanctions sustain stocks cheaply. However, Pacific bluefin tuna migrate across thousands of kilometres through national exclusive economic zones and international high seas involving industrial fleets from Japan, Mexico, South Korea, and the US. Without clear local boundaries or face-to-face community trust, voluntary self-governance alone suffers severely from international free-riding.\n\nInternational Individual Transferable Quotas (ITQs), coordinated through regional fisheries management organisations (like the WCPFC), directly tackle this transboundary scale. By capping total allowable catch at a scientifically sustainable yield and allocating tradable quotas, ITQs convert open access into enforceable catch shares while letting more efficient fleets buy quota from higher-cost vessels, minimising compliance cost. Even so, ITQs face political hurdles: nations lobby for inflated quotas, illegal unregulated (IUU) fleets evade high-seas patrols, and small-scale artisanal fishers risk being bought out by corporate trawlers, raising equity concerns.\n\nIn judgement, pure local self-governance cannot protect a migratory global ocean stock by itself, making binding international quotas and satellite enforcement indispensable. Yet Ostrom's insights remain vital as a *nested* complement: pairing international WCPFC catch caps with local port-community monitoring and cooperative quota pools maximises both biological sustainability and fisher compliance.",
      markScheme: [
        { point: "Identifies Pacific bluefin tuna as rivalrous and non-excludable (CPR / Tragedy of the Commons).", keywords: ["rivalrous", "non-excludable", "tragedy of the commons"] },
        { point: "Explains Ostrom's principles (boundaries, peer monitoring, graduated sanctions) with local success example.", keywords: ["boundaries", "graduated sanctions", "maine", "törbel", "swiss"] },
        { point: "Identifies core limitation of Ostrom for migratory high-seas fish (vast scale, transboundary free-riding).", keywords: ["transboundary", "migrate", "free-riding", "high seas"] },
        { point: "Explains international tradable quotas (ITQs): scientific catch cap + quota trading.", keywords: ["itq", "total allowable catch", "tradable", "wcpfc"] },
        { point: "Explains economic efficiency advantage of ITQs (efficient fleets buy quota, lowering abatement/compliance cost).", keywords: ["efficient fleets", "compliance cost", "catch shares"] },
        { point: "Evaluates ITQ limitations: political quota lobbying and illegal unregulated (IUU) high-seas fishing.", keywords: ["iuu", "illegal", "lobby", "patrols"] },
        { point: "Evaluates equity impact of ITQs (corporate trawlers crowding out small artisanal fishers).", keywords: ["artisanal", "equity", "corporate"] },
        { point: "Contrasts local stationary CPRs vs global migratory CPRs explicitly.", keywords: ["stationary", "scale", "mobility"] },
        { point: "Proposes Ostrom's nested governance / polycentric combination (international caps + local monitoring).", keywords: ["nested", "complement", "port-community"] },
        { point: "Reaches clear, well-reasoned judgement.", keywords: ["in judgement", "indispensable", "maximises"] },
      ],
    },
    {
      id: "2b-market-failure-power-ch-q06",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Analyse",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      marks: 10,
      markbands: IB_10M_BANDS,
      question:
        "[HL] Analyse the short-run and long-run adjustment of a perfectly competitive industry originally in long-run equilibrium when a sudden decline in consumer preferences lowers market price to a level strictly between minimum AVC and minimum AC.",
      hints: [
        "Start from initial long-run equilibrium ({{P_1 = MC = min AC}}, normal profit).",
        "Trace the short-run shock: market demand shifts left, new horizontal price {{P_2}} sits with {{AVC < P_2 < AC}} → firm stays open in SR to minimise loss below {{TFC}}.",
        "Trace the long-run adjustment: losses induce firms to exit, industry supply shifts left, market price rebounds back to {{P_1 = min AC}}, restoring normal profit at a smaller industry output.",
      ],
      modelAnswer:
        "Initially, a perfectly competitive industry sits in long-run equilibrium where market demand D₁ meets industry supply S₁ at price P₁ and industry output Q₁. Each price-taking firm faces horizontal demand P₁ = AR₁ = MR₁ tangent to the minimum of AC, producing q₁ where P₁ = MC = min AC and earning normal profit (allocatively and productively efficient).\n\nWhen consumer preferences decline suddenly, industry demand shifts leftward from D₁ to D₂, driving market price down from P₁ to P₂. Each individual firm's horizontal demand curve drops to P₂ = AR₂ = MR₂. Profit-maximising (loss-minimising) firms move down their rising MC curve to set MC = MR₂ at lower output q₂. Because P₂ lies strictly below AC, every firm suffers an economic loss equal to (AC − P₂) × q₂. Crucially, however, because P₂ still exceeds minimum AVC, each firm's total revenue covers all variable costs and contributes a positive margin toward fixed costs; therefore, in the **short run**, firms choose to **continue operating** rather than shut down (which would forfeit entire TFC).\n\nIn the **long run**, all costs become variable and persistent economic losses cannot be sustained. Because barriers to exit are zero, loss-making firms gradually leave the industry. As firms exit, the industry supply curve shifts leftward from S₁ to S₂, pushing market price steadily back upward toward P₁ (assuming a constant-cost industry). Remaining firms' horizontal demand lines rise back to P₁ = min AC until economic losses disappear and normal profit is restored. In the final long-run equilibrium, surviving firms again produce at q₁ (P₁ = MC = min AC), though total industry output Q₃ is permanently smaller than Q₁.",
      markScheme: [
        { point: "Establishes initial long-run equilibrium (D₁ = S₁ at P₁; firm at P₁ = MC = min AC, normal profit).", keywords: ["initial", "normal profit", "min ac", "p₁"] },
        { point: "Identifies industry demand shift left (D₁ to D₂) reducing equilibrium price to P₂.", keywords: ["shifts leftward", "d₁ to d₂", "p₂"] },
        { point: "Shows firm's horizontal demand/MR line drops to P₂ = AR₂ = MR₂.", keywords: ["horizontal demand", "ar₂", "mr₂"] },
        { point: "Explains firm cuts output along rising MC from q₁ to q₂ where MC = MR₂.", keywords: ["mc = mr₂", "q₂", "rising mc"] },
        { point: "Identifies short-run economic loss equal to (AC − P₂) × q₂ since P₂ < AC.", keywords: ["economic loss", "below ac", "(ac − p₂)"] },
        { point: "Applies short-run shut-down rule: since P₂ > AVC, revenue covers variable costs plus part of TFC, so firms stay open.", keywords: ["exceeds minimum avc", "continue operating", "variable costs", "tfc"] },
        { point: "Explains long-run exit driven by sustained losses and zero barriers to exit.", keywords: ["zero", "leave the industry", "exit"] },
        { point: "Traces industry supply shifting leftward from S₁ to S₂, pushing market price back up.", keywords: ["supply curve shifts leftward", "s₁ to s₂", "back upward"] },
        { point: "Concludes restoration of normal profit and both allocative/productive efficiency at P₁ = MC = min AC.", keywords: ["restored", "surviving firms", "p₁ = mc = min ac"] },
        { point: "Notes smaller final industry output Q₃ < Q₁ while individual firm size returns to q₁.", keywords: ["permanently smaller", "q₃", "q₁"] },
      ],
    },
    {
      id: "2b-market-failure-power-ch-q07",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Evaluate",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      marks: 15,
      markbands: IB_15M_BANDS,
      question:
        "[HL] Using real-world examples, evaluate whether a government should regulate a natural monopoly using marginal-cost pricing (P = MC), average-cost pricing (P = AC), or state nationalisation.",
      hints: [
        "Explain the natural monopoly diagram: continuously falling LRAC/AC across market demand, so MC lies strictly below AC everywhere.",
        "Evaluate each of the 3 options rigorously: (1) P = MC (allocatively efficient, zero DWL, but permanent loss requiring tax-funded subsidy); (2) P = AC fair-return pricing (breaks even, lower DWL than monopoly, weak cost-cutting incentives unless paired with RPI − X); (3) State nationalisation (e.g. Singapore PUB water / historical UK rail — public-interest pricing vs X-inefficiency and fiscal burden).",
        "Reach a reasoned judgement weighing fiscal capacity, institutional quality, and essential-good equity.",
      ],
      modelAnswer:
        "A natural monopoly arises when massive fixed infrastructure costs cause Long-Run Average Cost (LRAC) to fall across the entire range of market demand — as in municipal water mains, sewage systems, and electricity transmission grids — meaning one firm serves society at far lower unit cost than competing rivals. Because falling AC implies MC lies strictly below AC everywhere, unregulated profit maximization (MC = MR) yields severe deadweight loss and regressive bills, forcing governments to choose among marginal-cost pricing, average-cost pricing, or state nationalisation.\n\n**Marginal-cost pricing (P = MC)** achieves textbook allocative efficiency: output expands to where demand meets MC, completely eliminating deadweight welfare loss and ensuring affordable access for low-income households. However, because MC < AC at every output, enforcing P = MC locks the utility into a permanent economic loss equal to (AC − P) × Q. The government must cover this deficit with an annual tax-funded subsidy, carrying heavy fiscal opportunity costs (crowding out health or education spending), distortionary tax deadweight losses elsewhere, and moral-hazard incentives for utility managers to pad costs knowing taxpayers will plug the gap.\n\n**Average-cost (fair-return) pricing (P = AC)** offers a pragmatic compromise. Price drops dramatically below the monopoly level and output expands substantially, capturing most potential welfare gains while allowing the private operator to earn normal profit and break even without taxpayer subsidies. Yet P = AC still leaves a modest residual deadweight loss (since P > MC), and pure cost-plus regulation creates **X-inefficiency**: if regulators automatically cover whatever AC the firm reports, managers have zero incentive to cut waste. For this reason, regulators such as Ofgem (UK energy) and Ofwat (UK water) pair private ownership with **RPI − X price caps** that reward cost reductions — though England's privatised water utilities (such as Thames Water) revealed severe pitfalls when firms prioritised debt-funded dividends over pipe maintenance and sewage upgrades.\n\n**State nationalisation** directly aligns the utility with public welfare, long-term environmental resilience, and universal equity rather than shareholder dividends. Singapore's Public Utilities Board (PUB) exemplifies high-performing state stewardship of a natural water monopoly, delivering world-class infrastructure, NEWater recycling innovation, and transparent water-conservation pricing without private dividend extraction. Conversely, poorly governed state utilities in countries with weak institutional oversight can suffer chronic political interference (artificially freezing prices before elections), underinvestment, bureaucratic X-inefficiency, and heavy sovereign fiscal burdens — as witnessed in South Africa's state power monopoly Eskom.\n\nIn conclusion, no single model dominates universally; optimal choice depends on institutional governance and fiscal space. Where civil-service accountability is strong and the good is a life-critical necessity like water (Singapore's PUB), state ownership combined with transparent cost-recovery pricing excels. Where governments face tight budgets and high private technical efficiency, regulated private operation using incentive-based price caps anchored near P = AC — backed by strict quality and environmental penalties — outperforms both unsubsidisable P = MC rules and weakly supervised state monopolies.",
      markScheme: [
        { point: "Defines natural monopoly (huge fixed costs, falling LRAC across market demand, MC < AC everywhere).", keywords: ["falling", "lrac", "mc lies strictly below ac", "fixed infrastructure"] },
        { point: "Explains allocative efficiency benefit of P = MC pricing (eliminating DWL, high affordability).", keywords: ["allocative efficiency", "eliminating deadweight", "affordable"] },
        { point: "Identifies unavoidable economic loss under P = MC because P < AC, requiring tax subsidy.", keywords: ["permanent economic loss", "tax-funded subsidy", "mc < ac"] },
        { point: "Evaluates costs of P = MC subsidies (fiscal opportunity cost, tax distortions, managerial moral hazard).", keywords: ["opportunity costs", "moral-hazard", "pad costs"] },
        { point: "Explains P = AC (fair-return) pricing: lower price/higher output than monopoly while breaking even (normal profit).", keywords: ["fair-return", "normal profit", "without taxpayer"] },
        { point: "Identifies residual DWL (P > MC) and X-inefficiency risk under cost-plus P = AC regulation.", keywords: ["residual deadweight loss", "x-inefficiency", "cost-plus"] },
        { point: "Evaluates incentive regulation (RPI − X caps) with real-world UK Ofgem/Ofwat/Thames Water evidence.", keywords: ["rpi − x", "ofgem", "thames water", "dividends"] },
        { point: "Explains benefits of state nationalisation (public interest, equity, long-term resilience).", keywords: ["public welfare", "shareholder dividends", "resilience"] },
        { point: "Provides positive real-world state natural monopoly example (Singapore PUB / NEWater).", keywords: ["singapore", "pub", "newater"] },
        { point: "Provides cautionary real-world state failure example (e.g. South Africa Eskom — political interference / fiscal burden).", keywords: ["eskom", "political interference", "underinvestment"] },
        { point: "Compares private vs public X-inefficiency and information asymmetry.", keywords: ["bureaucratic", "oversight", "governance"] },
        { point: "Weighs equity vs allocative efficiency vs fiscal sustainability across all three models.", keywords: ["fiscal space", "necessity", "efficiency"] },
        { point: "Evaluates role of strict quality/environmental enforcement alongside price caps.", keywords: ["environmental penalties", "sewage", "maintenance"] },
        { point: "Directly answers 'whether' with conditional criteria (institutional quality & fiscal capacity).", keywords: ["depends on", "institutional", "no single model"] },
        { point: "Delivers clear, synthesised concluding judgement.", keywords: ["in conclusion", "outperforms", "excels"] },
      ],
    },
    {
      id: "2b-market-failure-power-ch-q08",
      kind: "written",
      difficulty: "challenge",
      level: "HL",
      commandTerm: "Discuss",
      guideRef: "monopolistic-oligopoly-equity-hl",
      marks: 15,
      markbands: IB_15M_BANDS,
      question:
        "[HL] Using real-world examples, discuss the trade-offs between allocative efficiency, dynamic efficiency, and equity when governments intervene in markets dominated by large digital oligopolies.",
      hints: [
        "Explain why digital oligopolies (mobile OS Apple/Google, cloud AWS/Azure/GCP, e-commerce/ride-hailing) emerge via network effects, data economies of scale, and switching costs.",
        "Analyse allocative efficiency vs dynamic efficiency trade-offs (zero-price consumer services vs high app-store/ad commissions, R&D investment in AI & cloud vs killer acquisitions stifling start-ups).",
        "Analyse equity dimensions (gig-worker pay, small-merchant fees, billionaire shareholder wealth concentration) and evaluate modern policies like the EU Digital Markets Act (DMA) and interoperability mandates.",
      ],
      modelAnswer:
        "Digital markets — such as mobile ecosystems (Apple iOS and Google Android), cloud infrastructure (AWS, Microsoft Azure, Google Cloud), and regional ride-hailing — routinely evolve into tightly concentrated oligopolies with high CR₂ or CR₃ ratios. Unlike traditional factories, these platforms are sustained by **direct and indirect network effects**, vast data economies of scale, and ecosystem lock-in, presenting regulators with intricate trade-offs among allocative efficiency, dynamic efficiency, and equity.\n\n**Allocative efficiency vs ecosystem convenience**: Because digital oligopolists charge merchants and app developers commissions far above near-zero marginal cost (such as Apple's and Google's historical 15–30% app-store fees or elevated digital advertising prices), they restrict market surplus and pass hidden costs onto end consumers even when headline apps appear 'free'. Pro-competitive interventions like the **European Union's Digital Markets Act (DMA, 2024)** designate 'gatekeepers', ban self-preferencing, and mandate third-party app sideloading and interoperability. Opening bottlenecks can push commissions closer to MC and boost allocative efficiency; however, heavy fragmentation can erode seamless security, privacy integration, and convenience that users genuinely value.\n\n**Dynamic efficiency trade-off**: Defenders of digital scale invoke Schumpeterian dynamic efficiency — abnormal profits earned by Alphabet, Microsoft, and Apple fund tens of billions of dollars annually in foundational AI models, custom silicon, and global cloud infrastructure that tiny firms could never finance. Overly punitive breakups or rigid price caps risk dampening R&D incentives. Conversely, unchecked dominance *harms* dynamic efficiency when incumbents execute 'killer acquisitions' (buying nascent rivals early, as scrutinised in Meta's past acquisitions of Instagram and WhatsApp or blocked mergers like Adobe–Figma in 2023) and use privileged platform data to copy independent innovators — meaning targeted merger control actually *protects* innovation.\n\n**Equity dimensions**: Unregulated digital oligopolies intensify wealth and income inequity (Unit 2.12). Platform commissions transfer surplus from millions of small restaurants, independent developers, and gig-economy drivers to concentrated equity holders, while algorithmic pricing can extract maximum willingness to pay from less-informed consumers. Government intervention — ranging from DMA fee-opening rules to Singapore's Platform Workers Act (extending CPF retirement and work-injury protections to gig riders from 2025) — markedly improves fairness for small businesses and workers, though higher compliance costs may partially raise delivery fees for price-sensitive consumers in the short run.\n\nIn synthesis, intervening in digital oligopolies inevitably involves balancing static price/commission reductions and fairer surplus sharing against scale-driven innovation and seamless network utility. Rather than blunt structural breakups that sacrifice network scale, well-designed ex-ante rules — mandating data portability, interoperability, anti-self-preferencing, strict scrutiny of killer acquisitions, and dedicated gig-worker social protections — offer the strongest path toward reconciling allocative efficiency, dynamic innovation, and equity.",
      markScheme: [
        { point: "Explains structural drivers of digital oligopolies (network effects, data economies of scale, lock-in, high CR).", keywords: ["network effects", "lock-in", "data economies", "cr₂"] },
        { point: "Analyses allocative inefficiency (fees/commissions well above near-zero MC even with 'free' consumer apps).", keywords: ["near-zero marginal cost", "commissions", "30%", "free"] },
        { point: "Integrates specific regulatory example (EU Digital Markets Act / DMA gatekeeper rules).", keywords: ["digital markets act", "dma", "gatekeepers", "sideloading"] },
        { point: "Evaluates allocative/consumer trade-off of intervention (lower fees vs fragmented security/convenience).", keywords: ["security", "convenience", "fragmentation"] },
        { point: "Explains pro-scale dynamic efficiency argument (abnormal profits funding AI, cloud, chip R&D).", keywords: ["schumpeterian", "dynamic efficiency", "ai", "cloud"] },
        { point: "Names concrete Big Tech oligopolists (Apple, Google/Alphabet, Microsoft, AWS).", keywords: ["apple", "google", "microsoft", "aws"] },
        { point: "Explains anti-innovation risk of unchecked dominance ('killer acquisitions' / copying rivals).", keywords: ["killer acquisitions", "nascent rivals", "copy"] },
        { point: "Integrates concrete merger-control example (e.g. Adobe–Figma blocked or Meta/Instagram/WhatsApp scrutiny).", keywords: ["adobe", "figma", "instagram", "whatsapp"] },
        { point: "Connects digital oligopoly power to Unit 2.12 equity concerns (small merchants, gig drivers vs shareholders).", keywords: ["equity holders", "gig-economy", "small restaurants", "surplus"] },
        { point: "Integrates real-world equity intervention example (e.g. Singapore Platform Workers Act / CPF).", keywords: ["platform workers act", "cpf", "singapore", "riders"] },
        { point: "Evaluates equity-efficiency trade-off of worker protections (higher compliance costs / consumer delivery fees).", keywords: ["delivery fees", "compliance costs", "price-sensitive"] },
        { point: "Evaluates short-run vs long-run consequences of intervention.", keywords: ["short run", "foundational", "long-run"] },
        { point: "Contrasts blunt structural breakups with ex-ante interoperability / data portability remedies.", keywords: ["data portability", "interoperability", "ex-ante", "blunt"] },
        { point: "Balances all three core criteria (allocative efficiency, dynamic efficiency, equity) cohesively.", keywords: ["reconciling", "balancing", "intricate trade-offs"] },
        { point: "Reaches a nuanced, well-justified concluding synthesis.", keywords: ["in synthesis", "strongest path", "well-designed"] },
      ],
    },
  ],
};
