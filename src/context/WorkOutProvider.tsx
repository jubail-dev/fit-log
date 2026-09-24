"use client"

import { WorkOutType } from '@/types/workOut';
import { createContext, ReactNode, useState } from 'react';

type WorkOutContextType = {
    todayPlan : WorkOutType[],
    setTodayPlan : React.Dispatch<React.SetStateAction<WorkOutType[]>>
    savedPlan : WorkOutType[],
    setSavedPlan : React.Dispatch<React.SetStateAction<WorkOutType[]>>
}

export const WorkOutContext = createContext<WorkOutContextType>({
    todayPlan : [],
    setTodayPlan : () => {},
    savedPlan : [],
    setSavedPlan : () => {}
});
const WorkOutProvider = ({children}: {children: ReactNode}) => {

    const [todayPlan, setTodayPlan] = useState<WorkOutType[]>([]);
    const [savedPlan, setSavedPlan] = useState<WorkOutType[]>([]);
    
    const shareData = {
        todayPlan,
        setTodayPlan,
        savedPlan,
        setSavedPlan
    }
    return (
        <WorkOutContext.Provider value={shareData}>{children}</WorkOutContext.Provider>
    );
};

export default WorkOutProvider;