import { describe, it, expect } from "vitest";
import { segment } from "../src/segmenter.ts";

describe("Segmenter", () => {
  it("segments headings", () => {
    const result = segment("# Title\n\nParagraph text.");
    expect(result.some(s => s.type === "heading" && s.source === "# Title")).toBe(true);
  });

  it("skips code blocks", () => {
    const result = segment("Text\n\n```typescript\nconst x = 1;\n```\n\nMore text.");
    const codeSegment = result.find(s => s.type === "code");
    expect(codeSegment).toBeDefined();
    expect(codeSegment?.skip).toBe(true);
  });

  it("skips frontmatter", () => {
    const result = segment("---\ntitle: Test\n---\n\n# Heading");
    const frontmatter = result.find(s => s.type === "frontmatter");
    expect(frontmatter).toBeDefined();
    expect(frontmatter?.skip).toBe(true);
  });

  it("identifies list items", () => {
    const result = segment("- Item one\n- Item two\n1. Numbered");
    const lists = result.filter(s => s.type === "list");
    expect(lists.length).toBe(3);
  });

  it("assigns sequential IDs", () => {
    const result = segment("# H1\n\nParagraph\n\n## H2");
    const ids = result.map(s => s.id);
    for (let i = 1; i < ids.length; i++) {
      expect(ids[i]).toBeGreaterThan(ids[i - 1]);
    }
  });
});
