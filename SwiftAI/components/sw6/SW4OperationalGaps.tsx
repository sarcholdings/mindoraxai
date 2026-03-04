import { AlertCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { operationalGaps } from "./constants";

export function SW4OperationalGaps() {
  return (
    <section id="sw6-gaps" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Current operational gaps"
          title="Why traditional SAP monitoring often leaves teams"
          gradientText="reacting too late"
          description="In many landscapes, monitoring is fragmented across tools, dashboards, reports, and manual review. The result is delayed detection, weak correlation, limited historical context, and too much dependence on heroic troubleshooting rituals."
          centered
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {operationalGaps.map((item) => (
            <div
              key={item.area}
              className="group rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card p-6 backdrop-blur-sm hover:border-orange-500/50 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-orange-400 transition-colors">
                  {item.area}
                </h3>
              </div>

              {/* Inner cards */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400/80 mb-3">
                    Common today
                  </div>
                  <p className="text-base leading-7 text-muted-foreground">
                    {item.current}
                  </p>
                </div>
                <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">
                    Operational gap
                  </div>
                  <p className="text-base leading-7 text-foreground">
                    {item.gap}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
