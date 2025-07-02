import React from "react";
import Sidebar from "./Sidebar";

function SidebarOverlay({ activeSection, setActiveSection }: { activeSection: number, setActiveSection: (idx: number) => void }) {
  return (
    <div className="flex h-[100vh]">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}

export default SidebarOverlay;
