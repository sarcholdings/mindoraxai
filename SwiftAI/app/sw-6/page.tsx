import SwiftAINavigation from "@/components/sw6/Navigation";
import Footer from "@/components/sw6/Footer";
import { SW4Hero } from "@/components/sw6/SW4Hero";
import { SW4WhyItMatters } from "@/components/sw6/SW4WhyItMatters";
import { SW4DowntimeImpact } from "@/components/sw6/SW4DowntimeImpact";
import { SW4OperationalGaps } from "@/components/sw6/SW4OperationalGaps";
import { SW4ClosesGaps } from "@/components/sw6/SW4ClosesGaps";
import { SW4PlatformHighlights } from "@/components/sw6/SW4PlatformHighlights";
import Showcase from "@/components/sw6/Showcase";
import { SW4CapabilitiesGrid } from "@/components/sw6/SW4CapabilitiesGrid";
import { SW4CoverageGrid } from "@/components/sw6/SW4CoverageGrid";
import { SW4UseCases } from "@/components/sw6/SW4UseCases";
import { SW4WhySom } from "@/components/sw6/SW4WhySom";
import { SW4About } from "@/components/sw6/SW4About";
import { SW4ContactCta } from "@/components/sw6/SW4ContactCta";

export default function SW6Page() {
  return (
    <div className="relative min-h-screen bg-background">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        .sw6-hero {
          --hero-fg: 0 0% 100%;
          --hero-muted: 210 20% 78%;
          --hero-border: 217.2 32.6% 17.5%;
          --hero-bg: 222.2 84% 4.9%;
          --hero-accent-1: 172 90% 72%;
          --hero-accent-1-glow: 175 70% 32%;
          --hero-accent-2: 160 82% 62%;
          --hero-accent-2-glow: 155 65% 30%;
          --hero-accent-3: 192 100% 75%;
          --hero-accent-3-glow: 200 85% 32%;
          --hero-accent-4: 268 100% 78%;
          --hero-accent-4-glow: 270 70% 34%;
          --hero-gradient-1-from: 165 92% 82%;
          --hero-gradient-1-to: 192 95% 76%;
          --hero-gradient-2-from: 150 88% 80%;
          --hero-gradient-2-to: 172 92% 60%;
          --hero-gradient-3-from: 185 98% 84%;
          --hero-gradient-3-to: 212 96% 74%;
          --hero-gradient-4-from: 262 100% 86%;
          --hero-gradient-4-to: 282 98% 76%;
        }
        .sw6-hero h1 {
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1), 0 2px 20px rgba(0, 0, 0, 0.4);
        }
        .sw6-hero .hero-heading-gradient {
          color: transparent !important;
          background: linear-gradient(135deg, hsl(24 95% 53%), hsl(36 100% 65%), hsl(262 83% 58%)) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          filter: drop-shadow(0 0 12px rgba(249, 115, 22, 0.4)) drop-shadow(0 0 24px rgba(139, 92, 246, 0.25)) brightness(1.15);
        }

        .sw6-sections > section {
          scroll-margin-top: 5rem;
        }
      `}</style>

      <main id="main" className="relative z-10 min-h-screen text-foreground">
        <SwiftAINavigation />

        <div
          className="relative overflow-hidden sw6-hero"
          style={{ backgroundColor: "#0c1222" }}
        >
          <SW4Hero />
        </div>

        <div className="relative bg-background sw6-sections">
          {/* Learn More */}
          <SW4WhyItMatters />
          <SW4DowntimeImpact />
          <SW4OperationalGaps />
          <SW4ClosesGaps />

          {/* Showcase */}
          <Showcase />

          {/* Platform */}
          <SW4PlatformHighlights />
          <SW4CapabilitiesGrid />
          <SW4CoverageGrid />
          <SW4WhySom />

          <SW4UseCases />
          <SW4About />
          <SW4ContactCta />
          <Footer />
        </div>
      </main>
    </div>
  );
}
