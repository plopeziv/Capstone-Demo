"use client";

import { useState, useEffect } from "react";
import CuisineFilter from "./CuisineFilter";

export default function FilterCard() {
  const [foodFilters, setFoodFilters] = useState([]);

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
    <div className="w-[239px] bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 p-[26px] text-[24px]">
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
            <div className="w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              0-10 min
            </div>
            <div className="w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              10 - 30 min
            </div>
            <div className="w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              30 - 60 min
            </div>
            <div className="w-fit px-2 py-1 my-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              1 hour+
            </div>
          </div>
        </div>
        <div className="mt-5">
          <span className="opacity-40">Price Range</span>
          <div className="flex flex-row mt-2 gap-x-1">
            <div className="w-fit px-2 py-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              $
            </div>
            <div className="w-fit px-2 py-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              $$
            </div>
            <div className="w-fit px-2 py-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              $$$
            </div>
            <div className="w-fit px-2 py-1 bg-[#FFFFFF] rounded-md shadow-xl shadow-black/5 border border-gray-200 text-[12px]">
              $$$$
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
