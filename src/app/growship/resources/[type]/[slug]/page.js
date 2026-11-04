import { notFound } from "next/navigation";
import ResourceClientView from "./ResourceClientView";

export const dynamicParams = true;

// ==========================================
// MASTER RESOURCES & GLOSSARY DATABASE (SERVER SAFE)
// ==========================================
const RESOURCES_MASTER_DATABASE = {
    glossary: {
        "awb-airway-bill": {
            title: "AWB (Air Waybill) & Tracking Number",
            category: "Logistics Terminology",
            readTime: "5 min read",
            seoTitle: "What is an AWB (Air Waybill) in E-Commerce Shipping?",
            seoDesc:
                "Understand what an AWB (Air Waybill) is, how tracking barcodes work across Delhivery and Shiprocket, and why parcel-level tracking matters.",
            heroExcerpt:
                "The Air Waybill (AWB) is the foundational tracking identifier assigned to every single parcel dispatched in e-commerce logistics.",
            sections: [
                {
                    heading: "What is an Air Waybill (AWB)?",
                    paragraphs: [
                        "An Air Waybill (AWB) acts as the unique passport and receipt for a package moving through domestic or international courier networks. Unlike a generic order number created by your Shopify store, an AWB is generated directly by the carrier (or platform allocation engine) and embedded as a scannable barcode on the 4x6 thermal shipping label.",
                        "Every sorting hub, transit vehicle, and delivery rider scans this AWB barcode at checkpoints from origin pickup to final doorstep handover.",
                    ],
                },
                {
                    heading: "Why AWB Integrity Matters for Scale",
                    paragraphs: [
                        "When brands scale past 1,000 monthly orders, tracking inventory across multiple carriers becomes impossible without strict AWB association. In multi-parcel split shipments, each individual box receives its own distinct AWB while remaining linked under the parent order ID.",
                        "GrowShip ensures that your packing desk can generate, verify, and track AWBs across Delhivery, Shiprocket, and wallet lanes without jumping between disparate vendor dashboards.",
                    ],
                },
            ],
            faqs: [
                {
                    q: "Is an AWB number the same as a Shopify order ID?",
                    a: "No. Your Shopify order ID (e.g., #ORD-10584) is your internal store reference, whereas the AWB (e.g., GRS-8492) is the carrier-issued tracking number used by sorting facilities.",
                },
                {
                    q: "What happens if an AWB barcode gets damaged in transit?",
                    a: "If a barcode becomes unreadable, couriers rely on secondary human-readable AWB digits printed beneath the barcode or digital manifest logs uploaded at dispatch.",
                },
            ],
        },

        "ndr-non-delivery-report": {
            title: "NDR (Non-Delivery Report) & Exception Management",
            category: "Exception Handling",
            readTime: "7 min read",
            seoTitle: "What is an NDR (Non-Delivery Report) in Logistics?",
            seoDesc:
                "Master NDR (Non-Delivery Report) exception management. Learn why delivery attempts fail and how automated re-attempts recover lost RTO revenue.",
            heroExcerpt:
                "A Non-Delivery Report (NDR) is triggered the moment a courier rider attempts delivery but fails due to buyer unavailability, incorrect addresses, or locked doors.",
            sections: [
                {
                    heading: "Decoding the Non-Delivery Report (NDR)",
                    paragraphs: [
                        "In Indian e-commerce, Cash-on-Delivery (COD) orders frequently face delivery friction. When a rider cannot complete a delivery, they log an NDR with specific remarks such as 'Customer Unavailable', 'Incomplete Address', or 'Customer Refused COD'.",
                        "Left unmonitored, couriers automatically initiate Return-to-Origin (RTO) transit after 2 to 3 failed attempts, turning a potential sale into double freight losses.",
                    ],
                },
                {
                    heading: "Turning NDRs into Successful Deliveries",
                    paragraphs: [
                        "Top-performing D2C brands treat NDRs as a high-priority customer service queue rather than an administrative afterthought. By syncing tracking events every 15 minutes, operations teams can catch failed attempts on Day 1.",
                        "Using automated WhatsApp and SMS confirmation flows via Growcord Comms allows buyers to confirm re-attempts instantly, boosting successful deliveries by up to 22%.",
                    ],
                },
            ],
            faqs: [
                {
                    q: "How many days do couriers hold a parcel before returning it to origin?",
                    a: "Most carriers hold parcels for 3 to 5 days during active NDR status before initiating RTO reverse transit back to the origin warehouse.",
                },
                {
                    q: "How does GrowShip help resolve NDR exceptions faster?",
                    a: "GrowShip consolidates all carrier NDRs into one unified action queue and triggers instant buyer re-attempt prompts via WhatsApp.",
                },
            ],
        },

        "rto-return-to-origin": {
            title: "RTO (Return to Origin) & Margin Protection",
            category: "Profitability & Risk",
            readTime: "6 min read",
            seoTitle: "What is RTO (Return to Origin) in E-Commerce?",
            seoDesc:
                "Deep dive into RTO (Return to Origin), how forward and reverse freight costs drain net margins, and proven strategies to lower RTO rates.",
            heroExcerpt:
                "Return to Origin (RTO) occurs when a shipped parcel fails to reach the buyer and travels all the way back to the origin warehouse.",
            sections: [
                {
                    heading: "The True Financial Cost of RTO",
                    paragraphs: [
                        "An RTO is every D2C brand's silent profit killer. When a COD order is returned, you don't just lose the saleyou pay forward shipping, reverse shipping (often 80% to 100% of forward freight), packaging costs, and inventory locking fees.",
                        "For brands operating on thin product margins, a 25% RTO rate can completely wipe out quarterly profitability.",
                    ],
                },
                {
                    heading: "Proactive RTO Mitigation Strategies",
                    paragraphs: [
                        "Lowering RTO requires a combination of address verification at checkout, fast transit speeds, and aggressive Day-1 NDR handling.",
                        "By partnering with reliable carriers and using real-time median lane analytics, brands can identify high-risk pin codes and proactively switch to faster air or surface routing.",
                    ],
                },
            ],
            faqs: [
                {
                    q: "What is the average RTO rate for COD orders in India?",
                    a: "Average COD RTO rates range between 15% and 30% depending on product category, Tier-2/3 buyer demographics, and delivery speed.",
                },
            ],
        },
    },

    playbooks: {
        "d2c-dispatch-workflow": {
            title: "Building an Error-Free D2C Warehouse Dispatch SOP",
            category: "Warehouse Operations SOP",
            readTime: "10 min read",
            seoTitle: "D2C Warehouse Dispatch & Packing SOP Guide",
            seoDesc:
                "A complete Standard Operating Procedure (SOP) for D2C e-commerce warehouses to streamline order picking, thermal labeling, and daily pickup handovers.",
            heroExcerpt:
                "Transform your warehouse packing floor from a chaotic multi-tab bottleneck into a streamlined, high-velocity dispatch engine.",
            sections: [
                {
                    heading: "Phase 1: Order Sync & Queue Batching",
                    paragraphs: [
                        "Manual tab-switching between Shopify, Delhivery, and Shiprocket introduces human error and slows down packing teams. Centralizing all orders into a single dispatch board like GrowShip allows warehouse managers to batch orders by courier, SKU, or destination zone.",
                        "Once orders are batched, packing staff can verify item counts against digital pick-lists to ensure zero missing items in outgoing cartons.",
                    ],
                },
                {
                    heading: "Phase 2: Thermal Labeling & Box Right-Sizing",
                    paragraphs: [
                        "Using pre-saved corrugated box dimension presets prevents packing staff from guessing package sizes, eliminating unexpected volumetric weight discrepancy charges.",
                        "Printing self-adhesive 4x6 inch direct thermal labels speeds up carton sealing and ensures flawless barcode scanning at carrier sorting facilities.",
                    ],
                },
                {
                    heading: "Phase 3: Barcode Manifests & Pickup Handover",
                    paragraphs: [
                        "Before the courier pickup driver departs, warehouse supervisors must generate and print a barcode-verified daily handover manifest. Getting the driver's physical or digital signature on this manifest provides indisputable proof of handover.",
                    ],
                },
            ],
            faqs: [
                {
                    q: "How many shipments can a single packer process using automated dispatch software?",
                    a: "With 1-click batch labeling and pre-filled box presets, an experienced packer can comfortably process 120–160 orders per hour.",
                },
            ],
        },

        "cod-reconciliation-sop": {
            title: "COD Remittance & Freight Invoice Reconciliation SOP",
            category: "Finance & Accounting SOP",
            readTime: "9 min read",
            seoTitle: "COD Remittance & Carrier Freight Reconciliation Guide",
            seoDesc:
                "Step-by-step financial SOP for e-commerce finance teams to audit courier invoices, verify COD payouts, and reconcile 18% GST Input Tax Credit.",
            heroExcerpt:
                "A rigorous financial reconciliation framework to protect your working capital against unverified courier deductions and delayed COD remittances.",
            sections: [
                {
                    heading: "The Challenge of Courier Billing Audits",
                    paragraphs: [
                        "Courier invoices and COD remittance statements are notoriously complex. Discrepancies involving weight slab upgrades, remote area surcharges, and unrecorded COD fees frequently slip past busy finance desks.",
                        "Without an itemised AWB ledger, auditing hundreds of monthly carrier charges becomes an overwhelming manual chore.",
                    ],
                },
                {
                    heading: "Implementing a Line-Item Audit Trail",
                    paragraphs: [
                        "Finance teams must mandate line-item verification where every carrier debit is mapped 1:1 to an AWB and order ID.",
                        "Whether using direct courier accounts (Route 01) or an itemised platform wallet (Route 02), GrowShip provides transparent charge trails that make Tally and Zoho Books reconciliation seamless.",
                    ],
                },
            ],
            faqs: [
                {
                    q: "How often should e-commerce brands reconcile carrier freight invoices?",
                    a: "Finance teams should conduct weekly spot audits and complete a full ledger reconciliation at the end of every monthly billing cycle.",
                },
            ],
        },
    },
};

