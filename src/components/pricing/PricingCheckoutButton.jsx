"use client";

import Link from "next/link";
import { gtm } from "@/lib/analytics";
import { trackAddToCart } from "@/components/FacebookPixel";
import { trackLinkedInAddToCart } from "@/components/LinkedInInsightTag";

export default function PricingCheckoutButton({
  planId,
  planName,
  planPrice,
  isPopular = false,
  className = "",
  children = "Select Plan",
}) {
  const handleClick = () => {
    try {
      gtm.trackAddToCart({
        itemId: planId,
        itemName: planName,
        value: Number(planPrice),
      });
      trackAddToCart(Number(planPrice), "INR", planName);
      trackLinkedInAddToCart();
    } catch {
      // analytics fail-safe
    }
  };

  const defaultStyles = isPopular
    ? "block w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-orange-600 to-orange-500 text-white font-bold text-center hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02] transition-all duration-200"
    : "block w-full py-3.5 px-6 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent text-gray-900 dark:text-white font-bold text-center hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200";

  return (
    <Link
      href={`/checkout?plan=${encodeURIComponent(planId)}`}
      onClick={handleClick}
      className={className || defaultStyles}
      aria-label={`Select ${planName} plan`}
    >
      {children}
    </Link>
  );
}

