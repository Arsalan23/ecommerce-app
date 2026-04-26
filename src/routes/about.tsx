import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Truck, Globe } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Nano Containers LLC — Trusted US Container Supplier" },
      { name: "description", content: "10+ years supplying new and used ISO shipping containers, enclosed trailers, and steel cabins across the United States." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Trusted Nationwide Supplier" subtitle="10+ years supplying new and used containers, trailers and cabins across the United States." />

      <section className="container-px mx-auto max-w-4xl py-16">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Nano Containers LLC is a family-owned supplier headquartered in Salt Lake City, Utah. We work directly with depots and manufacturers to bring you the widest range of <b className="text-navy">new and used ISO shipping containers, enclosed trailers, horse trailers, and steel cabins</b> — at fair prices with transparent delivery quotes.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          What started as a small Utah container yard has grown into a coast-to-coast operation serving residential, commercial, agricultural, and industrial customers in all 48 contiguous states. We hold ourselves to one simple standard: every product we sell should arrive on time, in the condition we promised, at the price we quoted.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {[
            { i: Award, v: "10+", l: "Years in business" },
            { i: Globe, v: "48", l: "States delivered to" },
            { i: Truck, v: "400+", l: "Units in stock" },
            { i: Users, v: "5,000+", l: "Happy customers" },
          ].map(({ i: Icon, v, l }) => (
            <div key={l} className="bg-white border rounded-xl p-6 text-center">
              <Icon className="h-7 w-7 text-orange mx-auto" />
              <div className="mt-3 text-3xl font-extrabold text-navy">{v}</div>
              <div className="text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Card t="Our Mission">
            Make buying a quality container, trailer or cabin as easy as ordering anything else online — with real human support, fair prices, and on-time delivery.
          </Card>
          <Card t="Our Promise">
            Inspected units, no hidden fees, transparent delivery quotes, and a satisfaction guarantee on every order. If we cannot meet your needs, we will tell you up front.
          </Card>
        </div>

        <div className="mt-14 bg-navy text-navy-foreground rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold">Talk to a Specialist Today</h2>
          <p className="mt-2 text-white/80">Free quote within 24 hours — we always pick up the phone.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-orange">Get a Free Quote</Link>
            <Link to="/shop" className="btn-outline-light">Browse Inventory</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="text-xl font-extrabold text-navy">{t}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
