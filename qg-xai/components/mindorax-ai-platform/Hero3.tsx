"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

const solutions = [
  { id: "enterprise-deployment", label: "Enterprise Deployment", description: "Enterprise-ready LLM deployment with auto-scaling, high availability, and robust security. Built for mission-critical applications with 99.99% uptime SLA.", stat: "99.99%", statLabel: "Uptime SLA" },
  { id: "custom-models", label: "Custom Fine-Tuning", description: "Fine-tuned language models trained on your specific industry data. Achieve superior accuracy and relevance for your unique business use cases.", stat: "85%", statLabel: "Accuracy improvement" },
  { id: "data-sovereignty", label: "Data Sovereignty", description: "Full control over your data with on-premise and private cloud deployment options. Zero data leakage with air-gapped architectures for regulated industries.", stat: "0", statLabel: "Data leaves your network" },
  { id: "model-orchestration", label: "Model Orchestration", description: "Intelligent routing across multiple LLMs based on task complexity, cost, and latency requirements. Optimize performance and spend simultaneously.", stat: "60%", statLabel: "Cost reduction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Hero3() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-hero text-hero-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-hero-glow-3/15 rounded-[100%] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--hero-fg)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hero-fg)/0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_50%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hero to-transparent" />
      </div>

      <ParticleField color="hsl(var(--hero-accent-3))" className="opacity-35" />

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <motion.div className="max-w-6xl mx-auto" variants={stagger} initial="hidden" animate="visible">
          <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[03]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">Private LLMs</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-[12px] text-hero-foreground/70 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Shield className="w-3.5 h-3.5 text-hero-accent-3" />
                  Secure On-Premise Language Models
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Enterprise{" "}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-3-from)), hsl(var(--hero-accent-3)), hsl(var(--hero-gradient-3-to)))' }}>
                    Private LLMs
                  </span>
                  <br className="hidden md:block" />
                  zero data leaks
                </h1>
                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  Deploy secure, on-premise language models that protect your most sensitive data while delivering enterprise-grade AI capabilities. Full control over your AI infrastructure.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase">
                  View Solutions <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div className="pt-6" variants={fadeUp}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Infrastructure</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["On-Premise", "Air-Gapped", "Fine-Tuning", "RAG Pipelines", "Model Routing", "GPU Clusters"].map((t) => (
                    <span key={t} className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-3 transition-colors duration-300 cursor-default font-light">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={fadeUp}>
              <div className="border border-hero-foreground/[0.08] bg-hero-foreground/[0.02] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase">Solutions</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-3 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-3">Secure</span>
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
                  {solutions.map((sol, idx) => (
                    <button key={sol.id} onClick={() => setActiveIndex(idx)} onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.04] last:border-b-0 ${
                        idx === activeIndex ? "bg-hero-foreground/[0.06] text-hero-foreground" : "text-hero-foreground/40 hover:bg-hero-foreground/[0.03] hover:text-hero-foreground/60"
                      }`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/20">0{idx + 1}</span>
                        <span className="text-[13px] font-medium tracking-wide uppercase">{sol.label}</span>
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
