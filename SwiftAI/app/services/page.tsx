'use client';

import { useState, useEffect } from 'react';
import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';
import ServicesSection from '@/components/ServicesSection';

const GRADIENT_BLOB = 'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';

export default function Services() {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBgVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <main id="main" className="relative z-10 flex-1 flex flex-col">
        <SwiftAINavigation />

        {/* Hero */}
        <div className="relative overflow-hidden" style={{ backgroundColor: '#0c1222' }}>
          {/* Gradient blob — top */}
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
            <img src={GRADIENT_BLOB} alt="" className="w-full h-auto" style={{ transform: 'rotate(180deg)', objectFit: 'cover' }} />
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
            <img src={GRADIENT_BLOB} alt="" className="w-full h-auto absolute bottom-0" style={{ transform: 'rotate(180deg)', objectFit: 'cover' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-orange-400/50" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-orange-400/80">Services</span>
              <div className="h-px w-10 bg-orange-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05] max-w-3xl">
              Enterprise-grade services <span className="text-orange-400">end-to-end</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              From cloud transformation to AI observability, our services span every layer of the modern enterprise technology stack.
            </p>
          </div>
        </div>

        <div className="relative bg-background flex-1">
          <ServicesSection />
          <div id="after-services" className="scroll-mt-0" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
