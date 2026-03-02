import React from 'react';

const PlatformOrchestration = () => {
  const benefits = [
    'Detect problems early before users or customers are impacted',
    'Identify root causes faster across the entire SAP landscape',
    'Reduce downtime and performance degradation',
    'Ensure business-critical processes complete on time',
    'Maintain service levels, compliance, and business continuity',
    'Connect fragmented signals across SAP and supporting layers',
    'Highlight which risks need attention first',
    'Give leadership confidence in operational stability',
  ];

  return (
    <section id="platform-orchestration" className="py-32 bg-background overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-20" />

            <div className="relative z-10 grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card backdrop-blur-xl p-6 rounded-2xl border-3 border-border/80 dark:border-border/60 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_12px_40px_-5px_rgba(45,212,191,0.25)] transition-all duration-300 hover:-translate-y-2 text-center flex items-center justify-center min-h-[100px] group"
                >
                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors text-sm">{benefit}</span>
                </div>
              ))}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center z-20 animate-pulse">
                <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full shadow-[0_0_50px_-10px_rgba(45,212,191,0.5)]" />
                <div className="relative z-10 text-center">
                  <span className="block text-foreground font-bold text-xl leading-none">SOM</span>
                  <span className="text-teal-100 text-sm">Core</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <p className="text-sm font-semibold tracking-widest uppercase text-orange-500">/Why SOM</p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                From reactive firefighting to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">proactive business resilience</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SOM detects slow-building issues before they become visible failures, connects fragmented
                signals across SAP and supporting layers, and highlights which risks need attention first —
                instead of flooding teams with disconnected alerts.
              </p>
              <div className="flex items-center gap-4 p-5 rounded-xl bg-accent border-3 border-border/80 dark:border-border/60 hover:bg-background/50 hover:border-hero-accent-1/60 hover:shadow-xl hover:shadow-hero-accent-1/10 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-1.5 h-12 bg-hero-accent-1 rounded-full relative z-10" />
                <p className="font-medium text-foreground relative z-10">
                  Helps technical teams intervene earlier with better context and gives leadership
                  greater confidence in operational stability and readiness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformOrchestration;
