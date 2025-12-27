import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";
import UseAuth from "@/Hook/UseAuth";
import { LogOut } from "lucide-react";
import Logo from "./Logo";
import ThemeControl from "./ThemeControl";
import { IoCartOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { House, ShoppingBag, Info, Phone } from "lucide-react";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: cartItems = [], isLoading } = useQuery({
    queryKey: ["cartItems", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });
  const navigate = useNavigate();
  const links = [
    { name: "Home", to: "/", icon: <House size={12} /> },
    { name: "Products", to: "/products", icon: <ShoppingBag size={12} /> },
    { name: "About", to: "/about", icon: <Info size={12} /> },
    { name: "Contact", to: "/contact", icon: <Phone size={12} /> },
  ];
  const handleLogout = () => {
    logOut()
      .then((res) => {
        localStorage.removeItem("access-token");
        navigate("/");
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <nav className="bg-base-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo &  */}
        <Logo></Logo>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4">
          {links.map((link) => (
            <h2 key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center font-medium gap-2 hover:text-primary  ${
                    isActive ? " border-b border-slate-300" : ""
                  }`
                }
              >
                {link.icon}
                {link.name}
              </NavLink>
            </h2>
          ))}
          {user && (
            <h2>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  ` flex gap-2 font-medium hover:text-primary items-center ${
                    isActive ? " border-b border-slate-300" : ""
                  }`
                }
              >
                <LuLayoutDashboard size={12} /> Dashboard
              </NavLink>
            </h2>
          )}
        </div>

        {/* Right buttons */}
        <div className="flex items-center space-x-4">
          <ThemeControl></ThemeControl>

          {user ? (
            <div className="dropdown text-xl dropdown-end">
              <div tabIndex={0} role="button" className="cursor-pointer">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={user.photoURL}
                  alt="Profile"
                />
              </div>
              <div
                tabIndex={0}
                className="menu space-y-5 dropdown-content bg-gradient-to-br from-base-100 to-base-200 rounded-xl z-1 mt-5 w-74 p-2 shadow-sm"
              >
                <div className="flex justify-center">
                  <div className="space-y-2">
                    <img
                      className="w-16 h-16 ml-8 rounded-full object-cover"
                      src={user.photoURL}
                      alt="Profile"
                    />
                    <h2 className="font-semibold text-xl px-3">
                      {user.displayName}
                    </h2>
                  </div>
                </div>
                {links.map((link) => (
                  <h2 key={link.to}>
                    <NavLink
                      to={link.to}
                      className=" flex gap-2 items-center border-b-1 border-b-gray-500 p-1 hover:text-primary"
                    >
                      {link.icon}
                      {link.name}
                    </NavLink>
                  </h2>
                ))}
                {user && (
                  <h2>
                    <NavLink
                      to="/dashboard"
                      className=" flex gap-2 items-center border-b-1 border-b-gray-500 p-1 hover:text-primary"
                    >
                      <LuLayoutDashboard size={12} /> Dashboard
                    </NavLink>
                  </h2>
                )}

                <button
                  onClick={handleLogout}
                  className="hover:cursor-pointer font-medium flex gap-2 items-center text-red-500 p-1"
                >
                  <LogOut size={14} /> LogOut
                </button>
              </div>
            </div>
          ) : (
            <div className="text-xl">
              <NavLink to="/login" className="hidden lg:flex">
                <button className="flex items-center btn btn-primary rounded-lg">
                  <FaUser />
                  Login
                </button>
              </NavLink>
              <div className="dropdown dropdown-end flex lg:hidden">
                <div tabIndex={0} role="button" className="cursor-pointer">
                  <RiMenu3Line size={28} />
                </div>
                <div
                  tabIndex={-1}
                  className="menu space-y-5 dropdown-content bg-gradient-to-br from-base-100 to-base-200 rounded-xl z-1 mt-9 w-74 p-2 shadow-sm"
                >
                  {links.map((link) => (
                    <h2 key={link.to}>
                      <NavLink
                        to={link.to}
                        className="flex gap-2 items-center border-b-1 border-b-gray-500 p-1 hover:text-primary"
                      >
                        {link.icon}
                        {link.name}
                      </NavLink>
                    </h2>
                  ))}

                  <NavLink to="/login">
                    <button className="w-full flex items-center btn btn-primary rounded-lg">
                      <FaUser />
                      Login
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Cart */}
      <div className="fixed top-[500px] right-6 bg-primary p-2 px-5 rounded-full z-50">
        <NavLink
          to="/cart"
          className="relative flex flex-col items-center hover:text-secondary"
        >
          {/* Cart Icon */}
          <IoCartOutline size={28} />

          {/* Badge */}
          <span
            className="absolute -top-2 -right-2 bg-red-600  
                     text-xs font-bold w-5 h-5 flex items-center 
                     justify-center rounded-full"
          >
            {isLoading ? 0 : cartItems.length}
          </span>

          <h2 className="font-semibold text-sm mt-1">Cart</h2>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
