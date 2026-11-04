import PricingClientView from "./PricingClientView";

export const metadata = {
  title: { absolute: "GrowShip pricing | Clear shipping operations costs" },
  description:
    "Understand GrowShip’s transparent shipping model: connect your own carrier account or use the platform wallet for eligible shipments.",
  alternates: { canonical: "/growship/pricing" },
  openGraph: {
    title: "GrowShip pricing | A clear operations layer",
    description:
      "One operations workspace. Choose your connected courier account or platform wallet route.",
    url: "https://growship.in/growship/pricing",
    type: "website",
  },
};

export default function GrowShipPricingPage() {
  return <PricingClientView />;
}