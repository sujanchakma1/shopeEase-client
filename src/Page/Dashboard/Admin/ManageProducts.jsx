import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "@/Page/Loading/Loading";
import { Link } from "react-router";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";

const ManageProducts = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosSecure.get("/product");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it",
    });

    if (result.isConfirmed) {
      const res = await axiosSecure.delete(`/products/${id}`);
      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Product has been removed.", "success");
        refetch();
      }
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Products</h2>
      {products.length === 0 ? (
        <p className="text-gray-600 text-center">No Product found.</p>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-xl shadow">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover"
                    />
                  </td>

                  <td className="font-medium">{item.name}</td>
                  <td>{item.category}</td>
                  <td>
                    {item.discountPrice ? (
                      <span className="text-primary font-semibold">
                        ৳{item.discountPrice}
                      </span>
                    ) : (
                      `৳${item.price}`
                    )}
                  </td>

                  <td>{item.stock}</td>

                  <td className="flex gap-2">
                    <Link
                      to={`/dashboard/update-product/${item._id}`}
                      className="btn btn-sm btn-secondary"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </button>
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

export default ManageProducts;
