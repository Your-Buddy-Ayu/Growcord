import TrackClientView from "./TrackClientView";

export const dynamicParams = true;

const SAMPLE_AWB_SLUGS = [
  "GRS-MUM-8492",
  "GRS-DEL-1058",
  "DLV-SPLIT-904",
  "NDR-SRT-4410",
  "GRS-BLR-7721",
];

export function generateStaticParams() {
  return SAMPLE_AWB_SLUGS.map((awb) => ({ awb }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
  const awb = resolvedParams?.awb || "GRS-MUM-8492";
  const decodedAwb = decodeURIComponent(awb).toUpperCase();

  return {
    title: {
      absolute: `Track Shipment ${decodedAwb} | Live Carrier Timeline | GrowShip`,
    },
    description: `Live 15-minute synced tracking timeline, split-parcel status, and NDR delivery updates for shipment ${decodedAwb} powered by GrowShip.`,
    alternates: { canonical: `/growship/track/${decodedAwb}` },
  };
}

export default async function GrowShipTrackPage({ params }) {
  const resolvedParams = params && typeof params.then === "function" ? await params : params || {};
  const awb = resolvedParams?.awb || "GRS-MUM-8492";
  const cleanAwb = decodeURIComponent(awb).toUpperCase();

  return <TrackClientView initialAwb={cleanAwb} />;
}