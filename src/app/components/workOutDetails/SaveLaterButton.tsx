"use client"

import { WorkOutType } from '@/types/workOut';
import React from 'react';


const SaveLaterButton = ({ workOut }: { workOut: WorkOutType }) => {
    const handleSaveLaterButton = () => {
        console.log("HandleSaveLaterButton Clicked", workOut);
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