import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

const RemoveButton = ({ workOut }: { workOut: WorkOutType }) => {
  const { todayPlan, setTodayPlan } = useContext(WorkOutContext);
  const handleRemoveButton = () => {
    const updatedPlan = todayPlan.filter((item) => item.id !== workOut.id);
    setTodayPlan(updatedPlan);
    toast.error(`${workOut.name} removed from today's plan!`, {
      position: "top-right",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
      icon: <FiX className="text-red-500 w-5 h-5" />
    });
  };
  return (
    <div>
      <button
        className="p-2 text-gray-400 hover:text-red-400 transition"
        aria-label="Remove workout"
        onClick={handleRemoveButton}
      >
        <FiX className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RemoveButton;
