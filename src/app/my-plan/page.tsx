
"use client";

import { WorkOutContext } from "@/context/WorkOutProvider";
import Link from "next/link";
import React, { useContext, useState } from "react";
import TodayPlanCard from "../components/shared/TodayPlanCard";
import SavePlanCard from "../components/shared/SavePlanCard";

const MyPlanPage = () => {
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

  return (
    <div className="bg-[#1E1E1E] py-24">
      <div className="flex flex-col gap-4">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-white">MY PLAN</h1>

            <p className="text-[#8A92A0]">
              Cap of five lifts for today. Finish them, then load more.
            </p>
          </div>

          <div className="flex justify-between items-center gap-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#8A92A0]">Exercise</h3>

              <span className="text-4xl text-[#c2f800]">
                {activePlan.length}
              </span>
            </div>

            <div>
              <h3 className="text-[#8A92A0]">Minutes</h3>

              <span className="text-white text-4xl">
                {totalMinutes}
              </span>
            </div>

            <div>
              <h3 className="text-[#8A92A0]">Calories</h3>

              <span className="text-white text-4xl">
                {totalCalories}
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="tabs tabs-border container mx-auto relative">
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-white"
              aria-label="Today's Plan"
              onChange={() => setActiveTab("today")}
            />

            <div className="tab-content bg-slate-800 p-6 rounded-b-box text-white">
              {todayPlan.length > 0 ? (
                <div>
                  {todayPlan.map((workOut) => (
                    <TodayPlanCard
                      key={workOut.id}
                      workOut={workOut}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center space-y-3">
                  <h1 className="text-3xl font-bold text-white">
                    Nothing here yet
                  </h1>

                  <p className="text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link href="/">
                    <button className="inline-block py-3 px-6 sm:px-8 rounded-2xl bg-[#C2F800] font-semibold text-black hover:bg-[#b5e900] transition">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-white"
              aria-label="Saved"
              defaultChecked
              onChange={() => setActiveTab("saved")}
            />

            <div className="tab-content bg-slate-800 p-6 rounded-b-box text-white">
              {savedPlan.length > 0 ? (
                <div>
                  {savedPlan.map((workOut) => (
                    <SavePlanCard
                      key={workOut.id}
                      workOut={workOut}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center space-y-3">
                  <h1 className="text-3xl font-bold text-white">
                    Nothing here yet
                  </h1>

                  <p className="text-[#A1A1AA]">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link href="/">
                    <button className="inline-block py-3 px-6 sm:px-8 rounded-2xl bg-[#C2F800] font-semibold text-black hover:bg-[#b5e900] transition">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              )}
            </div>

            <div>
                <select className="absolute right-0 top-0 bg-[#14161d] text-white border border-gray-700 rounded-lg px-4 py-2 text-sm">
              <option>Sort By</option>
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPlanPage;

