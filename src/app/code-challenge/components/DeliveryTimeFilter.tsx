"use client";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function DeliveryTimeFilter(props) {
  const deliveryTimeData = props.deliveryFilterData;

  const deliveryTimeFilters = useMunchiesStore(
    (state) => state.filters.deliveryTime
  );
  const toggleFilter = useMunchiesStore(
    (state) => state.toggleDeliveryTimeFilter
  );

  const isActive = deliveryTimeFilters.some(
    (filter) => filter.id === deliveryTimeData.id
  );

  return (
    <button
      className={`w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px] ${
        isActive ? "bg-black text-white" : ""
      }`}
      onClick={() => toggleFilter(deliveryTimeData)}
    >
      {deliveryTimeData.name}
    </button>
  );
}
