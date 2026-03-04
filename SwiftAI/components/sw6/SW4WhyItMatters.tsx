import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { businessOutcomes } from "./constants";

export function SW4WhyItMatters() {
  return (
    <section id="sw6-why" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid gap-20 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="space-y-10">
            <SectionHeader
              eyebrow="Why proactive monitoring matters"
              title="Why proactive SAP monitoring is now a"
              gradientText="business requirement"
              description="SAP systems run core enterprise operations such as order management, procurement, finance, manufacturing, payroll, inventory, and customer service. When SAP performs well, the business runs smoothly. When it slows down, fails, or behaves unpredictably, the impact is operational and financial — not merely technical."
            />

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                SAP landscapes are complex by nature. Application servers,
                databases, interfaces, background jobs, Fiori or UI channels,
                integrations, network components, and multiple SAP and non-SAP
                systems all have opportunities to misbehave in spectacularly
                inconvenient ways. A delayed job can stop billing. An interface
                failure can block sales orders. A lock issue can slow users. A
                database bottleneck can affect everything at once.
              </p>
              <div className="p-6 rounded-2xl bg-card border-3 border-border/80 dark:border-border/60 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)] hover:border-orange-500/60 hover:shadow-[0_15px_50px_-10px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="font-medium text-foreground relative z-10">
                  Monitoring is the difference between seeing these signals early
                  and learning about them only after the business has already
                  started shouting.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card border-4 border-border/80 dark:border-border/60 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] relative group hover:border-orange-500/50 hover:shadow-[0_25px_70px_-10px_rgba(249,115,22,0.15)] transition-all duration-500 backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-[2px] bg-gradient-to-br from-orange-500/20 via-transparent to-primary/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />

            <h3 className="text-xl font-semibold text-foreground mb-8 relative z-10">
              What effective monitoring enables
            </h3>
            <div className="space-y-3 relative z-10">
              {businessOutcomes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-4 text-foreground hover:bg-background/50 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-0.5 transition-all duration-300 group/item"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
