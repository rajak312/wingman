import GlanceCard from "@/components/GlanceCard";
import React from "react";
import label from "@/assets/smalltag.svg";
import coin from "@/assets/Coin.svg";
import coins from "@/assets/Coins.svg";
import chat from "@/assets/Vector.svg";

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
];

const Home = () => {
  return (
    <div className="m-10">
      <div className="space-y-10 ">
        <div className="flex justify-between items-center">
          <h1 className="text-[32px] font-normal">At a glance</h1>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {GlanceCardData.map((data, idx) => (
            <GlanceCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
