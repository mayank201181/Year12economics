"use client";

import { useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

function fmtNum(n: number, dp = 1): string {
  const rounded = Math.round(n * 10 ** dp) / 10 ** dp;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(dp);
}

// ============================================================================
// WIDGET 1: Interactive Tariff Welfare Lab (SL Diagrams + HL Exact Welfare)
// Model: Q_d = 120 - P, Q_s = P  => Autarky equilibrium P_aut = $60, Q_aut = 60
// ============================================================================
function TariffWelfareLab() {
  const [pw, setPw] = useState(24);
  const [tariff, setTariff] = useState(12);
  const [shading, setShading] = useState<"all" | "dwl" | "clean">("all");

  const pAutarky = 60;
  const pEff = Math.min(pAutarky, pw + tariff);
  const dt = pEff - pw;
  const isProhibitive = pw + tariff >= pAutarky;

  const q1 = pw;
  const q2 = 120 - pw;
  const q3 = pEff;
  const q4 = 120 - pEff;

  const freeImports = q2 - q1;
  const postImports = Math.max(0, q4 - q3);

  const psGain = 0.5 * (q1 + q3) * dt;
  const govRev = postImports * dt;
  const prodDwl = 0.5 * (q3 - q1) * dt;
  const consDwl = 0.5 * (q2 - q4) * dt;
  const totalDwl = prodDwl + consDwl;
  const csLoss = 0.5 * (q2 + q4) * dt;

  const maxRevTariff = (pAutarky - pw) / 2;

  // SVG mapping: Q in [0, 120] -> x in [58, 442]; P in [0, 120] -> y in [250, 28]
  const xOf = (q: number) => 58 + (q / 120) * 384;
  const yOf = (p: number) => 250 - (p / 120) * 222;

  const showAll = shading === "all";
  const showDwl = shading === "all" || shading === "dwl";

  return (
    <WidgetFrame
      title="Interactive Tariff Welfare Lab"
      tryThis={[
        "Double the tariff from **$8** to **$16** (keeping `P_w = $24`): watch Total DWL **quadruple** (`$64k → $256k`)!",
        "Find the tariff rate that **maximises Government Tariff Revenue** (the Tariff Laffer peak) — then push higher until the tariff becomes prohibitive.",
        "Switch to **DWL Triangles Only** to isolate production inefficiency (`MC > P_w`) and consumption inefficiency (`MB > P_w`).",
      ]}
      caption={
        dt === 0 ? (
          <>
            <strong>Free trade equilibrium:</strong> With a $0 tariff at world price <strong>${pw}</strong>, domestic firms supply{" "}
            <strong>{q1}k</strong> units, consumers demand <strong>{q2}k</strong> units, and imports fill the{" "}
            <strong>{freeImports}k</strong> gap with <strong>$0 deadweight loss</strong>.
          </>
        ) : isProhibitive ? (
          <>
            <strong>Prohibitive tariff reached!</strong> At <strong>${pw} + ${tariff} ≥ $60</strong>, domestic price hits autarky ($60), imports collapse from{" "}
            <strong>{freeImports}k to 0</strong>, government collects <strong>$0 tariff revenue</strong>, and Total DWL peaks at{" "}
            <strong>${fmtNum(totalDwl, 0)}k</strong>.
          </>
        ) : (
          <>
            <strong>Exact accounting identity:</strong> Domestic consumers lose <strong>${fmtNum(csLoss, 0)}k</strong> of surplus, which splits into{" "}
            <strong>${fmtNum(psGain, 0)}k</strong> Domestic Producer Gain + <strong>${fmtNum(govRev, 0)}k</strong> Govt Revenue +{" "}
            <strong>${fmtNum(totalDwl, 0)}k</strong> Deadweight Loss (<strong>${fmtNum(prodDwl, 0)}k</strong> production +{" "}
            <strong>${fmtNum(consDwl, 0)}k</strong> consumption). At `P_w = ${pw}`, tariff revenue peaks at <strong>t = ${fmtNum(maxRevTariff)}</strong>.
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Shading mode"
            value={shading}
            onChange={setShading}
            options={[
              { value: "all", label: "All Welfare Areas" },
              { value: "dwl", label: "DWL Only" },
              { value: "clean", label: "Clean Curves" },
            ]}
          />
          <span className="chip">
            Q_d = 120 − P · Q_s = P
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider
            label="World Price (P_w)"
            value={pw}
            min={12}
            max={48}
            step={2}
            onChange={setPw}
            format={(v) => `$${v}`}
          />
          <Slider
            label="Specific Tariff (t)"
            value={tariff}
            min={0}
            max={40}
            step={2}
            onChange={setTariff}
            format={(v) => `$${v}${pw + v >= pAutarky ? " (prohibitive)" : ""}`}
          />
        </div>

        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 480 292"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Live interactive small-country tariff diagram showing domestic supply, domestic demand, world price, tariff price, and shaded welfare areas"
            className="mx-auto block h-auto w-full max-w-[520px]"
          >
            {/* Grid lines */}
            {[20, 40, 60, 80, 100].map((v) => (
              <g key={v}>
                <line x1={xOf(v)} y1={yOf(0)} x2={xOf(v)} y2={yOf(120)} stroke="#f3f4f6" strokeWidth={1} />
                <line x1={xOf(0)} y1={yOf(v)} x2={xOf(120)} y2={yOf(v)} stroke="#f3f4f6" strokeWidth={1} />
              </g>
            ))}

            {/* Shaded welfare polygons */}
            {dt > 0 && showAll ? (
              <>
                <polygon
                  points={`${xOf(0)},${yOf(pEff)} ${xOf(q3)},${yOf(pEff)} ${xOf(q1)},${yOf(pw)} ${xOf(0)},${yOf(pw)}`}
                  fill="#bbf7d0"
                  opacity={0.85}
                />
                {postImports > 0 ? (
                  <rect
                    x={xOf(q3)}
                    y={yOf(pEff)}
                    width={xOf(q4) - xOf(q3)}
                    height={yOf(pw) - yOf(pEff)}
                    fill="#bfdbfe"
                    opacity={0.9}
                  />
                ) : null}
              </>
            ) : null}

            {dt > 0 && showDwl ? (
              <>
                <polygon
                  points={`${xOf(q1)},${yOf(pw)} ${xOf(q3)},${yOf(pEff)} ${xOf(q3)},${yOf(pw)}`}
                  fill="#fdba74"
                  opacity={0.92}
                />
                <polygon
                  points={`${xOf(q4)},${yOf(pEff)} ${xOf(q4)},${yOf(pw)} ${xOf(q2)},${yOf(pw)}`}
                  fill="#fca5a5"
                  opacity={0.92}
                />
              </>
            ) : null}

            {/* Axes */}
            <line x1={58} y1={250} x2={454} y2={250} stroke="#1f2937" strokeWidth={2} />
            <line x1={58} y1={250} x2={58} y2={20} stroke="#1f2937" strokeWidth={2} />

            {/* Domestic supply and demand */}
            <line x1={xOf(0)} y1={yOf(0)} x2={xOf(112)} y2={yOf(112)} stroke="#15803d" strokeWidth={2.6} />
            <line x1={xOf(8)} y1={yOf(112)} x2={xOf(120)} y2={yOf(0)} stroke="#b45309" strokeWidth={2.6} />

            {/* World supply lines */}
            <line x1={xOf(0)} y1={yOf(pw)} x2={xOf(118)} y2={yOf(pw)} stroke="#0369a1" strokeWidth={2.2} />
            {dt > 0 ? (
              <line x1={xOf(0)} y1={yOf(pEff)} x2={xOf(118)} y2={yOf(pEff)} stroke="#dc2626" strokeWidth={2.2} />
            ) : null}

            {/* Drop lines */}
            <line x1={xOf(q1)} y1={yOf(pw)} x2={xOf(q1)} y2={250} stroke="#6b7280" strokeWidth={1.2} strokeDasharray="4 3" />
            <line x1={xOf(q2)} y1={yOf(pw)} x2={xOf(q2)} y2={250} stroke="#6b7280" strokeWidth={1.2} strokeDasharray="4 3" />
            {dt > 0 ? (
              <>
                <line x1={xOf(q3)} y1={yOf(pEff)} x2={xOf(q3)} y2={250} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="4 3" />
                {q4 !== q3 ? (
                  <line x1={xOf(q4)} y1={yOf(pEff)} x2={xOf(q4)} y2={250} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="4 3" />
                ) : null}
              </>
            ) : null}

            {/* Curve labels */}
            <text x={xOf(109)} y={yOf(115)} fontSize={11} fontWeight={800} fill="#15803d">S_dom</text>
            <text x={xOf(102)} y={yOf(20)} fontSize={11} fontWeight={800} fill="#b45309">D_dom</text>
            <text x={xOf(116)} y={yOf(pw) - 5} textAnchor="end" fontSize={10} fontWeight={700} fill="#0369a1">S_world</text>
            {dt > 0 ? (
              <text x={xOf(116)} y={yOf(pEff) - 5} textAnchor="end" fontSize={10} fontWeight={700} fill="#dc2626">
                {isProhibitive ? "P_aut ($60)" : "S_w + t"}
              </text>
            ) : null}

            {/* Price tick labels */}
            <text x={52} y={yOf(pw) + 4} textAnchor="end" fontSize={10.5} fontWeight={700} fill="#0369a1">${pw}</text>
            {dt > 0 ? (
              <text x={52} y={yOf(pEff) + 4} textAnchor="end" fontSize={10.5} fontWeight={700} fill="#dc2626">${pEff}</text>
            ) : null}

            {/* Quantity tick labels */}
            <text x={xOf(q1)} y={264} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#374151">Q1={q1}</text>
            <text x={xOf(q2)} y={264} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#374151">Q2={q2}</text>
            {dt >= 6 ? (
              <>
                <text x={xOf(q3)} y={276} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#dc2626">
                  {q3 === q4 ? `Q=${q3}` : `Q3=${q3}`}
                </text>
                {q4 !== q3 ? (
                  <text x={xOf(q4)} y={276} textAnchor="middle" fontSize={9.5} fontWeight={700} fill="#dc2626">Q4={q4}</text>
                ) : null}
              </>
            ) : null}

            {/* Axis titles */}
            <text x={18} y={138} textAnchor="middle" fontSize={11} fontWeight={700} fill="#374151" transform="rotate(-90 18 138)">
              Price ($)
            </text>
            <text x={252} y={289} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#374151">
              Quantity (thousand tonnes)
            </text>
          </svg>
        </div>

        {/* Colour legend */}
        <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink-2">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-[#bbf7d0] border border-[#15803d]" /> Producer Gain
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-[#bfdbfe] border border-[#1d4ed8]" /> Govt Tariff Revenue
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-[#fdba74] border border-[#c2410c]" /> Production DWL
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-[#fca5a5] border border-[#dc2626]" /> Consumption DWL
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Imports (Before → After)" value={`${freeImports}k → ${postImports}k`} tone="ink" />
          <Readout label="Producer Surplus Gain" value={`+$${fmtNum(psGain, 0)}k`} tone="good" />
          <Readout label="Govt Tariff Revenue" value={`$${fmtNum(govRev, 0)}k`} tone="brand" />
          <Readout label="Production DWL" value={`$${fmtNum(prodDwl, 0)}k`} tone="bad" />
          <Readout label="Consumption DWL" value={`$${fmtNum(consDwl, 0)}k`} tone="bad" />
          <Readout label="Consumer Surplus Loss" value={`−$${fmtNum(csLoss, 0)}k`} tone="bad" />
        </div>
      </div>
    </WidgetFrame>
  );
}

// ============================================================================
// WIDGET 2: [HL] Comparative Advantage & Terms-of-Trade Explorer
// Two countries (Alpha & Beta) producing Textiles (T) and Microchips (M)
// ============================================================================
function ComparativeAdvantageExplorer() {
  const [aT, setAT] = useState(80);
  const [aM, setAM] = useState(40);
  const [bT, setBT] = useState(60);
  const [bM, setBM] = useState(90);
  const [tot, setTot] = useState(1.25);

  const ocA_M = aT / aM; // Textiles sacrificed per 1 Microchip in Country A
  const ocB_M = bT / bM; // Textiles sacrificed per 1 Microchip in Country B
  const equalOC = Math.abs(ocA_M - ocB_M) < 1e-9;

  const minOC = Math.min(ocA_M, ocB_M);
  const maxOC = Math.max(ocA_M, ocB_M);
  const totValid = !equalOC && tot > minOC + 1e-9 && tot < maxOC - 1e-9;

  // Who specialises in Microchips (lower OC of M) vs Textiles (higher OC of M)?
  const aSpecM = !equalOC && ocA_M < ocB_M;
  const bSpecM = !equalOC && ocB_M < ocA_M;

  // Absolute advantage notes
  const absTextiles = aT > bT ? "Alpha" : bT > aT ? "Beta" : "Tied";
  const absChips = aM > bM ? "Alpha" : bM > aM ? "Beta" : "Tied";

  // Preset helper
  const applyPreset = (p: "classic" | "absoluteBoth" | "equal") => {
    if (p === "classic") {
      setAT(80);
      setAM(40);
      setBT(60);
      setBM(90);
      setTot(1.25);
    } else if (p === "absoluteBoth") {
      setAT(120);
      setAM(60);
      setBT(40);
      setBM(40);
      setTot(1.5);
    } else {
      setAT(100);
      setAM(50);
      setBT(60);
      setBM(30);
      setTot(2.0);
    }
  };

  // Dual-panel SVG coordinate helper: shared scale 0..130 on both axes
  const maxScale = 130;
  const plotW = 195;
  const plotH = 165;
  const yBase = 205;
  const xA0 = 50;
  const xB0 = 315;

  const pxA = (m: number) => xA0 + (Math.min(m, maxScale) / maxScale) * plotW;
  const pxB = (m: number) => xB0 + (Math.min(m, maxScale) / maxScale) * plotW;
  const py = (t: number) => yBase - (Math.min(t, maxScale) / maxScale) * plotH;

  // Trading possibilities frontier endpoints (clamped neatly inside axis box)
  // If country specialises in M (maxM, 0), trading at `tot` T per M reaches (0, maxM * tot)
  // If country specialises in T (0, maxT), trading at `tot` T per M reaches (maxT / tot, 0)
  const tradeLine = (
    specM: boolean,
    maxM: number,
    maxT: number,
    pxFn: (v: number) => number,
  ) => {
    if (specM) {
      const tInt = maxM * tot;
      if (tInt <= maxScale) {
        return { x1: pxFn(maxM), y1: py(0), x2: pxFn(0), y2: py(tInt) };
      }
      // Clip where t = maxScale => m = maxM - maxScale / tot
      const mAtTop = maxM - maxScale / tot;
      return { x1: pxFn(maxM), y1: py(0), x2: pxFn(Math.max(0, mAtTop)), y2: py(maxScale) };
    }
    const mInt = maxT / tot;
    if (mInt <= maxScale) {
      return { x1: pxFn(0), y1: py(maxT), x2: pxFn(mInt), y2: py(0) };
    }
    // Clip where m = maxScale => t = maxT - maxScale * tot
    const tAtRight = maxT - maxScale * tot;
    return { x1: pxFn(0), y1: py(maxT), x2: pxFn(maxScale), y2: py(Math.max(0, tAtRight)) };
  };

  const lineA = !equalOC ? tradeLine(aSpecM, aM, aT, pxA) : null;
  const lineB = !equalOC ? tradeLine(bSpecM, bM, bT, pxB) : null;

  return (
    <WidgetFrame
      title="[HL] Comparative Advantage & Terms-of-Trade Explorer"
      tryThis={[
        "Click **Absolute in Both**: notice Alpha outproduces Beta in BOTH goods, yet Beta STILL wins comparative advantage in Microchips (`OC 1 < 2`)!",
        "Drag the **Terms of Trade** slider strictly between the two opportunity costs so BOTH dashed trading frontiers swing **outside** each country's PPC.",
        "Click **Equal OC** to see why parallel linear PPCs leave zero mutually beneficial trade range.",
      ]}
      caption={
        equalOC ? (
          <>
            <strong>Parallel linear PPCs (identical slopes):</strong> Both Alpha and Beta sacrifice{" "}
            <strong>{fmtNum(ocA_M, 2)} Textiles per Microchip</strong>. With identical opportunity costs, there is{" "}
            <strong>no mutually beneficial terms-of-trade range</strong> from comparative advantage.
          </>
        ) : totValid ? (
          <>
            <strong>Mutually beneficial trade!</strong>{" "}
            <strong>{aSpecM ? "Alpha" : "Beta"}</strong> specialises in <strong>Microchips</strong> (lower OC ={" "}
            <strong>{fmtNum(minOC, 2)} T</strong>) and exports them for <strong>{fmtNum(tot, 2)} T</strong> (gaining{" "}
            <strong>+{fmtNum(tot - minOC, 2)} T</strong> per chip), while{" "}
            <strong>{aSpecM ? "Beta" : "Alpha"}</strong> specialises in <strong>Textiles</strong> and imports chips for{" "}
            <strong>{fmtNum(tot, 2)} T</strong> instead of its domestic cost of <strong>{fmtNum(maxOC, 2)} T</strong>{" "}
            (saving <strong>+{fmtNum(maxOC - tot, 2)} T</strong> per chip). Both consume outside their PPCs!
          </>
        ) : (
          <>
            <strong>Proposed ToT (1M = {fmtNum(tot, 2)}T) is outside the valid range ({fmtNum(minOC, 2)} &lt; P &lt; {fmtNum(maxOC, 2)}):</strong>{" "}
            {tot <= minOC ? (
              <>
                At {fmtNum(tot, 2)} T per Microchip, the Microchip exporter ({aSpecM ? "Alpha" : "Beta"}) would earn no more than its own domestic cost ({fmtNum(minOC, 2)} T) and refuses to trade.
              </>
            ) : (
              <>
                At {fmtNum(tot, 2)} T per Microchip, the Microchip importer ({aSpecM ? "Beta" : "Alpha"}) can make Microchips more cheaply at home ({fmtNum(maxOC, 2)} T) and refuses to trade.
              </>
            )}
          </>
        )
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("classic")}>
            Classic Trade
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("absoluteBoth")}>
            Absolute in Both
          </button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={() => applyPreset("equal")}>
            Equal OC (No Gains)
          </button>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Slider label="Alpha Max Textiles (T)" value={aT} min={20} max={120} step={10} onChange={setAT} />
          <Slider label="Alpha Max Microchips (M)" value={aM} min={20} max={120} step={10} onChange={setAM} />
          <Slider label="Beta Max Textiles (T)" value={bT} min={20} max={120} step={10} onChange={setBT} />
          <Slider label="Beta Max Microchips (M)" value={bM} min={20} max={120} step={10} onChange={setBM} />
        </div>

        <Slider
          label="Proposed Terms of Trade (1 Microchip = k Textiles)"
          value={tot}
          min={0.25}
          max={4.5}
          step={0.25}
          onChange={setTot}
          format={(v) => `1 M = ${fmtNum(v, 2)} T`}
        />

        <div className="overflow-hidden rounded-xl border border-line bg-white p-2">
          <svg
            viewBox="0 0 540 245"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Side-by-side linear Production Possibilities Curves for Country Alpha and Country Beta showing domestic opportunity costs and trading consumption frontiers"
            className="mx-auto block h-auto w-full max-w-[560px]"
          >
            {/* Left panel: Alpha */}
            <text x={xA0 + plotW / 2} y={20} textAnchor="middle" fontSize={12} fontWeight={800} fill="#b45309">
              Alpha (OC: 1M = {fmtNum(ocA_M, 2)}T)
            </text>
            <line x1={xA0} y1={yBase} x2={xA0 + plotW + 6} y2={yBase} stroke="#1f2937" strokeWidth={1.8} />
            <line x1={xA0} y1={yBase} x2={xA0} y2={yBase - plotH - 8} stroke="#1f2937" strokeWidth={1.8} />
            <line x1={pxA(0)} y1={py(aT)} x2={pxA(aM)} y2={py(0)} stroke="#b45309" strokeWidth={2.8} />
            {lineA ? (
              <line
                x1={lineA.x1}
                y1={lineA.y1}
                x2={lineA.x2}
                y2={lineA.y2}
                stroke={totValid ? "#15803d" : "#dc2626"}
                strokeWidth={2}
                strokeDasharray="6 4"
              />
            ) : null}
            <text x={xA0 - 6} y={py(aT) + 4} textAnchor="end" fontSize={10} fontWeight={700} fill="#b45309">{aT}</text>
            <text x={pxA(aM)} y={yBase + 15} textAnchor="middle" fontSize={10} fontWeight={700} fill="#b45309">{aM}</text>
            <text x={xA0 + plotW / 2} y={236} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#374151">Microchips (M)</text>
            <text x={15} y={122} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#374151" transform="rotate(-90 15 122)">Textiles (T)</text>

            {/* Right panel: Beta */}
            <text x={xB0 + plotW / 2} y={20} textAnchor="middle" fontSize={12} fontWeight={800} fill="#0369a1">
              Beta (OC: 1M = {fmtNum(ocB_M, 2)}T)
            </text>
            <line x1={xB0} y1={yBase} x2={xB0 + plotW + 6} y2={yBase} stroke="#1f2937" strokeWidth={1.8} />
            <line x1={xB0} y1={yBase} x2={xB0} y2={yBase - plotH - 8} stroke="#1f2937" strokeWidth={1.8} />
            <line x1={pxB(0)} y1={py(bT)} x2={pxB(bM)} y2={py(0)} stroke="#0369a1" strokeWidth={2.8} />
            {lineB ? (
              <line
                x1={lineB.x1}
                y1={lineB.y1}
                x2={lineB.x2}
                y2={lineB.y2}
                stroke={totValid ? "#15803d" : "#dc2626"}
                strokeWidth={2}
                strokeDasharray="6 4"
              />
            ) : null}
            <text x={xB0 - 6} y={py(bT) + 4} textAnchor="end" fontSize={10} fontWeight={700} fill="#0369a1">{bT}</text>
            <text x={pxB(bM)} y={yBase + 15} textAnchor="middle" fontSize={10} fontWeight={700} fill="#0369a1">{bM}</text>
            <text x={xB0 + plotW / 2} y={236} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#374151">Microchips (M)</text>
            <text x={280} y={122} textAnchor="middle" fontSize={10.5} fontWeight={700} fill="#374151" transform="rotate(-90 280 122)">Textiles (T)</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Absolute Advantage" value={`T: ${absTextiles} · M: ${absChips}`} tone="ink" />
          <Readout
            label="Specialisation (CA)"
            value={equalOC ? "None (Equal OC)" : aSpecM ? "Alpha: M · Beta: T" : "Alpha: T · Beta: M"}
            tone={equalOC ? "bad" : "good"}
          />
          <Readout
            label="Valid ToT Range (1M)"
            value={equalOC ? "None" : `${fmtNum(minOC, 2)} – ${fmtNum(maxOC, 2)} T`}
            tone="brand"
          />
          <Readout
            label="Trade Outcome"
            value={equalOC ? "No Gains" : totValid ? "Both Gain!" : "Blocked"}
            tone={totValid ? "good" : "bad"}
          />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "tariff-welfare-lab",
    title: "Interactive Tariff Welfare Lab",
    blurb: "Adjust World Price and Specific Tariff to inspect live producer gain, tariff revenue, quadratic DWL, and consumer surplus loss.",
    Component: TariffWelfareLab,
  },
  {
    id: "comparative-advantage-explorer",
    title: "[HL] Comparative Advantage & Terms-of-Trade Explorer",
    blurb: "Vary two countries' maximum outputs and drag the Terms of Trade slider to see linear PPCs and trading frontiers beyond both PPCs.",
    Component: ComparativeAdvantageExplorer,
  },
];

export default widgets;
