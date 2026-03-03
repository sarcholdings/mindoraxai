import React from 'react';

const SwiftAIAIImpact = () => {
  const impacts = [
    'ERP and cloud migration up to 12–16 weeks faster',
    'Finance and supply chain processes up to 25% more efficient',
    'CX service flows simplified and response times reduced',
    'Technical debt cut, compliance improved, and teams free to focus on innovation'
  ];

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With SWIFTAI at work, transformation becomes faster, cleaner, and more strategic.
            </p>
          </div>
          
          {/* Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {impacts.map((impact, index) => (
              <div key={index} className="group">
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-hero-accent-1/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                      {impact}
                    </span>
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

export default SwiftAIAIImpact;
