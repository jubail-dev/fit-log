import React from "react";

export default function ExerciseDetailSkeleton() {
  return (
    <main className="min-h-screen bg-[#0F1014] text-white">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-8 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* ================= IMAGE SKELETON WITH ICON ================= */}
          <div className="w-full">
            <div
              className="
                w-full
                rounded-xl sm:rounded-2xl
                border border-white/10
                bg-white/10
                animate-pulse
                h-[400px]
                sm:h-[500px]
                md:h-[600px]
                lg:h-[calc(100vh-120px)]
                flex
                items-center
                justify-center
              "
            >
              {/* ইমেজ আইকন (যা নিশ্চিত করবে এটি ছবির জন্য স্কেলিটন) */}
              <svg
                className="w-16 h-16 sm:w-24 sm:h-24 text-white/20"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7a1 1 0 0 1 1.51-.276l2.3 2.3 2.193-3.14a1 1 0 0 1 1.562-.067l4.5 5.5a1 1 0 0 1-.294 1.411Z" />
              </svg>
            </div>
          </div>

          {/* ================= DETAILS SKELETON ================= */}
          <div className="flex flex-col min-w-0 space-y-4">

            {/* Title Skeleton */}
            <div className="h-10 sm:h-12 w-3/4 bg-white/25 rounded-lg animate-pulse" />

            {/* Description Skeleton */}
            <div className="space-y-2.5 max-w-2xl">
              <div className="h-4 bg-white/15 rounded w-full animate-pulse" />
              <div className="h-4 bg-white/15 rounded w-11/12 animate-pulse" />
              <div className="h-4 bg-white/15 rounded w-4/5 animate-pulse" />
            </div>

            {/* Muscle Groups Skeleton */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="w-20 h-8 rounded-full bg-white/20 animate-pulse" />
              <div className="w-28 h-8 rounded-full bg-white/20 animate-pulse" />
              <div className="w-20 h-8 rounded-full bg-white/20 animate-pulse" />
            </div>

            {/* ================= INFO TABLE SKELETON ================= */}
            <div
              className="
                mt-2
                overflow-hidden
                rounded-xl sm:rounded-2xl
                border border-white/10
                bg-white/5
              "
            >
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i !== 6 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="px-4 py-3.5">
                    <div className="h-4 w-24 bg-white/20 rounded animate-pulse" />
                  </div>
                  <div className="px-4 py-3.5">
                    <div className="h-4 w-32 bg-white/15 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            {/* ================= INSTRUCTIONS SKELETON ================= */}
            <div className="pt-2">
              <div className="h-7 w-40 bg-white/25 rounded mb-4 animate-pulse" />

              <div className="space-y-3">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-4 w-5 bg-white/25 rounded shrink-0 animate-pulse" />
                    <div className="h-4 bg-white/15 rounded w-full animate-pulse" />
                  </div>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS SKELETON ================= */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="h-12 w-full sm:w-1/2 bg-white/25 rounded-xl animate-pulse" />
              <div className="h-12 w-full sm:w-1/2 bg-white/20 rounded-xl animate-pulse" />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}