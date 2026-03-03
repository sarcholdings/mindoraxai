import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Cookie Notice | SwiftAI',
  description: 'Cookie Notice for SwiftAI website - information about how we use cookies.',
};

export default function CookieNoticePage() {
  return (
    <LegalPageLayout title="Cookie Notice" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-foreground">Essential cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
            <li><strong className="text-foreground">Analytics cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information.</li>
            <li><strong className="text-foreground">Functional cookies:</strong> Remember your preferences and choices to provide enhanced features.</li>
            <li><strong className="text-foreground">Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign effectiveness.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How to Manage Cookies</h2>
          <p>
            You can control and manage cookies through your browser settings. You can also use our{' '}
            <a href="/cookie-settings" className="text-primary hover:underline">Cookie Settings</a> page to customize your preferences for non-essential cookies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Third-Party Cookies</h2>
          <p>
            Some cookies are placed by third-party services that appear on our pages. We do not control these cookies, and you should check the respective third-party websites for more information about their use.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Updates</h2>
          <p>
            We may update this Cookie Notice from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this notice periodically.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For questions about our use of cookies, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
