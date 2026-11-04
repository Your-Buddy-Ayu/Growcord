"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiHelpCircle,
  FiLayers,
  FiLock,
  FiMapPin,
  FiPrinter,
  FiRefreshCw,
  FiShield,
  FiSliders,
  FiTrendingDown,
  FiTruck,
  FiZap,
} from "react-icons/fi";
import { BiWallet } from "react-icons/bi";
import { MdAutoGraph } from "react-icons/md";

// ==========================================
// 1. MASTER DATA ARRAYS
// ==========================================

const CORE_ROUTES = [
  {
    id: "route-01",
    routeLabel: "Route 01",
    badge: "Bring Your Own Account (BYOA)",
    title: "Your courier account",
    summary:
      "Connect your eligible Shiprocket or Delhivery account and retain the commercial relationship you already operate on.",
    darkCard: false,
    icon: FiShield,
    highlightTag: "Direct Carrier Relationship",
    points: [
      "Your account’s applicable carrier charges",
      "GrowShip’s common shipment workspace",
      "One operational history per parcel",
      "Zero platform freight markup on your contracted slabs",
      "Support for multi-parcel split orders on your own AWB series",
    ],
    bestFor:
      "Best for D2C brands and B2B distributors that already have negotiated rate cards with Delhivery or Shiprocket and want a cleaner daily dispatch command centre.",
    ctaText: "Discuss connected accounts",
    ctaHref: "#rates",
  },
  {
    id: "route-02",
    routeLabel: "Route 02",
    badge: "Prepaid Platform Balance",
    title: "GrowShip wallet",
    summary:
      "For eligible platform-account shipments, add prepaid funds and let each shipment create a clear, itemised debit.",
    darkCard: true,
    icon: FiZap,
    highlightTag: "100% Itemised Ledger",
    points: [
      "Prepaid operational balance",
      "Itemised debit per shipment",
      "Visibility for operations and finance",
      "Clear breakdown by weight slab, service mode & route",
      "No surprise lump-sum deductionsaudit every single AWB",
    ],
    bestFor:
      "Best for growing teams that want immediate access to carrier lanes without negotiating individual courier contracts, or teams needing a backup lane alongside their primary account.",
    ctaText: "Ask about wallet eligibility",
    ctaHref: "#rates",
  },
];

const INCLUDED_WORKFLOW_ITEMS = [
  {
    title: "Shipment creation and parcel timelines",
    desc: "Book single or multi-parcel orders from one board and maintain a clean, chronological history for every box.",
    icon: FiBox,
  },
  {
    title: "Label and manifest workflows",
    desc: "Print thermal labels individually or in batches, then generate barcode-verified daily handover manifests.",
    icon: FiPrinter,
  },
  {
    title: "Pickup request context",
    desc: "Keep warehouse pickup schedules, cutoff windows, and driver handover proofs tied directly to the shipment.",
    icon: FiTruck,
  },
  {
    title: "Tracking refresh and carrier events",
    desc: "Timelines refresh on a 15-minute schedule and update automatically whenever your connected carrier pushes an event.",
    icon: FiRefreshCw,
  },
  {
    title: "NDR and return workflow visibility",
    desc: "Surface non-delivery reports early with full attempt context so your team can act before an expensive RTO is triggered.",
    icon: FiTrendingDown,
  },
  {
    title: "Courier performance signals",
    desc: "Evaluate real median delivery speeds, NDR spikes, and RTO patterns across lanes instead of relying on guesswork.",
    icon: MdAutoGraph,
  },
];

