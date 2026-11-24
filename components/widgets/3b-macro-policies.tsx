"use client";

import { useMemo, useState } from "react";
import { M, Readout, Segmented, Slider, WidgetFrame, type WidgetDef } from "./kit";

// =============================================================================
// WIDGET 1: [HL] KEYNESIAN MULTIPLIER CASCADE SIMULATOR
// =============================================================================
function MultiplierCascadeWidget() {
  const [mps, setMps] = useState(0.1);
  const [mpt, setMpt] = useState(0.15);
  const [mpm, setMpm] = useState(0.15);
  const [deltaG, setDeltaG] = useState(20);

  const mpw = +(mps + mpt + mpm).toFixed(2);
  const mpc = +(1 - mpw).toFixed(2);
  const k = 1 / mpw;
  const totalDeltaY = deltaG * k;

  const rounds = useMemo(() => {
    const list: Array<{ round: number; amount: number; cumulative: number }> = [];
    let cum = 0;
    for (let r = 1; r <= 6; r++) {
      const amount = deltaG * Math.pow(mpc, r - 1);
      cum += amount;
      list.push({ round: r, amount, cumulative: cum });
    }
    return list;
  }, [deltaG, mpc]);

  const restAmount = Math.max(0, totalDeltaY - rounds[rounds.length - 1].cumulative);
  const totalSavingsLeak = mps * totalDeltaY;
  const totalTaxLeak = mpt * totalDeltaY;
  const totalImportLeak = mpm * totalDeltaY;

  // Bar scale relative to Round 1 (ΔG)
  const maxBarVal = Math.max(deltaG, restAmount, 1);
  const chartBottom = 186;
  const maxBarH = 132;

  const applyPreset = (preset: "closed" | "balanced" | "open") => {
    if (preset === "closed") {
      setMps(0.1);
      setMpt(0.1);
      setMpm(0.05);
    } else if (preset === "balanced") {
      setMps(0.1);
      setMpt(0.15);
      setMpm(0.15);
    } else {
      setMps(0.15);
      setMpt(0.15);
      setMpm(0.3);
    }
  };

  return (
    <WidgetFrame
      title="[HL] Keynesian Multiplier Cascade Simulator"
      tryThis={[
        "Set `MPS = 0.10`, `MPT = 0.15`, `MPM = 0.15` (`k = 2.5`) and raise `MPM` to `0.30` (a small open economy like Singapore): watch how fast the cascade shrinks!",
        "Check the leakage bar at the bottom: notice that total leakages (`ΔS + ΔT + ΔM`) ALWAYS equal your initial `ΔG` injection!",
      ]}
      caption={
        <span>
          With <M>{`MPW = ${mps.toFixed(2)} + ${mpt.toFixed(2)} + ${mpm.toFixed(2)} = ${mpw.toFixed(2)}`}</M>, households re-spend{" "}
          <strong>{Math.round(mpc * 100)}%</strong> of each round domestically (<M>{`MPC = ${mpc.toFixed(2)}`}</M>). The multiplier is{" "}
          <M>{`k = 1 / ${mpw.toFixed(2)} = ${k.toFixed(2)}`}</M>, turning an initial <strong>${deltaG}bn</strong> injection into{" "}
          <strong>${totalDeltaY.toFixed(1)}bn</strong> of final Real GDP (assuming spare capacity and no crowding out). To close a $60bn deflationary gap here, you would need{" "}
          <strong>ΔG = ${(60 / k).toFixed(1)}bn</strong>.
        </span>
      }
    >
      {/* Quick economy presets */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="text-xs font-bold uppercase tracking-wide text-ink-2">Economy presets:</span>
        <button
          type="button"
          onClick={() => applyPreset("closed")}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Large Closed (k = 4.0)
        </button>
        <button
          type="button"
          onClick={() => applyPreset("balanced")}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Balanced (k = 2.5)
        </button>
        <button
          type="button"
          onClick={() => applyPreset("open")}
          className="rounded-lg border border-line bg-surface-2 px-2.5 py-1 text-xs font-bold text-ink hover:border-brand"
        >
          Small Open / Singapore (k = 1.67)
        </button>
      </div>

      {/* Controls */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Slider label="MPS (Savings leakage)" value={mps} min={0.05} max={0.3} step={0.05} onChange={setMps} format={(v) => v.toFixed(2)} />
        <Slider label="MPT (Tax leakage)" value={mpt} min={0.05} max={0.3} step={0.05} onChange={setMpt} format={(v) => v.toFixed(2)} />
        <Slider label="MPM (Import leakage)" value={mpm} min={0.05} max={0.3} step={0.05} onChange={setMpm} format={(v) => v.toFixed(2)} />
        <Slider label="Initial Injection (ΔG)" value={deltaG} min={5} max={50} step={5} onChange={setDeltaG} format={(v) => `$${v}bn`} />
      </div>

      {/* Live Readouts */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label="Domestic MPC" value={mpc.toFixed(2)} tone="ink" />
        <Readout label="Leakages (MPW)" value={mpw.toFixed(2)} tone="bad" />
        <Readout label="Multiplier (k)" value={k.toFixed(2)} tone="brand" />
        <Readout label="Total ΔReal GDP" value={`$${totalDeltaY.toFixed(1)}bn`} tone="good" />
      </div>

      {/* SVG Cascade Chart */}
      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface">
        <svg viewBox="0 0 540 245" className="h-auto w-full" role="img" aria-label="Round-by-round Keynesian multiplier spending cascade bars">
          <text x="270" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)">
            Round-by-Round Spending Cascade (Each Round = MPC × Previous Round)
          </text>
          <line x1="34" y1={chartBottom} x2="510" y2={chartBottom} stroke="var(--ink)" strokeWidth="1.5" />

          {rounds.map((r, idx) => {
            const x = 44 + idx * 62;
            const h = Math.max(4, (r.amount / maxBarVal) * maxBarH);
            const y = chartBottom - h;
            const fill = idx === 0 ? "var(--brand)" : "var(--accent)";
            const opacity = idx === 0 ? 1 : Math.max(0.35, 1 - idx * 0.12);
            return (
              <g key={r.round}>
                <rect x={x} y={y} width="44" height={h} rx="5" fill={fill} opacity={opacity} />
                <text x={x + 22} y={y - 6} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink)">
                  ${r.amount.toFixed(1)}
                </text>
                <text x={x + 22} y={chartBottom + 15} textAnchor="middle" fontSize="10.5" fontWeight="600" fill="var(--ink-2)">
                  {idx === 0 ? "Rd 1 (ΔG)" : `Rd ${r.round}`}
                </text>
              </g>
            );
          })}

          {/* Remaining rounds 7..∞ */}
          {(() => {
            const x = 44 + 6 * 62 + 12;
            const h = Math.max(3, (restAmount / maxBarVal) * maxBarH);
            const y = chartBottom - h;
            return (
              <g>
                <rect x={x} y={y} width="66" height={h} rx="5" fill="var(--good)" opacity="0.85" />
                <text x={x + 33} y={y - 6} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--good)">
                  +${restAmount.toFixed(1)}
                </text>
                <text x={x + 33} y={chartBottom + 15} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--good)">
                  Rd 7–∞
                </text>
              </g>
            );
          })()}

          {/* Stacked Leakage Absorption Bar proving ΔS + ΔT + ΔM = ΔG */}
          <text x="34" y="220" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
            Where the ${deltaG}bn leaks out (total = ${(totalSavingsLeak + totalTaxLeak + totalImportLeak).toFixed(1)}bn):
          </text>
          {(() => {
            const barX = 34;
            const barW = 476;
            const wS = (mps / mpw) * barW;
            const wT = (mpt / mpw) * barW;
            const wM = (mpm / mpw) * barW;
            return (
              <g>
                <rect x={barX} y="226" width={wS} height="13" rx="3" fill="var(--info)" />
                <rect x={barX + wS} y="226" width={wT} height="13" fill="var(--warn)" />
                <rect x={barX + wS + wT} y="226" width={wM} height="13" rx="3" fill="var(--bad)" />
              </g>
            );
          })()}
        </svg>
        <div className="flex flex-wrap gap-3 border-t border-line bg-surface-2 px-3 py-2 text-xs text-ink-2">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-info" />
            Savings ΔS: <strong className="text-ink">${totalSavingsLeak.toFixed(1)}bn</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-warn" />
            Taxes ΔT: <strong className="text-ink">${totalTaxLeak.toFixed(1)}bn</strong>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-bad" />
            Imports ΔM: <strong className="text-ink">${totalImportLeak.toFixed(1)}bn</strong>
          </span>
        </div>
      </div>
    </WidgetFrame>
  );
}

