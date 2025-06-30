import { useEmailContext } from "@/context/EmailContext";
import { ClassifyEmailResponse } from "@/types";
import { Box, Calendar, ChevronDown, ChevronRight, Clock } from "lucide-react";
import React, { useState } from "react";

const EmailResult = ({ result }: { result: ClassifyEmailResponse | null }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();
  const { titleEmail } = useEmailContext();
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className="border-b border-[#CBC4CF] p-4 flex items-start relative cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <button className="text-black mr-2 flex-shrink-0">
        {expanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      <div className="text-black">
        <p className="max-w-[350px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
          {titleEmail}
        </p>
        <div
          className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
            expanded ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="mt-2">
            <p>
              <strong>Reason:</strong> {result?.issue?.reason}
            </p>
            <p>
              <strong>Responsible party:</strong>{" "}
              {result?.issue?.responsible_party}
            </p>
            <p>
              <strong>Reasoning:</strong> {result?.issue?.reasoning}
            </p>
            <p>
              <strong>Details:</strong> {result?.issue?.details}
            </p>
          </div>
          <div className="flex items-center justify-between pt-2 mt-2  text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="mr-1" />
              {result?.duration || "0"} ms
            </div>
            <div className="flex items-center gap-2">
              <Box size={16} /> {result?.model || "Unknown"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailResult;
