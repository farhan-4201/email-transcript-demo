import { ClassifyEmailResponse, Email } from "@/types";
import React, { createContext, useState, useContext } from "react";

interface EmailContextProps {
  emails: Email[];
  setEmails: React.Dispatch<React.SetStateAction<Email[]>>;
  result: ClassifyEmailResponse | null;
  setResult: React.Dispatch<React.SetStateAction<ClassifyEmailResponse | null>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  titleEmail: string | undefined;
  setTitleEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const EmailContext = createContext<EmailContextProps | undefined>(undefined);

export const useEmailContext = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmailContext must be used within a EmailProvider");
  }
  return context;
};

export const EmailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleEmail, setTitleEmail] = useState<string | undefined>("");
  const [result, setResult] = useState<ClassifyEmailResponse | null>(null);

  return (
    <EmailContext.Provider
      value={{
        emails,
        setEmails,
        result,
        setResult,
        isLoading,
        setIsLoading,
        titleEmail,
        setTitleEmail,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
};
