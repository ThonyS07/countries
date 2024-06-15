import { create } from "zustand";

interface ActivitiesState {
	activities: [];
}

const useStore = create((set) => ({
	bears: [],

	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	removeAllBears: () => set({ bears: 0 }),
	updateBears: (newBears) => set({ bears: newBears }),
}));
