import { create } from "zustand";

export const useMunchiesStore = create((set) => ({
  cuisineFilters: [],
  price: [],
  deliveryTime: [],

  addCuisineFilter: (cuisineFilter) =>
    set((state) =>
      state.cuisineFilters.includes(cuisineFilter)
        ? {}
        : { cuisineFilters: [...state.cuisineFilters, cuisineFilter] }
    ),

  removeCuisineFilter: (cuisineFilter) => {
    set((state) => ({
      typeFilters: state.cuisineFilters.filter(
        (cuisineItem) => cuisineItem !== cuisineFilter
      ),
    }));
  },

  toggleCuisineFilter: (cuisineFilter) => {
    set((state) => {
      const isFilterInState = state.cuisineFilters.includes(cuisineFilter);

      return {
        cuisineFilters: isFilterInState
          ? state.cuisineFilters.filter(
              (stateFilter) => stateFilter !== cuisineFilter
            )
          : [...state.cuisineFilters, cuisineFilter],
      };
    });
  },

  clearFilters: () =>
    set({
      cuisine: null,
      price: null,
      deliveryTime: null,
    }),
}));
