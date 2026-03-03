'use client';

import { useState } from 'react';
import LegalPageLayout from '@/components/LegalPageLayout';
import { Button } from '@/components/ui/button';

export default function CookieSettingsPage() {
  const [analytics, setAnalytics] = useState(true);
  const [functional, setFunctional] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // In a real implementation, this would save preferences to localStorage/cookies
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <LegalPageLayout title="Cookie Settings" lastUpdated="March 3, 2025">
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Manage your cookie preferences below. Essential cookies are required for the website to function and cannot be disabled.
        </p>

        <div className="space-y-6 pt-4">
          <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card">
            <div>
              <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
              <p className="text-sm mt-1">Help us understand how visitors use our website with anonymous data.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card">
            <div>
              <h3 className="font-semibold text-foreground">Functional Cookies</h3>
              <p className="text-sm mt-1">Remember your preferences and choices for enhanced features.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={functional}
                onChange={(e) => setFunctional(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 p-4 rounded-lg border border-border bg-card">
            <div>
              <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
              <p className="text-sm mt-1">Used to deliver relevant advertisements and track campaign effectiveness.</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-muted rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <Button onClick={handleSave} className="rounded-full">
            Save Preferences
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              setAnalytics(false);
              setFunctional(false);
              setMarketing(false);
            }}
            className="rounded-full"
          >
            Reject All Non-Essential
          </Button>
        </div>

        {saved && (
          <p className="text-primary font-medium">Your cookie preferences have been saved.</p>
        )}

        <p className="text-sm pt-4">
          For more information about our use of cookies, please see our{' '}
          <a href="/cookie-notice" className="text-primary hover:underline">Cookie Notice</a>.
        </p>
      </div>
    </LegalPageLayout>
  );
}
