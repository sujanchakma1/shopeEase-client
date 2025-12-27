import React from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import UseAuth from "@/Hook/UseAuth";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TiCancelOutline } from "react-icons/ti";
import Loading from "@/Page/Loading/Loading";


const Orders = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();

  const {
    data: orders = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/order?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isPending) return <Loading />;

  const cancelOrder = async (orderId) => {
    try {
      // Confirm dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you want to cancel this order?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, cancel it!",
        cancelButtonText: "No, keep it",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/order/${orderId}`);
        if (res.data.deletedCount > 0) {
          Swal.fire("Cancelled!", "Your order has been cancelled.", "success");
          refetch(); // re-fetch orders
        } else {
          Swal.fire("Failed!", "Failed to cancel the order.", "error");
        }
      } else if (result.isDismissed) {
        Swal.fire("Cancelled", "Your order is safe.", "info");
      }
    } catch (err) {
      console.error("Cancel failed:", err);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  const statusBadge = (status) => {
    switch (status) {
      case "Paid":
        return (
          <span className="px-3 py-1 text-sm rounded-full bg-green-200 text-green-800">
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="px-3 py-1 text-sm rounded-full bg-yellow-200 text-yellow-800">
            Pending
          </span>
        );
      default:
        return (
          <span className="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

      {orders.length === 0 && <p className="text-gray-600 text-center">No orders found.</p>}

      <div className="overflow-x-auto shadow rounded-lg">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Total Price</th>
              <th>Quantity</th>
              <th>Payment</th>
              <th>Confirmation</th>
              <th>Date</th>
              <th>Pay Now</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>

                <td>
                  <Link
                    to={`/products/details/${order.productId}`}
                    className="text-blue-500 underline"
                  >
                    View Product
                  </Link>
                </td>

                <td>৳{order.totalPrice}</td>
                <td>{order.quantity}</td>

                <td>{statusBadge(order.payment_status)}</td>
                <td>{statusBadge(order.confirmation_status)}</td>

                <td>{new Date(order.date).toLocaleString()}</td>

                <td className="flex gap-2">
                  {order.payment_status === "Paid" ? (
                    <button disabled className="btn btn-sm btn-disabled">
                      Paid
                    </button>
                  ) : (
                    <>
                      <Link to={`/dashboard/payments/${order._id}`}>
                        <button className="btn btn-sm  btn-primary">
                          <FaMoneyCheckAlt />
                          Pay
                        </button>
                      </Link>
                      <button
                        className="btn btn-sm btn-error text-white"
                        onClick={() => cancelOrder(order._id)}
                      >
                        <TiCancelOutline size={18} />
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
