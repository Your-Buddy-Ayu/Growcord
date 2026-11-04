"use client";

import { useState } from "react";
import GrowshipLogo from "../../../assets/GrowShipLogo.png";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  ["How it works", "/growship/how-it-works"],
  ["Capabilities", "/growship/capabilities"],
  ["Courier intelligence", "/growship/intelligence"],
  ["FAQs", "/growship/faq"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#061a34]">
      {/* Main Header Bar */}
      <div className="flex items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo */}
        <a href="/growship" className="group inline-flex items-center gap-2.5">
          <img
            src={GrowshipLogo.src}
            alt="Growship"
            className="h-16 sm:h-20 lg:h-24 object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://ship.gc.mw"
            className="text-sm font-semibold text-slate-100 transition hover:text-[#f47721]"
          >
            Sign in
          </a>
          <a
            href="https://growship.in/start"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#061b35] transition hover:bg-orange-50"
          >
            Start shipping
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/20 p-2.5 text-white transition hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-t border-white/10 bg-[#061a34] px-5 pb-6 pt-3 shadow-2xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block rounded-lg px-4 py-3.5 text-base font-semibold text-slate-200 transition hover:bg-white/5 hover:text-[#f47721]"
              >
                {label}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5">
              <a
                href="https://ship.gc.mw"
                className="block rounded-lg border border-white/20 px-4 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Sign in
              </a>
              <a
                href="https://growship.in/start"
                className="block rounded-xl bg-[#f47721] px-4 py-3.5 text-center text-base font-bold text-[#071d3a] shadow-lg shadow-orange-500/20 transition hover:bg-[#d45a15] hover:text-white"
              >
                Start shipping
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
