"use client"

import { WorkOutContext } from '@/context/WorkOutProvider';
import { WorkOutType } from '@/types/workOut';
import React, { useContext } from 'react';

const TodayPlanButton = ({ workOut }: { workOut: WorkOutType }) => {
    const {todayPlan, setTodayPlan} = useContext(WorkOutContext)
    const handleTodayPlanButton = () => {
        setTodayPlan([...todayPlan,workOut])
    }
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
                onClick={() => handleTodayPlanButton()}
              >
                Add to today&apos;s plan
              </button>
    );
};

export default TodayPlanButton;