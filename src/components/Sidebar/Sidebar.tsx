import React, { useState } from 'react';
import { FileQuestion, LayoutDashboard, LifeBuoy, X, Menu } from 'lucide-react';
import Image from "next/image";
import Logo from "@/assets/images/logistick.png";
import Avatar from "@/assets/images/avatar.png";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const slideArr = [
    { text: 'Dashboard', icon: <LayoutDashboard />, variantValue: 0 },
    { text: 'Support', icon: <LifeBuoy /> },
    { text: 'FAQ', icon: <FileQuestion /> },
  ];

  if (!open) {
    return (
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-[var(--primary)] text-white rounded-full shadow-card hover:bg-[var(--accent)] transition"
        onClick={() => setOpen(true)}
        aria-label="Open dashboard"
      >
        <Menu size={28} />
      </button>
    );
  }

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#232526] via-[#485563] to-[#00c6ff] shadow-2xl z-40 flex flex-col items-center py-8 px-4 transition-all duration-300">
      <button
        className="absolute top-4 right-4 p-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--accent)] transition"
        onClick={() => setOpen(false)}
        aria-label="Close dashboard"
      >
        <X size={22} />
      </button>
      <Image src={Logo} width={48} height={48} alt="Logo" className="mb-8 rounded-full border-2 border-[var(--primary)] shadow-card" />
      <nav className="flex flex-col gap-6 flex-1 w-full mt-8">
        {slideArr.map((el, id) => (
          <button
            onClick={() => setActiveIndex(id)}
            className={`flex flex-row items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-base w-full ${activeIndex === id ? 'bg-[var(--primary)] text-white shadow-card' : 'hover:bg-[var(--muted)] text-[var(--foreground)]'}`}
            key={id}
          >
            <span className="text-2xl">{el.icon}</span>
            <span>{el.text}</span>
          </button>
        ))}
      </nav>
      <Image className="rounded-full shadow-card border-2 border-[var(--primary)] mt-12" src={Avatar} width={52} height={52} alt="Avatar" />
    </aside>
  );
}

export default Sidebar;
