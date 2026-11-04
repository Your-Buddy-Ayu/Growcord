"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ServicesTwoShape2 from "@/assets/Shapes/services-two-shape-2.png";
import ServicesTwoShape1 from "@/assets/Shapes/services-two-shape-1.png";

export default function OurServices({ p }) {
  return (
    <>
      {/* Services Two Section */}
      <section
        className="relative py-20 lg:py-[120px] bg-white z-[1] overflow-hidden"
        id="services"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-start">
            {/* Left Column (col-lg-4) */}
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-4 z-10 lg:pr-2"
            >
              <div className="text-left">
                <div className="mb-2">
                  <span className="inline-block text-orange-600 font-bold text-[16px] leading-[16px] uppercase tracking-[0.016em]">
                    OUR SERVICES
                  </span>
                </div>
                <h2 className="text-[#1d1d1d] text-4xl sm:text-[50px] font-bold leading-[1.08] sm:leading-[50px] tracking-tight mt-4 mb-5">
                  Popular <br />
                  {p.name} <br />
                  Services
                </h2>
              </div>

              <p className="text-[#707070] text-base leading-[30px] font-normal mb-8 lg:mb-10 max-w-sm">
                At Growcord, we take pride in offering a range of comprehensive
                services designed to elevate your experience to new heights.
              </p>

              <div className="mt-6 lg:mt-[50px]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <Link
                    href="/services"
                    className="inline-block rounded-xl bg-orange-600 hover:bg-[#1d1d1d] text-white font-bold text-[14px] uppercase tracking-[0.016em] py-[15px] px-[50px] transition-colors duration-300 shadow-md hover:shadow-xl"
                  >
                    EXPLORE MORE
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column (col-lg-8) */}
            <div className="lg:col-span-8 relative lg:ml-7 mt-8 lg:mt-0">
              {/* Airplane Dotted Path Background Shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden lg:block absolute left-0 top-[40px] z-0 pointer-events-none float-bob-y"
              >
                <Image
                  src={ServicesTwoShape2}
                  alt="flight trajectory"
                  priority
                  className="w-auto h-auto object-contain select-none"
                />
              </motion.div>

              {/* 3-Column Grid for Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.09,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px] relative z-10"
              >
                {/* Empty 1st Grid Cell for airplane path */}
                <div className="hidden lg:block pointer-events-none min-h-[220px]" />

                {/* Service Cards */}
                {p.servicesData.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45 }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-[#f4f4f4] text-center pt-[50px] px-[30px] pb-[46px] min-h-[220px] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer z-[1] rounded-lg"
                  >
                    {/* Hover Red Fill Animation */}
                    <div className="absolute inset-0 bg-orange-600 -z-[1] opacity-0 group-hover:opacity-100 transition-all duration-400 ease-linear transform [transform:scaleX(0.7)_rotateX(20deg)] group-hover:[transform:scaleX(1)_rotateX(0deg)] pointer-events-none" />

                    {/* Inner Watermark Shape on Hover */}
                    <div className="absolute top-0 right-0 -z-[1] opacity-0 group-hover:opacity-100 transition-all duration-400 ease-linear transform [transform:scaleY(0.7)_rotateY(20deg)] group-hover:[transform:scaleY(1)_rotateY(0deg)] pointer-events-none">
                      <Image
                        src={ServicesTwoShape1}
                        alt="card-shape"
                        className="w-auto h-auto object-cover"
                      />
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <span
                        className={
                          "text-[48px] text-orange-600 group-hover:text-white transition-colors duration-500 inline-block"
                        }
                      >
                        {service.icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-[24px] font-bold text-[#1d1d1d] group-hover:text-white leading-[34px] tracking-[-0.02em] transition-colors duration-500 mt-[5px]">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {service.title}
                    </h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Two End */}
    </>
  );
}
