import React from 'react';
import { motion } from 'framer-motion';
import { LuCreditCard, LuChartBar as LuBarChart, LuTruck, LuPackage, LuQrCode, LuSmartphone } from 'react-icons/lu';

const EcommerceFeatures = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-600 font-bold tracking-wider uppercase text-sm bg-orange-100 px-4 py-1 rounded-full"
          >
            Powerful Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4"
          >
            Everything You Need To Scale
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop juggling multiple plugins. Get a complete e-commerce suite out of the box.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Large Card - Payment */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuCreditCard className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Instant Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Accept payments via UPI, Credit Cards, Netbanking, and Wallets instantly.
                  Pre-integrated with Razorpay, PhonePe, and Paytm. No coding required.
                </p>
              </div>
              <div className="flex-1 w-full">
                {/* Visual Representation of Payment UI */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 transform rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-gray-700">Total</span>
                    <span className="text-green-600 font-bold text-lg">₹2,499</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 bg-white rounded-xl border border-blue-100 flex items-center px-4 gap-3 shadow-sm">
                      <LuQrCode className="text-blue-500 w-5 h-5" />
                      <span className="text-sm font-bold text-gray-800">UPI / QR Code</span>
                      <div className="ml-auto w-4 h-4 rounded-full border-[4px] border-blue-500"></div>
                    </div>
                    <div className="h-12 bg-white rounded-xl border border-gray-100 flex items-center px-4 gap-3 opacity-60">
                      <LuCreditCard className="text-gray-400 w-5 h-5" />
                      <span className="text-sm text-gray-600">Credit Card</span>
                      <div className="ml-auto w-4 h-4 rounded-full border border-gray-300"></div>
                    </div>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-xl mt-4 text-sm font-bold hover:bg-gray-800 transition-colors">Pay Now</button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tall Card - Analytics */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:row-span-2 bg-gray-900 text-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-0"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-gray-800 text-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                <LuBarChart className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Real-time Analytics</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Track sales, visitors, and conversion rates in real-time. Make data-driven decisions.
              </p>
              <div className="mt-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700">
                <div className="flex justify-between items-end h-32 gap-3">
                  {[40, 60, 35, 85].map((h, i) => (
                    <div key={i} className="w-full bg-gray-700 rounded-t-md relative overflow-hidden">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-orange-400"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-xs text-gray-500 font-medium">
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Logistics */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
              <LuTruck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Shipping</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ship across 29,000+ pincodes with Shiprocket. Print labels with one click.
            </p>
          </motion.div>

          {/* Medium Card - Inventory */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <LuPackage className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Inventory</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Auto-sync stock across channels. Get low stock alerts before you run out.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EcommerceFeatures;
