import { SectionHeader } from "./SectionHeader";
import { impactAreas, downtimeStats } from "./constants";

export function SW4DowntimeImpact() {
  return (
    <section className="py-24 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Business impact"
          title="Financial impact of outages is too large to treat monitoring as a"
          gradientText="side quest"
          description="Unplanned downtime does not stop at infrastructure inconvenience. It compounds into lost productivity, delayed business processes, higher recovery cost, and customer trust damage. For ERP-heavy organizations, the blast radius is usually wider than anyone enjoys admitting in the first meeting."
          centered
        />

        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {impactAreas.map((item) => (
            <div
              key={item}
              className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card px-4 py-5 text-center text-sm font-medium text-foreground hover:border-hero-accent-1/50 transition-all duration-300"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {downtimeStats.map((item) => (
            <div
              key={item.source}
              className="rounded-2xl border-2 border-border/80 dark:border-border/60 bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-sm uppercase tracking-[0.18em] text-hero-accent-1">
                {item.source}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-foreground">
                  {item.stat}
                </span>
                <span className="text-sm text-muted-foreground font-medium">
                  {item.label}
                </span>
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
