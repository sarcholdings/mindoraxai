interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  gradientText?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  gradientText,
  description,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <p className="text-sm font-semibold tracking-widest uppercase text-orange-500">
        /{eyebrow}
      </p>
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {title}{" "}
        {gradientText && (
          <span className="heading-gradient">{gradientText}</span>
        )}
      </h2>
      <div className="w-24 h-1.5 rounded-full heading-gradient-bar mt-5" />
      {description && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
