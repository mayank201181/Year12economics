import type { Drill } from "./types.ts";
import { big, clean, num, roundTo } from "./helpers.ts";

const COUNTRIES = [
  "Veridia", "Solaria", "Korvia", "Marisia", "Novera", "Talanda",
  "Orvia", "Pelora", "Rivena", "Valenia", "Zaria", "Belora",
  "Kestra", "Loriana", "Merida", "Ostia",
] as const;

const FX_PAIRS: ReadonlyArray<{ a: string; b: string; rates: readonly number[] }> = [
  { a: "USD", b: "SGD", rates: [1.20, 1.25, 1.30, 1.35, 1.40, 1.45, 1.50] },
  { a: "GBP", b: "USD", rates: [1.15, 1.20, 1.25, 1.30, 1.35, 1.40] },
  { a: "EUR", b: "USD", rates: [1.05, 1.10, 1.15, 1.20, 1.25] },
  { a: "GBP", b: "EUR", rates: [1.10, 1.15, 1.20, 1.25, 1.30] },
  { a: "EUR", b: "AUD", rates: [1.50, 1.55, 1.60, 1.65, 1.70, 1.75] },
  { a: "USD", b: "CAD", rates: [1.20, 1.25, 1.30, 1.35, 1.40, 1.45] },
  { a: "GBP", b: "SGD", rates: [1.60, 1.65, 1.70, 1.75, 1.80, 1.85] },
  { a: "AUD", b: "SGD", rates: [0.80, 0.85, 0.90, 0.95, 1.05] },
];

