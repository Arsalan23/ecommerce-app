import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { CATEGORIES } from "@/data/categories";
import { RESOURCE_LINKS, SIMPLE_LINKS } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-20">
      {/* Trust Bar */}
      <div className="border-b border-white/10">
        <div className="container-px mx-auto max-w-7xl py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🚛", title: "Free Delivery", desc: "48 States Covered" },
              { icon: "⚡", title: "Quick Quote", desc: "Response in 1 Hour" },
              { icon: "🛡️", title: "Secure Payment", desc: "256-bit SSL" },
              { icon: "⭐", title: "Top Rated", desc: "4.9/5 Customer Love" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-bold text-sm">{item.title}</div>
                  <div className="text-xs text-white/60">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
                <rect x="4" y="8" width="24" height="20" rx="2" stroke="white" strokeWidth="2" fill="none"/>
                <path d="M4 14h24M12 8v20M20 8v20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-xl tracking-tight">BOX<span className="text-amber-400">CRAFT</span></div>
              <div className="text-[10px] text-white/50 tracking-wider uppercase">Premium Container Solutions</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-sm">
            Your trusted partner for shipping containers, trailers, and modular cabins. Quality products delivered nationwide with exceptional service.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            {CATEGORIES.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/shop" search={{ category: c.slug }} className="text-white/70 hover:text-amber-400 transition-colors">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="text-white/70 hover:text-amber-400 transition-colors">About Us</Link></li>
            <li><Link to="/testimonials" className="text-white/70 hover:text-amber-400 transition-colors">Testimonials</Link></li>
            <li><Link to="/contact" className="text-white/70 hover:text-amber-400 transition-colors">Contact</Link></li>
            <li><Link to="/buyers-guide" className="text-white/70 hover:text-amber-400 transition-colors">Buyer's Guide</Link></li>
            <li><Link to="/faq" className="text-white/70 hover:text-amber-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href={SITE.phoneHref} className="flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors">
              <Phone className="h-4 w-4 text-amber-400" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors">
              <Mail className="h-4 w-4 text-amber-400" /> {SITE.email}
            </a>
            <div className="flex items-start gap-2 text-white/70">
              <MapPin className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" /> 
              <span>{SITE.address}</span>
            </div>
          </div>
          <Link to="/contact" className="mt-5 w-full text-center inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white font-bold uppercase tracking-wide text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-teal-500/30">Get a Free Quote</Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© 2026 BoxCraft. All rights reserved. Premium container solutions nationwide.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
