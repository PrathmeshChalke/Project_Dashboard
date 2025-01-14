import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js";
import { Line, Pie, Doughnut, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const LineChart = () => {
  const data = {
    labels: [
      "Apr 3",
      "Apr 9",
      "Apr 15",
      "Apr 21",
      "Apr 27",
      "May 3",
      "May 9",
      "May 16",
      "May 23",
      "May 30",
      "Jun 5",
    ],
    datasets: [
      {
        label: "User Growth",
        data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 60, 55],
        fill: true,
        backgroundColor: (context: { chart: any }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(75, 192, 192, 0.4)");
          gradient.addColorStop(1, "rgba(255, 255, 255, 0.4)");
          return gradient;
        },
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
        pointBackgroundColor: "rgb(75, 192, 192)",
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"line">): string {
            const dataset = tooltipItem.dataset.label || "Dataset";
            const value = tooltipItem.raw || 0;
            return `${dataset}: ${value}`;
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return <Line data={data} options={options} height={300} />;
};

export const PieChart = () => {
  const data = {
    labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
    datasets: [
      {
        data: [200, 187, 173, 90],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any }) =>
            `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export const DoughnutChart = () => {
  const data = {
    labels: ["Visitors", "Others"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          "rgba(54, 162, 235, 0.8)",
          "rgba(240, 240, 240, 0.8)",
        ],
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context: { label: any; raw: any }) =>
            `${context.label}: ${context.raw}%`,
        },
      },
    },
    cutout: "70%",
  };

  return <Doughnut data={data} options={options} />;
};

export const ProgressChart = ({ progress }: { progress: number }) => {
  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: [
          "rgba(75, 192, 192, 0.8)", 
          "rgba(240, 240, 240, 0.8)", 
        ],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "80%", 
    plugins: {
      tooltip: {
        enabled: false, 
      },
      legend: {
        display: false, 
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "380px", height: "380px" }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "24px",
          fontWeight: "bold",
          color: "rgba(75, 192, 192, 1)",
        }}
      >
        {progress}%
      </div>
    </div>
  );
};
