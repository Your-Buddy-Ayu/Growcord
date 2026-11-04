"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPencil } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";

const ProcessSection = ({ steps: stepsProp, title, highlight, subtitle }) => {
  // Optional props (2026-09-14): product and industry pages pass their own steps. Pages that pass
  // nothing keep the original four e-commerce steps exactly as before.
  const defaultSteps = [
    {
      number: "01",
      title: "Sign Up",
      description:
        "Create your account in 30 seconds. No credit card required.",
      icon: "✍️",
    },
    {
      number: "02",
      title: "Upload Products",
      description: "Add your products manually or bulk import them via CSV.",
      icon: "📦",
    },
    {
      number: "03",
      title: "Choose Design",
      description:
        "Select from our library of high-converting, mobile-first themes.",
      icon: "🎨",
    },
    {
      number: "04",
      title: "Start Selling",
      description:
        "Connect your payment gateway and launch your store to the world.",
      icon: "🚀",
    },
  ];
  const icons = [
    <FaPencil key="pencil" size={28} />,
    <FaBox key="box" size={28} />,
    <IoIosColorPalette key="palette" size={28} />,
    <IoRocketSharp key="rocket" size={28} />,
  ];
  const steps =
    Array.isArray(stepsProp) && stepsProp.length && stepsProp[0].description
      ? stepsProp.map((st, i) => ({
          number: String(i + 1).padStart(2, "0"),
          title: st.title,
          description: st.description,
          icon: st.icon || icons[i % icons.length],
        }))
      : defaultSteps;

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center mb-20 "
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title || "From Idea to Sales in"}{" "}
            <span className="text-orange-600">
              {highlight || `${steps.length} Simple Steps`}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle ||
              "We’ve removed all the technical barriers. Focus on your business, not the code."}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 -translate-y-1/2 z-0 origin-left"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.1 },
              },
            }}
            className={`grid gap-8 relative z-10 ${steps.length === 5 ? "md:grid-cols-5" : steps.length === 3 ? "md:grid-cols-3" : "md:grid-cols-4"}`}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="bg-gradient-to-b from-[#E2E4E6} via-red-100 to-yellow-100 p-6 rounded-2xl border-2 border-gray-100 shadow-xl group-hover:border-orange-500 transition-colors duration-300 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 text-white font-bold relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
