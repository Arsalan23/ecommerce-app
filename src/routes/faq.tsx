import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Shipping Container Questions Answered | Nano Containers LLC" },
      { name: "description", content: "Common questions about buying, delivering and using shipping containers, trailers and cabins." },
    ],
  }),
});

const SECTIONS = [
  {
    title: "Buying and Pricing",
    items: [
      { q: "How much does a shipping container cost?", a: "Prices vary by size, grade, and location. A used 20ft WWT container starts around $2,200; a new one-trip 20ft starts around $3,500; a used 40ft starts around $3,200. Delivery is quoted separately." },
      { q: "What is the difference between a new and used shipping container?", a: "A new or one-trip container has been used just once to carry goods from overseas. It arrives in near-new condition and is ideal for modifications, container homes, and offices. Used containers have had multiple trips, show more cosmetic wear, but remain structurally sound." },
      { q: "What does Cargo-Worthy (CW) mean?", a: "Cargo-Worthy containers have been inspected and certified for active international shipping. They are structurally sound and watertight — a higher-quality used option suitable for demanding storage or freight applications." },
      { q: "What does Wind and Watertight (WWT) mean?", a: "Wind and Watertight containers keep weather out — no holes, no leaks, structurally intact. Not certified for active shipping but perfect for on-site storage. WWT is the most popular and best-value grade." },
      { q: "Do you offer financing?", a: "Yes. We offer financing for qualified buyers. Call +1 (435) 229-9359 or contact us to discuss your options." },
    ],
  },
  {
    title: "Sizes and Types",
    items: [
      { q: "What container sizes do you sell?", a: "We stock 10ft, 20ft, 30ft, and 40ft containers in standard and high cube heights, plus open top, full side access, flat rack, bunded store, and refrigerated (reefer) units." },
      { q: "What is a high cube container?", a: "A high cube container is 9ft 6in tall externally — 1 foot taller than a standard container. This extra headroom makes them ideal for tall storage, workshops, and container conversion projects." },
      { q: "What is a bunded store?", a: "A bunded store has a built-in raised floor that creates a spill containment tray. Required for storing oils, fuels, chemicals, and hazardous liquids. Available in 10ft, 20ft, and 40ft sizes." },
      { q: "What is a reefer container?", a: "A refrigerated container that maintains temperatures from -30C to +30C. Used for food storage, pharmaceuticals, flowers, and temperature-sensitive goods. Requires a power connection." },
    ],
  },
  {
    title: "Delivery and Placement",
    items: [
      { q: "Do you deliver nationwide?", a: "Yes — we deliver to all 50 states by tilt-bed truck. You get a full delivered price quote upfront." },
      { q: "How long does delivery take?", a: "Typically 3-10 business days from confirmed order, depending on your location and stock availability." },
      { q: "What do I need on site for delivery?", a: "A clear, level surface with at least 60ft of unobstructed run-up for the delivery truck. Firm ground (gravel, concrete, asphalt, or compacted soil) and no overhead obstructions." },
      { q: "Do I need a permit for a container on my property?", a: "Requirements vary by state, county, and municipality. Many areas allow temporary placement without a permit; permanent placement or use as a dwelling usually requires one." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <PageHero eyebrow="Help Center" title="Frequently Asked Questions" subtitle="Have questions about buying, delivering, or using a shipping container? We've answered the most common ones below." />
      <section className="container-px mx-auto max-w-3xl py-16 space-y-12">
        {SECTIONS.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-extrabold text-orange uppercase tracking-widest border-b-2 border-orange pb-2 mb-4">{s.title}</h2>
            <div className="space-y-3">
              {s.items.map((it) => <FAQItem key={it.q} {...it} />)}
            </div>
          </div>
        ))}
        <div className="bg-navy text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-extrabold">Still Have Questions?</h3>
          <p className="mt-2 text-white/80">Call <b className="text-orange">+1 (435) 229-9359</b> or send us a message.</p>
          <Link to="/contact" className="btn-orange mt-5 inline-flex">Contact Us</Link>
        </div>
      </section>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center justify-between gap-4 p-4 text-left">
        <span className="font-bold text-navy">{q}</span>
        <ChevronDown className={`h-5 w-5 text-orange transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
