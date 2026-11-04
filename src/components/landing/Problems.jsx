import { motion } from "framer-motion";
import { faIcon } from "../classic/icons";
import Image from "next/image";
import Link from "next/link";

import MainProblem from "../../assets/mainProblem.svg";
import ProblemShape1 from "../../assets/problem.svg";
import ProblemShape2 from "../../assets/Shapes/problem-shape-2.png";
import { RxCross2 } from "react-icons/rx";
import { CgArrowLongRightR } from "react-icons/cg";

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

const Problems = ({ data }) => {
  const problemIcons = ["alert", "clock", "eye", "x", "refresh", "lock"];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-12">
          {/* Left Side: Images & Floating Badges */}
          <div className="w-full xl:w-1/2">
            <div className="relative w-full max-w-lg mx-auto xl:max-w-none">
              {/* Main Image */}
              <div className="relative z-10">
                <Image
                  src={MainProblem}
                  alt="image"
                  className="w-full h-auto rounded-3xl"
                />
              </div>

              {/* Animated Shapes (Using standard Tailwind animations as placeholders for float-bob) */}
              <div className="absolute -top-10 -left-10 z-0 animate-pulse hidden md:block">
                <Image src={ProblemShape2} alt="image" />
              </div>
              <div className="absolute -bottom-12 -right-10 z-10 animate-bounce hidden md:block">
                <Image src={ProblemShape1} alt="image" />
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-8 right-0 md:-right-12 z-20 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-6 flex flex-col items-center gap-4 rounded-xl">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl shadow-lg">
                  <span className="fas fa-check">
                    <RxCross2 />
                  </span>
                </div>
                <h4 className="text-center font-bold text-gray-900 leading-snug">
                  Complicated Integration
                </h4>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-8 -left-4 md:-left-12 z-20 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-8 py-6 flex items-center gap-4 rounded-xl">
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl shadow-lg shrink-0">
                  <span className="fas fa-check">
                    <RxCross2 />
                  </span>
                </div>
                <h4 className="font-bold text-gray-900 leading-snug">
                  Unexpected {data.name} Surcharges
                </h4>
              </div>
            </div>
          </div>

          {/* Right Side: Content & List */}
          <div className="w-full xl:w-1/2 xl:pl-10">
            <div className="flex flex-col gap-10">
              {/* Section Title */}
              <div className="text-left">
                <div className="mb-3">
                  <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">
                    The Operational Reality Check
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">
                  {` You can't scale your brand when you are constantly fighting
                  with your ${data.name.toLowerCase() === "growcord id" ? "ID" : data.name} software.`}
                </h2>
              </div>

              {/* Feature List */}
              <ul className="gap-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={staggerContainer}
                  className="flex flex-col gap-6"
                >
                  {data.before.map((text, i) => {
                    const Icon = faIcon(problemIcons[i % problemIcons.length]);
                    return (
                      <motion.article
                        key={i}
                        variants={fadeInUp}
                        whileHover={{ y: -8, scale: 1.01 }}
                        transition={{ duration: 0.25 }}
                        className={`group relative  transition-colors duration-300 border border-dotted px-3 py-2 rounded-2xl overflow-hidden${
                          i === 3 ? "lg:col-start-2" : ""
                        }`}
                      >
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <div className="flex items-center ">
                          <div className="text-3xl sm:text-4xl text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 origin-left ">
                            <Icon />
                          </div>
                          <h3 className="text-base pl-3 sm:text-lg font-bold  mb-6 leading-relaxed relative z-10">
                            {text}
                          </h3>
                        </div>

                        {data.after[i] && (
                          <div className=" border-slate-700/50 relative z-10 ">
                            <p className="text-xs sm:text-sm font-semibol flex items-start gap-3 leading-relaxed">
                              <CgArrowLongRightR
                                className="shrink-0 mt-0.5 text-green-700"
                                size={24}
                              />
                              <span className="text-blue-900">
                                {data.after[i]}
                              </span>
                            </p>
                          </div>
                        )}
                      </motion.article>
                    );
                  })}
                </motion.div>
              </ul>

              {/* CTA Button */}
              <div>
                <Link
                  href="/about"
                  className="inline-block bg-orange-600 hover:bg-orange-700 rounded-xl text-white font-bold py-4 px-8 text-sm tracking-wider uppercase transition-colors duration-300"
                >
                  EXPLORE More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
