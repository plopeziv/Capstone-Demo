"use client";

import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch("/api/code-challenge/restaurants");

        const jsonData = await fetchResponse.json();

        if (jsonData.restaurants) {
          setRestaurants(jsonData.restaurants);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="rounded-md flex-1">
      {isLoading ? (
        <div className=" h-full flex flex-col items-center justify-center">
          <span className="text-4xl mt-3">Loading!</span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-start gap-2">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurantData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
}
