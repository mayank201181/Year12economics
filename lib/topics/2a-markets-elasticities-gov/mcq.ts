import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===========================================================================
  // MCQ PAPER 1: DEMAND, SUPPLY, EQUILIBRIUM & ELASTICITIES
  // ===========================================================================
  {
    id: "2a-markets-elasticities-gov-m1",
    title: "MCQ Paper 1 · Demand, Supply & Elasticities Foundations",
    level: "SL",
    questions: [
      {
        id: "2a-markets-elasticities-gov-m1-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "demand-supply-equilibrium",
        question:
          "The price of fresh mangoes falls from $4.00/kg to $2.80/kg due to a bumper harvest, ceteris paribus. How is the consumer response shown on the demand diagram for mangoes?",
        options: [
          "A downward movement along the existing demand curve (an extension in quantity demanded)",
          "A rightward shift of the entire demand curve caused by higher consumer real income",
          "A leftward shift of the entire demand curve caused by lower willingness to pay",
          "An upward movement along the existing demand curve (a contraction in quantity demanded)",
        ],
        answerIndex: 0,
        explanation:
          "A change in a good's own price never shifts its demand curve; a lower price causes a downward movement along the existing demand curve (an extension in quantity demanded). Shifts only occur when a non-price determinant such as income, tastes, or related goods' prices changes.",
        hints: [
          "Ask whether the trigger is the good's own price or an external non-price determinant.",
          "Own-price changes move you along the existing curve rather than shifting it.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q02",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "demand-supply-equilibrium",
        question:
          "Tea and coffee are close substitutes for most consumers. If a frost in major tea-growing regions pushes the price of tea up sharply, what happens in the market for coffee, ceteris paribus?",
        options: [
          "The demand curve for coffee shifts leftwards, lowering equilibrium price and quantity",
          "The demand curve for coffee shifts rightwards, raising equilibrium price and quantity",
          "The supply curve for coffee shifts rightwards, lowering equilibrium price and raising quantity",
          "Quantity demanded of coffee extends downwards along the same coffee demand curve",
        ],
        answerIndex: 1,
        explanation:
          "Because tea is now pricier, consumers switch toward its substitute, coffee, at every price of coffee. This non-price determinant shifts the coffee demand curve rightwards, creating a temporary shortage at the old price and bidding both equilibrium price and quantity upwards.",
        hints: [
          "Is tea's price a price change of coffee itself, or a non-price determinant of coffee demand?",
          "When a substitute becomes more expensive, consumers buy more of the alternative good at every price.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "demand-supply-equilibrium",
        question:
          "In a free competitive market for bicycles, the current selling price lies above the market-clearing equilibrium price. What market adjustment restores equilibrium?",
        options: [
          "Excess demand bids prices higher, causing demand to shift left until stock clears",
          "Excess supply pushes prices higher, causing supply to shift left until stock clears",
          "Excess supply pressures firms to cut prices, extending quantity demanded and contracting quantity supplied",
          "Excess demand pressures firms to cut prices, contracting quantity demanded and extending quantity supplied",
        ],
        answerIndex: 2,
        explanation:
          "Above equilibrium price, quantity supplied exceeds quantity demanded (excess supply / surplus). Unsold inventories pressure firms to cut prices; as price falls, quantity demanded extends downwards along D and quantity supplied contracts downwards along S until Q_d = Q_s. Neither curve shifts.",
        hints: [
          "At a price above equilibrium, compare Q_s and Q_d horizontally.",
          "Unsold stock forces firms to reduce price — does that shift curves or cause movements along them?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q04",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "demand-supply-equilibrium",
        question:
          "A sudden semiconductor shortage pushes computer chip prices up by 60%, prompting chipmakers to invest in new fabrication plants to earn higher returns. Which function of the price mechanism does this producer expansion primarily illustrate?",
        options: [
          "The rationing function limiting chips strictly to the lowest-cost producers",
          "The allocative distortion function reducing total community surplus",
          "The redistributive function transferring income from shareholders to buyers",
          "The incentive function motivating firms to expand output for greater profit",
        ],
        answerIndex: 3,
        explanation:
          "Rising prices signal scarcity (signalling function), ration scarce units to the highest-paying buyers (rationing function), and motivate profit-seeking firms to reallocate resources and expand output (incentive function).",
        hints: [
          "Recall the three functions of the price mechanism: signalling, incentive, and rationing.",
          "Which function specifically describes firms reacting to higher potential profit by increasing production?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "demand-supply-equilibrium",
        question:
          "Which condition characterises allocative efficiency in a competitive market with no externalities?",
        options: [
          "Marginal benefit equals marginal cost and total social surplus is maximised",
          "Consumer surplus equals producer surplus and market price equals zero",
          "Average total cost is minimised while firms earn abnormal economic profits",
          "Quantity supplied exceeds quantity demanded so no consumer faces a shortage",
        ],
        answerIndex: 0,
        explanation:
          "Allocative efficiency occurs where society allocates resources to produce the exact quantity where MB = MC (P = MC), maximising total social (community) surplus (CS + PS). Consumer surplus does not have to equal producer surplus — their sum is what is maximised.",
        hints: [
          "Remember D = MB and S = MC in a competitive market without externalities.",
          "At equilibrium, what happens to the sum CS + PS compared to any lower or higher output?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "demand-supply-equilibrium",
        question:
          "A severe drought damages avocado orchards at the same time a widely publicised nutrition study boosts consumer demand for avocados. What is the guaranteed impact on the avocado market?",
        options: [
          "Equilibrium quantity unambiguously falls while equilibrium price is indeterminate",
          "Equilibrium price unambiguously rises while equilibrium quantity is indeterminate",
          "Both equilibrium price and equilibrium quantity unambiguously rise together",
          "Both equilibrium price and equilibrium quantity unambiguously fall together",
        ],
        answerIndex: 1,
        explanation:
          "Drought shifts supply left (higher P, lower Q), while the health study shifts demand right (higher P, higher Q). Both shifts push equilibrium price upwards, so P unambiguously rises; because they pull Q in opposite directions, the net effect on Q depends on which shift is larger.",
        hints: [
          "Trace the individual effect of S shifting left and D shifting right on P and Q separately.",
          "When two shifts push one variable in the same direction and the other in opposite directions, which variable is certain?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "When a bakery raises the price of sourdough loaves from $10 to $12, daily quantity demanded falls from 500 loaves to 450 loaves. What is the Price Elasticity of Demand (PED)?",
        options: [
          "2.00 (price elastic demand)",
          "0.25 (price inelastic demand)",
          "0.50 (price inelastic demand)",
          "1.20 (price elastic demand)",
        ],
        answerIndex: 2,
        explanation:
          "%ΔP = ((12 − 10) / 10) × 100 = +20%. %ΔQ_d = ((450 − 500) / 500) × 100 = −10%. PED = |−10% / +20%| = 0.50. Because 0 < 0.50 < 1, demand is price inelastic. Computing %ΔP / %ΔQ_d upside down gives the tempting distractor 2.00.",
        hints: [
          "Compute %ΔP = ((New − Old) / Old) × 100 and %ΔQ_d similarly.",
          "Remember PED puts quantity change in the numerator: |%ΔQ_d / %ΔP|.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "A boutique hotel faces a PED of 1.6 for weekday rooms. If management increases room prices by 10%, what happens to quantity demanded and total revenue?",
        options: [
          "Quantity demanded falls by 6.25% and total revenue increases",
          "Quantity demanded falls by 10% and total revenue remains unchanged",
          "Quantity demanded falls by 16% and total revenue increases",
          "Quantity demanded falls by 16% and total revenue decreases",
        ],
        answerIndex: 3,
        explanation:
          "With PED = 1.6, a +10% rise in price causes quantity demanded to fall by 1.6 × 10% = 16%. Because the percentage drop in quantity (16%) exceeds the percentage gain in price (10%), total revenue (P × Q) falls (specifically 1.10 × 0.84 = 0.924, down 7.6%).",
        hints: [
          "Rearrange PED = |%ΔQ_d / %ΔP| to find %ΔQ_d = 1.6 × 10%.",
          "When demand is price elastic (PED > 1), do price and total revenue move in the same or opposite direction?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q09",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "As a firm lowers price and moves downwards from left to right along a straight-line downward-sloping demand curve, how do the slope and the PED behave?",
        options: [
          "The slope remains constant while PED decreases continuously toward zero",
          "The slope remains constant while PED remains constant at every point",
          "Both the slope and PED increase continuously toward infinity",
          "The slope decreases continuously while PED remains unitary throughout",
        ],
        answerIndex: 0,
        explanation:
          "A linear demand curve has a constant slope (ΔP/ΔQ), but PED = (ΔQ/ΔP) × (P/Q) depends on the ratio P/Q. Moving down and right lowers P and raises Q, so PED falls continuously from ∞ at the price intercept, through 1 at the midpoint, to 0 at the quantity intercept.",
        hints: [
          "Does a straight line change its gradient from one point to another?",
          "Compare a $1 drop when price is $50 (2%) versus when price is $5 (20%).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q10",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "Why is the PED for a specific brand of sparkling mineral water much higher than the PED for drinking water as a broad product category?",
        options: [
          "Drinking water accounts for a larger share of income than a luxury brand",
          "A specific brand has many close substitutes whereas broad drinking water has none",
          "Consumers have a shorter time horizon when buying branded water than tap water",
          "Broad product categories are always defined as luxury goods in economics",
        ],
        answerIndex: 1,
        explanation:
          "The single strongest determinant of PED is the number and closeness of substitutes. Narrowly defined brands have abundant close rivals (other sparkling water brands), making buyers very price-sensitive, whereas broad essentials like drinking water have virtually no substitutes.",
        hints: [
          "Think about the SPLAT determinants of PED.",
          "If Brand X sparkling water doubles in price, what can you buy instead? What if ALL drinking water doubles?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q11",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "Average household income rises by 8%, causing quantity demanded of economy instant noodles to fall by 4%. What is the YED and how are economy instant noodles classified?",
        options: [
          "YED = +0.5; normal necessity good",
          "YED = −2.0; normal luxury good",
          "YED = −0.5; inferior good",
          "YED = +2.0; inferior good",
        ],
        answerIndex: 2,
        explanation:
          "YED = %ΔQ_d / %ΔY = (−4%) / (+8%) = −0.5. Never drop the negative sign on YED: any negative value indicates an inferior good whose demand falls as households earn more and switch to higher-quality meals.",
        hints: [
          "Keep the sign! Is quantity demanded moving in the same or opposite direction as income?",
          "Divide %ΔQ_d (−4%) by %ΔY (+8%).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "Over several decades of steady economic growth, the primary agricultural sector's share of GDP and employment typically declines while the tertiary services sector expands. How does YED explain this structural shift?",
        options: [
          "Agricultural staples are always inferior goods with negative YED as GDP grows",
          "Services have lower YED than basic foods, keeping service prices permanently below food prices",
          "Higher incomes reduce total spending on services while raising farm output proportionally",
          "Basic food has low positive YED (necessities) whereas services have high YED (> 1), attracting resources",
        ],
        answerIndex: 3,
        explanation:
          "Under Engel's Law, basic agricultural products are income-inelastic necessities (0 < YED < 1), so demand grows slowly as incomes rise. Services such as travel, healthcare, finance, and dining have YED > 1, so spending and employment expand much faster in the tertiary sector.",
        hints: [
          "Compare how much extra rice a household buys when income doubles versus extra travel, dining, or entertainment.",
          "Which sector has 0 < YED < 1 and which has YED > 1?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "When the market price of lithium batteries rises from $20 to $25, monthly quantity supplied increases from 400 units to 540 units. What is the Price Elasticity of Supply (PES)?",
        options: [
          "1.40 (price elastic supply)",
          "0.71 (price inelastic supply)",
          "1.75 (price elastic supply)",
          "0.35 (price inelastic supply)",
        ],
        answerIndex: 0,
        explanation:
          "%ΔP = ((25 − 20) / 20) × 100 = +25%. %ΔQ_s = ((540 − 400) / 400) × 100 = +35%. PES = (+35%) / (+25%) = 1.40. Because PES > 1, supply is price elastic. Inverting the ratio gives the trap 0.71.",
        hints: [
          "Find %ΔP from 20 to 25 and %ΔQ_s from 400 to 540 using initial values.",
          "Divide %ΔQ_s by %ΔP.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q14",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "A straight-line upward-sloping supply curve intersects the vertical Price axis at $6 (above the origin). What must be true about its PES at every positive output level?",
        options: [
          "PES is less than 1 (price inelastic) at every point",
          "PES is greater than 1 (price elastic) at every point",
          "PES equals exactly 1 (unitary elastic) at every point",
          "PES equals zero (perfectly inelastic) at every point",
        ],
        answerIndex: 1,
        explanation:
          "A useful geometric rule for linear supply curves: cutting the vertical Price axis means PES > 1 everywhere; passing through the origin means PES = 1 everywhere; cutting the horizontal Quantity axis means PES < 1 everywhere.",
        hints: [
          "Test two points on P = 6 + Q, say (Q=2, P=8) and (Q=4, P=10).",
          "Calculate %ΔQ (+100%) versus %ΔP (+25%) — is PES greater or less than 1?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m1-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "elasticities-ped-yed-pes",
        question:
          "[HL] Why do global prices of primary commodities such as cocoa beans and crude oil fluctuate far more violently than prices of manufactured consumer electronics?",
        options: [
          "Primary commodities have high PED and high PES, amplifying small supply shifts",
          "Manufactured goods have perfectly inelastic supply due to fixed factory inventories",
          "Primary commodities combine low PED (few substitutes) with low PES (long production lags)",
          "Manufactured goods have negative YED, stabilising consumer expenditure during booms",
        ],
        answerIndex: 2,
        explanation:
          "Primary commodities are essential inputs/foods with few close substitutes (low PED) and face biological growing cycles, land constraints, or mining lags (low PES). When both D and S are very steep, even modest supply or demand shifts trigger dramatic vertical price swings.",
        hints: [
          "Sketch a steep demand curve intersecting a steep supply curve, then shift supply slightly left.",
          "Compare the vertical jump in price against a flat D and flat S diagram.",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 2: PRICE CONTROLS, INDIRECT TAXES, SUBSIDIES & WELFARE
  // ===========================================================================
  {
    id: "2a-markets-elasticities-gov-m2",
    title: "MCQ Paper 2 · Price Controls, Taxes, Subsidies & Welfare",
    level: "SL",
    questions: [
      {
        id: "2a-markets-elasticities-gov-m2-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "government-intervention-welfare",
        question:
          "For a government-imposed price ceiling (maximum price) on staple rice to be binding, where must it be set and what immediate market imbalance does it create?",
        options: [
          "Above the equilibrium price, creating persistent excess supply",
          "Below the equilibrium price, creating persistent excess supply",
          "Above the equilibrium price, creating persistent excess demand",
          "Below the equilibrium price, creating persistent excess demand",
        ],
        answerIndex: 3,
        explanation:
          "A price ceiling is a legal cap above which prices cannot rise. To bind, it must be set below the free-market equilibrium price (P_max < P_e), preventing price from rising to clear the market and causing persistent excess demand (a shortage, Q_d > Q_s).",
        hints: [
          "Think of a ceiling stopping a price from rising upward.",
          "When price is forced below P_e, is Q_d larger or smaller than Q_s?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q02",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "government-intervention-welfare",
        question:
          "The equilibrium price of bottled cooking oil is $14. A municipality enacts a legal maximum price of $18 per bottle. What is the direct effect on the market price and quantity traded?",
        options: [
          "No direct effect: the ceiling is non-binding and the market remains at $14",
          "Price jumps to $18, creating a persistent surplus of unsold cooking oil",
          "Price falls below $14, creating long queues and a parallel market",
          "Supply shifts rightwards until equilibrium price matches the $18 cap",
        ],
        answerIndex: 0,
        explanation:
          "Because the legal maximum ($18) is higher than the prevailing market equilibrium ($14), the cap is non-binding. Buyers and sellers continue trading freely at $14 with zero shortage or surplus.",
        hints: [
          "Does a law saying 'you may not charge MORE than $18' stop anyone from trading at $14?",
          "Check whether P_max < P_e or P_max > P_e.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q03",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Identify",
        guideRef: "government-intervention-welfare",
        question:
          "Which outcome is a well-documented unintended consequence of long-term binding rent controls in major cities?",
        options: [
          "Rapid expansion in newly built private rental apartments and rising maintenance quality",
          "Emergence of parallel markets, landlord under-maintenance, and non-price rationing",
          "Accumulation of vacant surplus apartments that the municipality must purchase",
          "Complete elimination of deadweight welfare loss in the housing market",
        ],
        answerIndex: 1,
        explanation:
          "Binding rent ceilings hold rents below equilibrium, reducing the quantity of rental units supplied while raising quantity demanded. Resulting shortages encourage parallel markets (illegal side payments / 'key money'), queues, discrimination, and reduced landlord maintenance.",
        hints: [
          "When landlords earn capped rents below market value and face dozens of applicants per flat, how do incentives change?",
          "Consider quality maintenance and illegal side-payments when shortages persist.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q04",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Predict",
        guideRef: "government-intervention-welfare",
        question:
          "A government introduces a binding agricultural price floor on wheat above the market equilibrium price to boost farm incomes. What immediate consequence arises?",
        options: [
          "A persistent wheat shortage develops, prompting illegal parallel markets",
          "Consumer surplus expands sharply as bakery bread prices fall",
          "A persistent wheat surplus develops, often requiring costly government purchases",
          "Domestic farmers cut wheat acreage sharply due to lower selling prices",
        ],
        answerIndex: 2,
        explanation:
          "At P_min > P_e, farmers expand quantity supplied while buyers contract quantity demanded, generating a persistent surplus (Q_s > Q_d). Maintaining the floor typically forces the government to buy, store, or subsidise export of the excess crop at substantial taxpayer expense.",
        hints: [
          "Where does a binding price floor sit relative to P_e?",
          "Compare Q_s and Q_d at a price set above equilibrium.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q05",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "government-intervention-welfare",
        question:
          "In a competitive market for low-skilled labour, the government sets a national minimum wage above the market-clearing wage. According to the standard supply-and-demand model, what occurs?",
        options: [
          "A shortage of workers emerges as firms hire more staff at the higher wage",
          "Both employment and total firm profits rise due to lower labour costs",
          "The supply curve of labour shifts leftwards until wages return to equilibrium",
          "Workers who keep jobs earn higher wages, while a labour surplus (unemployment) emerges",
        ],
        answerIndex: 3,
        explanation:
          "A binding minimum wage acts as a price floor in the labour market (W_min > W_e). Quantity of labour supplied rises (more people want jobs) while quantity demanded by firms falls, creating excess supply of labour (unemployment), even as employed workers enjoy higher hourly pay.",
        hints: [
          "In a labour market diagram, who supplies labour (workers) and who demands labour (firms)?",
          "When wage is held above W_e, does Q_s of labour exceed Q_d of labour?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q06",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Distinguish",
        guideRef: "government-intervention-welfare",
        question:
          "How does the supply-curve shift of a specific (per-unit) indirect tax differ from that of an ad valorem (percentage) indirect tax?",
        options: [
          "A specific tax shifts supply vertically upwards in parallel; an ad valorem tax pivots supply upwards",
          "A specific tax shifts supply vertically downwards; an ad valorem tax shifts demand downwards",
          "A specific tax pivots supply upwards; an ad valorem tax shifts supply upwards in parallel",
          "Both taxes cause identical parallel rightward shifts of the market supply curve",
        ],
        answerIndex: 0,
        explanation:
          "A specific tax adds the same fixed dollar amount ($t) at every quantity, creating a parallel vertical upward shift. An ad valorem tax (such as 10% GST) charges a larger dollar sum at higher prices, causing the vertical gap between S_1 and S_2 to widen as price rises (an upward pivot).",
        hints: [
          "Compare a flat $2 per bottle tax versus a 10% sales tax on a $10 item vs a $100 item.",
          "Does the vertical dollar gap stay constant or grow wider at higher prices?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q07",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "government-intervention-welfare",
        question:
          "A government places a $3 per pack specific indirect tax on cigarettes, where PED = 0.3 and PES = 1.8. How is the economic burden (incidence) of the tax distributed?",
        options: [
          "Producers bear almost the entire burden because the tax is legally collected from sellers",
          "Consumers bear the majority of the burden because demand is much more inelastic than supply",
          "Consumers and producers split the $3 tax evenly regardless of elasticity values",
          "Neither group bears any burden because government revenue offsets total welfare loss",
        ],
        answerIndex: 1,
        explanation:
          "Tax incidence is governed by relative elasticities, not legal collection point. Because PED (0.3) < PES (1.8), buyers are far less responsive to price hikes than sellers, so firms pass most of the $3 tax onto consumers through a steep rise in retail price.",
        hints: [
          "Recall the Golden Rule of Tax Incidence: which side bears more — the elastic or inelastic side?",
          "Compare PED = 0.3 against PES = 1.8.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q08",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "government-intervention-welfare",
        question:
          "Before tax, a market clears at P_e = $20 and Q_e = 300 units. After a $6 per-unit indirect tax is imposed, consumers pay P_c = $24, producers keep P_p = $18, and quantity falls to Q_t = 250 units. What is the total consumer tax burden?",
        options: [
          "$1,500",
          "$500",
          "$1,000",
          "$1,200",
        ],
        answerIndex: 2,
        explanation:
          "Consumers pay P_c − P_e = $24 − $20 = $4 per unit on the 250 units bought after tax, so Consumer Tax Burden = $4 × 250 = $1,000. ($1,500 is total government tax revenue = $6 × 250; $500 is producer tax burden = $2 × 250; $1,200 wrongly multiplies $4 by the pre-tax Q_e = 300.)",
        hints: [
          "First find how much MORE per unit consumers pay compared to the pre-tax price P_e = $20.",
          "Multiply the consumer per-unit burden by the post-tax quantity Q_t = 250 (not Q_e!).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q09",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Deduce",
        guideRef: "government-intervention-welfare",
        question:
          "Suppose a life-saving medication has perfectly price inelastic demand (PED = 0) and upward-sloping supply. If a $5 per-unit specific tax is levied on producers, what happens to consumer price and deadweight welfare loss?",
        options: [
          "Consumer price rises by $2.50 and deadweight loss rises significantly",
          "Consumer price stays unchanged and producers pay the full $5 tax",
          "Consumer price rises by $5 and quantity traded drops sharply, creating huge DWL",
          "Consumer price rises by the full $5, quantity is unchanged, and deadweight loss is zero",
        ],
        answerIndex: 3,
        explanation:
          "With a vertical demand curve (PED = 0), shifting supply upwards by $5 raises market price by the entire $5 while equilibrium quantity stays completely unchanged (Q_t = Q_e). Because no mutually beneficial trades are lost (Q_e − Q_t = 0), DWL = ½ × 5 × 0 = $0.",
        hints: [
          "Sketch a vertical demand curve and shift an upward-sloping supply curve up vertically by $5.",
          "Check whether Q_t differs from Q_e — recall DWL = ½ × t × (Q_e − Q_t).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q10",
        kind: "mcq",
        difficulty: "warmup",
        level: "SL",
        commandTerm: "Describe",
        guideRef: "government-intervention-welfare",
        question:
          "How does a per-unit government subsidy paid to producers of solar panels affect the supply curve, consumer price, and producer total price received?",
        options: [
          "Supply shifts vertically downwards, consumer price falls, and total producer price rises",
          "Supply shifts vertically upwards, consumer price rises, and total producer price falls",
          "Demand shifts vertically upwards, raising both consumer price and producer price",
          "Supply shifts vertically downwards, causing both consumer price and producer price to fall",
        ],
        answerIndex: 0,
        explanation:
          "A per-unit subsidy lowers marginal production cost by $s, shifting supply vertically downwards (rightwards) from S_1 to S_2 = S_1 − s. Consumers enjoy a lower market price (P_c < P_e), output expands, and producers receive P_p = P_c + s > P_e.",
        hints: [
          "Does a subsidy increase or decrease firms' effective cost per unit?",
          "Remember producers receive BOTH the consumer price P_c AND the government subsidy s.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q11",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Calculate",
        guideRef: "government-intervention-welfare",
        question:
          "A government pays producers a $4 per-unit subsidy on electric bicycles, expanding equilibrium output from 300 units to 350 units per month. What is the monthly government expenditure on the subsidy?",
        options: [
          "$1,200",
          "$1,400",
          "$200",
          "$100",
        ],
        answerIndex: 1,
        explanation:
          "The government must pay $4 on EVERY unit sold after the subsidy (Q_sub = 350), not just the 50 extra units or the old 300 units! Total government cost = $4 × 350 = $1,400. ($100 is the DWL = ½ × 4 × 50; $1,200 uses pre-subsidy Q_e = 300.)",
        hints: [
          "Does the government pay the $4 subsidy only on the 50 extra units, or on every unit sold?",
          "Use Government Cost = s × Q_sub.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q12",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Explain",
        guideRef: "government-intervention-welfare",
        question:
          "In a competitive market with no externalities, why does a per-unit subsidy generate a deadweight welfare loss even though both Consumer Surplus and Producer Surplus increase?",
        options: [
          "Consumers purchase fewer units than at the competitive free-market equilibrium",
          "Producers cut output below allocative efficiency to capture extra subsidy profits",
          "Government expenditure exceeds the combined CS and PS gains because MC exceeds MB beyond Q_e",
          "Subsidies eliminate Producer Surplus completely while transferring all gains to taxpayers",
        ],
        answerIndex: 2,
        explanation:
          "Beyond Q_e, society's marginal cost of producing additional units exceeds consumers' marginal benefit (MC > MB). Consequently, total taxpayer subsidy outlay (s × Q_sub) exceeds the increase in CS + PS by the overproduction DWL triangle ½ × s × (Q_sub − Q_e).",
        hints: [
          "Compare total taxpayer cost against the sum of new Consumer Surplus and Producer Surplus gained.",
          "For units between Q_e and Q_sub, is the S = MC curve above or below the D = MB curve?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q13",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "government-intervention-welfare",
        question:
          "A per-unit subsidy is granted to producers of a staple good whose demand is relatively price inelastic compared to supply (PED < PES). Who captures the larger share of the per-unit subsidy benefit?",
        options: [
          "Producers, because consumer price stays nearly constant while producer price jumps",
          "Government taxpayers, because inelastic demand keeps fiscal subsidy costs minimal",
          "Producers and consumers always divide any per-unit subsidy strictly 50/50",
          "Consumers, because market price falls steeply relative to the smaller rise in producer net price",
        ],
        answerIndex: 3,
        explanation:
          "Just as the more inelastic side bears more of a tax, the more inelastic side captures more of a subsidy! When demand is steeper (PED < PES), shifting S downwards causes a steep vertical drop in consumer price (P_e − P_c) and a smaller rise in producer net price (P_p − P_e).",
        hints: [
          "Draw a steep demand curve and a flatter supply curve, then shift supply vertically downwards.",
          "Compare the drop from P_e to P_c against the rise from P_e to P_p.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "SL",
        commandTerm: "Evaluate",
        guideRef: "government-intervention-welfare",
        question:
          "Why are specific indirect taxes on everyday essentials such as petrol and cooking gas widely criticised on equity grounds?",
        options: [
          "They are regressive, taking a higher share of income from poorer households who also absorb most of the incidence",
          "They are progressive, discouraging high-income earners from investing in productive capital",
          "They raise consumer surplus disproportionately for wealthy drivers while cutting government revenue",
          "They force producers to bear 100% of the tax burden, driving essential goods out of production",
        ],
        answerIndex: 0,
        explanation:
          "Essentials take up a much higher proportion of a low-income household's budget than a wealthy household's budget (making indirect taxes regressive), and low PED means consumers bear most of the tax via higher retail prices — worsening income equity unless offset by targeted transfers.",
        hints: [
          "Compare the tax paid as a percentage of income for a $20,000 earner vs a $200,000 earner buying the same fuel.",
          "Combine regressivity with the tax incidence rule for inelastic goods.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m2-q15",
        kind: "mcq",
        difficulty: "core",
        level: "SL",
        commandTerm: "Analyse",
        guideRef: "government-intervention-welfare",
        question:
          "When a government imposes a heavy specific indirect tax on a domestically manufactured product with relatively elastic demand, what is the likely impact on workers employed in that industry?",
        options: [
          "Employment expands rapidly as firms hire more staff to pay higher government revenues",
          "Employment tends to fall because lower equilibrium output reduces firms' demand for labour",
          "Wages automatically increase by the full amount of the tax to protect worker welfare",
          "Workers remain completely unaffected because indirect taxes only affect consumer surplus",
        ],
        answerIndex: 1,
        explanation:
          "Because labour is a derived demand tied to output, contracting equilibrium production from Q_e to Q_t (especially sharply when PED is elastic) reduces firms' need for labour, risking lay-offs or reduced working hours.",
        hints: [
          "What happens to quantity produced Q_t compared to Q_e after an indirect tax?",
          "If factories produce substantially fewer units, how does that affect hiring?",
        ],
      },
    ],
  },

  // ===========================================================================
  // MCQ PAPER 3: HL BEHAVIOURAL ECONOMICS & QUANTITATIVE MODELLING
  // ===========================================================================
  {
    id: "2a-markets-elasticities-gov-m3",
    title: "MCQ Paper 3 · HL Behavioural Economics & Quantitative Modelling",
    level: "HL",
    questions: [
      {
        id: "2a-markets-elasticities-gov-m3-q01",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "demand-supply-equilibrium",
        question:
          "[HL] How does the Law of Diminishing Marginal Utility help explain why an individual's demand curve slopes downwards?",
        options: [
          "Total utility falls to zero immediately after consuming the first unit of any good",
          "Each additional unit yields less extra satisfaction, so buyers only purchase more at lower prices",
          "Marginal cost falls with every unit consumed, allowing consumers to pay higher prices",
          "Consumers' nominal wages automatically decline whenever they buy larger quantities",
        ],
        answerIndex: 1,
        explanation:
          "As a consumer consumes successive extra units within a period, the extra satisfaction (marginal utility / marginal benefit) declines. Because a rational consumer only buys a unit if MB ≥ P, price must fall to entice purchase of additional units.",
        hints: [
          "Compare your willingness to pay for your first slice of pizza versus your fifth slice.",
          "Link declining marginal benefit to the price required to buy another unit.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q02",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "demand-supply-equilibrium",
        question:
          "[HL] Why does the short-run Law of Diminishing Marginal Returns cause a competitive firm's supply curve to slope upwards?",
        options: [
          "Adding extra workers to fixed capital continually lowers marginal cost as output expands",
          "Fixed capital expands faster than labour in the short run, lifting product prices",
          "Falling marginal product raises marginal cost per extra unit, requiring higher prices to expand output",
          "Consumers demand higher quality when firms produce larger quantities in the short run",
        ],
        answerIndex: 2,
        explanation:
          "When more variable inputs (labour) are added to fixed capital in the short run, marginal product eventually declines. Each extra unit of output requires more labour input, driving up marginal cost (MC); firms only expand output if market price rises to cover higher MC.",
        hints: [
          "Trace the chain: fixed capital + more workers → what happens to Marginal Product (MP)?",
          "When MP falls while wages stay constant, what happens to Marginal Cost (MC)?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q03",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "demand-supply-equilibrium",
        question:
          "[HL] A competitive market is given by {{Q_d = 80 - 2P}} and {{Q_s = -10 + P}} (price in $, quantity in single units). What is Consumer Surplus at equilibrium?",
        options: [
          "$300",
          "$200",
          "$400",
          "$100",
        ],
        answerIndex: 3,
        explanation:
          "Set 80 − 2P = −10 + P → 3P = 90 → P_e = $30, so Q_e = 80 − 60 = 20 units. Demand price-intercept (Q_d = 0): P_max = 80 / 2 = $40. Thus CS = ½ × 20 × (40 − 30) = $100. ($200 forgets the ½ factor in the triangle area; $300 wrongly uses P_e instead of P_max − P_e.)",
        hints: [
          "First solve 80 − 2P = −10 + P to find P_e and Q_e.",
          "Set Q_d = 0 to find the vertical price intercept P_max, then use CS = ½ × Q_e × (P_max − P_e).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q04",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "demand-supply-equilibrium",
        question:
          "[HL] Given {{Q_d = 100 - 5P}} and {{Q_s = -20 + 5P}} (price in $, quantity in single units), what is Producer Surplus at market equilibrium?",
        options: [
          "$160",
          "$320",
          "$240",
          "$80",
        ],
        answerIndex: 0,
        explanation:
          "Set 100 − 5P = −20 + 5P → 10P = 120 → P_e = $12 and Q_e = 100 − 60 = 40 units. Supply price-intercept (Q_s = 0): 5P = 20 → P_min = $4. Producer Surplus = ½ × 40 × (12 − 4) = $160. ($240 wrongly assumes P_min = 0; $320 forgets the ½.)",
        hints: [
          "Solve for equilibrium (P_e, Q_e), then set Q_s = 0 to find the supply price-intercept P_min.",
          "Compute PS = ½ × Q_e × (P_e − P_min).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q05",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Define",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] Which description best captures Herbert Simon's concept of bounded rationality in behavioural economics?",
        options: [
          "Consumers deliberately minimise utility in order to promote social equality",
          "Consumers face limited time, information, and cognitive power, leading them to use heuristics and satisfice",
          "Consumers possess complete market data yet always choose the highest-priced brand",
          "Consumers maximise long-run lifetime utility using perfect probability calculations",
        ],
        answerIndex: 1,
        explanation:
          "Bounded rationality recognises that human brains have finite cognitive capacity, time, and information. Instead of solving complex optimisation equations, consumers use mental shortcuts (heuristics) and satisfice by selecting a 'good enough' option.",
        hints: [
          "Think about why real shoppers don't calculate marginal utility per dollar across 400 supermarket cereals.",
          "Which key terms pair directly with bounded rationality: heuristics and satisficing?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q06",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] In an Ultimatum Game experiment, Player 1 offers to keep $85 of a $100 prize and give $15 to Player 2. Player 2 rejects the offer so both receive $0. Which behavioural concept does Player 2's rejection illustrate?",
        options: [
          "Bounded rationality caused by inability to verify that $15 exceeds $0",
          "Availability bias driven by recent vivid memories of cash prizes",
          "Bounded selfishness, where fairness norms outweigh pure personal monetary gain",
          "Anchoring bias caused by focusing strictly on the $15 payout",
        ],
        answerIndex: 2,
        explanation:
          "Strict rational self-interest predicts accepting any positive amount ($15 > $0). Rejecting an unfair split to punish greed demonstrates bounded selfishness — real people value fairness, reciprocity, and equity alongside monetary payoffs.",
        hints: [
          "Did Player 2 misunderstand arithmetic, or deliberately sacrifice $15 to punish unfairness?",
          "Recall the '3 B's': bounded rationality, bounded self-control, and bounded selfishness.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q07",
        kind: "mcq",
        difficulty: "warmup",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] A supermarket switches yoghurt labels from 'Contains 10% fat' to '90% fat-free' without altering the recipe, and weekly sales surge by 28%. Which cognitive bias is being exploited?",
        options: [
          "Availability bias",
          "Bounded selfishness",
          "Loss aversion bias",
          "Framing bias",
        ],
        answerIndex: 3,
        explanation:
          "Framing bias occurs when presenting mathematically identical information in a positive versus negative wording alters consumer choices. '90% fat-free' evokes health gains whereas '10% fat' highlights negative attributes.",
        hints: [
          "Notice that the factual nutritional content did not change at all — only how the sentence was worded.",
          "Which bias deals with how identical information is presented?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q08",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] An online retailer displays a wristwatch with a crossed-out tag of '$450' right beside a sale price of '$210', persuading shoppers that $210 is an exceptional bargain even though similar watches sell elsewhere for $180. Which bias is this?",
        options: [
          "Anchoring bias, because buyers fixate on the initial $450 reference figure",
          "Availability bias, because buyers recall recent news stories about watch shortages",
          "Bounded self-control, because buyers cannot resist wearing watches immediately",
          "Mandated choice, because buyers are forced to select a delivery option",
        ],
        answerIndex: 0,
        explanation:
          "Anchoring bias causes people to rely excessively on the first piece of numerical information offered (the $450 'anchor') when judging subsequent value, making $210 seem cheap even when $180 rivals exist.",
        hints: [
          "What psychological role does the crossed-out '$450' play?",
          "It acts as an initial numerical reference point that pulls value judgements upwards.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q09",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Identify",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] Immediately after dramatic media footage of a coastal typhoon, homeowners buy far more storm insurance even though long-term meteorological probabilities have not changed. Which cognitive bias best explains this?",
        options: [
          "Status quo bias causing households to leave existing policies untouched",
          "Availability bias causing households to overweight vivid, easily recalled events",
          "Anchoring bias caused by insurers displaying crossed-out premiums",
          "Framing bias caused by quoting monthly rather than annual premiums",
        ],
        answerIndex: 1,
        explanation:
          "Availability bias leads people to assess the likelihood of an event by how easily vivid examples come to mind. Dramatic news coverage makes disasters mentally 'available', causing people to overestimate objective risk.",
        hints: [
          "Why did demand spike specifically right AFTER vivid television footage?",
          "Which bias ties perceived probability to how easily examples pop into memory?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q10",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] In Kahneman and Tversky's Prospect Theory, how does loss aversion explain the endowment effect?",
        options: [
          "Consumers value monetary gains twice as intensely as equivalent monetary losses",
          "Consumers ignore sunk costs completely when reselling personal possessions",
          "Giving up an owned item feels like a painful loss, so owners demand more to sell it than they would pay to buy it",
          "Consumers prefer risky gambles with uncertain payoffs over certain equivalent gains",
        ],
        answerIndex: 2,
        explanation:
          "Because losing an item hurts roughly twice as much psychologically as acquiring the exact same item feels good, once a consumer owns a good (making ownership their reference point), parting with it feels like a loss — driving their selling price well above their buying price.",
        hints: [
          "Compare the steepness of the Prospect Theory value curve in the Losses quadrant versus the Gains quadrant.",
          "Does selling something you already own feel like a foregone gain or an active loss?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q11",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Distinguish",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] A transport authority requires every driver renewing a licence online to actively select either 'Yes, register me as an organ donor' or 'No, do not register me' before submitting the form. Which type of choice architecture is this?",
        options: [
          "Default choice",
          "Restricted choice",
          "Financial disincentive",
          "Mandated choice",
        ],
        answerIndex: 3,
        explanation:
          "Mandated choice requires decision-makers to make an explicit active choice rather than leaving a pre-selected default (default choice) or limiting the number of options to prevent overload (restricted choice).",
        hints: [
          "Notice neither box is pre-ticked, and the user cannot skip the question.",
          "Match active forced decision-making to default, restricted, or mandated choice.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q12",
        kind: "mcq",
        difficulty: "core",
        level: "HL",
        commandTerm: "Explain",
        guideRef: "behavioural-economics-hl",
        question:
          "[HL] Why does the separation of ownership from control in large corporations frequently lead managers to pursue profit satisficing rather than strict profit maximization?",
        options: [
          "Salaried managers aim for satisfactory profit to satisfy shareholders while preserving job security and lower stress",
          "Shareholders legally prohibit chief executives from earning abnormal economic profits",
          "Large corporations always know their exact marginal revenue and marginal cost curves",
          "Satisficing automatically guarantees higher short-run dividends than setting MC = MR",
        ],
        answerIndex: 0,
        explanation:
          "Under the principal–agent problem, dispersed shareholders (principals) cannot monitor every managerial decision. Salaried managers (agents) face imperfect data on exact MC/MR and often settle for a 'satisfactory' profit that keeps shareholders quiet while protecting executive perks and stability.",
        hints: [
          "Who owns a publicly listed corporation (principals) and who runs it day-to-day (agents)?",
          "Do their personal incentives align 100% with squeezing every last dollar of profit?",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q13",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Derive",
        guideRef: "government-intervention-welfare",
        question:
          "[HL] Before taxation, market supply is {{Q_s = -15 + 3P}}. The government imposes a specific indirect tax of $4 per unit on producers. What is the new post-tax supply equation?",
        options: [
          "{{Q_s' = -19 + 3P}}",
          "{{Q_s' = -27 + 3P}}",
          "{{Q_s' = -3 + 3P}}",
          "{{Q_s' = -15 + 7P}}",
        ],
        answerIndex: 1,
        explanation:
          "After a $4 specific tax, producers only keep net price (P − 4). Substituting into supply gives Q_s' = −15 + 3(P − 4) = −15 + 3P − 12 = −27 + 3P. Subtracting 4 from −15 to get −19 + 3P is the #1 HL Paper 3 algebra mistake!",
        hints: [
          "When consumers pay P, how much does the producer actually keep after paying a $4 tax?",
          "Substitute (P − 4) in place of P inside Q_s = −15 + 3P and expand carefully.",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q14",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "government-intervention-welfare",
        question:
          "[HL] A market has {{Q_d = 120 - 3P}} and {{Q_s = 3P}} (price in $, quantity in single units). The government levies a specific tax of $8 per unit. What is the resulting Deadweight Welfare Loss (DWL)?",
        options: [
          "$96",
          "$384",
          "$48",
          "$24",
        ],
        answerIndex: 2,
        explanation:
          "Pre-tax: 120 − 3P = 3P → P_e = $20, Q_e = 60. Post-tax supply: Q_s' = 3(P − 8) = −24 + 3P. Set 120 − 3P = −24 + 3P → 6P = 144 → P_c = $24, Q_t = 120 − 72 = 48. DWL = ½ × t × (Q_e − Q_t) = ½ × 8 × (60 − 48) = $48. ($96 forgets the ½; $384 is government tax revenue = 8 × 48.)",
        hints: [
          "First find pre-tax Q_e from 120 − 3P = 3P, then substitute (P − 8) into Q_s to find post-tax Q_t.",
          "Use the triangle area formula DWL = ½ × t × (Q_e − Q_t).",
        ],
      },
      {
        id: "2a-markets-elasticities-gov-m3-q15",
        kind: "mcq",
        difficulty: "challenge",
        level: "HL",
        commandTerm: "Calculate",
        guideRef: "government-intervention-welfare",
        question:
          "[HL] A market is modelled by {{Q_d = 90 - 2P}} and {{Q_s = -10 + 3P}}. The government introduces a per-unit subsidy of $5 paid to producers. What is the total government expenditure on this subsidy?",
        options: [
          "$250",
          "$30",
          "$15",
          "$280",
        ],
        answerIndex: 3,
        explanation:
          "Post-subsidy supply replaces P with (P + 5): Q_s' = −10 + 3(P + 5) = 5 + 3P. Set 90 − 2P = 5 + 3P → 5P = 85 → P_c = $17, so Q_sub = 90 − 2(17) = 56 units. Total government expenditure = $5 × 56 = $280. ($250 wrongly multiplies $5 by pre-subsidy Q_e = 50; $15 is the DWL = ½ × 5 × 6.)",
        hints: [
          "For a $5 per-unit subsidy, replace P with (P + 5) inside Q_s = −10 + 3P.",
          "Solve Q_d = Q_s' to get P_c and Q_sub, then compute Government Cost = 5 × Q_sub.",
        ],
      },
    ],
  },
];
