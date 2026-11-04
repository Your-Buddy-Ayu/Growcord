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
  FiLayers,
  FiLock,
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
// MASTER 20 INTEGRATIONS DATABASE
// ==========================================

export const INTEGRATIONS_MASTER_DATA = {
  shopify: {
    name: "Shopify",
    category: "Storefront E-Commerce",
    badge: "1-Click Webhook Sync",
    seoTitle: "Shopify Shipping Automation & Multi-Carrier Integration",
    seoDesc:
      "Connect Shopify to GrowShip in 1 click. Automate order syncs, thermal label printing, 15-min tracking refreshes, and proactive NDR action.",
    heroSubtitle:
      "Instantly sync your Shopify store orders, customer addresses, and line items into GrowShip's unified dispatch command centre with zero middleware lag.",
    syncSpeed: "Real-Time Webhook Sync (< 2 seconds)",
    setupTime: "Under 3 Minutes via Private App / OAuth",
    syncItems: [
      "Automatic order & address import from Shopify checkout",
      "Instant fulfillment status update back to Shopify upon AWB booking",
      "Automated tracking number mapping and shipping confirmation emails",
      "Support for Shopify multi-location inventory mapping",
    ],
    architectureHighlights: [
      "Bypasses slow polling by listening directly to Shopify order webhooks",
      "Automatically recognises customer phone numbers for Growcord Comms alerts",
      "Handles split orders when items are fulfilled from separate warehouse locations",
    ],
    faqs: [
      {
        q: "How does GrowShip connect with Shopify?",
        a: "Connection takes less than 3 minutes using a secure OAuth token or private app credentials. Once linked, all incoming orders flow directly into your GrowShip dispatch queue.",
      },
      {
        q: "Does fulfilling an order in GrowShip update Shopify automatically?",
        a: "Yes. The moment your warehouse prints a label and books an AWB on GrowShip, the fulfillment status in Shopify updates automatically along with the carrier tracking number.",
      },
    ],
  },

  woocommerce: {
    name: "WooCommerce",
    category: "WordPress E-Commerce",
    badge: "REST API & Webhook Sync",
    seoTitle: "WooCommerce Shipping Automation & Delhivery Integration",
    seoDesc:
      "Connect WooCommerce and WordPress stores to GrowShip for automated order import, batch label generation, and live carrier tracking.",
    heroSubtitle:
      "Empower your WooCommerce store with enterprise-grade logistics orchestration. Sync orders instantly, print batch labels, and eliminate shipping errors.",
    syncSpeed: "Real-Time REST API Hook",
    setupTime: "5 Minutes via Consumer Key & Secret",
    syncItems: [
      "Seamless REST API integration with WooCommerce order tables",
      "Automatic status write-backs to WordPress orders upon AWB generation",
      "Support for custom checkout fields, local pickup, and COD tags",
      "Multi-store linking under a single GrowShip dashboard",
    ],
    architectureHighlights: [
      "Optimised for high-concurrency WordPress databases",
      "Built-in fallback sync if your WordPress server experiences brief downtime",
      "Clean metadata logging for customer support reconciliation",
    ],
    faqs: [
      {
        q: "Does the WooCommerce plugin slow down my WordPress site?",
        a: "No. GrowShip uses external API webhooks that execute asynchronously, meaning your storefront speed remains completely unaffected.",
      },
    ],
  },

  "shopify-plus": {
    name: "Shopify Plus",
    category: "Enterprise D2C Storefront",
    badge: "High-Concurrency Enterprise Sync",
    seoTitle: "Shopify Plus Multi-Warehouse Shipping Automation",
    seoDesc:
      "Enterprise shipping automation for Shopify Plus brands. Route orders across multiple fulfillment centres and connect direct carrier accounts.",
    heroSubtitle:
      "Built for high-volume Shopify Plus brands scaling past 10,000+ monthly orders. Route orders intelligently across multiple warehouse locations with zero latency.",
    syncSpeed: "Sub-Second GraphQL & Webhook Pipeline",
    setupTime: "Dedicated Onboarding Engineer",
    syncItems: [
      "Multi-warehouse location routing based on inventory proximity",
      "Custom checkout delivery date and shipping method mapping",
      "High-speed batch manifest generation for 500+ daily orders",
      "Role-based access control for warehouse packing and finance desks",
    ],
    architectureHighlights: [
      "High-concurrency rate limiting designed for flash sales and festive drops",
      "Granular audit trails for enterprise finance reconciliation",
      "Custom ERP & accounting webhook triggers",
    ],
    faqs: [
      {
        q: "Can Shopify Plus multi-location inventory be routed to different couriers?",
        a: "Yes. GrowShip automatically detects which warehouse location fulfilled the order and assigns the appropriate local carrier pickup manifest.",
      },
    ],
  },

  magento: {
    name: "Magento / Adobe Commerce",
    category: "Enterprise Storefront",
    badge: "Adobe Commerce Certified Sync",
    seoTitle: "Magento 2 Shipping Automation & Carrier Integration",
    seoDesc:
      "Integrate Magento 2 / Adobe Commerce stores with GrowShip for enterprise fulfillment, split orders, and automated tracking.",
    heroSubtitle:
      "Bring professional logistics control to your Magento 2 store. Manage complex catalog weights, multi-box split shipments, and carrier handovers effortlessly.",
    syncSpeed: "Optimised Magento REST API Sync",
    setupTime: "Guided Technical Integration",
    syncItems: [
      "Direct Magento 2 order and shipment synchronization",
      "Custom attribute mapping for dead and volumetric weights",
      "Automated shipment creation and tracking ID write-backs",
      "Enterprise support for complex B2B catalog structures",
    ],
    architectureHighlights: [
      "Engineered for heavy catalog structures and custom ERP extensions",
      "Robust error handling and retry queues for failed API calls",
    ],
    faqs: [
      {
        q: "Does GrowShip support custom Magento modules?",
        a: "Yes, our engineering team assists with custom attribute and checkout field mapping during onboarding.",
      },
    ],
  },

  delhivery: {
    name: "Delhivery Direct",
    category: "Carrier Network",
    badge: "Direct API Integration",
    seoTitle: "Delhivery Direct Account Integration & Unified Dispatch",
    seoDesc:
      "Connect your direct Delhivery contract to GrowShip. Retain negotiated slab rates while upgrading your warehouse to a unified command centre.",
    heroSubtitle:
      "Link your direct Delhivery commercial account in minutes. Enjoy zero freight markup while managing bookings, thermal labels, and manifests in one screen.",
    syncSpeed: "Direct Carrier API Gateway",
    setupTime: "2 Minutes via API Token",
    syncItems: [
      "Direct connection to your Delhivery enterprise or direct account",
      "100% retention of your contracted slab rates and COD terms",
      "Automated manifest generation accepted by Delhivery pickup riders",
      "15-minute tracking sync and exception event ingestion",
    ],
    architectureHighlights: [
      "Direct token authentication with Delhivery sorting servers",
      "No intermediary aggregator markups on your freight billing",
    ],
    faqs: [
      {
        q: "Will my existing Delhivery pickup schedule change?",
        a: "No. Your scheduled pickup drivers and warehouse handover times remain exactly the same.",
      },
    ],
  },

  shiprocket: {
    name: "Shiprocket Direct",
    category: "Carrier Network",
    badge: "Direct Account Link",
    seoTitle: "Shiprocket Account Integration with GrowShip Command Centre",
    seoDesc:
      "Connect your Shiprocket account to GrowShip to combine your courier lanes with advanced split-order tracking and NDR management.",
    heroSubtitle:
      "Bring your Shiprocket account credentials directly into GrowShip's unified operations workspace for streamlined labeling and exception handling.",
    syncSpeed: "Secure API Token Link",
    setupTime: "Under 3 Minutes",
    syncItems: [
      "Link your active Shiprocket account credentials securely",
      "Manage dispatches and tracking alongside your other courier networks",
      "Proactive NDR action queue for failed delivery attempts",
    ],
    architectureHighlights: [
      "Unified credential manager with encrypted API storage",
      "Instant fallback routing across connected carrier profiles",
    ],
    faqs: [
      {
        q: "Can I use both my Shiprocket account and the GrowShip wallet?",
        a: "Yes! GrowShip's hybrid routing lets you combine direct accounts and prepaid platform funds on one dispatch board.",
      },
    ],
  },

  "growcord-comms": {
    name: "Growcord Comms",
    category: "Customer Communication",
    badge: "Native WhatsApp & SMS Automation",
    seoTitle: "Growcord Comms WhatsApp & SMS Shipping Notifications",
    seoDesc:
      "Automate WhatsApp and SMS delivery alerts, NDR re-attempt confirmations, and COD reminders via native Growcord Comms integration.",
    heroSubtitle:
      "Keep buyers informed at every parcel milestone. GrowShip hands off live tracking events instantly to Growcord Comms for high-converting WhatsApp updates.",
    syncSpeed: "Instant Event Webhook Handoff",
    setupTime: "1-Click Activation",
    syncItems: [
      "Automated WhatsApp notifications for Shipped, Out for Delivery, and Delivered",
      "Interactive NDR re-attempt buttons directly inside WhatsApp chats",
      "COD order confirmation flows to reduce RTO cancellations",
    ],
    architectureHighlights: [
      "Official WhatsApp Business API integration with high deliverability",
      "Customizable message templates for brand voice alignment",
    ],
    faqs: [
      {
        q: "How do WhatsApp re-attempt buttons work during an NDR?",
        a: "When a delivery attempt fails, Growcord Comms sends a WhatsApp message allowing the buyer to tap 1 to confirm a next-day re-attempt.",
      },
    ],
  },

  "tally-erp": {
    name: "Tally Prime & ERP",
    category: "Accounting & ERP",
    badge: "Financial Ledger Sync",
    seoTitle: "Tally ERP & Prime Shipping Cost Reconciliation",
    seoDesc:
      "Reconcile shipping freight, COD remittances, and GST invoices automatically between GrowShip and Tally ERP / Prime.",
    heroSubtitle:
      "Eliminate manual accounting data entry. Export itemised shipment ledgers and GST-ready freight reports formatted specifically for Tally ERP.",
    syncSpeed: "Automated CSV & API Ledger Export",
    setupTime: "Guided Setup",
    syncItems: [
      "Itemised freight cost export mapped by AWB and order reference",
      "GST input tax credit (ITC) reconciliation for 18% carrier invoices",
      "COD remittance tracking against bank deposits",
    ],
    architectureHighlights: [
      "Standardised accounting export formats compatible with Tally and Zoho Books",
    ],
    faqs: [
      {
        q: "Can GrowShip export data directly into Tally?",
        a: "Yes, finance teams can export itemised CSV ledgers or use our API webhooks to sync accounting entries.",
      },
    ],
  },

  "zoho-books": {
    name: "Zoho Books & Inventory",
    category: "Accounting & Finance",
    badge: "Cloud Accounting Sync",
    seoTitle: "Zoho Books Shipping & Invoice Reconciliation",
    seoDesc:
      "Sync e-commerce shipping expenses, wallet top-ups, and COD invoices automatically into Zoho Books.",
    heroSubtitle:
      "Keep your cloud accounting books perfectly balanced. Every GrowShip wallet debit and carrier invoice maps cleanly into Zoho Books.",
    syncSpeed: "Cloud API Integration",
    setupTime: "5 Minutes OAuth Link",
    syncItems: [
      "Automated expense categorization for freight and packaging",
      "Match carrier invoices against itemised GrowShip wallet ledgers",
      "GST-compliant reporting for B2B and D2C transactions",
    ],
    architectureHighlights: ["Secure OAuth 2.0 connection with Zoho ecosystem"],
    faqs: [
      {
        q: "Does Zoho Books track shipping tax components?",
        a: "Yes, base freight and 18% GST components are logged separately for accurate tax filing.",
      },
    ],
  },

  "custom-rest-api": {
    name: "Custom REST API & Webhooks",
    category: "Developer Tools",
    badge: "Full Developer Control",
    seoTitle: "GrowShip Custom REST API & Webhook Documentation",
    seoDesc:
      "Build custom ERP integrations, proprietary WMS connections, and custom storefront workflows using GrowShip's robust REST API.",
    heroSubtitle:
      "For engineering teams building custom logistics infrastructure. Access secure REST endpoints for order creation, AWB generation, and real-time tracking webhooks.",
    syncSpeed: "< 100ms API Response Time",
    setupTime: "Instant API Key Generation",
    syncItems: [
      "Comprehensive REST endpoints for orders, shipments, and manifests",
      "Real-time webhook subscriptions for status changes and NDR events",
      "Sandbox environment for testing integrations before production go-live",
    ],
    architectureHighlights: [
      "JSON-based request/response structure with HMAC signature verification",
      "Detailed developer documentation and rate-limit controls",
    ],
    faqs: [
      {
        q: "Where can I find the GrowShip API documentation?",
        a: "API keys and documentation are accessible immediately upon completing your GrowShip operations onboarding review.",
      },
    ],
  },
};

