/** Sell: Commerce, Retail, Trade. See ./index.js for the shape every product follows. */
import { FaArrowRotateLeft, FaAward, FaBagShopping, FaCashRegister, FaCommentDollar, FaCreditCard, FaGear, FaStamp, FaStoreSlash, FaTrainSubway, FaTruckFast, FaTruckRampBox } from "react-icons/fa6";
import { FaBoxes, FaSync } from "react-icons/fa";
import Commerce from "../../assets/ProductClassic/commerce.jpg"
import Retail from "../../assets/ProductClassic/retail.jpg"
import Trade from "../../assets/ProductClassic/trade.jpg"
import { MdBolt } from "react-icons/md";
import { LiaNetworkWiredSolid } from "react-icons/lia";

export const commerce = {
  slug: "commerce",
  name: "Commerce",
  group: "sell",
  icon: "bag",
  image: Commerce,
  status: "live",
  host: "admin.gc.mw",
  appUrl: "https://admin.gc.mw",
  tagline: "Your storefront, catalogue, and order engine in one system no patchwork required.",
  summary:
    "Launch a fast, search-ready online store on your own domain with built-in GST checkout, OTP-verified COD, tiered B2B pricing, and wholesale bulk ordering.",
  metaTitle: "E-Commerce Platform for Indian Brands GST Checkout, Verified COD & B2B | Growcord",
  metaDescription:
    "Growcord Commerce: launch a high-speed, SEO-ready online store with automated GST calculation, OTP-verified COD, Razorpay & UPI, B2B price lists, and bulk ordering. ₹9,999 one-time setup + 5% or 10% on delivered orders.",
  keywords: [
    "ecommerce platform india",
    "online store with gst",
    "d2c ecommerce website",
    "b2b ecommerce india",
    "cod verification india",
    "shopify alternative india",
  ],
  servicesData: [
    {
      id: 1,
      title: "Multi-Channel Sync",
      icon: <FaSync />,
    },
    {
      id: 2,
      title: "Inventory Management",
      icon: <FaBoxes />,
    },
    {
      id: 3,
      title: "1-Click Checkout",
      icon: <MdBolt />,
    },
    {
      id: 4,
      title: "Order Automation",
      icon: <FaGear />,
    },
    {
      id: 5,
      title: "Returns & NDR Flow",
      icon: <FaArrowRotateLeft />,
    },
  ],
  hero: {
    eyebrow: "Growcord Commerce",
    title: "All in One E-Commerce Engine Built to",
    highlight: "Scale Your Online Sales.",
    lede: "Build, manage, and scale your online store without the operational chaos. From automated GST invoicing and realtime inventory sync to built-in RTO fraud protection take full control of your orders, shipments, and WhatsApp updates on a single unified dashboard.",
  },
  visual: "storefront",
  facts: [
    { value: "44,000+", label: "Active SKUs live on a single storefront" },
    { value: "50,000+", label: "Indexable product URLs per catalogue" },
    { value: "2-Step", label: "Fast, OTP-first checkout flow" },
    { value: "₹0", label: "Monthly platform rentpay only on delivery" },
  ],
  audience: {
    persona:
      "Built for D2C founders, specialty retailers, and wholesale brands tired of holding together fragile themes, clashing plugins, messy spreadsheets, and disconnected courier portals.",
    needs: [
      "Import tens of thousands of SKUs and product variants directly from Excel without formatting errors",
      "Accept UPI, cards, netbanking, and OTP-verified COD right on your custom domain",
      "Generate courier labels and track shipments without switching browser tabs",
      "Send automated order and tracking updates on WhatsApp without complex API setups",
      "Export a clean, gap-free GST sales register for your accountant every month",
    ],
  },
  before: [
    "Dealing with plugin crashes during flash sales because separate apps handle GST, reviews, and COD",
    "Burning marketing budgets on high RTO rates caused by fake addresses and bogus COD orders",
    "Spending hours fixing broken invoice sequences and missing tax numbers before monthly GST filing",
    "Wasting staff hours manually decoding WhatsApp voice notes and rough photos into wholesale orders",
  ],
  after: [
    "Running payments, tax, fulfillment, and customer updates on one zero-conflict core engine",
    "Filtering out high-risk buyers with automated OTP verification and address intelligence before dispatch",
    "Generating strict, CA-ready consecutive GST invoice series that never skip a single number",
    "Letting wholesale partners place bulk orders directly through a private, contract-priced B2B portal",
  ],
  features: [

    {
      icon: "layers",
      title: "Dedicated URLs for every variant",
      text: "Assign every size, weight, potency, or colour its own SKU, inventory count, price, and photo gallerycomplete with a clean URL that Google can index and rank individually.",
    },
    {
      icon: "rupee",
      title: "Automated GST checkout",
      text: "Map your SKUs to their respective HSN codes and tax slabs once. At checkout, the system automatically splits CGST and SGST or applies IGST based on the shipping address, including tax on freight and COD fees.",
    },
    {
      icon: "shield",
      title: "OTP-verified Cash on Delivery",
      text: "Require COD shoppers to confirm their phone number via SMS or WhatsApp OTP before the order goes through. You filter out bots, fake addresses, and casual impulse clicks before spending a rupee on packaging.",
    },
    {
      icon: "card",
      title: "Razorpay, UPI, and instant pay-links",
      text: "Offer smooth prepaid checkouts and send secure payment links for phone orders. Built-in webhook reconciliation captures payments even if a customer closes their browser tab early, eliminating manual follow-ups.",
    },
    {
      icon: "grid",
      title: "Spreadsheet-style bulk ordering",
      text: "Give wholesale buyers a fast, tabular ordering screen. They can upload thousands of SKUs via Excel, check live stock levels, and download a GST proforma invoice in seconds.",
    },
    {
      icon: "refresh",
      title: "Automated cart recovery",
      text: "Follow up on abandoned checkouts automatically via WhatsApp, SMS, and email. Send single-use discount codes and one-click cart recovery links that bring shoppers back to finish their purchase.",
    },
    {
      icon: "star",
      title: "Verified reviews, Q&As, and wishlists",
      text: "Gather photo and video reviews backed by verified-buyer badges, host moderated product Q&As, and let customers save wishlistsall formatted for Google rich snippets right out of the box.",
    },
    {
      icon: "penTool",
      title: "Visual page builder with AI staging",
      text: "Build custom landing pages in minutes using drag-and-drop blocks. Use the built-in AI tools to draft product descriptions and visuals into a staging queue, where you review and approve everything before it goes live.",
    },
  ],
  spotlights: [
    {
      eyebrow: "Zero-Gap Checkout Architecture",
      title: "Orders are recorded only after",
      highlight: "buyer intent is verified",
      text: "Standard e-commerce platforms assign an order number the moment a customer clicks 'Pay', cluttering your ledger with failed payment attempts. Growcord separates checkout attempts from confirmed sales. The system issues a sequential order number only after Razorpay confirms the payment or the shopper completes their COD OTP check.",
      points: [
        "Blocks accidental double-taps on the pay button to prevent duplicate charges",
        "Captures delayed payment gateway webhooks automatically if a buyer closes their browser early",
        "Routes cancelled prepaid orders through a two-step refund approval workflow",
      ],
      visual: {
        kind: "timeline",
        data: {
          items: [
            {
              icon: "bag",
              title: "Shopper starts checkout",
              text: "Logged as a draft attempt without using up an official order number",
              tone: "blue",
            },
            {
              icon: "shield",
              title: "Payment or COD OTP confirmed",
              text: "Gateway webhook or OTP verifies genuine purchasing intent",
              tag: "Verified",
              tone: "green",
            },
            {
              icon: "hash",
              title: "Order #SM-9412 is generated",
              text: "Assigned a gap-free sequential number within an atomic transaction",
              tone: "purple",
            },
            {
              icon: "chat",
              title: "WhatsApp confirmation sent",
              text: "Delivered instantly via Growcord Comms with a trackable short link",
              tone: "green",
            },
          ],
        },
      },
    },
    {
      eyebrow: "Unified B2C + B2B Engine",
      title: "One master inventory,",
      highlight: "two distinct buying experiences",
      text: "Run your retail D2C storefront and your wholesale distribution channel from a single inventory pool. Everyday shoppers see your standard MRP or promotional pricing. When approved trade buyers log in, the same catalogue switches to display their negotiated contract rates, volume tiers, and quick-order forms.",
      points: [
        "Applies pricing in a clear priority order: Contract → Price List → Volume Slab → Tier → Retail",
        "Lets you approve B2B accounts and manage custom credit limits and payment terms from one dashboard",
        "Collects the buyer's GSTIN and Purchase Order number automatically at wholesale checkout",
      ],
      visual: { kind: "bulkorder" },
    },
  ],
  useCases: [
    {
      title: "High-SKU Specialty & Healthcare Stores",
      text: "Manage 40,000+ medicines, dilutions, or spare parts with complex potency and size variants, backed by a search bar that handles spelling mistakes effortlessly.",
    },
    {
      title: "Fast-Growing D2C Lifestyle Brands",
      text: "Stop fake COD returns at checkout with OTP verification, and keep customers informed via automated WhatsApp updates from dispatch to delivery.",
    },
    {
      title: "Hybrid Retail & Wholesale Manufacturers",
      text: "Sell individual units to retail shoppers and 500-unit master cartons to distributors from the exact same website and stock pool.",
    },
  ],
  steps: [
    {
      title: "Import your master catalogue",
      text: "Upload your products, variants, opening stock, HSN codes, and pricing straight from Excelor hand the spreadsheets to our onboarding team to migrate for you.",
    },
    {
      title: "Configure payments and shipping",
      text: "Enable UPI, cards, OTP-verified COD, regional shipping rates, and serviceable pin codes in a few clicks.",
    },
    {
      title: "Launch on your custom domain",
      text: "Connect your domain with automatic SSL, apply your brand colours and fonts, and submit your XML sitemaps to Google on day one.",
    },
    {
      title: "Link the rest of the Growcord suite",
      text: "Plug Ship, Books, Comms, and Insights directly into your live order feedno CSV exports or manual syncing required.",
    },
  ],
  connects: [
    { slug: "ship", for: "Compare courier rates, print thermal labels, generate manifests, and track shipments in real time" },
    { slug: "books", for: "Issue GST tax invoices, credit notes, and GSTR-1-ready ledgers automatically" },
    { slug: "comms", for: "Send automated order, payment, and delivery notifications across all channels" },
    { slug: "whatsapp", for: "Deliver high-open-rate updates through the official WhatsApp Business API" },
    { slug: "links", for: "Insert branded, trackable short links into every customer message" },
    { slug: "crm", for: "Manage customer profiles, B2B enquiries, and full support histories in one place" },
    { slug: "retail", for: "Bill walk-in store customers using POS software connected to the same live inventory" },
    { slug: "insights", for: "Track real-time revenue, conversion funnels, customer retention, and RTO rates" },
  ],
  compare: {
    them: "Typical Theme + Plugins Stack",
    rows: [
      ["Per-SKU HSN & interstate GST split (CGST/SGST/IGST)", true, "Paid Plugin"],
      ["OTP-verified COD before order creation", true, false],
      ["Built-in B2B price lists & bulk Excel ordering", true, "Separate App"],
      ["Shipping labels, GST invoices & WhatsApp in one login", true, false],
      ["Dedicated SEO URLs & sitemaps for every variant", true, "Limited"],
      ["Fixed monthly platform rent", "₹0 / month", "Monthly Plan + App Fees"],
    ],
  },
  principles: [
    {
      icon: "hash",
      title: "Unbroken invoice and order sequences",
      text: "The system assigns order numbers only when a transaction is finalized. Abandoned checkouts never waste a number, keeping your audit trail clean for your accountant.",
    },
    {
      icon: "undo",
      title: "Controlled, two-step refunds",
      text: "Cancelling a paid order queues up the exact refund amount automatically, requiring two-person financial approval before funds leave your account.",
    },
    {
      icon: "clock",
      title: "We only make money when you do",
      text: "Our commission applies strictly to orders that are delivered and pass their return window. You pay nothing on cancellations or RTO shipments.",
    },
    {
      icon: "sparkles",
      title: "AI drafts, you decide",
      text: "Our AI tools generate product descriptions and visuals in a private staging area. Nothing goes live on your store until you review and approve it.",
    },
  ],
  roadmap: [
    "Native ONDC network seller node integration",
    "Multi-warehouse inventory routing based on buyer pin code",
    "Subscription and auto-replenishment orders via UPI Autopay",
  ],
  pricing: {
    title: "₹9,999 one-time setup",
    text: "Pay 5% on delivered orders when you manage the store yourself, or 10% if our team runs day-to-day operations for you (plus applicable GST). No monthly platform rent or hidden charges.",
    cta: { label: "Explore e-commerce pricing", href: "/pricing#ecommerce" },
  },
  offer: {
    price: "9999",
    description: "One-time setup fee, followed by 5% or 10% commission strictly on delivered orders",
  },
  faqs: [
    {
      q: "Is there really no monthly subscription fee for Growcord Commerce?",
      a: "None at all. You pay a one-time setup fee of ₹9,999. From there, you pay a 5% commission on successfully delivered orders if you run the store yourself, or 10% if our team manages operations for you. You never pay commission on cancelled or returned orders.",
    },
    {
      q: "Can I migrate my existing product catalogue and variants?",
      a: "Yes. You can bulk-import products, variants, inventory counts, pricing, HSN codes, and image links directly from an Excel or CSV file. Our platform currently powers stores with over 44,000 active SKUs.",
    },
    {
      q: "How does OTP verification reduce COD returns (RTO)?",
      a: "When a customer chooses Cash on Delivery, they must enter a 6-digit OTP sent to their phone before the order is confirmed. This simple step blocks bots, fake phone numbers, and low-intent buyers before you spend money packing and shipping the parcel.",
    },
    {
      q: "Can I serve both retail consumers and B2B wholesale buyers on one website?",
      a: "Yes. Everyday visitors browse your standard retail prices, while approved B2B buyers log in to view their custom contract rates, volume discounts, and a spreadsheet-style bulk order formall pulling from the same inventory.",
    },
    {
      q: "Do I need third-party plugins for shipping labels and GST invoicing?",
      a: "No. Growcord Ship (for multi-carrier labels and tracking) and Growcord Books (for GST tax invoices and credit notes) are built into the same platform and pull directly from your live order database.",
    },
    {
      q: "Can I use my own custom domain and Razorpay merchant account?",
      a: "Yes. Your store runs on your own domain with free SSL included, and you can connect your existing Razorpay merchant account so all settlements go straight to your bank.",
    },
  ],
};

