import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';
import ProductsHero from '@/components/ProductsHero';
import SwiftAIAIIntro from '@/components/SwiftAIIntro';
import SwiftAIAIWhatItDoes from '@/components/SwiftAIWhatItDoes';
import SwiftAIAICapabilities from '@/components/SwiftAICapabilities';
import SwiftAIAIEmbedded from '@/components/SwiftAIEmbedded';
import SwiftAIAIImpact from '@/components/SwiftAIImpact';
import SwiftAIAIClosing from '@/components/SwiftAIClosing';

export default function Products() {
  const swiftAIFeatures = [
    {
      step: 'Productivity',
      title: 'AI-Powered Efficiency',
      content: 'Handles repetitive tasks and frees your team\'s time for strategic work that actually matters.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Personality',
      title: 'Adaptive Intelligence',
      content: 'Learns how your team works and adapts to your unique processes and preferences.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Precision',
      title: 'Anticipatory Insights',
      content: 'Surfaces insights before you even ask, anticipating your needs with intelligent automation.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Integration',
      title: 'Seamless Connectivity',
      content: 'Connects ERP, CRM, and cloud systems natively for unified enterprise intelligence.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const swiftAICapabilities = [
    {
      step: 'Enterprise Integration',
      title: 'Universal System Connectivity',
      content: 'Works across SAP S/4HANA, ECC, BTP, and any cloud system for comprehensive enterprise coverage.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'AI Orchestration',
      title: 'Intelligent Workflow Automation',
      content: 'Orchestrates complex business processes with AI-driven decision making and automation.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Data Intelligence',
      title: 'Real-Time Insights',
      content: 'Transforms data into actionable insights with real-time analytics and predictive capabilities.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      step: 'Human-Centric Design',
      title: 'Empowering Leadership',
      content: 'Puts leaders back in control of their time, data, and decisions with intuitive AI assistance.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation />
        <ProductsHero />

        <div className="relative bg-background">
          <div className="container px-4 mx-auto py-16 lg:py-24">
            {/* SwiftAI Core Features */}
            <div className="bg-card border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mb-16">
              <FeatureSteps
                features={swiftAIFeatures}
                title="SwiftAI Core Features"
                autoPlayInterval={4000}
                imageHeight="h-[500px]"
              />
            </div>

            {/* SwiftAI Capabilities */}
            <div className="bg-muted/30 border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] mb-16">
              <FeatureSteps
                features={swiftAICapabilities}
                title="SwiftAI Capabilities"
                autoPlayInterval={4000}
                imageHeight="h-[500px]"
              />
            </div>

            {/* SwiftAI Intro Section */}
            <div className="bg-card border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mb-16">
              <SwiftAIAIIntro />
            </div>

            {/* SwiftAI What It Does Section */}
            <div className="bg-muted/30 border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] mb-16">
              <SwiftAIAIWhatItDoes />
            </div>

            {/* SwiftAI Capabilities Section */}
            <div className="bg-card border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mb-16">
              <SwiftAIAICapabilities />
            </div>

            {/* SwiftAI Embedded Across Transformation Section */}
            <div className="bg-muted/30 border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] mb-16">
              <SwiftAIAIEmbedded />
            </div>

            {/* SwiftAI Impact Section */}
            <div className="bg-card border border-border rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] mb-16">
              <SwiftAIAIImpact />
            </div>

            {/* SwiftAI Closing Section - dark CTA matching home FinalCTA */}
            <div className="mb-16 rounded-2xl overflow-hidden">
              <SwiftAIAIClosing />
            </div>

            {/* Call to Action */}
            <CTA />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
