import Image from "next/image";
import React from "react";
import FooterLogo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        
        <div className="flex items-center gap-2 sm:gap-3">
          <Image
            src={FooterLogo}
            alt="Footer Logo"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="text-white font-semibold text-base sm:text-lg tracking-wide">
            FITLOG
          </span>
        </div>

      
        <div className="text-center sm:text-right">
          <p className="text-[#D1D5DB] text-xs sm:text-sm leading-relaxed">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;