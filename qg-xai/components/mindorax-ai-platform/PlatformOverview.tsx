import React from 'react';
import { Shield, Brain, Network, Mic, FileText, CheckCircle, Lock, Layers } from 'lucide-react';

const PlatformOverview = () => {
  const features = [
    { icon: Shield, label: 'Unified trust intelligence' },
    { icon: Brain, label: 'Agentic AI capabilities' },
    { icon: Network, label: 'AI-driven reasoning' },
    { icon: Mic, label: 'Voice and multimodal interactions' },
    { icon: Layers, label: 'Intelligent orchestration' },
    { icon: FileText, label: 'Explainable decisions' },
    { icon: Lock, label: 'Audit and governance controls' },
    { icon: CheckCircle, label: 'Integration-first architecture' },
  ];

  return (
    <section id="platform-overview" className="py-32 bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hero-accent-1/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                A platform designed for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hero-accent-1 to-primary">
                  trust-critical environments
                </span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-hero-accent-1 to-primary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                MindoraX AI provides a single trust and intelligence foundation that strengthens decision-making, oversight and control across complex organizational workflows.
              </p>
              <p>
                The platform integrates with existing systems to create unified visibility and support agentic execution of high-stakes, policy-aligned processes.
              </p>
              <div className="p-6 rounded-2xl bg-card border-3 border-border/80 dark:border-border/60 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-medium text-foreground relative z-10">
                  This architecture allows MindoraX AI to operate across verticals and business lines while ensuring consistency, clarity and compliance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-4 border-border/80 dark:border-border/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative group hover:border-hero-accent-1/50 hover:shadow-[0_25px_70px_-10px_rgba(45,212,191,0.25)] transition-all duration-500 backdrop-blur-xl">
            {/* Card Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Gradient Border Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-br from-hero-accent-1/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            <h3 className="text-xl font-semibold text-foreground mb-8 relative z-10">MindoraX AI combines:</h3>
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
