"use client";

import React, { useState } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PRICING_PLANS } from "@/data/pricing";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section id="pricing" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pro" size="md">
            Simple & Transparent
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Plans for Individuals & Power Users
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Start free with essential models and contextual browser assistance, or unlock uncapped frontier reasoning with Pro.
          </p>

          {/* Product pricing disclaimer conforming to PRD Section 25 */}
          <p className="text-xs text-slate-500 font-mono">
            * Reflects live EchoGPT product offering (monthly USD $9.99).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              hover
              glow={plan.highlight}
              className={`flex flex-col justify-between p-6 sm:p-8 relative ${
                plan.highlight
                  ? "bg-gradient-to-b from-indigo-950/60 to-slate-900 border-indigo-500/50 shadow-2xl shadow-indigo-950/40 ring-1 ring-indigo-500/30"
                  : "bg-slate-900/60 border-slate-800"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 right-6">
                  <Badge variant="pro" size="sm" className="shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1.5 pb-4 border-b border-slate-800">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400">
                    /{plan.billingPeriod}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Included Capabilities:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                      >
                        <FiCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800">
                <Link href={plan.ctaLink} className="w-full block">
                  <Button
                    variant={plan.highlight ? "accent" : "outline"}
                    size="lg"
                    className="w-full"
                    rightIcon={<FiArrowRight />}
                  >
                    {plan.ctaText}
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
