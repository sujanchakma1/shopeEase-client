import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaListAlt,
  FaUsers,
  FaStore,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect } from "react";
import sujan from "../../assets/Team/Sujan.png";
import akash from "../../assets/Team/akash.jpeg";
import jisa from "../../assets/Team/Jisa.jpg";
import onik from "../../assets/Team/onik.png";
import masud from "../../assets/Team/masud.png";
import ronad from "../../assets/Team/ronad.jpeg";
import story from "../../assets/Team/about-story.png"

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
          ShopEase is built with one goal — make online shopping fast, simple,
          and trusted. We combine smooth technology, secure payment flow, and
          carefully curated products to give customers an effortless shopping
          experience.
        </p>
      </section>

      {/* ===================== OUR STORY ===================== */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={story}
          alt="Our Story"
          className="rounded-2xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            ShopEase started with a simple frustration — online shopping was
            either confusing, unsafe, or unreliable. We wanted to fix that.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            What began as a small idea turned into a vision: “A clean, modern
            marketplace where people enjoy buying things, not struggle with it.”
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Today, ShopEase serves customers nationwide with a growing network
            of reliable sellers, essential products, and fast delivery. But our
            mission remains the same — convenience without compromise.
          </p>
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
            <summary className="font-semibold text-lg">
              How fast is delivery?
            </summary>
            <p className="mt-2 text-gray-600">
              Most orders are delivered within 2–5 business days depending on
              location.
            </p>
          </details>

          <details className="bg-base-200 p-5 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">
              Is online payment safe?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes — we use secure, certified payment gateways with encrypted
              transactions.
            </p>
          </details>

          <details className="bg-base-200 p-5 rounded-xl cursor-pointer">
            <summary className="font-semibold text-lg">
              What is the return policy?
            </summary>
            <p className="mt-2 text-gray-600">
              You can return products within 7 days if unused and in original
              condition.
            </p>
          </details>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section>
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Meet the Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "Sujan Chakma",
              role: "Full Stack Developer",
              img: sujan,
              github: "https://github.com/sujanchakma1",
              LinkedIn: "https://www.linkedin.com/in/sujan99",
            },
            {
              name: "Rafiul Islam Ronad",
              role: "MERN Stack Developer",
              img: ronad,
              github: "https://github.com/ronadislam",
              LinkedIn: "https://www.linkedin.com/in/rafiulronad",
            },
            {
              name: "Mohammad Akash",
              role: "Frontend Developer",
              img: akash,
              github: "",
              LinkedIn: "",
            },
            {
              name: "Jannatul Jisa",
              role: "Marketing Specialist",
              img: jisa,
              github: "",
              LinkedIn: "",
            },

            {
              name: "Onik Das",
              role: "Project Manager",
              img: onik,
              github: "",
              LinkedIn: "",
            },
            {
              name: "Abdullah Al Masud",
              role: "Sales Manager",
              img: masud,
              github: "",
              LinkedIn: "",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-base-200 p-6 space-y-2 rounded-xl shadow-lg text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="mt-4 font-bold text-lg">{member.name}</h3>
              <p className="text-gray-700 text-sm">{member.role}</p>
              <div className="flex gap-4 justify-center">
                <a href={member.github} className="hover:text-primary">
                  <FaGithub size={24}/>
                </a>
                <a href={member.LinkedIn} className="hover:text-primary">
                  <FaLinkedin size={24}/>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
