"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import first from "../../assets/first.png";
import second from "../../assets/second.png";
import third from "../../assets/third.png";
import fourth from "../../assets/fourth.png";
import GrowshipLogo from "../../assets/GrowShipLogo.png";
import FirstFeature from "../../assets/1st.jpg";
import SecondFeature from "../../assets/2nd.jpg";
import ThirdFeature from "../../assets/3rd.jpg";
import FourthFeature from "../../assets/4th.jpg";
import FifthFeature from "../../assets/5th.jpg";
import SixthFeature from "../../assets/6th.jpg";
import {
  FiActivity as Sparkles,
  FiCircle as Circle,
  FiArrowRight as ArrowRight,
  FiBarChart2 as BarChart3,
  FiBox as Box,
  FiCheck as Check,
  FiPlay as Play,
  FiSend as Send,
  FiCheckCircle as BadgeCheck,
  FiChevronDown as ChevronDown,
  FiClock as Clock3,
  FiCopy as Copy,
  FiCreditCard as WalletCards,
  FiHelpCircle as HelpCircle,
  FiNavigation as Route,
  FiPrinter as Printer,
  FiRefreshCw as RefreshCw,
  FiShield as ShieldCheck,
  FiTruck as Truck,
  FiZap as Zap,
} from "react-icons/fi";

import { BiWallet } from "react-icons/bi";
import { TbClockBolt } from "react-icons/tb";
import { LuScale } from "react-icons/lu";
import { GiRapidshareArrow } from "react-icons/gi";
import { MdAutoGraph } from "react-icons/md";

const features = [
  {
    image: FirstFeature,
    title: "One dispatch command centre",
    text: "Create and manage shipment work from one focused board instead of bouncing between courier tabs.",
  },
  {
    image: SecondFeature,
    title: "Labels & manifests, ready when you are",
    text: "Print one label or a batch, then generate a clear handover manifest for the day’s pickup.",
  },
  {
    image: ThirdFeature,
    title: "Tracking that stays current",
    text: "A clean parcel timeline is refreshed on schedule and updated when your carrier sends an event.",
  },
  {
    image: FourthFeature,
    title: "NDR action before RTO",
    text: "Surface delivery exceptions in one place, with the context your team needs to respond quickly.",
  },
  {
    image: FifthFeature,
    title: "Transparent shipment wallet",
    text: "Use your own connected courier accounts or keep platform-account shipment spending itemised in a prepaid wallet.",
  },
  {
    image: SixthFeature,
    title: "Delivery intelligence, not guesswork",
    text: "See delivery-time distribution, NDR and RTO patterns so routing conversations are based on evidence.",
  },
];

const statsData = [
  {
    value: "1",
    highlight: "workspace",
    text: "for bookings, labels & tracking",
    image: first,
    imgBg: "bg-orange-50/50",
  },
  {
    value: "15",
    highlight: "min",
    text: "scheduled tracking refresh",
    image: second,
    imgBg: "bg-blue-50/30",
  },
  {
    value: "Every",
    highlight: "parcel",
    text: "visible, even on split orders",
    image: third,
    imgBg: "bg-orange-50/50",
  },
  {
    value: "Clear",
    highlight: "costs",
    text: "with itemised wallet debits",
    image: fourth,
    imgBg: "bg-blue-50/30",
  },
];

const faqs = [
  [
    "Which courier networks can I connect?",
    "GrowShip supports Shiprocket and Delhivery today. You can use your own connected accounts, or use the platform account where available.",
  ],
  [
    "Can an order be sent in more than one parcel?",
    "Yes. Each parcel gets its own shipment and timeline. The order stays partially delivered until every parcel is delivered.",
  ],
  [
    "How does the shipping wallet work?",
    "For platform-account shipments, you can use a prepaid wallet. Each debit is itemised so operations and finance can understand the charge.",
  ],
  [
    "Does GrowShip send customer updates?",
    "Shipment events can be handed to Growcord Comms for shipped, out-for-delivery and delivered customer notifications.",
  ],
  [
    "Is this a courier service?",
    "GrowShip is the operations layer that helps teams book, manage and understand carrier shipments. Carrier availability and charges come from your connected courier network.",
  ],
];

