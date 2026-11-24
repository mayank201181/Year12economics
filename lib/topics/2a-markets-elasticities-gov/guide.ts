import type { TopicGuide } from "../../types.ts";

const SVG_EQUILIBRIUM_SURPLUS = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" role="img" aria-label="Competitive market equilibrium showing Demand equal to Marginal Benefit, Supply equal to Marginal Cost, Consumer Surplus, and Producer Surplus">
  <rect x="0" y="0" width="460" height="300" fill="none"/>
  <!-- Shaded Consumer Surplus triangle: (70,40), (70,150), (235,150) -->
  <polygon points="70,40 70,150 235,150" fill="#0d9488" fill-opacity="0.18"/>
  <!-- Shaded Producer Surplus triangle: (70,150), (70,225), (235,150) -->
  <polygon points="70,150 70,225 235,150" fill="#b45309" fill-opacity="0.18"/>
  <!-- Axes -->
  <line x1="70" y1="25" x2="70" y2="260" stroke="#6b563c" stroke-width="2"/>
  <line x1="70" y1="260" x2="425" y2="260" stroke="#6b563c" stroke-width="2"/>
  <polygon points="70,20 65,30 75,30" fill="#6b563c"/>
  <polygon points="430,260 420,255 420,265" fill="#6b563c"/>
  <text x="62" y="22" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Price ($)</text>
  <text x="422" y="282" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Quantity (units)</text>
  <!-- Demand curve D = MB: (70,40) to (370,240) passes through (235,150) -->
  <line x1="70" y1="40" x2="370" y2="240" stroke="#0d9488" stroke-width="2.8"/>
  <text x="374" y="244" font-size="12" font-weight="700" fill="#0d9488">D = MB</text>
  <!-- Supply curve S = MC: (70,225) to (370,89) passes through (235,150) -->
  <line x1="70" y1="225" x2="370" y2="89" stroke="#b45309" stroke-width="2.8"/>
  <text x="374" y="92" font-size="12" font-weight="700" fill="#b45309">S = MC</text>
  <!-- Equilibrium dashed lines -->
  <line x1="70" y1="150" x2="235" y2="150" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="5,4"/>
  <line x1="235" y1="150" x2="235" y2="260" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="5,4"/>
  <circle cx="235" cy="150" r="5" fill="#24190a"/>
  <!-- Labels -->
  <text x="62" y="45" font-size="11" text-anchor="end" fill="#6b563c">P_max</text>
  <text x="62" y="154" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">P_e</text>
  <text x="62" y="229" font-size="11" text-anchor="end" fill="#6b563c">P_min</text>
  <text x="235" y="278" font-size="12" font-weight="700" text-anchor="middle" fill="#24190a">Q_e</text>
  <text x="64" y="275" font-size="11" text-anchor="end" fill="#6b563c">0</text>
  <!-- Region tags -->
  <text x="122" y="122" font-size="12" font-weight="700" fill="#0d9488">Consumer</text>
  <text x="122" y="137" font-size="12" font-weight="700" fill="#0d9488">Surplus (CS)</text>
  <text x="122" y="178" font-size="12" font-weight="700" fill="#b45309">Producer</text>
  <text x="122" y="193" font-size="12" font-weight="700" fill="#b45309">Surplus (PS)</text>
  <!-- Equilibrium callout -->
  <text x="247" y="143" font-size="11" font-weight="700" fill="#24190a">E (Allocative efficiency:</text>
  <text x="247" y="157" font-size="11" fill="#6b563c">MB = MC; CS + PS max)</text>
</svg>`;

const SVG_LOSS_AVERSION = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 300" role="img" aria-label="Prospect theory asymmetric value function illustrating loss aversion where a 100 dollar loss causes roughly twice the psychological pain of a 100 dollar gain">
  <rect x="0" y="0" width="460" height="300" fill="none"/>
  <!-- Axes crossing at (230, 125) -->
  <line x1="30" y1="125" x2="430" y2="125" stroke="#6b563c" stroke-width="1.8"/>
  <line x1="230" y1="20" x2="230" y2="282" stroke="#6b563c" stroke-width="1.8"/>
  <polygon points="435,125 425,120 425,130" fill="#6b563c"/>
  <polygon points="230,15 225,25 235,25" fill="#6b563c"/>
  <!-- Axis titles -->
  <text x="240" y="28" font-size="12" font-weight="700" fill="#0d9488">Perceived Value (+)</text>
  <text x="240" y="278" font-size="12" font-weight="700" fill="#c2410c">Perceived Pain (−)</text>
  <text x="428" y="114" font-size="12" font-weight="700" text-anchor="end" fill="#0d9488">Gains (+$)</text>
  <text x="34" y="114" font-size="12" font-weight="700" fill="#c2410c">Losses (−$)</text>
  <!-- Asymmetric S-curve: gains concave (230,125) -> (330,72) -> (410,54); losses convex & steep (230,125) -> (130,235) -> (50,270) -->
  <path d="M 230 125 Q 280 76 410 54" fill="none" stroke="#0d9488" stroke-width="3"/>
  <path d="M 230 125 Q 175 215 55 268" fill="none" stroke="#c2410c" stroke-width="3"/>
  <!-- Reference point -->
  <circle cx="230" cy="125" r="4.5" fill="#24190a"/>
  <text x="238" y="142" font-size="11" font-weight="700" fill="#24190a">Reference point</text>
  <!-- +$100 gain drop lines at x=330, y=76 -->
  <line x1="330" y1="125" x2="330" y2="76" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="230" y1="76" x2="330" y2="76" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="330" cy="76" r="4" fill="#0d9488"/>
  <text x="330" y="142" font-size="11" font-weight="700" text-anchor="middle" fill="#0d9488">+$100</text>
  <text x="223" y="80" font-size="11" font-weight="700" text-anchor="end" fill="#0d9488">+V</text>
  <!-- -$100 loss drop lines at x=130, y=224 -->
  <line x1="130" y1="125" x2="130" y2="224" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="130" y1="224" x2="230" y2="224" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="130" cy="224" r="4" fill="#c2410c"/>
  <text x="130" y="114" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">−$100</text>
  <text x="238" y="228" font-size="11" font-weight="700" fill="#c2410c">≈ −2V (steeper slope)</text>
  <!-- Callout annotations -->
  <text x="295" y="42" font-size="11" fill="#6b563c">Concave: diminishing</text>
  <text x="295" y="55" font-size="11" fill="#6b563c">sensitivity to gains</text>
  <text x="35" y="218" font-size="11" fill="#c2410c" font-weight="700">Losses hurt ~2×</text>
  <text x="35" y="232" font-size="11" fill="#6b563c">more than equal gains</text>
</svg>`;

const SVG_PED_LINEAR_TR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 320" role="img" aria-label="Price elasticity of demand varying along a straight-line demand curve with elastic upper half, unitary elastic midpoint where Total Revenue peaks, and inelastic lower half">
  <rect x="0" y="0" width="460" height="320" fill="none"/>
  <!-- Top panel: Linear Demand curve -->
  <line x1="70" y1="18" x2="70" y2="178" stroke="#6b563c" stroke-width="1.8"/>
  <line x1="70" y1="178" x2="415" y2="178" stroke="#6b563c" stroke-width="1.8"/>
  <text x="62" y="24" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">Price</text>
  <text x="415" y="172" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">Q</text>
  <!-- Straight line from (70,30) to (370,178); midpoint (220,104) -->
  <line x1="70" y1="30" x2="220" y2="104" stroke="#0d9488" stroke-width="3"/>
  <line x1="220" y1="104" x2="370" y2="178" stroke="#c2410c" stroke-width="3"/>
  <!-- Midpoint & endpoints -->
  <circle cx="70" cy="30" r="4" fill="#0d9488"/>
  <circle cx="220" cy="104" r="5" fill="#b45309"/>
  <circle cx="370" cy="178" r="4" fill="#c2410c"/>
  <text x="78" y="32" font-size="11" font-weight="700" fill="#0d9488">PED = ∞</text>
  <text x="155" y="64" font-size="11" font-weight="700" fill="#0d9488">PED &gt; 1 (Elastic)</text>
  <text x="155" y="77" font-size="10" fill="#6b563c">Cut P to raise TR</text>
  <text x="232" y="102" font-size="11" font-weight="700" fill="#b45309">Midpoint: PED = 1</text>
  <text x="285" y="138" font-size="11" font-weight="700" fill="#c2410c">PED &lt; 1 (Inelastic)</text>
  <text x="285" y="151" font-size="10" fill="#6b563c">Raise P to raise TR</text>
  <text x="372" y="192" font-size="11" font-weight="700" text-anchor="middle" fill="#c2410c">PED = 0</text>
  <!-- Vertical dashed line linking midpoint to TR peak -->
  <line x1="220" y1="104" x2="220" y2="300" stroke="#b45309" stroke-width="1.5" stroke-dasharray="5,4"/>
  <!-- Bottom panel: Total Revenue parabola -->
  <line x1="70" y1="205" x2="70" y2="300" stroke="#6b563c" stroke-width="1.8"/>
  <line x1="70" y1="300" x2="415" y2="300" stroke="#6b563c" stroke-width="1.8"/>
  <text x="62" y="214" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">TR ($)</text>
  <text x="415" y="294" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">Q</text>
  <!-- Quadratic Bezier peaking at (220,218) -->
  <path d="M 70 300 Q 220 136 370 300" fill="none" stroke="#b45309" stroke-width="2.8"/>
  <circle cx="220" cy="218" r="4.5" fill="#b45309"/>
  <text x="230" y="222" font-size="11" font-weight="700" fill="#b45309">Maximum Total Revenue</text>
  <text x="220" y="315" font-size="11" font-weight="700" text-anchor="middle" fill="#24190a">Q_mid</text>
