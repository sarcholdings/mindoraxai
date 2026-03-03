import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Data Privacy Framework | SwiftAI',
  description: 'SwiftAI Data Privacy Framework - our commitment to data protection and privacy compliance.',
};

export default function DataPrivacyFrameworkPage() {
  return (
    <LegalPageLayout title="Data Privacy Framework" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
          <p>
            SwiftAI participates in the EU-U.S. Data Privacy Framework (DPF), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework as set forth by the U.S. Department of Commerce. We adhere to the DPF Principles with respect to personal data received from the European Union, United Kingdom, and Switzerland.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">DPF Principles</h2>
          <p>
            Our Data Privacy Framework program includes the following principles: Notice, Choice, Accountability for Onward Transfer, Security, Data Integrity and Purpose Limitation, Access, and Recourse, Enforcement and Liability.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Scope</h2>
          <p>
            This framework applies to personal data transferred from the EU, UK, and Switzerland to the United States in connection with our technology consulting services, client engagements, and business operations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Enforcement</h2>
          <p>
            SwiftAI is subject to the investigatory and enforcement powers of the Federal Trade Commission (FTC) with respect to our compliance with the DPF. In certain situations, we may be required to disclose personal data in response to lawful requests by public authorities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Dispute Resolution</h2>
          <p>
            If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, you may contact our U.S.-based third-party dispute resolution provider (free of charge) or pursue binding arbitration through the DPF Panel.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For questions about our Data Privacy Framework participation, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
