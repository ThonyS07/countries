import { create } from "zustand";
import { Activity} from "@prisma/client";

interface ActivitiesState {
	activities: Activity[];
}

export const useActivityStore = create<ActivitiesState>((set) => ({
	activities: [],

	setActivities: (activities: Activity[]) => set({ activities: activities }),
	
}));
