import React from "react";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/Page/Loading/Loading";
import Swal from "sweetalert2";

const ManageUser = () => {
  const axiosSecure = UseAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });

  // make admin
  const handleMakeAdmin = async (user) => {
    const result = await Swal.fire({
      title: "Make Admin?",
      text: `${user.name || "This user"} will get admin access`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, make admin",
    });

    if (!result.isConfirmed) return;

    const res = await axiosSecure.patch(`/admin/users/${user._id}`);
    if (res.data.modifiedCount > 0) {
      Swal.fire("Success", "User promoted to admin", "success");
      refetch();
    }
  };

  // delete user
  const handleDeleteUser = async (user) => {
    const result = await Swal.fire({
      title: "Delete User?",
      text: "This action cannot be undone",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (!result.isConfirmed) return;

    const res = await axiosSecure.delete(`/admin/users/${user._id}`);
    if (res.data.deletedCount > 0) {
      Swal.fire("Deleted", "User removed successfully", "success");
      refetch();
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        Manage Users ({users.length})
      </h2>

      <div className="overflow-x-auto bg-base-100 shadow rounded-lg">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} alt="user" />
                    </div>
                  </div>
                  <span className="font-medium">{user.name || "No Name"}</span>
                </td>

                <td>{user.email}</td>

                <td>
                  <span
                    className={`badge ${
                      user.role === "admin" ? "badge-primary" : "badge-ghost"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    disabled={user.role === "admin"}
                    className="btn btn-xs btn-success"
                  >
                    Make Admin
                  </button>

                  <button
                    onClick={() => handleDeleteUser(user)}
                    disabled={user.role === "admin"}
                    className="btn btn-xs btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
