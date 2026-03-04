'use client';

import React from 'react';
import * as motion from 'motion/react-client';
import { ArrowRight } from 'lucide-react';

const DOT_GRID = 'https://framerusercontent.com/images/iCrEiyCzicNXp4giZVHPJq4rCS0.svg';

const CARD_GRADIENTS: [number, number][] = [
  [180, 210],
  [20, 50],
  [150, 180],
  [260, 290],
  [100, 140],
];

const PROJECTS = [
  {
    title: 'KPI Dashboard & Correlation',
    category: 'Unified Monitoring',
    detail: '1,100+ KPIs',
    description:
      'Brings key indicators into one view — showing current status, connected signals, and likely future risk trends across your entire SAP landscape. Correlate metrics across layers for faster root-cause analysis.',
    cta: 'Explore Dashboard',
    image: 'https://framerusercontent.com/images/mmBJ1hwaPU5ZWGIyhCbp86UYpc.png',
  },
  {
    title: 'Anomaly Detection & Alerts',
    category: 'AI-Powered',
    detail: 'Predictive Intelligence',
    description:
      'Identifies unusual behavior early — including risks that may not yet appear in standard alerting. Detects threshold breaches while reducing unnecessary alert noise and improving operational focus.',
    cta: 'See How It Works',
    image: 'https://framerusercontent.com/images/gYQDgKjRc49WkzJYlfnusNLSObo.png',
  },
  {
    title: 'Topology & Impact Analysis',
    category: 'System Visibility',
    detail: 'End-to-End',
    description:
      'Shows system relationships and dependencies clearly, helping reveal impact paths and affected areas. Understand how a change in one layer cascades across your SAP landscape before it causes disruption.',
    cta: 'View Topology',
    image: 'https://framerusercontent.com/images/qMJ1eOGI6KqH3EjLwj4wTqRUT0.png',
  },
  {
    title: 'Real User Monitoring',
    category: 'User Experience',
    detail: 'Performance Insight',
    description:
      'Reveals how applications are performing from the user perspective — helping protect service quality and productivity. Detect degradation before helpdesk tickets start piling up.',
    cta: 'Learn More',
    image: 'https://framerusercontent.com/images/RdBu5uyrv7rEdbWwTGPkXqBmWMo.png',
  },
  {
    title: 'GenAI-Assisted Insights',
    category: 'Intelligence',
    detail: 'Operational AI',
    description:
      'Turns complex monitoring data into clearer, faster-to-understand operational insights. Reduces expert dependency, accelerates analysis, and gives leadership confidence in operational stability.',
    cta: 'Discover GenAI',
    image: 'https://framerusercontent.com/images/RUGOoLXzHgBmYNmtj1CGsCpb2tc.png',
  },
];

const hue = (h: number) => `hsl(${h}, 80%, 55%)`;

const STICKY_TOP_START = 80;
const STICKY_TOP_STEP = 30;

export default function Showcase() {
  return (
    <section id="sw6-showcase" className="py-24 md:py-32 bg-background relative">
      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-[#FF6F61]">/Showcase</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-[-0.02em]">
            Showcase of SOM&apos;s{' '}
            <span className="heading-gradient">
              Capabilities
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 font-normal">
            See how SOM transforms SAP monitoring into proactive, intelligent operations.
          </p>
        </motion.div>

        {/* Sticky stacking cards */}
        <div className="w-full max-w-screen-2xl mx-auto">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const [hueA, hueB] = CARD_GRADIENTS[index % CARD_GRADIENTS.length];
            const stickyTop = STICKY_TOP_START + index * STICKY_TOP_STEP;

            return (
              <div
                key={project.title}
                className="sticky mb-8 md:mb-10"
                style={{ top: stickyTop, zIndex: index + 1 }}
              >
                <motion.div
                  className="group rounded-[28px] bg-card border border-border/40 overflow-hidden transition-shadow duration-500"
                  style={{
                    boxShadow: `0 ${4 + index * 4}px ${30 + index * 10}px -10px rgba(0,0,0,${0.06 + index * 0.02}), 0 0 0 1px ${hue(hueA)}10`,
                  }}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    type: 'spring',
                    bounce: 0.3,
                    duration: 0.8,
                  }}
                >
                  <div
                    className={`grid md:grid-cols-2 items-stretch ${
                      isReversed ? 'md:[direction:rtl]' : ''
                    }`}
                  >
                    {/* Text content side */}
                    <div className="relative p-8 md:p-12 lg:p-14 flex flex-col justify-center md:[direction:ltr]">
                      <div
                        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.03]"
                        style={{
                          backgroundImage: `url(${DOT_GRID})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative z-10 space-y-5">
                        <h3 className="text-2xl md:text-[28px] font-bold text-foreground leading-snug tracking-[-0.015em]">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#FF6F61]">
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: hue(hueA) }}
                            />
                            {project.category}
                          </span>
                          <span className="text-muted-foreground/30 text-xs">|</span>
                          <span className="text-sm text-muted-foreground font-medium">
                            {project.detail}
                          </span>
                        </div>

                        <div className="space-y-2 pt-1">
                          <p className="text-xs font-bold text-foreground/70 uppercase tracking-wider">
                            How it works:
                          </p>
                          <p className="text-[15px] text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div className="pt-3">
                          <button
                            onClick={() => document.getElementById('core-capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FF6F61] text-white text-sm font-semibold hover:bg-[#DE4B3A] hover:shadow-lg hover:shadow-[#FF6F61]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group/btn"
                          >
                            {project.cta}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image side */}
                    <div className="relative bg-gradient-to-br from-muted/60 to-muted/30 dark:from-white/[0.03] dark:to-white/[0.01] flex items-center justify-center min-h-[320px] md:min-h-[480px] overflow-hidden md:[direction:ltr]">
                      <div
                        className="absolute inset-0 z-0 opacity-[0.03]"
                        style={{
                          backgroundImage: `url(${DOT_GRID})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        aria-hidden="true"
                      />

                      <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-10">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto max-h-[420px] object-contain rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] group-hover:scale-[1.03] group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
