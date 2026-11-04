"use client";

import React, { useState, useMemo } from "react";
import { FaCheck, FaTimes, FaCalculator } from "react-icons/fa";

export default function CommissionWorkedExample() {
  const [orderAmountWithGst, setOrderAmountWithGst] = useState(1180);
  const [selectedPlan, setSelectedPlan] = useState("self"); // "self" = 5%, "managed" = 10%

  const calculations = useMemo(() => {
    // Assuming 18% standard GST included in retail price
    const netOrderValue = Math.round(orderAmountWithGst / 1.18);
    const gstCollected = orderAmountWithGst - netOrderValue;

    const rate = selectedPlan === "self" ? 0.05 : 0.1;
    const commission = Math.round(netOrderValue * rate);
    const gstOnCommission = Math.round(commission * 0.18);
    const totalToGrowcord = commission + gstOnCommission;
    const youKeep = orderAmountWithGst - totalToGrowcord;

    return {
      netOrderValue,
      gstCollected,
      commission,
      gstOnCommission,
      totalToGrowcord,
      youKeep,
      ratePercent: selectedPlan === "self" ? "5%" : "10%",
    };
  }, [orderAmountWithGst, selectedPlan]);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-orange-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            <FaCalculator size={11} /> Interactive Commission Simulator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">
            Calculate Exactly What You Pay & Keep
          </h3>
        </div>

        {/* Plan Toggle */}
        <div className="flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setSelectedPlan("self")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPlan === "self"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Self Managed (5%)
          </button>
          <button
            type="button"
            onClick={() => setSelectedPlan("managed")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedPlan === "managed"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Fully Managed (10%)
          </button>
        </div>
      </div>

      {/* Slider */}
      <div className="mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="order-amount-slider" className="text-xs font-bold text-gray-700 uppercase tracking-wider">
            Order Value Paid by Customer (incl. GST)
          </label>
          <span className="text-base font-extrabold text-gray-900 px-3 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">
            ₹{orderAmountWithGst.toLocaleString("en-IN")}
          </span>
        </div>
        <input
          id="order-amount-slider"
          type="range"
          min="500"
          max="10000"
          step="100"
          value={orderAmountWithGst}
          onChange={(e) => setOrderAmountWithGst(Number(e.target.value))}
          className="w-full accent-orange-600 cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-gray-500 font-medium mt-1">
          <span>₹500</span>
          <span>₹5,000</span>
          <span>₹10,000</span>
        </div>
      </div>

      {/* Itemized Calculation */}
      <div className="space-y-3 text-sm sm:text-base">
        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
          <span className="text-gray-600">Customer pays you (incl. 18% GST)</span>
          <span className="font-bold text-gray-900">₹{orderAmountWithGst.toLocaleString("en-IN")}.00</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5 text-xs sm:text-sm text-gray-500">
          <span>Tax collected for Govt (Zero commission on tax)</span>
          <span className="font-semibold text-gray-600">− ₹{calculations.gstCollected.toLocaleString("en-IN")}.00</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
          <span className="text-gray-700 font-medium">Net order base value</span>
          <span className="font-bold text-gray-900">₹{calculations.netOrderValue.toLocaleString("en-IN")}.00</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5">
          <span className="text-gray-700 font-medium">Growcord Commission ({calculations.ratePercent})</span>
          <span className="font-bold text-orange-600">₹{calculations.commission.toLocaleString("en-IN")}.00</span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-100 pb-2.5 text-xs sm:text-sm text-gray-500">
          <span>GST on commission @ 18% (Claimable as Input Tax Credit)</span>
          <span className="font-semibold text-gray-600">+ ₹{calculations.gstOnCommission.toLocaleString("en-IN")}.00</span>
        </div>

        <div className="flex justify-between items-center pt-3 border-t-2 border-gray-200">
          <div>
            <span className="text-lg sm:text-xl font-black text-gray-900 block">Total You Pay Growcord</span>
            <span className="text-xs text-gray-500">Billed monthly on GST invoice</span>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-orange-600">
            ₹{calculations.totalToGrowcord.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex justify-between items-center p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 mt-2">
          <span className="text-sm sm:text-base font-extrabold text-emerald-900">Net Revenue Retained by You</span>
          <span className="text-lg sm:text-2xl font-black text-emerald-700">
            ₹{calculations.youKeep.toLocaleString("en-IN")}
          </span>
        </div>
      </div>

      {/* Outcome Rules */}
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-6 text-center">
        <div className="rounded-2xl p-3 sm:p-4 bg-emerald-50 border border-emerald-200">
          <div className="text-lg sm:text-xl mx-auto w-fit text-emerald-600"><FaCheck /></div>
          <div className="font-bold text-xs sm:text-sm text-gray-900 mt-1">Delivered</div>
          <div className="text-[11px] text-emerald-700 font-semibold">{calculations.ratePercent} fee</div>
        </div>

        <div className="rounded-2xl p-3 sm:p-4 bg-red-50 border border-red-200">
          <div className="text-lg sm:text-xl mx-auto w-fit text-red-500"><FaTimes /></div>
          <div className="font-bold text-xs sm:text-sm text-gray-900 mt-1">Returned</div>
          <div className="text-[11px] text-red-600 font-semibold">₹0 Charge</div>
        </div>

        <div className="rounded-2xl p-3 sm:p-4 bg-red-50 border border-red-200">
          <div className="text-lg sm:text-xl mx-auto w-fit text-red-500"><FaTimes /></div>
          <div className="font-bold text-xs sm:text-sm text-gray-900 mt-1">Cancelled / RTO</div>
          <div className="text-[11px] text-red-600 font-semibold">₹0 Charge</div>
        </div>
      </div>
    </div>
  );
}

