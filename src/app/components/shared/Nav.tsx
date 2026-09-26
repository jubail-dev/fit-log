
"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import NavLogo from "@/assets/logo.png";
import Link from "next/link";
import { WorkOutContext } from "@/context/WorkOutProvider";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { todayPlan, savedPlan } = useContext(WorkOutContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow py-3 sm:py-4 bg-[#1E1E1E]">
      <nav className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between gap-3">
          {/* Left Side */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white shrink-0 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <Image
                src={NavLogo}
                alt="Nav Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />

              <h3 className="font-bold text-xl sm:text-2xl text-white">
                FITLOG
              </h3>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <ul className="flex gap-5 lg:gap-7 justify-center items-center text-base lg:text-xl text-[#9CA3AF]">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  className="hover:text-white transition"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Plan & Saved */}
          <div className="flex items-center gap-2 sm:gap-4 text-[#D1D5DB] text-sm sm:text-base lg:text-xl shrink-0">

            {/* Plan */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2 lg:gap-3"
            >
              <span>Plan</span>

              <span className="min-w-7 h-7 sm:min-w-8 sm:h-8 px-2 flex items-center justify-center text-xs sm:text-sm text-black bg-[#c2f800] rounded-full">
                {todayPlan.length}
              </span>
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 sm:gap-2 lg:gap-3"
            >
              <span>Saved</span>

              <span className="min-w-5 text-center">
                {savedPlan.length}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-800">
            <ul className="flex flex-col gap-3 sm:gap-4 text-base sm:text-xl text-[#9CA3AF]">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-white transition"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/my-plan"
                  onClick={() => setIsOpen(false)}
                  className="block py-1 hover:text-white transition"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;

