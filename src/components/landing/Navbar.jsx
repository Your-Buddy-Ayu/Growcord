"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import {
  FaShareAlt,
  FaSearch,
  FaAd,
  FaGlobe,
  FaNewspaper,
  FaFileAlt,
  FaEnvelope,
  FaUserFriends,
  FaIndustry,
  FaHandshake,
  FaStore,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHospital, FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import { gtm } from "@/lib/analytics";
import { PRODUCT_GROUPS, productsInGroup } from "@/data/productNav";
import { GROUP_COLORS, faIcon } from "@/components/classic/icons";

const trackFacebookEvent = (event, data) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
};

const Navbar = () => {
  // Which full-width dropdown is open: "suite" | "solutions" | null
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(80);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      setNavbarHeight(navRef.current.offsetHeight);
    }
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300);
  };

  const digitalMarketingServices = [
    {
      id: "social-media-management",
      title: "Social Media Management (SMO)",
      icon: FaShareAlt,
      link: "/social-media-management",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      icon: FaSearch,
      link: "/seo",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "ppc-ads",
      title: "Social & PPC Ads",
      icon: FaAd,
      link: "/ppc-ads",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "website-development",
      title: "Website Development",
      icon: FaGlobe,
      link: "/website-development",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "digital-pr",
      title: "Digital PR",
      icon: FaNewspaper,
      link: "/digital-pr",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: "content-development",
      title: "Content Development",
      icon: FaFileAlt,
      link: "/content-development",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: "email-sms-marketing",
      title: "Email, SMS & WhatsApp Marketing",
      icon: FaEnvelope,
      link: "/email-sms-marketing",
      color: "from-yellow-500 to-orange-600",
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      icon: FaUserFriends,
      link: "/influencer-marketing",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const industrySolutions = [
    {
      id: "ecommerce",
      title: "E-commerce Solutions",
      icon: FaCartShopping,
      link: "/ecommerce",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "clinics",
      title: "Clinics",
      icon: FaHospital,
      link: "/clinics",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "real-estate",
      title: "Real Estate",
      icon: FaHome,
      link: "/real-estate",
      color: "from-orange-500 to-red-600",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      icon: BsBuildingsFill,
      link: "/hospitals",
      color: "from-indigo-500 to-blue-600",
    },
    {
      id: "companies",
      title: "Companies",
      icon: IoBag,
      link: "/companies",
      color: "from-gray-600 to-gray-800",
    },
    {
      id: "manufacturers",
      title: "Manufacturers",
      icon: FaIndustry,
      link: "/manufacturers",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "distributors",
      title: "Distributors",
      icon: FaHandshake,
      link: "/distributors",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: "retail-stores",
      title: "Pharmacies & Retail Stores",
      icon: FaStore,
      link: "/retail-stores",
      color: "from-teal-500 to-cyan-600",
    },
  ];

  const MenuItem = ({
    href,
    icon: Icon,
    title,
    color,
    hover = "orange",
    compact = false,
  }) => (
    <Link
      href={href}
      className={`group flex items-center gap-2.5 ${compact ? "px-2.5 py-1.5" : "px-3 py-2"} rounded-lg transition-all duration-200 border border-transparent ${hover === "orange" ? "hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100/70 hover:border-orange-200" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50/70 hover:border-blue-200"}`}
      onClick={() => setOpenMenu(null)}
    >
      <div
        className={`${compact ? "w-7 h-7 text-xs" : "w-8 h-8 text-sm"} rounded-lg bg-gradient-to-r ${color} flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-all duration-200 shrink-0`}
      >
        <Icon />
      </div>
      <div className="flex-1 min-w-0">
        <h4
          className={`font-semibold text-xs sm:text-[13px] leading-tight text-gray-800 truncate transition-colors ${hover === "orange" ? "group-hover:text-orange-600" : "group-hover:text-blue-600"}`}
        >
          {title}
        </h4>
      </div>
      <span
        className={`text-gray-300 text-xs group-hover:translate-x-0.5 transition-all shrink-0 ${hover === "orange" ? "group-hover:text-orange-600" : "group-hover:text-blue-600"}`}
      >
        →
      </span>
    </Link>
  );

  const Dropdown = ({ menu, children }) =>
    openMenu === menu ? (
      <>
        <div
          className="fixed inset-x-0"
          style={{
            top: `${navbarHeight}px`,
            height: "8px",
            pointerEvents: "auto",
            zIndex: 49,
          }}
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        />
        <div
          className="fixed inset-x-0 bg-white shadow-2xl border-x border-b border-gray-100 py-5 px-6 transition-all duration-200 ease-out opacity-100 z-50 max-h-[calc(100vh-100px)] overflow-y-auto"
          style={{
            top: `${navbarHeight}px`,
            width: "100vw",
            maxWidth: "100vw",
            overflowX: "hidden",
            pointerEvents: "auto",
            borderRadius: "0 0 1rem 1rem",
          }}
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
        </div>
      </>
    ) : null;

  const navLink =
    "text-gray-700 hover:text-orange-600 transition-colors font-semibold text-base relative group";

  return (
    <nav
      ref={navRef}
      className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200/50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 relative">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group w-[180px] h-[50px] relative"
          >
            <Image
              src="/logo.png"
              alt="Growcord - india's best digital marketing agency"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className="hidden lg:flex items-center space-x-7">
            <Link href="/" className={navLink}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Suite dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("suite")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`${navLink} flex items-center gap-1 py-2 px-2 -mx-2`}
              >
                Products
                <IoChevronDown
                  className={`transition-transform duration-300 ${openMenu === "suite" ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Dropdown menu="suite">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {PRODUCT_GROUPS.map((g) => (
                    <div
                      key={g.key}
                      className="bg-gray-50/70 p-3 rounded-xl border border-gray-100 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-gray-200/70">
                          <span className="text-[11px] font-black uppercase tracking-wider text-orange-600">
                            {g.name}
                          </span>
                        </div>
                        <div className="flex flex-col space-y-0.5">
                          {productsInGroup(g.key).map((p) => (
                            <MenuItem
                              key={p.slug}
                              href={`/products/${p.slug}`}
                              icon={faIcon(p.icon)}
                              title={
                                p.status === "live"
                                  ? p.name
                                  : `${p.name} (Beta)`
                              }
                              color={GROUP_COLORS[p.group]}
                              compact={true}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-end gap-3">
                  <Link
                    href="/products"
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1 bg-gray-900 text-white px-4 py-2 rounded-lg font-bold hover:bg-gray-800 transition-colors text-xs"
                  >
                    Explore Suite →
                  </Link>
                  <Link
                    href="/pricing"
                    onClick={() => setOpenMenu(null)}
                    className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:brightness-105 transition-all text-xs"
                  >
                    See Pricing →
                  </Link>
                </div>
              </Dropdown>
            </div>

            {/* Solutions dropdown: industries + services (the original menu) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`${navLink} flex items-center gap-1 py-2 px-2 -mx-2`}
              >
                Solutions
                <IoChevronDown
                  className={`transition-transform duration-300 ${openMenu === "solutions" ? "rotate-180" : ""}`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              <Dropdown menu="solutions">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-gray-50/70 p-3.5 rounded-xl border border-gray-100">
                    <h3 className="text-xs font-black uppercase tracking-wider text-orange-600 mb-2 pb-1.5 border-b border-gray-200/70">
                      Industries
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {industrySolutions.map((s) => (
                        <MenuItem
                          key={s.id}
                          href={s.link}
                          icon={s.icon}
                          title={s.title}
                          color={s.color}
                          compact={true}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-2 bg-gray-50/70 p-3.5 rounded-xl border border-gray-100">
                    <h3 className="text-xs font-black uppercase tracking-wider text-blue-600 mb-2 pb-1.5 border-b border-gray-200/70">
                      Digital Growth & Marketing Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {digitalMarketingServices.map((s) => (
                        <MenuItem
                          key={s.id}
                          href={s.link}
                          icon={s.icon}
                          title={s.title}
                          color={s.color}
                          hover="blue"
                          compact={true}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-gray-100 flex items-center justify-end">
                  <Link
                    href="/calculator/step1"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-5 py-2 rounded-lg font-bold hover:brightness-105 transition-all text-xs"
                    onClick={() => {
                      setOpenMenu(null);
                      gtm.trackEvent("nav_cta_click", {
                        label: "Menu Calculate Cost",
                      });
                      trackFacebookEvent("NavClick", {
                        label: "Menu Calculate Cost",
                      });
                    }}
                  >
                    Calculate Your Cost →
                  </Link>
                </div>
              </Dropdown>
            </div>

            <Link href="/pricing" className={navLink}>
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/calculator/step1"
              className={navLink}
              onClick={() => {
                gtm.trackEvent("nav_link_click", { label: "Calculator" });
                trackFacebookEvent("NavClick", { label: "Calculator" });
              }}
            >
              Calculator
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="https://hub.gc.mw" className={navLink}>
              Sign In
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <Link
              href="/calculator/step1"
              className="bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg"
              onClick={() => {
                gtm.trackEvent("nav_cta_click", { label: "Get Started" });
                trackFacebookEvent("NavClick", { label: "Get Started" });
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 max-h-[75vh] overflow-y-auto">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold mb-2 flex items-center gap-2">
                  <IoBag className="text-orange-600" />
                  Products
                </div>
                {PRODUCT_GROUPS.map((g) => (
                  <div key={g.key} className="pl-4">
                    <div className="text-xs font-black uppercase tracking-wider text-gray-400 mt-2 mb-1">
                      {g.name}
                    </div>
                    {productsInGroup(g.key).map((p) => {
                      const Icon = faIcon(p.icon);
                      return (
                        <Link
                          key={p.slug}
                          href={`/products/${p.slug}`}
                          className="flex items-center gap-3 py-2 text-gray-600 hover:text-orange-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Icon className="text-orange-600" />
                          <span className="text-sm">
                            {p.name}
                            {p.status !== "live" ? " (Beta)" : ""}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                ))}
                <div className="text-gray-700 font-semibold mb-2 mt-4 flex items-center gap-2">
                  <FaCartShopping className="text-orange-600" />
                  Industries
                </div>
                {industrySolutions.map((service) => (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="flex items-center gap-3 pl-4 py-2 text-gray-600 hover:text-orange-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <service.icon className="text-orange-600" />
                    <span className="text-sm">{service.title}</span>
                  </Link>
                ))}
                <div className="text-gray-700 font-semibold mb-2 mt-4 flex items-center gap-2">
                  <FaShareAlt className="text-blue-600" />
                  Services
                </div>
                {digitalMarketingServices.map((service) => (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="flex items-center gap-3 pl-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <service.icon className="text-blue-600" />
                    <span className="text-sm">{service.title}</span>
                  </Link>
                ))}
              </div>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-orange-600 transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/calculator/step1"
                className="text-gray-700 hover:text-orange-600 transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calculator
              </Link>
              <a
                href="https://hub.gc.mw"
                className="text-gray-700 hover:text-orange-600 transition-colors font-semibold"
              >
                Sign In
              </a>
              <Link
                href="/calculator/step1"
                className="bg-linear-to-r from-orange-600 to-orange-500 text-white px-6 py-3 rounded-xl font-bold text-center hover:shadow-xl transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
