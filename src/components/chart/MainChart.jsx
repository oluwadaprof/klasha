
import React, {useState, useEffect} from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";



const MainChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Sales",
          data: [120, 300, 200, 400, 250, 350],
          borderColor: ["rgba(75, 192, 192, 1)"],
          borderWidth: 2,
          yAxisID: "sales",
        },
        {
          label: "Expenses",
          data: [100, 200, 150, 250, 150, 200],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 2,
          yAxisID: "expenses",
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  const options = {
    scales: {
      yAxes: [
        {
          id: "sales",
          type: "linear",
          position: "left",
          ticks: {
            beginAtZero: true,
            stepSize: 100,
          },
        },
        {
          id: "expenses",
          type: "linear",
          position: "right",
          ticks: {
            beginAtZero: true,
            stepSize: 50,
          },
        },
      ],
    },
  };
  return (
    <div>
     <Line data={chartData} options={options} />
    </div>
  );
};

export default MainChart;
