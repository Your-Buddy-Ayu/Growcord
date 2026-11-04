"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import FAQSection from "@/components/FaqSection";
import DemoPopup from "@/components/landing/DemoPopup";
import ShippingRateCalculator from "./ShippingRateCalculator";
import Shadowfax from "../../assets/Shipping/shadowFax.svg";
import Delhivery from "../../assets/Shipping/Delhivery.svg";
import Bluedart from "../../assets/Shipping/BlueDart.svg";
import Indiapost from "../../assets/Shipping/IndiaPost.svg";
import Dtdc from "../../assets/Shipping/Dtdc.svg";
import Xpressbees from "../../assets/Shipping/xpressbees.webp";

import {
  FiTruck,
  FiBox,
  FiShield,
  FiCheck,
  FiArrowRight,
  FiTrendingDown,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiDollarSign,
  FiRefreshCw,
  FiPrinter,
  FiSmartphone,
  FiGlobe,
  FiPercent,
  FiPackage,
  FiActivity,
  FiZap,
} from "react-icons/fi";
import { FaWhatsapp, FaShieldAlt } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { MdOutlineAutoGraph, MdOutlineSpeed } from "react-icons/md";
import { LuCheck, LuX, LuSparkles, LuLayers, LuScale } from "react-icons/lu";

// Static FAQs designed for commercial intent SEO
const SHIPPING_FAQS = [
  {
    question:
      "How is Growcord's Shipping Aggregator different from using couriers like Delhivery or BlueDart directly?",
    answer:
      "When you contract directly with a single courier, you are locked into their specific PIN code coverage, high minimum monthly volume thresholds, and separate security deposits. GrowShip aggregates 15+ Tier-1 courier networks under one master account. If one carrier experiences local delays, you switch routes with 1 click without negotiating separate contracts.",
  },
  {
    question: "How does GrowShip compare to Shiprocket?",
    answer:
      "Unlike traditional aggregators that charge monthly subscription tiers to unlock essential features like automated NDR or early COD remittance, GrowShip is free from recurring software fees. Furthermore, GrowShip is natively connected to Growcord's Storefront, Retail POS, WMS, and WhatsApp Commseliminating API breakage and multi-tool subscription costs.",
  },
  {
    question: "How fast does COD money reach my bank account?",
    answer:
      "GrowShip operates on an early T+2 remittance cycle. Once an order is delivered and the carrier reconciles cash collection, the payout is remitted directly to your verified bank account within 48 hours, keeping your operational cash flow liquid.",
  },
  {
    question: "Can I connect my own existing courier agreements?",
    answer:
      "Yes! You can either ship on Growcord's corporate discounted rates starting from ₹19/500g or plug in your existing carrier accounts (Shiprocket, Delhivery, BlueDart) to run all dispatch workflows from one unified dashboard.",
  },
  {
    question: "How does GrowShip help reduce RTO (Return to Origin)?",
    answer:
      "GrowShip features an active automated NDR desk. When a delivery attempt fails, an automated WhatsApp prompt is triggered to the customer with 1-tap options to reschedule, update address, or add landmarks. Rider GPS logs are verified to eliminate fraudulent non-delivery remarks, reducing RTO by up to 38%.",
  },
  {
    question: "What is the minimum balance required in the shipping wallet?",
    answer:
      "There is zero minimum wallet balance required. You recharge as needed, and each debit is itemized with full weight, zone, and courier transparency so your finance team can reconcile every rupee.",
  },
  {
    question: "Does GrowShip support split or multi-package shipments?",
    answer:
      "Yes. If an order contains multiple products shipping from different warehouses, GrowShip creates distinct shipments and parcel timelines. The parent order remains 'Partially Delivered' until every package is safely delivered.",
  },
  {
    question: "Which eCommerce platforms integrate with GrowShip?",
    answer:
      "GrowShip offers 1-click integrations for Shopify, WooCommerce, Magento, Amazon India, Growcord Commerce, and custom websites via robust REST APIs and webhooks.",
  },
];

