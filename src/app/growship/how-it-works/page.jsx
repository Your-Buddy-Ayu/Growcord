"use client";

import howItWorks1 from "../../../assets/howItWorks1.jpg";
import howItWorks2 from "../../../assets/howItWorks2.jpg";
import howItWorks3 from "../../../assets/howItWorks3.jpg";

import {
  FiArrowRight,
  FiBox,
  FiPrinter,
  FiShield,
  FiCheck,
  FiZap,
  FiClock,
  FiTrendingUp,
} from "react-icons/fi";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Sync your orders seamlessly",
      desc: "Stop manually entering customer details. Bring all your orders into one unified dashboard with pre-filled addresses, item weights, and parcel dimensions ready to go.",
      icon: FiBox,
      color: "text-blue-500",
      bg: "bg-blue-50",
      bullets: [
        "Automated order imports",
        "Smart address validation",
        "Pre-filled weight & dimensions",
      ],
      imgPlaceholder:
        "bg-gradient-to-br from-blue-50 to-slate-100 border-blue-100",
      image: howItWorks1,
    },
    {
      num: "02",
      title: "Generate labels & book pickups",
      desc: "Create shipping labels, print bulk manifests, and schedule carrier pickups in a single, smooth flow. Compare rates live and choose the best courier for the job.",
      icon: FiPrinter,
      color: "text-[#f47721]",
      bg: "bg-orange-50",
      bullets: [
        "One-click label generation",
        "Bulk manifest printing",
        "Live carrier rate comparison",
      ],
      imgPlaceholder:
        "bg-gradient-to-bl from-orange-50 to-slate-100 border-orange-100",
      image: howItWorks2,
    },
    {
      num: "03",
      title: "Track & resolve exceptions proactively",
      desc: "Monitor real-time parcel tracking and manage NDRs before they turn into RTOs. Handle returns without the usual courier chaos, all from one clear view.",
      icon: FiShield,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      bullets: [
        "Real-time unified tracking",
        "Early NDR alerts",
        "Simplified return management",
      ],
      imgPlaceholder:
        "bg-gradient-to-tr from-emerald-50 to-slate-100 border-emerald-100",
      image: howItWorks3,
    },
  ];

  const advantages = [
    {
      icon: FiZap,
      title: "Lightning Fast Dispatch",
      desc: "Process hundreds of orders in minutes, not hours. Bulk label printing and automated courier assignment.",
    },
    {
      icon: FiClock,
      title: "Real-time Updates",
      desc: "Keep your customers informed with live tracking updates and SMS notifications at every step.",
    },
    {
      icon: FiTrendingUp,
      title: "Lower RTO Rates",
      desc: "Identify problematic addresses and high-risk orders before dispatch to minimize return losses.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* Page Hero */}
      <section className="mx-auto max-w-4xl px-5 pt-24 pb-16 text-center sm:pt-32 sm:pb-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
          Workflow deep dive
        </p>
        <h1 className="mt-5 text-balance text-4xl font-black leading-[1.1] tracking-[-.04em] text-[#071d3a] sm:mt-6 sm:text-6xl lg:text-7xl">
          From checkout to doorstep. <br className="hidden sm:block" />
          Here is how we move it.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          We have taken the complexity out of e-commerce logistics. See exactly
          how GrowShip streamlines your daily dispatch operations in three
          simple steps.
        </p>
      </section>

      {/* Advantage Grid Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">
        <div className="rounded-3xl bg-[#071d3a] px-6 py-16 text-center shadow-2xl sm:rounded-[2.5rem] sm:p-16">
          <h2 className="mb-10 text-3xl font-black text-white sm:mb-12 sm:text-4xl">
            The GrowShip Advantage
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:bg-white/10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#f47721]/20">
                  <adv.icon size={28} className="text-[#f47721]" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {adv.title}
                </h3>
                <p className="leading-relaxed text-sm text-slate-300">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zig-Zag Steps Section - Using margins to completely separate each block */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div>
          {steps.map((step, index) => {
            const isEven = index % 2 !== 0;
            return (
              <div
                key={step.num}
                className="mb-28 grid grid-cols-1 gap-12 lg:mb-40 lg:grid-cols-2 lg:items-center lg:gap-20 last:mb-0"
              >
                {/* Content Side */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="mb-8 flex items-center gap-5">
                    <span className="text-5xl font-black text-slate-200 sm:text-6xl">
                      {step.num}
                    </span>
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${step.bg}`}
                    >
                      <step.icon size={28} className={step.color} />
                    </div>
                  </div>

                  <h2 className="text-3xl font-black tracking-tight text-[#071d3a] sm:text-4xl lg:text-5xl">
                    {step.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:mt-6">
                    {step.desc}
                  </p>

                  <ul className="mt-10 space-y-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
                    {step.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-4 text-sm font-semibold text-slate-700 sm:text-base"
                      >
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f47721]">
                          <FiCheck size={14} strokeWidth={4} />
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual/Image Side */}
                <div
                  className={`relative h-[350px] w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/50 sm:h-[450px] lg:h-[550px] lg:rounded-[3rem] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={step.image.src}
                    alt={step.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#061a34]/20 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detail Text Section */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        <h2 className="mb-4 text-3xl font-black text-[#071d3a] sm:mb-6 sm:text-4xl">
          Ready to stop bouncing between tabs?
        </h2>
        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
          Managing multiple courier logins, hunting for AWB numbers, and dealing
          with scattered customer complaints is exhausting. GrowShip centralizes
          everything. It's time to give your team the workspace they deserve and
          take back control of your dispatch operations.
        </p>
      </section>

      {/* CTA Section - Converted to Dark Premium Style */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Take control of your logistics
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-5 sm:text-4xl lg:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <a
              href="https://growship.in/start"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#ff8a3d] sm:w-auto shadow-lg shadow-orange-500/20"
            >
              Start shipping
              <FiArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
