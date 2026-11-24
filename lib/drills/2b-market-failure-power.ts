import type { Drill } from "./types.ts";
import { clean, num } from "./helpers.ts";

interface GoodItem {
  label: string;
  cat: "private" | "public" | "club" | "cpr";
  rivalrous: boolean;
  excludable: boolean;
  reason: string;
}

const GOODS_BANK: GoodItem[] = [
  // Private goods (rivalrous, excludable)
  { label: "a takeaway iced latte sold at a café", cat: "private", rivalrous: true, excludable: true, reason: "non-payers are excluded at the till, and drinking it leaves none for anyone else" },
  { label: "a pair of running shoes at a retail store", cat: "private", rivalrous: true, excludable: true, reason: "only the buyer can wear them and purchase excludes others" },
  { label: "a private hospital operating-theatre slot", cat: "private", rivalrous: true, excludable: true, reason: "hospitals can exclude non-patients and one surgery occupies the theatre" },
  { label: "a seat on a fully booked commercial flight", cat: "private", rivalrous: true, excludable: true, reason: "boarding passes exclude non-payers and one passenger takes the seat" },
  { label: "a smartphone bought from an electronics shop", cat: "private", rivalrous: true, excludable: true, reason: "ownership excludes non-buyers and physical use is rivalrous" },
  { label: "a concert ticket to a sold-out stadium show", cat: "private", rivalrous: true, excludable: true, reason: "ticket gates exclude non-payers and one attendee fills the seat" },
  { label: "a bottle of mineral water from a vending machine", cat: "private", rivalrous: true, excludable: true, reason: "payment is required and drinking it depletes the bottle" },
  { label: "a freshly baked loaf of sourdough bread", cat: "private", rivalrous: true, excludable: true, reason: "bakeries charge buyers and eating the loaf leaves none for others" },

  // Pure public goods (non-rivalrous, non-excludable)
  { label: "national defence protecting a country's borders", cat: "public", rivalrous: false, excludable: false, reason: "protecting one citizen neither reduces security for others nor allows excluding non-taxpayers" },
  { label: "municipal street lighting along public footpaths", cat: "public", rivalrous: false, excludable: false, reason: "one walker using the light does not dim it for others, and passers-by cannot be excluded" },
  { label: "a coastal lighthouse beam guiding nearby ships", cat: "public", rivalrous: false, excludable: false, reason: "all ships in range see the beam simultaneously without depleting it or being blocked" },
  { label: "a city-wide flood-defence sea wall", cat: "public", rivalrous: false, excludable: false, reason: "it shields every resident behind it simultaneously and cannot exclude non-payers" },
  { label: "publicly broadcast tsunami-warning sirens", cat: "public", rivalrous: false, excludable: false, reason: "hearing the siren does not reduce its sound for others and non-payers cannot be blocked" },
  { label: "free-to-air public weather radar forecasts", cat: "public", rivalrous: false, excludable: false, reason: "one viewer reading the forecast leaves the exact same information for everyone else" },
  { label: "mosquito-eradication fogging across a residential district", cat: "public", rivalrous: false, excludable: false, reason: "lower disease risk benefits all residents simultaneously and cannot exclude non-payers" },
  { label: "open civilian GPS satellite positioning signals", cat: "public", rivalrous: false, excludable: false, reason: "billions of receivers read the signal without congestion and access is unrestricted" },

  // Club / toll goods (non-rivalrous, excludable)
  { label: "a subscription video-streaming platform (like Netflix)", cat: "club", rivalrous: false, excludable: true, reason: "logins exclude non-subscribers while one viewer streaming does not prevent others watching" },
  { label: "an uncongested electronic-toll expressway at midnight", cat: "club", rivalrous: false, excludable: true, reason: "gantries charge every driver, yet free-flowing traffic means one extra car does not slow others" },
  { label: "a paywalled digital financial newspaper", cat: "club", rivalrous: false, excludable: true, reason: "subscriptions exclude non-payers while reading an online article does not deplete it" },
  { label: "a half-empty multiplex cinema screening", cat: "club", rivalrous: false, excludable: true, reason: "ticket booths exclude non-payers, and an extra viewer in an empty seat does not diminish the film" },
  { label: "a private members-only golf course on a quiet weekday", cat: "club", rivalrous: false, excludable: true, reason: "membership fees exclude non-members while uncrowded fairways remain non-rivalrous" },
  { label: "a paid cloud music-streaming library", cat: "club", rivalrous: false, excludable: true, reason: "accounts exclude non-subscribers while simultaneous playback is non-rivalrous" },
  { label: "an uncrowded fee-charging national art museum", cat: "club", rivalrous: false, excludable: true, reason: "entry tickets exclude non-payers while viewing paintings does not deplete them for others" },
  { label: "a password-protected online exam-revision course", cat: "club", rivalrous: false, excludable: true, reason: "paywalls exclude non-buyers while one student watching a lesson leaves full access for others" },

  // Common pool resources (rivalrous, non-excludable)
  { label: "open-ocean Pacific bluefin tuna stocks", cat: "cpr", rivalrous: true, excludable: false, reason: "catching tuna depletes remaining stock for other vessels, yet high seas are hard to fence off" },
  { label: "an unregulated underground freshwater aquifer shared by farmers", cat: "cpr", rivalrous: true, excludable: false, reason: "pumping water lowers the water table for neighbours, yet access is open to all landowners" },
  { label: "unpriced clean air in the Earth's atmosphere", cat: "cpr", rivalrous: true, excludable: false, reason: "everyone can emit into the atmosphere, yet emissions degrade shared air quality and carbon budget" },
  { label: "an unfenced village grazing meadow open to all herders", cat: "cpr", rivalrous: true, excludable: false, reason: "extra cattle consume finite grass (rivalrous) while herders cannot easily be excluded" },
  { label: "an untolled city expressway during severe 8 a.m. rush-hour gridlock", cat: "cpr", rivalrous: true, excludable: false, reason: "without tolls drivers cannot be excluded, yet every extra car slows down all commuters (rivalrous)" },
  { label: "unpatrolled tropical rainforest timber on public frontier land", cat: "cpr", rivalrous: true, excludable: false, reason: "logging trees removes stock for others while vast borders prevent easy exclusion" },
  { label: "a free public coastal clam beach open to all gatherers", cat: "cpr", rivalrous: true, excludable: false, reason: "clams harvested by one gatherer cannot be taken by another, yet entry is unrestricted" },
  { label: "shared free municipal street-side parking spaces on a packed Saturday", cat: "cpr", rivalrous: true, excludable: false, reason: "no payment blocks entry, yet one parked car removes a scarce space from other drivers" },
];

