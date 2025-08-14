"use client";

import { useState, useEffect } from "react";

import CuisineFilter from "./CuisineFilter";
import PriceFilter from "./PriceFilter";
import DeliveryTimeFilter from "./DeliveryTimeFilter";

import { priceFilters } from "../../../utils/restaurant-filters/price-filters";
import { deliveryTimeFilters } from "../../../utils/restaurant-filters/delivery-time-filters";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function FilterCard() {
  const [foodFilters, setFoodFilters] = useState([]);

  const clearFilters = useMunchiesStore((state) => state.clearFilters);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchResponse = await fetch("/api/code-challenge/filter");

        const jsonData = await fetchResponse.json();

        if (jsonData.filters) {
          setFoodFilters(jsonData.filters);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="self-start w-[239px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 p-[26px] text-[24px]">
      <div>
        <span>Filter</span>
        <div className="text-[12px] my-5">
          <div className="min-h-[80px]">
            <span className="opacity-40">Food Category</span>
            <div className="flex flex-row flex-wrap gap-x-1">
              {foodFilters.map((filter) => (
                <CuisineFilter key={filter.id} foodFilterData={filter} />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <span className="opacity-40">Delivery Time</span>
            <div className="flex flex-row flex-wrap gap-x-1">
              {deliveryTimeFilters.map((filter) => (
                <DeliveryTimeFilter
                  key={filter.id}
                  deliveryFilterData={filter}
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <span className="opacity-40">Price Range</span>
            <div className="flex flex-row gap-x-1">
              {priceFilters.map((filter) => (
                <PriceFilter key={filter.id} priceFilterData={filter} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center">
        <button
          className="text-xl w-[200px] px-2 py-1 bg-[#FFFFFF] rounded-xl shadow-xl shadow-black/5 border border-gray-200 hover:bg-black hover:text-white"
          onClick={() => {
            clearFilters();
          }}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}
