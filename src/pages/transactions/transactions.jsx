import React from "react";
import AreaChartClass from "./AreaChartClass";
import transactionTable from "./transactionTable";
import ExampleTwo from "./../table/react-tables/ExampleTwo";
import MixedChart from "./MixedChart";
import Card from "@/components/ui/Card";

const transactions = () => {
  return (
    <>
      <h3 class="my-6">Transaction</h3>
      <Card>
        <div class="flex flex-wrap gap-4 justify-between">
          <div class="w-full md:w-1/2 lg:w-[49%] bg-gray-100 p-1">
            {/* <ColChart /> */}
            <MixedChart />
          </div>
          <div class="w-full md:w-1/2 lg:w-[49%] bg-gray-100 p-1">
            <AreaChartClass />
          </div>
        </div>
      </Card>
      <div class="my-1">
        <ExampleTwo />
      </div>
    </>
  );
};

export default transactions;
