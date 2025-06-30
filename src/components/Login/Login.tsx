"use client";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Logo from "../../assets/images/log5.avif";

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
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-[#1e5397] via-[#1f4eff] to-[#3b8afa] text-center font-bold text-2xl gap-4">
      <Image src={Logo} width={50} height={50} alt="Logo" />

      <div className="mb-4">
        <input
          className="w-80 h-15 p-4 border-2 border-black rounded-lg focus:border-blue-500 focus:outline-none text-xl"
          type="text"
          placeholder="Username"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <input
          className="w-80 h-15 p-4 border-2 border-black rounded-lg focus:border-blue-500 focus:outline-none text-xl"
          type="password"
          placeholder="Password"
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button
        className={`w-80 h-15 px-8 py-4 flex items-center justify-center gap-4 rounded-lg text-xl font-semibold transition-colors duration-200 
          ${
            username && password
              ? "bg-[#3b8afa] text-white hover:bg-blue-500"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
        onClick={handleLogin}
        disabled={!username || !password}
      >
        Sign In
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Login;
