import { SectionHeader } from "./SectionHeader";
import { useCases, outcomes } from "./constants";

export function SW4UseCases() {
  return (
    <section className="py-24 bg-background relative overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-hero-accent-1/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeader
              eyebrow="Use cases"
              title="Where SwiftAI PRISM delivers value across"
              gradientText="SAP operations"
              description="SwiftAI PRISM supports day-to-day monitoring needs and broader enterprise visibility requirements, helping teams understand what is happening, why it matters, and where attention is needed first."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {useCases.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-card px-5 py-4 text-foreground backdrop-blur-sm hover:border-hero-accent-1/50 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card border-3 border-hero-accent-1/20 rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
            <h3 className="text-2xl font-bold text-foreground">
              What teams achieve
            </h3>
            <div className="mt-6 space-y-4">
              {outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border-2 border-border/80 dark:border-border/60 bg-accent px-4 py-3 text-foreground hover:border-hero-accent-1/60 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
