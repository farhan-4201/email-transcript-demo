"use client";
require("dotenv").config();
import Login from "@/components/Login/Login";
import MainLayout from "@/components/MainLayout/MainLayout";
import { EmailProvider } from "@/context/EmailContext";

import { useState } from "react";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 1);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
      {loggedIn ? (
        <main className="flex min-h-screen flex-col items-center justify-between">
          <EmailProvider>
            <MainLayout />
          </EmailProvider>
        </main>
      ) : loader ? (
        <Login onLogin={handleLogin} />
      ) : null}
    </>
  );
}