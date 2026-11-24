import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1 — EXCHANGE RATES & CURRENCY REGIMES (4.5)
  // answerIndex spread: [0:4, 1:4, 2:4, 3:3]
  // ===========================================================================
  {
    id: "4b-exchange-bop-development-m1",
    title: "MCQ Paper 1 — Exchange Rates & Currency Regimes (4.5)",
    level: "SL",
    questions: [
      {
        id: "4b-exchange-bop-development-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "exchange-rates-regimes",
        strategy: "Bilateral percentage change",
        question:
          "Under a floating exchange rate regime, the exchange rate moves from `1 USD = 1.40 SGD` to `1 USD = 1.26 SGD`. Which statement accurately describes this movement?",
        options: [
          "The USD depreciated by 10% against the SGD",
          "The USD appreciated by 10% against the SGD",
          "The USD was devalued by 10% against the SGD",
          "The SGD depreciated by 10% against the USD",
        ],
        answerIndex: 0,
        explanation:
          "Using {{((e_2 - e_1) / e_1) * 100}} = {{((1.26 - 1.40) / 1.40) * 100}} = `−10%`, each USD now buys `10%` fewer SGD, so the USD **depreciated** by `10%` (and the SGD appreciated). 'Devalued' is wrong because the regime is floating, not fixed.",
        hints: [
          "Check whether `1 USD` buys more or fewer SGD after the change.",
          "Remember that market-driven movements in a floating regime are called appreciation or depreciation, never revaluation or devaluation.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "exchange-rates-regimes",
        strategy: "Forex curve shifters",
        question:
          "In a freely floating foreign exchange market for the Australian Dollar (AUD), what happens if Australia's central bank raises domestic interest rates significantly above foreign interest rates, ceteris paribus?",
        options: [
          "Demand for AUD shifts left and supply of AUD shifts right, depreciating the AUD",
          "Demand for AUD shifts right and supply of AUD shifts left, appreciating the AUD",
          "Supply of AUD shifts right while demand stays constant, depreciating the AUD",
          "Both demand and supply of AUD shift right equally, leaving the AUD unchanged",
        ],
        answerIndex: 1,
        explanation:
          "Higher Australian interest rates attract foreign short-term financial capital ('hot money'), raising demand for AUD (`D` shifts right), while fewer Australian savers convert AUD into foreign assets (`S` shifts left). Both shifts drive the AUD upward (**appreciation**).",
        hints: [
          "Think about what higher domestic deposit and bond yields do to international investors ('hot money').",
          "To invest in Australian banks or bonds, foreign investors must first buy AUD.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "exchange-rates-regimes",
        strategy: "Export price conversion",
        question:
          "A British machinery firm sells a turbine priced at `£480` to US buyers. If the exchange rate appreciates from `1 GBP = 1.25 USD` to `1 GBP = 1.50 USD`, how does the US-dollar price of the turbine change?",
        options: [
          "It falls from $720 to $600, making British exports cheaper in the US",
          "It rises from $540 to $680, reducing US demand for British machinery",
          "It rises from $600 to $720, making British exports costlier in the US",
          "It stays fixed at $600 because the GBP price did not change",
        ],
        answerIndex: 2,
        explanation:
          "Initially, `480 × 1.25 = $600`. After the GBP appreciates to `1.50 USD`, US importers must pay `480 × 1.50 = $720` — an increase of `$120` (`+20%`), reducing UK export price competitiveness.",
        hints: [
          "Multiply the GBP price by each exchange rate (`USD per GBP`) to find the old and new USD prices.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "exchange-rates-regimes",
        strategy: "Fixed vs floating terminology",
        question:
          "Under a fixed exchange rate regime, a central bank announces an official downward adjustment of its currency peg from `1 Peso = 0.50 USD` to `1 Peso = 0.40 USD`. What is the correct economic term for this policy decision?",
        options: [
          "Market depreciation of the domestic currency",
          "Official revaluation of the domestic currency",
          "Managed appreciation of the domestic currency",
          "Official devaluation of the domestic currency",
        ],
        answerIndex: 3,
        explanation:
          "An official, deliberate reduction in the fixed peg by monetary authorities is called a **devaluation**. 'Depreciation' applies only to market-driven falls under floating or managed regimes, while 'revaluation' is an official upward reset of a peg.",
        hints: [
          "Is the value moving upward or downward, and is it driven by markets or an official peg announcement?",
          "Pair 'fixed regime' with the 're-/de-valuation' pair of terms.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "exchange-rates-regimes",
        strategy: "Relative inflation channel",
        question:
          "Suppose inflation in Country A averages `9%` per year while inflation in its trading partners averages `2%` per year under floating exchange rates. What is the most likely long-run effect on Country A's currency?",
        options: [
          "Appreciation, as higher domestic prices boost export revenue and currency demand",
          "Depreciation, as weaker export competitiveness reduces demand and higher imports raise supply",
          "Appreciation, as foreign investors rush into Country A's consumer goods markets",
          "Stability, as domestic inflation has no effect on international trade flows",
        ],
        answerIndex: 1,
        explanation:
          "Higher relative inflation makes Country A's exports more expensive abroad (`D` for its currency shifts left) while cheaper foreign goods draw in more imports (`S` of its currency shifts right). Both shifts push Country A's currency downward (**depreciation**).",
        hints: [
          "Compare how `9%` domestic inflation vs `2%` foreign inflation affects the relative price of exports and imports.",
          "Trace the resulting shifts in both `D` (from foreigners buying exports) and `S` (from residents buying imports).",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "exchange-rates-regimes",
        strategy: "Defending a fixed peg",
        question:
          "Country X pegs its currency (the Kron) to the USD at `1 Kron = 1.00 USD`, but persistent trade deficits push the free-market equilibrium down to `0.85 USD`. Which central bank intervention directly defends the `1.00 USD` peg?",
        options: [
          "Selling USD foreign exchange reserves to buy Krons on the forex market",
          "Printing additional Krons to purchase US Treasury bonds on the forex market",
          "Cutting domestic interest rates to stimulate domestic consumption and imports",
          "Lowering import tariffs to encourage households to buy cheaper US products",
        ],
        answerIndex: 0,
        explanation:
          "At `1.00 USD`, there is an excess supply of Krons. To absorb that surplus and prop up the Kron at `1.00 USD`, the central bank must **sell USD reserves and buy Krons**, shifting `D(Kron)` rightward. Printing Krons or cutting interest rates would worsen downward pressure.",
        hints: [
          "At the pegged price above market equilibrium, is there excess demand or excess supply of Krons?",
          "To eliminate an excess supply of its own currency, must the central bank buy Krons or sell Krons?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "exchange-rates-regimes",
        strategy: "Singapore MAS S$NEER framework",
        question:
          "Why does the Monetary Authority of Singapore (MAS) manage the Singapore Dollar against a trade-weighted basket (S$NEER) rather than targeting a domestic policy interest rate?",
        options: [
          "Singapore's constitution prohibits domestic commercial banks from setting lending rates",
          "Singapore exports exclusively to the United States and uses the USD as legal tender",
          "Singapore operates a strict gold standard requiring zero exchange-rate fluctuations",
          "Extreme trade openness makes the exchange rate far stronger at controlling imported inflation",
        ],
        answerIndex: 3,
        explanation:
          "With total trade exceeding three times GDP and nearly all food, energy, and raw materials imported, Singapore's price level is heavily driven by import prices. Steering the **S$NEER band** directly controls imported inflation and export competitiveness far more effectively than domestic interest rates.",
        hints: [
          "Think about how much of what Singapore consumes and uses in production is imported from abroad.",
          "How does a gradual appreciation of the S$NEER affect the SGD price of imported food and energy?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q08",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "exchange-rates-regimes",
        strategy: "Inverse currency conversion",
        question:
          "A European university charges an Australian student in Euros when the exchange rate is `1 EUR = 1.60 AUD`. How many Euros can the student obtain by converting `AUD 1,200` (ignoring bank fees)?",
        options: [
          "1,920 EUR",
          "800 EUR",
          "750 EUR",
          "640 EUR",
        ],
        answerIndex: 2,
        explanation:
          "Since `1 EUR = 1.60 AUD`, divide the AUD amount by `1.60`: {{1200 / 1.60}} = `750 EUR`. Multiplying (`1,200 × 1.60 = 1,920`) is a classic reciprocal slip.",
        hints: [
          "Is `1 EUR` worth more or less than `1 AUD`?",
          "Since each Euro costs `1.60 AUD`, should the number of Euros be smaller or larger than `1,200`?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "exchange-rates-regimes",
        strategy: "Macro effects of appreciation",
        question:
          "How does a sharp, sustained appreciation of a country's floating currency typically affect domestic inflation and cyclical unemployment?",
        options: [
          "Lowers inflation via cheaper imports and weaker net exports, while raising cyclical unemployment",
          "Raises inflation via costlier imports and stronger net exports, while lowering cyclical unemployment",
          "Lowers both inflation and cyclical unemployment by expanding export-sector output",
          "Raises both inflation and cyclical unemployment by shifting SRAS rightward and AD rightward",
        ],
        answerIndex: 0,
        explanation:
          "An appreciation lowers domestic prices of imported raw materials and consumer goods (shifting SRAS right, cutting cost-push inflation) and reduces `(X − M)` (shifting AD left, cutting demand-pull inflation). The drop in AD and export competitiveness typically raises **cyclical unemployment**.",
        hints: [
          "Trace both the **SRAS** channel (imported input costs) and the **AD** channel (net exports `X − M`).",
          "If net exports fall because domestic exports are costlier abroad, what happens to employment in export industries?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "exchange-rates-regimes",
        strategy: "Foreign-currency debt risk",
        question:
          "An emerging-market airline earns its ticket revenue in domestic currency (Rupia) but borrowed `$500 million` in US-dollar bonds. What happens if the Rupia depreciates by `25%` against the USD?",
        options: [
          "Its USD debt burden falls in Rupia terms, strengthening its balance sheet",
          "Its USD debt repayments remain unchanged in Rupia terms because bond rates are fixed",
          "Its USD debt repayments become much costlier in Rupia terms, raising default risk",
          "Its domestic ticket revenue automatically rises by 25% in USD terms",
        ],
        answerIndex: 2,
        explanation:
          "When the Rupia depreciates, each US dollar of interest and principal requires substantially more Rupia to purchase — inflating the domestic-currency cost of servicing foreign-denominated debt and raising bankruptcy or sovereign-default risk.",
        hints: [
          "If each USD now costs more Rupia, does paying back `$500 million` take more or fewer Rupia?",
          "Remember that the airline's revenues are in Rupia while its debt obligation is fixed in USD.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "exchange-rates-regimes",
        strategy: "Policy trade-offs across regimes",
        question:
          "What is a primary macroeconomic advantage of adopting a freely floating exchange rate compared with maintaining a fixed exchange rate peg?",
        options: [
          "Complete elimination of exchange-rate uncertainty for international exporters and investors",
          "Preservation of independent domestic monetary policy to target inflation or recession",
          "Guaranteed elimination of cost-push inflation caused by imported raw material shocks",
          "Elimination of short-term speculative capital flows across foreign exchange markets",
        ],
        answerIndex: 1,
        explanation:
          "Under a floating regime, the central bank does not have to dedicate interest rates or foreign reserves to defending a peg, preserving **independent monetary policy** for domestic growth and inflation goals. Fixed rates — not floating rates — reduce bilateral currency uncertainty.",
        hints: [
          "Under a fixed peg, what happens if a country is in recession but faces downward pressure on its peg?",
          "Contrast monetary autonomy under floating vs fixed exchange rates.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "exchange-rates-regimes",
        strategy: "Import boom forex shift",
        question:
          "Rapid economic growth in Country B causes households to buy far more imported Japanese cars. On a forex diagram for Country B's currency (priced in JPY), how is this represented?",
        options: [
          "A rightward shift of the demand curve for Country B's currency, causing appreciation",
          "A leftward shift of the supply curve for Country B's currency, causing appreciation",
          "A leftward shift of the demand curve for Country B's currency, leaving supply unchanged",
          "A rightward shift of the supply curve for Country B's currency, causing depreciation",
        ],
        answerIndex: 3,
        explanation:
          "To pay Japanese automakers in JPY, residents of Country B must **sell (supply)** more of their own currency on the foreign exchange market. Thus the **supply curve** of Country B's currency shifts right, lowering its equilibrium value (**depreciation**).",
        hints: [
          "Who initiates the import transaction — domestic residents or foreign residents?",
          "When domestic buyers need foreign currency to buy imports, do they demand or supply their own currency?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "exchange-rates-regimes",
        strategy: "Upward pressure on a fixed peg",
        question:
          "Country Y maintains a fixed peg against the USD, but a massive export boom pushes the free-market equilibrium well above the peg. To stop its currency from rising above the peg, Country Y's central bank sells domestic currency and buys USD. What is a major macroeconomic risk of sustaining this intervention?",
        options: [
          "Rapid depletion of Country Y's foreign exchange reserves, triggering a currency crash",
          "Severe domestic deflation caused by a shrinking domestic money supply",
          "Expansion of the domestic money supply, fuelling demand-pull inflationary pressure",
          "Immediate loss of export competitiveness caused by an appreciating exchange rate",
        ],
        answerIndex: 2,
        explanation:
          "Defending a peg against *upward* pressure **accumulates** foreign reserves (it does not deplete them!), because the central bank prints/sells its own currency to buy USD. Unless sterilised, injecting domestic currency expands the money supply and risks **inflation**.",
        hints: [
          "When a central bank buys USD and sells its own currency, do foreign reserves rise or fall?",
          "What happens to the domestic money supply when the central bank continually injects domestic currency into markets?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "exchange-rates-regimes",
        strategy: "Self-fulfilling speculation",
        question:
          "If global currency speculators strongly expect the Swiss Franc (CHF) to rise over the next three months, how do their actions affect the CHF exchange rate *today*?",
        options: [
          "They sell CHF today to lock in current prices, causing immediate depreciation",
          "They buy CHF today to profit later, shifting demand right and causing immediate appreciation",
          "They delay all transactions for three months, leaving today's exchange rate unchanged",
          "They borrow CHF at low rates and convert it to USD, shifting supply right today",
        ],
        answerIndex: 1,
        explanation:
          "Expecting a higher future price, speculators purchase CHF *immediately* so they can resell it at a profit later. This surge in demand shifts `D(CHF)` right today, creating a **self-fulfilling appreciation**.",
        hints: [
          "If you expect an asset to be worth more in three months, do you buy it today or sell it today?",
          "Which curve shifts when speculators rush to hold CHF?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "exchange-rates-regimes",
        strategy: "Managed float policy band",
        question:
          "Under a managed float regime with a `±2%` central bank policy band, the domestic currency weakens rapidly due to a speculative capital outflow and reaches the **lower boundary** of the band. What action must the central bank take to keep the currency inside the band?",
        options: [
          "Intervene by buying domestic currency using foreign reserves or tightening monetary policy",
          "Intervene by selling domestic currency to accumulate additional foreign exchange reserves",
          "Allow the currency to fall freely below the lower boundary without any market action",
          "Lower domestic interest rates sharply to discourage foreign investors from holding bonds",
        ],
        answerIndex: 0,
        explanation:
          "At the lower boundary (floor), the central bank steps in to prevent further depreciation by **buying its own currency using foreign reserves** (shifting `D` right) and/or tightening monetary policy to attract capital inflows.",
        hints: [
          "If the currency is hitting the *floor* (lower boundary), is it threatening to depreciate too much or appreciate too much?",
          "To push a currency upward back into the band, does the central bank buy or sell its own currency?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2 — BALANCE OF PAYMENTS, MARSHALL–LERNER & J-CURVE (4.6)
  // answerIndex spread: [0:4, 1:4, 2:3, 3:4]
  // ===========================================================================
  {
    id: "4b-exchange-bop-development-m2",
    title: "MCQ Paper 2 — Balance of Payments, Marshall–Lerner & J-Curve (4.6)",
    level: "SL",
    questions: [
      {
        id: "4b-exchange-bop-development-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Current Account classification",
        question:
          "A Filipino nurse working in Singapore sends `SGD 1,200` home each month to support family members in Manila. How is this transaction recorded in the **Philippines'** Balance of Payments?",
        options: [
          "A credit entry in the Financial Account under portfolio investment",
          "A credit entry in the Current Account under secondary income",
          "A debit entry in the Current Account under primary income",
          "A credit entry in the Capital Account under capital transfers",
        ],
        answerIndex: 1,
        explanation:
          "Migrant remittances are one-way current transfers with no good, service, or financial asset exchanged in return, so they are recorded under **Secondary Income** in the Current Account — as a **credit (`+`)** for the receiving country (Philippines) and a debit (`−`) for the sending country.",
        hints: [
          "Does the family in Manila send back a good, service, or ownership of an asset in return for the money?",
          "Distinguish Primary Income (factor rewards like profits/dividends) from Secondary Income (current transfers like remittances).",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Current Account summation",
        question:
          "Country P reports the following annual Current Account items (in `$ billion`): Balance of trade in goods `= −45`, Balance of trade in services `= +22`, Net primary income `= −14`, Net secondary income `= +9`. What is Country P's Current Account balance?",
        options: [
          "A deficit of $23 billion",
          "A surplus of $28 billion",
          "A deficit of $37 billion",
          "A deficit of $28 billion",
        ],
        answerIndex: 3,
        explanation:
          "Sum all four Current Account sub-components: `−45 + 22 + (−14) + 9 = −28` (`$ billion`), representing a Current Account **deficit of `$28 billion`**. Stopping after goods and services (`−23`) omits primary and secondary income.",
        hints: [
          "Remember G-S-P-S: all four sub-accounts belong in the Current Account.",
          "Carefully add `−45 + 22 − 14 + 9` keeping track of every sign.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Primary Income vs Financial Account",
        question:
          "A US technology multinational builds a new `$800 million` microchip factory in Malaysia, and two years later sends `$90 million` of annual profits back to its US headquarters. How are these two transactions recorded in **Malaysia's** Balance of Payments?",
        options: [
          "Factory: credit in Financial Account (FDI); profit repatriation: debit in Current Account (primary income)",
          "Factory: credit in Current Account (goods); profit repatriation: debit in Financial Account (FDI)",
          "Factory: credit in Capital Account (transfers); profit repatriation: debit in Current Account (secondary income)",
          "Factory: debit in Financial Account (portfolio); profit repatriation: credit in Current Account (primary income)",
        ],
        answerIndex: 0,
        explanation:
          "Building a factory represents inward **Foreign Direct Investment (FDI)** — a **credit (`+`) in Malaysia's Financial Account**. Repatriating profits abroad is an outflow of investment income — a **debit (`−`) in Malaysia's Primary Income (Current Account)**.",
        hints: [
          "Distinguish the initial long-term capital investment (acquiring a productive asset) from the ongoing factor income flow (profits).",
          "In which direction does money flow across Malaysia's border in each transaction?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "BoP zero identity",
        question:
          "An economy records a Current Account deficit of `$32 billion`, a Capital Account surplus of `$4 billion`, and Net Errors and Omissions equal to `$0`. What must its Financial Account balance be?",
        options: [
          "A Financial Account deficit of $28 billion",
          "A Financial Account surplus of $36 billion",
          "A Financial Account surplus of $28 billion",
          "A Financial Account deficit of $36 billion",
        ],
        answerIndex: 2,
        explanation:
          "By the BoP accounting identity `CA + KA + FA + Errors & Omissions = 0`, we have `−32 + 4 + FA = 0`, which gives `FA = +$28 billion` (a Financial Account **surplus** of `$28 billion` financing the net Current + Capital shortfall).",
        hints: [
          "Write out `CA + KA + FA = 0` with signs (`−` for deficits, `+` for surpluses).",
          "Solve `−32 + 4 + FA = 0` for `FA`.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Capital Account scope",
        question:
          "Which transaction is correctly recorded in a country's **Capital Account** of the Balance of Payments?",
        options: [
          "A sovereign wealth fund purchasing foreign corporate equities on the London Stock Exchange",
          "An insurance company receiving premiums from overseas shipping clients",
          "A foreign automobile manufacturer constructing an assembly plant domestically",
          "A wealthy donor government granting formal external debt forgiveness to a developing nation",
        ],
        answerIndex: 3,
        explanation:
          "Debt forgiveness is a **capital transfer**, which belongs in the **Capital Account** (alongside non-produced, non-financial assets like patents or embassy land). Equities are Portfolio Investment (FA), insurance is Trade in Services (CA), and building a plant is FDI (FA).",
        hints: [
          "Remember that the IB Capital Account is small and distinct from the Financial Account (which holds FDI and portfolio investment).",
          "Look for either a capital transfer (such as debt forgiveness) or a non-produced, non-financial asset (such as patents).",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Reserve assets sign convention",
        question:
          "Country S posts a Current Account surplus of `+$50bn`, a Capital Account balance of `−$2bn`, Net FDI of `−$30bn`, Net Portfolio Investment of `−$11bn`, and Net Errors and Omissions of `$0`. What is the Reserve Assets entry in its Financial Account?",
        options: [
          "+$7bn, showing the central bank depleted its foreign exchange reserves",
          "−$7bn, showing the central bank accumulated $7bn of foreign exchange reserves",
          "−$9bn, showing the central bank accumulated $9bn of foreign exchange reserves",
          "+$48bn, showing a net capital inflow matching the Current Account surplus",
        ],
        answerIndex: 1,
        explanation:
          "First, `CA + KA + FA = 0` → `50 − 2 + FA = 0` → `FA = −$48bn`. Since `FA = FDI + Portfolio + Reserve Assets`, `−30 + (−11) + Reserve Assets = −48` → `Reserve Assets = −$7bn`. A negative entry means the central bank **accumulated** (bought) `$7bn` of foreign reserve assets.",
        hints: [
          "Find the total Financial Account balance first using `CA + KA + FA = 0`.",
          "Subtract Net FDI (`−30`) and Net Portfolio (`−11`) from total `FA`, remembering that buying foreign reserves is recorded as a negative (`−`) outflow.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Evaluating Current Account deficits",
        question:
          "Under which circumstance is a developing country's persistent Current Account deficit **least** likely to threaten long-term macroeconomic stability?",
        options: [
          "It is financed by long-term inward FDI importing machinery that expands future export capacity",
          "It is financed by volatile short-term foreign bank loans funding domestic consumer luxury imports",
          "It is financed by steadily depleting finite central bank foreign exchange reserves under a fixed peg",
          "It reflects collapsing export competitiveness caused by prolonged domestic hyperinflation",
        ],
        answerIndex: 0,
        explanation:
          "A Current Account deficit driven by capital-goods imports and financed by stable, long-term **FDI** expands productive capacity (shifting LRAS right) and builds future export revenues to service obligations — far healthier than hot-money borrowing or reserve depletion.",
        hints: [
          "Ask *what* is causing the deficit (productive capital imports vs consumption binge) and *how* it is financed (long-term FDI vs volatile hot money).",
          "Which financing source expands future productive capacity and export revenues without creating short-term rollover risk?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Expenditure-reducing vs switching policies",
        question:
          "A government responds to a large Current Account deficit by raising income taxes and cutting public spending to reduce Aggregate Demand and lower import expenditure. What type of policy is this, and what is its main macroeconomic drawback?",
        options: [
          "Expenditure-switching policy; main drawback is WTO retaliation from trading partners",
          "Supply-side policy; main drawback is very long implementation lags before productivity rises",
          "Expenditure-reducing policy; main drawback is slower growth and higher cyclical unemployment",
          "Expenditure-switching policy; main drawback is severe cost-push imported inflation",
        ],
        answerIndex: 2,
        explanation:
          "Contractionary fiscal policy shrinks national income (`Y`) to compress import demand (`M`) — an **expenditure-reducing** policy. Because AD shifts left, it directly conflicts with domestic objectives by slowing Real GDP growth and raising **cyclical unemployment**.",
        hints: [
          "Does raising income tax switch spending between domestic and foreign goods, or reduce *total* domestic spending?",
          "Trace a leftward shift of AD on an AD/AS diagram to identify the main domestic trade-off.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Apply",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Marshall–Lerner condition",
        question:
          "[HL] Country R begins with near-balanced trade and experiences a `10%` currency depreciation. If `PED_X = −0.45` and `PED_M = −0.70`, what does the Marshall–Lerner condition predict for Country R's trade balance?",
        options: [
          "The trade balance will worsen because both individual elasticities are numerically less than 1",
          "The trade balance will remain unchanged because the negative signs offset the depreciation",
          "The trade balance will worsen because the algebraic sum −1.15 is less than +1",
          "The trade balance will improve because the sum of absolute elasticities is 1.15, exceeding 1",
        ],
        answerIndex: 3,
        explanation:
          "Marshall–Lerner uses **absolute values**: {{|PED_X| + |PED_M|}} = `0.45 + 0.70 = 1.15 > 1`. Even though each individual elasticity is below `1`, their combined sum exceeds `1`, so export volume gains and import cuts outweigh higher import unit prices and the trade balance **improves**.",
        hints: [
          "Always take the **absolute values** of `PED_X` and `PED_M` before adding them.",
          "Compare `|−0.45| + |−0.70|` against the threshold `1`.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "J-curve short-run mechanism",
        question:
          "[HL] Why does the J-curve show a country's Current Account deficit initially **worsening** immediately after a currency depreciation?",
        options: [
          "Locked-in contracts keep volumes sluggish in the short run while domestic import prices jump immediately",
          "Central banks always raise tariffs immediately after a currency depreciates, cutting export revenue",
          "Export volumes fall in the short run because domestic exporters become less competitive overseas",
          "In the short run, |PED_X| + |PED_M| exceeds 1, causing import expenditure to surge permanently",
        ],
        answerIndex: 0,
        explanation:
          "Immediately after depreciation, existing trade contracts, consumer habits, and slow supplier switching make short-run demand price-inelastic ({{|PED_X| + |PED_M| < 1}}). Because domestic-currency import prices jump straight away while quantities barely change, total import spending rises faster than export earnings, **worsening** the Current Account in the short run.",
        hints: [
          "What changes instantly on day one of a depreciation: prices or traded quantities?",
          "In the short run, is `|PED_X| + |PED_M|` greater than 1 or less than 1?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Marshall–Lerner failure case",
        question:
          "[HL] A small oil-importing nation reliant on a single agricultural export has long-run elasticities `PED_X = −0.30` and `PED_M = −0.55`. If its currency depreciates by `15%`, what happens to its Current Account balance (assuming trade begins near balance)?",
        options: [
          "It improves steadily over time because export prices are 15% cheaper abroad",
          "It worsens because |PED_X| + |PED_M| = 0.85, so higher import bills outweigh volume gains",
          "It improves in the short run but deteriorates into a larger deficit in the long run",
          "It stays unchanged because inelastic imports cancel out inelastic exports automatically",
        ],
        answerIndex: 1,
        explanation:
          "Here {{|PED_X| + |PED_M|}} = `0.30 + 0.55 = 0.85 < 1`. Because the Marshall–Lerner condition fails even in the long run, the rise in domestic-currency import expenditure outweighs the modest rise in export revenue, causing the Current Account to **worsen**.",
        hints: [
          "Compute `|PED_X| + |PED_M|` and check whether it is above or below `1`.",
          "When import demand is highly inelastic (e.g. essential oil and food), what happens to total import spending when import prices rise `15%`?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Monetary policy BoP conflict",
        question:
          "Why might contractionary **monetary policy** (raising interest rates) be less effective than expected at shrinking a Current Account deficit under a floating exchange rate?",
        options: [
          "Higher interest rates immediately boost household consumption and raise import spending",
          "Higher interest rates shift LRAS rightward immediately, making foreign goods more attractive",
          "Higher interest rates directly increase government transfer payments to foreign residents",
          "Higher interest rates attract hot-money inflows that appreciate the currency and weaken net exports",
        ],
        answerIndex: 3,
        explanation:
          "While higher interest rates cut AD and income (reducing imports via the expenditure-reducing channel), they simultaneously attract foreign hot money that **appreciates** the floating currency — making exports costlier and imports cheaper, partially offsetting the Current Account improvement!",
        hints: [
          "Trace TWO separate effects of higher interest rates: one on domestic AD (`C` and `I`), and another on the foreign exchange market.",
          "How does a currency appreciation affect `(X − M)`?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Persistent Current Account surplus risks",
        question:
          "Which consequence is a recognised macroeconomic risk of running a **persistent, large Current Account surplus** year after year?",
        options: [
          "Upward appreciation pressure on the currency and protectionist retaliation by deficit partners",
          "Rapid exhaustion of central bank foreign exchange reserves and sovereign debt default",
          "Severe imported cost-push inflation caused by a continuously collapsing domestic currency",
          "Mandatory Financial Account surpluses forcing domestic firms to sell assets to foreigners",
        ],
        answerIndex: 0,
        explanation:
          "Persistent Current Account surpluses generate heavy foreign demand for the domestic currency (pushing it to appreciate and hurting future exports), risk domestic demand-pull inflation, sacrifice current domestic consumption, and often provoke **protectionist retaliation** (tariffs) from deficit trading partners.",
        hints: [
          "Think about how Germany's or China's prolonged trade surpluses have been received by deficit trading partners.",
          "Does a Current Account surplus create upward or downward pressure on the exchange rate?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "Supply-side BoP cure",
        question:
          "Why are **supply-side policies** (such as R&D subsidies, vocational training, and modernised ports) considered the most sustainable long-run remedy for a structural Current Account deficit?",
        options: [
          "They eliminate trade deficits within weeks without requiring any government expenditure",
          "They violate no currency pegs while automatically lowering domestic real wages to zero",
          "They lower unit costs and raise export quality without causing recession or trade retaliation",
          "They compress domestic Aggregate Demand sharply so households immediately stop buying imports",
        ],
        answerIndex: 2,
        explanation:
          "Unlike expenditure-reducing policies (which cause recession) or tariffs (which invite WTO disputes and retaliation), supply-side policies permanently improve productivity, unit costs, and non-price export quality — though they suffer from **long time lags** and fiscal costs.",
        hints: [
          "Compare supply-side policies against expenditure-reducing (recession risk) and tariffs (retaliation risk).",
          "How do higher productivity and better product quality affect export competitiveness?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m2-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Examine",
        guideRef: "bop-marshall-lerner-hl",
        strategy: "J-curve & inflation interaction",
        question:
          "[HL] Even if a country satisfies the long-run Marshall–Lerner condition (`|PED_X| + |PED_M| > 1`), which macroeconomic factor can **prevent** a currency depreciation from permanently improving its Current Account?",
        options: [
          "High spare capacity in domestic export factories allowing output to expand smoothly",
          "Imported cost-push inflation and wage demands eroding the initial gain in export competitiveness",
          "Long-run buyers discovering closer domestic substitutes for expensive imported consumer goods",
          "Expiring fixed-price import contracts enabling importers to switch toward local suppliers",
        ],
        answerIndex: 1,
        explanation:
          "If depreciation drives up prices of imported energy, components, and food — triggering domestic wage-price spirals (inflation) — domestic export prices rise again in real terms, wiping out the initial price-competitiveness advantage of the weaker currency.",
        hints: [
          "What happens to domestic production costs when imported oil and components become much costlier?",
          "Look for the factor that **erodes** export price competitiveness rather than helping volume adjustment.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3 — DEVELOPMENT INDICATORS, BARRIERS & STRATEGIES (4.7–4.10)
  // answerIndex spread: [0:3, 1:4, 2:4, 3:4]
  // ===========================================================================
  {
    id: "4b-exchange-bop-development-m3",
    title: "MCQ Paper 3 — Measuring Development, Barriers & Strategies (4.7–4.10)",
    level: "SL",
    questions: [
      {
        id: "4b-exchange-bop-development-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "measuring-development-barriers",
        strategy: "HDI three dimensions",
        question:
          "Which three indicators are combined to construct the United Nations Human Development Index (HDI)?",
        options: [
          "GDP per capita (market rate), Gini coefficient, and CO₂ emissions per capita",
          "Infant mortality rate, adult unemployment rate, and total foreign exchange reserves",
          "Life expectancy at birth, mean and expected years of schooling, and GNI per capita (PPP)",
          "Maternal mortality rate, parliamentary gender share, and household electricity access",
        ],
        answerIndex: 2,
        explanation:
          "The **HDI** combines three equally weighted dimensions: **Health** (life expectancy at birth), **Education** (mean and expected years of schooling), and **Standard of Living** (GNI per capita adjusted for PPP). It does NOT include inequality (Gini), gender shares (GII), or carbon emissions (HPI).",
        hints: [
          "Recall the three pillars: Health, Education, and Standard of Living.",
          "Check carefully whether HDI uses *GDP at market exchange rates* or *GNI per capita at PPP*.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "measuring-development-barriers",
        strategy: "Indicator direction check",
        question:
          "Country L achieves a **lower** Gender Inequality Index (GII) score of `0.14` compared with Country M's GII of `0.52`. What does this comparison indicate?",
        options: [
          "Country L has significantly greater gender equality across health, empowerment, and labour markets",
          "Country M has significantly greater gender equality because its GII value is closer to 1.00",
          "Country L has lower female life expectancy and fewer women represented in parliament",
          "Country M has higher overall HDI because GII is calculated directly by multiplying HDI by 0.7",
        ],
        answerIndex: 0,
        explanation:
          "The **GII** ranges from `0` (perfect gender equality) to `1` (extreme inequality) — so a **lower** value (`0.14` vs `0.52`) indicates **far better gender equality** in reproductive health, empowerment, and labour-force participation.",
        hints: [
          "Remember the mnemonic **G-M-G Down**: for GII, MPI, and Gini, values closer to `0` are better!",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-development-barriers",
        strategy: "IHDI percentage loss",
        question:
          "Country N records an HDI of `0.800` and an Inequality-Adjusted HDI (IHDI) of `0.624`. What is the percentage loss in human development caused by inequality?",
        options: [
          "17.6%",
          "28.2%",
          "18.0%",
          "22.0%",
        ],
        answerIndex: 3,
        explanation:
          "Percentage loss = {{((HDI - IHDI) / HDI) * 100}} = {{((0.800 - 0.624) / 0.800) * 100}} = {{(0.176 / 0.800) * 100}} = `22.0%`. Dividing by IHDI (`0.624`) gives the wrong `28.2%`, while `0.176 × 100 = 17.6%` forgets to divide by `0.800`.",
        hints: [
          "Subtract IHDI from HDI to get the absolute loss (`0.176`).",
          "Divide the absolute loss by the **original HDI** (`0.800`) and multiply by `100`.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "measuring-development-barriers",
        strategy: "PPP living-standard adjustment",
        question:
          "Why is GNI per capita measured at **Purchasing Power Parity (PPP)** preferred over market exchange rates when comparing living standards between Switzerland and India?",
        options: [
          "Market exchange rates ignore exports of manufactured goods in developing countries",
          "PPP adjusts for the lower cost of non-traded local goods and services in lower-income economies",
          "PPP converts all national incomes into gold ounces to remove global inflation completely",
          "Market exchange rates always overstate the real purchasing power of developing countries",
        ],
        answerIndex: 1,
        explanation:
          "Non-traded services (housing, local transport, haircuts, staple foods) are far cheaper in lower-income countries like India than in Switzerland. Using market exchange rates therefore **understates** real purchasing power in India; **PPP** equalises the cost of a common basket of goods.",
        hints: [
          "Does `$10` buy more local groceries and rent in New Delhi or in Zurich?",
          "Therefore, do market exchange rates *understate* or *overstate* real living standards in lower-income economies?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "measuring-development-barriers",
        strategy: "MPI vs Happy Planet Index",
        question:
          "Which composite indicator directly tracks overlapping household-level deprivations across nutrition, child mortality, years of schooling, clean drinking water, sanitation, and cooking fuel?",
        options: [
          "Human Development Index (HDI)",
          "Happy Planet Index (HPI)",
          "Multidimensional Poverty Index (MPI)",
          "Inequality-Adjusted HDI (IHDI)",
        ],
        answerIndex: 2,
        explanation:
          "The **Multidimensional Poverty Index (MPI)** measures acute poverty directly at the household level across three dimensions — Health (nutrition, child mortality), Education (schooling, attendance), and Living Standards (water, sanitation, fuel, electricity, housing, assets).",
        hints: [
          "Notice the exact household indicators: clean drinking water, sanitation, cooking fuel, and nutrition.",
          "Which index focuses specifically on acute **poverty** deprivations rather than national averages or ecological footprint?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "measuring-development-barriers",
        strategy: "Poverty cycle logic",
        question:
          "In the classic **poverty cycle (poverty trap)**, what is the direct causal link between low household incomes and persistently low labour productivity?",
        options: [
          "Low incomes trigger excessive household savings, causing chronic demand-pull inflation",
          "Low incomes drive rapid currency appreciation, pricing domestic manufactures out of markets",
          "Low incomes raise corporate tax receipts, crowding out private commercial bank lending",
          "Low incomes leave minimal savings and tax revenue, starving physical and human capital investment",
        ],
        answerIndex: 3,
        explanation:
          "When incomes hover near subsistence, households can barely save and governments collect minimal tax revenue — starving investment in machinery, roads, schools, and healthcare, which locks labour into **low productivity** and perpetuates low incomes.",
        hints: [
          "Follow the four-step loop: Low Income → Low ___ → Low ___ → Low Productivity.",
          "Think about how subsistence incomes limit both household savings and the government's ability to fund schools and clinics.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-development-barriers",
        strategy: "Terms of Trade calculation",
        question:
          "For a cocoa-exporting economy, the index of average export prices falls from `100` to `88` while the index of average import prices rises from `100` to `110`. What is its new Terms of Trade index?",
        options: [
          "125, showing a 25% improvement in purchasing power of exports",
          "80, showing a 20% deterioration in purchasing power of exports",
          "78, showing a 22% deterioration in purchasing power of exports",
          "90, showing a 10% deterioration in purchasing power of exports",
        ],
        answerIndex: 1,
        explanation:
          "Terms of Trade = {{(P_X / P_M) * 100}} = {{(88 / 110) * 100}} = `80`. Falling from `100` to `80` represents a `20%` **deterioration**: each unit of cocoa exports now buys `20%` fewer imported goods.",
        hints: [
          "Recall `ToT = (Export Price Index / Import Price Index) × 100`.",
          "Compute `(88 / 110) × 100` carefully.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "measuring-development-barriers",
        strategy: "Primary commodity volatility",
        question:
          "Why do developing economies heavily dependent on primary-commodity exports suffer much larger price and revenue swings than diversified manufacturing exporters?",
        options: [
          "Primary commodities have both price-inelastic demand and price-inelastic supply",
          "Primary commodities have high income elasticity of demand exceeding +2.5",
          "Primary commodities face perfectly elastic world supply curves in the short run",
          "Primary commodities are immune to weather shocks and global business cycles",
        ],
        answerIndex: 0,
        explanation:
          "Because primary commodities have **price-inelastic demand** (few close substitutes, small cost share) and **price-inelastic supply** (long agricultural growing seasons or mine lead times), small shifts in either curve cause huge price spikes and crashes.",
        hints: [
          "Sketch a steep demand curve and a steep supply curve — what happens to equilibrium price when supply shifts slightly due to drought?",
          "Recall how primary commodities compare with manufactured goods in both PED and PES.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "growth-development-strategies",
        strategy: "ISI vs Export Promotion",
        question:
          "What is a major long-run disadvantage of relying on **Import Substitution Industrialization (ISI)** as a trade strategy for economic development?",
        options: [
          "It exposes infant domestic firms to fierce foreign price competition before they can mature",
          "It requires abolishing all import tariffs and floating the exchange rate immediately",
          "It relies excessively on multinational corporations repatriating profits from export zones",
          "It shields inefficient domestic firms from competition and restricts economies of scale",
        ],
        answerIndex: 3,
        explanation:
          "By walling off domestic markets with high tariffs and quotas, ISI removes competitive pressure to innovate or cut costs and confines firms to a small domestic market — preventing **economies of scale** while raising input costs for other sectors.",
        hints: [
          "ISI protects domestic producers from foreign imports using tariffs and quotas — what happens to efficiency and market size?",
          "Consider why firms selling only inside a small protected domestic market struggle to reach minimum efficient scale.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "growth-development-strategies",
        strategy: "Tied bilateral aid critique",
        question:
          "Why do development economists strongly criticise **tied bilateral aid** compared with untied multilateral aid?",
        options: [
          "Tied aid can only be spent on emergency food relief and never on physical infrastructure",
          "Tied aid automatically cancels recipient countries' sovereign debt without conditionality",
          "Tied aid forces recipients to purchase costlier donor-country goods, cutting its real value",
          "Tied aid bypasses domestic governments entirely by channelling grants through local NGOs",
        ],
        answerIndex: 2,
        explanation:
          "Under **tied aid**, the recipient must spend the grant on goods, machinery, or consultants from the donor nation — often at prices `15–30%` above competitive world-market alternatives — reducing real value and displacing local suppliers.",
        hints: [
          "What condition is 'tied' to bilateral aid when a donor government attaches procurement strings?",
          "If a recipient cannot shop globally for the lowest competitive price, what happens to the real purchasing power of each aid dollar?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "growth-development-strategies",
        strategy: "FDI costs and benefits",
        question:
          "Which outcome represents a genuine economic **limitation** of Foreign Direct Investment (FDI) by multinational corporations in a developing country?",
        options: [
          "MNCs always finance projects by borrowing from the recipient's central bank reserves",
          "MNCs may repatriate profits abroad and use transfer pricing to reduce local tax payments",
          "MNCs are legally barred from transferring modern management or production technologies",
          "MNCs enter as a debit in the recipient's Financial Account, worsening its Balance of Payments",
        ],
        answerIndex: 1,
        explanation:
          "While inward FDI is a Financial Account credit (`+`) that brings jobs and technology, MNCs often **repatriate profits** (Primary Income debit) and shift taxable income to low-tax jurisdictions via **transfer pricing**, limiting domestic fiscal gains.",
        hints: [
          "Check the accounting sign of inward FDI (credit!) and recall how MNCs can minimise host-country corporate taxes.",
          "Think about what happens to a host country's Primary Income and tax base once an MNC's factory becomes profitable.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "measuring-development-barriers",
        strategy: "Debt-service ratio",
        question:
          "A developing economy earns `$12.0 billion` in annual export revenues and pays `$3.6 billion` in annual foreign debt interest and principal repayments. What is its debt-service ratio, and why does a high ratio hinder development?",
        options: [
          "30%; high debt servicing consumes foreign exchange and crowds out health and education budgets",
          "3.3%; high debt servicing prevents the central bank from issuing domestic currency notes",
          "30%; high debt servicing guarantees automatic debt cancellation under the World Bank",
          "33.3%; high debt servicing raises domestic savings and accelerates infrastructure construction",
        ],
        answerIndex: 0,
        explanation:
          "Debt-service ratio = {{(3.6 / 12.0) * 100}} = `30%`. Spending `30%` of export earnings on foreign debt repayments imposes a severe **opportunity cost**, diverting scarce foreign exchange and public budgets away from schools, clinics, and infrastructure.",
        hints: [
          "Divide annual debt servicing (`3.6`) by annual export earnings (`12.0`) and multiply by `100`.",
          "Think about the fiscal opportunity cost of spending 30% of foreign exchange on debt repayments.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "growth-development-strategies",
        strategy: "Microfinance & mobile banking",
        question:
          "How did Kenya's mobile-banking platform **M-Pesa** and Bangladesh's **Grameen Bank** microfinance model contribute to inclusive economic development?",
        options: [
          "By funding multi-billion-dollar national power grids and deep-water shipping ports",
          "By replacing commercial imports with heavily protected state-owned manufacturing monopolies",
          "By eliminating the need for universal secondary schooling or public healthcare clinics",
          "By expanding financial inclusion, lowering transaction costs, and empowering female micro-entrepreneurs",
        ],
        answerIndex: 3,
        explanation:
          "Microfinance provides small collateral-free credit (predominantly to women) while mobile banking slashes transaction costs and brings unbanked households into savings and remittance networks — though neither replaces large-scale public infrastructure or merit goods.",
        hints: [
          "What specific development barrier do missing rural bank branches and lack of collateral create?",
          "Keep scale in mind: can microloans build a multi-billion-dollar port?",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "growth-development-strategies",
        strategy: "IMF vs World Bank roles",
        question:
          "Which statement accurately distinguishes the core mandates of the **International Monetary Fund (IMF)** and the **World Bank**?",
        options: [
          "The IMF builds long-term rural schools, whereas the World Bank manages short-term currency pegs",
          "The IMF provides short-term BoP crisis stabilisation loans, whereas the World Bank funds long-term development",
          "The IMF enforces global WTO tariff rules, whereas the World Bank prints national currencies",
          "The IMF lends exclusively to private MNCs, whereas the World Bank provides emergency food aid",
        ],
        answerIndex: 1,
        explanation:
          "The **IMF** safeguards short-term macroeconomic and **Balance of Payments** stability via emergency liquidity loans (often with austerity conditionality), whereas the **World Bank** (IBRD/IDA) finances **long-term economic development and poverty reduction** (infrastructure, education, health, climate).",
        hints: [
          "Match 'short-term BoP / currency crisis' to one institution and 'long-term poverty reduction / infrastructure' to the other.",
          "Remember that World Bank lending funds schools, roads, and power grids, whereas IMF loans stabilise currencies and reserves.",
        ],
      },
      {
        id: "4b-exchange-bop-development-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "growth-development-strategies",
        strategy: "Market vs interventionist synthesis",
        question:
          "Why do modern development economists argue that neither pure **market-oriented** policies nor pure **interventionist** policies succeed alone?",
        options: [
          "Markets automatically guarantee perfect equity, while governments always outperform private exporters",
          "Interventionist policies eliminate all fiscal deficits, while market reforms eliminate all external debt",
          "Markets foster efficiency but under-provide merit goods, while state action fixes market failure but risks government failure",
          "Purely market-oriented policies prohibit FDI, while purely interventionist policies prohibit domestic taxation",
        ],
        answerIndex: 2,
        explanation:
          "Market-oriented strategies promote allocative efficiency, competition, and growth but fail to correct externalities, inequality, or missing merit/public goods; interventionist strategies build human capital and infrastructure but risk corruption, bureaucracy, and fiscal deficits. Lasting development requires **institutional balance**.",
        hints: [
          "Identify the core strength and core failure of *both* markets (market failure / equity) and governments (government failure / inefficiency).",
          "Think about why real-world successes like Singapore, South Korea, and Botswana combined trade openness with state investment in education and institutions.",
        ],
      },
    ],
  },
];
