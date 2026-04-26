import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SITE } from "@/data/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Nano Containers LLC" },
      { name: "description", content: "Get in touch for free quotes on shipping containers, trailers and cabins. We respond within 1 business day." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <>
      <PageHero eyebrow="We're here to help" title="Get In Touch" subtitle="Have a question about a container, trailer, or cabin? Our team will get back to you within 1 business day." />

      <section className="py-16 container-px mx-auto max-w-7xl grid lg:grid-cols-[380px_1fr] gap-10">
        <aside className="space-y-4">
          {[
            { icon: MapPin, t: "Location", c: SITE.address },
            { icon: Phone, t: "Phone", c: SITE.phone, href: SITE.phoneHref },
            { icon: Mail, t: "Email", c: SITE.email, href: `mailto:${SITE.email}` },
          ].map(({ icon: Icon, t, c, href }) => (
            <div key={t} className="bg-white border rounded-xl p-5 flex gap-4">
              <div className="h-11 w-11 rounded-lg bg-orange/10 text-orange flex items-center justify-center shrink-0"><Icon className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-orange">{t}</div>
                {href ? <a href={href} className="font-bold text-navy hover:text-orange">{c}</a> : <div className="font-bold text-navy">{c}</div>}
              </div>
            </div>
          ))}
          <div className="bg-white border rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3"><Clock className="h-5 w-5 text-orange" /><div className="font-bold text-navy">Business Hours</div></div>
            <ul className="text-sm space-y-1.5">
              {SITE.hours.map((h) => (
                <li key={h.d} className="flex justify-between"><span className="text-muted-foreground">{h.d}</span><span className="font-semibold text-navy">{h.h}</span></li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="bg-white border rounded-xl p-6 md:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="text-5xl">✅</div>
              <h2 className="mt-4 text-2xl font-extrabold text-navy">Message Sent!</h2>
              <p className="mt-2 text-muted-foreground">A specialist will reply within 1 business day.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="grid gap-5">
              <h2 className="text-2xl font-extrabold text-navy">Request a Free Quote</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name *"><input required className="input" /></Field>
                <Field label="Email Address *"><input required type="email" className="input" /></Field>
                <Field label="Phone Number"><input type="tel" className="input" /></Field>
                <Field label="Subject *">
                  <select required className="input">
                    <option>General Inquiry</option><option>Request a Quote</option><option>Shipping Question</option>
                    <option>Return / Refund</option><option>Custom Order</option><option>Other</option>
                  </select>
                </Field>
              </div>
              <Field label="Container Type of Interest">
                <select className="input">
                  <option>-- Select a Container Type --</option>
                  <option>20ft Standard Container</option><option>40ft Standard Container</option>
                  <option>High Cube Container</option><option>Refrigerated Container</option>
                  <option>Modified / Custom Container</option><option>Enclosed Trailer</option>
                  <option>Horse Trailer</option><option>Modular Cabin</option><option>Other / Not Sure</option>
                </select>
              </Field>
              <Field label="Message *"><textarea required rows={5} className="input" /></Field>
              <button className="btn-orange justify-self-start"><Send className="h-4 w-4" /> Send Message</button>
            </form>
          )}
        </div>
      </section>

      <style>{`.input { @apply w-full border border-input rounded-md px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange/40 focus:border-orange transition; }`}</style>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-xs font-bold uppercase tracking-widest text-navy mb-1.5">{label}</div>
      {children}
    </label>
  );
}