const EDGE_SCENARIOS: Array<{ prompt: string; cat: "private" | "public" | "club" | "cpr"; reason: string }> = [
  { prompt: "An **uncongested** toll bridge charges $3 per crossing, and traffic flows freely without delays. Classify this bridge service.", cat: "club", reason: "Toll gates make it excludable, and free-flowing traffic makes it non-rivalrous → club good." },
  { prompt: "At 8:15 a.m., the **same toll bridge** becomes bumper-to-bumper congested so every extra car delays all drivers behind it while still paying $3. Classify this service now.", cat: "private", reason: "Tolls keep it excludable, while congestion makes road space rivalrous → private good." },
  { prompt: "A free **untolled** city boulevard is completely empty at 3:00 a.m. so one extra car causes zero delay to anyone else. Classify this road at 3:00 a.m.", cat: "public", reason: "No tolls (non-excludable) and zero congestion (non-rivalrous) → behaves as a pure public good." },
  { prompt: "At 5:30 p.m., that same **untolled** city boulevard jams into heavy gridlock where every extra vehicle slows everyone down. Classify this road at 5:30 p.m.", cat: "cpr", reason: "Still untolled (non-excludable), but congestion makes space rivalrous → common pool resource." },
  { prompt: "A paywalled news site drops its subscription wall permanently so anyone online can read articles simultaneously for free. Classify the site now.", cat: "public", reason: "Removing the paywall makes it non-excludable, and digital articles remain non-rivalrous → pure public good." },
  { prompt: "A free community Wi-Fi router in an airport lounge allows anyone to connect, yet heavy video downloads severely slow speeds for every other traveller. Classify this congested Wi-Fi.", cat: "cpr", reason: "Open access is non-excludable, while scarce bandwidth becomes rivalrous under heavy load → common pool resource." },
  { prompt: "An airline lounge charges $50 entry and provides high-speed Wi-Fi with ample spare bandwidth so extra guests cause zero slowdown. Classify this lounge Wi-Fi.", cat: "club", reason: "Entry fee makes it excludable, and spare bandwidth keeps it non-rivalrous → club good." },
  { prompt: "A coastal government builds electronic toll fences around a coral-reef fishing zone and issues exclusive individual permits for every kilogram caught. Classify the reef fishery now.", cat: "private", reason: "Enforceable permits make access excludable, while fish remain rivalrous → transformed into a private good." },
  { prompt: "A public park with no entry gate is spacious and quiet on a rainy Tuesday morning so visitors never disturb one another. Classify the park on Tuesday morning.", cat: "public", reason: "No entry gate (non-excludable) and zero crowding (non-rivalrous) → pure public good." },
  { prompt: "That same free, unfenced public park is packed shoulder-to-shoulder during a holiday fireworks festival so latecomers cannot find space to sit. Classify the park during the festival.", cat: "cpr", reason: "Unfenced (non-excludable), yet severe crowding makes space rivalrous → common pool resource." },
  { prompt: "A theme park charges $80 admission and runs half-empty roller coasters where extra riders take vacant seats without extending queues. Classify this off-peak theme park.", cat: "club", reason: "Ticketed entry is excludable and empty seats are non-rivalrous → club good." },
  { prompt: "On a national holiday, the same $80-admission theme park hits full capacity so every extra visitor adds wait time to queues and takes scarce ride seats. Classify this peak-day theme park.", cat: "private", reason: "Ticketed (excludable) and crowded/congested (rivalrous) → private good." },
  { prompt: "A city installs ERP electronic road pricing on a congested downtown avenue during peak hours, charging every passing car. Classify the peak-hour avenue after ERP is installed.", cat: "private", reason: "ERP makes the road excludable via pricing while peak congestion keeps it rivalrous → private good." },
  { prompt: "A national government switches its public TV channel from free-to-air broadcast to encrypted paid cable subscriptions. Classify the encrypted TV signal.", cat: "club", reason: "Encryption makes it excludable while broadcast reception remains non-rivalrous → club good." },
  { prompt: "A private university library restricts entry to card-holding students, and there is only one printed textbook copy on reserve for 120 exam candidates. Classify that single printed book.", cat: "private", reason: "Card entry is excludable and only one student can hold the physical book at once (rivalrous) → private good." },
  { prompt: "A private university library restricts entry to card-holding students and licenses an unlimited-simultaneous-user e-book edition. Classify the licensed e-book.", cat: "club", reason: "Login/card access is excludable while unlimited simultaneous downloads are non-rivalrous → club good." },
  { prompt: "An open-access university archive lets anyone worldwide download a public-domain PDF simultaneously without login or bandwidth limits. Classify this PDF archive.", cat: "public", reason: "No login barrier (non-excludable) and unlimited copies (non-rivalrous) → pure public good." },
  { prompt: "Free municipal charging docks in a town square allow any e-scooter rider to plug in, yet only 6 plugs exist for 40 commuters at 9 a.m. Classify these free charging plugs at 9 a.m.", cat: "cpr", reason: "No fee or gate blocks users (non-excludable), while occupied sockets exclude simultaneous use (rivalrous) → common pool resource." },
  { prompt: "A city installs a paid smart-lock app ($2/hour) on those 6 busy e-scooter charging plugs. Classify the paid charging plugs now.", cat: "private", reason: "App payment makes plugs excludable and scarce sockets remain rivalrous → private good." },
  { prompt: "An island town installs a free tsunami-warning radio channel accessible to all residents with any basic radio receiver. Classify this warning broadcast.", cat: "public", reason: "Non-excludable and non-rivalrous → pure public good." },
  { prompt: "A shared mountain snow-melt canal has no sluice locks; every farmer taking extra irrigation water leaves less flow for downstream farms. Classify the canal water.", cat: "cpr", reason: "No locks (non-excludable) and water diversion reduces downstream supply (rivalrous) → common pool resource." },
  { prompt: "A cloud gaming platform charges $15/month and allocates dedicated graphics cards so each player's session uses exclusive hardware capacity during peak evening loads. Classify a peak-load dedicated session.", cat: "private", reason: "Monthly subscription is excludable and occupying a dedicated GPU card is rivalrous → private good." },
  { prompt: "A subscription podcast feed requires paid Patreon membership, and unlimited subscribers can download the audio file simultaneously. Classify the paid podcast feed.", cat: "club", reason: "Paid feed is excludable while audio downloads are non-rivalrous → club good." },
  { prompt: "A free public fireworks display above Marina Bay can be viewed simultaneously by hundreds of thousands along open waterfront promenades. Classify viewing the aerial fireworks.", cat: "public", reason: "Viewing from public promenades is non-excludable and non-rivalrous → pure public good." },
  { prompt: "Unregulated deep-sea seabed mining in international waters extracts finite cobalt nodules without licensing controls. Classify those cobalt nodules.", cat: "cpr", reason: "No single owner excludes vessels (non-excludable) and mined nodules cannot be mined again (rivalrous) → common pool resource." },
  { prompt: "A boutique gym charges $180/month and caps membership tightly so machines are always free with zero waiting. Classify access to this uncrowded boutique gym.", cat: "club", reason: "High membership fee is excludable and zero waiting keeps use non-rivalrous → club good." },
  { prompt: "A supermarket bakery sells freshly baked croissants at $4 each on a first-come, first-served basis. Classify a croissant.", cat: "private", reason: "Price excludes non-payers and eating one reduces stock for others → private good." },
  { prompt: "An open community orchard lets any resident pick apples freely, yet early pickers often strip the trees bare before afternoon visitors arrive. Classify the apples in this orchard.", cat: "cpr", reason: "Open to all (non-excludable) and picked apples deplete remaining supply (rivalrous) → common pool resource." },
];

