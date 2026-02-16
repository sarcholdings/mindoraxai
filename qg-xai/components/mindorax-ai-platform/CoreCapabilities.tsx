import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Bot, Cpu, MessageSquare, Workflow, Scale, Blocks } from 'lucide-react';

const CoreCapabilities = () => {
  const capabilities = [
    {
      icon: ShieldCheck,
      title: 'Unified Trust Intelligence',
      description: 'Consolidates identity, behavioral, transactional, document and policy data into a single trust layer.',
      color: 'text-teal-400',
      bg: 'bg-teal-400/10'
    },
    {
      icon: Bot,
      title: 'Agentic AI Framework',
      description: 'Multi-agent system for customer interactions, decision preparation, and context building within policy guardrails.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10'
    },
    {
      icon: Cpu,
      title: 'AI-Driven Reasoning',
      description: 'Contextual reasoning enabling clear decisions in environments with incomplete or real-time information.',
      color: 'text-violet-400',
      bg: 'bg-violet-400/10'
    },
    {
      icon: MessageSquare,
      title: 'Voice & Multimodal',
      description: 'Voice, chat and guided digital interactions for onboarding, verification, and service engagements.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10'
    },
    {
      icon: Workflow,
      title: 'Intelligent Orchestration',
      description: 'End-to-end flow orchestration powered by agentic intelligence and human-in-the-loop oversight.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-400/10'
    },
    {
      icon: Scale,
      title: 'Explainability & Governance',
      description: 'Transparent narratives, traceability, and policy-aligned reasoning designed for audit and compliance.',
      color: 'text-rose-400',
      bg: 'bg-rose-400/10'
    },
    {
      icon: Blocks,
      title: 'Integration Layer',
      description: 'Seamless integration with core apps, ERPs, LOS/LMS, CRMs, and data lakes. No core replacement required.',
      color: 'text-slate-400',
      bg: 'bg-slate-400/10',
      fullWidth: true
    }
  ];

  return (
    <section className="py-32 bg-muted/30 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Core capabilities of MindoraX AI
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of intelligence tools designed to unify and secure your operations.
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

                {/* Gradient overlay on hover */}
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
