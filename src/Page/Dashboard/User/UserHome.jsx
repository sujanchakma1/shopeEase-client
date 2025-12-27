import React from "react";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "@/Hook/UseAuth";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Page/Loading/Loading";

const UserHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  // Example: fetch cart items
  const { data: cartItems = [], isLoading: cartLoading } = useQuery({
    queryKey: ["cartItems", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?email=${user.email}`);
      return res.data;
    },
  });

  // Example: fetch orders
  const { data: orders = [], isLoading: ordersLoading } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders?email=${user.email}`);
      return res.data;
    },
  });

  if (cartLoading || ordersLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-indigo-300 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 p-6 rounded-lg shadow-md flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Welcome, {user?.displayName || "User"}!
          </h2>
          <p className="text-sm mt-1">Glad to see you back.</p>
        </div>
        <img
          src={user?.photoURL}
          alt={user?.displayName}
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
        <div
          className="group
                bg-gradient-to-br from-base-100 to-base-200
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 p-4 rounded-lg shadow text-center"
        >
          <h3 className="text-lg font-semibold text-primary">Cart Items</h3>
          <p className="text-2xl font-bold mt-2">{cartItems.length}</p>
        </div>
        <div
          className="group
                bg-gradient-to-br from-base-100 to-base-200
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 p-4 rounded-lg shadow text-center"
        >
          <h3 className="text-lg font-semibold text-primary">Orders</h3>
          <p className="text-2xl font-bold mt-2">{orders.length}</p>
        </div>
        <div
          className="group
                bg-gradient-to-br from-base-100 to-base-200
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300 p-4 rounded-lg shadow text-center"
        >
          <h3 className="text-lg font-semibold text-primary">Wishlist</h3>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/cart"
          className="flex-1 btn btn-accent py-6  rounded-lg  transition"
        >
          View Cart
        </Link>
        <Link
          to="/dashboard/orders"
          className="flex-1 btn btn-secondary py-6  rounded-lg  transition"
        >
          My Orders
        </Link>
        <Link
          to="/products"
          className="flex-1 btn btn-primary rounded-lg py-6 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-base-200 p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <p className="text-gray-500 dark:text-gray-400">
          No recent activity yet.
        </p>
      </div>
    </div>
  );
};

export default UserHome;
