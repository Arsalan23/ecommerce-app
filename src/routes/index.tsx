import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  Headset,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, formatPrice } from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { SITE_HERO_IMAGE } from "@/data/productImagePool";
import { TESTIMONIALS } from "@/data/testimonials";
import { RESOURCE_LINKS } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "BoxCraft | Premium Shipping Containers, Trailers & Cabins" },
      {
        name: "description",
        content:
          "BoxCraft delivers premium shipping containers, enclosed trailers, and modular cabins nationwide. 400+ products in stock. Free quotes in 1 hour.",
      },
    ],
  }),
});

function Index() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 10);
  const landingCategories = CATEGORIES.slice(0, 6).map((c, idx) => ({
    ...c,
    displayName: ["Containers", "Trailers", "Cabins", "High Cube", "Refrigerated", "Horse Trailer"][idx] || c.name,
  }));
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy text-navy-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--orange)_0%,_transparent_55%)] opacity-20" />
        <div className="container-px mx-auto max-w-7xl py-12 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-center relative">
          <div>
            <div className="badge-tag mb-6">Trusted Nationwide Supplier</div>
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight leading-[1.05]">
              Containers, Trailers <br /> & Cabins —{" "}
              <span className="text-orange">Delivered to You</span>
            </h1>
            <p className="mt-6 text-white/75 text-lg max-w-xl leading-relaxed">
              400+ new &amp; used products in stock. Shipping containers, enclosed trailers, horse
              trailers, cabins, and more. Fast delivery to all 48 states.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/shop" className="btn-orange">
                ★ Shop All Products
              </Link>
              <Link to="/contact" className="btn-outline-light">
                Get a Free Quote
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange" /> Quality Guaranteed
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange" /> All 48 States
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-orange" /> Best Price Promise
              </span>
            </div>
          </div>
          <div className="relative">
            <ProductImage
              src={SITE_HERO_IMAGE}
              alt="Shipping containers in stock"
              className="rounded-lg shadow-2xl w-full aspect-[4/3] object-cover"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 bg-orange text-white rounded-lg px-4 py-3 shadow-xl">
              <div className="text-2xl md:text-3xl font-extrabold leading-none">400+</div>
              <div className="text-xs uppercase tracking-wider mt-1">Products Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {[
            { icon: Truck, t: "Nationwide Delivery", s: "All 48 contiguous states" },
            { icon: ShieldCheck, t: "Quality Inspected", s: "Every unit certified" },
            { icon: BadgeDollarSign, t: "Best Price Promise", s: "No hidden fees" },
            { icon: Headset, t: "Expert Support", s: "Free quotes in 24 hrs" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-4 px-4 sm:px-6 py-6">
              <div className="h-12 w-12 rounded-full bg-orange/10 text-orange flex items-center justify-center shrink-0">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-bold text-navy">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange text-white">
        <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 py-10 text-center">
          {[
            { v: "400+", l: "Products In Stock" },
            { v: "48", l: "States Delivered To" },
            { v: "10+", l: "Years Experience" },
            { v: "24hr", l: "Quote Turnaround" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-4xl md:text-5xl font-extrabold">{s.v}</div>
              <div className="mt-1 text-sm uppercase tracking-wider opacity-90">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge-tag mb-4">Browse by Type</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Shop by Category</h2>
            <p className="mt-3 text-muted-foreground">
              Containers, trailers, and cabins — pick a category to explore inventory.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-12 auto-rows-[150px] lg:auto-rows-[170px] gap-3 md:gap-4">
            {landingCategories.map((c, idx) => {
              const categoryImage = idx === 1 ? "/assets/trailer.png" : idx === 2 ? "/assets/cabin.png" : idx === 3 ? "/assets/high cube.png" : idx === 4 ? "/assets/ref.png" : idx === 5 ? "/assets/horse trailers.png" : "/assets/front.png";
              return (
                <Link
                  key={c.slug}
                  to="/shop"
                  search={{ category: c.slug }}
                  className={`group relative overflow-hidden rounded-xl bg-navy ${idx < 2 ? "col-span-1 lg:col-span-3 lg:row-span-2" : "col-span-1 lg:col-span-3"}`}
                >
                  <ProductImage
                    src={categoryImage}
                    alt={c.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className={`font-extrabold text-white leading-tight ${idx < 2 ? "text-3xl md:text-[32px]" : "text-lg md:text-[28px]"}`}>
                      {c.displayName || c.name}
                    </div>
                    <span className="absolute right-4 bottom-4 inline-flex rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                      {c.count} items
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/shop" className="btn-navy min-w-[230px] rounded-md !py-3.5">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-white py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="badge-tag mb-4">In Stock Now</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Featured Products</h2>
            <p className="mt-3 text-muted-foreground">
              Hand-picked inventory across containers, trailers, and cabins — ready for immediate
              delivery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {featured.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-md border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Link to="/product/$slug" params={{ slug: p.slug }} className="relative block aspect-[4/3] overflow-hidden bg-muted">
                  <ProductImage
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                  {p.badge && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-orange text-white">
                      {p.badge}
                    </span>
                  )}
                </Link>
                <div className="p-3">
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="text-[13px] font-bold text-navy leading-snug line-clamp-2 min-h-[2.5rem] hover:text-orange"
                  >
                    {p.name}
                  </Link>
                  <div className="mt-2 text-sm md:text-base font-extrabold text-navy">
                    {formatPrice(p.price)}
                  </div>
                  <Link
                    to="/product/$slug"
                    params={{ slug: p.slug }}
                    className="mt-3 block w-full text-center rounded-sm bg-orange text-white font-bold uppercase text-[10px] tracking-wider py-2 hover:opacity-90"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/shop" className="btn-orange">
              View All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-navy text-navy-foreground py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Why BoxCraft?</div>
            <h2 className="text-3xl md:text-4xl font-extrabold">The Trusted Choice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              t: "Quality Inspected",
              d: "Every product is thoroughly inspected before delivery — structural integrity, weatherproofing, and condition guaranteed.",
            },
            {
              t: "Nationwide Delivery",
              d: "We deliver to all 48 contiguous states with professional drivers and specialized transport equipment.",
            },
            {
              t: "Transparent Pricing",
              d: "Competitive prices with no hidden fees. Price matching available and financing options for qualified buyers.",
            },
            {
              t: "Custom Modifications",
              d: "Need custom work on your container or cabin? Our team handles full modifications to your exact spec.",
            },
            {
              t: "Expert Support",
              d: "Our specialists help you pick the right product. Call, email, or chat — we respond fast with free quotes.",
            },
            {
              t: "Satisfaction Guaranteed",
              d: "Every order comes with a quality guarantee. If it doesn't meet our standards, we make it right.",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-orange/50 transition-all"
            >
              <div className="h-12 w-12 rounded-lg bg-orange/10 text-orange flex items-center justify-center mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-extrabold text-white">{f.t}</h3>
              <p className="mt-2 text-white/75 text-sm leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge-tag mb-4">Customer Reviews</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">What Our Customers Say</h2>
            <div className="mt-5 inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 border">
              <span className="font-bold text-navy">Trustpilot</span>
              <span className="text-orange tracking-tighter">★★★★★</span>
              <span className="text-sm text-muted-foreground">
                <b className="text-navy">4.5</b> · Excellent · 120+ reviews
              </span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="bg-white border rounded-xl p-6 shadow-sm">
                <div className="text-orange text-lg tracking-tighter">{"★".repeat(t.rating)}</div>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">"{t.quote}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange text-white font-bold flex items-center justify-center text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/testimonials" className="btn-orange">
              Read All Reviews <Star className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-orange text-white py-14 md:py-16">
        <div className="container-px mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">Ready to Order or Need a Quote?</h2>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto">
            Browse our full inventory or speak with a specialist — we respond within 24 hours.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-orange font-bold uppercase tracking-wide text-sm px-6 py-3 hover:bg-white/90"
            >
              Shop All Products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white text-white font-bold uppercase tracking-wide text-sm px-6 py-3 hover:bg-white hover:text-orange"
            >
              Get A Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-muted/40 py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">
              Container Buyer Resources
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need to make a confident purchase decision.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {RESOURCE_LINKS.map((r) => (
              <Link
                key={r.to}
                to={r.to}
                className="bg-white border rounded-xl p-6 h-[170px] hover:border-orange/50 hover:shadow-md transition-all flex flex-col items-center justify-center text-center"
              >
                <div className="text-3xl leading-none">{r.icon}</div>
                <div className="font-extrabold text-navy mt-4 text-2xl leading-tight">{r.label}</div>
                <div className="text-sm text-muted-foreground mt-2">{r.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form SEO - Matching live site structure */}
      <section className="py-20 container-px mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-navy">
          Shipping Containers For Sale — Nationwide Delivery
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Nano Containers LLC is your direct source for new and used{" "}
          <strong>ISO shipping containers</strong> across the United States. Whether you need a 20ft
          storage container for your backyard, a 40ft high cube for a commercial warehouse, a bunded
          chemical store, or a custom container office, we have the right unit at the right price —
          with fast, professional delivery to any address in the country.
        </p>

        <h3 className="mt-10 text-xl font-extrabold text-navy">Shop by Container Size</h3>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            <b className="text-navy">10ft Shipping Containers</b> — compact storage for tight spaces
            and residential yards
          </li>
          <li>
            <b className="text-navy">20ft Shipping Containers</b> — our most popular size; versatile
            for storage, offices, and builds
          </li>
          <li>
            <b className="text-navy">30ft Shipping Containers</b> — the ideal middle-ground between
            20ft and 40ft
          </li>
          <li>
            <b className="text-navy">40ft Shipping Containers</b> — maximum capacity for large-scale
            storage and commercial use
          </li>
          <li>
            <b className="text-navy">40ft High Cube Containers</b> — extra 1ft of interior height;
            ideal for container homes and conversions
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-extrabold text-navy">Shop by Container Type</h3>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            <b className="text-navy">Dry Van Containers</b> — standard weatherproof steel containers
            for general storage and freight
          </li>
          <li>
            <b className="text-navy">Open Top Containers</b> — removable roof for crane loading of
            machinery and bulk cargo
          </li>
          <li>
            <b className="text-navy">Full Side Access Containers</b> — full-length side doors for
            front-to-back access
          </li>
          <li>
            <b className="text-navy">Flat Rack Containers</b> — for oversized, out-of-gauge cargo
            including vehicles and boats
          </li>
          <li>
            <b className="text-navy">Bunded Chemical Stores</b> — HSE and EPA-compliant spill
            containment for oils and fuels
          </li>
          <li>
            <b className="text-navy">Refrigerated (Reefer) Containers</b> — -30°C to +30°C
            temperature-controlled cold storage
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-extrabold text-navy">Container Grades Explained</h3>
        <ul className="mt-3 space-y-2 text-muted-foreground list-disc pl-5">
          <li>
            <b className="text-navy">One-Trip (New)</b> — used once overseas; near-perfect condition
            for modifications and builds
          </li>
          <li>
            <b className="text-navy">Cargo-Worthy (CW)</b> — inspected and certified for active
            international shipping
          </li>
          <li>
            <b className="text-navy">Wind & Watertight (WWT)</b> — weatherproof and structurally
            sound; best value for storage
          </li>
          <li>
            <b className="text-navy">AS-IS</b> — sold as found; lowest price for non-critical
            applications
          </li>
        </ul>

        <h3 className="mt-10 text-xl font-extrabold text-navy">
          What Are Shipping Containers Used For?
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Shipping containers are among the most versatile structures available. Our customers use
          them for on-site construction storage, farm and agricultural storage, container homes and
          ADUs, portable container offices, container cafes and pop-up retail, cold chain logistics,
          hazardous material storage, and international freight shipping. Whatever your project,
          there is a container grade and configuration that fits.
        </p>

        <h3 className="mt-10 text-xl font-extrabold text-navy">Shipping Container Prices</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Container prices depend on size, grade, color, and delivery location. Used 20ft WWT
          containers start from around $2,200. New one-trip 20ft containers start from around
          $3,500. Used 40ft WWT containers start from approximately $3,200. All prices include a
          transparent delivery quote to your zip code — no surprises at checkout. Call +1 (435)
          229-9359 for an exact all-in price.
        </p>

        <h3 className="mt-10 text-xl font-extrabold text-navy">Nationwide Container Delivery</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          We deliver shipping containers to all 50 states using tilt-bed (roll-off) trucks — no
          crane required. You need a clear, level surface with at least 60ft of run-up space. Our
          logistics team handles everything: scheduling, driver coordination, and placement
          confirmation. Typical delivery time is 3–10 business days from confirmed order. We serve
          residential, commercial, agricultural, and industrial sites of all sizes.
        </p>

        <h3 className="mt-10 text-xl font-extrabold text-navy">
          Why Buy From Nano Containers LLC?
        </h3>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          Over 10 years supplying new and used ISO shipping containers across the United States.
          325+ container models in stock. Transparent pricing with no hidden fees. Expert guidance
          from real container specialists — not bots. Flexible payment including financing.
          Satisfaction guaranteed on every order.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/shop" className="btn-orange">
            Browse All Containers
          </Link>
          <Link to="/contact" className="btn-navy">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
