import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In September 2022, a single Friday morning budget announcement in London sent UK government bond yields soaring so fast that the Bank of England had to step in within days to calm pension funds. Why can one clash between a finance minister (fiscal policy) and a central bank (monetary policy) move mortgage rates for millions of families overnight?",
  didYouKnow: [
    "New Zealand invented modern **inflation targeting** in 1990 — its Reserve Bank Governor even had his job contract tied directly to keeping CPI inflation inside a 0–2% band!",
    "The **Monetary Authority of Singapore (MAS)** is one of the very few central banks in the world that runs monetary policy via a **trade-weighted exchange rate band (S$NEER)** instead of domestic interest rates, because imports exceed 100% of Singapore's GDP.",
    "Japan's **Debt-to-GDP ratio** has exceeded 240% — more than double most European economies — yet its borrowing costs stayed near 0% for over two decades because domestic Japanese savers and the Bank of Japan hold the vast majority of its sovereign bonds in yen.",
    "When the UK granted the **Bank of England operational independence** in May 1997, long-term inflation expectations embedded in UK government bond yields dropped within a single day — proving how valuable central-bank credibility is!",
    "The **Keynesian multiplier** was actually first published in 1931 by Keynes's brilliant Cambridge student **Richard Kahn** (as the employment multiplier) before Keynes generalised it into the income multiplier in his 1936 *General Theory*.",
  ],
  activities: [
    {
      title: "The Four-Jar Multiplier Cascade Lab",
      emoji: "🪙",
      materials: [
        "100 poker chips or paper slips (representing $100 million of new infrastructure spending)",
        "4 labelled cups: Domestic Shop (MPC), Bank Savings (MPS), Tax Office (MPT), Foreign Imports (MPM)",
        "Calculator and notepad",
      ],
      steps: [
        "Choose a small-open-economy leakage rule: put 10% into Savings, 15% into Taxes, and 25% into Imports (`MPW = 0.50`, so `MPC = 0.50`).",
        "Start Round 1 with all 100 chips spent at the Domestic Shop (`+$100m` GDP). Before Round 2, pour 10 chips into Savings, 15 into Tax, and 25 into Imports — leaving 50 chips.",
        "Spend the remaining 50 chips in Round 2 (`+$50m` GDP), then withdraw 50% again into the three leakage cups (5, 7.5, 12.5), leaving 25 chips for Round 3.",
        "Continue for 5 rounds, summing total domestic spending AND summing total chips sitting inside the three leakage cups.",
        "Now repeat with a closed-economy rule (`MPM = 0.05`, total `MPW = 0.30`) and compare how much larger total GDP becomes!",
      ],
      maths:
        "Total spending approaches {{100 * (1 / 0.50) = $200 million}}, and notice the magic stopping condition: the cascade finishes at the exact moment total leakages in the three cups equal the initial $100m injection ({{0.50 * 200 = 100}})!",
    },
    {
      title: "Central Bank vs Finance Minister War-Room Debate",
      emoji: "🏛️",
      materials: [
        "Index cards showing 3 scenarios: (A) Deep Recession at 0.25% interest rate, (B) Demand-Pull Boom at 7% CPI, (C) Oil-Shock Stagflation at 8% CPI and 0.2% growth",
        "Whiteboard or notebook to sketch AD/AS and Money Market diagrams",
      ],
      steps: [
        "Draw one scenario card at random and set a 3-minute timer.",
        "Role 1 (Central Bank Governor) proposes a monetary response and sketches the Money Market (`M_s/M_d`) and AD/AS shifts.",
        "Role 2 (Finance Minister) proposes a fiscal or supply-side package and identifies whether the two policies reinforce or clash with each other.",
        "Both roles finish by listing two Paper 1 Part (b) evaluation points (time lags, crowding out, ZLB, equity, or real-world parallel).",
      ],
      maths:
        "In Scenario A, test the HL gap-closing rule {{ΔG = \"Gap\" / k}}: if the gap is $60bn and `k = 2.5`, why is `$24bn` exact whereas `$60bn` causes overheating?",
    },
  ],
  bonusDiagrams: [
    {
      title: "[HL] Loanable Funds Crowding Out & AD Pullback",
      svg: `<svg viewBox="0 0 560 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side diagram showing government deficit borrowing shifting loanable funds demand right, raising real interest rates, and pulling Aggregate Demand back from AD2 to AD3">
  <rect x="0" y="0" width="560" height="260" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">[HL] Crowding-Out Mechanism: Loanable Funds → AD/AS Pullback</text>
  <!-- Left Panel: Loanable Funds -->
  <text x="145" y="45" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">1. Loanable Funds Market</text>
  <line x1="55" y1="218" x2="245" y2="218" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="55" y1="218" x2="55" y2="58" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="242" y="236" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--ink)">Qty of Loanable Funds</text>
  <text x="20" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)" transform="rotate(-90 20 138)">Real Interest Rate (r)</text>
  <!-- S_LF -->
  <line x1="78" y1="198" x2="225" y2="75" stroke="var(--info)" stroke-width="2.5"/>
  <text x="228" y="78" font-size="11" font-weight="700" fill="var(--info)">S_LF</text>
  <!-- D_LF1 -->
  <line x1="78" y1="88" x2="195" y2="198" stroke="var(--brand)" stroke-width="2.5"/>
  <text x="197" y="206" font-size="10.5" font-weight="700" fill="var(--brand)">D_LF1</text>
  <!-- D_LF2 -->
  <line x1="115" y1="70" x2="232" y2="180" stroke="var(--bad)" stroke-width="2.5"/>
  <text x="234" y="186" font-size="10.5" font-weight="700" fill="var(--bad)">D_LF2</text>
  <!-- Intersections -->
  <circle cx="137" cy="147" r="4" fill="var(--brand)"/>
  <line x1="55" y1="147" x2="137" y2="147" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="48" y="151" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--brand)">r₁</text>
  <circle cx="163" cy="126" r="4" fill="var(--bad)"/>
  <line x1="55" y1="126" x2="163" y2="126" stroke="var(--ink-2)" stroke-width="1.2" stroke-dasharray="4,3"/>
  <text x="48" y="130" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--bad)">r₂</text>
  <!-- Arrow between panels -->
  <line x1="258" y1="138" x2="294" y2="138" stroke="var(--bad)" stroke-width="2.2"/>
  <polygon points="298,138 290,133 290,143" fill="var(--bad)"/>
  <text x="276" y="128" text-anchor="middle" font-size="10" font-weight="700" fill="var(--bad)">r↑ → I↓</text>
  <!-- Right Panel: AD/AS Pullback -->
  <text x="425" y="45" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--brand)">2. AD/AS Partial Pullback</text>
  <line x1="330" y1="218" x2="532" y2="218" stroke="var(--ink)" stroke-width="1.8"/>
  <line x1="330" y1="218" x2="330" y2="58" stroke="var(--ink)" stroke-width="1.8"/>
  <text x="530" y="236" text-anchor="end" font-size="10.5" font-weight="700" fill="var(--ink)">Real GDP (Y)</text>
  <text x="315" y="138" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)" transform="rotate(-90 315 138)">Price Level (PL)</text>
  <!-- SRAS / AS -->
  <line x1="348" y1="196" x2="508" y2="74" stroke="var(--ink)" stroke-width="2.5"/>
  <text x="512" y="76" font-size="11" font-weight="700" fill="var(--ink)">SRAS</text>
  <!-- AD1 -->
  <line x1="348" y1="86" x2="438" y2="200" stroke="var(--ink-2)" stroke-width="2"/>
  <text x="440" y="210" font-size="10" font-weight="700" fill="var(--ink-2)">AD₁</text>
  <!-- AD2 (intended) -->
  <line x1="418" y1="68" x2="512" y2="188" stroke="var(--good)" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="515" y="196" font-size="10" font-weight="700" fill="var(--good)">AD₂</text>
  <!-- AD3 (after crowding out) -->
  <line x1="384" y1="77" x2="476" y2="194" stroke="var(--bad)" stroke-width="2.8"/>
  <text x="479" y="204" font-size="10.5" font-weight="700" fill="var(--bad)">AD₃</text>
  <!-- Arrows showing AD1 -> AD2 -> AD3 -->
  <line x1="382" y1="100" x2="432" y2="100" stroke="var(--good)" stroke-width="1.8"/>
  <polygon points="435,100 428,96 428,104" fill="var(--good)"/>
  <line x1="448" y1="122" x2="424" y2="122" stroke="var(--bad)" stroke-width="1.8"/>
  <polygon points="420,122 427,118 427,126" fill="var(--bad)"/>
</svg>`,
      caption:
        "Government deficit borrowing shifts loanable-funds demand right (`D_LF1 → D_LF2`), raising the real interest rate (`r₁ → r₂`). Lower private investment (`I↓`) pulls Aggregate Demand back from intended `AD₂` to `AD₃`.",
    },
    {
      title: "IB Macroeconomic Policy-Mix Decision Matrix",
      svg: `<svg viewBox="0 0 560 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four quadrant IB Economics policy decision matrix mapping recession, demand-pull boom, stagflation, and slow productivity to optimal policy mixes">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-size="13.5" font-weight="700" fill="var(--ink)">Macroeconomic Policy-Mix Decision Matrix (Paper 1 &amp; HL Paper 3)</text>
  <!-- Box 1: Deep Recession / ZLB -->
  <rect x="18" y="38" width="256" height="94" rx="8" fill="var(--info-soft)" stroke="var(--info)" stroke-width="1.2"/>
  <text x="30" y="58" font-size="11.5" font-weight="700" fill="var(--info)">1. Deep Recession / ZLB (Y ≪ Y_fe)</text>
  <text x="30" y="76" font-size="10.5" fill="var(--ink)">Best lead: Discretionary Fiscal (G↑, capital)</text>
  <text x="30" y="93" font-size="10.5" fill="var(--ink-2)">Support: Low rates / QE to avoid crowding out</text>
  <text x="30" y="110" font-size="10.5" fill="var(--ink-2)">Watch: Lags, MPM leakage, Debt-to-GDP</text>
  <!-- Box 2: Demand-Pull Inflation -->
  <rect x="286" y="38" width="256" height="94" rx="8" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1.2"/>
  <text x="298" y="58" font-size="11.5" font-weight="700" fill="var(--bad)">2. Demand-Pull Boom (Y &gt; Y_fe)</text>
  <text x="298" y="76" font-size="10.5" fill="var(--ink)">Best lead: Contractionary Monetary (i↑)</text>
  <text x="298" y="93" font-size="10.5" fill="var(--ink-2)">Support: Automatic stabilizers + fiscal restraint</text>
  <text x="298" y="110" font-size="10.5" fill="var(--ink-2)">Watch: 12–18m lags, mortgage equity hit</text>
  <!-- Box 3: Cost-Push Stagflation -->
  <rect x="18" y="142" width="256" height="94" rx="8" fill="var(--warn-soft)" stroke="var(--warn)" stroke-width="1.2"/>
  <text x="30" y="162" font-size="11.5" font-weight="700" fill="var(--warn)">3. Cost-Push Stagflation (SRAS Left)</text>
  <text x="30" y="180" font-size="10.5" fill="var(--ink)">Best lead: Supply-Side Energy / Cost Reform</text>
  <text x="30" y="197" font-size="10.5" fill="var(--ink-2)">Support: Anchor monetary expectations</text>
  <text x="30" y="214" font-size="10.5" fill="var(--ink-2)">Watch: Demand-side faces output vs CPI clash</text>
  <!-- Box 4: Low Productivity / High NRU -->
  <rect x="286" y="142" width="256" height="94" rx="8" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.2"/>
  <text x="298" y="162" font-size="11.5" font-weight="700" fill="var(--good)">4. Slow Potential Growth / High NRU</text>
  <text x="298" y="180" font-size="10.5" fill="var(--ink)">Best lead: Blended Supply-Side (LRAS Right)</text>
  <text x="298" y="197" font-size="10.5" fill="var(--ink-2)">Support: Skills/R&amp;D + smart competition</text>
  <text x="298" y="214" font-size="10.5" fill="var(--ink-2)">Watch: 5–15 yr lags, Gini equity &amp; fiscal cost</text>
</svg>`,
      caption:
        "Use this 4-quadrant diagnostic before answering any Paper 1 Part (b) or HL Paper 3 Policy Recommendation: match the exact macroeconomic problem to the lead policy, complementary support, and key trade-offs.",
    },
  ],
  history: {
    title: "From Keynes's 1936 Multiplier to Independent Inflation Targeting",
    story:
      "During the 1930s Great Depression, orthodox treasuries tried to balance budgets by slashing spending as tax revenues collapsed — unintentionally shrinking GDP even further. John Maynard Keynes's 1936 *General Theory* shattered that consensus by popularising the spending multiplier and showing how deficit-financed public works could pull economies out of persistent mass unemployment. Four decades later, the 1970s oil-shock stagflation exposed the opposite danger: governments repeatedly trying to spend past full employment triggered runaway double-digit inflation. Monetarists like Milton Friedman and supply-side reformers shifted the focus toward controlling inflation expectations and expanding long-run `LRAS` — culminating in New Zealand (1990) and the Bank of England (1997) pioneering operationally independent central banks targeting ~2% inflation. Today's consensus blends all three insights: independent central banks manage normal cycles, discretionary fiscal stimulus steps in at the zero lower bound, and strategic supply-side investments build sustainable long-term capacity.",
  },
};
