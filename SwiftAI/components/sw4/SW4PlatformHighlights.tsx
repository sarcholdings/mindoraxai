import { SectionHeader } from "./SectionHeader";
import { platformHighlights } from "./constants";

export function SW4PlatformHighlights() {
  return (
    <section id="sw4-platform" className="py-24 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hero-accent-1/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Platform"
          title="A modern SAP observability platform with"
          gradientText="operational intelligence built in"
          description="SwiftAI PRISM consolidates operational signals into a connected platform that helps enterprises monitor complex SAP environments across technical layers, applications, interfaces, databases, infrastructure, and user activity."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {platformHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-2xl border-3 border-border/80 dark:border-border/60 bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-hero-accent-1/10 p-3 text-hero-accent-1 group-hover:border-hero-accent-1/60 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-hero-accent-1 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
