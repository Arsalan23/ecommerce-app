import { createFileRoute, Link, useSearch, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { Phone } from "lucide-react";
import { PRODUCTS, type Product } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { SHOP_CATEGORY_FALLBACK_SLUG } from "@/data/shopCategoryFallbacks";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { PageHero } from "@/components/PageHero";

const MIN_SHOP_RESULTS = 2;

function sortProducts(list: Product[], sortKey: string) {
  const out = [...list];
  if (sortKey === "asc") out.sort((a, b) => a.price - b.price);
  if (sortKey === "desc") out.sort((a, b) => b.price - a.price);
  if (sortKey === "name") out.sort((a, b) => a.name.localeCompare(b.name));
  return out;
}

function pickFeaturedShowcase(n: number): Product[] {
  const featured = PRODUCTS.filter((p) => p.featured);
  if (featured.length >= n) return featured.slice(0, n);
  return PRODUCTS.slice(0, n);
}

// Define search params type
interface ShopSearch {
  category?: string;
}

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Containers & Trailers | Nano Containers LLC" },
      {
        name: "description",
        content:
          "Browse 300+ shipping containers, enclosed trailers, horse trailers, modular cabins, and refrigerated containers. Ships across all 48 states.",
      },
    ],
  }),
});

// Price range filters matching live site
const PRICE_RANGES = [
  { label: "Under $3,000", min: 0, max: 3000 },
  { label: "$3,000 – $5,000", min: 3000, max: 5000 },
  { label: "$5,000 – $7,000", min: 5000, max: 7000 },
  { label: "Over $7,000", min: 7000, max: 999999 },
];

