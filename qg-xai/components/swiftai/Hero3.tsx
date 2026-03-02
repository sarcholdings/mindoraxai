"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const milestones = [
  { id: "critical-window", label: "2026 — Critical Window", description: "2026–2027 is the critical window for finalizing monitoring strategy. Organizations must act now to avoid the SolMan support cliff and ensure continuity.", stat: "2026", statLabel: "Decision year" },
  { id: "mainstream-end", label: "Mainstream Support Ends", description: "SolMan mainstream support ends December 31, 2027. After this date, no new features, patches, or standard maintenance — only extended support at premium cost.", stat: "Dec '27", statLabel: "Hard deadline" },
  { id: "market-opportunity", label: "20K–44K Orgs at Risk", description: "With 400,000+ SAP customers globally, 5–10% running complex on-prem/hybrid landscapes represents 20,000–44,000 organizations needing a migration path.", stat: "44K", statLabel: "Organizations affected" },
  { id: "strategic-imperative", label: "Bridge the Gap", description: "Organizations need solutions that deliver Focused Run capabilities without the associated cost and complexity burden. SOM bridges this gap at mid-market pricing.", stat: "60%", statLabel: "Lower TCO vs FRUN" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Hero3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = milestones[activeIndex];

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
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[03]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">SolMan Support Cliff</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-[12px] text-hero-foreground/70 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <AlertTriangle className="w-3.5 h-3.5 text-hero-accent-3" />
                  Monitoring Stack Replacement Is Mandatory
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  The SolMan{" "}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-3-from)), hsl(var(--hero-accent-3)), hsl(var(--hero-gradient-3-to)))' }}>
                    support cliff
                  </span>
                  <br className="hidden md:block" />
                  is here
                </h1>
                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  With mainstream support ending Dec 2027 and extended support only buying time until 2030,
                  every SAP organization faces a critical decision: Cloud ALM, Focused Run, or a smarter
                  third-party alternative.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase">
                  Compare Options <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase">
                  View Timeline <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div className="pt-6" variants={fadeUp}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Key Factors</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Hard Deadline", "Dual-Path Dilemma", "400K+ Customers", "Cost Burden", "Migration Risk", "Enterprise-Grade"].map((t) => (
                    <span key={t} className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-3 transition-colors duration-300 cursor-default font-light">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={fadeUp}>
              <div className="border border-hero-foreground/[0.08] bg-hero-foreground/[0.02] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase">Timeline</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-3 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-3">Urgent</span>
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
                  {milestones.map((m, idx) => (
                    <button key={m.id} onClick={() => setActiveIndex(idx)} onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.04] last:border-b-0 ${
                        idx === activeIndex ? "bg-hero-foreground/[0.06] text-hero-foreground" : "text-hero-foreground/40 hover:bg-hero-foreground/[0.03] hover:text-hero-foreground/60"
                      }`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/20">0{idx + 1}</span>
                        <span className="text-[13px] font-medium tracking-wide uppercase">{m.label}</span>
                      </div>
                      {idx === activeIndex && <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-3" />}
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
