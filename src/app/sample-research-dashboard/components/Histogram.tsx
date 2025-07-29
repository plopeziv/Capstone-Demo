"use client";

import { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const downSampleMatrix = (inputMatrix, downSampleSize) => {
  if (!(inputMatrix.length > 0)) {
    console.warn("Matrix is empty or invalid. Skipping downsample.");
    return;
  }

  const downSampleMatrix = [];

  for (let index = 0; index < inputMatrix.length; index += downSampleSize) {
    downSampleMatrix.push(inputMatrix[index]);
  }

  return downSampleMatrix;
};

export default function Histogram() {
  const [options, setOptions] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const fileResponse = await fetch(
          "/spray_data/FMX030-20_Z20.5(IN)_hist.txt"
        );
        const fileText = await fileResponse.text();

        const responseArray = fileText.split("\n").map((line) => {
          const value = parseFloat(line.trim());
          return isNaN(value) ? 0 : value;
        });

        const downSample = downSampleMatrix(responseArray, 3);

        setOptions({
          yAxis: {
            type: "value",
            axisLabel: {
              color: "#ffffff",
            },
          },
          xAxis: {
            type: "category",
            name: "X (mm)",
            nameGap: 25,
            nameLocation: "middle",
            data: downSample.map((_, index) => (index - 60).toString()),
            interval: 0,
            axisLabel: {
              color: "#ffffff",
              formatter: function (value) {
                return value % 2 === 0 ? value : "";
              },
            },
            nameTextStyle: {
              color: "#ffffff",
            },
          },
          series: [
            {
              data: downSample,
              type: "bar",
            },
          ],
        });
      } catch (error) {
        console.log("Error reading file: ", error);
      }
    };

    load();
  }, []);

  return (
    <ReactECharts
      option={options}
      style={{
        width: "100%",
        minHeight: "400px",
      }}
    />
  );
}
