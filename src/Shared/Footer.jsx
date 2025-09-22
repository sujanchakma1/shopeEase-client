// src/components/ui/Footer.jsx
import React from "react"
import { Button } from "@/components/ui/button"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & description */}
          <div>
            <h3 className="text-2xl font-bold text-white">ShopEase</h3>
            <p className="mt-3 text-sm text-slate-300">
              Shopping made easy — curated products, fast delivery, and secure checkout. Join thousands who trust ShopEase.
            </p>
            <div className="mt-4 flex space-x-3">
              <Button size="sm">App</Button>
              <Button size="sm">Gift cards</Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {["Home", "Products", "Categories", "About Us", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold">Company</h4>
            <ul className="mt-3 space-y-2">
              {["Careers", "Press", "Returns", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-white text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-white font-semibold">Stay updated</h4>
            <p className="mt-2 text-sm text-slate-300">Subscribe to get the latest offers and product updates.</p>
            <form className="mt-3 flex flex-col sm:flex-row sm:items-center sm:space-x-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md text-slate-900"
              />
              <Button type="submit" size="sm" className="mt-2 sm:mt-0">Subscribe</Button>
            </form>
            

            <div className="mt-6">
              <h5 className="text-sm font-semibold text-white">Follow us</h5>
              <div className="mt-3 flex space-x-3">
                <a href="#" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700">
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700">
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-md bg-slate-800 hover:bg-slate-700">
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-800" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} ShopEase. All rights reserved.</p>
          <div className="mt-3 sm:mt-0">
            <a href="#" className="hover:text-white px-2">Terms</a>
            <a href="#" className="hover:text-white px-2">Privacy</a>
            <a href="#" className="hover:text-white px-2">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
