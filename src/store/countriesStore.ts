import { create } from "zustand";
import { Country } from "@prisma/client";

interface CountriesState {
	countries: Country[];
}

export const useCountryStore = create<CountriesState>((set) => ({
	countries: [],

	setActivities: (countries: Country[]) => set({ countries: countries }),
}));
