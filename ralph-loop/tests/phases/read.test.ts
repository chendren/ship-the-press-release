import { describe, it, expect } from "vitest";
import { parsePrfaq, detectArtifactType, extractHeadings } from "../../src/phases/read.ts";

describe("Read phase", () => {
  it("parses PR/FAQ into sections", () => {
    const content = "# My Product\n\n## Press Release\n\nContent here.\n\n## FAQ\n\nQ: Question?\nA: Answer.";
    const result = parsePrfaq(content);
    expect(result.title).toBe("My Product");
    expect(result.sections.has("Press Release")).toBe(true);
    expect(result.sections.has("FAQ")).toBe(true);
  });

  it("detects artifact types", () => {
    expect(detectArtifactType("FOR IMMEDIATE RELEASE")).toBe("prfaq");
    expect(detectArtifactType("This wireframe shows")).toBe("wireframe");
    expect(detectArtifactType("The specification requires")).toBe("specification");
    expect(detectArtifactType("Hello world")).toBe("other");
  });

  it("extracts headings from markdown", () => {
    const content = "# Title\n\nText\n\n## Section 1\n\nMore text\n\n### Subsection";
    const headings = extractHeadings(content);
    expect(headings).toEqual(["Title", "Section 1", "Subsection"]);
  });
});
