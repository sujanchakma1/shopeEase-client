import React from "react";
import { FaShoppingCart, FaShippingFast, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaShoppingCart size={40} />,
    title: "Browse & Choose",
    description:
      "Explore our wide range of products across electronics, fashion, books, and furniture. Select what you love with ease.",
  },
  {
    icon: <FaShippingFast size={40} />,
    title: "Fast & Secure Delivery",
    description:
      "We ensure fast and secure delivery to your doorstep, tracking your orders every step of the way.",
  },
  {
    icon: <FaSmile size={40}/>,
    title: "Enjoy & Review",
    description:
      "Receive your order, enjoy your products, and share your experience by leaving a review to help others.",
  },
];

const HowItWork = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          How It Works
        </h2>
        <p className="text-gray-500 mb-12">
          ShopEase makes shopping simple and hassle-free. Here's how you can get started in three easy steps.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6
                bg-gradient-to-br from-base-100 to-base-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 text-center"
            >
              <div className="flex justify-center text-secondary mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
