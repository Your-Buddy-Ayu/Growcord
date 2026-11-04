"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiCopy,
  FiFileText,
  FiLayers,
  FiMapPin,
  FiMessageSquare,
  FiNavigation,
  FiPackage,
  FiPhoneCall,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiTruck,
  FiZap,
} from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";

// ==========================================
// 1. MASTER DEMO SCENARIOS (ARRAY-DRIVEN)
// ==========================================

const DEMO_SCENARIOS = {
  "GRS-MUM-8492": {
    awb: "GRS-MUM-8492",
    orderId: "#ORD-MUM-10584",
    scenarioLabel: "1. Standard In-Transit",
    statusBadge: "Out for Delivery",
    statusColor: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    lightStatusColor: "bg-blue-50 text-blue-700 border-blue-200",
    carrier: "Delhivery Express Air",
    billingRoute: "Route 01 · Own Delhivery A/c",
    origin: "Bhiwandi Hub, Mumbai (400093)",
    destination: "Indiranagar, Bengaluru (560038)",
    eta: "Today by 6:30 PM",
    medianLaneSpeed: "1.6 Days (Metro Air Lane)",
    paymentMode: "Prepaid · Verified",
    lastSync: "Synced 3 mins ago · Next refresh in 12 mins",
    isSplitOrder: false,
    hasNdrException: false,
    parcels: [
      {
        boxId: "Parcel 1 of 1",
        boxAwb: "GRS-MUM-8492",
        boxStatus: "Out for Delivery",
        contents: "2 Cotton Kurtas & Denim · 0.85 kg",
        dimensions: "30 × 25 × 4 cm (Tamper-evident flyer)",
        chargeableSlab: "1.0 kg Express Slab",
        events: [
          {
            title: "Out for Delivery with Rider (Ramesh K.)",
            location: "Indiranagar Last-Mile Hub, Bengaluru",
            time: "Today, 09:15 AM",
            tag: "Growcord Comms WhatsApp Sent",
            completed: true,
            active: true,
          },
          {
            title: "Arrived at Destination Sorting Facility",
            location: "Hoskote Mega Hub, Bengaluru",
            time: "Today, 04:40 AM",
            tag: "15-Min Auto Sync",
            completed: true,
            active: false,
          },
          {
            title: "In Transit  Line-Haul Flight Departed",
            location: "CSMIA Air Cargo Terminal, Mumbai",
            time: "Yesterday, 10:20 PM",
            tag: "On-Schedule SLA",
            completed: true,
            active: false,
          },
          {
            title: "Picked Up & Manifest Verified",
            location: "Bhiwandi Warehousing Belt, Mumbai",
            time: "Yesterday, 04:10 PM",
            tag: "Manifest #MNF-8821 Signed",
            completed: true,
            active: false,
          },
          {
            title: "Shipment Created & Thermal Label Printed",
            location: "GrowShip Dispatch Command Centre",
            time: "Yesterday, 11:30 AM",
            tag: "Pre-filled 1kg Slab",
            completed: true,
            active: false,
          },
        ],
      },
    ],
  },

  "DLV-SPLIT-904": {
    awb: "DLV-SPLIT-904",
    orderId: "#ORD-B2B-9040 (Split Order · 2 Boxes)",
    scenarioLabel: "2. Multi-Parcel Split Order",
    statusBadge: "Partially Delivered (1 of 2 Boxes)",
    statusColor: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    lightStatusColor: "bg-amber-50 text-amber-800 border-amber-200",
    carrier: "Delhivery Priority Surface",
    billingRoute: "Route 01 · Own Delhivery A/c",
    origin: "Okhla Phase II, Delhi NCR (110020)",
    destination: "Banjara Hills, Hyderabad (500034)",
    eta: "Box 1 Delivered · Box 2 Arriving Tomorrow",
    medianLaneSpeed: "2.8 Days (Priority Ground)",
    paymentMode: "Prepaid Commercial Invoice",
    lastSync: "Synced 5 mins ago · Next refresh in 10 mins",
    isSplitOrder: true,
    hasNdrException: false,
    parcels: [
      {
        boxId: "Parcel 1 of 2 (Delivered)",
        boxAwb: "DLV-SPLIT-904-A",
        boxStatus: "Delivered to Buyer",
        contents: "Handcrafted Ceramic Lamp Base · 3.20 kg",
        dimensions: "40 × 32 × 25 cm (5-Ply Cushioned Carton)",
        chargeableSlab: "5.0 kg Surface Slab",
        events: [
          {
            title: "Parcel 1 Delivered  Signed by Security/Buyer",
            location: "Banjara Hills, Hyderabad",
            time: "Today, 11:05 AM",
            tag: "POD Verified · Master Order kept 'Partially Delivered'",
            completed: true,
            active: true,
          },
          {
            title: "Out for Delivery (Box 1 of 2)",
            location: "Madhapur Hub, Hyderabad",
            time: "Today, 08:30 AM",
            tag: "Buyer alerted of Split Delivery",
            completed: true,
            active: false,
          },
          {
            title: "Dispatched from Origin Warehouse",
            location: "Okhla Phase II Hub, New Delhi",
            time: "2 Days Ago, 04:45 PM",
            tag: "Manifest #MNF-9012",
            completed: true,
            active: false,
          },
        ],
      },
      {
        boxId: "Parcel 2 of 2 (In Transit)",
        boxAwb: "DLV-SPLIT-904-B",
        boxStatus: "In Transit · Arriving Tomorrow",
        contents: "Linen Lamp Shade & Brass Fittings · 1.80 kg",
        dimensions: "45 × 45 × 30 cm (Volumetric Box)",
        chargeableSlab: "6.0 kg Volumetric Slab",
        events: [
          {
            title:
              "Arrived at Destination Hub  Scheduled for Next-Day Dispatch",
            location: "Shamshabad Mega Facility, Hyderabad",
            time: "Today, 10:15 AM",
            tag: "15-Min Auto Sync",
            completed: true,
            active: true,
          },
          {
            title: "Crossed Nagpur Line-Haul Checkpost",
            location: "NH-44 Central Spine Corridor",
            time: "Yesterday, 06:20 PM",
            tag: "On-Schedule",
            completed: true,
            active: false,
          },
          {
            title: "Picked Up from Secondary Studio Warehouse",
            location: "Noida Sector 63, Delhi NCR",
            time: "2 Days Ago, 05:30 PM",
            tag: "Linked to #ORD-B2B-9040",
            completed: true,
            active: false,
          },
        ],
      },
    ],
  },

  "NDR-SRT-4410": {
    awb: "NDR-SRT-4410",
    orderId: "#ORD-SRT-4410",
    scenarioLabel: "3. NDR Exception (Action Needed)",
    statusBadge: "NDR Action Required · Attempt 1 Failed",
    statusColor: "bg-rose-500/20 text-rose-300 border-rose-400/30",
    lightStatusColor: "bg-rose-50 text-rose-700 border-rose-200",
    carrier: "Shiprocket Surface Network",
    billingRoute: "Route 02 · GrowShip Prepaid Wallet",
    origin: "Sachin GIDC, Surat (395002)",
    destination: "Kothrud, Pune (411038)",
    eta: "Pending Buyer Re-attempt Confirmation",
    medianLaneSpeed: "2.4 Days (Western Corridor)",
    paymentMode: "COD · ₹1,499 Collectible",
    lastSync: "Exception caught 4 mins ago via Webhook",
    isSplitOrder: false,
    hasNdrException: true,
    ndrReason:
      "Carrier Remark: 'Customer Unavailable / Door Locked at 1:15 PM'",
    parcels: [
      {
        boxId: "Parcel 1 of 1",
        boxAwb: "NDR-SRT-4410",
        boxStatus: "NDR Exception Logged",
        contents: "Festive Ethnic Kurta Set · 0.70 kg",
        dimensions: "30 × 25 × 5 cm (Flyer)",
        chargeableSlab: "1.0 kg Priority Slab",
        events: [
          {
            title: "Delivery Attempt Failed (NDR Logged by Rider)",
            location: "Kothrud Delivery Centre, Pune",
            time: "Today, 01:15 PM",
            tag: "GrowShip NDR Queue Triggered + WhatsApp Sent",
            completed: true,
            active: true,
          },
          {
            title: "Out for Delivery (Attempt 1)",
            location: "Kothrud Delivery Centre, Pune",
            time: "Today, 09:05 AM",
            tag: "COD Reminder Sent",
            completed: true,
            active: false,
          },
          {
            title: "Reached Destination Hub",
            location: "Chakan Sorting Hub, Pune",
            time: "Yesterday, 11:40 PM",
            tag: "15-Min Auto Sync",
            completed: true,
            active: false,
          },
          {
            title: "Dispatched from Surat Textile Hub",
            location: "Ring Road / Sachin GIDC, Surat",
            time: "2 Days Ago, 03:30 PM",
            tag: "Wallet Debit: ₹68.00 (Itemised)",
            completed: true,
            active: false,
          },
        ],
      },
    ],
  },

  "GRS-DEL-1058": {
    awb: "GRS-DEL-1058",
    orderId: "#ORD-DEL-1058",
    scenarioLabel: "4. Completed Delivery",
    statusBadge: "Delivered · Milestone Verified",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    lightStatusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    carrier: "Delhivery Express Air",
    billingRoute: "Route 02 · GrowShip Prepaid Wallet",
    origin: "Peenya Phase II, Bengaluru (560058)",
    destination: "Vasant Kunj, New Delhi (110070)",
    eta: "Delivered in 1.6 Days (Beat 2-Day SLA)",
    medianLaneSpeed: "1.6 Days (Metro Express)",
    paymentMode: "Prepaid · Itemised Wallet",
    lastSync: "Final milestone locked & archived",
    isSplitOrder: false,
    hasNdrException: false,
    parcels: [
      {
        boxId: "Parcel 1 of 1",
        boxAwb: "GRS-DEL-1058",
        boxStatus: "Delivered",
        contents: "Glass Serum Kit & Cleanser · 0.45 kg",
        dimensions: "18 × 14 × 6 cm (Honeycomb Padded Box)",
        chargeableSlab: "500g Base Air Slab",
        events: [
          {
            title: "Delivered to Buyer (OTP Verified)",
            location: "Vasant Kunj, New Delhi",
            time: "Today, 12:10 PM",
            tag: "Delivered Notification Sent via Growcord Comms",
            completed: true,
            active: true,
          },
          {
            title: "Out for Delivery",
            location: "Okhla Last-Mile Hub, New Delhi",
            time: "Today, 08:50 AM",
            tag: "15-Min Auto Sync",
            completed: true,
            active: false,
          },
          {
            title: "Landed at IGIA Cargo Terminal",
            location: "New Delhi Airport Hub",
            time: "Yesterday, 11:15 PM",
            tag: "Express Air Line-Haul",
            completed: true,
            active: false,
          },
          {
            title: "Picked Up from Bengaluru Warehouse",
            location: "Peenya Industrial Area, Bengaluru",
            time: "Yesterday, 03:45 PM",
            tag: "Manifest #MNF-7740",
            completed: true,
            active: false,
          },
        ],
      },
    ],
  },
};

