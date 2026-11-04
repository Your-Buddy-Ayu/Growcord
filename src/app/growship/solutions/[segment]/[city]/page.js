import {
  GROWSHIP_CITIES,
  GROWSHIP_SEGMENTS,
  citySlug,
  getGrowshipCity,
  getGrowshipSegment,
} from "@/data/growship";
import SolutionClientView from "./SolutionClientView";

export const dynamicParams = true;

// Extra 8 Segments × 15 Cities so every URL works without 404
const EXTRA_SEGMENTS = [
  {
    slug: "fashion-apparel",
    name: "Fashion & Apparel",
    noun: "apparel operations team",
    promise:
      "In search of robust and reliable e-commerce courier services? GrowShip is all you need! ",
    focus: [
      "1-click bulk thermal labels & daily handover manifests",
      "Proactive NDR action queue to stop COD apparel returns",
      "Multi-parcel split-order tracking for studio & warehouse dispatches",
    ],
  },
  {
    slug: "beauty-cosmetics",
    name: "Beauty & Cosmetics",
    noun: "beauty & personal care team",
    promise:
      "Shipping fragile glass serums and skincare kits demands fast transit and zero weight-slab surprises.",
    focus: [
      "500g dead-weight vs. volumetric validation before AWB creation",
      "90-day median carrier speed intelligence for fragile orders",
      "15-minute scheduled tracking refreshes & buyer alerts",
    ],
  },
  {
    slug: "electronics-gadgets",
    name: "Electronics & Gadgets",
    noun: "electronics dispatch desk",
    promise:
      "High-value electronics require ironclad handover manifests, real-time tracking syncs, and rapid exception resolution.",
    focus: [
      "Barcode-verified daily pickup manifests for zero handover gaps",
      "15-minute tracking syncs to spot stalled high-value parcels",
      "Independent AWB timelines for multi-box accessory orders",
    ],
  },
  {
    slug: "health-supplements",
    name: "Health & Supplements",
    noun: "wellness & nutraceutical team",
    promise:
      "Deliver repeat supplement orders on schedule while keeping 1kg–5kg surface and air freight costs completely transparent.",
    focus: [
      "Pre-configured 1kg, 2kg, and 5kg carton slab presets",
      "Side-by-side Priority Ground vs. Express Air speed comparisons",
      "100% itemised prepaid wallet debits for clean finance audits",
    ],
  },
  {
    slug: "home-decor",
    name: "Home Decor & Living",
    noun: "home & living dispatch team",
    promise:
      "Bring clarity to bulky cartons, volumetric weight slabs, and multi-piece decor shipments from one command centre.",
    focus: [
      "Multi-parcel split shipment support until every box arrives",
      "Pre-filled L×B×H dimension templates to avoid volumetric shocks",
      "Early NDR alerts to prevent expensive reverse freight on heavy goods",
    ],
  },
  {
    slug: "footwear-accessories",
    name: "Footwear & Accessories",
    noun: "footwear operations team",
    promise:
      "Dispatch standard shoeboxes faster, eliminate 1kg+ volumetric surprises, and cut Tier-2/3 COD returns.",
    focus: [
      "Standardised shoebox dimension presets on the dispatch board",
      "Pin-code level RTO and carrier SLA performance comparisons",
      "Connect your own Delhivery & Shiprocket accounts directly",
    ],
  },
  {
    slug: "fmcg-gourmet-food",
    name: "FMCG & Gourmet Food",
    noun: "food & beverage logistics team",
    promise:
      "Protect shelf-life and freshness by routing gourmet and consumable parcels using real median delivery speeds.",
    focus: [
      "Express lane routing powered by 90-day transit distributions",
      "Immediate NDR surfacing so perishable hampers never sit in hubs",
      "Automated shipped & out-for-delivery alerts via Growcord Comms",
    ],
  },
  {
    slug: "b2b-wholesale-distributors",
    name: "B2B & Wholesale Distributors",
    noun: "commercial dispatch team",
    promise:
      "Manage multi-carton commercial orders, link your own negotiated carrier contracts, and reconcile every rupee.",
    focus: [
      "Native multi-carton split-order tracking under one order ID",
      "Bring-Your-Own-Account (BYOA) support for Delhivery & Shiprocket",
      "Consolidated daily loading-bay manifests & itemised billing",
    ],
  },
];

const EXTRA_CITIES = [
  ["Delhi NCR", "Delhi, UP & Haryana", "delhi-ncr"],
  ["Mumbai", "Maharashtra", "mumbai"],
  ["Bengaluru", "Karnataka", "bengaluru"],
  ["Surat", "Gujarat", "surat"],
  ["Jaipur", "Rajasthan", "jaipur"],
  ["Ahmedabad", "Gujarat", "ahmedabad"],
  ["Hyderabad", "Telangana", "hyderabad"],
  ["Chennai", "Tamil Nadu", "chennai"],
  ["Kolkata", "West Bengal", "kolkata"],
  ["Pune", "Maharashtra", "pune"],
  ["Ludhiana", "Punjab", "ludhiana"],
  ["Tiruppur", "Tamil Nadu", "tiruppur"],
  ["Indore", "Madhya Pradesh", "indore"],
  ["Coimbatore", "Tamil Nadu", "coimbatore"],
  ["Kochi", "Kerala", "kochi"],
];

