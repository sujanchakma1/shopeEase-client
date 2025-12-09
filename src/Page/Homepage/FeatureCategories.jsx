import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";

const FeatureCategories = () => {
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  // Load ALL PRODUCTS to extract categories
  const { data, isLoading } = useQuery({
    queryKey: ["allCategories"],
    queryFn: async () => {
      // large limit to get all products
      const res = await axiosSecure.get("/products", {
        params: { page: 1, limit: 5000 }
      });
      return res.data.products;
    },
  });

  if (isLoading) return <p>Loading Categories...</p>;

  const allProducts = data || [];

  // Extract UNIQUE categories
  const categories = [...new Set(allProducts.map((p) => p.category))];

  const handleCategoryClick = (cat) => {
    navigate(`/products?category=${cat}&page=1`);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Featured Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className="bg-white shadow border p-6 rounded-xl cursor-pointer 
                       hover:shadow-lg hover:scale-105 transition text-center"
          >
            <h3 className="text-lg font-semibold capitalize">{cat}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCategories;
