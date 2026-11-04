"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionCTA from "./SectionCTA";
import { imageHelper } from "@/lib/api";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const StatsSection = ({ stats, cta }) => {
  // Initialize with fallback image for immediate display
  const [bgImage, setBgImage] = useState(
    imageHelper.getFromGenerated("home-stats-bg"),
  );

  useEffect(() => {
    // Load background image from PageConfig with fallback to generated images
    const loadBg = async () => {
      try {
        // Try to get from PageConfig first
        const imageUrl = await imageHelper.getFromPageConfig(
          "home",
          "stats.backgroundImage",
          "home-stats-bg",
        );

        // If found, update with API image (otherwise keep fallback)
        if (imageUrl) {
          setBgImage(imageUrl);
        }
      } catch (error) {
        console.error("Error loading stats background image:", error);
        // Keep fallback image on error
      }
    };
    loadBg();
  }, []);

  return (
    <section
      className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white relative overflow-hidden"
      style={{
        backgroundImage: bgImage ? `url('${bgImage}')` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-600/90 via-orange-500/90 to-orange-600/90"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="border-white divide-white/30 mx-auto grid grid-cols-2 divide-y-0 divide-dashed rounded-2xl border border-dashed bg-white/5 md:grid-cols-4 md:divide-x lg:w-10/12 shadow-xl"
        >
          {stats.map((stat, key) => (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col-reverse items-center justify-between gap-y-4 p-4 text-center md:gap-y-10 md:p-7.5 lg:gap-y-16"
            >
              <span className="text-md text-white/90 font-normal tracking-tight md:text-base lg:text-2xl">
                {stat.label}
              </span>
              <div className="flex flex-row items-center gap-y-2.5 md:flex-col">
                <h2 className="text-white text-3xl leading-none md:text-5xl lg:text-6xl drop-shadow-md">
                  {stat.value}
                </h2>
              </div>
              {stat.description && (
                <div className="text-xs sm:text-sm text-white/80 mt-2 font-medium">
                  {stat.description}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        {cta && (
          <div className="mt-12">
            <SectionCTA {...cta} variant="compact" />
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
