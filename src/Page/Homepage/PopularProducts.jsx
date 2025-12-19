import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { IoCartOutline } from "react-icons/io5";

const PopularProducts = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["popularProducts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/product");
      const sorted = res.data.reverse(); // latest first
      return sorted.slice(0, 8); // first 8 items
    },
  });

  const handleAddToCart = async (product) => {
    try {
      const cartItem = {
        productId: product._id,
        productName: product.name,
        description: product.description,
        brand: product.brand,
        category: product.category,
        image: product.image,
        price: product.price,
        discountPrice: product.discountPrice,
        userName: "Sujan",
        userEmail: "sujanckz926@gmail.com",
      };

      const res = await axiosSecure.post("/cart", cartItem);
      if (res.data.insertedId) {
        toast.success(`${product.name} Added to cart!`);
      } else {
        toast.error(`${product.name} Failed to add!`);
      }
    } catch (error) {
      toast.error("Add to Cart Error:", error);
    }
  };

  if (isLoading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Popular Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-base-200 shadow-md rounded-xl p-4 hover:shadow-xl duration-300  group"
          >
            <Link to={`/products/details/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-md group-hover:scale-105 duration-300"
              />

              <h3 className="font-semibold text-lg mt-3">{product.name}</h3>
              <p className="text-gray-500 text-sm line-clamp-1">
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
            </Link>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={() => handleAddToCart(product)}
                className="p-3 cursor-pointer hover:text-primary rounded-full duration-200"
              >
                <IoCartOutline size={24} />
              </button>
              <Link to={`/products/buy/${product._id}`}>
                <button className="btn btn-primary rounded-lg duration-300">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