const COST_DETERMINANTS = [
  {
    factor: "01. Origin & Destination Zone",
    title: "Where the parcel moves",
    detail:
      "Carrier charges vary between Intra-City (Zone A), Regional/Within-State (Zone B), Metro-to-Metro (Zone C), Rest of India (Zone D), and Special Zones (North-East, J&K, Andaman).",
  },
  {
    factor: "02. Dead vs. Volumetric Weight",
    title: "How much space it occupies",
    detail:
      "Carriers bill on whichever is higher: physical dead weight or volumetric weight (L × B × H ÷ 5000). GrowShip lets you save standard box presets so slabs are predictable.",
  },
  {
    factor: "03. Service Mode (Air vs. Surface)",
    title: "How fast it needs to arrive",
    detail:
      "Express Air moves urgent, lightweight D2C parcels faster, while Priority Ground and Heavy Surface protect unit economics on multi-kilogram cartons.",
  },
  {
    factor: "04. Payment Mode (Prepaid vs. COD)",
    title: "Cash collection & remittance",
    detail:
      "Cash-on-Delivery orders carry a carrier COD handling fee and higher return risk. Our NDR board helps protect COD shipments from turning into RTO freight losses.",
  },
];

const SAMPLE_LEDGER_ENTRIES = [
  {
    awb: "GRS-584-2189",
    orderRef: "#ORD-10584",
    lane: "Bengaluru → Mumbai (Metro Zone)",
    specs: "1 Parcel · 0.65 kg (1kg Slab) · Express Air",
    routeType: "Route 02 · GrowShip Wallet",
    chargeTrail: "Itemised Wallet Debit · Verified",
    badgeColor: "bg-orange-50 text-[#e8681b] border-orange-200",
  },
  {
    awb: "DLV-882-9014",
    orderRef: "#ORD-10585 (Split 1 of 2)",
    lane: "Surat → Delhi NCR (National Zone)",
    specs: "Carton 1 · 1.40 kg · Priority Surface",
    routeType: "Route 01 · Own Delhivery A/c",
    chargeTrail: "Direct Carrier Billing · ₹0 Markup",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    awb: "DLV-882-9015",
    orderRef: "#ORD-10585 (Split 2 of 2)",
    lane: "Surat → Delhi NCR (National Zone)",
    specs: "Carton 2 · 1.85 kg · Priority Surface",
    routeType: "Route 01 · Own Delhivery A/c",
    chargeTrail: "Direct Carrier Billing · ₹0 Markup",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    awb: "GRS-584-2201",
    orderRef: "#ORD-10591",
    lane: "Mumbai → Pune (Regional Zone)",
    specs: "1 Parcel · 0.42 kg (500g Slab) · Priority Ground",
    routeType: "Route 02 · GrowShip Wallet",
    chargeTrail: "Itemised Wallet Debit · Verified",
    badgeColor: "bg-orange-50 text-[#e8681b] border-orange-200",
  },
];

const ROUTE_COMPARISON_ROWS = [
  {
    aspect: "Who holds the courier contract?",
    route1: "Your business (Direct Delhivery / Shiprocket account)",
    route2: "GrowShip Platform Account (Subject to eligibility)",
    hybrid: "Both active simultaneously in one workspace",
  },
  {
    aspect: "How are freight charges billed?",
    route1: "Billed directly by your carrier on your existing terms",
    route2: "Deducted per shipment from your prepaid GrowShip wallet",
    hybrid: "Direct billing for BYOA + Wallet debit for platform lanes",
  },
  {
    aspect: "Dispatch & Label Workflow",
    route1: "1-click labels & manifests on GrowShip board",
    route2: "Identical 1-click labels & manifests on GrowShip board",
    hybrid: "Unified queuechoose route per shipment",
  },
  {
    aspect: "Tracking & NDR Visibility",
    route1: "15-min scheduled refresh + live NDR action queue",
    route2: "15-min scheduled refresh + live NDR action queue",
    hybrid: "Single source of truth across all carriers",
  },
  {
    aspect: "Multi-Parcel Split Shipments",
    route1: "Supported (Each box gets its own AWB & timeline)",
    route2: "Supported (Itemised debit per individual parcel)",
    hybrid: "Supported across all connected routes",
  },
  {
    aspect: "Finance Audit & Reconciliation",
    route1: "Operational parcel history exported for carrier bill matching",
    route2: "Line-item wallet debit ledger per AWB",
    hybrid: "Clean separation of BYOA vs. Wallet shipments",
  },
];

