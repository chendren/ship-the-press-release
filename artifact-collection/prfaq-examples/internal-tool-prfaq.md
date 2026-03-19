# IncidentLog: Structured Post-Mortems That Write Themselves

**FOR INTERNAL USE**

IncidentLog is an internal tool that captures incident data during response and auto-generates a structured post-mortem document when the incident resolves.

**Problem**: Our post-mortems are written 3-5 days after resolution, from memory, and miss critical details. They take 4-6 hours to write and are often skipped.

### 1. Live Timeline Capture

During an incident, team members log updates via Slack command: `/incident update "Restarted database replica"`. IncidentLog timestamps and attributes each entry.

### 2. Auto-Generated Post-Mortem

When `/incident resolve` is called, IncidentLog generates a draft post-mortem from the timeline: root cause section, response timeline, action items, and severity classification.

### 3. Action Item Tracking

Action items from the post-mortem automatically create Jira tickets with priority, owner, and due date.
