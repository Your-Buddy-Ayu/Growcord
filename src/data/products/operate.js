import Ship1 from "../../assets/ProductClassic/ship1.jpg"
import Wms from "../../assets/ProductClassic/wms.jpg"
import Make from "../../assets/ProductClassic/make.jpg"


import { FaBarcode, FaChartPie, FaClipboardCheck, FaClipboardList, FaCubesStacked, FaDolly, FaMicroscope, FaSitemap, FaTrainSubway, FaTruckFast } from "react-icons/fa6";
import { LuBadgeCheck, LuShip, LuWarehouse } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";


/** Operate: Ship, WMS, Make. */


export const ship = {

  slug: "ship",

  name: "Ship",

  group: "operate",

  icon: "truck",

  image: Ship1,

  status: "live",

  host: "ship.gc.mw",

  appUrl: "https://ship.gc.mw",

  tagline: "All your couriers in one place, one wallet, tracking that actually works",

  summary: "Book shipments with Shiprocket and Delhivery from a single screen. Print labels, set up pickups and keep tabs on every parcel without jumping between apps.",

  metaTitle: "Shipping Software for Indian Ecommerce   Book Couriers, Print Labels and Track Parcels",

  metaDescription:

    "Manage Shiprocket and Delhivery shipments through Growcord Ship. Handle labels, manifests, pickups, live tracking, failed deliveries (NDRs), split shipments, reverse pickups and compare courier performance all in one place.",

  keywords: ["shipping software india", "courier aggregator for ecommerce", "shiprocket delhivery integration", "ndr management", "rto reduction software"],

  servicesData: [
    {
      id: 1,
      title: "Road Freight",
      icon: <FaTruckFast />,
    },
    {
      id: 2,
      title: "Ocean Freight",
      icon: <LuShip />,
    },
    {
      id: 3,
      title: "Warehouse",
      icon: <LuWarehouse />,
    },
    {
      id: 4,
      title: "Railway Freight",
      icon: <FaTrainSubway />,
    },
    {
      id: 5,
      title: "Air Freight",
      icon: <GiCommercialAirplane />,
    },
  ],

  hero: {

    eyebrow: "Growcord Ship",

    title: "One dashboard for all your ",

    highlight: "shipping needs",

    lede: "We help businesses streamline their logistics and ship faster by connecting you to multiple carriers through a single platform.",

  },

  visual: "rates",

  facts: [

    { value: "50+", label: "Integrated courier partners" },

    { value: "15 min", label: "Realtime Tracking sync frequency" },

    { value: "17,000+", label: "Pin codes covered" },

    { value: "10 Lakhs", label: "Orders delivered till now" },

  ],

  audience: {

    persona: "Operations managers at brands shipping dozens to thousands of parcels daily who are tired of logging into multiple courier portals, chasing failed deliveries over the phone and wondering why returns keep piling up.",

    needs: ["Book shipments and print labels quickly", "Schedule pickups and confirm they're actually booked", "Track parcels without refreshing courier websites", "Fix failed deliveries before they come back", "See which courier actually performs best"],

  },

  before: [
    "Managing fragmented logistics operations across multiple third-party shipping platforms and local transporters",
    "Dealing with customer chargebacks and confusion when partial shipments arrive on different days without notice",
    "Accepting high RTO write-offs as an inevitable operational loss without any automated recovery mechanism",
    "Relying on salesperson promises to evaluate courier speed instead of route-specific historical transit times",
  ],
  after: [
    "Centralizing your entire carrier network onto an automated, multi-courier dispatch cockpit",
    "Ensuring seamless multi-package tracking that maps every SKU to its exact shipping container and courier AWB",
    "Recovering up to 40% of failing deliveries through instant, automated WhatsApp and SMS resolution funnels",
    "Powering rule-based courier selection tailored by destination zone, package weight, and verified delivery track records",
  ],

  features: [

    { icon: "wallet", title: "Wallet billing", text: "Pay for shipments booked through our accounts from a prepaid wallet. Every charge is broken down so you know what you're paying for." },

    { icon: "printer", title: "Labels and manifests", text: "Print labels one at a time or in bulk, and create pickup manifests." },

    { icon: "calendar", title: "Pickups that actually get booked", text: "Pickup requests go straight to the courier and confirmations sync back to Growcord." },

    { icon: "refresh", title: "Tracking that updates on its own", text: "Tracking refreshes every 15 minutes and updates instantly when the courier sends updates. Each parcel shows a clear status timeline." },

    { icon: "boxes", title: "Split and partial shipments", text: "Ship part of an order now and the rest later. The order stays marked as partially delivered until everything arrives." },

    { icon: "undo", title: "Returns and reverse pickups", text: "Set a return window for each order and arrange reverse pickups when customers send items back." },

    { icon: "gauge", title: "Delivery metrics", text: "Compare average, median and 90th percentile delivery times, how long parcels sit in each status, and RTO and NDR rates by courier." },

    { icon: "chat", title: "Customer updates", text: "Growcord Comms automatically sends customers messages when an order ships, is out for delivery and arrives." },

  ],

  spotlights: [

    {

      eyebrow: "Multi-parcel orders",

      title: "An order is complete when",

      highlight: "every single parcel arrives",

      text: "Big orders often ship in multiple boxes. Growcord tracks each box separately and combines their statuses at the order level. The order stays partially delivered while any box is in transit, and only shows as delivered when the last one arrives. That's also when the return window starts.",

      points: ["Each parcel has its own value and delivery status", "The return window starts on the actual delivery date", "Billing happens after delivery and returns, not based on guesses"],

      visual: {

        kind: "timeline",

        data: {

          items: [

            { icon: "package", title: "Parcel 1 of 2 · Delhivery", tag: "Delivered", tone: "green" },

            { icon: "package", title: "Parcel 2 of 2 · Xpressbees", tag: "In transit", tone: "orange" },

            { icon: "layers", title: "Order SM9412", text: "Partially delivered   still waiting" },

            { icon: "clock", title: "Return window", text: "Starts when the last parcel arrives" },

          ],

        },

      },

    },

    {

      eyebrow: "Know your couriers",

      title: "Real data that settles",

      highlight: "the courier performance debate",

      text: "Every status change gets timestamped, so you can see how long orders actually take to reach customers, where things slow down and which couriers send the most parcels back. Compare performance by location and month.",

      points: ["Average, median and 90th percentile delivery time", "How long orders spend in each tracking status", "RTO and NDR rates by courier"],

      visual: {

        kind: "hbars",

        data: {

          title: "Median order to delivery · last 90 days",

          items: [

            { label: "Delhivery Express", value: 1.8, display: "1.8 days", tone: "green" },

            { label: "Delhivery Surface", value: 3.4, display: "3.4 days" },

            { label: "Shiprocket · Xpressbees", value: 2.9, display: "2.9 days" },

            { label: "Shiprocket · Ekart", value: 4.6, display: "4.6 days", tone: "gray" },

          ],

        },

      },

    },

  ],

  steps: [

    { title: "Connect your couriers", text: "Link your Shiprocket or Delhivery accounts, or add money to the Growcord shipping wallet." },

    { title: "Create your shipments", text: "Open an order, pick your courier, enter the parcel weight and decide how to split the order if needed." },

    { title: "Print labels and arrange pickup", text: "Print your labels and manifests, then confirm the pickup time." },

    { title: "Track shipments through delivery", text: "Monitor tracking, handle any failed deliveries and manage delivery and return windows." },

  ],

  connects: [

    { slug: "commerce", for: "Orders to ship and delivery addresses" },

    { slug: "comms", for: "Shipping updates sent to customers" },

    { slug: "wms", for: "Packed and weighed parcels from the warehouse" },

    { slug: "insights", for: "Delivery time and RTO reports" },

    { slug: "books", for: "Courier charges and wallet transactions" },

  ],

  compare: {

    them: "Courier dashboards",

    rows: [

      ["Unified dashboard for multiple couriers", true, false],

      ["Accurate tracking for split orders", true, false],

      ["Detailed courier performance metrics", true, "Basic only"],

      ["WhatsApp tracking notifications", true, "Paid add-on"],

      ["Automated billing tied to actual delivery", true, false],

      ["Real-time tracking updates", true, "Manual per portal"],

    ],

  },

  principles: [

    { icon: "check", title: "Delivered means delivered", text: "An order only shows as delivered when every shipment has actually arrived." },

    { icon: "clock", title: "Return windows start on delivery", text: "Return windows are measured from the real delivery date, not when someone clicked a button." },

    { icon: "wallet", title: "Every charge is itemized", text: "Wallet charges show the courier cost and platform fee separately." },

    { icon: "refresh", title: "Carrier data wins", text: "Pickup and tracking details come straight from the courier, not typed in manually." },

  ],

  roadmap: ["COD remittance reconciliation", "Automatic weight dispute evidence from packing", "Own fleet and eway bill operator mode"],

  pricing: { title: "Pay per shipment", text: "Only pay for what you ship. No monthly fees, no subscriptions, no lock-in.", cta: { label: "See pricing", href: "/pricing#usage" } },

  faqs: [

    { q: "Is Growcord a courier company?", a: "No, we're a courier aggregator. We work with multiple couriers like Shadowfax, Xpressbees, Delhivery and others so you can use whichever you want from one platform." },

    { q: "Which couriers can I use?", a: "More than 50 courier partners you can use." },

    { q: "How does the shipping wallet work?", a: "When you ship through our courier accounts, each shipment is paid from a prepaid wallet. Every charge is broken down so you see exactly what you paid." },

    { q: "Can I split one order into multiple parcels?", a: "Yes. Create partial shipments for each part and each parcel gets tracked separately. The order shows partially delivered until the last parcel arrives." },

    { q: "How often does tracking update?", a: "Tracking refreshes every 15 minutes and also updates instantly when the courier sends a notification." },

    { q: "Can I manually mark an order as delivered?", a: "Yes. Team members with shipping access can mark a shipment as delivered or returned from the order page if a courier update is missing." },

    { q: "Do customers get shipping updates?", a: "Yes. Customers get WhatsApp or SMS messages when an order ships, goes out for delivery and arrives through Growcord Comms." },

  ],

};

