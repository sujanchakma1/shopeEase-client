// src/components/ui/Footer.jsx
import React from "react";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-base-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & description */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold">ShopEase</h3>
            <p className="mt-3 text-sm">
              Shopping made easy — curated products, fast delivery, and secure
              checkout. Join thousands who trust ShopEase.
            </p>
            <Link to="/products">
              <Button size="sm" className=" text-white cursor-pointer">
                Products
              </Button>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className=" font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/products" className="hover:text-primary text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-primary text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className=" font-semibold">Company</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/career" className="hover:text-primary text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-primary text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className=" font-semibold">Stay updated</h4>
            <p className="mt-2 text-sm">
              Subscribe to get the latest offers and product updates.
            </p>
            <div className="mt-6">
              <h5 className="text-sm font-semibold">Follow us</h5>
              <div className="mt-3 flex space-x-3">
                <a href="#" className="p-2 rounded-md hover:text-gray-500">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-md hover:text-gray-500">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-md hover:text-gray-500">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-600" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <div className="mt-3 sm:mt-0">
            <a href="#" className="hover:text-gray-500 px-2">
              Terms
            </a>
            <a href="#" className="hover:text-gray-500 px-2">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-500 px-2">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
