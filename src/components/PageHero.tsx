export function PageHero({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <section className="bg-navy text-navy-foreground border-b-4 border-orange">
      <div className="container-px mx-auto max-w-7xl py-16 md:py-20 text-center">
        {eyebrow && <div className="badge-tag mx-auto mb-5">{eyebrow}</div>}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
