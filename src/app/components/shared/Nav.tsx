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
    <header className="shadow py-4 bg-[#1E1E1E]">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            <Link href="/" className="flex gap-4 justify-center items-center">
              <Image
                src={NavLogo}
                alt="Nav Logo"
                width={40}
                height={40}
              />
              <h3 className="font-bold text-2xl text-white">FITLOG</h3>
            </Link>
          </div>

          <div className="hidden md:flex">
            <ul className="flex gap-6 justify-center items-center text-xl text-[#9CA3AF]">
              <li>
                <Link href="/">Workouts</Link>
              </li>
              <li>
                <Link href="/my-plan">MY Plan</Link>
              </li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center items-center text-[#D1D5DB] text-xl">
            <Link
              href="/my-plan"
              className="flex gap-4 justify-center items-center"
            >
              <span>Plan</span>
              <span className="px-4 py-2 text-center text-[#000000] bg-[#c2f800] rounded-full">
                {todayPlan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex gap-4 justify-center items-center"
            >
              <span>Saved</span>
              <span>{savedPlan.length}</span>
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
            <ul className="flex flex-col gap-4 text-xl text-[#9CA3AF]">
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link
                  href="/my-plan"
                  onClick={() => setIsOpen(false)}
                >
                  MY Plan
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