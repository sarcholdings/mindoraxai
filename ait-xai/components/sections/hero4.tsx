"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlassBadge, GlassButtonLink, GlassPanel, GlassCard } from "@/components/ui/glass";

const PortalBackground = dynamic(
  () => import("@/components/three/PortalBackground").then((mod) => mod.PortalBackground),
  { ssr: false }
);

const projectData = [
  {
    id: "voice-assistant",
    title: "Voice Assistant — Conversational AI",
    services: ["Voice AI", "NLP"],
    description: "Intelligent voice assistants that understand natural language and context. Build conversational experiences that feel natural and human-like for customer service and automation.",
    image: "/v1.avif",
  },
  {
    id: "speech-recognition",
    title: "Speech Recognition — Real-Time Transcription",
    services: ["Voice AI", "Speech Processing"],
    description: "Advanced speech recognition technology that converts voice to text with high accuracy. Support for multiple languages and dialects with real-time processing.",
    image: "/v2.avif",
  },
  {
    id: "voice-synthesis",
    title: "Voice Synthesis — Natural Text-to-Speech",
    services: ["Voice AI", "TTS"],
    description: "Natural-sounding text-to-speech systems that generate human-like voices. Custom voice cloning and emotional expression for engaging audio experiences.",
    image: "/v3.avif",
  },
  {
    id: "call-automation",
    title: "Call Automation — Intelligent Routing",
    services: ["Voice AI", "Automation"],
    description: "Intelligent call center automation that routes calls, handles inquiries, and provides 24/7 customer support. Reduce wait times and improve customer satisfaction.",
    image: "/v4.png",
  },
];

const fadeUpBlur = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function Hero4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLightTheme = activeIndex === 0;

  return (
    <section className={`relative w-full h-screen min-h-[800px] overflow-hidden ${
      isLightTheme ? "bg-white" : "bg-black"
    } text-white`}>
      {/* Cosmic Portal Background - Purple for Voice AI */}
      <PortalBackground
        colorCore="#FFFFFF"
        colorMid="#c084fc"
        colorOuter="#7c3aed"
      />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-[720px] space-y-8" variants={fadeUpBlur}>
            <motion.div variants={fadeUpBlur}>
              <div className={`inline-block px-4 py-1.5 rounded-full border backdrop-blur-md ${
                isLightTheme
                  ? "border-[rgba(255,255,255,0.6)] bg-[rgba(255,255,255,0.4)]"
                  : "glass-panel"
              }`}>
                <span className={`text-[12px] font-medium tracking-wide uppercase ${
                  isLightTheme ? "text-[#160D1F]" : "text-white"
                }`}>
                  🌟 Voice AI Technology
                </span>
              </div>
            </motion.div>

            <h1 className={`text-5xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight drop-shadow-sm ${
              isLightTheme ? "text-[#160D1F]" : "text-white"
            }`}>
              Natural Voice <br /> <span className="gradient-brand">Intelligence</span>
            </h1>

            <p className={`text-lg lg:text-xl max-w-[540px] leading-relaxed ${
              isLightTheme ? "text-[#4D4D4D]" : "text-white/90"
            }`}>
              Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like.
            </p>

            {/* Chat UI Mockup - Only for Voice Assistant */}
            {activeIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[600px] h-[280px] rounded-[24px] border border-white/60 bg-white/20 backdrop-blur-[24px] shadow-2xl overflow-hidden mt-4"
              >
                {/* Floating decorations */}
                <div className="absolute top-6 right-6 animate-bounce">
                  <div className="w-16 h-16 bg-purple-500/30 rounded-lg backdrop-blur-sm" />
                </div>
                <div className="absolute bottom-6 left-6 animate-bounce delay-700">
                  <div className="w-12 h-12 bg-cyan-500/30 rounded-full backdrop-blur-sm" />
                </div>

                {/* Chat interface */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full max-w-[480px] flex flex-col gap-3">
                    {/* User message */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="flex items-end justify-end gap-2 self-end max-w-[85%]"
                    >
                      <div className="px-4 py-2 rounded-[20px] rounded-br-[4px] bg-white border border-white/80 shadow-sm text-[#0D0D0D] text-[13px]">
                        How can I set up voice commands?
                      </div>
                    </motion.div>

                    {/* Bot message */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="flex items-start gap-2 self-start max-w-[85%]"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#9D59FF] flex items-center justify-center text-white shadow-lg">
                        🤖
                      </div>
                      <div className="px-4 py-2 rounded-[20px] rounded-bl-[4px] bg-[#160D1F] text-white shadow-xl text-[13px]">
                        I'll help you integrate voice commands! Our Voice AI understands natural language.
                      </div>
                    </motion.div>

                    {/* Input mockup */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.6 }}
                      className="mt-3 px-4 py-2 rounded-xl bg-white/40 border border-white/60 backdrop-blur-md flex items-center justify-between text-[#4D4D4D] text-[12px]"
                    >
                      <span>Speak or type...</span>
                      <div className="px-2 py-1 bg-white/60 rounded-lg text-[10px] border border-white/80">Voice AI</div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={fadeUpBlur}>
              <GlassButtonLink href="/contact" variant="primary">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </GlassButtonLink>
              <GlassButtonLink href="/services" variant="outline">
                Explore Voice AI
              </GlassButtonLink>
            </motion.div>
          </motion.div>

          <GlassPanel className="lg:w-[420px] lg:mb-4">
            <div className="mb-10 min-h-[140px]">
              <div className="flex items-center gap-3 mb-3">
                {projectData[activeIndex].services.map((service, i) => (
                  <React.Fragment key={service}>
                    <span className="text-[14px] font-medium text-white/70">{service}</span>
                    {i < projectData[activeIndex].services.length - 1 && (
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="text-[18px] leading-snug text-white font-normal mb-8">
                {projectData[activeIndex].description}
              </p>
              <div className="w-full h-[180px] relative rounded-xl overflow-hidden mb-8 border border-white/10">
                <Image
                  src={projectData[activeIndex].image}
                  alt={projectData[activeIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <motion.ul className="space-y-3" variants={staggerContainer}>
              {projectData.map((project, index) => (
                <motion.li key={project.id} variants={fadeUpBlur}>
                  <GlassCard
                    hover={true}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left py-3 px-4 cursor-pointer transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-white/10 border-white/30 shadow-lg shadow-purple-500/10"
                        : "bg-white/5 border-white/10 hover:bg-white/8"
                    }`}
                  >
                    <span className="text-[14px] font-medium tracking-wide uppercase block">
                      {project.title}
                    </span>
                  </GlassCard>
                </motion.li>
              ))}
            </motion.ul>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
