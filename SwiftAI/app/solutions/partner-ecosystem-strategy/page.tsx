import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import PESHero from '@/components/PESHero';
import PESKeyFocusAreas from '@/components/PESKeyFocusAreas';
import PESSwiftAIEnhancement from '@/components/PESSwiftAIEnhancement';
import PESValue from '@/components/PESValue';
import PESClosingCTA from '@/components/PESClosingCTA';

export default function PESSolution() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* Partner Ecosystem Strategy Hero Section */}
        <PESHero />

        {/* Key Focus Areas Section */}
        <PESKeyFocusAreas />

        {/* SwiftAI Enhancement Section */}
        <PESSwiftAIEnhancement />

        {/* The Value Section */}
        <PESValue />

        {/* PES Closing CTA Section */}
        <PESClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
