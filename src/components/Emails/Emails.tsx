import React from "react";
import Subjects from "../Subjects/Subjects";
import Results from "../Results/Results";

const Emails = () => {
  return (
    <div className="w-full min-h-screen flex flex-row bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff]">
      <main className="flex-1 flex flex-col items-center justify-start pt-10 pl-0 md:pl-64 transition-all duration-300">
        <div className="w-full flex flex-row items-start justify-center gap-8 max-w-6xl h-[70vh]">
          <div className="flex-1 h-full">
            <Subjects />
          </div>
          <div className="flex-1 h-full">
            <Results />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emails;
