import { BigNumber, utils } from "ethers";
import React from "react";
import { Bar } from "react-chartjs-2";
import { denoms } from "../config/constants";

// formatPayment takes a payment amount and formats it to the correct number of decimals
function formatPayment(chainID, payment) {
  const decimals = denoms[chainID].decimals;
  const formattedPayment = parseFloat(
    utils.formatUnits(BigNumber.from(payment), decimals)
  ).toFixed(3);
  return formattedPayment;
}

// MEVPaymentGraph is a React component that renders a bar graph of the total MEV payments batched into block intervals
const MEVPaymentGraph = ({ timestamps, profits, chainId }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        // position: "top",
        display: false,
      },
      title: {
        display: true,
        text: `Auction Profit Over Time`,
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
          text: `Auction Payment (${denoms[chainId].denom})`,
          color: "#F1F1F1",
        },
        ticks: {
          color: "#F1F1F1",
          callback: function (value, index, ticks) {
            return value;
          },
        },
      },
    },
  };

  // Standardize the payment amounts to the correct number of decimals
  const formattedProfits = profits.map((payment) =>
    formatPayment(chainId, payment)
  );

  const data = {
    labels: timestamps,
    datasets: [
      {
        label: `Auction Payments (${denoms[chainId].denom})`,
        data: formattedProfits,
        borderColor: "rgba(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.8)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default MEVPaymentGraph;
