"use client";

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

import { useMunchiesStore } from "../../../stores/useMunchiesStore";

export default function RestaurantContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const activeFilters = useMunchiesStore((state) => state.filters);

  // Fetches data from API
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

  // Filter logic that runs on filter or data change
  useEffect(() => {
    // Early return for no filters active
    const areFiltersEmpty = Object.values(activeFilters).every(
      (filterGroup) => Array.isArray(filterGroup) && filterGroup.length === 0
    );

    if (areFiltersEmpty) {
      setRestaurants(originalData);
      return;
    }

    // Helper function for upper and lower delivery time bounds
    const isDeliveryTimeInFilterScope = (restaurant) => {
      const deliveryTimeFilters = activeFilters.deliveryTime;
      const restaurantDeliveryTime = restaurant.delivery_time_minutes;

      return deliveryTimeFilters.some((deliveryTimeFilter) => {
        const greaterThanLowerBound =
          restaurantDeliveryTime >= deliveryTimeFilter.lowerBound;
        const lessThanUpperBound =
          restaurantDeliveryTime < deliveryTimeFilter.upperBound;

        return greaterThanLowerBound && lessThanUpperBound;
      });
    };

    // sets restaurants to be used for hierarchical filtering
    const availableRestaurants = originalData.filter((restaurant) => {
      if (activeFilters.cuisineFilters.length === 0) {
        return true;
      }

      return restaurant.filter_ids.some((filterId) =>
        activeFilters.cuisineFilters.includes(filterId)
      );
    });

    // Filters based on time and price for available restaurants
    const filteredData = availableRestaurants.filter((restaurant) => {
      // Early return for empty filters
      if (
        activeFilters.price.length === 0 &&
        activeFilters.deliveryTime.length === 0
      ) {
        return true;
      }

      const isInPriceFilter = activeFilters.price.includes(
        restaurant.price_range_id
      );

      const isInTimeThreshold = isDeliveryTimeInFilterScope(restaurant);

      return isInPriceFilter || isInTimeThreshold;
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
      {restaurants.length > 0 ? (
        <div className="flex flex-wrap justify-start gap-2">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
          ))}
        </div>
      ) : (
        <div className=" h-full flex flex-col justify-center text-center">
          <span className="text-4xl mt-3">No Restaurants Found!</span>
        </div>
      )}
    </div>
  );
}
