import React from "react";
import growIcon from "@/assets/grow.svg";
import downIcon from "@/assets/down.svg";
import Image from "next/image";

interface GlanceCardProps {
  data: {
    icon: string;
    title: string;
    no: string;
    percentage: number;
    status: string;
  };
}

const GlanceCard = ({ data }: GlanceCardProps) => {
  const { icon, title, no, percentage, status } = data;
  return (
    <div className="card border shadow-lg flex flex-col justify-between">
      <div className="flex items-center gap-1">
        <Image src={icon} alt="icon" width={15} height={15} />
        <h1 className="text-[12px] font-medium tracking-wider">{title}</h1>
      </div>

      <h1 className="text-[24px] font-medium">{no}</h1>
      <div className="flex items-center gap-1">
        {status === "increase" ? (
          <Image src={growIcon} alt="icon" width={25} height={15} />
        ) : (
          <Image src={downIcon} alt="icon" width={25} height={15} />
        )}

        <h1 className="text-[14px] space-x-2 font-normal">
          <span
            className={`${
              status === "increase" ? "text-[#15B79F]" : "text-[#F04438]"
            }`}
          >
            {percentage}%
          </span>
          <span>{status}</span>
        </h1>
      </div>
    </div>
  );
};

export default GlanceCard;
