import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import Loading from "@/Page/Loading/Loading";
import { Link } from "react-router";

const AdminHome = () => {
  const axiosSecure = UseAxiosSecure();

  // Fetch stats
  const { data: statsData, isLoading } = useQuery({
    queryKey: ["adminStats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/stats");
      return res.data; // expected: { totalUsers, totalOrders, totalRevenue, monthlyOrders: [{month, orders}] }
    },
  });

  if (isLoading) return <Loading />;

  const stats = [
    {
      title: "Total Users",
      value: statsData.totalUsers,
      icon: <FaUsers size={30} className="text-white" />,
    },
    {
      title: "Total Orders",
      value: statsData.totalOrders,
      icon: <FaShoppingCart size={30} className="text-white" />,
    },
    {
      title: "Total Revenue",
      value: `$${statsData.totalRevenue}`,
      icon: <FaDollarSign size={30} className="text-white" />,
    },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Welcome, Admin!</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-6 bg-primary rounded-lg shadow-lg"
          >
            <div className="bg-gray-500 p-2 rounded-full">{item.icon}</div>
            <div>
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Chart */}
      <div className="bg-base-200 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Monthly Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={statsData.monthlyOrders}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#4f46e5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Actions */}
      <div className="bg-base-200 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Quick Actions</h2>
        <div className="flex gap-4 flex-wrap">
          <Link to="/dashboard/manage-users">
            <button className="btn btn-primary rounded-lg">Manage Users</button>
          </Link>
          <Link to="/dashboard/manage-orders">
            <button className="btn btn-secondary rounded-lg">
              Manage Orders
            </button>
          </Link>
          <Link to="/dashboard/add-product">
            <button className="btn btn-accent rounded-lg">Add Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
