'use client';

import React, { useState } from 'react';
import * as motion from 'motion/react-client';
import {
  Database,
  Server,
  Shield,
  FileSearch,
  HardDrive,
  Network,
  Cloud,
  TrendingDown,
  AlertTriangle,
  DollarSign,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';

const KPI_DOMAINS = [
  {
    icon: Server,
    name: 'SAP Core Operations',
    desc: 'Enqueue, background jobs, work processes, users, runtime errors, RFC, locks, updates, system statistics',
    count: '400+',
  },
  {
    icon: Database,
    name: 'HANA Database',
    desc: 'Services, service components, OS-level monitoring, alerts',
    count: '200+',
  },
  {
    icon: Shield,
    name: 'Predictive Early Warning',
    desc: 'Number ranges, file systems, table growth',
    count: '80+',
  },
  {
    icon: FileSearch,
    name: 'Logs, Audit & Governance',
    desc: 'Application logs, system logs, audit logs, archiving data',
    count: '120+',
  },
  {
    icon: HardDrive,
    name: 'Infrastructure',
    desc: 'Operating system visibility & resource monitoring',
    count: '100+',
  },
  {
    icon: Network,
    name: 'Business Process / Interfaces',
    desc: 'IDocs and integration-related visibility',
    count: '90+',
  },
  {
    icon: Cloud,
    name: 'SAP BTP',
    desc: 'Global accounts, events, Cloud Foundry instances & applications',
    count: '150+',
  },
];

const COMPARISON_ITEMS = {
  'cloud-alm': {
    title: 'SwiftAI PRISM vs SAP Cloud ALM',
    subtitle: 'See how SwiftAI PRISM compares against SAP\'s baseline ALM platform',
    som: [
      'Customer-operated (on-prem-first / customer-controlled)',
      'Direct non-SAP monitoring via APIs/exporters/agents',
      'No SaaS quota ceiling — scale governed by sizing/ops',
      'Retain raw data at any interval as long as policy allows',
    ],
    competitor: [
      'SaaS-only, SAP-managed — not installable on-prem',
      'Non-SAP monitoring is mainly integration-centric, not deep APM',
      'Capacity governed by tenant entitlements / fair-use',
      'Retention bounded by service/app rules (SaaS model)',
    ],
  },
  'focused-run': {
    title: 'SwiftAI PRISM vs SAP Focused Run',
    subtitle: 'Advanced enterprise-scale operations cockpit comparison',
    som: [
      'Typically lower TCO than FRUN — lighter stack + commodity infra',
      'Unified KPI model across SAP + non-SAP via APIs/exporters',
      'Store raw + generate rollups without losing raw data',
      'Better for deep RCA + ML training with raw data retention',
    ],
    competitor: [
      'Separate platform with infrastructure + implementation + ongoing ops effort',
      'Customer-operated but heavyweight to run',
      'Broader enterprise ops posture, still SAP-centric',
      '28-day default retention for system monitoring historical data',
    ],
  },
};

const FINANCIAL_IMPACT = [
  {
    icon: DollarSign,
    stat: '$300K+',
    label: 'per hour',
    desc: '90% of mid-size and large enterprises report hourly downtime costs exceeding $300,000.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: AlertTriangle,
    stat: '54%',
    label: 'Preventable',
    desc: 'Of significant outages costing $100K+ were considered preventable with better monitoring.',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
  },
  {
    icon: TrendingDown,
    stat: '$146M',
    label: 'Median annual',
    desc: 'Median annual downtime of 77 hours translates to $146 million in outage cost.',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: BarChart3,
    stat: '$400B',
    label: 'Global loss',
    desc: 'Global 2000 companies lose $400B annually from downtime with avg 2.5% stock price drop.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
];

const TABS = [
  { id: 'kpi-domains', label: 'KPI Domains' },
  { id: 'cloud-alm', label: 'vs Cloud ALM' },
  { id: 'focused-run', label: 'vs Focused Run' },
  { id: 'financial-impact', label: 'Financial Impact' },
];

export default function IndustryEditions() {
  const [activeTab, setActiveTab] = useState('kpi-domains');

  return (
    <section id="industry-editions" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-2">/Coverage</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
            SwiftAI PRISM Coverage &{' '}
            <span className="heading-gradient">
              Comparison
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade monitoring coverage with transparent comparison against SAP&apos;s own offerings.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-card border border-border/60 rounded-2xl p-1.5 gap-1 shadow-lg">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="max-w-6xl mx-auto">
          {/* KPI Domains */}
          {activeTab === 'kpi-domains' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Total KPI header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-hero-accent-1/10 border border-hero-accent-1/20 mb-4">
                  <span className="text-3xl font-bold text-hero-accent-1">1,100+</span>
                  <span className="text-sm text-foreground/80 font-medium">KPIs and growing</span>
                </div>
              </div>

              {/* Domain cards grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {KPI_DOMAINS.map((domain, i) => {
                  const Icon = domain.icon;
                  return (
                    <motion.div
                      key={domain.name}
                      className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-hero-accent-1/40 hover:shadow-lg hover:shadow-hero-accent-1/5 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-hero-accent-1/10 flex items-center justify-center shrink-0 group-hover:bg-hero-accent-1/20 transition-colors">
                          <Icon className="w-5 h-5 text-hero-accent-1" />
                        </div>
                        <div className="space-y-2 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-foreground text-sm">{domain.name}</h4>
                            <span className="text-xs font-bold text-hero-accent-1 bg-hero-accent-1/10 px-2 py-0.5 rounded-full shrink-0">
                              {domain.count}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {domain.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Comparison tabs */}
          {(activeTab === 'cloud-alm' || activeTab === 'focused-run') && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const data = COMPARISON_ITEMS[activeTab as keyof typeof COMPARISON_ITEMS];
                return (
                  <div className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{data.title}</h3>
                      <p className="text-muted-foreground">{data.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* SwiftAI PRISM column */}
                      <div className="rounded-2xl border-2 border-hero-accent-1/30 bg-hero-accent-1/[0.03] p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-hero-accent-1/15 flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-hero-accent-1" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg">SwiftAI PRISM</h4>
                        </div>
                        {data.som.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-hero-accent-1 mt-0.5 shrink-0" />
                            <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>

                      {/* Competitor column */}
                      <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                            <XCircle className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <h4 className="font-bold text-foreground text-lg">
                            {activeTab === 'cloud-alm' ? 'Cloud ALM' : 'Focused Run'}
                          </h4>
                        </div>
                        {data.competitor.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <XCircle className="w-4 h-4 text-muted-foreground/50 mt-0.5 shrink-0" />
                            <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                        See Full Comparison
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* Financial Impact */}
          {activeTab === 'financial-impact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  The Financial Impact of SAP Outages
                </h3>
                <p className="text-muted-foreground">
                  Why proactive monitoring isn&apos;t optional — it&apos;s a business imperative.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {FINANCIAL_IMPACT.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.stat}
                      className={`p-6 rounded-2xl ${item.bg} border ${item.border} hover:scale-[1.02] transition-all duration-300`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center shrink-0`}>
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold ${item.color}`}>{item.stat}</span>
                            <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
                          </div>
                          <p className="text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
