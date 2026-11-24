import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "1-intro-economics",
  title: "Unit 1: Introduction to Economics",
  strand: "Unit 1: Intro to Economics",
  icon: "🧭",
  level: "SL",
  summary:
    "Scarcity, opportunity cost, factors of production, the PPC, the five-sector circular flow, economic systems, positive vs normative methodology, the 9 IB Key Concepts, and the evolution of economic thought.",
  intro:
    "Economics begins with one stubborn fact about the world: **human wants are unlimited, while the resources available to satisfy them are finite**. Every decision — whether Singapore builds Changi Terminal 5 or expands public housing, whether a student revises Economics or plays football, or whether a nation prioritises rapid GDP growth or climate sustainability — involves a trade-off. In Unit 1, you build the core toolkit used across the entire IB Diploma Economics course: the **Production Possibilities Curve (PPC)**, the **circular flow of income**, **economic methodology**, the **9 IB Key Concepts**, and four centuries of competing ideas about how economies work and how they ought to be organised.",
  guide: [
    // =========================================================================
    // SECTION 1: scarcity-choice-ppc
    // =========================================================================
    {
      id: "scarcity-choice-ppc",
      heading: "1.1 Scarcity, Opportunity Cost, Factors of Production & The PPC",
      level: "SL",
      discovery: {
        problem:
          "Singapore has a fixed land area of roughly 735 km². Suppose the government allocates a reclaimed coastal plot to build a new deep-water container terminal instead of an eco-park or a public housing estate. Even if the land was already state-owned and no cash purchase price changed hands, did building the port have a real economic cost? And why might shifting the *last* 10% of engineers from healthcare to port construction sacrifice more healthcare output than shifting the *first* 10%?",
        idea:
          "Yes — the true economic cost is the **opportunity cost**: the value of the **next best alternative foregone** (either the public housing or the eco-park, whichever ranked second). Cash outlays alone miss foregone alternatives. Furthermore, resources are **not equally suited** to every task: the first engineers moved may be civil engineers easily redeployed to ports, whereas the last specialists moved are biomedical engineers whose exit causes a huge drop in healthcare output — producing **increasing opportunity cost** and a bowed-out (concave) PPC.",
      },
      body: `### The Basic Economic Problem: Scarcity & Choice

Because productive resources are finite (**scarce**) relative to infinite human needs and wants, every society must answer three fundamental **basic economic questions**:

1. **What to produce** (and in what quantities)?
2. **How to produce** (which combination of labour, technology, and raw materials)?
3. **For whom to produce** (how output and income are distributed across households)?

Whenever scarce resources are allocated to one use, they cannot simultaneously be used for another. **Opportunity cost** is the **next best alternative foregone** when an economic choice is made.

### Free Goods vs Economic Goods

- An **economic good** is scarce relative to demand, uses scarce resources in its production, and therefore carries an **opportunity cost** (e.g. smartphones, hospital beds, clean piped water, state-funded public schools — note that "free at the point of use" healthcare or education is *still* an economic good because taxpayers and resources face an opportunity cost!).
- A **free good** is so abundant relative to demand that its availability does not involve an opportunity cost (e.g. sunlight, ambient unpolluted air, seawater in the open ocean). Today, clean air in polluted cities has effectively become an economic good because abating pollution uses scarce resources.

### The Four Factors of Production & Their Rewards

Resources used to produce goods and services are grouped into four **factors of production**, each earning a distinct **factor income (reward)**:

| Factor of Production | Economic Meaning | Factor Reward (Income) |
|---|---|---|
| **Land** | All natural resources on, above, or below the Earth's surface (soil, minerals, forests, fish stocks, solar radiation). | **Rent** |
| **Labour** | Human physical and mental effort contributed to production, enhanced by education and training (**human capital**). | **Wages** (and salaries) |
| **Capital** | Human-made physical assets used to produce other goods and services (machinery, factories, ports, software, roads — *not* financial money). | **Interest** |
| **Entrepreneurship** | Human skill in organising the other three factors, innovating, and bearing the **risk** of starting and running a business. | **Profit** |

### The Production Possibilities Curve (PPC)

A **Production Possibilities Curve (PPC)** (also called a Production Possibilities Frontier, PPF) shows the **maximum combinations of two goods or services** an economy can produce in a given time period when **all available resources are fully and efficiently employed** at a fixed state of technology.

- **Points on the PPC** (e.g. A, B, C): **Productively efficient** — resources are fully employed with minimum waste; producing more of one good requires sacrificing some of the other (illustrating scarcity, choice, and opportunity cost).
- **Points inside the PPC** (e.g. U): **Inefficient / unemployed resources** — the economy is operating below potential output (for example during a recession). Moving from U toward the boundary represents **actual economic growth** (using previously idle resources), with *zero* opportunity cost of the other good if moving north-east!
- **Points outside the PPC** (e.g. X): **Currently unattainable** given present resources and technology.
- **Outward shift of the entire PPC** (from {{PPC_1}} to {{PPC_2}}): **Potential economic growth** — an expansion in the economy's productive capacity caused by an increase in the **quantity** or **quality** of factors of production (e.g. net immigration, investment in capital goods, education/training, or technological innovation). An **inward shift** reflects a loss of capacity (war, natural disaster, emigration, capital depreciation).

### Constant vs Increasing Opportunity Cost

- **Bowed-out (concave to the origin) PPC**: The realistic case. As an economy reallocates resources from capital goods to consumer goods, the **marginal opportunity cost increases** because factors of production are specialised and imperfectly adaptable across industries.
- **Straight-line (linear) PPC**: Occurs only when factors of production are **perfectly adaptable** between the two goods, so the slope — and therefore the opportunity cost per unit — stays **constant** everywhere along the curve.

### The 9 IB Economics Key Concepts

Every IB Economics essay and Internal Assessment (IA) commentary must weave in one or more of the **9 Key Concepts**:

| Concept | Core Question in IB Economics |
|---|---|
| **Scarcity** | Why do finite resources force trade-offs and opportunity costs? |
| **Choice** | How do consumers, firms, and governments weigh marginal benefits against costs? |
| **Efficiency** | Are resources producing the socially optimal mix (**allocative**) at lowest cost (**productive**)? |
| **Equity** | Is the distribution of income, wealth, and opportunity *fair* (normative)? |
| **Economic well-being** | Does policy improve multidimensional living standards beyond GDP? |
| **Sustainability** | Can current needs be met without compromising future generations' ecological base? |
| **Change** | How do economies evolve through shocks, technology, and policy shifts over time? |
| **Interdependence** | How do households, firms, governments, and trading nations affect one another? |
| **Intervention** | When and how effectively should governments correct market failures or stabilise the economy? |`,
      diagram: `<svg viewBox="0 0 500 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Production Possibilities Curve showing concave frontier PPC1, outward shift to PPC2 for potential growth, inefficient point U inside, and unattainable point X outside">
  <rect x="0" y="0" width="500" height="320" fill="#ffffff"/>
  <defs>
    <marker id="arr-ppc" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488"/>
    </marker>
    <marker id="arr-act" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="70" y1="270" x2="455" y2="270" stroke="#24190a" stroke-width="2"/>
  <line x1="70" y1="270" x2="70" y2="30" stroke="#24190a" stroke-width="2"/>
  <text x="262" y="304" text-anchor="middle" font-size="13" font-weight="700" fill="#24190a">Consumer Goods (units per year)</text>
  <text x="24" y="150" text-anchor="middle" font-size="13" font-weight="700" fill="#24190a" transform="rotate(-90 24 150)">Capital Goods (units per year)</text>
  <text x="58" y="284" text-anchor="end" font-size="11" fill="#6b563c">0</text>
  <!-- PPC1 concave curve -->
  <path d="M 70 80 Q 250 85 320 270" fill="none" stroke="#b45309" stroke-width="3"/>
  <text x="292" y="216" font-size="12" font-weight="800" fill="#b45309">PPC₁</text>
  <!-- PPC2 shifted outward curve -->
  <path d="M 70 42 Q 315 50 405 270" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="382" y="176" font-size="12" font-weight="800" fill="#0d9488">PPC₂</text>
  <!-- Shift arrows -->
  <line x1="252" y1="138" x2="298" y2="112" stroke="#0d9488" stroke-width="2" marker-end="url(#arr-ppc)"/>
  <text x="304" y="106" font-size="11" font-weight="700" fill="#0d9488">Potential growth</text>
  <!-- Points A and B on PPC1 with guide lines -->
  <line x1="70" y1="104" x2="178" y2="104" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="178" y1="104" x2="178" y2="270" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="178" cy="104" r="5" fill="#b45309"/>
  <text x="184" y="96" font-size="12" font-weight="800" fill="#24190a">A</text>
  <line x1="70" y1="168" x2="255" y2="168" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="255" y1="168" x2="255" y2="270" stroke="#9ca3af" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="255" cy="168" r="5" fill="#b45309"/>
  <text x="263" y="164" font-size="12" font-weight="800" fill="#24190a">B</text>
  <!-- Opportunity cost brackets -->
  <text x="64" y="108" text-anchor="end" font-size="11" fill="#6b563c">K₁</text>
  <text x="64" y="172" text-anchor="end" font-size="11" fill="#6b563c">K₂</text>
  <text x="178" y="284" text-anchor="middle" font-size="11" fill="#6b563c">C₁</text>
  <text x="255" y="284" text-anchor="middle" font-size="11" fill="#6b563c">C₂</text>
  <!-- Inefficient point U and Actual growth arrow -->
  <circle cx="140" cy="212" r="5" fill="#c2410c"/>
  <text x="122" y="228" font-size="12" font-weight="800" fill="#c2410c">U</text>
  <text x="90" y="244" font-size="10" fill="#c2410c">(idle resources)</text>
  <line x1="146" y1="206" x2="188" y2="164" stroke="#b45309" stroke-width="1.8" marker-end="url(#arr-act)"/>
  <text x="164" y="206" font-size="10" font-weight="700" fill="#b45309">Actual growth</text>
  <!-- Unattainable point X -->
  <circle cx="385" cy="86" r="5" fill="#6b563c"/>
  <text x="394" y="84" font-size="12" font-weight="800" fill="#6b563c">X</text>
  <text x="355" y="100" font-size="10" fill="#6b563c">(unattainable on PPC₁)</text>
</svg>`,
      diagramCaption:
        "Figure 1.1: Moving from A to B sacrifices (K₁ − K₂) capital goods to gain (C₂ − C₁) consumer goods. Moving from U towards PPC₁ is actual growth; shifting PPC₁ to PPC₂ is potential growth.",
      workedExamples: [
        {
          title: "Constant vs Increasing Opportunity Cost on a PPC",
          problem:
            "An island economy produces two goods: **Consumer Goods (C)** and **Capital Goods (K)**. Its bowed-out PPC passes through the combinations below. Calculate the **opportunity cost per additional consumer good** when moving from A to B, and again from C to D, and explain why the two values differ.\n\n| Combination | Consumer Goods (units) | Capital Goods (units) |\n|---|---|---|\n| A | 0 | 100 |\n| B | 20 | 90 |\n| C | 40 | 70 |\n| D | 60 | 40 |\n| E | 80 | 0 |",
          steps: [
            "Recall the per-unit opportunity cost formula: {{OC = (\"Units sacrificed\") / (\"Units gained\")}}.",
            "From **A (0, 100)** to **B (20, 90)**: Consumer goods rise by {{20 - 0 = 20}} units while capital goods fall by {{100 - 90 = 10}} units.",
            "Per-unit opportunity cost from A → B: {{10 / 20 = 0.5}} capital goods per consumer good.",
            "From **C (40, 70)** to **D (60, 40)**: Consumer goods rise by {{60 - 40 = 20}} units while capital goods fall by {{70 - 40 = 30}} units.",
            "Per-unit opportunity cost from C → D: {{30 / 20 = 1.5}} capital goods per consumer good.",
            "Explain the rise (0.5 → 1.5): Factors of production are specialised and not equally adaptable between sectors; shifting progressively less suited capital-goods workers and machinery into consumer goods causes steeper losses in capital-goods output.",
          ],
          answer:
            "0.5 capital goods per consumer good (A → B) rising to 1.5 capital goods per consumer good (C → D), demonstrating increasing opportunity cost.",
          yourTurn: {
            question:
              "A different economy has a **straight-line (linear)** PPC with maximum capacity of **80 laptops** or **200 smartphones** per day. What is the constant opportunity cost of producing **1 additional laptop**, measured in smartphones?",
            answer: { type: "number", value: 2.5, display: "2.5" },
            solution:
              "Moving from all smartphones (200) to all laptops (80) gives up 200 smartphones to gain 80 laptops: {{200 / 80 = 2.5}} smartphones per laptop.",
          },
        },
        {
          title: "Capital Goods Today vs Potential Growth Tomorrow",
          problem:
            "Country Alpha chooses point A (high capital goods, moderate consumer goods) on its PPC, while identical Country Beta chooses point B (low capital goods, high consumer goods). Explain which economy's PPC will shift outward further in 10 years, assuming equal depreciation.",
          steps: [
            "Distinguish the two goods: **consumer goods** satisfy current wants immediately, whereas **capital goods** (machinery, ports, factories) expand future productive capacity.",
            "Because Country Alpha allocates more scarce resources to producing capital goods today, its net capital stock grows faster than Country Beta's (provided gross capital production exceeds depreciation).",
            "A larger quantity (and newer quality) of physical capital shifts Country Alpha's PPC further outward over the next decade — illustrating the **intertemporal trade-off** between current consumption and future potential growth.",
          ],
          answer:
            "Country Alpha's PPC shifts further outward because higher current investment in capital goods expands its future factor endowment, at the opportunity cost of lower current living standards.",
        },
      ],
      keyPoints: [
        "**Scarcity** forces choice; every choice involving scarce resources has an **opportunity cost** (the next best alternative foregone).",
        "Zero-priced state services (public schools, NHS/polyclinic care) are **economic goods**, not free goods, because they consume scarce resources.",
        "The four factors of production and their rewards are **Land → Rent**, **Labour → Wages**, **Capital → Interest**, and **Entrepreneurship → Profit**.",
        "On a PPC, **actual growth** is a movement from an interior point toward the curve, whereas **potential growth** is an outward shift of the entire curve.",
        "A **concave (bowed-out)** PPC reflects **increasing opportunity cost** due to imperfectly adaptable factors; a **linear** PPC reflects constant opportunity cost.",
      ],
      whyItWorks:
        "The PPC condenses the entire problem of resource allocation onto two axes. Its **boundary** captures scarcity and productive efficiency; its **negative slope** captures opportunity cost; its **curvature** captures factor specialisation; **interior points** capture unemployment; and **outward shifts** capture long-run growth. Because every subsequent IB topic (comparative advantage in Unit 4, LRAS in Unit 3, allocative efficiency in Unit 2) builds directly on these five visual features, mastering the PPC gives you a mental anchor for the whole diploma.",
      strategies: [
        "Always check whether a question asks for **total opportunity cost** (e.g. 30 capital goods lost) or **per-unit opportunity cost** (e.g. 1.5 capital goods per consumer good).",
        "Label **both axes** with specific goods (e.g. Capital Goods vs Consumer Goods, or Manufactured Goods vs Agricultural Goods) — never label a PPC with 'Price' and 'Quantity'!",
        "When explaining an outward shift, explicitly specify whether it was caused by greater **quantity** of factors, higher **quality** of factors, or improved **technology**.",
      ],
      thinkDeeper:
        "Can a PPC shift outward along **only one axis** (pivotal shift)? Yes — if a technological breakthrough improves productivity exclusively in solar-panel manufacturing without helping healthcare, the solar-panel intercept moves outward while the healthcare intercept stays fixed. Yet even then, society can consume *more of both* goods by producing the same number of solar panels with fewer workers and releasing the spare workers to healthcare!",
    },

    // =========================================================================
    // SECTION 2: circular-flow-economic-systems
    // =========================================================================
    {
      id: "circular-flow-economic-systems",
      heading: "1.1 Circular Flow of Income & Free vs Planned vs Mixed Economies",
      level: "SL",
      discovery: {
        problem:
          "Suppose households in an economy decide to play it safe and save an extra $20 billion of their wages rather than spending it in shops, while banks keep that extra cash idle and firms do not increase investment. Does the rest of the economy stay the same size, or does total national income shrink — and why might one person's thrift become another person's job loss?",
        idea:
          "Because **one person's spending is another person's income**! Savings are a **leakage (withdrawal)** out of the circular flow. Unless banks channel that extra $20 billion into **investment** (or the government/foreign buyers inject an equal amount via G or X), firms face unsold inventories, cut production, and reduce wages — causing total national income to **contract**.",
      },
      body: `### The Two-Sector Closed Economy (No Government)

In the simplest **two-sector circular flow of income**, only **households** and **firms** exist:

- **Factor market (real & money flows)**: Households own and supply the four factors of production (**land, labour, capital, entrepreneurship**) to firms. In return, firms pay **factor incomes** (**rent, wages, interest, profit**) to households.
- **Product market (real & money flows)**: Households spend all of their income on **consumer expenditure (C)** to buy **goods and services** produced by firms.

In this closed, two-sector model, the **value of output produced** equals **total factor income earned**, which equals **total expenditure on output**:

{{"National Output" ≡ "National Income (Y)" ≡ "National Expenditure"}}

(In Unit 3, this equivalence becomes the three methods of measuring GDP!)

### The Five-Sector Open Economy: Leakages vs Injections

Real economies include three additional sectors — **financial institutions (banks)**, the **government**, and the **foreign (international) sector** — which create **leakages (withdrawals, W)** out of the income stream and **injections (J)** into it:

| Additional Sector | Leakage / Withdrawal (W) | Injection (J) |
|---|---|---|
| **Financial Sector** | **Savings (S)**: income not spent on current domestic consumption. | **Investment (I)**: firms' spending on new capital goods (factories, machinery, software). |
| **Government Sector** | **Taxation (T)**: compulsory levies on income and spending transferred to the state. | **Government Spending (G)**: state purchases of goods, services, and infrastructure. |
| **Foreign Sector** | **Imports (M)**: domestic spending on foreign-produced goods and services. | **Exports (X)**: foreign spending on domestically produced goods and services. |

- **Total Leakages (Withdrawals)**: {{W = S + T + M}}
- **Total Injections**: {{J = I + G + X}}

### Expanding, Equilibrium & Contracting National Income

Comparing total injections against total leakages tells us immediately which way the economy is moving:

- **{{I + G + X = S + T + M}} (Equilibrium)**: Total injections exactly offset total leakages; national income stays constant.
- **{{I + G + X > S + T + M}} (Net Injection → Expansion)**: More spending enters the flow than leaves it. Firms see inventories fall, increase output, and hire more factors of production, so **national income expands** (until higher income induces higher S, T, and M to restore balance).
- **{{I + G + X < S + T + M}} (Net Leakage → Contraction)**: More income leaks out than returns. Firms accumulate unsold stock, scale back output, and lay off workers, so **national income contracts**.

> Note: Equilibrium does **not** require each individual pair to balance ({{S = I}}, {{T = G}}, {{M = X}}). A country can run a trade deficit ({{M > X}}) and still be in circular-flow equilibrium if a government deficit ({{G > T}}) or strong private investment ({{I > S}}) offsets it!

### Free-Market, Planned & Mixed Economic Systems

Economies differ in **how** they answer *what, how, and for whom to produce*:

| Feature | Free-Market Economy | Centrally Planned (Command) Economy | Mixed Economy |
|---|---|---|---|
| **Resource ownership** | Predominantly **private** property rights. | Predominantly **state / public** ownership. | Combination of **private** and **public** ownership. |
| **Allocation mechanism** | **Price mechanism** (demand, supply, and profit motive). | **Central planning agency** sets quotas and targets. | Price mechanism in most markets, corrected by **government intervention**. |
| **Key strengths** | High consumer choice, innovation incentives, productive efficiency, rapid response to changing tastes. | Can prioritise basic needs (housing, literacy), lower income inequality, rapid mobilisation of resources for national projects. | Balances market efficiency and innovation with safety nets, public goods, and regulation of externalities. |
| **Key weaknesses** | Market failures (pollution, under-provision of public/merit goods), monopoly power, wide income & wealth inequality. | Chronic shortages/surpluses (coordination failure), weak work/innovation incentives, bureaucratic inefficiency, lack of choice. | Risk of **government failure** (regulatory capture, bloated bureaucracy, distortionary taxes) if intervention is poorly designed. |

In reality, **every modern economy is a mixed economy** sitting along a spectrum — from more market-oriented economies (e.g. Singapore, Hong Kong, USA) to social-market welfare states (e.g. Sweden, Germany) and state-capitalist hybrids (e.g. China, Vietnam).`,
      diagram: `<svg viewBox="0 0 520 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-sector circular flow of income diagram linking Households and Firms with leakages Savings Taxation Imports and injections Investment Government Spending Exports">
  <rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
  <defs>
    <marker id="arr-cf-b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#b45309"/>
    </marker>
    <marker id="arr-cf-t" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#0d9488"/>
    </marker>
    <marker id="arr-cf-r" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#c2410c"/>
    </marker>
    <marker id="arr-cf-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
  </defs>
  <!-- Households and Firms boxes -->
  <rect x="30" y="105" width="122" height="58" rx="10" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <text x="91" y="131" text-anchor="middle" font-size="13" font-weight="800" fill="#24190a">HOUSEHOLDS</text>
  <text x="91" y="148" text-anchor="middle" font-size="10" fill="#6b563c">Own factors · Consume</text>

  <rect x="368" y="105" width="122" height="58" rx="10" fill="#ccfbf1" stroke="#0d9488" stroke-width="2"/>
  <text x="429" y="131" text-anchor="middle" font-size="13" font-weight="800" fill="#24190a">FIRMS</text>
  <text x="429" y="148" text-anchor="middle" font-size="10" fill="#115e59">Produce output · Pay Y</text>

  <!-- Inner loops -->
  <!-- Top: Factor incomes Firms -> Households -->
  <path d="M 368 118 Q 260 64 156 118" fill="none" stroke="#0d9488" stroke-width="2.5" marker-end="url(#arr-cf-t)"/>
  <text x="260" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="#0d9488">Factor Incomes (Rent, Wages, Interest, Profit)</text>
  <text x="260" y="90" text-anchor="middle" font-size="10" fill="#6b563c">← Factors of Production supplied (Real Flow) →</text>

  <!-- Bottom: Consumer spending Households -> Firms -->
  <path d="M 152 150 Q 260 202 364 150" fill="none" stroke="#b45309" stroke-width="2.5" marker-end="url(#arr-cf-b)"/>
  <text x="260" y="196" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">Consumer Expenditure (C)</text>
  <text x="260" y="210" text-anchor="middle" font-size="10" fill="#6b563c">← Goods &amp; Services supplied (Real Flow) →</text>

  <!-- Three external sectors at bottom -->
  <rect x="195" y="232" width="130" height="26" rx="6" fill="#f8f2e4" stroke="#6b563c" stroke-width="1.4"/>
  <text x="260" y="249" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Banks / Financial</text>

  <rect x="195" y="266" width="130" height="26" rx="6" fill="#f8f2e4" stroke="#6b563c" stroke-width="1.4"/>
  <text x="260" y="283" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Government</text>

  <rect x="195" y="300" width="130" height="24" rx="6" fill="#f8f2e4" stroke="#6b563c" stroke-width="1.4"/>
  <text x="260" y="316" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Foreign Sector</text>

  <!-- Leakages (Left: Households -> External Sectors) -->
  <path d="M 91 163 L 91 245 L 190 245" fill="none" stroke="#c2410c" stroke-width="2" marker-end="url(#arr-cf-r)"/>
  <path d="M 74 163 L 74 279 L 190 279" fill="none" stroke="#c2410c" stroke-width="2" marker-end="url(#arr-cf-r)"/>
  <path d="M 57 163 L 57 312 L 190 312" fill="none" stroke="#c2410c" stroke-width="2" marker-end="url(#arr-cf-r)"/>
  <text x="142" y="241" text-anchor="middle" font-size="10" font-weight="800" fill="#c2410c">Savings (S)</text>
  <text x="142" y="275" text-anchor="middle" font-size="10" font-weight="800" fill="#c2410c">Taxation (T)</text>
  <text x="142" y="308" text-anchor="middle" font-size="10" font-weight="800" fill="#c2410c">Imports (M)</text>
  <text x="24" y="260" text-anchor="middle" font-size="11" font-weight="800" fill="#c2410c" transform="rotate(-90 24 260)">LEAKAGES (W)</text>

  <!-- Injections (Right: External Sectors -> Firms) -->
  <path d="M 325 245 L 429 245 L 429 168" fill="none" stroke="#15803d" stroke-width="2" marker-end="url(#arr-cf-g)"/>
  <path d="M 325 279 L 446 279 L 446 168" fill="none" stroke="#15803d" stroke-width="2" marker-end="url(#arr-cf-g)"/>
  <path d="M 325 312 L 463 312 L 463 168" fill="none" stroke="#15803d" stroke-width="2" marker-end="url(#arr-cf-g)"/>
  <text x="378" y="241" text-anchor="middle" font-size="10" font-weight="800" fill="#15803d">Investment (I)</text>
  <text x="380" y="275" text-anchor="middle" font-size="10" font-weight="800" fill="#15803d">Govt Spend (G)</text>
  <text x="380" y="308" text-anchor="middle" font-size="10" font-weight="800" fill="#15803d">Exports (X)</text>
  <text x="496" y="260" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d" transform="rotate(90 496 260)">INJECTIONS (J)</text>

  <!-- Title badge -->
  <rect x="130" y="10" width="260" height="28" rx="14" fill="#fef3c7" stroke="#eadcc4"/>
  <text x="260" y="28" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">Equilibrium: S + T + M = I + G + X</text>
</svg>`,
      diagramCaption:
        "Figure 1.2: Five-sector circular flow of income. Leakages (S, T, M) withdraw spending from the domestic loop; injections (I, G, X) add new spending to firms.",
      workedExamples: [
        {
          title: "Diagnosing Expansion vs Contraction from Circular-Flow Data",
          problem:
            "In a given quarter, an economy records **Savings (S) = $45 billion**, **Taxation (T) = $60 billion**, **Imports (M) = $35 billion**, **Investment (I) = $50 billion**, **Government Spending (G) = $55 billion**, and **Exports (X) = $50 billion**. Determine whether national income will expand, contract, or remain in equilibrium, and calculate the net flow.",
          steps: [
            "Sum the three **leakages (withdrawals)**: {{W = S + T + M = 45 + 60 + 35 = 140}} ($ billion).",
            "Sum the three **injections**: {{J = I + G + X = 50 + 55 + 50 = 155}} ($ billion).",
            "Compute the **net injection**: {{J - W = 155 - 140 = +15}} ($ billion).",
            "Interpret the result: Since total injections exceed total leakages ({{J > W}}), more money enters the domestic income stream than leaves it, so **national income will expand**.",
            "Notice that even though the government runs a small budget surplus ({{T = 60 > G = 55}}), strong exports and investment push total injections above total leakages.",
          ],
          answer:
            "Net injection of +$15 billion (J = $155 bn > W = $140 bn); national income will expand.",
          yourTurn: {
            question:
              "In another economy, **S = $30 bn**, **T = $50 bn**, **M = $40 bn**, **I = $35 bn**, **G = $45 bn**, and **X = $25 bn**. Calculate the net injection {{(I + G + X) - (S + T + M)}} in $ billion (include a minus sign if leakages exceed injections).",
            answer: { type: "number", value: -15, display: "−15" },
            solution:
              "Total injections = 35 + 45 + 25 = 105; total leakages = 30 + 50 + 40 = 120. Net injection = {{105 - 120 = -15}} ($ billion), so national income contracts.",
          },
        },
      ],
      keyPoints: [
        "In the two-sector model, **national output ≡ national income ≡ national expenditure** because households spend all factor incomes on firms' output.",
        "The three **leakages** are **S (Savings), T (Taxation), and M (Imports)**; the three **injections** are **I (Investment), G (Government spending), and X (Exports)**.",
        "Equilibrium requires **total** injections to equal **total** leakages ({{I + G + X = S + T + M}}), *not* individual sector-by-sector balance.",
        "Free-market economies rely on the **price mechanism** for efficiency and innovation, whereas planned economies rely on **central state directives**.",
        "Modern economies are **mixed**, combining markets with government intervention to correct market failure and promote equity.",
      ],
      whyItWorks:
        "The circular flow model reveals **interdependence** — one of the 9 IB Key Concepts. A policy change in one corner (say, a tariff cutting imports M, or an interest-rate cut boosting investment I) ripples all the way around firms and households. That is why macroeconomic shocks amplify instead of vanishing where they started (setting up the Keynesian multiplier in Unit 3).",
      strategies: [
        "Never confuse **real flows** (factors of production, physical goods and services) with **money flows** (factor incomes, consumer expenditure) — they move in *opposite* directions around the inner loop.",
        "Before declaring a country 'out of equilibrium' because it has a budget deficit ({{G > T}}), always sum **all three** injections and compare them to **all three** leakages.",
        "When evaluating economic systems in essays, structure your comparison around the 9 Key Concepts: **efficiency** vs **equity**, **choice**, **sustainability**, and **intervention**.",
      ],
      thinkDeeper:
        "Singapore is frequently ranked among the freest markets on Earth — yet over 75% of resident households live in public flats built by the Housing & Development Board (HDB), the state owns the majority of land, and sovereign entities like Temasek hold major stakes in strategic firms. Why does this combination illustrate that 'mixed economy' is not a halfway compromise, but a deliberate choice of *where* markets excel and *where* state intervention solves long-term failures?",
    },

    // =========================================================================
    // SECTION 3: methodology-positive-normative
    // =========================================================================
    {
      id: "methodology-positive-normative",
      heading: "1.2 Positive vs Normative Economics, Ceteris Paribus & Modelling",
      level: "SL",
      discovery: {
        problem:
          "Compare two statements made during a parliamentary debate on raising the minimum wage:\n1. *'Raising the minimum wage by 15% will reduce employment among part-time retail workers by 3% within a year.'*\n2. *'The government ought to raise the minimum wage by 15% because low-income workers deserve a fairer standard of living.'*\nEven if Statement 1 turns out to be completely **wrong** when tested against labour-market data, why do economists still classify Statement 1 as **positive** and Statement 2 as **normative**?",
        idea:
          "Because **positive** does *not* mean 'true' — it means **objectively testable (refutable)** against empirical evidence! Statement 1 makes a factual prediction that data can confirm or falsify. Statement 2 rests on a **value judgement** ('ought', 'deserve', 'fairer') that no dataset can ever prove right or wrong.",
      },
      body: `### Economics as a Social Science

Economics studies **human behaviour** and social institutions rather than atoms in a laboratory. Economists follow a scientific-style **methodology**:

1. **Observation** of real-world patterns (e.g. fuel consumption falls when petrol prices rise).
2. **Hypothesis & model building**: creating simplified representations of reality using key variables and behavioural assumptions (such as rationality).
3. **Predictions** derived logically from the model.
4. **Empirical testing & refutability**: checking predictions against real-world data. Because economists can rarely run controlled lab experiments on entire countries, theories are constantly revised rather than proven once and for all.

### The *Ceteris Paribus* Assumption

In real economies, dozens of variables change at once — prices, incomes, expectations, exchange rates, weather, and tastes. To isolate the causal effect of **one variable** on another, economists apply the Latin assumption ***ceteris paribus***: **"all other things being equal" (held constant)**.

- Example: *"An increase in the price of coffee reduces the quantity of coffee demanded, **ceteris paribus**."*
- Without *ceteris paribus*, a simultaneous heatwave or income boom could cause coffee sales to rise alongside a higher price, masking the pure price effect.
- **Limitation**: In dynamic real-world policy making, *other things rarely stay equal* — which is a powerful evaluative point in IB Paper 1 and Paper 2 essays!

### Positive vs Normative Economics

| Dimension | Positive Statements | Normative Statements |
|---|---|---|
| **Nature** | Objective statements about **what is, was, or will be**. | Subjective **value judgements** about **what ought to be**. |
| **Testability** | **Testable / refutable** against empirical evidence (can be true *or* false!). | **Not testable** by evidence alone — depends on ethics, ideology, or priorities. |
| **Signal words** | *increases, causes, fell by 2%, will reduce, is correlated with* | *should, ought to, fair, unjust, desirable, too high, better* |
| **Role in economics** | Building models, forecasting, and measuring policy effects. | Setting economic goals (e.g. choosing between lower inflation and lower unemployment) and debating **equity**. |

### Equity vs Equality

One of the most frequently tested distinctions in IB Economics — and one that sits directly at the heart of normative policy making — is the difference between **equality** and **equity**:

- **Equality** is a **positive, measurable concept**: sameness or identical outcomes (for example, every household receiving the exact same income, or everyone paying the same flat $1,000 tax). Equality can be measured statistically (e.g. via the Gini coefficient in Unit 3).
- **Equity** is a **normative concept**: **fairness or justice** in how income, wealth, or opportunities are distributed. What counts as "fair" depends on value judgements:
  - One person may view a **progressive income tax** (where higher earners pay a higher percentage of income) as *equitable* because they have a greater ability to pay — even though tax bills are **unequal**.
  - Another person may argue that taxing high earners heavily is *inequitable* if it penalises effort and innovation.

Therefore, **equal treatment is not automatically equitable**, and **equitable policies often treat people unequally** (such as means-tested bursaries targeted only at low-income families).`,
      diagram: `<svg viewBox="0 0 500 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart of economic methodology separating positive empirical testing with ceteris paribus from normative value judgements and policy goals">
  <rect x="0" y="0" width="500" height="290" fill="#ffffff"/>
  <defs>
    <marker id="arr-m" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#6b563c"/>
    </marker>
  </defs>
  <!-- Left column: Positive Economics (Scientific loop) -->
  <rect x="20" y="16" width="224" height="256" rx="12" fill="#e0f2fe" fill-opacity="0.45" stroke="#0369a1" stroke-width="1.6"/>
  <text x="132" y="38" text-anchor="middle" font-size="13" font-weight="800" fill="#0369a1">POSITIVE ECONOMICS</text>
  <text x="132" y="53" text-anchor="middle" font-size="10" fill="#0c4a6e">Objective · Testable · Refutable</text>

  <rect x="44" y="66" width="176" height="34" rx="8" fill="#ffffff" stroke="#0369a1" stroke-width="1.4"/>
  <text x="132" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">1. Observe real-world data</text>

  <line x1="132" y1="100" x2="132" y2="116" stroke="#6b563c" stroke-width="1.6" marker-end="url(#arr-m)"/>

  <rect x="44" y="118" width="176" height="42" rx="8" fill="#ffffff" stroke="#0369a1" stroke-width="1.4"/>
  <text x="132" y="136" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">2. Build model &amp; hypothesis</text>
  <text x="132" y="151" text-anchor="middle" font-size="10" font-style="italic" fill="#0369a1">assuming ceteris paribus</text>

  <line x1="132" y1="160" x2="132" y2="176" stroke="#6b563c" stroke-width="1.6" marker-end="url(#arr-m)"/>

  <rect x="44" y="178" width="176" height="36" rx="8" fill="#ffffff" stroke="#0369a1" stroke-width="1.4"/>
  <text x="132" y="195" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">3. Test against evidence</text>
  <text x="132" y="208" text-anchor="middle" font-size="9.5" fill="#6b563c">(confirm, refine, or refute)</text>

  <path d="M 44 196 Q 28 196 28 139 Q 28 83 41 83" fill="none" stroke="#0369a1" stroke-width="1.4" stroke-dasharray="3,2" marker-end="url(#arr-m)"/>

  <text x="132" y="242" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0c4a6e">Example: "A 10% fuel tax cuts</text>
  <text x="132" y="256" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0c4a6e">petrol sales by 3%, ceteris paribus."</text>

  <!-- Right column: Normative Economics -->
  <rect x="260" y="16" width="220" height="256" rx="12" fill="#fef3c7" fill-opacity="0.55" stroke="#b45309" stroke-width="1.6"/>
  <text x="370" y="38" text-anchor="middle" font-size="13" font-weight="800" fill="#b45309">NORMATIVE ECONOMICS</text>
  <text x="370" y="53" text-anchor="middle" font-size="10" fill="#92400e">Value Judgements · "Ought to be"</text>

  <rect x="282" y="68" width="176" height="44" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="1.4"/>
  <text x="370" y="86" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Ethical &amp; Social Priorities</text>
  <text x="370" y="102" text-anchor="middle" font-size="10" fill="#6b563c">Equity · Justice · Sustainability</text>

  <line x1="370" y1="112" x2="370" y2="132" stroke="#6b563c" stroke-width="1.6" marker-end="url(#arr-m)"/>

  <rect x="282" y="134" width="176" height="44" rx="8" fill="#ffffff" stroke="#b45309" stroke-width="1.4"/>
  <text x="370" y="152" text-anchor="middle" font-size="11" font-weight="700" fill="#24190a">Policy Recommendations</text>
  <text x="370" y="168" text-anchor="middle" font-size="10" fill="#6b563c">Weighing trade-offs for society</text>

  <!-- Bridge arrow from Positive to Policy Recommendations -->
  <line x1="220" y1="196" x2="278" y2="162" stroke="#0d9488" stroke-width="2" marker-end="url(#arr-m)"/>
  <text x="252" y="196" text-anchor="middle" font-size="9.5" font-weight="800" fill="#0d9488">informs</text>

  <text x="370" y="216" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">Example: "The state should raise</text>
  <text x="370" y="230" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">fuel taxes to protect future</text>
  <text x="370" y="244" text-anchor="middle" font-size="10.5" font-weight="700" fill="#92400e">generations fairly."</text>
</svg>`,
      diagramCaption:
        "Figure 1.3: Positive economics builds and empirically tests models under ceteris paribus; normative economics applies value judgements to choose policy objectives.",
      workedExamples: [
        {
          title: "Separating Positive Claims, Normative Judgements, and Equity vs Equality",
          problem:
            "A government minister states: *'Introducing a 2% wealth tax on assets above $10 million will raise $4 billion annually, and we should implement it immediately to create a fairer society.'* Identify the positive and normative components of this statement, and explain why the policy aims at **equity** rather than **equality**.",
          steps: [
            "**Positive component**: *'Introducing a 2% wealth tax on assets above $10 million will raise $4 billion annually.'* This is a testable, empirical prediction — economists can estimate and later check actual tax receipts (even if tax avoidance makes the real figure $2.5 billion, the statement remains positive because it is refutable).",
            "**Normative component**: *'...we should implement it immediately to create a fairer society.'* The words *'should'* and *'fairer'* express a value judgement about how society ought to distribute tax burdens.",
            "**Equity vs Equality**: The tax does **not** treat everyone equally (only households above $10 million pay it, and it does not equalise every household's wealth). Instead, it reflects a normative conception of **equity (fairness)** — specifically, the ability-to-pay principle that the wealthiest bear a larger share of public funding.",
          ],
          answer:
            "Revenue projection = positive (testable); recommendation to implement for fairness = normative (value judgement); targets equity (fairness via ability to pay), not strict equality.",
          yourTurn: {
            question:
              "Classify the following statement as either `positive` or `normative`: *'Raising Singapore's carbon tax from S$25 to S$45 per tonne of CO₂ will reduce industrial carbon emissions, ceteris paribus.'*",
            answer: { type: "text", accept: ["positive", "positive statement"], display: "positive" },
            solution:
              "It makes a factual, empirically testable prediction about cause and effect under ceteris paribus, with no value judgement — so it is a **positive** statement.",
          },
        },
      ],
      keyPoints: [
        "Economics is a **social science** that builds simplified models and tests refutable hypotheses against real-world empirical data.",
        "***Ceteris paribus*** ('all other things being equal') isolates the causal relationship between two variables while holding confounding factors constant.",
        "**Positive statements** are objective and testable (they can be true *or* false); **normative statements** express value judgements about what *ought* to be.",
        "**Equality** means sameness (positive, measurable); **equity** means fairness (normative, value-laden). Fair policy often requires unequal treatment.",
        "Sound economic policy combines **positive analysis** (predicting consequences) with transparent **normative goals** (choosing priorities).",
      ],
      whyItWorks:
        "Separating positive analysis from normative debate prevents economists — and IB exam candidates — from talking past each other. Two economists can completely *agree* on the positive estimate that a sugar tax reduces soda consumption by 12% while raising disproportionate revenue from low-income buyers, yet legitimately *disagree* normatively on whether the health gain outweighs the regressive burden.",
      strategies: [
        "Never write 'a positive statement is a true fact'! A blatantly false claim like *'Unemployment in Japan is 50%'* is still a **positive statement** because it can be empirically disproved.",
        "Watch out for disguised normative words: *too high, excessive, inadequate, deserved, unfair, ideal, best* all signal value judgements even when *should* or *ought* is absent.",
        "In IB evaluation paragraphs, explicitly critique the ***ceteris paribus*** assumption: explain which real-world variable might change simultaneously and alter the predicted outcome.",
      ],
      thinkDeeper:
        "Can positive economics ever be 100% value-free? Think critically: even when an economist tests strictly positive models, deciding *which* questions deserve research funding (for instance, studying inflation's effect on bondholders versus its effect on informal-sector workers) and *which* welfare indicator to measure (GDP vs Multidimensional Poverty) already involves subtle normative choices!",
    },

    // =========================================================================
    // SECTION 4: evolution-economic-thought
    // =========================================================================
    {
      id: "evolution-economic-thought",
      heading: "1.2 Evolution of Economic Thought (18th–21st Century)",
      level: "SL",
      discovery: {
        problem:
          "During the Great Depression of the 1930s, unemployment in the United States hit 25% and stayed painfully high for years. Yet the dominant 19th-century economic theory insisted that a free market would automatically self-correct back to full employment without government spending. Why did real-world events force economists to rethink their entire model — and why did the 1970s stagflation later trigger *another* revolution against that new model?",
        idea:
          "Economic theory evolves in dialogue with **real-world crises**. In the 1930s, falling wages did not quickly restore hiring because collapsing incomes crushed consumer demand — leading **John Maynard Keynes** to argue for active fiscal stimulus. In the 1970s, simultaneous high inflation and unemployment (**stagflation**) undermined simple Keynesian demand management, opening the door to **Monetarist / New Classical** free-market ideas — and today, the 2008 financial crash and climate crisis have propelled **Behavioural Economics** and the **Circular / Doughnut Economy** to the forefront.",
      },
      body: `### 18th Century: Classical Roots & Adam Smith

- **Adam Smith** (*The Wealth of Nations*, 1776) is celebrated as the father of modern economics. Writing against heavily regulated mercantilism, Smith advocated ***laissez-faire*** (minimal state interference) and free competition.
- **The Invisible Hand**: When individuals and firms pursue their own self-interest in competitive markets, the price mechanism channels resources toward what consumers value most — promoting social welfare *as if* guided by an invisible hand.
- **Division of labour & specialisation**: Using his famous **pin factory** example, Smith showed how breaking production into specialised tasks dramatically multiplies productivity and economic growth.
- Crucially, Smith was *not* a blind market fundamentalist: he supported state funding of defence, justice, infrastructure, and basic education, and warned against monopolistic collusion.

### 19th Century: Classical Marginalism, Say's Law & Marx's Critique

1. **Utility & Marginalism**: 19th-century economists (including Jevons, Menger, Walras, and Alfred Marshall) developed **marginal analysis** — showing that market prices reflect **marginal utility** (the extra satisfaction from one more unit) alongside production costs, formalising modern demand-and-supply diagrams.
2. **Say's Law & Self-Correcting Markets**: Classical economists (following Jean-Baptiste Say) argued *"supply creates its own demand"* — producing goods generates the exact factor incomes needed to buy them. Provided wages and prices remain flexible, markets automatically clear at **full employment** in the long run.
3. **Karl Marx's Critique of Capitalism** (*Das Kapital*, 1867): Observing Victorian factory poverty, Marx argued that capitalism is inherently unstable and exploitative. Workers create value, yet capitalists capture **surplus value** as profit, concentrating wealth and triggering recurring crises of overproduction until capitalism is replaced by collective ownership.

### 20th Century: The Keynesian Revolution vs The Monetarist Counter-Revolution

- **John Maynard Keynes** (*The General Theory of Employment, Interest and Money*, 1936): Responding to the Great Depression, Keynes overturned Say's Law by arguing that **aggregate demand** drives output and employment. Because wages and prices are **sticky downwards** and collapsing business confidence ('animal spirits') halts investment, an economy can become trapped in a persistent recessionary equilibrium. Keynes advocated active **interventionist fiscal policy** (deficit-financed government spending and tax cuts) to restore full employment.
- **Monetarism & New Classical Economics (1970s–1980s)**: When 1970s oil shocks produced **stagflation** (high inflation *and* high unemployment simultaneously), **Milton Friedman** (Monetarism) and **Friedrich Hayek** (Austrian/free-market tradition), along with New Classical thinkers (Robert Lucas), argued that excessive monetary expansion causes inflation rather than permanent employment gains, and that government intervention creates distortions and lags. They revived **laissez-faire**, market-based supply-side reforms (deregulation, privatisation, lower taxes), and strict control of the money supply / inflation.

### 21st Century: Behavioural Economics & Circular / Doughnut Sustainability

Two major paradigm shifts define 21st-century IB Economics:

1. **Behavioural Economics** (Daniel Kahneman, Amos Tversky, Richard Thaler): Challenges the classical assumption of *Homo economicus* (perfectly rational utility maximisers). Real humans display **bounded rationality**, **bounded self-control**, **bounded selfishness**, and systematic cognitive biases (anchoring, framing, loss aversion). Governments can use **choice architecture and nudges** (like automatic opt-out pension enrolment) to improve decisions without bans.
2. **Circular Economy & Kate Raworth's Doughnut Economics**: Traditional linear economics follows a **take–make–dispose** path that ignores ecological limits.
   - The **Circular Economy** designs out waste through repairing, reusing, remanufacturing, and recycling materials in closed loops.
   - **Doughnut Economics** (Kate Raworth, 2017) reframes economic success away from endless GDP growth toward a **safe and just space for humanity**: meeting everyone's **social foundation** (inner ring: food, health, education, equity, housing) without overshooting Earth's **ecological ceiling** (outer ring: climate stability, biodiversity, clean air/water).`,
      diagram: `<svg viewBox="0 0 520 265" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Timeline of the evolution of economic thought from 18th century Adam Smith through 19th century Marginalism and Marx, 20th century Keynes versus Monetarism, to 21st century Behavioural and Doughnut Economics">
  <rect x="0" y="0" width="520" height="265" fill="#ffffff"/>
  <!-- Timeline spine -->
  <line x1="34" y1="132" x2="492" y2="132" stroke="#b45309" stroke-width="3"/>
  <polygon points="492,126 504,132 492,138" fill="#b45309"/>

  <!-- 18th c -->
  <circle cx="72" cy="132" r="7" fill="#b45309"/>
  <line x1="72" y1="125" x2="72" y2="96" stroke="#b45309" stroke-width="1.5"/>
  <rect x="14" y="18" width="116" height="78" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.4"/>
  <text x="72" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="#92400e">18th Century</text>
  <text x="72" y="51" text-anchor="middle" font-size="10.5" font-weight="700" fill="#24190a">Adam Smith (1776)</text>
  <text x="72" y="66" text-anchor="middle" font-size="9.5" fill="#6b563c">Laissez-faire</text>
  <text x="72" y="79" text-anchor="middle" font-size="9.5" fill="#6b563c">Invisible hand · Division</text>
  <text x="72" y="91" text-anchor="middle" font-size="9.5" fill="#6b563c">of labour</text>

  <!-- 19th c -->
  <circle cx="195" cy="132" r="7" fill="#0369a1"/>
  <line x1="195" y1="139" x2="195" y2="168" stroke="#0369a1" stroke-width="1.5"/>
  <rect x="128" y="168" width="134" height="82" rx="8" fill="#e0f2fe" stroke="#0369a1" stroke-width="1.4"/>
  <text x="195" y="185" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">19th Century</text>
  <text x="195" y="201" text-anchor="middle" font-size="10.5" font-weight="700" fill="#24190a">Classical &amp; Marx</text>
  <text x="195" y="216" text-anchor="middle" font-size="9.5" fill="#0c4a6e">Utility &amp; Marginalism</text>
  <text x="195" y="229" text-anchor="middle" font-size="9.5" fill="#0c4a6e">Say's Law (self-correcting)</text>
  <text x="195" y="242" text-anchor="middle" font-size="9.5" fill="#0c4a6e">Marx's critique of capitalism</text>

  <!-- 20th c -->
  <circle cx="322" cy="132" r="7" fill="#7c3aed"/>
  <line x1="322" y1="125" x2="322" y2="96" stroke="#7c3aed" stroke-width="1.5"/>
  <rect x="248" y="14" width="148" height="82" rx="8" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.4"/>
  <text x="322" y="31" text-anchor="middle" font-size="11" font-weight="800" fill="#6d28d9">20th Century</text>
  <text x="322" y="47" text-anchor="middle" font-size="10.5" font-weight="700" fill="#24190a">Keynes vs Monetarism</text>
  <text x="322" y="62" text-anchor="middle" font-size="9.5" fill="#4c1d95">1930s: Keynes (AD &amp; fiscal)</text>
  <text x="322" y="75" text-anchor="middle" font-size="9.5" fill="#4c1d95">1970s: Friedman / Hayek</text>
  <text x="322" y="88" text-anchor="middle" font-size="9.5" fill="#4c1d95">Monetarism &amp; New Classical</text>

  <!-- 21st c -->
  <circle cx="442" cy="132" r="7" fill="#0d9488"/>
  <line x1="442" y1="139" x2="442" y2="168" stroke="#0d9488" stroke-width="1.5"/>
  <rect x="372" y="168" width="138" height="82" rx="8" fill="#ccfbf1" stroke="#0d9488" stroke-width="1.4"/>
  <text x="441" y="185" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">21st Century</text>
  <text x="441" y="201" text-anchor="middle" font-size="10.5" font-weight="700" fill="#24190a">Behavioural &amp; Circular</text>
  <text x="441" y="216" text-anchor="middle" font-size="9.5" fill="#115e59">Bounded rationality &amp; nudges</text>
  <text x="441" y="229" text-anchor="middle" font-size="9.5" fill="#115e59">Circular economy (zero waste)</text>
  <text x="441" y="242" text-anchor="middle" font-size="9.5" fill="#115e59">Raworth's Doughnut model</text>
</svg>`,
      diagramCaption:
        "Figure 1.4: Four centuries of economic thought — oscillating between trust in self-correcting markets and recognition of macroeconomic, behavioural, and ecological limits.",
      workedExamples: [
        {
          title: "Comparing Three Schools of Thought on a Severe Recession",
          problem:
            "Suppose a major financial crisis causes unemployment to surge to 12% while carbon emissions remain dangerously high. Contrast how a **19th-century Classical**, a **20th-century Keynesian**, and a **21st-century Doughnut/Circular** economist would respond.",
          steps: [
            "**19th-century Classical lens**: Rely on flexible wages and prices (Say's Law). Falling wages make hiring cheaper so the labour market eventually self-corrects back to full employment without deficit spending.",
            "**20th-century Keynesian lens**: Argue that wages are sticky downwards and depressed confidence prevents private investment from recovering. Recommend active **expansionary fiscal policy** (public infrastructure, targeted transfers) to boost aggregate demand and pull the economy out of recession.",
            "**21st-century Doughnut / Circular lens**: Support intervention to safeguard the **social foundation** (jobs, housing, income security) while ensuring stimulus does not breach the **ecological ceiling** — for example, investing in green public transit, circular recycling infrastructure, and building retrofits rather than fossil-fuel consumption.",
          ],
          answer:
            "Classical: wait for wage/price self-correction; Keynesian: use expansionary fiscal policy to raise aggregate demand; Doughnut/Circular: deploy green, regenerative stimulus that restores employment inside planetary boundaries.",
          yourTurn: {
            question:
              "Which 20th-century economist argued in *The General Theory* (1936) that economies can become stuck below full employment due to deficient aggregate demand and downward-sticky wages, justifying active fiscal policy?",
            answer: {
              type: "text",
              accept: ["Keynes", "John Maynard Keynes", "J. M. Keynes", "J M Keynes", "JM Keynes"],
              display: "John Maynard Keynes",
            },
            solution:
              "**John Maynard Keynes** published *The General Theory of Employment, Interest and Money* in 1936, founding modern macroeconomics and Keynesian demand management.",
          },
        },
      ],
      keyPoints: [
        "**18th c. (Adam Smith)**: *Laissez-faire*, competition, division of labour, and the **invisible hand** coordinating self-interest into social welfare.",
        "**19th c. (Classical & Marx)**: Marginal utility theory and **Say's Law** (self-correcting full employment) countered by **Karl Marx's** critique of capitalist exploitation and instability.",
        "**20th c. (Keynes vs Monetarists)**: **Keynes** championed fiscal demand management during recessions; **Friedman, Hayek, and New Classical** thinkers reasserted market self-correction and monetary discipline after 1970s stagflation.",
        "**21st c. (Behavioural & Sustainability)**: **Behavioural economics** replaces perfect rationality with cognitive biases and nudges; **Circular & Doughnut economics** embed economies inside ecological limits and social foundations.",
      ],
      whyItWorks:
        "Seeing economics as an evolving debate — rather than a static rulebook — immediately boosts your **AO3 Evaluation** marks in IB Paper 1 and Paper 2. Whenever you evaluate a policy, you can contrast a free-market Classical/Monetarist perspective against a Keynesian interventionist or 21st-century behavioural/sustainability perspective.",
      strategies: [
        "Pair each century with its **crisis trigger**: 1776 mercantilism → Smith; 1860s industrial factory poverty → Marx; 1930s Great Depression → Keynes; 1970s stagflation → Friedman/Monetarism; 2008 crash & climate crisis → Behavioural & Doughnut Economics.",
        "Never oversimplify **Adam Smith** as 'zero government' — mentioning his support for public infrastructure, justice, and curbing monopolies shows genuine IB sophistication.",
        "Connect **Doughnut Economics** directly to two IB Key Concepts: **equity / economic well-being** (inner social foundation) and **sustainability** (outer ecological ceiling).",
      ],
      thinkDeeper:
        "Both Adam Smith's invisible hand and Kate Raworth's Doughnut Economics are metaphors that shape how societies measure success. If policymakers replace 'maximise GDP growth' with 'stay inside the Doughnut', what difficult trade-offs arise for low-income developing countries that still need rapid industrial growth to lift citizens above the social foundation?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "What is the basic economic problem (scarcity)?",
        back: "Resources (factors of production) are finite, whereas human needs and wants are infinite — forcing societies to make choices about what, how, and for whom to produce.",
        level: "SL",
      },
      {
        front: "Define opportunity cost.",
        back: "The value of the next best alternative foregone when an economic decision is made.",
        level: "SL",
      },
      {
        front: "Distinguish between a free good and an economic good.",
        back: "An economic good is scarce and carries an opportunity cost (even if free at the point of use, like public schooling). A free good is abundant relative to demand and has zero opportunity cost (e.g. sunlight).",
        level: "SL",
      },
      {
        front: "Name the four factors of production and their factor rewards.",
        back: "Land → Rent; Labour → Wages; Capital → Interest; Entrepreneurship → Profit.",
        level: "SL",
      },
      {
        front: "What does a Production Possibilities Curve (PPC) show?",
        back: "The maximum combinations of two goods/services an economy can produce in a given period when all resources are fully and efficiently employed at fixed technology.",
        level: "SL",
      },
      {
        front: "Why is a typical PPC concave (bowed out) to the origin?",
        back: "Because of increasing opportunity cost: factors of production are specialised and not equally adaptable between the two goods.",
        level: "SL",
      },
      {
        front: "Distinguish between actual growth and potential growth on a PPC.",
        back: "Actual growth is a movement from a point inside the PPC toward the boundary (reducing unemployment/inefficiency). Potential growth is an outward shift of the entire PPC (more/better resources or technology).",
        level: "SL",
      },
      {
        front: "List the three leakages (W) and three injections (J) in the five-sector circular flow.",
        back: "Leakages: Savings (S), Taxation (T), Imports (M). Injections: Investment (I), Government spending (G), Exports (X).",
        level: "SL",
      },
      {
        front: "When does national income expand or contract in the circular flow?",
        back: "Expands when I + G + X > S + T + M (net injection); contracts when I + G + X < S + T + M (net leakage); stays in equilibrium when I + G + X = S + T + M.",
        level: "SL",
      },
      {
        front: "What does ceteris paribus mean, and why do economists use it?",
        back: "Latin for 'all other things being equal'. It holds confounding variables constant so economists can isolate the causal effect of one variable on another.",
        level: "SL",
      },
      {
        front: "Distinguish between positive and normative statements.",
        back: "Positive statements are objective and empirically testable/refutable (they can be true or false). Normative statements express subjective value judgements about what ought to be.",
        level: "SL",
      },
      {
        front: "Distinguish between equity and equality.",
        back: "Equality is sameness (positive, measurable outcomes). Equity is fairness or justice (normative, value-laden) — achieving equity often involves unequal treatment (e.g. progressive taxation).",
        level: "SL",
      },
      {
        front: "Name all 9 IB Economics Key Concepts.",
        back: "Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, and Intervention.",
        level: "SL",
      },
      {
        front: "What is Adam Smith's 'invisible hand'?",
        back: "The idea that self-interested buyers and sellers interacting through competitive market prices unintentionally promote socially desirable resource allocation without central direction.",
        level: "SL",
      },
      {
        front: "How did Keynes challenge 19th-century Say's Law?",
        back: "Keynes argued that aggregate demand (not supply) drives output in the short run, and that sticky downward wages and weak confidence can trap an economy in recession unless the government uses fiscal stimulus.",
        level: "SL",
      },
      {
        front: "What is the core idea of Kate Raworth's Doughnut Economy?",
        back: "Economic activity should meet every person's basic social foundation (inner ring) without overshooting Earth's planetary ecological ceiling (outer ring), shifting from linear waste to a circular, regenerative model.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Scarcity arises from finite resources vs infinite wants, forcing every economy to decide **what, how, and for whom** to produce.",
      "**Opportunity cost** is the *single next best* alternative foregone — never the sum of all foregone options.",
      "In economics, **capital** means physical human-made productive assets (machinery, ports, factories), *not* cash or shares, and its factor reward is **interest**.",
      "**Actual growth** moves an economy from inside the PPC toward the curve; **potential growth** shifts the PPC outward via more/better factors or technology.",
      "In the five-sector circular flow, **W = S + T + M** and **J = I + G + X**; equilibrium requires **total J = total W**, not individual sector balance.",
      "**Positive** means *testable/refutable* (not necessarily true); **normative** expresses a *value judgement* about what ought to happen.",
      "**Equity** (fairness — normative) is distinct from **equality** (sameness — positive); progressive taxes promote equity via unequal rates.",
      "Economic thought evolved across crises: **Smith (18th c.) → Marginalism, Say's Law & Marx (19th c.) → Keynes vs Monetarism/Friedman/Hayek (20th c.) → Behavioural & Circular/Doughnut Economics (21st c.)**.",
      "Every IB Economics extended essay and IA should actively link analysis to the **9 Key Concepts** (Scarcity, Choice, Efficiency, Equity, Economic well-being, Sustainability, Change, Interdependence, Intervention).",
      "Official IB Economics FA2022 weightings: **SL** = Paper 1 (30%) + Paper 2 (40%) + IA (30%); **HL** = Paper 1 (20%) + Paper 2 (30%) + Paper 3 (30%) + IA (20%).",
    ],
    misconceptions: [
      {
        wrong: "State-provided healthcare and public schools are 'free goods' because citizens do not pay a fee at the door.",
        right: "They are **economic goods** provided free at the point of use. Producing them uses scarce doctors, teachers, buildings, and tax revenue, creating a real opportunity cost.",
        level: "SL",
      },
      {
        wrong: "A positive statement must be factually true, and a false factual claim becomes normative.",
        right: "Positive means **empirically testable/refutable**. Even a false statement like 'Japan's inflation rate is 80%' is positive because data can disprove it.",
        level: "SL",
      },
      {
        wrong: "Capital in economics means money invested in the stock market.",
        right: "**Physical capital** refers to human-made productive assets (machines, robots, roads, computers). Money is financial capital — a medium of exchange, not a factor of production.",
        level: "SL",
      },
      {
        wrong: "An economy can reach circular-flow equilibrium only when S = I, T = G, and M = X simultaneously.",
        right: "Equilibrium requires only **aggregate** balance: {{S + T + M = I + G + X}}. A trade deficit (M > X) can be offset by a budget deficit (G > T) or excess investment (I > S).",
        level: "SL",
      },
      {
        wrong: "Moving from a point inside the PPC to a point on the PPC always incurs an opportunity cost.",
        right: "If an economy moves north-east from an unemployed interior point U to the frontier, it can gain **more of both goods simultaneously** with zero sacrifice of the other good.",
        level: "SL",
      },
      {
        wrong: "Equity and equality mean the same thing in IB Economics.",
        right: "**Equality** means identical outcomes (positive, measurable); **equity** means fairness (normative, dependent on value judgements).",
        level: "SL",
      },
      {
        wrong: "Adam Smith advocated completely abolishing government from the economy.",
        right: "Smith favoured minimal state intervention in competitive markets (*laissez-faire*), but explicitly supported public spending on national defence, justice, infrastructure, and education, and warned against monopolies.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Labelling PPC axes as 'Price' and 'Quantity' instead of two specific goods/services (e.g. 'Capital goods' and 'Consumer goods') — this immediately forfeits diagram marks.",
      "Writing that opportunity cost is 'all the other things you gave up' instead of strictly the **next best alternative foregone**.",
      "Confusing a **movement along** the PPC (reallocation of existing resources) with a **shift of** the PPC (change in quantity/quality of factors or technology).",
      "Forgetting to specify **which direction** money flows vs real flows move in a circular-flow diagram — or mixing up leakages (S, T, M) with injections (I, G, X).",
      "Calling a statement 'normative' merely because it uses the future tense ('will rise') — predictions about the future are still **positive** if testable!",
      "Drawing a **straight-line PPC** when discussing increasing opportunity cost — always draw a **concave (bowed-out)** curve unless a question specifically assumes constant opportunity cost.",
      "Ignoring the **9 Key Concepts** in Paper 1(b) or IA commentaries, or listing them mechanically without weaving them into real-world evaluation.",
      "Conflating **Keynesian** demand-side intervention with **central planning** — Keynes advocated stabilisation within a mixed capitalist economy, not state ownership of all industry.",
    ],
    mnemonics: [
      {
        topic: "Four Factors of Production & Rewards",
        device: "CELL → R-W-I-P (Capital-Interest, Entrepreneurship-Profit, Land-Rent, Labour-Wages)",
        explanation:
          "Pair **C-E-L-L** with their matching factor incomes: **L**and earns **R**ent, **L**abour earns **W**ages, **C**apital earns **I**nterest, and **E**ntrepreneurship earns **P**rofit.",
        level: "SL",
      },
      {
        topic: "Circular Flow Leakages vs Injections",
        device: "Leakages = STM ('Spending Leaves The Mainstream'); Injections = IGX ('Income Grows eXpansively')",
        explanation:
          "**S**avings, **T**axation, and i**M**ports leak out of the domestic loop; **I**nvestment, **G**overnment spending, and e**X**ports inject spending back in.",
        level: "SL",
      },
      {
        topic: "The 9 IB Economics Key Concepts",
        device: "S-C-E-E-E-S-C-I-I ('SCaCE E-S-C-I-I' → 2 S's, 2 C's, 3 E's, 2 I's)",
        explanation:
          "Group by first letter: **S** (Scarcity, Sustainability), **C** (Choice, Change), **E** (Efficiency, Equity, Economic well-being), **I** (Interdependence, Intervention).",
        level: "SL",
      },
      {
        topic: "Evolution of Economic Thought",
        device: "18-Smith · 19-Marg/Marx · 20-Keynes/Mon · 21-Behav/Doughnut",
        explanation:
          "Anchor each century to a pair: 18th = Invisible Hand; 19th = Marginalism/Say's Law vs Marx; 20th = Keynes vs Monetarists; 21st = Behavioural & Circular/Doughnut.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Land Scarcity & Changi Terminal 5",
        emoji: "🇸🇬",
        detail:
          "With only ~735 km² of land, Singapore's Urban Redevelopment Authority (URA) faces acute opportunity costs on every coastal site — balancing aviation hubs (Changi T5), Tuas Mega Port, BTO public housing, and green nature corridors through multi-decade land-use trade-offs.",
      },
      {
        title: "Amsterdam's Doughnut Economy City Strategy",
        emoji: "🍩",
        detail:
          "In 2020, Amsterdam became the first major city to formally adopt Kate Raworth's Doughnut framework, aiming to halve raw-material consumption by 2030 and reach a 100% circular economy by 2050 while guaranteeing affordable housing and clean air.",
      },
      {
        title: "COVID-19 Lockdowns & The Five-Sector Circular Flow",
        emoji: "🔄",
        detail:
          "During 2020 lockdowns, precautionary household savings (S) spiked while exports (X) and business investment (I) collapsed. Governments worldwide injected massive fiscal packages (G↑ — such as Singapore's five Resilience/Fortitude budgets) to prevent a deep circular-flow contraction.",
      },
      {
        title: "UK Auto-Enrolment Pensions: Behavioural Economics in Action",
        emoji: "🧠",
        detail:
          "Applying Thaler and Sunstein's choice architecture, the UK switched workplace pensions from opt-in to automatic opt-out in 2012. Participation jumped from ~55% to over 88% without banning choice — overcoming bounded self-control and status-quo bias.",
      },
      {
        title: "Singapore's Mixed Economy: Markets + HDB & CPF",
        emoji: "🏙️",
        detail:
          "Singapore combines low corporate taxes and open free trade with decisive state intervention in land, housing (HDB), compulsory retirement savings (CPF), and sovereign investment (Temasek/GIC), illustrating how mixed economies tailor market vs state roles.",
      },
      {
        title: "Circular Electronics: Fairphone & EU Right-to-Repair",
        emoji: "♻️",
        detail:
          "Replacing the linear 'take–make–dispose' smartphone cycle, modular designs like Fairphone and the EU's Right-to-Repair directives extend product lifespans and recover rare-earth metals, putting circular-economy theory into industrial practice.",
      },
    ],
    videos: [
      {
        title: "IB Economics 1.1: Scarcity, Opportunity Cost & PPC Explained",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+PPC+opportunity+cost",
      },
      {
        title: "Circular Flow of Income (Two-Sector & Five-Sector Model)",
        channel: "Jacob Clifford / ACDC Econ",
        url: "https://www.youtube.com/results?search_query=circular+flow+of+income+leakages+injections+IB+economics",
      },
      {
        title: "Positive vs Normative Economics, Ceteris Paribus & Equity vs Equality",
        channel: "Brad Cartwright IB Economics",
        url: "https://www.youtube.com/results?search_query=IB+Economics+positive+normative+equity+equality+ceteris+paribus",
      },
      {
        title: "Evolution of Economic Thought: Smith, Marx, Keynes, Friedman & Raworth",
        channel: "EconplusDal / TED",
        url: "https://www.youtube.com/results?search_query=evolution+of+economic+thought+IB+economics+doughnut+economy",
      },
    ],
    formulas: [
      {
        name: "Per-Unit Opportunity Cost",
        formula: "{{OC_X = (\"Change in Good Y sacrificed\") / (\"Change in Good X gained\")}}",
        note: "Magnitude of the slope of the PPC; constant on a linear PPC, rising on a concave PPC.",
        level: "SL",
      },
      {
        name: "Linear PPC Equation",
        formula: "{{Y = Y_max - (Y_max / X_max) * X}}",
        note: "Describes a constant-opportunity-cost frontier with intercepts X_max and Y_max.",
        level: "SL",
      },
      {
        name: "Total Leakages (Withdrawals)",
        formula: "{{W = S + T + M}}",
        note: "Savings (S) + Taxation (T) + Imports (M) exiting the domestic circular flow.",
        level: "SL",
      },
      {
        name: "Total Injections",
        formula: "{{J = I + G + X}}",
        note: "Investment (I) + Government spending (G) + Exports (X) entering the domestic circular flow.",
        level: "SL",
      },
      {
        name: "Circular Flow Equilibrium Condition",
        formula: "{{S + T + M = I + G + X}}",
        note: "If J > W national income expands; if J < W national income contracts.",
        level: "SL",
      },
      {
        name: "Net Circular-Flow Injection",
        formula: "{{\"Net Flow\" = (I + G + X) - (S + T + M)}}",
        note: "Positive value signals expansionary pressure; negative value signals contractionary pressure.",
        level: "SL",
      },
      {
        name: "Two-Sector National Income Identity",
        formula: "{{Y = C + I}} and {{S = I}}",
        note: "In a closed economy without government, all income is either consumed or saved (Y = C + S).",
        level: "SL",
      },
      {
        name: "Factor Income Identity",
        formula: "{{Y = \"Rent\" + \"Wages\" + \"Interest\" + \"Profit\"}}",
        note: "Sum of rewards paid to Land, Labour, Capital, and Entrepreneurship in the factor market.",
        level: "SL",
      },
      {
        name: "Percentage Expansion of Potential Output",
        formula: "{{%ΔY_p = ((Y_2 - Y_1) / Y_1) * 100}}",
        note: "Measures outward shift of a PPC intercept (potential economic growth) over time.",
        level: "SL",
      },
    ],
  },
};
