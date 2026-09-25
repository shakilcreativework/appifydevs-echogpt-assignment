"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { FiArrowRight, FiChrome, FiCpu } from "react-icons/fi";
import { APP_CONFIG } from "@/lib/constants";

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-900/60 via-slate-900 to-indigo-950/60 border border-indigo-500/30 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center mx-auto text-white shadow-lg shadow-indigo-600/40">
              <FiCpu className="w-6 h-6" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Bring AI Assistance Closer to Your Everyday Workflow
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the clarity of multi-model intelligence with instant webpage context. No complicated setups, no credit cards required to start.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link href="/app" className="w-full sm:w-auto">
                <Button
                  variant="accent"
                  size="lg"
                  rightIcon={<FiArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-xl"
                >
                  Start Chatting Now
                </Button>
              </Link>

              <Link href="/extension" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  leftIcon={<FiChrome className="w-5 h-5 text-cyan-400" />}
                  className="w-full sm:w-auto bg-slate-900/80 border-slate-700"
                >
                  Explore Chrome Side Panel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
