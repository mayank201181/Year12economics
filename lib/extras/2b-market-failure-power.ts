import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does Singapore charge drivers electronically to cross Orchard Road at 8:30 a.m., why did a Nobel Prize–winning paper about defective used cars get rejected by three top journals, and why do rival airlines keep slashing airfares even when both would earn millions more by keeping fares high? Welcome to the real world of **market failure, market power, and strategic game theory**.",
  didYouKnow: [
    "In 1970, **George Akerlof's** famous paper *'The Market for Lemons'* (explaining adverse selection) was rejected by three leading economics journals — one referee dismissed it as 'trivial' — before winning the **2001 Nobel Prize in Economics**!",
    "In 2009, **Elinor Ostrom** became the **first woman** to win the Nobel Memorial Prize in Economic Sciences — and she wasn't even trained as an economist, but as a political scientist who studied Swiss Alpine meadows, Nepali irrigation canals, and Maine lobster fleets.",
    "**Arthur Pigou** proposed corrective pollution taxes back in **1920** after noticing thick coal smoke from London factories imposed massive laundry and health costs on residents that never showed up on factory accounts.",
    "**Singapore's Electronic Road Pricing (ERP)**, launched in 1998, is cited in microeconomics textbooks worldwide as the purest real-world example of dynamic **Pigouvian pricing** — turning congested roads into excludable, accurately priced corridors.",
    "During the **2015–2016** and **2020** oil price plunges, **OPEC** experienced a textbook **Prisoner's Dilemma** in real time: members repeatedly pumped above agreed quotas to grab extra cash, crashing crude prices for everyone.",
    "Dutch company **ASML** holds a near-100% global monopoly over extreme ultraviolet (EUV) lithography machines costing over $150–$350 million each — an extraordinary modern test case of **Schumpeterian dynamic efficiency** vs monopoly concentration.",
  ],
  activities: [
    {
      title: "The Fishing Commons Challenge (Hardin vs Ostrom)",
      emoji: "🐟",
      materials: [
        "1 bowl representing an ocean fishery",
        "20 paperclips or candies representing fish stocks (max capacity = 20)",
        "4 players (or run 4 columns on paper solo) with secret harvest slips",
      ],
      steps: [
        "**Round 1–4 (Open Access — Hardin)**: Each round, players secretly write how many fish (0 to 4) they catch — NO talking allowed! Subtract total catches from the bowl; remaining fish **double** at the end of each round (capped at 20). Watch how quickly the stock collapses to zero!",
        "**Round 5–8 (Collective Self-Governance — Ostrom)**: Reset to 20 fish, then allow 2 minutes of **group communication** to agree on a sustainable catch rule (e.g. max 2 fish per player per round, leaving 12 to regenerate back to 20) plus a peer penalty if anyone breaks the quota.",
        "Compare total cumulative fish caught across 4 rounds under open access vs collective self-governance.",
      ],
      maths:
        "Maximum sustainable yield occurs at stock {{S = 10}} fish (harvesting 10 fish per round lets the remaining 10 double back to 20 indefinitely!). Under open access, grabbing 4 fish individually yields 16 caught in Round 1, leaving only 4 → 8 in Round 2 → collapse by Round 3!",
    },
    {
      title: "Classroom Cartel: The Bubble-Tea Price War",
      emoji: "🧋",
      materials: [
        "Two cards per player labelled **HIGH ($6)** and **CUT ($4)**",
        "Scoreboard tracking cumulative profit over 5 rounds",
      ],
      steps: [
        "**One-Shot Game**: Pair up as rival mall bubble-tea chains. Payoffs are: Both HIGH = ($90, $90); One CUTS while rival stays HIGH = ($115, $40); Both CUT = ($55, $55). Reveal cards simultaneously without speaking. Record how many pairs land in the Nash equilibrium (CUT, CUT)!",
        "**Repeated Game (5 Rounds)**: Now allow 30 seconds of 'cartel negotiation' before Round 1, then play 5 secret rounds in a row where players can retaliate in the next round if betrayed.",
        "Notice how **tit-for-tat retaliation** can sustain cooperation in Rounds 1–4 — until the **final round (Round 5)**, when defection suddenly surges again!",
      ],
      maths:
        "One-shot cheating gain = {{115 - 90 = +$25}}, while staying loyal against a cheater loses {{90 - 40 = $50}}. Over 5 repeated rounds, mutual collusion pays {{5 * $90 = $450}} vs {{5 * $55 = $275}} under continuous price war — a $175 incentive to sustain trust!",
    },
  ],
  bonusDiagrams: [
    {
      title: "Positive Externality of Consumption (Merit Good) Corrected by Subsidy",
      svg: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Positive consumption externality diagram showing MSB above MPB, initial underconsumption Qm below Q star, and a per-unit subsidy shifting MPC down to MPC minus subsidy to reach Q star">
  <rect width="460" height="300" fill="#ffffff"/>
  <defs>
    <marker id="arr-b1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
    <marker id="arr-g1" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
  </defs>
  <line x1="65" y1="255" x2="425" y2="255" stroke="#334155" stroke-width="2" marker-end="url(#arr-b1)"/>
  <line x1="65" y1="255" x2="65" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#arr-b1)"/>
  <text x="425" y="274" font-size="11.5" font-weight="700" text-anchor="end" fill="#1e293b">Quantity</text>
  <text x="14" y="34" font-size="11.5" font-weight="700" fill="#1e293b">Price,</text>
  <text x="14" y="48" font-size="11.5" font-weight="700" fill="#1e293b">Costs &amp;</text>
  <text x="14" y="62" font-size="11.5" font-weight="700" fill="#1e293b">Benefits</text>
  <!-- Initial Welfare Loss Triangle: Qm=(215,155), MSB at Qm=(215,95), Q*=(265,125) -->
  <polygon points="215,155 215,95 265,125" fill="#fed7aa" fill-opacity="0.85" stroke="#c2410c" stroke-width="1.4"/>
  <text x="233" y="129" font-size="9.5" font-weight="800" text-anchor="middle" fill="#9a3412">DWL</text>
  <!-- MPC = MSC: slope -0.6: passes (215,155) and (265,125) -> from (115,215) to (375,59) -->
  <line x1="115" y1="215" x2="375" y2="59" stroke="#2563eb" stroke-width="2.5"/>
  <text x="378" y="61" font-size="11" font-weight="800" fill="#1d4ed8">S = MPC = MSC</text>
  <!-- MPC - Subsidy shifted down by 60px: passes (265,185) -> from (145,257) clipped (165,245) to (395,107) -->
  <line x1="165" y1="245" x2="395" y2="107" stroke="#15803d" stroke-width="2.5" stroke-dasharray="6 3"/>
  <text x="397" y="112" font-size="10.5" font-weight="800" fill="#15803d">MPC − Sub</text>
  <!-- MPB = D: slope +0.6: passes (215,155) and (265,185) -> from (95,83) to (365,245) -->
  <line x1="95" y1="83" x2="365" y2="245" stroke="#0d9488" stroke-width="2.5"/>
  <text x="368" y="246" font-size="11" font-weight="800" fill="#0f766e">D = MPB</text>
  <!-- MSB: shifted up 60px: passes (215,95) and (265,125) -> from (115,35) to (395,203) -->
  <line x1="115" y1="35" x2="395" y2="203" stroke="#7c3aed" stroke-width="2.6"/>
  <text x="398" y="206" font-size="11.5" font-weight="800" fill="#6d28d9">MSB</text>
  <!-- Subsidy arrow -->
  <line x1="330" y1="90" x2="330" y2="140" stroke="#15803d" stroke-width="1.8" marker-end="url(#arr-g1)"/>
  <text x="336" y="119" font-size="10" font-weight="700" fill="#15803d">Subsidy</text>
  <!-- Guides -->
  <line x1="215" y1="155" x2="215" y2="255" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="65" y1="155" x2="215" y2="155" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="265" y1="125" x2="265" y2="255" stroke="#15803d" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="65" y1="185" x2="265" y2="185" stroke="#15803d" stroke-width="1.3" stroke-dasharray="4 4"/>
  <line x1="65" y1="125" x2="265" y2="125" stroke="#6d28d9" stroke-width="1.2" stroke-dasharray="4 4"/>
  <circle cx="215" cy="155" r="4" fill="#0d9488"/>
  <circle cx="265" cy="125" r="4" fill="#6d28d9"/>
  <circle cx="265" cy="185" r="4" fill="#15803d"/>
  <text x="215" y="272" font-size="11.5" font-weight="800" text-anchor="middle" fill="#0f766e">Qₘ</text>
  <text x="265" y="272" font-size="11.5" font-weight="800" text-anchor="middle" fill="#15803d">Q*</text>
  <text x="58" y="129" font-size="10.5" font-weight="800" text-anchor="end" fill="#6d28d9">P*</text>
  <text x="58" y="159" font-size="11" font-weight="800" text-anchor="end" fill="#0f766e">Pₘ</text>
  <text x="58" y="189" font-size="11" font-weight="800" text-anchor="end" fill="#15803d">P꜀</text>
</svg>`,
      caption:
        "A per-unit subsidy equal to MEB shifts MPC vertically downward to MPC − Sub, lowering consumer price from Pₘ to P꜀ and expanding quantity from Qₘ to Q*, eliminating the welfare loss triangle.",
    },
    {
      title: "[HL] Perfect Competition: SR Abnormal Profit → LR Normal Profit Adjustment",
      svg: `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side by side Perfect Competition diagram showing Industry supply shifting right from S1 to S2 so market price drops from P1 to P2, eliminating firm abnormal profit until P2 equals MC equals minimum AC">
  <rect width="460" height="280" fill="#ffffff"/>
  <defs>
    <marker id="arr-pc" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155"/>
    </marker>
    <marker id="arr-pcg" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#15803d"/>
    </marker>
  </defs>
  <!-- LEFT: INDUSTRY -->
  <text x="115" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Industry (Market)</text>
  <line x1="36" y1="235" x2="205" y2="235" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-pc)"/>
  <line x1="36" y1="235" x2="36" y2="32" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-pc)"/>
  <text x="200" y="252" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">Q</text>
  <text x="28" y="42" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">P</text>
  <!-- Demand -->
  <line x1="56" y1="48" x2="188" y2="215" stroke="#0d9488" stroke-width="2.3"/>
  <text x="190" y="216" font-size="10.5" font-weight="800" fill="#0f766e">D</text>
  <!-- S1 -->
  <line x1="48" y1="185" x2="155" y2="48" stroke="#2563eb" stroke-width="2.3"/>
  <text x="157" y="52" font-size="10.5" font-weight="800" fill="#1d4ed8">S₁</text>
  <!-- S2 shifted right -->
  <line x1="88" y1="215" x2="195" y2="78" stroke="#15803d" stroke-width="2.4" stroke-dasharray="5 3"/>
  <text x="196" y="80" font-size="10.5" font-weight="800" fill="#15803d">S₂</text>
  <!-- Entry shift arrow -->
  <line x1="122" y1="100" x2="154" y2="100" stroke="#15803d" stroke-width="1.6" marker-end="url(#arr-pcg)"/>
  <text x="138" y="94" font-size="9" font-weight="700" text-anchor="middle" fill="#15803d">Entry</text>
  <!-- Price transfer lines P1 (y=108) and P2 (y=146) -->
  <line x1="36" y1="108" x2="435" y2="108" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="36" y1="146" x2="435" y2="146" stroke="#15803d" stroke-width="1.8"/>
  <circle cx="104" cy="108" r="3.6" fill="#2563eb"/>
  <circle cx="134" cy="146" r="3.6" fill="#15803d"/>
  <text x="28" y="112" font-size="10.5" font-weight="800" text-anchor="end" fill="#1d4ed8">P₁</text>
  <text x="28" y="150" font-size="10.5" font-weight="800" text-anchor="end" fill="#15803d">P₂</text>
  <line x1="104" y1="108" x2="104" y2="235" stroke="#64748b" stroke-width="1.1" stroke-dasharray="3 3"/>
  <line x1="134" y1="146" x2="134" y2="235" stroke="#64748b" stroke-width="1.1" stroke-dasharray="3 3"/>
  <text x="104" y="250" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">Q₁</text>
  <text x="134" y="250" font-size="10" font-weight="700" text-anchor="middle" fill="#15803d">Q₂</text>

  <!-- RIGHT: REPRESENTATIVE FIRM -->
  <text x="342" y="20" font-size="12" font-weight="800" text-anchor="middle" fill="#1e293b">Representative Firm</text>
  <line x1="252" y1="235" x2="440" y2="235" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-pc)"/>
  <line x1="252" y1="235" x2="252" y2="32" stroke="#334155" stroke-width="1.8" marker-end="url(#arr-pc)"/>
  <text x="436" y="252" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">q</text>
  <text x="244" y="42" font-size="10.5" font-weight="700" text-anchor="end" fill="#1e293b">$</text>
  <!-- SR abnormal profit shading between y=108 and AC at q1 (x=378, y=132) -->
  <rect x="252" y="108" width="126" height="24" fill="#dbeafe" fill-opacity="0.7" stroke="#2563eb" stroke-width="1"/>
  <text x="305" y="123" font-size="9" font-weight="800" text-anchor="middle" fill="#1e40af">SR Abnormal Profit</text>
  <!-- AC curve: min at (345,146), rises through (378,132) -->
  <path d="M 272 78 Q 310 146 345 146 Q 382 146 416 74" fill="none" stroke="#7c3aed" stroke-width="2.3"/>
  <text x="418" y="76" font-size="10.5" font-weight="800" fill="#6d28d9">AC</text>
  <!-- MC curve: passes min AC (345,146) and SR eq (378,108) -->
  <path d="M 284 196 Q 318 182 345 146 Q 368 118 398 52" fill="none" stroke="#dc2626" stroke-width="2.4"/>
  <text x="401" y="54" font-size="10.5" font-weight="800" fill="#b91c1c">MC</text>
  <!-- Labels for horizontal firm demand curves -->
  <text x="438" y="103" font-size="9.2" font-weight="800" text-anchor="end" fill="#1d4ed8">D₁=AR₁=MR₁</text>
  <text x="438" y="160" font-size="9.2" font-weight="800" text-anchor="end" fill="#15803d">D₂=AR₂=MR₂</text>
  <!-- Equilibria -->
  <circle cx="378" cy="108" r="3.8" fill="#2563eb"/>
  <circle cx="345" cy="146" r="4" fill="#15803d"/>
  <line x1="345" y1="146" x2="345" y2="235" stroke="#15803d" stroke-width="1.2" stroke-dasharray="3 3"/>
  <line x1="378" y1="108" x2="378" y2="235" stroke="#2563eb" stroke-width="1.1" stroke-dasharray="3 3"/>
  <text x="345" y="250" font-size="10" font-weight="800" text-anchor="middle" fill="#15803d">q₂ (LR)</text>
  <text x="380" y="250" font-size="10" font-weight="700" text-anchor="middle" fill="#1d4ed8">q₁</text>
  <text x="345" y="270" font-size="9.5" font-weight="700" text-anchor="middle" fill="#15803d">LR: P₂ = MC = min AC (Normal Profit)</text>
