import type { Drill } from "./types.ts";
import { clean, num, roundTo } from "./helpers.ts";

const COUNTRIES = [
  "Aurelia",
  "Borealis",
  "Caledon",
  "Eldoria",
  "Kallisto",
  "Maris",
  "Nordia",
  "Solaria",
  "Terranova",
  "Valoria",
  "Velora",
  "Veridia",
] as const;

// Clean leakage combinations (MPW = MPS + MPT + MPM) yielding exact/clean multipliers
const CLEAN_LEAKAGES: ReadonlyArray<{ mps: number; mpt: number; mpm: number; mpw: number; k: number }> = [
  { mps: 0.05, mpt: 0.10, mpm: 0.05, mpw: 0.20, k: 5 },
  { mps: 0.04, mpt: 0.11, mpm: 0.05, mpw: 0.20, k: 5 },
  { mps: 0.06, mpt: 0.08, mpm: 0.06, mpw: 0.20, k: 5 },
  { mps: 0.05, mpt: 0.12, mpm: 0.08, mpw: 0.25, k: 4 },
  { mps: 0.10, mpt: 0.10, mpm: 0.05, mpw: 0.25, k: 4 },
  { mps: 0.08, mpt: 0.09, mpm: 0.08, mpw: 0.25, k: 4 },
  { mps: 0.07, mpt: 0.11, mpm: 0.07, mpw: 0.25, k: 4 },
  { mps: 0.10, mpt: 0.15, mpm: 0.15, mpw: 0.40, k: 2.5 },
  { mps: 0.08, mpt: 0.17, mpm: 0.15, mpw: 0.40, k: 2.5 },
  { mps: 0.12, mpt: 0.18, mpm: 0.10, mpw: 0.40, k: 2.5 },
  { mps: 0.15, mpt: 0.15, mpm: 0.10, mpw: 0.40, k: 2.5 },
  { mps: 0.10, mpt: 0.20, mpm: 0.10, mpw: 0.40, k: 2.5 },
  { mps: 0.15, mpt: 0.20, mpm: 0.15, mpw: 0.50, k: 2 },
  { mps: 0.15, mpt: 0.25, mpm: 0.10, mpw: 0.50, k: 2 },
  { mps: 0.10, mpt: 0.15, mpm: 0.25, mpw: 0.50, k: 2 },
  { mps: 0.12, mpt: 0.18, mpm: 0.20, mpw: 0.50, k: 2 },
  { mps: 0.20, mpt: 0.15, mpm: 0.15, mpw: 0.50, k: 2 },
  { mps: 0.20, mpt: 0.25, mpm: 0.35, mpw: 0.80, k: 1.25 },
  { mps: 0.15, mpt: 0.30, mpm: 0.35, mpw: 0.80, k: 1.25 },
  { mps: 0.25, mpt: 0.25, mpm: 0.30, mpw: 0.80, k: 1.25 },
];

