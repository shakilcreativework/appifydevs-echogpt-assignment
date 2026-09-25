# EchoGPT Frontend Redesign — Context Engineering PRD

**Project:** EchoGPT Ecosystem Frontend Redesign  
**Assignment:** Software Engineering Internship (Frontend) — Onsite  
**Company:** AppifyDevs  
**Submission deadline:** 29 September 2026  
**Primary implementation:** React / Next.js + JavaScript  
**Styling:** Tailwind CSS  
**Animation:** Framer Motion (only where it improves UX)  
**Icons:** React Icons  
**Notifications:** react-hot-toast  
**Deployment target:** Vercel  
**Repository:** GitHub

---

## 1. Document Purpose

This document is a **build-ready Product Requirements Document (PRD) + Context Engineering specification** for implementing the AppifyDevs EchoGPT frontend assignment.

It is written so that a developer or AI coding agent can use it as the single source of truth for:

- understanding the assignment
- understanding the existing EchoGPT product
- defining the redesign direction
- creating the landing page
- creating the web-app dashboard experience
- creating the Chrome-extension concept UI
- making consistent UX and visual decisions
- organizing the codebase
- implementing responsive behavior
- validating quality before submission

The goal is not to build a real AI backend or Chrome extension unless explicitly required. The assignment is primarily a **frontend redesign and product-concept implementation**.

---

# 2. Assignment Context

AppifyDevs has requested a frontend redesign of the EchoGPT ecosystem.

The assignment contains three connected experiences:

1. **EchoGPT Web App redesign**
2. **Single-page EchoGPT marketing website**
3. **Chrome Extension redesign concept**

The final work should feel like one coherent product rather than three unrelated pages.

The product should communicate:

> One AI workspace for chatting with multiple AI models, understanding webpages, comparing responses, and getting contextual help without leaving the current workflow.

The implementation should demonstrate:

- strong React fundamentals
- reusable components
- responsive UI
- accessibility awareness
- visual hierarchy
- interaction design
- clean architecture
- performance awareness
- attention to detail
- ability to translate a product requirement into a polished interface

---

# 3. Source-of-Truth Hierarchy

When making implementation decisions, use this priority order:

### Priority 1 — Assignment Requirements

The supplied AppifyDevs assignment is the highest-priority product requirement.

### Priority 2 — Existing EchoGPT Product

Use the existing EchoGPT website and Chrome extension listing to understand:

- product positioning
- available model concepts
- current functionality
- existing terminology
- current user workflows

### Priority 3 — This PRD

This document defines the proposed redesign structure and implementation strategy.

### Priority 4 — Design Judgment

When the assignment does not specify an exact solution, choose the option that improves:

- usability
- clarity
- accessibility
- responsiveness
- maintainability
- visual consistency

Do not add complicated functionality merely for novelty.

---

# 4. Existing Product Research

## 4.1 EchoGPT Web App

The current EchoGPT website presents EchoGPT as an AI productivity product with multiple available AI models and paid/pro capabilities.

The currently visible product ecosystem includes multiple model families and model cards, including EchoGPT, Llama-family models, Gemini, GPT models, Claude, Mistral, DeepSeek, and Grok-related models.

The current website also exposes a paid monthly plan and model-selection concepts.

**Design implication:**

The redesign should make model discovery and model selection much easier to understand without overwhelming users with a long technical list.

Source:
https://echogpt.live/

---

## 4.2 EchoGPT Chrome Extension

The current Chrome Web Store listing describes EchoGPT as a multi-AI chat sidebar.

Important documented concepts include:

- chat with multiple AI models
- switch between available models
- compare responses/perspectives
- maintain conversations
- summarize webpages
- explain selected text
- optionally include webpage context
- authentication
- settings
- dark mode
- keyboard shortcut
- Chrome Side Panel API
- responsive sidebar UI

The listing currently identifies the extension as version 1.0.5 and describes Manifest V3, Chrome Side Panel API, Chrome Storage API, and content-script usage.

Source:
https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj

**Design implication:**

The redesigned extension should prioritize the user's current webpage context and make the core actions available immediately:

- Ask
- Summarize
- Explain
- Rewrite
- Compare
- History
- Model selection

---

# 5. Product Vision

## Vision

Create a modern AI workspace that lets users move between AI models and webpage assistance without breaking their browsing or thinking flow.

