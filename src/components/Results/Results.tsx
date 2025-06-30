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
  const [containerHeight, setContainerHeight] = useState<string>("auto");

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(windowHeight < 900 ? "auto" : "auto");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  return (
    <section
      className="w-full flex flex-col bg-white/90 px-6 py-5 rounded-2xl shadow-card items-center border border-[var(--primary)] backdrop-blur-md mb-8"
      style={{ minHeight: 220, marginTop: 0 }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between h-[50px] mb-2">
          <h2 className="text-xl font-bold text-[var(--primary)] tracking-wide">
            Classification Result
          </h2>
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto p-3 rounded-xl bg-white/80 min-h-[120px] text-black">
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-full gap-3">
              <TextChanger />
            </div>
          ) : result && result.issue ? (
            <EmailResult result={result} />
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
