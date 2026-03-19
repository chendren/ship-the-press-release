// RALPH Loop — Shared Types
// Copyright 2026 Chad Hendren. All Rights Reserved.

/** A raw input artifact (PR/FAQ, wireframe description, sample output, etc.) */
export interface Artifact {
  name: string;
  type: "prfaq" | "wireframe" | "sample-output" | "dialog" | "specification" | "other";
  content: string;
  source: string;
}

/** A requirement extracted from artifact analysis */
export interface Requirement {
  id: string;
  description: string;
  kind: "explicit" | "implicit";
  source: string;
  testable: boolean;
  priority: "P0" | "P1" | "P2";
}

/** An open question surfaced during analysis */
export interface OpenQuestion {
  question: string;
  source: string;
  proposedDefault: string;
  resolved: boolean;
}

/** A single test case in the test matrix */
export interface TestCase {
  id: string;
  category: "unit" | "integration" | "edge" | "failure";
  description: string;
  input: string;
  expectedOutput: string;
  priority: "P0" | "P1" | "P2";
  requirementId: string;
}

/** A build phase with ordered tasks */
export interface BuildPhase {
  name: string;
  order: number;
  tasks: string[];
  validation: string;
  dependsOn: string[];
}

/** The build plan produced by the Layout phase */
export interface BuildPlan {
  components: Array<{ name: string; responsibility: string; technology: string }>;
  phases: BuildPhase[];
  testMatrix: TestCase[];
  openQuestions: OpenQuestion[];
}

/** Analysis output from the Analyze phase */
export interface AnalysisResult {
  requirements: Requirement[];
  openQuestions: OpenQuestion[];
  contradictions: Array<{ description: string; resolution: string }>;
  technicalImplications: Array<{ requirement: string; implication: string; complexity: "low" | "medium" | "high" }>;
}

/** Output from the Produce phase */
export interface ProduceResult {
  files: Array<{ path: string; content: string }>;
  testFiles: Array<{ path: string; content: string }>;
}

/** Output from the Harmonize phase */
export interface HarmonizeResult {
  passed: boolean;
  totalTests: number;
  passedTests: number;
  failedTests: number;
  failures: Array<{ testId: string; reason: string }>;
  iteration: number;
}

/** Configuration for a RALPH Loop run */
export interface LoopConfig {
  maxIterations: number;
  artifacts: Artifact[];
  outputDir: string;
  verbose: boolean;
}

/** Result of a complete RALPH Loop execution */
export interface LoopResult {
  success: boolean;
  iterations: number;
  analysis: AnalysisResult;
  plan: BuildPlan;
  output: ProduceResult;
  harmony: HarmonizeResult;
  duration: number;
}
