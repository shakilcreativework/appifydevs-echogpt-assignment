# 🚀 EchoGPT Ecosystem Frontend Redesign

> **One AI Workspace. Every Perspective.**  
> A unified frontend experience for chatting with multiple AI models, analyzing webpage context, comparing perspectives, and accessing intelligence seamlessly via a full Web App or Chrome Side Panel.

This project is built for the **AppifyDevs Software Engineering Internship (Frontend)** assignment, adhering strictly to the [Context Engineering PRD](./EchoGPT_Context_Engineering_PRD.md).

---

## 🌟 Experiences Included

1. **Marketing Landing Page (`/`)**:
   - High-impact Hero section with dynamic headline, value highlights, and interactive preview mockup.
   - Trust strip showcasing supported model families (OpenAI, Anthropic, Google Gemini, DeepSeek, Mistral).
   - Core Features Grid (Multi-model intelligence, instant webpage summaries, text selection explanation, side-by-side comparison).
   - Curated Frontier AI Models catalog with category filter tabs (Reasoning, Coding, Writing, General, Research).
   - Dual-view Product Preview (switching between Full Web App and 380px Chrome Side Panel).
   - Comparative advantage breakdown over traditional disjointed tab switching.
   - Transparent Pricing table conforming to live EchoGPT product offering (Free vs. $9.99/mo Pro).
   - Interactive FAQ accordion and final conversion banner with complete footer.

2. **Web App Workspace (`/app`, `/app/chat`)**:
   - Collapsible & responsive Sidebar with real-time search, pinned favorites, recent chats, and user profile.
   - Context-aware Chat Header with live Model Selector dropdown and Web Context on/off toggle.
   - Rich Conversation Feed with formatted code blocks, syntax copy buttons, and response action toolbars (Copy, Feedback, Regenerate).
   - Intelligent Prompt Composer with quick action suggestion chips (Summarize, Explain, Rewrite, Debug Code) and keyboard navigation (`Enter` to send, `Shift+Enter` for newline).
   - Welcoming Empty Chat state with curated prompt cards.

3. **Conversation History (`/app/history`)**:
   - Dedicated search and filtering by date or favorites.
   - Pin/unpin conversations and delete with toast feedback.
   - One-click resume conversation into the active chat stream.

4. **Workspace Settings (`/app/settings`)**:
   - Theme toggle (Dark Mode / Light Mode).
   - Default AI model configuration.
   - Automatic webpage context permission toggles and custom simulated URL input.
   - Account overview and session controls.

5. **Chrome Extension Concept (`/extension`)**:
   - Realistic Chrome browser window frame with simulated article reader.
   - Interactive **Selected Text Workflow**: highlighting text in the article pops up instant actions (*"Explain Text"*, *"Summarize"*, *"Rewrite"*), routing the selected passage directly into the side panel.
   - 380px fixed-width Chrome Side Panel UI (Manifest V3 compatible) with compact model picker, webpage context badge, and mini composer.

6. **Authentication (`/login`, `/signup`)**:
   - Integrated with **Better Auth** standards.
   - Email/password validation, simulated OAuth providers (Google, GitHub), and one-click demo guest session.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js (App Router) |
| **Language** | **100% JavaScript (`.js`, `.jsx`)** — *Strictly no TypeScript* |
| **Styling** | Tailwind CSS with custom dark mode design system |
| **Utility Libraries** | `clsx` & `tailwind-merge` (`cn` helper) |
| **Icons** | `react-icons` (Feather, Lucide, FontAwesome) |
| **Animations** | `framer-motion` (clean micro-interactions) |
| **Notifications** | `react-hot-toast` |
| **Authentication** | `better-auth` client instance & session state |
| **Data Layer** | Centralized local mock modules + `localStorage` persistence |

---

## 📂 Project Structure

```text
appifydevs-echogpt-assignment/
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Geist font, AppProvider & Toaster
│   │   ├── globals.css        # Custom design tokens, glassmorphism, scrollbars
│   │   ├── page.js            # Marketing Landing Page
│   │   ├── app/
│   │   │   ├── page.js        # Main Web App Workspace
│   │   │   ├── chat/page.js   # Chat Route alias
│   │   │   ├── history/page.js# Dedicated History view
│   │   │   └── settings/page.js# Settings Page
│   │   ├── extension/page.js  # Chrome Extension Side Panel Concept
│   │   ├── login/page.js      # Better Auth Login Page
│   │   └── signup/page.js     # Better Auth SignUp Page
│   │
│   ├── components/
│   │   ├── landing/           # Hero, Features, Models, Preview, Pricing, FAQ, CTA
│   │   ├── dashboard/         # Sidebar navigation, user profile
│   │   ├── chat/              # ChatHeader, ChatMessage, ChatComposer, EmptyState
│   │   ├── shared/            # Navbar, Footer, AuthModal
│   │   └── ui/                # Button, Badge, Card, Input, Modal
│   │
│   ├── context/
│   │   └── AppContext.jsx     # Global state (Theme, Auth, Model, Conversations)
│   │
│   ├── data/
│   │   ├── models.js          # Frontier models (GPT-4o, Claude 3.7, Gemini, DeepSeek)
│   │   ├── conversations.js   # Multi-turn demo conversations
│   │   ├── features.js        # Landing page core feature set
│   │   ├── faqs.js            # PRD Section 26 FAQs
│   │   └── pricing.js         # Free & $9.99 Pro tiers
│   │
│   └── lib/
│       ├── utils.js           # cn helper (clsx + tailwind-merge), date formatters
│       ├── constants.js       # App configuration, quick action prompts
│       ├── auth.js            # Better Auth server configuration
│       └── auth-client.js     # Better Auth React client instance
│
├── EchoGPT_Context_Engineering_PRD.md # Assignment PRD Specification
├── PROJECT_TRACKER.md                 # Live milestone and task progress tracker
├── WEBSITE_NOTES.md                   # Plain-language architecture and feature notes
└── package.json
```

---

## ⚡ Getting Started

### 1. Installation

```bash
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Verification

```bash
npm run build
npm start
```

---

## 💡 Important Product Assumptions

As designated by the PRD:
1. **Frontend-Only Evaluation**: This project demonstrates product architecture, design judgment, interaction design, and responsiveness. AI inference is simulated locally with realistic streaming and timing.
2. **Context Transparency**: Webpage context is explicitly marked with visual badges and can be toggled on/off to prevent unexpected context usage.
3. **Authentication**: Uses Better Auth schemas and simulated sessions for demo purposes.
4. **Chrome Extension**: Implemented as an interactive web-based 380px Chrome Side Panel simulation with live text-selection workflows.

---

## 📄 License & Attribution

Designed and engineered for **AppifyDevs** by an AI Pair Programmer.  
Based on the **EchoGPT** ecosystem concept.
