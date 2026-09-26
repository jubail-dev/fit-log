
"use client";

import { WorkOutContext } from "@/context/WorkOutProvider";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TodayPlanCard from "../components/shared/TodayPlanCard";
import SavePlanCard from "../components/shared/SavePlanCard";
import { WorkOutType } from "@/types/workOut";

const MyPlanPage = () => {
  const [sortBy, setSortBy] = useState<
    "duration" | "calories" | "rating"
  >("duration");

  const { todayPlan, savedPlan } = useContext(WorkOutContext);

  const [activeTab, setActiveTab] = useState("saved");

  const activePlan = activeTab === "today" ? todayPlan : savedPlan;

  const totalMinutes = activePlan.reduce(
    (total, workOut) => total + workOut.duration,
    0
  );

  const totalCalories = activePlan.reduce(
    (total, workOut) => total + workOut.caloriesBurned,
    0
  );

  const sortWorkouts = (workOuts: WorkOutType[]) => {
    const sortedWorkouts = [...workOuts];

    if (sortBy === "duration") {
      sortedWorkouts.sort((a, b) => b.duration - a.duration);
    }

    if (sortBy === "calories") {
      sortedWorkouts.sort(
        (a, b) => b.caloriesBurned - a.caloriesBurned
      );
    }

    if (sortBy === "rating") {
      sortedWorkouts.sort((a, b) => b.rating - a.rating);
    }

    return sortedWorkouts;
  };

  const sortedTodayPlan = sortWorkouts(todayPlan);
  const sortedSavedPlan = sortWorkouts(savedPlan);

  return (
    <div className="min-h-screen bg-[#1E1E1E] py-16 sm:py-20 lg:py-24">
      <div className="flex flex-col gap-6 sm:gap-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              MY PLAN
            </h1>

            <p className="text-sm sm:text-base text-[#8A92A0]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="text-xs sm:text-sm text-[#8A92A0]">
                Exercise
              </h3>

              <span className="text-3xl sm:text-4xl text-[#C2F800]">
                {activePlan.length}
              </span>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm text-[#8A92A0]">
                Minutes
              </h3>

              <span className="text-3xl sm:text-4xl text-white">
                {totalMinutes}
              </span>
            </div>

            <div>
              <h3 className="text-xs sm:text-sm text-[#8A92A0]">
                Calories
              </h3>

              <span className="text-3xl sm:text-4xl text-white">
                {totalCalories}
              </span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="tabs tabs-border w-full">
              <input
                type="radio"
                name="my_tabs_2"
                className="tab text-white text-sm sm:text-base"
                aria-label="Today's Plan"
                onChange={() => setActiveTab("today")}
              />

              <div className="tab-content bg-slate-800 p-3 sm:p-5 lg:p-6 rounded-b-box text-white">
                {todayPlan.length > 0 ? (
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {sortedTodayPlan.map((workOut) => (
                      <TodayPlanCard
                        key={workOut.id}
                        workOut={workOut}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 sm:py-20 text-center space-y-3 px-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                      Nothing here yet
                    </h1>

                    <p className="text-sm sm:text-base text-[#A1A1AA]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="inline-block py-3 px-6 sm:px-8 rounded-2xl bg-[#C2F800] font-semibold text-black hover:bg-[#b5e900] transition"
                    >
                      Go to workouts
                    </Link>
                  </div>
                )}
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                className="tab text-white text-sm sm:text-base"
                aria-label="Saved"
                defaultChecked
                onChange={() => setActiveTab("saved")}
              />

              <div className="tab-content bg-slate-800 p-3 sm:p-5 lg:p-6 rounded-b-box text-white">
                {savedPlan.length > 0 ? (
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {sortedSavedPlan.map((workOut) => (
                      <SavePlanCard
                        key={workOut.id}
                        workOut={workOut}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-16 sm:py-20 text-center space-y-3 px-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                      Nothing here yet
                    </h1>

                    <p className="text-sm sm:text-base text-[#A1A1AA]">
                      Browse the library and add a lift to get today moving.
                    </p>

                    <Link
                      href="/"
                      className="inline-block py-3 px-6 sm:px-8 rounded-2xl bg-[#C2F800] font-semibold text-black hover:bg-[#b5e900] transition"
                    >
                      Go to workouts
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as "duration" | "calories" | "rating"
                )
              }
              className="absolute right-0 top-0 bg-[#14161D] text-white border border-gray-700 rounded-lg px-2 sm:px-4 py-2 text-xs sm:text-sm max-w-[120px] sm:max-w-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;
