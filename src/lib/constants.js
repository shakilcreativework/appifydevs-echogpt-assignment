export const APP_CONFIG = {
  name: "EchoGPT",
  tagline: "One AI Workspace. Every Perspective.",
  description:
    "Chat with multiple world-class AI models, understand webpages in real time, and compare perspectives without breaking your workflow.",
  extensionStoreUrl: "https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj",
  webAppUrl: "/app",
  version: "1.0.5",
};

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Models", href: "#models" },
  { label: "Preview", href: "#preview" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const QUICK_ACTIONS = [
  {
    id: "summarize",
    label: "Summarize Page",
    prompt: "Please provide a concise, high-level summary of this webpage, highlighting key takeaways and action items.",
    icon: "FiFileText",
  },
  {
    id: "explain",
    label: "Explain Concept",
    prompt: "Explain this concept in simple terms with an analogy that is easy to understand.",
    icon: "FiHelpCircle",
  },
  {
    id: "rewrite",
    label: "Rewrite & Polish",
    prompt: "Rewrite the following text to make it sound more professional, clear, and impactful:",
    icon: "FiEdit3",
  },
  {
    id: "compare",
    label: "Compare Models",
    prompt: "Analyze the pros and cons of this approach from multiple engineering perspectives.",
    icon: "FiLayers",
  },
  {
    id: "code",
    label: "Debug Code",
    prompt: "Review this code snippet, point out potential edge-case bugs, and suggest an optimized solution with explanations.",
    icon: "FiCode",
  },
];
