import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PESHero from '@/components/PESHero';
import PESKeyFocusAreas from '@/components/PESKeyFocusAreas';
import PESMindoraXAIEnhancement from '@/components/PESMindoraXAIEnhancement';
import PESValue from '@/components/PESValue';
import PESClosingCTA from '@/components/PESClosingCTA';

export default function PESSolution() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        {/* Partner Ecosystem Strategy Hero Section */}
        <PESHero />

        {/* Key Focus Areas Section */}
        <PESKeyFocusAreas />

        {/* MindoraX AI Enhancement Section */}
        <PESMindoraXAIEnhancement />

        {/* The Value Section */}
        <PESValue />

        {/* PES Closing CTA Section */}
        <PESClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
