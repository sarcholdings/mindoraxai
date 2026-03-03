'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'swiftai-cookie-consent';

export type ConsentStatus = 'accepted' | 'rejected' | null;

export function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as ConsentStatus | null;
      if (stored === 'accepted' || stored === 'rejected') {
        setStatus(stored);
      }
    } catch {
      // localStorage may be unavailable (e.g. private browsing)
    }
    setMounted(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setStatus('accepted');
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setStatus('rejected');
  };

  if (!mounted || status !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 sm:p-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-foreground/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground text-base sm:text-lg">
                We value your privacy
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. You can choose to accept all cookies or reject non-essential ones.{' '}
                <Link
                  href="/cookie-notice"
                  className="text-primary hover:underline font-medium inline"
                >
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto sm:flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-border bg-background hover:bg-muted transition-colors text-foreground"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
            >
              Accept all
            </button>
            <Link
              href="/cookie-settings"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors sm:ml-1"
            >
              Settings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
