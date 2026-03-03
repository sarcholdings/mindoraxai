import SwiftAINavigation from '@/components/swiftai/Navigation';
import Footer from '@/components/swiftai/Footer';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SwiftAINavigation scrolledByDefault />
      <main className="flex-1 section-container pt-20 pb-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
