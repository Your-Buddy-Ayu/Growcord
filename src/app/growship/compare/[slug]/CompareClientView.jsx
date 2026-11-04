"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiShield,
} from "react-icons/fi";

const COMPARISON_FAQS = [
  {
    q: "Can I keep my existing courier contracts if I switch from a traditional aggregator?",
    a: "Yes. Unlike standard aggregators that lock you into their proprietary rate cards, GrowShip's Bring-Your-Own-Account (BYOA) model allows you to connect your direct Delhivery or Shiprocket accounts seamlessly. You keep your exact negotiated rates with zero freight markup.",
  },
  {
    q: "How does GrowShip handle split orders compared to traditional platforms?",
    a: "Traditional platforms often mark a multi-box order as 'Delivered' when only the first parcel arrives, creating severe customer support friction. GrowShip assigns independent AWB timelines to every individual parcel, keeping the master order 'Partially Delivered' until every box reaches the buyer.",
  },
  {
    q: "Will switching to GrowShip disrupt our warehouse daily dispatch routine?",
    a: "Not at all. Most scaling teams go live within 24 hours. Because GrowShip integrates directly with your storefront and carrier accounts, your packing desk can continue printing labels and generating manifests without downtime.",
  },
  {
    q: "How do GrowShip's 15-minute tracking syncs help reduce RTO losses?",
    a: "Instead of waiting for delayed batch CSV reports where RTOs are already initiated, GrowShip refreshes tracking events on a 15-minute schedule and surfaces Non-Delivery Reports (NDRs) in one unified action queue with full context for re-attempts.",
  },
];

