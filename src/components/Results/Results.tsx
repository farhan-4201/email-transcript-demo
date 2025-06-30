import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/images/log5.avif";
import Image from "next/image";
import { useEmailContext } from "@/context/EmailContext";
import EmailResult from "../EmailResult/EmailResult";
import NoResults from "./NoResults";
import Spinner from "../Spiner/Spiner";
import { Loader } from "lucide-react";
import TextChanger from "../TextChanger/TextChanger";

const Results = () => {
  const { result, isLoading } = useEmailContext();
  const [containerHeight, setContainerHeight] = useState<string>("86vh");

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(windowHeight < 900 ? "86vh" : "89vh");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <div
      className={`flex w-1/2 flex-col bg-white px-7 py-4 rounded-xl items-center justify-center`}
      style={{ height: containerHeight }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between h-[65px]">
          <h2 className="text-2xl  text-black">Classification Result</h2>
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto p-3 rounded-lg bg-[#e0f1ff]">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-full gap-3">
              <TextChanger />
            </div>
          ) : (
            <>
              {result && result.issue ? (
                <EmailResult result={result} />
              ) : (
                <NoResults />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
