import type { Drill, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { big, clean, num, roundTo } from "./helpers.ts";

const COUNTRIES = [
  "Aldoria", "Belmont", "Caldera", "Dovania", "Elaria",
  "Frelia", "Galdor", "Halcyon", "Iveria", "Kaldor",
  "Lumina", "Marovia", "Nordia", "Orlandia", "Palmyra",
  "Quoria", "Rivenia", "Solvania", "Taldor", "Valoria",
];

function safeTraps(ans: number, tol: number, candidates: Array<{ value: number; feedback: string }>): Trap[] {
  const out: Trap[] = [];
  const seen = new Set<number>();
  for (const c of candidates) {
    const v = clean(c.value);
    if (!Number.isFinite(v)) continue;
    if (Math.abs(v - ans) <= Math.max(tol, 0.02) + 0.05) continue;
    if (seen.has(v)) continue;
    seen.add(v);
    out.push({ spec: { type: "number", value: v, tolerance: tol > 0 ? tol : undefined }, feedback: c.feedback });
  }
  return out;
}

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: EXPENDITURE GDP (C + I + G + X − M) & GNI CALCULATIONS (SL)
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives.gdp-gni-expenditure",
    topicId: "3a-macro-activity-objectives",
    title: "Expenditure GDP & GNI Calculations",
    level: 1,
    ibLevel: "SL",
    guideRef: "measuring-macro-activity",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const country = rng.pick(COUNTRIES);
      const C = rng.int(16, 65) * 10;
      const I = rng.int(5, 24) * 5;
      const G = rng.int(8, 30) * 5;
      const X = rng.int(6, 28) * 5;
      const M = rng.int(6, 28) * 5;
      const nx = X - M;
      const gdp = C + I + G + nx;

      if (tier === 1) {
        const includeTransfers = rng.bool(0.5);
        const transfers = rng.int(3, 12) * 5;
        const extraText = includeTransfers
          ? `, State pension transfers = $${transfers} bn`
          : "";
        const traps = safeTraps(gdp, 0, [
          { value: C + I + G + X + M, feedback: "Imports (M) must be *subtracted* from exports (X − M), not added!" },
          { value: C + I + G, feedback: "Include net exports (X − M) alongside C + I + G." },
          ...(includeTransfers
            ? [{ value: gdp + transfers, feedback: "Exclude government transfer payments — no current output is produced in exchange!" }]
            : []),
        ]);
        return {
          prompt: `${country} records (in $ billions): C = $${C} bn, I = $${I} bn, G (purchases of goods & services) = $${G} bn${extraText}, X = $${X} bn, and M = $${M} bn. Calculate **GDP** (in $ billions).`,
          answer: { type: "number", value: gdp, display: `$${gdp} billion` },
          traps,
          hint: includeTransfers
            ? "Use GDP = C + I + G + (X − M) and exclude transfer payments."
            : "Apply GDP = C + I + G + (X − M); remember net exports can be negative.",
          solution: [
            ...(includeTransfers ? [`Exclude transfer payments ($${transfers} bn) because they redistribute income without current output.`] : []),
            `Net exports (X − M) = ${X} − ${M} = ${num(nx)} ($ bn).`,
            `GDP = ${C} + ${I} + ${G} + (${num(nx)}) = **$${gdp} billion**.`,
          ],
        };
      }

      const npia = rng.nonZero(-10, 10) * 5;
      const gni = gdp + npia;

      if (tier === 2) {
        const transfers = rng.int(4, 14) * 5;
        const npiaStr = npia >= 0 ? `+$${npia} bn` : `−$${Math.abs(npia)} bn`;
        const traps = safeTraps(gni, 0, [
          { value: gdp, feedback: `You found GDP ($${gdp} bn) — now add Net Property Income from Abroad (${npiaStr}) to get GNI!` },
          { value: gdp - npia, feedback: "Check the sign of Net Property Income from Abroad: GNI = GDP + NPIA." },
          { value: gni + transfers, feedback: "Transfer payments are excluded from both GDP and GNI!" },
        ]);
        return {
          prompt: `${country} reports (in $ billions): C = $${C} bn, I = $${I} bn, G = $${G} bn, Unemployment transfers = $${transfers} bn, X = $${X} bn, M = $${M} bn, and Net Property Income from Abroad = ${npiaStr}. Calculate **GNI** (in $ billions).`,
          answer: { type: "number", value: gni, display: `$${gni} billion` },
          traps,
          hint: "Ignore transfers, calculate GDP = C + I + G + (X − M), then add Net Property Income from Abroad.",
          solution: [
            `Exclude unemployment transfers ($${transfers} bn).`,
            `GDP = ${C} + ${I} + ${G} + (${X} − ${M}) = $${gdp} bn.`,
            `GNI = GDP + Net Property Income from Abroad = ${gdp} + (${num(npia)}) = **$${gni} billion**.`,
          ],
        };
      }

      // Tier 3: Reverse-solve missing component (I or M) from GNI & NPIA + distractor transfers
      const solveFor = rng.pick(["I", "M"] as const);
      const transfers = rng.int(4, 15) * 5;
      const npiaStr = npia >= 0 ? `+$${npia} bn` : `−$${Math.abs(npia)} bn`;

      if (solveFor === "I") {
        const traps = safeTraps(I, 0, [
          { value: I + npia, feedback: "Convert GNI to GDP first (GDP = GNI − NPIA) before solving for Investment (I)!" },
          { value: I - transfers, feedback: "Do not include transfer payments inside G when solving for I." },
        ]);
        return {
          prompt: `${country} has **GNI = $${gni} bn** and Net Property Income from Abroad = ${npiaStr}. Its expenditure accounts show C = $${C} bn, G (goods & services) = $${G} bn, Welfare transfers = $${transfers} bn, X = $${X} bn, and M = $${M} bn. Calculate **Investment (I)** (in $ billions).`,
          answer: { type: "number", value: I, display: `$${I} billion` },
          traps,
          hint: "Step 1: Find GDP = GNI − Net Property Income from Abroad. Step 2: Rearrange GDP = C + I + G + (X − M) for I.",
          solution: [
            `GDP = GNI − NPIA = ${gni} − (${num(npia)}) = $${gdp} bn.`,
            `Exclude welfare transfers ($${transfers} bn).`,
            `I = GDP − C − G − (X − M) = ${gdp} − ${C} − ${G} − (${num(nx)}) = **$${I} billion**.`,
          ],
        };
      }

      const traps = safeTraps(M, 0, [
        { value: M - npia, feedback: "Convert GNI to GDP first (GDP = GNI − NPIA) before solving for Imports (M)!" },
        { value: M + transfers, feedback: "Exclude welfare transfers from G — they do not belong in the GDP identity." },
      ]);
      return {
        prompt: `${country} has **GNI = $${gni} bn** and Net Property Income from Abroad = ${npiaStr}. Its expenditure accounts show C = $${C} bn, I = $${I} bn, G (goods & services) = $${G} bn, Welfare transfers = $${transfers} bn, and X = $${X} bn. Calculate **Imports (M)** (in $ billions).`,
        answer: { type: "number", value: M, display: `$${M} billion` },
        traps,
        hint: "Step 1: Find GDP = GNI − NPIA. Step 2: Rearrange GDP = C + I + G + X − M to isolate M.",
        solution: [
          `GDP = GNI − NPIA = ${gni} − (${num(npia)}) = $${gdp} bn.`,
          `Exclude welfare transfers ($${transfers} bn).`,
          `M = C + I + G + X − GDP = ${C} + ${I} + ${G} + ${X} − ${gdp} = **$${M} billion**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: REAL GDP FROM NOMINAL GDP & DEFLATOR + % REAL GROWTH (SL)
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives.real-gdp-deflator-growth",
    topicId: "3a-macro-activity-objectives",
    title: "Real GDP, GDP Deflator & Real Growth Rate",
    level: 2,
    ibLevel: "SL",
    guideRef: "measuring-macro-activity",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const realGdp = rng.int(16, 90) * 10;
        const deflator = rng.pick([102, 104, 105, 108, 110, 112, 115, 120, 125, 130, 95, 96]);
        const nomGdp = clean((realGdp * deflator) / 100);
        const wrongMul = roundTo((nomGdp * deflator) / 100, 1);
        const traps = safeTraps(realGdp, 0.05, [
          { value: wrongMul, feedback: "Divide Nominal GDP by the GDP deflator (× 100) rather than multiplying by it!" },
        ]);
        return {
          prompt: `In 2025, ${country}'s Nominal GDP is **$${num(nomGdp)} billion** and its GDP deflator (base year = 100) is **${deflator}**. Calculate ${country}'s **Real GDP** (in $ billions).`,
          answer: { type: "number", value: realGdp, tolerance: 0.05, display: `$${realGdp} billion` },
          traps,
          hint: "Real GDP = (Nominal GDP ÷ GDP Deflator) × 100.",
          solution: [
            "Apply Real GDP = (Nominal GDP ÷ GDP Deflator) × 100.",
            `Real GDP = {{(${num(nomGdp)} / ${deflator}) * 100}} = **$${realGdp} billion**.`,
          ],
        };
      }

      if (tier === 2) {
        const r1 = rng.int(20, 80) * 10;
        const delta = rng.nonZero(-12, 18) * 5;
        const r2 = r1 + delta;
        const growth = roundTo(((r2 - r1) / r1) * 100, 2);
        const wrongDenom = roundTo(((r2 - r1) / r2) * 100, 2);
        const traps = safeTraps(growth, 0.02, [
          { value: wrongDenom, feedback: "Divide the change in Real GDP by *Year 1* Real GDP, not Year 2 Real GDP!" },
          { value: delta, feedback: "Give the percentage growth rate (%), not the raw $ billion change." },
        ]);
        return {
          prompt: `${country}'s Real GDP changes from **$${r1} billion** in Year 1 to **$${r2} billion** in Year 2. Calculate the annual **real economic growth rate** (%), rounded to **2 decimal places** (include a minus sign if negative).`,
          answer: { type: "number", value: growth, tolerance: 0.02, display: `${num(growth)}%` },
          traps,
          hint: "Real growth rate = ((Real GDP₂ − Real GDP₁) ÷ Real GDP₁) × 100.",
          solution: [
            `Change in Real GDP = ${r2} − ${r1} = ${num(delta)} ($ bn).`,
            `Growth rate = {{(${num(delta)} / ${r1}) * 100}} = **${num(growth)}%**.`,
          ],
        };
      }

      // Tier 3: Two-year Nominal GDP & GDP Deflator → Real GDP both years → Real growth %
      const r1 = rng.int(20, 65) * 10;
      const delta = rng.nonZero(-8, 14) * 5;
      const r2 = r1 + delta;
      const d1 = rng.pick([100, 104, 105, 108, 110, 112, 115]);
      const d2 = d1 + rng.pick([4, 5, 6, 8, 10, 12]);
      const nom1 = clean((r1 * d1) / 100);
      const nom2 = clean((r2 * d2) / 100);
      const realGrowth = roundTo(((r2 - r1) / r1) * 100, 2);
      const nomGrowth = roundTo(((nom2 - nom1) / nom1) * 100, 2);

      const traps = safeTraps(realGrowth, 0.02, [
        { value: nomGrowth, feedback: "That is the *nominal* GDP growth rate — deflate both years into Real GDP first!" },
      ]);
      return {
        prompt: `In Year 1, ${country}'s Nominal GDP is **$${num(nom1)} bn** (GDP deflator = **${d1}**). In Year 2, Nominal GDP is **$${num(nom2)} bn** (GDP deflator = **${d2}**). Calculate ${country}'s **real economic growth rate** (%) to **2 decimal places**.`,
        answer: { type: "number", value: realGrowth, tolerance: 0.02, display: `${num(realGrowth)}%` },
        traps,
        hint: "Deflate Year 1 and Year 2 separately into Real GDP, then compute ((Real₂ − Real₁) ÷ Real₁) × 100.",
        solution: [
          `Real GDP (Year 1) = {{(${num(nom1)} / ${d1}) * 100}} = $${r1} bn.`,
          `Real GDP (Year 2) = {{(${num(nom2)} / ${d2}) * 100}} = $${r2} bn.`,
          `Real growth rate = {{((${r2} - ${r1}) / ${r1}) * 100}} = **${num(realGrowth)}%**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: WEIGHTED CPI BASKET & ANNUAL INFLATION RATE (SL)
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives.weighted-cpi-inflation",
    topicId: "3a-macro-activity-objectives",
    title: "Weighted CPI Basket & Inflation Rate",
    level: 2,
    ibLevel: "SL",
    guideRef: "macro-objectives-phillips-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const cpi1 = rng.int(105, 165);
        const diff = rng.nonZero(-6, 14);
        const cpi2 = cpi1 + diff;
        const inf = roundTo(((cpi2 - cpi1) / cpi1) * 100, 2);
        const traps = safeTraps(inf, 0.02, [
          { value: diff, feedback: "Don't just subtract CPI₂ − CPI₁! Always divide the change by Year 1's CPI." },
        ]);
        return {
          prompt: `${country}'s Consumer Price Index (CPI) moves from **${cpi1}.0** in Year 1 to **${cpi2}.0** in Year 2. Calculate the annual **inflation rate** (%) to **2 decimal places** (use a minus sign for deflation).`,
          answer: { type: "number", value: inf, tolerance: 0.02, display: `${num(inf)}%` },
          traps,
          hint: "Inflation rate = ((CPI₂ − CPI₁) ÷ CPI₁) × 100.",
          solution: [
            `Change in CPI = ${cpi2} − ${cpi1} = ${num(diff)}.`,
            `Inflation rate = {{(${num(diff)} / ${cpi1}) * 100}} = **${num(inf)}%**.`,
          ],
        };
      }

      const weightSets: Array<[number, number, number]> = [
        [30, 50, 20],
        [25, 50, 25],
        [40, 40, 20],
        [35, 45, 20],
        [20, 55, 25],
        [30, 45, 25],
        [25, 45, 30],
        [35, 40, 25],
      ];
      const [w1, w2, w3] = rng.pick(weightSets);

      if (tier === 2) {
        const idx1 = rng.int(96, 132);
        const idx2 = rng.int(98, 128);
        const idx3 = rng.int(95, 135);
        const cpi = roundTo((w1 * idx1 + w2 * idx2 + w3 * idx3) / 100, 2);
        const unweighted = roundTo((idx1 + idx2 + idx3) / 3, 2);
        const traps = safeTraps(cpi, 0.05, [
          { value: unweighted, feedback: "That is the unweighted simple average — multiply each category index by its expenditure weight!" },
        ]);
        return {
          prompt: `${country}'s CPI basket has three categories: **Food** (weight ${w1}%, index ${idx1}), **Housing** (weight ${w2}%, index ${idx2}), and **Transport** (weight ${w3}%, index ${idx3}). Calculate the **weighted CPI** (to 2 decimal places).`,
          answer: { type: "number", value: cpi, tolerance: 0.05, display: num(cpi) },
          traps,
          hint: "Multiply each category index by its decimal weight and sum all three terms.",
          solution: [
            `Food: ${num(w1 / 100)} × ${idx1} = ${num(roundTo((w1 * idx1) / 100, 2))}.`,
            `Housing: ${num(w2 / 100)} × ${idx2} = ${num(roundTo((w2 * idx2) / 100, 2))}.`,
            `Transport: ${num(w3 / 100)} × ${idx3} = ${num(roundTo((w3 * idx3) / 100, 2))}.`,
            `Weighted CPI = **${num(cpi)}**.`,
          ],
        };
      }

      // Tier 3: Two-year 3-category weighted CPI → annual inflation rate %
      const a1 = rng.int(102, 124);
      const b1 = rng.int(104, 126);
      const c1 = rng.int(100, 128);
      const a2 = a1 + rng.int(-3, 12);
      const b2 = b1 + rng.int(1, 10);
      const c2 = c1 + rng.int(-4, 14);
      const cpi1 = clean((w1 * a1 + w2 * b1 + w3 * c1) / 100);
      const cpi2 = clean((w1 * a2 + w2 * b2 + w3 * c2) / 100);
      const inf = roundTo(((cpi2 - cpi1) / cpi1) * 100, 2);
      const pointDiff = roundTo(cpi2 - cpi1, 2);

      const traps = safeTraps(inf, 0.02, [
        { value: pointDiff, feedback: "You found the CPI point change (CPI₂ − CPI₁) — divide by Year 1's CPI and multiply by 100!" },
      ]);
      return {
        prompt: `${country}'s CPI weights are **Food ${w1}%**, **Housing ${w2}%**, and **Transport ${w3}%**. Year 1 indices are Food = ${a1}, Housing = ${b1}, Transport = ${c1}. Year 2 indices are Food = ${a2}, Housing = ${b2}, Transport = ${c2}. Calculate the annual **CPI inflation rate** (%) to **2 decimal places**.`,
        answer: { type: "number", value: inf, tolerance: 0.02, display: `${num(inf)}%` },
        traps,
        hint: "Compute weighted CPI for Year 1 and Year 2 separately, then calculate ((CPI₂ − CPI₁) ÷ CPI₁) × 100.",
        solution: [
          `CPI (Year 1) = (${num(w1 / 100)}×${a1}) + (${num(w2 / 100)}×${b1}) + (${num(w3 / 100)}×${c1}) = ${num(cpi1)}.`,
          `CPI (Year 2) = (${num(w1 / 100)}×${a2}) + (${num(w2 / 100)}×${b2}) + (${num(w3 / 100)}×${c2}) = ${num(cpi2)}.`,
          `Inflation rate = {{((${num(cpi2)} - ${num(cpi1)}) / ${num(cpi1)}) * 100}} = **${num(inf)}%**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: UNEMPLOYMENT RATE, LFPR & DISCOURAGED WORKERS (SL)
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives.unemployment-labour-force",
    topicId: "3a-macro-activity-objectives",
    title: "Unemployment Rate & Labour Force Participation",
    level: 1,
    ibLevel: "SL",
    guideRef: "macro-objectives-phillips-hl",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const country = rng.pick(COUNTRIES);

      if (tier === 1) {
        const lf = rng.int(8, 45);
        const uRateInt = rng.int(3, 14);
        const unemp = clean((lf * uRateInt) / 100);
        const emp = clean(lf - unemp);
        const wrongEmpDenom = roundTo((unemp / emp) * 100, 2);
        const traps = safeTraps(uRateInt, 0.05, [
          { value: wrongEmpDenom, feedback: "Divide Unemployed by the total *Labour Force* (Employed + Unemployed), not by Employed alone!" },
        ]);
        return {
          prompt: `${country} has **${num(emp)} million** employed workers and **${num(unemp)} million** unemployed workers actively seeking jobs. Calculate ${country}'s **unemployment rate** (%).`,
          answer: { type: "number", value: uRateInt, tolerance: 0.05, display: `${uRateInt}%` },
          traps,
          hint: "Labour Force = Employed + Unemployed; then Unemployment Rate = (Unemployed ÷ Labour Force) × 100.",
          solution: [
            `Labour Force = ${num(emp)} + ${num(unemp)} = ${lf} million.`,
            `Unemployment Rate = {{(${num(unemp)} / ${lf}) * 100}} = **${uRateInt}%**.`,
          ],
        };
      }

      if (tier === 2) {
        const wap = rng.int(16, 60);
        const lfprPct = rng.pick([65, 70, 72, 75, 76, 80, 82, 85]);
        const lf = clean((wap * lfprPct) / 100);
        const uRateTarget = rng.int(4, 12);
        const unemp = roundTo((lf * uRateTarget) / 100, 2);
        const emp = clean(lf - unemp);
        const inactive = clean(wap - lf);
        const askLfpr = rng.bool(0.5);

        if (askLfpr) {
          const empOnlyRate = roundTo((emp / wap) * 100, 2);
          const uActual = roundTo((unemp / lf) * 100, 2);
          const traps = safeTraps(lfprPct, 0.05, [
            { value: empOnlyRate, feedback: "The Labour Force includes BOTH employed and unemployed active job-seekers!" },
            { value: uActual, feedback: "That is the unemployment rate — this question asks for the Labour Force Participation Rate!" },
          ]);
          return {
            prompt: `${country} has a working-age population of **${wap} million**, with **${num(emp)} million** employed, **${num(unemp)} million** unemployed (actively seeking work), and **${num(inactive)} million** economically inactive. Calculate the **Labour Force Participation Rate** (%) to **1 decimal place**.`,
            answer: { type: "number", value: lfprPct, tolerance: 0.1, display: `${lfprPct}%` },
            traps,
            hint: "LFPR = ((Employed + Unemployed) ÷ Working-Age Population) × 100.",
            solution: [
              `Labour Force = ${num(emp)} + ${num(unemp)} = ${num(lf)} million.`,
              `LFPR = {{(${num(lf)} / ${wap}) * 100}} = **${lfprPct}%**.`,
            ],
          };
        }

        const uRate = roundTo((unemp / lf) * 100, 2);
        const wrongWapDenom = roundTo((unemp / wap) * 100, 2);
        const traps = safeTraps(uRate, 0.02, [
          { value: wrongWapDenom, feedback: "Exclude economically inactive people! Divide Unemployed by the Labour Force, not the entire working-age population." },
        ]);
        return {
          prompt: `${country} has **${num(emp)} million** employed workers, **${num(unemp)} million** unemployed active job-seekers, and **${num(inactive)} million** economically inactive working-age adults. Calculate the **unemployment rate** (%) to **2 decimal places**.`,
          answer: { type: "number", value: uRate, tolerance: 0.02, display: `${num(uRate)}%` },
          traps,
          hint: "Exclude inactive adults: Labour Force = Employed + Unemployed.",
          solution: [
            `Labour Force = ${num(emp)} + ${num(unemp)} = ${num(lf)} million (exclude ${num(inactive)}m inactive).`,
            `Unemployment Rate = {{(${num(unemp)} / ${num(lf)}) * 100}} = **${num(uRate)}%**.`,
          ],
        };
      }

      // Tier 3: Discouraged-worker + layoff shock → new official unemployment rate (%)
      const emp0 = rng.int(150, 360) / 10;
      const unemp0 = rng.int(16, 42) / 10;
      const laidOff = rng.int(2, 8) / 10;
      const maxDisc = Math.min(14, Math.floor((unemp0 + laidOff) * 10) - 4);
      const discouraged = rng.int(3, Math.max(4, maxDisc)) / 10;

      const emp1 = clean(emp0 - laidOff);
      const unemp1 = clean(unemp0 + laidOff - discouraged);
      const lf1 = clean(emp1 + unemp1);
      const lf0 = clean(emp0 + unemp0);
      const newRate = roundTo((unemp1 / lf1) * 100, 2);
      const wrongSameLf = roundTo((unemp1 / lf0) * 100, 2);
      const wrongKeepDisc = roundTo(((unemp0 + laidOff) / lf0) * 100, 2);

      const traps = safeTraps(newRate, 0.02, [
        { value: wrongSameLf, feedback: "Discouraged workers also *leave* the Labour Force denominator — update Labour Force before dividing!" },
        { value: wrongKeepDisc, feedback: "Under ILO rules, discouraged workers who stop searching are removed from the unemployed count and labour force." },
      ]);

      return {
        prompt: `${country} starts with **${num(emp0)} m** employed and **${num(unemp0)} m** unemployed workers. Over the quarter, **${num(laidOff)} m** employed workers lose their jobs and actively seek work, while **${num(discouraged)} m** unemployed workers become discouraged and stop searching. Calculate the **new official unemployment rate** (%) to **2 decimal places**.`,
        answer: { type: "number", value: newRate, tolerance: 0.02, display: `${num(newRate)}%` },
        traps,
        hint: "Update Employed (− layoffs), update Unemployed (+ layoffs − discouraged), then divide by the new Labour Force.",
        solution: [
          `New Employed = ${num(emp0)} − ${num(laidOff)} = ${num(emp1)} m.`,
          `New Unemployed = ${num(unemp0)} + ${num(laidOff)} − ${num(discouraged)} = ${num(unemp1)} m.`,
          `New Labour Force = ${num(emp1)} + ${num(unemp1)} = ${num(lf1)} m.`,
          `New Unemployment Rate = {{(${num(unemp1)} / ${num(lf1)}) * 100}} = **${num(newRate)}%**.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: [HL] MULTI-BRACKET PROGRESSIVE INCOME TAX & ATR / INDIRECT TAX
  // ===========================================================================
  {
    id: "3a-macro-activity-objectives.progressive-income-tax-hl",
    topicId: "3a-macro-activity-objectives",
    title: "[HL] Progressive Income Tax & Average Tax Rate",
    level: 3,
    ibLevel: "HL",
    guideRef: "inequality-lorenz-taxation",
    generate(rng: Rng, tier: 1 | 2 | 3) {
      const country = rng.pick(COUNTRIES);
      const b1 = rng.pick([10000, 12000, 15000, 20000]);
      const b2 = b1 + rng.pick([20000, 25000, 30000]);
      const r2 = rng.pick([10, 12, 15, 18, 20]);
      const r3 = r2 + rng.pick([10, 12, 15, 18, 20]);

      if (tier === 1) {
        const excess = rng.int(1, 8) * 5000;
        const income = b2 + excess;
        const tax2 = clean(((b2 - b1) * r2) / 100);
        const tax3 = clean((excess * r3) / 100);
        const totalTax = clean(tax2 + tax3);
        const flatTopTrap = clean((income * r3) / 100);
        const traps = safeTraps(totalTax, 0.5, [
          { value: flatTopTrap, feedback: `Never multiply total income by ${r3}%! Tax each bracket slice separately.` },
        ]);
        return {
          prompt: `[HL] ${country} applies progressive tax brackets: **0%** on $0–$${big(b1)}, **${r2}%** on $${big(b1 + 1)}–$${big(b2)}, and **${r3}%** above $${big(b2)}. Calculate the **total income tax** (in $) paid by a worker earning **$${big(income)}**.`,
          answer: { type: "number", value: totalTax, display: `$${big(totalTax)}` },
          traps,
          hint: "Slice income into three bands (0%, middle rate, top rate) and sum the tax from each slice.",
          solution: [
            `Bracket 1 ($0–$${big(b1)}): $${big(b1)} × 0% = $0.`,
            `Bracket 2 ($${big(b1 + 1)}–$${big(b2)}): $${big(b2 - b1)} × ${r2}% = $${big(tax2)}.`,
            `Bracket 3 (above $${big(b2)}): $${big(excess)} × ${r3}% = $${big(tax3)}.`,
            `Total income tax = $0 + $${big(tax2)} + $${big(tax3)} = **$${big(totalTax)}**.`,
          ],
        };
      }

      if (tier === 2) {
        const excess = rng.int(2, 10) * 5000;
        const income = b2 + excess;
        const tax2 = clean(((b2 - b1) * r2) / 100);
        const tax3 = clean((excess * r3) / 100);
        const totalTax = clean(tax2 + tax3);
        const atr = roundTo((totalTax / income) * 100, 2);
        const traps = safeTraps(atr, 0.02, [
          { value: r3, feedback: `${r3}% is the *marginal* tax rate (MTR), not the Average Tax Rate (Total Tax ÷ Total Income × 100)!` },
          { value: totalTax, feedback: `$${big(totalTax)} is total tax paid — divide by $${big(income)} and multiply by 100 for ATR (%)!` },
        ]);
        return {
          prompt: `[HL] ${country}'s income tax brackets are: **0%** on $0–$${big(b1)}, **${r2}%** on $${big(b1 + 1)}–$${big(b2)}, and **${r3}%** above $${big(b2)}. A resident earns **$${big(income)}**. Calculate their **Average Tax Rate (ATR)** (%) to **2 decimal places**.`,
          answer: { type: "number", value: atr, tolerance: 0.02, display: `${num(atr)}%` },
          traps,
          hint: "First compute total tax slice-by-slice, then divide total tax by gross income × 100.",
          solution: [
            `Tax in Bracket 2: $${big(b2 - b1)} × ${r2}% = $${big(tax2)}.`,
            `Tax in Bracket 3: $${big(excess)} × ${r3}% = $${big(tax3)}.`,
            `Total tax = $${big(totalTax)}.`,
            `ATR = {{(${totalTax} / ${income}) * 100}} = **${num(atr)}%**.`,
          ],
        };
      }

      // Tier 3: 3-bracket progressive income tax + indirect GST/VAT → Combined Average Tax Rate (%)
      const excess = rng.int(2, 9) * 5000;
      const income = b2 + excess;
      const tax2 = clean(((b2 - b1) * r2) / 100);
      const tax3 = clean((excess * r3) / 100);
      const directTax = clean(tax2 + tax3);
      const gstRate = rng.pick([5, 8, 10, 12, 15]);
      const spendRatio = rng.pick([0.5, 0.6, 0.65, 0.7]);
      const spending = clean(Math.round((income * spendRatio) / 1000) * 1000);
      const indirectTax = clean((spending * gstRate) / 100);
      const totalTax = clean(directTax + indirectTax);
      const combinedAtr = roundTo((totalTax / income) * 100, 2);
      const directAtr = roundTo((directTax / income) * 100, 2);
      const naiveSumAtr = roundTo(directAtr + gstRate, 2);

      const traps = safeTraps(combinedAtr, 0.02, [
        { value: directAtr, feedback: "That is the direct income ATR alone — add the indirect GST paid before dividing by income!" },
        { value: naiveSumAtr, feedback: `Do not simply add ${gstRate}% to direct ATR! GST applies only to $${big(spending)} spending, not full income.` },
      ]);
      return {
        prompt: `[HL] ${country} levies progressive income tax (**0%** on $0–$${big(b1)}, **${r2}%** on $${big(b1 + 1)}–$${big(b2)}, **${r3}%** above $${big(b2)}) plus a **${gstRate}%** indirect VAT. A resident earns **$${big(income)}** and spends **$${big(spending)}** (pre-tax) on VAT-taxable goods. Calculate their **combined average tax rate** (%) to **2 decimal places**.`,
        answer: { type: "number", value: combinedAtr, tolerance: 0.02, display: `${num(combinedAtr)}%` },
        traps,
        hint: "Find direct income tax across brackets + dollar VAT on spending, sum them, and divide by gross income × 100.",
        solution: [
          `Direct income tax = $0 + $${big(tax2)} + $${big(tax3)} = $${big(directTax)}.`,
          `Indirect VAT paid = $${big(spending)} × ${gstRate}% = $${big(indirectTax)}.`,
          `Total tax paid = $${big(directTax)} + $${big(indirectTax)} = $${big(totalTax)}.`,
          `Combined ATR = {{(${totalTax} / ${income}) * 100}} = **${num(combinedAtr)}%**.`,
        ],
      };
    },
  },
];
