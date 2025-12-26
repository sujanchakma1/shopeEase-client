import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const UseUserRole = () => {
  const { user,loading } = UseAuth();
  const axiosSecure = UseAxiosSecure()

  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role?email=${user?.email}`);
      return res.data.role;
    },
  });

  return { role, isLoading,loading };
};

export default UseUserRole;
