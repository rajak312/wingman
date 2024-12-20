import GlanceCard from "@/components/GlanceCard";
import React from "react";
import { ChevronDown } from "lucide-react";
import { GlanceCardData } from "@/utils/data";

const Home = () => {
  return (
    <div className="p-4 md:p-10 ">
      <div className="space-y-10 ">
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
      </div>
    </div>
  );
};

export default Home;
