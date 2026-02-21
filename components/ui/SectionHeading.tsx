interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header className="mb-10 space-y-3">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </header>
  );
}
