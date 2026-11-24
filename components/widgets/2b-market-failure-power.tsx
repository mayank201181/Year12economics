"use client";

import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, makePlane, PlaneGrid, type WidgetDef } from "./kit";

type ExtMode = "neg-prod" | "neg-cons" | "pos-prod" | "pos-cons";

function ExternalityPigouvianExplorer() {
  const [mode, setMode] = useState<ExtMode>("neg-prod");
  const [ext, setExt] = useState<number>(16);
  const [policy, setPolicy] = useState<number>(0);

  const isNeg = mode === "neg-prod" || mode === "neg-cons";
  const isProd = mode === "neg-prod" || mode === "pos-prod";

  // Linear model: MPB0(Q) = 80 - 0.5Q, MPC0(Q) = 30 + 0.5Q => Qm = 50, Pm = 55
  const mpb0 = (q: number) => 80 - 0.5 * q;
  const mpc0 = (q: number) => 30 + 0.5 * q;

  const qm = 50;
  const pm = 55;
  const qStar = isNeg ? qm - ext : qm + ext;
  const pStar = mode === "neg-prod" || mode === "pos-cons" ? pm + ext / 2 : pm - ext / 2;

  // Policy: Pigouvian tax (shifts MPC up) for negative modes; per-unit subsidy (shifts MPC down) for positive modes
  const qPol = isNeg ? qm - policy : qm + policy;
  const pConsumer = mpb0(qPol);

  // Social curves evaluated at any Q
  const msc = (q: number) => (mode === "neg-prod" ? mpc0(q) + ext : mode === "pos-prod" ? mpc0(q) - ext : mpc0(q));
  const msb = (q: number) => (mode === "neg-cons" ? mpb0(q) - ext : mode === "pos-cons" ? mpb0(q) + ext : mpb0(q));

  const dwlInitial = 0.5 * ext * ext;
  const dwlRemaining = 0.5 * (ext - policy) * (ext - policy);
  const fiscalFlow = policy * qPol; // tax revenue (+) or subsidy spending (-)

  const plane = makePlane({ width: 420, height: 270, xMin: 0, xMax: 100, yMin: 0, yMax: 105, pad: 34 });
  const { px, py } = plane;

  // Triangle vertices for remaining DWL at qPol between social curves and social optimum (qStar, pStar)
  const ySocialTop = py(isNeg ? msc(qPol) : msb(qPol));
  const ySocialBot = py(isNeg ? msb(qPol) : msc(qPol));
  const triPoints = `${px(qStar)},${py(pStar)} ${px(qPol)},${ySocialTop} ${px(qPol)},${ySocialBot}`;

  const exactMatch = policy === ext;
  const overshot = policy > ext;

  const modeLabel =
    mode === "neg-prod"
      ? "Negative Production (MSC > MPC)"
      : mode === "neg-cons"
        ? "Negative Consumption (MPB > MSB)"
        : mode === "pos-prod"
          ? "Positive Production (MPC > MSC)"
          : "Positive Consumption (MSB > MPB)";

  const policyName = isNeg ? "Pigouvian Tax" : "Per-Unit Subsidy";

  return (
    <WidgetFrame
      title="Externality & Pigouvian Policy Explorer"
      tryThis={[
        "Switch across all 4 externality types and watch which direction the welfare-loss arrowhead points (always toward the **social optimum** Q*!).",
        "Set the **Pigouvian Tax / Subsidy** equal to the external cost/benefit — watch deadweight loss shrink to **$0**.",
        "Push the tax or subsidy **above** the external cost/benefit to see **government over-intervention** create a new welfare loss on the opposite side!",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>{modeLabel}:</strong> Free-market output is <strong>Qₘ = {qm}</strong>, while the social optimum (MSB = MSC) is{" "}
            <strong>Q* = {qStar}</strong> ({isNeg ? `overallocation of ${ext} units` : `underallocation of ${ext} units`}).
          </p>
          <p>
            {policy === 0 ? (
              <>
                With no intervention, society loses <strong>${dwlInitial.toFixed(0)}</strong> in deadweight welfare loss.
              </>
            ) : exactMatch ? (
              <>
                Setting the {policyName.toLowerCase()} to exactly <strong>${policy}/unit</strong> internalises the externality completely:{" "}
                <strong>Qₚ = Q* = {qStar}</strong>, deadweight loss falls to <strong>$0</strong>, and the government{" "}
                {isNeg ? `raises $${fiscalFlow.toFixed(0)} in tax revenue` : `spends $${fiscalFlow.toFixed(0)} on subsidies`}.
              </>
            ) : overshot ? (
              <>
                <strong>Over-shooting Q*!</strong> A ${policy}/unit {policyName.toLowerCase()} exceeds the ${ext}/unit externality, pushing output to{" "}
                <strong>Qₚ = {qPol}</strong> past Q* = {qStar} and creating a new welfare loss of <strong>${dwlRemaining.toFixed(0)}</strong>.
              </>
            ) : (
              <>
                A partial ${policy}/unit {policyName.toLowerCase()} moves output from {qm} to <strong>Qₚ = {qPol}</strong>, cutting deadweight loss from ${dwlInitial.toFixed(0)} down to{" "}
                <strong>${dwlRemaining.toFixed(0)}</strong> ({Math.round(((dwlInitial - dwlRemaining) / dwlInitial) * 100)}% reduction!).
              </>
            )}
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented<ExtMode>
          label="Externality type"
          value={mode}
          onChange={(v) => {
            setMode(v);
            setPolicy(0);
          }}
          options={[
            { value: "neg-prod", label: "Neg. Prod" },
            { value: "neg-cons", label: "Neg. Cons" },
            { value: "pos-prod", label: "Pos. Prod" },
            { value: "pos-cons", label: "Pos. Cons" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label={isNeg ? "Marginal External Cost (MEC)" : "Marginal External Benefit (MEB)"}
            value={ext}
            min={6}
            max={24}
            step={2}
            onChange={setExt}
            format={(v) => `$${v} / unit`}
          />
          <Slider
            label={policyName}
            value={policy}
            min={0}
            max={28}
            step={2}
            onChange={setPolicy}
            format={(v) => `$${v} / unit`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 420 270"
            className="mx-auto block h-auto w-full max-w-[460px]"
            role="img"
            aria-label={`Interactive ${modeLabel} diagram with external gap ${ext} and ${policyName} ${policy}`}
          >
            <PlaneGrid plane={plane} step={20} labels={false} />
            {/* Axes */}
            <line x1={px(0)} y1={py(0)} x2={px(100)} y2={py(0)} stroke="#334155" strokeWidth={1.8} />
            <line x1={px(0)} y1={py(0)} x2={px(0)} y2={py(105)} stroke="#334155" strokeWidth={1.8} />
            <text x={px(98)} y={py(0) + 22} fontSize={10.5} fontWeight={700} textAnchor="end" fill="#1e293b">
              Quantity (Q)
            </text>
            <text x={px(0) - 8} y={py(101)} fontSize={10} fontWeight={700} textAnchor="end" fill="#1e293b">
              $
            </text>

            {/* Remaining Welfare Loss Triangle */}
            {dwlRemaining > 0.01 ? (
              <polygon
                points={triPoints}
                fill={overshot ? "#fecaca" : "#fed7aa"}
                fillOpacity={0.82}
                stroke={overshot ? "#b91c1c" : "#c2410c"}
                strokeWidth={1.5}
              />
            ) : null}

            {/* Base Private Curves: MPB0 and MPC0 */}
            <line x1={px(0)} y1={py(mpb0(0))} x2={px(100)} y2={py(mpb0(100))} stroke="#0d9488" strokeWidth={2.4} />
            <text x={px(98)} y={py(mpb0(98)) + 13} fontSize={10} fontWeight={800} textAnchor="end" fill="#0f766e">
              {isProd ? "D = MPB = MSB" : "D = MPB"}
            </text>

            <line x1={px(0)} y1={py(mpc0(0))} x2={px(100)} y2={py(mpc0(100))} stroke="#2563eb" strokeWidth={2.4} />
            <text x={px(98)} y={py(mpc0(98)) - 6} fontSize={10} fontWeight={800} textAnchor="end" fill="#1d4ed8">
              {isProd ? "S = MPC" : "S = MPC = MSC"}
            </text>

            {/* Diverging Social Curve: MSC (prod) or MSB (cons) */}
            {isProd ? (
              <>
                <line x1={px(0)} y1={py(msc(0))} x2={px(100)} y2={py(msc(100))} stroke="#dc2626" strokeWidth={2.5} />
                <text x={px(8)} y={py(msc(8)) - 6} fontSize={10.5} fontWeight={800} fill="#b91c1c">
                  MSC
                </text>
              </>
            ) : (
              <>
                <line x1={px(0)} y1={py(msb(0))} x2={px(100)} y2={py(msb(100))} stroke="#7c3aed" strokeWidth={2.5} />
                <text x={px(8)} y={py(msb(8)) - 5} fontSize={10.5} fontWeight={800} fill="#6d28d9">
                  MSB
                </text>
              </>
            )}

            {/* Shifted Policy Supply Curve (MPC + Tax or MPC - Subsidy) */}
            {policy > 0 ? (() => {
              const bPol = isNeg ? 30 + policy : 30 - policy;
              const qStart = Math.max(0, (0 - bPol) / 0.5);
              const qEnd = Math.min(100, (105 - bPol) / 0.5);
              return (
                <>
                  <line
                    x1={px(qStart)}
                    y1={py(bPol + 0.5 * qStart)}
                    x2={px(qEnd)}
                    y2={py(bPol + 0.5 * qEnd)}
                    stroke="#15803d"
                    strokeWidth={2.3}
                    strokeDasharray="6 3"
                  />
                  <text x={px(18)} y={py(Math.max(8, Math.min(97, bPol + 9))) + 12} fontSize={9.5} fontWeight={800} fill="#15803d">
                    {isNeg ? "MPC + Tax" : "MPC − Sub"}
                  </text>
                </>
              );
            })() : null}

            {/* Dashed drop lines for Qm, Q*, and Q_pol */}
            <line x1={px(qm)} y1={py(pm)} x2={px(qm)} y2={py(0)} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3 3" />
            <line x1={px(qStar)} y1={py(pStar)} x2={px(qStar)} y2={py(0)} stroke="#dc2626" strokeWidth={1.3} strokeDasharray="4 3" />
            {policy > 0 ? (
              <line x1={px(qPol)} y1={py(pConsumer)} x2={px(qPol)} y2={py(0)} stroke="#15803d" strokeWidth={1.4} strokeDasharray="4 3" />
            ) : null}

            {/* Key equilibrium markers */}
            <circle cx={px(qm)} cy={py(pm)} r={4} fill="#2563eb" />
            <circle cx={px(qStar)} cy={py(pStar)} r={4.5} fill="#dc2626" />
            {policy > 0 ? <circle cx={px(qPol)} cy={py(pConsumer)} r={4.2} fill="#15803d" /> : null}

            {/* Axis quantity labels */}
            <text x={px(qm)} y={py(0) + 13} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#1d4ed8">
              Qₘ
            </text>
            <text x={px(qStar)} y={py(0) + 13} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#b91c1c">
              Q*
            </text>
            {policy > 0 && qPol !== qStar ? (
              <text x={px(qPol)} y={py(0) + 23} fontSize={10} fontWeight={800} textAnchor="middle" fill="#15803d">
                Qₚ
              </text>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Free-Market Qₘ" value={qm} tone="ink" />
          <Readout label="Social Opt. Q*" value={qStar} tone="brand" />
          <Readout label="Post-Policy Qₚ" value={qPol} tone={exactMatch ? "good" : "ink"} />
          <Readout
            label="Remaining DWL"
            value={`$${dwlRemaining.toFixed(0)}`}
            tone={dwlRemaining === 0 ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

type BenchMode = "monopoly" | "compare";

function MonopolyProfitDwlLab() {
  const [interceptA, setInterceptA] = useState<number>(70);
  const [mc, setMc] = useState<number>(20);
  const [tfc, setTfc] = useState<number>(200);
  const [view, setView] = useState<BenchMode>("compare");

  // Linear inverse demand P(Q) = a - Q, MR(Q) = a - 2Q, constant MC = mc, AC(Q) = mc + tfc/Q
  const qm = (interceptA - mc) / 2;
  const pm = interceptA - qm;
  const acm = mc + tfc / qm;
  const profit = (pm - acm) * qm;
  const qpc = interceptA - mc;
  const dwl = 0.5 * (pm - mc) * (qpc - qm);

  const plane = makePlane({ width: 420, height: 270, xMin: 0, xMax: 80, yMin: 0, yMax: 90, pad: 34 });
  const { px, py } = plane;

  // Build smooth AC curve points for Q in [minQ, 78] where AC(Q) <= 88
  const acPoints: string[] = [];
  for (let q = 3; q <= 78; q += 1.5) {
    const val = mc + tfc / q;
    if (val <= 88) {
      acPoints.push(`${acPoints.length === 0 ? "M" : "L"} ${px(q).toFixed(1)} ${py(val).toFixed(1)}`);
    }
  }
  const acPath = acPoints.join(" ");

  const isProfit = profit > 0.01;
  const isNormal = Math.abs(profit) <= 0.01;
  const rectTop = Math.min(py(pm), py(acm));
  const rectHeight = Math.abs(py(acm) - py(pm));

  return (
    <WidgetFrame
      title="[HL] Monopoly vs Perfect Competition Profit & DWL Lab"
      tryThis={[
        "Find where **MC = MR** to read monopoly output **Qₘ**, then go **straight up to D = AR** for price **Pₘ**.",
        "Increase **Fixed Cost (TFC)** until **AC touches Pₘ** (normal profit = $0), then keep raising TFC to trigger a **short-run economic loss** — notice why the firm STILL stays open (**Pₘ > AVC = MC**)!",
        "Toggle **Compare PC Benchmark** to inspect the shaded **Deadweight Welfare Loss (DWL)** triangle between **Qₘ** and **Qₚc**.",
      ]}
      caption={
        <div className="space-y-1">
          <p>
            <strong>Profit Maximization (MC = MR):</strong> The monopolist sets <strong>Qₘ = {qm}</strong> and charges{" "}
            <strong>Pₘ = ${pm}</strong> (markup of <strong>${pm - mc}</strong> above MC = ${mc}), with unit cost{" "}
            <strong>AC = ${acm.toFixed(1)}</strong>.
          </p>
          <p>
            {isProfit ? (
              <>
                Because <strong>Pₘ &gt; AC</strong>, the firm earns <strong>${profit.toFixed(0)}</strong> of abnormal profit.
              </>
            ) : isNormal ? (
              <>
                Because <strong>Pₘ = AC</strong>, the firm earns exact <strong>normal profit ($0 economic profit)</strong>.
              </>
            ) : (
              <>
                Because <strong>MC &lt; Pₘ &lt; AC</strong>, the firm makes a short-run loss of <strong>${Math.abs(profit).toFixed(0)}</strong>, yet{" "}
                <strong>continues operating in the SR</strong> because Pₘ (${pm}) &gt; AVC (${mc})!
              </>
            )}{" "}
            Compared with perfect competition (<strong>Qₚc = {qpc}</strong> at <strong>P = MC = ${mc}</strong>), monopoly creates{" "}
            <strong>${dwl.toFixed(1)}</strong> of deadweight welfare loss.
          </p>
        </div>
      }
    >
      <div className="space-y-4">
        <Segmented<BenchMode>
          label="Comparison mode"
          value={view}
          onChange={setView}
          options={[
            { value: "monopoly", label: "Monopoly Only" },
            { value: "compare", label: "Compare PC Benchmark (P = MC)" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Demand Intercept (a)"
            value={interceptA}
            min={44}
            max={80}
            step={2}
            onChange={(v) => setInterceptA(Math.max(v, mc + 12))}
            format={(v) => `$${v}`}
          />
          <Slider
            label="Marginal Cost (MC)"
            value={mc}
            min={10}
            max={34}
            step={2}
            onChange={(v) => setMc(Math.min(v, interceptA - 12))}
            format={(v) => `$${v}`}
          />
          <Slider
            label="Fixed Cost (TFC)"
            value={tfc}
            min={0}
            max={600}
            step={25}
            onChange={setTfc}
            format={(v) => `$${v}`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 420 270"
            className="mx-auto block h-auto w-full max-w-[460px]"
            role="img"
            aria-label={`Interactive Monopoly vs Perfect Competition diagram showing Qm ${qm}, Pm $${pm}, economic profit $${profit.toFixed(0)}, and DWL $${dwl.toFixed(1)}`}
          >
            <PlaneGrid plane={plane} step={20} labels={false} />
            {/* Axes */}
            <line x1={px(0)} y1={py(0)} x2={px(80)} y2={py(0)} stroke="#334155" strokeWidth={1.8} />
            <line x1={px(0)} y1={py(0)} x2={px(0)} y2={py(90)} stroke="#334155" strokeWidth={1.8} />
            <text x={px(79)} y={py(0) + 22} fontSize={10.5} fontWeight={700} textAnchor="end" fill="#1e293b">
              Quantity (Q)
            </text>
            <text x={px(0) - 8} y={py(86)} fontSize={10} fontWeight={700} textAnchor="end" fill="#1e293b">
              $
            </text>

            {/* Economic Profit / Loss Rectangle */}
            {rectHeight > 0.5 && acm <= 90 ? (
              <rect
                x={px(0)}
                y={rectTop}
                width={px(qm) - px(0)}
                height={rectHeight}
                fill={isProfit ? "#bbf7d0" : "#fecaca"}
                fillOpacity={0.7}
                stroke={isProfit ? "#15803d" : "#dc2626"}
                strokeWidth={1.2}
              />
            ) : null}

            {/* Deadweight Loss Triangle (when PC Benchmark shown) */}
            {view === "compare" ? (
              <polygon
                points={`${px(qm)},${py(pm)} ${px(qm)},${py(mc)} ${px(qpc)},${py(mc)}`}
                fill="#fed7aa"
                fillOpacity={0.82}
                stroke="#c2410c"
                strokeWidth={1.4}
              />
            ) : null}

            {/* D = AR curve: (0, a) to (a, 0) clipped at x=80 */}
            <line
              x1={px(0)}
              y1={py(interceptA)}
              x2={px(Math.min(80, interceptA))}
              y2={py(Math.max(0, interceptA - 80))}
              stroke="#0d9488"
              strokeWidth={2.5}
            />
            <text x={px(Math.min(76, interceptA - 4))} y={py(Math.max(6, interceptA - 76)) - 6} fontSize={10.5} fontWeight={800} fill="#0f766e">
              D=AR
            </text>

            {/* MR curve: (0, a) to (a/2, 0) */}
            <line x1={px(0)} y1={py(interceptA)} x2={px(interceptA / 2)} y2={py(0)} stroke="#7c3aed" strokeWidth={2.2} strokeDasharray="6 3" />
            <text x={px(interceptA / 2) + 4} y={py(4)} fontSize={10.5} fontWeight={800} fill="#6d28d9">
              MR
            </text>

            {/* Constant MC = AVC line */}
            <line x1={px(0)} y1={py(mc)} x2={px(80)} y2={py(mc)} stroke="#dc2626" strokeWidth={2.5} />
            <text x={px(79)} y={py(mc) - 5} fontSize={10} fontWeight={800} textAnchor="end" fill="#b91c1c">
              MC = AVC
            </text>

            {/* Smooth AC curve */}
            {acPath ? <path d={acPath} fill="none" stroke="#2563eb" strokeWidth={2.3} /> : null}
            {tfc > 0 ? (
              <text x={px(76)} y={py(mc + tfc / 76) - 6} fontSize={10} fontWeight={800} textAnchor="end" fill="#1d4ed8">
                AC
              </text>
            ) : null}

            {/* Dashed guides */}
            <line x1={px(qm)} y1={py(pm)} x2={px(qm)} y2={py(0)} stroke="#475569" strokeWidth={1.3} strokeDasharray="4 3" />
            <line x1={px(0)} y1={py(pm)} x2={px(qm)} y2={py(pm)} stroke="#0d9488" strokeWidth={1.2} strokeDasharray="4 3" />
            {view === "compare" ? (
              <line x1={px(qpc)} y1={py(mc)} x2={px(qpc)} y2={py(0)} stroke="#c2410c" strokeWidth={1.2} strokeDasharray="4 3" />
            ) : null}

            {/* Dots */}
            <circle cx={px(qm)} cy={py(mc)} r={4} fill="#dc2626" />
            <circle cx={px(qm)} cy={py(pm)} r={4.5} fill="#0d9488" />
            {acm <= 90 ? <circle cx={px(qm)} cy={py(acm)} r={3.8} fill="#2563eb" /> : null}
            {view === "compare" ? <circle cx={px(qpc)} cy={py(mc)} r={4} fill="#c2410c" /> : null}

            {/* Axis labels */}
            <text x={px(qm)} y={py(0) + 13} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#0f766e">
              Qₘ
            </text>
            {view === "compare" ? (
              <text x={px(qpc)} y={py(0) + 13} fontSize={10.5} fontWeight={800} textAnchor="middle" fill="#c2410c">
                Qₚc
              </text>
            ) : null}
            <text x={px(0) - 5} y={py(pm) + 3.5} fontSize={10} fontWeight={800} textAnchor="end" fill="#0f766e">
              Pₘ
            </text>
            <text x={px(0) - 5} y={py(mc) + 3.5} fontSize={9.5} fontWeight={800} textAnchor="end" fill="#b91c1c">
              MC
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Monopoly Qₘ / Pₘ" value={`${qm} · $${pm}`} tone="brand" />
          <Readout
            label={isProfit ? "Abnormal Profit" : isNormal ? "Normal Profit" : "Economic Loss"}
            value={`${profit < 0 ? "−" : ""}$${Math.abs(profit).toFixed(0)}`}
            tone={isProfit ? "good" : isNormal ? "ink" : "bad"}
          />
          <Readout label="PC Output Qₚc" value={qpc} tone="ink" />
          <Readout label="Deadweight Loss" value={`$${dwl.toFixed(1)}`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "externality-pigouvian-explorer",
    title: "Externality & Pigouvian Policy Explorer",
    blurb: "Toggle all four externality types and slide a Pigouvian tax or subsidy to shrink the deadweight welfare loss triangle to zero.",
    Component: ExternalityPigouvianExplorer,
  },
  {
    id: "monopoly-pc-profit-lab",
    title: "[HL] Monopoly vs Perfect Competition Profit & DWL Lab",
    blurb: "Adjust demand, MC, and fixed costs to explore MC = MR profit maximization, short-run losses, and monopoly deadweight loss.",
    Component: MonopolyProfitDwlLab,
  },
];

export default widgets;