## Product Promise

> Ask better questions, understand webpages faster, and work with multiple AI models from one focused interface.

## Primary UX Principle

**Context first, controls second.**

The user should always understand:

1. what they are asking
2. which model will answer
3. what context is being included
4. what will happen after they press Send

---

# 6. Target Users

## 6.1 Students and Researchers

Needs:

- summarize articles
- understand difficult concepts
- explain selected text
- research without opening many tabs
- compare AI responses

## 6.2 Developers

Needs:

- explain documentation
- summarize technical pages
- generate or improve code
- compare model responses
- maintain conversation history

## 6.3 Professionals

Needs:

- summarize reports
- rewrite text
- draft content
- analyze information
- quickly access AI while working

## 6.4 Everyday Web Users

Needs:

- quick answers
- page summaries
- text explanations
- rewriting
- brainstorming

---

# 7. UX Goals

The redesign must achieve these goals:

### G1 — Immediate clarity

A first-time visitor should understand what EchoGPT does within a few seconds.

### G2 — Low interaction cost

Core actions should require minimal navigation.

### G3 — Strong model discoverability

Users should understand that EchoGPT can work with multiple AI models.

### G4 — Context transparency

When webpage context is enabled, the UI should clearly communicate it.

### G5 — Consistent ecosystem

Landing page, web app, and extension should share:

- typography
- colors
- spacing
- buttons
- cards
- iconography
- interaction patterns
- visual language

### G6 — Responsive by default

The experience must work across:

- mobile
- tablet
- laptop
- desktop

### G7 — Accessible

Support:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient contrast
- meaningful labels
- reduced-motion preference
- accessible dialogs/dropdowns

---

# 8. Non-Goals

Do NOT spend assignment time building:

- a production AI inference backend
- real API billing
- real payment processing
- real authentication backend
- production Chrome extension publishing
- complex database infrastructure
- real-time multi-user collaboration
- unnecessary enterprise functionality

For the assignment, realistic mock data and simulated interactions are acceptable where backend integration is not required.

The frontend should make clear visual assumptions rather than pretending unsupported backend functionality is real.

---

# 9. Recommended Technical Stack

## Core

- Next.js
- React
- JavaScript

## Styling

- Tailwind CSS

## UI

- React Icons
- reusable custom components

## Animation

- Framer Motion

Use animation selectively. Avoid excessive motion.

## Notifications

- react-hot-toast

Use notifications for actions such as:

- copied response
- saved conversation
- setting updated
- feedback submitted

## State

Prefer simple React state for assignment scope.

Use Context only when shared state is genuinely needed.

Do not introduce a large state-management library unless complexity requires it.

## Data

Use local mock data modules.

Example:

```text
src/
  data/
    models.js
    conversations.js
    faqs.js
    testimonials.js
    pricing.js
```

## Deployment

Vercel is the preferred deployment target.

---

# 10. JavaScript Constraint

The implementation should use **JavaScript rather than TypeScript** for this project.

Do not introduce `.ts` or `.tsx` files.

Use:

- `.js`
- `.jsx`

The AppifyDevs job listing mentions TypeScript as a nice-to-have, but the assignment itself permits React, Next.js, or another modern frontend framework. The project should therefore prioritize a polished, maintainable JavaScript implementation.

---

# 11. Recommended Application Architecture

Recommended structure:

```text
echogpt-redesign/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   │
│   ├── app/
│   │   ├── page.jsx
│   │   ├── chat/
│   │   │   └── page.jsx
│   │   ├── history/
│   │   │   └── page.jsx
│   │   └── settings/
│   │       └── page.jsx
│   │
│   ├── extension/
│   │   └── page.jsx
│   │
│   └── api/
│       └── ...
│
├── components/
│   ├── landing/
│   ├── dashboard/
│   ├── chat/
│   ├── extension/
│   ├── shared/
│   └── ui/
│
├── data/
│   ├── models.js
│   ├── conversations.js
│   ├── faqs.js
│   ├── pricing.js
│   └── testimonials.js
│
├── lib/
│   ├── utils.js
│   └── constants.js
│
├── public/
│   ├── images/
│   └── icons/
│
├── README.md
├── package.json
└── ...
```

The exact structure can be simplified if the final implementation is smaller.

