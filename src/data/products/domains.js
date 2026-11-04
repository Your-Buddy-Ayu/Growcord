/**
 * Domains product – search, buy and manage domain names in INR with GST invoicing.
 * The copy has been refreshed for a natural, professional voice.
 */
import {
  LuGlobe,
  LuIndianRupee,
  LuReceiptText,
  LuServerCog,
  LuShieldCheck
} from "react-icons/lu";
import Domains from "../../assets/ProductClassic/domains.jpg"

export const domains = {
  slug: "domains",
  name: "Domains",
  group: "growth",
  icon: "globe",
  image: Domains,
  status: "beta",
  host: "domains.gc.mw",
  appUrl: "https://domains.gc.mw",
  tagline: "Search, purchase and manage domains in INR, receiving a GST invoice every time.",
  summary: "Find, buy and control domains with transparent INR pricing and a GST invoice. Enjoy free WHOIS privacy where available, full DNS management, forwarding, and a single click to point a domain at your Growcord store.",
  metaTitle: "Buy a Domain Name in India  INR Pricing, GST Invoice, Free WHOIS Privacy",
  metaDescription: "Growcord Domains lets you search and register domains with clear INR prices and an automatic GST invoice. Get free WHOIS privacy where the registry permits, manage DNS, set up forwarding, and enjoy bulk search for agenciesall from one screen.",
  keywords: ["buy domain name india", "domain registration gst invoice", "cheap domain names india", "whois privacy free", "bulk domain search", "transfer domain to india registrar", "domain reseller india"],
  servicesData: [
    {
      id: 1,
      title: "Instant Domain Search & Register",
      icon: <LuGlobe />,
    },
    {
      id: 2,
      title: "Transparent INR Billing",
      icon: <LuIndianRupee />,
    },
    {
      id: 3,
      title: "Automated GST Invoicing",
      icon: <LuReceiptText />,
    },
    {
      id: 4,
      title: "One-Click DNS & Store Connect",
      icon: <LuServerCog />,
    },
    {
      id: 5,
      title: "Free WHOIS Privacy & SSL",
      icon: <LuShieldCheck />,
    },
  ],
  hero: {
    eyebrow: "Growcord Domains",
    title: "Buy and renew custom domains with",
    highlight: "zero hidden renewal surprises",
    lede: "What you see is exactly what you pay. Enjoy honest, upfront domain pricing backed by automated GST input credit, built in privacy protection against spam scrapers, and hassle free domain forwarding right from your dashboard.",
  },
  visual: "search",
  facts: [
    { value: "INR", label: "price shown includes tax at checkout" },
    { value: "GST invoice", label: "generated automatically on every order" },
    { value: "Free", label: "WHOIS privacy wherever the registry allows" },
    { value: "1 click", label: "to point a domain at your Growcord store" }
  ],
  audience: {
    persona: "Founders registering their first domain, agencies buying in bulk for clients, and anyone fed up with hidden price hikes and missing invoices.",
    needs: [
      "See the real price before committing",
      "Get a GST‑compliant invoice for accounting",
      "Protect WHOIS details without extra cost",
      "Point the domain at a Growcord store in one step",
      "Transfer existing domains so they renew from one place"
    ]
  },
  before: [
    "Price changes between search and checkout",
    "No GST invoice, or one that arrives days later",
    "WHOIS privacy sold as a paid add‑on",
    "DNS and forwarding hidden in another product"
  ],
  after: [
    "What you see is what you pay, GST included",
    "A GST invoice appears the moment you pay",
    "Privacy is on by default where supported",
    "Search, DNS, forwarding and store connection live in one place"
  ],
  features: [
    { icon: "search", title: "Real‑price search", text: "Availability and INR pricing together, with bulk search for checking many names at once." },
    { icon: "fileCheck", title: "GST invoice on every order", text: "Tax is calculated based on place of supply and an invoice is raised instantly when the order is paid." },
    { icon: "shield", title: "Free WHOIS privacy", text: "Registrant details are hidden from public WHOIS wherever the registry supports it, at no extra charge." },
    { icon: "globe", title: "Editable DNS", text: "A‑record ledger with presets for Google Workspace, Zoho Mail, Vercel, Shopify and more." },
    { icon: "route", title: "One‑click forwarding", text: "Point a domain at another URL with a 301, 302 or masked redirect." },
    { icon: "link", title: "Connect to your Growcord store", text: "Point nameservers or DNS at your Growcord Commerce storefront without a support ticket." },
    { icon: "branch", title: "Domain transfers", text: "Bring domains from another registrar so they renew and bill from a single place." },
    { icon: "percent", title: "Reseller pricing", text: "Tiered discounts for agencies and bulk buyers, applied automatically once approved." },
  ],
  spotlights: [
    {
      eyebrow: "One search, the real price",
      title: "No surprise",
      highlight: "at checkout",
      text: "The price on the search page is the price at checkout  registration, renewal and transfer costs are shown up front in INR, with GST added transparently rather than hidden in a later charge.",
      points: ["Bulk search for agencies buying many names at once", "Renewal price shown before you register, not after", "A GST invoice raised the moment the order is paid"],
      visual: { kind: "search" }
    },
    {
      eyebrow: "Manage, don’t migrate",
      title: "DNS, forwarding and your store,",
      highlight: "from the same screen",
      text: "Nameservers, DNS records, forwarding and privacy all live on a single page per domain. Point a domain at your Growcord storefront, or forward it to another site, without opening a second product or filing a support ticket.",
      points: ["DNS presets for Google Workspace, Zoho Mail, Vercel and Shopify", "301, 302 or masked forwarding", "Reveal the auth code to transfer out, logged for your records"],
      visual: { kind: "dns" }
    }
  ],
  steps: [
    { title: "Search a name", text: "Check availability across TLDs and see the exact INR price, tax included at checkout." },
    { title: "Register", text: "Pay by card, UPI or wallet balance; privacy is on by default where the registry permits." },
    { title: "Point it somewhere", text: "Connect it to your Growcord store, custom DNS or a forwarding target." },
    { title: "Renew without thinking", text: "Auto‑renew from your wallet, with reminders before anything lapses." }
  ],
  connects: [
    { slug: "commerce", for: "Point a domain at your Growcord storefront in one step" },
    { slug: "books", for: "Every domain order becomes a GST invoice in your books" },
    { slug: "growcord-id", for: "Sign in once to manage every domain you own" },
    { slug: "comms", for: "Renewal reminders and transfer updates by email" }
  ],
  compare: {
    them: "Typical registrar checkout",
    rows: [
      ["Price shown matches price charged", true, "Often changes at checkout"],
      ["GST invoice raised automatically", true, "Manual request, if at all"],
      ["WHOIS privacy included", true, "Paid add‑on"],
      ["DNS, forwarding and store connect in one place", true, "Separate control panel"],
      ["Reseller pricing tiers", true, "Enterprise plans only"]
    ]
  },
  principles: [
    { icon: "eye", title: "The price you see is real", text: "What the search page shows is what checkout charges  GST is added transparently, never hidden in a later renewal." },
    { icon: "shield", title: "Privacy by default", text: "WHOIS privacy is on unless the registry cannot support it for that TLD, never sold as an upsell." },
    { icon: "lock", title: "Auth codes handled carefully", text: "Revealing a transfer auth code is logged, and provider‑side transfer lock stays on by default." },
    { icon: "userCheck", title: "Renewals never surprise you", text: "Reminders before every expiry, and auto‑renew only draws from a wallet you funded." }
  ],
  roadmap: [
    "SSL certificates issued from the same screen",
    "More DNS presets as new integrations ship",
    "Domain marketplace for aftermarket names"
  ],
  pricing: {
    title: "Pay per domain, in INR",
    text: "Register, renew or transfer one domain at a time, or apply for reseller pricing if you manage many. No subscription to browse or search.",
    cta: { label: "Search a domain", href: "https://domains.gc.mw" }
  },
  faqs: [
    { q: "Is the price I see the price I pay?", a: "Yes. Prices are shown in INR on the search and pricing pages; GST is added at checkout, not hidden inside a later renewal charge." },
    { q: "Do I get a GST invoice?", a: "Yes. Every order raises a GST invoice automatically, the moment it is paid, from Growcord's own books." },
    { q: "Is WHOIS privacy free?", a: "Yes, wherever the registry allows it for that TLD  it is on by default, not an add‑on." },
    { q: "Can I point a domain at my Growcord store?", a: "Yes. From the domain's DNS or nameserver settings you can connect it to your Growcord Commerce storefront directly." },
    { q: "Can I move domains in from another registrar?", a: "Yes. Start a transfer with the domain's auth code; existing domains can also be brought in to renew from one place going forward." },
    { q: "Is there a reseller or bulk pricing option?", a: "Yes. Agencies and bulk buyers can apply for reseller tiers with automatic discounts once approved." }
  ]
};
