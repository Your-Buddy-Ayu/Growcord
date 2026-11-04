import TrackShipment from "./TrackShipment";

export const metadata = {
  title: { absolute: "Track a shipment | GrowShip" },
  description: "Track a GrowShip parcel with its AWB or shipment reference.",
  alternates: { canonical: "/track" },
  robots: { index: false, follow: true },
};

export default function TrackShipmentPage() { return <TrackShipment />; }
