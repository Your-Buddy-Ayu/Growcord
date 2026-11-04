"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GeminiImage from "../gemini/GeminiImage";

const RealEstateHero = ({
  headline,
  subheadline,
  ctaText,
  ctaLink = "#plans",
  badge,
  features = []
}) => {
  const router = useRouter();

  // Handle hash links (like #plans) by scrolling to element
  const handleCTAClick = (e) => {
    if (ctaLink.startsWith('#')) {
      e.preventDefault();
      const hash = ctaLink.substring(1);
      const element = document.getElementById(hash);

      if (element) {
        // Element found on current page, just scroll to it
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Element not found, navigate to root (or we could make this configurable)
        // But for Real Estate page, we usually want to stay here unless the link explicitly goes elsewhere.
        // Assuming ctaLink is just a hash like "#plans", we might want to check if we are already on the target page.
        // Since we don't know the target page for sure from just a hash, falling back to root might be the safe "generic" behavior, 
        // BUT for this specific page, we know the plans are here. 

        // Critical Fix: If we are on a page that *should* have the section but it's not mounted/found yet, we might have an issue.
        // However, the issue described is "redirects to homepage". 
        // The previous code FORCED navigation to '/' if pathname !== '/'.
        // We should remove that forced navigation.

        console.warn(`Element with id ${hash} not found on this page.`);
        // Optional: Navigate to home if really needed, but let's disable generic redirect to home for now 
        // to prevent unwanted jumping off the landing page.
        // router.push('/'); 
      }
    }
    // For non-hash links, Link component will handle navigation
  };
  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-6 sm:space-y-8"
          >
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-2 sm:mb-4 backdrop-blur-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wide">{badge}</span>
              </motion.div>
            )}

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block text-white mb-1 sm:mb-2">
                {headline.split(' ').slice(0, -3).join(' ')}
              </span>
              <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                {headline.split(' ').slice(-3).join(' ')}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed max-w-2xl font-normal" style={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
              {subheadline}
            </p>

            {/* Feature Pills */}
            {features.length > 0 && (
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-1.5 sm:gap-2 bg-white/10 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/20 text-xs sm:text-sm font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                  >
                    <span className="text-orange-400 text-base sm:text-lg">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-4">
              {ctaLink.startsWith('#') ? (
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={ctaLink}
                  onClick={handleCTAClick}
                  className="group relative bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10">{ctaText}</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
              ) : (
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href={ctaLink}
                    className="group relative bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 sm:gap-3 overflow-hidden"
                  >
                    <span className="relative z-10">{ctaText}</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => window.openDemoPopup?.()}
                className="group px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 text-center inline-flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <span>Book Demo</span>
                <span className="text-gray-400 group-hover:text-white transition-colors">▶</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual - Real Estate Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-purple-500/30 rounded-2xl sm:rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="relative bg-gray-800/50 border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] backdrop-blur-sm">

              {/* Image Container */}
              <div className="aspect-[4/5] md:aspect-square relative">
                <GeminiImage
                  prompt="Modern luxury real estate apartment building exterior, beautiful architecture, golden hour lighting, professional photography, high-end residential project, orange and warm tones, 8k quality"
                  imageId="real-estate-hero"
                  className="w-full h-full object-cover"
                  fallbackSrc={null}
                  alt="Luxury Real Estate Project"
                />

                {/* Overlay UI Elements */}
                <div className="absolute top-3 sm:top-6 left-3 sm:left-6 bg-black/70 backdrop-blur-md px-2 sm:px-4 py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl border border-white/20 flex items-center gap-2 sm:gap-3">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] sm:text-xs font-mono text-green-400 font-semibold">HIGH CONVERSION</span>
                </div>

                <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 bg-white/95 backdrop-blur-md p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 border-orange-400 max-w-[180px] sm:max-w-[220px] shadow-2xl">
                  <div className="text-[8px] sm:text-[10px] text-orange-600 uppercase tracking-widest mb-1 sm:mb-2 font-bold">Landing Page</div>
                  <p className="text-xs sm:text-sm text-gray-900 font-bold leading-relaxed">
                    Optimized for Lead Capture
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stats - Desktop */}
            <div className="absolute -right-8 lg:-right-12 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 hidden lg:flex">
              {[
                { label: "3x", sub: "Conversion" },
                { label: "<2s", sub: "Load Time" },
                { label: "24h", sub: "Launch" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800/90 border border-white/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md animate-float"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-orange-400">{item.label}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-medium">{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Stats - Mobile/Tablet (Below Image) */}
            <div className="flex flex-row justify-center gap-4 mt-6 lg:hidden">
              {[
                { label: "3x", sub: "Conversion" },
                { label: "<2s", sub: "Load Time" },
                { label: "24h", sub: "Launch" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800/80 border border-white/10 p-3 rounded-xl shadow-lg backdrop-blur-md flex-1 text-center"
                >
                  <div className="text-lg font-bold text-orange-400">{item.label}</div>
                  <div className="text-[10px] text-gray-400 font-medium">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHero;

