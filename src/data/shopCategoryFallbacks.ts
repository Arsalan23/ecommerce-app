/**
 * Header/nav uses some ?category= slugs that have no rows in PRODUCTS.
 * Shop shows inventory from the mapped slug instead (demo-friendly).
 */
export const SHOP_CATEGORY_FALLBACK_SLUG: Record<string, string> = {
  "gooseneck-trailers": "enclosed-trailers",
  "equipment-trailers": "enclosed-trailers",
  "container-parts": "container-accessories",
  "container-doors": "container-accessories",
  "container-flooring": "container-accessories",
  "shelving-accessories": "container-accessories",
  "hvac-systems": "container-accessories",
  "electrical-packages": "container-accessories",
  "lock-boxes": "container-accessories",
  "ramps-steps": "container-accessories",
};
