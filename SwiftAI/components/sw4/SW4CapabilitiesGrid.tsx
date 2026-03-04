import { SectionHeader } from "./SectionHeader";
import { capabilities } from "./constants";

export function SW4CapabilitiesGrid() {
  return (
    <section className="py-24 bg-muted/30 relative min-h-screen flex flex-col justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Key features"
          title="Capabilities designed to detect risk early and improve"
          gradientText="operational control"
          description="SwiftAI PRISM combines predictive monitoring, AI-assisted analysis, contextual dashboards, and visibility across dependencies so teams can see more, understand more, and act with less guesswork."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border-3 border-border/80 dark:border-border/60 bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-hero-accent-1/10 p-3 text-hero-accent-1 shrink-0 group-hover:border-hero-accent-1/60 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-hero-accent-1 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