export default function IntegrationsClientView({
  platformSlug,
  integration,
  allDirectory = [],
}) {
  const [openFaq, setOpenFaq] = useState(0);
  const [connectEmail, setConnectEmail] = useState("");
  const [connectSubmitted, setConnectSubmitted] = useState(false);

  const handleConnectSubmit = (e) => {
    e.preventDefault();
    if (!connectEmail.trim()) return;
    setConnectSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* ==========================================
          SECTION 1: HERO SECTION
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-24 pb-20 text-center text-white sm:pt-32 sm:pb-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.18),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link href="/growship" className="transition hover:text-white">
              GrowShip
            </Link>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="text-slate-300">Integrations</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-[#f47721]">
              {integration.name}
            </span>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff9647]">
            <FiZap size={13} /> {integration.category} · {integration.badge}
          </span>

          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-[-.045em] text-white sm:text-6xl">
            {integration.name} +{" "}
            <span className="text-[#ff8e3c]">GrowShip</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {integration.heroSubtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#connect-box"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#061a34] shadow-lg shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-[#ff923f]"
            >
              Connect {integration.name} Now <FiArrowRight size={18} />
            </a>
            <Link
              href="/growship/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View pricing model
            </Link>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: SYNC SPECS & ARCHITECTURE HIGHLIGHTS
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              Seamless Data Pipeline
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-[-.04em] text-[#071d3a] sm:text-4xl">
              Engineered for zero latency and absolute reliability.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Connecting {integration.name} to GrowShip takes minutes. Orders,
              customer metadata, and tracking sync in real-time so your packing
              desk and buyer support never miss a beat.
            </p>

            <div className="mt-8 space-y-4">
              {integration.syncItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm font-semibold text-slate-700"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-slate-200 bg-white p-8 shadow-xl lg:col-span-6 sm:p-10">
            <span className="inline-block rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700">
              Technical Specifications
            </span>
            <h3 className="mt-4 text-2xl font-black text-[#071d3a]">
              Performance & Security
            </h3>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fafc] p-4">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Sync Speed
                </span>
                <strong className="text-sm font-black text-[#071d3a]">
                  {integration.syncSpeed}
                </strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fafc] p-4">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Setup Duration
                </span>
                <strong className="text-sm font-black text-[#e8681b]">
                  {integration.setupTime}
                </strong>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-[#f8fafc] p-4">
                <span className="text-xs font-bold uppercase text-slate-400">
                  Data Security
                </span>
                <strong className="text-sm font-black text-emerald-700">
                  Encrypted OAuth / Webhooks
                </strong>
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-[#061a34] p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                Architecture Highlights
              </p>
              <ul className="mt-3 space-y-2 text-xs text-slate-300">
                {integration.architectureHighlights.map((ah) => (
                  <li key={ah} className="flex items-start gap-2">
                    <span className="text-[#f47721]">•</span> {ah}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: INTERACTIVE CONNECT FLOW (#connect-box)
      ========================================== */}
      <section
        id="connect-box"
        className="border-y border-slate-200 bg-[#f1f5fa] px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-white p-8 shadow-xl sm:p-12 text-center">
          <span className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-orange-50 text-[#e8681b]">
            <FiZap size={26} />
          </span>
          <h2 className="mt-5 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Link your {integration.name} store to GrowShip today.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 sm:text-base">
            Enter your work email to initiate a secure integration walkthrough
            with our onboarding engineering team.
          </p>

          {connectSubmitted ? (
            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-emerald-50 p-6 text-emerald-800 border border-emerald-200">
              <FiCheckCircle size={32} className="mx-auto text-emerald-600" />
              <p className="mt-2 font-black">Connection request logged!</p>
              <p className="mt-1 text-xs text-emerald-700">
                Our team will reach out to {connectEmail} to establish your{" "}
                {integration.name} webhooks.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleConnectSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={connectEmail}
                onChange={(e) => setConnectEmail(e.target.value)}
                placeholder="ops@yourbrand.in"
                className="flex-1 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 text-sm text-[#071d3a] outline-none focus:border-[#f47721]"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-7 py-3.5 text-sm font-bold text-[#061a34] transition hover:bg-[#ff923f]"
              >
                Request Integration <FiArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ==========================================
          SECTION 4: INTEGRATION FAQs
      ========================================== */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 lg:px-8">
        <h2 className="text-center text-3xl font-black text-[#071d3a]">
          {integration.name} Integration FAQs
        </h2>
        <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
          {integration.faqs.map((item, idx) => {
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
          SECTION 5: ALL INTEGRATIONS DIRECTORY HUB
      ========================================== */}
      <section className="border-t border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            E-Commerce & Carrier Stack
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#071d3a] sm:text-3xl">
            Explore all supported platforms & carriers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {allDirectory.map((item) => {
              const isCurrent = item.slug === platformSlug;
              return (
                <Link
                  key={item.slug}
                  href={`/growship/integrations/${item.slug}`}
                  className={`flex items-center justify-between rounded-2xl border p-4 transition ${
                    isCurrent
                      ? "border-[#f47721] bg-orange-50/60 text-[#071d3a]"
                      : "border-slate-200 bg-[#fbfcfe] text-slate-700 hover:border-[#061a34] hover:bg-white"
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#e8681b]">
                      {item.category}
                    </p>
                    <p className="mt-0.5 text-sm font-black text-[#071d3a]">
                      {item.name}
                    </p>
                  </div>
                  <FiArrowRight size={16} className="shrink-0 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
