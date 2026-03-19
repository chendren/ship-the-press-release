# AcmeClaw FAQ

## Customer FAQ

### Q: I already run OpenClaw on my laptop. Why would I pay for AcmeClaw?

A: If you are a solo developer running OpenClaw for personal automation, you may not need AcmeClaw. The value is for teams. The moment a second person needs to use the same agent, or the agent needs to run while nobody is watching, or the organization needs to know what the agent did and when, self-hosted OpenClaw requires infrastructure work that is not the developer's core job. AcmeClaw eliminates that work. You also get sandboxed execution that protects against the class of vulnerabilities that CVE-2026-25253 demonstrated: even if a skill contains a prompt injection, the sandbox limits the blast radius to the agent's explicitly granted permissions.

### Q: Can I use my own OpenClaw skills, or am I limited to the AcmeClaw registry?

A: Both. You can deploy any custom skill to your AcmeClaw workspace. Custom skills that have not been through the AcmeClaw vetting process are flagged as "unvetted" in the dashboard and run with tighter sandbox restrictions by default. Team administrators can promote custom skills to "trusted" status after internal review.

### Q: Which LLM providers does AcmeClaw support?

A: AcmeClaw is model-agnostic. You bring your own API keys for Anthropic Claude, OpenAI GPT, Google Gemini, DeepSeek, or any OpenAI-compatible provider. AcmeClaw does not add latency to model API calls; the managed Gateway proxies requests directly to the provider endpoint.

### Q: How does AcmeClaw handle data privacy?

A: Agent memory, conversation history, and workspace files are stored in your AcmeClaw tenant, encrypted at rest (AES-256) and in transit (TLS 1.3). Data residency options are available for US, EU, and APAC regions on the enterprise plan. AcmeClaw does not read, train on, or share your agent data.

### Q: What happens if AcmeClaw goes down?

A: AcmeClaw's Gateway is deployed across multiple availability zones with automatic failover. Agent sessions persist across Gateway restarts. If a Gateway node fails, active sessions are migrated to a healthy node within 30 seconds. The SLA on the enterprise plan guarantees 99.9% monthly uptime.

### Q: Can I export my data and leave if I want to?

A: Yes. AcmeClaw stores agent configuration, skills, memory, and workspace files in the same Markdown and YAML format that self-hosted OpenClaw uses. You can export your entire tenant at any time through the dashboard or the CLI. The export produces a directory structure that is directly compatible with self-hosted OpenClaw. No lock-in.

### Q: How does pricing work for multi-agent setups?

A: Each agent counts as one unit against your plan limit. A Starter plan ($49/month) includes three agents. A Team plan ($149/month) includes ten agents with multi-agent routing and shared skill libraries. Enterprise plans include custom agent limits negotiated per contract.

## Internal FAQ

*These questions are included in the book as examples of the hard internal questions every PR/FAQ should address. See Chapter 6.*
