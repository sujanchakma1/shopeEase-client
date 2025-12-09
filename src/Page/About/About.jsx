import { FaShippingFast, FaShieldAlt, FaHeadset, FaListAlt, FaUsers, FaStore } from "react-icons/fa";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-24">

      {/* ===================== HERO / INTRO ===================== */}
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About <span className="text-secondary">ShopEase</span>
        </h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          ShopEase is built with one goal — make online shopping fast, simple, and trusted.
          We combine smooth technology, secure payment flow, and carefully curated products
          to give customers an effortless shopping experience.
        </p>
      </section>

      {/* ===================== OUR STORY ===================== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://i.ibb.co/8c9Zk0b/ecommerce-team.jpg"
          alt="Our Story"
          className="rounded-2xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            ShopEase started with a simple frustration — online shopping was either confusing,
            unsafe, or unreliable. We wanted to fix that.  
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            What began as a small idea turned into a vision:  
            “A clean, modern marketplace where people enjoy buying things, not struggle with it.”
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Today, ShopEase serves customers nationwide with a growing network of reliable
            sellers, essential products, and fast delivery. But our mission remains the same —
            convenience without compromise.
          </p>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Why Choose <span className="text-secondary">Us</span>?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaShippingFast className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">Fast & Reliable Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Get your products delivered quickly with our optimized logistics network.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaShieldAlt className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">Secure Payment System</h3>
            <p className="text-gray-600 text-sm mt-2">
              End-to-end encrypted checkout ensures your money and data stay protected.
            </p>
          </div>

          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaHeadset className="text-4xl text-secondary mx-auto mb-4" />
            <h3 className="font-bold text-lg">24/7 Customer Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our team is always ready to help — anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== STATISTICS ===================== */}
      <section className=" p-10">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaStore className="text-4xl text-secondary mx-auto mb-2" />
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-600">Products Available</p>
          </div>

          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaUsers className="text-4xl text-secondary mx-auto mb-2" />
            <h3 className="text-3xl font-bold">9,500+</h3>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaListAlt className="text-4xl text-secondary mx-auto mb-2" />
            <h3 className="text-3xl font-bold">18,000+</h3>
            <p className="text-gray-600">Orders Completed</p>
          </div>

          <div className="p-6 bg-base-200 rounded-2xl shadow text-center">
            <FaShieldAlt className="text-4xl text-secondary mx-auto mb-2" />
            <h3 className="text-3xl font-bold">99.2%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="bg-base-200 p-5 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">How fast is delivery?</summary>
            <p className="mt-2 text-gray-600">
              Most orders are delivered within 2–5 business days depending on location.
            </p>
          </details>

          <details className="bg-base-200 p-5 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">Is online payment safe?</summary>
            <p className="mt-2 text-gray-600">
              Yes — we use secure, certified payment gateways with encrypted transactions.
            </p>
          </details>

          <details className="bg-base-200 p-5 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">What is the return policy?</summary>
            <p className="mt-2 text-gray-600">
              You can return products within 7 days if unused and in original condition.
            </p>
          </details>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Meet the <span className="text-secondary">Team</span>
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

          {[
            { name: "Sujan Chakman", role: "Full Stack Developer", img: "https://i.pravatar.cc/300?img=1" },
            { name: "Rs Ronad", role: "UI/UX Designer", img: "https://i.pravatar.cc/300?img=2" },
            { name: "Janatul Jisa", role: "Marketing Specialist", img: "https://i.pravatar.cc/300?img=3" },
            { name: "Mohammad Akash", role: "Frontend Developer", img: "https://i.pravatar.cc/300?img=4" },
            { name: "Onik Das", role: "Project Manager", img: "https://i.pravatar.cc/300?img=5" },
            { name: "Mohammad Masud", role: "Sales Manager", img: "https://i.pravatar.cc/300?img=6" },
          ].map((member, idx) => (
            <div key={idx} className="bg-base-200 p-6 rounded-xl shadow-lg text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}

        </div>
      </section>
    </div>
  );
};

export default About;
