"use client";

import { useEffect, useState } from "react";
import { SprayDataProfile } from "../../services/SprayDataProfile";

import ReactECharts from "echarts-for-react";
import "echarts-gl";

export default function MlbDashboard() {
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const load = async () => {
      const profile = new SprayDataProfile(
        "/spray_data/FMX030-20_Z26.5(IN).txt"
      );
      await profile.loadData();
      profile.formatToEcharts();

      const xLabels = [
        ...new Set(profile.formattedMatrix.map(([, x]) => x - 62)),
      ];
      const yLabels = [
        ...new Set(profile.formattedMatrix.map(([, y]) => y - 62)),
      ];

      const min = profile.getMin();
      const max = profile.getMax();

      setOptions({
        xAxis3D: {
          type: "category",
          data: xLabels,
          axisLabel: {
            color: "#ffffff",
          },
          nameTextStyle: {
            color: "#ffffff",
          },
          axisPointer: {
            show: false,
          },
        },
        yAxis3D: {
          type: "category",
          name: "",
          data: yLabels,
          axisLabel: { show: false },
          axisTick: { show: false },
          axisPointer: {
            show: false,
          },
        },
        zAxis3D: {
          type: "value",
          axisLabel: {
            color: "#ffffff",
          },
          nameTextStyle: {
            color: "#ffffff",
          },
          axisPointer: {
            show: false,
          },
        },
        grid3D: {
          viewControl: {
            projection: "perspective",
            distance: 195,
            alpha: 5,
            beta: -1,
          },
        },
        visualMap: {
          min,
          max,
          show: false,
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
            type: "scatter3D",
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
    <div className="min-h-screen flex flex-col justify-center items-center bg-[url('/background_images/industrial_pipes.png')] bg-cover bg-center p-4">
      <h1 className="text-4xl">Introduction to Laser Sheet Imaging (LSI) </h1>
      <div className="w-full max-w-[900px] aspect-[4/3]">
        {options && (
          <ReactECharts
            option={options}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>
    </div>
  );
}
