"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EcommercePricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "999",
      period: "/month",
      description: "Perfect for small shops just getting started online.",
      features: [
        "Store for 50 Products",
        "Free Domain & Hosting",
        "Basic Themes",
        "Cash on Delivery Support",
        "Standard Support",
        "Mobile Responsive Website"
      ],
      cta: "Start Small",
      popular: false,
      color: "blue"
    },
    {
      name: "Growth",
      price: "2999",
      period: "/month",
      description: "Everything you need to scale your brand rapidly.",
      features: [
        "Unlimited Products",
        "Payment Gateway (Razorpay/UPI)",
        "10+ Delivery Partners (Shiprocket)",
        "Abandoned Cart Recovery",
        "Advanced SEO Tools",
        "Priority Email Support",
        "Custom Domain Integration"
      ],
      cta: "Get Growth Plan",
      popular: true,
      color: "orange"
    },
    {
      name: "Pro Scale",
      price: "4999",
      period: "/month",
      description: "For high-volume sellers needing maximum power.",
      features: [
        "Everything in Growth",
        "Android Mobile App",
        "Dedicated Account Manager",
        "Advanced Analytics & Reports",
        "Marketing Automation Tools",
        "Priority Phone Support",
        "Zero Transaction Fees"
      ],
      cta: "Go Professional",
      popular: false,
      color: "purple"
    }
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden" id="pricing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your business stage. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-3 gap-8 items-center"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -8 }}
              className={`relative bg-gray-800 rounded-2xl p-8 border transition-all duration-300 ${plan.popular
                  ? 'border-orange-500 shadow-2xl shadow-orange-500/20 z-10 scale-105'
                  : 'border-gray-700 hover:border-gray-600'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-white">₹{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-400 mb-8 h-12">{plan.description}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-orange-500' : 'text-green-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/calculator/step1"
                className={`block w-full py-4 rounded-xl text-center font-bold transition-all duration-300 ${plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:shadow-lg hover:shadow-orange-500/40'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EcommercePricing;

