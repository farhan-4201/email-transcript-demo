import React from "react";
import Subjects from "../Subjects/Subjects";
import Results from "../Results/Results";
import SidebarOverlay from "../Sidebar/SidebarOverlay";

const Emails = () => {
  return (
    <div className="flex w-full  flex-row items-center justify-between pr-6 gap-5 bg-[#d0eaff]">
      <SidebarOverlay />
      <Subjects />
      <Results />
    </div>
  );
};

export default Emails;
