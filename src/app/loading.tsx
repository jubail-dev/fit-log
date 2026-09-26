import React from "react";

export default function GlobalHomeSkeleton() {
  return (
    <div className="bg-[#1E1E1E] min-h-screen text-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* ================= 1. HERO SECTION SKELETON ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-4">
          
          {/* Left: Text & CTA */}
          <div className="space-y-5">
            <div className="h-6 w-32 bg-white/15 rounded-full animate-pulse" />
            <div className="space-y-3">
              <div className="h-9 sm:h-12 lg:h-14 w-11/12 bg-white/25 rounded-xl animate-pulse" />
              <div className="h-9 sm:h-12 lg:h-14 w-4/5 bg-white/25 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-2 pt-1">
              <div className="h-4 w-full max-w-lg bg-white/15 rounded animate-pulse" />
              <div className="h-4 w-3/4 max-w-md bg-white/15 rounded animate-pulse" />
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-12 w-36 bg-white/25 rounded-full animate-pulse" />
              <div className="h-12 w-32 bg-white/15 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Right: Hero Image / Card Banner */}
          <div className="w-full h-64 sm:h-80 lg:h-[380px] bg-[#181A22] border border-white/10 rounded-3xl animate-pulse flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white/20"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7a1 1 0 0 1 1.51-.276l2.3 2.3 2.193-3.14a1 1 0 0 1 1.562-.067l4.5 5.5a1 1 0 0 1-.294 1.411Z" />
            </svg>
          </div>
        </div>

        {/* ================= 2. QUICK STATS BAR SKELETON ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#14161d] p-6 rounded-2xl border border-white/10">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex flex-col gap-2 items-center text-center p-2">
              <div className="h-8 sm:h-10 w-20 bg-white/25 rounded animate-pulse" />
              <div className="h-4 w-28 bg-white/15 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* ================= 3. CATEGORIES / FEATURED GRID SKELETON ================= */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div className="h-8 w-48 bg-white/25 rounded-lg animate-pulse" />
            <div className="h-5 w-20 bg-white/15 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[#181A22] border border-white/10 p-5 rounded-2xl flex flex-col items-center gap-3 animate-pulse"
              >
                <div className="w-12 h-12 bg-white/15 rounded-full" />
                <div className="h-4 w-20 bg-white/20 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= 4. POPULAR WORKOUT CARDS SKELETON ================= */}
        <div className="space-y-6">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <div className="h-8 w-56 sm:w-64 bg-white/25 rounded-lg animate-pulse" />
              <div className="h-4 w-40 sm:w-48 bg-white/15 rounded animate-pulse" />
            </div>
            <div className="h-9 w-28 bg-white/15 rounded-xl animate-pulse hidden sm:block" />
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-[#181A22] border border-white/10 rounded-2xl p-4 space-y-4 animate-pulse flex flex-col justify-between"
              >
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-white/10 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white/20"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7a1 1 0 0 1 1.51-.276l2.3 2.3 2.193-3.14a1 1 0 0 1 1.562-.067l4.5 5.5a1 1 0 0 1-.294 1.411Z" />
                  </svg>
                </div>

                {/* Info Text */}
                <div className="space-y-2.5">
                  <div className="h-6 w-3/4 bg-white/25 rounded" />
                  <div className="h-4 w-1/2 bg-white/15 rounded" />
                </div>

                {/* Footer Info & Action */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <div className="h-4 w-20 bg-white/20 rounded" />
                  <div className="h-9 w-24 bg-white/25 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}