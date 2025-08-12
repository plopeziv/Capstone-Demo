import FilterCard from "./components/FilterCard";
import FoodContainer from "./components/FoodContainer";
import RestaurantContainer from "./components/RestaurantContainer";
import MunchiesHeader from "./components/MunchiesHeader";

export default function MunchiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="h-[68px]"></div>
      <MunchiesHeader />
      <div className="flex-1">
        <main className="flex h-full space-x-4 text-black">
          <FilterCard />
          <div className="flex-1 min-w-0 flex flex-col">
            <FoodContainer />
            <div className="my-4 text-[40px]">Restaurant&apos;s</div>
            <RestaurantContainer />
          </div>
        </main>
      </div>
    </div>
  );
}
