import React from "react";

const MyPlanPage = () => {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-extrabold  uppercase">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Card Section */}
        <div className="bg-[#181a20] border border-gray-800/80 rounded-xl p-4 sm:p-6 grid grid-cols-3 divide-x divide-gray-800">
          <div className="flex flex-col justify-center px-2 sm:px-4">
            <span className="text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Exercises
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-[#c2f800]">
              0
            </span>
          </div>

          <div className="flex flex-col justify-center px-4 sm:px-6">
            <span className="text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Minutes
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-white">
              0
            </span>
          </div>

          <div className="flex flex-col justify-center px-4 sm:px-6">
            <span className="text-xs sm:text-sm font-medium text-gray-400 mb-1">
              Calories
            </span>
            <span className="text-2xl sm:text-4xl font-extrabold text-white">
              0
            </span>
          </div>
        </div>

        {/* Filter Tabs & Sort By Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
          {/* Tabs */}
          <div className="inline-flex bg-[#181a20] p-1 rounded-xl border border-gray-800/80 self-start">
            <button className="px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-[#222630] text-[#c2f800] transition">
              Today`s Plan
            </button>
            <button className="px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-gray-400 hover:text-white transition">
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex flex-col gap-1.5 w-full sm:w-48">
            <label className="text-xs text-gray-400 font-medium">Sort By</label>
            <div className="relative">
              <select className="w-full bg-[#181a20] text-white border border-gray-800/80 rounded-xl px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-gray-600 appearance-none cursor-pointer pr-8">
                <option>Duration</option>
                <option>Name</option>
                <option>Calories</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State Content Card */}
        <div className="bg-[#181a20] border border-gray-800/80 rounded-xl py-14 px-6 text-center flex flex-col items-center justify-center space-y-3 min-h-[220px]">
          <h2 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
            NOTHING HERE YET
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md">
            Browse the library and add a lift to get today moving.
          </p>
          <div className="pt-2">
            <button className="bg-[#c2f800] hover:bg-[#b0e000] text-black font-bold px-6 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer">
              Go to workouts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
