import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "3b-macro-policies",
  title: "Unit 3B: Demand-Side & Supply-Side Macroeconomic Policies",
  strand: "Unit 3: Macroeconomics",
  icon: "🏦",
  level: "SL",
  summary:
    "Master how central banks steer interest rates and money supply [HL], how governments deploy budgets, automatic stabilizers, and the Keynesian multiplier [HL], and how market-based and interventionist supply-side reforms unlock non-inflationary long-run growth.",
  intro:
    "When an economy slides into recession or overheats with surging inflation, policymakers do not sit on their hands — they reach for two toolkits. **Demand-side policies** (monetary policy run by the central bank, and fiscal policy run by the government) manage Aggregate Demand (`AD`) to smooth the business cycle in the short run. **Supply-side policies** expand the economy's productive capacity (`LRAS`) to deliver sustainable, non-inflationary growth in the long run. At IB Diploma level — and especially in Paper 1 Part (b), Paper 2, and HL Paper 3 — top marks come not just from knowing which curve shifts, but from explaining the exact *transmission mechanism*, calculating multiplier impacts [HL], and evaluating time lags, crowding out, fiscal sustainability, and equity trade-offs with sharp real-world evidence.",
  guide: [
    // =========================================================================
    // SECTION 1: 3.5 MONETARY POLICY, CENTRAL BANKS & MONEY CREATION [HL]
    // =========================================================================
    {
      id: "monetary-policy-banking",
      heading: "3.5 Monetary Policy, Central Banks & Money Creation [HL]",
      level: "SL",
      discovery: {
        problem:
          "Suppose a country's central bank slashes its base interest rate from 5% to 2%. Almost immediately, mortgage rates drop, corporate bond yields fall, and the national currency weakens on foreign exchange markets. Yet during the Eurozone slowdown of 2015–2019, even *zero* and slightly negative interest rates barely sparked a boom in business investment. Pause and ask: (1) through which three components of `AD = C + I + G + (X − M)` does an interest rate cut work, and (2) why can cheap credit still fail to revive spending?",
        idea:
          "Lower interest rates stimulate **consumption (`C`)** by making loans cheaper and saving less attractive, boost **investment (`I`)** by reducing borrowing costs for firms, and lift **net exports (`X − M`)** because hot money leaves the country, depreciating the exchange rate. Yet if firms expect weak future sales and households fear unemployment, **low confidence** turns cheap credit into 'pushing on a string' — and nominal interest rates cannot easily fall far below the **zero lower bound (ZLB)** because people can always hold cash earning 0%.",
      },
      body: `**Monetary policy** is demand-side policy carried out by a country's **central bank** (such as the US Federal Reserve, the Bank of England, the European Central Bank, or the Monetary Authority of Singapore) to manipulate the **money supply** and **interest rates** in order to achieve macroeconomic objectives.

### Role of the Central Bank & Inflation Targeting
Unlike commercial banks (which take deposits and make profit-seeking loans), a central bank serves as:
- **Banker to the government** (managing sovereign accounts and national debt issuance) and **banker to commercial banks** (holding their reserves and acting as **lender of last resort** during financial panics).
- **Sole issuer of legal tender** and regulator of financial stability.
- **Independent conductor of monetary policy**: most modern central banks operate with **operational independence** from elected politicians so they can raise interest rates to fight inflation without fearing election-year backlash.

Most central banks practise **inflation targeting** — announcing an explicit, typically symmetric target such as **2% CPI inflation** (or a narrow band like 1–3%). A credible target anchors household wage demands and firm price-setting expectations, making inflation far cheaper to control.

### Nominal vs Real Interest Rates
Borrowers and savers ultimately care about purchasing power, captured by the **real interest rate**:
- {{r_real ≈ r_nominal - "inflation rate"}}
- If nominal mortgage rates are 4% while inflation is 6%, the real interest rate is roughly −2% — borrowing is effectively subsidised in real terms, whereas savers lose purchasing power.

### Transmission Mechanism: Expansionary vs Contractionary Monetary Policy
- **Expansionary (loose) monetary policy** (used to close a **deflationary / recessionary gap**): the central bank lowers its base interest rate.
  1. **Consumption (\`C↑\`)**: mortgages, car loans, and credit cards become cheaper; the opportunity cost of spending (interest foregone on savings) falls; and rising house/share prices create a positive **wealth effect**.
  2. **Investment (\`I↑\`)**: borrowing costs fall, so more capital projects now earn an expected rate of return exceeding the interest rate.
  3. **Net exports (\`(X − M)↑\`)**: lower domestic interest rates reduce foreign demand for domestic financial assets ("hot money" outflows), causing the currency to **depreciate**; exports become cheaper abroad and imports pricier at home.
  4. Result: **\`AD\` shifts right** (\`AD₁ → AD₂\`), increasing Real GDP and reducing cyclical unemployment (with upward price pressure as the economy approaches \`Y_fe\`).
- **Contractionary (tight) monetary policy** (used to close an **inflationary gap** and cool demand-pull inflation): the central bank raises its base interest rate → \`C↓\`, \`I↓\`, hot money inflows appreciate the currency so \`(X − M)↓\` → **\`AD\` shifts left**, curbing inflation at the cost of slower short-run growth and higher cyclical unemployment.

### [HL] Money Creation by Commercial Banks
Commercial banks operate under **fractional reserve banking**: they hold only a fraction of customer deposits as liquid **reserves** (set by the **minimum reserve ratio**, \`r\`) and lend out the excess. Crucially, **commercial banks create money whenever they make a loan**:
- Suppose Bank A receives a new deposit of $1,000 and the minimum reserve ratio is \`r = 10%\` (\`0.10\`).
- Bank A keeps $100 in reserve and lends $900 to a firm. The firm spends that $900, which is deposited into Bank B.
- Bank B keeps 10% ($90) and lends $810 into Bank C, and so on.
- The theoretical **credit / money multiplier** is {{1/r}}. Here {{1/0.10 = 10}}, so the initial $1,000 reserve injection can expand total deposits up to $10,000 (creating $9,000 of new broad money).
- In reality, money creation is smaller than {{1/r}} because households hold physical cash (cash drain), banks hold voluntary excess reserves during uncertainty, and creditworthy borrowers may not wish to borrow.

### [HL] Money Market Equilibrium & Monetary Policy Tools
In the **HL Money Market diagram**, the **money supply (\`M_s\`)** is drawn **vertical** (perfectly inelastic with respect to the interest rate) because it is fixed by the central bank. **Money demand (\`M_d\`)** slopes downwards: as the interest rate falls, the opportunity cost of holding liquid cash instead of interest-bearing bonds decreases, so households and firms hold a larger quantity of money. Equilibrium occurs where \`M_s = M_d\`, setting the equilibrium interest rate \`i\`.

Central banks shift \`M_s\` using four main instruments:
1. **Open-Market Operations (OMOs)** *(most common tool)*: the central bank **buys** government bonds from commercial banks to inject reserves (\`M_s\` shifts right → \`i↓\`), or **sells** bonds to drain reserves (\`M_s\` shifts left → \`i↑\`).
2. **Minimum Reserve Requirements**: lowering the statutory reserve ratio frees excess reserves for lending (\`M_s\` right → \`i↓\`); raising it restricts lending (\`M_s\` left → \`i↑\`). Rarely changed frequently because sudden shifts can destabilise banks.
3. **Central Bank Minimum Lending Rate (Discount / Bank Rate)**: lowering the rate at which commercial banks borrow emergency reserves from the central bank encourages more lending and lowers retail rates across the economy.
4. **Quantitative Easing (QE)** *(unconventional tool)*: when base rates hit the **zero lower bound (ZLB)**, the central bank electronically creates central-bank reserves to purchase large volumes of *long-term* government bonds and corporate assets from pension funds and banks. Bond prices rise, pushing **long-term yields down**, boosting asset prices (wealth effect) and encouraging banks to rebalance into private lending.

### Evaluating Monetary Policy
| Strengths | Limitations & Constraints |
|---|---|
| **Fast implementation lag**: central bank committees meet every 4–6 weeks and can move rates overnight. | **Transmission time lags**: full impact on \`C\`, \`I\`, and inflation takes **12–18 months** — risk of over-correcting. |
| **Incremental & reversible**: rates can be fine-tuned in small 25 basis-point (0.25%) steps. | **Zero lower bound (ZLB)**: nominal rates cannot easily fall far below 0% in a deep slump. |
| **Political independence**: avoids electoral manipulation and builds anti-inflation credibility. | **Weak business & consumer confidence**: low "animal spirits" mean households and firms may not borrow even at 0% rates. |
| **No direct fiscal debt burden**: unlike fiscal stimulus, cutting rates does not directly add to national debt. | **Ineffective against cost-push inflation (stagflation)**: raising rates fights inflation only by deepening recession; QE can also inflate housing/equity prices, worsening **wealth inequality**. |`,
      diagram: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HL Money Market equilibrium diagram showing expansionary monetary policy shifting vertical money supply rightwards and lowering the equilibrium interest rate">
  <rect x="0" y="0" width="560" height="320" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">[HL] Money Market Equilibrium: Expansionary Monetary Policy</text>
  <!-- Axes -->
  <line x1="85" y1="270" x2="495" y2="270" stroke="var(--ink)" stroke-width="2"/>
  <line x1="85" y1="270" x2="85" y2="48" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="495,270 486,265 486,275" fill="var(--ink)"/>
  <polygon points="85,48 80,57 90,57" fill="var(--ink)"/>
  <text x="485" y="294" text-anchor="end" font-size="12" font-weight="700" fill="var(--ink)">Quantity of Money (Q_m)</text>
  <text x="24" y="155" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" transform="rotate(-90 24 155)">Interest Rate (i)</text>
  <!-- Money Demand curve -->
  <path d="M 135 76 Q 245 190 450 242" fill="none" stroke="var(--info)" stroke-width="3"/>
  <text x="458" y="246" font-size="13" font-weight="700" fill="var(--info)">M_d</text>
  <!-- Initial Money Supply Ms1 -->
  <line x1="225" y1="62" x2="225" y2="270" stroke="var(--brand)" stroke-width="3"/>
  <text x="225" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="var(--brand)">M_s1</text>
  <!-- Shifted Money Supply Ms2 -->
  <line x1="335" y1="62" x2="335" y2="270" stroke="var(--good)" stroke-width="3"/>
  <text x="335" y="54" text-anchor="middle" font-size="13" font-weight="700" fill="var(--good)">M_s2</text>
  <!-- Shift arrow between Ms1 and Ms2 -->
  <line x1="238" y1="92" x2="320" y2="92" stroke="var(--good)" stroke-width="2.2"/>
  <polygon points="324,92 315,87 315,97" fill="var(--good)"/>
  <text x="280" y="84" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">OMO Bond Purchase / QE</text>
  <!-- Equilibrium E1 (x=225, y=156 approx on curve) -->
  <line x1="85" y1="156" x2="225" y2="156" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="225" cy="156" r="5" fill="var(--brand)"/>
  <text x="236" y="150" font-size="12" font-weight="700" fill="var(--ink)">E₁</text>
  <text x="76" y="160" text-anchor="end" font-size="12" font-weight="700" fill="var(--brand)">i₁</text>
  <text x="225" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Q₁</text>
  <!-- Equilibrium E2 (x=335, y=208 approx on curve) -->
  <line x1="85" y1="208" x2="335" y2="208" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="335" cy="208" r="5" fill="var(--good)"/>
  <text x="346" y="202" font-size="12" font-weight="700" fill="var(--ink)">E₂</text>
  <text x="76" y="212" text-anchor="end" font-size="12" font-weight="700" fill="var(--good)">i₂</text>
  <text x="335" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Q₂</text>
  <!-- Interest rate fall arrow -->
  <line x1="56" y1="164" x2="56" y2="200" stroke="var(--good)" stroke-width="2"/>
  <polygon points="56,204 51,196 61,196" fill="var(--good)"/>
  <!-- Caption box inside -->
  <rect x="355" y="106" width="185" height="62" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="365" y="125" font-size="11" font-weight="700" fill="var(--ink)">Transmission to AD:</text>
  <text x="365" y="142" font-size="11" fill="var(--ink-2)">i₁ → i₂ lowers borrowing cost</text>
  <text x="365" y="158" font-size="11" fill="var(--ink-2)">→ C↑, I↑, (X−M)↑ → AD right</text>
</svg>`,
      diagramCaption:
        "In the HL Money Market model, central-bank open-market bond purchases shift the vertical money supply curve rightwards (`M_s1 → M_s2`), creating a temporary excess supply of money at `i₁` and pushing the equilibrium interest rate down to `i₂`.",
      workedExamples: [
        {
          title: "Real Interest Rates & Monetary Stance",
          problem:
            "A central bank holds its nominal policy interest rate at 3.5%, while annual CPI inflation rises from 2.0% to 5.5%. Calculate the new real interest rate and explain how the monetary stance has changed even though the central bank did not cut nominal rates.",
          steps: [
            "Recall the Fisher approximation: Real interest rate ≈ Nominal interest rate − Inflation rate.",
            "Initially: {{3.5% - 2.0% = +1.5%}} (positive real borrowing cost).",
            "After inflation rises: {{3.5% - 5.5% = -2.0%}} (negative real interest rate).",
            "Because the real interest rate fell by 3.5 percentage points into negative territory, monetary policy has become effectively *more expansionary*, encouraging borrowing and risking further demand-pull inflation unless the central bank hikes nominal rates.",
          ],
          answer: "−2.0% (monetary stance has loosened significantly in real terms).",
          yourTurn: {
            question:
              "If a central bank sets its nominal interest rate at 4.5% while CPI inflation is 6.0%, calculate the approximate real interest rate (in %, include the minus sign if negative).",
            answer: { type: "number", value: -1.5, tolerance: 0.05, display: "−1.5%" },
            solution: "Real interest rate ≈ 4.5% − 6.0% = −1.5%.",
          },
        },
        {
          title: "[HL] Commercial Bank Money Creation & Reserve Ratios",
          problem:
            "Suppose a central bank buys $20 million of government bonds from commercial banks in an open-market operation, injecting $20 million of new reserves. If the statutory minimum reserve ratio is 10% and banks lend out all excess reserves with no cash drain, calculate the maximum total expansion in the money supply.",
          steps: [
            "Calculate the theoretical credit (money) multiplier: {{1 / r = 1 / 0.10 = 10}}.",
            "Multiply the initial reserve injection by the money multiplier: {{20 * 10 = 200}}.",
            "Note the HL evaluation caveat: in practice, the actual increase will be smaller than $200 million if households hold cash outside banks or commercial banks retain precautionary excess reserves.",
          ],
          answer: "$200 million maximum expansion in the money supply.",
          yourTurn: {
            question:
              "[HL] A central bank injects $15 million of new reserves via open-market bond purchases when the minimum reserve ratio is 20% (0.20). Assuming full lending and zero cash drain, calculate the maximum possible total increase in the money supply (in $ millions).",
            answer: { type: "number", value: 75, display: "$75 million" },
            solution: "Money multiplier = 1 / 0.20 = 5. Maximum total expansion = $15 million × 5 = $75 million.",
          },
        },
      ],
      keyPoints: [
        "Monetary policy shifts `AD` via three transmission channels: **consumption (`C`)**, **investment (`I`)**, and **net exports (`X − M`)** through exchange-rate movements.",
        "Always check the **real interest rate** (`nominal rate − inflation`) when judging whether monetary policy is truly tight or loose.",
        "[HL] Commercial banks create deposits when they issue loans; central banks shift vertical `M_s` via **OMOs**, **minimum reserve requirements**, the **discount/base rate**, and **Quantitative Easing (QE)**.",
        "Monetary policy's core strengths are **speed, incremental precision, and political independence**; its core limits are **12–18 month transmission lags, the zero lower bound, weak confidence, and inability to fix stagflation**.",
      ],
      whyItWorks:
        "Why does buying government bonds lower interest rates? Bond prices and bond yields move **inversely**: a bond paying a fixed $50 annual coupon yields 5% at a price of $1,000, but only 4% if central-bank buying bids its price up to $1,250. Lower yields across sovereign bonds cascade into lower mortgage, corporate, and interbank lending rates.",
      strategies: [
        "On **Paper 1**, pair an **[HL] Money Market diagram** (`M_s → M_s2`, `i₁ → i₂`) directly alongside an **AD/AS diagram** (`AD₁ → AD₂`) — linking the two earns top AO2/AO4 diagram marks!",
        "When evaluating expansionary monetary policy in a recession, ALWAYS contrast its speed and independence against the **zero lower bound** and **weak business/consumer confidence**.",
        "Never write that QE 'prints physical banknotes for consumers'; state precisely that the central bank creates electronic reserves to buy long-term financial assets from banks/institutions, lowering long-term yields.",
      ],
      thinkDeeper:
        "Singapore's Monetary Authority of Singapore (MAS) does *not* use domestic interest rates as its primary monetary instrument — instead, it manages the trade-weighted **S$NEER exchange rate band**. Why does an ultra-open economy whose imports exceed 100% of GDP rely on exchange-rate monetary policy rather than base interest rates?",
    },

    // =========================================================================
    // SECTION 2: 3.6 FISCAL POLICY, GOVERNMENT BUDGETS & AUTOMATIC STABILIZERS
    // =========================================================================
    {
      id: "fiscal-policy-budgets",
      heading: "3.6 Fiscal Policy, Government Budgets & Automatic Stabilizers",
      level: "SL",
      discovery: {
        problem:
          "During the 2020 global slowdown, even *before* parliaments voted on emergency rescue bills, government tax revenues plunged while welfare outlays jumped sharply. Why did fiscal policy automatically become expansionary without a single new law being passed — and why do economists consider that built-in reflex a major advantage over discretionary spending bills?",
        idea:
          "Those built-in shock absorbers are **automatic stabilizers**: progressive income taxes fall proportionally faster than incomes during a downturn, while unemployment benefits automatically pay out more as joblessness rises. Together they immediately prop up household disposable income and cushion the fall in `AD` with **zero legislative delay**.",
      },
      body: `**Fiscal policy** is the government's use of **taxation (\`T\`)** and **government spending (\`G\`)** to influence Aggregate Demand, macroeconomic stability, long-run growth, and the distribution of income.

### Government Revenues & Expenditure Categories
To write with IB examiner precision, classify both sides of the national budget accurately:
- **Sources of Government Revenue**:
  1. **Direct taxes**: levied on income, profits, and wealth (personal income tax, corporate profit tax, capital gains tax).
  2. **Indirect taxes**: levied on expenditure/goods and services (VAT/GST, fuel/tobacco excise duties, customs tariffs).
  3. **Sale of goods and services & privatisation**: revenue from state-owned enterprises (SOEs — e.g. national utilities, transport) and one-off proceeds from selling state assets.
- **Types of Government Expenditure**:
  1. **Current expenditure**: recurring day-to-day spending on public services — teacher and nurse salaries, hospital supplies, defence operations. Directly enters \`G\` in \`AD\`.
  2. **Capital expenditure**: investment in long-lived physical assets — high-speed rail, schools, hospitals, renewable grids, ports. Directly boosts \`G\` (shifting \`AD\` right *now*) AND expands productive capacity (\`LRAS\` right *later*).
  3. **Transfer payments**: payments made without an exchange of current goods or services — state pensions, unemployment benefits, child allowances. Transfers do **not** directly count in \`G\`, but raise recipients' disposable income, boosting **\`C\`** (especially strongly because low-income households have a high \`MPC\`).

### Budget Balance (Flow) vs National Debt (Stock)
Students routinely confuse deficits and debt — examiners penalise this sharply!
- **Budget Balance (flow per fiscal year)** \`= Government Revenue (T) − Government Expenditure (G)\`:
  - **Budget Surplus** (\`T > G\`): government collects more than it spends, enabling debt repayment.
  - **Budget Deficit** (\`G > T\`): government must borrow the shortfall by issuing sovereign bonds.
  - **Balanced Budget** (\`T = G\`).
- **Government (National) Debt (stock at a point in time)**: the **cumulative sum** of all past annual budget deficits minus surpluses. Economists judge debt sustainability not by its raw dollar size, but by the **Debt-to-GDP ratio**:
  - {{"Debt-to-GDP (%)" = ("National Debt" / "Nominal GDP") * 100}}
  - If nominal GDP grows faster than the interest rate on public debt, a country can maintain a stable or falling Debt-to-GDP ratio even while running modest primary deficits.

### Automatic Stabilizers vs Discretionary Fiscal Policy
- **Automatic stabilizers** are built-in features of the tax and welfare system that counter-cyclically dampen business-cycle swings without new legislation:
  - **Progressive income taxes**: during a boom, rising incomes push workers into higher tax brackets ("fiscal drag"), slowing \`C\` and restraining demand-pull inflation. In a recession, tax burdens fall faster than incomes, cushioning disposable income.
  - **Unemployment benefits**: automatically fall during booms (as workers find jobs) and rise during recessions (supporting baseline household consumption).
- **Discretionary fiscal policy** requires deliberate legislative changes in tax rates or government budgets:
  - **Expansionary fiscal policy** (\`G↑\` and/or \`T↓\`) shifts \`AD\` right to close a **deflationary gap** and reduce cyclical unemployment.
  - **Contractionary fiscal policy** (\`G↓\` and/or \`T↑\`) shifts \`AD\` left to close an **inflationary gap** and reduce demand-pull inflation (at the expense of slower short-run output).

### Evaluating Fiscal Policy
| Strengths | Limitations & Constraints |
|---|---|
| **Powerful in a deep recession / liquidity trap**: direct government spending (\`G↑\`) injects demand even when interest rates are stuck at 0% and private firms refuse to borrow. | **Long recognition, legislative & implementation lags**: parliament must debate budgets and tender infrastructure projects, risking pro-cyclical timing if recovery starts first. |
| **Precisely targetable**: governments can direct transfers to low-income groups (high \`MPC\`) or depressed regions, improving **equity** alongside growth. | **Political asymmetry**: cutting taxes and raising spending win votes, whereas raising taxes or cutting spending during booms is politically toxic. |
| **Dual short- & long-run payoff**: capital spending on education and infrastructure lifts both \`AD\` today and \`LRAS\` tomorrow. | **Rising national debt & opportunity cost**: persistent deficits raise future debt-servicing interest payments, diverting tax revenue away from healthcare or education. |
| **Automatic stabilizers** work instantaneously with zero parliamentary delay. | **Crowding-out risk & weak tax-cut potency**: deficit borrowing can push up interest rates (\`I↓\`), while fearful households may *save* income tax cuts rather than spend them; fiscal policy also struggles against **cost-push inflation**. |`,
      diagram: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Keynesian AD-AS diagram showing discretionary expansionary fiscal policy shifting aggregate demand rightwards to close a deflationary gap">
  <rect x="0" y="0" width="560" height="320" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Expansionary Fiscal Policy Closing a Deflationary Gap (Keynesian AS)</text>
  <!-- Axes -->
  <line x1="80" y1="270" x2="505" y2="270" stroke="var(--ink)" stroke-width="2"/>
  <line x1="80" y1="270" x2="80" y2="46" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="505,270 496,265 496,275" fill="var(--ink)"/>
  <polygon points="80,46 75,55 85,55" fill="var(--ink)"/>
  <text x="498" y="294" text-anchor="end" font-size="12" font-weight="700" fill="var(--ink)">Real GDP (Y)</text>
  <text x="22" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" transform="rotate(-90 22 158)">Average Price Level (PL)</text>
  <!-- Keynesian AS curve -->
  <path d="M 92 222 L 260 222 Q 368 222 390 148 L 390 58" fill="none" stroke="var(--ink)" stroke-width="3"/>
  <text x="400" y="68" font-size="13" font-weight="700" fill="var(--ink)">Keynesian AS</text>
  <!-- Full employment line -->
  <line x1="390" y1="148" x2="390" y2="270" stroke="var(--ink-2)" stroke-width="1.3" stroke-dasharray="4,4"/>
  <text x="390" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Y_fe</text>
  <!-- AD1 (recessionary) -->
  <line x1="130" y1="115" x2="275" y2="256" stroke="var(--bad)" stroke-width="3"/>
  <text x="280" y="256" font-size="13" font-weight="700" fill="var(--bad)">AD₁</text>
  <!-- AD2 (after fiscal stimulus) -->
  <line x1="230" y1="78" x2="386" y2="232" stroke="var(--good)" stroke-width="3"/>
  <text x="392" y="232" font-size="13" font-weight="700" fill="var(--good)">AD₂</text>
  <!-- Shift arrow -->
  <line x1="205" y1="138" x2="276" y2="138" stroke="var(--good)" stroke-width="2.2"/>
  <polygon points="280,138 271,133 271,143" fill="var(--good)"/>
  <text x="242" y="128" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">G↑ or T↓</text>
  <!-- E1 on flat section: AD1 hits y=222 at x=240 -->
  <line x1="240" y1="222" x2="240" y2="270" stroke="var(--bad)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="240" cy="222" r="5" fill="var(--bad)"/>
  <text x="228" y="213" font-size="12" font-weight="700" fill="var(--bad)">E₁</text>
  <text x="240" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--bad)">Y₁</text>
  <text x="72" y="226" text-anchor="end" font-size="12" font-weight="700" fill="var(--bad)">PL₁</text>
  <!-- E2 on intermediate curve: AD2 hits AS near x=352, y=198 -->
  <line x1="80" y1="198" x2="352" y2="198" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="352" y1="198" x2="352" y2="270" stroke="var(--good)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="352" cy="198" r="5" fill="var(--good)"/>
  <text x="362" y="193" font-size="12" font-weight="700" fill="var(--good)">E₂</text>
  <text x="352" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Y₂</text>
  <text x="72" y="202" text-anchor="end" font-size="12" font-weight="700" fill="var(--good)">PL₂</text>
  <!-- Deflationary gap bracket -->
  <line x1="242" y1="305" x2="388" y2="305" stroke="var(--brand)" stroke-width="2"/>
  <text x="315" y="317" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand)">Initial Deflationary Gap (Y_fe − Y₁)</text>
