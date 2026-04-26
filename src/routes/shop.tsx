import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCard } from "@/components/ProductCard";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({
    meta: [
      { title: "Shop All Containers, Trailers & Cabins — Nano Containers LLC" },
      { name: "description", content: "Browse 400+ new and used shipping containers, trailers and cabins in stock. Filter by category and price." },
    ],
  }),
});

function ShopPage() {
  const [cat, setCat] = React.useState<string>("all");
  const [sort, setSort] = React.useState<string>("default");
  const filtered = React.useMemo(() => {
    let r = cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat);
    if (sort === "asc") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "desc") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "name") r = [...r].sort((a, b) => a.name.localeCompare(b.name));
    return r;
  }, [cat, sort]);

  return (
    <>
      <PageHero eyebrow="Inventory" title="Shop All Products" subtitle={`Showing ${filtered.length} of ${PRODUCTS.length} results`} />
      <section className="py-12 container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCat("all")} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === "all" ? "bg-navy text-white border-navy" : "bg-white text-navy border-border hover:border-orange"}`}>All ({PRODUCTS.length})</button>
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.category === c.slug).length;
              if (!n) return null;
              return (
                <button key={c.slug} onClick={() => setCat(c.slug)} className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === c.slug ? "bg-navy text-white border-navy" : "bg-white text-navy border-border hover:border-orange"}`}>
                  {c.name} ({n})
                </button>
              );
            })}
          </div>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded-md px-3 py-2 text-sm font-medium bg-white">
            <option value="default">Default sorting</option>
            <option value="name">Sort by name</option>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
          </select>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
