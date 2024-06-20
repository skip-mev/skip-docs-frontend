import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// BundlesGraph is a React component that renders a bar graph of the number of winning bundles batched into block intervals.
const BundlesGraph = ({ timestamps, bundles }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "Auction Competitiveness Over Time",
        color: "#F1F1F1",
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#F1F1F1",
        },
      },
      y: {
        title: {
          display: true,
          text: "# of Auctions",
          color: "#F1F1F1",
        },
        ticks: {
          color: "#F1F1F1",
        },
      },
    },
  };

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: "# of Auctions",
        data: bundles,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BundlesGraph;
