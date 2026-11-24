"use client";

import { useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/** Clip linear line y = intercept + slope * x to [0, 100] x [0, 100]. */
function clipLineToBox(slope: number, intercept: number): Segment | null {
  const pts: Array<[number, number]> = [];
  const add = (x: number, y: number) => {
    if (x >= -1e-6 && x <= 100 + 1e-6 && y >= -1e-6 && y <= 100 + 1e-6) {
      const cx = Math.max(0, Math.min(100, x));
      const cy = Math.max(0, Math.min(100, y));
      if (!pts.some(([px, py]) => Math.hypot(px - cx, py - cy) < 1e-4)) {
        pts.push([cx, cy]);
      }
    }
  };
  add(0, intercept);
  add(100, intercept + slope * 100);
  if (Math.abs(slope) > 1e-9) {
    add(-intercept / slope, 0);
    add((100 - intercept) / slope, 100);
  }
  if (pts.length < 2) return null;
  pts.sort((a, b) => a[0] - b[0]);
  return { x1: pts[0][0], y1: pts[0][1], x2: pts[pts.length - 1][0], y2: pts[pts.length - 1][1] };
}

function TaxIncidenceSimulator() {
  // Initial equilibrium anchored at (Q_e = 50, P_e = 50)
  // Inverse demand: P = 50 + mD * (50 - Q) => point PED at equilibrium = 1 / mD
  // Inverse supply: P = 50 + mS * (Q - 50) => point PES at equilibrium = 1 / mS
  const [mD, setMD] = useState(1.4);
  const [mS, setMS] = useState(0.8);
  const [tax, setTax] = useState(20);

  const ped = 1 / mD;
  const pes = 1 / mS;

  const pe = 50;
  const qe = 50;
  const dQ = tax / (mD + mS);
  const qt = Math.max(0, qe - dQ);
  const pc = pe + mD * dQ;
  const pp = pe - mS * dQ;

  const consumerSharePct = Math.round((mD / (mD + mS)) * 100);
  const producerSharePct = 100 - consumerSharePct;
  const consumerBurden = (pc - pe) * qt;
  const producerBurden = (pe - pp) * qt;
  const govtRevenue = tax * qt;
  const dwl = 0.5 * tax * dQ;

  // Plot geometry inside viewBox 0 0 420 285
  const padL = 52;
  const padR = 26;
  const padT = 22;
  const padB = 42;
  const plotW = 420 - padL - padR;
  const plotH = 285 - padT - padB;
  const sx = (q: number) => padL + (q / 100) * plotW;
  const sy = (p: number) => padT + plotH - (p / 100) * plotH;

  const segD = clipLineToBox(-mD, 50 + 50 * mD);
  const segS1 = clipLineToBox(mS, 50 - 50 * mS);
  const segS2 = tax > 0 ? clipLineToBox(mS, 50 + tax - 50 * mS) : null;

  const burdenComparison =
    tax === 0
      ? "Set a positive specific tax ($t > 0) to see how relative elasticities split the tax wedge between buyers and sellers."
      : Math.abs(ped - pes) < 0.05
        ? `Because PED (${ped.toFixed(2)}) ≈ PES (${pes.toFixed(2)}), consumers and producers split the $${tax} tax roughly 50 / 50 ($${(pc - pe).toFixed(2)} each).`
        : ped < pes
          ? `Because demand is MORE inelastic than supply (PED = ${ped.toFixed(2)} < PES = ${pes.toFixed(2)}), consumers bear ${consumerSharePct}% of the $${tax} tax (+$${(pc - pe).toFixed(2)} per unit) while producers absorb ${producerSharePct}% (−$${(pe - pp).toFixed(2)} per unit).`
          : `Because supply is MORE inelastic than demand (PES = ${pes.toFixed(2)} < PED = ${ped.toFixed(2)}), producers absorb ${producerSharePct}% of the $${tax} tax (−$${(pe - pp).toFixed(2)} per unit) while consumers pay only ${consumerSharePct}% (+$${(pc - pe).toFixed(2)} per unit).`;

  return (
    <WidgetFrame
      title="Specific Indirect Tax & Incidence Simulator"
      tryThis={[
        "Make demand steep (**low PED**) and supply flat (**high PES**) — watch the blue Consumer Burden dominate!",
        "Flip it (**high PED**, **low PES**) and notice how producers absorb the bulk of the tax.",
        "Double the specific tax from **$12** to **$24** — notice how Deadweight Loss quadruples ({{DWL ∝ t^2}})!",
      ]}
      caption={
        <span>
          <strong>Incidence Rule:</strong> {burdenComparison} Total Government Revenue ={" "}
          <strong>${govtRevenue.toFixed(0)}</strong>, and Deadweight Welfare Loss ={" "}
          <strong>${dwl.toFixed(0)}</strong>.
        </span>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider
            label="Demand steepness (PED)"
            value={mD}
            min={0.4}
            max={2.4}
            step={0.2}
            onChange={setMD}
            format={(v) => `PED = ${(1 / v).toFixed(2)}`}
          />
          <Slider
            label="Supply steepness (PES)"
            value={mS}
            min={0.4}
            max={2.4}
            step={0.2}
            onChange={setMS}
            format={(v) => `PES = ${(1 / v).toFixed(2)}`}
          />
          <Slider
            label="Specific tax ($t / unit)"
            value={tax}
            min={0}
            max={36}
            step={2}
            onChange={setTax}
            format={(v) => `$${v}`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2/60 p-2">
          <svg
            viewBox="0 0 420 285"
            className="block h-auto w-full max-w-full"
            role="img"
            aria-label="Interactive specific indirect tax diagram showing shaded consumer tax burden, producer tax burden, and deadweight welfare loss"
          >
            {/* Light grid lines */}
            {[20, 40, 60, 80].map((v) => (
              <g key={v}>
                <line x1={sx(v)} x2={sx(v)} y1={sy(0)} y2={sy(100)} className="stroke-line" strokeWidth={1} />
                <line x1={sx(0)} x2={sx(100)} y1={sy(v)} y2={sy(v)} className="stroke-line" strokeWidth={1} />
              </g>
            ))}

            {/* Shaded Tax Incidence & DWL */}
            {tax > 0 && qt > 0 ? (
              <g>
                {/* Consumer Tax Burden rectangle */}
                <rect
                  x={sx(0)}
                  y={sy(pc)}
                  width={Math.max(0, sx(qt) - sx(0))}
                  height={Math.max(0, sy(pe) - sy(pc))}
                  className="fill-info"
                  fillOpacity={0.26}
                />
                {/* Producer Tax Burden rectangle */}
                <rect
                  x={sx(0)}
                  y={sy(pe)}
                  width={Math.max(0, sx(qt) - sx(0))}
                  height={Math.max(0, sy(pp) - sy(pe))}
                  className="fill-brand"
                  fillOpacity={0.26}
                />
                {/* Deadweight Loss triangle */}
                <polygon
                  points={`${sx(qt)},${sy(pc)} ${sx(qt)},${sy(pp)} ${sx(qe)},${sy(pe)}`}
                  className="fill-bad"
                  fillOpacity={0.34}
                />
              </g>
            ) : null}

            {/* Axes */}
            <line x1={sx(0)} y1={sy(100)} x2={sx(0)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.8} />
            <line x1={sx(0)} y1={sy(0)} x2={sx(100)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.8} />
            <text x={sx(0) - 6} y={sy(100) + 4} fontSize={11} fontWeight={700} textAnchor="end" className="fill-ink">
              P ($)
            </text>
            <text x={sx(100)} y={sy(0) + 30} fontSize={11} fontWeight={700} textAnchor="end" className="fill-ink">
              Quantity (units)
            </text>

            {/* Curves */}
            {segD ? (
              <line
                x1={sx(segD.x1)}
                y1={sy(segD.y1)}
                x2={sx(segD.x2)}
                y2={sy(segD.y2)}
                className="stroke-accent"
                strokeWidth={2.6}
              />
            ) : null}
            {segS1 ? (
              <line
                x1={sx(segS1.x1)}
                y1={sy(segS1.y1)}
                x2={sx(segS1.x2)}
                y2={sy(segS1.y2)}
                className="stroke-brand"
                strokeWidth={2.4}
              />
            ) : null}
            {segS2 ? (
              <line
                x1={sx(segS2.x1)}
                y1={sy(segS2.y1)}
                x2={sx(segS2.x2)}
                y2={sy(segS2.y2)}
                className="stroke-bad"
                strokeWidth={2.6}
              />
            ) : null}

            {/* Curve tags */}
            {segD ? (
              <text x={sx(segD.x2) - 4} y={Math.max(padT + 12, sy(segD.y2) - 6)} fontSize={11} fontWeight={800} textAnchor="end" className="fill-accent">
                D
              </text>
            ) : null}
            {segS1 ? (
              <text x={sx(segS1.x2) - 4} y={Math.min(sy(0) - 6, sy(segS1.y2) + 14)} fontSize={11} fontWeight={800} textAnchor="end" className="fill-brand">
                S₁
              </text>
            ) : null}
            {segS2 ? (
              <text x={sx(segS2.x2) - 4} y={Math.max(padT + 12, sy(segS2.y2) - 5)} fontSize={11} fontWeight={800} textAnchor="end" className="fill-bad">
                S₂ = S₁ + t
              </text>
            ) : null}

            {/* Reference dashed lines */}
            <line x1={sx(0)} x2={sx(qe)} y1={sy(pe)} y2={sy(pe)} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4,3" />
            <line x1={sx(qe)} x2={sx(qe)} y1={sy(pe)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4,3" />
            {tax > 0 ? (
              <g>
                <line x1={sx(0)} x2={sx(qt)} y1={sy(pc)} y2={sy(pc)} className="stroke-info" strokeWidth={1.4} strokeDasharray="4,3" />
                <line x1={sx(0)} x2={sx(qt)} y1={sy(pp)} y2={sy(pp)} className="stroke-brand" strokeWidth={1.4} strokeDasharray="4,3" />
                <line x1={sx(qt)} x2={sx(qt)} y1={sy(pc)} y2={sy(0)} className="stroke-ink" strokeWidth={1.4} strokeDasharray="4,3" />
              </g>
            ) : null}

            {/* Key equilibrium markers */}
            <circle cx={sx(qe)} cy={sy(pe)} r={4} className="fill-ink-2" />
            {tax > 0 ? (
              <g>
                <circle cx={sx(qt)} cy={sy(pc)} r={4.5} className="fill-info" />
                <circle cx={sx(qt)} cy={sy(pp)} r={4} className="fill-brand" />
              </g>
            ) : null}

            {/* Axis labels */}
            <text x={sx(0) - 6} y={sy(pe) + 4} fontSize={10.5} fontWeight={700} textAnchor="end" className="fill-ink">
              P_e={pe}
            </text>
            {tax > 0 ? (
              <g>
                <text x={sx(0) - 6} y={sy(pc) + 4} fontSize={10.5} fontWeight={800} textAnchor="end" className="fill-info">
                  P_c={pc.toFixed(0)}
                </text>
                <text x={sx(0) - 6} y={sy(pp) + 4} fontSize={10.5} fontWeight={800} textAnchor="end" className="fill-brand">
                  P_p={pp.toFixed(0)}
                </text>
                <text x={sx(qt)} y={sy(0) + 14} fontSize={10.5} fontWeight={800} textAnchor="middle" className="fill-ink">
                  Q_t={qt.toFixed(0)}
                </text>
              </g>
            ) : null}
            <text x={sx(qe)} y={sy(0) + (tax > 0 && qe - qt < 12 ? 26 : 14)} fontSize={10.5} fontWeight={700} textAnchor="middle" className="fill-ink-2">
              Q_e={qe}
            </text>
          </svg>
        </div>

        {/* Compact legend */}
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink-2">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-info/40 border border-info" />
            Consumer Burden ({consumerSharePct}%)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-brand/40 border border-brand" />
            Producer Burden ({producerSharePct}%)
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-bad/50 border border-bad" />
            Deadweight Loss (DWL)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Consumer Burden" value={`$${consumerBurden.toFixed(0)}`} tone="ink" />
          <Readout label="Producer Burden" value={`$${producerBurden.toFixed(0)}`} tone="brand" />
          <Readout label="Govt Tax Revenue" value={`$${govtRevenue.toFixed(0)}`} tone="good" />
          <Readout label="Deadweight Loss" value={`$${dwl.toFixed(0)}`} tone={dwl > 0 ? "bad" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

function PriceControlWelfareExplorer() {
  // Symmetric linear market: Q_d = 100 - P, Q_s = P -> P_e = $50, Q_e = 50, CS0 = PS0 = $1,250, TS0 = $2,500
  const [mode, setMode] = useState<"ceiling" | "floor">("ceiling");
  const [pReg, setPReg] = useState(32);

  const handleModeChange = (next: "ceiling" | "floor") => {
    setMode(next);
    setPReg(next === "ceiling" ? 32 : 68);
  };

  const pe = 50;
  const qe = 50;
  const isBinding = mode === "ceiling" ? pReg < pe : pReg > pe;

  const qdAtReg = 100 - pReg;
  const qsAtReg = pReg;

  let qTraded = qe;
  let cs = 1250;
  let ps = 1250;
  let dwl = 0;
  let imbalance = 0;
  let pBlack = pe;
  let govtBuyCost = 0;

  if (mode === "ceiling" && isBinding) {
    qTraded = qsAtReg;
    imbalance = qdAtReg - qsAtReg;
    pBlack = 100 - qTraded;
    ps = 0.5 * qTraded * pReg;
    cs = 0.5 * ((100 - pReg) + (pBlack - pReg)) * qTraded;
    dwl = 0.5 * (pBlack - pReg) * (qe - qTraded);
  } else if (mode === "floor" && isBinding) {
    qTraded = qdAtReg;
    imbalance = qsAtReg - qdAtReg;
    const pSupplyAtQ = qTraded;
    cs = 0.5 * qTraded * (100 - pReg);
    ps = 0.5 * (pReg + (pReg - pSupplyAtQ)) * qTraded;
    dwl = 0.5 * (pReg - pSupplyAtQ) * (qe - qTraded);
    govtBuyCost = pReg * imbalance;
  }

  const padL = 52;
  const padR = 26;
  const padT = 22;
  const padB = 42;
  const plotW = 420 - padL - padR;
  const plotH = 285 - padT - padB;
  const sx = (q: number) => padL + (q / 100) * plotW;
  const sy = (p: number) => padT + plotH - (p / 100) * plotH;

  return (
    <WidgetFrame
      title="Price Ceiling & Price Floor Welfare Explorer"
      tryThis={[
        "In **Price Ceiling** mode, drag the cap ABOVE **$50** — notice it becomes **non-binding**!",
        "Lower the Price Ceiling to **$30** and read the **shortage** and potential **parallel-market price** ({{P_black}}).",
        "Switch to **Price Floor** at **$70** and compare Deadweight Loss against the **government surplus-purchase bill**.",
      ]}
      caption={
        !isBinding ? (
          <span>
            <strong>Non-binding {mode === "ceiling" ? "Price Ceiling" : "Price Floor"}:</strong>{" "}
            {mode === "ceiling"
              ? `A legal maximum of $${pReg} sits at or above equilibrium ($50), so it does not restrict trade.`
              : `A legal minimum of $${pReg} sits at or below equilibrium ($50), so it does not restrict trade.`}{" "}
            Market stays at <strong>($50, 50 units)</strong> with <strong>$0</strong> Deadweight Loss.
          </span>
        ) : mode === "ceiling" ? (
          <span>
            <strong>Binding Price Ceiling at ${pReg}:</strong> Output contracts to{" "}
            <strong>{qTraded} units</strong> while buyers demand <strong>{qdAtReg} units</strong>, creating a persistent{" "}
            <strong>shortage of {imbalance} units</strong>. Unserved buyers willing to pay up to{" "}
            <strong>${pBlack}</strong> fuel parallel markets, and society loses <strong>${dwl.toFixed(0)}</strong> in Deadweight Welfare Loss.
          </span>
        ) : (
          <span>
            <strong>Binding Price Floor at ${pReg}:</strong> Sellers supply <strong>{qsAtReg} units</strong> while buyers only purchase{" "}
            <strong>{qTraded} units</strong>, leaving a persistent <strong>surplus of {imbalance} units</strong> and{" "}
            <strong>${dwl.toFixed(0)}</strong> DWL. If the government buys up the surplus to maintain the floor, taxpayers spend{" "}
            <strong>${govtBuyCost.toLocaleString("en-US")}</strong>!
          </span>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Price control type"
            value={mode}
            onChange={handleModeChange}
            options={[
              { value: "ceiling", label: "Price Ceiling (Max)" },
              { value: "floor", label: "Price Floor (Min)" },
            ]}
          />
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">
            Market: <M>{"Q_d = 100 - P"}</M> · <M>{"Q_s = P"}</M>
          </span>
        </div>

        <Slider
          label={mode === "ceiling" ? "Legal Maximum Price (P_max)" : "Legal Minimum Price (P_min)"}
          value={pReg}
          min={10}
          max={90}
          step={2}
          onChange={setPReg}
          format={(v) => `$${v} ${mode === "ceiling" ? (v < 50 ? "(Binding)" : "(Non-binding)") : v > 50 ? "(Binding)" : "(Non-binding)"}`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-surface-2/60 p-2">
          <svg
            viewBox="0 0 420 285"
            className="block h-auto w-full max-w-full"
            role="img"
            aria-label="Interactive price ceiling and price floor welfare diagram showing consumer surplus, producer surplus, shortage or surplus, and deadweight welfare loss"
          >
            {/* Grid */}
            {[20, 40, 60, 80].map((v) => (
              <g key={v}>
                <line x1={sx(v)} x2={sx(v)} y1={sy(0)} y2={sy(100)} className="stroke-line" strokeWidth={1} />
                <line x1={sx(0)} x2={sx(100)} y1={sy(v)} y2={sy(v)} className="stroke-line" strokeWidth={1} />
              </g>
            ))}

            {/* Shaded Welfare Regions */}
            {!isBinding ? (
              <g>
                <polygon points={`${sx(0)},${sy(100)} ${sx(0)},${sy(50)} ${sx(50)},${sy(50)}`} className="fill-accent" fillOpacity={0.2} />
                <polygon points={`${sx(0)},${sy(50)} ${sx(0)},${sy(0)} ${sx(50)},${sy(50)}`} className="fill-brand" fillOpacity={0.2} />
              </g>
            ) : mode === "ceiling" ? (
              <g>
                {/* CS trapezoid */}
                <polygon
                  points={`${sx(0)},${sy(100)} ${sx(0)},${sy(pReg)} ${sx(qTraded)},${sy(pReg)} ${sx(qTraded)},${sy(pBlack)}`}
                  className="fill-accent"
                  fillOpacity={0.22}
                />
                {/* PS triangle */}
                <polygon
                  points={`${sx(0)},${sy(pReg)} ${sx(0)},${sy(0)} ${sx(qTraded)},${sy(pReg)}`}
                  className="fill-brand"
                  fillOpacity={0.22}
                />
                {/* DWL triangle */}
                <polygon
                  points={`${sx(qTraded)},${sy(pBlack)} ${sx(qTraded)},${sy(pReg)} ${sx(qe)},${sy(pe)}`}
                  className="fill-bad"
                  fillOpacity={0.34}
                />
              </g>
            ) : (
              <g>
                {/* CS triangle */}
                <polygon
                  points={`${sx(0)},${sy(100)} ${sx(0)},${sy(pReg)} ${sx(qTraded)},${sy(pReg)}`}
                  className="fill-accent"
                  fillOpacity={0.22}
                />
                {/* PS trapezoid */}
                <polygon
                  points={`${sx(0)},${sy(pReg)} ${sx(0)},${sy(0)} ${sx(qTraded)},${sy(qTraded)} ${sx(qTraded)},${sy(pReg)}`}
                  className="fill-brand"
                  fillOpacity={0.22}
                />
                {/* DWL triangle */}
                <polygon
                  points={`${sx(qTraded)},${sy(pReg)} ${sx(qTraded)},${sy(qTraded)} ${sx(qe)},${sy(pe)}`}
                  className="fill-bad"
                  fillOpacity={0.34}
                />
              </g>
            )}

            {/* Axes */}
            <line x1={sx(0)} y1={sy(100)} x2={sx(0)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.8} />
            <line x1={sx(0)} y1={sy(0)} x2={sx(100)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.8} />
            <text x={sx(0) - 6} y={sy(100) + 4} fontSize={11} fontWeight={700} textAnchor="end" className="fill-ink">
              P ($)
            </text>
            <text x={sx(100)} y={sy(0) + 30} fontSize={11} fontWeight={700} textAnchor="end" className="fill-ink">
              Quantity (units)
            </text>

            {/* D and S curves */}
            <line x1={sx(0)} y1={sy(100)} x2={sx(100)} y2={sy(0)} className="stroke-accent" strokeWidth={2.6} />
            <line x1={sx(0)} y1={sy(0)} x2={sx(100)} y2={sy(100)} className="stroke-brand" strokeWidth={2.6} />
            <text x={sx(95)} y={sy(8)} fontSize={11} fontWeight={800} className="fill-accent">D</text>
            <text x={sx(95)} y={sy(94)} fontSize={11} fontWeight={800} className="fill-brand">S</text>

            {/* Equilibrium dashed guides */}
            <line x1={sx(0)} x2={sx(qe)} y1={sy(pe)} y2={sy(pe)} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4,3" />
            <line x1={sx(qe)} x2={sx(qe)} y1={sy(pe)} y2={sy(0)} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4,3" />

            {/* Regulatory price horizontal line */}
            <line
              x1={sx(0)}
              x2={sx(100)}
              y1={sy(pReg)}
              y2={sy(pReg)}
              className={isBinding ? "stroke-bad" : "stroke-ink-2"}
              strokeWidth={isBinding ? 2.4 : 1.6}
              strokeDasharray={isBinding ? undefined : "6,4"}
            />
            <text
              x={sx(98)}
              y={sy(pReg) - 5}
              fontSize={10.5}
              fontWeight={800}
              textAnchor="end"
              className={isBinding ? "fill-bad" : "fill-ink-2"}
            >
              {mode === "ceiling" ? `P_max = $${pReg}` : `P_min = $${pReg}`}
            </text>

            {/* Binding shortage / surplus bracket and projections */}
            {isBinding ? (
              <g>
                <line x1={sx(qsAtReg)} x2={sx(qsAtReg)} y1={sy(pReg)} y2={sy(0)} className="stroke-ink" strokeWidth={1.3} strokeDasharray="4,3" />
                <line x1={sx(qdAtReg)} x2={sx(qdAtReg)} y1={sy(pReg)} y2={sy(0)} className="stroke-ink" strokeWidth={1.3} strokeDasharray="4,3" />
                {mode === "ceiling" ? (
                  <>
                    <line x1={sx(0)} x2={sx(qTraded)} y1={sy(pBlack)} y2={sy(pBlack)} className="stroke-info" strokeWidth={1.3} strokeDasharray="4,3" />
                    <circle cx={sx(qTraded)} cy={sy(pBlack)} r={3.8} className="fill-info" />
                    <text x={sx(0) - 6} y={sy(pBlack) + 4} fontSize={10} fontWeight={700} textAnchor="end" className="fill-info">
                      ${pBlack}
                    </text>
                  </>
                ) : null}
                {/* Horizontal shortage / surplus indicator bar */}
                <line
                  x1={sx(Math.min(qsAtReg, qdAtReg))}
                  x2={sx(Math.max(qsAtReg, qdAtReg))}
                  y1={sy(pReg) + (mode === "ceiling" ? 13 : -13)}
                  y2={sy(pReg) + (mode === "ceiling" ? 13 : -13)}
                  className="stroke-bad"
                  strokeWidth={2}
                />
                <text
                  x={sx(50)}
                  y={sy(pReg) + (mode === "ceiling" ? 26 : -18)}
                  fontSize={10.5}
                  fontWeight={800}
                  textAnchor="middle"
                  className="fill-bad"
                >
                  {mode === "ceiling" ? `Shortage = ${imbalance}` : `Surplus = ${imbalance}`}
                </text>
                <circle cx={sx(qsAtReg)} cy={sy(pReg)} r={4} className="fill-bad" />
                <circle cx={sx(qdAtReg)} cy={sy(pReg)} r={4} className="fill-bad" />
              </g>
            ) : null}

            <circle cx={sx(qe)} cy={sy(pe)} r={4} className="fill-ink" />
            {!isBinding || Math.abs(pReg - pe) >= 8 ? (
              <text x={sx(0) - 6} y={sy(pe) + 4} fontSize={10.5} fontWeight={700} textAnchor="end" className="fill-ink-2">
                $50
              </text>
            ) : null}
            {isBinding ? (
              <text x={sx(0) - 6} y={sy(pReg) + 4} fontSize={10.5} fontWeight={800} textAnchor="end" className="fill-bad">
                ${pReg}
              </text>
            ) : null}
            <text
              x={sx(qe)}
              y={sy(0) + (isBinding && Math.abs(pReg - pe) < 12 ? 26 : 14)}
              fontSize={10.5}
              fontWeight={700}
              textAnchor="middle"
              className="fill-ink-2"
            >
              50
            </text>
            {isBinding ? (
              <>
                <text x={sx(qsAtReg)} y={sy(0) + 14} fontSize={10} fontWeight={800} textAnchor="middle" className="fill-ink">
                  Q_s={qsAtReg}
                </text>
                <text x={sx(qdAtReg)} y={sy(0) + 14} fontSize={10} fontWeight={800} textAnchor="middle" className="fill-ink">
                  Q_d={qdAtReg}
                </text>
              </>
            ) : null}
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout label="Consumer Surplus" value={`$${cs.toFixed(0)}`} tone="good" />
          <Readout label="Producer Surplus" value={`$${ps.toFixed(0)}`} tone="brand" />
          <Readout
            label={mode === "ceiling" ? "Shortage" : "Surplus"}
            value={`${imbalance} units`}
            tone={imbalance > 0 ? "bad" : "ink"}
          />
          <Readout label="Deadweight Loss" value={`$${dwl.toFixed(0)}`} tone={dwl > 0 ? "bad" : "ink"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tax-incidence-simulator",
    title: "Specific Indirect Tax & Incidence Simulator",
    blurb: "Adjust PED, PES, and the specific tax ($t) to watch Consumer Burden, Producer Burden, Government Revenue, and DWL respond live.",
    Component: TaxIncidenceSimulator,
  },
  {
    id: "price-control-welfare-explorer",
    title: "Price Ceiling & Price Floor Welfare Explorer",
    blurb: "Compare binding vs non-binding maximum and minimum prices, parallel-market incentives, surpluses, and Deadweight Loss.",
    Component: PriceControlWelfareExplorer,
  },
];

export default widgets;
