import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";

// Icons
import { BsPhone } from "react-icons/bs";
import { GiClothes } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import Loading from "../Loading/Loading";

/* ----------------------------------
   Category Meta (Icon + Designation)
----------------------------------- */
const categoryMeta = {
  electronics: {
    icon: <BsPhone size={32} />,
    subtitle: "Latest Gadgets & Devices",
  },
  fashion: {
    icon: <GiClothes size={32} />,
    subtitle: "Trendy Wear & Lifestyle",
  },
  books: {
    icon: <FaBook size={32} />,
    subtitle: "Knowledge & Inspiration",
  },
  furniture: {
    icon: <MdChair size={32} />,
    subtitle: "Comfort for Your Space",
  },
  default: {
    icon: <BiCategory size={32} />,
    subtitle: "Browse Collection",
  },
};

/* ----------------------------------
   Helper
----------------------------------- */
const getCategoryMeta = (category) => {
  return categoryMeta[category?.toLowerCase()] || categoryMeta.default;
};

/* ----------------------------------
   Component
----------------------------------- */
const FeatureCategories = () => {
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  // Fetch all products to extract categories
  const { data, isLoading, isError } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      const res = await axiosSecure.get("/products", {
        params: { page: 1, limit: 5000 },
      });
      return res.data.products;
    },
  });

  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load categories
      </div>
    );
  }

  const products = data || [];

  // Unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}&page=1`);
  };

  return (
    <section className="container max-w-7xl mx-auto px-6 py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Featured Categories</h2>
        <p className="text-gray-500 mt-2">Discover products by category</p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((category) => {
          const { icon, subtitle } = getCategoryMeta(category);

          return (
            <div
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="
                group cursor-pointer rounded-2xl p-6
                bg-gradient-to-br from-base-100 to-base-200
                border border-gray-200
                shadow-md
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 md:flex gap-4
              "
            >
              {/* Icon */}
              <div
                className="
                flex items-center justify-center
                  w-14 h-14 rounded-full
                  bg-primary/10 text-primary
                  group-hover:scale-110 transition
                "
              >
                {icon}
              </div>

              <div>
                {/* Category Name */}
                <h3 className="text-lg font-semibold capitalize">{category}</h3>

                {/* Designation */}
                <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCategories;
