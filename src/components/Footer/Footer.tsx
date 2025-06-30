import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex py-3 border-t border-gray-200 w-full justify-center items-center">
      <div className="container mx-auto max-w-screen-xl w-[62%]">
        <div className="flex items-center justify-between gap-3">
          <div className="flex space-x-6">
            <div className="w-9 h-9 flex items-center justify-center bg-[#d0eaff] text-black rounded-full">
              <Facebook />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-[#d0eaff] text-black  rounded-full">
              <Twitter />
            </div>
            <div className="w-9 h-9 flex items-center justify-center bg-[#d0eaff] text-black  rounded-full">
              <Instagram />
            </div>
          </div>
          <p className="text-sm text-black font-bold">
            ©2025 Developed by Zazmic Inc. Powered by{" "}
            <span className="text-[#0070ff] font-bold">
              Google Vertex AI and Gemini
            </span>{" "}
            <span className="font-normal">All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
