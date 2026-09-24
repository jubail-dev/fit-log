import SaveLaterButton from "@/app/components/workOutDetails/SaveLaterButton";
import TodayPlanButton from "@/app/components/workOutDetails/TodayPlanButton";
import { getWorkOuts } from "@/lib/workOuts";
import { WorkOutType } from "@/types/workOut";
import Image from "next/image";
import React from "react";

const ExerciseDetailPage = async ({
  params,
}: {
  params: Promise<{ exerciseId: string }>;
}) => {
  const { exerciseId } = await params;

  const allWorkOuts = await getWorkOuts();

  const workOut = allWorkOuts.find(
    (workOut: WorkOutType) => workOut.id === Number(exerciseId),
  );

  if (!workOut) {
    return (
      <div className="min-h-screen bg-[#0F1014] flex items-center justify-center px-4">
        <h1 className="text-xl sm:text-2xl font-bold text-white text-center">
          Exercise not found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0F1014] text-white">
      <div className="container mx-auto px-4 sm:px-5 lg:px-6 py-6 sm:py-8 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* ================= IMAGE ================= */}
          <div className="w-full">
            <div
              className="
                relative
                overflow-hidden
                rounded-xl sm:rounded-2xl
                border border-[#292C33]
                bg-[#181A1F]
                h-[400px]
                sm:h-[500px]
                md:h-[600px]
                lg:h-[calc(100vh-120px)]
              "
            >
              <Image
                src={workOut.image}
                alt={workOut.name}
                width={700}
                height={1000}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col min-w-0">

            {/* Title */}
            <h1
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-bold
                uppercase
                tracking-wide
                leading-tight
                text-white
              "
            >
              {workOut.name}
            </h1>

            {/* Description */}
            <p
              className="
                mt-3
                sm:mt-4
                text-sm
                sm:text-base
                md:text-lg
                leading-6
                sm:leading-7
                text-gray-400
                max-w-2xl
              "
            >
              {workOut.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-4">
              {workOut.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="
                    px-3
                    sm:px-4
                    py-1.5
                    rounded-full
                    bg-[#C2F800]
                    text-black
                    text-xs
                    sm:text-sm
                    font-semibold
                  "
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* ================= INFO TABLE ================= */}
            <div
              className="
                mt-5
                overflow-hidden
                rounded-xl sm:rounded-2xl
                border border-[#292C33]
                bg-[#191B20]
              "
            >

              {/* Equipment */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Equipment
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 min-w-0">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 break-words">
                    {workOut.equipment}
                  </p>
                </div>
              </div>

              {/* Difficulty */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Difficulty
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 min-w-0">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 break-words">
                    {workOut.difficulty}
                  </p>
                </div>
              </div>

              {/* Sets */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Sets
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {workOut.sets}
                  </p>
                </div>
              </div>

              {/* Reps */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Reps
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {workOut.reps}
                  </p>
                </div>
              </div>

              {/* Duration */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Duration
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {workOut.duration} min
                  </p>
                </div>
              </div>

              {/* Calories */}
              <div className="grid grid-cols-2 border-b border-[#292C33]">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Calories
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {workOut.caloriesBurned} kcal
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="grid grid-cols-2">
                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm font-semibold uppercase">
                    Rating
                  </p>
                </div>

                <div className="px-3 sm:px-4 md:px-5 py-3 sm:py-3.5">
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {workOut.rating}
                  </p>
                </div>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-5 sm:mt-6">
              <h2
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                Instructions
              </h2>

              <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
                {workOut.instructions.map((instruction, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 text-gray-300"
                  >
                    <span className="text-[#C2F800] font-bold shrink-0">
                      {index + 1}.
                    </span>

                    <p className="leading-5 sm:leading-6 text-xs sm:text-sm md:text-base">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                mt-6
                pb-4
              "
            >
              <TodayPlanButton workOut ={workOut}></TodayPlanButton>

              <SaveLaterButton workOut ={workOut}></SaveLaterButton>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ExerciseDetailPage;