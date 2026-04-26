export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "20ft-containers",
    name: "Shipping Containers",
    count: 17,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg",
    blurb: "Standard 20ft ISO containers in new and used grades.",
  },
  {
    slug: "enclosed-trailers",
    name: "Enclosed Trailers",
    count: 42,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/09fc1652db89-1.webp",
    blurb: "Aluminum and steel enclosed cargo and car-hauler trailers.",
  },
  {
    slug: "cabins-for-sale",
    name: "Cabins",
    count: 54,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/a17761ac0f0a-1-300x200.jpg",
    blurb: "Anti-vandal jackleg, office, canteen and toilet cabins.",
  },
  {
    slug: "high-cube-containers",
    name: "High Cube",
    count: 8,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/66ab5488b199-2-300x200.jpg",
    blurb: "Extra-tall 9ft 6in containers for conversions and tall cargo.",
  },
  {
    slug: "refrigerated-containers",
    name: "Refrigerated",
    count: 4,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/dbf48c4bfe5e-1-300x225.jpeg",
    blurb: "Reefer units from -30°C to +30°C for cold chain storage.",
  },
  {
    slug: "two-horse-trailers",
    name: "Horse Trailers",
    count: 36,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/e52dac18e1c6-2-300x200.jpg",
    blurb: "Bumper-pull and gooseneck trailers for 2+ horses.",
  },
  {
    slug: "40ft-containers",
    name: "40ft Containers",
    count: 6,
    image: "https://nano-containers.com/wp-content/uploads/2026/04/e7277e12128f-1-300x200.jpg",
    blurb: "Maximum-capacity ISO units for commercial storage.",
  },
];
