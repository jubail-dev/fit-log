
"use client";

import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const TodayPlanButton = ({ workOut }: { workOut: WorkOutType }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkOutContext);

  const handleTodayPlanButton = () => {
    const alreadyAdded = todayPlan.some(
      (item) => item.id === workOut.id
    );

    if (alreadyAdded) {
      toast.error(`${workOut.name} is already in added`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

      return;
    }

    setTodayPlan([...todayPlan, workOut]);

    toast.success(`${workOut.name} added to today's plan!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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

