import React from "react";
import Subjects from "../Subjects/Subjects";
import Results from "../Results/Results";
import SidebarOverlay from "../Sidebar/SidebarOverlay";

const Emails = () => {
  return (
    <div className="w-full min-h-screen flex flex-row bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff]">
      <SidebarOverlay />
      <main className="flex-1 flex flex-col items-center justify-start pt-10 pl-0 md:pl-64 transition-all duration-300">
        <div className="w-full max-w-2xl flex flex-col items-center">
          <Subjects />
          <div className="w-full max-w-2xl mt-8">
            <Results />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emails;
