import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { FiX } from "react-icons/fi";

const RemoveButton = ({ workOut }: { workOut: WorkOutType }) => {
    const {todayPlan,setTodayPlan} = useContext(WorkOutContext)
    const handleRemoveButton = () =>{
        const updatedPlan = todayPlan.filter((item) => item.id !== workOut.id);
        setTodayPlan(updatedPlan);
    }
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
