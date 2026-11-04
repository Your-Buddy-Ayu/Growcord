import { PRODUCTS } from "@/data/products";
import { SERVICES } from "@/data/services";
import { INDUSTRIES } from "@/data/industries";
import { GROWSHIP_CITIES, GROWSHIP_SEGMENTS, citySlug } from "@/data/growship";
import { SITE } from "@/lib/site";

// A real content date, not the build time: a sitemap whose every lastmod changes on each deploy
// teaches crawlers to ignore lastmod altogether.
const CONTENT_UPDATED = new Date("2026-09-14T00:00:00+05:30");
const LEGAL_UPDATED = new Date("2026-02-17T00:00:00+05:30");

const entry = (path, priority, changeFrequency = "monthly", lastModified = CONTENT_UPDATED) => ({
  url: path === "/" ? SITE.url : `${SITE.url}${path}`,
  lastModified,
  changeFrequency,
  priority,
});

export default function sitemap() {
  return [
    entry("/", 1.0, "weekly"),
    entry("/products", 0.95, "weekly"),
    entry("/growship", 0.9, "weekly"),
    entry("/growship/pricing", 0.85, "monthly"),
    entry("/growship/kyc", 0.7, "monthly"),
    entry("/growship/compare/shiprocket", 0.8, "monthly"),
    entry("/growship/compare/delhivery-one", 0.8, "monthly"),
    entry("/growship/compare/courier-dashboards", 0.8, "monthly"),
    ...GROWSHIP_SEGMENTS.flatMap((segment) => GROWSHIP_CITIES.map(([city]) =>
      entry(`/growship/solutions/${segment.slug}/${citySlug(city)}`, 0.55, "monthly")
    )),
    entry("/pricing", 0.9, "weekly"),
    ...PRODUCTS.map((p) => entry(`/products/${p.slug}`, p.status === "live" ? 0.9 : 0.7)),
    entry("/services", 0.85),
    ...SERVICES.map((s) => entry(`/${s.slug}`, 0.85)),
    entry("/industries", 0.8),
    ...INDUSTRIES.map((i) => entry(`/${i.slug}`, 0.8)),
    entry("/ecommerce-solution", 0.8),
    entry("/real-estate", 0.75),
    entry("/ecom-starter", 0.6),
    entry("/calculator/step1", 0.7),
    entry("/about-us", 0.6),
    entry("/contact-us", 0.6),
    entry("/privacy-policy", 0.3, "yearly", LEGAL_UPDATED),
    entry("/terms-and-conditions", 0.3, "yearly", LEGAL_UPDATED),
    entry("/cancellation-refund-policy", 0.3, "yearly", LEGAL_UPDATED),
    entry("/shipping-delivery-policy", 0.3, "yearly", LEGAL_UPDATED),
  ];
}
