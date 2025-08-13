import { create } from "zustand";

export const useMunchiesStore = create((set) => ({
  filters: {
    cuisineFilters: [],
    price: [],
    deliveryTime: [],
  },

  // cuisineFilters
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

  // price
  addPriceFilter: (priceFilter) =>
    set((state) => {
      if (state.filters.price.includes(priceFilter)) {
        return state;
      }

      return {
        filters: {
          ...state.filters,
          price: [...state.filters.price, priceFilter],
        },
      };
    }),

  removePriceFilter: (priceFilter) => {
    set((state) => ({
      filters: {
        ...state.filters,
        price: state.filters.price.filter((price) => price !== priceFilter),
      },
    }));
  },

  togglePriceFilter: (priceFilter) => {
    set((state) => {
      const isFilterInState = state.filters.price.includes(priceFilter);

      return {
        cuisineFilters: isFilterInState
          ? state.removePriceFilter(priceFilter)
          : state.addPriceFilter(priceFilter),
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