// =============================================================================
// WIDGET 2: MONETARY & FISCAL POLICY DASHBOARD (LIVE AD/AS + INTEREST RATES)
// =============================================================================
type MacroScenario = "recession" | "inflation" | "stagflation";

function asPriceLevel(y: number, yFe: number, basePL: number): number {
  const elbow = yFe - 38;
  if (y <= elbow) return basePL;
  const t = Math.min(1, (y - elbow) / 38);
  return basePL + 44 * t * t * t;
}

function solveEquilibrium(adIntercept: number, adSlope: number, yFe: number, basePL: number): { y: number; pl: number } {
  const adAtFe = adIntercept - adSlope * yFe;
  const maxKneePL = basePL + 44;
  if (adAtFe >= maxKneePL) {
    return { y: yFe, pl: Math.min(162, adAtFe) };
  }
  let lo = 15;
  let hi = yFe;
  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2;
    const diff = adIntercept - adSlope * mid - asPriceLevel(mid, yFe, basePL);
    if (diff > 0) lo = mid;
    else hi = mid;
  }
  const y = (lo + hi) / 2;
  return { y, pl: asPriceLevel(y, yFe, basePL) };
}

function MacroPolicyDashboardWidget() {
  const [scenario, setScenario] = useState<MacroScenario>("recession");
  const [rateDelta, setRateDelta] = useState(0); // percentage point change in base rate (-3..+3)
  const [fiscalDelta, setFiscalDelta] = useState(0); // -$30bn .. +$30bn discretionary fiscal stance
  const [supplyReform, setSupplyReform] = useState(0); // 0 .. 10 long-run supply-side investment

  const handleScenarioChange = (next: MacroScenario) => {
    setScenario(next);
    setRateDelta(0);
    setFiscalDelta(0);
    setSupplyReform(0);
  };

  // Baseline scenario parameters (Real GDP in index/billions 0..130, PL in index 80..165)
  const cfg = useMemo(() => {
    if (scenario === "recession") {
      return {
        label: "Severe Recession (Deflationary Gap)",
        baseYFe: 100,
        basePL: 98,
        baseRate: 0.75,
        adIntercept0: 158, // gives Y1 ~ 70.6 (big deflationary gap!)
      };
    }
    if (scenario === "inflation") {
      return {
        label: "Overheating Boom (Inflationary Gap)",
        baseYFe: 100,
        basePL: 100,
        baseRate: 3.5,
        adIntercept0: 224, // pushes right into steep/vertical AS near Y_fe with PL ~ 139
      };
    }
    return {
      label: "Cost-Push Stagflation (Oil Shock)",
      baseYFe: 100,
      basePL: 118, // SRAS/AS shifted up by supply shock!
      baseRate: 4.0,
      adIntercept0: 194, // higher prices + stagnant output
    };
  }, [scenario]);

  const adSlope = 0.85;

  // Enforce Zero Lower Bound on nominal base rate!
  const rawTargetRate = cfg.baseRate + rateDelta;
  const hitZlb = rawTargetRate < 0;
  const policyRate = Math.max(0, rawTargetRate);
  const effectiveRateChange = policyRate - cfg.baseRate;

  // Initial equilibrium before policies
  const eq0 = useMemo(
    () => solveEquilibrium(cfg.adIntercept0, adSlope, cfg.baseYFe, cfg.basePL),
    [cfg],
  );

  // Supply-side impact: shifts Y_fe rightwards AND eases cost-push basePL in stagflation!
  const yFeNew = cfg.baseYFe + supplyReform * 1.8;
  const basePLNew = scenario === "stagflation" ? cfg.basePL - supplyReform * 1.4 : cfg.basePL - supplyReform * 0.3;

  // Crowding-out pressure: stronger when economy starts near full employment and fiscalDelta > 0
  const capacityRatio = eq0.y / cfg.baseYFe;
  const crowdingOutRateBump =
    fiscalDelta > 0 ? +(fiscalDelta * 0.045 * Math.max(0.15, (capacityRatio - 0.65) / 0.35)).toFixed(2) : 0;
  const marketRate = +(policyRate + crowdingOutRateBump).toFixed(2);

  // AD shift from monetary policy (lower rate -> AD right; weaker in deep slump confidence trap),
  // fiscal policy (net of crowding-out pullback), and short-run AD effect of interventionist supply-side investment
  const monetaryMultiplier = scenario === "recession" ? 6.5 : 10.5;
  const monetaryAdShift = -effectiveRateChange * monetaryMultiplier;
  const crowdingOutDrag = crowdingOutRateBump * 8.5;
  const fiscalAdShift = fiscalDelta * 0.95 - crowdingOutDrag;
  const supplyShortRunAd = supplyReform * 0.9;

  const adInterceptNew = Math.max(122, Math.min(252, cfg.adIntercept0 + monetaryAdShift + fiscalAdShift + supplyShortRunAd));
  const eqNew = useMemo(
    () => solveEquilibrium(adInterceptNew, adSlope, yFeNew, basePLNew),
    [adInterceptNew, yFeNew, basePLNew],
  );

  const outputGap = +(eqNew.y - yFeNew).toFixed(1);
  const plChange = +(eqNew.pl - eq0.pl).toFixed(1);

  // SVG coordinate transforms: Y in [20, 130], PL in [85, 165]
  const sx = (y: number) => 66 + ((y - 20) / 110) * 435;
  const sy = (pl: number) => 240 - ((pl - 85) / 80) * 195;

  const buildAsPath = (yFe: number, basePL: number) => {
    const pts: string[] = [];
    for (let y = 26; y <= yFe; y += 2) {
      pts.push(`${sx(y).toFixed(1)},${sy(asPriceLevel(y, yFe, basePL)).toFixed(1)}`);
    }
    pts.push(`${sx(yFe).toFixed(1)},${sy(162).toFixed(1)}`);
    return `M ${pts.join(" L ")}`;
  };

  const buildAdLine = (intercept: number) => {
    // Clip line neatly inside Y=[24, 126] and PL=[88, 162]
    const yStart = Math.max(24, Math.min(116, (intercept - 162) / adSlope));
    const yEnd = Math.max(yStart + 8, Math.min(126, (intercept - 88) / adSlope));
    return {
      x1: sx(yStart),
      y1: sy(Math.max(88, Math.min(162, intercept - adSlope * yStart))),
      x2: sx(yEnd),
      y2: sy(Math.max(88, Math.min(162, intercept - adSlope * yEnd))),
    };
  };

  const ad0Line = buildAdLine(cfg.adIntercept0);
  const adNewLine = buildAdLine(adInterceptNew);

  const gapStatus =
    Math.abs(outputGap) <= 4
      ? { text: "Near Full Employment", tone: "good" as const }
      : outputGap < -4
        ? { text: `Deflationary (${outputGap})`, tone: "bad" as const }
        : { text: `Overheating (+${outputGap})`, tone: "bad" as const };

  return (
    <WidgetFrame
      title="Monetary, Fiscal & Supply-Side Policy Dashboard"
      tryThis={[
        "In **Severe Recession**, drag the base interest rate to `−3.0%`: notice it hits the **Zero Lower Bound (0.00%)** before closing the gap — now add expansionary fiscal policy (`+ΔG`)!",
        "Switch to **Overheating Boom** and try expansionary `ΔG > 0`: watch market interest rates jump (**crowding out**) and inflation surge along the vertical AS wall.",
        "Switch to **Cost-Push Stagflation**: test why pure demand-side tools force an output-vs-inflation trade-off, whereas **Supply-Side Reform** lowers prices AND lifts Real GDP!",
      ]}
      caption={
        <span>
          <strong>Live Policy Diagnostic:</strong>{" "}
          {hitZlb ? (
            <span className="font-semibold text-bad">Zero Lower Bound reached (nominal base rate capped at 0.00%)! </span>
          ) : null}
          {crowdingOutRateBump >= 0.45 ? (
            <span className="font-semibold text-bad">
              Crowding-out pressure added +{crowdingOutRateBump.toFixed(2)}% to market bond yields, curbing private investment.{" "}
            </span>
          ) : null}
          Real GDP moved from <strong>{eq0.y.toFixed(1)}</strong> to <strong>{eqNew.y.toFixed(1)}</strong> (potential{" "}
          <strong>Y_fe = {yFeNew.toFixed(1)}</strong>), while the Average Price Level moved{" "}
          <strong>
            {plChange >= 0 ? "+" : "−"}
            {Math.abs(plChange).toFixed(1)}
          </strong>{" "}
          index points.
        </span>
      }
    >
      {/* Scenario Selector */}
      <div className="mb-4">
        <Segmented<MacroScenario>
          label="Choose starting macroeconomic scenario"
          value={scenario}
          onChange={handleScenarioChange}
          options={[
            { value: "recession", label: "Deep Recession" },
            { value: "inflation", label: "Inflation Boom" },
            { value: "stagflation", label: "Stagflation Shock" },
          ]}
        />
      </div>

      {/* Policy Sliders */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Slider
          label="Base Rate Change (Δi)"
          value={rateDelta}
          min={-3}
          max={3}
          step={0.5}
          onChange={setRateDelta}
          format={(v) => `${v > 0 ? "+" : ""}${v.toFixed(1)}%${hitZlb ? " (ZLB)" : ""}`}
        />
        <Slider
          label="Fiscal Stance (ΔG / −ΔT)"
          value={fiscalDelta}
          min={-30}
          max={30}
          step={5}
          onChange={setFiscalDelta}
          format={(v) => `${v > 0 ? "+" : ""}$${v}bn`}
        />
        <Slider
          label="Supply-Side Reform (LRAS)"
          value={supplyReform}
          min={0}
          max={10}
          step={1}
          onChange={setSupplyReform}
          format={(v) => `+${v} units`}
        />
      </div>

      {/* Live Readouts */}
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        <Readout label="Real GDP (Y)" value={`${eqNew.y.toFixed(1)} / ${yFeNew.toFixed(0)}`} tone="brand" />
        <Readout label="Price Level (PL)" value={eqNew.pl.toFixed(1)} tone={eqNew.pl > 125 ? "bad" : "ink"} />
        <Readout
          label="Market Rate (i)"
          value={`${marketRate.toFixed(2)}%`}
          tone={crowdingOutRateBump >= 0.45 ? "bad" : "ink"}
        />
        <Readout label="Output Gap" value={gapStatus.text} tone={gapStatus.tone} />
      </div>

      {/* Live AD/AS SVG Diagram */}
      <div className="mt-4 overflow-hidden rounded-xl border border-line bg-surface">
        <svg viewBox="0 0 540 278" className="h-auto w-full" role="img" aria-label="Interactive Keynesian AD-AS diagram responding to monetary, fiscal, and supply-side policy sliders">
          <text x="280" y="22" textAnchor="middle" fontSize="12.5" fontWeight="700" fill="var(--ink)">
            {cfg.label} — Live AD/AS Response
          </text>

          {/* Axes */}
          <line x1="66" y1="240" x2="512" y2="240" stroke="var(--ink)" strokeWidth="2" />
          <line x1="66" y1="240" x2="66" y2="38" stroke="var(--ink)" strokeWidth="2" />
          <polygon points="512,240 504,236 504,244" fill="var(--ink)" />
          <polygon points="66,38 62,46 70,46" fill="var(--ink)" />
          <text x="506" y="264" textAnchor="end" fontSize="11.5" fontWeight="700" fill="var(--ink)">
            Real GDP (Y)
          </text>
          <text x="18" y="142" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="var(--ink)" transform="rotate(-90 18 142)">
            Average Price Level (PL)
          </text>

          {/* Baseline AS1 (dashed if supplyReform > 0) */}
          <path
            d={buildAsPath(cfg.baseYFe, cfg.basePL)}
            fill="none"
            stroke="var(--ink-2)"
            strokeWidth={supplyReform > 0 ? 2 : 3}
            strokeDasharray={supplyReform > 0 ? "5,4" : undefined}
          />
          <text x={sx(cfg.baseYFe) - 4} y="48" textAnchor="end" fontSize="11" fontWeight="700" fill="var(--ink-2)">
            AS₁
          </text>
          <line x1={sx(cfg.baseYFe)} y1="240" x2={sx(cfg.baseYFe)} y2={sy(cfg.basePL + 44)} stroke="var(--line)" strokeWidth="1" strokeDasharray="3,3" />
          <text x={sx(cfg.baseYFe)} y="255" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--ink-2)">
            Y_fe1
          </text>

          {/* Active Shifted AS2 when supplyReform > 0 */}
          {supplyReform > 0 ? (
            <g>
              <path d={buildAsPath(yFeNew, basePLNew)} fill="none" stroke="var(--good)" strokeWidth="3" />
              <text x={sx(yFeNew) + 6} y="54" fontSize="11" fontWeight="700" fill="var(--good)">
                AS₂
              </text>
              <text x={sx(yFeNew)} y="255" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--good)">
                Y_fe2
              </text>
            </g>
          ) : null}

          {/* Original AD1 */}
          <line
            x1={ad0Line.x1}
            y1={ad0Line.y1}
            x2={ad0Line.x2}
            y2={ad0Line.y2}
            stroke="var(--ink-2)"
            strokeWidth="2"
            strokeDasharray="5,4"
          />
          <text x={ad0Line.x2 + 4} y={ad0Line.y2} fontSize="11" fontWeight="700" fill="var(--ink-2)">
            AD₁
          </text>

          {/* Active AD2 */}
          <line
            x1={adNewLine.x1}
            y1={adNewLine.y1}
            x2={adNewLine.x2}
            y2={adNewLine.y2}
            stroke="var(--brand)"
            strokeWidth="3"
          />
          <text x={adNewLine.x2 + 4} y={Math.max(52, adNewLine.y2 - 4)} fontSize="11.5" fontWeight="700" fill="var(--brand)">
            AD₂
          </text>

          {/* Original Equilibrium E1 */}
          <circle cx={sx(eq0.y)} cy={sy(eq0.pl)} r="4.5" fill="var(--ink-2)" />
          <text x={sx(eq0.y) - 12} y={sy(eq0.pl) - 8} fontSize="11" fontWeight="700" fill="var(--ink-2)">
            E₁
          </text>

          {/* Active Equilibrium E2 with guide lines */}
          <line x1="66" y1={sy(eqNew.pl)} x2={sx(eqNew.y)} y2={sy(eqNew.pl)} stroke="var(--brand)" strokeWidth="1.4" strokeDasharray="4,3" />
          <line x1={sx(eqNew.y)} y1={sy(eqNew.pl)} x2={sx(eqNew.y)} y2="240" stroke="var(--brand)" strokeWidth="1.4" strokeDasharray="4,3" />
          <circle cx={sx(eqNew.y)} cy={sy(eqNew.pl)} r="6" fill="var(--brand)" />
          <text x={sx(eqNew.y) + 9} y={sy(eqNew.pl) - 6} fontSize="12" fontWeight="800" fill="var(--brand)">
            E₂
          </text>
          <text x="60" y={sy(eqNew.pl) + 4} textAnchor="end" fontSize="10.5" fontWeight="700" fill="var(--brand)">
            {eqNew.pl.toFixed(0)}
          </text>
          <text x={sx(eqNew.y)} y="255" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="var(--brand)">
            Y₂
          </text>
        </svg>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "multiplier-cascade-hl",
    title: "[HL] Keynesian Multiplier Cascade Simulator",
    blurb: "Adjust MPS, MPT, MPM and initial government spending ΔG to watch the round-by-round spending cascade and leakages update live.",
    Component: MultiplierCascadeWidget,
  },
  {
    id: "macro-policy-dashboard",
    title: "Monetary, Fiscal & Supply-Side Policy Dashboard",
    blurb: "Pick a recession, inflation boom, or stagflation shock, then steer interest rates, fiscal policy, and supply-side reform on a live AD/AS model.",
    Component: MacroPolicyDashboardWidget,
  },
];

export default widgets;
