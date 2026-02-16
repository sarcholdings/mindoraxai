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
    id: "vision-ai-base",
    title: "Vision AI — Image Recognition",
    services: ["Vision AI", "Computer Vision"],
    description: "Advanced image analysis that understands context, detects objects, and extracts insights from visual data. From facial recognition to quality control, our Vision AI processes millions of images with precision and speed.",
    image: "/a1.avif",
  },
  {
    id: "object-detection",
    title: "Object Detection — Real-Time Analysis",
    services: ["Vision AI", "Computer Vision"],
    description: "Advanced object detection systems that identify and classify objects in real-time. Perfect for security, retail analytics, and automated quality control.",
    image: "/a2.avif",
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition — Identity Verification",
    services: ["Vision AI", "Biometrics"],
    description: "Secure facial recognition technology for access control and identity verification. High accuracy with privacy-first architecture.",
    image: "/a3.avif",
  },
  {
    id: "quality-inspection",
    title: "Quality Inspection — Automated Control",
    services: ["Vision AI", "Industrial AI"],
    description: "Automated quality inspection systems that detect defects and ensure product consistency. Reduce errors and increase production efficiency.",
    image: "/a4.avif",
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

export default function Hero2() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen min-h-[800px] overflow-hidden bg-black text-white">
      {/* Cosmic Portal Background - Green for Vision AI */}
      <PortalBackground colorCore="#FFFFFF" colorMid="#4ADE80" colorOuter="#10B981" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-end pb-24 lg:pb-32 px-6 lg:px-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="max-w-[720px] space-y-8" variants={fadeUpBlur}>
            <GlassBadge>Vision AI & Computer Vision Solutions</GlassBadge>

            <h1 className="text-5xl lg:text-[72px] font-semibold leading-[1.05] tracking-tight text-white drop-shadow-sm">
              Advanced <span className="gradient-brand">Vision AI</span> <br /> for Business
            </h1>

            <p className="text-lg lg:text-xl text-white/90 max-w-[540px] leading-relaxed">
              Transform visual data into actionable insights with our cutting-edge computer vision technology. From object detection to quality control.
            </p>

            <motion.div className="flex flex-wrap gap-4 pt-4" variants={fadeUpBlur}>
              <GlassButtonLink href="/contact" variant="primary">
                Get Started
                <ArrowUpRight className="w-4 h-4" />
              </GlassButtonLink>
              <GlassButtonLink href="/services" variant="outline">
                Learn More
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
                        ? "bg-white/10 border-white/30 shadow-lg shadow-green-500/10"
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
