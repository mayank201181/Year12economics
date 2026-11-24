import type { Drill } from "./types.ts";
import { big, clean, num, roundTo } from "./helpers.ts";

const TOPIC_ID = "5-hl-paper3-policy-quant";

function fmtSupply(c: number, d: number): string {
  if (c === 0) return `${d}P`;
  return c < 0 ? `-${Math.abs(c)} + ${d}P` : `${c} + ${d}P`;
}

export const drills: Drill[] = [
  // =========================================================================
  // DRILL 1: Linear Post-Tax Equilibrium (Pc, Pp, Qt) & Deadweight Loss
  // =========================================================================
  {
    id: `${TOPIC_ID}.linear-tax-equilibrium`,
    topicId: TOPIC_ID,
    title: "Linear Market Tax Equilibrium & DWL",
    level: 1,
    ibLevel: "HL",
    guideRef: "p3-micro-quantitative",
    generate(rng, tier) {
      // Slope pairs (b, d) paired with valid tax multiples so ΔPc and ΔQ are exact integers
      const pairs: Array<{ b: number; d: number; taxes: number[] }> = [
        { b: 2, d: 2, taxes: [4, 6, 8, 10] },
        { b: 2, d: 3, taxes: [5, 10] },
        { b: 3, d: 2, taxes: [5, 10] },
        { b: 2, d: 4, taxes: [3, 6, 9] },
        { b: 4, d: 2, taxes: [3, 6, 9] },
        { b: 3, d: 3, taxes: [4, 6, 8, 10] },
        { b: 2, d: 6, taxes: [4, 8, 12] },
        { b: 6, d: 2, taxes: [4, 8, 12] },
        { b: 4, d: 4, taxes: [4, 6, 8, 10] },
        { b: 4, d: 6, taxes: [5, 10] },
        { b: 6, d: 4, taxes: [5, 10] },
        { b: 3, d: 5, taxes: [8] },
        { b: 5, d: 3, taxes: [8] },
      ];
      const pick = rng.pick(pairs);
      const { b, d } = pick;
      const t = rng.pick(pick.taxes);
      const pe = rng.int(14, 34);
      const dPc = clean((t * d) / (b + d));
      const dPp = clean(t - dPc);
      const dQ = clean((t * b * d) / (b + d));
      const qe = rng.int(Math.max(45, dQ + 20), Math.max(140, dQ + 90));
      const a = clean(qe + b * pe);
      const c = clean(qe - d * pe);
      const pc = clean(pe + dPc);
      const pp = clean(pc - t);
      const qt = clean(qe - dQ);
      const cTax = clean(c - d * t);
      const dwl = clean(0.5 * t * dQ);
      const rev = clean(t * qt);

      const good = rng.pick(["bottled water", "coffee cups", "e-scooter rides", "cinema tickets", "fuel litres", "bus passes"]);
      const taxArticle = String(t).startsWith("8") || t === 11 ? "an" : "a";
      const eqIntro = `The market for ${good} has {{Q_d = ${a} - ${b}P}} and {{Q_s = ${fmtSupply(c, d)}}} (price in $, quantity in units). The government levies ${taxArticle} **$${t} per-unit specific indirect tax** on suppliers.`;

      if (tier === 1) {
        const askPp = rng.bool(0.4);
        if (askPp) {
          return {
            prompt: `${eqIntro} Calculate the post-tax **net price received by producers** {{P_p}} (in $).`,
            answer: { type: "number", value: pp, display: `$${num(pp)}` },
            hint: `Substitute (P − ${t}) for P in supply, solve for consumer price Pc, then subtract $${t} to find Pp.`,
            traps: [
              { spec: { type: "number", value: pc }, feedback: `$${num(pc)} is the consumer price Pc — subtract the $${t} tax to find producer price Pp.` },
              ...(pe !== pp ? [{ spec: { type: "number" as const, value: pe }, feedback: `$${num(pe)} is the pre-tax equilibrium price Pe.` }] : []),
            ],
            solution: [
              `Post-tax supply: {{Q_s' = ${fmtSupply(c, d).replace(`${d}P`, `${d}(P - ${t})`)} = ${fmtSupply(cTax, d)}}}.`,
              `Set {{${a} - ${b}P_c = ${fmtSupply(cTax, d).replace("P", "P_c")}}} → {{${b + d}P_c = ${a - cTax}}} → {{P_c = $${num(pc)}}}.`,
              `Net producer price: {{P_p = P_c - ${t} = $${num(pc)} - $${t} = $${num(pp)}}}.`,
            ],
          };
        }
        return {
          prompt: `${eqIntro} Calculate the post-tax **equilibrium price paid by consumers** {{P_c}} (in $).`,
          answer: { type: "number", value: pc, display: `$${num(pc)}` },
          hint: `Replace P with (P − ${t}) in Qs, simplify, then equate Qd and Qs'.`,
          traps: [
            { spec: { type: "number", value: pp }, feedback: `$${num(pp)} is the net producer price Pp; add $${t} to get consumer price Pc.` },
            { spec: { type: "number", value: clean(pe + t) }, feedback: `Consumers only bear the full $${t} tax if demand is perfectly inelastic.` },
          ],
          solution: [
            `Pre-tax equilibrium: {{${a} - ${b}P = ${fmtSupply(c, d)}}} → {{P_e = $${num(pe)}}}, {{Q_e = ${qe}}}.`,
            `Post-tax supply: {{Q_s' = ${fmtSupply(c, d).replace(`${d}P`, `${d}(P - ${t})`)} = ${fmtSupply(cTax, d)}}}.`,
            `Solve {{${a} - ${b}P_c = ${fmtSupply(cTax, d).replace("P", "P_c")}}} → {{${b + d}P_c = ${a - cTax}}} → {{P_c = $${num(pc)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        const askRev = rng.bool(0.5);
        if (askRev) {
          return {
            prompt: `${eqIntro} Calculate total **government tax revenue** (in $).`,
            answer: { type: "number", value: rev, display: `$${big(rev)}` },
            hint: `Solve for post-tax quantity Qt first, then multiply $${t} × Qt.`,
            traps: [
              { spec: { type: "number", value: clean(t * qe) }, feedback: `Multiply $${t} by post-tax quantity Qt (${qt}), not pre-tax quantity Qe (${qe}).` },
              ...(dwl !== rev ? [{ spec: { type: "number" as const, value: dwl }, feedback: `$${num(dwl)} is the deadweight welfare loss, not tax revenue.` }] : []),
            ],
            solution: [
              `Post-tax supply: {{Q_s' = ${fmtSupply(cTax, d)}}}. Equating to {{Q_d}}: {{${b + d}P_c = ${a - cTax}}} → {{P_c = $${num(pc)}}}.`,
              `Post-tax quantity: {{Q_t = ${a} - ${b}(${num(pc)}) = ${qt}}} units (cross-check {{P_p = $${num(pp)}}}).`,
              `Government tax revenue: {{$${t} * ${qt} = $${big(rev)}}}.`,
            ],
          };
        }
        return {
          prompt: `${eqIntro} Calculate the post-tax **equilibrium quantity** {{Q_t}} (in units).`,
          answer: { type: "number", value: qt, display: `${qt} units` },
          hint: `Find Qs' by substituting (P − ${t}), solve for Pc, then plug Pc into Qd.`,
          traps: [
            { spec: { type: "number", value: qe }, feedback: `${qe} units is the pre-tax quantity Qe before the $${t} tax contracts output.` },
          ],
          solution: [
            `Post-tax supply: {{Q_s' = ${fmtSupply(cTax, d)}}}.`,
            `Solve {{${a} - ${b}P_c = ${fmtSupply(cTax, d).replace("P", "P_c")}}} → {{P_c = $${num(pc)}}}.`,
            `Substitute into demand: {{Q_t = ${a} - ${b}(${num(pc)}) = ${qt}}} units.`,
          ],
        };
      }

      // Tier 3: Full multi-step deadweight welfare loss
      const consBurden = clean(dPc * qt);
      return {
        prompt: `${eqIntro} Calculate the **deadweight welfare loss (DWL)** created by the tax (in $).`,
        answer: { type: "number", value: dwl, display: `$${num(dwl)}` },
        hint: `Find pre-tax Qe and post-tax Qt, then apply DWL = 1/2 × t × (Qe − Qt).`,
        traps: [
          { spec: { type: "number", value: clean(t * dQ) }, feedback: `DWL is a triangle — multiply t × (Qe − Qt) by 1/2.` },
          ...(rev !== dwl ? [{ spec: { type: "number" as const, value: rev }, feedback: `$${big(rev)} is government tax revenue, not deadweight loss.` }] : []),
          ...(consBurden !== dwl && consBurden !== rev ? [{ spec: { type: "number" as const, value: consBurden }, feedback: `$${big(consBurden)} is the consumer tax burden, not deadweight loss.` }] : []),
        ],
        solution: [
          `Pre-tax equilibrium: {{${a} - ${b}P = ${fmtSupply(c, d)}}} → {{P_e = $${num(pe)}}}, {{Q_e = ${qe}}} units.`,
          `Post-tax supply: {{Q_s' = ${fmtSupply(cTax, d)}}} → {{P_c = $${num(pc)}}}, {{P_p = $${num(pp)}}}, {{Q_t = ${qt}}} units (output drops by {{${dQ}}}).`,
          `Deadweight welfare loss: {{DWL = 1/2 * ${t} * (${qe} - ${qt}) = 1/2 * ${t} * ${dQ} = $${num(dwl)}}}. (Tax incidence: buyers +$${num(dPc)}, sellers −$${num(dPp)}.)`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 2: Progressive Income Tax (Total Tax, ATR vs MTR)
  // =========================================================================
  {
    id: `${TOPIC_ID}.progressive-tax-rates`,
    topicId: TOPIC_ID,
    title: "Progressive Income Tax: Average vs Marginal Rate",
    level: 2,
    ibLevel: "HL",
    guideRef: "p3-macro-quantitative",
    generate(rng, tier) {
      const b1 = rng.pick([10, 12, 15, 18, 20]) * 1000;
      const w2 = rng.pick([20, 25, 30, 35, 40]) * 1000;
      const b2 = b1 + w2;
      const r2 = rng.pick([10, 12, 15, 18, 20]);
      const r3 = rng.pick([22, 25, 28, 30, 32].filter((r) => r >= r2 + 6));

      if (tier === 3) {
        // 4-bracket system: ask for MTR − ATR gap (percentage points) or ATR
        const w3 = rng.pick([25, 30, 40]) * 1000;
        const b3 = b2 + w3;
        const r4 = rng.pick([35, 38, 40, 45].filter((r) => r >= r3 + 5));
        const topSlice = rng.pick([10, 15, 20, 25, 30, 40]) * 1000;
        const income = b3 + topSlice;
        const t2 = clean((w2 * r2) / 100);
        const t3 = clean((w3 * r3) / 100);
        const t4 = clean((topSlice * r4) / 100);
        const totalTax = clean(t2 + t3 + t4);
        const atr = roundTo((totalTax / income) * 100, 2);
        const gap = roundTo(r4 - atr, 2);
        const askGap = rng.bool(0.5);

        const bracketsText = `**$0–$${big(b1)} at 0%**, **$${big(b1 + 1)}–$${big(b2)} at ${r2}%**, **$${big(b2 + 1)}–$${big(b3)} at ${r3}%**, and **above $${big(b3)} at ${r4}%**`;
        if (askGap) {
          return {
            prompt: `Income tax brackets are: ${bracketsText}. A worker earns **$${big(income)}**. Calculate by how many **percentage points** their marginal tax rate (MTR) exceeds their average tax rate (ATR) (to 2 d.p.).`,
            answer: { type: "number", value: gap, tolerance: 0.05, display: `${num(gap)} pp` },
            hint: `Compute total tax across all 4 brackets, find ATR = (Tax / Income) × 100%, then compute MTR (${r4}%) − ATR.`,
            traps: [
              ...(Math.abs(atr - gap) > 0.2 ? [{ spec: { type: "number" as const, value: atr, tolerance: 0.05 }, feedback: `${num(atr)}% is the average tax rate (ATR); subtract it from the ${r4}% marginal rate.` }] : []),
              ...(Math.abs(r4 - gap) > 0.2 ? [{ spec: { type: "number" as const, value: r4 }, feedback: `${r4}% is the marginal tax rate; subtract ATR (${num(atr)}%) to find the gap.` }] : []),
            ],
            solution: [
              `Tax by band: $0 + ($${big(w2)} × ${r2}% = $${big(t2)}) + ($${big(w3)} × ${r3}% = $${big(t3)}) + ($${big(topSlice)} × ${r4}% = $${big(t4)}) = $${big(totalTax)}.`,
              `Average tax rate (ATR) = ($${big(totalTax)} / $${big(income)}) × 100 = ${num(atr)}%.`,
              `Marginal tax rate (MTR) = ${r4}%. Gap = ${r4}% − ${num(atr)}% = ${num(gap)} percentage points.`,
            ],
          };
        }
        return {
          prompt: `Income tax brackets are: ${bracketsText}. Calculate the **average income tax rate (ATR)** (in %, to 2 d.p.) for a worker earning **$${big(income)}**.`,
          answer: { type: "number", value: atr, tolerance: 0.05, display: `${num(atr)}%` },
          hint: `Slice $${big(income)} into all 4 bands, sum the tax, then divide by $${big(income)} × 100%.`,
          traps: [
            { spec: { type: "number", value: r4 }, feedback: `${r4}% is the marginal tax rate (MTR), not the average tax rate (ATR).` },
            { spec: { type: "number", value: totalTax }, feedback: `$${big(totalTax)} is total tax paid in dollars; divide by $${big(income)} × 100% for ATR.` },
          ],
          solution: [
            `Tax by band: $0 + $${big(t2)} + $${big(t3)} + $${big(t4)} = $${big(totalTax)}.`,
            `ATR = ($${big(totalTax)} / $${big(income)}) × 100 = ${num(atr)}% (strictly below the ${r4}% MTR).`,
          ],
        };
      }

      // Tier 1 & Tier 2: 3-bracket progressive system
      const topSlice = rng.pick([10, 15, 20, 25, 30, 35, 40, 45]) * 1000;
      const income = b2 + topSlice;
      const t2 = clean((w2 * r2) / 100);
      const t3 = clean((topSlice * r3) / 100);
      const totalTax = clean(t2 + t3);
      const atr = roundTo((totalTax / income) * 100, 2);
      const flatError = clean((income * r3) / 100);
      const bracketsText = `**$0–$${big(b1)} at 0%**, **$${big(b1 + 1)}–$${big(b2)} at ${r2}%**, and **above $${big(b2)} at ${r3}%**`;

      if (tier === 1) {
        return {
          prompt: `Progressive income tax brackets are: ${bracketsText}. Calculate the **total income tax paid** (in $) by a household earning **$${big(income)}**.`,
          answer: { type: "number", value: totalTax, display: `$${big(totalTax)}` },
          hint: `Never multiply total income by ${r3}%. Compute tax on the $${big(w2)} middle slice at ${r2}% and the $${big(topSlice)} top slice at ${r3}%.`,
          traps: [
            { spec: { type: "number", value: flatError }, feedback: `Do not apply the ${r3}% top marginal rate to all $${big(income)} — slice bracket by bracket!` },
          ],
          solution: [
            `Band 1 ($0–$${big(b1)} at 0%): $0.`,
            `Band 2 ($${big(w2)} at ${r2}%): $${big(t2)}.`,
            `Band 3 ($${big(topSlice)} at ${r3}%): $${big(t3)}.`,
            `Total income tax = $${big(t2)} + $${big(t3)} = $${big(totalTax)}.`,
          ],
        };
      }

      // Tier 2: Average Tax Rate (%)
      return {
        prompt: `Progressive income tax brackets are: ${bracketsText}. Calculate the **average income tax rate (ATR)** (in %, to 2 d.p.) for a worker earning **$${big(income)}**.`,
        answer: { type: "number", value: atr, tolerance: 0.05, display: `${num(atr)}%` },
        hint: `Calculate total tax paid band by band, then divide by $${big(income)} and multiply by 100.`,
        traps: [
          { spec: { type: "number", value: r3 }, feedback: `${r3}% is the marginal tax rate (MTR); ATR is strictly lower under progressive taxation.` },
          { spec: { type: "number", value: totalTax }, feedback: `$${big(totalTax)} is total tax paid in dollars; divide by $${big(income)} × 100% for ATR.` },
        ],
        solution: [
          `Total income tax = $0 + ($${big(w2)} × ${r2}%) + ($${big(topSlice)} × ${r3}%) = $${big(t2)} + $${big(t3)} = $${big(totalTax)}.`,
          `Average tax rate = ($${big(totalTax)} / $${big(income)}) × 100 = ${num(atr)}% (strictly below the ${r3}% marginal rate).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 3: Keynesian Multiplier & Required ΔG to Close GDP Gap
  // =========================================================================
  {
    id: `${TOPIC_ID}.multiplier-fiscal-gap`,
    topicId: TOPIC_ID,
    title: "Keynesian Multiplier: Required ΔG to Close Output Gap",
    level: 2,
    ibLevel: "HL",
    guideRef: "p3-macro-quantitative",
    generate(rng, tier) {
      // Exact clean open-economy withdrawals MPW -> exact multiplier k
      const leakageConfigs: Array<{ mps: number; mpt: number; mpm: number; mpw: number; k: number }> = [
        { mps: 0.05, mpt: 0.10, mpm: 0.05, mpw: 0.20, k: 5 },
        { mps: 0.10, mpt: 0.10, mpm: 0.05, mpw: 0.25, k: 4 },
        { mps: 0.05, mpt: 0.10, mpm: 0.10, mpw: 0.25, k: 4 },
        { mps: 0.10, mpt: 0.05, mpm: 0.10, mpw: 0.25, k: 4 },
        { mps: 0.10, mpt: 0.15, mpm: 0.15, mpw: 0.40, k: 2.5 },
        { mps: 0.15, mpt: 0.15, mpm: 0.10, mpw: 0.40, k: 2.5 },
        { mps: 0.10, mpt: 0.20, mpm: 0.10, mpw: 0.40, k: 2.5 },
        { mps: 0.05, mpt: 0.15, mpm: 0.20, mpw: 0.40, k: 2.5 },
        { mps: 0.10, mpt: 0.20, mpm: 0.20, mpw: 0.50, k: 2 },
        { mps: 0.15, mpt: 0.15, mpm: 0.20, mpw: 0.50, k: 2 },
        { mps: 0.15, mpt: 0.20, mpm: 0.15, mpw: 0.50, k: 2 },
        { mps: 0.20, mpt: 0.15, mpm: 0.15, mpw: 0.50, k: 2 },
        { mps: 0.10, mpt: 0.15, mpm: 0.25, mpw: 0.50, k: 2 },
        { mps: 0.20, mpt: 0.25, mpm: 0.35, mpw: 0.80, k: 1.25 },
        { mps: 0.15, mpt: 0.25, mpm: 0.40, mpw: 0.80, k: 1.25 },
        { mps: 0.20, mpt: 0.30, mpm: 0.30, mpw: 0.80, k: 1.25 },
      ];
      const cfg = rng.pick(leakageConfigs);
      const mpcd = clean(1 - cfg.mpw);
      // Choose ΔG so gap = k * ΔG is always an exact integer
      const dgStep = cfg.k === 1.25 ? 4 : cfg.k === 2.5 ? 2 : 1;
      const dG = rng.int(3, 15) * dgStep;
      const gap = clean(cfg.k * dG);

      if (tier === 1) {
        return {
          prompt: `An open economy has {{MPS = ${cfg.mps}}}, {{MPT = ${cfg.mpt}}}, and {{MPM = ${cfg.mpm}}}, with a deflationary gap of **$${gap} billion**. Calculate the initial increase in government spending {{Delta G}} (in $ billion) required to close the gap.`,
          answer: { type: "number", value: dG, display: `$${dG} billion` },
          hint: `First sum MPW = MPS + MPT + MPM, invert to get k, then divide the $${gap} bn gap by k.`,
          traps: [
            { spec: { type: "number", value: clean(gap * cfg.k) }, feedback: `Divide the gap by k (${gap} / ${cfg.k}), rather than multiplying by k.` },
            ...(clean(gap * cfg.mps) !== dG ? [{ spec: { type: "number" as const, value: clean(gap * cfg.mps) }, feedback: `Include MPT and MPM alongside MPS when finding the multiplier.` }] : []),
          ],
          solution: [
            `Total marginal withdrawals: {{MPW = ${cfg.mps} + ${cfg.mpt} + ${cfg.mpm} = ${cfg.mpw}}}.`,
            `Spending multiplier: {{k = 1 / ${cfg.mpw} = ${cfg.k}}}.`,
            `Required initial injection: {{Delta G = ${gap} / ${cfg.k} = $${dG}}} billion.`,
          ],
        };
      }

      const y1 = rng.int(22, 75) * 10;
      if (tier === 2) {
        const yf = clean(y1 + gap);
        return {
          prompt: `An open economy has actual Real GDP of **$${y1} billion**, full-employment Real GDP of **$${yf} billion**, {{MPS = ${cfg.mps}}}, {{MPT = ${cfg.mpt}}}, and {{MPM = ${cfg.mpm}}}. Calculate the required initial increase in government spending {{Delta G}} (in $ billion) to reach full employment.`,
          answer: { type: "number", value: dG, display: `$${dG} billion` },
          hint: `Find the deflationary gap (Yf − Y1), compute k = 1 / (MPS + MPT + MPM), then compute ΔG = Gap / k.`,
          traps: [
            { spec: { type: "number", value: gap }, feedback: `$${gap} billion is the total output gap — divide by k = ${cfg.k} to find initial ΔG.` },
            { spec: { type: "number", value: clean(gap * cfg.k) }, feedback: `Divide the $${gap} bn gap by k = ${cfg.k} instead of multiplying.` },
          ],
          solution: [
            `Deflationary gap: {{Y_f - Y_1 = $${yf} - $${y1} = $${gap}}} billion.`,
            `Multiplier: {{k = 1 / (${cfg.mps} + ${cfg.mpt} + ${cfg.mpm}) = 1 / ${cfg.mpw} = ${cfg.k}}}.`,
            `Required {{Delta G = ${gap} / ${cfg.k} = $${dG}}} billion.`,
          ],
        };
      }

      // Tier 3: Inflationary gap cut OR tax-cut initial size!
      const isTaxCut = rng.bool(0.5);
      if (isTaxCut) {
        // Require clean ΔT such that ΔY = k * MPCd * ΔT -> choose ΔG_needed = MPCd * ΔT, wait: ask ΔY from a given tax cut ΔT!
        const dT = rng.pick([10, 15, 20, 25, 30, 40, 50]);
        const r1 = clean(mpcd * dT);
        const totalDeltaY = roundTo(cfg.k * r1, 2);
        const spendTrap = roundTo(cfg.k * dT, 2);
        return {
          prompt: `An economy has {{MPS = ${cfg.mps}}}, {{MPT = ${cfg.mpt}}}, and {{MPM = ${cfg.mpm}}} (so {{MPC_d = ${mpcd}}}). Authorities cut lump-sum income taxes by **$${dT} billion**, so households initially spend {{MPC_d * $${dT} billion}} domestically before multiplier rounds begin. Calculate the total resulting rise in **Real GDP** (in $ billion, to 2 d.p.).`,
          answer: { type: "number", value: totalDeltaY, tolerance: 0.05, display: `$${num(totalDeltaY)} billion` },
          hint: `Round 1 domestic spending injection is MPCd × $${dT} bn = $${num(r1)} bn; multiply that by k = 1 / MPW.`,
          traps: [
            ...(Math.abs(spendTrap - totalDeltaY) > 0.1 ? [{ spec: { type: "number" as const, value: spendTrap, tolerance: 0.05 }, feedback: `$${num(spendTrap)} bn would be the effect of direct ΔG; households leak ${clean(cfg.mpw * 100)}% of a tax cut in round 1.` }] : []),
            ...(Math.abs(r1 - totalDeltaY) > 0.1 ? [{ spec: { type: "number" as const, value: r1, tolerance: 0.05 }, feedback: `$${num(r1)} bn is only the round-1 injection; multiply by k = ${cfg.k}.` }] : []),
          ],
          solution: [
            `Multiplier: {{k = 1 / (${cfg.mps} + ${cfg.mpt} + ${cfg.mpm}) = ${cfg.k}}}.`,
            `Initial domestic spending injection from the tax cut: {{${mpcd} * $${dT} = $${num(r1)}}} billion.`,
            `Total increase in Real GDP: {{${cfg.k} * $${num(r1)} = $${num(totalDeltaY)}}} billion.`,
          ],
        };
      }

      const yfInf = clean(y1 - gap);
      return {
        prompt: `An overheating economy has actual Real GDP of **$${y1} billion** above full-employment Real GDP of **$${yfInf} billion**, with {{MPS = ${cfg.mps}}}, {{MPT = ${cfg.mpt}}}, and {{MPM = ${cfg.mpm}}}. Calculate the **reduction in government spending** (as a positive figure, in $ billion) needed to eliminate the inflationary gap.`,
        answer: { type: "number", value: dG, display: `$${dG} billion` },
        hint: `Find the inflationary gap (Y1 − Yf), calculate k = 1 / (MPS + MPT + MPM), then divide the gap by k.`,
        traps: [
          { spec: { type: "number", value: gap }, feedback: `$${gap} billion is the total inflationary gap; divide by k = ${cfg.k} to find the required cut in G.` },
        ],
        solution: [
          `Inflationary gap: {{Y_1 - Y_f = $${y1} - $${yfInf} = $${gap}}} billion.`,
          `Multiplier: {{k = 1 / (${cfg.mps} + ${cfg.mpt} + ${cfg.mpm}) = ${cfg.k}}}.`,
          `Required reduction in government spending: {{${gap} / ${cfg.k} = $${dG}}} billion.`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 4: Tariff Total Deadweight Welfare Loss (Prod DWL + Cons DWL)
  // =========================================================================
  {
    id: `${TOPIC_ID}.tariff-welfare-loss`,
    topicId: TOPIC_ID,
    title: "Tariff Total Deadweight Loss (Production + Consumption)",
    level: 3,
    ibLevel: "HL",
    guideRef: "p3-global-quantitative",
    generate(rng, tier) {
      const good = rng.pick(["steel", "rice", "solar panels", "sugar", "cotton", "aluminium", "timber"]);

      if (tier === 1) {
        const pw = rng.int(8, 35) * 10;
        const t = rng.pick([10, 20, 30, 40, 50, 60, 80]);
        const q1 = rng.int(15, 55);
        const dProd = rng.int(6, 26);
        let dCons = rng.int(8, 30);
        if (dCons === dProd) dCons += 2;
        const impPost = rng.int(20, 60);
        const q3 = q1 + dProd;
        const q4 = q3 + impPost;
        const q2 = q4 + dCons;

        const prodDwl = clean(0.5 * t * dProd);
        const consDwl = clean(0.5 * t * dCons);
        const totalDwl = clean(prodDwl + consDwl);
        const rev = clean(t * impPost);

        return {
          prompt: `The world price of ${good} is **$${pw}/tonne** (domestic supply {{Q_1 = ${q1}}}k tonnes, demand {{Q_2 = ${q2}}}k tonnes). A **$${t}/tonne specific tariff** shifts domestic supply to {{Q_3 = ${q3}}}k and demand to {{Q_4 = ${q4}}}k tonnes. Calculate the **total deadweight welfare loss** (in $ thousand).`,
          answer: { type: "number", value: totalDwl, display: `$${big(totalDwl)} thousand` },
          hint: `Add BOTH triangles: production DWL = 1/2 × t × (Q3 − Q1) and consumption DWL = 1/2 × t × (Q2 − Q4).`,
          traps: [
            { spec: { type: "number", value: prodDwl }, feedback: `$${big(prodDwl)}k is only production DWL; add the $${big(consDwl)}k consumption DWL triangle.` },
            { spec: { type: "number", value: consDwl }, feedback: `$${big(consDwl)}k is only consumption DWL; add the $${big(prodDwl)}k production DWL triangle.` },
            { spec: { type: "number", value: clean(totalDwl * 2) }, feedback: `Don't forget the 1/2 factor for both welfare-loss triangles!` },
            ...(rev !== totalDwl ? [{ spec: { type: "number" as const, value: rev }, feedback: `$${big(rev)}k is government tariff revenue, not deadweight welfare loss.` }] : []),
          ],
          solution: [
            `Production inefficiency DWL = {{1/2 * (${q3} - ${q1}) * $${t} = 1/2 * ${dProd} * ${t} = $${big(prodDwl)}}} thousand.`,
            `Consumption welfare loss DWL = {{1/2 * (${q2} - ${q4}) * $${t} = 1/2 * ${dCons} * ${t} = $${big(consDwl)}}} thousand.`,
            `Total deadweight welfare loss = {{$${big(prodDwl)} + $${big(consDwl)} = $${big(totalDwl)}}} thousand.`,
          ],
        };
      }

      // Tier 2 & Tier 3: Linear domestic market equations + world price + specific (T2) or ad valorem (T3) tariff
      const b = rng.int(2, 6);
      let d = rng.int(2, 6);
      if (d === b) d = b === 6 ? 4 : b + 1;
      const pw = rng.pick([20, 25, 30, 40, 50, 60, 80, 100]);
      const ratePct = rng.pick([10, 20, 25, 30, 40]);
      const t = tier === 2 ? rng.pick([4, 6, 8, 10, 12, 16, 20]) : clean((pw * ratePct) / 100);
      const pt = clean(pw + t);

      // Ensure Q1 >= 10 and Q4 >= Q3 + 15 so imports stay positive after tariff
      const q1 = rng.int(15, 45);
      const q3 = clean(q1 + d * t);
      const postImp = rng.int(20, 70);
      const q4 = clean(q3 + postImp);
      const q2 = clean(q4 + b * t);
      const a = clean(q2 + b * pw);
      const c = clean(q1 - d * pw);

      const prodDwl = clean(0.5 * d * t * t);
      const consDwl = clean(0.5 * b * t * t);
      const totalDwl = clean(prodDwl + consDwl);
      const rev = clean(t * postImp);

      if (tier === 2) {
        return {
          prompt: `A small economy's ${good} market has domestic demand {{Q_d = ${a} - ${b}P}} and domestic supply {{Q_s = ${fmtSupply(c, d)}}} (in thousand units, {{P}} in $). World price is **$${pw}**. A **$${num(t)} specific tariff** is imposed. Calculate the **total deadweight welfare loss** (in $ thousand).`,
          answer: { type: "number", value: totalDwl, display: `$${big(totalDwl)} thousand` },
          hint: `Evaluate Qs and Qd at Pw = $${pw} (giving Q1, Q2) and at Pw + t = $${num(pt)} (giving Q3, Q4), then sum both DWL triangles.`,
          traps: [
            { spec: { type: "number", value: prodDwl }, feedback: `$${big(prodDwl)}k is only production DWL; include the $${big(consDwl)}k consumption DWL too.` },
            { spec: { type: "number", value: consDwl }, feedback: `$${big(consDwl)}k is only consumption DWL; include the $${big(prodDwl)}k production DWL too.` },
            { spec: { type: "number", value: clean(totalDwl * 2) }, feedback: `Multiply triangular areas by 1/2.` },
          ],
          solution: [
            `At {{P_w = $${pw}}}: {{Q_1 = ${q1}}}k, {{Q_2 = ${q2}}}k.`,
            `At {{P_w + t = $${num(pt)}}}: {{Q_3 = ${q3}}}k (up by {{${clean(q3 - q1)}}}k), {{Q_4 = ${q4}}}k (down by {{${clean(q2 - q4)}}}k).`,
            `Prod DWL = {{1/2 * ${clean(q3 - q1)} * ${num(t)} = $${big(prodDwl)}}}k; Cons DWL = {{1/2 * ${clean(q2 - q4)} * ${num(t)} = $${big(consDwl)}}}k.`,
            `Total deadweight welfare loss = {{$${big(prodDwl)} + $${big(consDwl)} = $${big(totalDwl)}}} thousand.`,
          ],
        };
      }

      // Tier 3: Ad valorem tariff (%) on world price + linear domestic equations
      return {
        prompt: `Domestic ${good} demand is {{Q_d = ${a} - ${b}P}} and domestic supply is {{Q_s = ${fmtSupply(c, d)}}} (in thousand units, {{P}} in $). World price is **$${pw}**, and authorities impose a **${ratePct}% ad valorem tariff** (lifting domestic price to **$${num(pt)}**). Calculate the **total deadweight welfare loss** (in $ thousand).`,
        answer: { type: "number", value: totalDwl, display: `$${big(totalDwl)} thousand` },
        hint: `The per-unit tariff wedge is t = ${ratePct}% × $${pw} = $${num(t)}. Find Q1, Q2 at $${pw} and Q3, Q4 at $${num(pt)}, then sum both DWL triangles.`,
        traps: [
          { spec: { type: "number", value: prodDwl }, feedback: `$${big(prodDwl)}k is only production DWL; add the $${big(consDwl)}k consumption DWL triangle.` },
          { spec: { type: "number", value: consDwl }, feedback: `$${big(consDwl)}k is only consumption DWL; add the $${big(prodDwl)}k production DWL triangle.` },
          ...(rev !== totalDwl ? [{ spec: { type: "number" as const, value: rev }, feedback: `$${big(rev)}k is government tariff revenue, not deadweight welfare loss.` }] : []),
        ],
        solution: [
          `Specific wedge from ${ratePct}% tariff: {{t = ${ratePct}% * $${pw} = $${num(t)}}}, so domestic price rises to {{$${num(pt)}}}.`,
          `At {{P = $${pw}}}: {{Q_1 = ${q1}}}k, {{Q_2 = ${q2}}}k. At {{P = $${num(pt)}}}: {{Q_3 = ${q3}}}k, {{Q_4 = ${q4}}}k.`,
          `Prod DWL = {{1/2 * ${clean(q3 - q1)} * ${num(t)} = $${big(prodDwl)}}}k; Cons DWL = {{1/2 * ${clean(q2 - q4)} * ${num(t)} = $${big(consDwl)}}}k.`,
          `Total DWL = {{$${big(totalDwl)}}} thousand (and tariff revenue = {{$${big(rev)}}}k).`,
        ],
      };
    },
  },

  // =========================================================================
  // DRILL 5: Real GDP per Capita Growth Rate (Nominal + Deflator + Population)
  // =========================================================================
  {
    id: `${TOPIC_ID}.real-gdp-per-capita-growth`,
    topicId: TOPIC_ID,
    title: "Real GDP per Capita Growth Rate Chain",
    level: 3,
    ibLevel: "HL",
    guideRef: "p3-macro-quantitative",
    generate(rng, tier) {
      const pop1 = rng.pick([5, 8, 10, 12, 15, 20, 25]);
      const pc1Base = rng.pick([12, 15, 16, 18, 20, 24, 25, 30]); // $ thousand
      const real1Base = clean(pop1 * pc1Base); // $ billion
      const def1 = tier === 1 ? 100 : rng.pick([100, 104, 105, 110, 115, 120, 125]);
      const nom1 = roundTo((real1Base * def1) / 100, 1);

      const popGrowthPct = rng.pick([2, 3, 4, 5, 6, 8]);
      const pop2 = roundTo(pop1 * (1 + popGrowthPct / 100), 2);
      const defJump = rng.pick([4, 5, 6, 8, 10, 12, 15]);
      const def2 = clean(def1 + defJump);

      // Tier 3 can include negative real per-capita growth (inflation + pop growth > nominal growth)
      const nomJumpPct =
        tier === 3
          ? rng.pick([3, 5, 7, 9, 11, 14, 17, 20])
          : rng.pick([10, 12, 14, 16, 18, 20, 22, 25]);
      const nom2 = roundTo(nom1 * (1 + nomJumpPct / 100), 1);

      // Compute exact target strictly from displayed numbers
      const real1 = (nom1 / def1) * 100;
      const real2 = (nom2 / def2) * 100;
      const pc1 = real1 / pop1;
      const pc2 = real2 / pop2;
      const growth = roundTo(((pc2 - pc1) / pc1) * 100, 2);
      const realGrowth = roundTo(((real2 - real1) / real1) * 100, 2);
      const nomGrowth = roundTo(((nom2 - nom1) / nom1) * 100, 2);

      const country = rng.pick(["Veridia", "Aurelia", "Novaria", "Coralia", "Meridia", "Valoria", "Solara"]);

      const traps = [];
      if (Math.abs(realGrowth - growth) > 0.3) {
        traps.push({
          spec: { type: "number" as const, value: realGrowth, tolerance: 0.05 },
          feedback: `${num(realGrowth)}% is total Real GDP growth — remember to divide each year's Real GDP by its population first!`,
        });
      }
      if (Math.abs(nomGrowth - growth) > 0.3 && Math.abs(nomGrowth - realGrowth) > 0.3) {
        traps.push({
          spec: { type: "number" as const, value: nomGrowth, tolerance: 0.05 },
          feedback: `${num(nomGrowth)}% is Nominal GDP growth — strip out BOTH inflation (via the deflator) and population growth.`,
        });
      }

      const fmtSign = (v: number) => (v > 0 ? `+${num(v)}%` : `${num(v)}%`);

      return {
        prompt: `${country}'s accounts show:\n- **Year 1:** Nominal GDP = **$${num(nom1)} bn**, GDP deflator = **${def1}**, Population = **${num(pop1)} m**\n- **Year 2:** Nominal GDP = **$${num(nom2)} bn**, GDP deflator = **${def2}**, Population = **${num(pop2)} m**\n\nCalculate the percentage growth in **Real GDP per capita** from Year 1 to Year 2 (in %, to 2 d.p.; include a minus sign if negative).`,
        answer: { type: "number", value: growth, tolerance: 0.05, display: `${num(growth)}%` },
        hint: `Compute Real GDP = (Nominal / Deflator) × 100 for both years, divide each by its population, then find [(PC2 − PC1) / PC1] × 100%.`,
        traps,
        solution: [
          `Year 1 Real GDP = {{(${num(nom1)} / ${def1}) * 100 = $${num(roundTo(real1, 2))}}} bn → per capita = {{$${num(roundTo(pc1, 3))}}} thousand.`,
          `Year 2 Real GDP = {{(${num(nom2)} / ${def2}) * 100 = $${num(roundTo(real2, 2))}}} bn → per capita = {{$${num(roundTo(pc2, 3))}}} thousand.`,
          `Real GDP per capita growth = {{((${num(roundTo(pc2, 3))} - ${num(roundTo(pc1, 3))}) / ${num(roundTo(pc1, 3))}) * 100 = ${fmtSign(growth)}}}.`,
        ],
      };
    },
  },
];
