import { clean, num } from "./helpers.ts";
import type { Drill, Rng } from "./types.ts";

const COUNTRY_PAIRS: readonly [string, string][] = [
  ["Alpha", "Beta"],
  ["Vietnam", "Japan"],
  ["Brazil", "Germany"],
  ["Chile", "South Korea"],
  ["Kenya", "Switzerland"],
  ["Thailand", "Canada"],
  ["Peru", "Sweden"],
  ["Ghana", "Singapore"],
  ["Morocco", "Netherlands"],
  ["Mexico", "Taiwan"],
];

const GOOD_PAIRS: readonly [string, string][] = [
  ["coffee", "laptops"],
  ["wheat", "tractors"],
  ["rice", "drones"],
  ["textiles", "microchips"],
  ["sugar", "automobiles"],
  ["cocoa", "robotics"],
  ["timber", "solar panels"],
  ["cotton", "bicycles"],
];

const MARKET_GOODS = [
  "steel",
  "rice",
  "sugar",
  "cotton",
  "solar panels",
  "timber",
  "tyres",
  "wheat",
  "footwear",
  "aluminium",
] as const;

const BLOC_NAMES = [
  "the Pacific Rim Pact",
  "the Coral Sea Alliance",
  "the Alpine Cooperation Group",
  "the Caspian Trade Pact",
  "the Baltic Economic Group",
  "the Zambezi Trade Accord",
  "the Tasman Economic Pact",
  "the Adriatic Trade Group",
  "the Meridian Economic Alliance",
  "the Savannah Trade Compact",
  "the Aegean Economic Accord",
  "the Boreal Trade Union",
] as const;

const BLOC_GOODS = [
  "electronics and textiles",
  "machinery and agricultural goods",
  "automobiles and dairy products",
  "pharmaceuticals and timber",
  "processed food and industrial parts",
] as const;

