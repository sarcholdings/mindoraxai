'use client'

import React from 'react';
import { ArrowRight, ChevronRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MONITORING_DOMAINS = [
  'SAP Core Ops', 'HANA Database', 'SAP BTP', 'Infrastructure',
  'Business Interfaces', 'Predictive Alerts', 'Logs & Governance', 'Real User Monitoring',
];

const Hero = () => {
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
          <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[01]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">SwiftAI Operations Monitor</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-end">
            <div className="space-y-8">
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-accent-1/10 border border-hero-accent-1/20 text-[12px] text-hero-foreground backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Activity className="w-3.5 h-3.5 text-hero-accent-1" />
                  Proactive SAP monitoring for business resilience
                </div>
              </div>

              <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Protecting SAP{' '}
                  <br className="hidden md:block" />
                  uptime, revenue &{' '}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-1-from)), hsl(var(--hero-accent-1)), hsl(var(--hero-gradient-1-to)))' }}>
                    operational stability
                  </span>
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  SAP systems run your core operations — order management, procurement, finance,
                  manufacturing, and payroll. SOM delivers proactive, AI-powered monitoring
                  that detects issues before they impact your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('platform-overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore SOM
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('industry-editions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  KPI Coverage
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              <div className="pt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Monitoring Domains</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {MONITORING_DOMAINS.map((tech) => (
                    <span
                      key={tech}
                      className="text-[13px] text-hero-foreground/40 hover:text-hero-accent-1 transition-colors duration-300 cursor-default font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="border border-hero-accent-1/20 bg-card/50 backdrop-blur-sm p-8 space-y-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase">Platform Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-hero-accent-1 animate-pulse" />
                    <span className="font-mono text-[11px] text-hero-accent-1">Live</span>
                  </div>
                </div>

                <div className="h-px bg-hero-foreground/[0.06]" />

                {[
                  { label: 'KPIs Monitored', value: '1,100+', sub: 'Across SAP & related domains' },
                  { label: 'Hourly Downtime Cost', value: '$300K+', sub: '90% of mid/large enterprises' },
                  { label: 'Preventable Outages', value: '54%', sub: 'With better monitoring' },
                  { label: 'GA Release', value: 'Jul \'26', sub: 'Enterprise-ready deployment' },
                ].map((metric, i) => (
                  <div key={metric.label} className="group">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[13px] text-hero-foreground/40 font-light">{metric.label}</span>
                      <span className="text-[22px] font-semibold text-hero-foreground tracking-tight">{metric.value}</span>
                    </div>
                    <p className="text-[11px] text-hero-foreground/25 font-mono">{metric.sub}</p>
                    {i < 3 && <div className="h-px bg-hero-foreground/[0.04] mt-6" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
