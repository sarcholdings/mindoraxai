import { SectionHeader } from "./SectionHeader";
import { differentiators } from "./constants";

export function SW4WhySom() {
  return (
    <section id="sw6-why-som" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-hero-accent-1/10 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <SectionHeader
          eyebrow="Why SOM"
          title="A clearer path from fragmented monitoring to"
          gradientText="proactive SAP operations"
          description="The problem is rarely lack of data. It is lack of context, correlation, and timely visibility. SOM helps teams see the full situation sooner, prioritize faster, and operate with more confidence across landscapes."
          centered
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border-3 border-border/80 dark:border-border/60 bg-card p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-hero-accent-1/60 hover:shadow-[0_15px_50px_-10px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-hero-accent-1/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground group-hover:text-hero-accent-1 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
