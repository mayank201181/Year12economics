// ---------------------------------------------------------------------------
// 60-second Fluency Sprint: quick-fire IB Economics recall across Units 1–4
// and HL Paper 3 quantitative modelling (opportunity cost, PED/YED/PES,
// surplus/DWL, real GDP/CPI, multiplier k, comparative advantage, tariffs & FX).
//
// Pure (no React, no registry import) so it can be unit-tested directly by
// Node: callers pass in the drills (ALL_DRILLS in the app).
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./drills/types.ts";
import type { AnswerSpec, IBLevel, Strand, Trap } from "./types.ts";
import { displayAnswer } from "./answerCheck.ts";
import { TOPIC_META } from "./topics/meta.ts";

export type SprintMode = "u1" | "u2" | "u3" | "u4" | "p3" | "mixed";
/** A mode tied to one strand (everything except "mixed"). */
export type SprintStrandMode = Exclude<SprintMode, "mixed">;

export const SPRINT_MODES: readonly SprintMode[] = ["u1", "u2", "u3", "u4", "p3", "mixed"];

/** Which strand each mode draws from. */
export const SPRINT_MODE_STRAND: Record<SprintStrandMode, Strand> = {
  u1: "Unit 1: Intro to Economics",
  u2: "Unit 2: Microeconomics",
  u3: "Unit 3: Macroeconomics",
  u4: "Unit 4: The Global Economy",
  p3: "HL Paper 3: Policy & Modelling",
};

/** Length of a timed sprint. */
export const SPRINT_SECONDS = 60;

/** Highest drill level used (1 = basics, 2 = core) — sprint items must be quick. */
export const SPRINT_MAX_LEVEL = 2;
/** Generation tier used for every sprint item (friendly numbers, core facts). */
export const SPRINT_TIER = 1;

export interface SprintModeInfo {
  label: string;
  icon: string;
  description: string;
  /** Two sample prompts (plain text). */
  example: string;
}

export const SPRINT_MODE_INFO: Record<SprintMode, SprintModeInfo> = {
  u1: {
    label: "Unit 1: Intro & PPC",
    icon: "🧭",
    description: "Opportunity cost on PPCs, leakages vs injections, positive vs normative & 9 Key Concepts.",
    example: "Opportunity cost of 1 unit of X on a linear PPC · Is S + T + M > I + G + X expanding or contracting?",
  },
  u2: {
    label: "Unit 2: Microeconomics",
    icon: "⚖️",
    description: "PED, YED, PES, consumer/producer surplus, tax revenue, DWL & externality/market-power rules.",
    example: "PED when price rises 10% and Q_d falls 25% · Consumer surplus triangle area",
  },
  u3: {
    label: "Unit 3: Macroeconomics",
    icon: "🏛️",
    description: "GDP expenditure, real GDP deflator, CPI inflation %, unemployment rate & Keynesian multiplier [HL].",
    example: "Inflation rate from CPI 120 → 126 · Multiplier k when MPC = 0.8",
  },
  u4: {
    label: "Unit 4: Global Economy",
    icon: "🌍",
    description: "Exchange-rate conversions, BoP balancing, comparative advantage [HL] & tariff revenue/DWL [HL].",
    example: "Convert US$200 at US$1 = S$1.35 · Current Account balance from X, M & income flows",
  },
  p3: {
    label: "HL Paper 3 Quant",
    icon: "🧮",
    description: "Rapid HL Paper 3 calculations: linear equilibrium, progressive tax, multiplier & tariff welfare [HL].",
    example: "Solve Q_d = 100 − 2P and Q_s = 20 + 2P · Average vs marginal tax rate",
  },
  mixed: {
    label: "Full IB Economics Mixed",
    icon: "🎲",
    description: "Units 1–4 & HL quantitative modelling interleaved — fast calculation & concept recall in 60s.",
    example: "PED, real GDP, CPI, exchange rates, multiplier & surplus triangles in 60s",
  },
};

