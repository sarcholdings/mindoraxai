import SwiftAINavigation from "@/components/swiftai/Navigation";
import Footer from "@/components/swiftai/Footer";
import { SW4Hero } from "@/components/sw4/SW4Hero";
import { SW4WhyItMatters } from "@/components/sw4/SW4WhyItMatters";
import { SW4DowntimeImpact } from "@/components/sw4/SW4DowntimeImpact";
import { SW4OperationalGaps } from "@/components/sw4/SW4OperationalGaps";
import { SW4ClosesGaps } from "@/components/sw4/SW4ClosesGaps";
import { SW4PlatformHighlights } from "@/components/sw4/SW4PlatformHighlights";
import { SW4CapabilitiesGrid } from "@/components/sw4/SW4CapabilitiesGrid";
import { SW4CoverageGrid } from "@/components/sw4/SW4CoverageGrid";
import { SW4UseCases } from "@/components/sw4/SW4UseCases";
import { SW4WhySom } from "@/components/sw4/SW4WhySom";
import { SW4About } from "@/components/sw4/SW4About";
import { SW4ContactCta } from "@/components/sw4/SW4ContactCta";

export default function SW4Page() {
  return (
    <div
      className="relative min-h-screen bg-background"
      style={{
        "--background": "215 48% 9%",
        "--foreground": "210 40% 96%",
        "--card": "217 44% 12%",
        "--card-foreground": "210 40% 96%",
        "--muted": "217 38% 16%",
        "--muted-foreground": "215 20% 75%",
        "--accent": "217 38% 16%",
        "--accent-foreground": "210 40% 96%",
        "--border": "217 32% 20%",
        "--input": "217 32% 20%",
      } as React.CSSProperties}
    >
      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation />
        <SW4Hero />
        <SW4WhyItMatters />
        <SW4DowntimeImpact />
        <SW4OperationalGaps />
        <SW4ClosesGaps />
        <SW4PlatformHighlights />
        <SW4CapabilitiesGrid />
        <SW4CoverageGrid />
        <SW4UseCases />
        <SW4WhySom />
        <SW4About />
        <SW4ContactCta />
        <Footer />
      </main>
    </div>
  );
}
