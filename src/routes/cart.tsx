import { createFileRoute, Link } from "@tanstack/react-router";
import { Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/data/products";
import { PageHero } from "@/components/PageHero";
import { ProductImage } from "@/components/ProductImage";

export const Route = createFileRoute("/cart")({
  component: CartPage,
  head: () => ({ meta: [{ title: "Your Cart — Nano Containers LLC" }] }),
});

function CartPage() {
  const { detailed, total, setQty, remove, clear, count } = useCart();
  return (
    <>
      <PageHero
        eyebrow="Checkout"
        title="Your Cart"
        subtitle={
          count === 0 ? "Your cart is empty." : `${count} item${count > 1 ? "s" : ""} in your cart`
        }
      />
      <section className="py-12 container-px mx-auto max-w-7xl">
        {detailed.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground/40" />
            <p className="mt-4 text-muted-foreground">
              Browse our inventory to add products to your cart.
            </p>
            <Link to="/shop" className="btn-orange mt-6 inline-flex">
              Browse Inventory <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_380px] gap-10">
            <div className="space-y-4">
              {detailed.map(({ product, qty }) => (
                <div key={product.id} className="bg-white border rounded-xl p-4 flex gap-4">
                  <Link to="/product/$slug" params={{ slug: product.slug }} className="shrink-0">
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-28 object-cover rounded-md"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold uppercase tracking-widest text-orange">
                      {product.categoryLabel}
                    </div>
                    <Link
                      to="/product/$slug"
                      params={{ slug: product.slug }}
                      className="font-bold text-navy hover:text-orange line-clamp-2"
                    >
                      {product.name}
                    </Link>
                    <div className="mt-2 text-lg font-extrabold text-navy">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end gap-2">
                    <button
                      onClick={() => remove(product.id)}
                      className="text-muted-foreground hover:text-destructive"
                      aria-label="Remove"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="inline-flex border rounded-md">
                      <button
                        onClick={() => setQty(product.id, qty - 1)}
                        className="px-2 py-1 text-navy hover:bg-muted"
                      >
                        −
                      </button>
                      <span className="px-3 py-1 font-bold text-navy border-x min-w-10 text-center">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(product.id, qty + 1)}
                        className="px-2 py-1 text-navy hover:bg-muted"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-sm font-bold text-navy">
                      {formatPrice(product.price * qty)}
                    </div>
                  </div>
                </div>
              ))}
              <button
                onClick={clear}
                className="text-sm text-muted-foreground hover:text-destructive"
              >
                Clear cart
              </button>
            </div>
            <aside className="bg-white border rounded-xl p-6 h-max sticky top-32">
              <h2 className="text-xl font-extrabold text-navy">Order Summary</h2>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold text-navy">{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-bold text-success">Quoted at checkout</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-base">
                  <span className="font-bold text-navy">Estimated Total</span>
                  <span className="font-extrabold text-navy">{formatPrice(total)}</span>
                </div>
              </div>
              <Link to="/contact" className="btn-orange mt-6 w-full">
                Request Quote & Place Order <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="mt-3 text-xs text-muted-foreground">
                A specialist will confirm pricing, delivery and payment within 24 hours.
              </p>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
