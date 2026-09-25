"use client";

import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { TESTIMONIALS } from "@/data/testimonials";
import { FiMessageSquare, FiStar } from "react-icons/fi";

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-slate-950/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="cyan" size="md">
            User Feedback (Demo Concept)
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Loved by Developers & Researchers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            See how early adopters streamline their technical workflows with EchoGPT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <Card
              key={t.id}
              hover
              className="bg-slate-900/60 border-slate-800 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Badge variant="default" size="sm">
                    {t.highlight}
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/40"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">
                    {t.author}
                  </h4>
                  <p className="text-[11px] text-slate-400">{t.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
