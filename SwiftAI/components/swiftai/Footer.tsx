'use client';

import { Linkedin } from 'lucide-react';

const GRADIENT_BLOB =
  'https://framerusercontent.com/images/zSXIWZUZ70dcBomAGSlIXbL20Os.png?width=880&height=1168';
const GRAIN_TEXTURE =
  'https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png?width=256&height=256';

const SwiftAIFooter = () => {
  return (
    <footer className="w-full relative">
      {/* Main Footer Section — hero-style background */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#111838' }}>
        {/* Gradient blob — top */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          style={{
            WebkitMask: 'linear-gradient(transparent 3%, black 59%)',
            mask: 'linear-gradient(transparent 3%, black 59%)',
          }}
          aria-hidden="true"
        >
          <img
            src={GRADIENT_BLOB}
            alt=""
            className="w-full h-auto"
            style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
          />
        </div>

        {/* Gradient blob — bottom */}
        <div
          className="pointer-events-none absolute inset-0 z-0 overflow-visible"
          style={{
            WebkitMask: 'linear-gradient(black 18%, transparent 83%)',
            mask: 'linear-gradient(black 18%, transparent 83%)',
            top: 'auto',
            bottom: 0,
            height: '100%',
          }}
          aria-hidden="true"
        >
          <img
            src={GRADIENT_BLOB}
            alt=""
            className="w-full h-auto absolute bottom-0"
            style={{ transform: 'rotate(180deg)', objectFit: 'cover' }}
          />
        </div>

        {/* Film grain texture */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            opacity: 0.1,
            backgroundImage: `url(${GRAIN_TEXTURE})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px auto',
            backgroundPosition: 'left top',
            transform: 'rotate(-180deg)',
          }}
          aria-hidden="true"
        />

        {/* Footer content */}
        <div className="relative z-10 px-8 pt-16 pb-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
            {/* Left: Let's connect */}
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-5xl font-light text-white/90 mb-12">Let&apos;s connect</h2>
              <ul className="space-y-5 text-xl font-light">
                <li>
                  <a href="/contact" className="text-white/90 hover:text-teal-400 transition-colors duration-300">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white/90 hover:text-teal-400 transition-colors duration-300">
                    About SwiftAI
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-white/90 hover:text-teal-400 transition-colors duration-300">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-white/90 hover:text-teal-400 transition-colors duration-300">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Middle Columns */}
            <div className="flex-[2] grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:mt-0">
              <ul className="space-y-4 text-base font-light">
                <li>
                  <a href="/services" className="text-white/90 hover:text-white transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="text-white/90 hover:text-white transition-colors duration-300">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white/90 hover:text-white transition-colors duration-300">
                    Products
                  </a>
                </li>
              </ul>
              <ul className="space-y-4 text-base font-light">
                <li>
                  <a href="/about" className="text-white/90 hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-white/90 hover:text-white transition-colors duration-300">
                    Careers
                  </a>
                </li>
              </ul>
              <ul className="space-y-4 text-base font-light">
                <li>
                  <a href="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/solutions" className="text-white/90 hover:text-white transition-colors duration-300">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-white/90 hover:text-white transition-colors duration-300">
                    Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-end justify-between min-w-[180px] mt-12 lg:mt-0">
              <div />
              <div className="flex flex-col items-end">
                <span className="text-sm text-white/90 mb-3 tracking-wide uppercase font-mono text-[11px]">
                  Follow us
                </span>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    aria-label="X"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-sm font-semibold">X</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/swiftai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="4" fill="currentColor" />
                      <path d="M10 15.5V8.5L16 12L10 15.5Z" fill="#111838" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/85 hover:text-white hover:bg-white/10 transition-all duration-300"
                  >
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <rect width="24" height="24" rx="6" fill="currentColor" />
                      <circle cx="12" cy="12" r="5" stroke="#111838" strokeWidth="2" />
                      <circle cx="17" cy="7" r="1" fill="#111838" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-7xl mx-auto mt-14 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Bottom legal — kept inside the dark section */}
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm">
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
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
            <p className="text-sm text-white/95 mb-2">
              &copy; 2025 SwiftAI. See{' '}
              <a href="/terms-of-use" className="text-teal-300 hover:text-teal-200 underline transition-colors">
                Terms of Use
              </a>{' '}
              for more information.
            </p>
            <p className="text-sm text-white/90 max-w-5xl leading-relaxed">
              SwiftAI refers to one or more independent technology consulting entities.
              Each entity is legally separate and independent. SwiftAI does not provide
              services to clients in all jurisdictions. Certain services may not be available to
              attest clients under the rules and regulations of public accounting. Please see{' '}
              <a href="/about" className="text-teal-300 hover:text-teal-200 underline transition-colors">
                our about page
              </a>{' '}
              to learn more about our global network.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SwiftAIFooter;