const PRICING_FAQS = [
  {
    q: "Why doesn't GrowShip publish a generic '₹19 per 500g' rate card on this page?",
    a: "Because generic teaser rates rarely reflect what a business actually pays once zone distance, volumetric weight, fuel surcharges, and COD fees are applied. Courier charges depend on your connected account, service, route, parcel attributes, and commercial terms. Instead of a bait-and-switch rate card, we review your real parcel profile and give you an accurate, transparent setup.",
  },
  {
    q: "Can we connect our existing Shiprocket or Delhivery account on Route 01?",
    a: "Yes. GrowShip supports connecting your own Shiprocket and Delhivery accounts today. You retain the commercial rates and remittance cycles you have already negotiated with your carrier, while your operations team upgrades to GrowShip's unified dispatch, tracking, and NDR workspace.",
  },
  {
    q: "How does the GrowShip prepaid wallet (Route 02) keep costs clear?",
    a: "For eligible platform-account shipments, you top up a prepaid operational balance. Whenever your team books a shipment, the wallet records an itemised debit tied directly to that AWB number and parcel profileso operations and finance can see the exact charge trail without mystery lump-sum deductions.",
  },
  {
    q: "Can we use both Route 01 (our own account) and Route 02 (GrowShip wallet) together?",
    a: "Yes. Many teams connect their own direct carrier account for their primary lanes while keeping a funded GrowShip wallet for backup pin-code coverage or specific express services. Your warehouse dispatch flow remains identical.",
  },
  {
    q: "Are there extra software fees when an order is split into multiple parcels?",
    a: "No. GrowShip natively supports split shipments where one order is packed into two or more boxes. Each parcel receives its own AWB and tracking timeline, and the order remains marked as 'partially delivered' until every box is delivered.",
  },
  {
    q: "What happens when I request a rate and workflow review?",
    a: "Our operations team reviews your monthly shipment volume, primary pickup cities, average box weight/dimensions, and whether you want to use your own courier accounts or the platform wallet. Eligible businesses are then invited into a secure, review-led KYC and onboarding path.",
  },
];

