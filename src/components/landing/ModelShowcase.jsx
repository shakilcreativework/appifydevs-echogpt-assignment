"use client";

import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { AI_MODELS, MODEL_CATEGORIES } from "@/data/models";
import { useApp } from "@/context/AppContext";
import { FiCpu, FiCheck, FiZap, FiArrowRight } from "react-icons/fi";

export default function ModelShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All Models");
  const { selectModel } = useApp();

  const filteredModels =
    selectedCategory === "All Models"
      ? AI_MODELS
      : AI_MODELS.filter((m) => m.category === selectedCategory);

  return (
    <section id="models" className="py-20 sm:py-28 bg-[#070b13]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Badge variant="cyan" size="md">
            Model Hub
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Curated Frontier AI Models
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the best model for your specific goal—whether you need deep math reasoning, rapid coding, or long-document analysis.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {MODEL_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 scale-105"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Model Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((model) => (
            <Card
              key={model.id}
              hover
              className="bg-slate-900/70 border-slate-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl ${model.avatarBg} flex items-center justify-center text-white font-bold shadow-md`}
                    >
                      <FiCpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                        {model.name}
                      </h3>
                      <span className="text-xs text-slate-400">{model.provider}</span>
                    </div>
                  </div>

                  <Badge
                    variant={model.plan === "Pro" ? "pro" : "success"}
                    size="sm"
                  >
                    {model.plan}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed min-h-[48px]">
                  {model.description}
                </p>

                {/* Key Strengths */}
                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Key Strengths:
                  </span>
                  {model.strengths.map((str, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 text-xs text-slate-300"
                    >
                      <FiCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{str}</span>
                    </div>
                  ))}
                </div>

                {/* Specs */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <FiZap className="text-amber-400" /> {model.speed}
                  </span>
                  <span>Context: {model.contextWindow}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-4 border-t border-slate-800">
                <Link
                  href="/app"
                  onClick={() => selectModel(model)}
                  className="w-full block"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs justify-between group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all"
                    rightIcon={<FiArrowRight />}
                  >
                    Start Chatting with {model.name.split(" ")[0]}
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