</svg>`,
      caption:
        "Free entry shifts industry supply from S₁ to S₂, pushing market price down from P₁ to P₂ until each firm's horizontal demand rests tangent to minimum AC — restoring normal profit with both allocative and productive efficiency.",
    },
  ],
  history: {
    title: "Two Rebels Who Rewrote Market Failure: Elinor Ostrom & George Akerlof",
    story:
      "For much of the twentieth century, microeconomics relied on two neat simplifications: first, that buyers and sellers share perfect information; second, that shared common resources inevitably collapse unless either privatised or policed by a central state. Two outsiders dismantled both myths.\n\nIn the late 1960s, young economist **George Akerlof** noticed something puzzling about second-hand cars: why did a brand-new car lose thousands of dollars in value the instant you drove it off the showroom floor? His answer — **adverse selection** — showed that because sellers know a car's hidden faults better than buyers, cautious buyers discount prices, pushing honest 'peach' owners out of the market until 'lemons' dominate. Three elite journals rejected his paper before the *Quarterly Journal of Economics* published it in 1970, launching modern information economics and earning Akerlof the 2001 Nobel Prize.\n\nMeanwhile, political scientist **Elinor Ostrom** travelled to Swiss Alpine villages, Spanish irrigation tribunals, Japanese mountain forests, and Indonesian water temples to test Garrett Hardin's bleak 'Tragedy of the Commons'. Instead of collapse, she discovered communities managing rivalrous, non-excludable resources sustainably for centuries through **collective self-governance** — clear local boundaries, shared rules, peer monitoring, and graduated sanctions. Her 2009 Nobel Prize forever changed how IB Economics evaluates sustainability and common pool resources.",
  },
};
