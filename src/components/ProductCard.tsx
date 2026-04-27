import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";
import { type Product, formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return (
    <div className="group bg-white rounded-lg border border-border overflow-hidden hover:shadow-xl hover:border-orange/30 transition-all flex flex-col">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="relative block aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${product.badge === "Sale" ? "bg-destructive text-white" : "bg-orange text-white"}`}>
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-4 flex flex-col flex-1">
        <Link
          to="/shop"
          search={{ category: product.category }}
          className="text-[11px] font-semibold uppercase tracking-widest text-orange hover:underline"
        >
          {product.categoryLabel}
        </Link>
        <Link to="/product/$slug" params={{ slug: product.slug }} className="mt-1.5 font-bold text-navy leading-snug line-clamp-2 hover:text-orange">
          {product.name}
        </Link>
        <div className="mt-3 flex items-baseline gap-2">
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>
          )}
          <span className="text-lg font-extrabold text-navy">{formatPrice(product.price)}</span>
        </div>
        <button
          onClick={() => add(product.id)}
          className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-md bg-navy text-navy-foreground font-bold uppercase text-xs tracking-wider py-2.5 hover:bg-orange transition-colors"
        >
          <ShoppingCart className="h-4 w-4" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
