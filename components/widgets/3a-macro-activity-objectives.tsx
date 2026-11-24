"use client";
import { useMemo, useState } from "react";
import { Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: AD/AS MODEL EXPLORER (MONETARIST VS KEYNESIAN)
// =============================================================================
type MacroSchool = "monetarist" | "keynesian";

function keynesianPl(y: number, yFe: number): number {
  const yBend = yFe - 36;
  if (y <= yBend) return 48;
  if (y >= yFe) return 100;
  const u = (y - yBend) / 36;
  return 48 + 52 * u * u * u;
}

function solveKeynesianEq(adShift: number, yFe: number): { y: number; pl: number } {
  const adPl = (y: number) => 168 - y + 2.2 * adShift;
  const adAtYfe = adPl(yFe);
  if (adAtYfe >= 100) {
    return { y: yFe, pl: Math.min(156, adAtYfe) };
  }
  const yBend = yFe - 36;
  const yFlat = 168 + 2.2 * adShift - 48;
  if (yFlat <= yBend) {
    return { y: Math.max(24, yFlat), pl: 48 };
  }
  let lo = yBend;
  let hi = yFe;
  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2;
    if (keynesianPl(mid, yFe) < adPl(mid)) lo = mid;
    else hi = mid;
  }
  const yStar = (lo + hi) / 2;
  return { y: yStar, pl: keynesianPl(yStar, yFe) };
}

// Coordinate mapping for AD/AS viewBox 0 0 380 280
const AD_PAD_L = 48;
const AD_PAD_R = 24;
const AD_PAD_T = 22;
const AD_PAD_B = 42;
const AD_W = 380;
const AD_H = 280;
const AD_Y_MIN = 20;
const AD_Y_MAX = 150;
const AD_PL_MIN = 25;
const AD_PL_MAX = 160;
const AD_SX = (AD_W - AD_PAD_L - AD_PAD_R) / (AD_Y_MAX - AD_Y_MIN);
const AD_SY = (AD_H - AD_PAD_T - AD_PAD_B) / (AD_PL_MAX - AD_PL_MIN);
const adPx = (y: number) => AD_PAD_L + (y - AD_Y_MIN) * AD_SX;
const adPy = (pl: number) => AD_H - AD_PAD_B - (pl - AD_PL_MIN) * AD_SY;

