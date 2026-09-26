import React from "react";

export default function MyPlanSkeleton() {
  return (
    <div className="bg-[#1E1E1E] py-16 sm:py-20 lg:py-24 min-h-screen">
      <div className="flex flex-col gap-6 sm:gap-8">
        
        {/* ================= HEADER & STATS SKELETON ================= */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          
          {/* Title & Subtitle */}
          <div className="flex flex-col gap-2">
            <div className="h-8 sm:h-10 w-40 sm:w-52 bg-white/25 rounded-lg animate-pulse" />
            <div className="h-4 sm:h-5 w-64 sm:w-96 bg-white/15 rounded animate-pulse" />
          </div>

          {/* Stats Counter Row (Exercise, Minutes, Calories) */}
          <div className="flex justify-between items-center gap-4">
            {/* Exercise Stat */}
            <div className="flex flex-col gap-2">
              <div className="h-3 sm:h-4 w-16 bg-white/15 rounded animate-pulse" />
              <div className="h-8 sm:h-10 w-12 bg-white/25 rounded animate-pulse" />
            </div>

            {/* Minutes Stat */}
            <div className="flex flex-col gap-2">
              <div className="h-3 sm:h-4 w-16 bg-white/15 rounded animate-pulse" />
              <div className="h-8 sm:h-10 w-16 bg-white/25 rounded animate-pulse" />
            </div>

            {/* Calories Stat */}
            <div className="flex flex-col gap-2">
              <div className="h-3 sm:h-4 w-16 bg-white/15 rounded animate-pulse" />
              <div className="h-8 sm:h-10 w-16 bg-white/25 rounded animate-pulse" />
            </div>
          </div>
        </div>

        {/* ================= TABS & CARDS LIST SKELETON ================= */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Header & Sort Dropdown Placeholder */}
          <div className="relative border-b border-white/10 pb-3 flex justify-between items-center">
            <div className="flex gap-4">
              <div className="h-6 w-28 bg-white/25 rounded animate-pulse" />
              <div className="h-6 w-20 bg-white/15 rounded animate-pulse" />
            </div>

            {/* Sort Select Box */}
            <div className="h-8 w-28 bg-white/15 rounded-lg animate-pulse" />
          </div>

          {/* Cards Container Area */}
          <div className="bg-[#14161d] p-3 sm:p-5 lg:p-6 rounded-b-2xl border border-white/10 border-t-0 space-y-4">
            
            {/* 3টি কার্ডের স্কেলিটন লুপ */}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#181A22] p-5 rounded-2xl border border-white/10"
              >
                {/* Left Side: Image + Details Skeleton */}
                <div className="flex items-center gap-5 w-full sm:w-auto">
                  
                  {/* Image Box with Photo Icon */}
                  <div className="w-32 h-24 bg-white/10 rounded-xl shrink-0 animate-pulse flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white/20"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7a1 1 0 0 1 1.51-.276l2.3 2.3 2.193-3.14a1 1 0 0 1 1.562-.067l4.5 5.5a1 1 0 0 1-.294 1.411Z" />
                    </svg>
                  </div>

                  {/* Title, Subtitle & Meta Badges */}
                  <div className="space-y-2.5 w-full">
                    <div className="h-6 w-36 sm:w-48 bg-white/25 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-white/15 rounded animate-pulse" />

                    {/* Meta Info (Duration, Calories, Rating) */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <div className="h-4 w-16 bg-white/20 rounded animate-pulse" />
                      <div className="h-4 w-20 bg-white/20 rounded animate-pulse" />
                      <div className="h-4 w-12 bg-white/20 rounded animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Buttons Skeleton */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <div className="h-10 w-28 bg-white/20 rounded-full animate-pulse" />
                  <div className="h-8 w-8 bg-white/15 rounded-full animate-pulse" />
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}