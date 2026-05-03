/**
 * Product & category images: nano-containers assets + a small set of Unsplash photos
 * that are logistics / industrial / workspace only (no generic lifestyle or nature).
 */

const N = (path: string) => `https://nano-containers.com/wp-content/uploads/2026/04/${path}`;

const U = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

/** Verified Unsplash: warehouse, highways, construction, offices, aerial logistics — not portraits or nature. */
const INDUSTRIAL_UNSPLASH = [
  U("photo-1586528116311-ad8dd3c8310d"),
  U("photo-1601584115197-04ecc0da31d7"),
  U("photo-1541888946425-d81bb19240f5"),
  U("photo-1544620347-c4fd4a3d5957"),
  U("photo-1486406146926-c627a92ad1ab"),
  U("photo-1503387762-592deb58ef4e"),
  U("photo-1578662996442-48f60103fc96"),
  U("photo-1605745341112-85968b19335b"),
  U("photo-1544551763-46a013bb70d5"),
  U("photo-1553413077-190dd305871c"),
] as const;

const OFFICE_UNSPLASH = [
  U("photo-1497366216548-37526070297c"),
  U("photo-1524758631624-e2822e304c36"),
  U("photo-1504384308090-c894fdcc538d"),
  U("photo-1600585154340-be6161a56a0c"),
  U("photo-1600607687939-ce8a6c25118c"),
] as const;

/** ISO-style shipping & storage units (no horse trailer, no enclosed car hauler webp). */
const NANO_ISO_CONTAINERS = [
  N("d21f65a80990-1.jpg"),
  N("26d45d77f69e-1.jpg"),
  N("78d9c8641a24-3.jpg"),
  N("08ae34a6abd6-1-600x400.jpg"),
  N("59fad7ae339a-1.jpg"),
  N("d381df082099-1-600x450.jpg"),
  N("e7277e12128f-1-300x200.jpg"),
  N("66ab5488b199-2-300x200.jpg"),
  N("5337ce35e8f2-1-600x410.png"),
  N("e972fded7b40-1-600x400.jpg"),
  N("8560a1b43fe2-1.jpg"),
  N("7353f56cf2c2-1-600x400.jpg"),
  N("c705819f426e-1.jpg"),
  N("490b6f77359b-1.jpg"),
  N("7cce7505ae99-1.jpg"),
  N("e22af340440e-1-600x450.jpg"),
] as const;

const NANO_TRAILERS = [
  N("09fc1652db89-1.webp"),
  N("ebf510cdf6aa-1-600x450.webp"),
  N("2b40dde6582d-2-600x450.jpg"),
] as const;

const NANO_CABINS = [
  N("cc3aa8c5db37-1.jpg"),
  N("05fa5b28faba-1-600x400.jpg"),
  N("a17761ac0f0a-1-600x400.jpg"),
  N("392aad75a733-1-600x400.jpg"),
  N("e1f5128e284d-1-600x400.jpg"),
  N("54119b0f26c1-1-600x400.jpg"),
  N("c956a18d9315-1-600x400.jpg"),
  N("ebcdb32bf8a0-7.jpg"),
  N("81e57f0999c7-1-600x400.jpg"),
  N("29174d6ee9f1-1-600x400.jpg"),
  N("9b89a0d44fe2-1-600x400.jpeg"),
  N("49b6931f1bde-1-600x400.jpeg"),
  N("d5bad9729959-1-600x450.jpg"),
] as const;

const NANO_REEFER = [
  N("dbf48c4bfe5e-1-600x450.jpeg"),
  N("3b87281450a8-1-600x450.jpg"),
  N("66ab5488b199-2-300x200.jpg"),
] as const;

const NANO_FLAT_PACK = [
  N("59fad7ae339a-1.jpg"),
  N("d5bad9729959-1-600x450.jpg"),
  N("7353f56cf2c2-1-600x400.jpg"),
  N("c956a18d9315-1-600x400.jpg"),
  N("ebcdb32bf8a0-7.jpg"),
] as const;

/** Home page hero: strong container product shot. */
export const SITE_HERO_IMAGE = N("d21f65a80990-1.jpg");

/** About / story imagery: site yard + warehouse mood. */
export const SITE_ABOUT_IMAGE = N("59fad7ae339a-1.jpg");

const CONTAINER_IMAGES = [...NANO_ISO_CONTAINERS, ...INDUSTRIAL_UNSPLASH] as const;

const REEFER_IMAGES = [
  ...NANO_REEFER,
  ...INDUSTRIAL_UNSPLASH.slice(6, 10),
  ...NANO_ISO_CONTAINERS.slice(0, 6),
] as const;

