import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ShoppingCart, Truck, ShieldCheck, BadgeCheck, ArrowLeft } from "lucide-react";
import * as React from "react";
import { PRODUCTS, formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";

export const Route = createFileRoute("/product/$slug")({
  component: ProductPage,
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  notFoundComponent: () => (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-bold text-navy">Product not found</h1>
      <Link to="/shop" className="btn-orange mt-6">Back to Shop</Link>
    </div>
  ),
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.product.name} — Nano Containers LLC` },
      { name: "description", content: `${loaderData?.product.name} — ${formatPrice(loaderData?.product.price ?? 0)}. Free nationwide delivery.` },
      { property: "og:image", content: loaderData?.product.image ?? "" },
    ],
  }),
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { add } = useCart();
  const [qty, setQty] = React.useState(1);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <>
      <section className="bg-muted/40 border-b">
        <div className="container-px mx-auto max-w-7xl py-4 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-orange">Home</Link> / <Link to="/shop" className="hover:text-orange">Shop</Link> / <Link to="/category/$slug" params={{ slug: product.category }} className="hover:text-orange">{product.categoryLabel}</Link>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-12 grid lg:grid-cols-2 gap-12">
        <div className="bg-white border rounded-xl overflow-hidden">
          <ProductImage src={product.image} alt={product.name} className="w-full aspect-[4/3] object-cover" loading="eager" />
        </div>
        <div>
          <Link to="/category/$slug" params={{ slug: product.category }} className="text-xs font-bold uppercase tracking-widest text-orange hover:underline">{product.categoryLabel}</Link>
          <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-navy">{product.name}</h1>
          <div className="mt-5 flex items-baseline gap-3">
            {product.oldPrice && <span className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}
            <span className="text-4xl font-extrabold text-navy">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-xs font-bold uppercase bg-destructive text-white px-2 py-1 rounded">Sale</span>}
          </div>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            High-quality unit ready for fast nationwide delivery. Inspected and certified by our team. All units include a transparent delivery quote to your zip code with no hidden fees. Speak to a specialist for custom modifications, color options or financing.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="inline-flex border rounded-md">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2.5 text-navy hover:bg-muted">−</button>
              <input value={qty} onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))} className="w-14 text-center font-bold text-navy border-x" />
              <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2.5 text-navy hover:bg-muted">+</button>
            </div>
            <button onClick={() => add(product.id, qty)} className="btn-orange flex-1">
              <ShoppingCart className="h-4 w-4" /> Add to Cart
            </button>
          </div>
          <Link to="/contact" className="mt-3 btn-navy w-full">Request a Free Quote</Link>

          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { icon: Truck, t: "Free Delivery", s: "All 48 states" },
              { icon: ShieldCheck, t: "Quality Guaranteed", s: "Inspected & certified" },
              { icon: BadgeCheck, t: "Best Price Promise", s: "No hidden fees" },
            ].map(({ icon: Icon, t, s }) => (
              <div key={t} className="border rounded-lg p-4 text-center">
                <Icon className="h-5 w-5 text-orange mx-auto" />
                <div className="mt-2 text-sm font-bold text-navy">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-muted/40 py-16">
          <div className="container-px mx-auto max-w-7xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            <div className="mt-8">
              <Link to="/shop" className="inline-flex items-center gap-2 text-navy font-bold hover:text-orange"><ArrowLeft className="h-4 w-4" /> Back to all products</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
