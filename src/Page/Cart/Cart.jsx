import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { Link } from "react-router";
import UseAuth from "@/Hook/UseAuth";
import Loading from "@/Shared/Loading";
import Swal from "sweetalert2";

const Cart = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const {
    data: cartItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cartItems", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  const deleteCart = async (id) => {
    try {
      // Confirm dialog
      const result = await Swal.fire({
        title: "Remove Item?",
        text: "Are you sure you want to remove this item from the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, remove it",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/cart/${id}`);

        if (res.data.deletedCount > 0) {
          await Swal.fire(
            "Removed!",
            "The item has been removed from your cart.",
            "success"
          );
          refetch(); // refresh cart
        } else {
          Swal.fire("Failed", "Could not remove the item.", "error");
        }
      } else {
        Swal.fire("Cancelled", "Item not removed.", "info");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">No items found in cart!</p>
      ) : (
        <div className="grid gap-6 md:gap-8">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="
              flex flex-col md:flex-row items-center justify-between gap-6
              p-6 rounded-2xl border shadow-lg
              bg-base-200 backdrop-blur-lg
              hover:shadow-2xl hover:-translate-y-1 transition-all duration-300
            "
            >
              {/* Left section */}
              <Link to={`/products/details/${item.productId}`}>
                <div className="flex items-center gap-6">
                  <div
                    className="
                  w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow
                  bg-gray-100
                "
                  >
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      {item.productName}
                    </h3>
                    <p className="text-gray-500 capitalize">{item.category}</p>

                    <p className="mt-1">
                      <span className="text-primary font-bold text-xl">
                        ৳{item.discountPrice}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>

              {/* Action buttons */}
              <div className="flex flex-col md:flex-row gap-3">
                <Link to={`/products/buy/${item.productId}`}>
                  <button
                    className="
                    px-6 py-2 rounded-lg text-white
                    bg-gradient-to-r from-blue-600 to-blue-500
                    hover:from-blue-700 hover:to-blue-600
                    shadow-sm hover:shadow-md transition
                  "
                  >
                    Order Now
                  </button>
                </Link>

                <button
                  onClick={() => deleteCart(item._id)}
                  className="
                  px-6 py-2 cursor-pointer rounded-lg text-white
                  bg-gradient-to-r from-red-600 to-red-500
                  hover:from-red-700 hover:to-red-600
                  shadow-sm hover:shadow-md transition
                "
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
