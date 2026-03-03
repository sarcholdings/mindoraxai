import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import TCTHero from '@/components/TCTHero';
import TCTWhatItDelivers from '@/components/TCTWhatItDelivers';
import TCTWhyItMatters from '@/components/TCTWhyItMatters';
import TCTClosingCTA from '@/components/TCTClosingCTA';

export default function TCTSolutions() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* Transformation Control Tower Hero Section */}
        <TCTHero />

        {/* What the Control Tower Delivers Section */}
        <TCTWhatItDelivers />

        {/* Why It Matters Section */}
        <TCTWhyItMatters />

        {/* TCT Closing CTA Section */}
        <TCTClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
