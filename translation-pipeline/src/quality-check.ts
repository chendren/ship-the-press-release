// Post-translation quality validation
// Copyright 2026 Chad Hendren. All Rights Reserved.

import type { Segment, QualityIssue, Glossary } from "./types.ts";

/** Run quality checks on translated segments */
export function checkQuality(segments: Segment[], glossary?: Glossary): QualityIssue[] {
  const issues: QualityIssue[] = [];

  for (const seg of segments) {
    if (seg.skip || seg.translated === undefined) continue;

    // Check: translation is not identical to source (probably untranslated)
    if (seg.translated === seg.source && seg.type !== "code") {
      issues.push({
        segmentId: seg.id,
        severity: "warning",
        message: "Translation identical to source — may be untranslated",
        source: seg.source,
        translated: seg.translated,
      });
    }

    // Check: translation is not empty
    if (seg.translated.trim() === "") {
      issues.push({
        segmentId: seg.id,
        severity: "error",
        message: "Translation is empty",
        source: seg.source,
        translated: seg.translated,
      });
    }

    // Check: markdown formatting preserved
    const sourceHeadingLevel = seg.source.match(/^(#+)/)?.[1].length ?? 0;
    const translatedHeadingLevel = seg.translated.match(/^(#+)/)?.[1].length ?? 0;
    if (sourceHeadingLevel > 0 && sourceHeadingLevel !== translatedHeadingLevel) {
      issues.push({
        segmentId: seg.id,
        severity: "error",
        message: `Heading level changed: H${sourceHeadingLevel} → H${translatedHeadingLevel}`,
        source: seg.source,
        translated: seg.translated,
      });
    }

    // Check: links preserved
    const sourceLinks = seg.source.match(/\[.*?\]\(.*?\)/g) ?? [];
    const translatedLinks = seg.translated.match(/\[.*?\]\(.*?\)/g) ?? [];
    if (sourceLinks.length !== translatedLinks.length) {
      issues.push({
        segmentId: seg.id,
        severity: "error",
        message: `Link count mismatch: ${sourceLinks.length} → ${translatedLinks.length}`,
        source: seg.source,
        translated: seg.translated,
      });
    }

    // Check: protected terms not translated
    if (glossary) {
      const protectedTerms = glossary.entries.filter(e => e.doNotTranslate).map(e => e.en);
      for (const term of protectedTerms) {
        if (seg.source.includes(term) && !seg.translated.includes(term)) {
          issues.push({
            segmentId: seg.id,
            severity: "warning",
            message: `Protected term "${term}" was translated — should be kept in English`,
            source: seg.source,
            translated: seg.translated,
          });
        }
      }
    }
  }

  return issues;
}