function formatNiceTitle(slug = "") {
    return decodeURIComponent(slug)
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export function generateStaticParams() {
    return Object.entries(RESOURCES_MASTER_DATABASE).flatMap(([type, items]) =>
        Object.keys(items).map((slug) => ({ type, slug }))
    );
}

export async function generateMetadata({ params }) {
    const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
    const type = resolvedParams?.type || "glossary";
    const slug = resolvedParams?.slug || "awb-airway-bill";

    const collection = RESOURCES_MASTER_DATABASE[type] || RESOURCES_MASTER_DATABASE["glossary"];
    const item = collection[slug] || {
        title: formatNiceTitle(slug),
        seoTitle: `${formatNiceTitle(slug)} | E-Commerce Logistics Definition & Guide`,
        seoDesc: `Learn everything about ${formatNiceTitle(slug)} in e-commerce fulfillment, courier operations, and supply chain management with GrowShip.`,
    };

    return {
        title: {
            absolute: `${item.seoTitle} | GrowShip Logistics Resource Hub`,
        },
        description: item.seoDesc,
        alternates: { canonical: `/growship/resources/${type}/${slug}` },
    };
}

export default async function GrowShipResourcePage({ params }) {
    const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
    const type = resolvedParams?.type || "glossary";
    const slug = resolvedParams?.slug || "awb-airway-bill";

    const collection = RESOURCES_MASTER_DATABASE[type] || RESOURCES_MASTER_DATABASE["glossary"];

    const resource = collection[slug] || {
        title: formatNiceTitle(slug),
        category: type === "playbooks" ? "Warehouse Operations SOP" : "Logistics Terminology",
        readTime: "6 min read",
        seoTitle: `${formatNiceTitle(slug)} Explained`,
        seoDesc: `Comprehensive guide and operational definition for ${formatNiceTitle(slug)} in Indian e-commerce fulfillment.`,
        heroExcerpt: `Master the operational principles, common pitfalls, and industry benchmarks for ${formatNiceTitle(slug)} in modern D2C and B2B logistics.`,
        sections: [
            {
                heading: `What is ${formatNiceTitle(slug)}?`,
                paragraphs: [
                    `${formatNiceTitle(slug)} is a fundamental component of modern e-commerce fulfillment, bridging the gap between warehouse dispatch teams, carrier sorting hubs, and end customers.`,
                    `In today's fast-paced D2C landscape, understanding and optimizing this process directly influences delivery speed, operational expenses, and customer retention.`,
                ],
            },
            {
                heading: "Operational Impact & Best Practices",
                paragraphs: [
                    `When scaling past thousands of monthly dispatches, minor inefficiencies in ${formatNiceTitle(slug).toLowerCase()} can compound into severe profit leaks or customer support tickets.`,
                    `Modern operations desks rely on unified command centres like GrowShip to automate these workflows, eliminate manual errors, and maintain real-time visibility across all courier partners.`,
                ],
            },
        ],
        faqs: [
            {
                q: `Why is ${formatNiceTitle(slug)} important for e-commerce brands?`,
                a: `Proper management of ${formatNiceTitle(slug).toLowerCase()} ensures predictable transit times, cleaner financial audits, and lower RTO rates.`,
            },
            {
                q: `How does GrowShip streamline this workflow?`,
                a: `GrowShip provides 15-minute tracking syncs, automated label generation, and unified exception queues to make operations completely transparent.`,
            },
        ],
    };

    const allResourcesList = Object.entries(RESOURCES_MASTER_DATABASE).flatMap(([tKey, subObj]) =>
        Object.entries(subObj).map(([sKey, val]) => ({
            type: tKey,
            slug: sKey,
            title: val.title,
            category: val.category,
        }))
    );

    return (
        <ResourceClientView
            type={type}
            slug={slug}
            resource={resource}
            allResourcesList={allResourcesList}
        />
    );
}