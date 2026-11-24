import type { ExamPaper } from "../types.ts";

const SVG_NEG_EXT_PROD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 245" role="img" aria-label="Negative externality of production diagram showing MSC above MPC, market output Qm above socially optimal output Q star, and shaded welfare loss triangle">
  <rect x="0" y="0" width="360" height="245" fill="#fffdf8" rx="8" />
  <line x1="52" y1="22" x2="52" y2="205" stroke="#1e293b" stroke-width="2" />
  <line x1="52" y1="205" x2="335" y2="205" stroke="#1e293b" stroke-width="2" />
  <text x="14" y="34" font-size="11" font-weight="600" fill="#1e293b">Price,</text>
  <text x="12" y="47" font-size="11" font-weight="600" fill="#1e293b">Costs &amp;</text>
  <text x="8" y="60" font-size="11" font-weight="600" fill="#1e293b">Benefits</text>
  <text x="278" y="232" font-size="11" font-weight="600" fill="#1e293b">Quantity</text>
  <polygon points="164,108 214,68 214,148" fill="#f59e0b" fill-opacity="0.32" stroke="#b45309" stroke-width="1.2" />
  <line x1="78" y1="39" x2="292" y2="210" stroke="#0f766e" stroke-width="2.4" />
  <text x="234" y="196" font-size="11" font-weight="700" fill="#0f766e">D = MPB = MSB</text>
  <line x1="144" y1="204" x2="294" y2="84" stroke="#2563eb" stroke-width="2.4" />
  <text x="256" y="78" font-size="11" font-weight="700" fill="#2563eb">S = MPC</text>
  <line x1="84" y1="172" x2="254" y2="36" stroke="#dc2626" stroke-width="2.4" />
  <text x="258" y="40" font-size="11" font-weight="700" fill="#dc2626">MSC</text>
  <line x1="164" y1="108" x2="164" y2="205" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3" />
  <line x1="52" y1="108" x2="164" y2="108" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3" />
  <line x1="214" y1="148" x2="214" y2="205" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3" />
  <line x1="52" y1="148" x2="214" y2="148" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3" />
  <circle cx="164" cy="108" r="3.5" fill="#dc2626" />
  <circle cx="214" cy="148" r="3.5" fill="#2563eb" />
  <text x="32" y="112" font-size="11" font-weight="600" fill="#1e293b">P*</text>
  <text x="28" y="152" font-size="11" font-weight="600" fill="#1e293b">Pm</text>
  <text x="158" y="220" font-size="11" font-weight="700" fill="#dc2626">Q*</text>
  <text x="206" y="220" font-size="11" font-weight="700" fill="#2563eb">Qm</text>
  <text x="172" y="102" font-size="10" font-weight="700" fill="#92400e">Welfare</text>
  <text x="179" y="114" font-size="10" font-weight="700" fill="#92400e">loss</text>
</svg>`;

const SVG_TARIFF_STEEL = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 250" role="img" aria-label="Import tariff diagram for steel showing world price 400 dollars, tariff price 500 dollars, quantities 20, 35, 75, and 90 thousand tonnes, tariff revenue rectangle, and two deadweight welfare loss triangles">
  <rect x="0" y="0" width="380" height="250" fill="#fffdf8" rx="8" />
  <line x1="56" y1="20" x2="56" y2="206" stroke="#1e293b" stroke-width="2" />
  <line x1="56" y1="206" x2="352" y2="206" stroke="#1e293b" stroke-width="2" />
  <text x="10" y="32" font-size="11" font-weight="600" fill="#1e293b">Price</text>
  <text x="10" y="45" font-size="10" fill="#475569">($/t)</text>
  <text x="234" y="238" font-size="11" font-weight="600" fill="#1e293b">Quantity ('000 tonnes)</text>
  <rect x="148" y="118" width="116" height="44" fill="#0ea5e9" fill-opacity="0.22" stroke="#0369a1" stroke-width="1" />
  <polygon points="104,162 148,162 148,118" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <polygon points="264,118 264,162 308,162" fill="#ef4444" fill-opacity="0.32" stroke="#b91c1c" stroke-width="1" />
  <line x1="76" y1="190" x2="236" y2="30" stroke="#2563eb" stroke-width="2.4" />
  <text x="238" y="34" font-size="11" font-weight="700" fill="#2563eb">S_dom</text>
  <line x1="176" y1="30" x2="342" y2="196" stroke="#0f766e" stroke-width="2.4" />
  <text x="306" y="198" font-size="11" font-weight="700" fill="#0f766e">D_dom</text>
  <line x1="56" y1="162" x2="340" y2="162" stroke="#475569" stroke-width="2" />
  <text x="315" y="157" font-size="10" font-weight="700" fill="#334155">Sw ($400)</text>
  <line x1="56" y1="118" x2="340" y2="118" stroke="#b45309" stroke-width="2" />
  <text x="292" y="113" font-size="10" font-weight="700" fill="#b45309">Sw+t ($500)</text>
  <line x1="104" y1="162" x2="104" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="148" y1="118" x2="148" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="264" y1="118" x2="264" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <line x1="308" y1="162" x2="308" y2="206" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3" />
  <text x="22" y="166" font-size="11" font-weight="600" fill="#1e293b">400</text>
  <text x="22" y="122" font-size="11" font-weight="600" fill="#b45309">500</text>
  <text x="97" y="220" font-size="11" font-weight="600" fill="#1e293b">20</text>
  <text x="141" y="220" font-size="11" font-weight="600" fill="#1e293b">35</text>
  <text x="257" y="220" font-size="11" font-weight="600" fill="#1e293b">75</text>
  <text x="301" y="220" font-size="11" font-weight="600" fill="#1e293b">90</text>
  <text x="171" y="144" font-size="10" font-weight="700" fill="#0369a1">Tariff rev.</text>
  <text x="122" y="157" font-size="9" font-weight="700" fill="#991b1b">DWL</text>
  <text x="269" y="157" font-size="9" font-weight="700" fill="#991b1b">DWL</text>
</svg>`;

