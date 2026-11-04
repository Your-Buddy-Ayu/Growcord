"use client";

import {
  FiArrowRight,
  FiLayout,
  FiPrinter,
  FiMapPin,
  FiAlertCircle,
  FiCreditCard,
  FiPieChart,
  FiCheckCircle,
  FiLayers,
} from "react-icons/fi";

export default function CapabilitiesPage() {
  const capabilities = [
    {
      id: "unified-workspace",
      icon: FiLayout,
      title: "One Dispatch Command Centre",
      subtitle: "Stop bouncing between multiple courier tabs.",
      description:
        "Manage your entire D2C shipping operations from a single, focused workspace. Whether you are shipping via Delhivery, Shiprocket, or platform rates, every order flows into one unified dashboard. Filter, sort, and process shipments without the usual tab-switching chaos.",
      features: [
        "Cross-carrier order syncing",
        "Smart address validation",
        "Custom rule-based courier allocation",
      ],
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      id: "labels-manifests",
      icon: FiPrinter,
      title: "Bulk Labels & Manifests",
      subtitle: "Print paperwork exactly when you need it.",
      description:
        "Generate shipping labels individually or in bulk with a single click. Once your parcels are packed, create clear, itemised handover manifests for the day’s carrier pickups. No more missing parcels during warehouse handovers.",
      features: [
        "1-click bulk label generation",
        "Carrier-compliant barcode formats",
        "Automated daily pickup manifests",
      ],
      color: "text-[#f47721]",
      bg: "bg-orange-50",
    },
    {
      id: "real-time-tracking",
      icon: FiMapPin,
      title: "Unified Parcel Tracking",
      subtitle: "Stay updated on every order's journey.",
      description:
        "Track every dispatched parcel in real-time across multiple courier networks without leaving your dashboard. Our system refreshes tracking timelines automatically, giving your support team instant answers when customers ask, 'Where is my order?'",
      features: [
        "Standardised tracking statuses",
        "Scheduled 15-minute syncs",
        "Support for split-order tracking",
      ],
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      id: "ndr-management",
      icon: FiAlertCircle,
      title: "Proactive NDR Management",
      subtitle: "Catch delivery exceptions before they become RTOs.",
      description:
        "Non-Delivery Reports (NDRs) eat into your margins. GrowShip surfaces delivery exceptions immediately, providing your team with the context needed to contact the customer and re-attempt delivery. Turn potential losses into successful handovers.",
      features: [
        "Real-time exception alerts",
        "Direct buyer communication triggers",
        "RTO probability scoring",
      ],
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      id: "transparent-wallet",
      icon: FiCreditCard,
      title: "Transparent Shipment Wallet",
      subtitle: "Clear itemised billing for every parcel.",
      description:
        "Use your own negotiated carrier accounts, or top up the GrowShip prepaid wallet to access platform rates. Every single debit is itemised clearly, giving your finance team a clean, undeniable audit trail of your e-commerce logistics spend.",
      features: [
        "Zero hidden weight discrepancies",
        "Prepaid wallet for instant booking",
        "Downloadable finance reports",
      ],
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
    {
      id: "courier-intelligence",
      icon: FiPieChart,
      title: "Delivery Intelligence",
      subtitle: "Make routing decisions based on hard data.",
      description:
        "Stop guessing which courier performs best in which pin code. GrowShip analyzes your historical shipping data to show you real median delivery speeds, RTO patterns, and carrier SLA compliance, helping you optimize your shipping strategy.",
      features: [
        "Pin-code level performance metrics",
        "Carrier speed vs. cost analysis",
        "Visual analytics dashboard",
      ],
      color: "text-amber-500",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 py-24 text-center sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,52,0)_0%,#061a34_100%)] opacity-80" />

        <div className="relative mx-auto max-w-4xl z-10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <FiLayers size={32} className="text-[#f47721]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
            Platform Capabilities
          </p>
          <h1 className="mt-6 text-balance text-5xl font-black leading-[1.05] tracking-[-.04em] text-white sm:text-6xl lg:text-7xl">
            Everything your shipping desk needs to scale.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            From automated label generation to deep carrier analytics. GrowShip
            provides a complete suite of logistics tools designed specifically
            for modern Indian D2C brands and e-commerce teams.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:py-24">
        <h2 className="mb-6 text-3xl font-black text-[#071d3a] sm:text-4xl">
          Built for speed, designed for clarity.
        </h2>
        <p className="text-lg leading-relaxed text-slate-600">
          E-commerce logistics doesn't have to be a black box. We have built
          every feature in GrowShip to give you maximum control over your
          operations, reduce manual errors, and ultimately drop your shipping
          costs. Here is exactly what the platform can do for you.
        </p>
      </section>

      {/* Capabilities Deep Dive List */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="space-y-16 sm:space-y-24">
          {capabilities.map((cap, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={cap.id}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20 ${isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Content Side */}
                <div className={isEven ? "lg:col-start-2" : ""}>
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${cap.bg}`}
                    >
                      <cap.icon size={28} className={cap.color} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wider text-slate-400">
                      Feature {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-[#071d3a] sm:text-4xl">
                    {cap.title}
                  </h2>
                  <p className="mt-3 text-lg font-medium text-[#e8681b]">
                    {cap.subtitle}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-slate-600">
                    {cap.description}
                  </p>

                  <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Core Highlights
                    </p>
                    <ul className="space-y-4">
                      {cap.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                            <FiCheckCircle size={14} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Placeholder Side */}
                <div className="relative h-[450px] w-full overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 flex items-center justify-center shadow-2xl shadow-slate-200/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-100/50" />
                  <div className="relative flex flex-col items-center gap-3 text-slate-400">
                    <cap.icon size={48} className="opacity-20" />
                    <p className="text-sm font-bold uppercase tracking-widest">
                      Interface Preview
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Developer / API Section */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[3rem] bg-gradient-to-br from-[#061a34] to-[#0a2955] px-6 py-20 text-center shadow-2xl sm:px-16">
          <h2 className="mb-6 text-3xl font-black text-white sm:text-4xl">
            Ready to plug into your stack?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300">
            GrowShip is designed to integrate effortlessly with your existing
            tools. Whether you run a custom Shopify storefront, WooCommerce, or
            a bespoke backend, our architecture supports seamless data flow so
            you never miss an order.
          </p>
          <a
            href="https://growship.in/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 border border-white/20 hover:-translate-y-1"
          >
            Talk to our technical team
            <FiArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Standard CTA Section */}
      <section className="px-5 pb-24 pt-10 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white px-6 py-14 shadow-[0_20px_50px_rgba(4,21,45,.05)] sm:px-12 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              Take control of your logistics
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.05] tracking-[-.04em] text-[#071d3a] sm:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-0">
            <a
              href="https://growship.in/start"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#d45a15]"
            >
              Start shipping
              <FiArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
