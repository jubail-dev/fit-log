
import { WorkOutType } from "@/types/workOut";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkOutCard = ({ workOut }: { workOut: WorkOutType }) => {
  return (
    <Link
      href={`/exercise/${workOut.id}`}
      className="group block w-full"
      id="Library"
    >
      <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#121417] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-2xl">

        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={workOut.image}
            alt={workOut.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">

          {/* Muscle Groups */}
          <div className="mb-3 flex flex-wrap gap-2">
            {workOut.muscleGroups.map((group, index) => (
              <span
                key={index}
                className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-bold uppercase tracking-wider text-black"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="line-clamp-1 text-2xl font-extrabold uppercase tracking-wide text-white">
            {workOut.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">
            {workOut.equipment}
          </p>

          {/* Divider */}
          <div className="my-4 border-t border-white/10" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 text-sm text-gray-400">

            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <span>{workOut.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 23c-4.97 0-9-3.8-9-8.5 0-4.37 3.32-7.85 6.78-11.23a1 1 0 011.44 0C14.68 6.65 18 10.13 18 14.5c0 4.7-4.03 8.5-9 8.5zm0-17.65C9.32 8.1 6 11.25 6 14.5 6 17.54 8.69 20 12 20s6-2.46 6-5.5c0-3.25-3.32-6.4-6-9.15z" />
              </svg>

              <span>{workOut.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-end gap-1.5">
              <svg
                className="h-4 w-4 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>

              <span>{workOut.rating}</span>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkOutCard;

