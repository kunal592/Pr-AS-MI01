import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
};

/** Image that swaps to a local asset if the remote catalogue photo fails. */
export function SmartImage({ src, fallback, alt, className = "", loading = "lazy" }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    <img
      src={current}
      alt={alt}
      loading={loading}
      decoding="async"
      onError={() => setCurrent(fallback)}
      className={className}
    />
  );
}
