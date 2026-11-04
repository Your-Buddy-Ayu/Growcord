/**
 * The Growcord suite as the website presents it.
 *
 * Source of truth for WHAT exists is the platform's product registry
 * (backend/src/config/productRegistry.ts) and the suite docs (docs/saas/*.md). This file is the
 * public, customer-language view of the same products: nothing here claims a feature the platform
 * does not have  planned work goes in `roadmap`, and beta products are marked `status: "beta"`.
 *
 * Shape of a product (every page section reads one of these keys):
 *   slug, name, group, icon, status, host, appUrl, tagline, summary
 *   metaTitle, metaDescription, keywords[]            → <head>
 *   hero {eyebrow,title,highlight,lede} + visual       → hero
 *   facts[4] {value,label}                             → facts band
 *   audience {persona, needs[]}                        → who it is for
 *   before[] / after[]                                 → before and after
 *   features[] {icon,title,text}                       → feature grid
 *   spotlights[2] {eyebrow,title,highlight,text,points[],visual}
 *   steps[4] {title,text}                              → how it works
 *   connects[] {slug,for}                              → connected products map
 *   compare {them, rows[[label, us, them]]}            → comparison
 *   principles[4] {icon,title,text}                    → what we never do
 *   roadmap[]?                                         → what's next
 *   pricing {title,text,cta}                           → pricing snippet
 *   faqs[] {q,a}                                       → FAQ + FAQPage JSON-LD
 */
import { commerce, retail, trade } from "./sell";
import { ship, wms, make } from "./operate";
import { books, finance } from "./money";
import { crm, comms, whatsapp, reach, social, links } from "./growth";
import { insights, seoInsights } from "./insight";
import { people, growcordId } from "./team";
import { domains } from "./domains";

export const PRODUCT_GROUPS = [
  { key: "sell", name: "Sell", blurb: "Online, at the counter and wholesale", icon: "bag" },
  { key: "operate", name: "Operate", blurb: "Ship, store and make", icon: "truck" },
  { key: "money", name: "Money", blurb: "Accounts, GST and cash", icon: "book" },
  { key: "growth", name: "Customers & growth", blurb: "Leads, messages and marketing", icon: "megaphone" },
  { key: "insight", name: "Know your numbers", blurb: "Analytics and search", icon: "chart" },
  { key: "team", name: "Team & access", blurb: "People, payroll and sign-in", icon: "users" },
];

export const PRODUCTS = [
  commerce, retail, trade,
  ship, wms, make,
  books, finance,
  crm, comms, whatsapp, reach, social, links, domains,
  insights, seoInsights,
  people, growcordId,
];

const BY_SLUG = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p]));

export const getProduct = (slug) => BY_SLUG[slug];

export const productsInGroup = (key) => PRODUCTS.filter((p) => p.group === key);

export const productHref = (slug) => `/products/${slug}`;

/** Products whose `connects` name this product  the reverse edge, derived never declared twice. */
export const usedBy = (slug) =>
  PRODUCTS.filter((p) => p.slug !== slug && p.connects.some((c) => c.slug === slug)).map((p) => ({
    slug: p.slug,
    for: p.connects.find((c) => c.slug === slug).for,
  }));

export const liveCount = PRODUCTS.filter((p) => p.status === "live").length;
