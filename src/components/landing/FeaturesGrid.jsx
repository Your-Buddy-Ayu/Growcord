"use client";

import { motion } from "framer-motion";
import SectionCTA from './SectionCTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const FeaturesGrid = ({ features, title = "Key Features", cta }) => {
  return (
    <section className="py-12 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(107, 114, 128, 0.2) 1px, transparent 0)`,
            backgroundSize: "45px 45px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Complete Features
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal">
            Everything you need to succeed in one comprehensive package
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white px-6 py-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-orange-200 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {/* Robust Icon Rendering: Handle Component, Image Object (Next.js), or String URL */}
                  {typeof feature.icon === 'function' ? (
                    <feature.icon className="w-14 h-14 text-orange-500" />
                  ) : (
                    <img
                      src={feature.icon?.src || feature.icon}
                      alt={feature.title}
                      className="w-14 h-14 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
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

export default FeaturesGrid;
