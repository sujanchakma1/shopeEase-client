import React from "react";
import { Link } from "react-router";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
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
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg tracking-widest text-primary font-semibold mb-5">
              Quick Links
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

          {/* Need Help */}
          <div>
            <h4 className="text-lg tracking-widest text-primary font-semibold mb-5">
              Need Help?
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-primary">
                  Term & Condition
                </Link>
              </li>
              <li>
                <Link to="/track-your-order" className="hover:text-primary">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link to="/return-refund-policy" className="hover:text-primary">
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-lg tracking-widest text-primary font-semibold mb-5">
              Stay Connected
            </h4>
            <p className="text-sm mb-4">
              Subscribe & follow us to get latest offers and updates.
            </p>
            <div className="flex gap-4">
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaGithub size={18} />
              </a>
              <a
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition"
                href="#"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom */}
        <div className=" text-center text-sm ">
          <p className="text-slate-400 text-center">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
