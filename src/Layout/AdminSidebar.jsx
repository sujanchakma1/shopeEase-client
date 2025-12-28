import UseAuth from "@/Hook/UseAuth";
import Logo from "@/Shared/Logo";
import { LogOut } from "lucide-react";
import React from "react";
import { Navigate, NavLink } from "react-router";

const AdminSidebar = ({ onClose }) => {
  const { logOut } = UseAuth();
  const menu = [
    { label: "Dashboard", path: "/dashboard/admin-home" },
    { label: "Manage Users", path: "/dashboard/manage-users" },
    { label: "Add Product", path: "/dashboard/add-product" },
    { label: "Manage Product", path: "/dashboard/manage-product" },
    { label: "Manage Ordered", path: "/dashboard/manage-order" },
  ];

  const handleLogout = async () => {
    await logOut()
      .then(() => {
        localStorage.removeItem("access-token");
        window.location.replace("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-56 bg-base-200 h-full shadow-md p-5">
      <div className="mb-8">
        <Logo></Logo>
      </div>

      <nav className="flex flex-col space-y-3">
        {menu.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => onClose && onClose()}
            className={({ isActive }) =>
              `p-2 rounded ${isActive ? "bg-blue-600 text-white" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="hover:cursor-pointer font-medium flex gap-2 items-center text-red-500 p-1"
        >
          <LogOut size={14} /> LogOut
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
