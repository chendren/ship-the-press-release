import { describe, it, expect } from "vitest";
import { runLoop } from "../src/loop.ts";
import type { LoopConfig } from "../src/types.ts";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const samplePrfaq = readFileSync(join(__dirname, "fixtures/sample-prfaq.md"), "utf-8");

describe("RALPH Loop", () => {
  const config: LoopConfig = {
    maxIterations: 3,
    artifacts: [{ name: "taskflow", type: "prfaq", content: samplePrfaq, source: "test" }],
    outputDir: "/tmp/ralph-test",
    verbose: false,
  };

  it("completes a full loop", () => {
    const result = runLoop(config);
    expect(result).toBeDefined();
    expect(result.iterations).toBeGreaterThanOrEqual(1);
    expect(result.analysis.requirements.length).toBeGreaterThan(0);
    expect(result.plan.testMatrix.length).toBeGreaterThan(0);
    expect(result.plan.phases.length).toBeGreaterThan(0);
    expect(result.output.files.length).toBeGreaterThan(0);
    expect(result.duration).toBeGreaterThan(0);
  });

  it("extracts explicit requirements from PR/FAQ", () => {
    const result = runLoop(config);
    const explicit = result.analysis.requirements.filter(r => r.kind === "explicit");
    expect(explicit.length).toBeGreaterThanOrEqual(3); // 3 numbered capabilities
  });

  it("generates test matrix from requirements", () => {
    const result = runLoop(config);
    expect(result.plan.testMatrix.length).toBeGreaterThan(0);
    for (const test of result.plan.testMatrix) {
      expect(test.id).toBeDefined();
      expect(test.requirementId).toBeDefined();
      expect(["P0", "P1", "P2"]).toContain(test.priority);
    }
  });

  it("generates ordered build phases", () => {
    const result = runLoop(config);
    const phases = result.plan.phases;
    expect(phases.length).toBeGreaterThan(0);
    for (let i = 1; i < phases.length; i++) {
      expect(phases[i].order).toBeGreaterThan(phases[i - 1].order);
    }
  });

  it("produces implementation scaffold", () => {
    const result = runLoop(config);
    expect(result.output.files.length).toBeGreaterThan(0);
    expect(result.output.testFiles.length).toBeGreaterThan(0);
    for (const file of result.output.files) {
      expect(file.path).toBeTruthy();
      expect(file.content).toBeTruthy();
    }
  });
});
