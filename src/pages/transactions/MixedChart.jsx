import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import Card from "@/components/ui/Card";

const MixedChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      type: "column",
      name: "Transactions Out",
      data: [30, 40, 50, 60, 30, 80, 90, 100, 110, 120, 130, 140],
    },
    {
      type: "area",
      name: "Transactions In",
      data: [99, 76, 85, 101, 48, 87, 55, 91, 114, 94, 100, 50],
    },
    {
      type: "line",
      name: "Total Transactions",
      data: [120, 100, 185, 200, 98, 99, 105, 91, 114, 210, 100, 150],
    },
  ];
  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2023",
      "02/01/2023",
      "03/01/2023",
      "04/01/2023",
      "05/01/2023",
      "06/01/2023",
      "07/01/2023",
      "08/01/2023",
      "09/01/2023",
      "10/01/2023",
      "11/01/2023",
      "12/01/2023",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0) + " views";
          }
          return y;
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "10px",
      fontFamily: "Inter",
      offsetY: -10,
      markers: {
        width: 8,
        height: 8,
        offsetY: 0,
        offsetX: 0,
        radius: 5,
      },
      itemMargin: {
        horizontal: 3,
        vertical: 0,
      },
      labels: {
        useSeriesColors: false,
      },
    },
    title: {
      text: "Number of Transactions",
      align: "left",
      offsetY: 9,
      style: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#263238",
        margin: "0",
      },
    },
    grid: {
      show: false,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      position: "back",
    },
    colors: ["#4669FA", "#50C793", "#0CE7FA"],
  };
  return (
    <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
      <Card>
        <Chart options={options} series={series} type="line" height={350} />
      </Card>
    </div>
  );
};

export default MixedChart;
