import type { Drill } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, lcm, num, roundTo } from "./helpers.ts";

const TOPIC = "2a-markets-elasticities-gov";

const GOODS = [
  "roasted coffee beans",
  "ceramic mugs",
  "bicycle helmets",
  "solar desk lamps",
  "artisan loaves",
  "wireless earbuds",
  "organic honey jars",
  "insulated flasks",
  "linen shirts",
  "running shoes",
  "cotton tote bags",
  "matcha tins",
] as const;

const YED_GOODS_INFERIOR = [
  "economy instant noodles",
  "budget intercity bus tickets",
  "second-hand textbooks",
  "store-brand canned soup",
  "discount frozen meals",
] as const;

const YED_GOODS_NECESSITY = [
  "fresh milk cartons",
  "wholemeal bread loaves",
  "everyday toothpaste",
  "staple jasmine rice",
  "household dish soap",
] as const;

const YED_GOODS_LUXURY = [
  "boutique resort nights",
  "artisan dark chocolates",
  "international flight tickets",
  "fine dining meals",
  "designer leather bags",
] as const;

function signedConst(c: number): string {
  if (c === 0) return "";
  return c > 0 ? `${c} + ` : `-${Math.abs(c)} + `;
}

function addTrapIfDistinct(traps: Trap[], correct: number, wrong: number, feedback: string, tol = 0.02) {
  if (Math.abs(correct - wrong) <= tol) return;
  if (traps.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - wrong) <= tol)) return;
  traps.push({ spec: { type: "number", value: clean(wrong), tolerance: tol }, feedback });
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: PED & TOTAL REVENUE CHANGE (SL, Level 1)
  // ===========================================================================
  {
    id: `${TOPIC}.ped-total-revenue`,
    topicId: TOPIC,
    title: "PED & Total Revenue Change",
    level: 1,
    ibLevel: "SL",
    guideRef: "elasticities-ped-yed-pes",
    generate(rng, tier) {
      const good = rng.pick(GOODS);

      if (tier === 1) {
        const pairs: Array<[number, number]> = [
          [10, 4], [10, 5], [10, 6], [10, 8], [10, 12], [10, 15], [10, 18], [10, 20], [10, 25],
          [20, 5], [20, 8], [20, 10], [20, 12], [20, 15], [20, 16], [20, 24], [20, 25], [20, 30], [20, 35],
          [25, 5], [25, 10], [25, 15], [25, 20], [25, 30], [25, 35], [25, 40], [25, 50],
          [8, 4], [8, 6], [8, 10], [8, 12], [8, 16], [8, 20],
          [5, 2], [5, 3], [5, 4], [5, 6], [5, 8], [5, 12],
        ];
        const [pctP, pctQ] = rng.pick(pairs);
        const priceRises = rng.bool();
        const ped = roundTo(pctQ / pctP, 2);
        const dirP = priceRises ? "rises" : "falls";
        const dirQ = priceRises ? "falls" : "rises";
        const signP = priceRises ? "+" : "−";
        const signQ = priceRises ? "−" : "+";
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, ped, -ped, "Report PED as a positive magnitude (take the absolute value).");
        addTrapIfDistinct(traps, ped, roundTo(pctP / pctQ, 2), "Put %ΔQ_d in the numerator and %ΔP in the denominator, not upside down.");

        return {
          prompt: `The price of ${good} ${dirP} by **${pctP}%**, causing quantity demanded to ${dirQ === "falls" ? "fall" : "rise"} by **${pctQ}%**. Calculate the Price Elasticity of Demand (PED) to 2 decimal places.`,
          answer: { type: "number", value: ped, tolerance: 0.01, display: num(ped) },
          traps,
          hint: "Use PED = |%ΔQ_d / %ΔP| and report the positive magnitude.",
          solution: [
            `{{PED = |(%ΔQ_d) / (%ΔP)| = |${signQ}${pctQ}% / ${signP}${pctP}%| = ${num(ped)}}}.`,
            ped > 1 ? "Since PED > 1, demand is **price elastic**." : ped < 1 ? "Since 0 < PED < 1, demand is **price inelastic**." : "Since PED = 1, demand is **unitary price elastic**.",
          ],
        };
      }

      // Tier 2 & Tier 3: build exact integer P1, P2, Q1, Q2
      const pctPChoices = [10, 20, 25];
      const pctQChoices = [5, 10, 15, 20, 25, 30, 40];
      const pctP = rng.pick(pctPChoices);
      const pctQ = rng.pick(pctQChoices);
      const priceRises = rng.bool();
      const baseP = pctP === 25 ? rng.int(2, 14) * 4 : pctP === 20 ? rng.int(2, 12) * 5 : rng.int(2, 10) * 10;
      const p1 = baseP;
      const p2 = priceRises ? clean(p1 * (1 + pctP / 100)) : clean(p1 * (1 - pctP / 100));
      const q1 = rng.int(4, 24) * 20;
      const q2 = priceRises ? clean(q1 * (1 - pctQ / 100)) : clean(q1 * (1 + pctQ / 100));
      const ped = roundTo(pctQ / pctP, 2);

      if (tier === 2) {
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, ped, -ped, "Always take the absolute value for PED.");
        addTrapIfDistinct(traps, ped, roundTo(pctP / pctQ, 2), "Inverted formula! Divide |%ΔQ_d| by |%ΔP|.");

        return {
          prompt: `A retailer changes the price of ${good} from **$${p1}** to **$${p2}**, and weekly quantity demanded moves from **${q1}** to **${q2}** units. Calculate the PED (to 2 decimal places).`,
          answer: { type: "number", value: ped, tolerance: 0.01, display: num(ped) },
          traps,
          hint: "Compute %ΔP = ((P₂ − P₁) / P₁) × 100 and %ΔQ_d = ((Q₂ − Q₁) / Q₁) × 100, then take |%ΔQ_d / %ΔP|.",
          solution: [
            `{{%ΔP = ((${p2} - ${p1}) / ${p1}) * 100 = ${priceRises ? "+" : "-"}${pctP}%}}.`,
            `{{%ΔQ_d = ((${q2} - ${q1}) / ${q1}) * 100 = ${priceRises ? "-" : "+"}${pctQ}%}}.`,
            `{{PED = |${pctQ}% / ${pctP}%| = ${num(ped)}}}.`,
          ],
        };
      }

      // Tier 3: Change in Total Revenue (ΔTR = TR2 - TR1)
      const tr1 = clean(p1 * q1);
      const tr2 = clean(p2 * q2);
      const dTr = clean(tr2 - tr1);
      const traps: Trap[] = [];
      addTrapIfDistinct(traps, dTr, tr2, `$${tr2} is the NEW Total Revenue — subtract initial TR ($${tr1}) to find the change ΔTR.`);
      addTrapIfDistinct(traps, dTr, -dTr, "Check the sign of ΔTR = TR₂ − TR₁ (positive if revenue rose, negative if revenue fell).");

      return {
        prompt: `A firm changes the price of ${good} from **$${p1}** (selling **${q1}** units) to **$${p2}** (selling **${q2}** units). Calculate the **change in Total Revenue** (in $, include a minus sign if revenue falls).`,
        answer: { type: "number", value: dTr, display: dTr < 0 ? `−$${Math.abs(dTr)}` : `$${dTr}` },
        traps,
        hint: "Compute TR₁ = P₁ × Q₁ and TR₂ = P₂ × Q₂, then calculate ΔTR = TR₂ − TR₁.",
        solution: [
          `Initial Total Revenue: {{TR_1 = ${p1} * ${q1} = $${tr1}}}.`,
          `New Total Revenue: {{TR_2 = ${p2} * ${q2} = $${tr2}}}.`,
          `Change in Total Revenue: {{ΔTR = ${tr2} - ${tr1} = ${dTr < 0 ? `−$${Math.abs(dTr)}` : `+$${dTr}`}}} (PED = ${num(ped)}).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: YED & GOOD CLASSIFICATION (SL, Level 1)
  // ===========================================================================
  {
    id: `${TOPIC}.yed-classification`,
    topicId: TOPIC,
    title: "YED Calculation & Sign Mastery",
    level: 1,
    ibLevel: "SL",
    guideRef: "elasticities-ped-yed-pes",
    generate(rng, tier) {
      const kind = rng.pick(["inferior", "necessity", "luxury"] as const);
      const good =
        kind === "inferior"
          ? rng.pick(YED_GOODS_INFERIOR)
          : kind === "necessity"
            ? rng.pick(YED_GOODS_NECESSITY)
            : rng.pick(YED_GOODS_LUXURY);

      if (tier === 1) {
        const pctYMag = rng.pick([5, 8, 10, 20, 25]);
        const incRises = rng.bool();
        const pctY = incRises ? pctYMag : -pctYMag;
        const yedPool =
          kind === "inferior"
            ? [-2.0, -1.5, -1.2, -0.8, -0.6, -0.5, -0.4]
            : kind === "necessity"
              ? [0.2, 0.4, 0.5, 0.6, 0.8]
              : [1.2, 1.5, 1.6, 2.0, 2.4, 2.5];
        const yed = rng.pick(yedPool);
        const pctQ = clean(yed * pctY);
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, yed, -yed, "Keep the exact sign on YED! Negative = inferior good; positive = normal good.");
        addTrapIfDistinct(traps, yed, roundTo(pctY / pctQ, 2), "Put %ΔQ_d in the numerator and %ΔY in the denominator.");

        return {
          prompt: `Average consumer income ${incRises ? "rises" : "falls"} by **${pctYMag}%**, and quantity demanded of ${good} ${pctQ >= 0 ? "rises" : "falls"} by **${Math.abs(pctQ)}%**. Calculate the Income Elasticity of Demand (YED), keeping the exact sign.`,
          answer: { type: "number", value: yed, tolerance: 0.01, display: num(yed) },
          traps,
          hint: "Use YED = %ΔQ_d / %ΔY and NEVER drop the sign.",
          solution: [
            `{{YED = (${pctQ >= 0 ? "+" : ""}${pctQ}%) / (${pctY >= 0 ? "+" : ""}${pctY}%) = ${num(yed)}}}.`,
            kind === "inferior"
              ? "Because YED < 0, this is an **inferior good**."
              : kind === "necessity"
                ? "Because 0 < YED < 1, this is a **normal necessity**."
                : "Because YED > 1, this is a **normal luxury (income-elastic) good**.",
          ],
        };
      }

      if (tier === 2) {
        const pctYMag = rng.pick([10, 20, 25]);
        const incRises = rng.bool();
        const pctY = incRises ? pctYMag : -pctYMag;
        const yedPool =
          kind === "inferior"
            ? [-2.0, -1.5, -1.2, -0.8, -0.6, -0.5, -0.4]
            : kind === "necessity"
              ? [0.2, 0.4, 0.5, 0.6, 0.8]
              : [1.2, 1.4, 1.5, 1.8, 2.0, 2.4];
        const yed = rng.pick(yedPool);
        const pctQ = clean(yed * pctY);
        const y1 = rng.int(3, 9) * 10000;
        const y2 = clean(y1 * (1 + pctY / 100));
        const q1 = rng.int(4, 20) * 25;
        const q2 = clean(q1 * (1 + pctQ / 100));
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, yed, -yed, "Never drop the plus/minus sign on YED — it distinguishes inferior from normal goods!");
        addTrapIfDistinct(traps, yed, roundTo(pctY / pctQ, 2), "Divide %ΔQ_d by %ΔY, not %ΔY by %ΔQ_d.");

        return {
          prompt: `Average annual household income changes from **$${y1.toLocaleString("en-US")}** to **$${y2.toLocaleString("en-US")}**, and monthly sales of ${good} move from **${q1}** to **${q2}** units. Calculate the YED (include the sign, to 2 decimal places).`,
          answer: { type: "number", value: yed, tolerance: 0.01, display: num(yed) },
          traps,
          hint: "Calculate %ΔY and %ΔQ_d using the initial values, then compute %ΔQ_d / %ΔY keeping the sign.",
          solution: [
            `{{%ΔY = ((${y2} - ${y1}) / ${y1}) * 100 = ${pctY >= 0 ? "+" : ""}${pctY}%}}.`,
            `{{%ΔQ_d = ((${q2} - ${q1}) / ${q1}) * 100 = ${pctQ >= 0 ? "+" : ""}${pctQ}%}}.`,
            `{{YED = (${pctQ}%) / (${pctY}%) = ${num(yed)}}} (${kind === "inferior" ? "inferior good" : kind === "necessity" ? "normal necessity" : "normal luxury"}).`,
          ],
        };
      }

      // Tier 3: Given YED, %ΔY, and Q1, calculate new quantity Q2
      const pctYMag = rng.pick([5, 10, 15, 20]);
      const incRises = rng.bool();
      const pctY = incRises ? pctYMag : -pctYMag;
      const yedPool =
        kind === "inferior"
          ? [-1.6, -1.2, -0.8, -0.6, -0.4]
          : kind === "necessity"
            ? [0.2, 0.4, 0.6, 0.8]
            : [1.2, 1.4, 1.6, 1.8, 2.0, 2.2];
      const yed = rng.pick(yedPool);
      const pctQ = clean(yed * pctY);
      const q1 = rng.int(5, 25) * 100;
      const q2 = clean(q1 * (1 + pctQ / 100));
      const traps: Trap[] = [];
      addTrapIfDistinct(traps, q2, clean(q1 * (1 - pctQ / 100)), "Check the direction of change using the sign of YED × %ΔY!");
      addTrapIfDistinct(traps, q2, clean(q2 - q1), "That is the change in quantity ΔQ — add it to Q₁ to get the new quantity Q₂.");

      return {
        prompt: `A brand sells **${q1}** units per month of ${good}, whose **YED = ${yed > 0 ? `+${num(yed)}` : num(yed)}**. If household income ${incRises ? "rises" : "falls"} by **${pctYMag}%** (price constant), calculate the **new** monthly quantity demanded.`,
        answer: { type: "number", value: q2, display: `${q2} units` },
        traps,
        hint: "Find %ΔQ_d = YED × %ΔY (watching signs!), then apply that percentage change to Q₁.",
        solution: [
          `{{%ΔQ_d = YED * %ΔY = (${num(yed)}) * (${pctY >= 0 ? "+" : ""}${pctY}%) = ${pctQ >= 0 ? "+" : ""}${pctQ}%}}.`,
          `New quantity: {{Q_2 = ${q1} * (1 ${pctQ >= 0 ? "+" : "-"} ${Math.abs(pctQ) / 100}) = ${q2}}} units.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: PES CALCULATION (SL, Level 2)
  // ===========================================================================
  {
    id: `${TOPIC}.pes-calculation`,
    topicId: TOPIC,
    title: "Price Elasticity of Supply (PES)",
    level: 2,
    ibLevel: "SL",
    guideRef: "elasticities-ped-yed-pes",
    generate(rng, tier) {
      const good = rng.pick(GOODS);

      if (tier === 1) {
        const pairs: Array<[number, number]> = [
          [10, 3], [10, 4], [10, 6], [10, 8], [10, 12], [10, 15], [10, 18], [10, 22], [10, 25],
          [20, 4], [20, 6], [20, 10], [20, 14], [20, 16], [20, 24], [20, 30], [20, 36],
          [25, 5], [25, 10], [25, 15], [25, 20], [25, 30], [25, 35], [25, 45],
          [8, 4], [8, 6], [8, 12], [8, 16], [8, 20],
        ];
        const [pctP, pctQ] = rng.pick(pairs);
        const rises = rng.bool();
        const pes = roundTo(pctQ / pctP, 2);
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, pes, roundTo(pctP / pctQ, 2), "Put %ΔQ_s in the numerator and %ΔP in the denominator.");

        return {
          prompt: `When the market price of ${good} ${rises ? "increases" : "decreases"} by **${pctP}%**, quantity supplied ${rises ? "increases" : "decreases"} by **${pctQ}%**. Calculate the Price Elasticity of Supply (PES) to 2 decimal places.`,
          answer: { type: "number", value: pes, tolerance: 0.01, display: num(pes) },
          traps,
          hint: "Use PES = %ΔQ_s / %ΔP (always positive because price and quantity supplied move in the same direction).",
          solution: [
            `{{PES = (%ΔQ_s) / (%ΔP) = ${pctQ}% / ${pctP}% = ${num(pes)}}}.`,
            pes > 1 ? "Since PES > 1, supply is **price elastic**." : pes < 1 ? "Since 0 < PES < 1, supply is **price inelastic**." : "Since PES = 1, supply is **unitary elastic**.",
          ],
        };
      }

      const pctP = rng.pick([10, 20, 25]);
      const rises = rng.bool();
      const p1 = pctP === 25 ? rng.int(2, 15) * 4 : pctP === 20 ? rng.int(2, 14) * 5 : rng.int(2, 12) * 10;
      const p2 = rises ? clean(p1 * (1 + pctP / 100)) : clean(p1 * (1 - pctP / 100));
      const pesPool = [0.2, 0.4, 0.5, 0.6, 0.8, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0, 2.4];
      const pes = rng.pick(pesPool);
      const pctQ = clean(pes * pctP);
      const q1 = rng.int(4, 24) * 50;
      const q2 = rises ? clean(q1 * (1 + pctQ / 100)) : clean(q1 * (1 - pctQ / 100));

      if (tier === 2) {
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, pes, roundTo(pctP / pctQ, 2), "Inverted formula! Divide %ΔQ_s by %ΔP.");

        return {
          prompt: `The price of ${good} moves from **$${p1}** to **$${p2}**, causing monthly supply to change from **${q1}** to **${q2}** units. Calculate the PES (to 2 decimal places).`,
          answer: { type: "number", value: pes, tolerance: 0.01, display: num(pes) },
          traps,
          hint: "Compute %ΔP and %ΔQ_s using initial values P₁ and Q₁, then divide %ΔQ_s by %ΔP.",
          solution: [
            `{{%ΔP = ((${p2} - ${p1}) / ${p1}) * 100 = ${rises ? "+" : "-"}${pctP}%}}.`,
            `{{%ΔQ_s = ((${q2} - ${q1}) / ${q1}) * 100 = ${rises ? "+" : "-"}${pctQ}%}}.`,
            `{{PES = ${pctQ}% / ${pctP}% = ${num(pes)}}}.`,
          ],
        };
      }

      // Tier 3: Given PES, P1, P2, Q1 -> find Q2
      const traps: Trap[] = [];
      addTrapIfDistinct(traps, q2, rises ? clean(q1 * (1 - pctQ / 100)) : clean(q1 * (1 + pctQ / 100)), "Remember the Law of Supply: price and quantity supplied move in the SAME direction!");
      addTrapIfDistinct(traps, q2, clean(Math.abs(q2 - q1)), "That is the change in quantity ΔQ_s — add/subtract it from Q₁ to obtain the new quantity supplied Q₂.");

      return {
        prompt: `Producers of ${good} currently supply **${q1}** units at **$${p1}** per unit, with **PES = ${num(pes)}**. If the market price moves to **$${p2}**, calculate the **new** quantity supplied.`,
        answer: { type: "number", value: q2, display: `${q2} units` },
        traps,
        hint: "Find %ΔP first, multiply by PES to get %ΔQ_s, then adjust Q₁ in the same direction as the price change.",
        solution: [
          `{{%ΔP = ((${p2} - ${p1}) / ${p1}) * 100 = ${rises ? "+" : "-"}${pctP}%}}.`,
          `{{%ΔQ_s = PES * %ΔP = ${num(pes)} * (${rises ? "+" : "-"}${pctP}%) = ${rises ? "+" : "-"}${pctQ}%}}.`,
          `New quantity supplied: {{Q_2 = ${q1} * (1 ${rises ? "+" : "-"} ${pctQ / 100}) = ${q2}}} units.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: LINEAR EQUILIBRIUM (P_e, Q_e) & CS / PS [HL] (Level 2)
  // ===========================================================================
  {
    id: `${TOPIC}.linear-equilibrium-surplus`,
    topicId: TOPIC,
    title: "Linear Equilibrium (P_e, Q_e) & Social Surplus [HL]",
    level: 2,
    ibLevel: "HL",
    guideRef: "demand-supply-equilibrium",
    generate(rng, tier) {
      const good = rng.pick(GOODS);
      const maxSlope = tier === 1 ? 4 : tier === 2 ? 5 : 6;
      const b = rng.int(1, maxSlope);
      const d = rng.int(1, maxSlope);
      // Ensure Q_e is an even multiple of lcm(b, d) so P_max, P_min, CS, PS are ALL exact integers!
      const L = lcm(b, d);
      const stepQ = L % 2 === 0 ? L : L * 2;
      const mult = rng.int(2, Math.max(3, Math.floor(80 / stepQ) + 2));
      const qe = stepQ * mult;
      const deltaPd = qe / b;
      const deltaPs = qe / d;
      const pMin = rng.int(2, 12);
      const pe = pMin + deltaPs;
      const pMax = pe + deltaPd;
      const a = qe + b * pe;
      const c = qe - d * pe; // equals -d * pMin < 0
      const cs = (qe * (pMax - pe)) / 2;
      const ps = (qe * (pe - pMin)) / 2;
      const ts = cs + ps;

      const eqText = `{{Q_d = ${a} - ${b === 1 ? "" : b}P}} and {{Q_s = ${signedConst(c)}${d === 1 ? "" : d}P}}`;

      if (tier === 1) {
        const askP = rng.bool();
        if (askP) {
          const traps: Trap[] = [];
          addTrapIfDistinct(traps, pe, qe, `${qe} is the equilibrium quantity Q_e — the question asks for equilibrium price P_e.`);
          addTrapIfDistinct(traps, pe, pMax, `$${pMax} is the demand price-intercept (where Q_d = 0), not market equilibrium.`);
          return {
            prompt: `[HL] The market for ${good} is given by ${eqText} (price in $, quantity in single units). Calculate the equilibrium price **P_e** (in $).`,
            answer: { type: "number", value: pe, display: `$${pe}` },
            traps,
            hint: "Set Q_d = Q_s and solve the linear equation for P.",
            solution: [
              `Set {{Q_d = Q_s}}: {{${a} - ${b === 1 ? "" : b}P = ${signedConst(c)}${d === 1 ? "" : d}P}}.`,
              `Collect terms: {{${a - c} = ${b + d}P}}, so {{P_e = $${pe}}} (and {{Q_e = ${qe}}} units).`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, qe, pe, `$${pe} is the equilibrium price P_e — substitute it back into Q_d or Q_s to get Q_e.`);
        return {
          prompt: `[HL] The market for ${good} is modelled by ${eqText} (price in $, quantity in single units). Calculate the equilibrium quantity **Q_e**.`,
          answer: { type: "number", value: qe, display: `${qe} units` },
          traps,
          hint: "First solve Q_d = Q_s for P_e, then substitute P_e into either equation to get Q_e.",
          solution: [
            `Set {{${a} - ${b === 1 ? "" : b}P = ${signedConst(c)}${d === 1 ? "" : d}P}} → {{${a - c} = ${b + d}P}} → {{P_e = $${pe}}}.`,
            `Substitute into demand: {{Q_e = ${a} - ${b}(${pe}) = ${qe}}} units.`,
          ],
        };
      }

      if (tier === 2) {
        const askCS = rng.bool();
        if (askCS) {
          const traps: Trap[] = [];
          addTrapIfDistinct(traps, cs, cs * 2, "Don't forget the ½ in the triangle area formula: CS = ½ × Q_e × (P_max − P_e).");
          addTrapIfDistinct(traps, cs, ps, `$${ps} is Producer Surplus — CS uses the demand price-intercept P_max = $${pMax}.`);
          return {
            prompt: `[HL] For the market for ${good} with ${eqText} (price in $, quantity in single units), calculate **Consumer Surplus (CS)** at equilibrium (in $).`,
            answer: { type: "number", value: cs, display: `$${cs}` },
            traps,
            hint: "Solve Q_d = Q_s for (P_e, Q_e), set Q_d = 0 to find P_max, then compute ½ × Q_e × (P_max − P_e).",
            solution: [
              `Equilibrium: {{${a - c} = ${b + d}P}} → {{P_e = $${pe}}}, {{Q_e = ${qe}}}.`,
              `Demand price-intercept ({{Q_d = 0}}): {{P_max = ${a} / ${b} = $${pMax}}}.`,
              `{{CS = 1/2 * ${qe} * (${pMax} - ${pe}) = $${cs}}}.`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, ps, ps * 2, "Remember the ½ factor in the triangle area formula: PS = ½ × Q_e × (P_e − P_min).");
        addTrapIfDistinct(traps, ps, (qe * pe) / 2, `Supply does not start at P = 0! Set Q_s = 0 to find P_min = $${pMin}.`);
        return {
          prompt: `[HL] For the market for ${good} with ${eqText} (price in $, quantity in single units), calculate **Producer Surplus (PS)** at equilibrium (in $).`,
          answer: { type: "number", value: ps, display: `$${ps}` },
          traps,
          hint: "Solve Q_d = Q_s for (P_e, Q_e), set Q_s = 0 to find P_min, then compute ½ × Q_e × (P_e − P_min).",
          solution: [
            `Equilibrium: {{${a - c} = ${b + d}P}} → {{P_e = $${pe}}}, {{Q_e = ${qe}}}.`,
            `Supply price-intercept ({{Q_s = 0}}): {{P_min = ${-c} / ${d} = $${pMin}}}.`,
            `{{PS = 1/2 * ${qe} * (${pe} - ${pMin}) = $${ps}}}.`,
          ],
        };
      }

      // Tier 3: Total Social Surplus (CS + PS)
      const traps: Trap[] = [];
      addTrapIfDistinct(traps, ts, cs, `$${cs} is only Consumer Surplus — add Producer Surplus ($${ps}) for Total Social Surplus.`);
      addTrapIfDistinct(traps, ts, ps, `$${ps} is only Producer Surplus — add Consumer Surplus ($${cs}) for Total Social Surplus.`);
      addTrapIfDistinct(traps, ts, ts * 2, "Don't forget the ½ factor for triangle areas: TS = ½ × Q_e × (P_max − P_min).");

      return {
        prompt: `[HL] In the competitive market for ${good}, ${eqText} (price in $, quantity in single units). Calculate **Total Social Surplus (CS + PS)** at equilibrium (in $).`,
        answer: { type: "number", value: ts, display: `$${ts}` },
        traps,
        hint: "Find (P_e, Q_e), P_max (at Q_d = 0), and P_min (at Q_s = 0), then compute CS + PS = ½ × Q_e × (P_max − P_min).",
        solution: [
          `Equilibrium: {{P_e = $${pe}}}, {{Q_e = ${qe}}}.`,
          `Intercepts: {{P_max = $${pMax}}} and {{P_min = $${pMin}}}.`,
          `{{CS = 1/2 * ${qe} * (${pMax} - ${pe}) = $${cs}}}; {{PS = 1/2 * ${qe} * (${pe} - ${pMin}) = $${ps}}}.`,
          `Total Social Surplus = {{${cs} + ${ps} = $${ts}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: SPECIFIC INDIRECT TAX INCIDENCE, REVENUE & DWL [HL] (Level 3)
  // ===========================================================================
  {
    id: `${TOPIC}.indirect-tax-welfare-hl`,
    topicId: TOPIC,
    title: "Specific Indirect Tax: Incidence, Revenue & DWL [HL]",
    level: 3,
    ibLevel: "HL",
    guideRef: "government-intervention-welfare",
    generate(rng, tier) {
      const good = rng.pick(GOODS);
      const b = rng.int(1, tier === 1 ? 4 : tier === 2 ? 5 : 6);
      const d = rng.int(1, tier === 1 ? 4 : tier === 2 ? 5 : 6);
      const k = tier === 1 ? rng.int(1, 2) : rng.int(1, 3);
      const t = k * (b + d);
      const dPc = k * d;
      const dPp = k * b;
      const dQ = k * b * d;
      const qt = rng.int(20, 95);
      const qe = qt + dQ;
      const pp = rng.int(8, 28);
      const pe = pp + dPp;
      const pc = pe + dPc;
      const a = qe + b * pe;
      const c = qe - d * pe;
      const cTax = c - d * t;
      const revenue = t * qt;
      const cBurden = dPc * qt;
      const pBurden = dPp * qt;
      const dwl = (t * dQ) / 2;

      const eqText = `{{Q_d = ${a} - ${b === 1 ? "" : b}P}} and {{Q_s = ${signedConst(c)}${d === 1 ? "" : d}P}}`;

      if (tier === 1) {
        const askPc = rng.bool();
        if (askPc) {
          const traps: Trap[] = [];
          addTrapIfDistinct(traps, pc, pe + t, "Consumers do not pay 100% of the tax unless demand is perfectly inelastic (PED = 0).");
          addTrapIfDistinct(traps, pc, pp, `$${pp} is the net price kept by producers (P_p = P_c − t), not consumer price P_c.`);
          return {
            prompt: `[HL] The market for ${good} has ${eqText} (price in $, quantity in single units). A **$${t}** specific indirect tax is imposed on producers. Calculate the new consumer price **P_c** (in $).`,
            answer: { type: "number", value: pc, display: `$${pc}` },
            traps,
            hint: `Substitute (P − ${t}) for P in Q_s, then solve Q_d = Q_s' for P_c.`,
            solution: [
              `Post-tax supply: {{Q_s' = ${signedConst(c)}${d === 1 ? "" : d}(P - ${t}) = ${signedConst(cTax)}${d === 1 ? "" : d}P}}.`,
              `Set {{Q_d = Q_s'}}: {{${a} - ${b === 1 ? "" : b}P = ${signedConst(cTax)}${d === 1 ? "" : d}P}} → {{${a - cTax} = ${b + d}P}}.`,
              `Consumer price {{P_c = $${pc}}} (up $${dPc} from pre-tax {{P_e = $${pe}}}; producer net price {{P_p = $${pp}}}).`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, pp, pc, `$${pc} is the consumer price P_c — subtract the $${t} tax to find producer net price P_p.`);
        addTrapIfDistinct(traps, pp, pe - t, "Producers rarely absorb 100% of a specific tax — find P_c first, then compute P_p = P_c − t.");
        return {
          prompt: `[HL] The market for ${good} has ${eqText} (price in $, quantity in single units). A **$${t}** specific indirect tax is imposed on producers. Calculate the net price kept by producers **P_p** (in $).`,
          answer: { type: "number", value: pp, display: `$${pp}` },
          traps,
          hint: `First find post-tax consumer price P_c using Q_s' = c + d(P − ${t}), then subtract $${t}.`,
          solution: [
            `Post-tax supply: {{Q_s' = ${signedConst(cTax)}${d === 1 ? "" : d}P}}.`,
            `Solve {{Q_d = Q_s'}}: {{${a - cTax} = ${b + d}P}} → {{P_c = $${pc}}}.`,
            `Producer net price: {{P_p = P_c - t = ${pc} - ${t} = $${pp}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const mode = rng.pick(["revenue", "consumer", "producer"] as const);
        if (mode === "revenue") {
          const traps: Trap[] = [];
          addTrapIfDistinct(traps, revenue, t * qe, "Tax revenue is collected on post-tax quantity Q_t, not pre-tax Q_e!");
          addTrapIfDistinct(traps, revenue, cBurden, `$${cBurden} is only the consumer tax burden — add producer burden ($${pBurden}) for total government revenue.`);
          return {
            prompt: `[HL] In the market for ${good} (${eqText}), a **$${t}** specific indirect tax is levied on producers. Calculate total **government tax revenue** (in $).`,
            answer: { type: "number", value: revenue, display: `$${revenue}` },
            traps,
            hint: `Find post-tax equilibrium (P_c, Q_t) via Q_s' = c + d(P − ${t}), then compute Revenue = ${t} × Q_t.`,
            solution: [
              `Post-tax supply: {{Q_s' = ${signedConst(cTax)}${d === 1 ? "" : d}P}} → {{P_c = $${pc}}}, {{Q_t = ${qt}}} units.`,
              `Government tax revenue = {{t * Q_t = ${t} * ${qt} = $${revenue}}}.`,
            ],
          };
        }
        if (mode === "consumer") {
          const traps: Trap[] = [];
          addTrapIfDistinct(traps, cBurden, revenue, `$${revenue} is TOTAL government revenue — Consumer Tax Burden is only (P_c − P_e) × Q_t.`);
          addTrapIfDistinct(traps, cBurden, pBurden, `$${pBurden} is the producer burden — use (P_c − P_e) × Q_t for consumers.`);
          addTrapIfDistinct(traps, cBurden, dPc * qe, "Multiply by post-tax quantity Q_t, not pre-tax Q_e.");
          return {
            prompt: `[HL] In the market for ${good} (${eqText}), a **$${t}** specific indirect tax is levied on producers. Calculate the total **Consumer Tax Burden** (in $).`,
            answer: { type: "number", value: cBurden, display: `$${cBurden}` },
            traps,
            hint: "Find pre-tax P_e and post-tax (P_c, Q_t), then compute (P_c − P_e) × Q_t.",
            solution: [
              `Pre-tax: {{P_e = $${pe}}}, {{Q_e = ${qe}}}.`,
              `Post-tax: {{Q_s' = ${signedConst(cTax)}${d === 1 ? "" : d}P}} → {{P_c = $${pc}}}, {{Q_t = ${qt}}}.`,
              `Consumer Tax Burden = {{(P_c - P_e) * Q_t = (${pc} - ${pe}) * ${qt} = $${cBurden}}}.`,
            ],
          };
        }
        const traps: Trap[] = [];
        addTrapIfDistinct(traps, pBurden, revenue, `$${revenue} is TOTAL government revenue — Producer Tax Burden is (P_e − P_p) × Q_t.`);
        addTrapIfDistinct(traps, pBurden, cBurden, `$${cBurden} is the consumer burden — use (P_e − P_p) × Q_t for producers.`);
        return {
          prompt: `[HL] In the market for ${good} (${eqText}), a **$${t}** specific indirect tax is levied on producers. Calculate the total **Producer Tax Burden** (in $).`,
          answer: { type: "number", value: pBurden, display: `$${pBurden}` },
          traps,
          hint: "Find pre-tax P_e, post-tax P_c and P_p = P_c − t, and Q_t, then compute (P_e − P_p) × Q_t.",
          solution: [
            `Pre-tax: {{P_e = $${pe}}}, {{Q_e = ${qe}}}.`,
            `Post-tax: {{P_c = $${pc}}}, {{P_p = ${pc} - ${t} = $${pp}}}, {{Q_t = ${qt}}}.`,
            `Producer Tax Burden = {{(P_e - P_p) * Q_t = (${pe} - ${pp}) * ${qt} = $${pBurden}}}.`,
          ],
        };
      }

      // Tier 3: Deadweight Welfare Loss (DWL)
      const traps: Trap[] = [];
      addTrapIfDistinct(traps, dwl, dwl * 2, "Don't forget the ½ factor in the DWL triangle area: ½ × t × (Q_e − Q_t).");
      addTrapIfDistinct(traps, dwl, revenue, `$${revenue} is government tax revenue (t × Q_t), not the Deadweight Welfare Loss triangle.`);

      return {
        prompt: `[HL] The competitive market for ${good} is given by ${eqText} (price in $, quantity in single units). A **$${t}** specific indirect tax is levied on producers. Assuming no externalities, calculate the **Deadweight Welfare Loss (DWL)** (in $).`,
        answer: { type: "number", value: dwl, display: `$${dwl}` },
        traps,
        hint: "Find pre-tax Q_e and post-tax Q_t, then compute the triangle area DWL = ½ × t × (Q_e − Q_t).",
        solution: [
          `Pre-tax equilibrium: {{P_e = $${pe}}}, {{Q_e = ${qe}}} units.`,
          `Post-tax supply: {{Q_s' = ${signedConst(cTax)}${d === 1 ? "" : d}P}} → {{P_c = $${pc}}}, {{Q_t = ${qt}}} units.`,
          `Quantity contraction: {{Q_e - Q_t = ${qe} - ${qt} = ${dQ}}} units.`,
          `{{DWL = 1/2 * t * (Q_e - Q_t) = 1/2 * ${t} * ${dQ} = $${dwl}}}.`,
        ],
      };
    },
  },
];
