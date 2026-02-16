import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TCTHero from '@/components/TCTHero';
import TCTWhatItDelivers from '@/components/TCTWhatItDelivers';
import TCTWhyItMatters from '@/components/TCTWhyItMatters';
import TCTClosingCTA from '@/components/TCTClosingCTA';

export default function TCTSolutions() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
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
