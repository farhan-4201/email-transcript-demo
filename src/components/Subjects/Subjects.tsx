import ClassifyIssueAction from "@/actions/ClassifyIssueAction";
import GetAllEmailsAction from "@/actions/GetAllEmailsAction";
import React, { useEffect, useState } from "react";
import EmailList from "../EmailList/EmailList";

import { useEmailContext } from "@/context/EmailContext";

import { BookCheck, Download, Plus, Search } from "lucide-react";
const Subjects = () => {
  const { emails, setEmails, result, setResult, setIsLoading, setTitleEmail } =
    useEmailContext();
  const [openEmailId, setOpenEmailId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const [containerHeight, setContainerHeight] = useState("86vh");
  const [isHeight, setIsHeight] = useState("500px");
  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(windowHeight < 900 ? "86vh" : "89vh");
      setIsHeight(windowHeight < 900 ? "500px" : "1000px");
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  useEffect(() => {
    const loadEmails = async () => {
      const result = await GetAllEmailsAction();
      setEmails(result);
    };
    loadEmails();
  }, []);

  const cleanEmailBody = (textString: string) => {
    return textString
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n+/g, "<br>");
  };

  const toggleEmail = (id: number) => {
    setOpenEmailId(openEmailId === id ? null : id);
  };

  const filteredEmails = emails.filter((email) =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClassifyIssue = async () => {
    try {
      setIsLoading(true);

      if (openEmailId) {
        setTitleEmail(
          emails.find((email) => email.id === openEmailId)?.subject
        );

        const classificationResult = await ClassifyIssueAction(openEmailId);
        setResult(classificationResult);
      }
    } catch (error) {
      console.error("Error classifying email", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`flex w-3/4 flex-col bg-white px-7 py-4 rounded-xl`}
      style={{ height: containerHeight }}
    >
      <div className="flex items-center justify-between h-[65px]">
        <h2 className="text-2xl   text-black">Emails</h2>
        <div className="flex items-center gap-3">
          <button className="px-4 text-[15px] py-[6px] flex items-center gap-2 border border-[#7A757F] rounded-xl text-[#0070ff] hover:bg-[#7a757f18]">
            <Download size={16} /> Import
          </button>
          <button className="px-4  text-[15px] py-[6px] flex items-center gap-2 border border-[#7A757F] rounded-xl text-[#0070ff] hover:bg-[#7a757f18]">
            <Plus size={16} /> Add New
          </button>
          <button
            onClick={handleClassifyIssue}
            className="px-4 py-[6px] text-[15px] bg-[#5475ff] text-white flex items-center gap-2 border border-[#96a7ff] rounded-xl transition-all ease-in-out duration-300  hover:opacity-90"
          >
            <BookCheck size={16} />
            <div>
              Classify
              {openEmailId && <span>(1)</span>}
            </div>
          </button>
        </div>
      </div>
      <div className="mb-5 relative">
        <input
          type="text"
          placeholder="Start typing to search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border w-full border-black px-3 py-2 text-lg h-[50px] pl-9 outline-none rounded-md "
        />
        <Search size={19} className="absolute top-4 left-2.5" />
      </div>

      <div
        className={`flex flex-col w-full overflow-scroll p-2 rounded-lg`}
        style={{ height: isHeight }}
      >
        <EmailList
          filteredEmails={filteredEmails}
          openEmailId={openEmailId}
          toggleEmail={toggleEmail}
          cleanEmailBody={cleanEmailBody}
        />
      </div>
    </div>
  );
};

export default Subjects;
