import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShoppingCart, Menu, X, Truck, ShieldCheck, ChevronDown } from "lucide-react";
import * as React from "react";
import { SITE, TICKER_ITEMS } from "@/data/site";
import { NAV_DROPDOWNS, SIMPLE_LINKS } from "@/data/navigation";
import { useCart } from "@/lib/cart";

interface DropdownMenuProps {
  label: string;
  to: string;
  items: { to: string; label: string; search?: Record<string, string> }[];
}

function DropdownMenu({ label, to, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={to}
        className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-amber-500 transition-colors py-2"
        activeProps={{ className: "text-amber-500" }}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Link>
      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-64 bg-white border shadow-xl rounded-b-lg overflow-hidden z-50">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={`${item.to}-${item.label}`}
                to={item.to}
                search={item.search}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-amber-500/5 hover:text-amber-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar (orange) */}
      <div className="bg-orange text-white text-xs sm:text-sm">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between gap-4 py-2 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 hover:opacity-90 font-medium">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hidden sm:inline-flex items-center gap-1.5 hover:opacity-90 font-medium">
              <Mail className="h-3.5 w-3.5" /> {SITE.email}
            </a>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <MapPin className="h-3.5 w-3.5" /> {SITE.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium"><ShieldCheck className="h-3.5 w-3.5" /> Secure Checkout</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 font-medium"><Truck className="h-3.5 w-3.5" /> Fast Delivery</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b shadow-sm">
        <div className="container-px mx-auto max-w-7xl flex items-center justify-between gap-6 py-4">
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-navy to-navy-800 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
                <rect x="4" y="8" width="24" height="20" rx="2" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
                <path d="M4 14h24M12 8v20M20 8v20" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="18" r="3" fill="#f59e0b"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-black text-navy text-xl tracking-tight">BOX<span className="text-amber-500">CRAFT</span></div>
              <div className="text-[10px] font-semibold text-gray-500 tracking-[0.2em] uppercase">Premium Containers</div>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            <Link
              to="/"
              className="text-sm font-semibold text-navy hover:text-amber-500 transition-colors py-2"
              activeProps={{ className: "text-amber-500" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            
            <DropdownMenu {...NAV_DROPDOWNS.containers} />
            <DropdownMenu {...NAV_DROPDOWNS.trailers} />
            <DropdownMenu {...NAV_DROPDOWNS.cabins} />
            {/* <DropdownMenu {...NAV_DROPDOWNS.accessories} /> */}
            <DropdownMenu {...NAV_DROPDOWNS.resources} />
            
            {/* <Link
              to="/shop"
              className="text-sm font-semibold text-orange hover:text-amber-600 transition-colors py-2"
            >
              Deals
            </Link> */}
            
            {SIMPLE_LINKS.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold text-navy hover:text-amber-500 transition-colors py-2"
                activeProps={{ className: "text-amber-500" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative inline-flex items-center justify-center h-11 px-4 rounded-md border-2 border-amber-500/40 text-navy hover:bg-amber-500/10 transition">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2 inline-flex items-center justify-center h-6 min-w-6 rounded-full bg-amber-500 text-white text-xs font-bold px-1.5">{count}</span>
            </Link>
            <Link to="/shop" className="hidden md:inline-flex btn-orange !py-2.5 !px-5">
              Shop Now
            </Link>
            <button
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-md border text-navy"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="lg:hidden border-t bg-white">
            <div className="container-px mx-auto max-w-7xl py-3 flex flex-col">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-navy border-b"
              >
                Home
              </Link>
              
              {/* Mobile Dropdowns */}
              {Object.entries(NAV_DROPDOWNS).map(([key, dropdown]) => (
                <div key={key} className="border-b">
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                    className="w-full flex items-center justify-between py-2.5 text-sm font-semibold text-navy"
                  >
                    {dropdown.label}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === key ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === key && (
                    <div className="pb-2 pl-4">
                      {dropdown.items.map((item) => (
                        <Link
                          key={`${item.to}-${item.label}`}
                          to={item.to}
                          search={item.search}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-amber-500"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* <Link
                to="/shop"
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-orange border-b"
              >
                Deals
              </Link> */}
              
              {SIMPLE_LINKS.slice(1).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-semibold text-navy border-b last:border-0"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Ticker bar */}
      <div className="bg-navy text-white border-y border-orange/30 overflow-hidden">
        <div className="flex ticker-track whitespace-nowrap py-2.5">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((t, i) => (
            <span key={i} className="px-6 text-xs font-bold uppercase tracking-widest flex items-center gap-6">
              {t}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
