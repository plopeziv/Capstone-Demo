"use client";

import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import { BarLoader } from "react-spinners";

export default function FoodContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [foodFilters, setFoodFilters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch("/api/code-challenge/filter");

        const jsonData = await fetchResponse.json();

        if (jsonData.filters) {
          setFoodFilters(jsonData.filters);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="overflow-x-scroll">
      {isLoading ? (
        <div className="h-[105px] flex items-center justify-center">
          <BarLoader width={200} />
        </div>
      ) : (
        <div className="h-[105px] flex flex-row gap-[10px] items-center p-2">
          {foodFilters.map((filter) => (
            <FoodCard key={filter.id} foodFilterData={filter} />
          ))}
        </div>
      )}
    </div>
  );
}
