'use client';

import { useState } from 'react';
import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, X } from 'lucide-react';

const jobs = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    team: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build beautiful, performant UIs with React and modern web tech. Collaborate with design and backend teams to deliver enterprise-grade observability dashboards.',
  },
  {
    id: 'smm',
    title: 'Marketing Lead',
    team: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description: 'Drive our brand presence and engagement across all major channels. Own demand generation, content strategy, and growth programs for a B2B SaaS product.',
  },
  {
    id: 'pm',
    title: 'Product Manager',
    team: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own product vision, work with cross-functional teams, and deliver features that delight enterprise users monitoring complex SAP landscapes.',
  },
  {
    id: 'ux',
    title: 'UX/UI Designer',
    team: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Design intuitive, data-dense interfaces for enterprise monitoring. Translate complex operational data into clear, actionable visual experiences.',
  },
];

export default function Careers() {
  const [applying, setApplying] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    position: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleApply = (jobId: string, jobTitle: string) => {
    setApplying(jobId);
    setSubmitted(false);
    setFormData(f => ({ ...f, position: jobTitle, name: '', email: '', company: '', message: '' }));
    setTimeout(() => {
      document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SwiftAINavigation scrolledByDefault />

      {/* Page hero */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#0c1222' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.12),transparent)]" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-orange-400/50" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-orange-400/80">Join the Team</span>
            <div className="h-px w-10 bg-orange-400/50" />
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Build the future of <span className="text-orange-400">enterprise observability</span>
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
            We&apos;re a remote-first team passionate about making complex SAP landscapes understandable, resilient, and proactively managed.
          </p>
        </div>
      </div>

      <main className="flex-1 py-20">
        <div className="max-w-4xl mx-auto px-6">

          {/* Values strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {[
              { label: 'Remote-first', desc: 'Work from anywhere. Async by default.' },
              { label: 'Mission-driven', desc: 'Solving real problems for real enterprises.' },
              { label: 'Grow fast', desc: 'High ownership, direct impact, steep learning.' },
            ].map((v) => (
              <div key={v.label} className="rounded-xl border border-border/60 bg-card p-5">
                <p className="font-semibold text-foreground mb-1">{v.label}</p>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* Open positions */}
          <h2 className="text-2xl font-semibold text-foreground mb-6">Open positions</h2>
          <div className="space-y-4 mb-20">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-2xl border border-border/60 bg-card p-6 hover:border-orange-500/40 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full">{job.team}</span>
                      <span className="text-xs text-muted-foreground">{job.location}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{job.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-orange-400 transition-colors mb-2">{job.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                  </div>
                  <Button
                    onClick={() => handleApply(job.id, job.title)}
                    className="shrink-0 rounded-full bg-orange-500 hover:bg-orange-400 text-white px-6 self-start"
                  >
                    Apply <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Application form */}
          {applying && (
            <div id="apply-form" className="scroll-mt-24 rounded-2xl border border-orange-500/20 bg-card p-8 shadow-[0_20px_60px_-15px_rgba(249,115,22,0.1)]">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground">Apply for <span className="text-orange-400">{formData.position}</span></h2>
                  <p className="text-sm text-muted-foreground mt-1">We&apos;ll get back to you within 2–3 business days.</p>
                </div>
                <button onClick={() => setApplying(null)} className="text-muted-foreground hover:text-foreground transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">✓</div>
                  <p className="text-lg font-semibold text-foreground">Application submitted!</p>
                  <p className="text-sm text-muted-foreground mt-2">Thanks for applying. We&apos;ll be in touch soon.</p>
                </div>
              ) : (
                <form
                  action="https://script.google.com/macros/s/AKfycbwG-qjQsqSjGB2n8LhHt_ZV5mZkiHGFz7lUuMn80kCpTEYxGegQ6Jur1cq4o_VBzIpR/exec"
                  method="POST"
                  target="_blank"
                  className="space-y-4"
                >
                  <input type="hidden" name="position" value={formData.position} />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full name *"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="rounded-lg"
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address *"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="rounded-lg"
                    />
                  </div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Current company (optional)"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="rounded-lg"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about yourself and why you're a great fit *"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="rounded-lg"
                  />
                  <div className="flex gap-3 pt-2">
                    <Button type="submit" className="rounded-full bg-orange-500 hover:bg-orange-400 text-white px-8 flex-1">
                      Submit application
                    </Button>
                    <Button type="button" variant="outline" className="rounded-full" onClick={() => setApplying(null)}>
                      Cancel
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Your information will never be shared or sold.</p>
                </form>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
