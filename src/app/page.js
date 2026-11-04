"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer"; // Assuming Footer exists and will be migrated
import StatsSection from "@/components/landing/StatsSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ResultsSection from "@/components/landing/ResultsSection";
import Testimonials from "@/components/landing/Testimonials";
import CTASection from "@/components/landing/CTASection";
import ClientLogos from "@/components/landing/ClientLogos";
import CaseStudies from "@/components/landing/CaseStudies";
import VisualHero from "@/components/landing/VisualHero";
import UrgencyBanner from "@/components/landing/UrgencyBanner";
import FaqSection from "@/components/FaqSection"; // Adjusted path likely needed to components/FaqSection or similar
import { SuiteCardsSection } from "@/components/classic/Sections";
import MainHero from "../assets/heroMain.jpg"

// Importing react icons
import { FaCartShopping } from "react-icons/fa6";
import { FaIndustry, FaHandshake, FaStore, FaHospital, FaHome, FaShareAlt, FaSearch, FaAd, FaGlobe, FaNewspaper, FaFileAlt, FaEnvelope, FaUserFriends, FaCheck, FaTimes } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoBag } from "react-icons/io5";

const Home = () => {
  const businessTypes = [
    {
      id: "ecommerce",
      title: "E-commerce",
      description:
        "Turn your store into a sales machine with a powerful online platform",
      icon: FaCartShopping,
      link: "/ecommerce",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "clinics",
      title: "Clinics",
      description:
        "Modern healthcare management made simple with digital solutions",
      icon: FaHospital,
      link: "/clinics",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      description:
        "High-conversion landing pages with optimized popup forms, attention-grabbing animations, and strategic CTAs to capture leads instantly",
      icon: FaHome,
      link: "/real-estate",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      description:
        "Comprehensive healthcare digital solutions for large facilities",
      icon: BsBuildingsFill,
      link: "/hospitals",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: "companies",
      title: "Companies",
      description: "Professional websites that grow your business",
      icon: IoBag,
      link: "/companies",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: "manufacturers",
      title: "Manufacturers",
      description: "BOMs, batches, purchasing and distributor orders  every batch costed truthfully",
      icon: FaIndustry,
      link: "/manufacturers",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "distributors",
      title: "Distributors",
      description: "Every retailer on the right price list, credit terms and one bulk order sheet",
      icon: FaHandshake,
      link: "/distributors",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "retail-stores",
      title: "Pharmacies & Retail",
      description: "Fast GST billing at the counter and an online store from the same stock",
      icon: FaStore,
      link: "/retail-stores",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "₹50M+", label: "Revenue Generated" },
    { value: "24/7", label: "Support Available" },
  ];

  const [clients, setClients] = useState([
    { name: "TechStart", logo: null },
    { name: "FashionHub", logo: null },
    { name: "HealthCare Plus", logo: null },
    { name: "Retail Pro", logo: null },
    { name: "Digital Solutions", logo: null },
    { name: "Business First", logo: null },
  ]);

  useEffect(() => {
    loadClientImages();
  }, []);

  const loadClientImages = async () => {
    try {
      const { clientImagesAPI } = await import('@/lib/api'); // Dynamic import
      // API_BASE_URL is handled in api.js
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

      const data = await clientImagesAPI.getAll();
      if (data && data.length > 0) {
        const clientLogos = data.map(img => ({
          name: img.name,
          logo: `${API_BASE_URL}${img.path}`
        }));
        setClients(clientLogos);
      }
    } catch (error) {
      console.error('Error loading client images:', error);
      // Keep default clients if API fails
    }
  };

  const caseStudies = [
    {
      category: "E-commerce",
      metric: "+400% Revenue",
      title: "FashionHub Online Store",
      description:
        "Transformed a local fashion store into a thriving online business with 400% revenue increase in 6 months.",
      results: [
        { value: "400%", label: "Revenue Growth" },
        { value: "50K+", label: "Monthly Visitors" },
        { value: "95%", label: "Satisfaction" },
      ],
      client: {
        name: "Priya Sharma",
        role: "Founder, FashionHub",
      },
      image: null,
      imageId: 'case-study-ecommerce',
    },
    {
      category: "Healthcare",
      metric: "+60% Efficiency",
      title: "HealthCare Plus Clinic",
      description:
        "Modernized clinic management system resulting in 60% operational efficiency improvement and better patient care.",
      results: [
        { value: "60%", label: "Efficiency" },
        { value: "80%", label: "Patient Satisfaction" },
        { value: "24/7", label: "Support" },
      ],
      client: {
        name: "Dr. Amit Patel",
        role: "Director, HealthCare Plus",
      },
      image: null,
      imageId: 'case-study-healthcare',
    },
    {
      category: "Real Estate",
      metric: "+300% Leads",
      title: "PropertyPro Platform",
      description:
        "Built a comprehensive real estate platform that generated 300% more qualified leads and closed deals faster.",
      results: [
        { value: "300%", label: "More Leads" },
        { value: "45%", label: "Faster Deals" },
        { value: "500+", label: "Properties" },
      ],
      client: {
        name: "Vikram Malhotra",
        role: "CEO, PropertyPro",
      },
      image: null,
      imageId: 'case-study-real-estate',
    },
  ];

  const processSteps = [
    {
      title: "Calculate Your Cost",
      description:
        "Use our transparent calculator to get an instant estimate for your project",
    },
    {
      title: "Get Your Quote",
      description:
        "Receive a detailed breakdown of services and pricing tailored to your needs",
    },
    {
      title: "Launch Your Business",
      description:
        "We handle everything from design to deployment, so you can focus on growth",
    },
  ];

  const results = [
    {
      metric: "300%",
      label: "Average Revenue Increase",
      description: "Businesses see significant growth after going digital",
    },
    {
      metric: "50%",
      label: "Faster Time to Market",
      description: "Get your business online in record time",
    },
    {
      metric: "95%",
      label: "Client Retention Rate",
      description: "Our clients stay with us because we deliver results",
    },
  ];

  const [testimonials, setTestimonials] = useState([
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart India",
      quote:
        "Growcord transformed our business. The transparent pricing and professional service exceeded all expectations. Our online revenue increased by 400% in just 6 months.",
      result: "+400% Revenue",
      image: null,
    },
    {
      name: "Priya Sharma",
      role: "Founder, FashionHub",
      quote:
        "Best decision we made. The cost calculator helped us plan our budget perfectly, and the team delivered exactly what was promised. Highly recommend!",
      result: "50K+ Visitors",
      image: null,
    },
    {
      name: "Amit Patel",
      role: "Director, HealthCare Plus",
      quote:
        "Professional, reliable, and results-driven. Growcord helped us modernize our clinic management system and our patient satisfaction scores improved dramatically.",
      result: "+60% Efficiency",
      image: null,
    },
  ]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const { testimonialsAPI, imageHelper } = await import('@/lib/api');
      const data = await testimonialsAPI.getAll();
      if (data && data.length > 0) {
        const formattedTestimonials = data.map(testimonial => imageHelper.formatTestimonial(testimonial));
        setTestimonials(formattedTestimonials);
      }
    } catch (error) {
      console.error('Error loading testimonials:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <UrgencyBanner />
      <Navbar />

      {/* Hero Section - Visual & Engaging */}
      <VisualHero
        headline="Unlock Your Online Growth Potential"
        subheadline="Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture. From Social Media Management to SEO, Website Development to Digital PR - Growcord provides transparent pricing and professional digital marketing solutions. Get instant quotes, no hidden fees, no sales pressure."
        ctaText="Get Your Instant Quote"
        ctaLink="/calculator/step1"
        badge="🔥 500+ Businesses Trust Us - India's Best Digital Marketing Agency"
        features={[
          "Social Media Management",
          "SEO & PPC Ads",
          "Website Development",
          "Content & Digital PR",
        ]}
        heroImage={MainHero}
      />

      {/* Stats Section */}
      <StatsSection stats={stats} />

      {/* Client Logos */}
      <ClientLogos clients={clients} title="Trusted by Industry Leaders" />

      {/* Digital Marketing Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative bg-gradient-to-br from-gray-50 to-white">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Digital Marketing Services
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Our Online Marketing Services
            <span className="block bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              To Drive Results
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            We only take on new projects once we know how to accomplish objectives. We review our clients' data and determine how our services will aid in their business growth.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10"
        >
          {[
            {
              id: "social-media-management",
              title: "Social Media Management",
              description: "Boost brand awareness and engagement across all platforms",
              icon: FaShareAlt,
              color: "from-blue-500 to-cyan-600",
              link: "/social-media-management",
            },
            {
              id: "seo",
              title: "Search Engine Optimization",
              description: "Rank higher in search results and drive organic traffic",
              icon: FaSearch,
              color: "from-green-500 to-emerald-600",
              link: "/seo",
            },
            {
              id: "ppc-ads",
              title: "Social & PPC Ads",
              description: "Targeted advertising campaigns that convert",
              icon: FaAd,
              color: "from-purple-500 to-pink-600",
              link: "/ppc-ads",
            },
            {
              id: "website-development",
              title: "Website Development",
              description: "Professional websites that convert visitors to customers",
              icon: FaGlobe,
              color: "from-orange-500 to-red-600",
              link: "/website-development",
            },
            {
              id: "digital-pr",
              title: "Digital PR",
              description: "Build your online reputation and brand presence",
              icon: FaNewspaper,
              color: "from-indigo-500 to-blue-600",
              link: "/digital-pr",
            },
            {
              id: "content-development",
              title: "Content Development",
              description: "Engaging content that converts and builds trust",
              icon: FaFileAlt,
              color: "from-teal-500 to-cyan-600",
              link: "/content-development",
            },
            {
              id: "email-sms-marketing",
              title: "Email, SMS & WhatsApp Marketing",
              description: "Direct communication with customers for better retention",
              icon: FaEnvelope,
              color: "from-yellow-500 to-orange-600",
              link: "/email-sms-marketing",
            },
            {
              id: "influencer-marketing",
              title: "Influencer Marketing",
              description: "Leverage influencer partnerships to reach new audiences",
              icon: FaUserFriends,
              color: "from-pink-500 to-rose-600",
              link: "/influencer-marketing",
            },
          ].map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={service.link}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden block h-full"
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-linear-to-r ${service.color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Industry Solutions Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Industry Solutions
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Complete Digital Solutions
            <span className="block bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
              For Every Industry
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Whether you&apos;re launching an e-commerce store, managing a clinic, selling real estate, or building your company website - we&apos;ve got you covered. Transparent pricing, professional service, proven results.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 relative z-10"
        >
          {businessTypes.map((type) => (
            <motion.div
              key={type.id}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={type.link}
                className="group bg-white rounded-3xl p-10 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden block h-full"
              >
                {/* Animated Gradient Background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-linear-to-r ${type.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 bg-linear-to-r ${type.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    ></div>
                    <div
                      className={`relative w-24 h-24 rounded-3xl bg-linear-to-r ${type.color} flex items-center justify-center text-5xl mb-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                    >
                      <type.icon color="white" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    {type.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100 group-hover:border-orange-200 transition-colors">
                    <span className="text-orange-600 font-bold text-lg group-hover:underline inline-flex items-center gap-3">
                      Explore Solutions
                      <span className="text-2xl group-hover:translate-x-3 transition-transform duration-500">
                        →
                      </span>
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-r from-orange-100 to-orange-50 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110">
                      <span className="text-orange-600 group-hover:text-white text-xl font-bold transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The Growcord Suite */}
      <SuiteCardsSection
        all
        tone="gray"
        eyebrow="New: The Growcord Suite"
        title="One Connected Suite to"
        highlight="Run Your Whole Business"
        text="Online store, POS, shipping, warehouse, GST accounting, WhatsApp, CRM, marketing, analytics and HR  18 products on one sign-in, one contact book and one set of accounts."
      />

      {/* Results Section */}
      <ResultsSection results={results} />

      {/* Process Section */}
      <ProcessSection steps={processSteps} />

      {/* Case Studies */}
      <CaseStudies caseStudies={caseStudies} title="Success Stories" />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} title="What Our Clients Say" />

      {/* Comparison Section */}
      <section className="py-24 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider mb-6">
              Why Choose Us
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Why We&apos;re Different
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              We&apos;re not your typical agency. From e-commerce to healthcare, real estate to corporate websites - we provide transparent pricing and professional service across all industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-red-100 hover:border-red-300 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                  <span className="text-red-600 text-3xl font-bold">
                    <FaTimes />
                  </span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">
                  Other Agencies
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-500 text-xl">
                    <FaTimes />
                  </span>
                  <span>
                    &quot;Let&apos;s schedule a call&quot; (then they hit you with hidden fees)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-500 text-xl">
                    <FaTimes />
                  </span>
                  <span>Wait 3-5 business days for a quote</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-500 text-xl">
                    <FaTimes />
                  </span>
                  <span>
                    Pricing? &quot;It depends&quot; (on how much they can charge you)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-500 text-xl">
                    <FaTimes />
                  </span>
                  <span>One-size-fits-all templates</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="bg-linear-to-br from-orange-50 to-purple-50 p-10 rounded-3xl shadow-2xl border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-black uppercase">
                Best Choice
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">
                    <FaCheck />
                  </span>
                </div>
                <h3 className="text-3xl font-black text-gray-900">Growcord</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-900">
                  <span className="text-green-500 text-xl font-bold">
                    <FaCheck />
                  </span>
                  <span className="font-semibold">
                    See the price right now. No calls needed.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-900">
                  <span className="text-green-500 text-xl font-bold">
                    <FaCheck />
                  </span>
                  <span className="font-semibold">
                    Get your quote in 2 minutes, not 2 weeks
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-900">
                  <span className="text-green-500 text-xl font-bold">
                    <FaCheck />
                  </span>
                  <span className="font-semibold">
                    What you see is what you pay. Period.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-900">
                  <span className="text-green-500 text-xl font-bold">
                    <FaCheck />
                  </span>
                  <span className="font-semibold">
                    Built specifically for your industry
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faq Section */}
      <FaqSection />

      {/* Final CTA */}
      <CTASection
        headline="Ready to Transform Your Business?"
        subheadline="Get a transparent cost estimate in minutes. No credit card required."
        primaryCtaText="Calculate Your Cost Now"
        primaryCtaLink="/calculator/step1"
        secondaryCtaText="View Case Studies"
        secondaryCtaLink="/ecommerce"
      />

      <Footer />
    </div>
  );
};

export default Home;
