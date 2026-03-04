import { SectionHeader } from "./SectionHeader";

export function SW4About() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="rounded-2xl border-3 border-border/80 dark:border-border/60 bg-card p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl" />
          <div className="relative z-10">
            <SectionHeader
              eyebrow="About SOM"
              title="Built to modernize SAP"
              gradientText="operational visibility"
              description="SOM was created to bring stronger observability, deeper operational insight, and smarter monitoring to SAP landscapes. We believe enterprises need more than fragmented tools and reactive alerts — they need connected visibility, meaningful intelligence, and a platform that evolves with modern operational demands."
            />
            <p className="mt-6 max-w-4xl text-base leading-7 text-muted-foreground">
              The goal is simple: help organizations protect business-critical SAP
              operations by seeing warning signs earlier, understanding issues
              faster, and improving resilience across systems, dependencies, and
              user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
