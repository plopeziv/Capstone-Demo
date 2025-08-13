"use client";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function PriceFilter(props) {
  const priceFilterData = props.priceFilterData;

  const priceFilters = useMunchiesStore((state) => state.filters.price);
  const toggleFilter = useMunchiesStore((state) => state.togglePriceFilter);

  const isActive = priceFilters.includes(priceFilterData.id);

  return (
    <button
      className={`w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px] ${
        isActive ? "bg-black text-white" : ""
      }`}
      onClick={() => toggleFilter(priceFilterData.id)}
    >
      {priceFilterData.range}
    </button>
  );
}
