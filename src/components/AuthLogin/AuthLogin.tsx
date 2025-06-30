"use client"
import React, { useEffect, useState } from 'react';
import { useSearchParams } from "next/navigation";

const AuthLogin = ({ onLogin }: { onLogin: () => void }) => {
  const searchParams = useSearchParams();
  
  const [loader, setLoader] = useState(false)
  setTimeout(() => {
    setLoader(true)
  }, 1);

  const checkToken = async (token: string, url: string): Promise<void> => {
    const response: any = await fetch(process.env.NEXT_PUBLIC_AUTH_URL + '/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })
    if (response.status === 200) {
      onLogin()
    } else {
      localStorage.removeItem("accessToken");
      window.location.href = url;
    }
  }

  useEffect(() => {
    let token = searchParams.get("token");
    let host = ''
    if (typeof window !== 'undefined') {
      host = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
    }

    const redirectUrl = process.env.NEXT_PUBLIC_AUTH_URL || "";
    const url = new URL(redirectUrl);
    url.searchParams.set("redirect_url", host);

    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      token = localStorage.getItem("accessToken");
    }
    if (token) {
      checkToken(token, url.toString());
    } else {
      window.location.href = url.toString();
    }
  }, [searchParams]);


  return (
    <div >
      <p>Loading...</p>
    </div>
  );
};

export default AuthLogin;
