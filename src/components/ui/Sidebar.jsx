import Logo from "@/Shared/Logo";
import React from "react";
import { NavLink } from "react-router";

const Sidebar = ({ onClose }) => {
  const menu = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "My Orders", path: "/dashboard/my-orders" },
    { label: "Payments", path: "/dashboard/payments" },
  ];

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
              `p-2 rounded ${
                isActive ? "bg-blue-600 text-white" : "text-gray-700"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
