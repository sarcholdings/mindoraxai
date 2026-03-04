"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

const NAV_HEIGHT_PX = 80; // lg nav height (h-20)

const heroSlides = [
  {
    badge: "BUILT FOR RESILIENT ENTERPRISE OPERATIONS",
    subtitle: "BUSINESS-FIRST OBSERVABILITY",
    heading: "See risk early. Protect operations before disruption spreads.",
  },
  {
    badge: "BUILT FOR RESILIENT ENTERPRISE OPERATIONS",
    subtitle: "PRODUCT SHOWCASE",
    heading: "Explore how PRISM turns complexity into clarity at scale.",
  },
  {
    badge: "BUILT FOR RESILIENT ENTERPRISE OPERATIONS",
    subtitle: "INTELLIGENT PLATFORM",
    heading: "Unify signals, context, and insight in one enterprise platform.",
  },
];

export function SW4Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewportH, setViewportH] = useState<number>(0);

  // Track real viewport height — handles mobile browser chrome & orientation changes
  useEffect(() => {
    const update = () => {
      const h = window.innerHeight;
      setViewportH(h);
      document.documentElement.style.setProperty("--hero-vh", `${h}px`);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = heroSlides[activeSlide];

  // Available content height after nav; fallback to 100dvh before JS runs
  const sectionHeight = viewportH ? `${viewportH}px` : "100dvh";
  // Vertical padding scales with available height, clamped so content always fits
  const availH = viewportH || 800;
  const vPad = Math.max(24, Math.min(80, (availH - NAV_HEIGHT_PX) * 0.1));
  // Right card max height leaves room for nav + padding
  const cardMaxH = Math.max(320, availH - NAV_HEIGHT_PX - vPad * 2 - 16);

  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ height: sectionHeight }}
    >
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <img
          src="/images/hero-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, hsl(220 55% 5% / 0.35) 0%, hsl(220 55% 5% / 0.55) 30%, hsl(220 55% 5% / 0.82) 65%, hsl(0 0% 0% / 1) 100%)"
        }} />
      </div>

      {/* Content */}
      <div
        className="container relative z-10 px-6 lg:px-12 mx-auto flex-1 flex items-center w-full"
        style={{ paddingTop: vPad, paddingBottom: vPad }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">

          {/* Left column */}
          <div className="space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center rounded-full border px-5 py-2.5 text-[11px] font-bold tracking-[0.18em] uppercase backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.30) 0%, rgba(139,92,246,0.26) 35%, rgba(6,182,212,0.22) 65%, rgba(16,185,129,0.24) 100%)",
                borderColor: "rgba(139,92,246,0.55)",
                boxShadow: "0 0 32px rgba(99,102,241,0.22), 0 0 12px rgba(139,92,246,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full mr-2.5 shrink-0"
                style={{ background: "linear-gradient(135deg, #818cf8, #22d3ee)", boxShadow: "0 0 10px rgba(129,140,248,0.9), 0 0 4px rgba(34,211,238,0.6)" }}
              />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg, #c7d2fe 0%, #a5b4fc 20%, #818cf8 40%, #22d3ee 60%, #34d399 80%, #c7d2fe 100%)", backgroundSize: "200% auto", filter: "drop-shadow(0 0 6px rgba(129,140,248,0.4))" }}
              >
                {slide.badge}
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-xs font-semibold tracking-[0.28em] uppercase text-white/40">
              {slide.subtitle}
            </p>

            {/* Heading */}
            <h1 className="text-[clamp(2.25rem,4.8vw,3.85rem)] font-bold leading-[1.07] tracking-[-0.025em] text-white">
              {slide.heading}
            </h1>

            {/* Divider */}
            <div className="w-12 h-px bg-orange-500/50" />

            {/* Buttons */}
            <div className="flex flex-wrap gap-3.5 pt-1">
              <Button
                size="lg"
                className="h-12 px-8 bg-orange-500 text-white font-semibold rounded-none hover:bg-orange-400 hover:shadow-[0_8px_32px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-[15px] tracking-wide"
                onClick={() => document.getElementById("sw6-why")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.10] hover:border-white/30 rounded-none backdrop-blur-sm transition-all duration-300 text-[15px] tracking-wide"
                onClick={() => document.getElementById("sw6-contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Demo
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>

            {/* Carousel dots */}
            <div className="flex items-center gap-2 pt-2">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeSlide
                      ? "w-8 bg-orange-500"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right column — Platform Snapshot card */}
          <div className="relative lg:pl-4 max-w-[34rem] lg:ml-auto w-full">
            {/* Outer border layer */}
            <div
              className="relative rounded-[2.25rem] border border-white/[0.08] p-5"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Inner card */}
              <div
                className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.10] p-6 shadow-[0_24px_64px_rgba(8,15,30,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-y-auto"
                style={{
                  background: "rgba(18, 22, 40, 0.52)",
                  backdropFilter: "blur(48px)",
                  WebkitBackdropFilter: "blur(48px)",
                  maxHeight: `${cardMaxH}px`,
                }}
              >
                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)" }}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.06]">
                  <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/90">
                    SwiftAI PRISM
                  </span>
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
                    Platform Snapshot
                  </span>
                </div>

                {/* What PRISM Delivers */}
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5 mb-3.5">
                  <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange-400/70 mb-2">
                    What PRISM Delivers
                  </div>
                  <p className="text-[1.05rem] font-bold text-white/90 leading-snug">
                    Unified Observability for Enterprise operations.
                  </p>
                </div>

                {/* Coverage & Outcome row */}
                <div className="grid grid-cols-2 gap-3 mb-3.5">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange-400/70 mb-2">
                      Coverage
                    </div>
                    <p className="text-base font-bold text-white/90 leading-snug">
                      1100+ KPIs and growing
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4">
                    <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange-400/70 mb-2">
                      Outcome
                    </div>
                    <p className="text-base font-bold text-white/90 leading-snug">
                      Faster Diagnosis, less noise
                    </p>
                  </div>
                </div>

                {/* PRISM Advantage */}
                <div className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-5">
                  <div className="text-[10px] font-semibold tracking-[0.25em] uppercase text-orange-400/70 mb-2">
                    PRISM Advantage
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-base font-bold text-white/90 leading-snug">
                      From scattered signals to decision-ready insight
                    </p>
                    <span
                      className="shrink-0 flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] h-12 w-12 text-sm font-semibold text-white/60"
                    >
                      24×7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
