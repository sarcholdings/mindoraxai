'use client'

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const NAV_LINKS = [
  { label: 'Platform', target: 'platform-overview' },
  { label: 'Showcase', target: 'showcase' },
  { label: 'Features', target: 'core-capabilities' },
  { label: 'Coverage', target: 'industry-editions' },
];

export default function SwiftAINavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const cycleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const ThemeIcon = !mounted ? Sun : resolvedTheme === 'dark' ? Moon : Sun;

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
          {/* Logo */}
          <a
            href="/sw-2"
            className={`text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Swift<span className={`${scrolled ? 'text-hero-accent-1' : 'text-teal-400'}`}>AI</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 ${
                  scrolled
                    ? 'text-muted-foreground hover:text-foreground'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={cycleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              <ThemeIcon className="h-[18px] w-[18px]" />
            </button>

            <button
              onClick={() => window.location.href = '/contact'}
              className={`text-[13px] tracking-[0.08em] uppercase font-medium px-5 py-2.5 rounded-none transition-all duration-300 ${
                scrolled
                  ? 'bg-foreground text-background hover:bg-foreground/90'
                  : 'bg-emerald-400 text-gray-900 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/25'
              }`}
            >
              Schedule Demo
            </button>
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
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.target)}
                className="block w-full text-left px-4 py-3 text-[14px] tracking-[0.06em] uppercase font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 flex items-center justify-between px-4">
              <button
                onClick={cycleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent"
                aria-label="Toggle theme"
              >
                <ThemeIcon className="h-5 w-5" />
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="text-[13px] tracking-[0.08em] uppercase font-medium px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 rounded-none transition-all"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
