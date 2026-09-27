"use client";

import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const TodayPlanButton = ({ workOut }: { workOut: WorkOutType }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkOutContext);

  const handleTodayPlanButton = () => {
    // Check if the exercise is already added
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workOut.id
    );

    if (alreadyAdded) {
      toast.error(
        `${workOut.name} is already added to today's plan.`,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );

      return;
    }

    // Check maximum 5 exercises
    if (todayPlan.length >= 5) {
      toast.error(
        "You can only add 5 exercises to today's plan.",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );

      return;
    }

    // Add exercise to today's plan
    setTodayPlan([...todayPlan, workOut]);

    // Success message
    toast.success(
      `${workOut.name} added to today's plan!`,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      }
    );
  };

  return (
    <button
      className="
        w-full
        sm:w-auto
        bg-[#C2F800]
        text-black
        font-semibold
        px-6
        py-3
        rounded-full
        hover:bg-[#b4e800]
        transition
      "
      onClick={handleTodayPlanButton}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default TodayPlanButton;