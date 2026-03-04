import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { businessOutcomes } from "./constants";

export function SW4WhyItMatters() {
  return (
    <section className="border-y border-border bg-muted/30 py-24 min-h-screen flex flex-col justify-center">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeader
              eyebrow="Why proactive monitoring matters"
              title="Why proactive SAP monitoring is now a"
              gradientText="business requirement"
              description="SAP systems run core enterprise operations such as order management, procurement, finance, manufacturing, payroll, inventory, and customer service. When SAP performs well, the business runs smoothly. When it slows down, fails, or behaves unpredictably, the impact is operational and financial — not merely technical."
            />
            <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground">
              SAP landscapes are complex by nature. Application servers,
              databases, interfaces, background jobs, Fiori or UI channels,
              integrations, network components, and multiple SAP and non-SAP
              systems all have opportunities to misbehave in spectacularly
              inconvenient ways. A delayed job can stop billing. An interface
              failure can block sales orders. A lock issue can slow users. A
              database bottleneck can affect everything at once.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
              Monitoring is the difference between seeing these signals early and
              learning about them only after the business has already started
              shouting.
            </p>
          </div>

          <div className="bg-card border-3 border-hero-accent-1/20 rounded-2xl p-8 backdrop-blur-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-hero-accent-1">
              What effective monitoring enables
            </div>
            <div className="mt-6 space-y-4">
              {businessOutcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-4 text-foreground hover:border-hero-accent-1/60 transition-all duration-300"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-hero-accent-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
