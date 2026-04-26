import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShoppingCart, Menu, X, Truck, ShieldCheck, ChevronDown } from "lucide-react";
import * as React from "react";
import { SITE, TICKER_ITEMS } from "@/data/site";
import { NAV_DROPDOWNS, SIMPLE_LINKS } from "@/data/navigation";
import { useCart } from "@/lib/cart";

interface DropdownMenuProps {
  label: string;
  to: string;
  items: { to: string; label: string }[];
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
        className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-orange transition-colors py-2"
        activeProps={{ className: "text-orange" }}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Link>
      {isOpen && (
        <div className="absolute top-full left-0 mt-0 w-64 bg-white border shadow-xl rounded-b-lg overflow-hidden z-50">
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange/5 hover:text-orange transition-colors"
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
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded bg-navy flex items-center justify-center">
              <div className="h-6 w-7 rounded-sm bg-orange relative">
                <div className="absolute inset-x-0 top-1 h-0.5 bg-navy" />
                <div className="absolute inset-x-0 bottom-1 h-0.5 bg-navy" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-navy text-lg tracking-tight">NANO</div>
              <div className="font-bold text-navy text-sm -mt-1 tracking-wider">CONTAINERS<span className="text-orange text-[10px] ml-1">LLC</span></div>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              to="/"
              className="text-sm font-semibold text-navy hover:text-orange transition-colors py-2"
              activeProps={{ className: "text-orange" }}
              activeOptions={{ exact: true }}
            >
              Home
            </Link>
            
            <DropdownMenu {...NAV_DROPDOWNS.containers} />
            <DropdownMenu {...NAV_DROPDOWNS.trailers} />
            <DropdownMenu {...NAV_DROPDOWNS.cabins} />
            <DropdownMenu {...NAV_DROPDOWNS.resources} />
            
            {SIMPLE_LINKS.slice(1).map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm font-semibold text-navy hover:text-orange transition-colors py-2"
                activeProps={{ className: "text-orange" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/cart" className="relative inline-flex items-center justify-center h-11 px-4 rounded-md border-2 border-orange/40 text-navy hover:bg-orange/10 transition">
              <ShoppingCart className="h-5 w-5" />
              <span className="ml-2 inline-flex items-center justify-center h-6 min-w-6 rounded-full bg-orange text-white text-xs font-bold px-1.5">{count}</span>
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
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-orange"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
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