</svg>`,
      diagramCaption:
        "In a deep recession (`Y₁`), substantial spare capacity allows discretionary expansionary fiscal policy (`G↑` or `T↓`) to shift `AD₁ → AD₂`, delivering a large gain in Real GDP (`Y₁ → Y₂`) with only mild upward pressure on the average price level (`PL₁ → PL₂`).",
      workedExamples: [
        {
          title: "Budget Balance, Deficit-to-GDP & National Debt",
          problem:
            "In Year 1, Country X has a nominal GDP of $800 billion, existing national debt of $520 billion, government tax revenue of $260 billion, and total government expenditure of $292 billion. Calculate (a) the budget balance, (b) the budget deficit as a percentage of GDP, and (c) the new Debt-to-GDP ratio at the end of Year 1 (assuming nominal GDP stays $800 billion).",
          steps: [
            "Budget balance `= Revenue − Expenditure = $260bn − $292bn = −$32 billion` (a **budget deficit** of $32 billion).",
            "Budget deficit as % of GDP `= (32 / 800) × 100% = 4.0%`.",
            "New National Debt `= $520bn + $32bn = $552 billion` (the annual flow deficit adds to the cumulative stock of debt).",
            "New Debt-to-GDP ratio `= (552 / 800) × 100% = 69.0%`.",
          ],
          answer: "(a) −$32bn deficit, (b) 4.0% of GDP, (c) 69.0% Debt-to-GDP.",
          yourTurn: {
            question:
              "Country Y collects $420 billion in tax revenue, spends $465 billion, and has a nominal GDP of $900 billion. Calculate Country Y's budget deficit as a percentage of GDP (give a positive percentage number).",
            answer: { type: "number", value: 5, display: "5%" },
            solution: "Budget deficit = $465bn − $420bn = $45bn. Deficit as % of GDP = (45 / 900) × 100% = 5%.",
          },
        },
        {
          title: "Evaluating Spending Composition: Capital vs Transfer Payments",
          problem:
            "During a recession, a finance minister must choose between spending $10 billion on (i) emergency cash transfers to low-income households or (ii) building a new electric rail network. Contrast the short-run and long-run macroeconomic impacts.",
          steps: [
            "**Cash transfers** (transfer payments) have a **very short implementation lag**: funds reach low-income households within weeks, and because they have a high `MPC`, consumption (`C`) rises quickly — cushioning immediate poverty and equity.",
            "**Electric rail** (capital expenditure) faces **long planning and construction lags** (often 2–5 years before full spending flows), so it may arrive too late to stop an acute slump.",
            "However, in the **long run**, electric rail shifts **`LRAS` rightwards** by cutting freight logistics costs and carbon emissions, generating lasting potential growth that pure transfers cannot directly match.",
            "Synthesis: a balanced fiscal package often pairs rapid, temporary transfers for immediate demand relief with shovel-ready capital projects for long-term capacity.",
          ],
          answer:
            "Transfers act fastest and protect equity; capital spending has longer lags but expands both `AD` and `LRAS`.",
        },
      ],
      keyPoints: [
        "Distinguish **current expenditure** (wages/running costs), **capital expenditure** (infrastructure/assets → boosts both `AD` and `LRAS`), and **transfer payments** (welfare/pensions → boost `C`, not `G`).",
        "A **budget deficit** is a yearly *flow* (`G > T`); **national debt** is the accumulated *stock* of past net borrowing, assessed via the **Debt-to-GDP ratio**.",
        "**Automatic stabilizers** (progressive taxes and unemployment benefits) cushion recessions and cool booms without parliamentary delay.",
        "Expansionary fiscal policy shines in a **deep recession / liquidity trap** where monetary policy is constrained, but faces **political lags, debt sustainability risks, and potential crowding out**.",
      ],
      whyItWorks:
        "Why is a **progressive** income tax a stronger automatic stabilizer than a flat (proportional) tax? When incomes boom by 10%, progressive brackets push taxpayers into higher marginal rates, so tax receipts jump by *more* than 10%, automatically siphoning off excess spending power. Conversely, when incomes drop in a recession, taxpayers drop into lower brackets, so their after-tax income falls by *less* than their gross income.",
      strategies: [
        "In **Paper 1** essays on fiscal policy, ALWAYS separate **automatic stabilizers** from **discretionary fiscal policy** — examiners reward this distinction immediately.",
        "When discussing government spending, specify *what kind* of spending (`capital` vs `current` vs `transfers`) so you can naturally evaluate short-run `AD` vs long-run `LRAS` and equity impacts.",
        "Never argue that 'a budget deficit is always bad': evaluate whether borrowing funds productive capital investment, whether the economy has spare capacity, and whether the Debt-to-GDP ratio is sustainable.",
      ],
      thinkDeeper:
        "If a government raises taxes and slashes spending sharply during a recession in order to balance the budget ('austerity'), why can the Debt-to-GDP ratio sometimes *increase* instead of falling?",
    },

    // =========================================================================
    // SECTION 3: 3.6 THE KEYNESIAN MULTIPLIER & CROWDING-OUT EFFECT [HL]
    // =========================================================================
    {
      id: "multiplier-crowding-out-hl",
      heading: "3.6 The Keynesian Multiplier & Crowding-Out Effect",
      level: "HL",
      discovery: {
        problem:
          "Suppose the government injects **$10 billion** into building green-energy infrastructure (`ΔG = +$10bn`). In this economy, for every extra $1 of income earned, people save 10¢ (`MPS = 0.10`), pay 20¢ in tax (`MPT = 0.20`), spend 10¢ on imports (`MPM = 0.10`), and spend the remaining 60¢ on domestic goods (`MPC = 0.60`). In Round 1, GDP rises by $10bn. In Round 2, workers spend $6bn domestically. In Round 3, shopkeepers spend 60% of $6bn = $3.6bn. If this infinite ripple continues, what is the **exact total rise in Real GDP**?",
        idea:
          "Summing the geometric series {{10 * (1 + 0.6 + 0.6^2 + 0.6^3 + …)}} gives {{10 * (1 / (1 - 0.6)) = 10 * 2.5 = $25 billion}}! Notice that {{1 - MPC = MPS + MPT + MPM = 0.10 + 0.20 + 0.10 = 0.40}}, so the **Keynesian multiplier** is {{k = 1 / 0.40 = 2.5}}. Every $1 of initial injection creates $2.50 of final Real GDP — until leakages completely absorb the original $10bn injection (`0.40 × $25bn = $10bn`)!",
      },
      body: `At Higher Level, you must model *how much* an initial injection (\`ΔG\`, \`ΔI\`, or \`ΔX\`) magnifies into a final shift in Real GDP, and evaluate why borrowing to finance fiscal stimulus can trigger **crowding out**.

### Marginal Propensities & Leakages
Whenever national income increases by \`ΔY\`, every extra dollar must go into exactly one of four destinations:
1. **Marginal Propensity to Consume domestically (\`MPC\`)** \`= ΔC_d / ΔY\` — stays inside the domestic circular flow!
2. **Marginal Propensity to Save (\`MPS\`)** \`= ΔS / ΔY\` — leakage into financial institutions.
3. **Marginal Propensity to Tax (\`MPT\`)** \`= ΔT / ΔY\` — leakage to the government.
4. **Marginal Propensity to Import (\`MPM\`)** \`= ΔM / ΔY\` — leakage to foreign producers.

Because all four exhaust 100% of any extra dollar:
- {{MPC + MPS + MPT + MPM = 1}}
- The **Marginal Propensity to Withdraw / Leak (\`MPW\`)** is:
  - {{MPW = MPS + MPT + MPM = 1 - MPC}}

### The Keynesian Spending Multiplier (\`k\`)
An initial autonomous injection (\`ΔG\`, \`ΔI\`, or \`ΔX\`) triggers successive rounds of induced domestic consumption:
- Round 1: \`ΔG\`
- Round 2: \`MPC × ΔG\`
- Round 3: \`MPC² × ΔG\` … and so on.

Using the sum of an infinite geometric series {{a / (1 - r)}} with \`r = MPC\`:
- {{k = 1 / (1 - MPC) = 1 / (MPS + MPT + MPM)}}
- {{Δ"Real GDP" = k * Δ"Injection"}}

**Crucial IB Exam Insight — Closing an Output Gap:**
- If an economy has a **deflationary gap** of \`Gap = Y_fe − Y_actual\`, the government does *not* need to spend the entire gap! It only needs an initial injection of:
  - {{ΔG = "Gap" / k}}
- **Open-economy contrast**: small, highly open economies (like Singapore or Ireland) have a large \`MPM\`, which increases the denominator \`MPS + MPT + MPM\` and produces a **smaller multiplier \`k\`** than large, relatively closed economies — meaning much of a fiscal stimulus leaks abroad into import demand.
- **Price-level caveat**: the full real multiplier \`k × ΔG\` applies only along the **horizontal (spare capacity)** range of the Keynesian AS curve. Once the economy enters the upward-sloping intermediate range, higher average price levels erode part of the real GDP expansion; at vertical \`Y_fe\`, the real multiplier is effectively zero (pure inflation).

### The Crowding-Out Effect: Monetarist vs Keynesian Regimes
**Crowding out** occurs when expansionary fiscal policy financed by government borrowing reduces private-sector spending (\`I\` and interest-sensitive \`C\`):
1. The government runs a budget deficit (\`G > T\`) and issues bonds to borrow in the **loanable funds market**.
2. Increased demand for loanable funds drives up the **real interest rate** (\`i₁ → i₂\`).
3. Higher borrowing costs make private investment projects less profitable (\`I↓\`) and discourage household borrowing (\`C↓\`).
4. As a result, although \`G↑\` initially pushes \`AD₁ → AD₂\`, the fall in private \`I\` and \`C\` pulls Aggregate Demand partly (or fully) back to \`AD₃\`.

| Economic Regime | Severity of Crowding Out | Policy Verdict |
|---|---|---|
| **Monetarist / Near Full Employment (\`Y ≈ Y_p\`)** | **High / Complete crowding out**: savings are already fully utilised, so extra public borrowing sharply spikes interest rates and simply displaces private investment. | Deficit fiscal stimulus mainly causes inflation and a smaller private sector — **supply-side reforms** are preferred. |
| **Keynesian / Deep Recession (Spare Capacity)** | **Low / Zero crowding out (possible 'crowding in')**: private investment is depressed and abundant idle savings sit in banks; government borrowing barely moves interest rates, while rising sales revive business confidence and actually **crowd in** new private investment. | Discretionary fiscal stimulus works powerfully with a strong real multiplier. |`,
      diagram: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Keynesian multiplier spending cascade diagram showing geometric rounds of spending with MPS, MPT, and MPM leakages and crowding-out pullback">
  <rect x="0" y="0" width="560" height="320" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">[HL] Keynesian Multiplier Cascade (MPC = 0.6, MPW = 0.4 → k = 2.5)</text>
  <!-- Baseline -->
  <line x1="48" y1="224" x2="365" y2="224" stroke="var(--ink)" stroke-width="2"/>
  <text x="206" y="244" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--ink)">Successive Rounds of Induced Spending</text>
  <!-- Round 1 bar: ΔG = 10 -> height 140 -->
  <rect x="64" y="84" width="48" height="140" rx="5" fill="var(--brand)"/>
  <text x="88" y="76" text-anchor="middle" font-size="11" font-weight="700" fill="var(--brand)">$10.0bn</text>
  <text x="88" y="156" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--brand-ink)">Round 1</text>
  <text x="88" y="170" text-anchor="middle" font-size="9.5" fill="var(--brand-ink)">(ΔG)</text>
  <!-- Round 2 bar: 6.0 -> height 84 -->
  <rect x="132" y="140" width="48" height="84" rx="5" fill="var(--accent)"/>
  <text x="156" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">$6.0bn</text>
  <text x="156" y="184" text-anchor="middle" font-size="10" font-weight="700" fill="var(--surface)">Round 2</text>
  <!-- Round 3 bar: 3.6 -> height 50 -->
  <rect x="200" y="174" width="48" height="50" rx="5" fill="var(--accent)" opacity="0.82"/>
  <text x="224" y="166" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">$3.6bn</text>
  <text x="224" y="203" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--surface)">Round 3</text>
  <!-- Round 4 bar: 2.16 -> height 30 -->
  <rect x="268" y="194" width="48" height="30" rx="5" fill="var(--accent)" opacity="0.65"/>
  <text x="292" y="186" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">$2.16bn</text>
  <text x="292" y="213" text-anchor="middle" font-size="9" font-weight="700" fill="var(--ink)">Rd 4</text>
  <!-- Dots -->
  <text x="340" y="214" text-anchor="middle" font-size="16" font-weight="700" fill="var(--ink-2)">…</text>
  <!-- Leakage arrows downwards -->
  <line x1="118" y1="224" x2="118" y2="262" stroke="var(--bad)" stroke-width="1.8"/>
  <polygon points="118,266 113,258 123,258" fill="var(--bad)"/>
  <line x1="186" y1="224" x2="186" y2="262" stroke="var(--bad)" stroke-width="1.8"/>
  <polygon points="186,266 181,258 191,258" fill="var(--bad)"/>
  <line x1="254" y1="224" x2="254" y2="262" stroke="var(--bad)" stroke-width="1.8"/>
  <polygon points="254,266 249,258 259,258" fill="var(--bad)"/>
  <rect x="62" y="268" width="254" height="36" rx="7" fill="var(--bad-soft)" stroke="var(--bad)" stroke-width="1"/>
  <text x="189" y="284" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--bad)">Leakages each round: MPS + MPT + MPM = 40%</text>
  <text x="189" y="298" text-anchor="middle" font-size="10" fill="var(--ink-2)">Cascade stops once total leakages = $10bn injection</text>
  <!-- Right panel: Total impact + Crowding Out -->
  <rect x="382" y="54" width="160" height="114" rx="10" fill="var(--good-soft)" stroke="var(--good)" stroke-width="1.3"/>
  <text x="462" y="75" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--good)">Total Real GDP Gain</text>
  <text x="462" y="99" text-anchor="middle" font-size="13" font-weight="700" fill="var(--ink)">k = 1 / 0.40 = 2.5</text>
  <text x="462" y="122" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">ΔY = 2.5 × $10bn</text>
  <text x="462" y="146" text-anchor="middle" font-size="16" font-weight="800" fill="var(--good)">= $25.0 billion</text>
  <rect x="382" y="182" width="160" height="122" rx="10" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1.3"/>
  <text x="462" y="203" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--bad)">Crowding-Out Caveat</text>
  <text x="462" y="223" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">Deficit borrowing → i↑</text>
  <text x="462" y="240" text-anchor="middle" font-size="10.5" fill="var(--ink-2)">→ private I↓ &amp; C↓</text>
  <text x="462" y="259" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">AD₁ → AD₂ → AD₃</text>
  <text x="462" y="278" text-anchor="middle" font-size="10" fill="var(--ink-2)">Strong near Y_fe;</text>
  <text x="462" y="292" text-anchor="middle" font-size="10" fill="var(--ink-2)">weak in deep slump</text>