---

# 12. Route Strategy

Recommended routes:

```text
/                 → Landing page
/app              → Web app redesign
/app/chat         → Main chat workspace
/app/history      → Conversation history
/app/settings     → Settings
/extension        → Chrome extension concept
```

If time is limited, `/app` can contain the complete dashboard and the other routes can be represented by interactive panels.

---

# 13. Design System

## 13.1 Visual Direction

Recommended direction:

**Modern AI SaaS + focused productivity workspace**

Characteristics:

- clean
- premium
- minimal
- slightly futuristic
- high information clarity
- restrained gradients
- soft borders
- subtle shadows
- generous spacing
- rounded components
- strong typography

Avoid:

- excessive neon
- overly decorative backgrounds
- excessive glassmorphism
- too many gradients
- excessive animation
- visually noisy dashboards

---

# 14. Color System

Use a small semantic color system.

Example:

```text
Background:
- Primary background
- Secondary background
- Elevated surface

Text:
- Primary
- Secondary
- Muted
- Inverse

Brand:
- Primary
- Primary hover
- Primary subtle

Status:
- Success
- Warning
- Error
- Info

Border:
- Default
- Strong
```

The exact colors can be adjusted after visual testing.

Do not hard-code unrelated colors repeatedly throughout components.

---

# 15. Typography

Use a modern sans-serif font.

Suggested hierarchy:

```text
Display
H1
H2
H3
Body Large
Body
Body Small
Caption
Label
```

Requirements:

- readable line height
- clear heading hierarchy
- comfortable paragraph width
- responsive typography
- no overly small UI text

---

# 16. Spacing

Use a consistent spacing scale.

Avoid arbitrary one-off spacing values whenever a reusable spacing value is available.

Main page sections should generally use:

- compact spacing on mobile
- moderate spacing on tablet
- generous spacing on desktop

---

# 17. Reusable UI Components

Create reusable components for:

### Global

- Button
- IconButton
- Badge
- Card
- Modal
- Drawer
- Tooltip
- Dropdown
- Tabs
- Switch
- Input
- Textarea
- Skeleton
- EmptyState

### Navigation

- Navbar
- Sidebar
- MobileNav
- Breadcrumb

### AI

- ModelSelector
- ModelCard
- ChatMessage
- ChatComposer
- PromptSuggestion
- ContextBadge
- ResponseActions
- ThinkingIndicator

### Marketing

- Hero
- FeatureCard
- ModelShowcase
- ProductPreview
- ComparisonSection
- PricingCard
- FAQAccordion
- CTASection
- Footer

---

# 18. Landing Page Requirements

## 18.1 Navbar

Desktop:

- EchoGPT logo
- Product
- Features
- Models
- Pricing
- FAQ
- Sign In
- Get Started

Mobile:

- logo
- menu button
- mobile navigation drawer

Navbar should remain visually lightweight.

---

# 19. Hero Section

### Required content

Headline should communicate:

- multi-model AI
- productivity
- contextual assistance

Example direction:

> One AI Workspace. Every Perspective.

Supporting text should explain that EchoGPT lets users chat with multiple AI models and get contextual help while browsing.

Primary CTA:

> Start Chatting

Secondary CTA:

> Add to Chrome

Hero visual:

A polished product mockup showing:

- model selector
- chat messages
- prompt input
- webpage context indicator

Do not make the hero dependent on real API output.

---

# 20. Social Proof / Trust Strip

Optional section containing concepts such as:

- Multiple AI models
- Browser assistance
- Secure sessions
- Fast workflow
- Dark mode

Do not invent fake customer statistics.

---

# 21. Features Section

Show 5–6 core features.

Recommended:

### Multi-Model Chat

Switch between available AI models in one workspace.

### Webpage Summaries

Summarize the current webpage.

### Explain Selected Text

Send selected webpage text to EchoGPT.

### Context-Aware Assistance

Use relevant webpage context when enabled.

### Conversation History

Return to previous conversations.

### Quick Actions

Start common tasks without manually writing prompts.

Each feature should include:

- icon
- title
- concise explanation
- optional micro-interaction

---

# 22. AI Models Section

Create a visually clear model directory.

Each model card should include:

- model/provider name
- short capability description
- category/tag
- availability indicator
- optional Pro badge
- action

