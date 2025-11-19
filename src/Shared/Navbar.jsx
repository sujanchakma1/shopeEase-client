// src/components/ui/Navbar.jsx
import React from "react";
import { NavLink } from "react-router"; // ensure react-router-dom v6+
import { FaUser } from "react-icons/fa";
import UseAuth from "@/Hook/UseAuth";
import { LogOut } from "lucide-react";
import Logo from "./Logo";
import ThemeControl from "./ThemeControl";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { House, ShoppingBag, ShoppingCart, Info, Phone } from "lucide-react";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const links = [
    { name: "Home", to: "/", icon: <House size={16} /> },
    { name: "Products", to: "/products", icon: <ShoppingBag size={16} /> },
    { name: "About", to: "/about", icon: <Info size={16} /> },
    { name: "Contact", to: "/contact", icon: <Phone size={16} /> },
  ];
  const handleLogout = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="bg-base-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo & Mobile Menu */}
        <div className="flex gap-2 items-center">
          {/* Mobile dropdown */}
          <div className="lg:hidden">
            <div className="drawer lg:drawer-open">
              <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* <!-- Navbar --> */}
                <label
                  htmlFor="my-drawer-4"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  {/* <!-- Sidebar toggle icon --> */}
                  <FiMenu size={24} />
                </label>
              </div>

              <div className="drawer-side is-drawer-close:overflow-visible">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                  {/* <!-- Sidebar content here --> */}
                  <ul className="menu w-full space-y-4 grow">
                    {links.map((link) => (
                      <li key={link.to}>
                        <NavLink
                          to={link.to}
                          className={({ isActive }) =>
                            ` flex gap-2 items-center ${
                              isActive ? " border-b-2 border-slate-300" : ""
                            }`
                          }
                        >
                          {link.icon}
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Logo></Logo>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  ` font-medium flex gap-1 items-center ${
                    isActive ? " border-b-2 border-slate-300" : ""
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <ThemeControl></ThemeControl>
          <NavLink to="/cart" className="hover:text-primary ">
            <IoCartOutline size={28} />
          </NavLink>
          {user ? (
            <button onClick={handleLogout} className="hover:text-primary">
              <LogOut size={24} />
            </button>
          ) : (
            <NavLink to="/login" className="hover:text-primary">
              <FaUser className="mr-2" size={24} />
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
