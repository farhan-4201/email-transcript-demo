import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";
const Header = () => {
  return (
    <div className="flex w-full py-4 px-5 items-center justify-between text-black text-2xl font-bold border-b border-[#e4e4e4] ">
      <div className="flex items-center gap-2">
        <Image src={Logo} width={50} height={50} alt="Logo" />
        AI Classification<span className="text-blue-500">Logistics</span>
      </div>
    </div>
  );
};

export default Header;