</svg>`,
      diagramCaption:
        "Each round of domestic re-spending shrinks by the fraction `MPC` because 40% leaks out via savings (`MPS`), taxes (`MPT`), and imports (`MPM`). In the absence of crowding out or capacity constraints, the infinite sum converges to `k × ΔG = 2.5 × $10bn = $25bn`.",
      workedExamples: [
        {
          title: "[HL] Computing the Multiplier from Marginal Leakages",
          problem:
            "In Country Z, households save 15% of any extra income (`MPS = 0.15`), pay 25% in taxes (`MPT = 0.25`), and spend 10% on imports (`MPM = 0.10`). If private firms raise autonomous investment by $18 billion, calculate (a) the `MPC`, (b) the Keynesian multiplier `k`, and (c) the maximum final increase in Real GDP.",
          steps: [
            "Sum the three marginal leakages: {{MPW = MPS + MPT + MPM = 0.15 + 0.25 + 0.10 = 0.50}}.",
            "Find `MPC`: {{MPC = 1 - MPW = 1 - 0.50 = 0.50}}.",
            "Compute the multiplier: {{k = 1 / MPW = 1 / 0.50 = 2}}.",
            "Multiply by the initial injection: {{Δ\"Real GDP\" = 2 * 18 = $36 billion}}.",
          ],
          answer: "(a) `MPC = 0.50`, (b) `k = 2`, (c) `ΔReal GDP = $36 billion`.",
          yourTurn: {
            question:
              "[HL] An economy has `MPS = 0.15`, `MPT = 0.20`, and `MPM = 0.15`. If government spending rises by $12 billion, calculate the maximum resulting increase in Real GDP (in $ billions).",
            answer: { type: "number", value: 24, display: "$24 billion" },
            solution: "MPW = 0.15 + 0.20 + 0.15 = 0.50 → k = 1 / 0.50 = 2. ΔReal GDP = 2 × $12bn = $24 billion.",
          },
        },
        {
          title: "[HL] Closing a Deflationary Gap Without Overshooting",
          problem:
            "Country W is in recession with actual Real GDP of $480 billion and full-employment Real GDP of $560 billion. Its `MPC` is `0.75`. Calculate the exact initial increase in government spending (`ΔG`) required to close the deflationary gap without causing demand-pull inflation.",
          steps: [
            "Measure the deflationary gap: {{560 - 480 = $80 billion}}.",
            "Compute the Keynesian multiplier: {{k = 1 / (1 - 0.75) = 1 / 0.25 = 4}}.",
            "Solve `ΔReal GDP = k × ΔG` for `ΔG`: {{ΔG = 80 / 4 = $20 billion}}.",
            "Exam sanity check: spending $80bn directly would overshoot `Y_fe` by $240bn and ignite severe demand-pull inflation!",
          ],
          answer: "An initial injection of `ΔG = $20 billion` closes the $80 billion deflationary gap.",
          yourTurn: {
            question:
              "[HL] An economy has a deflationary gap of $60 billion, with `MPS = 0.15`, `MPT = 0.10`, and `MPM = 0.15`. Calculate the required initial increase in government spending `ΔG` (in $ billions) to close the gap.",
            answer: { type: "number", value: 24, display: "$24 billion" },
            solution: "MPW = 0.15 + 0.10 + 0.15 = 0.40 → k = 1 / 0.40 = 2.5. Required ΔG = 60 / 2.5 = $24 billion.",
          },
        },
      ],
      keyPoints: [
        "Always check the identity: {{MPC + MPS + MPT + MPM = 1}}, where `MPC` is domestic consumption out of extra income.",
        "The Keynesian spending multiplier is {{k = 1 / (1 - MPC) = 1 / (MPS + MPT + MPM)}}, and {{Δ\"Real GDP\" = k * Δ\"Injection\"}}.",
        "Higher leakages (`MPS`, `MPT`, or `MPM` in open economies) shrink `k`; lower leakages enlarge `k`.",
        "To close a deflationary gap cleanly, inject {{ΔG = \"Gap\" / k}} — never the full gap!",
        "**Crowding out** occurs when deficit borrowing raises interest rates and displaces private investment (`I↓`); it is severe near full employment (Monetarist view) but weak or reversed ('crowding in') in a deep Keynesian recession.",
      ],
      whyItWorks:
        "Why does the multiplier converge to {{1 / MPW}} instead of growing forever? Because at equilibrium in the circular flow, total new leakages must equal the initial new injection (`ΔS + ΔT + ΔM = ΔG`). Since each dollar of new GDP generates `MPW` dollars of leakages, total leakages equal `MPW × ΔY`. Setting `MPW × ΔY = ΔG` immediately gives `ΔY = ΔG / MPW`!",
      strategies: [
        "On **HL Paper 3**, read carefully whether the table gives you **`MPC`** or the three leakages **`MPS`, `MPT`, `MPM`** — mixing up `1 / MPC` (WRONG!) with `1 / (1 − MPC)` (RIGHT!) is the #1 Paper 3 multiplier blunder.",
        "When asked why real GDP rose by *less* than `k × ΔG`, list three crisp causes: (1) upward-sloping AS causing inflation to absorb part of nominal AD growth, (2) **crowding out** via higher interest rates, and (3) **time lags** plus rising `MPS`/`MPM` during recovery.",
        "Always pair your crowding-out explanation with a two-step AD shift (`AD₁ → AD₂` then partial pullback `→ AD₃`) and evaluate whether the economy has spare capacity.",
      ],
      thinkDeeper:
        "Why does a $10 billion increase in government infrastructure spending (`ΔG`) typically boost Real GDP by *more* than a $10 billion lump-sum income tax cut (`ΔT`), even when `MPC` is identical in both cases?",
    },

    // =========================================================================
    // SECTION 4: 3.7 MARKET-BASED & INTERVENTIONIST SUPPLY-SIDE POLICIES
    // =========================================================================
    {
      id: "supply-side-policies",
      heading: "3.7 Market-Based & Interventionist Supply-Side Policies",
      level: "SL",
      discovery: {
        problem:
          "Demand-side policies face a frustrating ceiling: once an economy approaches full employment (`Y_fe`), further boosting `AD` mostly drives up inflation rather than real output. How can a government raise long-term Real GDP *while simultaneously lowering* average price levels and reducing the natural rate of unemployment — and why do market-based and interventionist economists fiercely disagree on the best route?",
        idea:
          "The answer is **supply-side policies**, which expand the **quantity** and **quality** of factors of production and improve market efficiency, shifting **`LRAS` rightwards** (`Y_p1 → Y_p2`). **Market-based** economists favour deregulation, privatisation, labour-market flexibility, and tax cuts to unleash private incentives; **interventionist** economists favour active public investment in education, healthcare, R&D, and infrastructure to overcome market failures.",
      },
      body: `**Supply-side policies** are long-term policies aimed at increasing an economy's **productive capacity** (potential output) by shifting **LRAS** (Monetarist) and the vertical/intermediate sections of the **Keynesian AS** curve rightwards. Their core goals are **non-inflationary long-term economic growth**, a lower **natural rate of unemployment (\`NRU\`)**, stronger **international export competitiveness**, and reduced long-run inflationary pressures.

