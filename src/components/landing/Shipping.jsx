import React from "react";
import { motion } from "framer-motion";
import { LuCheck } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { SiTransportforlondon } from "react-icons/si";
import { GiWireframeGlobe, GiRoad, GiRapidshareArrow } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { TbBrandMonday, TbSailboat } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";

import { IoAirplaneOutline, IoCartOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";

const deliveryData = {
  head: {
    section: "Delivery Options",
    title: "Delivery Options",
    heading1: "Choose from our versatile ",
    highlight: "multi-tier ",
    heading2: "logistics framework.",
  },
  cardData: [
    {
      id: "Speed",
      title: "Speed Based",
      icon: <BsSpeedometer />,
      points: [
        {
          icon: <IoIosFlash />,
          title: "Same-Day / Instant Delivery",
          desc: "Delivers orders within hours or on the same day in major cities, typically powered by local delivery partners like Shadowfax, Porter, or Dunzo.",
        },
        {
          icon: <TbBrandMonday />,
          title: "Next-Day Delivery",
          desc: "Guarantees delivery within 24 hours, powered by our strategic fulfillment network warehousing inventory closer to your customers.",
        },
        {
          icon: <FaTruckFast />,
          title: "Express Delivery",
          desc: "Accelerated express transit providing nationwide doorstep fulfillment typically within 1 to 2 business days.",
        },
        {
          icon: <IoAirplaneOutline />,
          title: "Standard / Economy Shipping",
          desc: "The most cost-effective shipping mode for non-urgent parcels, generally taking 3 to 5 business days.",
        },
      ],
    },
    {
      id: "Transit",
      title: "Transit Modes",
      icon: <SiTransportforlondon />,
      points: [
        {
          icon: <SlPlane />,
          title: "Air Shipping",
          desc: "The fastest transport option, best suited for lightweight, high-value, perishable, or time-critical shipments.",
        },
        {
          icon: <GiRoad />,
          title: "Surface / Ground Shipping",
          desc: "Dependable line-haul road transport for heavy or bulky freight. Slower than air freight, but significantly more economical.",
        },
        {
          icon: <TbSailboat />,
          title: "Sea / Ocean Freight",
          desc: "Cost-efficient containerized bulk shipping and FCL/LCL cargo transit designed for international or large-scale movements.",
        },
      ],
    },
    {
      id: "Specialized",
      title: "Specialized Services",
      icon: <GiWireframeGlobe />,
      points: [
        {
          icon: <IoCartOutline />,
          title: "Hyperlocal Delivery",
          desc: "Short-distance on-demand dispatches within the same city for groceries, essential goods, or rapid urgent orders.",
        },
        {
          icon: <GiRapidshareArrow />,
          title: "International Shipping",
          desc: "Seamless cross-border logistics to over 220 countries and territories with integrated customs clearance and tracking.",
        },
        {
          icon: <FaTruckLoading />,
          title: "B2B / Heavy Cargo Freight",
          desc: "Multimodal freight handling for heavy palletized consignments and commercial loads exceeding standard courier limits.",
        },
      ],
    },
  ],
};

const Shipping = () => {
  const renderPointCard = (point, index) => {
    if (
      typeof point === "object" &&
      point !== null &&
      (point.title || point.desc)
    ) {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.35, delay: index * 0.05 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="group bg-white rounded-2xl p-5 sm:p-6 border-2 border-gray-100 hover:border-orange-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Icon Pill */}
            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 border border-orange-200/60 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-500 group-hover:text-white group-hover:shadow-md group-hover:shadow-orange-500/25 transition-all duration-300">
              {point.icon || <LuCheck />}
            </div>

            {/* Title */}
            <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
              {point.title}
            </h4>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal">
              {point.desc}
            </p>
          </div>

          {/* Bottom SLA Tag */}
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-orange-600">
            <span>Guaranteed SLA</span>
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </motion.div>
      );
    }

    // Fallback for simple string bullet point
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.04 }}
        whileHover={{ x: 3 }}
        className="flex items-start gap-3 p-3.5 rounded-xl bg-white hover:bg-orange-50/40 border border-gray-100 transition-colors"
      >
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 mt-0.5">
          <LuCheck className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
          {typeof point === "string" ? point : JSON.stringify(point)}
        </p>
      </motion.div>
    );
  };

  return (
    <section className="rounded-2xl py-16 md:py-20 lg:py-28 flex justify-center">
      <div className="container max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 md:mb-14 max-w-3xl"
        >
          <div className="mb-2.5 inline-flex rounded-full pr-3.75 py-1.25">
            <span className="text-orange-500 text-xs font-bold tracking-tight uppercase md:text-sm">
              {deliveryData.head.title}
            </span>
          </div>
          <h2 className="text-orange-950 text-3xl leading-tight font-medium md:text-[40px]">
            {deliveryData.head.heading1}
            <span className="text-orange-500 font-medium">
              {deliveryData.head.highlight}
            </span>
            {deliveryData.head.heading2}
          </h2>
        </motion.div>

        {/* Side-by-side Columns: each category forms a vertical stack of boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {deliveryData.cardData.map((category, colIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: colIdx * 0.1 }}
              className="flex flex-col rounded-3xl bg-gray-50/80 p-5 sm:p-6 border border-gray-200/80 shadow-xs"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 pb-5 mb-5 border-b border-gray-200">
                <span className="bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl flex size-10 items-center justify-center rounded-xl shadow-sm shadow-orange-500/30 shrink-0">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {category.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {category.points.length} delivery tiers
                  </p>
                </div>
              </div>

              {/* Vertically Aligned Boxes */}
              <div className="flex flex-col space-y-4">
                {category.points.map((pt, idx) => renderPointCard(pt, idx))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shipping;
