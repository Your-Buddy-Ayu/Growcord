import { notFound } from "next/navigation";
import ProductClassic from "@/components/classic/ProductClassic";
import JsonLd from "@/components/site/JsonLd";
import { PRODUCTS, getProduct, usedBy } from "@/data/products";
import { breadcrumbLd, buildMetadata, faqLd, softwareLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/products/${p.slug}`,
    keywords: p.keywords,
    image: `/products/${p.slug}/opengraph-image`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  // Everything this product works with: what it uses plus what uses it, de-duplicated.
  const seen = new Set();
  const links = [...product.connects, ...usedBy(slug)].filter((l) => (seen.has(l.slug) ? false : seen.add(l.slug))).slice(0, 9);
  return (
    <>
      <JsonLd
        data={[
          softwareLd(product),
          faqLd(product.faqs),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${slug}` }]),
        ]}
      />
      <ProductClassic product={product} links={links} />
    </>
  );
}
