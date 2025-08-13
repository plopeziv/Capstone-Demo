"use client";

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function RestaurantContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const activeFilters = useMunchiesStore((state) => state.filters);

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
    const areFiltersEmpty = Object.values(activeFilters).every(
      (filterGroup) => Array.isArray(filterGroup) && filterGroup.length === 0
    );

    if (areFiltersEmpty) {
      setRestaurants(originalData);
      return;
    }

    const filteredData = originalData.filter((restaurant) => {
      const isInCuisineFilter = restaurant.filter_ids.some((filterId) =>
        activeFilters.cuisineFilters.includes(filterId)
      );

      const isInPriceFilter = activeFilters.price.includes(
        restaurant.price_range_id
      );

      return isInCuisineFilter || isInPriceFilter;
    });

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
