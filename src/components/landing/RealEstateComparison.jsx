"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SectionCTA from './SectionCTA';

const RealEstateComparison = ({ cta }) => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dedicated Landing Page vs. <span className="text-orange-600">Main Website</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See why top developers use dedicated landing pages for each project launch.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Website */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-red-600 text-3xl font-bold">✗</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900">Main Website</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-800">
                <span className="text-red-600 text-xl mt-1 font-bold">✗</span>
                <span className="font-medium">Visitors get distracted by other projects</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="text-red-600 text-xl mt-1 font-bold">✗</span>
                <span className="font-medium">Slow loading with too many pages</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="text-red-600 text-xl mt-1 font-bold">✗</span>
                <span className="font-medium">Generic design doesn&apos;t highlight project</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="text-red-600 text-xl mt-1 font-bold">✗</span>
                <span className="font-medium">Low conversion rate (1-2%)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-800">
                <span className="text-red-600 text-xl mt-1 font-bold">✗</span>
                <span className="font-medium">Can&apos;t track project-specific metrics</span>
              </li>
            </ul>
          </motion.div>

          {/* Dedicated Landing Page */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-xl border-2 border-orange-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm">
              Best Choice
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900">Dedicated Landing Page</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-green-600 text-xl font-bold mt-1">✓</span>
                <span className="font-semibold">100% focus on one project = higher conversion</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-green-600 text-xl font-bold mt-1">✓</span>
                <span className="font-semibold">Lightning fast loading (under 2 seconds)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-green-600 text-xl font-bold mt-1">✓</span>
                <span className="font-semibold">Custom design showcasing project highlights</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-green-600 text-xl font-bold mt-1">✓</span>
                <span className="font-semibold">3-5x higher conversion rate</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-green-600 text-xl font-bold mt-1">✓</span>
                <span className="font-semibold">Dedicated analytics for each campaign</span>
              </li>
            </ul>
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

export default RealEstateComparison;

