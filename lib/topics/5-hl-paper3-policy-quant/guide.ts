import type { TopicGuide } from "../../types";

export const guide: TopicGuide = {
  id: "5-hl-paper3-policy-quant",
  title: "Unit 5 (HL): Paper 3 Quantitative Modelling & Policy Recommendations",
  strand: "HL Paper 3: Policy & Modelling",
  icon: "🧮",
  level: "HL",
  summary:
    "Master IB Economics HL Paper 3 (30% of HL grade, 1h 45m, 60 marks): multi-step quantitative chains across Micro, Macro & Global Economics plus the Band 8–10 blueprint for the compulsory 10-mark Policy Recommendation.",
  intro:
    "HL Paper 3 is where economics becomes applied quantitative policy analysis. Across **two compulsory 30-mark case studies** (60 marks total, 1 hour 45 minutes), the examiner gives you fresh country or industry data, asks you to calculate elasticities, equilibria, taxes, multipliers, tariffs, or Balance of Payments entries, and finishes **each** question with a compulsory **10-mark Policy Recommendation** (`Recommend`). That means **20 of the 60 marks (one-third of Paper 3!)** come from synthesising your calculations into a sharp, justified policy choice. Nail both the exact algebra and the D-A-T-E-C policy architecture and Paper 3 becomes your highest-scoring paper.",

  guide: [
    // =========================================================================
    // SECTION 1: MICRO QUANTITATIVE
    // =========================================================================
    {
      id: "p3-micro-quantitative",
      heading: "HL Paper 3 Micro Modelling: Linear Equations, Surplus, Tax & Firm Costs",
      level: "HL",
      discovery: {
        problem:
          "A city's electric-bike rental market has weekly demand {{Q_d = 120 - 4P}} and supply {{Q_s = -20 + 6P}} (quantity in thousands of rides, price in dollars). Before looking at the formula below, find the free-market equilibrium price and quantity. Now suppose the city introduces a **$5 specific tax** per ride on operators. Does the consumer price rise by the full $5, or less — and why?",
        idea:
          "Setting {{120 - 4P = -20 + 6P}} gives {{10P = 140}}, so {{P_e = 14}} ($14) and {{Q_e = 64}} thousand rides. Under a $5 specific tax, operators must receive $5 more at every quantity to cover the tax, so replace {{P}} with {{(P - 5)}} in supply: {{Q_s' = -20 + 6(P - 5) = -50 + 6P}}. Solving {{120 - 4P = -50 + 6P}} yields {{10P = 170}}, so consumers pay **{{$17}}** (+$3) while operators keep **{{$12}}** (−$2) and output falls to **52 thousand**. Consumers absorb 60% of the tax (`3/5`) and producers absorb 40% (`2/5`) because demand is steeper (relatively more price inelastic) than supply at equilibrium.",
      },
      body: `Microeconomic Paper 3 chains almost always move in a predictable **four-step pipeline**: solve linear demand and supply → compute consumer & producer surplus → apply an indirect tax or per-unit subsidy → evaluate welfare loss and stakeholder incidence. A second major micro staple tests **firm cost, revenue, and profit schedules** (\`MC = MR\`, break-even, and shut-down conditions).

### 1. Solving Linear Demand & Supply Models
- **Demand:** {{Q_d = a - bP}} — vertical (price) intercept where {{Q_d = 0}} is {{P_{max} = a / b}}; horizontal intercept is {{Q = a}}.
- **Supply:** {{Q_s = c + dP}} — vertical (price) intercept where {{Q_s = 0}} is {{P_{min} = -c / d}} (if {{c < 0}}). If {{c >= 0}}, supply meets the horizontal axis at {{Q = c}} and the price intercept is {{0}}.
- **Equilibrium:** Solve {{a - bP = c + dP}} → {{P_e = (a - c) / (b + d)}}, then substitute back into **both** equations to double-check {{Q_e}}.
- **Social surplus triangles** (when {{c < 0}}):
  - **Consumer Surplus:** {{CS = 1/2 * Q_e * (P_{max} - P_e)}}
  - **Producer Surplus:** {{PS = 1/2 * Q_e * (P_e - P_{min})}} (if {{c > 0}}, PS is a trapezoid: {{1/2 * (c + Q_e) * P_e}}!).

### 2. Specific Indirect Taxes & Per-Unit Subsidies
Always shift the supply curve in the **P-direction** — never add or subtract {{t}} directly to the constant {{c}}!
- **Specific tax {{t}} per unit:** Producers keep {{P - t}}, so substitute {{(P - t)}} for {{P}} in supply:
  {{Q_s' = c + d(P - t) = (c - dt) + dP}}
  Solve {{a - bP_c = (c - dt) + dP_c}} to find consumer price {{P_c}}, producer net price {{P_p = P_c - t}}, and taxed quantity {{Q_t}}.
  - **Tax revenue:** {{R = t * Q_t}}
  - **Consumer incidence:** {{(P_c - P_e) * Q_t}} · **Producer incidence:** {{(P_e - P_p) * Q_t}}
  - **Deadweight welfare loss:** {{DWL = 1/2 * t * (Q_e - Q_t)}}
- **Per-unit subsidy {{s}}:** Producers receive {{P + s}}, so substitute {{(P + s)}} for {{P}}:
  {{Q_s' = c + d(P + s) = (c + ds) + dP}}
  Consumer price falls to {{P_c}}, producer price rises to {{P_p = P_c + s}}, quantity expands to {{Q_s1}}, government outlay is {{s * Q_{s1}}}, and **overproduction DWL** is {{1/2 * s * (Q_{s1} - Q_e)}} (assuming no positive externality).

### 3. Elasticities from Schedules & Firm Profit Rectangles
| Measure | Paper 3 Formula | Sign & Interpretation |
|---|---|---|
| **PED** | {{|%Delta Q_d / %Delta P|}} | Ignore minus sign for IB HL magnitude: {{>1}} elastic, {{<1}} inelastic |
| **YED** | {{%Delta Q_d / %Delta Y}} | **Keep sign:** {{<0}} inferior, {{0 < YED < 1}} necessity, {{>1}} luxury |
| **PES** | {{%Delta Q_s / %Delta P}} | Always {{>= 0}}; steep supply with low spare capacity has {{PES < 1}} |
| **Firm Profit Max** | {{MC = MR}} | Abnormal profit {{= (AR - AC) * Q^*}}; normal profit when {{AR = AC}} |
| **Revenue Max** | {{MR = 0}} | Total revenue peaks; firm trades off profit for market share |
| **SR Shut-Down** | {{P < AVC}} | Operating loss exceeds fixed costs ({{TR < TVC}}) |`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 330" role="img" aria-label="Linear market equilibrium with a specific indirect tax showing consumer surplus, producer surplus, consumer and producer tax incidence, and deadweight welfare loss triangle">
  <rect width="560" height="330" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">Linear Market Model: Specific Indirect Tax Welfare Breakdown</text>
  <!-- Axes -->
  <line x1="70" y1="275" x2="430" y2="275" stroke="#1f2937" stroke-width="2"/>
  <line x1="70" y1="45" x2="70" y2="275" stroke="#1f2937" stroke-width="2"/>
  <text x="436" y="280" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1f2937">Quantity (Q)</text>
  <text x="64" y="42" text-anchor="end" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1f2937">Price ($)</text>
  <!-- Coordinates: origin (70,275). Demand (70,65) to (390,275). S (70,225) to (370,75).
       Intersection E: Demand y = 65 + (210/320)*(x-70) = 65 + 0.65625*(x-70).
       Supply y = 225 - 0.5*(x-70).
       Set equal: 1.15625*(x-70) = 160 => x-70 = 138.38 => xE = 208.4, yE = 155.8.
       Tax shift up by 48 px: S+t from (70,177) to (330,47), slope -0.5.
       New E': 1.15625*(x-70) = 112 => x-70 = 96.86 => xT = 166.9, yPc = 128.6, yPp = 176.6. -->
  <!-- CS post-tax -->
  <polygon points="70,65 70,128.6 166.9,128.6" fill="#dbeafe" opacity="0.8"/>
  <!-- Consumer tax burden -->
  <rect x="70" y="128.6" width="96.9" height="27.2" fill="#f59e0b" opacity="0.35"/>
  <!-- Producer tax burden -->
  <rect x="70" y="155.8" width="96.9" height="20.8" fill="#ea580c" opacity="0.32"/>
  <!-- PS post-tax -->
  <polygon points="70,176.6 166.9,176.6 70,225" fill="#d1fae5" opacity="0.85"/>
  <!-- DWL triangle -->
  <polygon points="166.9,128.6 208.4,155.8 166.9,176.6" fill="#ef4444" opacity="0.5"/>
  <!-- Curves -->
  <line x1="70" y1="65" x2="390" y2="275" stroke="#1d4ed8" stroke-width="2.6"/>
  <line x1="70" y1="225" x2="370" y2="75" stroke="#047857" stroke-width="2.6"/>
  <line x1="70" y1="177" x2="330" y2="47" stroke="#b45309" stroke-width="2.6" stroke-dasharray="7 4"/>
  <!-- Dotted guides -->
  <line x1="70" y1="155.8" x2="208.4" y2="155.8" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="208.4" y1="155.8" x2="208.4" y2="275" stroke="#6b7280" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="166.9" y1="128.6" x2="166.9" y2="275" stroke="#374151" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="70" y1="128.6" x2="166.9" y2="128.6" stroke="#374151" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="70" y1="176.6" x2="166.9" y2="176.6" stroke="#374151" stroke-width="1.4" stroke-dasharray="4 3"/>
  <!-- Points -->
  <circle cx="208.4" cy="155.8" r="4" fill="#1f2937"/>
  <circle cx="166.9" cy="128.6" r="4" fill="#b45309"/>
  <circle cx="166.9" cy="176.6" r="4" fill="#047857"/>
  <!-- Curve labels -->
  <text x="380" y="264" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">D</text>
  <text x="366" y="70" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#047857">S</text>
  <text x="322" y="45" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#b45309">S + tax</text>
  <!-- Axis tick labels -->
  <text x="62" y="132" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">Pc</text>
  <text x="62" y="160" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#374151">Pe</text>
  <text x="62" y="181" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#047857">Pp</text>
  <text x="167" y="292" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">Qt</text>
  <text x="208" y="292" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#374151">Qe</text>
  <!-- Area text -->
  <text x="95" y="109" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e40af">CS</text>
  <text x="95" y="203" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#065f46">PS</text>
  <text x="184" y="159" font-family="system-ui,sans-serif" font-size="10" font-weight="700" fill="#991b1b">DWL</text>
  <!-- Legend panel -->
  <rect x="405" y="65" width="142" height="162" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="415" y="85" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1f2937">Welfare Legend</text>
  <rect x="415" y="96" width="12" height="12" rx="2" fill="#dbeafe" stroke="#1d4ed8"/>
  <text x="433" y="106" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">New CS</text>
  <rect x="415" y="118" width="12" height="12" rx="2" fill="#f59e0b" opacity="0.5"/>
  <text x="433" y="128" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">Consumer Tax</text>
  <rect x="415" y="140" width="12" height="12" rx="2" fill="#ea580c" opacity="0.5"/>
  <text x="433" y="150" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">Producer Tax</text>
  <rect x="415" y="162" width="12" height="12" rx="2" fill="#d1fae5" stroke="#047857"/>
  <text x="433" y="172" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">New PS</text>
  <rect x="415" y="184" width="12" height="12" rx="2" fill="#ef4444" opacity="0.6"/>
  <text x="433" y="194" font-family="system-ui,sans-serif" font-size="10.5" fill="#991b1b">DWL = 1/2 t ΔQ</text>
  <text x="415" y="216" font-family="system-ui,sans-serif" font-size="10" fill="#475569">Tax wedge: t = Pc − Pp</text>
</svg>`,
      diagramCaption:
        "A specific tax wedges a vertical gap t = Pc − Pp between the price consumers pay and the net price producers keep, shrinking quantity from Qe to Qt and creating a deadweight loss triangle of area 1/2 × t × (Qe − Qt).",
      workedExamples: [
        {
          title: "Linear Market Equilibrium, Tax Incidence & Deadweight Loss",
          problem:
            "The market for bottled iced tea is modelled by {{Q_d = 200 - 5P}} and {{Q_s = -40 + 3P}}, where {{Q}} is in thousands of bottles per week and {{P}} is in dollars. The government introduces an **$8 per-bottle indirect tax**. Calculate (a) pre-tax equilibrium and CS, (b) post-tax {{P_c}}, {{P_p}}, and {{Q_t}}, and (c) tax revenue, incidence split, and deadweight welfare loss.",
          steps: [
            "Pre-tax equilibrium: set {{200 - 5P = -40 + 3P}} → {{8P = 240}} → {{P_e = 30}} ($30). Substitute back: {{Q_e = 200 - 5(30) = 50}} thousand bottles.",
            "Demand price intercept ({{Q_d = 0}}): {{P_{max} = 200 / 5 = 40}} ($40). Pre-tax {{CS = 1/2 * 50 * (40 - 30) = 250}} ($250 thousand).",
            "Post-tax supply: replace {{P}} with {{(P - 8)}} in {{Q_s}}: {{Q_s' = -40 + 3(P - 8) = -64 + 3P}}.",
            "Post-tax equilibrium: {{200 - 5P_c = -64 + 3P_c}} → {{8P_c = 264}} → {{P_c = 33}} ($33). Producers receive {{P_p = 33 - 8 = 25}} ($25). New quantity {{Q_t = 200 - 5(33) = 35}} thousand.",
            "Government tax revenue: {{8 * 35 = 280}} ($280 thousand). Consumer share: {{(33 - 30) * 35 = 105}} ($105 thousand, 37.5%); Producer share: {{(30 - 25) * 35 = 175}} ($175 thousand, 62.5%).",
            "Deadweight welfare loss: {{DWL = 1/2 * t * (Q_e - Q_t) = 1/2 * 8 * (50 - 35) = 60}} ($60 thousand).",
          ],
          answer:
            "Pre-tax: Pe = $30, Qe = 50k, CS = $250k. Post-tax: Pc = $33, Pp = $25, Qt = 35k, Revenue = $280k (Consumers $105k, Producers $175k), DWL = $60k.",
          yourTurn: {
            question:
              "A market has {{Q_d = 160 - 4P}} and {{Q_s = 20 + 6P}} (units per day, price in $). A **$5 per-unit indirect tax** is imposed. Calculate the **deadweight welfare loss** (in $).",
            answer: { type: "number", value: 30, display: "$30" },
            solution:
              "Pre-tax: 160 − 4P = 20 + 6P → 10P = 140 → Pe = $14, Qe = 104 units. Post-tax supply: Qs' = 20 + 6(P − 5) = −10 + 6P. Equating: 160 − 4P = −10 + 6P → 10P = 170 → Pc = $17, Qt = 92 units. DWL = 1/2 × 5 × (104 − 92) = 1/2 × 5 × 12 = $30.",
          },
        },
        {
          title: "Imperfectly Competitive Firm Schedule: Profit Max vs Revenue Max",
          problem:
            "A regional ferry operator has fixed costs of $48 per trip and faces the following schedule:\n\n| Output (Q) | Price (AR, $) | TR ($) | MR ($) | TC ($) | MC ($) |\n|---|---|---|---|---|---|\n| 4 | 38 | 152 | — | 102 | — |\n| 5 | 35 | 175 | 23 | 115 | 13 |\n| 6 | 32 | 192 | 17 | 132 | 17 |\n| 7 | 29 | 203 | 11 | 154 | 22 |\n| 8 | 26 | 208 | 5 | 182 | 28 |\n| 9 | 23 | 207 | −1 | 216 | 34 |\n\nDetermine (a) the profit-maximising output and abnormal profit, and (b) the revenue-maximising output and profit there.",
          steps: [
            "Profit maximisation occurs where {{MC = MR}}. Scanning the table, at {{Q = 6}}, {{MR = 17}} and {{MC = 17}}.",
            "At {{Q = 6}}, {{AC = TC / Q = 132 / 6 = 22}} ($22). Abnormal profit {{= (AR - AC) * Q = (32 - 22) * 6 = 60}} ($60) — check directly via {{TR - TC = 192 - 132 = 60}}.",
            "Revenue maximisation occurs where {{MR}} reaches zero (the last positive unit before {{MR < 0}}). At {{Q = 8}}, {{TR = 208}} ($208) is highest ({{MR = 5 > 0}}, while at {{Q = 9}}, {{MR = -1}}).",
            "At {{Q = 8}}, economic profit drops to {{208 - 182 = 26}} ($26) — the firm sacrifices $34 of profit to gain two extra units of sales.",
          ],
          answer:
            "Profit-maximising output Q = 6 with abnormal profit = $60; revenue-maximising output Q = 8 with TR = $208 and profit = $26.",
        },
      ],
      keyPoints: [
        "Always substitute `(P − t)` for a specific tax and `(P + s)` for a per-unit subsidy into `Q_s = c + dP` — never add/subtract `t` directly to `c`.",
        "Check tax incidence ratio quickly: consumer share of a linear tax is `d / (b + d)` and producer share is `b / (b + d)`.",
        "Deadweight loss is always a triangle of vertical height `t` (or `s`) and horizontal base `|Q_e − Q_new|`: `DWL = ½ × wedge × ΔQ`.",
        "If supply has a positive Q-intercept (`c > 0`), Producer Surplus is a **trapezoid** `½(c + Q_e)P_e`, NOT a triangle!",
      ],
      whyItWorks:
        "A linear supply equation `Q_s = c + dP` can be inverted to the marginal-cost curve `P = −c/d + (1/d)Q`. Adding a per-unit tax `t` raises marginal cost vertically by `t`, giving `P = −c/d + t + (1/d)Q`. Solving back for `Q` produces `Q_s' = c + d(P − t)` — proving algebraically why the constant changes by `−dt`, not `−t`!",
      strategies: [
        "Double-check every equilibrium by plugging your solved `P` into BOTH `Q_d` and `Q_s` (or `Q_s'`) — if the two quantities disagree, catch the algebra slip immediately.",
        "Write units (`$ thousand`, `$ million`, `units`) beside every single line so you never drop a factor of 1,000 in surplus or revenue.",
        "For firm schedules, check `TR − TC` directly alongside `MC = MR` to guarantee you haven't misread a discrete step.",
      ],
      thinkDeeper:
        "If a government replaces a specific tax `t` with an **ad valorem** (percentage) tax `τ` raising the exact same tax revenue, the post-tax supply curve pivots steeper rather than shifting parallel — how would you write `Q_s'` in terms of `P` and `τ`? (Hint: producers keep `P / (1 + τ)`!)",
    },

    // =========================================================================
    // SECTION 2: MACRO QUANTITATIVE
    // =========================================================================
    {
      id: "p3-macro-quantitative",
      heading: "HL Paper 3 Macro Modelling: Real GDP, CPI, Progressive Tax & Multiplier",
      level: "HL",
      discovery: {
        problem:
          "Over one year, Country A's Nominal GDP expands by **8.0%**, its GDP deflator climbs from **100** to **105**, and its population grows by **2.0%**. A politician claims the average resident is 8% richer. What is the true percentage growth in **Real GDP per capita**?",
        idea:
          "Start with index 100 in Year 1. In Year 2, Nominal GDP is `108`, so Real GDP is {{(108 / 105) * 100 = 102.86}} (+2.86%). Dividing by the new population index `102` gives Real GDP per capita index {{(102.86 / 102) * 100 = 100.84}}, which is only **+0.84%** real growth per person (roughly `8% − 5% − 2% = 1%`). Paper 3 routinely tests stripping out BOTH inflation and population growth!",
      },
      body: `Macroeconomic Paper 3 questions test five precision tools that directly feed the final 10-mark policy recommendation: **Real GDP chains**, **weighted CPI**, **labour-market rates**, **progressive & indirect tax calculations**, and **Keynesian multiplier fiscal gap-closing**.

### 1. Nominal-to-Real GDP, Deflator & Per Capita Growth Chains
- **Real GDP:** {{Real GDP = (Nominal GDP / GDP Deflator) * 100}}
- **GDP Deflator:** {{GDP Deflator = (Nominal GDP / Real GDP) * 100}}
- **Real GDP Growth Rate:** {{((Real GDP_2 - Real GDP_1) / Real GDP_1) * 100%}}
- **Real GDP per Capita:** {{Real GDP / Population}} — compute Real GDP per capita in each year first, THEN take the percentage change!

### 2. Weighted CPI Basket & Inflation Rates
- **Basket Index Method:** {{CPI_t = (Cost of Basket_t / Cost of Basket_{base}) * 100}}
- **Weighted Category Method:** {{CPI_t = sum(Weight_i * Index_{i,t})}} (where weights sum to \`1.00\` or \`100%\`).
- **Annual Inflation Rate:** {{((CPI_2 - CPI_1) / CPI_1) * 100%}} — **crucial trap:** when CPI moves from \`110\` to \`115.5\`, inflation is **5.0%**, NOT 5.5%! Always divide by the starting CPI (\`110\`), never subtract raw index points unless starting from \`100\`.

### 3. Unemployment & Labour-Force Participation
- **Labour Force** {{= Employed + Unemployed}} (excludes full-time students, retirees, stay-at-home carers, and discouraged workers).
- **Unemployment Rate** {{= (Unemployed / Labour Force) * 100%}}
- **Labour-Force Participation Rate (LFPR)** {{= (Labour Force / Working-Age Population) * 100%}}

### 4. Multi-Bracket Progressive Income Tax & Indirect Tax Burden
Never multiply total income by the top bracket rate! Slice income **band by band**:
- **Total Income Tax** = sum of {{(Income in Bracket_i) * (Rate_i)}} across all brackets.
- **Marginal Tax Rate (MTR):** Tax rate paid on the **next dollar** of income (equals the rate of the taxpayer's top bracket).
- **Average Tax Rate (ATR):** {{(Total Tax Paid / Gross Income) * 100%}}. For a progressive tax, {{ATR < MTR}} once income passes the first taxable bracket.
- **Indirect Tax Burden:** {{(Indirect Tax Paid / Gross Income) * 100%}}. Because lower-income households spend a higher share of income (higher APC), a flat VAT/GST takes a higher percentage of their income — making indirect taxes **regressive**.

### 5. Keynesian Multiplier & Closing Output Gaps
- **Leakage identity:** {{MPC_d + MPS + MPT + MPM = 1}}, where {{MPW = MPS + MPT + MPM}} is the marginal propensity to withdraw.
- **Open-economy spending multiplier:** {{k = 1 / (1 - MPC_d) = 1 / (MPS + MPT + MPM)}}
- **Total Real GDP impact:** {{Delta Y = k * Delta Injection}} (for {{Delta G}}, {{Delta I}}, or {{Delta X}}).
- **Gap-closing fiscal package:** To close a deflationary gap of {{Y_f - Y_1}}, required initial government spending is {{Delta G = (Y_f - Y_1) / k}}. (Note: if a Paper 3 question states tax cuts instead of \`ΔG\`, the initial spending injection is {{MPC_d * Delta T}}, so the tax multiplier magnitude is smaller!)`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" role="img" aria-label="Keynesian AD/AS diagram illustrating how an initial government spending injection Delta G is magnified by the multiplier k to shift AD from AD1 to AD2 and close a deflationary gap from Y1 to Yf">
  <rect width="560" height="320" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">Keynesian Multiplier &amp; Deflationary Gap Closure (AD/AS)</text>
  <!-- Axes -->
  <line x1="75" y1="265" x2="380" y2="265" stroke="#1f2937" stroke-width="2"/>
  <line x1="75" y1="45" x2="75" y2="265" stroke="#1f2937" stroke-width="2"/>
  <text x="385" y="270" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1f2937">Real GDP (Y)</text>
  <text x="70" y="42" text-anchor="end" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1f2937">Price Level</text>
  <!-- Keynesian AS curve -->
  <path d="M 85 215 L 185 215 Q 270 215 295 160 Q 312 120 315 55" fill="none" stroke="#047857" stroke-width="3"/>
  <text x="322" y="65" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#047857">Keynesian AS</text>
  <!-- Full employment line Yf at x=315 -->
  <line x1="315" y1="55" x2="315" y2="265" stroke="#047857" stroke-width="1.4" stroke-dasharray="5 4"/>
  <text x="315" y="283" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#047857">Yf</text>
  <!-- AD1 -->
  <line x1="115" y1="95" x2="245" y2="245" stroke="#1d4ed8" stroke-width="2.5"/>
  <text x="246" y="256" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8">AD1</text>
  <!-- AD1 + initial Delta G (intermediate dashed) -->
  <line x1="150" y1="95" x2="280" y2="245" stroke="#93c5fd" stroke-width="2" stroke-dasharray="5 4"/>
  <!-- AD2 final -->
  <line x1="195" y1="65" x2="345" y2="238" stroke="#b45309" stroke-width="2.8"/>
  <text x="348" y="248" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#b45309">AD2</text>
  <!-- Equilibria: AD1 meets AS flat at y=215 -> x = 115 + (130)*(120/150) = 219 -->
  <line x1="219" y1="215" x2="219" y2="265" stroke="#1d4ed8" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="75" y1="215" x2="219" y2="215" stroke="#6b7280" stroke-width="1.2" stroke-dasharray="4 3"/>
  <circle cx="219" cy="215" r="4" fill="#1d4ed8"/>
  <text x="219" y="283" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#1d4ed8">Y1</text>
  <text x="68" y="219" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#374151">PL1</text>
  <!-- AD2 meets AS curve around (287, 171) -->
  <circle cx="287" cy="171" r="4" fill="#b45309"/>
  <line x1="287" y1="171" x2="287" y2="265" stroke="#b45309" stroke-width="1.4" stroke-dasharray="4 3"/>
  <line x1="75" y1="171" x2="287" y2="171" stroke="#b45309" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="287" y="283" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" font-weight="700" fill="#b45309">Y2</text>
  <text x="68" y="175" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">PL2</text>
  <!-- Shift arrows -->
  <line x1="158" y1="138" x2="230" y2="138" stroke="#b45309" stroke-width="2"/>
  <polygon points="230,134 238,138 230,142" fill="#b45309"/>
  <text x="197" y="130" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#b45309">k × ΔG</text>
  <!-- Right summary box -->
  <rect x="400" y="60" width="148" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="410" y="82" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1f2937">Multiplier Chain</text>
  <text x="410" y="104" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">1. Initial injection: ΔG</text>
  <text x="410" y="124" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">2. Leakages:</text>
  <text x="418" y="140" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#b45309">MPW = MPS+MPT+MPM</text>
  <text x="410" y="162" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">3. Multiplier:</text>
  <text x="418" y="178" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1d4ed8">k = 1 / MPW</text>
  <text x="410" y="200" font-family="system-ui,sans-serif" font-size="10.5" fill="#334155">4. Required fiscal push:</text>
  <text x="418" y="218" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#047857">ΔG = (Yf − Y1) / k</text>
  <text x="410" y="240" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748b">Watch PL2 if AS slopes up!</text>
</svg>`,
      diagramCaption:
        "An initial fiscal injection ΔG triggers induced consumption rounds so total AD shifts by k × ΔG. On the upward-sloping Keynesian AS segment, part of the nominal boost leaks into inflation (PL1 → PL2), reducing the real output gain.",
      workedExamples: [
        {
          title: "Progressive Income Tax Brackets, Average vs Marginal Rate & Indirect Tax",
          problem:
            "Income tax brackets in Solaris are: **$0–$20,000 at 0%**; **$20,001–$50,000 at 15%**; **$50,001–$90,000 at 25%**; **above $90,000 at 35%**. A household earns **$80,000** and spends **$50,000** (pre-tax) on goods subject to a **10% sales tax**. Calculate (a) total income tax, (b) marginal and average income tax rates, and (c) indirect tax paid as a percentage of gross income.",
          steps: [
            "Slice $80,000 bracket by bracket: first $20,000 taxed at 0% = $0; next $30,000 ($20,001 to $50,000) taxed at 15% = $4,500; remaining $30,000 ($50,001 to $80,000) taxed at 25% = $7,500.",
            "Total income tax {{= 0 + 4500 + 7500 = 12000}} ($12,000).",
            "Marginal tax rate (MTR) = **25%** (the rate applied to the household's top bracket). Average income tax rate (ATR) {{= (12000 / 80000) * 100 = 15%}}.",
            "Indirect tax paid {{= 0.10 * 50000 = 5000}} ($5,000). As a share of gross income: {{(5000 / 80000) * 100 = 6.25%}}.",
          ],
          answer:
            "Total income tax = $12,000; MTR = 25%, ATR = 15% (confirming progressivity since ATR < MTR); Indirect tax = $5,000 (6.25% of gross income).",
          yourTurn: {
            question:
              "Using Solaris's exact same brackets (`0%` up to $20,000; `15%` on $20,001–$50,000; `25%` on $50,001–$90,000; `35%` above $90,000), calculate the **average income tax rate** (as a percentage) for a worker earning **$100,000**.",
            answer: { type: "number", value: 18, display: "18%" },
            solution:
              "Tax by band: ($20,000 × 0%) + ($30,000 × 15%) + ($40,000 × 25%) + ($10,000 × 35%) = $0 + $4,500 + $10,000 + $3,500 = $18,000. Average tax rate = (18,000 / 100,000) × 100 = 18%.",
          },
        },
        {
          title: "Weighted CPI Inflation & Open-Economy Multiplier Gap Closure",
          problem:
            "An economy's CPI basket weights are **Food 0.30**, **Housing 0.50**, and **Transport 0.20**. From base Year 1 (all indices = 100) to Year 2, category indices move to Food 112, Housing 108, and Transport 115. Meanwhile, actual Real GDP is **$420 billion**, full-employment Real GDP is **$480 billion**, and marginal propensities are {{MPS = 0.15}}, {{MPT = 0.15}}, and {{MPM = 0.10}}. Calculate (a) Year 2 CPI and inflation rate, and (b) the government spending increase {{Delta G}} required to close the deflationary gap.",
          steps: [
            "Weighted Year 2 CPI {{= 0.30(112) + 0.50(108) + 0.20(115) = 33.6 + 54.0 + 23.0 = 110.6}}.",
            "Annual inflation rate {{= ((110.6 - 100) / 100) * 100 = 10.6%}}.",
            "Total marginal propensity to withdraw {{MPW = 0.15 + 0.15 + 0.10 = 0.40}}. Spending multiplier {{k = 1 / 0.40 = 2.5}}.",
            "Deflationary gap {{= 480 - 420 = 60}} ($60 billion). Required {{Delta G = 60 / 2.5 = 24}} ($24 billion).",
          ],
          answer:
            "Year 2 CPI = 110.6 (inflation = 10.6%); multiplier k = 2.5; required government spending increase ΔG = $24 billion.",
        },
      ],
      keyPoints: [
        "Always check whether the prompt gives `MPC_d` (marginal propensity to consume domestically) OR total `MPC` alongside `MPM`: the safest formula is `k = 1 / (MPS + MPT + MPM)`.",
        "For progressive taxes, verify that `ATR < MTR` for every taxpayer above the tax-free allowance — if your ATR exceeds the top bracket rate, you forgot to slice by bracket!",
        "Inflation between two non-base years is `[(CPI_2 − CPI_1) / CPI_1] × 100`, NEVER `CPI_2 − CPI_1`.",
        "Discouraged workers who stop looking for work drop out of BOTH the unemployed count and the labour force, artificially lowering the measured unemployment rate.",
      ],
      whyItWorks:
        "The multiplier formula `k = 1 / MPW` is simply the sum of an infinite geometric series: an initial `$1` of government spending generates `1 + c + c² + c³ + ... = 1 / (1 − c)`, where `c = 1 − (MPS + MPT + MPM)` is the fraction of each extra dollar re-spent on domestic output rather than leaked into savings, taxes, or imports.",
      strategies: [
        "Draw a quick 3-column bracket table (`Bracket width | Rate | Tax $`) for every progressive tax problem so band boundaries like `$20,000 → $50,000 = $30,000` never slip.",
        "In Real GDP per capita questions, convert Nominal → Real → Per Capita BEFORE computing percentage growth.",
        "Link your calculated `k` straight into the 10-mark Policy Recommendation: a low `k` (high `MPM` in a small open economy like Singapore) warns that broad fiscal stimulus leaks heavily into imports!",
      ],
      thinkDeeper:
        "If an economy is already near full employment (steep Keynesian AS), why does an actual `$24 billion` fiscal stimulus raise Real GDP by **less** than `k × $24 billion`? Explain using both demand-pull inflation and interest-rate crowding out.",
    },

    // =========================================================================
    // SECTION 3: GLOBAL QUANTITATIVE
    // =========================================================================
    {
      id: "p3-global-quantitative",
      heading: "HL Paper 3 Global Modelling: Comparative Advantage, Tariffs, Forex & BoP",
      level: "HL",
      discovery: {
        problem:
          "With identical resources, Country X can produce **60 tonnes of wheat OR 60 tonnes of steel**, while Country Y can produce **30 tonnes of wheat OR 15 tonnes of steel**. Country X has an absolute advantage in **both** goods. Can international trade still allow both countries to consume strictly more of both goods?",
        idea:
          "Compute opportunity costs! In Country X, 1 tonne of wheat costs **1 tonne of steel** (`60/60`) and 1 steel costs **1 wheat**. In Country Y, 1 tonne of wheat costs only **0.5 tonnes of steel** (`15/30`), while 1 steel costs **2 wheat** (`30/15`). Because Y has the lower opportunity cost in wheat (`0.5 < 1`) and X has the lower opportunity cost in steel (`1 < 2`), specialising and trading at any ratio strictly between `0.5` and `1` steel per wheat (say `1 wheat = 0.75 steel`) lifts both countries outside their domestic PPCs!",
      },
      body: `Global Economy Paper 3 chains combine exact geometry with international accounting identities across four core domains: **comparative advantage**, **protectionist welfare areas**, **exchange-rate conversions**, and **Balance of Payments reconstruction**.

### 1. Comparative Advantage & Terms-of-Trade Bounds
- **Output table** (max quantities producible with given resources): {{Opp cost of 1 unit of X = Max Y / Max X}}.
- **Input table** (labour hours required per unit — watch out!): {{Opp cost of 1 unit of X = Hours for X / Hours for Y}}.
- **Specialisation rule:** Each country exports the good in which it has the **lower opportunity cost**.
- **Mutually beneficial Terms of Trade (ToT):** Must lie strictly **between** the two countries' domestic opportunity costs so both nations buy imports cheaper than they could produce them at home.

### 2. Tariff & Import Quota Welfare Accounting
Let free-trade world price be {{P_w}} (domestic supply {{Q_1}}, demand {{Q_2}}, imports {{Q_2 - Q_1}}) and post-tariff domestic price be {{P_w + t}} (domestic supply {{Q_3}}, demand {{Q_4}}, imports {{Q_4 - Q_3}}):

| Welfare Component | Exact Paper 3 Formula | Tariff vs Import Quota Difference |
|---|---|---|
| **Consumer Surplus Loss** | {{1/2 * (Q_2 + Q_4) * t}} | Identical total consumer loss for equivalent price rise |
| **Domestic Producer Gain** | {{1/2 * (Q_1 + Q_3) * t}} | Identical redistribution to domestic firms (trapezoid!) |
| **Revenue / Quota Rent** | {{t * (Q_4 - Q_3)}} | **Tariff:** goes to domestic government. **Quota:** accrues as windfall quota rent to licence holders / foreign exporters (unless auctioned!) |
| **Production Inefficiency DWL** | {{1/2 * (Q_3 - Q_1) * t}} | Higher-cost domestic resources replace cheaper world output |
| **Consumption Loss DWL** | {{1/2 * (Q_2 - Q_4) * t}} | Consumers priced out whose {{MB > P_w}} |
| **Total Deadweight Loss** | {{1/2 * t * [(Q_3 - Q_1) + (Q_2 - Q_4)]}} | Always verify: {{CS Loss = PS Gain + Revenue + Prod DWL + Cons DWL}}! |

### 3. Exchange-Rate Conversions & Asymmetric Percentage Swings
- If {{1 USD = e SGD}}, then a good priced at {{$X}} USD costs {{e * X}} SGD, and a good priced at {{S$Y}} costs {{Y / e}} USD.
- **Percentage change of the base currency (USD):** {{((e_2 - e_1) / e_1) * 100%}}.
- **Percentage change of the quote currency (SGD):** Convert to \`USD per 1 SGD\` ({{1/e}}) first — or use {{((e_1 / e_2) - 1) * 100%}}. Never assume the two percentages have the same magnitude!

### 4. Balance of Payments (BoP) Accounting Identity
- **Current Account (CA)** = Balance of trade in goods + Balance of trade in services + Net primary income (wages, interest, dividends) + Net secondary income (remittances, foreign aid transfers).
- **Capital Account (KA)** = Capital transfers (debt forgiveness) + non-produced, non-financial assets.
- **Financial Account (FA)** = Net FDI + Net portfolio investment + Official reserve assets (remember: reserve **accumulation** is a debit \`−\`, reserve **drawdown/sale** is a credit \`+\`!).
- **Fundamental Identity:** {{CA + KA + FA + Net Errors & Omissions = 0}}. A persistent Current Account deficit must be financed by a net Financial/Capital Account surplus.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 330" role="img" aria-label="Tariff welfare diagram showing domestic demand and supply, world price Pw, post-tariff price Pw plus t, domestic producer surplus gain area a, production deadweight loss triangle b, government tariff revenue rectangle c, and consumption deadweight loss triangle d">
  <rect width="560" height="330" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="24" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">Import Tariff Welfare Geometry (Areas a, b, c, d)</text>
  <!-- Axes -->
  <line x1="65" y1="270" x2="415" y2="270" stroke="#1f2937" stroke-width="2"/>
  <line x1="65" y1="45" x2="65" y2="270" stroke="#1f2937" stroke-width="2"/>
  <text x="420" y="274" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1f2937">Quantity</text>
  <text x="58" y="42" text-anchor="end" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1f2937">Price ($)</text>
  <!-- Domestic S: (65,245) to (315,65), slope = -180/250 = -0.72
       Domestic D: (65,65) to (395,263), slope = 198/330 = 0.6
       Pw at y = 210:
         Q1 on S: 245 - 0.72*(x-65) = 210 => x-65 = 48.6 => x1 = 113.6
         Q2 on D: 65 + 0.6*(x-65) = 210 => x-65 = 241.7 => x2 = 306.7
       Pw + t at y = 165 (height 45 px):
         Q3 on S: 245 - 0.72*(x-65) = 165 => x-65 = 111.1 => x3 = 176.1
         Q4 on D: 65 + 0.6*(x-65) = 165 => x-65 = 166.7 => x4 = 231.7 -->
  <!-- Area a: PS gain trapezoid -->
  <polygon points="65,165 176.1,165 113.6,210 65,210" fill="#bbf7d0" opacity="0.85"/>
  <!-- Area b: Production DWL -->
  <polygon points="113.6,210 176.1,165 176.1,210" fill="#fca5a5" opacity="0.85"/>
  <!-- Area c: Govt Tariff Revenue -->
  <rect x="176.1" y="165" width="55.6" height="45" fill="#fde68a" opacity="0.9"/>
  <!-- Area d: Consumption DWL -->
  <polygon points="231.7,165 231.7,210 306.7,210" fill="#fca5a5" opacity="0.85"/>
  <!-- World supply lines -->
  <line x1="65" y1="210" x2="395" y2="210" stroke="#0f766e" stroke-width="2.2"/>
  <line x1="65" y1="165" x2="395" y2="165" stroke="#b45309" stroke-width="2.2" stroke-dasharray="6 4"/>
  <!-- Domestic S & D -->
  <line x1="65" y1="245" x2="315" y2="65" stroke="#047857" stroke-width="2.6"/>
  <line x1="65" y1="65" x2="395" y2="263" stroke="#1d4ed8" stroke-width="2.6"/>
  <!-- Vertical dotted guides -->
  <line x1="113.6" y1="210" x2="113.6" y2="270" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="176.1" y1="165" x2="176.1" y2="270" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="231.7" y1="165" x2="231.7" y2="270" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="306.7" y1="210" x2="306.7" y2="270" stroke="#475569" stroke-width="1.2" stroke-dasharray="4 3"/>
  <!-- Area letter labels -->
  <text x="103" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#065f46">a</text>
  <text x="158" y="201" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#991b1b">b</text>
  <text x="204" y="192" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#92400e">c</text>
  <text x="253" y="201" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="800" fill="#991b1b">d</text>
  <!-- Axis labels -->
  <text x="58" y="214" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#0f766e">Pw</text>
  <text x="58" y="169" text-anchor="end" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#b45309">Pw+t</text>
  <text x="114" y="286" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">Q1</text>
  <text x="176" y="286" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">Q3</text>
  <text x="232" y="286" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">Q4</text>
  <text x="307" y="286" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#334155">Q2</text>
  <!-- Curve names -->
  <text x="302" y="65" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#047857">S dom</text>
  <text x="380" y="250" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1d4ed8">D dom</text>
  <text x="355" y="204" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#0f766e">Sw</text>
  <text x="347" y="159" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#b45309">Sw + t</text>
  <!-- Legend -->
  <rect x="415" y="58" width="134" height="190" rx="10" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
  <text x="424" y="78" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1f2937">Welfare Areas</text>
  <text x="424" y="99" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#065f46">a: Producer Gain</text>
  <text x="424" y="114" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">1/2 (Q1+Q3) × t</text>
  <text x="424" y="136" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">b: Prod. DWL</text>
  <text x="424" y="151" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">1/2 (Q3−Q1) × t</text>
  <text x="424" y="173" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#92400e">c: Tariff Revenue</text>
  <text x="424" y="188" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">(Q4−Q3) × t</text>
  <text x="424" y="210" font-family="system-ui,sans-serif" font-size="10.5" font-weight="700" fill="#991b1b">d: Cons. DWL</text>
  <text x="424" y="225" font-family="system-ui,sans-serif" font-size="9.5" fill="#475569">1/2 (Q2−Q4) × t</text>
  <text x="424" y="242" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#1d4ed8">CS Loss = a+b+c+d</text>
</svg>`,
      diagramCaption:
        "A tariff lifts domestic price from Pw to Pw + t, cutting imports from (Q2 − Q1) to (Q4 − Q3). Consumer surplus falls by a + b + c + d, of which a transfers to domestic producers, c to government revenue, and b + d vanish as deadweight welfare loss.",
      workedExamples: [
        {
          title: "Complete Tariff Welfare Breakdown",
          problem:
            "Solar panels trade at a world price of **$200**. At $200, domestic supply is {{Q_1 = 20}} thousand units and domestic demand is {{Q_2 = 100}} thousand units. A **$40 specific tariff** raises the domestic price to **$240**, shifting domestic supply to {{Q_3 = 35}} thousand and demand to {{Q_4 = 80}} thousand. Calculate (a) tariff revenue, (b) domestic producer surplus gain, (c) total deadweight welfare loss, and (d) verify total consumer surplus loss.",
          steps: [
            "Post-tariff imports {{= Q_4 - Q_3 = 80 - 35 = 45}} thousand units. Government tariff revenue {{= 40 * 45 = 1800}} ($1,800 thousand = $1.80 million).",
            "Domestic producer surplus gain (trapezoid a): {{1/2 * (Q_1 + Q_3) * t = 1/2 * (20 + 35) * 40 = 1100}} ($1,100 thousand).",
            "Production DWL (triangle b): {{1/2 * (35 - 20) * 40 = 300}} ($300 thousand). Consumption DWL (triangle d): {{1/2 * (100 - 80) * 40 = 400}} ($400 thousand). Total DWL {{= 300 + 400 = 700}} ($700 thousand).",
            "Consumer surplus loss check (trapezoid a+b+c+d): {{1/2 * (100 + 80) * 40 = 3600}} ($3,600 thousand). Sum of components {{= 1100 + 300 + 1800 + 400 = 3600}} — exact match!",
          ],
          answer:
            "Tariff revenue = $1,800k; Producer gain = $1,100k; Total DWL = $700k ($300k production + $400k consumption); Consumer loss = $3,600k.",
          yourTurn: {
            question:
              "A **$30 per-tonne tariff** on imported rice raises domestic supply from {{Q_1 = 40}} thousand tonnes to {{Q_3 = 52}} thousand tonnes and cuts domestic demand from {{Q_2 = 110}} thousand tonnes to {{Q_4 = 90}} thousand tonnes. Calculate the **total deadweight welfare loss** (in $ thousand).",
            answer: { type: "number", value: 480, display: "$480 thousand" },
            solution:
              "Production DWL = 1/2 × (52 − 40) × 30 = $180 thousand. Consumption DWL = 1/2 × (110 − 90) × 30 = $300 thousand. Total DWL = 180 + 300 = $480 thousand.",
          },
        },
        {
          title: "Asymmetric Exchange-Rate Swings & BoP Reconstruction",
          problem:
            "(a) The USD/SGD exchange rate moves from **1 USD = 1.35 SGD** to **1 USD = 1.26 SGD**. Calculate the percentage depreciation of the USD and the percentage appreciation of the SGD (to 2 d.p.).\n(b) Country Z reports: Trade in goods −$18 bn, Trade in services +$12 bn, Primary income −$4 bn, Secondary income +$2 bn, Capital account +$1 bn, Net errors & omissions −$0.5 bn. Calculate its **Current Account** and **Financial Account** balances.",
          steps: [
            "Percentage change in USD (base currency): {{((1.26 - 1.35) / 1.35) * 100 = -6.67%}} (USD depreciates by 6.67%).",
            "Percentage change in SGD (quote currency): invert rates (`1 SGD = 1/1.35 = 0.74074 USD` → `1/1.26 = 0.79365 USD`), or directly {{((1.35 / 1.26) - 1) * 100 = +7.14%}} (SGD appreciates by 7.14%).",
            "Current Account {{= -18 + 12 - 4 + 2 = -8}} (−$8.0 billion deficit).",
            "Using {{CA + KA + FA + NEO = 0}}: {{-8 + 1 + FA - 0.5 = 0}} → {{FA = +7.5}} (+$7.5 billion Financial Account surplus).",
          ],
          answer:
            "USD fell 6.67%, SGD rose 7.14% (notice asymmetry!); Current Account = −$8.0 bn, Financial Account = +$7.5 bn.",
        },
      ],
      keyPoints: [
        "Always check the **Consumer Surplus Loss Identity** on tariff problems: `CS Loss = PS Gain + Revenue + Prod DWL + Cons DWL`.",
        "Under an unauctioned import quota, area `c` is captured as **quota rent** by foreign exporters or domestic importers — increasing the domestic economy's net welfare loss to `b + c + d` if foreign exporters capture `c`!",
        "Never invert an exchange-rate percentage by merely flipping the minus sign: if currency A falls by `x%`, currency B rises by `x / (1 − x/100)`%.",
        "Always confirm whether a comparative-advantage table reports **output per resource** (divide other / self) or **input hours per unit** (divide self / other).",
      ],
      whyItWorks:
        "Why does a tariff create TWO deadweight loss triangles? Between `Q_1` and `Q_3`, domestic supply lies above `P_w`, meaning domestic producers use resources worth more than the world price to make goods that could have been imported cheaply (allocative waste `b`). Between `Q_4` and `Q_2`, demand lies above `P_w`, meaning consumers who valued the good above its true world opportunity cost are priced out (consumption loss `d`).",
      strategies: [
        "Label `Q_1, Q_3, Q_4, Q_2` in strictly increasing left-to-right order along the horizontal axis before touching your calculator.",
        "Keep a crisp sign ledger (`+` credit inflows vs `−` debit outflows) when summing Balance of Payments rows; double-check that official reserve **additions** carry a minus sign.",
        "In exchange-rate conversion chains, write the currency unit next to every figure (`$200 × 1.26 SGD/USD = S$252`) so division vs multiplication errors become impossible.",
      ],
      thinkDeeper:
        "How does replacing an import tariff with an equivalent **domestic production subsidy** (raising domestic output from `Q_1` to `Q_3` while leaving consumer price at `P_w`) change the total deadweight loss? Notice triangle `d` disappears completely — why might a government still prefer a tariff in a developing economy?",
    },

    // =========================================================================
    // SECTION 4: 10-MARK POLICY RECOMMENDATION
    // =========================================================================
    {
      id: "p3-ten-mark-policy",
      heading: "Mastering the 10-Mark HL Paper 3 Policy Recommendation Question",
      level: "HL",
      discovery: {
        problem:
          "Two HL candidates answer the same 10-mark Paper 3 Policy Recommendation: *\"Using the text/data provided and your knowledge of economics, recommend a policy which could be introduced by the government of Valoria to reduce its 6.4% structural unemployment rate and narrow its Gini coefficient of 0.49.\"* Candidate A writes a tidy essay describing five different policies (subsidies, lower interest rates, tariffs, education, minimum wages) with zero numbers from the stimulus. Candidate B commits to ONE primary policy (targeted vocational retraining & regional apprenticeship subsidies), anchors directly in Valoria's `6.4%` structural unemployment, `Gini = 0.49`, `debt-to-GDP = 42%`, and `k = 2.0`, explains the `LRAS`/`AD` transmission, evaluates time lags + fiscal cost + geographic immobility, and adds a complementary transfer buffer. Which candidate enters Band 8–10, and what separates them?",
        idea:
          "Candidate A is capped in **Band 3–4** because IB Paper 3 explicitly penalises 'shopping lists' of generic policies unlinked to the case study. Candidate B hits **Band 8–10 (9–10/10)** by committing clearly to a **single coherent policy recommendation** (optionally supported by a targeted complement), weaving quantitative findings from earlier sub-parts directly into the rationale, unpacking rigorous economic theory/transmission, and evaluating context-specific constraints!",
      },
      body: `Each HL Paper 3 exam contains **two compulsory 10-mark Policy Recommendation questions** (\`commandTerm: "Recommend"\`) — worth **20 out of 60 marks (33%)**. Unlike Paper 1 essays, you do **not** bring external real-world examples; instead, your evidence is **the unseen stimulus text, data tables, and the exact calculations you just completed in parts (a)–(e)**!

### The Official IB HL Paper 3 10-Mark Markbands
| Band | Marks | What Examiners Actually Look For |
|---|---|---|
| **Band 0** | 0 | No relevant standard reached. |
| **Band 1** | 1–2 | Vague or unsupported policy claim; minimal theory and almost no reference to the stimulus text or data. |
| **Band 2** | 3–4 | Policy identified with basic economic theory or a list of multiple unfocused policies; superficial use of text/data; little or no evaluation. |
| **Band 3** | 5–7 | Clear recommended policy justified with accurate economic theory/transmission and explicit references to text/data; some valid strengths/limitations considered, though synthesis or evaluation may be uneven. |
| **Band 4** | 8–10 | **Fully justified, decisive recommendation** seamlessly anchored in BOTH stimulus text/data AND earlier quantitative findings; thorough causal transmission (with accurate diagram logic); nuanced evaluation of stakeholder impacts, short- vs long-run trade-offs, elasticities/assumptions, and pragmatic complementary measures. |

### The D-A-T-E-C Blueprint for Band 8–10 (15–18 Minutes per 10m Q)
1. **D — Decide Decisively (2 sentences):** Commit to **ONE primary policy** (e.g., *a targeted $6 bn interventionist capital-spending package on green grids and youth training*, OR *a $25/tonne carbon tax paired with low-income household rebates*). Never hedge with *"the government could do A, B, C, or D."*
2. **A — Anchor in Stimulus & Your Calculations:** Quote at least **3–4 specific figures** from the tables/extracts and **explicitly reference your own Paper 3 calculations** (e.g., *"Given our calculated multiplier \`k = 2.5\` and $15 bn deflationary gap, a $6 bn injection closes the gap while respecting the low 38% debt-to-GDP ratio"*).
3. **T — Trace the Transmission Mechanism (+ Diagram Logic):** Explain *how* the policy solves the targeted economic problem step by step, referencing the exact curve shifts (e.g. \`AD\` rightwards along Keynesian \`AS\`, or \`S = MPC\` shifting towards \`MSC\`, or \`LRAS\` shifting rightwards) and explaining why alternative policies fit less well in this context (e.g., monetary policy blocked by a 0.5% zero lower bound).
4. **E — Evaluate Context-Specific Trade-Offs (2–3 Deep Points):** Use **SLAP**:
   - **S**takeholders (low-income households, exporters, domestic firms, taxpayers — equity vs efficiency),
   - **L**ags & Short-Run vs Long-Run conflicts (capital projects take 2–4 years; J-curve lag on depreciation),
   - **A**ssumptions & Elasticities (\`PED\` determines whether a carbon tax cuts emissions or mainly raises regressive revenue; high \`MPM\` shrinks actual \`k\`),
   - **P**riorities & Fiscal/External Constraints (opportunity cost, budget deficit, WTO retaliation risk).
5. **C — Complementary Measure & Reasoned Judgement (3 sentences):** Add ONE targeted complementary policy that directly neutralises your biggest identified limitation (e.g., recycling indirect-tax revenue into lump-sum transfers to offset regressivity) and conclude clearly why the recommended package delivers the strongest net gain.`,
      diagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" role="img" aria-label="Five-pillar D-A-T-E-C architecture diagram showing how Decision, Anchor Data, Transmission Mechanism, Evaluation of Trade-offs, and Complementary Policy build from Band 1-2 up to Band 8-10 on HL Paper 3">
  <rect width="560" height="320" rx="14" fill="#fffdf8" stroke="#e5dcc8" stroke-width="1.5"/>
  <text x="280" y="25" text-anchor="middle" font-family="system-ui,sans-serif" font-size="14" font-weight="700" fill="#1f2937">D-A-T-E-C Architecture for the 10-Mark Paper 3 Policy Question</text>
  <!-- 5 Pillars -->
  <rect x="20" y="48" width="96" height="162" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="68" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="#1e40af">D</text>
  <text x="68" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e3a8a">Decide</text>
  <text x="68" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e3a8a">Commit to ONE</text>
  <text x="68" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e3a8a">primary policy</text>
  <text x="68" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e3a8a">(no shopping</text>
  <text x="68" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e3a8a">list of 4 ideas!)</text>
  <text x="68" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#1d4ed8">~2 mins</text>

  <rect x="126" y="48" width="96" height="162" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="174" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="#92400e">A</text>
  <text x="174" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#78350f">Anchor Data</text>
  <text x="174" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">Cite 3–4 figures</text>
  <text x="174" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">from tables +</text>
  <text x="174" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">YOUR prior P3</text>
  <text x="174" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#78350f">calculations</text>
  <text x="174" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#b45309">Throughout</text>

  <rect x="232" y="48" width="96" height="162" rx="10" fill="#d1fae5" stroke="#059669" stroke-width="1.5"/>
  <text x="280" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="#065f46">T</text>
  <text x="280" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#064e3b">Transmission</text>
  <text x="280" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#064e3b">Step-by-step</text>
  <text x="280" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#064e3b">causal chain +</text>
  <text x="280" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#064e3b">exact curve</text>
  <text x="280" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#064e3b">shifts &amp; why</text>
  <text x="280" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#047857">~5 mins</text>

  <rect x="338" y="48" width="96" height="162" rx="10" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="386" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="#991b1b">E</text>
  <text x="386" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#7f1d1d">Evaluate</text>
  <text x="386" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7f1d1d">Stakeholders,</text>
  <text x="386" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7f1d1d">SR vs LR lags,</text>
  <text x="386" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7f1d1d">elasticities &amp;</text>
  <text x="386" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#7f1d1d">fiscal limits</text>
  <text x="386" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#b91c1c">~6 mins</text>

  <rect x="444" y="48" width="96" height="162" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
  <text x="492" y="72" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="800" fill="#5b21b6">C</text>
  <text x="492" y="92" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#4c1d95">Complement</text>
  <text x="492" y="114" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#4c1d95">Add 1 targeted</text>
  <text x="492" y="128" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#4c1d95">mitigator +</text>
  <text x="492" y="142" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#4c1d95">clear final</text>
  <text x="492" y="156" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#4c1d95">judgement</text>
  <text x="492" y="194" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9" font-weight="700" fill="#6d28d9">~3 mins</text>

  <!-- Markband progress bar -->
  <text x="20" y="238" font-family="system-ui,sans-serif" font-size="11.5" font-weight="700" fill="#1f2937">IB Paper 3 10-Mark Band Ladder:</text>
  <rect x="20" y="248" width="98" height="44" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
  <text x="69" y="267" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#475569">Band 1–2</text>
  <text x="69" y="282" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#64748b">Vague claim</text>

  <rect x="128" y="248" width="118" height="44" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="187" y="267" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#92400e">Band 3–4</text>
  <text x="187" y="282" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#92400e">Generic / list</text>

  <rect x="256" y="248" width="132" height="44" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="322" y="267" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11" font-weight="700" fill="#1e40af">Band 5–7</text>
  <text x="322" y="282" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" fill="#1e40af">D + A + T (+ partial E)</text>

  <rect x="398" y="248" width="142" height="44" rx="6" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
  <text x="469" y="267" text-anchor="middle" font-family="system-ui,sans-serif" font-size="11.5" font-weight="800" fill="#065f46">Band 8–10 ★</text>
  <text x="469" y="282" text-anchor="middle" font-family="system-ui,sans-serif" font-size="9.5" font-weight="700" fill="#065f46">Full D-A-T-E-C synthesis</text>
</svg>`,
      diagramCaption:
        "Hitting Band 8–10 requires all five D-A-T-E-C pillars: commit to one primary policy, anchor it in your calculations and stimulus data, trace the economic transmission, evaluate 2–3 context-specific trade-offs, and pair with a targeted complementary mitigator.",
      workedExamples: [
        {
          title: "Band 8–10 Policy Blueprint: Republic of Meridia (Deflationary Gap)",
          problem:
            "**Stimulus Summary — Republic of Meridia:** Real GDP growth = **0.4%**, CPI inflation = **2.1%**, Deflationary gap = **$15 billion**, Youth unemployment = **16.5%**, Debt-to-GDP = **38%**, Central bank base rate = **0.5%**, Business confidence = low, Multiplier calculated in part (b) = **2.5** (`MPS = 0.15`, `MPT = 0.15`, `MPM = 0.10`).\n\n*Recommend a policy that the government of Meridia could introduce to close its deflationary gap and reduce youth unemployment.* [10 marks]",
          steps: [
            "**D — Decision:** Recommend **expansionary fiscal policy via a $6 billion targeted capital-spending package** on clean-energy grid upgrades and subsidised youth technical apprenticeships (rather than monetary easing, which is constrained near the 0.5% zero lower bound amid weak business confidence).",
            "**A — Anchor Data:** Using the earlier multiplier {{k = 2.5}}, a **$6 billion** injection generates {{2.5 * 6 = 15}} ($15 bn) in aggregate demand, directly closing the $15 bn deflationary gap. Meridia's low **38% debt-to-GDP** provides ample fiscal space, and mild **2.1% inflation** limits overheating risk.",
            "**T — Transmission:** Higher `G` injects income directly into construction and engineering supply chains, shifting `AD` rightwards along the relatively flat segment of the Keynesian `AS` curve (`Y_1 → Y_f`) and cutting cyclical unemployment. Simultaneously, training apprenticeships reduce skills mismatch among the **16.5% unemployed youth**, shifting `LRAS` rightwards in the long run.",
            "**E — Evaluate Trade-Offs:** (1) *Implementation lag:* infrastructure projects take 12–24 months to tender and build, delaying short-run relief. (2) *Import leakage risk:* if solar/grid machinery is imported, `MPM` rises above `0.10`, shrinking actual `k` below `2.5` so the $6 bn package under-shoots full employment. (3) *Partial crowding out & opportunity cost:* borrowing $6 bn could nudge bond yields higher if confidence recovers quickly, and carries an opportunity cost against healthcare.",
            "**C — Complementary Measure & Judgement:** Pair the capital package with temporary **targeted youth hiring tax credits** (faster impact lag to bridge the 12-month construction delay). Overall, targeted fiscal capital spending best aligns Meridia's fiscal headroom, multiplier size, and structural youth needs.",
          ],
          answer:
            "Band 8–10 structure: Commit to $6 bn targeted fiscal capital + apprenticeship spending, cite k = 2.5, $15 bn gap, 38% debt, 0.5% interest rate, 16.5% youth unemployment, trace AD + LRAS shifts, evaluate lags/import leakages/crowding out, and add a short-run hiring credit complement.",
          yourTurn: {
            question:
              "In the Meridia case above (`$6 billion` fiscal injection, `MPS + MPT = 0.30`), suppose imported capital machinery raises `MPM` from `0.10` to `0.20`. Calculate the **actual total increase in Real GDP** (in $ billion) achieved by the `$6 billion` stimulus.",
            answer: { type: "number", value: 12, display: "$12 billion" },
            solution:
              "New MPW = 0.30 + 0.20 = 0.50, so new multiplier k = 1 / 0.50 = 2.0. Actual ΔReal GDP = 2.0 × $6 billion = $12 billion ($3 billion short of the $15 billion gap — a razor-sharp quantitative evaluation point!).",
          },
        },
        {
          title: "Evaluating Policy Fit: Rejecting a Mismatched Alternative",
          problem:
            "Why would recommending **expansionary monetary policy (cutting interest rates)** score poorly in Meridia's stimulus, and how can mentioning it briefly actually **strengthen** your Band 8–10 fiscal recommendation?",
          steps: [
            "Meridia's base interest rate is already **0.5%** (near the zero lower bound) and **business confidence is low** — classical liquidity-trap conditions where cheaper borrowing fails to spur private investment (`I`).",
            "Do NOT waste two paragraphs writing a second recommendation; instead, devote **two crisp contrast sentences** in your rationale explaining why direct fiscal spending outperforms monetary easing given Meridia's exact data (`0.5%` rate vs `38%` debt-to-GDP).",
            "Examiners award top-band synthesis marks when you justify not only *why your chosen policy works*, but *why it beats the obvious alternative in this specific country's data*.",
          ],
          answer:
            "Briefly ruling out monetary policy via the 0.5% zero lower bound and low confidence sharpens synthesis without diluting commitment to ONE primary policy.",
        },
      ],
      keyPoints: [
        "Commit to **ONE primary policy** in your opening sentence — listing 3–4 equal policies caps you in Band 3–4.",
        "Always quote your **own earlier Paper 3 calculations** (`k`, `DWL`, `PED`, `ATR`, `CA deficit`) inside the 10-mark answer.",
        "Briefly explain why a competing policy fits worse in *this* stimulus (e.g., high debt blocks fiscal stimulus; zero lower bound limits monetary policy; inelastic demand limits tariffs).",
        "Always end with **one targeted complementary measure** that fixes your primary policy's biggest limitation (e.g., revenue recycling for regressive carbon taxes).",
      ],
      whyItWorks:
        "IB Paper 3 tests the **Tinbergen Principle** of real-world economic policy: a single policy instrument rarely hits efficiency, equity, and macro stability simultaneously without side effects. By recommending a focused primary instrument grounded in empirical data and pairing it with one corrective complement, you think like a central bank or treasury economist rather than a textbook summary.",
      strategies: [
        "Budget **18 minutes** per 10-mark Policy Recommendation (36 minutes total out of 105 minutes) — never leave the second 10-mark question rushed with 5 minutes remaining!",
        "Spend 90 seconds boxing 4 data points in the stimulus before writing: (1) target problem metric, (2) your calculated value, (3) a constraint (debt, inflation, BoP, elasticity), (4) a vulnerable stakeholder group.",
        "Never invent external real-world anecdotes (save those for Paper 1 Part b!) — every piece of evidence in Paper 3 must come from the stimulus and economic theory.",
      ],
      thinkDeeper:
        "Suppose a stimulus describes a small, trade-dependent economy (`MPM = 0.45`) with **cost-push stagflation** (`6.8%` inflation and `−0.5%` growth) and high debt (`92%` of GDP). Why would **neither** broad expansionary fiscal policy **nor** tight monetary policy cleanly solve both goals — and what targeted interventionist/market-based supply-side policy would you recommend instead?",
    },
  ],

  learn: {
    flashcards: [
      {
        front: "How do you modify `Q_s = c + dP` when a specific indirect tax `t` is imposed?",
        back: "Replace `P` with `(P − t)`: `Q_s' = c + d(P − t) = (c − dt) + dP`. Producers need price `P` to be `$t` higher to supply the same quantity.",
        level: "HL",
      },
      {
        front: "How do you modify `Q_s = c + dP` when a per-unit subsidy `s` is granted?",
        back: "Replace `P` with `(P + s)`: `Q_s' = c + d(P + s) = (c + ds) + dP`. Producers receive `P + s` per unit, shifting supply downwards/rightwards.",
        level: "HL",
      },
      {
        front: "Formula for Consumer Surplus & Producer Surplus (linear market with `c < 0`)?",
        back: "`CS = ½ × Q_e × (P_max − P_e)` where `P_max = a/b`; `PS = ½ × Q_e × (P_e − P_min)` where `P_min = −c/d`. If `c > 0`, `PS` is a trapezoid `½(c + Q_e)P_e`!",
        level: "HL",
      },
      {
        front: "Linear tax incidence shortcut for `Q_d = a − bP` and `Q_s = c + dP`?",
        back: "Consumer share of the tax wedge = `d / (b + d)`; Producer share = `b / (b + d)`. The steeper (more inelastic) side bears the larger burden.",
        level: "HL",
      },
      {
        front: "Deadweight Welfare Loss (DWL) of a specific tax `t` or subsidy `s`?",
        back: "`DWL = ½ × t × (Q_e − Q_t)` for a tax; `DWL = ½ × s × (Q_s1 − Q_e)` for a subsidy (with no externalities).",
        level: "HL",
      },
      {
        front: "Firm profit maximisation vs revenue maximisation vs short-run shut-down?",
        back: "Profit max: `MC = MR` (abnormal profit `= (AR − AC) × Q`). Revenue max: `MR = 0`. Short-run shut-down: `P < AVC` (TR < TVC).",
        level: "HL",
      },
      {
        front: "Formula linking Nominal GDP, Real GDP, and the GDP Deflator?",
        back: "`Real GDP = (Nominal GDP / GDP Deflator) × 100`, and `GDP Deflator = (Nominal GDP / Real GDP) × 100`.",
        level: "HL",
      },
      {
        front: "How do you compute annual CPI inflation between two non-base years (`CPI_1` and `CPI_2`)?",
        back: "`Inflation % = [(CPI_2 − CPI_1) / CPI_1] × 100` — ALWAYS divide by `CPI_1`, never subtract index points!",
        level: "HL",
      },
      {
        front: "Difference between Marginal Tax Rate (MTR) and Average Tax Rate (ATR)?",
        back: "`MTR = ΔTax / ΔIncome` (rate on the next dollar, i.e., top bracket). `ATR = (Total Tax / Gross Income) × 100%`. Progressive tax always has `ATR < MTR` above the zero-tax band.",
        level: "HL",
      },
      {
        front: "Open-economy Keynesian multiplier formula & gap-closing equation?",
        back: "`k = 1 / (1 − MPC_d) = 1 / (MPS + MPT + MPM)`. Required injection to close output gap `ΔY`: `ΔG = ΔY / k`.",
        level: "HL",
      },
      {
        front: "Opportunity cost from an Output table vs an Input (labour-hours) table?",
        back: "Output table: `OC(1 X) = Max Y / Max X`. Input table: `OC(1 X) = Hours for X / Hours for Y`. Specialise in the lower opportunity cost!",
        level: "HL",
      },
      {
        front: "All four tariff welfare areas (`a, b, c, d`) in one identity?",
        back: "CS Loss `= a + b + c + d`, where `a = ½(Q_1+Q_3)t` (producer gain), `b = ½(Q_3−Q_1)t` (prod DWL), `c = (Q_4−Q_3)t` (tariff revenue), `d = ½(Q_2−Q_4)t` (cons DWL).",
        level: "HL",
      },
      {
        front: "Key welfare difference between an import tariff and an equivalent import quota?",
        back: "With a tariff, rectangle `c` goes to the domestic government as revenue. With an unauctioned quota, `c` becomes quota rent (often captured by foreign exporters, widening domestic welfare loss to `b + c + d`).",
        level: "HL",
      },
      {
        front: "Why does `1 USD` falling by `10%` against `SGD` NOT mean `SGD` rises by `10%`?",
        back: "Because the base changes! If `e` falls by `10%` (`×0.90`), `1/e` rises by `1/0.90 − 1 = +11.11%`.",
        level: "HL",
      },
      {
        front: "Balance of Payments fundamental identity?",
        back: "`Current Account + Capital Account + Financial Account + Net Errors & Omissions = 0`. A Current Account deficit must be matched by net capital/financial inflows.",
        level: "HL",
      },
      {
        front: "What does D-A-T-E-C stand for on the 10-mark HL Paper 3 Policy Question?",
        back: "**D**ecide (1 clear policy) · **A**nchor (stimulus data + prior P3 calculations) · **T**ransmission (mechanism + diagram logic) · **E**valuate (stakeholders, lags, elasticities, fiscal constraints) · **C**omplementary policy + judgement.",
        level: "HL",
      },
    ],
    mustKnow: [
      "HL Paper 3 is 30% of the IB HL Economics grade: 1 hour 45 minutes, 2 compulsory 30-mark case studies (60 marks total), with a compulsory 10-mark Policy Recommendation at the end of EACH question (20/60 marks).",
      "For linear supply `Q_s = c + dP`, a specific tax `t` changes the equation to `Q_s' = c + d(P − t)` and a subsidy `s` changes it to `Q_s' = c + d(P + s)`.",
      "Always verify Producer Surplus geometry: if `c < 0` it is a triangle `½ Q_e (P_e − P_min)`, whereas if `c > 0` it is a trapezoid `½(c + Q_e)P_e`.",
      "Never compute progressive income tax by multiplying total income by the top bracket rate — slice bracket by bracket and verify `ATR < MTR`.",
      "In the open-economy Keynesian multiplier, sum ALL three marginal withdrawals (`k = 1 / [MPS + MPT + MPM]`) before dividing the GDP gap (`ΔG = ΔY / k`).",
      "For Real GDP per capita growth, convert Nominal GDP to Real GDP (`Nominal / Deflator × 100`), divide by population for each year, and ONLY THEN calculate percentage change.",
      "On tariff problems, total deadweight loss equals production DWL `½(Q_3−Q_1)t` PLUS consumption DWL `½(Q_2−Q_4)t`, and CS loss must equal `a + b + c + d`.",
      "Exchange-rate percentage changes are asymmetric: `%Δ(quote currency) = [(e_1 / e_2) − 1] × 100`, not `−%Δ(base currency)`.",
      "On the 10-mark Policy Recommendation, NEVER bring outside real-world examples — synthesise the stimulus text, data tables, and your own earlier Paper 3 calculations.",
      "Commit to ONE primary policy upfront, justify why it outperforms an alternative in that data context, evaluate 2–3 SLAP trade-offs, and add ONE targeted complementary mitigator to reach Band 8–10.",
    ],
    misconceptions: [
      {
        wrong: "Adding a `$4` specific tax to `Q_s = −10 + 5P` gives `Q_s' = −14 + 5P`.",
        right: "Subtracting `4` from `c` shifts quantity left by `4`, NOT price up by `$4`! Substitute `(P − 4)` for `P`: `Q_s' = −10 + 5(P − 4) = −30 + 5P`.",
        level: "HL",
      },
      {
        wrong: "If CPI rises from `120` to `126`, the inflation rate is `6%`.",
        right: "Inflation is the percentage change from the prior year's CPI: `[(126 − 120) / 120] × 100 = 5.0%`, not `6%`.",
        level: "HL",
      },
      {
        wrong: "Someone earning `$75,000` in a `25%` top tax bracket pays `25% × $75,000 = $18,750` in income tax.",
        right: "In a progressive system, `25%` is only the **marginal** rate on dollars inside that top bracket; earlier brackets are taxed at lower rates, so the average tax rate is strictly below `25%`.",
        level: "HL",
      },
      {
        wrong: "In an open economy with `MPC = 0.80` and `MPM = 0.20`, the multiplier is still `1 / (1 − 0.80) = 5`.",
        right: "If `MPC` includes spending on imports, domestic re-spending is `MPC_d = 0.80 − 0.20 = 0.60`, so `k = 1 / (1 − 0.60) = 2.5`. Always check `k = 1 / (MPS + MPT + MPM)`!",
        level: "HL",
      },
      {
        wrong: "If a tariff raises domestic price from `$10` to `$12`, domestic producer surplus rises by a rectangle `Q_3 × $2`.",
        right: "Existing output `Q_1` gains `$2` per unit, while new output `(Q_3 − Q_1)` climbs up the supply curve, forming a **trapezoid** `½(Q_1 + Q_3) × $2` — the missing triangle is production DWL `b`!",
        level: "HL",
      },
      {
        wrong: "In the 10-mark Paper 3 Policy Question, listing four different government policies shows broader economic knowledge and scores Band 8–10.",
        right: "Examiners explicitly cap 'shopping-list' answers in Band 3–4. Commit to ONE clear primary policy anchored in the stimulus data, then add at most one targeted complementary mitigator.",
        level: "HL",
      },
      {
        wrong: "A Current Account deficit means the Balance of Payments does not balance (total BoP < 0).",
        right: "Total BoP always sums to zero (`CA + KA + FA + NEO = 0`): a Current Account deficit is financed by a matching Capital + Financial Account surplus (net FDI, portfolio inflows, borrowing, or reserve drawdown).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Forgetting units or scale (`$ thousand`, `$ million`, `$ billion`, `%`) on Paper 3 calculations — IB markschemes withhold the final accuracy mark when scale is missing or misstated.",
      "Rounding intermediate steps too early (e.g. rounding Real GDP or exchange rates to 1 d.p. mid-chain) — keep at least 4 significant figures until the final 2 d.p. answer.",
      "Confusing consumer price `P_c` with producer net price `P_p` when calculating post-tax or post-subsidy revenue, expenditure, or incidence.",
      "Computing Producer Surplus as a triangle `½ × Q_e × P_e` when the supply curve has a positive horizontal intercept `c > 0` (omitting the base rectangle `c × P_e`).",
      "Using the total working-age population instead of the **labour force** as the denominator for the unemployment rate.",
      "Reporting only ONE deadweight loss triangle (production OR consumption) when asked for the **total** welfare loss of an import tariff.",
      "Writing a generic Paper 1 essay for the 10-mark Paper 3 Policy Recommendation without quoting a single number from the stimulus tables or your own earlier parts (a)–(e).",
      "Running out of time on Question 2's 10-mark Policy Recommendation — losing 8–10 marks on one neglected section can drop an entire IB grade boundary.",
    ],
    mnemonics: [
      {
        topic: "10-Mark Paper 3 Policy Structure",
        device: "D-A-T-E-C",
        explanation:
          "**D**ecide (1 clear policy) · **A**nchor (stimulus figures + your calculations) · **T**ransmission (mechanism + diagram shifts) · **E**valuate (SLAP trade-offs) · **C**omplementary policy + judgement.",
        level: "HL",
      },
      {
        topic: "Paper 3 Policy Evaluation Dimensions",
        device: "SLAP",
        explanation:
          "**S**takeholders (equity vs efficiency) · **L**ags & Long-run vs Short-run · **A**ssumptions & Elasticities (`PED`, `MPM`, confidence) · **P**riorities & Fiscal/External Constraints.",
        level: "HL",
      },
      {
        topic: "Open-Economy Multiplier Withdrawals",
        device: "S-T-M Leaks (Save, Tax, iMport)",
        explanation:
          "Before taking `k = 1 / MPW`, check all three leaks out of the circular flow: `MPS` (Saving) + `MPT` (Taxation) + `MPM` (iMports).",
        level: "HL",
      },
      {
        topic: "Tariff Welfare Accounting Check",
        device: "a-b-c-d = CS Loss",
        explanation:
          "Left to right across the tariff band: **a** (producer gain trapezoid) + **b** (prod DWL) + **c** (govt revenue rectangle) + **d** (cons DWL) must ALWAYS equal total Consumer Surplus loss!",
        level: "HL",
      },
    ],
    realWorld: [
      {
        title: "Singapore's Carbon Tax + U-Save Rebates (D-A-T-E-C in Action)",
        detail:
          "Singapore lifted its carbon tax from S$5/tonne to S$25/tonne in 2024 (en route to S$50–80 by 2030) to internalise negative production externalities (`MSC > MPC`), while recycling revenue into targeted U-Save utility vouchers for HDB households — directly solving the regressive incidence limitation of indirect taxes.",
        emoji: "🇸🇬",
      },
      {
        title: "Open-Economy Multiplier Leakages in Small Trading Hubs",
        detail:
          "Empirical estimates place Singapore's and Ireland's short-run fiscal multipliers near `0.5–1.0` compared with `1.4–2.0` in larger, less import-intensive economies, because high `MPM` causes fiscal stimulus to leak rapidly into imported goods and services.",
        emoji: "🚢",
      },
      {
        title: "US Washing-Machine & Steel Tariffs: Welfare Triangles Measured",
        detail:
          "Economists studying the 2018 US washing-machine tariffs estimated domestic consumer surplus losses of ~$1.5 billion per year versus ~$82 million in tariff revenue and ~$817,000 cost per domestic manufacturing job created — textbook proof of how `a + b + c + d` far exceeds `c`.",
        emoji: "🏭",
      },
      {
        title: "Post-2021 Inflation & Real Wage Erosion Across OECD Economies",
        detail:
          "When headline CPI rose 7–10% across the UK, US, and Eurozone in 2022, workers receiving 5% nominal wage rises suffered a ~2–4% fall in real purchasing power — illustrating why Paper 3 distinguishes nominal from deflated real variables.",
        emoji: "📊",
      },
      {
        title: "Zero Lower Bound & Targeted Fiscal Policy (Eurozone & Japan)",
        detail:
          "When central bank policy rates sat at `0%` or below during 2015–2021, monetary policy transmission stalled amid weak private confidence, pushing governments toward targeted green and digital public investment packages.",
        emoji: "🏦",
      },
    ],
    videos: [
      {
        title: "IB Economics HL Paper 3 Complete Guide & Exam Technique",
        channel: "EconplusDal",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+HL+Paper+3+policy+recommendation",
      },
      {
        title: "HL Paper 3 Linear Demand & Supply, Indirect Tax & Deadweight Loss",
        channel: "Brad Cartwright Economics",
        url: "https://www.youtube.com/results?search_query=IB+Economics+HL+Paper+3+linear+demand+supply+tax+deadweight+loss",
      },
      {
        title: "Keynesian Multiplier, Progressive Tax & Real GDP Calculations (IB HL)",
        channel: "Jason Welker Economics",
        url: "https://www.youtube.com/results?search_query=Jason+Welker+IB+Economics+Keynesian+multiplier+progressive+tax+calculations",
      },
      {
        title: "How to Score 9–10/10 on the HL Paper 3 Policy Recommendation Question",
        channel: "IB Economics Revision",
        url: "https://www.youtube.com/results?search_query=IB+Economics+Paper+3+10+mark+policy+recommendation+band+9+10",
      },
    ],
    formulas: [
      {
        name: "Linear Market Equilibrium",
        formula: "{{Q_d = a - bP}}, {{Q_s = c + dP}} → {{P_e = (a - c) / (b + d)}}",
        note: "Substitute Pe into BOTH equations to verify Qe.",
        level: "HL",
      },
      {
        name: "Post-Tax & Post-Subsidy Supply",
        formula: "Tax: {{Q_s' = c + d(P - t)}} · Subsidy: {{Q_s' = c + d(P + s)}}",
        note: "Always shift P inside the brackets; never add/subtract t directly to c.",
        level: "HL",
      },
      {
        name: "Consumer & Producer Surplus (Linear)",
        formula: "{{CS = 1/2 * Q_e * (a/b - P_e)}} · {{PS = 1/2 * Q_e * (P_e + c/d)}} (for {{c < 0}})",
        note: "If c > 0, PS is the trapezoid 1/2 × (c + Qe) × Pe.",
        level: "HL",
      },
      {
        name: "Specific Tax Revenue & DWL",
        formula: "{{Revenue = t * Q_t}} · {{DWL = 1/2 * t * (Q_e - Q_t)}}",
        note: "Consumer burden = (Pc − Pe) × Qt; Producer burden = (Pe − Pp) × Qt.",
        level: "HL",
      },
      {
        name: "Firm Profit Max & Abnormal Profit",
        formula: "{{MC = MR}} → {{Profit = (AR - AC) * Q^* = TR - TC}}",
        note: "Short-run shut-down if P < AVC; revenue maximisation at MR = 0.",
        level: "HL",
      },
      {
        name: "Real GDP & GDP Deflator",
        formula: "{{Real GDP = (Nominal GDP / Deflator) * 100}}",
        note: "Compute Real GDP per capita = Real GDP / Population BEFORE finding % growth.",
        level: "HL",
      },
      {
        name: "Weighted CPI & Inflation Rate",
        formula: "{{CPI = sum(w_i * I_i)}} · {{Inflation = ((CPI_2 - CPI_1) / CPI_1) * 100%}}",
        note: "Always divide by the initial period's CPI.",
        level: "HL",
      },
      {
        name: "Unemployment & Participation Rates",
        formula: "{{U = (Unemployed / Labour Force) * 100%}} · {{LFPR = (Labour Force / Working-Age Pop) * 100%}}",
        note: "Labour Force = Employed + Unemployed actively seeking work.",
        level: "HL",
      },
      {
        name: "Progressive Tax: ATR vs MTR",
        formula: "{{ATR = (Total Tax / Gross Income) * 100%}} · {{MTR = Delta Tax / Delta Income}}",
        note: "Slice income band by band; progressive taxes have ATR < MTR.",
        level: "HL",
      },
      {
        name: "Open-Economy Keynesian Multiplier",
        formula: "{{k = 1 / (1 - MPC_d) = 1 / (MPS + MPT + MPM)}} · {{Delta G = Delta Y / k}}",
        note: "Sum all three marginal leakages before inverting.",
        level: "HL",
      },
      {
        name: "Tariff Welfare Components",
        formula: "{{Rev = t(Q_4 - Q_3)}} · {{DWL_{total} = 1/2 * t * [(Q_3 - Q_1) + (Q_2 - Q_4)]}}",
        note: "Check CS Loss = 1/2(Q2+Q4)t = PS Gain + Rev + Prod DWL + Cons DWL.",
        level: "HL",
      },
      {
        name: "Asymmetric Exchange-Rate Change & BoP",
        formula: "{{%Delta Quote = ((e_1 / e_2) - 1) * 100%}} · {{CA + KA + FA + NEO = 0}}",
        note: "Official reserve accumulation enters Financial Account with a minus (−) sign.",
        level: "HL",
      },
    ],
  },
};
