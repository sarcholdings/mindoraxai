"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { GlassBadge, GlassButtonLink, GlassPanel, GlassCard } from "@/components/ui/glass";

// Lazy load Three.js portal background for performance
const PortalBackground = dynamic(
  () => import("@/components/three/PortalBackground").then((mod) => mod.PortalBackground),
  { ssr: false }
);

/**
 * Hero component with interactive Three.js particle background.
 * Features glassmorphism design and smooth entrance animations.
 */

const projectData = [
  {
    id: "private-llms",
    title: "Private LLMs — Enterprise Intelligence",
    services: ["Private LLMs", "AI Infrastructure"],
    description: "Deploy secure, on-premise language models that protect sensitive data while delivering enterprise-grade AI capabilities. Custom-trained models for your specific domain.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/u3nH40BXnXGuvt2HcEa11xbaag-4.jpg",
  },
  {
    id: "vision-ai",
    title: "Vision AI — Image Recognition",
    services: ["Vision AI", "Computer Vision"],
    description: "Advanced image analysis and recognition systems that understand context, detect objects, and extract meaningful insights from visual data at scale.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/XdRM8ESxgDfBjm1f3rYrQs81JCM-3.jpg",
  },
  {
    id: "voice-ai",
    title: "Voice AI — Natural Language",
    services: ["Voice AI", "NLP"],
    description: "Intelligent voice interfaces that understand context, intent, and emotion. Build conversational experiences that feel natural and human-like.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/RQYRGYX9933aKAGzZPggeGrnnyI-2.jpg",
  },
  {
    id: "ai-platform",
    title: "AI Platform — Integrated Solutions",
    services: ["AI Platform", "Full Stack"],
    description: "Unified AI platform combining Private LLMs, Vision AI, and Voice AI for comprehensive intelligent solutions that transform business operations.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/eeed5571-73ca-4e90-a825-4ddef08ce5fb-catchup-framer-website/assets/images/m2ftsl8holCuJBbeaL8Li0qbm6M-1.jpg",
  },
];

// Framer Motion variants
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

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black text-white">
      {/* Cosmic Portal Background */}
      <PortalBackground colorCore="#FFFFFF" colorMid="#4ADE80" colorOuter="#06B6D4" />

      {/* Main Content Layout */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          {/* Left Column: Heading & CTAs */}
          <motion.div
            className="max-w-[720px] space-y-8"
            variants={fadeUpBlur}
          >
            <GlassBadge>
              AI-Powered Solutions for Modern Business
            </GlassBadge>

            <h1 className="text-5xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm">
              Intelligent AI <br /> & Enterprise <span className="gradient-brand">Solutions</span>
            </h1>

            <p className="text-lg lg:text-xl text-white/90 max-w-[540px] leading-relaxed">
              Private LLMs for secure intelligence, Vision AI for image recognition, and Voice AI for natural interactions —
              transforming businesses with cutting-edge technology.
            </p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={fadeUpBlur}
            >
              <GlassButtonLink href="/contact" variant="primary">
                Get Started
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </GlassButtonLink>
              <GlassButtonLink href="/services" variant="outline">
                Our Services
              </GlassButtonLink>
            </motion.div>
          </motion.div>

          {/* Right Column: Dynamic Project Info & Sidebar Navigation */}
          <GlassPanel className="lg:w-[420px] lg:mb-4">
            {/* Active Project Card */}
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

            {/* Navigation List */}
            <motion.ul
              className="space-y-3"
              variants={staggerContainer}
            >
              {projectData.map((project, index) => (
                <motion.li key={project.id} variants={fadeUpBlur}>
                  <GlassCard
                    hover={true}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`w-full text-left py-3 px-4 cursor-pointer transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-white/10 border-white/30 shadow-lg shadow-[#4ADE80]/10"
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
