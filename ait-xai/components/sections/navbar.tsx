"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Enhanced Navbar with glassmorphism and active state glow.
 * Features floating pill design with smooth animations.
 */
interface NavbarProps {
  activeHero?: string;
  onHeroChange?: (hero: string) => void;
}

export default function Navbar({ activeHero = "hero", onHeroChange }: NavbarProps) {
  const heroOptions = [
    { id: "hero", label: "Home" },
    { id: "hero2", label: "Vision AI" },
    { id: "hero3", label: "Private LLMs" },
    { id: "hero4", label: "Voice AI" },
  ];

  // Updated color scheme with new brand colors
  const heroColors: Record<string, { bg: string; hover: string; shadow: string }> = {
    hero: {
      bg: "#4ADE80",
      hover: "#22c55e",
      shadow: "rgba(74, 222, 128, 0.4)"
    },
    hero2: {
      bg: "#4ADE80",
      hover: "#22c55e",
      shadow: "rgba(74, 222, 128, 0.4)"
    },
    hero3: {
      bg: "#06B6D4",
      hover: "#0891b2",
      shadow: "rgba(6, 182, 212, 0.4)"
    },
    hero4: {
      bg: "#9D59FF",
      hover: "#8B4FE6",
      shadow: "rgba(157, 89, 255, 0.4)"
    },
  };

  const currentColors = heroColors[activeHero] || heroColors.hero;

  const handleHeroClick = (heroId: string) => {
    if (onHeroChange) {
      onHeroChange(heroId);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.div
        className="glass-panel flex items-center gap-4 md:gap-6 px-4 md:px-6 py-3 shadow-2xl"
        style={{ borderRadius: "40px" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ backdropFilter: "blur(24px) saturate(200%)" }}
      >
        {/* Profile Avatar */}
        <motion.div
          className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full flex-shrink-0 border-2 border-white/20 shadow-lg ring-2 ring-white/10"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c27f2c2c-1370-43a2-88f0-f7e654a86f02-magnetto-framer-website/assets/images/ZNnj2toPGisdyf6eClzPnuV72fM-13.jpg"
            alt="Profile Avatar"
            fill
            className="object-cover object-center"
            sizes="56px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        </motion.div>

        {/* Hero Session Switcher - Desktop */}
        <div className="hidden lg:flex items-center gap-2 px-3 border-l border-r border-white/10 mx-2 relative">
          {heroOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleHeroClick(option.id)}
              className={`relative px-4 py-2 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 z-10 ${
                activeHero === option.id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Active glow pill */}
              {activeHero === option.id && (
                <motion.div
                  layoutId="activeGlow"
                  className="absolute inset-0 rounded-full opacity-20 blur-md -z-10"
                  style={{
                    background: `linear-gradient(135deg, ${currentColors.bg}, ${currentColors.hover})`,
                    boxShadow: `0 0 20px ${currentColors.shadow}`,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {activeHero === option.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/20 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              {option.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hero Switcher Dropdown */}
        <div className="lg:hidden relative">
          <select
            value={activeHero}
            onChange={(e) => handleHeroClick(e.target.value)}
            className="px-3 py-2 rounded-full text-[10px] font-semibold tracking-[0.1em] uppercase glass-panel text-white appearance-none cursor-pointer pr-8"
          >
            {heroOptions.map((option) => (
              <option key={option.id} value={option.id} className="bg-[#1a1a1a]">
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
            ▼
          </div>
        </div>

        {/* Contact CTA - Enhanced Glass Button */}
        <motion.div className="flex-shrink-0">
          <motion.a
            href="/contact"
            className="group relative inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full overflow-hidden shadow-lg font-semibold text-[14px] md:text-[16px]"
            style={{
              background: `linear-gradient(135deg, ${currentColors.bg}, ${currentColors.hover})`,
              color: "#000",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 10px 30px ${currentColors.shadow}`,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.span
              initial={{ y: 0 }}
              whileHover={{ y: -20 }}
              transition={{ duration: 0.2 }}
            >
              Contact
            </motion.span>
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 md:w-4 md:h-4"
              whileHover={{ x: 2, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </motion.svg>

            {/* Shimmer effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </nav>
  );
}
