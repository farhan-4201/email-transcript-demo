import React from "react";
import ImageLogo from "@/assets/images/logistick.png";
import Image from "next/image";
const NoResults = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6">
      <Image
        className="w-[140px] mb-4 rounded-card shadow-card"
        src={ImageLogo}
        alt="No Results"
      />
      <div className="flex flex-col gap-2 mt-2 text-center">
        <h1 className="text-xl font-bold text-[var(--primary)]">
          No Classification Results Yet.
        </h1>
        <p className="text-[var(--foreground)] text-sm">
          Please select emails you want to classify and click the{" "}
          <span className="font-semibold text-[var(--accent)]">“Classify”</span>{" "}
          button. After some time, the results will appear here.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
