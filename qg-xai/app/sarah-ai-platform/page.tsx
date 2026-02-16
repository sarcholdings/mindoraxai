"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/mindorax-ai-platform/Hero';
import Hero2 from '@/components/mindorax-ai-platform/Hero2';
import Hero3 from '@/components/mindorax-ai-platform/Hero3';
import Hero4 from '@/components/mindorax-ai-platform/Hero4';
import PlatformOverview from '@/components/mindorax-ai-platform/PlatformOverview';
import CoreCapabilities from '@/components/mindorax-ai-platform/CoreCapabilities';
import CrossIndustryUseCases from '@/components/mindorax-ai-platform/CrossIndustryUseCases';
import IndustryEditions from '@/components/mindorax-ai-platform/IndustryEditions';
import PlatformOrchestration from '@/components/mindorax-ai-platform/PlatformOrchestration';
import DeploymentIntegration from '@/components/mindorax-ai-platform/DeploymentIntegration';
import FinalCTA from '@/components/mindorax-ai-platform/FinalCTA';

const HERO_COMPONENTS = [
  { id: 'hero', component: Hero, name: 'MindoraX AI', theme: 'blue' },
  { id: 'hero2', component: Hero2, name: 'Vision AI', theme: 'green' },
  { id: 'hero3', component: Hero3, name: 'Private LLMs', theme: 'cyan' },
  { id: 'hero4', component: Hero4, name: 'Voice AI', theme: 'purple' }
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

export default function MindoraXAIPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % HERO_COMPONENTS.length);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying, isPaused]);

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

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const ActiveHeroComponent = HERO_COMPONENTS[activeIndex].component;
  const activeHeroTheme = HERO_COMPONENTS[activeIndex].theme;

  return (
    <main id="main" className="min-h-screen bg-black text-slate-200">
      <Navigation
        activeHero={HERO_COMPONENTS[activeIndex].id}
        heroTheme={activeHeroTheme}
      />

      {/* Hero Carousel */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hero Component with dynamic padding */}
        <div className="relative pt-8 pb-4">
          <ActiveHeroComponent />
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
                  style={{
                    animation: `pulse ${AUTO_PLAY_INTERVAL}ms ease-in-out`
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Navigation Arrows - Outside hero carousel */}
      <button
        onClick={handlePrevious}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={handleNext}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </button>

      <PlatformOverview />
      <CoreCapabilities />
      <CrossIndustryUseCases />
      <IndustryEditions />
      <PlatformOrchestration />
      <DeploymentIntegration />
      <FinalCTA />
      <Footer />
    </main>
  );
}
