"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import Badge from "@/components/ui/Badge";
import {
  FiCpu,
  FiFileText,
  FiCode,
  FiHelpCircle,
  FiEdit3,
  FiLayers,
} from "react-icons/fi";

export default function EmptyState({ onSelectPrompt }) {
  const { selectedModel, webContextEnabled, activeWebpage } = useApp();

  const starterPrompts = [
    {
      title: "Summarize Web Context",
      description: "Extract the core arguments and action points from the active page.",
      prompt: "Summarize the key takeaways and architectural conclusions from this page.",
      icon: FiFileText,
      color: "text-emerald-400",
    },
    {
      title: "Explain Complex Logic",
      description: "Break down difficult concepts into plain, intuitive analogies.",
      prompt: "Explain how React Server Components streaming works with a simple analogy.",
      icon: FiHelpCircle,
      color: "text-cyan-400",
    },
    {
      title: "Code Review & Optimize",
      description: "Spot hidden performance bottlenecks, edge-cases, and anti-patterns.",
      prompt: "Review this JavaScript function and provide an optimized, memoized version.",
      icon: FiCode,
      color: "text-indigo-400",
    },
    {
      title: "Compare Perspectives",
      description: "Weigh trade-offs between different technical implementations.",
      prompt: "Compare monolithic Next.js deployments vs micro-frontends for our team.",
      icon: FiLayers,
      color: "text-amber-400",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-2xl mx-auto my-auto space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-xl shadow-indigo-600/30">
        <FiCpu className="w-7 h-7" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Badge variant="primary" size="md">
            Ready with {selectedModel.name}
          </Badge>
          {webContextEnabled && (
            <Badge variant="success" size="md">
              Web Context Active
            </Badge>
          )}
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          How can EchoGPT help you today?
        </h3>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Ask questions, analyze webpages, draft code, or switch between models on the fly.
        </p>
      </div>

      {/* Suggested Starter Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left pt-2">
        {starterPrompts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectPrompt(item.prompt)}
              className="p-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-indigo-500/40 text-left transition-all group shadow-sm active:scale-98"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span className="font-semibold text-xs text-white group-hover:text-indigo-300 transition-colors">
                  {item.title}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
