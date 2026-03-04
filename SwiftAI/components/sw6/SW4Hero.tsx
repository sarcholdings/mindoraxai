"use client";

import { ArrowRight, ChevronRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats, proofPoints } from "./constants";

export function SW4Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/vYZYM5P9vKTxjyMntDIvdSTX7sE.webp?width=2400&height=1368"
          alt=""
          className="absolute inset-0 w-full h-[110%] object-cover"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(180deg, hsl(216 40% 8% / 0.4) 0%, hsl(216 40% 6% / 0.6) 25%, hsl(216 40% 5% / 0.8) 50%, hsl(216 40% 4% / 0.9) 75%, hsl(216 40% 3% / 1) 100%)",
          }}
        />
      </div>

      <div className="container relative z-10 px-6 lg:px-12 mx-auto flex-1 flex items-center py-20 lg:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex w-fit rounded-none border border-hero-accent-1/30 bg-hero-accent-1/10 px-5 py-2 text-sm text-white backdrop-blur-sm">
                SAP Monitoring &bull; Observability &bull; Business Resilience
              </div>
              <div className="inline-flex items-center gap-2 rounded-none border border-white/15 bg-white/[0.06] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur-xl">
                <Activity className="h-3.5 w-3.5 text-hero-accent-1" />
                Early-warning focused
              </div>
            </div>

            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
              Protect SAP operations{" "}
              <span className="hero-heading-gradient">before disruption.</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-white">
              SOM helps enterprises detect risk earlier, connect signals faster,
              and protect business-critical SAP processes across systems, jobs,
              interfaces, databases, infrastructure, and user experience.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-base leading-7 text-white/90">
              Less fragmented monitoring. More operational clarity. Fewer
              expensive surprises when the ERP backbone decides to audition for
              tragedy.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm tracking-wide uppercase"
                onClick={() =>
                  document
                    .getElementById("sw6-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/25 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                onClick={() =>
                  document
                    .getElementById("sw6-platform")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore the Platform
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </div>

      <div className="relative z-10 w-full -mt-8 pb-6">
        <div className="container px-6 lg:px-12 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {proofPoints.map((item, idx) => (
              <div
                key={item}
                className="group flex items-start gap-4 px-6 py-5 rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.1] hover:border-white/[0.2] hover:-translate-y-0.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30 transition-colors">
                  <span className="text-sm font-bold">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <span className="text-[15px] font-semibold leading-snug text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
