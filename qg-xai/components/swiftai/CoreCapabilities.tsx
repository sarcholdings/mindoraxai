import React from 'react';
import { Activity, Brain, BarChart3, Bell, Search, Network, Shield, Eye, Workflow, Blocks } from 'lucide-react';

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: Activity,
      title: 'System Health & Risk Prediction',
      description: 'Provides early visibility into rising operational risk before issues affect business continuity.',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10'
    },
    {
      icon: Brain,
      title: 'GenAI-Assisted Insight Discovery',
      description: 'Turns complex monitoring data into clearer, faster-to-understand operational insights.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      icon: BarChart3,
      title: 'KPI Dashboards with Correlation & Forecasting',
      description: 'Brings key indicators into one view, showing current status, connected signals, and likely future risk trends.',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      icon: Bell,
      title: 'Predictive Early Watch Alerts',
      description: 'Warns of likely issues in advance so action can be taken before disruption becomes visible.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: Search,
      title: 'Threshold Breach Detection with Noise Control',
      description: 'Detects important limit breaches while reducing unnecessary alert noise and improving focus.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Eye,
      title: 'Anomaly Detection',
      description: 'Identifies unusual behavior early, including risks that may not yet appear in standard alerting.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10'
    },
    {
      icon: Network,
      title: 'Topology Visualization',
      description: 'Shows system relationships and dependencies clearly, helping reveal impact paths and affected areas.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10'
    },
    {
      icon: Shield,
      title: 'Governance & Operational Control',
      description: 'Supports structured oversight, accountability, and controlled operational response.',
      color: 'text-orange-400',
      bg: 'bg-orange-400/10'
    },
    {
      icon: Workflow,
      title: 'Real User Monitoring',
      description: 'Reveals how applications perform from the user perspective, helping protect service quality and productivity.',
      color: 'text-indigo-400',
      bg: 'bg-indigo-400/10'
    },
    {
      icon: Blocks,
      title: 'Integration & Exception Monitoring',
      description: 'Improves visibility into connected processes and exception patterns, helping reduce hidden business disruption.',
      color: 'text-slate-400',
      bg: 'bg-slate-400/10',
      fullWidth: true
    }
  ];

  return (
    <section id="core-capabilities" className="py-32 bg-muted/30 relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            SOM Key Features
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of AI-powered monitoring and intelligence capabilities designed for SAP operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl transition-all duration-500 ${cap.fullWidth ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="relative h-full bg-card border-3 border-border/80 dark:border-border/60 rounded-2xl p-8 overflow-hidden backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent to-transparent rounded-full blur-2xl -mr-10 -mt-10 group-hover:from-hero-accent-1/20 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent border-2 border-border/80 dark:border-border/60 group-hover:border-hero-accent-1/60 group-hover:bg-background/50 group-hover:shadow-lg transition-all duration-300">
                    <cap.icon className={`w-7 h-7 ${cap.color}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-hero-accent-1 transition-colors">{cap.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {cap.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
