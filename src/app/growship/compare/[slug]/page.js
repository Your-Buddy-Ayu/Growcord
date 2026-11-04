import { notFound } from "next/navigation";
import CompareClientView from "./CompareClientView";

// ==========================================
// MASTER COMPETITOR DATABASE
// ==========================================
const COMPARISON_DATA = {
  shiprocket: {
    name: "Shiprocket",
    category: "Aggregator Platform",
    tagline: "Comparing GrowShip with Shiprocket for D2C logistics operations",
    heroDesc:
      "Shiprocket is widely used by entry-level brands, but scaling teams often hit walls with aggregator rate markups, delayed support, and fragmented multi-tab workflows. See how GrowShip provides a clearer, command-centre approach.",
    growshipEdge: "Direct Carrier Control & Transparent Billing",
    competitorWeakness: "Opaque rate card markups & generic support queues",
    quickVerdict: {
      competitorWhen: "You ship under 500 orders/mo and don't mind shared aggregator support queues.",
      growshipWhen: "You want direct carrier account control, 15-minute tracking syncs, and split-order visibility.",
    },
    matrix: [
      { feature: "Daily Dispatch Workspace", competitor: "Multi-tab browser jumping", growship: "Unified command centre" },
      { feature: "Carrier Account Support", competitor: "Platform-managed rate cards", growship: "Bring Your Own Account (BYOA) or Wallet" },
      { feature: "Tracking Sync Frequency", competitor: "Batch updates (hourly)", growship: "Scheduled 15-minute refreshes + webhooks" },
      { feature: "Multi-Parcel Split Orders", competitor: "Prone to false 'Delivered' statuses", growship: "Independent parcel timelines per box" },
      { feature: "NDR & Exception Queue", competitor: "Basic lists in CSV sheets", growship: "Proactive action queue + Growcord Comms" },
      { feature: "Freight Billing Transparency", competitor: "Lump-sum wallet deductions", growship: "100% itemised per-shipment AWB ledger" },
    ],
  },
  pickrr: {
    name: "Pickrr (Shiprocket)",
    category: "Logistics Aggregator",
    tagline: "Comparing GrowShip with Pickrr for e-commerce dispatch workflows",
    heroDesc:
      "Pickrr offers standard multi-carrier booking, but growing warehouse teams frequently struggle with rigid rate structures and lack of granular split-shipment controls. Discover why operations leaders switch to GrowShip.",
    growshipEdge: "Split-Order Architecture & Zero Freight Markup",
    competitorWeakness: "Rigid aggregator rules & opaque volumetric audits",
    quickVerdict: {
      competitorWhen: "You need a basic plug-and-play shipping plugin without custom warehouse workflows.",
      growshipWhen: "You manage high-volume dispatches, master cartons, and direct carrier contracts.",
    },
    matrix: [
      { feature: "Daily Dispatch Workspace", competitor: "Standard dashboard", growship: "Unified command centre" },
      { feature: "Carrier Account Flexibility", competitor: "Locked into Pickrr rate cards", growship: "Bring Your Own Delhivery/Shiprocket account" },
      { feature: "Tracking Sync Frequency", competitor: "Standard sync intervals", growship: "15-minute scheduled syncs" },
      { feature: "Multi-Parcel Split Orders", competitor: "Limited multi-box tracking", growship: "Full parcel-level independent tracking" },
      { feature: "NDR & Exception Queue", competitor: "Standard portal updates", growship: "Proactive action queue + automated alerts" },
      { feature: "Freight Billing Transparency", competitor: "Standard aggregator billing", growship: "100% itemised per-shipment wallet ledger" },
    ],
  },
  "ithink-logistics": {
    name: "iThink Logistics",
    category: "Shipping Aggregator",
    tagline: "GrowShip vs iThink Logistics: Choosing an operational command centre",
    heroDesc:
      "iThink Logistics caters to domestic D2C sellers, but teams seeking robust multi-warehouse routing, direct carrier account linking, and finance-grade wallet audits choose GrowShip.",
    growshipEdge: "Enterprise-Grade Wallet Auditing & BYOA",
    competitorWeakness: "Limited customization for complex warehouse operations",
    quickVerdict: {
      competitorWhen: "You are a small-scale seller looking for standard domestic aggregator rates.",
      growshipWhen: "You require clean audit trails, custom packaging presets, and zero markup on direct accounts.",
    },
    matrix: [
      { feature: "Daily Dispatch Workspace", competitor: "Standard panel", growship: "Unified command centre" },
      { feature: "Carrier Account Flexibility", competitor: "Aggregator dependent", growship: "Bring Your Own Account (BYOA) supported" },
      { feature: "Tracking Sync Frequency", competitor: "Standard intervals", growship: "15-minute scheduled syncs" },
      { feature: "Multi-Parcel Split Orders", competitor: "Basic order grouping", growship: "Independent AWB parcel timelines" },
      { feature: "NDR & Exception Queue", competitor: "Standard exception log", growship: "Proactive action queue + Growcord Comms" },
      { feature: "Freight Billing Transparency", competitor: "Standard billing summaries", growship: "100% itemised per-shipment ledger" },
    ],
  },
  nimbuspost: {
    name: "NimbusPost",
    category: "Shipping Tech Platform",
    tagline: "Comparing GrowShip with NimbusPost for high-velocity D2C brands",
    heroDesc:
      "NimbusPost provides broad carrier aggregation, but scaling brands often report challenges with weight discrepancy resolutions and support ticket bottlenecks. GrowShip is built for operational clarity.",
    growshipEdge: "Transparent Discrepancy Audits & Dedicated Support",
    competitorWeakness: "Frequent weight dispute friction & general support queues",
    quickVerdict: {
      competitorWhen: "You want a high-discount aggregator for lightweight shipments.",
      growshipWhen: "You value predictable billing, zero freight markup on direct contracts, and proactive NDR workflows.",
    },
    matrix: [
      { feature: "Daily Dispatch Workspace", competitor: "Standard aggregator UI", growship: "Unified command centre" },
      { feature: "Carrier Account Flexibility", competitor: "Platform rate focus", growship: "Bring Your Own Account (BYOA) or Wallet" },
      { feature: "Tracking Sync Frequency", competitor: "Standard sync", growship: "15-minute scheduled syncs + webhooks" },
      { feature: "Multi-Parcel Split Orders", competitor: "Basic multi-box support", growship: "Full parcel-level independent tracking" },
      { feature: "NDR & Exception Queue", competitor: "Standard dashboard alerts", growship: "Proactive action queue + automated alerts" },
      { feature: "Freight Billing Transparency", competitor: "Complex weight disputes", growship: "100% itemised per-shipment wallet ledger" },
    ],
  },
  clickpost: {
    name: "ClickPost",
    category: "Logistics SaaS",
    tagline: "GrowShip vs ClickPost: Enterprise tracking vs. Unified dispatch workspace",
    heroDesc:
      "ClickPost focuses heavily on post-purchase tracking APIs for enterprise accounts. GrowShip delivers an all-in-one operational workflow combining booking, thermal labels, manifests, and tracking into one screen.",
    growshipEdge: "All-in-One Dispatch + Tracking Workspace",
    competitorWeakness: "Complex enterprise API setup with heavy implementation overhead",
    quickVerdict: {
      competitorWhen: "You have a dedicated engineering team ready to build custom frontends over tracking APIs.",
      growshipWhen: "You want an out-of-the-box operations workspace for warehouse teams to print labels and manage NDRs immediately.",
    },
    matrix: [
      { feature: "Daily Dispatch Workspace", competitor: "API-first tracking focus", growship: "Unified command centre for booking & labels" },
      { feature: "Carrier Account Flexibility", competitor: "Multi-carrier API routing", growship: "Bring Your Own Account (BYOA) or Wallet" },
      { feature: "Tracking Sync Frequency", competitor: "Real-time API feeds", growship: "15-minute scheduled syncs + webhooks" },
      { feature: "Multi-Parcel Split Orders", competitor: "Custom API mapping required", growship: "Native independent parcel timelines" },
      { feature: "NDR & Exception Queue", competitor: "Enterprise tracking portal", growship: "Proactive action queue + Growcord Comms" },
      { feature: "Freight Billing Transparency", competitor: "Custom enterprise billing", growship: "100% itemised per-shipment wallet ledger" },
    ],
  },
};

export const dynamicParams = true;

export function generateStaticParams() {
  return Object.keys(COMPARISON_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const comp = COMPARISON_DATA[slug];
  if (!comp) return {};

  return {
    title: {
      absolute: `GrowShip vs ${comp.name} | Transparent Logistics Software Comparison`,
    },
    description: `Compare GrowShip with ${comp.name}. See why scaling e-commerce brands switch to GrowShip for unified dispatch, direct courier accounts, and itemised billing.`,
    alternates: { canonical: `/growship/compare/${slug}` },
    openGraph: {
      title: `GrowShip vs ${comp.name} | Logistics Software Comparison`,
      description: comp.tagline,
      url: `https://growship.in/growship/compare/${slug}`,
      type: "website",
    },
  };
}

export default async function ComparisonPage({ params }) {
  const { slug } = await params;
  const competitor = COMPARISON_DATA[slug];

  if (!competitor) notFound();

  return <CompareClientView competitor={competitor} slug={slug} />;
}