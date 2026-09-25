export const INITIAL_CONVERSATIONS = [
  {
    id: "conv-1",
    title: "Next.js App Router Architecture Analysis",
    preview: "Comparing Server Components vs Client Components rendering patterns...",
    modelId: "claude-3-7-sonnet",
    updatedAt: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
    isFavorite: true,
    hasContext: true,
    contextUrl: "https://nextjs.org/docs/app/building-your-application/rendering",
    messages: [
      {
        id: "msg-1",
        sender: "user",
        timestamp: "10:14 AM",
        content: "Can you explain when I should mark a component with 'use client' versus keeping it as a Server Component in Next.js?",
        contextAttached: {
          url: "https://nextjs.org/docs/app/building-your-application/rendering",
          title: "Rendering: Server and Client Components",
        },
      },
      {
        id: "msg-2",
        sender: "assistant",
        model: "Claude 3.7 Sonnet",
        timestamp: "10:15 AM",
        content: `In Next.js App Router, components inside the \`app/\` directory are **React Server Components (RSC)** by default.

### When to use \`'use client'\`:
1. **Interactive Event Listeners**: Using \`onClick\`, \`onChange\`, or form submits.
2. **State & Lifecycle Hooks**: Using \`useState\`, \`useReducer\`, \`useEffect\`, or custom hooks.
3. **Browser-Only APIs**: Accessing \`window\`, \`localStorage\`, \`navigator\`, or geolocation.
4. **Third-party UI libraries** that rely on browser DOM or React Context.

### When to keep as a Server Component (Default):
- Fetching data directly on the server without exposing secrets or extra round-trips.
- Accessing backend resources (databases, filesystem, internal microservices).
- Keeping large dependencies out of client JavaScript bundles.

\`\`\`jsx
// ✅ Recommended pattern: Leaf Client Component
// Only the interactive button needs 'use client'
'use client';

export default function LikeButton({ initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  return <button onClick={() => setLikes(likes + 1)}>❤️ {likes}</button>;
}
\`\`\`

> **Rule of Thumb:** Push client components as far down the component tree as possible ("leaf components") so the parent layout remains server-rendered.`,
      },
    ],
  },
  {
    id: "conv-2",
    title: "Quantum Computing & Post-Quantum Cryptography",
    preview: "Breakdown of lattice-based cryptography standards chosen by NIST...",
    modelId: "gpt-4o",
    updatedAt: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
    isFavorite: false,
    hasContext: false,
    messages: [
      {
        id: "msg-201",
        sender: "user",
        timestamp: "08:40 AM",
        content: "Why are RSA and ECC vulnerable to Shor's algorithm, while lattice cryptography is considered quantum-resistant?",
      },
      {
        id: "msg-202",
        sender: "assistant",
        model: "GPT-4o (Omni)",
        timestamp: "08:41 AM",
        content: `Great foundational question!

1. **Shor's Algorithm & Period Finding**:
   Shor's algorithm can solve the **integer factorization problem** (which RSA relies on) and the **discrete logarithm problem** (which ECC relies on) in polynomial time:
   $$\\mathcal{O}((\\log N)^3)$$
   Both problems reduce mathematically to finding the period of a modular function, a task quantum computers solve exponentially faster using the Quantum Fourier Transform (QFT).

2. **Why Lattice-Based Cryptography Resists Quantum Attacks**:
   Lattice problems (such as the Shortest Vector Problem - SVP, and Learning With Errors - LWE) deal with high-dimensional geometric grids (often 500 to 1000+ dimensions).
   - There is no known quantum period-finding technique that efficiently discovers the closest or shortest vector in high-dimensional lattices.
   - Algorithms selected by NIST (such as **ML-KEM / Crystals-Kyber**) are engineered to require exponential resources even on quantum architectures.`,
      },
    ],
  },
  {
    id: "conv-3",
    title: "Summarizing TechCrunch AI Funding Report",
    preview: "High-level takeaways from Q3 generative AI investment trends...",
    modelId: "echogpt-turbo",
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    isFavorite: true,
    hasContext: true,
    contextUrl: "https://techcrunch.com/2026/09/generative-ai-seed-trends",
    messages: [
      {
        id: "msg-301",
        sender: "user",
        timestamp: "Yesterday",
        content: "Summarize this article and highlight the 3 most important takeaways for early-stage founders.",
        contextAttached: {
          url: "https://techcrunch.com/2026/09/generative-ai-seed-trends",
          title: "Generative AI Infrastructure Dominates Q3 Venture Deals",
        },
      },
      {
        id: "msg-302",
        sender: "assistant",
        model: "EchoGPT Turbo",
        timestamp: "Yesterday",
        content: `Here is the concise summary based on the active webpage:

### Top 3 Takeaways for Early-Stage Founders:
1. **Vertical Context Outweighs Generic Wrappers**: VCs are heavily discounting generic LLM wrappers in favor of proprietary workflow integrations with domain-specific context.
2. **Inference Efficiency Focus**: Over 42% of seed rounds funded optimization tooling (speculative decoding, on-device models, and quantization pipelines).
3. **Enterprise Privacy Guarantees**: Enterprise customers are demanding zero-retention policies and local or sovereign deployment options before closing annual contracts.`,
      },
    ],
  },
];
