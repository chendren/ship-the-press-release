import { describe, it, expect } from "vitest";
import { slugify, truncate, wordCount, capitalize } from "../../starter.ts";

describe("slugify", () => {
  it("converts spaces to hyphens", () => expect(slugify("Hello World")).toBe("hello-world"));
  it("lowercases", () => expect(slugify("UPPER CASE")).toBe("upper-case"));
  it("handles empty string", () => expect(slugify("")).toBe(""));
});

describe("truncate", () => {
  it("returns short strings unchanged", () => expect(truncate("hi", 10)).toBe("hi"));
  it("truncates long strings with ...", () => expect(truncate("hello world", 8)).toBe("hello..."));
});

describe("wordCount", () => {
  it("counts words", () => expect(wordCount("hello world")).toBe(2));
  it("handles empty string", () => expect(wordCount("")).toBe(0));
});

describe("capitalize", () => {
  it("capitalizes each word", () => expect(capitalize("hello world")).toBe("Hello World"));
  it("handles empty string", () => expect(capitalize("")).toBe(""));
});
