"use client";

import { useEffect, useState } from "react";
import StandingsTable from "./components/StandingsTable";
import { ScaleLoader } from "react-spinners";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export default function SoccerDashboard() {
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch("/api/soccer-dashboard/standings");

        const jsonData = await fetchResponse.json();

        if (jsonData.errorCode) {
          console.error(
            `Error fetching response ${jsonData.errorCode}: ${jsonData.message}`
          );
        }

        if (jsonData.standings) {
          const extractedData = jsonData.standings[0].table.map((item) => ({
            ...item,
            name: item.team.name.replace(/ FC$/, ""),
          }));
          setRowData(extractedData);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="h-[80vh] flex flex-col justify-center items-center ">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
        Premier League{" "}
        <span className="inline-flex whitespace-nowrap">
          Table
          <Dialog>
            <DialogTrigger asChild>
              <button className="ml-1 relative -top-2">
                <InformationCircleIcon
                  className="size-5 lg:size-6 shrink-0 hover:text-yellow-500"
                  strokeWidth={2}
                />
              </button>
            </DialogTrigger>
            <DialogContent className="bg-[#222223] w-[90%] text-white border-gray-700 rounded-xl">
              <DialogTitle className="text-center text-xl">
                Premiere League Table
              </DialogTitle>
              <DialogDescription className="mt-1 text-md max-h-[70vh] overflow-y-auto text-gray-300 leading-relaxed text-justify">
                This page is an expanded view of Premier League standings. Each
                table row represents a club and can be clicked to navigate to
                that team’s page, which highlights players from that club ranked
                within the top 100 scorers across the league. <br />
                <br />
                The tables seen on both pages are built with TanStack Table for
                fast rendering, sorting, and responsive design. Data is sourced
                from the football-data.org API under a free license. Because of
                this, requests are restricted to 10 calls per minute, and
                results are cached to stay within those limits while keeping
                pages responsive.
                <br />
                <br />
                By clicking on a team row, you can explore player-level scoring
                data, making it easy to compare top scorers across clubs and
                track how individual contributions affect league positions.
                <br />
                <br /> Feel free to explore the tables and team pages to see the
                latest Premier League standings!
              </DialogDescription>
              <DialogClose />
            </DialogContent>
          </Dialog>
        </span>
      </h1>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-[626px] w-[340px] md:w-full lg:w-[1000px] bg-[rgba(141,153,174,0.88)]">
          <ScaleLoader
            data-testid="loading-spinner"
            height={80}
            width={15}
            radius={15}
            margin={10}
            color="#ffffff"
            speedMultiplier={0.9}
          />
          <h2 className="mt-5 text-white text-2xl font-bold">Loading...</h2>
        </div>
      ) : (
        <StandingsTable rowData={rowData} />
      )}
    </div>
  );
}
