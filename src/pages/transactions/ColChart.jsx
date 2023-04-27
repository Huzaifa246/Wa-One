// import React from "react";
// import Chart from "react-apexcharts";
// import useDarkMode from "@/hooks/useDarkMode";
// import Card from "@/components/ui/Card";

// const ColChart = () => {
//   const [isDark] = useDarkMode();
//   const series = [
//     {
//       name: "Sent Amount",
//       data: [30, 40, 50, 60, 30, 80, 90, 100, 110, 120, 130, 140],
//     },
//     {
//       name: "Recieved Amount",
//       data: [99, 76, 85, 101, 48, 87, 55, 91, 114, 94, 100, 50],
//     },
//     {
//       name: "Total Amount",
//       data: [120, 100, 185, 200, 98, 99, 105, 91, 114, 210, 100, 150],
//     },
//   ];
//   const options = {
//     chart: {
//       toolbar: {
//         show: false,
//       },
//     },
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         endingShape: "rounded",
//         columnWidth: "70%",
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     stroke: {
//       show: false,
//       width: 3,
//       colors: ["transparent"],
//     },
//     legend: {
//       position: "top",
//       horizontalAlign: "center",
//       itemMargin: {
//         horizontal: 10,
//         vertical: 0,
//       },
//       labels: {
//         colors: isDark ? "#CBD5E1" : "#475569",
//       },
//     },

//     xaxis: {
//       categories: [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//       labels: {
//         style: {
//           colors: isDark ? "#CBD5E1" : "#475569",
//           fontFamily: "Inter",
//         },
//       },
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       title: {
//         text: "$ Dollars",
//       },
//       labels: {
//         style: {
//           colors: isDark ? "#CBD5E1" : "#475569",
//           fontFamily: "Inter",
//         },
//       },
//     },
//     fill: {
//       opacity: 1,
//     },
//     tooltip: {
//       y: {
//         formatter: function (val) {
//           return "$ " + val + " Dollars";
//         },
//       },
//     },

//     grid: {
//       show: true,
//       borderColor: isDark ? "#334155" : "#e2e8f0",
//       position: "back",
//     },
//     colors: ["#4669FA", "#0CE7FA", "#FA916B"],
//   };

//   return (
//     <>
//       {/* <Chart options={options} series={series} type="bar" height="350" /> */}
//       <div className="2xl:col-span-6 lg:col-span-7 col-span-12">
//         <Card>
//           <h5 class="my-2">Number of Transactions</h5>
//           <div className="legend-ring">
//             <Chart options={options} series={series} type="bar" height={350} />
//           </div>
//         </Card>
//       </div>
//     </>
//   );
// };

// export default ColChart;
