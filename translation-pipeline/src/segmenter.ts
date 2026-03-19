// Markdown-aware text segmentation
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { Segment } from "./types.ts";

/** Split markdown into translatable segments, preserving structure */
export function segment(content: string): Segment[] {
  const lines = content.split("\n");
  const segments: Segment[] = [];
  let id = 0;
  let inCodeBlock = false;
  let codeBuffer: string[] = [];
  let inFrontmatter = false;
  let frontmatterBuffer: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Frontmatter detection
    if (i === 0 && line === "---") {
      inFrontmatter = true;
      frontmatterBuffer.push(line);
      continue;
    }
    if (inFrontmatter) {
      frontmatterBuffer.push(line);
      if (line === "---") {
        inFrontmatter = false;
        segments.push({ id: id++, type: "frontmatter", source: frontmatterBuffer.join("\n"), skip: true });
        frontmatterBuffer = [];
      }
      continue;
    }

    // Code block detection
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        codeBuffer.push(line);
        segments.push({ id: id++, type: "code", source: codeBuffer.join("\n"), skip: true });
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeBuffer = [line];
      }
      continue;
    }
    if (inCodeBlock) {
      codeBuffer.push(line);
      continue;
    }

    // Skip empty lines
    if (line.trim() === "") continue;

    // Headings
    if (line.startsWith("#")) {
      segments.push({ id: id++, type: "heading", source: line, skip: false });
      continue;
    }

    // List items
    if (/^[\s]*[-*+]\s/.test(line) || /^[\s]*\d+\.\s/.test(line)) {
      segments.push({ id: id++, type: "list", source: line, skip: false });
      continue;
    }

    // Paragraphs
    segments.push({ id: id++, type: "paragraph", source: line, skip: false });
  }

  return segments;
}
