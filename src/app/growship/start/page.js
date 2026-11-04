import GrowShipApplication from "./GrowShipApplication";

export const metadata = {
  title: { absolute: "Start GrowShip | Shipping services application & KYC onboarding" },
  description: "Apply for GrowShip shipping services. Share your business profile and begin a secure, review-led KYC onboarding journey with Growcord.",
  alternates: { canonical: "/start" },
  robots: { index: false, follow: true },
};

export default function GrowShipStartPage() {
  return <GrowShipApplication />;
}
