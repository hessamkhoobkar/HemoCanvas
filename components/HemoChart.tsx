"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Result {
  id: string;
  result_date: string;
  wbcs: number;
  hb: number;
  platelets: number;
  created_at: string;
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        color: "rgb(229, 229, 229)",
      },
    },
    y: {
      ticks: {
        display: false,
      },
      border: {
        color: "rgb(229, 229, 229)",
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

export default function HemoChart({ results }: { results: Result[] }) {
  if (!results || !Array.isArray(results) || results.length === 0) {
    return (
      <div className="bg-white w-2/3 p-4 rounded-xl">
        <div className="rounded-2xl overflow-hidden p-2 bg-neutral-100">
          <div>No data available.</div>;
        </div>
      </div>
    );
  }

  const data = {
    labels: results.map((entry) => entry.result_date),
    datasets: [
      {
        label: "Platelets",
        data: results.map((entry) => entry.platelets),
        fill: false,
        borderColor: "#5394FA",
        backgroundColor: "#5394FA",
      },
      {
        label: "Hb",
        data: results.map((entry) => entry.hb),
        fill: false,
        borderColor: "#5394FA",
        backgroundColor: "#5394FA",
      },
      {
        label: "WBCs",
        data: results.map((entry) => entry.wbcs),
        fill: false,
        borderColor: "#FF8033",
        backgroundColor: "#FF8033",
      },
    ],
  };

  return (
    <div className="bg-white w-2/3 p-4 rounded-xl">
      <div className="rounded-2xl overflow-hidden p-2 bg-neutral-100">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
