import { SectionHeader } from "./SectionHeader";
import { coverageAreas } from "./constants";

export function SW4CoverageGrid() {
  return (
    <section id="sw6-coverage" className="border-y border-border bg-muted/30 py-24">
      <div className="container px-4 mx-auto">
        <SectionHeader
          eyebrow="Coverage"
          title="1,100+ KPIs across SAP and related operational domains —"
          gradientText="and growing"
          description="SwiftAI PRISM is designed to combine breadth of monitoring coverage with risk-oriented visibility across the interconnected layers that shape SAP performance, resilience, and operational continuity."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {coverageAreas.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card p-6 backdrop-blur-sm hover:border-orange-500/50 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-3 text-orange-400 shrink-0 group-hover:bg-orange-500/20 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2 py-1 rounded-full shrink-0">
                    {item.count}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-muted-foreground text-base">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
