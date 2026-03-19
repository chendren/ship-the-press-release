import { describe, it, expect } from "vitest";
import { extractExplicitRequirements, surfaceImplicitRequirements, analyze } from "../../src/phases/analyze.ts";
import type { Artifact } from "../../src/types.ts";

const testArtifact: Artifact = {
  name: "test",
  type: "prfaq",
  content: `# Test Product

## Press Release

### 1. Fast Search

Search across all documents in under 100ms.

### 2. SSO Integration

Supports SAML and OIDC for enterprise customers.

- Must support encrypted at rest storage
- Available today at example.com
- 14-day free trial included
`,
  source: "test-file.md",
};

describe("Analyze phase", () => {
  it("extracts explicit requirements from numbered capabilities", () => {
    const reqs = extractExplicitRequirements(testArtifact);
    expect(reqs.length).toBeGreaterThanOrEqual(2);
    expect(reqs[0].kind).toBe("explicit");
    expect(reqs[0].priority).toBe("P0");
  });

  it("surfaces implicit requirements", () => {
    const implicit = surfaceImplicitRequirements(testArtifact);
    expect(implicit.length).toBeGreaterThan(0);
    expect(implicit.every(r => r.kind === "implicit")).toBe(true);
    const descriptions = implicit.map(r => r.description);
    expect(descriptions.some(d => d.includes("Encryption"))).toBe(true);
    expect(descriptions.some(d => d.includes("Trial"))).toBe(true);
  });

  it("runs full analysis on multiple artifacts", () => {
    const result = analyze([testArtifact]);
    expect(result.requirements.length).toBeGreaterThan(0);
    expect(result.technicalImplications.length).toBeGreaterThan(0);
  });
});
