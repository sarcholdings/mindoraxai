import React from 'react';

const SwiftAIAIIntro = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hero-accent-1/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">SwiftAI</span> – Intelligence That Clears the Path
            </h2>
          </div>
          
          {/* Main Content */}
          <div className="space-y-8 text-left max-w-4xl mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Intro</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transformation is demanding. Legacy systems weigh you down, technical debt piles up, and teams spend too much time on manual work instead of driving growth. Customers, markets, and regulators demand speed and clarity — all at once.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                That's where SwiftAI comes in. Quietly powerful, always present — SWIFTAI simplifies what's complex, clears away what's unnecessary, and accelerates what matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiftAIAIIntro;
