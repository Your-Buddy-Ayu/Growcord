"use client";

import React from 'react';
import { motion } from 'framer-motion';

const WebsiteShowcase = () => {
  return (
    <section className="py-24 bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black opacity-80"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6">
          Stunning Designs that Convert
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Don&apos;t just build a website. Build a brand experience that your customers will love.
        </p>
      </motion.div>

      <div className="relative h-[600px] w-full max-w-7xl mx-auto perspective-1000">
        {/* Central Main Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] md:w-[60%] aspect-video bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden transform hover:scale-105 transition-all duration-500 z-20 group"
        >
          <div className="h-8 bg-gray-900 flex items-center gap-2 px-4 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
            {/* Placeholder for actual website screenshot */}
            <div className="text-center">
              <div className="text-6xl mb-4">👟</div>
              <h3 className="text-3xl font-bold text-white mb-2">RedFit Store</h3>
              <button className="bg-orange-600 text-white px-6 py-2 rounded-full text-sm">Shop Now</button>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          </div>
        </motion.div>

        {/* Left Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute top-32 left-[5%] w-[40%] aspect-video bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden transform -rotate-6 -translate-z-10 opacity-60 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500"
        >
          <div className="h-6 bg-gray-900 border-b border-gray-700"></div>
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 font-bold">Fashion Store</span>
          </div>
        </motion.div>

        {/* Right Floating Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 0.6, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute top-32 right-[5%] w-[40%] aspect-video bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden transform rotate-6 -translate-z-10 opacity-60 hover:opacity-100 hover:rotate-0 hover:z-30 transition-all duration-500"
        >
          <div className="h-6 bg-gray-900 border-b border-gray-700"></div>
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 font-bold">Electronics Hub</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;

