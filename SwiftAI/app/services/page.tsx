'use client';

import { useState, useEffect } from 'react';
import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import ServicesSection from '@/components/ServicesSection';

const GRADIENT_BLOB = 'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE = 'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

export default function Services() {
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBgVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
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

        {/* Hero section — styled like home page */}
        <div
          className="relative overflow-hidden sw2-hero-bg"
          style={{ backgroundColor: '#111838' }}
        >
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
          <div className="relative z-10 sw2-hero-wrapper min-h-[60vh] flex items-center justify-center pt-24 pb-20">
            <div className="container px-6 lg:px-12 mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase">[Services]</span>
                <div className="h-px w-12 bg-white/40" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase">Enterprise Solutions</span>
              </div>
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-white mb-6">
                Our Services
              </h1>
              <p className="text-[17px] md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                A wide range of services designed to meet the unique challenges and opportunities of modern enterprises. Our expertise spans across various domains to provide holistic and integrated solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-background">
          <ServicesSection />
          <div id="after-services" className="scroll-mt-0">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
