import { WorkOutContext } from "@/context/WorkOutProvider";
import { WorkOutType } from "@/types/workOut";
import React, { useContext } from "react";
import { FiCheck } from "react-icons/fi";

const MarkAsButton = ({ workOut }: { workOut: WorkOutType }) => {
    const {todayPlan,setTodayPlan} = useContext(WorkOutContext)
    const handleMarkAsDoneButton = () =>{
        const updatedPlan = todayPlan.filter((item) => item.id !== workOut.id);
        setTodayPlan(updatedPlan);
    }
  return (
    <div>
      <button
         
          className="px-5 py-2.5 text-sm font-bold text-black bg-[#c2f800] hover:bg-[#b5e900] rounded-full flex items-center gap-2 transition"
          onClick={handleMarkAsDoneButton}
        >
          <FiCheck className="w-4 h-4" />
          Mark as Done
        </button>
    </div>
  );
};

export default MarkAsButton;
