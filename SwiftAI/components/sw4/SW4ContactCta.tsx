"use client";

import { ArrowRight, AlertTriangle, Shield, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const STATS = [
  { icon: BarChart3, value: "1,100+", label: "KPIs Monitored", color: "text-teal-400" },
  { icon: Zap, value: "54%", label: "Outages Preventable", color: "text-amber-400" },
  { icon: Shield, value: "60%", label: "Lower TCO vs FRUN", color: "text-violet-400" },
];

export function SW4ContactCta() {
  return (
    <section id="sw4-contact" className="relative min-h-screen flex flex-col justify-center">
      <div className="relative z-20 -mb-28 md:-mb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto rounded-2xl border border-white/10 bg-[#111838]/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 px-8 py-7"
                >
                  <div
                    className={`p-3 rounded-xl bg-white/[0.04] ${stat.color}`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-white/70 font-light">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden pt-40 md:pt-36 pb-32"
        style={{ backgroundColor: "#111838" }}
      >
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.06] border border-white/10 text-teal-400 text-sm font-medium backdrop-blur-sm mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>SolMan support ends Dec 2027 — act now</span>
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-hero-accent-1 mb-3">
                /Contact
              </p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                See how SOM fits into your SAP operations
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                Book a walkthrough to explore how SOM can improve visibility,
                reduce incidents, strengthen operational control, and support
                more proactive SAP operations across your landscape.
              </p>
              <div className="mt-8 space-y-4 text-white/80">
                <div className="border border-white/10 bg-white/[0.04] px-4 py-4">
                  Discuss your monitoring gaps, operational risks, and
                  priorities.
                </div>
                <div className="border border-white/10 bg-white/[0.04] px-4 py-4">
                  Review platform capabilities, architecture direction, and
                  deployment approach.
                </div>
                <div className="border border-white/10 bg-white/[0.04] px-4 py-4">
                  Explore how SOM can fit leadership visibility as well as
                  technical operations.
                </div>
              </div>
            </div>

            <form className="border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/75">
                    Name
                  </label>
                  <input className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:outline-none focus:border-hero-accent-1/50" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/75">
                    Company
                  </label>
                  <input className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:outline-none focus:border-hero-accent-1/50" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/75">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:outline-none focus:border-hero-accent-1/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/75">
                    Role
                  </label>
                  <input className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:outline-none focus:border-hero-accent-1/50" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-white/60">
                  What would you like to explore?
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-white/10 bg-white/[0.04] px-4 py-3 text-white focus:outline-none focus:border-hero-accent-1/50"
                  placeholder="Tell us about your SAP landscape, monitoring goals, operational challenges, or demo expectations."
                />
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-400 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300 text-sm tracking-wide uppercase"
                >
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 border-white/30 bg-white/[0.08] text-white hover:bg-white/[0.15] rounded-full transition-all duration-300 text-sm tracking-wide uppercase backdrop-blur-sm"
                >
                  Partner With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6">
                {[
                  "On-prem deployment",
                  "SOC 2 compliant",
                  "No data leaves your network",
                  "Enterprise SLA",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-sm text-white/50 font-light flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-teal-500/60" />
                    {item}
                  </span>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
