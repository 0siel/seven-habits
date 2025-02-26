import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Visualization({ causes, prevStep, nextStep }) {
  // If no causes exist, show a message
  if (!causes || causes.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4">
        <p>No causes defined</p>
        <button onClick={prevStep} className="bg-gray-500 text-white p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    );
  }

  // 1) Calculate total score
  const total = causes.reduce((sum, c) => sum + c.score, 0);

  // 2) Build arrays for the bar chart (scores) and line chart (cumulative %)
  let cumulative = 0;
  const barData = [];
  const lineData = [];
  causes.forEach((cause) => {
    barData.push((cause.score/total)  * 100);
    cumulative += cause.score;
    lineData.push(((cumulative / total) * 100).toFixed(2));
  });

  // 3) Determine which bars make up ~80% of the total (Pareto cutoff)
  let cumulative2 = 0;
  let cutoffIndex = -1;
  for (let i = 0; i < causes.length; i++) {
    cumulative2 += causes[i].score;
    if (cumulative2 / total >= 0.8) {
      cutoffIndex = i;
      break;
    }
  }

  // 4) Highlight bars that fall within the 80% cutoff
  const backgroundColors = causes.map((_, index) =>
    index <= cutoffIndex
      ? "rgba(75, 192, 192, 0.6)" // Highlight color
      : "rgba(153, 102, 255, 0.6)" // Normal color
  );

  // 5) Chart data object
  const data = {
    labels: causes.map((c) => c.name),
    datasets: [
      {
        type: "bar",
        label: "Score",
        data: barData,
        backgroundColor: backgroundColors,
        borderColor: backgroundColors.map((c) => c.replace("0.6", "1")),
        borderWidth: 1,
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Cumulative %",
        data: lineData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        yAxisID: "y1",
      },
    ],
  };

  // 6) Chart options (two y-axes: left for scores, right for percentage)
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Pareto Chart",
      },
    },
    scales: {
      y: {
        type: "linear",
        position: "left",
      },
      y1: {
        type: "linear",
        position: "right",
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => value + "%",
        },
        grid: {
          drawOnChartArea: false, // Keep bars separate from line
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Navigation Button */}
      <button onClick={nextStep} className="bg-gray-500 text-white p-2 w-full">
        Continue
      </button>
      {/* Pareto Chart */}
      <div className="w-full max-w-2xl">
        <Chart data={data} options={options} />
      </div>

      {/* Navigation Button */}
      <button onClick={prevStep} className="bg-gray-500 text-white p-2 w-full">
        Back
      </button>
      
    </div>
  );
}
