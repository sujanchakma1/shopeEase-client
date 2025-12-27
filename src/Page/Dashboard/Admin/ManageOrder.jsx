import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "@/Page/Loading/Loading";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";

const ManageOrder = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosSecure.get("/orders");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  const handleConfirm = async (id) => {
    const res = await axiosSecure.patch(`/order/confirm/${id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire("Confirmed!", "Order has been accepted", "success");
      refetch();
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Delete this order?",
      text: "Unpaid orders should not be kept.",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (confirm.isConfirmed) {
      const res = await axiosSecure.delete(`/order/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Order removed successfully.", "success");
        refetch()
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Orders</h2>
      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-base-100 p-6 rounded-xl shadow">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>Customer</th>
                <th>Email</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Confirmation</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.customer_name}</td>
                  <td>{order.customer_email}</td>
                  <td>৳{order.totalPrice}</td>

                  <td>
                    <span
                      className={`badge ${
                        order.payment_status === "paid"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {order.payment_status}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        order.confirmation_status === "confirmed"
                          ? "badge-success"
                          : "badge-info"
                      }`}
                    >
                      {order.confirmation_status}
                    </span>
                  </td>

                  <td className="space-x-2">
                    {order.payment_status === "Paid" && (
                      <button
                        onClick={() => handleConfirm(order._id)}
                        disabled={order.confirmation_status === "confirmed"}
                        className="btn btn-xs btn-primary"
                      >
                        Accept
                      </button>
                    )}

                    {order.payment_status === "pending" && (
                      <button
                        onClick={() => handleDelete(order._id)}
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageOrder;
