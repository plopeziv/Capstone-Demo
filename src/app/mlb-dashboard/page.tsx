"use client";

import { useEffect } from "react";
import { SprayDataProfile } from "../../services/SprayDataProfile";

export default function MlbDashboard() {
  useEffect(() => {
    const load = async () => {
      const profile = new SprayDataProfile("/spray_data/z16.5_in.txt");
      await profile.loadData();
    };

    load();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/home_plate.jpg')] bg-cover bg-center"></div>
  );
}
