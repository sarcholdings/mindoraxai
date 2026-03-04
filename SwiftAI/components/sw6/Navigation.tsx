'use client'

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

type NavItem = {
  label: string;
  target: string;
  children?: { label: string; target: string }[];
};

const NAV_LINKS: NavItem[] = [
  {
    label: 'Why PRISM',
    target: 'sw6-why',
    children: [
      { label: 'Why Proactive Monitoring', target: 'sw6-why' },
      { label: 'Financial Impact of Outages', target: 'sw6-impact' },
      { label: 'Gaps in Current Monitoring', target: 'sw6-gaps' },
      { label: 'How PRISM Closes Critical Gaps', target: 'sw6-closes-gaps' },
    ],
  },
  {
    label: 'Platform',
    target: 'sw6-platform',
    children: [
      { label: 'Key Features', target: 'sw6-capabilities' },
      { label: 'Coverage', target: 'sw6-coverage' },
      { label: 'Comparison', target: 'sw6-why-som' },
    ],
  },
  { label: 'Showcase', target: 'sw6-showcase' },
  { label: 'Contact', target: 'sw6-contact' },
];

const HOME_BASE = '/';

export default function SwiftAINavigation({ scrolledByDefault = false }: { scrolledByDefault?: boolean }) {
  const [scrolled, setScrolled] = useState(scrolledByDefault);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target: string) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    setMobileExpanded(null);
    if (pathname === '/') {
      e.preventDefault();
      scrollTo(target);
    }
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`flex items-center gap-2.5 transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="nTL" x1="8" y1="18" x2="16" y2="1" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#ec4899"/>
                  <stop offset="100%" stopColor="#d946ef"/>
                </linearGradient>
                <linearGradient id="nLL" x1="2" y1="30" x2="12" y2="18" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#f97316"/>
                </linearGradient>
                <linearGradient id="nRL" x1="24" y1="18" x2="30" y2="30" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0ea5e9"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
              </defs>
              <polygon points="16,1 8,18 12,18" fill="url(#nTL)"/>
              <polygon points="16,1 12,18 20,18" fill="#8b5cf6"/>
              <polygon points="16,1 20,18 24,18" fill="#06b6d4"/>
              <polygon points="8,18 2,30 16,26 12,18" fill="url(#nLL)"/>
              <polygon points="20,18 24,18 30,30 16,26" fill="url(#nRL)"/>
              <polygon points="2,30 16,26 16,30" fill="#f59e0b"/>
              <polygon points="16,30 16,26 30,30" fill="#84cc16"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-lg lg:text-xl font-bold tracking-tight">
                Swift<span className={`${scrolled ? 'text-orange-500' : 'text-orange-400'}`}>AI</span>{' '}
                <span className="font-normal">PRISM</span>
              </span>
              <span className={`text-[9px] tracking-[0.25em] uppercase font-medium ${
                scrolled ? 'text-muted-foreground' : 'text-white/50'
              }`}>
                Enterprise Observability Reimagined
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={(e) => handleNavClick(e as unknown as React.MouseEvent, link.target)}
                    className={`inline-flex items-center gap-1 text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 ${
                      scrolled
                        ? 'text-muted-foreground hover:text-foreground'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>

                  {openDropdown === link.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="min-w-[220px] rounded-xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-[0_16px_48px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
                        {link.children.map((child) => (
                          <Link
                            key={child.target}
                            href={`${HOME_BASE}#${child.target}`}
                            onClick={(e) => handleNavClick(e, child.target)}
                            className="block px-5 py-3 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={`${HOME_BASE}#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 ${
                    scrolled
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href={`${HOME_BASE}#sw6-contact`}
              onClick={(e) => handleNavClick(e, 'sw6-contact')}
              className={`inline-block text-[13px] tracking-[0.04em] font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-orange-500 text-white hover:bg-orange-400'
                  : 'bg-orange-500 text-white hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/25'
              }`}
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40">
          <div className="px-6 py-6 space-y-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === link.label ? null : link.label)
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-[14px] tracking-[0.06em] uppercase font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileExpanded === link.label && (
                    <div className="ml-4 border-l border-border/40 pl-4 space-y-0.5 mt-1 mb-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.target}
                          href={`${HOME_BASE}#${child.target}`}
                          onClick={(e) => handleNavClick(e, child.target)}
                          className="block px-4 py-2.5 text-[13px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={`${HOME_BASE}#${link.target}`}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className="block w-full text-left px-4 py-3 text-[14px] tracking-[0.06em] uppercase font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 px-4">
              <Link
                href={`${HOME_BASE}#sw6-contact`}
                onClick={(e) => handleNavClick(e, 'sw6-contact')}
                className="block w-full text-center text-[13px] tracking-[0.04em] font-medium px-5 py-2.5 bg-orange-500 text-white hover:bg-orange-400 rounded-full transition-all"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
