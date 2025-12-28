import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import heroLottie from "../../assets/Lottie/Hero-lottie.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl hero-content mx-auto px-6 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 text-sm rounded-full bg-white/10 backdrop-blur">
            🛒 Smart Online Shopping
          </span>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Shop Smarter with
            <span className="block text-yellow-400">ShopEase</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-xl">
            A fast, secure and modern e‑commerce platform where quality products
            meet seamless shopping experience.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg btn btn-primary">
              <Link to="/products">Browse Products →</Link>
            </button>
            <button className="rounded-lg btn-secondary btn btn-outline">
              <Link to="/about"> Learn More</Link>
            </button>
          </div>
        </motion.div>
        {/* Right Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-full">
            <Lottie animationData={heroLottie} loop />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
