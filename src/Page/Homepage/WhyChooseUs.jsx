import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8 ">
          <div
            className="
                group rounded-2xl p-6
                bg-gradient-to-br from-base-100 to-base-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 text-center
              "
          >
            <FaShippingFast className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">Fast & Reliable Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get your products delivered quickly with our optimized logistics
              network.
            </p>
          </div>

          <div
            className="
                group rounded-2xl p-6
                bg-gradient-to-br from-base-100 to-base-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 text-center
              "
          >
            <FaShieldAlt className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">Secure Payment System</h3>
            <p className="text-gray-600 text-sm mt-2">
              End-to-end encrypted checkout ensures your money and data stay
              protected.
            </p>
          </div>

          <div
            className="
                group rounded-2xl p-6
                bg-gradient-to-br from-base-100 to-base-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 text-center
              "
          >
            <FaHeadset className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">24/8 Customer Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our team is always ready to help — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
