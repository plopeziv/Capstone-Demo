import FilterCard from "./components/FilterCard";
import FoodContainer from "./components/FoodContainer";
import RestaurantContainer from "./components/RestaurantContainer";

import { InformationCircleIcon } from "@heroicons/react/24/outline";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function MunchiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white p-3">
      <div className="h-[68px]"></div>
      <div className="text-[40px] text-black m-4">
        <span className="inline-flex whitespace-nowrap">
          Munchies{" "}
          <Dialog>
            <DialogTrigger asChild>
              <button className="ml-1 relative -top-2">
                <InformationCircleIcon
                  className="size-6 shrink-0 hover:text-yellow-500"
                  strokeWidth={2}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="w-[90%] rounded-xl text-black">
              <DialogTitle className="text-center">
                Munchies Coding Challenge
              </DialogTitle>
              <DialogDescription className="mt-1 text-black max-h-[70vh] overflow-y-auto leading-relaxed text-justify">
                This page is an expanded version of Punchkick’s{" "}
                <a
                  href="https://github.com/Punchkick/code-assessment/blob/main/assessment.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  coding challenge
                </a>
                . This mock restaurant app displays open and closed restaurant
                cards that could theoretically lead to new pages in a real world
                application. The design was based on Punchkick&apos;s{" "}
                <a
                  href="https://www.figma.com/design/263XJno7ii0uEaarJP9Ydw/Umain-Tech-Case?node-id=27-5682&t=bDceZ8gFoQjiqd9O-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  figma
                </a>{" "}
                and is built upon their Munchies{" "}
                <a
                  href="https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api-docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-500"
                >
                  API
                </a>
                . <br />
                <br />
                Restaurant data and filters are pulled from Punchkick&apos;s
                API. Results are cached for 5 minutes in accordance with their
                challenge requirements. This is fetched on the page&apos;s card
                containers and helps populate the information necessary for
                every restaurant card. <br />
                <br />
                You can refine results using the top filter header and the side
                filter panel. Filtering works hierarchically: first by cuisine
                type, then by price and delivery time. Filter state is managed
                globally using Zustand. <br />
                <br />
                Feel free to explore the filters and restaurant cards to see how
                the app organizes and displays the data!
              </DialogDescription>
              <DialogClose />
            </DialogContent>
          </Dialog>
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