const TRACKING_FAQS = [
  {
    q: "How often does GrowShip refresh parcel tracking events?",
    a: "GrowShip runs a scheduled tracking sync every 15 minutes across active shipments and also ingests real-time webhook pushes from connected carriers like Delhivery and Shiprocket.",
  },
  {
    q: "Why does my order show 'Partially Delivered' instead of 'Delivered'?",
    a: "When an order is packed into multiple boxes (a split shipment), GrowShip assigns a unique AWB and timeline to each parcel. To prevent confusion for your customer and support team, the parent order stays marked as 'Partially Delivered' until every single box arrives.",
  },
  {
    q: "What happens when a delivery attempt fails (NDR)?",
    a: "Instead of hiding failed attempts in a spreadsheet days later, GrowShip surfaces the Non-Delivery Report (NDR) immediately on the tracking timeline and hands off the event to Growcord Comms so the buyer can confirm a re-attempt or update their landmark.",
  },
  {
    q: "Can our brand use this tracking experience with our own courier accounts?",
    a: "Yes. Whether you ship using your own Delhivery or Shiprocket account (Route 01) or the GrowShip prepaid wallet (Route 02), every shipment gets this exact unified timeline and exception workflow.",
  },
];

export default function TrackClientView({ initialAwb = "GRS-MUM-8492" }) {
  // Determine if initialAwb matches a preset scenario or is a custom user-entered AWB
  const normalizedInitial = initialAwb.trim().toUpperCase();

  const [currentAwbKey, setCurrentAwbKey] = useState(
    DEMO_SCENARIOS[normalizedInitial] ? normalizedInitial : "GRS-MUM-8492",
  );
  const [customDisplayAwb, setCustomDisplayAwb] = useState(normalizedInitial);
  const [searchInput, setSearchInput] = useState(normalizedInitial);
  const [selectedBoxIdx, setSelectedBoxIdx] = useState(0);
  const [copiedAwb, setCopiedAwb] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Interactive NDR Resolution State
  const [ndrActionChoice, setNdrActionChoice] = useState(
    "Re-attempt Tomorrow (Buyer Confirmed)",
  );
  const [ndrLandmarkNote, setNdrLandmarkNote] = useState("");
  const [ndrSubmitted, setNdrSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  const activeScenario =
    DEMO_SCENARIOS[currentAwbKey] || DEMO_SCENARIOS["GRS-MUM-8492"];

  const safeBoxIdx =
    selectedBoxIdx < activeScenario.parcels.length ? selectedBoxIdx : 0;
  const activeParcel = activeScenario.parcels[safeBoxIdx];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const cleaned = searchInput.trim().toUpperCase();
    if (!cleaned) return;
    setCustomDisplayAwb(cleaned);
    setSelectedBoxIdx(0);
    setNdrSubmitted(false);

    if (DEMO_SCENARIOS[cleaned]) {
      setCurrentAwbKey(cleaned);
    } else if (cleaned.includes("SPLIT")) {
      setCurrentAwbKey("DLV-SPLIT-904");
    } else if (cleaned.includes("NDR")) {
      setCurrentAwbKey("NDR-SRT-4410");
    } else if (cleaned.includes("DEL")) {
      setCurrentAwbKey("GRS-DEL-1058");
    } else {
      setCurrentAwbKey("GRS-MUM-8492");
    }
  };

  const handleScenarioSwitch = (key) => {
    setCurrentAwbKey(key);
    setCustomDisplayAwb(key);
    setSearchInput(key);
    setSelectedBoxIdx(0);
    setNdrSubmitted(false);
  };

  const handleManualSync = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 700);
  };

  const handleCopyAwb = () => {
    navigator.clipboard?.writeText(customDisplayAwb);
    setCopiedAwb(true);
    setTimeout(() => setCopiedAwb(false), 1800);
  };

  const handleNdrSubmit = (e) => {
    e.preventDefault();
    setNdrSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* ==========================================
          SECTION 1: DARK HERO + AWB SEARCH & SCENARIO SWITCHER
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-12 pb-20 text-white sm:pt-16 sm:pb-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.18),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link href="/growship" className="transition hover:text-white">
              GrowShip
            </Link>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-300">Live Parcel Tracking</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[#f47721]">
              {customDisplayAwb}
            </span>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                <FiRefreshCw
                  size={13}
                  className={isRefreshing ? "animate-spin" : ""}
                />
                15-Minute Scheduled Carrier Sync
              </div>

              <h1 className="text-balance text-3xl font-black leading-[1.06] tracking-[-.04em] text-white sm:text-5xl">
                Unified Shipment & Parcel Timeline
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Track single shipments, multi-parcel split orders, and real-time
                NDR exceptions across Delhivery, Shiprocket, and GrowShip wallet
                lanes from one clean view.
              </p>
            </div>

            {/* Live AWB Search Input */}
            <div className="lg:col-span-5">
              <form
                onSubmit={handleSearchSubmit}
                className="flex flex-col gap-2.5 rounded-2xl border border-white/15 bg-white/[0.06] p-2.5 backdrop-blur-md sm:flex-row"
              >
                <div className="relative flex-1">
                  <FiSearch
                    size={16}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Enter AWB or Order ID (e.g. GRS-MUM-8492)"
                    className="w-full rounded-xl bg-[#041226] py-3.5 pl-11 pr-4 font-mono text-sm font-bold text-white outline-none placeholder:font-sans placeholder:font-normal placeholder:text-slate-400 focus:ring-2 focus:ring-[#f47721]"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-3.5 text-sm font-black text-[#061a34] transition hover:bg-[#ff923f]"
                >
                  Track <FiArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Interactive Scenario Switcher Pills (Great for B2B Demo Visitors) */}
          <div className="mt-10 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-6">
            <span className="mr-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Inspect Live Scenarios:
            </span>
            {Object.entries(DEMO_SCENARIOS).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => handleScenarioSwitch(key)}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition ${
                  currentAwbKey === key
                    ? "bg-[#f47721] text-[#061a34] shadow-lg"
                    : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.scenarioLabel} ({key})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: MAIN TRACKING COMMAND BOARD
      ========================================== */}
      <section className="mx-auto -mt-10 max-w-7xl px-5 pb-16 sm:pb-24 lg:px-8">
        <div className="relative z-20 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
          {/* Top Summary Header Bar */}
          <div className="flex flex-col justify-between gap-6 border-b border-slate-200 bg-[#f8fafc] p-6 sm:p-8 lg:flex-row lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-2xl font-black text-[#071d3a] sm:text-3xl">
                  {customDisplayAwb}
                </span>
                <button
                  type="button"
                  onClick={handleCopyAwb}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-600 transition hover:border-[#f47721] hover:text-[#e8681b]"
                >
                  {copiedAwb ? (
                    <>
                      <FiCheck size={13} className="text-emerald-600" /> Copied
                    </>
                  ) : (
                    <>
                      <FiCopy size={13} /> Copy AWB
                    </>
                  )}
                </button>
                <span
                  className={`rounded-full border px-3.5 py-1 text-xs font-black ${activeScenario.lightStatusColor}`}
                >
                  {activeScenario.statusBadge}
                </span>
              </div>

              <p className="mt-2 text-xs font-semibold text-slate-500 sm:text-sm">
                Order Reference:{" "}
                <strong className="text-[#071d3a]">
                  {activeScenario.orderId}
                </strong>{" "}
                · Carrier:{" "}
                <strong className="text-[#071d3a]">
                  {activeScenario.carrier}
                </strong>{" "}
                · {activeScenario.billingRoute}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-right">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Estimated Delivery / SLA
                </p>
                <p className="text-sm font-black text-[#071d3a]">
                  {activeScenario.eta}
                </p>
              </div>

              <button
                type="button"
                onClick={handleManualSync}
                className="inline-flex items-center gap-2 rounded-xl bg-[#061a34] px-4 py-3.5 text-xs font-bold text-white transition hover:bg-[#0b294d]"
              >
                <FiRefreshCw
                  size={15}
                  className={`text-[#f47721] ${
                    isRefreshing ? "animate-spin" : ""
                  }`}
                />
                {isRefreshing ? "Syncing Carrier..." : "Sync Now"}
              </button>
            </div>
          </div>

          {/* 4-Column Route & Attribute Strip */}
          <div className="grid grid-cols-1 divide-y divide-slate-200 border-b border-slate-200 bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            <div className="p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Origin Dispatch Hub
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-black text-[#071d3a]">
                <FiMapPin className="shrink-0 text-[#f47721]" size={16} />
                {activeScenario.origin}
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Destination Pin & City
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-black text-[#071d3a]">
                <FiNavigation className="shrink-0 text-blue-600" size={16} />
                {activeScenario.destination}
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                90-Day Lane Intelligence
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-black text-emerald-700">
                <MdAutoGraph className="shrink-0 text-emerald-600" size={18} />
                Median: {activeScenario.medianLaneSpeed}
              </p>
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Payment & Charge Trail
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-sm font-black text-[#071d3a]">
                <BiWallet className="shrink-0 text-[#e8681b]" size={17} />
                {activeScenario.paymentMode}
              </p>
            </div>
          </div>

          {/* SPLIT-ORDER MULTI-PARCEL SELECTOR BAR (IF SPLIT ORDER) */}
          {activeScenario.isSplitOrder && (
            <div className="border-b border-amber-200 bg-amber-50/70 px-6 py-4 sm:px-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                    <FiLayers size={17} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-amber-900">
                      Multi-Parcel Split Shipment Active
                    </p>
                    <p className="text-xs text-amber-800">
                      This order is packed across{" "}
                      <strong>{activeScenario.parcels.length} boxes</strong>.
                      GrowShip keeps the order marked{" "}
                      <strong>Partially Delivered</strong> until every box
                      completes its timeline.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {activeScenario.parcels.map((parcel, idx) => (
                    <button
                      key={parcel.boxAwb}
                      type="button"
                      onClick={() => setSelectedBoxIdx(idx)}
                      className={`rounded-xl px-4 py-2.5 text-xs font-black transition ${
                        safeBoxIdx === idx
                          ? "bg-[#061a34] text-white shadow-md"
                          : "border border-amber-300 bg-white text-[#071d3a] hover:bg-amber-100"
                      }`}
                    >
                      {parcel.boxId} · {parcel.boxAwb}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Main Body: Left Timeline + Right Parcel/NDR Context */}
          <div className="grid grid-cols-1 gap-10 p-6 sm:p-10 lg:grid-cols-12">
            {/* Left 7 Cols: Chronological Milestone Timeline */}
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-[#071d3a]">
                    Chronological Carrier Events ({activeParcel.boxId})
                  </h2>
                  <p className="text-xs font-medium text-slate-500">
                    {activeScenario.lastSync}
                  </p>
                </div>
                <span className="rounded-lg bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700">
                  AWB: {activeParcel.boxAwb}
                </span>
              </div>

              <div className="relative space-y-6 before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
                {activeParcel.events.map((ev, index) => (
                  <div
                    key={ev.title}
                    className="relative flex items-start gap-5 pl-1"
                  >
                    <span
                      className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                        ev.active
                          ? "border-[#f47721] bg-[#061a34] text-[#f47721] shadow-md"
                          : "border-emerald-500 bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {ev.active ? (
                        <FiTruck size={15} />
                      ) : (
                        <FiCheck size={15} strokeWidth={3} />
                      )}
                    </span>

                    <div
                      className={`flex-1 rounded-2xl border p-5 transition ${
                        ev.active
                          ? "border-[#f47721]/40 bg-orange-50/30 shadow-sm"
                          : "border-slate-200/80 bg-[#fbfcfe]"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-slate-400">
                          {ev.time}
                        </span>
                        <span className="rounded-md bg-white px-2.5 py-0.5 text-[11px] font-bold text-[#e8681b] border border-slate-200">
                          {ev.tag}
                        </span>
                      </div>
                      <h3 className="mt-1.5 text-base font-black text-[#071d3a]">
                        {ev.title}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                        <FiMapPin size={12} className="text-slate-400" />
                        {ev.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: NDR Action Card (if exception) + Parcel Specs + Growcord Comms */}
            <div className="space-y-6 lg:col-span-5">
              {/* PROACTIVE NDR ACTION PANEL (SHOWN ON NDR SCENARIO OR TOGGLED) */}
              {activeScenario.hasNdrException && (
                <div className="rounded-3xl border-2 border-rose-500 bg-rose-50/50 p-6 shadow-lg">
                  <div className="flex items-center gap-2.5 text-rose-700">
                    <FiAlertCircle size={20} className="shrink-0" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Proactive NDR Resolution Queue
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-bold text-[#071d3a]">
                    {activeScenario.ndrReason}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    Act now to instruct the carrier before this parcel is marked
                    Return-to-Origin (RTO).
                  </p>

                  {ndrSubmitted ? (
                    <div className="mt-4 rounded-2xl bg-emerald-600 p-4 text-white">
                      <p className="flex items-center gap-2 text-xs font-black uppercase">
                        <FiCheckCircle size={16} /> Re-attempt Instruction
                        Logged
                      </p>
                      <p className="mt-1 text-xs text-emerald-100">
                        Action: <strong>{ndrActionChoice}</strong> pushed to
                        carrier & buyer notified via Growcord Comms.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleNdrSubmit} className="mt-4 space-y-3">
                      <div className="grid grid-cols-1 gap-2">
                        {[
                          "Re-attempt Tomorrow (Buyer Confirmed)",
                          "Update Alternate Phone / Landmark",
                          "Fake Attempt  Escalate Priority Delivery",
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setNdrActionChoice(opt)}
                            className={`rounded-xl border px-3.5 py-2.5 text-left text-xs font-bold transition ${
                              ndrActionChoice === opt
                                ? "border-[#061a34] bg-[#061a34] text-white"
                                : "border-rose-200 bg-white text-slate-700 hover:bg-rose-50"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>

                      <input
                        type="text"
                        value={ndrLandmarkNote}
                        onChange={(e) => setNdrLandmarkNote(e.target.value)}
                        placeholder="Add landmark or alternate phone for rider..."
                        className="w-full rounded-xl border border-rose-200 bg-white px-3.5 py-2.5 text-xs text-[#071d3a] outline-none focus:border-[#061a34]"
                      />

                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-5 py-3 text-xs font-black text-[#061a34] shadow transition hover:bg-[#ff923f]"
                      >
                        Submit NDR Instruction to Carrier{" "}
                        <FiArrowRight size={14} />
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* Parcel Physical & Volumetric Specs Card */}
              <div className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400">
                    Verified Parcel Attributes
                  </span>
                  <FiPackage className="text-[#f47721]" size={18} />
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Selected Box:</span>
                    <strong className="text-[#071d3a]">
                      {activeParcel.boxId}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Declared Contents:</span>
                    <strong className="text-[#071d3a]">
                      {activeParcel.contents}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Box Dimensions:</span>
                    <strong className="text-[#071d3a]">
                      {activeParcel.dimensions}
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Billed Weight Slab:</span>
                    <strong className="text-emerald-700">
                      {activeParcel.chargeableSlab}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Growcord Comms Notification Log Card */}
              <div className="rounded-3xl bg-[#061a34] p-6 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                    Growcord Comms Event Log
                  </span>
                  <FiMessageSquare className="text-[#f47721]" size={18} />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">
                  GrowShip automatically hands off key parcel milestones to
                  Growcord Comms so buyers stay informed without calling
                  support.
                </p>

                <div className="mt-4 space-y-2.5 text-xs">
                  {[
                    ["Shipment Dispatched WhatsApp", "Delivered to Buyer"],
                    ["Out for Delivery SMS + Pin", "Delivered to Buyer"],
                    [
                      activeScenario.hasNdrException
                        ? "NDR Re-attempt Confirmation Flow"
                        : "Live Tracking Link Shared",
                      "Active",
                    ],
                  ].map(([msgTitle, msgState]) => (
                    <div
                      key={msgTitle}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5"
                    >
                      <span className="font-semibold text-slate-200">
                        {msgTitle}
                      </span>
                      <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                        {msgState}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: WHY GROWSHIP TRACKING IS DIFFERENT (3 PILLARS)
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Built for Operations & Support Teams
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Why brands replace fragmented courier tracking links with GrowShip.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: FiRefreshCw,
              title: "15-Minute Scheduled Syncs",
              desc: "We don't wait for end-of-day batch files. GrowShip polls and syncs carrier timelines every 15 minutes alongside live webhook events.",
            },
            {
              icon: FiLayers,
              title: "True Split-Order Visibility",
              desc: "When an order ships in 2 or 3 boxes, each box gets its own AWB timelineso an order is never falsely marked 'Delivered' while boxes are still in transit.",
            },
            {
              icon: FiShield,
              title: "Proactive NDR Intervention",
              desc: "Spot fake delivery attempts, locked doors, and missing landmarks on Day 1 and trigger buyer confirmations before an RTO is initiated.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/30"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#e8681b]">
                <card.icon size={22} />
              </span>
              <h3 className="mt-5 text-xl font-black text-[#071d3a]">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {card.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 4: TRACKING FAQs
      ========================================== */}
      <section className="mx-auto max-w-4xl px-5 py-12 sm:py-20 lg:px-8">
        <h2 className="text-center text-3xl font-black text-[#071d3a]">
          Shipment Tracking FAQs
        </h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          {TRACKING_FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                >
                  <span className="text-base font-bold text-[#071d3a] sm:text-lg">
                    {item.q}
                  </span>
                  <FiChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-[#f47721]" : "text-slate-400"
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-4 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION 5: DARK PREMIUM CTA FOR MERCHANTS
      ========================================== */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Want this tracking clarity for your brand?
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">
              Give every parcel a clear operational timeline.
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
            <Link
              href="/growship/tools/rto-loss-calculator"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Calculate RTO Savings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
