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

const ProblemSection = ({ problems, title = "Common Challenges", cta }) => {
  return (
    <section className="py-12 bg-gradient-to-br from-red-50 via-orange-50/50 to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(239, 68, 68, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
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
          <div className="inline-block bg-red-100 text-red-700 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Common Challenges
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal">
            Many businesses face these challenges when trying to establish their
            online presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white px-8 py-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-red-100 hover:border-red-300 group relative overflow-hidden flex flex-col justify-between"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {/* Robust Icon Rendering: Handle Component, Image Object (Next.js), or String URL */}
                  {typeof problem.icon === 'function' ? (
                    <problem.icon className="w-16 h-16 text-red-500" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={problem.icon?.src || problem.icon}
                      alt={problem.title}
                      className="w-16 h-16 object-contain"
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {problem.description}
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

export default ProblemSection;
