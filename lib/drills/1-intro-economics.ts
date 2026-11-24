import { clean, num, roundTo } from "./helpers.ts";
import type { Drill, Rng } from "./types.ts";

const GOOD_PAIRS: ReadonlyArray<[string, string]> = [
  ["consumer goods", "capital goods"],
  ["solar panels", "electric buses"],
  ["laptops", "smartphones"],
  ["wind turbines", "microchips"],
  ["autonomous drones", "medical scanners"],
  ["manufactured goods", "agricultural goods"],
  ["high-speed trains", "cargo vessels"],
];

const ECONOMIES = [
  "Alba",
  "Borealis",
  "Cascadia",
  "Delos",
  "Elysia",
  "Fidelia",
  "Helios",
  "Kestrel",
  "Lumina",
  "Meridian",
  "Norden",
  "Veridia",
] as const;

const COUNTRIES = [
  "Singapore",
  "Germany",
  "Japan",
  "Canada",
  "Sweden",
  "Australia",
  "Brazil",
  "Chile",
  "Vietnam",
  "Kenya",
  "New Zealand",
  "South Korea",
] as const;

// ---------------------------------------------------------------------------
// Drill 1: PPC Opportunity Cost & Shifts
// ---------------------------------------------------------------------------
const ppcOpportunityCost: Drill = {
  id: "1-intro-economics.ppc-opportunity-cost",
  topicId: "1-intro-economics",
  title: "PPC Opportunity Cost & Shifts",
  level: 1,
  ibLevel: "SL",
  guideRef: "scarcity-choice-ppc",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const [gx, gy] = rng.pick(GOOD_PAIRS);
    const econ = rng.pick(ECONOMIES);

    if (tier === 1) {
      const x1 = rng.int(1, 12) * 5;
      const dx = rng.int(2, 10) * 5;
      const x2 = x1 + dx;
      let dy = rng.int(3, 14) * 5;
      if (dy === dx) dy += 10;
      const y2 = rng.int(2, 12) * 5;
      const y1 = y2 + dy;

      return {
        prompt: `Moving along its PPC, ${econ} reallocates resources from producing **(${x1} ${gx}, ${y1} ${gy})** to **(${x2} ${gx}, ${y2} ${gy})**. Calculate the **total opportunity cost** of this shift, measured in units of ${gy}.`,
        answer: { type: "number", value: dy, display: `${dy} units` },
        traps: [
          {
            spec: { type: "number", value: dx },
            feedback: `${dx} is the gain in ${gx}. Opportunity cost measures the units of ${gy} sacrificed (${y1} − ${y2}).`,
          },
        ],
        solution: [
          `Output of ${gy} falls from ${y1} to ${y2}.`,
          `Total opportunity cost = {{${y1} - ${y2} = ${dy}}} units of ${gy} sacrificed.`,
        ],
        hint: `Subtract the new output of ${gy} (${y2}) from the initial output (${y1}).`,
      };
    }

    if (tier === 2) {
      const ocs = [0.5, 0.75, 1.25, 1.5, 2, 2.5, 3, 3.5, 4] as const;
      const oc = rng.pick(ocs);
      const xMax = rng.int(4, 25) * 4;
      const yMax = clean(xMax * oc);
      const recip = roundTo(xMax / yMax, 2);

      return {
        prompt: `${econ} operates on a **straight-line (linear) PPC** with maximum annual capacity of **${xMax} thousand ${gx}** or **${yMax} thousand ${gy}**. Calculate the constant opportunity cost of producing **1 additional unit of ${gx}** (measured in ${gy}).`,
        answer: { type: "number", value: oc, display: num(oc) },
        traps:
          Math.abs(recip - oc) > 0.05
            ? [
                {
                  spec: { type: "number", value: recip, tolerance: 0.02 },
                  feedback: `That computes ${xMax} ÷ ${yMax} (the cost of 1 unit of ${gy}). Put the sacrificed good (${gy}) in the numerator.`,
                },
              ]
            : undefined,
        solution: [
          `Per-unit opportunity cost of ${gx} = {{("Max ${gy}") / ("Max ${gx}")}}.`,
          `{{${yMax} / ${xMax} = ${oc}}} units of ${gy} per unit of ${gx}.`,
        ],
        hint: `Divide maximum ${gy} (${yMax}) by maximum ${gx} (${xMax}).`,
      };
    }

    // Tier 3: either pivotal tech shift on linear PPC or concave arc marginal OC
    if (rng.bool(0.5)) {
      const pctChoices = [25, 50, 100] as const;
      const pct = rng.pick(pctChoices);
      const baseUnit = pct === 25 ? 16 : 20;
      const xOld = rng.int(2, 10) * baseUnit;
      const xNew = clean(xOld * (1 + pct / 100));
      const newOcs = [0.5, 0.75, 1.2, 1.25, 1.5, 1.8, 2, 2.5, 3] as const;
      const newOc = rng.pick(newOcs);
      const yMax = clean(xNew * newOc);
      const oldOc = roundTo(yMax / xOld, 2);

      return {
        prompt: `${econ} has a linear PPC with maximum capacity of **${xOld} ${gx}** or **${yMax} ${gy}**. New technology raises maximum ${gx} capacity by **${pct}%** while maximum ${gy} capacity stays at **${yMax}**. Calculate the **new** per-unit opportunity cost of 1 unit of ${gx} (in ${gy}).`,
        answer: { type: "number", value: newOc, display: num(newOc) },
        traps: [
          {
            spec: { type: "number", value: oldOc, tolerance: 0.02 },
            feedback: `${num(oldOc)} was the opportunity cost *before* the ${pct}% expansion in ${gx} capacity.`,
          },
        ],
        solution: [
          `New maximum ${gx} capacity = {{${xOld} * ${clean(1 + pct / 100)} = ${xNew}}}.`,
          `Maximum ${gy} stays fixed at ${yMax}.`,
          `New opportunity cost = {{${yMax} / ${xNew} = ${newOc}}} ${gy} per unit of ${gx}.`,
        ],
        hint: `First expand ${xOld} by ${pct}%, then divide ${yMax} by the new ${gx} intercept.`,
      };
    }

    const dx = rng.pick([10, 20, 25, 40]);
    const ocs = [0.6, 0.8, 1.2, 1.4, 1.6, 1.8, 2.2, 2.4, 2.5, 2.8, 3.2, 3.5] as const;
    const oc = rng.pick(ocs);
    const dy = clean(dx * oc);
    const x1 = rng.int(1, 6) * 10;
    const x2 = x1 + dx;
    const y2 = rng.int(2, 12) * 10;
    const y1 = clean(y2 + dy);

    return {
      prompt: `Along ${econ}'s concave PPC, moving from point **R (${x1} ${gx}, ${y1} ${gy})** to point **S (${x2} ${gx}, ${y2} ${gy})** shifts resources toward ${gx}. Calculate the **per-unit opportunity cost** of ${gx} over this range (in ${gy}).`,
      answer: { type: "number", value: oc, display: num(oc) },
      traps: [
        {
          spec: { type: "number", value: dy },
          feedback: `${dy} is the *total* sacrifice of ${gy} across ${dx} additional units of ${gx}. Divide by ${dx} for per-unit cost.`,
        },
      ],
      solution: [
        `Change in ${gy} sacrificed = {{${y1} - ${y2} = ${dy}}}; gain in ${gx} = {{${x2} - ${x1} = ${dx}}}.`,
        `Per-unit opportunity cost = {{${dy} / ${dx} = ${oc}}} ${gy} per unit of ${gx}.`,
      ],
      hint: `Divide total ${gy} sacrificed (${y1} − ${y2}) by total ${gx} gained (${x2} − ${x1}).`,
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 2: Five-Sector Circular Flow (W, J, Net Flow & Equilibrium)
// ---------------------------------------------------------------------------
const circularFlowNet: Drill = {
  id: "1-intro-economics.circular-flow-net",
  topicId: "1-intro-economics",
  title: "Five-Sector Circular Flow Calculations",
  level: 1,
  ibLevel: "SL",
  guideRef: "circular-flow-economic-systems",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const econ = rng.pick(ECONOMIES);
    const S = rng.int(15, 85);
    const T = rng.int(25, 110);
    const M = rng.int(20, 95);
    const I = rng.int(15, 85);
    const G = rng.int(25, 110);
    let X = rng.int(20, 95);
    const W = S + T + M;
    if (I + G + X === W) X += 12;
    const J = I + G + X;
    const net = J - W;

    if (tier === 1) {
      const askLeakages = rng.bool(0.5);
      if (askLeakages) {
        return {
          prompt: `In ${econ}'s five-sector circular flow ($ billions): **S = ${S}**, **T = ${T}**, **M = ${M}**, **I = ${I}**, **G = ${G}**, and **X = ${X}**. Calculate **total leakages (W)** in $ billion.`,
          answer: { type: "number", value: W, display: `$${W} billion` },
          traps: [
            {
              spec: { type: "number", value: J },
              feedback: `$${J} billion is total injections (I + G + X). For leakages, sum Savings + Taxation + Imports (S + T + M).`,
            },
          ],
          solution: [
            `Leakages withdraw spending from the domestic loop: {{W = S + T + M}}.`,
            `{{W = ${S} + ${T} + ${M} = ${W}}} ($ billion).`,
          ],
          hint: "Sum only the three leakages: S + T + M.",
        };
      }
      return {
        prompt: `In ${econ}'s five-sector circular flow ($ billions): **S = ${S}**, **T = ${T}**, **M = ${M}**, **I = ${I}**, **G = ${G}**, and **X = ${X}**. Calculate **total injections (J)** in $ billion.`,
        answer: { type: "number", value: J, display: `$${J} billion` },
        traps: [
          {
            spec: { type: "number", value: W },
            feedback: `$${W} billion is total leakages (S + T + M). For injections, sum Investment + Government spending + Exports (I + G + X).`,
          },
        ],
        solution: [
          `Injections add new spending to domestic firms: {{J = I + G + X}}.`,
          `{{J = ${I} + ${G} + ${X} = ${J}}} ($ billion).`,
        ],
        hint: "Sum only the three injections: I + G + X.",
      };
    }

    if (tier === 2) {
      const dir = net > 0 ? "expand" : "contract";
      return {
        prompt: `${econ} records ($ billions): **S = ${S}**, **T = ${T}**, **M = ${M}**, **I = ${I}**, **G = ${G}**, and **X = ${X}**. Calculate the **net injection** {{(I + G + X) - (S + T + M)}} in $ billion (include a minus sign if leakages exceed injections).`,
        answer: { type: "number", value: net, display: num(net) },
        traps: [
          {
            spec: { type: "number", value: -net },
            feedback: `Check the sign! Subtract leakages (${W}) from injections (${J}): ${J} − ${W} = ${num(net)}.`,
          },
        ],
        solution: [
          `Total injections {{J = ${I} + ${G} + ${X} = ${J}}} ($ bn); total leakages {{W = ${S} + ${T} + ${M} = ${W}}} ($ bn).`,
          `Net injection = {{${J} - ${W} = ${net}}} ($ bn), so national income will **${dir}**.`,
        ],
        hint: "Compute J = I + G + X and W = S + T + M, then evaluate J − W.",
      };
    }

    // Tier 3: solve for missing equilibrium flow (G, X, or I)
    const missingKind = rng.pick(["G", "X", "I"] as const);
    const s3 = rng.int(35, 90);
    const t3 = rng.int(45, 110);
    const m3 = rng.int(40, 100);
    const w3 = s3 + t3 + m3;
    const known1 = rng.int(30, 80);
    const known2 = rng.int(35, 85);
    const needed = w3 - known1 - known2;

    if (missingKind === "G") {
      return {
        prompt: `For ${econ}'s five-sector circular flow to reach equilibrium, **S = $${s3} bn**, **T = $${t3} bn**, **M = $${m3} bn**, **I = $${known1} bn**, and **X = $${known2} bn**. Calculate the required level of **Government Spending (G)** in $ billion.`,
        answer: { type: "number", value: needed, display: `$${needed} billion` },
        traps:
          t3 !== needed
            ? [
                {
                  spec: { type: "number", value: t3 },
                  feedback: `Equilibrium requires aggregate balance (I + G + X = S + T + M), not strictly G = T ($${t3} bn).`,
                },
              ]
            : undefined,
        solution: [
          `Total leakages {{W = ${s3} + ${t3} + ${m3} = ${w3}}} ($ bn).`,
          `Equilibrium requires {{I + G + X = ${w3}}} ⇒ {{${known1} + G + ${known2} = ${w3}}}.`,
          `{{G = ${w3} - ${known1 + known2} = ${needed}}} ($ billion).`,
        ],
        hint: "Set I + G + X equal to S + T + M and solve for G.",
      };
    }

    if (missingKind === "X") {
      return {
        prompt: `For ${econ}'s five-sector circular flow to reach equilibrium, **S = $${s3} bn**, **T = $${t3} bn**, **M = $${m3} bn**, **I = $${known1} bn**, and **G = $${known2} bn**. Calculate the required level of **Exports (X)** in $ billion.`,
        answer: { type: "number", value: needed, display: `$${needed} billion` },
        traps:
          m3 !== needed
            ? [
                {
                  spec: { type: "number", value: m3 },
                  feedback: `Equilibrium requires total injections to equal total leakages, not strictly X = M ($${m3} bn).`,
                },
              ]
            : undefined,
        solution: [
          `Total leakages {{W = ${s3} + ${t3} + ${m3} = ${w3}}} ($ bn).`,
          `Equilibrium requires {{I + G + X = ${w3}}} ⇒ {{${known1} + ${known2} + X = ${w3}}}.`,
          `{{X = ${w3} - ${known1 + known2} = ${needed}}} ($ billion).`,
        ],
        hint: "Set I + G + X equal to S + T + M and solve for X.",
      };
    }

    return {
      prompt: `For ${econ}'s five-sector circular flow to reach equilibrium, **S = $${s3} bn**, **T = $${t3} bn**, **M = $${m3} bn**, **G = $${known1} bn**, and **X = $${known2} bn**. Calculate the required level of **Investment (I)** in $ billion.`,
      answer: { type: "number", value: needed, display: `$${needed} billion` },
      traps:
        s3 !== needed
          ? [
              {
                spec: { type: "number", value: s3 },
                feedback: `In a five-sector model, equilibrium requires aggregate J = W, not strictly I = S ($${s3} bn).`,
              },
            ]
          : undefined,
      solution: [
        `Total leakages {{W = ${s3} + ${t3} + ${m3} = ${w3}}} ($ bn).`,
        `Equilibrium requires {{I + G + X = ${w3}}} ⇒ {{I + ${known1} + ${known2} = ${w3}}}.`,
        `{{I = ${w3} - ${known1 + known2} = ${needed}}} ($ billion).`,
      ],
      hint: "Set I + G + X equal to S + T + M and solve for I.",
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 3: Factors of Production & Factor Rewards
// ---------------------------------------------------------------------------
interface FactorExample {
  item: string;
  factor: "land" | "labour" | "capital" | "entrepreneurship";
  reward: "rent" | "wages" | "interest" | "profit";
  reason: string;
  tier3?: boolean;
}

const FACTOR_POOL: readonly FactorExample[] = [
  { item: "unmined lithium ore deposits beneath a salt flat", factor: "land", reward: "rent", reason: "Naturally occurring mineral deposits are Land." },
  { item: "fertile alluvial farmland along a river delta", factor: "land", reward: "rent", reason: "Fertile soil is a natural resource (Land)." },
  { item: "wild tuna stocks swimming in coastal fishing zones", factor: "land", reward: "rent", reason: "Natural marine fish stocks are classified as Land.", tier3: true },
  { item: "natural geothermal steam reservoirs underground", factor: "land", reward: "rent", reason: "Naturally occurring geothermal heat is Land.", tier3: true },
  { item: "untouched tropical hardwood timber forests", factor: "land", reward: "rent", reason: "Natural forests are part of the Land factor endowment." },
  { item: "crude oil reserves located beneath the seabed", factor: "land", reward: "rent", reason: "Subsurface hydrocarbons are natural resources (Land)." },
  { item: "freshwater aquifers tapped for crop irrigation", factor: "land", reward: "rent", reason: "Natural freshwater reserves belong to Land.", tier3: true },
  { item: "wind energy currents passing over coastal ridges", factor: "land", reward: "rent", reason: "Natural wind flows are Land (whereas wind turbines are Capital).", tier3: true },

  { item: "paediatric nurses treating patients in a public hospital", factor: "labour", reward: "wages", reason: "Human mental and physical effort in production is Labour." },
  { item: "aerospace engineers designing composite aircraft wings", factor: "labour", reward: "wages", reason: "Skilled human mental effort is Labour (enhanced by human capital)." },
  { item: "salaried supermarket branch managers supervising daily shifts", factor: "labour", reward: "wages", reason: "Salaried managers who do not bear business ownership risk are Labour.", tier3: true },
  { item: "software developers writing logistics code for a courier firm", factor: "labour", reward: "wages", reason: "Human coding effort supplied for pay is Labour." },
  { item: "licensed electricians wiring a new commuter rail line", factor: "labour", reward: "wages", reason: "Skilled manual trades constitute Labour." },
  { item: "economics lecturers teaching undergraduate seminars", factor: "labour", reward: "wages", reason: "Teaching effort is human Labour." },
  { item: "commercial airline pilots flying regional cargo routes", factor: "labour", reward: "wages", reason: "Specialised human flying effort is Labour.", tier3: true },
  { item: "hired farmworkers harvesting coffee cherries at peak season", factor: "labour", reward: "wages", reason: "Hired human physical effort is Labour.", tier3: true },

  { item: "automated gantry cranes loading containers at a deep-water port", factor: "capital", reward: "interest", reason: "Human-made machinery used to produce transport services is Capital.", tier3: true },
  { item: "industrial robotic welding arms inside an electric-car factory", factor: "capital", reward: "interest", reason: "Factory robotics are human-made physical Capital." },
  { item: "commercial MRI scanners installed in a diagnostic clinic", factor: "capital", reward: "interest", reason: "Medical machinery used to deliver healthcare is Capital." },
  { item: "a hydroelectric concrete dam and turbine station", factor: "capital", reward: "interest", reason: "A human-constructed dam and turbines are physical Capital (while the river water is Land).", tier3: true },
  { item: "fibre-optic broadband cables and cloud server racks", factor: "capital", reward: "interest", reason: "Human-made digital infrastructure used to produce services is Capital.", tier3: true },
  { item: "commercial cargo aircraft owned by a logistics fleet", factor: "capital", reward: "interest", reason: "Vehicles used by firms to produce transport output are Capital." },
  { item: "precision semiconductor lithography machines in a cleanroom", factor: "capital", reward: "interest", reason: "Specialised manufacturing equipment is physical Capital." },
  { item: "solar photovoltaic arrays mounted on a utility power farm", factor: "capital", reward: "interest", reason: "Human-made solar panels are Capital (whereas sunlight itself is Land/free good).", tier3: true },

  { item: "a biotech founder risking personal savings to organise a lab and launch a new vaccine", factor: "entrepreneurship", reward: "profit", reason: "Organising factors, innovating, and bearing financial risk is Entrepreneurship.", tier3: true },
  { item: "a restaurateur combining leased premises, chefs, and ovens while bearing the risk of failure", factor: "entrepreneurship", reward: "profit", reason: "Coordinating factors and bearing business risk is Entrepreneurship." },
  { item: "a tech co-founder launching an AI agritech start-up to disrupt traditional farming", factor: "entrepreneurship", reward: "profit", reason: "Innovation and risk-bearing venture creation define Entrepreneurship.", tier3: true },
  { item: "a sole proprietor risking personal equity to open a zero-waste circular packaging firm", factor: "entrepreneurship", reward: "profit", reason: "Risk-taking enterprise organisation is Entrepreneurship." },
  { item: "an independent fashion founder organising designers, looms, and suppliers under personal financial risk", factor: "entrepreneurship", reward: "profit", reason: "Combining the other three factors under risk is Entrepreneurship.", tier3: true },
  { item: "an innovator patenting a recyclable battery and mobilising investors and engineers to commercialise it", factor: "entrepreneurship", reward: "profit", reason: "Commercialising innovation while bearing uncertainty is Entrepreneurship.", tier3: true },
];

const FACTOR_ACCEPTS: Record<FactorExample["factor"], string[]> = {
  land: ["land"],
  labour: ["labour", "labor"],
  capital: ["capital", "physical capital"],
  entrepreneurship: ["entrepreneurship", "enterprise"],
};

const REWARD_ACCEPTS: Record<FactorExample["reward"], string[]> = {
  rent: ["rent"],
  wages: ["wages", "wage", "salaries", "wages and salaries"],
  interest: ["interest"],
  profit: ["profit", "profits"],
};

const factorsRewardsClassify: Drill = {
  id: "1-intro-economics.factors-rewards-classify",
  topicId: "1-intro-economics",
  title: "Factors of Production & Factor Rewards",
  level: 1,
  ibLevel: "SL",
  guideRef: "scarcity-choice-ppc",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const country = rng.pick(COUNTRIES);
    const pool = tier === 3 ? FACTOR_POOL.filter((x) => x.tier3) : FACTOR_POOL;
    const ex = rng.pick(pool);

    if (tier === 1) {
      return {
        prompt: `In ${country}'s economy, how do economists classify **${ex.item}**? State the one-word **factor of production**.`,
        answer: { type: "text", accept: FACTOR_ACCEPTS[ex.factor], display: ex.factor },
        solution: [
          `${ex.reason}`,
          `Factor of production: **${ex.factor}** (factor reward: ${ex.reward}).`,
        ],
        hint: "Choose from the four economic factors: Land, Labour, Capital, or Entrepreneurship.",
      };
    }

    if (tier === 2) {
      return {
        prompt: `In ${country}, a firm employs **${ex.item}**. State the one-word **factor reward (income)** earned by this factor of production.`,
        answer: { type: "text", accept: REWARD_ACCEPTS[ex.reward], display: ex.reward },
        solution: [
          `First identify the factor: ${ex.reason} → **${ex.factor}**.`,
          `The economic factor reward for ${ex.factor} is **${ex.reward}**.`,
        ],
        hint: "First identify whether the resource is Land, Labour, Capital, or Entrepreneurship, then match its income reward.",
      };
    }

    const askReward = rng.bool(0.5);
    if (askReward) {
      return {
        prompt: `IB Examiner Trap Check (${country}): Consider **${ex.item}**. Identify the exact one-word **factor income (reward)** paid for this input.`,
        answer: { type: "text", accept: REWARD_ACCEPTS[ex.reward], display: ex.reward },
        solution: [
          `${ex.reason}`,
          `Therefore the factor is **${ex.factor}**, whose reward is **${ex.reward}**.`,
        ],
        hint: "Be careful to distinguish natural resources (Land) from human-made structures (Capital), and salaried managers (Labour) from risk-bearing founders (Entrepreneurship).",
      };
    }

    return {
      prompt: `IB Examiner Trap Check (${country}): Classify **${ex.item}** precisely into one of the four **factors of production**.`,
      answer: { type: "text", accept: FACTOR_ACCEPTS[ex.factor], display: ex.factor },
      solution: [
        `${ex.reason}`,
        `Correct factor of production: **${ex.factor}**.`,
      ],
      hint: "Ask: is it naturally occurring (Land), human effort (Labour), human-made asset (Capital), or risk-bearing organisation (Entrepreneurship)?",
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 4: Positive vs Normative (& Equity vs Equality in Tier 3)
// ---------------------------------------------------------------------------
const positiveNormativeClassify: Drill = {
  id: "1-intro-economics.positive-normative-classify",
  topicId: "1-intro-economics",
  title: "Positive vs Normative & Equity vs Equality",
  level: 2,
  ibLevel: "SL",
  guideRef: "methodology-positive-normative",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const country = rng.pick(COUNTRIES);
    const pct1 = rng.int(2, 18);
    const pct2 = rng.int(1, 9);
    const dollar = rng.int(2, 15) * 100;

    if (tier === 1) {
      const isPos = rng.bool(0.5);
      const posTemplates = [
        `Raising ${country}'s fuel excise duty by ${pct1}% reduced petrol sales by ${pct2}% last year.`,
        `Annual consumer price inflation in ${country} fell from ${pct1}% to ${pct2}% in the third quarter.`,
        `Increasing ${country}'s public transit subsidy by $${dollar} million raised rail ridership by ${pct2}%.`,
        `A ${pct1}% appreciation of ${country}'s exchange rate lowered export volumes by ${pct2}%, ceteris paribus.`,
        `Real GDP in ${country} expanded by ${pct2}% following a $${dollar} million infrastructure package.`,
      ];
      const normTemplates = [
        `The government of ${country} ought to cut income taxes by ${pct1}% to reward hard work.`,
        `Policymakers in ${country} should prioritise environmental protection ahead of ${pct2}% GDP growth.`,
        `${country} must raise its minimum wage by ${pct1}% so that retail workers enjoy a fairer income.`,
        `Parliament in ${country} should spend $${dollar} million more on rural hospitals to create a more just society.`,
        `Central bankers in ${country} ought to hold interest rates below ${pct2}% to protect young homebuyers.`,
      ];
      const stmt = isPos ? rng.pick(posTemplates) : rng.pick(normTemplates);
      const ans = isPos ? "positive" : "normative";
      const opp = isPos ? "normative" : "positive";

      return {
        prompt: `Classify the following economic statement as either \`positive\` or \`normative\`:\n\n*"${stmt}"*`,
        answer: { type: "text", accept: [ans, `${ans} statement`], display: ans },
        traps: [
          {
            spec: { type: "text", accept: [opp, `${opp} statement`] },
            feedback: isPos
              ? "Look again: this statement makes an empirically testable claim with no value judgement, so it is positive."
              : "Look for prescriptive value-judgement words ('should', 'ought to', 'must', 'fairer') — these mark a normative statement.",
          },
        ],
        solution: [
          isPos
            ? `The statement makes an objective, empirically testable claim that can be checked against ${country}'s statistical data.`
            : `The statement prescribes what policymakers ought to do based on a subjective value judgement.`,
          `Classification: **${ans}**.`,
        ],
        hint: "Ask: can statistical data verify or refute this statement (positive), or does it express a value judgement about what ought to happen (normative)?",
      };
    }

    if (tier === 2) {
      // Harder IB edge cases: false positive claims, future-tense positive predictions, disguised normative claims
      const mode = rng.int(1, 3);
      if (mode === 1) {
        // False empirical claim -> STILL positive!
        const extreme = rng.int(65, 92);
        const falsePos = [
          `Over ${extreme}% of adult workers in ${country} were officially unemployed last month.`,
          `Every resident household in ${country} paid exactly $${dollar} in total taxes last year.`,
          `Raising ${country}'s cigarette tax by ${pct1}% caused smoking rates to surge by ${extreme}% immediately.`,
        ];
        const stmt = rng.pick(falsePos);
        return {
          prompt: `Classify this statement as \`positive\` or \`normative\` (careful — think about testability!):\n\n*"${stmt}"*`,
          answer: { type: "text", accept: ["positive", "positive statement"], display: "positive" },
          traps: [
            {
              spec: { type: "text", accept: ["normative", "normative statement"] },
              feedback: "A factually false claim is STILL positive if empirical data can test and disprove it!",
            },
          ],
          solution: [
            "Being factually false does not make a claim normative — positive means **empirically testable/refutable**.",
            "Official data can directly disprove this claim, so it is a (false) **positive** statement.",
          ],
          hint: "Remember: 'positive' means empirically testable or refutable — NOT 'proven true'!",
        };
      }

      if (mode === 2) {
        // Future-tense ceteris paribus prediction -> positive!
        const futurePos = [
          `Introducing a ${pct1}% sugar tax in ${country} will reduce soft-drink sales by ${pct2}% within two years, ceteris paribus.`,
          `Cutting ${country}'s corporate tax rate by ${pct2} percentage points will increase business investment next year, ceteris paribus.`,
          `A $${dollar} million rail upgrade in ${country} will reduce average commuter travel time by ${pct1}%, ceteris paribus.`,
        ];
        const stmt = rng.pick(futurePos);
        return {
          prompt: `Classify this economic forecast as \`positive\` or \`normative\`:\n\n*"${stmt}"*`,
          answer: { type: "text", accept: ["positive", "positive statement"], display: "positive" },
          traps: [
            {
              spec: { type: "text", accept: ["normative", "normative statement"] },
              feedback: "Using future tense ('will reduce') does not make a statement normative — testable forecasts are positive!",
            },
          ],
          solution: [
            "Even though it refers to the future, it makes a testable cause-and-effect prediction under *ceteris paribus* with no value judgement.",
            "Classification: **positive**.",
          ],
          hint: "Does future tense ('will') create a value judgement, or can future evidence test the prediction?",
        };
      }

      // Disguised normative (no 'should'/'ought')
      const disguisedNorm = [
        `Executive pay in ${country}'s commercial banks is excessively high compared with nurses' wages.`,
        `A ${pct1}% youth unemployment rate in ${country} is socially unacceptable for an advanced economy.`,
        `${country}'s current carbon tax of $${dollar / 10} per tonne is far too low to protect future generations fairly.`,
        `Housing prices in ${country} have become unjustly unaffordable for first-time buyers earning under $${dollar * 50}.`,
      ];
      const stmt = rng.pick(disguisedNorm);
      return {
        prompt: `Classify this statement as \`positive\` or \`normative\`:\n\n*"${stmt}"*`,
        answer: { type: "text", accept: ["normative", "normative statement"], display: "normative" },
        traps: [
          {
            spec: { type: "text", accept: ["positive", "positive statement"] },
            feedback: "Look closely for value-laden words like 'excessively high', 'unacceptable', 'far too low', or 'unjustly' — no dataset alone can prove those.",
          },
        ],
        solution: [
          "Even without the words *should* or *ought*, phrases like 'excessively high', 'unacceptable', 'far too low', or 'unjustly' embed subjective value judgements.",
          "Classification: **normative**.",
        ],
        hint: "Scan for evaluative adjectives ('excessively', 'unacceptable', 'too low', 'unjustly') that cannot be settled by statistics alone.",
      };
    }

    // Tier 3: Equity vs Equality classification!
    const isEquity = rng.bool(0.5);
    const equityCases = [
      `${country} charges higher marginal income tax rates (${pct1 + 15}%) on top earners while exempting households below $${dollar * 20} to ensure a fairer tax burden.`,
      `${country} targets $${dollar} university bursaries exclusively to low-income students rather than all families to promote fair access to higher education.`,
      `${country} provides larger winter energy rebates to elderly pensioners on modest incomes than to wealthy households based on ability to pay.`,
      `Economists debate whether ${country}'s ${pct1}% wealth tax produces a more just distribution of opportunity across generations.`,
    ];
    const equalityCases = [
      `${country} levies an identical flat municipal fee of $${dollar} per adult citizen so that every resident pays the exact same dollar amount.`,
      `Statistical officers measure whether post-tax household incomes in ${country} have become mathematically closer to identical shares across quintiles.`,
      `${country} distributes an identical $${dollar} cash voucher to every citizen regardless of whether they earn $20,000 or $500,000.`,
      `A local council sets the exact same $${pct1 * 10} annual library fee for every resident in ${country}, ensuring strictly identical treatment.`,
    ];
    const desc = isEquity ? rng.pick(equityCases) : rng.pick(equalityCases);
    const ans = isEquity ? "equity" : "equality";
    const opp = isEquity ? "equality" : "equity";

    return {
      prompt: `Does the following scenario in ${country} primarily illustrate **\`equity\`** or **\`equality\`**?\n\n*"${desc}"*`,
      answer: { type: "text", accept: [ans], display: ans },
      traps: [
        {
          spec: { type: "text", accept: [opp] },
          feedback: isEquity
            ? "Unequal treatment tailored to ability to pay or fairness reflects normative equity, not strict equality."
            : "Identical dollar amounts or strictly identical outcomes measure sameness (equality), which may or may not be judged equitable.",
        },
      ],
      solution: [
        isEquity
          ? "Unequal treatment aimed at fairness, justice, or ability to pay illustrates the normative concept of **equity**."
          : "Identical payments or mathematically identical outcomes illustrate the positive, measurable concept of **equality** (sameness).",
      ],
      hint: "Remember: equality = sameness (identical amounts/outcomes); equity = fairness (often using unequal rates/targeting).",
    };
  },
};

// ---------------------------------------------------------------------------
// Drill 5: Evolution of Economic Thought Matcher
// ---------------------------------------------------------------------------
interface ThoughtCase {
  thinker: string;
  acceptThinker: string[];
  century: string;
  acceptCentury: string[];
  school: string;
  acceptSchool: string[];
  clue: (country: string, u: number, inf: number) => string;
  explanation: string;
}

const THOUGHT_CASES: readonly ThoughtCase[] = [
  {
    thinker: "Adam Smith",
    acceptThinker: ["Adam Smith", "Smith"],
    century: "18th",
    acceptCentury: ["18th", "18", "18th century"],
    school: "Classical",
    acceptSchool: ["classical", "laissez-faire", "classical economics"],
    clue: (c) =>
      `A trade minister in ${c} argues that removing mercantilist monopolies and letting competitive self-interest work through the 'invisible hand' and division of labour will multiply national wealth.`,
    explanation: "Adam Smith (*The Wealth of Nations*, 1776 — 18th century) introduced laissez-faire, division of labour, and the invisible hand.",
  },
  {
    thinker: "Karl Marx",
    acceptThinker: ["Karl Marx", "Marx"],
    century: "19th",
    acceptCentury: ["19th", "19", "19th century"],
    school: "Marxian",
    acceptSchool: ["marxian", "marxist", "marxism"],
    clue: (c) =>
      `A labour historian in ${c} argues that industrial capitalists extract 'surplus value' from factory workers, concentrating wealth and driving inevitable crises of capitalist instability.`,
    explanation: "Karl Marx (*Das Kapital*, 1867 — 19th century) critiqued capitalism over surplus-value exploitation, inequality, and recurring crises.",
  },
  {
    thinker: "John Maynard Keynes",
    acceptThinker: ["John Maynard Keynes", "Keynes", "JM Keynes", "J. M. Keynes"],
    century: "20th",
    acceptCentury: ["20th", "20", "20th century"],
    school: "Keynesian",
    acceptSchool: ["keynesian", "keynesianism", "keynesian economics"],
    clue: (c, u) =>
      `With unemployment in ${c} stuck at ${u}% and wages sticky downwards, advisors urge deficit-financed public infrastructure spending to revive deficient aggregate demand.`,
    explanation: "John Maynard Keynes (*The General Theory*, 1936 — 20th century) championed active expansionary fiscal policy when economies get stuck below full employment.",
  },
  {
    thinker: "Milton Friedman",
    acceptThinker: ["Milton Friedman", "Friedman"],
    century: "20th",
    acceptCentury: ["20th", "20", "20th century"],
    school: "Monetarism",
    acceptSchool: ["monetarism", "monetarist", "new classical"],
    clue: (c, u, inf) =>
      `Facing stagflation in ${c} (${inf}% inflation alongside ${u}% unemployment), advisors reject fiscal fine-tuning and urge strict control of money-supply growth alongside market deregulation.`,
    explanation: "Milton Friedman (20th century — 1970s Monetarist counter-revolution) linked persistent inflation to monetary expansion and favoured deregulation and steady money growth.",
  },
  {
    thinker: "Richard Thaler",
    acceptThinker: ["Richard Thaler", "Thaler", "Kahneman", "Daniel Kahneman"],
    century: "21st",
    acceptCentury: ["21st", "21", "21st century"],
    school: "Behavioural Economics",
    acceptSchool: ["behavioural economics", "behavioral economics", "behavioural", "behavioral"],
    clue: (c) =>
      `Recognising bounded self-control and status-quo bias, ${c} switches workplace retirement savings from opt-in to automatic opt-out enrolment — using choice architecture ('nudges') without banning choice.`,
    explanation: "21st-century Behavioural Economics (Richard Thaler, Daniel Kahneman) challenges perfect rationality and uses nudges/choice architecture.",
  },
  {
    thinker: "Kate Raworth",
    acceptThinker: ["Kate Raworth", "Raworth"],
    century: "21st",
    acceptCentury: ["21st", "21", "21st century"],
    school: "Doughnut Economics",
    acceptSchool: ["doughnut economics", "donut economics", "doughnut", "doughnut economy", "circular economy"],
    clue: (c) =>
      `City planners in ${c} replace endless linear GDP targets with a dual-ring dashboard guaranteeing every citizen's social foundation without overshooting Earth's planetary ecological ceiling.`,
    explanation: "Kate Raworth (21st century, 2017) authored Doughnut Economics, uniting social foundations with planetary ecological ceilings and circular design.",
  },
];

const economicThoughtMatch: Drill = {
  id: "1-intro-economics.economic-thought-match",
  topicId: "1-intro-economics",
  title: "Evolution of Economic Thought (18th–21st c.)",
  level: 2,
  ibLevel: "SL",
  guideRef: "evolution-economic-thought",
  generate(rng: Rng, tier: 1 | 2 | 3) {
    const country = rng.pick(COUNTRIES);
    const u = rng.int(11, 22);
    const inf = rng.int(8, 17);
    const tc = rng.pick(THOUGHT_CASES);
    const scenario = tc.clue(country, u, inf);

    if (tier === 1) {
      return {
        prompt: `${scenario}\n\nName the **economist** most closely associated with this idea.`,
        answer: { type: "text", accept: tc.acceptThinker, display: tc.thinker },
        solution: [tc.explanation, `Economist: **${tc.thinker}**.`],
        hint: "Identify the hallmark phrase (invisible hand, surplus value, sticky wages/AD, stagflation/money supply, opt-out nudges, or social foundation/ecological ceiling).",
      };
    }

    if (tier === 2) {
      return {
        prompt: `${scenario}\n\nState the **century** (format like \`17th\`) in which this school of economic thought rose to prominence in the IB syllabus.`,
        answer: { type: "text", accept: tc.acceptCentury, display: `${tc.century} century` },
        solution: [tc.explanation, `Era: **${tc.century} century**.`],
        hint: "Anchor the timeline: Smith (18th), Marginalism & Marx (19th), Keynes & Monetarism (20th), Behavioural & Doughnut (21st).",
      };
    }

    return {
      prompt: `Policy Diagnosis (${country}): ${scenario}\n\nName the **school of thought or economic model** (e.g. *Mercantilism*) that underpins this approach.`,
      answer: { type: "text", accept: tc.acceptSchool, display: tc.school },
      solution: [tc.explanation, `School / Model: **${tc.school}**.`],
      hint: "Match the core mechanism (invisible hand, surplus value, aggregate-demand stimulus, money-supply discipline, choice architecture, or dual-ring planetary limits) to its school or model.",
    };
  },
};

export const drills: Drill[] = [
  ppcOpportunityCost,
  circularFlowNet,
  factorsRewardsClassify,
  positiveNormativeClassify,
  economicThoughtMatch,
];
