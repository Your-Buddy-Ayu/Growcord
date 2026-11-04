"use client";

import { motion } from "framer-motion";

const TrustBadges = ({ badges }) => {
  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 mb-6 text-sm font-semibold uppercase tracking-wide"
        >
          Trusted By Industry Leaders
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-gray-400 hover:text-gray-900 transition-colors cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;

