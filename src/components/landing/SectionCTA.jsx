"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaArrowRight, FaCalendarAlt, FaShoppingCart } from 'react-icons/fa';
import { gtm } from '@/lib/analytics';

const SectionCTA = ({
  primaryText = "View Plans",
  primaryLink = "#plans",
  secondaryText = "Book Demo",
  secondaryLink = "/contact-us",
  variant = "default", // "default", "compact", "inline"
  onBookDemo // Callback for Book Demo button
}) => {
  const router = useRouter();

  // Handle hash links (like #plans) by scrolling to element
  const handlePrimaryClick = (e) => {
    // GTM: Track Primary CTA Click
    gtm.trackEvent('cta_click', {
      label: primaryText,
      destination: primaryLink,
      type: 'primary'
    });

    if (primaryLink.startsWith('#')) {
      e.preventDefault();
      const hash = primaryLink.substring(1);
      const element = document.getElementById(hash);

      if (element) {
        // Element found on current page, just scroll to it
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Element not found, navigate to root and try again
        router.push('/');
        setTimeout(() => {
          const targetElement = document.getElementById(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
    // For non-hash links, Link component will handle navigation
  };

  const handleBookDemo = (e) => {
    // GTM: Track Secondary CTA Click
    gtm.trackEvent('cta_click', {
      label: secondaryText,
      destination: secondaryLink,
      type: 'secondary'
    });

    if (onBookDemo) {
      e.preventDefault();
      onBookDemo();
    } else if (window.openDemoPopup) {
      e.preventDefault();
      window.openDemoPopup();
    }
    // If no handler, let it navigate normally
  };
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        {primaryLink.startsWith('#') ? (
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={primaryLink}
            onClick={handlePrimaryClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center gap-2 group cursor-pointer"
          >
            <FaShoppingCart />
            {primaryText}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        ) : (
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href={primaryLink}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center gap-2 group"
            >
              <FaShoppingCart />
              {primaryText}
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href={secondaryLink}
            onClick={handleBookDemo}
            className="bg-white text-orange-600 border-2 border-orange-500 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all flex items-center gap-2 group"
          >
            <FaCalendarAlt />
            {secondaryText}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        {primaryLink.startsWith('#') ? (
          <a
            href={primaryLink}
            onClick={handlePrimaryClick}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md text-sm flex items-center gap-2 group cursor-pointer"
          >
            {primaryText}
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        ) : (
          <Link
            href={primaryLink}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 rounded-lg font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md text-sm flex items-center gap-2 group"
          >
            {primaryText}
            <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
        <Link
          href={secondaryLink}
          className="bg-white text-orange-600 border-2 border-orange-500 px-5 py-2.5 rounded-lg font-bold hover:bg-orange-50 transition-all text-sm flex items-center gap-2 group"
        >
          {secondaryText}
          <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );
  }

  // Default variant - full width centered
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
      {primaryLink.startsWith('#') ? (
        <a
          href={primaryLink}
          onClick={handlePrimaryClick}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 group text-lg cursor-pointer"
        >
          <FaShoppingCart />
          {primaryText}
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </a>
      ) : (
        <Link
          href={primaryLink}
          className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 group text-lg"
        >
          <FaShoppingCart />
          {primaryText}
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
      <Link
        href={secondaryLink}
        className="w-full sm:w-auto bg-white text-orange-600 border-2 border-orange-500 px-8 py-4 rounded-xl font-bold hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-lg"
      >
        <FaCalendarAlt />
        {secondaryText}
        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default SectionCTA;

