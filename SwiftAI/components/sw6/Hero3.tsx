"use client";

import { ArrowRight, ChevronRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { proofPoints } from "./constants";

export default function Hero3() {
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
              <div className="inline-flex items-center gap-2 w-fit rounded-none border border-hero-accent-3/30 bg-hero-accent-3/10 px-5 py-2 text-sm text-white backdrop-blur-sm">
                <AlertTriangle className="w-3.5 h-3.5 text-hero-accent-3" />
                Monitoring Stack Replacement Is Mandatory
              </div>
            </div>

            <h1 className="mt-6 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em] text-white">
              The SolMan support cliff{" "}
              <span className="hero-heading-gradient">is here</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-white">
              With mainstream support ending Dec 2027 and extended support only buying time until 2030,
              every SAP organization faces a critical decision: Cloud ALM, Focused Run, or a smarter
              third-party alternative.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="h-12 px-8 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-sm tracking-wide uppercase"
                onClick={() => document.getElementById("sw6-coverage")?.scrollIntoView({ behavior: "smooth" })}
              >
                Compare Options
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/25 bg-white/[0.08] text-white hover:bg-white/[0.15] hover:border-white/40 rounded-full backdrop-blur-sm transition-all duration-300 text-sm tracking-wide uppercase"
                onClick={() => document.getElementById("sw6-contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Timeline
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
