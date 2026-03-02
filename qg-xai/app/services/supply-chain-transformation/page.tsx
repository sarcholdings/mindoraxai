import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SupplyChainHero from '@/components/SupplyChainHero';
import SupplyChainOverview from '@/components/SupplyChainOverview';
import SupplyChainExpertise from '@/components/SupplyChainExpertise';
import SupplyChainSolutions from '@/components/SupplyChainSolutions';
import SupplyChainSwiftAIAI from '@/components/SupplyChainSwiftAIAI';
import SupplyChainClosingCTA from '@/components/SupplyChainClosingCTA';

export default function SupplyChainServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
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
        <SupplyChainSwiftAIAI />

        {/* Supply Chain Closing CTA Section */}
        <SupplyChainClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
