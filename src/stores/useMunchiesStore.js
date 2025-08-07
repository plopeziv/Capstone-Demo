import { create } from "zustand";

export const useMunchiesStore = create((set) => ({
  cuisineFilters: ["59c5e8f0-8255-45e4-9674-1602e4f32998"],
  price: null,
  deliveryTime: null,

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

  clearFilters: () =>
    set({
      cuisine: null,
      price: null,
      deliveryTime: null,
    }),
}));
