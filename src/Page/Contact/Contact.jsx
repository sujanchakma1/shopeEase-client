import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
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

  return (
    <div className="container mx-auto px-6 py-16">
      {/* ===== Header ===== */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">Get in Touch</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions, feedback, or need support? We’d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-base-200 shadow-xl rounded-2xl p-8 space-y-6">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Contact Information
          </h3>

          <div className="flex items-center gap-4">
            <FaPhone className="text-primary mt-1" size={22} />
            <div>
              <p className="text-sm text-gray-500">Phone / WhatsApp</p>
              <a href="tel:+8801571312226" className="text-lg font-semibold">
                +880 1571-312226
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <AiOutlineMail className="text-primary mt-1" size={24} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a
                href="mailto:sujanckz926@gmail.com"
                className="text-lg font-semibold"
              >
                sujanckz926@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <IoLocationOutline className="text-primary mt-1" size={26} />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="text-lg font-semibold">Chattogram, Bangladesh</p>
            </div>
          </div>
        </div>

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
