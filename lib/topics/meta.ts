// ---------------------------------------------------------------------------
// Topic registry for Year 12–13 IB Diploma Economics (SL & HL, First Assessment 2022).
// Pure data — safe to import from Node scripts.
//
// Covers all 4 official Units (1.1–4.10), the 9 Key Concepts, and HL Paper 3
// Quantitative Modelling & Policy Recommendations.
// ---------------------------------------------------------------------------
import type { IBLevel, Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  covers: string;
  level?: IBLevel;
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  level: IBLevel;
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Unit 1: Intro to Economics",
  "Unit 2: Microeconomics",
  "Unit 3: Macroeconomics",
  "Unit 4: The Global Economy",
  "HL Paper 3: Policy & Modelling",
];

export const TOPIC_META: TopicMeta[] = [
  // ===================== UNIT 1: INTRO TO ECONOMICS ========================
  {
    id: "1-intro-economics",
    title: "Unit 1: Introduction to Economics",
    strand: "Unit 1: Intro to Economics",
    icon: "🧭",
    level: "SL",
    curriculum: "IB Economics FA2022 1.1 What is economics? & 1.2 How do economists approach the world? (9 Key Concepts)",
    sections: [
      {
        id: "scarcity-choice-ppc",
        heading: "1.1 Scarcity, Opportunity Cost, Factors of Production & The PPC",
        level: "SL",
        covers: "Scarcity, choice, opportunity cost, free vs economic goods, four factors of production (land, labour, capital, entrepreneurship) and their rewards (rent, wages, interest, profit), Production Possibilities Curve (PPC: constant vs increasing opportunity cost, actual vs potential growth, unemployment/inefficiency), and the 9 IB Economics Key Concepts.",
      },
      {
        id: "circular-flow-economic-systems",
        heading: "1.1 Circular Flow of Income & Free vs Planned vs Mixed Economies",
        level: "SL",
        covers: "Two-sector and five-sector circular flow of income model (households, firms, banks, government, foreign sector), leakages (S, T, M) vs injections (I, G, X), expanding vs contracting national income, and comparing free-market, planned, and mixed economic systems across efficiency and equity.",
      },
      {
        id: "methodology-positive-normative",
        heading: "1.2 Positive vs Normative Economics, Ceteris Paribus & Modelling",
        level: "SL",
        covers: "Economic methodology as a social science, refutability & empirical testing, ceteris paribus assumption, positive statements (testable facts) vs normative statements (value judgements underlying equity/policy debates), and the distinction between equity and equality.",
      },
      {
        id: "evolution-economic-thought",
        heading: "1.2 Evolution of Economic Thought (18th–21st Century)",
        level: "SL",
        covers: "Adam Smith & laissez-faire invisible hand (18th c.), classical utility/marginalism & Say's Law (19th c.), Karl Marx's critique of capitalism, Keynesian aggregate-demand intervention vs Friedman/Hayek Monetarist & New Classical counter-revolution (20th c.), and 21st-century Behavioural Economics & Circular / Doughnut Economy sustainability.",
      },
    ],
  },

  // ===================== UNIT 2: MICROECONOMICS ============================
  {
    id: "2a-markets-elasticities-gov",
    title: "Unit 2A: Demand, Supply, Elasticities & Government Intervention",
    strand: "Unit 2: Microeconomics",
    icon: "⚖️",
    level: "SL",
    curriculum: "IB Economics FA2022 2.1–2.7 Markets, Behavioural Economics [HL], PED/YED/PES & Government Intervention",
    sections: [
      {
        id: "demand-supply-equilibrium",
        heading: "2.1–2.3 Demand, Supply, Market Equilibrium & Social Surplus",
        level: "SL",
        covers: "Law of demand & non-price determinants ([HL] income effect, substitution effect, diminishing marginal utility); law of supply & determinants ([HL] diminishing marginal returns & increasing marginal cost); competitive equilibrium, excess demand/supply, price mechanism (signalling & incentive functions), consumer & producer surplus, allocative efficiency (MB = MC), and linear demand/supply equations.",
      },
      {
        id: "behavioural-economics-hl",
        heading: "2.4 Critique of Maximizing Behaviour & Behavioural Economics",
        level: "HL",
        covers: "Critique of rational consumer choice: bounded rationality, bounded self-control, bounded selfishness, imperfect information; cognitive biases (anchoring, framing, availability, loss aversion) & heuristics; choice architecture (default, restricted, mandated choices) and Thaler & Sunstein nudges; critique of firm profit maximization (corporate social responsibility, market share, satisficing).",
      },
      {
        id: "elasticities-ped-yed-pes",
        heading: "2.5–2.6 Price & Income Elasticities of Demand (PED, YED) & Supply (PES)",
        level: "SL",
        covers: "PED formula, degrees (0 to ∞), determinants (substitutes, necessity, income share, time), total revenue test, and [HL] primary commodities vs manufactured goods PED; YED formula & sign (normal necessities, luxuries, inferior goods) & Engel curve / sectoral shifts; PES formula, determinants (time, spare capacity, stockability, mobility) and primary vs manufactured PES.",
      },
      {
        id: "government-intervention-welfare",
        heading: "2.7 Price Controls, Indirect Taxes & Subsidies (Welfare Analysis)",
        level: "SL",
        covers: "Maximum prices (price ceilings — shortages, parallel markets, welfare loss) & minimum prices (price floors — surpluses, minimum wage), specific indirect taxes & tax incidence (depending on PED vs PES!), per-unit subsidies; stakeholder impacts (consumers, producers, government budget, workers) and [HL] quantitative CS/PS/revenue/cost/DWL calculations.",
      },
    ],
  },
  {
    id: "2b-market-failure-power",
    title: "Unit 2B: Market Failure, Market Power & Equity",
    strand: "Unit 2: Microeconomics",
    icon: "🏭",
    level: "SL",
    curriculum: "IB Economics FA2022 2.8–2.12 Externalities, Public Goods, Asymmetric Info [HL], Market Power [HL] & Equity [HL]",
    sections: [
      {
        id: "externalities-common-pool",
        heading: "2.8 Externalities & Common Pool Resources",
        level: "SL",
        covers: "Negative & positive externalities of production (MSC ≠ MPC) and consumption (MSB ≠ MPB), merit & demerit goods, welfare loss triangles; market-based solutions (Pigouvian taxes, carbon taxes, cap-and-trade tradable permits, subsidies) vs government legislation/education; common pool resources (rivalrous, non-excludable — tragedy of the commons, sustainability, Elinor Ostrom collective self-governance).",
      },
      {
        id: "public-goods-asymmetric-info",
        heading: "2.9–2.10 Public Goods & Asymmetric Information [HL]",
        level: "SL",
        covers: "Public goods (non-rivalrous, non-excludable), free-rider problem, direct government provision & contracting out; [HL] asymmetric information: adverse selection (hidden information before transaction — Akerlof market for lemons) vs moral hazard (hidden action after transaction — insurance/banking bailouts), screening, signalling, regulation & licensing.",
      },
      {
        id: "costs-revenues-perfect-monopoly-hl",
        heading: "2.11 Market Power I: Costs, Revenues, Perfect Competition & Monopoly",
        level: "HL",
        covers: "Short-run law of diminishing returns (TP/MP/AP, TC/TFC/TVC, AC/AVC/AFC/MC), long-run economies & diseconomies of scale (LRAC), TR/AR/MR curves, profit maximization (MC = MR), normal/abnormal profit & loss, shut-down price (P < AVC); Perfect Competition (SR profit/loss → LR normal profit, allocative & productive efficiency) vs Monopoly (barriers to entry, natural monopoly, deadweight loss, dynamic efficiency & regulation).",
      },
      {
        id: "monopolistic-oligopoly-equity-hl",
        heading: "2.11–2.12 Monopolistic Competition, Oligopoly, Game Theory & Equity",
        level: "HL",
        covers: "Monopolistic competition (product differentiation, non-price competition, SR abnormal profit → LR normal profit with excess capacity); Oligopoly (concentration ratios, collusive cartels vs non-collusive price rigidity, prisoner's dilemma 2×2 payoff matrices & Nash equilibrium, antitrust regulation); 2.12 why free markets cannot achieve equity & policies to address market-power inequality.",
      },
    ],
  },

  // ===================== UNIT 3: MACROECONOMICS ============================
  {
    id: "3a-macro-activity-objectives",
    title: "Unit 3A: Macroeconomic Activity, Objectives & Inequality",
    strand: "Unit 3: Macroeconomics",
    icon: "🏛️",
    level: "SL",
    curriculum: "IB Economics FA2022 3.1 Measuring Activity, 3.2 AD/AS, 3.3 Macro Objectives & Phillips Curve [HL], 3.4 Inequality",
    sections: [
      {
        id: "measuring-macro-activity",
        heading: "3.1 Measuring Economic Activity: GDP, GNI, PPP & Well-Being",
        level: "SL",
        covers: "Expenditure (C + I + G + X − M), income & output approaches to GDP; GNI vs GDP; nominal vs real GDP & GDP deflator; per capita & Purchasing Power Parity (PPP) adjustments; business cycle (expansion, peak, contraction/recession, trough); limitations of GDP & alternative measures (OECD Better Life Index, Happiness Index, Green GDP).",
      },
      {
        id: "adas-models-equilibria",
        heading: "3.2 Variations in Economic Activity: AD/AS (Monetarist vs Keynesian)",
        level: "SL",
        covers: "Aggregate Demand (AD = C + I + G + X − M) downward slope & shift determinants; Short-Run Aggregate Supply (SRAS) & supply shocks; Long-Run Aggregate Supply: Monetarist/New Classical vertical LRAS (self-correcting inflationary & deflationary gaps) vs Keynesian three-section AS curve (sticky downward wages & persistent recessionary equilibrium).",
      },
      {
        id: "macro-objectives-phillips-hl",
        heading: "3.3 Growth, Unemployment, Inflation, National Debt & Phillips Curve [HL]",
        level: "SL",
        covers: "Economic growth; unemployment measurement, hidden unemployment, structural/frictional/seasonal/cyclical unemployment & NRU; inflation via weighted CPI basket (demand-pull vs cost-push), disinflation vs deflationary spiral; sustainable national debt (debt-to-GDP); [HL] Short-Run & Long-Run Phillips Curve (SRPC trade-off, stagflation shifts, vertical LRPC at NRU).",
      },
      {
        id: "inequality-lorenz-taxation",
        heading: "3.4 Economics of Inequality & Poverty (Lorenz, Gini & Tax Calculations)",
        level: "SL",
        covers: "Income vs wealth inequality, Lorenz curve & Gini coefficient (0 to 1), absolute vs relative poverty, Minimum Income Standards & Multidimensional Poverty Index (MPI), causes & consequences of inequality; progressive, proportional & regressive taxation ([HL] marginal vs average tax rate & indirect tax calculations), transfer payments, UBI, human capital & minimum wages.",
      },
    ],
  },
  {
    id: "3b-macro-policies",
    title: "Unit 3B: Demand-Side & Supply-Side Macroeconomic Policies",
    strand: "Unit 3: Macroeconomics",
    icon: "🏦",
    level: "SL",
    curriculum: "IB Economics FA2022 3.5 Monetary Policy, 3.6 Fiscal Policy & Keynesian Multiplier [HL], 3.7 Supply-Side Policies",
    sections: [
      {
        id: "monetary-policy-banking",
        heading: "3.5 Monetary Policy, Central Banks & Money Creation [HL]",
        level: "SL",
        covers: "Role of central banks, inflation targeting, expansionary vs contractionary monetary policy via base interest rates (transmission to C, I & net exports), [HL] money creation by commercial banks, money market equilibrium, open-market operations (OMOs), minimum reserve requirements, and Quantitative Easing (QE); evaluating monetary policy strengths (speed, independence) vs limitations (zero lower bound, low confidence, time lags).",
      },
      {
        id: "fiscal-policy-budgets",
        heading: "3.6 Fiscal Policy, Government Budgets & Automatic Stabilizers",
        level: "SL",
        covers: "Government revenues (direct/indirect taxes, SOE sales) & expenditures (current, capital, transfers), budget deficit/surplus vs national debt, automatic stabilizers (progressive taxes & unemployment benefits) vs discretionary expansionary/contractionary fiscal policy, and evaluating fiscal policy strengths (direct targeting in deep recessions) vs limitations (political lags, debt sustainability).",
      },
      {
        id: "multiplier-crowding-out-hl",
        heading: "3.6 The Keynesian Multiplier & Crowding-Out Effect",
        level: "HL",
        covers: "Marginal propensities (MPC + MPS + MPT + MPM = 1), calculating the Keynesian spending multiplier k = 1/(1 − MPC) = 1/(MPS + MPT + MPM), computing ΔReal GDP = k × ΔG (or ΔI / ΔX), closing a deflationary/inflationary gap accurately, and evaluating crowding-out (higher government borrowing pushing up interest rates and reducing private investment) in Monetarist vs Keynesian regimes.",
      },
      {
        id: "supply-side-policies",
        heading: "3.7 Market-Based & Interventionist Supply-Side Policies",
        level: "SL",
        covers: "Shifting LRAS / Keynesian AS rightwards: market-based policies (deregulation, privatization, trade liberalization, labour-market reforms — cutting minimum wages/union power, lower income/corporate taxes) vs interventionist policies (education, healthcare, R&D subsidies, infrastructure, industrial policy); dual AD + AS impact and evaluating long time lags, fiscal cost, equity & environmental trade-offs.",
      },
    ],
  },

  // ===================== UNIT 4: THE GLOBAL ECONOMY ========================
  {
    id: "4a-trade-integration",
    title: "Unit 4A: International Trade, Protectionism & Economic Integration",
    strand: "Unit 4: The Global Economy",
    icon: "🚢",
    level: "SL",
    curriculum: "IB Economics FA2022 4.1 Comparative Advantage [HL], 4.2–4.3 Trade Protection, 4.4 Economic Integration & WTO",
    sections: [
      {
        id: "benefits-trade-comparative-hl",
        heading: "4.1 Gains from Trade, Absolute & Comparative Advantage [HL]",
        level: "SL",
        covers: "Benefits of international trade (lower prices, variety, economies of scale, resource allocation, export-led growth); [HL] absolute vs comparative advantage using linear PPCs and opportunity-cost tables, mutually beneficial terms-of-trade bounds, and real-world limitations (transport costs, constant opportunity-cost assumption, over-specialization & environmental externalities).",
      },
      {
        id: "trade-protection-diagrams",
        heading: "4.2 Types of Trade Protection: Tariffs, Quotas & Production Subsidies",
        level: "SL",
        covers: "Free-trade world price diagram; tariffs, import quotas, domestic production subsidies & administrative barriers; stakeholder impacts (domestic producers, domestic consumers, foreign exporters, government revenue/spending) and [HL] exact quantitative calculation of tariff revenue, subsidy expenditure, quota rents, and production/consumption deadweight welfare-loss triangles.",
      },
      {
        id: "arguments-for-against-protection",
        heading: "4.3 Evaluating Arguments For & Against Trade Protection",
        level: "SL",
        covers: "Valid/nuanced arguments (infant industry, national security, health/safety/environmental standards, preventing dumping, domestic employment/diversification, tariff revenue in developing economies) vs economic costs (misallocation of resources, higher consumer/input prices, reduced export competitiveness, retaliation/trade wars, corruption).",
      },
      {
        id: "economic-integration-wto",
        heading: "4.4 Trading Blocs, Monetary Unions, Trade Creation/Diversion & WTO",
        level: "SL",
        covers: "Stages of economic integration: bilateral/multilateral agreements, Preferential Trade Areas (PTAs), Free Trade Areas (FTAs — e.g. USMCA/ASEAN), Customs Unions (common external tariff), Common Markets (free movement of labour/capital — EU Single Market), and Monetary Unions (Eurozone — loss of independent monetary & exchange-rate policy); [HL] trade creation vs trade diversion; role & limitations of the WTO.",
      },
    ],
  },
  {
    id: "4b-exchange-bop-development",
    title: "Unit 4B: Exchange Rates, Balance of Payments & Economic Development",
    strand: "Unit 4: The Global Economy",
    icon: "🌍",
    level: "SL",
    curriculum: "IB Economics FA2022 4.5 Exchange Rates, 4.6 BoP & Marshall–Lerner [HL], 4.7–4.10 Sustainable Development",
    sections: [
      {
        id: "exchange-rates-regimes",
        heading: "4.5 Floating, Fixed & Managed Exchange Rates",
        level: "SL",
        covers: "Floating exchange rates (appreciation/depreciation driven by trade demand, relative inflation, interest rates/hot money, FDI, speculation), fixed exchange rates (revaluation/devaluation defended via central-bank foreign reserves & interest rates), managed float (e.g. Singapore MAS S$NEER band), currency conversion calculations, and macroeconomic effects of currency swings.",
      },
      {
        id: "bop-marshall-lerner-hl",
        heading: "4.6 Balance of Payments, Persistent Deficits & Marshall–Lerner / J-Curve [HL]",
        level: "SL",
        covers: "Current Account (trade in goods/services, primary & secondary income), Capital Account & Financial Account (FDI, portfolio investment, reserve assets), why BoP sums to zero (CA deficit financed by FA surplus), consequences of persistent current-account deficits/surpluses; expenditure-switching vs expenditure-reducing policies; [HL] Marshall–Lerner condition (|PED_X| + |PED_M| > 1) and the J-curve effect.",
      },
      {
        id: "measuring-development-barriers",
        heading: "4.7–4.9 Sustainable Development, Indicators (HDI/IHDI/MPI) & Barriers",
        level: "SL",
        covers: "Economic growth vs multidimensional economic development, UN Sustainable Development Goals (SDGs), single vs composite indicators (GDP/GNI per capita PPP, HDI, Inequality-Adjusted HDI [IHDI], Gender Inequality Index [GII], Multidimensional Poverty Index [MPI], Happy Planet Index); barriers to development (poverty cycle, weak institutions/corruption, human-capital & gender gaps, primary-product dependence, deteriorating terms of trade, external debt).",
      },
      {
        id: "growth-development-strategies",
        heading: "4.10 Growth & Development Strategies: Trade, Aid, FDI & Institutions",
        level: "SL",
        covers: "Trade strategies (import substitution vs export promotion, economic integration, Fairtrade, diversification), Foreign Direct Investment (FDI & MNCs), humanitarian vs development aid (bilateral, multilateral, tied aid), debt relief, remittances, microfinance & mobile banking (M-Pesa), market-oriented vs interventionist strategies (Washington Consensus vs institutional/human-capital balance), and IMF/World Bank roles.",
      },
    ],
  },

  // ===================== HL PAPER 3: POLICY & MODELLING ====================
  {
    id: "5-hl-paper3-policy-quant",
    title: "Unit 5 (HL): Paper 3 Quantitative Modelling & Policy Recommendations",
    strand: "HL Paper 3: Policy & Modelling",
    icon: "🧮",
    level: "HL",
    curriculum: "IB Economics FA2022 HL Paper 3 (30%, 1h 45m, 60 marks): Cross-Unit Quantitative Mastery & 10-Mark Policy Synthesis",
    sections: [
      {
        id: "p3-micro-quantitative",
        heading: "HL Paper 3 Micro Modelling: Linear Equations, Surplus, Tax & Firm Costs",
        level: "HL",
        covers: "Solving linear demand (Q_d = a − bP) & supply (Q_s = c + dP) equilibria, plotting & computing consumer/producer surplus, post-tax/subsidy equilibria, tax incidence & deadweight loss triangles, PED/YED/PES from tables, and firm profit/loss/break-even/shut-down rectangles from MC/MR/AC/AVC schedules.",
      },
      {
        id: "p3-macro-quantitative",
        heading: "HL Paper 3 Macro Modelling: Real GDP, CPI, Progressive Tax & Multiplier",
        level: "HL",
        covers: "Nominal-to-real GDP deflator & growth-rate chains, weighted CPI basket construction & inflation rates, unemployment & labour-force participation rates, multi-bracket progressive income tax (total tax, average vs marginal rate) & indirect tax burden, and Keynesian multiplier (k = 1/[MPS + MPT + MPM]) gap-closing fiscal packages.",
      },
      {
        id: "p3-global-quantitative",
        heading: "HL Paper 3 Global Modelling: Comparative Advantage, Tariffs, Forex & BoP",
        level: "HL",
        covers: "Opportunity-cost tables & mutually beneficial terms-of-trade ranges, exact tariff & quota welfare triangles (domestic producer gain, consumer loss, govt revenue/quota rent, production & consumption DWL), exchange-rate conversions & % appreciation/depreciation, and reconstructing full Balance of Payments accounts.",
      },
      {
        id: "p3-ten-mark-policy",
        heading: "Mastering the 10-Mark HL Paper 3 Policy Recommendation Question",
        level: "HL",
        covers: "Structuring the compulsory 10-mark Policy Recommendation (2 per Paper 3, 20/60 marks!): committing to ONE clear policy anchored directly in the stimulus text & your earlier Paper 3 calculations, explaining the exact economic transmission mechanism (with diagram logic), and evaluating stakeholder impacts, short- vs long-run trade-offs, elasticities, and complementary policies to hit Band 8–10.",
      },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