export interface SprintItem {
  /** Identity for repeat-avoidance, retries and the missed list. */
  key: string;
  /** Question shown to the learner (markdown-lite + {{maths}}). */
  prompt: string;
  /** How the answer is checked (lib/answerCheck.ts). */
  answer: AnswerSpec;
  /** The correct answer as display text (may contain {{maths}}). */
  answerText: string;
  /** Predictable wrong answers with targeted feedback (from the drill). */
  traps?: Trap[];
  /** Optional inline SVG from the drill. */
  diagram?: string;
  drillId: string;
  topicId: string;
}

export function isSprintMode(v: unknown): v is SprintMode {
  return typeof v === "string" && (SPRINT_MODES as readonly string[]).includes(v);
}

/** Personal-best key in ProgressDoc.bests. */
export function sprintBestKey(mode: SprintMode): string {
  return `sprint:${mode}`;
}

/** Idempotency key for the once-per-mode-per-day star award. */
export function sprintAwardKey(mode: SprintMode, day: string): string {
  return `sprint:${day}:${mode}`;
}

/** Stars for a sprint score: 1 per 5 correct, at most 5. */
export function sprintStars(score: number): number {
  return Math.max(0, Math.min(5, Math.floor(score / 5)));
}

const STRAND_OF_TOPIC = new Map<string, Strand>(TOPIC_META.map((t) => [t.id, t.strand]));
const LEVEL_OF_TOPIC = new Map<string, IBLevel>(TOPIC_META.map((t) => [t.id, t.level]));

/** The strand a topic belongs to (undefined for an unknown topic). */
export function strandOfTopic(topicId: string): Strand | undefined {
  return STRAND_OF_TOPIC.get(topicId);
}

/** The drills a mode draws from: level 1–2, in the mode's strand ("mixed": any known topic), respecting SL/HL. */
export function sprintPool(mode: SprintMode, drills: readonly Drill[], ibLevel: IBLevel = "HL"): Drill[] {
  return drills.filter((d) => {
    if (d.level > SPRINT_MAX_LEVEL) return false;
    const strand = strandOfTopic(d.topicId);
    if (!strand) return false;
    const drillLevel = d.ibLevel ?? LEVEL_OF_TOPIC.get(d.topicId) ?? "SL";
    if (ibLevel === "SL" && drillLevel === "HL") return false;
    return mode === "mixed" || strand === SPRINT_MODE_STRAND[mode];
  });
}

/** Number of drills each mode can draw from (0 = not available yet). */
export function sprintPoolSizes(drills: readonly Drill[], ibLevel: IBLevel = "HL"): Record<SprintMode, number> {
  return {
    u1: sprintPool("u1", drills, ibLevel).length,
    u2: sprintPool("u2", drills, ibLevel).length,
    u3: sprintPool("u3", drills, ibLevel).length,
    u4: sprintPool("u4", drills, ibLevel).length,
    p3: sprintPool("p3", drills, ibLevel).length,
    mixed: sprintPool("mixed", drills, ibLevel).length,
  };
}

/**
 * Draw one quick-fire item from a pool (typically sprintPool(mode, ALL_DRILLS)).
 * Avoids repeating prompts already seen in `avoid` when the pool can offer something else.
 */
export function sprintItem(pool: readonly Drill[], rng: Rng, avoid: ReadonlySet<string> = new Set()): SprintItem | null {
  if (!pool.length) return null;
  let fallback: SprintItem | null = null;
  const tries = Math.min(18, Math.max(8, pool.length * 3));
  for (let i = 0; i < tries; i++) {
    const drill = rng.pick(pool);
    try {
      const gen = drill.generate(rng, SPRINT_TIER);
      const key = `${drill.id}::${gen.prompt}`;
      const item: SprintItem = {
        key,
        prompt: gen.prompt,
        answer: gen.answer,
        answerText: displayAnswer(gen.answer),
        traps: gen.traps,
        diagram: gen.diagram,
        drillId: drill.id,
        topicId: drill.topicId,
      };
      if (!avoid.has(key)) return item;
      fallback ??= item;
    } catch {
      /* skip a broken generator rather than crashing the sprint */
    }
  }
  return fallback;
}
