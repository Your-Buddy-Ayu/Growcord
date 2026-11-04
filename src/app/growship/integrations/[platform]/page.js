import { notFound } from "next/navigation";
import IntegrationsClientView from "./IntegrationsClientView";

export const dynamicParams = true;

// ==========================================
// MASTER INTEGRATIONS DATABASE (SERVER SIDE SAFE)
// ==========================================
const INTEGRATIONS_MASTER_DATA = {
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
        architectureHighlights: [
            "Secure OAuth 2.0 connection with Zoho ecosystem",
        ],
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

function formatNiceName(slug = "") {
    return decodeURIComponent(slug)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateStaticParams() {
    return Object.keys(INTEGRATIONS_MASTER_DATA).map((platform) => ({ platform }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
    const platformSlug = resolvedParams?.platform || "shopify";

    const integration =
        INTEGRATIONS_MASTER_DATA[platformSlug] || {
            name: formatNiceName(platformSlug),
            category: "E-Commerce & Tech Stack",
            seoTitle: `${formatNiceName(platformSlug)} Shipping & Fulfillment Integration`,
            seoDesc: `Connect ${formatNiceName(platformSlug)} with GrowShip for automated order import, thermal label printing, and 15-minute tracking syncs.`,
        };

    return {
        title: {
            absolute: `${integration.seoTitle} | GrowShip Integrations`,
        },
        description: integration.seoDesc,
        alternates: { canonical: `/growship/integrations/${platformSlug}` },
    };
}

export default async function GrowShipIntegrationPage({ params }) {
    const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
    const platformSlug = resolvedParams?.platform || "shopify";

    const integration = INTEGRATIONS_MASTER_DATA[platformSlug] || {
        name: formatNiceName(platformSlug),
        category: "E-Commerce & Tech Stack",
        badge: "API & Webhook Sync",
        seoTitle: `${formatNiceName(platformSlug)} Shipping Integration`,
        seoDesc: `Connect ${formatNiceName(platformSlug)} to GrowShip.`,
        heroSubtitle: `Sync your ${formatNiceName(platformSlug)} orders, customer addresses, and line items directly into GrowShip's unified dispatch command centre.`,
        syncSpeed: "Real-Time Webhook Pipeline",
        setupTime: "Under 5 Minutes",
        syncItems: [
            `Automatic order synchronization from ${formatNiceName(platformSlug)}`,
            "Instant fulfillment status update back upon AWB booking",
            "Automated tracking number mapping and customer notifications",
        ],
        architectureHighlights: [
            "Optimised for high-concurrency order events",
            "Robust error handling and auto-retry queues",
        ],
        faqs: [
            {
                q: `How does GrowShip connect with ${formatNiceName(platformSlug)}?`,
                a: `Connection is established securely via API keys or webhooks so orders flow instantly into your GrowShip dispatch queue.`,
            },
        ],
    };

    const allDirectory = Object.entries(INTEGRATIONS_MASTER_DATA).map(([slugKey, item]) => ({
        slug: slugKey,
        name: item.name,
        category: item.category,
    }));

    if (!INTEGRATIONS_MASTER_DATA[platformSlug]) {
        allDirectory.push({
            slug: platformSlug,
            name: formatNiceName(platformSlug),
            category: "E-Commerce & Tech Stack",
        });
    }

    return (
        <IntegrationsClientView
            platformSlug={platformSlug}
            integration={integration}
            allDirectory={allDirectory}
        />
    );
}