### Market-Based Supply-Side Policies
Rooted in Monetarist/New Classical thought, market-based policies reduce government intervention so competitive markets and price incentives allocate resources more efficiently:
1. **Encouraging Competition**:
   - **Deregulation**: removing unnecessary bureaucratic rules, licensing barriers, or red tape so new firms enter markets and cut compliance costs.
   - **Privatisation**: transferring state-owned enterprises (SOEs) to private ownership so profit motives improve productive efficiency and innovation.
   - **Trade liberalisation**: lowering tariffs, quotas, and non-tariff barriers exposes domestic producers to global competition and lowers imported input costs.
   - **Anti-monopoly / competition regulation**: prohibiting cartels and blocking anti-competitive mergers to keep markets contestable.
2. **Labour Market Reforms**:
   - **Reducing trade-union power**: makes wages more flexible and reduces strike disruptions.
   - **Reducing unemployment benefits**: increases the financial incentive for unemployed workers to accept jobs faster (lowering frictional/structural unemployment).
   - **Abolishing or lowering minimum wages**: lowers labour costs for firms, encouraging hiring of lower-skilled workers (especially in Monetarist labour-market analysis).
3. **Incentive-Related Policies**:
   - **Lowering personal income taxes**: raises post-tax take-home pay, strengthening the incentive to join the labour force, work extra hours, or upskill.
   - **Lowering corporate profit & capital gains taxes**: leaves firms with greater retained earnings and higher post-tax returns on investment (\`I↑\`) and entrepreneurship.

### Interventionist Supply-Side Policies
Grounded in recognising market failures (positive externalities in education/R&D, public-good infrastructure), interventionist policies use active government spending to raise factor quality and quantity:
1. **Investment in Human Capital**: expanding public **education**, **vocational/STEM training** (retraining displaced workers to cut structural unemployment), and **healthcare** (healthier, more productive workforce with lower absenteeism).
2. **Investment in New Technology**: **R&D subsidies**, innovation tax credits, and university-industry research grants that accelerate technological breakthroughs.
3. **Investment in Infrastructure**: building high-speed rail, modern ports, clean electricity grids, and nationwide broadband — cutting transport/logistics costs across *every* firm in the economy.
4. **Industrial Policies**: targeted support, low-interest credit, or infant-industry assistance for **small and medium enterprises (SMEs)** and strategic high-value industries.

### The Crucial Dual Effect: AD *and* LRAS
Most supply-side policies do **not** only shift \`LRAS\`!
- **Interventionist spending** (building ports, schools, R&D labs) increases \`G\`, shifting **\`AD\` right immediately** in the short run — creating jobs today (or inflation if near \`Y_fe\`) — before shifting **\`LRAS\` right in the long run**.
- **Market-based tax cuts** raise disposable income (\`C↑\`) and retained profits (\`I↑\`), shifting **\`AD\` right immediately** while attempting to expand \`LRAS\` over time.

### Evaluating Supply-Side Policies
| Dimension | Market-Based Supply-Side Policies | Interventionist Supply-Side Policies |
|---|---|---|
| **Fiscal cost** | Deregulation/labour reforms cost little (privatisation raises one-off cash), though tax cuts reduce revenue initially. | **High fiscal cost & opportunity cost** — strains the government budget and may raise national debt. |
| **Time lags** | Medium-to-long lags before firms invest and productivity climbs. | **Very long time lags** (5–15 years for education reforms or rail networks to boost \`LRAS\`). |
| **Equity & workers** | **Serious equity risks**: cutting minimum wages, welfare, unions, and progressive taxes tends to widen the Gini coefficient and increase working poverty. | Generally **pro-equity**: public education, healthcare, and retraining lift human capital and earnings of lower-income groups. |
| **Sustainability & market failure** | **Environmental & safety risks**: weak regulation can increase pollution or financial instability; privatising a natural monopoly without regulation creates private monopoly abuse. | **Government failure risk**: policymakers may misallocate subsidies ('picking losers') due to imperfect information or lobbying. |
| **Recession effectiveness** | **Weak in a deep slump**: expanding \`LRAS\` when \`AD\` sits on the flat Keynesian section does not raise actual Real GDP today. | **Better short-run support** because capital spending (\`G↑\`) also boosts \`AD\` immediately! |`,
      diagram: `<svg viewBox="0 0 560 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Monetarist AD-LRAS diagram showing supply-side policies shifting LRAS rightwards for non-inflationary economic growth">
  <rect x="0" y="0" width="560" height="320" rx="12" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/>
  <text x="280" y="26" text-anchor="middle" font-size="14" font-weight="700" fill="var(--ink)">Supply-Side Policies: Rightward Shift of LRAS (Non-Inflationary Growth)</text>
  <!-- Axes -->
  <line x1="80" y1="270" x2="505" y2="270" stroke="var(--ink)" stroke-width="2"/>
  <line x1="80" y1="270" x2="80" y2="48" stroke="var(--ink)" stroke-width="2"/>
  <polygon points="505,270 496,265 496,275" fill="var(--ink)"/>
  <polygon points="80,48 75,57 85,57" fill="var(--ink)"/>
  <text x="498" y="294" text-anchor="end" font-size="12" font-weight="700" fill="var(--ink)">Real GDP (Y)</text>
  <text x="22" y="158" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)" transform="rotate(-90 22 158)">Average Price Level (PL)</text>
  <!-- LRAS1 -->
  <line x1="220" y1="58" x2="220" y2="270" stroke="var(--brand)" stroke-width="3"/>
  <text x="220" y="51" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--brand)">LRAS₁</text>
  <text x="220" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--brand)">Y_p1</text>
  <!-- LRAS2 -->
  <line x1="345" y1="58" x2="345" y2="270" stroke="var(--good)" stroke-width="3"/>
  <text x="345" y="51" text-anchor="middle" font-size="12.5" font-weight="700" fill="var(--good)">LRAS₂</text>
  <text x="345" y="287" text-anchor="middle" font-size="12" font-weight="700" fill="var(--good)">Y_p2</text>
  <!-- Shift arrow -->
  <line x1="234" y1="86" x2="330" y2="86" stroke="var(--good)" stroke-width="2.2"/>
  <polygon points="334,86 325,81 325,91" fill="var(--good)"/>
  <text x="282" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="var(--good)">Supply-Side Reform</text>
  <!-- Downward AD curve -->
  <line x1="125" y1="90" x2="435" y2="252" stroke="var(--info)" stroke-width="3"/>
  <text x="442" y="255" font-size="13" font-weight="700" fill="var(--info)">AD</text>
  <!-- Intersection E1 on AD at x=220: y = 90 + (220-125)/(435-125)*(252-90) = 90 + 95/310*162 = 139.6 -->
  <line x1="80" y1="140" x2="220" y2="140" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="220" cy="140" r="5" fill="var(--brand)"/>
  <text x="206" y="131" font-size="12" font-weight="700" fill="var(--brand)">E₁</text>
  <text x="72" y="144" text-anchor="end" font-size="12" font-weight="700" fill="var(--brand)">PL₁</text>
  <!-- Intersection E2 on AD at x=345: y = 90 + 220/310*162 = 205 -->
  <line x1="80" y1="205" x2="345" y2="205" stroke="var(--ink-2)" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="345" cy="205" r="5" fill="var(--good)"/>
  <text x="357" y="199" font-size="12" font-weight="700" fill="var(--good)">E₂</text>
  <text x="72" y="209" text-anchor="end" font-size="12" font-weight="700" fill="var(--good)">PL₂</text>
  <!-- Price level fall arrow -->
  <line x1="54" y1="148" x2="54" y2="196" stroke="var(--good)" stroke-width="2"/>
  <polygon points="54,200 49,192 59,192" fill="var(--good)"/>
  <!-- Output rise arrow -->
  <line x1="230" y1="298" x2="334" y2="298" stroke="var(--good)" stroke-width="2"/>
  <polygon points="338,298 330,293 330,303" fill="var(--good)"/>
  <!-- Summary callout -->
  <rect x="372" y="96" width="168" height="74" rx="8" fill="var(--surface-2)" stroke="var(--line)" stroke-width="1"/>
  <text x="382" y="114" font-size="11" font-weight="700" fill="var(--ink)">Long-Run Payoff:</text>
  <text x="382" y="131" font-size="10.5" fill="var(--good)">✓ Potential output Y_p1 → Y_p2</text>
  <text x="382" y="147" font-size="10.5" fill="var(--good)">✓ Lower inflation PL₁ → PL₂</text>
  <text x="382" y="163" font-size="10.5" fill="var(--ink-2)">✗ Long time lags (5–15 yrs)</text>
</svg>`,
      diagramCaption:
        "Effective market-based or interventionist supply-side policies increase factor quantity/quality or efficiency, shifting `LRAS₁ → LRAS₂`. Potential output rises from `Y_p1` to `Y_p2` while downward pressure on average prices (`PL₁ → PL₂`) eases long-run inflation.",
      workedExamples: [
        {
          title: "Classifying Market-Based vs Interventionist Policies",
          problem:
            "A government announces four measures: (1) funding national AI & semiconductor vocational training, (2) selling the state airline to private investors, (3) cutting the corporate profit tax rate from 25% to 18%, and (4) subsidising clean-energy R&D grants. Classify each policy and note one potential trade-off.",
          steps: [
            "(1) **Vocational training** → **Interventionist** (human capital): boosts productivity & reduces structural unemployment, but carries fiscal costs and time lags.",
            "(2) **Privatising the state airline** → **Market-based** (encouraging competition): strengthens profit/cost discipline, but without competition oversight could turn into a private monopoly.",
            "(3) **Corporate tax cut** → **Market-based** (incentive-related): increases retained profits for investment (`AD` & `LRAS` right), but lowers short-run tax revenue and may widen wealth inequality if profits go to share buybacks.",
            "(4) **Clean-energy R&D grants** → **Interventionist** (new technology): corrects positive externalities of innovation, but risks government failure if bureaucrats pick unsuccessful technologies.",
          ],
          answer: "(1) & (4) Interventionist; (2) & (3) Market-based.",
          yourTurn: {
            question:
              "Is removing licensing restrictions and red tape on new telecommunications firms a 'market-based' or 'interventionist' supply-side policy? Type one phrase.",
            answer: {
              type: "text",
              accept: ["market-based", "market based", "market-based supply-side policy", "market based supply side policy"],
              display: "market-based",
            },
            solution:
              "Removing licensing rules and red tape is deregulation — a classic market-based supply-side policy aimed at encouraging competition.",
          },
        },
        {
          title: "Quantifying Potential Output Growth & Dual AD–LRAS Effects",
          problem:
            "Following a decade of port modernisation and STEM education reform, an economy's potential Real GDP (`Y_p`) rises from $500 billion to $540 billion. Calculate the percentage increase in potential output, and explain why inflation may temporarily *rise* during the construction phase before *falling* once completed.",
          steps: [
            "Percentage growth in potential GDP `= [(540 − 500) / 500] × 100% = (40 / 500) × 100% = 8%`.",
            "**Short run (construction phase)**: public spending on ports and schools raises `G`, shifting `AD` right before new capacity comes online. If the economy is already near `Y_p1`, this creates temporary demand-pull inflation.",
            "**Long run (completion phase)**: lower shipping costs and higher worker productivity shift `LRAS₁ → LRAS₂` by 8%, easing cost pressures (`PL` falls or stabilises) and allowing higher non-inflationary growth.",
          ],
          answer: "8% increase in potential Real GDP; short-run AD boost precedes long-run LRAS shift.",
          yourTurn: {
            question:
              "Long-term infrastructure and training reforms expand a country's potential Real GDP from $600 billion to $654 billion. Calculate the percentage increase in potential output (in %).",
            answer: { type: "number", value: 9, display: "9%" },
            solution: "[(654 − 600) / 600] × 100% = (54 / 600) × 100% = 9%.",
          },
        },
      ],
      keyPoints: [
        "Supply-side policies shift **`LRAS` / Keynesian `AS` rightwards**, unlocking non-inflationary long-run economic growth and a lower natural rate of unemployment.",
        "**Market-based policies** rely on competition (deregulation, privatisation, trade liberalisation), flexible labour markets, and lower direct taxes — low upfront spending but significant **equity and environmental risks**.",
        "**Interventionist policies** invest directly in **human capital** (education, healthcare), **technology (R&D)**, **infrastructure**, and **industrial support** — pro-equity and pro-AD in the short run, but costly with **long time lags**.",
        "Always analyse the **dual effect**: interventionist spending (`G↑`) and tax cuts (`T↓`) shift **`AD` immediately** long before `LRAS` finishes shifting.",
      ],
      whyItWorks:
        "Why can supply-side reforms lower the **natural rate of unemployment (`NRU`)** when demand-side stimulus cannot? Demand-side stimulus only cures *cyclical* (demand-deficient) unemployment; pushing `AD` beyond `Y_fe` merely sparks inflation. Retraining schemes, job-matching services, and flexible labour markets directly reduce **structural** and **frictional** unemployment, shifting the vertical `LRAS` (and `LRPC`) to a higher sustainable output level.",
      strategies: [
        "In **Paper 1 Part (b)** essays comparing market-based vs interventionist policies, build your evaluation around **four crisp clashes**: (1) fiscal budget cost, (2) equity / income distribution, (3) time lags & short-run AD impact, and (4) market failure vs government failure.",
        "Always check the **state of the business cycle**: in a deep Keynesian recession, pure market-based supply-side reform cannot cure cyclical unemployment on its own — it must be paired with expansionary demand-side policy!",
        "Bring concrete real-world examples (e.g. **Singapore's SkillsFuture**, **Germany's Hartz labour reforms**, or **UK 1980s privatisations**) to unlock Level 4 (13–15 marks).",
      ],
      thinkDeeper:
        "In practice, most successful economies combine market-based and interventionist supply-side policies — for instance, Denmark's 'flexicurity' model pairs easy hiring and firing (market-based flexibility) with generous unemployment insurance and active state retraining (interventionist human capital). Why might combining the two outperform relying strictly on either approach alone?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "Monetary Policy",
        back: "Demand-side policy conducted by a central bank using interest rates and the money supply to influence Aggregate Demand and achieve macroeconomic goals such as low, stable inflation.",
        level: "SL",
      },
      {
        front: "Inflation Targeting",
        back: "A monetary framework where an independent central bank publicly commits to keeping CPI inflation near a specific rate (commonly ~2%) to anchor household and firm expectations.",
        level: "SL",
      },
      {
        front: "Real Interest Rate",
        back: "The nominal interest rate adjusted for inflation: approximately `nominal interest rate − inflation rate`. It reflects the true purchasing-power cost of borrowing.",
        level: "SL",
      },
      {
        front: "Monetary Transmission Mechanism (3 AD Channels)",
        back: "Lower interest rates boost Consumption (`C↑` via cheaper credit & wealth effects), Investment (`I↑` via lower borrowing costs), and Net Exports (`(X − M)↑` via hot-money outflows depreciating the currency).",
        level: "SL",
      },
      {
        front: "Zero Lower Bound (ZLB)",
        back: "A constraint on conventional monetary policy where nominal interest rates approach 0% and cannot easily be cut much lower because agents can hold zero-interest cash instead.",
        level: "SL",
      },
      {
        front: "[HL] Open-Market Operations (OMOs)",
        back: "The central bank buying government bonds from commercial banks to inject reserves (`M_s` right → `i↓`) or selling bonds to withdraw reserves (`M_s` left → `i↑`).",
        level: "HL",
      },
      {
        front: "[HL] Quantitative Easing (QE)",
        back: "Unconventional expansionary monetary policy at the ZLB where the central bank creates electronic reserves to buy large quantities of long-term government and corporate bonds, reducing long-term yields and lifting asset prices.",
        level: "HL",
      },
      {
        front: "[HL] Commercial Bank Money Creation",
        back: "Under fractional reserve banking, commercial banks create new bank deposits whenever they grant loans; theoretical maximum credit expansion equals `Initial Reserve Injection × (1 / minimum reserve ratio)`.",
        level: "HL",
      },
      {
        front: "Current vs Capital vs Transfer Expenditure",
        back: "Current = recurring wages/operating costs (`G`); Capital = long-term infrastructure/assets (`G` now + `LRAS` later); Transfers = welfare/pensions with no direct output exchange (boosts `C`, not `G`).",
        level: "SL",
      },
      {
        front: "Budget Deficit vs National Debt",
        back: "A budget deficit is an annual flow (`G > T` in one fiscal year). National debt is the cumulative stock of all past net government borrowing, evaluated via the Debt-to-GDP ratio.",
        level: "SL",
      },
      {
        front: "Automatic Stabilizers",
        back: "Progressive income taxes and unemployment benefits that automatically expand `AD` in recessions and restrain `AD` in booms without requiring new legislation.",
        level: "SL",
      },
      {
        front: "[HL] Marginal Propensities Identity",
        back: "`MPC + MPS + MPT + MPM = 1`, so the marginal propensity to withdraw/leak is `MPW = MPS + MPT + MPM = 1 − MPC`.",
        level: "HL",
      },
      {
        front: "[HL] Keynesian Spending Multiplier (`k`)",
        back: "The ratio of the final change in Real GDP to an initial autonomous injection (`ΔG`, `ΔI`, or `ΔX`): `k = 1 / (1 − MPC) = 1 / (MPS + MPT + MPM)`.",
        level: "HL",
      },
      {
        front: "[HL] Crowding-Out Effect",
        back: "When deficit-financed expansionary fiscal policy raises government borrowing, pushing up interest rates and reducing private-sector investment (`I↓`) and consumption (`C↓`), partially or fully offsetting the rise in `AD`.",
        level: "HL",
      },
      {
        front: "Market-Based Supply-Side Policies",
        back: "Policies reducing government intervention to boost efficiency and incentives: deregulation, privatisation, trade liberalisation, labour-market reforms (lower union power/minimum wages), and cuts in direct taxes.",
        level: "SL",
      },
      {
        front: "Interventionist Supply-Side Policies",
        back: "Active government investment to expand productive capacity (`LRAS` right): public education, training, healthcare, R&D subsidies, physical infrastructure, and targeted industrial support.",
        level: "SL",
      },
    ],
    mustKnow: [
      "Monetary policy shifts `AD` via `C`, `I`, and `(X − M)` (exchange-rate channel) — fast and politically independent, but constrained by 12–18 month transmission lags, weak confidence, and the zero lower bound.",
      "[HL] In the Money Market diagram, vertical `M_s` (controlled by the central bank via OMOs, reserve ratios, discount rate, or QE) intersects downward-sloping `M_d` to determine the equilibrium interest rate `i`.",
      "Government expenditure splits into **current**, **capital** (dual `AD` + `LRAS` boost), and **transfer payments** (enters `C`, not `G`).",
      "A **budget deficit** is a yearly *flow*; **national debt** is the cumulative *stock* of past deficits minus surpluses — evaluate sustainability via **Debt-to-GDP %**.",
      "**Automatic stabilizers** (progressive taxes and unemployment benefits) act immediately against the business cycle with zero legislative lag.",
      "[HL] The **Keynesian multiplier** is `k = 1 / (1 − MPC) = 1 / (MPS + MPT + MPM)` and `ΔReal GDP = k × ΔInjection`; closing an output gap requires `ΔG = Gap / k`.",
      "[HL] **Crowding out** (deficit borrowing → `i↑` → private `I↓`) is severe near full employment (Monetarist view) but minimal — or even reversed into 'crowding in' — during a deep Keynesian recession.",
      "**Supply-side policies** shift `LRAS` rightwards for non-inflationary long-term growth and a lower natural rate of unemployment (`NRU`), but operate with very long time lags.",
      "**Market-based reforms** economise on public spending yet risk higher Gini inequality and weakened worker/environmental protections; **interventionist reforms** promote equity and short-run `AD` but impose high fiscal and opportunity costs.",
      "Demand-side policies struggle against **cost-push inflation (stagflation)** because tightening `AD` cures inflation only by worsening unemployment — supply-side reforms are needed to lower costs structurally.",
    ],
    misconceptions: [
      {
        wrong: "A budget deficit and the national debt are the same thing.",
        right: "A budget deficit is an annual **flow** (`G > T` in one year); national debt is the accumulated **stock** of all past deficits minus surpluses. Cutting the deficit slows debt growth — it does not reduce total debt until a surplus is achieved.",
        level: "SL",
      },
      {
        wrong: "Transfer payments like pensions and unemployment benefits count directly as `G` in `AD = C + I + G + (X − M)`.",
        right: "Transfer payments are excluded from `G` because no current good or service is produced in exchange; instead, they raise household disposable income and boost **`C`** when recipients spend them.",
        level: "SL",
      },
      {
        wrong: "The Keynesian multiplier is `k = 1 / MPC`.",
        right: "No! The multiplier is {{k = 1 / (1 - MPC) = 1 / (MPS + MPT + MPM)}}. Higher `MPC` means *smaller* leakages and a *larger* multiplier (`MPC = 0.8` gives `k = 5`, not `1.25`).",
        level: "HL",
      },
      {
        wrong: "Quantitative Easing (QE) means the central bank prints cash and mails it directly to households.",
        right: "QE involves electronically creating central-bank reserves to purchase long-term government and corporate bonds from financial institutions, bidding up bond prices and lowering long-term interest yields.",
        level: "HL",
      },
      {
        wrong: "Privatising a state-owned utility automatically increases competition and lowers prices.",
        right: "Only if the market is contestable! Selling a **natural monopoly** (like water pipes or electricity grids) without strong competition regulation merely turns a public monopoly into a profit-maximising private monopoly.",
        level: "SL",
      },
      {
        wrong: "Supply-side policies only shift `LRAS` and have zero effect on `AD`.",
        right: "Most supply-side policies have a **dual effect**: public investment in education/infrastructure raises `G` immediately, while income/corporate tax cuts raise `C` and `I` immediately — shifting `AD` right in the short run before `LRAS` shifts in the long run.",
        level: "SL",
      },
      {
        wrong: "Expansionary monetary policy always cures a recession quickly.",
        right: "Transmission takes 12–18 months, nominal rates face the **zero lower bound**, and if households and firms have deeply pessimistic confidence they will refuse to borrow even at ultra-low interest rates.",
        level: "SL",
      },
    ],
    examMistakes: [
      "Labelling AD/AS axes `P` and `Q` instead of **`Average Price Level`** and **`Real GDP`** — immediate AO2/AO4 diagram penalty.",
      "Writing a Paper 1 Part (b) (15-mark) policy evaluation with zero **real-world examples** — this caps marks in mid-band even if theory is flawless.",
      "Forgetting to sum ALL THREE leakages (`MPS + MPT + MPM`) in HL Paper 3 multiplier calculations (ignoring `MPT` or `MPM` inflates `k` wildly).",
      "Applying the full multiplier `k × ΔG` to Real GDP when the economy is already operating near full employment (`Y_fe`) instead of noting inflationary erosion.",
      "Confusing **fiscal policy** (government taxes and spending) with **monetary policy** (central bank interest rates and money supply) — e.g. claiming the central bank cuts income tax!",
      "Drawing an upward-sloping `M_s` curve on the HL Money Market diagram instead of a **vertical** `M_s` controlled by the central bank.",
      "Evaluating supply-side policies solely on economic growth while ignoring **equity (Gini)**, **fiscal opportunity cost**, **environmental sustainability**, and **time lags**.",
      "Claiming that contractionary demand-side policy fixes **cost-push inflation** painlessly, instead of showing the harsh trade-off with rising cyclical unemployment.",
    ],
    mnemonics: [
      {
        topic: "Monetary Transmission Channels",
        device: "C–I–X (Credit, Investment, eXchange rate)",
        explanation:
          "Lower interest rates stimulate **C**onsumption (cheaper loans/wealth), **I**nvestment (lower borrowing hurdle), and net e**X**ports (hot-money outflow depreciates the currency).",
        level: "SL",
      },
      {
        topic: "Government Expenditure Types",
        device: "C–C–T (Current, Capital, Transfers)",
        explanation:
          "**C**urrent runs daily services (`G`), **C**apital builds long-run capacity (`G` + `LRAS`), and **T**ransfers redistribute income into household `C` (not `G`).",
        level: "SL",
      },
      {
        topic: "[HL] Multiplier Leakages",
        device: "S–T–M ('Stop The Multiplier!')",
        explanation:
          "The three leakages in the denominator of `k = 1 / (MPS + MPT + MPM)` are **S**avings, **T**axes, and i**M**ports — bigger S-T-M shrinks the multiplier!",
        level: "HL",
      },
      {
        topic: "Interventionist Supply-Side Pillars",
        device: "H–T–I–I (Human capital, Tech R&D, Infrastructure, Industrial policy)",
        explanation:
          "Four core ways governments directly expand `LRAS`: **H**uman capital (education/health), **T**echnology (R&D), **I**nfrastructure (transport/energy/broadband), and **I**ndustrial support for SMEs.",
        level: "SL",
      },
    ],
    realWorld: [
      {
        emoji: "🇺🇸",
        title: "US Federal Reserve & Bank of England Rate Hikes (2022–2023)",
        detail:
          "After CPI inflation surged above 9% in 2022, the Federal Reserve raised its federal funds rate from near 0% to 5.25–5.50% and the Bank of England hiked to 5.25%. Inflation cooled significantly by 2024, illustrating contractionary monetary policy's credibility — alongside 12–18 month transmission lags and painful mortgage-cost spikes for households.",
      },
      {
        emoji: "🇯🇵",
        title: "Bank of Japan Zero Lower Bound & Quantitative Easing (2013–2024)",
        detail:
          "Facing decades of sluggish demand and deflation, the Bank of Japan held policy rates near or below 0% and executed massive Quantitative Easing (buying government bonds and ETFs). Yet weak domestic confidence kept inflation muted for years, showcasing ZLB limitations.",
      },
      {
        emoji: "🇸🇬",
        title: "Singapore SkillsFuture & Infrastructure Investment",
        detail:
          "Singapore invests heavily in interventionist supply-side human capital via SkillsFuture retraining credits, polytechnic/STEM funding, and world-class Tuas Mega Port infrastructure — shifting `LRAS` rightwards to combat an ageing workforce and sustain non-inflationary productivity growth.",
      },
      {
        emoji: "🇬🇧",
        title: "UK 'Mini-Budget' Fiscal Clash & Crowding Out (September 2022)",
        detail:
          "When the UK government announced £45bn of unfunded tax cuts during high inflation while the Bank of England was tightening monetary policy, sovereign bond (gilt) yields surged and mortgage rates spiked — a textbook real-world case of bond-market crowding out and conflicting fiscal–monetary stances.",
      },
      {
        emoji: "🦠",
        title: "COVID-19 Fiscal Stimulus: US CARES Act (2020) & UK Furlough",
        detail:
          "With interest rates already pinned near the zero lower bound in 2020, governments deployed massive discretionary fiscal stimulus ($2.2 trillion US CARES Act; UK Coronavirus Job Retention Scheme) alongside automatic stabilizers to prevent an economic depression — at the cost of sharply higher Debt-to-GDP ratios.",
      },
      {
        emoji: "🇩🇪",
        title: "Germany's Hartz Labour-Market Reforms (2003–2005)",
        detail:
          "Germany enacted market-based labour reforms shortening unemployment benefit durations, modernising job centres, and expanding flexible 'mini-jobs'. Structural unemployment fell sharply from ~11% to under 4% over the next decade, though critics noted higher low-wage inequality.",
      },
    ],
    videos: [
      {
        title: "Monetary Policy, Interest Rates & Transmission Mechanism (IB Economics 3.5)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+monetary+policy+IB+economics",
      },
      {
        title: "Fiscal Policy, Budgets & Automatic Stabilizers (IB Economics 3.6)",
        channel: "Jason Welker",
        url: "https://www.youtube.com/results?search_query=Jason+Welker+fiscal+policy+IB+economics",
      },
      {
        title: "Keynesian Multiplier & Crowding Out [HL] Explained",
        channel: "Jacob Clifford / ACDC Econ",
        url: "https://www.youtube.com/results?search_query=Keynesian+multiplier+crowding+out+IB+economics+HL",
      },
      {
        title: "Market-Based vs Interventionist Supply-Side Policies (IB Economics 3.7)",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+supply+side+policies+IB+economics",
      },
    ],
    formulas: [
      {
        name: "Approximate Real Interest Rate",
        formula: "{{r_real ≈ r_nominal - \"inflation rate\"}}",
        note: "Determines true borrowing cost and monetary stance.",
        level: "SL",
      },
      {
        name: "Government Budget Balance",
        formula: "{{\"Budget Balance\" = T - G}}",
        note: "Positive = surplus; negative = deficit (annual flow).",
        level: "SL",
      },
      {
        name: "Budget Deficit as % of GDP",
        formula: "{{((G - T) / \"Nominal GDP\") * 100%}}",
        note: "Standard gauge of annual fiscal stance relative to economy size.",
        level: "SL",
      },
      {
        name: "National Debt-to-GDP Ratio",
        formula: "{{(\"National Debt\" / \"Nominal GDP\") * 100%}}",
        note: "Stock measure of long-term fiscal sustainability.",
        level: "SL",
      },
      {
        name: "Credit / Money Multiplier",
        formula: "{{\"Money Multiplier\" = 1 / r}}",
        note: "`r` = statutory minimum reserve ratio (as a decimal).",
        level: "HL",
      },
      {
        name: "Marginal Propensities Identity",
        formula: "{{MPC + MPS + MPT + MPM = 1}}",
        note: "Every extra dollar of national income is consumed domestically, saved, taxed, or spent on imports.",
        level: "HL",
      },
      {
        name: "Marginal Propensity to Withdraw (MPW)",
        formula: "{{MPW = MPS + MPT + MPM = 1 - MPC}}",
        note: "Total fraction of extra income leaking out of the domestic circular flow each round.",
        level: "HL",
      },
      {
        name: "Keynesian Spending Multiplier (k)",
        formula: "{{k = 1 / (1 - MPC) = 1 / (MPS + MPT + MPM)}}",
        note: "Applies to autonomous injections `ΔG`, `ΔI`, or `ΔX`.",
        level: "HL",
      },
      {
        name: "Total Multiplier Impact on Real GDP",
        formula: "{{Δ\"Real GDP\" = k * Δ\"Injection\"}}",
        note: "Assumes spare capacity (horizontal Keynesian AS) and no crowding out.",
        level: "HL",
      },
      {
        name: "Required Injection to Close Output Gap",
        formula: "{{ΔG = \"Output Gap\" / k}}",
        note: "Exact initial stimulus needed to reach `Y_fe` without overshooting.",
        level: "HL",
      },
    ],
  },
};
