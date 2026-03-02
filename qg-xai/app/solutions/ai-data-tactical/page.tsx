import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AIDataHero from '@/components/AIDataHero';
import AIDataExpandedCapabilities from '@/components/AIDataExpandedCapabilities';
import AIDataSwiftAIAIEnhancement from '@/components/AIDataSwiftAIAIEnhancement';
import AIDataEmergingTechHorizon from '@/components/AIDataEmergingTechHorizon';
import AIDataWhyItMatters from '@/components/AIDataWhyItMatters';
import AIDataClosingCTA from '@/components/AIDataClosingCTA';

export default function AIDATASolution() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* AI & Data for the Intelligent Enterprise Hero Section */}
        <AIDataHero />

        {/* Expanded Capabilities Section */}
        <AIDataExpandedCapabilities />

        {/* SwiftAI Enhancement Section */}
        <AIDataSwiftAIAIEnhancement />

        {/* Emerging Tech Horizon Section */}
        <AIDataEmergingTechHorizon />

        {/* Why It Matters Section */}
        <AIDataWhyItMatters />

        {/* AI & Data Closing CTA Section */}
        <AIDataClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
