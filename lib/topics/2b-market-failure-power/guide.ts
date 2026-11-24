import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "2b-market-failure-power",
  title: "Unit 2B: Market Failure, Market Power & Equity",
  strand: "Unit 2: Microeconomics",
  icon: "🏭",
  level: "SL",
  summary:
    "When the invisible hand stumbles: externalities, common pool resources, public goods, asymmetric information [HL], firm costs, perfect competition, monopoly, monopolistic competition, oligopoly game theory [HL], and why free markets cannot achieve equity.",
  intro:
    "In Unit 2A, a competitive price mechanism magically maximised community surplus where demand met supply. Real-world markets rarely behave so tidily. Factories emit greenhouse gases that never appear on their invoices, street lights invite free-riders, used-car buyers fear hidden defects, tech giants erect towering barriers to entry, and low-income families lack the 'dollar votes' to buy vital healthcare. Unit 2B equips you to diagnose **market failure**, analyse **market power [HL]**, and evaluate government and community policies with sharp diagrams and IB Diploma precision.",

  guide: [
    // =========================================================================
    // SECTION 1: 2.8 EXTERNALITIES & COMMON POOL RESOURCES (SL)
    // =========================================================================
    {
      id: "externalities-common-pool",
      heading: "2.8 Externalities & Common Pool Resources",
      level: "SL",
      discovery: {
        problem:
          "A coal-fired power station generates electricity at a private marginal cost of $60 per MWh and sells it to willing consumers at $60 per MWh. However, every MWh also creates $25 of respiratory health damage and carbon emissions borne by nearby residents who neither own the plant nor buy the extra electricity. Should the last MWh have been produced, and what happens to society's net welfare if output falls slightly?",
        idea:
          "The last MWh gave consumers **$60** of marginal benefit, yet cost society **$60 + $25 = $85** in total resources and health damage — a net social loss of **$25**! Cutting back that unit *increases* social welfare. Whenever an unpriced spillover hits third parties, private decisions (`MPC = MPB`) miss the social optimum (`MSC = MSB`), leaving a **deadweight welfare loss triangle** whose tip always points toward the socially optimal output `Q*`.",
      },
      body: `**Market failure** occurs whenever the free market fails to allocate scarce resources efficiently — meaning society does **not** produce where **Marginal Social Benefit equals Marginal Social Cost ({{MSB = MSC}})**.

### The Four Types of Externalities
An **externality** is a spillover cost or benefit imposed on an uncompensated **third party** outside the market transaction. Every externality splits a private curve from a social curve:

| Type | Curve Split | Market vs Optimum | Classic Examples |
|---|---|---|---|
| **Negative Production** | {{MSC > MPC}} (external cost = {{MEC}}) | **Overproduction** ({{Q_m > Q*}}) | Coal power, chemical river pollution, slash-and-burn palm oil haze |
| **Negative Consumption** | {{MPB > MSB}} (demerit goods) | **Overconsumption** ({{Q_m > Q*}}) | Cigarettes (passive smoking), sugary drinks, petrol cars (congestion & smog) |
| **Positive Production** | {{MPC > MSC}} (external benefit) | **Underproduction** ({{Q_m < Q*}}) | Clean-tech R&D spillovers, firm-funded worker training, urban beekeeping |
| **Positive Consumption** | {{MSB > MPB}} (merit goods) | **Underconsumption** ({{Q_m < Q*}}) | Vaccinations (herd immunity), education, preventative healthcare, public rail |

- **Demerit goods** are goods considered undesirable for consumers and society (often due to negative consumption externalities and imperfect information about long-term harm), so free markets **over-allocate** resources to them.
- **Merit goods** are goods considered desirable for consumers and society (creating positive consumption externalities), yet consumers underestimate their long-run value or lack ability to pay, so free markets **under-allocate** resources to them.

### Drawing & Reading Welfare Loss Triangles
On every IB externality diagram, the shaded **welfare loss (deadweight loss) triangle** follows one unbreakable geometric rule:
1. Start at the **free-market output** {{Q_m}} (where {{MPC = MPB}}).
2. Measure the vertical gap between the **social** curve and the **private** curve at {{Q_m}} — that vertical segment is the base of the triangle.
3. Connect both ends to the **socially optimal equilibrium** ({{Q^*}}, where {{MSC = MSB}}). The arrowhead of the triangle **always points toward {{Q^*}}**!

### Government Policy Responses to Externalities
- **Pigouvian / Indirect Taxes & Carbon Taxes**: Imposing a per-unit tax equal to marginal external cost ({{t = MEC}} at {{Q^*}}) shifts {{MPC}} vertically up to {{MSC}}, **internalising the externality**. Generates government revenue (a "double dividend" if recycled into green subsidies or lump-sum rebates for low-income households). *Limitation*: hard to measure exact monetary value of external harm; if demand is price-inelastic (e.g. petrol or cigarettes), quantity drops only slightly while regressive burdens hit poorer households.
- **Cap-and-Trade (Tradable Pollution Permits)**: Government caps total emissions at the socially optimal level and issues or auctions permits (e.g. the **EU Emissions Trading System**). Low-abatement-cost firms cut emissions and sell spare permits to high-cost firms, achieving the target at minimum total cost. *Limitation*: setting the cap too generously collapses permit prices; risk of **carbon leakage** as firms relocate to loosely regulated countries.
- **Per-Unit Subsidies (for positive externalities)**: Shifting {{MPC}} downwards lowers price and expands output from {{Q_m}} toward {{Q^*}}. *Limitation*: high opportunity cost to the government budget; subsidy capture by producers if supply is inelastic.
- **Legislation, Standards & Bans**: Mandating catalytic converters, indoor smoking bans, or compulsory schooling. Simple and certain, but offers zero incentive to cut pollution *below* the legal limit and carries monitoring costs.
- **Education, Advertising & Behavioural Nudges**: Shifting {{MPB}} left for demerit goods (graphic cigarette warnings) or right for merit goods (vaccination drives). Works best in the long run alongside price incentives.

### Common Pool Resources (CPRs) & Sustainability
**Common pool resources** are **rivalrous** (one person's catch leaves fewer fish for others) and **non-excludable** (hard or costly to fence off access) — examples include open-ocean tuna fisheries, shared groundwater aquifers, public grazing land, tropical rainforests, and the Earth's atmosphere.

Because individuals capture 100% of the benefit of taking another unit while sharing the depletion cost across everyone, rational self-interest triggers the **Tragedy of the Commons** (Garrett Hardin, 1968): overexploitation, degradation, and a direct threat to **environmental sustainability**.

Standard textbooks once claimed only two escapes existed: **privatisation** (creating property rights) or **top-down state regulation** (quotas, carbon taxes, permits). Nobel laureate **Elinor Ostrom** disproved this false binary by studying hundreds of real fisheries, forests, and irrigation systems worldwide, showing that local communities can sustainably manage CPRs through **collective self-governance** — defined boundaries, participatory local rules, peer monitoring, graduated sanctions for rule-breakers, and low-cost conflict resolution.`,
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Negative externality of production diagram showing MPC, MSC, MSB equals MPB, overproduction from Q star to Q m, and the welfare loss triangle pointing to Q star">
  <rect width="460" height="300" fill="#ffffff"/>
  <defs>
    <marker id="arr-b" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
    <marker id="arr-r" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="65" y1="255" x2="425" y2="255" stroke="#334155" stroke-width="2" marker-end="url(#arr-b)"/>
  <line x1="65" y1="255" x2="65" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#arr-b)"/>
  <text x="428" y="259" font-size="12" font-weight="700" fill="#1e293b">Quantity</text>
  <text x="14" y="28" font-size="12" font-weight="700" fill="#1e293b">Price,</text>
  <text x="14" y="42" font-size="12" font-weight="700" fill="#1e293b">Costs &amp;</text>
  <text x="14" y="56" font-size="12" font-weight="700" fill="#1e293b">Benefits</text>
  <text x="52" y="270" font-size="11" fill="#475569">0</text>
  <!-- Welfare loss triangle: Q*=(225,120), Qm on MSC=(275,90), Qm on MPB=(275,150) -->
  <polygon points="225,120 275,90 275,150" fill="#fed7aa" fill-opacity="0.85" stroke="#c2410c" stroke-width="1.5"/>
  <text x="247" y="123" font-size="10" font-weight="800" fill="#9a3412">Welfare</text>
  <text x="252" y="135" font-size="10" font-weight="800" fill="#9a3412">Loss</text>
  <!-- Curves -->
  <!-- D = MPB = MSB: (95,42) to (395,222) slope +0.6 -->
  <line x1="95" y1="42" x2="395" y2="222" stroke="#0d9488" stroke-width="2.6"/>
  <text x="342" y="232" font-size="11.5" font-weight="800" fill="#0f766e">D = MPB = MSB</text>
  <!-- S = MPC: (95,258) -> clip (115,246) to (375,90) slope -0.6 -->
  <line x1="115" y1="246" x2="385" y2="84" stroke="#2563eb" stroke-width="2.6"/>
  <text x="387" y="88" font-size="11.5" font-weight="800" fill="#1d4ed8">S = MPC</text>
  <!-- MSC: shifted up by 60px: (115,186) to (335,54) -->
  <line x1="115" y1="186" x2="335" y2="54" stroke="#dc2626" stroke-width="2.8"/>
  <text x="338" y="56" font-size="12" font-weight="800" fill="#b91c1c">MSC</text>
  <!-- External cost bracket at Q=150 -->
  <line x1="145" y1="224" x2="145" y2="172" stroke="#dc2626" stroke-width="1.8" marker-end="url(#arr-r)"/>
  <text x="92" y="203" font-size="10.5" font-weight="700" fill="#b91c1c">MEC</text>
  <!-- Dashed guides for Q*, P* and Qm, Pm -->
  <line x1="225" y1="120" x2="225" y2="255" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="65" y1="120" x2="225" y2="120" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="275" y1="150" x2="275" y2="255" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="65" y1="150" x2="275" y2="150" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <!-- Equilibrium points -->
  <circle cx="225" cy="120" r="4.5" fill="#dc2626"/>
  <circle cx="275" cy="150" r="4.5" fill="#2563eb"/>
  <circle cx="275" cy="90" r="3.5" fill="#c2410c"/>
  <!-- Axis labels -->
  <text x="225" y="272" font-size="12" font-weight="800" text-anchor="middle" fill="#b91c1c">Q*</text>
  <text x="275" y="272" font-size="12" font-weight="800" text-anchor="middle" fill="#1d4ed8">Qₘ</text>
  <text x="48" y="124" font-size="12" font-weight="800" text-anchor="end" fill="#b91c1c">P*</text>
  <text x="48" y="154" font-size="12" font-weight="800" text-anchor="end" fill="#1d4ed8">Pₘ</text>
  <!-- Overproduction arrow -->
  <line x1="272" y1="286" x2="228" y2="286" stroke="#b45309" stroke-width="1.6" marker-end="url(#arr-b)"/>
  <text x="250" y="297" font-size="10" font-weight="700" text-anchor="middle" fill="#92400e">Overproduction (Qₘ − Q*)</text>
</svg>`,
      diagramCaption:
        "Negative externality of production: MSC lies above MPC by the marginal external cost (MEC). The free market produces Qₘ > Q*, creating a welfare loss triangle whose tip points left toward the social optimum Q*.",
      workedExamples: [
        {
          title: "Negative Production Externality & Optimal Carbon Tax",
          problem:
            "In a regional electricity market, inverse demand is {{MSB = MPB = 100 - Q}}, private supply is {{MPC = 20 + Q}}, and coal combustion creates a constant external pollution cost of $20 per MWh (so {{MSC = 40 + Q}}). Find the free-market output {{Q_m}}, the socially optimal output {{Q^*}}, the deadweight welfare loss, and the optimal Pigouvian tax.",
          steps: [
            "Free-market equilibrium occurs where {{MPC = MPB}}: {{20 + Q = 100 - Q}} → {{2Q = 80}} → {{Q_m = 40}} MWh, at price {{P_m = 100 - 40 = $60}}.",
            "Socially optimal equilibrium occurs where {{MSC = MSB}}: {{40 + Q = 100 - Q}} → {{2Q = 60}} → {{Q^* = 30}} MWh, at price {{P^* = 100 - 30 = $70}}.",
            "At {{Q_m = 40}}, {{MSC = 40 + 40 = $80}} while {{MSB = $60}}, so the vertical external cost gap is {{80 - 60 = $20}} per MWh.",
            "Welfare loss triangle area = {{1/2 * (Q_m - Q^*) * MEC = 1/2 * (40 - 30) * 20 = $100}}.",
            "A Pigouvian carbon tax of **$20 per MWh** shifts {{MPC}} up to {{20 + Q + 20 = 40 + Q = MSC}}, internalising the externality and moving output to {{Q^* = 30}}.",
          ],
          answer: "{{Q_m = 40}} MWh, {{Q^* = 30}} MWh, welfare loss = **$100**, optimal Pigouvian tax = **$20 per MWh**.",
          yourTurn: {
            question:
              "Using the same market ({{MPB = MSB = 100 - Q}} and {{MPC = 20 + Q}}), suppose new health studies show the constant external cost is actually $30 per MWh (so {{MSC = 50 + Q}}). Calculate the deadweight welfare loss in dollars.",
            answer: { type: "number", value: 225, display: "$225" },
            solution:
              "Free-market output stays {{Q_m = 40}}. Social optimum: {{50 + Q = 100 - Q}} → {{2Q = 50}} → {{Q^* = 25}}. Welfare loss = {{1/2 * (40 - 25) * 30 = 1/2 * 15 * 30 = $225}}.",
          },
        },
        {
          title: "Positive Consumption Externality (Merit Good) & Per-Unit Subsidy",
          problem:
            "For seasonal flu vaccinations, {{MPB = 60 - 0.5Q}}, herd immunity adds a constant external benefit of $20 per dose ({{MSB = 80 - 0.5Q}}), and {{MPC = MSC = 20 + 0.5Q}} (with {{Q}} in thousands of doses). Calculate the market output, optimal output, welfare loss, and per-unit subsidy needed.",
          steps: [
            "Free-market equilibrium ({{MPB = MPC}}): {{60 - 0.5Q = 20 + 0.5Q}} → {{Q_m = 40}} thousand doses, at {{P_m = $40}}.",
            "Social optimum ({{MSB = MSC}}): {{80 - 0.5Q = 20 + 0.5Q}} → {{Q^* = 60}} thousand doses, at {{P^* = $50}}.",
            "Underallocation is {{60 - 40 = 20}} thousand doses; vertical external benefit gap at {{Q_m}} is $20 per dose.",
            "Welfare loss = {{1/2 * 20,000 * $20 = $200,000}} (pointing right toward {{Q^*}}).",
            "A **$20 per-dose subsidy** to clinics shifts {{MPC}} down to {{0.5Q}}, intersecting {{MPB}} at {{Q^* = 60}} thousand doses (patients pay $30, clinics receive $50).",
          ],
          answer: "{{Q_m = 40,000}}, {{Q^* = 60,000}}, welfare loss = **$200,000**, optimal subsidy = **$20 per dose**.",
          yourTurn: {
            question:
              "In a tutoring market with a positive consumption externality, the free market provides 40 sessions while the socially optimal quantity is 56 sessions, and the marginal external benefit is a constant $16 per session. Calculate the welfare loss in dollars.",
            answer: { type: "number", value: 128, display: "$128" },
            solution:
              "Welfare loss = {{1/2 * (Q^* - Q_m) * MEB = 1/2 * (56 - 40) * 16 = 1/2 * 16 * 16 = $128}}.",
          },
        },
      ],
      keyPoints: [
        "Allocative efficiency requires {{MSB = MSC}}; any divergence between private and social marginal curves creates deadweight welfare loss.",
        "Negative externalities cause **overallocation** ({{Q_m > Q^*}}); positive externalities cause **underallocation** ({{Q_m < Q^*}}).",
        "The welfare loss triangle base lies vertically at {{Q_m}} between the private and social curve, and its tip always points toward {{Q^*}}.",
        "Common pool resources are **rivalrous** and **non-excludable**, leading to overexploitation (Tragedy of the Commons) unless governed via taxes, permits, legislation, or Elinor Ostrom's **collective self-governance**.",
      ],
      whyItWorks:
        "Each unit beyond {{Q^*}} in a negative externality adds more social cost ({{MSC}}) than social benefit ({{MSB}}), destroying net community surplus by {{MSC - MSB}}. Summing those vertical slices from {{Q^*}} to {{Q_m}} sweeps out the exact area of the welfare loss triangle. Symmetrically, each forgone unit between {{Q_m}} and {{Q^*}} in a positive externality throws away net social gain of {{MSB - MSC}}.",
      strategies: [
        "Always label the vertical axis **Price, Costs & Benefits ($)** on externality diagrams — never just 'Price'!",
        "Check your triangle direction before finishing: negative externality triangle points **left** to {{Q^*}}; positive externality triangle points **right** to {{Q^*}}.",
        "In Paper 1 Part (b) evaluation, compare at least TWO policies (e.g. carbon tax vs cap-and-trade or subsidies vs legislation) using **PED/PES**, **government budget**, **equity**, **measurement difficulty**, and **real-world examples**.",
      ],
      thinkDeeper:
        "If demand for cigarettes is highly price-inelastic ({{|PED| < 1}}), a Pigouvian tax cuts consumption only slightly in the short run. Does that mean the tax failed — or can recycling its huge tax revenue into youth anti-smoking programmes and healthcare actually solve both efficiency and equity?",
    },

    // =========================================================================
    // SECTION 2: 2.9–2.10 PUBLIC GOODS & ASYMMETRIC INFORMATION [HL]
    // =========================================================================
    {
      id: "public-goods-asymmetric-info",
      heading: "2.9–2.10 Public Goods & Asymmetric Information [HL]",
      level: "SL",
      discovery: {
        problem:
          "Part A: Two neighbouring coastal villages each value a harbour lighthouse at $150,000, and building it costs $220,000. Once lit, neither village can be blocked from seeing the beam. Will either village privately build it? Part B [HL]: In a used-car market, half the cars are spotless 'peaches' worth $12,000 and half are faulty 'lemons' worth $4,000, but only sellers know which is which. What happens when buyers offer the average value of $8,000?",
        idea:
          "In Part A, total social benefit ($300,000) beats the $220,000 cost, yet **neither village pays** because each hopes to **free-ride** on the other — creating a **missing market**. In Part B, offering $8,000 drives every $12,000 peach owner out of the market, leaving only lemons! Both cases show how missing excludability or hidden information destroys mutually beneficial trades.",
      },
      body: `### 2.9 Classifying Goods & Pure Public Goods
Economists sort every good along two crisp tests:
- **Rivalrous**: one person's consumption reduces the amount available for others (e.g. an apple or a fish in the sea). **Non-rivalrous**: one person enjoying it leaves just as much for everyone else (e.g. a lighthouse beam or national defence).
- **Excludable**: providers can practically stop non-payers from using the good (e.g. a cinema ticket or paywalled newspaper). **Non-excludable**: it is impossible or prohibitively costly to stop non-payers from enjoying it (e.g. street lighting or flood walls).

| | **Excludable** | **Non-Excludable** |
|---|---|---|
| **Rivalrous** | **Private Goods** (coffee, laptops, haircuts) | **Common Pool Resources** (ocean fish, shared aquifers, atmosphere) |
| **Non-Rivalrous** | **Club / Toll Goods** (Netflix, toll motorways, uncongested gyms) | **Pure Public Goods** (national defence, street lighting, flood barriers) |

Because **pure public goods** are **non-excludable**, self-interested consumers suffer from the **free-rider problem**: why pay when you can enjoy the good for free once someone else funds it? Because private firms cannot collect revenue, supply drops to zero — a **missing market** (complete market failure). Moreover, since public goods are **non-rivalrous**, the marginal cost of serving one extra citizen is zero ({{MC = 0}}), so charging a positive price would inefficiently exclude people who value the good positively.

**Government Responses to Public Goods**:
- **Direct Government Provision**: Funded via general taxation (e.g. national defence, street lamps, Singapore's Marina Barrage flood defence). *Challenge*: without market prices, governments struggle to measure true citizen willingness to pay (risk of over- or under-provision, and opportunity cost of tax funds).
- **Contracting Out**: Government pays private firms via competitive tenders to build/maintain the public good (e.g. municipal road lighting) to capture private cost efficiency while solving the free-rider problem.

---

### 2.10 [HL] Asymmetric Information
**Asymmetric information** exists when one side of a transaction (buyer or seller) possesses significantly more or better information than the other, preventing markets from reaching allocative efficiency. IB Economics HL divides it into two critical forms:

1. **Adverse Selection (Hidden Information *Before* the Transaction)**:
   - One party hides an undesirable trait *before* the deal is signed.
   - **Sellers know more than buyers — George Akerlof's "Market for Lemons"**: Used-car buyers cannot distinguish reliable cars ("peaches") from defective cars ("lemons"), so they discount their willingness to pay. At the discounted price, peach owners withdraw, lowering average quality further until the market shrinks or collapses — **underallocation** of high-quality goods.
   - **Buyers know more than sellers — Health/Life Insurance**: High-risk individuals eagerly buy flat-rate insurance while low-risk individuals opt out, forcing premiums up and driving out even more low-risk buyers.
2. **Moral Hazard (Hidden Action *After* the Transaction)**:
   - After an agreement is made, the protected party takes greater risks because someone else bears the cost of failure.
   - *Examples*: A homeowner with full theft insurance stops locking doors; a "too-big-to-fail" investment bank takes reckless subprime mortgage bets expecting a government bailout (as in the 2008 Global Financial Crisis).

### [HL] Private & Government Solutions to Asymmetric Information
- **Signalling** (action by the *informed* party): Sellers offer multi-year warranties, money-back guarantees, or build brand reputation; job applicants earn university degrees to signal productivity.
- **Screening** (action by the *uninformed* party): Insurers require medical check-ups, offer tiered deductibles/excesses and no-claims bonuses (incentivising safe behaviour to curb moral hazard), and used-car buyers hire independent mechanics.
- **Government Intervention**: Mandatory quality/nutrition labelling, professional **licensing** (doctors, pilots, financial advisers), strict banking capital-adequacy rules (Basel III to curb moral hazard), consumer-protection laws, and direct public provision of verified information (e.g. official hygiene grades on Singapore hawker stalls).`,
      diagram: `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-by-two matrix classifying Private Goods, Club Goods, Common Pool Resources, and Pure Public Goods by Rivalry and Excludability">
  <rect width="460" height="290" fill="#ffffff"/>
  <!-- Title -->
  <text x="255" y="24" font-size="13.5" font-weight="800" text-anchor="middle" fill="#1e293b">Economic Classification of Goods</text>
  <!-- Column headers -->
  <rect x="115" y="38" width="160" height="32" rx="6" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>
  <text x="195" y="59" font-size="12" font-weight="800" text-anchor="middle" fill="#0c4a6e">Excludable</text>
  <rect x="285" y="38" width="160" height="32" rx="6" fill="#ffedd5" stroke="#c2410c" stroke-width="1.4"/>
  <text x="365" y="59" font-size="12" font-weight="800" text-anchor="middle" fill="#7c2d12">Non-Excludable</text>
  <!-- Row headers -->
  <rect x="15" y="80" width="90" height="92" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
  <text x="60" y="122" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Rivalrous</text>
  <text x="60" y="138" font-size="9.5" text-anchor="middle" fill="#475569">(depletes supply)</text>
  <rect x="15" y="182" width="90" height="92" rx="6" fill="#f1f5f9" stroke="#475569" stroke-width="1.4"/>
  <text x="60" y="220" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1e293b">Non-</text>
  <text x="60" y="235" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1e293b">Rivalrous</text>
  <text x="60" y="250" font-size="9.5" text-anchor="middle" fill="#475569">(shared freely)</text>
  <!-- Cell 1: Private Goods -->
  <rect x="115" y="80" width="160" height="92" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="195" y="104" font-size="12.5" font-weight="800" text-anchor="middle" fill="#0f172a">Private Goods</text>
  <text x="195" y="124" font-size="10.5" text-anchor="middle" fill="#334155">Coffee, shoes, laptops</text>
  <text x="195" y="143" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">Provided by markets</text>
  <text x="195" y="158" font-size="9.5" text-anchor="middle" fill="#475569">(price allocates supply)</text>
  <!-- Cell 2: Common Pool Resources -->
  <rect x="285" y="80" width="160" height="92" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
  <text x="365" y="102" font-size="12" font-weight="800" text-anchor="middle" fill="#92400e">Common Pool</text>
  <text x="365" y="116" font-size="12" font-weight="800" text-anchor="middle" fill="#92400e">Resources (CPRs)</text>
  <text x="365" y="135" font-size="10.5" text-anchor="middle" fill="#78350f">Ocean fish, clean air</text>
  <text x="365" y="155" font-size="10" font-weight="700" text-anchor="middle" fill="#b91c1c">Tragedy of the Commons</text>
  <!-- Cell 3: Club Goods -->
  <rect x="115" y="182" width="160" height="92" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.6"/>
  <text x="195" y="206" font-size="12.5" font-weight="800" text-anchor="middle" fill="#115e59">Club / Toll Goods</text>
  <text x="195" y="226" font-size="10.5" text-anchor="middle" fill="#134e4a">Streaming, uncongested</text>
  <text x="195" y="240" font-size="10.5" text-anchor="middle" fill="#134e4a">toll roads, cinemas</text>
  <text x="195" y="259" font-size="9.5" font-weight="700" text-anchor="middle" fill="#0f766e">Artificially scarce</text>
  <!-- Cell 4: Pure Public Goods -->
  <rect x="285" y="182" width="160" height="92" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="365" y="206" font-size="12.5" font-weight="800" text-anchor="middle" fill="#991b1b">Pure Public Goods</text>
  <text x="365" y="226" font-size="10.5" text-anchor="middle" fill="#7f1d1d">Defence, street lamps,</text>
  <text x="365" y="240" font-size="10.5" text-anchor="middle" fill="#7f1d1d">flood barriers</text>
  <text x="365" y="259" font-size="10" font-weight="800" text-anchor="middle" fill="#b91c1c">Free-Rider → Missing Market</text>
</svg>`,
      diagramCaption:
        "Rivalry vs excludability cleanly separates private goods, club goods, common pool resources (overexploitation), and pure public goods (missing market due to free-riding).",
      workedExamples: [
        {
          title: "Evaluating Public Good Provision & Free-Riding",
          problem:
            "Two coastal districts value a storm-warning siren (non-rivalrous and non-excludable) at $180,000 for District A and $140,000 for District B. Building the siren costs $250,000. Show why the free market fails to provide it even though provision is socially efficient.",
          steps: [
            "Because the siren is **non-rivalrous**, both districts enjoy the warning simultaneously, so total Marginal Social Benefit sums vertically: {{MSB = $180,000 + $140,000 = $320,000}}.",
            "Compare social benefit to social cost: {{$320,000 > $250,000}}, yielding a net social welfare gain of {{$320,000 - $250,000 = $70,000}}.",
            "However, neither district's private benefit covers the full $250,000 cost ({{$180,000 < $250,000}} and {{$140,000 < $250,000}}).",
            "Because the siren is **non-excludable**, each district is tempted to **free-ride** if the other pays, so no private provider enters and the market supplies zero.",
          ],
          answer:
            "Socially efficient (**$70,000** net welfare gain), yet privately unprovided due to the free-rider problem — justifying tax-funded government provision.",
          yourTurn: {
            question:
              "Three neighbourhoods value a non-rivalrous flood barrier at $90,000, $110,000, and $85,000 respectively. If construction costs $240,000, calculate the net social benefit in dollars.",
            answer: { type: "number", value: 45000, display: "$45,000" },
            solution:
              "Sum non-rivalrous marginal benefits: {{90,000 + 110,000 + 85,000 = $285,000}}. Net social benefit = {{285,000 - 240,000 = $45,000}}.",
          },
        },
        {
          title: "[HL] Akerlof's Market for Lemons (Adverse Selection)",
          problem:
            "In a used-car market, 50% of cars are high-quality 'peaches' worth $14,000 to buyers (sellers refuse to accept less than $12,000) and 50% are faulty 'lemons' worth $6,000 to buyers (sellers accept at least $5,000). Buyers cannot tell them apart before buying. Calculate buyers' maximum offer and explain the market outcome.",
          steps: [
            "Compute the expected value of a randomly chosen car for an uninformed buyer: {{E(V) = 0.5($14,000) + 0.5($6,000) = $7,000 + $3,000 = $10,000}}.",
            "Compare $10,000 to peach sellers' minimum reservation price ($12,000): since {{$10,000 < $12,000}}, peach owners withdraw their cars from the market.",
            "Buyers rationally deduce that only lemons remain, so willingness to pay collapses to **$6,000**.",
            "Result: mutually beneficial trades for high-quality cars (buyer values at $14,000 > seller minimum $12,000) vanish — severe allocative inefficiency caused by **adverse selection**.",
          ],
          answer:
            "Initial expected offer = **$10,000**; peach sellers exit and only lemons trade at **$5,000–$6,000**.",
          yourTurn: {
            question:
              "[HL] In an online used-laptop market, 40% are top-grade units worth $1,000 to buyers and 60% are faulty units worth $300 to buyers. Calculate the maximum expected value (in dollars) an uninformed risk-neutral buyer is willing to pay.",
            answer: { type: "number", value: 580, display: "$580" },
            solution:
              "{{E(V) = 0.4(1000) + 0.6(300) = 400 + 180 = $580}}.",
          },
        },
      ],
      keyPoints: [
        "Pure public goods are BOTH **non-rivalrous** and **non-excludable** — causing the **free-rider problem** and a **missing market**.",
        "Never confuse **public goods** with goods merely funded by government (public schools and hospitals are rivalrous and excludable — they are **merit goods**, not pure public goods!).",
        "[HL] **Adverse selection** = hidden *information* *before* a transaction (e.g. Akerlof's lemons, pre-existing health conditions); **Moral hazard** = hidden *action* *after* a transaction (e.g. reckless driving after insurance, bank bailouts).",
        "[HL] **Signalling** is done by the *informed* side (warranties, degrees); **screening** is done by the *uninformed* side (inspections, deductibles, medical checks).",
      ],
      whyItWorks:
        "Competitive markets rely on two hidden foundations: enforceable property rights (so firms can charge buyers) and symmetric information (so prices accurately reflect marginal value). Remove excludability and demand hides behind free-riding; remove symmetric information and prices reflect *average* quality rather than *true* quality, chasing good sellers out (adverse selection) or distorting post-contract incentives (moral hazard).",
      strategies: [
        "When classifying a good on an exam, run the two-step checklist explicitly: (1) Can non-payers be blocked? (Excludable?) (2) Does my use leave less for you? (Rivalrous?).",
        "Check timing to separate HL asymmetric info terms: **Before** the deal = **Adverse Selection**; **After** the deal = **Moral Hazard**.",
        "Evaluate government remedies for asymmetric info by checking **compliance costs**, **bureaucracy**, and whether **private signalling/screening** (e.g. online reviews, certified warranties) already solves part of the gap.",
      ],
      thinkDeeper:
        "Can technology turn a public good into a club good — or vice versa? Consider how satellite GPS signals remain non-excludable for civilian drivers, while Singapore's Electronic Road Pricing (ERP) gantries turned formerly non-excludable city roads into precisely priced club goods during rush hour!",
    },

    // =========================================================================
    // SECTION 3: 2.11 MARKET POWER I — COSTS, REVENUES, PC & MONOPOLY (HL)
    // =========================================================================
    {
      id: "costs-revenues-perfect-monopoly-hl",
      heading: "2.11 Market Power I: Costs, Revenues, Perfect Competition & Monopoly",
      level: "HL",
      discovery: {
        problem:
          "A boutique hotel has monthly fixed rent of $10,000 that it must pay even if empty. During monsoon low season, operating costs (staff, laundry, utilities) are $6,000 per month, while monthly room revenue is only $8,500 — meaning the hotel loses $7,500 every month! Should the owner close for the monsoon or stay open?",
        idea:
          "Stay **open** in the short run! Revenue ($8,500) more than covers variable costs ($6,000), leaving **$2,500** to offset part of the $10,000 fixed rent. Staying open limits the loss to **$7,500**, whereas shutting down forces a **$10,000** loss. Whenever {{P >= AVC}} (equivalently {{TR >= TVC}}), operating beats shutting down in the short run!",
      },
      body: `### Short-Run Production & Costs
In the **short run**, at least one factor of production (usually capital/land) is **fixed**. As a firm adds extra units of a variable factor (labour) to fixed capital, **Marginal Product ({{MP}})** initially rises (specialisation) and then falls due to the **Law of Diminishing Marginal Returns** (workers crowd fixed machines).

Because each extra worker costs the same wage but adds less output once {{MP}} falls, **Marginal Cost ({{MC}})** is the mirror image of {{MP}} — falling at first, then rising steeply!
- **Total Cost**: {{TC = TFC + TVC}}
- **Average Costs**: {{AC = TC / Q = AFC + AVC}}, where {{AFC = TFC / Q}} falls continuously as fixed costs spread over more units.
- **Marginal Cost**: {{MC = ΔTC / ΔQ = ΔTVC / ΔQ}}. Crucially, **{{MC}} always cuts {{AVC}} and {{AC}} at their minimum points** (if the marginal unit costs less than the average, it pulls the average down; if more, it pulls the average up).

### Long-Run Costs: Economies & Diseconomies of Scale
In the **long run**, **all** factors of production are variable. The **Long-Run Average Cost ({{LRAC}})** curve is the envelope of short-run {{AC}} curves:
- **Economies of Scale** (falling {{LRAC}} as firm expands): technical/specialisation gains, bulk-buying discounts, cheaper finance, spreading marketing/R&D fixed costs, and risk-bearing diversification.
- **Constant Returns to Scale** (flat {{LRAC}}): begins at the **Minimum Efficient Scale (MES)** — the smallest output achieving minimum {{LRAC}}.
- **Diseconomies of Scale** (rising {{LRAC}}): bureaucracy, poor communication across layers, coordination failures, and worker alienation in giant conglomerates.

### Revenues, Profit Maximization & Decision Rules
- **Total Revenue**: {{TR = P * Q}} · **Average Revenue**: {{AR = TR / Q = P}} (the firm's demand curve!) · **Marginal Revenue**: {{MR = ΔTR / ΔQ}}.
- For a **price taker** (Perfect Competition), {{P = D = AR = MR}} is horizontal. For a **price maker** (Monopoly/Monopolistic/Oligopoly), lowering price to sell an extra unit lowers price on *all previous units too*, so **{{MR}} lies below {{AR}}** (for linear demand {{P = a - bQ}}, {{MR = a - 2bQ}} — exact same vertical intercept, **twice the slope**!).
- **Profit Maximization Rule**: Produce where **{{MC = MR}}** (with {{MC}} rising).
- **Profit Outcomes**:
  - **Abnormal (Supernormal) Profit**: {{P > AC}} ({{TR > TC}}) — exceeds opportunity cost.
  - **Normal Profit**: {{P = AC}} ({{TR = TC}}) — zero *economic* profit; just covers all explicit and implicit opportunity costs so firms stay in the industry.
  - **Economic Loss**: {{P < AC}} ({{TR < TC}}).
- **Short-Run Shut-Down Rule**: Shut down immediately if **{{P < AVC}}** (loss would exceed fixed costs). Continue in SR if **{{AVC <= P < AC}}**, then exit in the long run if {{P < AC}}.

### Perfect Competition vs Monopoly
- **Perfect Competition**: Many small firms, homogeneous product, zero barriers to entry/exit, perfect information → price takers. Short-run abnormal profit attracts new entrants (industry supply shifts right, market price falls); short-run losses trigger exit (supply shifts left, price rises). **Long-run equilibrium** settles at **normal profit** where **{{P = MC = min AC}}** — achieving BOTH **allocative efficiency** ({{P = MC}}) and **productive efficiency** (minimum {{AC}}).
- **Monopoly**: Single dominant firm, unique product, high **barriers to entry** (economies of scale, patents, legal franchises, control of key inputs, aggressive pricing). Maximises at {{MC = MR}}, charges **{{P_m > MC}}**, restricts output ({{Q_m < Q_{pc}}}), earns persistent **long-run abnormal profit**, and creates a **deadweight welfare loss** (neither allocatively nor productively efficient — plus risk of X-inefficiency).
- **Nuanced Monopoly Evaluation**:
  - **Natural Monopoly**: Huge fixed infrastructure costs mean {{LRAC}} falls across the entire market demand (e.g. water mains, power grids). One large firm produces at a far lower {{AC}} than competing small firms; governments often regulate it via **fair-return pricing ({{P = AC}})** or **marginal-cost pricing ({{P = MC}} with a subsidy)**.
  - **Dynamic Efficiency (Schumpeter)**: Persistent abnormal profits can fund costly long-run **R&D and innovation** (e.g. pharmaceuticals, semiconductor lithography) that atomistic perfectly competitive firms could never finance.
  - **Alternative Firm Objectives**: Not every firm maximises profit — managers may pursue **revenue maximization ({{MR = 0}})**, **sales/growth maximization ({{AR = AC}})**, **satisficing** (Herbert Simon), or **Corporate Social Responsibility (CSR)**.`,
      diagram: `<svg viewBox="0 0 460 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Profit-maximising monopoly diagram showing downward sloping demand AR, steeper MR, MC, AC, monopoly price Pm above AC for abnormal profit rectangle, and deadweight welfare loss triangle">
  <rect width="460" height="310" fill="#ffffff"/>
  <defs>
    <marker id="arr-m" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="65" y1="265" x2="430" y2="265" stroke="#334155" stroke-width="2" marker-end="url(#arr-m)"/>
  <line x1="65" y1="265" x2="65" y2="22" stroke="#334155" stroke-width="2" marker-end="url(#arr-m)"/>
  <text x="424" y="282" font-size="12" font-weight="700" text-anchor="end" fill="#1e293b">Quantity (Q)</text>
  <text x="14" y="34" font-size="12" font-weight="700" fill="#1e293b">Price,</text>
  <text x="14" y="48" font-size="12" font-weight="700" fill="#1e293b">Costs,</text>
  <text x="14" y="62" font-size="12" font-weight="700" fill="#1e293b">Rev ($)</text>
  <text x="52" y="280" font-size="11" fill="#475569">0</text>
  <!-- Coordinates: D from (65,45) to (395,265) [y = 45 + (220/330)*(x-65) = 45 + 0.667*(x-65)]
       MR from (65,45) to (230,265) [y = 45 + 1.333*(x-65)]
       MC constant/gently rising: let's draw classic rising MC passing through (185,205) where MR=205!
       Check MR at x=185: 45 + 1.333*120 = 205.
       At x=185, D is 45 + 0.667*120 = 125 (Pm!).
       Let MC pass through (185,205) and meet D at (275,185)? Let's use linear rising MC: y = 246.1 - 0.222*(x-65) -> at 185: 219.5... simpler:
       MC: line from (110,235) through (185,205) to (320,151) -> slope -0.4!
       Intersect MC (y = 205 - 0.4*(x-185)) with D (y = 125 + 0.667*(x-185)):
       205 - 0.4dx = 125 + 0.667dx -> 80 = 1.067dx -> dx = 75 -> x_pc = 260, y_pc = 175!
       AC at x=185: y = 165 (below Pm=125, above MC=205? Wait: AC must be above MC before min AC, and min AC is where MC cuts AC!
       Wait: at x=185, y_AC = 165 is ABOVE y_MC = 205 (smaller y = higher dollar cost!). Yes! Lower y = higher $, so Pm at y=125 > AC at y=165 > MC at y=205!
       And where does MC cut AC? To the right of x=185, say at (240,183) where AC is at its minimum (highest y)! -->
  <!-- Abnormal Profit Rectangle: x from 65 to 185, y from 125 (Pm) to 165 (ACm) -->
  <rect x="65" y="125" width="120" height="40" fill="#bbf7d0" fill-opacity="0.75" stroke="#15803d" stroke-width="1.3"/>
  <text x="125" y="149" font-size="11" font-weight="800" text-anchor="middle" fill="#14532d">Abnormal Profit</text>
  <!-- Deadweight Loss Triangle: (185,125), (185,205), (260,175) -->
  <polygon points="185,125 185,205 260,175" fill="#fed7aa" fill-opacity="0.85" stroke="#c2410c" stroke-width="1.4"/>
  <text x="211" y="171" font-size="10.5" font-weight="800" text-anchor="middle" fill="#9a3412">DWL</text>
  <!-- Demand = AR curve -->
  <line x1="65" y1="45" x2="395" y2="265" stroke="#0d9488" stroke-width="2.6"/>
  <text x="372" y="246" font-size="11.5" font-weight="800" fill="#0f766e">D = AR</text>
  <!-- MR curve -->
  <line x1="65" y1="45" x2="230" y2="265" stroke="#7c3aed" stroke-width="2.4" stroke-dasharray="6 3"/>
  <text x="234" y="256" font-size="11.5" font-weight="800" fill="#6d28d9">MR</text>
  <!-- AC curve (U-shaped, passes through (185,165) and reaches min at (240,183)) -->
  <path d="M 105 90 Q 175 180 240 183 Q 305 185 355 128" fill="none" stroke="#2563eb" stroke-width="2.4"/>
  <text x="358" y="128" font-size="11.5" font-weight="800" fill="#1d4ed8">AC</text>
  <!-- MC curve (passes through (185,205), (240,183), (260,175), rising steeply) -->
  <path d="M 110 232 Q 160 218 185 205 Q 235 186 260 175 Q 300 155 342 82" fill="none" stroke="#dc2626" stroke-width="2.7"/>
  <text x="345" y="82" font-size="12" font-weight="800" fill="#b91c1c">MC</text>
  <!-- Dashed guides -->
  <line x1="185" y1="125" x2="185" y2="265" stroke="#475569" stroke-width="1.4" stroke-dasharray="4 4"/>
  <line x1="260" y1="175" x2="260" y2="265" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 4"/>
  <line x1="65" y1="175" x2="260" y2="175" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 4"/>
  <!-- Key points -->
  <circle cx="185" cy="205" r="4.5" fill="#dc2626"/>
  <circle cx="185" cy="125" r="4.5" fill="#0d9488"/>
  <circle cx="185" cy="165" r="4" fill="#2563eb"/>
  <circle cx="260" cy="175" r="4" fill="#c2410c"/>
  <!-- Labels on axes -->
  <text x="185" y="282" font-size="12" font-weight="800" text-anchor="middle" fill="#0f766e">Qₘ</text>
  <text x="260" y="282" font-size="11.5" font-weight="800" text-anchor="middle" fill="#c2410c">Qₚc</text>
  <text x="58" y="129" font-size="12" font-weight="800" text-anchor="end" fill="#0f766e">Pₘ</text>
  <text x="58" y="168" font-size="11.5" font-weight="800" text-anchor="end" fill="#1d4ed8">Cₘ</text>
  <text x="58" y="180" font-size="10.5" font-weight="700" text-anchor="end" fill="#c2410c">Pₚc</text>
  <text x="166" y="219" font-size="10" font-weight="800" text-anchor="end" fill="#b91c1c">MC=MR</text>
</svg>`,
      diagramCaption:
        "Profit-maximising monopoly: set MC = MR to find Qₘ, read price Pₘ off D = AR and cost Cₘ off AC. Because Pₘ > MC, monopoly restricts output below Qₚc and creates deadweight welfare loss (DWL).",
      workedExamples: [
        {
          title: "[HL] Monopoly Profit Maximization & Deadweight Loss",
          problem:
            "A patented biotech monopolist faces inverse demand {{P = 120 - 2Q}} (so {{MR = 120 - 4Q}}), constant marginal cost {{MC = $20}}, and fixed cost {{TFC = $400}}. Calculate the profit-maximising output {{Q_m}}, price {{P_m}}, abnormal profit, and deadweight loss relative to perfect competition.",
          steps: [
            "Set {{MC = MR}}: {{20 = 120 - 4Q}} → {{4Q = 100}} → {{Q_m = 25}} units.",
            "Find price on the demand curve (never the MR curve!): {{P_m = 120 - 2(25) = $70}}.",
            "Compute Total Revenue and Total Cost: {{TR = 70 * 25 = $1,750}}; {{TC = 400 + 20(25) = $900}} (so {{AC = 900 / 25 = $36}}).",
            "Abnormal profit = {{TR - TC = 1,750 - 900 = $850}} (check: {{(P_m - AC) * Q_m = (70 - 36) * 25 = $850}}).",
            "Competitive benchmark ({{P = MC}}): {{120 - 2Q = 20}} → {{Q_{pc} = 50}}, {{P_{pc} = $20}}.",
            "Deadweight loss = {{1/2 * (P_m - MC) * (Q_{pc} - Q_m) = 1/2 * (70 - 20) * (50 - 25) = $625}}.",
          ],
          answer: "{{Q_m = 25}}, {{P_m = $70}}, abnormal profit = **$850**, DWL = **$625**.",
          yourTurn: {
            question:
              "[HL] A monopolist faces inverse demand {{P = 100 - 2Q}} (with {{MR = 100 - 4Q}}), constant {{MC = $20}}, and {{TFC = $300}}. Calculate its maximum abnormal profit in dollars.",
            answer: { type: "number", value: 500, display: "$500" },
            solution:
              "Set {{MC = MR}}: {{20 = 100 - 4Q}} → {{Q_m = 20}}. Price {{P_m = 100 - 40 = $60}}. {{TR = 60 * 20 = $1,200}}; {{TC = 300 + 20(20) = $700}}. Abnormal profit = {{1,200 - 700 = $500}}.",
          },
        },
        {
          title: "[HL] Short-Run Shut-Down vs Continue Operating",
          problem:
            "A perfectly competitive wheat farm produces {{Q = 200}} tonnes where {{MC = MR = $18}}. At this output, {{TFC = $1,400}} and {{TVC = $3,000}}. Should the farm stay open or shut down in the short run, and what is its minimum possible loss?",
          steps: [
            "Compute {{AVC = TVC / Q = 3,000 / 200 = $15}} and {{AC = (1,400 + 3,000) / 200 = $22}}.",
            "Because {{P = $18 < AC = $22}}, the farm makes an economic loss of {{(18 - 22) * 200 = -$800}} if it operates.",
            "However, {{P = $18 > AVC = $15}} (equivalently {{TR = $3,600 > TVC = $3,000}}), leaving $600 to contribute toward fixed costs.",
            "If it shut down, it would lose all fixed costs (**$1,400**). Staying open saves $600, so the optimal short-run decision is to **continue operating** at a loss of **$800** (then exit in the long run if price remains below $22).",
          ],
          answer: "**Continue operating** in the short run; minimum loss = **$800** (vs $1,400 if shut down).",
          yourTurn: {
            question:
              "[HL] At its {{MC = MR}} output of 100 units, a competitive firm faces market price {{P = $12}}, with {{TFC = $800}} and {{TVC = $1,500}}. Calculate the firm's short-run economic loss (enter as a positive dollar number) assuming it chooses the optimal short-run option.",
            answer: { type: "number", value: 800, display: "$800" },
            solution:
              "{{AVC = 1,500 / 100 = $15}}. Since {{P = $12 < AVC = $15}}, staying open loses {{$1,200 - $2,300 = -$1,100}}, whereas shutting down loses only {{TFC = $800}}. Optimal short-run loss = **$800**.",
          },
        },
      ],
      keyPoints: [
        "Short-run rising {{MC}} is driven by the **Law of Diminishing Marginal Returns**; falling {{LRAC}} is driven by **economies of scale** (all inputs variable).",
        "{{MC}} always intersects {{AVC}} and {{AC}} at their minimum points.",
        "Always find {{Q_m}} at **{{MC = MR}}**, then travel **straight up to {{D = AR}}** for price and to **{{AC}}** for unit cost.",
        "Short-run shut-down occurs when {{P < AVC}}; long-run break-even / normal profit occurs at {{P = AC}}.",
        "Perfect competition hits BOTH allocative ({{P = MC}}) and productive (min {{AC}}) efficiency in the long run; monopoly hits neither, though **natural monopolies** and **dynamic R&D efficiency** can justify regulated market power.",
      ],
      whyItWorks:
        "Why does profit peak at {{MC = MR}}? Whenever {{MR > MC}}, selling one more unit adds more to revenue than to cost, lifting total profit; whenever {{MC > MR}}, that unit costs more than it brings in, draining profit. Stopping precisely where {{MR = MC}} captures every profitable unit and rejects every loss-making one.",
      strategies: [
        "When drawing monopoly diagrams, place the **minimum of {{AC}} directly on the {{MC}} curve** — examiners immediately penalise diagrams where {{MC}} misses min {{AC}}!",
        "Never label monopoly price at the intersection of {{MC}} and {{MR}}: follow a dashed line **straight up from {{Q_m}} to {{D = AR}}**.",
        "In monopoly evaluation essays, weigh static deadweight loss and higher prices against **natural monopoly economies of scale**, **dynamic efficiency (R&D)**, and **regulatory trade-offs** (`P = MC` vs `P = AC`).",
      ],
      thinkDeeper:
        "If a natural monopoly has falling {{AC}} everywhere, then {{MC}} always lies *below* {{AC}}. What happens if regulators force the utility to set allocatively efficient pricing ({{P = MC}})? It suffers a permanent economic loss — meaning regulators must either subsidise the utility from tax revenue or compromise on fair-return pricing ({{P = AC}})!",
    },

    // =========================================================================
    // SECTION 4: 2.11–2.12 MONOPOLISTIC, OLIGOPOLY, GAME THEORY & EQUITY (HL)
    // =========================================================================
    {
      id: "monopolistic-oligopoly-equity-hl",
      heading: "2.11–2.12 Monopolistic Competition, Oligopoly, Game Theory & Equity",
      level: "HL",
      discovery: {
        problem:
          "Two rival bubble-tea chains (BobaCo and TeaLab) dominate a campus mall. If both charge a high price ($6), each earns $90,000 a year. If one cuts price to $4 while the other stays at $6, the discounter steals customers and earns $115,000 while the rival drops to $40,000. If both cut to $4, each earns only $55,000. Without a binding legal contract, what prices will rational managers choose — and why is that outcome so ironic?",
        idea:
          "Put yourself in BobaCo's shoes: if TeaLab charges $6, cutting gives you $115k > $90k; if TeaLab cuts to $4, cutting gives you $55k > $40k! Cutting price is a **strictly dominant strategy** for *both* chains. Both end up charging $4 and earning **$55,000** each — a **Nash equilibrium** that leaves both $35,000 worse off than cooperating!",
      },
      body: `### Monopolistic Competition [HL]
Most everyday high-street markets — cafés, hairdressers, restaurants, clothing labels — sit in **monopolistic competition**:
- **Assumptions**: Many firms, **low barriers to entry/exit**, and **product differentiation** (branding, flavour, location, service quality).
- Because products are close but *imperfect* substitutes, each firm faces a downward-sloping, **relatively price-elastic** {{D = AR}} curve and engages heavily in **non-price competition** (packaging, loyalty apps, décor).
- **Short Run → Long Run**: If existing cafés earn abnormal profit ({{P > AC}}), low barriers allow new rivals to open nearby, stealing customers and shifting each incumbent's demand curve **left** (and making it more elastic) until **{{D = AR}} is tangent to {{AC}}** at {{Q_{mc}}}.
- **Long-Run Equilibrium**: Firms earn **normal profit only** ({{P = AC}}), yet achieve **neither** allocative efficiency ({{P > MC}}) **nor** productive efficiency — because tangency occurs on the *downward-sloping* portion of {{AC}}, creating **excess capacity** ({{Q_{mc} < Q_{min AC}}}). However, consumers gain **greater product variety** than under perfect competition!

### Oligopoly, Concentration Ratios & Game Theory [HL]
An **oligopoly** is dominated by a **few large firms** protected by **high barriers to entry** (economies of scale, branding, patents, control of distribution) — e.g. commercial aircraft (Boeing/Airbus), smartphones, supermarkets, and telecoms.

Market concentration is measured by the **n-firm Concentration Ratio ({{CR_n}})**: the combined market share (%) of the largest {{n}} firms (typically {{CR_3}} or {{CR_4}} > 60% signals strong oligopoly power).

The defining feature of oligopoly is **mutual interdependence**: one firm's price or product move directly affects rivals' profits, forcing **strategic behaviour**:
- **Collusive Oligopoly**: Firms coordinate prices or output to act like a shared monopoly (maximising joint profit where industry {{MC = MR}}).
  - **Formal (Overt) Collusion / Cartel**: Explicit written or spoken agreement (e.g. **OPEC** oil output quotas; illegal price-fixing rings in airlines or construction).
  - **Tacit (Informal) Collusion**: Unspoken coordination without explicit meetings, such as **price leadership** (smaller rivals match a dominant firm's list-price hikes).
- **Non-Collusive Oligopoly**: Rivals compete independently yet fear triggering destructive **price wars**, leading to **price rigidity** and fierce **non-price competition** (advertising, R&D, warranties, product launches).
- **Game Theory & The Prisoner's Dilemma**: A **2×2 payoff matrix** maps each firm's profit for every combination of strategies.
  - A **dominant strategy** yields a higher payoff regardless of what the rival chooses.
  - A **Nash Equilibrium** is a strategy pair where **neither firm can improve its payoff by unilaterally changing its choice**.
  - The Prisoner's Dilemma explains why **cartels are inherently unstable** (every member is tempted to secretly undercut the cartel quota to grab extra profit!) unless stabilised by repeated interaction, transparent monitoring, and credible retaliation.

### Government Regulation of Market Power [HL]
Competition authorities (e.g. Singapore's **CCCS**, UK's **CMA**, **EU Commission**, US **FTC/DOJ**) curb abuse of market power via:
- **Legislation & Heavy Fines** against cartels and predatory pricing, boosted by **leniency (whistleblower) programmes** that break cartel trust.
- **Merger Control**: Blocking horizontal mergers that push {{CR_4}} excessively high and harm consumers.
- **Price Caps & Deregulation**: Setting {{RPI - X}} caps on natural monopolies and lowering licensing barriers to encourage contestability.

### 2.12 The Market's Inability to Achieve Equity [HL]
Even if a free market were perfectly competitive and allocatively efficient, it still **cannot guarantee equity**:
- **Equality** is a *positive*, measurable concept (identical shares of income/wealth). **Equity** is a *normative* concept meaning **fairness** (which may permit unequal rewards for effort while ensuring basic needs and fair opportunity).
- **Why Free Markets Fail Equity**:
  1. **Unequal Initial Factor Endowments**: Households start with vastly unequal wealth, land, inheritance, and human capital; markets reward factor ownership, compounding inequality over generations.
  2. **Effective Demand ("Dollar Votes")**: Free markets allocate goods only to those who are both willing *and able* to pay, leaving low-income households excluded from essential merit goods like healthcare and quality schooling.
  3. **Market Power Transfers Surplus Upward**: Monopolies and oligopolies charge {{P > MC}}, transferring consumer surplus from ordinary buyers (regressively hurting poorer households) into abnormal profits for wealthier shareholders.
- **Policy Trade-Off**: Addressing inequity requires government intervention — **progressive income taxes**, **transfer payments**, **subsidised/direct merit-good provision**, **minimum wages**, and **antitrust enforcement** — while carefully balancing equity gains against potential efficiency/incentive costs.`,
      diagram: `<svg viewBox="0 0 460 295" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side diagram: left shows Monopolistic Competition long-run normal profit tangency with excess capacity; right shows a two-by-two Oligopoly Prisoner's Dilemma payoff matrix highlighting the Nash equilibrium">
  <rect width="460" height="295" fill="#ffffff"/>
  <defs>
    <marker id="arr-s4" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
  </defs>
  <!-- LEFT PANEL: Monopolistic Competition LR -->
  <text x="118" y="20" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1e293b">Monopolistic Comp. (LR)</text>
  <line x1="34" y1="245" x2="212" y2="245" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-s4)"/>
  <line x1="34" y1="245" x2="34" y2="34" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-s4)"/>
  <text x="208" y="260" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">Q</text>
  <text x="26" y="42" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">$</text>
  <!-- D = AR tangent to AC at (105,126): slope of D = +0.625, passing (34,82) to (204,188) -->
  <line x1="34" y1="82" x2="202" y2="187" stroke="#0d9488" stroke-width="2.2"/>
  <text x="195" y="200" font-size="10" font-weight="800" text-anchor="end" fill="#0f766e">D=AR</text>
  <!-- MR: from (34,82) twice slope +1.25 -> (105,171) -> (150,227) -->
  <line x1="34" y1="82" x2="152" y2="230" stroke="#7c3aed" stroke-width="2" stroke-dasharray="5 3"/>
  <text x="155" y="236" font-size="10" font-weight="800" fill="#6d28d9">MR</text>
  <!-- AC tangent to D at (105,126), min AC at (142,140) -->
  <path d="M 55 72 Q 95 122 105 126 Q 125 138 142 140 Q 168 142 195 96" fill="none" stroke="#2563eb" stroke-width="2.2"/>
  <text x="197" y="96" font-size="10" font-weight="800" fill="#1d4ed8">AC</text>
  <!-- MC passes through (105,171) and min AC (142,140) -->
  <path d="M 65 198 Q 92 184 105 171 Q 128 154 142 140 Q 164 114 180 62" fill="none" stroke="#dc2626" stroke-width="2.2"/>
  <text x="182" y="64" font-size="10" font-weight="800" fill="#b91c1c">MC</text>
  <!-- Dashed guides for Q_mc and Q_minAC -->
  <line x1="105" y1="126" x2="105" y2="245" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="34" y1="126" x2="105" y2="126" stroke="#475569" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="142" y1="140" x2="142" y2="245" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="3 3"/>
  <circle cx="105" cy="126" r="3.8" fill="#0d9488"/>
  <circle cx="105" cy="171" r="3.5" fill="#dc2626"/>
  <circle cx="142" cy="140" r="3.5" fill="#2563eb"/>
  <text x="29" y="130" font-size="10" font-weight="800" text-anchor="end" fill="#0f766e">P=AC</text>
  <text x="105" y="259" font-size="10" font-weight="800" text-anchor="middle" fill="#0f766e">Qₘc</text>
  <text x="144" y="259" font-size="10" font-weight="800" text-anchor="middle" fill="#1d4ed8">Qₒₚₜ</text>
  <!-- Excess capacity bracket -->
  <line x1="106" y1="271" x2="141" y2="271" stroke="#b45309" stroke-width="2"/>
  <text x="123" y="285" font-size="9.5" font-weight="800" text-anchor="middle" fill="#92400e">Excess Capacity</text>

  <!-- DIVIDER -->
  <line x1="226" y1="18" x2="226" y2="282" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="4 4"/>

  <!-- RIGHT PANEL: 2x2 Oligopoly Game Theory Matrix -->
  <text x="344" y="20" font-size="11.5" font-weight="800" text-anchor="middle" fill="#1e293b">Oligopoly Prisoner's Dilemma</text>
  <text x="364" y="42" font-size="10.5" font-weight="800" text-anchor="middle" fill="#1d4ed8">Firm B (2nd payoff)</text>
  <text x="324" y="60" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">High Price</text>
  <text x="406" y="60" font-size="10" font-weight="700" text-anchor="middle" fill="#334155">Cut Price</text>
  <text x="242" y="132" font-size="10.5" font-weight="800" text-anchor="middle" fill="#b91c1c" transform="rotate(-90 242 132)">Firm A (1st)</text>
  <text x="266" y="106" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">High</text>
  <text x="266" y="118" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">Price</text>
  <text x="266" y="182" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">Cut</text>
  <text x="266" y="194" font-size="9.5" font-weight="700" text-anchor="middle" fill="#334155">Price</text>
  <!-- Matrix cells -->
  <rect x="285" y="70" width="78" height="74" rx="5" fill="#dcfce7" stroke="#15803d" stroke-width="1.4"/>
  <text x="324" y="103" font-size="11.5" font-weight="800" text-anchor="middle" fill="#14532d">($90, $90)</text>
  <text x="324" y="122" font-size="9" font-weight="700" text-anchor="middle" fill="#15803d">Collusive Opt.</text>
  <rect x="367" y="70" width="78" height="74" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="406" y="103" font-size="11.5" font-weight="800" text-anchor="middle" fill="#334155">($40, $115)</text>
  <text x="406" y="122" font-size="9" text-anchor="middle" fill="#64748b">B cheats</text>
  <rect x="285" y="148" width="78" height="74" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.3"/>
  <text x="324" y="181" font-size="11.5" font-weight="800" text-anchor="middle" fill="#334155">($115, $40)</text>
  <text x="324" y="200" font-size="9" text-anchor="middle" fill="#64748b">A cheats</text>
  <rect x="367" y="148" width="78" height="74" rx="5" fill="#fef3c7" stroke="#b45309" stroke-width="2.2"/>
  <text x="406" y="180" font-size="11.5" font-weight="800" text-anchor="middle" fill="#92400e">($55, $55)</text>
  <text x="406" y="198" font-size="9.5" font-weight="800" text-anchor="middle" fill="#b45309">Nash Eq. ★</text>
  <text x="344" y="246" font-size="9.8" font-weight="700" text-anchor="middle" fill="#475569">Both have dominant strategy: Cut Price.</text>
  <text x="344" y="262" font-size="9.8" text-anchor="middle" fill="#64748b">Cartels break down without enforcement.</text>
</svg>`,
      diagramCaption:
        "Left: Long-run monopolistic competition achieves normal profit (P = AC) with excess capacity (Qₘc < Qₒₚₜ). Right: In a 2×2 oligopoly Prisoner's Dilemma, mutual undercutting is the unique Nash equilibrium despite lower combined profit.",
      workedExamples: [
        {
          title: "[HL] Solving a 2×2 Oligopoly Payoff Matrix",
          problem:
            "Two rival airlines, SkyJet and PacificAir, simultaneously pick **High Fare** or **Discount Fare**. Payoffs (SkyJet, PacificAir) in $ million are: (High, High) = (90, 90); (High, Discount) = (40, 115); (Discount, High) = (115, 40); (Discount, Discount) = (55, 55). Find each firm's dominant strategy and the Nash equilibrium.",
          steps: [
            "Check **SkyJet's** best response to each choice by PacificAir: if PacificAir picks High, SkyJet compares 115 vs 90 → **Discount**; if PacificAir picks Discount, SkyJet compares 55 vs 40 → **Discount**.",
            "Thus **Discount Fare** is SkyJet's strictly dominant strategy.",
            "Check **PacificAir's** best response (second number in each pair): if SkyJet picks High, 115 > 90 → **Discount**; if SkyJet picks Discount, 55 > 40 → **Discount**.",
            "Thus **Discount Fare** is also PacificAir's strictly dominant strategy, yielding a unique **Nash equilibrium** at **(Discount, Discount)** with payoffs **($55m, $55m)**.",
            "Notice the Prisoner's Dilemma: combined profit is **$110m**, losing **$70m** compared to the collusive outcome ($180m) — yet neither airline can profitably return to High Fare alone.",
          ],
          answer:
            "Dominant strategy for both = **Discount Fare**; Nash equilibrium = **(Discount, Discount)** with payoffs **($55m, $55m)**.",
          yourTurn: {
            question:
              "[HL] Suppose lower fuel costs lift the (Discount, Discount) payoffs to ($65m, $65m) while all other payoffs stay (90, 90), (40, 115), and (115, 40). Calculate the total combined industry profit (in $ million) at the Nash equilibrium.",
            answer: { type: "number", value: 130, display: "$130 million" },
            solution:
              "For both airlines, {{115 > 90}} and {{65 > 40}}, so Discount Fare remains strictly dominant. Both earn $65m at the Nash equilibrium → combined profit = {{65 + 65 = $130}} million.",
          },
        },
        {
          title: "[HL] Concentration Ratios & Horizontal Merger Scrutiny",
          problem:
            "A national supermarket industry has total annual sales of $20 billion. The top five chains report sales of $6.0bn, $4.4bn, $3.2bn, $2.4bn, and $1.4bn. Calculate the 4-firm concentration ratio ({{CR_4}}) before and after a proposed merger between Firm 4 and Firm 5.",
          steps: [
            "Convert each firm's sales into market shares: Firm 1 = {{6.0/20 = 30%}}, Firm 2 = {{4.4/20 = 22%}}, Firm 3 = {{3.2/20 = 16%}}, Firm 4 = {{2.4/20 = 12%}}, Firm 5 = {{1.4/20 = 7%}}.",
            "Pre-merger {{CR_4 = 30% + 22% + 16% + 12% = 80%}} — already a highly concentrated oligopoly.",
            "If Firm 4 and Firm 5 merge, their combined share is {{12% + 7% = 19%}} (now the 3rd-largest chain!).",
            "Post-merger {{CR_4 = 30% + 22% + 19% + 16% = 87%}}, giving competition regulators strong grounds to block the merger or demand store divestments.",
          ],
          answer: "Pre-merger {{CR_4 = 80%}}; post-merger {{CR_4 = 87%}}.",
          yourTurn: {
            question:
              "[HL] An industry has total sales of $500 million, and the largest three firms earn revenues of $140m, $115m, and $95m. Calculate the 3-firm concentration ratio ({{CR_3}}) as a percentage.",
            answer: { type: "number", value: 70, display: "70%" },
            solution:
              "Combined top-three sales = {{140 + 115 + 95 = $350}} million. {{CR_3 = (350 / 500) * 100 = 70%}}.",
          },
        },
      ],
      keyPoints: [
        "Monopolistic competition delivers **normal profit** in the long run ({{D = AR}} tangent to {{AC}}) with **excess capacity** ({{P > MC}}, {{Q < Q_{min AC}}}), traded off against consumer variety.",
        "Oligopoly is defined by **few dominant firms**, **high barriers**, and **mutual interdependence**, quantified using concentration ratios ({{CR_n}}).",
        "In a **Prisoner's Dilemma**, rational individual profit-maximising produces a **Nash equilibrium** with lower combined profits than collusion — explaining why cartels are prone to cheating.",
        "Free markets cannot guarantee **equity** because factor ownership is unequal, markets respond only to **effective demand**, and market power transfers consumer surplus to shareholders.",
      ],
      whyItWorks:
        "Game theory succeeds where ordinary supply-and-demand curves break down: when an industry has only 2–5 giant players, your demand curve depends on *how rivals react*. Mapping best responses in a payoff matrix pins down stable outcomes (Nash equilibria) even when firms refuse to cooperate.",
      strategies: [
        "When solving a 2×2 matrix, underline Firm A's best response (1st number) in each **column**, and underline Firm B's best response (2nd number) in each **row**. Any cell with **both numbers underlined** is a Nash equilibrium!",
        "When drawing long-run monopolistic competition, draw {{D = AR}} tangent to the *left, downward-sloping* flank of {{AC}} — and make sure {{MC = MR}} lines up vertically right beneath that exact tangency point!",
        "In 2.12 equity essays, explicitly define **equity vs equality** in paragraph 1 and link market power directly to **regressive consumer surplus losses**.",
      ],
      thinkDeeper:
        "Why do some real-world cartels like OPEC survive for decades despite Prisoner's Dilemma incentives to cheat? In **repeated games**, firms punish cheaters with temporary price wars ('tit-for-tat'), making long-term cooperation profitable — though non-OPEC shale producers still cap OPEC's power!",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Allocative Efficiency Condition (Social Optimum)",
        back: "{{MSB = MSC}} (Marginal Social Benefit equals Marginal Social Cost), maximising community surplus with zero welfare loss.",
        level: "SL",
      },
      {
        front: "Negative Externality of Production",
        back: "Production imposes uncompensated third-party costs ({{MSC > MPC}}), causing **overproduction** ({{Q_m > Q^*}}) and a welfare loss triangle pointing left to {{Q^*}}.",
        level: "SL",
      },
      {
        front: "Positive Externality of Consumption (Merit Good)",
        back: "Consumption generates third-party benefits ({{MSB > MPB}}), causing **underconsumption** ({{Q_m < Q^*}}) and a welfare loss triangle pointing right to {{Q^*}}.",
        level: "SL",
      },
      {
        front: "Pigouvian Tax",
        back: "An indirect tax set equal to Marginal External Cost ({{t = MEC}} at {{Q^*}}), shifting {{MPC}} up to {{MSC}} so producers internalise the externality.",
        level: "SL",
      },
      {
        front: "Common Pool Resource (CPR) & Tragedy of the Commons",
        back: "**Rivalrous** and **non-excludable** resource (e.g. open-ocean fish, atmosphere). Self-interested users overexploit it, threatening sustainability.",
        level: "SL",
      },
      {
        front: "Elinor Ostrom's Collective Self-Governance",
        back: "Local users sustainably manage CPRs without privatisation or central state control using clear boundaries, local rules, monitoring, and graduated sanctions.",
        level: "SL",
      },
      {
        front: "Pure Public Good & Free-Rider Problem",
        back: "**Non-rivalrous** AND **non-excludable** (e.g. national defence, street lights). Because non-payers cannot be blocked, people free-ride and private markets fail to supply the good (missing market).",
        level: "SL",
      },
      {
        front: "[HL] Adverse Selection",
        back: "Hidden **information before** a transaction (e.g. Akerlof's used-car lemons, high-risk insurance buyers), causing good-quality goods or low-risk buyers to exit.",
        level: "HL",
      },
      {
        front: "[HL] Moral Hazard",
        back: "Hidden **action after** a transaction — a protected party takes excessive risk because another party bears the downside (e.g. insured carelessness, bank bailouts).",
        level: "HL",
      },
      {
        front: "[HL] Signalling vs Screening",
        back: "**Signalling** = informed party reveals quality (warranties, degrees). **Screening** = uninformed party tests quality/risk (inspections, deductibles, medical checks).",
        level: "HL",
      },
      {
        front: "[HL] Law of Diminishing Marginal Returns",
        back: "In the **short run**, adding variable inputs (labour) to fixed inputs (capital) eventually causes Marginal Product ({{MP}}) to fall and Marginal Cost ({{MC}}) to rise.",
        level: "HL",
      },
      {
        front: "[HL] Short-Run Shut-Down Rule vs Break-Even",
        back: "Shut down in SR if {{P < AVC}} (revenue fails to cover variable costs). Stay open in SR if {{AVC <= P < AC}}. Break-even / normal profit occurs at {{P = AC}}.",
        level: "HL",
      },
      {
        front: "[HL] Perfect Competition Long-Run Equilibrium",
        back: "Free entry/exit eliminates abnormal profit and loss, leaving **normal profit** at {{P = MC = min AC}} — achieving BOTH allocative and productive efficiency.",
        level: "HL",
      },
      {
        front: "[HL] Natural Monopoly",
        back: "An industry where huge fixed costs cause {{LRAC}} to fall across the entire market demand, so one firm produces at lower unit cost than competing firms (e.g. water/power grids).",
        level: "HL",
      },
      {
        front: "[HL] Monopolistic Competition Long-Run Equilibrium",
        back: "{{D = AR}} is tangent to the downward-sloping portion of {{AC}} → **normal profit** ({{P = AC}}) with **excess capacity** ({{Q < Q_{min AC}}}) and {{P > MC}}.",
        level: "HL",
      },
      {
        front: "[HL] Nash Equilibrium & Dominant Strategy",
        back: "A **dominant strategy** is best regardless of rivals' moves. A **Nash equilibrium** is a strategy pair where neither player can gain by unilaterally deviating.",
        level: "HL",
      },
    ],
    mustKnow: [
      "Allocative efficiency occurs only at {{MSB = MSC}}; any externality creates a deadweight welfare loss triangle whose tip points toward {{Q^*}}.",
      "Classify goods cleanly using two tests: **Rivalrous?** and **Excludable?** (Public = non-rivalrous & non-excludable; CPR = rivalrous & non-excludable).",
      "Pure public goods cause a **missing market** via the free-rider problem; merit goods like public education/healthcare are rivalrous & excludable and are merely **underallocated**.",
      "Elinor Ostrom proved that **collective self-governance** by local communities is a viable third way to protect Common Pool Resources alongside state regulation and property rights.",
      "[HL] **Adverse selection** happens *before* the deal (hidden information); **moral hazard** happens *after* the deal (hidden action).",
      "[HL] Every profit-maximising firm produces where **{{MC = MR}}** (with {{MC}} rising); {{MC}} always cuts {{AVC}} and {{AC}} at their minimum points.",
      "[HL] A monopolist sets {{MC = MR}} for {{Q_m}}, reads {{P_m}} off {{D = AR}}, earns persistent LR abnormal profit if {{P_m > AC}}, and generates deadweight loss because {{P_m > MC}}.",
      "[HL] Monopolistic competition earns only normal profit in the long run (with excess capacity), while oligopolies face strategic interdependence modelled by **2×2 Prisoner's Dilemma payoff matrices**.",
      "[HL] Free markets cannot guarantee **equity** because initial factor endowments are unequal, markets follow effective demand ('dollar votes'), and market power transfers consumer surplus to shareholders.",
      "For IB Paper 1 Part (b) 15-mark essays, ALWAYS anchor evaluation in named **real-world examples** (e.g. Singapore Carbon Tax, EU ETS, OPEC, CMA/EU antitrust rulings).",
    ],
    misconceptions: [
      {
        wrong: "State hospitals and public schools are pure public goods because the government pays for them.",
        right: "Hospital beds and classroom seats are **rivalrous** and **excludable** — they are **merit goods** (positive consumption externalities), NOT pure public goods!",
        level: "SL",
      },
      {
        wrong: "A Pigouvian tax should eliminate 100% of pollution so output drops to zero.",
        right: "The socially optimal output {{Q^*}} where {{MSC = MSB}} still involves positive production whenever the marginal benefit of the good exceeds its full marginal social cost!",
        level: "SL",
      },
      {
        wrong: "The welfare loss triangle on a positive externality diagram sits to the right of {{Q^*}}.",
        right: "Underallocation means {{Q_m < Q^*}}, so the triangle sits **between {{Q_m}} and {{Q^*}}**, with its base at {{Q_m}} and its tip pointing right toward {{Q^*}}.",
        level: "SL",
      },
      {
        wrong: "[HL] A firm making an economic loss in the short run should immediately shut down.",
        right: "If {{P >= AVC}}, staying open covers all variable costs and pays part of fixed costs, creating a **smaller loss** than shutting down (where loss = entire {{TFC}}).",
        level: "HL",
      },
      {
        wrong: "[HL] A monopolist charges whatever price is read off the {{MC = MR}} intersection.",
        right: "{{MC = MR}} only gives the **output {{Q_m}}**. You must travel straight up to the **demand curve ({{D = AR}})** to find the monopoly price {{P_m}}!",
        level: "HL",
      },
      {
        wrong: "[HL] 'Normal profit' means the firm earns $0 accounting profit.",
        right: "Normal profit ({{TR = TC}}, {{P = AC}}) means **zero economic profit** — the owner still earns an accounting profit equal to their **opportunity cost** (next best alternative return).",
        level: "HL",
      },
      {
        wrong: "[HL] In a Prisoner's Dilemma, the Nash equilibrium is the outcome that maximises total industry profit.",
        right: "The Nash equilibrium is where neither firm wants to deviate *unilaterally* — in a Prisoner's Dilemma, this leads to mutual undercutting and **lower** joint profit than collusion!",
        level: "HL",
      },
    ],
    examMistakes: [
      "Labelling the vertical axis of an externality diagram simply 'Price' instead of **Price, Costs & Benefits ($)**.",
      "Shading the welfare loss triangle pointing toward {{Q_m}} instead of **pointing like an arrowhead toward {{Q^*}}**.",
      "Confusing **negative production** ({{MSC > MPC}}) with **negative consumption** ({{MPB > MSB}}) — read the stimulus carefully to see whether the spillover comes from *making* the good or *using* it!",
      "[HL] Drawing {{MC}} cutting {{AC}} to the left or right of {{AC}}'s minimum point — examiners check that {{MC}} passes cleanly through **min {{AC}}**.",
      "[HL] Drawing long-run monopolistic competition with {{D = AR}} tangent to the *minimum* of {{AC}} — it MUST be tangent on the **downward-sloping** part to show excess capacity!",
      "[HL] Confusing **diminishing marginal returns** (short run, fixed capital, shapes {{SRAC}}/{{MC}}) with **diseconomies of scale** (long run, all inputs variable, shapes {{LRAC}}).",
      "[HL] Writing down a firm's *own* strategy rather than verifying **best responses against BOTH rival columns/rows** when proving a dominant strategy or Nash equilibrium.",
      "Writing a Paper 1 Part (b) 15-mark essay without integrating specific, dated **real-world examples** — capping the essay well below Band 13–15!",
    ],
    mnemonics: [
      {
        topic: "Welfare Loss Triangle Direction",
        device: "Arrowhead Points to Q*",
        explanation:
          "Put the flat vertical base at the free-market output {{Q_m}} (between private and social curves), and aim the sharp vertex straight at the social optimum {{Q^*}}.",
        level: "SL",
      },
      {
        topic: "Classifying Goods (2×2 Grid)",
        device: "RE-Check: Rivalrous? Excludable?",
        explanation:
          "Yes+Yes = Private · No+No = Public (Missing Market) · Yes+No = Common Pool (Tragedy) · No+Yes = Club/Toll.",
        level: "SL",
      },
      {
        topic: "[HL] Reading Monopoly Profit Off a Diagram",
        device: "Cross, Up, Down, Box",
        explanation:
          "1) **Cross** {{MC = MR}} to find {{Q_m}}; 2) Go **Up** to {{D = AR}} for {{P_m}}; 3) Read **Down** to {{AC}} for unit cost {{C_m}}; 4) Shade the **Box** {{(P_m - C_m) * Q_m}}.",
        level: "HL",
      },
      {
        topic: "[HL] Asymmetric Information Timing & Remedies",
        device: "AB-MA · SI-SU",
        explanation:
          "**A**dverse selection = **B**efore deal; **M**oral hazard = **A**fter deal. **S**ignalling = **I**nformed party; **S**creening = **U**ninformed party.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Singapore Carbon Tax & Electronic Road Pricing (ERP)",
        detail:
          "Singapore's carbon tax rose from S$5/tonne CO₂e (2019–2023) to S$25/tonne in 2024 and S$45/tonne in 2026 (targeting S$50–$80 by 2030), internalising negative production externalities while recycling revenue into household U-Save rebates and green grants. ERP gantries dynamically price peak road congestion.",
        emoji: "🇸🇬",
      },
      {
        title: "EU Emissions Trading System (EU ETS)",
        detail:
          "The world's largest cap-and-trade market caps power-sector and industrial emissions across Europe, shrinking the cap annually so permit prices (around €60–€90/tonne in recent years) reward low-cost decarbonisation.",
        emoji: "🇪🇺",
      },
      {
        title: "Elinor Ostrom's Swiss Alpine Meadows & Japanese Forests",
        detail:
          "Törbel villagers in Switzerland sustainably governed common Alpine grazing pastures for over 500 years through community-written stocking limits, shared monitoring, and fines — proving CPRs need not collapse into Hardin's tragedy.",
        emoji: "🏔️",
      },
      {
        title: "2008 Banking Crisis & Moral Hazard",
        detail:
          "Systemically important ('too-big-to-fail') banks took extreme mortgage-backed leverage believing governments would rescue depositors and creditors; post-2008 Basel III rules raised capital buffers to curb moral hazard.",
        emoji: "🏦",
      },
      {
        title: "OPEC+ Oil Quotas & Cartel Cheating",
        detail:
          "OPEC+ coordinates crude oil production cuts to hold global prices above competitive marginal cost, yet member states repeatedly face Prisoner's Dilemma temptations to pump above quota when budgets tighten.",
        emoji: "🛢️",
      },
      {
        title: "Natural Monopoly Regulation: Electricity & Water Grids",
        detail:
          "Duplicating underground water pipes or power cables would waste billions in fixed costs; regulators such as Singapore's EMA and UK's Ofgem allow single grid operators (e.g. SP Group) under strict price/revenue caps.",
        emoji: "⚡",
      },
    ],
    videos: [
      {
        title: "Externalities, Welfare Loss Triangles & Pigouvian Taxes (IB Economics)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+externalities+welfare+loss",
      },
      {
        title: "Public Goods, Common Pool Resources & Elinor Ostrom (IB Micro)",
        channel: "Jacob Clifford / ACDC Econ",
        url: "https://www.youtube.com/results?search_query=IB+Economics+public+goods+common+pool+resources+Elinor+Ostrom",
      },
      {
        title: "HL Monopoly, Perfect Competition, Shut-Down & DWL Diagrams",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+monopoly+perfect+competition+shut+down",
      },
      {
        title: "HL Oligopoly Game Theory, Prisoner's Dilemma & Nash Equilibrium",
        channel: "MRU / EconplusDal",
        url: "https://www.youtube.com/results?search_query=IB+Economics+oligopoly+game+theory+prisoners+dilemma+Nash+equilibrium",
      },
    ],
    formulas: [
      {
        name: "Social Optimum (Allocative Efficiency)",
        formula: "{{MSB = MSC}}",
        note: "Maximum community surplus; zero deadweight welfare loss.",
        level: "SL",
      },
      {
        name: "Welfare Loss Triangle Area (Linear)",
        formula: "{{DWL = 1/2 * |Q_m - Q^*| * |MEC or MEB at Q_m|}}",
        note: "Tip of the triangle always points toward Q*.",
        level: "SL",
      },
      {
        name: "Optimal Pigouvian Tax / Subsidy",
        formula: "{{t^* = MEC(Q^*)}}  or  {{s^* = MEB(Q^*)}}",
        note: "Internalises the externality at the socially optimal output.",
        level: "SL",
      },
      {
        name: "Total, Average & Marginal Cost",
        formula: "{{TC = TFC + TVC}},  {{AC = TC/Q = AFC + AVC}},  {{MC = ΔTC/ΔQ}}",
        note: "MC cuts AVC and AC at their minimum points.",
        level: "HL",
      },
      {
        name: "Total, Average & Marginal Revenue",
        formula: "{{TR = P * Q}},  {{AR = TR/Q = P}},  {{MR = ΔTR/ΔQ}}",
        note: "For linear demand P = a − bQ, MR = a − 2bQ (twice as steep).",
        level: "HL",
      },
      {
        name: "Profit Maximization Condition",
        formula: "{{MC = MR}}  (with MC rising)",
        note: "Total Economic Profit π = TR − TC = (P − AC) × Q.",
        level: "HL",
      },
      {
        name: "Revenue Maximization & Sales Maximization",
        formula: "{{MR = 0}}  (Rev Max)   |   {{AR = AC}}  (Sales Max, Normal Profit)",
        note: "Alternative firm objectives under divorce of ownership and control.",
        level: "HL",
      },
      {
        name: "Short-Run Shut-Down & Long-Run Break-Even",
        formula: "{{P < AVC}}  (SR Shut Down)   |   {{P = AC}}  (Normal Profit / Break-Even)",
        note: "If AVC ≤ P < AC, continue in SR to reduce loss below TFC.",
        level: "HL",
      },
      {
        name: "Perfect Competition Long-Run Efficiency",
        formula: "{{P = MR = MC = min AC}}",
        note: "Simultaneously allocatively (P = MC) and productively (min AC) efficient.",
        level: "HL",
      },
      {
        name: "Monopoly Deadweight Loss (Linear Demand, Constant MC)",
        formula: "{{DWL = 1/2 * (P_m - MC) * (Q_{pc} - Q_m)}}",
        note: "Output lost relative to competitive P = MC benchmark.",
        level: "HL",
      },
      {
        name: "n-Firm Concentration Ratio",
        formula: "{{CR_n = (Sum of top n firms' sales / Total industry sales) * 100%}}",
        note: "Measures market power and oligopoly concentration (typically CR₃ or CR₄).",
        level: "HL",
      },
      {
        name: "Expected Value under Adverse Selection",
        formula: "{{E(V) = p_H * V_H + p_L * V_L}}",
        note: "If E(V) < high-quality seller reservation price, high-quality units exit.",
        level: "HL",
      },
    ],
  },
};
