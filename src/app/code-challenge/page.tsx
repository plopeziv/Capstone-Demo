import FilterCard from "./components/FilterCard";
import FoodContainer from "./components/FoodContainer";
import RestaurantContainer from "./components/RestaurantContainer";

import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function MunchiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-3">
      <div className="h-[68px]"></div>
      <div className="text-[40px] text-black m-4">
        <span className="inline-flex whitespace-nowrap">
          Munchies{" "}
          <InformationCircleIcon
            className="inline ml-1 relative top-2 size-6 shrink-0 "
            strokeWidth={2}
          />
        </span>
      </div>
      ;
      <main className="flex flex-1 space-x-4 text-black">
        <FilterCard />
        <div className="flex-1 min-w-0 flex flex-col">
          <FoodContainer />
          <div className="my-4 text-[40px]">Restaurant&apos;s</div>
          <RestaurantContainer />
        </div>
      </main>
    </div>
  );
}
