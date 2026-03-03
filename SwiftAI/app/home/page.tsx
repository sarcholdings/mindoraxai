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

const GRADIENT_BLOB = 'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE = 'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

const AUTO_PLAY_INTERVAL = 6000;

export default function SwiftAIAIPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const [bgVisible, setBgVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setBgVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

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
  const activeHeroTheme = HERO_COMPONENTS[activeIndex].theme;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Hide hero internal bg images; force dark-mode hero tokens inside hero wrapper */}
      <style>{`
        .sw2-hero-wrapper section > div[aria-hidden="true"] { display: none !important; }
        .sw2-hero-bg {
          --hero-fg: 210 40% 98%;
          --hero-muted: 215 20.2% 65.1%;
          --hero-border: 217.2 32.6% 17.5%;
          --hero-bg: 222.2 84% 4.9%;
        }
      `}</style>

      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation />

        {/* Hero section with Jacob Schneider background */}
        <div
          ref={heroRef}
          className="relative overflow-hidden sw2-hero-bg"
          style={{ backgroundColor: '#111838' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient blob — top, fades in */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-visible transition-opacity ease-in-out"
            style={{
              transitionDuration: '1.6s',
              opacity: bgVisible ? 1 : 0,
              WebkitMask: 'linear-gradient(transparent 3%, black 59%)',
              mask: 'linear-gradient(transparent 3%, black 59%)',
            }}
            aria-hidden="true"
          >
            <img
              src={GRADIENT_BLOB}
              alt=""
              className="w-full h-auto"
              style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
            />
          </div>

          {/* Gradient blob — bottom */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-visible"
            style={{
              WebkitMask: 'linear-gradient(black 18%, transparent 83%)',
              mask: 'linear-gradient(black 18%, transparent 83%)',
              top: 'auto',
              bottom: 0,
              height: '100%',
            }}
            aria-hidden="true"
          >
            <img
              src={GRADIENT_BLOB}
              alt=""
              className="w-full h-auto absolute bottom-0"
              style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
            />
          </div>

          {/* Film grain texture */}
          <div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{
              opacity: 0.12,
              backgroundImage: `url(${GRAIN_TEXTURE})`,
              backgroundRepeat: 'repeat',
              backgroundSize: '128px auto',
              backgroundPosition: 'left top',
              transform: 'rotate(-180deg)',
            }}
            aria-hidden="true"
          />

          {/* Hero content */}
          <div className="relative z-10 sw2-hero-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
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
