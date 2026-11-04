"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const RealEstateHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "features", label: "Features" },
    { id: "solutions", label: "Solutions" },
    { id: "demos", label: "Demos" },
    { id: "plans", label: "Plans" },
    { id: "testimonials", label: "Reviews" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-white/80 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 relative w-auto h-10"
          >
            <Image
              src="/logo.png"
              alt="Growcord"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative group ${activeSection === item.id
                    ? "text-orange-600 bg-orange-50"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-50"
                  }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-600 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("plans")}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-xl font-bold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md"
            >
              Get Started
            </button>
            <button
              onClick={() => window.openDemoPopup?.()}
              className="px-6 py-2.5 border-2 border-orange-600 text-orange-600 rounded-xl font-bold text-sm hover:bg-orange-50 transition-all duration-300"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RealEstateHeader;