</svg>`;

const SVG_TAX_INCIDENCE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 310" role="img" aria-label="Specific indirect tax shifting supply upwards showing Consumer Tax Burden, Producer Tax Burden, Government Tax Revenue, and Deadweight Welfare Loss triangle">
  <rect x="0" y="0" width="460" height="310" fill="none"/>
  <!-- Coordinates: Axes (70,25)-(70,265)-(425,265) -->
  <!-- D: (70,40) to (370,240), slope = 2/3 px/px => y = 40 + (2/3)(x-70) -->
  <!-- S1: (70,240) to (370,90), slope = -1/2 px/px => y = 240 - 0.5(x-70) -->
  <!-- Equilibrium E1: 40 + (2/3)u = 240 - 0.5u => (7/6)u = 200 => u = 171.4 => x = 241, y = 154 -->
  <!-- Tax shift t = 70 px upward: S2: (70,170) to (370,20) => y = 170 - 0.5(x-70) -->
  <!-- New Equilibrium E2: 40 + (2/3)u = 170 - 0.5u => (7/6)u = 130 => u = 111.4 => x = 181, y = 114 -->
  <!-- On S1 at x=181: y = 240 - 0.5(111.4) = 184 (note 184 - 114 = 70 = tax!) -->
  <!-- Shaded Consumer Tax Burden: x=70..181, y=114..154 -->
  <rect x="70" y="114" width="111" height="40" fill="#0369a1" fill-opacity="0.22"/>
  <!-- Shaded Producer Tax Burden: x=70..181, y=154..184 -->
  <rect x="70" y="154" width="111" height="30" fill="#b45309" fill-opacity="0.22"/>
  <!-- Shaded Deadweight Loss triangle: (181,114), (181,184), (241,154) -->
  <polygon points="181,114 181,184 241,154" fill="#c2410c" fill-opacity="0.28"/>
  <!-- Axes -->
  <line x1="70" y1="22" x2="70" y2="265" stroke="#6b563c" stroke-width="2"/>
  <line x1="70" y1="265" x2="425" y2="265" stroke="#6b563c" stroke-width="2"/>
  <polygon points="70,17 65,27 75,27" fill="#6b563c"/>
  <polygon points="430,265 420,260 420,270" fill="#6b563c"/>
  <text x="62" y="24" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Price ($)</text>
  <text x="422" y="286" font-size="12" font-weight="700" text-anchor="end" fill="#24190a">Quantity</text>
  <!-- Curves -->
  <line x1="70" y1="40" x2="370" y2="240" stroke="#0d9488" stroke-width="2.6"/>
  <text x="375" y="244" font-size="12" font-weight="700" fill="#0d9488">D</text>
  <line x1="70" y1="240" x2="370" y2="90" stroke="#b45309" stroke-width="2.6"/>
  <text x="375" y="94" font-size="12" font-weight="700" fill="#b45309">S₁</text>
  <line x1="70" y1="170" x2="350" y2="30" stroke="#c2410c" stroke-width="2.6"/>
  <text x="354" y="34" font-size="12" font-weight="700" fill="#c2410c">S₂ = S₁ + t</text>
  <!-- Shift arrow -->
  <line x1="300" y1="120" x2="300" y2="62" stroke="#c2410c" stroke-width="2"/>
  <polygon points="300,56 295,66 305,66" fill="#c2410c"/>
  <text x="308" y="96" font-size="11" font-weight="700" fill="#c2410c">Tax = $t</text>
  <!-- Dashed projections -->
  <line x1="70" y1="114" x2="181" y2="114" stroke="#0369a1" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="70" y1="154" x2="241" y2="154" stroke="#6b563c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <line x1="70" y1="184" x2="181" y2="184" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="181" y1="114" x2="181" y2="265" stroke="#6b563c" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="241" y1="154" x2="241" y2="265" stroke="#6b563c" stroke-width="1.4" stroke-dasharray="4,3"/>
  <!-- Key dots -->
  <circle cx="241" cy="154" r="4" fill="#6b563c"/>
  <circle cx="181" cy="114" r="4.5" fill="#0369a1"/>
  <circle cx="181" cy="184" r="4" fill="#b45309"/>
  <!-- Axis tick labels -->
  <text x="62" y="118" font-size="11" font-weight="700" text-anchor="end" fill="#0369a1">P_c</text>
  <text x="62" y="158" font-size="11" font-weight="700" text-anchor="end" fill="#24190a">P_e</text>
  <text x="62" y="188" font-size="11" font-weight="700" text-anchor="end" fill="#b45309">P_p</text>
  <text x="181" y="282" font-size="11" font-weight="700" text-anchor="middle" fill="#24190a">Q_t</text>
  <text x="241" y="282" font-size="11" font-weight="700" text-anchor="middle" fill="#6b563c">Q_e</text>
  <!-- Area annotations -->
  <text x="125" y="138" font-size="10.5" font-weight="700" text-anchor="middle" fill="#0369a1">Consumer burden</text>
  <text x="125" y="173" font-size="10.5" font-weight="700" text-anchor="middle" fill="#b45309">Producer burden</text>
  <text x="206" y="157" font-size="10.5" font-weight="700" text-anchor="middle" fill="#c2410c">DWL</text>
  <!-- Bottom legend -->
  <text x="72" y="302" font-size="10.5" fill="#6b563c">Govt Tax Revenue = (P_c − P_p) × Q_t = Consumer burden + Producer burden</text>
</svg>`;

