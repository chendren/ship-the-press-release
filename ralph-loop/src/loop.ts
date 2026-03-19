// RALPH Loop Orchestrator
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { LoopConfig, LoopResult } from "./types.ts";
import { readArtifacts } from "./phases/read.ts";
import { analyze } from "./phases/analyze.ts";
import { layout } from "./phases/layout.ts";
import { produce } from "./phases/produce.ts";
import { harmonize } from "./phases/harmonize.ts";

/**
 * Execute a complete RALPH Loop.
 *
 * R — Read artifacts and parse into structured data
 * A — Analyze requirements, surface assumptions, identify gaps
 * L — Layout the build plan with ordered phases and test matrix
 * P — Produce code that satisfies the test matrix
 * H — Harmonize: validate output, iterate until green or max iterations
 */
export function runLoop(config: LoopConfig): LoopResult {
  const start = Date.now();

  // R — Read
  const artifacts = readArtifacts(
    config.artifacts.map(a => ({ name: a.name, content: a.content, source: a.source }))
  );

  if (config.verbose) {
    console.log(`[R] Read ${artifacts.length} artifact(s)`);
  }

  // A — Analyze
  const analysis = analyze(artifacts);

  if (config.verbose) {
    console.log(`[A] Found ${analysis.requirements.length} requirements, ${analysis.openQuestions.length} open questions`);
  }

  // L — Layout
  const plan = layout(analysis);

  if (config.verbose) {
    console.log(`[L] Generated ${plan.phases.length} phases, ${plan.testMatrix.length} tests`);
  }

  // P + H — Produce and Harmonize (iterate)
  let output = produce(plan);
  let harmony = harmonize(plan, output, 1);
  let iteration = 1;

  while (!harmony.passed && iteration < config.maxIterations) {
    iteration++;
    if (config.verbose) {
      console.log(`[H] Iteration ${iteration}: ${harmony.failedTests} failures, retrying...`);
    }
    output = produce(plan);
    harmony = harmonize(plan, output, iteration);
  }

  if (config.verbose) {
    const status = harmony.passed ? "PASSED" : "MAX ITERATIONS REACHED";
    console.log(`[H] ${status} after ${iteration} iteration(s)`);
  }

  return {
    success: harmony.passed,
    iterations: iteration,
    analysis,
    plan,
    output,
    harmony,
    duration: Date.now() - start,
  };
}
