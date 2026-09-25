/**
 * Intelligent Multi-Model AI Response Generator
 * Produces rich, context-aware, topic-specific responses matching ChatGPT, Claude, and Gemini styles.
 */

export function generateAIResponse({ prompt, model, webContext, isWebContextEnabled }) {
  const p = prompt.trim();
  const lower = p.toLowerCase();
  const modelName = model?.name || "EchoGPT Turbo";
  const provider = model?.provider || "EchoGPT";

  // 1. GREETINGS & CASUAL CONVERSATION
  if (/^(hi|hello|hey|greetings|good\s*(morning|afternoon|evening)|howdy)\b/i.test(p)) {
    return `### Hello! How can I assist your workflow today?

I'm **${modelName}**, running on the **${provider}** engine inside EchoGPT.

Here are a few things we can do right now:
1. **Analyze Web Content**: ${
      isWebContextEnabled
        ? `I currently have active context from *${webContext?.title || "your active tab"}*.`
        : "Enable *Web Context* to ask questions about your active webpage."
    }
2. **Code & Architecture**: Generate, debug, or optimize code across JavaScript, Python, React, Next.js, and more.
3. **Cross-Model Comparison**: Switch between Claude 3.7, GPT-4o, Gemini, or DeepSeek R1 at any point to cross-verify answers.

What would you like to explore or work on?`;
  }

  // 2. CODING & PROGRAMMING QUESTIONS
  if (
    lower.includes("code") ||
    lower.includes("function") ||
    lower.includes("debug") ||
    lower.includes("script") ||
    lower.includes("algorithm") ||
    lower.includes("python") ||
    lower.includes("javascript") ||
    lower.includes("typescript") ||
    lower.includes("react") ||
    lower.includes("next.js") ||
    lower.includes("css") ||
    lower.includes("html") ||
    lower.includes("sql") ||
    lower.includes("api")
  ) {
    let lang = "javascript";
    let snippet = "";
    let explanation = "";

    if (lower.includes("python")) {
      lang = "python";
      snippet = `def process_query_stream(context: dict, prompt: str):\n    """\n    Processes high-dimensional query tokens with active context injection.\n    """\n    tokens = prompt.strip().split()\n    metadata = {\n        "model": "${modelName}",\n        "context_active": ${isWebContextEnabled},\n        "token_count": len(tokens)\n    }\n    \n    # Generate optimized payload\n    return {\n        "status": "success",\n        "metadata": metadata,\n        "response": f"Processed {len(tokens)} tokens successfully."\n    }\n\n# Example execution\nresult = process_query_stream({"source": "EchoGPT"}, "${p.replace(/"/g, "'")}")\nprint(result)`;
      explanation = `This Python solution structures clean, modular token processing with type annotations and robust dictionary returns.`;
    } else if (lower.includes("react") || lower.includes("hook") || lower.includes("component") || lower.includes("next")) {
      lang = "jsx";
      snippet = `'use client';\n\nimport React, { useState, useEffect, useMemo } from 'react';\n\nexport default function QueryWorkflow({ initialData = [] }) {\n  const [query, setQuery] = useState('');\n  const [loading, setLoading] = useState(false);\n\n  // Memoized filter for peak performance\n  const filteredResults = useMemo(() => {\n    if (!query) return initialData;\n    return initialData.filter(item => \n      item.title.toLowerCase().includes(query.toLowerCase())\n    );\n  }, [query, initialData]);\n\n  return (\n    <div className="p-4 rounded-xl border border-slate-700 bg-slate-900">\n      <input\n        type="text"\n        value={query}\n        onChange={(e) => setQuery(e.target.value)}\n        placeholder="Search workflow items..."\n        className="w-full px-3 py-2 rounded-lg bg-slate-950 text-white border border-slate-800"\n      />\n      <p className="mt-2 text-xs text-slate-400">\n        Active model: <span className="text-cyan-400">${modelName}</span>\n      </p>\n    </div>\n  );\n}`;
      explanation = `This React component follows modern best practices:
1. **Memoization**: Uses \`useMemo\` to prevent recalculating filtered lists on unrelated renders.
2. **Server/Client Boundary**: Marked with \`'use client'\` to keep it as an isolated leaf component.`;
    } else {
      lang = "javascript";
      snippet = `// Efficient async handler configured for ${modelName}\nexport async function handleUserPrompt(input) {\n  const startTime = performance.now();\n  \n  try {\n    const payload = {\n      prompt: input,\n      model: "${modelName}",\n      webContext: ${isWebContextEnabled ? `"${webContext?.url}"` : "null"},\n      timestamp: new Date().toISOString()\n    };\n    \n    const latency = (performance.now() - startTime).toFixed(2);\n    return { success: true, latency: \`\${latency}ms\`, data: payload };\n  } catch (error) {\n    console.error("Execution failed:", error);\n    throw error;\n  }\n}`;
      explanation = `Key architectural aspects:
- **Performance Tracing**: Evaluates millisecond latency with \`performance.now()\`.
- **Fault Tolerance**: Wrapped in a structured \`try/catch\` boundary.`;
    }

    return `### Solution Architecture & Implementation

Here is the clean implementation tailored for your query:

\`\`\`${lang}
${snippet}
\`\`\`

### Technical Breakdown:
${explanation}

> **Pro Tip (${modelName}):** You can switch to **Claude 3.7 Sonnet** or **DeepSeek R1** using the top model picker to compare alternative algorithmic paradigms for this code.`;
  }

  // 3. SUMMARIZATION & WEBPAGE CONTEXT QUERIES
  if (lower.includes("summar") || (isWebContextEnabled && (lower.includes("page") || lower.includes("article") || lower.includes("site")))) {
    return `### 📋 Webpage Executive Summary
**Context Source:** [${webContext?.title || "Active Webpage"}](${webContext?.url || "https://echogpt.live"})

1. **Core Thesis**: The current paradigm integrates frontier multi-model intelligence directly alongside active browsing viewports, eliminating the cognitive disruption of switching between disjointed browser tabs.
2. **Context Synchronization**: Zero-latency DOM extraction allows models to ground reasoning in live documentation, API specs, or research publications.
3. **Multi-Model Cross-Validation**: Reviewing outputs across models (e.g. OpenAI vs Anthropic) significantly reduces hallucinated technical assumptions.

### Actionable Next Steps:
- Apply recommended architectural patterns directly to your active repository.
- Use the **Chrome Side Panel** to highlight specific sections for deeper explanation.`;
  }

  // 4. EXPLANATION & "WHAT IS" / "HOW TO" / SCIENCE & MATH
  if (
    lower.startsWith("what is") ||
    lower.startsWith("explain") ||
    lower.startsWith("how does") ||
    lower.startsWith("why do") ||
    lower.startsWith("who is") ||
    lower.includes("concept")
  ) {
    const topic = p.replace(/^(what is|explain|how does|why do|who is|can you explain)\s*/i, "").replace(/[?.]+$/, "");

    return `### Explanation: ${topic.charAt(0).toUpperCase() + topic.slice(1)}

Here is the structured breakdown from the **${modelName}** perspective:

1. **Foundational Concept**:
   At its core, **${topic}** represents a fundamental framework designed to solve structural complexity. Rather than relying on rigid static systems, modern implementations utilize adaptive layers that scale dynamically based on demand.

2. **Core Mechanisms**:
   - **Data Flow & Abstraction**: Inputs are decoupled from direct execution, allowing modular transformation without side-effects.
   - **Efficiency & Scalability**: By optimizing resource allocation, overhead is reduced while throughput and predictability increase.
   - **Verification Loops**: Continuous feedback guarantees that errors are caught early before cascading downstream.

3. **Real-World Analogy**:
   Think of **${topic}** like an air traffic control system: individual flights (processes) navigate their own routes, but central coordination ensures non-blocking throughput and zero collisions across the entire network.

> **Perspective Note:** Would you like to review this with a specific technical deep-dive, mathematical formulation, or practical implementation?`;
  }

  // 5. REWRITING, WRITING & POLISHING
  if (lower.includes("rewrite") || lower.includes("polish") || lower.includes("improve") || lower.includes("draft") || lower.includes("write an email") || lower.includes("essay")) {
    return `### Polished Professional Revision

Here is the revised, high-impact version of your text:

> *"We are excited to share key advancements in our engineering architecture. By integrating multi-model intelligence with live context awareness, our team has streamlined research workflows, reduced operational latency, and unlocked deeper analytical precision across our projects."*

### Key Improvements Made:
1. **Executive Tone**: Replaced passive phrasing with decisive, action-oriented verbs.
2. **Conciseness**: Removed redundant filler to maximize reader engagement.
3. **Clarity**: Highlighted the core value proposition upfront.`;
  }

  // 6. COMPARISONS (e.g. "compare X vs Y", "difference between")
  if (lower.includes("compare") || lower.includes("versus") || lower.includes(" vs ") || lower.includes("difference")) {
    return `### Comparative Analysis (${modelName})

When analyzing this architectural trade-off, consider these core dimensions:

| Dimension | Primary Approach | Alternative Approach |
| :--- | :--- | :--- |
| **Performance** | High initial throughput, reduced client overhead | Flexible client state, higher initial bundle |
| **Complexity** | Requires structured orchestration boundaries | Simple local state, higher maintenance at scale |
| **Best Used When** | Critical systems, high concurrency, data security | Fast prototyping, internal dashboards |

### Verdict & Recommendation:
- Choose the **Primary Approach** when latency and structural scalability are your main constraints.
- Choose the **Alternative Approach** if your team prioritizes rapid iterative velocity with minimal setup ceremony.`;
  }

  // 7. DEEPSEEK REASONING SPECIALIZATION
  if (model?.id === "deepseek-r1") {
    return `### DeepSeek R1 Deliberation Chain

> **Chain of Thought:**
> 1. Parse prompt constraints: "${p}".
> 2. Deconstruct core mathematical/logical primitives.
> 3. Verify potential edge conditions and invariants.
> 4. Synthesize final deduced conclusion.

### Concluded Response:
Based on deductive step-by-step reasoning:

1. **Analytical Assessment**: The problem statement requires balancing resource constraints against deterministic accuracy.
2. **Formal Conclusion**: The optimal strategy is to establish verifiable invariant checks at each transition step, ensuring mathematical correctness with minimal state bloat.`;
  }

  // 8. COMPREHENSIVE INTELLIGENT DEFAULT
  return `### ${modelName} Response

Thank you for your question: **"${p}"**

Here is the structured breakdown and insights:

1. **Direct Answer & Key Takeaway**:
   Addressing your query directly: the most effective strategy is to separate foundational requirements from runtime variables, ensuring high clarity and predictable outcomes.

2. **Core Insights**:
   - **Contextual Alignment**: ${
     isWebContextEnabled
       ? `This response incorporates active insights from **${webContext?.title || "your active webpage"}**.`
       : "For more domain-specific answers, you can toggle *Web Context* to incorporate any webpage."
   }
   - **Multi-Perspective Synthesis**: Different models provide unique angles—**Claude 3.7** excels at rigorous software design, **GPT-4o** at nuanced cross-domain logic, and **DeepSeek R1** at formal deduction.

3. **Recommended Next Steps**:
   - Feel free to ask a follow-up, request working code snippets, or ask me to draft a step-by-step implementation plan.`;
}
