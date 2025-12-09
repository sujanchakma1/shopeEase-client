import React, { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "@/components/ui/Sidebar";
import { FiMenu } from "react-icons/fi";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 shadow-lg transform 
        ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 md:hidden w-56`}
      >
        <Sidebar onClose={() => setOpen(false)} />
      </div>

      {/* Light Gray Overlay on Content (when sidebar open) */}
      {open && (
        <div
          className="fixed inset-0 backdrop-blur-[2px] z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className={`flex flex-col flex-1 transition duration-300 ${open ? "md:opacity-50" : ""}`}>
        {/* Mobile Header */}
        <div className="md:hidden bg-base-100 shadow p-4 flex items-center gap-3 relative z-10">
          <button onClick={() => setOpen(true)}>
            <FiMenu size={26} />
          </button>

          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>

        <main className="p-6 overflow-y-auto h-full relative z-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
