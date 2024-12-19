import GlanceCard from "@/components/GlanceCard";
import React from "react";
import label from "@/assets/smalltag.svg";
import coin from "@/assets/Coin.svg";
import coins from "@/assets/Coins.svg";
import chat from "@/assets/Vector.svg";
import OrdersTable from "@/components/OrdersTable";
import { ChevronDown } from "lucide-react";

const GlanceCardData = [
  {
    icon: chat as string,
    title: "CONSULTATIONS",
    no: "24",
    percentage: 15,
    status: "increase",
  },
  {
    icon: label as string,
    title: "ORDERS PLACED",
    no: "12",
    percentage: 15,
    status: "decrease",
  },
  {
    icon: coins as string,
    title: "CONSULTATIONS",
    no: "$2,400",
    percentage: 15,
    status: "increase",
  },
  {
    icon: coin as string,
    title: "AVG ORDER VALUE",
    no: "$240",
    percentage: 15,
    status: "increase",
  },
  {
    icon: coins as string,
    title: "CONSULTATIONS",
    no: "$2,400",
    percentage: 15,
    status: "increase",
  },
  {
    icon: coin as string,
    title: "AVG ORDER VALUE",
    no: "$240",
    percentage: 15,
    status: "increase",
  },
];

const Home = () => {
  return (
    <div className="p-4 md:p-10 ">
      <div className="space-y-10 ">
        {/* GLANCE  */}
        <div className="space-y-10 ">
          <div className="flex justify-between items-center">
            <h1 className="text-[32px] font-normal">At a glance</h1>
            <div className="h-10 w-max hidden  sm:flex justify-center items-center p-2 border rounded-xl ">
              <h1> 7 days</h1>
              <ChevronDown size={18} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
            {GlanceCardData.map((data, idx) => (
              <GlanceCard key={idx} data={data} />
            ))}
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-[32px] font-normal">Orders</h1>
            {/* <OrdersTable /> */}
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[32px] font-normal">Orders</h1>
        <OrdersTable />
      </div>
    </div>
  );
};

export default Home;
