import { createFileRoute, Link } from "@tanstack/react-router";
import { TESTIMONIALS } from "@/data/testimonials";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Customer Testimonials — Nano Containers LLC" },
      { name: "description", content: "Real reviews from real customers across the United States. Rated 4.5/5 on Trustpilot from 120+ verified reviews." },
    ],
  }),
});

function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Customer Reviews" title="Customer Testimonials" subtitle="Real reviews from real customers across the United States." />

      <section className="container-px mx-auto max-w-7xl py-10">
        <div className="bg-navy text-navy-foreground rounded-2xl p-8 text-center">
          <div className="text-sm uppercase tracking-widest text-white/70">Rated on Trustpilot</div>
          <div className="mt-3 text-orange text-3xl tracking-tighter">★★★★★</div>
          <div className="mt-2 text-2xl font-extrabold"><span className="text-orange">4.5</span> / 5 — Excellent</div>
          <div className="text-sm text-white/70">120+ verified reviews</div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white border rounded-xl p-6 hover:shadow-lg hover:border-orange/30 transition-all">
              <div className="text-orange text-lg tracking-tighter">{"★".repeat(t.rating)}{t.rating === 4 && <span className="text-orange/30">★</span>}</div>
              <p className="mt-3 text-foreground/85 text-sm leading-relaxed">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t">
                <div className="h-10 w-10 rounded-full bg-orange text-white font-bold flex items-center justify-center text-sm">{t.initials}</div>
                <div>
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center bg-muted/50 rounded-xl p-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy">Ready to join hundreds of satisfied customers?</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/shop" className="btn-orange">Browse Inventory</Link>
            <Link to="/contact" className="btn-navy">Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
