import type { Paper } from "../../types";

export const mcqPapers: Paper[] = [
  // =========================================================================
  // MCQ PAPER 1 — Core Trade, Protection & Integration (SL/HL)
  // answerIndex spread: 0×4, 1×4, 2×4, 3×3
  // =========================================================================
  {
    id: "4a-trade-integration-m1",
    title: "MCQ Paper 1 — Core Trade, Protection & Integration (SL/HL)",
    questions: [
      {
        id: "4a-trade-integration-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "Why is access to international export markets especially critical for firms operating in small open economies such as Singapore or New Zealand?",
        options: [
          "Exporting guarantees fixed exchange rates against major global reserve currencies",
          "Foreign demand eliminates the need for domestic firms to invest in capital equipment",
          "Selling to larger global markets allows firms to exploit economies of scale and lower LRAC",
          "International trade prevents domestic wages from rising above foreign wage levels",
        ],
        answerIndex: 2,
        hints: [
          "Think about average production costs when a domestic market has only a few million consumers.",
          "How does larger production scale affect a firm's long-run average cost (LRAC) curve?",
        ],
        explanation:
          "Small domestic markets limit production runs, leaving firms stuck on the downward-sloping portion of their LRAC curve. Exporting to global markets expands output so firms achieve economies of scale and lower unit costs. Free trade neither fixes exchange rates nor eliminates capital investment.",
      },
      {
        id: "4a-trade-integration-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "trade-protection-diagrams",
        question:
          "In a small open economy importing rice at the world price `P_w`, what is the immediate diagrammatic effect of imposing a specific import tariff?",
        options: [
          "The horizontal world supply curve shifts vertically upwards to `P_w + tariff`",
          "The domestic supply curve shifts rightwards while consumer price stays at `P_w`",
          "The domestic demand curve shifts leftwards while world price falls below `P_w`",
          "The horizontal world supply curve pivots downwards as foreign exporters cut costs",
        ],
        answerIndex: 0,
        hints: [
          "A small country is a price taker, so `S_world` is horizontal.",
          "A specific tax per imported unit adds a constant dollar amount to the price of every imported unit.",
        ],
        explanation:
          "Because a small country faces a perfectly elastic world supply at `P_w`, a specific tariff `t` shifts `S_world` vertically upwards to `S_world + tariff` at price `P_w + t`. Shifting domestic supply rightwards while keeping price at `P_w` describes a domestic production subsidy, not a tariff.",
      },
      {
        id: "4a-trade-integration-m1-q03",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "trade-protection-diagrams",
        question:
          "Which stakeholder group clearly **gains** economic surplus when a government imposes an import tariff on foreign textiles?",
        options: [
          "Domestic textile consumers purchasing garments at retail stores",
          "Foreign textile exporters selling into the protected market",
          "Domestic clothing retailers relying on imported fabric inputs",
          "Domestic textile producers receiving a higher price and expanding output",
        ],
        answerIndex: 3,
        hints: [
          "Trace the higher domestic price `P_w + t` on the domestic supply curve.",
          "Who sells more units at a higher price after the tariff is imposed?",
        ],
        explanation:
          "Domestic producers in the protected textile industry receive a higher price (`P_w + t`) and expand output from `Q_1` to `Q_3`, increasing domestic producer surplus. Consumers, downstream retailers, and foreign exporters all lose.",
      },
      {
        id: "4a-trade-integration-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "trade-protection-diagrams",
        question:
          "How does a **domestic production subsidy** differ fundamentally from an **import tariff** in a small importing economy?",
        options: [
          "A production subsidy raises domestic consumer prices higher than an equivalent tariff",
          "A production subsidy leaves the domestic price at `P_w`, causing zero consumption DWL",
          "A production subsidy generates customs tax revenue for the domestic government budget",
          "A production subsidy eliminates all production inefficiency in the protected domestic industry",
        ],
        answerIndex: 1,
        hints: [
          "Does a domestic production subsidy tax imports entering the border?",
          "If foreign suppliers can still sell freely at `P_w`, what price do domestic consumers pay?",
        ],
        explanation:
          "Under a domestic production subsidy, tariff-free imports remain available at `P_w`, so consumers continue paying `P_w` and consuming `Q_2` — avoiding any loss of consumer surplus or consumption DWL. However, the subsidy still creates production DWL and costs government budget expenditure rather than raising revenue.",
      },
      {
        id: "4a-trade-integration-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "trade-protection-diagrams",
        question:
          "Why does an **import quota** typically impose a different fiscal impact on the importing government compared with an equivalent **import tariff**?",
        options: [
          "A quota lowers domestic market prices whereas a tariff raises domestic prices",
          "A quota generates windfall rents for licence holders rather than automatic tax revenue",
          "A quota requires direct per-unit budget transfers to every domestic producer",
          "A quota prevents domestic producers from expanding output when prices increase",
        ],
        answerIndex: 1,
        hints: [
          "Compare the middle rectangle `(Q_4 − Q_3) × ΔP` on a tariff diagram vs a quota diagram.",
          "Unless the government auctions import licences competitively, who collects that price gap?",
        ],
        explanation:
          "While a tariff channels `(Q_4 − Q_3) × t` directly to the treasury as tax revenue, a physical quota creates quota rents `(Q_4 − Q_3)(P_q − P_w)` captured by whoever holds the import licences (often foreign exporters or privileged domestic importers), yielding zero government revenue unless licences are auctioned.",
      },
      {
        id: "4a-trade-integration-m1-q06",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "trade-protection-diagrams",
        question:
          "A government suddenly requires every imported electric bicycle to pass a lengthy, country-specific safety inspection at a single port, delaying shipments by six months. What type of trade barrier is this?",
        options: [
          "An ad valorem import tariff levied at the customs border",
          "A domestic production subsidy lowering local manufacturers' unit costs",
          "An administrative (non-tariff) barrier using regulatory red tape",
          "A voluntary export restraint negotiated through a monetary union",
        ],
        answerIndex: 2,
        hints: [
          "Is there an explicit tax rate or a numerical unit ceiling announced here?",
          "Look for regulatory procedures and customs delays used to discourage imports.",
        ],
        explanation:
          "Using slow inspections, narrow port entry, and idiosyncratic standards to raise compliance costs and restrict imports is a classic administrative (non-tariff) barrier. It neither collects tariff revenue nor sets an explicit unit quota.",
      },
      {
        id: "4a-trade-integration-m1-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "arguments-for-against-protection",
        question:
          "What is the core economic rationale behind the **infant industry argument** for temporary trade protection?",
        options: [
          "New domestic industries need time to expand output and achieve economies of scale until LRAC falls below `P_w`",
          "Established mature industries require permanent subsidies to guarantee stable abnormal monopoly profits",
          "Protecting labour-intensive sectors prevents domestic consumers from buying cheaper imported food",
          "High import tariffs automatically force foreign competitors to share proprietary patents free of charge",
        ],
        answerIndex: 0,
        hints: [
          "Think about why a young domestic firm initially has average costs above the world price `P_w`.",
          "How does scaling up output move the firm along its LRAC curve?",
        ],
        explanation:
          "The infant industry argument justifies temporary protection so emerging firms can gain experience, scale up output, and slide down their LRAC curve until unit costs fall below the world price `P_w` — building dynamic comparative advantage. Once mature, protection should be removed.",
      },
      {
        id: "4a-trade-integration-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Define",
        guideRef: "arguments-for-against-protection",
        question:
          "In international trade economics, what specifically constitutes **dumping**?",
        options: [
          "Imposing a higher common external tariff on non-members of a customs union",
          "Redirecting raw-material exports through a low-tariff member of a free trade area",
          "Refusing to ratify multilateral agricultural reductions during a WTO round",
          "Exporting a good to a foreign market at a price below its cost of production",
        ],
        answerIndex: 3,
        hints: [
          "Focus on the relationship between the export price and the firm's unit production cost (or home price).",
          "Why does the WTO permit targeted anti-dumping tariffs when injury is proven?",
        ],
        explanation:
          "Dumping occurs when firms sell exports below their cost of production (or below their home-market price), potentially driving domestic producers out of business. Redirecting goods through low-tariff FTA members is trade deflection, not dumping.",
      },
      {
        id: "4a-trade-integration-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "arguments-for-against-protection",
        question:
          "Why is imposing heavy tariffs on imported industrial inputs such as steel and aluminium likely to harm a country's own manufacturing exports?",
        options: [
          "Higher steel tariffs force the central bank to immediately appreciate the domestic currency",
          "Domestic steelmakers automatically stop supplying local manufacturers once tariffs rise",
          "Elevated raw-material costs raise domestic firms' costs of production, reducing export competitiveness",
          "WTO rules prohibit countries with steel tariffs from exporting finished consumer goods",
        ],
        answerIndex: 2,
        hints: [
          "Remember that steel and aluminium are intermediate inputs for automakers, builders, and machinery exporters.",
          "What happens to downstream firms' SRAS and unit prices when input costs surge?",
        ],
        explanation:
          "Tariffs on intermediate inputs raise production costs for downstream manufacturers (shifting their supply/SRAS curves leftwards). Higher domestic unit costs make finished exports less price-competitive on global markets and can destroy more downstream jobs than are saved upstream.",
      },
      {
        id: "4a-trade-integration-m1-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "economic-integration-wto",
        question:
          "What single defining feature distinguishes a **Customs Union** from a **Free Trade Area (FTA)**?",
        options: [
          "Complete elimination of tariffs on goods traded between member states",
          "Adoption of a Common External Tariff (CET) applied uniformly to non-members",
          "Unrestricted cross-border mobility of workers and financial capital between members",
          "Replacement of national currencies with one shared currency and central bank",
        ],
        answerIndex: 1,
        hints: [
          "Both an FTA and a Customs Union already abolish internal tariffs.",
          "How do members treat imports arriving from *outside* the trading bloc?",
        ],
        explanation:
          "Both FTAs and Customs Unions abolish internal tariffs, but FTA members set independent tariffs on outsiders (requiring rules of origin), whereas a Customs Union establishes a Common External Tariff (CET). Free factor mobility defines a Common Market; a single currency defines a Monetary Union.",
      },
      {
        id: "4a-trade-integration-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "economic-integration-wto",
        question:
          "Which stage of economic integration adds **free movement of labour and capital** on top of zero internal tariffs and a Common External Tariff?",
        options: [
          "A Common Market (Single Market)",
          "A Preferential Trade Area (PTA)",
          "A Free Trade Area (FTA)",
          "A Bilateral Trade Agreement",
        ],
        answerIndex: 0,
        hints: [
          "Recall the cumulative ladder: PTA → FTA → Customs Union → ___ → Monetary Union.",
          "Think of the European Union's 'four freedoms': goods, services, capital, and people.",
        ],
        explanation:
          "A Common Market builds directly on a Customs Union by removing barriers to the free movement of factors of production — labour and capital — across member borders, alongside harmonised product regulations (as in the EU Single Market).",
      },
      {
        id: "4a-trade-integration-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "With identical resources, **Country A** can produce at most **60 tonnes of rice** OR **30 bolts of cloth**, while **Country B** can produce at most **40 tonnes of rice** OR **10 bolts of cloth**. Which statement is correct?",
        options: [
          "Country A has a comparative advantage in both rice and cloth production",
          "Country B has an absolute advantage in rice and a comparative advantage in cloth",
          "Neither country can benefit from trade because Country A outproduces Country B in both goods",
          "Country A has a comparative advantage in cloth, while Country B has a comparative advantage in rice",
        ],
        answerIndex: 3,
        hints: [
          "Compute each country's opportunity cost of 1 bolt of cloth using 'Other Over This' (`Rice / Cloth`).",
          "Country A gives up {{60/30}} = 2 tonnes of rice per cloth; Country B gives up {{40/10}} = 4 tonnes of rice per cloth.",
        ],
        explanation:
          "Country A's opportunity cost of 1 cloth is `60/30 = 2` rice, lower than Country B's `40/10 = 4` rice — so Country A has comparative advantage in cloth. Conversely, Country B's opportunity cost of 1 rice is `10/40 = 0.25` cloth, lower than Country A's `30/60 = 0.5` cloth — so Country B has comparative advantage in rice despite lacking absolute advantage in either good.",
      },
      {
        id: "4a-trade-integration-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "economic-integration-wto",
        question:
          "Which major economic disadvantage do member countries accept upon joining a **Monetary Union** such as the Eurozone?",
        options: [
          "Loss of independent national monetary policy and ability to adjust their own exchange rate",
          "Mandatory reintroduction of tariffs on manufactured imports from partner countries",
          "Increased currency-conversion transaction costs when trading with fellow union members",
          "Prohibition against trading with any country located outside the monetary union",
        ],
        answerIndex: 0,
        hints: [
          "Who sets the base interest rate for all Eurozone countries?",
          "If Greece enters a deep recession while Germany booms, can Greece cut its own interest rate or devalue its currency?",
        ],
        explanation:
          "Monetary union members share one currency and one central bank (such as the ECB), surrendering national control over interest rates and exchange-rate depreciation. This leaves individual members vulnerable to asymmetric economic shocks.",
      },
      {
        id: "4a-trade-integration-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "economic-integration-wto",
        question:
          "Which principle lies at the heart of the **World Trade Organization's (WTO)** multilateral rules, requiring a member to extend any tariff reduction granted to one trading partner equally to all other WTO members (outside permitted trading blocs)?",
        options: [
          "The Common External Tariff (CET) harmonisation requirement",
          "The infant-industry dynamic comparative advantage exemption",
          "The Most-Favoured-Nation (MFN) non-discrimination principle",
          "The voluntary export restraint quota allocation principle",
        ],
        answerIndex: 2,
        hints: [
          "This three-word principle ensures trade liberalisation is multilateral and non-discriminatory.",
          "Its initials are MFN.",
        ],
        explanation:
          "The Most-Favoured-Nation (MFN) clause prohibits WTO members from discriminating between trading partners: lowering a tariff for one WTO member requires extending the same rate to all other WTO members (with formal exceptions for regional trading blocs and special developing-country preferences).",
      },
      {
        id: "4a-trade-integration-m1-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "arguments-for-against-protection",
        question:
          "Why do many low-income developing countries continue to rely on **import tariffs** despite the efficiency losses identified by trade theory?",
        options: [
          "Import tariffs completely eliminate domestic inflation during rapid economic growth",
          "Customs duties at borders are cheaper and easier to collect than broad income taxes where informal markets are large",
          "WTO agreements legally mandate high import tariffs for all developing-country members",
          "Import tariffs automatically create domestic production subsidies without costing consumers anything",
        ],
        answerIndex: 1,
        hints: [
          "Think about tax-collection capacity when a large share of employment is informal and cash-based.",
          "How easily can a government monitor physical goods arriving at a handful of seaports?",
        ],
        explanation:
          "In developing economies with large informal sectors and limited tax-administration capacity, levying tariffs at borders and ports provides an administratively straightforward, reliable source of government fiscal revenue to fund public services, despite the accompanying deadweight loss.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 2 — Diagrams, Stakeholder Welfare & Trading Blocs
  // answerIndex spread: 0×4, 1×4, 2×3, 3×4
  // =========================================================================
  {
    id: "4a-trade-integration-m2",
    title: "MCQ Paper 2 — Diagrams, Stakeholder Welfare & Trading Blocs",
    questions: [
      {
        id: "4a-trade-integration-m2-q01",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "trade-protection-diagrams",
        question:
          "On a standard small-country tariff diagram, why is the **left-hand deadweight welfare-loss triangle** (between `Q_1` and `Q_3`) labelled **production inefficiency**?",
        options: [
          "Because foreign exporters are forced to dump surplus inventory below marginal cost",
          "Because consumers stop purchasing units whose marginal benefit exceeded the world price",
          "Because the domestic government spends tariff revenue on unproductive bureaucracies",
          "Because higher-cost domestic producers replace lower-cost foreign suppliers for units `Q_1` to `Q_3`",
        ],
        answerIndex: 3,
        hints: [
          "Look at the height of the domestic supply curve `S_dom` relative to `P_w` between `Q_1` and `Q_3`.",
          "Domestic marginal cost sits strictly above the world price `P_w` over that output range.",
        ],
        explanation:
          "Between `Q_1` and `Q_3`, domestic firms' marginal cost (`S_dom`) exceeds the world price `P_w`. Shifting production from efficient foreign suppliers (cost `P_w`) to higher-cost domestic producers wastes scarce domestic resources equal to the triangle area `{{1/2}}(Q_3 − Q_1)t`.",
      },
      {
        id: "4a-trade-integration-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "trade-protection-diagrams",
        question:
          "On the same small-country tariff diagram, what causes the **right-hand deadweight welfare-loss triangle** (between `Q_4` and `Q_2`)?",
        options: [
          "Domestic firms face rising marginal costs as they expand into international export markets",
          "Domestic consumers priced out by `P_w + t` valued those foregone units above the world price `P_w`",
          "Foreign exporters receive quota rents that leak out of the domestic circular flow of income",
          "Government tax collectors fail to record imports arriving through neighbouring FTA states",
        ],
        answerIndex: 1,
        hints: [
          "Compare the domestic demand curve (`MB`) against `P_w` for units between `Q_4` and `Q_2`.",
          "Who loses surplus without anyone else capturing it as profit or tax revenue?",
        ],
        explanation:
          "For every unit between `Q_4` and `Q_2`, consumers' willingness to pay (`D_dom`) lies above the true social cost of importing (`P_w`), yet below the tariff-inflated price `P_w + t`. Blocking these mutually beneficial trades destroys consumer surplus that no domestic producer or government captures.",
      },
      {
        id: "4a-trade-integration-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "trade-protection-diagrams",
        question:
          "Why does a country imposing a **tariff** on an essential staple such as rice or cooking oil create a **regressive** distributional impact?",
        options: [
          "Lower-income households spend a higher proportion of their income on basic staples than wealthier households",
          "Wealthier households are legally exempt from paying border duties on imported food products",
          "Tariffs reduce nominal food prices only in high-income metropolitan regions",
          "Domestic agricultural producers automatically pay all tariff costs out of their fixed land rents",
        ],
        answerIndex: 0,
        hints: [
          "Recall the definition of a regressive tax from Unit 3A.",
          "How does a flat dollar increase in rice prices compare as a percentage of income for poor vs rich families?",
        ],
        explanation:
          "A tariff raises the retail price of everyday staples uniformly for everyone. Because low-income households devote a far larger share of their budget to food and necessities, the tariff takes a higher percentage of their income than of high-income households' income — making it regressive.",
      },
      {
        id: "4a-trade-integration-m2-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "economic-integration-wto",
        question:
          "Why must member states of a **Free Trade Area (FTA)** such as USMCA enforce strict **rules of origin** at internal borders?",
        options: [
          "To prevent member central banks from issuing competing fiat currencies",
          "To ensure workers migrating between member countries hold identical university degrees",
          "To stop non-member exporters routing goods through the lowest-tariff FTA member to evade higher tariffs elsewhere",
          "To force all member countries to adopt the exact same Common External Tariff rate",
        ],
        answerIndex: 2,
        hints: [
          "In an FTA, Member X might charge a 2% external tariff on Chinese electronics while Member Y charges 25%.",
          "Without border checks on where goods were actually made, what would exporters do?",
        ],
        explanation:
          "Because FTA members retain independent external tariffs, exporters from non-member countries would engage in 'trade deflection' — shipping goods into the lowest-tariff member and re-exporting them duty-free into higher-tariff members. Rules of origin verify sufficient regional content, adding administrative costs that Customs Unions avoid via a CET.",
      },
      {
        id: "4a-trade-integration-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "At a free-trade world price of **$10**, domestic firms supply **20 thousand units** and domestic consumers demand **80 thousand units**. After a **$4 per-unit tariff** raises the domestic price to **$14**, domestic supply rises to **35 thousand units** and domestic demand falls to **65 thousand units**. What is the government's tariff revenue?",
        options: [
          "$240 thousand",
          "$140 thousand",
          "$260 thousand",
          "$120 thousand",
        ],
        answerIndex: 3,
        hints: [
          "Tariff revenue is collected ONLY on post-tariff imports (`Q_4 − Q_3`), NOT pre-tariff imports.",
          "Post-tariff imports = `65,000 − 35,000 = 30,000` units; multiply by the `$4` tariff.",
        ],
        explanation:
          "Post-tariff imports equal `Q_4 − Q_3 = 65,000 − 35,000 = 30,000` units. Multiplying by the `$4` specific tariff gives `$120,000` (`$120 thousand`). Multiplying pre-tariff imports (`60k`) by `$4` erroneously gives `$240 thousand`.",
      },
      {
        id: "4a-trade-integration-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "arguments-for-against-protection",
        question:
          "Which risk represents the strongest economic criticism of real-world **infant industry protection**?",
        options: [
          "Governments struggle to pick genuine future winners, and sheltered firms lobby to keep protection permanently",
          "Temporary tariffs immediately collapse domestic output below its free-trade level",
          "Protected domestic firms instantly cut consumer prices below the world price `P_w`",
          "Infant industry tariffs automatically convert a country into a monetary union",
        ],
        answerIndex: 0,
        hints: [
          "Think about government failure, imperfect information, and political lobbying.",
          "What happens to an infant firm's incentive to cut costs if it expects protection to be renewed indefinitely?",
        ],
        explanation:
          "In practice, governments face severe information problems trying to predict which nascent sectors will achieve dynamic comparative advantage. Protected firms often become X-inefficient ('perpetual infants') and lobby politically to maintain tariffs long after protection should have ended.",
      },
      {
        id: "4a-trade-integration-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "economic-integration-wto",
        question:
          "During the 2010–2015 Eurozone crisis, why was Greece unable to use traditional macroeconomic expenditure-switching policy to restore export competitiveness quickly?",
        options: [
          "EU Single Market rules prohibited Greek firms from selling services to non-EU buyers",
          "Sharing the euro prevented Greece from independently depreciating its currency or cutting national interest rates",
          "The World Trade Organization imposed an embargo on Greek agricultural and tourism exports",
          "Greece maintained a floating national currency that appreciated continuously against the euro",
        ],
        answerIndex: 1,
        hints: [
          "How does a country with its own floating currency adjust during a severe recession and current-account deficit?",
          "Which two macroeconomic policy levers are surrendered inside a monetary union?",
        ],
        explanation:
          "Inside the Eurozone monetary union, Greece could neither lower a national base interest rate (set by the ECB for the entire bloc) nor allow a national currency to depreciate to make exports cheaper. Instead, adjustment required painful fiscal austerity and prolonged internal wage/price deflation.",
      },
      {
        id: "4a-trade-integration-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "trade-protection-diagrams",
        question:
          "Under an **import quota**, when will the **domestic country's** overall welfare loss be *greater* than under an equivalent tariff producing the exact same domestic price `P_q`?",
        options: [
          "When the domestic government auctions all import quota licences competitively to domestic banks",
          "When domestic supply is perfectly inelastic so domestic output remains fixed at `Q_1`",
          "When the quota forces domestic consumers to pay less than the free-trade world price `P_w`",
          "When quota licences are allocated free of charge to foreign exporters, transferring quota rents abroad",
        ],
        answerIndex: 3,
        hints: [
          "Under a tariff, the middle rectangle `(Q_4 − Q_3) × ΔP` stays inside the domestic economy as government revenue.",
          "What happens to national welfare if that rectangle instead flows to foreign exporters?",
        ],
        explanation:
          "If import licences are given free to foreign exporters, foreign firms sell the restricted quota volume at the inflated domestic price `P_q` and capture the entire quota rent `(Q_4 − Q_3)(P_q − P_w)`. Because that rectangle leaks abroad instead of staying as domestic tax revenue, the importing nation's net welfare loss exceeds that of an equivalent tariff.",
      },
      {
        id: "4a-trade-integration-m2-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "economic-integration-wto",
        question:
          "Which institutional weakness has most severely undermined the **WTO's** ability to enforce binding trade rulings since December 2019?",
        options: [
          "The complete abolition of the Most-Favoured-Nation clause from WTO treaties",
          "Paralysis of the WTO Appellate Body due to blocked appointments of new judges",
          "Merger of the WTO with the European Central Bank to manage exchange rates",
          "Replacement of multilateral trade rules with mandatory global import quotas",
        ],
        answerIndex: 1,
        hints: [
          "When a country loses a WTO dispute panel, what happens if it appeals to a court without enough sitting judges?",
          "Recall the phenomenon known as 'appealing into the void'.",
        ],
        explanation:
          "Since December 2019, blocked appointments have left the WTO Appellate Body without the minimum three judges required to hear appeals. Losing countries can 'appeal into the void', freezing panel rulings indefinitely and weakening multilateral dispute enforcement.",
      },
      {
        id: "4a-trade-integration-m2-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "economic-integration-wto",
        question:
          "Which situation is a clear example of **trade creation** following the formation of a Customs Union?",
        options: [
          "A member shifts coffee imports from a cheaper non-member to a higher-cost bloc partner because of the CET",
          "A member raises its external tariffs against all nations to protect declining domestic steel factories",
          "A member stops producing high-cost domestic shoes and instead imports cheaper shoes duty-free from a bloc partner",
          "Two non-member countries sign a bilateral agreement to restrict exports of raw minerals",
        ],
        answerIndex: 2,
        hints: [
          "Compare who produced the good *before* vs *after* joining the bloc.",
          "Trade creation replaces costly *domestic* output with cheaper *partner* output; trade diversion replaces cheaper *outsider* imports with costlier *partner* imports.",
        ],
        explanation:
          "Trade creation occurs when eliminating internal tariffs replaces inefficient, higher-cost domestic production with lower-cost imports from a more efficient bloc partner, improving resource allocation and lowering consumer prices.",
      },
      {
        id: "4a-trade-integration-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "arguments-for-against-protection",
        question:
          "Why do developing economies frequently criticise strict environmental or phytosanitary import standards (such as carbon border adjustments) imposed by wealthy trading blocs?",
        options: [
          "Such standards can act as disguised non-tariff protection that disproportionately penalises poorer exporters lacking compliance technology",
          "Environmental import standards automatically lower tariffs on agricultural exports from developing nations",
          "Strict standards force wealthy consumers to pay prices strictly below global marginal production costs",
          "Phytosanitary rules eliminate all transport costs between developing exporters and European ports",
        ],
        answerIndex: 0,
        hints: [
          "Consider both the valid externality-correction goal and the compliance burden on low-income exporters.",
          "Could legitimate-sounding safety/green rules function like administrative barriers?",
        ],
        explanation:
          "While environmental and safety rules can correct negative externalities, developing exporters often lack the capital, testing laboratories, or low-carbon energy grids to certify compliance cheaply — meaning these rules can function as disguised protectionism excluding poorer nations from rich-country markets.",
      },
      {
        id: "4a-trade-integration-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "At the world price of **$50**, domestic solar-panel output is **40 thousand units** and domestic consumption is **90 thousand units**. The government grants domestic manufacturers a **$15 per-unit production subsidy**, expanding domestic output to **60 thousand units** while consumer price remains **$50**. What is total government subsidy expenditure?",
        options: [
          "$300 thousand",
          "$600 thousand",
          "$1,350 thousand",
          "$900 thousand",
        ],
        answerIndex: 3,
        hints: [
          "Does the government pay the $15 subsidy only on the *extra* 20,000 units, or on *every* domestically produced unit (`Q_3`)?",
          "Compute `Q_3 × s = 60,000 × $15`.",
        ],
        explanation:
          "A per-unit domestic production subsidy is paid on every unit produced domestically after the subsidy (`Q_3 = 60,000`), not just the expansion (`20,000`) or initial output (`40,000`). Total government expenditure is `60,000 × $15 = $900,000` (`$900 thousand`).",
      },
      {
        id: "4a-trade-integration-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Compare",
        guideRef: "arguments-for-against-protection",
        question:
          "Why did the **Doha Development Round** of WTO multilateral trade negotiations stall repeatedly over two decades?",
        options: [
          "Developing countries demanded the immediate adoption of a single global currency",
          "High-income countries pushed to abolish all intellectual property rules worldwide",
          "Deadlock persisted over developed nations' farm subsidies and developing market access",
          "All WTO members voted to merge the WTO directly into the Mercosur Customs Union",
        ],
        answerIndex: 2,
        hints: [
          "Recall the core North–South conflict inside the WTO.",
          "Which heavily subsidised sector in the EU and US did developing agricultural exporters demand be opened?",
        ],
        explanation:
          "Because WTO rounds operate by consensus across 160+ members, Doha deadlocked over developed countries' reluctance to slash domestic agricultural subsidies and tariffs (such as the EU CAP and US farm subsidies) versus rich countries' push for deeper services, industrial tariff cuts, and IP rules in emerging markets.",
      },
      {
        id: "4a-trade-integration-m2-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "trade-protection-diagrams",
        question:
          "When domestic demand for an imported good shifts rightwards **under an existing fixed import quota** (compared with an existing specific tariff), what happens to the domestic price and import volume?",
        options: [
          "Under a quota, import volume stays fixed at the ceiling so domestic price rises; under a tariff, domestic price stays at `P_w + t` and imports expand",
          "Under a quota, imports expand automatically at `P_w`; under a tariff, domestic price jumps vertically above `P_w + t`",
          "Under both policies, domestic price immediately falls back to the world price `P_w`",
          "Under a quota, government tax revenue doubles; under a tariff, tariff revenue drops to zero",
        ],
        answerIndex: 0,
        hints: [
          "Under a tariff, `S_world + t` is still perfectly elastic (horizontal) at `P_w + t`.",
          "Under a fixed physical quota, can extra imports enter when domestic demand grows?",
        ],
        explanation:
          "A tariff leaves supply perfectly elastic at `P_w + t`, so rising domestic demand is absorbed by additional imports at the unchanged price `P_w + t`. A fixed quota caps imports strictly, forcing any surge in domestic demand to drive the domestic price higher and inflate quota rents.",
      },
      {
        id: "4a-trade-integration-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "Why do real-world economies rarely achieve **100% complete specialisation** as predicted by the basic linear-PPC comparative advantage model?",
        options: [
          "Because linear PPCs always have identical slopes across all countries in the real world",
          "Because resources are imperfectly adaptable across industries, causing increasing opportunity costs (concave PPCs) plus transport costs",
          "Because international trade automatically lowers total world output whenever two countries specialise",
          "Because WTO rules strictly cap every country's exports at 10% of its real GDP",
        ],
        answerIndex: 1,
        hints: [
          "Can a software engineer switch seamlessly into coffee farming at a constant trade-off?",
          "What shape does a realistic PPC have when factors of production are specialised?",
        ],
        explanation:
          "Because factors of production are not equally suited to all industries, opportunity costs increase as a country reallocates more resources into one sector (a bowed-out/concave PPC). Combined with transport costs and strategic diversification, specialisation stops before reaching 100%.",
      },
    ],
  },

  // =========================================================================
  // MCQ PAPER 3 — HL Quantitative Trade, Comparative Advantage & Synthesis
  // answerIndex spread: 0×3, 1×4, 2×4, 3×4
  // =========================================================================
  {
    id: "4a-trade-integration-m3",
    title: "MCQ Paper 3 — HL Quantitative Trade, Comparative Advantage & Synthesis",
    questions: [
      {
        id: "4a-trade-integration-m3-q01",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "With identical resources, **Alpha** can produce at most **100 tonnes of wheat** OR **50 cars**, while **Beta** can produce at most **80 tonnes of wheat** OR **20 cars**. Which specialisation and terms of trade benefit **both** nations?",
        options: [
          "Alpha specialises in wheat; Beta specialises in cars; 1 car trades for 3 tonnes of wheat",
          "Alpha specialises in cars; Beta specialises in wheat; 1 car trades for 3 tonnes of wheat",
          "Alpha specialises in cars; Beta specialises in wheat; 1 car trades for 5 tonnes of wheat",
          "Alpha specialises in wheat; Beta specialises in cars; 1 car trades for 1.5 tonnes of wheat",
        ],
        answerIndex: 1,
        hints: [
          "Calculate each country's opportunity cost of 1 car (`Max Wheat / Max Cars`).",
          "Alpha's OC of 1 car is {{100/50}} = 2 wheat; Beta's is {{80/20}} = 4 wheat. Who has the lower OC, and what price sits strictly between 2 and 4?",
        ],
        explanation:
          "Alpha sacrifices `100/50 = 2` wheat per car, while Beta sacrifices `80/20 = 4` wheat per car. Alpha therefore has comparative advantage in cars and Beta in wheat. Mutually beneficial terms of trade must lie strictly between 2 and 4 tonnes of wheat per car — so `1 car = 3 tonnes of wheat` benefits both.",
      },
      {
        id: "4a-trade-integration-m3-q02",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "Consider the following **labour hours required per unit** (an *input* schedule): **Country X** needs **4 hours per watch** and **2 hours per shirt**; **Country Y** needs **6 hours per watch** and **6 hours per shirt**. Which statement is correct?",
        options: [
          "Country X has an absolute advantage in both goods and a comparative advantage in watches",
          "Country Y has an absolute advantage in watches and a comparative advantage in shirts",
          "Both countries have identical opportunity costs, so no trade gains are possible",
          "Country X has a comparative advantage in shirts, while Country Y has a comparative advantage in watches",
        ],
        answerIndex: 3,
        hints: [
          "Careful! This is an *input* (hours per unit) table, NOT a max-output table.",
          "Convert to outputs per 12 hours: Country X makes 3 watches or 6 shirts (`1 watch = 2 shirts`); Country Y makes 2 watches or 2 shirts (`1 watch = 1 shirt`).",
        ],
        explanation:
          "In 12 labour hours, Country X can produce 3 watches or 6 shirts, so its OC of 1 watch is `2` shirts (`4/2`). Country Y can produce 2 watches or 2 shirts, so its OC of 1 watch is `1` shirt (`6/6`). Thus Country Y has the lower OC in watches (`1 < 2`) and Country X has the lower OC in shirts (`0.5 < 1`).",
      },
      {
        id: "4a-trade-integration-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Deduce",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "Country P can produce a maximum of **90 tonnes of steel** OR **30 tonnes of wheat**, while Country Q can produce a maximum of **60 tonnes of steel** OR **20 tonnes of wheat**. What can be concluded about comparative-advantage trade between P and Q?",
        options: [
          "Country P should specialise in steel and Country Q should specialise in wheat",
          "Country P should specialise in wheat and Country Q should specialise in steel",
          "Both nations face identical opportunity costs (parallel PPCs), so comparative advantage yields no gains from trade",
          "Both nations gain as long as 1 tonne of wheat trades for exactly 3 tonnes of steel",
        ],
        answerIndex: 2,
        hints: [
          "Compute the opportunity cost of 1 tonne of wheat for both Country P and Country Q.",
          "Country P gives up {{90/30}} = 3 steel; Country Q gives up {{60/20}} = 3 steel.",
        ],
        explanation:
          "Both Country P (`90/30 = 3`) and Country Q (`60/20 = 3`) have the exact same opportunity cost of 3 tonnes of steel per tonne of wheat — their linear PPCs are parallel. Because there is no difference in opportunity cost, there is no range of mutually beneficial terms of trade.",
      },
      {
        id: "4a-trade-integration-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Determine",
        guideRef: "benefits-trade-comparative-hl",
        question:
          "Nation M's domestic opportunity cost of producing 1 tonne of coffee is **0.4 laptops**, while Nation N's domestic opportunity cost of producing 1 tonne of coffee is **0.8 laptops**. Which international exchange rate allows **both** nations to gain strictly from trade?",
        options: [
          "1 tonne of coffee = 0.6 laptops",
          "1 tonne of coffee = 0.4 laptops",
          "1 tonne of coffee = 0.3 laptops",
          "1 tonne of coffee = 0.9 laptops",
        ],
        answerIndex: 0,
        hints: [
          "A mutually beneficial terms of trade must lie *strictly* between the two domestic opportunity costs.",
          "Check which value satisfies `0.4 < P < 0.8`.",
        ],
        explanation:
          "Nation M exports coffee and needs strictly more than `0.4` laptops per tonne to gain; Nation N imports coffee and must pay strictly less than `0.8` laptops per tonne to gain. Only `0.6` laptops lies strictly inside `0.4 < P < 0.8`. At `0.4`, Nation M gains nothing.",
      },
      {
        id: "4a-trade-integration-m3-q05",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "A small country imports cotton at a world price of **$20**. At `$20`, domestic supply is **10 thousand** and domestic demand is **60 thousand** units. A **$6 tariff** raises price to **$26**, shifting domestic supply to **22 thousand** and domestic demand to **52 thousand** units. What is the **total deadweight welfare loss**?",
        options: [
          "$120 thousand",
          "$180 thousand",
          "$60 thousand",
          "$36 thousand",
        ],
        answerIndex: 2,
        hints: [
          "Total tariff DWL = Production DWL triangle + Consumption DWL triangle.",
          "Compute `{{1/2}}(22 − 10) × 6` plus `{{1/2}}(60 − 52) × 6`.",
        ],
        explanation:
          "Production DWL = `{{1/2}} × (22 − 10) × $6 = $36 thousand`; Consumption DWL = `{{1/2}} × (60 − 52) × $6 = $24 thousand`. Summing both triangles yields `$60 thousand`. Forgetting the `{{1/2}}` factor wrongly gives `$120 thousand`, while `$180 thousand` is government tariff revenue.",
      },
      {
        id: "4a-trade-integration-m3-q06",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "A small country's domestic demand is **`Q_d = 100 − 2P`** and domestic supply is **`Q_s = 10 + P`**. The world price is **`P_w = $15`**. If the government imposes a **$5 per-unit tariff** (raising price to `$20`), what is the **loss of domestic consumer surplus**?",
        options: [
          "$150.00",
          "$137.50",
          "$37.50",
          "$325.00",
        ],
        answerIndex: 3,
        hints: [
          "Find `Q_d` at `P = $15` and at `P = $20` using `Q_d = 100 − 2P`.",
          "Consumer surplus loss is the trapezoid between `P = 15` and `P = 20`: `{{1/2}}(Q_2 + Q_4) × ΔP`.",
        ],
        explanation:
          "At `P = $15`, `Q_2 = 100 − 30 = 70`; at `P = $20`, `Q_4 = 100 − 40 = 60`. Consumer surplus loss equals the trapezoid `{{1/2}}(70 + 60) × $5 = 65 × 5 = $325.00`. (Check: PS gain `$137.50` + Tariff revenue `$150` + Total DWL `$37.50` = `$325.00`.)",
      },
      {
        id: "4a-trade-integration-m3-q07",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "In a small open market at world price **$30**, domestic supply is **20 thousand** units. After a **$10 tariff** raises domestic price to **$40**, domestic supply rises to **36 thousand** units. What is the **increase in domestic producer surplus**?",
        options: [
          "$200 thousand",
          "$280 thousand",
          "$360 thousand",
          "$80 thousand",
        ],
        answerIndex: 1,
        hints: [
          "Domestic producer surplus gain is a trapezoid bounded by `P_w`, `P_w + t`, the vertical axis, and `S_dom`.",
          "Use the trapezoid area formula: `{{1/2}}(Q_1 + Q_3) × t`.",
        ],
        explanation:
          "Domestic producer surplus increases by the trapezoid `{{1/2}}(20 + 36) × $10 = 28 × $10 = $280 thousand`. Note that `$80 thousand` is only the production DWL triangle, while `$360 thousand` overstates PS gain by including production DWL.",
      },
      {
        id: "4a-trade-integration-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "At world price **$50**, domestic output is **30 thousand** units and domestic demand is **90 thousand** units. A **$10 per-unit domestic production subsidy** expands domestic output to **50 thousand** units while consumer price stays **$50**. What is the **total deadweight welfare loss**?",
        options: [
          "$100 thousand",
          "$200 thousand",
          "$400 thousand",
          "$500 thousand",
        ],
        answerIndex: 0,
        hints: [
          "Does a domestic production subsidy cause any consumption DWL when price stays at `P_w`?",
          "Calculate only the production inefficiency triangle: `{{1/2}}(Q_3 − Q_1) × s`.",
        ],
        explanation:
          "Because consumers still pay `$50` and buy `90 thousand` units, consumption DWL is `$0`. Total DWL equals only the production inefficiency triangle: `{{1/2}}(50 − 30) × $10 = $100 thousand`. (Note: government spending is `$500k` and producer surplus gain is `$400k`; the `$100k` gap is the exact DWL.)",
      },
      {
        id: "4a-trade-integration-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "At a free-trade world price of **$40**, domestic supply is **20 units** and domestic demand is **70 units** (50 imports). An **import quota of 30 units** raises domestic price to **$60**, where domestic supply is **30 units** and domestic demand is **60 units**. What is the total **quota rent** generated?",
        options: [
          "$1,800",
          "$1,000",
          "$200",
          "$600",
        ],
        answerIndex: 3,
        hints: [
          "Quota rent is the windfall price premium `(P_q − P_w)` earned on each unit imported under the quota.",
          "Multiply the quota volume (`30` units) by `($60 − $40)`.",
        ],
        explanation:
          "Quota rent equals `Q_quota × (P_q − P_w) = 30 × ($60 − $40) = 30 × $20 = $600`. Total revenue paid to foreign exporters holding licences is `30 × $60 = $1,800`, of which `$1,200` covers the world price and `$600` is the excess quota rent.",
      },
      {
        id: "4a-trade-integration-m3-q10",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Predict",
        guideRef: "trade-protection-diagrams",
        question:
          "In a small open economy with linear domestic supply and demand curves, the government **doubles** an existing non-prohibitive specific tariff on sugar from **$20/tonne** to **$40/tonne**. By what factor does total deadweight welfare loss change?",
        options: [
          "It stays unchanged because domestic demand elasticity is constant",
          "It increases by a factor of 2 (doubles linearly with the tariff)",
          "It increases by a factor of 4 (quadruples as both height and base double)",
          "It falls by half because import volumes shrink as the tariff rises",
        ],
        answerIndex: 2,
        hints: [
          "Recall the triangle area formula `{{1/2}} × base × height`.",
          "With linear curves, doubling `t` doubles the triangle's height `t` AND doubles its horizontal bases `(Q_3 − Q_1)` and `(Q_2 − Q_4)`.",
        ],
        explanation:
          "With linear curves, doubling `t` doubles both the vertical height `t` and the horizontal quantity distortions `(Q_3 − Q_1)` and `(Q_2 − Q_4)`. Consequently, each DWL triangle grows by `2 × 2 = 4` (`DWL ∝ t²`), meaning high tariffs impose disproportionately steep welfare costs.",
      },
      {
        id: "4a-trade-integration-m3-q11",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "economic-integration-wto",
        question:
          "Country A initially applies a **$15/unit** tariff on all imports. Unit production costs are: Domestic = **$62**, Country B = **$48**, Country C = **$40**. Country A forms a Customs Union with Country B (0% tariff on B, **$15 CET** kept on C). What happens to imports and net national welfare per unit?",
        options: [
          "Trade creation occurs, raising Country A's net national welfare by $14 per unit",
          "Trade diversion occurs, reducing Country A's net national welfare by $8 per unit",
          "Trade diversion occurs, raising Country A's net national welfare by $7 per unit",
          "Trade creation occurs, leaving Country A's net national welfare unchanged",
        ],
        answerIndex: 1,
        hints: [
          "Before the union, compare domestic `$62`, B (`$48 + $15 = $63`), and C (`$40 + $15 = $55`). Country A imported from C at real national cost `$40`.",
          "After the union, B enters at `$48` (`< $55`), so imports switch from C (`$40` cost) to B (`$48` cost). Compare consumer gain (`+$7`) against lost tariff revenue (`−$15`).",
        ],
        explanation:
          "Before joining, Country A bought from Country C at `$55` (real cost `$40` after `$15` domestic tariff revenue). After joining with B, consumers switch to B at `$48` (`+$7` saving), but the government loses `$15` tariff revenue — causing trade diversion and a net welfare loss of `$8` per unit (`$48 − $40`).",
      },
      {
        id: "4a-trade-integration-m3-q12",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "economic-integration-wto",
        question:
          "Country A initially applies a **$25/unit** tariff on all imports. Unit production costs are: Domestic = **$60**, Country B = **$45**, Country C = **$42**. Country A forms a Customs Union with Country B (0% tariff on B, **$25 CET** kept on C). What is the net welfare effect per unit?",
        options: [
          "Trade diversion causing a net national welfare loss of $3 per unit",
          "Trade diversion causing a net national welfare loss of $22 per unit",
          "Trade creation generating a net resource saving of $15 per unit",
          "No change in trade flows because domestic production stays cheapest",
        ],
        answerIndex: 2,
        hints: [
          "Before the union: Domestic = `$60`; B + tariff = `$70`; C + tariff = `$67`. Where did Country A get the good initially?",
          "It produced domestically at `$60` (zero imports, zero tariff revenue)! After joining with B, price drops to `$45`.",
        ],
        explanation:
          "Initially the `$25` tariff made both B (`$70`) and C (`$67`) dearer than domestic production (`$60`), so Country A produced everything domestically with zero tariff revenue. Joining the union lets B supply at `$45`, replacing `$60` domestic output — pure trade creation saving `$15` per unit.",
      },
      {
        id: "4a-trade-integration-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "trade-protection-diagrams",
        question:
          "A small country has domestic demand **`Q_d = 120 − 2P`** and domestic supply **`Q_s = 2P`**. The free-trade world price is **`P_w = $15`**. What is the **minimum specific tariff** that becomes completely prohibitive (reducing imports to zero)?",
        options: [
          "$30 per unit",
          "$45 per unit",
          "$10 per unit",
          "$15 per unit",
        ],
        answerIndex: 3,
        hints: [
          "Imports drop to zero when domestic price reaches the domestic autarky equilibrium (`Q_d = Q_s`).",
          "Solve `120 − 2P = 2P` for `P_autarky`, then subtract `P_w = $15`.",
        ],
        explanation:
          "Setting `Q_d = Q_s`: `120 − 2P = 2P ⇒ 4P = 120 ⇒ P_autarky = $30`. Since `P_w = $15`, a specific tariff of `t = $30 − $15 = $15` raises domestic price to `$30`, eliminating all imports (`Q_d = Q_s = 60`).",
      },
      {
        id: "4a-trade-integration-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Compare",
        guideRef: "trade-protection-diagrams",
        question:
          "Suppose a small importing nation wants to expand domestic output from `Q_1` to `Q_3` using one of three tools. Assuming foreign exporters receive quota licences free of charge, which ordering ranks domestic deadweight welfare loss from **smallest to largest**?",
        options: [
          "Domestic production subsidy < Import tariff < Import quota with foreign-held licences",
          "Import quota with foreign-held licences < Import tariff < Domestic production subsidy",
          "Import tariff < Domestic production subsidy < Import quota with foreign-held licences",
          "Domestic production subsidy < Import quota with foreign-held licences < Import tariff",
        ],
        answerIndex: 0,
        hints: [
          "Count which welfare-loss regions occur under each policy.",
          "Subsidy = production DWL only; Tariff = production + consumption DWL; Quota (foreign licences) = production + consumption DWL + lost quota rent!",
        ],
        explanation:
          "A production subsidy incurs only production DWL (consumers still pay `P_w`). A tariff adds consumption DWL (while keeping revenue domestically). An import quota whose licences go free to foreign exporters adds the exported quota rent on top of both DWL triangles, causing the largest domestic welfare loss.",
      },
      {
        id: "4a-trade-integration-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Evaluate",
        guideRef: "economic-integration-wto",
        question:
          "Under what pair of conditions is a newly formed **Customs Union** most likely to generate a **net positive** welfare gain (trade creation exceeding trade diversion)?",
        options: [
          "Pre-union internal tariffs were already near zero and the post-union Common External Tariff is set very high",
          "Pre-union internal tariffs were initially high and the post-union Common External Tariff against non-members is kept low",
          "Member economies have identical factor endowments and impose prohibitive quotas on all non-members",
          "Member economies abandon internal tariff reductions while raising external tariffs to maximise fiscal revenue",
        ],
        answerIndex: 1,
        hints: [
          "High pre-union tariffs mean lots of costly domestic production can be displaced by partners (big trade creation!).",
          "A low CET means fewer efficient non-members get priced out (small trade diversion!).",
        ],
        explanation:
          "High initial tariffs between members create wide scope for trade creation once internal barriers drop, while a low Common External Tariff minimises price discrimination against efficient outside suppliers — keeping trade diversion small so net welfare rises.",
      },
    ],
  },
];
