import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import SAPERPHero from '@/components/SAPERPHero';
import BrownfieldMatters from '@/components/BrownfieldMatters';
import TransformationJourney from '@/components/TransformationJourney';
import TechnologyAccelerates from '@/components/TechnologyAccelerates';
import SAPERPServicesClosingCTA from '@/components/SAPERPServicesClosingCTA';
import CloudSAPHero from '@/components/CloudSAPHero';
import WhyCloudSAP from '@/components/WhyCloudSAP';
import CloudCapabilities from '@/components/CloudCapabilities';
import CloudSwiftAIAdvantage from '@/components/CloudSwiftAIAdvantage';
import CloudClosingCTA from '@/components/CloudClosingCTA';

export default function SAPERPServices() {
  return (
    <div className="min-h-screen bg-gray-200">
      <SwiftAINavigation scrolledByDefault />
      <main>
        {/* SAP ERP Transformation Section */}
        <SAPERPHero />
        <BrownfieldMatters />
        <TransformationJourney />
        <TechnologyAccelerates />
        <SAPERPServicesClosingCTA />

        {/* Cloud & SAP S/4HANA Public Cloud Section */}
        <CloudSAPHero />
        <WhyCloudSAP />
        <CloudCapabilities />
        <CloudSwiftAIAdvantage />
        <CloudClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
