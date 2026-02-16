"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => null,
});

const features = [
  { id: "voice-assistant", label: "Conversational AI", description: "Intelligent voice assistants that understand natural language, context, and intent. Build conversational experiences that feel natural and human-like for customer service and enterprise automation.", stat: "95%", statLabel: "Intent accuracy" },
  { id: "speech-recognition", label: "Speech Recognition", description: "Advanced speech-to-text with high accuracy across 60+ languages and dialects. Real-time transcription optimized for enterprise environments with noise cancellation.", stat: "< 300ms", statLabel: "Transcription latency" },
  { id: "voice-synthesis", label: "Voice Synthesis", description: "Natural-sounding text-to-speech with emotional expression and custom voice cloning. Generate human-like audio for engaging customer interactions at scale.", stat: "24", statLabel: "Voice profiles" },
  { id: "call-automation", label: "Call Automation", description: "Intelligent call center automation that routes calls, handles inquiries, and provides 24/7 support. Reduce wait times and dramatically improve customer satisfaction.", stat: "70%", statLabel: "Call deflection rate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

export default function Hero4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-hero text-hero-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-hero-glow-4/15 rounded-[100%] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--hero-fg)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hero-fg)/0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_50%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hero to-transparent" />
      </div>

      <ParticleField color="hsl(var(--hero-accent-4))" className="opacity-35" />

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <motion.div className="max-w-6xl mx-auto" variants={stagger} initial="hidden" animate="visible">
          <motion.div className="flex items-center gap-4 mb-8" variants={fadeUp}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[04]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">Voice AI</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-end">
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-foreground/[0.04] border border-hero-foreground/[0.08] text-[12px] text-hero-foreground/70 backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Mic className="w-3.5 h-3.5 text-hero-accent-4" />
                  Natural Voice Intelligence
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={fadeUp}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Natural Voice{" "}
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-4-from)), hsl(var(--hero-accent-4)), hsl(var(--hero-gradient-4-to)))' }}>
                    Intelligence
                  </span>
                </h1>
                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like — across every customer touchpoint.
                </p>
              </motion.div>

              <motion.div className="flex flex-col sm:flex-row items-start gap-4 pt-2" variants={fadeUp}>
                <Button size="lg" className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase">
                  Explore Voice AI <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </motion.div>

              {/* Voice waveform */}
              <motion.div className="pt-4" variants={fadeUp}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-none border border-hero-accent-4/30 bg-hero-accent-4/10 flex items-center justify-center">
                    <Mic className="w-4 h-4 text-hero-accent-4" />
                  </div>
                  <div>
                    <p className="text-[13px] text-hero-foreground/60 font-medium">Voice Interface Active</p>
                    <p className="text-[11px] text-hero-foreground/30 font-mono">Listening for commands...</p>
                  </div>
                </div>
                <div className="flex items-end gap-[3px] h-8">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const height = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
                    return (
                      <motion.div
                        key={i}
                        className="w-[3px] bg-hero-accent-4/40 rounded-sm"
                        initial={{ height: 4 }}
                        animate={{ height: [4, height, 4] }}
                        transition={{ duration: 1.5 + Math.random() * 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }}
                      />
                    );
                  })}
                </div>
              </motion.div>

              <motion.div className="pt-2" variants={fadeUp}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Technology</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {["NLP", "Speech-to-Text", "Text-to-Speech", "Voice Cloning", "Sentiment Analysis", "60+ Languages"].map((t) => (
                    <span key={t} className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-4 transition-colors duration-300 cursor-default font-light">{t}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div className="hidden lg:block" variants={fadeUp}>
              <div className="border border-hero-foreground/[0.08] bg-hero-foreground/[0.02] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase">Features</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-4 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-4">Listening</span>
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
                  {features.map((feat, idx) => (
                    <button key={feat.id} onClick={() => setActiveIndex(idx)} onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.04] last:border-b-0 ${
                        idx === activeIndex ? "bg-hero-foreground/[0.06] text-hero-foreground" : "text-hero-foreground/40 hover:bg-hero-foreground/[0.03] hover:text-hero-foreground/60"
                      }`}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/20">0{idx + 1}</span>
                        <span className="text-[13px] font-medium tracking-wide uppercase">{feat.label}</span>
                      </div>
                      {idx === activeIndex && <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-4" />}
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
