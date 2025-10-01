import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Shared/Loading";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

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
      console.log("👉 sending:", { category, search, page, limit });

      const res = await axiosSecure.get("/products", {
        params: { category, search, page, limit },
      });
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const products = data?.products || [];
  const totalPages = Math.ceil((data?.total || 0) / limit);
  console.log("product:", products, "page", totalPages);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Our Products</h2>

      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="toys">Toys</option>
          {/* চাইলে dynamic categories map করে দিতে পারো */}
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="px-4 py-2 border rounded-lg w-full sm:w-1/3"
        />
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-2xl flex flex-col"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-65 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 flex-grow">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">
                  ${product.price}
                </span>
                <button className="px-3 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium">
                  Details
                </button>
              </div>
            </div>
          </div>
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
                ? "bg-indigo-500 text-white"
                : "hover:bg-indigo-100"
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
