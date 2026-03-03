import React from 'react';

const SwiftAIAICapabilities = () => {
  const capabilities = [
    {
      title: 'Automation at Scale',
      description: 'From invoices to reconciliations, CX workflows to supply chain processes, SWIFTAI takes on repetitive tasks across the enterprise.',
      icon: '⚡',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Data Cleanup & Debt Reduction',
      description: 'Reduces technical debt by eliminating redundant processes, unnecessary data, and outdated customizations.',
      icon: '🧹',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'from-emerald-50 to-emerald-100',
      borderColor: 'border-emerald-200'
    },
    {
      title: 'Decision Intelligence',
      description: 'Delivers clarity and foresight through real-time analytics and predictive insights for both back-office and customer-facing functions.',
      icon: '🧠',
      color: 'from-violet-500 to-violet-600',
      bgColor: 'from-violet-50 to-violet-100',
      borderColor: 'border-violet-200'
    },
    {
      title: 'Applied AI Modules',
      description: 'Extends intelligence into forecasting, copilots, conversational AI for CX, and computer vision to prepare your enterprise for the future.',
      icon: '🚀',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-hero-accent-1/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group">
              <div className="relative bg-card rounded-2xl p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] border border-border hover:shadow-2xl hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col overflow-hidden">
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {capability.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {capability.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed flex-grow text-base">
                    {capability.description}
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

export default SwiftAIAICapabilities;