export const wms = {

  slug: "wms",

  name: "WMS",

  group: "operate",

  icon: "warehouse",

  image: Wms,

  status: "live",

  host: "wms.gc.mw",

  appUrl: "https://wms.gc.mw",

  tagline: "Warehouse operations that actually match what's sitting on your shelves",

  summary: "Manage your bin space, pick items by expiry date, pack and ship orders, handle returns and do regular stock counts.",

  metaTitle: "Warehouse Management System for India   Bin Capacity, FEFO Picking and Stock Counts",

  metaDescription:

    "Growcord WMS lets you set up warehouse zones and bins, pick items by expiry (FEFO), plan pick waves, pack and ship orders, process returns, move stock between locations, schedule stock counts and hold items that are about to expire all from your phone.",

  keywords: ["warehouse management system india", "wms software", "fefo picking", "inventory batch expiry tracking", "cycle count software"],

  servicesData: [
    {
      id: 1,
      title: "Smart Bin & Rack Mapping",
      icon: <LuWarehouse />,
    },
    {
      id: 2,
      title: "Batch & Wave Picking",
      icon: <FaDolly />,
    },
    {
      id: 3,
      title: "Barcode & RFID Scanning",
      icon: <FaBarcode />,
    },
    {
      id: 4,
      title: "Real-Time Stock Audits",
      icon: <FaClipboardList />,
    },
    {
      id: 5,
      title: "Automated Inward & QC",
      icon: <LuBadgeCheck />,
    },
  ],

  hero: {
    eyebrow: "Growcord WMS",
    title: "Upgrade warehouse operations to",
    highlight: "automated, barcode verified precision",
    lede: "Transform manual warehouse chaos into structured workflows. Set custom storage rules, catch weight discrepancies at the packing desk, and log stock status shifts instantly to run a scalable, audit-ready supply hub.",
  },

  visual: "bins",

  facts: [

    { value: "500", label: "coded bins set up in one go" },

    { value: "FEFO", label: "pickers sent to exactly the right bin and batch" },

    { value: "4", label: "automations you can turn on whenever you want" },

    { value: "0", label: "stock changes that happen without your say-so" },

  ],

  audience: {

    persona: "Warehouse managers and 3PL operators who are still stuck with bin cards and spreadsheets wasting time on picking mistakes, surprise stockouts and dodgy inventory counts.",

    needs: ["Get zones and bins up and running quickly", "Put stock in the right spots", "Always grab the oldest batch that's still good", "Record what parcels actually weigh to settle disputes", "Count a section and spot any stock differences"],

  },

  before: [
    "Checking bin capacity manually only when shelves are already full",
    "Pickers pulling whatever batch is easiest to reach on the rack",
    "Damaged and expired units accidentally sold to online shoppers",
    "Halting the entire warehouse for painful year-end stocktaking",
  ],
  after: [
    "Tracking unit, volume, and weight limits for every bin in real time",
    "Guiding pickers to exact bins with scan-enforced batch validation",
    "Locking damaged and expired stock strictly out of sellable inventory",
    "Running smooth cycle counts on mobile without pausing daily dispatch",
  ],

  features: [

    { icon: "grid", title: "Set up layouts in minutes", text: "Create coded locations for a whole rack at once, adjust individual bins and add more space whenever you need it." },

    { icon: "box", title: "Bin capacity that's actually real", text: "Set limits based on units, volume and weight using actual product sizes not made-up numbers." },

    { icon: "scan", title: "FEFO picking by batch", text: "Pick lists show you exactly which bin and batch to grab, and the system won't let you scan the wrong one." },

    { icon: "workflow", title: "Pick waves", text: "Create pick waves by order or by zone from orders ready to go. Waves hold the stock but don't move it yet." },

    { icon: "packageCheck", title: "Packing station", text: "Scan items as they go into the box, record the actual weight, mark anything missing and hand it over to Growcord Ship." },

    { icon: "undo", title: "Returns dock", text: "Receive returned items, check them over, then send them back to sellable stock, quarantine or throw them out." },

    { icon: "checks", title: "Stock counts", text: "Schedule A-class counts every week, B-class monthly and C-class quarterly. Only finalize counts after someone reviews them." },

    { icon: "printer", title: "Print labels anywhere", text: "Print bin and product labels as PDFs, in ZPL format for thermal printers, or straight from your browser." },

  ],

  spotlights: [

    {

      eyebrow: "Stock states",

      title: "Available stock means",

      highlight: "it's actually ready to sell",

      text: "Stock can be sellable, quarantined, damaged, expired or in transit. Only sellable stock counts as available, and every time something changes status, you know who did it, when and why.",

      points: ["New stock stays in quarantine until you've checked it over", "Damaged and expired items never show as available", "Every status change gets logged permanently"],

      visual: { kind: "stock" },

    },

    {

      eyebrow: "Your daily work",

      title: "Today's tasks",

      highlight: "show up on their own",

      text: "The mobile warehouse dashboard shows you what needs putting away, picking, packing and counting each day. Turn on the four automations pick waves, stock counts, expiry holds and reorder suggestions to run them on schedule with a record of every run.",

      points: ["Works on any Android phone with a camera", "All automations start turned off", "Automations never change your stock without you knowing"],

      visual: {

        kind: "timeline",

        data: {

          items: [

            { icon: "package", title: "Put away 14 receipts", text: "Bins suggested based on space" },

            { icon: "scan", title: "Pick wave 14 · 38 orders", text: "Start with Zone A, oldest batches first" },

            { icon: "packageCheck", title: "Pack & weigh 38 parcels", text: "Hand over to Ship" },

            { icon: "checks", title: "Count aisle A03", text: "Weekly A-class count", tag: "Scheduled", tone: "purple" },

          ],

        },

      },

    },

  ],

  steps: [

    { title: "Set up your warehouse layout", text: "Create warehouses, zones, racks, bins and set their capacity limits." },

    { title: "Bring in your stock and batches", text: "Upload opening stock, batch info, expiry dates and prices from Excel." },

    { title: "Run your daily warehouse operations", text: "Handle putting away, pick waves, picking, packing and returns all from mobile." },

    { title: "Count stock and get accurate numbers", text: "Schedule stock counts, check for differences and manage expiry holds." },

  ],

  connects: [

    { slug: "commerce", for: "Stock and batches that your store and POS sell" },

    { slug: "ship", for: "Shipping out picked and packed orders" },

    { slug: "make", for: "Incoming goods, inspections and reorder suggestions" },

    { slug: "books", for: "Stock value that matches your warehouse" },

    { slug: "people", for: "Shifts and who did what" },

  ],

  compare: {

    them: "Bin cards and spreadsheets",

    rows: [

      ["Bin capacity by volume and weight", true, false],

      ["Batch-directed FEFO picking", true, false],

      ["Quarantine, damaged and expired kept separate", true, false],

      ["Packing weight recorded for disputes", true, false],

      ["Scheduled stock counts throughout the year", true, "Just yearly"],

      ["Works on any phone", true, false],

    ],

  },

  principles: [

    { icon: "database", title: "Log everything, overwrite nothing", text: "Every stock change is recorded with a reason that's where you spot mistakes and problems." },

    { icon: "scale", title: "No guessing on sizes", text: "Capacity is based only on sizes someone actually measured. Unmeasured items are marked as such." },

    { icon: "zap", title: "Automation suggests, people decide", text: "Waves reserve stock, counts need approval, reorders are just drafts. Nothing moves on its own." },

    { icon: "eye", title: "Every automation leaves a trail", text: "Each automated run gets logged so you can see exactly what happened." },

  ],

  roadmap: ["3PL mode to run warehouses as a service", "Smart putaway rules based on how fast items sell and when they expire", "See how productive your team is"],

  pricing: { title: "Comes with your Growcord account", text: "Turn on the warehouse module for your store. If you need a standalone WMS or 3PL setup, reach out to our team.", cta: { label: "Talk to sales", href: "/contactus?interest=wms" } },

  faqs: [

    { q: "Do I need special barcode scanner hardware?", a: "Nope. Growcord WMS works in a browser on any Android phone and uses its camera to scan. You can also hook up dedicated scanners and label printers if you want." },

    { q: "What's FEFO picking?", a: "FEFO stands for 'first expiry, first out.' The pick list shows you which bin and batch to grab, prioritizing the oldest expiry date, and won't let you scan a different batch." },

    { q: "How do you figure out bin capacity?", a: "Bins can be limited by how many units fit, volume and weight. Volume and weight use actual product sizes; items without confirmed measurements get flagged instead of guessed." },

    { q: "Do the automations change my stock without asking?", a: "No way. Pick waves hold stock, stock counts need someone to approve them, expiry rules put items on a visible hold, and reorder suggestions just create drafts. Everything starts turned off." },

    { q: "Can I keep damaged and expired stock separate?", a: "Yes. Stock is tracked as sellable, quarantined, damaged or expired. Only sellable stock counts as available to sell." },

    { q: "Can I move stock between warehouses?", a: "Yes. Stock stays in transit until the other warehouse confirms they got it, so it never gets counted at both places." },

  ],

};

