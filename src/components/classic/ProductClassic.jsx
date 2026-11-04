"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import VisualHero from "@/components/landing/VisualHero";
import StatsSection from "@/components/landing/StatsSection";
import Shipping from "@/components/landing/Shipping";
import ProcessSection from "@/components/landing/ProcessSection";
import ClientLogos from "@/components/landing/ClientLogos";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import FaqSection from "@/components/FaqSection";
import PricingCheckoutButton from "@/components/pricing/PricingCheckoutButton";
import { CompareSection, SuiteCardsSection } from "./Sections";
import { faIcon } from "./icons";
import { PRODUCT_IMAGES } from "@/data/images";

import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { LuCheck, LuSunDim } from "react-icons/lu";
import { FaWhatsapp, FaArrowRight as FaArrowRightSolid } from "react-icons/fa";
import OurServices from "../landing/OurServices";
import RateCalculator from "../landing/RateCalculator";
import Problems from "../landing/Problems";
import Solutions from "../landing/Solutions";
import CtaImage from "../../assets/ctaImage.svg";
import DeliveryBg from "../../assets/DeliveryBg.jpg";

// Reusable Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function ProductClassic({ product: p, links }) {
  const external = /^https?:\/\//.test(p.appUrl || "");

  return (
    <div className="min-h-screen bg-[#fbfcfe] selection:bg-[#f47721]/20 font-sans antialiased text-[#071d3a] relative overflow-x-clip">
      {/* Background Animated Gradient Orbs */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 25, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.15, 1, 1.15],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* =========================================================================
              STAGE 1: HERO SECTION (ATTENTION & HOOK)
          ========================================================================= */}
          <VisualHero
            headline={`${p.hero.title} ${p.hero.highlight}`}
            subheadline={p.hero.lede}
            ctaText={
              p.status === "beta"
                ? "Request Early Access"
                : `Talk to Us About ${p.name}`
            }
            ctaLink={`/contact-us?interest=${p.slug}`}
            secondaryCtaText={external ? `Open ${p.host}` : "See Pricing"}
            secondaryCtaLink={external ? p.appUrl : "#pricing"}
            badge={`${p.hero.eyebrow}${p.status === "beta" ? " · Beta" : ""}`}
            features={p.features.slice(0, 4).map((f) => f.title)}
            heroImage={p.image}
            aiBadges={false}
          />

          {/* =========================================================================
              STAGE 2: IMMEDIATE PROOF & ENTERPRISE TRUST
          ========================================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            aria-label={`${p.name} Key Performance Facts`}
          >
            <StatsSection stats={p.facts} />
          </motion.section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            aria-label="Trusted Enterprise Clients"
          >
            <ClientLogos name={p.name} />
          </motion.section>

          {/* ==============================================
          OUR SERVICES
          ============================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <OurServices p={p} />
          </motion.div>

          {/* ==============================================
          RATE CALCULATOR
          ============================================== */}
          {p.name === "Ship" && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <RateCalculator p={p} />
            </motion.div>
          )}

          {/* ====================================================
          SHIPPINGS
          ==================================================== */}
          {p.name === "Ship" && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <Shipping />
            </motion.div>
          )}

          {/* =========================================================================
              STAGE 3: THE REALITY CHECK (PROBLEM AGITATION & PAIN RECOGNITION)
          ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Problems data={p} />
          </motion.div>

          {/* =========================================================================
              STAGE 4: THE GROWCORD SOLUTION (SPOTLIGHT CAPABILITIES)
          ========================================================================= */}
          <Solutions data={p} />

          {/* =========================================================================
              STAGE 5: COMPLETE FEATURE MATRIX (DEEP CAPABILITIES)
          ========================================================================= */}
          <section
            id="features"
            className="py-24 bg-slate-50 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <motion.header
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="text-center mb-16"
              >
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest bg-orange-100 px-3 py-1 rounded-full">
                  Full Feature Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071d3a] tracking-tight mt-2">
                  Everything Included in Growcord {p.name}
                </h2>
              </motion.header>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {p.features.map((f, i) => {
                  const Icon = faIcon(f.icon);
                  return (
                    <motion.article
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border-2 border-gray-100 group hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between h-full"
                    >
                      <div>
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-5 text-white shadow-xs group-hover:scale-110 group-hover:rotate-6 transition-transform">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-[#071d3a] mb-2 group-hover:text-[#f47721] transition-colors">
                          {f.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                          {f.text}
                        </p>
                      </div>
                    </motion.article>
                  );
                })}
              </motion.div>
            </div>
          </section>

          {/* ============================================
          Connect your Store CTA (Joint CTA)
          ============================================ */}
          {p.name === "Ship" && (
            <section
              id="joint-CTA"
              className="relative w-full overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-24 my-8"
            >
              {/* Background Image with Layered Gradients for High Legibility */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                  src={DeliveryBg}
                  alt="Logistics Network Background"
                  fill
                  priority
                  className="object-cover object-center scale-105"
                  sizes="100vw"
                />
                {/* Dark Gradient Overlay for Maximum Text Contrast & Clarity */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-900/80 backdrop-blur-[2px]" />
                {/* Subtle Warm Accent Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_-20%,rgba(244,119,33,0.22),transparent_60%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/60" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Text & Action Column (7 Cols on Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: -35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.65,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="lg:col-span-7 flex flex-col items-start text-left"
                  >
                    {/* Eyebrow Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.1 }}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-4 shadow-sm backdrop-blur-md"
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                      Plug-and-Play Ecosystem
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.15 }}
                      className="text-white text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-[1.18] mb-4"
                    >
                      Instant Integrations for{" "}
                      <span className="text-[#f47721]">Shopify</span>,{" "}
                      <span className="text-[#f47721]">WooCommerce</span>, and
                      20+ Platforms.
                    </motion.h2>

                    {/* Supportive Value Proposition */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.2 }}
                      className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 max-w-xl"
                    >
                      Connect your existing storefront in minutes. Synchronize
                      catalogs, automate multi-carrier shipping allocations, and
                      transmit live tracking notifications with zero manual
                      reconciliation.
                    </motion.p>

                    {/* Key Feature Checkpoints */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.25 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg"
                    >
                      <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                        <FiCheckCircle className="text-orange-400 size-4.5 shrink-0" />
                        <span>1-Click Seamless API Authorization</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                        <FiCheckCircle className="text-orange-400 size-4.5 shrink-0" />
                        <span>Bi-Directional Order & Stock Sync</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                        <FiCheckCircle className="text-orange-400 size-4.5 shrink-0" />
                        <span>Automated Multi-Carrier Labeling</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                        <FiCheckCircle className="text-orange-400 size-4.5 shrink-0" />
                        <span>Zero Technical Setup Required</span>
                      </div>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.3 }}
                      className="flex flex-wrap items-center gap-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <Link
                          href="/connect"
                          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-[#f47721] hover:from-orange-600 hover:to-orange-700 text-white font-bold text-sm sm:text-base px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                        >
                          Connect Your Store Now
                          <FiArrowRight className="size-4.5" />
                        </Link>
                      </motion.div>

                      <Link
                        href="#features"
                        className="inline-flex items-center text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors duration-200 px-3 py-2"
                      >
                        View All 20+ Supported Channels →
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Right Illustration Column (5 Cols on Desktop) */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, x: 35 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="lg:col-span-5 flex justify-center items-center"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full max-w-md lg:max-w-none"
                    >
                      {/* Glass card backdrop behind illustration */}
                      <div className="relative rounded-3xl bg-slate-900/60 border border-slate-700/50 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
                        <Image
                          src={CtaImage}
                          loading="eager"
                          alt="E-commerce store integrations overview"
                          className="h-auto w-full object-contain drop-shadow-xl"
                        />

                        {/* Floating Trust Badge */}
                        <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs text-slate-400">
                          <span className="flex items-center gap-1.5 font-medium text-slate-300">
                            <span className="size-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                            Live Sync Active
                          </span>
                          <span>
                            Shopify • WooCommerce • Amazon • Custom API
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
          )}

          {/* =========================================================================
              STAGE 6: WORKFLOW & ONBOARDING PROCESS
          ========================================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            id="process"
            aria-label="Onboarding Process"
          >
            <ProcessSection
              title={`Start ${p.name} in`}
              highlight={`${p.steps.length} Steps`}
              subtitle={p.summary}
              steps={p.steps.map((s) => ({
                title: s.title,
                description: s.text,
              }))}
            />
          </motion.section>

          {/* =========================================================================
              STAGE 7: USE CASES (IF AVAILABLE)
          ========================================================================= */}
          {p.useCases && p.useCases.length > 0 && (
            <section
              id="use-cases"
              className="py-24 bg-white border-b border-slate-200 relative overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.header
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className="text-center mb-16"
                >
                  <span className="inline-block bg-orange-50 border border-orange-200 text-[#f47721] px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-3">
                    Tailored for Your Workflow
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071d3a] tracking-tight">
                    Built for Modern Operations Teams
                  </h2>
                </motion.header>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                >
                  {p.useCases.map((uc, i) => (
                    <motion.article
                      key={i}
                      variants={fadeInUp}
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className="bg-[#fbfcfe] border border-slate-200 p-6 sm:p-8 rounded-[2rem] shadow-sm hover:shadow-lg transition-shadow duration-300 group h-full"
                    >
                      <div className="w-12 h-12 bg-orange-50 text-[#f47721] rounded-xl flex items-center justify-center mb-5 border border-orange-100 group-hover:scale-110 transition-transform">
                        <FiCheckCircle size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-[#071d3a] mb-2 group-hover:text-[#f47721] transition-colors">
                        {uc.title}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {uc.text}
                      </p>
                    </motion.article>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* =========================================================================
              STAGE 8: ECOSYSTEM & UNIFIED DATA FLOW
          ========================================================================= */}
          <section id="integrations" aria-label="Ecosystem Integrations">
            <SuiteCardsSection
              eyebrow="Works Better Together"
              title={`${p.name} Connects With`}
              highlight="The Rest of Your Business"
              text="Use it on its own, or switch on the products around it. Nothing is exported, imported, or retypedthey share the exact same records."
              items={links}
              tone="gray"
            />
          </section>

          {/* =========================================================================
              STAGE 9: COMPETITIVE ADVANTAGE & COMPARISON
          ========================================================================= */}
          <section id="comparison" aria-label="Product Comparison">
            <CompareSection
              them={p.compare.them}
              rows={p.compare.rows}
              title={`${p.name} vs ${p.compare.them}`}
              text="What changes when your operations run on one unified system instead of fragmented point-solutions."
            />
          </section>

          {/* =========================================================================
              STAGE 10: CORE PRINCIPLES & PRODUCT ROADMAP
          ========================================================================= */}
          <section
            id="principles"
            className="py-24 bg-slate-50 border-t border-slate-200"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.header
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55 }}
                className="text-center mb-16"
              >
                <span className="inline-block bg-orange-100 border border-orange-200 text-orange-700 px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                  Built on Principles
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071d3a] tracking-tight">
                  What We
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f47721] to-red-500">
                    {" Will Never Do"}
                  </span>
                </h2>
              </motion.header>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {p.principles.map((pr) => {
                  const Icon = faIcon(pr.icon);
                  return (
                    <motion.article
                      key={pr.title}
                      variants={fadeInUp}
                      whileHover={{ y: -6, scale: 1.01 }}
                      transition={{ duration: 0.25 }}
                      className="bg-white p-6 sm:p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-[#f47721]/40 hover:shadow-md transition-all duration-300 h-full"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full text-white flex items-center justify-center mb-5 shadow-xl group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-[#071d3a] mb-2">
                        {pr.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {pr.text}
                      </p>
                    </motion.article>
                  );
                })}
              </motion.div>

              {p.roadmap?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="mt-10 bg-[#061a34] text-white rounded-[2rem] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 shadow-xl relativeoverflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
                  <span className="font-black uppercase tracking-widest text-[#f47721] text-xs sm:text-sm shrink-0 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse inline-block" />
                    On the Roadmap
                  </span>
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {p.roadmap.map((r, ri) => (
                      <motion.span
                        key={r}
                        whileHover={{ scale: 1.06 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 20,
                        }}
                        className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold backdrop-blur-md cursor-default hover:bg-white/10 hover:border-orange-500/30 transition-colors"
                      >
                        {r}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          {/* =========================================================================
              STAGE 11: VERIFIED SOCIAL PROOF
          ========================================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            id="testimonials"
            aria-label="Customer Testimonials"
          >
            <Testimonials title="What Growing Brands Say About Growcord" />
          </motion.section>

          {/* =========================================================================
              STAGE 12: DYNAMIC PRODUCT PRICING (COMMERCE VS SUITE CALLOUT)
          ========================================================================= */}
          <section
            id="pricing"
            className="py-24 bg-gray-950 text-white relative overflow-hidden"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
              {p.slug === "commerce" ? (
                /* E-Commerce specific pricing */
                <div>
                  <motion.header
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-12"
                  >
                    <span className="inline-block bg-orange-600/20 text-orange-400 border border-orange-500/30 px-5 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
                      Simple & Transparent
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                      Choose Your Growth Plan
                    </h2>
                    <p className="mt-3 text-sm sm:text-lg text-gray-400 max-w-2xl mx-auto">
                      One-time setup license of ₹9,999 + 5% or 10% commission on
                      delivered orders. Zero monthly software rent. Pay only
                      when you sell.
                    </p>
                  </motion.header>

                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.article
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.55 }}
                      whileHover={{ y: -8 }}
                      className="p-8 rounded-3xl bg-gray-900 border border-gray-800 flex flex-col justify-between hover:border-gray-700 transition-colors shadow-xl"
                    >
                      <div>
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">
                          Self Managed
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">
                          You run the store. We provide the full platform.
                        </p>
                        <div className="text-5xl font-black text-white mb-1">
                          5%
                        </div>
                        <div className="text-xs text-gray-400 mb-6">
                          Commission / Delivered Order + GST
                        </div>
                        <ul className="space-y-3 text-xs text-gray-300 mb-8">
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Complete storefront on custom domain</span>
                          </li>
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Multi-courier shipping with 1 wallet</span>
                          </li>
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Razorpay, UPI & OTP-verified COD</span>
                          </li>
                        </ul>
                      </div>
                      <PricingCheckoutButton
                        planId="ecom_self"
                        planName="Self Managed"
                        planPrice={9999}
                      >
                        Select Self Managed
                      </PricingCheckoutButton>
                    </motion.article>

                    <motion.article
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.55, delay: 0.1 }}
                      whileHover={{ y: -8 }}
                      className="p-8 rounded-3xl bg-gray-900 border-2 border-orange-500 shadow-2xl relative flex flex-col justify-between"
                    >
                      <div className="absolute -top-3 right-6 bg-linear-to-r from-orange-500 to-amber-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        RECOMMENDED
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          Fully Managed
                        </h3>
                        <p className="text-xs text-gray-400 mb-4">
                          We run operations, dispatch, ads, and recovery with
                          you.
                        </p>
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-300 mb-1">
                          10%
                        </div>
                        <div className="text-xs text-gray-400 mb-6">
                          Commission / Delivered Order + GST
                        </div>
                        <ul className="space-y-3 text-xs text-gray-300 mb-8">
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Everything in Self Managed</span>
                          </li>
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Catalog uploads & inventory management</span>
                          </li>
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>
                              Courier dispatch & WhatsApp NDR resolution
                            </span>
                          </li>
                          <li className="flex gap-2.5">
                            <LuCheck className="text-emerald-400 shrink-0 mt-0.5" />
                            <span>Dedicated operations account manager</span>
                          </li>
                        </ul>
                      </div>
                      <PricingCheckoutButton
                        planId="ecom_managed"
                        planName="Fully Managed"
                        planPrice={9999}
                        isPopular
                      >
                        Select Fully Managed
                      </PricingCheckoutButton>
                    </motion.article>
                  </div>
                </div>
              ) : (
                /* Dynamic Suite Product Pricing Callout */
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55 }}
                  className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl bg-gray-900 border border-gray-800 shadow-2xl relative"
                >
                  <span className="inline-block bg-orange-600/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
                    Transparent Suite Pricing
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
                    {p.pricing?.title || `How Growcord ${p.name} Is Priced`}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                    {p.pricing?.text ||
                      "Most Growcord suite applications switch on for your organisation without recurring subscription retainers."}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full sm:w-auto"
                    >
                      <Link
                        href={
                          p.pricing?.cta?.href ||
                          `/contact-us?interest=${p.slug}`
                        }
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-linear-to-r from-[#f47721] to-orange-500 text-white font-extrabold text-sm sm:text-base hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {p.pricing?.cta?.label || `Get Started with ${p.name}`}{" "}
                        <FiArrowRight />
                      </Link>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="w-full sm:w-auto"
                    >
                      <Link
                        href="/pricing"
                        className="w-full sm:w-auto px-7 py-4 rounded-xl border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-black transition-all flex items-center justify-center"
                      >
                        View All Suite Pricing
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </section>

          {/* =========================================================================
              STAGE 13: STRUCTURED SEO FAQS
          ========================================================================= */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            id="faq"
            className="py-20 bg-white border-t border-slate-200"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <FaqSection
                faqs={p.faqs}
                title={`${p.name} Frequently Asked Questions`}
                description={p.summary}
              />
            </div>
          </motion.section>

          {/* =========================================================================
              STAGE 14: HIGH-IMPACT FINAL CTA
          ========================================================================= */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            id="cta"
            aria-label={`Get Started with Growcord ${p.name}`}
          >
            <CTASection
              headline={`Ready to Try Growcord ${p.name}?`}
              subheadline="Tell us about your business and we’ll show you how it works with your own data with clear pricing, zero sales pressure."
              primaryCtaText="Talk to Our Team"
              primaryCtaLink={`/contact-us?interest=${p.slug}`}
              secondaryCtaText="Explore All Products"
              secondaryCtaLink="/products"
            />
          </motion.section>
        </main>

        <Footer />

        {/* WhatsApp Assistance Button */}
        <motion.a
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.8,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          href={`https://wa.me/917827831337?text=Hi%2C%20I'm%20interested%20in%20Growcord%20${encodeURIComponent(
            p.name,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-full shadow-xl transition-colors duration-200 flex items-center justify-center gap-2 group"
          aria-label={`Chat with us on WhatsApp about ${p.name}`}
        >
          <FaWhatsapp className="text-4xl group-hover:rotate-12 transition-transform duration-300" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-bold text-xs pr-1">
            Chat with us
          </span>
        </motion.a>
      </div>
    </div>
  );
}
