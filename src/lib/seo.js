import { SITE, absoluteUrl } from "./site";

/**
 * Page metadata in one shape. Every indexable page gets its OWN title, description and canonical
 * URL  until 2026-09-14 almost every page shipped the layout's single title and description, so
 * Google saw twenty pages claiming to be the same page.
 */
export function buildMetadata({ title, description, path = "/", keywords = [], image, noindex = false, type = "website" }) {
  const url = absoluteUrl(path);
  const ogImage = image || "/opengraph-image";
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      locale: "en_IN",
      title: title ? `${title}` : SITE.name,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title || SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@growcord",
      title,
      description,
      images: [ogImage],
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true, "max-image-preview": "large" },
  };
}

// ── JSON-LD builders ─────────────────────────────────────────────────────────

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: absoluteUrl(SITE.logo),
  email: SITE.email,
  telephone: SITE.phoneE164,
  taxID: SITE.gstin,
  sameAs: SITE.social,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      email: SITE.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-IN",
});

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const softwareLd = (product) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: `Growcord ${product.name}`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS (browser)",
  url: absoluteUrl(`/products/${product.slug}`),
  description: product.metaDescription,
  publisher: { "@id": `${SITE.url}/#organization` },
  featureList: product.features.map((f) => f.title),
  offers: product.offer
    ? { "@type": "Offer", priceCurrency: "INR", price: product.offer.price, description: product.offer.description }
    : undefined,
});

export const serviceLd = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  serviceType: service.name,
  description: service.metaDescription,
  url: absoluteUrl(`/${service.slug}`),
  areaServed: { "@type": "Country", name: "India" },
  provider: { "@id": `${SITE.url}/#organization` },
});
