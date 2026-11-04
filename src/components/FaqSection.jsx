"use client";

import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqAPI } from "@/lib/api";
import { DEFAULT_FAQS, getFallbackFaqs } from "@/data/defaultFaqs";

const FAQSection = ({
  category = null,
  title = "Frequently Asked Questions",
  description = "We've compiled some of the most common questions our clients ask.",
  selectedIds = [],
  faqs: staticFaqs = null,
}) => {
  // Optional static list (product pages pass their own questions)
  const isStatic = Array.isArray(staticFaqs) && staticFaqs.length > 0;

  // Initialize with static FAQs or default fallback FAQs immediately (avoids blank flicker)
  const getInitialFaqs = () => {
    if (isStatic) {
      return staticFaqs.map((f, i) => ({
        _id: `static-${i}`,
        question: f.q || f.question,
        answer: f.a || f.answer,
      }));
    }
    return getFallbackFaqs(category);
  };

  const [faqs, setFaqs] = useState(getInitialFaqs);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [categories, setCategories] = useState(() => {
    const cats = [...new Set(DEFAULT_FAQS.map((f) => f.category))];
    return ["all", ...cats];
  });

  useEffect(() => {
    if (isStatic) return;
    if (category) {
      setSelectedCategory(category);
      setCategories([]); // Don't show category filter if category is explicitly locked
    } else {
      loadCategories();
    }
  }, [category, isStatic]);

  useEffect(() => {
    if (isStatic) {
      setFaqs(
        staticFaqs.map((f, i) => ({
          _id: `static-${i}`,
          question: f.q || f.question,
          answer: f.a || f.answer,
        })),
      );
      setLoading(false);
      return;
    }
    loadFAQs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, isStatic]);

  const loadCategories = async () => {
    try {
      if (category) return;
      const allFaqs = await faqAPI.getAll();
      if (Array.isArray(allFaqs) && allFaqs.length > 0) {
        const uniqueCategories = [
          ...new Set(allFaqs.map((faq) => faq.category || "general")),
        ];
        setCategories(["all", ...uniqueCategories]);
      }
    } catch {
      // Keep preloaded default categories on error
    }
  };

  const loadFAQs = async () => {
    const queryCategory =
      category || (selectedCategory === "all" ? null : selectedCategory);

    try {
      setLoading(true);
      const data = await faqAPI.getAll(queryCategory);

      if (Array.isArray(data) && data.length > 0) {
        if (selectedIds && selectedIds.length > 0) {
          setFaqs(
            data.filter((faq) => selectedIds.includes(faq.id || faq._id)),
          );
        } else {
          setFaqs(data);
        }
      } else {
        // Fallback when backend returns empty or unavailable
        setFaqs(getFallbackFaqs(queryCategory));
      }
    } catch {
      // Gracefully fall back to local default FAQs
      setFaqs(getFallbackFaqs(queryCategory));
    } finally {
      setLoading(false);
    }
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/symphony.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
            {title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              {title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            {description}
          </p>

          {/* Category Filter - Only show if NO category prop is forced AND we have categories */}
          {!category && categories.length > 2 && (
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-orange-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat === "all"
                    ? "All Questions"
                    : cat.charAt(0).toUpperCase() +
                      cat.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq._id || index}
              className="backdrop-blur-xl bg-white/70 border border-dashed border-gray-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-3.5 py-4 text-left focus:outline-none hover:cursor-pointer"
              >
                <span className="text-lg md:text-xl font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span
                  style={{
                    transform:
                      activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    color: activeIndex === index ? "#ea580c" : "#9ca3af",
                    transition: "transform 0.3s ease, color 0.3s ease",
                  }}
                >
                  <FaChevronDown size={18} />
                </span>
              </button>

              {/* Smooth Accordion Animation using CSS Grid */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed border-t border-orange-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
