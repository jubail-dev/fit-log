import { WorkOutType } from "@/types/workOut";

export const getWorkOuts = async (): Promise<WorkOutType[]> => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};
