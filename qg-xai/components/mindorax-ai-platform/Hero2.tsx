"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

const capabilities = [
  {
    id: "object-detection",
    label: "Object Detection",
    description: "Real-time identification and classification of objects with precision. Perfect for security, retail analytics, and automated quality control.",
    stat: "98.7%",
    statLabel: "Detection accuracy",
  },
  {
    id: "facial-recognition",
    label: "Facial Recognition",
    description: "Secure identity verification with privacy-first architecture. High-accuracy biometric processing for access control and compliance.",
    stat: "< 200ms",
    statLabel: "Recognition speed",
  },
  {
    id: "quality-inspection",
    label: "Quality Inspection",
    description: "Automated defect detection that ensures product consistency across production lines. Reduce errors and increase manufacturing efficiency.",
    stat: "3.2x",
    statLabel: "Throughput improvement",
  },
  {
    id: "scene-understanding",
    label: "Scene Understanding",
    description: "Contextual analysis of complex visual environments. Extract spatial relationships, activities, and semantic meaning from any scene.",
    stat: "40+",
    statLabel: "Scene categories",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Hero2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-hero text-hero-foreground">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-hero-glow-2/15 rounded-[100%] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--hero-fg)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hero-fg)/0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_50%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hero to-transparent" />
      </div>

      <ParticleField color="hsl(var(--hero-accent-2))" className="opacity-35" />

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <motion.div className="max-w-6xl mx-auto" variants={stagger} initial="hidden" animate="visible">
          {/* Section indicator */}
          <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[02]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">Vision AI</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-[12px] text-hero-foreground/70 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Eye className="w-3.5 h-3.5 text-hero-accent-2" />
                  Computer Vision &amp; Image Intelligence
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Advanced{" "}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-2-from)), hsl(var(--hero-accent-2)), hsl(var(--hero-gradient-2-to)))' }}>
                    Vision AI
                  </span>
                  <br className="hidden md:block" />
                  for business
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  Transform visual data into actionable insights with cutting-edge computer
                  vision technology. From object detection to quality control — see what
                  machines can see.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase">
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>

              <motion.div className="pt-6" variants={fadeUp}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Capabilities</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["Object Detection", "OCR", "Facial Recognition", "Scene Analysis", "Quality Control", "Medical Imaging"].map((t) => (
                    <span key={t} className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-2 transition-colors duration-300 cursor-default font-light">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right panel */}
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
