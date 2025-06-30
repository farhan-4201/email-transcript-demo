import React, { useState } from 'react';
import { FileQuestion, LayoutDashboard, LifeBuoy } from 'lucide-react';
import Image from "next/image";
import Logo from "@/assets/images/zazmicLogo1.png";
import Avatar from "@/assets/images/avatar.png";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0); 

  const slideArr = [
    { text: 'Dashboard', icon: <LayoutDashboard />, variantValue: 0 },
    { text: 'Support', icon: <LifeBuoy /> },
    { text: 'FAQ', icon: <FileQuestion /> },
  ];
  return (
    <div className="w-[80px] pb-10 justify-between flex flex-col items-center h-full border-r border-[#e4e4e4] bg-[#F7F9FF]">
      <div className="flex text-[9px] flex-col items-center cursor-pointer">
        <div className="flex flex-col  justify-center items-center">
          <Image src={Logo} width={40} height={20} alt="Logo" className="my-4" />
          AI Classification
        </div> 
          <span className="text-[15px] font-bold">Logistics</span>
      </div>

      <nav className="">
        {slideArr.map((el, id) => (
          <p onClick={() => setActiveIndex(id)} className="mb-5 text-xs font-medium cursor-pointer flex justify-center items-center flex-col gap-2" key={id}>
            <div className={`${activeIndex === id ? 'bg-[#CFEDA2]' : 'hover:bg-gray-100'} w-16 h-9 rounded-full flex items-center justify-center`}> 
              {el.icon}
            </div>
            <p>{el.text}</p>
          </p>
        ))}
      </nav>

      <Image className="cursor-pointer" src={Avatar} width={40} height={40} alt="Avatar" />
    </div>
  );
}

export default Sidebar;
