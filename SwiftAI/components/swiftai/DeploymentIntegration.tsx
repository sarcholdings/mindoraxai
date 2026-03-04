import React from 'react';
import { ClipboardCheck, Plug, BarChart3, Shield, Expand } from 'lucide-react';

const DeploymentIntegration = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Landscape Assessment',
      timeline: 'Week 1–2',
      description: 'Map your SAP landscape, integrations, and operational workflows. Identify critical systems, data sources, and monitoring priorities tailored to your environment.'
    },
    {
      icon: Plug,
      title: 'Connect & Discover',
      timeline: 'Week 2–3',
      description: 'Deploy SwiftAI PRISM on your infrastructure — on-prem, hybrid, or customer-controlled cloud. Automatic discovery of SAP systems, HANA databases, BTP services, and integration points.'
    },
    {
      icon: BarChart3,
      title: 'KPI Baseline & Alert Configuration',
      timeline: 'Week 3–4',
      description: 'Establish performance baselines across 1,100+ KPIs. Configure intelligent alerting with noise control, threshold tuning, and correlation rules specific to your operations.'
    },
    {
      icon: Shield,
      title: 'Validation & Go-Live',
      timeline: 'Week 4–6',
      description: 'Validate with real workloads and operational routines. Fine-tune predictive models, verify alert accuracy, and hand over to your operations team with full runbook support.'
    },
    {
      icon: Expand,
      title: 'Scale & Optimize',
      timeline: 'Ongoing',
      description: 'Expand monitoring across additional SAP landscapes and business lines. Continuously refine anomaly detection, leverage GenAI insights, and deepen KPI coverage as your needs evolve.'
    }
  ];

  return (
    <section id="deployment" className="py-32 bg-muted/50 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-sm font-semibold tracking-widest uppercase text-orange-500 mb-4">/Deployment</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            From zero to full visibility{' '}
            <span className="heading-gradient">
              in weeks
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A structured, governance-aligned onboarding process designed for enterprise SAP environments.
          </p>
          <div className="w-24 h-1.5 rounded-full heading-gradient-bar mx-auto opacity-70 mt-6" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-hero-accent-1/0 via-hero-accent-1/50 to-hero-accent-1/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-card border-2 border-hero-accent-1/50 shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)] flex items-center justify-center z-10 group">
                  <step.icon className="w-6 h-6 text-hero-accent-1 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="ml-20 md:ml-0 md:w-[42%] group">
                  <div className="bg-card p-8 rounded-2xl border-3 border-border/80 dark:border-border/60 hover:border-hero-accent-1/60 hover:bg-card/95 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -top-4 -right-4 text-[80px] font-bold text-foreground/5 select-none leading-none">
                      0{index + 1}
                    </div>

                    <div className="text-sm font-bold text-hero-accent-1 mb-2 tracking-wider uppercase">{step.timeline}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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

export default DeploymentIntegration;
