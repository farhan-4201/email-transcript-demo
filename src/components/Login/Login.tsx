"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/images/classifier.jpg";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    // Check if username and password are valid (you can implement your own logic here)
    if (username && password) {
      if (
        username === process.env.NEXT_PUBLIC_REACT_APP_USERNAME &&
        password === process.env.NEXT_PUBLIC_REACT_APP_PASSWORD
      ) {
        onLogin();
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      // alert('Username or Password is empty. Please try again.');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="glass flex flex-col items-center justify-center w-full h-full max-w-md mx-4 p-10">
        <Image
          src={Logo}
          width={70}
          height={70}
          alt="Logo"
          className="mb-4 rounded-full shadow-lg"
        />
        <h1 className="text-3xl font-extrabold text-[var(--primary)] mb-2 tracking-tight drop-shadow-lg">
          Sign In
        </h1>
        <p className="text-[var(--foreground)] mb-8 text-base font-medium">
          Welcome back! Please enter your credentials.
        </p>
        <div className="w-full mb-5">
          <input
            className="w-full h-12 px-4 border border-[var(--primary)] rounded-lg focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none text-lg bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground)]/70 transition"
            type="text"
            placeholder="Username"
            value={username || ""}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="w-full mb-7">
          <input
            className="w-full h-12 px-4 border border-[var(--primary)] rounded-lg focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--primary)] focus:outline-none text-lg bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground)]/70 transition"
            type="password"
            placeholder="Password"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="current-password"
          />
        </div>
        <button
          className={`w-full h-12 flex items-center justify-center gap-3 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-md
            ${
              username && password
                ? "bg-[var(--primary)] text-white hover:bg-[var(--accent)]"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }
          `}
          onClick={handleLogin}
          disabled={!username || !password}
        >
          <span className="text-white">Sign In</span>
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Login;
