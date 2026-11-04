"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import SectionCTA from './SectionCTA';
import OptimizedImage from '../OptimizedImage';
import { imageHelper } from '@/lib/api';

const RealEstateDemos = ({ demos: propDemos, cta }) => {
  const demos = propDemos || [
    {
      id: 1,
      title: "Luxury High-Rise Launch",
      imageId: 'real-estate-demo-1',
      category: "Premium Projects",
      description: "Showcase amenities, floor plans, and lifestyle. Perfect for new tower launches.",
      link: "#"
    },
    {
      id: 2,
      title: "Affordable Housing",
      imageId: 'real-estate-demo-2',
      category: "Mass Market",
      description: "Focus on location advantages, price, and payment plans. High conversion layout.",
      link: "#"
    },
    {
      id: 3,
      title: "Commercial & Plots",
      imageId: 'real-estate-demo-3',
      category: "Investment",
      description: "Highlight ROI, connectivity, and growth potential. Ideal for commercial projects.",
      link: "#"
    }
  ];

  // Initialize with fallback images for immediate display
  const [demosWithImages, setDemosWithImages] = useState(
    demos.map(demo => ({
      ...demo,
      image: imageHelper.getFromGenerated(demo.imageId)
    }))
  );

  useEffect(() => {
    // Load image URLs from ClientImages with fallback to generated images
    const loadImages = async () => {
      try {
        const demosWithUrls = await Promise.all(demos.map(async demo => {
          if (!demo.imageId) return demo;

          // Try ClientImages first
          let imageUrl = await imageHelper.getFromClientImages(demo.imageId, 'demo', demo.imageId);

          // If not found, use fallback from generated images
          if (!imageUrl) {
            imageUrl = imageHelper.getFromGenerated(demo.imageId);
          }

          return {
            ...demo,
            image: imageUrl
          };
        }));
        setDemosWithImages(demosWithUrls);
      } catch (error) {
        console.error('Error loading demo images:', error);
        // Fallback to generated images on error
        const demosWithUrls = demos.map(demo => ({
          ...demo,
          image: demo.imageId ? imageHelper.getFromGenerated(demo.imageId) : null
        }));
        setDemosWithImages(demosWithUrls);
      }
    };
    loadImages();
  }, []);

  const displayDemos = demosWithImages.length > 0 ? demosWithImages : demos;

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="demos">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
            Project Templates
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Templates for <span className="text-orange-600">Every Project Type</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Choose from our library of high-converting templates designed specifically for real estate project launches.
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
          className="grid md:grid-cols-3 gap-8"
        >
          {displayDemos.map((demo) => (
            <motion.div
              key={demo.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                {demo.image ? (
                  <OptimizedImage
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes={{
                      mobile: 'small',
                      tablet: 'medium',
                      desktop: 'large'
                    }}
                    onError={(e) => {
                      // Try fallback image if main image fails
                      const fallbackUrl = imageHelper.getFromGenerated(demo.imageId);
                      if (fallbackUrl && e.target.src !== fallbackUrl) {
                        e.target.src = fallbackUrl;
                      } else {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                {!demo.image && (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    Loading image...
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-50 transition-colors">
                    <FaDesktop /> Preview
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-gray-900">
                  {demo.category}
                </div>
              </div>

              <div className="px-6 py-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                <p className="text-gray-700 mb-6 line-clamp-2 text-base">{demo.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaMobileAlt /> Mobile Ready
                  </div>
                  <Link href="/calculator/step1" className="text-orange-600 font-bold flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                    Select This Style <FaExternalLinkAlt className="text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {cta ? (
          <div className="mt-12">
            <SectionCTA {...cta} variant="compact" />
          </div>
        ) : (
          <div className="text-center mt-12">
            <Link href="/contact-us" className="inline-flex items-center gap-2 text-gray-500 hover:text-orange-600 font-semibold transition-colors">
              View all templates <span className="text-xl">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default RealEstateDemos;

