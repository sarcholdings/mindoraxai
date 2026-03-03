import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import AboutSection from '@/components/AboutSection';
import WhyUsSection from '@/components/WhyUsSection';
import DeliveryApproachSection from '@/components/DeliveryApproachSection';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SwiftAINavigation scrolledByDefault />
      <main className="section-container pt-20 mt-10">
        <AboutSection />
        <div className="my-16" />
        {/* <WhyUsSection /> */}
        {/* <DeliveryApproachSection/> */}
      </main>
      <Footer />
    </div>
  );
}
