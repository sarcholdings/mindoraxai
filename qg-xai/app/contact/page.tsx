import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <main className="flex-1 section-container py-16">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
