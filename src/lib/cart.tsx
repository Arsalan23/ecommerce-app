import * as React from "react";
import { PRODUCTS, type Product } from "@/data/products";

type CartItem = { id: string; qty: number };
type CartCtx = {
  items: CartItem[];
  count: number;
  total: number;
  detailed: { product: Product; qty: number }[];
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const Ctx = React.createContext<CartCtx | null>(null);
const KEY = "nano-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);

  React.useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(KEY) : null;
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  React.useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (id: string, qty = 1) =>
    setItems((prev) => {
      const i = prev.findIndex((x) => x.id === id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + qty };
        return next;
      }
      return [...prev, { id, qty }];
    });

  const remove = (id: string) => setItems((p) => p.filter((x) => x.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => p.map((x) => (x.id === id ? { ...x, qty: Math.max(1, qty) } : x)));
  const clear = () => setItems([]);

  const detailed = items
    .map((x) => {
      const product = PRODUCTS.find((p) => p.id === x.id);
      return product ? { product, qty: x.qty } : null;
    })
    .filter(Boolean) as { product: Product; qty: number }[];

  const count = items.reduce((s, x) => s + x.qty, 0);
  const total = detailed.reduce((s, x) => s + x.product.price * x.qty, 0);

  return <Ctx.Provider value={{ items, count, total, detailed, add, remove, setQty, clear }}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = React.useContext(Ctx);
  if (!c) throw new Error("useCart must be inside CartProvider");
  return c;
}