export default function ShippingServicesPage() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [activeNdrStep, setActiveNdrStep] = useState(1);
  const [quickPincode, setQuickPincode] = useState({
    origin: "560001",
    dest: "110001",
  });
  const [quickRateResult, setQuickRateResult] = useState(null);

  const handleQuickEstimate = (e) => {
    e.preventDefault();
    setQuickRateResult({
      rate: "₹23.40",
      courier: "Delhivery Air Express",
      sla: "2 Days Delivery",
      pinCoverage: "29,000+ PIN Codes Covered",
    });
  };

  const scrollToCalculator = () => {
    const el = document.getElementById("rate-calculator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfcfe] selection:bg-[#f47721]/20 font-sans text-[#071d3a] relative overflow-x-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] bg-orange-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* =========================================================================
            SECTION 1: HERO WITH QUICK ESTIMATOR & DISPATCH PREVIEW
        ========================================================================= */}
        <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* High-Impact Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-[#f47721] border border-orange-200 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
              <LuSparkles className="animate-spin text-orange-500" />
              <span>
                India&apos;s High-Yield Multi-Carrier Shipping Aggregator
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#071d3a] tracking-tight leading-[1.12]">
              Stop Overpaying for Logistics. Ship with 15+ Couriers from{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f47721] to-[#ff923f]">
                ₹19 / 500g
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
              Growcord aggregates India’s premier logistics networksincluding
              Delhivery, BlueDart, DTDC, and Xpressbeesinto a single
              high-performance dashboard. Cut RTO by 38%, unlock T+2 COD
              remittance, and manage every parcel from one prepaid wallet.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-[#f47721] to-[#ff923f] text-[#061b35] font-extrabold text-base hover:shadow-xl hover:shadow-orange-500/25 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                Start Shipping Free (Claim ₹500 Credit){" "}
                <FiArrowRight size={18} />
              </button>
              <button
                type="button"
                onClick={scrollToCalculator}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-base hover:bg-slate-50 transition-all cursor-pointer"
              >
                Calculate Live Rates
              </button>
            </div>

            <p className="mt-3 text-xs text-slate-500 font-medium">
              ✓ 0 Monthly Software Fees · ✓ Instant Onboarding in 3 Minutes · ✓
              29,000+ PIN Codes
            </p>
          </motion.div>

          {/* Micro-Tool: Instant Pincode Rate Checker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl p-3 sm:p-4"
          >
            <form
              onSubmit={handleQuickEstimate}
              className="flex flex-col sm:flex-row gap-2.5 items-center"
            >
              <div className="flex-1 w-full">
                <label className="sr-only">Pickup PIN</label>
                <input
                  type="text"
                  placeholder="Pickup PIN (e.g. 560001)"
                  value={quickPincode.origin}
                  onChange={(e) =>
                    setQuickPincode({ ...quickPincode, origin: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-[#071d3a] focus:outline-none focus:border-[#f47721]"
                />
              </div>
              <div className="text-slate-400 hidden sm:block">→</div>
              <div className="flex-1 w-full">
                <label className="sr-only">Delivery PIN</label>
                <input
                  type="text"
                  placeholder="Delivery PIN (e.g. 110001)"
                  value={quickPincode.dest}
                  onChange={(e) =>
                    setQuickPincode({ ...quickPincode, dest: e.target.value })
                  }
                  className="w-full px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-50 border border-slate-200 text-[#071d3a] focus:outline-none focus:border-[#f47721]"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#071d3a] text-white hover:bg-[#0c2b53] font-bold text-xs sm:text-sm shrink-0 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Check Best Courier{" "}
                <FiZap size={14} className="text-[#f47721]" />
              </button>
            </form>

            {quickRateResult && (
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Best Rate: {quickRateResult.rate} ({quickRateResult.courier})
                </span>
                <span className="text-slate-600 font-medium">
                  Estimated SLA: {quickRateResult.sla}
                </span>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="text-[#f47721] font-bold hover:underline"
                >
                  Book with ₹500 Credit →
                </button>
              </div>
            )}
          </motion.div>

          {/* Live Dispatch Simulation Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-14 max-w-4xl mx-auto rounded-3xl border border-slate-200 bg-white p-2.5 sm:p-4 shadow-[0_30px_90px_rgba(7,29,58,0.12)]"
          >
            <div className="rounded-2xl border border-slate-100 overflow-hidden">
              <div className="bg-[#081d39] px-6 py-3.5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 ml-2">
                    GrowShip Dispatch Command · Multi-Carrier Control
                  </span>
                </div>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full font-semibold border border-emerald-500/30">
                  ● 15 Couriers Active
                </span>
              </div>

              <div className="p-5 sm:p-7 bg-[#f8fafc] grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                    <span>Order #GC-9104</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Ready to Ship
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#071d3a]">
                    Noise Pro Smartwatch (2 Units)
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Weight: 0.65 kg · Bengaluru → Mumbai
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      Delhivery Air
                    </span>
                    <span className="font-black text-[#f47721]">₹24.50</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                    <span>Order #GC-9105</span>
                    <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      In Transit
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#071d3a]">
                    Organic Cotton Hoodie (Split 1/2)
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Weight: 0.90 kg · Surat → Gurugram
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">
                      BlueDart Priority
                    </span>
                    <span className="font-black text-[#f47721]">₹31.20</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase">
                    <span>COD Wallet Balance</span>
                    <span className="text-emerald-600 font-bold">
                      Auto-Reconciled
                    </span>
                  </div>
                  <p className="mt-2 text-2xl font-black text-[#071d3a]">
                    ₹ 84,250.00
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    T+2 Settlement scheduled for tomorrow
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-emerald-600 font-bold flex items-center gap-1">
                    <FiCheckCircle size={14} /> 0 Reconciliation Discrepancies
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================================
            SECTION 2: COURIER MARQUEE & STATS
        ========================================================================= */}
        <section className="py-12 bg-slate-900 text-white border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">
              Integrated with India’s Institutional Courier Infrastructure
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-300 font-bold text-sm sm:text-lg">
              <span className="hover:text-white transition">
                <img src={Shadowfax.src} alt="" width={250} />
              </span>
              <span className="hover:text-white transition">
                <img src={Delhivery.src} alt="" width={250} />
              </span>
              <span className="hover:text-white transition">
                <img src={Bluedart.src} alt="" width={350} />
              </span>
              <span className="hover:text-white transition">
                <img src={Dtdc.src} alt="" width={250} />
              </span>
              <span className="hover:text-white transition">
                <img
                  src={Xpressbees.src}
                  alt=""
                  width={250}
                  className="bg-black"
                />
              </span>
              <span className="hover:text-white transition">
                <img
                  src={Indiapost.src}
                  alt=""
                  width={250}
                  className="bg-black"
                />
              </span>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-800/80 text-center">
              <div>
                <p className="text-2xl sm:text-4xl font-black text-[#f47721]">
                  29,000+
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Indian PIN Codes Served
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-black text-[#f47721]">
                  15+
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Carriers in 1 Unified Wallet
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-black text-[#f47721]">
                  99.4%
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  First-Attempt Pickup SLA
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-4xl font-black text-[#f47721]">
                  T+2 Days
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  Early COD Remittance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: PROBLEM AGITATION (THE HIDDEN MARGIN BLEED)
        ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-3.5 py-1 rounded-full">
              The eCommerce Logistics Leak
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight mt-3">
              Why 80% of Growing D2C Brands Lose 30% of Net Margins to Shipping
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Independent couriers and bloated aggregator portals silently drain
              your cash flow through 4 painful leaks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 grid place-items-center mb-4">
                <FiAlertCircle size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#071d3a]">
                Fake Delivery Remarks
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Riders falsely tag &quot;Customer Unavailable&quot; without
                calling. You get hit with forward shipping plus double return
                fees for an order the buyer actually wanted.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-red-600">
                Avg. Loss: ₹140 per failed RTO
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#f47721] grid place-items-center mb-4">
                <FiClock size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#071d3a]">
                14-Day Trapped COD Funds
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Standard carriers sit on your collected cash for up to two
                weeks, choking your working capital and forcing you to pause
                Meta & Google ad campaigns.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#f47721]">
                Impact: 40% Liquidity Stagnation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 grid place-items-center mb-4">
                <LuLayers size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#071d3a]">
                Tab-Switching Burnout
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Warehouse staff waste hours juggling multiple portals, checking
                weight reconciliations, downloading AWBs, and manually
                contacting courier helpdesks.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-600">
                Wasted: 15+ Ops Hours / Week
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 grid place-items-center mb-4">
                <FiPackage size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#071d3a]">
                Blind Split Returns
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Multi-box orders get marked &quot;Delivered&quot; when only
                parcel 1 arrives. Frustrated customers initiate return claims
                before parcel 2 even reaches their city.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-purple-600">
                Risk: Premature Customer Disputes
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: CORE AGGREGATOR ENGINE (GROWSHIP PILLARS)
        ========================================================================= */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#f47721] bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full">
                The Growcord Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight mt-3">
                How GrowShip Turns Courier Chaos into Pure Operating Leverage
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#f47721] grid place-items-center mb-5">
                  <MdOutlineSpeed size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#071d3a]">
                  AI Courier Recommendation
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Never guess whether Delhivery or BlueDart performs better in
                  Tier-3 towns. Our routing algorithm evaluates real-time
                  transit times, SLA fidelity, and regional RTO history to book
                  the fastest, cheapest carrier automatically.
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> Dynamic rule-based
                    routing
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> Air vs. Surface SLA
                    optimization
                  </li>
                </ul>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 grid place-items-center mb-5">
                  <BiWallet size={26} />
                </div>
                <h3 className="text-xl font-bold text-[#071d3a]">
                  Single Unified Wallet
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Maintain one prepaid balance across all 15+ couriers. Every
                  single dispatch fee is transparently itemized with dead weight
                  and volumetric breakdowngiving your accountant instant,
                  audit-ready GST invoices.
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> Auto-recharge with
                    zero lock-in
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> Input tax credit
                    (ITC) ready bills
                  </li>
                </ul>
              </div>

              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 grid place-items-center mb-5">
                  <FaWhatsapp size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#071d3a]">
                  Automated WhatsApp NDR Desk
                </h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  When a courier marks an undelivered parcel, an automated
                  interactive WhatsApp message pings the buyer within seconds.
                  Customers can reschedule delivery, update landmarks, or
                  confirm refusal with one tap.
                </p>
                <ul className="mt-5 space-y-2 text-xs font-semibold text-slate-700">
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> 38% reduction in
                    costly RTO loops
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCheck className="text-emerald-500" /> Geotag-verified
                    fake attempt debunking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: INTERACTIVE SHIPPING RATE & SAVINGS CALCULATOR
        ========================================================================= */}
        <section
          id="rate-calculator"
          className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
        >
          <ShippingRateCalculator onSelectRate={() => setShowDemoModal(true)} />
        </section>

        {/* =========================================================================
            SECTION 6: THE NDR SHIELD & RTO DEFLECTOR VISUAL
        ========================================================================= */}
        <section className="py-20 bg-linear-to-b from-white to-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
                Active Fraud Defense
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight mt-3">
                Turn Failed Deliveries into Successful Orders in Under 60
                Seconds
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3">
                Experience how GrowShip automatically intercepts carrier
                non-delivery reports (NDRs) and secures verified customer action
                before the package turns back.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
              {/* Step Sequence Controller */}
              <div className="space-y-4">
                <button
                  type="button"
                  onClick={() => setActiveNdrStep(1)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    activeNdrStep === 1
                      ? "bg-white border-[#f47721] shadow-md ring-2 ring-orange-500/10"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-[#f47721] font-bold text-xs grid place-items-center">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#071d3a]">
                        Courier Logs Attempt Exception
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Rider reports &quot;Customer not reachable at
                        location&quot;.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNdrStep(2)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    activeNdrStep === 2
                      ? "bg-white border-[#f47721] shadow-md ring-2 ring-orange-500/10"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-[#f47721] font-bold text-xs grid place-items-center">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#071d3a]">
                        Instant Buyer Outreach via WhatsApp
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Automated interactive notification sent in customer’s
                        preferred language.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveNdrStep(3)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all ${
                    activeNdrStep === 3
                      ? "bg-white border-[#f47721] shadow-md ring-2 ring-orange-500/10"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs grid place-items-center">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#071d3a]">
                        Auto-Reschedule Injected to Carrier
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Rider run-sheet updated for next morning with verified
                        address and timing.
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              {/* WhatsApp Mockup Display */}
              <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-white relative">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold">
                      Growcord Comms · Verified Business
                    </span>
                  </div>
                  <span className="text-slate-400">Live Simulation</span>
                </div>

                <div className="mt-4 p-4 rounded-2xl bg-[#0b2447] border border-blue-900/60 text-xs space-y-3">
                  <p className="text-slate-200">
                    👋 <span className="font-bold text-white">Hi Rahul!</span>{" "}
                    Delhivery attempted to deliver your Growcord order{" "}
                    <span className="text-orange-400 font-bold">#GC-9104</span>{" "}
                    today.
                  </p>
                  <p className="text-slate-300">
                    Rider note:{" "}
                    <span className="italic text-yellow-300">
                      &quot;Customer unavailable at door&quot;
                    </span>
                  </p>
                  <p className="text-slate-200 font-semibold">
                    How would you like us to proceed?
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="p-2.5 rounded-xl bg-[#f47721] text-[#061b35] font-black text-center cursor-pointer hover:bg-orange-400 transition">
                      ✓ Re-attempt Tomorrow (Between 2 PM - 6 PM)
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/10 text-slate-200 font-semibold text-center hover:bg-white/15 transition cursor-pointer">
                      📍 Update Delivery Address / Drop with Security
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Buyer confirmed re-attempt</span>
                  <span className="text-emerald-400 font-bold">
                    ✓ Direct SLA Sync Enabled
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: THE GROWCORD ECOSYSTEM MOAT (VS STANDALONE AGGREGATORS)
        ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#071d3a] bg-slate-100 border border-slate-300 px-3.5 py-1 rounded-full">
              Full-Stack Synergy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight mt-3">
              Shipping Doesn&apos;t Happen in a Silo. Neither Does Growcord.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Standalone aggregators like Shiprocket force you to connect 5
              external apps and pay separate subscription fees. Growcord
              integrates your entire commerce engine natively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-black text-[#f47721] uppercase">
                Step 1 · Sell
              </span>
              <h3 className="text-base font-bold text-[#071d3a] mt-1">
                Commerce & POS Store
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                Orders from your online website and retail counter flow directly
                into dispatch with verified address validation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-black text-blue-600 uppercase">
                Step 2 · Pack
              </span>
              <h3 className="text-base font-bold text-[#071d3a] mt-1">
                Growcord WMS
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                Batch pick-and-pack scanning auto-generates thermal shipping
                labels and carrier pickup manifests in seconds.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-black text-emerald-600 uppercase">
                Step 3 · Ship
              </span>
              <h3 className="text-base font-bold text-[#071d3a] mt-1">
                GrowShip Aggregator
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                15+ courier options booked at lowest rates from 1 wallet.
                Automated 15-minute scheduled tracking sync.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <span className="text-xs font-black text-purple-600 uppercase">
                Step 4 · Reconcile
              </span>
              <h3 className="text-base font-bold text-[#071d3a] mt-1">
                Growcord Books & Comms
              </h3>
              <p className="text-xs text-slate-600 mt-2">
                WhatsApp updates sent under your brand name; COD remittance
                auto-matched in your GST ledger without spreadsheets.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: 6 CORE CAPABILITY CARDS
        ========================================================================= */}
        <section className="py-16 bg-slate-50 border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight">
                Built for High-Volume D2C Execution
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#f47721] grid place-items-center mb-4">
                  <FiDollarSign size={22} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  T+2 Early COD Remittance
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Receive cash collected by delivery partners in 48 hours. Keep
                  working capital fluid for continuous marketing and inventory
                  purchases.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 grid place-items-center mb-4">
                  <FiGlobe size={22} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  Custom Branded Tracking Portal
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Host tracking under `track.yourbrand.com`. Showcase live
                  timeline status, custom banners, and cross-sell
                  recommendations generating 8% repeat sales.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 grid place-items-center mb-4">
                  <LuLayers size={22} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  True Split-Parcel Visibility
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Split items across boxes and carriers. Each parcel gets its
                  own AWB; the order marks &quot;Delivered&quot; only when the
                  final parcel arrives.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 grid place-items-center mb-4">
                  <FiPrinter size={22} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  Bulk Thermal Label Generator
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Print 500+ thermal 4x6 labels and pickup manifests with 1
                  click. Zero manual data entry or cut-and-paste errors.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 grid place-items-center mb-4">
                  <FaShieldAlt size={20} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  Integrated Transit Protection
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Protect consignments against physical damage, pilferage, and
                  loss up to ₹5,000 per box with rapid in-app claim processing.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 grid place-items-center mb-4">
                  <FiRefreshCw size={22} />
                </div>
                <h3 className="text-base font-bold text-[#071d3a]">
                  Doorstep Reverse Pickups
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Automate returns and exchanges with quality-check validation
                  at pickup door, ensuring returned items match order
                  specifications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9: HEAD-TO-HEAD COMPARISON TABLE
        ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight">
              Compare GrowShip with Industry Alternatives
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              See how our transparent aggregator model provides more capability
              with zero subscription bloat.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#071d3a] text-white">
                  <th className="p-4 sm:p-5 font-bold">Feature / Capability</th>
                  <th className="p-4 sm:p-5 font-bold text-[#f47721] bg-[#0c2b53]">
                    GrowShip Aggregator
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-200">
                    Shiprocket
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-slate-200">
                    Direct Courier (Delhivery)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Base Shipping Rate (500g)
                  </td>
                  <td className="p-4 sm:p-5 font-extrabold text-[#f47721] bg-orange-50/30">
                    From ₹19
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">From ₹21 - ₹29</td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    ₹45 - ₹80 (Retail)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Monthly Software Retainer
                  </td>
                  <td className="p-4 sm:p-5 font-extrabold text-emerald-700 bg-orange-50/30">
                    ₹0 (Forever Free)
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Up to ₹7,000 / month
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">₹0</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Couriers Included in 1 Account
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a] bg-orange-50/30">
                    15+ Premier Carriers
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">14+ Carriers</td>
                  <td className="p-4 sm:p-5 text-slate-600">1 Carrier Only</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Automated WhatsApp NDR Desk
                  </td>
                  <td className="p-4 sm:p-5 font-extrabold text-emerald-700 bg-orange-50/30">
                    Included Free
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Extra Paid Addon
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Manual / Call Center
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    COD Remittance SLA
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a] bg-orange-50/30">
                    T+2 Days Standard
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    T+2 on Premium Plans
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Weekly / Bi-Weekly
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Multi-Parcel Split Tracking
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-emerald-700 bg-orange-50/30">
                    ✓ Native Rollup
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">Basic</td>
                  <td className="p-4 sm:p-5 text-slate-600">✕ Unsupported</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 sm:p-5 font-bold text-[#071d3a]">
                    Native Store & Inventory Sync
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#f47721] bg-orange-50/30">
                    ✓ Growcord Suite
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Requires 3rd Party Apps
                  </td>
                  <td className="p-4 sm:p-5 text-slate-600">
                    Custom Dev Needed
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================================================================
            SECTION 10: STEP-BY-STEP ONBOARDING ("SHIP IN 3 MINUTES")
        ========================================================================= */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight">
                From Sign-Up to First Dispatch in 3 Simple Steps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
                <span className="text-4xl font-black text-slate-200">01</span>
                <h3 className="text-base font-bold text-[#071d3a] mt-2">
                  1-Click Store Connection
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Connect Shopify, WooCommerce, Amazon, or custom ERP in 60
                  seconds with our zero-code setup.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
                <span className="text-4xl font-black text-slate-200">02</span>
                <h3 className="text-base font-bold text-[#071d3a] mt-2">
                  Instant KYC & Wallet Setup
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Enter your GST/PAN to activate your account instantly and
                  receive ₹500 in free trial shipping credits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative">
                <span className="text-4xl font-black text-slate-200">03</span>
                <h3 className="text-base font-bold text-[#071d3a] mt-2">
                  Print Labels & Request Pickup
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pick orders, let AI select the fastest carrier, batch-print
                  labels, and carrier pickups arrive today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 11: VERIFIED SOCIAL PROOF
        ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#071d3a] tracking-tight">
              Trusted by High-Velocity D2C Merchants
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-700 italic leading-relaxed">
                &quot;Switching to GrowShip cut our monthly shipping bill by 18%
                compared to our previous aggregator. The automated WhatsApp NDR
                engine alone saved us ₹1.4 Lakhs in avoided RTO charges during
                the Diwali rush.&quot;
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#f47721] font-bold grid place-items-center text-sm">
                  KM
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071d3a]">
                    Kunal Mehta
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Head of Operations, Artisan Footwear
                  </p>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <p className="text-sm text-slate-700 italic leading-relaxed">
                &quot;The biggest game-changer is having our eCommerce
                storefront, warehouse stock, and multi-courier shipping under
                one roof. No sync lag, no lost tracking webhooks, and COD
                payouts land in 48 hours.&quot;
              </p>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 font-bold grid place-items-center text-sm">
                  PS
                </div>
                <div>
                  <p className="text-xs font-bold text-[#071d3a]">
                    Pooja Sharma
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Co-Founder, Aura Organics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 12: SEO FAQ ACCORDION (REUSING FAQSection)
        ========================================================================= */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection
              title="Frequently Asked Questions"
              description="Everything you need to know about shipping with Growcord's multi-carrier aggregator."
              faqs={SHIPPING_FAQS}
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION 13: HIGH-CONVERSION BOTTOM CTA & FREE CREDIT OFFER
        ========================================================================= */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl bg-linear-to-r from-[#071d3a] via-[#0c2b53] to-[#071d3a] p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                Instant ₹500 Welcome Balance
              </span>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Ready to Upgrade Your eCommerce Shipping Operations?
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Join hundreds of Indian D2C brands delivering faster across
                29,000+ PIN codes with institutional courier rates and zero
                monthly subscription fees.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-[#f47721] to-[#ff923f] text-[#061b35] font-extrabold text-base hover:shadow-xl hover:shadow-orange-500/30 transition cursor-pointer"
                >
                  Claim ₹500 Credit & Start Shipping{" "}
                  <FiArrowRight className="inline ml-1" />
                </button>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(true)}
                  className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/20 text-white font-bold text-base hover:bg-white/10 transition cursor-pointer"
                >
                  Book a 1-on-1 Logistics Audit
                </button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
                <span>✓ No credit card required</span>
                <span>✓ Zero setup fee</span>
                <span>✓ Instant activation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Popup */}
        {showDemoModal && (
          <DemoPopup
            pageId="shipping-services"
            config={{
              title: "Claim Your ₹500 Shipping Credit",
              subtitle:
                "Start shipping with 15+ couriers at institutional discounted rates.",
            }}
            onClose={() => setShowDemoModal(false)}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