function catSpec(cat: "private" | "public" | "club" | "cpr") {
  if (cat === "private") return { type: "text" as const, accept: ["private good", "private goods", "private"], display: "Private good" };
  if (cat === "public") return { type: "text" as const, accept: ["public good", "pure public good", "public goods", "pure public goods", "public"], display: "Public good" };
  if (cat === "club") return { type: "text" as const, accept: ["club good", "club goods", "toll good", "toll goods", "artificially scarce good", "club"], display: "Club good" };
  return {
    type: "text" as const,
    accept: ["common pool resource", "common pool resources", "common-pool resource", "common-pool resources", "cpr", "common access resource"],
    display: "Common pool resource",
  };
}

const CITIES = ["Singapore", "London", "Sydney", "Toronto", "Auckland", "Zurich", "Tokyo", "Dublin"];

const OLIGOPOLY_PAIRS: Array<[string, string, string, string, string]> = [
  ["SkyJet", "PacificAir", "regional airlines", "High Fare", "Cut Fare"],
  ["BobaCo", "TeaLab", "bubble-tea chains", "High Price", "Discount"],
  ["TelcoOne", "WaveNet", "mobile carriers", "Keep Plan", "Slash Plan"],
  ["FreshMart", "ValueGrocer", "supermarket chains", "High Margin", "Price War"],
  ["StreamFlix", "CinePlus", "streaming rivals", "Keep Fee", "Cut Fee"],
  ["QuickRide", "MetroCab", "ride-hailing apps", "High Fee", "Low Fee"],
  ["VoltAuto", "EcoDrive", "EV manufacturers", "Hold Price", "Rebate"],
  ["BrewHaus", "RoastBox", "coffee chains", "Premium", "Promo"],
  ["CloudPeak", "DataGrid", "cloud providers", "List Price", "Discount"],
  ["SwiftPost", "ParcelGo", "courier firms", "Standard", "Undercut"],
  ["ApexBank", "CrestBank", "retail banks", "High Fee", "Zero Fee"],
  ["FitPulse", "IronClub", "gym chains", "Keep Rate", "Cut Rate"],
];

