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
  const [error, setError] = useState<string | null>(null);

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
      className="w-full flex flex-col bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff] px-6 py-6 rounded-2xl shadow-card items-center border border-[var(--primary)] backdrop-blur-lg mb-8"
      style={{ minHeight: 220, marginTop: 0, color: "#f3f4f6" }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex items-center justify-between h-[50px] mb-2">
          <h2 className="text-xl font-bold text-[var(--primary)] tracking-wide drop-shadow-sm">
            Classification Result
          </h2>
          <span className="text-xs text-[var(--accent)] font-semibold ml-2">
            Model: Grok
          </span>
        </div>
        <div className="flex flex-col w-full h-full overflow-y-auto p-3 rounded-xl bg-[rgba(0,0,0,0.55)] min-h-[120px] text-[var(--foreground)] border border-[var(--primary)] shadow-sm">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2">
              <strong className="font-bold">Error:</strong>{" "}
              <span className="block sm:inline">{error}</span>
            </div>
          )}
          {isLoading ? (
            <div className="flex flex-col justify-center items-center h-full gap-3">
              <TextChanger />
            </div>
          ) : result && result.issue ? (
            <>
              {result.issue.reasoning &&
                result.issue.reasoning.startsWith("Grok") && (
                  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-2">
                    <strong className="font-bold">Warning:</strong>{" "}
                    <span className="block sm:inline">
                      {result.issue.reasoning}
                    </span>
                  </div>
                )}
              <EmailResult result={result} />
            </>
          ) : (
            <NoResults />
          )}
        </div>
      </div>
    </section>
  );
};

export default Results;
