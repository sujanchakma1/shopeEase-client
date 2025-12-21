import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vu5dk7h",
        "template_m0o5hxk",
        form.current,
        "J_7kVUO3QuYneugNQ"
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send message.");
        }
      );
  };

  function InfoCard({ icon, title, text }) {
    return (
      <div
        className="group cursor-pointer rounded-2xl p-6 text-center
                bg-gradient-to-br from-base-100 to-base-200
                border border-gray-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300"
      >
        <div
          className="mx-auto mb-4 flex items-center justify-center
                  w-14 h-14 rounded-full
                  bg-primary/10 text-primary
                  group-hover:scale-110 transition"
        >
          {icon}
        </div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{text}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <InfoCard
            icon={<FaPhoneAlt size={26}/>}
            title="Phone"
            text="+880 1570000000"
          />
          <InfoCard
            icon={<FaEnvelope size={26}/>}
            title="Email"
            text="support@shopease.com"
          />
          <InfoCard
            icon={<FaMapMarkerAlt size={26}/>}
            title="Address"
            text="Chattogram, Bangladesh"
          />
          <InfoCard
            icon={<FaClock size={26}/>}
            title="Working Hours"
            text="9 AM – 9 PM"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Send Message */}
        <div className="bg-base-200 shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Send a Message
          </h3>

          {/* 🔥 IMPORTANT: ref={form} */}
          <form ref={form} onSubmit={sendEmail} className="space-y-1">
            <label className="label font-semibold">
              Your Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="from_email" // 🔥 must match EmailJS template
              required
              className="input input-bordered w-full"
              placeholder="Your email"
            />
            <label className="label font-semibold">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="subject" // 🔥 must match template
              required
              className="input input-bordered w-full"
              placeholder="Subject"
            />
            <label className="label font-semibold">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message" // 🔥 must match template
              rows="4"
              required
              className="textarea textarea-bordered w-full"
              placeholder="Your message..."
            ></textarea>

            <button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center mt-2 gap-2"
            >
              Send Message <FiSend />
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-bold mb-4">We’d love to hear from you</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Whether you have a question about products, orders, or partnerships
            — our team is ready to answer all your questions.
          </p>
          <ul className="space-y-3 text-sm">
            <li>✔ Fast customer support</li>
            <li>✔ Trusted e-commerce service</li>
            <li>✔ Customer-first approach</li>
          </ul>
        </div>
      </div>

      {/* ===== Map ===== */}
      <div className="mt-16">
        <iframe
          title="Chattogram Polytechnic Institute Map"
          src="https://www.google.com/maps?q=Chattogram+Polytechnic+Institute,Chittagong,Bangladesh&z=16&output=embed"
          className="w-full h-[420px] rounded-2xl border shadow"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
