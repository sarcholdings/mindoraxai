import React from 'react';

const SwiftAIAIEmbedded = () => {
  const domains = [
    {
      title: 'Customer Experience',
      description: 'Automates service flows and enhances personalization',
      icon: '👥',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Finance',
      description: 'Simplifies reporting, compliance, and reconciliations',
      icon: '💰',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'ERP',
      description: 'Prepares your core for SAP S/4HANA migration',
      icon: '🏢',
      color: 'from-violet-500 to-violet-600'
    },
    {
      title: 'Supply Chain',
      description: 'Improves visibility and forecasting',
      icon: '📦',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Cloud',
      description: 'Accelerates clean core adoption and agility',
      icon: '☁️',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-hero-accent-1/20 to-transparent"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Embedded Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SWIFTAI is not a stand-alone tool. It's built into the way SwiftAI delivers transformation.
            </p>
          </div>
          
          {/* Domains Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {domains.map((domain, index) => (
              <div key={index} className="group">
                <div className="relative bg-accent/50 rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-hero-accent-1/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r ${domain.color} flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {domain.icon}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 transition-colors duration-300">
                      {domain.title}
                    </h3>
                    <p className="text-muted-foreground text-sm transition-colors duration-300">
                      {domain.description}
                    </p>
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

export default SwiftAIAIEmbedded;
