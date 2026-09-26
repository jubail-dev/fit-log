
"use client";

import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { Bounce, toast } from "react-toastify";

const SaveLaterButton = ({ workOut }: { workOut: WorkOutType }) => {
  const { savedPlan, setSavedPlan } = useContext(WorkOutContext);

  const handleSaveLaterButton = () => {
    const alreadySaved = savedPlan.some(
      (item) => item.id === workOut.id
    );

    if (alreadySaved) {
      toast.error(`${workOut.name} is already saved!`, {
        position: "top-right",
        autoClose: 3000,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    setSavedPlan([...savedPlan, workOut]);

    toast.success(`${workOut.name} saved for later!`, {
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
        border
        border-gray-500
        text-white
        font-semibold
        px-6
        py-3
        rounded-full
        hover:bg-white
        hover:text-black
        transition
      "
      onClick={handleSaveLaterButton}
    >
      Save for later
    </button>
  );
};

export default SaveLaterButton;

