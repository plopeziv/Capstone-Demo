import { create } from "zustand";

export const useMunchiesStore = create((set) => ({
  filters: {
    cuisineFilters: [],
    price: ["d09ff4c9-e90e-42c7-b78b-bdc65e3331ce"],
    deliveryTime: [],
  },

  addCuisineFilter: (cuisineFilter) =>
    set((state) => {
      if (state.filters.cuisineFilters.includes(cuisineFilter)) {
        return state;
      }

      return {
        filters: {
          ...state.filters,
          cuisineFilters: [...state.filters.cuisineFilters, cuisineFilter],
        },
      };
    }),

  removeCuisineFilter: (cuisineFilter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        cuisineFilters: state.filters.cuisineFilters.filter(
          (cuisineItem) => cuisineItem !== cuisineFilter
        ),
      },
    }));
  },

  toggleCuisineFilter: (cuisineFilter) => {
    set((state) => {
      const isFilterInState =
        state.filters.cuisineFilters.includes(cuisineFilter);

      return {
        cuisineFilters: isFilterInState
          ? state.removeCuisineFilter(cuisineFilter)
          : state.addCuisineFilter(cuisineFilter),
      };
    });
  },

  clearFilters: () =>
    set({
      cuisine: [],
      price: [],
      deliveryTime: [],
    }),
}));
