import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import CloudJourneyHero from '@/components/CloudJourneyHero';
import CloudJourneySteps from '@/components/CloudJourneySteps';
import CloudSAPHero from '@/components/CloudSAPHero';
import WhyCloudSAP from '@/components/WhyCloudSAP';
import CloudCapabilities from '@/components/CloudCapabilities';
import CloudSwiftAIAdvantage from '@/components/CloudSwiftAIAdvantage';
import CloudClosingCTA from '@/components/CloudClosingCTA';
import CloudServicesClosingCTA from '@/components/CloudServicesClosingCTA';

export default function CloudServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* Cloud Journey Section */}
        <CloudJourneyHero />
        <CloudJourneySteps />

        {/* SAP S/4HANA Public Cloud Section */}
        <CloudSAPHero />
        <WhyCloudSAP />
        <CloudCapabilities />
        <CloudSwiftAIAdvantage />
        <CloudClosingCTA />

        {/* Final Cloud Services CTA */}
        <CloudServicesClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
