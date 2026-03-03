import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Privacy Policy | SwiftAI',
  description: 'Privacy Policy for SwiftAI - how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
          <p>
            SwiftAI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, phone number, company name, and other information you provide when contacting us, subscribing to our newsletter, or using our services. We also collect technical data including IP address, browser type, and usage patterns.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, communicate with you, process requests, comply with legal obligations, and for other legitimate business purposes. We do not sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
          <p>
            We may share your information with service providers who assist us in operating our business, or when required by law. We do not sell, trade, or rent your personal information to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information. You may also have the right to opt out of certain data practices. See our{' '}
            <a href="/do-not-sell-or-share" className="text-primary hover:underline">Do Not Sell or Share My Personal Information</a> page for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
          <p>
            For privacy-related questions, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
