import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premier League Tables",
  description:
    "This portion of the app consumes a REST api from football-data.org to present the Premier League standing and coring tables.",
};

export default function SoccerLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[url('/background_images/soccer_pitch.jpg')] bg-cover bg-center">
      <div className="h-[68px]"></div>
      <main>
        <div className="h-[calc(100vh-68px)] flex flex-col justify-center items-center -translate-y-3">
          {children}
        </div>
      </main>
    </div>
  );
}
