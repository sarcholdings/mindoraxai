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
          <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[02]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">Intelligent Monitoring</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-[12px] text-hero-foreground/70 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Brain className="w-3.5 h-3.5 text-hero-accent-2" />
                  AI-Powered Operations Intelligence
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Predictive{" "}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-2-from)), hsl(var(--hero-accent-2)), hsl(var(--hero-gradient-2-to)))' }}>
                    insights
                  </span>
                  <br className="hidden md:block" />
                  before disruption
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  SOM connects fragmented signals across SAP and supporting layers, highlights
                  which risks need attention first, and helps teams intervene earlier with better
                  context — giving leadership confidence in operational stability.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase">
                  See Key Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div className="pt-6" variants={fadeUp}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Key Features</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Risk Prediction", "GenAI Insights", "KPI Correlation", "Early Watch Alerts", "Noise Control", "Topology Views"].map((t) => (
                    <span key={t} className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-2 transition-colors duration-300 cursor-default font-light">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={fadeUp}>
              <div className="border border-hero-foreground/[0.08] bg-hero-foreground/[0.02] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase">Capabilities</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-2 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-2">Active</span>
                    </div>
                  </div>
                  <div className="h-px bg-hero-foreground/[0.06] mb-6" />
                  <div className="mb-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[28px] font-semibold text-hero-foreground tracking-tight">{active.stat}</span>
                      <span className="text-[11px] font-mono text-hero-foreground/30">{active.statLabel}</span>
                    </div>
                    <p className="text-[14px] text-hero-foreground/50 leading-relaxed font-light">{active.description}</p>
                  </div>
                </div>
                <div className="border-t border-hero-foreground/[0.06]">
                  {capabilities.map((cap, idx) => (
                    <button
                      key={cap.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.04] last:border-b-0 ${
                        idx === activeIndex
                          ? "bg-hero-foreground/[0.06] text-hero-foreground"
                          : "text-hero-foreground/40 hover:bg-hero-foreground/[0.03] hover:text-hero-foreground/60"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/20">0{idx + 1}</span>
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
