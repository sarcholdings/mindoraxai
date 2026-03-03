"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import Hero from '@/components/swiftai/Hero';
import Hero2 from '@/components/swiftai/Hero2';
import Hero3 from '@/components/swiftai/Hero3';
import Hero4 from '@/components/swiftai/Hero4';
import PlatformOverview from '@/components/swiftai/PlatformOverview';
import Showcase from '@/components/swiftai/Showcase';
import CoreCapabilities from '@/components/swiftai/CoreCapabilities';
import CrossIndustryUseCases from '@/components/swiftai/CrossIndustryUseCases';
import IndustryEditions from '@/components/swiftai/IndustryEditions';
import PlatformOrchestration from '@/components/swiftai/PlatformOrchestration';
import DeploymentIntegration from '@/components/swiftai/DeploymentIntegration';
import FinalCTA from '@/components/swiftai/FinalCTA';

const HERO_COMPONENTS = [
  { id: 'hero', component: Hero, name: 'SOM Overview', theme: 'blue' },
  { id: 'hero2', component: Hero2, name: 'Intelligent Monitoring', theme: 'green' },
  { id: 'hero3', component: Hero3, name: 'SolMan Migration', theme: 'cyan' },
  { id: 'hero4', component: Hero4, name: 'KPI Coverage', theme: 'purple' }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % HERO_COMPONENTS.length);
      }, AUTO_PLAY_INTERVAL);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isAutoPlaying, isPaused]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setShowArrows(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + HERO_COMPONENTS.length) % HERO_COMPONENTS.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % HERO_COMPONENTS.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  const ActiveHeroComponent = HERO_COMPONENTS[activeIndex].component;

  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        .sw3-hero {
          --hero-fg: 0 0% 100%;
          --hero-muted: 210 20% 78%;
          --hero-border: 217.2 32.6% 17.5%;
          --hero-bg: 222.2 84% 4.9%;
          --hero-accent-1: 172 90% 72%;
          --hero-accent-1-glow: 175 70% 32%;
          --hero-accent-2: 160 82% 62%;
          --hero-accent-2-glow: 155 65% 30%;
          --hero-accent-3: 192 100% 75%;
          --hero-accent-3-glow: 200 85% 32%;
          --hero-accent-4: 268 100% 78%;
          --hero-accent-4-glow: 270 70% 34%;
          --hero-gradient-1-from: 165 92% 82%;
          --hero-gradient-1-to: 192 95% 76%;
          --hero-gradient-2-from: 150 88% 80%;
          --hero-gradient-2-to: 172 92% 60%;
          --hero-gradient-3-from: 185 98% 84%;
          --hero-gradient-3-to: 212 96% 74%;
          --hero-gradient-4-from: 262 100% 86%;
          --hero-gradient-4-to: 282 98% 76%;
        }
        .sw3-hero section > div[aria-hidden="true"] > div:last-child {
          background-color: rgba(0, 0, 0, 0.55) !important;
        }
        .sw3-hero h1 {
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }
        .sw3-hero [class*="bg-emerald"] {
          background: white !important;
          color: #0f172a !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 24px -4px rgba(255, 255, 255, 0.2) !important;
        }
        .sw3-hero [class*="bg-emerald"]:hover {
          background: rgba(255, 255, 255, 0.92) !important;
          box-shadow: 0 8px 32px -4px rgba(255, 255, 255, 0.35) !important;
        }
        .sw3-hero [class*="border-white\\/25"] {
          border-color: rgba(255, 255, 255, 0.35) !important;
          background: rgba(255, 255, 255, 0.12) !important;
        }
        .sw3-hero [class*="border-white\\/25"]:hover {
          border-color: rgba(255, 255, 255, 0.55) !important;
          background: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>

      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation />

        <div
          ref={heroRef}
          className="relative overflow-hidden sw3-hero"
          style={{ backgroundColor: '#0c1222' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-screen">
            <AnimatePresence initial={false}>
              <motion.div
                key={activeIndex}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <ActiveHeroComponent />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {HERO_COMPONENTS.map((hero, index) => (
              <button
                key={hero.id}
                onClick={() => handleDotClick(index)}
                className={`group relative transition-all duration-300 ${
                  index === activeIndex ? 'w-12' : 'w-3'
                }`}
                aria-label={`Go to ${hero.name}`}
              >
                <div
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-white'
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`}
                />
                {index === activeIndex && isAutoPlaying && !isPaused && (
                  <div
                    className="absolute inset-0 bg-white/40 rounded-full animate-pulse"
                    style={{ animation: `pulse ${AUTO_PLAY_INTERVAL}ms ease-in-out` }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows - hidden on small screens */}
          <button
            onClick={handlePrevious}
            className={`hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-xl ${!showArrows ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className={`hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-xl ${!showArrows ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="relative bg-background">
          <PlatformOverview />
          <Showcase />
          <CoreCapabilities />
          <CrossIndustryUseCases />
          <IndustryEditions />
          <PlatformOrchestration />
          <DeploymentIntegration />
          <FinalCTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}
