"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { LANDING_FEATURES } from "@/data/features";
import {
  FiCpu,
  FiFileText,
  FiMousePointer,
  FiColumns,
  FiSidebar,
  FiBookmark,
} from "react-icons/fi";

const iconMap = {
  FiCpu: FiCpu,
  FiFileText: FiFileText,
  FiMousePointer: FiMousePointer,
  FiColumns: FiColumns,
  FiSidebar: FiSidebar,
  FiBookmark: FiBookmark,
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="primary" size="md">
            Product Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Focused,{" "}
            <span className="text-cyan-400">Contextual Productivity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            EchoGPT bridges the gap between browser tabs and AI reasoning. Everything you need is one click away.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LANDING_FEATURES.map((feature) => {
            const IconComponent = iconMap[feature.icon] || FiCpu;
            return (
              <Card
                key={feature.id}
                hover
                glow
                className="group relative overflow-hidden bg-slate-900/50 border-slate-800 flex flex-col justify-between"
              >
                {/* Subtle Card Background Accent */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 rounded-full bg-gradient-to-br ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-indigo-600 transition-all duration-200 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="default" size="sm">
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span>Learn more</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
