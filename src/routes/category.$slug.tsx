import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/category/$slug")({
  component: CategoryPage,
  loader: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.slug);
    if (!category) throw notFound();
    return { category };
  },
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold text-navy">Category not found</h1>
      <Link to="/shop" className="btn-orange mt-6">
        Back to Shop
      </Link>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.category.name} — Nano Containers LLC` },
      { name: "description", content: loaderData?.category.blurb ?? "" },
    ],
  }),
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const products = PRODUCTS.filter((p) => p.category === category.slug);
  return (
    <>
      <PageHero eyebrow="Category" title={category.name} subtitle={category.blurb} />
      <div className="container-px mx-auto max-w-7xl -mt-4 mb-2">
        <div className="relative aspect-[21/9] max-h-72 w-full overflow-hidden rounded-xl border bg-muted">
          <ProductImage
            src={category.image}
            alt={category.name}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        </div>
      </div>
      <section className="py-12 container-px mx-auto max-w-7xl">
        {products.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No products in this category yet. Check back soon or{" "}
            <Link to="/contact" className="text-orange font-semibold underline">
              request a quote
            </Link>
            .
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
