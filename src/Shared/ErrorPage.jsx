import React from "react";
import Lottie from "lottie-react";
import notFound from "../assets/Lottie/not-found.json";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      {/* Lottie */}
      <div className="w-full max-w-lg">
        <Lottie animationData={notFound} loop />
      </div>

      {/* Text */}
      <h1 className="text-3xl font-bold">Oops! </h1>
      <p className="text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <div className="flex gap-4">
        <Link to="/">
          <button className="btn btn-primary rounded-lg">Back to Home</button>
        </Link>
          <button onClick={()=>navigate(-1)} className="btn btn-primary btn-outline rounded-lg">
            Back to Previous Page
          </button>
      </div>
    </div>
  );
};

export default ErrorPage;
