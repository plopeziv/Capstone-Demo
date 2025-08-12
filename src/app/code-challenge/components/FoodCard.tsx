"use client";

import Image from "next/image";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function FoodCard(props) {
  const foodFilterData = props.foodFilterData;

  const toggleFilter = useMunchiesStore((state) => state.toggleCuisineFilter);
  const cuisineFilters = useMunchiesStore(
    (state) => state.filters.cuisineFilters
  );

  const isActive = cuisineFilters.includes(foodFilterData.id);

  return (
    <button
      onClick={() => toggleFilter(foodFilterData.id)}
      className={`shrink-0 w-[160px] h-[80px] rounded-md p-1 text-[14px] flex justify-between cursor-pointer transition-all
        bg-white shadow-xl shadow-black/5
        ${isActive ? "ring ring-blue-400 shadow-lg shadow-blue-500/50" : ""}`}
    >
      <span>{foodFilterData.name}</span>
      <Image
        src={`/api/code-challenge${foodFilterData.image_url}`}
        alt={`${foodFilterData.name} icon`}
        width={80}
        height={80}
      />
    </button>
  );
}
