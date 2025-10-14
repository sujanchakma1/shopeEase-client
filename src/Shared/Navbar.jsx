// src/components/ui/Navbar.jsx
import React from "react";
import { NavLink } from "react-router"; // ensure react-router-dom v6+
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import UseAuth from "@/Hook/UseAuth";
import { LogOut } from "lucide-react";
import Logo from "./Logo";
import ThemeControl from "./ThemeControl";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const links = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Checkout", to: "/checkout" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
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
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center">
          <Logo></Logo>

          {/* Mobile dropdown */}
          <div className="lg:hidden ml-4">
            <details className="relative">
              <summary className="cursor-pointer p-2 rounded-md hover:bg-slate-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </summary>
              <ul className="absolute mt-2 w-40 border rounded-md shadow-md flex flex-col p-2 space-y-1">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded ${
                          isActive ? " font-semibold" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  ` font-medium ${
                    isActive ? " border-b-2 border-slate-300" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <ThemeControl></ThemeControl>
          <NavLink
            to="/cart"
            className="flex items-center px-3 py-2 rounded-xl hover:bg-secondary "
          >
            <FaShoppingCart className="mr-1" /> Cart
          </NavLink>
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary rounded-lg">
                <LogOut size={16} />
                Logout
            </button>
          ) : (
            <Button size="lg">
              <NavLink to="/login" className="flex items-center text-white">
                <FaUser className="mr-2" /> Login
              </NavLink>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
