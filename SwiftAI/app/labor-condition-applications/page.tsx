import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Labor Condition Applications | SwiftAI',
  description: 'Labor Condition Applications (LCAs) for H-1B and other visa programs at SwiftAI.',
};

export default function LaborConditionApplicationsPage() {
  return (
    <LegalPageLayout title="Labor Condition Applications" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Overview</h2>
          <p>
            SwiftAI files Labor Condition Applications (LCAs) with the U.S. Department of Labor when we seek to employ nonimmigrant workers in H-1B, H-1B1, or E-3 visa classifications. LCAs attest to our compliance with wage and working condition requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Public Access File</h2>
          <p>
            In accordance with U.S. Department of Labor regulations, we maintain a Public Access File for each LCA. The file contains the LCA, supporting documentation, and other required records. This file is available for public inspection during normal business hours at our principal place of business.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">LCA Attestations</h2>
          <p>
            By filing an LCA, SwiftAI attests that we will: pay the required wage rate; provide working conditions that will not adversely affect similarly employed U.S. workers; provide notice of the filing to workers; and have no strike or lockout in progress at the place of employment.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Requesting LCA Information</h2>
          <p>
            To request copies of our Labor Condition Applications or to schedule an appointment to view the Public Access File, please contact our Human Resources department through our{' '}
            <a href="/contact" className="text-primary hover:underline">contact page</a>. We will respond to your request in accordance with applicable regulations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Additional Resources</h2>
          <p>
            The U.S. Department of Labor&apos;s Office of Foreign Labor Certification maintains a searchable database of certified LCAs. For more information about the LCA process, visit the Department of Labor website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For questions about our Labor Condition Applications, please contact us at{' '}
            <a href="/contact" className="text-primary hover:underline">our contact page</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
