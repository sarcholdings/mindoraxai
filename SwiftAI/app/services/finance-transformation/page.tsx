import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import FinanceHero from '@/components/FinanceHero';
import FinanceIntro from '@/components/FinanceIntro';
import FinanceApproach from '@/components/FinanceApproach';
import FinanceServiceBuckets from '@/components/FinanceServiceBuckets';
import SwiftAIHighlight from '@/components/SwiftAIHighlight';
import FinanceClosingCTA from '@/components/FinanceClosingCTA';

export default function FinanceServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        <FinanceHero />
        <FinanceIntro />
        <FinanceApproach />
        <FinanceServiceBuckets />
        <SwiftAIHighlight />
        <FinanceClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
