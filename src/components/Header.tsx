import React from "react";
import SummeryImg from "@/assets/ChartPieSlice.svg";
import LabelIcon from "@/assets/Tag.svg";
import ChatIcon from "@/assets/ChatTeardropText.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="h-[94px] bg-white w-full shadow-md px-10 flex items-center gap-6">
      <button className="second-bg btn ">
        <Image src={SummeryImg} alt="logo" width={20} height={20} />
        Summary
      </button>
      <button className="btn text-gray-500  transition-all duration-300">
        <Image src={LabelIcon} alt="logo" width={20} height={20} />
        Sales
      </button>
      <button className="btn text-gray-500 space-x-4 transition-all duration-300">
        <Image src={ChatIcon} alt="logo" width={20} height={20} />
        Chats
      </button>
    </div>
  );
};

export default Header;
