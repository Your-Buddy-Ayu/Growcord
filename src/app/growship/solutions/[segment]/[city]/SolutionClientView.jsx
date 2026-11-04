"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiCopy,
  FiAlertCircle,
  FiLayers,
  FiMapPin,
  FiNavigation,
  FiPlay,
  FiPrinter,
  FiRefreshCw,
  FiShield,
  FiSliders,
  FiTrendingDown,
  FiTrendingUp,
  FiTruck,
  FiZap,
  FiPackage,
  FiSearch,
  FiLock,
  FiBarChart2,
  FiFileText,
} from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";

// ==========================================
// DYNAMIC ENRICHMENT ARRAYS FOR DEEP CONTENT
// ==========================================

const CITY_ENRICHMENT = {
  "delhi-ncr": {
    hubArea: "Okhla, Noida Sector 62/63 & Gurugram Bilaspur Hubs",
    industrialZones: [
      "Okhla Industrial Area Phase I–III",
      "Noida Sector 62, 63 & Ecotech",
      "Gurugram Bilaspur & Manesar",
      "Bawana & Mundka Logistics Parks",
    ],
    corridors: [
      "NH-48 Western Freight Corridor",
      "IGIA Express Air Cargo Terminal",
      "Eastern & Western Peripheral Expressways",
    ],
    destSample: "Bengaluru",
    pincodeSample: "110020 → 560001",
    expressDays: "1.6 days",
    priorityDays: "2.7 days",
    surfaceDays: "4.2 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  },
  delhi: {
    hubArea: "Okhla, Naraina, Patparganj & Mundka Logistics Hubs",
    industrialZones: [
      "Okhla Industrial Estate Phase I–III",
      "Naraina & Mayapuri Warehousing",
      "Patparganj & Wazirpur Industrial Areas",
      "Mundka & Bawana Fulfilment Corridors",
    ],
    corridors: [
      "NH-44 North-South Express Spine",
      "IGIA Domestic Air Cargo Hub",
      "Delhi–Jaipur–Mumbai NH-48 Corridor",
    ],
    destSample: "Mumbai",
    pincodeSample: "110020 → 400001",
    expressDays: "1.5 days",
    priorityDays: "2.6 days",
    surfaceDays: "4.1 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  },
  mumbai: {
    hubArea: "Bhiwandi, Andheri MIDC & Navi Mumbai Taloja Hubs",
    industrialZones: [
      "Bhiwandi Warehousing Belt",
      "Andheri East & Marol MIDC",
      "Navi Mumbai TTC & Taloja",
      "Vasai-Virar Industrial Estate",
    ],
    corridors: [
      "Mumbai–Pune–Bengaluru NH-48",
      "Mumbai–Ahmedabad NH-48 Western Lane",
      "CSMIA Domestic Air Cargo Hub",
    ],
    destSample: "Delhi NCR",
    pincodeSample: "400093 → 110001",
    expressDays: "1.5 days",
    priorityDays: "2.6 days",
    surfaceDays: "4.1 days",
    pickupCutoff: "5:00 PM Daily Cutoff",
  },
  bengaluru: {
    hubArea: "Peenya, Whitefield & Hoskote Logistics Parks",
    industrialZones: [
      "Peenya Industrial Area Phases I–IV",
      "Hoskote & Nelamangala Warehousing",
      "Bommasandra & Electronic City",
      "Whitefield & Mahadevapura Fulfilment Zones",
    ],
    corridors: [
      "Bengaluru–Chennai NH-48 Corridor",
      "Bengaluru–Hyderabad NH-44 North Lane",
      "KIAL Devanahalli Express Air Cargo",
    ],
    destSample: "Mumbai",
    pincodeSample: "560058 → 400001",
    expressDays: "1.7 days",
    priorityDays: "2.8 days",
    surfaceDays: "4.4 days",
    pickupCutoff: "4:30 PM Daily Cutoff",
  },
  surat: {
    hubArea: "Ring Road, Sachin GIDC & Saroli Textile Hubs",
    industrialZones: [
      "Sachin GIDC & Pandesara Estate",
      "Saroli & Ring Road Textile Markets",
      "Kadodara & Palsana Logistics Belt",
      "Katargam & Ichchhapor D2C Units",
    ],
    corridors: [
      "Surat–Mumbai–Pune Express Lane",
      "Surat–Ahmedabad–Delhi NH-48",
      "Central India Surat–Indore Surface Route",
    ],
    destSample: "Hyderabad",
    pincodeSample: "395002 → 500001",
    expressDays: "2.1 days",
    priorityDays: "3.1 days",
    surfaceDays: "4.8 days",
    pickupCutoff: "3:30 PM Daily Cutoff",
  },
  jaipur: {
    hubArea: "Sitapura Industrial Area & VKI Logistics Hubs",
    industrialZones: [
      "Sitapura RIICO Industrial Area",
      "Vishwakarma Industrial (VKI) Area",
      "Mansarovar & Sanganer Apparel Clusters",
      "Bagru & Mahindra SEZ Corridor",
    ],
    corridors: [
      "Jaipur–Delhi NCR Fast Surface Lane",
      "Jaipur–Ahmedabad–Mumbai NH-48",
      "JAI Sanganer Air Cargo Terminal",
    ],
    destSample: "Bengaluru",
    pincodeSample: "302022 → 560001",
    expressDays: "1.9 days",
    priorityDays: "2.9 days",
    surfaceDays: "4.5 days",
    pickupCutoff: "3:30 PM Daily Cutoff",
  },
  ahmedabad: {
    hubArea: "Narol, Sanand & Changodar Industrial Corridors",
    industrialZones: [
      "Narol & Vatva GIDC",
      "Changodar & Bavla Warehousing Parks",
      "Sanand GIDC & Aslali Logistics Hub",
      "Odhav & Kathwada Industrial Estates",
    ],
    corridors: [
      "Ahmedabad–Mumbai Western Express",
      "Ahmedabad–Jaipur–Delhi North Corridor",
      "SVPIA Air Cargo & Surface Line-Haul",
    ],
    destSample: "Mumbai",
    pincodeSample: "382405 → 400001",
    expressDays: "1.8 days",
    priorityDays: "2.9 days",
    surfaceDays: "4.5 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  },
  hyderabad: {
    hubArea: "Jeedimetla, Shamshabad & Medchal Logistics Hubs",
    industrialZones: [
      "Jeedimetla & Balanagar Industrial Area",
      "Shamshabad Airport Logistics Park",
      "Medchal & Kompally NH-44 Belt",
      "Uppal, Cherlapally & Patancheru",
    ],
    corridors: [
      "North-South NH-44 Central Spine",
      "Hyderabad–Mumbai NH-65 Express",
      "RGIA Shamshabad Air Cargo Hub",
    ],
    destSample: "Delhi NCR",
    pincodeSample: "500055 → 110001",
    expressDays: "1.7 days",
    priorityDays: "2.8 days",
    surfaceDays: "4.3 days",
    pickupCutoff: "4:30 PM Daily Cutoff",
  },
  chennai: {
    hubArea: "Sriperumbudur, Oragadam & Red Hills Hubs",
    industrialZones: [
      "Sriperumbudur & Oragadam Industrial Belt",
      "Ambattur & Guindy Industrial Estates",
      "Red Hills & Madhavaram Warehousing",
      "Maraimalai Nagar & GST Road Hubs",
    ],
    corridors: [
      "Chennai–Bengaluru–Mumbai NH-48",
      "Chennai–Kolkata East Coast NH-16",
      "MAA Meenambakkam Air Cargo Hub",
    ],
    destSample: "Mumbai",
    pincodeSample: "600032 → 400001",
    expressDays: "1.8 days",
    priorityDays: "3.0 days",
    surfaceDays: "4.7 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  },
  kolkata: {
    hubArea: "Dankuni, Dhulagarh & Sankrail Logistics Parks",
    industrialZones: [
      "Dankuni & Singur NH-19 Warehousing",
      "Dhulagarh & Sankrail Logistics Hub",
      "Salt Lake Sector V & Kasba",
      "Taratala & Madhyamgram Industrial Zones",
    ],
    corridors: [
      "Eastern Gateway & North-East Feeder Lanes",
      "Kolkata–Delhi NH-19 Grand Trunk Corridor",
      "CCU Dum Dum Express Air Cargo",
    ],
    destSample: "Bengaluru",
    pincodeSample: "700091 → 560001",
    expressDays: "1.9 days",
    priorityDays: "3.2 days",
    surfaceDays: "4.9 days",
    pickupCutoff: "3:30 PM Daily Cutoff",
  },
  pune: {
    hubArea: "Chakan, Pimpri-Chinchwad & Ranjangaon Hubs",
    industrialZones: [
      "Chakan MIDC Phases I–IV",
      "Pimpri-Chinchwad & Bhosari MIDC",
      "Hadapsar, Wagholi & Ranjangaon",
      "Talegaon & Hinjewadi Logistics Zones",
    ],
    corridors: [
      "Pune–Mumbai Expressway Feeder",
      "Pune–Hyderabad–Bengaluru South Corridor",
      "PNQ Lohegaon Air & Surface Hub",
    ],
    destSample: "Delhi NCR",
    pincodeSample: "410501 → 110001",
    expressDays: "1.7 days",
    priorityDays: "2.8 days",
    surfaceDays: "4.3 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  },
};

const COMPARISON_ROWS = [
  {
    capability: "Daily Dispatch Workspace",
    legacy: "Bouncing between 3–4 separate courier & aggregator browser tabs",
    growship: "One unified command centre for all bookings, labels & manifests",
  },
  {
    capability: "Courier Account Flexibility",
    legacy: "Locked into opaque aggregator rate cards with hidden markups",
    growship:
      "Connect your own Delhivery/Shiprocket accounts OR use our prepaid wallet",
  },
  {
    capability: "Multi-Parcel Split Orders",
    legacy: "Order falsely marks 'Delivered' when only 1 of 3 boxes arrives",
    growship:
      "Independent parcel timelines; stays 'Partially Delivered' until complete",
  },
  {
    capability: "Tracking Sync Frequency",
    legacy:
      "Delayed batch updates causing 'Where is my order?' support tickets",
    growship:
      "Scheduled 15-minute tracking refreshes + live carrier webhook events",
  },
  {
    capability: "NDR & Exception Handling",
    legacy: "Found out days later in CSV sheets after RTO is already initiated",
    growship:
      "Proactive NDR action queue with instant context & Growcord Comms alerts",
  },
  {
    capability: "Wallet & Freight Audit",
    legacy: "Lump-sum deductions and confusing weight discrepancy adjustments",
    growship:
      "100% itemised per-shipment wallet debits for clean finance reconciliation",
  },
];

const MIGRATION_TIMELINE = [
  {
    time: "Hour 01",
    title: "Submit Operational Fit Profile",
    detail:
      "Share your dispatch city, product category, and monthly order volumeno public document uploads required.",
    icon: FiFileText,
  },
  {
    time: "Hour 04",
    title: "Operations Review & Protected KYC",
    detail:
      "Our onboarding specialist reviews your lane needs and shares a secure, encrypted link for business verification.",
    icon: FiLock,
  },
  {
    time: "Hour 12",
    title: "Link Carrier Accounts or Fund Wallet",
    detail:
      "Connect your existing Delhivery and Shiprocket credentials in minutes, or activate your itemised GrowShip wallet.",
    icon: FiLayers,
  },
  {
    time: "Hour 24",
    title: "First Batch Labels & Manifest Live",
    detail:
      "Your warehouse desk prints its first batch of thermal labels and daily pickup manifests without pausing dispatch.",
    icon: FiZap,
  },
];

export default function SolutionClientView({
  segmentSlug,
  citySlugParam,
  audience,
  cityName,
  stateName,
  allCities = [],
  allSegments = [],
}) {
  // Merge prop data from @/data/growship with our rich local fallbacks
  const cityDetails = CITY_ENRICHMENT[citySlugParam] || {
    hubArea: `${cityName} Industrial & Warehousing Corridors`,
    industrialZones: [
      `${cityName} Central Industrial Estate`,
      `${cityName} Highway Logistics & 3PL Park`,
      `${cityName} Urban Dark-Store Fulfilment Zone`,
      `${stateName} Regional Surface Line-Haul Hub`,
    ],
    corridors: [
      `${cityName} → Metro Express Air Lane`,
      `${stateName} Regional Priority Ground Network`,
      `National Heavy Surface Freight Corridor`,
    ],
    destSample: cityName === "Mumbai" ? "Delhi NCR" : "Mumbai",
    pincodeSample: "Origin Hub → Metro Pin",
    expressDays: "1.8 days",
    priorityDays: "2.9 days",
    surfaceDays: "4.6 days",
    pickupCutoff: "4:00 PM Daily Cutoff",
  };

  const focusList =
    Array.isArray(audience?.focus) && audience.focus.length > 0
      ? audience.focus
      : [
          "One dispatch command centre for labels & manifests",
          "15-minute scheduled parcel tracking refreshes",
          "Proactive NDR resolution before costly RTOs",
        ];

  // Dynamic Bottlenecks array tailored to audience.name & cityName
  const bottlenecks = [
    {
      problem: `Unaddressed NDRs turning into costly RTOs`,
      impact: `For ${audience.name.toLowerCase()} shipping from ${cityName}, a failed delivery attempt that sits unnoticed for 48 hours almost always returns to origindoubling freight cost.`,
      solution:
        "GrowShip surfaces delivery exceptions in one live queue the moment your carrier logs an event, giving your team context to trigger buyer re-attempts immediately.",
    },
    {
      problem: `Multi-tab chaos across courier dashboards`,
      impact: `Your ${audience.noun || "operations team"} wastes hours bouncing between Delhivery, Shiprocket, and spreadsheets just to print labels, check AWB statuses, and reconcile pickups.`,
      solution:
        "Bring every booking, batch label print, and daily handover manifest into one unified workspace while keeping your existing negotiated carrier rates.",
    },
    {
      problem: `Zero visibility on split orders & weight debits`,
      impact: `Multi-parcel orders get prematurely marked as 'Delivered' when only one box arrives, and lump-sum wallet deductions hide volumetric weight discrepancies.`,
      solution:
        "Assign independent timelines to every parcel in a split order and track 100% itemised per-shipment debits in your GrowShip wallet.",
    },
  ];

  // Dynamic Packaging Presets array
  const packagingPresets = [
    {
      label: "Standard 500g Express Flyer / Box",
      dims: "28 × 22 × 4 cm",
      deadWeight: "0.45 kg",
      volWeight: "0.49 kg",
      slab: "500g Express / Priority Slab",
      note: `Ideal for fast-moving single-unit ${audience.name.toLowerCase()} orders dispatched from ${cityName}.`,
    },
    {
      label: "1kg – 2kg Mid-Size Corrugated Carton",
      dims: "34 × 26 × 10 cm",
      deadWeight: "1.35 kg",
      volWeight: "1.76 kg",
      slab: "2kg Priority Ground Slab",
      note: "Pre-validated L×B×H dimensions prevent surprise volumetric crossover charges during carrier sorting.",
    },
    {
      label: "Multi-Box / Master Split Shipment",
      dims: "48 × 36 × 24 cm (×2+)",
      deadWeight: "6.50 kg",
      volWeight: "8.29 kg",
      slab: "Heavy Surface / Split-Order Mode",
      note: "Each carton gets its own AWB and tracking timeline; the order stays 'Partially Delivered' until all boxes arrive.",
    },
  ];

  // Interactive States
  const [copied, setCopied] = useState(false);
  const [activePresetIdx, setActivePresetIdx] = useState(0);
  const [rateMode, setRateMode] = useState("account");
  const [monthlyOrders, setMonthlyOrders] = useState(2500);
  const [openFaq, setOpenFaq] = useState(0);

  // Live Tracking Utility State
  const [trackQuery, setTrackQuery] = useState("");
  const [trackError, setTrackError] = useState("");

  // Embedded Lead-Capture Micro-Form State
  const [selectedVolume, setSelectedVolume] = useState("1,000 – 5,000");
  const [selectedSetup, setSelectedSetup] = useState("My Own Courier Account");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sampleAwb = `GRS-${cityName.slice(0, 3).toUpperCase()}-8492`;

  const handleCopyAwb = () => {
    navigator.clipboard?.writeText(sampleAwb);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    const cleaned = trackQuery.trim();
    if (!cleaned) {
      setTrackError("Please enter an AWB or Order reference to track.");
      return;
    }
    setTrackError("");
    window.location.assign(`/growship/track/${encodeURIComponent(cleaned)}`);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadEmail.trim()) return;
    setFormSubmitted(true);
  };

  // Dynamic Calculations for Interactive ROI Slider
  const hoursSavedPerMonth = Math.round((monthlyOrders * 1.4) / 60);
  const estimatedRtoPrevented = Math.round(monthlyOrders * 0.15 * 0.22);
  const estimatedMonthlySavings = (estimatedRtoPrevented * 140).toLocaleString(
    "en-IN",
  );

  // 4-Column Metric Strip Array
  const keyMetrics = [
    {
      icon: FiLayers,
      value: "1 Unified",
      label: "Dispatch Board",
      detail: `For all ${cityName} bookings, labels & manifests`,
      color: "text-[#f47721]",
      bg: "bg-orange-50",
    },
    {
      icon: FiRefreshCw,
      value: "15-Min",
      label: "Tracking Refresh",
      detail: "Scheduled syncs + real-time carrier webhooks",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: FiTrendingDown,
      value: "Every Parcel",
      label: "Split-Order Visibility",
      detail: `Track multi-box ${audience.name.toLowerCase()} orders clearly`,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: BiWallet,
      value: "100% Clear",
      label: "Shipment Billing",
      detail: "Use own carrier accounts or itemised wallet",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
  ];

  // Dynamic Account vs Wallet Comparison Data
  const rateModesData = {
    account: {
      title: `Connect your existing Delhivery & Shiprocket accounts in ${cityName}`,
      description:
        "Already negotiated commercial shipping rates for your volume? Link your direct carrier accounts in minutes. You keep your exact contract pricing while upgrading your warehouse team to GrowShip's unified workspace.",
      badge: "Bring Your Own Account (BYOA)",
      bullets: [
        {
          text: "Keep your direct negotiated carrier rates",
          tag: "Zero Markup",
        },
        {
          text: "Eliminate multi-tab switching across courier portals",
          tag: "1 Workspace",
        },
        {
          text: "Compare carrier delivery speeds across pin codes",
          tag: "Data-Driven",
        },
        {
          text: "Support multi-parcel split shipments seamlessly",
          tag: "Split Orders",
        },
      ],
    },
    wallet: {
      title: `Ship instantly from ${cityName} with the GrowShip Prepaid Wallet`,
      description:
        "Don't want the hassle of managing separate carrier contracts? Top up your GrowShip wallet and access platform shipping rates immediately. Every single shipment debit is itemised so finance and ops stay aligned.",
      badge: "Instant Platform Access",
      bullets: [
        {
          text: "Top up funds anytime and book labels immediately",
          tag: "Prepaid",
        },
        {
          text: "Clear itemised debit ledger for every single AWB",
          tag: "Audit-Ready",
        },
        {
          text: "No hidden aggregator markups or surprise deductions",
          tag: "Transparent",
        },
        {
          text: "Downloadable monthly billing reports for GST filing",
          tag: "Finance Friendly",
        },
      ],
    },
  };

  // Dynamic FAQs Array
  const dynamicFaqs = [
    {
      question: `How quickly can ${audience.name.toLowerCase()} in ${cityName} onboard onto GrowShip?`,
      answer: `Most ${cityName} operations teams complete their operational review and carrier setup within 24 hours. You first submit a quick profile of your monthly shipment volume, after which our onboarding specialist guides you through a secure, review-led KYC and account connection flow.`,
    },
    {
      question: `Can we use our own Delhivery or Shiprocket account for dispatches from ${cityName}, ${stateName}?`,
      answer: `Yes. GrowShip supports both your own connected carrier accounts (Delhivery and Shiprocket) and our prepaid platform wallet. Your ${cityName} dispatch desk uses the exact same workflow regardless of how the shipment is billed.`,
    },
    {
      question: `Can an order be sent in more than one parcel from our ${cityName} warehouse?`,
      answer: `Yes. Each parcel gets its own shipment ID, AWB label, and tracking timeline. The main order remains marked as 'partially delivered' until every single parcel is delivered to the customer.`,
    },
    {
      question: `How does GrowShip help reduce RTOs for ${audience.name.toLowerCase()}?`,
      answer: `Instead of discovering delivery failures days later, GrowShip refreshes tracking timelines on a 15-minute schedule and surfaces Non-Delivery Reports (NDRs) in one unified queue. Combined with automated customer updates via Growcord Comms, your team can resolve exceptions before an RTO is triggered.`,
    },
    {
      question: `Is GrowShip a courier company or shipping operations software?`,
      answer: `GrowShip is the shipping operations software layer built by Growcord. Physical pickups in ${cityName} and deliveries are carried out by your connected courier networks, while GrowShip gives your ${audience.noun || "team"} one command centre to book, track, and analyse every parcel.`,
    },
  ];

  const activePreset = packagingPresets[activePresetIdx] || packagingPresets[0];

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* ==========================================
          SECTION 1: HERO + LIVE LOCAL DISPATCH BOARD
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-10 pb-20 text-white sm:pt-14 sm:pb-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.16),transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* SEO Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link href="/growship" className="transition hover:text-white">
              GrowShip
            </Link>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-300">Solutions</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-200">{audience.name}</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[#f47721]">
              {cityName}, {stateName}
            </span>
          </nav>

          {/* Hero 2-Column Grid */}
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-12">
            {/* Left Column: Localized Copy */}
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff9647] backdrop-blur-md">
                <FiMapPin size={14} />
                <span>
                  {cityName}, {stateName}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-white">{audience.name}</span>
              </div>

              <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.04em] text-white sm:text-5xl lg:text-6xl">
                Shipping software for{" "}
                <span className="text-[#ff8e3c]">{audience.name}</span> in{" "}
                {cityName}.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {audience.promise}
                {/* GrowShip gives your{" "}
                {audience.noun || "operations team"} in {cityName} one shared
                command centre for everything between “packed” and
                “delivered”from bulk thermal labels and manifests to 15-minute
                tracking syncs and proactive NDR action. */}
                From your day-to-day shipping, logistics operations and shipment
                tracking, to having a responsive team on foot to address your
                issues and offer practical solutions, we endeavour to provide
                you the best and prompt services in {cityName}. All at charges
                so reasonable that they don't eat into your margins or your
                customer’s trust!
              </p>

              <div className="mt-6 flex max-w-xl items-center gap-3.5 rounded-2xl border border-white/10 bg-white/4 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f47721]/20 text-[#f47721]">
                  <FiNavigation size={20} />
                </span>
                <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
                  <strong className="text-white">Local Hub Coverage:</strong>{" "}
                  Engineered for dispatch desks across{" "}
                  <span className="font-semibold text-white">
                    {cityDetails.hubArea}
                  </span>
                  .
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#check-fit"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#061a34] shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-[#ff923f]"
                >
                  Explore your {cityName} workflow
                  <FiArrowRight size={18} />
                </a>
                <Link
                  href="/growship/pricing"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  See pricing model
                </Link>
              </div>
            </div>

            {/* Right Column: Simulated Local Dispatch Board */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white p-2.5 text-[#071d3a] shadow-2xl">
                <div className="overflow-hidden rounded-3xl border border-slate-100">
                  {/* Board Top Bar */}
                  <div className="flex items-center justify-between bg-[#081d39] px-5 py-4 text-white">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#f47721] text-xs font-black text-[#071d3a]">
                        G
                      </span>
                      <span className="text-sm font-bold">
                        {cityName} Dispatch Board
                      </span>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-bold text-emerald-300">
                      Ready to ship
                    </span>
                  </div>

                  {/* Board Content */}
                  <div className="bg-[#f8fafc] p-5 sm:p-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          {audience.name}
                        </p>
                        <p className="mt-0.5 text-lg font-black text-[#071d3a]">
                          #ORD-{cityName.slice(0, 3).toUpperCase()}-1058
                        </p>
                      </div>
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-[#e8681b]">
                        {cityDetails.pickupCutoff}
                      </span>
                    </div>

                    <div className="mt-4 space-y-3.5 text-sm">
                      <div className="flex items-start gap-3.5">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-[#f47721]">
                          <FiBox size={18} />
                        </span>
                        <div>
                          <p className="font-bold text-slate-800">
                            Verified Parcel · Pre-filled Slab
                          </p>
                          <p className="text-xs text-slate-500">
                            Origin: {cityName} ({stateName})
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600">
                          <FiTruck size={18} />
                        </span>
                        <div>
                          <p className="font-bold text-slate-800">
                            {cityName} → {cityDetails.destSample}
                          </p>
                          <p className="text-xs text-slate-500">
                            Route: {cityDetails.pincodeSample} · Median{" "}
                            {cityDetails.expressDays}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Mini Parcel Timeline */}
                    <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                      <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Automated Parcel Timeline
                      </p>
                      <div className="space-y-3">
                        {[
                          [
                            "Order synced & address verified",
                            "09:40 AM",
                            "text-emerald-600",
                          ],
                          [
                            `Label & manifest generated (${cityName})`,
                            "11:15 AM",
                            "text-[#f47721]",
                          ],
                          [
                            "15-min tracking refresh active",
                            "Auto-scheduled",
                            "text-blue-600",
                          ],
                        ].map(([stepTitle, stepTime, stepColor]) => (
                          <div
                            key={stepTitle}
                            className="flex items-center justify-between text-xs"
                          >
                            <span className="flex items-center gap-2 font-semibold text-slate-700">
                              <FiCheckCircle className={stepColor} size={14} />
                              {stepTitle}
                            </span>
                            <span className="font-medium text-slate-400">
                              {stepTime}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Copy AWB Bar */}
                    <button
                      type="button"
                      onClick={handleCopyAwb}
                      className="mt-4 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600 transition hover:border-[#f47721]"
                    >
                      <span>
                        Sample AWB:{" "}
                        <strong className="text-[#071d3a]">{sampleAwb}</strong>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[#e8681b]">
                        {copied ? (
                          <>
                            <FiCheck size={14} /> Copied
                          </>
                        ) : (
                          <>
                            <FiCopy size={14} /> Copy AWB
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==========================================
              SECTION 2: LIVE SHIPMENT TRACKING UTILITY BAR
          ========================================== */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                  Live Parcel Utility
                </p>
                <p className="mt-1 text-sm font-bold text-white sm:text-base">
                  Already dispatched an order from {cityName}? Track its live
                  carrier timeline.
                </p>
              </div>
              <form
                onSubmit={handleTrackSubmit}
                className="flex flex-col gap-3 sm:flex-row lg:col-span-7"
              >
                <div className="relative flex-1">
                  <FiSearch
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={trackQuery}
                    onChange={(e) => setTrackQuery(e.target.value)}
                    placeholder={`Enter AWB (e.g. ${sampleAwb}) or Order ID`}
                    className="w-full rounded-xl border border-white/15 bg-[#061a34]/90 px-8 py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#f47721]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-3.5 text-sm font-black text-[#061a34] shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#ff923f]"
                >
                  Track Shipment <FiArrowRight size={16} />
                </button>
              </form>
            </div>
            {trackError && (
              <p className="mt-2 text-xs text-amber-300">{trackError}</p>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: 4-COLUMN REGIONAL METRIC STRIP
      ========================================== */}
      <section className="border-b border-slate-200 bg-white px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#fbfcfe] p-6 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${metric.bg}`}
              >
                <metric.icon size={24} className={metric.color} />
              </div>
              <div>
                <p className="text-2xl font-black text-[#071d3a]">
                  {metric.value}
                </p>
                <p className="text-sm font-bold text-[#e8681b]">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  {metric.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 4: BUILT AROUND DAILY OPERATIONS (YOUR FOCUS ARRAY)
      ========================================== */}
      {/* <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              Built around daily operations
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.05] tracking-[-.045em] text-[#071d3a] sm:text-4xl">
              A shipping workflow that does not end when the label prints.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              For <strong>{audience.name}</strong> in{" "}
              <strong>{cityName}</strong>, the shipping question is rarely just
              “which courier?” It is whether your {audience.noun || "team"} can
              see the parcel, resolve an exception, and explain delivery status
              without reconstructing the story from several tools.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
            {focusList.map((focusItem, index) => {
              const IconComponent = [FiPackage, FiShield, FiTrendingUp][
                index % 3
              ];
              return (
                <article
                  key={focusItem}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 sm:p-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#e8681b]">
                    <IconComponent size={22} />
                  </span>
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      Core Pillar 0{index + 1}
                    </p>
                    <p className="mt-2 text-base font-black leading-snug text-[#071d3a]">
                      {focusItem}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* ==========================================
          SECTION 5: LOCAL INDUSTRIAL CLUSTERS & CORRIDORS
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:pb-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/30 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#e8681b]">
                <FiMapPin size={13} /> {cityName} ({stateName}) Logistics
                Footprint
              </span>
              <h2 className="mt-4 text-2xl font-black tracking-tight text-[#071d3a] sm:text-3xl">
                Engineered for warehouses & dispatch desks across {cityName}.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether your parcels leave from industrial estates, 3PL
                warehouses, or city-centre fulfilment units in {cityName},
                GrowShip keeps pickups, manifests, and NDR workflows aligned in
                one view.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3.5 py-2 text-xs font-bold text-slate-700">
                <FiBarChart2 className="text-[#f47721]" size={15} />
                Standard Handover Window: {cityDetails.pickupCutoff}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Key {cityName} Dispatch Clusters
                </p>
                <ul className="mt-4 space-y-3">
                  {cityDetails.industrialZones.map((zone) => (
                    <li
                      key={zone}
                      className="flex items-start gap-2.5 text-xs font-bold text-[#071d3a] sm:text-sm"
                    >
                      <FiCheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-[#f47721]"
                      />
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Primary Line-Haul Corridors
                </p>
                <ul className="mt-4 space-y-3">
                  {cityDetails.corridors.map((corridor) => (
                    <li
                      key={corridor}
                      className="flex items-start gap-2.5 text-xs font-bold text-[#071d3a] sm:text-sm"
                    >
                      <FiTruck
                        size={16}
                        className="mt-0.5 shrink-0 text-blue-600"
                      />
                      <span>{corridor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 6: INDUSTRY BOTTLENECKS VS GROWSHIP
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Why {cityName} Teams Upgrade
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-[-.04em] text-[#071d3a] sm:text-5xl">
            Eliminate the 3 biggest leaks in your {audience.name.toLowerCase()}{" "}
            operations.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {bottlenecks.map((item, i) => (
            <article
              key={i}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/40 transition duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">
                    <FiAlertCircle size={14} /> Bottleneck 0{i + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {cityName} Ops
                  </span>
                </div>

                <h3 className="text-xl font-black text-[#071d3a]">
                  {item.problem}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.impact}
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  The GrowShip Fix
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#071d3a]">
                  {item.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 7: INTERACTIVE PACKAGING & VOLUMETRIC PRESETS
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
              <FiPackage size={14} /> Dimension & Weight Slab Presets
            </span>
            <h2 className="mt-4 text-2xl font-black text-[#071d3a] sm:text-4xl">
              Pre-configured box & flyer slabs for {audience.name.toLowerCase()}
              .
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Stop entering L×B×H dimensions manually for every shipment in{" "}
              {cityName}. Explore how GrowShip standardises parcel templates to
              prevent volumetric weight surprises.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {packagingPresets.map((preset, idx) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => setActivePresetIdx(idx)}
                className={`rounded-xl border px-5 py-3 text-xs sm:text-sm font-bold transition ${
                  activePresetIdx === idx
                    ? "border-[#061a34] bg-[#061a34] text-white shadow-md"
                    : "border-slate-200 bg-[#f8fafc] text-slate-600 hover:border-slate-300 hover:text-[#071d3a]"
                }`}
              >
                0{idx + 1}. {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 rounded-3xl border border-slate-100 bg-[#f8fafc] p-6 sm:grid-cols-4 sm:p-8">
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Standard Dimensions
              </p>
              <p className="mt-2 text-xl font-black text-[#071d3a]">
                {activePreset.dims}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Pre-filled on dispatch board
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Dead vs. Volumetric
              </p>
              <p className="mt-2 text-xl font-black text-[#e8681b]">
                {activePreset.deadWeight} / {activePreset.volWeight}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Formula: L × B × H / 5000
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Recommended Carrier Slab
              </p>
              <p className="mt-2 text-lg font-black text-emerald-600">
                {activePreset.slab}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Itemised in wallet ledger
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-[#061a34] p-5 text-white">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#ff9647]">
                Warehouse Packing Note
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                {activePreset.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: HOW THE DAY STAYS UNDER CONTROL (4 STEPS)
      ========================================== */}
      <section className="border-y border-slate-200 bg-[#f1f5fa] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              How the day stays under control
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
              Four clear stages from order sync to doorstep delivery.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Start ready",
                `Bring your ${cityName} orders, verified addresses, and parcel dimensions straight into the dispatch flow.`,
              ],
              [
                "Create & print",
                "Choose the right carrier service, book the AWB, and print single or batch thermal labels in one click.",
              ],
              [
                "Handover clearly",
                "Generate barcode-verified daily pickup manifests so every parcel handed to the driver is accounted for.",
              ],
              [
                "Follow through",
                "Monitor 15-minute tracking refreshes, act on NDR exceptions early, and treat delivery as a verified milestone.",
              ],
            ].map(([title, text], index) => (
              <article
                key={title}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm"
              >
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#061a34] text-xs font-black text-[#f47721]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black text-[#071d3a]">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: INTERACTIVE ACCOUNT VS WALLET SWITCHER
      ========================================== */}
      <section className="border-b border-[#f2decf] bg-[#fff8f2] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
                Flexible Carrier Billing
              </p>
              <h2 className="mt-4 text-balance text-3xl font-black leading-[1.08] tracking-[-.04em] text-[#071d3a] sm:text-4xl">
                Your accounts, or ours. One seamless workflow.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-700">
                Whether your {cityName} business has direct commercial contracts
                with Delhivery and Shiprocket or prefers instant prepaid
                platform rates, your daily dispatch process stays identical.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-4xl border border-[#efd6c2] bg-white p-3 shadow-xl sm:p-5">
                <div className="grid grid-cols-1 gap-2 rounded-2xl bg-slate-100 p-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setRateMode("account")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                      rateMode === "account"
                        ? "bg-[#061a34] text-white shadow-md"
                        : "text-slate-600 hover:text-[#071d3a]"
                    }`}
                  >
                    <FiPlay size={15} className="text-[#f47721]" />
                    My Courier Accounts (Delhivery / Shiprocket)
                  </button>
                  <button
                    type="button"
                    onClick={() => setRateMode("wallet")}
                    className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                      rateMode === "wallet"
                        ? "bg-[#061a34] text-white shadow-md"
                        : "text-slate-600 hover:text-[#071d3a]"
                    }`}
                  >
                    <BiWallet size={17} className="text-[#f47721]" />
                    GrowShip Prepaid Wallet
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#e8681b]">
                    {rateModesData[rateMode].badge}
                  </span>
                  <h3 className="mt-3 text-2xl font-black text-[#071d3a]">
                    {rateModesData[rateMode].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {rateModesData[rateMode].description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {rateModesData[rateMode].bullets.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5"
                      >
                        <div className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <FiCheck size={12} strokeWidth={3} />
                          </span>
                          <span className="text-xs font-bold text-slate-700">
                            {b.text}
                          </span>
                        </div>
                        <span className="shrink-0 rounded border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500">
                          {b.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 10: OLD WAY VS GROWSHIP COMPARISON MATRIX
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Operational Comparison
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Fragmented courier tabs vs. GrowShip in {cityName}.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            See why scaling {audience.name.toLowerCase()} upgrade from manual
            spreadsheets and basic shipping portals.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-170 text-left text-sm">
              <thead className="bg-[#061a34] text-xs font-bold uppercase tracking-wider text-white">
                <tr>
                  <th className="py-5 pl-6 pr-4 sm:pl-8">Operational Area</th>
                  <th className="px-4 py-5 text-slate-300">
                    Fragmented Courier Portals
                  </th>
                  <th className="py-5 pl-4 pr-6 text-[#ff9647] sm:pr-8">
                    GrowShip Command Centre
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.capability}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="py-5 pl-6 pr-4 font-black text-[#071d3a] sm:pl-8">
                      {row.capability}
                    </td>
                    <td className="px-4 py-5 text-slate-500">{row.legacy}</td>
                    <td className="py-5 pl-4 pr-6 font-semibold text-[#071d3a] sm:pr-8">
                      <span className="inline-flex items-start gap-2">
                        <FiCheckCircle
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                        <span>{row.growship}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 11: CITY DELIVERY SLA BENCHMARK & ANALYTICS
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="rounded-[2.5rem] bg-[#061a34] p-6 text-white shadow-2xl sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
                {cityName} Outbound Lane Intelligence
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-[1.08] tracking-[-.04em] sm:text-4xl">
                Route parcels based on real median speeds, not carrier
                guesswork.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                GrowShip analyses historical tracking events from{" "}
                <strong className="text-white">
                  {cityName}, {stateName}
                </strong>{" "}
                across thousands of pin codes so your{" "}
                {audience.noun || "operations team"} can compare Express Air,
                Priority Ground, and Surface timelines with hard evidence.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Primary Hub Zones</p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {cityDetails.hubArea}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Benchmark Lane</p>
                  <p className="mt-1 text-sm font-bold text-[#ff9647]">
                    {cityName} → {cityDetails.destSample} (
                    {cityDetails.pincodeSample})
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#0b294d] p-6 sm:p-8 lg:col-span-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm font-bold text-white">
                    Outbound Transit Distribution ({cityName})
                  </p>
                  <p className="text-xs text-slate-400">
                    90-day rolling illustrative view for {audience.name}
                  </p>
                </div>
                <MdAutoGraph size={24} className="text-[#f47721]" />
              </div>

              <div className="mt-6 space-y-6">
                {[
                  {
                    mode: "Express Air Service",
                    median: cityDetails.expressDays,
                    width: "w-[82%]",
                    barColor: "bg-[#f47721]",
                    useCase: "Best for urgent, high-value & metro orders",
                  },
                  {
                    mode: "Priority Ground / Regional",
                    median: cityDetails.priorityDays,
                    width: "w-[64%]",
                    barColor: "bg-blue-400",
                    useCase: "Balanced speed & cost for Tier-1/Tier-2",
                  },
                  {
                    mode: "Standard Surface Heavy",
                    median: cityDetails.surfaceDays,
                    width: "w-[45%]",
                    barColor: "bg-emerald-400",
                    useCase: "Ideal for multi-kg & split-order cartons",
                  },
                ].map((lane) => (
                  <div key={lane.mode}>
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{lane.mode}</span>
                      <span className="font-semibold text-[#ff9647]">
                        Median: {lane.median}
                      </span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${lane.width} ${lane.barColor}`}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-400">
                      {lane.useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 12: INTERACTIVE ROI & TIME CALCULATOR
      ========================================== */}
      <section
        id="roi-calculator"
        className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8"
      >
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#e8681b]">
                <FiSliders size={14} /> Interactive Operations Calculator
              </div>
              <h2 className="mt-4 text-3xl font-black text-[#071d3a] sm:text-4xl">
                Estimate your monthly savings in {cityName}.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Drag the slider to match your monthly{" "}
                <strong>{audience.name.toLowerCase()}</strong> shipment volume.
                See how much warehouse desk time and RTO freight leakage your
                team can recover.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="order-slider"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500"
                  >
                    Monthly {cityName} Shipments
                  </label>
                  <span className="rounded-lg bg-[#061a34] px-3 py-1 text-lg font-black text-[#f47721]">
                    {monthlyOrders.toLocaleString("en-IN")} orders/mo
                  </span>
                </div>

                <input
                  id="order-slider"
                  type="range"
                  min={200}
                  max={15000}
                  step={100}
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="mt-5 h-2.5 w-full cursor-pointer appearance-none rounded-lg accent-[#f47721]"
                />
                <div className="mt-2 flex justify-between text-[11px] font-semibold text-slate-400">
                  <span>200 / mo</span>
                  <span>5,000 / mo</span>
                  <span>10,000 / mo</span>
                  <span>15,000+ / mo</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-6">
              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ops Desk Time Saved
                </p>
                <p className="mt-3 text-3xl font-black text-[#071d3a]">
                  {hoursSavedPerMonth} hrs
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Saved monthly via 1-click bulk labels & manifests
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#f8fafc] p-6 text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  RTO Parcels Prevented
                </p>
                <p className="mt-3 text-3xl font-black text-emerald-600">
                  ~{estimatedRtoPrevented}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Recovered via early NDR action & buyer alerts
                </p>
              </div>

              <div className="rounded-2xl bg-[#061a34] p-6 text-center text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                  Est. Freight Saved
                </p>
                <p className="mt-3 text-3xl font-black text-white">
                  ₹{estimatedMonthlySavings}
                </p>
                <p className="mt-2 text-xs text-slate-300">
                  Monthly forward + reverse shipping cost protected
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 13: 24-HOUR MIGRATION + EMBEDDED LEAD FORM
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Zero-Downtime Onboarding
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Go live in {cityName} in 24 hours without pausing dispatch.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MIGRATION_TIMELINE.map((step) => (
            <div
              key={step.time}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-orange-50 px-3 py-1 text-xs font-black uppercase tracking-wider text-[#e8681b]">
                  {step.time}
                </span>
                <step.icon size={20} className="text-[#071d3a]" />
              </div>
              <h3 className="mt-4 text-lg font-black text-[#071d3a]">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="check-fit"
        className="mx-auto max-w-5xl px-5 py-16 sm:py-24 lg:px-8"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
          <div className="bg-[#061a34] px-6 py-10 text-center text-white sm:px-12">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              For teams shipping from {cityName}, {stateName}
            </p>
            <h2 className="mt-3 text-2xl font-black sm:text-4xl">
              See whether GrowShip fits your {audience.name.toLowerCase()}{" "}
              operating model.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-300">
              No public document uploads required right now. Tell us your volume
              and preferred carrier setupour operations team will prepare your{" "}
              {cityName} workflow review.
            </p>
          </div>

          <div className="p-6 sm:p-12">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <FiCheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-black text-[#071d3a]">
                  Workflow review requested for {cityName} ({audience.name})
                </h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                  We have logged your{" "}
                  <strong>{selectedVolume} monthly orders</strong> profile under{" "}
                  <strong>{leadEmail}</strong>. Proceed to complete your
                  application or send us a direct note.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://growship.in/start"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#d45a15]"
                  >
                    Continue to GrowShip Start <FiArrowRight size={18} />
                  </a>
                  <a
                    href={`mailto:contact@growcord.com?subject=GrowShip%20workflow%20review%20for%20${encodeURIComponent(
                      audience.name + " in " + cityName,
                    )}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                  >
                    Email Operations Desk
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    1. Select Monthly Shipment Volume from {cityName}
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      "Under 1,000",
                      "1,000 – 5,000",
                      "5,000 – 15,000",
                      "15,000+ Orders",
                    ].map((vol) => (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setSelectedVolume(vol)}
                        className={`rounded-xl border px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                          selectedVolume === vol
                            ? "border-[#f47721] bg-orange-50 text-[#071d3a] ring-2 ring-[#f47721]/20"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Preferred Carrier Billing Mode
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      "My Own Courier Account",
                      "GrowShip Prepaid Wallet",
                      "Both (Hybrid Setup)",
                    ].map((mode) => (
                      <button
                        type="button"
                        key={mode}
                        onClick={() => setSelectedSetup(mode)}
                        className={`rounded-xl border px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                          selectedSetup === mode
                            ? "border-[#061a34] bg-[#061a34] text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="work-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      3. Work Email *
                    </label>
                    <input
                      id="work-email"
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="ops@yourbrand.in"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-[#071d3a] outline-none focus:border-[#f47721] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone-num"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      4. WhatsApp / Phone Number
                    </label>
                    <input
                      id="phone-num"
                      type="tel"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-[#071d3a] outline-none focus:border-[#f47721] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
                  <p className="text-xs text-slate-500">
                    Applying for:{" "}
                    <strong className="text-[#071d3a]">
                      {audience.name} · {cityName}, {stateName}
                    </strong>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#d45a15] sm:w-auto"
                  >
                    Request a workflow review
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 14: DYNAMIC FAQs + SPIDERWEB INTERNAL LINKING
      ========================================== */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            {cityName} Operations FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Common questions from {audience.name.toLowerCase()} in {cityName}.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-4xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          {dynamicFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                >
                  <span className="text-base font-bold text-[#071d3a] sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? "bg-orange-50 text-[#f47721]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <FiChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spiderweb Internal Linking Hub (Powered directly by @/data/growship arrays) */}
      <section className="border-t border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Other Cities for same Segment */}
          {allCities.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#071d3a]">
                {audience.name} Shipping Software Across Indian Hubs
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {allCities
                  .filter((c) => c.slug !== citySlugParam)
                  .slice(0, 12)
                  .map((cityObj) => (
                    <Link
                      key={cityObj.slug}
                      href={`/growship/solutions/${segmentSlug}/${cityObj.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-[#fbfcfe] px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-[#f47721] hover:text-[#e8681b]"
                    >
                      <FiMapPin size={12} className="text-[#f47721]" />
                      {audience.name} in {cityObj.name}
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Other Segments in the same City */}
          {allSegments.length > 0 && (
            <div>
              <h3 className="text-sm font-black uppercase tracking-wider text-[#071d3a]">
                Other Shipping Solutions We Power in {cityName}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {allSegments
                  .filter((seg) => seg.slug !== segmentSlug)
                  .map((segObj) => (
                    <Link
                      key={segObj.slug}
                      href={`/growship/solutions/${segObj.slug}/${citySlugParam}`}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-[#fbfcfe] px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-[#061a34] hover:bg-[#061a34] hover:text-white"
                    >
                      {segObj.name} in {cityName}
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dark Premium Footer CTA */}
      <section className="px-5 pb-20 pt-10 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Ready to upgrade your {cityName} dispatch desk?
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <a
              href="https://growship.in/start"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-[#ff8a3d] sm:w-auto"
            >
              Start shipping
              <FiArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
