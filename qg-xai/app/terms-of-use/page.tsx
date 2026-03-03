import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Terms of Use | SwiftAI',
  description: 'Terms of Use for SwiftAI services and website.',
};

export default function TermsOfUsePage() {
  return (
    <LegalPageLayout title="Terms of Use" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the SwiftAI website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of Services</h2>
          <p>
            SwiftAI provides technology consulting, digital transformation, and related services. You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services in any way that could damage, disable, or impair our systems or interfere with others&apos; use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of SwiftAI or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Disclaimer of Warranties</h2>
          <p>
            Our services are provided &quot;as is&quot; without warranties of any kind. SwiftAI does not warrant that our services will be uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, SwiftAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Contact</h2>
          <p>
            For questions about these Terms of Use, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
