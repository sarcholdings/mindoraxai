import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SupplyChainHero from '@/components/SupplyChainHero';
import SupplyChainOverview from '@/components/SupplyChainOverview';
import SupplyChainExpertise from '@/components/SupplyChainExpertise';
import SupplyChainSolutions from '@/components/SupplyChainSolutions';
import SupplyChainMindoraXAI from '@/components/SupplyChainMindoraXAI';
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

        {/* MindoraX AI in Supply Chain Section */}
        <SupplyChainMindoraXAI />

        {/* Supply Chain Closing CTA Section */}
        <SupplyChainClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
