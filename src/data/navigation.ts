export const NAV_DROPDOWNS = {
  containers: {
    label: "Containers",
    to: "/shop",
    items: [
      { to: "/shop", search: { category: "20ft-containers" }, label: "20ft Containers" },
      { to: "/shop", search: { category: "40ft-containers" }, label: "40ft Containers" },
      { to: "/shop", search: { category: "high-cube-containers" }, label: "High Cube Containers" },
      { to: "/shop", search: { category: "refrigerated-containers" }, label: "Refrigerated Containers" },
      { to: "/shop", search: { category: "used-shipping-containers" }, label: "Used Containers" },
      { to: "/shop", search: { category: "10ft-containers" }, label: "10ft Containers" },
      { to: "/shop", search: { category: "30ft-containers" }, label: "30ft Containers" },
      { to: "/shop", search: { category: "flat-pack-containers" }, label: "Flat Pack Containers" },
      { to: "/shop", search: { category: "swimming-pool-containers" }, label: "Swimming Pool Containers" },
      { to: "/shop", search: { category: "container-home-office" }, label: "Home / Office Containers" },
      { to: "/shop", search: { category: "containers-for-export" }, label: "Containers For Export" },
    ],
  },
  trailers: {
    label: "Trailers",
    to: "/shop",
    items: [
      { to: "/shop", search: { category: "enclosed-trailers" }, label: "Enclosed Trailers" },
      { to: "/shop", search: { category: "container-chassis-and-trailers" }, label: "Container Chassis & Trailers" },
      { to: "/shop", search: { category: "two-horse-trailers" }, label: "2 Horse Trailers" },
      { to: "/shop", search: { category: "three-horse-trailers" }, label: "3 Horse Trailers" },
      { to: "/shop", search: { category: "four-horse-trailers" }, label: "4 Horse Trailers" },
      { to: "/shop", search: { category: "gooseneck-trailers" }, label: "Gooseneck Trailers" },
      { to: "/shop", search: { category: "equipment-trailers" }, label: "Equipment Trailers" },
    ],
  },
  cabins: {
    label: "Cabins",
    to: "/shop",
    items: [
      { to: "/shop", search: { category: "cabins-for-sale" }, label: "Cabins For Sale" },
      { to: "/shop", search: { category: "steel-cabins" }, label: "Steel Cabins" },
      { to: "/shop", search: { category: "modular-cabins" }, label: "Modular Cabins" },
      { to: "/shop", search: { category: "portable-offices" }, label: "Portable Offices" },
      { to: "/shop", search: { category: "guard-shacks" }, label: "Guard Shacks" },
      { to: "/shop", search: { category: "toilet-shower-blocks" }, label: "Toilet & Shower Blocks" },
    ],
  },
  accessories: {
    label: "Accessories",
    to: "/shop",
    items: [
      { to: "/shop", search: { category: "container-parts" }, label: "Container Parts" },
      { to: "/shop", search: { category: "container-doors" }, label: "Doors & Windows" },
      { to: "/shop", search: { category: "container-flooring" }, label: "Flooring" },
      { to: "/shop", search: { category: "shelving-accessories" }, label: "Shelving & Racking" },
      { to: "/shop", search: { category: "hvac-systems" }, label: "HVAC Systems" },
      { to: "/shop", search: { category: "electrical-packages" }, label: "Electrical Packages" },
      { to: "/shop", search: { category: "lock-boxes" }, label: "Lock Boxes & Security" },
      { to: "/shop", search: { category: "ramps-steps" }, label: "Ramps & Steps" },
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
      { to: "/about", label: "About Us" },
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
