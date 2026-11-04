"use client";

import { motion } from "framer-motion";
import SectionCTA from './SectionCTA';

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

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const ResultsSection = ({ results, title = "Real Results", cta }) => {
  return (
    <section className="py-20 bg-linear-to-br from-white via-orange-50/20 to-purple-50/20 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Proven Impact
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-normal">
            See the impact we&apos;ve made for businesses like yours
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {results.map((result, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group bg-white px-8 py-6 rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-300 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-orange-500 to-purple-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Gradient Background */}
              <div className="absolute inset-0 bg-linear-to-br from-orange-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 text-center">
                <div className="text-5xl md:text-6xl font-black bg-linear-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                  {result.metric}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {result.label}
                </div>
                <p className="text-gray-600 leading-relaxed text-base font-normal">
                  {result.description}
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

export default ResultsSection;
