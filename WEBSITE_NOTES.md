# 📝 EchoGPT Website Requirements & Architecture Notes

**Document:** Simple Reference Notes for EchoGPT Frontend Redesign  
**Author:** AI Pair Programmer  
**Context:** AppifyDevs Frontend Software Engineering Internship Assignment  

---

## 1. What is EchoGPT?
EchoGPT is a unified AI productivity workspace. Instead of switching tabs between different AI providers or copying back-and-forth from webpages, EchoGPT lets users:
1. **Chat with multiple AI models** (GPT-4o/5, Claude 3.7, Gemini 2.5 Pro, DeepSeek R1, Mistral) in one place.
2. **Bring browser context into prompts** (summarize the active webpage, explain highlighted text).
3. **Use anywhere**: Available as a **Full Web App** and as a **Chrome Extension Side Panel**.

---

## 2. Core Requirements & Constraints
* **Language & Framework:** **Next.js** (App Router) + **JavaScript (`.js`, `.jsx`)**
  * ⚠️ **Strict Rule: NO TypeScript (`.ts` / `.tsx`)**.
* **Styling:** **Tailwind CSS** with `clsx` and `tailwind-merge` for class utility management.
* **Icons:** **`react-icons`** (Feather, Lucide, FontAwesome).
* **Animations:** **`framer-motion`** for smooth, subtle UX transitions (no excessive or dizzying motion).
* **Notifications:** **`react-hot-toast`** for copy feedback, saving chats, and action toasts.
* **Authentication:** **Better Auth** for Login and Signup flows.
* **Backend:** **Frontend-only evaluation** — no real AI API keys or credit card processing; use realistic, clean mock data and simulated local response streaming.

---

## 3. What Needs to be Built (3 Core Experiences)

### Experience 1: Marketing Landing Page (`/`)
* **Purpose:** Introduce EchoGPT, explain the multi-model concept, show value, and convert visitors to the web app or Chrome extension.
* **Key Sections Needed:**
  1. **Navbar:** Logo, navigation links (Features, Models, Preview, Pricing, FAQ), Sign In button, "Open Web App" CTA.
  2. **Hero Section:** High-impact value proposition ("One AI Workspace. Every Perspective."), CTA buttons, and an interactive mockup preview.
  3. **Social Proof / Trust Badges:** Supported model families (OpenAI, Anthropic, Google, DeepSeek, Mistral), browser compatibility, high speed.
  4. **Features Grid:** Multi-model switching, one-click webpage summaries, selected text explanation, context preservation, conversation history.
  5. **Interactive Model Directory:** Filterable catalog of AI models with capability tags (Reasoning, Coding, Writing, General) and Pro/Free badges.
  6. **Interactive Product Preview:** Live interactive preview tab toggling between "Web App View" and "Chrome Extension View".
  7. **Why Choose EchoGPT:** Clear benefit comparisons over standard single-model chat UIs.
  8. **Pricing Section:** Clear $9.99/mo Pro plan vs Free tier (realistic mock according to current EchoGPT product).
  9. **FAQ Accordion:** Expandable accordion addressing common questions.
  10. **CTA Banner & Footer:** Final conversion banner and complete footer with product, resources, and legal links.

---

### Experience 2: Web App Workspace (`/app`, `/app/chat`, `/app/history`, `/app/settings`)
* **Purpose:** The actual working AI chat application dashboard where users converse with models.
* **Key Components Needed:**
  1. **Sidebar (Collapsible & Mobile Drawer):**
     - "New Chat" button
     - Search bar to find previous conversations
     - Grouped recent chats list with active indicator
     - Pinned / Favorite chats list
     - User account dropdown / settings trigger
  2. **Chat Header:**
     - Current conversation title (editable)
     - Interactive Model Selector dropdown (change active model on the fly)
     - Webpage Context toggle switch (visual badge indicating "Web Context: On/Off")
     - Actions: Share chat, Clear chat, Export
  3. **Conversation Feed:**
     - Distinct message bubbles for User and AI
     - Model badge on assistant messages
     - Syntax-highlighted code blocks with "Copy Code" button
     - Response actions: Copy response, Regenerate, Thumbs up/down feedback with toasts
     - Typing / Thinking indicator while generating response
  4. **Prompt Composer (Bottom Dock):**
     - Auto-resizing textarea
     - Enter to send, Shift+Enter for new line
     - Quick Prompt Pills ("Summarize key points", "Explain like I'm 5", "Debug code", "Rewrite professionally")
     - Context inclusion status chip
     - Send button with loading state
  5. **Productivity Sub-Pages:**
     - `/app/history`: Dedicated full-screen history explorer with search, filters, and bulk actions.
     - `/app/settings`: Preferences for Theme (Dark/Light), Default Model, Enter-to-send, and Context permissions.

---

### Experience 3: Chrome Extension Concept UI (`/extension`)
* **Purpose:** Showcase the EchoGPT browser companion that runs inside Chrome's Side Panel (Manifest V3).
* **Key Elements Needed:**
  1. **Browser Container Simulation:** A sleek browser mockup showing an active webpage (e.g. tech article / documentation) to provide realistic context.
  2. **Side Panel Frame (380px fixed width):**
     - Chrome side-panel header with EchoGPT icon and close/pin controls
     - Compact model selector
     - **Page Context Card:** Displays the current URL/title with an "Include Page Context" toggle
     - **Selected Text Interactive Demo:** A simulated highlighted snippet on the page with floating actions ("Explain this", "Summarize selection", "Translate")
     - Compact message stream and mini prompt composer

---

### Experience 4: Authentication with Better Auth (`/login`, `/signup`)
* **Purpose:** Clean login and signup screens/modals matching the EchoGPT design language.
* **Key Elements Needed:**
  1. Email + Password form with validation states.
  2. One-click demo guest login ("Continue as Guest" or "Demo Account").
  3. OAuth buttons (Google, GitHub) for realistic presentation.
  4. Integration with Better Auth client instance to store user session in state.

---

## 4. UI/UX Design System Guidelines
* **Palette:** Sleek modern dark mode by default with light mode option. Deep slate/zinc backgrounds (`#090d16`, `#0f172a`), refined borders (`border-white/10`), vibrant accent colors (Electric Indigo / Violet `#6366f1` / `#8b5cf6`, Cyan `#06b6d4`).
* **Typography:** Modern clean sans-serif (Inter / Geist font).
* **Micro-interactions:** Subtle hover glows, button presses, smooth dropdown reveals, toast confirmations.
* **Responsiveness:** Flawless layout on Mobile (<640px), Tablet (640px-1024px), Laptop (1024px-1280px), and Large Displays (>1280px).
* **Accessibility:** Semantic elements (`<header>`, `<main>`, `<aside>`, `<nav>`), ARIA labels on icon buttons, visible focus outlines, keyboard navigable.
