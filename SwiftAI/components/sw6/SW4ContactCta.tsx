"use client";

import { ArrowRight, AlertTriangle, Shield, Zap, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { icon: BarChart3, value: "1,100+", label: "KPIs Monitored", color: "text-orange-400" },
  { icon: Zap, value: "54%", label: "Outages Preventable", color: "text-amber-400" },
  { icon: Shield, value: "60%", label: "Lower TCO vs FRUN", color: "text-violet-400" },
];

export function SW4ContactCta() {
  return (
    <section id="sw6-contact" className="relative flex flex-col justify-center">
      <div className="relative z-20 -mb-28 md:-mb-24">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card/90 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border/40">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 px-8 py-7"
                >
                  <div
                    className={`p-3 rounded-xl bg-orange-500/10 ${stat.color}`}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground font-light">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-40 md:pt-36 pb-32 bg-background">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium backdrop-blur-sm mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span>SolMan support ends Dec 2027 — act now</span>
              </div>

              <SectionHeader
                eyebrow="Contact"
                title="See how SwiftAI PRISM fits into your SAP"
                gradientText="operations"
                description="Book a walkthrough to explore how SwiftAI PRISM can improve visibility, reduce incidents, strengthen operational control, and support more proactive SAP operations across your landscape."
              />

              <div className="mt-8 space-y-4 text-muted-foreground">
                <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card px-5 py-4">
                  Discuss your monitoring gaps, operational risks, and
                  priorities.
                </div>
                <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card px-5 py-4">
                  Review platform capabilities, architecture direction, and
                  deployment approach.
                </div>
                <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card px-5 py-4">
                  Explore how SwiftAI PRISM can fit leadership visibility as well as
                  technical operations.
                </div>
              </div>
            </div>

            <form className="rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card p-8 backdrop-blur-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Name
                  </label>
                  <input className="w-full rounded-lg border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground focus:outline-none focus:border-orange-500/50" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Company
                  </label>
                  <input className="w-full rounded-lg border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground focus:outline-none focus:border-orange-500/50" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground focus:outline-none focus:border-orange-500/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted-foreground">
                    Role
                  </label>
                  <input className="w-full rounded-lg border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground focus:outline-none focus:border-orange-500/50" />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block text-sm text-muted-foreground">
                  What would you like to explore?
                </label>
                <textarea
                  rows={5}
                  className="w-full rounded-lg border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground focus:outline-none focus:border-orange-500/50"
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
                  className="h-12 px-8 border-border bg-accent text-foreground hover:bg-accent/80 rounded-full transition-all duration-300 text-sm tracking-wide uppercase backdrop-blur-sm"
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
                    className="text-sm text-muted-foreground font-light flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange-500/60" />
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
