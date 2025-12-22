import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <div className="flex gap-3 items-center">
        <h1 className="logo-font text-2xl font-bold mt-1 text-primary">
          Shop<span className="text-secondary">Ease</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