function formatNiceName(slug = "") {
  return decodeURIComponent(slug)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function resolveSegment(segmentSlugParam) {
  const fromData =
    typeof getGrowshipSegment === "function"
      ? getGrowshipSegment(segmentSlugParam)
      : null;
  if (fromData) return fromData;

  const fromExtra = EXTRA_SEGMENTS.find((s) => s.slug === segmentSlugParam);
  if (fromExtra) return fromExtra;

  const cleanName = formatNiceName(segmentSlugParam);
  return {
    slug: segmentSlugParam,
    name: cleanName,
    noun: `${cleanName.toLowerCase()} operations team`,
    promise: `Streamline your ${cleanName.toLowerCase()} shipping workflow with unified carrier booking, batch labels, and live exception tracking.`,
    focus: [
      "One dispatch command centre for bookings, labels & manifests",
      "15-minute scheduled tracking refreshes across carriers",
      "Proactive NDR resolution before parcels turn into RTOs",
    ],
  };
}

function resolveCity(citySlugParam) {
  const fromData =
    typeof getGrowshipCity === "function"
      ? getGrowshipCity(citySlugParam)
      : null;
  if (fromData) return fromData;

  const fromExtra = EXTRA_CITIES.find(([, , slug]) => slug === citySlugParam);
  if (fromExtra) return [fromExtra[0], fromExtra[1]];

  return [formatNiceName(citySlugParam), "India"];
}

export function generateStaticParams() {
  const existingSegments = Array.isArray(GROWSHIP_SEGMENTS)
    ? GROWSHIP_SEGMENTS.map((s) => s.slug)
    : [];
  const allSegmentSlugs = Array.from(
    new Set([...existingSegments, ...EXTRA_SEGMENTS.map((s) => s.slug)])
  );

  const existingCities = Array.isArray(GROWSHIP_CITIES)
    ? GROWSHIP_CITIES.map(([c]) =>
      typeof citySlug === "function"
        ? citySlug(c)
        : c.toLowerCase().replace(/\s+/g, "-")
    )
    : [];
  const allCitySlugs = Array.from(
    new Set([...existingCities, ...EXTRA_CITIES.map(([, , s]) => s)])
  );

  return allSegmentSlugs.flatMap((seg) =>
    allCitySlugs.map((cit) => ({
      segment: seg,
      city: cit,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { segment, city } = await params;
  const audience = resolveSegment(segment);
  const [cityName, state] = resolveCity(city);

  return {
    title: {
      absolute: `Shipping Software for ${audience.name} in ${cityName} (${state}) | GrowShip`,
    },
    description: `GrowShip gives ${audience.name} in ${cityName}, ${state} one unified shipping workspace for Delhivery & Shiprocket labels, manifests, 15-min tracking syncs, and proactive NDR action.`,
    alternates: { canonical: `/growship/solutions/${segment}/${city}` },
    openGraph: {
      title: `GrowShip for ${audience.name} in ${cityName}, ${state}`,
      description: audience.promise,
      url: `https://growship.in/growship/solutions/${segment}/${city}`,
      type: "website",
    },
  };
}

export default async function LocalSolutionPage({ params }) {
  const { segment, city } = await params;
  const audience = resolveSegment(segment);
  const [cityName, state] = resolveCity(city);

  const mergedCitiesMap = new Map();
  if (Array.isArray(GROWSHIP_CITIES)) {
    GROWSHIP_CITIES.forEach(([cName, cState]) => {
      const slug =
        typeof citySlug === "function"
          ? citySlug(cName)
          : cName.toLowerCase().replace(/\s+/g, "-");
      mergedCitiesMap.set(slug, { name: cName, state: cState, slug });
    });
  }
  EXTRA_CITIES.forEach(([cName, cState, slug]) => {
    if (!mergedCitiesMap.has(slug)) {
      mergedCitiesMap.set(slug, { name: cName, state: cState, slug });
    }
  });

  const mergedSegmentsMap = new Map();
  if (Array.isArray(GROWSHIP_SEGMENTS)) {
    GROWSHIP_SEGMENTS.forEach((seg) => {
      mergedSegmentsMap.set(seg.slug, {
        slug: seg.slug,
        name: seg.name,
        noun: seg.noun,
      });
    });
  }
  EXTRA_SEGMENTS.forEach((seg) => {
    if (!mergedSegmentsMap.has(seg.slug)) {
      mergedSegmentsMap.set(seg.slug, {
        slug: seg.slug,
        name: seg.name,
        noun: seg.noun,
      });
    }
  });

  return (
    <SolutionClientView
      segmentSlug={segment}
      citySlugParam={city}
      audience={audience}
      cityName={cityName}
      stateName={state}
      allCities={Array.from(mergedCitiesMap.values())}
      allSegments={Array.from(mergedSegmentsMap.values())}
    />
  );
}