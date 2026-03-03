'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, AlertTriangle, Shield, Zap, BarChart3 } from 'lucide-react';
import { motion } from 'motion/react';

const GRADIENT_BLOB =
  'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE =
  'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

const STATS = [
  { icon: BarChart3, value: '1,100+', label: 'KPIs Monitored', color: 'text-teal-400' },
  { icon: Zap, value: '54%', label: 'Outages Preventable', color: 'text-amber-400' },
  { icon: Shield, value: '60%', label: 'Lower TCO vs FRUN', color: 'text-violet-400' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const FinalCTA = () => {
  return (
    <section id="final-cta" className="relative">
      {/* Overlapping stats card — sits on the boundary between sections */}
      <div className="relative z-20 -mb-28 md:-mb-24">
        <motion.div
          className="container px-4 mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#111838]/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-center gap-4 px-8 py-7">
                  <div className={`p-3 rounded-xl bg-white/[0.04] ${stat.color}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                    <p className="text-sm text-white/50 font-light">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Main CTA section with hero-style background */}
      <div
        className="relative overflow-hidden pt-40 md:pt-36 pb-32"
        style={{ backgroundColor: '#111838' }}
      >
        {/* Gradient blob — top */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          style={{
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

        {/* Content */}
        <motion.div
          className="container relative z-10 px-4 mx-auto text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="max-w-4xl mx-auto space-y-10">
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-teal-400 text-sm font-medium backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>SolMan support ends Dec 2027 — act now</span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              Replace your monitoring stack with{' '}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400">
                SwiftAI Operations Monitor
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              Enterprise-grade SAP monitoring at mid-market pricing. Focused Run capabilities
              without the cost and complexity burden. Deploy on your terms — on-prem, hybrid,
              or customer-controlled.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Button
                size="lg"
                className="h-14 px-10 text-lg bg-orange-500 hover:bg-orange-400 text-white rounded-full shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_-5px_rgba(249,115,22,0.7)] hover:scale-[1.03] transition-all duration-300 font-semibold"
                onClick={() => (window.location.href = '/contact')}
              >
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg border-white/30 bg-white/[0.08] text-white hover:bg-white/[0.15] rounded-full transition-all duration-300 font-semibold backdrop-blur-sm"
                onClick={() => (window.location.href = '/contact')}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-6"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {['On-prem deployment', 'SOC 2 compliant', 'No data leaves your network', 'Enterprise SLA'].map(
                (item) => (
                  <span
                    key={item}
                    className="text-sm text-white/30 font-light flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/60" />
                    {item}
                  </span>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
