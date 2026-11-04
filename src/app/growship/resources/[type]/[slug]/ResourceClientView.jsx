"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiChevronDown,
  FiChevronRight,
  FiClock,
} from "react-icons/fi";

export default function ResourceClientView({
  type,
  slug,
  resource,
  allResourcesList = [],
}) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#071d3a] selection:bg-orange-200">
      {/* HEADER HERO */}
      <section className="relative overflow-hidden bg-[#061a34] px-5 pt-24 pb-20 text-white sm:pt-32 sm:pb-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,119,33,0.18),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400"
          >
            <Link href="/growship" className="transition hover:text-white">
              GrowShip
            </Link>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="capitalize text-slate-300">{type}</span>
            <FiChevronRight size={14} className="text-slate-600" />
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-[#f47721]">
              {resource.title}
            </span>
          </nav>

          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-[#ff9647]">
              {resource.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-300">
              <FiClock size={13} /> {resource.readTime || "5 min read"}
            </span>
          </div>

          <h1 className="mt-5 text-balance text-4xl font-black leading-[1.05] tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">
            {resource.title}
          </h1>

          <p className="mt-6 text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            {resource.heroExcerpt || resource.seoDesc}
          </p>
        </div>
      </section>

      {/* ARTICLE CONTENT BODY */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24 lg:px-8">
        <div className="space-y-12 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-14">
          {resource.sections?.map((sec, idx) => (
            <div key={sec.heading} className="space-y-4">
              <h2 className="text-2xl font-black text-[#071d3a] sm:text-3xl">
                {idx + 1}. {sec.heading}
              </h2>
              {sec.paragraphs?.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-base leading-relaxed text-slate-600"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* FAQS SECTION */}
        {resource.faqs && resource.faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-center text-3xl font-black text-[#071d3a]">
              Frequently Asked Questions
            </h2>
            <div className="mt-10 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
              {resource.faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left"
                    >
                      <span className="text-base font-bold text-[#071d3a] sm:text-lg">
                        {item.q}
                      </span>
                      <FiChevronDown
                        size={18}
                        className={`shrink-0 transition-transform ${
                          isOpen
                            ? "rotate-180 text-[#f47721]"
                            : "text-slate-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="px-4 pb-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {item.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* RESOURCE DIRECTORY HUB */}
      <section className="border-t border-slate-200 bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Knowledge Base & SOPs
          </p>
          <h2 className="mt-2 text-2xl font-black text-[#071d3a] sm:text-3xl">
            Explore more logistics glossary terms & playbooks
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allResourcesList.map((item) => {
              const isCurrent = item.type === type && item.slug === slug;
              return (
                <Link
                  key={`${item.type}-${item.slug}`}
                  href={`/growship/resources/${item.type}/${item.slug}`}
                  className={`flex items-center justify-between rounded-2xl border p-5 transition ${
                    isCurrent
                      ? "border-[#f47721] bg-orange-50/60 text-[#071d3a]"
                      : "border-slate-200 bg-[#fbfcfe] text-slate-700 hover:border-[#061a34] hover:bg-white"
                  }`}
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase text-[#e8681b]">
                      {item.category}
                    </p>
                    <p className="mt-1 text-sm font-black text-[#071d3a]">
                      {item.title}
                    </p>
                  </div>
                  <FiArrowRight size={16} className="shrink-0 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
