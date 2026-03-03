import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import SupplyChainHero from '@/components/SupplyChainHero';
import SupplyChainOverview from '@/components/SupplyChainOverview';
import SupplyChainExpertise from '@/components/SupplyChainExpertise';
import SupplyChainSolutions from '@/components/SupplyChainSolutions';
import SupplyChainSwiftAI from '@/components/SupplyChainSwiftAI';
import SupplyChainClosingCTA from '@/components/SupplyChainClosingCTA';

export default function SupplyChainServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* Supply Chain Hero Section */}
        <SupplyChainHero />

        {/* Supply Chain Overview Section */}
        <SupplyChainOverview />

        {/* Supply Chain Expertise Section */}
        <SupplyChainExpertise />

        {/* Supply Chain Solutions Section */}
        <SupplyChainSolutions />

        {/* SwiftAI in Supply Chain Section */}
        <SupplyChainSwiftAI />

        {/* Supply Chain Closing CTA Section */}
        <SupplyChainClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