export const paper: ExamPaper = {
  id: "exam-mcq",
  title: "Diagnostic MCQ Bank · Units 1–4 & HL",
  level: "SL",
  calculator: true,
  minutes: 45,
  paperType: "Diagnostic MCQ Bank · Units 1–4 & HL",
  questions: [
    {
      id: "exam-mcq-q01",
      kind: "mcq",
      topicId: "1-intro-economics",
      guideRef: "scarcity-choice-ppc",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Identify",
      question:
        "A Production Possibilities Curve (PPC) that is bowed outwards (concave to the origin) illustrates increasing opportunity cost primarily because:",
      options: [
        "economic growth occurs only when all unemployment in the economy is eliminated.",
        "opportunity costs stay constant as resources shift between the two industries.",
        "factors of production are not equally well suited to producing both goods.",
        "consumer preferences always favour capital goods over consumer goods over time.",
      ],
      answerIndex: 2,
      hints: [
        "Compare a straight-line PPC (constant opportunity cost) with a bowed-out PPC (increasing opportunity cost).",
        "Ask what happens to productivity when specialized labour or land from one industry is transferred to another.",
      ],
      explanation:
        "A bowed-out PPC reflects imperfect factor substitutability: factors of production are specialized and not equally well suited to producing both goods, so producing extra units of one good requires sacrificing progressively larger amounts of the other. A straight-line PPC—not a bowed-out one—represents constant opportunity costs, and unemployment corresponds to points inside the curve rather than its curvature.",
      strategy: "PPC curvature & resource specialization",
    },
    {
      id: "exam-mcq-q02",
      kind: "mcq",
      topicId: "1-intro-economics",
      guideRef: "circular-flow-economic-systems",
      level: "SL",
      difficulty: "core",
      commandTerm: "Determine",
      question:
        "In a five-sector circular flow of income model, annual flows (in $ billions) are: Savings (S) = 140, Taxes (T) = 210, Imports (M) = 180, Investment (I) = 170, Government spending (G) = 200, and Exports (X) = 200. What happens to the level of national income?",
      options: [
        "National income expands because total injections exceed total leakages by $40 billion.",
        "National income contracts because total leakages exceed total injections by $40 billion.",
        "National income stays constant because the budget surplus balances the trade deficit.",
        "National income contracts because taxes exceed government spending by $10 billion.",
      ],
      answerIndex: 0,
      hints: [
        "Group the three leakages (withdrawals) together: S + T + M.",
        "Group the three injections together: I + G + X, then compare total injections against total leakages.",
      ],
      explanation:
        "Total leakages are S + T + M = 140 + 210 + 180 = $530 billion, whereas total injections are I + G + X = 170 + 200 + 200 = $570 billion. Because injections exceed leakages by $40 billion, national income expands. Comparing only one sector—such as taxes versus government spending—ignores the other two pairs of flows.",
      strategy: "Compare total injections (I + G + X) with total leakages (S + T + M)",
    },
    {
      id: "exam-mcq-q03",
      kind: "mcq",
      topicId: "1-intro-economics",
      guideRef: "methodology-positive-normative",
      level: "SL",
      difficulty: "warmup",
      commandTerm: "Distinguish",
      question:
        "Which of the following is a **positive** economic statement rather than a normative value judgement?",
      options: [
        "Governments ought to raise progressive income taxes to achieve fairer outcomes.",
        "Cutting unemployment benefits is morally indefensible during an economic downturn.",
        "Central banks should prioritize low unemployment over keeping inflation near two percent.",
        "Raising the minimum wage by 15% increased youth unemployment by 1.2 percentage points.",
      ],
      answerIndex: 3,
      hints: [
        "A positive statement can be tested and potentially refuted using empirical data—even if it might turn out to be false.",
        "Watch for value-laden modal verbs such as 'ought to', 'should', or 'morally indefensible'.",
      ],
      explanation:
        "Stating that raising the minimum wage by 15% increased youth unemployment by 1.2 percentage points is an empirical, testable claim that can be verified or refuted against labour-market data, making it a positive statement. Statements using 'ought to', 'should', or 'morally indefensible' express normative value judgements.",
      strategy: "Testability check: positive = refutable with data; normative = value judgement",
    },
    {
      id: "exam-mcq-q04",
      kind: "mcq",
      topicId: "2a-markets-elasticities-gov",
      guideRef: "elasticities-ped-yed-pes",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "A commuter rail operator raises its ticket fare from $4.00 to $4.60, and daily ticket sales fall from 20,000 to 18,200. What is the price elasticity of demand (PED, absolute value) and the resulting effect on daily total revenue?",
      options: [
        "PED is 1.67 (price elastic), so total revenue falls by $3,720 per day.",
        "PED is 0.60 (price inelastic), so total revenue rises by $3,720 per day.",
        "PED is 0.60 (price inelastic), so total revenue falls by $3,720 per day.",
        "PED is 1.67 (price elastic), so total revenue rises by $3,720 per day.",
      ],
      answerIndex: 1,
      hints: [
        "Compute %ΔP = (4.60 − 4.00) / 4.00 × 100% and %ΔQd = (18,200 − 20,000) / 20,000 × 100%.",
        "Divide |%ΔQd| by |%ΔP| (do not invert the fraction!), then compare old TR ($4.00 × 20,000) with new TR ($4.60 × 18,200).",
      ],
      explanation:
        "Price rises by (+0.60 / 4.00) = +15% while quantity demanded falls by (−1,800 / 20,000) = −9%, giving |PED| = 9% / 15% = 0.60 (price inelastic). Because demand is price inelastic, raising price increases total revenue from $80,000 to $83,720 (+$3,720 per day). Getting 1.67 comes from inverting the PED formula as %ΔP / %ΔQd.",
      strategy: "PED = |%ΔQd / %ΔP| and Total Revenue test",
    },
    {
      id: "exam-mcq-q05",
      kind: "mcq",
      topicId: "2a-markets-elasticities-gov",
      guideRef: "government-intervention-welfare",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      question:
        "A government levies a specific indirect tax of $2.00 per litre on petrol, where demand is price inelastic (|PED| = 0.3) and supply is price elastic (PES = 1.8). Which outcome accurately describes the tax incidence?",
      options: [
        "Producers bear most of the tax burden because supply is more price elastic.",
        "The tax burden is split equally because specific taxes shift supply vertically.",
        "Government tax revenue collapses because quantity demanded falls drastically.",
        "Consumers bear most of the tax burden because demand is less price elastic.",
      ],
      answerIndex: 3,
      hints: [
        "Remember the golden rule of tax incidence: the MORE inelastic side of the market bears the LARGER share of the tax.",
        "Compare |PED| = 0.3 with PES = 1.8 to see whether buyers or sellers are less responsive to price changes.",
      ],
      explanation:
        "Because |PED| (0.3) is much lower than PES (1.8), consumers are far less responsive to price increases than producers, enabling firms to pass most of the $2.00 tax on through a higher retail price. The statutory collection point or vertical shift of supply does not guarantee an equal split, and inelastic demand keeps quantity high enough to raise substantial tax revenue.",
      strategy: "Tax incidence rule: more inelastic side bears greater burden",
    },
    {
      id: "exam-mcq-q06",
      kind: "mcq",
      topicId: "2a-markets-elasticities-gov",
      guideRef: "behavioural-economics-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Identify",
      question:
        "A national retirement scheme automatically enrols all new employees unless they submit an active opt-out form, raising participation from 46% to 89%. Which behavioural economics concept best describes this intervention?",
      options: [
        "Default choice architecture exploiting status quo bias as a gentle nudge.",
        "Mandated choice forcing workers to pay a tax penalty for declining entry.",
        "Anchoring bias caused by displaying an unusually high initial salary figure.",
        "Perfect rationality where households compute optimal lifetime consumption paths.",
      ],
      answerIndex: 0,
      hints: [
        "Notice that employees are NOT forced to stay in the scheme—they remain free to opt out.",
        "Recall Thaler and Sunstein's types of choice architecture: default, restricted, and mandated choices.",
      ],
      explanation:
        "Automatic enrolment with a free opt-out is a classic default choice nudge: it alters choice architecture to harness inertia and status quo bias without removing freedom of choice. By contrast, mandated choice requires an active decision before proceeding, and perfect rationality would predict identical participation regardless of the default setting.",
      strategy: "Classify choice architecture: default vs restricted vs mandated",
    },
    {
      id: "exam-mcq-q07",
      kind: "mcq",
      topicId: "2b-market-failure-power",
      guideRef: "externalities-common-pool",
      level: "SL",
      difficulty: "core",
      commandTerm: "Analyse",
      diagram: SVG_NEG_EXT_PROD,
      question:
        "In the negative externality of production diagram shown, the free-market equilibrium occurs at Qm while the socially optimal output is Q*. Why does market failure occur at Qm?",
      options: [
        "Marginal social benefit exceeds marginal social cost, causing underproduction.",
        "Marginal private cost exceeds marginal social cost, creating excess surplus.",
        "Marginal social cost exceeds marginal social benefit, causing overproduction.",
        "Marginal private benefit exceeds marginal social benefit, eliminating consumer surplus.",
      ],
      answerIndex: 2,
      hints: [
        "Read vertically at Qm: which curve sits higher—MSC or MSB?",
        "Compare Qm with the allocatively efficient output Q* (where MSC = MSB).",
      ],
      explanation:
        "At the free-market output Qm, producers consider only MPC and ignore external pollution costs, so MSC lies above MSB (MSC > MSB). Every unit produced between Q* and Qm adds more to social cost than to social benefit, causing overproduction (Qm > Q*) and generating the shaded welfare loss triangle pointing to Q*.",
      strategy: "Read MSC vs MSB vertically at market output Qm",
    },
    {
      id: "exam-mcq-q08",
      kind: "mcq",
      topicId: "2b-market-failure-power",
      guideRef: "public-goods-asymmetric-info",
      level: "HL",
      difficulty: "core",
      commandTerm: "Distinguish",
      question:
        "After buying comprehensive flood insurance, a homeowner stops clearing storm drains and stores expensive electronics in a ground-floor basement. Which type of market failure does this behaviour illustrate?",
      options: [
        "Adverse selection, because high-risk buyers hide private facts before signing.",
        "Moral hazard, because insured parties take greater risks after signing cover.",
        "Free-rider failure, because flood insurance is both non-rivalrous and non-excludable.",
        "Signalling failure, because insurers cannot publish standardized policy prices.",
      ],
      answerIndex: 1,
      hints: [
        "Pay close attention to the timing: does the risky behaviour happen BEFORE or AFTER the insurance contract is signed?",
        "Distinguish hidden information before a transaction (adverse selection) from hidden risky action after a transaction (moral hazard).",
      ],
      explanation:
        "Moral hazard occurs when one party changes behaviour and takes greater risks after entering a contract because the insurer bears the financial consequences of any loss. Adverse selection occurs before the contract is signed (hidden pre-existing risk characteristics), while insurance is a private good (excludable and rivalrous), not a public good.",
      strategy: "Asymmetric information timeline: before contract = adverse selection; after = moral hazard",
    },
    {
      id: "exam-mcq-q09",
      kind: "mcq",
      topicId: "2b-market-failure-power",
      guideRef: "costs-revenues-perfect-monopoly-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "A profit-maximizing monopolist produces Q = 50 units where MC = MR = $18. At Q = 50, price (AR) is $30, average total cost (ATC) is $24, and average variable cost (AVC) is $16. What is the firm's short-run abnormal (economic) profit?",
      options: [
        "$100, calculated from the gap between marginal revenue and average variable cost.",
        "$600, calculated from the gap between market price and marginal cost at Q = 50.",
        "$700, calculated from the gap between market price and average variable cost.",
        "$300, calculated from the gap between market price and average total cost.",
      ],
      answerIndex: 3,
      hints: [
        "Profit maximization (MC = MR) determines output Q = 50, NOT the vertical height of the profit rectangle.",
        "Total economic profit = TR − TC = (P − ATC) × Q. Identify P and ATC at Q = 50.",
      ],
      explanation:
        "Economic profit equals (AR − ATC) × Q = ($30 − $24) × 50 = $6 × 50 = $300 (equivalently TR $1,500 minus TC $1,200). A very common exam error is subtracting MC ($18) or AVC ($16) from price instead of ATC ($24); MC = MR only locates the profit-maximizing quantity.",
      strategy: "Profit rectangle = (P − ATC) × Q at Q where MC = MR",
    },
    {
      id: "exam-mcq-q10",
      kind: "mcq",
      topicId: "2b-market-failure-power",
      guideRef: "monopolistic-oligopoly-equity-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Determine",
      question:
        "Two rival airlines (SkyJet and AeroLink) simultaneously choose between **High Fare** and **Low Fare**. Annual profits (in $ millions, SkyJet first) are:\n\n| Strategy | AeroLink: High Fare | AeroLink: Low Fare |\n|---|---|---|\n| **SkyJet: High Fare** | (80, 80) | (25, 110) |\n| **SkyJet: Low Fare** | (110, 25) | (45, 45) |\n\nWhat is the Nash equilibrium of this one-shot prisoner's dilemma game?",
      options: [
        "Both airlines choose Low Fare, earning $45 million each despite lower joint profits.",
        "Both airlines choose High Fare, earning $80 million each through mutual restraint.",
        "SkyJet chooses Low Fare while AeroLink chooses High Fare, earning $110m and $25m.",
        "Neither airline has a dominant strategy, so no pure-strategy Nash equilibrium exists.",
      ],
      answerIndex: 0,
      hints: [
        "Find SkyJet's best response if AeroLink plays High Fare (compare 80 vs 110), then if AeroLink plays Low Fare (compare 25 vs 45).",
        "Because the matrix is symmetric, check whether both firms have a strictly dominant strategy.",
      ],
      explanation:
        "If AeroLink picks High Fare, SkyJet earns $110m from Low Fare versus $80m from High Fare; if AeroLink picks Low Fare, SkyJet earns $45m from Low Fare versus $25m from High Fare. Thus Low Fare is strictly dominant for both airlines, yielding the unique Nash equilibrium (Low Fare, Low Fare) with ($45m, $45m)—even though colluding on High Fare would earn ($80m, $80m).",
      strategy: "Underline best responses in a 2×2 payoff matrix",
    },
    {
      id: "exam-mcq-q11",
      kind: "mcq",
      topicId: "3a-macro-activity-objectives",
      guideRef: "measuring-macro-activity",
      level: "SL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "An economy's nominal GDP increases from $400 billion in Year 1 (GDP deflator = 100) to $462 billion in Year 2 (GDP deflator = 110). What is the exact percentage growth rate of **real GDP** in Year 2?",
      options: [
        "15.5%, because nominal output expanded by $62 billion over the year.",
        "10.0%, because the GDP deflator increased from 100 to 110 in Year 2.",
        "5.0%, because real GDP rose from $400 billion to $420 billion in Year 2.",
        "5.5%, because subtracting 10% inflation from 15.5% nominal growth is exact.",
      ],
      answerIndex: 2,
      hints: [
        "First deflate Year 2 nominal GDP using Real GDP = (Nominal GDP / GDP Deflator) × 100.",
        "Then compute [(Real GDP₂ − Real GDP₁) / Real GDP₁] × 100%.",
      ],
      explanation:
        "Year 1 real GDP is ($400bn / 100) × 100 = $400bn, and Year 2 real GDP is ($462bn / 110) × 100 = $420bn. Therefore exact real GDP growth is ((420 − 400) / 400) × 100% = 5.0%. Subtracting 10% inflation from 15.5% nominal growth gives 5.5%, which is only a rough approximation and overstates exact real growth when inflation is large.",
      strategy: "Deflate nominal GDP first, then take percentage change",
    },
    {
      id: "exam-mcq-q12",
      kind: "mcq",
      topicId: "3a-macro-activity-objectives",
      guideRef: "adas-models-equilibria",
      level: "SL",
      difficulty: "core",
      commandTerm: "Compare",
      question:
        "In the **Keynesian** aggregate supply model, when an economy operates in the horizontal (spare-capacity) section of the AS curve, what is the primary impact of an expansionary rightward shift of aggregate demand (AD)?",
      options: [
        "The price level rises sharply while real GDP stays fixed at full employment.",
        "Short-run aggregate supply shifts left automatically as nominal wages fall rapidly.",
        "Potential output expands immediately without any change in actual real output.",
        "Real GDP increases and cyclical unemployment falls with minimal price-level inflation.",
      ],
      answerIndex: 3,
      hints: [
        "Picture the three sections of the Keynesian AS curve: horizontal (recession), upward-sloping (approaching capacity), and vertical (full employment).",
        "Along a horizontal AS curve, what happens to the vertical coordinate (Price Level) vs horizontal coordinate (Real GDP) as AD shifts right?",
      ],
      explanation:
        "In the horizontal section of the Keynesian AS curve, abundant unemployed labour and idle capital allow firms to raise output without bidding up wages or input prices. Consequently, a rightward shift of AD raises real GDP and reduces cyclical unemployment with little or no increase in the price level.",
      strategy: "Locate AD intersection on the Keynesian three-stage AS curve",
    },
    {
      id: "exam-mcq-q13",
      kind: "mcq",
      topicId: "3a-macro-activity-objectives",
      guideRef: "macro-objectives-phillips-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Analyse",
      question:
        "A sudden surge in global crude oil and shipping costs causes cost-push inflation alongside rising unemployment (stagflation). How is this shock shown on a Phillips curve diagram?",
      options: [
        "An upward movement along a fixed SRPC as unemployment falls below the NRU.",
        "An outward rightward shift of the SRPC, raising both inflation and unemployment.",
        "An inward leftward shift of the LRPC, permanently lowering the natural rate.",
        "A downward movement along a fixed SRPC as aggregate demand contracts sharply.",
      ],
      answerIndex: 1,
      hints: [
        "Distinguish demand shocks (movements along a fixed SRPC) from supply shocks (shifts of the SRPC).",
        "A negative supply shock (SRAS shifting left) worsens BOTH inflation and unemployment simultaneously.",
      ],
      explanation:
        "Movements along a fixed Short-Run Phillips Curve reflect aggregate demand changes (an inverse trade-off between inflation and unemployment). By contrast, a negative cost-push supply shock shifts SRAS left and shifts the SRPC outwards to the right, producing stagflation: higher inflation and higher unemployment at the same time.",
      strategy: "AD shift = move along SRPC; SRAS shift = shift the entire SRPC",
    },
    {
      id: "exam-mcq-q14",
      kind: "mcq",
      topicId: "3b-macro-policies",
      guideRef: "monetary-policy-banking",
      level: "SL",
      difficulty: "core",
      commandTerm: "Explain",
      question:
        "When a central bank reduces its base policy interest rate to close a deflationary gap, which transmission mechanism shifts aggregate demand (AD) to the right?",
      options: [
        "Lower borrowing costs stimulate consumption and investment, while currency depreciation boosts net exports.",
        "Higher borrowing costs curb household spending, while currency appreciation raises net export earnings.",
        "Lower interest rates increase household savings ratios, while higher bond yields lift tax revenues.",
        "Commercial banks raise mortgage rates immediately, shifting long-run aggregate supply to the left.",
      ],
      answerIndex: 0,
      hints: [
        "Check how lower interest rates affect household borrowing/saving (C), business loans for capital (I), and hot-money flows into the currency (X − M).",
        "All three channels should push AD in the same expansionary direction.",
      ],
      explanation:
        "Cutting the base interest rate reduces the cost of loans and the reward for saving, increasing household consumption and private investment. Lower yields also trigger hot-money outflows that depreciate the domestic currency, making exports cheaper and imports dearer, which boosts net exports (X − M) and shifts AD right.",
      strategy: "Trace monetary transmission across C, I, and (X − M)",
    },
    {
      id: "exam-mcq-q15",
      kind: "mcq",
      topicId: "3b-macro-policies",
      guideRef: "multiplier-crowding-out-hl",
      level: "HL",
      difficulty: "core",
      commandTerm: "Calculate",
      question:
        "In an open economy, the marginal propensity to save (MPS) is 0.10, the marginal propensity to tax (MPT) is 0.15, and the marginal propensity to import (MPM) is 0.15. If the government raises infrastructure spending by $15 billion, what is the maximum predicted increase in real GDP?",
      options: [
        "$150.0 billion, using only the marginal propensity to save as the leakage.",
        "$25.0 billion, dividing the injection by the marginal propensity to consume.",
        "$37.5 billion, multiplying $15 billion by a Keynesian multiplier of 2.5.",
        "$60.0 billion, multiplying $15 billion by a Keynesian multiplier of 4.0.",
      ],
      answerIndex: 2,
      hints: [
        "Sum ALL three marginal leakages: MPW = MPS + MPT + MPM.",
        "Calculate the Keynesian multiplier k = 1 / MPW, then multiply k × ΔG.",
      ],
      explanation:
        "Total marginal leakages are MPW = 0.10 + 0.15 + 0.15 = 0.40, so the Keynesian multiplier is k = {{1/0.40}} = 2.5. Multiplying the $15 billion injection by 2.5 gives ΔReal GDP = 2.5 × $15 billion = $37.5 billion. Ignoring MPT and MPM vastly overstates k at 10, while dividing by MPC (0.60) inverts the formula.",
      strategy: "Always sum MPS + MPT + MPM before computing k = 1 / MPW",
    },
    {
      id: "exam-mcq-q16",
      kind: "mcq",
      topicId: "3b-macro-policies",
      guideRef: "supply-side-policies",
      level: "SL",
      difficulty: "core",
      commandTerm: "Distinguish",
      question:
        "Which combination consists strictly of **interventionist** supply-side policies rather than market-based supply-side policies?",
      options: [
        "Privatizing state utilities, cutting corporate tax rates, and deregulating labour contracts.",
        "Expanding vocational retraining, funding green-energy R&D grants, and upgrading rail infrastructure.",
        "Abolishing statutory minimum wages, reducing trade-union powers, and lowering import tariffs.",
        "Reducing marginal income tax rates, increasing competition enforcement, and privatizing telecoms.",
      ],
      answerIndex: 1,
      hints: [
        "Interventionist supply-side policies rely on active government spending to build productive capacity.",
        "Market-based supply-side policies reduce government involvement through deregulation, privatization, labour flexibility, or tax cuts.",
      ],
      explanation:
        "Vocational retraining (human capital), public R&D grants (innovation), and rail infrastructure are direct government investments designed to shift LRAS rightwards—making all three interventionist supply-side policies. Privatization, deregulation, tax cuts, trade liberalization, and labour-market flexibility are market-based supply-side policies.",
      strategy: "Interventionist = public capital/human-capital spending; Market-based = deregulation/privatization/tax cuts",
    },
    {
      id: "exam-mcq-q17",
      kind: "mcq",
      topicId: "4a-trade-integration",
      guideRef: "benefits-trade-comparative-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "Using all of its resources, Country X can produce either 40 tonnes of wheat or 80 units of cloth, while Country Y can produce either 30 tonnes of wheat or 30 units of cloth. Which statement about comparative advantage is correct?",
      options: [
        "Country X has comparative advantage in both goods because its outputs are higher.",
        "Country X has comparative advantage in wheat because it gives up 2 cloth.",
        "Neither country gains from trade because Country Y lacks any absolute advantage.",
        "Country Y has comparative advantage in wheat, giving up 1 cloth versus 2.",
      ],
      answerIndex: 3,
      hints: [
        "Compute the opportunity cost of 1 tonne of wheat in each country using (Max Cloth / Max Wheat).",
        "The country with the LOWER opportunity cost holds the comparative advantage in wheat.",
      ],
      explanation:
        "Country X gives up {{80/40}} = 2 units of cloth per tonne of wheat, whereas Country Y gives up only {{30/30}} = 1 unit of cloth per tonne of wheat. Because 1 < 2, Country Y has the comparative advantage in wheat and Country X has the comparative advantage in cloth (giving up 0.5 wheat vs 1 wheat). Even though Country X holds an absolute advantage in both goods, a country cannot hold comparative advantage in both.",
      strategy: "Opportunity cost of 1 X = Max Y / Max X; lower opportunity cost wins",
    },
    {
      id: "exam-mcq-q18",
      kind: "mcq",
      topicId: "4a-trade-integration",
      guideRef: "trade-protection-diagrams",
      level: "SL",
      difficulty: "core",
      commandTerm: "Compare",
      question:
        "Compared with an import tariff that expands domestic output by the exact same quantity, a domestic **production subsidy** generally:",
      options: [
        "leaves consumer price at the world price, avoiding consumption loss while costing taxpayers.",
        "raises domestic consumer prices above world price while generating extra government tariff revenue.",
        "eliminates all production inefficiency while forcing domestic firms to lower output immediately.",
        "restricts import quantities directly through licences, transferring quota rents to foreign exporters.",
      ],
      answerIndex: 0,
      hints: [
        "Think about which curve shifts on a trade diagram under a production subsidy: does the world price line shift up, or does domestic supply shift right?",
        "Ask how consumers and the government budget are affected differently under a subsidy vs a tariff.",
      ],
      explanation:
        "A production subsidy shifts S_dom rightwards while consumers continue buying at the unchanged world price P_w. Hence consumers suffer no loss of consumer surplus and there is no consumption deadweight loss, though production inefficiency remains and the government incurs fiscal expenditure instead of collecting tariff revenue.",
      strategy: "Compare protection tools on P_consumer, DWL triangles, and government budget",
    },
    {
      id: "exam-mcq-q19",
      kind: "mcq",
      topicId: "4a-trade-integration",
      guideRef: "economic-integration-wto",
      level: "SL",
      difficulty: "core",
      commandTerm: "Distinguish",
      question:
        "What specifically distinguishes a **Customs Union** from a **Free Trade Area (FTA)**?",
      options: [
        "A Customs Union introduces a shared single currency managed by one central bank.",
        "A Customs Union allows completely free movement of labour and capital across borders.",
        "A Customs Union establishes a common external tariff applied to all non-member countries.",
        "A Customs Union permits each member to negotiate separate tariffs with non-member states.",
      ],
      answerIndex: 2,
      hints: [
        "Recall the ladder of integration: PTA → FTA → Customs Union → Common Market → Monetary Union.",
        "Both FTAs and Customs Unions remove internal tariffs among members; identify the single extra feature added at the Customs Union stage.",
      ],
      explanation:
        "Both FTAs and Customs Unions eliminate internal trade barriers among members, but a Customs Union goes one step further by adopting a common external tariff (CET) and unified trade policy toward non-member countries. Free movement of labour and capital defines a Common Market, and a shared currency defines a Monetary Union.",
      strategy: "Economic integration ladder: FTA + CET = Customs Union",
    },
    {
      id: "exam-mcq-q20",
      kind: "mcq",
      topicId: "4b-exchange-bop-development",
      guideRef: "exchange-rates-regimes",
      level: "SL",
      difficulty: "core",
      commandTerm: "Analyse",
      question:
        "In a floating exchange rate system, a country's central bank raises domestic interest rates sharply above foreign interest rates. What is the immediate effect in the foreign exchange market?",
      options: [
        "Capital outflows increase currency supply, causing the domestic currency to depreciate sharply.",
        "Hot-money inflows increase currency demand, causing the domestic currency to appreciate.",
        "Domestic imports become more expensive immediately, widening any existing inflation gap.",
        "Export prices fall in foreign currencies, automatically improving the current account balance.",
      ],
      answerIndex: 1,
      hints: [
        "Ask where international financial investors want to deposit short-term funds when domestic yields rise.",
        "To invest in domestic bank deposits or bonds, foreign investors must first buy the domestic currency.",
      ],
      explanation:
        "Higher domestic interest rates attract foreign short-term financial capital ('hot money'), shifting the demand for the domestic currency to the right (and reducing outflows/supply), which causes the currency to appreciate. Appreciation makes imports cheaper—helping contain inflation—while making exports dearer in foreign currencies.",
      strategy: "Higher relative interest rate → hot-money inflow → currency appreciation",
    },
    {
      id: "exam-mcq-q21",
      kind: "mcq",
      topicId: "4b-exchange-bop-development",
      guideRef: "bop-marshall-lerner-hl",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Explain",
      question:
        "Following a currency depreciation, a country's current account deficit initially worsens for several months before eventually improving (the **J-curve effect**). What is the economic explanation for this pattern?",
      options: [
        "Import prices fall immediately in domestic currency, stimulating a sudden burst of imports.",
        "The Marshall–Lerner condition holds in the short run but fails over longer horizons.",
        "Foreign central banks impose automatic retaliatory tariffs within the first two quarters.",
        "Demand for exports and imports is price inelastic initially, becoming elastic over time.",
      ],
      answerIndex: 3,
      hints: [
        "Recall the Marshall–Lerner condition: depreciation improves the trade balance only when |PED_X| + |PED_M| > 1.",
        "Think about existing trade contracts and buyer switching lags right after a currency falls.",
      ],
      explanation:
        "In the short run, trade contracts are locked in and consumers/firms take time to find substitutes, so |PED_X| + |PED_M| < 1 (the Marshall–Lerner condition fails): higher import prices increase total import expenditure faster than export revenue rises, worsening the deficit. Over the longer run, elasticities increase until |PED_X| + |PED_M| > 1 and the trade balance improves.",
      strategy: "J-curve = Marshall–Lerner fails in SR (< 1) then holds in LR (> 1)",
    },
    {
      id: "exam-mcq-q22",
      kind: "mcq",
      topicId: "4b-exchange-bop-development",
      guideRef: "measuring-development-barriers",
      level: "SL",
      difficulty: "core",
      commandTerm: "Distinguish",
      question:
        "Country Z records a high Human Development Index (HDI) of 0.84 but a much lower Inequality-Adjusted HDI (IHDI) of 0.62. What does this 0.22-point gap specifically indicate?",
      options: [
        "Substantial inequality exists in the distribution of income, health, and education across society.",
        "Purchasing power parity adjustments were omitted when calculating Country Z's national income.",
        "Rapid inflation eroded nominal GNI per capita faster than life expectancy improved.",
        "Environmental degradation and carbon emissions are directly deducted from the IHDI score.",
      ],
      answerIndex: 0,
      hints: [
        "If every person enjoyed identical health, schooling, and income, IHDI would equal HDI.",
        "Check what the 'I' in IHDI adjusts across all three HDI dimensions.",
      ],
      explanation:
        "The Inequality-Adjusted HDI (IHDI) discounts each of the three HDI dimensions—life expectancy, education, and GNI per capita—for inequality in its distribution. A large drop from 0.84 to 0.62 reveals that average achievements mask deep inequalities across households. Both HDI and IHDI already use PPP-adjusted GNI per capita and neither directly deducts carbon emissions.",
      strategy: "HDI = average achievement; HDI − IHDI = loss due to multidimensional inequality",
    },
    {
      id: "exam-mcq-q23",
      kind: "mcq",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-micro-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "A competitive market has linear demand {{Q_d = 120 - 4P}} and supply {{Q_s = 20 + 6P}}, where P is in dollars and Q is in thousands of units. What are the equilibrium price, equilibrium quantity, and consumer surplus?",
      options: [
        "P = $10, Q = 80 thousand, and consumer surplus is $1,600 thousand.",
        "P = $10, Q = 80 thousand, and consumer surplus is $800 thousand.",
        "P = $12, Q = 72 thousand, and consumer surplus is $648 thousand.",
        "P = $10, Q = 80 thousand, and consumer surplus is $400 thousand.",
      ],
      answerIndex: 1,
      hints: [
        "Set 120 − 4P = 20 + 6P to solve for equilibrium price P and substitute back to get Q.",
        "Find the demand P-intercept (where Q_d = 0), then apply Consumer Surplus = ½ × (P_intercept − P_e) × Q_e.",
      ],
      explanation:
        "Solving 120 − 4P = 20 + 6P gives 10P = 100, so P_e = $10 and Q_e = 120 − 4(10) = 80 thousand units. Setting Q_d = 0 yields the demand vertical intercept P = {{120/4}} = $30. Therefore consumer surplus is ½ × ($30 − $10) × 80 thousand = $800 thousand ($800,000). Forgetting the ½ factor wrongly gives $1,600 thousand.",
      strategy: "Solve Q_d = Q_s → find P-intercept (Q_d = 0) → CS = ½ × base × height",
    },
    {
      id: "exam-mcq-q24",
      kind: "mcq",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-macro-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      question:
        "A country applies a progressive income tax schedule: 0% on the first $10,000; 15% on income from $10,001 to $40,000; and 30% on income above $40,000. For a worker earning $60,000, what are the **marginal tax rate** and **average tax rate**?",
      options: [
        "Marginal tax rate is 17.5% and average tax rate is 30.0%.",
        "Marginal tax rate is 30.0% and average tax rate is 15.0%.",
        "Marginal tax rate is 30.0% and average tax rate is 17.5%.",
        "Marginal tax rate is 30.0% and average tax rate is 30.0%.",
      ],
      answerIndex: 2,
      hints: [
        "Calculate tax slice-by-slice across each bracket rather than applying 30% to the entire $60,000.",
        "Average tax rate = (Total Tax / Total Income) × 100%; marginal tax rate = tax rate on the next extra dollar earned.",
      ],
      explanation:
        "Tax paid is $0 on the first $10,000, plus 15% × $30,000 = $4,500 on the middle slice, plus 30% × $20,000 = $6,000 on income above $40,000, totalling $10,500. The average tax rate is {{10500/60000}} × 100% = 17.5%, while the marginal tax rate (the rate on the last/next dollar earned) is 30.0%.",
      strategy: "Slice progressive tax brackets individually; MTR > ATR in a progressive system",
    },
    {
      id: "exam-mcq-q25",
      kind: "mcq",
      topicId: "5-hl-paper3-policy-quant",
      guideRef: "p3-global-quantitative",
      level: "HL",
      difficulty: "challenge",
      commandTerm: "Calculate",
      diagram: SVG_TARIFF_STEEL,
      question:
        "In the steel tariff diagram shown, the world price is $400/tonne and a specific tariff of $100/tonne raises the domestic price to $500/tonne. Domestic supply expands from 20 to 35 thousand tonnes while domestic demand contracts from 90 to 75 thousand tonnes. What is the **total deadweight welfare loss** caused by the tariff?",
      options: [
        "$750 thousand, capturing only the domestic production inefficiency triangle.",
        "$4,000 thousand, equal to the tariff revenue collected on remaining imports.",
        "$3,000 thousand, omitting the one-half factor on both welfare triangles.",
        "$1,500 thousand, summing the $750k production and $750k consumption losses.",
      ],
      answerIndex: 3,
      hints: [
        "There are TWO deadweight loss triangles under a tariff: production inefficiency on the left and consumption loss on the right.",
        "Use Area = ½ × height ($100) × base for EACH triangle, then add them together.",
      ],
      explanation:
        "Production inefficiency loss is ½ × $100 × (35 − 20) thousand = $750 thousand, and consumption deadweight loss is ½ × $100 × (90 − 75) thousand = $750 thousand. Summing both triangles gives a total deadweight welfare loss of $1,500 thousand ($1.5 million). The $4,000 thousand figure ($100 × 40 thousand) is government tariff revenue, which is a transfer rather than a deadweight loss.",
      strategy: "Tariff DWL = ½·t·(Q₃ − Q₁) + ½·t·(Q₂ − Q₄)",
    },
  ],
};
