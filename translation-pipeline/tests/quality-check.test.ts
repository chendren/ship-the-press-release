import { describe, it, expect } from "vitest";
import { checkQuality } from "../src/quality-check.ts";
import type { Segment } from "../src/types.ts";

describe("Quality Check", () => {
  it("warns on identical source and translation", () => {
    const segments: Segment[] = [
      { id: 0, type: "paragraph", source: "Hello world", translated: "Hello world", skip: false },
    ];
    const issues = checkQuality(segments);
    expect(issues.length).toBe(1);
    expect(issues[0].severity).toBe("warning");
  });

  it("errors on empty translation", () => {
    const segments: Segment[] = [
      { id: 0, type: "paragraph", source: "Hello", translated: "", skip: false },
    ];
    const issues = checkQuality(segments);
    expect(issues.some(i => i.severity === "error")).toBe(true);
  });

  it("errors on heading level changes", () => {
    const segments: Segment[] = [
      { id: 0, type: "heading", source: "## Section", translated: "### 部分", skip: false },
    ];
    const issues = checkQuality(segments);
    expect(issues.some(i => i.message.includes("Heading level"))).toBe(true);
  });

  it("passes clean translations", () => {
    const segments: Segment[] = [
      { id: 0, type: "paragraph", source: "Hello world", translated: "你好世界", skip: false },
      { id: 1, type: "heading", source: "## Title", translated: "## 标题", skip: false },
    ];
    const issues = checkQuality(segments);
    expect(issues.length).toBe(0);
  });

  it("skips code segments", () => {
    const segments: Segment[] = [
      { id: 0, type: "code", source: "const x = 1;", skip: true },
    ];
    const issues = checkQuality(segments);
    expect(issues.length).toBe(0);
  });
});
