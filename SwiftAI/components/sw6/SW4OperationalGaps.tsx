import { AlertCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { operationalGaps } from "./constants";

export function SW4OperationalGaps() {
  return (
    <section id="sw6-gaps" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Current operational gaps"
          title="Why traditional SAP monitoring often leaves teams"
          gradientText="reacting too late"
          description="In many landscapes, monitoring is fragmented across tools, dashboards, reports, and manual review. The result is delayed detection, weak correlation, limited historical context, and too much dependence on heroic troubleshooting rituals."
          centered
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {operationalGaps.map((item) => (
            <div
              key={item.area}
              className="group rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card p-6 hover:border-hero-accent-1/50 hover:shadow-[0_10px_40px_-10px_rgba(45,212,191,0.2)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hero-accent-1/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-2 text-amber-500">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.area}
                  </h3>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-accent p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
                      Common today
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      {item.current}
                    </p>
                  </div>
                  <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 p-4">
                    <div className="text-xs uppercase tracking-[0.2em] text-rose-400 font-mono">
                      Operational gap
                    </div>
                    <p className="mt-3 text-sm leading-6 text-foreground">
                      {item.gap}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