function AdAsModelExplorer() {
  const [school, setSchool] = useState<MacroSchool>("monetarist");
  const [adShift, setAdShift] = useState(0);
  const [srasShift, setSrasShift] = useState(0);
  const [capShift, setCapShift] = useState(0);

  const padL = AD_PAD_L;
  const padR = AD_PAD_R;
  const padT = AD_PAD_T;
  const padB = AD_PAD_B;
  const W = AD_W;
  const H = AD_H;
  const px = adPx;
  const py = adPy;

  const state = useMemo(() => {
    if (school === "monetarist") {
      const yFe = 100;
      const yStar = 100 + 0.5 * (adShift + srasShift);
      const plStar = 90 + 0.5 * (adShift - srasShift);
      const gapPct = ((yStar - yFe) / yFe) * 100;
      let regime = "Long-Run Full Employment";
      let tone: "brand" | "good" | "bad" | "ink" = "good";
      if (gapPct > 1 && plStar > 91) {
        regime = "Inflationary Gap";
        tone = "bad";
      } else if (gapPct < -1 && plStar > 91) {
        regime = "Stagflation (Cost-Push)";
        tone = "bad";
      } else if (gapPct < -1) {
        regime = "Deflationary Gap";
        tone = "brand";
      } else if (Math.abs(gapPct) <= 1 && Math.abs(plStar - 90) > 1) {
        regime = plStar > 90 ? "Full Employment (Higher PL)" : "Full Employment (Lower PL)";
        tone = "ink";
      }
      return { yFe, yStar, plStar, gapPct, regime, tone };
    }

    const yFe = 110 + capShift;
    const eq = solveKeynesianEq(adShift, yFe);
    const gapPct = ((eq.y - yFe) / yFe) * 100;
    const yBend = yFe - 36;
    let regime = "Bottleneck Zone (Rising Y & PL)";
    let tone: "brand" | "good" | "bad" | "ink" = "brand";
    if (eq.y <= yBend + 0.5) {
      regime = "Spare Capacity (0% Inflation)";
      tone = "good";
    } else if (eq.y >= yFe - 0.5 && eq.pl > 100.5) {
      regime = "Full Employment (Pure Inflation)";
      tone = "bad";
    }
    return { yFe, yStar: eq.y, plStar: eq.pl, gapPct, regime, tone };
  }, [school, adShift, srasShift, capShift]);

  // Build Keynesian AS polyline path
  const keynesianPath = useMemo(() => {
    const pts: string[] = [];
    const yFe = 110 + capShift;
    pts.push(`${adPx(26).toFixed(1)},${adPy(48).toFixed(1)}`);
    const yBend = yFe - 36;
    pts.push(`${adPx(yBend).toFixed(1)},${adPy(48).toFixed(1)}`);
    for (let i = 1; i <= 24; i++) {
      const y = yBend + (36 * i) / 24;
      pts.push(`${adPx(y).toFixed(1)},${adPy(keynesianPl(y, yFe)).toFixed(1)}`);
    }
    pts.push(`${adPx(yFe).toFixed(1)},${adPy(154).toFixed(1)}`);
    return pts.join(" ");
  }, [capShift]);

  // Helper for clipped AD line endpoints
  const adLine = (shift: number, isKeynes: boolean) => {
    const fn = (y: number) => (isKeynes ? 168 - y + 2.2 * shift : 190 - y + shift);
    const y1 = Math.max(26, isKeynes ? 168 + 2.2 * shift - 152 : 190 + shift - 152);
    const y2 = Math.min(144, isKeynes ? 168 + 2.2 * shift - 32 : 190 + shift - 32);
    return { x1: px(y1), y1: py(fn(y1)), x2: px(y2), y2: py(fn(y2)) };
  };

  // Helper for clipped SRAS line endpoints (Monetarist)
  const srasLine = (shift: number) => {
    const fn = (y: number) => -10 + y - shift;
    const y1 = Math.max(36, 42 + shift);
    const y2 = Math.min(144, 152 + shift + 10);
    return { x1: px(y1), y1: py(fn(y1)), x2: px(y2), y2: py(fn(y2)) };
  };

  const baseAd = adLine(0, school === "keynesian");
  const curAd = adLine(adShift, school === "keynesian");
  const baseSras = srasLine(0);
  const curSras = srasLine(srasShift);

  const reset = () => {
    setAdShift(0);
    setSrasShift(0);
    setCapShift(0);
  };

  const runSelfCorrect = () => {
    setSrasShift(Math.max(-30, Math.min(30, -adShift)));
  };

  const caption =
    school === "monetarist"
      ? Math.abs(state.gapPct) <= 0.5
        ? `Economy sits in long-run equilibrium on vertical LRAS (Y_fe = ${state.yFe}) at Price Level ${state.plStar.toFixed(1)}. Shift AD or SRAS to open a short-run output gap, then test automatic long-run wage self-correction.`
        : state.gapPct > 0
          ? `Positive inflationary gap (+${state.gapPct.toFixed(1)}% above Y_fe): tight labour markets will bid nominal wages upward, shifting SRAS left until Real GDP returns to Y_fe = 100 at a higher price level.`
          : srasShift < 0 && adShift >= 0
            ? `Adverse supply shock (stagflation!): higher input costs shifted SRAS left, cutting Real GDP to ${state.yStar.toFixed(1)} while pushing Price Level up to ${state.plStar.toFixed(1)}.`
            : `Negative deflationary gap (${state.gapPct.toFixed(1)}% below Y_fe): Monetarists predict flexible wages fall, shifting SRAS right back to Y_fe = 100 at a lower price level.`
      : state.yStar <= state.yFe - 35.5
        ? `Spare-capacity horizontal zone: idle workers and factories let higher AD expand Real GDP (Y = ${state.yStar.toFixed(1)}) with zero inflation (PL stays flat at 48.0).`
        : state.yStar >= state.yFe - 0.5 && state.plStar > 100.5
          ? `Vertical full-employment wall (Y_fe = ${state.yFe}): all resources are fully utilized, so further AD stimulus creates pure demand-pull inflation (PL = ${state.plStar.toFixed(1)}) with zero real output gain!`
          : `Bottleneck zone: as the economy nears Y_fe = ${state.yFe}, resource scarcity means AD expansion raises BOTH Real GDP (${state.yStar.toFixed(1)}) and the Price Level (${state.plStar.toFixed(1)}).`;

  return (
    <WidgetFrame
      title="AD/AS Model Explorer: Monetarist vs Keynesian"
      tryThis={[
        "In **Monetarist** mode, push AD to **+20** to open an inflationary gap, then click **Run Long-Run Self-Correction** to watch wages shift SRAS left.",
        "In **Monetarist** mode, reset and drag SRAS to **−20** to trigger **stagflation** (falling Real GDP + rising Price Level).",
        "Switch to **Keynesian** mode and sweep AD from **−30** all the way to **+30** to travel through spare capacity, bottlenecks, and pure inflation!",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented
            label="Macroeconomic School"
            value={school}
            onChange={setSchool}
            options={[
              { value: "monetarist", label: "Monetarist / New Classical" },
              { value: "keynesian", label: "Keynesian AS" },
            ]}
          />
          <div className="flex flex-wrap gap-2">
            {school === "monetarist" && Math.abs(state.gapPct) > 0.5 ? (
              <button type="button" className="btn btn-primary btn-sm" onClick={runSelfCorrect}>
                Run Long-Run Self-Correction
              </button>
            ) : null}
            <button type="button" className="btn btn-secondary btn-sm" onClick={reset}>
              Reset
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
          {/* Interactive SVG Plot */}
          <div className="md:col-span-7 rounded-xl border border-line bg-white p-2">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Interactive ${school} AD/AS diagram showing Real GDP ${state.yStar.toFixed(1)} and Price Level ${state.plStar.toFixed(1)}`}
              className="w-full h-auto block"
            >
              {/* Light background grid */}
              {[40, 60, 80, 100, 120, 140].map((v) => (
                <line
                  key={`gx-${v}`}
                  x1={px(v)}
                  x2={px(v)}
                  y1={padT}
                  y2={H - padB}
                  stroke="#f3f4f6"
                  strokeWidth={1}
                />
              ))}
              {[40, 60, 80, 100, 120, 140].map((v) => (
                <line
                  key={`gy-${v}`}
                  x1={padL}
                  x2={W - padR}
                  y1={py(v)}
                  y2={py(v)}
                  stroke="#f3f4f6"
                  strokeWidth={1}
                />
              ))}

              {/* Shaded Output Gap Band (between Y* and Y_fe) */}
              {Math.abs(state.yStar - state.yFe) > 1 ? (
                <rect
                  x={Math.min(px(state.yStar), px(state.yFe))}
                  y={padT}
                  width={Math.abs(px(state.yStar) - px(state.yFe))}
                  height={H - padT - padB}
                  fill={state.yStar > state.yFe ? "#ffedd5" : "#e0f2fe"}
                  opacity={0.55}
                />
              ) : null}

              {/* Axes */}
              <line x1={padL} y1={H - padB} x2={W - padR + 8} y2={H - padB} stroke="#374151" strokeWidth={2} />
              <line x1={padL} y1={H - padB} x2={padL} y2={padT - 8} stroke="#374151" strokeWidth={2} />
              <text x={W - padR} y={H - 8} fontSize={11} fontWeight={700} fill="#1f2937" textAnchor="end">
                Real GDP (Y)
              </text>
              <text
                x={14}
                y={H / 2 - 8}
                fontSize={11}
                fontWeight={700}
                fill="#1f2937"
                transform={`rotate(-90 14 ${H / 2 - 8})`}
                textAnchor="middle"
              >
                Average Price Level (PL)
              </text>

              {/* Monetarist Curves */}
              {school === "monetarist" ? (
                <g>
                  {/* Vertical LRAS */}
                  <line x1={px(100)} y1={H - padB} x2={px(100)} y2={padT} stroke="#0d9488" strokeWidth={2.6} />
                  <text x={px(100)} y={padT - 5} fontSize={10.5} fontWeight={800} fill="#0d9488" textAnchor="middle">
                    LRAS
                  </text>
                  <text x={px(100)} y={H - padB + 14} fontSize={10} fontWeight={700} fill="#0d9488" textAnchor="middle">
                    Yfe
                  </text>

                  {/* Baseline SRAS0 (faint dashed when shifted) */}
                  {srasShift !== 0 ? (
                    <line
                      x1={baseSras.x1}
                      y1={baseSras.y1}
                      x2={baseSras.x2}
                      y2={baseSras.y2}
                      stroke="#d97706"
                      strokeWidth={1.6}
                      strokeDasharray="4 4"
                      opacity={0.45}
                    />
                  ) : null}
                  {/* Active SRAS */}
                  <line
                    x1={curSras.x1}
                    y1={curSras.y1}
                    x2={curSras.x2}
                    y2={curSras.y2}
                    stroke="#b45309"
                    strokeWidth={2.6}
                  />
                  <text x={curSras.x2 - 4} y={Math.max(padT + 12, curSras.y2 - 5)} fontSize={10} fontWeight={800} fill="#b45309" textAnchor="end">
                    {srasShift === 0 ? "SRAS₀" : "SRAS₁"}
                  </text>
                </g>
              ) : (
                <g>
                  {/* Vertical Y_fe reference dashed line */}
                  <line
                    x1={px(state.yFe)}
                    y1={H - padB}
                    x2={px(state.yFe)}
                    y2={padT}
                    stroke="#0d9488"
                    strokeWidth={1.2}
                    strokeDasharray="4 3"
                    opacity={0.65}
                  />
                  <text x={px(state.yFe)} y={H - padB + 14} fontSize={10} fontWeight={700} fill="#0d9488" textAnchor="middle">
                    Yfe
                  </text>
                  {/* Keynesian 3-section AS curve */}
                  <polyline points={keynesianPath} fill="none" stroke="#0d9488" strokeWidth={3} strokeLinejoin="round" />
                  <text x={px(state.yFe) + 5} y={padT + 10} fontSize={10.5} fontWeight={800} fill="#0d9488">
                    AS
                  </text>
                </g>
              )}

              {/* Baseline AD0 (faint dashed when shifted) */}
              {adShift !== 0 ? (
                <line
                  x1={baseAd.x1}
                  y1={baseAd.y1}
                  x2={baseAd.x2}
                  y2={baseAd.y2}
                  stroke="#2563eb"
                  strokeWidth={1.6}
                  strokeDasharray="4 4"
                  opacity={0.4}
                />
              ) : null}

              {/* Active AD curve */}
              <line x1={curAd.x1} y1={curAd.y1} x2={curAd.x2} y2={curAd.y2} stroke="#2563eb" strokeWidth={2.6} />
              <text x={curAd.x2 + 2} y={Math.min(H - padB - 4, curAd.y2 + 3)} fontSize={10} fontWeight={800} fill="#2563eb">
                {adShift === 0 ? "AD₀" : "AD₁"}
              </text>

              {/* Dashed equilibrium guides */}
              <line
                x1={padL}
                y1={py(state.plStar)}
                x2={px(state.yStar)}
                y2={py(state.plStar)}
                stroke="#6b7280"
                strokeWidth={1.3}
                strokeDasharray="3 3"
              />
              <line
                x1={px(state.yStar)}
                y1={py(state.plStar)}
                x2={px(state.yStar)}
                y2={H - padB}
                stroke="#6b7280"
                strokeWidth={1.3}
                strokeDasharray="3 3"
              />

              {/* Equilibrium dot & axis readouts */}
              <circle cx={px(state.yStar)} cy={py(state.plStar)} r={5.5} fill="#c2410c" stroke="#ffffff" strokeWidth={1.8} />
              <text x={padL - 5} y={py(state.plStar) + 3.5} fontSize={9.5} fontWeight={800} fill="#c2410c" textAnchor="end">
                {state.plStar.toFixed(0)}
              </text>
              <text x={px(state.yStar)} y={H - padB + 26} fontSize={9.5} fontWeight={800} fill="#c2410c" textAnchor="middle">
                Y={state.yStar.toFixed(0)}
              </text>
            </svg>
          </div>

          {/* Controls & Live Readouts */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-3 rounded-xl border border-line bg-surface-2 p-3">
              <Slider
                label="Aggregate Demand (AD) Shift"
                value={adShift}
                min={-30}
                max={30}
                step={2}
                onChange={setAdShift}
                format={(v) => (v > 0 ? `+${v} (AD↑)` : v < 0 ? `${v} (AD↓)` : "0 (Baseline)")}
              />
              {school === "monetarist" ? (
                <Slider
                  label="SRAS Supply Shock"
                  value={srasShift}
                  min={-30}
                  max={30}
                  step={2}
                  onChange={setSrasShift}
                  format={(v) => (v > 0 ? `+${v} (Costs↓)` : v < 0 ? `${v} (Costs↑)` : "0 (Baseline)")}
                />
              ) : (
                <Slider
                  label="Full-Employment Capacity (Yfe)"
                  value={capShift}
                  min={-12}
                  max={16}
                  step={2}
                  onChange={setCapShift}
                  format={(v) => `${110 + v}`}
                />
              )}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Readout label="Real GDP (Y)" value={state.yStar.toFixed(1)} tone="brand" />
              <Readout label="Price Level (PL)" value={state.plStar.toFixed(1)} tone="ink" />
              <Readout
                label="Output Gap"
                value={`${state.gapPct > 0 ? "+" : ""}${state.gapPct.toFixed(1)}%`}
                tone={Math.abs(state.gapPct) <= 1 ? "good" : state.gapPct > 0 ? "bad" : "brand"}
              />
              <Readout label="Potential Yfe" value={state.yFe} tone="ink" />
            </div>

            <div className="rounded-xl border border-line bg-surface px-3 py-2">
              <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Macro Regime</div>
              <div
                className={`text-sm font-extrabold ${
                  state.tone === "good"
                    ? "text-good"
                    : state.tone === "bad"
                      ? "text-bad"
                      : state.tone === "ink"
                        ? "text-ink"
                        : "text-brand"
                }`}
              >
                {state.regime}
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: INTERACTIVE LORENZ CURVE & GINI COEFFICIENT EXPLORER
// =============================================================================
type Quintiles = [number, number, number, number, number];
type PresetKey = "equal" | "nordic" | "oecd" | "usa" | "unequal" | "custom";

const PRESETS: Record<Exclude<PresetKey, "custom">, { label: string; shares: Quintiles }> = {
  equal: { label: "Equal", shares: [20, 20, 20, 20, 20] },
  nordic: { label: "Nordic", shares: [9, 14, 18, 24, 35] },
  oecd: { label: "OECD Avg", shares: [7, 12, 17, 23, 41] },
  usa: { label: "USA", shares: [4, 9, 15, 23, 49] },
  unequal: { label: "High Gap", shares: [2, 5, 10, 18, 65] },
};

function updateQuintile(prev: Quintiles, idx: 0 | 1 | 2 | 3, rawVal: number): Quintiles {
  const next: Quintiles = [...prev];
  const maxForIdx = Math.floor(100 / (5 - idx));
  const v = Math.max(1, Math.min(maxForIdx, Math.round(rawVal)));
  next[idx] = v;

  for (let i = idx - 1; i >= 0; i--) {
    if (next[i] > next[i + 1]) next[i] = next[i + 1];
  }
  for (let i = idx + 1; i <= 3; i++) {
    if (next[i] < next[i - 1]) next[i] = next[i - 1];
  }

  let sum4 = next[0] + next[1] + next[2] + next[3];
  let q5 = 100 - sum4;
  for (let guard = 0; guard < 100 && q5 < next[3]; guard++) {
    let dec = 3;
    while (dec > 0 && next[dec] === next[dec - 1]) dec--;
    if (next[dec] <= 1) break;
    next[dec] -= 1;
    for (let k = dec + 1; k <= 3; k++) {
      if (next[k] < next[k - 1]) next[k] = next[k - 1];
    }
    sum4 = next[0] + next[1] + next[2] + next[3];
    q5 = 100 - sum4;
  }
  next[4] = 100 - (next[0] + next[1] + next[2] + next[3]);
  return next;
}

function LorenzGiniExplorer() {
  const [preset, setPreset] = useState<PresetKey>("oecd");
  const [shares, setShares] = useState<Quintiles>(PRESETS.oecd.shares);

  const selectPreset = (key: PresetKey) => {
    setPreset(key);
    if (key !== "custom") setShares(PRESETS[key].shares);
  };

  const handleSlider = (idx: 0 | 1 | 2 | 3, val: number) => {
    setPreset("custom");
    setShares((prev) => updateQuintile(prev, idx, val));
  };

  const metrics = useMemo(() => {
    const cum: number[] = [];
    let running = 0;
    for (const s of shares) {
      running += s;
      cum.push(running);
    }
    // Exact piecewise-linear trapezoidal Area B across 5 bins of width 0.2
    const c = cum.map((v) => v / 100);
    const areaB = 0.1 * (2 * (c[0] + c[1] + c[2] + c[3]) + c[4]);
    const areaA = Math.max(0, 0.5 - areaB);
    const gini = areaA / 0.5;
    const ratio = shares[4] / Math.max(1, shares[0]);
    return { cum, areaA, areaB, gini, ratio };
  }, [shares]);

  // Square SVG coordinate system: plot area [54..294] × [20..260] (240px × 240px)
  const ox = 54;
  const oy = 260;
  const size = 240;
  const gx = (pct: number) => ox + (pct / 100) * size;
  const gy = (pct: number) => oy - (pct / 100) * size;

  const points: Array<[number, number]> = [
    [0, 0],
    [20, metrics.cum[0]],
    [40, metrics.cum[1]],
    [60, metrics.cum[2]],
    [80, metrics.cum[3]],
    [100, 100],
  ];

  const lorenzPolyline = points.map(([x, y]) => `${gx(x).toFixed(1)},${gy(y).toFixed(1)}`).join(" ");
  const areaAPath =
    `M ${gx(0)} ${gy(0)} L ${gx(100)} ${gy(100)} ` +
    [...points]
      .reverse()
      .map(([x, y]) => `L ${gx(x).toFixed(1)} ${gy(y).toFixed(1)}`)
      .join(" ") +
    " Z";
  const areaBPath =
    `M ${gx(0)} ${gy(0)} ` +
    points.map(([x, y]) => `L ${gx(x).toFixed(1)} ${gy(y).toFixed(1)}`).join(" ") +
    ` L ${gx(100)} ${gy(0)} Z`;

  const giniTone: "good" | "brand" | "bad" =
    metrics.gini < 0.28 ? "good" : metrics.gini < 0.42 ? "brand" : "bad";

  const caption =
    metrics.gini < 0.005
      ? "Perfect equality (Gini = 0.00): every 20% of the population earns exactly 20% of national income, so Area A collapses to zero and the Lorenz curve lies straight on the 45° diagonal."
      : `The poorest 40% of households earn ${metrics.cum[1]}% of national income while the richest 20% earn ${shares[4]}% (a ${metrics.ratio.toFixed(1)}× top-to-bottom quintile ratio). Area A = ${metrics.areaA.toFixed(3)} out of 0.500 yields a Gini coefficient of ${metrics.gini.toFixed(3)}.`;

  return (
    <WidgetFrame
      title="Interactive Lorenz Curve & Gini Coefficient Lab"
      tryThis={[
        "Compare the **Nordic** preset against **High Gap** and watch how bowing away from the 45° line enlarges **Area A**.",
        "Simulate a progressive tax-and-transfer reform: raise **Poorest 20% (Q1)** from 4% to 10% and observe how much the **Gini** falls!",
        "Try creating **Perfect Equality** (`20%` each) and verify that `Gini = 0.000`.",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented<PresetKey>
          label="Country Distribution Presets"
          value={preset}
          onChange={selectPreset}
          options={[
            { value: "equal", label: PRESETS.equal.label },
            { value: "nordic", label: PRESETS.nordic.label },
            { value: "oecd", label: PRESETS.oecd.label },
            { value: "usa", label: PRESETS.usa.label },
            { value: "unequal", label: PRESETS.unequal.label },
          ]}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
          {/* Live Lorenz SVG */}
          <div className="md:col-span-6 rounded-xl border border-line bg-white p-2">
            <svg
              viewBox="0 0 326 302"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={`Interactive Lorenz curve showing Gini coefficient ${metrics.gini.toFixed(3)} with quintile shares ${shares.join("%, ")}%`}
              className="w-full h-auto block"
            >
              <rect x={ox} y={oy - size} width={size} height={size} fill="#fcf9f2" stroke="#d1d5db" strokeWidth={1} />
              {[20, 40, 60, 80].map((p) => (
                <g key={`grid-${p}`} stroke="#e5e7eb" strokeWidth={1}>
                  <line x1={gx(p)} y1={gy(0)} x2={gx(p)} y2={gy(100)} />
                  <line x1={gx(0)} y1={gy(p)} x2={gx(100)} y2={gy(p)} />
                </g>
              ))}

              {/* Shaded Areas A & B */}
              <path d={areaAPath} fill="#fef3c7" opacity={0.9} />
              <path d={areaBPath} fill="#ccfbf1" opacity={0.85} />

              {/* Axes */}
              <line x1={ox} y1={oy} x2={ox + size + 4} y2={oy} stroke="#374151" strokeWidth={2} />
              <line x1={ox} y1={oy} x2={ox} y2={oy - size - 4} stroke="#374151" strokeWidth={2} />

              {/* 45-degree Line of Perfect Equality */}
              <line
                x1={gx(0)}
                y1={gy(0)}
                x2={gx(100)}
                y2={gy(100)}
                stroke="#374151"
                strokeWidth={2}
                strokeDasharray="6 4"
              />

              {/* Lorenz Curve */}
              <polyline points={lorenzPolyline} fill="none" stroke="#b45309" strokeWidth={3} />
              {points.slice(1, 5).map(([x, y]) => (
                <g key={`pt-${x}`}>
                  <circle cx={gx(x)} cy={gy(y)} r={4} fill="#b45309" stroke="#ffffff" strokeWidth={1.4} />
                  <text
                    x={gx(x) + 4}
                    y={Math.min(oy - 4, gy(y) + 13)}
                    fontSize={9}
                    fontWeight={700}
                    fill="#92400e"
                  >
                    {y}%
                  </text>
                </g>
              ))}

              {/* Area A & Area B Labels */}
              {metrics.gini > 0.08 ? (
                <text x={gx(54)} y={gy(38)} fontSize={13} fontWeight={800} fill="#b45309" textAnchor="middle">
                  A
                </text>
              ) : null}
              <text x={gx(82)} y={gy(14)} fontSize={13} fontWeight={800} fill="#0d9488" textAnchor="middle">
                B
              </text>

              {/* Axis tick numbers */}
              {[0, 20, 40, 60, 80, 100].map((p) => (
                <g key={`tk-${p}`}>
                  <text x={gx(p)} y={oy + 14} fontSize={9.5} fill="#4b5563" textAnchor="middle">
                    {p}
                  </text>
                  <text x={ox - 7} y={gy(p) + 3} fontSize={9.5} fill="#4b5563" textAnchor="end">
                    {p}
                  </text>
                </g>
              ))}

              <text x={ox + size / 2} y={294} fontSize={11} fontWeight={700} fill="#1f2937" textAnchor="middle">
                Cumulative % of Population
              </text>
              <text
                x={14}
                y={oy - size / 2}
                fontSize={11}
                fontWeight={700}
                fill="#1f2937"
                transform={`rotate(-90 14 ${oy - size / 2})`}
                textAnchor="middle"
              >
                Cumulative % of Income
              </text>
            </svg>
          </div>

          {/* Quintile Controls & Gini Readouts */}
          <div className="md:col-span-6 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <Readout label="Gini Coefficient" value={metrics.gini.toFixed(3)} tone={giniTone} />
              <Readout label="Q5 ÷ Q1 Ratio" value={`${metrics.ratio.toFixed(1)}×`} tone="ink" />
              <Readout label="Area A" value={metrics.areaA.toFixed(3)} tone="brand" />
              <Readout label="Area B" value={metrics.areaB.toFixed(3)} tone="good" />
            </div>

            <div className="space-y-2.5 rounded-xl border border-line bg-surface-2 p-3">
              <Slider
                label="Poorest 20% (Q1)"
                value={shares[0]}
                min={1}
                max={20}
                onChange={(v) => handleSlider(0, v)}
                format={(v) => `${v}%`}
              />
              <Slider
                label="2nd Quintile (Q2)"
                value={shares[1]}
                min={1}
                max={25}
                onChange={(v) => handleSlider(1, v)}
                format={(v) => `${v}%`}
              />
              <Slider
                label="Middle 20% (Q3)"
                value={shares[2]}
                min={1}
                max={30}
                onChange={(v) => handleSlider(2, v)}
                format={(v) => `${v}%`}
              />
              <Slider
                label="4th Quintile (Q4)"
                value={shares[3]}
                min={1}
                max={40}
                onChange={(v) => handleSlider(3, v)}
                format={(v) => `${v}%`}
              />
              <div className="flex items-center justify-between border-t border-line pt-2 text-sm">
                <span className="font-semibold text-ink-2">Richest 20% (Q5 — remainder)</span>
                <span className="font-extrabold tabular-nums text-brand">{shares[4]}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "adas-model-explorer",
    title: "AD/AS Model Explorer: Monetarist vs Keynesian",
    blurb: "Toggle Monetarist vertical LRAS vs Keynesian 3-section AS and test demand shocks, supply shocks, and self-correction.",
    Component: AdAsModelExplorer,
  },
  {
    id: "lorenz-gini-explorer",
    title: "Interactive Lorenz Curve & Gini Lab",
    blurb: "Adjust income quintile shares or pick real-world profiles to compute live Lorenz curves, Areas A & B, and exact Gini scores.",
    Component: LorenzGiniExplorer,
  },
];

export default widgets;