export const make = {

  slug: "make",

  name: "Make",

  group: "operate",

  icon: "factory",

  image: Make,

  status: "live",

  host: "make.gc.mw",

  appUrl: "https://make.gc.mw",

  tagline: "Manufacturing and purchasing where you actually know your costs",

  summary: "Handle your bills of materials, work orders, batches and expiry dates from ordering raw materials and checking supplier invoices to figuring out what each batch actually costs to make.",

  metaTitle: "Manufacturing ERP for Small Manufacturers in India   BOMs, Batches and Purchasing",

  metaDescription:

    "Growcord Make helps small manufacturers manage multi-level bills of materials, work orders, batch and expiry tracking, weighted-average costing, incoming inspections, purchase orders, three-way matched supplier bills, vendor credits and reorder suggestions.",

  keywords: ["manufacturing erp india", "bom software", "batch tracking manufacturing", "purchase order software", "production costing software"],

  servicesData: [
    {
      id: 1,
      title: "Bill of Materials (BOM)",
      icon: <FaSitemap />,
    },
    {
      id: 2,
      title: "Raw Material Planning (MRP)",
      icon: <FaCubesStacked />,
    },
    {
      id: 3,
      title: "Work Orders & Job Tracking",
      icon: <FaClipboardCheck />,
    },
    {
      id: 4,
      title: "Quality Control (QC Inspection)",
      icon: <FaMicroscope />,
    },
    {
      id: 5,
      title: "Production Costing & Waste Control",
      icon: <FaChartPie />,
    },
  ],

  hero: {
    eyebrow: "Growcord Make",
    title: "Know your true production cost",
    highlight: "down to the exact batch",
    lede: "Map multi-level bills of materials, issue factory work orders, and log scrap loss in real time. Track labor, raw materials, and overheads accurately, syncing finished goods and vendor invoices directly into Books with three-way matching.",
  },

  visual: "bom",

  facts: [

    { value: "3way", label: "purchase order, receipt and invoice all checked against each other" },

    { value: "WAC", label: "weighted-average cost updates every time you receive materials" },

    { value: "Batch", label: "MRP, expiry date and supplier tracked for each lot" },

    { value: "Draft", label: "reorder purchase orders created as drafts, never sent automatically" },

  ],

  audience: {

    persona: "Small manufacturers including Ayurvedic and homeopathic makers, FMCG plants and job-work shops still managing BOMs in Excel, batch registers on paper and ordering by phone.",

    needs: ["Set up items and multi-level BOMs", "Create work orders and hand out materials", "Record what you made and quality check results", "Receive raw materials and match them to orders", "See what each batch actually costs without doing manual math"],

  },

  before: [
    "Spreadsheet BOMs that don't match actual factory floor assembly",
    "Partial supplier deliveries lingering as incoming stock forever",
    "Paying vendor bills without checking if items physically arrived",
    "Figuring out true batch costs only once a year during audits",
  ],
  after: [
    "Managing multi-level BOMs and work orders on one connected screen",
    "Closing short vendor deliveries with notes to keep reorder math clean",
    "Matching purchase orders, delivery notes, and invoices automatically",
    "Calculating weighted-average production costs for every single batch",
  ],

  features: [

    { icon: "branch", title: "Multi-level BOMs", text: "List what goes into finished products, sub-assemblies and raw materials in a recipe your shop floor can actually follow." },

    { icon: "pill", title: "Batches and expiry dates", text: "Each batch keeps track of when it was made, when it expires, its price and which supplier it came from." },

    { icon: "coins", title: "Real batch costing", text: "Weighted-average cost recalculates every time you receive materials, so you get an actual cost, not a guess." },

    { icon: "file", title: "Purchase orders", text: "Create, send and change purchase orders without losing the original number." },

    { icon: "eye", title: "Check incoming materials", text: "Keep new stock in quarantine until it passes inspection, and log any rejections against the order." },

    { icon: "fileCheck", title: "Three-way matched invoices", text: "Match supplier invoices against your purchase order and what you actually received, and flag anything that doesn't line up." },

    { icon: "scale", title: "Handle short deliveries and rejections", text: "Close a purchase order for a partial delivery and note the reason, or request a replacement or credit for rejected goods." },

    { icon: "refresh", title: "Reorder suggestions", text: "When stock runs low, the system figures in what's already on order and creates a draft purchase order for you to review." },

  ],

  spotlights: [

    {

      eyebrow: "Purchasing that actually closes",

      title: "When a supplier sends 6 out of 10,",

      highlight: "you know exactly what's left",

      text: "Receive a partial order, close the rest as short and explain why, or update the order without changing its number. If goods fail inspection, note whether they'll be replaced, credited or accepted anyway. Your incoming stock numbers and reorder calculations stay accurate.",

      points: ["Open balance = what you ordered minus what you got minus what you cancelled", "Every change keeps a before-and-after record", "See which suppliers are taking too long"],

      visual: {

        kind: "timeline",

        data: {

          items: [

            { icon: "file", title: "PO0212 sent · 10 drums", text: "Vendor: Shree Oils" },

            { icon: "package", title: "Goods received · 6 drums", tag: "Partial", tone: "orange" },

            { icon: "eye", title: "Inspection · 1 drum rejected", text: "Outcome: vendor credit" },

            { icon: "scale", title: "Closed short · 3 drums", text: "Reason: vendor out of stock", tag: "Closed", tone: "gray" },

          ],

        },

      },

    },

    {

      eyebrow: "Costing",

      title: "Figure out batch costs from",

      highlight: "what you actually received",

      text: "Every time you receive materials, the weighted-average cost updates. Materials you use in a work order carry their cost into the finished batch. Once your accountant turns on automatic posting, the numbers flow into Growcord Books.",

      points: ["Cost per unit for every batch you make", "Track price differences on invoices you accept", "Keep inventory value in sync with your accounts"],

      visual: { kind: "ledger" },

    },

  ],

  steps: [

    { title: "Set up items and BOMs", text: "Define your raw materials, packaging and finished goods, plus the recipes for making them." },

    { title: "Order and receive materials", text: "Manage purchase orders, receive goods, inspect them and match supplier invoices." },

    { title: "Make your products", text: "Create work orders, hand out materials, record output and quality checks." },

    { title: "Track costs and sell", text: "See what each batch costs and its value, then sell through Commerce or Trade." },

  ],

  connects: [

    { slug: "books", for: "Supplier invoices, goods received entries and costing records" },

    { slug: "wms", for: "Bins, batches and inspection holds" },

    { slug: "commerce", for: "The stock ledger that receipts and production post to" },

    { slug: "trade", for: "Distributors who can order from you" },

    { slug: "insights", for: "Inventory value, aging and expiry risk" },

  ],

  compare: {

    them: "Excel BOMs and desktop accounting",

    rows: [

      ["Multi-level BOMs and work orders", true, "Excel"],

      ["Batch-wise expiry, price and supplier", true, "Paper register"],

      ["Weighted-average cost after each receipt", true, "Year end"],

      ["Invoices matched to order and goods received", true, false],

      ["Close orders short with reasons", true, false],

      ["Reorder suggestions that account for pending orders", true, false],

    ],

  },

  principles: [

    { icon: "hash", title: "Purchase order numbers stay the same", text: "Update a purchase order in place. If you cancel and create a new one, you waste the original number and lose the connection to what you received." },

    { icon: "fileCheck", title: "Flag issues, don't block them", text: "When something doesn't match, we flag it for you to accept, question or fix with a debit note we never block you without explanation." },

    { icon: "zap", title: "Suggestions, not automatic orders", text: "Reorder suggestions stay as drafts. Someone on your team has to review and actually send every purchase order." },

    { icon: "lock", title: "Your accountant controls posting", text: "Automatic posting to your accounts only happens after your accountant reviews and approves the rules." },

  ],

  roadmap: ["Routing and work centers", "One-click trace from raw materials to retail", "Job-work invoices"],

  pricing: { title: "Comes with your Growcord account", text: "Turn on inventory and purchasing for your store. If you only do manufacturing, let's talk.", cta: { label: "Talk to sales", href: "/contactus?interest=make" } },

  faqs: [

    { q: "Is Growcord Make built for small manufacturers?", a: "Yes. It's made for businesses with teams of dozens to hundreds that currently use Excel for BOMs and paper registers for batches, including Ayurvedic, homeopathic and FMCG makers." },

    { q: "Does it track batches and expiry dates?", a: "Yes. Each batch records when it was made, when it expires, its price, which supplier it came from and purchase details. You can upload or update batch info in bulk from Excel." },

    { q: "How do you calculate production costs?", a: "We use weighted-average costing, which updates every time you receive materials. Materials you use in a work order carry their cost into the finished batch." },

    { q: "What if a supplier delivers less than I ordered?", a: "Record what you received, then close the rest as short and add a reason. Your purchase order stays accurate, so reorder calculations work right." },

    { q: "Can I reject goods from a supplier?", a: "Yes. Log the rejection against the purchase order and say whether they should be replaced, credited or accepted anyway. The stock stays in quarantine until it's resolved." },

    { q: "Does it connect to my accounting software?", a: "Purchasing and costing create entries in Growcord Books. Automatic posting can be turned on after your accountant has reviewed the rules." },

  ],

};