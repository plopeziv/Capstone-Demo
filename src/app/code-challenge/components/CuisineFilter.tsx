"use client";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";
export default function CuisineFilter(props) {
  const cuisineFilterData = props.foodFilterData;

  const toggleFilter = useMunchiesStore((state) => state.toggleCuisineFilter);
  const cuisineFilters = useMunchiesStore(
    (state) => state.filters.cuisineFilters
  );

  const isActive = cuisineFilters.includes(cuisineFilterData.id);

  return (
    <div className="flex flex-row flex-wrap gap-x-1">
      <button
        className={`w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px] ${
          isActive ? "bg-black text-white" : ""
        }`}
        onClick={() => toggleFilter(cuisineFilterData.id)}
      >
        {cuisineFilterData.name}
      </button>
    </div>
  );
}
