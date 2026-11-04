"use client";

import { motion } from "framer-motion";
import SectionCTA from './SectionCTA';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const SolutionSection = ({ solutions, title = "Our Solution", cta }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-white via-orange-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
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
            Our Solutions
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal">
            We provide comprehensive solutions to help you overcome these
            challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white px-8 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-orange-200 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-orange-50 border border-orange-100 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {/* Robust Icon Rendering: Handle Component, Image Object (Next.js), or String URL */}
                  {typeof solution.icon === 'function' ? (
                    <solution.icon className="w-12 h-12 text-orange-600" />
                  ) : (
                    <img
                      src={solution.icon?.src || solution.icon}
                      alt={solution.title}
                      className="w-12 h-12 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                  {solution.title}
                </h3>
                <p className="text-sm text-gray-600 mb-5 leading-relaxed font-normal">
                  {solution.description}
                </p>
                {solution.benefits && (
                  <ul className="space-y-2 text-left w-full">
                    {solution.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-700"
                      >
                        <span className="text-orange-600 mr-2 text-lg font-bold mt-0.5">
                          ✓
                        </span>
                        <span className="font-normal">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
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

export default SolutionSection;
