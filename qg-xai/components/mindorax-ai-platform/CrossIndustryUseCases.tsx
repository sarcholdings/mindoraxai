import React from 'react';
import { Check } from 'lucide-react';

const CrossIndustryUseCases = () => {
  const useCases = [
    'Onboarding & identity verification',
    'Document intelligence',
    'Invoicing & accounts payable intelligence',
    'Decision intelligence & contextual reasoning',
    'Suitability & policy compliance',
    'Collections & repayment guidance',
    'Claims & dispute resolution',
    'Customer service and contact center intelligence',
    'Advisor and RM copilots',
    'Vendor and partner validations',
    'Customer profile and trust scoring'
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Gradient Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto bg-card backdrop-blur-xl border-4 border-border/80 dark:border-border/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] rounded-3xl p-8 md:p-16 relative overflow-hidden group hover:border-hero-accent-1/50 hover:shadow-[0_25px_70px_-10px_rgba(45,212,191,0.25)] transition-all duration-500">
          {/* Border Gradient Animation on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-accent-1/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine pointer-events-none" />

          {/* Gradient Border Glow */}
          <div className="absolute -inset-[2px] bg-gradient-to-br from-hero-accent-1/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

          <div className="relative z-10 text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              A common intelligence layer for <span className="text-teal-400">trust-critical use cases</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              MindoraX AI supports a wide range of cross-industry, high-stakes workflows through a unified intelligence foundation.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="mt-1 p-1 bg-hero-accent-1/20 rounded-full border border-hero-accent-1/30 group-hover/item:bg-hero-accent-1 group-hover/item:border-hero-accent-1 transition-all duration-300">
                  <Check className="w-3 h-3 text-hero-accent-1 group-hover/item:text-background transition-colors" />
                </div>
                <span className="text-lg text-muted-foreground group-hover/item:text-foreground transition-colors">{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossIndustryUseCases;
