"use client";

import Pickup from "../../../assets/Intelligence.jpg";

import {
  FiArrowRight,
  FiBarChart2,
  FiTrendingDown,
  FiMap,
  FiClock,
  FiActivity,
  FiShield,
  FiCheckCircle,
  FiPieChart,
} from "react-icons/fi";

export default function CourierIntelligencePage() {
  const metrics = [
    {
      icon: FiClock,
      title: "Real Delivery Speeds",
      desc: "Averages lie. We calculate the true median delivery time for every courier across different pin codes, so you know exactly what to expect.",
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      icon: FiTrendingDown,
      title: "RTO Pattern Detection",
      desc: "Spot which regions or specific carriers are causing high Return-to-Origin rates. Catch the trend before it eats into your monthly profit margins.",
      color: "text-rose-500",
      bg: "bg-rose-50",
    },
    {
      icon: FiActivity,
      title: "NDR Heatmaps",
      desc: "Identify where Non-Delivery Reports are spiking. Are riders faking attempts in specific zones? The data will tell you immediately.",
      color: "text-[#f47721]",
      bg: "bg-orange-50",
    },
    {
      icon: FiShield,
      title: "Carrier SLA Tracking",
      desc: "Hold your logistics partners accountable. Track if they are actually meeting the delivery timelines they promised in their contracts.",
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-28 pb-20 text-center sm:pt-36 sm:pb-28 lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,52,0)_0%,#061a34_100%)] opacity-80" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mx-auto mb-6 flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
            <FiBarChart2 size={30} className="text-[#f47721]" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
            Courier Intelligence
          </p>
          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-6 sm:text-6xl lg:text-7xl">
            Stop guessing. Start shipping with hard data.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Choosing a courier based on habit or 'gut feeling' is costing you
            money. GrowShip transforms your raw tracking events into clear,
            actionable insights so you can route every parcel flawlessly.
          </p>
        </div>
      </section>

      {/* Philosophy / Intro Section */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-24">
        <h2 className="mb-5 text-3xl font-black text-[#071d3a] sm:mb-6 sm:text-4xl">
          Data is your unfair advantage.
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-slate-600">
          In e-commerce, the difference between a profitable month and a loss
          often comes down to logistics efficiency. If you don't know which
          courier is failing in which city, you can't fix it. Our intelligence
          engine analyzes every single tracking ping to give you the exact truth
          about your supply chain.
        </p>
      </section>

      {/* Simulated Analytics Dashboard UI (Adds visual length and premium feel) */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:pb-24 lg:px-8">
        <div className="rounded-3xl bg-[#0b294d] p-6 shadow-2xl sm:rounded-[2.5rem] sm:p-12 lg:p-16">
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#f47721]">
                Live Insights Preview
              </p>
              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Carrier Speed vs. Cost
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Illustrative data based on 90-day rolling averages.
              </p>
            </div>
            <button className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20">
              <FiPieChart size={16} /> View Full Report
            </button>
          </div>

          <div className="space-y-8 rounded-2xl bg-[#061a34]/50 p-6 sm:p-8 border border-white/5">
            {/* Fake Chart Bars */}
            {[
              {
                name: "Express Air Service",
                days: "1.8 Days",
                width: "w-[85%]",
                color: "bg-[#f47721]",
                rto: "4.2%",
              },
              {
                name: "Priority Surface",
                days: "3.2 Days",
                width: "w-[65%]",
                color: "bg-blue-400",
                rto: "7.8%",
              },
              {
                name: "Standard Ground",
                days: "5.4 Days",
                width: "w-[40%]",
                color: "bg-slate-400",
                rto: "12.1%",
              },
            ].map((chart, i) => (
              <div key={i} className="relative">
                <div className="mb-3 flex justify-between text-sm">
                  <span className="font-bold text-white">{chart.name}</span>
                  <span className="text-slate-400">
                    Median:{" "}
                    <span className="font-bold text-white">{chart.days}</span> |
                    RTO: {chart.rto}
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${chart.width} ${chart.color} shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-1000 ease-out`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/5 p-5 border border-white/5">
              <p className="text-sm text-slate-400">Analyzed Shipments</p>
              <p className="mt-1 text-2xl font-black text-white">124,592</p>
            </div>
            <div className="rounded-xl bg-white/5 p-5 border border-white/5">
              <p className="text-sm text-slate-400">Data Points Processed</p>
              <p className="mt-1 text-2xl font-black text-white">1.8M+</p>
            </div>
            <div className="rounded-xl bg-white/5 p-5 border border-white/5">
              <p className="text-sm text-slate-400">Optimisation Potential</p>
              <p className="mt-1 text-2xl font-black text-emerald-400">High</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Metrics Section */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:py-20 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl font-black text-[#071d3a] sm:text-4xl">
            Metrics that actually matter.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We bypass vanity metrics and focus strictly on operational
            realities. This is the exact intelligence your dispatch team needs
            daily.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/40 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
            >
              <div>
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bg}`}
                >
                  <item.icon size={28} className={item.color} />
                </div>
                <h3 className="mb-3 text-2xl font-black text-[#071d3a]">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why it works / Deep dive text */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-black text-[#071d3a] sm:text-4xl">
              End the blind spots in your supply chain.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              When a parcel leaves your warehouse, you shouldn't have to cross
              your fingers and hope for the best. GrowShip’s intelligence engine
              acts like a high-powered microscope for your outbound logistics.
            </p>
            <ul className="mt-8 space-y-5">
              {[
                "Allocate couriers intelligently based on historical success rates.",
                "Verify courier billing against actual delivery performances.",
                "Reduce customer anxiety by catching delays before buyers complain.",
              ].map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-sm font-semibold text-slate-700 sm:text-base"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    <FiCheckCircle size={15} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            {/* Abstract visual for data */}
            <div className="relative h-[300px] w-full max-w-md overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#f47721] to-[#ff9647] shadow-2xl sm:h-[400px]">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <img src={Pickup.src} alt="Picking up The Orders." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Premium CTA Section */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Unlock Your Data
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:mt-5 sm:text-4xl lg:text-5xl">
              Ship smarter, starting today.
            </h2>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <a
              href="https://growship.in/start"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#f47721] px-8 py-5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-[#ff8a3d] sm:w-auto"
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
