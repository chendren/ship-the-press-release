// L — Layout: Generate build plan with ordered phases and test matrix
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { AnalysisResult, BuildPlan, BuildPhase, TestCase } from "../types.ts";

/** Generate a test matrix from analyzed requirements */
export function generateTestMatrix(analysis: AnalysisResult): TestCase[] {
  const tests: TestCase[] = [];
  let unitCount = 0;
  let integrationCount = 0;

  for (const req of analysis.requirements) {
    if (!req.testable) continue;

    if (req.kind === "explicit") {
      unitCount++;
      tests.push({
        id: `U${String(unitCount).padStart(2, "0")}`,
        category: "unit",
        description: `Verify: ${req.description}`,
        input: `Input for ${req.id}`,
        expectedOutput: `${req.description} is satisfied`,
        priority: req.priority,
        requirementId: req.id,
      });
    }

    if (req.kind === "implicit") {
      integrationCount++;
      tests.push({
        id: `I${String(integrationCount).padStart(2, "0")}`,
        category: "integration",
        description: `Integration: ${req.description}`,
        input: `Setup for ${req.id}`,
        expectedOutput: `${req.description} works end-to-end`,
        priority: req.priority,
        requirementId: req.id,
      });
    }
  }

  return tests;
}

/** Group requirements into build phases */
export function generateBuildPhases(analysis: AnalysisResult): BuildPhase[] {
  const p0Reqs = analysis.requirements.filter(r => r.priority === "P0");
  const p1Reqs = analysis.requirements.filter(r => r.priority === "P1");
  const p2Reqs = analysis.requirements.filter(r => r.priority === "P2");

  const phases: BuildPhase[] = [];

  if (p0Reqs.length > 0) {
    phases.push({
      name: "Foundation",
      order: 1,
      tasks: p0Reqs.map(r => r.description),
      validation: "All P0 tests pass",
      dependsOn: [],
    });
  }

  if (p1Reqs.length > 0) {
    phases.push({
      name: "Core Features",
      order: 2,
      tasks: p1Reqs.map(r => r.description),
      validation: "All P0 + P1 tests pass",
      dependsOn: ["Foundation"],
    });
  }

  if (p2Reqs.length > 0) {
    phases.push({
      name: "Polish",
      order: 3,
      tasks: p2Reqs.map(r => r.description),
      validation: "All tests pass",
      dependsOn: ["Foundation", "Core Features"],
    });
  }

  return phases;
}

/** Generate the complete build plan */
export function layout(analysis: AnalysisResult): BuildPlan {
  return {
    components: analysis.technicalImplications.map(ti => ({
      name: ti.requirement.split(" ").slice(0, 3).join("-").toLowerCase(),
      responsibility: ti.requirement,
      technology: "TypeScript + Node.js",
    })),
    phases: generateBuildPhases(analysis),
    testMatrix: generateTestMatrix(analysis),
    openQuestions: analysis.openQuestions,
  };
}
