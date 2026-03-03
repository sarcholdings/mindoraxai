import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import AIDataHero from '@/components/AIDataHero';
import AIDataExpandedCapabilities from '@/components/AIDataExpandedCapabilities';
import AIDataSwiftAIEnhancement from '@/components/AIDataSwiftAIEnhancement';
import AIDataEmergingTechHorizon from '@/components/AIDataEmergingTechHorizon';
import AIDataWhyItMatters from '@/components/AIDataWhyItMatters';
import AIDataClosingCTA from '@/components/AIDataClosingCTA';

export default function AIDATASolution() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* AI & Data for the Intelligent Enterprise Hero Section */}
        <AIDataHero />

        {/* Expanded Capabilities Section */}
        <AIDataExpandedCapabilities />

        {/* SwiftAI Enhancement Section */}
        <AIDataSwiftAIEnhancement />

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
