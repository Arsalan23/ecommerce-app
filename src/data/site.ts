export const SITE = {
  name: "BoxCraft",
  tagline: "Premium Container Solutions",
  phone: "+1 (435) 229-9359",
  phoneHref: "tel:+14352299359",
  email: "hello@boxcraft.com",
  address: "1045 S 5500 W, Salt Lake City, UT 84104",
  hours: [
    { d: "Mon – Fri", h: "8:00 AM – 6:00 PM" },
    { d: "Saturday", h: "9:00 AM – 2:00 PM" },
    { d: "Sunday", h: "Closed" },
  ],
};

export const TICKER_ITEMS = [
  "BoxCraft — Premium Container Solutions",
  "Free Nationwide Delivery",
  "20ft & 40ft Containers",
  "High Cube & Refrigerated",
  "Custom Modified Units",
  "Enclosed Trailers",
  "Horse & Cargo Trailers",
  "Modular Cabins",
  "Steel Office Units",
  "New & Used In Stock",
  "Instant Online Quotes",
  "Financing Available",
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/shop", search: { category: "20ft-containers" }, label: "Containers" },
  { to: "/shop", search: { category: "enclosed-trailers" }, label: "Trailers" },
  { to: "/shop", search: { category: "cabins-for-sale" }, label: "Cabins" },
  { to: "/buyers-guide", label: "Resources" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export const RESOURCE_LINKS = [
  { to: "/buyers-guide", label: "Buyer's Guide", icon: "📋", desc: "Step-by-step purchase guide" },
  { to: "/container-sizes", label: "Sizes & Specs", icon: "📐", desc: "Full dimension charts" },
  { to: "/new-vs-used", label: "New vs. Used", icon: "⚖️", desc: "Grade comparison guide" },
  { to: "/faq", label: "FAQ", icon: "❓", desc: "Common questions answered" },
  { to: "/delivery-placement-info", label: "Delivery Info", icon: "🚛", desc: "Site prep & placement guide" },
  { to: "/contact", label: "Get a Quote", icon: "📞", desc: "Free custom quote" },
];
