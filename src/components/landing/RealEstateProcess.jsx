"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const RealEstateProcess = ({ steps: propSteps, cta }) => {
  const steps = propSteps || [
    {
      number: "01",
      title: "Choose Your Plan",
      description: "Select the number of landing pages you need. Starter (1 page), Business (3 pages), or Enterprise (10 pages).",
      icon: "📋"
    },
    {
      number: "02",
      title: "Share Project Details",
      description: "Send us project images, floor plans, amenities list, location details, and any specific requirements.",
      icon: "📤"
    },
    {
      number: "03",
      title: "We Build & Launch",
      description: "Our team designs, develops, and launches your landing page in 24-48 hours. You review and approve.",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Start Capturing Leads",
      description: "Your page goes live with CRM integration. Start running ads and watch leads flow in automatically.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Purchase to <span className="text-orange-600">Live in 48 Hours</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            No technical knowledge needed. Just provide your project details and we handle everything.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2 z-0"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-white px-6 py-5 rounded-2xl border-2 border-gray-100 shadow-xl group-hover:border-orange-500 transition-all duration-300 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300 text-orange-600 font-bold relative border border-orange-200">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {cta && (
          <div className="mt-12">
            <SectionCTA {...cta} variant="compact" />
          </div>
        )}
      </div>
    </section>
  );
};

export default RealEstateProcess;

