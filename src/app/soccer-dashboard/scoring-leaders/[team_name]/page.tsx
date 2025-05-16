"use client";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import TopSoccerPlayersTable from "../../components/TopSoccerPlayersTable";

export default function ScoringLeaders() {
  const { team_name } = useParams();
  const [rowData, setRowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const deslugify = (slug: string | string[]): string => {
    let singleSlug;

    if (Array.isArray(slug)) {
      singleSlug = slug.join(", ");
    } else {
      singleSlug = slug;
    }

    singleSlug = singleSlug.replace(/_/g, " ").replace(/%26/g, "&");

    return singleSlug;
  };

  const desluggedTeam = deslugify(team_name);

  const filterScorers = (teamName, standingsObject) => {
    if (!standingsObject) {
      return [];
    }
    const filteredStandings = standingsObject
      .filter((player) => {
        const isMatch = player.team.name === teamName;
        return isMatch;
      })
      .map((player) => ({
        name: player.player.name,
        dateOfBirth: player.player.dateOfBirth,
        nationality: player.player.nationality,
        position: player.player.section,
        goals: player.goals,
        assists: player.assists,
        matches: player.playedMatches,
      }));

    return filteredStandings;
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchResponse = await fetch("/api/soccer-dashboard/scorers");

        const jsonData = await fetchResponse.json();

        if (jsonData.errorCode) {
          console.error(
            `Error fetching response ${jsonData.errorCode}: ${jsonData.message}`
          );
        }

        const filteredPlayers = filterScorers(desluggedTeam, jsonData.scorers);
        setRowData(filteredPlayers);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [desluggedTeam]);

  return (
    <div className="text-2xl md:text-4xl lg:text-5xl sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] text-center">
      <h1>{desluggedTeam}</h1>
      <h2 className="mb-5">In Top 100</h2>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center h-[386px]  w-[340px] sm:w-[400px] md:w-[550px] lg:w-[900px] bg-[rgba(141,153,174,0.88)]">
          <ScaleLoader
            data-testid="loading-spinner"
            height={50}
            width={10}
            radius={15}
            margin={8}
            color="#ffffff"
            speedMultiplier={0.9}
          />
          <h2 className="mt-3 text-2xl">Loading...</h2>
        </div>
      ) : (
        <div className="flex justify-center aspect-[16/9]">
          <TopSoccerPlayersTable rowData={rowData} />
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={() => router.push("/soccer-dashboard")}
          className="px-6 py-3 bg-[#2b2d42] text-white text-lg sm:text-3xl rounded-lg hover:bg-gray-800"
          aria-label="Go back to the homepage"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
