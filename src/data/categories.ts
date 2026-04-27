export type Category = {
  slug: string;
  name: string;
  count: number;
  image: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  // Container Sizes
  { slug: "10ft-containers", name: "10ft Containers", count: 4, image: "https://nano-containers.com/wp-content/uploads/2026/04/d381df082099-1-600x450.jpg", blurb: "Compact 10ft containers perfect for tight spaces and small storage needs." },
  { slug: "20ft-containers", name: "20ft Containers", count: 17, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Standard 20ft ISO containers in new and used grades." },
  { slug: "30ft-containers", name: "30ft Containers", count: 2, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Mid-size 30ft containers for versatile storage solutions." },
  { slug: "40ft-containers", name: "40ft Containers", count: 6, image: "https://nano-containers.com/wp-content/uploads/2026/04/e7277e12128f-1-300x200.jpg", blurb: "Maximum-capacity ISO units for commercial storage." },
  { slug: "8ft-x-10ft-containers", name: "8ftx10ft Containers", count: 10, image: "https://nano-containers.com/wp-content/uploads/2026/04/26d45d77f69e-1.jpg", blurb: "Compact 8ft wide containers ideal for residential use." },

  // Container Types
  { slug: "high-cube-containers", name: "High-cube containers", count: 8, image: "https://nano-containers.com/wp-content/uploads/2026/04/66ab5488b199-2-300x200.jpg", blurb: "Extra-tall 9ft 6in containers for conversions and tall cargo." },
  { slug: "refrigerated-containers", name: "Refrigerated Containers", count: 4, image: "https://nano-containers.com/wp-content/uploads/2026/04/dbf48c4bfe5e-1-300x225.jpeg", blurb: "Reefer units from -30°C to +30°C for cold chain storage." },
  { slug: "used-shipping-containers", name: "Used Shipping Containers", count: 14, image: "https://nano-containers.com/wp-content/uploads/2026/04/08ae34a6abd6-1-600x400.jpg", blurb: "Wind and watertight used containers at budget-friendly prices." },
  { slug: "flat-pack-containers", name: "Flat Pack Containers", count: 11, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Collapsible flat pack containers for easy transport and assembly." },
  { slug: "swimming-pool-containers", name: "Swimming Pool Containers", count: 10, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Modified containers converted into shipping container pools." },
  { slug: "container-home-office", name: "Container Home Office", count: 17, image: "https://nano-containers.com/wp-content/uploads/2026/04/d5bad9729959-1-600x450.jpg", blurb: "Ready-to-use container offices and home workspace solutions." },
  { slug: "containers-for-export", name: "Containers For Export", count: 8, image: "https://nano-containers.com/wp-content/uploads/2026/04/d381df082099-1-600x450.jpg", blurb: "CSC certified containers ready for international shipping." },

  // Cabins
  { slug: "cabins-for-sale", name: "Cabins For Sale", count: 54, image: "https://nano-containers.com/wp-content/uploads/2026/04/a17761ac0f0a-1-300x200.jpg", blurb: "Anti-vandal jackleg, office, canteen and toilet cabins." },
  { slug: "toilet-shower-blocks", name: "Toilet & Shower Blocks", count: 1, image: "https://nano-containers.com/wp-content/uploads/2026/04/cc3aa8c5db37-1.jpg", blurb: "Portable toilet and shower block cabins for construction sites." },

  // Trailers
  { slug: "enclosed-trailers", name: "Enclosed Trailers", count: 42, image: "https://nano-containers.com/wp-content/uploads/2026/04/09fc1652db89-1.webp", blurb: "Aluminum and steel enclosed cargo and car-hauler trailers." },
  { slug: "container-chassis-and-trailers", name: "Container Chassis and Trailers", count: 50, image: "https://nano-containers.com/wp-content/uploads/2026/04/09fc1652db89-1.webp", blurb: "Chassis and trailers designed for container transport." },
  { slug: "two-horse-trailers", name: "Two Horse Trailers", count: 36, image: "https://nano-containers.com/wp-content/uploads/2026/04/e52dac18e1c6-2-300x200.jpg", blurb: "Bumper-pull and gooseneck trailers for 2 horses." },
  { slug: "three-horse-trailers", name: "Three Horse Trailers", count: 25, image: "https://nano-containers.com/wp-content/uploads/2026/04/e52dac18e1c6-2-300x200.jpg", blurb: "Spacious trailers designed for transporting 3 horses." },
  { slug: "four-horse-trailers", name: "Four Horse Trailers", count: 10, image: "https://nano-containers.com/wp-content/uploads/2026/04/e52dac18e1c6-2-300x200.jpg", blurb: "Large capacity trailers for 4 horse transport." },

  // Accessories
  { slug: "accessories", name: "Accessories", count: 2, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Container accessories and add-ons." },
  { slug: "container-accessories", name: "Container Accessories", count: 11, image: "https://nano-containers.com/wp-content/uploads/2026/04/59fad7ae339a-1.jpg", blurb: "Locks, shelving, ventilation and other container accessories." },
];
