import UseAuth from "@/Hook/UseAuth";
import useUserRole from "@/Hook/UserRole";
import Loading from "@/Page/Loading/Loading";
import { Navigate, useLocation } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const { role, isLoading } = useUserRole();
  const location = useLocation();

  if (loading || isLoading) return <Loading />;

  if (!user || role !== "admin") {
    return <Navigate state={location.pathname} to="/forbidden" replace ></Navigate>;
  }

  return children;
};

export default AdminRoute;
