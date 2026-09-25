import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { FiCheck, FiX, FiZap, FiCheckCircle } from "react-icons/fi";

export default function WhyEchoGPT() {
  const comparisons = [
    {
      feature: "Multi-Model Switching",
      echogpt: "Instant 1-click model switching within same conversation thread",
      traditional: "Opening separate browser tabs, repeated logins, lost context",
    },
    {
      feature: "Active Webpage Context",
      echogpt: "Native DOM context injection via Chrome Side Panel",
      traditional: "Manual copy-pasting, messy text chunks, token overflows",
    },
    {
      feature: "Selected Text Actions",
      echogpt: "One-click highlight popups (Explain, Summarize, Rewrite)",
      traditional: "Highlight, copy, switch tab, paste, write prompt, send",
    },
    {
      feature: "Model Diversity",
      echogpt: "OpenAI, Claude, Gemini, DeepSeek & Mistral under one roof",
      traditional: "Restricted to a single proprietary vendor or silo",
    },
    {
      feature: "Workflow Ergonomics",
      echogpt: "Runs beside active tabs without hiding underlying research",
      traditional: "Constant window switching and loss of concentration",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#070b13]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="success" size="md">
            The EchoGPT Advantage
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Professionals Choose EchoGPT
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Stop losing your train of thought between disconnected AI providers and endless browser tabs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl">
          <div className="grid grid-cols-12 bg-slate-950 p-4 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <div className="col-span-4 sm:col-span-4">Capability</div>
            <div className="col-span-4 sm:col-span-4 text-cyan-400 flex items-center gap-1.5">
              <FiCheckCircle className="text-cyan-400" /> EchoGPT
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500">
              Fragmented Workflows
            </div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 text-xs sm:text-sm items-center hover:bg-slate-900/80 transition-colors"
              >
                <div className="col-span-4 font-semibold text-slate-200">
                  {item.feature}
                </div>
                <div className="col-span-4 text-slate-100 flex items-start gap-2 pr-2">
                  <FiCheck className="text-emerald-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.echogpt}</span>
                </div>
                <div className="col-span-4 text-slate-400 flex items-start gap-2">
                  <FiX className="text-rose-400 w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.traditional}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