Example categories:

- General
- Reasoning
- Coding
- Writing
- Research

Do not claim that one model is objectively "best."

Use descriptive capability language only.

---

# 23. Product Preview Section

Show the redesigned web app UI.

Recommended layout:

```text
┌─────────────────────────────────────────────┐
│ Sidebar │ Chat Header                       │
│         ├───────────────────────────────────┤
│ History │ User Message                      │
│         │                                   │
│         │ AI Response                       │
│         │                                   │
│         ├───────────────────────────────────┤
│         │ Prompt Composer                   │
└─────────────────────────────────────────────┘
```

Add callouts for:

- model selector
- context control
- quick actions
- response actions

---

# 24. Why Choose EchoGPT

Use benefit-driven content:

- One place for multiple AI models
- Context-aware browser assistance
- Faster research workflow
- Clean conversation management
- Flexible model selection
- Focused productivity interface

Avoid unsupported numerical claims.

---

# 25. Pricing Section

Pricing is optional according to the assignment.

If included, use clearly labeled mock/product concepts.

The existing EchoGPT website currently presents a monthly Pro plan at USD 9.99.

If reproducing pricing, label the UI as based on the current product presentation and verify it before final submission.

Do not create additional pricing claims that are not supported by the source product.

---

# 26. FAQ Section

Suggested questions:

1. What is EchoGPT?
2. Which AI models can I use?
3. Can EchoGPT summarize webpages?
4. Can I explain selected text?
5. Does EchoGPT keep conversation history?
6. Can I use EchoGPT from the Chrome sidebar?
7. Is dark mode available?
8. How do I get started?

Answers should be concise and based on documented product behavior.

---

# 27. Testimonials

Optional.

Do not fabricate real customers, companies, ratings, or quotations.

If testimonials are included for visual demonstration, clearly mark them as placeholder/demo content in the implementation or README.

---

# 28. Final CTA

Primary CTA:

> Start Chatting

Secondary CTA:

> Add to Chrome

Supporting message:

> Bring AI assistance closer to your everyday workflow.

---

# 29. Footer

Include:

- EchoGPT brand
- short description
- Product links
- Resources
- Legal
- Chrome Extension
- Contact/support
- copyright

Only include real links that are known or clearly mark placeholders.

---

# 30. Web App Redesign

## 30.1 Main Layout

Desktop:

```text
┌──────────────┬─────────────────────────────────────────┐
│ Sidebar      │ Main Chat Area                          │
│              │                                         │
│ New Chat     │ Header                                  │
│ Search       │                                         │
│ Recent       │ Conversation                            │
│ Favorites    │                                         │
│              │                                         │
│ Settings     │ Composer                                │
└──────────────┴─────────────────────────────────────────┘
```

Mobile:

```text
┌──────────────────────────┐
│ Header + menu            │
├──────────────────────────┤
│                          │
│ Conversation             │
│                          │
│                          │
├──────────────────────────┤
│ Composer                 │
└──────────────────────────┘
```

---

# 31. Web App Sidebar

Required concepts:

- EchoGPT logo
- New Chat
- Search conversations
- Recent conversations
- Favorites
- optional folders/tags
- Settings
- user/account area

Interactions:

- active conversation state
- hover actions
- rename
- delete
- favorite

For destructive actions, use confirmation when appropriate.

---

# 32. Chat Header

Show:

- conversation title
- selected model
- model dropdown
- context indicator
- more actions

Example:

```text
Research Article
GPT-5.5
Web Context: On
•••
```

---

# 33. Chat Conversation

Message UI should distinguish:

- user
- assistant
- system/status

Assistant response actions:

- copy
- regenerate
- thumbs up/down
- more

Do not create excessive button clutter.

Actions can appear on hover for desktop and remain accessible through a menu on mobile.

---

# 34. Prompt Composer

The composer is one of the most important components.

Include:

- multiline input
- send button
- model selector
- attach/context action
- quick action menu

Quick actions:

- Summarize
- Explain
- Rewrite
- Translate
- Brainstorm

Example:

```text
┌───────────────────────────────────────────┐
│ Ask EchoGPT anything...                   │
│                                           │
│ + Context     Model ▼              Send ↑ │
└───────────────────────────────────────────┘
```

Keyboard behavior:

- Enter → send
- Shift + Enter → newline

