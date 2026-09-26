
"use client";

import { WorkOutType } from "@/types/workOut";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

type WorkOutContextType = {
  todayPlan: WorkOutType[];
  setTodayPlan: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
  savedPlan: WorkOutType[];
  setSavedPlan: React.Dispatch<React.SetStateAction<WorkOutType[]>>;
};

export const WorkOutContext = createContext<WorkOutContextType>({
  todayPlan: [],
  setTodayPlan: () => {},
  savedPlan: [],
  setSavedPlan: () => {},
});

const WorkOutProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<WorkOutType[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const data = localStorage.getItem("todayPlan");

    return data ? JSON.parse(data) : [];
  });

  const [savedPlan, setSavedPlan] = useState<WorkOutType[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const data = localStorage.getItem("savedPlan");

    return data ? JSON.parse(data) : [];
  });

  // Save todayPlan to localStorage
  useEffect(() => {
    localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
  }, [todayPlan]);

  // Save savedPlan to localStorage
  useEffect(() => {
    localStorage.setItem("savedPlan", JSON.stringify(savedPlan));
  }, [savedPlan]);

  const shareData = {
    todayPlan,
    setTodayPlan,
    savedPlan,
    setSavedPlan,
  };

  return (
    <WorkOutContext.Provider value={shareData}>
      {children}
    </WorkOutContext.Provider>
  );
};

export default WorkOutProvider;