export const guide: TopicGuide = {
  id: "2a-markets-elasticities-gov",
  title: "Unit 2A: Demand, Supply, Elasticities & Government Intervention",
  strand: "Unit 2: Microeconomics",
  icon: "⚖️",
  level: "SL",
  summary:
    "How competitive markets allocate scarce resources through prices, why real-world buyers and firms depart from strict rationality [HL], how PED, YED and PES quantify responsiveness, and how price controls, indirect taxes and subsidies reshape social welfare.",
  intro:
    "Unit 2A (IB Economics FA2022 sections 2.1–2.7) builds the analytical engine of Microeconomics. Almost every diagram you draw across the entire Diploma — from externalities and tariffs to exchange rates — relies on mastering supply, demand, elasticities, and welfare triangles here. Pay close attention to the **9 IB Key Concepts** pulsing underneath every model: **Scarcity**, **Choice**, **Efficiency**, **Equity**, **Intervention**, and **Economic well-being**.",
  guide: [
    // =========================================================================
    // SECTION 1: DEMAND, SUPPLY, EQUILIBRIUM & SOCIAL SURPLUS
    // =========================================================================
    {
      id: "demand-supply-equilibrium",
      heading: "2.1–2.3 Demand, Supply, Market Equilibrium & Social Surplus",
      level: "SL",
      discovery: {
        problem:
          "In 2023, the auction price of a Singapore Category A Certificate of Entitlement (COE — the permit required to own a small car for 10 years) surged past S$100,000, roughly triple its 2019 level. During that period, the Land Transport Authority shrank the quarterly quota of available permits while household incomes and EV demand rebounded. Without drawing a formula yet: why did prices jump so dramatically rather than leaving dealerships with empty lots and fixed S$35,000 tags? Who was priced out, and what signal did S$100,000 send to households?",
        idea:
          "At S$35,000, quantity demanded vastly exceeded the smaller fixed supply, creating a severe **shortage (excess demand)**. In a competitive auction, buyers bid the price upwards until only those willing and able to pay the highest price remained — rationing the scarce permits. Simultaneously, the rising price **signalled** acute scarcity and gave households an **incentive** to switch to MRT transit, ride-hailing, or car-sharing.",
      },
      body: `### 2.1 Demand and Its Non-Price Determinants

**Demand** is the willingness and ability of consumers to purchase different quantities of a good or service at various prices over a given time period, *ceteris paribus*. The **Law of Demand** states that as the price of a good increases, the quantity demanded falls (an inverse relationship), causing a **movement along** the demand curve (contraction when price rises, extension when price falls).

A **shift** of the entire demand curve occurs when a **non-price determinant** changes:
- **Income:** Higher income shifts demand *right* for **normal goods** (e.g. speciality coffee, air travel) and *left* for **inferior goods** (e.g. instant noodles, second-hand budget items).
- **Prices of related goods:** A rise in the price of a **substitute** (e.g. tea) shifts demand for coffee *right*; a rise in the price of a **complement** (e.g. oat milk or coffee machines) shifts demand for coffee *left*.
- **Tastes and preferences** (advertising, health trends, viral news).
- **Future price expectations** (expecting higher prices next month raises demand today).
- **Number of consumers / demographics** (population growth, age structure).

**[HL] Why Does the Demand Curve Slope Downwards?**
Three microeconomic mechanisms explain the negative slope of demand:
1. **Income effect:** When a good's price falls, consumers' real purchasing power rises, allowing them to buy more of a normal good with the same money income.
2. **Substitution effect:** When a good's price falls relative to rivals, rational consumers substitute away from now relatively pricier alternatives toward the cheaper good.
3. **Law of Diminishing Marginal Utility:** As a consumer consumes successive extra units of a good in a given time period, the additional satisfaction (**marginal utility / marginal benefit, MB**) from each extra unit eventually declines. Consumers will only purchase additional units if the price falls to match their lower marginal benefit — which is why the demand curve doubles as the **Marginal Benefit (MB)** curve.

### 2.2 Supply and Its Non-Price Determinants

**Supply** is the willingness and ability of producers to offer different quantities of a good or service at various prices over a given time period, *ceteris paribus*. The **Law of Supply** states that higher prices lead to a larger quantity supplied (a positive relationship), shown as a **movement along** the supply curve.

**Non-price determinants** that shift the entire supply curve:
- **Costs of factors of production** (wages, raw materials, energy — higher input costs shift supply *left*).
- **Technology** (process innovations lower unit costs and shift supply *right*).
- **Prices of related goods:** *Competitive supply* (farmers switch from wheat to maize if maize prices rise, shifting wheat supply *left*) and *joint supply* (higher beef production automatically increases leather hide supply, shifting leather supply *right*).
- **Indirect taxes and subsidies:** Per-unit taxes shift supply *vertically upwards / left*; per-unit subsidies shift supply *vertically downwards / right*.
- **Producer expectations, number of firms in the market, and external supply shocks** (droughts, pandemics, geopolitical disruptions).

**[HL] Why Does the Supply Curve Slope Upwards?**
In the short run, firms operate with at least one fixed factor (such as factory floor space or farmland). Under the **Law of Diminishing Marginal Returns**, adding more units of a variable input (labour) to fixed capital eventually causes the extra output per worker (**marginal product, MP**) to fall. Because each extra unit of output now requires more labour time, **marginal cost (MC)** rises. Profit-motivated firms will only expand output if the market price rises to cover that higher marginal cost — which is why the competitive supply curve equals the **Marginal Cost (MC)** curve.

### 2.3 Competitive Equilibrium, Price Mechanism & Social Surplus

**Market equilibrium** occurs where quantity demanded equals quantity supplied ({{Q_d = Q_s}}) at the market-clearing price {{P_e}} and quantity {{Q_e}}.
- If {{P > P_e}}, **excess supply (surplus)** accumulates; firms cut prices to clear unsold stock, extending {{Q_d}} and contracting {{Q_s}} until equilibrium is restored.
- If {{P < P_e}}, **excess demand (shortage)** emerges; buyers bid prices up, contracting {{Q_d}} and extending {{Q_s}} back to {{E}}.

The **price mechanism** performs three automatic functions without central planning:
1. **Signalling function:** Price changes transmit information about where resources are scarce (rising price) or abundant (falling price).
2. **Incentive function:** Higher prices raise potential profit, motivating firms to expand output and enter the industry, while incentivising consumers to conserve or switch.
3. **Rationing function:** When scarcity creates a shortage, rising prices ration limited output to buyers with the highest willingness and ability to pay.

**Consumer Surplus (CS)** is the difference between the highest price consumers are willing to pay (height of the demand curve) and the actual market price paid, summed across all units bought. **Producer Surplus (PS)** is the difference between the actual market price received and the minimum price producers are willing to accept (height of the supply curve).

**Total Social (Community) Surplus** equals {{CS + PS}}. In a competitive market with no externalities, equilibrium {{E}} achieves **allocative efficiency**: marginal benefit equals marginal cost ({{MB = MC}}), so no further mutually beneficial trades exist and social surplus is maximised.

**[HL] Linear Demand and Supply Functions**
Linear markets are written as {{Q_d = a - bP}} and {{Q_s = c + dP}}, where {{a}} and {{c}} are horizontal (quantity-axis) intercepts and {{-b}}, {{d}} represent responsiveness of quantity to price. Setting {{Q_d = Q_s}} yields exact equilibrium {{(P_e, Q_e)}}. Setting {{Q_d = 0}} finds the vertical demand price-intercept {{P_max = a/b}}, and setting {{Q_s = 0}} finds the supply price-intercept {{P_min = -c/d}} (if {{c < 0}}, otherwise {{0}}), enabling exact triangle calculations:
- {{CS = 1/2 * Q_e * (P_max - P_e)}}
- {{PS = 1/2 * Q_e * (P_e - P_min)}}`,
      diagram: SVG_EQUILIBRIUM_SURPLUS,
      diagramCaption:
        "Competitive market equilibrium at E (Q_e, P_e). Consumer Surplus (teal) lies below D = MB and above P_e; Producer Surplus (amber) lies above S = MC and below P_e. Total social surplus (CS + PS) is maximised when MB = MC.",
      workedExamples: [
        {
          title: "[HL] Solving Linear Equilibrium, Consumer Surplus & Producer Surplus",
          problem:
            "The market for artisan roasted coffee beans (in thousand bags per week) is modelled by {{Q_d = 120 - 4P}} and {{Q_s = -30 + 6P}}, where {{P}} is the price in dollars per bag. Calculate the equilibrium price {{P_e}}, equilibrium quantity {{Q_e}}, Consumer Surplus (CS), and Producer Surplus (PS).",
          steps: [
            "Set quantity demanded equal to quantity supplied: {{120 - 4P = -30 + 6P}}.",
            "Collect terms: {{150 = 10P}}, so equilibrium price {{P_e = 15}} ($15 per bag).",
            "Substitute {{P_e = 15}} into demand (and verify with supply): {{Q_e = 120 - 4(15) = 60}} thousand bags. Check supply: {{-30 + 6(15) = 60}}.",
            "Find the demand price-intercept by setting {{Q_d = 0}}: {{0 = 120 - 4P}}, so {{P_max = 30}} ($30).",
            "Compute Consumer Surplus: {{CS = 1/2 * 60 * (30 - 15) = 450}} ($450,000 per week).",
            "Find the supply price-intercept by setting {{Q_s = 0}}: {{0 = -30 + 6P}}, so {{P_min = 5}} ($5).",
            "Compute Producer Surplus: {{PS = 1/2 * 60 * (15 - 5) = 300}} ($300,000 per week). Total Social Surplus = $750,000.",
          ],
          answer: "{{P_e = $15}}, {{Q_e = 60}} thousand bags, {{CS = $450}} thousand, {{PS = $300}} thousand.",
          yourTurn: {
            question:
              "A competitive market has demand {{Q_d = 100 - 2P}} and supply {{Q_s = -20 + 4P}} (price in $, quantity in single units). Calculate Consumer Surplus (in $) at equilibrium.",
            answer: { type: "number", value: 900, display: "$900" },
            solution:
              "Set 100 − 2P = −20 + 4P → 120 = 6P → P_e = $20 and Q_e = 60 units. Demand price-intercept (Q_d = 0) is P_max = 100/2 = $50. Thus CS = ½ × 60 × (50 − 20) = $900.",
          },
        },
        {
          title: "[SL] Analysing a Simultaneous Demand & Supply Shift",
          problem:
            "Severe West African droughts reduce the global cocoa harvest at the exact same time that rising middle-class incomes in Asia boost global demand for dark chocolate. Predict the effect on the equilibrium price and equilibrium quantity of dark chocolate.",
          steps: [
            "Drought raises cocoa bean costs (a key factor input), shifting the supply curve of dark chocolate **leftwards** ({{S_1 -> S_2}}). Alone, this raises price and reduces quantity.",
            "Rising incomes shift the demand curve for dark chocolate (a normal good) **rightwards** ({{D_1 -> D_2}}). Alone, this raises both price and quantity.",
            "Combine both effects: both shifts push equilibrium price **upwards**, so {{P_e}} **unambiguously increases**.",
            "For quantity, the supply decrease pushes {{Q_e}} down while the demand increase pushes {{Q_e}} up. Without knowing the relative size of each shift, the net change in {{Q_e}} is **indeterminate (ambiguous)**.",
          ],
          answer: "Equilibrium price unambiguously rises; equilibrium quantity is indeterminate unless the relative magnitudes of the shifts are specified.",
        },
      ],
      keyPoints: [
        "Price changes cause **movements along** a curve (changing *quantity demanded / supplied*); non-price determinants **shift** the entire curve (changing *demand / supply*).",
        "[HL] Downward-sloping demand rests on the **income effect**, **substitution effect**, and **diminishing marginal utility**; upward-sloping supply rests on **diminishing marginal returns** raising marginal cost.",
        "The **price mechanism** allocates scarce resources via **signalling**, **incentive**, and **rationing** functions.",
        "**Allocative efficiency** occurs at competitive equilibrium where {{MB = MC}} and **Total Social Surplus ({{CS + PS}})** is maximised.",
      ],
      whyItWorks:
        "At any output below {{Q_e}}, consumers value an extra unit more than it costs society to produce ({{MB > MC}}), so expanding output creates net social surplus. At any output above {{Q_e}}, producing an extra unit consumes resources worth more than the satisfaction it yields ({{MC > MB}}), destroying surplus. Only at {{Q_e}} is every surplus-creating trade exhausted and every surplus-destroying unit avoided.",
      strategies: [
        "In every IB diagram explanation, explicitly walk through the **disequilibrium adjustment mechanism**: e.g., after demand shifts right, state that at the old price {{P_1}} there is **excess demand (shortage)**, which puts upward pressure on price, causing a contraction along {{D_2}} and an extension along {{S_1}} to the new equilibrium {{E_2}}.",
        "For [HL] Consumer and Producer Surplus calculations, NEVER confuse the quantity-axis intercept ({{a}} or {{c}}) with the price-axis intercept ({{a/b}} or {{-c/d}})! Always set {{Q = 0}} to find the triangle height along the vertical Price axis.",
      ],
      thinkDeeper:
        "Allocative efficiency means maximum total surplus in dollar terms — NOT necessarily a fair distribution. If a life-saving drug clears at $5,000 per dose because wealthy buyers have high ability to pay, the market is allocatively efficient yet raises profound **equity** concerns. This tension between **efficiency** and **equity** drives almost all of Section 2.7.",
    },

    // =========================================================================
    // SECTION 2: BEHAVIOURAL ECONOMICS [HL]
    // =========================================================================
    {
      id: "behavioural-economics-hl",
      heading: "2.4 Critique of Maximizing Behaviour & Behavioural Economics",
      level: "HL",
      discovery: {
        problem:
          "Compare two neighbouring European countries with almost identical incomes, health systems, and cultural attitudes: Austria and Germany. Both allow citizens to opt in or opt out of organ donation in under two minutes. Yet Austria's donor consent rate sits above 99%, while Germany's hovers near 12%. If consumers truly made cold, rational utility-maximising decisions, why would a tiny administrative default create an 87-percentage-point gulf?",
        idea:
          "Austria uses an **opt-out (presumed consent) default**, whereas Germany uses an **opt-in default**. Because real humans suffer from **bounded rationality**, **status quo bias**, and **procrastination (bounded self-control)**, most people stick with whichever default box is pre-ticked. Changing the **choice architecture** — without banning any option or paying anyone — can transform real-world economic outcomes.",
      },
      body: `### Critique of Rational Consumer Choice (*Homo Economicus*)

Neoclassical microeconomics assumes consumers are perfectly rational utility-maximisers who possess complete information, stable preferences, unlimited calculating power, and pure self-interest. **Behavioural economics** blends psychology with economics to test these assumptions empirically and identifies four systematic departures:

1. **Bounded rationality (Herbert Simon):** Real consumers face limited time, incomplete knowledge, and finite cognitive bandwidth. Rather than evaluating every option mathematically, people rely on mental shortcuts called **heuristics** (rules of thumb) and **satisfice** (pick the first option that feels "good enough").
2. **Bounded self-control:** People display **present bias** (valuing immediate pleasure over future well-being), leading to chronic under-saving for retirement, impulse buying, smoking, or over-eating despite knowing the long-term harm.
3. **Bounded selfishness:** Humans care about fairness, altruism, reciprocity, and social approval — not purely personal material gain. In the classic **Ultimatum Game**, Player 1 splits $100 with Player 2; if Player 2 rejects the split, both get $0. Strict rational theory predicts Player 2 accepts even a $99/$1 split ($1 > $0), yet real players routinely reject unfair offers below $25–$30 to punish perceived unfairness.
4. **Imperfect information:** Buyers rarely know true product quality, hidden contract terms, or future health consequences, preventing utility-maximising choices.

### Cognitive Biases (Kahneman & Tversky)

- **Anchoring bias:** Decision-makers rely disproportionately on the first number they encounter (the *anchor*). Listing a jacket as ~~$280~~ **Now $140** makes $140 feel like a bargain even if its true worth to you is $110.
- **Framing bias:** Identical facts trigger different choices depending on how they are presented — e.g., yoghurt labelled **"90% fat-free"** consistently outsells identical yoghurt labelled **"contains 10% fat"**.
- **Availability bias:** People judge the probability of an event by how easily vivid examples come to mind. After a headline-grabbing plane crash or flash flood, purchases of travel or flood insurance spike far above actual actuarial risk.
- **Loss aversion (Prospect Theory):** Psychologically, the pain of losing $100 is roughly **twice as intense** as the pleasure of gaining $100. Loss aversion explains the **endowment effect** (people demand more to sell a mug they already own than they would pay to buy it) and **status quo bias** (sticking passively to existing plans and defaults).

### Choice Architecture & Nudges (Thaler & Sunstein)

**Choice architecture** is the deliberate design of the environment in which people make decisions. Pioneered by Richard Thaler and Cass Sunstein under the philosophy of **libertarian paternalism**, it steers people toward better long-run decisions (*paternalism*) without removing freedom of choice or imposing heavy taxes/bans (*libertarian*):

- **Default choice:** The pre-selected outcome if the individual takes no action — e.g. automatic enrolment into workplace pensions (UK National Employment Savings Trust, 2012) or opt-out organ donation (Singapore's Human Organ Transplant Act, HOTA).
- **Restricted choice:** Narrowing an overwhelming menu of options (e.g. offering 5 curated pension funds instead of 300) to overcome **choice overload** and decision paralysis.
- **Mandated choice:** Requiring individuals to make an active decision (e.g. mandatory "Yes / No" organ donor selection before renewing a driving licence).
- **Nudges:** Low-cost behavioural prompts that alter behaviour predictably without forbidding alternatives or significantly changing economic incentives — e.g. placing healthy fruit at eye level in school canteens, printing **social-norm reminders** ("9 out of 10 taxpayers in your district paid on time") on tax letters, or colour-coded **Nutri-Grade (A–D)** drink labels in Singapore.

**Evaluating Nudges:** Strengths include **very low fiscal cost**, preservation of **consumer sovereignty**, and quick implementation. Limitations include **weaker impact on deeply addictive or high-stakes behaviour** than taxes/regulation, **ethical concerns** over covert manipulation by governments or corporations ("sludge" / dark patterns), **uneven responsiveness** across income groups, and **diminishing effectiveness** as people habituate to cues.

### Critique of Business Profit Maximization

Traditional theory assumes all firms set output where marginal cost equals marginal revenue ({{MC = MR}}) to maximise short-run profit. In practice, large modern corporations exhibit **divorce of ownership from control** (the **principal–agent problem**): shareholders (principals) want maximum profit, whereas salaried managers (agents) may pursue alternative goals:
- **Satisficing:** Managers earn just enough "satisfactory" profit to keep shareholders content and avoid hostile takeovers, while enjoying lower stress, job security, and managerial perks.
- **Market share / growth maximization:** Expanding market share builds brand dominance, deters rivals, unlocks long-run economies of scale, and often ties directly to executive bonuses and prestige.
- **Corporate Social Responsibility (CSR):** Firms voluntarily invest in carbon neutrality, fair-trade supply chains, or ethical wages. CSR may reflect genuine ethical priorities, or strategic long-run profit protection (building brand loyalty, attracting Gen-Z talent, and pre-empting stricter government regulation).`,
      diagram: SVG_LOSS_AVERSION,
      diagramCaption:
        "Kahneman & Tversky's Prospect Theory value function: the curve is significantly steeper in the Losses quadrant than in the Gains quadrant, illustrating why losing $100 causes roughly twice the pain of the pleasure from gaining $100.",
      workedExamples: [
        {
          title: "[HL] Applying Choice Architecture to Low Retirement Savings",
          problem:
            "A government finds that 65% of young workers fail to open voluntary pension accounts despite generous tax breaks. Using behavioural economics concepts, explain why this occurs and evaluate using a default choice policy to solve it.",
          steps: [
            "Diagnose the behavioural barriers: young workers exhibit **bounded self-control (present bias)** — preferring immediate consumption today over retirement income 40 years away — alongside **bounded rationality** (complex fund choices cause choice overload) and **status quo bias** (sticking with the opt-in default of zero saving).",
            "Design the choice architecture: replace opt-in enrolment with **automatic enrolment (default choice)**, where 5% of wages are automatically invested unless the worker actively opts out, paired with **restricted choice** (a simple low-fee default fund).",
            "Evaluate strengths: harnesses inertia constructively (as in the UK's 2012 workplace pension reform, which lifted eligible participation past 85%), costs the Treasury far less than larger tax subsidies, and preserves freedom to opt out.",
            "Evaluate limitations: workers may stay stuck at a **too-low default contribution rate** (anchoring on 5%), low-income households may face short-term cash-flow strain, and nudges alone cannot guarantee adequate retirement income without complementary financial literacy or mandatory employer contributions.",
          ],
          answer:
            "Automatic enrolment overcomes present bias and status quo inertia at low fiscal cost while preserving choice, though default anchoring and low-income affordability require complementary policy design.",
          yourTurn: {
            question:
              "Which specific cognitive bias explains why consumers value avoiding a $100 loss roughly twice as strongly as securing an equivalent $100 gain?",
            answer: { type: "text", accept: ["loss aversion", "loss aversion bias"], display: "Loss aversion" },
            solution:
              "**Loss aversion** (from Kahneman & Tversky's Prospect Theory) states that psychological pain from a loss looms roughly twice as large as the utility from an equal-sized gain.",
          },
        },
        {
          title: "[HL] Principal–Agent Problem & Firm Satisficing vs CSR",
          problem:
            "Explain two reasons why a publicly listed global supermarket chain might NOT aim strictly to maximise short-run profit.",
          steps: [
            "Reason 1 — **Satisficing (Principal–Agent Problem):** Because ownership (dispersed shareholders) is separated from daily control (salaried executives), managers lack complete information on exact MC and MR curves and instead aim for a *satisfactory* target profit that pays steady dividends while preserving managerial job security and work–life balance.",
            "Reason 2 — **Corporate Social Responsibility (CSR) & Market Share:** Cutting plastic packaging, sourcing certified fair-trade coffee, or absorbing supplier cost spikes lowers short-run profit, yet builds long-run consumer loyalty, strengthens market share, and reduces the risk of harsh government environmental fines.",
          ],
          answer:
            "Separation of ownership and control induces managerial satisficing, while CSR and market-share strategies trade off short-run profit for ethical goals, reputation, and long-run survival.",
        },
      ],
      keyPoints: [
        "Behavioural economics replaces *Homo economicus* with **bounded rationality**, **bounded self-control**, **bounded selfishness**, and **imperfect information**.",
        "Core cognitive biases tested in IB HL: **anchoring**, **framing**, **availability**, and **loss aversion** (steep loss slope in Prospect Theory).",
        "**Choice architecture** uses **default**, **restricted**, and **mandated** choices plus **nudges** to steer behaviour at low cost while preserving freedom.",
        "Large firms often pursue **satisficing**, **market share maximization**, or **Corporate Social Responsibility (CSR)** rather than strict short-run profit maximization.",
      ],
      whyItWorks:
        "Traditional price policies (taxes and subsidies) assume people respond smoothly and rationally to financial incentives. Behavioural interventions target the psychological friction *between* intention and action — turning human inertia, social norms, and salience from obstacles into low-cost policy levers.",
      strategies: [
        "In IB Paper 1 HL essays on behavioural policy, ALWAYS evaluate nudges *against* traditional market-based policies (taxes/subsidies) and legislation: nudges work brilliantly for **inertia problems** (pensions, organ donation, tax compliance) but are too weak alone for **severe externalities** (carbon emissions, heavy tobacco addiction), where nudges work best as *complements*.",
        "Keep crisp real-world HL examples ready: **UK 2012 Workplace Pension auto-enrolment**, **Singapore's HOTA opt-out organ donation & Nutri-Grade labels**, and **UK Behavioural Insights Team tax-compliance norm letters**.",
      ],
      thinkDeeper:
        "If governments can use choice architecture to 'nudge' citizens toward healthier habits, corporations can deploy the exact same psychology in reverse — called **sludge** or **dark patterns** (pre-ticked insurance add-ons, one-click sign-up paired with five-page cancellation mazes). Does behavioural economics strengthen or weaken the case for consumer-protection regulation?",
    },

    // =========================================================================
    // SECTION 3: ELASTICITIES (PED, YED, PES)
    // =========================================================================
    {
      id: "elasticities-ped-yed-pes",
      heading: "2.5–2.6 Price & Income Elasticities of Demand (PED, YED) & Supply (PES)",
      level: "SL",
      discovery: {
        problem:
          "A metropolitan rail operator raises peak commuter fares by 20% and watches total ticket revenue **rise** by 14%. The same week, a multiplex cinema raises weekday movie ticket prices by 20% and watches total ticket revenue **fall** by 16%. Both businesses raised prices by the exact same percentage — why did one gain revenue while the other lost it?",
        idea:
          "Commuters have few immediate substitutes for peak rail travel (it is a daily necessity), so a 20% fare hike caused quantity demanded to fall by only ~5% — **price inelastic demand** ({{PED < 1}}), meaning the higher price per ticket outweighed the small drop in riders. Cinema-goers easily switched to streaming at home, so quantity demanded plunged by ~30% — **price elastic demand** ({{PED > 1}}), causing revenue to shrink.",
      },
      body: `### 2.5 Price Elasticity of Demand (PED)

**PED** measures the responsiveness of quantity demanded of a good to a change in its own price, *ceteris paribus*:

{{PED = |(%ΔQ_d) / (%ΔP)|}}

where {{%ΔQ_d = ((Q_2 - Q_1) / Q_1) * 100}} and {{%ΔP = ((P_2 - P_1) / P_1) * 100}}. Because demand obeys the law of demand, {{%ΔQ_d / %ΔP}} is negative; by IB Economics convention, we report the **absolute value (positive magnitude)** for PED.

| Range of PED | Classification | Meaning & Curve Shape | Effect of ↑ Price on Total Revenue ({{TR = P * Q}}) |
|---|---|---|---|
| {{PED = 0}} | Perfectly price inelastic | {{Q_d}} does not change at all (vertical curve) | TR rises proportionally with P |
| {{0 < PED < 1}} | Price inelastic | {{%ΔQ_d < %ΔP}} (relatively steep) | **TR rises** (price effect dominates) |
| {{PED = 1}} | Unitary price elastic | {{%ΔQ_d = %ΔP}} (rectangular hyperbola) | **TR stays constant (maximised)** |
| {{1 < PED < ∞}} | Price elastic | {{%ΔQ_d > %ΔP}} (relatively flat) | **TR falls** (quantity effect dominates) |
| {{PED = ∞}} | Perfectly price elastic | Any price rise drops {{Q_d}} to zero (horizontal curve) | TR drops to 0 |

**Critical Trap — PED Changes Along a Straight-Line Demand Curve!**
Even though a linear demand curve has a **constant slope**, its **PED falls continuously** as you move downwards and rightwards:
- Upper half (high {{P}}, low {{Q}}): **price elastic** ({{PED > 1}}). Cutting price raises TR.
- Exact midpoint: **unitary elastic** ({{PED = 1}}). **Total Revenue is maximised** here!
- Lower half (low {{P}}, high {{Q}}): **price inelastic** ({{PED < 1}}). Raising price raises TR.

**Determinants of PED:**
1. **Number and closeness of substitutes** (most important!): more close substitutes (e.g. branded cereal) → higher PED; few substitutes (insulin, tap water) → lower PED. Broadly defined categories ("food") have lower PED than narrowly defined brands ("organic Thai jasmine rice").
2. **Degree of necessity / addiction:** essentials and addictive goods (fuel, tobacco) are price inelastic; luxuries are price elastic.
3. **Proportion of consumer income spent:** cheap items (table salt, matches) have low PED because a 20% price rise barely dents budgets; big-ticket items (cars, laptops) have higher PED.
4. **Time period:** demand becomes **more price elastic over the long run** as consumers discover substitutes or adjust habits (e.g. buying an electric car after sustained petrol price hikes).

**[HL] Primary Commodities vs Manufactured Goods (PED & PES)**
- **Primary commodities** (crude oil, wheat, coffee beans, copper) typically have **low PED** (essential food or industrial inputs with few close substitutes) AND **low PES** (long harvest cycles, mining investment lags, finite arable land). Consequently, even modest supply shocks or global demand shifts cause **dramatic price volatility**, destabilising export revenues in commodity-dependent developing economies.
- **Manufactured goods** (smartphones, trainers, furniture) tend to have **higher PED** (many close branded substitutes) and **higher PES** (factories can scale shifts, hold warehouse inventories, and switch production lines faster), giving much more stable prices.

### 2.5 Income Elasticity of Demand (YED)

**YED** measures the responsiveness of quantity demanded of a good to a change in consumer income ({{Y}}), *ceteris paribus*:

{{YED = (%ΔQ_d) / (%ΔY)}}

**NEVER drop the plus or minus sign on YED!** The sign classifies the type of good:
- **{{YED < 0}} — Inferior good:** Demand falls as income rises (consumers switch up to higher-quality alternatives, e.g. budget instant noodles, economy intercity buses).
- **{{0 < YED < 1}} — Normal necessity (income inelastic):** Demand rises as income grows, but less than proportionately (e.g. staple bread, electricity, toothpaste).
- **{{YED > 1}} — Normal luxury (income elastic):** Demand rises more than proportionately as income grows (e.g. international tourism, fine dining, luxury watches).

**Why YED Matters for Firms & Structural Economic Change:**
- During an **economic boom**, firms producing luxury goods ({{YED > 1}}) experience surging sales, whereas during a **recession**, inferior-good producers (discount supermarkets like Aldi/Lidl) often expand while luxury brands suffer sharply.
- Over decades of rising real incomes (**Engel's Law**), low YED for primary agricultural goods versus high YED for manufactured products and services causes the **primary sector's share of GDP and employment to shrink**, while **secondary (manufacturing)** and especially **tertiary (services)** sectors expand.

### 2.6 Price Elasticity of Supply (PES)

**PES** measures the responsiveness of quantity supplied of a good to a change in its own price, *ceteris paribus*:

{{PES = (%ΔQ_s) / (%ΔP)}}

Because supply obeys the law of supply, **PES is always positive** ({{0}} to {{∞}}). Visually, for straight-line supply curves: any supply line intersecting the **vertical Price axis** has {{PES > 1}} (elastic); any ray passing through the **origin** has {{PES = 1}} (unitary); any supply line intersecting the **horizontal Quantity axis** has {{PES < 1}} (inelastic).

**Determinants of PES:**
1. **Time period:** Momentary run (fixed stock, {{PES ≈ 0}}) → Short run (fixed capital limits expansion, low PES) → Long run (firms build factories and enter the market, high PES).
2. **Unused (spare) capacity:** Factories operating below full capacity can boost output rapidly at low extra cost → higher PES.
3. **Ability to store stocks (inventories):** Non-perishable manufactured goods can be released from warehouses immediately → higher PES; perishable fresh seafood or hotel rooms cannot be stored → lower PES.
4. **Mobility of factors of production:** If labour and machinery can easily switch from producing product A to product B, PES is higher.
5. **Rate at which costs rise as output expands:** If marginal costs escalate steeply near capacity, PES is lower.`,
      diagram: SVG_PED_LINEAR_TR,
      diagramCaption:
        "Along a straight-line demand curve, slope is constant yet PED declines from ∞ at the price intercept, through PED = 1 at the midpoint (where Total Revenue peaks), to 0 at the quantity intercept.",
      workedExamples: [
        {
          title: "[SL] Calculating PED and Using the Total Revenue Test",
          problem:
            "A cafe raises the price of an iced latte from $4.00 to $5.00. Daily quantity demanded falls from 200 cups to 180 cups. Calculate the PED, classify demand, and compute the change in daily Total Revenue.",
          steps: [
            "Calculate percentage change in price: {{%ΔP = ((5.00 - 4.00) / 4.00) * 100 = +25%}}.",
            "Calculate percentage change in quantity demanded: {{%ΔQ_d = ((180 - 200) / 200) * 100 = -10%}}.",
            "Compute PED magnitude: {{PED = |-10% / +25%| = 0.40}}.",
            "Since {{0 < 0.40 < 1}}, demand is **price inelastic**.",
            "Compute Total Revenue before and after: {{TR_1 = 4.00 * 200 = $800}}; {{TR_2 = 5.00 * 180 = $900}}. Change in TR = **+$100** (raising price raised TR because demand is inelastic).",
          ],
          answer: "{{PED = 0.40}} (price inelastic); Total Revenue rises by **$100** (from $800 to $900).",
          yourTurn: {
            question:
              "A streaming service cuts its monthly subscription price from $20 to $16, and subscribers jump from 500 to 650. Calculate the PED (to 2 decimal places).",
            answer: { type: "number", value: 1.5, tolerance: 0.01, display: "1.5" },
            solution:
              "%ΔP = ((16 − 20) / 20) × 100 = −20%. %ΔQ_d = ((650 − 500) / 500) × 100 = +30%. PED = |+30% / −20%| = 1.50 (price elastic; TR rises from $10,000 to $10,400).",
          },
        },
        {
          title: "[SL] Calculating YED & PES",
          problem:
            "(a) Average annual household income rises from $40,000 to $44,000, and annual demand for organic blueberries increases from 50 punnets to 62 punnets. Calculate YED and classify the good. (b) When the price of handmade ceramic mugs increases from $10 to $12, weekly supply expands from 80 mugs to 92 mugs. Calculate PES.",
          steps: [
            "(a) Percentage change in income: {{%ΔY = ((44000 - 40000) / 40000) * 100 = +10%}}.",
            "Percentage change in quantity demanded: {{%ΔQ_d = ((62 - 50) / 50) * 100 = +24%}}.",
            "{{YED = (+24%) / (+10%) = +2.4}}. Because {{YED > +1}}, organic blueberries are a **normal luxury (income-elastic) good**.",
            "(b) Percentage change in price: {{%ΔP = ((12 - 10) / 10) * 100 = +20%}}.",
            "Percentage change in quantity supplied: {{%ΔQ_s = ((92 - 80) / 80) * 100 = +15%}}.",
            "{{PES = (+15%) / (+20%) = 0.75}}. Because {{0 < 0.75 < 1}}, supply is **price inelastic**.",
          ],
          answer: "(a) {{YED = +2.4}} (normal luxury good); (b) {{PES = 0.75}} (price inelastic supply).",
        },
      ],
      keyPoints: [
        "**PED** is reported as an absolute value: {{PED > 1}} (elastic, {{P}} and {{TR}} move oppositely), {{PED < 1}} (inelastic, {{P}} and {{TR}} move together), {{PED = 1}} (TR maximised).",
        "A straight-line demand curve has **constant slope** but **falling PED** from top-left ({{∞}}) to bottom-right ({{0}}).",
        "**YED keeps its sign:** {{YED < 0}} inferior; {{0 < YED < 1}} normal necessity; {{YED > 1}} normal luxury — driving long-run sectoral shifts from primary to tertiary industries.",
        "**PES** depends on time, spare capacity, inventory storability, and factor mobility; primary commodities have low PED and low PES, driving sharp price instability [HL].",
      ],
      whyItWorks:
        "Total Revenue is {{TR = P * Q}}. When price rises by {{10%}}, revenue tries to grow by {{10%}} from the price effect, while shrinking by {{%ΔQ_d}} from the quantity effect. PED compares those two percentages directly: if {{|%ΔQ_d| < 10%}} (inelastic), the price gain wins and TR climbs; if {{|%ΔQ_d| > 10%}} (elastic), the lost volume wins and TR drops.",
      strategies: [
        "Always check the denominator! IB Economics uses the **initial value** ({{(New - Old) / Old * 100}}), NOT the midpoint formula — mixing them up changes numerical answers on HL Paper 3.",
        "When sketching a relatively inelastic vs elastic supply curve, remember the **axis-intercept shortcut**: a straight supply line cutting the **vertical P-axis** has {{PES > 1}}; cutting the **horizontal Q-axis** has {{PES < 1}}; passing through the **origin** has {{PES = 1}}!",
      ],
      thinkDeeper:
        "Why do governments love levying indirect taxes on petrol, alcohol, and cigarettes? Because their **low PED** means tax revenue stays massive while consumption shrinks only slightly — creating an awkward policy tension between raising fiscal revenue and actually curbing harmful consumption!",
    },

    // =========================================================================
    // SECTION 4: GOVERNMENT INTERVENTION & WELFARE ANALYSIS
    // =========================================================================
    {
      id: "government-intervention-welfare",
      heading: "2.7 Price Controls, Indirect Taxes & Subsidies (Welfare Analysis)",
      level: "SL",
      discovery: {
        problem:
          "Suppose a government levies a $2.00 per litre specific tax on producers of sugary soft drinks. The supermarket immediately tries to pass the full $2.00 onto shoppers — yet finds the actual shelf price only rises by $1.40, while producers end up keeping $0.60 less per litre than before. Why didn't producers bear 100% of a tax legally billed to them — and why did shoppers absorb 70% of it?",
        idea:
          "**Legal incidence** (who sends the cheque to the tax office) is NOT **economic incidence** (who actually loses income). Because soft-drink demand is relatively **price inelastic** compared to supply ({{PED < PES}}), buyers don't cut purchases drastically when shelf prices climb, allowing firms to pass most ($1.40) of the tax onto consumers while absorbing only $0.60 themselves.",
      },
      body: `### Why Governments Intervene in Competitive Markets

Even when markets clear cleanly, governments intervene to: (1) raise **government revenue**, (2) promote **equity** by making essentials affordable for low-income households, (3) support **producers or workers** (farm incomes, living wages), and (4) alter consumption/production of specific goods. Every intervention involves a trade-off between **equity**, **efficiency**, and **stakeholder welfare**.

### 1. Price Ceilings (Maximum Prices)

A **price ceiling** is a legally enforced maximum price set **below** the free-market equilibrium ({{P_max < P_e}}) to be **binding** (setting {{P_max > P_e}} has no effect!). Common examples include urban **rent controls** (Berlin, New York) and staple food price caps (cooking oil, rice).
- **Market outcome:** Quantity demanded exceeds quantity supplied ({{Q_d > Q_s}}), generating a persistent **shortage**.
- **Unintended consequences:**
  - **Non-price rationing:** Long queues, waiting lists, lotteries, or landlord favouritism/discrimination.
  - **Parallel (underground / black) markets:** Unserved buyers willing to pay far above {{P_max}} trade illegally off the books.
  - **Quality deterioration:** Landlords under-maintain rent-controlled flats; producers shrink package sizes.
  - **Deadweight welfare loss (DWL):** Output contracts from {{Q_e}} to {{Q_s}}, creating allocative inefficiency ({{MB > MC}} on unproduced units).
- **Stakeholders:** Consumers who successfully obtain the good gain from the lower price, while unserved consumers lose out; producers lose revenue and Producer Surplus; workers risk lay-offs as output shrinks; governments face enforcement costs (or pressure to subsidise supply directly).

### 2. Price Floors (Minimum Prices)

A **price floor** is a legally enforced minimum price set **above** equilibrium ({{P_min > P_e}}) to be **binding**. Two classic IB applications:
1. **Agricultural price floors** (supporting farmers' incomes): Creates a persistent **surplus** ({{Q_s > Q_d}}). To maintain {{P_min}}, the government often buys the excess crop (costing taxpayers {{P_min * (Q_s - Q_d)}}), creating storage expenses, food waste, or controversial subsidised dumping onto global markets. Farmers gain higher revenue, while consumers pay more and buy less.
2. **National Minimum Wage** (a price floor in the labour market): Setting {{W_min > W_e}} raises wages for employed low-skilled workers (reducing working poverty and boosting equity), yet in a competitive labour market causes quantity of labour supplied ({{Q_s}}) to exceed firms' demand for labour ({{Q_d}}), risking **unemployment** and higher firm labour costs. *(Evaluation nuance: if labour demand is inelastic, productivity rises, or employers hold monopsony power, employment losses may be minimal!)*

### 3. Specific Indirect Taxes & Tax Incidence

A **specific (per-unit) indirect tax** of {{$t}} per unit raises firms' marginal cost by {{$t}} at every quantity, shifting the supply curve **vertically upwards** from {{S_1}} to {{S_2 = S_1 + t}}. *(Contrast with an **ad valorem** percentage tax like GST/VAT, which pivots supply upwards because the dollar tax widens as price rises.)*

- **New equilibrium:** Price paid by consumers rises from {{P_e}} to {{P_c}}; quantity traded drops from {{Q_e}} to {{Q_t}}; net price kept by producers falls to {{P_p = P_c - t}}.
- **Government Tax Revenue:** {{Revenue = t * Q_t = (P_c - P_p) * Q_t}}.
- **Tax Incidence (Who Pays?):**
  - **Consumer tax burden:** {{(P_c - P_e) * Q_t}} (per unit: {{P_c - P_e}}).
  - **Producer tax burden:** {{(P_e - P_p) * Q_t}} (per unit: {{P_e - P_p}}).
  - **Golden Rule of Incidence:** **The more price-inelastic side bears the larger share of the tax!**
    - If {{PED < PES}} (inelastic demand, e.g. petrol, cigarettes): **consumers bear most of the burden** ({{P_c - P_e > P_e - P_p}}).
    - If {{PED > PES}} (elastic demand, e.g. luxury yachts): **producers absorb most of the burden** ({{P_e - P_p > P_c - P_e}}).
    - If {{PED = PES}}: the tax splits **50 / 50**.
- **Welfare Loss:** Both Consumer Surplus and Producer Surplus shrink; part transfers to the government as tax revenue, while the shaded triangle {{DWL = 1/2 * t * (Q_e - Q_t)}} is lost entirely to society (assuming no negative externality).

### 4. Per-Unit Subsidies

A **per-unit subsidy** of {{$s}} paid by the government to producers lowers marginal production costs by {{$s}}, shifting supply **vertically downwards** from {{S_1}} to {{S_2 = S_1 - s}}.
- **New equilibrium:** Consumer price falls from {{P_e}} to {{P_c}}; quantity expands from {{Q_e}} to {{Q_sub}}; producers receive {{P_p = P_c + s > P_e}} per unit.
- **Total Government Expenditure:** {{Cost = s * Q_sub}} (carrying a direct **opportunity cost** — funded by higher taxes, borrowing, or cuts to schools/healthcare).
- **Welfare Loss (when no positive externality exists):** Both CS and PS expand, **yet** total government spending exceeds the combined gain in CS and PS by the overproduction deadweight loss triangle {{DWL = 1/2 * s * (Q_sub - Q_e)}}, because on units between {{Q_e}} and {{Q_sub}}, marginal cost exceeds marginal benefit ({{MC > MB}}).

### [HL] Quantitative Welfare Modelling After a Tax or Subsidy

Given linear functions {{Q_d = a - bP}} and {{Q_s = c + dP}}:
- After a **specific tax {{t}}**, producers only receive {{(P - t)}}, so substitute {{(P - t)}} into supply: {{Q_s' = c + d(P - t)}}. Set {{Q_d = Q_s'}} to solve for consumer price {{P_c}}, then {{P_p = P_c - t}}, {{Q_t = a - bP_c}}, {{Revenue = t * Q_t}}, and {{DWL = 1/2 * t * (Q_e - Q_t)}}.
- After a **per-unit subsidy {{s}}**, producers receive {{(P + s)}}, so substitute {{(P + s)}} into supply: {{Q_s' = c + d(P + s)}}. Set {{Q_d = Q_s'}} to find {{P_c}}, then {{P_p = P_c + s}}, {{Q_sub = a - bP_c}}, {{Govt Cost = s * Q_sub}}, and {{DWL = 1/2 * s * (Q_sub - Q_e)}}.`,
      diagram: SVG_TAX_INCIDENCE,
      diagramCaption:
        "A specific indirect tax of $t shifts supply vertically upwards from S₁ to S₂ = S₁ + t. Because demand is steeper (more inelastic) than supply here, consumers bear the larger blue tax rectangle while producers absorb the amber rectangle; the orange triangle represents Deadweight Welfare Loss.",
      workedExamples: [
        {
          title: "[HL] Computing Post-Tax Equilibrium, Incidence, Revenue & DWL",
          problem:
            "A market is described by {{Q_d = 100 - 2P}} and {{Q_s = -20 + 2P}}. The government imposes a specific indirect tax of $10 per unit on producers. Calculate: (a) initial {{(P_e, Q_e)}}, (b) post-tax {{P_c}}, {{P_p}}, and {{Q_t}}, (c) government tax revenue, consumer burden, and producer burden, and (d) Deadweight Welfare Loss (DWL).",
          steps: [
            "(a) Set {{100 - 2P = -20 + 2P}} → {{120 = 4P}} → {{P_e = $30}} and {{Q_e = 100 - 2(30) = 40}} units.",
            "(b) Replace {{P}} with {{(P - 10)}} in the supply equation: {{Q_s' = -20 + 2(P - 10) = -40 + 2P}}.",
            "Solve new equilibrium {{100 - 2P = -40 + 2P}} → {{140 = 4P}} → {{P_c = $35}}.",
            "Producer net price {{P_p = P_c - t = 35 - 10 = $25}}. New quantity {{Q_t = 100 - 2(35) = 30}} units.",
            "(c) Government tax revenue = {{t * Q_t = 10 * 30 = $300}}.",
            "Consumer tax burden = {{(35 - 30) * 30 = $150}} (50%); Producer tax burden = {{(30 - 25) * 30 = $150}} (50%, because demand and supply have equal slope magnitudes here).",
            "(d) Deadweight welfare loss = {{1/2 * t * (Q_e - Q_t) = 1/2 * 10 * (40 - 30) = $50}}.",
          ],
          answer:
            "{{P_e = $30, Q_e = 40}}; {{P_c = $35, P_p = $25, Q_t = 30}}; Govt Revenue = $300 ($150 consumer / $150 producer); {{DWL = $50}}.",
          yourTurn: {
            question:
              "A market has {{Q_d = 140 - 2P}} and {{Q_s = -20 + 6P}}. A specific tax of $8 per unit is imposed on producers. Calculate total government tax revenue (in $).",
            answer: { type: "number", value: 704, display: "$704" },
            solution:
              "Pre-tax: 140 − 2P = −20 + 6P → P_e = $20, Q_e = 100. Post-tax supply: Q_s' = −20 + 6(P − 8) = −68 + 6P. Set 140 − 2P = −68 + 6P → 8P = 208 → P_c = $26, P_p = $18, Q_t = 140 − 52 = 88. Govt revenue = $8 × 88 = $704 (with consumers paying $6/unit and producers $2/unit).",
          },
        },
        {
          title: "[HL] Per-Unit Subsidy Equilibrium, Fiscal Cost & DWL",
          problem:
            "Given {{Q_d = 120 - 4P}} and {{Q_s = 4P}}, the government grants producers a $5 per-unit subsidy. Calculate the new consumer price {{P_c}}, producer price {{P_p}}, new quantity {{Q_sub}}, total government expenditure, and DWL (assuming no externalities).",
          steps: [
            "Pre-subsidy equilibrium: {{120 - 4P = 4P}} → {{8P = 120}} → {{P_e = $15}}, {{Q_e = 60}} units.",
            "Post-subsidy supply (replace {{P}} with {{P + 5}}): {{Q_s' = 4(P + 5) = 20 + 4P}}.",
            "Set {{120 - 4P = 20 + 4P}} → {{8P = 100}} → {{P_c = $12.50}}, and {{P_p = 12.50 + 5 = $17.50}}.",
            "New quantity: {{Q_sub = 120 - 4(12.50) = 70}} units.",
            "Government subsidy cost = {{s * Q_sub = 5 * 70 = $350}}.",
            "Deadweight welfare loss = {{1/2 * s * (Q_sub - Q_e) = 1/2 * 5 * (70 - 60) = $25}}.",
          ],
          answer: "{{P_c = $12.50}}, {{P_p = $17.50}}, {{Q_sub = 70}}, Govt Cost = $350, {{DWL = $25}}.",
        },
      ],
      keyPoints: [
        "Binding **price ceilings** sit **below** {{P_e}} (creating shortages, parallel markets, and quality decline); binding **price floors** sit **above** {{P_e}} (creating surpluses or unemployment).",
        "A **specific indirect tax** shifts supply vertically upwards by {{$t}}; **the more inelastic side (lower PED vs PES) bears the heavier tax burden**.",
        "A **per-unit subsidy** shifts supply vertically downwards by {{$s}}, lowering {{P_c}}, raising {{P_p}}, expanding output, and imposing fiscal cost {{s * Q_sub}}.",
        "[HL] Substitute {{(P - t)}} into {{Q_s}} for a specific tax and {{(P + s)}} into {{Q_s}} for a subsidy — NEVER add or subtract {{t}} directly from the constant {{c}}!",
      ],
      whyItWorks:
        "Why do you replace {{P}} with {{(P - t)}} inside {{Q_s = c + dP}}? Because producers base their output decision strictly on the **net price they actually keep** after handing {{$t}} per unit to the tax authority. If buyers pay {{P}}, producers keep {{P - t}}, so supply at market price {{P}} equals whatever they would have supplied at net price {{P - t}}.",
      strategies: [
        "On every IB Paper 1 / Paper 2 evaluation of price controls, indirect taxes, or subsidies, systematically assess **four stakeholders**: (1) Consumers (especially low-income equity/regressivity!), (2) Producers, (3) Workers (employment tracks output!), and (4) Government budget (revenue vs opportunity cost).",
        "Always check whether a price ceiling or floor is **binding** before claiming it causes a shortage or surplus — a minimum wage set *below* the prevailing equilibrium wage has zero direct market effect.",
      ],
      thinkDeeper:
        "Indirect taxes on essentials like fuel or food are **regressive** because low-income households spend a higher share of their income on them, AND low PED ensures consumers bear most of the tax burden. How can a government combine an indirect tax (e.g. carbon or sugar tax) with targeted transfers or subsidies to protect **equity** without losing the price signal?",
    },
  ],
  learn: {
    flashcards: [
      {
        front: "State the Law of Demand and distinguish a movement along D from a shift of D.",
        back: "Ceteris paribus, as price rises, quantity demanded falls. A change in the good's own **price** causes a **movement along** D; a change in a **non-price determinant** (income, tastes, related goods' prices, expectations, population) **shifts** the entire curve.",
      },
      {
        front: "Explain the three functions of the price mechanism.",
        back: "1) **Signalling:** price changes communicate scarcity or surplus to buyers and sellers. 2) **Incentive:** higher prices motivate firms to produce more and consumers to economise. 3) **Rationing:** rising prices allocate scarce output to those with highest willingness and ability to pay.",
      },
      {
        front: "Define Consumer Surplus, Producer Surplus, and Allocative Efficiency.",
        back: "**CS:** difference between highest price consumers are willing to pay and actual market price. **PS:** difference between market price received and minimum price producers will accept. **Allocative efficiency:** {{MB = MC}}, where total social surplus ({{CS + PS}}) is maximised.",
      },
      {
        front: "[HL] Name the three microeconomic reasons why a demand curve slopes downwards.",
        back: "1) **Income effect** (lower P raises real purchasing power), 2) **Substitution effect** (lower relative P prompts switching from rivals), and 3) **Law of Diminishing Marginal Utility** (each extra unit adds less marginal benefit).",
      },
      {
        front: "[HL] Why does the Law of Diminishing Marginal Returns explain upward-sloping short-run supply?",
        back: "Adding more variable inputs (labour) to fixed capital eventually reduces marginal product (MP), causing **marginal cost (MC)** to rise; firms only produce more if market price rises to cover rising MC.",
      },
      {
        front: "[HL] Distinguish bounded rationality, bounded self-control, and bounded selfishness.",
        back: "**Bounded rationality:** limited info/time/cognitive power leads to heuristics and satisficing. **Bounded self-control:** present bias causes under-saving or over-consumption. **Bounded selfishness:** altruism and fairness norms (e.g. Ultimatum Game) override pure self-interest.",
      },
      {
        front: "[HL] Contrast anchoring, framing, availability bias, and loss aversion.",
        back: "**Anchoring:** over-relying on an initial reference figure. **Framing:** identical info elicits different choices depending on wording. **Availability:** judging odds by vivid recent memories. **Loss aversion:** losing $X hurts ~2× as much as gaining $X feels good.",
      },
      {
        front: "[HL] Distinguish default choice, restricted choice, mandated choice, and nudges.",
        back: "**Default:** pre-selected option if no action is taken (auto-enrolment). **Restricted:** limiting menu size to beat choice overload. **Mandated:** requiring an explicit active yes/no choice. **Nudges:** low-cost cues altering choice architecture without bans or big financial incentives.",
      },
      {
        front: "[HL] Name three business objectives that challenge strict profit maximization.",
        back: "1) **Satisficing** (managers achieve 'good enough' profit due to principal–agent separation), 2) **Market share / growth maximization**, and 3) **Corporate Social Responsibility (CSR)** (ethical/environmental goals).",
      },
      {
        front: "How does PED relate to Total Revenue ({{TR = P * Q}})?",
        back: "If **elastic** ({{PED > 1}}), P and TR move in **opposite** directions (cut P to raise TR). If **inelastic** ({{PED < 1}}), P and TR move in the **same** direction (raise P to raise TR). At {{PED = 1}}, TR is **maximised**.",
      },
      {
        front: "How does YED classify goods, and why must you KEEP the sign?",
        back: "{{YED < 0}}: **inferior good** (demand falls as income rises). {{0 < YED < 1}}: **normal necessity**. {{YED > 1}}: **normal luxury (income elastic)**. Dropping the sign destroys the distinction between inferior and normal goods!",
      },
      {
        front: "What are the five main determinants of Price Elasticity of Supply (PES)?",
        back: "1) **Time period** (momentary/SR/LR), 2) **Spare/unused capacity**, 3) **Ability to store stocks (inventories)**, 4) **Mobility of factors of production**, and 5) **Rate at which marginal costs rise** as output expands.",
      },
      {
        front: "[HL] Why do primary commodities suffer much sharper price volatility than manufactured goods?",
        back: "Primary commodities (oil, wheat, coffee) have **both low PED** (essentials/inputs with few substitutes) **and low PES** (long growing/extraction cycles), so small shifts in S or D trigger steep price swings.",
      },
      {
        front: "Compare binding price ceilings vs binding price floors.",
        back: "**Binding price ceiling** ({{P_max < P_e}}): creates persistent **shortage**, queues, parallel markets, quality decline, and DWL. **Binding price floor** ({{P_min > P_e}}): creates persistent **surplus** (or unemployment for a minimum wage), govt purchase costs, and DWL.",
      },
      {
        front: "State the Tax Incidence Rule linking PED, PES, and indirect tax burden.",
        back: "The **more price-inelastic side bears the greater share of an indirect tax**. If {{PED < PES}}, consumers bear more ({{P_c - P_e > P_e - P_p}}); if {{PED > PES}}, producers absorb more.",
      },
      {
        front: "[HL] How do you modify {{Q_s = c + dP}} after a specific tax {{t}} or subsidy {{s}}?",
        back: "For a **specific tax {{t}}**, replace {{P}} with {{(P - t)}}: {{Q_s' = c + d(P - t)}}. For a **per-unit subsidy {{s}}**, replace {{P}} with {{(P + s)}}: {{Q_s' = c + d(P + s)}}.",
      },
    ],
    mustKnow: [
      "Never confuse a change in **quantity demanded/supplied** (price change → movement along) with a change in **demand/supply** (non-price determinant → shift).",
      "Competitive equilibrium with no externalities maximises **Total Social Surplus (CS + PS)** where **MB = MC** (allocative efficiency).",
      "Along a straight-line downward-sloping demand curve, **PED is NOT constant**: elastic on the upper half, **PED = 1** at the midpoint (maximum TR), inelastic on the lower half.",
      "Always take the **absolute value** for PED, ALWAYS **keep the sign** for YED, and always use the **initial value** in the percentage-change denominator.",
      "A **binding** price ceiling must lie **below** {{P_e}} (causing shortages); a **binding** price floor must lie **above** {{P_e}} (causing surpluses).",
      "Legal tax incidence (who sends the tax to government) does NOT determine economic incidence — **relative elasticity (PED vs PES)** determines who actually bears the burden.",
      "Every **per-unit subsidy** costs the government {{s * Q_sub}} (opportunity cost) and creates an overproduction DWL triangle when no positive externality exists.",
      "[HL] Behavioural economics critiques *Homo economicus* via bounded rationality, bounded self-control, bounded selfishness, cognitive biases, and Thaler–Sunstein **choice architecture / nudges**.",
      "[HL] To shift linear supply {{Q_s = c + dP}} by a specific tax {{t}}, substitute {{P - t}} for {{P}} (giving {{Q_s' = c + d(P - t)}}), NEVER subtract {{t}} from {{c}}!",
      "In Paper 1 Part (b) (15 marks), real-world examples and balanced stakeholder + short-run vs long-run evaluation are mandatory to unlock top bands (13–15).",
    ],
    misconceptions: [
      {
        wrong: "A steeper straight-line demand curve has the exact same PED at every point along it.",
        right: "Slope is constant, NOT PED! Every straight-line downward-sloping demand curve ranges from {{PED = ∞}} at the price intercept through {{PED = 1}} at the midpoint down to {{PED = 0}} at the quantity intercept.",
      },
      {
        wrong: "Because PED is always written as a positive number, you should also drop the minus sign on YED.",
        right: "NEVER drop the minus sign on YED! A negative YED identifies an **inferior good**, whereas a positive YED identifies a **normal good**.",
      },
      {
        wrong: "A price ceiling set above equilibrium causes a shortage, and a price floor set below equilibrium causes a surplus.",
        right: "Completely backwards! A ceiling only binds when set **below** {{P_e}} (preventing price from rising to clear a shortage); a floor only binds when set **above** {{P_e}} (preventing price from falling to clear a surplus).",
      },
      {
        wrong: "When an indirect tax is legally levied on producers, producers always pay 100% of the tax.",
        right: "Economic incidence depends strictly on **PED relative to PES**, regardless of who legally remits the tax. When {{PED < PES}}, consumers bear the larger burden via a higher shelf price {{P_c}}.",
      },
      {
        wrong: "A per-unit subsidy creates zero welfare loss because both Consumer Surplus and Producer Surplus increase.",
        right: "Even though CS and PS rise, total government expenditure ({{s * Q_sub}}) exceeds the combined CS + PS gain by the overproduction deadweight loss triangle {{1/2 * s * (Q_sub - Q_e)}} (assuming no positive externality).",
      },
      {
        wrong: "To apply a $4 specific tax to {{Q_s = -10 + 3P}}, subtract 4 from the constant to write {{Q_s' = -14 + 3P}}.",
        right: "Subtract $4 from **price**, not quantity! {{Q_s' = -10 + 3(P - 4) = -22 + 3P}}. Subtracting from {{c}} shifts the curve horizontally by 4 units instead of vertically by $4.",
        level: "HL",
      },
      {
        wrong: "A Thaler–Sunstein nudge includes carbon taxes and outright bans on unhealthy snacks.",
        right: "Taxes alter financial incentives sharply and bans remove choice altogether; true **nudges** preserve freedom of choice and avoid heavy financial penalties (e.g. defaults, eye-level placement, colour-coded labels).",
        level: "HL",
      },
    ],
    examMistakes: [
      "Writing 'demand increases' when a drop in the good's own price actually caused an **extension (increase in quantity demanded)** along the same demand curve.",
      "Drawing a specific indirect tax diagram without showing the producer's net price {{P_p = P_c - t}} on the original supply curve {{S_1}} — costing marks for producer burden and government revenue.",
      "Forgetting to shade or explicitly name the **Deadweight Welfare Loss** triangle and failing to explain *why* it represents allocative inefficiency ({{MB != MC}}).",
      "Using the midpoint formula for PED/YED/PES instead of the IB standard initial-value formula {{(New - Old) / Old * 100}}.",
      "Claiming a minimum wage always causes massive unemployment without evaluating **elasticity of labour demand**, **productivity gains**, or **monopsony** employers.",
      "Writing a Paper 1 Part (b) 15-mark essay with zero named real-world examples (capping the script in the middle band even if theory is flawless!).",
      "Calculating Consumer Surplus on HL Paper 3 using the horizontal quantity intercept {{a}} instead of solving {{Q_d = 0}} to get the vertical price intercept {{P_max = a/b}}.",
      "Confusing **Consumer Tax Burden** ({{(P_c - P_e) * Q_t}}) with **Total Government Tax Revenue** ({{(P_c - P_p) * Q_t}}) on HL Paper 3 calculations.",
    ],
    mnemonics: [
      {
        topic: "Determinants of PED",
        device: "S · P · A · T",
        explanation:
          "**S**ubstitutes (number & closeness), **P**roportion of income spent, **A**ddiction / necessity vs luxury, **T**ime period to adjust.",
      },
      {
        topic: "Determinants of PES",
        device: "T · S · S · M · C",
        explanation:
          "**T**ime period, **S**pare capacity, **S**tocks (ability to store), **M**obility of factors, **C**ost escalation rate.",
      },
      {
        topic: "Binding Price Controls",
        device: "Ceiling Below (Hit your head!) · Floor Above (Stand on it!)",
        explanation:
          "You cannot push a price *up* through a **ceiling** — so it only blocks equilibrium when placed **below** {{P_e}} (shortage). You cannot drop a price *down* through a **floor** — so it only blocks equilibrium when placed **above** {{P_e}} (surplus).",
      },
      {
        topic: "Four Behavioural Critiques of Rationality [HL]",
        device: "3 B's + I",
        explanation:
          "**B**ounded rationality, **B**ounded self-control, **B**ounded selfishness, plus **I**mperfect information.",
        level: "HL",
      },
    ],
    realWorld: [
      {
        emoji: "🥤",
        title: "UK Soft Drinks Industry Levy (2018) & Singapore Nutri-Grade Labels (2022)",
        detail:
          "The UK tiered indirect tax on high-sugar drinks prompted manufacturers to reformulate recipes aggressively, slashing sugar content in taxed drinks by over 35% while raising ~£330m annually — a prime Paper 1 Part (b) comparison against Singapore's behavioural **Nutri-Grade (A–D)** colour-label nudge and advertising ban on Grade D drinks.",
      },
      {
        emoji: "🏠",
        title: "Berlin Rent Freeze (Mietendeckel, 2020–2021)",
        detail:
          "Berlin's binding rent ceiling cut rents for sitting tenants by ~7–11% in the short run, yet shrank the supply of newly listed rental apartments by over 40%, sparked parallel-market 'furniture fees', and shifted demand sharply into unregulated suburbs before being struck down in 2021.",
      },
      {
        emoji: "🚗",
        title: "Singapore Certificate of Entitlement (COE) Price Mechanism",
        detail:
          "With a strictly fixed quota of car ownership permits (perfectly inelastic supply, {{PES = 0}}), surges in household income and EV demand drove Category A & B COE premiums past S$100,000–S$146,000 in 2023 — illustrating pure price rationing and signalling.",
      },
      {
        emoji: "💼",
        title: "UK Workplace Pension Auto-Enrolment (2012) [HL]",
        detail:
          "Switching employees from opt-in to **default opt-out** workplace pensions lifted eligible private-sector pension participation from roughly 47% in 2012 to over 88% within a decade — textbook proof of Thaler & Sunstein's choice architecture overcoming present bias and status quo inertia.",
      },
      {
        emoji: "🌾",
        title: "EU Common Agricultural Policy (CAP) & Thailand Rice-Pledging Floor (2011–2014)",
        detail:
          "Thailand guaranteed farmers a minimum rice price ~40–50% above global market rates. The binding price floor created an 18-million-tonne surplus stockpile, cost the Thai government over $15 billion in fiscal losses, and caused Thailand to lose its top global rice-exporter rank temporarily.",
      },
      {
        emoji: "☕",
        title: "Global Cocoa & Coffee Commodity Price Spikes (2024)",
        detail:
          "El Niño weather shocks and crop disease in Côte d'Ivoire and Ghana shrank cocoa supply; because both {{PED}} and {{PES}} for raw cocoa beans are very low (long tree-maturation cycle and few substitutes), global cocoa futures more than tripled past $10,000/tonne.",
      },
    ],
    videos: [
      {
        title: "IB Economics 2.1–2.3 Demand, Supply, Equilibrium & Social Surplus",
        channel: "EconplusDal (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=EconplusDal+IB+Economics+demand+supply+consumer+producer+surplus",
      },
      {
        title: "IB Economics HL 2.4 Behavioural Economics, Biases & Nudges",
        channel: "Brad Cartwright IB Economics (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Economics+HL+behavioural+economics+biases+choice+architecture+nudges",
      },
      {
        title: "IB Economics 2.5–2.6 PED, YED, PES & Total Revenue Explained",
        channel: "EconplusDal (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Economics+PED+YED+PES+total+revenue+test",
      },
      {
        title: "IB Economics 2.7 Price Controls, Indirect Taxes, Subsidies & HL Calculations",
        channel: "IB Economics Revision (YouTube Search)",
        url: "https://www.youtube.com/results?search_query=IB+Economics+2.7+indirect+tax+subsidy+price+ceiling+floor+calculations",
      },
    ],
    formulas: [
      {
        name: "Linear Demand & Supply Equilibrium",
        formula: "{{Q_d = a - bP}} and {{Q_s = c + dP}}; equilibrium at {{Q_d = Q_s}}",
        note: "Demand P-intercept: {{P_max = a/b}}; Supply P-intercept: {{P_min = -c/d}} (if {{c < 0}}).",
        level: "HL",
      },
      {
        name: "Consumer Surplus (Linear Market)",
        formula: "{{CS = 1/2 * Q_e * (P_max - P_e)}}",
        note: "Triangle above equilibrium price and below the demand curve.",
        level: "HL",
      },
      {
        name: "Producer Surplus (Linear Market)",
        formula: "{{PS = 1/2 * Q_e * (P_e - P_min)}}",
        note: "Triangle below equilibrium price and above the supply curve.",
        level: "HL",
      },
      {
        name: "Price Elasticity of Demand (PED)",
        formula: "{{PED = |(%ΔQ_d) / (%ΔP)|}}",
        note: "Always use initial values: {{%ΔX = ((X_2 - X_1) / X_1) * 100}}. Report positive magnitude.",
      },
      {
        name: "Total Revenue (TR)",
        formula: "{{TR = P * Q}}",
        note: "Maximised at the midpoint of a linear demand curve where {{PED = 1}}.",
      },
      {
        name: "Income Elasticity of Demand (YED)",
        formula: "{{YED = (%ΔQ_d) / (%ΔY)}}",
        note: "KEEP THE SIGN! {{< 0}} inferior · {{0 < YED < 1}} necessity · {{> 1}} luxury.",
      },
      {
        name: "Price Elasticity of Supply (PES)",
        formula: "{{PES = (%ΔQ_s) / (%ΔP)}}",
        note: "Always positive; straight line cutting P-axis has {{PES > 1}}, Q-axis has {{PES < 1}}.",
      },
      {
        name: "Post-Tax Linear Supply Function",
        formula: "{{Q_s' = c + d(P - t)}}",
        note: "Specific tax {{t}} reduces net producer price to {{P_p = P_c - t}}.",
        level: "HL",
      },
      {
        name: "Government Indirect Tax Revenue & Incidence",
        formula: "{{Revenue = t * Q_t = (P_c - P_e) * Q_t + (P_e - P_p) * Q_t}}",
        note: "First term = Consumer tax burden; second term = Producer tax burden.",
      },
      {
        name: "Indirect Tax Deadweight Loss",
        formula: "{{DWL_tax = 1/2 * t * (Q_e - Q_t)}}",
        note: "Assumes no pre-existing market failure/externality.",
        level: "HL",
      },
      {
        name: "Post-Subsidy Linear Supply Function",
        formula: "{{Q_s' = c + d(P + s)}}",
        note: "Per-unit subsidy {{s}} raises total producer price to {{P_p = P_c + s}}.",
        level: "HL",
      },
      {
        name: "Subsidy Fiscal Cost & Deadweight Loss",
        formula: "{{Cost = s * Q_sub}} ; {{DWL_sub = 1/2 * s * (Q_sub - Q_e)}}",
        note: "Government outlay exceeds combined CS + PS gains by the overproduction DWL triangle.",
        level: "HL",
      },
    ],
  },
};