export const drills: Drill[] = [
  // ===========================================================================
  // DRILL 1: CLASSIFYING GOODS (PRIVATE / PUBLIC / CLUB / COMMON POOL) [SL]
  // ===========================================================================
  {
    id: "2b-market-failure-power.classify-goods",
    topicId: "2b-market-failure-power",
    title: "Classify Goods: Private, Public, Club or Common Pool",
    level: 1,
    ibLevel: "SL",
    guideRef: "public-goods-asymmetric-info",
    generate(rng, tier) {
      if (tier === 1) {
        const g = rng.pick(GOODS_BANK);
        const city = rng.pick(CITIES);
        const rTxt = g.rivalrous ? "**rivalrous**" : "**non-rivalrous**";
        const eTxt = g.excludable ? "**excludable**" : "**non-excludable**";
        const spec = catSpec(g.cat);
        return {
          prompt: `In ${city}, ${g.label} is ${rTxt} and ${eTxt}. Classify this good (private good, public good, club good, or common pool resource).`,
          answer: spec,
          hint: "Check the 2×2 matrix: Excludable + Rivalrous = Private; Non-excludable + Non-rivalrous = Public; Excludable + Non-rivalrous = Club; Non-excludable + Rivalrous = Common pool resource.",
          solution: [
            `Rivalry: ${g.rivalrous ? "Rivalrous" : "Non-rivalrous"}. Excludability: ${g.excludable ? "Excludable" : "Non-excludable"}.`,
            `Therefore it is a **${spec.display}** (${g.reason}).`,
          ],
        };
      }
      if (tier === 2) {
        const g = rng.pick(GOODS_BANK);
        const prompt = rng.pick([
          `Apply the rivalry and excludability tests to classify **${g.label}** (private good, public good, club good, or common pool resource).`,
          `Using IB Microeconomics categories, classify **${g.label}** (private good, public good, club good, or common pool resource).`,
          `Which of the four economic categories (private good, public good, club good, or common pool resource) best describes **${g.label}**?`,
        ]);
        const spec = catSpec(g.cat);
        return {
          prompt,
          answer: spec,
          hint: "Ask two questions: (1) Can non-payers be blocked? (2) Does one person's consumption leave less for others?",
          solution: [
            `Test excludability: ${g.excludable ? "Excludable" : "Non-excludable"}. Test rivalry: ${g.rivalrous ? "Rivalrous" : "Non-rivalrous"}.`,
            `Reason: ${g.reason}.`,
            `Category: **${spec.display}**.`,
          ],
        };
      }
      // Tier 3: dynamic / congestion / policy-shift edge cases (28 distinct scenarios × city variation if needed, already 28 >= 25!)
      const sc = rng.pick(EDGE_SCENARIOS);
      const spec = catSpec(sc.cat);
      return {
        prompt: `${sc.prompt} (Answer: private good, public good, club good, or common pool resource.)`,
        answer: spec,
        hint: "Watch carefully for congestion (creates rivalry) or tolls/paywalls/fences (creates excludability)!",
        solution: [sc.reason, `Category: **${spec.display}**.`],
      };
    },
  },

  // ===========================================================================
  // DRILL 2: EXTERNALITY WELFARE LOSS TRIANGLE AREA [SL]
  // ===========================================================================
  {
    id: "2b-market-failure-power.externality-welfare-loss",
    topicId: "2b-market-failure-power",
    title: "Externality Welfare Loss Triangles & Pigouvian Taxes",
    level: 2,
    ibLevel: "SL",
    guideRef: "externalities-common-pool",
    generate(rng, tier) {
      if (tier === 1) {
        const isNeg = rng.bool();
        const qBase = rng.int(20, 60);
        const dq = rng.int(3, 14) * 2; // even so area is always exact integer
        const ext = rng.int(6, 30);
        const qm = isNeg ? qBase + dq : qBase;
        const qStar = isNeg ? qBase : qBase + dq;
        const dwl = clean(0.5 * dq * ext);
        const goods = isNeg
          ? ["coal-fired steel", "diesel haulage", "petrol commuting", "plastic packaging", "industrial cement"]
          : ["childhood vaccinations", "solar roof installs", "adult coding courses", "preventative check-ups", "urban tree planting"];
        const good = rng.pick(goods);
        const extName = isNeg ? "marginal external cost (MEC)" : "marginal external benefit (MEB)";
        return {
          prompt: `In a market for ${good}, free-market output is {{Q_m = ${qm}}} units, socially optimal output is {{Q^* = ${qStar}}} units, and the constant ${extName} is $${ext} per unit. Calculate the deadweight welfare loss in dollars.`,
          answer: { type: "number", value: dwl, display: `$${num(dwl)}` },
          traps: [
            { spec: { type: "number", value: dq * ext }, feedback: "Don't forget the 1/2 factor for a triangle area: 1/2 × |Qₘ − Q*| × external cost/benefit." },
          ],
          hint: "Welfare loss triangle area = {{1/2 * |Q_m - Q^*| * (MEC or MEB)}}.",
          solution: [
            `Quantity gap = {{|${qm} - ${qStar}| = ${dq}}} units.`,
            `Vertical externality gap = $${ext} per unit.`,
            `Welfare loss = {{1/2 * ${dq} * ${ext} = $${num(dwl)}}}.`,
          ],
        };
      }

      if (tier === 2) {
        // Linear market: MPB = a - sQ, MPC = c + sQ, exact integer Qm, Q*, DWL
        const isNeg = rng.bool();
        const s = rng.pick([0.5, 1]);
        const k = s === 0.5 ? rng.int(3, 9) * 2 : rng.int(4, 16); // ensures s * k^2 is exact integer
        const qm = rng.int(24, 60);
        const c = rng.int(10, 30);
        const a = clean(c + 2 * s * qm);
        const ext = clean(2 * s * k);
        const qStar = isNeg ? qm - k : qm + k;
        const dwl = clean(0.5 * k * ext);
        const sStr = s === 1 ? "Q" : "0.5Q";
        if (isNeg) {
          const mscInt = clean(c + ext);
          return {
            prompt: `A polluting market has {{MPB = MSB = ${a} - ${sStr}}}, {{MPC = ${c} + ${sStr}}}, and constant {{MEC = $${ext}}} per unit (so {{MSC = ${mscInt} + ${sStr}}}). Calculate the deadweight welfare loss (in dollars) at the unregulated market equilibrium.`,
            answer: { type: "number", value: dwl, display: `$${num(dwl)}` },
            traps: [
              { spec: { type: "number" as const, value: k * ext }, feedback: "You found base × height; multiply by 1/2 for the welfare loss triangle." },
              ...(qm !== dwl
                ? [{ spec: { type: "number" as const, value: qm }, feedback: `${qm} is free-market output Qₘ; next find Q* and compute 1/2 × (Qₘ − Q*) × MEC.` }]
                : []),
            ],
            hint: "Solve {{MPC = MPB}} for {{Q_m}}, solve {{MSC = MSB}} for {{Q^*}}, then apply {{1/2 * (Q_m - Q^*) * MEC}}.",
            solution: [
              `Free market ({{MPC = MPB}}): {{${c} + ${sStr} = ${a} - ${sStr}}} → {{Q_m = ${qm}}}.`,
              `Social optimum ({{MSC = MSB}}): {{${mscInt} + ${sStr} = ${a} - ${sStr}}} → {{Q^* = ${qStar}}}.`,
              `Welfare loss = {{1/2 * (${qm} - ${qStar}) * ${ext} = 1/2 * ${k} * ${ext} = $${num(dwl)}}}.`,
            ],
          };
        }
        const msbInt = clean(a + ext);
        return {
          prompt: `A merit-good market has {{MPB = ${a} - ${sStr}}}, constant {{MEB = $${ext}}} per unit (so {{MSB = ${msbInt} - ${sStr}}}), and {{MPC = MSC = ${c} + ${sStr}}}. Calculate the deadweight welfare loss (in dollars) at the free-market equilibrium.`,
          answer: { type: "number", value: dwl, display: `$${num(dwl)}` },
          traps: [
            { spec: { type: "number", value: k * ext }, feedback: "Multiply by 1/2 — the welfare loss region is a triangle, not a rectangle." },
          ],
          hint: "Solve {{MPB = MPC}} for {{Q_m}}, solve {{MSB = MSC}} for {{Q^*}}, then apply {{1/2 * (Q^* - Q_m) * MEB}}.",
          solution: [
            `Free market ({{MPB = MPC}}): {{${a} - ${sStr} = ${c} + ${sStr}}} → {{Q_m = ${qm}}}.`,
            `Social optimum ({{MSB = MSC}}): {{${msbInt} - ${sStr} = ${c} + ${sStr}}} → {{Q^* = ${qStar}}}.`,
            `Welfare loss = {{1/2 * (${qStar} - ${qm}) * ${ext} = 1/2 * ${k} * ${ext} = $${num(dwl)}}}.`,
          ],
        };
      }

      // Tier 3: Partial Pigouvian tax leaving a smaller remaining DWL
      const m = rng.int(2, 7);
      const k = 4 * m; // Qm - Q* = 4m
      const ext = 2 * k; // 8m
      const fracNum = rng.pick([1, 2, 3]); // tax = (fracNum/4) * ext
      const tax = fracNum * 2 * m; // exact even integer
      const qm = rng.int(35, 70);
      const c = rng.int(10, 26);
      const a = c + 2 * qm;
      const qStar = qm - k;
      const qt = qm - tax / 2;
      const remGap = ext - tax;
      const remDwl = clean(0.5 * (qt - qStar) * remGap);
      const origDwl = clean(0.5 * k * ext);
      return {
        prompt: `A carbon-emitting industry has {{MPB = MSB = ${a} - Q}}, {{MPC = ${c} + Q}}, and constant {{MEC = $${ext}}} (so {{MSC = ${c + ext} + Q}}). The government imposes a partial Pigouvian tax of **$${tax}** per unit (shifting private supply to {{MPC + t = ${c + tax} + Q}}). Calculate the **remaining** deadweight welfare loss in dollars.`,
        answer: { type: "number", value: remDwl, display: `$${num(remDwl)}` },
        traps: [
          { spec: { type: "number", value: origDwl }, feedback: `$${origDwl} is the pre-tax deadweight loss; recompute using post-tax output Qₜ = ${qt}.` },
          { spec: { type: "number", value: remDwl * 2 }, feedback: "Don't forget the 1/2 factor in the remaining welfare loss triangle." },
        ],
        hint: "Find {{Q^*}} ({{MSC = MSB}}) and post-tax {{Q_t}} ({{MPC + t = MPB}}), then compute {{1/2 * (Q_t - Q^*) * (MEC - t)}}.",
        solution: [
          `Social optimum ({{MSC = MSB}}): {{${c + ext} + Q = ${a} - Q}} → {{Q^* = ${qStar}}}.`,
          `Post-tax output ({{MPC + t = MPB}}): {{${c + tax} + Q = ${a} - Q}} → {{Q_t = ${qt}}}.`,
          `Remaining vertical gap at {{Q_t}} is {{MEC - t = ${ext} - ${tax} = $${remGap}}}.`,
          `Remaining welfare loss = {{1/2 * (${qt} - ${qStar}) * ${remGap} = $${num(remDwl)}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 3: [HL] FIRM COSTS, REVENUES & MONOPOLY MC = MR
  // ===========================================================================
  {
    id: "2b-market-failure-power.firm-costs-revenues-hl",
    topicId: "2b-market-failure-power",
    title: "[HL] Firm Costs, Revenues, MC = MR & Monopoly Profit",
    level: 2,
    ibLevel: "HL",
    guideRef: "costs-revenues-perfect-monopoly-hl",
    generate(rng, tier) {
      if (tier === 1) {
        const mode = rng.int(1, 3);
        if (mode === 1) {
          const q = rng.pick([10, 15, 20, 25, 40, 50]);
          const afc = rng.int(4, 24);
          const avc = rng.int(12, 45);
          const tfc = afc * q;
          const tvc = avc * q;
          const ac = afc + avc;
          return {
            prompt: `[HL] A firm has total fixed cost {{TFC = $${tfc}}} and total variable cost {{TVC = $${tvc}}} when producing {{Q = ${q}}} units. Calculate Average Total Cost (AC) in dollars.`,
            answer: { type: "number", value: ac, display: `$${ac}` },
            traps: [
              { spec: { type: "number", value: avc }, feedback: `$${avc} is AVC (TVC/Q); include TFC to get AC.` },
              { spec: { type: "number", value: tfc + tvc }, feedback: `$${tfc + tvc} is Total Cost (TC); divide by Q = ${q} to find AC.` },
            ],
            hint: "Compute {{TC = TFC + TVC}}, then divide by {{Q}}.",
            solution: [`{{TC = $${tfc} + $${tvc} = $${tfc + tvc}}}.`, `{{AC = $${tfc + tvc} / ${q} = $${ac}}}.`],
          };
        }
        if (mode === 2) {
          const q1 = rng.int(10, 45);
          const dq = rng.pick([2, 4, 5, 10]);
          const mc = rng.int(8, 42);
          const tc1 = rng.int(200, 600);
          const tc2 = tc1 + mc * dq;
          return {
            prompt: `[HL] Increasing output from {{Q = ${q1}}} to {{Q = ${q1 + dq}}} units raises a firm's total cost from $${tc1} to $${tc2}. Calculate the marginal cost (MC) in dollars per unit over this interval.`,
            answer: { type: "number", value: mc, display: `$${mc}` },
            traps: [
              { spec: { type: "number", value: mc * dq }, feedback: `$${mc * dq} is ΔTC; divide by ΔQ = ${dq} units to get MC per unit.` },
            ],
            hint: "Use {{MC = ΔTC / ΔQ}}.",
            solution: [`{{ΔTC = $${tc2} - $${tc1} = $${mc * dq}}} and {{ΔQ = ${dq}}}.`, `{{MC = $${mc * dq} / ${dq} = $${mc}}}.`],
          };
        }
        // mode 3: MR at given Q from linear inverse demand P = a - bQ
        const b = rng.pick([1, 2, 3]);
        const q = rng.int(5, 18);
        const mr = rng.int(6, 36);
        const a = mr + 2 * b * q;
        const p = a - b * q;
        return {
          prompt: `[HL] A price-making firm faces linear inverse demand {{P = ${a} - ${b === 1 ? "Q" : `${b}Q`}}}. Calculate its marginal revenue (MR, in dollars) at {{Q = ${q}}} units.`,
          answer: { type: "number", value: mr, display: `$${mr}` },
          traps: [
            { spec: { type: "number", value: p }, feedback: `$${p} is price (AR) from P = ${a} − ${b}Q; MR has twice the slope (${a} − ${2 * b}Q).` },
          ],
          hint: "For linear demand {{P = a - bQ}}, marginal revenue is {{MR = a - 2bQ}}.",
          solution: [`{{MR = ${a} - ${2 * b}Q}}.`, `At {{Q = ${q}}}, {{MR = ${a} - ${2 * b * q} = $${mr}}}.`],
        };
      }

      if (tier === 2) {
        // Monopoly Qm, Pm, or abnormal profit from P = a - bQ, constant MC = c, TFC = F
        const b = rng.pick([1, 2]);
        const qm = rng.int(10, 32);
        const mc = rng.int(10, 30);
        const a = mc + 2 * b * qm;
        const pm = mc + b * qm;
        const grossMargin = (pm - mc) * qm;
        const tfc = rng.int(1, Math.max(2, Math.floor(grossMargin / 100) - 1)) * 50;
        const profit = grossMargin - tfc;
        const ask = rng.pick(["price", "profit"] as const);
        const dStr = b === 1 ? `${a} - Q` : `${a} - ${b}Q`;
        const mrStr = `${a} - ${2 * b}Q`;
        if (ask === "price") {
          return {
            prompt: `[HL] A profit-maximising monopolist faces inverse demand {{P = ${dStr}}} (so {{MR = ${mrStr}}}) and constant {{MC = $${mc}}}. Calculate its profit-maximising price {{P_m}} in dollars.`,
            answer: { type: "number", value: pm, display: `$${pm}` },
            traps: [
              { spec: { type: "number", value: qm }, feedback: `${qm} is monopoly output Qₘ; plug Qₘ into the demand curve P = ${dStr} to find price.` },
              { spec: { type: "number", value: mc }, feedback: `$${mc} is marginal cost; read the monopoly price up on the demand curve D = AR!` },
            ],
            hint: "First solve {{MC = MR}} for {{Q_m}}, then substitute {{Q_m}} into {{P = " + dStr + "}}.",
            solution: [
              `Set {{MC = MR}}: {{${mc} = ${mrStr}}} → {{${2 * b}Q = ${a - mc}}} → {{Q_m = ${qm}}}.`,
              `Substitute into demand: {{P_m = ${a} - ${b * qm} = $${pm}}}.`,
            ],
          };
        }
        return {
          prompt: `[HL] A monopolist faces inverse demand {{P = ${dStr}}} (so {{MR = ${mrStr}}}), constant {{MC = $${mc}}}, and fixed cost {{TFC = $${tfc}}}. Calculate its maximum abnormal profit in dollars.`,
          answer: { type: "number", value: profit, display: `$${profit}` },
          traps: [
            { spec: { type: "number", value: grossMargin }, feedback: `$${grossMargin} omits fixed cost TFC = $${tfc}; subtract full TC = TFC + MC × Qₘ from TR.` },
          ],
          hint: "Find {{Q_m}} via {{MC = MR}}, find {{P_m}} on demand, then compute {{TR - TC = P_m Q_m - (TFC + MC * Q_m)}}.",
          solution: [
            `{{MC = MR}}: {{${mc} = ${mrStr}}} → {{Q_m = ${qm}}} units; {{P_m = ${a} - ${b * qm} = $${pm}}}.`,
            `{{TR = $${pm} * ${qm} = $${pm * qm}}}; {{TC = $${tfc} + $${mc} * ${qm} = $${tfc + mc * qm}}}.`,
            `Abnormal profit = {{$${pm * qm} - $${tfc + mc * qm} = $${profit}}}.`,
          ],
        };
      }

      // Tier 3: Monopoly deadweight loss vs perfect competition (P = MC)
      const b = rng.pick([1, 2]);
      const qm = b === 1 ? rng.int(6, 20) * 2 : rng.int(10, 28); // ensures 0.5 * b * qm^2 is an exact integer
      const mc = rng.int(8, 32);
      const a = mc + 2 * b * qm;
      const pm = mc + b * qm;
      const qpc = 2 * qm;
      const dwl = clean(0.5 * (pm - mc) * (qpc - qm));
      const dStr = b === 1 ? `${a} - Q` : `${a} - ${b}Q`;
      const mrStr = `${a} - ${2 * b}Q`;
      return {
        prompt: `[HL] A monopolist faces inverse demand {{P = ${dStr}}} (so {{MR = ${mrStr}}}) and constant marginal cost {{MC = $${mc}}}. Calculate the deadweight welfare loss (in dollars) relative to perfect competition ({{P = MC}}).`,
        answer: { type: "number", value: dwl, display: `$${dwl}` },
        traps: [
          { spec: { type: "number", value: dwl * 2 }, feedback: "Don't forget the 1/2 factor for the triangular deadweight loss area." },
        ],
        hint: "Find monopoly ({{Q_m}}, {{P_m}}) from {{MC = MR}}, find competitive {{Q_{pc}}} from {{P = MC}}, then compute {{1/2 * (P_m - MC) * (Q_{pc} - Q_m)}}.",
        solution: [
          `Monopoly ({{MC = MR}}): {{${mrStr} = ${mc}}} → {{Q_m = ${qm}}}, {{P_m = $${pm}}}.`,
          `Perfect competition ({{P = MC}}): {{${dStr} = ${mc}}} → {{Q_{pc} = ${qpc}}}.`,
          `{{DWL = 1/2 * ($${pm} - $${mc}) * (${qpc} - ${qm}) = 1/2 * ${pm - mc} * ${qm} = $${dwl}}}.`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 4: [HL] SHORT-RUN SHUT-DOWN VS CONTINUE DECISION (P vs AVC vs AC)
  // ===========================================================================
  {
    id: "2b-market-failure-power.shutdown-decision-hl",
    topicId: "2b-market-failure-power",
    title: "[HL] Short-Run Shut-Down vs Continue Decision",
    level: 2,
    ibLevel: "HL",
    guideRef: "costs-revenues-perfect-monopoly-hl",
    generate(rng, tier) {
      const firms = ["wheat farm", "textile mill", "coffee roaster", "bakery", "timber workshop", "ceramic studio", "bicycle plant", "flower grower"];
      const firm = rng.pick(firms);

      if (tier === 1) {
        const avc = rng.int(12, 35);
        const afc = rng.int(5, 18);
        const ac = avc + afc;
        const shouldShut = rng.bool();
        const p = shouldShut ? rng.int(Math.max(4, avc - 8), avc - 1) : rng.int(avc + 1, ac - 1);
        const q = rng.pick([40, 50, 60, 80, 100, 120, 150, 200]);
        return {
          prompt: `[HL] At its {{MC = MR}} output of ${q} units, a competitive ${firm} faces market price {{P = $${p}}}, with {{AVC = $${avc}}} and {{AC = $${ac}}}. Should it **continue** or **shut down** in the short run?`,
          answer: shouldShut
            ? { type: "text", accept: ["shut down", "shutdown", "close", "close down"], display: "Shut down" }
            : { type: "text", accept: ["continue", "continue operating", "stay open", "operate", "produce"], display: "Continue" },
          hint: "Compare market price {{P}} with Average Variable Cost ({{AVC}}): fixed costs are sunk in the short run!",
          solution: shouldShut
            ? [
                `Since {{P = $${p} < AVC = $${avc}}}, revenue fails even to cover variable costs.`,
                `Operating adds $${avc - p} per unit on top of fixed costs, so the firm should **shut down** in the short run.`,
              ]
            : [
                `Although {{P = $${p} < AC = $${ac}}} (a loss), {{P = $${p} > AVC = $${avc}}}.`,
                `Each unit contributes $${p - avc} toward fixed costs, making the loss smaller than shutting down → **continue** in the short run.`,
              ],
        };
      }

      if (tier === 2) {
        const q = rng.pick([20, 25, 40, 50, 80, 100]);
        const avc = rng.int(10, 30);
        const afc = rng.int(6, 16);
        const tvc = avc * q;
        const tfc = afc * q;
        const shouldShut = rng.bool();
        const p = shouldShut ? rng.int(Math.max(3, avc - 7), avc - 1) : rng.int(avc + 1, avc + afc - 1);
        const tr = p * q;
        const opLoss = tfc + tvc - tr;
        const minLoss = shouldShut ? tfc : opLoss;
        const wrongLoss = shouldShut ? opLoss : tfc;
        return {
          prompt: `[HL] At {{MC = MR}} output of ${q} units, a competitive ${firm} faces market price {{P = $${p}}}, with {{TFC = $${tfc}}} and {{TVC = $${tvc}}}. Calculate the firm's **minimum possible short-run loss** (enter as a positive dollar number) after choosing whether to operate or shut down.`,
          answer: { type: "number", value: minLoss, display: `$${minLoss}` },
          traps: [
            {
              spec: { type: "number", value: wrongLoss },
              feedback: shouldShut
                ? `$${wrongLoss} is the loss if it stays open — since P ($${p}) < AVC ($${avc}), shutting down caps the loss at TFC = $${tfc}!`
                : `$${wrongLoss} is TFC (shutting down) — since P ($${p}) > AVC ($${avc}), continuing trims the loss to $${opLoss}!`,
            },
          ],
          hint: "Compare loss if operating ({{TFC + TVC - P * Q}}) against loss if shutting down ({{TFC}}), and pick the smaller loss.",
          solution: [
            `{{AVC = $${tvc} / ${q} = $${avc}}}; {{TR = $${p} * ${q} = $${tr}}}.`,
            `Operating loss = {{$${tfc + tvc} - $${tr} = $${opLoss}}}; shut-down loss = {{TFC = $${tfc}}}.`,
            shouldShut
              ? `Since {{P < AVC}}, shut down → minimum short-run loss = **$${tfc}**.`
              : `Since {{P > AVC}}, continue operating → minimum short-run loss = **$${opLoss}**.`,
          ],
        };
      }

      // Tier 3: How much loss is SAVED by making the optimal SR decision instead of the wrong one?
      const q = rng.pick([25, 40, 50, 60, 80, 100]);
      const avc = rng.int(12, 34);
      const afc = rng.int(8, 20);
      const tvc = avc * q;
      const tfc = afc * q;
      const shouldShut = rng.bool();
      const p = shouldShut ? rng.int(Math.max(4, avc - 8), avc - 2) : rng.int(avc + 2, avc + afc - 1);
      const tr = p * q;
      const opLoss = tfc + tvc - tr;
      const saved = Math.abs(opLoss - tfc);
      return {
        prompt: `[HL] At {{MC = MR}} output of ${q} units, a competitive ${firm} faces {{P = $${p}}}, {{TFC = $${tfc}}}, and {{TVC = $${tvc}}}. How many dollars of short-run loss does the firm **save** by choosing the optimal short-run decision rather than the alternative?`,
        answer: { type: "number", value: saved, display: `$${saved}` },
        traps:
          Math.min(opLoss, tfc) !== saved
            ? [
                {
                  spec: { type: "number", value: Math.min(opLoss, tfc) },
                  feedback: `$${Math.min(opLoss, tfc)} is the minimum loss itself — subtract it from the worse option ($${Math.max(opLoss, tfc)}) to find the loss *saved*!`,
                },
              ]
            : undefined,
        hint: "Find both the operating loss ({{TC - TR}}) and shut-down loss ({{TFC}}), then take their difference.",
        solution: [
          `{{TR = $${p} * ${q} = $${tr}}}; {{TC = $${tfc} + $${tvc} = $${tfc + tvc}}}.`,
          `Operating loss = $${opLoss}; shut-down loss = $${tfc}.`,
          `Optimal choice saves {{$${Math.max(opLoss, tfc)} - $${Math.min(opLoss, tfc)} = $${saved}}} (note this equals {{|TR - TVC|}}).`,
        ],
      };
    },
  },

  // ===========================================================================
  // DRILL 5: [HL] 2×2 OLIGOPOLY GAME THEORY — DOMINANT STRATEGY & NASH EQ
  // ===========================================================================
  {
    id: "2b-market-failure-power.game-theory-nash-hl",
    topicId: "2b-market-failure-power",
    title: "[HL] Oligopoly 2×2 Game Theory & Nash Equilibrium",
    level: 3,
    ibLevel: "HL",
    guideRef: "monopolistic-oligopoly-equity-hl",
    generate(rng, tier) {
      const [fA, fB, ind, stratH, stratL] = rng.pick(OLIGOPOLY_PAIRS);

      if (tier === 1 || tier === 2) {
        // Symmetric Prisoner's Dilemma: T > R > P > S
        const S = rng.int(15, 45);
        const P = S + rng.int(10, 30);
        const R = P + rng.int(15, 35);
        const T = R + rng.int(15, 35);
        const matrix = `| | ${fB}: ${stratH} | ${fB}: ${stratL} |\n|---|---|---|\n| **${fA}: ${stratH}** | ($${R}m, $${R}m) | ($${S}m, $${T}m) |\n| **${fA}: ${stratL}** | ($${T}m, $${S}m) | ($${P}m, $${P}m) |`;

        if (tier === 1) {
          return {
            prompt: `[HL] Two rival ${ind}, **${fA}** and **${fB}**, simultaneously choose **${stratH}** or **${stratL}** (payoffs in $ million as ${fA}, ${fB}):\n\n${matrix}\n\nWhat is **${fA}'s** individual profit (in $ million) at the unique Nash equilibrium?`,
            answer: { type: "number", value: P, display: `$${P} million` },
            traps: [
              { spec: { type: "number", value: R }, feedback: `$${R}m is the collusive (${stratH}, ${stratH}) payoff — unstable because cheating pays $${T}m > $${R}m!` },
              { spec: { type: "number", value: T }, feedback: `$${T}m only occurs if ${fB} fails to respond; ${fB} also cuts to ${stratL}, landing at ($${P}m, $${P}m).` },
            ],
            hint: `Check ${fA}'s best response against ${stratH} ($${T}m vs $${R}m) and against ${stratL} ($${P}m vs $${S}m).`,
            solution: [
              `For ${fA}: vs ${stratH}, {{${T} > ${R}}} → ${stratL}; vs ${stratL}, {{${P} > ${S}}} → ${stratL} (strictly dominant strategy).`,
              `By symmetry, ${stratL} is strictly dominant for ${fB} → unique Nash equilibrium is (${stratL}, ${stratL}).`,
              `${fA}'s Nash equilibrium profit = **$${P} million**.`,
            ],
          };
        }

        // Tier 2: Combined Nash profit OR total joint profit lost vs collusion
        const askLost = rng.bool();
        const combinedNash = 2 * P;
        const combinedColl = 2 * R;
        const lost = combinedColl - combinedNash;
        if (!askLost) {
          return {
            prompt: `[HL] Two rival ${ind}, **${fA}** and **${fB}**, face the following profit matrix ($ million, ${fA} first):\n\n${matrix}\n\nCalculate the **combined industry profit** (in $ million) at the unique Nash equilibrium.`,
            answer: { type: "number", value: combinedNash, display: `$${combinedNash} million` },
            traps: [
              { spec: { type: "number", value: combinedColl }, feedback: `$${combinedColl}m is the collusive total — not a Nash equilibrium because both have a dominant strategy to choose ${stratL}.` },
              { spec: { type: "number", value: P }, feedback: `$${P}m is one firm's payoff; sum both firms ($${P}m + $${P}m) for combined industry profit.` },
            ],
            hint: "Find each firm's dominant strategy, locate the Nash equilibrium cell, and add both firms' payoffs.",
            solution: [
              `${stratL} is strictly dominant for both firms ({{${T} > ${R}}} and {{${P} > ${S}}}), so Nash equilibrium is (${stratL}, ${stratL}) = ($${P}m, $${P}m).`,
              `Combined industry profit = {{${P} + ${P} = $${combinedNash}}} million.`,
            ],
          };
        }
        return {
          prompt: `[HL] Two rival ${ind}, **${fA}** and **${fB}**, face the following profit matrix ($ million, ${fA} first):\n\n${matrix}\n\nHow much **combined industry profit** (in $ million) is lost at the Nash equilibrium compared with the (${stratH}, ${stratH}) collusive outcome?`,
          answer: { type: "number", value: lost, display: `$${lost} million` },
          traps: [
            { spec: { type: "number" as const, value: R - P }, feedback: `$${R - P}m is the loss for one firm only; multiply by 2 for combined industry profit lost.` },
            ...(combinedNash !== lost
              ? [{ spec: { type: "number" as const, value: combinedNash }, feedback: `$${combinedNash}m is the Nash combined profit; subtract it from the collusive total $${combinedColl}m.` }]
              : []),
          ],
          hint: "Compare combined profit at (${stratH}, ${stratH}) against combined profit at the Nash equilibrium (${stratL}, ${stratL}).",
          solution: [
            `Collusive combined profit = {{${R} + ${R} = $${combinedColl}}}m.`,
            `Unique Nash equilibrium is (${stratL}, ${stratL}) with combined profit {{${P} + ${P} = $${combinedNash}}}m.`,
            `Combined profit lost = {{${combinedColl} - ${combinedNash} = $${lost}}} million.`,
          ],
        };
      }

      // Tier 3: Asymmetric 2x2 matrix with strictly dominant strategy for Firm A & unique best response for Firm B (verified!)
      const sA = rng.int(20, 50);
      const pA = sA + rng.int(12, 30);
      const rA = pA + rng.int(15, 35);
      const tA = rA + rng.int(10, 28);

      const sB = rng.int(10, 30);
      const pB = sB + rng.int(8, 22);
      const rB = pB + rng.int(10, 25);
      // Randomly make Firm B have dominant stratL (Prisoner's dilemma) OR non-dominant where B picks stratH vs stratH yet stratL vs stratL!
      const bDominant = rng.bool();
      const tB = bDominant ? rB + rng.int(8, 24) : Math.max(pB + 2, rB - rng.int(4, 10));

      // Verify unique pure-strategy Nash equilibrium programmatically:
      // Row 0 = H, Row 1 = L; Col 0 = H, Col 1 = L
      // Payoffs A: [[rA, sA], [tA, pA]]; B: [[rB, tB], [sB, pB]]
      // Check: A vs col 0: tA > rA (row 1); A vs col 1: pA > sA (row 1) -> A strictly dominates Row 1 (L)
      // Check: B vs row 1: pB > sB (col 1) -> unique NE is ALWAYS (L, L) = (pA, pB)!
      // Even when tB < rB, (H, H) is NOT a NE because A deviates to L (tA > rA)!
      const matrix = `| | ${fB}: ${stratH} | ${fB}: ${stratL} |\n|---|---|---|\n| **${fA}: ${stratH}** | ($${rA}m, $${rB}m) | ($${sA}m, $${tB}m) |\n| **${fA}: ${stratL}** | ($${tA}m, $${sB}m) | ($${pA}m, $${pB}m) |`;
      const combinedEq = pA + pB;
      const combinedHH = rA + rB;
      return {
        prompt: `[HL] Two **asymmetric** ${ind}, market leader **${fA}** and smaller challenger **${fB}**, play the following simultaneous pricing game ($ million, ${fA} first):\n\n${matrix}\n\nCalculate the **combined industry profit** (in $ million) at the unique Nash equilibrium.`,
        answer: { type: "number", value: combinedEq, display: `$${combinedEq} million` },
        traps: [
          { spec: { type: "number", value: combinedHH }, feedback: `(${stratH}, ${stratH}) is NOT a Nash equilibrium because ${fA} gains by unilaterally switching to ${stratL} ($${tA}m > $${rA}m).` },
        ],
        hint: `Check whether ${fA} has a strictly dominant strategy first, then find ${fB}'s best response to ${fA}'s choice.`,
        solution: [
          `Check ${fA} (1st payoff): vs ${stratH}, {{${tA} > ${rA}}} → ${stratL}; vs ${stratL}, {{${pA} > ${sA}}} → ${stratL}. So **${stratL}** is strictly dominant for ${fA}.`,
          `Given ${fA} plays ${stratL}, ${fB} compares $${pB}m (${stratL}) vs $${sB}m (${stratH}) → ${fB} chooses **${stratL}**.`,
          `Unique Nash equilibrium is (${stratL}, ${stratL}) = ($${pA}m, $${pB}m) → combined profit = {{${pA} + ${pB} = $${combinedEq}}} million.`,
        ],
      };
    },
  },
];
