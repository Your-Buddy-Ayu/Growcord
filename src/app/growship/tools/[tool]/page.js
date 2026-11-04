import ToolsClientView from "./ToolsClientView";

export const dynamicParams = true;

// ==========================================
// MASTER 15 TOOLS CONFIGURATION (SERVER SAFE)
// ==========================================
const TOOLS_MASTER_DATA = {
    "volumetric-weight-calculator": {
        name: "Volumetric Weight Calculator",
        category: "Freight & Packaging Utility",
        widgetType: "volumetric",
        seoTitle: "Volumetric Weight Calculator (cm to kg) for Couriers",
        seoDesc:
            "Calculate volumetric weight (L × B × H / 5000) vs dead weight for Delhivery, Shiprocket, BlueDart, and surface couriers in India.",
        heroSubtitle:
            "Instantly compare your box's physical dead weight against carrier volumetric weight so your warehouse never gets hit with surprise weight-slab discrepancy bills.",
        formulaText:
            "Volumetric Weight (kg) = (Length × Breadth × Height in cm) ÷ Divisor (5000 for Air/Express, 4500 for Heavy Surface)",
        growshipHook:
            "Stop calculating box dimensions manually. GrowShip lets you save reusable packaging presets on your dispatch board so every AWB is booked in the exact right slab.",
        guideSteps: [
            {
                title: "Measure outer carton edges in centimetres",
                text: "Always measure the longest outer edges of the packed box including any bulges, tape, or bubble wrap.",
            },
            {
                title: "Compare Dead Weight vs. Volumetric Weight",
                text: "Courier networks always bill you on whichever value is higheryour physical scale weight or the space your parcel occupies in the truck/aircraft.",
            },
            {
                title: "Optimise box height by 2–3 cm to drop a slab",
                text: "Trimming just 2 cm off a standard shoebox or skincare carton often keeps a parcel under the 500g or 1.0kg threshold, saving ₹25–₹45 per shipment.",
            },
        ],
        faqs: [
            {
                q: "Why do Indian couriers divide L × B × H by 5000?",
                a: "5000 is the standard IATA and domestic express volumetric divisor used by carriers like Delhivery and Shiprocket when dimensions are measured in centimetres. It converts cubic centimetres into chargeable kilograms.",
            },
            {
                q: "How does GrowShip prevent volumetric weight disputes?",
                a: "GrowShip allows your packing desk to select pre-verified box dimension templates during label creation, ensuring your declared weight matches carrier sorting scanners.",
            },
        ],
    },

    "rto-loss-calculator": {
        name: "E-Commerce RTO Loss & Margin Calculator",
        category: "Profitability & NDR Utility",
        widgetType: "rto",
        seoTitle: "RTO Loss Calculator for Indian D2C Brands",
        seoDesc:
            "Calculate how much monthly profit your e-commerce brand loses to Return-to-Origin (RTO) shipments and how much you save by reducing RTO by 20%.",
        heroSubtitle:
            "An RTO doesn't just cost you a saleit doubles your forward + reverse freight bill, blocks inventory for 14 days, and wastes packaging. See your exact monthly RTO leakage below.",
        formulaText:
            "Monthly RTO Loss = (Total Orders × COD % × RTO %) × (Forward Freight + Reverse Freight + Packaging & Capital Cost)",
        growshipHook:
            "GrowShip's 15-minute tracking syncs and proactive NDR action queue help D2C brands catch failed delivery attempts on Day 1recovering up to 22% of at-risk COD parcels.",
        guideSteps: [
            {
                title: "Account for both forward and reverse freight",
                text: "When a COD order returns to origin, carriers charge forward shipping plus 80%–100% of that amount again to bring the parcel back to your warehouse.",
            },
            {
                title: "Factor in damaged packaging & blocked stock",
                text: "Every returned carton loses ₹15–₹35 in flyers, boxes, and thermal labels, while seasonal stock stays locked in transit for 10–18 days.",
            },
            {
                title: "Act on NDRs within the first 4 hours",
                text: "Re-attempting delivery immediately via GrowShip + Growcord Comms WhatsApp confirmations is the fastest way to protect net margins.",
            },
        ],
        faqs: [
            {
                q: "What is a healthy RTO percentage for Indian D2C brands?",
                a: "For prepaid orders, RTO is typically under 2%–4%. For Cash-on-Delivery (COD) orders, well-optimised brands maintain 12%–16%, while unmonitored dispatch operations often see 25%+ RTO.",
            },
            {
                q: "How does GrowShip reduce RTO rates?",
                a: "GrowShip refreshes tracking timelines every 15 minutes and surfaces Non-Delivery Reports (NDRs) in one unified action board so your team can resolve exceptions before the carrier initiates return transit.",
            },
        ],
    },

    "pincode-serviceability-checker": {
        name: "Pin-Code Zone & SLA Estimator",
        category: "Lane & Network Utility",
        widgetType: "pincode",
        seoTitle: "Courier Pin-Code Zone & Delivery SLA Estimator",
        seoDesc:
            "Check shipping zone classification (Zone A to E), estimated median delivery speed, and COD availability between any two Indian pin codes.",
        heroSubtitle:
            "Enter your origin warehouse pin code and buyer destination pin code to see the shipping zone classification, median transit days across Air vs. Surface, and lane risk profile.",
        formulaText:
            "Zone Mapping: Zone A (Intra-City) • Zone B (Within State/Region) • Zone C (Metro-to-Metro) • Zone D (Rest of India) • Zone E (NE / J&K / Special)",
        growshipHook:
            "Inside GrowShip's Courier Intelligence workspace, your team sees real 90-day rolling median delivery times for every pin-code lanenot generic carrier promises.",
        guideSteps: [
            {
                title: "Identify the first 2 digits for state & circle mapping",
                text: "Indian 6-digit pin codes are structured by postal circle and sorting district, which directly determines whether a shipment is billed as Regional (Zone B) or National (Zone D).",
            },
            {
                title: "Choose Air vs. Surface based on lane distance",
                text: "For Zone A and Zone B, Priority Ground delivers in 1–2 days at a fraction of air cost. For cross-country Zone D lanes, Express Air cuts transit time in half.",
            },
            {
                title: "Keep a backup carrier active for remote pin codes",
                text: "With GrowShip's hybrid setup, you can use your own Delhivery account for primary zones and tap into the GrowShip wallet for secondary pin codes.",
            },
        ],
        faqs: [
            {
                q: "How are courier zones calculated between two pin codes?",
                a: "Carriers classify routes into 5 zones: Local/Intra-city (Zone A), Within State/ under 500km (Zone B), Metro to Metro (Zone C), Rest of India (Zone D), and Special/Remote regions (Zone E).",
            },
            {
                q: "Does GrowShip support both Delhivery and Shiprocket pin-code networks?",
                a: "Yes. You can connect your own Delhivery and Shiprocket accounts or use our platform wallet to ship across 28,000+ serviceable Indian pin codes.",
            },
        ],
    },

    "cod-remittance-cycle-calculator": {
        name: "COD Remittance & Working Capital Calculator",
        category: "Finance & Cashflow Utility",
        widgetType: "cod",
        seoTitle: "COD Remittance Cashflow Calculator for D2C Brands",
        seoDesc:
            "Calculate how much working capital is locked in courier COD remittance cycles (D+2 vs D+7) and how faster delivery speeds unlock cash.",
        heroSubtitle:
            "Slow delivery times plus long courier remittance cycles trap lakhs of your working capital in transit. Calculate your locked cashflow and see how shaving 2 days off transit frees up capital.",
        formulaText:
            "Locked COD Working Capital = Daily COD GMV × (Median Delivery Days + Carrier Remittance Cycle Days)",
        growshipHook:
            "When you connect your own courier account on GrowShip (Route 01), your negotiated COD remittance cycle remains directly between you and your carrierwith zero platform holdbacks.",
        guideSteps: [
            {
                title: "Remittance clocks only start after 'Delivered' status",
                text: "A 'D+2' remittance cycle actually takes 7 days if your courier takes 5 days to deliver the parcel.",
            },
            {
                title: "Prevent NDR delays from freezing your cash",
                text: "Every day a COD parcel sits stuck in a local hub is an extra day your inventory and cash remain uncollected.",
            },
            {
                title: "Reconcile COD vs. Freight with itemised clarity",
                text: "Keep your freight debits and parcel delivery milestones cleanly documented for your finance team.",
            },
        ],
        faqs: [
            {
                q: "Does GrowShip hold my COD funds when I use my own courier account?",
                a: "No. When you connect your own Delhivery or Shiprocket account, your carrier remits COD payouts directly to your bank account on your existing contract schedule.",
            },
        ],
    },

    "ndr-message-template-generator": {
        name: "NDR & Delivery WhatsApp/SMS Template Generator",
        category: "Customer Comms & NDR Utility",
        widgetType: "ndr",
        seoTitle: "Free NDR & Shipping WhatsApp/SMS Template Generator",
        seoDesc:
            "Generate high-converting WhatsApp and SMS templates for Non-Delivery Reports (NDR), fake delivery attempts, COD confirmation, and split orders.",
        heroSubtitle:
            "When a delivery rider marks 'Customer Unavailable' or 'Address Incomplete', a fast, clear message saves the order. Customise and copy battle-tested NDR & tracking templates below.",
        formulaText:
            "Proactive Comms Flow: Carrier Event Logged → 15-Min GrowShip Sync → Growcord Comms WhatsApp/SMS Triggered → Buyer Confirms Re-attempt",
        growshipHook:
            "Don't send messages manually! GrowShip hands off live shipment events directly to Growcord Comms so shipped, out-for-delivery, and NDR alerts fire automatically.",
        guideSteps: [
            {
                title: "Always include the item name & exact COD amount",
                text: "Buyers often reject parcels because they forget what they ordered or don't have exact cash ready.",
            },
            {
                title: "Give a 1-tap reply option for fake attempts",
                text: "If a rider marks a fake attempt, letting the buyer reply 'REATTEMPT' gives you hard proof to escalate with the carrier.",
            },
            {
                title: "Set expectations clearly on split orders",
                text: "When shipping 2 boxes under 1 order, tell the buyer 'Box 1 of 2 is arriving today' to eliminate support panic.",
            },
        ],
        faqs: [
            {
                q: "Can GrowShip automate these WhatsApp and SMS updates?",
                a: "Yes. GrowShip integrates natively with Growcord Comms to trigger automated customer notifications at every key parcel milestone.",
            },
        ],
    },

    "gst-on-freight-calculator": {
        name: "GST on Freight & Shipping Margin Calculator",
        category: "Finance & Tax Utility",
        widgetType: "gst",
        seoTitle: "GST on Courier & Freight Calculator (18% ITC)",
        seoDesc:
            "Calculate 18% GST on e-commerce courier charges, Input Tax Credit (ITC), and true net shipping cost per order for your finance ledger.",
        heroSubtitle:
            "Calculate base freight, 18% GST components, eligible Input Tax Credit (ITC), and net shipping cost as a percentage of your Average Order Value (AOV).",
        formulaText:
            "Total Carrier Invoice = Base Freight + Fuel Surcharge + COD Fee + 18% GST (Eligible for B2B Input Tax Credit)",
        growshipHook:
            "GrowShip's itemised prepaid wallet ledger records every single shipment debit cleanly, making monthly GST reconciliation effortless for your accounting team.",
        guideSteps: [
            {
                title: "Separate Base Freight from 18% GST",
                text: "While wallet top-ups and carrier bills include 18% GST, GST-registered businesses can claim Input Tax Credit (ITC) on eligible logistics invoices.",
            },
            {
                title: "Keep net shipping cost under 8%–12% of AOV",
                text: "Tracking freight as a percentage of product AOV helps you decide when to offer free shipping vs. charging a nominal delivery fee.",
            },
            {
                title: "Audit every AWB debit line by line",
                text: "Use GrowShip's shipment charge trail to ensure no unbilled weight adjustments slip past your finance desk.",
            },
        ],
        faqs: [
            {
                q: "What is the GST rate on courier and e-commerce shipping services in India?",
                a: "Standard e-commerce courier and express parcel services attract 18% GST, which is eligible for Input Tax Credit (ITC) when billed with a valid business GSTIN.",
            },
        ],
    },

    "shipping-label-cropper": {
        name: "4×6 Thermal Label & Manifest Sizing Guide",
        category: "Warehouse Printing Utility",
        widgetType: "volumetric",
        seoTitle: "4x6 Thermal Shipping Label & Manifest Sizing Tool",
        seoDesc:
            "Standardise 4x6 inch (100x150mm) thermal shipping labels and batch manifest layouts for fast warehouse dispatch.",
        heroSubtitle:
            "Configure your parcel dimensions, weight slabs, and thermal label batching workflow so your packing tables print without alignment errors.",
        formulaText:
            "Standard Thermal Label: 4 × 6 inches (101.6 × 152.4 mm) at 203 DPI • Batch Manifest: A4 Barcode Sheet",
        growshipHook:
            "GrowShip generates clean, 1-click batch shipping labels and daily carrier pickup manifests directly from your dispatch board.",
        guideSteps: [
            {
                title: "Use 4×6 inch direct thermal rolls",
                text: "Eliminate ink and taping time by printing self-adhesive 4×6 labels for Delhivery and Shiprocket.",
            },
            {
                title: "Print a consolidated manifest before pickup cutoff",
                text: "Always get the pickup driver's signature on your GrowShip daily manifest for handover security.",
            },
            {
                title: "Pre-fill box presets to speed up label creation",
                text: "Save your top 3 box sizes in GrowShip to book and print labels in seconds.",
            },
        ],
        faqs: [
            {
                q: "Does GrowShip support bulk label and manifest printing?",
                a: "Yes, you can generate labels and handover manifests for individual parcels or bulk batches from one unified screen.",
            },
        ],
    },

    "barcode-awb-generator": {
        name: "AWB & Split-Order Reference Formatter",
        category: "Warehouse Tracking Utility",
        widgetType: "pincode",
        seoTitle: "AWB Tracking & Split-Order Reference Tool",
        seoDesc:
            "Format multi-parcel split order references and test lane SLA timelines across Indian pin codes.",
        heroSubtitle:
            "Test origin-to-destination lane speeds and see how multi-parcel split shipments are indexed with independent AWB timelines.",
        formulaText:
            "Split Order Structure: 1 Master Order ID → Multiple Parcel AWBs → 'Partially Delivered' until 100% complete",
        growshipHook:
            "In GrowShip, every box in a multi-parcel order gets its own AWB and tracking timeline so multi-item orders never falsely show 'Delivered' early.",
        guideSteps: [
            {
                title: "Assign one AWB per physical carton",
                text: "Never tape two separate boxes together under a single shipping labelcarriers reject or misroute them.",
            },
            {
                title: "Track partial deliveries accurately",
                text: "GrowShip keeps the parent order marked 'Partially Delivered' until the final box reaches the customer.",
            },
            {
                title: "Refresh carrier events every 15 minutes",
                text: "Automated syncs keep both your ops desk and buyer updated on every box.",
            },
        ],
        faqs: [
            {
                q: "Can one order have multiple AWBs in GrowShip?",
                a: "Yes, GrowShip natively supports split shipments where each parcel has its own AWB and tracking history.",
            },
        ],
    },

    "ecommerce-packaging-box-size-recommender": {
        name: "E-Commerce Box Size & Slab Recommender",
        category: "Packaging & Volumetric Utility",
        widgetType: "volumetric",
        seoTitle: "E-Commerce Packaging Box Size Recommender & Slab Calculator",
        seoDesc:
            "Find the optimal corrugated box dimensions to stay under 500g, 1kg, and 2kg courier volumetric weight slabs.",
        heroSubtitle:
            "Test your product dimensions below to find the tightest corrugated carton size and avoid paying for empty air inside your boxes.",
        formulaText:
            "Optimal Carton Rule: Leave 1.5 cm cushioning clearance while keeping (L × B × H ÷ 5000) ≤ Dead Weight Slab",
        growshipHook:
            "Save your best-performing box dimensions as 1-click presets inside GrowShip's dispatch board.",
        guideSteps: [
            {
                title: "Audit your top 3 moving SKUs",
                text: "80% of D2C orders fit into 3 standard box sizesoptimising them yields immediate freight savings.",
            },
            {
                title: "Switch flyers for non-fragile apparel",
                text: "Tamper-evident flyers eliminate volumetric height, keeping garments strictly in the 500g slab.",
            },
            {
                title: "Lock presets into your shipping software",
                text: "Prevent packing staff from entering random dimensions by using GrowShip slab presets.",
            },
        ],
        faqs: [
            {
                q: "How much can box right-sizing save on freight?",
                a: "Preventing a parcel from crossing the 500g to 1kg volumetric threshold typically saves 22%–35% on forward shipping.",
            },
        ],
    },

    "courier-sla-breach-calculator": {
        name: "Courier SLA Breach & Delay Impact Calculator",
        category: "Carrier Intelligence Utility",
        widgetType: "rto",
        seoTitle: "Courier SLA Breach & Delivery Delay Calculator",
        seoDesc:
            "Calculate how delivery SLA delays increase COD cancellations and RTO losses across your shipping lanes.",
        heroSubtitle:
            "Every 24-hour delay beyond promised delivery dates spikes COD rejection rates by 8%–12%. Calculate the cost of slow carrier lanes below.",
        formulaText:
            "SLA Breach Cost = Delayed Shipments × Incremental COD Refusal Rate × (2× Freight + Margin Loss)",
        growshipHook:
            "GrowShip's Courier Intelligence engine tracks true 90-day median delivery times per pin code so you can hold carriers accountable.",
        guideSteps: [
            {
                title: "Measure median speed, not carrier averages",
                text: "Averages hide extreme delays. GrowShip measures true median transit days across routes.",
            },
            {
                title: "Spot stalled hubs with 15-minute syncs",
                text: "Identify parcels stuck in transit before the customer calls support to cancel.",
            },
            {
                title: "Shift volume to faster lanes dynamically",
                text: "Use your connected accounts and GrowShip wallet to route around congested hubs.",
            },
        ],
        faqs: [
            {
                q: "How does GrowShip track courier SLA performance?",
                a: "We analyse every tracking ping from pickup to delivery to show you real median speeds and RTO rates by carrier and zone.",
            },
        ],
    },

    "surface-vs-air-freight-calculator": {
        name: "Surface vs. Express Air Freight Comparator",
        category: "Lane & Cost Utility",
        widgetType: "volumetric",
        seoTitle: "Surface vs Air Courier Freight Calculator India",
        seoDesc:
            "Compare chargeable weight and transit speed trade-offs between Express Air and Heavy Surface shipping modes.",
        heroSubtitle:
            "Test your parcel dimensions and weight to see when Express Air makes sense vs. when Priority Surface protects your profit margin.",
        formulaText:
            "Under 500g: Express Air & Surface cost nearly the same • Above 2kg: Priority Surface saves 35%–50%",
        growshipHook:
            "Compare Express Air, Priority Ground, and Surface timelines side by side right inside your GrowShip dispatch workspace.",
        guideSteps: [
            {
                title: "Use Air for high-margin sub-500g D2C parcels",
                text: "Fast 1–2 day air delivery drastically lowers COD refusal rates on impulse purchases.",
            },
            {
                title: "Switch to Priority Surface above 1.5 kg",
                text: "For supplements, home decor, and B2B cartons, surface networks protect unit economics.",
            },
            {
                title: "Audit every route in one ledger",
                text: "Track your air vs. surface spend transparently in GrowShip.",
            },
        ],
        faqs: [
            {
                q: "Can I book both Air and Surface shipments in GrowShip?",
                a: "Yes, you can choose Express Air, Priority Ground, or Surface modes per shipment using your connected accounts or wallet.",
            },
        ],
    },

    "split-shipment-cost-estimator": {
        name: "Multi-Parcel Split Shipment Cost Estimator",
        category: "B2B & Multi-Box Utility",
        widgetType: "gst",
        seoTitle: "Multi-Parcel Split Shipment Cost & Freight Calculator",
        seoDesc:
            "Estimate freight and GST for multi-box split orders and master cartons across Indian courier networks.",
        heroSubtitle:
            "When an order ships in 2, 3, or 4 separate boxes, calculate the total freight, GST, and per-unit logistics cost accurately.",
        formulaText:
            "Split Order Freight = Sum of Individual Parcel Slabs (Tracked under 1 Master Order ID in GrowShip)",
        growshipHook:
            "GrowShip natively supports multi-parcel split orderseach box gets its own AWB timeline while the main order stays 'Partially Delivered' until complete.",
        guideSteps: [
            {
                title: "Never combine distant warehouse stock artificially",
                text: "Ship available items immediately and track each parcel timeline under one order reference.",
            },
            {
                title: "Keep customers informed per box",
                text: "Prevent 'missing item' tickets by showing clear parcel-level progress.",
            },
            {
                title: "Pay zero extra software penalty for splits",
                text: "GrowShip includes multi-parcel timeline tracking as part of the core workspace.",
            },
        ],
        faqs: [
            {
                q: "How does GrowShip handle orders with 3 or 4 boxes?",
                a: "Each box gets a distinct shipment ID and AWB label, and the parent order updates to 'Delivered' only when all boxes arrive.",
            },
        ],
    },

    "cod-vs-prepaid-margin-calculator": {
        name: "COD vs. Prepaid Net Margin Calculator",
        category: "Profitability Utility",
        widgetType: "rto",
        seoTitle: "COD vs Prepaid Order Margin Calculator for E-Commerce",
        seoDesc:
            "Compare net profitability between Cash-on-Delivery (COD) and Prepaid orders after factoring in COD fees and RTO rates.",
        heroSubtitle:
            "See the true bottom-line difference between a COD order and a Prepaid order once carrier COD handling fees and RTO probabilities are deducted.",
        formulaText:
            "Net COD Margin = Gross Margin − Forward Freight − COD Fee − (RTO Probability × Reverse Freight)",
        growshipHook:
            "Protect your COD margins by combining GrowShip's proactive NDR board with automated WhatsApp/SMS buyer alerts via Growcord Comms.",
        guideSteps: [
            {
                title: "Calculate the hidden RTO tax on COD",
                text: "A 20% RTO rate effectively adds 40% to the shipping cost of every successfully delivered COD order.",
            },
            {
                title: "Verify high-risk addresses before dispatch",
                text: "Catch incomplete landmarks and pin-code mismatches on the GrowShip dispatch board.",
            },
            {
                title: "Resolve NDRs on the first attempt",
                text: "Immediate action on Day-1 delivery exceptions is the biggest lever for COD profitability.",
            },
        ],
        faqs: [
            {
                q: "How can I make COD orders more profitable?",
                a: "Using 15-minute tracking syncs and automated NDR buyer confirmations reduces RTOs without hurting checkout conversion.",
            },
        ],
    },

    "warehouse-dispatch-time-calculator": {
        name: "Warehouse Dispatch & Batching ROI Calculator",
        category: "Operations Efficiency Utility",
        widgetType: "cod",
        seoTitle: "Warehouse Dispatch Time & Batch Label ROI Calculator",
        seoDesc:
            "Calculate how many hours your warehouse packing team saves by switching from multi-tab courier portals to 1-click batch labels.",
        heroSubtitle:
            "Estimate your daily packing desk throughput, pickup cutoff buffer, and monthly operational hours saved by eliminating multi-tab bouncing.",
        formulaText:
            "Hours Saved = Monthly Shipments × (2.2 mins Manual Tab Switching − 0.3 mins GrowShip Batch Flow) ÷ 60",
        growshipHook:
            "GrowShip brings order sync, label generation, and barcode pickup manifests into one screen so your team never misses a daily pickup cutoff.",
        guideSteps: [
            {
                title: "Stop logging into 3 different courier portals",
                text: "Centralizing Delhivery, Shiprocket, and wallet bookings saves 90+ seconds per order.",
            },
            {
                title: "Batch-print labels by SKU or carrier",
                text: "Print 50 thermal labels and 1 consolidated manifest in a single smooth flow.",
            },
            {
                title: "Give support & ops the same live view",
                text: "Eliminate internal Slack/WhatsApp messages asking for AWB numbers.",
            },
        ],
        faqs: [
            {
                q: "How fast can a warehouse team learn GrowShip?",
                a: "Because GrowShip focuses on a clean, linear Packed-to-Delivered flow, dispatch teams typically master it in under 30 minutes.",
            },
        ],
    },

    "weight-discrepancy-impact-calculator": {
        name: "Weight Discrepancy Audit & Leakage Calculator",
        category: "Finance & Billing Utility",
        widgetType: "volumetric",
        seoTitle: "Courier Weight Discrepancy Leakage Calculator",
        seoDesc:
            "Calculate how much money your brand loses to unverified 500g-to-1kg courier weight discrepancy charges and how to prevent them.",
        heroSubtitle:
            "When a 480g parcel gets billed in the 1.0kg slab due to loose packaging or unrecorded dimensions, your freight cost doubles. Audit your impact below.",
        formulaText:
            "Discrepancy Loss = Monthly Orders × Discrepancy % × (Next Slab Rate − Base Slab Rate)",
        growshipHook:
            "GrowShip's itemised wallet ledger and pre-filled packaging dimension templates give your finance and warehouse teams complete control over slab billing.",
        guideSteps: [
            {
                title: "Standardise carton dimensions by SKU",
                text: "Pre-filling exact L×B×H dimensions prevents arbitrary volumetric estimates at sorting hubs.",
            },
            {
                title: "Audit itemised debits per AWB",
                text: "Never accept lump-sum wallet deductionsreview per-shipment charges in GrowShip.",
            },
            {
                title: "Use your own direct carrier contracts",
                text: "Connect your Delhivery or Shiprocket account on Route 01 for direct commercial terms.",
            },
        ],
        faqs: [
            {
                q: "Does GrowShip show itemised charges per shipment?",
                a: "Yes, every wallet shipment creates a clear, itemised debit linked to that exact AWB and parcel profile.",
            },
        ],
    },
};

