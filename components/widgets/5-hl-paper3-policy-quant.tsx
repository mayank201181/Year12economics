"use client";

import { useMemo, useState } from "react";
import {
  makePlane,
  PlaneGrid,
  Readout,
  Segmented,
  Slider,
  Stepper,
  WidgetFrame,
  type WidgetDef,
} from "./kit";

// ============================================================================
// WIDGET 1: Paper 3 Linear Market & Tax/Subsidy Solver
// ============================================================================

function fmtNum(n: number, dp = 2): string {
  if (!Number.isFinite(n)) return "—";
  const rounded = Math.round(n * 10 ** dp) / 10 ** dp;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(dp);
}

function LinearMarketSolver() {
  const [mode, setMode] = useState<"tax" | "subsidy">("tax");
  const [a, setA] = useState(200);
  const [b, setB] = useState(4);
  const [c, setC] = useState(-40);
  const [d, setD] = useState(4);
  const [wedge, setWedge] = useState(8);

  const model = useMemo(() => {
    const denom = b + d;
    const pe = (a - c) / denom;
    const qe = a - b * pe;
    const pMax = a / b;
    const pMin = c < 0 ? -c / d : 0;

    const cs0 = qe > 0 ? 0.5 * qe * Math.max(0, pMax - pe) : 0;
    const ps0 =
      qe > 0
        ? c < 0
          ? 0.5 * qe * Math.max(0, pe - pMin)
          : 0.5 * (c + qe) * Math.max(0, pe)
        : 0;

    const cShift = mode === "tax" ? c - d * wedge : c + d * wedge;
    const rawPc = (a - cShift) / denom;
    const pc = Math.max(0, Math.min(pMax, rawPc));
    const pp = mode === "tax" ? pc - wedge : pc + wedge;
    const qNew = Math.max(0, a - b * pc);
    const prohibitive = mode === "tax" && qNew <= 0.001;

    const govBudget = mode === "tax" ? wedge * qNew : -wedge * qNew;
    const dwl =
      mode === "tax"
        ? 0.5 * wedge * Math.max(0, qe - qNew)
        : 0.5 * wedge * Math.max(0, qNew - qe);

    const csNew = qNew > 0 ? 0.5 * qNew * Math.max(0, pMax - pc) : 0;
    const psNew =
      qNew > 0
        ? c < 0
          ? 0.5 * qNew * Math.max(0, pp - pMin)
          : 0.5 * (c + qNew) * Math.max(0, pp)
        : 0;

    const buyerSharePct = (d / denom) * 100;
    const sellerSharePct = (b / denom) * 100;

    return {
      pe,
      qe,
      pMax,
      pMin,
      cs0,
      ps0,
      cShift,
      pc,
      pp,
      qNew,
      prohibitive,
      govBudget,
      dwl,
      csNew,
      psNew,
      buyerSharePct,
      sellerSharePct,
    };
  }, [mode, a, b, c, d, wedge]);

  // SVG coordinate plane
  const xMax = Math.max(120, Math.ceil((Math.max(a, model.qNew, model.qe) * 1.12) / 40) * 40);
  const yMax = Math.max(40, Math.ceil((Math.max(model.pMax, model.pp + 4, 30) * 1.12) / 10) * 10);
  const xStep = xMax <= 160 ? 40 : xMax <= 280 ? 50 : 80;
  const plane = makePlane({ width: 420, height: 270, xMin: 0, xMax, yMin: 0, yMax, pad: 34 });
  const { px, py } = plane;

  // Supply curve endpoints clipped to box
  const s0StartQ = Math.max(0, c);
  const s0StartP = c < 0 ? -c / d : 0;
  const s0EndP = Math.min(yMax, (xMax - c) / d);
  const s0EndQ = c + d * s0EndP;

  const s1StartQ = Math.max(0, model.cShift);
  const s1StartP = model.cShift < 0 ? -model.cShift / d : 0;
  const s1EndP = Math.min(yMax, (xMax - model.cShift) / d);
  const s1EndQ = model.cShift + d * s1EndP;

  const dEndP = Math.max(0, (a - xMax) / b);
  const dEndQ = a - b * dEndP;

  const signStr = (v: number) => (v < 0 ? `−${Math.abs(v)}` : `${v}`);
  const shiftedEq =
    mode === "tax"
      ? `Qs' = ${signStr(c)} + ${d}(P − ${wedge}) = ${signStr(model.cShift)} + ${d}P`
      : `Qs' = ${signStr(c)} + ${d}(P + ${wedge}) = ${signStr(model.cShift)} + ${d}P`;

  return (
    <WidgetFrame
      title="Paper 3 Linear Market & Tax/Subsidy Solver"
      tryThis={[
        "Make demand steep (`b = 2`) and supply flat (`d = 6`) with an `$8` tax — watch consumers absorb **75%** of the burden!",
        "Flip `c` from `−40` to `+20` and see Producer Surplus turn from a **triangle** into a **trapezoid**.",
        "Switch to **Per-Unit Subsidy** and watch government outlay turn negative while DWL forms to the **right** of `Qe`.",
      ]}
      caption={
        model.prohibitive ? (
          <span>
            <strong>Prohibitive tax!</strong> The ${wedge} wedge exceeds the market gap ({fmtNum(model.pMax - model.pMin)}), shutting down trade completely (Qt = 0, revenue = $0).
          </span>
        ) : (
          <span>
            <strong>Algebraic shift:</strong> <code>{shiftedEq}</code>. Pre-intervention equilibrium ({fmtNum(model.qe)} units, ${fmtNum(model.pe)}; CS = ${fmtNum(model.cs0, 0)}, PS = ${fmtNum(model.ps0, 0)}) shifts to{" "}
            <strong>{fmtNum(model.qNew)} units</strong> with buyer price <strong>${fmtNum(model.pc)}</strong> and seller price <strong>${fmtNum(model.pp)}</strong>.
            {mode === "tax"
              ? ` Consumers bear ${fmtNum(model.buyerSharePct, 1)}% and producers bear ${fmtNum(model.sellerSharePct, 1)}% of the $${wedge} tax.`
              : ` Consumers capture ${fmtNum(model.buyerSharePct, 1)}% and producers capture ${fmtNum(model.sellerSharePct, 1)}% of the $${wedge} subsidy benefit.`}
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Intervention mode"
            value={mode}
            onChange={setMode}
            options={[
              { value: "tax", label: "Specific Tax (+t)" },
              { value: "subsidy", label: "Per-Unit Subsidy (s)" },
            ]}
          />
          <div className="rounded-lg bg-surface-2 px-3 py-1.5 text-xs font-bold text-ink-2">
            Qd = {a} − {b}P · Qs = {signStr(c)} + {d}P
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Controls */}
          <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3.5">
            <Slider
              label="Demand intercept (a)"
              value={a}
              min={120}
              max={300}
              step={10}
              onChange={setA}
            />
            <Stepper
              label="Demand slope (b in −bP)"
              value={b}
              min={1}
              max={8}
              onChange={setB}
            />
            <Slider
              label="Supply constant (c)"
              value={c}
              min={-60}
              max={40}
              step={10}
              onChange={setC}
              format={(v) => (v < 0 ? `−${Math.abs(v)}` : `+${v}`)}
            />
            <Stepper
              label="Supply slope (d in +dP)"
              value={d}
              min={1}
              max={8}
              onChange={setD}
            />
            <Slider
              label={mode === "tax" ? "Specific tax per unit (t)" : "Per-unit subsidy (s)"}
              value={wedge}
              min={0}
              max={20}
              step={1}
              onChange={setWedge}
              format={(v) => `$${v}`}
            />
          </div>

          {/* Live SVG Graph */}
          <div className="rounded-xl border border-line bg-surface p-2">
            <svg
              viewBox="0 0 420 270"
              className="h-auto w-full"
              role="img"
              aria-label="Live linear demand and supply graph with tax or subsidy welfare areas"
            >
              <PlaneGrid plane={plane} step={xStep} labels={false} />

              {/* CS post-intervention */}
              {!model.prohibitive && model.qNew > 0 ? (
                <polygon
                  points={`${px(0)},${py(Math.min(yMax, model.pMax))} ${px(0)},${py(model.pc)} ${px(model.qNew)},${py(model.pc)}`}
                  fill="#3b82f6"
                  opacity={0.18}
                />
              ) : null}

              {/* PS post-intervention */}
              {!model.prohibitive && model.qNew > 0 ? (
                <polygon
                  points={
                    c < 0
                      ? `${px(0)},${py(model.pMin)} ${px(0)},${py(Math.min(yMax, model.pp))} ${px(model.qNew)},${py(Math.min(yMax, model.pp))}`
                      : `${px(0)},${py(0)} ${px(c)},${py(0)} ${px(model.qNew)},${py(Math.min(yMax, model.pp))} ${px(0)},${py(Math.min(yMax, model.pp))}`
                  }
                  fill="#10b981"
                  opacity={0.18}
                />
              ) : null}

              {/* Tax revenue / Subsidy outlay band */}
              {wedge > 0 && !model.prohibitive && model.qNew > 0 ? (
                <rect
                  x={px(0)}
                  y={py(Math.min(yMax, Math.max(model.pc, model.pp)))}
                  width={Math.max(0, px(model.qNew) - px(0))}
                  height={Math.abs(py(model.pc) - py(Math.min(yMax, model.pp)))}
                  fill={mode === "tax" ? "#f59e0b" : "#8b5cf6"}
                  opacity={0.22}
                />
              ) : null}

              {/* Deadweight Loss triangle */}
              {wedge > 0 && model.dwl > 0.01 ? (
                <polygon
                  points={`${px(model.qNew)},${py(model.pc)} ${px(model.qe)},${py(model.pe)} ${px(model.qNew)},${py(Math.min(yMax, model.pp))}`}
                  fill="#ef4444"
                  opacity={0.48}
                />
              ) : null}

              {/* Demand curve */}
              <line
                x1={px(0)}
                y1={py(Math.min(yMax, model.pMax))}
                x2={px(dEndQ)}
                y2={py(dEndP)}
                stroke="#2563eb"
                strokeWidth={2.4}
              />

              {/* Original Supply curve */}
              <line
                x1={px(s0StartQ)}
                y1={py(s0StartP)}
                x2={px(s0EndQ)}
                y2={py(s0EndP)}
                stroke="#059669"
                strokeWidth={2.4}
              />

              {/* Shifted Supply curve */}
              {wedge > 0 ? (
                <line
                  x1={px(s1StartQ)}
                  y1={py(Math.min(yMax, s1StartP))}
                  x2={px(Math.min(xMax, s1EndQ))}
                  y2={py(Math.min(yMax, s1EndP))}
                  stroke={mode === "tax" ? "#d97706" : "#7c3aed"}
                  strokeWidth={2.4}
                  strokeDasharray="6 4"
                />
              ) : null}

              {/* Reference dotted lines */}
              <line x1={px(0)} y1={py(model.pe)} x2={px(model.qe)} y2={py(model.pe)} stroke="#64748b" strokeWidth={1.1} strokeDasharray="3 3" />
              <line x1={px(model.qe)} y1={py(model.pe)} x2={px(model.qe)} y2={py(0)} stroke="#64748b" strokeWidth={1.1} strokeDasharray="3 3" />
              <circle cx={px(model.qe)} cy={py(model.pe)} r={3.5} fill="#334155" />

              {wedge > 0 && !model.prohibitive ? (
                <>
                  <line x1={px(0)} y1={py(model.pc)} x2={px(model.qNew)} y2={py(model.pc)} stroke="#b45309" strokeWidth={1.2} strokeDasharray="3 3" />
                  <line x1={px(0)} y1={py(Math.min(yMax, model.pp))} x2={px(model.qNew)} y2={py(Math.min(yMax, model.pp))} stroke="#059669" strokeWidth={1.2} strokeDasharray="3 3" />
                  <line x1={px(model.qNew)} y1={py(Math.min(yMax, Math.max(model.pc, model.pp)))} x2={px(model.qNew)} y2={py(0)} stroke="#334155" strokeWidth={1.2} strokeDasharray="3 3" />
                  <circle cx={px(model.qNew)} cy={py(model.pc)} r={4} fill="#b45309" />
                  <circle cx={px(model.qNew)} cy={py(Math.min(yMax, model.pp))} r={3.5} fill="#059669" />
                </>
              ) : null}

              {/* Axis titles & equilibrium labels */}
              <text x={px(xMax)} y={py(0) + 18} textAnchor="end" fontSize={10} fontWeight={700} className="fill-ink-2">
                Quantity (Q)
              </text>
              <text x={px(0) - 4} y={py(yMax) - 8} textAnchor="start" fontSize={10} fontWeight={700} className="fill-ink-2">
                Price ($)
              </text>
              <text x={px(0) - 5} y={py(model.pe) + 3} textAnchor="end" fontSize={9.5} fontWeight={700} className="fill-ink-2">
                {fmtNum(model.pe, 1)}
              </text>
              <text x={px(model.qe)} y={py(0) + 13} textAnchor="middle" fontSize={9.5} fontWeight={700} className="fill-ink-2">
                {fmtNum(model.qe, 0)}
              </text>
              {wedge > 0 && !model.prohibitive ? (
                <>
                  <text x={px(0) - 5} y={py(model.pc) + 3} textAnchor="end" fontSize={9.5} fontWeight={800} fill="#b45309">
                    Pc
                  </text>
                  <text x={px(model.qNew)} y={py(0) + 24} textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#b45309">
                    {fmtNum(model.qNew, 1)}
                  </text>
                </>
              ) : null}
              <text x={px(dEndQ) - 8} y={py(dEndP) - 6} fontSize={10.5} fontWeight={800} fill="#2563eb">
                D
              </text>
              <text x={px(s0EndQ) - 10} y={py(s0EndP) + 14} fontSize={10.5} fontWeight={800} fill="#059669">
                S
              </text>
              {wedge > 0 ? (
                <text
                  x={px(Math.min(xMax, s1EndQ)) - 34}
                  y={py(Math.min(yMax, s1EndP)) + 14}
                  fontSize={10}
                  fontWeight={800}
                  fill={mode === "tax" ? "#d97706" : "#7c3aed"}
                >
                  {mode === "tax" ? "S+t" : "S−s"}
                </text>
              ) : null}
            </svg>
          </div>
        </div>

        {/* Live Readouts */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout
            label="Consumer / Producer P"
            value={`$${fmtNum(model.pc)} / $${fmtNum(model.pp)}`}
            tone="brand"
          />
          <Readout
            label="Quantity (Qe → Q')"
            value={`${fmtNum(model.qe, 1)} → ${fmtNum(model.qNew, 1)}`}
            tone="ink"
          />
          <Readout
            label={mode === "tax" ? "Govt Tax Revenue" : "Govt Subsidy Outlay"}
            value={model.govBudget >= 0 ? `+$${fmtNum(model.govBudget, 1)}` : `−$${fmtNum(Math.abs(model.govBudget), 1)}`}
            tone={mode === "tax" ? "good" : "bad"}
          />
          <Readout
            label="Deadweight Loss (DWL)"
            value={`$${fmtNum(model.dwl, 1)}`}
            tone={model.dwl > 0 ? "bad" : "good"}
          />
          <Readout
            label={mode === "tax" ? "Incidence (Buy / Sell)" : "Benefit (Buy / Sell)"}
            value={`${fmtNum(model.buyerSharePct, 0)}% / ${fmtNum(model.sellerSharePct, 0)}%`}
            tone="ink"
          />
          <Readout
            label="Post CS / PS"
            value={`$${fmtNum(model.csNew, 0)} / $${fmtNum(model.psNew, 0)}`}
            tone="good"
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: 10-Mark Paper 3 Policy Recommendation Rubric Builder
// ============================================================================

type ScenarioId = "meridia" | "veridia" | "borealia";

interface RubricChoice {
  pts: 0 | 1 | 2;
  label: string;
  preview: string;
  feedback: string;
}

interface ScenarioConfig {
  id: ScenarioId;
  shortLabel: string;
  title: string;
  brief: string;
  metrics: string[];
  decision: RubricChoice[];
  anchor: RubricChoice[];
  transmission: RubricChoice[];
  eval1: RubricChoice[];
  complement: RubricChoice[];
}

const SCENARIOS: Record<ScenarioId, ScenarioConfig> = {
  meridia: {
    id: "meridia",
    shortLabel: "Meridia · Deflationary Gap",
    title: "Republic of Meridia — Deflationary Gap & Youth Joblessness",
    brief: "Recommend a policy to close Meridia's deflationary gap and reduce youth unemployment.",
    metrics: ["Gap: $15bn", "k = 2.5", "Debt/GDP: 38%", "Rate: 0.5%", "Youth U: 16.5%"],
    decision: [
      {
        pts: 2,
        label: "Commit to ONE primary policy: $6bn targeted fiscal capital + youth apprenticeship package",
        preview: "Meridia should enact a targeted $6 billion fiscal capital-spending and youth-apprenticeship package.",
        feedback: "Strong D (2/2): Clear single commitment matched to both the cyclical gap and structural youth mismatch.",
      },
      {
        pts: 1,
        label: "List 4 options equally (rate cuts, tariffs, fiscal spending, and minimum wage changes)",
        preview: "Meridia could cut interest rates, raise tariffs, increase spending, or adjust minimum wages.",
        feedback: "Weak D (1/2): Shopping lists dilute commitment and usually cap scripts in Band 3–4.",
      },
      {
        pts: 0,
        label: "Recommend aggressive interest-rate cuts (ignoring the 0.5% zero lower bound)",
        preview: "The central bank should slash interest rates sharply to stimulate investment.",
        feedback: "Mismatched D (0/2): With policy rates already at 0.5%, conventional monetary easing is blocked.",
      },
    ],
    anchor: [
      {
        pts: 2,
        label: "Cite calculated k = 2.5 ($6bn × 2.5 = $15bn gap), 38% debt headroom, 0.5% rate & 16.5% youth U",
        preview: "With our calculated multiplier k = 2.5 and 38% debt-to-GDP, $6bn closes the $15bn gap where a 0.5% policy rate fails, targeting 16.5% youth unemployment.",
        feedback: "Strong A (2/2): Directly integrates prior Paper 3 calculations with multiple stimulus constraints.",
      },
      {
        pts: 1,
        label: "Mention Meridia has high unemployment and slow growth without quoting figures or k",
        preview: "Meridia currently experiences sluggish growth and rising joblessness among young workers.",
        feedback: "Partial A (1/2): Upgrade by quoting your exact calculated k = 2.5 and $15bn/$6bn figures.",
      },
      {
        pts: 0,
        label: "Cite external US 2009 / Japan examples instead of Meridia's stimulus tables",
        preview: "Like the 2009 US stimulus package, fiscal expansion can boost aggregate demand.",
        feedback: "Wrong Exam Habit (0/2): Save external real-world examples for Paper 1 Part (b) — Paper 3 grades stimulus synthesis!",
      },
    ],
    transmission: [
      {
        pts: 2,
        label: "Trace G → AD rightwards along flat Keynesian AS (Y1 → Yf) + training shifts LRAS rightwards",
        preview: "Direct G spending multiplies into higher domestic incomes, shifting AD rightwards along the relatively flat Keynesian AS curve without major inflation, while apprenticeships narrow skills mismatch and shift LRAS rightwards.",
        feedback: "Strong T (2/2): Clear causal transmission connecting both short-run AD and long-run LRAS.",
      },
      {
        pts: 1,
        label: "State that government spending increases AD and lowers unemployment",
        preview: "Higher spending increases aggregate demand and creates jobs for workers.",
        feedback: "Partial T (1/2): Explain the multiplier mechanism and Keynesian AS shape explicitly.",
      },
      {
        pts: 0,
        label: "Assert the policy helps growth without explaining any economic mechanism",
        preview: "This policy will improve the economy and make young people better off.",
        feedback: "Missing T (0/2): Examiners require explicit economic theory and diagram shift logic.",
      },
    ],
    eval1: [
      {
        pts: 2,
        label: "Evaluate construction time lags + risk that imported machinery lifts MPM and shrinks actual k below 2.5",
        preview: "However, capital projects face 12–24 month implementation lags, and if equipment is imported, MPM climbs above 0.10—pulling realised k below 2.5 so output undershoots Yf.",
        feedback: "Strong E (2/2): Context-specific quantitative evaluation directly interrogating the multiplier assumption.",
      },
      {
        pts: 1,
        label: "Add a brief generic line: 'government spending can increase national debt'",
        preview: "One drawback is that spending costs money and increases public debt.",
        feedback: "Partial E (1/2): Meridia's debt is only 38%! Tailor evaluation to lags, MPM leakage, or crowding out.",
      },
      {
        pts: 0,
        label: "Omit all limitations and trade-offs (one-sided advocacy)",
        preview: "",
        feedback: "Missing E (0/2): One-sided advocacy cannot cross from Band 5–7 into Band 8–10.",
      },
    ],
    complement: [
      {
        pts: 2,
        label: "Weigh partial crowding out + pair with fast-acting youth hiring tax credits & balanced conclusion",
        preview: "While bond issuance risks mild crowding out if confidence rebounds rapidly, pairing capital works with temporary youth hiring credits bridges construction lags, delivering the strongest net gain for Meridia.",
        feedback: "Strong C (2/2): Targeted complementary mitigator directly fixes the main lag limitation!",
      },
      {
        pts: 1,
        label: "Mention a second limitation briefly with no complementary measure or judgement",
        preview: "There is also an opportunity cost compared with healthcare budgets.",
        feedback: "Partial C (1/2): Add one targeted complementary safeguard plus a clear concluding judgement.",
      },
      {
        pts: 0,
        label: "Stop immediately after the first limitation with no conclusion",
        preview: "",
        feedback: "Missing C (0/2): Finish with a targeted mitigator and clear comparative judgement.",
      },
    ],
  },
  veridia: {
    id: "veridia",
    shortLabel: "Veridia · Carbon & Equity",
    title: "Republic of Veridia — Fuel Carbon Tax & Low-Income Equity",
    brief: "Recommend a policy to cut road-transport emissions while protecting low-income families.",
    metrics: ["|PED| = 0.24", "Rev: $1,104m/mo", "Poor: 7.2% vs 1.8%", "Buyer share: 66.7%", "Rail π: $480k/d"],
    decision: [
      {
        pts: 2,
        label: "Commit to ONE integrated policy: escalating Pigouvian carbon tax with revenue recycled into poor rebates & rail",
        preview: "Veridia should pair its $6/litre carbon tax with earmarked low-income green rebates and regulated electric-rail expansion.",
        feedback: "Strong D (2/2): Decisive primary instrument designed specifically around equity and externality targets.",
      },
      {
        pts: 1,
        label: "Suggest trying a carbon tax, a car ban, moral suasion, and fuel ceilings together",
        preview: "Veridia could combine a fuel tax, a price ceiling on petrol, driving bans, and awareness campaigns.",
        feedback: "Weak D (1/2): Unfocused list containing contradictory incentives (price ceilings undo carbon pricing!).",
      },
      {
        pts: 0,
        label: "Recommend removing fuel taxes completely to help consumers",
        preview: "Veridia should abolish fuel taxes to make driving cheaper for all households.",
        feedback: "Mismatched D (0/2): Removing fuel taxes directly worsens the negative carbon externality.",
      },
    ],
    anchor: [
      {
        pts: 2,
        label: "Cite $1,104m revenue, 200→184m drop, 66.7% buyer share, |PED| = 0.24, 7.2% vs 1.8% & $480k rail profit",
        preview: "Recycling the calculated $1,104m monthly revenue offsets the regressive 7.2% vs 1.8% fuel burden (with 66.7% buyer incidence) while funding rail expansion beyond the monopolist's $480k/day restricted output.",
        feedback: "Strong A (2/2): Seamless synthesis of every single micro calculation and equity figure.",
      },
      {
        pts: 1,
        label: "Mention petrol is inelastic and hurts poorer drivers without citing exact calculated values",
        preview: "Fuel is a necessity so taxes burden lower-income commuters more heavily.",
        feedback: "Partial A (1/2): Anchor explicitly in |PED| = 0.24, $1,104m revenue, and 7.2% vs 1.8% shares.",
      },
      {
        pts: 0,
        label: "Write generically about global climate change without using Veridia's data",
        preview: "Climate change is a global crisis requiring governments to reduce emissions.",
        feedback: "Missing A (0/2): Zero engagement with the Paper 3 stimulus booklet.",
      },
    ],
    transmission: [
      {
        pts: 2,
        label: "Trace S = MPC → MSC internalising externality + rail investment expanding substitutes to raise LR PED",
        preview: "The specific tax shifts private supply leftwards toward MSC to internalise external costs (cutting volume 200 to 184m litres), while regulated rail expansion creates viable substitutes that raise long-run PED above 0.24.",
        feedback: "Strong T (2/2): Combines Pigouvian externality theory with dynamic long-run elasticity shifts.",
      },
      {
        pts: 1,
        label: "State that higher petrol prices make people drive less",
        preview: "Higher fuel prices reduce the quantity of petrol demanded.",
        feedback: "Partial T (1/2): Include MPC vs MSC internalisation and how rail substitutes raise long-run PED.",
      },
      {
        pts: 0,
        label: "No clear microeconomic transmission or diagram logic",
        preview: "Taxes help the environment and rebates make people happier.",
        feedback: "Missing T (0/2): Needs accurate externality and elasticity theory.",
      },
    ],
    eval1: [
      {
        pts: 2,
        label: "Evaluate inelastic short-run response (|PED| = 0.24 → modest 8% drop) + information failure valuing MSC",
        preview: "Yet because short-run |PED| = 0.24, immediate emission cuts are modest (8%), and measuring exact marginal external cost suffers severe information failure—risking deadweight loss beyond the $48m static triangle.",
        feedback: "Strong E (2/2): Directly uses |PED| = 0.24 and $48m DWL to interrogate policy effectiveness.",
      },
      {
        pts: 1,
        label: "Note briefly that carbon taxes can be unpopular with voters",
        preview: "Drivers may protest against higher petrol costs.",
        feedback: "Partial E (1/2): Deepen with |PED| = 0.24, information failure, and rail construction lags.",
      },
      {
        pts: 0,
        label: "Present no limitations or trade-offs",
        preview: "",
        feedback: "Missing E (0/2): Required for top-band AO3 evaluation.",
      },
    ],
    complement: [
      {
        pts: 2,
        label: "Evaluate rural commuter inequity + add targeted rural EV/mobility grants and balanced judgement",
        preview: "Since rail build-out faces multi-year lags and excludes rural commuters, adding targeted rural EV/micro-mobility grants neutralises geographic inequity—making revenue-recycled pricing Veridia's strongest efficiency-equity balance.",
        feedback: "Strong C (2/2): Solves the exact stakeholder gap left behind by urban rail subsidies.",
      },
      {
        pts: 1,
        label: "Mention administrative costs briefly without a mitigator or final judgement",
        preview: "Distributing rebates also involves government administrative expenses.",
        feedback: "Partial C (1/2): Pair with a concrete complementary measure and closing verdict.",
      },
      {
        pts: 0,
        label: "No complementary measure or final judgement",
        preview: "",
        feedback: "Missing C (0/2): Add a targeted mitigator and reasoned conclusion.",
      },
    ],
  },
  borealia: {
    id: "borealia",
    shortLabel: "Borealia · Stagflation",
    title: "Republic of Borealia — High-Debt Cost-Push Stagflation",
    brief: "Recommend a policy to restore non-inflationary growth under 91% debt and MPM = 0.44.",
    metrics: ["CPI: 6.9%", "Growth: −0.4%", "U: 8.3%", "Debt/GDP: 91%", "MPM: 0.44"],
    decision: [
      {
        pts: 2,
        label: "Commit to ONE primary policy: low-fiscal-cost energy & port deregulation / competitive concessions",
        preview: "Borealia should enact a market-based energy-grid and port deregulation programme opening bottlenecks to competitive private concessions.",
        feedback: "Strong D (2/2): Directly targets cost-push bottlenecks while respecting the 91% debt ceiling.",
      },
      {
        pts: 1,
        label: "Propose both large fiscal stimulus and big interest-rate hikes simultaneously",
        preview: "Borealia should boost public spending heavily while raising interest rates steeply.",
        feedback: "Weak D (1/2): Contradictory demand policies clash with 91% debt and −0.4% contraction.",
      },
      {
        pts: 0,
        label: "Recommend a massive debt-financed fiscal expansion",
        preview: "Borealia should borrow heavily to launch a large general fiscal stimulus.",
        feedback: "Mismatched D (0/2): Violates 91% debt, leaks via MPM = 0.44, and worsens 6.9% inflation!",
      },
    ],
    anchor: [
      {
        pts: 2,
        label: "Use 91% debt & MPM = 0.44 (k < 2.3) to rule out fiscal stimulus, and −0.4% / 8.3% to rule out rate shock",
        preview: "At 91% debt-to-GDP and MPM = 0.44 (capping k below 2.3), fiscal stimulus leaks abroad and fuels 6.9% inflation, while steep rate hikes would deepen the −0.4% contraction and 8.3% unemployment.",
        feedback: "Strong A (2/2): Masterful use of stimulus numbers to rule out BOTH rival demand-side tools!",
      },
      {
        pts: 1,
        label: "Mention Borealia has stagflation and high debt without calculating the MPM multiplier limit",
        preview: "Borealia suffers from rising prices, falling growth, and heavy national debt.",
        feedback: "Partial A (1/2): Show explicitly how MPM = 0.44 caps k < 2.3 and quote exact figures.",
      },
      {
        pts: 0,
        label: "Discuss general supply-side theory without referencing Borealia's numbers",
        preview: "Supply-side policies help economies grow over the long run.",
        feedback: "Missing A (0/2): Anchor every paragraph in Borealia's exact constraints.",
      },
    ],
    transmission: [
      {
        pts: 2,
        label: "Trace competitive port/grid entry → lower firm input costs → rightward SRAS & LRAS shift (↓CPI, ↑Y)",
        preview: "Removing licensing bottlenecks introduces private capital and competition at negligible treasury cost, lowering power and logistics costs to shift SRAS and LRAS rightwards—simultaneously curbing 6.9% inflation and lifting output.",
        feedback: "Strong T (2/2): Shows exactly how supply-side reform breaks the stagflation dilemma.",
      },
      {
        pts: 1,
        label: "State that deregulation increases supply and reduces prices",
        preview: "More competition shifts aggregate supply right and lowers inflation.",
        feedback: "Partial T (1/2): Connect specifically to energy/port input costs and zero fiscal drain.",
      },
      {
        pts: 0,
        label: "No clear AD/AS transmission mechanism",
        preview: "Private firms are more efficient so the economy will recover.",
        feedback: "Missing T (0/2): Explain the exact cost-push SRAS/LRAS shift.",
      },
    ],
    eval1: [
      {
        pts: 2,
        label: "Evaluate 2–5 year infrastructure build lags + risk of unregulated private monopoly abuse in network utilities",
        preview: "However, grid and port upgrades face 2–5 year build lags offering slow relief for 8.3% unemployment, while network utilities risk mutating into private monopolies exploiting inelastic users.",
        feedback: "Strong E (2/2): Sharp evaluation of both time lags and microeconomic market-power risk.",
      },
      {
        pts: 1,
        label: "Note briefly that supply-side policies take time to work",
        preview: "Supply-side reforms suffer from long time lags before effects appear.",
        feedback: "Partial E (1/2): Add network-monopoly / union-resistance specifics tied to energy and ports.",
      },
      {
        pts: 0,
        label: "Omit trade-offs completely",
        preview: "",
        feedback: "Missing E (0/2): Needed to unlock Band 8–10.",
      },
    ],
    complement: [
      {
        pts: 2,
        label: "Add independent price-cap utility regulator + budget-neutral targeted relief for vulnerable households",
        preview: "Pairing concessions with an independent price-cap regulator and budget-neutral targeted living-cost relief prevents monopoly abuse and shields poor households during transition—making competitive supply-side reform Borealia's only sustainable path.",
        feedback: "Strong C (2/2): Budget-neutrality respects the 91% debt constraint while fixing equity & monopoly risks!",
      },
      {
        pts: 1,
        label: "Mention union opposition briefly with no complementary safeguard",
        preview: "State utility unions may strike against private competition.",
        feedback: "Partial C (1/2): Add independent regulation / budget-neutral transfers + final judgement.",
      },
      {
        pts: 0,
        label: "No complementary measure or judgement",
        preview: "",
        feedback: "Missing C (0/2): Conclude with a targeted safeguard and decisive verdict.",
      },
    ],
  },
};

function PolicyRubricBuilder() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>("meridia");
  const [dIdx, setDIdx] = useState(0);
  const [aIdx, setAIdx] = useState(0);
  const [tIdx, setTIdx] = useState(1);
  const [eIdx, setEIdx] = useState(1);
  const [cIdx, setCIdx] = useState(1);

  const sc = SCENARIOS[scenarioId];
  const picks = {
    d: sc.decision[dIdx],
    a: sc.anchor[aIdx],
    t: sc.transmission[tIdx],
    e: sc.eval1[eIdx],
    c: sc.complement[cIdx],
  };

  const score = picks.d.pts + picks.a.pts + picks.t.pts + picks.e.pts + picks.c.pts;

  const bandInfo = useMemo(() => {
    if (score === 0) return { band: "Band 0 (0/10)", tone: "bad" as const, note: "No creditable policy synthesis yet." };
    if (score <= 2) return { band: "Band 1–2", tone: "bad" as const, note: "Vague/mismatched policy with little data or theory." };
    if (score <= 4) return { band: "Band 3–4", tone: "bad" as const, note: "Generic or unfocused list; anchor in stimulus data and commit to ONE policy." };
    if (score <= 7) return { band: "Band 5–7", tone: "brand" as const, note: "Solid analysis & data use — deepen SLAP evaluation and complementary policy to break into Band 8–10!" };
    return { band: "Band 8–10 ★", tone: "good" as const, note: "Examiner top band! Decisive policy, quantitative anchoring, rigorous transmission, and nuanced SLAP + complementary synthesis." };
  }, [score]);

  const sections: Array<{
    key: string;
    letter: string;
    title: string;
    choices: RubricChoice[];
    selected: number;
    onSelect: (idx: number) => void;
  }> = [
    { key: "d", letter: "D", title: "Decide (Primary Policy)", choices: sc.decision, selected: dIdx, onSelect: setDIdx },
    { key: "a", letter: "A", title: "Anchor (Stimulus & P3 Math)", choices: sc.anchor, selected: aIdx, onSelect: setAIdx },
    { key: "t", letter: "T", title: "Transmission (+ Diagram Logic)", choices: sc.transmission, selected: tIdx, onSelect: setTIdx },
    { key: "e", letter: "E", title: "Evaluate (SLAP Trade-Off #1)", choices: sc.eval1, selected: eIdx, onSelect: setEIdx },
    { key: "c", letter: "C", title: "Complement + Final Judgement", choices: sc.complement, selected: cIdx, onSelect: setCIdx },
  ];

  const assembledPreview = [picks.d.preview, picks.a.preview, picks.t.preview, picks.e.preview, picks.c.preview]
    .filter(Boolean)
    .join(" ");

  return (
    <WidgetFrame
      title="10-Mark Paper 3 Policy Recommendation Rubric Builder"
      tryThis={[
        "Start by testing what happens when you pick a **4-policy shopping list** or **external Paper 1 examples** — watch the band drop!",
        "Switch between **Meridia**, **Veridia**, and **Borealia** to see how stimulus constraints rule out rival policies.",
        "Upgrade all five D-A-T-E-C pillars to reach **Band 8–10 (9–10/10)** and read the assembled model synthesis below.",
      ]}
      caption={
        <span>
          <strong>Examiner Verdict ({bandInfo.band}):</strong> {bandInfo.note}
        </span>
      }
    >
      <div className="space-y-4">
        <Segmented
          label="Choose HL Paper 3 case study"
          value={scenarioId}
          onChange={setScenarioId}
          options={[
            { value: "meridia", label: SCENARIOS.meridia.shortLabel },
            { value: "veridia", label: SCENARIOS.veridia.shortLabel },
            { value: "borealia", label: SCENARIOS.borealia.shortLabel },
          ]}
        />

        {/* Stimulus Strip */}
        <div className="rounded-xl border border-line bg-surface-2/70 p-3.5">
          <div className="text-sm font-extrabold text-ink">{sc.title}</div>
          <p className="mt-1 text-xs text-ink-2">{sc.brief}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {sc.metrics.map((m) => (
              <span key={m} className="rounded-md border border-line bg-surface px-2 py-0.5 text-xs font-bold text-ink">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Live Band Scoreboard */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          <Readout label="Estimated Mark" value={`${score} / 10`} tone={bandInfo.tone} />
          <Readout label="IB Paper 3 Band" value={bandInfo.band} tone={bandInfo.tone} />
          <Readout
            label="D·A·T·E·C Breakdown"
            value={`${picks.d.pts}·${picks.a.pts}·${picks.t.pts}·${picks.e.pts}·${picks.c.pts}`}
            tone="ink"
          />
        </div>

        {/* Progress Bar */}
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-2" aria-label={`Score ${score} out of 10`}>
          <div
            className={`h-full transition-all duration-300 ${
              score >= 8 ? "bg-good" : score >= 5 ? "bg-brand" : "bg-bad"
            }`}
            style={{ width: `${(score / 10) * 100}%` }}
          />
        </div>

        {/* 5 D-A-T-E-C Pickers */}
        <div className="space-y-3">
          {sections.map((sec) => {
            const current = sec.choices[sec.selected];
            return (
              <div key={sec.key} className="rounded-xl border border-line bg-surface p-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand/15 text-xs font-extrabold text-brand">
                      {sec.letter}
                    </span>
                    <span className="text-sm font-extrabold text-ink">{sec.title}</span>
                  </div>
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-extrabold ${
                      current.pts === 2
                        ? "bg-good/15 text-good"
                        : current.pts === 1
                          ? "bg-brand/15 text-brand"
                          : "bg-bad/15 text-bad"
                    }`}
                  >
                    {current.pts} / 2
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-1.5">
                  {sec.choices.map((ch, idx) => {
                    const active = idx === sec.selected;
                    return (
                      <button
                        key={ch.label}
                        type="button"
                        onClick={() => sec.onSelect(idx)}
                        className={`rounded-lg border px-3 py-2 text-left text-xs leading-snug transition ${
                          active
                            ? "border-brand bg-brand/10 font-bold text-ink"
                            : "border-line bg-surface-2/50 text-ink-2 hover:text-ink"
                        }`}
                      >
                        {ch.label}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-2 text-xs text-ink-2">{current.feedback}</p>
              </div>
            );
          })}
        </div>

        {/* Assembled Exam Script Preview */}
        <div className="rounded-xl border border-line bg-surface-2/60 p-3.5">
          <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
            Live Assembled Paper 3 Script Preview
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-ink">
            {assembledPreview || "Select choices above to assemble your Paper 3 Policy Recommendation."}
          </p>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export const widgets: WidgetDef[] = [
  {
    id: "p3-linear-market-solver",
    title: "Paper 3 Linear Market & Tax/Subsidy Solver",
    blurb: "Tweak linear demand/supply (a, b, c, d) and tax/subsidy t to watch exact algebra, CS/PS, incidence splits, and DWL update live.",
    Component: LinearMarketSolver,
  },
  {
    id: "p3-policy-rubric-builder",
    title: "10-Mark Policy Recommendation Rubric Builder",
    blurb: "Assemble D-A-T-E-C choices across three HL Paper 3 case studies and see live Band 0–10 examiner feedback.",
    Component: PolicyRubricBuilder,
  },
];

export default widgets;
