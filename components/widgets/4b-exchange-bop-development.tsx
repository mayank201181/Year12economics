"use client";
import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

type Regime = "floating" | "managed" | "fixed";

// ---------------------------------------------------------------------------
// Widget 1: Foreign Exchange Market & MAS Managed Band Explorer
// ---------------------------------------------------------------------------
function FxMasBandExplorer() {
  const [regime, setRegime] = useState<Regime>("managed");
  const [rateDiff, setRateDiff] = useState(0); // domestic − foreign interest rate (%)
  const [exportShock, setExportShock] = useState(0); // % foreign export demand shock
  const [inflDiff, setInflDiff] = useState(0); // domestic − foreign inflation (%)

  const sim = useMemo(() => {
    const e0 = 0.75; // USD per SGD
    const q0 = 50;
    const bandHalf = 0.015; // ±2.0% of 0.750 = ±0.015 → [0.735, 0.765]
    const upper = e0 + bandHalf;
    const lower = e0 - bandHalf;

    // Horizontal shifts in Quantity of SGD
    const dShift = 4.0 * rateDiff + 0.35 * exportShock - 3.0 * inflDiff;
    const sShift = -2.0 * rateDiff + 3.0 * inflDiff;

    // D1: e = 1.000 + 0.005*dShift - 0.005*Q
    // S1: e = 0.500 - 0.005*sShift + 0.005*Q
    const eMkt = e0 + 0.0025 * (dShift - sShift);
    const qMkt = q0 + 0.5 * (dShift + sShift);

    let eActual = eMkt;
    let action: "none" | "sell_sgd" | "buy_sgd" = "none";
    let excessGap = 0;

    if (regime === "fixed") {
      eActual = e0;
      const qdAtTarget = (1.0 - eActual) / 0.005 + dShift;
      const qsAtTarget = (eActual - 0.5) / 0.005 + sShift;
      excessGap = qdAtTarget - qsAtTarget;
      if (excessGap > 0.25) action = "sell_sgd";
      else if (excessGap < -0.25) action = "buy_sgd";
    } else if (regime === "managed") {
      if (eMkt > upper) {
        eActual = upper;
        const qdAtTarget = (1.0 - eActual) / 0.005 + dShift;
        const qsAtTarget = (eActual - 0.5) / 0.005 + sShift;
        excessGap = qdAtTarget - qsAtTarget;
        action = "sell_sgd";
      } else if (eMkt < lower) {
        eActual = lower;
        const qdAtTarget = (1.0 - eActual) / 0.005 + dShift;
        const qsAtTarget = (eActual - 0.5) / 0.005 + sShift;
        excessGap = qdAtTarget - qsAtTarget;
        action = "buy_sgd";
      }
    }

    const pctChange = ((eActual - e0) / e0) * 100;
    const qdAtActual = (1.0 - eActual) / 0.005 + dShift;
    const qsAtActual = (eActual - 0.5) / 0.005 + sShift;

    return {
      e0,
      q0,
      upper,
      lower,
      dShift,
      sShift,
      eMkt,
      qMkt,
      eActual,
      pctChange,
      action,
      excessGap,
      qdAtActual,
      qsAtActual,
    };
  }, [regime, rateDiff, exportShock, inflDiff]);

  // SVG coordinate helpers: Q in [0, 100], e in [0.60, 0.90]
  const W = 480;
  const H = 300;
  const padL = 62;
  const padR = 26;
  const padT = 26;
  const padB = 46;
  const px = (q: number) => padL + ((q - 0) / 100) * (W - padL - padR);
  const py = (e: number) => H - padB - ((e - 0.6) / 0.3) * (H - padT - padB);

  const clampLine = (slope: number, intercept: number): [number, number, number, number] => {
    // e = intercept + slope * q, clip to q in [6, 94], e in [0.62, 0.88]
    const pts: Array<[number, number]> = [];
    for (const q of [6, 94]) {
      const e = intercept + slope * q;
      if (e >= 0.62 && e <= 0.88) pts.push([q, e]);
    }
    for (const e of [0.62, 0.88]) {
      const q = (e - intercept) / slope;
      if (q > 6 && q < 94) pts.push([q, e]);
    }
    pts.sort((a, b) => a[0] - b[0]);
    const p1 = pts[0] ?? [10, 0.75];
    const p2 = pts[pts.length - 1] ?? [90, 0.75];
    return [px(p1[0]), py(p1[1]), px(p2[0]), py(p2[1])];
  };

  const d0 = clampLine(-0.005, 1.0);
  const s0 = clampLine(0.005, 0.5);
  const d1 = clampLine(-0.005, 1.0 + 0.005 * sim.dShift);
  const s1 = clampLine(0.005, 0.5 - 0.005 * sim.sShift);

  const directionLabel =
    sim.action !== "none" && regime === "fixed"
      ? "At Fixed Peg"
      : sim.action !== "none" && regime === "managed"
        ? sim.action === "sell_sgd"
          ? "At Ceiling"
          : "At Floor"
        : sim.pctChange > 0.15
          ? "Appreciation"
          : sim.pctChange < -0.15
            ? "Depreciation"
            : "Equilibrium";

  const cbActionLabel =
    sim.action === "sell_sgd"
      ? "Sell SGD (+FX)"
      : sim.action === "buy_sgd"
        ? "Buy SGD (−FX)"
        : regime === "floating"
          ? "Free Float"
          : "Inside Band";

  const macroLabel =
    sim.pctChange > 0.3
      ? "Import CPI ↓"
      : sim.pctChange < -0.3
        ? "Import CPI ↑"
        : "Neutral";

  const applyPreset = (name: "reset" | "mas" | "boom" | "flight") => {
    if (name === "reset") {
      setRateDiff(0);
      setExportShock(0);
      setInflDiff(0);
    } else if (name === "mas") {
      setRegime("managed");
      setRateDiff(1.5);
      setExportShock(15);
      setInflDiff(-1.0);
    } else if (name === "boom") {
      setRateDiff(0.5);
      setExportShock(25);
      setInflDiff(0);
    } else {
      setRateDiff(-2.5);
      setExportShock(-15);
      setInflDiff(2.0);
    }
  };

  return (
    <WidgetFrame
      title="Foreign Exchange Market & MAS Managed Band Explorer"
      tryThis={[
        "Switch to **Managed Float (MAS S$NEER)** and click **Capital Flight** — watch the SGD hit the lower band so MAS buys SGD using foreign reserves.",
        "Raise **Domestic − Foreign Interest Rates** to `+2.0%` under **Floating** vs **Fixed Peg** to compare market appreciation against reserve accumulation.",
      ]}
      caption={
        <div>
          <strong>Live Transmission:</strong>{" "}
          {Math.abs(sim.dShift) < 0.01 && Math.abs(sim.sShift) < 0.01 ? (
            <>At baseline equilibrium (<code>1 SGD = 0.750 USD</code>), demand equals supply with zero central bank intervention.</>
          ) : (
            <>
              Shocks shift <strong>D(SGD)</strong>{" "}
              {sim.dShift >= 0 ? `right (+${sim.dShift.toFixed(1)})` : `left (${sim.dShift.toFixed(1)})`} and{" "}
              <strong>S(SGD)</strong>{" "}
              {sim.sShift >= 0 ? `right (+${sim.sShift.toFixed(1)})` : `left (${sim.sShift.toFixed(1)})`}, moving the
              free-market clearing rate to <strong>{sim.eMkt.toFixed(3)} USD/SGD</strong>.{" "}
              {sim.action === "sell_sgd"
                ? `Because this breaches the ${regime === "fixed" ? "fixed peg" : "upper S$NEER band"}, the central bank sells SGD and accumulates foreign reserves to hold the rate at ${sim.eActual.toFixed(3)} USD/SGD.`
                : sim.action === "buy_sgd"
                  ? `Because this falls below the ${regime === "fixed" ? "fixed peg" : "lower S$NEER band"}, the central bank must buy SGD using foreign reserves (or tighten monetary policy) to defend ${sim.eActual.toFixed(3)} USD/SGD.`
                  : regime === "managed"
                    ? `Because ${sim.eMkt.toFixed(3)} stays safely inside the ±2% policy band (${sim.lower.toFixed(3)}–${sim.upper.toFixed(3)}), MAS lets market forces clear with no reserve intervention.`
                    : `Under a free float, the currency adjusts fully to ${sim.eActual.toFixed(3)} USD/SGD (${sim.pctChange >= 0 ? "+" : ""}${sim.pctChange.toFixed(1)}%), preserving independent domestic monetary policy.`}
            </>
          )}
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Exchange rate regime"
            value={regime}
            onChange={setRegime}
            options={[
              { value: "floating", label: "Floating" },
              { value: "managed", label: "MAS Managed (±2%)" },
              { value: "fixed", label: "Fixed Peg" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("reset")}>
              Reset
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("mas")}>
              MAS Squeeze
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("boom")}>
              Export Boom
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("flight")}>
              Capital Flight
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            <Slider
              label="Interest Rate Diff (Domestic − Foreign)"
              value={rateDiff}
              min={-3}
              max={3}
              step={0.5}
              onChange={setRateDiff}
              format={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`}
            />
            <Slider
              label="Foreign Demand for Exports"
              value={exportShock}
              min={-30}
              max={30}
              step={5}
              onChange={setExportShock}
              format={(v) => `${v > 0 ? "+" : ""}${v}%`}
            />
            <Slider
              label="Relative Domestic Inflation"
              value={inflDiff}
              min={-3}
              max={3}
              step={0.5}
              onChange={setInflDiff}
              format={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%`}
            />
          </div>

          <div className="rounded-xl border border-line bg-white p-2 lg:col-span-7">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="mx-auto block h-auto w-full max-w-[500px]"
              role="img"
              aria-label={`Foreign exchange market for SGD showing actual rate ${sim.eActual.toFixed(3)} USD per SGD under ${regime} regime`}
            >
              {/* Managed policy band shading */}
              {regime === "managed" ? (
                <g>
                  <rect
                    x={padL}
                    y={py(sim.upper)}
                    width={W - padL - padR}
                    height={py(sim.lower) - py(sim.upper)}
                    fill="#fef3c7"
                    opacity={0.75}
                  />
                  <line x1={padL} x2={W - padR} y1={py(sim.upper)} y2={py(sim.upper)} stroke="#b45309" strokeWidth={1.5} strokeDasharray="5,4" />
                  <line x1={padL} x2={W - padR} y1={py(sim.lower)} y2={py(sim.lower)} stroke="#b45309" strokeWidth={1.5} strokeDasharray="5,4" />
                  <text x={W - padR - 4} y={py(sim.upper) - 4} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#92400e">
                    Upper Band ({sim.upper.toFixed(3)})
                  </text>
                  <text x={W - padR - 4} y={py(sim.lower) + 11} textAnchor="end" fontSize={9.5} fontWeight={700} fill="#92400e">
                    Lower Band ({sim.lower.toFixed(3)})
                  </text>
                </g>
              ) : null}

              {/* Fixed peg line */}
              {regime === "fixed" ? (
                <g>
                  <line x1={padL} x2={W - padR} y1={py(sim.e0)} y2={py(sim.e0)} stroke="#b45309" strokeWidth={2} strokeDasharray="6,4" />
                  <text x={W - padR - 4} y={py(sim.e0) - 5} textAnchor="end" fontSize={10} fontWeight={700} fill="#92400e">
                    Fixed Peg ({sim.e0.toFixed(3)})
                  </text>
                </g>
              ) : null}

              {/* Axes */}
              <line x1={padL} y1={H - padB} x2={padL} y2={padT} stroke="#1f2937" strokeWidth={2} />
              <line x1={padL} y1={H - padB} x2={W - padR} y2={H - padB} stroke="#1f2937" strokeWidth={2} />
              <text x={18} y={H / 2 - 8} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1f2937" transform={`rotate(-90 18 ${H / 2 - 8})`}>
                USD per 1 SGD
              </text>
              <text x={(padL + W - padR) / 2} y={H - 12} textAnchor="middle" fontSize={11} fontWeight={700} fill="#1f2937">
                Quantity of SGD
              </text>

              {/* Y ticks */}
              {[0.65, 0.7, 0.75, 0.8, 0.85].map((tick) => (
                <g key={tick}>
                  <line x1={padL - 4} x2={padL} y1={py(tick)} y2={py(tick)} stroke="#4b5563" strokeWidth={1.2} />
                  <text x={padL - 7} y={py(tick) + 3.5} textAnchor="end" fontSize={9.5} fill="#4b5563">
                    {tick.toFixed(2)}
                  </text>
                </g>
              ))}

              {/* Baseline D0 and S0 (dashed neutral) */}
              <line x1={d0[0]} y1={d0[1]} x2={d0[2]} y2={d0[3]} stroke="#9ca3af" strokeWidth={1.6} strokeDasharray="5,4" />
              <line x1={s0[0]} y1={s0[1]} x2={s0[2]} y2={s0[3]} stroke="#9ca3af" strokeWidth={1.6} strokeDasharray="5,4" />
              <text x={d0[2] - 4} y={d0[3] - 4} fontSize={10} fontWeight={700} fill="#6b7280">D0</text>
              <text x={s0[2] - 4} y={s0[3] - 4} fontSize={10} fontWeight={700} fill="#6b7280">S0</text>

              {/* Active shifted D1 and S1 */}
              <line x1={d1[0]} y1={d1[1]} x2={d1[2]} y2={d1[3]} stroke="#b45309" strokeWidth={2.6} />
              <line x1={s1[0]} y1={s1[1]} x2={s1[2]} y2={s1[3]} stroke="#0369a1" strokeWidth={2.6} />
              <text x={d1[2] - 6} y={d1[3] + 12} fontSize={11} fontWeight={800} fill="#b45309">D1</text>
              <text x={s1[2] - 6} y={s1[3] - 6} fontSize={11} fontWeight={800} fill="#0369a1">S1</text>

              {/* Central bank intervention horizontal gap highlight */}
              {sim.action !== "none" ? (
                <g>
                  <line
                    x1={px(Math.max(4, Math.min(96, sim.qdAtActual)))}
                    x2={px(Math.max(4, Math.min(96, sim.qsAtActual)))}
                    y1={py(sim.eActual)}
                    y2={py(sim.eActual)}
                    stroke="#dc2626"
                    strokeWidth={4}
                  />
                  <text
                    x={px(Math.max(12, Math.min(88, (sim.qdAtActual + sim.qsAtActual) / 2)))}
                    y={py(sim.eActual) + (sim.action === "sell_sgd" ? 15 : -8)}
                    textAnchor="middle"
                    fontSize={9.5}
                    fontWeight={800}
                    fill="#b91c1c"
                  >
                    {sim.action === "sell_sgd" ? "CB sells SGD (+reserves)" : "CB buys SGD (−reserves)"}
                  </text>
                </g>
              ) : null}

              {/* Original Equilibrium E0 */}
              <circle cx={px(sim.q0)} cy={py(sim.e0)} r={3.5} fill="#6b7280" />

              {/* Market Clearing Equilibrium E1 */}
              <line
                x1={padL}
                x2={px(Math.max(4, Math.min(96, sim.qMkt)))}
                y1={py(Math.max(0.61, Math.min(0.89, sim.eMkt)))}
                y2={py(Math.max(0.61, Math.min(0.89, sim.eMkt)))}
                stroke="#0d9488"
                strokeWidth={1.3}
                strokeDasharray="3,3"
              />
              <circle
                cx={px(Math.max(4, Math.min(96, sim.qMkt)))}
                cy={py(Math.max(0.61, Math.min(0.89, sim.eMkt)))}
                r={5}
                fill="#0d9488"
              />
              <text
                x={px(Math.max(8, Math.min(90, sim.qMkt))) + (sim.qMkt > 70 ? -8 : 8)}
                y={py(Math.max(0.62, Math.min(0.88, sim.eMkt))) - 5}
                textAnchor={sim.qMkt > 70 ? "end" : "start"}
                fontSize={10.5}
                fontWeight={800}
                fill="#0f766e"
              >
                E1 ({sim.eMkt.toFixed(3)})
              </text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="Actual Rate (USD/SGD)"
            value={`${sim.eActual.toFixed(3)} (${sim.pctChange >= 0 ? "+" : ""}${sim.pctChange.toFixed(1)}%)`}
            tone={sim.pctChange > 0.15 ? "good" : sim.pctChange < -0.15 ? "bad" : "ink"}
          />
          <Readout label="Market Status" value={directionLabel} tone="brand" />
          <Readout
            label="Central Bank Action"
            value={cbActionLabel}
            tone={sim.action === "buy_sgd" ? "bad" : sim.action === "sell_sgd" ? "good" : "ink"}
          />
          <Readout label="Macro Pressure" value={macroLabel} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: [HL] Marshall–Lerner & J-Curve Simulator
// ---------------------------------------------------------------------------
function MarshallLernerJCurveSim() {
  const [depPct, setDepPct] = useState(15);
  const [initialPos, setInitialPos] = useState<"deficit" | "balanced">("deficit");
  const [srX, setSrX] = useState(0.25);
  const [srM, setSrM] = useState(0.3);
  const [lrX, setLrX] = useState(0.95);
  const [lrM, setLrM] = useState(0.9);

  const model = useMemo(() => {
    const x0 = 100;
    const m0 = initialPos === "deficit" ? 110 : 100;
    const b0 = x0 - m0;
    const d = depPct / 100;
    const denom = 1 - Math.exp(-23 / 6.5);

    const pts: Array<{ t: number; bal: number }> = [{ t: 0, bal: b0 }];
    for (let t = 1; t <= 24; t++) {
      const w = (1 - Math.exp(-(t - 1) / 6.5)) / denom;
      const pedX = srX + (lrX - srX) * w;
      const pedM = srM + (lrM - srM) * w;
      const xt = x0 * (1 + pedX * d);
      const mt = m0 * (1 + d) * Math.max(0.15, 1 - pedM * d);
      pts.push({ t, bal: xt - mt });
    }

    const srSum = +(srX + srM).toFixed(2);
    const lrSum = +(lrX + lrM).toFixed(2);
    const trough = pts.reduce((min, p) => (p.bal < min.bal ? p : min), pts[0]);
    const endBal = pts[pts.length - 1].bal;
    const netChange = endBal - b0;

    let minY = Math.min(-20, b0 - 8, trough.bal - 4);
    let maxY = Math.max(15, b0 + 10, endBal + 6);
    minY = Math.floor(minY / 5) * 5;
    maxY = Math.ceil(maxY / 5) * 5;

    return { b0, pts, srSum, lrSum, trough, endBal, netChange, minY, maxY };
  }, [depPct, initialPos, srX, srM, lrX, lrM]);

  const W = 480;
  const H = 280;
  const padL = 56;
  const padR = 24;
  const padT = 24;
  const padB = 42;
  const px = (t: number) => padL + (t / 24) * (W - padL - padR);
  const py = (b: number) => H - padB - ((b - model.minY) / (model.maxY - model.minY)) * (H - padT - padB);

  const pathD = model.pts
    .map((p, idx) => `${idx === 0 ? "M" : "L"} ${px(p.t).toFixed(1)} ${py(p.bal).toFixed(1)}`)
    .join(" ");

  const verdict =
    model.lrSum > 1 && model.srSum < 1
      ? "Classic J-Curve"
      : model.lrSum > 1 && model.srSum >= 1
        ? "Immediate Gain"
        : "Fails (CA Worsens)";

  const applyPreset = (kind: "classic" | "primary" | "elastic") => {
    if (kind === "classic") {
      setDepPct(15);
      setInitialPos("deficit");
      setSrX(0.25);
      setSrM(0.3);
      setLrX(0.95);
      setLrM(0.9);
    } else if (kind === "primary") {
      setDepPct(15);
      setInitialPos("deficit");
      setSrX(0.15);
      setSrM(0.2);
      setLrX(0.35);
      setLrM(0.4);
    } else {
      setDepPct(15);
      setInitialPos("deficit");
      setSrX(0.65);
      setSrM(0.55);
      setLrX(1.2);
      setLrM(1.1);
    }
  };

  return (
    <WidgetFrame
      title="[HL] Marshall–Lerner & J-Curve Simulator"
      tryThis={[
        "Click **Primary Exporter Trap (LR < 1)** — notice that the Current Account **never recovers** when essential imports and commodity exports stay price-inelastic!",
        "Keep Short-Run `|PED_X| + |PED_M| < 1` and slide Long-Run `|PED_X|` above `1.00` to see how steeper long-run elasticities speed up the J-curve turnaround.",
      ]}
      caption={
        <div>
          <strong>[HL] Marshall–Lerner Analysis:</strong> In the short run,{" "}
          <strong>|PED_X| + |PED_M| = {model.srSum.toFixed(2)}</strong>{" "}
          {model.srSum < 1
            ? "(< 1, so existing contracts keep volumes sluggish while domestic import bills jump immediately, deepening the Current Account to a trough of "
            : "(≥ 1, so elastic demand prevents a short-run dip, holding the trough at "}
          <strong>
            {model.trough.bal >= 0 ? "+" : "−"}${Math.abs(model.trough.bal).toFixed(1)}bn
          </strong>
          ). By Month 24, long-run elasticities reach <strong>{model.lrSum.toFixed(2)}</strong>{" "}
          {model.lrSum > 1
            ? "(> 1 — Marshall–Lerner is satisfied! Export volume growth and import substitution outweigh costlier imports, lifting the Current Account by "
            : "(≤ 1 — Marshall–Lerner FAILS! Even after two years, higher import bills dominate volume adjustments, shifting the Current Account by "}
          <strong>
            {model.netChange >= 0 ? "+" : "−"}${Math.abs(model.netChange).toFixed(1)}bn
          </strong>
          ).
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Initial Current Account balance"
            value={initialPos}
            onChange={setInitialPos}
            options={[
              { value: "deficit", label: "Initial Deficit (−$10bn)" },
              { value: "balanced", label: "Balanced ($0bn)" },
            ]}
          />
          <div className="flex flex-wrap gap-1.5">
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("classic")}>
              Classic J-Curve
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("primary")}>
              Primary Trap (LR &lt; 1)
            </button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("elastic")}>
              Instant Elastic
            </button>
          </div>
        </div>

        <Slider
          label="Currency Depreciation Shock"
          value={depPct}
          min={5}
          max={25}
          step={5}
          onChange={setDepPct}
          format={(v) => `−${v}%`}
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-2.5 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Short-Run Elasticities (Month 1)
            </div>
            <Slider
              label="Short-Run |PED_X|"
              value={srX}
              min={0.1}
              max={1.2}
              step={0.05}
              onChange={setSrX}
              format={(v) => v.toFixed(2)}
            />
            <Slider
              label="Short-Run |PED_M|"
              value={srM}
              min={0.1}
              max={1.2}
              step={0.05}
              onChange={setSrM}
              format={(v) => v.toFixed(2)}
            />
          </div>

          <div className="space-y-2.5 rounded-xl border border-line bg-surface-2 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-ink-2">
              Long-Run Elasticities (Month 24)
            </div>
            <Slider
              label="Long-Run |PED_X|"
              value={lrX}
              min={0.2}
              max={1.8}
              step={0.05}
              onChange={setLrX}
              format={(v) => v.toFixed(2)}
            />
            <Slider
              label="Long-Run |PED_M|"
              value={lrM}
              min={0.2}
              max={1.8}
              step={0.05}
              onChange={setLrM}
              format={(v) => v.toFixed(2)}
            />
          </div>
        </div>

        <div className="rounded-xl border border-line bg-white p-2">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="mx-auto block h-auto w-full max-w-[520px]"
            role="img"
            aria-label={`J-curve trajectory from ${model.b0} billion dollars to ${model.endBal.toFixed(1)} billion dollars over 24 months`}
          >
            {/* Surplus / Deficit shading */}
            <rect x={padL} y={padT} width={W - padL - padR} height={Math.max(0, py(0) - padT)} fill="#f0fdf4" />
            <rect x={padL} y={py(0)} width={W - padL - padR} height={Math.max(0, H - padB - py(0))} fill="#fff7ed" />

            {/* Zero horizontal axis */}
            <line x1={padL} x2={W - padR} y1={py(0)} y2={py(0)} stroke="#1f2937" strokeWidth={1.8} />
            {/* Initial balance reference dashed line */}
            <line x1={padL} x2={W - padR} y1={py(model.b0)} y2={py(model.b0)} stroke="#9ca3af" strokeWidth={1.3} strokeDasharray="5,4" />
            {/* Vertical axis */}
            <line x1={padL} x2={padL} y1={padT} y2={H - padB} stroke="#1f2937" strokeWidth={2} />

            {/* Axis labels */}
            <text x={16} y={H / 2 - 6} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#1f2937" transform={`rotate(-90 16 ${H / 2 - 6})`}>
              Current Account ($bn)
            </text>
            <text x={(padL + W - padR) / 2} y={H - 10} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#1f2937">
              Months After Depreciation (t = 0 to 24)
            </text>

            {/* Month ticks */}
            {[0, 6, 12, 18, 24].map((m) => (
              <g key={m}>
                <line x1={px(m)} x2={px(m)} y1={H - padB} y2={H - padB + 4} stroke="#4b5563" strokeWidth={1.2} />
                <text x={px(m)} y={H - padB + 16} textAnchor="middle" fontSize={9.5} fill="#4b5563">
                  {m}m
                </text>
              </g>
            ))}

            {/* Y ticks */}
            {[model.minY, Math.round(model.minY / 2), 0, Math.round(model.maxY / 2), model.maxY]
              .filter((v, i, arr) => arr.indexOf(v) === i)
              .map((v) => (
                <g key={v}>
                  <line x1={padL - 4} x2={padL} y1={py(v)} y2={py(v)} stroke="#4b5563" strokeWidth={1.2} />
                  <text x={padL - 7} y={py(v) + 3.5} textAnchor="end" fontSize={9.5} fill="#4b5563">
                    {v > 0 ? `+${v}` : v}
                  </text>
                </g>
              ))}

            {/* J-Curve Path */}
            <path d={pathD} fill="none" stroke={model.lrSum > 1 ? "#0d9488" : "#dc2626"} strokeWidth={3.2} strokeLinejoin="round" />

            {/* Start, Trough, End markers */}
            <circle cx={px(0)} cy={py(model.b0)} r={4.5} fill="#b45309" />
            <circle cx={px(model.trough.t)} cy={py(model.trough.bal)} r={4.5} fill="#c2410c" />
            <circle cx={px(24)} cy={py(model.endBal)} r={5} fill={model.netChange >= 0 ? "#15803d" : "#dc2626"} />

            <text
              x={px(model.trough.t) + (model.trough.t > 15 ? -8 : 8)}
              y={py(model.trough.bal) + 12}
              textAnchor={model.trough.t > 15 ? "end" : "start"}
              fontSize={9.5}
              fontWeight={700}
              fill="#9a3412"
            >
              Low: {model.trough.bal >= 0 ? "+" : "−"}${Math.abs(model.trough.bal).toFixed(1)}bn
            </text>
            <text x={px(24) - 6} y={py(model.endBal) - 8} textAnchor="end" fontSize={10} fontWeight={800} fill={model.netChange >= 0 ? "#166534" : "#991b1b"}>
              Month 24: {model.endBal >= 0 ? "+" : "−"}${Math.abs(model.endBal).toFixed(1)}bn
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          <Readout
            label="SR |PED_X| + |PED_M|"
            value={model.srSum.toFixed(2)}
            tone={model.srSum > 1 ? "good" : "bad"}
          />
          <Readout
            label="LR |PED_X| + |PED_M|"
            value={model.lrSum.toFixed(2)}
            tone={model.lrSum > 1 ? "good" : "bad"}
          />
          <Readout label="Outcome" value={verdict} tone={model.lrSum > 1 ? "good" : "bad"} />
          <Readout
            label="24m Net CA Change"
            value={`${model.netChange >= 0 ? "+" : "−"}$${Math.abs(model.netChange).toFixed(1)}bn`}
            tone={model.netChange > 0 ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "fx-mas-band-explorer",
    title: "Foreign Exchange Market & MAS Managed Band Explorer",
    blurb:
      "Shock interest rates, exports, and inflation across floating, fixed, and Singapore's MAS S$NEER managed band to watch currency shifts and central bank reserve intervention live.",
    Component: FxMasBandExplorer,
  },
  {
    id: "marshall-lerner-jcurve-sim",
    title: "[HL] Marshall–Lerner & J-Curve Simulator",
    blurb:
      "Adjust short-run and long-run export and import elasticities to test when a currency depreciation traces a J-curve versus worsening the Current Account permanently.",
    Component: MarshallLernerJCurveSim,
  },
];

export default widgets;