export function generateStaticParams() {
    return Object.keys(TOOLS_MASTER_DATA).map((tool) => ({ tool }));
}

export async function generateMetadata({ params }) {
    const { tool } = await params;
    const toolObj =
        TOOLS_MASTER_DATA[tool] ||
        TOOLS_MASTER_DATA["volumetric-weight-calculator"];

    return {
        title: {
            absolute: `${toolObj.seoTitle} | Free E-Commerce Tool by GrowShip`,
        },
        description: toolObj.seoDesc,
        alternates: { canonical: `/growship/tools/${tool}` },
        openGraph: {
            title: `${toolObj.name} | GrowShip Logistics Utilities`,
            description: toolObj.seoDesc,
            url: `https://growship.in/growship/tools/${tool}`,
            type: "website",
        },
    };
}

export default async function GrowShipToolPage({ params }) {
    const { tool } = await params;
    const activeSlug = TOOLS_MASTER_DATA[tool]
        ? tool
        : "volumetric-weight-calculator";
    const activeToolData = TOOLS_MASTER_DATA[activeSlug];

    // Lightweight directory list to pass to Client View
    const allToolsDirectory = Object.entries(TOOLS_MASTER_DATA).map(
        ([slugKey, item]) => ({
            slug: slugKey,
            name: item.name,
            category: item.category,
        })
    );

    return (
        <ToolsClientView
            activeSlug={activeSlug}
            tool={activeToolData}
            allToolsDirectory={allToolsDirectory}
        />
    );
}