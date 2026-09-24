
import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-32 xl:py-40 bg-[#1E1E1E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-12 xl:gap-16">

          {/* Content */}
          <div className="flex flex-col space-y-4 text-center lg:text-left">
            <h3 className="text-[#C2F800] text-sm sm:text-md font-bold tracking-wide">
              WORKOUT LIBRARY
            </h3>

            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-tight">
              TRAIN WITH INTENT. LOG{" "}
              <br className="hidden sm:block" />
              EVERY SET.
            </h1>

            <p className="text-base sm:text-lg xl:text-xl text-[#9CA3AF] max-w-2xl mx-auto lg:mx-0">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today's plan, and watch the week's work add up.
            </p>

            <div className="pt-2">
              <a href="#Library">
                <button className="inline-block py-3 px-6 sm:px-8 rounded-2xl bg-[#C2F800] font-semibold text-black hover:bg-[#b5e900] transition">
                  BROWSE WORKOUTS
                </button>
              </a>
            </div>
          </div>

          {/* Banner Image */}
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg flex justify-center">
            <Image
              src={BannerImage}
              alt="Banner Image"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;