const CLEAN_BASES = [0.80, 1.00, 1.20, 1.40, 1.60, 1.80, 2.00, 2.20, 2.40] as const;
const PCT_STEPS = [-25, -20, -15, -10, -5, 5, 10, 15, 20, 25] as const;

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1 — CURRENCY CONVERSIONS & % APPRECIATION / DEPRECIATION
  // ===========================================================================
  {
    id: "4b-exchange-bop-development.fx-conversion-pct",
    topicId: "4b-exchange-bop-development",
    title: "Currency Conversions & % Exchange Rate Change",
    level: 1,
    ibLevel: "SL",
    guideRef: "exchange-rates-regimes",
    generate(rng, tier) {
      const pair = rng.pick(FX_PAIRS);

      if (tier === 1) {
        const rate = rng.pick(pair.rates);
        const amount = rng.int(2, 45) * 20; // 40..900 (multiples of 20 → exact integer result!)
        const ans = roundTo(amount * rate, 2);
        const recipTrap = roundTo(amount / rate, 2);
        const traps =
          Math.abs(recipTrap - ans) > 1
            ? [
                {
                  spec: { type: "number" as const, value: recipTrap, tolerance: 0.05 },
                  feedback: `You divided instead of multiplying — since 1 ${pair.a} = ${rate.toFixed(2)} ${pair.b}, multiply ${amount} × ${rate.toFixed(2)}.`,
                },
              ]
            : undefined;
        return {
          prompt: `At a market exchange rate of \`1 ${pair.a} = ${rate.toFixed(2)} ${pair.b}\`, convert \`${big(amount)} ${pair.a}\` into ${pair.b} (give a numerical value).`,
          answer: { type: "number", value: ans, tolerance: 0.01, display: `${big(ans)} ${pair.b}` },
          hint: `Each 1 ${pair.a} buys ${rate.toFixed(2)} ${pair.b}, so multiply ${big(amount)} by ${rate.toFixed(2)}.`,
          traps,
          solution: [
            `Multiply by the exchange rate: \`${big(amount)} × ${rate.toFixed(2)} = ${big(ans)}\`.`,
            `Converted amount = \`${big(ans)} ${pair.b}\`.`,
          ],
        };
      }

      if (tier === 2) {
        const e1 = rng.pick(CLEAN_BASES);
        const pct = rng.pick(PCT_STEPS);
        const e2 = roundTo(e1 * (1 + pct / 100), 2); // exact multiple of 0.01!
        const word = pct > 0 ? "appreciation" : "depreciation";
        const wrongBase = roundTo(((e2 - e1) / e2) * 100, 2);
        const traps = [
          {
            spec: { type: "number" as const, value: -pct },
            feedback: `Check the sign: 1 ${pair.a} moved from ${e1.toFixed(2)} to ${e2.toFixed(2)} ${pair.b}, which is a ${word} (${num(pct)}%).`,
          },
          ...(Math.abs(wrongBase - pct) > 0.2
            ? [
                {
                  spec: { type: "number" as const, value: wrongBase, tolerance: 0.05 },
                  feedback: `Always divide by the initial rate (${e1.toFixed(2)}), not the new rate (${e2.toFixed(2)}).`,
                },
              ]
            : []),
        ];
        return {
          prompt: `Under a floating regime, the exchange rate moves from \`1 ${pair.a} = ${e1.toFixed(2)} ${pair.b}\` to \`1 ${pair.a} = ${e2.toFixed(2)} ${pair.b}\`. Calculate the percentage change in the value of the **${pair.a}** against the ${pair.b} (include a minus sign if it depreciated).`,
          answer: { type: "number", value: pct, display: `${num(pct)}%` },
          hint: `Use ((New − Old) / Old) × 100 with Old = ${e1.toFixed(2)} and New = ${e2.toFixed(2)}.`,
          traps,
          solution: [
            `Apply {{((e_2 - e_1) / e_1) * 100}} = {{((${e2.toFixed(2)} - ${e1.toFixed(2)}) / ${e1.toFixed(2)}) * 100}}.`,
            `Result = \`${num(pct)}%\` — the ${pair.a} experienced a \`${Math.abs(pct)}%\` ${word}.`,
          ],
        };
      }

      // Tier 3: inverse conversion after an exchange-rate swing
      const e1 = rng.pick(CLEAN_BASES);
      const pct = rng.pick([-20, -10, 10, 20, 25] as const);
      const e2 = roundTo(e1 * (1 + pct / 100), 2);
      const priceA = rng.int(4, 30) * 50; // 200..1500
      const invoiceB = roundTo(priceA * e2, 2);
      const oldRateTrap = roundTo(invoiceB / e1, 2);
      const multTrap = roundTo(invoiceB * e2, 2);
      const traps = [
        ...(Math.abs(oldRateTrap - priceA) > 1
          ? [
              {
                spec: { type: "number" as const, value: oldRateTrap, tolerance: 0.1 },
                feedback: `Use the NEW exchange rate (${e2.toFixed(2)}), not the old rate (${e1.toFixed(2)}).`,
              },
            ]
          : []),
        ...(Math.abs(multTrap - priceA) > 1
          ? [
              {
                spec: { type: "number" as const, value: multTrap, tolerance: 0.5 },
                feedback: `To convert ${pair.b} back into ${pair.a}, divide by ${e2.toFixed(2)} rather than multiplying.`,
              },
            ]
          : []),
      ];
      return {
        prompt: `The bilateral exchange rate shifts from \`1 ${pair.a} = ${e1.toFixed(2)} ${pair.b}\` to \`1 ${pair.a} = ${e2.toFixed(2)} ${pair.b}\`. At the new rate, an importer pays \`${big(invoiceB)} ${pair.b}\` for an order of industrial components. Calculate the order's value in **${pair.a}**.`,
        answer: { type: "number", value: priceA, tolerance: 0.01, display: `${big(priceA)} ${pair.a}` },
        hint: `At the new rate, 1 ${pair.a} = ${e2.toFixed(2)} ${pair.b}, so divide ${big(invoiceB)} by ${e2.toFixed(2)}.`,
        traps,
        solution: [
          `Use the new rate \`1 ${pair.a} = ${e2.toFixed(2)} ${pair.b}\`.`,
          `Value in ${pair.a} = {{${clean(invoiceB)} / ${e2.toFixed(2)}}} = \`${big(priceA)} ${pair.a}\`.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2 — CURRENT ACCOUNT BALANCE RECONSTRUCTION (G + S + PRIMARY + SECONDARY)
  // ===========================================================================
  {
    id: "4b-exchange-bop-development.current-account-balance",
    topicId: "4b-exchange-bop-development",
    title: "Current Account Balance Reconstruction (G-S-P-S)",
    level: 1,
    ibLevel: "SL",
    guideRef: "bop-marshall-lerner-hl",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const goods = rng.nonZero(-60, 45);
        const services = rng.nonZero(-25, 35);
        const primary = rng.nonZero(-20, 18);
        const secondary = rng.nonZero(-12, 16);
        const ca = goods + services + primary + secondary;
        const gsOnly = goods + services;
        const traps =
          primary + secondary !== 0
            ? [
                {
                  spec: { type: "number" as const, value: gsOnly },
                  feedback: "You summed only Goods and Services — remember to include Net Primary and Net Secondary Income!",
                },
              ]
            : undefined;
        return {
          prompt: `${country} records the following annual Current Account items (in \`$bn\`): Balance of trade in goods = \`${goods >= 0 ? "+" : ""}${num(goods)}\`, Balance of trade in services = \`${services >= 0 ? "+" : ""}${num(services)}\`, Net primary income = \`${primary >= 0 ? "+" : ""}${num(primary)}\`, Net secondary income = \`${secondary >= 0 ? "+" : ""}${num(secondary)}\`. Calculate ${country}'s Current Account balance (in \`$bn\`, include the sign if negative).`,
          answer: { type: "number", value: ca, display: `${ca >= 0 ? "+" : "−"}$${Math.abs(ca)}bn` },
          hint: "Sum all four G-S-P-S components carefully, preserving every + and − sign.",
          traps,
          solution: [
            `CA = Goods + Services + Net Primary Income + Net Secondary Income.`,
            `CA = \`${num(goods)} + (${num(services)}) + (${num(primary)}) + (${num(secondary)}) = ${num(ca)}\` (\`$bn\`).`,
          ],
        };
      }

      if (tier === 2) {
        const xg = rng.int(120, 340);
        const mg = rng.int(110, 360);
        const xs = rng.int(35, 130);
        const ms = rng.int(30, 115);
        const primary = rng.nonZero(-22, 18);
        const secondary = rng.nonZero(-14, 18);
        const balG = xg - mg;
        const balS = xs - ms;
        const ca = balG + balS + primary + secondary;
        const gsOnly = balG + balS;
        const traps =
          primary + secondary !== 0
            ? [
                {
                  spec: { type: "number" as const, value: gsOnly },
                  feedback: "Include Net Primary Income and Net Secondary Income after computing net goods and services.",
                },
              ]
            : undefined;
        return {
          prompt: `${country}'s annual figures (in \`$bn\`): Exports of goods = \`${xg}\`, Imports of goods = \`${mg}\`, Exports of services = \`${xs}\`, Imports of services = \`${ms}\`, Net primary income = \`${primary >= 0 ? "+" : ""}${num(primary)}\`, Net secondary income = \`${secondary >= 0 ? "+" : ""}${num(secondary)}\`. Calculate ${country}'s Current Account balance (in \`$bn\`).`,
          answer: { type: "number", value: ca, display: `${ca >= 0 ? "+" : "−"}$${Math.abs(ca)}bn` },
          hint: "Compute (Exports − Imports) for goods and services first, then add Net Primary and Net Secondary Income.",
          traps,
          solution: [
            `Trade in goods = \`${xg} − ${mg} = ${num(balG)}\`; Trade in services = \`${xs} − ${ms} = ${num(balS)}\`.`,
            `Current Account = \`${num(balG)} + (${num(balS)}) + (${num(primary)}) + (${num(secondary)}) = ${num(ca)}\` (\`$bn\`).`,
          ],
        };
      }

      // Tier 3: solve for a missing sub-component given total CA
      const xg = rng.int(140, 320);
      const mg = rng.int(130, 350);
      const balS = rng.nonZero(-20, 35);
      const primary = rng.nonZero(-24, 16);
      const secondary = rng.nonZero(-15, 19);
      const ca = (xg - mg) + balS + primary + secondary;
      const askImports = rng.bool(0.5);

      if (askImports) {
        return {
          prompt: `${country} has a Current Account balance of \`${ca >= 0 ? "+" : ""}${num(ca)} $bn\`. Given Exports of goods = \`${xg}\`, Balance of trade in services = \`${balS >= 0 ? "+" : ""}${num(balS)}\`, Net primary income = \`${primary >= 0 ? "+" : ""}${num(primary)}\`, and Net secondary income = \`${secondary >= 0 ? "+" : ""}${num(secondary)}\` (all in \`$bn\`), calculate ${country}'s **Imports of goods** (enter a positive value in \`$bn\`).`,
          answer: { type: "number", value: mg, display: `$${mg}bn` },
          hint: `Write (${xg} − M_g) + (${num(balS)}) + (${num(primary)}) + (${num(secondary)}) = ${num(ca)} and solve for M_g.`,
          solution: [
            `Known items sum: \`${xg} + (${num(balS)}) + (${num(primary)}) + (${num(secondary)}) = ${xg + balS + primary + secondary}\`.`,
            `Solve \`${xg + balS + primary + secondary} − M_g = ${num(ca)}\` → \`M_g = ${mg}\` (\`$bn\`).`,
          ],
        };
      }

      return {
        prompt: `${country} reports a Current Account balance of \`${ca >= 0 ? "+" : ""}${num(ca)} $bn\`. Given Exports of goods = \`${xg}\`, Imports of goods = \`${mg}\`, Balance of trade in services = \`${balS >= 0 ? "+" : ""}${num(balS)}\`, and Net primary income = \`${primary >= 0 ? "+" : ""}${num(primary)}\` (all in \`$bn\`), calculate **Net secondary income** (in \`$bn\`, include the sign if negative).`,
        answer: { type: "number", value: secondary, display: `${secondary >= 0 ? "+" : "−"}$${Math.abs(secondary)}bn` },
        hint: `Sum Goods (${num(xg - mg)}), Services (${num(balS)}), and Primary (${num(primary)}), then subtract from CA (${num(ca)}).`,
        solution: [
          `Subtotal of first three items = \`(${xg} − ${mg}) + (${num(balS)}) + (${num(primary)}) = ${num(xg - mg + balS + primary)}\`.`,
          `Net secondary income = \`${num(ca)} − (${num(xg - mg + balS + primary)}) = ${num(secondary)}\` (\`$bn\`).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3 — BOP ZERO IDENTITY (CA + KA + FA + ERRORS & OMISSIONS = 0)
  // ===========================================================================
  {
    id: "4b-exchange-bop-development.bop-zero-identity",
    topicId: "4b-exchange-bop-development",
    title: "Balance of Payments Identity (CA + KA + FA = 0)",
    level: 2,
    ibLevel: "SL",
    guideRef: "bop-marshall-lerner-hl",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const ca = rng.nonZero(-65, 65);
        let ka = rng.nonZero(-8, 10);
        if (ca + ka === 0) ka += 2;
        const fa = -(ca + ka);
        return {
          prompt: `${country} records a Current Account balance of \`${ca >= 0 ? "+" : ""}${num(ca)} $bn\`, a Capital Account balance of \`${ka >= 0 ? "+" : ""}${num(ka)} $bn\`, and Net Errors & Omissions of \`$0\`. Calculate ${country}'s **Financial Account** balance (in \`$bn\`, include the sign if negative).`,
          answer: { type: "number", value: fa, display: `${fa >= 0 ? "+" : "−"}$${Math.abs(fa)}bn` },
          hint: "Apply CA + KA + FA = 0 so the Financial Account exactly offsets CA + KA.",
          traps: [
            {
              spec: { type: "number", value: -fa },
              feedback: `Check the sign! Since CA + KA = ${num(ca + ka)}, FA must be ${num(fa)} so that the total sums to 0.`,
            },
          ],
          solution: [
            `Use the BoP identity: \`CA + KA + FA = 0\`.`,
            `\`${num(ca)} + (${num(ka)}) + FA = 0\` → \`FA = ${num(fa)}\` (\`$bn\`).`,
          ],
        };
      }

      if (tier === 2) {
        const ca = rng.nonZero(-55, 55);
        const ka = rng.nonZero(-6, 8);
        const fa = -(ca + ka);
        const fdi = rng.nonZero(-35, 35);
        let portfolio = rng.nonZero(-25, 25);
        let reserves = fa - fdi - portfolio;
        if (reserves === 0) {
          portfolio += 3;
          reserves = fa - fdi - portfolio;
        }
        const resNote =
          reserves < 0
            ? `accumulated $${Math.abs(reserves)}bn of foreign exchange reserves`
            : `depleted $${reserves}bn of foreign exchange reserves`;
        return {
          prompt: `${country}'s BoP (in \`$bn\`, Net Errors & Omissions = \`0\`): Current Account = \`${ca >= 0 ? "+" : ""}${num(ca)}\`, Capital Account = \`${ka >= 0 ? "+" : ""}${num(ka)}\`, Net FDI = \`${fdi >= 0 ? "+" : ""}${num(fdi)}\`, and Net Portfolio Investment = \`${portfolio >= 0 ? "+" : ""}${num(portfolio)}\`. Assuming no other investment, calculate the **Reserve Assets** entry (in \`$bn\`, include the sign if negative).`,
          answer: { type: "number", value: reserves, display: `${reserves >= 0 ? "+" : "−"}$${Math.abs(reserves)}bn` },
          hint: "Find total FA = −(CA + KA) first, then subtract Net FDI and Net Portfolio Investment.",
          traps: [
            {
              spec: { type: "number", value: -reserves },
              feedback: `Check the sign on Reserve Assets: FDI + Portfolio + Reserves must equal FA (${num(fa)}).`,
            },
          ],
          solution: [
            `Total Financial Account: \`FA = −(${num(ca)} + (${num(ka)})) = ${num(fa)}\` (\`$bn\`).`,
            `\`${num(fdi)} + (${num(portfolio)}) + Reserves = ${num(fa)}\` → \`Reserves = ${num(reserves)}\` (\`$bn\`, meaning the central bank ${resNote}).`,
          ],
        };
      }

      // Tier 3: includes non-zero Net Errors & Omissions, solve for Net Portfolio Investment
      const ca = rng.nonZero(-60, 60);
      const ka = rng.nonZero(-8, 8);
      const eo = rng.nonZero(-5, 5);
      const fa = -(ca + ka + eo);
      const fdi = rng.nonZero(-35, 35);
      const reserves = rng.nonZero(-14, 14);
      const portfolio = fa - fdi - reserves;
      const noEoTrap = -(ca + ka) - fdi - reserves;
      return {
        prompt: `${country} reports (in \`$bn\`): Current Account = \`${ca >= 0 ? "+" : ""}${num(ca)}\`, Capital Account = \`${ka >= 0 ? "+" : ""}${num(ka)}\`, Net FDI = \`${fdi >= 0 ? "+" : ""}${num(fdi)}\`, Reserve Assets = \`${reserves >= 0 ? "+" : ""}${num(reserves)}\`, and Net Errors & Omissions = \`${eo >= 0 ? "+" : ""}${num(eo)}\`. Calculate **Net Portfolio Investment** (in \`$bn\`, include the sign if negative).`,
        answer: { type: "number", value: portfolio, display: `${portfolio >= 0 ? "+" : "−"}$${Math.abs(portfolio)}bn` },
        hint: "Use CA + KA + FA + Net Errors & Omissions = 0 to find FA, then solve FDI + Portfolio + Reserves = FA.",
        traps: [
          {
            spec: { type: "number", value: noEoTrap },
            feedback: `Don't forget Net Errors & Omissions (${num(eo)}) inside CA + KA + FA + E&O = 0!`,
          },
        ],
        solution: [
          `From \`CA + KA + FA + E&O = 0\`: \`FA = −(${num(ca)} + (${num(ka)}) + (${num(eo)})) = ${num(fa)}\` (\`$bn\`).`,
          `Solve \`${num(fdi)} + Portfolio + (${num(reserves)}) = ${num(fa)}\` → \`Portfolio = ${num(portfolio)}\` (\`$bn\`).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4 — [HL] MARSHALL–LERNER CONDITION & TRADE-BALANCE OUTCOME
  // ===========================================================================
  {
    id: "4b-exchange-bop-development.marshall-lerner-hl",
    topicId: "4b-exchange-bop-development",
    title: "[HL] Marshall–Lerner Sum & Trade Balance Outcome",
    level: 3,
    ibLevel: "HL",
    guideRef: "bop-marshall-lerner-hl",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const a = roundTo(rng.int(3, 21) * 0.05, 2); // 0.15..1.05
        const b = roundTo(rng.int(3, 21) * 0.05, 2); // 0.15..1.05
        const sum = roundTo(a + b, 2);
        const verdict =
          sum > 1
            ? "exceeds 1, so Marshall–Lerner IS satisfied and depreciation improves the trade balance"
            : sum < 1
              ? "is below 1, so Marshall–Lerner FAILS and depreciation worsens the trade balance"
              : "equals 1, so the trade balance remains unchanged";
        return {
          prompt: `[HL] Economists estimate that ${country}'s price elasticity of demand for exports is \`PED_X = −${a.toFixed(2)}\` and for imports is \`PED_M = −${b.toFixed(2)}\`. Calculate the Marshall–Lerner elasticity sum {{|PED_X| + |PED_M|}} (to 2 d.p.).`,
          answer: { type: "number", value: sum, tolerance: 0.005, display: sum.toFixed(2) },
          hint: "Take the absolute (positive) value of both elasticities before adding them.",
          traps: [
            {
              spec: { type: "number", value: -sum, tolerance: 0.005 },
              feedback: "Always take absolute values first: |PED_X| + |PED_M| must be positive!",
            },
          ],
          solution: [
            `Take absolute values: \`|PED_X| = ${a.toFixed(2)}\` and \`|PED_M| = ${b.toFixed(2)}\`.`,
            `Sum = \`${a.toFixed(2)} + ${b.toFixed(2)} = ${sum.toFixed(2)}\` — which ${verdict}.`,
          ],
        };
      }

      if (tier === 2) {
        const dep = rng.pick([5, 10, 20] as const);
        const a = roundTo(rng.int(2, 12) * 0.1, 1); // 0.2..1.2
        const b = roundTo(rng.int(2, 11) * 0.1, 1); // 0.2..1.1
        const qx = roundTo(a * dep, 2);
        const qm = roundTo(b * dep, 2);
        const sum = roundTo(a + b, 2);
        const verdict =
          sum > 1
            ? "Marshall–Lerner holds (trade balance improves)"
            : sum < 1
              ? "Marshall–Lerner fails (trade balance worsens)"
              : "trade balance stays unchanged";
        const noDivTrap = roundTo(qx + qm, 2);
        return {
          prompt: `[HL] After ${country}'s currency depreciates by \`${dep}%\`, foreign export prices fall \`${dep}%\` and export volume rises by \`${clean(qx)}%\`, while domestic import prices rise \`${dep}%\` and import volume falls by \`${clean(qm)}%\`. Calculate the Marshall–Lerner sum {{|PED_X| + |PED_M|}} (to 1 d.p.).`,
          answer: { type: "number", value: sum, tolerance: 0.01, display: sum.toFixed(1) },
          hint: `First compute |PED_X| = ${clean(qx)} / ${dep} and |PED_M| = ${clean(qm)} / ${dep}, then sum them.`,
          traps: [
            ...(Math.abs(noDivTrap - sum) > 0.2
              ? [
                  {
                    spec: { type: "number" as const, value: noDivTrap, tolerance: 0.05 },
                    feedback: `Divide each % volume change by the ${dep}% price change before summing!`,
                  },
                ]
              : []),
          ],
          solution: [
            `|PED_X| = {{${clean(qx)} / ${dep}}} = \`${a.toFixed(1)}\`; |PED_M| = {{${clean(qm)} / ${dep}}} = \`${b.toFixed(1)}\`.`,
            `Sum = \`${a.toFixed(1)} + ${b.toFixed(1)} = ${sum.toFixed(1)}\` → ${verdict}.`,
          ],
        };
      }

      // Tier 3: exact post-depreciation trade balance X1 - M1
      const v0 = rng.pick([100, 150, 200, 250, 300, 400, 500] as const);
      const depPct = rng.pick([10, 20] as const);
      const dep = depPct / 100;
      const a = roundTo(rng.int(2, 11) * 0.1, 1);
      const b = roundTo(rng.int(2, 10) * 0.1, 1);
      const x1 = roundTo(v0 * (1 + a * dep), 2);
      const qm1 = roundTo(v0 * (1 - b * dep), 2);
      const m1 = roundTo(qm1 * (1 + dep), 2);
      const bal = roundTo(x1 - m1, 2);
      const mlSum = roundTo(a + b, 1);
      const forgotPriceTrap = roundTo(x1 - qm1, 2);
      return {
        prompt: `[HL] ${country} starts with balanced trade in domestic currency: \`X₀ = $${v0}bn\` and \`M₀ = $${v0}bn\` (initial domestic prices \`1.00\`). Its currency depreciates \`${depPct}%\` (domestic export price stays \`1.00\`; domestic import price rises \`${depPct}%\` to \`${(1 + dep).toFixed(2)}\`). Given \`|PED_X| = ${a.toFixed(1)}\` and \`|PED_M| = ${b.toFixed(1)}\`, calculate the new trade balance \`X₁ − M₁\` (in \`$bn\`, to 2 d.p., include minus sign if deficit).`,
        answer: { type: "number", value: bal, tolerance: 0.02, display: `${bal >= 0 ? "+" : "−"}$${Math.abs(bal)}bn` },
        hint: `Compute X₁ = ${v0} × (1 + ${clean(a * dep)}) and M₁ = ${v0} × (1 − ${clean(b * dep)}) × ${(1 + dep).toFixed(2)}, then find X₁ − M₁.`,
        traps: [
          ...(Math.abs(forgotPriceTrap - bal) > 0.5
            ? [
                {
                  spec: { type: "number" as const, value: forgotPriceTrap, tolerance: 0.05 },
                  feedback: `Remember to multiply the new import volume (${clean(qm1)}) by the NEW higher domestic import price (${(1 + dep).toFixed(2)})!`,
                },
              ]
            : []),
        ],
        solution: [
          `Export volume rises \`${clean(a * depPct)}%\` → \`X₁ = ${v0} × ${clean(1 + a * dep)} = $${clean(x1)}bn\`.`,
          `Import volume falls \`${clean(b * depPct)}%\` to \`${clean(qm1)}bn\`, priced at \`${(1 + dep).toFixed(2)}\` → \`M₁ = ${clean(qm1)} × ${(1 + dep).toFixed(2)} = $${clean(m1)}bn\`.`,
          `New trade balance = \`${clean(x1)} − ${clean(m1)} = ${num(bal)} $bn\` (consistent with |PED_X| + |PED_M| = \`${mlSum.toFixed(1)}\`).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5 — DEVELOPMENT INDICATOR MATCHING (HDI, IHDI, GII, MPI, GINI)
  // ===========================================================================
  {
    id: "4b-exchange-bop-development.development-indicators",
    topicId: "4b-exchange-bop-development",
    title: "Development Indicators Matching (HDI, IHDI, GII, MPI, Gini)",
    level: 2,
    ibLevel: "SL",
    guideRef: "measuring-development-barriers",
    generate(rng, tier) {
      const c1 = rng.pick(COUNTRIES);
      let c2 = rng.pick(COUNTRIES);
      while (c2 === c1) c2 = rng.pick(COUNTRIES);

      const INDICATORS = [
        {
          code: "HDI",
          accept: ["HDI", "Human Development Index"],
          full: "Human Development Index (HDI)",
          scale: "0 to 1 (higher is better)",
          desc: "combines life expectancy at birth, mean & expected years of schooling, and GNI per capita (PPP) without adjusting for internal inequality",
        },
        {
          code: "IHDI",
          accept: ["IHDI", "Inequality-Adjusted HDI", "Inequality Adjusted HDI", "Inequality-Adjusted Human Development Index"],
          full: "Inequality-Adjusted HDI (IHDI)",
          scale: "0 to 1 (higher is better, always ≤ HDI)",
          desc: "discounts each of the three HDI dimensions (health, schooling, GNI/capita) for unequal distribution across the population",
        },
        {
          code: "GII",
          accept: ["GII", "Gender Inequality Index"],
          full: "Gender Inequality Index (GII)",
          scale: "0 to 1 (LOWER is better)",
          desc: "tracks human-development losses from gender gaps in reproductive health (maternal mortality, adolescent births), parliamentary/education empowerment, and female labour-force participation",
        },
        {
          code: "MPI",
          accept: ["MPI", "Multidimensional Poverty Index"],
          full: "Multidimensional Poverty Index (MPI)",
          scale: "0 to 1 (LOWER is better)",
          desc: "identifies acute overlapping household deprivations across health (nutrition, child mortality), education (attendance, schooling), and living standards (cooking fuel, sanitation, water, electricity, housing, assets)",
        },
        {
          code: "Gini",
          accept: ["Gini", "Gini coefficient", "Gini index"],
          full: "Gini coefficient",
          scale: "0 to 1 (LOWER is more equal)",
          desc: "measures pure income inequality derived from the area between the 45-degree line of equality and the Lorenz curve",
        },
      ] as const;

      const target = rng.pick(INDICATORS);

      if (tier === 1) {
        const life = rng.int(58, 82);
        const gni = rng.int(3, 38) * 1000;
        const hdiVal = roundTo(0.45 + rng.int(1, 42) * 0.01, 2);
        const ihdiVal = roundTo(hdiVal * (0.68 + rng.int(0, 18) * 0.01), 2);
        const giiVal = roundTo(0.12 + rng.int(0, 48) * 0.01, 2);
        const mpiVal = roundTo(0.05 + rng.int(0, 40) * 0.01, 2);
        const giniVal = roundTo(0.26 + rng.int(0, 34) * 0.01, 2);

        const promptsByCode: Record<string, string[]> = {
          HDI: [
            `Researchers assessing ${c1} (life expectancy \`${life}\` years, GNI/capita PPP \`$${big(gni)}\`) want the standard 0–1 composite index combining health, mean & expected years of schooling, and GNI per capita (PPP). Type the indicator abbreviation (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**).`,
            `Policy analysts in ${c1} need a single 0–1 score (currently \`${hdiVal.toFixed(2)}\`, higher = better) that averages longevity, education, and PPP income without adjusting for inequality or gender. Choose from **HDI**, **IHDI**, **GII**, **MPI**, or **Gini**.`,
          ],
          IHDI: [
            `${c1} has a baseline score of \`${hdiVal.toFixed(2)}\`, but after discounting health, schooling, and income for unequal distribution its score drops to \`${ihdiVal.toFixed(2)}\`. Which indicator measures this inequality-discounted level? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
            `To quantify the percentage loss in human development caused by unequal distribution of longevity, education, and income in ${c1} (GNI/capita PPP \`$${big(gni)}\`), which index should economists pair with HDI? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
          ],
          GII: [
            `A UNDP report on ${c1} publishes a 0–1 score of \`${giiVal.toFixed(2)}\` (where LOWER is better) capturing maternal mortality, adolescent birth rates, female parliamentary seats, secondary schooling, and labour-force participation. Name this indicator (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**).`,
            `Ministry officials in ${c1} (life expectancy \`${life}\` years) track reproductive health, women's empowerment, and gender labour-market gaps using a 0–1 index where \`0\` means perfect parity. Choose from **HDI**, **IHDI**, **GII**, **MPI**, or **Gini**.`,
          ],
          MPI: [
            `Household surveys in rural ${c1} record a score of \`${mpiVal.toFixed(2)}\` (lower = better) measuring overlapping deprivations in child nutrition, school attendance, clean drinking water, sanitation, electricity, and cooking fuel. Name this indicator (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**).`,
            `Development agencies working in ${c1} (GNI/capita PPP \`$${big(gni)}\`) want to measure acute non-income poverty directly at the household level across health, education, and living standards. Choose from **HDI**, **IHDI**, **GII**, **MPI**, or **Gini**.`,
          ],
          Gini: [
            `Economists in ${c1} compute a value of \`${giniVal.toFixed(2)}\` (0 = perfect equality, 1 = complete inequality) directly from the country's Lorenz curve to summarise income dispersion. Name this indicator (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**).`,
            `In ${c1} (GNI/capita PPP \`$${big(gni)}\`), policymakers need the single summary statistic derived from the area between the 45-degree line and the Lorenz curve. Choose from **HDI**, **IHDI**, **GII**, **MPI**, or **Gini**.`,
          ],
        };

        const prompt = rng.pick(promptsByCode[target.code]);
        return {
          prompt,
          answer: { type: "text", accept: [...target.accept], display: target.code },
          hint: `Look at the exact dimensions and direction: ${target.scale}.`,
          solution: [
            `The correct indicator is **${target.full}** (${target.scale}).`,
            `It specifically ${target.desc}.`,
          ],
        };
      }

      if (tier === 2) {
        const h1 = roundTo(0.60 + rng.int(1, 22) * 0.01, 2);
        const h2 = roundTo(h1 + rng.pick([-0.02, -0.01, 0.01, 0.02]), 2);
        const loss1 = rng.int(22, 34);
        const loss2 = rng.int(6, 13);
        const gii1 = roundTo(0.42 + rng.int(0, 18) * 0.01, 2);
        const gii2 = roundTo(0.11 + rng.int(0, 12) * 0.01, 2);
        const mpi1 = roundTo(0.22 + rng.int(0, 20) * 0.01, 2);
        const mpi2 = roundTo(0.02 + rng.int(0, 6) * 0.01, 2);
        const gini1 = roundTo(0.46 + rng.int(0, 14) * 0.01, 2);
        const gini2 = roundTo(0.25 + rng.int(0, 9) * 0.01, 2);

        const casePrompts: Record<string, string> = {
          HDI: `${c1} and ${c2} want an overall national-average composite ranking combining life expectancy, schooling years, and PPP GNI per capita (\`${h1.toFixed(2)}\` vs \`${h2.toFixed(2)}\`) before adjusting for inequality or gender. Which indicator is this? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
          IHDI: `${c1} and ${c2} have nearly identical raw HDI (\`${h1.toFixed(2)}\` vs \`${h2.toFixed(2)}\`), yet ${c1} loses \`${loss1}%\` of its potential human development to unequal distribution across health, schooling, and income compared with only \`${loss2}%\` in ${c2}. Which index reveals this loss? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
          GII: `Comparing ${c1} (\`${gii1.toFixed(2)}\`) and ${c2} (\`${gii2.toFixed(2)}\`), analysts note that ${c2} performs far better (closer to \`0\`) in maternal health, women's parliamentary representation, and female secondary schooling. Which index are they citing? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
          MPI: `Despite similar GDP per capita, ${c1} scores \`${mpi1.toFixed(2)}\` versus \`${mpi2.toFixed(2)}\` in ${c2} because a far larger share of ${c1}'s households suffer simultaneous deprivations in clean water, electricity, sanitation, and child nutrition. Which index captures this? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
          Gini: `After tax reform, ${c2}'s Lorenz curve shifts closer to the 45-degree line (\`${gini2.toFixed(2)}\` vs \`${gini1.toFixed(2)}\` in ${c1}), indicating much narrower household income inequality without measuring health or schooling. Which indicator is shown? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
        };

        return {
          prompt: casePrompts[target.code],
          answer: { type: "text", accept: [...target.accept], display: target.code },
          hint: "Match the specific contrast (raw 3-pillar average, inequality-discounted HDI, gender gaps, household basic-needs deprivation, or Lorenz income dispersion).",
          solution: [
            `Answer: **${target.full}** (${target.scale}).`,
            `Why: it ${target.desc}.`,
          ],
        };
      }

      // Tier 3: multi-metric diagnostic policy brief
      const gdp = rng.int(6, 26) * 1000;
      const gni = gdp - rng.int(1, 4) * 500;
      const pctRural = rng.int(24, 58);
      const maternal = rng.int(120, 420);
      const topShare = rng.int(38, 56);
      const tier3Prompts: Record<string, string> = {
        HDI: `Diagnostic brief for ${c1}: GDP/capita PPP \`$${big(gdp)}\`, GNI/capita PPP \`$${big(gni)}\`. An IB student wants a single composite baseline that already uses GNI per capita (PPP) alongside life expectancy and schooling years, knowing they will later critique its omission of inequality and ecology. Which indicator is this baseline? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
        IHDI: `Diagnostic brief for ${c1}: GNI/capita PPP \`$${big(gni)}\`, top 10% earn \`${topShare}%\` of income, and elite urban schools vastly outperform rural districts. Which composite indicator penalises ALL three dimensions — health, education, and income — for this internal inequality? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
        GII: `Diagnostic brief for ${c1}: GNI/capita PPP \`$${big(gni)}\`, maternal mortality \`${maternal}\` per 100,000 births, and wide gender disparities in parliament and formal employment. Which composite indicator specifically quantifies these gender-based development losses? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
        MPI: `Diagnostic brief for ${c1}: GNI/capita PPP \`$${big(gni)}\`, yet \`${pctRural}%\` of rural households lack safe drinking water, clean cooking fuel, and sanitation alongside child undernutrition. Which composite indicator directly measures these overlapping household deprivations? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
        Gini: `Diagnostic brief for ${c1}: GNI/capita PPP \`$${big(gni)}\`, and the top decile captures \`${topShare}%\` of national income. Economists want a single non-composite measure capturing purely the distribution of income across households (ignoring health and schooling). Which indicator fits best? (**HDI**, **IHDI**, **GII**, **MPI**, or **Gini**)`,
      };

      return {
        prompt: tier3Prompts[target.code],
        answer: { type: "text", accept: [...target.accept], display: target.code },
        hint: "Distinguish carefully between pure income dispersion (Lorenz), gender gaps, household basic-needs deprivation, raw 3-pillar average, and inequality-discounted 3-pillar development.",
        solution: [
          `Answer: **${target.full}** (${target.scale}).`,
          `It ${target.desc}.`,
        ],
      };
    },
  },
];
