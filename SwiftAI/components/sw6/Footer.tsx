'use client';

import { Linkedin } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'MAIL',
    items: [
      { label: 'hello@swiftai.com', href: 'mailto:hello@swiftai.com' },
    ],
  },
  {
    title: 'LINKS',
    items: [
      { label: 'Why PRISM', href: '#sw6-why' },
      { label: 'Platform', href: '#sw6-platform' },
      { label: 'Showcase', href: '#sw6-showcase' },
      { label: 'Contact', href: '#sw6-contact' },
    ],
  },
  {
    title: 'SOCIAL',
    items: [
      { label: 'X / Twitter', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/company/swiftai' },
      { label: 'YouTube', href: '#' },
    ],
  },
  {
    title: 'LEGAL',
    items: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'Cookie Notice', href: '/cookie-notice' },
    ],
  },
];

const SwiftAIFooter = () => {
  return (
    <footer className="w-full relative">
      {/* Single container: image bg on top fading to black, footer content on black */}
      <div className="relative" style={{ backgroundColor: 'hsl(216 40% 3%)' }}>
        {/* Background image — positioned at the top, fades out via gradient */}
        <div className="absolute inset-x-0 top-0 h-[550px] pointer-events-none" aria-hidden="true">
          <img
            src="/images/cta-bg.webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(180deg, hsl(216 40% 8% / 0.4) 0%, hsl(216 40% 6% / 0.6) 25%, hsl(216 40% 5% / 0.8) 50%, hsl(216 40% 4% / 0.9) 75%, hsl(216 40% 3% / 1) 100%)',
            }}
          />
        </div>

        {/* CTA content — sits over the image */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light italic text-white leading-[1.1] tracking-[-0.03em] max-w-4xl">
            See risk early. Protect operations before disruption spreads.
          </h2>
          <button
            onClick={() =>
              document
                .getElementById('sw6-contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="mt-10 inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold uppercase tracking-[0.15em] px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="w-2 h-2 rounded-full bg-white" />
            Book a Demo
          </button>
        </div>

        {/* Footer content — on solid black (gradient has fully faded by here) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 md:gap-8">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-2.5 mb-3">
              <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="fTL" x1="8" y1="18" x2="16" y2="1" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#d946ef"/>
                  </linearGradient>
                  <linearGradient id="fLL" x1="2" y1="30" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f59e0b"/>
                    <stop offset="100%" stopColor="#f97316"/>
                  </linearGradient>
                  <linearGradient id="fRL" x1="24" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0ea5e9"/>
                    <stop offset="100%" stopColor="#10b981"/>
                  </linearGradient>
                </defs>
                <polygon points="16,1 8,18 12,18" fill="url(#fTL)"/>
                <polygon points="16,1 12,18 20,18" fill="#8b5cf6"/>
                <polygon points="16,1 20,18 24,18" fill="#06b6d4"/>
                <polygon points="8,18 2,30 16,26 12,18" fill="url(#fLL)"/>
                <polygon points="20,18 24,18 30,30 16,26" fill="url(#fRL)"/>
                <polygon points="2,30 16,26 16,30" fill="#f59e0b"/>
                <polygon points="16,30 16,26 30,30" fill="#84cc16"/>
              </svg>
                <span className="text-white text-lg font-bold tracking-tight">
                  Swift<span className="text-orange-400">AI</span>{' '}
                  <span className="font-normal text-white/70">PRISM</span>
                </span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                Enterprise observability reimagined. Unified SAP monitoring for resilient operations.
              </p>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-400/70 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault();
                            const el = document.getElementById(link.href.slice(1));
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mt-12 mb-6" />

          {/* Legal links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            {[
              { label: 'Terms of Use', href: '/terms-of-use' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Data Privacy Framework', href: '/data-privacy-framework' },
              { label: 'Cookie Notice', href: '/cookie-notice' },
              { label: 'Cookie Settings', href: '/cookie-settings' },
              { label: 'Legal information for Job Seekers', href: '/legal-job-seekers' },
              { label: 'Labor Condition Applications', href: '/labor-condition-applications' },
              { label: 'Do Not Sell or Share My Personal Information', href: '/do-not-sell-or-share' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright + disclaimer */}
          <p className="text-sm text-white/50 mb-2">
            &copy; 2025 SwiftAI. See{' '}
            <a href="/terms-of-use" className="text-orange-400 hover:text-orange-300 underline transition-colors">
              Terms of Use
            </a>{' '}
            for more information.
          </p>
          <p className="text-sm text-white/40 max-w-5xl leading-relaxed mb-8">
            SwiftAI refers to one or more independent technology consulting entities.
            Each entity is legally separate and independent. SwiftAI does not provide
            services to clients in all jurisdictions. Certain services may not be available to
            attest clients under the rules and regulations of public accounting. Please see{' '}
            <a href="/about" className="text-orange-400 hover:text-orange-300 underline transition-colors">
              our about page
            </a>{' '}
            to learn more about our global network.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="X"
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            >
              <span className="text-xs font-semibold">X</span>
            </a>
            <a
              href="https://www.linkedin.com/company/swiftai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.08] transition-all duration-300"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                <rect width="24" height="24" rx="4" fill="currentColor" />
                <path d="M10 15.5V8.5L16 12L10 15.5Z" fill="black" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SwiftAIFooter;
