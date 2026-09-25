"use client";

import React from "react";
import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ModelShowcase from "@/components/landing/ModelShowcase";
import ProductPreview from "@/components/landing/ProductPreview";
import WhyEchoGPT from "@/components/landing/WhyEchoGPT";
import PricingSection from "@/components/landing/PricingSection";
import FaqAccordion from "@/components/landing/FaqAccordion";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CtaBanner from "@/components/landing/CtaBanner";
import Footer from "@/components/shared/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] text-slate-100 overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <FeaturesSection />
        <ModelShowcase />
        <ProductPreview />
        <WhyEchoGPT />
        <PricingSection />
        <TestimonialsSection />
        <FaqAccordion />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
