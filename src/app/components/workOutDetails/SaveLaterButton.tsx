"use client"

import { WorkOutContext } from '@/context/WorkOutProvider';
import { WorkOutType } from '@/types/workOut';
import React, { useContext } from 'react';


const SaveLaterButton = ({ workOut }: { workOut: WorkOutType }) => {
  const {savedPlan,setSavedPlan} = useContext(WorkOutContext)
    const handleSaveLaterButton = () => {
        setSavedPlan([...savedPlan,workOut])
    }
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
                onClick={() => handleSaveLaterButton()}
              >
                Save for later
              </button>
    );
};

export default SaveLaterButton;