The exact behavior can be implemented only when it does not conflict with accessibility.

---

# 35. Empty Chat State

When no conversation exists:

Show:

- welcoming headline
- short explanation
- suggested prompts
- model selector

Suggested prompts:

- Summarize this article
- Explain this concept
- Help me write an email
- Compare these ideas
- Review this text

---

# 36. History Page

Include:

- search
- recent conversations
- favorites
- filters
- timestamps
- model badge

Each item can have:

- title
- preview
- date
- model
- menu

---

# 37. Settings Page

Sections:

### General

- Theme
- Language
- Default model

### Chat

- Enter-to-send
- Response behavior
- Context preference

### Browser Context

- Enable webpage context
- Explain selected text
- Summarize page

### Account

- profile
- plan
- sign out

### Privacy

Explain what context is used for the UI concept.

Do not make unsupported legal/privacy promises.

---

# 38. Chrome Extension Concept

The extension redesign should visually resemble a real Chrome Side Panel.

Recommended width:

Approximately 360–420px.

The design must remain usable at narrower widths.

---

# 39. Extension Popup / Side Panel

Header:

```text
EchoGPT                         ⋯
```

Model row:

```text
GPT-5.5 ▼
```

Conversation:

```text
User question

AI response
```

Composer:

```text
Ask anything...
[Context] [Quick Actions] [Send]
```

---

# 40. Extension Navigation

Use a compact navigation pattern:

- Chat
- History
- Saved
- Settings

For very narrow layouts, use icons with tooltips or a bottom navigation pattern.

---

# 41. Page Context UX

The extension should make webpage context explicit.

Example:

```text
Current page context
example.com/article
[On]
```

When context is enabled:

- show a visible context badge
- allow removing context
- avoid silently including page content

Possible quick actions:

- Summarize page
- Explain selection
- Extract key points
- Rewrite selection

---

# 42. Selected Text Workflow

When the user selects text:

1. Extension detects selected text.
2. A contextual action becomes available.
3. User chooses an action.
4. Selected text appears as context.
5. User can edit the prompt.
6. AI response is displayed.

Frontend prototype can simulate this with predefined selected text.

---

# 43. Model Selection UX

The model selector should be compact but informative.

Each option may show:

```text
Model name
Capability
Availability
```

Example:

```text
GPT-5.5
General reasoning
Pro
```

Do not overcrowd the dropdown.

---

# 44. Quick Actions

Recommended extension actions:

- Summarize
- Explain
- Rewrite
- Translate
- Extract
- Ask about page

Quick actions should insert an appropriate prompt rather than requiring the user to start from zero.

---

# 45. Extension Settings

Include:

- Default model
- Theme
- Webpage context toggle
- Keyboard shortcut information
- Account
- Sign out

The current product documentation identifies a keyboard shortcut concept for opening EchoGPT quickly.

If the exact shortcut is displayed, keep it consistent with the current extension documentation.

---

# 46. Responsive Requirements

## Mobile

- no horizontal scrolling
- readable text
- large touch targets
- stacked sections
- collapsible navigation
- simplified tables/cards

## Tablet

- balanced two-column layouts where appropriate
- sidebar may collapse

## Desktop

- full sidebar
- wide content area
- richer hover states
- multi-column marketing sections

---

# 47. Accessibility Requirements

Minimum expectations:

- semantic headings
- button elements for buttons
- labels for inputs
- aria-labels for icon-only buttons
- visible focus state
- keyboard-accessible menus
- keyboard-accessible dialogs
- sufficient contrast
- reduced-motion support
- no information conveyed only by color
- logical tab order

Images require useful alt text unless decorative.

---

# 48. Performance Requirements

Optimize for:

- fast initial rendering
- optimized images
- minimal client-side JavaScript where possible
- reusable components
- lazy loading for below-the-fold media
- no unnecessary animation loops
- no large unnecessary dependencies

Avoid turning every component into a client component.

---

# 49. Interaction States

Every interactive component should consider:

- default
- hover
- focus
- active
- disabled
- loading
- success
- error
- empty

For example, model selection should show:

```text
Default
Hover
Selected
Loading
Unavailable
```

---

# 50. Mock Data Requirements

Use realistic but clearly non-production demo data.

Example model object:

