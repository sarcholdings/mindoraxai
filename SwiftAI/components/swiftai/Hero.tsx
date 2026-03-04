'use client'

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const platformMetrics = [
  { id: 'kpis', label: 'KPIs Monitored', value: '1,100+', sub: 'Across SAP & related domains' },
  { id: 'downtime', label: 'Hourly Downtime Cost', value: '$300K+', sub: '90% of mid/large enterprises' },
  { id: 'outages', label: 'Preventable Outages', value: '54%', sub: 'With better monitoring' },
  { id: 'release', label: 'GA Release', value: "Jul '26", sub: 'Enterprise-ready deployment' },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = platformMetrics[activeIndex];

  return (
    <section className="relative h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden text-hero-foreground">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/vYZYM5P9vKTxjyMntDIvdSTX7sE.webp?width=2400&height=1368"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-center">
            <div className="space-y-8">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-accent-1/10 border border-hero-accent-1/20 text-[12px] text-hero-foreground backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Activity className="w-3.5 h-3.5 text-hero-accent-1" />
                  Proactive SAP monitoring for business resilience
                </div>
              </div>

              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-[-0.02em] leading-[1.05] text-[#FFFFFF]">
                  Protecting SAP{' '}
                  <br className="hidden md:block" />
                  uptime, revenue &{' '}
                  <br className="hidden md:block" />
                  <span className="hero-heading-gradient">operational stability</span>
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/75 max-w-2xl leading-relaxed font-normal">
                  SAP systems run your core operations — order management, procurement, finance,
                  manufacturing, and payroll. SwiftAI PRISM delivers proactive, AI-powered monitoring
                  that detects issues before they impact your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-[#FF6F61] text-white font-semibold rounded-full hover:bg-[#DE4B3A] hover:shadow-lg hover:shadow-[#FF6F61]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('platform-overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore SwiftAI PRISM
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-white/25 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('industry-editions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  KPI Coverage
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="border border-hero-foreground/[0.12] bg-hero-foreground/[0.04] backdrop-blur-sm">
                <div className="px-8 pt-8 pb-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/65 uppercase">Platform Status</span>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-1 animate-pulse" />
                      <span className="font-mono text-[11px] text-hero-accent-1">Live</span>
                    </div>
                  </div>
                  <div className="h-px bg-hero-foreground/[0.1] mb-6" />
                  <div className="mb-2">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-[28px] font-semibold text-hero-foreground tracking-tight">{active.value}</span>
                      <span className="text-[11px] font-mono text-hero-foreground/65">{active.sub}</span>
                    </div>
                    <p className="text-[14px] text-hero-foreground/80 leading-relaxed">{active.label}</p>
                  </div>
                </div>
                <div className="border-t border-hero-foreground/[0.1]">
                  {platformMetrics.map((metric, idx) => (
                    <button
                      key={metric.id}
                      onClick={() => setActiveIndex(idx)}
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`w-full text-left px-8 py-4 flex items-center justify-between transition-all duration-300 border-b border-hero-foreground/[0.08] last:border-b-0 ${
                        idx === activeIndex
                          ? 'bg-hero-foreground/[0.1] text-hero-foreground'
                          : 'text-hero-foreground/70 hover:bg-hero-foreground/[0.08] hover:text-hero-foreground/90'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[10px] text-hero-foreground/50">0{idx + 1}</span>
                        <span className="text-[13px] font-medium tracking-wide uppercase">{metric.label}</span>
                      </div>
                      {idx === activeIndex && <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-1" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
