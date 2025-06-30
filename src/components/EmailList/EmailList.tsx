import { useEmailContext } from "@/context/EmailContext";
import { BookCheck, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import React from "react";

const EmailList = ({
  filteredEmails,
  openEmailId,
  toggleEmail,
  cleanEmailBody,
}: {
  filteredEmails: any[];
  openEmailId: number | null;
  toggleEmail: (id: number) => void;
  cleanEmailBody: (textString: string) => string;
}) => {
  const onClickEmail = (id: number) => {
    toggleEmail(id);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {filteredEmails.map((email) => (
        <div
          key={email.id}
          className={`rounded-2xl shadow-card transition-all border-2 ${
            openEmailId === email.id
              ? "bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff] border-[var(--primary)] text-white"
              : "bg-gradient-to-br from-[#232526] via-[#485563] to-[#00c6ff] border-transparent text-[var(--foreground)] opacity-90 hover:opacity-100"
          }`}
        >
          <div
            onClick={() => onClickEmail(email.id)}
            className={`cursor-pointer px-6 py-4 flex items-center justify-between rounded-2xl transition-all duration-300`}
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="accent-[var(--primary)] w-5 h-5 rounded-full border-2 border-[var(--primary)]"
                checked={openEmailId === email.id}
                onChange={() => toggleEmail(email.id)}
                onClick={(e) => e.stopPropagation()}
              />
              <span className="font-semibold text-base">{email.subject}</span>
            </div>
            <div className="flex items-center gap-2">
              {openEmailId === email.id ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>
          {openEmailId === email.id && (
            <div className="px-6 pb-4 pt-2 text-sm text-[var(--foreground)] bg-[rgba(255,255,255,0.15)] rounded-b-2xl">
              {cleanEmailBody(email.body)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default EmailList;
