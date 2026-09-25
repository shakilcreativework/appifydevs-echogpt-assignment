"use client";

import React, { useState } from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import {
  FiLayout,
  FiChrome,
  FiCpu,
  FiFileText,
  FiSend,
  FiExternalLink,
  FiCopy,
  FiRefreshCw,
  FiThumbsUp,
  FiCheck,
} from "react-icons/fi";

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState("webapp"); // 'webapp' | 'extension'
  const [copied, setCopied] = useState(false);

  return (
    <section id="preview" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="purple" size="md">
            Visual Experience
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designed for Desktop & Browser Side Panel
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience EchoGPT in your preferred workflow: as an expansive full-screen workspace, or docked right beside your browser tabs.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 mt-4">
            <button
              type="button"
              onClick={() => setActiveTab("webapp")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "webapp"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FiLayout className="w-4 h-4" />
              <span>Full Web App Workspace</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("extension")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === "extension"
                  ? "bg-cyan-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FiChrome className="w-4 h-4" />
              <span>Chrome Side Panel (380px)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Web App Preview */}
        {activeTab === "webapp" && (
          <div className="rounded-2xl border border-slate-700/80 bg-slate-950 p-2 sm:p-4 shadow-2xl">
            <div className="rounded-xl border border-slate-800 bg-[#090d16] overflow-hidden flex flex-col md:flex-row min-h-[520px]">
              {/* Mock Sidebar */}
              <div className="w-full md:w-64 bg-slate-900/90 border-r border-slate-800 p-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <span className="font-bold text-sm text-white">EchoGPT</span>
                    <Badge variant="cyan" size="sm">
                      Pro
                    </Badge>
                  </div>
                  <button className="w-full py-2 px-3 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold hover:bg-indigo-600 hover:text-white transition-all text-left">
                    + New Conversation
                  </button>

                  <div className="space-y-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block px-2">
                      Recent Chats
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/80 text-xs text-white font-medium truncate">
                      Next.js Architecture Analysis
                    </div>
                    <div className="p-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800/40 truncate">
                      Post-Quantum Cryptography
                    </div>
                    <div className="p-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800/40 truncate">
                      TechCrunch Funding Summary
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-[10px] flex items-center justify-center text-white font-bold">
                      AV
                    </div>
                    <span>Alex Vance</span>
                  </div>
                  <Badge variant="success" size="sm">
                    Synced
                  </Badge>
                </div>
              </div>

              {/* Main Chat View */}
              <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 bg-[#090d16]">
                {/* Chat Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-sm sm:text-base text-white">
                      Next.js Architecture Analysis
                    </h4>
                    <Badge variant="primary" size="sm">
                      Claude 3.7 Sonnet
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Web Context: On
                    </span>
                  </div>
                </div>

                {/* Conversation Stream */}
                <div className="space-y-4 py-4">
                  <div className="flex justify-end">
                    <div className="max-w-md bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-xs sm:text-sm">
                      Compare Server vs Client Components performance with 200k DOM nodes.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-amber-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      C3
                    </div>
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-sm p-4 text-xs sm:text-sm text-slate-200 space-y-2 max-w-xl">
                      <p>
                        With large node graphs, Server Components provide a ~40% reduction in Time to Interactive (TTI) because hydration work is bypassed entirely for static subtrees.
                      </p>
                      <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
                        <button
                          onClick={() => {
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000);
                          }}
                          className="hover:text-white flex items-center gap-1"
                        >
                          {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />} Copy
                        </button>
                        <button className="hover:text-white flex items-center gap-1">
                          <FiRefreshCw /> Regenerate
                        </button>
                        <button className="hover:text-white flex items-center gap-1">
                          <FiThumbsUp /> Helpful
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Composer Dock */}
                <div className="pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3">
                    <span className="text-slate-400 text-xs sm:text-sm flex-1">
                      Ask anything with Claude 3.7...
                    </span>
                    <Link href="/app">
                      <Button variant="accent" size="sm">
                        Open Full App
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Chrome Extension Side Panel Preview */}
        {activeTab === "extension" && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 py-6">
            {/* Browser Mockup with docked Side Panel */}
            <div className="w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl">
              <div className="h-9 px-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2">Chrome Browser — Active Tab</span>
                </div>
                <span className="text-cyan-400 flex items-center gap-1">
                  <FiChrome /> Side Panel Docked (380px)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row h-[480px]">
                {/* Simulated Webpage in browser */}
                <div className="flex-1 bg-slate-900/50 p-6 overflow-y-auto border-r border-slate-800 space-y-4">
                  <Badge variant="cyan" size="sm">
                    Simulated Active Webpage
                  </Badge>
                  <h3 className="text-lg font-bold text-white">
                    The Next Wave of Agentic Software Engineering
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    AI coding agents are transforming developer productivity by understanding multi-file contexts, resolving compiler diagnostics in real time, and maintaining consistent architectural hygiene across complex codebases...
                  </p>
                  <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-300">
                    💡 Highlighted text automatically triggers the EchoGPT Side Panel popup.
                  </div>
                </div>

                {/* Docked 380px Side Panel */}
                <div className="w-full sm:w-[360px] bg-[#090d16] p-4 flex flex-col justify-between border-t sm:border-t-0 border-slate-800">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <span className="font-bold text-xs text-white flex items-center gap-1.5">
                        <FiChrome className="text-cyan-400" /> EchoGPT Companion
                      </span>
                      <Badge variant="primary" size="sm">
                        GPT-4o
                      </Badge>
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 flex items-center justify-between">
                      <span className="truncate">Page: Next Wave of Agentic...</span>
                      <span className="text-emerald-400 text-[10px]">Context ON</span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase">
                        Quick Actions
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button className="p-1.5 text-[11px] rounded bg-slate-900 hover:bg-slate-800 text-slate-200 text-left border border-slate-800">
                          ⚡ Summarize
                        </button>
                        <button className="p-1.5 text-[11px] rounded bg-slate-900 hover:bg-slate-800 text-slate-200 text-left border border-slate-800">
                          🔍 Explain
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800">
                    <Link href="/extension">
                      <Button variant="accent" size="sm" className="w-full text-xs">
                        Open Full Extension Demo
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
