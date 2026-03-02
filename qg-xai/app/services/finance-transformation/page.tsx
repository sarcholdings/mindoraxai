import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FinanceHero from '@/components/FinanceHero';
import FinanceIntro from '@/components/FinanceIntro';
import FinanceApproach from '@/components/FinanceApproach';
import FinanceServiceBuckets from '@/components/FinanceServiceBuckets';
import SwiftAIAIHighlight from '@/components/SwiftAIAIHighlight';
import FinanceClosingCTA from '@/components/FinanceClosingCTA';

export default function FinanceServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Navigation />
      <main>
        <FinanceHero />
        <FinanceIntro />
        <FinanceApproach />
        <FinanceServiceBuckets />
        <SwiftAIAIHighlight />
        <FinanceClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
