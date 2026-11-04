"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";
import { PRODUCT_GROUPS, PRODUCT_NAV, getProductNav } from "@/data/productNav";
import { GROUP_COLORS, faIcon } from "./icons";
import Logo from "../../assets/logo.png";

/**
 * Sections for the suite pages, written in the ORIGINAL site's visual language (the home page's
 * service cards and "Why we're different" block): bold headings, orange pill eyebrows, white
 * cards with shadow-lg, colourful gradient icon tiles. Enhanced with smooth Framer Motion.
 */

export function OldHeading({ eyebrow, title, highlight, text, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="text-center mb-16 relative z-10"
    >
      {eyebrow && (
        <div
          className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-6 ${dark ? "bg-orange-500/20 text-orange-300" : "bg-orange-100 text-orange-600"}`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight ${dark ? "text-white" : "text-gray-900"}`}
      >
        {title}
        {highlight && (
          <span className="block bg-linear-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {text && (
        <p
          className={`text-xl md:text-2xl max-w-3xl mx-auto font-light ${dark ? "text-gray-300" : "text-gray-600"}`}
        >
          {text}
        </p>
      )}
    </motion.div>
  );
}

export function ProductCard({ slug, note }) {
  const p = getProductNav(slug);
  if (!p) return null;
  const Icon = faIcon(p.icon);
  const color = GROUP_COLORS[p.group];
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className="h-full flex flex-col"
    >
      <Link
        href={`/products/${p.slug}`}
        className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 relative overflow-hidden flex flex-col h-full flex-1"
      >
        <div
          className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        ></div>
        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-start justify-between">
            <div
              className={`w-16 h-16 rounded-xl bg-linear-to-r ${color} flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
            >
              <Icon />
            </div>
            {p.status !== "live" && (
              <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase">
                Beta
              </span>
            )}
          </div>
          <h3 className="text-xl font-black text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
            {p.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed flex-1">
            {note || p.summary}
          </p>
          <span className="mt-4 text-orange-600 font-bold text-sm inline-flex items-center gap-2">
            Explore {p.name}{" "}
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/** A grid of suite products  pass `items` ({slug, for}) or `slugs`, or `all` for every product by family. */
export function SuiteCardsSection({
  eyebrow = "The Growcord Suite",
  title = "Powered by the",
  highlight = "Growcord Suite",
  text,
  items,
  slugs,
  all = false,
  tone = "white",
}) {
  const bg =
    tone === "gray"
      ? "bg-linear-to-br from-gray-50 via-white to-gray-50"
      : "bg-white";
  const list = items || (slugs || []).map((slug) => ({ slug }));
  return (
    <section className={`py-24 relative overflow-hidden ${bg}`}>
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.05, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <OldHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          text={
            text ||
            "The same software our team uses  one sign-in, one contact book and one set of accounts across every product."
          }
        />
        {all ? (
          <div className="space-y-14">
            {PRODUCT_GROUPS.map((g) => (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-3 h-10 rounded-full bg-linear-to-b ${GROUP_COLORS[g.key]}`}
                  ></div>
                  <h3 className="text-3xl font-black text-gray-900">
                    {g.name}
                  </h3>
                  <span className="text-gray-500 font-medium hidden sm:inline">
                    {g.blurb}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {PRODUCT_NAV.filter((p) => p.group === g.key).map((p) => (
                    <ProductCard key={p.slug} slug={p.slug} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.1 },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {list.map((it) => (
              <motion.div
                key={it.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <ProductCard slug={it.slug} note={it.for} />
              </motion.div>
            ))}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              See all 18 products <FaArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/** The home page's "Why We're Different" two-column block, fed from a comparison table. */
export function CompareSection({
  them,
  rows,
  title = "Why We're Different",
  text,
}) {
  const label = (v) => (typeof v === "string" ? v : v ? "Yes" : "No");
  return (
    <section className="py-24 bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.08, 0.04, 0.08] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-black uppercase tracking-wider mb-6">
            Why Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            {title}
          </h2>
          {text && (
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
              {text}
            </p>
          )}
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-red-100 hover:border-red-300 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                <span className="text-red-600 text-3xl font-bold">
                  <FaTimes />
                </span>
              </div>
              <h3 className="text-3xl font-black text-gray-900">{them}</h3>
            </div>
            <ul className="space-y-4">
              {rows.map(([feature, , theirs]) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span
                    className={`text-xl mt-0.5 ${theirs === true ? "text-green-500" : "text-red-500"}`}
                  >
                    {theirs === true ? <FaCheck /> : <FaTimes />}
                  </span>
                  <span>
                    {feature}
                    {typeof theirs === "string" ? `- ${theirs}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -6 }}
            className="bg-linear-to-br from-orange-50 to-purple-50 p-8 sm:p-10 rounded-3xl shadow-2xl border-2 border-orange-300 hover:border-orange-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-black uppercase shadow-md">
              Best Choice
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-3xl font-bold">
                  <FaCheck />
                </span>
              </div>
              <h3 className="text-3xl font-black text-gray-900">
                <img src={Logo.src} alt="" />
              </h3>
            </div>
            <ul className="space-y-4">
              {rows.map(([feature, ours]) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-gray-900"
                >
                  <span className="text-green-500 text-xl font-bold mt-0.5">
                    <FaCheck />
                  </span>
                  <span className="font-semibold">
                    {feature}
                    {typeof ours === "string" ? `  ${label(ours)}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Dark pricing callout in the style of the e-commerce landing page's pricing block. */
export function PricingCallout({ title, text, cta }) {
  const external = /^https?:\/\//.test(cta?.href || "");
  const cls =
    "inline-flex items-center gap-2 bg-linear-to-r from-orange-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 shadow-lg";
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-linear-to-br from-orange-600 to-red-600 rounded-3xl p-1 shadow-2xl"
        >
          <div className="bg-gray-900 rounded-[1.3rem] p-10 md:p-14 text-center">
            <div className="inline-block bg-orange-600/20 text-orange-400 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Simple & Transparent
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              {text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {external ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {cta.label} <FaArrowRight />
                </motion.a>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Link href={cta.href} className={cls}>
                    {cta.label} <FaArrowRight />
                  </Link>
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 hover:bg-white hover:text-black font-bold transition-all"
                >
                  All pricing
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
