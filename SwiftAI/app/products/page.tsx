import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';
import { FeatureSteps } from '@/components/our-story/features-section';
import { CTA } from '@/components/our-story/call-to-action';
import SwiftAIAIIntro from '@/components/SwiftAIIntro';
import SwiftAIAIWhatItDoes from '@/components/SwiftAIWhatItDoes';
import SwiftAIAICapabilities from '@/components/SwiftAICapabilities';
import SwiftAIAIEmbedded from '@/components/SwiftAIEmbedded';
import SwiftAIAIImpact from '@/components/SwiftAIImpact';
import SwiftAIAIClosing from '@/components/SwiftAIClosing';

export const metadata = {
  title: 'Products | SwiftAI PRISM',
  description: 'Explore SwiftAI PRISM — enterprise observability, AI-powered SAP monitoring, and unified operational intelligence.',
};

const coreFeatures = [
  {
    step: 'Productivity',
    title: 'AI-Powered Efficiency',
    content: 'Handles repetitive tasks and frees your team\'s time for strategic work that actually matters.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Personality',
    title: 'Adaptive Intelligence',
    content: 'Learns how your team works and adapts to your unique processes and preferences.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Precision',
    title: 'Anticipatory Insights',
    content: 'Surfaces insights before you even ask, anticipating your needs with intelligent automation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Integration',
    title: 'Seamless Connectivity',
    content: 'Connects ERP, CRM, and cloud systems natively for unified enterprise intelligence.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
  },
];

const advancedCapabilities = [
  {
    step: 'Enterprise Integration',
    title: 'Universal System Connectivity',
    content: 'Works across SAP S/4HANA, ECC, BTP, and any cloud system for comprehensive enterprise coverage.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'AI Orchestration',
    title: 'Intelligent Workflow Automation',
    content: 'Orchestrates complex business processes with AI-driven decision making and automation.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Data Intelligence',
    title: 'Real-Time Insights',
    content: 'Transforms data into actionable insights with real-time analytics and predictive capabilities.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: 'Human-Centric Design',
    title: 'Empowering Leadership',
    content: 'Puts leaders back in control of their time, data, and decisions with intuitive AI assistance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Products() {
  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .sw6-hero {
          --hero-fg: 0 0% 100%;
          --hero-muted: 210 20% 78%;
          --hero-border: 217.2 32.6% 17.5%;
          --hero-bg: 222.2 84% 4.9%;
          --hero-accent-1: 172 90% 72%;
          --hero-accent-1-glow: 175 70% 32%;
          --hero-accent-2: 160 82% 62%;
          --hero-accent-2-glow: 155 65% 30%;
          --hero-accent-3: 192 100% 75%;
          --hero-accent-3-glow: 200 85% 32%;
          --hero-accent-4: 268 100% 78%;
          --hero-accent-4-glow: 270 70% 34%;
          --hero-gradient-1-from: 165 92% 82%;
          --hero-gradient-1-to: 192 95% 76%;
          --hero-gradient-2-from: 150 88% 80%;
          --hero-gradient-2-to: 172 92% 60%;
          --hero-gradient-3-from: 185 98% 84%;
          --hero-gradient-3-to: 212 96% 74%;
          --hero-gradient-4-from: 262 100% 86%;
          --hero-gradient-4-to: 282 98% 76%;
        }
        .sw6-hero h1 {
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1), 0 2px 20px rgba(0, 0, 0, 0.4);
        }
        .sw6-hero .hero-heading-gradient {
          color: transparent !important;
          background: linear-gradient(135deg, hsl(24 95% 53%), hsl(36 100% 65%), hsl(262 83% 58%)) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 24px rgba(139, 92, 246, 0.25)) brightness(1.15);
        }

        .sw6-sections > section {
          scroll-margin-top: 5rem;
        }
      `}</style>

      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation scrolledByDefault />

        {/* Page hero */}
        <div className="relative overflow-hidden sw6-hero" style={{ backgroundColor: '#0c1222' }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-orange-400/50" />
              <span className="text-xs font-mono tracking-[0.2em] uppercase text-orange-400/80">Products</span>
              <div className="h-px w-10 bg-orange-400/50" />
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] max-w-3xl">
              Intelligence built for <span className="hero-heading-gradient">enterprise operations</span>
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              SwiftAI PRISM unifies 1,100+ KPIs across SAP and surrounding layers into a single proactive observability platform.
            </p>
          </div>
        </div>

        <div className="relative bg-background sw6-sections">
          <div className="container px-4 mx-auto py-16 lg:py-24 space-y-16">

            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <FeatureSteps features={coreFeatures} title="Core Features" autoPlayInterval={4000} imageHeight="h-[500px]" />
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl shadow-sm overflow-hidden">
              <FeatureSteps features={advancedCapabilities} title="Advanced Capabilities" autoPlayInterval={4000} imageHeight="h-[500px]" />
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <SwiftAIAIIntro />
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl shadow-sm overflow-hidden">
              <SwiftAIAIWhatItDoes />
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <SwiftAIAICapabilities />
            </div>

            <div className="bg-muted/30 border border-border rounded-2xl shadow-sm overflow-hidden">
              <SwiftAIAIEmbedded />
            </div>

            <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <SwiftAIAIImpact />
            </div>

            <div className="rounded-2xl overflow-hidden">
              <SwiftAIAIClosing />
            </div>

            <CTA />
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
