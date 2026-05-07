import { resolveProductImage } from "./productImagePool";
import { PRODUCTS } from "./products";

export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

/** Counts/blurbs are curated; hero images come from the same pools as shop products. */
const CATEGORIES_RAW: Omit<Category, "image" | "count">[] = [
  // Container Sizes
  {
    slug: "10ft-containers",
    name: "10ft Containers",
    blurb: "Compact 10ft containers perfect for tight spaces and small storage needs.",
  },
  {
    slug: "20ft-containers",
    name: "20ft Containers",
    blurb: "Standard 20ft ISO containers in new and used grades.",
  },
  {
    slug: "30ft-containers",
    name: "30ft Containers",
    blurb: "Mid-size 30ft containers for versatile storage solutions.",
  },
  {
    slug: "40ft-containers",
    name: "40ft Containers",
    blurb: "Maximum-capacity ISO units for commercial storage.",
  },
  {
    slug: "8ft-x-10ft-containers",
    name: "8ftx10ft Containers",
    blurb: "Compact 8ft wide containers ideal for residential use.",
  },

  // Container Types
  {
    slug: "high-cube-containers",
    name: "High-cube containers",
    blurb: "Extra-tall 9ft 6in containers for conversions and tall cargo.",
  },
  {
    slug: "refrigerated-containers",
    name: "Refrigerated Containers",
    blurb: "Reefer units from -30°C to +30°C for cold chain storage.",
  },
  {
    slug: "used-shipping-containers",
    name: "Used Shipping Containers",
    blurb: "Wind and watertight used containers at budget-friendly prices.",
  },
  {
    slug: "flat-pack-containers",
    name: "Flat Pack Containers",
    blurb: "Collapsible flat pack containers for easy transport and assembly.",
  },
  {
    slug: "swimming-pool-containers",
    name: "Swimming Pool Containers",
    blurb: "Modified containers converted into shipping container pools.",
  },
  {
    slug: "container-home-office",
    name: "Container Home Office",
    blurb: "Ready-to-use container offices and home workspace solutions.",
  },
  {
    slug: "containers-for-export",
    name: "Containers For Export",
    blurb: "CSC certified containers ready for international shipping.",
  },

  // Cabins
  {
    slug: "cabins-for-sale",
    name: "Cabins For Sale",
    blurb: "Anti-vandal jackleg, office, canteen and toilet cabins.",
  },
  {
    slug: "steel-cabins",
    name: "Steel Cabins",
    blurb: "Heavy-duty steel anti-vandal cabins for sites, yards and security.",
  },
  {
    slug: "modular-cabins",
    name: "Modular Cabins",
    blurb: "Modular steel units that link and scale for offices, welfare and storage.",
  },
  {
    slug: "portable-offices",
    name: "Portable Offices",
    blurb: "Ready-to-use portable office cabins — power, lighting and HVAC ready.",
  },
  {
    slug: "guard-shacks",
    name: "Guard Shacks",
    blurb: "Compact guard huts and gatehouses for checkpoints and parking control.",
  },
  {
    slug: "toilet-shower-blocks",
    name: "Toilet & Shower Blocks",
    blurb: "Portable toilet and shower block cabins for construction sites.",
  },

  // Trailers
  {
    slug: "enclosed-trailers",
    name: "Enclosed Trailers",
    blurb: "Aluminum and steel enclosed cargo and car-hauler trailers.",
  },
  {
    slug: "container-chassis-and-trailers",
    name: "Container Chassis and Trailers",
    blurb: "Chassis and trailers designed for container transport.",
  },
  {
    slug: "two-horse-trailers",
    name: "Two Horse Trailers",
    blurb: "Bumper-pull and gooseneck trailers for 2 horses.",
  },
  {
    slug: "three-horse-trailers",
    name: "Three Horse Trailers",
    blurb: "Spacious trailers designed for transporting 3 horses.",
  },
  {
    slug: "four-horse-trailers",
    name: "Four Horse Trailers",
    blurb: "Large capacity trailers for 4 horse transport.",
  },

  // Accessories
  {
    slug: "accessories",
    name: "Accessories",
    blurb: "Container accessories and add-ons.",
  },
  {
    slug: "container-accessories",
    name: "Container Accessories",
    blurb: "Locks, shelving, ventilation and other container accessories.",
  },
];

export const CATEGORIES: Category[] = CATEGORIES_RAW
  .map((c) => {
    const count = PRODUCTS.filter((p) => p.category === c.slug).length;
    return {
      ...c,
      count,
      image: resolveProductImage({ id: `category-${c.slug}`, category: c.slug, slug: c.slug }),
    };
  })
  .filter((c) => c.count > 0);