export const retail = {
  slug: "retail",
  name: "Retail",
  group: "sell",
  icon: "receipt",
  image: Retail,
  status: "live",
  host: "retail.gc.mw",
  appUrl: "https://hub.gc.mw",
  tagline: "Lightning-fast counter POS built for pharmacies, supermarkets, and specialty stores",
  summary:
    "Scan-to-bill GST POS with split cash + UPI tenders, FEFO batch and expiry enforcement, shift drawer sessions, and tamper-proof Z-reports synced live with your online store.",
  metaTitle: "POS Billing Software for Pharmacies & Retail Stores GST, Batch & Expiry | Growcord",
  metaDescription:
    "Growcord Retail is a high-speed GST POS for pharmacies and retail counters: barcode scan-to-bill, split cash & UPI tenders, batch and expiry safety, cash drawer reconciliation, immutable Z-reports, and unified stock with your online store.",
  keywords: [
    "pos billing software india",
    "pharmacy billing software",
    "gst pos software",
    "retail billing software",
    "pos with batch expiry fefo",
  ],
  servicesData: [
    {
      id: 1,
      title: "Smart POS Billing",
      icon: <FaCashRegister />,
    },
    {
      id: 2,
      title: "Omnichannel Inventory",
      icon: <FaStoreSlash />,
    },
    {
      id: 3,
      title: "In-Store Pickup (BOPIS)",
      icon: <FaBagShopping />,
    },
    {
      id: 4,
      title: "Customer Loyalty & CRM",
      icon: <FaAward />,
    },
    {
      id: 5,
      title: "Multi-Store Management",
      icon: <LiaNetworkWiredSolid />,
    },
  ],
  hero: {
    eyebrow: "Growcord Retail",
    title: "Lightning-fast billing at the counter,",
    highlight: "zero stockout surprises anywhere",
    lede: "Track store level cash registers, staff shifts, and regional stock movements from a central cockpit. Equip your cashiers with rapid barcode scanning, instant loyalty points redemption, and audit ready daily sales summaries.",
  },
  visual: "receipt",
  facts: [
    { value: "Split", label: "Cash + UPI + Card on one receipt" },
    { value: "FEFO", label: "Oldest valid batch picked first, always" },
    { value: "Z-Report", label: "Locked and untouchable at shift close" },
    { value: "1 Stock", label: "Synced live with your online store" },
  ],
  audience: {
    persona:
      "Pharmacies, wellness clinics, kirana shops, and specialty retailers who have outgrown clunky desktop software and manual calculators and need fast billing during rush hours with airtight cash control at closing.",
    needs: [
      "Scan any item and see its MRP, HSN code, and GST split fill in automatically",
      "Accept part-cash, part-UPI when a customer doesn't have exact change",
      "Stop counter staff from accidentally billing expired medicine or food batches",
      "Reconcile opening float, cash sales, and physical drawer cash at every shift change",
      "See in-store counter revenue right alongside online orders one dashboard",
    ],
  },
  before: [
    "Writing off inventory shrinkage without knowing whether items were stolen, lost, or misbilled",
    "Throwing away expired stock cartons that should have been sold weeks ago at the front of the shelf",
    "Refunding frustrated online buyers because in-store sales exhausted the last warehouse unit",
    "Suffering unrecorded discounts and fraudulent receipt edits that eat away at store profit margins",
  ],
  after: [
    "Logging every single scan, return, and shelf transfer with itemized cashier accountability",
    "Prioritizing earliest-expiry batches at the counter to maximize inventory turnover and freshness",
    "Deducting units instantly from the main database the second a barcode beep sounds at checkout",
    "Enforcing immutable transaction logs where every discount and cancellation creates an audit record",
  ],
  features: [
    {
      icon: "barcode",
      title: "Zero-typing scan-to-bill",
      text: "Scan a barcode or search by name, punch in the quantity, print. Pricing, HSN, and GST slabs pull directly from the master catalogue no manual rate entry, no pricing mistakes.",
    },
    {
      icon: "card",
      title: "Multi-mode split tenders",
      text: "A customer hands you ₹300 in cash and pays ₹450 via UPI? One receipt. Each amount hits its proper ledger so cash drawers and bank statements tie out without effort.",
    },
    {
      icon: "pill",
      title: "FEFO batch and expiry guardrails",
      text: "Purpose-built for pharmacies and FMCG. The POS picks the batch expiring soonest, flags anything close to its date, and flat-out refuses to bill expired stock.",
    },
    {
      icon: "wallet",
      title: "Shift-based cash drawer sessions",
      text: "Log the opening cash float when you start. Count denominations when you close. Every cash drop, petty expense, and payout is tracked in between nothing falls through the cracks.",
    },
    {
      icon: "fileCheck",
      title: "Immutable closing Z-reports",
      text: "Close a counter session and its Z-report locks permanently. Any cash surplus or shortage is documented right there. No next-morning arguments, no he-said-she-said.",
    },
    {
      icon: "undo",
      title: "Audit-safe manager voids",
      text: "Counter staff cannot delete or overwrite a completed bill. An authorised manager void creates a formal reversing entry stamped with who approved it, when, and why.",
    },
    {
      icon: "offline",
      title: "Offline-resilient billing queue",
      text: "Internet drops during the evening rush? Keep scanning, keep billing. Receipts queue locally and sync back exactly once the moment connectivity returns.",
    },
    {
      icon: "receipt",
      title: "Compliant GST retail invoices",
      text: "Every counter receipt prints with your store GSTIN, itemised HSN tax breakups, batch numbers, and a dedicated sequential invoice series. Inspector-ready from day one.",
    },
  ],
  spotlights: [
    {
      eyebrow: "Shift Accountability",
      title: "A cash drawer that",
      highlight: "reconciles itself at closing",
      text: "Every shift starts with a verified float and ends with a physical cash count. Split payments are separated by tender type in real time, so expected drawer cash, UPI bank credits, and card settlements match the Z-report the moment it locks. The days of next-morning cash mysteries are over.",
      points: [
        "Automatic variance calculation between expected and counted cash",
        "Every cash-in, petty expense, and tender mapped to the active session",
        "Full historical shift logs per counter and per cashier always accessible",
      ],
      visual: {
        kind: "hbars",
        data: {
          title: "Shift Z-Report · Counter 02",
          items: [
            { label: "Cash Expected", value: 18450, display: "₹ 18,450", tone: "blue" },
            { label: "Cash Counted", value: 18400, display: "₹ 18,400", tone: "amber" },
            { label: "UPIVerified", value: 26310, display: "₹ 26,310", tone: "green" },
            { label: "Card Terminal", value: 7980, display: "₹ 7,980", tone: "purple" },
          ],
        },
      },
    },
    {
      eyebrow: "Pharmacy & FMCG Grade",
      title: "The batch printed on the bill is",
      highlight: "the exact batch on your shelf",
      text: "Each inventory batch carries its own expiry date, cost, and MRP. At billing, Growcord Retail picks the oldest valid batch (FEFO), blocks expired units, and prints the batch number and expiry right on the customer's invoice. Drug inspector shows up? You're covered.",
      points: [
        "First-Expiry-First-Out (FEFO) selection happens automatically at the billing desk",
        "Batch number and expiry date printed clearly on every thermal receipt",
        "Batch-specific MRP overrides supported whenever stock rates change",
      ],
      visual: { kind: "stock", host: "retail.gc.mw · live batch stock" },
    },
  ],
  useCases: [
    {
      title: "Retail Pharmacies & Clinics",
      text: "Stay compliant with batch-printed GST bills, FEFO expiry protection, and instant substitute search even during rush hour.",
    },
    {
      title: "Omnichannel D2C Experience Stores",
      text: "Walk-in shoppers buy from the same live inventory powering your online D2C website. One stock, zero conflicts.",
    },
    {
      title: "Supermarkets & Specialty Grocers",
      text: "Clear queues fast with barcode scanning, offline resilience, and split cash + UPI checkout on a single receipt.",
    },
  ],
  steps: [
    {
      title: "Load products, batches, and stock",
      text: "Import your item master, batch numbers, expiry dates, and opening shelf quantities from Excel. One upload, done.",
    },
    {
      title: "Open a shift drawer session",
      text: "Pick your counter terminal, enter the opening cash float, and start serving walk-in customers.",
    },
    {
      title: "Scan, split tenders, and print",
      text: "Scan barcodes, accept any combination of cash, UPI, and card, then print thermal receipts or fire off WhatsApp e-bills.",
    },
    {
      title: "Count cash and lock the Z-report",
      text: "Enter your closing drawer count, seal the session Z-report, and watch the journal entries post to Growcord Books on their own.",
    },
  ],
  connects: [
    { slug: "commerce", for: "Shared product catalogue, pricing, and live omnichannel stock" },
    { slug: "books", for: "Auto-posted GST retail invoices, daybooks, and accounting journals" },
    { slug: "wms", for: "Warehouse batch inwarding, shelf replenishment, and expiry alerts" },
    { slug: "insights", for: "Counter-wise sales velocity, peak-hour metrics, and cashier reports" },
    { slug: "comms", for: "Digital WhatsApp receipts and refill reminders for repeat buyers" },
  ],
  compare: {
    them: "Legacy Desktop POS Tool",
    rows: [
      ["Split Cash + UPI + Card on a single bill", true, "Partial / Manual"],
      ["Automatic FEFO batch selection & expired stock block", true, false],
      ["Immutable shift Z-reports with cash variance tracking", true, false],
      ["Real-time stock sync with your online e-commerce store", true, false],
      ["Audit-safe reversing voids instead of bill deletion", true, false],
      ["Direct posting to GST accounting ledgers", true, "Manual CSV Export"],
    ],
  },
  principles: [
    {
      icon: "undo",
      title: "Reverse, never erase",
      text: "Voiding or returning an item creates a formal reversing ledger entry. The audit trail stays intact always.",
    },
    {
      icon: "lock",
      title: "Closed shifts stay locked",
      text: "Once a cashier closes a shift, the Z-report is cryptographically sealed. No edits, no exceptions, no backdating.",
    },
    {
      icon: "pill",
      title: "System-enforced expiry safety",
      text: "The POS blocks expired batches at checkout. It doesn't rely on a busy counter staffer squinting at tiny print dates.",
    },
    {
      icon: "offline",
      title: "Idempotent offline sync",
      text: "Bills created during an internet outage sync exactly once when you're back online. Zero risk of duplicate invoices, zero manual cleanup.",
    },
  ],
  roadmap: [
    "Unified loyalty points redeemable both in-store and online",
    "Multi-branch store chains with automated inter-store stock transfers",
    "Digital customer Khata book with automated WhatsApp payment links",
  ],
  pricing: {
    title: "Included with your Growcord store",
    text: "In-store counter sales follow the same delivered-order commission model as online. Need standalone POS terminals without an online store? Let's talk.",
    cta: { label: "Talk to retail sales", href: "/contact-us?interest=retail" },
  },
  offer: {
    price: "0",
    description: "Included with Growcord Commerce setup; standalone retail POS plans available on request",
  },
  faqs: [
    {
      q: "Is Growcord Retail compliant for medical and pharmacy stores?",
      a: "Fully. Every batch you inward tracks its own MRP and expiry date. At billing, the system picks the oldest valid batch (FEFO), blocks expired medicines, and prints the batch number and expiry right on the GST invoice. You're inspector-ready from day one.",
    },
    {
      q: "How does split payment work if a customer pays partly in cash and partly via UPI?",
      a: "Simple on the payment screen, the cashier divides the total across Cash, UPI, and Card in a few taps. Each amount lands in its exact tender bucket, so the physical cash drawer and your bank statement both match at shift close without any manual math.",
    },
    {
      q: "What happens if our store internet disconnects during peak billing hours?",
      a: "You keep billing. The counter doesn't skip a beat. Offline bills are stored securely in the local browser queue with unique idempotency keys, and they sync to the cloud the moment connectivity returns no duplicates, no lost data.",
    },
    {
      q: "Does the POS share live inventory with our Growcord online website?",
      a: "It does. Both your physical counter and your online storefront deduct from the same inventory record in real time. Your website will never sell the last unit while it's sitting in a walk-in shopper's basket.",
    },
    {
      q: "Can counter staff edit or delete a bill after taking cash?",
      a: "They cannot. Completed bills are locked. If there's a genuine mistake, a store manager authorises a void which records a reversing entry stamped with who approved it and why. Your cash drawer stays 100% auditable.",
    },
    {
      q: "How do I track counter revenue separately from online orders?",
      a: "Growcord treats each physical counter as its own sales channel. Inside Books and Insights, you can filter revenue, GST registers, and profit margins by online store, wholesale trade, or individual POS counter however you need to slice it.",
    },
  ],
};

