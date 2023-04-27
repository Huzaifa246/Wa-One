import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import Card from "@/components/ui/Card";

const AreaChartClass = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Amount Sent",
      data: [31, 40, 28, 51, 42, 90, 100, 28, 51, 42, 90, 70],
    },
    {
      name: "Amount Recieved",
      data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 52, 41],
    },
    {
      name: "Total Amount",
      data: [120, 100, 185, 200, 98, 99, 105, 91, 114, 210, 100, 150],
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    grid: {
      show: false,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2023-01-10",
        "2023-02-20",
        "2023-03-10",
        "2023-04-20",
        "2023-05-10",
        "2023-06-20",
        "2023-07-15",
        "2023-08-20",
        "2023-09-10",
        "2023-10-21",
        "2023-11-10",
        "2023-12-20",
      ],
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
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "right",
      fontSize: "10px",
      fontFamily: "Inter",
      offsetY: -30,
      markers: {
        width: 8,
        height: 8,
        offsetY: 1,
        offsetX: 0,
        radius: 5,
      },
      itemMargin: {
        horizontal: 5,
        vertical: 0,
      },
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    title: {
      text: "Volume of Transaction",
      align: "left",
      offsetY: 9,
      style: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#263238",
        margin: "0",
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };
  return (
    <>
      <div className="2xl:col-span-6 lg:col-span-7 col-span-12 md:col-span-6">
        <Card>
          <div>
            <Chart options={options} series={series} type="area" height={350} />
          </div>
        </Card>
      </div>
    </>
  );
};

export default AreaChartClass;
