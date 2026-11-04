/**
 * One place for who Growcord is: name, address, contact, canonical host, social profiles and the
 * product hosts. Every page title, footer, JSON-LD block and contact card reads from here, so the
 * business name, address and phone number can never drift between pages again (Google treats an
 * inconsistent name/address/phone as a weak, untrustworthy local entity).
 */

export const SITE = {
  name: "Growcord",
  legalName: "Idrishi (trading as Growcord)",
  url: "https://growcord.in",
  // Hosts that serve this same app and must hand their traffic to the canonical host.
  aliasHosts: ["growcord.com", "www.growcord.com", "www.growcord.in"],
  tagline: "The connected business suite for India  and the team that grows it.",
  description:
    "Growcord is one connected business suite for Indian companies  e-commerce, GST accounting, shipping, warehouse, POS, WhatsApp, CRM, HR and analytics on one sign-in  plus a growth team for SEO, ads, social and websites.",
  email: "contact@growcord.com",
  phone: "+91 7827831337",
  phoneE164: "+917827831337",
  whatsapp: "https://wa.me/917827831337",
  gstin: "07AESPW3016N1ZS",
  address: {
    street: "D-32, Om Vihar, Uttam Nagar",
    city: "New Delhi",
    region: "Delhi",
    postalCode: "110059",
    country: "IN",
    countryName: "India",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM IST" },
    { days: "Saturday", time: "10:00 AM – 4:00 PM IST" },
    { days: "Sunday", time: "Closed" },
  ],
  social: [
    "https://www.linkedin.com/company/growcord",
    "https://www.facebook.com/growcord/",
    "https://x.com/growcord",
  ],
  // Where customers actually sign in and use the products.
  apps: {
    hub: "https://hub.gc.mw",
    id: "https://id.gc.mw",
    admin: "https://admin.gc.mw",
  },
  logo: "/logo.png",
  logoWhite: "/logo-white.png",
};

export const absoluteUrl = (path = "/") => {
  if (!path || path === "/") return SITE.url;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
};
