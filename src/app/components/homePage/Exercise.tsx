import { getWorkOuts } from "@/lib/workOuts";
import { WorkOutType } from "@/types/workOut";
import React from "react";
import WorkOutCard from "../shared/WorkOutCard";

const Exercise = async () => {
  const workOuts: WorkOutType[] = await getWorkOuts();

  return (
    <div className="bg-[#1E1E1E]">
      <div className="container mx-auto pb-10 space-y-4 px-4">
        <h1 className="text-white font-bold text-3xl">
          The Library
        </h1>

        <p className="text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workOuts.map((workOut) => (
            <WorkOutCard
              key={workOut.id}
              workOut={workOut}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise;