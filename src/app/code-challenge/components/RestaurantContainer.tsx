"use client";

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function RestaurantContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const activeFilters = useMunchiesStore((state) => state.cuisineFilters);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch("/api/code-challenge/restaurants");

        const jsonData = await fetchResponse.json();

        if (jsonData.restaurants) {
          setOriginalData(jsonData.restaurants || []);
          setRestaurants(jsonData.originalData || []);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const areFiltersEmpty = activeFilters.every(
      (filterGroup) => filterGroup.length === 0
    );

    if (areFiltersEmpty) {
      setRestaurants(originalData);
      return;
    }

    const filteredData = originalData.filter((restaurant) =>
      restaurant.filter_ids.some((filterId) => activeFilters.includes(filterId))
    );

    setRestaurants(filteredData);
  }, [activeFilters, originalData]);

  if (isLoading) {
    return (
      <div className="rounded-md flex-1">
        <div className=" h-full flex flex-col items-center justify-center">
          <span className="text-4xl mt-3">Loading!</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md flex-1">
      <div className="flex flex-wrap justify-start gap-2">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
}
