export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;        // category slug
  categoryLabel: string;
  image: string;
  badge?: "New" | "Sale";
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "p1", slug: "20ft-shipping-container-one-trip-white",
    name: "20Ft Shipping Container (One Trip) – White",
    price: 2400, category: "20ft-containers", categoryLabel: "20ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/d21f65a80990-1.jpg",
    badge: "New", featured: true,
  },
  {
    id: "p2", slug: "enclosed-car-hauler-26ft-aluminum-blaze",
    name: "Enclosed Car Hauler 2026 26ft. Aluminum Blaze",
    price: 13500, oldPrice: 24999, category: "enclosed-trailers", categoryLabel: "Enclosed Trailers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/ebf510cdf6aa-1-600x450.webp",
    badge: "Sale", featured: true,
  },
  {
    id: "p3", slug: "20ft-x-8ft-steel-store-stacking",
    name: "20Ft x 8Ft Steel Store (Suitable for Stacking)",
    price: 3479, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/d5bad9729959-1-600x450.jpg",
    badge: "New", featured: true,
  },
  {
    id: "p4", slug: "40ft-x-8ft-flat-rack-container",
    name: "40Ft X 8Ft New And Used Container Flat Racks",
    price: 6000, category: "40ft-containers", categoryLabel: "40ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/5337ce35e8f2-1-600x410.png",
    featured: true,
  },
  {
    id: "p5", slug: "20ft-high-cube-hazardous-waste",
    name: "20ft High Cube Container – Hazardous Waste",
    price: 2500, category: "high-cube-containers", categoryLabel: "High Cube",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/e22af340440e-1-600x450.jpg",
    featured: true,
  },
  {
    id: "p6", slug: "2016-shadow-2-horse-bumper-pull",
    name: "2016 Shadow 2 Horse Bumper Pull",
    price: 8080, oldPrice: 10100, category: "two-horse-trailers", categoryLabel: "Horse Trailers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/2b40dde6582d-2-600x450.jpg",
    badge: "Sale", featured: true,
  },
  {
    id: "p7", slug: "40ft-high-cube-reefer-container",
    name: "40ft High Cube Reefer Container",
    price: 9200, category: "refrigerated-containers", categoryLabel: "Refrigerated",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/3b87281450a8-1-600x450.jpg",
    featured: true,
  },
  {
    id: "p8", slug: "11-double-mains-toilet-blue",
    name: "1+1 Double Mains Toilet 8Ft x 5Ft (Blue)",
    price: 2650, category: "cabins-for-sale", categoryLabel: "Toilet & Shower Blocks",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/cc3aa8c5db37-1.jpg",
    badge: "New",
  },
  {
    id: "p9", slug: "11-double-mains-toilet-bottle-green",
    name: "1+1 Double Mains Toilet 8Ft x 5Ft (Bottle Green)",
    price: 2600, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/a17761ac0f0a-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p10", slug: "11-double-mains-toilet-green",
    name: "1+1 Double Mains Toilet 8Ft x 5Ft (Green)",
    price: 2650, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/05fa5b28faba-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p11", slug: "10-x-8ft-flat-floor-bunded-store",
    name: "10 x 8ft Flat Floor Bunded Store",
    price: 6557, category: "20ft-containers", categoryLabel: "10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/7353f56cf2c2-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p12", slug: "10ft-cut-down-used-container",
    name: "10ft Cut Down Used Container",
    price: 1450, category: "20ft-containers", categoryLabel: "Used Shipping Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/08ae34a6abd6-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p13", slug: "10ft-used-shipping-container-wwt",
    name: "10ft Used Shipping Container – Wind & Watertight",
    price: 1500, category: "20ft-containers", categoryLabel: "Containers For Export",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/d381df082099-1-600x450.jpg",
    badge: "New",
  },
  {
    id: "p14", slug: "10ft-x-10ft-jackleg-cabin",
    name: "10Ft x 10Ft Jackleg Cabin (Site Cabin)",
    price: 4198, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/392aad75a733-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p15", slug: "10ft-x-8ft-reefer-container-used",
    name: "10ft x 8ft 10′ Reefer Container, Used",
    price: 2700, category: "refrigerated-containers", categoryLabel: "Refrigerated Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/dbf48c4bfe5e-1-600x450.jpeg",
    badge: "New",
  },
  {
    id: "p16", slug: "10ft-x-8ft-flat-floor-bunded-store",
    name: "10Ft X 8Ft Flat Floor Bunded Store",
    price: 6780, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/c705819f426e-1.jpg",
    badge: "New",
  },
  {
    id: "p17", slug: "10ft-x-8ft-open-mesh-floor-bunded",
    name: "10Ft X 8Ft Open Mesh Floor Bunded Store",
    price: 8450, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/7cce7505ae99-1.jpg",
    badge: "New",
  },
  {
    id: "p18", slug: "10ft-x-8ft-raised-bunded-store",
    name: "10Ft X 8Ft Raised Bunded Store",
    price: 6485, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/490b6f77359b-1.jpg",
    badge: "New",
  },
  {
    id: "p19", slug: "10ft-x-8ft-shipping-container-blue",
    name: "10Ft X 8Ft Shipping Container (One Trip) – Blue",
    price: 1535, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/26d45d77f69e-1.jpg",
    badge: "New",
  },
  {
    id: "p20", slug: "10ft-x-8ft-shipping-container-green",
    name: "10Ft X 8Ft Shipping Container (One Trip) – Green",
    price: 2150, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/78d9c8641a24-3.jpg",
    badge: "New",
  },
  {
    id: "p21", slug: "10ft-x-8ft-shipping-container-white",
    name: "10Ft X 8Ft Shipping Container (One Trip) – White",
    price: 2150, category: "20ft-containers", categoryLabel: "8ftx10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/8560a1b43fe2-1.jpg",
    badge: "New",
  },
  {
    id: "p22", slug: "12ft-x-10ft-jackleg-cabin-plastisol",
    name: "12Ft x 10Ft Jackleg Cabin (Plastisol)",
    price: 4830, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/e1f5128e284d-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p23", slug: "12ft-x-7ft-mobile-canteen",
    name: "12Ft x 7Ft 6in Mobile Canteen Cabin",
    price: 11070, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/9b89a0d44fe2-1-600x400.jpeg",
    badge: "New",
  },
  {
    id: "p24", slug: "12ft-x-7ft-anti-vandal-office",
    name: "12Ft x 7Ft 6in Steel Mobile Anti-Vandal Office Cabin",
    price: 10250, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/49b6931f1bde-1-600x400.jpeg",
    badge: "New",
  },
  {
    id: "p25", slug: "12ft-x-8ft-canteen-cabin",
    name: "12Ft x 8Ft Steel Anti-Vandal Canteen Cabin",
    price: 4808, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/c956a18d9315-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p26", slug: "12ft-x-8ft-anti-vandal-office",
    name: "12Ft x 8Ft Steel Anti-Vandal Office Cabin",
    price: 4568, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/54119b0f26c1-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p27", slug: "12ft-x-8ft-drying-room-cabin",
    name: "12Ft x 8Ft Steel Drying Room Cabin",
    price: 4803, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/ebcdb32bf8a0-7.jpg",
    badge: "New",
  },
  {
    id: "p28", slug: "12ft-x-8ft-steel-store-cabin",
    name: "12Ft x 8Ft Steel Store Cabin (Suitable for stacking)",
    price: 2844, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/81e57f0999c7-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p29", slug: "12ft-x-9ft-21-jackleg-toilet",
    name: "12Ft x 9Ft 2+1 Jackleg Toilet Cabin",
    price: 9460, category: "cabins-for-sale", categoryLabel: "Cabins For Sale",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/29174d6ee9f1-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p30", slug: "10ft-x-8ft-shipping-green-ral6007",
    name: "10ft x 8ft Shipping Container (One Trip) Green (RAL 6007)",
    price: 3350, category: "20ft-containers", categoryLabel: "10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/e972fded7b40-1-600x400.jpg",
    badge: "New",
  },
  {
    id: "p31", slug: "10ft-x-8ft-shipping-white-ral9003",
    name: "10ft x 8ft Shipping Container (One Trip) White (RAL 9003)",
    price: 3350, category: "20ft-containers", categoryLabel: "10ft Containers",
    image: "https://nano-containers.com/wp-content/uploads/2026/04/6c67541e7ac4-1-600x400.jpg",
    badge: "New",
  },
];

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
