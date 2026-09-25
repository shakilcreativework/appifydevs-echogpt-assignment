import React from "react";
import { SiOpenai, SiGoogle } from "react-icons/si";
import { FiCpu, FiShield, FiZap, FiLayers, FiChrome } from "react-icons/fi";

export default function TrustStrip() {
  const models = [
    { name: "OpenAI GPT-4o", tag: "Multimodal Frontier" },
    { name: "Anthropic Claude 3.7", tag: "Reasoning & Coding" },
    { name: "Google Gemini 2.5", tag: "1M+ Long Context" },
    { name: "DeepSeek R1", tag: "Chain-of-Thought" },
    { name: "Mistral Large 2", tag: "Precision & Speed" },
  ];

  return (
    <section className="py-10 border-y border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
          Unified Access to World-Class Frontier Intelligence
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {models.map((m) => (
            <div
              key={m.name}
              className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-colors flex flex-col items-center justify-center text-center group"
            >
              <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                {m.name}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-400">
                {m.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Feature Strip */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-wrap items-center justify-around gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <FiZap className="w-4 h-4 text-amber-400" />
            <span>Instant Model Switching</span>
          </div>
          <div className="flex items-center gap-2">
            <FiChrome className="w-4 h-4 text-cyan-400" />
            <span>Chrome Side Panel API</span>
          </div>
          <div className="flex items-center gap-2">
            <FiShield className="w-4 h-4 text-emerald-400" />
            <span>Transparent Web Context</span>
          </div>
          <div className="flex items-center gap-2">
            <FiLayers className="w-4 h-4 text-indigo-400" />
            <span>Zero API Key Setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
