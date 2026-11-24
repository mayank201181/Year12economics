"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// ---------------------------------------------------------------------------
// Widget 1: Interactive PPC & Opportunity Cost Explorer
// ---------------------------------------------------------------------------
function PpcExplorer() {
  const [shape, setShape] = useState<"concave" | "linear">("concave");
  const [share, setShare] = useState<number>(50); // % of max consumer goods (5..95)
  const [capacity, setCapacity] = useState<number>(100); // % potential capacity (80..130)
  const [util, setUtil] = useState<number>(100); // % resource utilisation (60..100)

  const xMax = capacity;
  const yMax = capacity;
  const baseMax = 100;

  const xFrontier = (share / 100) * xMax;
  const yFrontier =
    shape === "concave"
      ? yMax * Math.sqrt(Math.max(0, 1 - (xFrontier / xMax) ** 2))
      : yMax * (1 - xFrontier / xMax);

  const xActual = (xFrontier * util) / 100;
  const yActual = (yFrontier * util) / 100;

  // Exact magnitude of marginal opportunity cost |dY/dX| at the frontier point
  const frontierSlope =
    shape === "linear"
      ? yMax / xMax
      : yFrontier > 0.01
        ? (yMax * yMax * xFrontier) / (xMax * xMax * yFrontier)
        : 99;

  // Fixed goal point G(88, 88) — outside baseline 100% PPC, reachable at 125%+ concave capacity
  const goalX = 88;
  const goalY = 88;
  const goalAttainable =
    shape === "concave"
      ? (goalX / xMax) ** 2 + (goalY / yMax) ** 2 <= 1 + 1e-6
      : goalX / xMax + goalY / yMax <= 1 + 1e-6;

  // Coordinate mapping for SVG (domain 0..140 on both axes)
  const W = 420;
  const H = 280;
  const padL = 56;
  const padR = 24;
  const padT = 22;
  const padB = 46;
  const domain = 140;
  const px = (x: number) => padL + (x / domain) * (W - padL - padR);
  const py = (y: number) => H - padB - (y / domain) * (H - padT - padB);

  const buildCurvePath = (maxVal: number, mode: "concave" | "linear"): string => {
    const steps = 40;
    const pts = Array.from({ length: steps + 1 }, (_, i) => {
      const f = i / steps;
      const x = f * maxVal;
      const y = mode === "concave" ? maxVal * Math.sqrt(Math.max(0, 1 - f * f)) : maxVal * (1 - f);
      return `${i === 0 ? "M" : "L"} ${px(x).toFixed(1)} ${py(y).toFixed(1)}`;
    });
    return pts.join(" ");
  };

  const baselinePath = buildCurvePath(baseMax, shape);
  const currentPath = buildCurvePath(xMax, shape);
  const fillPath = `${currentPath} L ${px(0).toFixed(1)} ${py(0).toFixed(1)} Z`;

  // Unit-length tangent line segment at frontier point (always exact true slope)
  const tanLen = 18;
  const tanNorm = Math.hypot(1, frontierSlope);
  const ux = 1 / tanNorm;
  const uy = frontierSlope / tanNorm;
  const tBack = Math.min(tanLen, xFrontier / ux, (domain - yFrontier) / Math.max(uy, 1e-6));
  const tFwd = Math.min(tanLen, (domain - xFrontier) / ux, yFrontier / Math.max(uy, 1e-6));
  const tanX1 = xFrontier - tBack * ux;
  const tanY1 = yFrontier + tBack * uy;
  const tanX2 = xFrontier + tFwd * ux;
  const tanY2 = yFrontier - tFwd * uy;

  const onFrontier = util === 100;
  const statusLabel = onFrontier ? "Efficient" : "Idle Resources";

  return (
    <WidgetFrame
      title="Interactive PPC & Opportunity Cost Explorer"
      tryThis={[
        "Drag **Consumer-goods share** from 20% to 85% on the **Concave** curve and watch Marginal Opportunity Cost climb steeply.",
        "Switch to **Linear** and repeat — notice how Marginal Opportunity Cost stays strictly constant at **1.00**.",
        "Drop **Resource Utilisation** to 75% (recession inside the PPC), then raise **Productive Capacity** to 125% to make goal **G (88, 88)** attainable!",
      ]}
      caption={
        <span>
          {onFrontier ? (
            <>
              Operating <strong>on the PPC</strong> (full employment): producing 1 more Consumer Good sacrifices{" "}
              <strong>{frontierSlope.toFixed(2)} Capital Goods</strong>.{" "}
              {shape === "concave"
                ? "Because factors are specialised and imperfectly adaptable, opportunity cost rises as you push toward either extreme."
                : "On a straight-line PPC, resources are perfectly adaptable, so opportunity cost stays constant everywhere."}
            </>
          ) : (
            <>
              Operating <strong>inside the PPC</strong> at {util}% utilisation (unemployment / spare capacity): the
              economy can expand <em>both</em> Consumer Goods and Capital Goods simultaneously by moving toward the
              frontier (<strong>actual growth</strong>) with zero opportunity cost of the other good.
            </>
          )}{" "}
          {capacity > 100
            ? `Capacity expanded +${capacity - 100}% outward from the dashed baseline (potential growth).`
            : capacity < 100
              ? `Capacity contracted ${100 - capacity}% inward (factor loss / depreciation).`
              : "Capacity sits on the baseline PPC₁."}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm font-bold text-ink-2">Curve shape:</span>
          <Segmented
            label="PPC shape"
            value={shape}
            onChange={setShape}
            options={[
              { value: "concave", label: "Concave (Increasing OC)" },
              { value: "linear", label: "Linear (Constant OC)" },
            ]}
          />
        </div>

        <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Interactive Production Possibilities Curve comparing baseline PPC, shifted PPC, operating point P, and reference goal G"
            className="mx-auto block h-auto w-full max-w-[460px]"
          >
            {/* Grid ticks */}
            {[20, 40, 60, 80, 100, 120].map((v) => (
              <g key={v}>
                <line x1={px(v)} y1={py(0)} x2={px(v)} y2={py(domain)} stroke="#f3ead8" strokeWidth={1} />
                <line x1={px(0)} y1={py(v)} x2={px(domain)} y2={py(v)} stroke="#f3ead8" strokeWidth={1} />
                <text x={px(v)} y={py(0) + 15} textAnchor="middle" fontSize={10} fill="#6b563c">
                  {v}
                </text>
                <text x={px(0) - 8} y={py(v) + 3} textAnchor="end" fontSize={10} fill="#6b563c">
                  {v}
                </text>
              </g>
            ))}

            {/* Axes */}
            <line x1={px(0)} y1={py(0)} x2={px(domain)} y2={py(0)} stroke="#24190a" strokeWidth={2} />
            <line x1={px(0)} y1={py(0)} x2={px(0)} y2={py(domain)} stroke="#24190a" strokeWidth={2} />
            <text x={(px(0) + px(domain)) / 2} y={H - 8} textAnchor="middle" fontSize={11.5} fontWeight={700} fill="#24190a">
              Consumer Goods (units)
            </text>
            <text
              x={16}
              y={(py(0) + py(domain)) / 2}
              textAnchor="middle"
              fontSize={11.5}
              fontWeight={700}
              fill="#24190a"
              transform={`rotate(-90 16 ${(py(0) + py(domain)) / 2})`}
            >
              Capital Goods (units)
            </text>

            {/* Feasible region fill */}
            <path d={fillPath} fill="#fef3c7" fillOpacity={0.35} />

            {/* Baseline PPC1 (capacity = 100) */}
            <path d={baselinePath} fill="none" stroke="#9ca3af" strokeWidth={1.8} strokeDasharray="5,4" />
            <text x={px(baseMax) + 4} y={py(10)} fontSize={10} fontWeight={700} fill="#6b7280">
              PPC₁
            </text>

            {/* Current PPC */}
            <path
              d={currentPath}
              fill="none"
              stroke={capacity > 100 ? "#0d9488" : capacity < 100 ? "#c2410c" : "#b45309"}
              strokeWidth={3}
            />

            {/* Tangent slope indicator when on frontier */}
            {onFrontier ? (
              <line
                x1={px(tanX1)}
                y1={py(tanY1)}
                x2={px(tanX2)}
                y2={py(tanY2)}
                stroke="#0369a1"
                strokeWidth={1.8}
                strokeDasharray="3,2"
              />
            ) : null}

            {/* Dashed projections for operating point P */}
            <line x1={px(0)} y1={py(yActual)} x2={px(xActual)} y2={py(yActual)} stroke="#9ca3af" strokeWidth={1.2} strokeDasharray="3,3" />
            <line x1={px(xActual)} y1={py(0)} x2={px(xActual)} y2={py(yActual)} stroke="#9ca3af" strokeWidth={1.2} strokeDasharray="3,3" />

            {/* Reference Goal point G(88, 88) */}
            <circle cx={px(goalX)} cy={py(goalY)} r={5} fill={goalAttainable ? "#15803d" : "#6b563c"} />
            <text
              x={px(goalX) + 7}
              y={py(goalY) - 4}
              fontSize={10}
              fontWeight={800}
              fill={goalAttainable ? "#15803d" : "#6b563c"}
            >
              G (88, 88) {goalAttainable ? "✓" : "✗"}
            </text>

            {/* Operating point P */}
            <circle cx={px(xActual)} cy={py(yActual)} r={6} fill={onFrontier ? "#b45309" : "#c2410c"} stroke="#ffffff" strokeWidth={2} />
            <text
              x={px(xActual) + 8}
              y={py(yActual) - 6}
              fontSize={11}
              fontWeight={800}
              fill="#24190a"
            >
              P ({xActual.toFixed(0)}, {yActual.toFixed(0)})
            </text>
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <Slider
            label="Consumer-goods share"
            value={share}
            min={5}
            max={95}
            step={5}
            onChange={setShare}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Productive capacity"
            value={capacity}
            min={80}
            max={130}
            step={5}
            onChange={setCapacity}
            format={(v) => `${v}%`}
          />
          <Slider
            label="Resource utilisation"
            value={util}
            min={60}
            max={100}
            step={5}
            onChange={setUtil}
            format={(v) => `${v}%`}
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Consumer Goods" value={xActual.toFixed(1)} tone="brand" />
          <Readout label="Capital Goods" value={yActual.toFixed(1)} tone="ink" />
          <Readout
            label="Marginal OC (K/C)"
            value={onFrontier ? frontierSlope.toFixed(2) : "0.00"}
            tone={onFrontier ? "brand" : "good"}
          />
          <Readout label="Status" value={statusLabel} tone={onFrontier ? "good" : "bad"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------
// Widget 2: Five-Sector Circular Flow Simulator
// ---------------------------------------------------------------------------
type PresetKey = "balanced" | "fiscal" | "savings" | "export";

const PRESETS: Record<PresetKey, { S: number; T: number; M: number; I: number; G: number; X: number }> = {
  balanced: { S: 40, T: 60, M: 50, I: 45, G: 55, X: 50 },
  fiscal: { S: 40, T: 55, M: 50, I: 45, G: 85, X: 50 },
  savings: { S: 75, T: 60, M: 50, I: 40, G: 55, X: 50 },
  export: { S: 40, T: 60, M: 50, I: 50, G: 55, X: 85 },
};

function CircularFlowSim() {
  const [S, setS] = useState<number>(40);
  const [T, setT] = useState<number>(60);
  const [M, setM] = useState<number>(50);
  const [I, setI] = useState<number>(45);
  const [G, setG] = useState<number>(55);
  const [X, setX] = useState<number>(50);

  const applyPreset = (key: PresetKey) => {
    const p = PRESETS[key];
    setS(p.S);
    setT(p.T);
    setM(p.M);
    setI(p.I);
    setG(p.G);
    setX(p.X);
  };

  const activePreset: PresetKey | "custom" =
    S === 40 && T === 60 && M === 50 && I === 45 && G === 55 && X === 50
      ? "balanced"
      : S === 40 && T === 55 && M === 50 && I === 45 && G === 85 && X === 50
        ? "fiscal"
        : S === 75 && T === 60 && M === 50 && I === 40 && G === 55 && X === 50
          ? "savings"
          : S === 40 && T === 60 && M === 50 && I === 50 && G === 55 && X === 85
            ? "export"
            : "custom";

  const W = S + T + M;
  const J = I + G + X;
  const net = J - W;

  const direction = net > 0 ? "Expanding ↑" : net < 0 ? "Contracting ↓" : "Equilibrium →";
  const dirTone = net > 0 ? "good" : net < 0 ? "bad" : "brand";
  const ringColor = net > 0 ? "#15803d" : net < 0 ? "#c2410c" : "#b45309";
  const ringStroke = net > 0 ? 3.4 : net < 0 ? 1.8 : 2.6;

  // Bar scaling (max possible W or J is 330)
  const barMax = 330;
  const wWidth = Math.max(8, (W / barMax) * 190);
  const jWidth = Math.max(8, (J / barMax) * 190);

  // Sector balance note
  const pairImbalanced = S !== I || T !== G || M !== X;

  return (
    <WidgetFrame
      title="Five-Sector Circular Flow Simulator"
      tryThis={[
        "Click **Balanced**: notice S ≠ I ($40 ≠ $45) and T ≠ G ($60 ≠ $55), yet the economy is STILL in equilibrium because **J = W = $150 bn**!",
        "Click **Savings Surge**: watch leakages exceed injections and national income contract (the Keynesian paradox of thrift).",
        "Now increase **Government Spending (G)** until Net Flow returns to **$0 bn** to see how fiscal policy offsets a private-spending slump.",
      ]}
      caption={
        <span>
          <strong>Total Injections (I + G + X) = ${J} bn</strong> vs{" "}
          <strong>Total Leakages (S + T + M) = ${W} bn</strong>.{" "}
          {net > 0 ? (
            <>
              A net injection of <strong>+${net} bn</strong> raises spending on domestic firms; inventories fall,
              production expands, and households earn higher factor incomes until rising S, T, and M restore equilibrium.
            </>
          ) : net < 0 ? (
            <>
              A net leakage of <strong>−${Math.abs(net)} bn</strong> withdraws spending from domestic firms; unsold stock
              accumulates, firms cut output and jobs, and national income contracts.
            </>
          ) : (
            <>
              Injections exactly match leakages (<strong>Net Flow = $0 bn</strong>), so national income stays stable
              {pairImbalanced
                ? " — even though individual sector pairs (S vs I, T vs G, or M vs X) do not balance individually!"
                : "."}
            </>
          )}
        </span>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Presets:</span>
          {(
            [
              ["balanced", "Balanced"],
              ["fiscal", "Fiscal Boost (G↑)"],
              ["savings", "Savings Surge (S↑)"],
              ["export", "Export Boom (X↑)"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => applyPreset(key)}
              className={`rounded-lg border px-2.5 py-1 text-xs font-bold transition ${
                activePreset === key
                  ? "border-brand bg-brand text-brand-ink"
                  : "border-line bg-surface-2 text-ink-2 hover:text-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-white p-2 sm:p-3">
          <svg
            viewBox="0 0 480 265"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live five-sector circular flow diagram showing Households, Firms, leakages S T M, injections I G X, and comparison bars"
            className="mx-auto block h-auto w-full max-w-[500px]"
          >
            {/* Households & Firms */}
            <rect x="20" y="34" width="112" height="50" rx="10" fill="#fef3c7" stroke="#b45309" strokeWidth={2} />
            <text x="76" y="57" textAnchor="middle" fontSize={12} fontWeight={800} fill="#24190a">
              HOUSEHOLDS
            </text>
            <text x="76" y="72" textAnchor="middle" fontSize={9.5} fill="#6b563c">
              Income (Y) → C
            </text>

            <rect x="348" y="34" width="112" height="50" rx="10" fill="#ccfbf1" stroke="#0d9488" strokeWidth={2} />
            <text x="404" y="57" textAnchor="middle" fontSize={12} fontWeight={800} fill="#24190a">
              FIRMS
            </text>
            <text x="404" y="72" textAnchor="middle" fontSize={9.5} fill="#115e59">
              Output → Factor Y
            </text>

            {/* Inner circular flow arcs */}
            <path d="M 348 44 Q 240 6 132 44" fill="none" stroke={ringColor} strokeWidth={ringStroke} />
            <text x="240" y="20" textAnchor="middle" fontSize={10} fontWeight={800} fill={ringColor}>
              ← Factor Incomes (Rent · Wages · Interest · Profit)
            </text>

            <path d="M 132 74 Q 240 112 348 74" fill="none" stroke={ringColor} strokeWidth={ringStroke} />
            <text x="240" y="106" textAnchor="middle" fontSize={10} fontWeight={800} fill={ringColor}>
              Consumer Expenditure (C) →
            </text>

            {/* Three sector boxes */}
            <rect x="184" y="124" width="112" height="22" rx="6" fill="#f8f2e4" stroke="#6b563c" strokeWidth={1.2} />
            <text x="240" y="139" textAnchor="middle" fontSize={10} fontWeight={700} fill="#24190a">
              Financial (Banks)
            </text>

            <rect x="184" y="152" width="112" height="22" rx="6" fill="#f8f2e4" stroke="#6b563c" strokeWidth={1.2} />
            <text x="240" y="167" textAnchor="middle" fontSize={10} fontWeight={700} fill="#24190a">
              Government
            </text>

            <rect x="184" y="180" width="112" height="22" rx="6" fill="#f8f2e4" stroke="#6b563c" strokeWidth={1.2} />
            <text x="240" y="195" textAnchor="middle" fontSize={10} fontWeight={700} fill="#24190a">
              Foreign Sector
            </text>

            {/* Leakage pipes (left) with thickness proportional to value */}
            <path d="M 86 84 L 86 135 L 184 135" fill="none" stroke="#c2410c" strokeWidth={1.2 + S / 45} />
            <path d="M 68 84 L 68 163 L 184 163" fill="none" stroke="#c2410c" strokeWidth={1.2 + T / 45} />
            <path d="M 50 84 L 50 191 L 184 191" fill="none" stroke="#c2410c" strokeWidth={1.2 + M / 45} />
            <text x="135" y="131" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#c2410c">
              S = ${S}bn
            </text>
            <text x="135" y="159" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#c2410c">
              T = ${T}bn
            </text>
            <text x="135" y="187" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#c2410c">
              M = ${M}bn
            </text>

            {/* Injection pipes (right) with thickness proportional to value */}
            <path d="M 296 135 L 394 135 L 394 84" fill="none" stroke="#15803d" strokeWidth={1.2 + I / 45} />
            <path d="M 296 163 L 412 163 L 412 84" fill="none" stroke="#15803d" strokeWidth={1.2 + G / 45} />
            <path d="M 296 191 L 430 191 L 430 84" fill="none" stroke="#15803d" strokeWidth={1.2 + X / 45} />
            <text x="345" y="131" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#15803d">
              I = ${I}bn
            </text>
            <text x="345" y="159" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#15803d">
              G = ${G}bn
            </text>
            <text x="345" y="187" textAnchor="middle" fontSize={9.5} fontWeight={800} fill="#15803d">
              X = ${X}bn
            </text>

            {/* Bottom live bar comparison: Leakages vs Injections */}
            <line x1="20" y1="214" x2="460" y2="214" stroke="#eadcc4" strokeWidth={1} />
            <text x="24" y="232" fontSize={10} fontWeight={800} fill="#c2410c">
              Leakages (W): ${W}bn
            </text>
            <rect x="24" y="238" width={wWidth} height={12} rx={6} fill="#c2410c" />

            <text x="256" y="232" fontSize={10} fontWeight={800} fill="#15803d">
              Injections (J): ${J}bn
            </text>
            <rect x="256" y="238" width={jWidth} height={12} rx={6} fill="#15803d" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-bad">Leakages / Withdrawals (W)</div>
            <Slider label="Savings (S)" value={S} min={10} max={110} step={5} onChange={setS} format={(v) => `$${v}bn`} />
            <Slider label="Taxation (T)" value={T} min={10} max={110} step={5} onChange={setT} format={(v) => `$${v}bn`} />
            <Slider label="Imports (M)" value={M} min={10} max={110} step={5} onChange={setM} format={(v) => `$${v}bn`} />
          </div>

          <div className="space-y-3 rounded-xl border border-line bg-surface-2/60 p-3">
            <div className="text-xs font-extrabold uppercase tracking-wide text-good">Injections (J)</div>
            <Slider label="Investment (I)" value={I} min={10} max={110} step={5} onChange={setI} format={(v) => `$${v}bn`} />
            <Slider label="Government Spending (G)" value={G} min={10} max={110} step={5} onChange={setG} format={(v) => `$${v}bn`} />
            <Slider label="Exports (X)" value={X} min={10} max={110} step={5} onChange={setX} format={(v) => `$${v}bn`} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Total Leakages (W)" value={`$${W}bn`} tone="bad" />
          <Readout label="Total Injections (J)" value={`$${J}bn`} tone="good" />
          <Readout
            label="Net Flow (J − W)"
            value={net > 0 ? `+$${net}bn` : net < 0 ? `−$${Math.abs(net)}bn` : "$0bn"}
            tone={dirTone}
          />
          <Readout label="National Income" value={direction} tone={dirTone} />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ppc-explorer",
    title: "PPC & Opportunity Cost Explorer",
    blurb: "Compare concave vs linear PPCs, test actual growth from inside the curve, and shift potential capacity outward.",
    Component: PpcExplorer,
  },
  {
    id: "circular-flow-sim",
    title: "Five-Sector Circular Flow Simulator",
    blurb: "Adjust leakages (S, T, M) and injections (I, G, X) to watch national income expand, contract, or reach equilibrium.",
    Component: CircularFlowSim,
  },
];

export default widgets;
