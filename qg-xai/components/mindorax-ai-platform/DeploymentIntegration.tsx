import React from 'react';
import { ClipboardCheck, Rocket, LineChart, Network, RefreshCw } from 'lucide-react';

const DeploymentIntegration = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Assessment & Mapping',
      description: 'Analyze workflows, policies, operational structures and data readiness.'
    },
    {
      icon: Rocket,
      title: 'Guardrail-First Deployment',
      description: 'Activate MindoraX AI for a targeted workflow under strict governance.'
    },
    {
      icon: LineChart,
      title: 'Measured Evaluation (60–90 days)',
      description: 'Assess impact on speed, decision quality, governance, operational load and customer experience.'
    },
    {
      icon: Network,
      title: 'Scaling Across Workflows',
      description: 'Expand intelligence and agentic capabilities across additional workflows and business lines.'
    },
    {
      icon: RefreshCw,
      title: 'Continuous Learning',
      description: 'Iterate policies, guardrails, reasoning behaviors and agents over time.'
    }
  ];

  return (
    <section className="py-32 bg-muted/50 border-t border-white/5">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Safe, phased and governance-aligned adoption
          </h2>
          <div className="w-24 h-1.5 bg-teal-500 rounded-full mx-auto opacity-50" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-hero-accent-1/0 via-hero-accent-1/50 to-hero-accent-1/0 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex items-center md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Icon Marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-14 h-14 rounded-full bg-card border-2 border-hero-accent-1/50 shadow-[0_0_20px_-5px_rgba(45,212,191,0.5)] flex items-center justify-center z-10 group">
                  <step.icon className="w-6 h-6 text-hero-accent-1 group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Content Box */}
                <div className="ml-20 md:ml-0 md:w-[42%] group">
                  <div className="bg-card p-8 rounded-2xl border-3 border-border/80 dark:border-border/60 hover:border-hero-accent-1/60 hover:bg-card/95 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.25)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number Watermark */}
                    <div className="absolute -top-4 -right-4 text-[80px] font-bold text-foreground/5 select-none leading-none">
                      0{index + 1}
                    </div>

                    <div className="text-sm font-bold text-hero-accent-1 mb-2 tracking-wider uppercase">Phase {index + 1}</div>
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
