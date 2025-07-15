"use client";

import { useEffect, useState } from "react";
import { SprayDataProfile } from "../../services/SprayDataProfile";

import ReactECharts from "echarts-for-react";

export default function MlbDashboard() {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const load = async () => {
      const profile = new SprayDataProfile(
        "/spray_data/FMX030-20_Z26.5(IN).txt"
      );
      await profile.loadData();
      profile.formatToEcharts();

      const xLabels = [...new Set(profile.formattedMatrix.map(([x]) => x))];
      const yLabels = [...new Set(profile.formattedMatrix.map(([, y]) => y))];

      const min = profile.getMin();
      const max = profile.getMax();

      setOptions({
        xAxis: {
          type: "category",
          data: xLabels,
        },
        yAxis: {
          type: "category",
          data: yLabels,
        },
        visualMap: {
          min,
          max,
          calculable: true,
          orient: "horizontal",
          left: "center",
          bottom: "5%",
          inRange: {
            color: [
              "#0000ff", // blue
              "#00ffff", // cyan
              "#00ff00", // green
              "#ffff00", // yellow
              "#ff0000", // red
            ],
          },
        },
        tooltip: { show: false },
        series: [
          {
            type: "heatmap",
            data: profile.formattedMatrix,
            label: {
              show: false,
            },
            emphasis: { disabled: true },
            animation: false,
          },
        ],
      });
    };

    load();
  }, []);
  return (
    <div className="h-screen flex justify-center items-center bg-[url('/background_images/home_plate.jpg')] bg-cover bg-center">
      {options && (
        <ReactECharts
          option={options}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </div>
  );
}