const FLAT_PACK_IMAGES = [
  ...NANO_FLAT_PACK,
  ...INDUSTRIAL_UNSPLASH.slice(1, 7),
  ...NANO_ISO_CONTAINERS.slice(4, 12),
] as const;

/** Pool conversions: real container exteriors + water / site aerials (no random lifestyle). */
const POOL_CONVERSION_IMAGES = [
  ...NANO_ISO_CONTAINERS,
  U("photo-1544551763-46a013bb70d5"),
  U("photo-1544620347-c4fd4a3d5957"),
  U("photo-1541888946425-d81bb19240f5"),
  U("photo-1601584115197-04ecc0da31d7"),
  ...INDUSTRIAL_UNSPLASH.slice(0, 5),
] as const;

const OFFICE_HOME_IMAGES = [
  N("d5bad9729959-1-600x450.jpg"),
  N("54119b0f26c1-1-600x400.jpg"),
  N("392aad75a733-1-600x400.jpg"),
  N("8560a1b43fe2-1.jpg"),
  ...OFFICE_UNSPLASH,
  ...INDUSTRIAL_UNSPLASH.slice(0, 4),
] as const;

const CABIN_IMAGES = [
  ...NANO_CABINS,
  ...INDUSTRIAL_UNSPLASH,
  ...NANO_ISO_CONTAINERS.slice(0, 5),
] as const;

const ENCLOSED_TRAILER_IMAGES = [
  ...NANO_TRAILERS,
  U("photo-1601584115197-04ecc0da31d7"),
  U("photo-1544620347-c4fd4a3d5957"),
  U("photo-1586528116311-ad8dd3c8310d"),
  ...INDUSTRIAL_UNSPLASH.slice(0, 8),
] as const;

const CHASSIS_IMAGES = [
  ...NANO_TRAILERS,
  ...NANO_ISO_CONTAINERS,
  U("photo-1601584115197-04ecc0da31d7"),
  U("photo-1544620347-c4fd4a3d5957"),
  U("photo-1486406146926-c627a92ad1ab"),
] as const;

const HORSE_TRAILER_IMAGES = [
  N("e52dac18e1c6-2-300x200.jpg"),
  N("2b40dde6582d-2-600x450.jpg"),
  U("photo-1516467508483-a7212febe31a"),
  U("photo-1601584115197-04ecc0da31d7"),
  U("photo-1544620347-c4fd4a3d5957"),
  ...NANO_TRAILERS,
] as const;

const ACCESSORY_IMAGES = [
  N("59fad7ae339a-1.jpg"),
  N("7353f56cf2c2-1-600x400.jpg"),
  N("c705819f426e-1.jpg"),
  U("photo-1586528116311-ad8dd3c8310d"),
  U("photo-1541888946425-d81bb19240f5"),
  U("photo-1503387762-592deb58ef4e"),
  ...INDUSTRIAL_UNSPLASH,
] as const;

function hashKey(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = Math.imul(31, h) + s.charCodeAt(i);
  return Math.abs(h);
}

function pick(pool: readonly string[], key: string): string {
  if (pool.length === 0) return CONTAINER_IMAGES[0];
  return pool[hashKey(key) % pool.length]!;
}

type ProductLike = { id: string; category: string; slug: string };

export function resolveProductImage(p: ProductLike): string {
  const key = `${p.category}:${p.slug}:${p.id}`;
  const c = p.category;

  if (c === "refrigerated-containers") return pick([...REEFER_IMAGES], key);
  if (c === "flat-pack-containers") return pick([...FLAT_PACK_IMAGES], key);
  if (c === "swimming-pool-containers") return pick([...POOL_CONVERSION_IMAGES], key);
  if (c === "container-home-office") return pick([...OFFICE_HOME_IMAGES], key);

  if (
    c === "cabins-for-sale" ||
    c === "steel-cabins" ||
    c === "modular-cabins" ||
    c === "portable-offices" ||
    c === "guard-shacks" ||
    c === "toilet-shower-blocks"
  ) {
    return pick([...CABIN_IMAGES], key);
  }

  if (c === "enclosed-trailers") return pick([...ENCLOSED_TRAILER_IMAGES], key);
  if (c === "container-chassis-and-trailers") return pick([...CHASSIS_IMAGES], key);
  if (c === "two-horse-trailers" || c === "three-horse-trailers" || c === "four-horse-trailers") {
    return pick([...HORSE_TRAILER_IMAGES], key);
  }

  if (c === "accessories" || c === "container-accessories") return pick([...ACCESSORY_IMAGES], key);

  return pick([...CONTAINER_IMAGES], key);
}