```js
{
  id: "gpt-55",
  name: "GPT-5.5",
  provider: "OpenAI",
  category: "General",
  description: "A general-purpose model for reasoning, writing, and everyday tasks.",
  plan: "Pro"
}
```

Example conversation object:

```js
{
  id: "conversation-1",
  title: "Research Notes",
  preview: "Summarize the main ideas...",
  model: "GPT-5.5",
  updatedAt: "Today"
}
```

Keep all mock data centralized.

---

# 51. Functional Prototype Requirements

Even without a backend, the frontend should feel interactive.

Implement where practical:

- open/close sidebar
- mobile menu
- model dropdown
- new chat
- prompt input
- send action
- loading state
- simulated assistant response
- copy response
- toast notification
- favorite conversation
- delete conversation
- search conversations
- FAQ accordion
- theme toggle
- context toggle
- quick action insertion
- extension navigation

Avoid fake functionality that looks broken.

---

# 52. Demo Chat Behavior

A simple local simulation is sufficient.

Flow:

```text
User types prompt
        ↓
Send
        ↓
Loading indicator
        ↓
Mock assistant response
        ↓
Response actions become available
```

The response can come from local data based on the selected demo prompt.

Do not expose fake API keys.

---

# 53. Animation Guidelines

Use Framer Motion for:

- hero entrance
- section reveal
- card hover
- sidebar transitions
- modal/drawer transitions
- chat message appearance

Avoid:

- constant floating animations
- excessive parallax
- long delays
- distracting bouncing
- animation that blocks interaction

Respect:

```css
prefers-reduced-motion
```

---

# 54. SEO / Metadata

Landing page should include:

- meaningful title
- meta description
- Open Graph metadata
- semantic heading hierarchy

Example title:

> EchoGPT — Multi-AI Workspace for Smarter Browsing

The final wording can be adjusted after implementation.

---

# 55. Error and Empty States

Create polished states for:

### No conversations

> No conversations yet.

### Search no results

> No conversations match your search.

### Model unavailable

> This model is currently unavailable.

### Failed response

> Something went wrong. Try again.

### No page context

> No webpage context has been added.

---

# 56. Security / Privacy UX

Do not expose:

- API keys
- access tokens
- secret environment values

Do not hard-code private credentials.

If privacy is mentioned, use only claims supported by the actual product documentation.

---

# 57. README Requirements

The final repository README must contain:

## Project Overview

Explain:

- what was redesigned
- why the redesign was created
- what experiences are included

## Features

List:

- landing page
- web app
- chat interface
- model selection
- history
- extension concept
- responsive design
- dark/light mode if implemented
- animations if implemented

## Technologies

Example:

