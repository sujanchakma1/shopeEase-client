import React from "react";
import UseAxiosSecure from "@/Hook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/Page/Loading/Loading";

const ManageUser = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["admin-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/users");
      return res.data;
    },
  });
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
