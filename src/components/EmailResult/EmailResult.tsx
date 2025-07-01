import { useEmailContext } from "@/context/EmailContext";
import { ClassifyEmailResponse } from "@/types";
import { Calendar, ChevronDown, ChevronRight, Clock } from "lucide-react";
import React, { useState } from "react";

const EmailResult = ({ result }: { result: ClassifyEmailResponse | null }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const { titleEmail } = useEmailContext();
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="rounded-card shadow-card border border-[var(--primary)] p-6 mb-4 flex flex-col gap-2 cursor-pointer transition-all bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff] text-[var(--foreground)]"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-center gap-2 mb-2">
        <button className="text-[var(--primary)] focus:outline-none">
          {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </button>
        <span className="font-semibold text-lg text-[var(--primary)] max-w-[350px] overflow-hidden text-ellipsis whitespace-nowrap">
          {titleEmail}
        </span>
      </div>
      <div
        className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="pl-7">
          <p className="mb-1">
            <strong>Reason:</strong>{" "}
            <span className="text-[var(--foreground)]">
              {result?.issue?.reason}
            </span>
          </p>
          <p className="mb-1">
            <strong>Responsible party:</strong>{" "}
            <span className="text-[var(--foreground)]">
              {result?.issue?.responsible_party}
            </span>
          </p>
          <p className="mb-1">
            <strong>Reasoning:</strong>{" "}
            <span className="text-[var(--foreground)]">
              {result?.issue?.reasoning}
            </span>
          </p>
          <p className="mb-1">
            <strong>Details:</strong>{" "}
            <span className="text-[var(--foreground)]">
              {result?.issue?.details}
            </span>
          </p>
        </div>
        <div className="flex items-center justify-between pt-3 mt-2 text-sm pl-7">
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <Calendar size={16} className="mr-1" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-2 text-[var(--accent)]">
            <Clock size={16} className="mr-1" />
            {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailResult;
