import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Users, Truck, Globe, Target, Shield, Heart, Zap, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";
import { SITE } from "@/data/site";
import { SITE_ABOUT_IMAGE } from "@/data/productImagePool";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `About ${SITE.name} — Trusted US Container Supplier` },
      {
        name: "description",
        content:
          "10+ years supplying new and used ISO shipping containers, enclosed trailers, and steel cabins across the United States.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Built on Trust, Delivered with Care"
        subtitle={`${SITE.name} has been America's trusted partner for premium containers, trailers, and modular solutions.`}
      />

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange/10 rounded-full text-orange text-sm font-semibold mb-6">
                <Heart className="h-4 w-4" />
                Family Owned & Operated
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                From a Small Utah Yard to Coast-to-Coast Coverage
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                What started as a humble container yard in Salt Lake City has grown into one of
                America's most trusted suppliers. We work directly with top manufacturers and depots
                to bring you the widest selection of{" "}
                <span className="text-navy font-semibold">
                  new and used ISO shipping containers, enclosed trailers, and steel cabins
                </span>
                .
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our secret? We hold ourselves to one simple standard: every product arrives on time,
                in the condition promised, at the price quoted. No surprises, no hidden fees — just
                honest business.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ProductImage
                  src={SITE_ABOUT_IMAGE}
                  alt="Shipping containers and site storage"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">A+ Rating</div>
                    <div className="text-sm text-gray-500">Better Business Bureau</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                value: "10+",
                label: "Years Experience",
                color: "bg-orange/20 text-orange",
              },
              {
                icon: Globe,
                value: "48",
                label: "States Served",
                color: "bg-blue-500/20 text-blue-400",
              },
              {
                icon: Truck,
                value: "400+",
                label: "Units In Stock",
                color: "bg-green-500/20 text-green-400",
              },
              {
                icon: Users,
                value: "5,000+",
                label: "Happy Customers",
                color: "bg-purple-500/20 text-purple-400",
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-14 h-14 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-1">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Choose {SITE.name}?
            </h2>
            <p className="text-gray-600">
              We're not just selling containers — we're delivering peace of mind with every order.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Guaranteed",
                desc: "Every unit inspected. No surprises on delivery day.",
              },
              {
                icon: Zap,
                title: "Lightning Fast Quotes",
                desc: "Get your custom quote within 1 hour during business hours.",
              },
              {
                icon: Truck,
                title: "Nationwide Delivery",
                desc: "We deliver to all 48 contiguous states. Coast to coast coverage.",
              },
              {
                icon: Target,
                title: "Transparent Pricing",
                desc: "No hidden fees. What you see is what you pay.",
              },
              {
                icon: Heart,
                title: "Human Support",
                desc: "Real people answer the phone. No bots, no runarounds.",
              },
              {
                icon: CheckCircle2,
                title: "Satisfaction Promise",
                desc: "Not happy? We'll make it right. That's our word.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-orange/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange/10 to-orange/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-orange" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Promise */}
      <section className="py-20 bg-gray-50">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-navy rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To make buying quality containers, trailers, and cabins as easy as ordering anything
                else online — backed by real human support, fair prices, and delivery that shows up
                when promised.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Our Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Inspected units, transparent delivery quotes, and a satisfaction guarantee on every
                order. If we can't meet your needs, we'll tell you upfront — because honesty builds
                lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-navy via-navy-800 to-navy-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto">
                Talk to a specialist today. Free quote within 24 hours — we always pick up the
                phone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-orange hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-orange/30 hover:-translate-y-0.5"
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all border border-white/20"
                >
                  Browse Inventory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