export default function PricingClientView() {
  // Interactive UI States
  const [selectedRouteTab, setSelectedRouteTab] = useState("both");
  const [monthlyOrders, setMonthlyOrders] = useState(2500);
  const [lengthCm, setLengthCm] = useState(30);
  const [breadthCm, setBreadthCm] = useState(22);
  const [heightCm, setHeightCm] = useState(10);
  const [deadWeightKg, setDeadWeightKg] = useState(0.75);
  const [openFaq, setOpenFaq] = useState(0);

  // Rate Review Form States
  const [formVolume, setFormVolume] = useState("1,000 – 5,000 / mo");
  const [formRoutePref, setFormRoutePref] = useState(
    "Route 01: My Courier Account",
  );
  const [formCity, setFormCity] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Volumetric & Billable Slab Calculation
  const volumetricWeightKg = Number(
    ((lengthCm * breadthCm * heightCm) / 5000).toFixed(2),
  );
  const billableWeightKg = Math.max(deadWeightKg, volumetricWeightKg);
  const chargedSlabLabel =
    billableWeightKg <= 0.5
      ? "500g Base Slab"
      : billableWeightKg <= 1
        ? "1.0 kg Standard Slab"
        : billableWeightKg <= 2
          ? "2.0 kg Priority Slab"
          : `${Math.ceil(billableWeightKg)} kg Heavy Slab`;

  const opsHoursSaved = Math.round((monthlyOrders * 1.35) / 60);

  const handleRateReviewSubmit = (e) => {
    e.preventDefault();
    if (!formEmail.trim()) return;
    setFormSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* ==========================================
          SECTION 1: HERO SECTION (DARK NAVY BRAND ALIGNED)
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-24 pb-20 text-center text-white sm:pt-32 sm:pb-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.16),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#f47721]">
            Pricing that respects the way you ship
          </p>

          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.02] tracking-[-.05em] text-white sm:text-6xl lg:text-7xl">
            A clear operations layer.
            <br />
            <span className="text-[#ff8e3c]">No invented rate card.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Courier charges depend on your connected account, service, route,
            parcel attributes and commercial terms. GrowShip keeps the software
            workflow and shipment charge trail easy to understand.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#rates"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#061a34] shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-[#ff923f]"
            >
              Request a rate & workflow review <FiArrowRight size={18} />
            </a>
            <a
              href="#slab-simulator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Test parcel slab calculator
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: THE TWO CORE ROUTES (ROUTE 01 & ROUTE 02)
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Two Transparent Operating Routes
          </p>
          <h2 className="mt-3 text-balance text-3xl font-black tracking-[-.04em] text-[#071d3a] sm:text-5xl">
            Choose how your shipments are billed.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Whether you ship on your own negotiated carrier contracts or use our
            prepaid wallet, your dispatch team works from the exact same command
            centre.
          </p>

          {/* Filter Pills */}
          <div className="mt-7 inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {[
              { id: "both", label: "Compare Both Routes" },
              { id: "route-01", label: "Route 01: Own Courier Account" },
              { id: "route-02", label: "Route 02: GrowShip Wallet" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedRouteTab(tab.id)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  selectedRouteTab === tab.id
                    ? "bg-[#061a34] text-white shadow"
                    : "text-slate-600 hover:text-[#071d3a]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {CORE_ROUTES.map((route) => {
            const isDimmed =
              selectedRouteTab !== "both" && selectedRouteTab !== route.id;

            return (
              <article
                key={route.id}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 transition duration-300 sm:p-10 ${
                  route.darkCard
                    ? "bg-[#071d3a] text-white shadow-2xl"
                    : "border border-slate-200 bg-white text-[#071d3a] shadow-xl shadow-slate-200/40"
                } ${isDimmed ? "opacity-45 scale-[0.98]" : "opacity-100"}`}
              >
                {route.darkCard && (
                  <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#f47721]/20 blur-3xl" />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl ${
                        route.darkCard
                          ? "bg-[#f47721] text-[#071d3a]"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      <route.icon size={23} />
                    </span>
                    <span
                      className={`rounded-full px-3.5 py-1 text-xs font-bold ${
                        route.darkCard
                          ? "bg-white/10 text-[#ff9a4e]"
                          : "bg-orange-50 text-[#e8681b]"
                      }`}
                    >
                      {route.badge}
                    </span>
                  </div>

                  <p
                    className={`mt-6 text-sm font-bold ${
                      route.darkCard ? "text-[#ff9a4e]" : "text-[#e8681b]"
                    }`}
                  >
                    {route.routeLabel}
                  </p>

                  <h3 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">
                    {route.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base ${
                      route.darkCard ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {route.summary}
                  </p>

                  <div className="mt-8 space-y-3.5">
                    {route.points.map((item) => (
                      <p
                        key={item}
                        className={`flex items-start gap-3 text-sm font-semibold ${
                          route.darkCard ? "text-slate-100" : "text-slate-700"
                        }`}
                      >
                        <FiCheck
                          size={17}
                          className={`mt-0.5 shrink-0 ${
                            route.darkCard
                              ? "text-[#ff9a4e]"
                              : "text-emerald-600"
                          }`}
                        />
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>

                  <div
                    className={`mt-8 rounded-2xl p-4 text-xs leading-relaxed ${
                      route.darkCard
                        ? "border border-white/10 bg-white/5 text-slate-300"
                        : "border border-slate-100 bg-[#f8fafc] text-slate-600"
                    }`}
                  >
                    <strong
                      className={
                        route.darkCard ? "text-white" : "text-[#071d3a]"
                      }
                    >
                      Ideal Fit:
                    </strong>{" "}
                    {route.bestFor}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4">
                  <a
                    href={route.ctaHref}
                    className={`inline-flex items-center gap-2 text-sm font-bold transition ${
                      route.darkCard
                        ? "text-[#ff9a4e] hover:text-white"
                        : "text-[#e8681b] hover:text-[#071d3a]"
                    }`}
                  >
                    {route.ctaText} <FiArrowRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION 3: INCLUDED IN THE WORKFLOW (EXPANDED 6 CARDS)
      ========================================== */}
      <section className="border-y border-slate-200 bg-white px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
                Included in the workflow
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-tight tracking-[-.04em] text-[#071d3a] sm:text-4xl">
                The work around the shipment is part of the product.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 lg:col-span-6">
              Regardless of whether a parcel moves via Route 01 (your connected
              courier account) or Route 02 (your GrowShip wallet), your team
              gets full access to every operational capability below.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED_WORKFLOW_ITEMS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-[#fbfcfe] p-7 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-lg "
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-50 text-[#e8681b]">
                      <item.icon size={22} />
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                      <FiCheck size={12} /> Included
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-black text-[#071d3a]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: INTERACTIVE PARCEL SLAB & WORKFLOW SIMULATOR
      ========================================== */}
      <section
        id="slab-simulator"
        className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Side: Interactive Inputs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-bold text-[#e8681b]">
                <FiSliders size={14} /> Interactive Parcel & Ops Simulator
              </div>
              <h2 className="mt-4 text-3xl font-black text-[#071d3a] sm:text-4xl">
                See how parcel attributes shape your chargeable slab.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Carriers calculate freight using dead weight vs. volumetric
                weight (
                <code className="font-bold text-[#071d3a]">
                  L × B × H ÷ 5000
                </code>
                ). Test your typical box dimensions and monthly volume below.
              </p>

              {/* Box Dimensions Inputs */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <label className="block text-[11px] font-bold uppercase text-slate-400">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={120}
                    value={lengthCm}
                    onChange={(e) =>
                      setLengthCm(Math.max(1, Number(e.target.value)))
                    }
                    className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <label className="block text-[11px] font-bold uppercase text-slate-400">
                    Breadth (cm)
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={120}
                    value={breadthCm}
                    onChange={(e) =>
                      setBreadthCm(Math.max(1, Number(e.target.value)))
                    }
                    className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <label className="block text-[11px] font-bold uppercase text-slate-400">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={120}
                    value={heightCm}
                    onChange={(e) =>
                      setHeightCm(Math.max(1, Number(e.target.value)))
                    }
                    className="mt-1 w-full bg-transparent text-xl font-black text-[#071d3a] outline-none"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
                  <label className="block text-[11px] font-bold uppercase text-slate-400">
                    Dead Wt (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    min={0.1}
                    max={50}
                    value={deadWeightKg}
                    onChange={(e) =>
                      setDeadWeightKg(Math.max(0.1, Number(e.target.value)))
                    }
                    className="mt-1 w-full bg-transparent text-xl font-black text-[#e8681b] outline-none"
                  />
                </div>
              </div>

              {/* Monthly Volume Slider */}
              <div className="mt-6 rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="monthly-vol"
                    className="text-xs font-bold uppercase tracking-wider text-slate-500"
                  >
                    Monthly Shipment Volume
                  </label>
                  <span className="rounded-lg bg-[#061a34] px-3 py-1 text-sm font-black text-[#f47721]">
                    {monthlyOrders.toLocaleString("en-IN")} parcels / mo
                  </span>
                </div>
                <input
                  id="monthly-vol"
                  type="range"
                  min={200}
                  max={15000}
                  step={100}
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="mt-4 h-2.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#f47721]"
                />
              </div>
            </div>

            {/* Right Side: Live Slab Output */}
            <div className="rounded-3xl bg-[#061a34] p-7 text-white lg:col-span-5 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ff9647]">
                Live Parcel Diagnosis
              </p>
              <h3 className="mt-2 text-2xl font-black text-white">
                {chargedSlabLabel}
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Physical Dead Wt</p>
                  <p className="mt-1 text-xl font-black text-white">
                    {deadWeightKg} kg
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-slate-400">Volumetric Wt</p>
                  <p className="mt-1 text-xl font-black text-[#ff9647]">
                    {volumetricWeightKg} kg
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300">
                    Billable Carrier Weight:
                  </span>
                  <strong className="text-base font-black text-emerald-400">
                    {billableWeightKg} kg
                  </strong>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-white/10 pt-2 text-xs">
                  <span className="text-slate-300">
                    Dispatch Desk Time Saved:
                  </span>
                  <strong className="text-sm font-black text-white">
                    ~{opsHoursSaved} hrs / mo
                  </strong>
                </div>
              </div>

              <p className="mt-5 text-xs leading-relaxed text-slate-300">
                GrowShip saves your box dimensions as reusable presets so your
                packing desk never triggers accidental volumetric slab jumps.
              </p>

              <a
                href="#rates"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-6 py-3.5 text-xs sm:text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
              >
                Review rates for this parcel profile <FiArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: 4 REAL-WORLD COST DETERMINANTS
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Why We Don't Do Bait-and-Switch Pricing
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            The 4 variables that actually determine your shipping cost.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COST_DETERMINANTS.map((item) => (
            <div
              key={item.factor}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-wider text-[#e8681b]">
                {item.factor}
              </p>
              <h3 className="mt-3 text-lg font-black text-[#071d3a]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 6: SIMULATED CHARGE TRAIL & WALLET LEDGER
      ========================================== */}
      <section className="border-y border-slate-200 bg-[#f1f5fa] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
                Audit-Ready Charge Trail
              </p>
              <h2 className="mt-3 text-balance text-3xl font-black leading-[1.06] tracking-[-.04em] text-[#071d3a] sm:text-4xl">
                Every parcel leaves a clear operational & financial trail.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Whether an order ships in a single flyer on your GrowShip wallet
                or splits into two master cartons on your Delhivery account,
                finance and operations see the exact same truth.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  "Clear distinction between Route 01 (Own A/c) and Route 02 (Wallet)",
                  "Split orders linked under one parent Order ID without duplicate software fees",
                  "Itemised wallet debits mapped to exact AWB numbers",
                ].map((pt) => (
                  <p
                    key={pt}
                    className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                  >
                    <FiCheckCircle
                      size={17}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />
                    <span>{pt}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-xl sm:p-5">
                <div className="overflow-hidden rounded-2xl border border-slate-100">
                  <div className="flex items-center justify-between bg-[#061a34] px-6 py-4 text-white">
                    <div className="flex items-center gap-2.5">
                      <BiWallet size={20} className="text-[#f47721]" />
                      <span className="text-sm font-bold">
                        Unified Shipment & Charge Trail
                      </span>
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200">
                      Illustrative View
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100 bg-white p-4 sm:p-6">
                    {SAMPLE_LEDGER_ENTRIES.map((entry) => (
                      <div
                        key={entry.awb}
                        className="flex flex-col justify-between gap-3 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center"
                      >
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-black text-[#071d3a]">
                              {entry.orderRef}
                            </span>
                            <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-slate-600">
                              {entry.awb}
                            </span>
                          </div>
                          <p className="mt-1 text-xs font-semibold text-slate-700">
                            {entry.lane}
                          </p>
                          <p className="text-[11px] text-slate-500">
                            {entry.specs}
                          </p>
                        </div>

                        <div className="flex flex-col items-start sm:items-end">
                          <span
                            className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold ${entry.badgeColor}`}
                          >
                            {entry.routeType}
                          </span>
                          <span className="mt-1.5 text-xs font-bold text-emerald-700">
                            {entry.chargeTrail}
                          </span>
                        </div>
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
          SECTION 7: SIDE-BY-SIDE ROUTE COMPARISON MATRIX
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Side-by-Side Comparison
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Route 01 vs. Route 02 vs. Hybrid Setup
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#061a34] text-xs font-bold uppercase tracking-wider text-white">
                <tr>
                  <th className="py-5 pl-6 pr-4 sm:pl-8">
                    Operational Dimension
                  </th>
                  <th className="px-4 py-5 text-slate-200">
                    Route 01: Your Courier A/c
                  </th>
                  <th className="px-4 py-5 text-[#ff9a4e]">
                    Route 02: GrowShip Wallet
                  </th>
                  <th className="py-5 pl-4 pr-6 text-emerald-300 sm:pr-8">
                    Hybrid (Both Active)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {ROUTE_COMPARISON_ROWS.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="py-4 pl-6 pr-4 font-black text-[#071d3a] sm:pl-8">
                      {row.aspect}
                    </td>
                    <td className="px-4 py-4 text-slate-600">{row.route1}</td>
                    <td className="px-4 py-4 font-semibold text-[#071d3a]">
                      {row.route2}
                    </td>
                    <td className="py-4 pl-4 pr-6 font-semibold text-emerald-800 sm:pr-8">
                      {row.hybrid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 8: INTERACTIVE RATE DECISION FORM (#rates)
      ========================================== */}
      <section
        id="rates"
        className="mx-auto max-w-5xl px-5 py-12 sm:py-20 lg:px-8"
      >
        <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl">
          <div className="bg-[#061a34] px-6 py-12 text-center text-white sm:px-12">
            <FiHelpCircle className="mx-auto text-[#f47721]" size={32} />
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em] sm:text-5xl">
              Need a rate decision, not a vague promise?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Tell us about your shipment volume, pickup cities, average parcel
              profile and existing courier setup. We’ll help you understand the
              appropriate GrowShip route.
            </p>
          </div>

          <div className="p-6 sm:p-12">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <FiCheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-black text-[#071d3a]">
                  Rate & Route Review Requested
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600">
                  We have noted your preference for{" "}
                  <strong>{formRoutePref}</strong> ({formVolume}). You can now
                  proceed directly to the GrowShip application or email our
                  operations desk with any specific lane questions.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="https://growship.in/start"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#071d3a] shadow-lg transition hover:bg-[#ff923f]"
                  >
                    Start GrowShip Application <FiArrowRight size={18} />
                  </a>
                  <a
                    href={`mailto:contact@growcord.com?subject=GrowShip%20rate%20review%20(${encodeURIComponent(
                      formVolume,
                    )})`}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                  >
                    Open in Email Client
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRateReviewSubmit} className="space-y-8">
                {/* Step 1: Route Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    1. Which GrowShip route are you exploring?
                  </label>
                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      "Route 01: My Courier Account",
                      "Route 02: GrowShip Wallet",
                      "Both (Compare for my lanes)",
                    ].map((rt) => (
                      <button
                        type="button"
                        key={rt}
                        onClick={() => setFormRoutePref(rt)}
                        className={`rounded-xl border px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                          formRoutePref === rt
                            ? "border-[#061a34] bg-[#061a34] text-white shadow"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {rt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Volume Selection */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                    2. Monthly Shipment Volume
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {[
                      "Under 500 / mo",
                      "500 – 1,000 / mo",
                      "1,000 – 5,000 / mo",
                      "5,000+ / mo",
                    ].map((vol) => (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setFormVolume(vol)}
                        className={`rounded-xl border px-4 py-3.5 text-xs sm:text-sm font-bold transition ${
                          formVolume === vol
                            ? "border-[#f47721] bg-orange-50 text-[#071d3a] ring-2 ring-[#f47721]/20"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Pickup City & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="pickup-city"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      3. Primary Pickup City & Parcel Weight
                    </label>
                    <input
                      id="pickup-city"
                      type="text"
                      value={formCity}
                      onChange={(e) => setFormCity(e.target.value)}
                      placeholder="e.g. Mumbai / Surat · 0.5kg to 2kg"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-[#071d3a] outline-none focus:border-[#f47721] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rate-email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-500"
                    >
                      4. Work Email *
                    </label>
                    <input
                      id="rate-email"
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="ops@yourcompany.in"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-[#071d3a] outline-none focus:border-[#f47721] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 sm:flex-row">
                  <a
                    href="mailto:contact@growcord.com?subject=GrowShip%20rate%20review"
                    className="text-xs font-bold text-slate-500 underline hover:text-[#e8681b]"
                  >
                    Or email contact@growcord.com directly
                  </a>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-4 text-sm font-bold text-[#071d3a] shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#ff923f] sm:w-auto"
                  >
                    Request a rate review <FiArrowRight size={18} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 9: PRICING & WALLET FAQs
      ========================================== */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Frequently Asked Questions
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Clear answers on accounts, wallets & billing.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          {PRICING_FAQS.map((item, idx) => {
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
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION 10: DARK PREMIUM FOOTER CTA
      ========================================== */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              A clearer way to ship starts here
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
            <Link
              href="/growship/kyc"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-5 text-sm font-bold text-white transition hover:bg-white/10 sm:w-auto"
            >
              How KYC works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
