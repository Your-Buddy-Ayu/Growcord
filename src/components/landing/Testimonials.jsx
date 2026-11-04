"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { testimonialsAPI } from "@/lib/api";
import SectionCTA from "./SectionCTA";

// Helper to safely extract string URL from either string or Next image object
const getSrc = (img, fallback = "") => {
  if (!img) return fallback || "";
  if (typeof img === "object" && img.src) return img.src;
  if (typeof img === "string") return img;
  return fallback || "";
};

export const DUMMY_TESTIMONIALS = [
  {
    id: "1",
    _id: "1",
    name: "Vikram Malhotra",
    role: "Managing Director",
    company: "Prestige Horizon Realty",
    location: "Mumbai, Maharashtra",
    category: "Real Estate",
    gender: "male",
    quote:
      "Growcord unified our commercial operations from dispatch tracking to CRM workflows. Our site-visit conversions jumped by 35% and fulfillment turnaround dropped from days to mere hours.",
    result: "+35% Conversion Rate",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageId: "testimonial-vikram-malhotra",
    avatarImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    avatarImageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "2",
    _id: "2",
    name: "Ananya Deshmukh",
    role: "Head of Omnichannel Growth",
    company: "UrbanNest Living",
    location: "Bengaluru, Karnataka",
    category: "Omnichannel",
    gender: "female",
    quote:
      "Managing channel partners and distributed logistics was chaotic before Growcord. Now, inventory visibility is real-time and customer escalations have decreased by over 50%.",
    result: "-52% Escalations",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    imageId: "testimonial-ananya-deshmukh",
    avatarImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    avatarImageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "3",
    _id: "3",
    name: "Rohan Singhania",
    role: "VP of Supply Chain & Ops",
    company: "Apex Retail & Logistics",
    location: "Delhi NCR, India",
    category: "Supply Chain",
    gender: "male",
    quote:
      "The multi-carrier shipping routing and automated reconciliation saved us over 120 hours of manual reporting every single month. It has become the backbone of our fulfillment.",
    result: "120+ Hrs Saved / Mo",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    imageId: "testimonial-rohan-singhania",
    avatarImage:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    avatarImageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: "4",
    _id: "4",
    name: "Pooja Kulkarni",
    role: "Chief Operating Officer",
    company: "Kulkarni Infra Projects",
    location: "Pune, Maharashtra",
    category: "Infrastructure",
    gender: "female",
    quote:
      "With Growcord, our sales cycles became transparent. Real-time lead tracking and partner payout automation enabled our team to close high-ticket bookings 3x faster.",
    result: "3x Faster Bookings",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    imageUrl:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    imageId: "testimonial-pooja-kulkarni",
    avatarImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    avatarImageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
];

const Testimonials = ({
  testimonials: propTestimonials,
  title = "What Our Clients Say",
  cta,
  selectedIds,
}) => {
  const [dataTestimonials, setDataTestimonials] = useState(DUMMY_TESTIMONIALS);
  const [loading, setLoading] = useState(!propTestimonials);

  useEffect(() => {
    if (propTestimonials && propTestimonials.length > 0) {
      setDataTestimonials(propTestimonials);
      setLoading(false);
    } else {
      loadTestimonials();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propTestimonials, JSON.stringify(selectedIds)]);

  const loadTestimonials = async () => {
    try {
      const data = await testimonialsAPI.getAll();
      if (data && data.length > 0) {
        if (selectedIds && selectedIds.length > 0) {
          const filtered = data.filter((t) => {
            const id = t.id || t._id;
            return selectedIds.includes(id);
          });

          if (filtered.length > 0) {
            setDataTestimonials(filtered);
          } else {
            setDataTestimonials(data);
          }
        } else {
          setDataTestimonials(data);
        }
      } else {
        setDataTestimonials(DUMMY_TESTIMONIALS);
      }
    } catch (error) {
      console.error("Error loading testimonials:", error);
      setDataTestimonials(DUMMY_TESTIMONIALS);
    } finally {
      setLoading(false);
    }
  };

  const displayTestimonials =
    propTestimonials && propTestimonials.length > 0
      ? propTestimonials
      : dataTestimonials && dataTestimonials.length > 0
        ? dataTestimonials
        : DUMMY_TESTIMONIALS;

  if (loading && !displayTestimonials.length) return null;

  return (
    <section className="bg-white py-20 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="border border-orange-200 mb-3.5 inline-flex rounded-full px-4 py-1 bg-gray-50/70">
              <span className="text-orange-600 text-xs font-semibold tracking-wider uppercase md:text-sm">
                Case Studies & Proof
              </span>
            </div>
            <h2 className="text-gray-900 text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] font-bold tracking-tight mb-4 max-w-xl">
              {title ? (
                title
              ) : (
                <>
                  Impactful
                  <span className="text-gray-500 font-medium">
                    case studies
                  </span>
                  from our clients
                </>
              )}
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              Discover how fast-growing businesses leverage our unified platform
              to eliminate operational friction, automate fulfillment, and
              accelerate commercial revenue.
            </p>

            {cta && (
              <div className="mt-8">
                <SectionCTA cta={cta} />
              </div>
            )}
          </motion.div>

          {/* Right Column: Single-slide Testimonial Swiper */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group/slider relative w-full lg:col-span-7"
          >
            <div className="swiper testimonialSwiper overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                className="testimonialSwiper overflow-hidden "
                loop={displayTestimonials.length > 1}
                speed={600}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".testimonial-next",
                  prevEl: ".testimonial-prev",
                }}
              >
                {displayTestimonials.map((item, idx) => {
                  const cardImage = getSrc(item.image, item.imageUrl);
                  const avatarImg = getSrc(
                    item.avatarImage,
                    item.avatarImageUrl,
                  );

                  return (
                    <SwiperSlide
                      key={item.id || item._id || idx}
                      className="h-auto!"
                    >
                      <div className="group block w-full text-start">
                        {/* Card Image Area with floating badges */}
                        <div className="relative mb-4 aspect-[8/4] overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100 shadow-sm">
                          {cardImage ? (
                            <img
                              src={cardImage}
                              alt={item.name || "Testimonial client"}
                              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              loading="lazy"
                            />
                          ) : (
                            <div className="h-full w-full bg-linear-to-br from-gray-800 to-gray-900" />
                          )}

                          {/* Dark gradient overlay for badge readability */}
                          <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-transparent to-black/35" />

                          {/* Floating Top Pills */}
                          <div className="absolute top-4 left-4 z-10 flex flex-wrap items-center justify-between gap-2">
                            <div className="flex items-center gap-2">
                              {item.result && (
                                <span className="bg-[#22c55e] text-white inline-flex rounded-full px-3 py-1 text-xs sm:text-sm font-semibold shadow-sm">
                                  {item.result}
                                </span>
                              )}
                            </div>
                            {(item.location || item.role) && (
                              <span className="hidden sm:inline-flex rounded-full border border-white/40 bg-black/30 backdrop-blur-md px-3 py-1 text-xs sm:text-sm font-normal text-white">
                                {item.location || item.role}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quote Text */}
                        <h3 className="text-gray-900 text-lg sm:text-xl font-bold leading-snug transition-colors duration-300 mb-3">
                          &ldquo;{item.quote}&rdquo;
                        </h3>

                        {/* Author Meta Details */}
                        <div className="flex items-center gap-3 pt-1">
                          {avatarImg && (
                            <img
                              src={avatarImg}
                              alt={item.name}
                              className="size-11 rounded-full object-cover border-2 border-orange-500/20 shrink-0"
                              loading="lazy"
                            />
                          )}
                          <div>
                            <div className="text-gray-900 font-bold text-sm sm:text-base">
                              {item.name}
                            </div>
                            <div className="text-gray-500 text-xs sm:text-sm">
                              {item.role}{" "}
                              {item.company ? `• ${item.company}` : ""}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            {/* Prev / Next Circular Arrows matching Mivora design */}
            <button
              type="button"
              className="testimonial-prev text-gray-700 hover:text-gray-950 absolute top-[34%] -left-3 sm:-left-5 z-20 flex size-12 sm:size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:pointer-events-none"
              aria-label="Previous slide"
            >
              <span className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-dashed border-gray-300">
                <HiArrowLeft className="size-5" />
              </span>
            </button>

            <button
              type="button"
              className="testimonial-next text-gray-700 hover:text-gray-950 absolute top-[34%] -right-3 sm:-right-5 z-20 flex size-12 sm:size-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:pointer-events-none"
              aria-label="Next slide"
            >
              <span className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-dashed border-gray-300">
                <HiArrowRight className="size-5" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