export const drills: Drill[] = [
  // =========================================================================
  // 1. [HL] Opportunity Cost, Comparative Advantage & Terms-of-Trade Bounds
  // =========================================================================
  {
    id: "4a-trade-integration.comparative-advantage-oc",
    topicId: "4a-trade-integration",
    title: "Comparative Advantage, Opportunity Cost & Terms of Trade",
    level: 2,
    ibLevel: "HL",
    guideRef: "benefits-trade-comparative-hl",
    generate(rng: Rng, tier) {
      const [cA, cB] = rng.pick(COUNTRY_PAIRS);
      const [gY, gX] = rng.pick(GOOD_PAIRS);

      if (tier === 1) {
        const mult = rng.pick([0.5, 1.5, 2, 2.5, 3, 4, 5]);
        const maxX = rng.pick([10, 12, 16, 20, 24, 30, 40, 50]);
        const maxY = clean(maxX * mult);
        const oc = clean(maxY / maxX);
        const recip = clean(maxX / maxY);
        const traps =
          Math.abs(recip - oc) > 1e-6 && Number.isInteger(recip * 100)
            ? [
                {
                  spec: { type: "number" as const, value: recip },
                  feedback: `You divided ${gX} by ${gY} (that is the OC of 1 unit of ${gY}). Use 'Other Over This': ${maxY} ÷ ${maxX}.`,
                },
              ]
            : undefined;
        return {
          prompt: `Using all of its resources, **${cA}** can produce a maximum of **${maxY} units of ${gY}** OR **${maxX} units of ${gX}**. Calculate ${cA}'s opportunity cost of producing **1 unit of ${gX}** (in units of ${gY}).`,
          answer: { type: "number", value: oc, allowFraction: true },
          traps,
          hint: `Use 'Other Over This': divide maximum ${gY} (${maxY}) by maximum ${gX} (${maxX}).`,
          solution: [
            `Opportunity cost of 1 unit of ${gX} = {{${maxY}/${maxX}}} = **${num(oc)} units of ${gY}**.`,
          ],
        };
      }

      // Generate strictly distinct opportunity costs for Country A & Country B.
      const ocChoices = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];
      const ocA = rng.pick(ocChoices);
      const ocB = rng.pick(ocChoices.filter((v) => v !== ocA));
      const aX = rng.pick([10, 20, 30, 40, 50, 60]);
      const bX = rng.pick([10, 20, 30, 40, 50, 60]);
      const aY = clean(aX * ocA);
      const bY = clean(bX * ocB);

      if (tier === 2) {
        const askX = rng.bool();
        const targetGood = askX ? gX : gY;
        const winner = askX ? (ocA < ocB ? cA : cB) : ocA > ocB ? cA : cB;
        const loser = winner === cA ? cB : cA;
        return {
          prompt: `With identical resources, **${cA}** can produce max **${aY} ${gY}** or **${aX} ${gX}**, while **${cB}** can produce max **${bY} ${gY}** or **${bX} ${gX}**. Which country has a **comparative advantage in ${targetGood}**?`,
          answer: { type: "text", accept: [winner], display: winner },
          traps: [
            {
              spec: { type: "text", accept: [loser] },
              feedback: `Check opportunity costs carefully — ${loser} has the higher opportunity cost of producing ${targetGood}.`,
            },
          ],
          hint: `Compare opportunity costs of 1 unit of ${gX}: ${cA} gives up {{${aY}/${aX}}} = ${num(ocA)} ${gY}; ${cB} gives up {{${bY}/${bX}}} = ${num(ocB)} ${gY}.`,
          solution: [
            `${cA}'s OC of 1 unit of ${gX} = {{${aY}/${aX}}} = ${num(ocA)} ${gY}; ${cB}'s OC of 1 unit of ${gX} = {{${bY}/${bX}}} = ${num(ocB)} ${gY}.`,
            `${ocA < ocB ? cA : cB} has the lower OC in ${gX}, so ${ocA < ocB ? cB : cA} automatically has the lower OC in ${gY}.`,
            `Therefore, **${winner}** has a comparative advantage in **${targetGood}**.`,
          ],
        };
      }

      // Tier 3: Mutually beneficial Terms-of-Trade bounds [lowOC, highOC]
      const lo = Math.min(ocA, ocB);
      const hi = Math.max(ocA, ocB);
      return {
        prompt: `With identical resources, **${cA}** can produce max **${aY} ${gY}** or **${aX} ${gX}**, while **${cB}** can produce max **${bY} ${gY}** or **${bX} ${gX}**. Enter the **lower and upper boundary values** (in units of ${gY} per 1 unit of ${gX}) strictly between which mutually beneficial terms of trade must lie, separated by a comma.`,
        answer: { type: "list", values: [lo, hi], ordered: false, display: `${num(lo)}, ${num(hi)}` },
        hint: `Compute both nations' opportunity costs of 1 unit of ${gX} ('Max ${gY} ÷ Max ${gX}').`,
        solution: [
          `${cA}'s OC of 1 unit of ${gX} = {{${aY}/${aX}}} = ${num(ocA)} ${gY}.`,
          `${cB}'s OC of 1 unit of ${gX} = {{${bY}/${bX}}} = ${num(ocB)} ${gY}.`,
          `Mutually beneficial terms of trade lie strictly between **${num(lo)}** and **${num(hi)}** units of ${gY} per 1 unit of ${gX}.`,
        ],
      };
    },
  },

  // =========================================================================
  // 2. [HL] Tariff Government Revenue & Total Deadweight Welfare Loss
  // =========================================================================
  {
    id: "4a-trade-integration.tariff-revenue-dwl",
    topicId: "4a-trade-integration",
    title: "Tariff Revenue & Deadweight Welfare Loss",
    level: 2,
    ibLevel: "HL",
    guideRef: "trade-protection-diagrams",
    generate(rng: Rng, tier) {
      const good = rng.pick(MARKET_GOODS);

      if (tier === 1) {
        const pw = rng.pick([20, 25, 30, 40, 50, 60, 80]);
        const t = rng.pick([4, 6, 8, 10, 12, 15, 20]);
        const q1 = rng.int(10, 35);
        const q3 = q1 + rng.int(4, 18);
        const postM = rng.int(15, 55);
        const q4 = q3 + postM;
        const q2 = q4 + rng.int(4, 18);
        const rev = postM * t;
        const preRev = (q2 - q1) * t;
        return {
          prompt: `In a small country's **${good}** market (world price **$${pw}**), free-trade domestic supply is **${q1}k** and demand is **${q2}k** units. A **$${t} specific tariff** lifts domestic price to **$${pw + t}**, shifting domestic supply to **${q3}k** and demand to **${q4}k** units. Calculate **government tariff revenue** (in \`$ thousand\`).`,
          answer: { type: "number", value: rev },
          traps: [
            {
              spec: { type: "number", value: preRev },
              feedback: "Multiply the tariff by *post-tariff* imports (`Q_4 − Q_3`), not free-trade imports (`Q_2 − Q_1`).",
            },
          ],
          hint: `Find post-tariff imports (${q4} − ${q3} thousand units), then multiply by $${t}.`,
          solution: [
            `Post-tariff imports = ${q4} − ${q3} = ${postM} thousand units.`,
            `Government tariff revenue = ${postM} × $${t} = **$${rev} thousand**.`,
          ],
        };
      }

      if (tier === 2) {
        const pw = rng.pick([20, 30, 40, 50, 60, 80, 100]);
        const t = rng.pick([4, 6, 8, 10, 12, 16, 20]);
        const q1 = rng.int(10, 35);
        const dQs = rng.int(2, 12) * 2;
        const q3 = q1 + dQs;
        const postM = rng.int(15, 50);
        const q4 = q3 + postM;
        const dQd = rng.int(2, 12) * 2;
        const q2 = q4 + dQd;
        const prodDwl = clean(0.5 * dQs * t);
        const consDwl = clean(0.5 * dQd * t);
        const totalDwl = clean(prodDwl + consDwl);
        const noHalf = clean((dQs + dQd) * t);
        return {
          prompt: `In a small country's **${good}** market (world price **$${pw}**), a **$${t} specific tariff** raises domestic supply from **${q1}k to ${q3}k** units and reduces domestic demand from **${q2}k to ${q4}k** units. Calculate the **total deadweight welfare loss** (production + consumption triangles, in \`$ thousand\`).`,
          answer: { type: "number", value: totalDwl },
          traps: [
            {
              spec: { type: "number", value: noHalf },
              feedback: "Deadweight losses are triangles — remember to multiply by {{1/2}}!",
            },
            {
              spec: { type: "number", value: prodDwl },
              feedback: `$${prodDwl}k is only the production DWL triangle — add the consumption DWL triangle ($${consDwl}k).`,
            },
          ],
          hint: `Sum both triangles: {{1/2}}(${q3} − ${q1}) × ${t} + {{1/2}}(${q2} − ${q4}) × ${t}.`,
          solution: [
            `Production DWL = {{1/2}} × (${q3} − ${q1}) × $${t} = {{1/2}} × ${dQs} × $${t} = $${prodDwl} thousand.`,
            `Consumption DWL = {{1/2}} × (${q2} − ${q4}) × $${t} = {{1/2}} × ${dQd} × $${t} = $${consDwl} thousand.`,
            `Total deadweight welfare loss = $${prodDwl}k + $${consDwl}k = **$${totalDwl} thousand**.`,
          ],
        };
      }

      // Tier 3: Linear demand/supply equations → total DWL or CS loss
      const b = rng.pick([1, 2, 3, 4]);
      const d = rng.pick([1, 2, 3, 4]);
      const pw = rng.pick([10, 15, 20, 25, 30]);
      const t = rng.pick([4, 6, 8, 10]);
      const c = rng.pick([0, 10, 20, 30]);
      const q1 = c + d * pw;
      const q3 = c + d * (pw + t);
      const postM = rng.int(15, 45);
      const q4 = q3 + postM;
      const a = q4 + b * (pw + t);
      const q2 = a - b * pw;
      const askDwl = rng.bool();

      if (askDwl) {
        const prodDwl = clean(0.5 * (q3 - q1) * t);
        const consDwl = clean(0.5 * (q2 - q4) * t);
        const totalDwl = clean(prodDwl + consDwl);
        const noHalf = clean((q3 - q1 + q2 - q4) * t);
        return {
          prompt: `A small economy's **${good}** market has domestic demand \`Q_d = ${a} − ${b}P\` and domestic supply \`Q_s = ${c} + ${d}P\` (quantities in thousands, \`P\` in \`$\`). With world price **$${pw}**, the government levies a **$${t} specific tariff**. Calculate the **total deadweight welfare loss** (in \`$ thousand\`).`,
          answer: { type: "number", value: totalDwl },
          traps: [
            {
              spec: { type: "number", value: noHalf },
              feedback: "You omitted the {{1/2}} factor on the two deadweight welfare-loss triangles.",
            },
          ],
          hint: `Substitute P = ${pw} and P = ${pw + t} into both equations, then sum {{1/2}}(Q_3 − Q_1)t + {{1/2}}(Q_2 − Q_4)t.`,
          solution: [
            `At P = $${pw}: Q_1 = ${q1}k, Q_2 = ${q2}k. At P = $${pw + t}: Q_3 = ${q3}k, Q_4 = ${q4}k.`,
            `Production DWL = {{1/2}} × ${q3 - q1} × $${t} = $${prodDwl}k; Consumption DWL = {{1/2}} × ${q2 - q4} × $${t} = $${consDwl}k.`,
            `Total DWL = **$${totalDwl} thousand**.`,
          ],
        };
      }

      const rev = clean((q4 - q3) * t);
      const preRev = clean((q2 - q1) * t);
      return {
        prompt: `A small economy's **${good}** market has domestic demand \`Q_d = ${a} − ${b}P\` and domestic supply \`Q_s = ${c} + ${d}P\` (quantities in thousands, \`P\` in \`$\`). With world price **$${pw}**, the government levies a **$${t} specific tariff**. Calculate **government tariff revenue** (in \`$ thousand\`).`,
        answer: { type: "number", value: rev },
        traps: [
          {
            spec: { type: "number", value: preRev },
            feedback: "You used pre-tariff imports at P_w. Evaluate Q_d and Q_s at P_w + t first!",
          },
        ],
        hint: `Evaluate Q_d and Q_s at P = $${pw + t}, subtract to get post-tariff imports, and multiply by $${t}.`,
        solution: [
          `At P = $${pw + t}: Q_4 = ${a} − ${b}(${pw + t}) = ${q4}k; Q_3 = ${c} + ${d}(${pw + t}) = ${q3}k.`,
          `Post-tariff imports = ${q4} − ${q3} = ${q4 - q3} thousand units.`,
          `Tariff revenue = ${q4 - q3} × $${t} = **$${rev} thousand**.`,
        ],
      };
    },
  },

  // =========================================================================
  // 3. [HL] Domestic Production Subsidy Expenditure & Production DWL
  // =========================================================================
  {
    id: "4a-trade-integration.subsidy-cost-dwl",
    topicId: "4a-trade-integration",
    title: "Domestic Production Subsidy Cost & Production DWL",
    level: 2,
    ibLevel: "HL",
    guideRef: "trade-protection-diagrams",
    generate(rng: Rng, tier) {
      const good = rng.pick(MARKET_GOODS);
      const pw = rng.pick([25, 30, 40, 50, 60, 80, 100]);
      const s = rng.pick([4, 6, 8, 10, 12, 16, 20]);
      const q1 = rng.int(12, 45);
      const dQs = rng.int(2, 14) * 2;
      const q3 = q1 + dQs;
      const q2 = q3 + rng.int(15, 55);

      if (tier === 1) {
        const spend = clean(q3 * s);
        const trapQ1 = clean(q1 * s);
        const trapDelta = clean(dQs * s);
        const traps = [
          {
            spec: { type: "number" as const, value: trapQ1 },
            feedback: "The subsidy is paid on *post-subsidy* domestic output (`Q_3`), not pre-subsidy output (`Q_1`).",
          },
          ...(trapDelta !== trapQ1
            ? [
                {
                  spec: { type: "number" as const, value: trapDelta },
                  feedback: "The government pays the per-unit subsidy on ALL domestic units (`Q_3`), not only the extra output (`Q_3 − Q_1`).",
                },
              ]
            : []),
        ];
        return {
          prompt: `At world price **$${pw}**, domestic **${good}** output is **${q1}k** units and domestic consumption is **${q2}k** units. A **$${s} per-unit domestic production subsidy** expands domestic output to **${q3}k** units while consumer price stays **$${pw}**. Calculate total **government subsidy expenditure** (in \`$ thousand\`).`,
          answer: { type: "number", value: spend },
          traps,
          hint: `Multiply post-subsidy domestic output (Q_3 = ${q3}k) by the per-unit subsidy ($${s}).`,
          solution: [
            `Government subsidy expenditure = Q_3 × s = ${q3} × $${s} = **$${spend} thousand**.`,
          ],
        };
      }

      if (tier === 2) {
        const prodDwl = clean(0.5 * dQs * s);
        const noHalf = clean(dQs * s);
        const spend = clean(q3 * s);
        return {
          prompt: `At world price **$${pw}**, domestic **${good}** output is **${q1}k** units and domestic demand is **${q2}k** units. A **$${s} per-unit domestic production subsidy** raises domestic output to **${q3}k** units while domestic price stays **$${pw}**. Calculate the **total deadweight welfare loss** (in \`$ thousand\`).`,
          answer: { type: "number", value: prodDwl },
          traps: [
            {
              spec: { type: "number", value: noHalf },
              feedback: "Remember production DWL is a triangle — multiply by {{1/2}}!",
            },
            {
              spec: { type: "number", value: spend },
              feedback: `$${spend}k is total government expenditure (which mostly transfers to domestic producers as PS gain), not deadweight welfare loss.`,
            },
          ],
          hint: `Consumption stays at ${q2}k (zero consumption DWL!), so compute only {{1/2}} × (${q3} − ${q1}) × $${s}.`,
          solution: [
            `Consumer price remains $${pw}, so consumption DWL = $0.`,
            `Production DWL = {{1/2}} × (${q3} − ${q1}) × $${s} = {{1/2}} × ${dQs} × $${s} = **$${prodDwl} thousand**.`,
          ],
        };
      }

      // Tier 3: Domestic producer surplus gain under the subsidy (= Govt Spend − Production DWL)
      const psGain = clean(0.5 * (q1 + q3) * s);
      const spend = clean(q3 * s);
      const prodDwl = clean(0.5 * dQs * s);
      return {
        prompt: `At world price **$${pw}**, domestic **${good}** output is **${q1}k** units and domestic demand is **${q2}k** units. A **$${s} per-unit domestic production subsidy** raises domestic output to **${q3}k** units while consumer price stays **$${pw}**. Calculate the **gain in domestic producer surplus** (in \`$ thousand\`).`,
        answer: { type: "number", value: psGain },
        traps: [
          {
            spec: { type: "number", value: spend },
            feedback: `$${spend}k is total government subsidy expenditure — subtract the $${prodDwl}k production DWL triangle to get net producer surplus gain!`,
          },
        ],
        hint: `Domestic producer surplus gain is the trapezoid {{1/2}}(Q_1 + Q_3) × s — equivalently, Government Expenditure minus Production DWL.`,
        solution: [
          `Government expenditure = ${q3} × $${s} = $${spend}k; Production DWL = {{1/2}} × ${dQs} × $${s} = $${prodDwl}k.`,
          `Domestic producer surplus gain = {{1/2}} × (${q1} + ${q3}) × $${s} = **$${psGain} thousand** (check: $${spend}k − $${prodDwl}k = $${psGain}k).`,
        ],
      };
    },
  },

  // =========================================================================
  // 4. [HL] Import Quota Volume, Quota Rents & Foreign-Licence Welfare Loss
  // =========================================================================
  {
    id: "4a-trade-integration.quota-volume-revenue",
    topicId: "4a-trade-integration",
    title: "Import Quota Volume, Quota Rents & Welfare Loss",
    level: 3,
    ibLevel: "HL",
    guideRef: "trade-protection-diagrams",
    generate(rng: Rng, tier) {
      const good = rng.pick(MARKET_GOODS);
      const pw = rng.pick([20, 30, 40, 50, 60, 80]);
      const dp = rng.pick([6, 8, 10, 12, 16, 20]);
      const pq = pw + dp;
      const q1 = rng.int(10, 35);
      const dQs = rng.int(2, 10) * 2;
      const q3 = q1 + dQs;
      const quotaVol = rng.int(15, 50);
      const q4 = q3 + quotaVol;
      const dQd = rng.int(2, 10) * 2;
      const q2 = q4 + dQd;
      const quotaRent = clean(quotaVol * dp);

      if (tier === 1) {
        const foreignRev = clean(quotaVol * pq);
        return {
          prompt: `In a **${good}** market with world price **$${pw}**, a binding import quota lifts the domestic price to **$${pq}**. At **$${pq}**, domestic firms supply **${q3}k** units and domestic consumers buy **${q4}k** units. Calculate the total **quota rent** generated (in \`$ thousand\`).`,
          answer: { type: "number", value: quotaRent },
          traps: [
            {
              spec: { type: "number", value: foreignRev },
              feedback: `$${foreignRev}k is total revenue paid for quota imports (${quotaVol}k × $${pq}). Quota rent uses only the price premium (P_q − P_w = $${dp}).`,
            },
          ],
          hint: `First find quota volume (${q4}k − ${q3}k), then multiply by the price gap ($${pq} − $${pw}).`,
          solution: [
            `Quota import volume = ${q4} − ${q3} = ${quotaVol} thousand units.`,
            `Price premium = $${pq} − $${pw} = $${dp} per unit.`,
            `Total quota rent = ${quotaVol} × $${dp} = **$${quotaRent} thousand**.`,
          ],
        };
      }

      if (tier === 2) {
        const foreignRev = clean(quotaVol * pq);
        const freeForeignRev = clean((q2 - q1) * pw);
        return {
          prompt: `In a **${good}** market (world price **$${pw}**), free-trade supply is **${q1}k** and demand is **${q2}k**. An import quota restricts imports to **${quotaVol}k** units, driving domestic price up to **$${pq}**. If **foreign exporters hold all import licences free of charge**, calculate foreign exporters' **total revenue under the quota** (in \`$ thousand\`).`,
          answer: { type: "number", value: foreignRev },
          traps: [
            {
              spec: { type: "number", value: quotaRent },
              feedback: `$${quotaRent}k is only the windfall quota rent above P_w. Total foreign revenue under the quota is ${quotaVol}k × $${pq}.`,
            },
            ...(freeForeignRev !== foreignRev
              ? [
                  {
                    spec: { type: "number" as const, value: freeForeignRev },
                    feedback: `$${freeForeignRev}k was foreign exporters' free-trade revenue before the quota.`,
                  },
                ]
              : []),
          ],
          hint: `Foreign licence-holders sell all ${quotaVol}k quota units at the higher domestic price $${pq}.`,
          solution: [
            `Foreign exporters sell ${quotaVol} thousand units at $${pq} per unit.`,
            `Total foreign exporter revenue under quota = ${quotaVol} × $${pq} = **$${foreignRev} thousand** (including $${quotaRent}k of quota rent).`,
          ],
        };
      }

      // Tier 3: Total domestic welfare loss when foreign exporters capture quota rents
      const prodDwl = clean(0.5 * dQs * dp);
      const consDwl = clean(0.5 * dQd * dp);
      const trianglesOnly = clean(prodDwl + consDwl);
      const totalDomesticLoss = clean(trianglesOnly + quotaRent);
      return {
        prompt: `In a **${good}** market (world price **$${pw}**, \`Q_1 = ${q1}k\`, \`Q_2 = ${q2}k\`), a binding import quota lifts domestic price to **$${pq}** (\`Q_3 = ${q3}k\`, \`Q_4 = ${q4}k\`). Assuming **foreign exporters receive all import licences free of charge**, calculate the **total domestic welfare loss** (DWL triangles plus exported quota rent, in \`$ thousand\`).`,
        answer: { type: "number", value: totalDomesticLoss },
        traps: [
          {
            spec: { type: "number", value: trianglesOnly },
            feedback: `$${trianglesOnly}k includes only the two DWL triangles — remember to add the $${quotaRent}k quota rent transferred abroad to foreign exporters!`,
          },
        ],
        hint: `Sum Production DWL ({{1/2}}×${dQs}×${dp}), Consumption DWL ({{1/2}}×${dQd}×${dp}), and Exported Quota Rent (${quotaVol}×${dp}).`,
        solution: [
          `Production DWL = {{1/2}} × ${dQs} × $${dp} = $${prodDwl}k; Consumption DWL = {{1/2}} × ${dQd} × $${dp} = $${consDwl}k.`,
          `Quota rent transferred abroad = (${q4} − ${q3}) × $${dp} = $${quotaRent}k.`,
          `Total domestic welfare loss = $${prodDwl}k + $${consDwl}k + $${quotaRent}k = **$${totalDomesticLoss} thousand**.`,
        ],
      };
    },
  },

  // =========================================================================
  // 5. [SL] Trading Bloc Stage Identification (PTA → FTA → CU → CM → MU)
  // =========================================================================
  {
    id: "4a-trade-integration.trading-bloc-stages",
    topicId: "4a-trade-integration",
    title: "Identifying Stages of Economic Integration",
    level: 1,
    ibLevel: "SL",
    guideRef: "economic-integration-wto",
    generate(rng: Rng, tier) {
      const bloc = rng.pick(BLOC_NAMES);
      const members = rng.int(3, 9);
      const goods = rng.pick(BLOC_GOODS);
      const extRate = rng.pick([6, 8, 10, 12, 15, 18]);
      const cutFrom = rng.pick([14, 16, 18, 20]);
      const cutTo = rng.pick([4, 6, 8, 10]);

      type StageKey = "PTA" | "FTA" | "CU" | "CM" | "MU";
      const specs: Record<
        StageKey,
        { accept: string[]; display: string; shortDesc: string }
      > = {
        PTA: {
          accept: ["Preferential Trade Area", "PTA", "Preferential Trading Area", "Preferential Trade Agreement"],
          display: "Preferential Trade Area",
          shortDesc: "reduces (but does not eliminate) tariffs on selected goods between members",
        },
        FTA: {
          accept: ["Free Trade Area", "FTA", "Free Trade Agreement"],
          display: "Free Trade Area",
          shortDesc: "eliminates internal tariffs while letting members keep separate external tariffs (requiring rules of origin)",
        },
        CU: {
          accept: ["Customs Union", "CU"],
          display: "Customs Union",
          shortDesc: "combines zero internal tariffs with a uniform Common External Tariff (CET), without free factor mobility",
        },
        CM: {
          accept: ["Common Market", "Single Market"],
          display: "Common Market",
          shortDesc: "adds free movement of labour and capital on top of a Customs Union while retaining separate currencies",
        },
        MU: {
          accept: ["Monetary Union", "Currency Union"],
          display: "Monetary Union",
          shortDesc: "adds a single shared currency and one common central bank onto a Common Market",
        },
      };

      const stage = rng.pick<StageKey>(["PTA", "FTA", "CU", "CM", "MU"]);
      const spec = specs[stage];

      let prompt = "";
      let hint = "";

      if (tier === 1) {
        if (stage === "PTA") {
          prompt = `The ${members} member countries of **${bloc}** agree to lower tariffs on selected **${goods}** from ${cutFrom}% down to ${cutTo}% for one another, while keeping full tariffs on all other products and non-members. Identify this stage of economic integration.`;
          hint = "Tariffs are only *partially reduced* on *selected* goods — not eliminated across the board.";
        } else if (stage === "FTA") {
          prompt = `The ${members} countries of **${bloc}** abolish all internal tariffs on **${goods}** traded among themselves, but each member continues setting its own independent tariff rates against outside nations. Identify this stage of economic integration.`;
          hint = "Zero internal tariffs + independent external tariffs (like USMCA or ASEAN).";
        } else if (stage === "CU") {
          prompt = `The ${members} members of **${bloc}** eliminate internal tariffs on **${goods}** and adopt a uniform **${extRate}% Common External Tariff** on imports from non-members, while keeping national border restrictions on workers and capital. Identify this stage of economic integration.`;
          hint = "Which stage adds a Common External Tariff (CET) onto an FTA without free labour mobility?";
        } else if (stage === "CM") {
          prompt = `Across the ${members} members of **${bloc}**, goods such as **${goods}** flow tariff-free behind a ${extRate}% Common External Tariff, AND workers and financial capital move freely across borders — though each nation keeps its own currency. Identify this stage of economic integration.`;
          hint = "Free movement of labour and capital added onto a Customs Union (like the EU Single Market).";
        } else {
          prompt = `The ${members} nations of **${bloc}** operate free internal trade in **${goods}**, a ${extRate}% CET, free mobility of labour and capital, AND replace their national currencies with one shared currency managed by a single central bank. Identify this stage of economic integration.`;
          hint = "The deepest standard stage on the ladder — represented by the Eurozone.";
        }
      } else if (tier === 2) {
        if (stage === "PTA") {
          prompt = `Customs officials in **${bloc}** (${members} nations) apply a discounted ${cutTo}% reciprocal duty exclusively on specified **${goods}** from partner states (down from ${cutFrom}%), without establishing broad duty-free trade or a CET. Identify this stage of integration.`;
          hint = "Look for selective, partial tariff concessions rather than zero internal tariffs.";
        } else if (stage === "FTA") {
          prompt = `Exporters inside **${bloc}** (${members} nations) trade **${goods}** at 0% duty, yet customs officers must strictly enforce **rules of origin** at internal borders because members charge differing tariffs on outsiders. Identify this stage of integration.`;
          hint = "Rules of origin are needed specifically when internal trade is duty-free but there is NO Common External Tariff.";
        } else if (stage === "CU") {
          prompt = `Within **${bloc}** (${members} nations), internal rules of origin for **${goods}** are no longer required because all members enforce an identical ${extRate}% border duty on outsiders and negotiate external trade deals jointly — yet citizens still need work visas to migrate between members. Identify this stage of integration.`;
          hint = "Identical external tariff (CET) + joint trade diplomacy, without free movement of labour.";
        } else if (stage === "CM") {
          prompt = `Inside **${bloc}** (${members} nations), engineers relocate visa-free across borders, banks invest capital seamlessly, and **${goods}** face a shared ${extRate}% CET — while each central bank still manages its own national currency and interest rate. Identify this stage of integration.`;
          hint = "Full factor mobility + CET, but separate national currencies and central banks.";
        } else {
          prompt = `During an asymmetric recession hitting two of the ${members} members of **${bloc}** (which trades **${goods}** behind a ${extRate}% CET with free labour mobility), struggling nations cannot cut domestic interest rates or depreciate their own currency because policy is set by one joint central bank. Identify this stage of integration.`;
          hint = "Loss of independent monetary and exchange-rate policy defines which integration stage?";
        }
      } else {
        // Tier 3: Upgrade / marginal transition clues
        if (stage === "PTA") {
          prompt = `Previously trading solely on WTO MFN terms at ${cutFrom}%, the ${members} nations of **${bloc}** sign an introductory pact cutting duties to ${cutTo}% solely on listed **${goods}**. What initial stage of economic integration have they formed?`;
          hint = "The very first rung of the 5-stage integration ladder (partial tariff preferences).";
        } else if (stage === "FTA") {
          prompt = `Upgrading from a partial Preferential Trade Area, the ${members} members of **${bloc}** abolish all remaining internal tariffs on **${goods}** while preserving independent national tariff schedules against non-members. What stage of integration have they now reached?`;
          hint = "One rung above a PTA — zero internal tariffs, separate external tariffs.";
        } else if (stage === "CU") {
          prompt = `Upgrading from a Free Trade Area, the ${members} members of **${bloc}** harmonise all outside duties on **${goods}** into a single ${extRate}% external border tariff, while keeping immigration controls intact. What stage of integration have they now reached?`;
          hint = "FTA + Common External Tariff = ?";
        } else if (stage === "CM") {
          prompt = `Deepening their existing Customs Union (${extRate}% CET on **${goods}**), the ${members} members of **${bloc}** ratify a treaty establishing free cross-border movement of labour and capital while maintaining national currencies. What stage of integration have they now reached?`;
          hint = "Customs Union + free movement of labour and capital = ?";
        } else {
          prompt = `Deepening their existing Common Market (${extRate}% CET on **${goods}** and free labour/capital mobility), the ${members} members of **${bloc}** adopt a single currency and transfer monetary sovereignty to one central bank. What stage of integration have they now reached?`;
          hint = "Common Market + single currency & central bank = ?";
        }
      }

      return {
        prompt,
        answer: { type: "text", accept: spec.accept, display: spec.display },
        hint,
        solution: [
          `Integration ladder: PTA → FTA → Customs Union (+CET) → Common Market (+labour & capital) → Monetary Union (+single currency & central bank).`,
          `This scenario ${spec.shortDesc}, identifying a **${spec.display}**.`,
        ],
      };
    },
  },
];
