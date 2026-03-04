"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const capabilities = [
  {
    id: "system-health",
    label: "System Health & Risk Prediction",
    description: "Provides early visibility into rising operational risk before issues affect business continuity. Detects slow-building problems before they become visible failures.",
    stat: "24/7",
    statLabel: "Continuous monitoring",
  },
  {
    id: "genai-insights",
    label: "GenAI-Assisted Insights",
    description: "Helps turn complex monitoring data into clearer, faster-to-understand operational insights. Reduces expert dependency and accelerates root-cause analysis.",
    stat: "10x",
    statLabel: "Faster analysis",
  },
  {
    id: "kpi-dashboards",
    label: "KPI Dashboards & Forecasting",
    description: "Brings key indicators into one view, showing current status, connected signals, and likely future risk trends across your entire SAP landscape.",
    stat: "1,100+",
    statLabel: "KPIs tracked",
  },
  {
    id: "anomaly-detection",
    label: "Anomaly Detection",
    description: "Identifies unusual behavior early, including risks that may not yet appear in standard alerting. Uses ML to learn your system's baseline patterns.",
    stat: "< 5min",
    statLabel: "Detection latency",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Hero2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden text-hero-foreground">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/vYZYM5P9vKTxjyMntDIvdSTX7sE.webp?width=2400&height=1368"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <motion.div className="max-w-6xl mx-auto" variants={stagger} initial="hidden" animate="visible">
            <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-center">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.06] border border-hero-foreground/[0.12] text-[12px] text-hero-foreground/80 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Brain className="w-3.5 h-3.5 text-hero-accent-2" />
                  AI-Powered Operations Intelligence
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-[#FFFFFF]">
                  Predictive insights
                  <br className="hidden md:block" />
                  <span className="hero-heading-gradient">before disruption</span>
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/75 max-w-2xl leading-relaxed font-normal">
                  SwiftAI PRISM connects fragmented signals across SAP and supporting layers, highlights
                  which risks need attention first, and helps teams intervene earlier with better
                  context — giving leadership confidence in operational stability.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-[#FF6F61] text-white font-semibold rounded-full hover:bg-[#DE4B3A] hover:shadow-lg hover:shadow-[#FF6F61]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Key Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-white/25 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('platform-overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={fadeUp}>
              <div className="border border-hero-foreground/[0.12] bg-hero-foreground/[0.04] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/65 uppercase">Capabilities</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-2 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-2">Active</span>
                    </div>
                  </div>
                  <div className="h-px bg-hero-foreground/[0.1] mb-6" />
                  <div className="mb-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[28px] font-semibold text-hero-foreground tracking-tight">{active.stat}</span>
                      <span className="text-[11px] font-mono text-hero-foreground/65">{active.statLabel}</span>
                    </div>
                    <p className="text-[14px] text-hero-foreground/80 leading-relaxed">{active.description}</p>
                  </div>
                </div>
                <div className="border-t border-hero-foreground/[0.1]">
                  {capabilities.map((cap, idx) => (
                    <button
                      key={cap.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.08] last:border-b-0 ${
                        idx === activeIndex
                          ? "bg-hero-foreground/[0.1] text-hero-foreground"
                          : "text-hero-foreground/70 hover:bg-hero-foreground/[0.08] hover:text-hero-foreground/90"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/50">0{idx + 1}</span>
                        <span className="text-[13px] font-medium tracking-wide uppercase">{cap.label}</span>
                      </div>
                      {idx === activeIndex && <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-2" />}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
