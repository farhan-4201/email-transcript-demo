import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full glass flex items-center justify-between px-10 py-5 mb-8 border-b-2 border-[var(--primary)] shadow-card" style={{backdropFilter: 'blur(18px)', background: 'rgba(36, 37, 38, 0.7)'}}>
      <div className="flex items-center gap-4">
        <Image
          src={Logo}
          width={48}
          height={48}
          alt="Logo"
          className="rounded-full border-2 border-[var(--primary)] shadow-card"
        />
        <span className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent drop-shadow-lg">
          AI Chain
        </span>
      </div>
      <nav className="flex gap-8">
        <a href="#" className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition">Dashboard</a>
        <a href="#" className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition">Support</a>
        <a href="#" className="text-lg font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition">FAQ</a>
      </nav>
    </header>
  );
};

export default Header;
