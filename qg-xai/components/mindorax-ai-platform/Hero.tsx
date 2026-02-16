'use client'

import React from 'react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

const ParticleField = dynamic(() => import('./ParticleField'), {
  ssr: false,
  loading: () => null,
});

const TECH_STACK = [
  'Agentic AI', 'Private LLMs', 'Vision AI', 'Voice AI',
  'Decision Intelligence', 'RAG Pipelines', 'Knowledge Graphs', 'MLOps',
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-24 overflow-hidden bg-hero text-hero-foreground">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-hero-accent-1/20 dark:bg-hero-glow-1/15 rounded-[100%] blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--hero-fg)/0.08)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hero-fg)/0.08)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,hsl(var(--hero-fg)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--hero-fg)/0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_30%,#000_50%,transparent_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hero to-transparent" />
      </div>

      <ParticleField color="hsl(var(--hero-accent-1))" className="opacity-60 dark:opacity-40" />

      <div className="container relative z-10 px-6 lg:px-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section indicator */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">[01]</span>
            <div className="h-px w-12 bg-hero-foreground/20" />
            <span className="font-mono text-[11px] tracking-[0.2em] text-hero-foreground/40 uppercase">MindoraX AI Platform</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-16 items-end">
            <div className="space-y-8">
              {/* Badge */}
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-none bg-hero-accent-1/10 border border-hero-accent-1/20 text-[12px] text-hero-foreground backdrop-blur-sm font-mono tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5 text-hero-accent-1" />
                  Intelligence that connects your entire organization
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-tight leading-[1.05] text-hero-foreground">
                  Unifying data,{' '}
                  <br className="hidden md:block" />
                  decisions &{' '}
                  <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, hsl(var(--hero-gradient-1-from)), hsl(var(--hero-accent-1)), hsl(var(--hero-gradient-1-to)))' }}>
                    intelligence
                  </span>
                </h1>

                <p className="text-[17px] md:text-lg text-hero-foreground/50 max-w-2xl leading-relaxed font-light">
                  MindoraX AI brings together identity, behavior, documents, transactions and
                  policy understanding into a unified intelligence layer. Agentic orchestration
                  and AI-driven reasoning support high-stakes decisions.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2 animate-fade-in-up">
                <Button
                  size="lg"
                  className="h-12 px-8 bg-hero-foreground text-hero font-medium rounded-none hover:bg-hero-foreground/90 transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('platform-overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-hero-foreground/15 bg-transparent text-hero-foreground hover:bg-hero-foreground/5 rounded-none backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                  onClick={() => document.getElementById('industry-editions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Industry Editions
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>

              {/* Tech stack */}
              <div className="pt-6 animate-fade-in-up">
                <p className="font-mono text-[11px] tracking-[0.15em] text-hero-foreground/30 uppercase mb-4">Our Stack</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {TECH_STACK.map((tech) => (
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

            {/* Right panel */}
            <div className="hidden lg:block animate-fade-in-up">
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
                  { label: 'Data Sources Unified', value: '200+', sub: 'Real-time integration' },
                  { label: 'Decision Accuracy', value: '99.2%', sub: 'Enterprise-grade AI' },
                  { label: 'Industries Served', value: '12', sub: 'Vertical editions' },
                  { label: 'Avg. Response Time', value: '<50ms', sub: 'Agentic orchestration' },
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
