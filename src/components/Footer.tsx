import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { CATEGORIES } from "@/data/categories";
import { RESOURCE_LINKS, SIMPLE_LINKS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground mt-20">
      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-extrabold text-xl">NANO CONTAINERS <span className="text-orange">LLC</span></div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Nationwide supplier of new and used shipping containers, enclosed trailers, horse trailers, and steel cabins. Delivered to all 48 states.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 text-white/80 hover:text-orange"><Phone className="h-4 w-4 text-orange" /> {SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/80 hover:text-orange"><Mail className="h-4 w-4 text-orange" /> {SITE.email}</a>
            <div className="flex items-start gap-2 text-white/80"><MapPin className="h-4 w-4 text-orange mt-0.5" /> {SITE.address}</div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Shop By Category</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to="/category/$slug" params={{ slug: c.slug }} className="text-white/80 hover:text-orange">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {SIMPLE_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/80 hover:text-orange">{l.label}</Link>
              </li>
            ))}
            <li><Link to="/shop" className="text-white/80 hover:text-orange">Shop Containers</Link></li>
            <li><Link to="/buyers-guide" className="text-white/80 hover:text-orange">Buyer's Guide</Link></li>
            <li><Link to="/delivery-placement-info" className="text-white/80 hover:text-orange">Delivery Info</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            {RESOURCE_LINKS.map((r) => (
              <li key={r.to}>
                <Link to={r.to} className="text-white/80 hover:text-orange">{r.label}</Link>
              </li>
            ))}
            <li><Link to="/about" className="text-white/80 hover:text-orange">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-orange mb-4">Business Hours</h4>
          <ul className="space-y-1.5 text-sm text-white/80">
            {SITE.hours.map((h) => (
              <li key={h.d} className="flex justify-between gap-4">
                <span className="font-semibold text-white">{h.d}</span><span>{h.h}</span>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-orange mt-5 w-full">Get a Free Quote</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© 2026 Nano Containers LLC. All rights reserved. Nationwide shipping container sales & delivery.</div>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping-policy" className="hover:text-white transition-colors">Shipping Policy</Link>
            <Link to="/return-policy" className="hover:text-white transition-colors">Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
