import ClassifyIssueAction from "@/actions/ClassifyIssueAction";
import GetAllEmailsAction from "@/actions/GetAllEmailsAction";
import React, { useEffect, useState } from "react";
import EmailList from "../EmailList/EmailList";
import { useEmailContext } from "@/context/EmailContext";
import { BookCheck, Search } from "lucide-react";
import { Email } from "@/types";

const Subjects = () => {
  const { emails, setEmails, result, setResult, setIsLoading, setTitleEmail } =
    useEmailContext();
  const [openEmailId, setOpenEmailId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [containerHeight, setContainerHeight] = useState("86vh");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    function updateHeight() {
      const windowHeight = window.innerHeight;
      setContainerHeight(windowHeight < 900 ? "86vh" : "89vh");
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    async function loadEmails() {
      const result = await GetAllEmailsAction();
      setEmails(result);
    }
    loadEmails();
  }, [setEmails]);

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

  const filteredEmails = emails.filter((email: Email) =>
    email.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      className="glass flex flex-col px-8 py-8 w-full max-w-2xl min-h-[70vh] border border-[var(--primary)] shadow-card mb-8"
      style={{ height: "70vh", maxHeight: "70vh" }}
    >
      <div className="flex items-center justify-center gap-3 mb-6 w-full">
        <button
          className="p-2 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          onClick={() => setShowSearch((prev) => !prev)}
          aria-label="Toggle search bar"
        >
          <Search className="w-6 h-6" />
        </button>
        <input
          type="text"
          placeholder="Search emails..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`flex-1 px-6 py-4 text-lg rounded-lg border border-[var(--primary)] bg-[rgba(255,255,255,0.12)] text-[var(--foreground)] placeholder:text-[var(--foreground)] transition-all duration-300 ${
            showSearch
              ? "opacity-100 w-full ml-2"
              : "opacity-0 w-0 ml-0 pointer-events-none"
          }`}
          style={{ minWidth: showSearch ? 200 : 0, maxWidth: 400 }}
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        <EmailList
          filteredEmails={filteredEmails}
          openEmailId={openEmailId}
          toggleEmail={toggleEmail}
          cleanEmailBody={cleanEmailBody}
        />
      </div>
      <button
        className="mt-6 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white font-bold py-3 rounded-lg shadow-card hover:scale-105 transition"
        onClick={async () => {
          if (openEmailId !== null) {
            setIsLoading(true);
            setTitleEmail(
              filteredEmails.find((e) => e.id === openEmailId)?.subject || ""
            );
            const res = await ClassifyIssueAction(openEmailId);
            setResult(res);
            setIsLoading(false);
          }
        }}
        disabled={openEmailId === null}
      >
        <BookCheck /> Classify
      </button>
    </section>
  );
};

export default Subjects;
