import { SectionHeader } from "./SectionHeader";
import { somGapClosers } from "./constants";

export function SW4ClosesGaps() {
  return (
    <section id="sw6-closes-gaps" className="border-y border-border bg-muted/30 py-24">
      <div className="container px-4 mx-auto">
        <SectionHeader
          eyebrow="SOM closing critical gaps"
          title="How SOM helps prevent"
          gradientText="business disruption"
          description="SOM closes the space between fragmented monitoring and operational clarity by unifying KPI domains, improving context, and surfacing earlier signals across interconnected SAP environments."
          centered
        />

        <div className="mt-12 overflow-hidden rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card">
          <div className="hidden md:grid grid-cols-[1.1fr_1fr_1.1fr] gap-0 border-b border-border bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            <div>Area</div>
            <div>Operational gap</div>
            <div>How SOM fills the gap</div>
          </div>
          {somGapClosers.map((item) => (
            <div
              key={item.area}
              className="grid gap-4 border-t border-border/60 px-6 py-5 md:grid-cols-[1.1fr_1fr_1.1fr] md:items-center hover:bg-accent/50 transition-colors duration-300"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:hidden font-mono">
                  Area
                </div>
                <div className="font-medium text-foreground">{item.area}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:hidden font-mono">
                  Operational gap
                </div>
                <div className="text-muted-foreground">{item.gap}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:hidden font-mono">
                  How SOM fills the gap
                </div>
                <div className="text-foreground font-medium">
                  {item.solution}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
