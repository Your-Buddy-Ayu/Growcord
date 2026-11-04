"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LiveActivity from "./LiveActivity";
import SocialProof from "./SocialProof";
import { gtm } from "@/lib/analytics";

const VisualHero = ({
  headline,
  subheadline,
  ctaText,
  ctaLink = "/calculator/step1",
  badge,
  features = [],
  heroImage,
  aiBadges = true,
  secondaryCtaText = "View Demo",
  secondaryCtaLink = "/calculator/step1",
}) => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-gray-950 text-white z-10 border-b border-white/10">
      {/* 1. Full-Screen Immersive Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden"
      >
        <img
          // 5. Image map se jo object mila hai, uska .src use karo
          src={heroImage.src}
          alt={badge}
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
        />
      </motion.div>

      {/* 2. Dark Overlay & Gradients for High-Contrast Text Readability */}
      <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-950 via-gray-950/40 to-gray-800/5 pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-transparent via-transparent to-gray-950/5 pointer-events-none" />

      {/* Ambient Glows & Subtle Texture */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-3/4 h-3/4 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-orange-900/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <div className="absolute inset-0  pointer-events-none z-0" />

      {/* 3. Left-Aligned Content Stack Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center py-8 lg:py-0">
        <div className="max-w-3xl flex flex-col justify-center gap-6 sm:gap-5 lg:gap-6">
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 backdrop-blur-md self-start shadow-lg"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                {badge}
              </span>
            </motion.div>
          )}

          {/* Heading (H1) with preserved gradient highlight */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-bold leading-[1.12] tracking-tight drop-shadow-md"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              {headline.split(" ").slice(0, -3).join(" ")}
            </span>
            <span className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent pb-1">
              {headline.split(" ").slice(-3).join(" ")}
            </span>
          </motion.h1>

          {/* Subheadline (bright white/gray for high contrast against dark overlay) */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-light max-w-2xl drop-shadow-sm"
          >
            {subheadline}
          </motion.p>

          {/* Feature Pills Checklist */}
          {/* {features.length > 0 && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.32 },
                },
              }}
              className="flex flex-wrap gap-2.5 sm:gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9, y: 10 },
                    show: { opacity: 1, scale: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-3 py-1 rounded-xl border border-white/20 text-xs sm:text-sm font-medium text-white backdrop-blur-md shadow-sm transition-colors cursor-default"
                >
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          )} */}

          {/* Dual Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 pt-1"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={ctaLink}
                onClick={() =>
                  gtm.trackEvent("hero_cta_click", {
                    label: ctaText,
                    destination: ctaLink,
                  })
                }
                className="group relative bg-white text-gray-900 px-7 py-3.5 rounded-xl text-base font-bold hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] transition-all duration-300 text-center inline-flex items-center justify-center gap-2 overflow-hidden shadow-lg w-full"
              >
                <span className="relative z-10">{ctaText}</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto"
            >
              <Link
                href={secondaryCtaLink}
                onClick={() =>
                  gtm.trackEvent("hero_cta_click", {
                    label: secondaryCtaText,
                    destination: secondaryCtaLink,
                  })
                }
                className="group px-7 py-3.5 rounded-xl text-base font-semibold text-white border-2 border-white/30 bg-black/30 hover:bg-white/10 backdrop-blur-md hover:border-white/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 w-full"
              >
                <span>{secondaryCtaText}</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">
                  {aiBadges ? "▶" : "→"}
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
            className="pt-1 self-start"
          >
            <SocialProof />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisualHero;