function ShopPage() {
  const search = useSearch({ from: "/shop" });
  const navigate = useNavigate({ from: "/shop" });
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    search.category || null,
  );
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<{
    min: number;
    max: number;
  } | null>(null);
  const [sort, setSort] = React.useState<string>("default");

  // Update category when URL search param changes
  React.useEffect(() => {
    setSelectedCategory(search.category || null);
  }, [search.category]);

  // Handle category selection with URL update
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      navigate({ search: { category } });
    } else {
      navigate({ search: {} });
    }
  };

  const { displayProducts, shopNotice } = React.useMemo(() => {
    const notices: string[] = [];

    let categoryPool: Product[];
    if (!selectedCategory) {
      categoryPool = [...PRODUCTS];
    } else {
      const direct = PRODUCTS.filter((p) => p.category === selectedCategory);
      if (direct.length) {
        categoryPool = direct;
      } else {
        const alt = SHOP_CATEGORY_FALLBACK_SLUG[selectedCategory];
        if (alt) {
          categoryPool = PRODUCTS.filter((p) => p.category === alt);
          const altName = CATEGORIES.find((c) => c.slug === alt)?.name ?? alt;
          notices.push(
            `No exact matches for this category — showing similar inventory (${altName}).`,
          );
        } else {
          categoryPool = pickFeaturedShowcase(Math.min(8, PRODUCTS.length));
          notices.push("No listings for this filter — showing featured inventory.");
        }
      }
    }

    let result = [...categoryPool];
    if (selectedPriceRange) {
      const inBand = result.filter(
        (p) => p.price >= selectedPriceRange.min && p.price < selectedPriceRange.max,
      );
      if (inBand.length) {
        result = inBand;
      } else if (result.length) {
        result = result.slice(0, MIN_SHOP_RESULTS);
        notices.push("Nothing in this price range — showing sample units from this selection.");
      }
    }

    if (result.length === 0) {
      result = pickFeaturedShowcase(MIN_SHOP_RESULTS);
      notices.push("Showing featured units from inventory.");
    }

    return {
      displayProducts: sortProducts(result, sort),
      shopNotice: notices.length ? notices.join(" ") : null,
    };
  }, [selectedCategory, selectedPriceRange, sort]);

  // Get product count for a category
  const getCategoryCount = (slug: string) => PRODUCTS.filter((p) => p.category === slug).length;

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedPriceRange(null);
    setSort("default");
    navigate({ search: {} });
  };

  // Check if any filters are active
  const hasFilters = selectedCategory || selectedPriceRange;

  return (
    <>
      <PageHero
        eyebrow={
          selectedCategory
            ? CATEGORIES.find((c) => c.slug === selectedCategory)?.name ||
              selectedCategory.replace(/-/g, " ")
            : "Shop All Containers"
        }
        title={
          selectedCategory
            ? CATEGORIES.find((c) => c.slug === selectedCategory)?.name ||
              selectedCategory.replace(/-/g, " ")
            : "Shop All Products"
        }
        subtitle={`Showing ${displayProducts.length} of ${PRODUCTS.length} results`}
      />

      <section className="py-12 container-px mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0 space-y-8">
            {/* Container Types Filter */}
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-navy text-lg mb-4">Container Types</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect(null)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center justify-between ${
                      selectedCategory === null
                        ? "bg-navy text-white"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <span>All Containers</span>
                  </button>
                </li>
                {CATEGORIES.map((cat) => {
                  const count = getCategoryCount(cat.slug);
                  if (count === 0) return null;
                  return (
                    <li key={cat.slug}>
                      <button
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors flex items-center gap-3 justify-between ${
                          selectedCategory === cat.slug
                            ? "bg-navy text-white"
                            : "hover:bg-muted text-foreground"
                        }`}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          <ProductImage
                            src={cat.image}
                            alt=""
                            className="h-10 w-10 rounded-md object-cover shrink-0 border border-border/80"
                          />
                          <span className="truncate">{cat.name}</span>
                        </span>
                        <span
                          className={`text-xs shrink-0 ${selectedCategory === cat.slug ? "text-white/70" : "text-muted-foreground"}`}
                        >
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="bg-white rounded-lg border border-border p-5">
              <h3 className="font-bold text-navy text-lg mb-4">Price Range</h3>
              <ul className="space-y-2">
                {PRICE_RANGES.map((range) => {
                  const count = PRODUCTS.filter(
                    (p) => p.price >= range.min && p.price < range.max,
                  ).length;
                  const isActive =
                    selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max;
                  return (
                    <li key={range.label}>
                      <button
                        onClick={() =>
                          setSelectedPriceRange(
                            isActive ? null : { min: range.min, max: range.max },
                          )
                        }
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          isActive ? "bg-navy text-white" : "hover:bg-muted text-foreground"
                        }`}
                      >
                        {range.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Need Help Section */}
            <div className="bg-navy rounded-lg p-5 text-white">
              <h3 className="font-bold text-lg mb-2">Need Help Choosing?</h3>
              <p className="text-sm text-white/80 mb-4">
                Our container experts are ready to help you find the right unit.
              </p>
              <a
                href="tel:+14352299359"
                className="inline-flex items-center gap-2 text-orange hover:text-white transition-colors font-semibold"
              >
                <Phone className="h-4 w-4" />
                +1 (435) 229-9359
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Filters Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  Showing {displayProducts.length} of {PRODUCTS.length} results
                </span>
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-orange hover:underline font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border rounded-md px-3 py-2 text-sm font-medium bg-white w-full sm:w-auto"
              >
                <option value="default">Default sorting</option>
                <option value="name">Sort by name</option>
                <option value="asc">Price: low to high</option>
                <option value="desc">Price: high to low</option>
              </select>
            </div>

            {/* Active Filters Display */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/10 text-navy text-sm rounded-full">
                    {CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                    <button
                      onClick={() => handleCategorySelect(null)}
                      className="hover:text-orange"
                    >
                      ×
                    </button>
                  </span>
                )}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy/10 text-navy text-sm rounded-full">
                    {PRICE_RANGES.find((r) => r.min === selectedPriceRange.min)?.label}
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className="hover:text-orange"
                    >
                      ×
                    </button>
                  </span>
                )}
              </div>
            )}

            {shopNotice && (
              <div className="mb-6 rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-navy">
                {shopNotice}
              </div>
            )}

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {displayProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
