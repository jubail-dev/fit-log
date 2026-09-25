import { WorkOutType } from "@/types/workOut";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiCheck, FiClock, FiStar, FiX } from "react-icons/fi";
import { IoFlameOutline } from "react-icons/io5";
import { WorkOutContext } from "@/context/WorkOutProvider";
interface TodaySaveCardProps {
  workOut: WorkOutType;
}

const SavePlanCard = ({ workOut }: TodaySaveCardProps) => {
    const {savedPlan,setSavedPlan} = useContext(WorkOutContext)
    const handleRemoveButton = () => {
        const updatedPlan = savedPlan.filter((item) => item.id !== workOut.id);
        setSavedPlan(updatedPlan);
    }
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#14161d] text-white p-5 rounded-2xl border border-gray-800 hover:border-[#c2f800]/30 transition duration-300">
      <div className="flex items-center gap-5 w-full sm:w-auto">
        <div className="relative">
          <Image
            src={workOut.image}
            alt={workOut.name}
            width={300}
            height={200}
            className="w-32 h-24 object-cover rounded-xl"
          />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{workOut.name}</h3>

          <p className="text-base text-gray-400 mt-1">{workOut.equipment}</p>

          <div className="flex flex-wrap items-center gap-3 mt-3">
            <span className="flex items-center gap-2 text-sm text-gray-300">
              <FiClock className="text-[#c2f800] text-base" />
              {workOut.duration} min
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-300">
              <IoFlameOutline className="text-[#c2f800] text-base" />
              {workOut.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-300">
              <FiStar className="text-[#c2f800] text-base" />
              {workOut.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
        <Link href={`/exercise/${workOut.id}`}>
          <button className="px-5 py-2.5 text-sm font-semibold text-white border border-gray-600 rounded-full hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>

        <button
          className="p-2 text-gray-400 hover:text-red-400 transition"
          aria-label="Remove workout"
          onClick={handleRemoveButton}
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default SavePlanCard;