function Logo() {
  return (
    <a
      href="https://growship.in/"
      className="group inline-flex items-center gap-2.5"
      aria-label="GrowShip home"
    >
      <img src={GrowshipLogo.src} alt="Growship" className="h-24" />
    </a>
  );
}

function TrackingTool() {
  const [awb, setAwb] = useState("");
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const query = awb.trim();
    if (!query) {
      setStatus("Enter an AWB or order reference to continue.");
      return;
    }
    window.location.assign(`/track/${encodeURIComponent(query)}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/[0.07] p-2 shadow-2xl backdrop-blur-md"
    >
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="shipment-id">
          AWB or order reference
        </label>
        <input
          id="shipment-id"
          value={awb}
          onChange={(event) => setAwb(event.target.value)}
          placeholder="AWB or order reference"
          className="min-w-0 flex-1 rounded-xl border border-white/10 bg-[#061a34]/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[#f47721]"
        />
        <button
          type="submit"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#f47721] px-5 py-3 text-sm font-bold text-[#061b35] transition hover:bg-[#ff923f]"
        >
          Track a shipment <ArrowRight size={16} />
        </button>
      </div>
      {status && (
        <p className="px-2 pb-1 pt-3 text-xs text-slate-300" role="status">
          {status}
        </p>
      )}
    </form>
  );
}

function DispatchBoard() {
  const [copied, setCopied] = useState(false);
  const date = new Date();
  const shortMonth = date.toLocaleString("default", { month: "short" });
  const today = date.getDate();

  const copyAwb = () => {
    navigator.clipboard?.writeText("GRS-584-2189");
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="relative mx-auto w-full max-w-2xl rounded-[1.8rem] border border-slate-200 bg-white p-2 shadow-[0_30px_90px_rgba(4,21,45,.28)]">
      <div className="overflow-hidden rounded-[1.35rem] border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between bg-[#081d39] px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <img src={GrowshipLogo.src} alt="Growship" className=" w-24" />
          </div>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-slate-200">
            Today · {today} {shortMonth}
          </span>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-[1.1fr_.9fr] gap-0 bg-[#f8fafc]">
          {/* Left Column: Shipment Details */}
          <div className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[.12em] text-slate-400">
                  Shipment
                </p>
                <p className="mt-1 text-base font-bold text-[#071d3a]">
                  #ORD-10584
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700">
                Ready to ship
              </span>
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-5 text-sm">
              <div className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-50 text-[#f47721]">
                  <Box size={18} />
                </span>
                <div>
                  <p className="font-bold text-slate-700">1 parcel · 0.65 kg</p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Bengaluru → Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  <Truck size={18} />
                </span>
                <div>
                  <p className="font-bold text-slate-700">
                    Courier service selected
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Pickup planned for today
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={copyAwb}
              className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-xs text-slate-500 transition-colors hover:border-[#f47721]"
            >
              <span>
                AWB
                <strong className="ml-1 text-slate-700">GRS-584-2189</strong>
              </span>
              {copied ? (
                <Check size={16} className="text-emerald-600" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>

          {/* Right Column: Parcel Timeline */}
          <div className="border-l border-slate-200 bg-white p-5 sm:p-6">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[.12em] text-slate-400">
              Parcel timeline
            </p>

            {/* Timeline Map with React Icons */}
            {[
              {
                title: "Label created",
                time: "10:18 AM",
                Icon: Check,
                color: "text-[#f47721]",
              },
              {
                title: "Pickup scheduled",
                time: "10:22 AM",
                Icon: Clock3,
                color: "text-[#f47721]",
              },
              {
                title: "Carrier handover",
                time: "Expected today",
                Icon: Circle,
                color: "text-slate-300",
              },
            ].map(({ title, time, Icon, color }) => (
              <div key={title} className="relative flex gap-3.5 pb-6 last:pb-0">
                {/* Connecting Line */}
                <span className="absolute left-[9px] top-5 h-full border-l border-dashed border-slate-200 last:hidden" />

                {/* React Icon Drop-in */}
                <span className={`relative z-10 mt-0.5 bg-white ${color}`}>
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                <div>
                  <p className="text-sm font-bold text-slate-700">{title}</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-400">
                    {time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-5 -left-5 hidden items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:flex">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 text-emerald-600">
          <BadgeCheck size={18} />
        </span>
        <span className="text-xs font-bold text-slate-600">
          Shipment created
        </span>
      </div>
    </div>
  );
}

export default function GrowShipLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const [rateMode, setRateMode] = useState("account");

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Dynamic Badges/Context mapping for each bullet point
  const accountBullets = [
    {
      text: "Keep your direct carrier relationships",
      badge: "Shiprocket & Delhivery",
    },
    { text: "Manage everything from a single board", badge: "Synchronized" },
    { text: "Make routing choices based on real data", badge: "Analytics" },
  ];

  const walletBullets = [
    { text: "Top up funds whenever you need to", badge: "Prepaid" },
    { text: "See exact costs per shipment", badge: "Transparent" },
    { text: "Give finance a clean audit trail", badge: "Reporting" },
  ];

  return (
    <main className="overflow-x-hidden bg-[#fbfcfe] font-sans text-[#10213b] selection:bg-orange-200">
      <section className="relative isolate overflow-hidden bg-[#061a34] text-white">
        <div className="absolute inset-0">
          <Image
            src="/growship/growship-hero.png"
            alt="GrowShip delivery professional beside a logistics van"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center] opacity-80"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#061a34_0%,#061a34_34%,rgba(6,26,52,.83)_53%,rgba(6,26,52,.22)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,#061a34_0%,transparent_35%)]" />
        </div>

        {/* Main Content Area without Header */}
        <div className="relative z-10 mx-auto grid min-h-[660px] max-w-7xl items-center px-5 pb-20 pt-16 lg:grid-cols-[.98fr_1.02fr] lg:px-8 lg:pb-24 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.08] px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f47721]" />
              The smart shipping platform for D2C brands
            </div>
            <h1 className="text-balance text-5xl font-black leading-[.96] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Your entire shipping
              <span className="text-[#ff8e3c]">workflow,</span>
              <br />
              in one clear view.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-7 text-slate-200 sm:text-lg">
              Stop jumping between multiple courier tabs. GrowShip gives your
              team one unified dashboard to automate e-commerce shipments, track
              parcels in real-time, and fix delivery exceptions before they
              become expensive returns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://growship.in/start"
                className="inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-5 py-3.5 text-sm font-bold text-[#071d3a] shadow-[0_12px_30px_rgba(244,119,33,.28)] transition hover:-translate-y-0.5 hover:bg-[#ff923f]"
              >
                Start shipping with GrowShip <ArrowRight size={17} />
              </a>
              <button
                onClick={() => scrollTo("#how-it-works")}
                className="rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                See how it works
              </button>
            </div>
            <div className="mt-10 max-w-xl">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-[.14em] text-slate-300">
                Track a live shipment
              </p>
              <TrackingTool />
            </div>
          </motion.div>
          <div className="mt-16 hidden lg:block" />
        </div>
      </section>
      <section className="border-y border-gray-100 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gray-100 sm:grid-cols-4 border-gray-100"
        >
          {statsData.map((stat) => (
            <motion.div
              key={stat.highlight}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center px-6 py-12 transition-colors duration-300 hover:bg-gray-50/50 sm:px-10"
            >
              <div
                className={`mb-6 flex h-36 w-36 items-center justify-center rounded-2xl ${stat.imgBg} transition-transform duration-300 group-hover:scale-105`}
              >
                <img
                  src={stat.image.src}
                  alt={stat.highlight}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-3xl font-black tracking-tight text-[#071d3a]">
                {stat.value}{" "}
                <span className="text-[#e8681b]">{stat.highlight}</span>
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-500">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <section
        id="how-it-works"
        className="mx-auto max-w-7xl px-5 py-20 sm:py-28 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-[.86fr_1.14fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              STREAMLINE YOUR DISPATCH DESK
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-.045em] text-[#071d3a] sm:text-5xl">
              The fastest way to get your orders from packed to delivered.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
              Take the heavy lifting out of your daily shipping workflow. Select
              your courier, print shipping labels instantly, and generate
              handover manifests-all from one place. Keep full visibility of
              every parcel even after it leaves your warehouse.
            </p>
            <div className="mt-8 space-y-5">
              {[
                [
                  "01",
                  "Sync orders instantly",
                  "Bring all your orders into one dashboard with pre-filled addresses, item weights, and parcel dimensions ready to go.",
                ],
                [
                  "02",
                  "Generate labels & book pickups",
                  "Create shipping labels, print bulk manifests, and schedule carrier pickups in a single, smooth flow.",
                ],
                [
                  "03",
                  "Track & resolve exceptions",
                  "Monitor real-time parcel tracking, manage NDRs proactively, and handle returns without the usual courier chaos.",
                ],
              ].map(([num, title, text]) => (
                <div key={num} className="flex gap-4">
                  <span className="pt-0.5 text-xs font-black text-[#f47721]">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#071d3a]">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DispatchBoard />
          </motion.div>
        </div>
      </section>
      <section
        id="capabilities"
        className="bg-white px-5 py-20 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              Everything around the parcel
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-.045em] text-[#071d3a] sm:text-5xl">
              The shipping layer your customer never sees-but always feels.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map(({ image, title, text }) => (
              <motion.article
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-gray-200 hover:shadow-2xl hover:shadow-gray-900/5"
              >
                <div className="mb-8 h-40 w-full overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-extrabold tracking-tight text-[#071d3a]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {text}
                </p>

                <span className="mt-6 flex items-center gap-2 text-sm font-bold text-[#e8681b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Built into the workflow <ArrowRight size={16} />
                </span>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        id="intelligence"
        className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8"
      >
        <div className="rounded-[2.5rem] bg-[#071d3a] px-6 text-white sm:px-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-12 lg:py-12 shadow-[0_30px_80px_rgba(7,29,58,0.2)]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[.15em] text-[#ff9647]">
              DATA THAT DRIVES DECISIONS
            </p>
            <h2 className="mt-3 text-balance text-3xl font-black leading-[1.05] tracking-[-.045em] sm:text-4xl">
              Stop guessing. Start shipping smarter.
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300">
              Choosing a courier should be based on performance, not habit.
              GrowShip turns tracking data into clear operational insights,
              keeping your team one step ahead.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [
                  TbClockBolt,
                  "Delivery timeline insights",
                  "Don't just rely on averages. Look at the real data to see exactly how long each courier takes in specific areas.",
                ],
                [
                  GiRapidshareArrow,
                  "Catch NDRs early",
                  "Spot delivery exceptions before they fail. Alert your team in time to take action.",
                ],
                [
                  LuScale,
                  "Compare couriers fairly",
                  "Which partner is actually performing best? Compare delivery and return speeds side-by-side.",
                ],
                [
                  ShieldCheck,
                  "One source of truth",
                  "Track the complete story of every parcel, from booking to final delivery, all on a single dashboard.",
                ],
              ].map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="group rounded-2xl bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 transition-colors duration-300 group-hover:bg-orange-500/20">
                    <Icon size={20} className="text-[#ff9647]" />
                  </div>
                  <h3 className="text-sm font-bold text-white transition-colors group-hover:text-[#ff9647]">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-white/5 bg-[#0b294d]/80 p-6 lg:mt-0 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">Delivery snapshot</p>
                <p className="mt-1 text-xs text-slate-400">
                  Last 90 days · illustrative view
                </p>
              </div>
              <BarChart3 size={24} className="text-[#ff9647]" />
            </div>

            <div className="mt-8 space-y-6">
              {[
                [
                  "Express service",
                  "1.8 days",
                  "78%",
                  "bg-gradient-to-r from-[#f47721] to-[#ff9647]",
                ],
                [
                  "Priority ground",
                  "2.9 days",
                  "62%",
                  "bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]",
                ],
                [
                  "Standard surface",
                  "4.6 days",
                  "42%",
                  "bg-gradient-to-r from-[#64748b] to-[#94a3b8]",
                ],
              ].map(([label, value, width, gradient]) => (
                <div key={label}>
                  <div className="mb-2 flex justify-between text-xs">
                    <span className="font-semibold text-slate-200">
                      {label}
                    </span>
                    <span className="font-medium text-slate-400">
                      median {value}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${gradient} shadow-[0_0_10px_rgba(255,255,255,0.1)]`}
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-start gap-4 border-t border-white/10 pt-5">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f47721] text-[#071d3a] shadow-lg shadow-orange-500/20">
                <MdAutoGraph size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[11px] font-semibold leading-5 text-slate-200">
                    Real-time median delivery speeds based on your recent
                    shipments.
                  </p>
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#f2decf] bg-[#fff8f2] px-5 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              YOUR SHIPPING ROUTE
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-.045em] text-[#071d3a]">
              Your accounts, or ours. One seamless workflow.
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-slate-700">
              Connect your trusted carrier accounts, or use our platform rates
              when you need them. No matter how you choose to ship, your daily
              dispatch process stays exactly the same.
            </p>
          </div>

          <div className="rounded-3xl border border-[#efd6c2]/60 bg-white p-3 shadow-[0_30px_60px_rgba(103,58,21,.08)]">
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-50 p-2">
              <button
                onClick={() => setRateMode("account")}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-[13px] font-bold transition-all duration-300 ${
                  rateMode === "account"
                    ? "bg-white text-[#071d3a] shadow-md ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-slate-100/50 hover:text-slate-800"
                }`}
              >
                <Play
                  size={15}
                  className={rateMode === "account" ? "text-purple-600" : ""}
                />
                My courier account <span className="font-black">DELHIVERY</span>
              </button>
              <button
                onClick={() => setRateMode("wallet")}
                className={`flex items-center justify-center gap-2 rounded-lg px-4 py-3.5 text-[13px] font-bold transition-all duration-300 ${
                  rateMode === "wallet"
                    ? "bg-white text-[#071d3a] shadow-md ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-slate-100/50 hover:text-slate-800"
                }`}
              >
                <BiWallet
                  size={17}
                  className={rateMode === "wallet" ? "text-blue-500" : ""}
                />
                GrowShip wallet
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xl font-black tracking-tight text-[#071d3a]">
                    {rateMode === "account"
                      ? "Bring your own rates"
                      : "Ship instantly with a prepaid wallet"}
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                    {rateMode === "account"
                      ? "Link your Shiprocket or Delhivery accounts in minutes. Keep your negotiated rates and existing setups, while upgrading your team's workflow."
                      : "Don't have a carrier account? Use our platform rates. Just fund your wallet and get clear, itemised costs for every single parcel."}
                  </p>
                </div>

                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-orange-50 text-[#e8681b] shadow-sm">
                  {rateMode === "account" ? (
                    <Send size={22} />
                  ) : (
                    <BiWallet size={24} />
                  )}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {(rateMode === "account" ? accountBullets : walletBullets).map(
                  (item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <span className="font-medium">{item.text}</span>

                      <span className="hidden rounded-md bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600 sm:inline-block">
                        {item.badge}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
            Frequently asked questions
          </p>
          <h2 className="mt-4 text-balance text-4xl font-black leading-[1.02] tracking-[-.045em] text-[#071d3a] sm:text-5xl">
            Good operations start with clear answers.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(([question, answer], index) => {
            const isOpen = openFaq === index;

            return (
              <div key={question} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-[#071d3a]"
                >
                  <span>{question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#e8681b] transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-5 text-sm leading-6 text-slate-600">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="demo" className="px-5 pb-20 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 px-6 py-14 sm:px-12 sm:py-20 lg:flex lg:items-center lg:justify-between shadow-[0_20px_50px_rgba(4,21,45,.05)]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[.15em] text-[#e8681b]">
              A clearer way to ship starts here
            </p>
            <h2 className="mt-4 text-balance text-4xl font-black leading-[1.05] tracking-[-.04em] text-[#071d3a] sm:text-5xl">
              Apply once. Onboard with clarity.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500">
              Start a GrowShip application with your business profile. Eligible
              teams receive a secure, review-led KYC and shipping setup path.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4 lg:mt-0">
            <a
              href="https://growship.in/start"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#f47721] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#d45a15] hover:shadow-lg hover:shadow-orange-500/25"
            >
              Start shipping
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="https://growship.in/kyc"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-100"
            >
              How KYC works
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
