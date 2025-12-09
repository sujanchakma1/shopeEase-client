// src/components/ui/HeroSection.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import heroLottie from "../../assets/Lottie/Hero-lottie.json";
import Lottie from "lottie-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 lg:20 flex flex-col-reverse lg:flex-row items-center gap-8">
        {/* Left side - Text + Button */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <span className="text-yellow-400">ShopEase</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200">
            Fast, secure, and reliable shopping experience. Discover thousands
            of products at your fingertips.
          </p>
          <div className="mt-6">
            <Button size="lg">
              <Link to="/products">Shop Now</Link>
            </Button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-64 h-64 mx-auto">
          <Lottie animationData={heroLottie} loop={true} />
        </div>
      </div>
    </section>
  );
}
