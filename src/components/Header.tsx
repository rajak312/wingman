import React from "react";
import SummeryImg from "@/assets/ChartPieSlice.svg";
import LabelIcon from "@/assets/Tag.svg";
import ChatIcon from "@/assets/ChatTeardropText.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" h-20 md:h-[94px] bg-white w-full shadow-md px-4 md:px-10 flex items-center gap-6">
      <button className="h-[40px] w-[50px] md:h-[46px] md:w-[137px] rounded-full text-[14px] md:text-[18px] font-medium flex justify-center items-center gap-[8px] md:gap-[12px] bg-[#ccfbef] text-[#212636] shadow transition-all duration-300">
        <Image src={SummeryImg} alt="logo" width={20} height={20} />
        <span className="hidden sm:block">Summary</span>
      </button>

      <button className="h-[40px] w-[50px] md:h-[46px] md:w-[137px] rounded-full text-[14px] md:text-[18px] font-medium flex justify-center items-center gap-[8px] md:gap-[12px] hover:bg-[#ccfbef] hover:text-[#212636] text-gray-500 transition-all duration-300">
        <Image src={LabelIcon} alt="logo" width={20} height={20} />
        <span className="hidden sm:block">Sales</span>
      </button>

      <button className="h-[40px] w-[50px] md:h-[46px] md:w-[137px] rounded-full text-[14px] md:text-[18px] font-medium flex justify-center items-center gap-[8px] md:gap-[12px] hover:bg-[#ccfbef] hover:text-[#212636] text-gray-500 transition-all duration-300">
        <Image src={ChatIcon} alt="logo" width={20} height={20} />
        <span className="hidden sm:block">Chats</span>
      </button>
    </div>
  );
};

export default Header;
