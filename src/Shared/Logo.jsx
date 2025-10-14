import React from "react";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-3 items-center">
        {/* Icon */}
        <div className="text-indigo-500">
          <FaShopify size={42} />
        </div>
        <h1 className="logo-font text-2xl font-bold mt-1 text-indigo-300">
          Shop<span className="text-orange-400">Ease</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
