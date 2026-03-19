# Translation Pipeline

Reference implementation for non-English developer support, from *Ship the Press Release* (Chapters 16-18, Appendix D).

## Architecture

```
Source Document (English)
       ↓
  [Segmenter] — Split markdown into translatable segments
       ↓
  [Glossary] — Apply technical term translations
       ↓
  [Translator] — Translate segments with glossary context
       ↓
  [Translation Memory] — Cache translations for consistency
       ↓
  [Quality Check] — Validate output quality
       ↓
Translated Document
```

## Quick Start

```bash
npm install
npm test
```

## Supported Languages

| Language | Code | Glossary | Status |
|----------|------|----------|--------|
| Chinese (Simplified) | zh-CN | Yes | Reference |
| Japanese | ja-JP | Yes | Reference |
| Spanish | es | Yes | Reference |
| Brazilian Portuguese | pt-BR | Yes | Reference |
| Korean | ko-KR | Yes | Reference |

## Book Reference

- **Chapter 16**: Semantic Maps, Vocabulary Alignment
- **Chapter 17**: Models Trained in Non-English Languages
- **Chapter 18**: Translation Pipelines and Global Best Practices
- **Appendix D**: Translation Pipeline Implementation

Copyright 2026 Chad Hendren. All Rights Reserved.
