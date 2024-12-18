import React from "react";
import Logo from "@/assets/Logo.svg";
import Home from "@/assets/Home.svg";
import Chat from "@/assets/Chats.svg";
import Mem from "@/assets/member.svg";
import Settings from "@/assets/gare.svg";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const logs = [Home, Chat, Mem];

  return (
    <div className="w-[60px] h-full flex flex-col justify-between items-center py-6 gap-6 primary-bg">
      <div className="space-y-6">
        <div className="pb-4 border-b border-b-black">
          <Link href="/">
            <Image src={Logo} alt="logo" width={35} height={35} />
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          {logs.map((logo, idx) => (
            <Link href="/" key={idx}>
              <Image src={logo} alt="logo" width={35} height={35} />
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Link href="/">
          <Image src={Settings} alt="logo" width={35} height={35} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
