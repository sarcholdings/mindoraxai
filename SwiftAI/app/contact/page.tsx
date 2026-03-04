import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact | SwiftAI PRISM',
  description: 'Get in touch with the SwiftAI PRISM team to book a demo or discuss your SAP monitoring needs.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SwiftAINavigation scrolledByDefault />

      {/* Page hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0c1222' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange-400/50" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-orange-400/80">Get In Touch</span>
            <div className="h-px w-10 bg-orange-400/50" />
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Let&apos;s <span className="text-orange-400">talk</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            Ready to see what SwiftAI PRISM can do for your SAP landscape? Book a demo or send us a message — we&apos;ll respond within one business day.
          </p>
        </div>
      </div>

      <main className="flex-1 py-12">
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
