"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import {
  FiArrowRight,
  FiChrome,
  FiCpu,
  FiFileText,
  FiSend,
  FiCheck,
  FiCopy,
  FiZap,
} from "react-icons/fi";
import { AI_MODELS } from "@/data/models";

export default function Hero() {
  const [activeModel, setActiveModel] = useState(AI_MODELS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow */}
      <div className="hero-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-inner"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>EchoGPT 2.0 Ecosystem Redesign</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">Next.js & Pure JavaScript</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            One AI Workspace.{" "}
            <span className="gradient-accent-text block sm:inline">
              Every Perspective.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Switch between GPT-4o, Claude 3.7, Gemini 2.5 Pro, and DeepSeek in one
            focused interface. Understand active webpages and compare answers
            without tab chaos.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <Link href="/app" className="w-full sm:w-auto">
              <Button
                variant="accent"
                size="lg"
                rightIcon={<FiArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-indigo-500/30 shadow-xl"
              >
                Start Chatting Free
              </Button>
            </Link>

            <Link href="/extension" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<FiChrome className="w-5 h-5 text-cyan-400" />}
                className="w-full sm:w-auto border-slate-700 bg-slate-900/80"
              >
                Explore Chrome Side Panel
              </Button>
            </Link>
          </motion.div>

          {/* Value Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs text-slate-400"
          >
            <span className="inline-flex items-center gap-1.5">
              <FiCheck className="text-emerald-400 w-4 h-4" /> No API Keys Required
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiCheck className="text-emerald-400 w-4 h-4" /> 6+ Frontier AI Models
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiCheck className="text-emerald-400 w-4 h-4" /> Real-time Web Context
            </span>
          </motion.div>
        </div>

        {/* Hero Interactive Workspace Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-1.5 sm:p-2.5 bg-gradient-to-b from-indigo-500/30 via-slate-800/40 to-slate-900/60 shadow-2xl shadow-indigo-950/50 border border-white/10">
            <div className="rounded-xl bg-[#0b101b] border border-slate-800 overflow-hidden shadow-2xl">
              {/* Window Titlebar */}
              <div className="h-11 px-4 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
                    echogpt.live/workspace
                  </span>
                </div>

                {/* Model Selector Bar inside Mockup */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                  {AI_MODELS.slice(0, 4).map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModel(model)}
                      className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${
                        activeModel.id === model.id
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                      }`}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Simulation Area */}
              <div className="p-4 sm:p-6 space-y-4 text-left">
                {/* Context Banner */}
                <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/80 border border-indigo-500/20 text-xs">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <FiFileText className="text-cyan-400 shrink-0" />
                    <span className="text-slate-400">Active Web Context:</span>
                    <span className="text-slate-200 font-mono truncate">
                      nextjs.org/docs/rendering
                    </span>
                  </div>
                  <Badge variant="cyan" size="sm">
                    Context Synced
                  </Badge>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-xl bg-indigo-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm shadow-md">
                    Summarize key differences between Next.js Server Components and Client Components based on this documentation page.
                  </div>
                </div>

                {/* Assistant Message with active model */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center shrink-0 text-white font-bold text-xs shadow-md">
                    <FiCpu className="w-4 h-4" />
                  </div>
                  <div className="flex-1 max-w-2xl bg-slate-900/90 border border-slate-800 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white text-xs">
                          {activeModel.name}
                        </span>
                        <Badge variant="primary" size="sm">
                          {activeModel.provider}
                        </Badge>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        {copied ? (
                          <>
                            <FiCheck className="text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <FiCopy /> Copy
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                      Based on the live documentation, React Server Components (RSC) execute exclusively on the server, producing zero client JavaScript bundle overhead. Client Components with <code className="bg-slate-800 px-1.5 py-0.5 rounded text-cyan-300">{"'use client'"}</code> are reserved for interactive events, browser APIs, and state hooks.
                    </p>

                    <div className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 font-mono text-xs text-slate-300 flex items-center justify-between">
                      <span>✓ Analyzed 1,420 words from webpage in 240ms</span>
                      <span className="text-indigo-400 flex items-center gap-1">
                        <FiZap className="w-3 h-3" /> {activeModel.speed}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mock Composer */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5">
                    <span className="text-slate-500 text-xs sm:text-sm flex-1">
                      Ask {activeModel.name} about this page...
                    </span>
                    <Link href="/app">
                      <button className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors">
                        <FiSend className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
