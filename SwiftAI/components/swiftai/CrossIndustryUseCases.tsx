import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const CrossIndustryUseCases = () => {
  const gaps = [
    {
      area: 'Monitoring Coverage',
      current: 'Different operational areas monitored using separate tools, reports, dashboards, or manual checks',
      gap: 'No single consolidated view of overall SAP landscape health',
      solution: 'Consolidated monitoring across KPI domains'
    },
    {
      area: 'Issue Detection',
      current: 'Teams rely on alerts, periodic reviews, or user-reported issues to identify problems',
      gap: 'Issues detected only after business impact has already started',
      solution: 'Continuous monitoring for earlier detection'
    },
    {
      area: 'Data Visibility',
      current: 'Technical, application, database, interface, and user-experience signals viewed separately',
      gap: 'Lack of end-to-end visibility makes it hard to understand the full situation',
      solution: 'Centralized view across monitoring layers'
    },
    {
      area: 'Problem Correlation',
      current: 'Operations teams manually connect symptoms across multiple layers and systems',
      gap: 'Root-cause analysis is slow, effort-intensive, and dependent on expert knowledge',
      solution: 'Related signals viewed together for faster analysis'
    },
    {
      area: 'Alerting Approach',
      current: 'Monitoring based on static thresholds or disconnected alert mechanisms',
      gap: 'Alerts may be noisy, low-context, and difficult to prioritize',
      solution: 'Better operational context for faster focus'
    },
    {
      area: 'Historical Insight',
      current: 'Operational data reviewed in isolation or retained for limited analysis',
      gap: 'Recurring patterns, trends, and slow degradation are easy to miss',
      solution: 'Historical data supports trend analysis'
    },
    {
      area: 'Cross-System Monitoring',
      current: 'Systems and components monitored in silos',
      gap: 'Teams lack a unified enterprise-wide view across landscapes and dependencies',
      solution: 'Centralized visibility across landscapes'
    },
    {
      area: 'Operational Efficiency',
      current: 'Significant effort spent on manual review, investigation, and follow-up',
      gap: 'Monitoring remains reactive and consumes valuable expert time',
      solution: 'Reduced manual effort through unified monitoring'
    },
    {
      area: 'User Experience Visibility',
      current: 'End-user performance issues identified indirectly',
      gap: 'Productivity loss and service degradation may persist before action is taken',
      solution: 'Earlier visibility into performance-related issues'
    },
  ];

  return (
    <section id="gap-analysis" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-semibold tracking-widest uppercase text-orange-500">/Gap Analysis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Closing critical gaps in{' '}
              <span className="heading-gradient">
                SAP monitoring
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Current monitoring approaches leave dangerous blind spots. SwiftAI PRISM fills each gap
              with unified, intelligent, and proactive capabilities.
            </p>
          </div>

          <div className="grid gap-4">
            {gaps.map((item, index) => (
              <div key={index} className="group bg-card backdrop-blur-xl border-2 border-border/80 dark:border-border/60 rounded-2xl p-6 md:p-8 hover:border-hero-accent-1/50 hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.2)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-accent-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-1.5 bg-hero-accent-1/20 rounded-full border border-hero-accent-1/30">
                      <AlertCircle className="w-4 h-4 text-hero-accent-1" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.area}</h3>
                  </div>

                  <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
                    <div>
                      <p className="text-sm text-muted-foreground/70 mb-1 font-mono uppercase tracking-wider">Gap</p>
                      <p className="text-muted-foreground">{item.gap}</p>
                    </div>
                    <div className="hidden md:flex items-center">
                      <ArrowRight className="w-5 h-5 text-hero-accent-1" />
                    </div>
                    <div>
                      <p className="text-sm text-teal-400/70 mb-1 font-mono uppercase tracking-wider">How SwiftAI PRISM Fills It</p>
                      <p className="text-foreground font-medium">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossIndustryUseCases;
