"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import MarkdownRenderer from "@/components/chat/MarkdownRenderer";
import { AI_MODELS } from "@/data/models";
import {
  FiChrome,
  FiCpu,
  FiFileText,
  FiSend,
  FiHelpCircle,
  FiEdit3,
  FiCopy,
  FiCheck,
  FiArrowLeft,
  FiMaximize2,
  FiMinimize2,
  FiX,
  FiZap,
} from "react-icons/fi";
import toast from "react-hot-toast";

export default function ExtensionPage() {
  const [selectedModel, setSelectedModel] = useState(AI_MODELS[0]);
  const [contextEnabled, setContextEnabled] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: "ext-1",
      sender: "user",
      content: "Can you summarize the primary thesis of this article on Agentic Software Engineering?",
    },
    {
      id: "ext-2",
      sender: "assistant",
      content: `### 📄 Webpage Summary: Agentic Software Engineering
1. **Context Shift**: Autonomous coding agents move beyond simple code-completion by orchestrating multi-file refactoring and inspecting compiler outputs.
2. **Context Window Utilization**: Direct webpage context injection eliminates manual copying friction for engineers reading documentation.
3. **Core Advantage**: Verification loops between different frontier models (e.g. GPT-4o and Claude 3.7) reduce hallucinated APIs.`,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedArticleText, setSelectedArticleText] = useState("");
  const [showHighlightAction, setShowHighlightAction] = useState(false);

  const simulatedArticle = {
    title: "The Architecture of Agentic AI Workspaces in 2026",
    url: "https://techchronicle.dev/articles/agentic-ai-workspaces-2026",
    author: "Elena Rostova, Principal Systems Architect",
    date: "September 24, 2026",
    paragraphs: [
      "Traditional chat interfaces require developers and researchers to treat AI as a disconnected destination. The modern paradigm integrates frontier intelligence directly alongside the active browser viewport via native Side Panel APIs.",
      "By maintaining continuous, zero-latency DOM awareness, models can synthesize live documentation, spot discrepancies in API contracts, and draft pull request comments without breaking the human operator's cognitive flow.",
      "The critical capability lies in multi-model cross-validation: querying multiple foundation models against identical contextual snippets to ensure cryptographic accuracy and resilient architecture.",
    ],
  };

  const handleSelectText = (e) => {
    const selection = window.getSelection().toString().trim();
    if (selection && selection.length > 5) {
      setSelectedArticleText(selection);
      setShowHighlightAction(true);
    } else {
      setShowHighlightAction(false);
    }
  };

  const handleActionOnSelection = (actionType) => {
    let prompt = "";
    if (actionType === "explain") {
      prompt = `Explain this highlighted section in simple terms: "${selectedArticleText}"`;
    } else if (actionType === "summarize") {
      prompt = `Summarize this passage concisely: "${selectedArticleText}"`;
    } else if (actionType === "rewrite") {
      prompt = `Rewrite this selected text to be more concise and punchy: "${selectedArticleText}"`;
    }

    setInputValue(prompt);
    setShowHighlightAction(false);
    toast.success("Text loaded into Side Panel composer!", { icon: "⚡" });
  };

  const handleSend = () => {
    if (!inputValue.trim() || isGenerating) return;

    const userText = inputValue.trim();
    const newMsg = {
      id: `ext-${Date.now()}`,
      sender: "user",
      content: userText,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsGenerating(true);

    setTimeout(() => {
      let reply = "";
      if (userText.toLowerCase().includes("explain")) {
        reply = `**Explanation (${selectedModel.name}):** \nThis passage emphasizes that keeping AI docked beside your active reading window prevents the friction of switching windows, allowing you to stay focused on high-level decisions.`;
      } else if (userText.toLowerCase().includes("summarize")) {
        reply = `**Key Takeaway (${selectedModel.name}):** \nSeamless context synchronization between your browser tab and AI models produces higher quality answers with zero manual copy-pasting.`;
      } else {
        reply = `**${selectedModel.name} Analysis:** \nProcessed using active context from ${simulatedArticle.title}. Everything aligns with best practices for agentic browser workflows.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `ext-${Date.now() + 1}`,
          sender: "assistant",
          content: reply,
        },
      ]);
      setIsGenerating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="cyan" size="md">
                Chrome Side Panel API Concept
              </Badge>
              <Badge variant="default" size="md">
                Manifest V3
              </Badge>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white">
              EchoGPT Browser Companion
            </h1>
            <p className="text-sm sm:text-base text-slate-400 mt-1">
              Simulated interactive Chrome Side Panel (380px) docked alongside an active webpage.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/app">
              <Button variant="outline" size="sm">
                Open Full Web App
              </Button>
            </Link>
            <a
              href="https://chromewebstore.google.com/detail/echogpt-multi-ai-chat-sid/negimdcamohmoheiifgecbjgjepkcfhj"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="accent"
                size="sm"
                leftIcon={<FiChrome className="w-4 h-4 text-cyan-300" />}
              >
                Chrome Web Store
              </Button>
            </a>
          </div>
        </div>

        {/* Realistic Browser Frame Simulation */}
        <div className="rounded-2xl border border-slate-700 bg-slate-950 overflow-hidden shadow-2xl">
          {/* Chrome Browser Navigation Bar */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>

            {/* Address Bar */}
            <div className="flex-1 max-w-xl mx-auto bg-slate-950 border border-slate-800 rounded-lg px-3 py-1 text-slate-400 font-mono text-xs flex items-center justify-between truncate">
              <span className="truncate">{simulatedArticle.url}</span>
              <span className="text-emerald-400 text-[10px] uppercase font-semibold shrink-0 ml-2">
                🔒 Secure
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <span className="text-[11px] font-semibold text-cyan-400 hidden sm:inline">
                Side Panel Active
              </span>
            </div>
          </div>

          {/* Dual Column View: Simulated Webpage (Left) + 380px Side Panel (Right) */}
          <div className="flex flex-col lg:flex-row min-h-[620px]">
            {/* Left: Active Webpage Reader Area */}
            <div
              onMouseUp={handleSelectText}
              className="flex-1 p-6 sm:p-10 bg-slate-900/40 border-b lg:border-b-0 lg:border-r border-slate-800 overflow-y-auto space-y-6 relative"
            >
              {/* Highlight Action Floating Pill */}
              {showHighlightAction && (
                <div className="sticky top-4 z-30 p-2 rounded-xl bg-indigo-950/95 border border-indigo-500/60 shadow-2xl flex items-center gap-2 backdrop-blur-md animate-bounce">
                  <span className="text-xs font-semibold text-white px-2">
                    Selected:
                  </span>
                  <button
                    onClick={() => handleActionOnSelection("explain")}
                    className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium"
                  >
                    Explain Text
                  </button>
                  <button
                    onClick={() => handleActionOnSelection("summarize")}
                    className="px-2.5 py-1 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium"
                  >
                    Summarize
                  </button>
                  <button
                    onClick={() => handleActionOnSelection("rewrite")}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium"
                  >
                    Rewrite
                  </button>
                </div>
              )}

              <div className="space-y-2">
                <Badge variant="cyan" size="sm">
                  Active Article Reader
                </Badge>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                  {simulatedArticle.title}
                </h2>
                <p className="text-xs text-slate-400">
                  By {simulatedArticle.author} • Published {simulatedArticle.date}
                </p>
              </div>

              <div className="space-y-4 text-slate-300 text-sm leading-relaxed select-text border-t border-slate-800 pt-4">
                {simulatedArticle.paragraphs.map((p, idx) => (
                  <p key={idx} className="hover:bg-indigo-500/10 p-2 rounded-lg transition-colors">
                    {p}
                  </p>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-3">
                <FiZap className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  <strong>Tip:</strong> Try selecting any text in the article above to see the EchoGPT contextual action popup in action.
                </span>
              </div>
            </div>

            {/* Right: 380px Chrome Side Panel Frame */}
            <div className="w-full lg:w-[380px] bg-[#090d16] flex flex-col justify-between border-slate-800 shadow-xl">
              {/* Extension Side Panel Header */}
              <div className="p-3.5 bg-slate-950 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    <FiCpu className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-bold text-xs text-white">EchoGPT</span>
                  <span className="text-[10px] text-slate-500 font-mono">v1.0.5</span>
                </div>

                <div className="flex items-center gap-1.5 text-slate-400">
                  <button
                    onClick={() => {
                      setContextEnabled(!contextEnabled);
                      toast(contextEnabled ? "Web context disabled" : "Web context enabled");
                    }}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                      contextEnabled
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-slate-900 text-slate-500 border-slate-800"
                    }`}
                  >
                    Context: {contextEnabled ? "ON" : "OFF"}
                  </button>
                  <button className="p-1 hover:text-white" title="Minimize">
                    <FiMinimize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Model Picker Row */}
              <div className="px-3.5 py-2 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">Model:</span>
                <select
                  value={selectedModel.id}
                  onChange={(e) => {
                    const found = AI_MODELS.find((m) => m.id === e.target.value);
                    if (found) setSelectedModel(found);
                  }}
                  className="bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white focus:outline-none"
                >
                  {AI_MODELS.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.name} ({m.plan})
                    </option>
                  ))}
                </select>
              </div>

              {/* Extension Message Feed */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 min-h-[340px]">
                {messages.map((m, idx) => (
                  <div
                    key={`${m.id || "ext"}-${idx}`}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-xl text-xs leading-relaxed max-w-[95%] shadow-sm ${
                        m.sender === "user"
                          ? "bg-indigo-600 text-white rounded-tr-none whitespace-pre-wrap"
                          : "bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none w-full"
                      }`}
                    >
                      {m.sender === "user" ? (
                        m.content
                      ) : (
                        <MarkdownRenderer content={m.content} className="text-xs space-y-2" />
                      )}
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 animate-pulse">
                    Synthesizing response with {selectedModel.name}...
                  </div>
                )}
              </div>

              {/* Compact Extension Composer */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => setInputValue("Summarize the entire page")}
                    className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 shrink-0"
                  >
                    ⚡ Summarize
                  </button>
                  <button
                    onClick={() => setInputValue("Explain key takeaways")}
                    className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 shrink-0"
                  >
                    🔍 Explain
                  </button>
                  <button
                    onClick={() => setInputValue("Extract quotes")}
                    className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 shrink-0"
                  >
                    📑 Quotes
                  </button>
                </div>

                <div className="flex items-center gap-2 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-1.5 focus-within:border-indigo-500">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask about this page..."
                    className="w-full bg-transparent text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isGenerating}
                    className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 transition-colors"
                  >
                    <FiSend className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