export const trade = {
  slug: "trade",
  name: "Trade",
  group: "sell",
  icon: "handshake",
  image: Trade,
  status: "live",
  host: "trade.gc.mw",
  appUrl: "https://trade.gc.mw",
  tagline: "B2B wholesale & distribution: custom price lists, credit control, and bulk ordering that actually works",
  summary:
    "Onboard verified business buyers, assign contract pricing and credit terms, accept 1,000-line Excel orders, and receive partner POs as ready-to-approve sales order drafts.",
  metaTitle: "B2B Wholesale & Distribution Software Price Lists, MOQ & Credit Control | Growcord",
  metaDescription:
    "Growcord Trade powers B2B wholesale and distribution: buyer approvals, contract pricing, 7-step price precedence, MOQs, credit limits, bulk Excel ordering, and automated B2B purchase-order-to-sales-order relay.",
  keywords: [
    "b2b ordering software india",
    "distributor management software",
    "wholesale price list software",
    "b2b dealer portal india",
    "dms software india",
  ],
  servicesData: [
    {
      id: 1,
      title: "Bulk Order Management",
      icon: <FaBoxes />,
    },
    {
      id: 2,
      title: "Credit & Split Payments",
      icon: <FaCreditCard />,
    },
    {
      id: 3,
      title: "Automated B2B Invoicing",
      icon: <FaStamp />,
    },
    {
      id: 4,
      title: "Freight & Partial Shipments",
      icon: <FaTruckRampBox />,
    },
    {
      id: 5,
      title: "Custom Quotations & RFQ",
      icon: <FaCommentDollar />,
    },
  ],
  hero: {
    eyebrow: "Growcord Trade",
    title: "Modernize your entire B2B supply chain with",
    highlight: "intelligent pricing and self-serve ordering",
    lede: "Empower distributors with a friction-free ordering experience built for speed. Automate customized price lists, tax-compliant e-Way bill drafts, and scheduled freight deliveries so your sales team can focus on closing deals rather than chasing invoices.",
  },
  visual: "pricelist",
  facts: [
    { value: "7-Step", label: "Pricing engine that picks the right rate, every time" },
    { value: "10,000+", label: "SKU bulk order sheets imported in one click" },
    { value: "Credit", label: "Enforced limits & payment terms per buyer" },
    { value: "0", label: "Unverified partner orders sneaking into your books" },
  ],
  audience: {
    persona:
      "Manufacturers, super-stockists, and wholesale distributors supplying retailers, pharmacies, clinics, and institutional buyers who are ready to ditch chaotic WhatsApp orders and scattered Excel price sheets for a proper self-serve B2B portal.",
    needs: [
      "Verify and approve a retailer before showing them confidential wholesale rates",
      "Enforce minimum order quantities (MOQ) and volume slab discounts automatically",
      "Let buyers upload a 300-line order from Excel instead of typing it manually, line by painful line",
      "Track every buyer's live credit utilisation against their approved limit in real time",
      "Turn a trading partner's Purchase Order into a Sales Order draft without re-keying a single field",
    ],
  },
  before: [
    "Chasing field reps to figure out which discount tiers or special margins were promised to which dealer",
    "Delayed order dispatches while back-office staff manually reformat raw customer order lists",
    "Mounting bad debts and unrecovered receivables due to zero system-level credit validation",
    "Mismatched item codes and tax rates between partner purchase orders and final tax invoices",
  ],
  after: [
    "Audit-ready pricing rules that apply agreed trade discounts without manual rep overrides",
    "Instant order intake through a rapid multi-line grid designed for high-frequency institutional buyers",
    "Automated credit control that flags overdue accounts before orders reach the warehouse packing desk",
    "Seamless SKU matching and automated e-Way bill drafts generated directly from approved PO data",
  ],
  features: [
    {
      icon: "userCheck",
      title: "Gated B2B buyer onboarding",
      text: "Retailers apply online or get invited by your sales desk. Only approved business accounts unlock wholesale pricing, GST proformas, and the bulk ordering terminal.",
    },
    {
      icon: "tag",
      title: "Deterministic 7-step price engine",
      text: "Buyer contract rates, custom price lists, quantity breaks, and tier discounts the engine evaluates every SKU through a strict hierarchy and lands on the one correct unit price.",
    },
    {
      icon: "boxes",
      title: "MOQs and transparent quantity ladders",
      text: "Set minimum order values, case-pack multiples, and SKU-level MOQs. Volume price breaks show up dynamically as the buyer adjusts their quantity no guesswork.",
    },
    {
      icon: "grid",
      title: "High-speed bulk order terminal",
      text: "A keyboard-first tabular screen with instant SKU search, Excel/CSV upload, live stock checks, and one-click GST proforma download. Your buyers will actually want to use it.",
    },
    {
      icon: "scale",
      title: "Enforced credit limits & payment terms",
      text: "Assign net payment days Net 15, Net 30, whatever works and hard credit caps per buyer. Accounts that breach their limit get paused or routed for manager approval.",
    },
    {
      icon: "phone",
      title: "Assisted ordering for sales reps",
      text: "Your inside sales desk can build bulk carts on behalf of offline retailers during a phone call and fire off a signed WhatsApp payment link or credit confirmation in seconds.",
    },
    {
      icon: "book",
      title: "Unified B2B receivables in Books",
      text: "Every wholesale dispatch generates a compliant B2B GST invoice, updates the buyer's ledger balance, and feeds into ageing receivables tracking inside Growcord Books.",
    },
    {
      icon: "users",
      title: "Distributor & retailer CRM",
      text: "Keep a complete 360° record for every trade buyer GSTIN, credit utilisation, past orders, negotiated deals, and WhatsApp conversation logs all in one place.",
    },
  ],
  spotlights: [
    {
      eyebrow: "Deterministic Pricing Engine",
      title: "Seven pricing rules,",
      highlight: "one unmistakable unit price",
      text: "In wholesale distribution, a pricing mistake costs real money and real trust. Growcord Trade runs every SKU line through a strict 7-step hierarchy so the buyer sees the exact same negotiated rate on the product page, the bulk terminal, the proforma quote, and the final tax invoice. No discrepancies, no awkward phone calls.",
      points: [
        "Buyer-specific contract rates always take top priority",
        "Volume slab ladders nudge buyers toward larger baskets at the point of ordering",
        "What the salesman promised and what the invoice charges are always the same number",
      ],
      visual: {
        kind: "timeline",
        data: {
          items: [
            {
              icon: "file",
              title: "1. Buyer Contract Price",
              text: "Locked rate negotiated for this specific buyer & SKU",
              tag: "Top Priority",
              tone: "green",
            },
            {
              icon: "tag",
              title: "2. Assigned Price List",
              text: "Custom regional or institutional rate card linked to the account",
              tone: "blue",
            },
            {
              icon: "boxes",
              title: "3. Quantity Slab Break",
              text: "Volume discount kicks in automatically (e.g., 50+ or 200+ units)",
              tone: "purple",
            },
            {
              icon: "users",
              title: "4. Buyer Tier Rate",
              text: "Wholesale tier pricing (Platinum, Gold, or Silver stockist)",
              tone: "amber",
            },
            {
              icon: "rupee",
              title: "5–7. Default, Promo & Retail MRP",
              text: "Fallback catalogue rates when no special B2B rule applies",
            },
          ],
        },
      },
    },
    {
      eyebrow: "B2B Network Relay",
      title: "Your buyer's Purchase Order becomes",
      highlight: "your pre-filled Sales Order draft",
      text: "When two Growcord businesses trade with each other, documents move between companies as cryptographically signed proposals. A retailer's Purchase Order lands in your Trade inbox as a ready-to-review Sales Order draft. No retyping. No transcription errors. Just review and click 'Accept'.",
      points: [
        "External partners can never write directly into your accounting books everything goes through review",
        "Every relayed document is signed, tamper-proof, and delivered exactly once",
        "Accept, adjust quantities, or reject partner POs from a clean approval queue",
      ],
      visual: { kind: "kanban", host: "trade.gc.mw · partner relay inbox" },
    },
  ],
  useCases: [
    {
      title: "Pharma & Healthcare Distributors",
      text: "Supply clinics, hospitals, and medical stores with 1,000-line Excel uploads and batch-accurate invoicing no more manual order entry marathons.",
    },
    {
      title: "FMCG & Apparel Super-Stockists",
      text: "Manage tiered dealer price lists, case-pack MOQs, and strict credit limits across hundreds of retailers from one portal.",
    },
    {
      title: "B2B Industrial & Institutional Suppliers",
      text: "Lock annual rate contracts per corporate buyer and track PO-linked dispatches and receivables without touching a spreadsheet.",
    },
  ],
  steps: [
    {
      title: "Set up price lists and slabs",
      text: "Import your wholesale rate cards, quantity breaks, and buyer-specific contract prices from Excel. The pricing engine takes it from there.",
    },
    {
      title: "Approve business accounts",
      text: "Verify retailer GSTINs, assign their pricing tier, and set their credit limit and payment terms all from one screen.",
    },
    {
      title: "Invite buyers to the bulk portal",
      text: "Share your branded Trade portal link. Buyers can place bulk orders or upload Excel sheets around the clock, no phone tag needed.",
    },
    {
      title: "Approve, dispatch, and collect",
      text: "Convert orders to GST invoices, ship through Growcord Ship, and let Books and Comms handle payment reminders on autopilot.",
    },
  ],
  connects: [
    { slug: "commerce", for: "Shared master catalogue, inventory, and B2B bulk ordering terminal" },
    { slug: "books", for: "B2B GST invoicing, credit limit enforcement, and ageing receivables" },
    { slug: "crm", for: "Distributor onboarding pipeline, account notes, and follow-up tasks" },
    { slug: "make", for: "Direct factory-to-distributor replenishment and production planning" },
    { slug: "comms", for: "Dispatch alerts, ledger statements, and payment due reminders all automated" },
  ],
  compare: {
    them: "Excel Sheets + WhatsApp Calls",
    rows: [
      ["Per-buyer contract & slab pricing applied automatically", true, false],
      ["Live quantity break ladders shown while ordering", true, false],
      ["Self-serve bulk ordering with 1-click Excel import", true, "Manual Retyping"],
      ["Real-time credit limit & overdue checks at checkout", true, "Manual Memory"],
      ["Partner POs received directly as Sales Order drafts", true, false],
      ["Retail D2C and B2B wholesale from one inventory pool", true, false],
    ],
  },
  principles: [
    {
      icon: "check",
      title: "Single source of pricing truth",
      text: "The product page, the bulk terminal, the proforma quote, and the GST invoice all run the exact same pricing engine. One price, everywhere.",
    },
    {
      icon: "shield",
      title: "Wholesale visibility is strictly gated",
      text: "Confidential B2B margins, slabs, and contract rates stay invisible to public visitors and unapproved accounts. Full stop.",
    },
    {
      icon: "handshake",
      title: "Propose first, commit on approval",
      text: "Incoming partner POs and bulk requests sit as drafts until your operations desk explicitly accepts them. Nothing sneaks into your books.",
    },
    {
      icon: "history",
      title: "Complete commercial audit trail",
      text: "Every buyer approval, credit limit change, and contract rate update is logged with user ID and timestamp. No action goes unrecorded.",
    },
  ],
  roadmap: [
    "Field salesman beat-planning and mobile order-taking app",
    "Automated trade schemes, free-issue goods, and distributor claims desk",
    "Ready-stock van sales with mobile thermal billing and evening settlement",
  ],
  pricing: {
    title: "Included with Growcord Commerce",
    text: "Wholesale orders through your store follow the same delivered-order commission model. Pure-play offline distributor? Get in touch for a volume plan tailored to your throughput.",
    cta: { label: "Talk to B2B specialists", href: "/contact-us?interest=trade" },
  },
  offer: {
    price: "0",
    description: "Included with Growcord Commerce setup; custom enterprise distribution plans available",
  },
  faqs: [
    {
      q: "Can retail consumers and wholesale B2B buyers use the same website?",
      a: "Yes same URL, same catalogue. Public visitors browse and buy at standard retail prices. When an approved business buyer logs in, the same products dynamically show their negotiated contract rates, volume slabs, MOQs, and bulk ordering tools. Two experiences, one system.",
    },
    {
      q: "How does Growcord Trade decide which price to charge a wholesale buyer?",
      a: "Every line item runs through a strict sequence: 1) Buyer Contract Price, 2) Assigned Price List, 3) Quantity Slab, 4) Buyer Tier, 5) Category Default, 6) Promotional Price, 7) Retail Price. The first rule that matches wins. No ambiguity, no manual overrides needed.",
    },
    {
      q: "Can our distributors upload large orders directly from an Excel sheet?",
      a: "They can and they'll actually enjoy it. Upload a CSV or Excel file with thousands of SKU rows. The bulk terminal validates every line on the spot, flags stock issues or invalid codes, and generates a GST proforma before the buyer even finishes their chai.",
    },
    {
      q: "How are buyer credit limits and payment terms enforced?",
      a: "Each approved business account gets a credit limit and net payment term (Net 15, Net 30, you name it). When they order on credit, Growcord checks their live outstanding balance in Books and either flags or holds orders that would push them over their limit.",
    },
    {
      q: "What is the Partner Relay between two Growcord businesses?",
      a: "If your buyer also runs on Growcord, any Purchase Order they issue to you is transmitted straight into your Trade inbox as a pre-filled Sales Order draft. Your team reviews, clicks 'Accept', and the order is live zero retyping, zero transcription errors.",
    },
    {
      q: "Do you support field sales reps placing orders on behalf of retailers?",
      a: "Absolutely. Your sales team can pick any approved buyer account, build a bulk order on their behalf during a call or store visit, and send a signed payment link or credit confirmation to the buyer's WhatsApp right then and there.",
    },
  ],
};
