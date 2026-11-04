"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { leadsAPI } from "@/lib/api";
import { getUtmForLead, getPagePath } from "@/lib/utm";
import { IoIosFlash } from "react-icons/io";
import { gtm } from "@/lib/analytics";
import {
  FiZap,
  FiTrendingUp,
  FiSmartphone,
  FiLayout,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";

// Importing Image
import Pointing from "@/assets/pointing.svg";
import PointingLeft from "@/assets/pointingLeft.svg";
import PointingUp from "@/assets/pointingUp.svg";

import { TbArrowDownToArc } from "react-icons/tb";
import { FaSuitcase, FaWrench } from "react-icons/fa";
import { LuNotepadText } from "react-icons/lu";

const CTASection = ({
  headline,
  subheadline,
  primaryCtaText = "Get Started Now",
  primaryCtaLink = "/calculator/step1",
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ""));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      await leadsAPI.create({
        name: formData.name.trim(),
        phone: formData.phone.replace(/\D/g, ""),
        email: formData.email.trim(),
        source: "cta-section",
        pageId: getPagePath() || "/",
        status: "new",
        utm: getUtmForLead(),
      });

      // Track Lead event in Facebook Pixel
      const { trackLead } = await import("@/components/FacebookPixel");
      trackLead(0, "INR", "CTA Section Form");

      // GTM: Track Lead Generation
      gtm.trackLead("CTA Section Form", "INR", 0, {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", phone: "", email: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ submit: "Failed to submit. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 text-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 146, 60, 0.3) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Floating Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-50/20 via-transparent to-purple-50/20"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-lg">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Ready to Launch Your Project
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-gray-900">
            {headline || "Launch Your High-Conversion Landing Page in 24 Hours"}
          </h2>
          <p className="text-xl md:text-2xl mb-6 leading-relaxed font-semibold max-w-3xl mx-auto text-gray-800">
            {subheadline ||
              "Get a professionally designed, conversion-optimized landing page that captures leads instantly. No technical skills needed."}
          </p>

          {/* Key Features Pills */}

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              {
                text: "Launch in 24-48 Hours",
                icon: <FiClock size={24} className="text-[#f47721]" />,
              },
              {
                text: "3x Higher Conversion",
                icon: <FiTrendingUp size={24} className="text-[#f47721]" />,
              },
              {
                text: "Fast Loading (<2s)",
                icon: <IoIosFlash size={24} className="text-[#f47721]" />,
              },
              {
                text: "100% Mobile Responsive",
                icon: <FiSmartphone size={24} className="text-[#f47721]" />,
              },
              {
                text: "Professional Design",
                icon: <FiLayout size={24} className="text-[#f47721]" />,
              },
              {
                text: "CRM Integration Included",
                icon: <FiCheckCircle size={24} className="text-[#f47721]" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold text-black backdrop-blur-sm hover:border-[#f47721]/50 hover:bg-white/10 transition-all duration-300 shadow-sm cursor-default"
              >
                {feature.icon}
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-2xl relative overflow-hidden"
          >
            {/* CTA Pointing Image */}
            <div className="absolute -top-8 -right-8 z-20 hidden md:block">
              <img
                src={Pointing.src}
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-400 shadow-2xl animate-float"
                alt="Pointing to CTA"
                width={150}
                height={150}
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <LuNotepadText size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Get Your Free Quote
                  </h3>
                  <p className="text-sm text-gray-600">
                    Fill in your details and we'll get back to you within 2
                    hours
                  </p>
                </div>
              </div>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 text-3xl">✓</span>
                  </div>
                  <p className="text-gray-900 text-lg font-semibold">
                    Thank you! We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Your Name *"
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value.slice(0, 10))
                      }
                      placeholder="Phone Number *"
                      maxLength={10}
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1 font-medium">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Email Address *"
                      className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-3">
                      <p className="text-red-700 text-sm font-medium">
                        {errors.submit}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-4 rounded-xl text-lg font-bold hover:from-orange-700 hover:to-orange-600 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02]"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                        Submitting...
                      </>
                    ) : (
                      <>Get Free Quote Now →</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Benefits & CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border-2 border-orange-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Why Choose Us?
            </h3>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <IoIosFlash size={24} className="text-[#f47721]" />,
                  title: "Fast Launch",
                  desc: "Your landing page goes live in 24-48 hours",
                },
                {
                  icon: (
                    <TbArrowDownToArc size={24} className="text-[#f47721]" />
                  ),
                  title: "High Conversion",
                  desc: "3x more leads than generic websites",
                },
                {
                  icon: <FaSuitcase size={24} className="text-[#f47721]" />,
                  title: "Professional Design",
                  desc: "Beautiful, modern designs that convert",
                },
                {
                  icon: <FaWrench size={24} className="text-[#f47721]" />,
                  title: "All-Inclusive",
                  desc: "Domain, hosting, CRM - everything included",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white/70 rounded-xl p-4 border border-orange-100"
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-gray-700">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 relative">
              {/* Pointing Image for Primary CTA */}
              <div className="absolute -top-12 right-0 z-20 hidden md:block">
                <img
                  src={PointingLeft.src}
                  imageId="cta-pointing-2"
                  className="w-24 h-24 rounded-full object-cover border-3 border-orange-400 shadow-2xl animate-float"
                  alt="Pointing to CTA"
                  width={100}
                  height={100}
                />
              </div>
              <a
                href={primaryCtaLink}
                onClick={(e) => {
                  if (primaryCtaLink.startsWith("#")) {
                    e.preventDefault();
                    gtm.trackEvent("cta_click", {
                      label: primaryCtaText,
                      type: "primary",
                      section: "CTA Section",
                    });
                    const element = document.getElementById(
                      primaryCtaLink.substring(1),
                    );
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }
                }}
                className="group relative bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-xl overflow-hidden text-center w-full cursor-pointer"
              >
                <span className="relative z-10">{primaryCtaText}</span>
                <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <button
                onClick={() => {
                  gtm.trackPopupImpression(
                    "manual_cta",
                    "Book Demo - CTA Section",
                  );
                  // Trigger popup logic here or navigate
                  if (secondaryCtaLink && secondaryCtaLink.startsWith("http")) {
                    window.open(secondaryCtaLink, "_blank");
                  } else {
                    window.openDemoPopup?.();
                  }
                }}
                className="bg-white border-2 border-orange-400 text-orange-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-orange-50 transition-all duration-300 inline-flex items-center justify-center hover:scale-105 shadow-lg w-full relative"
              >
                {secondaryCtaText || "📞 Book a Free Demo Call"}
                {/* Pointing Image for Secondary CTA */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
                  <img
                    src={PointingUp.src}
                    className="w-20 h-20 rounded-full object-cover border-3 border-orange-400 shadow-2xl animate-float"
                    alt="Pointing to demo"
                    width={80}
                    height={80}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm"
        >
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl text-green-600">✓</span>
            <span className="font-semibold">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl text-green-600">✓</span>
            <span className="font-semibold">100% Transparent</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl text-green-600">✓</span>
            <span className="font-semibold">Instant Results</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
