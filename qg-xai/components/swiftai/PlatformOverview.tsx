import React from 'react';
import { Activity, Brain, BarChart3, Bell, Shield, Eye, Network, Gauge } from 'lucide-react';

const PlatformOverview = () => {
  const features = [
    { icon: Activity, label: 'Continuous monitoring across KPI domains' },
    { icon: Brain, label: 'GenAI-assisted insight discovery' },
    { icon: BarChart3, label: 'Predictive early-watch alerts' },
    { icon: Bell, label: 'Threshold breach detection with noise control' },
    { icon: Shield, label: 'Governance & operational control' },
    { icon: Eye, label: 'Real user monitoring' },
    { icon: Network, label: 'Topology visualization' },
    { icon: Gauge, label: 'Integration & exception monitoring' },
  ];

  return (
    <section id="platform-overview" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hero-accent-1/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-orange-500">/Platform Overview</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Why proactive SAP monitoring is <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                  now a business requirement
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SAP systems run the core operations of an enterprise — order management, procurement, finance,
                manufacturing, payroll, inventory, and customer service. When SAP slows down, fails, or behaves
                unpredictably, the impact is not just technical — it is operational and financial.
              </p>
              <p>
                SAP monitoring is not about &ldquo;checking server health.&rdquo; It is about protecting revenue,
                productivity, customer satisfaction, and operational stability.
              </p>
              <div className="p-6 rounded-2xl bg-card border-3 border-border/80 dark:border-border/60 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-medium text-foreground relative z-10">
                  Proactive monitoring transforms IT from reactive firefighting to proactive business resilience
                  — detecting warning signals and addressing problems before they escalate.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-4 border-border/80 dark:border-border/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative group hover:border-hero-accent-1/50 hover:shadow-[0_25px_70px_-10px_rgba(45,212,191,0.25)] transition-all duration-500 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-[2px] bg-gradient-to-br from-hero-accent-1/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            <h3 className="text-xl font-semibold text-foreground mb-8 relative z-10">SOM enables organizations to:</h3>
            <div className="grid sm:grid-cols-2 gap-4 relative z-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-accent border-2 border-border/80 dark:border-border/60 rounded-xl hover:bg-background/50 hover:border-hero-accent-1/60 hover:shadow-lg hover:shadow-hero-accent-1/10 hover:-translate-y-0.5 transition-all duration-300 group/item"
                >
                  <div className="p-2 rounded-lg bg-hero-accent-1/15 text-hero-accent-1 group-hover/item:bg-hero-accent-1/25 transition-colors">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground transition-colors">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
