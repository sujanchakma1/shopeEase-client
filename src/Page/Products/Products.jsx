import UseAuth from "@/Hook/UseAuth";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router";
import { toast } from "react-toastify";
import Loading from "../Loading/Loading";

const Products = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  // ✅ URL-driven state
  const category = searchParams.get("category") || "all";
  const search = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;

  const limit = 12;

  // ✅ React Query
  const { data, isLoading } = useQuery({
    queryKey: ["products", category, search, page],
    queryFn: async () => {
      const res = await axiosSecure.get("/products", {
        params: { category, search, page, limit },
      });
      return res.data;
    },
  });
  const [searchInput, setSearchInput] = useState(search);

  if (isLoading) return <Loading />;

  const products = data?.products || [];
  const totalPages = data?.totalPages || 1;

  // ✅ URL updater helper
  const updateParams = (newParams) => {
    setSearchParams({
      category,
      search,
      page,
      ...newParams,
    });
  };

  // ✅ Add to cart
  const handleAddToCart = async (product) => {

    try {
      const res = await axiosSecure.post("/cart", {
        productId: product._id,
        productName: product.name,
        description: product.description,
        brand: product.brand,
        category: product.category,
        image: product.image,
        price: product.price,
        discountPrice: product.discountPrice,
        userEmail: user.email,
        userName: user.displayName,
      });

      if (res.data.insertedId) toast.success(`${product.name} Added to cart!`);
    } catch {
      toast.error(`${product.name} Failed to add`);
    }
  };

  return (
    <div className="container max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-5xl font-bold text-center mb-8">Our Products</h2>
      {products.length === 0 && (
        <p className="text-gray-600 text-center">No Product found.</p>
      )}
      {/* ✅ Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
        {/* Category */}
        <select
          value={category}
          onChange={(e) => updateParams({ category: e.target.value, page: 1 })}
          className="px-4 py-2 bg-base-100 border-2 rounded w-full sm:w-60"
        >
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="furniture">Furniture</option>
        </select>

        {/* Search */}
        <div className="flex w-full sm:w-1/3 gap-2">
          <input
            type="text"
            placeholder="Search products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                updateParams({ search: searchInput, page: 1 });
              }
            }}
            className="px-4 py-2 border rounded-lg w-full"
          />

          <button
            onClick={() => updateParams({ search: searchInput, page: 1 })}
            className="btn rounded-xl btn-primary"
          >
            Search
          </button>
        </div>
      </div>

      {/* ✅ Products Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-base-200 hover:shadow-xl duration-300  group shadow rounded-xl overflow-hidden flex flex-col p-4"
          >
            <Link to={`/products/details/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full rounded-md object-cover group-hover:scale-105 duration-300"
              />
              <div className="pt-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-primary font-bold text-lg">
                    ৳{product.discountPrice}
                  </span>
                  {product.price > product.discountPrice && (
                    <span className="line-through text-gray-400 text-sm">
                      ৳{product.price}
                    </span>
                  )}
                </div>
              </div>
            </Link>

            <div className="flex justify-between items-center mt-auto">
              <button
                className="cursor-pointer hover:text-secondary"
                onClick={() => handleAddToCart(product)}
              >
                <IoCartOutline size={24} />
              </button>

              <Link to={`/products/buy/${product._id}`}>
                <button className="btn btn-primary rounded-lg">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination */}
      <div className="flex justify-center gap-2 mt-8">
        <button
          disabled={page === 1}
          onClick={() => updateParams({ page: page - 1 })}
          className="px-3 py-1 cursor-pointer hover:bg-primary disabled:opacity-50 border rounded"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => updateParams({ page: i + 1 })}
            className={`px-3 py-1 border rounded ${
              page === i + 1 ? "bg-primary" : "cursor-pointer hover:bg-primary"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={page === totalPages}
          onClick={() => updateParams({ page: page + 1 })}
          className="px-3 py-1 cursor-pointer hover:bg-primary disabled:opacity-50 border rounded "
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
