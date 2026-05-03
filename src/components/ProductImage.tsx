import * as React from "react";
import { FALLBACK_PRODUCT_IMAGE } from "@/data/fallbackProductImage";

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

export function ProductImage({ src, alt, className, loading = "lazy" }: ProductImageProps) {
  const [current, setCurrent] = React.useState(src);

  React.useEffect(() => {
    setCurrent(src);
  }, [src]);

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      loading={loading}
      onError={() => {
        if (current !== FALLBACK_PRODUCT_IMAGE) setCurrent(FALLBACK_PRODUCT_IMAGE);
      }}
    />
  );
}
