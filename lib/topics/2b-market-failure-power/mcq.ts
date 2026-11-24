import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // PAPER M1: EXTERNALITIES, COMMON POOL RESOURCES & PUBLIC GOODS (SL/CORE)
  // AnswerIndex spread: 0:4, 1:4, 2:4, 3:3
  // ===========================================================================
  {
    id: "2b-market-failure-power-m1",
    title: "Paper M1 · Externalities, Common Pool Resources & Public Goods (SL)",
    level: "SL",
    questions: [
      {
        id: "2b-market-failure-power-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "A cement factory releases airborne particulates that increase asthma rates in neighbouring residential estates. Which condition best describes this market failure at the free-market equilibrium?",
        options: [
          "Marginal social cost exceeds marginal private cost, leading to overproduction relative to the social optimum.",
          "Marginal private benefit exceeds marginal social benefit, leading to underproduction relative to the social optimum.",
          "Marginal social benefit exceeds marginal private benefit, leading to overproduction relative to the social optimum.",
          "Marginal private cost exceeds marginal social cost, leading to underproduction relative to the social optimum.",
        ],
        answerIndex: 0,
        hints: [
          "Identify whether the uncompensated third-party harm comes from *producing* cement or *consuming* it.",
          "An unpriced external production cost pushes the social cost curve above the private supply curve.",
        ],
        explanation:
          "Airborne pollution from manufacturing is a **negative externality of production**: {{MSC > MPC}}, so producers ignore third-party health damages and overproduce ({{Q_m > Q^*}}). Negative consumption externalities split {{MPB}} and {{MSB}} instead, while positive externalities cause underallocation.",
      },
      {
        id: "2b-market-failure-power-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "On a correctly drawn diagram of a positive externality of consumption (such as childhood vaccinations), where does the shaded deadweight welfare loss triangle sit?",
        options: [
          "To the right of the social optimum Q*, with its sharp vertex pointing right away from the market output.",
          "Between Qₘ and Q*, with its vertical base sitting at Q* and its sharp vertex pointing left toward Qₘ.",
          "Between Qₘ and Q*, with its vertical base sitting at Qₘ and its sharp vertex pointing right toward Q*.",
          "To the left of the market output Qₘ, bounded between the horizontal price line and the vertical cost axis.",
        ],
        answerIndex: 2,
        hints: [
          "Does a positive externality cause underallocation (Qₘ < Q*) or overallocation (Qₘ > Q*)?",
          "Remember the geometric rule: the arrowhead of every welfare loss triangle always points toward Q*.",
        ],
        explanation:
          "Positive consumption externalities cause **underallocation** ({{Q_m < Q^*}}) because {{MSB > MPB}}. Every forgone unit between {{Q_m}} and {{Q^*}} forfeits net social gain ({{MSB - MSC}}), forming a triangle whose vertical base lies at {{Q_m}} and whose sharp tip points **right toward {{Q^*}}**.",
      },
      {
        id: "2b-market-failure-power-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "Why is an indirect Pigouvian tax on petrol often criticised for reducing driving very little in the short run while raising equity concerns?",
        options: [
          "Demand for petrol is highly price-elastic, so producers absorb almost all of the tax and cut supply sharply.",
          "Demand for petrol is price-inelastic, so quantity falls slightly while poorer commuters spend a higher income share.",
          "Supply of petrol is perfectly inelastic, so consumer prices remain unchanged while government tax revenue falls to zero.",
          "Petrol generates positive consumption externalities, so taxing it shifts the market further away from the social optimum.",
        ],
        answerIndex: 1,
        hints: [
          "How responsive are commuters to higher fuel prices in the short run when public transit alternatives are limited?",
          "Consider both the quantity response and who bears the larger proportional income burden of a flat indirect tax.",
        ],
        explanation:
          "Short-run petrol demand is **price-inelastic** ({{|PED| < 1}}), so a carbon or fuel tax causes only a modest drop in driving while passing most of the burden onto consumers. Because lower-income households spend a higher fraction of income on fuel, the tax is **regressive** unless revenues are recycled into rebates or public transport.",
      },
      {
        id: "2b-market-failure-power-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "A steel market has {{MPB = MSB = 80 - Q}} and {{MPC = 20 + Q}}. Steel production imposes a constant marginal external cost of $12 per tonne ({{MSC = 32 + Q}}). What is the deadweight welfare loss at the free-market equilibrium?",
        options: ["$18", "$48", "$72", "$36"],
        answerIndex: 3,
        hints: [
          "Solve {{MPC = MPB}} to find free-market output {{Q_m}}, then solve {{MSC = MSB}} to find {{Q^*}}.",
          "Use the triangle area formula: {{1/2 * (Q_m - Q^*) * MEC}}.",
        ],
        explanation:
          "Free-market equilibrium: {{20 + Q = 80 - Q}} → {{Q_m = 30}}. Social optimum: {{32 + Q = 80 - Q}} → {{Q^* = 24}}. The overproduction is {{30 - 24 = 6}} tonnes and the vertical external cost gap is $12, so welfare loss = {{1/2 * 6 * 12 = $36}}. Forgetting the {{1/2}} factor gives the tempting distractor $72.",
      },
      {
        id: "2b-market-failure-power-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "What is the primary allocative advantage of a cap-and-trade tradable permit scheme over uniform command-and-control emissions limits?",
        options: [
          "Firms with low abatement costs cut pollution more deeply and sell spare permits, minimising total compliance cost.",
          "Every firm is legally forced to reduce its emissions by the exact same percentage regardless of clean-tech costs.",
          "Permit prices automatically fall to zero during economic booms so industrial output is never constrained.",
          "Government regulators never need to monitor factory emissions or enforce penalties once permits are distributed.",
        ],
        answerIndex: 0,
        hints: [
          "Think about what happens when Firm A can cut a tonne of CO₂ for $15 while Firm B needs $70.",
          "Trading permits allows abatement to occur wherever it is cheapest.",
        ],
        explanation:
          "Under cap-and-trade (like the EU ETS), firms with cheap abatement options cut emissions deeply and sell surplus permits to firms with high abatement costs. Society reaches the same total emissions cap at the **lowest possible total resource cost**, whereas uniform standards force inefficient cuts on high-cost plants.",
      },
      {
        id: "2b-market-failure-power-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "Which pair of economic characteristics defines a common pool resource (CPR) such as open-ocean bluefin tuna stocks?",
        options: [
          "Non-rivalrous in consumption and excludable to non-payers.",
          "Non-rivalrous in consumption and non-excludable to non-payers.",
          "Rivalrous in consumption and non-excludable to non-payers.",
          "Rivalrous in consumption and excludable to non-payers.",
        ],
        answerIndex: 2,
        hints: [
          "If one trawler catches a tuna, can another trawler catch that same fish?",
          "Can anyone cheaply fence off international ocean waters to block outside fishing fleets?",
        ],
        explanation:
          "Common pool resources are **rivalrous** (one user's harvest reduces what remains for others) and **non-excludable** (it is difficult or costly to prevent access). Non-rivalrous + non-excludable describes pure public goods; rivalrous + excludable describes private goods.",
      },
      {
        id: "2b-market-failure-power-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "Which key conclusion did Nobel laureate Elinor Ostrom establish through her empirical research on common pool resources?",
        options: [
          "Common pool resources always collapse unless completely privatised into corporate ownership.",
          "Local communities can sustainably manage shared resources via collective self-governance and graduated sanctions.",
          "Centralised nationalisation is the sole policy capable of preventing overfishing and deforestation.",
          "Rivalrous resources automatically reach allocative efficiency whenever markets are left completely unregulated.",
        ],
        answerIndex: 1,
        hints: [
          "Recall how Ostrom challenged Garrett Hardin's claim that only privatisation or central state control works.",
          "Think about her real-world studies of Swiss Alpine meadows and community irrigation networks.",
        ],
        explanation:
          "Elinor Ostrom demonstrated that local stakeholders can avoid the Tragedy of the Commons through **collective self-governance** — clear resource boundaries, locally tailored rules, community monitoring, and graduated sanctions — without necessarily resorting to privatisation or top-down central control.",
      },
      {
        id: "2b-market-failure-power-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "Why does a completely unregulated free market fail to supply pure public goods like national flood-defence barriers?",
        options: [
          "Consumers place zero marginal benefit on flood protection once private insurance markets are established.",
          "Marginal costs of extending flood protection to each extra resident rise steeply toward infinity.",
          "Government competition laws prohibit private engineering firms from constructing public infrastructure.",
          "Non-excludability creates a free-rider problem, preventing private firms from earning profitable revenue.",
        ],
        answerIndex: 3,
        hints: [
          "Once a sea wall protects a coastal city, can a private builder exclude residents who refuse to pay?",
          "Connect non-excludability directly to private firms' profit incentive.",
        ],
        explanation:
          "Because pure public goods are **non-excludable**, rational individuals wait for others to pay and enjoy the benefit for free (**free-rider problem**). Unable to collect revenue to cover costs, profit-seeking firms supply zero — causing a **missing market**.",
      },
      {
        id: "2b-market-failure-power-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "Why are state-funded public hospitals classified as merit goods rather than pure public goods in IB Economics?",
        options: [
          "Hospital beds and doctors' time are rivalrous and patients can be excluded at the door.",
          "Healthcare generates negative consumption externalities that reduce workforce productivity.",
          "Private hospitals cannot legally operate alongside government-run healthcare systems.",
          "Emergency medical treatment is completely non-rivalrous even during severe disease outbreaks.",
        ],
        answerIndex: 0,
        hints: [
          "Test healthcare against the two strict definitions: rivalry and excludability.",
          "Does one patient occupying an operating theatre reduce availability for another patient?",
        ],
        explanation:
          "Being government-funded does **not** make something a pure public good. Hospital beds, medicines, and doctors' appointments are **rivalrous** and **excludable**; governments subsidise or directly provide healthcare because it is a **merit good** with strong positive consumption externalities and equity value.",
      },
      {
        id: "2b-market-failure-power-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "Four shops along a pedestrian alley value a shared security street lamp (pure public good) at $60, $80, $50, and $70 respectively. Installing the lamp costs $220. What is the net social welfare effect of providing the lamp?",
        options: [
          "A net social loss of $140, because the highest individual valuation ($80) falls far short of $220.",
          "A net social gain of $40, because non-rivalrous benefits sum vertically to $260 against a $220 cost.",
          "A net social loss of $155, because the average shop valuation ($65) is well below the $220 cost.",
          "Zero net social effect, because free-riding eliminates all private marginal benefits to the four shops.",
        ],
        answerIndex: 1,
        hints: [
          "Because the street lamp is non-rivalrous, all four shops enjoy its light simultaneously.",
          "Add all four marginal benefits together and compare the sum to the $220 cost.",
        ],
        explanation:
          "For a non-rivalrous public good, marginal social benefit is the **vertical sum** of individual marginal benefits: {{$60 + $80 + $50 + $70 = $260}}. Comparing {{$260}} to the cost of {{$220}} yields a **net social gain of $40**, even though no single shop would pay $220 alone.",
      },
      {
        id: "2b-market-failure-power-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "An uncongested private toll expressway allows drivers to travel without slowing other motorists down, yet electronic gantries charge every vehicle entering. How is this road best classified?",
        options: [
          "A pure public good, because roads are essential national transport infrastructure.",
          "A common pool resource, because drivers share the same tarmac surface.",
          "A club (toll) good, because it is excludable via gantries yet currently non-rivalrous.",
          "A demerit good, because private operators earn revenue from commuter journeys.",
        ],
        answerIndex: 2,
        hints: [
          "Check excludability first: can non-payers be blocked or billed by the gantry?",
          "Check rivalry next: when traffic flows freely (uncongested), does one extra car reduce road space for others?",
        ],
        explanation:
          "An uncongested toll expressway is **excludable** (gantries charge users) and **non-rivalrous** (one extra car does not slow others), placing it squarely in the **club (toll) good** quadrant. Note that during severe rush-hour gridlock, rivalry sets in and it behaves like a private good.",
      },
      {
        id: "2b-market-failure-power-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "A pharmaceutical company's open-access research spills over to help rival labs develop cheaper clean-energy catalysts without compensation. Which market failure diagram applies?",
        options: [
          "Negative production externality where MSC lies above MPC and the free market overproduces.",
          "Negative consumption externality where MPB lies above MSB and the free market overconsumes.",
          "Positive consumption externality where MSB lies above MPB and consumers underconsume.",
          "Positive production externality where MPC lies above MSC and the free market underproduces.",
        ],
        answerIndex: 3,
        hints: [
          "Ask two questions: is the spillover beneficial or harmful? Does it arise during *production* (research and development) or *consumption*?",
          "When production creates external benefits, true social cost is lower than private cost (MSC < MPC).",
        ],
        explanation:
          "Uncompensated R&D spillovers to other firms are a **positive externality of production**: subtracting the external production benefit makes {{MSC < MPC}}. Because firms consider only {{MPC}}, the market underproduces ({{Q_m < Q^*}}), justifying R&D subsidies or grants.",
      },
      {
        id: "2b-market-failure-power-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "When a government imposes a specific indirect tax on sugary soft drinks (a demerit good), what is the main graphical effect on the negative consumption externality diagram?",
        options: [
          "The private supply curve shifts vertically up from MPC to MPC + tax, raising price and cutting output toward Q*.",
          "The marginal social benefit curve shifts horizontally right until it overlaps with the marginal private benefit curve.",
          "The marginal private benefit curve shifts vertically upward by the tax, expanding consumption beyond Qₘ.",
          "The marginal social cost curve shifts vertically downward, eliminating the external health burden automatically.",
        ],
        answerIndex: 0,
        hints: [
          "Does an indirect excise tax collected from producers shift the supply curve (MPC) or directly change consumer preferences (MPB)?",
          "Trace where the new tax-inclusive supply curve intersects MPB.",
        ],
        explanation:
          "An indirect tax on a demerit good raises firms' per-unit costs, shifting {{MPC}} vertically upward to {{MPC + tax}}. Consumers pay a higher price and cut consumption from {{Q_m}} toward {{Q^*}}, reducing the welfare loss — even though the underlying external harm per drink ({{MPB - MSB}}) itself did not change.",
      },
      {
        id: "2b-market-failure-power-m1-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "For adult vocational courses, {{MPB = 90 - Q}}, {{MSB = 114 - Q}} (constant external benefit of $24 per place), and {{MPC = MSC = 18 + Q}}. What is the deadweight welfare loss in the unregulated free market?",
        options: ["$288", "$144", "$72", "$192"],
        answerIndex: 1,
        hints: [
          "Find {{Q_m}} where {{MPB = MPC}} and {{Q^*}} where {{MSB = MSC}}.",
          "Compute the area of the welfare loss triangle: {{1/2 * (Q^* - Q_m) * MEB}}.",
        ],
        explanation:
          "Free-market output: {{90 - Q = 18 + Q}} → {{2Q = 72}} → {{Q_m = 36}}. Social optimum: {{114 - Q = 18 + Q}} → {{2Q = 96}} → {{Q^* = 48}}. Underallocation is {{48 - 36 = 12}} places and vertical gap {{MEB = $24}}, so welfare loss = {{1/2 * 12 * 24 = $144}}. Omitting {{1/2}} gives $288.",
      },
      {
        id: "2b-market-failure-power-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "Even after a government decides to directly provide a pure public good out of tax revenue, why may allocative inefficiency still persist?",
        options: [
          "Private competitors inevitably enter the market and trigger destructive price wars below marginal cost.",
          "General taxation immediately transforms non-rivalrous goods into rivalrous common pool resources.",
          "Without market price signals, voters may misstate preferences, causing government over- or under-provision.",
          "Direct government provision guarantees that marginal social cost falls permanently to zero.",
        ],
        answerIndex: 2,
        hints: [
          "How does a city council actually know whether residents value a new park at $5 million or $15 million?",
          "Think about information limits and government failure when there are no market prices.",
        ],
        explanation:
          "Because public goods lack market prices, governments must estimate citizens' true willingness to pay through surveys, elections, or cost–benefit studies. Citizens may strategically overstate or understate benefits, leading to **government failure** via over-provision or under-provision, plus the opportunity cost of taxation.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M2: ASYMMETRIC INFO, FIRM COSTS, REVENUES, PC & MONOPOLY (HL)
  // AnswerIndex spread: 0:4, 1:4, 2:3, 3:4
  // ===========================================================================
  {
    id: "2b-market-failure-power-m2",
    title: "Paper M2 · Asymmetric Info, Firm Costs, Perfect Competition & Monopoly (HL)",
    level: "HL",
    questions: [
      {
        id: "2b-market-failure-power-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "After purchasing comprehensive zero-excess car insurance, a driver begins parking in unlit high-theft alleys and driving faster in heavy rain. Which market failure does this illustrate?",
        options: [
          "Adverse selection, because the driver hid poor driving history before buying the policy.",
          "Positive production externality, because faster driving reduces urban traffic congestion.",
          "Free-rider problem, because car insurance is non-excludable and non-rivalrous.",
          "Moral hazard, because insurance alters behaviour toward higher risk after the contract is signed.",
        ],
        answerIndex: 3,
        hints: [
          "Check the timing: did the risky behaviour happen *before* buying insurance or *after* being insured?",
          "Hidden action after a contract is signed is one of the two HL types of asymmetric information.",
        ],
        explanation:
          "**Moral hazard** occurs when one party takes greater risks *after* a transaction because another party (here, the insurer) bears the financial cost of bad outcomes. Requiring deductibles (excesses) and no-claims bonuses aligns incentives to curb moral hazard.",
      },
      {
        id: "2b-market-failure-power-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "In a used-bicycle market with asymmetric information, 30% of bikes are mint-condition units worth $900 to buyers and 70% have hidden frame defects worth $400 to buyers. What is the maximum expected value an uninformed risk-neutral buyer will offer?",
        options: ["$650", "$550", "$490", "$750"],
        answerIndex: 1,
        hints: [
          "Weight each bike's value by its probability of being drawn: {{E(V) = p_H V_H + p_L V_L}}.",
          "Compute {{0.3 * 900 + 0.7 * 400}} carefully.",
        ],
        explanation:
          "An uninformed risk-neutral buyer offers the probability-weighted expected value: {{0.3($900) + 0.7($400) = $270 + $280 = $550}}. Taking a simple unweighted average gives the distractor $650, while swapping the weights gives $750.",
      },
      {
        id: "2b-market-failure-power-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "public-goods-asymmetric-info",
        question:
          "Which pair correctly matches an example of **signalling** followed by an example of **screening** in markets with asymmetric information?",
        options: [
          "A certified dealership offering a 3-year powertrain warranty; an insurer requiring a pre-policy medical exam.",
          "A bank running credit-score checks on loan applicants; an applicant hiding prior loan defaults from the bank.",
          "A government setting minimum restaurant hygiene laws; a consumer reading online restaurant reviews.",
          "An employer administering a coding aptitude test; a car buyer demanding a lower price for every used vehicle.",
        ],
        answerIndex: 0,
        hints: [
          "Who acts in **signalling** — the *informed* side or the *uninformed* side?",
          "Who acts in **screening** — the *uninformed* side testing or filtering the informed side?",
        ],
        explanation:
          "**Signalling** is initiated by the *informed* party to credibly reveal high quality (a dealer's 3-year warranty is too costly for a lemon seller to mimic). **Screening** is initiated by the *uninformed* party to uncover hidden traits (an insurer's medical exam separates low-risk from high-risk buyers).",
      },
      {
        id: "2b-market-failure-power-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "Why does a firm's short-run marginal cost (MC) curve eventually slope upward as output expands?",
        options: [
          "Long-run diseconomies of scale raise managerial bureaucracy across all newly built factories.",
          "Average fixed costs rise steadily as total fixed rent is divided over larger production volumes.",
          "The law of diminishing marginal returns causes each extra worker to add less output to fixed capital.",
          "Falling market prices force the firm to spend more per unit on raw materials and packaging.",
        ],
        answerIndex: 2,
        hints: [
          "In the *short run*, at least one input (like factory floor space or machines) is fixed.",
          "Connect falling Marginal Product (MP) directly to rising Marginal Cost (MC).",
        ],
        explanation:
          "In the short run, adding variable labour to fixed capital eventually causes **diminishing marginal returns** (falling {{MP}}). Because each extra worker earns the same wage yet adds fewer extra units, the cost per additional unit ({{MC = w / MP}}) rises steeply. Diseconomies of scale apply only in the **long run**.",
      },
      {
        id: "2b-market-failure-power-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "Which mathematical relationship between marginal cost (MC) and average total cost (AC) is ALWAYS true for a standard U-shaped cost curve?",
        options: [
          "Whenever MC is rising, AC must also be rising at the exact same output level.",
          "Whenever MC exceeds AC, AC is falling toward its long-run minimum point.",
          "MC cuts AC to the left of AC's minimum point because fixed costs decline continuously.",
          "Whenever MC lies below AC, AC is falling, and MC intersects AC precisely at AC's minimum.",
        ],
        answerIndex: 3,
        hints: [
          "Think of your test average: if your next test score (marginal) is lower than your current average, does your average rise or fall?",
          "What happens the exact instant marginal equals average?",
        ],
        explanation:
          "Just like exam scores, whenever the marginal cost of an extra unit is **below** current average cost ({{MC < AC}}), producing it pulls {{AC}} downward; whenever {{MC > AC}}, it pulls {{AC}} upward. Therefore {{MC}} must intersect {{AC}} (and {{AVC}}) at its exact **minimum point**.",
      },
      {
        id: "2b-market-failure-power-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "A workshop has total fixed cost of $200. At 10 units of output, total variable cost is $450. When output rises to 11 units, total cost becomes $715. What are AC at 10 units and MC of the 11th unit?",
        options: [
          "AC at 10 units = $65; MC of the 11th unit = $65.",
          "AC at 10 units = $45; MC of the 11th unit = $65.",
          "AC at 10 units = $65; MC of the 11th unit = $265.",
          "AC at 10 units = $45; MC of the 11th unit = $71.50.",
        ],
        answerIndex: 0,
        hints: [
          "First find total cost at 10 units: {{TC = TFC + TVC}}.",
          "Then compute {{AC = TC / Q}} at 10 units and {{MC = TC(11) - TC(10)}}.",
        ],
        explanation:
          "At {{Q = 10}}, {{TC = $200 + $450 = $650}}, giving {{AC = $650 / 10 = $65}} (using {{TVC}} alone gives {{AVC = $45}}, a classic slip). Increasing output from 10 to 11 raises {{TC}} from $650 to $715, so {{MC = $715 - $650 = $65}}.",
      },
      {
        id: "2b-market-failure-power-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "Why does a monopolist's marginal revenue (MR) curve lie strictly below its downward-sloping demand (AR) curve for every positive quantity?",
        options: [
          "Higher output raises fixed production costs, which are subtracted directly from marginal revenue.",
          "To sell an extra unit, the firm must cut price not only on that unit but on all earlier units too.",
          "A monopolist faces a perfectly price-elastic demand curve that forces price equal to marginal cost.",
          "Total revenue falls continuously from the very first unit sold whenever demand slopes downward.",
        ],
        answerIndex: 1,
        hints: [
          "Assuming a single uniform price, what happens to the price charged to existing customers when you cut price to attract one more buyer?",
          "Compare the revenue gained on the extra unit with the revenue lost on earlier units.",
        ],
        explanation:
          "Without price discrimination, cutting price to sell one more unit reduces revenue on all infra-marginal (earlier) units already being sold. Thus the net revenue gained ({{MR}}) is strictly less than the price received for the extra unit ({{P = AR}}).",
      },
      {
        id: "2b-market-failure-power-m2-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "A firm with downward-sloping linear demand decides to switch its objective from **profit maximization** to **total revenue maximization**. Which output rule should it now follow?",
        options: [
          "Produce where price equals average total cost ({{P = AC}}).",
          "Produce where marginal cost equals average total cost ({{MC = AC}}).",
          "Produce where price equals marginal cost ({{P = MC}}).",
          "Produce where marginal revenue equals zero ({{MR = 0}}).",
        ],
        answerIndex: 3,
        hints: [
          "As long as selling one extra unit adds positive revenue ({{MR > 0}}), total revenue keeps climbing.",
          "Where does total revenue stop rising and reach its peak?",
        ],
        explanation:
          "Total revenue increases while {{MR > 0}} and falls once {{MR < 0}}, so {{TR}} reaches its maximum precisely where **{{MR = 0}}** (which also corresponds to unit price elasticity, {{|PED| = 1}}). By contrast, {{P = AC}} corresponds to sales maximization subject to normal profit.",
      },
      {
        id: "2b-market-failure-power-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "A price-making software firm faces linear inverse demand {{P = 80 - 3Q}}. What is its marginal revenue (MR) at {{Q = 10}} units?",
        options: ["$50", "$35", "$20", "$30"],
        answerIndex: 2,
        hints: [
          "For any linear inverse demand {{P = a - bQ}}, the marginal revenue curve has the same vertical intercept and twice the slope: {{MR = a - 2bQ}}.",
          "Substitute {{Q = 10}} into {{MR = 80 - 6Q}}.",
        ],
        explanation:
          "With {{P = 80 - 3Q}}, {{TR = 80Q - 3Q^2}} and {{MR = 80 - 6Q}}. At {{Q = 10}}, {{MR = 80 - 6(10) = $20}}. Plugging {{Q = 10}} into the demand curve instead gives average revenue {{P = $50}}, not marginal revenue.",
      },
      {
        id: "2b-market-failure-power-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "In the long run, how does a perfectly competitive industry adjust if existing firms are initially earning abnormal (supernormal) profit?",
        options: [
          "New firms enter freely, shifting industry supply right and lowering market price until only normal profit remains.",
          "Existing firms restrict output to protect high prices, keeping abnormal profits intact permanently.",
          "Industry demand shifts steadily leftward as consumers refuse to buy homogeneous goods at high prices.",
          "Firms merge into larger plants to raise barriers to entry until price rises above marginal cost.",
        ],
        answerIndex: 0,
        hints: [
          "What attracts outside entrepreneurs when existing firms earn abnormal profit and barriers to entry are zero?",
          "Trace what happens to industry supply and the horizontal price line faced by each firm.",
        ],
        explanation:
          "Zero barriers to entry allow new firms to enter in pursuit of abnormal profit. Industry supply shifts right, driving market equilibrium price down until every firm's horizontal {{P = AR = MR}} line touches the minimum of {{AC}}, restoring **normal profit** ({{P = MC = min AC}}).",
      },
      {
        id: "2b-market-failure-power-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "At its {{MC = MR}} output of 50 units, a perfectly competitive firm sells at market price $14, with total fixed cost $500 and total variable cost $600. What is its optimal short-run decision?",
        options: [
          "Shut down immediately, because making any economic loss is worse than earning zero revenue.",
          "Continue operating in the short run, because P ($14) exceeds AVC ($12), trimming its loss to $400.",
          "Shut down immediately, because total cost ($1,100) exceeds total revenue ($700) by $400.",
          "Continue operating indefinitely in both short and long run, because it earns $100 of abnormal profit.",
        ],
        answerIndex: 1,
        hints: [
          "Calculate {{AVC = TVC / Q}} and compare it with market price {{P = $14}}.",
          "Compare total loss if operating ({{TR - TC}}) against total loss if shutting down ({{-TFC}}).",
        ],
        explanation:
          "Here {{AVC = $600 / 50 = $12}} and {{AC = $1,100 / 50 = $22}}. Operating yields {{TR = $700}}, covering all $600 of variable cost plus $100 toward fixed cost — limiting the short-run loss to **$400**, which beats shutting down and losing the full **$500** fixed cost.",
      },
      {
        id: "2b-market-failure-power-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "Which statement accurately explains why a **natural monopoly** (such as a municipal water-pipe network) creates a policy dilemma for regulators?",
        options: [
          "Minimum efficient scale occurs at very low output, so small firms always achieve lower average costs.",
          "Marginal cost lies far above average cost everywhere, causing huge profits under marginal-cost pricing.",
          "Consumers have perfectly elastic demand for tap water, making any price regulation completely unnecessary.",
          "Because LRAC falls across total market demand, MC lies below AC, so setting P = MC forces the firm into a loss.",
        ],
        answerIndex: 3,
        hints: [
          "When average cost is falling everywhere, must marginal cost sit *above* or *below* average cost?",
          "Check whether the firm breaks even if regulators require allocatively efficient pricing ({{P = MC}}).",
        ],
        explanation:
          "In a natural monopoly, huge fixed infrastructure costs make {{LRAC}} decline throughout the entire relevant range of market demand, which implies {{MC < AC}} everywhere. Forcing allocative efficiency ({{P = MC}}) leaves {{P < AC}}, requiring a **government subsidy** — or else regulators must settle for **fair-return pricing ({{P = AC}})**.",
      },
      {
        id: "2b-market-failure-power-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "In comparing long-run equilibrium in perfect competition with a profit-maximising monopoly (assuming identical cost curves), which outcome holds?",
        options: [
          "Perfect competition achieves both allocative and productive efficiency; monopoly charges a higher price and restricts output.",
          "Monopoly achieves productive efficiency via abnormal profits, while perfect competition suffers permanent deadweight loss.",
          "Both structures set price equal to marginal cost, but monopoly produces a larger quantity due to market power.",
          "Perfect competition earns persistent abnormal profit, whereas monopoly always breaks even at normal profit.",
        ],
        answerIndex: 0,
        hints: [
          "Compare {{P = MC = min AC}} in long-run perfect competition against {{P_m > MC}} and {{Q_m < Q_{pc}}} in monopoly.",
          "Check both allocative efficiency ({{P = MC}}) and productive efficiency (producing at minimum {{AC}}).",
        ],
        explanation:
          "Long-run perfect competition satisfies **allocative efficiency** ({{P = MC}}) and **productive efficiency** (minimum {{AC}}) at normal profit. Assuming the same cost curves, a profit-maximising monopoly restricts output to {{MC = MR}}, charges {{P_m > MC}}, earns abnormal profit, and creates deadweight loss.",
      },
      {
        id: "2b-market-failure-power-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "A monopolist faces linear inverse demand {{P = 60 - Q}} (so {{MR = 60 - 2Q}}), constant marginal cost {{MC = $12}}, and fixed cost {{TFC = $200}}. What is the deadweight welfare loss created by this monopoly compared with perfect competition?",
        options: ["$576", "$376", "$288", "$144"],
        answerIndex: 2,
        hints: [
          "Find monopoly output {{Q_m}} (set {{MC = MR}}) and monopoly price {{P_m}} (substitute {{Q_m}} into demand).",
          "Find competitive output {{Q_{pc}}} (set {{P = MC}}), then compute {{DWL = 1/2 * (P_m - MC) * (Q_{pc} - Q_m)}}.",
        ],
        explanation:
          "Monopoly sets {{60 - 2Q = 12}} → {{Q_m = 24}} and charges {{P_m = 60 - 24 = $36}}. Competitive output sets {{60 - Q = 12}} → {{Q_{pc} = 48}}. Therefore {{DWL = 1/2 * (36 - 12) * (48 - 24) = 1/2 * 24 * 24 = $288}}. Note $376 is the monopolist's abnormal profit, while $576 omits the {{1/2}}.",
      },
      {
        id: "2b-market-failure-power-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "Under what economic argument (associated with Joseph Schumpeter) might a large monopoly deliver greater long-term consumer welfare than atomistic perfect competition?",
        options: [
          "Monopolists always voluntarily set prices equal to marginal cost to maximise community surplus.",
          "Persistent abnormal profits and scale provide both the funds and patent incentives for breakthrough R&D (dynamic efficiency).",
          "Monopolists cannot experience X-inefficiency because zero competition forces strict internal cost discipline.",
          "Monopolies automatically eliminate asymmetric information and negative production externalities in every market.",
        ],
        answerIndex: 1,
        hints: [
          "Compare *static* efficiency today with *dynamic* efficiency over time through innovation.",
          "Could tiny firms earning only normal profit afford billion-dollar vaccine or semiconductor R&D labs?",
        ],
        explanation:
          "Schumpeter argued that **dynamic efficiency** (product and process innovation over time) often requires the financial reserves of abnormal profits and temporary patent protection — allowing large firms to fund high-risk R&D that tiny perfectly competitive firms earning only normal profit could never undertake.",
      },
    ],
  },

  // ===========================================================================
  // PAPER M3: MONOPOLISTIC COMP, OLIGOPOLY, GAME THEORY & EQUITY (HL + SYNTHESIS)
  // AnswerIndex spread: 0:3, 1:4, 2:4, 3:4
  // ===========================================================================
  {
    id: "2b-market-failure-power-m3",
    title: "Paper M3 · Monopolistic Competition, Oligopoly, Game Theory & Equity (HL)",
    level: "HL",
    questions: [
      {
        id: "2b-market-failure-power-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Which key structural difference separates **monopolistic competition** from **perfect competition**?",
        options: [
          "Monopolistic competition features insurmountable barriers to entry and only two dominant suppliers.",
          "Firms in monopolistic competition earn guaranteed abnormal profits in the long run.",
          "Firms in monopolistic competition sell differentiated products, giving each a downward-sloping demand curve.",
          "Firms in monopolistic competition act as pure price takers facing a horizontal marginal revenue curve.",
        ],
        answerIndex: 2,
        hints: [
          "Both structures have many firms and low barriers to entry — so what gives a local café limited price-setting power?",
          "Contrast homogeneous wheat with branded artisan coffee.",
        ],
        explanation:
          "Both markets have many firms and low barriers, but firms in **monopolistic competition** sell **differentiated products** (brand, taste, location, design). Differentiation gives each firm modest market power and a downward-sloping, fairly elastic {{D = AR}} curve.",
      },
      {
        id: "2b-market-failure-power-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "In long-run equilibrium under monopolistic competition, why does a firm display **excess capacity**?",
        options: [
          "Because the firm produces strictly to the right of minimum AC, suffering severe diseconomies of scale.",
          "Because high barriers to entry allow the firm to earn permanent abnormal profits well above AC.",
          "Because the firm sets price below average variable cost to deter new entrants from opening nearby.",
          "Because the downward-sloping D = AR curve is tangent to the falling section of AC, so Qₘc < Q at min AC.",
        ],
        answerIndex: 3,
        hints: [
          "Can a downward-sloping straight line ever be tangent to the exact bottom (horizontal tangent) of a U-shaped curve?",
          "Compare the tangency output {{Q_{mc}}} with the productively efficient output at minimum {{AC}}.",
        ],
        explanation:
          "Because {{D = AR}} slopes downward, its point of tangency with U-shaped {{AC}} (normal profit, {{P = AC}}) MUST occur on the **downward-sloping** flank of {{AC}}, to the left of minimum {{AC}}. The gap {{Q_{min AC} - Q_{mc}}} is **excess capacity** — the price society pays for product variety.",
      },
      {
        id: "2b-market-failure-power-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "How does a firm's demand curve in monopolistic competition adjust in the long run if incumbents initially earn abnormal profit?",
        options: [
          "Existing firms leave the industry, shifting each remaining firm's demand curve rightward and steeper.",
          "New rivals enter with close substitutes, shifting each incumbent's demand curve left until tangent to AC.",
          "Barriers to entry tighten automatically, lifting each incumbent's demand curve further above AC.",
          "Each firm's demand curve turns perfectly horizontal as product differentiation disappears overnight.",
        ],
        answerIndex: 1,
        hints: [
          "Low barriers to entry allow new cafés or boutiques to open whenever incumbents earn abnormal profit.",
          "When more close substitutes compete for the same shoppers, what happens to an existing firm's share of demand?",
        ],
        explanation:
          "Abnormal profit attracts new entrants offering close substitutes. Each incumbent loses some customers, shifting its {{D = AR}} curve **leftward** (and making it slightly flatter/more elastic) until {{D = AR}} is just tangent to {{AC}}, eliminating abnormal profit.",
      },
      {
        id: "2b-market-failure-power-m3-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "In a telecommunications market with total annual revenue of $400 million, the five largest operators earn $110m, $82m, $64m, $44m, and $36m. What is the 4-firm concentration ratio ({{CR_4}})?",
        options: ["75%", "84%", "64%", "69%"],
        answerIndex: 0,
        hints: [
          "Sum the revenues of the **four** largest firms only (exclude the 5th firm!).",
          "Divide that sum by total industry revenue ($400m) and multiply by 100.",
        ],
        explanation:
          "Top four revenues sum to {{110 + 82 + 64 + 44 = $300}} million. Therefore {{CR_4 = (300 / 400) * 100 = 75%}}, indicating a highly concentrated oligopoly. Including the 5th firm gives {{CR_5 = 84%}}; using only the top 3 gives {{CR_3 = 64%}}.",
      },
      {
        id: "2b-market-failure-power-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "What distinguishes **tacit (informal) collusion** from a **formal cartel** in an oligopoly?",
        options: [
          "Tacit collusion always reduces prices to marginal cost, whereas cartels raise prices above marginal cost.",
          "Formal cartels are always legal under antitrust law, whereas tacit collusion carries automatic criminal fines.",
          "Tacit collusion coordinates behaviour without explicit agreements (e.g. price leadership), making it harder to prosecute.",
          "Formal cartels occur only in monopolistic competition, whereas tacit collusion occurs only in pure monopolies.",
        ],
        answerIndex: 2,
        hints: [
          "Think about the paper trail (emails, secret meetings, written quotas) vs unspoken parallel pricing.",
          "Why do competition authorities struggle more to prosecute price leadership than formal price-fixing rings?",
        ],
        explanation:
          "**Formal collusion (cartels)** involves explicit agreements on prices or output quotas (illegal in most jurisdictions). **Tacit collusion** achieves similar high prices without explicit communication — for example via **dominant-firm price leadership** — making legal proof of conspiracy far harder.",
      },
      {
        id: "2b-market-failure-power-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Why do non-collusive oligopolists often display **price rigidity** and compete fiercely through branding, loyalty apps, and product features instead of cutting prices?",
        options: [
          "Advertising is always free for dominant firms, whereas lowering prices incurs government antitrust penalties.",
          "Oligopolists cannot observe rival prices, so they set prices randomly without considering competitor reactions.",
          "Consumers in oligopolistic markets ignore prices completely and respond solely to television commercials.",
          "Firms fear price cuts will be matched immediately, triggering a destructive price war that slashes industry profits.",
        ],
        answerIndex: 3,
        hints: [
          "Think about mutual interdependence: what happens if Airline A cuts its Singapore–Sydney fare by 20%?",
          "Contrast the permanence of a retaliatory price war with the stickiness of brand loyalty.",
        ],
        explanation:
          "Because of **mutual interdependence**, a unilateral price cut is quickly matched by rivals, eroding everyone's profit margin without expanding market share — whereas a price hike goes unmatched and loses customers. Oligopolists therefore keep prices relatively stable and battle via **non-price competition**.",
      },
      {
        id: "2b-market-failure-power-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Two duopolists, Firm X and Firm Y, decide simultaneously whether to **Advertise** or **Not Advertise**. Payoffs (Firm X, Firm Y) in $ million are: (Advertise, Advertise) = (45, 45); (Advertise, Don't) = (80, 20); (Don't, Advertise) = (20, 80); (Don't, Don't) = (65, 65). What is the unique Nash equilibrium?",
        options: [
          "(Don't, Don't) with payoffs ($65m, $65m), because combined industry profit is highest at $130m.",
          "(Advertise, Advertise) with payoffs ($45m, $45m), because Advertise is a strictly dominant strategy for both.",
          "(Advertise, Don't) with payoffs ($80m, $20m), because Firm X earns the single highest individual payoff.",
          "No Nash equilibrium exists, because both firms prefer different outcomes depending on rival spending.",
        ],
        answerIndex: 1,
        hints: [
          "Check Firm X's best response if Firm Y advertises (45 vs 20), then if Firm Y does not advertise (80 vs 65).",
          "Check Firm Y symmetrically: can either firm gain by unilaterally switching away from (Advertise, Advertise)?",
        ],
        explanation:
          "Whether its rival advertises ({{45 > 20}}) or does not ({{80 > 65}}), **Advertise** yields a higher payoff — making it a strictly dominant strategy for BOTH firms. Thus **(Advertise, Advertise)** at **($45m, $45m)** is the unique Nash equilibrium, even though mutual restraint would pay $65m each.",
      },
      {
        id: "2b-market-failure-power-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Using Prisoner's Dilemma logic, why do competition authorities offer **leniency (whistleblower) programmes** that waive fines for the first cartel member to confess?",
        options: [
          "Leniency legally converts illegal private cartels into regulated state-owned natural monopolies.",
          "Leniency raises the joint collusive profit earned by loyal cartel members who keep prices high.",
          "Leniency boosts the payoff from defecting and raises the penalty of staying silent, destabilising cartel trust.",
          "Leniency eliminates barriers to entry instantly by subsidising small start-up competitors.",
        ],
        answerIndex: 2,
        hints: [
          "Think about how a payoff matrix changes when confessing avoids a giant fine while staying quiet risks huge penalties if your rival confesses first.",
          "Does leniency strengthen or weaken the temptation to defect from a cartel?",
        ],
        explanation:
          "Leniency programmes directly weaponise the **Prisoner's Dilemma** against cartels: confessing first grants immunity (raising the defection payoff) while staying loyal risks massive fines if a rival blows the whistle first — turning defection into the dominant strategy and shattering cartel stability.",
      },
      {
        id: "2b-market-failure-power-m3-q09",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Which statement best distinguishes **equity** from **equality** in IB Economics (Unit 2.12)?",
        options: [
          "Equity is a normative concept of fairness, whereas equality is a positive, measurable sameness of outcomes.",
          "Equity means everyone receives identical income, whereas equality allows uneven incomes based on effort.",
          "Equity can be measured strictly with concentration ratios, whereas equality applies only to public goods.",
          "Equity is achieved automatically by competitive markets, whereas equality always causes negative externalities.",
        ],
        answerIndex: 0,
        hints: [
          "Recall positive vs normative statements from Unit 1: which word involves value judgements about fairness?",
          "Can a society consider some unequal pay *fair* (equitable) if it reflects harder training or risk?",
        ],
        explanation:
          "**Equality** is an objective, measurable state where everyone receives identical shares; **equity** is a **normative** concept rooted in fairness (which may judge progressive support for disadvantaged groups fair even when outcomes are not strictly identical).",
      },
      {
        id: "2b-market-failure-power-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Why does even a perfectly competitive free market fail to guarantee an **equitable** distribution of goods and services?",
        options: [
          "Perfectly competitive firms charge prices far above marginal cost, capturing monopoly rents.",
          "Perfect competition suffers from chronic excess capacity and wasteful brand advertising.",
          "Free markets prohibit governments from collecting statistics on household wealth and wages.",
          "Markets allocate goods strictly by effective demand ('dollar votes'), reflecting unequal initial wealth and endowments.",
        ],
        answerIndex: 3,
        hints: [
          "Ask: who gets goods in a price-mechanism allocation — those with the greatest *need* or those with willingness AND *ability to pay*?",
          "Consider households born without land, financial wealth, or access to quality education.",
        ],
        explanation:
          "The price mechanism responds only to **effective demand** (willingness backed by ability to pay). Because households begin with starkly unequal factor endowments (wealth, inheritance, education, health), even allocatively efficient free markets can leave low-income families unable to afford essentials.",
      },
      {
        id: "2b-market-failure-power-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "How does unregulated monopoly power specifically worsen **inequity** in an economy?",
        options: [
          "Monopolies always pay workers wages far above the competitive market rate across all skill levels.",
          "Charging P > MC transfers consumer surplus from buyers — disproportionately hurting lower-income households — to wealthier owners.",
          "Monopolies expand output beyond the social optimum, forcing low-income households to overconsume necessities.",
          "Monopolies eliminate shareholder dividends by earning only normal profit in the long run.",
        ],
        answerIndex: 1,
        hints: [
          "Who pays the higher monopoly price {{P_m}}, and who receives the resulting abnormal profit rectangle?",
          "Consider the distributional impact when a monopoly sells essential medicines, broadband, or utilities.",
        ],
        explanation:
          "By setting {{P_m > MC}}, a monopolist converts part of **consumer surplus** into **abnormal profit**. Because lower-income buyers spend a larger share of income on essentials while corporate equity is predominantly held by higher-income households, monopoly pricing widens income and wealth inequality.",
      },
      {
        id: "2b-market-failure-power-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "costs-revenues-perfect-monopoly-hl",
        question:
          "A dominant firm faces inverse demand {{P = 100 - 2Q}} (so {{MR = 100 - 4Q}}) and constant {{MC = $20}}. Compared with profit maximization ({{MC = MR}}), how do output and price change if managers switch to **revenue maximization** ({{MR = 0}})?",
        options: [
          "Output falls by 5 units (from 20 to 15) and price rises by $10 (from $60 to $70).",
          "Output doubles (from 20 to 40) and price falls by $40 (from $60 to $20).",
          "Output rises by 5 units (from 20 to 25) and price falls by $10 (from $60 to $50).",
          "Output rises by 10 units (from 20 to 30) and price falls by $20 (from $60 to $40).",
        ],
        answerIndex: 2,
        hints: [
          "Solve {{MC = MR}} ({{20 = 100 - 4Q}}) for profit-maximising output and substitute into {{P = 100 - 2Q}}.",
          "Now solve {{MR = 0}} ({{100 - 4Q = 0}}) for revenue-maximising output and compute the new price.",
        ],
        explanation:
          "Profit maximization: {{100 - 4Q = 20}} → {{Q = 20}}, {{P = 100 - 40 = $60}}. Revenue maximization: {{100 - 4Q = 0}} → {{Q = 25}}, {{P = 100 - 50 = $50}}. Thus output increases by **5 units** and price falls by **$10** (notice {{Q = 40}}, {{P = $20}} is the competitive {{P = MC}} outcome, not revenue maximization).",
      },
      {
        id: "2b-market-failure-power-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Why might a competition authority (such as Singapore's CCCS or the UK CMA) occasionally **approve** a horizontal merger between two medium-sized firms even though it raises {{CR_4}} slightly?",
        options: [
          "Antitrust laws forbid regulators from reviewing horizontal mergers unless {{CR_4}} already equals 100%.",
          "Higher concentration ratios automatically eliminate all forms of tacit collusion and price rigidity.",
          "Mergers always guarantee that the combined firm sets price equal to marginal cost in the long run.",
          "Substantial internal economies of scale or R&D synergies could lower LRAC enough to benefit consumers and rival a dominant leader.",
        ],
        answerIndex: 3,
        hints: [
          "Think about the classic IB evaluation trade-off between static market power and cost-reducing economies of scale.",
          "Could two smaller rivals merging create a stronger challenger against a dominant market leader?",
        ],
        explanation:
          "Regulators weigh higher market concentration against **efficiency defences**: if two mid-sized rivals merge to reach Minimum Efficient Scale, lower {{LRAC}}, fund joint R&D, and more effectively challenge a dominant incumbent, consumer prices and innovation may actually improve.",
      },
      {
        id: "2b-market-failure-power-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        guideRef: "externalities-common-pool",
        question:
          "A government introduces a per-unit carbon tax on domestic steelmakers, yet global carbon emissions barely decline because steel buyers switch to cheaper untaxed imports from loosely regulated countries. Which evaluation point does this illustrate?",
        options: [
          "Carbon leakage undermining unilateral domestic Pigouvian policies without international coordination or border carbon adjustments.",
          "The free-rider problem of pure public goods eliminating all private demand for steel products.",
          "Moral hazard encouraging domestic steelmakers to expand coal combustion to earn higher tax rebates.",
          "Adverse selection causing low-pollution steel mills to conceal their production costs from customs officers.",
        ],
        answerIndex: 0,
        hints: [
          "What happens to global emissions when a strict national carbon price simply shifts polluting production across a border?",
          "Consider why the EU launched its Carbon Border Adjustment Mechanism (CBAM).",
        ],
        explanation:
          "**Carbon leakage** occurs when unilateral domestic carbon pricing drives production (and emissions) to countries with weaker climate policies — a high-scoring IB evaluation point showing why international agreements or border carbon adjustments (like the EU CBAM) are often needed alongside domestic taxes.",
      },
      {
        id: "2b-market-failure-power-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        guideRef: "monopolistic-oligopoly-equity-hl",
        question:
          "Which market-structure comparison is **completely accurate** regarding long-run abnormal profit and allocative efficiency?",
        options: [
          "Both monopolistic competition and monopoly earn long-run abnormal profit and fail allocative efficiency.",
          "Neither perfect competition nor monopolistic competition earns long-run abnormal profit, yet only perfect competition is allocatively efficient.",
          "Both perfect competition and oligopoly achieve allocative efficiency in the long run because barriers to entry are low.",
          "Only monopolistic competition achieves productive efficiency in the long run, whereas perfect competition carries excess capacity.",
        ],
        answerIndex: 1,
        hints: [
          "Check which two structures have *low/zero barriers to entry*, eliminating long-run abnormal profit.",
          "Now check which of those two sets {{P = MC}} vs {{P > MC}}.",
        ],
        explanation:
          "Both **perfect competition** and **monopolistic competition** have low/no entry barriers, driving long-run economic profit to **normal profit**. However, only **perfect competition** achieves allocative efficiency ({{P = MC}}) and productive efficiency (min {{AC}}), because product differentiation in monopolistic competition leaves {{P > MC}} and excess capacity.",
      },
    ],
  },
];
