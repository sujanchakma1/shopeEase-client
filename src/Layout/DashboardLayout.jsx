import React, { useState } from "react";
import { Outlet } from "react-router";
import { FiMenu } from "react-icons/fi";
import AdminSidebar from "./AdminSidebar";
import UserSidebar from "./UserSidebar";
import Loading from "@/Page/Loading/Loading";
import UseUserRole from "@/Hook/UserRole";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const { role, isLoading,loading } = UseUserRole();

  if (isLoading || loading) {
    return <Loading />;
  }

  const Sidebar =
    role === "admin" ? (
      <AdminSidebar onClose={() => setOpen(false)} />
    ) : (
      <UserSidebar onClose={() => setOpen(false)} />
    );

  return (
    <div className="flex h-screen relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">{Sidebar}</div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 shadow-lg transform 
        ${open ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 md:hidden w-56 bg-base-100`}
      >
        {Sidebar}
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Mobile Header */}
        <div className="md:hidden bg-base-100 shadow p-4 flex items-center gap-3">
          <button onClick={() => setOpen(true)}>
            <FiMenu size={26} />
          </button>
          <h2 className="text-lg font-semibold">Dashboard</h2>
        </div>

        <main className="p-6 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
