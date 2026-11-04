"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiRotateCcw,
  FiCheckCircle,
  FiTruck,
  FiPackage,
  FiInfo,
} from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi2";

export default function RateCalculator({ p }) {
  // Form State
  const [originPincode, setOriginPincode] = useState("");
  const [destinationPincode, setDestinationPincode] = useState("");
  const [paymentMode, setPaymentMode] = useState("Prepaid");
  const [approxWeight, setApproxWeight] = useState("");
  const [invoiceValue, setInvoiceValue] = useState("");
  const [qty, setQty] = useState("1");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  // Result & UI State
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  // Calculation Logic
  const handleCalculate = (e) => {
    e?.preventDefault();
    setError("");

    if (!originPincode || originPincode.trim().length < 6) {
      setError("Please enter a valid 6-digit Origin Pincode");
      return;
    }
    if (!destinationPincode || destinationPincode.trim().length < 6) {
      setError("Please enter a valid 6-digit Destination Pincode");
      return;
    }
    const weightNum = parseFloat(approxWeight);
    if (!weightNum || weightNum <= 0) {
      setError("Please enter a valid approximate weight in Kg");
      return;
    }

    setShowResult(true);
  };

  const handleReset = () => {
    setOriginPincode("");
    setDestinationPincode("");
    setPaymentMode("Prepaid");
    setApproxWeight("");
    setInvoiceValue("");
    setQty("1");
    setLength("");
    setWidth("");
    setHeight("");
    setShowResult(false);
    setError("");
  };

  // Compute calculated metrics
  const calculation = useMemo(() => {
    const deadWeight = parseFloat(approxWeight) || 0.5;
    const l = parseFloat(length) || 10;
    const w = parseFloat(width) || 10;
    const h = parseFloat(height) || 10;
    const quantity = parseInt(qty, 10) || 1;

    // Volumetric formula in cm: (L * W * H / 5000) * Qty
    const volWeight = Number((((l * w * h) / 5000) * quantity).toFixed(2));
    const chargeableWeight = Math.max(deadWeight, volWeight);
    const roundedChargeable = Math.max(
      0.5,
      Math.ceil(chargeableWeight * 2) / 2,
    );

    // Rate calculations based on simulated distance / zone
    const isSameZone =
      originPincode.slice(0, 2) === destinationPincode.slice(0, 2);
    const basePerHalfKg = isSameZone ? 29 : 42;
    const multiplier = roundedChargeable / 0.5;
    const freightCharge = Math.round(
      basePerHalfKg + (multiplier - 1) * (basePerHalfKg * 0.7),
    );

    // COD calculation
    const invVal = parseFloat(invoiceValue) || 1000;
    const codCharge =
      paymentMode === "COD" ? Math.max(30, Math.round(invVal * 0.018)) : 0;
    const fuelDocket = 15;
    const totalRate = freightCharge + codCharge + fuelDocket;

    const estimatedDays = isSameZone
      ? "1 - 2 Business Days"
      : "2 - 4 Business Days";

    return {
      deadWeight,
      volWeight,
      chargeableWeight: roundedChargeable,
      freightCharge,
      codCharge,
      fuelDocket,
      totalRate,
      estimatedDays,
      isSameZone,
    };
  }, [
    approxWeight,
    length,
    width,
    height,
    qty,
    originPincode,
    destinationPincode,
    paymentMode,
    invoiceValue,
  ]);

  return (
    <section
      id="rate-calculator"
      className="relative py-20 md:py-28 bg-[#EEF0FB] overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* =========================================================
              LEFT COLUMN: Header, Content, CTA & Floating Boxes Art
          ========================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.1] mb-5">
                <span className="text-[#131740]">Rate </span>
                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-red-500 bg-clip-text text-transparent">
                  Calculator
                </span>
              </h2>

              {/* Subtitle */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight mb-5 leading-snug">
                Your Transparent Shipping Cost Estimation Tool
              </h3>

              {/* Paragraphs */}
              <div className="space-y-4 text-gray-600 text-sm sm:text-[15px] leading-relaxed mb-8 max-w-xl">
                <p>
                  Welcome to the Growship Shipping Rate Calculator, your
                  reliable partner in cost transparency for shipping services.
                  We understand the importance of precise financial planning in
                  logistics, and our calculator is here to provide you with
                  accurate shipping cost estimates in a professional manner.
                </p>
                <p>
                  Our advanced Rate Calculator takes into account essential
                  factors such as pin codes, shipment weight, as well as precise
                  pickup and delivery locations. This meticulous approach
                  ensures that you have a clear understanding of your shipping
                  expenses well before your cargo begins its journey.
                </p>
              </div>

              {/* Explore More CTA Button */}
              <div className="mb-12">
                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.03, x: 3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-500 text-white text-base font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all cursor-pointer"
                >
                  Explore more
                  <FiArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>

            {/* Realistic 3D Isometric Cardboard Boxes Graphic matching screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[460px] h-64 sm:h-72 mt-4 select-none pointer-events-none"
            >
              {/* Floating delivery box 1 (Top Left) */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-6 top-8 w-24 h-20"
              >
                <svg
                  viewBox="0 0 120 100"
                  className="w-full h-full drop-shadow-xl"
                >
                  {/* Top face */}
                  <polygon points="60,5 110,25 60,45 10,25" fill="#e9c89b" />
                  <polygon
                    points="60,5 110,25 60,45 10,25"
                    fill="#f4d9b4"
                    opacity="0.6"
                  />
                  {/* Tape line on top */}
                  <polygon
                    points="60,5 68,9 50,45 42,41"
                    fill="#c49b66"
                    opacity="0.8"
                  />
                  {/* Left face */}
                  <polygon points="10,25 60,45 60,95 10,75" fill="#c99f69" />
                  {/* Right face */}
                  <polygon points="60,45 110,25 110,75 60,95" fill="#af8651" />
                  {/* Tape on front */}
                  <polygon
                    points="60,45 60,95 54,93 54,43"
                    fill="#9c723f"
                    opacity="0.7"
                  />
                  {/* Shipping label */}
                  <rect
                    x="75"
                    y="45"
                    width="22"
                    height="15"
                    rx="2"
                    fill="#ffffff"
                    opacity="0.9"
                    transform="skewY(-18)"
                  />
                  <line
                    x1="77"
                    y1="50"
                    x2="90"
                    y2="50"
                    stroke="#333333"
                    strokeWidth="1.5"
                    transform="skewY(-18)"
                  />
                  <line
                    x1="77"
                    y1="54"
                    x2="86"
                    y2="54"
                    stroke="#333333"
                    strokeWidth="1"
                    transform="skewY(-18)"
                  />
                </svg>
              </motion.div>

              {/* Floating delivery box 2 (Large Right Hero Box) */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0.5, -1, 0.5] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute right-4 top-4 w-44 sm:w-52 h-40 sm:h-44"
              >
                <svg
                  viewBox="0 0 160 140"
                  className="w-full h-full drop-shadow-2xl"
                >
                  {/* Top Face */}
                  <polygon points="80,10 150,40 80,70 10,40" fill="#edd0a4" />
                  {/* Top Tape */}
                  <polygon
                    points="76,10 84,14 84,70 76,66"
                    fill="#c4975d"
                    opacity="0.85"
                  />
                  {/* Left Face (in shade) */}
                  <polygon points="10,40 80,70 80,130 10,100" fill="#cf9f63" />
                  {/* Right Face (darker shade) */}
                  <polygon
                    points="80,70 150,40 150,100 80,130"
                    fill="#ad7e46"
                  />
                  {/* Center vertical seam tape */}
                  <polygon
                    points="80,70 80,130 74,127 74,67"
                    fill="#8f6330"
                    opacity="0.85"
                  />
                  {/* Fragile / Arrow icon badge */}
                  <g transform="translate(30, 68) skewY(23) scale(0.7)">
                    <rect
                      width="26"
                      height="26"
                      rx="4"
                      fill="#ffffff"
                      opacity="0.85"
                    />
                    <path
                      d="M13,5 L7,13 L11,13 L11,20 L15,20 L15,13 L19,13 Z"
                      fill="#b91c1c"
                    />
                  </g>
                  {/* Shipping Label on right face */}
                  <g transform="translate(95, 75) skewY(-22) scale(0.85)">
                    <rect
                      width="36"
                      height="24"
                      rx="3"
                      fill="#ffffff"
                      opacity="0.95"
                    />
                    <line
                      x1="5"
                      y1="6"
                      x2="31"
                      y2="6"
                      stroke="#1f2937"
                      strokeWidth="2"
                    />
                    <line
                      x1="5"
                      y1="11"
                      x2="25"
                      y2="11"
                      stroke="#4b5563"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="5"
                      y1="16"
                      x2="28"
                      y2="16"
                      stroke="#4b5563"
                      strokeWidth="1.5"
                    />
                    <rect x="5" y="19" width="12" height="2" fill="#111827" />
                  </g>
                </svg>
              </motion.div>

              {/* Stacked delivery boxes 3 & 4 (Bottom Left) */}
              <div className="absolute left-0 bottom-0 w-52 sm:w-60 h-36">
                <svg
                  viewBox="0 0 180 130"
                  className="w-full h-full drop-shadow-xl"
                >
                  {/* Ground shadow */}
                  <ellipse
                    cx="90"
                    cy="118"
                    rx="80"
                    ry="12"
                    fill="#000000"
                    opacity="0.08"
                  />

                  {/* Main Stacked Box */}
                  <polygon points="70,25 130,50 70,75 10,50" fill="#e8c799" />
                  <polygon points="10,50 70,75 70,120 10,95" fill="#c69a62" />
                  <polygon points="70,75 130,50 130,95 70,120" fill="#a87c47" />
                  {/* Tape */}
                  <polygon
                    points="70,25 76,28 76,75 70,72"
                    fill="#b3874f"
                    opacity="0.9"
                  />
                  <polygon
                    points="70,75 70,120 65,117 65,72"
                    fill="#8f6330"
                    opacity="0.8"
                  />

                  {/* Side Small Box partially behind */}
                  <polygon
                    points="135,55 175,70 135,85 95,70"
                    fill="#dec092"
                    opacity="0.9"
                  />
                  <polygon
                    points="95,70 135,85 135,115 95,100"
                    fill="#b88d55"
                    opacity="0.9"
                  />
                  <polygon
                    points="135,85 175,70 175,100 135,115"
                    fill="#9b703a"
                    opacity="0.9"
                  />

                  {/* Barcode sticker */}
                  <g transform="translate(25, 75) skewY(22) scale(0.75)">
                    <rect
                      width="28"
                      height="16"
                      rx="2"
                      fill="#ffffff"
                      opacity="0.95"
                    />
                    <line
                      x1="3"
                      y1="4"
                      x2="3"
                      y2="12"
                      stroke="#111"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="6"
                      y1="4"
                      x2="6"
                      y2="12"
                      stroke="#111"
                      strokeWidth="1"
                    />
                    <line
                      x1="9"
                      y1="4"
                      x2="9"
                      y2="12"
                      stroke="#111"
                      strokeWidth="2"
                    />
                    <line
                      x1="13"
                      y1="4"
                      x2="13"
                      y2="12"
                      stroke="#111"
                      strokeWidth="1"
                    />
                    <line
                      x1="16"
                      y1="4"
                      x2="16"
                      y2="12"
                      stroke="#111"
                      strokeWidth="2.5"
                    />
                    <line
                      x1="21"
                      y1="4"
                      x2="21"
                      y2="12"
                      stroke="#111"
                      strokeWidth="1"
                    />
                    <line
                      x1="24"
                      y1="4"
                      x2="24"
                      y2="12"
                      stroke="#111"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT COLUMN: Frosted orange Card & Calculator Form
          ========================================================= */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-[#DDE2F8]/75 backdrop-blur-md rounded-3xl p-6 sm:p-9 lg:p-10 border border-white/70 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.2)]"
            >
              {/* Background elegant line wave art in top right corner */}
              <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-20 overflow-hidden">
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-indigo-900"
                >
                  <path
                    d="M30 0C60 40 80 80 120 110C160 140 180 170 210 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M50 0C80 40 100 80 140 110C180 140 200 170 230 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M70 0C100 40 120 80 160 110C200 140 220 170 250 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M90 0C120 40 140 80 180 110C220 140 240 170 270 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M110 0C140 40 160 80 200 110C240 140 260 170 290 200"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              <form
                onSubmit={handleCalculate}
                className="relative z-10 space-y-5"
              >
                {/* Error Banner */}
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-xl text-sm flex items-center gap-2">
                    <FiInfo className="shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* ROW 1: Origin & Destination Pincodes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
                      Origin Pincode
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={originPincode}
                      onChange={(e) =>
                        setOriginPincode(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="Enter Origin Pincode"
                      className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base px-4 py-3 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
                      Destination Pincode
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={destinationPincode}
                      onChange={(e) =>
                        setDestinationPincode(e.target.value.replace(/\D/g, ""))
                      }
                      placeholder="Enter Destination Pincode"
                      className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base px-4 py-3 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                    />
                  </div>
                </div>

                {/* ROW 2: Payment Mode & Approx Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
                      Payment Mode
                    </label>
                    <div className="relative">
                      <select
                        value={paymentMode}
                        onChange={(e) => setPaymentMode(e.target.value)}
                        className="w-full appearance-none bg-white text-gray-800 text-sm sm:text-base px-4 py-3 pr-10 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all cursor-pointer"
                      >
                        <option value="Prepaid">Prepaid</option>
                        <option value="COD">Cash On Delivery (COD)</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-white bg-orange-600 rounded-r-lg">
                        <HiChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
                      Approx Weight(Kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      min="0.1"
                      value={approxWeight}
                      onChange={(e) => setApproxWeight(e.target.value)}
                      placeholder="Enter Approx Weight"
                      className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base px-4 py-3 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                    />
                  </div>
                </div>

                {/* ROW 3: Invoice Value */}
                <div>
                  <label className="block text-sm font-semibold text-[#1e1b4b] mb-1.5">
                    Invoice Value (Rs)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={invoiceValue}
                    onChange={(e) => setInvoiceValue(e.target.value)}
                    placeholder="Enter Invoice Value"
                    className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm sm:text-base px-4 py-3 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                  />
                </div>

                {/* ROW 4: Dimensions Group Box */}
                <div className="border border-white/80 bg-white/30 rounded-2xl p-4 sm:p-5">
                  <span className="block text-sm font-semibold text-[#1e1b4b] mb-3">
                    Dimensions (cm)
                  </span>
                  <div className="grid grid-cols-4 gap-2 sm:gap-3">
                    <div>
                      <span className="block text-xs font-medium text-gray-600 mb-1">
                        Qty
                      </span>
                      <input
                        type="number"
                        min="1"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        placeholder="Qty"
                        className="w-full bg-white text-gray-800 text-center placeholder-gray-400 text-sm px-2 py-2.5 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-600 mb-1">
                        Length
                      </span>
                      <input
                        type="number"
                        step="0.5"
                        min="1"
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        placeholder="L"
                        className="w-full bg-white text-gray-800 text-center placeholder-gray-400 text-sm px-2 py-2.5 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-600 mb-1">
                        Width
                      </span>
                      <input
                        type="number"
                        step="0.5"
                        min="1"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        placeholder="W"
                        className="w-full bg-white text-gray-800 text-center placeholder-gray-400 text-sm px-2 py-2.5 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                      />
                    </div>
                    <div>
                      <span className="block text-xs font-medium text-gray-600 mb-1">
                        Height
                      </span>
                      <input
                        type="number"
                        step="0.5"
                        min="1"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="H"
                        className="w-full bg-white text-gray-800 text-center placeholder-gray-400 text-sm px-2 py-2.5 rounded-lg border border-transparent focus:border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600/20 shadow-xs transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 5: Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-orange-600 to-red-500 hover:brightness-110 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer text-center"
                  >
                    Calculate
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/70 hover:bg-white text-[#4338ca] font-bold py-3.5 px-6 rounded-xl border border-[#4338ca]/30 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <FiRotateCcw className="w-4 h-4" />
                    Reset
                  </motion.button>
                </div>
              </form>

              {/* =========================================================
                  CALCULATION RESULT POPUP / CARD REVEAL
              ========================================================= */}
              <AnimatePresence>
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 pt-6 border-t border-indigo-200/60"
                  >
                    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-indigo-100">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full">
                          <FiCheckCircle /> Verified Estimate
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                          Route: {originPincode} → {destinationPincode}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-5">
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <span className="block text-[11px] font-medium text-gray-500 uppercase">
                            Dead Weight
                          </span>
                          <span className="text-sm sm:text-base font-bold text-gray-900">
                            {calculation.deadWeight} Kg
                          </span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <span className="block text-[11px] font-medium text-gray-500 uppercase">
                            Volumetric
                          </span>
                          <span className="text-sm sm:text-base font-bold text-gray-900">
                            {calculation.volWeight} Kg
                          </span>
                        </div>
                        <div className="bg-indigo-50 p-2.5 rounded-xl border border-indigo-100">
                          <span className="block text-[11px] font-bold text-indigo-700 uppercase">
                            Chargeable
                          </span>
                          <span className="text-sm sm:text-base font-extrabold text-indigo-900">
                            {calculation.chargeableWeight} Kg
                          </span>
                        </div>
                        <div className="bg-orange-50 p-2.5 rounded-xl border border-orange-100">
                          <span className="block text-[11px] font-medium text-orange-700 uppercase">
                            Est. SLA
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-orange-900">
                            {calculation.estimatedDays}
                          </span>
                        </div>
                      </div>

                      {/* Pricing Breakdown */}
                      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                          <span className="text-xs text-indigo-200 uppercase font-semibold tracking-wider">
                            Estimated Shipping Rate
                          </span>
                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-3xl sm:text-4xl font-black text-white">
                              ₹{calculation.totalRate}
                            </span>
                            <span className="text-xs text-indigo-300">
                              (incl. fuel &{" "}
                              {paymentMode === "COD"
                                ? "COD charges"
                                : "docket fees"}
                              )
                            </span>
                          </div>
                        </div>

                        <a
                          href="/contact-us"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-lg text-sm shadow-md transition-all"
                        >
                          Ship With Us
                          <FiArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
