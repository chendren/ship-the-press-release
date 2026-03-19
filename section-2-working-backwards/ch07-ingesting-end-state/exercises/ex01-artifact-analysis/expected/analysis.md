# Analysis: QuickNote PR/FAQ

## Explicit Requirements
1. Voice-to-text transcription
2. Auto-categorization into: work, personal, idea, todo
3. Auto-tagging (separate from categorization)
4. Full-text search with <100ms response time
5. 15+ language support
6. Free tier: 100 notes/month
7. Paid tier: $9.99/month unlimited
8. iOS and Android apps
9. Web app Q3

## Implicit Requirements
1. **Audio recording infrastructure** — implied by "speak a note"
2. **User accounts and auth** — implied by "your notes" and per-user limits
3. **Cloud storage** — implied by cross-device access (iOS + Android + web)
4. **Billing system** — implied by free/paid tier split
5. **Offline support** — mobile apps typically need offline recording
6. **Search index** — <100ms search implies pre-built index, not scan-on-query

## Open Questions
1. What happens at 101 notes on the free tier? Block recording? Degrade search?
2. How long are notes stored? Forever? 1 year?
3. Can notes be edited after transcription?
4. Is the AI categorization correct enough? What's the accuracy target?
5. Privacy: Are voice recordings stored or only text?

## Contradictions
1. "50 notes a day" but free tier is 100/month — that's 2 days of use. Is the free tier viable?
