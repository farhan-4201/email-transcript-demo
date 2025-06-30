import { useEmailContext } from "@/context/EmailContext";
import { BookCheck, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import React, { useState } from "react";

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
    <>
      {filteredEmails.map((email) => (
        <div key={email.id} className="w-full mb-2 rounded-lg ">
          <div
            onClick={() => onClickEmail(email.id)}
            className={`cursor-pointer px-4 py-4 rounded-lg  text-black transition-all duration-300 ease-in-out ${
              openEmailId === email.id
                ? "max-h-[1000px] bg-[#9bd2ff]"
                : "bg-[#e0f1ff]"
            }`}
          >
            <div
              className={`flex items-center justify-between transition-all duration-300 ease-in-out min-h-[60px] ${
                openEmailId === email.id ? "" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <label
                  onClick={(e) => e.stopPropagation()}
                  className="custom-checkbox "
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={openEmailId === email.id}
                    onChange={() => toggleEmail(email.id)}
                  />
                  <span className="checkbox-icon cursor-default"></span>
                </label>
                <span>
                  {openEmailId === email.id ? <ChevronUp /> : <ChevronDown />}
                </span>
                <div
                  className={`flex flex-col ${
                    openEmailId === email.id ? "" : ""
                  } `}
                >
                  <span>{email.subject}</span>
                  {openEmailId !== email.id && (
                    <span className="opacity-60 text-sm max-w-[460px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {email.content}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <BookCheck className="cursor-default" size={20} />
                <Trash2 className="cursor-default" size={20} />
              </div>
            </div>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden rounded-lg ${
                openEmailId === email.id ? "max-h-[270px]" : "max-h-0"
              }`}
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className=" cursor-default px-4 py-2 bg-white text-sm overflow-scroll-mini max-h-[270px]"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: email.content ? cleanEmailBody(email.content) : "",
                  }}
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {filteredEmails.length === 0 && (
        <p className="text-black text-center">No emails found</p>
      )}
    </>
  );
};

export default EmailList;
