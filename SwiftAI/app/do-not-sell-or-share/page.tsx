import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Do Not Sell or Share My Personal Information | SwiftAI',
  description: 'Your right to opt out of the sale or sharing of your personal information.',
};

export default function DoNotSellOrSharePage() {
  return (
    <LegalPageLayout title="Do Not Sell or Share My Personal Information" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your Privacy Rights</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), the Virginia Consumer Data Protection Act (VCDPA), and similar state privacy laws, you have the right to opt out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information. SwiftAI does not sell your personal information in the traditional sense. However, we want to provide you with clear information about your rights and how to exercise them.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment</h2>
          <p>
            SwiftAI does not sell personal information to third parties for monetary consideration. We may share certain information with service providers, analytics partners, or advertising networks in ways that could be considered a &quot;sale&quot; or &quot;sharing&quot; under broad legal definitions. You have the right to opt out of these practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How to Opt Out</h2>
          <p>
            You can exercise your opt-out rights in the following ways:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Use our <a href="/cookie-settings" className="text-primary hover:underline">Cookie Settings</a> page to manage your preferences for analytics and marketing cookies</li>
            <li>Contact us directly through our <a href="/contact" className="text-primary hover:underline">contact page</a> to submit an opt-out request</li>
            <li>Use the &quot;Do Not Sell or Share My Personal Information&quot; link in our website footer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Other Privacy Rights</h2>
          <p>
            Depending on your location, you may also have the right to: know what personal information we collect; request deletion of your personal information; correct inaccurate information; limit the use of sensitive personal information; and not receive discriminatory treatment for exercising your privacy rights. See our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for more details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Authorized Agents</h2>
          <p>
            You may designate an authorized agent to submit requests on your behalf. We may require verification of the agent&apos;s authority and your identity before processing such requests.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            To submit an opt-out request or for questions about your privacy rights, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
