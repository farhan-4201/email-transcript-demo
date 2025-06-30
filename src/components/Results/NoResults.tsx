import React from "react";
import ImageLogo from "@/assets/images/logistick.png";
import Image from "next/image";
const NoResults = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Image className="w-[200px]" src={ImageLogo} alt="" />
      <div className="flex flex-col gap-2 mt-5 text-center">
        <h1 className="text-xl">No Classification Results Yet.</h1>
        <p>
          Please select emails your want to classify and click the “Classify”
          button. After some time the results will appear here.
        </p>
      </div>
    </div>
  );
};

export default NoResults;
