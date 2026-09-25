"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AI_MODELS } from "@/data/models";
import { INITIAL_CONVERSATIONS } from "@/data/conversations";
import toast from "react-hot-toast";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Theme state
  const [theme, setTheme] = useState("dark");

  // Auth User state (Better Auth simulation / persistent session)
  const [user, setUser] = useState({
    id: "user-demo",
    name: "Alex Vance",
    email: "alex.vance@example.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    plan: "Pro",
  });

  // Selected AI Model
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);

  // Conversations list
  const [conversations, setConversations] = useState(INITIAL_CONVERSATIONS);
  const [activeConversationId, setActiveConversationId] = useState(INITIAL_CONVERSATIONS[0].id);

  // Web Context feature
  const [webContextEnabled, setWebContextEnabled] = useState(true);
  const [activeWebpage, setActiveWebpage] = useState({
    url: "https://nextjs.org/docs/app/building-your-application/rendering",
    title: "Next.js App Router: Server & Client Components Documentation",
  });

  // Loading/Thinking state
  const [isGenerating, setIsGenerating] = useState(false);

  // Search filter
  const [searchQuery, setSearchQuery] = useState("");

  // Initialize from localStorage if available
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("echogpt_theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.toggle("light", savedTheme === "light");
      }

      const savedConversations = localStorage.getItem("echogpt_conversations");
      if (savedConversations) {
        const parsed = JSON.parse(savedConversations);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setConversations(parsed);
          setActiveConversationId(parsed[0].id);
        }
      }

      const savedModelId = localStorage.getItem("echogpt_model_id");
      if (savedModelId) {
        const found = AI_MODELS.find((m) => m.id === savedModelId);
        if (found) setSelectedModel(found);
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  // Sync theme to HTML class
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("light", nextTheme === "light");
    try {
      localStorage.setItem("echogpt_theme", nextTheme);
    } catch {}
    toast.success(`Switched to ${nextTheme} mode`, { icon: nextTheme === "dark" ? "🌙" : "☀️" });
  };

  // Change model
  const selectModel = (model) => {
    setSelectedModel(model);
    try {
      localStorage.setItem("echogpt_model_id", model.id);
    } catch {}
    toast.success(`Active model: ${model.name}`);
  };

  // Active conversation object
  const activeConversation = conversations.find((c) => c.id === activeConversationId) || conversations[0];

  // Create new conversation
  const createNewChat = () => {
    const newChatId = `conv-${Date.now()}`;
    const newChat = {
      id: newChatId,
      title: "New Conversation",
      preview: "Start a conversation with EchoGPT...",
      modelId: selectedModel.id,
      updatedAt: new Date().toISOString(),
      isFavorite: false,
      hasContext: webContextEnabled,
      contextUrl: webContextEnabled ? activeWebpage.url : null,
      messages: [],
    };

    const updated = [newChat, ...conversations];
    setConversations(updated);
    setActiveConversationId(newChatId);
    try {
      localStorage.setItem("echogpt_conversations", JSON.stringify(updated));
    } catch {}
    toast.success("Created new conversation", { icon: "✨" });
  };

  // Toggle favorite
  const toggleFavorite = (convId, e) => {
    if (e) e.stopPropagation();
    const updated = conversations.map((conv) => {
      if (conv.id === convId) {
        const nextState = !conv.isFavorite;
        toast(nextState ? "Added to favorites" : "Removed from favorites", {
          icon: nextState ? "⭐" : "☆",
        });
        return { ...conv, isFavorite: nextState };
      }
      return conv;
    });
    setConversations(updated);
    try {
      localStorage.setItem("echogpt_conversations", JSON.stringify(updated));
    } catch {}
  };

  // Delete conversation
  const deleteConversation = (convId, e) => {
    if (e) e.stopPropagation();
    const remaining = conversations.filter((c) => c.id !== convId);
    setConversations(remaining);
    if (activeConversationId === convId && remaining.length > 0) {
      setActiveConversationId(remaining[0].id);
    }
    try {
      localStorage.setItem("echogpt_conversations", JSON.stringify(remaining));
    } catch {}
    toast.success("Conversation deleted");
  };

  // Send message
  const sendMessage = async (text, attachedContext = null) => {
    if (!text || !text.trim() || isGenerating) return;

    const trimmed = text.trim();
    const uniqueSuffix = Math.random().toString(36).substring(2, 8);
    const userMsg = {
      id: `msg-${Date.now()}-${uniqueSuffix}`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      content: trimmed,
      contextAttached: attachedContext || (webContextEnabled ? activeWebpage : null),
    };

    // Update conversation title if this is the first message
    const isFirstMessage = !activeConversation.messages || activeConversation.messages.length === 0;
    const derivedTitle = isFirstMessage
      ? trimmed.length > 36
        ? trimmed.substring(0, 36) + "..."
        : trimmed
      : activeConversation.title;

    setConversations((prev) => {
      const updatedWithUser = prev.map((c) => {
        if (c.id === activeConversationId) {
          return {
            ...c,
            title: derivedTitle,
            preview: trimmed,
            updatedAt: new Date().toISOString(),
            messages: [...(c.messages || []), userMsg],
          };
        }
        return c;
      });
      try {
        localStorage.setItem("echogpt_conversations", JSON.stringify(updatedWithUser));
      } catch {}
      return updatedWithUser;
    });

    setIsGenerating(true);

    // Simulate model thinking & streaming
    setTimeout(() => {
      let aiContent = "";
      const lower = trimmed.toLowerCase();

      if (lower.includes("summar") || (attachedContext && lower.includes("page"))) {
        aiContent = `### 📋 Webpage Executive Summary
**Source:** [${activeWebpage.title}](${activeWebpage.url})

1. **Context Architecture**: EchoGPT captures DOM metadata to give ${selectedModel.name} live context without manual copy-pasting.
2. **Core Insight**: Modern web applications benefit significantly from separating static server content from interactive client boundaries.
3. **Actionable Recommendation**: Leverage leaf client components and maintain multi-model cross-validation for critical business logic.`;
      } else if (lower.includes("code") || lower.includes("debug") || lower.includes("react") || lower.includes("next")) {
        aiContent = `Here is an optimized architectural solution tailored for **${selectedModel.name}**:

\`\`\`javascript
// High-performance context processor
export function createEchoContext({ pageUrl, userPrompt, modelId }) {
  return {
    meta: {
      timestamp: Date.now(),
      model: modelId,
      sourceUrl: pageUrl,
    },
    streamTokens: async function* () {
      yield "Synthesizing webpage elements...\\n";
      yield "Applying specialized reasoning layers...\\n";
    }
  };
}
\`\`\`

> **Insight:** This implementation ensures non-blocking UI interactions while maintaining complete historical auditability.`;
      } else {
        aiContent = `**${selectedModel.name} Response:**

Thank you for your prompt! Using the **${selectedModel.provider}** architecture, I have analyzed your query:

> "${trimmed}"

${webContextEnabled ? `*(Context from ${activeWebpage.title} was factored into this response.)* \n\n` : ""}
- **Multi-Perspective Synthesis**: EchoGPT allows you to switch between models at any point to verify this output.
- **Workflow Continuity**: Your session is automatically preserved in your conversation timeline.

Would you like me to expand further, generate code, or compare this with **Claude 3.7 Sonnet** or **GPT-4o**?`;
      }

      const aiMsg = {
        id: `msg-${Date.now() + 1}-${Math.random().toString(36).substring(2, 8)}`,
        sender: "assistant",
        model: selectedModel.name,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        content: aiContent,
      };

      setConversations((prev) => {
        const finalUpdated = prev.map((c) => {
          if (c.id === activeConversationId) {
            return {
              ...c,
              messages: [...(c.messages || []), aiMsg],
            };
          }
          return c;
        });
        try {
          localStorage.setItem("echogpt_conversations", JSON.stringify(finalUpdated));
        } catch {}
        return finalUpdated;
      });

      setIsGenerating(false);
    }, 1200);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        user,
        setUser,
        selectedModel,
        selectModel,
        conversations,
        activeConversationId,
        setActiveConversationId,
        activeConversation,
        createNewChat,
        toggleFavorite,
        deleteConversation,
        sendMessage,
        isGenerating,
        webContextEnabled,
        setWebContextEnabled,
        activeWebpage,
        setActiveWebpage,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
