import React, { useState } from "react";
import Emails from "../Emails/Emails";
import Support from "../Support/Support";
import FAQ from "../FAQ/FAQ";
import SidebarOverlay from "../Sidebar/SidebarOverlay";

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState(0); // 0: Dashboard, 1: Support, 2: FAQ

  return (
    <div className="flex w-full min-h-screen">
      <SidebarOverlay activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1">
        {activeSection === 0 && <Emails />}
        {activeSection === 1 && <Support />}
        {activeSection === 2 && <FAQ />}
      </div>
    </div>
  );
};

export default MainLayout;
