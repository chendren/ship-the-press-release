# Expected Outcome

A specification that resolves the ambiguities in the requirements:

## Ambiguities You Should Have Caught

1. **Duplicate handling**: "rename or skip" — your spec must choose one
2. **File type mapping**: What counts as "image" vs "document"? Be specific
3. **10,000 files**: Performance requirement implied but not stated
4. **"Without losing anything"**: No deletion — move only, with dry-run option
5. **Symlinks**: Don't follow, but what to do with them? Skip? Move to "links" folder?
6. **Idempotency**: Already-organized files should not be re-organized

## Contradictions

- PM says "whatever makes sense" for duplicates; Sarah says "don't lose anything" — these constrain each other. Your spec should note: duplicates are renamed, never overwritten.
