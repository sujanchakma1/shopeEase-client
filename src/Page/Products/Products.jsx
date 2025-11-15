import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router";

const Products = () => {
  const axiosSecure = UseAxiosSecure();

  // local states
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const limit = 12;

  // query
  const { data, isLoading } = useQuery({
    queryKey: ["products", category, search, page],
    queryFn: async () => {
      const res = await axiosSecure.get("/products", {
        params: { category, search, page, limit },
      });
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / limit);

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-5xl font-bold text-center mb-8">
        Our Products
      </h2>

      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link to={`/products/details/${product._id}`}>
            <div
              key={product._id}
              className="relative bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Discount Badge */}
              {product.discountPrice && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {(
                    ((product.price - product.discountPrice) / product.price) *
                    100
                  ).toFixed(0)}
                  % OFF
                </span>
              )}

              {/* Product Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold transition">
                  {product.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-grow line-clamp-1">
                  {product.description}
                </p>
                <div>
                  {product.discountPrice ? (
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 line-through text-sm">
                        ${product.price}
                      </span>
                      <span className="text-secondary  font-bold text-lg">
                        ${product.discountPrice}
                      </span>
                    </div>
                  ) : (
                    <span className="text-secondary  font-bold text-lg">
                      ${product.price}
                    </span>
                  )}
                </div>

                {/* Pricing */}
                <div className="flex items-center mt-auto justify-between ">
                  <button>
                    {" "}
                    <IoCartOutline size={28} />
                  </button>
                  <Link to={`/product/buy/${product._id}`}>
                  <button
                    className="btn btn-primary text-white rounded-lg transition"
                  >
                    Buy Now
                  </button></Link>
                </div>

                
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx + 1)}
            className={`px-3 py-1 border rounded ${
              page === idx + 1
                ? "bg-primary text-white"
                : "hover:bg-indigo-100 dark:hover:bg-gray-700"
            }`}
          >
            {idx + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