const EXACT_MPC_SET: ReadonlyArray<{ mpc: number; mpw: number; k: number }> = [
  { mpc: 0.20, mpw: 0.80, k: 1.25 },
  { mpc: 0.375, mpw: 0.625, k: 1.6 },
  { mpc: 0.50, mpw: 0.50, k: 2 },
  { mpc: 0.60, mpw: 0.40, k: 2.5 },
  { mpc: 0.68, mpw: 0.32, k: 3.125 },
  { mpc: 0.75, mpw: 0.25, k: 4 },
  { mpc: 0.80, mpw: 0.20, k: 5 },
  { mpc: 0.84, mpw: 0.16, k: 6.25 },
  { mpc: 0.875, mpw: 0.125, k: 8 },
  { mpc: 0.90, mpw: 0.10, k: 10 },
];

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: [HL] KEYNESIAN MULTIPLIER k FROM MPC OR LEAKAGES
  // ===========================================================================
  {
    id: "3b-macro-policies.multiplier-k",
    topicId: "3b-macro-policies",
    title: "[HL] Keynesian Multiplier k (MPC & Leakages)",
    level: 2,
    ibLevel: "HL",
    guideRef: "multiplier-crowding-out-hl",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);
      if (tier === 1) {
        const pick = rng.pick(EXACT_MPC_SET.filter((x) => x.k <= 8 && x.mpc * 100 === Math.round(x.mpc * 100)));
        const asPercent = rng.bool(0.45);
        const prompt = asPercent
          ? `In ${country}, households spend **${Math.round(pick.mpc * 100)}%** of every additional dollar of income on domestically produced goods and services. Calculate the **Keynesian spending multiplier (\`k\`)**.`
          : `In ${country}, the Marginal Propensity to Consume domestically is \`MPC = ${pick.mpc.toFixed(2)}\`. Calculate the **Keynesian spending multiplier (\`k\`)**.`;
        const wrongRecip = roundTo(1 / pick.mpc, 2);
        return {
          prompt,
          answer: { type: "number", value: pick.k, tolerance: 0.01, display: num(pick.k) },
          hint: "Use `k = 1 / (1 − MPC)`, NOT `1 / MPC`.",
          traps:
            Math.abs(wrongRecip - pick.k) > 0.05
              ? [{ spec: { type: "number", value: wrongRecip, tolerance: 0.02 }, feedback: "Watch out: you computed `1 / MPC` instead of `1 / (1 − MPC)`!" }]
              : undefined,
          solution: [
            `Find total marginal leakages: {{1 - MPC = 1 - ${pick.mpc.toFixed(2)} = ${pick.mpw.toFixed(2)}}}.`,
            `Apply the multiplier formula: {{k = 1 / ${pick.mpw.toFixed(2)} = ${num(pick.k)}}}.`,
          ],
        };
      }
      if (tier === 2) {
        const row = rng.pick(CLEAN_LEAKAGES);
        const askMpcFirst = rng.bool(0.3);
        if (askMpcFirst) {
          const mpc = clean(1 - row.mpw);
          return {
            prompt: `${country} has \`MPS = ${row.mps.toFixed(2)}\`, \`MPT = ${row.mpt.toFixed(2)}\`, and \`MPM = ${row.mpm.toFixed(2)}\`. Calculate its **Marginal Propensity to Consume domestically (\`MPC\`)** as a decimal.`,
            answer: { type: "number", value: mpc, tolerance: 0.005, display: mpc.toFixed(2) },
            hint: "Recall `MPC + MPS + MPT + MPM = 1`, so subtract the sum of all three leakages from `1`.",
            traps:
              Math.abs(row.mpw - mpc) > 0.02
                ? [{ spec: { type: "number", value: row.mpw, tolerance: 0.005 }, feedback: `${row.mpw.toFixed(2)} is the total leakage (MPW) — subtract it from 1 to find MPC.` }]
                : undefined,
            solution: [
              `Sum all three marginal leakages: {{MPW = ${row.mps.toFixed(2)} + ${row.mpt.toFixed(2)} + ${row.mpm.toFixed(2)} = ${row.mpw.toFixed(2)}}}.`,
              `Subtract from 1: {{MPC = 1 - ${row.mpw.toFixed(2)} = ${mpc.toFixed(2)}}}.`,
            ],
          };
        }
        return {
          prompt: `In ${country}, \`MPS = ${row.mps.toFixed(2)}\`, \`MPT = ${row.mpt.toFixed(2)}\`, and \`MPM = ${row.mpm.toFixed(2)}\`. Calculate the **Keynesian spending multiplier (\`k\`)**.`,
          answer: { type: "number", value: row.k, tolerance: 0.01, display: num(row.k) },
          hint: "Add ALL three leakages (`MPS + MPT + MPM`), then divide `1` by that sum.",
          traps: [
            { spec: { type: "number", value: row.mpw, tolerance: 0.005 }, feedback: `${row.mpw.toFixed(2)} is the total leakage (MPW) — now compute \`1 / MPW\`.` },
          ],
          solution: [
            `Total marginal withdrawals: {{MPW = ${row.mps.toFixed(2)} + ${row.mpt.toFixed(2)} + ${row.mpm.toFixed(2)} = ${row.mpw.toFixed(2)}}}.`,
            `Keynesian multiplier: {{k = 1 / ${row.mpw.toFixed(2)} = ${num(row.k)}}}.`,
          ],
        };
      }
      // Tier 3: Reverse-solve for a missing leakage (MPM or MPS) given k and the other two leakages
      const row = rng.pick(CLEAN_LEAKAGES);
      const askMpm = rng.bool(0.6);
      if (askMpm) {
        return {
          prompt: `${country} has a Keynesian spending multiplier of \`k = ${num(row.k)}\`, with \`MPS = ${row.mps.toFixed(2)}\` and \`MPT = ${row.mpt.toFixed(2)}\`. Calculate ${country}'s **Marginal Propensity to Import (\`MPM\`)** as a decimal.`,
          answer: { type: "number", value: row.mpm, tolerance: 0.005, display: row.mpm.toFixed(2) },
          hint: "First rearrange `k = 1 / MPW` to find `MPW = 1 / k`, then subtract `MPS + MPT`.",
          traps: [{ spec: { type: "number", value: row.mpw, tolerance: 0.005 }, feedback: `${row.mpw.toFixed(2)} is total leakages (MPW) — subtract MPS and MPT to isolate MPM.` }],
          solution: [
            `Rearrange \`k = 1 / MPW\`: {{MPW = 1 / ${num(row.k)} = ${row.mpw.toFixed(2)}}}.`,
            `Subtract \`MPS\` and \`MPT\`: {{MPM = ${row.mpw.toFixed(2)} - ${row.mps.toFixed(2)} - ${row.mpt.toFixed(2)} = ${row.mpm.toFixed(2)}}}.`,
          ],
        };
      }
      return {
        prompt: `${country} has a Keynesian spending multiplier of \`k = ${num(row.k)}\`, with \`MPT = ${row.mpt.toFixed(2)}\` and \`MPM = ${row.mpm.toFixed(2)}\`. Calculate ${country}'s **Marginal Propensity to Save (\`MPS\`)** as a decimal.`,
        answer: { type: "number", value: row.mps, tolerance: 0.005, display: row.mps.toFixed(2) },
        hint: "Find total marginal withdrawals `MPW = 1 / k`, then subtract `MPT + MPM`.",
        solution: [
          `Total marginal withdrawals: {{MPW = 1 / ${num(row.k)} = ${row.mpw.toFixed(2)}}}.`,
          `Isolate \`MPS\`: {{MPS = ${row.mpw.toFixed(2)} - ${row.mpt.toFixed(2)} - ${row.mpm.toFixed(2)} = ${row.mps.toFixed(2)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: [HL] ΔReal GDP = k × ΔG & REQUIRED ΔG TO CLOSE A GAP
  // ===========================================================================
  {
    id: "3b-macro-policies.multiplier-gdp-gap",
    topicId: "3b-macro-policies",
    title: "[HL] ΔReal GDP & Closing Deflationary Gaps (k × ΔG)",
    level: 3,
    ibLevel: "HL",
    guideRef: "multiplier-crowding-out-hl",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);
      if (tier === 1) {
        const row = rng.pick(CLEAN_LEAKAGES.filter((x) => x.k >= 2));
        const mpc = clean(1 - row.mpw);
        const inj = rng.int(4, 30) * 2; // $8bn .. $60bn
        const source = rng.pick([
          "government capital spending (`ΔG`)",
          "autonomous private investment (`ΔI`)",
          "autonomous export demand (`ΔX`)",
        ]);
        const deltaY = clean(row.k * inj);
        return {
          prompt: `Operating with spare capacity, ${country} has \`MPC = ${mpc.toFixed(2)}\`. If ${source} increases by **$${inj} billion**, calculate the maximum final increase in **Real GDP** (in $ billions).`,
          answer: { type: "number", value: deltaY, tolerance: 0.05, display: `$${num(deltaY)} billion` },
          hint: "First compute `k = 1 / (1 − MPC)`, then multiply `k` by the initial injection.",
          traps: [{ spec: { type: "number", value: clean(mpc * inj), tolerance: 0.05 }, feedback: "You found Round 2 induced spending (`MPC × injection`) rather than multiplying by `k = 1 / (1 − MPC)`." }],
          solution: [
            `Multiplier: {{k = 1 / (1 - ${mpc.toFixed(2)}) = ${num(row.k)}}}.`,
            `Total Real GDP expansion: {{Δ"Real GDP" = ${num(row.k)} * ${inj} = $${num(deltaY)} billion}}.`,
          ],
        };
      }
      if (tier === 2) {
        const row = rng.pick(CLEAN_LEAKAGES.filter((x) => x.k >= 2));
        const reqG = rng.int(6, 35); // exact integer ΔG
        const gap = clean(reqG * row.k);
        const yActual = rng.int(30, 80) * 10; // $300bn .. $800bn
        const yFe = clean(yActual + gap);
        const mpc = clean(1 - row.mpw);
        return {
          prompt: `${country} is in recession with actual Real GDP of **$${yActual} billion**, full-employment Real GDP (\`Y_fe\`) of **$${num(yFe)} billion**, and \`MPC = ${mpc.toFixed(2)}\`. Assuming constant prices and no crowding out, calculate the required initial increase in government spending \`ΔG\` (in $ billions) to close the deflationary gap.`,
          answer: { type: "number", value: reqG, tolerance: 0.05, display: `$${reqG} billion` },
          hint: "Calculate `Gap = Y_fe − Y_actual`, find `k = 1 / (1 − MPC)`, then compute `ΔG = Gap / k`.",
          traps: [
            { spec: { type: "number", value: gap, tolerance: 0.05 }, feedback: `$${num(gap)} billion is the entire deflationary gap — divide by \`k = ${num(row.k)}\` so you do not overshoot \`Y_fe\`!` },
          ],
          solution: [
            `Deflationary gap \`= $${num(yFe)}bn − $${yActual}bn = $${num(gap)} billion\`.`,
            `Multiplier: {{k = 1 / (1 - ${mpc.toFixed(2)}) = ${num(row.k)}}}.`,
            `Required initial injection: {{ΔG = ${num(gap)} / ${num(row.k)} = $${reqG} billion}}.`,
          ],
        };
      }
      // Tier 3: Full leakages (MPS, MPT, MPM) + either closing gap OR net injection after crowding out
      const row = rng.pick(CLEAN_LEAKAGES.filter((x) => x.k >= 2));
      const crowdingVariant = rng.bool(0.45);
      if (crowdingVariant) {
        const dG = rng.int(12, 40);
        const crowdedOut = rng.int(2, Math.floor(dG / 2));
        const netInj = dG - crowdedOut;
        const netY = clean(row.k * netInj);
        return {
          prompt: `In ${country}, \`MPS = ${row.mps.toFixed(2)}\`, \`MPT = ${row.mpt.toFixed(2)}\`, and \`MPM = ${row.mpm.toFixed(2)}\`. The government increases spending by **$${dG} billion**, but higher interest rates simultaneously crowd out **$${crowdedOut} billion** of private investment. Calculate the **net** final increase in Real GDP (in $ billions).`,
          answer: { type: "number", value: netY, tolerance: 0.05, display: `$${num(netY)} billion` },
          hint: "Compute `k = 1 / (MPS + MPT + MPM)` and multiply by the NET autonomous injection (`ΔG − crowded-out investment`).",
          traps: [
            { spec: { type: "number", value: clean(row.k * dG), tolerance: 0.05 }, feedback: "Remember to subtract the crowded-out private investment before multiplying by `k`." },
          ],
          solution: [
            `Total leakages: {{MPW = ${row.mps.toFixed(2)} + ${row.mpt.toFixed(2)} + ${row.mpm.toFixed(2)} = ${row.mpw.toFixed(2)}}} → {{k = 1 / ${row.mpw.toFixed(2)} = ${num(row.k)}}}.`,
            `Net autonomous injection \`= $${dG}bn − $${crowdedOut}bn = $${netInj} billion\`.`,
            `Net final rise in Real GDP \`= ${num(row.k)} × $${netInj}bn = $${num(netY)} billion\`.`,
          ],
        };
      }
      const reqG = rng.int(6, 32);
      const gap = clean(reqG * row.k);
      const yFe = rng.int(40, 90) * 10;
      const isInflationary = rng.bool(0.4);
      const yActual = isInflationary ? clean(yFe + gap) : clean(yFe - gap);
      const gapType = isInflationary ? "inflationary" : "deflationary";
      const action = isInflationary ? "cut" : "increase";
      return {
        prompt: `${country} has actual Real GDP of **$${num(yActual)} billion**, potential Real GDP (\`Y_fe\`) of **$${yFe} billion**, \`MPS = ${row.mps.toFixed(2)}\`, \`MPT = ${row.mpt.toFixed(2)}\`, and \`MPM = ${row.mpm.toFixed(2)}\`. Calculate the positive magnitude of the initial **${action}** in government spending (in $ billions) needed to close the ${gapType} gap.`,
        answer: { type: "number", value: reqG, tolerance: 0.05, display: `$${reqG} billion` },
        hint: `Find the ${gapType} gap (\`|Y_actual − Y_fe|\`), calculate \`k = 1 / (MPS + MPT + MPM)\`, and divide the gap by \`k\`.`,
        solution: [
          `Output gap \`= $${num(gap)} billion\` (${gapType}).`,
          `Leakages: {{MPW = ${row.mps.toFixed(2)} + ${row.mpt.toFixed(2)} + ${row.mpm.toFixed(2)} = ${row.mpw.toFixed(2)}}} → {{k = ${num(row.k)}}}.`,
          `Required initial spending ${action}: {{${num(gap)} / ${num(row.k)} = $${reqG} billion}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: BUDGET BALANCE & DEBT-TO-GDP % (SL)
  // ===========================================================================
  {
    id: "3b-macro-policies.budget-debt-gdp",
    topicId: "3b-macro-policies",
    title: "Budget Balance & National Debt-to-GDP %",
    level: 1,
    ibLevel: "SL",
    guideRef: "fiscal-policy-budgets",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);
      if (tier === 1) {
        const gdp = rng.pick([200, 250, 400, 500, 600, 800, 1000, 1200]);
        const pct = rng.pick([2, 2.5, 3, 4, 5, 6, 7.5, 8]);
        const diff = clean((gdp * pct) / 100);
        const rev = rng.int(Math.round(gdp * 0.2), Math.round(gdp * 0.35));
        const isDeficit = rng.bool(0.7);
        const exp = isDeficit ? clean(rev + diff) : clean(rev - diff);
        const label = isDeficit ? "budget deficit" : "budget surplus";
        return {
          prompt: `In a fiscal year, ${country}'s government collects **$${rev} billion** in revenue and spends **$${num(exp)} billion**, while nominal GDP is **$${gdp} billion**. Calculate ${country}'s **${label} as a percentage of GDP** (give a positive percentage).`,
          answer: { type: "number", value: pct, tolerance: 0.05, display: `${num(pct)}%` },
          hint: `First find the dollar difference (\`|$${rev}bn − $${num(exp)}bn|\`), then divide by nominal GDP ($${gdp}bn) and multiply by 100%.`,
          traps: [
            { spec: { type: "number", value: diff, tolerance: 0.05 }, feedback: `$${num(diff)} billion is the ${label} in dollars — divide by GDP ($${gdp}bn) and multiply by 100%.` },
          ],
          solution: [
            `Dollar ${label} \`= $${num(diff)} billion\`.`,
            `As a percentage of GDP: {{(${num(diff)} / ${gdp}) * 100% = ${num(pct)}%}}.`,
          ],
        };
      }
      if (tier === 2) {
        const gdp = rng.pick([400, 500, 600, 800, 1000, 1200, 1500, 2000]);
        const debtPct = rng.int(35, 115);
        const debt = clean((gdp * debtPct) / 100);
        return {
          prompt: `${country} has an accumulated national debt of **$${num(debt)} billion** and an annual nominal GDP of **$${gdp} billion**. Calculate ${country}'s **Debt-to-GDP ratio** (in %).`,
          answer: { type: "number", value: debtPct, tolerance: 0.1, display: `${debtPct}%` },
          hint: "Compute `(National Debt / Nominal GDP) × 100%`.",
          solution: [
            `Debt-to-GDP ratio \`= ($${num(debt)}bn / $${gdp}bn) × 100% = ${debtPct}%\`.`,
          ],
        };
      }
      // Tier 3: End-of-year Debt-to-GDP after combining current+capital+transfers vs tax revenue and new nominal GDP
      const gdpEnd = rng.pick([500, 600, 800, 1000, 1200, 1600]);
      const finalRatio = rng.int(45, 110); // exact integer %!
      const debtEnd = clean((gdpEnd * finalRatio) / 100);
      const deficit = rng.int(20, 80);
      const debtStart = clean(debtEnd - deficit);
      const current = rng.int(120, 240);
      const capital = rng.int(25, 65);
      const transfers = rng.int(35, 95);
      const totalExp = current + capital + transfers;
      const taxRev = totalExp - deficit;
      return {
        prompt: `${country} starts the year with **$${num(debtStart)} billion** in national debt. During the year, it collects **$${taxRev} billion** in tax revenue and spends **$${current} billion** on current services, **$${capital} billion** on capital infrastructure, and **$${transfers} billion** on transfer payments. If end-of-year nominal GDP is **$${gdpEnd} billion**, calculate ${country}'s **end-of-year Debt-to-GDP ratio** (in %).`,
        answer: { type: "number", value: finalRatio, tolerance: 0.1, display: `${finalRatio}%` },
        hint: "Sum all three outlays (current + capital + transfers) to find the annual budget deficit, add that deficit to initial national debt, then divide by end-of-year nominal GDP.",
        solution: [
          `Total government expenditure \`= $${current}bn + $${capital}bn + $${transfers}bn = $${totalExp} billion\`.`,
          `Annual budget deficit \`= $${totalExp}bn − $${taxRev}bn = $${deficit} billion\`.`,
          `End-of-year national debt \`= $${num(debtStart)}bn + $${deficit}bn = $${num(debtEnd)} billion\`.`,
          `End-of-year Debt-to-GDP \`= (${num(debtEnd)} / ${gdpEnd}) × 100% = ${finalRatio}%\`.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: MONETARY & FISCAL POLICY GAP-MATCHING (SL)
  // ===========================================================================
  {
    id: "3b-macro-policies.policy-gap-matching",
    topicId: "3b-macro-policies",
    title: "Monetary & Fiscal Policy Gap-Matching",
    level: 1,
    ibLevel: "SL",
    guideRef: "monetary-policy-banking",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);
      const yFe = rng.int(40, 95) * 10;
      const gap = rng.int(20, 90);
      const isRecession = rng.bool(0.5);
      const yActual = isRecession ? yFe - gap : yFe + gap;
      const cpi = isRecession
        ? roundTo(rng.int(2, 14) / 10, 1) // 0.2%..1.4%
        : roundTo(rng.int(48, 95) / 10, 1); // 4.8%..9.5%
      const unemp = isRecession
        ? roundTo(rng.int(65, 115) / 10, 1) // 6.5%..11.5%
        : roundTo(rng.int(22, 38) / 10, 1); // 2.2%..3.8%

      if (tier === 1) {
        const stance = isRecession ? "expansionary" : "contractionary";
        const accept = isRecession
          ? ["expansionary", "expansionary policy", "expansionary fiscal policy", "expansionary monetary policy", "loose", "reflationary"]
          : ["contractionary", "contractionary policy", "contractionary fiscal policy", "contractionary monetary policy", "tight", "deflationary"];
        return {
          prompt: `${country}'s actual Real GDP is **$${yActual} billion** against potential output \`Y_fe\` of **$${yFe} billion**, with CPI inflation at **${cpi}%** and unemployment at **${unemp}%**. Should policymakers adopt an **\`expansionary\`** or **\`contractionary\`** demand-side stance?`,
          answer: { type: "text", accept, display: stance },
          hint: "Compare actual Real GDP with `Y_fe`: below `Y_fe` is a deflationary gap needing stimulus; above `Y_fe` is an inflationary gap needing cooling.",
          solution: [
            `Since actual Real GDP ($${yActual}bn) is ${isRecession ? "below" : "above"} full-employment output ($${yFe}bn), ${country} has ${isRecession ? "a **deflationary gap** (high unemployment, low inflation)" : "an **inflationary gap** (overheating, high demand-pull inflation)"}.`,
            `Policymakers should shift \`AD\` ${isRecession ? "rightwards" : "leftwards"} using **${stance}** demand-side policy.`,
          ],
        };
      }

      if (tier === 2) {
        const instrument = rng.pick(["rate", "spending", "tax"] as const);
        if (instrument === "rate") {
          const dir = isRecession ? "cut" : "raise";
          const accept = isRecession
            ? ["cut", "lower", "reduce", "decrease", "cut interest rates", "lower interest rates"]
            : ["raise", "increase", "hike", "lift", "raise interest rates", "increase interest rates"];
          return {
            prompt: `${country} faces actual Real GDP of **$${yActual} billion** (\`Y_fe = $${yFe} billion\`), **${cpi}%** CPI inflation, and **${unemp}%** unemployment. To close this output gap via monetary policy, should the central bank **\`raise\`** or **\`cut\`** its base interest rate?`,
            answer: { type: "text", accept, display: dir },
            hint: "Lower base rates boost `C`, `I`, and `(X − M)` (`AD` right); higher base rates cool `C`, `I`, and `(X − M)` (`AD` left).",
            solution: [
              `${country} has ${isRecession ? "a **deflationary gap**" : "an **inflationary gap**"} of $${gap} billion.`,
              `The central bank should **${dir}** its base interest rate to shift \`AD\` ${isRecession ? "rightwards (`C↑, I↑, (X − M)↑`)" : "leftwards (`C↓, I↓, (X − M)↓`)"}.`,
            ],
          };
        }
        if (instrument === "spending") {
          const dir = isRecession ? "increase" : "cut";
          const accept = isRecession
            ? ["increase", "raise", "boost", "expand", "increase spending"]
            : ["cut", "reduce", "lower", "decrease", "cut spending"];
          return {
            prompt: `${country} records actual Real GDP of **$${yActual} billion** (\`Y_fe = $${yFe} billion\`), **${cpi}%** CPI inflation, and **${unemp}%** unemployment. Using discretionary fiscal policy, should the government **\`increase\`** or **\`cut\`** government expenditure \`G\`?`,
            answer: { type: "text", accept, display: dir },
            hint: "Direct government spending `G` shifts `AD` in the same direction.",
            solution: [
              `To close the $${gap} billion ${isRecession ? "deflationary" : "inflationary"} gap, the government should **${dir}** \`G\`, shifting \`AD\` ${isRecession ? "rightwards" : "leftwards"}.`,
            ],
          };
        }
        // tax instrument
        const dir = isRecession ? "cut" : "raise";
        const accept = isRecession
          ? ["cut", "lower", "reduce", "decrease", "cut taxes"]
          : ["raise", "increase", "lift", "hike", "raise taxes"];
        return {
          prompt: `${country} has actual Real GDP of **$${yActual} billion** (\`Y_fe = $${yFe} billion\`), **${cpi}%** CPI inflation, and **${unemp}%** unemployment. Using discretionary taxation, should the finance ministry **\`raise\`** or **\`cut\`** personal income tax rates?`,
          answer: { type: "text", accept, display: dir },
          hint: "Cutting income taxes raises disposable income and `C` (`AD` right); raising income taxes restrains `C` (`AD` left).",
          solution: [
            `${country} faces a $${gap} billion ${isRecession ? "deflationary" : "inflationary"} gap.`,
            `The finance ministry should **${dir}** personal income taxes to ${isRecession ? "boost disposable income and shift `AD` right" : "curb disposable income and shift `AD` left"}.`,
          ],
        };
      }

      // Tier 3: Real interest rate calculation + monetary stance judgment (or HL OMO buy/sell)
      const omoMode = rng.bool(0.5);
      if (omoMode) {
        const dir = isRecession ? "buy" : "sell";
        const accept = isRecession
          ? ["buy", "purchase", "buy bonds", "buy government bonds"]
          : ["sell", "sell bonds", "sell government bonds"];
        return {
          prompt: `[HL] ${country} has actual Real GDP of **$${yActual} billion** against \`Y_fe = $${yFe} billion\`, with **${cpi}%** inflation and **${unemp}%** unemployment. Using open-market operations (OMOs), should the central bank **\`buy\`** or **\`sell\`** government bonds to close the gap?`,
          answer: { type: "text", accept, display: dir },
          hint: "Buying bonds injects bank reserves (`M_s` right → `i↓`); selling bonds drains bank reserves (`M_s` left → `i↑`).",
          solution: [
            `${country} has a $${gap} billion ${isRecession ? "deflationary" : "inflationary"} gap.`,
            `The central bank should **${dir}** government bonds to shift vertical \`M_s\` ${isRecession ? "rightwards, lowering `i` and boosting `AD`" : "leftwards, raising `i` and cooling `AD`"}.`,
          ],
        };
      }
      const nom = roundTo(rng.int(10, 75) / 10, 1); // 1.0% .. 7.5%
      const inf = roundTo(rng.int(5, 90) / 10, 1);  // 0.5% .. 9.0%
      const real = roundTo(nom - inf, 1);
      return {
        prompt: `In ${country}, the central bank sets its nominal policy interest rate at **${nom.toFixed(1)}%** while annual CPI inflation is **${inf.toFixed(1)}%**. Calculate the approximate **real interest rate** (in %, include a minus sign if negative).`,
        answer: { type: "number", value: real, tolerance: 0.05, display: `${num(real)}%` },
        hint: "Use `real interest rate ≈ nominal interest rate − inflation rate`.",
        traps:
          real !== 0
            ? [{ spec: { type: "number", value: -real, tolerance: 0.05 }, feedback: "Check the subtraction order: `nominal rate − inflation rate`." }]
            : undefined,
        solution: [
          `Real interest rate ≈ Nominal rate − Inflation rate.`,
          `{{${nom.toFixed(1)}% - ${inf.toFixed(1)}% = ${num(real)}%}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: SUPPLY-SIDE POLICY CLASSIFICATION (MARKET-BASED VS INTERVENTIONIST)
  // ===========================================================================
  {
    id: "3b-macro-policies.supply-side-classify",
    topicId: "3b-macro-policies",
    title: "Supply-Side Policies: Market-Based vs Interventionist",
    level: 2,
    ibLevel: "SL",
    guideRef: "supply-side-policies",
    generate(rng, tier) {
      const country = rng.pick(COUNTRIES);
      const pct = rng.int(2, 8);
      const bn = rng.int(3, 28);

      const MARKET_POLICIES: ReadonlyArray<{ text: string; pillar: string }> = [
        { text: `abolishing licensing barriers and bureaucratic red tape for new telecom and broadband entrants`, pillar: "deregulation (encouraging competition)" },
        { text: `selling the state-owned national airline and rail freight operator to private investors`, pillar: "privatisation (encouraging competition)" },
        { text: `cutting import tariffs by ${pct} percentage points and removing quotas on industrial components`, pillar: "trade liberalisation (encouraging competition)" },
        { text: `strengthening competition law to break up domestic price-fixing cartels and anti-competitive mergers`, pillar: "anti-monopoly regulation (encouraging competition)" },
        { text: `lowering the top corporate profit tax rate by ${pct} percentage points to boost retained earnings`, pillar: "incentive-related corporate tax cut" },
        { text: `cutting marginal personal income tax rates by ${pct} percentage points to raise post-tax work incentives`, pillar: "incentive-related personal tax cut" },
        { text: `reforming labour laws to reduce trade-union strike restrictions and decentralise wage bargaining`, pillar: "labour-market reform (flexibility)" },
        { text: `shortening the maximum duration of unemployment benefits to encourage faster job search`, pillar: "labour-market reform (work incentives)" },
        { text: `lowering statutory youth minimum-wage floors to reduce payroll costs for entry-level hiring`, pillar: "labour-market reform (wage flexibility)" },
        { text: `deregulating Sunday trading hours and business zoning permits across retail districts`, pillar: "deregulation (encouraging competition)" },
      ];

      const INTERVENTIONIST_POLICIES: ReadonlyArray<{ text: string; pillar: string }> = [
        { text: `investing $${bn} billion in public STEM vocational colleges and adult digital-skills retraining`, pillar: "human-capital investment (education & training)" },
        { text: `spending $${bn} billion on nationwide preventative healthcare clinics to cut worker absenteeism`, pillar: "human-capital investment (healthcare)" },
        { text: `providing $${bn} billion in state R&D subsidies and university–industry AI research grants`, pillar: "investment in new technology (R&D)" },
        { text: `building a $${bn} billion high-speed electric freight rail and automated container port`, pillar: "physical infrastructure investment" },
        { text: `funding a $${bn} billion national renewable electricity grid to lower industrial energy costs`, pillar: "physical infrastructure investment" },
        { text: `rolling out state-funded universal early-childhood education and teacher training upgrades`, pillar: "human-capital investment (education)" },
        { text: `launching a $${bn} billion public credit-guarantee and industrial support scheme for clean-tech SMEs`, pillar: "industrial policy (supporting SMEs)" },
        { text: `financing public fibre-optic broadband across rural regions where private networks under-invest`, pillar: "physical infrastructure investment" },
        { text: `subsidising national semiconductor fabrication labs and green-hydrogen prototyping grants`, pillar: "investment in new technology (R&D)" },
        { text: `expanding publicly funded apprenticeship placements for workers displaced from declining factories`, pillar: "human-capital investment (retraining)" },
      ];

      const isMarket = rng.bool(0.5);
      const item = isMarket ? rng.pick(MARKET_POLICIES) : rng.pick(INTERVENTIONIST_POLICIES);
      const ans = isMarket ? "market-based" : "interventionist";
      const accept = isMarket
        ? ["market-based", "market based", "market-based supply-side", "market based supply side", "market-based supply-side policy", "market"]
        : ["interventionist", "interventionist supply-side", "interventionist supply side", "interventionist supply-side policy", "state interventionist"];

      const contextTag =
        tier === 1
          ? `To expand long-run productive capacity (\`LRAS\`), ${country}'s government announces a policy of **${item.text}**.`
          : tier === 2
            ? `Facing sluggish productivity growth and ${rng.int(4, 9)}% structural unemployment, ${country} implements a reform focused on **${item.text}**.`
            : `To shift \`LRAS\` rightwards without fuelling long-term inflation while balancing its ${rng.int(45, 92)}% Debt-to-GDP ratio, ${country} prioritises **${item.text}**.`;

      return {
        prompt: `${contextTag} Classify this supply-side policy as either **\`market-based\`** or **\`interventionist\`**.`,
        answer: { type: "text", accept, display: ans },
        hint: "Ask: is the state actively investing public funds in human capital, R&D, infrastructure, or SMEs (`interventionist`), or reducing intervention/taxes/regulation to rely on private incentives (`market-based`)?",
        solution: [
          `This measure is an example of **${item.pillar}**.`,
          `Therefore, it is ${isMarket ? "a" : "an"} **${ans}** supply-side policy.`,
        ],
      };
    },
  },
];
