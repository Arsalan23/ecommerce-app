export const NAV_DROPDOWNS = {
  containers: {
    label: "Containers",
    to: "/shop",
    items: [
      { to: "/category/20ft-containers", label: "20ft Containers" },
      { to: "/category/40ft-containers", label: "40ft Containers" },
      { to: "/category/high-cube-containers", label: "High Cube Containers" },
      { to: "/category/refrigerated-containers", label: "Refrigerated Containers" },
      { to: "/category/used-shipping-containers", label: "Used Containers" },
      { to: "/category/10ft-containers", label: "10ft Containers" },
      { to: "/category/30ft-containers", label: "30ft Containers" },
      { to: "/category/flat-pack-containers", label: "Flat Pack Containers" },
      { to: "/category/swimming-pool-containers", label: "Swimming Pool Containers" },
      { to: "/category/container-home-office", label: "Home / Office Containers" },
      { to: "/category/containers-for-export", label: "Containers For Export" },
    ],
  },
  trailers: {
    label: "Trailers",
    to: "/category/enclosed-trailers",
    items: [
      { to: "/category/enclosed-trailers", label: "Enclosed Trailers" },
      { to: "/category/container-chassis-and-trailers", label: "Container Chassis & Trailers" },
      { to: "/category/two-horse-trailers", label: "2 Horse Trailers" },
      { to: "/category/three-horse-trailers", label: "3 Horse Trailers" },
      { to: "/category/four-horse-trailers", label: "4 Horse Trailers" },
    ],
  },
  cabins: {
    label: "Cabins",
    to: "/category/cabins-for-sale",
    items: [
      { to: "/category/cabins-for-sale", label: "Cabins For Sale" },
    ],
  },
  resources: {
    label: "Resources",
    to: "/buyers-guide",
    items: [
      { to: "/buyers-guide", label: "Buyer's Guide" },
      { to: "/container-sizes", label: "Container Sizes & Specs" },
      { to: "/new-vs-used", label: "New vs. Used Guide" },
      { to: "/delivery-placement-info", label: "Delivery & Placement" },
      { to: "/faq", label: "FAQ" },
    ],
  },
};

export const SIMPLE_LINKS = [
  { to: "/", label: "Home" },
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
