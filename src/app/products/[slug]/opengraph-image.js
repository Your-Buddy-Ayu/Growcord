import { ImageResponse } from "next/og";
import OgCard from "@/components/site/OgCard";
import { PRODUCTS, getProduct } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Growcord product";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  return new ImageResponse(
    <OgCard eyebrow={`Growcord ${p?.name || ""}`} title={p?.tagline || "Growcord"} subtitle={p?.summary || ""} />,
    size
  );
}
