"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import StatsSection from "@/components/landing/StatsSection";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import FaqSection from "@/components/FaqSection";
import PricingCheckoutButton from "@/components/pricing/PricingCheckoutButton";
import CommissionWorkedExample from "@/components/pricing/CommissionWorkedExample";

import { LuCheck } from "react-icons/lu";
import {
  FaCheck,
  FaTimes,
  FaWhatsapp,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { faIcon } from "./icons";
import { PAGE_IMAGES } from "@/data/images";
import { PRODUCT_NAV } from "@/data/productNav";

const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export const SUITE_PRICING = {
  commerce: "₹9,999 setup + 5% or 10% of delivered orders",
  retail: "Included  counter sales earn the same commission",
  trade: "Included  B2B orders commissioned like any order",
  ship: "Pay per shipment (own accounts or platform wallet)",
  wms: "Included with your organisation",
  make: "Included with your organisation",
  books: "Included with your organisation",
  finance: "Beta  free while in beta",
  crm: "Included · playbook messages billed by purpose",
  comms: "Pay per message, by purpose",
  whatsapp: "Plans in the app · Meta’s rates, no markup",
  reach: "Included · ad budget paid directly to Google & Meta",
  social: "Beta  request access",
  links: "Free to start · plans in the app",
  insights: "Included with your organisation",
  "seo-insights": "Beta · included with our SEO service",
  people: "Included · access granted per person",
  "growcord-id": "Free",
};

export const PRICING_FAQS = [
  {
    q: "Is there a monthly fee for a Growcord online store?",
    a: "No. You pay a one-time setup fee of ₹9,999 and then a commission only on delivered orders  5% on Self Managed, 10% on Fully Managed. GST at 18% applies to our fees.",
  },
  {
    q: "When is commission charged?",
    a: "Only after an order is delivered and its return window has closed. Cancelled orders, returned orders and failed deliveries are never charged. Commissions are billed on a monthly GST tax invoice.",
  },
  {
    q: "Is commission calculated on the price including GST?",
    a: "No. Commission is calculated on the order’s value excluding the GST your customer paid, so you never pay commission on tax you collect for the government.",
  },
  {
    q: "What is the difference between Self Managed and Fully Managed?",
    a: "Self Managed gives you the complete platform to run yourself. Fully Managed adds our team: product uploads and inventory, shipping and failed-delivery handling, RTO verification, cart recovery, ads management and a dedicated account manager.",
  },
  {
    q: "How are WhatsApp and SMS messages priced?",
    a: "By purpose. Login OTPs carry no platform charge, service messages such as order updates are low-priced and marketing messages cost more. WhatsApp is billed at Meta’s own rate with no markup.",
  },
  {
    q: "Do I pay extra for Books, WMS, CRM or Insights?",
    a: "For Growcord stores these products switch on for your organisation without a separate subscription. Businesses that want suite products without an online store should talk to us for a quote.",
  },
  {
    q: "Who pays for advertising?",
    a: "Your ad budget is paid directly to Google, Meta or the ad platform from your own account. Growcord charges only for ad management when you choose that service.",
  },
];

export default function PricingClassic({
  ecomPlans = [],
  landingPlans = [],
  services = [],
}) {
  const setupFee = ecomPlans[0]?.price ?? 9999;

  return (
    <div className="min-h-screen bg-[#fbfcfe] text-[#071d3a] selection:bg-[#f47721]/20 font-sans antialiased">
      <Navbar />

      <main>
        {/* =========================================================================
            STAGE 1: HERO (ATTENTION & ZERO-RENT VALUE PROPOSITION)
        ========================================================================= */}
        <VisualHero
          headline="Pay When You Sell, Not Rent for Software"
          subheadline="Online stores pay a one-time setup and a small share of delivered orders. Suite products switch on for your organisation with zero subscription retainers. Messages and shipping are billed strictly by what you use."
          ctaText="See E-commerce Plans"
          ctaLink="#ecommerce"
          secondaryCtaText="Get an Instant Quote"
          secondaryCtaLink="/calculator/step1"
          badge="💰 Transparent Commission-Based Pricing"
          features={[
            "No Monthly Rent",
            "5% or 10% on Delivered Orders Only",
            "Login OTPs Free",
            "WhatsApp at Meta’s Direct Rate",
          ]}
          page="Pricing"
          aiBadges={false}
        />

        {/* =========================================================================
            STAGE 2: STATS TICKER (IMMEDIATE REASSURANCE & TRUST NUMBERS)
        ========================================================================= */}
        <section aria-label="Key Pricing Metrics">
          <StatsSection
            stats={[
              { value: "₹0", label: "Monthly Platform Rent" },
              { value: "5%", label: "Self Managed Commission" },
              { value: "10%", label: "Fully Managed Commission" },
              { value: inr(setupFee), label: "One-Time Setup Fee" },
            ]}
          />
        </section>

        {/* =========================================================================
            STAGE 3: CORE E-COMMERCE PLANS (THE PRIMARY DECISION OFFER)
        ========================================================================= */}
        <section
          id="ecommerce"
          className="py-24 sm:py-32 bg-gray-950 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="inline-block bg-orange-600/20 text-orange-400 border border-orange-500/30 px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                E-Commerce Storefront Plans
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Choose Who Runs Your Store
              </h2>
              <p className="mt-4 text-base sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                One-time setup license of {inr(setupFee)} + 5% or 10% commission
                on delivered orders. No recurring monthly software rent. No
                hidden transaction cuts. Pay strictly when you collect revenue.
              </p>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-6">
                {[
                  "✓ Zero Monthly Rent",
                  "✓ No Hidden Fees",
                  "✓ ₹0 on Cancelled or Returned Orders",
                  "✓ Monthly GST Tax Invoice",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm text-emerald-400 font-bold bg-emerald-950/40 border border-emerald-500/20 px-3.5 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.header>

            {/* Master Setup Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto bg-linear-to-br from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-1 shadow-2xl"
            >
              <div className="bg-gray-900 rounded-[1.4rem] overflow-hidden">
                {/* One-Time Setup Header */}
                <header className="p-6 sm:p-10 text-center border-b border-white/10 relative overflow-hidden bg-gray-950/60">
                  <div className="relative z-10">
                    <span className="text-emerald-400 text-xs sm:text-sm font-black uppercase tracking-widest inline-block mb-2">
                      One-Time Lifetime License
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                      Growcord Setup & Storefront Deployment
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-2 sm:gap-4 mb-4">
                      <span className="text-xl sm:text-2xl text-gray-500 line-through">
                        ₹25,000
                      </span>
                      <span className="text-5xl sm:text-7xl font-black text-white tracking-tight">
                        {inr(setupFee)}
                      </span>
                      <span className="text-base sm:text-lg text-gray-400 font-medium">
                        + 18% GST
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
                      Includes complete online store design, high-speed cloud
                      hosting setup, custom domain connection, Razorpay & UPI
                      gateway integration, multi-courier shipping configuration,
                      and 1-on-1 launch onboarding.
                    </p>
                  </div>
                </header>

                {/* The 2 Tier Articles: Self Managed vs Fully Managed */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
                  {ecomPlans.map((plan) => {
                    const features = Array.isArray(plan.features)
                      ? plan.features
                      : [];
                    const commission = features.find((f) =>
                      /commission/i.test(f),
                    );
                    const rate = commission?.match(/(\d+(?:\.\d+)?)\s*%/)?.[1];
                    const restFeatures = features.filter(
                      (f) => f !== commission,
                    );
                    const isPopular = Boolean(plan.popular);

                    return (
                      <motion.article
                        key={plan.id}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className={`p-6 sm:p-10 flex flex-col justify-between transition-colors relative group ${
                          isPopular
                            ? "bg-white/[0.04]"
                            : "hover:bg-white/[0.02]"
                        }`}
                      >
                        {isPopular && (
                          <div className="absolute top-0 right-0 bg-linear-to-r from-orange-600 to-amber-500 text-white text-[11px] font-black tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md uppercase">
                            RECOMMENDED
                          </div>
                        )}

                        <div>
                          <header className="mb-6">
                            <h3
                              className={`text-2xl font-bold mb-2 ${isPopular ? "text-white" : "text-orange-400"}`}
                            >
                              {plan.name}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[40px]">
                              {plan.description}
                            </p>
                          </header>

                          <div className="mb-6 pb-6 border-b border-white/10">
                            <div className="flex items-baseline gap-2">
                              <span
                                className={`text-5xl sm:text-6xl font-black tracking-tight ${
                                  isPopular
                                    ? "text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300"
                                    : "text-white"
                                }`}
                              >
                                {rate ? `${rate}%` : inr(plan.price)}
                              </span>
                              <span className="text-xs text-gray-400 font-medium">
                                of delivered order value
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                              Excluding GST · Billed monthly on verified
                              deliveries
                            </p>
                          </div>

                          <ul
                            className="space-y-3.5 text-gray-300 text-xs sm:text-sm mb-8"
                            aria-label={`${plan.name} features`}
                          >
                            {restFeatures.map((f) => (
                              <li key={f} className="flex items-start gap-3">
                                <LuCheck className="text-emerald-400 shrink-0 text-base mt-0.5" />
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <PricingCheckoutButton
                            planId={plan.id}
                            planName={plan.name}
                            planPrice={Number(plan.price)}
                            isPopular={isPopular}
                          >
                            Choose {plan.name}
                          </PricingCheckoutButton>
                        </div>
                      </motion.article>
                    );
                  })}
                </div>

                {/* Trust Footer */}
                <footer className="p-6 text-center border-t border-white/10 bg-black/40 text-xs text-gray-400 space-y-1">
                  <p>
                    Secure payment checkout powered by Razorpay. Commission is
                    calculated strictly on delivered orders after the customer
                    return window has closed.
                  </p>
                  <p className="text-gray-500 text-[11px]">
                    All plans include: Free SSL Certificate, Automated Daily
                    Backups, Unlimited Products, Unlimited Staff Logins,
                    OTP-Verified COD, and Continuous Core Updates.
                  </p>
                </footer>
              </div>
            </motion.div>

            {/* Quick Consultation Link */}
            <div className="text-center mt-12">
              <p className="text-gray-400 text-sm mb-3">
                Need guidance on which model fits your order volume?
              </p>
              <a
                href="https://wa.me/917827831337"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-lg shadow-emerald-900/30"
              >
                <FaWhatsapp className="text-lg" /> Chat with an eCommerce
                Specialist
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 4: COMMISSION TRANSPARENCY (WORKED EXAMPLE & CALCULATOR)
        ========================================================================= */}
        <section
          id="commission-model"
          className="py-24 bg-linear-to-b from-white via-orange-50/20 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  100% Transparent Financial Mechanics
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
                  You Pay Commission Only on Money{" "}
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-600">
                    You Actually Kept
                  </span>
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
                  An order earns commission only when it has been successfully
                  delivered and its return window has elapsed. Cancellations,
                  returns, and failed delivery attempts never incur commission.
                  Crucially, the GST collected from your customer is never part
                  of the calculation.
                </p>

                <ul className="mt-8 space-y-4 text-sm sm:text-base text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center shrink-0 mt-0.5">
                      <FaCheck size={12} />
                    </span>
                    <div>
                      <strong className="block text-gray-900">
                        Calculated on Net Order Value
                      </strong>
                      <span className="text-gray-600 text-xs sm:text-sm">
                        GST paid by the customer is deducted before calculating
                        our 5% or 10%.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center shrink-0 mt-0.5">
                      <FaCheck size={12} />
                    </span>
                    <div>
                      <strong className="block text-gray-900">
                        Protected Against RTO & Returns
                      </strong>
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Returned orders and failed courier attempts are charged
                        ₹0 platform fee.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 grid place-items-center shrink-0 mt-0.5">
                      <FaCheck size={12} />
                    </span>
                    <div>
                      <strong className="block text-gray-900">
                        Claim Full Input Tax Credit (ITC)
                      </strong>
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Billed on a monthly GST invoice so you can claim back
                        the 18% tax on our fee.
                      </span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Interactive Worked Simulator */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CommissionWorkedExample />
              </motion.div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 5: PLAN COMPARISON MATRIX (DECISION CLARITY)
        ========================================================================= */}
        <section
          id="comparison"
          className="py-20 sm:py-24 bg-gray-50 border-y border-gray-200/80"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-14">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100/60 px-3.5 py-1 rounded-full">
                Plan Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
                Self Managed vs.{" "}
                <span className="text-orange-600">Fully Managed</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
                Both tiers include the entire Growcord Commerce software engine.
                The only difference is whether our operational execution team
                manages daily logistics, ads, and catalogs with you.
              </p>
            </header>

            <div className="overflow-x-auto shadow-xl rounded-3xl border border-gray-200 bg-white">
              <table className="w-full border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-950 text-white">
                    <th
                      scope="col"
                      className="p-5 sm:p-6 font-bold text-sm sm:text-base"
                    >
                      Core Operations & Support
                    </th>
                    <th
                      scope="col"
                      className="p-5 sm:p-6 text-center font-bold text-sm sm:text-base text-gray-300"
                    >
                      Self Managed (5%)
                    </th>
                    <th
                      scope="col"
                      className="p-5 sm:p-6 text-center font-bold text-sm sm:text-base bg-orange-600 relative"
                    >
                      <span className="absolute -top-1 left-0 right-0 bg-amber-400 text-gray-950 text-[10px] font-black py-0.5 uppercase tracking-wider">
                        Most Popular
                      </span>
                      Fully Managed (10%)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [
                      "Complete Commerce Storefront on Your Custom Domain",
                      true,
                      true,
                    ],
                    [
                      "GST Billing, Razorpay, Instant UPI & OTP-Verified COD",
                      true,
                      true,
                    ],
                    [
                      "15+ Multi-Courier Aggregation & Live WhatsApp Updates",
                      true,
                      true,
                    ],
                    [
                      "Product Catalog Uploads, Optimization & Inventory Sync",
                      false,
                      true,
                    ],
                    [
                      "Courier Dispatch Booking & Non-Delivery (NDR) Resolution",
                      false,
                      true,
                    ],
                    [
                      "Automated RTO Risk Scoring & COD Fraud Filtering",
                      false,
                      true,
                    ],
                    [
                      "Abandoned Cart WhatsApp Recovery Workflows Run for You",
                      false,
                      true,
                    ],
                    [
                      "Meta (Facebook/Instagram) & Google Ads Media Buying",
                      false,
                      true,
                    ],
                    [
                      "Dedicated Senior Account Manager & Monthly Strategy Reviews",
                      false,
                      true,
                    ],
                  ].map(([feature, selfVal, managedVal]) => (
                    <tr
                      key={feature}
                      className="hover:bg-gray-50/80 transition-colors"
                    >
                      <th
                        scope="row"
                        className="p-4 sm:p-5 font-semibold text-gray-800 border-r border-gray-100"
                      >
                        {feature}
                      </th>
                      <td className="p-4 sm:p-5 text-center border-r border-gray-100">
                        {selfVal ? (
                          <FaCheck className="mx-auto text-emerald-600 text-base sm:text-lg" />
                        ) : (
                          <FaTimes className="mx-auto text-gray-300 text-base sm:text-lg" />
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center bg-orange-50/20">
                        {managedVal ? (
                          <FaCheck className="mx-auto text-emerald-600 text-base sm:text-lg" />
                        ) : (
                          <FaTimes className="mx-auto text-gray-300 text-base sm:text-lg" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 6: SOCIAL PROOF (MOVED UP FOR MAXIMUM CONVERSION CONVICTION)
        ========================================================================= */}
        <section id="reviews" aria-label="Client Testimonials and Social Proof">
          <Testimonials title="What Growing Indian Brands Say About Growcord" />
        </section>

        {/* =========================================================================
            STAGE 7: SUITE PRODUCTS ECOSYSTEM (MODULAR ADD-ONS)
        ========================================================================= */}
        <section id="suite" className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <header className="text-center mb-14">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3.5 py-1 rounded-full">
                The Growcord Suite
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2">
                How Each Modular Product Is Priced
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
                Most suite applications switch on automatically for your
                Growcord organisation without recurring per-app subscription
                retainers.
              </p>
            </header>

            <div className="overflow-x-auto shadow-xl rounded-3xl border border-gray-200 bg-white">
              <table className="w-full min-w-[700px] border-collapse text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-950 text-white">
                    <th
                      scope="col"
                      className="p-5 font-bold text-sm sm:text-base"
                    >
                      Product Module
                    </th>
                    <th
                      scope="col"
                      className="p-5 font-bold text-sm sm:text-base"
                    >
                      Operational Scope
                    </th>
                    <th
                      scope="col"
                      className="p-5 font-bold text-sm sm:text-base bg-orange-600"
                    >
                      Pricing Model
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {PRODUCT_NAV.map((p) => {
                    const Icon = faIcon(p.icon);
                    return (
                      <tr
                        key={p.slug}
                        className="hover:bg-gray-50/80 transition-colors align-top"
                      >
                        <th
                          scope="row"
                          className="p-5 border-r border-gray-100 font-bold"
                        >
                          <Link
                            href={`/products/${p.slug}`}
                            className="inline-flex items-center gap-3 text-gray-900 hover:text-orange-600 group"
                          >
                            <span className="w-9 h-9 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                              <Icon size={16} />
                            </span>
                            <span className="text-sm">{p.name}</span>
                            {p.status !== "live" && (
                              <span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                Beta
                              </span>
                            )}
                          </Link>
                        </th>
                        <td className="p-5 text-gray-600 border-r border-gray-100 leading-relaxed">
                          {p.summary}
                        </td>
                        <td className="p-5 font-bold text-gray-900 bg-emerald-50/20">
                          {SUITE_PRICING[p.slug] ||
                            "Included with organisation"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 8: USAGE & COMMUNICATION PRICING
        ========================================================================= */}
        <section
          id="usage"
          className="py-24 bg-linear-to-br from-orange-50/40 via-white to-purple-50/30 border-t border-gray-200/70"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3.5 py-1 rounded-full">
                Usage-Based Metering
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2">
                Messages Priced by What They&apos;re For
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
                The objective of a message dictates its pricedetermined by its
                trigger, never by who hits send. Zero markup on official
                WhatsApp Meta conversation rates.
              </p>
            </motion.header>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              className="grid md:grid-cols-3 gap-6 sm:gap-8"
            >
              {[
                {
                  icon: "key",
                  tag: "Zero Platform Charge",
                  title: "Authentication Messages",
                  text: "Login OTPs, COD verification codes, magic passwordless links, and account security resets.",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: "package",
                  tag: "Ultra-Low Cost",
                  title: "Service Notifications",
                  text: "Order confirmations, payment receipts, real-time dispatch updates, tracking links, and GST invoices.",
                  color: "from-orange-500 to-amber-600",
                },
                {
                  icon: "megaphone",
                  tag: "Standard ROI Tier",
                  title: "Marketing Campaigns",
                  text: "Promotional broadcasts, seasonal discount announcements, abandoned cart recoveries, and re-order playbooks.",
                  color: "from-purple-500 to-indigo-600",
                },
              ].map((c) => {
                const Icon = faIcon(c.icon);
                return (
                  <motion.article
                    key={c.title}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                    }}
                    whileHover={{ y: -6 }}
                    className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-200/90 hover:border-orange-300 transition-all duration-300"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl bg-linear-to-r ${c.color} flex items-center justify-center text-white text-2xl mb-5 shadow-md`}
                    >
                      <Icon />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-orange-600 block mb-1">
                      {c.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {c.text}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                [
                  "Direct Meta WhatsApp",
                  "Billed at Meta's raw conversation rate for India. Growcord adds zero markup.",
                ],
                [
                  "BYO Carrier Accounts",
                  "Bring your own SMS gateway, SMTP server, or WhatsApp WABA number with metered usage.",
                ],
                [
                  "Unified Courier Wallet",
                  "Use your connected courier accounts or ship on our bulk corporate rates from a single prepaid balance.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-gray-950 text-white p-5 sm:p-6 rounded-2xl border border-gray-800"
                >
                  <h4 className="text-base font-bold text-orange-400 mb-1">
                    {title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            STAGE 9: GROWTH SERVICES CATALOGUE
        ========================================================================= */}
        <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-24">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3.5 py-1 rounded-full">
              Growth Marketing Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-2">
              Services with Transparent Starting Rates
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-2">
              Prices pulled directly from our live instant-quote calculator
              catalogue.
            </p>
          </motion.header>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => {
              const Icon = faIcon(s.icon);
              return (
                <motion.div
                  key={s.slug}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                  }}
                  whileHover={{ y: -4 }}
                >
                  <Link
                    href={`/${s.slug}`}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-400 flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-linear-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white text-xl mb-4 group-hover:scale-105 transition-transform shadow-xs">
                        <Icon />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-orange-600 transition-colors">
                        {s.name}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {s.tagline}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <span className="text-[11px] text-gray-500 font-semibold uppercase block">
                        {s.priceLabel}
                      </span>
                      <span className="text-xl font-black text-orange-600 block mt-0.5">
                        {s.priceValue}
                      </span>
                      {s.priceUnit && (
                        <span className="text-[11px] text-gray-500">
                          {s.priceUnit}
                        </span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="text-center mt-10">
            <Link
              href="/calculator/step1"
              className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-200 shadow-md text-sm sm:text-base"
            >
              Calculate Your Custom Marketing Plan <FaArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* =========================================================================
            STAGE 10: SPECIALIZED REAL ESTATE LANDING PLANS
        ========================================================================= */}
        {landingPlans.length > 0 && (
          <section
            id="landing-plans"
            className="py-24 bg-gray-950 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
              >
                <span className="inline-block bg-white/10 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-white/5">
                  Project Launch Tiers
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                  Real Estate Project Landing Pages
                </h2>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-2">
                  High-conversion landing architectures with integrated
                  lead-capture, brochures, and CRM webhook routing.
                </p>
              </motion.header>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } }
                }}
                className="grid md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
              >
                {landingPlans.map((plan) => {
                  const isPopular = Boolean(plan.popular);
                  return (
                    <motion.article
                      key={plan.id}
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                      }}
                      whileHover={{ y: -6 }}
                      className={`relative bg-gray-900 rounded-3xl p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 ${
                        isPopular
                          ? "border-orange-500 shadow-2xl shadow-orange-500/20 md:-translate-y-2"
                          : "border-gray-800 hover:border-gray-700"
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-linear-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-xs font-black shadow-md uppercase tracking-wider">
                          POPULAR
                        </div>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline gap-2 mb-3">
                          <span
                            className={`text-3xl sm:text-4xl font-extrabold ${isPopular ? "text-orange-400" : "text-white"}`}
                          >
                            {inr(plan.price)}
                          </span>
                          <span className="text-xs text-gray-400">
                            / one-time setup
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed mb-6">
                          {plan.description}
                        </p>

                        <ul
                          className="space-y-2.5 text-xs text-gray-300 mb-8"
                          aria-label={`${plan.name} features`}
                        >
                          {(plan.features || []).map((f) => (
                            <li key={f} className="flex items-start gap-2.5">
                              <FaCheck className="text-emerald-400 text-xs mt-1 shrink-0" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <PricingCheckoutButton
                          planId={plan.id}
                          planName={plan.name}
                          planPrice={Number(plan.price)}
                          isPopular={isPopular}
                        >
                          Deploy {plan.name}
                        </PricingCheckoutButton>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          </section>
        )}

        {/* =========================================================================
            STAGE 11: SEO FAQ ACCORDION (STRUCTURED FOR SNIPPETS)
        ========================================================================= */}
        <section id="faq" className="py-20 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FaqSection
              faqs={PRICING_FAQS}
              title="Pricing Frequently Asked Questions"
              description="Clear answers about store setups, commission deductions, billing schedules, and usage fees."
            />
          </div>
        </section>

        {/* =========================================================================
            STAGE 12: FINAL CONVERSION CTA (RISK-FREE ACTION)
        ========================================================================= */}
        <section id="cta" aria-label="Get Started with Growcord">
          <CTASection
            headline="Ready to Launch Your Store with Zero Monthly Rent?"
            subheadline="Tell us about your brand and products. We'll recommend the ideal setup and onboarding pathwith zero sales pressure."
            primaryCtaText="Calculate Your Exact Cost"
            primaryCtaLink="/calculator/step1"
            secondaryCtaText="Schedule a 1-on-1 Consultation"
            secondaryCtaLink="/contact-us"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
