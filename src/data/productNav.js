/**
 * Light product list for client components (navbar, footer, product cards)  the full copy in
 * data/products stays on the server. Mirrors data/products/*.js; update both when a product is
 * added or renamed.
 */
export const PRODUCT_GROUPS = [
  { key: "sell", name: "Sell", blurb: "Online, at the counter and wholesale", icon: "bag" },
  { key: "operate", name: "Operate", blurb: "Ship, store and make", icon: "truck" },
  { key: "money", name: "Money", blurb: "Accounts, GST and cash", icon: "book" },
  { key: "growth", name: "Customers & growth", blurb: "Leads, messages and marketing", icon: "megaphone" },
  { key: "insight", name: "Know your numbers", blurb: "Analytics and search", icon: "chart" },
  { key: "team", name: "Team & access", blurb: "People, payroll and sign-in", icon: "users" },
];

export const PRODUCT_NAV = [
  {
    "slug": "commerce",
    "name": "Commerce",
    "group": "sell",
    "icon": "bag",
    "status": "live",
    "host": "admin.gc.mw",
    "short": "Online store, catalogue and orders",
    "summary": "A fast, search-ready online store with GST checkout, verified COD, B2B price lists and bulk ordering."
  },
  {
    "slug": "retail",
    "name": "Retail",
    "group": "sell",
    "icon": "receipt",
    "status": "live",
    "host": "retail.gc.mw",
    "short": "Counter-speed POS for pharmacies, kiranas and stores",
    "summary": "Scan-to-bill POS with split payments, batch and expiry safety, drawer sessions and Z-reports."
  },
  {
    "slug": "trade",
    "name": "Trade",
    "group": "sell",
    "icon": "handshake",
    "status": "live",
    "host": "trade.gc.mw",
    "short": "Wholesale and distribution: price lists, credit and partner orders",
    "summary": "Approve business buyers, give them contract prices and credit terms, and take orders in bulk."
  },
  {
    "slug": "ship",
    "name": "Ship",
    "group": "operate",
    "icon": "truck",
    "status": "live",
    "host": "ship.gc.mw",
    "short": "Every courier, one wallet, tracking that updates itself",
    "summary": "Book Shiprocket and Delhivery from one screen, print labels, schedule pickups and track every parcel."
  },
  {
    "slug": "wms",
    "name": "WMS",
    "group": "operate",
    "icon": "warehouse",
    "status": "live",
    "host": "wms.gc.mw",
    "short": "Warehouse discipline that matches the shelf",
    "summary": "Bins with real capacity, FEFO picking by batch, a packing bench, returns dock and cycle counts."
  },
  {
    "slug": "make",
    "name": "Make",
    "group": "operate",
    "icon": "factory",
    "status": "live",
    "host": "make.gc.mw",
    "short": "Manufacturing and purchasing, costed truthfully",
    "summary": "Bills of materials, work orders, batches with expiry, purchase orders to vendor bills, and real batch costs."
  },
  {
    "slug": "books",
    "name": "Books",
    "group": "money",
    "icon": "book",
    "status": "live",
    "host": "books.gc.mw",
    "short": "GST accounting that posts itself",
    "summary": "GST invoices for goods and services, credit notes, GSTR-1 drafts, bank reconciliation and an immutable ledger."
  },
  {
    "slug": "finance",
    "name": "Finance",
    "group": "money",
    "icon": "wallet",
    "status": "beta",
    "host": "finance.gc.mw",
    "short": "The owner’s money",
    "summary": "Personal and business accounts, PDF statement uploads, expenses and simple invoices for proprietors."
  },
  {
    "slug": "crm",
    "name": "CRM",
    "group": "growth",
    "icon": "target",
    "status": "live",
    "host": "crm.gc.mw",
    "short": "Every enquiry in one contact book",
    "summary": "One contact per person, a pipeline you can drag, follow-ups due today, and playbooks that chase for you."
  },
  {
    "slug": "comms",
    "name": "Comms",
    "group": "growth",
    "icon": "messages",
    "status": "live",
    "host": "comms.gc.mw",
    "short": "WhatsApp, SMS, email and push",
    "summary": "One messaging layer with consent, quiet hours, templates, delivery reports and pricing by purpose."
  },
  {
    "slug": "whatsapp",
    "name": "WhatsApp Platform",
    "group": "growth",
    "icon": "chat",
    "status": "live",
    "host": "wa.gc.mw",
    "short": "Official WhatsApp Business API",
    "summary": "Send approved templates, run campaigns and answer customers from a shared inbox on the official API."
  },
  {
    "slug": "reach",
    "name": "Reach",
    "group": "growth",
    "icon": "megaphone",
    "status": "live",
    "host": "reach.gc.mw",
    "short": "Marketing and ads that prove they made money",
    "summary": "Campaigns on every channel, an AI ads studio that proposes, Google connected once, and tracking you can trust."
  },
  {
    "slug": "social",
    "name": "Social",
    "group": "growth",
    "icon": "calendar",
    "status": "beta",
    "host": "social.gc.mw",
    "short": "Plan and publish across your brands’ social accounts",
    "summary": "A content calendar for several brands, with Facebook Pages and Instagram connected through Growcord."
  },
  {
    "slug": "links",
    "name": "Links & eCards",
    "group": "growth",
    "icon": "link",
    "status": "live",
    "host": "gc.mw",
    "short": "Short links, QR codes and digital visiting cards",
    "summary": "Short links and QR codes on gc.mw, digital visiting cards and a personal page at gc.mw/@you."
  },
  {
    "slug": "insights",
    "name": "Insights",
    "group": "insight",
    "icon": "chart",
    "status": "live",
    "host": "insights.gc.mw",
    "short": "Business analytics computed once, trusted everywhere",
    "summary": "Dashboards for sales, orders, inventory, accounts and marketing  computed on the server, in your timezone."
  },
  {
    "slug": "seo-insights",
    "name": "SEO Insights",
    "group": "insight",
    "icon": "search",
    "status": "beta",
    "host": "seo.gc.mw",
    "short": "Site audits, keyword tracking and backlinks",
    "summary": "Crawl your site for issues, track keyword positions and monitor backlinks, with Search Console connected through Growcord."
  },
  {
    "slug": "people",
    "name": "People",
    "group": "team",
    "icon": "users",
    "status": "live",
    "host": "people.gc.mw",
    "short": "HR and payroll without an HR department",
    "summary": "Employees, shifts, attendance, leave as a ledger, salary structures, payroll runs and payslips."
  },
  {
    "slug": "growcord-id",
    "name": "Growcord ID",
    "group": "team",
    "icon": "fingerprint",
    "status": "live",
    "host": "id.gc.mw",
    "short": "One sign-in for every Growcord product",
    "summary": "Sign in once for every product, with consent per app and purpose, encrypted personal data and a log of every read."
  },
  {
    "slug": "domains",
    "name": "Domains",
    "group": "growth",
    "icon": "globe",
    "status": "beta",
    "host": "domains.gc.mw",
    "short": "Search, buy and manage domains with INR pricing and a GST invoice",
    "summary": "Search and register domains with transparent INR pricing, a GST invoice on every order, free WHOIS privacy, DNS and forwarding, and one click to point a domain at your Growcord store."
  }
];

export const productsInGroup = (key) => PRODUCT_NAV.filter((p) => p.group === key);
export const getProductNav = (slug) => PRODUCT_NAV.find((p) => p.slug === slug);
