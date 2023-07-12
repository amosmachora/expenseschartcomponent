import "./App.css";
import logo from "./images/logo.svg";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { myData } from "./data";
import { useState } from "react";

function App() {
  const [chartData, setChartData] = useState({
    labels: myData.map((data) => data.day),
    datasets: [
      {
        label: "Spend",
        data: myData.map((data) => data.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: 3,
        hoverBackgroundColor: ["hsl(186, 34%, 60%)"],
      },
    ],
  });

  const [chartOptions, setChartOptions] = useState({
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
        backgroundColor: ["hsl(25, 47%, 15%)"],
        xAlign: "center",
        yAlign: "bottom",
        caretSize: 0,
        callbacks: {
          title: (tooltipItems, data) => {
            return "";
          },
          // label: (tooltipItem, data) => {
          // },
        },
      },
    },
    onHover: (event, chartElement) => {
      if (chartElement.length == 1) {
        event.native.target.style.cursor = "pointer";
      }
      if (chartElement.length == 0) {
        event.native.target.style.cursor = "default";
      }
    },
  });
  return (
    <div className="App">
      <div className="App__top">
        <div className="App__top-right">
          <p className="h3">My balance</p>
          <p className="amount">$921.48</p>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="App__bottom">
        <h2 className="heading">Spending - Last 7 days</h2>
        <div className="bar-chart">
          {<Bar data={chartData} options={chartOptions} />}
        </div>
        <div className="bottom-end">
          <div className="bottom-end-left">
            <p className="total-text">Total this month</p>
            <p className="total-number">$478.33</p>
          </div>
          <div className="bottom-end-right">
            <p className="percentage">+2.4%</p>
            <p className="from">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
