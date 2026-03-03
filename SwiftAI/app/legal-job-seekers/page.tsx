import LegalPageLayout from '@/components/LegalPageLayout';

export const metadata = {
  title: 'Legal Information for Job Seekers | SwiftAI',
  description: 'Legal information for job seekers at SwiftAI - your rights and our commitments.',
};

export default function LegalJobSeekersPage() {
  return (
    <LegalPageLayout title="Legal Information for Job Seekers" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your Privacy Matters</h2>
          <p>
            SwiftAI is committed to protecting the privacy of job applicants. This page provides important legal information about how we collect, use, and protect your personal information during the recruitment process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
          <p>
            When you apply for a position at SwiftAI, we may collect your name, contact information, resume, cover letter, work history, education, skills, and other information you provide. We may also collect information from references, background checks (where permitted by law), and publicly available sources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
          <p>
            We use your information to evaluate your application, communicate with you about the recruitment process, conduct background checks where appropriate, and comply with legal obligations. We may retain your information for future opportunities with your consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Equal Employment Opportunity</h2>
          <p>
            SwiftAI is an equal opportunity employer. We do not discriminate on the basis of race, color, religion, sex, national origin, age, disability, veteran status, or any other characteristic protected by applicable law. We are committed to providing reasonable accommodations to qualified individuals with disabilities.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, or delete your personal information. You may also have the right to withdraw your application or consent at any time. Contact us for more information about your rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Labor Condition Applications</h2>
          <p>
            For information about our Labor Condition Applications (LCAs) for H-1B and other visa programs, please see our{' '}
            <a href="/labor-condition-applications" className="text-primary hover:underline">Labor Condition Applications</a> page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Contact</h2>
          <p>
            For questions about our recruitment practices or your application, please visit our{' '}
            <a href="/careers" className="text-primary hover:underline">Careers</a> page or{' '}
            <a href="/contact" className="text-primary hover:underline">contact us</a>.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
}
