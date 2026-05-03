import { resolveProductImage } from "./productImagePool";

export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

/** Counts/blurbs are curated; hero images come from the same pools as shop products. */
const CATEGORIES_RAW: Omit<Category, "image">[] = [
  // Container Sizes
  {
    slug: "10ft-containers",
    name: "10ft Containers",
    count: 4,
    blurb: "Compact 10ft containers perfect for tight spaces and small storage needs.",
  },
  {
    slug: "20ft-containers",
    name: "20ft Containers",
    count: 17,
    blurb: "Standard 20ft ISO containers in new and used grades.",
  },
  {
    slug: "30ft-containers",
    name: "30ft Containers",
    count: 2,
    blurb: "Mid-size 30ft containers for versatile storage solutions.",
  },
  {
    slug: "40ft-containers",
    name: "40ft Containers",
    count: 6,
    blurb: "Maximum-capacity ISO units for commercial storage.",
  },
  {
    slug: "8ft-x-10ft-containers",
    name: "8ftx10ft Containers",
    count: 10,
    blurb: "Compact 8ft wide containers ideal for residential use.",
  },

  // Container Types
  {
    slug: "high-cube-containers",
    name: "High-cube containers",
    count: 8,
    blurb: "Extra-tall 9ft 6in containers for conversions and tall cargo.",
  },
  {
    slug: "refrigerated-containers",
    name: "Refrigerated Containers",
    count: 4,
    blurb: "Reefer units from -30°C to +30°C for cold chain storage.",
  },
  {
    slug: "used-shipping-containers",
    name: "Used Shipping Containers",
    count: 14,
    blurb: "Wind and watertight used containers at budget-friendly prices.",
  },
  {
    slug: "flat-pack-containers",
    name: "Flat Pack Containers",
    count: 11,
    blurb: "Collapsible flat pack containers for easy transport and assembly.",
  },
  {
    slug: "swimming-pool-containers",
    name: "Swimming Pool Containers",
    count: 10,
    blurb: "Modified containers converted into shipping container pools.",
  },
  {
    slug: "container-home-office",
    name: "Container Home Office",
    count: 17,
    blurb: "Ready-to-use container offices and home workspace solutions.",
  },
  {
    slug: "containers-for-export",
    name: "Containers For Export",
    count: 8,
    blurb: "CSC certified containers ready for international shipping.",
  },

  // Cabins
  {
    slug: "cabins-for-sale",
    name: "Cabins For Sale",
    count: 54,
    blurb: "Anti-vandal jackleg, office, canteen and toilet cabins.",
  },
  {
    slug: "steel-cabins",
    name: "Steel Cabins",
    count: 3,
    blurb: "Heavy-duty steel anti-vandal cabins for sites, yards and security.",
  },
  {
    slug: "modular-cabins",
    name: "Modular Cabins",
    count: 3,
    blurb: "Modular steel units that link and scale for offices, welfare and storage.",
  },
  {
    slug: "portable-offices",
    name: "Portable Offices",
    count: 3,
    blurb: "Ready-to-use portable office cabins — power, lighting and HVAC ready.",
  },
  {
    slug: "guard-shacks",
    name: "Guard Shacks",
    count: 3,
    blurb: "Compact guard huts and gatehouses for checkpoints and parking control.",
  },
  {
    slug: "toilet-shower-blocks",
    name: "Toilet & Shower Blocks",
    count: 1,
    blurb: "Portable toilet and shower block cabins for construction sites.",
  },

  // Trailers
  {
    slug: "enclosed-trailers",
    name: "Enclosed Trailers",
    count: 42,
    blurb: "Aluminum and steel enclosed cargo and car-hauler trailers.",
  },
  {
    slug: "container-chassis-and-trailers",
    name: "Container Chassis and Trailers",
    count: 50,
    blurb: "Chassis and trailers designed for container transport.",
  },
  {
    slug: "two-horse-trailers",
    name: "Two Horse Trailers",
    count: 36,
    blurb: "Bumper-pull and gooseneck trailers for 2 horses.",
  },
  {
    slug: "three-horse-trailers",
    name: "Three Horse Trailers",
    count: 25,
    blurb: "Spacious trailers designed for transporting 3 horses.",
  },
  {
    slug: "four-horse-trailers",
    name: "Four Horse Trailers",
    count: 10,
    blurb: "Large capacity trailers for 4 horse transport.",
  },

  // Accessories
  {
    slug: "accessories",
    name: "Accessories",
    count: 2,
    blurb: "Container accessories and add-ons.",
  },
  {
    slug: "container-accessories",
    name: "Container Accessories",
    count: 11,
    blurb: "Locks, shelving, ventilation and other container accessories.",
  },
];

export const CATEGORIES: Category[] = CATEGORIES_RAW.map((c) => ({
  ...c,
  image: resolveProductImage({ id: `category-${c.slug}`, category: c.slug, slug: c.slug }),
}));
