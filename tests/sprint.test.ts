import test from "node:test";
import assert from "node:assert/strict";
import {
  SPRINT_MODES,
  SPRINT_MODE_INFO,
  SPRINT_MODE_STRAND,
  isSprintMode,
  sprintAwardKey,
  sprintBestKey,
  sprintItem,
  sprintPool,
  sprintPoolSizes,
  sprintStars,
} from "../lib/sprint.ts";
import { makeRng } from "../lib/drills/rng.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { Drill } from "../lib/drills/types.ts";

function bankDrill(topicId: string, level: 1 | 2 | 3, slug = "terms", ibLevel?: "SL" | "HL"): Drill {
  const bank = [
    ["Good with negative income elasticity of demand (YED < 0)?", "inferior"],
    ["Non-rivalrous and non-excludable good?", "public good"],
    ["Policy using central bank interest rates?", "monetary"],
    ["Profit-maximizing output condition?", "MC = MR"],
  ] as const;
  return {
    id: `${topicId}.${slug}`,
    topicId,
    title: "Fake Economics drill",
    level,
    ibLevel,
    generate(rng, tier) {
      assert.equal(tier, 1, "sprints always generate at tier 1");
      const [prompt, term] = rng.pick(bank);
      return { prompt: `${prompt} (${topicId})`, answer: { type: "text", accept: [term] }, solution: [term] };
    },
  };
}

function numberDrill(topicId: string): Drill {
  return {
    id: `${topicId}.multiplier`,
    topicId,
    title: "Fake multiplier drill",
    level: 1,
    generate(rng) {
      const k = rng.pick([2, 4, 5]);
      const g = rng.int(10, 50);
      return {
        prompt: `If the Keynesian multiplier k = ${k} and government spending rises by $${g}m, find ΔReal GDP ($m).`,
        answer: { type: "number", value: k * g, tolerance: 0 },
        solution: [`ΔY = k × ΔG = ${k} × ${g} = $${k * g}m`],
      };
    },
  };
}

const firstTopic = (strand: string) => TOPIC_META.find((t) => t.strand === strand)!.id;

test("modes are IB Economics Units 1–4, HL P3, plus mixed, with info and storage keys", () => {
  assert.deepEqual([...SPRINT_MODES], ["u1", "u2", "u3", "u4", "p3", "mixed"]);
  for (const m of SPRINT_MODES) {
    assert.ok(isSprintMode(m));
    assert.ok(SPRINT_MODE_INFO[m].label && SPRINT_MODE_INFO[m].icon);
    assert.equal(sprintBestKey(m), `sprint:${m}`);
    assert.equal(sprintAwardKey(m, "2026-01-02"), `sprint:2026-01-02:${m}`);
  }
  for (const strand of Object.values(SPRINT_MODE_STRAND)) assert.ok(TOPIC_META.some((t) => t.strand === strand), strand);
  assert.ok(!isSprintMode("paper1"));
  assert.ok(!isSprintMode(undefined));
});

test("stars: 1 per 5 correct, capped at 5", () => {
  assert.deepEqual([0, 4, 5, 12, 25, 99].map(sprintStars), [0, 0, 1, 2, 5, 5]);
});

test("no drills: every pool is empty and sprintItem returns null", () => {
  const sizes = sprintPoolSizes([]);
  for (const m of SPRINT_MODES) assert.equal(sizes[m], 0);
  assert.equal(sprintItem([], makeRng(1)), null);
});

test("pools: strand modes take their strand's level 1–2 drills; SL hides HL drills", () => {
  const tU1 = firstTopic("Unit 1: Intro to Economics");
  const tU2 = firstTopic("Unit 2: Microeconomics");
  const drills = [
    bankDrill(tU1, 1, "sl", "SL"),
    bankDrill(tU1, 2, "hl", "HL"),
    bankDrill(tU1, 3, "hard", "SL"),
    bankDrill(tU2, 2, "b", "SL"),
    bankDrill("not-a-topic", 1),
  ];
  assert.deepEqual(sprintPool("u1", drills, "HL").map((d) => d.id), [`${tU1}.sl`, `${tU1}.hl`]);
  assert.deepEqual(sprintPool("u1", drills, "SL").map((d) => d.id), [`${tU1}.sl`]);
  assert.deepEqual(sprintPool("u2", drills, "HL").map((d) => d.id), [`${tU2}.b`]);
  assert.deepEqual(sprintPool("mixed", drills, "SL").map((d) => d.id).sort(), [`${tU1}.sl`, `${tU2}.b`].sort());
});

test("items carry a checkable answer, preserve tolerance, and display the correct answer", () => {
  const tU1 = firstTopic("Unit 1: Intro to Economics");
  const pool = [numberDrill(tU1), bankDrill(tU1, 2)];
  const rng = makeRng(42);
  const seen = new Set<string>();
  for (let i = 0; i < 20; i++) {
    const it = sprintItem(pool, rng, seen);
    assert.ok(it);
    seen.add(it.key);
    assert.ok(it.prompt.length > 0);
    assert.equal(checkAnswer(it.answer, it.answerText).status, "correct", it.answerText);
  }
});

test("a drill that throws is skipped, not fatal", () => {
  const tU1 = firstTopic("Unit 1: Intro to Economics");
  const broken: Drill = {
    id: `${tU1}.broken`,
    topicId: tU1,
    title: "Broken",
    level: 1,
    generate() {
      throw new Error("boom");
    },
  };
  const it = sprintItem([broken, numberDrill(tU1)], makeRng(7));
  assert.ok(it && it.drillId === `${tU1}.multiplier`);
  assert.equal(sprintItem([broken], makeRng(7)), null);
});
