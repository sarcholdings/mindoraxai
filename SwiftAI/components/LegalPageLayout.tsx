import SwiftAINavigation from '@/components/sw6/Navigation';
import Footer from '@/components/sw6/Footer';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SwiftAINavigation scrolledByDefault />
      <main className="flex-1 section-container pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">{title}</h1>
          {lastUpdated && (
            <p className="text-sm text-muted-foreground mb-10">Last updated: {lastUpdated}</p>
          )}
          <div className="prose prose-slate dark:prose-invert max-w-none text-foreground">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
