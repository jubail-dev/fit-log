import Image from "next/image";
import React from "react";
import NavLogo from "@/assets/logo.png";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="shadow py-4 bg-[#1E1E1E]">
      <nav className="container mx-auto ">
        <div className=" flex justify-between items-center">
          {/* Logo area */}

          <div>
            <Link href="" className="flex gap-4 justify-center items-center">
              <Image
                src={NavLogo}
                alt="Nav Logo"
                width={40}
                height={40}
              ></Image>
              <h3 className="font-bold text-2xl text-white">FITLOG</h3>
            </Link>
          </div>

          {/* Nav Links Area */}

          <div>
            <ul className="flex gap-6 justify-center items-center text-xl text-[#9CA3AF]">
              <li>
                <Link href="work-outs">Workouts</Link>
              </li>

              <li>
                <Link href="my-plan">MY Plan</Link>
              </li>
            </ul>
          </div>

          {/* Right side baghes */}

          <div className="flex gap-4 justify-center items-center text-[#D1D5DB] text-xl">
            <Link
              href="/my-plan"
              className="flex gap-4 justify-center items-center"
            >
              <span>Plan</span>
              <span className="px-4 py-2 text-center text-[#000000] bg-[#c2f800] rounded-full">
                0
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex gap-4 justify-center items-center"
            >
              <span>Saved</span>
              <span>0</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
