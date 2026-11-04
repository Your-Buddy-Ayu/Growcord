"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Switch to <span className="text-orange-600">Growcord</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we stack up against the competition. Get more features for less.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full bg-white rounded-3xl shadow-xl overflow-hidden border-collapse">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-6 text-left text-xl font-bold w-1/4">Feature</th>
                <th className="p-6 text-center text-xl font-bold w-1/4 bg-orange-600 relative">
                  <div className="absolute -top-1 left-0 right-0 bg-yellow-400 text-xs text-gray-900 font-bold py-1 uppercase tracking-wider">
                    Best Value
                  </div>
                  Growcord
                </th>
                <th className="p-6 text-center text-xl font-bold text-gray-400 w-1/4">Shopify</th>
                <th className="p-6 text-center text-xl font-bold text-gray-400 w-1/4">WooCommerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <Row feature="Transaction Fees" growcord="0%" shopify="2.0%" woo="Depends" highlight />
              <Row feature="Built-in AI Video Generator" growcord="Unlimited" shopify="$29/mo App" woo="$49/mo Plugin" highlight />
              <Row feature="AI Product Descriptions" growcord="Included" shopify="$19/mo App" woo="$10/mo Plugin" />
              <Row feature="Indian Payment Gateways" growcord="Pre-Integrated" shopify="Manual Setup" woo="Plugin Required" />
              <Row feature="Shiprocket Integration" growcord="Native (Free)" shopify="App Required ($)" woo="Plugin Required ($)" />
              <Row feature="Custom Domain" growcord="Free" shopify="$14/year" woo="$15/year" />
              <Row feature="Premium Themes" growcord="Included" shopify="$200+" woo="$50+" highlight />
              <Row feature="Support" growcord="Phone & Email" shopify="Chat Only" woo="No Support" />
              <Row feature="Mobile App" growcord="Included (Pro)" shopify="$300/mo" woo="$500+" />
              <Row feature="Setup Time" growcord="5 Minutes" shopify="1-2 Days" woo="1-2 Weeks" highlight />
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

const Row = ({ feature, growcord, shopify, woo, highlight }) => (
  <tr className="hover:bg-gray-50 transition-colors">
    <td className="p-6 font-semibold text-gray-700 border-r border-gray-100">{feature}</td>
    <td className={`p-6 text-center font-bold text-lg border-r border-gray-100 ${highlight ? 'text-green-600 bg-green-50/30' : 'text-gray-900'}`}>
      {growcord}
    </td>
    <td className="p-6 text-center text-gray-500 border-r border-gray-100">{shopify}</td>
    <td className="p-6 text-center text-gray-500">{woo}</td>
  </tr>
);

export default ComparisonTable;