```text
Next.js
React
JavaScript
Tailwind CSS
Framer Motion
React Icons
react-hot-toast
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Assumptions

Document:

- frontend-only prototype
- mocked AI responses
- mocked authentication if applicable
- mocked conversation data
- extension is a concept/prototype unless a real extension was implemented

## Additional Features

Mention only features actually implemented.

---

# 58. Acceptance Criteria

## Landing Page

- [ ] Navbar works
- [ ] Hero is responsive
- [ ] Features section implemented
- [ ] AI models section implemented
- [ ] Product preview implemented
- [ ] Why Choose section implemented
- [ ] Pricing implemented or intentionally omitted
- [ ] FAQ implemented
- [ ] CTA implemented
- [ ] Footer implemented

## Web App

- [ ] Responsive sidebar
- [ ] Chat interface
- [ ] Model selector
- [ ] Conversation history
- [ ] Prompt composer
- [ ] Quick actions
- [ ] Context indicator
- [ ] Response actions
- [ ] Settings concept
- [ ] Loading state
- [ ] Empty state

## Extension

- [ ] Side panel concept
- [ ] Model selection
- [ ] Chat
- [ ] Context
- [ ] Quick actions
- [ ] History
- [ ] Settings
- [ ] Responsive narrow layout

## Quality

- [ ] No console errors
- [ ] No broken links
- [ ] No horizontal overflow
- [ ] Keyboard navigation tested
- [ ] Mobile tested
- [ ] Tablet tested
- [ ] Desktop tested
- [ ] Production build succeeds
- [ ] Images optimized
- [ ] README complete

---

# 59. Manual QA Checklist

Before submission, test:

### Navigation

- [ ] All navbar links work
- [ ] CTA buttons work
- [ ] Footer links do not lead to broken pages

### Chat

- [ ] Can type
- [ ] Can send
- [ ] Loading state appears
- [ ] Response appears
- [ ] Copy works
- [ ] Model selection works
- [ ] Context toggle works

### Responsive

Test at approximately:

```text
320px
375px
390px
768px
1024px
1280px
1440px
```

### Accessibility

Test:

- keyboard Tab
- Enter
- Escape
- focus visibility
- screen-reader labels where applicable

### Performance

Check:

- image size
- console warnings
- unnecessary rerenders
- client/server component boundaries
- build output

---

# 60. Context Engineering Instructions for AI Coding Agents

The following rules should be followed by any AI coding agent implementing this project.

## Rule 1 — Read Before Coding

Before creating files, inspect:

- package.json
- existing app structure
- current styles
- existing components
- README
- available assets

Do not overwrite working code blindly.

## Rule 2 — Build in Small Milestones

Implement in this order:

1. project foundation
2. design tokens
3. shared UI components
4. landing page
5. web app shell
6. chat experience
7. history/settings
8. extension concept
9. responsive refinement
10. accessibility
11. performance
12. QA

## Rule 3 — Reuse Components

Do not create duplicate versions of:

- buttons
- cards
- model selectors
- navigation
- dialogs
- inputs

Create reusable components when patterns repeat.

## Rule 4 — Prefer Simple Solutions

Do not introduce a library for something that can be cleanly implemented with React and existing dependencies.

## Rule 5 — No Unsupported Claims

Do not invent:

- customer statistics
- user counts
- performance statistics
- testimonials
- security certifications
- pricing tiers
- model capabilities that are not supported

## Rule 6 — No Fake Production Integrations

Do not create fake API keys or pretend that a mock response is a real AI API response.

Use mock data clearly.

## Rule 7 — Preserve JavaScript

Do not convert the project to TypeScript.

## Rule 8 — Accessibility Is Required

Do not finish a component until keyboard and focus behavior have been considered.

## Rule 9 — Mobile Is Not an Afterthought

Every major component should be checked at mobile width before considering it complete.

## Rule 10 — Verify Before Finishing

Run:

```bash
npm run build
```

and fix build errors before submission.

Also inspect:

```text
console errors
broken routes
layout overflow
missing alt text
broken interactions
mobile layout
```

---

# 61. Agent Prompt — Initial Build

Use the following prompt when starting the implementation with an AI coding agent:

> Read the complete `PRD.md` before making changes.
>
> Build the EchoGPT frontend assignment described in the PRD.
>
> First inspect the existing repository and package.json. Do not overwrite existing working functionality without understanding it.
>
> Use Next.js, React, JavaScript, Tailwind CSS, React Icons, Framer Motion, and react-hot-toast where appropriate.
>
> Do not use TypeScript.
>
> Build a cohesive EchoGPT design system and implement:
>
> 1. Marketing landing page
> 2. Responsive web-app dashboard
> 3. Chat interface
> 4. Model selection
> 5. Conversation history
> 6. Settings
> 7. Chrome extension side-panel concept
>
> Use reusable components and centralized mock data.
>
> Do not build a real AI backend. Simulate AI responses locally.
>
> Do not invent unsupported product claims.
>
> Prioritize responsive design, accessibility, performance, and polished UX.
>
> Work in small verifiable milestones. After each major milestone, inspect the result for broken imports, console errors, responsive issues, and duplicated components.
>
> Finish by running the production build and fixing all build errors.

---

# 62. Agent Prompt — UX Review

After implementation, use:

> Review the complete EchoGPT implementation against `PRD.md`.
>
> Do not immediately rewrite code.
>
> First inspect:
>
> - information hierarchy
> - spacing
> - typography
> - navigation
> - responsive behavior
> - accessibility
> - component reuse
> - loading states
> - empty states
> - error states
> - mobile usability
> - extension usability
>
> Identify the highest-impact issues.
>
> Then fix them without introducing unnecessary dependencies or changing the core architecture.

---

# 63. Agent Prompt — Final QA

Use:

> Perform a final production-readiness review against `PRD.md`.
>
> Check:
>
> - npm build
> - console errors
> - broken links
> - missing imports
> - responsive overflow
> - keyboard navigation
> - focus states
> - button labels
> - image alt text
> - mobile navigation
> - chat interaction
> - model selection
> - history interaction
> - extension concept
> - dark/light mode if implemented
> - loading and empty states
> - README completeness
>
> Fix only verified issues.
>
> Do not add unrelated features.
>
> The final result should look like a polished frontend internship assignment rather than an unfinished prototype.

---

# 64. Recommended Implementation Milestones

## Milestone 1 — Foundation

Deliver:

- Next.js setup
- Tailwind setup
- global styles
- fonts
- design tokens
- layout
- reusable Button/Card/Input components

## Milestone 2 — Landing Page

Deliver:

- navbar
- hero
- features
- model showcase
- product preview
- benefits
- FAQ
- CTA
- footer

## Milestone 3 — Web App

Deliver:

- app shell
- sidebar
- chat
- composer
- model selector
- mock responses

## Milestone 4 — Productivity Features

Deliver:

- history
- search
- favorites
- quick actions
- context controls
- settings

## Milestone 5 — Extension Concept

Deliver:

- side panel
- compact chat
- model selector
- page context
- quick actions
- history
- settings

## Milestone 6 — Polish

Deliver:

- animations
- dark/light mode
- responsive refinement
- accessibility
- empty/loading/error states

## Milestone 7 — QA

Deliver:

- production build
- README
- screenshots
- live deployment
- GitHub cleanup

---

# 65. Suggested Project Screens

The final project should demonstrate at least these screens/states:

1. Landing page — desktop
2. Landing page — mobile
3. Web app — empty chat
4. Web app — active conversation
5. Model selector
6. Conversation history
7. Settings
8. Chrome extension — chat
9. Chrome extension — webpage context
10. Chrome extension — settings
11. Dark mode if implemented

These screens make the assignment easy for reviewers to understand quickly.

---

# 66. Submission Preparation

Before sending the assignment to AppifyDevs, verify:

### GitHub

- repository is public or accessible to the reviewer
- README is complete
- no secrets committed
- meaningful commit history if possible
- no unnecessary files

### Live Demo

- deployment works
- no runtime errors
- routes work
- responsive layout works
- demo interactions work

### Email

Provide:

- GitHub repository
- live demo
- short note describing the redesign
- optional additional notes

Keep the submission email concise and professional.

---

# 67. Important Product Assumptions

The following assumptions are intentional:

1. The assignment is primarily a frontend evaluation.
2. AI responses can be mocked.
3. Authentication can be represented visually unless backend functionality is explicitly required.
4. The Chrome extension can be represented as a polished web-based concept unless a real extension is specifically required.
5. The design should reflect the existing EchoGPT product while improving information architecture and usability.
6. Existing product capabilities should be described conservatively.
7. Optional features should only be implemented when they improve the submission rather than increasing complexity.

---

# 68. Definition of Done

The project is considered complete when:

- the landing page communicates EchoGPT clearly
- the web app looks and behaves like a credible AI workspace
- the extension concept looks like a credible Chrome side panel
- all three experiences share one design system
- interactions feel intentional
- mobile and desktop layouts are polished
- accessibility basics are implemented
- no major console/build errors exist
- mock functionality is clearly separated from real integrations
- README explains the project and assumptions
- the project is deployed successfully
- GitHub is ready for reviewer access

---

# 69. Final Engineering Principle

Do not optimize for the number of features.

Optimize for:

> **Clarity + consistency + usability + polish + maintainability.**

A smaller set of well-designed interactions is preferable to many unfinished features.

The reviewer should be able to open the live demo and immediately understand:

1. what EchoGPT is
2. why multiple AI models are useful
3. how the web app works
4. how the browser extension fits into the workflow
5. that the implementation was deliberately engineered rather than assembled as disconnected UI screens

---

# 70. Research References

These sources were used to establish the current product/assignment context and should be rechecked before final submission because product details can change:

- EchoGPT Web App: https://echogpt.live/
- EchoGPT Chrome Web Store: https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj
- EchoGPT Developer Platform: https://platform.echogpt.live/
- AppifyDevs Frontend Internship: https://career.appifydevs.com/jobs/sei-frontend
- AppifyDevs: https://appifydevs.com/

**Research date:** 25 September 2026.