export default function CompareClientView({ competitor, slug }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [switchEmail, setSwitchEmail] = useState("");
  const [switchSubmitted, setSwitchSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSwitchSubmit = (e) => {
    e.preventDefault();
    if (!switchEmail.trim()) return;
    setSwitchSubmitted(true);
  };

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* ==========================================
          SECTION 1: HERO SECTION (WITH FLOATING ORBS)
      ========================================== */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-24 pb-20 text-center text-white sm:pt-32 sm:pb-28 lg:px-8">
        {/* Animated Background Orbs */}
        <div className="pointer-events-none absolute -left-20 top-0 h-[500px] w-[500px] animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-[#f47721]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[400px] w-[400px] animate-[pulse_8s_ease-in-out_infinite_reverse] rounded-full bg-blue-500/10 blur-[100px]" />

        <div
          className={`relative z-10 mx-auto max-w-4xl transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff9647] backdrop-blur-md transition-transform hover:scale-105">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#f47721]" />
            Platform Comparison • GrowShip vs {competitor.name}
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-.045em] text-white sm:text-6xl lg:text-7xl">
            GrowShip vs.{" "}
            <span className="relative inline-block text-[#ff8e3c] after:absolute after:bottom-2 after:left-0 after:-z-10 after:h-4 after:w-full after:bg-white/10 after:transition-all hover:after:h-full">
              {competitor.name}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {competitor.heroDesc}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#matrix"
              className="group relative overflow-hidden rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#061a34] shadow-[0_0_20px_rgba(244,119,33,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,119,33,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Compare feature matrix
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              href="https://growship.in/start"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg"
            >
              Start 24-hr migration
            </a>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: QUICK VERDICT CARDS (HOVER EFFECTS)
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            The Quick Verdict
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Which shipping workspace fits your current stage?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 ">
          {/* Competitor Card */}
          <div className="group border rounded-2xl border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50 sm:p-10">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 transition-colors group-hover:bg-slate-200">
              {competitor.name}
            </span>
            <h3 className="mt-4 text-2xl font-black text-[#071d3a] transition-colors group-hover:text-blue-900">
              Choose {competitor.name} if...
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {competitor.quickVerdict.competitorWhen}
            </p>
            <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors group-hover:border-slate-200 group-hover:bg-slate-100/50">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Primary Limitation
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-700">
                {competitor.competitorWeakness}
              </p>
            </div>
          </div>

          {/* GrowShip Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-[#061a34] p-8 text-white shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,26,52,0.5)] sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#f47721]/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative z-10">
              <span className="inline-block rounded-full bg-[#f47721] px-3 py-1 text-xs font-bold text-[#061a34] shadow-[0_0_15px_rgba(244,119,33,0.4)]">
                GrowShip Command Centre
              </span>
              <h3 className="mt-4 text-2xl font-black text-white">
                Choose GrowShip if...
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                {competitor.quickVerdict.growshipWhen}
              </p>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all group-hover:border-white/20 group-hover:bg-white/10">
                <p className="text-xs font-bold uppercase tracking-wider text-[#ff9647]">
                  GrowShip Core Advantage
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {competitor.growshipEdge}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: SIDE-BY-SIDE FEATURE MATRIX (HOVER HIGHLIGHTS)
      ========================================== */}
      <section
        id="matrix"
        className="border-y border-slate-200 bg-white px-5 py-20 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              Feature Matrix
            </p>
            <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
              GrowShip vs. {competitor.name} capability breakdown.
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-[#061a34] text-xs font-bold uppercase tracking-wider text-white">
                  <tr>
                    <th className="py-5 pl-6 pr-4 sm:pl-8">
                      Feature / Capability
                    </th>
                    <th className="px-4 py-5 text-slate-300">
                      {competitor.name}
                    </th>
                    <th className="py-5 pl-4 pr-6 text-[#ff9647] sm:pr-8">
                      GrowShip Command Centre
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {competitor.matrix.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`group transition-all duration-300 hover:bg-orange-50/40 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/60"}`}
                    >
                      <td className="py-5 pl-6 pr-4 font-black text-[#071d3a] transition-colors group-hover:text-[#e8681b] sm:pl-8">
                        {row.feature}
                      </td>
                      <td className="px-4 py-5 text-slate-500 transition-colors group-hover:text-slate-400">
                        {row.competitor}
                      </td>
                      <td className="relative py-5 pl-4 pr-6 font-semibold text-[#071d3a] sm:pr-8">
                        {/* Subtle background highlight for GrowShip column on hover */}
                        <div className="absolute inset-0 -z-10 bg-orange-50/0 transition-colors duration-300 group-hover:bg-orange-50/50" />
                        <span className="inline-flex items-start gap-2">
                          <FiCheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-[#f47721] transition-transform duration-300 group-hover:scale-110"
                          />
                          <span>{row.growship}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: MIGRATION GUARANTEE (PULSING CTA)
      ========================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#071d3a] p-8 text-center text-white shadow-2xl sm:p-14 lg:p-20">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-[#f47721]/10 blur-3xl" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f47721]/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#ff9647]">
              <FiShield size={16} className="animate-pulse" /> Zero-Downtime
              Migration
            </span>
            <h2 className="mt-6 text-balance text-3xl font-black sm:text-5xl">
              Switch from {competitor.name} in 24 hours without pausing
              dispatch.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Your warehouse operations cannot afford downtime. Link your
              existing storefront and carrier credentials to GrowShip and start
              printing labels immediately.
            </p>

            {switchSubmitted ? (
              <div className="mx-auto mt-10 max-w-md animate-[fade-in-up_0.5s_ease-out] rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-300 backdrop-blur-sm">
                <FiCheckCircle size={32} className="mx-auto text-emerald-400" />
                <p className="mt-3 text-lg font-bold text-white">
                  Migration request logged!
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Our onboarding engineer will contact{" "}
                  <span className="font-bold text-emerald-400">
                    {switchEmail}
                  </span>{" "}
                  to coordinate your {competitor.name} transition.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSwitchSubmit}
                className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={switchEmail}
                  onChange={(e) => setSwitchEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 px-5 py-4 text-sm text-white shadow-inner outline-none backdrop-blur-sm transition-all placeholder:text-slate-400 focus:border-[#f47721] focus:bg-white/20 focus:ring-2 focus:ring-[#f47721]/20"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-7 py-4 text-sm font-bold text-[#061a34] shadow-[0_0_15px_rgba(244,119,33,0.2)] transition-all hover:scale-105 hover:bg-[#ff923f] hover:shadow-[0_0_25px_rgba(244,119,33,0.4)] active:scale-95"
                >
                  Request Migration{" "}
                  <FiArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 5: FAQs (SMOOTH ACCORDION)
      ========================================== */}
      <section className="mx-auto max-w-4xl px-5 pb-20 sm:pb-28 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Switching FAQs
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#071d3a] sm:text-4xl">
            Common questions about switching from {competitor.name}.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-100 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50 sm:p-6">
          {COMPARISON_FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="group flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-5 text-left transition-colors hover:bg-slate-50"
                >
                  <span
                    className={`text-base font-bold transition-colors sm:text-lg ${isOpen ? "text-[#f47721]" : "text-[#071d3a] group-hover:text-[#e8681b]"}`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#f47721] text-white shadow-md"
                        : "bg-slate-100 text-slate-500 group-hover:bg-orange-50 group-hover:text-[#f47721]"
                    }`}
                  >
                    <FiChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-6 pt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          SECTION 6: DARK PREMIUM FOOTER CTA
      ========================================== */}
      <section className="px-5 pb-20 pt-8 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#061a34] px-6 py-14 shadow-2xl sm:rounded-[3rem] sm:px-16 sm:py-20 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#f47721]">
              Ready for a clearer workflow?
            </p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-[1.1] tracking-[-.04em] text-white sm:text-4xl lg:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:mt-0 lg:justify-end">
            <a
              href="https://growship.in/start"
              className="group relative overflow-hidden rounded-xl bg-[#f47721] px-8 py-5 text-sm font-bold text-[#061a34] shadow-[0_0_20px_rgba(244,119,33,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(244,119,33,0.5)] sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start shipping
                <FiArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-white/30 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <Link
              href="/growship/pricing"
              className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg sm:w-auto"
            >
              View pricing model
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
