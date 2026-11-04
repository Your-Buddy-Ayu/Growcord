"use client";

import { motion } from "framer-motion";
import Ship2 from "../../assets/ProductClassic/ship2.jpg";
import Ship3 from "../../assets/ProductClassic/ship3.jpg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiTicktick } from "react-icons/si";

const Solutions = ({ data }) => {
  const spotlights = data?.spotlights || [];
  const audience = data?.audience || {};

  const solutions = [
    ...spotlights.map((s, i) => ({
      image: i === 0 ? data?.image || Ship2 : Ship2,
      title: `${s?.title || ""} ${s?.highlight || ""}`.trim(),
      description: s?.text || "",
      benefits: s?.points || [],
    })),
    ...(audience?.persona
      ? [
          {
            image: Ship3,
            title: "Built for your team",
            description: audience.persona || "",
            benefits: Array.isArray(audience.needs)
              ? audience.needs.slice(0, 4)
              : [],
          },
        ]
      : []),
  ];

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    let animFrame = null;

    const updateDimensions = () => {
      const track = trackRef.current;
      if (!track || window.innerWidth < 1024) {
        setContainerHeight(null);
        if (track) track.style.transform = "";
        return;
      }
      // Horizontal scroll distance to bring the last card fully into viewport with end padding
      const horizontalDistance = Math.max(
        0,
        track.scrollWidth - window.innerWidth + 120,
      );
      // Dwell buffer keeps the last card visible and stationary before releasing vertical scroll
      const dwellBuffer = Math.min(window.innerHeight * 0.45, 450);
      const totalHeight = window.innerHeight + horizontalDistance + dwellBuffer;
      setContainerHeight(totalHeight);
    };

    const handleScroll = () => {
      if (animFrame) cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track || window.innerWidth < 1024) return;

        const rect = container.getBoundingClientRect();
        // Offset for the header above the cards so scrolling begins right when the card itself is 100px from the top
        const headerHeight = headerRef.current
          ? headerRef.current.offsetHeight + 48
          : 160;
        const cardStickyTop = 100;
        const triggerPoint = -(cardStickyTop - headerHeight); // when rect.top reaches this, the cards are 100px from top

        const scrolled = -rect.top - triggerPoint;
        const horizontalDistance = Math.max(
          0,
          track.scrollWidth - window.innerWidth + 120,
        );

        if (scrolled <= 0) {
          track.style.transform = "translate3d(0px, 0px, 0px)";
        } else if (scrolled >= horizontalDistance) {
          // Last card is locked in full view while user continues through dwell buffer
          track.style.transform = `translate3d(-${horizontalDistance}px, 0px, 0px)`;
        } else {
          track.style.transform = `translate3d(-${scrolled}px, 0px, 0px)`;
        }
      });
    };

    updateDimensions();
    handleScroll();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (animFrame) cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [solutions.length]);

  return (
    <section
      ref={containerRef}
      id="case-study-sticky-container"
      style={containerHeight ? { height: `${containerHeight}px` } : undefined}
      className="bg-gray-50 relative w-full pt-20 md:pb-20 lg:py-0"
    >
      <div className="w-full lg:sticky lg:top-[-50px] lg:flex lg:h-screen lg:flex-col lg:justify-start lg:pt[100px] lg:overflow-hidden">
        <div
          ref={headerRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6 lg:mb-10"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="border border-orange-200 bg-orange-50 mb-3 inline-flex rounded-full px-4 py-1">
                <span className="text-orange-600 text-xs font-bold tracking-wider uppercase">
                  Spotlight Capabilities
                </span>
              </div>
              <h2 className="text-gray-900 text-3xl sm:text-4xl leading-tight font-extrabold tracking-tight">
                Architected for Scale:{" "}
                <span className="text-orange-600">Unified Operations</span>{" "}
                Built for Impact
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                href="#features"
                className="bg-orange-600 hover:bg-orange-700 text-white inline-flex rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Explore Full Feature Architecture →
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={trackRef}
            id="case-study-track"
            className="scrollbar-hide grid w-full grid-cols-1 gap-6 px-4 pb-12 will-change-transform md:grid-cols-2 md:px-6 lg:flex lg:w-max lg:gap-8 lg:overflow-visible lg:px-24 lg:pb-0 lg:pr-32"
          >
            {solutions.map((item, i) => {
              const imageSrc =
                typeof item.image === "object" && item.image?.src
                  ? item.image.src
                  : item.image;

              return (
                <div
                  key={i}
                  className="flex w-full shrink-0 flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-sm border border-gray-100 transition-all duration-300 lg:w-[900px] lg:max-w-[950px] hover:shadow-xl hover:border-orange-200"
                >
                  <div className="grid grid-cols-1 items-stretch gap-6 py-3.5 px-4 sm:p-7 md:grid-cols-2 md:gap-7">
                    <div className="flex flex-col justify-between">
                      <div>
                        <span className="text-orange-600 text-xs font-bold tracking-wider uppercase mb-1.5 inline-block">
                          Solution 0{i + 1}
                        </span>
                        <h3 className="text-gray-900 text-xl sm:text-2xl leading-snug font-bold mb-3">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {item.description}
                          </p>
                        )}
                        {item.benefits && item.benefits.length > 0 && (
                          <ul className="space-y-2 mb-4">
                            {item.benefits.map((b, bi) => (
                              <li
                                key={bi}
                                className="flex items-start gap-2  text-gray-700 font-medium"
                              >
                                <span className="text-orange-500 font-bold shrink-0 mt-0.5">
                                  <SiTicktick />
                                </span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <Link
                        href="#features"
                        className="text-orange-600 hover:text-orange-700 text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 transition-colors"
                      >
                        View specifications <span>→</span>
                      </Link>
                    </div>

                    <div className="h-64 sm:h-72 md:h-full min-h-[300px] overflow-hidden rounded-2xl bg-gray-100 relative">
                      <img
                        src={imageSrc}
                        alt={item.title}
                        className="h-full w-full object-cover rounded-2xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
