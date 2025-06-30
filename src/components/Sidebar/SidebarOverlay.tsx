import React from "react";
import Sidebar from "./Sidebar";

function SidebarOverlay() {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
    </div>
  );
}

export default SidebarOverlay;
