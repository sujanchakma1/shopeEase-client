import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Logo></Logo>
            <p className="text-sm leading-relaxed">
              Shopping made easy — curated products, fast delivery, and secure
              checkout. Trusted by thousands of happy customers.
            </p>
            <Link
              to="/products"
              className="inline-block mt-2 text-sm font-semibold hover:text-primary text-blue-500"
            >
              Browse Products →
            </Link>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm tracking-widest text-white mb-5">SUPPORT</h4>
            <div className="flex items-center gap-4 mb-4 p-4 rounded-xl border border-white/10">
              <FaPhoneAlt className="text-primary" />
              <div>
                <p className="text-xs text-slate-400">9 AM – 9 PM</p>
                <p className="font-semibold text-white">+880 1570000000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10">
              <FaMapMarkerAlt className="text-primary" />
              <div>
                <p className="text-sm">Find Our Store</p>
                <p className="font-semibold text-white">
                  Chattogram, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm tracking-widest text-white mb-5">
              QUICK LINKS
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/products" className="hover:text-primary">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-sm tracking-widest text-white mb-5">
              STAY CONNECTED
            </h4>
            <p className="text-sm mb-4">
              Subscribe & follow us to get latest offers and updates.
            </p>
            <div className="flex gap-4">
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaFacebookF />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm gap-4">
          <p className="text-slate-400">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/support" className="hover:text-primary">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
